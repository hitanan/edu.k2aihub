import { MetadataRoute } from 'next';

// Force static generation for manifest
export const dynamic = 'force-static';
export const revalidate = false;

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'K2AI - Học tập thông minh, Công nghệ AI dẫn lối Việt Nam',
    short_name: 'K2AI',
    description:
      'Khám phá 34 đơn vị hành chính cấp tỉnh của Việt Nam với bản đồ tương tác và hướng dẫn AI thực tế',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    orientation: 'portrait',
    scope: '/',
    lang: 'vi',
    categories: [
      'giáo dục',
      'tham khảo',
      'địa lý',
      'công nghệ AI',
      'học tập tương tác',
      'bản đồ',
      'hướng dẫn AI',
      'ứng dụng di động',
      'học tập trực tuyến',
      'python',
      'arduino',
      'robotics',
      'bán dẫn',
      'IoT',
      'Địa Lý Việt Nam',
      'Scratch',
      'lập trình',
      'khoa học máy tính',
      'giáo dục STEM'
    ],
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ],
    screenshots: [
      {
        src: '/screenshot-wide.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide'
      },
      {
        src: '/screenshot-narrow.png',
        sizes: '750x1334',
        type: 'image/png',
        form_factor: 'narrow'
      }
    ]
  };
}
