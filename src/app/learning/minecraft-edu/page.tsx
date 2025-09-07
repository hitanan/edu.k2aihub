import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { minecraftLessons } from '@/data/minecraft-edu';
import { createModuleMetadata } from '@/utils/seo';
import { minecraftEduModuleData } from '@/data/minecraft-edu-module';

export const metadata: Metadata = createModuleMetadata(
  minecraftEduModuleData.title,
  minecraftEduModuleData.description,
  ['minecraft', 'minecraft education', 'lập trình khối', 'hóa học', 'stem', 'K2AI'],
  minecraftEduModuleData.id,
);

export default function MinecraftEduPage() {
  return <ModulePageTemplate moduleData={minecraftEduModuleData} lessons={minecraftLessons} />;
}
