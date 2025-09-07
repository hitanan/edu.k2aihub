import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { shortVideoMasteryLessons } from '@/data/short-video-mastery';
import { createModuleMetadata } from '@/utils/seo';
import { shortVideoMasteryModuleData } from '@/data/short-video-mastery-module';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  shortVideoMasteryModuleData.title,
  shortVideoMasteryModuleData.description,
  ['short form video', 'viral content', 'video editing', 'algorithm optimization', 'K2AI', 'học tập thông minh'],
  shortVideoMasteryModuleData.id,
);

export default function ShortVideoMasteryPage() {
  return <ModulePageTemplate moduleData={shortVideoMasteryModuleData} lessons={shortVideoMasteryLessons} />;
}
