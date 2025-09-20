import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { literatureReadingSkillsModuleData } from '@/data/modules/literature-reading-skills';
import { PageProps } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

const lessons = literatureReadingSkillsModuleData.lessons || [];

export async function generateStaticParams() {
  return generateLessonStaticParams(lessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, lessons, literatureReadingSkillsModuleData.id);
}

export default async function LessonPage({ params }: PageProps) {
  const { lessonId } = await params;

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'literature-reading-skills',
    moduleTitle: 'Văn Học và Kỹ Năng Đọc Hiểu',
    modulePath: '/learning/literature-reading-skills',
    lessons: lessons,
    primaryColor: 'orange',
    secondaryColor: 'amber',
    gradientColors: 'from-orange-900 via-amber-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
