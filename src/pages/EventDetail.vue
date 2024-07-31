<template>
  <div>
    <!-- Loading Spinner -->
    <div
      v-if="loading"
      class="loader-container flex flex-col justify-center items-center absolute bottom-0 left-0 right-0 top-0 bg-white z-20 h-screen"
    >
      <div class="loader"></div>
      <p>Loading...</p>
    </div>

    <!-- Event Details -->
    <div v-else class="container mx-auto">
      <!-- Event Background and Title -->
      <div
        class="event-background w-full flex justify-center items-center"
        :style="{
          backgroundImage: event.image
            ? `url(${event.image})`
            : `url(${placePhotos[0]})`,
        }"
      >
        <h1
          class="text-6xl font-bold py-20 px-8 w-full text-invert bg-[#ffffff70] backdrop-blur-sm shadow-2xl"
        >
          {{ event.title }}
        </h1>
      </div>

      <!-- Event Details -->
      <h2 class="text-2xl font-bold px-8 pt-8 pb-4">Dettagli dell'evento</h2>
      <div class="container flex flex-col lg:flex-row pb-8">
        <div class="content w-full lg:w-1/2 px-8 mb-4 md:mb-0">
          <!-- Date and Time -->
          <div class="datetime flex justify-between">
            <p class="text-gray-600 text-lg">
              Data: {{ store.getDate(event.date) }}
            </p>
            <p class="text-gray-600 text-lg">
              Ora: {{ store.getTime(event.time) }}
            </p>
          </div>

          <!-- Event Image -->
          <img
            :src="event.image"
            alt=""
            class="mt-4 rounded-md w-full"
            v-if="event.image"
          />

          <!-- Event Description -->
          <p class="mt-4">{{ event.description }}</p>
        </div>

        <!-- Event Location and Actions -->
        <div class="content-right w-full lg:w-1/2 px-8">
          <div class="place">
            <p class="text-gray-600">Luogo: {{ event.place }}</p>
            <div v-if="placePhotos.length" class="mt-4">
              <img
                v-for="photo in placePhotos"
                :key="photo"
                :src="photo"
                class="rounded-lg w-full mt-2"
              />
            </div>
            <!-- Google Map Container -->
            <div id="map" class="mt-4 w-full h-64"></div>
          </div>

          <!-- Actions -->
          <div class="card-footer mt-auto pt-4">
            <div class="flex flex-col lg:flex-row gap-4">
              <AppButton
                type="primary"
                text="Modifica"
                @click="editEvent(event.id)"
                v-if="store.user"
              />
              <AppButton
                type="secondary"
                text="Elimina"
                @click="deleteEvent(event.id)"
                v-if="store.user"
              />
              <AppButton
                type="primary"
                text="Aggiungi al Calendario"
                v-if="!store.user"
                @click="redirectToCalendar"
              />
              <AppButton
                type="secondary"
                text="Apri in Google Maps"
                @click="openInGoogleMaps"
              />
            </div>
            <p v-if="!isFutureDate(event.date)" class="text-gray-600 text-lg">
              L'evento è già terminato
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "../components/AppButton.vue";
import supabase from "../lib/supabaseClient.js";
import { store } from "../store/index.js";
import { Loader } from "@googlemaps/js-api-loader";

// Crea una singola istanza del Loader
const loader = new Loader({
  apiKey: "AIzaSyBU8kdhaFmcTMg7oo3kbB8dUTrEu3W9tnY",
  version: "weekly",
  libraries: ["places"],
});

export default {
  name: "EventDetail",
  data() {
    return {
      event: null,
      loading: false,
      store,
      placePhotos: [],
      eventCoords: { lat: 0, lng: 0 },
      calendarLink: null,
    };
  },
  components: {
    AppButton,
  },
  methods: {
    redirectToCalendar() {
      window.open(this.calendarLink, "_blank");
    },
    isFutureDate(date) {
      const eventDate = new Date(date);
      const currentDate = new Date();
      return eventDate > currentDate;
    },
    async fetchCurrentEvent(id) {
      try {
        this.loading = true;
        const { data: event, error } = await supabase
          .from("event")
          .select("*")
          .eq("id", id)
          .single();
        if (error) {
          throw error;
        }
        this.event = event;
        this.event.time = store.getTime(this.event.time);
        this.calendarLink = store.getCalendarLink(event);
        this.getCoordinates(event.place);
      } catch (error) {
        console.error("Error fetching event:", error.message);
      } finally {
        this.loading = false;
      }
    },
    async getCoordinates(address) {
      try {
        loader.load().then(() => {
          const geocoder = new google.maps.Geocoder();
          geocoder.geocode({ address }, (results, status) => {
            if (status === "OK" && results[0]) {
              const location = results[0].geometry.location;
              this.initMap(location.lat(), location.lng());
              this.eventCoords = { lat: location.lat(), lng: location.lng() };
              this.getPlaceDetails(location.lat(), location.lng());
            } else {
              console.error(
                "Geocode was not successful for the following reason:",
                status
              );
            }
          });
        });
      } catch (error) {
        console.error("Error getting coordinates:", error.message);
      }
    },
    getPlaceDetails(lat, lng) {
      loader.load().then(() => {
        const service = new google.maps.places.PlacesService(
          document.createElement("div")
        );
        const request = {
          location: new google.maps.LatLng(lat, lng),
          radius: "500", // You can adjust the radius as needed
        };
        service.nearbySearch(request, (results, status) => {
          if (
            status === google.maps.places.PlacesServiceStatus.OK &&
            results[0]
          ) {
            const place = results[0];
            this.placePhotos = place.photos
              ? place.photos.map((photo) => photo.getUrl())
              : [];

            console.log(this.placePhotos);
          } else {
            console.error(
              "Places details request was not successful for the following reason:",
              status
            );
          }
        });
      });
    },
    initMap(lat, lng) {
      loader.load().then(() => {
        const map = new google.maps.Map(document.getElementById("map"), {
          center: { lat, lng },
          zoom: 15,
        });

        new google.maps.Marker({
          position: { lat, lng },
          map: map,
          title: this.event.title,
        });
      });
    },
    async editEvent(eventId) {
      try {
        this.$router.push(`/edit-event/${eventId}`);
      } catch (error) {
        console.error("Error editing event:", error.message);
      }
    },
    async deleteEvent(eventId) {
      try {
        const confirmed = confirm(
          "Sei sicuro di voler eliminare questo evento?"
        );
        if (confirmed) {
          const { data, error } = await supabase
            .from("event")
            .update({ deleted_at: new Date().toISOString() })
            .eq("id", eventId);

          if (error) {
            throw error;
          }

          this.$router.push("/");
        }
      } catch (error) {
        console.error("Error deleting event:", error.message);
      }
    },
    openInGoogleMaps() {
      const { lat, lng } = this.eventCoords;
      const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
      window.open(url, "_blank");
    },
  },
  created() {
    this.fetchCurrentEvent(this.$route.params.id);
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
}

.event-background {
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

#map {
  width: 100%;
  height: 400px;
}
</style>
