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
import { PageProps } from '@/types';

export async function generateStaticParams() {
  return generateLessonStaticParams(psychologyBehavioralScienceLessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, psychologyBehavioralScienceLessons, 'psychology-behavioral-science');
}

export default async function PsychologyBehavioralScienceLessonPage({ params }: PageProps) {
  const { lessonId } = await params;

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
