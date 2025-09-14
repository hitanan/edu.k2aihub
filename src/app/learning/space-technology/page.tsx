import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { spaceTechnologyLessons } from '@/data/modules/space-technology';
import { createModuleMetadata } from '@/utils/seo';
import { spaceTechnologyModuleData } from '@/data/modules/space-technology';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  spaceTechnologyModuleData.title,
  spaceTechnologyModuleData.description,
  ['space technology', 'satellite', 'cubesat', 'aerospace', 'vietnam space', 'công nghệ vũ trụ', 'K2AI'],
  spaceTechnologyModuleData.id,
);

export default function SpaceTechnologyMainPage() {
  return <ModulePageTemplate moduleData={spaceTechnologyModuleData} lessons={spaceTechnologyLessons} />;
}
