import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig } from '@/components/learning/LessonPageTemplate'
import { vietnameseCultureLessons, VietnameseCultureLesson } from '@/data/vietnamese-culture'
import { PageProps } from '@/types';
import { Landmark } from 'lucide-react';

export async function generateStaticParams() {
  return generateLessonStaticParams(vietnameseCultureLessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, vietnameseCultureLessons);
}

export default async function VietnameseCultureLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<VietnameseCultureLesson> = {
    moduleName: 'vietnamese-culture',
    moduleTitle: 'Văn Hóa Việt Nam & Di Sản Số',
    modulePath: '/learning/vietnamese-culture',
    lessons: vietnameseCultureLessons,
    primaryColor: 'yellow',
    secondaryColor: 'orange',
    gradientColors: 'from-slate-900 via-yellow-900 to-slate-900',
    getFieldIcon: () => <Landmark className="w-5 h-5" />
  }
  
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
