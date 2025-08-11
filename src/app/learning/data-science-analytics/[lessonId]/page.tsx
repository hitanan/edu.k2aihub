import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { dataScienceLessons, DataScienceLessonType } from '@/data/data-science-analytics';
import { PageProps } from '@/types';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(dataScienceLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, dataScienceLessons);
}

// Page component with standardized config
export default async function DataScienceAnalyticsLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<DataScienceLessonType> = {
    moduleName: 'data-science-analytics',
    moduleTitle: 'Data Science & Big Data Analytics',
    modulePath: '/learning/data-science-analytics',
    lessons: dataScienceLessons,
    primaryColor: 'indigo',
    secondaryColor: 'purple',
    gradientColors: 'from-slate-900 via-indigo-900 to-slate-900',
  };

  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
