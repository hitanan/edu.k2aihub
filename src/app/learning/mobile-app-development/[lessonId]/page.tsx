import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { mobileAppDevelopmentModule } from '@/data/modules/mobile-app-development';
import { MobileAppDevelopmentLesson } from '@/types/lesson-base';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface LessonPageProps {
  params: {
    lessonId: string;
  };
}

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(mobileAppDevelopmentModule.lessons || []);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: LessonPageProps): Promise<Metadata> {
  return generateLessonMetadata(params.lessonId, mobileAppDevelopmentModule.lessons || [], mobileAppDevelopmentModule.id);
}

const config: LessonPageConfig<MobileAppDevelopmentLesson> = {
  moduleName: 'mobile-app-development',
  moduleTitle: 'Phát triển Ứng dụng Di động',
  modulePath: '/learning/mobile-app-development',
  lessons: mobileAppDevelopmentModule.lessons || [],
  primaryColor: 'cyan',
  secondaryColor: 'sky',
  gradientColors: 'from-gray-900 via-cyan-900 to-gray-900',
};

// Page component with mobile app development-specific configuration
export default async function MobileAppDevelopmentLessonPage({ params }: LessonPageProps) {
  const { lessonId } = params;
  if (!lessonId) {
    notFound();
  }

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
