import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { crossCulturalLessons, CrossCulturalLessonType } from '@/data/cross-cultural-intelligence';
import { PageProps } from '@/types';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(crossCulturalLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = params;
  if (!lessonId) {
    return {
      title: 'Lesson not found',
    };
  }
  return generateLessonMetadata(lessonId, crossCulturalLessons, 'cross-cultural-intelligence');
}

// Page component with standardized config
export default async function CrossCulturalLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<CrossCulturalLessonType> = {
    moduleName: 'cross-cultural-intelligence',
    moduleTitle: 'Trí Tuệ Đa Văn Hóa',
    modulePath: '/learning/cross-cultural-intelligence',
    lessons: crossCulturalLessons,
    primaryColor: 'teal',
    secondaryColor: 'cyan',
    gradientColors: 'from-slate-900 via-teal-900 to-slate-900',
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
