// supabase-config.js
const SUPABASE_URL = 'https://xlwycmurjnbresasttwn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhsd3ljbXVyam5icmVzYXN0dHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcyNzYzNzksImV4cCI6MjA5Mjg1MjM3OX0.RAcQcUxyOqfhUM-qkQ9jCCgzwUI5qDWc-yye8auU3cs';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
