import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { crossBorderEcommerceModuleData, crossBorderEcommerceLessons } from '@/data/modules/cross-border-ecommerce';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  crossBorderEcommerceModuleData.title,
  crossBorderEcommerceModuleData.description,
  [
    'cross-border-ecommerce',
    'thuong-mai-dien-tu',
    'kinh-doanh-quoc-te',
    'ban-hang-online',
    'logistics',
    'payment-gateway',
    'K2AI',
  ],
  crossBorderEcommerceModuleData.id,
);

export default function CrossBorderEcommerceMainPage() {
  return <ModulePageTemplate moduleData={crossBorderEcommerceModuleData} lessons={crossBorderEcommerceLessons} />;
}
