// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm0ejjlrwku8NRuYgnKn0d_bmyj9IhPEE",
  authDomain: "mynetflix-63f35.firebaseapp.com",
  projectId: "mynetflix-63f35",
  storageBucket: "mynetflix-63f35.appspot.com",
  messagingSenderId: "602791751042",
  appId: "1:602791751042:web:62105539619d5d631ff39b",
  measurementId: "G-MZXPWFY90R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
