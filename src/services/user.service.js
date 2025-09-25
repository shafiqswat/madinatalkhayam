/** @format */

import { auth } from "../lib/firebaseConfig";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const OWNER_EMAIL = process.env.NEXT_PUBLIC_OWNER_EMAIL;

export const isOwner = (user) => {
  if (!user) return false;
  return !!OWNER_EMAIL && user.email === OWNER_EMAIL;
};

export const signInOwner = async (email, password) => {
  const credential = await signInWithEmailAndPassword(auth, email, password);
  const user = credential.user;
  if (!isOwner(user)) {
    // Immediately sign out non-owner accounts for safety
    await signOut(auth);
    const error = new Error("Unauthorized: Not the site owner");
    error.code = "auth/not-owner";
    throw error;
  }
  return user;
};

export const signOutUser = async () => {
  await signOut(auth);
};

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = () => auth.currentUser;

export default {
  isOwner,
  signInOwner,
  signOutUser,
  onAuthStateChangedListener,
  getCurrentUser,
};
