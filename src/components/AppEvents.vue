<template>
  <section id="events">
    <h2
      class="text-3xl lg:text-6xl font-extrabold pb-8 text-center text-blue-600"
    >
      EVENTI
    </h2>
    <div
      v-if="loading"
      class="loader-container flex flex-col justfy-center items-center"
    >
      <div class="loader"></div>
      <p>Loading...</p>
    </div>
    <div v-else class="flex flex-wrap justify-center gap-8 px-4 lg:px-16">
      <EventCard
        v-for="event in paginatedEvents"
        :key="event.id"
        :event="event"
      />
    </div>
    <Pagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      @update:currentPage="$emit('update:currentPage', $event)"
    />
  </section>
</template>

<script>
import EventCard from "./EventCard.vue";
import Pagination from "./Pagination.vue";

export default {
  components: {
    EventCard,
    Pagination,
  },
  props: {
    paginatedEvents: {
      type: Array,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped></style>
