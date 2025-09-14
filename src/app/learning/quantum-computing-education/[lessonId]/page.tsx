import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { quantumComputingLessons, QuantumComputingLesson } from '@/data/modules/quantum-computing-education';
import { PageProps } from '@/types';
import { Metadata } from 'next';

// Generate static params for all lessons in the module
export async function generateStaticParams() {
  return generateLessonStaticParams(quantumComputingLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, quantumComputingLessons, 'quantum-computing-education');
}

export default async function QuantumComputingLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<QuantumComputingLesson> = {
    moduleName: 'quantum-computing-education',
    moduleTitle: 'Điện toán Lượng tử cho Giáo dục',
    modulePath: '/learning/quantum-computing-education',
    lessons: quantumComputingLessons,
    primaryColor: '#A855F7',
    secondaryColor: 'violet',
    gradientColors: 'from-purple-600 to-violet-700',
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
