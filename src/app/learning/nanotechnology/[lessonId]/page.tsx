import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { nanotechnologyLessons } from '@/data/modules/nanotechnology';
import { NanotechnologyLesson } from '@/types/lesson-base';
import { Metadata } from 'next';

type PageProps = {
  params: Promise<{ lessonId: string }>;
};

export async function generateStaticParams() {
  return generateLessonStaticParams(nanotechnologyLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, nanotechnologyLessons, 'nanotechnology');
}

export default async function NanotechnologyLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<NanotechnologyLesson> = {
    moduleName: 'nanotechnology',
    moduleTitle: 'Công nghệ Nano',
    modulePath: '/learning/nanotechnology',
    lessons: nanotechnologyLessons,
    primaryColor: 'gray',
    secondaryColor: 'slate',
    gradientColors: 'from-gray-900 via-slate-900 to-gray-900',
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
