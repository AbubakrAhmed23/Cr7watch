import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Supabase Storage (admin foto yüklemeleri)
      { protocol: "https", hostname: "*.supabase.co" },
    ],
  },
};

export default nextConfig;
