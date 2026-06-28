// Cr7watch — katalog veri erişim katmanı.
// Supabase yapılandırılmışsa (env anahtarları varsa) oradan okur;
// değilse otomatik olarak seed verisine (src/data/catalog.ts) düşer.
// Böylece site, admin/Supabase kurulmadan da çalışır.

import { brands as seedBrands, products as seedProducts } from "@/data/catalog";
import type { Brand, Product } from "@/lib/types";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";

/* ----------------------------- eşleyiciler ----------------------------- */

type Row = Record<string, unknown>;

function mapBrand(r: Row): Brand {
  return {
    slug: String(r.slug),
    name: String(r.name),
    blurb: (r.blurb as string) ?? undefined,
    heroImage: (r.hero_image as string) ?? undefined,
    sortOrder: (r.sort_order as number) ?? 999,
  };
}

function mapProduct(r: Row): Product {
  const imgs = Array.isArray(r.product_images) ? (r.product_images as Row[]) : [];
  return {
    id: String(r.id),
    brandSlug: String(r.brand_slug),
    name: String(r.name),
    slug: String(r.slug),
    reference: (r.reference as string) ?? undefined,
    series: (r.series as string) ?? undefined,
    gender: (r.gender as Product["gender"]) ?? "unisex",
    price: (r.price as number) ?? null,
    description: (r.description as string) ?? undefined,
    images: imgs
      .slice()
      .sort((a, b) => ((a.sort_order as number) ?? 0) - ((b.sort_order as number) ?? 0))
      .map((i) => ({ url: String(i.url), label: (i.label as string) ?? undefined })),
    isFeatured: Boolean(r.is_featured),
    isActive: r.is_active === undefined ? true : Boolean(r.is_active),
    sold: Boolean(r.sold),
  };
}

/* ----------------------------- yükleyiciler ----------------------------- */

async function loadBrands(): Promise<Brand[]> {
  if (isSupabaseConfigured) {
    try {
      const supabase = await createClient();
      const { data, error } = await supabase
        .from("brands")
        .select("*")
        .order("sort_order", { ascending: true });
      if (!error && data && data.length) return data.map(mapBrand);
    } catch {
      /* seed'e düş */
    }
  }
  return [...seedBrands].sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999));
}

async function loadProducts(): Promise<Product[]> {
  if (isSupabaseConfigured) {
    try {
      const supabase = await createClient();
      const { data, error } = await supabase
        .from("products")
        .select("*, product_images(*)")
        .eq("is_active", true)
        .order("sort_order", { ascending: true });
      if (!error && data && data.length) return data.map(mapProduct);
    } catch {
      /* seed'e düş */
    }
  }
  return seedProducts.filter((p) => p.isActive !== false);
}

/* ----------------------------- genel API ----------------------------- */

export async function getBrands(): Promise<Brand[]> {
  return loadBrands();
}

export async function getBrand(slug: string): Promise<Brand | undefined> {
  return (await loadBrands()).find((b) => b.slug === slug);
}

export async function getActiveProducts(): Promise<Product[]> {
  return loadProducts();
}

export async function getProductsByBrand(brandSlug: string): Promise<Product[]> {
  return (await loadProducts()).filter((p) => p.brandSlug === brandSlug);
}

export async function getProduct(slug: string): Promise<Product | undefined> {
  return (await loadProducts()).find((p) => p.slug === slug);
}

export async function getFeatured(limit = 8): Promise<Product[]> {
  const all = await loadProducts();
  const featured = all.filter((p) => p.isFeatured);
  const rest = all.filter((p) => !p.isFeatured);
  return [...featured, ...rest].slice(0, limit);
}

export async function getRelated(product: Product, limit = 4): Promise<Product[]> {
  return (await getProductsByBrand(product.brandSlug))
    .filter((p) => p.id !== product.id)
    .slice(0, limit);
}

export async function getBrandCounts(): Promise<Record<string, number>> {
  const counts: Record<string, number> = {};
  for (const p of await loadProducts()) {
    counts[p.brandSlug] = (counts[p.brandSlug] ?? 0) + 1;
  }
  return counts;
}

/** Bir markanın temsili kapak görseli. */
export function brandCover(brand: Brand, products: Product[]): string | undefined {
  if (brand.heroImage) return brand.heroImage;
  return products.find((p) => p.brandSlug === brand.slug)?.images?.[0]?.url;
}
