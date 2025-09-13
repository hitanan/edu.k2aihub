import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { educationTechnologyModuleData, educationTechnologyLessons } from '@/data/modules/education-technology';

import { BaseLessonData } from '@/types/lesson-base';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(educationTechnologyLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, educationTechnologyLessons, educationTechnologyModuleData.id);
}

// Page component with standardized config
export default async function EducationTechnologyLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'education-technology',
    moduleTitle: 'Công Nghệ Giáo Dục',
    modulePath: '/learning/education-technology',
    lessons: educationTechnologyLessons,
    primaryColor: 'indigo',
    secondaryColor: 'purple',
    gradientColors: 'from-slate-900 via-indigo-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
