import { LessonPageTemplate, LessonPageTemplateProps } from '@/components/learning/LessonPageTemplate';
import { quantumComputingModule } from '@/data/modules/quantum-computing';
import { QuantumComputingLesson } from '@/types/lesson-base';
import { createLessonMetadata } from '@/utils/seo';
import { Metadata } from 'next';

interface QuantumComputingLessonPageProps {
  params: { lessonId: string };
}

export async function generateMetadata({ params }: QuantumComputingLessonPageProps): Promise<Metadata> {
  const lesson = quantumComputingModule.lessons?.find(l => l.id === params.lessonId);
  if (!lesson) {
    return {};
  }
  return createLessonMetadata(
    lesson.title,
    lesson.description,
    quantumComputingModule.id,
    lesson.id,
    lesson.objectives
  );
}

export default async function QuantumComputingLessonPage({ params }: QuantumComputingLessonPageProps) {
  const config: LessonPageTemplateProps<QuantumComputingLesson>['config'] = {
    moduleName: quantumComputingModule.id,
    moduleTitle: quantumComputingModule.title,
    modulePath: `/learning/${quantumComputingModule.id}`,
    lessons: quantumComputingModule.lessons || [],
    primaryColor: quantumComputingModule.primaryColor || '#8A2BE2',
    secondaryColor: quantumComputingModule.primaryColor || '#8A2BE2', // Fallback
    gradientColors: quantumComputingModule.gradientColors || 'from-blue-violet-500 to-violet-700',
  };

  return <LessonPageTemplate lessonId={params.lessonId} config={config} />;
}

export async function generateStaticParams() {
  return (quantumComputingModule.lessons || []).map(lesson => ({
    lessonId: lesson.id,
  }));
}
