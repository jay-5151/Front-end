// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPWB516_4qGrNtiwfhwnxX9L78QypeuZ4",
  authDomain: "product-862ff.firebaseapp.com",
  projectId: "product-862ff",
  storageBucket: "product-862ff.firebasestorage.app",
  messagingSenderId: "636620909194",
  appId: "1:636620909194:web:b86741e60fd4bcacafdb73",
  measurementId: "G-Z0GHRWJ2KZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);