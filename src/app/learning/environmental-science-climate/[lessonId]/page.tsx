import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { environmentalClimateLessons } from '@/data/environmental-science-climate';
import { BaseLessonData } from '@/types/lesson-base';
import { PageProps } from '@/types';
import { notFound } from 'next/navigation';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(environmentalClimateLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const lessonId = params.lessonId;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, environmentalClimateLessons, 'environmental-science-climate');
}

// Page component with standardized config
export default function EnvironmentalScienceClimateLessonPage({ params }: PageProps) {
  const { lessonId } = params;

  if (!lessonId) {
    notFound();
  }

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'environmental-science-climate',
    moduleTitle: 'Environmental Science & Climate Change',
    lessons: environmentalClimateLessons,
    primaryColor: 'green',
    secondaryColor: 'emerald',
    modulePath: '/learning/environmental-science-climate',
    gradientColors: 'from-slate-900 via-green-900 to-emerald-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
