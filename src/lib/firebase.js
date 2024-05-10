import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatapp-411a5.firebaseapp.com",
  projectId: "reactchatapp-411a5",
  storageBucket: "reactchatapp-411a5.appspot.com",
  messagingSenderId: "444226617433",
  appId: "1:444226617433:web:313a8fa3f41c00c6483148"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()