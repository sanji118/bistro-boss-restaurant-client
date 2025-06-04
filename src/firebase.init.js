// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.REACT_FIREBASE_API_KEY,
  authDomain: import.meta.REACT_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.REACT_FIREBASE_PROJECT_ID,
  storageBucket:import.meta.REACT_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.REACT_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.REACT_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;