import { PageProps } from '@/types';
import { LessonPageTemplate, LessonPageConfig } from '@/components/learning/LessonPageTemplate';
import { sustainableEnergyGreenTechLessons } from '@/data/sustainable-energy-green-tech';
import { sustainableEnergyModuleData } from '@/data/sustainable-energy-green-tech-module';
import { BaseLessonData } from '@/types/lesson-base';

export default async function SustainableEnergyGreenTechLessonPage({ params }: PageProps) {
  const lessonId = params.lessonId || 'introduction-to-sustainable-energy';

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
  return sustainableEnergyGreenTechLessons.map((lesson) => ({
    lessonId: lesson.id,
  }));
}
