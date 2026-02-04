import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhwpyF8qdkOnXvDeYevNSneUXKMyoh9VQ",
  authDomain: "phone-98cc1.firebaseapp.com",
  projectId: "phone-98cc1",
  storageBucket: "phone-98cc1.appspot.com", 
  messagingSenderId: "931704141785",
  appId: "1:931704141785:web:b5a7995b9d7eea14f40bc8",
};

const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
