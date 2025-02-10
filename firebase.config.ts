// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXKYE5J4xtqe7nEL0Msb_hQYtQKjGgfhM",
  authDomain: "expgo-b23ec.firebaseapp.com",
  projectId: "expgo-b23ec",
  storageBucket: "expgo-b23ec.firebasestorage.app",
  messagingSenderId: "543417508855",
  appId: "1:543417508855:web:ccfcffad3568e7a97844f2"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);