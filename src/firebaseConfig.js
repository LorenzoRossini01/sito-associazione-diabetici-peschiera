import { initializeApp } from "firebase/app";
import { store } from "./store";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import router from "./router";

// Configurazione Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAtUWO_ofLV2qui65PpJb2ksOh2AVHMLuY",
  authDomain: "sito-associazione-diabetici.firebaseapp.com",
  projectId: "sito-associazione-diabetici",
  storageBucket: "sito-associazione-diabetici.appspot.com",
  messagingSenderId: "377335993570",
  appId: "1:377335993570:web:3014311bdd83970b21babb",
  measurementId: "G-CWYG1YCK25",
};

// Inizializza Firebase
const app = initializeApp(firebaseConfig);

// Ottieni l'istanza di autenticazione
const auth = getAuth(app);

// Ascolta i cambi di stato dell'utente
onAuthStateChanged(auth, (user) => {
  if (user) {
    // L'utente è loggato
    console.log("User signed in:", user);
    store.isAuthenticated = true; // Imposta lo stato di autenticazione nel negozio Vuex o reattivo
    router.push({ name: "Home" }); // Reindirizza l'utente alla home dopo il login
  } else {
    // L'utente è disconnesso
    console.log("User signed out");
    store.isAuthenticated = false; // Imposta lo stato di autenticazione nel negozio Vuex o reattivo
    router.push({ name: "Login" }); // Reindirizza l'utente al login dopo il logout
  }
});

// Funzione per accedere con Google
const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    console.log("User signed in with Google");
  } catch (error) {
    console.error("Error signing in with Google:", error);
  }
};

// Funzione per disconnettersi
const signOutUser = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

// Funzione per registrare un nuovo utente con email e password
const registerWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User registered with email:", userCredential.user);
  } catch (error) {
    console.error("Error registering user with email:", error);
  }
};

// Funzione per accedere con email e password
const loginWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User signed in with email:", userCredential.user);
  } catch (error) {
    console.error("Error signing in with email:", error);
  }
};

export {
  app,
  auth,
  signInWithGoogle,
  signOutUser,
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
};
