// Import the functions you need from the SDKs you need
import firebase from "firebase/app"; // Import only the app module from Firebase
import "firebase/auth"; // Import additional modules as needed
import "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtUWO_ofLV2qui65PpJb2ksOh2AVHMLuY",
  authDomain: "sito-associazione-diabetici.firebaseapp.com",
  projectId: "sito-associazione-diabetici",
  storageBucket: "sito-associazione-diabetici.appspot.com",
  messagingSenderId: "377335993570",
  appId: "1:377335993570:web:3014311bdd83970b21babb",
  measurementId: "G-CWYG1YCK25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebase;
