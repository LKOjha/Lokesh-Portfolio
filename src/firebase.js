// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // ✅ Required
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD5IinCk_-M1dN-rh890PvsTBH1cMrJbdY",
  authDomain: "lokesh-portfolio-3aabb.firebaseapp.com",
  projectId: "lokesh-portfolio-3aabb",
  storageBucket: "lokesh-portfolio-3aabb.appspot.com", // ✅ fixed ".app" to ".appspot.com"
  messagingSenderId: "491944989547",
  appId: "1:491944989547:web:098eba739b11e7c894722e",
  measurementId: "G-MG4TH2MGG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // ✅ Firestore initialization

export { db }; // ✅ export this to use in your components
