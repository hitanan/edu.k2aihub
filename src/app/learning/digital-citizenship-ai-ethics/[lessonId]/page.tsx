import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { digitalCitizenshipLessons, DigitalCitizenshipLessonType } from '@/data/digital-citizenship-ai-ethics';
import { PageProps } from '@/types';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { createTitle } from '@/utils/seo';

// Generate static params for all lessons
export function generateStaticParams() {
  return generateLessonStaticParams(digitalCitizenshipLessons);
}

// Generate metadata for each lesson
export function generateMetadata({ params }: PageProps): Metadata {
  const lessonId = params.lessonId;
  if (!lessonId) {
    return {
      title: createTitle('Bài học không tồn tại'),
      description: 'Bài học này không tồn tại hoặc đã bị di chuyển.',
    };
  }
  return generateLessonMetadata(lessonId, digitalCitizenshipLessons, 'digital-citizenship-ai-ethics');
}

// Page component with standardized config
export default function DigitalCitizenshipLessonPage({ params }: PageProps) {
  const lessonId = params.lessonId;
  if (!lessonId) {
    notFound();
  }

  const config: LessonPageConfig<DigitalCitizenshipLessonType> = {
    moduleName: 'digital-citizenship-ai-ethics',
    moduleTitle: 'Công Dân Số và Đạo đức AI',
    lessons: digitalCitizenshipLessons,
    primaryColor: 'blue',
    secondaryColor: 'teal',
    modulePath: '/learning/digital-citizenship-ai-ethics',
    gradientColors: 'from-blue-900 to-teal-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
