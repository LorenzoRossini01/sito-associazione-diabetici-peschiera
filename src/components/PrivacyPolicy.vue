<template>
    <div class="wrapper flex gap-4">
      <span class="flex gap-2">
        <input
        type="checkbox"
        id="accept"
        v-model="accepted"
        @change="emitAccepted"
        />
        <label for="accept" class="cursor-pointer text-sm">
          Acconsento al trattamento dei miei dati personali ai sensi dell'art.12
          del GDPR nei limiti indicati nella
          <button
            type="button"
            class="underline text-blue-600 hover:text-blue-400"
            @click="showModal = true"
          >
            Privacy Policy
          </button>
        </label>
      </span>
  
      <div
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        v-show="showModal"
      >
        <div class="bg-white rounded-lg shadow-lg max-w-4xl w-full p-8">
          <div class="border-b pb-4 flex justify-between items-center">
            <h2 class="text-xl font-bold">{{ title }}</h2>
            <button
              type="button"
              class="text-gray-400 hover:text-gray-600"
              @click="showModal = false"
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div class="p-4 grid grid-cols-2 gap-4">
            <div>
              <p>
                La tua privacy è importante per noi. Questa Privacy Policy spiega come raccogliamo, utilizziamo e proteggiamo le tue informazioni personali quando visiti il sito "Associazione Diabetici Peschiera".
              </p>
              <p>
                <strong>Informazioni che Raccogliamo</strong><br />
                Raccogliamo le seguenti informazioni personali:
                <ul class="list-disc list-inside">
                  <li>Nome</li>
                  <li>Indirizzo Email</li>
                </ul>
              </p>
              <p>
                <strong>Modalità di Raccolta delle Informazioni</strong><br />
                Raccogliamo le tue informazioni personali attraverso:
                <ul class="list-disc list-inside">
                  <li>Moduli di Iscrizione alla Newsletter</li>
                  <li>Moduli di Contatto</li>
                </ul>
              </p>
              <p>
                <strong>Utilizzo delle Informazioni</strong><br />
                Utilizziamo le informazioni raccolte per:
                <ul class="list-disc list-inside">
                  <li>Inviarti la nostra newsletter.</li>
                  <li>Ricontattarti in risposta alle tue richieste o domande.</li>
                </ul>
              </p>
              <p>
                <strong>Condivisione delle Informazioni</strong><br />
                Non condividiamo le tue informazioni personali con nessuno al di fuori del database di Supabase, che utilizziamo per la gestione e l'archiviazione dei dati.
              </p>
              <p>
                <strong>Conservazione delle Informazioni</strong><br />
                Conserviamo le tue informazioni personali fino a quando decidi di disiscriverti dalla nostra newsletter. Dopo la disiscrizione, i tuoi dati saranno eliminati dal nostro database.
              </p>
              <p>
                <strong>Diritti degli Utenti</strong><br />
                Hai il diritto di:
                <ul class="list-disc list-inside">
                  <li>Accedere alle tue informazioni personali e richiederne una copia.</li>
                  <li>Richiedere la correzione delle tue informazioni personali se sono inaccurate o incomplete.</li>
                  <li>Richiedere la cancellazione delle tue informazioni personali.</li>
                  <li>Opporsi al trattamento delle tue informazioni personali per motivi legittimi.</li>
                </ul>
                Per esercitare questi diritti, ti preghiamo di contattarci utilizzando le informazioni di contatto fornite di seguito.
              </p>
            </div>
            <div>
              <p>
                <strong>Sicurezza delle Informazioni</strong><br />
                Adottiamo misure di sicurezza adeguate per proteggere le tue informazioni personali da accessi non autorizzati, modifiche, divulgazioni o distruzioni. Tuttavia, nessun metodo di trasmissione su Internet o di archiviazione elettronica è completamente sicuro, quindi non possiamo garantire la sicurezza assoluta delle informazioni.
              </p>
              <p>
                <strong>Uso dei Cookie</strong><br />
                Il nostro sito utilizza cookie per migliorare la tua esperienza di navigazione. I cookie sono piccoli file di dati che vengono salvati sul tuo dispositivo quando visiti il nostro sito. Puoi scegliere di disabilitare i cookie tramite le impostazioni del tuo browser.
              </p>
              <p>
                <strong>Ambito Geografico</strong><br />
                Il nostro sito web è principalmente indirizzato ad utenti italiani. Ci impegniamo a rispettare le leggi sulla privacy applicabili in Italia.
              </p>
              <p>
                <strong>Modifiche alla Privacy Policy</strong><br />
                Potremmo aggiornare questa Privacy Policy di tanto in tanto. Ti informeremo di eventuali modifiche pubblicando la nuova Privacy Policy sul nostro sito web. Ti invitiamo a controllare periodicamente questa pagina per essere informato su come proteggiamo le tue informazioni personali.
              </p>
              <p>
                <strong>Contattaci</strong><br />
                Se hai domande o preoccupazioni riguardo a questa Privacy Policy o al trattamento delle tue informazioni personali, ti preghiamo di contattarci attraverso il modulo di contatto presente sul nostro sito o scrivendo direttamente a: associazionediabeticipeschiera@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        accepted: false,
        showModal: false,
        title: 'Privacy Policy'
      };
    },


    methods: {
      emitAccepted() {
        this.$emit('update:accepted', this.accepted);
      }
    }
  };
  </script>
  