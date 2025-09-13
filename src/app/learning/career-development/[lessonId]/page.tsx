import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { careerDevelopmentLessons } from '@/data/modules/career-development';
import { BaseLessonData } from '@/types/lesson-base';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(careerDevelopmentLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, careerDevelopmentLessons, 'career-development');
}

// Page component with standardized config
export default async function CareerDevelopmentLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'career-development',
    moduleTitle: 'Phát Triển Sự Nghiệp',
    modulePath: '/learning/career-development',
    lessons: careerDevelopmentLessons,
    primaryColor: 'red',
    secondaryColor: 'orange',
    gradientColors: 'from-slate-900 via-red-900 to-slate-900',
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
