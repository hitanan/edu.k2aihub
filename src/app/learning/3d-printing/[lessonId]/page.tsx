import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { BaseLessonData } from '@/types/lesson-base';
import { threeDPrintingModuleData } from '@/data/modules/3d-printing';

const threeDPrintingLessons = threeDPrintingModuleData.lessons || [];

import { notFound } from 'next/navigation';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(threeDPrintingLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return { title: 'Lesson not found' };
  }
  return generateLessonMetadata(lessonId, threeDPrintingLessons, '3d-printing');
}

// Page component with standardized config
export default async function ThreeDPrintingLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: '3d-printing',
    moduleTitle: 'Làm chủ Công nghệ In 3D',
    modulePath: '/learning/3d-printing',
    lessons: threeDPrintingLessons,
    primaryColor: 'orange',
    secondaryColor: 'amber',
    gradientColors: 'from-slate-900 via-orange-900 to-slate-900',
  };
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
