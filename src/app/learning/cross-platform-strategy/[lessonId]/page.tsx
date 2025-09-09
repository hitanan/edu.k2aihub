import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { crossPlatformStrategyLessons, CrossPlatformStrategyLessonType } from '@/data/cross-platform-strategy';

import { Globe, Target, BarChart3, Settings } from 'lucide-react';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(crossPlatformStrategyLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {
      title: 'Lesson not found',
    };
  }
  return generateLessonMetadata(lessonId, crossPlatformStrategyLessons, 'cross-platform-strategy');
}

// Page component with standardized config
export default async function CrossPlatformStrategyLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const config: LessonPageConfig<CrossPlatformStrategyLessonType> = {
    moduleName: 'cross-platform-strategy',
    moduleTitle: 'Chiến Lược Đa Nền Tảng',
    modulePath: '/learning/cross-platform-strategy',
    lessons: crossPlatformStrategyLessons,
    primaryColor: 'purple',
    secondaryColor: 'pink',
    gradientColors: 'from-slate-900 via-purple-900 to-slate-900',
    getFieldIcon: (field: string) => {
      switch (field) {
        case 'platformFeatures':
          return <Globe className="w-5 h-5" />;
        case 'contentAdaptation':
          return <Target className="w-5 h-5" />;
        case 'audienceSegmentation':
          return <BarChart3 className="w-5 h-5" />;
        case 'automationTools':
          return <Settings className="w-5 h-5" />;
        default:
          return <Globe className="w-5 h-5" />;
      }
    },
  };

  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
