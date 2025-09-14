import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { mobileAppDevelopmentLessons } from '@/data/modules/mobile-app-development';
import { MobileAppDevelopmentLesson } from '@/types/lesson-base';
import { Metadata } from 'next';

// Generate static params for all lessons
export function generateStaticParams() {
  return generateLessonStaticParams(mobileAppDevelopmentLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({
  params,
}: {
  params: { lessonId: string };
}): Promise<Metadata> {
  const { lessonId } = params;
  return generateLessonMetadata(lessonId, mobileAppDevelopmentLessons, 'mobile-app-development');
}

// Page component with standardized config
export default function MobileAppDevelopmentLessonPage({
  params,
}: {
  params: { lessonId: string };
}) {
  const config: LessonPageConfig<MobileAppDevelopmentLesson> = {
    moduleName: 'mobile-app-development',
    moduleTitle: 'Phát triển Ứng dụng Di động',
    modulePath: '/learning/mobile-app-development',
    lessons: mobileAppDevelopmentLessons,
    primaryColor: 'cyan',
    secondaryColor: 'sky',
    gradientColors: 'from-blue-900 via-sky-900 to-blue-900',
  };
  const { lessonId } = params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
