import type { Metadata } from 'next';
import React from 'react';
import { createModuleMetadata } from '@/utils/seo';
import { moduleNavigation } from '@/data/moduleNavigation';
import { EDUCATIONAL_GAMES_DATA } from '@/data/educationalGames';
import { EducationalGame, ModuleNavigation, ModuleData } from '@/types';
import StructuredData from '@/components/StructuredData';
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

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'AI Của Tôi - Trung Tâm Học Tập AI Toàn Diện',
    description:
      'Khám phá toàn bộ các bài học, trò chơi và công cụ AI tại K2AiHub. Từ ChatGPT, Midjourney đến lập trình AI và marketing, tất cả ở một nơi.',
    url: 'https://k2aihub.com/ai',
    inLanguage: 'vi-VN',
    publisher: {
      '@type': 'Organization',
      name: 'K2AiHub',
      logo: {
        '@type': 'ImageObject',
        url: 'https://k2aihub.com/logo.png',
      },
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        ...aiLessons.map((lesson, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Course',
            name: lesson.title,
            description: lesson.description,
            url: `https://k2aihub.com${'path' in lesson ? lesson.path : `/learning/${lesson.id}`}`,
          },
        })),
        ...aiGames.map((game, index) => ({
          '@type': 'ListItem',
          position: aiLessons.length + index + 1,
          item: {
            '@type': 'Game',
            name: game.title,
            description: game.description,
            url: `https://k2aihub.com/games/${game.id}`,
          },
        })),
      ],
    },
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <AIHubClient lessons={aiLessons} games={aiGames} />
    </>
  );
}
