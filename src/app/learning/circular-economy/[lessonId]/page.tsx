import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { circularEconomyLessons } from '@/data/circular-economy';

import { K2Module } from '@/data/k2-modules';
import { notFound } from 'next/navigation';
import { BaseLessonData } from '@/types/lesson-base';

const MODULE_ID = K2Module.CircularEconomy;

export async function generateStaticParams() {
  return generateLessonStaticParams(circularEconomyLessons);
}

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, circularEconomyLessons, MODULE_ID);
}

export default async function CircularEconomyLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }

  const config: LessonPageConfig<BaseLessonData> = {
    lessons: circularEconomyLessons,
    moduleName: 'circular-economy',
    moduleTitle: 'Kinh tế Tuần hoàn',
    modulePath: '/learning/circular-economy',
    primaryColor: 'green',
    secondaryColor: 'teal',
    gradientColors: 'from-green-500 to-teal-500',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
