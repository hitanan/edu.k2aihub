import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { DataScienceLessons, DataScienceLessonData } from '@/data/data-science';
import { PageProps } from '@/types';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(DataScienceLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, DataScienceLessons, 'data-science');
}

// Page component with standardized config
export default async function DataScienceLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<DataScienceLessonData> = {
    moduleName: 'data-science',
    moduleTitle: 'Data Science - Khoa học dữ liệu',
    modulePath: '/learning/data-science',
    lessons: DataScienceLessons,
    primaryColor: 'blue',
    secondaryColor: 'cyan',
    gradientColors: 'from-slate-900 via-blue-900 to-slate-900',
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
