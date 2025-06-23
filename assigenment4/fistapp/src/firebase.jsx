// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAdHc2JkgyXttIzCUINvO24oOTge-LiMc",
  authDomain: "assigenment3.firebaseapp.com",
  projectId: "assigenment3",
  storageBucket: "assigenment3.firebasestorage.app",
  messagingSenderId: "490846689223",
  appId: "1:490846689223:web:c1fdb98fd3563a6036abe2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Fixed Firestore initialization

export { db };
