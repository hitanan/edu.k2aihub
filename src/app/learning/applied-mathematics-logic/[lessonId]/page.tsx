import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { appliedMathematicsLogicModuleData } from '@/data/modules/applied-mathematics-logic';
import { PageProps } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

const lessons = appliedMathematicsLogicModuleData.lessons || [];

export async function generateStaticParams() {
  return generateLessonStaticParams(lessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, lessons, appliedMathematicsLogicModuleData.id);
}

export default async function LessonPage({ params }: PageProps) {
  const { lessonId } = await params;

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'applied-mathematics-logic',
    moduleTitle: 'Toán Ứng Dụng và Logic',
    modulePath: '/learning/applied-mathematics-logic',
    lessons: lessons,
    primaryColor: 'blue',
    secondaryColor: 'sky',
    gradientColors: 'from-blue-900 via-sky-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
