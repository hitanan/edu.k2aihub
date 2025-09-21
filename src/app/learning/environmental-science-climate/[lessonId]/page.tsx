import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { environmentalScienceClimateLessons } from '@/data/modules/environmental-science-climate';
import { BaseLessonData } from '@/types/lesson-base';

import { notFound } from 'next/navigation';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(environmentalScienceClimateLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, environmentalScienceClimateLessons, 'environmental-science-climate');
}

// Page component with standardized config
export default async function EnvironmentalScienceClimateLessonPage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const { lessonId } = await params;

  if (!lessonId) {
    notFound();
  }

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'environmental-science-climate',
    moduleTitle: 'Environmental Science & Climate Change',
    lessons: environmentalScienceClimateLessons,
    primaryColor: 'green',
    secondaryColor: 'emerald',
    modulePath: '/learning/environmental-science-climate',
    gradientColors: 'from-slate-900 via-green-900 to-emerald-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
