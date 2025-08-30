import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { blueEconomyLessons, BlueEconomyLessonType } from '@/data/blue-economy';
import { PageProps } from '@/types';
import { Waves, Fish, Zap } from 'lucide-react';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(blueEconomyLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, blueEconomyLessons, 'blue-economy');
}

// Page component with standardized config
export default async function BlueEconomyLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<BlueEconomyLessonType> = {
    moduleName: 'blue-economy',
    moduleTitle: 'Kinh Tế Biển Xanh & Công Nghệ Biển',
    modulePath: '/learning/blue-economy',
    lessons: blueEconomyLessons,
    primaryColor: 'blue',
    secondaryColor: 'cyan',
    gradientColors: 'from-slate-900 via-blue-900 to-slate-900',
    getFieldIcon: (field: string) => {
      switch (field) {
        case 'aquaculture':
          return <Fish className="w-5 h-5" />;
        case 'energy':
          return <Zap className="w-5 h-5" />;
        default:
          return <Waves className="w-5 h-5" />;
      }
    },
  };

  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
