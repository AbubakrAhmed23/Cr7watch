import type { Metadata } from "next";
import SearchClient from "@/components/SearchClient";
import { getActiveProducts, getBrands } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Ara",
  description: "Cr7watch koleksiyonunda marka, model veya referansa göre arama yapın.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const [{ q }, products, brands] = await Promise.all([
    searchParams,
    getActiveProducts(),
    getBrands(),
  ]);
  const brandNames: Record<string, string> = {};
  brands.forEach((b) => (brandNames[b.slug] = b.name));

  // Aramaya gönderilen veriyi hafiflet: arama yalnızca marka/ad/seri/referansı
  // kullanır, kart yalnızca ilk görseli gösterir. Uzun açıklamayı ve fazladan
  // görsel adreslerini client'a taşımayız → mobilde geçiş çok daha akıcı.
  const lite = products.map((p) => ({
    ...p,
    images: p.images.slice(0, 1),
    description: undefined,
  }));

  return (
    <div className="container-luxe py-12 md:py-16">
      <header className="mb-8 text-center">
        <p className="eyebrow mb-3">Koleksiyonda Ara</p>
        <h1 className="font-serif text-4xl md:text-5xl">Model Ara</h1>
      </header>

      <SearchClient
        products={lite}
        brandNames={brandNames}
        initialQuery={q ?? ""}
      />
    </div>
  );
}
