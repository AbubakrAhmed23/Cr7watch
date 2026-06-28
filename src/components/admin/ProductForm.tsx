"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  adminGetProduct,
  adminListBrands,
  saveProduct,
  type AdminImage,
  type ProductPayload,
} from "@/lib/admin";

type Row = Record<string, any>;

const EMPTY: ProductPayload = {
  brand_slug: "",
  name: "",
  gender: "erkek",
  price: null,
  reference: "",
  series: "",
  description: "",
  is_featured: false,
  is_active: true,
  sold: false,
};

export default function ProductForm({ productId }: { productId?: string }) {
  const router = useRouter();
  const [brands, setBrands] = useState<Row[]>([]);
  const [form, setForm] = useState<ProductPayload>(EMPTY);
  const [images, setImages] = useState<AdminImage[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const b = await adminListBrands();
        setBrands(b);
        if (productId) {
          const p = await adminGetProduct(productId);
          setForm({
            id: p.id,
            brand_slug: p.brand_slug,
            name: p.name,
            slug: p.slug,
            reference: p.reference ?? "",
            series: p.series ?? "",
            gender: p.gender,
            price: p.price ?? null,
            description: p.description ?? "",
            is_featured: !!p.is_featured,
            is_active: p.is_active !== false,
            sold: !!p.sold,
          });
          const imgs = (p.product_images ?? [])
            .slice()
            .sort((a: Row, z: Row) => (a.sort_order ?? 0) - (z.sort_order ?? 0))
            .map((i: Row) => ({ id: i.id, url: i.url, label: i.label ?? "" }));
          setImages(imgs);
        } else if (b.length) {
          setForm((f) => ({ ...f, brand_slug: b[0].slug }));
        }
      } catch (e: any) {
        setErr(e?.message ?? "Yüklenemedi.");
      } finally {
        setLoading(false);
      }
    })();
  }, [productId]);

  function set<K extends keyof ProductPayload>(key: K, value: ProductPayload[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function moveImage(idx: number, dir: number) {
    setImages((prev) => {
      const next = [...prev];
      const j = idx + dir;
      if (j < 0 || j >= next.length) return prev;
      [next[idx], next[j]] = [next[j], next[idx]];
      return next;
    });
  }
  function removeImage(idx: number) {
    setImages((prev) => prev.filter((_, i) => i !== idx));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    if (!form.brand_slug || !form.name) {
      setErr("Marka ve model adı zorunludur.");
      return;
    }
    setSaving(true);
    try {
      await saveProduct(form, images, files);
      router.push("/admin");
      router.refresh();
    } catch (e: any) {
      setErr(e?.message ?? "Kaydedilemedi.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <p className="py-16 text-center text-muted">Yükleniyor…</p>;

  const inputCls =
    "w-full rounded-lg border border-line bg-surface px-3 py-2.5 text-sm text-cream outline-none focus:border-gold";

  return (
    <form onSubmit={onSubmit} className="max-w-3xl">
      <h1 className="mb-6 font-serif text-3xl">
        {productId ? "Ürünü Düzenle" : "Yeni Ürün"}
      </h1>

      {err && (
        <p className="mb-4 rounded-lg border border-red-900 bg-red-950/40 p-3 text-sm text-red-300">
          {err}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Model Adı *">
          <input className={inputCls} value={form.name} onChange={(e) => set("name", e.target.value)} />
        </Field>
        <Field label="Marka *">
          <select className={inputCls} value={form.brand_slug} onChange={(e) => set("brand_slug", e.target.value)}>
            {brands.map((b) => (
              <option key={b.slug} value={b.slug}>{b.name}</option>
            ))}
          </select>
        </Field>
        <Field label="Seri">
          <input className={inputCls} value={form.series ?? ""} onChange={(e) => set("series", e.target.value)} />
        </Field>
        <Field label="Referans / Kod">
          <input className={inputCls} value={form.reference ?? ""} onChange={(e) => set("reference", e.target.value)} />
        </Field>
        <Field label="Cinsiyet">
          <select className={inputCls} value={form.gender} onChange={(e) => set("gender", e.target.value)}>
            <option value="erkek">Erkek</option>
            <option value="bayan">Kadın</option>
            <option value="unisex">Unisex</option>
          </select>
        </Field>
        <Field label="Fiyat (TL) — boş bırakılırsa 'Fiyat için sorun'">
          <input
            type="number"
            className={inputCls}
            value={form.price ?? ""}
            onChange={(e) => set("price", e.target.value === "" ? null : Number(e.target.value))}
          />
        </Field>
      </div>

      <Field label="Açıklama" className="mt-5">
        <textarea
          rows={4}
          className={inputCls}
          value={form.description ?? ""}
          onChange={(e) => set("description", e.target.value)}
        />
      </Field>

      <div className="mt-5 flex flex-wrap gap-6">
        <Check label="Öne çıkan" checked={form.is_featured} onChange={(v) => set("is_featured", v)} />
        <Check label="Sitede aktif" checked={form.is_active} onChange={(v) => set("is_active", v)} />
        <Check label="Satıldı" checked={form.sold} onChange={(v) => set("sold", v)} />
      </div>

      {/* Görseller */}
      <div className="mt-8">
        <h2 className="mb-3 font-serif text-xl">Fotoğraflar</h2>
        <p className="mb-3 text-xs text-muted">
          Birden fazla foto ekleyebilirsiniz. İlk foto kapak olur; sıralamayı oklarla değiştirin.
        </p>

        {images.length > 0 && (
          <div className="mb-4 grid grid-cols-3 gap-3 sm:grid-cols-5">
            {images.map((img, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-lg border border-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.url} alt="" className="aspect-square w-full object-cover" />
                {idx === 0 && (
                  <span className="absolute left-1 top-1 rounded bg-gold px-1.5 py-0.5 text-[10px] text-[#1a1407]">
                    Kapak
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 flex justify-between bg-ink/80 px-1 py-1">
                  <button type="button" onClick={() => moveImage(idx, -1)} className="px-1 text-xs text-cream">←</button>
                  <button type="button" onClick={() => removeImage(idx)} className="px-1 text-xs text-red-400">Sil</button>
                  <button type="button" onClick={() => moveImage(idx, 1)} className="px-1 text-xs text-cream">→</button>
                </div>
              </div>
            ))}
          </div>
        )}

        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => setFiles(Array.from(e.target.files ?? []))}
          className="block w-full text-sm text-muted file:mr-4 file:rounded-full file:border-0 file:bg-surface-2 file:px-4 file:py-2 file:text-sm file:text-cream"
        />
        {files.length > 0 && (
          <p className="mt-2 text-xs text-gold-light">{files.length} yeni foto yüklenecek.</p>
        )}
      </div>

      <div className="mt-8 flex gap-3">
        <button type="submit" disabled={saving} className="btn-gold rounded-full px-6 py-3 text-sm disabled:opacity-50">
          {saving ? "Kaydediliyor…" : "Kaydet"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin")}
          className="btn-outline rounded-full px-6 py-3 text-sm"
        >
          Vazgeç
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-1 block text-xs text-muted">{label}</span>
      {children}
    </label>
  );
}

function Check({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-2 text-sm text-cream">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="accent-[var(--color-gold)]"
      />
      {label}
    </label>
  );
}
