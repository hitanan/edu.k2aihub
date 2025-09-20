import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { scientificResearchSkillsModuleData } from '@/data/modules/scientific-research-skills';
import { createModuleMetadata } from '@/utils/seo';

const MODULE_ID = 'scientific-research-skills';

export const metadata: Metadata = createModuleMetadata(
  scientificResearchSkillsModuleData.title,
  scientificResearchSkillsModuleData.description,
  scientificResearchSkillsModuleData.tags,
  MODULE_ID,
);

export default function ScientificResearchSkillsPage() {
  return (
    <ModulePageTemplate
      moduleData={scientificResearchSkillsModuleData}
      lessons={scientificResearchSkillsModuleData.lessons || []}
    />
  );
}
