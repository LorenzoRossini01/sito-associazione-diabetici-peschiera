import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { app as firebaseApp } from "./firebaseConfig"; // Importa l'app Firebase

// Inizializza l'app Vue
const app = createApp(App);

// Usa il router
app.use(router);

// Monta l'app
app.mount("#app");

// Ora hai accesso a `firebaseApp` nel caso in cui tu abbia bisogno di usarlo
console.log("Firebase App initialized:", firebaseApp);
