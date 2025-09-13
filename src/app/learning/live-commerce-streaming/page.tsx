import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { liveCommerceStreamingModuleData, liveCommerceLessons } from '@/data/modules/live-commerce-streaming';
import { createModuleMetadata } from '@/utils/seo';

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
  return <ModulePageTemplate moduleData={liveCommerceStreamingModuleData} lessons={liveCommerceLessons} />;
}
