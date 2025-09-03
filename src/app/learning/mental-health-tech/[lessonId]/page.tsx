import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { mentalHealthLessons, MentalHealthLessonType } from '@/data/mental-health-tech';
import { PageProps } from '@/types';
import { BrainCircuit } from 'lucide-react';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(mentalHealthLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, mentalHealthLessons, 'mental-health-tech');
}

// Page component with standardized config
export default async function MentalHealthTechLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<MentalHealthLessonType> = {
    moduleName: 'mental-health-tech',
    moduleTitle: 'Mental Health & Technology',
    modulePath: '/learning/mental-health-tech',
    lessons: mentalHealthLessons,
    primaryColor: 'emerald',
    secondaryColor: 'teal',
    gradientColors: 'from-slate-900 via-emerald-900 to-slate-900',
    getFieldIcon: () => <BrainCircuit className="w-5 h-5" />,
    getFieldValue: (lesson) => lesson.wellnessImpact || 'N/A',
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
