import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { shortVideoMasteryLessons } from '@/data/short-video-mastery';
import { ShortVideoMasteryLessonType } from '@/data/short-video-mastery';
import { notFound } from 'next/navigation';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(shortVideoMasteryLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, shortVideoMasteryLessons, 'short-video-mastery');
}

// Page component with standardized config
export default async function ShortVideoMasteryLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }
  const config: LessonPageConfig<ShortVideoMasteryLessonType> = {
    moduleName: 'short-video-mastery',
    moduleTitle: 'Short-form Video Mastery',
    modulePath: '/learning/short-video-mastery',
    lessons: shortVideoMasteryLessons,
    primaryColor: 'orange',
    secondaryColor: 'yellow',
    gradientColors: 'from-slate-900 via-orange-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
