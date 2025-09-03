'use client';

import React, { useState, useCallback, useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, ThreeEvent } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import { useGameStore } from '@/utils/gameStore';

// City building types
const BUILDING_TYPES = [
  {
    id: 'residential',
    name: 'Khu Dân Cư',
    color: '#4CAF50',
    cost: 100,
    population: 50,
    jobs: 0,
    happiness: 10,
    energy: 0,
    income: 0,
  },
  {
    id: 'commercial',
    name: 'Khu Thương Mại',
    color: '#2196F3',
    cost: 150,
    population: 0,
    jobs: 15,
    happiness: 5,
    energy: 0,
    income: 20,
  },
  {
    id: 'industrial',
    name: 'Khu Công Nghiệp',
    color: '#FF9800',
    cost: 200,
    population: 0,
    jobs: 40,
    happiness: -5,
    energy: 0,
    income: 30,
  },
  {
    id: 'park',
    name: 'Công Viên',
    color: '#8BC34A',
    cost: 80,
    population: 0,
    jobs: 2,
    happiness: 30,
    energy: 0,
    income: 0,
  },
  {
    id: 'solar',
    name: 'Tấm Pin Mặt Trời',
    color: '#FFD700',
    cost: 120,
    population: 0,
    jobs: 3,
    happiness: 5,
    energy: 25,
    income: 0,
  },
  {
    id: 'hospital',
    name: 'Bệnh Viện',
    color: '#F44336',
    cost: 300,
    population: 0,
    jobs: 25,
    happiness: 20,
    energy: 0,
    income: 0,
  },
];

// Smart infrastructure types
const INFRASTRUCTURE = [
  {
    id: 'road',
    name: 'Đường Xá',
    color: '#757575',
    cost: 50,
    population: 0,
    jobs: 1,
    happiness: 2,
    energy: 0,
    income: 0,
  },
  {
    id: 'smart_light',
    name: 'Đèn LED Thông Minh',
    color: '#FFEB3B',
    cost: 30,
    population: 0,
    jobs: 0,
    happiness: 3,
    energy: 5,
    income: 0,
  },
  {
    id: 'traffic_light',
    name: 'Đèn Giao Thông AI',
    color: '#9C27B0',
    cost: 80,
    population: 0,
    jobs: 1,
    happiness: 5,
    energy: 0,
    income: 0,
  },
  {
    id: 'charging_station',
    name: 'Trạm Sạc Xe Điện',
    color: '#00BCD4',
    cost: 150,
    population: 0,
    jobs: 2,
    happiness: 8,
    energy: 15,
    income: 3,
  },
];

// Building component
function Building({
  position,
  type,
  onSelect,
  onDelete,
  isSelected,
}: {
  position: [number, number, number];
  type: (typeof BUILDING_TYPES)[0] | (typeof INFRASTRUCTURE)[0];
  onSelect: () => void;
  onDelete: () => void;
  isSelected: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle float animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.05;

      // Scale on selection or hover
      const targetScale = isSelected ? 1.2 : hovered ? 1.1 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (e.nativeEvent.shiftKey) {
      // Shift+click to delete
      onDelete();
    } else {
      onSelect();
    }
  };

  const height = type.id === 'park' ? 0.2 : type.id === 'hospital' ? 3 : 2;

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={handleClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, height, 1]} />
      <meshStandardMaterial
        color={type.color}
        emissive={isSelected ? type.color : '#000000'}
        emissiveIntensity={isSelected ? 0.2 : 0}
      />

      {/* Building label */}
      <Html position={[0, height + 0.5, 0]} center>
        <div className={`px-2 py-1 rounded text-xs font-bold text-white ${isSelected ? 'bg-blue-600' : 'bg-gray-800'}`}>
          {type.name}
          {hovered && <div className="text-xs mt-1">Shift+Click để xóa</div>}
        </div>
      </Html>
    </mesh>
  );
}

