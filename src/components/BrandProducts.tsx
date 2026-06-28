"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import type { Product } from "@/lib/types";

type SortKey = "default" | "price-asc" | "price-desc";
type GenderFilter = "all" | "erkek" | "bayan" | "unisex";

const GENDER_TABS: { key: GenderFilter; label: string }[] = [
  { key: "all", label: "Tümü" },
  { key: "erkek", label: "Erkek" },
  { key: "bayan", label: "Kadın" },
  { key: "unisex", label: "Unisex" },
];

export default function BrandProducts({
  products,
  brandName,
}: {
  products: Product[];
  brandName?: string;
}) {
  const [gender, setGender] = useState<GenderFilter>("all");
  const [series, setSeries] = useState<string>("all");
  const [sort, setSort] = useState<SortKey>("default");

  const seriesOptions = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => p.series && set.add(p.series));
    return ["all", ...Array.from(set).sort()];
  }, [products]);

  const hasGender = useMemo(() => {
    const set = new Set(products.map((p) => p.gender));
    return set.size > 1;
  }, [products]);

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (gender !== "all" && p.gender !== gender) return false;
      if (series !== "all" && p.series !== series) return false;
      return true;
    });
    if (sort === "price-asc") {
      list = [...list].sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
    } else if (sort === "price-desc") {
      list = [...list].sort((a, b) => (b.price ?? -Infinity) - (a.price ?? -Infinity));
    }
    return list;
  }, [products, gender, series, sort]);

  return (
    <div>
      {/* Filtre çubuğu */}
      <div className="mb-8 flex flex-col gap-4 border-y border-line py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          {hasGender &&
            GENDER_TABS.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setGender(t.key)}
                className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                  gender === t.key
                    ? "bg-gold text-[#1a1407]"
                    : "border border-line text-muted hover:text-gold-light"
                }`}
              >
                {t.label}
              </button>
            ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {seriesOptions.length > 2 && (
            <select
              value={series}
              onChange={(e) => setSeries(e.target.value)}
              className="rounded-md border border-line bg-surface px-3 py-2 text-sm text-cream outline-none focus:border-gold"
            >
              {seriesOptions.map((s) => (
                <option key={s} value={s}>
                  {s === "all" ? "Tüm Seriler" : s}
                </option>
              ))}
            </select>
          )}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="rounded-md border border-line bg-surface px-3 py-2 text-sm text-cream outline-none focus:border-gold"
          >
            <option value="default">Sıralama</option>
            <option value="price-asc">Fiyat: Artan</option>
            <option value="price-desc">Fiyat: Azalan</option>
          </select>
        </div>
      </div>

      {/* Sonuç sayısı */}
      <p className="mb-6 text-sm text-muted">{filtered.length} model</p>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-muted">
          Bu filtreye uygun model bulunamadı.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} brandName={brandName} />
          ))}
        </div>
      )}
    </div>
  );
}
