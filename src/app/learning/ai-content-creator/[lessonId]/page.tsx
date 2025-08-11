import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig } from '@/components/learning/LessonPageTemplate';
import { aiContentCreatorLessons, AIContentCreatorLessonType } from '@/data/ai-content-creator';
import { PageProps } from '@/types';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(aiContentCreatorLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, aiContentCreatorLessons);
}

// Page component with standardized config
export default async function AIContentCreatorLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<AIContentCreatorLessonType> = {
    moduleName: 'ai-content-creator',
    moduleTitle: 'AI Content Creator Academy',
    modulePath: '/learning/ai-content-creator',
    lessons: aiContentCreatorLessons,
    primaryColor: 'purple',
    secondaryColor: 'pink',
    gradientColors: 'from-slate-900 via-purple-900 to-slate-900',
  };
  
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
