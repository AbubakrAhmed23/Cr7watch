"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Ana sayfa hero arka planı: saat fotoğrafları yumuşak geçişle değişir.
 * Görseller props ile gelir (admin/seed yönetebilir).
 */
export default function HeroSlideshow({ images }: { images: string[] }) {
  const slides = images.length ? images : [""];
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-ink">
      {slides.map((src, i) =>
        src ? (
          <Image
            key={i}
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover transition-opacity duration-[1500ms] ease-in-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            style={{ transform: "scale(1.05)" }}
          />
        ) : null
      )}
      {/* Açık tema okuma katmanları: solda fildişi yıkama, sağda foto görünür */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/65 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
    </div>
  );
}
