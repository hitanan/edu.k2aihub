import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { genderEducationMentalHealthModuleData } from '@/data/modules/gender-education-mental-health';
import { PageProps } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

const lessons = genderEducationMentalHealthModuleData.lessons || [];

export async function generateStaticParams() {
  return generateLessonStaticParams(lessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, lessons, genderEducationMentalHealthModuleData.id);
}

export default async function LessonPage({ params }: PageProps) {
  const { lessonId } = await params;

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'gender-education-mental-health',
    moduleTitle: 'Giáo Dục Giới Tính và Sức Khỏe Vị Thành Niên',
    modulePath: '/learning/gender-education-mental-health',
    lessons: lessons,
    primaryColor: 'rose',
    secondaryColor: 'red',
    gradientColors: 'from-rose-900 via-red-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
