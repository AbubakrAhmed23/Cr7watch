"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "@/lib/admin";

const NAV = [
  { href: "/admin", label: "Ürünler" },
  { href: "/admin/markalar", label: "Markalar" },
  { href: "/admin/ayarlar", label: "Ayarlar" },
];

export default function AdminShell({
  email,
  children,
}: {
  email: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleSignOut() {
    await signOut();
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-ink">
      <header className="border-b border-line bg-ink-soft">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-6">
            <Link href="/admin" className="font-serif text-xl font-bold">
              Cr7<span className="text-gold-gradient">watch</span>
              <span className="ml-2 text-xs font-normal text-muted">yönetim</span>
            </Link>
            <nav className="hidden gap-1 sm:flex">
              {NAV.map((item) => {
                const active =
                  item.href === "/admin"
                    ? pathname === "/admin"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                      active ? "bg-surface-2 text-gold-light" : "text-muted hover:text-cream"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" target="_blank" className="hidden text-xs text-muted hover:text-gold-light sm:block">
              Siteyi Gör →
            </Link>
            <span className="hidden text-xs text-muted-2 md:block">{email}</span>
            <button
              onClick={handleSignOut}
              className="rounded-md border border-line px-3 py-1.5 text-xs text-muted transition-colors hover:border-gold hover:text-gold-light"
            >
              Çıkış
            </button>
          </div>
        </div>
        {/* mobil nav */}
        <nav className="flex gap-1 border-t border-line px-5 py-2 sm:hidden">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md px-3 py-1.5 text-sm text-muted">
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-8">{children}</main>
    </div>
  );
}
