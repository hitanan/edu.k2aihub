import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { physicalEducationSportsScienceModuleData } from '@/data/modules/physical-education-sports-science';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  physicalEducationSportsScienceModuleData.title,
  physicalEducationSportsScienceModuleData.description,
  ['giáo dục thể chất', 'khoa học thể thao', 'vận động', 'K2AI'],
  physicalEducationSportsScienceModuleData.id,
);

export default function PhysicalEducationSportsSciencePage() {
  return (
    <ModulePageTemplate
      moduleData={physicalEducationSportsScienceModuleData}
      lessons={physicalEducationSportsScienceModuleData.lessons || []}
    />
  );
}
