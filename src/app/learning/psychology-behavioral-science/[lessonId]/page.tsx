import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import {
  psychologyBehavioralScienceLessons,
  PsychologyBehavioralScienceLesson,
} from '@/data/psychology-behavioral-science';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return generateLessonStaticParams(psychologyBehavioralScienceLessons);
}

export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, psychologyBehavioralScienceLessons, 'psychology-behavioral-science');
}

export default async function PsychologyBehavioralScienceLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }

  const config: LessonPageConfig<PsychologyBehavioralScienceLesson> = {
    moduleName: 'psychology-behavioral-science',
    moduleTitle: 'Psychology & Behavioral Science',
    modulePath: '/learning/psychology-behavioral-science',
    lessons: psychologyBehavioralScienceLessons,
    primaryColor: 'purple',
    secondaryColor: 'indigo',
    gradientColors: 'from-slate-900 via-purple-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
