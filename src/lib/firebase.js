import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY ,
  authDomain: "reactchat-d9621.firebaseapp.com",
  projectId: "reactchat-d9621",
  storageBucket: "reactchat-d9621.appspot.com",
  messagingSenderId: "533599262551",
  appId: "1:533599262551:web:c4cf7c7001b3fcddfb1012"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();