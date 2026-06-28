import { whatsappLink } from "@/lib/site";

/** Sağ altta sabit WhatsApp butonu (tüm sayfalarda). */
export default function WhatsAppFab() {
  return (
    <a
      href={whatsappLink("Merhaba, Cr7watch koleksiyonu hakkında bilgi almak istiyorum.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      className="pulse-ring fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-luxe transition-transform hover:scale-105"
    >
      <svg width="30" height="30" viewBox="0 0 32 32" fill="white" aria-hidden="true">
        <path d="M16.04 4C9.96 4 5 8.95 5 15.02c0 2.05.56 4.04 1.62 5.79L5 28l7.36-1.93a11.07 11.07 0 0 0 3.68.63h.01C22.13 26.7 27.1 21.75 27.1 15.68 27.1 9.6 22.13 4 16.04 4Zm6.46 15.61c-.27.76-1.58 1.46-2.18 1.5-.58.05-1.12.26-3.77-.79-3.18-1.25-5.2-4.49-5.36-4.7-.16-.21-1.28-1.7-1.28-3.25 0-1.55.81-2.31 1.1-2.62.27-.31.6-.39.8-.39.2 0 .4 0 .58.01.19.01.44-.07.69.53.27.65.92 2.25 1 2.41.08.16.13.35.02.56-.1.21-.16.35-.31.54-.16.18-.33.41-.47.55-.16.16-.32.33-.14.64.18.31.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.49 1.54.31.16.49.13.67-.08.18-.21.77-.9.98-1.2.21-.31.41-.26.69-.16.27.11 1.75.83 2.06.98.31.16.51.23.58.36.08.13.08.74-.19 1.45Z" />
      </svg>
    </a>
  );
}
