<template>
  <div>
    <!-- Loading Spinner -->
    <div
      v-if="loading"
      class="loader-container flex flex-col justify-center items-center absolute bottom-0 left-0 right-0 top-0 bg-white z-20 h-screen"
    >
      <div class="loader"></div>
      <p>Loading...</p>
    </div>
    <h2
      class="text-3xl lg:text-6xl font-extrabold pb-8 text-center text-blue-600 uppercase"
    >
      {{ isEditing ? "Modifica Evento" : "Aggiungi un nuovo evento" }}
    </h2>

    <form @submit.prevent="handleSubmit" class="p-8">
      <div class="w-100% lg:h-[25rem] flex flex-col lg:flex-row gap-8 mb-8">
        <div
          class="left w-full lg:w-1/2 gap-4 bg-white p-8 rounded-md shadow-lg flex flex-col"
        >
          <div class="col flex">
            <!-- titolo -->
            <label class="block w-full">
              <span class="block text-sm font-medium text-slate-700"
                >Titolo Evento</span
              >
              <input
                v-model="newEvent.title"
                type="text"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                required
              />
            </label>
          </div>
          <div class="col flex gap-4">
            <!-- data  -->
            <label class="block w-full">
              <span class="block text-sm font-medium text-slate-700"
                >Data Evento</span
              >
              <input
                v-model="newEvent.date"
                type="date"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                required
              />
            </label>
            <!-- ora  -->
            <label class="block w-full">
              <span class="block text-sm font-medium text-slate-700"
                >Ora Evento</span
              >
              <input
                v-model="newEvent.time"
                type="time"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                required
              />
            </label>
          </div>
          <div class="col flex">
            <!-- luogo  -->
            <label class="block w-full">
              <span class="block text-sm font-medium text-slate-700"
                >Luogo</span
              >
              <input
                ref="autocomplete"
                v-model="newEvent.place"
                type="text"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                required
              />
            </label>
          </div>

          <div class="col flex">
            <!-- descrizione  -->
            <label class="block w-full">
              <span class="block text-sm font-medium text-slate-700"
                >Descrizione</span
              >
              <textarea
                v-model="newEvent.description"
                type="text"
                rows="3"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                required
              ></textarea>
            </label>
          </div>
        </div>

        <div
          class="right w-full lg:w-1/2 h-[20rem] lg:h-full bg-white p-2 rounded-md shadow-lg flex"
        >
          <div class="img-col w-full min-h-full relative">
            <!-- immagine  -->
            <label
              class="block text-center border-blue-400 z-10 hover:bg-blue-100 backdrop-blur-3xl border-4 px-8 py-4 rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            >
              <span class="block w-full h-100% text-sm font-bold text-blue-400"
                >Aggiungi un'immagine</span
              >

              <input type="file" class="hidden" @change="handleImageUpload" />
            </label>
            <img
              v-if="newEvent.image"
              :src="newEvent.image"
              alt="Event Image"
              class="rounded-md object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <div class="controls flex gap-8">
        <!-- bottoni  -->
        <AppButton text="Reset" type="reset" class="w-1/2" @click="resetForm" />
        <AppButton
          :text="isEditing ? 'Aggiorna evento' : 'Salva evento'"
          type="primary"
          class="w-1/2"
        />
      </div>
    </form>
  </div>
</template>

<script>
import AppButton from "./AppButton.vue";
import supabase from "../lib/supabaseClient.js";

export default {
  props: {
    isEditing: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    AppButton,
  },
  data() {
    return {
      newEvent: {
        title: "",
        description: "",
        date: "",
        time: "",
        place: "",
        image: "",
      },
      loading: false, // Aggiunto stato per controllare lo stato di caricamento
      googleMapsLoaded: false, // Aggiunto stato per controllare se Google Maps è stato caricato
    };
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.newEvent.image = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    resetForm() {
      this.newEvent = {
        title: "",
        description: "",
        date: "",
        time: "",
        place: "",
        image: "",
      };
    },
    async createEvent() {
      this.loading = true;
      try {
        const { data, error } = await supabase
          .from("event")
          .insert(this.newEvent);

        if (error) {
          throw error;
        }

        console.log("Event created:", data);
        this.resetForm();
        this.$router.push("/");
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.error("Error creating event:", error.message);
      }
    },
    async updateEvent() {
      this.loading = true;

      try {
        const { data, error } = await supabase
          .from("event")
          .update(this.newEvent)
          .eq("id", this.newEvent.id);
        this.loading = false;

        if (error) {
          this.loading = false;

          throw error;
        }

        console.log("Event updated:", data);
        this.$router.push("/");
      } catch (error) {
        console.error("Error updating event:", error.message);
      }
    },
    handleSubmit() {
      if (this.isEditing) {
        this.updateEvent();
      } else {
        this.createEvent();
      }
    },
    async fetchEventData(id) {
      this.loading = true;
      try {
        const { data, error } = await supabase
          .from("event")
          .select("*")
          .eq("id", id)
          .single();
        this.loading = false;

        if (error) {
          this.loading = false;
          throw error;
        }

        this.newEvent = data;
      } catch (error) {
        console.error("Error fetching event data:", error.message);
      }
    },
    initAutocomplete() {
      if (!this.googleMapsLoaded) return; // Esce se Google Maps non è ancora caricato completamente

      const input = this.$refs.autocomplete;
      const autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        this.newEvent.place = place.formatted_address;
        let latitude = place.geometry.location.lat();
        let longitude = place.geometry.location.lng();
        console.log(latitude, longitude);
        console.log(place);
      });
    },
    loadGoogleMapsScript() {
      if (this.googleMapsLoaded) return; // Esce se Google Maps è già stato caricato

      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBU8kdhaFmcTMg7oo3kbB8dUTrEu3W9tnY&libraries=places`;
      script.onload = () => {
        this.googleMapsLoaded = true; // Imposta il flag a true quando il caricamento è completato
        this.initAutocomplete(); // Inizializza l'autocompletamento dopo il caricamento
      };
      document.head.appendChild(script);
    },
  },
  mounted() {
    this.loadGoogleMapsScript(); // Carica il codice di Google Maps all'avvio del componente
    if (this.isEditing) {
      const eventId = this.$route.params.id;
      this.fetchEventData(eventId);
    }
  },
};
</script>

<style scoped>
.img-col {
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  max-height: 300px; /* Limita l'altezza della colonna dell'immagine */
  width: 100%; /* Assicura che l'immagine occupi tutta la larghezza */
  overflow: hidden; /* Nasconde eventuali overflow */
}
.left {
  flex: 1; /* Fa sì che la colonna sinistra occupi tutto lo spazio disponibile */
  min-height: 300px; /* Assicura che la colonna sinistra abbia una altezza minima */
}
textarea {
  resize: vertical; /* Permette il ridimensionamento verticale */
}
</style>
