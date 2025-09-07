import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { softSkillsLessons } from '@/data/soft-skills';
import { createModuleMetadata } from '@/utils/seo';
import { softSkillsModuleData } from '@/data/soft-skills-module';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  softSkillsModuleData.title,
  softSkillsModuleData.description,
  ['kỹ năng mềm', 'soft skills', 'giao tiếp', 'làm việc nhóm', 'lãnh đạo', 'phát triển bản thân', 'K2AI'],
  softSkillsModuleData.id,
);

export default function SoftSkillsModulePage() {
  return <ModulePageTemplate moduleData={softSkillsModuleData} lessons={softSkillsLessons} />;
}
