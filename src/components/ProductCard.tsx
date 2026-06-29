import Link from "next/link";
import SmartImage from "./SmartImage";
import { formatPrice, GENDER_LABEL } from "@/lib/utils";
import type { Product } from "@/lib/types";

export default function ProductCard({
  product,
  brandName,
}: {
  product: Product;
  brandName?: string;
}) {
  const primary = product.images[0];

  return (
    <Link
      href={`/saat/${product.slug}`}
      className="group block overflow-hidden rounded-xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-luxe"
    >
      <div className="relative aspect-square overflow-hidden bg-ink-soft">
        <SmartImage
          src={primary?.url}
          alt={`${brandName ?? ""} ${product.name}`}
          fallbackLabel={brandName}
          className="transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        {product.sold ? (
          <span className="absolute left-3 top-3 rounded-full bg-red-900/90 px-3 py-1 text-[11px] font-medium tracking-wide text-red-100">
            Satıldı
          </span>
        ) : (
          product.gender !== "unisex" && (
            <span className="absolute left-3 top-3 rounded-full border border-line bg-ink/90 px-3 py-1 text-[11px] tracking-wide text-cream/90">
              {GENDER_LABEL[product.gender]}
            </span>
          )
        )}
      </div>

      <div className="p-4">
        {brandName && (
          <p className="text-[11px] uppercase tracking-[0.18em] text-gold/90">
            {brandName}
          </p>
        )}
        <h3 className="mt-1 font-serif text-lg leading-tight text-cream">
          {product.name}
        </h3>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm font-medium text-cream">
            {formatPrice(product.price)}
          </span>
          <span className="text-xs text-muted transition-colors group-hover:text-gold-light">
            İncele →
          </span>
        </div>
      </div>
    </Link>
  );
}
