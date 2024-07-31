<template>
  <div>
    <!-- Modal -->
    <div
      v-if="store.showModal"
      class="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50"
      @click.self="store.showModal = false"
    >
      <iframe
        v-if="!showDisiscription"
        width="600px"
        height="600px"
        src="https://d709c509.sibforms.com/serve/MUIFAFbJnHM591M_3-0Ugq8KxN5gUimXJl1poLKRIKQfa10Z-VVIk0jG6F-t9ChLS7ckBAajNL_htET7Wr2cxB3jXDc8D91SkrHCRljz141z9USbWCK2I7VGbCMRLnsA0Q5SjO2vhYn4Gxu-DtLouEA7IEoKRGa_5AG4dEbErUIjKPYYPhrsbcOb12MnUosCEgwgD8lXI5laO1Gf"
        frameborder="0"
        scrolling="auto"
        allowfullscreen
        style="
          display: block;
          margin-left: auto;
          margin-right: auto;
          max-width: 100%;
        "
      >
      </iframe>
      <iframe
        v-else
        width="600px"
        height="600px"
        src="https://d709c509.sibforms.com/serve/MUIFAAGoMkG6DndSEYnpk8OmBr-w82-MNxu3rbspIL_ODzcpdz5c7RFZqOs8m3CI6p-GAzadK3urlj-r-tfgb3166gs8oI2t0vCoDjDWS_30W7avR_9A3t6sjTzXrJUVXobazeZYnyJZKG740gI3MmZJGmec0kuFmHJ3kkDPS4YNr3QpGL4n08Ypzk2T5eDqVMguciJQ5XIGO6Um"
        frameborder="0"
        scrolling="auto"
        allowfullscreen
        style="
          display: block;
          margin-left: auto;
          margin-right: auto;
          max-width: 100%;
        "
      ></iframe>

      <div>
        <div
          class="w-[600px] flex justify-center items-center py-4 px-6 border-b border-gray-200 bg-white"
        >
          <div
            class="text-xl font-bold text-center"
            @click="showDisiscription = false"
            v-if="showDisiscription"
          >
            Ritorna
          </div>
          <div
            class="text-xl font-bold text-center"
            @click="showDisiscription = true"
            v-else
          >
            Vuoi disiscriverti?
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PrivacyPolicy from "./PrivacyPolicy.vue";
import { store } from "../store/index.js";
import supabase from "../lib/supabaseClient.js";

export default {
  data() {
    return {
      store,
      userData: { name: "", email: "" },
      accepted: false,
      showDisiscription: true,
    };
  },
  components: {
    PrivacyPolicy,
  },
  methods: {
    toggleAccepted(isAccepted) {
      this.accepted = isAccepted;
    },
    async handleNewsletterSignUp() {
      if (!this.accepted) {
        alert("Per favore, accetta la Privacy Policy prima di procedere.");
        return;
      }

      try {
        let { data, error } = await supabase
          .from("newsletter_subscribers")
          .insert(this.userData);

        if (error) {
          throw error;
        }

        console.log("Newsletter subscription submitted", data);

        store.showModal = false;
        this.userData = { name: "", email: "" };
        alert("Grazie per esserti iscritto alla nostra newsletter!");
      } catch (error) {
        console.error("Error while subscribing:", error.message);
      }
    },
  },
};
</script>
