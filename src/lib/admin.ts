// Cr7watch — admin tarafı veri işlemleri (tarayıcı Supabase istemcisiyle).
// Sadece giriş yapmış kullanıcı (RLS "authenticated") yazabilir.

import { createClient } from "@/lib/supabase/client";
import { STORAGE_BUCKET } from "@/lib/supabase/config";
import { slugify } from "@/lib/utils";
import type { SupabaseClient } from "@supabase/supabase-js";

let _sb: SupabaseClient | null = null;
function sb(): SupabaseClient {
  if (!_sb) _sb = createClient();
  return _sb;
}

export interface AdminImage {
  id?: string;
  url: string;
  label?: string;
}

export interface ProductPayload {
  id?: string;
  brand_slug: string;
  name: string;
  slug?: string;
  reference?: string | null;
  series?: string | null;
  gender: string;
  price: number | null;
  description?: string | null;
  is_featured: boolean;
  is_active: boolean;
  sold: boolean;
}

/* --------------------------- ÜRÜNLER --------------------------- */

export async function adminListProducts() {
  const { data, error } = await sb()
    .from("products")
    .select("*, product_images(*)")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data ?? [];
}

export async function adminGetProduct(id: string) {
  const { data, error } = await sb()
    .from("products")
    .select("*, product_images(*)")
    .eq("id", id)
    .single();
  if (error) throw error;
  return data;
}

/** Yeni ürün ekler veya mevcut ürünü günceller; görselleri (storage + tablo) senkronlar. */
export async function saveProduct(
  payload: ProductPayload,
  images: AdminImage[],
  newFiles: File[]
) {
  const slug = payload.slug || slugify(`${payload.brand_slug}-${payload.name}`);
  const row = {
    brand_slug: payload.brand_slug,
    name: payload.name,
    slug,
    reference: payload.reference || null,
    series: payload.series || null,
    gender: payload.gender,
    price: payload.price,
    description: payload.description || null,
    is_featured: payload.is_featured,
    is_active: payload.is_active,
    sold: payload.sold,
  };

  let productId = payload.id;

  if (productId) {
    const { error } = await sb().from("products").update(row).eq("id", productId);
    if (error) throw error;
  } else {
    const { data, error } = await sb()
      .from("products")
      .insert(row)
      .select("id")
      .single();
    if (error) throw error;
    productId = data.id as string;
  }

  // Yeni dosyaları storage'a yükle
  const uploaded: AdminImage[] = [];
  for (let i = 0; i < newFiles.length; i++) {
    const file = newFiles[i];
    const ext = file.name.split(".").pop() || "jpg";
    const path = `${productId}/${Date.now()}-${i}.${ext}`;
    const { error: upErr } = await sb()
      .storage.from(STORAGE_BUCKET)
      .upload(path, file, { upsert: true, contentType: file.type });
    if (upErr) throw upErr;
    const { data: pub } = sb().storage.from(STORAGE_BUCKET).getPublicUrl(path);
    uploaded.push({ url: pub.publicUrl });
  }

  // Görsel listesini yeniden yaz (sıra korunur)
  const finalImages = [...images, ...uploaded];
  await sb().from("product_images").delete().eq("product_id", productId);
  if (finalImages.length) {
    const rows = finalImages.map((img, idx) => ({
      product_id: productId,
      url: img.url,
      label: img.label || null,
      sort_order: idx,
    }));
    const { error: imgErr } = await sb().from("product_images").insert(rows);
    if (imgErr) throw imgErr;
  }

  return productId;
}

export async function deleteProduct(id: string) {
  const { error } = await sb().from("products").delete().eq("id", id);
  if (error) throw error;
}

/** Hızlı alan güncelleme (sold / is_featured / is_active). */
export async function patchProduct(id: string, patch: Record<string, unknown>) {
  const { error } = await sb().from("products").update(patch).eq("id", id);
  if (error) throw error;
}

/* --------------------------- MARKALAR --------------------------- */

export async function adminListBrands() {
  const { data, error } = await sb()
    .from("brands")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return data ?? [];
}

export async function saveBrand(brand: {
  slug: string;
  name: string;
  blurb?: string | null;
  hero_image?: string | null;
  sort_order?: number;
}) {
  const { error } = await sb().from("brands").upsert(brand, { onConflict: "slug" });
  if (error) throw error;
}

export async function deleteBrand(slug: string) {
  const { error } = await sb().from("brands").delete().eq("slug", slug);
  if (error) throw error;
}

/* --------------------------- AYARLAR --------------------------- */

export async function getSettings() {
  const { data, error } = await sb()
    .from("site_settings")
    .select("*")
    .eq("id", 1)
    .single();
  if (error) throw error;
  return data;
}

export async function saveSettings(settings: Record<string, unknown>) {
  const { error } = await sb()
    .from("site_settings")
    .update(settings)
    .eq("id", 1);
  if (error) throw error;
}

export async function signOut() {
  await sb().auth.signOut();
}
