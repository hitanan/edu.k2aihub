import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { criticalThinkingProblemSolvingModuleData } from '@/data/modules/critical-thinking-problem-solving';
import { PageProps } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

const lessons = criticalThinkingProblemSolvingModuleData.lessons || [];

export async function generateStaticParams() {
  return generateLessonStaticParams(lessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, lessons, criticalThinkingProblemSolvingModuleData.id);
}

export default async function LessonPage({ params }: PageProps) {
  const { lessonId } = await params;

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'critical-thinking-problem-solving',
    moduleTitle: 'Tư Duy Phản Biện và Giải Quyết Vấn Đề',
    modulePath: '/learning/critical-thinking-problem-solving',
    lessons: lessons,
    primaryColor: 'purple',
    secondaryColor: 'indigo',
    gradientColors: 'from-purple-900 via-indigo-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
