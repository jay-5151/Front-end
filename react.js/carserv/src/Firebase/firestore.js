// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApKoMHTjwGLplufx2Q444Co9av3AIXhac",
  authDomain: "caar-5cbe4.firebaseapp.com",
  projectId: "caar-5cbe4",
  storageBucket: "caar-5cbe4.firebasestorage.app",
  messagingSenderId: "205886956710",
  appId: "1:205886956710:web:09caa1fac6284cc7500067",
  measurementId: "G-NKJPTQQZ5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)