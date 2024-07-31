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
  <section id="about">
    <div class="bg-blue-600 flex flex-col-reverse lg:flex-row">
      <div class="left w-full lg:w-3/6 py-16 px-4 lg:px-8 text-white">
        <h2 class="text-3xl lg:text-6xl font-extrabold pb-8">CHI SIAMO</h2>
        <p class="text-lg pb-8">
          L’Associazione Diabetici di Peschiera nasce nel 1991. è fin da subito
          in prima linea per il riconoscimento nazionale della prevenzione e del
          diritto alle cure dei diabetici. L’impegno si concretizza con la
          storica legge 115/1987 grazie all’adesione a FAND.
        </p>

        <p class="text-lg pb-8">
          L’impegno a livello locale ci ha visti sempre a supporto del Centro
          Antidiabetico dell’Ospedale Pederzoli e protagonisti di iniziative e
          attività: convegni, corsi Diabetico Guida, camminate non competitive,
          screening glicemici, attività sociali
        </p>
        <AppButton text="unisciti a noi" :newsletter="true" />
      </div>
      <div class="right w-full lg:w-3/6">
        <img
          src="https://ilsaronno.it/images/images/2024/04/import-607193.edi_full.jpg"
          alt=""
          class="object-cover h-full w-full"
        />
      </div>
    </div>
  </section>
</template>

<style></style>
