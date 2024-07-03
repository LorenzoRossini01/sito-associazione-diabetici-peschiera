<!-- src/components/AddEvent.vue -->
<script>
import { db } from "../firebase";

export default {
  data() {
    return {
      newEvent: {
        title: "",
        description: "",
        date: "",
        time: "",
        location: "",
        image: "",
      },
    };
  },
  methods: {
    addNewEvent() {
      // Aggiungi l'evento al database Firebase
      db.ref("events")
        .push(this.newEvent)
        .then(() => {
          alert("Evento aggiunto con successo!");
          // Resetta i campi del form dopo l'aggiunta
          this.newEvent = {
            title: "",
            description: "",
            date: "",
            time: "",
            location: "",
            image: "",
          };
        })
        .catch((error) => {
          console.error("Errore durante l'aggiunta dell'evento:", error);
          alert(
            "Si è verificato un errore durante l'aggiunta dell'evento. Riprova più tardi."
          );
        });
    },
  },
};
</script>

<template>
  <div>
    <h2>Aggiungi un nuovo evento</h2>
    <form @submit.prevent="addNewEvent">
      <label>
        Titolo:
        <input type="text" v-model="newEvent.title" required />
      </label>
      <label>
        Descrizione:
        <textarea v-model="newEvent.description" required></textarea>
      </label>
      <label>
        Data:
        <input type="date" v-model="newEvent.date" required />
      </label>
      <label>
        Ora:
        <input type="time" v-model="newEvent.time" required />
      </label>
      <label>
        Luogo:
        <input type="text" v-model="newEvent.location" required />
      </label>
      <label>
        Immagine (URL):
        <input type="url" v-model="newEvent.image" required />
      </label>
      <button type="submit">Aggiungi Evento</button>
    </form>
  </div>
</template>

<style scoped>
/* Stili specifici per questo componente */
</style>
