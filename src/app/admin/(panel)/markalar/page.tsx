"use client";

import { useEffect, useState } from "react";
import { adminListBrands, saveBrand, deleteBrand } from "@/lib/admin";
import { slugify } from "@/lib/utils";

type Row = Record<string, any>;

export default function AdminBrands() {
  const [brands, setBrands] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  // yeni marka formu
  const [name, setName] = useState("");
  const [blurb, setBlurb] = useState("");

  async function load() {
    setLoading(true);
    try {
      setBrands(await adminListBrands());
    } catch (e: any) {
      setErr(e?.message ?? "Yüklenemedi.");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    load();
  }, []);

  async function addBrand(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    setErr(null);
    try {
      await saveBrand({
        slug: slugify(name),
        name: name.trim(),
        blurb: blurb.trim() || null,
        sort_order: (brands.at(-1)?.sort_order ?? 0) + 1,
      });
      setName("");
      setBlurb("");
      load();
    } catch (e: any) {
      setErr(e?.message ?? "Eklenemedi.");
    }
  }

  async function onDelete(slug: string, n: string) {
    if (!confirm(`"${n}" markası ve içindeki TÜM ürünler silinsin mi?`)) return;
    await deleteBrand(slug);
    setBrands((p) => p.filter((b) => b.slug !== slug));
  }

  async function updateField(slug: string, field: string, value: string | number) {
    const b = brands.find((x) => x.slug === slug);
    if (!b) return;
    await saveBrand({
      slug: b.slug,
      name: b.name,
      blurb: b.blurb ?? null,
      hero_image: b.hero_image ?? null,
      sort_order: b.sort_order,
      [field]: value,
    });
    setBrands((p) => p.map((x) => (x.slug === slug ? { ...x, [field]: value } : x)));
  }

  const inputCls =
    "w-full rounded-lg border border-line bg-surface px-3 py-2.5 text-sm text-cream outline-none focus:border-gold";

  return (
    <div className="max-w-3xl">
      <h1 className="mb-6 font-serif text-3xl">Markalar</h1>

      {err && (
        <p className="mb-4 rounded-lg border border-red-900 bg-red-950/40 p-3 text-sm text-red-300">{err}</p>
      )}

      {/* Yeni marka */}
      <form onSubmit={addBrand} className="mb-8 rounded-xl border border-line bg-surface p-5">
        <h2 className="mb-3 font-serif text-lg">Yeni Marka Ekle</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <input className={inputCls} placeholder="Marka adı" value={name} onChange={(e) => setName(e.target.value)} />
          <input className={inputCls} placeholder="Kısa açıklama (ops.)" value={blurb} onChange={(e) => setBlurb(e.target.value)} />
        </div>
        <button type="submit" className="btn-gold mt-3 rounded-full px-5 py-2 text-sm">Ekle</button>
      </form>

      {loading ? (
        <p className="py-10 text-center text-muted">Yükleniyor…</p>
      ) : (
        <div className="space-y-2">
          {brands.map((b) => (
            <div key={b.slug} className="flex items-center gap-3 rounded-lg border border-line bg-surface p-3">
              <input
                className="w-40 rounded border border-line bg-ink px-2 py-1.5 text-sm text-cream outline-none focus:border-gold"
                defaultValue={b.name}
                onBlur={(e) => e.target.value !== b.name && updateField(b.slug, "name", e.target.value)}
              />
              <input
                className="flex-1 rounded border border-line bg-ink px-2 py-1.5 text-sm text-muted outline-none focus:border-gold"
                defaultValue={b.blurb ?? ""}
                placeholder="açıklama"
                onBlur={(e) => e.target.value !== (b.blurb ?? "") && updateField(b.slug, "blurb", e.target.value)}
              />
              <button onClick={() => onDelete(b.slug, b.name)} className="text-sm text-red-400 hover:underline">
                Sil
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
