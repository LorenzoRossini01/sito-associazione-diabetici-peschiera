<template>
  <div
    class="aspect-video w-full lg:w-auto card bg-white p-2 rounded-md shadow-lg flex flex-col"
  >
    <router-link
      :to="{
        name: 'EventDetail',
        params: {
          id: event.id,
        },
      }"
      class="card-image h-72 w-100"
    >
      <img :src="event.image" alt="" class="object-cover h-full w-full" />
    </router-link>
    <div class="card-body w-100 flex justify-between items-center pt-4">
      <h3 class="text-xl font-bold">{{ event.title }}</h3>
      <p class="text-gray-600 text-sm">{{ store.getDate(event.date) }}</p>
    </div>
    <div class="card-footer mt-auto pt-4">
      <AppButton
        type="primary"
        text="Partecipa"
        v-if="isFutureDate(event.date)"
        @click="handleParticipate(event)"
      />
      <p v-else class="text-gray-600 text-md">L'evento è già terminato</p>
    </div>
  </div>
</template>

<script>
import AppButton from "./AppButton.vue";
import { store } from "../store/index.js";

export default {
  data() {
    return {
      store,
    };
  },
  props: {
    event: {
      type: Object,
      required: true,
    },
  },

  components: {
    AppButton,
  },
  methods: {
    isFutureDate(date) {
      const eventDate = new Date(date);
      const currentDate = new Date();
      return eventDate > currentDate;
    },
    handleParticipate(event) {
      // Logica per gestire la partecipazione all'evento
      console.log("Partecipa all'evento:", event);
      // Puoi implementare qui la logica per gestire la partecipazione
    },
  },
};
</script>

<style scoped></style>
