import type { Metadata } from 'next';
import { LessonPageTemplate, LessonPageConfig } from '@/components/learning/LessonPageTemplate';
import { energyManagementLessons, EnergyManagementLesson } from '@/data/energy-management-smart-grid';

export async function generateStaticParams() {
  return energyManagementLessons.map((lesson) => ({
    lessonId: lesson.id,
  }));
}

export const metadata: Metadata = {
  title: 'Energy Management Smart Grid Lesson',
  description: 'Learn advanced energy management and smart grid technologies',
};

type Params = {
  lessonId: string;
};

export default async function EnergyManagementLessonPage({ params }: { params: Promise<Params> }) {
  const { lessonId } = await params;
  
  const config: LessonPageConfig<EnergyManagementLesson> = {
    moduleName: 'energy-management-smart-grid',
    moduleTitle: 'Energy Management & Smart Grid',
    modulePath: '/learning/energy-management-smart-grid',
    lessons: energyManagementLessons,
    primaryColor: 'green',
    secondaryColor: 'emerald',
    gradientColors: 'from-slate-900 via-green-900 to-slate-900'
  };

  return (
    <LessonPageTemplate<EnergyManagementLesson>
      lessonId={lessonId}
      config={config}
    />
  );
}