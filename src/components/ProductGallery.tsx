"use client";

import { useState } from "react";
import SmartImage from "./SmartImage";
import type { ProductImage } from "@/lib/types";

export default function ProductGallery({
  images,
  alt,
  fallbackLabel,
}: {
  images: ProductImage[];
  alt: string;
  fallbackLabel?: string;
}) {
  const safe = images.length ? images : [{ url: "", label: "Görsel" }];
  const [index, setIndex] = useState(0);
  const current = safe[index];
  const many = safe.length > 1;

  const go = (dir: number) =>
    setIndex((i) => (i + dir + safe.length) % safe.length);

  return (
    <div className="flex flex-col gap-4">
      {/* Ana görsel */}
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-line bg-ink-soft">
        <SmartImage
          src={current.url}
          alt={`${alt} — ${current.label ?? ""}`}
          fallbackLabel={fallbackLabel}
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        {current.label && (
          <span className="absolute left-4 top-4 rounded-full border border-line bg-ink/70 px-3 py-1 text-xs tracking-wide text-cream/90 backdrop-blur">
            {current.label}
          </span>
        )}

        {many && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Önceki açı"
              className="group absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-ink/70 text-cream backdrop-blur transition-colors hover:border-gold hover:text-gold-light"
            >
              <Arrow dir="left" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Sonraki açı"
              className="group absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-ink/70 text-cream backdrop-blur transition-colors hover:border-gold hover:text-gold-light"
            >
              <Arrow dir="right" />
            </button>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
              {safe.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-gold" : "w-1.5 bg-cream/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Küçük resimler */}
      {many && (
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">
          {safe.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Açı ${i + 1}`}
              className={`relative aspect-square overflow-hidden rounded-lg border transition-all ${
                i === index ? "border-gold" : "border-line opacity-70 hover:opacity-100"
              }`}
            >
              <SmartImage
                src={img.url}
                alt={`${alt} küçük ${i + 1}`}
                fallbackLabel={fallbackLabel}
                sizes="120px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      {dir === "left" ? (
        <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}
