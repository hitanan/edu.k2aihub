import FactoryAutomationSimulator3D from '@/components/games/FactoryAutomationSimulator3D';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Factory Automation Simulator 3D | K2AiHub',
  description:
    'Interactive 3D factory automation simulation. Học Industry 4.0, smart manufacturing, và thiết kế hệ thống tự động hóa nhà máy với visualization 3D thực tế.',
  keywords: [
    'factory automation',
    'industry 4.0',
    'smart manufacturing',
    'IoT',
    'robotics',
    '3D simulation',
    'K2AI education',
  ],
};

export default function FactoryAutomationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FactoryAutomationSimulator3D />
    </div>
  );
}
