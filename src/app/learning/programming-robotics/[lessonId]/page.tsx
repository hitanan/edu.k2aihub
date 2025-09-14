import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { programmingRoboticsLessons, ProgrammingRoboticsLesson } from '@/data/modules/programming-robotics';
import { PageProps } from '@/types';
import { Metadata } from 'next';

// Generate static params for all lessons in the module
export async function generateStaticParams() {
  return generateLessonStaticParams(programmingRoboticsLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, programmingRoboticsLessons, 'programming-robotics');
}

export default async function ProgrammingRoboticsLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<ProgrammingRoboticsLesson> = {
    moduleName: 'programming-robotics',
    moduleTitle: 'Lập trình và Robot học',
    modulePath: '/learning/programming-robotics',
    lessons: programmingRoboticsLessons,
    primaryColor: 'gray',
    secondaryColor: 'blue',
    gradientColors: 'from-gray-600 to-blue-600',
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
