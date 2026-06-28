// Üretilmiş kataloğu (src/data/catalog.ts) Supabase'e aktaracak SQL'i üretir.
// Çıktı: supabase/seed-products.sql
// Çalıştır: node scripts/gen-products-sql.mjs

import fs from "node:fs";
import path from "node:path";
import { products } from "../src/data/catalog.ts";

const OUT = path.resolve(process.cwd(), "supabase", "seed-products.sql");
const q = (s) => (s == null ? "NULL" : `'${String(s).replace(/'/g, "''")}'`);
const b = (v) => (v ? "true" : "false");
const n = (v) => (v == null ? "NULL" : Number(v));

const slugs = products.map((p) => q(p.slug)).join(", ");

const productRows = products
  .map(
    (p) =>
      `  (${q(p.brandSlug)}, ${q(p.name)}, ${q(p.slug)}, ${q(p.series)}, ${q(p.gender)}, ${n(p.price)}, ${q(p.description)}, ${b(p.isFeatured)}, ${b(p.isActive !== false)}, ${b(p.sold)})`
  )
  .join(",\n");

const imageRows = products
  .flatMap((p) =>
    p.images.map(
      (img, i) => `  (${q(p.slug)}, ${q(img.url)}, ${q(img.label)}, ${i})`
    )
  )
  .join(",\n");

const sql = `-- ============================================================
--  Cr7watch — Ürün seed verisi (dosyalar/ ile birebir, OTOMATİK üretildi)
--  schema.sql + seed-brands.sql çalıştırıldıktan SONRA bunu çalıştırın.
--  Yeniden çalıştırılabilir (idempotent): mevcut seed ürünleri tazeler.
-- ============================================================

-- 1) Ürünler (slug üzerinden upsert)
insert into products (brand_slug, name, slug, series, gender, price, description, is_featured, is_active, sold) values
${productRows}
on conflict (slug) do update set
  brand_slug = excluded.brand_slug,
  name = excluded.name,
  series = excluded.series,
  gender = excluded.gender,
  description = excluded.description,
  is_featured = excluded.is_featured,
  is_active = excluded.is_active;

-- 2) Görseller: bu ürünlerin eski görsellerini temizle, yenisini ekle
delete from product_images where product_id in (
  select id from products where slug in (${slugs})
);

insert into product_images (product_id, url, label, sort_order)
select p.id, v.url, v.label, v.sort_order
from (values
${imageRows}
) as v(slug, url, label, sort_order)
join products p on p.slug = v.slug;
`;

fs.writeFileSync(OUT, sql);
console.log(`Yazıldı: ${OUT}  (${products.length} ürün, ${products.reduce((a, p) => a + p.images.length, 0)} görsel)`);
