'use client';

import dynamic from 'next/dynamic';

// Dynamic import for the game component
const NeuralNetworkBuilder3D = dynamic(
  () => import('@/components/games/NeuralNetworkBuilder3D'),
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-white">Đang tải Neural Network Builder 3D Advanced...</p>
        </div>
      </div>
    ),
  }
);

export default function NeuralNetworkBuilder3DAdvancedPage() {
  return <NeuralNetworkBuilder3D />;
}