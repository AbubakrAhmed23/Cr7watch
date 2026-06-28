"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError("Giriş başarısız. E-posta veya şifre hatalı.");
        return;
      }
      router.push("/admin");
      router.refresh();
    } catch {
      setError("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container-luxe flex min-h-[70vh] items-center justify-center py-16">
      <div className="w-full max-w-sm rounded-2xl border border-line bg-surface p-8">
        <h1 className="text-center font-serif text-2xl">
          Cr7<span className="text-gold-gradient">watch</span> Yönetim
        </h1>
        <p className="mt-2 text-center text-sm text-muted">Yönetici girişi</p>

        {!isSupabaseConfigured && (
          <p className="mt-5 rounded-lg border border-gold/40 bg-gold/10 p-3 text-xs text-gold-light">
            Supabase henüz yapılandırılmadı. Lütfen kurulum adımlarını (README)
            tamamlayın.
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-xs text-muted">E-posta</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-line bg-ink px-3 py-2.5 text-sm text-cream outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs text-muted">Şifre</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-line bg-ink px-3 py-2.5 text-sm text-cream outline-none focus:border-gold"
            />
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={loading || !isSupabaseConfigured}
            className="btn-gold w-full rounded-full px-5 py-3 text-sm disabled:opacity-50"
          >
            {loading ? "Giriş yapılıyor…" : "Giriş Yap"}
          </button>
        </form>
      </div>
    </div>
  );
}
