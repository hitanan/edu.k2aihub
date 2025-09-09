import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { sustainableAgricultureLessons } from '@/data/sustainable-agriculture';

import { BaseLessonData } from '@/types/lesson-base';
import { notFound } from 'next/navigation';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(sustainableAgricultureLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, sustainableAgricultureLessons, 'sustainable-agriculture');
}

// Page component with standardized config
export default async function SustainableAgricultureLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'sustainable-agriculture',
    moduleTitle: 'Nông nghiệp Bền vững và AgriTech',
    modulePath: '/learning/sustainable-agriculture',
    lessons: sustainableAgricultureLessons,
    primaryColor: 'lime',
    secondaryColor: 'green',
    gradientColors: 'from-slate-900 via-lime-900 to-slate-900',
  };
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
