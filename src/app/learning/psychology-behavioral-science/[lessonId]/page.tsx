import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { psychologyLessons, PsychologyLesson } from '@/data/modules/psychology-behavioral-science';
import { PageProps } from '@/types';
import { Metadata } from 'next';

// Generate static params for all lessons in the module
export async function generateStaticParams() {
  return generateLessonStaticParams(psychologyLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, psychologyLessons, 'psychology-behavioral-science');
}

export default async function PsychologyLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<PsychologyLesson> = {
    moduleName: 'psychology-behavioral-science',
    moduleTitle: 'Tâm lý học & Khoa học hành vi',
    modulePath: '/learning/psychology-behavioral-science',
    lessons: psychologyLessons,
    primaryColor: '#8B5CF6',
    secondaryColor: 'indigo',
    gradientColors: 'from-purple-500 to-indigo-600',
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
