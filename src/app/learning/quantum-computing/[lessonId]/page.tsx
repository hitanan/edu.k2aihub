import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { quantumComputingLessons } from '@/data/quantum-computing';
import { BaseLessonData } from '@/types/lesson-base';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return generateLessonStaticParams(quantumComputingLessons);
}

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, quantumComputingLessons, 'quantum-computing');
}

export default async function QuantumComputingLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'quantum-computing',
    moduleTitle: 'Điện toán Lượng tử',
    modulePath: '/learning/quantum-computing',
    lessons: quantumComputingLessons,
    primaryColor: 'indigo',
    secondaryColor: 'purple',
    gradientColors: 'from-indigo-500 via-purple-600 to-pink-500',
  };

  const { lessonId } = await params;

  if (!lessonId) {
    return notFound();
  }

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
