import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig } from '@/components/learning/LessonPageTemplate'
import { SpaceTechnologyLessons, SpaceTechnologyLessonType } from '@/data/space-technology'
import { PageProps } from '@/types';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(SpaceTechnologyLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, SpaceTechnologyLessons, 'space-technology');
}

// Page component with standardized config
export default async function SpaceTechnologyLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<SpaceTechnologyLessonType> = {
    moduleName: 'space-technology',
    moduleTitle: 'Công Nghệ Vũ Trụ',
    modulePath: '/learning/space-technology',
    lessons: SpaceTechnologyLessons,
    primaryColor: 'indigo',
    secondaryColor: 'purple',
    gradientColors: 'from-slate-900 via-indigo-900 to-slate-900',
    getFieldIcon: () => <span className="w-5 h-5">🚀</span>,
    getFieldValue: (lesson) => lesson.spaceLevel || lesson.technologies?.join(', '),
  }
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
