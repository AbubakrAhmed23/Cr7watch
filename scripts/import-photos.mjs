// Cr7watch — "dosyalar/" klasöründeki GERÇEK fotoğrafları içeri aktarır.
// - HEIC/PNG/JPG -> web uyumlu JPG'ye çevirir (macOS sips), 1500px'e küçültür.
// - Ardışık dosya numaralarına göre fotoğrafları modellere gruplar (gap>10 = yeni model).
// - public/urunler/ altına yazar ve src/data/catalog.ts dosyasını üretir.
//
// Çalıştır: node scripts/import-photos.mjs

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(process.cwd());
const SRC_DIR = path.join(ROOT, "dosyalar");
const OUT_IMG = path.join(ROOT, "public", "urunler");
const OUT_DATA = path.join(ROOT, "src", "data", "catalog.ts");
const GAP = 10;

function slugify(input) {
  const map = { ç:"c",Ç:"c",ğ:"g",Ğ:"g",ı:"i",İ:"i",ö:"o",Ö:"o",ş:"s",Ş:"s",ü:"u",Ü:"u" };
  return input.split("").map((c) => map[c] ?? c).join("")
    .toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

// Klasör (trim+lower) -> { brand, gender, series, friendly }
const FOLDER = {
  "ap bayan":            { brand:"audemars-piguet", gender:"bayan",  series:"Royal Oak", friendly:"Audemars Piguet Bayan" },
  "ap erkek":            { brand:"audemars-piguet", gender:"erkek",  series:"Royal Oak", friendly:"Audemars Piguet Erkek" },
  "bulgarı bayan":       { brand:"bulgari",         gender:"bayan",  series:"",          friendly:"Bulgari Bayan" },
  "cartier bayan":       { brand:"cartier",         gender:"bayan",  series:"",          friendly:"Cartier Bayan" },
  "cartier erkek":       { brand:"cartier",         gender:"erkek",  series:"",          friendly:"Cartier Erkek" },
  "citizen":             { brand:"citizen",         gender:"unisex", series:"",          friendly:"Citizen" },
  "eta rolex":           { brand:"rolex",           gender:"erkek",  series:"ETA",       friendly:"Rolex ETA Erkek" },
  "frank müller":        { brand:"frank-muller",    gender:"erkek",  series:"",          friendly:"Frank Müller" },
  "gc erkek":            { brand:"gc",              gender:"erkek",  series:"",          friendly:"GC Erkek" },
  "invıcta":             { brand:"invicta",         gender:"erkek",  series:"",          friendly:"Invicta" },
  "jaeger":              { brand:"jaeger-lecoultre",gender:"erkek",  series:"",          friendly:"Jaeger-LeCoultre" },
  "longin":              { brand:"longines",        gender:"unisex", series:"",          friendly:"Longines" },
  "oris":                { brand:"oris",            gender:"erkek",  series:"",          friendly:"Oris" },
  "patek":               { brand:"patek-philippe",  gender:"erkek",  series:"",          friendly:"Patek Philippe Erkek" },
  "patek bayan":         { brand:"patek-philippe",  gender:"bayan",  series:"",          friendly:"Patek Philippe Bayan" },
  "patek ince kasa ppf": { brand:"patek-philippe",  gender:"erkek",  series:"İnce Kasa", friendly:"Patek Philippe İnce Kasa" },
  "patek klasik":        { brand:"patek-philippe",  gender:"erkek",  series:"Klasik",    friendly:"Patek Philippe Klasik" },
  "rado":                { brand:"rado",            gender:"unisex", series:"",          friendly:"Rado" },
  "richard mille":       { brand:"richard-mille",   gender:"erkek",  series:"",          friendly:"Richard Mille" },
  "rolex":               { brand:"rolex",           gender:"erkek",  series:"",          friendly:"Rolex Erkek" },
  "rolex bayan 31":      { brand:"rolex",           gender:"bayan",  series:"31mm",      friendly:"Rolex Bayan 31" },
  "rolex bayan 36":      { brand:"rolex",           gender:"bayan",  series:"36mm",      friendly:"Rolex Bayan 36" },
  "rolex yz erkek":      { brand:"rolex",           gender:"erkek",  series:"YZ",        friendly:"Rolex YZ Erkek" },
  "saat kutuları":       { brand:"aksesuar",        gender:"unisex", series:"Saat Kutusu", friendly:"Saat Kutusu" },
  "seven friday":        { brand:"seven-friday",    gender:"erkek",  series:"",          friendly:"Seven Friday" },
  "tag":                 { brand:"tag-heuer",       gender:"erkek",  series:"",          friendly:"Tag Heuer" },
  "tudor":               { brand:"tudor",           gender:"erkek",  series:"",          friendly:"Tudor" },
  "ulyse nardin":        { brand:"ulysse-nardin",   gender:"erkek",  series:"",          friendly:"Ulysse Nardin" },
  "versace bayan":       { brand:"versace",         gender:"bayan",  series:"",          friendly:"Versace Bayan" },
  "versace erkek":       { brand:"versace",         gender:"erkek",  series:"",          friendly:"Versace Erkek" },
  "washaron":            { brand:"washaron",        gender:"unisex", series:"",          friendly:"Washaron" },
};

const BRAND_META = {
  "rolex":            { name:"Rolex",            blurb:"Efsanevi tasarım, zamansız prestij.",  order:1 },
  "patek-philippe":   { name:"Patek Philippe",   blurb:"Kusursuz zarafetin zirvesi.",          order:2 },
  "audemars-piguet":  { name:"Audemars Piguet",  blurb:"Royal Oak ile ikonik duruş.",          order:3 },
  "cartier":          { name:"Cartier",          blurb:"Mücevher inceliğinde saatler.",        order:4 },
  "richard-mille":    { name:"Richard Mille",    blurb:"Teknik sanat, sıra dışı tasarım.",     order:5 },
  "tudor":            { name:"Tudor",            blurb:"Karakterli ve dayanıklı.",             order:6 },
  "tag-heuer":        { name:"Tag Heuer",        blurb:"Yarış pistinden ilham.",               order:7 },
  "jaeger-lecoultre": { name:"Jaeger-LeCoultre", blurb:"İnce mekanik ustalığı.",               order:8 },
  "longines":         { name:"Longines",         blurb:"Klasik İsviçre zarafeti.",             order:9 },
  "oris":             { name:"Oris",             blurb:"Spor ve şıklığın dengesi.",            order:10 },
  "rado":             { name:"Rado",             blurb:"Modern malzeme, minimal tasarım.",     order:11 },
  "ulysse-nardin":    { name:"Ulysse Nardin",    blurb:"Denizci ruhlu lüks.",                  order:12 },
  "versace":          { name:"Versace",          blurb:"Cesur, gösterişli, ikonik.",           order:13 },
  "bulgari":          { name:"Bulgari",          blurb:"İtalyan tutkusu, mücevher dokunuşu.",  order:14 },
  "invicta":          { name:"Invicta",          blurb:"İddialı ve sportif.",                  order:15 },
  "citizen":          { name:"Citizen",          blurb:"Teknoloji ve güvenilirlik.",           order:16 },
  "seven-friday":     { name:"Seven Friday",     blurb:"Endüstriyel, sıra dışı tasarım.",      order:17 },
  "frank-muller":     { name:"Frank Müller",     blurb:"Tonneau kasa, ustalık işi.",           order:18 },
  "gc":               { name:"GC",               blurb:"Şık ve güncel.",                       order:19 },
  "washaron":         { name:"Washaron",         blurb:"Klasik tarz, uygun seçenek.",          order:20 },
  "aksesuar":         { name:"Aksesuar & Kutular", blurb:"Saat ve gözlük kutuları.",           order:21 },
};

const FEATURED_BRANDS = new Set(["rolex","patek-philippe","audemars-piguet","richard-mille","cartier","versace"]);

function groupFiles(files) {
  const numbered = [];
  const others = [];
  for (const f of files) {
    const m = f.match(/IMG[_-]?(\d+)/i);
    if (m) numbered.push({ f, n: parseInt(m[1], 10) });
    else others.push(f);
  }
  numbered.sort((a, b) => a.n - b.n);
  const groups = [];
  let cur = [];
  let prev = null;
  for (const { f, n } of numbered) {
    if (prev !== null && n - prev > GAP) { groups.push(cur); cur = []; }
    cur.push(f);
    prev = n;
  }
  if (cur.length) groups.push(cur);
  for (const f of others.sort()) groups.push([f]);
  return groups;
}

function convert(input, output) {
  execFileSync("sips", ["-s","format","jpeg","-s","formatOptions","80","-Z","1500", input, "--out", output], { stdio: "ignore" });
}

// --- ana akış ---
fs.rmSync(OUT_IMG, { recursive: true, force: true });
fs.mkdirSync(OUT_IMG, { recursive: true });

const usedBrands = new Set();
const products = [];
let featuredCount = 0;

const folders = fs.readdirSync(SRC_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

let totalImgs = 0;
for (const folderName of folders) {
  const key = folderName.trim().toLowerCase().normalize("NFC");
  const meta = FOLDER[key];
  if (!meta) { console.warn("ATLANDI (eşleşme yok):", folderName); continue; }

  const folderSlug = slugify(folderName);
  const dir = path.join(SRC_DIR, folderName);
  const files = fs.readdirSync(dir).filter((f) => /\.(heic|jpg|jpeg|png)$/i.test(f));
  const groups = groupFiles(files);

  usedBrands.add(meta.brand);
  let n = 0;
  for (const group of groups) {
    n += 1;
    const outDir = path.join(OUT_IMG, folderSlug);
    fs.mkdirSync(outDir, { recursive: true });
    const images = [];
    let k = 0;
    for (const file of group) {
      k += 1;
      const out = path.join(outDir, `m${n}-${k}.jpg`);
      try {
        convert(path.join(dir, file), out);
        images.push({ url: `/urunler/${folderSlug}/m${n}-${k}.jpg`, label: `Açı ${k}` });
        totalImgs += 1;
      } catch (e) {
        console.warn("Çevrilemedi:", file, e.message);
      }
    }
    if (!images.length) { n -= 1; continue; }

    const name = `${meta.friendly} ${n}`;
    const featured = FEATURED_BRANDS.has(meta.brand) && n === 1 && featuredCount < 8;
    if (featured) featuredCount += 1;

    products.push({
      id: `p${products.length + 1}`,
      brandSlug: meta.brand,
      name,
      slug: slugify(`${folderSlug}-${n}`),
      series: meta.series || undefined,
      gender: meta.gender,
      price: null,
      description: `${meta.friendly} — Cr7watch koleksiyonundan, gerçek ürün fotoğraflarıyla. Farklı açılardan inceleyin; sipariş ve güncel fiyat için WhatsApp’tan yazın.`,
      images,
      isFeatured: featured,
      isActive: true,
    });
  }
  console.log(`✓ ${folderName} -> ${n} model`);
}

const brands = [...usedBrands]
  .map((slug) => ({ slug, ...BRAND_META[slug] }))
  .sort((a, b) => a.order - b.order)
  .map((b) => ({ slug: b.slug, name: b.name, blurb: b.blurb, sortOrder: b.order }));

// --- TS dosyasını yaz ---
const header = `// Cr7watch — Katalog verisi (dosyalar/ klasöründen OTOMATİK üretildi).
// Yeniden üretmek için: node scripts/import-photos.mjs
// Marka/model yapısı Drive "dosyalar" ile birebir. Görseller /public/urunler altında.

import type { Brand, Product } from "@/lib/types";

export const brands: Brand[] = ${JSON.stringify(brands, null, 2)};

export const products: Product[] = ${JSON.stringify(products, null, 2)};
`;
fs.writeFileSync(OUT_DATA, header);

console.log(`\nTAMAM: ${brands.length} marka, ${products.length} model, ${totalImgs} görsel.`);
