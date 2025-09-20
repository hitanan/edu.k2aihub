import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { literatureReadingSkillsModuleData } from '@/data/modules/literature-reading-skills';
import { createModuleMetadata } from '@/utils/seo';

const MODULE_ID = 'literature-reading-skills';

export const metadata: Metadata = createModuleMetadata(
  literatureReadingSkillsModuleData.title,
  literatureReadingSkillsModuleData.description,
  literatureReadingSkillsModuleData.tags,
  MODULE_ID,
);

export default function LiteratureReadingSkillsPage() {
  return (
    <ModulePageTemplate
      moduleData={literatureReadingSkillsModuleData}
      lessons={literatureReadingSkillsModuleData.lessons || []}
    />
  );
}
