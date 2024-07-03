<script>
export default {
  data() {
    return {
      accordionData: [
        {
          id: 1,
          question: "Supporto emotivo",
          answer:
            "L’Associazione diabetici offre un ambiente in cui puoi condividere paure e preoccupazioni con altre persone che affrontano la stessa condizione. Questo può aiutarti a sentirti meno solo e isolato.",
          isOpen: false,
        },
        {
          id: 2,
          question: "Informazioni e risorse",
          answer:
            "L'Associazione diabetici fornisce spesso informazioni aggiornate sul diabete, trattamenti, nuove scoperte e consigli pratici per gestire la malattia. Queste risorse possono essere preziose per te e la tua famiglia.",
          isOpen: false,
        },
        {
          id: 3,
          question: "Educazione",
          answer:
            "L'Associazione diabetici organizza programmi di formazione e workshop per aiutarti a comprendere meglio il diabete, migliorare il controllo glicemico e adottare uno stile di vita sano.",
          isOpen: false,
        },
        {
          id: 4,
          question: "Rappresentanza",
          answer:
            "Unirsi all'Associazione aiuta a dare voce alle tue preoccupazioni e alle esigenze delle persone con diabete. La nostra Associazione è affiliata alla FAND, organizzazione che lavora per sensibilizzare l'opinione pubblica e per influenzare le politiche e le decisioni che riguardano il diabete.",
          isOpen: false,
        },
        {
          id: 5,
          question: "Accesso a eventi e risorse speciali",
          answer:
            "L'Associazione diabetici organizza eventi, conferenze e seminari a cui puoi partecipare. Questi eventi possono fornirti un'opportunità unica per incontrare esperti medici, ascoltare storie di successo e condividere esperienze.",
          isOpen: false,
        },
        {
          id: 6,
          question: "Creazione di reti",
          answer:
            "Unendoti all'Associazione diabetici, puoi creare legami con altre persone che condividono le tue stesse sfide. Queste connessioni possono essere fonte di sostegno continuo e amicizie significative.",
          isOpen: false,
        },
      ],
    };
  },

  methods: {
    handleClick(faqId) {
      this.accordionData = this.accordionData.map((faq) =>
        faq.id === faqId
          ? { ...faq, isOpen: !faq.isOpen }
          : { ...faq, isOpen: false }
      );
    },
  },
};
</script>

<template>
  <main>
    <!-- 👈🏻Main container for accordion -->
    <div class="faqs">
      <div v-for="faq in accordionData" :key="faq.id" class="faq">
        <div class="header" @click="handleClick(faq.id)">
          <div class="question">
            {{ faq.question }}
          </div>
          <div :class="['icon', { open: faq.isOpen }]">
            <i class="fa-solid fa-chevron-up"></i>
          </div>
        </div>
        <div :class="['answer', { open: faq.isOpen }]">
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main {
  width: 500px;
  box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.5);
  margin: 0 auto;
  margin-top: 10%;
  margin-bottom: 10%;
  background-color: rgb(240, 248, 255);
  padding: 10px;
  border-radius: 6px;
}

.faqs {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.faq {
  flex-grow: 1;
}

.faq .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: rgba(53, 107, 182, 0.12);
  border-radius: 10px;
  cursor: pointer;
}

.faq .header .question {
  font-weight: 700;
}

.faq .header .icon {
  width: 30px;
  height: 30px;
  transition: transform 0.5s;
}

.faq .header .icon img {
  width: 100%;
  height: auto;
}

.faq .header .icon.open {
  transform: scaleY(-1);
}

.answer {
  max-height: 0;
  overflow: hidden;
  line-height: 1.5;
  background-color: transparent;
  transition: max-height 0.5s ease-out;
}

.answer::-webkit-scrollbar {
  width: 5px;
}

.answer::-webkit-scrollbar-track {
  appearance: none;
  background-color: transparent;
}

.answer::-webkit-scrollbar-thumb {
  width: 5px;
  background-color: rgb(232, 210, 182);
  border-radius: 50px;
}

.answer p {
  padding: 10px;
}

.answer.open {
  max-height: 200px;
}
</style>
