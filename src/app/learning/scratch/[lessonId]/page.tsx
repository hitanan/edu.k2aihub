import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { scratchLessons } from '@/data/scratch';
import { BaseLessonData } from '@/types/lesson-base';
import { notFound } from 'next/navigation';
export async function generateStaticParams() {
  return generateLessonStaticParams(scratchLessons);
}

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, scratchLessons, 'scratch');
}

const config: LessonPageConfig<BaseLessonData> = {
  moduleName: 'scratch',
  moduleTitle: 'Lập trình Scratch',
  modulePath: '/learning/scratch',
  lessons: scratchLessons,
  primaryColor: 'orange',
  secondaryColor: 'amber',
  gradientColors: 'from-slate-900 via-orange-900 to-slate-900',
};

export default async function ScratchLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
