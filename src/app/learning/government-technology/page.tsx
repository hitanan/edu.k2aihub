import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { governmentTechnologyLessons } from '@/data/government-technology';
import { governmentTechnologyModuleData } from '@/data/government-technology-module';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  governmentTechnologyModuleData.title,
  governmentTechnologyModuleData.description,
  ['government-technology', 'education', 'K2AI', 'học tập thông minh'],
  governmentTechnologyModuleData.id
);

export default function GovernmentTechnologyPage() {
  return (
    <ModulePageTemplate
      moduleData={governmentTechnologyModuleData}
      lessons={governmentTechnologyLessons}
    />
  );
}