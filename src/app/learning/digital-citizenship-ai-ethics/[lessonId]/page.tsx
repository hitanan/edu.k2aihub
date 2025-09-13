import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import {
  lessons as digitalCitizenshipLessons,
  DigitalCitizenshipLessonType,
} from '@/data/modules/digital-citizenship-ai-ethics';

import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { createTitle } from '@/utils/seo';

// Generate static params for all lessons
export function generateStaticParams() {
  return generateLessonStaticParams(digitalCitizenshipLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }): Promise<Metadata> {
  const { lessonId } = await params;
  if (!lessonId) {
    return {
      title: createTitle('Bài học không tồn tại'),
      description: 'Bài học này không tồn tại hoặc đã bị di chuyển.',
    };
  }
  return generateLessonMetadata(lessonId, digitalCitizenshipLessons, 'digital-citizenship-ai-ethics');
}

// Page component with standardized config
export default async function DigitalCitizenshipLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
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
