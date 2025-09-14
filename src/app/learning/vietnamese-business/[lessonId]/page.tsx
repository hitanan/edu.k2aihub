import { Building } from 'lucide-react';
import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { vietnameseBusinessLessons, VietnameseBusinessLesson } from '@/data/modules/vietnamese-business';

import { notFound } from 'next/navigation';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(vietnameseBusinessLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, vietnameseBusinessLessons, 'vietnamese-business');
}

// Page component with standardized config
export default async function VietnameseBusinessLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }

  const config: LessonPageConfig<VietnameseBusinessLesson> = {
    moduleName: 'vietnamese-business',
    moduleTitle: 'Phát triển Kinh doanh tại Việt Nam',
    modulePath: '/learning/vietnamese-business',
    lessons: vietnameseBusinessLessons,
    primaryColor: 'emerald',
    secondaryColor: 'green',
    gradientColors: 'from-slate-900 via-emerald-900 to-slate-900',
    getFieldIcon: () => <Building className="w-5 h-5" />,
    getFieldValue: (lesson) => lesson.title,
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
