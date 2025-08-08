import { Metadata } from 'next';
import { createTitle, createDescription } from '@/utils/seo';
import EducationalGamesMain from './EducationalGamesMain';

export const metadata: Metadata = {
  title: createTitle('Trò Chơi Giáo Dục - Học Tập Qua Chơi'),
  description: createDescription(
    'Khám phá bộ sưu tập trò chơi giáo dục đa dạng từ quiz địa lý, thử thách AI, puzzle lập trình đến mô phỏng khoa học. Học tập hiệu quả qua trải nghiệm chơi game thú vị.',
  ),
  keywords: [
    'trò chơi giáo dục',
    'game học tập',
    'quiz',
    'puzzle',
    'K2AI',
    'học qua chơi',
  ],
  openGraph: {
    title: 'Trò Chơi Giáo Dục - Học Tập Qua Chơi | K2AiHub',
    description:
      'Khám phá bộ sưu tập trò chơi giáo dục đa dạng. Học tập hiệu quả qua trải nghiệm chơi game thú vị.',
    type: 'website',
  },
};

export default function GamesPage() {
  return <EducationalGamesMain />;
}
