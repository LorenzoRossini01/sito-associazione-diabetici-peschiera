<template>
  <div class="container mx-auto mt-8">
    <div
      class="event-background w-full flex justify-center items-center"
      :style="{ backgroundImage: `url(${event.image})` }"
    >
      <h1
        class="text-6xl font-bold py-20 px-8 w-full text-invert bg-[#ffffff70] backdrop-blur-sm shadow-2xl"
      >
        {{ event.title }}
      </h1>
    </div>
    <h2 class="text-2xl font-bold px-8 pt-8 pb-4">Dettagli dell'evento</h2>
    <div class="container flex">
      <div class="content w-1/2 px-8">
        <div class="datetime flex justify-between">
          <p class="text-gray-600 text-lg">Data: {{ event.date }}</p>
          <p class="text-gray-600 text-lg">Ora: {{ event.time }}</p>
        </div>
        <img :src="event.image" alt="" class="mt-4 rounded-md w-full" />
        <p class="mt-4">{{ event.description }}</p>
      </div>
      <div class="content-right w-1/2 px-8">
        <div class="place">
          <p class="text-gray-600">Luogo: {{ event.place }}</p>
          <div class="map py-32 bg-stone-600 mt-4 rounded-md w-full"></div>
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
    </div>
  </div>
</template>

<script>
import { eventData } from "../data/eventData.js";
import AppButton from "../components/AppButton.vue";

export default {
  name: "EventDetail",
  computed: {
    event() {
      return eventData.find(
        (event) => event.id === parseInt(this.$route.params.id)
      );
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
  },
};
</script>

<style scoped>
.container {
  width: 100%; /* Imposta la larghezza al 100% della larghezza disponibile */
  max-width: 100%; /* Garantisce che la larghezza massima sia al massimo della larghezza disponibile */
  margin: 0 auto;
}

.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: -100px; /* Regola come necessario in base al design */
}

.event-background {
  width: 100%;
  height: 500px; /* Regola l'altezza come necessario */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
