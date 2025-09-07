import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { liveCommerceStreamingLessons } from '@/data/live-commerce-streaming';
import { createModuleMetadata } from '@/utils/seo';
import { liveCommerceStreamingModuleData } from '@/data/live-commerce-streaming-module';

export const metadata: Metadata = createModuleMetadata(
  liveCommerceStreamingModuleData.title,
  liveCommerceStreamingModuleData.description,
  [
    'live commerce',
    'livestream selling',
    'social commerce',
    'tiktok shop',
    'facebook live',
    'streaming business',
    'vietnamese livestream',
    'online selling',
    'k2aihub',
  ],
  liveCommerceStreamingModuleData.id,
);

export default function LiveCommerceStreamingPage() {
  return <ModulePageTemplate moduleData={liveCommerceStreamingModuleData} lessons={liveCommerceStreamingLessons} />;
}
