import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { dataScienceLessons, DataScienceAnalyticsLesson } from '@/data/data-science-analytics';

import { Database, BarChart, Brain } from 'lucide-react';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(dataScienceLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId || '', dataScienceLessons, 'data-science-analytics');
}

// Page component with standardized config
export default async function DataScienceAnalyticsLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const config: LessonPageConfig<DataScienceAnalyticsLesson> = {
    moduleName: 'data-science-analytics',
    moduleTitle: 'Data Science & Big Data Analytics',
    modulePath: '/learning/data-science-analytics',
    lessons: dataScienceLessons,
    primaryColor: 'indigo',
    secondaryColor: 'purple',
    gradientColors: 'from-slate-900 via-indigo-900 to-slate-900',
    getFieldIcon: (field: string) => {
      switch (field) {
        case 'tools':
          return <Database className="w-5 h-5" />;
        case 'algorithms':
          return <Brain className="w-5 h-5" />;
        case 'dataScienceConcepts':
          return <BarChart className="w-5 h-5" />;
        default:
          return <Database className="w-5 h-5" />;
      }
    },
    getFieldValue: (lesson: DataScienceAnalyticsLesson) => {
      if (lesson.tools) return lesson.tools.join(', ');
      if (lesson.dataTypes) return lesson.dataTypes.join(', ');
      if (lesson.programmingLanguages) return lesson.programmingLanguages.join(', ');
      return 'Không có thông tin';
    },
  };

  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
