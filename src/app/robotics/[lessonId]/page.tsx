import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig } from '@/components/learning/LessonPageTemplate';
import { roboticsLessons, RoboticsLessonType } from '@/data/modules/robotics';

export async function generateStaticParams() {
  return generateLessonStaticParams(roboticsLessons);
}

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, roboticsLessons, 'robotics');
}

export default async function RoboticsLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const config: LessonPageConfig<RoboticsLessonType> = {
    moduleName: 'robotics',
    moduleTitle: 'Robotics',
    modulePath: '/robotics',
    lessons: roboticsLessons,
    primaryColor: 'gray',
    secondaryColor: 'blue',
    gradientColors: 'from-gray-500 to-blue-500',
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}