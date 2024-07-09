<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import { store } from "./store/index.js";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppHeader,
    AppFooter,
  },

  created() {
    // Controlla se ci sono informazioni di sessione salvate nel localStorage al caricamento del componente
    let storedSession = localStorage.getItem("supabaseSession");
    if (storedSession) {
      this.store.isAuthenticated = true;
    }
  },
};
</script>

<template>
  <AppHeader />
  <main class="h-100%">
    <router-view></router-view>
  </main>
  <AppFooter />
</template>

<style></style>
