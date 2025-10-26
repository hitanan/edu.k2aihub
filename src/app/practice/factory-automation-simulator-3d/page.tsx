import FactoryAutomationSimulator3D from '@/components/games/FactoryAutomationSimulator3D';
import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';

export const metadata: Metadata = createGameMetadata('factory-automation-simulator');

export default function FactoryAutomationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FactoryAutomationSimulator3D />
    </div>
  );
}
