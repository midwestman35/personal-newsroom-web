import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Do NOT set output: "export" — that breaks SSR on Cloudflare Pages
  images: {
    // next/image optimization is handled by Cloudflare Images binding
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;
