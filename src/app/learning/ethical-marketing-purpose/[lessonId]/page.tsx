import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
} from '@/components/learning/LessonPageTemplate';
import { ethicalMarketingPurposeModule } from '@/data/modules/ethical-marketing-purpose';

import { LessonPageConfig } from '@/components/learning/LessonPageTemplate';
import { BaseLessonData } from '@/types/lesson-base';
import { notFound } from 'next/navigation';

const lessons = ethicalMarketingPurposeModule.lessons || [];

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(lessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }
  return generateLessonMetadata(lessonId, lessons, 'ethical-marketing-purpose');
}

// Page component with standardized config
export default async function EthicalMarketingLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'ethical-marketing-purpose',
    moduleTitle: 'Ethical Marketing & Purpose-Driven Brands',
    modulePath: '/learning/ethical-marketing-purpose',
    lessons: lessons,
    primaryColor: 'green',
    secondaryColor: 'emerald',
    gradientColors: 'from-slate-900 via-green-900 to-emerald-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
