import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";
import ProductCard from "@/components/ProductCard";
import BrandCard from "@/components/BrandCard";
import BrandMarquee from "@/components/BrandMarquee";
import Reveal from "@/components/Reveal";
import { SITE, whatsappLink } from "@/lib/site";
import {
  getBrands,
  getFeatured,
  getBrandCounts,
  getActiveProducts,
  brandCover,
} from "@/lib/catalog";

// Admin değişiklikleri en geç 60 sn'de canlıya yansır (ISR).
export const revalidate = 60;

export default async function Home() {
  const [featured, allBrands, counts, allProducts] = await Promise.all([
    getFeatured(8),
    getBrands(),
    getBrandCounts(),
    getActiveProducts(),
  ]);
  const brands = allBrands.slice(0, 8);
  const nameOf = (slug: string) => allBrands.find((b) => b.slug === slug)?.name;

  // Hero arka plan görselleri: SADECE dosyalar/ klasöründen gelen gerçek ürün
  // fotoğrafları — TÜM markaları tanıtmak için her markadan birer kapak.
  const heroImages: string[] = [];
  const seenBrands = new Set<string>();
  for (const p of allProducts) {
    const url = p.images[0]?.url;
    if (!url || !url.startsWith("/urunler/")) continue;
    if (seenBrands.has(p.brandSlug)) continue;
    seenBrands.add(p.brandSlug);
    heroImages.push(url);
  }

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative flex min-h-[78vh] items-center md:min-h-[88vh]">
        <HeroSlideshow images={heroImages} />
        <div className="container-luxe">
          <div className="max-w-2xl animate-fade-up">
            <p className="eyebrow mb-4">{SITE.tagline}</p>
            <h1 className="font-serif text-4xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
              Bilekteki <span className="text-gold-gradient">Zarafet</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/80 md:text-lg">
              Rolex, Patek Philippe, Audemars Piguet ve daha fazlası. Özenle
              seçilmiş premium saat koleksiyonunu keşfedin; beğendiğinizi tek
              dokunuşla WhatsApp’tan sipariş edin.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/markalar" className="btn-gold rounded-full px-7 py-3 text-sm">
                Koleksiyonu Keşfet
              </Link>
              <a
                href={whatsappLink("Merhaba, koleksiyon hakkında bilgi almak istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline rounded-full px-7 py-3 text-sm"
              >
                WhatsApp ile İletişim
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- GÜVEN UNSURLARI ---------------- */}
      <section className="border-y border-line bg-ink-soft">
        <div className="container-luxe grid grid-cols-1 gap-6 py-10 sm:grid-cols-3">
          {SITE.trust.map((t) => (
            <div key={t.title} className="text-center sm:text-left">
              <h3 className="font-serif text-base text-gold-light">{t.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- AKAN MARKA ŞERİDİ ---------------- */}
      <BrandMarquee brands={allBrands} />

      {/* ---------------- ÖNE ÇIKANLAR ---------------- */}
      <section className="container-luxe py-16 md:py-24">
        <SectionHead
          eyebrow="Seçkin Modeller"
          title="Öne Çıkanlar"
          link={{ href: "/markalar", label: "Tümünü Gör" }}
        />
        <Reveal className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} brandName={nameOf(p.brandSlug)} />
          ))}
        </Reveal>
      </section>

      {/* ---------------- MARKALAR ---------------- */}
      <section className="container-luxe pb-16 md:pb-24">
        <SectionHead
          eyebrow="Dünya Markaları"
          title="Markalar"
          link={{ href: "/markalar", label: "Tüm Markalar" }}
        />
        <Reveal className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {brands.map((b) => (
            <BrandCard
              key={b.slug}
              brand={b}
              cover={brandCover(b, allProducts)}
              count={counts[b.slug]}
            />
          ))}
        </Reveal>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="container-luxe pb-24">
        <Reveal className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-surface to-ink-soft px-6 py-14 text-center md:py-20">
          <div className="gold-rule mx-auto mb-8 w-24" />
          <h2 className="font-serif text-3xl md:text-4xl">
            Aradığınız modeli bulamadınız mı?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Stoklarımız sürekli güncelleniyor. İstediğiniz marka veya modeli
            WhatsApp’tan yazın, sizin için bulalım.
          </p>
          <a
            href={whatsappLink("Merhaba, belirli bir model arıyorum.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-8 inline-block rounded-full px-8 py-3 text-sm"
          >
            WhatsApp’tan Yazın · {SITE.phoneDisplay}
          </a>
        </Reveal>
      </section>
    </>
  );
}

function SectionHead({
  eyebrow,
  title,
  link,
}: {
  eyebrow: string;
  title: string;
  link?: { href: string; label: string };
}) {
  return (
    <div className="mb-8 flex items-end justify-between">
      <div>
        <p className="eyebrow mb-2">{eyebrow}</p>
        <h2 className="font-serif text-3xl md:text-4xl">{title}</h2>
      </div>
      {link && (
        <Link
          href={link.href}
          className="hidden text-sm text-muted transition-colors hover:text-gold-light sm:block"
        >
          {link.label} →
        </Link>
      )}
    </div>
  );
}
