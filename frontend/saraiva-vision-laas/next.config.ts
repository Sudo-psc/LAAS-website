import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Habilitar Turbopack para desenvolvimento mais rápido
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  // Image optimization com suporte a formatos modernos
  images: {
    domains: ['saraivavision.com.br'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  httpAgentOptions: {
    keepAlive: true,
  },
  
  // Experimental features do Next.js 15
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion', 'react-hook-form', 'zod'],
  },

  // Headers para segurança e performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
      {
        source: '/(.*)\\.(css|js|jpg|jpeg|png|gif|ico|svg|webp|avif)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/planos',
        destination: '/#planos',
        permanent: false,
      },
      {
        source: '/contato',
        destination: '/#contato',
        permanent: false,
      },
    ];
  },

  // Configuração de ambiente para desenvolvimento vs produção
  env: {
    CUSTOM_KEY: process.env.NODE_ENV === 'development' ? 'dev' : 'prod',
  },
};

export default nextConfig;
