import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { minecraftEduModule } from '@/data/modules/minecraft-edu';
import type { MinecraftEduLesson as MinecraftLessonType } from '@/types/lesson-base';
import { FlaskConical, Cpu, Wrench } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return generateLessonStaticParams(minecraftEduModule.lessons || []);
}

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, minecraftEduModule.lessons || [], 'minecraft-edu');
}

const config: LessonPageConfig<MinecraftLessonType> = {
  moduleName: 'minecraft-edu',
  moduleTitle: 'Minecraft Education',
  modulePath: '/learning/minecraft-edu',
  lessons: minecraftEduModule.lessons || [],
  primaryColor: 'green',
  secondaryColor: 'emerald',
  gradientColors: 'from-slate-900 via-green-900 to-slate-900',
  getFieldIcon: (field: string) => {
    switch (field) {
      case 'gameVersion':
        return <Wrench className="w-5 h-5" />;
      case 'skills':
        return <Cpu className="w-5 h-5" />;
      default:
        return <FlaskConical className="w-5 h-5" />;
    }
  },
  getFieldValue: (lesson) => lesson.skills.join(', '),
};

export default async function MinecraftLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
