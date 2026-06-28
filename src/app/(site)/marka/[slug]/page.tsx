import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import BrandProducts from "@/components/BrandProducts";
import { getBrand, getProductsByBrand } from "@/lib/catalog";
import { brands as seedBrands } from "@/data/catalog";

export const revalidate = 60;

export function generateStaticParams() {
  return seedBrands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = await getBrand(slug);
  if (!brand) return { title: "Marka bulunamadı" };
  return {
    title: brand.name,
    description: `${brand.name} modelleri — ${brand.blurb ?? "Cr7watch koleksiyonu."}`,
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = await getBrand(slug);
  if (!brand) notFound();

  const products = await getProductsByBrand(slug);

  return (
    <div className="container-luxe py-10 md:py-14">
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-gold-light">Ana Sayfa</Link>
        <span className="px-2">/</span>
        <Link href="/markalar" className="hover:text-gold-light">Markalar</Link>
        <span className="px-2">/</span>
        <span className="text-cream">{brand.name}</span>
      </nav>

      <header className="mb-8">
        <h1 className="font-serif text-4xl md:text-5xl">{brand.name}</h1>
        {brand.blurb && <p className="mt-3 max-w-xl text-muted">{brand.blurb}</p>}
      </header>

      {products.length === 0 ? (
        <p className="py-16 text-center text-muted">
          Bu markada henüz model eklenmedi. Yakında!
        </p>
      ) : (
        <BrandProducts products={products} brandName={brand.name} />
      )}
    </div>
  );
}
