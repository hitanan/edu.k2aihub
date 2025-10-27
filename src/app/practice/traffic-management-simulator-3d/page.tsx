import TrafficManagementSimulator3D from '@/components/practice/TrafficManagementSimulator3D';
import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';

export const metadata: Metadata = createGameMetadata('traffic-management-simulator-3d');

export default function TrafficManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TrafficManagementSimulator3D />
    </div>
  );
}
