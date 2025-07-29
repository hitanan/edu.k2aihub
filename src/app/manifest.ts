import { MetadataRoute } from 'next';

// Force static generation for manifest
export const dynamic = 'force-static';
export const revalidate = false;

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'K2AiHub - Học tập thông minh – Công nghệ AI dẫn lối Việt Nam',
    short_name: 'K2AiHub',
    description:
      'Khám phá 34 đơn vị hành chính cấp tỉnh của Việt Nam với bản đồ tương tác và hướng dẫn AI thực tế',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    orientation: 'portrait',
    scope: '/',
    lang: 'vi',
    categories: ['education', 'reference', 'geography'],
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
