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

  methods: {},
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

        <AppButton type="primary" text="unisciti a noi" :newsletter="true" />
      </div>
    </div>
  </section>
</template>

<style></style>
