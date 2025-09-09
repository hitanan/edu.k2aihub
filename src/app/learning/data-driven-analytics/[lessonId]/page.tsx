import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { dataDrivenAnalyticsLessons, DataDrivenAnalyticsLesson } from '@/data/data-driven-analytics';

import { TrendingUp, BarChart3, Target } from 'lucide-react';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(dataDrivenAnalyticsLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId || '', dataDrivenAnalyticsLessons, 'data-driven-analytics');
}

// Page component with standardized config
export default async function DataDrivenAnalyticsLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const config: LessonPageConfig<DataDrivenAnalyticsLesson> = {
    moduleName: 'data-driven-analytics',
    moduleTitle: 'Data-Driven Analytics',
    modulePath: '/learning/data-driven-analytics',
    lessons: dataDrivenAnalyticsLessons,
    primaryColor: 'slate',
    secondaryColor: 'blue',
    gradientColors: 'from-slate-900 via-blue-900 to-slate-900',
    getFieldIcon: (field: string) => {
      switch (field) {
        case 'analyticsTools':
          return <BarChart3 className="w-5 h-5" />;
        case 'metricCategories':
          return <Target className="w-5 h-5" />;
        case 'optimizationMethods':
          return <TrendingUp className="w-5 h-5" />;
        default:
          return <BarChart3 className="w-5 h-5" />;
      }
    },
    getFieldValue: (lesson: DataDrivenAnalyticsLesson) => {
      if (lesson.analyticsTools) return lesson.analyticsTools.join(', ');
      if (lesson.metricCategories) return lesson.metricCategories.join(', ');
      if (lesson.optimizationMethods) return lesson.optimizationMethods.join(', ');
      return 'Không có thông tin';
    },
  };

  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
