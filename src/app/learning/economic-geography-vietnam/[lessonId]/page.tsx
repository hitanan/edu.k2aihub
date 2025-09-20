import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { economicGeographyVietnamModuleData } from '@/data/modules/economic-geography-vietnam';
import { PageProps } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

const lessons = economicGeographyVietnamModuleData.lessons || [];

export async function generateStaticParams() {
  return generateLessonStaticParams(lessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, lessons, economicGeographyVietnamModuleData.id);
}

export default async function LessonPage({ params }: PageProps) {
  const { lessonId } = await params;

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'economic-geography-vietnam',
    moduleTitle: 'Địa Lý Kinh Tế và Du Lịch Việt Nam',
    modulePath: '/learning/economic-geography-vietnam',
    lessons: lessons,
    primaryColor: 'cyan',
    secondaryColor: 'blue',
    gradientColors: 'from-cyan-900 via-blue-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
