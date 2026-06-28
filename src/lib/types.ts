// Cr7watch — veri tipleri (seed verisi ve ileride Supabase ile aynı şekil).

export type Gender = "erkek" | "bayan" | "unisex";

export interface ProductImage {
  /** Görsel adresi (boşsa zarif placeholder gösterilir). */
  url: string;
  /** Açı/etiket — galeride alt yazı (ör. "Ön", "Yan", "Kordon"). */
  label?: string;
}

export interface Product {
  id: string;
  brandSlug: string;
  name: string;
  slug: string;
  /** Model referansı / kod (opsiyonel). */
  reference?: string;
  /** Model serisi (ör. "Submariner", "Nautilus"). */
  series?: string;
  gender: Gender;
  /** Fiyat (TL). null ise "Fiyat için sorun" gösterilir. */
  price: number | null;
  description?: string;
  images: ProductImage[];
  isFeatured?: boolean;
  isActive?: boolean;
  /** true ise "Satıldı" rozeti gösterilir (üründe kalır, sipariş kapalı). */
  sold?: boolean;
}

export interface Brand {
  slug: string;
  name: string;
  /** Kısa tanıtım metni (marka sayfası başlığı altında). */
  blurb?: string;
  /** Marka kahraman görseli (opsiyonel). */
  heroImage?: string;
  sortOrder?: number;
}
