<script>
import Accordion from "./Accordion.vue";
import AppButton from "./AppButton.vue";
import supabase from "../lib/supabaseClient.js";

export default {
  data() {
    return {
      userData: {
        name: "",
        email: "",
      },
    };
  },

  components: {
    Accordion,
    AppButton,
  },

  methods: {
    async handleNewsletterSignUp() {
      try {
        let { data, error } = await supabase
          .from("newsletter_subscribers")
          .insert(this.userData);

        if (error) {
          throw error;
        }

        console.log("Newsletter subscription submitted", data);
        this.userData = { name: "", email: "" };
      } catch (error) {
        console.error("Error while subscribing:", error.message);
      }
    },
  },
};
</script>

<template>
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
            v-model="userData.name"
            type="text"
            placeholder="Nome"
            autocomplete="name"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-600"
          />
          <input
            v-model="userData.email"
            type="email"
            placeholder="Email"
            autocomplete="email"
            class="w-full px-4 py-2 border rounded-md mt-4 focus:outline-none focus:ring-blue-6"
          />
        </form>
        <AppButton
          type="primary"
          text="unisciti a noi"
          @click="handleNewsletterSignUp"
        />
      </div>
    </div>
  </section>
</template>

<style></style>
