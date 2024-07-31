<script>
import { store } from "../store/index.js";
export default {
  data() {
    return {
      store,
    };
  },
  computed: {
    buttonClasses() {
      if (this.type == "primary") {
        return "px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-md text-white font-bold uppercase shadow-md";
      } else if (this.type == "reset") {
        return "px-8 py-4 bg-white hover:bg-stone-200 rounded-md text-red-600 font-bold uppercase shadow-md";
      } else {
        return "px-8 py-4 bg-white hover:bg-stone-200 rounded-md text-blue-600 font-bold uppercase shadow-md";
      }
    },
  },
  props: {
    type: String,
    text: String,
    newsletter: Boolean,
  },
  methods: {
    handleClick() {
      if (this.newsletter == true) {
        store.showModal = true;
      }
      console.log("Button clicked!");
    },
  },
};
</script>

<template>
  <button @click="handleClick()" :type="type" :class="buttonClasses">
    {{ text }}
  </button>
</template>
<style></style>
