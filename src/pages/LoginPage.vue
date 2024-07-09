<template>
  <div
    v-if="!isSignUp"
    class="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
      <div>
        <h2
          class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"
        >
          Accedi al tuo account
        </h2>
      </div>
      <form class="mt-8" @submit.prevent="logInWithEmailAndPassword">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm">
          <div>
            <label for="email" class="sr-only">Email</label>
            <input
              v-model="email"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
              placeholder="Email"
            />
          </div>
          <div class="-mt-px">
            <label for="password" class="sr-only">Password</label>
            <input
              v-model="password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
              placeholder="Password"
            />
          </div>
        </div>

        <div class="mt-6 flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            />
            <label
              for="remember_me"
              class="ml-2 block text-sm leading-5 text-gray-900"
            >
              Ricordami
            </label>
          </div>

          <div class="text-sm leading-5">
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              Hai dimenticato la password?
            </a>
          </div>
        </div>

        <div class="mt-6">
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            Accedi
          </button>

          <p class="text-stone-600 text-center my-4">oppure</p>
          <button
            @click.prevent="logInWithGoogle"
            class="mb-2 group relative w-full flex justify-center items-center gap-4 py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-stone-600 shadow-md hover:bg-stone-100 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
          >
            Accedi con Google
            <i class="fa-brands fa-google"></i>
          </button>
          <!-- <button
            @click.prevent="signInWithFacebook"
            class="group relative w-full flex justify-center items-center gap-4 py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
          >
            Accedi con Facebook
            <i class="fa-brands fa-facebook"></i>
          </button> -->
        </div>
      </form>

      <div class="text-center mt-8">
        <p class="text-sm leading-5 text-gray-600">
          Non hai un account?
          <a
            href="#"
            @click="isSignUp = true"
            class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            Crea uno
          </a>
        </p>
      </div>
    </div>
  </div>

  <div
    v-else
    class="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
      <div>
        <h2
          class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"
        >
          Crea un nuovo account
        </h2>
      </div>
      <form class="mt-8" @submit.prevent="signUp">
        <div class="rounded-md shadow-sm">
          <div>
            <label for="email" class="sr-only">Email</label>
            <input
              v-model="email"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
              placeholder="Email"
            />
          </div>
          <div class="-mt-px">
            <label for="password" class="sr-only">Password</label>
            <input
              v-model="password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
              placeholder="Password"
            />
          </div>
        </div>

        <div class="mt-6 flex items-center justify-between">
          <div class="text-sm leading-5">
            <p class="text-gray-600">
              Hai già un account?
              <a
                href="#"
                @click="isSignUp = false"
                class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >Accedi qui</a
              >
            </p>
          </div>
        </div>

        <div class="mt-6">
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            Registrati
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import supabase from "../lib/supabaseClient.js";
import { store } from "../store/index.js";

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      isSignUp: false,
      store: store,
    };
  },

  methods: {
    async signUp() {
      try {
        let { data, error } = await supabase.auth.signUp({
          email: this.email,
          password: this.password,
        });
        if (error) throw error;
        console.log("User registered:", data);
        this.handleAuthentication(data); // Gestisci l'autenticazione
      } catch (error) {
        console.error("Error signing up:", error.message);
      }
    },

    async logInWithEmailAndPassword() {
      try {
        let { data, error } = await supabase.auth.signInWithPassword({
          email: this.email,
          password: this.password,
        });
        if (error) throw error;
        console.log("User logged in:", data);
        this.handleAuthentication(data); // Gestisci l'autenticazione
      } catch (error) {
        console.error("Error logging in:", error.message);
      }
    },

    async logInWithGoogle() {
      try {
        let { user, session, error } = await supabase.auth.signInWithOAuth(
          {
            provider: "google",
          },
          {
            redirectTo: window.location.origin,
            scopes: "email",
          }
        );
        if (error) throw error;
        console.log("User logged in with Google:", user);
        this.handleAuthentication(session); // Gestisci l'autenticazione
      } catch (error) {
        console.error("Error logging in with Google:", error.message);
      }
    },

    handleAuthentication(data) {
      // Salvataggio delle informazioni di sessione nel localStorage
      localStorage.setItem("supabaseSession", JSON.stringify(data));
      // Aggiorna lo stato di autenticazione nello store
      this.store.isAuthenticated = true;
      // Naviga alla home dopo l'autenticazione
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
/* Personalizza lo stile a tuo piacimento */
</style>
