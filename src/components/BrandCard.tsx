import Link from "next/link";
import SmartImage from "./SmartImage";
import type { Brand } from "@/lib/types";

export default function BrandCard({
  brand,
  cover,
  count,
}: {
  brand: Brand;
  cover?: string;
  count?: number;
}) {
  return (
    <Link
      href={`/marka/${brand.slug}`}
      className="group relative block aspect-[4/3] overflow-hidden rounded-xl border border-line bg-surface"
    >
      <SmartImage
        src={cover}
        alt={brand.name}
        fallbackLabel={brand.name}
        className="transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-serif text-xl text-white">{brand.name}</h3>
        {brand.blurb && (
          <p className="mt-1 text-xs text-white/75 line-clamp-1">{brand.blurb}</p>
        )}
        {typeof count === "number" && (
          <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-gold-light">
            {count} Model
          </p>
        )}
      </div>
    </Link>
  );
}
