import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
  BaseLessonData,
} from '@/components/learning/LessonPageTemplate';
import { environmentalDataScienceLessons } from '@/data/environmental-data-science';
import { PageProps } from '@/types';
import { notFound } from 'next/navigation';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(environmentalDataScienceLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const lessonId = params.lessonId;
  if (!lessonId) return {};
  return generateLessonMetadata(lessonId, environmentalDataScienceLessons, 'environmental-data-science');
}

// Page component with standardized config
export default async function EnvironmentalDataScienceLessonPage({ params }: PageProps) {
  const lessonId = params.lessonId;
  if (!lessonId) {
    notFound();
  }

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'environmental-data-science',
    moduleTitle: 'Khoa Học Dữ Liệu Môi Trường',
    modulePath: '/learning/environmental-data-science',
    lessons: environmentalDataScienceLessons,
    primaryColor: 'green',
    secondaryColor: 'emerald',
    gradientColors: 'from-slate-900 via-green-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
