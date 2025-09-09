import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { smartManufacturingLessons } from '@/data/smart-manufacturing';
import { SmartManufacturingLessonType } from '@/data/smart-manufacturing';
import { Factory, Cog, Zap } from 'lucide-react';
import { notFound } from 'next/navigation';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(smartManufacturingLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, smartManufacturingLessons, 'smart-manufacturing');
}

// Page component with standardized config
export default async function SmartManufacturingLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }
  const config: LessonPageConfig<SmartManufacturingLessonType> = {
    moduleName: 'smart-manufacturing',
    moduleTitle: 'Sản Xuất Thông Minh & Công Nghiệp 4.0',
    modulePath: '/learning/smart-manufacturing',
    lessons: smartManufacturingLessons,
    primaryColor: 'orange',
    secondaryColor: 'red',
    gradientColors: 'from-slate-900 via-orange-900 to-slate-900',
    getFieldIcon: (field: string) => {
      switch (field) {
        case 'automation':
          return <Cog className="w-5 h-5" />;
        case 'energy':
          return <Zap className="w-5 h-5" />;
        default:
          return <Factory className="w-5 h-5" />;
      }
    },
    getFieldValue: (lesson) => lesson.technologyFocus,
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
