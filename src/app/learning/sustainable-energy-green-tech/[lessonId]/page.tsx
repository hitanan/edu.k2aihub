import { PageProps } from '@/types';
import LessonPageTemplate, { LessonPageConfig } from '@/components/learning/LessonPageTemplate';
import { sustainableEnergyGreenTechLessons } from '@/data/sustainable-energy-green-tech';
import { sustainableEnergyModuleData } from '@/data/sustainable-energy-green-tech-module';

export default async function SustainableEnergyGreenTechLessonPage({ params }: PageProps) {
  const lessonId = params.lessonId || 'introduction-to-sustainable-energy';

  const config: LessonPageConfig = {
    moduleName: sustainableEnergyModuleData.id,
    moduleTitle: sustainableEnergyModuleData.title,
    lessons: sustainableEnergyGreenTechLessons,
    lessonId,
    primaryColor: 'green',
    secondaryColor: 'emerald',
  };

  return <LessonPageTemplate {...config} />;
}

export async function generateStaticParams() {
  return sustainableEnergyGreenTechLessons.map((lesson) => ({
    lessonId: lesson.id,
  }));
}
