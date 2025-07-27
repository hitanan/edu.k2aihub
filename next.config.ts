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
    optimizePackageImports: ['@/components', '@/utils']
  },

  // Build optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
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
