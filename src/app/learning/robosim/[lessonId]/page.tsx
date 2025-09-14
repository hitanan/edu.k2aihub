import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { robosimLessons, RobosimLessonType } from '@/data/modules/robosim';
import { Bot, Cpu, Puzzle } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return generateLessonStaticParams(robosimLessons);
}

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, robosimLessons, 'robosim');
}

export default async function RobosimLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }
  const config: LessonPageConfig<RobosimLessonType> = {
    moduleName: 'robosim',
    moduleTitle: 'Robosim - Lập trình và Thi đấu Robotics Giả lập',
    modulePath: '/learning/robosim',
    lessons: robosimLessons,
    primaryColor: 'green',
    secondaryColor: 'teal',
    gradientColors: 'from-gray-900 via-green-900 to-gray-900',
    getFieldIcon: (field: string) => {
      switch (field) {
        case 'competitionFocus':
          return <Puzzle className="w-5 h-5" />;
        case 'programmingLang':
          return <Cpu className="w-5 h-5" />;
        case 'keyConcepts':
          return <Bot className="w-5 h-5" />;
        default:
          return null;
      }
    },
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
