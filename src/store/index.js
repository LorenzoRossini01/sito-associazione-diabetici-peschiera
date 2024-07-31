import { reactive } from "vue";
import supabase from "../lib/supabaseClient.js";

export const store = reactive({
  isAuthenticated: false,

  user: null,
  showModal: false,

  async getUser() {
    const { data } = await supabase.auth.getUser();
    return data.user;
  },

  getDate(date) {
    return new Date(date).toLocaleString("it-IT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  },

  getTime(time) {
    const [hour, minute] = time.split(":");
    const date = new Date();
    date.setHours(hour);
    date.setMinutes(minute);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  },

  getCalendarLink(event) {
    const { date, time, title, place, details } = event;

    // Funzione per formattare date e ore nel formato richiesto
    const formatDateTime = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      return `${year}${month}${day}T${hours}${minutes}${seconds}`;
    };

    // Funzione per aggiungere un'ora alla data di inizio
    const addOneHour = (date) => {
      const newDate = new Date(date);
      newDate.setHours(newDate.getHours() + 1);
      return newDate;
    };

    // Funzione per encode location e details
    const encodeURIComponentSpaces = (str) =>
      encodeURIComponent(str).replace(/%20/g, "+");

    // Creazione delle date di inizio e fine
    const startDateTime = new Date(`${date}T${time}`);
    const endDateTime = addOneHour(startDateTime);

    const startFormatted = formatDateTime(startDateTime);
    const endFormatted = formatDateTime(endDateTime);
    const titleEncoded = encodeURIComponentSpaces(title);
    const locationEncoded = encodeURIComponentSpaces(place);
    const detailsEncoded = encodeURIComponentSpaces(details);

    // Creare il link del calendario
    const calendarLink = `https://www.google.com/calendar/event?action=TEMPLATE&dates=${startFormatted}%2F${endFormatted}&text=${titleEncoded}&location=${locationEncoded}&details=${detailsEncoded}`;

    return calendarLink;
  },
});
