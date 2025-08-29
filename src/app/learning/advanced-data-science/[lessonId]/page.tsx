import type { Metadata } from 'next';
import { LessonPageTemplate, LessonPageConfig } from '@/components/learning/LessonPageTemplate';
import { advancedDataScienceLessons, AdvancedDataScienceLesson } from '@/data/advanced-data-science';

export async function generateStaticParams() {
  return advancedDataScienceLessons.map((lesson) => ({
    lessonId: lesson.id,
  }));
}

export const metadata: Metadata = {
  title: 'Advanced Data Science Lesson',
  description: 'Learn cutting-edge data science and machine learning techniques',
};

type Params = {
  lessonId: string;
};

export default async function AdvancedDataScienceLessonPage({ params }: { params: Promise<Params> }) {
  const { lessonId } = await params;
  
  const config: LessonPageConfig<AdvancedDataScienceLesson> = {
    moduleName: 'advanced-data-science',
    moduleTitle: 'Advanced Data Science',
    modulePath: '/learning/advanced-data-science',
    lessons: advancedDataScienceLessons,
    primaryColor: 'blue',
    secondaryColor: 'cyan',
    gradientColors: 'from-slate-900 via-blue-900 to-slate-900'
  };

  return (
    <LessonPageTemplate<AdvancedDataScienceLesson>
      lessonId={lessonId}
      config={config}
    />
  );
}