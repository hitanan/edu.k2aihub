import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig } from '@/components/learning/LessonPageTemplate';
import { QuantumLessons, QuantumLessonData } from '@/data/quantum-computing';
import { PageProps } from '@/types';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(QuantumLessons);
}

// Generate metadata for each lesson  
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, QuantumLessons);
}

// Page component with standardized config
export default async function QuantumLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<QuantumLessonData> = {
    moduleName: 'quantum-computing',
    moduleTitle: 'Quantum Computing - Máy Tính Lượng Tử',
    modulePath: '/learning/quantum-computing',
    lessons: QuantumLessons,
    primaryColor: 'purple',
    secondaryColor: 'pink', 
    gradientColors: 'from-slate-900 via-purple-900 to-slate-900',
  };

  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
