import { notFound } from 'next/navigation';

import {
  LessonPageTemplate,
  LessonPageConfig,
  generateLessonMetadata,
  generateLessonStaticParams,
} from '@/components/learning/LessonPageTemplate';
import { sustainableEnergyGreenTechLessons } from '@/data/sustainable-energy-green-tech';
import { sustainableEnergyModuleData } from '@/data/sustainable-energy-green-tech-module';
import { BaseLessonData } from '@/types/lesson-base';

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, sustainableEnergyGreenTechLessons, 'sustainable-energy-green-tech');
}

export default async function SustainableEnergyGreenTechLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }

  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: sustainableEnergyModuleData.id,
    moduleTitle: sustainableEnergyModuleData.title,
    modulePath: `/learning/${sustainableEnergyModuleData.id}`,
    lessons: sustainableEnergyGreenTechLessons,
    primaryColor: 'green',
    secondaryColor: 'emerald',
    gradientColors: 'from-green-900 to-emerald-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}

export async function generateStaticParams() {
  return generateLessonStaticParams(sustainableEnergyGreenTechLessons);
}
