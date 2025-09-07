import type { Metadata } from 'next';
import { createModuleMetadata } from '@/utils/seo';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { youngEntrepreneurLessons } from '@/data/young-entrepreneur';
import { youngEntrepreneurModuleData } from '@/data/young-entrepreneur-module';

export const metadata: Metadata = createModuleMetadata(
  youngEntrepreneurModuleData.title,
  youngEntrepreneurModuleData.description,
  [
    'young entrepreneur',
    'startup vietnam',
    'khởi nghiệp',
    'business model',
    'mvp development',
    'fundraising',
    'gọi vốn',
  ],
  youngEntrepreneurModuleData.id,
);

export default function YoungEntrepreneurBootcampPage() {
  return <ModulePageTemplate moduleData={youngEntrepreneurModuleData} lessons={youngEntrepreneurLessons} />;
}
