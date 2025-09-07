import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { mentalHealthLessons } from '@/data/mental-health-tech';
import { createModuleMetadata } from '@/utils/seo';
import { mentalHealthTechModuleData } from '@/data/mental-health-tech-module';

export const metadata: Metadata = createModuleMetadata(
  mentalHealthTechModuleData.title,
  mentalHealthTechModuleData.description,
  [
    'mental health tech',
    'digital wellness',
    'sức khỏe tâm thần',
    'wellness apps',
    'meditation tech',
    'K2AiHub',
  ],
  mentalHealthTechModuleData.id,
);

export default function MentalHealthTechPage() {
  return <ModulePageTemplate moduleData={mentalHealthTechModuleData} lessons={mentalHealthLessons} />;
}
