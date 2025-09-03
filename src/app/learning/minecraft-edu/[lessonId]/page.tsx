import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { minecraftLessons, MinecraftLessonType } from '@/data/minecraft-edu';
import { PageProps } from '@/types';
import { FlaskConical, Cpu, Wrench } from 'lucide-react';

export async function generateStaticParams() {
  return generateLessonStaticParams(minecraftLessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, minecraftLessons, 'minecraft-edu');
}

const config: LessonPageConfig<MinecraftLessonType> = {
  moduleName: 'minecraft-edu',
  moduleTitle: 'Minecraft Education',
  modulePath: '/learning/minecraft-edu',
  lessons: minecraftLessons,
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

export default async function MinecraftLessonPage({ params }: PageProps) {
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
