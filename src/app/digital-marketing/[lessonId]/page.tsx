import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig } from '@/components/learning/LessonPageTemplate';
import { lessons } from '@/data/modules/digital-marketing';
import { BaseLessonData } from '@/types/lesson-base';

export async function generateStaticParams() {
  return generateLessonStaticParams(lessons);
}

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, lessons, 'digital-marketing');
}

export default async function DigitalMarketingLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'digital-marketing',
    moduleTitle: 'Digital Marketing & Creator Economy',
    modulePath: '/digital-marketing',
    lessons: lessons,
    primaryColor: 'purple',
    secondaryColor: 'pink',
    gradientColors: 'from-purple-500 to-pink-500',
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}