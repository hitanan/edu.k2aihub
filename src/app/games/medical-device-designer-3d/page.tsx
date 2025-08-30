import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import MedicalDeviceDesigner3D from '@/components/games/MedicalDeviceDesigner3D';
import { Suspense } from 'react';

export const metadata: Metadata = createGameMetadata('medical-device-designer-3d');

export default function MedicalDeviceDesigner3DPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-white text-lg">Đang tải Medical Device Designer 3D...</p>
            </div>
          </div>
        }
      >
        <MedicalDeviceDesigner3D />
      </Suspense>

      {/* Game Info Panel */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 pointer-events-none">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-white mb-2">🏥 Medical Device Designer 3D</h1>
          <p className="text-gray-300 mb-4">Thiết kế và đặt thiết bị y tế để cứu chữa bệnh nhân trong môi trường 3D</p>
          <div className="flex justify-center gap-8 text-sm text-gray-400">
            <div>
              <span className="text-red-400">●</span> Heart & Cardiovascular
            </div>
            <div>
              <span className="text-blue-400">●</span> Pacemaker & Monitors
            </div>
            <div>
              <span className="text-green-400">●</span> Stents & Implants
            </div>
            <div>
              <span className="text-yellow-400">●</span> Prosthetics
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
