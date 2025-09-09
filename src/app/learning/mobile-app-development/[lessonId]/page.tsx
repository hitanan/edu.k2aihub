import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { mobileAppDevelopmentLessons } from '@/data/mobile-app-development';
import { BaseLessonData } from '@/types/lesson-base';
import { notFound } from 'next/navigation';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(mobileAppDevelopmentLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, mobileAppDevelopmentLessons, 'mobile-app-development');
}

// Page component with mobile app development-specific configuration
export default async function MobileAppLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'mobile-app-development',
    moduleTitle: 'Mobile App Development',
    modulePath: '/learning/mobile-app-development',
    lessons: mobileAppDevelopmentLessons,
    primaryColor: 'purple',
    secondaryColor: 'pink',
    gradientColors: 'from-slate-900 via-purple-900 to-pink-900',
  };

  const { lessonId } = await params;

  if (!lessonId) {
    return notFound();
  }

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
