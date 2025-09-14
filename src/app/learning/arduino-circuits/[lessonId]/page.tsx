import { LessonPageTemplate, generateLessonMetadata, LessonPageConfig } from '@/components/learning/LessonPageTemplate';
import { BaseLessonData } from '@/types/lesson-base';
import { arduinoCircuitsModuleData, arduinoCircuitsLessons } from '@/data/modules/arduino-circuits';
import { PageProps } from '@/types';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Generate static params for all lessons
export function generateStaticParams() {
  return (arduinoCircuitsLessons || []).map((lesson) => ({
    lessonId: lesson.id,
  }));
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, arduinoCircuitsLessons, 'arduino-circuits');
}

// Page component with standardized config
export default async function ArduinoLessonPage({ params }: PageProps) {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: arduinoCircuitsModuleData.id,
    moduleTitle: arduinoCircuitsModuleData.title,
    modulePath: arduinoCircuitsModuleData.href || '',
    lessons: arduinoCircuitsLessons,
    primaryColor: 'green',
    secondaryColor: 'teal',
    gradientColors: 'from-slate-900 via-green-900 to-slate-900',
  };
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
