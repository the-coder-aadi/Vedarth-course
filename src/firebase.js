// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vedarth-academy.firebaseapp.com",
  projectId: "vedarth-academy",
  storageBucket: "vedarth-academy.firebasestorage.app",
  messagingSenderId: "124185428707",
  appId: "1:124185428707:web:513f6f8522f4a0c39d7bd6"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);