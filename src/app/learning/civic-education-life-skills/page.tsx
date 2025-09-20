import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { civicEducationLifeSkillsModuleData } from '@/data/modules/civic-education-life-skills';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  civicEducationLifeSkillsModuleData.title,
  civicEducationLifeSkillsModuleData.description,
  ['giáo dục công dân', 'kỹ năng sống', 'pháp luật', 'K2AI'],
  civicEducationLifeSkillsModuleData.id,
);

export default function CivicEducationLifeSkillsPage() {
  return (
    <ModulePageTemplate
      moduleData={civicEducationLifeSkillsModuleData}
      lessons={civicEducationLifeSkillsModuleData.lessons || []}
    />
  );
}
