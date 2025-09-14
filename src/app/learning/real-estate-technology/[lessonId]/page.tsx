import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { realEstateLessons, RealEstateTechLesson } from '@/data/modules/real-estate-technology';
import { PageProps } from '@/types';
import { Metadata } from 'next';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(realEstateLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, realEstateLessons, 'real-estate-technology');
}

// Page component with standardized config
export default async function RealEstateLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<RealEstateTechLesson> = {
    moduleName: 'real-estate-technology',
    moduleTitle: 'Công Nghệ Bất Động Sản',
    modulePath: '/learning/real-estate-technology',
    lessons: realEstateLessons,
    primaryColor: 'blue',
    secondaryColor: 'teal',
    gradientColors: 'from-green-900 via-teal-900 to-green-900',
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
