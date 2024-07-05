<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.$emit("update:currentPage", this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit("update:currentPage", this.currentPage + 1);
      }
    },
    goToPage(page) {
      if (page !== this.currentPage) {
        this.$emit("update:currentPage", page);
      }
    },
  },
};
</script>

<template>
  <div class="flex justify-end lg:mt-8 pagination w-full lg:px-[7rem]">
    <button @click="prevPage" :disabled="currentPage === 1">Prev</button>
    <button v-for="page in totalPages" :key="page" @click="goToPage(page)">
      {{ page }}
    </button>
    <button @click="nextPage" :disabled="currentPage === totalPages">
      Next
    </button>
  </div>
</template>

<style scoped>
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
