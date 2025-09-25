/** @format */

import { firestore } from "../lib/firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

const POSTS_COLLECTION = "posts";

const postsCol = collection(firestore, POSTS_COLLECTION);

export const createPost = async (post) => {
  const payload = {
    title: post.title || "",
    span: post.span || "",
    imageUrl: post.imageUrl || "",
    description: post.description || "",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };
  const ref = await addDoc(postsCol, payload);
  const snapshot = await getDoc(ref);
  return { id: ref.id, ...snapshot.data() };
};

export const listPosts = async () => {
  const q = query(postsCol, orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

export const getPost = async (id) => {
  const ref = doc(firestore, POSTS_COLLECTION, id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
};

export const updatePost = async (id, updates) => {
  const ref = doc(firestore, POSTS_COLLECTION, id);
  await updateDoc(ref, { ...updates, updatedAt: serverTimestamp() });
  const snap = await getDoc(ref);
  return { id: snap.id, ...snap.data() };
};

export const deletePostById = async (id) => {
  const ref = doc(firestore, POSTS_COLLECTION, id);
  await deleteDoc(ref);
};

export default {
  createPost,
  listPosts,
  getPost,
  updatePost,
  deletePostById,
};
