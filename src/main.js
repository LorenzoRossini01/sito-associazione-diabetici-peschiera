import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

// Inizializza l'app Vue
const app = createApp(App);

// Usa il router
app.use(router);

// Monta l'app
app.mount("#app");
