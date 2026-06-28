import type { Metadata } from "next";
import BrandCard from "@/components/BrandCard";
import { getBrands, getBrandCounts, getActiveProducts, brandCover } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Markalar",
  description:
    "Cr7watch markaları — Rolex, Patek Philippe, Audemars Piguet, Cartier, Richard Mille ve daha fazlası.",
};

export const revalidate = 60;

export default async function BrandsPage() {
  const [brands, counts, products] = await Promise.all([
    getBrands(),
    getBrandCounts(),
    getActiveProducts(),
  ]);

  return (
    <div className="container-luxe py-12 md:py-16">
      <header className="mb-10 text-center">
        <p className="eyebrow mb-3">Koleksiyon</p>
        <h1 className="font-serif text-4xl md:text-5xl">Tüm Markalar</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Dünyanın en prestijli saat markalarından özenle seçilmiş modeller.
        </p>
        <div className="gold-rule mx-auto mt-6 w-24" />
      </header>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {brands.map((b) => (
          <BrandCard
            key={b.slug}
            brand={b}
            cover={brandCover(b, products)}
            count={counts[b.slug]}
          />
        ))}
      </div>
    </div>
  );
}
