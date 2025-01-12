import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jwzxbuzfuaouflqyovob.supabase.co";
// This is safe to use in the client, because we enabled row level security that only allows users who has the key to just read data
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3enhidXpmdWFvdWZscXlvdm9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzNDgwMDQsImV4cCI6MjA1MTkyNDAwNH0.tI6HceWaXl_9abkx-RT7K2nepmRA5E6nkTA7ejsO9k0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
