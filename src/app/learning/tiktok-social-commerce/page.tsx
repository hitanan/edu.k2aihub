import type { Metadata } from 'next';
import { createModuleMetadata } from '@/utils/seo';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { tiktokSocialCommerceLessons } from '@/data/tiktok-social-commerce';
import { tiktokSocialCommerceModuleData } from '@/data/tiktok-social-commerce-module';

export const metadata: Metadata = createModuleMetadata(
  tiktokSocialCommerceModuleData.title,
  tiktokSocialCommerceModuleData.description,
  ['tiktok shop', 'social commerce', 'livestream selling', 'e-commerce optimization', 'K2AI', 'học tập thông minh'],
  tiktokSocialCommerceModuleData.id,
);

export default function TikTokSocialCommercePage() {
  return <ModulePageTemplate moduleData={tiktokSocialCommerceModuleData} lessons={tiktokSocialCommerceLessons} />;
}
