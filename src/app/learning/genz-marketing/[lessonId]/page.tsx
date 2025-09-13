import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { genZMarketingLessons } from '@/data/modules/genz-marketing';
import type { GenZMarketingLesson } from '@/types/lesson-base';

import { Metadata } from 'next';
import { createTitle } from '@/utils/seo';

// Generate static params for all lessons
export function generateStaticParams() {
  return generateLessonStaticParams(genZMarketingLessons);
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
  return generateLessonMetadata(lessonId, genZMarketingLessons, 'genz-marketing');
}

// Page component with standardized config
export default async function GenZMarketingLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;

  const config: LessonPageConfig<GenZMarketingLesson> = {
    moduleName: 'genz-marketing',
    moduleTitle: 'Gen Z Marketing & Authentic Branding',
    modulePath: '/learning/genz-marketing',
    lessons: genZMarketingLessons,
    primaryColor: 'cyan',
    secondaryColor: 'blue',
    gradientColors: 'from-slate-900 via-cyan-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
