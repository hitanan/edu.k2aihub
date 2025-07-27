import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // GitHub Pages deployment
  output: 'export',
  trailingSlash: true,

  // Basic configuration for static export
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },

  // SEO and performance optimizations
  experimental: {
    optimizePackageImports: ['@/components', '@/utils'],
    optimizeCss: true
  },

  // Build optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },

  // Headers for better SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400'
          }
        ]
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=300, stale-while-revalidate=600'
          }
        ]
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ];
  },

  // Compression and performance
  compress: true,
  poweredByHeader: false,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/k2aihub/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/k2aihub' : '',

  // Generate sitemap and other files
  generateBuildId: async () => {
    // Generate consistent build ID for better caching
    return 'k2aihub-build-' + Date.now().toString();
  }

  // Bundle analyzer (optional - can be enabled when needed)
  // bundleAnalyzer: {
  //   enabled: process.env.ANALYZE === 'true',
  // }
};

export default nextConfig;
