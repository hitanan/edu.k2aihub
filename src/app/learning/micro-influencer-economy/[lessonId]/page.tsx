import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { microInfluencerEconomyLessons, MicroInfluencerLessonType } from '@/data/micro-influencer-economy';
import { PageProps } from '@/types';
import { Users } from 'lucide-react';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(microInfluencerEconomyLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, microInfluencerEconomyLessons, 'micro-influencer-economy');
}

// Page component with standardized config
export default async function MicroInfluencerEconomyLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<MicroInfluencerLessonType> = {
    moduleName: 'micro-influencer-economy',
    moduleTitle: 'Micro-Influencer Economy',
    modulePath: '/learning/micro-influencer-economy',
    lessons: microInfluencerEconomyLessons,
    primaryColor: 'pink', // Primary theme color
    secondaryColor: 'rose', // Secondary theme color
    gradientColors: 'from-slate-900 via-pink-900 to-rose-900', // Background gradient
    getFieldIcon: () => <Users className="w-5 h-5" />, // Optional
    getFieldValue: () => '', // Optional
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
