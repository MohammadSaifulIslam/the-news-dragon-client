// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLOgwgGphGGW9lqtWs9MpIJVPV6x7zYSQ",
  authDomain: "the-news-dragon-7babe.firebaseapp.com",
  projectId: "the-news-dragon-7babe",
  storageBucket: "the-news-dragon-7babe.appspot.com",
  messagingSenderId: "128555297829",
  appId: "1:128555297829:web:8d1d2e2a3e23429e0a23cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;