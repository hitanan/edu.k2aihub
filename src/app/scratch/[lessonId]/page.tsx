import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig } from '@/components/learning/LessonPageTemplate';
import { scratchLessons } from '@/data/modules/scratch';
import { BaseLessonData } from '@/types/lesson-base';

export async function generateStaticParams() {
  return generateLessonStaticParams(scratchLessons);
}

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, scratchLessons, 'scratch');
}

export default async function ScratchLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'scratch',
    moduleTitle: 'Scratch Programming',
    modulePath: '/scratch',
    lessons: scratchLessons,
    primaryColor: 'orange',
    secondaryColor: 'red',
    gradientColors: 'from-orange-500 to-red-500',
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}