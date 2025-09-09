import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { socialListeningLessons } from '@/data/social-listening-crisis';
import type { SocialListeningLessonType } from '@/data/social-listening-crisis';
import { AlertTriangle } from 'lucide-react';
import { notFound } from 'next/navigation';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(socialListeningLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, socialListeningLessons, 'social-listening-crisis');
}

// Page component with standardized config
export default async function SocialListeningLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }
  const config: LessonPageConfig<SocialListeningLessonType> = {
    moduleName: 'social-listening-crisis',
    moduleTitle: 'Social Listening & Crisis Management',
    modulePath: '/learning/social-listening-crisis',
    lessons: socialListeningLessons,
    primaryColor: 'red', // Primary theme color
    secondaryColor: 'rose', // Secondary theme color
    gradientColors: 'from-slate-900 via-red-900 to-rose-900', // Background gradient
    getFieldIcon: () => <AlertTriangle className="w-5 h-5" />, // Optional
    getFieldValue: (lesson) => lesson.monitoringTools?.join(', ') || '', // Optional
  };
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
