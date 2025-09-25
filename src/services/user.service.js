/** @format */

import { auth } from "../lib/firebaseConfig";

const OWNER_EMAIL = process.env.NEXT_PUBLIC_OWNER_EMAIL;

export const isOwner = (user) => {
  if (!user) return false;
  return !!OWNER_EMAIL && user.email === OWNER_EMAIL;
};

export const signInOwner = async (email, password) => {
  if (!auth) throw new Error("Auth is not available in this environment");
  const { signInWithEmailAndPassword } = await import("firebase/auth");
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
  if (!auth) return;
  const { signOut } = await import("firebase/auth");
  await signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
  if (!auth) return () => {};
  // Dynamically import so that firebase/auth is not bundled when disabled
  return import("firebase/auth").then(({ onAuthStateChanged }) =>
    onAuthStateChanged(auth, callback)
  );
};

export const getCurrentUser = () => (auth ? auth.currentUser : null);

export default {
  isOwner,
  signInOwner,
  signOutUser,
  onAuthStateChangedListener,
  getCurrentUser,
};
