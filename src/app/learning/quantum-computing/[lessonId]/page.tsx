import { LessonPageTemplate, generateLessonMetadata, LessonPageConfig } from '@/components/learning/LessonPageTemplate';
import { quantumComputingLessons, QuantumComputingLesson } from '@/data/modules/quantum-computing';
import { PageProps } from '@/types';
import { Metadata } from 'next';

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, quantumComputingLessons, 'quantum-computing');
}

export default async function QuantumComputingLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<QuantumComputingLesson> = {
    moduleName: 'quantum-computing',
    moduleTitle: 'Quantum Computing',
    modulePath: '/learning/quantum-computing',
    lessons: quantumComputingLessons || [],
    primaryColor: 'purple',
    secondaryColor: 'purple',
    gradientColors: 'from-indigo-900 via-purple-900 to-indigo-900',
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}

export async function generateStaticParams() {
  return (quantumComputingLessons || []).map((lesson) => ({
    lessonId: lesson.id,
  }));
}
