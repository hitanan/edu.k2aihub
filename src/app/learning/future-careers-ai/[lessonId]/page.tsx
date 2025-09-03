import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
  BaseLessonData,
} from '@/components/learning/LessonPageTemplate';
import { futureCareersLessons } from '@/data/future-careers-ai';
import { PageProps } from '@/types';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(futureCareersLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, futureCareersLessons, 'future-careers-ai');
}

// Page component with standardized config
export default async function FutureCareersLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'future-careers-ai',
    moduleTitle: 'Định hướng Nghề nghiệp trong Kỷ nguyên AI',
    modulePath: '/learning/future-careers-ai',
    lessons: futureCareersLessons,
    primaryColor: 'fuchsia',
    secondaryColor: 'cyan',
    gradientColors: 'from-slate-900 via-fuchsia-900 to-slate-900',
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
