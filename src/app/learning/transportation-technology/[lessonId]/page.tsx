import type { Metadata } from 'next';
import { LessonPageTemplate, LessonPageConfig } from '@/components/learning/LessonPageTemplate';
import {
  transportationTechnologyLessons,
  TransportationTechnologyLesson,
} from '@/data/modules/transportation-technology';

export async function generateStaticParams() {
  return transportationTechnologyLessons.map((lesson) => ({
    lessonId: lesson.id,
  }));
}

export const metadata: Metadata = {
  title: 'Transportation Technology Lesson',
  description: 'Learn intelligent transportation systems and mobility solutions',
};

type Params = {
  lessonId: string;
};

export default async function TransportationTechnologyLessonPage({ params }: { params: Promise<Params> }) {
  const { lessonId } = await params;

  const config: LessonPageConfig<TransportationTechnologyLesson> = {
    moduleName: 'transportation-technology',
    moduleTitle: 'Transportation Technology',
    modulePath: '/learning/transportation-technology',
    lessons: transportationTechnologyLessons,
    primaryColor: 'indigo',
    secondaryColor: 'purple',
    gradientColors: 'from-slate-900 via-indigo-900 to-slate-900',
  };

  return <LessonPageTemplate<TransportationTechnologyLesson> lessonId={lessonId} config={config} />;
}
