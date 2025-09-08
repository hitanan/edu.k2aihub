import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { roboticsLessons, RoboticsLessonType } from '@/data/robotics';
import { PageProps } from '@/types';
import { K2Module } from '@/data/k2-modules';
import { Bot, Settings, Play, Target, Award } from 'lucide-react';
import { notFound } from 'next/navigation';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(roboticsLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, roboticsLessons, K2Module.Robotics);
}

// Page component with standardized config
export default function RoboticsLessonPage({ params }: PageProps) {
  const { lessonId } = params;
  if (!lessonId) {
    notFound();
  }
  const config: LessonPageConfig<RoboticsLessonType> = {
    moduleName: 'Robotics & Hệ thống tự hành',
    moduleTitle: 'Robotics & Hệ thống tự hành',
    modulePath: `/learning/${K2Module.Robotics}`,
    lessons: roboticsLessons,
    primaryColor: 'purple',
    secondaryColor: 'pink',
    gradientColors: 'from-slate-900 via-purple-900 to-slate-900',
    getFieldValue: (lesson) => lesson.category,
    getFieldIcon: (category: string) => {
      switch (category) {
        case 'hardware':
          return <Settings className="w-5 h-5" />;
        case 'programming':
          return <Bot className="w-5 h-5" />;
        case 'projects':
          return <Play className="w-5 h-5" />;
        case 'theory':
          return <Target className="w-5 h-5" />;
        default:
          return <Bot className="w-5 h-5" />;
      }
    },
    sidebarContent: (lesson) => (
      <>
        {lesson.materials && lesson.materials.length > 0 && (
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Settings className="w-5 h-5 text-purple-400 mr-2" />
              Vật liệu cần thiết
            </h3>
            <ul className="space-y-2">
              {lesson.materials.map((material, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  • {material}
                </li>
              ))}
            </ul>
          </div>
        )}
        {lesson.competitions && lesson.competitions.length > 0 && (
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">
              <Award className="w-5 h-5 text-yellow-400 mr-2 inline-block" />
              Cuộc thi liên quan
            </h3>
            <ul className="space-y-2">
              {lesson.competitions.map((competition, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  • {competition}
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    ),
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
