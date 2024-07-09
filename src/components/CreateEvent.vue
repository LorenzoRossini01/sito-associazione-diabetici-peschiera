<script>
import AppButton from "./AppButton.vue";
import { ref } from "vue";
import { db } from "../firebaseConfig";
import { push, set } from "firebase/database";

export default {
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
    };
  },
  components: {
    AppButton,
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

    createEvent(eventData) {
      const eventsRef = ref(db, "events");
      const newEventRef = push(eventsRef);
      set(newEventRef, eventData)
        .then(() => {
          console.log("Evento creato con successo!");
          // Esegui azioni aggiuntive se necessario dopo la creazione dell'evento
        })
        .catch((error) => {
          console.error("Errore durante la creazione dell'evento:", error);
        });
    },

    addNewEvent() {
      const eventData = { ...this.newEvent };
      console.log(eventData);
      this.createEvent(eventData);
      console.log("Nuovo evento:", this.newEvent);
      alert("Evento aggiunto con successo!");
      this.resetForm();
    },
  },
};
</script>

<!-- <script>
import { ref } from "vue";
import { db } from "../firebaseConfig";

const newEvent = ref({
  title: "",
  description: "",
  date: "",
  time: "",
  place: "",
  image: "",
});

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      newEvent.value.image = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const resetForm = () => {
  newEvent.value = {
    title: "",
    description: "",
    date: "",
    time: "",
    place: "",
    image: "",
  };
};

const createEvent = () => {
  const eventsRef = ref(db, "events");
  const newEventRef = push(eventsRef);
  set(newEventRef, newEvent.value)
    .then(() => {
      console.log("Evento creato con successo!");
      alert("Evento aggiunto con successo!");
      resetForm();
    })
    .catch((error) => {
      console.error("Errore durante la creazione dell'evento:", error);
      alert("Si è verificato un errore durante l'aggiunta dell'evento.");
    });
};
</script> -->

<template>
  <div>
    <h2
      class="text-3xl lg:text-6xl font-extrabold pb-8 text-center text-blue-600 uppercase"
    >
      Aggiungi un nuovo evento
    </h2>

    <form @submit.prevent="addNewEvent" class="p-8">
      <div class="w-100% flex gap-8 mb-8">
        <div
          class="left w-1/2 gap-4 bg-white p-8 rounded-md shadow-lg flex flex-col"
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
                v-model="newEvent.place"
                type="place"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
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
              ></textarea>
            </label>
          </div>
        </div>

        <div
          class="right w-1/2 h-100% bg-white p-2 rounded-md shadow-lg flex flex-col"
        >
          <div
            class="img-col w-full h-full flex justify-center items-center relative"
          >
            <!-- immagine  -->
            <label
              class="block text-center border-blue-400 z-10 hover:bg-blue-100 backdrop-blur-3xl border-4 px-8 py-4 rounded-full absolute"
            >
              <span class="block w-full h-100% text-sm font-bold text-blue-400"
                >Aggiungi un'immagine</span
              >

              <input type="file" class="hidden" @change="handleImageUpload" />
            </label>
            <div v-if="newEvent.image" class="mt-4">
              <img
                :src="newEvent.image"
                alt="Event Image"
                class="rounded-md absolute top-0 left-0 right-0 bottom-0"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="controls flex gap-8">
        <!-- bottoni  -->
        <AppButton text="Reset" type="reset" class="w-1/2" @click="resetForm" />
        <AppButton
          text="Salva evento"
          type="primary"
          class="w-1/2"
          @click="addNewEvent"
        />
      </div>
    </form>
  </div>
</template>

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
