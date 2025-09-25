/** @format */

// lib/firebaseConfig.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Messaging is disabled for now to avoid initializing Installations when not needed

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize app once, avoid issues during SSR/SSG
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Feature-flag Auth: disabled by default for Vercel deployment using only Firestore
const enableAuth = process.env.NEXT_PUBLIC_ENABLE_AUTH === "true";
export const auth =
  typeof window !== "undefined" && enableAuth ? getAuth(app) : null;

// Accessing Firestore on the server with the web SDK is not required during build
// Consumers should import and use in client contexts only
export const firestore =
  typeof window !== "undefined" ? getFirestore(app) : null;

// Messaging intentionally not initialized to prevent Installations from running
export default app;
