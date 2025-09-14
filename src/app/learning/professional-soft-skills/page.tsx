import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { professionalSoftSkillsModule, softSkillsLessons } from '@/data/modules/professional-soft-skills';
import { createModuleMetadata } from '@/utils/seo';
import { Metadata } from 'next';

export const metadata: Metadata = createModuleMetadata(
  professionalSoftSkillsModule.title,
  professionalSoftSkillsModule.description,
  ['kỹ năng mềm', 'giao tiếp', 'lãnh đạo', 'thuyết trình', 'đàm phán', 'quản lý thời gian'],
  professionalSoftSkillsModule.id,
);

export default function ProfessionalSoftSkillsPage() {
  return <ModulePageTemplate moduleData={professionalSoftSkillsModule} lessons={softSkillsLessons} />;
}
