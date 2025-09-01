import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
  BaseLessonData,
} from '@/components/learning/LessonPageTemplate';
import { softSkillsLessons } from '@/data/soft-skills';
import { PageProps } from '@/types';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(softSkillsLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, softSkillsLessons, 'soft-skills');
}

// Page component with standardized config
export default async function SoftSkillsLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'soft-skills',
    moduleTitle: 'Kỹ năng mềm',
    modulePath: '/learning/soft-skills',
    lessons: softSkillsLessons,
    primaryColor: 'blue',
    secondaryColor: 'sky',
    gradientColors: 'from-slate-900 via-blue-900 to-slate-900',
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
