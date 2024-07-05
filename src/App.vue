<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import AppButton from "./components/AppButton.vue";
import AppHero from "./components/AppHero.vue";
import AppAbout from "./components/AppAbout.vue";
import AppJoinUs from "./components/AppJoinUs.vue";
import AppEvents from "./components/AppEvents.vue";
import AppContacts from "./components/AppContacts.vue";

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
  components: {
    AppHeader,
    AppFooter,
    AppButton,
    AppHero,
    AppAbout,
    AppJoinUs,
    AppEvents,
    AppContacts,
  },
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
    updateCurrentPage(newPage) {
      this.currentPage = newPage;
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
    <AppHero />
    <AppAbout />
    <AppJoinUs />
    <AppEvents
      :paginatedEvents="paginatedEvents"
      :totalPages="totalPages"
      :currentPage.sync="currentPage"
      @update:currentPage="updateCurrentPage"
    />
    <AppContacts />
  </main>

  <AppFooter />
</template>

<style>
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
</style>
