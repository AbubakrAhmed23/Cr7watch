"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE, whatsappLink } from "@/lib/site";

const NAV = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/markalar", label: "Markalar" },
  { href: "/arama", label: "Ara" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink">
      <div className="container-luxe flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link href="/" className="group flex items-baseline gap-1" onClick={() => setOpen(false)}>
          <span className="font-serif text-2xl font-bold tracking-tight md:text-3xl">
            Cr7
          </span>
          <span className="font-serif text-2xl font-bold tracking-tight text-gold-gradient md:text-3xl">
            watch
          </span>
        </Link>

        {/* Masaüstü menü */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-muted transition-colors hover:text-gold-light"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold rounded-full px-5 py-2 text-sm"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobil buton */}
        <button
          type="button"
          aria-label="Menü"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-cream md:hidden"
        >
          <span className="sr-only">Menü</span>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobil menü */}
      {open && (
        <nav className="border-t border-line bg-ink-soft md:hidden">
          <div className="container-luxe flex flex-col py-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/50 py-3 text-cream/90"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-4 rounded-full px-5 py-3 text-center text-sm"
            >
              WhatsApp ile Yaz · {SITE.phoneDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}
