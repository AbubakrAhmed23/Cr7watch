import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Daha küçük dosya boyutu (performans)
    formats: ["image/avif", "image/webp"],
    qualities: [65, 75],
    minimumCacheTTL: 2592000, // 30 gün önbellek
    remotePatterns: [
      // Supabase Storage (admin foto yüklemeleri)
      { protocol: "https", hostname: "*.supabase.co" },
    ],
  },
};

export default nextConfig;
