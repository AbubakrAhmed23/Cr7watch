// Supabase yapılandırması. Anahtarlar .env.local içinde tanımlıysa site
// Supabase'den okur/yazar; tanımlı değilse otomatik olarak seed verisine düşer.

export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

/** Storage bucket adı (admin foto yüklemeleri). */
export const STORAGE_BUCKET = "product-images";
