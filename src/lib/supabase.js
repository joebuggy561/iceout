import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY


const globalForSupabase = globalThis;
export const supabase =
  globalForSupabase.__supabase || (globalForSupabase.__supabase = createClient(supabaseUrl, supabaseAnonKey));

