import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { artHistoryAppreciationModuleData } from '@/data/modules/art-history-appreciation';
import { BaseLessonData, PageProps } from '@/types';

const lessons = artHistoryAppreciationModuleData.lessons || [];

export async function generateStaticParams() {
  return generateLessonStaticParams(lessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, lessons, 'art-history-appreciation');
}

export default async function ModuleLessonPage({ params }: PageProps) {
  const { lessonId } = await params;
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'art-history-appreciation',
    moduleTitle: 'Nghệ Thuật và Lịch Sử Nghệ Thuật',
    modulePath: '/learning/art-history-appreciation',
    lessons: lessons,
    primaryColor: 'purple',
    secondaryColor: 'pink',
    gradientColors: 'from-purple-400 to-pink-500',
  };
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
