<template>
  <footer class="bg-blue-600 mt-8">
    <div class="container px-8 py-8 text-white">
      <div class="title mb-4">
        <h3 class="font-semibold">SEZIONI PRINCIPALI</h3>
      </div>
      <ul>
        <li><a href="#about" class="hover:underline">Chi siamo?</a></li>
        <li><a href="#join" class="hover:underline">Perché associarsi?</a></li>
        <li><a href="#events" class="hover:underline">Eventi</a></li>
        <li><a href="#contacts" class="hover:underline">Contatti</a></li>
        <li v-if="store.isAuthenticated">
          <router-link to="/create-event" class="hover:underline"
            >Aggiungi Eventi</router-link
          >
        </li>
        <li v-if="!store.isAuthenticated">
          <router-link to="/login" class="hover:underline">Accedi</router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { store } from "../store/index.js";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<style scoped>
/* Stili specifici per il footer */
</style>
