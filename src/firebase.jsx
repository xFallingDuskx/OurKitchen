// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf8OD5-S7Lte8q-Hu9fhccCK1bVLmIAYc",
  authDomain: "yourkitchen-a083c.firebaseapp.com",
  projectId: "yourkitchen-a083c",
  storageBucket: "yourkitchen-a083c.appspot.com",
  messagingSenderId: "855483488337",
  appId: "1:855483488337:web:152d088e092e4ed36cc070",
  measurementId: "G-5BVC0K5Y49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
