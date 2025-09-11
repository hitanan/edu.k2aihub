import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import GovTechServiceDesigner from '@/components/games/GovTechServiceDesigner';

export const metadata: Metadata = createGameMetadata('gov-tech-service-designer');

export default function GovTechServiceDesignerPage() {
  return <GovTechServiceDesigner />;
}
