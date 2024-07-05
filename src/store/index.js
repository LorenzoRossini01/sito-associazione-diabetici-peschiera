import { reactive, ref } from "vue";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// const auth = getAuth();
// const isAuthenticated = ref(false);

// // Ascolta i cambi di stato dell'utente
// onAuthStateChanged(auth, (user) => {
//   isAuthenticated.value = !!user; // Imposta isAuthenticated a true se l'utente è autenticato
// });

export const store = reactive({
  isAuthenticated: false,
});
