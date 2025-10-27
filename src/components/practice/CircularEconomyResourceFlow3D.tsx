'use client';

import React from 'react';
import { MiniGamePlayer } from './MiniGamePlayer';
import { EDUCATIONAL_GAMES_DATA } from '@/data/educationalGames';

export default function CircularEconomyResourceFlow3D() {
  const gameData = EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'circular-economy-resource-flow-3d');

  if (!gameData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-900/20 to-teal-900/20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-400 mb-4">Game Not Found</h1>
          <p className="text-gray-300">The Circular Economy Resource Flow 3D game could not be loaded.</p>
        </div>
      </div>
    );
  }

  return <MiniGamePlayer game={gameData} onComplete={() => {}} onExit={() => {}} />;
}
