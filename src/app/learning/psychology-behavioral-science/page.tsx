import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { psychologyBehavioralScienceModule } from '@/data/modules/psychology-behavioral-science';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  psychologyBehavioralScienceModule.title,
  psychologyBehavioralScienceModule.description,
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
  psychologyBehavioralScienceModule.id,
);

export default function PsychologyBehavioralSciencePage() {
  return (
    <ModulePageTemplate
      moduleData={psychologyBehavioralScienceModule}
      lessons={psychologyBehavioralScienceModule.lessons || []}
    />
  );
}
