import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { futureThinkingLessons, FutureThinkingLessonType } from '@/data/future-thinking-scenario-planning';
import { PageProps } from '@/types';
import { Metadata } from 'next';
import { createTitle } from '@/utils/seo';

// Generate static params for all lessons
export function generateStaticParams() {
  return generateLessonStaticParams(futureThinkingLessons);
}

// Generate metadata for each lesson
export function generateMetadata({ params }: PageProps): Metadata {
  const { lessonId } = params;
  if (!lessonId) {
    return {
      title: createTitle('Bài học không tồn tại'),
      description: 'Bài học này không tồn tại hoặc đã bị di chuyển.',
    };
  }
  return generateLessonMetadata(lessonId, futureThinkingLessons, 'future-thinking-scenario-planning');
}

// Page component with standardized config
export default function FutureThinkingLessonPage({ params }: PageProps) {
  const { lessonId } = params;
  const config: LessonPageConfig<FutureThinkingLessonType> = {
    moduleName: 'future-thinking-scenario-planning',
    moduleTitle: 'Tư Duy Tương Lai và Kế Hoạch Kịch Bản',
    modulePath: '/learning/future-thinking-scenario-planning',
    lessons: futureThinkingLessons,
    primaryColor: 'purple',
    secondaryColor: 'pink',
    gradientColors: 'from-slate-900 via-purple-900 to-slate-900',
  };
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
