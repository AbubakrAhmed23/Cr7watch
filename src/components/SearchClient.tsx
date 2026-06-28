"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { filterProducts } from "@/lib/utils";
import type { Product } from "@/lib/types";

export default function SearchClient({
  products,
  brandNames,
}: {
  products: Product[];
  brandNames: Record<string, string>;
}) {
  const [q, setQ] = useState("");
  const nameOf = (slug: string) => brandNames[slug] ?? "";
  const results = useMemo(
    () => filterProducts(products, q, nameOf),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [q, products]
  );

  return (
    <>
      <div className="mx-auto mb-10 max-w-xl">
        <div className="relative">
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Marka, model veya referans ara… (ör. Rolex, Nautilus)"
            autoFocus
            className="w-full rounded-full border border-line bg-surface px-5 py-3.5 pr-12 text-sm text-cream outline-none transition-colors placeholder:text-muted-2 focus:border-gold"
          />
          <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-muted">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" strokeLinecap="round" />
            </svg>
          </span>
        </div>
      </div>

      <p className="mb-6 text-sm text-muted">{results.length} sonuç</p>

      {results.length === 0 ? (
        <p className="py-16 text-center text-muted">
          “{q}” için sonuç bulunamadı. Farklı bir kelime deneyin.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {results.map((p) => (
            <ProductCard key={p.id} product={p} brandName={nameOf(p.brandSlug)} />
          ))}
        </div>
      )}
    </>
  );
}
