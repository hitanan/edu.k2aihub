import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { minecraftEduModule } from '@/data/modules/minecraft-edu';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  minecraftEduModule.title,
  minecraftEduModule.description,
  ['minecraft', 'minecraft education', 'lập trình khối', 'hóa học', 'stem', 'K2AI'],
  minecraftEduModule.id,
);

export default function MinecraftEduPage() {
  return <ModulePageTemplate moduleData={minecraftEduModule} lessons={minecraftEduModule.lessons || []} />;
}
