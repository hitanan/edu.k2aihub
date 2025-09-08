import { Metadata } from 'next';
import { LessonPageTemplate, LessonPageConfig } from '@/components/learning/LessonPageTemplate';
import { PageProps } from '@/types';
import { createLessonMetadata } from '@/utils/seo';
import { DataScienceLessons, DataScienceLesson } from '@/data/data-science';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lesson = DataScienceLessons.find((l) => l.id === params.lessonId);
  if (!lesson) {
    return {};
  }
  return createLessonMetadata(lesson.title, lesson.description, 'data-science', lesson.id, []);
}

export default function DataScienceLessonPage({ params }: PageProps) {
  const lessonId = params.lessonId;

  const config: LessonPageConfig<DataScienceLesson> = {
    moduleName: 'data-science',
    moduleTitle: 'Data Science - Khoa học dữ liệu',
    modulePath: '/learning/data-science',
    lessons: DataScienceLessons,
    primaryColor: 'blue',
    secondaryColor: 'cyan',
    gradientColors: 'from-slate-900 via-blue-900 to-slate-900',
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}

export async function generateStaticParams() {
  return DataScienceLessons.map((lesson: DataScienceLesson) => ({
    lessonId: lesson.id,
  }));
}
