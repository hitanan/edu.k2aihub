import { Metadata } from 'next';
import { createTitle, createDescription } from '@/utils/seo';
import VietnameseHeritageExplorer3D from '@/components/games/VietnameseHeritageExplorer3D';

export const metadata: Metadata = {
  title: createTitle('Vietnamese Heritage Explorer 3D - Khám phá Di sản Việt Nam'),
  description: createDescription(
    'Khám phá các di tích lịch sử và địa danh văn hóa Việt Nam qua trải nghiệm 3D tương tác. Tìm hiểu về Văn Miếu, Chùa Một Cột, Hoàng Thành Thăng Long và nhiều di sản khác.'
  ),
  keywords: ['vietnamese heritage', 'di sản việt nam', '3d game', 'văn hóa việt nam', 'lịch sử việt nam', 'k2aihub'],
  openGraph: {
    title: createTitle('Vietnamese Heritage Explorer 3D - Khám phá Di sản Việt Nam'),
    description: createDescription(
      'Khám phá các di tích lịch sử và địa danh văn hóa Việt Nam qua trải nghiệm 3D tương tác'
    ),
    type: 'website',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',
    locale: 'vi_VN',
    url: 'https://k2aihub.com/games/vietnamese-heritage-explorer-3d',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1583417267826-aebc4d1542e1?w=1200&h=600&fit=crop',
        width: 1200,
        height: 600,
        alt: 'Vietnamese Heritage Explorer 3D - K2AiHub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('Vietnamese Heritage Explorer 3D - Khám phá Di sản Việt Nam'),
    description: createDescription(
      'Khám phá các di tích lịch sử và địa danh văn hóa Việt Nam qua trải nghiệm 3D tương tác'
    ),
    images: ['https://images.unsplash.com/photo-1583417267826-aebc4d1542e1?w=1200&h=600&fit=crop'],
  },
};

export default function VietnameseHeritageExplorer3DPage() {
  return <VietnameseHeritageExplorer3D />;
}