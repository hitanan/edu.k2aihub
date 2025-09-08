import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { futureCareersLessons, FutureCareersLesson } from '@/data/future-careers-ai';
import { PageProps } from '@/types';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(futureCareersLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = params;
  return generateLessonMetadata(lessonId || '', futureCareersLessons, 'future-careers-ai');
}

// Page component with standardized config
export default async function FutureCareersLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<FutureCareersLesson> = {
    moduleName: 'future-careers-ai',
    moduleTitle: 'Định hướng Nghề nghiệp trong Kỷ nguyên AI',
    modulePath: '/learning/future-careers-ai',
    lessons: futureCareersLessons,
    primaryColor: 'fuchsia',
    secondaryColor: 'cyan',
    gradientColors: 'from-slate-900 via-fuchsia-900 to-slate-900',
  };
  const { lessonId } = params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
