// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo7YXKyIzJL4Rg5BmCC2YgRvL3KEm26rc",
  authDomain: "tasktracker-1fe2c.firebaseapp.com",
  projectId: "tasktracker-1fe2c",
  storageBucket: "tasktracker-1fe2c.appspot.com", // Fixed storage bucket URL
  messagingSenderId: "305999700162",
  appId: "1:305999700162:web:e6f1e06a807f533c119b5b",
  measurementId: "G-S6QCXFSNHJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Fixed Firestore initialization

export { db };
