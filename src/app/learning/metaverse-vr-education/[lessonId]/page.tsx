import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { metaverseVREducationModule } from '@/data/modules/metaverse-vr-education';
import type { MetaverseVRLesson as MetaverseVRLessonType } from '@/types/lesson-base';
import { createModuleMetadata } from '@/utils/seo';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(metaverseVREducationModule.lessons || []);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return createModuleMetadata(
      'Metaverse & Giáo Dục VR',
      'Khám phá tiềm năng của metaverse và thực tế ảo (VR) trong giáo dục tương lai.',
      ['metaverse', 'VR', 'giáo dục', 'công nghệ giáo dục', 'K2AI'],
      'metaverse-vr-education',
    );
  }
  return generateLessonMetadata(lessonId, metaverseVREducationModule.lessons || [], 'metaverse-vr-education');
}

// Page component with standardized config
export default async function MetaverseVRLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const config: LessonPageConfig<MetaverseVRLessonType> = {
    moduleName: 'metaverse-vr-education',
    moduleTitle: 'Metaverse & Giáo Dục VR',
    modulePath: '/learning/metaverse-vr-education',
    lessons: metaverseVREducationModule.lessons || [],
    primaryColor: 'purple',
    secondaryColor: 'pink',
    gradientColors: 'from-slate-900 via-purple-900 to-slate-900',
    getFieldIcon: () => <span className="w-5 h-5">🥽</span>,
    getFieldValue: (lesson) => lesson.technologyLevel || lesson.tools?.join(', ') || '',
  };
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
