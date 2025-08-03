import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig } from '@/components/learning/LessonPageTemplate'
import { vietnameseHealthcareLessons, VietnameseHealthcareLesson } from '@/data/vietnamese-healthcare'
import { PageProps } from '@/types';
import { Heart } from 'lucide-react';

export async function generateStaticParams() {
  return generateLessonStaticParams(vietnameseHealthcareLessons);
}

export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, vietnameseHealthcareLessons);
}

export default async function VietnameseHealthcareLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<VietnameseHealthcareLesson> = {
    moduleName: 'vietnamese-healthcare',
    moduleTitle: 'Công Nghệ Y Tế Việt Nam',
    modulePath: '/learning/vietnamese-healthcare',
    lessons: vietnameseHealthcareLessons,
    primaryColor: 'emerald',
    secondaryColor: 'teal',
    gradientColors: 'from-slate-900 via-emerald-900 to-slate-900',
    getFieldIcon: () => <Heart className="w-5 h-5" />
  }
  
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
