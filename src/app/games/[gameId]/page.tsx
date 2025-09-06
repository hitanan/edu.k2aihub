import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EDUCATIONAL_GAMES_DATA } from '@/data/educationalGames';
import { createTitle, createDescription } from '@/utils/seo';
import GamePageClient from './GamePageClient';
import { PageProps } from '@/types';

// Generate static params for all games
export async function generateStaticParams() {
  return EDUCATIONAL_GAMES_DATA.map((game) => ({
    gameId: game.id,
  }));
}

// Generate metadata for each game
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { gameId } = await params;
  const game = EDUCATIONAL_GAMES_DATA.find((g) => g.id === gameId);

  if (!game) {
    return {
      title: createTitle('Không tìm thấy trò chơi'),
      description: createDescription('Trò chơi bạn tìm kiếm không tồn tại.'),
    };
  }

  return {
    title: createTitle(`${game.title} - Trò Chơi Giáo Dục`),
    description: createDescription(game.description),
    keywords: [game.title, ...(game.skills || []), 'trò chơi giáo dục', 'K2AI'],
    alternates: {
      canonical: `/games/${game.id}`,
    },
    openGraph: {
      locale: 'vi_VN',
      siteName: 'K2AiHub - Nền tảng học tập thông minh',

      title: createTitle(`${game.title} - Trò Chơi Giáo Dục`),
      description: game.description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: createTitle('K2AiHub Educational Content'),
      description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
      images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
    },
  };
}

export default async function GamePage({ params }: PageProps) {
  const { gameId } = await params;
  const game = EDUCATIONAL_GAMES_DATA.find((g) => g.id === gameId);

  if (!game) {
    notFound();
  }

  return <GamePageClient game={game} />;
}
