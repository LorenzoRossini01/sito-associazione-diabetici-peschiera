<script>
import { store } from "../store/index.js";
import { signOutUser } from "../firebaseConfig";

export default {
  data() {
    return {
      navLinkClasses:
        "hover:bg-blue-600 active:bg-blue-700 hover:text-white active:text-white py-2 px-4 md:px-6 rounded-full",
      isMenuOpen: false,
      store,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    signOut() {
      signOutUser();
      store.isAuthenticated = false;
    },
  },
};
</script>

<template>
  <div class="px-8">
    <!-- Navbar -->
    <nav class="py-4 md:py-8 flex items-center justify-between">
      <!-- Logo -->
      <img
        src="https://www.fand.it/wp-content/uploads/2022/11/logo_fand_PRINCIPALE_web-300x287.jpg"
        alt="Logo"
        class="w-12 h-12 md:w-16 md:h-16 me-4 md:me-8"
      />

      <!-- Toggle button su mobile -->
      <button
        class="block lg:hidden px-3 py-2 rounded text-blue-600 hover:bg-blue-200 focus:outline-none"
        @click="toggleMenu"
      >
        <svg
          class="h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M20 11H0v-2h20v2zm0-7H0V2h20v2zm0 14H0v-2h20v2z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <!-- Menu di Navigazione -->
      <ul class="hidden lg:flex flex-wrap gap-4 md:gap-10">
        <li>
          <a href="/" :class="navLinkClasses">HOME</a>
        </li>
        <li>
          <a href="#about" :class="navLinkClasses">ABOUT US</a>
        </li>
        <li>
          <a href="#join" :class="navLinkClasses">JOIN US</a>
        </li>
        <li>
          <a href="#events" :class="navLinkClasses">EVENTI</a>
        </li>
        <li>
          <a href="#contacts" :class="navLinkClasses">CONTATTACI</a>
        </li>
        <li v-if="store.isAuthenticated">
          <router-link to="/create-event" :class="navLinkClasses"
            >AGGIUNGI EVENTO</router-link
          >
        </li>
        <li v-if="store.isAuthenticated">
          <a href="#" :class="navLinkClasses" @click="signOut">LOG-OUT</a>
        </li>
      </ul>
    </nav>

    <!-- Menu mobile (mostrato quando il toggle è attivo) -->
    <ul
      v-show="isMenuOpen"
      class="lg:hidden flex flex-col gap-2 px-4 py-2 bg-white border rounded shadow-md absolute top-20 right-8 z-10"
    >
      <li>
        <a href="/" :class="navLinkClasses">HOME</a>
      </li>
      <li>
        <a href="#about" :class="navLinkClasses">ABOUT US</a>
      </li>
      <li>
        <a href="#join" :class="navLinkClasses">JOIN US</a>
      </li>
      <li>
        <a href="#events" :class="navLinkClasses">EVENTI</a>
      </li>
      <li>
        <a href="#contacts" :class="navLinkClasses">CONTATTACI</a>
      </li>
      <li v-if="store.isAuthenticated">
        <router-link to="/create-event" :class="navLinkClasses"
          >AGGIUNGI EVENTO</router-link
        >
      </li>
      <li v-if="store.isAuthenticated">
        <a href="#" :class="navLinkClasses" @click="signOut">LOG-OUT</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Stili aggiuntivi per il bottone di toggle */
button svg {
  transition: transform 0.3s ease;
}

button.open svg {
  transform: rotate(180deg);
}
</style>
