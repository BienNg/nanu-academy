// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_sCDzlOxuuXkj54XpAwmSTwwRUU3w0Ts",
  authDomain: "nanunana-academy.firebaseapp.com",
  projectId: "nanunana-academy",
  storageBucket: "nanunana-academy.firebasestorage.app",
  messagingSenderId: "143678686734",
  appId: "1:143678686734:web:0d8c209613ca6466215e5f",
  measurementId: "G-VKSFKWFC8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);