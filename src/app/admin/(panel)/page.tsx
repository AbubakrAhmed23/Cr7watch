"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  adminListProducts,
  adminListBrands,
  deleteProduct,
  patchProduct,
} from "@/lib/admin";
import { formatPrice } from "@/lib/utils";

type Row = Record<string, any>;

export default function AdminDashboard() {
  const [products, setProducts] = useState<Row[]>([]);
  const [brands, setBrands] = useState<Row[]>([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    setErr(null);
    try {
      const [p, b] = await Promise.all([adminListProducts(), adminListBrands()]);
      setProducts(p);
      setBrands(b);
    } catch (e: any) {
      setErr(e?.message ?? "Veriler yüklenemedi.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const brandName = (slug: string) => brands.find((b) => b.slug === slug)?.name ?? slug;

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return products;
    return products.filter((p) =>
      `${brandName(p.brand_slug)} ${p.name} ${p.series ?? ""}`.toLowerCase().includes(s)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, products, brands]);

  async function onDelete(id: string, name: string) {
    if (!confirm(`"${name}" silinsin mi? Bu işlem geri alınamaz.`)) return;
    await deleteProduct(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }

  async function toggle(id: string, field: string, value: boolean) {
    await patchProduct(id, { [field]: value });
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl">Ürünler</h1>
          <p className="mt-1 text-sm text-muted">{products.length} model</p>
        </div>
        <Link href="/admin/urun/yeni" className="btn-gold rounded-full px-5 py-2.5 text-sm">
          + Yeni Ürün
        </Link>
      </div>

      <input
        type="text"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Ürün ara…"
        className="mb-5 w-full max-w-sm rounded-lg border border-line bg-surface px-4 py-2.5 text-sm text-cream outline-none focus:border-gold"
      />

      {err && (
        <p className="mb-4 rounded-lg border border-red-900 bg-red-950/40 p-3 text-sm text-red-300">
          {err}
        </p>
      )}

      {loading ? (
        <p className="py-16 text-center text-muted">Yükleniyor…</p>
      ) : filtered.length === 0 ? (
        <p className="py-16 text-center text-muted">Kayıt yok.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[760px] text-sm">
            <thead className="bg-ink-soft text-left text-xs uppercase tracking-wide text-muted">
              <tr>
                <th className="px-4 py-3">Görsel</th>
                <th className="px-4 py-3">Model</th>
                <th className="px-4 py-3">Marka</th>
                <th className="px-4 py-3">Fiyat</th>
                <th className="px-4 py-3 text-center">Öne Çıkan</th>
                <th className="px-4 py-3 text-center">Satıldı</th>
                <th className="px-4 py-3 text-right">İşlem</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => {
                const img = (p.product_images ?? [])[0]?.url;
                return (
                  <tr key={p.id} className="border-t border-line/60">
                    <td className="px-4 py-2">
                      <div className="h-12 w-12 overflow-hidden rounded-md bg-ink-soft">
                        {img && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={img} alt="" className="h-full w-full object-cover" />
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-2 font-medium text-cream">{p.name}</td>
                    <td className="px-4 py-2 text-muted">{brandName(p.brand_slug)}</td>
                    <td className="px-4 py-2 text-muted">{formatPrice(p.price ?? null)}</td>
                    <td className="px-4 py-2 text-center">
                      <input
                        type="checkbox"
                        checked={!!p.is_featured}
                        onChange={(e) => toggle(p.id, "is_featured", e.target.checked)}
                        className="accent-[var(--color-gold)]"
                      />
                    </td>
                    <td className="px-4 py-2 text-center">
                      <input
                        type="checkbox"
                        checked={!!p.sold}
                        onChange={(e) => toggle(p.id, "sold", e.target.checked)}
                        className="accent-red-500"
                      />
                    </td>
                    <td className="px-4 py-2 text-right">
                      <Link
                        href={`/admin/urun/${p.id}`}
                        className="mr-3 text-gold-light hover:underline"
                      >
                        Düzenle
                      </Link>
                      <button
                        onClick={() => onDelete(p.id, p.name)}
                        className="text-red-400 hover:underline"
                      >
                        Sil
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
