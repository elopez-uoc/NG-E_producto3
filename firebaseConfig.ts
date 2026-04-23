import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7i_V7VbK1JQsOIt3hzn_kTByhmhHXj3w",
  authDomain: "nge-producto2.firebaseapp.com",
  projectId: "nge-producto2",
  storageBucket: "nge-producto2.firebasestorage.app",
  messagingSenderId: "937779816336",
  appId: "1:937779816336:web:0fba72d7fd3235a7d53515",
  measurementId: "G-2QLSF19JES"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
export default app;
