// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV6k8Qi1Ke4KBf4R9OxeGEhNY8sP-Xc4A",
  authDomain: "bistro-boss-restaurant-c-65891.firebaseapp.com",
  projectId: "bistro-boss-restaurant-c-65891",
  storageBucket: "bistro-boss-restaurant-c-65891.firebasestorage.app",
  messagingSenderId: "875058235234",
  appId: "1:875058235234:web:96b357f056c640baa00e3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;