import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { microInfluencerEconomyLessons } from '@/data/micro-influencer-economy';
import { createModuleMetadata } from '@/utils/seo';
import { microInfluencerEconomyModuleData } from '@/data/micro-influencer-economy-module';

export const metadata: Metadata = createModuleMetadata(
  microInfluencerEconomyModuleData.title,
  microInfluencerEconomyModuleData.description,
  [
    'micro influencer',
    'influencer marketing',
    'personal branding',
    'social media monetization',
    'creator economy',
    'vietnamese influencers',
    'brand partnerships',
    'k2aihub',
  ],
  microInfluencerEconomyModuleData.id,
);

export default function MicroInfluencerEconomyPage() {
  return <ModulePageTemplate moduleData={microInfluencerEconomyModuleData} lessons={microInfluencerEconomyLessons} />;
}
