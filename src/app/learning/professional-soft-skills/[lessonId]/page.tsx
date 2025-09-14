import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { softSkillsLessons, SoftSkillsLesson } from '@/data/modules/professional-soft-skills';
import { PageProps } from '@/types';
import { Metadata } from 'next';

// Generate static params for all lessons in the module
export async function generateStaticParams() {
  return generateLessonStaticParams(softSkillsLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, softSkillsLessons, 'professional-soft-skills');
}

export default async function SoftSkillsLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<SoftSkillsLesson> = {
    moduleName: 'professional-soft-skills',
    moduleTitle: 'Kỹ Năng Mềm Chuyên Nghiệp',
    modulePath: '/learning/professional-soft-skills',
    lessons: softSkillsLessons,
    primaryColor: '#4A90E2',
    secondaryColor: 'teal',
    gradientColors: 'from-blue-500 to-teal-400',
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
