import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { robloxLessons } from '@/data/roblox-game-dev';
import { createModuleMetadata } from '@/utils/seo';
import { robloxGameDevModuleData } from '@/data/roblox-game-dev-module';

export const metadata: Metadata = createModuleMetadata(
  robloxGameDevModuleData.title,
  robloxGameDevModuleData.description,
  ['roblox', 'game development', 'lua', 'lập trình game', 'roblox studio', 'K2AI'],
  robloxGameDevModuleData.id,
);

export default function RobloxGameDevPage() {
  return <ModulePageTemplate moduleData={robloxGameDevModuleData} lessons={robloxLessons} />;
}
