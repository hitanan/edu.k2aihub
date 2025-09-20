import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { entrepreneurshipAndInnovationModuleData } from '@/data/modules/entrepreneurship-and-innovation';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  entrepreneurshipAndInnovationModuleData.title,
  entrepreneurshipAndInnovationModuleData.description,
  entrepreneurshipAndInnovationModuleData.tags,
  entrepreneurshipAndInnovationModuleData.id,
);

export default function EntrepreneurshipAndInnovationPage() {
  return (
    <ModulePageTemplate
      moduleData={entrepreneurshipAndInnovationModuleData}
      lessons={entrepreneurshipAndInnovationModuleData.lessons || []}
    />
  );
}
