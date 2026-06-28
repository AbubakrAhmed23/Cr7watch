// Cr7watch — Katalog verisi (dosyalar/ klasöründen OTOMATİK üretildi).
// Yeniden üretmek için: node scripts/import-photos.mjs
// Marka/model yapısı Drive "dosyalar" ile birebir. Görseller /public/urunler altında.

import type { Brand, Product } from "@/lib/types";

export const brands: Brand[] = [
  {
    "slug": "rolex",
    "name": "Rolex",
    "blurb": "Efsanevi tasarım, zamansız prestij.",
    "sortOrder": 1
  },
  {
    "slug": "patek-philippe",
    "name": "Patek Philippe",
    "blurb": "Kusursuz zarafetin zirvesi.",
    "sortOrder": 2
  },
  {
    "slug": "audemars-piguet",
    "name": "Audemars Piguet",
    "blurb": "Royal Oak ile ikonik duruş.",
    "sortOrder": 3
  },
  {
    "slug": "cartier",
    "name": "Cartier",
    "blurb": "Mücevher inceliğinde saatler.",
    "sortOrder": 4
  },
  {
    "slug": "richard-mille",
    "name": "Richard Mille",
    "blurb": "Teknik sanat, sıra dışı tasarım.",
    "sortOrder": 5
  },
  {
    "slug": "tudor",
    "name": "Tudor",
    "blurb": "Karakterli ve dayanıklı.",
    "sortOrder": 6
  },
  {
    "slug": "tag-heuer",
    "name": "Tag Heuer",
    "blurb": "Yarış pistinden ilham.",
    "sortOrder": 7
  },
  {
    "slug": "jaeger-lecoultre",
    "name": "Jaeger-LeCoultre",
    "blurb": "İnce mekanik ustalığı.",
    "sortOrder": 8
  },
  {
    "slug": "longines",
    "name": "Longines",
    "blurb": "Klasik İsviçre zarafeti.",
    "sortOrder": 9
  },
  {
    "slug": "oris",
    "name": "Oris",
    "blurb": "Spor ve şıklığın dengesi.",
    "sortOrder": 10
  },
  {
    "slug": "rado",
    "name": "Rado",
    "blurb": "Modern malzeme, minimal tasarım.",
    "sortOrder": 11
  },
  {
    "slug": "ulysse-nardin",
    "name": "Ulysse Nardin",
    "blurb": "Denizci ruhlu lüks.",
    "sortOrder": 12
  },
  {
    "slug": "versace",
    "name": "Versace",
    "blurb": "Cesur, gösterişli, ikonik.",
    "sortOrder": 13
  },
  {
    "slug": "bulgari",
    "name": "Bulgari",
    "blurb": "İtalyan tutkusu, mücevher dokunuşu.",
    "sortOrder": 14
  },
  {
    "slug": "invicta",
    "name": "Invicta",
    "blurb": "İddialı ve sportif.",
    "sortOrder": 15
  },
  {
    "slug": "citizen",
    "name": "Citizen",
    "blurb": "Teknoloji ve güvenilirlik.",
    "sortOrder": 16
  },
  {
    "slug": "seven-friday",
    "name": "Seven Friday",
    "blurb": "Endüstriyel, sıra dışı tasarım.",
    "sortOrder": 17
  },
  {
    "slug": "frank-muller",
    "name": "Frank Müller",
    "blurb": "Tonneau kasa, ustalık işi.",
    "sortOrder": 18
  },
  {
    "slug": "gc",
    "name": "GC",
    "blurb": "Şık ve güncel.",
    "sortOrder": 19
  },
  {
    "slug": "washaron",
    "name": "Washaron",
    "blurb": "Klasik tarz, uygun seçenek.",
    "sortOrder": 20
  },
  {
    "slug": "aksesuar",
    "name": "Aksesuar & Kutular",
    "blurb": "Saat ve gözlük kutuları.",
    "sortOrder": 21
  }
];

