// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARSwaRjRaXS3qPi38MA2Bcgcgh8QqAjcg",
  authDomain: "netflixgpt-69ccb.firebaseapp.com",
  projectId: "netflixgpt-69ccb",
  storageBucket: "netflixgpt-69ccb.firebasestorage.app",
  messagingSenderId: "687367038961",
  appId: "1:687367038961:web:5cf648b36259d4da0b4650",
  measurementId: "G-4QHM3G59S9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);