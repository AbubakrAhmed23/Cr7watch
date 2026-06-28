import type { Metadata } from "next";
import { SITE, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Cr7watch ile iletişime geçin — WhatsApp ve Instagram.",
};

export default function ContactPage() {
  return (
    <div className="container-luxe py-12 md:py-20">
      <header className="mb-12 text-center">
        <p className="eyebrow mb-3">Bize Ulaşın</p>
        <h1 className="font-serif text-4xl md:text-5xl">İletişim</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Sipariş, fiyat ve stok bilgisi için en hızlı yol WhatsApp. Aşağıdaki
          butondan anında yazabilirsiniz.
        </p>
        <div className="gold-rule mx-auto mt-6 w-24" />
      </header>

      <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
        <a
          href={whatsappLink("Merhaba, bilgi almak istiyorum.")}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl border border-line bg-surface p-8 text-center transition-colors hover:border-gold/50"
        >
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
            <svg width="26" height="26" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16.04 4C9.96 4 5 8.95 5 15.02c0 2.05.56 4.04 1.62 5.79L5 28l7.36-1.93a11.07 11.07 0 0 0 3.68.63C22.13 26.7 27.1 21.75 27.1 15.68 27.1 9.6 22.13 4 16.04 4Z" />
            </svg>
          </div>
          <h2 className="font-serif text-xl">WhatsApp</h2>
          <p className="mt-1 text-gold-light">{SITE.phoneDisplay}</p>
          <p className="mt-3 text-xs text-muted">Anında mesaj gönderin →</p>
        </a>

        <a
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl border border-line bg-surface p-8 text-center transition-colors hover:border-gold/50"
        >
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <h2 className="font-serif text-xl">Instagram</h2>
          <p className="mt-1 text-gold-light">{SITE.instagramHandle}</p>
          <p className="mt-3 text-xs text-muted">Koleksiyonu takip edin →</p>
        </a>
      </div>

      {/* Mağaza / Adres */}
      <div className="mx-auto mt-12 max-w-3xl">
        <div className="rounded-2xl border border-line bg-surface p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </div>
            <div>
              <h2 className="font-serif text-xl">Mağaza</h2>
              <p className="mt-1 font-medium text-cream">{SITE.company}</p>
              <p className="mt-1 text-sm text-muted">{SITE.address}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-gold-light hover:underline"
              >
                Yol tarifi al →
              </a>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-line">
            <iframe
              title="Cr7watch mağaza konumu"
              src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`}
              width="100%"
              height="320"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, filter: "grayscale(0.2) contrast(1.05)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
