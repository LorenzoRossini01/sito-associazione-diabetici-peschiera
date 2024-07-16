import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import VueGoogleMaps from "@fawmi/vue-google-maps";

// Inizializza l'app Vue
const app = createApp(App);

// Usa il router
app.use(router);

app.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBU8kdhaFmcTMg7oo3kbB8dUTrEu3W9tnY",
    libraries: "places",
  },
});

// Monta l'app
app.mount("#app");
