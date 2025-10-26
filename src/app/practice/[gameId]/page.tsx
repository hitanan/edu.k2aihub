import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EDUCATIONAL_GAMES_DATA } from '@/data/educationalGames';
import { createTitle, createDescription, createGameStructuredData } from '@/utils/seo';
import GamePageClient from './GamePageClient';
import StructuredData from '@/components/StructuredData';

type Props = {
  params: Promise<{ gameId: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Generate static params for all games
export async function generateStaticParams(): Promise<{ gameId: string }[]> {
  return EDUCATIONAL_GAMES_DATA.map((game) => ({
    gameId: game.id,
  }));
}

// Generate metadata for each game
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { gameId } = await params;
  const game = EDUCATIONAL_GAMES_DATA.find((g) => g.id === gameId);

  if (!game) {
    return {
      title: createTitle('Không tìm thấy Interactive Practice'),
      description: createDescription('Interactive Practice bạn tìm kiếm không tồn tại.'),
    };
  }

  return {
    title: createTitle(`${game.title} - Interactive Practice`),
    description: createDescription(game.description),
    keywords: [game.title, ...(game.skills || []), 'Interactive Practice', 'K2AI'],
    alternates: {
      canonical: `/practice/${game.id}`,
    },
    openGraph: {
      locale: 'vi_VN',
      siteName: 'K2AiHub - Nền tảng học tập thông minh',

      title: createTitle(`${game.title} - Interactive Practice`),
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

import EthicalAISimulatorGame from '@/components/games/story/EthicalAISimulatorGame';
import DataDetectiveGame from '@/components/games/story/DataDetectiveGame';

const gameComponents: { [key: string]: React.ComponentType<{ onComplete: (score: number) => void }> } = {
  'ethical-ai-simulator': EthicalAISimulatorGame,
  'data-detective-missing-shipment': DataDetectiveGame,
  // ... other specific game components
};

export default async function GamePage({ params }: Props) {
  const { gameId } = await params;
  if (!gameId) {
    notFound();
  }
  const game = EDUCATIONAL_GAMES_DATA.find((g) => g.id === gameId);

  if (!game) {
    notFound();
  }

  const SpecificGameComponent = gameComponents[gameId];
  const gameStructured = createGameStructuredData(gameId);

  return (
    <>
      {gameStructured && <StructuredData data={gameStructured} />}
      <GamePageClient game={game} SpecificGameComponent={SpecificGameComponent} />
    </>
  );
}
