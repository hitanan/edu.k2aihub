import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { professionalSkillsModule, softSkillsLessons } from '@/data/modules/professional-soft-skills';
import { createModuleMetadata } from '@/utils/seo';
import { Metadata } from 'next';

export const metadata: Metadata = createModuleMetadata(
  professionalSkillsModule.title,
  professionalSkillsModule.description,
  ['kỹ năng mềm', 'giao tiếp', 'lãnh đạo', 'thuyết trình', 'đàm phán', 'quản lý thời gian'],
  professionalSkillsModule.id,
);

export default function ProfessionalSoftSkillsPage() {
  return <ModulePageTemplate moduleData={professionalSkillsModule} lessons={softSkillsLessons} />;
}
