import { SITE } from "@/lib/site";

/** Site geneli yapısal veri: işletme (mağaza) + web sitesi (arama kutusu). */
export default function SiteJsonLd() {
  const business = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    name: SITE.name,
    image: `${SITE.url}/opengraph-image`,
    url: SITE.url,
    telephone: `+${SITE.whatsappIntl}`,
    priceRange: "₺₺",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tahtakale, Tomruk Sk. No:18",
      addressLocality: "Fatih",
      addressRegion: "İstanbul",
      postalCode: "34116",
      addressCountry: "TR",
    },
    sameAs: [SITE.instagram].filter(Boolean),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    inLanguage: "tr-TR",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/arama?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
