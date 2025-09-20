import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { careerGuidanceDevelopmentModuleData } from '@/data/modules/career-guidance-development';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  careerGuidanceDevelopmentModuleData.title,
  careerGuidanceDevelopmentModuleData.description,
  ['hướng nghiệp', 'phát triển sự nghiệp', 'chọn ngành', 'K2AI'],
  careerGuidanceDevelopmentModuleData.id,
);

export default function CareerGuidanceDevelopmentPage() {
  return (
    <ModulePageTemplate
      moduleData={careerGuidanceDevelopmentModuleData}
      lessons={careerGuidanceDevelopmentModuleData.lessons || []}
    />
  );
}
