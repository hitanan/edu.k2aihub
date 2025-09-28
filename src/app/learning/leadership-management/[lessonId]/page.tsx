import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { leadershipManagementLessons, LeadershipLesson } from '@/data/modules/leadership-management';
import { leadershipManagementModuleData } from '@/data/modules/leadership-management-module';
import { PageProps } from '@/types';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(leadershipManagementLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, leadershipManagementLessons, 'leadership-management');
}

// Page component with standardized config
export default async function ModuleLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<LeadershipLesson> = {
    moduleName: 'leadership-management',
    moduleTitle: leadershipManagementModuleData.title,
    modulePath: '/learning/leadership-management',
    lessons: leadershipManagementLessons,
    primaryColor: 'yellow',
    secondaryColor: 'amber',
    gradientColors: 'from-yellow-500 to-amber-500',
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
