<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

// import { db } from "./firebase";

export default {
  components: {
    AppHeader,
    AppFooter,
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
