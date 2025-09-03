import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { scratchLessons } from '@/data/scratch';
import { PageProps } from '@/types';
import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export async function generateStaticParams() {
  return generateLessonStaticParams(scratchLessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
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

export default async function ScratchLessonPage({ params }: PageProps) {
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
