import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { MetaverseVREducationLessons, MetaverseVRLessonType } from '@/data/metaverse-vr-education';
import { PageProps } from '@/types';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(MetaverseVREducationLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, MetaverseVREducationLessons, 'metaverse-vr-education');
}

// Page component with standardized config
export default async function MetaverseVRLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<MetaverseVRLessonType> = {
    moduleName: 'metaverse-vr-education',
    moduleTitle: 'Metaverse & Giáo Dục VR',
    modulePath: '/learning/metaverse-vr-education',
    lessons: MetaverseVREducationLessons,
    primaryColor: 'purple',
    secondaryColor: 'pink',
    gradientColors: 'from-slate-900 via-purple-900 to-slate-900',
    getFieldIcon: () => <span className="w-5 h-5">🥽</span>,
    getFieldValue: (lesson) => lesson.technologyLevel || lesson.tools?.join(', ') || '',
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
