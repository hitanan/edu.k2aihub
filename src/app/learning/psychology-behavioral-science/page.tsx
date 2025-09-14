import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { psychologyBehavioralScienceModule, psychologyLessons } from '@/data/modules/psychology-behavioral-science';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  psychologyBehavioralScienceModule.title,
  psychologyBehavioralScienceModule.description,
  [
    'tâm lý học hành vi',
    'khoa học hành vi',
    'tâm lý học người dùng',
    'kinh tế học hành vi',
    'tâm lý học nhận thức',
    'tâm lý học UX',
  ],
  psychologyBehavioralScienceModule.id,
);

export default function PsychologyBehavioralSciencePage() {
  return <ModulePageTemplate moduleData={psychologyBehavioralScienceModule} lessons={psychologyLessons} />;
}
