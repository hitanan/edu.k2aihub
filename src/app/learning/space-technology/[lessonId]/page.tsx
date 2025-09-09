import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { spaceTechnologyLessons, type SpaceTechnologyLesson } from '@/data/space-technology';

import { notFound } from 'next/navigation';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(spaceTechnologyLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, spaceTechnologyLessons, 'space-technology');
}

// Page component with standardized config
export default async function ModuleLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }
  const config: LessonPageConfig<SpaceTechnologyLesson> = {
    moduleName: 'space-technology',
    moduleTitle: 'Công Nghệ Vũ Trụ',
    modulePath: '/learning/space-technology',
    lessons: spaceTechnologyLessons,
    primaryColor: 'indigo',
    secondaryColor: 'purple',
    gradientColors: 'from-slate-900 via-indigo-900 to-slate-900',
    getFieldIcon: () => <span className="w-5 h-5">🚀</span>,
    getFieldValue: (lesson) => lesson.difficulty,
  };
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
