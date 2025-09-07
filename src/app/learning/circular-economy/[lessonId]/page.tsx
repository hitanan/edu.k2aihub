import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { circularEconomyLessons } from '@/data/circular-economy';
import { PageProps } from '@/types';
import { K2Module } from '@/data/moduleNavigation';
import { notFound } from 'next/navigation';
import { BaseLessonData } from '@/types/lesson-base';

const MODULE_ID = K2Module.CircularEconomy;

export async function generateStaticParams() {
  return generateLessonStaticParams(circularEconomyLessons);
}

export async function generateMetadata({ params }: PageProps) {
  const lessonId = params.lessonId;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, circularEconomyLessons, MODULE_ID);
}

export default function CircularEconomyLessonPage({ params }: PageProps) {
  const lessonId = params.lessonId;
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
