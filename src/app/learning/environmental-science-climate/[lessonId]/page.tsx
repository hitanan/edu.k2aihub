import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig } from '@/components/learning/LessonPageTemplate'
import { environmentalClimateLessons, EnvironmentalClimateLessonType } from '@/data/environmental-science-climate'
import { PageProps } from '@/types';
import { Leaf } from 'lucide-react';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(environmentalClimateLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  return generateLessonMetadata(resolvedParams.lessonId, environmentalClimateLessons, 'environmental-science-climate');
}

// Page component with standardized config
export default async function EnvironmentalScienceClimateLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<EnvironmentalClimateLessonType> = {
    moduleName: 'environmental-science-climate',
    moduleTitle: 'Environmental Science & Climate Change',
    modulePath: '/learning/environmental-science-climate',
    lessons: environmentalClimateLessons,
    primaryColor: 'green', // Primary theme color
    secondaryColor: 'emerald', // Secondary theme color
    gradientColors: 'from-slate-900 via-green-900 to-emerald-900', // Background gradient
    getFieldIcon: () => <Leaf className="w-5 h-5" />, // Optional
    getFieldValue: (lesson) => lesson.climateTopics?.join(', ') || '', // Optional
  }
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
