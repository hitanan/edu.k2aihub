import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { gameDevLessons } from '@/data/game-development';
import { createModuleMetadata } from '@/utils/seo';
import { gameDevelopmentModuleData } from '@/data/game-development-module';

export const metadata: Metadata = createModuleMetadata(
  'Game Development & Interactive Media - Phát triển Game và Truyền thông Tương tác',
  'Khóa học phát triển game toàn diện từ Unity, Unreal Engine đến game design, storytelling và xuất bản. Tạo game 2D/3D chuyên nghiệp với K2AiHub.',
  [
    'phát triển game',
    'Unity',
    'Unreal Engine',
    'game design',
    'lập trình game',
    '2D game',
    '3D game',
    'interactive media',
    'K2AiHub',
  ],
  'game-development',
);

export default function GameDevelopmentPage() {
  return <ModulePageTemplate moduleData={gameDevelopmentModuleData} lessons={gameDevLessons} />;
}
