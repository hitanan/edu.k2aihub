import { LessonPageTemplate, LessonPageTemplateProps } from '@/components/learning/LessonPageTemplate';
import { programmingRoboticsModule } from '@/data/modules/programming-robotics';
import { ProgrammingRoboticsLesson } from '@/types/lesson-base';
import { createLessonMetadata } from '@/utils/seo';
import { Metadata } from 'next';
import { Bot, Code, Cpu, Zap } from 'lucide-react';
import { ReactNode } from 'react';

interface ProgrammingRoboticsLessonPageProps {
  params: { lessonId: string };
}

export async function generateMetadata({ params }: ProgrammingRoboticsLessonPageProps): Promise<Metadata> {
  const lesson = programmingRoboticsModule.lessons?.find((l) => l.id === params.lessonId);
  if (!lesson) {
    return {};
  }
  return createLessonMetadata(
    lesson.title,
    lesson.description,
    programmingRoboticsModule.id,
    lesson.id,
    lesson.objectives
  );
}

function getRoboticsIcon(field: string): ReactNode {
  const iconMap: Record<string, React.ReactNode> = {
    robotics: <Bot className="w-5 h-5" />,
    programming: <Code className="w-5 h-5" />,
    hardware: <Cpu className="w-5 h-5" />,
    automation: <Zap className="w-5 h-5" />,
  };
  return iconMap[field] || <Bot className="w-5 h-5" />;
}

export default async function ProgrammingRoboticsLessonPage({ params }: ProgrammingRoboticsLessonPageProps) {
  const config: LessonPageTemplateProps<ProgrammingRoboticsLesson>['config'] = {
    moduleName: programmingRoboticsModule.id,
    moduleTitle: programmingRoboticsModule.title,
    modulePath: `/learning/${programmingRoboticsModule.id}`,
    lessons: programmingRoboticsModule.lessons || [],
    primaryColor: programmingRoboticsModule.primaryColor || '#2563eb',
    secondaryColor: programmingRoboticsModule.primaryColor || '#06b6d4',
    gradientColors: programmingRoboticsModule.gradientColors || 'from-slate-900 via-blue-900 to-slate-900',
    getFieldIcon: (field: string) => getRoboticsIcon(field),
    getFieldValue: (lesson) => lesson.programmingLanguages?.[0] || 'Robotics',
  };

  return <LessonPageTemplate lessonId={params.lessonId} config={config} />;
}

export async function generateStaticParams() {
  return (programmingRoboticsModule.lessons || []).map((lesson) => ({
    lessonId: lesson.id,
  }));
}
