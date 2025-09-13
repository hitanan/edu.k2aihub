import type { Metadata } from 'next';
import React from 'react';
import { createModuleMetadata } from '@/utils/seo';
import { moduleNavigation } from '@/data/moduleNavigation';
import { EDUCATIONAL_GAMES_DATA } from '@/data/educationalGames';
import { EducationalGame, ModuleNavigation, ModuleData } from '@/types';
import AIHubClient from './AIHubClient';

export const metadata: Metadata = createModuleMetadata(
  'AI Của Tôi - Trung Tâm Học Tập AI Toàn Diện',
  'Khám phá toàn bộ các bài học, trò chơi và công cụ AI tại K2AiHub. Từ ChatGPT, Midjourney đến lập trình AI và marketing, tất cả ở một nơi.',
  [
    'AI',
    'trí tuệ nhân tạo',
    'học AI',
    'công cụ AI',
    'bài học AI',
    'trò chơi AI',
    'ChatGPT',
    'Midjourney',
    'GitHub Copilot',
    'AI cho mọi người',
  ],
  'ai',
);

const getAiLessons = (): (ModuleNavigation | ModuleData)[] => {
  return moduleNavigation.filter(
    (module) =>
      (Array.isArray(module.category) && module.category.includes('ai')) ||
      (typeof module.category === 'string' && module.category === 'ai') ||
      module.id.includes('ai'),
  );
};

const getAiGames = (): EducationalGame[] => {
  return EDUCATIONAL_GAMES_DATA.filter(
    (game) =>
      game.moduleType === 'ai' || (game.skills && game.skills.some((skill) => skill.toLowerCase().includes('ai'))),
  );
};

export default function AIModulePage() {
  const aiLessons = getAiLessons();
  const aiGames = getAiGames();

  return <AIHubClient lessons={aiLessons} games={aiGames} />;
}
