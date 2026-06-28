"use client";

import { useEffect, useState } from "react";
import { getSettings, saveSettings } from "@/lib/admin";

type Row = Record<string, any>;

export default function AdminSettings() {
  const [s, setS] = useState<Row>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setS((await getSettings()) ?? {});
      } catch (e: any) {
        setErr(e?.message ?? "Yüklenemedi.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  function set(k: string, v: string) {
    setS((prev) => ({ ...prev, [k]: v }));
  }

  async function onSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMsg(null);
    setErr(null);
    try {
      await saveSettings({
        whatsapp: s.whatsapp ?? null,
        instagram: s.instagram ?? null,
        hero_title: s.hero_title ?? null,
        hero_subtitle: s.hero_subtitle ?? null,
        contact_info: s.contact_info ?? null,
      });
      setMsg("Ayarlar kaydedildi.");
    } catch (e: any) {
      setErr(e?.message ?? "Kaydedilemedi.");
    } finally {
      setSaving(false);
    }
  }

  const inputCls =
    "w-full rounded-lg border border-line bg-surface px-3 py-2.5 text-sm text-cream outline-none focus:border-gold";

  if (loading) return <p className="py-16 text-center text-muted">Yükleniyor…</p>;

  return (
    <form onSubmit={onSave} className="max-w-xl">
      <h1 className="mb-6 font-serif text-3xl">Site Ayarları</h1>

      {msg && <p className="mb-4 rounded-lg border border-green-900 bg-green-950/40 p-3 text-sm text-green-300">{msg}</p>}
      {err && <p className="mb-4 rounded-lg border border-red-900 bg-red-950/40 p-3 text-sm text-red-300">{err}</p>}

      <div className="space-y-5">
        <Field label="WhatsApp numarası (ör. 05550776552)">
          <input className={inputCls} value={s.whatsapp ?? ""} onChange={(e) => set("whatsapp", e.target.value)} />
        </Field>
        <Field label="Instagram linki">
          <input className={inputCls} value={s.instagram ?? ""} onChange={(e) => set("instagram", e.target.value)} />
        </Field>
        <Field label="Ana sayfa başlık">
          <input className={inputCls} value={s.hero_title ?? ""} onChange={(e) => set("hero_title", e.target.value)} />
        </Field>
        <Field label="Ana sayfa alt başlık">
          <input className={inputCls} value={s.hero_subtitle ?? ""} onChange={(e) => set("hero_subtitle", e.target.value)} />
        </Field>
        <Field label="İletişim bilgisi / adres">
          <textarea rows={3} className={inputCls} value={s.contact_info ?? ""} onChange={(e) => set("contact_info", e.target.value)} />
        </Field>
      </div>

      <button type="submit" disabled={saving} className="btn-gold mt-6 rounded-full px-6 py-3 text-sm disabled:opacity-50">
        {saving ? "Kaydediliyor…" : "Kaydet"}
      </button>

      <p className="mt-4 text-xs text-muted-2">
        Not: WhatsApp ve diğer değerler şu an koddaki varsayılanlardan (site.ts) okunuyor.
        Bu ayarların siteye yansıması için site_settings tablosuna bağlanması ileride eklenebilir.
      </p>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs text-muted">{label}</span>
      {children}
    </label>
  );
}
