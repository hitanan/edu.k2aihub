import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { governmentTechnologyLessons } from '@/data/modules/government-technology';
import { BaseLessonData } from '@/types/lesson-base';

export async function generateStaticParams() {
  return generateLessonStaticParams(governmentTechnologyLessons);
}

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, governmentTechnologyLessons, 'government-technology');
}

export default async function GovernmentTechnologyLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'government-technology',
    moduleTitle: 'Government Technology',
    modulePath: '/learning/government-technology',
    lessons: governmentTechnologyLessons,
    primaryColor: 'blue',
    secondaryColor: 'indigo',
    gradientColors: 'from-blue-900 via-indigo-900 to-blue-900',
  };

  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
