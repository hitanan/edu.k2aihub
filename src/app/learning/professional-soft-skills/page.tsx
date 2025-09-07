import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { professionalSoftSkillsLessons } from '@/data/professional-soft-skills';
import { professionalSoftSkillsModuleData } from '@/data/professional-soft-skills-module';
import { createModuleMetadata } from '@/utils/seo';
import { Metadata } from 'next';

export const metadata: Metadata = createModuleMetadata(
  professionalSoftSkillsModuleData.title,
  professionalSoftSkillsModuleData.description,
  ['kỹ năng mềm', 'giao tiếp', 'lãnh đạo', 'thuyết trình', 'đàm phán', 'quản lý thời gian'],
  professionalSoftSkillsModuleData.id,
);

export default function ProfessionalSoftSkillsPage() {
  return <ModulePageTemplate moduleData={professionalSoftSkillsModuleData} lessons={professionalSoftSkillsLessons} />;
}
