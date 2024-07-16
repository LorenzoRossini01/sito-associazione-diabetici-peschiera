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

  computed: {},

  created() {
    // Controlla se ci sono informazioni di sessione salvate nel localStorage al caricamento del componente
    let storedSession = localStorage.getItem("supabaseSession");
    if (storedSession) {
      this.store.isAuthenticated = true;
    }

    if (localStorage.getItem("user")) {
      this.store.user = localStorage.getItem("user");
    }

    console.log(this.user);
  },
};
</script>

<template>
  <AppHeader />
  <main>
    <router-view></router-view>
  </main>
  <AppFooter />
</template>

<style></style>
