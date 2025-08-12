import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { DataScienceLessons, DataScienceLessonData } from '@/data/data-science';
import { PageProps } from '@/types';
import { Database, BarChart, Brain } from 'lucide-react';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(DataScienceLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, DataScienceLessons);
}

// Page component with standardized config
export default async function DataScienceAnalyticsLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<DataScienceLessonData> = {
    moduleName: 'data-science-analytics',
    moduleTitle: 'Data Science & Big Data Analytics',
    modulePath: '/learning/data-science-analytics',
    lessons: DataScienceLessons,
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
    getFieldValue: (lesson) => {
      if (lesson.tools) return lesson.tools.join(', ');
      if (lesson.algorithms) return lesson.algorithms.join(', ');
      if (lesson.dataScienceConcepts) return lesson.dataScienceConcepts.join(', ');
      return 'Không có thông tin';
    }
  };

  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
