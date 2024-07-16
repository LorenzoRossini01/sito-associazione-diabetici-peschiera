import { reactive } from "vue";
import supabase from "../lib/supabaseClient.js";

export const store = reactive({
  isAuthenticated: false,

  user: null,

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
    const now = new Date();
    const [hours, minutes, seconds] = time.split(":").map(Number);
    now.setHours(hours);
    now.setMinutes(minutes);
    now.setSeconds(seconds);

    return now.toLocaleTimeString("it-IT", {
      hour: "2-digit",
      minute: "2-digit",
    });
  },
});
