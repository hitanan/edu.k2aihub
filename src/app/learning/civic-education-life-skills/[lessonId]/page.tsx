import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { civicEducationLifeSkillsModuleData } from '@/data/modules/civic-education-life-skills';
import { BaseLessonData } from '@/types/lesson-base';

export async function generateStaticParams() {
  return generateLessonStaticParams(civicEducationLifeSkillsModuleData.lessons || []);
}

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(
    lessonId,
    civicEducationLifeSkillsModuleData.lessons || [],
    civicEducationLifeSkillsModuleData.id,
  );
}

export default async function CivicEducationLifeSkillsLessonPage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const { lessonId } = await params;

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'civic-education-life-skills',
    moduleTitle: 'Giáo Dục Công Dân và Kỹ Năng Sống',
    modulePath: '/learning/civic-education-life-skills',
    lessons: civicEducationLifeSkillsModuleData.lessons || [],
    primaryColor: 'teal',
    secondaryColor: 'cyan',
    gradientColors: 'from-teal-900 via-cyan-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
