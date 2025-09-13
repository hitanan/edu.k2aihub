import { LessonPageTemplate, LessonPageTemplateProps } from '@/components/learning/LessonPageTemplate';
import { psychologyBehavioralScienceModule } from '@/data/modules/psychology-behavioral-science';
import { PsychologyBehavioralScienceLesson } from '@/types/lesson-base';
import { createLessonMetadata } from '@/utils/seo';
import { Metadata } from 'next';

interface PsychologyBehavioralScienceLessonPageProps {
  params: { lessonId: string };
}

export async function generateMetadata({ params }: PsychologyBehavioralScienceLessonPageProps): Promise<Metadata> {
  const lesson = psychologyBehavioralScienceModule.lessons?.find(l => l.id === params.lessonId);
  if (!lesson) {
    return {};
  }
  return createLessonMetadata(
    lesson.title,
    lesson.description,
    psychologyBehavioralScienceModule.id,
    lesson.id,
    lesson.objectives
  );
}

export default async function PsychologyBehavioralScienceLessonPage({ params }: PsychologyBehavioralScienceLessonPageProps) {
  const config: LessonPageTemplateProps<PsychologyBehavioralScienceLesson>['config'] = {
    moduleName: psychologyBehavioralScienceModule.id,
    moduleTitle: psychologyBehavioralScienceModule.title,
    modulePath: `/learning/${psychologyBehavioralScienceModule.id}`,
    lessons: psychologyBehavioralScienceModule.lessons || [],
    primaryColor: psychologyBehavioralScienceModule.primaryColor || '#8B5CF6',
    secondaryColor: psychologyBehavioralScienceModule.primaryColor || '#6366F1', // Fallback
    gradientColors: psychologyBehavioralScienceModule.gradientColors || 'from-purple-500 to-indigo-600',
  };

  return <LessonPageTemplate lessonId={params.lessonId} config={config} />;
}

export async function generateStaticParams() {
  return (psychologyBehavioralScienceModule.lessons || []).map(lesson => ({
    lessonId: lesson.id,
  }));
}
