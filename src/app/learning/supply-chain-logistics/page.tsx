import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { supplyChainLogisticsLessons } from '@/data/modules/supply-chain-logistics';
import { createModuleMetadata } from '@/utils/seo';
import { supplyChainLogisticsModuleData } from '@/data/modules/supply-chain-logistics';

export const metadata: Metadata = createModuleMetadata(
  supplyChainLogisticsModuleData.title,
  supplyChainLogisticsModuleData.description,
  [
    'supply chain',
    'logistics',
    'inventory management',
    'distribution',
    'supply chain optimization',
    'warehouse management',
    'vietnam logistics',
    'k2aihub',
  ],
  supplyChainLogisticsModuleData.id,
);

export default function SupplyChainLogisticsPage() {
  return <ModulePageTemplate moduleData={supplyChainLogisticsModuleData} lessons={supplyChainLogisticsLessons} />;
}
