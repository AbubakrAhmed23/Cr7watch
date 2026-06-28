// Cr7watch — site geneli sabit ayarlar.
// Not: Bu değerler ileride Supabase "site_settings" tablosundan da yönetilebilir;
// burada güvenli varsayılanlar tutuluyor.

export const SITE = {
  name: "Cr7watch",
  tagline: "Zamanın Zarafeti",
  description:
    "Cr7watch — Rolex, Patek Philippe, Audemars Piguet, Cartier ve daha fazlası. Özenle seçilmiş lüks saat koleksiyonu. Beğendiğiniz modeli WhatsApp ile sipariş edin.",
  url: "https://cr7watch.com",

  // İletişim
  whatsappRaw: "05550776552", // yerel format (gösterim)
  whatsappIntl: "905550776552", // wa.me için uluslararası format
  phoneDisplay: "0555 077 65 52",
  instagram: "https://instagram.com/cr7watch",
  instagramHandle: "@cr7watch",
  email: "",

  // Mağaza / firma
  company: "Saray Bijuteri Tic. Ltd. Şti.",
  address: "Tahtakale, Tomruk Sk. No:18, 34116 Fatih/İstanbul",
  mapsQuery: "Saray Bijuteri Tic. Ltd. Şti., Tomruk Sk. No:18, 34116 Fatih/İstanbul",

  // Güven unsurları (ana sayfa)
  trust: [
    { title: "Orijinal Kalite", text: "Birebir detay, premium işçilik." },
    { title: "Hızlı Kargo", text: "Türkiye’nin her yerine güvenli gönderim." },
    { title: "WhatsApp Destek", text: "Sorularınız için anında yanıt." },
  ],
} as const;

/** WhatsApp sipariş linki üretir (mesaj önceden doldurulmuş). */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${SITE.whatsappIntl}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Belirli bir model için sipariş mesajı linki. */
export function orderLink(productName: string, brandName?: string): string {
  const label = brandName ? `${brandName} ${productName}` : productName;
  return whatsappLink(
    `Merhaba, "${label}" modeliyle ilgileniyorum. Fiyat ve sipariş bilgisi alabilir miyim?`
  );
}
