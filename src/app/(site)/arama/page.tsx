import type { Metadata } from "next";
import SearchClient from "@/components/SearchClient";
import { getActiveProducts, getBrands } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Ara",
  description: "Cr7watch koleksiyonunda marka, model veya referansa göre arama yapın.",
};

export default async function SearchPage() {
  const [products, brands] = await Promise.all([getActiveProducts(), getBrands()]);
  const brandNames: Record<string, string> = {};
  brands.forEach((b) => (brandNames[b.slug] = b.name));

  return (
    <div className="container-luxe py-12 md:py-16">
      <header className="mb-8 text-center">
        <p className="eyebrow mb-3">Koleksiyonda Ara</p>
        <h1 className="font-serif text-4xl md:text-5xl">Model Ara</h1>
      </header>

      <SearchClient products={products} brandNames={brandNames} />
    </div>
  );
}
