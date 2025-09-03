import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { quantumComputingLessons, QuantumComputingLesson } from '@/data/quantum-computing';
import { PageProps } from '@/types';
import { K2Module } from '@/data/moduleNavigation';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(quantumComputingLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(
    lessonId,
    quantumComputingLessons,
    K2Module.QuantumComputingEducation, // Note: This might need a specific 'QuantumComputing' enum if available
  );
}

// Page component with standardized config
export default async function QuantumLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<QuantumComputingLesson> = {
    moduleName: 'Quantum Computing',
    moduleTitle: 'Quantum Computing - Máy Tính Lượng Tử',
    modulePath: `/learning/${K2Module.QuantumComputingEducation}`,
    lessons: quantumComputingLessons,
    primaryColor: 'purple',
    secondaryColor: 'pink',
    gradientColors: 'from-slate-900 via-purple-900 to-slate-900',
  };

  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
