<template>
  <div class="h-screen">
    <CreateEvent />
  </div>
</template>

<script>
import CreateEvent from "../components/CreateEvent.vue";
import LoginPage from "./LoginPage.vue";
import { store } from "../store/index.js";

export default {
  name: "AddEvent",

  components: {
    CreateEvent,
  },

  created() {
    if (!store.user) {
      this.$router.push("/login");
    }
  },
};
</script>

<style scoped></style>
