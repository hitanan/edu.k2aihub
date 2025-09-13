import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { microInfluencerEconomyModule } from '@/data/modules/micro-influencer-economy';
import type { MicroInfluencerLesson } from '@/types/lesson-base';
import { Users } from 'lucide-react';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(microInfluencerEconomyModule.lessons || []);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {
      title: 'Bài học không tìm thấy',
      description: 'Không thể tìm thấy bài học yêu cầu trong khóa học Micro-Influencer Economy.',
    };
  }
  return generateLessonMetadata(lessonId, microInfluencerEconomyModule.lessons || [], 'micro-influencer-economy');
}

// Page component with standardized config
export default async function MicroInfluencerEconomyLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  const config: LessonPageConfig<MicroInfluencerLesson> = {
    moduleName: 'micro-influencer-economy',
    moduleTitle: 'Micro-Influencer Economy',
    modulePath: '/learning/micro-influencer-economy',
    lessons: microInfluencerEconomyModule.lessons || [],
    primaryColor: 'pink', // Primary theme color
    secondaryColor: 'rose', // Secondary theme color
    gradientColors: 'from-slate-900 via-pink-900 to-rose-900', // Background gradient
    getFieldIcon: () => <Users className="w-5 h-5" />, // Optional
    getFieldValue: () => '', // Optional
  };
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
