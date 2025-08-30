import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig } from '@/components/learning/LessonPageTemplate'
import { futureThinkingLessons, FutureThinkingLessonType } from '@/data/future-thinking-scenario-planning'
import { PageProps } from '@/types';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(futureThinkingLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, futureThinkingLessons, 'future-thinking-scenario-planning');
}

// Page component with standardized config
export default async function FutureThinkingLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<FutureThinkingLessonType> = {
    moduleName: 'future-thinking-scenario-planning',
    moduleTitle: 'Tư Duy Tương Lai và Kế Hoạch Kịch Bản',
    modulePath: '/learning/future-thinking-scenario-planning',
    lessons: futureThinkingLessons,
    primaryColor: 'purple',
    secondaryColor: 'pink', 
    gradientColors: 'from-slate-900 via-purple-900 to-slate-900',
  }
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}