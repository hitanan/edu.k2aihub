import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { modernVietnameseHistoryModuleData } from '@/data/modules/modern-vietnamese-history';
import { PageProps } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

const lessons = modernVietnameseHistoryModuleData.lessons || [];

export async function generateStaticParams() {
  return generateLessonStaticParams(lessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, lessons, modernVietnameseHistoryModuleData.id);
}

export default async function LessonPage({ params }: PageProps) {
  const { lessonId } = await params;

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'modern-vietnamese-history',
    moduleTitle: 'Lịch Sử Việt Nam Hiện Đại',
    modulePath: '/learning/modern-vietnamese-history',
    lessons: lessons,
    primaryColor: 'yellow',
    secondaryColor: 'red',
    gradientColors: 'from-yellow-900 via-red-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
