import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Lüks Saat Koleksiyonu`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "saat",
    "lüks saat",
    "rolex",
    "patek philippe",
    "audemars piguet",
    "cartier",
    "erkek saat",
    "kadın saat",
    "Cr7watch",
  ],
  openGraph: {
    title: `${SITE.name} — Lüks Saat Koleksiyonu`,
    description: SITE.description,
    type: "website",
    locale: "tr_TR",
    siteName: SITE.name,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink text-cream">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
