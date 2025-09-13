import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { chemicalEngineeringLessons } from '@/data/modules/chemical-engineering';
import { BaseLessonData } from '@/types/lesson-base';

export async function generateStaticParams() {
  return generateLessonStaticParams(chemicalEngineeringLessons);
}

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, chemicalEngineeringLessons, 'chemical-engineering');
}

export default async function ChemicalEngineeringLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'chemical-engineering',
    moduleTitle: 'Chemical Engineering',
    modulePath: '/learning/chemical-engineering',
    lessons: chemicalEngineeringLessons,
    primaryColor: 'orange',
    secondaryColor: 'red',
    gradientColors: 'from-orange-900 via-red-900 to-orange-900',
  };

  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
