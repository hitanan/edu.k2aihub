import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig } from '@/components/learning/LessonPageTemplate';
import { tiktokSocialCommerceLessons, TikTokSocialCommerceLessonType } from '@/data/tiktok-social-commerce';
import { PageProps } from '@/types';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(tiktokSocialCommerceLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, tiktokSocialCommerceLessons, 'tiktok-social-commerce');
}

// Page component with standardized config
export default async function TikTokSocialCommerceLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<TikTokSocialCommerceLessonType> = {
    moduleName: 'tiktok-social-commerce',
    moduleTitle: 'TikTok Shop & Social Commerce',
    modulePath: '/learning/tiktok-social-commerce',
    lessons: tiktokSocialCommerceLessons,
    primaryColor: 'pink',
    secondaryColor: 'red',
    gradientColors: 'from-slate-900 via-pink-900 to-slate-900',
  };
  
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
