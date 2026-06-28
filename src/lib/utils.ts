// Cr7watch — küçük yardımcılar.

import type { Product } from "@/lib/types";

const TR_MAP: Record<string, string> = {
  ç: "c", Ç: "c", ğ: "g", Ğ: "g", ı: "i", İ: "i",
  ö: "o", Ö: "o", ş: "s", Ş: "s", ü: "u", Ü: "u",
};

/** Türkçe karakterleri çözerek URL dostu slug üretir. */
export function slugify(input: string): string {
  return input
    .split("")
    .map((ch) => TR_MAP[ch] ?? ch)
    .join("")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const tl = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  maximumFractionDigits: 0,
});

/** Fiyatı "12.500 ₺" biçiminde gösterir; null ise teklif metni. */
export function formatPrice(price: number | null): string {
  if (price == null) return "Fiyat için sorun";
  return tl.format(price);
}

export const GENDER_LABEL: Record<string, string> = {
  erkek: "Erkek",
  bayan: "Kadın",
  unisex: "Unisex",
};

/** İstemci tarafı arama (sayfaya geçilen ürün listesi üzerinde çalışır). */
export function filterProducts(
  products: Product[],
  query: string,
  brandName: (slug: string) => string
): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return products;
  return products.filter((p) => {
    const hay = `${brandName(p.brandSlug)} ${p.name} ${p.series ?? ""} ${p.reference ?? ""}`.toLowerCase();
    return hay.includes(q);
  });
}
