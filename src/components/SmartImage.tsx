"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  src?: string;
  alt: string;
  /** Görsel yüklenemezse placeholder'da gösterilecek etiket (ör. marka adı). */
  fallbackLabel?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * next/image üzerine ince bir sarmalayıcı.
 * Kaynak boşsa veya yüklenemezse zarif, markalı bir placeholder gösterir —
 * böylece sitede asla "kırık görsel" görünmez.
 */
export default function SmartImage({
  src,
  alt,
  fallbackLabel,
  className,
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority,
}: Props) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-surface-2 to-ink-soft ${className ?? ""}`}
        aria-label={alt}
      >
        <div className="flex flex-col items-center gap-2 px-4 text-center">
          <WatchGlyph />
          {fallbackLabel && (
            <span className="font-serif text-sm tracking-wide text-muted">
              {fallbackLabel}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className ?? ""}`}
      onError={() => setFailed(true)}
    />
  );
}

function WatchGlyph() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-gold)"
      strokeWidth="1.2"
      className="opacity-70"
    >
      <circle cx="12" cy="12" r="6" />
      <path d="M12 9v3l2 1.5" strokeLinecap="round" />
      <path d="M9 4.5 9.7 7M15 4.5 14.3 7M9 19.5l.7-2.5M15 19.5l-.7-2.5" strokeLinecap="round" />
    </svg>
  );
}
