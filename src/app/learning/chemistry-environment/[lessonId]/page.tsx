import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { chemistryEnvironmentModuleData } from '@/data/modules/chemistry-environment';
import { PageProps } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

const lessons = chemistryEnvironmentModuleData.lessons || [];

export async function generateStaticParams() {
  return generateLessonStaticParams(lessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, lessons, chemistryEnvironmentModuleData.id);
}

export default async function LessonPage({ params }: PageProps) {
  const { lessonId } = await params;

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'chemistry-environment',
    moduleTitle: 'Hóa Học và Môi Trường',
    modulePath: '/learning/chemistry-environment',
    lessons: lessons,
    primaryColor: 'green',
    secondaryColor: 'teal',
    gradientColors: 'from-green-900 via-teal-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
