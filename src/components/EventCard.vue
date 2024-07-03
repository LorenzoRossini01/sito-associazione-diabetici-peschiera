<script>
import AppButton from "./AppButton.vue";

export default {
  data() {
    return {};
  },
  components: {
    AppButton,
  },

  computed: {
    today() {
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Imposta l'ora a mezzanotte per oggi
      return today;
    },
  },

  props: {
    event: Object,
  },

  methods: {
    isFutureDate(eventDate) {
      const [day, month, year] = eventDate.split("-");
      const event = new Date(year, month - 1, day);
      return event > this.today;
    },
  },

  created() {
    // console.log(
    //   this.today,
    //   this.event.date,
    //   this.isFutureDate(this.event.date)
    // );
  },
};
</script>

<template>
  <div
    class="aspect-video w-full lg:w-auto card bg-white p-2 rounded-md shadow-lg flex flex-col"
  >
    <div class="card-image h-72 w-100">
      <img :src="event.image" alt="" class="object-cover h-full w-full" />
    </div>
    <div class="card-body w-100 flex justify-between items-center pt-4">
      <h3 class="text-xl font-bold">{{ event.title }}</h3>
      <p class="text-gray-600 text-sm">{{ event.date }}</p>
    </div>
    <div class="card-footer mt-auto pt-4">
      <AppButton
        type="primary"
        text="Partecipa"
        v-if="isFutureDate(event.date)"
      />
      <p v-else class="text-gray-600 text-md">L'evento è già terminato</p>
    </div>
  </div>
</template>

<style scoped></style>
./AppButton.vue
