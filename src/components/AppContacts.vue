<template>
  <section id="contacts" class="mt-24 mb-8">
    <h2
      class="text-3xl lg:text-6xl font-extrabold pb-8 text-center text-blue-600"
    >
      CONTATTACI
    </h2>
    <div class="flex justify-center flex-col lg:flex-row gap-8 px-4 lg:px-16">
      <div class="left w-full lg:w-1/2">
        <img
          src="https://ilsaronno.it/images/images/2024/04/import-607193.edi_full.jpg"
          alt=""
          class="object-cover h-full w-full"
        />
      </div>
      <div class="right w-full lg:w-1/2">
        <div class="card shadow-lg p-8">
          <div class="card-body">
            <form @submit.prevent="sendEmail">
              <label class="block">
                <span class="block text-sm font-medium text-slate-700"
                  >Nome</span
                >
                <input
                  type="text"
                  v-model="formData.nome"
                  required
                  class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                />
              </label>
              <label class="block">
                <span class="block text-sm font-medium text-slate-700"
                  >Cognome</span
                >
                <input
                  type="text"
                  v-model="formData.cognome"
                  required
                  class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                />
              </label>
              <label class="block">
                <span class="block text-sm font-medium text-slate-700"
                  >Email</span
                >
                <input
                  type="email"
                  v-model="formData.email"
                  required
                  class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                />
              </label>
              <label class="block">
                <span class="block text-sm font-medium text-slate-700"
                  >Messaggio</span
                >
                <textarea
                  v-model="formData.messaggio"
                  rows="3"
                  required
                  class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                ></textarea>
              </label>
              <AppButton type="submit" text="Invia" class="w-full mt-4" />
            </form>
          </div>
        </div>
        <div class="social flex justify-evenly text-3xl py-8 text-blue-600">
          <a href="">
            <i
              class="fa-brands fa-square-facebook py-4 hover:scale-150 transition-all ease-in-out"
            ></i>
          </a>
          <a href="">
            <i
              class="fa-brands fa-instagram py-4 hover:scale-150 transition-all ease-in-out"
            ></i>
          </a>
          <a href="">
            <i
              class="fa-brands fa-square-x-twitter py-4 hover:scale-150 transition-all ease-in-out"
            ></i>
          </a>
          <a href="">
            <i
              class="fa-solid fa-envelope py-4 hover:scale-150 transition-all ease-in-out"
            ></i>
          </a>
        </div>
        <div class="more-info text-center">
          <p class="text-gray-600 text-sm">
            Associazione Diabetici Peschiera C/o Ospedale Pederzoli - Via Monte
            Baldo, 24
          </p>
          <p class="text-gray-600 text-sm">
            mail: associazionediabeticipeschiera@gmail.com
          </p>
          <p class="text-gray-600 text-sm">P.IVA 93051780232</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from "emailjs-com";
import AppButton from "./AppButton.vue";

export default {
  components: {
    AppButton,
  },
  data() {
    return {
      formData: {
        nome: "",
        cognome: "",
        email: "",
        messaggio: "",
      },
    };
  },
  methods: {
    async sendEmail() {
      try {
        // # TODO: mettere queste credenziali nel file env
        const serviceID = "service_c3fe9cu";
        const templateID = "template_axxqgul";
        const userID = "5r1g_hHJCPUgWg9Qp";

        const response = await emailjs.send(
          serviceID,
          templateID,
          this.formData,
          userID
        );
        alert("Email inviata con successo!");
        this.formData = {
          nome: "",
          cognome: "",
          email: "",
          messaggio: "",
        };
      } catch (error) {
        console.error("Errore nell'invio dell'email:", error);
        alert("Si è verificato un errore. Per favore riprova più tardi.");
      }
    },
  },
};
</script>

<style scoped>
/* Aggiungi qui il tuo CSS personalizzato */
</style>
