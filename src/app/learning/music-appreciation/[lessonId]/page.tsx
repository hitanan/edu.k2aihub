import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { musicAppreciationModuleData } from '@/data/modules/music-appreciation';
import { BaseLessonData, PageProps } from '@/types';

const lessons = musicAppreciationModuleData.lessons || [];

export async function generateStaticParams() {
  return generateLessonStaticParams(lessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, lessons, 'music-appreciation');
}

export default async function ModuleLessonPage({ params }: PageProps) {
  const { lessonId } = await params;
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'music-appreciation',
    moduleTitle: 'Âm Nhạc và Cảm Thụ Âm Nhạc',
    modulePath: '/learning/music-appreciation',
    lessons: lessons,
    primaryColor: 'red',
    secondaryColor: 'yellow',
    gradientColors: 'from-red-400 to-yellow-500',
  };
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
