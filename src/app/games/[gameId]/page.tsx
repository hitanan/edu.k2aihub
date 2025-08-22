import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EDUCATIONAL_GAMES_DATA } from '@/data/educationalGames';
import { createTitle, createDescription, createOpenGraphTitle } from '@/utils/seo';
import GamePageClient from './GamePageClient';
import { PageProps } from '@/types';

// Generate static params for all games
export async function generateStaticParams() {
  return EDUCATIONAL_GAMES_DATA.map((game) => ({
    gameId: game.id,
  }));
}

// Generate metadata for each game
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
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
    keywords: [game.title, ...game.skills, 'trò chơi giáo dục', 'K2AI'],
    openGraph: {
      title: createOpenGraphTitle(`${game.title} - Trò Chơi Giáo Dục`),
      description: game.description,
      type: 'website',
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
