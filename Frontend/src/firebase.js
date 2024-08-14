// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-8f4fb.firebaseapp.com",
  projectId: "blog-app-8f4fb",
  storageBucket: "blog-app-8f4fb.appspot.com",
  messagingSenderId: "5038167023",
  appId: "1:5038167023:web:d6759e421004b8d1551c1a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);