// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAggZ0v73FNFBm79jT02-32NdyXAYcIKPE",
  authDomain: "netflixgpt-50977.firebaseapp.com",
  projectId: "netflixgpt-50977",
  storageBucket: "netflixgpt-50977.firebasestorage.app",
  messagingSenderId: "938944115295",
  appId: "1:938944115295:web:225fb6d1a6a77f9042a1ea",
  measurementId: "G-GQQJBW3HCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();