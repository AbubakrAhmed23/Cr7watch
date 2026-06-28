import Link from "next/link";
import { SITE, whatsappLink } from "@/lib/site";
import { getBrands } from "@/lib/catalog";

export default async function Footer() {
  const brands = (await getBrands()).slice(0, 10);
  const year = 2026;

  return (
    <footer className="mt-24 border-t border-line bg-ink-soft">
      <div className="container-luxe grid gap-10 py-14 md:grid-cols-4">
        {/* Marka */}
        <div className="md:col-span-1">
          <div className="font-serif text-2xl font-bold">
            Cr7<span className="text-gold-gradient">watch</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            {SITE.tagline}. Özenle seçilmiş lüks saat koleksiyonu. Beğendiğiniz
            modeli WhatsApp ile sipariş edin.
          </p>
        </div>

        {/* Markalar */}
        <div>
          <h3 className="eyebrow mb-4">Markalar</h3>
          <ul className="space-y-2 text-sm">
            {brands.map((b) => (
              <li key={b.slug}>
                <Link href={`/marka/${b.slug}`} className="text-muted transition-colors hover:text-gold-light">
                  {b.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kurumsal */}
        <div>
          <h3 className="eyebrow mb-4">Keşfet</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markalar" className="text-muted hover:text-gold-light">Tüm Markalar</Link></li>
            <li><Link href="/arama" className="text-muted hover:text-gold-light">Arama</Link></li>
            <li><Link href="/iletisim" className="text-muted hover:text-gold-light">İletişim</Link></li>
          </ul>
        </div>

        {/* İletişim */}
        <div>
          <h3 className="eyebrow mb-4">İletişim</h3>
          <ul className="space-y-3 text-sm text-muted">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light">
                WhatsApp · {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light">
                Instagram · {SITE.instagramHandle}
              </a>
            </li>
            <li className="pt-2 leading-relaxed">
              <span className="block text-cream/90">{SITE.company}</span>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-light"
              >
                {SITE.address}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line/60">
        <div className="container-luxe flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-2 md:flex-row">
          <p>© {year} Cr7watch. Tüm hakları saklıdır.</p>
          <p>Fiyatlar bilgilendirme amaçlıdır; güncel fiyat için WhatsApp’tan yazın.</p>
        </div>
      </div>
    </footer>
  );
}
