import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack configuration (moved from experimental.turbo)
  turbopack: {
    root: __dirname,
  },

  // Image optimization
  images: {
    domains: ['saraivavision.com.br'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
