import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { musicAppreciationModuleData } from '@/data/modules/music-appreciation';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  musicAppreciationModuleData.title,
  musicAppreciationModuleData.description,
  musicAppreciationModuleData.tags,
  musicAppreciationModuleData.id,
);

export default function MusicAppreciationPage() {
  return (
    <ModulePageTemplate moduleData={musicAppreciationModuleData} lessons={musicAppreciationModuleData.lessons || []} />
  );
}
