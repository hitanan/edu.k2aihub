import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { robloxLessons } from '@/data/roblox-game-dev';
import { RobloxLessonType } from '@/data/roblox-game-dev';
import { PageProps } from '@/types';
import { Code, Package } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return generateLessonStaticParams(robloxLessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, robloxLessons, 'roblox-game-dev');
}

const config: LessonPageConfig<RobloxLessonType> = {
  moduleName: 'roblox-game-dev',
  moduleTitle: 'Phát triển Game với Roblox',
  modulePath: '/learning/roblox-game-dev',
  lessons: robloxLessons,
  primaryColor: 'red',
  secondaryColor: 'rose',
  gradientColors: 'from-slate-900 via-red-900 to-slate-900',
  getFieldIcon: (field: string) => {
    switch (field) {
      case 'studioVersion':
        return <Package className="w-5 h-5" />;
      case 'luaVersion':
        return <Code className="w-5 h-5" />;
      default:
        return <Package className="w-5 h-5" />;
    }
  },
  getFieldValue: (lesson) => `Studio: ${lesson.studioVersion} / Lua: ${lesson.luaVersion}`,
};

export default function RobloxLessonPage({ params }: PageProps) {
  const { lessonId } = params;
  if (!lessonId) {
    notFound();
  }
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
