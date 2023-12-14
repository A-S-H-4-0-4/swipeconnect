// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPP9wfbD9J2jmV10RV1YDHHPcHHb2yd10",
  authDomain: "swipeconnect-38f94.firebaseapp.com",
  projectId: "swipeconnect-38f94",
  storageBucket: "swipeconnect-38f94.appspot.com",
  messagingSenderId: "806769229133",
  appId: "1:806769229133:web:57b9d313619311c144cb04",
  measurementId: "G-NQLPZYEN7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);