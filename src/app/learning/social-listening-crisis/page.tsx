import type { Metadata } from 'next';
import { createModuleMetadata } from '@/utils/seo';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { socialListeningLessons } from '@/data/social-listening-crisis';
import { socialListeningCrisisModuleData } from '@/data/social-listening-crisis-module';

export const metadata: Metadata = createModuleMetadata(
  socialListeningCrisisModuleData.title,
  socialListeningCrisisModuleData.description,
  [
    'social listening',
    'crisis management',
    'brand reputation',
    'pr crisis',
    'social media monitoring',
    'damage control',
    'vietnam social media',
  ],
  socialListeningCrisisModuleData.id,
);

export default function SocialListeningCrisisPage() {
  return <ModulePageTemplate moduleData={socialListeningCrisisModuleData} lessons={socialListeningLessons} />;
}
