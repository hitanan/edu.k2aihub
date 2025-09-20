import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { scientificResearchSkillsModuleData } from '@/data/modules/scientific-research-skills';
import { PageProps } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

const lessons = scientificResearchSkillsModuleData.lessons || [];

export async function generateStaticParams() {
  return generateLessonStaticParams(lessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, lessons, scientificResearchSkillsModuleData.id);
}

export default async function LessonPage({ params }: PageProps) {
  const { lessonId } = await params;

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'scientific-research-skills',
    moduleTitle: 'Kỹ Năng Nghiên Cứu Khoa Học',
    modulePath: '/learning/scientific-research-skills',
    lessons: lessons,
    primaryColor: 'green',
    secondaryColor: 'teal',
    gradientColors: 'from-green-900 via-teal-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
