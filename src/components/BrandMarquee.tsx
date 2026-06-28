import Link from "next/link";
import type { Brand } from "@/lib/types";

/** Ana sayfada zarifçe akan marka şeridi (üzerine gelince durur). */
export default function BrandMarquee({ brands }: { brands: Brand[] }) {
  if (!brands.length) return null;
  const items = [...brands, ...brands]; // kesintisiz döngü için iki kez

  return (
    <div className="marquee-mask overflow-hidden border-y border-line bg-ink-soft/60 py-5">
      <div className="marquee-track items-center gap-10">
        {items.map((b, i) => (
          <Link
            key={`${b.slug}-${i}`}
            href={`/marka/${b.slug}`}
            className="group flex items-center gap-10 text-muted-2 transition-colors hover:text-gold"
            aria-hidden={i >= brands.length}
          >
            <span className="whitespace-nowrap font-serif text-xl tracking-wide md:text-2xl">
              {b.name}
            </span>
            <span className="h-1.5 w-1.5 rotate-45 bg-gold/50" />
          </Link>
        ))}
      </div>
    </div>
  );
}
