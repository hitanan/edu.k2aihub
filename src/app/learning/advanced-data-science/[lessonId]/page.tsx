import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { advancedDataScienceLessons } from '@/data/modules/advanced-data-science';

import { BaseLessonData } from '@/types/lesson-base';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(advancedDataScienceLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = (await params) ?? '';
  return generateLessonMetadata(lessonId, advancedDataScienceLessons, 'advanced-data-science');
}

export default async function AdvancedDataScienceLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = (await params) ?? '';

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'advanced-data-science',
    moduleTitle: 'Advanced Data Science',
    modulePath: '/learning/advanced-data-science',
    lessons: advancedDataScienceLessons,
    primaryColor: 'blue',
    secondaryColor: 'cyan',
    gradientColors: 'from-slate-900 via-blue-900 to-slate-900',
  };

  return <LessonPageTemplate<BaseLessonData> lessonId={lessonId} config={config} />;
}
