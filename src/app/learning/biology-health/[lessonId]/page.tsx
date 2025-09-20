import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { biologyHealthModuleData } from '@/data/modules/biology-health';
import { PageProps } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

const lessons = biologyHealthModuleData.lessons || [];

export async function generateStaticParams() {
  return generateLessonStaticParams(lessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, lessons, biologyHealthModuleData.id);
}

export default async function LessonPage({ params }: PageProps) {
  const { lessonId } = await params;

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'biology-health',
    moduleTitle: 'Sinh Học và Sức Khỏe Con Người',
    modulePath: '/learning/biology-health',
    lessons: lessons,
    primaryColor: 'red',
    secondaryColor: 'orange',
    gradientColors: 'from-red-900 via-orange-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
