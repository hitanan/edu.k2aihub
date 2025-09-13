import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { createModuleMetadata } from '@/utils/seo';
import { microInfluencerEconomyModule } from '@/data/modules/micro-influencer-economy';

export const metadata: Metadata = createModuleMetadata(
  microInfluencerEconomyModule.title,
  microInfluencerEconomyModule.description,
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
  microInfluencerEconomyModule.id,
);

export default function MicroInfluencerEconomyPage() {
  return <ModulePageTemplate moduleData={microInfluencerEconomyModule} lessons={microInfluencerEconomyModule.lessons || []} />;
}
