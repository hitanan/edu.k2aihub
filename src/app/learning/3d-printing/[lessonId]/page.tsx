import { LessonPageTemplate, generateLessonMetadata, LessonPageConfig } from '@/components/learning/LessonPageTemplate';
import { BaseLessonData } from '@/types/lesson-base';
import { threeDPrintingModuleData, threeDPrintingLessons } from '@/data/modules/3d-printing';
import { PageProps } from '@/types';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Generate static params for all lessons
export function generateStaticParams() {
  return (threeDPrintingLessons || []).map((lesson) => ({
    lessonId: lesson.id,
  }));
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, threeDPrintingLessons, '3d-printing');
}

// Page component with standardized config
export default async function ThreeDPrintingLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: threeDPrintingModuleData.id,
    moduleTitle: threeDPrintingModuleData.title,
    modulePath: threeDPrintingModuleData.href || '',
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
