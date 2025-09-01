import { Metadata } from 'next';
import { createTitle, createDescription } from '@/utils/seo';
import EducationalGamesMain from './EducationalGamesMain';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: createTitle('Trò Chơi Giáo Dục - Học Tập Qua Chơi'),
    description: createDescription(
      'Khám phá bộ sưu tập trò chơi giáo dục đa dạng từ quiz địa lý, thử thách AI, puzzle lập trình đến mô phỏng khoa học. Học tập hiệu quả qua trải nghiệm chơi game thú vị.',
    ),
    keywords: [
      'trò chơi giáo dục',
      'game học tập',
      'quiz',
      'puzzle',
      '3D games',
      'interactive learning',
      'educational technology',
      'học qua chơi',
    ],
    openGraph: {
      locale: 'vi_VN',
      siteName: 'K2AiHub - Nền tảng học tập thông minh',
      title: 'Trò Chơi Giáo Dục - Học Tập Qua Chơi | K2AiHub',
      description: 'Khám phá bộ sưu tập trò chơi giáo dục đa dạng. Học tập hiệu quả qua trải nghiệm chơi game thú vị.',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: createTitle('K2AiHub Educational Content'),
      description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
      images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
    },
    alternates: {
      canonical: '/games',
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  };
}

export default function GamesPage() {
  return <EducationalGamesMain />;
}
