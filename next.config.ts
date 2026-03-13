import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
    formats: ["image/avif", "image/webp"],
  },

  // ─── ZERO-DOWNTIME MIGRATION: 301 redirects from old Framer/Replit URLs ───
  async redirects() {
    return [
      // Consolidate www → non-www (pick one canonical domain)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.chatdaddy.tech" }],
        destination: "https://chatdaddy.tech/:path*",
        permanent: true,
      },
      // Legacy route redirects
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
    ];
  },

  // ─── Security & performance headers ───
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
        ],
      },
      {
        // Cache static assets aggressively
        source: "/images/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
