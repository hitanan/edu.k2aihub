'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { VIRTUAL_CHEMISTRY_LAB_3D_DATA } from '@/data/virtualChemistryLab3D';

// Dynamic import để tránh SSR issues với Three.js
const VirtualChemistryLab3D = dynamic(() => import('./VirtualChemistryLab3D'), {
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
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">🧪 Virtual Chemistry Lab 3D</h1>
          <p className="text-gray-600">Khám phá thế giới hóa học 3D - Xây dựng phân tử và thí nghiệm tương tác</p>
        </div>
      </div>

      {/* Game Instructions */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">📝 Hướng dẫn chơi</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <h3 className="font-medium text-gray-800 mb-2">🎯 Mục tiêu:</h3>
              <ul className="space-y-1">
                <li>• Xây dựng các phân tử hóa học trong không gian 3D</li>
                <li>• Học về cấu trúc nguyên tử và liên kết</li>
                <li>• Sử dụng thiết bị phòng thí nghiệm</li>
                <li>• Hoàn thành các thử thách khoa học</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-2">🎮 Điều khiển:</h3>
              <ul className="space-y-1">
                <li>
                  • <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">Chuột trái</kbd> - Chọn và kéo nguyên tử
                </li>
                <li>
                  • <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">Chuột phải</kbd> - Xoay camera
                </li>
                <li>
                  • <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">Scroll</kbd> - Zoom in/out
                </li>
                <li>
                  • <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">Spacebar</kbd> - Tạo liên kết
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Available Molecules */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">🧬 Phân tử có sẵn</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {VIRTUAL_CHEMISTRY_LAB_3D_DATA.molecules.map((molecule) => (
              <div key={molecule.id} className="border rounded-lg p-3 text-center hover:bg-gray-50">
                <div className="text-2xl mb-2">
                  {molecule.id === 'water' && '💧'}
                  {molecule.id === 'methane' && '⛽'}
                  {molecule.id === 'co2' && '🌫️'}
                  {molecule.id === 'ammonia' && '💨'}
                </div>
                <h3 className="font-medium text-sm">{molecule.name}</h3>
                <p className="text-xs text-gray-500">{molecule.formula}</p>
                <p className="text-xs text-blue-600 mt-1">{molecule.points} điểm</p>
              </div>
            ))}
          </div>
        </div>

        {/* Lab Equipment */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">🔬 Thiết bị phòng thí nghiệm</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {VIRTUAL_CHEMISTRY_LAB_3D_DATA.equipment.map((item) => (
              <div key={item.id} className="border rounded-lg p-3 text-center text-xs hover:bg-gray-50">
                <div className="text-lg mb-1">
                  {item.id === 'beaker' && '🥤'}
                  {item.id === 'flask' && '🧪'}
                  {item.id === 'burner' && '🔥'}
                  {item.id === 'pipette' && '💉'}
                  {item.id === 'ph-meter' && '📊'}
                  {item.id === 'test-tube' && '🧪'}
                  {item.id === 'microscope' && '🔬'}
                </div>
                <p className="font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3D Game Canvas */}
      <div className="w-full h-screen">
        <VirtualChemistryLab3D/>
      </div>
    </div>
  );
}
