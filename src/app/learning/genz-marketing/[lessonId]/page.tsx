import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig } from '@/components/learning/LessonPageTemplate';
import { genZMarketingLessons, GenZMarketingLessonType } from '@/data/genz-marketing';
import { PageProps } from '@/types';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(genZMarketingLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, genZMarketingLessons);
}

// Page component with standardized config
export default async function GenZMarketingLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<GenZMarketingLessonType> = {
    moduleName: 'genz-marketing',
    moduleTitle: 'Gen Z Marketing & Authentic Branding',
    modulePath: '/learning/genz-marketing',
    lessons: genZMarketingLessons,
    primaryColor: 'cyan',
    secondaryColor: 'blue',
    gradientColors: 'from-slate-900 via-cyan-900 to-slate-900',
  };
  
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
