import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { physicsInLifeModuleData } from '@/data/modules/physics-in-life';
import { PageProps } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

const lessons = physicsInLifeModuleData.lessons || [];

export async function generateStaticParams() {
  return generateLessonStaticParams(lessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, lessons, physicsInLifeModuleData.id);
}

export default async function LessonPage({ params }: PageProps) {
  const { lessonId } = await params;

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'physics-in-life',
    moduleTitle: 'Vật Lý Trong Đời Sống',
    modulePath: '/learning/physics-in-life',
    lessons: lessons,
    primaryColor: 'purple',
    secondaryColor: 'indigo',
    gradientColors: 'from-purple-900 via-indigo-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
