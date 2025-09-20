import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { introductionToPhilosophyModuleData } from '@/data/modules/introduction-to-philosophy';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  introductionToPhilosophyModuleData.title,
  introductionToPhilosophyModuleData.description,
  introductionToPhilosophyModuleData.tags,
  introductionToPhilosophyModuleData.id,
);

export default function IntroductionToPhilosophyPage() {
  return (
    <ModulePageTemplate
      moduleData={introductionToPhilosophyModuleData}
      lessons={introductionToPhilosophyModuleData.lessons || []}
    />
  );
}
