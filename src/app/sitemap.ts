import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { brands as seedBrands, products as seedProducts } from "@/data/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, "");

  const staticPages = ["", "/markalar", "/arama", "/iletisim"].map((p) => ({
    url: `${base}${p}`,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.7,
  }));

  const brandPages = seedBrands.map((b) => ({
    url: `${base}/marka/${b.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const productPages = seedProducts.map((p) => ({
    url: `${base}/saat/${p.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...brandPages, ...productPages];
}
