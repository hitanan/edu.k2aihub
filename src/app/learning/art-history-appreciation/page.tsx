import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { artHistoryAppreciationModuleData } from '@/data/modules/art-history-appreciation';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  artHistoryAppreciationModuleData.title,
  artHistoryAppreciationModuleData.description,
  artHistoryAppreciationModuleData.tags,
  artHistoryAppreciationModuleData.id,
);

export default function ArtHistoryAppreciationPage() {
  return (
    <ModulePageTemplate
      moduleData={artHistoryAppreciationModuleData}
      lessons={artHistoryAppreciationModuleData.lessons || []}
    />
  );
}
