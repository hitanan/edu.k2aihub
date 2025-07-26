import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // GitHub Pages deployment
  output: 'export',
  trailingSlash: true,

  // Basic configuration for static export
  images: {
    unoptimized: true
  },

  // Performance optimizations
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
  basePath: process.env.NODE_ENV === 'production' ? '/k2aihub' : ''

  // Bundle analyzer (optional - can be enabled when needed)
  // bundleAnalyzer: {
  //   enabled: process.env.ANALYZE === 'true',
  // }
};

export default nextConfig;
