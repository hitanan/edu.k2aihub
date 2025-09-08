import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { scratchLessons } from '@/data/scratch';
import { PageProps } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';
import { notFound } from 'next/navigation';
export async function generateStaticParams() {
  return generateLessonStaticParams(scratchLessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = params;
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

export default function ScratchLessonPage({ params }: PageProps) {
  const { lessonId } = params;
  if (!lessonId) {
    notFound();
  }
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
