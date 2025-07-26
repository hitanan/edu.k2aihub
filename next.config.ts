import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Basic configuration without problematic exports
  images: {
    unoptimized: true
  },
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['@/components', '@/utils'],
  },
  // Build optimizations
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Static generation optimizations
  generateStaticParams: true,
  // Compression and caching
  compress: true,
  poweredByHeader: false,
  // Bundle analyzer (optional - can be enabled when needed)
  // bundleAnalyzer: {
  //   enabled: process.env.ANALYZE === 'true',
  // }
};

export default nextConfig;
