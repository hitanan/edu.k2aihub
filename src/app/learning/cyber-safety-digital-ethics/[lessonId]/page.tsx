import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { cyberSafetyDigitalEthicsModuleData } from '@/data/modules/cyber-safety-digital-ethics';
import { BaseLessonData, PageProps } from '@/types';

const lessons = cyberSafetyDigitalEthicsModuleData.lessons || [];

export async function generateStaticParams() {
  return generateLessonStaticParams(lessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, lessons, 'cyber-safety-digital-ethics');
}

export default async function ModuleLessonPage({ params }: PageProps) {
  const { lessonId } = await params;
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'cyber-safety-digital-ethics',
    moduleTitle: 'An Toàn Mạng và Đạo Đức Số',
    modulePath: '/learning/cyber-safety-digital-ethics',
    lessons: lessons,
    primaryColor: 'gray',
    secondaryColor: 'slate',
    gradientColors: 'from-gray-500 to-slate-600',
  };
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
