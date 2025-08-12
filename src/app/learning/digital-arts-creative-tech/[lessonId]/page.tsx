import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig } from '@/components/learning/LessonPageTemplate'
import { DigitalArtsLessons, DigitalArtsLessonType } from '@/data/digital-arts-creative-tech'
import { PageProps } from '@/types';
import { Palette, Video, Sparkles } from 'lucide-react';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(DigitalArtsLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  return generateLessonMetadata(params.lessonId, DigitalArtsLessons);
}

// Page component with standardized config
export default async function DigitalArtsLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<DigitalArtsLessonType> = {
    moduleName: 'digital-arts-creative-tech',
    moduleTitle: 'Nghệ Thuật Số & Công Nghệ Sáng Tạo',
    modulePath: '/learning/digital-arts-creative-tech',
    lessons: DigitalArtsLessons,
    primaryColor: 'pink',
    secondaryColor: 'rose',
    gradientColors: 'from-slate-900 via-pink-900 to-slate-900',
    getFieldIcon: (field: string) => {
      switch (field) {
        case 'tools':
          return <Palette className="w-5 h-5" />;
        case 'techniques':
          return <Video className="w-5 h-5" />;
        case 'aiPrompts':
          return <Sparkles className="w-5 h-5" />;
        default:
          return <Palette className="w-5 h-5" />;
      }
    },
    getFieldValue: (lesson) => {
      if (lesson.tools) return lesson.tools.join(', ');
      if (lesson.techniques) return lesson.techniques.join(', ');
      if (lesson.aiPrompts) return lesson.aiPrompts.slice(0, 2).join(', ') + '...';
      return 'Không có thông tin';
    }
  }
  
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
