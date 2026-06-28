import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductGallery from "@/components/ProductGallery";
import ProductCard from "@/components/ProductCard";
import { getProduct, getBrand, getRelated } from "@/lib/catalog";
import { products as seedProducts } from "@/data/catalog";
import { orderLink, whatsappLink } from "@/lib/site";
import { formatPrice, GENDER_LABEL } from "@/lib/utils";

export const revalidate = 60;

export function generateStaticParams() {
  return seedProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return { title: "Model bulunamadı" };
  const brand = await getBrand(product.brandSlug);
  return {
    title: `${brand?.name ?? ""} ${product.name}`.trim(),
    description: product.description,
    openGraph: { images: product.images[0]?.url ? [product.images[0].url] : [] },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  const brand = await getBrand(product.brandSlug);
  const related = await getRelated(product);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${brand?.name ?? ""} ${product.name}`.trim(),
    image: product.images.map((i) => i.url).filter(Boolean),
    description: product.description,
    brand: { "@type": "Brand", name: brand?.name },
    ...(product.price != null && {
      offers: {
        "@type": "Offer",
        price: product.price,
        priceCurrency: "TRY",
        availability: product.sold
          ? "https://schema.org/OutOfStock"
          : "https://schema.org/InStock",
      },
    }),
  };

  return (
    <div className="container-luxe py-10 md:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-gold-light">Ana Sayfa</Link>
        <span className="px-2">/</span>
        <Link href={`/marka/${product.brandSlug}`} className="hover:text-gold-light">
          {brand?.name}
        </Link>
        <span className="px-2">/</span>
        <span className="text-cream">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Galeri */}
        <ProductGallery
          images={product.images}
          alt={`${brand?.name ?? ""} ${product.name}`}
          fallbackLabel={brand?.name}
        />

        {/* Bilgiler */}
        <div>
          <p className="text-[12px] uppercase tracking-[0.2em] text-gold">
            {brand?.name}
          </p>
          <h1 className="mt-2 font-serif text-3xl md:text-4xl">{product.name}</h1>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
            {product.sold && (
              <span className="rounded-full bg-red-900/80 px-3 py-1 font-medium text-red-100">
                Satıldı
              </span>
            )}
            <span className="rounded-full border border-line px-3 py-1 text-muted">
              {GENDER_LABEL[product.gender]}
            </span>
            {product.series && (
              <span className="rounded-full border border-line px-3 py-1 text-muted">
                {product.series}
              </span>
            )}
            {product.reference && (
              <span className="rounded-full border border-line px-3 py-1 text-muted">
                Ref. {product.reference}
              </span>
            )}
          </div>

          <div className="mt-6 text-2xl font-semibold text-gold-light">
            {formatPrice(product.price)}
          </div>

          {product.description && (
            <p className="mt-6 leading-relaxed text-cream/80">
              {product.description}
            </p>
          )}

          {/* Sipariş */}
          {product.sold ? (
            <div className="mt-8 rounded-xl border border-line bg-surface px-5 py-4 text-sm text-muted">
              Bu model şu anda satıldı. Benzer modeller veya yeni gelenler için
              <a
                href={whatsappLink("Merhaba, satılan bir modelin benzerini arıyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-gold-light underline"
              >
                WhatsApp’tan yazın
              </a>
              .
            </div>
          ) : (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={orderLink(product.name, brand?.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex-1 rounded-full px-6 py-3.5 text-center text-sm"
              >
                WhatsApp ile Sipariş Ver
              </a>
              <a
                href={whatsappLink(
                  `Merhaba, "${brand?.name ?? ""} ${product.name}" için fiyat bilgisi alabilir miyim?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex-1 rounded-full px-6 py-3.5 text-center text-sm"
              >
                Fiyat Sor
              </a>
            </div>
          )}

          <div className="mt-8 space-y-2 border-t border-line pt-6 text-sm text-muted">
            <p>✓ Türkiye geneli güvenli kargo</p>
            <p>✓ Sipariş ve sorularınız için WhatsApp desteği</p>
          </div>
        </div>
      </div>

      {/* Benzer modeller */}
      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-8 font-serif text-2xl md:text-3xl">
            Benzer Modeller
          </h2>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} brandName={brand?.name} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
