import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { introductionToPhilosophyModuleData } from '@/data/modules/introduction-to-philosophy';
import { BaseLessonData, PageProps } from '@/types';

const lessons = introductionToPhilosophyModuleData.lessons || [];

export async function generateStaticParams() {
  return generateLessonStaticParams(lessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, lessons, 'introduction-to-philosophy');
}

export default async function ModuleLessonPage({ params }: PageProps) {
  const { lessonId } = await params;
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'introduction-to-philosophy',
    moduleTitle: 'Nhập Môn Triết Học',
    modulePath: '/learning/introduction-to-philosophy',
    lessons: lessons,
    primaryColor: 'gray',
    secondaryColor: 'gray',
    gradientColors: 'from-gray-400 to-gray-600',
  };
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
