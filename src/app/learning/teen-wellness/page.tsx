import type { Metadata } from 'next';
import { createModuleMetadata } from '@/utils/seo';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { teenWellnessLessons } from '@/data/teen-wellness';
import { teenWellnessModuleData } from '@/data/teen-wellness-module';

export const metadata: Metadata = createModuleMetadata(
  teenWellnessModuleData.title,
  teenWellnessModuleData.description,
  [
    'teen wellness',
    'mental health',
    'sức khỏe tinh thần',
    'tuổi teen',
    'stress management',
    'anxiety control',
    'mindfulness',
  ],
  teenWellnessModuleData.id,
);

export default function TeenWellnessPage() {
  return <ModulePageTemplate moduleData={teenWellnessModuleData} lessons={teenWellnessLessons} />;
}
