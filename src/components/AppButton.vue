<script>
export default {
  data() {
    return {};
  },
  computed: {
    buttonClasses() {
      if (this.type == "primary") {
        return "px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-md text-white font-bold uppercase";
      } else {
        return "px-8 py-4 bg-white hover:bg-stone-200 rounded-md text-blue-600 font-bold uppercase";
      }
    },
  },
  props: {
    type: String,
    text: String,
  },
  methods: {
    handleClick() {
      console.log("Button clicked!");
    },
  },
};
</script>

<template>
  <button @click="handleClick()" :class="buttonClasses">{{ text }}</button>
</template>
<style></style>
