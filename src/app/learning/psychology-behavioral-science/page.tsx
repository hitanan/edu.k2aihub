import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { psychologyBehavioralScienceLessons } from '@/data/psychology-behavioral-science';
import { createModuleMetadata } from '@/utils/seo';
import { psychologyBehavioralScienceModuleData } from '@/data/psychology-behavioral-science-module';

export const metadata: Metadata = createModuleMetadata(
  psychologyBehavioralScienceModuleData.title,
  psychologyBehavioralScienceModuleData.description,
  [
    'behavioral psychology',
    'behavioral science',
    'user psychology',
    'behavioral economics',
    'cognitive psychology',
    'ux psychology',
    'vietnam psychology',
    'k2aihub',
  ],
  psychologyBehavioralScienceModuleData.id,
);

export default function PsychologyBehavioralSciencePage() {
  return (
    <ModulePageTemplate
      moduleData={psychologyBehavioralScienceModuleData}
      lessons={psychologyBehavioralScienceLessons}
    />
  );
}
