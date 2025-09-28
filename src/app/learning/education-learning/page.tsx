import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { educationLearningLessons } from '@/data/modules/education-learning';
import { educationLearningModule } from '@/data/modules/education-learning-module';
import { createModuleMetadata } from '@/utils/seo';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  educationLearningModule.title,
  educationLearningModule.description,
  ['học tập', 'giáo dục', 'ai', 'K2AI'],
  educationLearningModule.id,
);

export default function EducationLearningPage() {
  return <ModulePageTemplate moduleData={educationLearningModule} lessons={educationLearningLessons} />;
}
