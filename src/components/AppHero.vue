<script>
import AppButton from "./AppButton.vue";

export default {
  data() {
    return {};
  },

  components: {
    AppButton,
  },
};
</script>

<template>
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
        class="w-full lg:w-1/2 flex text-center lg:text-start flex-col justify-end items-center lg:items-start px-4 lg:px-16 gap-8 pb-8"
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
</template>

<style></style>
