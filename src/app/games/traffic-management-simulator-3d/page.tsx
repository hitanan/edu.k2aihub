import TrafficManagementSimulator3D from '@/components/games/TrafficManagementSimulator3D'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffic Management Simulator 3D | K2AiHub',
  description: 'Interactive 3D traffic management simulation. Học smart city technology, traffic optimization, và thiết kế hệ thống giao thông thông minh với AI.',
  keywords: ['traffic management', 'smart city', 'traffic optimization', 'IoT', 'urban planning', '3D simulation', 'K2AI education'],
}

export default function TrafficManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TrafficManagementSimulator3D />
    </div>
  )
}