// City grid component
function CityGrid({ onGridClick }: { onGridClick: (position: [number, number, number]) => void }) {
  const gridSize = 10;
  const gridLines = [];

  // Create grid lines
  for (let i = -gridSize; i <= gridSize; i++) {
    const horizontalPoints = new Float32Array([-gridSize, 0, i, gridSize, 0, i]);
    const verticalPoints = new Float32Array([i, 0, -gridSize, i, 0, gridSize]);

    gridLines.push(
      <line key={`h${i}`}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[horizontalPoints, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#666666" opacity={0.5} transparent />
      </line>,
    );
    gridLines.push(
      <line key={`v${i}`}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[verticalPoints, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#666666" opacity={0.5} transparent />
      </line>,
    );
  }

  return (
    <group>
      {gridLines}
      {/* Clickable ground plane */}
      <mesh
        position={[0, -0.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        onClick={(event) => {
          const point = event.point;
          const x = Math.round(point.x);
          const z = Math.round(point.z);
          if (Math.abs(x) <= gridSize && Math.abs(z) <= gridSize) {
            onGridClick([x, 0, z]);
          }
        }}
      >
        <planeGeometry args={[gridSize * 2, gridSize * 2]} />
        <meshBasicMaterial color="#2d5a3d" transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

// Types
interface CityStats {
  population: number;
  jobs: number;
  happiness: number;
  energy: number;
  income: number;
}

interface Building {
  id: string;
  type: string;
  position: [number, number, number];
}

// Control panel component
function ControlPanel({
  selectedBuildingType,
  onSelectBuildingType,
  cityStats,
  budget,
}: {
  selectedBuildingType: string | null;
  onSelectBuildingType: (type: string | null) => void;
  cityStats: CityStats;
  budget: number;
}) {
  return (
    <div className="absolute top-4 left-4 bg-white bg-opacity-95 rounded-lg p-4 max-w-sm max-h-[80vh] overflow-y-auto z-50 shadow-lg">
      <h3 className="text-lg font-bold text-gray-800 mb-4">🏙️ Smart City Builder</h3>

      {/* Budget and Stats */}
      <div className="mb-4 p-3 bg-green-50 rounded-lg">
        <div className="text-lg font-bold text-green-800">💰 {budget.toLocaleString()} VNĐ</div>
        <div className="text-sm text-gray-600 space-y-1 mt-2">
          <div>👥 Dân số: {cityStats.population}</div>
          <div>💼 Việc làm: {cityStats.jobs}</div>
          <div>😊 Hạnh phúc: {cityStats.happiness}%</div>
          <div>⚡ Năng lượng: {cityStats.energy}</div>
        </div>
      </div>

      {/* Building Types */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">🏢 Loại Công Trình</h4>
        <div className="grid grid-cols-1 gap-2">
          {BUILDING_TYPES.map((type) => (
            <button
              key={type.id}
              onClick={() => onSelectBuildingType(type.id)}
              className={`p-2 rounded text-left text-sm ${
                selectedBuildingType === type.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              <div className="font-medium">{type.name}</div>
              <div className="text-xs opacity-75">💰 {type.cost.toLocaleString()} VNĐ</div>
            </button>
          ))}
        </div>
      </div>

      {/* Infrastructure */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">🛣️ Hạ Tầng</h4>
        <div className="grid grid-cols-1 gap-2">
          {INFRASTRUCTURE.map((infra) => (
            <button
              key={infra.id}
              onClick={() => onSelectBuildingType(infra.id)}
              className={`p-2 rounded text-left text-sm ${
                selectedBuildingType === infra.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              <div className="font-medium">{infra.name}</div>
              <div className="text-xs opacity-75">💰 {infra.cost.toLocaleString()} VNĐ</div>
            </button>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-2">
        <button
          onClick={() => onSelectBuildingType(null)}
          className="w-full px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors text-sm"
        >
          ❌ Hủy Chọn
        </button>
      </div>
    </div>
  );
}

// Instructions component
function Instructions({ onStart }: { onStart: () => void }) {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-2xl mx-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🏙️ Smart City Planner 3D</h2>

        <div className="text-left space-y-4 mb-6">
          <p className="text-gray-600">
            Xây dựng thành phố thông minh bền vững với công nghệ IoT, năng lượng sạch và hạ tầng hiện đại!
          </p>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-2">🎮 Cách chơi:</h3>
            <ul className="text-blue-700 space-y-1 text-sm">
              <li>
                • <strong>Chọn loại công trình</strong> từ bảng điều khiển
              </li>
              <li>
                • <strong>Click vào lưới</strong> để xây dựng
              </li>
              <li>
                • <strong>Quản lý ngân sách</strong> và phát triển bền vững
              </li>
              <li>
                • <strong>Cân bằng</strong> dân số, việc làm, và hạnh phúc
              </li>
              <li>
                • <strong>Sử dụng năng lượng sạch</strong> và công nghệ thông minh
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-green-800 mb-2">🎯 Mục tiêu:</h3>
            <p className="text-green-700 text-sm">
              Tạo ra thành phố thông minh với dân số hạnh phúc, kinh tế phát triển, và môi trường xanh sạch!
            </p>
          </div>
        </div>

        <button
          onClick={onStart}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-green-600 transition-all transform hover:scale-105"
        >
          🚀 Bắt Đầu Xây Dựng
        </button>
      </div>
    </div>
  );
}

// Main component props
interface SmartCityPlanner3DProps {
  onComplete?: (success: boolean, rawScore?: number) => void;
  timeLeft?: number;
  onRestart?: () => void;
}

export default function SmartCityPlanner3D({ onComplete, timeLeft, onRestart }: SmartCityPlanner3DProps = {}) {
  const { smartCity, setSmartCityState } = useGameStore();
  const [gameStarted, setGameStarted] = useState(true); // Start directly with the game
  const [selectedBuildingType, setSelectedBuildingType] = useState<string | null>('residential');
  const [selectedBuilding, setSelectedBuilding] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Use gameStore data
  const buildings = smartCity.buildings;
  const budget = smartCity.budget;

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      // Enter fullscreen
      const gameContainer = document.getElementById('smart-city-game-container');
      if (gameContainer) {
        try {
          await gameContainer.requestFullscreen();
          setIsFullscreen(true);
        } catch (error) {
          console.error('Error entering fullscreen:', error);
          // Fallback to CSS fullscreen
          setIsFullscreen(true);
        }
      }
    } else {
      // Exit fullscreen
      try {
        await document.exitFullscreen();
        setIsFullscreen(false);
      } catch (error) {
        console.error('Error exiting fullscreen:', error);
        // Fallback to CSS fullscreen
        setIsFullscreen(false);
      }
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const cityStats = useMemo(() => {
    return buildings.reduce(
      (stats, building) => {
        const type = [...BUILDING_TYPES, ...INFRASTRUCTURE].find((t) => t.id === building.type);
        if (type) {
          return {
            population: stats.population + (type.population || 0),
            jobs: stats.jobs + (type.jobs || 0),
            happiness: Math.min(100, stats.happiness + (type.happiness || 0) / 10),
            energy: stats.energy + (type.energy || 0),
            income: stats.income + (type.income || 0),
          };
        }
        return stats;
      },
      { population: 0, jobs: 0, happiness: 50, energy: 0, income: 0 },
    );
  }, [buildings]);

  const handleGridClick = useCallback(
    (position: [number, number, number]) => {
      if (!selectedBuildingType) return;

      const type = [...BUILDING_TYPES, ...INFRASTRUCTURE].find((t) => t.id === selectedBuildingType);
      if (!type || budget < type.cost) return;

      // Check if position is already occupied
      const occupied = buildings.some((b) => b.position[0] === position[0] && b.position[2] === position[2]);
      if (occupied) return;

      const newBuilding = {
        id: `${selectedBuildingType}-${Date.now()}`,
        type: selectedBuildingType,
        position,
        level: 1,
      };

      // Update gameStore with new building and reduced budget
      setSmartCityState({
        buildings: [...buildings, newBuilding],
        budget: budget - type.cost,
        lastSaved: Date.now(),
      });
    },
    [selectedBuildingType, budget, buildings, setSmartCityState],
  );

  const handleBuildingSelect = useCallback(
    (buildingId: string) => {
      setSelectedBuilding(buildingId === selectedBuilding ? null : buildingId);
    },
    [selectedBuilding],
  );

  const handleBuildingDelete = useCallback(
    (buildingId: string) => {
      const updatedBuildings = buildings.filter((b) => b.id !== buildingId);
      setSmartCityState({
        buildings: updatedBuildings,
        lastSaved: Date.now(),
      });
      setSelectedBuilding(null);
    },
    [buildings, setSmartCityState],
  );

  // Generate income over time - auto-save to gameStore
  React.useEffect(() => {
    if (!gameStarted) return;

    const interval = setInterval(() => {
      setSmartCityState({
        budget: budget + cityStats.income,
        lastSaved: Date.now(),
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [gameStarted, cityStats.income, budget, setSmartCityState]);

  if (!gameStarted) {
    return <Instructions onStart={() => setGameStarted(true)} />;
  }

  return (
    <div
      id="smart-city-game-container"
      className={`relative w-full ${isFullscreen ? 'fixed inset-0 z-50' : 'h-screen'} bg-gradient-to-b from-sky-200 to-green-200`}
    >
      <ControlPanel
        selectedBuildingType={selectedBuildingType}
        onSelectBuildingType={setSelectedBuildingType}
        cityStats={cityStats}
        budget={budget}
      />

      {/* Fullscreen button */}
      <button
        onClick={toggleFullscreen}
        className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded z-10"
      >
        {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
      </button>

      <Canvas camera={{ position: [15, 12, 15], fov: 60 }} gl={{ antialias: false, alpha: false }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[0, 8, 0]} intensity={0.3} />

        <CityGrid onGridClick={handleGridClick} />

        {/* Render buildings */}
        {buildings.map((building) => {
          const type = [...BUILDING_TYPES, ...INFRASTRUCTURE].find((t) => t.id === building.type);
          if (!type) return null;

          return (
            <Building
              key={building.id}
              position={building.position}
              type={type}
              onSelect={() => handleBuildingSelect(building.id)}
              onDelete={() => handleBuildingDelete(building.id)}
              isSelected={selectedBuilding === building.id}
            />
          );
        })}

        <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2.2} minDistance={8} maxDistance={30} />
      </Canvas>
    </div>
  );
}
