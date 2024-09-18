import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://iifqgmbfkpwncvvzkxas.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpZnFnbWJma3B3bmN2dnpreGFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU4MDMwNjksImV4cCI6MjA0MTM3OTA2OX0.McJo3xWT6CMzG9Ctevln7kD8i87du9Ako6VAeo7QOXk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
