import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { appliedEnglishModuleData } from '@/data/modules/applied-english';
import { PageProps } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

const lessons = appliedEnglishModuleData.lessons || [];

export async function generateStaticParams() {
  return generateLessonStaticParams(lessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, lessons, appliedEnglishModuleData.id);
}

export default async function LessonPage({ params }: PageProps) {
  const { lessonId } = await params;

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'applied-english',
    moduleTitle: 'Tiếng Anh Ứng Dụng',
    modulePath: '/learning/applied-english',
    lessons: lessons,
    primaryColor: 'pink',
    secondaryColor: 'rose',
    gradientColors: 'from-pink-900 via-rose-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
