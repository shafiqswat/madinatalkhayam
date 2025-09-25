/** @format */
"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { useUser } from "../../src/Context/userContext";
import { usePosts } from "../../src/Context/postContext";
import { uploadToCloudinary } from "../../src/helpers/cloudinary";

export default function AdminPage() {
  const { isOwner, user, loginOwner, logout, loading } = useUser();
  const { createPost } = usePosts();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");

  const [imageFile, setImageFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await loginOwner(email, password);
    } catch (err) {
      setError(err?.message || "Login failed");
    }
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!imageFile) {
      setError("الرجاء اختيار صورة");
      return;
    }
    try {
      setSubmitting(true);
      const imageUrl = await uploadToCloudinary(imageFile);
      await createPost({ title, span: "", description: "", imageUrl });
      setTitle("");
      setImageFile(null);
      setSuccess("تم إنشاء المنشور بنجاح");
    } catch (err) {
      setError(err?.message || "فشل إنشاء المنشور");
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOwner) {
    return (
      <Container>
        <h2>تسجيل دخول المالك</h2>
        <form onSubmit={handleLogin}>
          <Label>البريد الإلكتروني</Label>
          <Input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='owner@example.com'
            required
          />
          <Label>كلمة المرور</Label>
          <Input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <ErrorMsg role='alert'>{error}</ErrorMsg>}
          <Button
            type='submit'
            disabled={loading}>
            {loading ? "جارٍ الدخول..." : "دخول"}
          </Button>
        </form>
      </Container>
    );
  }

  return (
    <Container>
      <HeaderBar>
        <strong>لوحة التحكم</strong>
        <div>
          <span>{user?.email}</span>
          <Button
            type='button'
            onClick={logout}
            style={{ marginInlineStart: 12 }}>
            خروج
          </Button>
        </div>
      </HeaderBar>

      <Section>
        <h3>إنشاء منشور</h3>
        <form onSubmit={handleCreatePost}>
          <Label>العنوان</Label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Label>الصورة</Label>
          <Input
            type='file'
            accept='image/*'
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
          />
          {error && <ErrorMsg role='alert'>{error}</ErrorMsg>}
          {success && <SuccessMsg role='status'>{success}</SuccessMsg>}
          <Button
            type='submit'
            disabled={submitting}>
            {submitting ? "جارٍ الحفظ..." : "حفظ"}
          </Button>
        </form>
      </Section>
    </Container>
  );
}

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Section = styled.section`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 16px;
`;

const Label = styled.label`
  display: block;
  margin: 8px 0 4px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const Button = styled.button`
  margin-top: 12px;
  padding: 8px 16px;
  border: none;
  background: #8e003b;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
`;

const ErrorMsg = styled.div`
  color: #b00020;
  margin-top: 8px;
`;

const SuccessMsg = styled.div`
  color: #0b8f2e;
  margin-top: 8px;
`;
