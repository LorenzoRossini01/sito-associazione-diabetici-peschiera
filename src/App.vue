<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import Accordion from "./components/Accordion.vue";
import AppButton from "./components/AppButton.vue";
import EventCard from "./components/EventCard.vue";
import { eventData } from "./data/eventData.js";
// import { db } from "./firebase";

export default {
  data() {
    return {
      eventData: eventData,
      currentPage: 1,
      eventsPerPage: 9,
    };
  },
  components: { AppHeader, AppFooter, Accordion, AppButton, EventCard },
  computed: {
    paginatedEvents() {
      const start = (this.currentPage - 1) * this.eventsPerPage;
      const end = start + this.eventsPerPage;
      return this.eventData.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.eventData.length / this.eventsPerPage);
    },
  },
  methods: {
    goToPage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    fetchEvents() {
      db.ref("events").on("value", (snapshot) => {
        this.eventData = [];
        snapshot.forEach((childSnapshot) => {
          this.eventData.push({
            key: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
      });
    },
  },
  // created() {
  //   this.fetchEvents(); // Carica gli eventi quando il componente viene creato
  // },
};
</script>

<template>
  <AppHeader />
  <main class="h-100%">
    <section id="home">
      <div id="hero" class="flex flex-col lg:flex-row">
        <div class="img-container grow">
          <img
            src="https://img.freepik.com/free-photo/close-up-people-connecting-through-hands_23-2149125854.jpg"
            alt=""
            class="w-full h-full object-cover"
          />
        </div>
        <div
          class="w-full lg:w-3/6 flex text-center lg:text-start flex-col justify-end items-center lg:items-start px-4 lg:px-16 gap-8 pb-8"
        >
          <h1 class="text-3xl lg:text-7xl font-bold text-wrap text-blue-600">
            SOSTIENI LA NOSTRA ASSOCIAZIONE
          </h1>
          <AppButton type="primary" text="unisciti a noi" />
        </div>
      </div>
      <div id="sponsor" class="h-[12rem]">
        <div class="flex items-center justify-center gap-8 lg:gap-48 py-8">
          <img
            src="https://www.fand.it/wp-content/uploads/2022/11/logo_fand_PRINCIPALE_web-300x287.jpg"
            alt=""
            class="w-16 h-16 lg:w-24 lg:h-24 hover:scale-125 cursor-pointer transition-all ease-in-out rounded-full"
          />
          <img
            src="https://www.fand.it/wp-content/uploads/2022/11/logo_fand_PRINCIPALE_web-300x287.jpg"
            alt=""
            class="w-16 h-16 lg:w-24 lg:h-24 hover:scale-125 cursor-pointer transition-all ease-in-out rounded-full"
          />
          <img
            src="https://www.fand.it/wp-content/uploads/2022/11/logo_fand_PRINCIPALE_web-300x287.jpg"
            alt=""
            class="w-16 h-16 lg:w-24 lg:h-24 hover:scale-125 cursor-pointer transition-all ease-in-out rounded-full"
          />
          <img
            src="https://www.fand.it/wp-content/uploads/2022/11/logo_fand_PRINCIPALE_web-300x287.jpg"
            alt=""
            class="w-16 h-16 lg:w-24 lg:h-24 hover:scale-125 cursor-pointer transition-all ease-in-out rounded-full"
          />
        </div>
      </div>
    </section>
    <section id="about">
      <div class="bg-blue-600 flex flex-col-reverse lg:flex-row">
        <div class="left w-full lg:w-3/6 py-16 px-4 lg:px-8 text-white">
          <h2 class="text-3xl lg:text-6xl font-extrabold pb-8">CHI SIAMO</h2>
          <p class="text-lg pb-8">
            L’Associazione Diabetici di Peschiera nasce nel 1991. è fin da
            subito in prima linea per il riconoscimento nazionale della
            prevenzione e del diritto alle cure dei diabetici. L’impegno si
            concretizza con la storica legge 115/1987 grazie all’adesione a
            FAND.
          </p>

          <p class="text-lg pb-8">
            L’impegno a livello locale ci ha visti sempre a supporto del Centro
            Antidiabetico dell’Ospedale Pederzoli e protagonisti di iniziative e
            attività: convegni, corsi Diabetico Guida, camminate non
            competitive, screening glicemici, attività sociali
          </p>
          <AppButton text="unisciti a noi" />
        </div>
        <div class="right w-full lg:w-3/6">
          <img
            src="https://ilsaronno.it/images/images/2024/04/import-607193.edi_full.jpg"
            alt=""
            class="object-cover h-full w-full"
          />
        </div>
      </div>
    </section>
    <section id="join">
      <div class="flex flex-col-reverse lg:flex-row">
        <div class="left w-full lg:w-3/6 px-4 lg:px-8 py-16">
          <Accordion />
        </div>
        <div
          class="right w-full lg:w-3/6 pt-16 lg:py-16 px-4 lg:px-8 text-blue-600"
        >
          <h2
            class="text-3xl lg:text-6xl text-center lg:text-start font-extrabold pb-8 uppercase"
          >
            PERCHè ASSOCIARSI
          </h2>
          <p
            class="text-lg lg:text-2xl text-center lg:text-start font-bold pb-8 uppercase underline"
          >
            unisciti a noi, non sei solo
          </p>
          <form class="my-8">
            <input
              type="text"
              placeholder="Nome"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-600"
            />
            <input
              type="email"
              placeholder="Email"
              class="w-full px-4 py-2 border rounded-md mt-4 focus:outline-none focus:ring-blue-6"
            />
          </form>
          <AppButton type="primary" text="unisciti a noi" />
        </div>
      </div>
    </section>
    <section id="events">
      <h2
        class="text-3xl lg:text-6xl font-extrabold pb-8 text-center text-blue-600"
      >
        EVENTI
      </h2>
      <div class="flex flex-wrap justify-center gap-8 px-4 lg:px-16">
        <EventCard
          v-for="event in paginatedEvents"
          :key="event.title"
          :event="event"
        />
        <div class="flex justify-end lg:mt-8 pagination w-full lg:px-[7rem]">
          <button @click="prevPage" :disabled="currentPage === 1">Prev</button>
          <button
            v-for="page in totalPages"
            :key="page"
            @click="goToPage(page)"
          >
            {{ page }}
          </button>
          <button @click="nextPage" :disabled="currentPage === totalPages">
            Next
          </button>
        </div>
      </div>
    </section>
    <section id="contacts" class="mt-24">
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
              <form action="">
                <label class="block">
                  <span class="block text-sm font-medium text-slate-700"
                    >Nome</span
                  >
                  <input
                    type="email"
                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  />
                  <p
                    class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm"
                  >
                    Please provide a valid email address.
                  </p>
                </label>
                <label class="block">
                  <span class="block text-sm font-medium text-slate-700"
                    >Cognome</span
                  >
                  <input
                    type="email"
                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  />
                  <p
                    class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm"
                  >
                    Please provide a valid email address.
                  </p>
                </label>
                <label class="block">
                  <span class="block text-sm font-medium text-slate-700"
                    >Email</span
                  >
                  <input
                    type="email"
                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  />
                  <p
                    class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm"
                  >
                    Please provide a valid email address.
                  </p>
                </label>
                <label class="block">
                  <span class="block text-sm font-medium text-slate-700"
                    >Messaggio</span
                  >
                  <textarea
                    type="text"
                    rows="3"
                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  ></textarea>
                  <p
                    class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm"
                  >
                    Please provide a valid email address.
                  </p>
                </label>

                <AppButton type="primary" text="invia" class="w-full" />
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
              Associazione Diabetici Peschiera C/o Ospedale Pederzoli - Via
              Monte Baldo, 24
            </p>
            <p class="text-gray-600 text-sm">
              mail: associazionediabeticipeschiera@gmail.com
            </p>
            <p class="text-gray-600 text-sm">P.IVA 93051780232</p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <AppFooter />
</template>

<style scoped>
#sponsor,
#events {
  position: relative;
  background-color: #fffbeb;
}
#sponsor::before,
#events::before {
  content: "";
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23fffbeb' fill-opacity='1' d='M0,128L40,122.7C80,117,160,107,240,133.3C320,160,400,224,480,245.3C560,267,640,245,720,218.7C800,192,880,160,960,165.3C1040,171,1120,213,1200,218.7C1280,224,1360,192,1400,176L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
  position: absolute;
  width: 100%;
  height: 15rem;
  top: -15rem;
  background-size: auto;
  z-index: -1;
}

#sponsor::after,
#events::after {
  content: "";
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23fffbeb' fill-opacity='1' d='M0,128L40,122.7C80,117,160,107,240,133.3C320,160,400,224,480,245.3C560,267,640,245,720,218.7C800,192,880,160,960,165.3C1040,171,1120,213,1200,218.7C1280,224,1360,192,1400,176L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
  position: absolute;
  width: 100%;
  height: 20rem;
  bottom: -20rem;
  background-size: cover;
  background-repeat: no-repeat;
  transform: scale(-1);
  z-index: -1;
}

.pagination button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
}
.pagination button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
.pagination button.active {
  background-color: #0056b3;
}
</style>
./components/AppButton.vue./data/eventData.js
