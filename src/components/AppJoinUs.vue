<script>
import Accordion from "./Accordion.vue";
import AppButton from "./AppButton.vue";

export default {
  data() {
    return {};
  },

  components: {
    Accordion,
    AppButton,
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
</template>

<style></style>
