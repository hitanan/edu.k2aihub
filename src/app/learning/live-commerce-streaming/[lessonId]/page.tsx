import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { liveCommerceLessons, LiveCommerceLessonType } from '@/data/live-commerce-streaming';
import { PageProps } from '@/types';
import { Video } from 'lucide-react';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(liveCommerceLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const lessonId = params.lessonId;
  return generateLessonMetadata(lessonId, liveCommerceLessons, 'live-commerce-streaming');
}

// Page component with standardized config
export default function LiveCommerceStreamingLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<LiveCommerceLessonType> = {
    moduleName: 'live-commerce-streaming',
    moduleTitle: 'Live Commerce & Streaming',
    modulePath: '/learning/live-commerce-streaming',
    lessons: liveCommerceLessons,
    primaryColor: 'orange', // Primary theme color
    secondaryColor: 'red', // Secondary theme color
    gradientColors: 'from-slate-900 via-orange-900 to-red-900', // Background gradient
    getFieldIcon: () => <Video className="w-5 h-5" />, // Optional
    getFieldValue: (lesson) => lesson.streamingPlatforms?.join(', ') || '', // Optional
  };
  const lessonId = params.lessonId;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
