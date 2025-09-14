import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { softSkillsLessons } from '@/data/modules/soft-skills';
import { BaseLessonData } from '@/types/lesson-base';
import { notFound } from 'next/navigation';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(softSkillsLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, softSkillsLessons, 'soft-skills');
}

// Page component with standardized config
export default async function SoftSkillsLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'soft-skills',
    moduleTitle: 'Kỹ năng mềm',
    modulePath: '/learning/soft-skills',
    lessons: softSkillsLessons,
    primaryColor: 'blue',
    secondaryColor: 'sky',
    gradientColors: 'from-slate-900 via-blue-900 to-slate-900',
  };
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
