import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
  BaseLessonData,
} from '@/components/learning/LessonPageTemplate';
import { threeDPrintingLessons } from '@/data/3d-printing';
import { PageProps } from '@/types';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(threeDPrintingLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, threeDPrintingLessons, '3d-printing');
}

// Page component with standardized config
export default async function ThreeDPrintingLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: '3d-printing',
    moduleTitle: 'Làm chủ Công nghệ In 3D',
    modulePath: '/learning/3d-printing',
    lessons: threeDPrintingLessons,
    primaryColor: 'orange',
    secondaryColor: 'amber',
    gradientColors: 'from-slate-900 via-orange-900 to-slate-900',
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
