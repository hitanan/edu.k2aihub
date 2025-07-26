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
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },

  // Static generation optimizations
  generateStaticParams: true,

  // Compression and performance
  compress: true,
  poweredByHeader: false

  // Bundle analyzer (optional - can be enabled when needed)
  // bundleAnalyzer: {
  //   enabled: process.env.ANALYZE === 'true',
  // }
};

export default nextConfig;
