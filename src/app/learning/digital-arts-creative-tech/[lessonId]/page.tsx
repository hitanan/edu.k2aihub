import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
} from '@/components/learning/LessonPageTemplate';
import { DigitalArtsLessons } from '@/data/digital-arts-creative-tech';
import { PageProps } from '@/types';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { createTitle } from '@/utils/seo';

// Generate static params for all lessons
export function generateStaticParams() {
  return generateLessonStaticParams(DigitalArtsLessons);
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
  return generateLessonMetadata(lessonId, DigitalArtsLessons, 'digital-arts-creative-tech');
}

// Page component with standardized config
export default function DigitalArtsLessonPage({ params }: PageProps) {
  const lessonId = params.lessonId;
  if (!lessonId) {
    notFound();
  }

  const config = {
    moduleName: 'digital-arts-creative-tech',
    moduleTitle: 'Digital Arts & Creative Tech',
    lessons: DigitalArtsLessons,
    primaryColor: 'purple',
    secondaryColor: 'pink',
    modulePath: '/learning/digital-arts-creative-tech',
    gradientColors: 'from-purple-900 to-pink-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
