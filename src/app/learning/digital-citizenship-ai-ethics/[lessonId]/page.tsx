import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { digitalCitizenshipLessons, DigitalCitizenshipLessonType } from '@/data/digital-citizenship-ai-ethics';
import { PageProps } from '@/types';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(digitalCitizenshipLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, digitalCitizenshipLessons);
}

// Page component with standardized config
export default async function DigitalCitizenshipLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<DigitalCitizenshipLessonType> = {
    moduleName: 'digital-citizenship-ai-ethics',
    moduleTitle: 'Công Dân Số và Đạo Đức AI',
    modulePath: '/learning/digital-citizenship-ai-ethics',
    lessons: digitalCitizenshipLessons,
    primaryColor: 'blue',
    secondaryColor: 'indigo',
    gradientColors: 'from-slate-900 via-blue-900 to-slate-900',
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