export const products: Product[] = [
  {
    "id": "p1",
    "brandSlug": "audemars-piguet",
    "name": "Audemars Piguet Erkek 1",
    "slug": "ap-erkek-1",
    "series": "Royal Oak",
    "gender": "erkek",
    "price": null,
    "description": "Audemars Piguet Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/ap-erkek/m1-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/ap-erkek/m1-2.jpg",
        "label": "Açı 2"
      }
    ],
    "isFeatured": true,
    "isActive": true
  },
  {
    "id": "p2",
    "brandSlug": "audemars-piguet",
    "name": "Audemars Piguet Erkek 2",
    "slug": "ap-erkek-2",
    "series": "Royal Oak",
    "gender": "erkek",
    "price": null,
    "description": "Audemars Piguet Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/ap-erkek/m2-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/ap-erkek/m2-2.jpg",
        "label": "Açı 2"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p3",
    "brandSlug": "audemars-piguet",
    "name": "Audemars Piguet Erkek 3",
    "slug": "ap-erkek-3",
    "series": "Royal Oak",
    "gender": "erkek",
    "price": null,
    "description": "Audemars Piguet Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/ap-erkek/m3-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/ap-erkek/m3-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/ap-erkek/m3-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/ap-erkek/m3-4.jpg",
        "label": "Açı 4"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p4",
    "brandSlug": "audemars-piguet",
    "name": "Audemars Piguet Erkek 4",
    "slug": "ap-erkek-4",
    "series": "Royal Oak",
    "gender": "erkek",
    "price": null,
    "description": "Audemars Piguet Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/ap-erkek/m4-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/ap-erkek/m4-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/ap-erkek/m4-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/ap-erkek/m4-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/ap-erkek/m4-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/ap-erkek/m4-6.jpg",
        "label": "Açı 6"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p5",
    "brandSlug": "audemars-piguet",
    "name": "Audemars Piguet Erkek 5",
    "slug": "ap-erkek-5",
    "series": "Royal Oak",
    "gender": "erkek",
    "price": null,
    "description": "Audemars Piguet Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/ap-erkek/m5-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/ap-erkek/m5-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/ap-erkek/m5-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/ap-erkek/m5-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/ap-erkek/m5-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/ap-erkek/m5-6.jpg",
        "label": "Açı 6"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p6",
    "brandSlug": "audemars-piguet",
    "name": "Audemars Piguet Erkek 6",
    "slug": "ap-erkek-6",
    "series": "Royal Oak",
    "gender": "erkek",
    "price": null,
    "description": "Audemars Piguet Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/ap-erkek/m6-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p7",
    "brandSlug": "audemars-piguet",
    "name": "Audemars Piguet Bayan 1",
    "slug": "ap-bayan-1",
    "series": "Royal Oak",
    "gender": "bayan",
    "price": null,
    "description": "Audemars Piguet Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/ap-bayan/m1-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/ap-bayan/m1-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/ap-bayan/m1-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/ap-bayan/m1-4.jpg",
        "label": "Açı 4"
      }
    ],
    "isFeatured": true,
    "isActive": true
  },
  {
    "id": "p8",
    "brandSlug": "audemars-piguet",
    "name": "Audemars Piguet Bayan 2",
    "slug": "ap-bayan-2",
    "series": "Royal Oak",
    "gender": "bayan",
    "price": null,
    "description": "Audemars Piguet Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/ap-bayan/m2-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p9",
    "brandSlug": "audemars-piguet",
    "name": "Audemars Piguet Bayan 3",
    "slug": "ap-bayan-3",
    "series": "Royal Oak",
    "gender": "bayan",
    "price": null,
    "description": "Audemars Piguet Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/ap-bayan/m3-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/ap-bayan/m3-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/ap-bayan/m3-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/ap-bayan/m3-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/ap-bayan/m3-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/ap-bayan/m3-6.jpg",
        "label": "Açı 6"
      },
      {
        "url": "/urunler/ap-bayan/m3-7.jpg",
        "label": "Açı 7"
      },
      {
        "url": "/urunler/ap-bayan/m3-8.jpg",
        "label": "Açı 8"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p10",
    "brandSlug": "audemars-piguet",
    "name": "Audemars Piguet Bayan 4",
    "slug": "ap-bayan-4",
    "series": "Royal Oak",
    "gender": "bayan",
    "price": null,
    "description": "Audemars Piguet Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/ap-bayan/m4-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/ap-bayan/m4-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/ap-bayan/m4-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/ap-bayan/m4-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/ap-bayan/m4-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/ap-bayan/m4-6.jpg",
        "label": "Açı 6"
      },
      {
        "url": "/urunler/ap-bayan/m4-7.jpg",
        "label": "Açı 7"
      },
      {
        "url": "/urunler/ap-bayan/m4-8.jpg",
        "label": "Açı 8"
      },
      {
        "url": "/urunler/ap-bayan/m4-9.jpg",
        "label": "Açı 9"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p11",
    "brandSlug": "bulgari",
    "name": "Bulgari Bayan 1",
    "slug": "bulgari-bayan-1",
    "gender": "bayan",
    "price": null,
    "description": "Bulgari Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/bulgari-bayan/m1-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/bulgari-bayan/m1-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/bulgari-bayan/m1-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/bulgari-bayan/m1-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/bulgari-bayan/m1-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/bulgari-bayan/m1-6.jpg",
        "label": "Açı 6"
      },
      {
        "url": "/urunler/bulgari-bayan/m1-7.jpg",
        "label": "Açı 7"
      },
      {
        "url": "/urunler/bulgari-bayan/m1-8.jpg",
        "label": "Açı 8"
      },
      {
        "url": "/urunler/bulgari-bayan/m1-9.jpg",
        "label": "Açı 9"
      },
      {
        "url": "/urunler/bulgari-bayan/m1-10.jpg",
        "label": "Açı 10"
      },
      {
        "url": "/urunler/bulgari-bayan/m1-11.jpg",
        "label": "Açı 11"
      },
      {
        "url": "/urunler/bulgari-bayan/m1-12.jpg",
        "label": "Açı 12"
      },
      {
        "url": "/urunler/bulgari-bayan/m1-13.jpg",
        "label": "Açı 13"
      },
      {
        "url": "/urunler/bulgari-bayan/m1-14.jpg",
        "label": "Açı 14"
      },
      {
        "url": "/urunler/bulgari-bayan/m1-15.jpg",
        "label": "Açı 15"
      },
      {
        "url": "/urunler/bulgari-bayan/m1-16.jpg",
        "label": "Açı 16"
      },
      {
        "url": "/urunler/bulgari-bayan/m1-17.jpg",
        "label": "Açı 17"
      },
      {
        "url": "/urunler/bulgari-bayan/m1-18.jpg",
        "label": "Açı 18"
      },
      {
        "url": "/urunler/bulgari-bayan/m1-19.jpg",
        "label": "Açı 19"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p12",
    "brandSlug": "bulgari",
    "name": "Bulgari Bayan 2",
    "slug": "bulgari-bayan-2",
    "gender": "bayan",
    "price": null,
    "description": "Bulgari Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/bulgari-bayan/m2-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/bulgari-bayan/m2-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/bulgari-bayan/m2-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/bulgari-bayan/m2-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/bulgari-bayan/m2-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/bulgari-bayan/m2-6.jpg",
        "label": "Açı 6"
      },
      {
        "url": "/urunler/bulgari-bayan/m2-7.jpg",
        "label": "Açı 7"
      },
      {
        "url": "/urunler/bulgari-bayan/m2-8.jpg",
        "label": "Açı 8"
      },
      {
        "url": "/urunler/bulgari-bayan/m2-9.jpg",
        "label": "Açı 9"
      },
      {
        "url": "/urunler/bulgari-bayan/m2-10.jpg",
        "label": "Açı 10"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p13",
    "brandSlug": "bulgari",
    "name": "Bulgari Bayan 3",
    "slug": "bulgari-bayan-3",
    "gender": "bayan",
    "price": null,
    "description": "Bulgari Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/bulgari-bayan/m3-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/bulgari-bayan/m3-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/bulgari-bayan/m3-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/bulgari-bayan/m3-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/bulgari-bayan/m3-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/bulgari-bayan/m3-6.jpg",
        "label": "Açı 6"
      },
      {
        "url": "/urunler/bulgari-bayan/m3-7.jpg",
        "label": "Açı 7"
      },
      {
        "url": "/urunler/bulgari-bayan/m3-8.jpg",
        "label": "Açı 8"
      },
      {
        "url": "/urunler/bulgari-bayan/m3-9.jpg",
        "label": "Açı 9"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p14",
    "brandSlug": "bulgari",
    "name": "Bulgari Bayan 4",
    "slug": "bulgari-bayan-4",
    "gender": "bayan",
    "price": null,
    "description": "Bulgari Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/bulgari-bayan/m4-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p15",
    "brandSlug": "cartier",
    "name": "Cartier Erkek 1",
    "slug": "cartier-erkek-1",
    "gender": "erkek",
    "price": null,
    "description": "Cartier Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/cartier-erkek/m1-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": true,
    "isActive": true
  },
  {
    "id": "p16",
    "brandSlug": "cartier",
    "name": "Cartier Erkek 2",
    "slug": "cartier-erkek-2",
    "gender": "erkek",
    "price": null,
    "description": "Cartier Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/cartier-erkek/m2-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/cartier-erkek/m2-2.jpg",
        "label": "Açı 2"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p17",
    "brandSlug": "cartier",
    "name": "Cartier Erkek 3",
    "slug": "cartier-erkek-3",
    "gender": "erkek",
    "price": null,
    "description": "Cartier Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/cartier-erkek/m3-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/cartier-erkek/m3-2.jpg",
        "label": "Açı 2"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p18",
    "brandSlug": "cartier",
    "name": "Cartier Erkek 4",
    "slug": "cartier-erkek-4",
    "gender": "erkek",
    "price": null,
    "description": "Cartier Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/cartier-erkek/m4-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/cartier-erkek/m4-2.jpg",
        "label": "Açı 2"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p19",
    "brandSlug": "cartier",
    "name": "Cartier Erkek 5",
    "slug": "cartier-erkek-5",
    "gender": "erkek",
    "price": null,
    "description": "Cartier Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/cartier-erkek/m5-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p20",
    "brandSlug": "cartier",
    "name": "Cartier Erkek 6",
    "slug": "cartier-erkek-6",
    "gender": "erkek",
    "price": null,
    "description": "Cartier Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/cartier-erkek/m6-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p21",
    "brandSlug": "cartier",
    "name": "Cartier Erkek 7",
    "slug": "cartier-erkek-7",
    "gender": "erkek",
    "price": null,
    "description": "Cartier Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/cartier-erkek/m7-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/cartier-erkek/m7-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/cartier-erkek/m7-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/cartier-erkek/m7-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/cartier-erkek/m7-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/cartier-erkek/m7-6.jpg",
        "label": "Açı 6"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p22",
    "brandSlug": "cartier",
    "name": "Cartier Erkek 8",
    "slug": "cartier-erkek-8",
    "gender": "erkek",
    "price": null,
    "description": "Cartier Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/cartier-erkek/m8-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/cartier-erkek/m8-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/cartier-erkek/m8-3.jpg",
        "label": "Açı 3"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p23",
    "brandSlug": "cartier",
    "name": "Cartier Erkek 9",
    "slug": "cartier-erkek-9",
    "gender": "erkek",
    "price": null,
    "description": "Cartier Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/cartier-erkek/m9-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p24",
    "brandSlug": "cartier",
    "name": "Cartier Erkek 10",
    "slug": "cartier-erkek-10",
    "gender": "erkek",
    "price": null,
    "description": "Cartier Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/cartier-erkek/m10-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p25",
    "brandSlug": "cartier",
    "name": "Cartier Erkek 11",
    "slug": "cartier-erkek-11",
    "gender": "erkek",
    "price": null,
    "description": "Cartier Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/cartier-erkek/m11-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p26",
    "brandSlug": "cartier",
    "name": "Cartier Erkek 12",
    "slug": "cartier-erkek-12",
    "gender": "erkek",
    "price": null,
    "description": "Cartier Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/cartier-erkek/m12-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p27",
    "brandSlug": "cartier",
    "name": "Cartier Bayan 1",
    "slug": "cartier-bayan-1",
    "gender": "bayan",
    "price": null,
    "description": "Cartier Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/cartier-bayan/m1-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/cartier-bayan/m1-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/cartier-bayan/m1-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/cartier-bayan/m1-4.jpg",
        "label": "Açı 4"
      }
    ],
    "isFeatured": true,
    "isActive": true
  },
  {
    "id": "p28",
    "brandSlug": "cartier",
    "name": "Cartier Bayan 2",
    "slug": "cartier-bayan-2",
    "gender": "bayan",
    "price": null,
    "description": "Cartier Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/cartier-bayan/m2-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/cartier-bayan/m2-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/cartier-bayan/m2-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/cartier-bayan/m2-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/cartier-bayan/m2-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/cartier-bayan/m2-6.jpg",
        "label": "Açı 6"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p29",
    "brandSlug": "cartier",
    "name": "Cartier Bayan 3",
    "slug": "cartier-bayan-3",
    "gender": "bayan",
    "price": null,
    "description": "Cartier Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/cartier-bayan/m3-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p30",
    "brandSlug": "cartier",
    "name": "Cartier Bayan 4",
    "slug": "cartier-bayan-4",
    "gender": "bayan",
    "price": null,
    "description": "Cartier Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/cartier-bayan/m4-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p31",
    "brandSlug": "cartier",
    "name": "Cartier Bayan 5",
    "slug": "cartier-bayan-5",
    "gender": "bayan",
    "price": null,
    "description": "Cartier Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/cartier-bayan/m5-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p32",
    "brandSlug": "cartier",
    "name": "Cartier Bayan 6",
    "slug": "cartier-bayan-6",
    "gender": "bayan",
    "price": null,
    "description": "Cartier Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/cartier-bayan/m6-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/cartier-bayan/m6-2.jpg",
        "label": "Açı 2"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p33",
    "brandSlug": "cartier",
    "name": "Cartier Bayan 7",
    "slug": "cartier-bayan-7",
    "gender": "bayan",
    "price": null,
    "description": "Cartier Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/cartier-bayan/m7-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/cartier-bayan/m7-2.jpg",
        "label": "Açı 2"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p34",
    "brandSlug": "cartier",
    "name": "Cartier Bayan 8",
    "slug": "cartier-bayan-8",
    "gender": "bayan",
    "price": null,
    "description": "Cartier Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/cartier-bayan/m8-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p35",
    "brandSlug": "cartier",
    "name": "Cartier Bayan 9",
    "slug": "cartier-bayan-9",
    "gender": "bayan",
    "price": null,
    "description": "Cartier Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/cartier-bayan/m9-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/cartier-bayan/m9-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/cartier-bayan/m9-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/cartier-bayan/m9-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/cartier-bayan/m9-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/cartier-bayan/m9-6.jpg",
        "label": "Açı 6"
      },
      {
        "url": "/urunler/cartier-bayan/m9-7.jpg",
        "label": "Açı 7"
      },
      {
        "url": "/urunler/cartier-bayan/m9-8.jpg",
        "label": "Açı 8"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p36",
    "brandSlug": "cartier",
    "name": "Cartier Bayan 10",
    "slug": "cartier-bayan-10",
    "gender": "bayan",
    "price": null,
    "description": "Cartier Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/cartier-bayan/m10-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/cartier-bayan/m10-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/cartier-bayan/m10-3.jpg",
        "label": "Açı 3"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p37",
    "brandSlug": "cartier",
    "name": "Cartier Bayan 11",
    "slug": "cartier-bayan-11",
    "gender": "bayan",
    "price": null,
    "description": "Cartier Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/cartier-bayan/m11-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p38",
    "brandSlug": "cartier",
    "name": "Cartier Bayan 12",
    "slug": "cartier-bayan-12",
    "gender": "bayan",
    "price": null,
    "description": "Cartier Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/cartier-bayan/m12-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/cartier-bayan/m12-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/cartier-bayan/m12-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/cartier-bayan/m12-4.jpg",
        "label": "Açı 4"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p39",
    "brandSlug": "cartier",
    "name": "Cartier Bayan 13",
    "slug": "cartier-bayan-13",
    "gender": "bayan",
    "price": null,
    "description": "Cartier Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/cartier-bayan/m13-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/cartier-bayan/m13-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/cartier-bayan/m13-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/cartier-bayan/m13-4.jpg",
        "label": "Açı 4"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p40",
    "brandSlug": "cartier",
    "name": "Cartier Bayan 14",
    "slug": "cartier-bayan-14",
    "gender": "bayan",
    "price": null,
    "description": "Cartier Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/cartier-bayan/m14-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p41",
    "brandSlug": "cartier",
    "name": "Cartier Bayan 15",
    "slug": "cartier-bayan-15",
    "gender": "bayan",
    "price": null,
    "description": "Cartier Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/cartier-bayan/m15-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p42",
    "brandSlug": "cartier",
    "name": "Cartier Bayan 16",
    "slug": "cartier-bayan-16",
    "gender": "bayan",
    "price": null,
    "description": "Cartier Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/cartier-bayan/m16-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p43",
    "brandSlug": "cartier",
    "name": "Cartier Bayan 17",
    "slug": "cartier-bayan-17",
    "gender": "bayan",
    "price": null,
    "description": "Cartier Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/cartier-bayan/m17-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p44",
    "brandSlug": "citizen",
    "name": "Citizen 1",
    "slug": "citizen-1",
    "gender": "unisex",
    "price": null,
    "description": "Citizen — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/citizen/m1-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p45",
    "brandSlug": "citizen",
    "name": "Citizen 2",
    "slug": "citizen-2",
    "gender": "unisex",
    "price": null,
    "description": "Citizen — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/citizen/m2-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p46",
    "brandSlug": "rolex",
    "name": "Rolex ETA Erkek 1",
    "slug": "eta-rolex-1",
    "series": "ETA",
    "gender": "erkek",
    "price": null,
    "description": "Rolex ETA Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/eta-rolex/m1-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/eta-rolex/m1-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/eta-rolex/m1-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/eta-rolex/m1-4.jpg",
        "label": "Açı 4"
      }
    ],
    "isFeatured": true,
    "isActive": true
  },
  {
    "id": "p47",
    "brandSlug": "frank-muller",
    "name": "Frank Müller 1",
    "slug": "frank-muller-1",
    "gender": "erkek",
    "price": null,
    "description": "Frank Müller — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/frank-muller/m1-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p48",
    "brandSlug": "frank-muller",
    "name": "Frank Müller 2",
    "slug": "frank-muller-2",
    "gender": "erkek",
    "price": null,
    "description": "Frank Müller — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/frank-muller/m2-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p49",
    "brandSlug": "frank-muller",
    "name": "Frank Müller 3",
    "slug": "frank-muller-3",
    "gender": "erkek",
    "price": null,
    "description": "Frank Müller — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/frank-muller/m3-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p50",
    "brandSlug": "frank-muller",
    "name": "Frank Müller 4",
    "slug": "frank-muller-4",
    "gender": "erkek",
    "price": null,
    "description": "Frank Müller — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/frank-muller/m4-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p51",
    "brandSlug": "frank-muller",
    "name": "Frank Müller 5",
    "slug": "frank-muller-5",
    "gender": "erkek",
    "price": null,
    "description": "Frank Müller — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/frank-muller/m5-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p52",
    "brandSlug": "frank-muller",
    "name": "Frank Müller 6",
    "slug": "frank-muller-6",
    "gender": "erkek",
    "price": null,
    "description": "Frank Müller — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/frank-muller/m6-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p53",
    "brandSlug": "frank-muller",
    "name": "Frank Müller 7",
    "slug": "frank-muller-7",
    "gender": "erkek",
    "price": null,
    "description": "Frank Müller — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/frank-muller/m7-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p54",
    "brandSlug": "frank-muller",
    "name": "Frank Müller 8",
    "slug": "frank-muller-8",
    "gender": "erkek",
    "price": null,
    "description": "Frank Müller — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/frank-muller/m8-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p55",
    "brandSlug": "frank-muller",
    "name": "Frank Müller 9",
    "slug": "frank-muller-9",
    "gender": "erkek",
    "price": null,
    "description": "Frank Müller — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/frank-muller/m9-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p56",
    "brandSlug": "frank-muller",
    "name": "Frank Müller 10",
    "slug": "frank-muller-10",
    "gender": "erkek",
    "price": null,
    "description": "Frank Müller — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/frank-muller/m10-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p57",
    "brandSlug": "frank-muller",
    "name": "Frank Müller 11",
    "slug": "frank-muller-11",
    "gender": "erkek",
    "price": null,
    "description": "Frank Müller — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/frank-muller/m11-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p58",
    "brandSlug": "frank-muller",
    "name": "Frank Müller 12",
    "slug": "frank-muller-12",
    "gender": "erkek",
    "price": null,
    "description": "Frank Müller — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/frank-muller/m12-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p59",
    "brandSlug": "frank-muller",
    "name": "Frank Müller 13",
    "slug": "frank-muller-13",
    "gender": "erkek",
    "price": null,
    "description": "Frank Müller — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/frank-muller/m13-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p60",
    "brandSlug": "frank-muller",
    "name": "Frank Müller 14",
    "slug": "frank-muller-14",
    "gender": "erkek",
    "price": null,
    "description": "Frank Müller — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/frank-muller/m14-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p61",
    "brandSlug": "frank-muller",
    "name": "Frank Müller 15",
    "slug": "frank-muller-15",
    "gender": "erkek",
    "price": null,
    "description": "Frank Müller — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/frank-muller/m15-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p62",
    "brandSlug": "gc",
    "name": "GC Erkek 1",
    "slug": "gc-erkek-1",
    "gender": "erkek",
    "price": null,
    "description": "GC Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/gc-erkek/m1-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/gc-erkek/m1-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/gc-erkek/m1-3.jpg",
        "label": "Açı 3"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p63",
    "brandSlug": "invicta",
    "name": "Invicta 1",
    "slug": "invicta-1",
    "gender": "erkek",
    "price": null,
    "description": "Invicta — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/invicta/m1-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p64",
    "brandSlug": "invicta",
    "name": "Invicta 2",
    "slug": "invicta-2",
    "gender": "erkek",
    "price": null,
    "description": "Invicta — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/invicta/m2-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p65",
    "brandSlug": "invicta",
    "name": "Invicta 3",
    "slug": "invicta-3",
    "gender": "erkek",
    "price": null,
    "description": "Invicta — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/invicta/m3-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p66",
    "brandSlug": "jaeger-lecoultre",
    "name": "Jaeger-LeCoultre 1",
    "slug": "jaeger-1",
    "gender": "erkek",
    "price": null,
    "description": "Jaeger-LeCoultre — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/jaeger/m1-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/jaeger/m1-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/jaeger/m1-3.jpg",
        "label": "Açı 3"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p67",
    "brandSlug": "jaeger-lecoultre",
    "name": "Jaeger-LeCoultre 2",
    "slug": "jaeger-2",
    "gender": "erkek",
    "price": null,
    "description": "Jaeger-LeCoultre — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/jaeger/m2-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/jaeger/m2-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/jaeger/m2-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/jaeger/m2-4.jpg",
        "label": "Açı 4"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p68",
    "brandSlug": "longines",
    "name": "Longines 1",
    "slug": "longin-1",
    "gender": "unisex",
    "price": null,
    "description": "Longines — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/longin/m1-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p69",
    "brandSlug": "longines",
    "name": "Longines 2",
    "slug": "longin-2",
    "gender": "unisex",
    "price": null,
    "description": "Longines — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/longin/m2-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/longin/m2-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/longin/m2-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/longin/m2-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/longin/m2-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/longin/m2-6.jpg",
        "label": "Açı 6"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p70",
    "brandSlug": "longines",
    "name": "Longines 3",
    "slug": "longin-3",
    "gender": "unisex",
    "price": null,
    "description": "Longines — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/longin/m3-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p71",
    "brandSlug": "longines",
    "name": "Longines 4",
    "slug": "longin-4",
    "gender": "unisex",
    "price": null,
    "description": "Longines — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/longin/m4-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/longin/m4-2.jpg",
        "label": "Açı 2"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p72",
    "brandSlug": "longines",
    "name": "Longines 5",
    "slug": "longin-5",
    "gender": "unisex",
    "price": null,
    "description": "Longines — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/longin/m5-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p73",
    "brandSlug": "longines",
    "name": "Longines 6",
    "slug": "longin-6",
    "gender": "unisex",
    "price": null,
    "description": "Longines — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/longin/m6-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p74",
    "brandSlug": "longines",
    "name": "Longines 7",
    "slug": "longin-7",
    "gender": "unisex",
    "price": null,
    "description": "Longines — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/longin/m7-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p75",
    "brandSlug": "longines",
    "name": "Longines 8",
    "slug": "longin-8",
    "gender": "unisex",
    "price": null,
    "description": "Longines — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/longin/m8-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p76",
    "brandSlug": "longines",
    "name": "Longines 9",
    "slug": "longin-9",
    "gender": "unisex",
    "price": null,
    "description": "Longines — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/longin/m9-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p77",
    "brandSlug": "longines",
    "name": "Longines 10",
    "slug": "longin-10",
    "gender": "unisex",
    "price": null,
    "description": "Longines — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/longin/m10-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p78",
    "brandSlug": "oris",
    "name": "Oris 1",
    "slug": "oris-1",
    "gender": "erkek",
    "price": null,
    "description": "Oris — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/oris/m1-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/oris/m1-2.jpg",
        "label": "Açı 2"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p79",
    "brandSlug": "patek-philippe",
    "name": "Patek Philippe Erkek 1",
    "slug": "patek-1",
    "gender": "erkek",
    "price": null,
    "description": "Patek Philippe Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/patek/m1-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/patek/m1-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/patek/m1-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/patek/m1-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/patek/m1-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/patek/m1-6.jpg",
        "label": "Açı 6"
      },
      {
        "url": "/urunler/patek/m1-7.jpg",
        "label": "Açı 7"
      },
      {
        "url": "/urunler/patek/m1-8.jpg",
        "label": "Açı 8"
      },
      {
        "url": "/urunler/patek/m1-9.jpg",
        "label": "Açı 9"
      },
      {
        "url": "/urunler/patek/m1-10.jpg",
        "label": "Açı 10"
      },
      {
        "url": "/urunler/patek/m1-11.jpg",
        "label": "Açı 11"
      }
    ],
    "isFeatured": true,
    "isActive": true
  },
  {
    "id": "p80",
    "brandSlug": "patek-philippe",
    "name": "Patek Philippe Erkek 2",
    "slug": "patek-2",
    "gender": "erkek",
    "price": null,
    "description": "Patek Philippe Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/patek/m2-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/patek/m2-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/patek/m2-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/patek/m2-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/patek/m2-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/patek/m2-6.jpg",
        "label": "Açı 6"
      },
      {
        "url": "/urunler/patek/m2-7.jpg",
        "label": "Açı 7"
      },
      {
        "url": "/urunler/patek/m2-8.jpg",
        "label": "Açı 8"
      },
      {
        "url": "/urunler/patek/m2-9.jpg",
        "label": "Açı 9"
      },
      {
        "url": "/urunler/patek/m2-10.jpg",
        "label": "Açı 10"
      },
      {
        "url": "/urunler/patek/m2-11.jpg",
        "label": "Açı 11"
      },
      {
        "url": "/urunler/patek/m2-12.jpg",
        "label": "Açı 12"
      },
      {
        "url": "/urunler/patek/m2-13.jpg",
        "label": "Açı 13"
      },
      {
        "url": "/urunler/patek/m2-14.jpg",
        "label": "Açı 14"
      },
      {
        "url": "/urunler/patek/m2-15.jpg",
        "label": "Açı 15"
      },
      {
        "url": "/urunler/patek/m2-16.jpg",
        "label": "Açı 16"
      },
      {
        "url": "/urunler/patek/m2-17.jpg",
        "label": "Açı 17"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p81",
    "brandSlug": "patek-philippe",
    "name": "Patek Philippe Erkek 3",
    "slug": "patek-3",
    "gender": "erkek",
    "price": null,
    "description": "Patek Philippe Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/patek/m3-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/patek/m3-2.jpg",
        "label": "Açı 2"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p82",
    "brandSlug": "patek-philippe",
    "name": "Patek Philippe Erkek 4",
    "slug": "patek-4",
    "gender": "erkek",
    "price": null,
    "description": "Patek Philippe Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/patek/m4-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/patek/m4-2.jpg",
        "label": "Açı 2"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p83",
    "brandSlug": "patek-philippe",
    "name": "Patek Philippe Erkek 5",
    "slug": "patek-5",
    "gender": "erkek",
    "price": null,
    "description": "Patek Philippe Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/patek/m5-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p84",
    "brandSlug": "patek-philippe",
    "name": "Patek Philippe Erkek 6",
    "slug": "patek-6",
    "gender": "erkek",
    "price": null,
    "description": "Patek Philippe Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/patek/m6-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/patek/m6-2.jpg",
        "label": "Açı 2"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p85",
    "brandSlug": "patek-philippe",
    "name": "Patek Philippe Klasik 1",
    "slug": "patek-klasik-1",
    "series": "Klasik",
    "gender": "erkek",
    "price": null,
    "description": "Patek Philippe Klasik — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/patek-klasik/m1-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": true,
    "isActive": true
  },
  {
    "id": "p86",
    "brandSlug": "patek-philippe",
    "name": "Patek Philippe Klasik 2",
    "slug": "patek-klasik-2",
    "series": "Klasik",
    "gender": "erkek",
    "price": null,
    "description": "Patek Philippe Klasik — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/patek-klasik/m2-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p87",
    "brandSlug": "patek-philippe",
    "name": "Patek Philippe Klasik 3",
    "slug": "patek-klasik-3",
    "series": "Klasik",
    "gender": "erkek",
    "price": null,
    "description": "Patek Philippe Klasik — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/patek-klasik/m3-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p88",
    "brandSlug": "patek-philippe",
    "name": "Patek Philippe Klasik 4",
    "slug": "patek-klasik-4",
    "series": "Klasik",
    "gender": "erkek",
    "price": null,
    "description": "Patek Philippe Klasik — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/patek-klasik/m4-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p89",
    "brandSlug": "patek-philippe",
    "name": "Patek Philippe Bayan 1",
    "slug": "patek-bayan-1",
    "gender": "bayan",
    "price": null,
    "description": "Patek Philippe Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/patek-bayan/m1-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": true,
    "isActive": true
  },
  {
    "id": "p90",
    "brandSlug": "patek-philippe",
    "name": "Patek Philippe Bayan 2",
    "slug": "patek-bayan-2",
    "gender": "bayan",
    "price": null,
    "description": "Patek Philippe Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/patek-bayan/m2-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/patek-bayan/m2-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/patek-bayan/m2-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/patek-bayan/m2-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/patek-bayan/m2-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/patek-bayan/m2-6.jpg",
        "label": "Açı 6"
      },
      {
        "url": "/urunler/patek-bayan/m2-7.jpg",
        "label": "Açı 7"
      },
      {
        "url": "/urunler/patek-bayan/m2-8.jpg",
        "label": "Açı 8"
      },
      {
        "url": "/urunler/patek-bayan/m2-9.jpg",
        "label": "Açı 9"
      },
      {
        "url": "/urunler/patek-bayan/m2-10.jpg",
        "label": "Açı 10"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p91",
    "brandSlug": "patek-philippe",
    "name": "Patek Philippe Bayan 3",
    "slug": "patek-bayan-3",
    "gender": "bayan",
    "price": null,
    "description": "Patek Philippe Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/patek-bayan/m3-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/patek-bayan/m3-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/patek-bayan/m3-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/patek-bayan/m3-4.jpg",
        "label": "Açı 4"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p92",
    "brandSlug": "patek-philippe",
    "name": "Patek Philippe İnce Kasa 1",
    "slug": "patek-ince-kasa-ppf-1",
    "series": "İnce Kasa",
    "gender": "erkek",
    "price": null,
    "description": "Patek Philippe İnce Kasa — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/patek-ince-kasa-ppf/m1-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/patek-ince-kasa-ppf/m1-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/patek-ince-kasa-ppf/m1-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/patek-ince-kasa-ppf/m1-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/patek-ince-kasa-ppf/m1-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/patek-ince-kasa-ppf/m1-6.jpg",
        "label": "Açı 6"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p93",
    "brandSlug": "rado",
    "name": "Rado 1",
    "slug": "rado-1",
    "gender": "unisex",
    "price": null,
    "description": "Rado — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rado/m1-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p94",
    "brandSlug": "richard-mille",
    "name": "Richard Mille 1",
    "slug": "richard-mille-1",
    "gender": "erkek",
    "price": null,
    "description": "Richard Mille — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/richard-mille/m1-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p95",
    "brandSlug": "richard-mille",
    "name": "Richard Mille 2",
    "slug": "richard-mille-2",
    "gender": "erkek",
    "price": null,
    "description": "Richard Mille — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/richard-mille/m2-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p96",
    "brandSlug": "richard-mille",
    "name": "Richard Mille 3",
    "slug": "richard-mille-3",
    "gender": "erkek",
    "price": null,
    "description": "Richard Mille — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/richard-mille/m3-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p97",
    "brandSlug": "rolex",
    "name": "Rolex Erkek 1",
    "slug": "rolex-1",
    "gender": "erkek",
    "price": null,
    "description": "Rolex Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex/m1-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p98",
    "brandSlug": "rolex",
    "name": "Rolex Erkek 2",
    "slug": "rolex-2",
    "gender": "erkek",
    "price": null,
    "description": "Rolex Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex/m2-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p99",
    "brandSlug": "rolex",
    "name": "Rolex Erkek 3",
    "slug": "rolex-3",
    "gender": "erkek",
    "price": null,
    "description": "Rolex Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex/m3-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/rolex/m3-2.jpg",
        "label": "Açı 2"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p100",
    "brandSlug": "rolex",
    "name": "Rolex Erkek 4",
    "slug": "rolex-4",
    "gender": "erkek",
    "price": null,
    "description": "Rolex Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex/m4-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/rolex/m4-2.jpg",
        "label": "Açı 2"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p101",
    "brandSlug": "rolex",
    "name": "Rolex Erkek 5",
    "slug": "rolex-5",
    "gender": "erkek",
    "price": null,
    "description": "Rolex Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex/m5-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p102",
    "brandSlug": "rolex",
    "name": "Rolex Erkek 6",
    "slug": "rolex-6",
    "gender": "erkek",
    "price": null,
    "description": "Rolex Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex/m6-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/rolex/m6-2.jpg",
        "label": "Açı 2"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p103",
    "brandSlug": "rolex",
    "name": "Rolex Erkek 7",
    "slug": "rolex-7",
    "gender": "erkek",
    "price": null,
    "description": "Rolex Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex/m7-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/rolex/m7-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/rolex/m7-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/rolex/m7-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/rolex/m7-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/rolex/m7-6.jpg",
        "label": "Açı 6"
      },
      {
        "url": "/urunler/rolex/m7-7.jpg",
        "label": "Açı 7"
      },
      {
        "url": "/urunler/rolex/m7-8.jpg",
        "label": "Açı 8"
      },
      {
        "url": "/urunler/rolex/m7-9.jpg",
        "label": "Açı 9"
      },
      {
        "url": "/urunler/rolex/m7-10.jpg",
        "label": "Açı 10"
      },
      {
        "url": "/urunler/rolex/m7-11.jpg",
        "label": "Açı 11"
      },
      {
        "url": "/urunler/rolex/m7-12.jpg",
        "label": "Açı 12"
      },
      {
        "url": "/urunler/rolex/m7-13.jpg",
        "label": "Açı 13"
      },
      {
        "url": "/urunler/rolex/m7-14.jpg",
        "label": "Açı 14"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p104",
    "brandSlug": "rolex",
    "name": "Rolex Erkek 8",
    "slug": "rolex-8",
    "gender": "erkek",
    "price": null,
    "description": "Rolex Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex/m8-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/rolex/m8-2.jpg",
        "label": "Açı 2"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p105",
    "brandSlug": "rolex",
    "name": "Rolex Erkek 9",
    "slug": "rolex-9",
    "gender": "erkek",
    "price": null,
    "description": "Rolex Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex/m9-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/rolex/m9-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/rolex/m9-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/rolex/m9-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/rolex/m9-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/rolex/m9-6.jpg",
        "label": "Açı 6"
      },
      {
        "url": "/urunler/rolex/m9-7.jpg",
        "label": "Açı 7"
      },
      {
        "url": "/urunler/rolex/m9-8.jpg",
        "label": "Açı 8"
      },
      {
        "url": "/urunler/rolex/m9-9.jpg",
        "label": "Açı 9"
      },
      {
        "url": "/urunler/rolex/m9-10.jpg",
        "label": "Açı 10"
      },
      {
        "url": "/urunler/rolex/m9-11.jpg",
        "label": "Açı 11"
      },
      {
        "url": "/urunler/rolex/m9-12.jpg",
        "label": "Açı 12"
      },
      {
        "url": "/urunler/rolex/m9-13.jpg",
        "label": "Açı 13"
      },
      {
        "url": "/urunler/rolex/m9-14.jpg",
        "label": "Açı 14"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p106",
    "brandSlug": "rolex",
    "name": "Rolex Erkek 10",
    "slug": "rolex-10",
    "gender": "erkek",
    "price": null,
    "description": "Rolex Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex/m10-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p107",
    "brandSlug": "rolex",
    "name": "Rolex Erkek 11",
    "slug": "rolex-11",
    "gender": "erkek",
    "price": null,
    "description": "Rolex Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex/m11-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/rolex/m11-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/rolex/m11-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/rolex/m11-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/rolex/m11-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/rolex/m11-6.jpg",
        "label": "Açı 6"
      },
      {
        "url": "/urunler/rolex/m11-7.jpg",
        "label": "Açı 7"
      },
      {
        "url": "/urunler/rolex/m11-8.jpg",
        "label": "Açı 8"
      },
      {
        "url": "/urunler/rolex/m11-9.jpg",
        "label": "Açı 9"
      },
      {
        "url": "/urunler/rolex/m11-10.jpg",
        "label": "Açı 10"
      },
      {
        "url": "/urunler/rolex/m11-11.jpg",
        "label": "Açı 11"
      },
      {
        "url": "/urunler/rolex/m11-12.jpg",
        "label": "Açı 12"
      },
      {
        "url": "/urunler/rolex/m11-13.jpg",
        "label": "Açı 13"
      },
      {
        "url": "/urunler/rolex/m11-14.jpg",
        "label": "Açı 14"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p108",
    "brandSlug": "rolex",
    "name": "Rolex Erkek 12",
    "slug": "rolex-12",
    "gender": "erkek",
    "price": null,
    "description": "Rolex Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex/m12-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/rolex/m12-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/rolex/m12-3.jpg",
        "label": "Açı 3"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p109",
    "brandSlug": "rolex",
    "name": "Rolex Erkek 13",
    "slug": "rolex-13",
    "gender": "erkek",
    "price": null,
    "description": "Rolex Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex/m13-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p110",
    "brandSlug": "rolex",
    "name": "Rolex Erkek 14",
    "slug": "rolex-14",
    "gender": "erkek",
    "price": null,
    "description": "Rolex Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex/m14-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p111",
    "brandSlug": "rolex",
    "name": "Rolex Erkek 15",
    "slug": "rolex-15",
    "gender": "erkek",
    "price": null,
    "description": "Rolex Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex/m15-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p112",
    "brandSlug": "rolex",
    "name": "Rolex Erkek 16",
    "slug": "rolex-16",
    "gender": "erkek",
    "price": null,
    "description": "Rolex Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex/m16-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p113",
    "brandSlug": "rolex",
    "name": "Rolex Bayan 36 1",
    "slug": "rolex-bayan-36-1",
    "series": "36mm",
    "gender": "bayan",
    "price": null,
    "description": "Rolex Bayan 36 — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex-bayan-36/m1-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/rolex-bayan-36/m1-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/rolex-bayan-36/m1-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/rolex-bayan-36/m1-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/rolex-bayan-36/m1-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/rolex-bayan-36/m1-6.jpg",
        "label": "Açı 6"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p114",
    "brandSlug": "rolex",
    "name": "Rolex Bayan 36 2",
    "slug": "rolex-bayan-36-2",
    "series": "36mm",
    "gender": "bayan",
    "price": null,
    "description": "Rolex Bayan 36 — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex-bayan-36/m2-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/rolex-bayan-36/m2-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/rolex-bayan-36/m2-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/rolex-bayan-36/m2-4.jpg",
        "label": "Açı 4"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p115",
    "brandSlug": "rolex",
    "name": "Rolex Bayan 36 3",
    "slug": "rolex-bayan-36-3",
    "series": "36mm",
    "gender": "bayan",
    "price": null,
    "description": "Rolex Bayan 36 — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex-bayan-36/m3-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p116",
    "brandSlug": "rolex",
    "name": "Rolex YZ Erkek 1",
    "slug": "rolex-yz-erkek-1",
    "series": "YZ",
    "gender": "erkek",
    "price": null,
    "description": "Rolex YZ Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex-yz-erkek/m1-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m1-2.jpg",
        "label": "Açı 2"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p117",
    "brandSlug": "rolex",
    "name": "Rolex YZ Erkek 2",
    "slug": "rolex-yz-erkek-2",
    "series": "YZ",
    "gender": "erkek",
    "price": null,
    "description": "Rolex YZ Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex-yz-erkek/m2-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m2-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m2-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m2-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m2-5.jpg",
        "label": "Açı 5"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p118",
    "brandSlug": "rolex",
    "name": "Rolex YZ Erkek 3",
    "slug": "rolex-yz-erkek-3",
    "series": "YZ",
    "gender": "erkek",
    "price": null,
    "description": "Rolex YZ Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex-yz-erkek/m3-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p119",
    "brandSlug": "rolex",
    "name": "Rolex YZ Erkek 4",
    "slug": "rolex-yz-erkek-4",
    "series": "YZ",
    "gender": "erkek",
    "price": null,
    "description": "Rolex YZ Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex-yz-erkek/m4-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m4-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m4-3.jpg",
        "label": "Açı 3"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p120",
    "brandSlug": "rolex",
    "name": "Rolex YZ Erkek 5",
    "slug": "rolex-yz-erkek-5",
    "series": "YZ",
    "gender": "erkek",
    "price": null,
    "description": "Rolex YZ Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex-yz-erkek/m5-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p121",
    "brandSlug": "rolex",
    "name": "Rolex YZ Erkek 6",
    "slug": "rolex-yz-erkek-6",
    "series": "YZ",
    "gender": "erkek",
    "price": null,
    "description": "Rolex YZ Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex-yz-erkek/m6-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m6-2.jpg",
        "label": "Açı 2"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p122",
    "brandSlug": "rolex",
    "name": "Rolex YZ Erkek 7",
    "slug": "rolex-yz-erkek-7",
    "series": "YZ",
    "gender": "erkek",
    "price": null,
    "description": "Rolex YZ Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex-yz-erkek/m7-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m7-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m7-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m7-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m7-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m7-6.jpg",
        "label": "Açı 6"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m7-7.jpg",
        "label": "Açı 7"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m7-8.jpg",
        "label": "Açı 8"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m7-9.jpg",
        "label": "Açı 9"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m7-10.jpg",
        "label": "Açı 10"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m7-11.jpg",
        "label": "Açı 11"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m7-12.jpg",
        "label": "Açı 12"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m7-13.jpg",
        "label": "Açı 13"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m7-14.jpg",
        "label": "Açı 14"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p123",
    "brandSlug": "rolex",
    "name": "Rolex YZ Erkek 8",
    "slug": "rolex-yz-erkek-8",
    "series": "YZ",
    "gender": "erkek",
    "price": null,
    "description": "Rolex YZ Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex-yz-erkek/m8-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m8-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m8-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m8-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m8-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m8-6.jpg",
        "label": "Açı 6"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m8-7.jpg",
        "label": "Açı 7"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m8-8.jpg",
        "label": "Açı 8"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m8-9.jpg",
        "label": "Açı 9"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m8-10.jpg",
        "label": "Açı 10"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m8-11.jpg",
        "label": "Açı 11"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m8-12.jpg",
        "label": "Açı 12"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m8-13.jpg",
        "label": "Açı 13"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m8-14.jpg",
        "label": "Açı 14"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m8-15.jpg",
        "label": "Açı 15"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m8-16.jpg",
        "label": "Açı 16"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m8-17.jpg",
        "label": "Açı 17"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m8-18.jpg",
        "label": "Açı 18"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m8-19.jpg",
        "label": "Açı 19"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m8-20.jpg",
        "label": "Açı 20"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m8-21.jpg",
        "label": "Açı 21"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m8-22.jpg",
        "label": "Açı 22"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m8-23.jpg",
        "label": "Açı 23"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m8-24.jpg",
        "label": "Açı 24"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m8-25.jpg",
        "label": "Açı 25"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m8-26.jpg",
        "label": "Açı 26"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m8-27.jpg",
        "label": "Açı 27"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p124",
    "brandSlug": "rolex",
    "name": "Rolex YZ Erkek 9",
    "slug": "rolex-yz-erkek-9",
    "series": "YZ",
    "gender": "erkek",
    "price": null,
    "description": "Rolex YZ Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex-yz-erkek/m9-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m9-2.jpg",
        "label": "Açı 2"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p125",
    "brandSlug": "rolex",
    "name": "Rolex YZ Erkek 10",
    "slug": "rolex-yz-erkek-10",
    "series": "YZ",
    "gender": "erkek",
    "price": null,
    "description": "Rolex YZ Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex-yz-erkek/m10-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p126",
    "brandSlug": "rolex",
    "name": "Rolex YZ Erkek 11",
    "slug": "rolex-yz-erkek-11",
    "series": "YZ",
    "gender": "erkek",
    "price": null,
    "description": "Rolex YZ Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex-yz-erkek/m11-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m11-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m11-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m11-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m11-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m11-6.jpg",
        "label": "Açı 6"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p127",
    "brandSlug": "rolex",
    "name": "Rolex YZ Erkek 12",
    "slug": "rolex-yz-erkek-12",
    "series": "YZ",
    "gender": "erkek",
    "price": null,
    "description": "Rolex YZ Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex-yz-erkek/m12-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m12-2.jpg",
        "label": "Açı 2"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p128",
    "brandSlug": "rolex",
    "name": "Rolex YZ Erkek 13",
    "slug": "rolex-yz-erkek-13",
    "series": "YZ",
    "gender": "erkek",
    "price": null,
    "description": "Rolex YZ Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex-yz-erkek/m13-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p129",
    "brandSlug": "rolex",
    "name": "Rolex YZ Erkek 14",
    "slug": "rolex-yz-erkek-14",
    "series": "YZ",
    "gender": "erkek",
    "price": null,
    "description": "Rolex YZ Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex-yz-erkek/m14-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m14-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m14-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m14-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m14-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m14-6.jpg",
        "label": "Açı 6"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m14-7.jpg",
        "label": "Açı 7"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m14-8.jpg",
        "label": "Açı 8"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m14-9.jpg",
        "label": "Açı 9"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m14-10.jpg",
        "label": "Açı 10"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m14-11.jpg",
        "label": "Açı 11"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m14-12.jpg",
        "label": "Açı 12"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p130",
    "brandSlug": "rolex",
    "name": "Rolex YZ Erkek 15",
    "slug": "rolex-yz-erkek-15",
    "series": "YZ",
    "gender": "erkek",
    "price": null,
    "description": "Rolex YZ Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex-yz-erkek/m15-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p131",
    "brandSlug": "rolex",
    "name": "Rolex YZ Erkek 16",
    "slug": "rolex-yz-erkek-16",
    "series": "YZ",
    "gender": "erkek",
    "price": null,
    "description": "Rolex YZ Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex-yz-erkek/m16-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m16-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m16-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m16-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m16-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m16-6.jpg",
        "label": "Açı 6"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p132",
    "brandSlug": "rolex",
    "name": "Rolex YZ Erkek 17",
    "slug": "rolex-yz-erkek-17",
    "series": "YZ",
    "gender": "erkek",
    "price": null,
    "description": "Rolex YZ Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex-yz-erkek/m17-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m17-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/rolex-yz-erkek/m17-3.jpg",
        "label": "Açı 3"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p133",
    "brandSlug": "rolex",
    "name": "Rolex YZ Erkek 18",
    "slug": "rolex-yz-erkek-18",
    "series": "YZ",
    "gender": "erkek",
    "price": null,
    "description": "Rolex YZ Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex-yz-erkek/m18-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p134",
    "brandSlug": "rolex",
    "name": "Rolex YZ Erkek 19",
    "slug": "rolex-yz-erkek-19",
    "series": "YZ",
    "gender": "erkek",
    "price": null,
    "description": "Rolex YZ Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex-yz-erkek/m19-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p135",
    "brandSlug": "rolex",
    "name": "Rolex Bayan 31 1",
    "slug": "rolex-bayan-31-1",
    "series": "31mm",
    "gender": "bayan",
    "price": null,
    "description": "Rolex Bayan 31 — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex-bayan-31/m1-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p136",
    "brandSlug": "rolex",
    "name": "Rolex Bayan 31 2",
    "slug": "rolex-bayan-31-2",
    "series": "31mm",
    "gender": "bayan",
    "price": null,
    "description": "Rolex Bayan 31 — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex-bayan-31/m2-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p137",
    "brandSlug": "rolex",
    "name": "Rolex Bayan 31 3",
    "slug": "rolex-bayan-31-3",
    "series": "31mm",
    "gender": "bayan",
    "price": null,
    "description": "Rolex Bayan 31 — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex-bayan-31/m3-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/rolex-bayan-31/m3-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/rolex-bayan-31/m3-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/rolex-bayan-31/m3-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/rolex-bayan-31/m3-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/rolex-bayan-31/m3-6.jpg",
        "label": "Açı 6"
      },
      {
        "url": "/urunler/rolex-bayan-31/m3-7.jpg",
        "label": "Açı 7"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p138",
    "brandSlug": "rolex",
    "name": "Rolex Bayan 31 4",
    "slug": "rolex-bayan-31-4",
    "series": "31mm",
    "gender": "bayan",
    "price": null,
    "description": "Rolex Bayan 31 — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex-bayan-31/m4-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/rolex-bayan-31/m4-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/rolex-bayan-31/m4-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/rolex-bayan-31/m4-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/rolex-bayan-31/m4-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/rolex-bayan-31/m4-6.jpg",
        "label": "Açı 6"
      },
      {
        "url": "/urunler/rolex-bayan-31/m4-7.jpg",
        "label": "Açı 7"
      },
      {
        "url": "/urunler/rolex-bayan-31/m4-8.jpg",
        "label": "Açı 8"
      },
      {
        "url": "/urunler/rolex-bayan-31/m4-9.jpg",
        "label": "Açı 9"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p139",
    "brandSlug": "rolex",
    "name": "Rolex Bayan 31 5",
    "slug": "rolex-bayan-31-5",
    "series": "31mm",
    "gender": "bayan",
    "price": null,
    "description": "Rolex Bayan 31 — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/rolex-bayan-31/m5-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p140",
    "brandSlug": "aksesuar",
    "name": "Saat Kutusu 1",
    "slug": "saat-kutulari-1",
    "series": "Saat Kutusu",
    "gender": "unisex",
    "price": null,
    "description": "Saat Kutusu — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/saat-kutulari/m1-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p141",
    "brandSlug": "aksesuar",
    "name": "Saat Kutusu 2",
    "slug": "saat-kutulari-2",
    "series": "Saat Kutusu",
    "gender": "unisex",
    "price": null,
    "description": "Saat Kutusu — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/saat-kutulari/m2-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p142",
    "brandSlug": "aksesuar",
    "name": "Saat Kutusu 3",
    "slug": "saat-kutulari-3",
    "series": "Saat Kutusu",
    "gender": "unisex",
    "price": null,
    "description": "Saat Kutusu — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/saat-kutulari/m3-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p143",
    "brandSlug": "aksesuar",
    "name": "Saat Kutusu 4",
    "slug": "saat-kutulari-4",
    "series": "Saat Kutusu",
    "gender": "unisex",
    "price": null,
    "description": "Saat Kutusu — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/saat-kutulari/m4-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p144",
    "brandSlug": "aksesuar",
    "name": "Saat Kutusu 5",
    "slug": "saat-kutulari-5",
    "series": "Saat Kutusu",
    "gender": "unisex",
    "price": null,
    "description": "Saat Kutusu — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/saat-kutulari/m5-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p145",
    "brandSlug": "seven-friday",
    "name": "Seven Friday 1",
    "slug": "seven-friday-1",
    "gender": "erkek",
    "price": null,
    "description": "Seven Friday — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/seven-friday/m1-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/seven-friday/m1-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/seven-friday/m1-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/seven-friday/m1-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/seven-friday/m1-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/seven-friday/m1-6.jpg",
        "label": "Açı 6"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p146",
    "brandSlug": "seven-friday",
    "name": "Seven Friday 2",
    "slug": "seven-friday-2",
    "gender": "erkek",
    "price": null,
    "description": "Seven Friday — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/seven-friday/m2-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p147",
    "brandSlug": "seven-friday",
    "name": "Seven Friday 3",
    "slug": "seven-friday-3",
    "gender": "erkek",
    "price": null,
    "description": "Seven Friday — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/seven-friday/m3-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p148",
    "brandSlug": "seven-friday",
    "name": "Seven Friday 4",
    "slug": "seven-friday-4",
    "gender": "erkek",
    "price": null,
    "description": "Seven Friday — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/seven-friday/m4-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p149",
    "brandSlug": "seven-friday",
    "name": "Seven Friday 5",
    "slug": "seven-friday-5",
    "gender": "erkek",
    "price": null,
    "description": "Seven Friday — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/seven-friday/m5-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/seven-friday/m5-2.jpg",
        "label": "Açı 2"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p150",
    "brandSlug": "seven-friday",
    "name": "Seven Friday 6",
    "slug": "seven-friday-6",
    "gender": "erkek",
    "price": null,
    "description": "Seven Friday — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/seven-friday/m6-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p151",
    "brandSlug": "tag-heuer",
    "name": "Tag Heuer 1",
    "slug": "tag-1",
    "gender": "erkek",
    "price": null,
    "description": "Tag Heuer — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/tag/m1-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p152",
    "brandSlug": "tag-heuer",
    "name": "Tag Heuer 2",
    "slug": "tag-2",
    "gender": "erkek",
    "price": null,
    "description": "Tag Heuer — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/tag/m2-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p153",
    "brandSlug": "tag-heuer",
    "name": "Tag Heuer 3",
    "slug": "tag-3",
    "gender": "erkek",
    "price": null,
    "description": "Tag Heuer — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/tag/m3-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p154",
    "brandSlug": "tag-heuer",
    "name": "Tag Heuer 4",
    "slug": "tag-4",
    "gender": "erkek",
    "price": null,
    "description": "Tag Heuer — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/tag/m4-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p155",
    "brandSlug": "tag-heuer",
    "name": "Tag Heuer 5",
    "slug": "tag-5",
    "gender": "erkek",
    "price": null,
    "description": "Tag Heuer — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/tag/m5-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p156",
    "brandSlug": "tag-heuer",
    "name": "Tag Heuer 6",
    "slug": "tag-6",
    "gender": "erkek",
    "price": null,
    "description": "Tag Heuer — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/tag/m6-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p157",
    "brandSlug": "tudor",
    "name": "Tudor 1",
    "slug": "tudor-1",
    "gender": "erkek",
    "price": null,
    "description": "Tudor — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/tudor/m1-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/tudor/m1-2.jpg",
        "label": "Açı 2"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p158",
    "brandSlug": "tudor",
    "name": "Tudor 2",
    "slug": "tudor-2",
    "gender": "erkek",
    "price": null,
    "description": "Tudor — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/tudor/m2-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/tudor/m2-2.jpg",
        "label": "Açı 2"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p159",
    "brandSlug": "tudor",
    "name": "Tudor 3",
    "slug": "tudor-3",
    "gender": "erkek",
    "price": null,
    "description": "Tudor — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/tudor/m3-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p160",
    "brandSlug": "tudor",
    "name": "Tudor 4",
    "slug": "tudor-4",
    "gender": "erkek",
    "price": null,
    "description": "Tudor — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/tudor/m4-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p161",
    "brandSlug": "tudor",
    "name": "Tudor 5",
    "slug": "tudor-5",
    "gender": "erkek",
    "price": null,
    "description": "Tudor — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/tudor/m5-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p162",
    "brandSlug": "tudor",
    "name": "Tudor 6",
    "slug": "tudor-6",
    "gender": "erkek",
    "price": null,
    "description": "Tudor — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/tudor/m6-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p163",
    "brandSlug": "tudor",
    "name": "Tudor 7",
    "slug": "tudor-7",
    "gender": "erkek",
    "price": null,
    "description": "Tudor — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/tudor/m7-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p164",
    "brandSlug": "tudor",
    "name": "Tudor 8",
    "slug": "tudor-8",
    "gender": "erkek",
    "price": null,
    "description": "Tudor — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/tudor/m8-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p165",
    "brandSlug": "tudor",
    "name": "Tudor 9",
    "slug": "tudor-9",
    "gender": "erkek",
    "price": null,
    "description": "Tudor — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/tudor/m9-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p166",
    "brandSlug": "tudor",
    "name": "Tudor 10",
    "slug": "tudor-10",
    "gender": "erkek",
    "price": null,
    "description": "Tudor — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/tudor/m10-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p167",
    "brandSlug": "ulysse-nardin",
    "name": "Ulysse Nardin 1",
    "slug": "ulyse-nardin-1",
    "gender": "erkek",
    "price": null,
    "description": "Ulysse Nardin — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/ulyse-nardin/m1-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p168",
    "brandSlug": "ulysse-nardin",
    "name": "Ulysse Nardin 2",
    "slug": "ulyse-nardin-2",
    "gender": "erkek",
    "price": null,
    "description": "Ulysse Nardin — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/ulyse-nardin/m2-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p169",
    "brandSlug": "ulysse-nardin",
    "name": "Ulysse Nardin 3",
    "slug": "ulyse-nardin-3",
    "gender": "erkek",
    "price": null,
    "description": "Ulysse Nardin — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/ulyse-nardin/m3-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p170",
    "brandSlug": "ulysse-nardin",
    "name": "Ulysse Nardin 4",
    "slug": "ulyse-nardin-4",
    "gender": "erkek",
    "price": null,
    "description": "Ulysse Nardin — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/ulyse-nardin/m4-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p171",
    "brandSlug": "ulysse-nardin",
    "name": "Ulysse Nardin 5",
    "slug": "ulyse-nardin-5",
    "gender": "erkek",
    "price": null,
    "description": "Ulysse Nardin — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/ulyse-nardin/m5-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/ulyse-nardin/m5-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/ulyse-nardin/m5-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/ulyse-nardin/m5-4.jpg",
        "label": "Açı 4"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p172",
    "brandSlug": "ulysse-nardin",
    "name": "Ulysse Nardin 6",
    "slug": "ulyse-nardin-6",
    "gender": "erkek",
    "price": null,
    "description": "Ulysse Nardin — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/ulyse-nardin/m6-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p173",
    "brandSlug": "ulysse-nardin",
    "name": "Ulysse Nardin 7",
    "slug": "ulyse-nardin-7",
    "gender": "erkek",
    "price": null,
    "description": "Ulysse Nardin — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/ulyse-nardin/m7-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p174",
    "brandSlug": "ulysse-nardin",
    "name": "Ulysse Nardin 8",
    "slug": "ulyse-nardin-8",
    "gender": "erkek",
    "price": null,
    "description": "Ulysse Nardin — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/ulyse-nardin/m8-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p175",
    "brandSlug": "ulysse-nardin",
    "name": "Ulysse Nardin 9",
    "slug": "ulyse-nardin-9",
    "gender": "erkek",
    "price": null,
    "description": "Ulysse Nardin — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/ulyse-nardin/m9-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p176",
    "brandSlug": "ulysse-nardin",
    "name": "Ulysse Nardin 10",
    "slug": "ulyse-nardin-10",
    "gender": "erkek",
    "price": null,
    "description": "Ulysse Nardin — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/ulyse-nardin/m10-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p177",
    "brandSlug": "ulysse-nardin",
    "name": "Ulysse Nardin 11",
    "slug": "ulyse-nardin-11",
    "gender": "erkek",
    "price": null,
    "description": "Ulysse Nardin — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/ulyse-nardin/m11-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p178",
    "brandSlug": "ulysse-nardin",
    "name": "Ulysse Nardin 12",
    "slug": "ulyse-nardin-12",
    "gender": "erkek",
    "price": null,
    "description": "Ulysse Nardin — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/ulyse-nardin/m12-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p179",
    "brandSlug": "ulysse-nardin",
    "name": "Ulysse Nardin 13",
    "slug": "ulyse-nardin-13",
    "gender": "erkek",
    "price": null,
    "description": "Ulysse Nardin — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/ulyse-nardin/m13-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p180",
    "brandSlug": "ulysse-nardin",
    "name": "Ulysse Nardin 14",
    "slug": "ulyse-nardin-14",
    "gender": "erkek",
    "price": null,
    "description": "Ulysse Nardin — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/ulyse-nardin/m14-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p181",
    "brandSlug": "ulysse-nardin",
    "name": "Ulysse Nardin 15",
    "slug": "ulyse-nardin-15",
    "gender": "erkek",
    "price": null,
    "description": "Ulysse Nardin — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/ulyse-nardin/m15-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p182",
    "brandSlug": "ulysse-nardin",
    "name": "Ulysse Nardin 16",
    "slug": "ulyse-nardin-16",
    "gender": "erkek",
    "price": null,
    "description": "Ulysse Nardin — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/ulyse-nardin/m16-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p183",
    "brandSlug": "ulysse-nardin",
    "name": "Ulysse Nardin 17",
    "slug": "ulyse-nardin-17",
    "gender": "erkek",
    "price": null,
    "description": "Ulysse Nardin — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/ulyse-nardin/m17-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p184",
    "brandSlug": "ulysse-nardin",
    "name": "Ulysse Nardin 18",
    "slug": "ulyse-nardin-18",
    "gender": "erkek",
    "price": null,
    "description": "Ulysse Nardin — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/ulyse-nardin/m18-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p185",
    "brandSlug": "ulysse-nardin",
    "name": "Ulysse Nardin 19",
    "slug": "ulyse-nardin-19",
    "gender": "erkek",
    "price": null,
    "description": "Ulysse Nardin — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/ulyse-nardin/m19-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p186",
    "brandSlug": "ulysse-nardin",
    "name": "Ulysse Nardin 20",
    "slug": "ulyse-nardin-20",
    "gender": "erkek",
    "price": null,
    "description": "Ulysse Nardin — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/ulyse-nardin/m20-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p187",
    "brandSlug": "versace",
    "name": "Versace Bayan 1",
    "slug": "versace-bayan-1",
    "gender": "bayan",
    "price": null,
    "description": "Versace Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/versace-bayan/m1-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p188",
    "brandSlug": "versace",
    "name": "Versace Bayan 2",
    "slug": "versace-bayan-2",
    "gender": "bayan",
    "price": null,
    "description": "Versace Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/versace-bayan/m2-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/versace-bayan/m2-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/versace-bayan/m2-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/versace-bayan/m2-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/versace-bayan/m2-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/versace-bayan/m2-6.jpg",
        "label": "Açı 6"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p189",
    "brandSlug": "versace",
    "name": "Versace Bayan 3",
    "slug": "versace-bayan-3",
    "gender": "bayan",
    "price": null,
    "description": "Versace Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/versace-bayan/m3-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/versace-bayan/m3-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/versace-bayan/m3-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/versace-bayan/m3-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/versace-bayan/m3-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/versace-bayan/m3-6.jpg",
        "label": "Açı 6"
      },
      {
        "url": "/urunler/versace-bayan/m3-7.jpg",
        "label": "Açı 7"
      },
      {
        "url": "/urunler/versace-bayan/m3-8.jpg",
        "label": "Açı 8"
      },
      {
        "url": "/urunler/versace-bayan/m3-9.jpg",
        "label": "Açı 9"
      },
      {
        "url": "/urunler/versace-bayan/m3-10.jpg",
        "label": "Açı 10"
      },
      {
        "url": "/urunler/versace-bayan/m3-11.jpg",
        "label": "Açı 11"
      },
      {
        "url": "/urunler/versace-bayan/m3-12.jpg",
        "label": "Açı 12"
      },
      {
        "url": "/urunler/versace-bayan/m3-13.jpg",
        "label": "Açı 13"
      },
      {
        "url": "/urunler/versace-bayan/m3-14.jpg",
        "label": "Açı 14"
      },
      {
        "url": "/urunler/versace-bayan/m3-15.jpg",
        "label": "Açı 15"
      },
      {
        "url": "/urunler/versace-bayan/m3-16.jpg",
        "label": "Açı 16"
      },
      {
        "url": "/urunler/versace-bayan/m3-17.jpg",
        "label": "Açı 17"
      },
      {
        "url": "/urunler/versace-bayan/m3-18.jpg",
        "label": "Açı 18"
      },
      {
        "url": "/urunler/versace-bayan/m3-19.jpg",
        "label": "Açı 19"
      },
      {
        "url": "/urunler/versace-bayan/m3-20.jpg",
        "label": "Açı 20"
      },
      {
        "url": "/urunler/versace-bayan/m3-21.jpg",
        "label": "Açı 21"
      },
      {
        "url": "/urunler/versace-bayan/m3-22.jpg",
        "label": "Açı 22"
      },
      {
        "url": "/urunler/versace-bayan/m3-23.jpg",
        "label": "Açı 23"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p190",
    "brandSlug": "versace",
    "name": "Versace Bayan 4",
    "slug": "versace-bayan-4",
    "gender": "bayan",
    "price": null,
    "description": "Versace Bayan — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/versace-bayan/m4-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/versace-bayan/m4-2.jpg",
        "label": "Açı 2"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p191",
    "brandSlug": "versace",
    "name": "Versace Erkek 1",
    "slug": "versace-erkek-1",
    "gender": "erkek",
    "price": null,
    "description": "Versace Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/versace-erkek/m1-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p192",
    "brandSlug": "versace",
    "name": "Versace Erkek 2",
    "slug": "versace-erkek-2",
    "gender": "erkek",
    "price": null,
    "description": "Versace Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/versace-erkek/m2-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p193",
    "brandSlug": "versace",
    "name": "Versace Erkek 3",
    "slug": "versace-erkek-3",
    "gender": "erkek",
    "price": null,
    "description": "Versace Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/versace-erkek/m3-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p194",
    "brandSlug": "versace",
    "name": "Versace Erkek 4",
    "slug": "versace-erkek-4",
    "gender": "erkek",
    "price": null,
    "description": "Versace Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/versace-erkek/m4-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/versace-erkek/m4-2.jpg",
        "label": "Açı 2"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p195",
    "brandSlug": "versace",
    "name": "Versace Erkek 5",
    "slug": "versace-erkek-5",
    "gender": "erkek",
    "price": null,
    "description": "Versace Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/versace-erkek/m5-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/versace-erkek/m5-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/versace-erkek/m5-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/versace-erkek/m5-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/versace-erkek/m5-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/versace-erkek/m5-6.jpg",
        "label": "Açı 6"
      },
      {
        "url": "/urunler/versace-erkek/m5-7.jpg",
        "label": "Açı 7"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p196",
    "brandSlug": "versace",
    "name": "Versace Erkek 6",
    "slug": "versace-erkek-6",
    "gender": "erkek",
    "price": null,
    "description": "Versace Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/versace-erkek/m6-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/versace-erkek/m6-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/versace-erkek/m6-3.jpg",
        "label": "Açı 3"
      },
      {
        "url": "/urunler/versace-erkek/m6-4.jpg",
        "label": "Açı 4"
      },
      {
        "url": "/urunler/versace-erkek/m6-5.jpg",
        "label": "Açı 5"
      },
      {
        "url": "/urunler/versace-erkek/m6-6.jpg",
        "label": "Açı 6"
      },
      {
        "url": "/urunler/versace-erkek/m6-7.jpg",
        "label": "Açı 7"
      },
      {
        "url": "/urunler/versace-erkek/m6-8.jpg",
        "label": "Açı 8"
      },
      {
        "url": "/urunler/versace-erkek/m6-9.jpg",
        "label": "Açı 9"
      },
      {
        "url": "/urunler/versace-erkek/m6-10.jpg",
        "label": "Açı 10"
      },
      {
        "url": "/urunler/versace-erkek/m6-11.jpg",
        "label": "Açı 11"
      },
      {
        "url": "/urunler/versace-erkek/m6-12.jpg",
        "label": "Açı 12"
      },
      {
        "url": "/urunler/versace-erkek/m6-13.jpg",
        "label": "Açı 13"
      },
      {
        "url": "/urunler/versace-erkek/m6-14.jpg",
        "label": "Açı 14"
      },
      {
        "url": "/urunler/versace-erkek/m6-15.jpg",
        "label": "Açı 15"
      },
      {
        "url": "/urunler/versace-erkek/m6-16.jpg",
        "label": "Açı 16"
      },
      {
        "url": "/urunler/versace-erkek/m6-17.jpg",
        "label": "Açı 17"
      },
      {
        "url": "/urunler/versace-erkek/m6-18.jpg",
        "label": "Açı 18"
      },
      {
        "url": "/urunler/versace-erkek/m6-19.jpg",
        "label": "Açı 19"
      },
      {
        "url": "/urunler/versace-erkek/m6-20.jpg",
        "label": "Açı 20"
      },
      {
        "url": "/urunler/versace-erkek/m6-21.jpg",
        "label": "Açı 21"
      },
      {
        "url": "/urunler/versace-erkek/m6-22.jpg",
        "label": "Açı 22"
      },
      {
        "url": "/urunler/versace-erkek/m6-23.jpg",
        "label": "Açı 23"
      },
      {
        "url": "/urunler/versace-erkek/m6-24.jpg",
        "label": "Açı 24"
      },
      {
        "url": "/urunler/versace-erkek/m6-25.jpg",
        "label": "Açı 25"
      },
      {
        "url": "/urunler/versace-erkek/m6-26.jpg",
        "label": "Açı 26"
      },
      {
        "url": "/urunler/versace-erkek/m6-27.jpg",
        "label": "Açı 27"
      },
      {
        "url": "/urunler/versace-erkek/m6-28.jpg",
        "label": "Açı 28"
      },
      {
        "url": "/urunler/versace-erkek/m6-29.jpg",
        "label": "Açı 29"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p197",
    "brandSlug": "versace",
    "name": "Versace Erkek 7",
    "slug": "versace-erkek-7",
    "gender": "erkek",
    "price": null,
    "description": "Versace Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/versace-erkek/m7-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p198",
    "brandSlug": "versace",
    "name": "Versace Erkek 8",
    "slug": "versace-erkek-8",
    "gender": "erkek",
    "price": null,
    "description": "Versace Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/versace-erkek/m8-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p199",
    "brandSlug": "versace",
    "name": "Versace Erkek 9",
    "slug": "versace-erkek-9",
    "gender": "erkek",
    "price": null,
    "description": "Versace Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/versace-erkek/m9-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p200",
    "brandSlug": "versace",
    "name": "Versace Erkek 10",
    "slug": "versace-erkek-10",
    "gender": "erkek",
    "price": null,
    "description": "Versace Erkek — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/versace-erkek/m10-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/versace-erkek/m10-2.jpg",
        "label": "Açı 2"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p201",
    "brandSlug": "washaron",
    "name": "Washaron 1",
    "slug": "washaron-1",
    "gender": "unisex",
    "price": null,
    "description": "Washaron — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/washaron/m1-1.jpg",
        "label": "Açı 1"
      },
      {
        "url": "/urunler/washaron/m1-2.jpg",
        "label": "Açı 2"
      },
      {
        "url": "/urunler/washaron/m1-3.jpg",
        "label": "Açı 3"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p202",
    "brandSlug": "washaron",
    "name": "Washaron 2",
    "slug": "washaron-2",
    "gender": "unisex",
    "price": null,
    "description": "Washaron — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/washaron/m2-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p203",
    "brandSlug": "washaron",
    "name": "Washaron 3",
    "slug": "washaron-3",
    "gender": "unisex",
    "price": null,
    "description": "Washaron — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/washaron/m3-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p204",
    "brandSlug": "washaron",
    "name": "Washaron 4",
    "slug": "washaron-4",
    "gender": "unisex",
    "price": null,
    "description": "Washaron — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/washaron/m4-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p205",
    "brandSlug": "washaron",
    "name": "Washaron 5",
    "slug": "washaron-5",
    "gender": "unisex",
    "price": null,
    "description": "Washaron — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/washaron/m5-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p206",
    "brandSlug": "washaron",
    "name": "Washaron 6",
    "slug": "washaron-6",
    "gender": "unisex",
    "price": null,
    "description": "Washaron — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/washaron/m6-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p207",
    "brandSlug": "washaron",
    "name": "Washaron 7",
    "slug": "washaron-7",
    "gender": "unisex",
    "price": null,
    "description": "Washaron — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/washaron/m7-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p208",
    "brandSlug": "washaron",
    "name": "Washaron 8",
    "slug": "washaron-8",
    "gender": "unisex",
    "price": null,
    "description": "Washaron — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/washaron/m8-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p209",
    "brandSlug": "washaron",
    "name": "Washaron 9",
    "slug": "washaron-9",
    "gender": "unisex",
    "price": null,
    "description": "Washaron — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/washaron/m9-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  },
  {
    "id": "p210",
    "brandSlug": "washaron",
    "name": "Washaron 10",
    "slug": "washaron-10",
    "gender": "unisex",
    "price": null,
    "description": "Washaron — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.",
    "images": [
      {
        "url": "/urunler/washaron/m10-1.jpg",
        "label": "Açı 1"
      }
    ],
    "isFeatured": false,
    "isActive": true
  }
];
