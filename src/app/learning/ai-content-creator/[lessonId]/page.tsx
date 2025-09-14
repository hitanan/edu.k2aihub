import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { aiContentCreatorLessons } from '@/data/modules/ai-content-creator';

import { BaseLessonData } from '@/types/lesson-base';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(aiContentCreatorLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {
      title: 'Lesson not found',
      description: 'The requested lesson could not be found.',
    };
  }
  return generateLessonMetadata(lessonId, aiContentCreatorLessons, 'ai-content-creator');
}

// Page component with standardized config
export default async function AIContentCreatorLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'ai-content-creator',
    moduleTitle: 'AI Content Creator Academy',
    modulePath: '/learning/ai-content-creator',
    lessons: aiContentCreatorLessons,
    primaryColor: 'purple',
    secondaryColor: 'pink',
    gradientColors: 'from-slate-900 via-purple-900 to-slate-900',
  };

  const { lessonId } = await params;
  if (!lessonId) {
    return null;
  }
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
