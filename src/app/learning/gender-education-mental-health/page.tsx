import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { genderEducationMentalHealthModuleData } from '@/data/modules/gender-education-mental-health';
import { createModuleMetadata } from '@/utils/seo';

const MODULE_ID = 'gender-education-mental-health';

export const metadata: Metadata = createModuleMetadata(
  genderEducationMentalHealthModuleData.title,
  genderEducationMentalHealthModuleData.description,
  genderEducationMentalHealthModuleData.tags,
  MODULE_ID,
);

export default function GenderEducationMentalHealthPage() {
  return (
    <ModulePageTemplate
      moduleData={genderEducationMentalHealthModuleData}
      lessons={genderEducationMentalHealthModuleData.lessons || []}
    />
  );
}
