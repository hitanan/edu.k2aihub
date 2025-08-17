'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { VIRTUAL_CHEMISTRY_LAB_3D_DATA } from '@/data/virtualChemistryLab3D';

// Dynamic import để tránh SSR issues với Three.js
const VirtualChemistryLab3D = dynamic(() => import('./individual/VirtualChemistryLab3D'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Đang tải phòng thí nghiệm 3D...</p>
      </div>
    </div>
  ),
});

export default function VirtualChemistryLab3DGame() {
  useEffect(() => {
    // Preload Three.js modules
    const preloadThreeJS = async () => {
      try {
        await import('three');
        await import('@react-three/fiber');
        await import('@react-three/drei');
      } catch (error) {
        console.log('Three.js preload optional:', error);
      }
    };
    preloadThreeJS();
  }, []);

  return (
    <div className="w-full h-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* 3D Game Canvas */}
      <div className="w-full h-screen">
        <VirtualChemistryLab3D gameData={VIRTUAL_CHEMISTRY_LAB_3D_DATA} />
      </div>
    </div>
  );
}
