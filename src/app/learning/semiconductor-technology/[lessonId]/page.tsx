import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { semiconductorLessons } from '@/data/modules/semiconductor-technology';
import { BaseLessonData } from '@/types/lesson-base';
import { notFound } from 'next/navigation';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(semiconductorLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, semiconductorLessons, 'semiconductor-technology');
}

// Page component with standardized config
export default async function SemiconductorLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'semiconductor-technology',
    moduleTitle: 'Công nghệ Bán dẫn & Thiết kế Vi mạch',
    modulePath: '/learning/semiconductor-technology',
    lessons: semiconductorLessons,
    primaryColor: 'blue',
    secondaryColor: 'purple',
    gradientColors: 'from-slate-900 via-blue-900 to-purple-900',
  };
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
