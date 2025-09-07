import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { spaceLessons } from '@/data/space-exploration';
import { createModuleMetadata } from '@/utils/seo';
import { spaceExplorationModuleData } from '@/data/space-exploration-module';

export const metadata: Metadata = createModuleMetadata(
  spaceExplorationModuleData.title,
  spaceExplorationModuleData.description,
  [
    'space technology',
    'space exploration',
    'rocket science',
    'satellite technology',
    'space missions',
    'aerospace engineering',
    'k2aihub',
  ],
  spaceExplorationModuleData.id,
);

export default function SpaceExplorationPage() {
  return <ModulePageTemplate moduleData={spaceExplorationModuleData} lessons={spaceLessons} />;
}
