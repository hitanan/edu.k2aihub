import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { mentalHealthLessons, MentalHealthLessonType } from '@/data/mental-health-tech';
import { PageProps } from '@/types';
import { BrainCircuit } from 'lucide-react';
import { createModuleMetadata } from '@/utils/seo';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(mentalHealthLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const lessonId = params.lessonId;
  if (!lessonId) {
    return createModuleMetadata(
      'Mental Health & Technology',
      'Khám phá sự giao thoa giữa sức khỏe tâm thần và công nghệ, từ các ứng dụng thiền định đến AI trong trị liệu.',
      ['sức khỏe tâm thần', 'công nghệ', 'wellness', 'AI trị liệu', 'K2AI'],
      'mental-health-tech',
    );
  }
  return generateLessonMetadata(lessonId, mentalHealthLessons, 'mental-health-tech');
}

// Page component with standardized config
export default function MentalHealthTechLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<MentalHealthLessonType> = {
    moduleName: 'mental-health-tech',
    moduleTitle: 'Mental Health & Technology',
    modulePath: '/learning/mental-health-tech',
    lessons: mentalHealthLessons,
    primaryColor: 'emerald',
    secondaryColor: 'teal',
    gradientColors: 'from-slate-900 via-emerald-900 to-slate-900',
    getFieldIcon: () => <BrainCircuit className="w-5 h-5" />,
    getFieldValue: (lesson) => lesson.wellnessImpact || 'N/A',
  };
  const lessonId = params.lessonId;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
