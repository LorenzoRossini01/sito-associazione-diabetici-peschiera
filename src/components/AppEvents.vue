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
  },
};
</script>

<template>
  <section id="events">
    <h2
      class="text-3xl lg:text-6xl font-extrabold pb-8 text-center text-blue-600"
    >
      EVENTI
    </h2>
    <div class="flex flex-wrap justify-center gap-8 px-4 lg:px-16">
      <EventCard
        v-for="event in paginatedEvents"
        :key="event.title"
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

<style></style>
