import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { ProgrammingRoboticsLessons, type ProgrammingRoboticsLessonData } from '@/data/programming-robotics';
import { BaseLessonData } from '@/types/lesson-base';
import { Bot, Code, Cpu, Zap } from 'lucide-react';

// Convert ProgrammingRoboticsLessonData to BaseLessonData
function convertToBaseLessonData(lesson: ProgrammingRoboticsLessonData): BaseLessonData {
  return {
    id: lesson.id,
    title: lesson.title,
    description: lesson.description,
    duration: lesson.duration,
    difficulty: lesson.difficulty,
    videoUrl: lesson.videoUrl,
    imageUrl: lesson.imageUrl,
    objectives: lesson.objectives,
    prerequisites: lesson.prerequisites,
    exercises: lesson.exercises,
    realWorldApplications: lesson.realWorldApplications,
    caseStudies: lesson.caseStudies?.map((study) => ({
      title: study.title,
      organization: study.organization,
      problem: study.problem,
      solution: study.solution,
      impact: study.impact,
      innovations: study.innovations || [],
    })),
    resources: lesson.resources,
  };
}

// Convert lessons to BaseLessonData format
const convertedLessons = ProgrammingRoboticsLessons.map(convertToBaseLessonData);

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(convertedLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, convertedLessons, 'programming-robotics');
}

// Icon mapping function for programming robotics fields
function getRoboticsIcon(field: string) {
  const iconMap: Record<string, React.ReactNode> = {
    robotics: <Bot className="w-5 h-5" />,
    programming: <Code className="w-5 h-5" />,
    hardware: <Cpu className="w-5 h-5" />,
    automation: <Zap className="w-5 h-5" />,
  };
  return iconMap[field] || <Bot className="w-5 h-5" />;
}

// Page component with standardized config
export default async function ProgrammingRoboticsLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'programming-robotics',
    moduleTitle: 'Programming & Robotics',
    modulePath: '/learning/programming-robotics',
    lessons: convertedLessons,
    primaryColor: 'blue',
    secondaryColor: 'cyan',
    gradientColors: 'from-slate-900 via-blue-900 to-slate-900',
    getFieldIcon: (field: string) => getRoboticsIcon(field),
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
