import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xbcdjkssdzealalkwdrd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhiY2Rqa3NzZHplYWxhbGt3ZHJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA1MTQ5MjgsImV4cCI6MjAzNjA5MDkyOH0._Cl8I9BpvO2BBKc9ca0UeceVfLCacYqLnvhhiHMpUwc";
// const supabaseUrl = process.env.APP_SUPABASE_URL;
// const supabaseKey = process.env.APP_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
