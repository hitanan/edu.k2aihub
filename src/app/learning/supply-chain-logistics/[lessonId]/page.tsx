import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { supplyChainLogisticsLessons } from '@/data/supply-chain-logistics';
import type { SupplyChainLogisticsLessonType } from '@/data/supply-chain-logistics';
import { PageProps } from '@/types';
import { notFound } from 'next/navigation';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(supplyChainLogisticsLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, supplyChainLogisticsLessons, 'supply-chain-logistics');
}

// Page component with standardized config
export default async function SupplyChainLogisticsLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<SupplyChainLogisticsLessonType> = {
    moduleName: 'supply-chain-logistics',
    moduleTitle: 'Supply Chain & Logistics',
    modulePath: '/learning/supply-chain-logistics',
    lessons: supplyChainLogisticsLessons,
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
