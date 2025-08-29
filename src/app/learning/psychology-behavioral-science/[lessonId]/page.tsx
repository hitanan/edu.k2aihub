import type { Metadata } from 'next';
import { LessonPageTemplate, LessonPageConfig } from '@/components/learning/LessonPageTemplate';
import { psychologyBehavioralScienceLessons, PsychologyBehavioralScienceLesson } from '@/data/psychology-behavioral-science';

export async function generateStaticParams() {
  return psychologyBehavioralScienceLessons.map((lesson) => ({
    lessonId: lesson.id,
  }));
}

export const metadata: Metadata = {
  title: 'Psychology & Behavioral Science Lesson',
  description: 'Learn applied psychology and behavioral science principles',
};

type Params = {
  lessonId: string;
};

export default async function PsychologyBehavioralScienceLessonPage({ params }: { params: Promise<Params> }) {
  const { lessonId } = await params;
  
  const config: LessonPageConfig<PsychologyBehavioralScienceLesson> = {
    moduleName: 'psychology-behavioral-science',
    moduleTitle: 'Psychology & Behavioral Science',
    modulePath: '/learning/psychology-behavioral-science',
    lessons: psychologyBehavioralScienceLessons,
    primaryColor: 'purple',
    secondaryColor: 'indigo',
    gradientColors: 'from-slate-900 via-purple-900 to-slate-900'
  };

  return (
    <LessonPageTemplate<PsychologyBehavioralScienceLesson>
      lessonId={lessonId}
      config={config}
    />
  );
}