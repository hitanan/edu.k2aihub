import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { mentalHealthTechModule } from '@/data/modules/mental-health-tech';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  mentalHealthTechModule.title,
  mentalHealthTechModule.description,
  ['mental health tech', 'digital wellness', 'sức khỏe tâm thần', 'wellness apps', 'meditation tech', 'K2AiHub'],
  mentalHealthTechModule.id,
);

export default function MentalHealthTechPage() {
  return <ModulePageTemplate moduleData={mentalHealthTechModule} lessons={mentalHealthTechModule.lessons || []} />;
}
