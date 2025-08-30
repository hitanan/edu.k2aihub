import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { liveCommerceStreamingLessons, LiveCommerceLessonType } from '@/data/live-commerce-streaming';
import { PageProps } from '@/types';
import { Video } from 'lucide-react';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(liveCommerceStreamingLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, liveCommerceStreamingLessons, 'live-commerce-streaming');
}

// Page component with standardized config
export default async function LiveCommerceStreamingLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<LiveCommerceLessonType> = {
    moduleName: 'live-commerce-streaming',
    moduleTitle: 'Live Commerce & Streaming',
    modulePath: '/learning/live-commerce-streaming',
    lessons: liveCommerceStreamingLessons,
    primaryColor: 'orange', // Primary theme color
    secondaryColor: 'red', // Secondary theme color
    gradientColors: 'from-slate-900 via-orange-900 to-red-900', // Background gradient
    getFieldIcon: () => <Video className="w-5 h-5" />, // Optional
    getFieldValue: (lesson) => lesson.streamingPlatforms?.join(', ') || '', // Optional
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
