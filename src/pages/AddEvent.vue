<template>
  <div class="h-screen">
    <CreateEvent />
  </div>
</template>

<script>
import CreateEvent from "../components/CreateEvent.vue";
export default {
  name: "AddEvent",

  components: {
    CreateEvent,
  },
};
</script>

<style scoped></style>
