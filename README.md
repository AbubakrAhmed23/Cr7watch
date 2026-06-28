# Cr7watch — Lüks Saat Katalog Sitesi

Profesyonel, lüks hissi veren bir saat **katalog** sitesi. Müşteriler markaları/modelleri gezer,
beğendiği modeli **WhatsApp** ile sipariş eder. Saatçi, **şifreli admin panelden** ürün ekler/siler,
fiyat değiştirir, çoklu fotoğraf yükler.

- **Teknoloji:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Supabase · Vercel
- **Dil:** Türkçe
- **WhatsApp:** 0555 077 65 52

> Not: Supabase **kurulmadan da** site çalışır — bu durumda yerleşik demo (seed) verisi gösterilir.
> Admin panelinin çalışması için Supabase gerekir.

---

## 1) Yerelde Çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıdan `http://localhost:3000` açın. (Port doluysa Next otomatik başka port seçer.)

---

## 2) Supabase Kurulumu (admin panel için)

1. [supabase.com](https://supabase.com) → ücretsiz hesap aç → **New Project** oluştur.
2. Proje açıldıktan sonra sol menü **SQL Editor**:
   - `supabase/schema.sql` içeriğini yapıştır → **Run** (tablolar, güvenlik, foto deposu).
   - `supabase/seed-brands.sql` içeriğini yapıştır → **Run** (21 markayı ekler).
   - `supabase/seed-products.sql` içeriğini yapıştır → **Run** (210 modeli + görsellerini ekler; admin'den düzenlenebilir).
3. **Yönetici kullanıcı** oluştur: sol menü **Authentication → Users → Add user** →
   saatçinin e-postası + şifresi (Email confirm’i kapalı/otomatik onaylı seç).
4. **Anahtarlar:** sol menü **Project Settings → API**:
   - `Project URL`
   - `anon public` key
5. Proje kökünde `.env.local` dosyası oluştur (`.env.example`’ı kopyalayabilirsin):

   ```
   NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
   ```

6. `npm run dev` ile yeniden başlat. Artık site Supabase’den okur.

---

## 3) Admin Paneli Kullanımı

- Adres: `/admin` (giriş: `/admin/login`)
- Giriş: yukarıda oluşturduğun e-posta + şifre.
- **Ürünler:** ekle / düzenle / sil, öne çıkan & “Satıldı” işaretle.
- **Ürün formu:** ad, marka, seri, cinsiyet, **fiyat**, açıklama + **çoklu fotoğraf yükleme**
  (ilk foto kapak; oklarla sırala; sil). Fotoğraflar Supabase Storage’a yüklenir.
- **Markalar:** marka ekle / düzenle / sil.
- **Ayarlar:** WhatsApp, Instagram, ana sayfa metinleri.

> **Önemli (fotoğraflar):** Şu anda demo görselleri internetten (yüksek çözünürlüklü) konuldu.
> Saatçi, her model için **kendi gerçek fotoğraflarını** admin panelden yükleyip değiştirmeli.
> Bir markada ilk gerçek ürün eklendiğinde site o markada DB verisini gösterir.

---

## 4) Vercel’e Yayınlama

1. Kodu bir GitHub deposuna gönder.
2. [vercel.com](https://vercel.com) → **Add New → Project** → repoyu seç.
3. **Environment Variables** kısmına `.env.local`’daki 2 değişkeni ekle.
4. **Deploy.** Ardından alan adını (ör. `cr7watch.com`) Vercel’den bağla.
5. Canlı URL’yi `src/lib/site.ts` içindeki `url` alanına yaz (SEO/OG için).

---

## Proje Yapısı (özet)

```
src/
  app/
    (site)/        → genel site (ana sayfa, markalar, marka, saat, arama, iletisim)
    admin/         → yönetim paneli (login + (panel))
    sitemap.ts, robots.ts, icon.svg, opengraph-image.tsx
  components/      → Header, Footer, ProductCard, ProductGallery, HeroSlideshow, admin/*
  data/catalog.ts  → demo (seed) marka & model verisi
  lib/             → site ayarları, tipler, veri erişimi (catalog), admin işlemleri, supabase
supabase/
  schema.sql, seed-brands.sql
```

İçerik (marka adları, model fiyatları, fotoğraflar) bilgilendirme amaçlıdır ve admin panelden yönetilir.
