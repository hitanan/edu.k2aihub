import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { ethicalMarketingLessons, EthicalMarketingLessonType } from '@/data/ethical-marketing-purpose';
import { PageProps } from '@/types';
import { Lightbulb } from 'lucide-react';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(ethicalMarketingLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, ethicalMarketingLessons);
}

// Page component with standardized config
export default async function EthicalMarketingLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<EthicalMarketingLessonType> = {
    moduleName: 'ethical-marketing-purpose',
    moduleTitle: 'Ethical Marketing & Purpose-Driven Brands',
    modulePath: '/learning/ethical-marketing-purpose',
    lessons: ethicalMarketingLessons,
    primaryColor: 'green', // Primary theme color
    secondaryColor: 'emerald', // Secondary theme color
    gradientColors: 'from-slate-900 via-green-900 to-emerald-900', // Background gradient
    getFieldIcon: () => <Lightbulb className="w-5 h-5" />, // Optional
    getFieldValue: (lesson) => lesson.ethicalPrinciples?.join(', ') || '', // Optional
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
