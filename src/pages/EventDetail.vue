<template>
  <div>
    <div
      v-if="loading"
      class="loader-container flex flex-col justify-center items-center"
    >
      <div class="loader"></div>
      <p>Loading...</p>
    </div>
    <div v-else class="container mx-auto">
      <div
        class="event-background w-full flex justify-center items-center"
        :style="{
          backgroundImage: event.image
            ? `url(${event.image})`
            : `url('https://placehold.co/600x400')`,
        }"
      >
        <h1
          class="text-6xl font-bold py-20 px-8 w-full text-invert bg-[#ffffff70] backdrop-blur-sm shadow-2xl"
        >
          {{ event.title }}
        </h1>
      </div>
      <h2 class="text-2xl font-bold px-8 pt-8 pb-4">Dettagli dell'evento</h2>
      <div class="container flex pb-8">
        <div class="content w-1/2 px-8">
          <div class="datetime flex justify-between">
            <p class="text-gray-600 text-lg">
              Data: {{ store.getDate(event.date) }}
            </p>
            <p class="text-gray-600 text-lg">
              Ora: {{ store.getTime(event.time) }}
            </p>
          </div>
          <img
            :src="event.image ? event.image : 'https://placehold.co/600x400'"
            alt=""
            class="mt-4 rounded-md w-full"
          />
          <p class="mt-4">{{ event.description }}</p>
        </div>
        <div class="content-right w-1/2 px-8">
          <div class="place">
            <p class="text-gray-600">Luogo: {{ event.place }}</p>
          </div>
          <div class="card-footer mt-auto pt-4">
            <div class="flex gap-4">
              <AppButton
                type="primary"
                text="Modifica"
                @click="editEvent(event.id)"
                v-if="store.user"
              />
              <AppButton
                type="secondary"
                text="Elimina"
                @click="deleteEvent(event.id)"
                v-if="store.user"
              />
              <AppButton type="primary" text="Partecipa" v-if="!store.user" />
            </div>
            <p v-if="!isFutureDate(event.date)" class="text-gray-600 text-md">
              L'evento è già terminato
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "../components/AppButton.vue";
import supabase from "../lib/supabaseClient.js";
import { store } from "../store/index.js";

export default {
  name: "EventDetail",
  data() {
    return {
      event: null,
      loading: false,
      store,
    };
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
    async fetchCurrentEvent(id) {
      try {
        this.loading = true;
        const { data: event, error } = await supabase
          .from("event")
          .select("*")
          .eq("id", id)
          .single();
        if (error) {
          throw error;
        }
        this.event = event;
        this.event.time = store.getTime(this.event.time);
      } catch (error) {
        console.error("Error fetching event:", error.message);
      } finally {
        this.loading = false;
      }
    },

    async editEvent(eventId) {
      try {
        // Implementazione della logica per l'aggiornamento dell'evento
        // In questo esempio, potresti reindirizzare l'utente a una pagina di modifica dell'evento
        this.$router.push(`/edit-event/${eventId}`);
      } catch (error) {
        console.error("Error editing event:", error.message);
      }
    },
    async deleteEvent(eventId) {
      try {
        const { data, error } = await supabase
          .from("event")
          .delete()
          .eq("id", eventId);

        if (error) {
          throw error;
        }

        console.log("Event deleted:", data);
        // Implementa la logica per gestire il completamento dell'eliminazione
        // In questo esempio, potresti reindirizzare l'utente a una pagina di lista eventi
        this.$router.push("/");
      } catch (error) {
        console.error("Error deleting event:", error.message);
      }
    },
  },
  created() {
    this.fetchCurrentEvent(this.$route.params.id);
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
}

.event-background {
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
