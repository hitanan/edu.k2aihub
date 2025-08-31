/* eslint-disable @typescript-eslint/no-explicit-any */
// Enhanced Space Station Builder 3D Game with Drag & Drop, Delete, and Persistent Storage
'use client';

import React, { useState, useCallback, useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { useGameStore } from '@/utils/gameStore';
import { Trash2, RotateCcw, Save } from 'lucide-react';

// Space station module types
const STATION_MODULES = [
  { id: 'command', name: 'Khoang Chỉ Huy', color: '#4CAF50', cost: 500, power: -10, crew: 2 },
  { id: 'lab', name: 'Phòng Thí Nghiệm', color: '#2196F3', cost: 400, power: -15, research: 10 },
  { id: 'solar', name: 'Tấm Pin Mặt Trời', color: '#FFD700', cost: 300, power: 25 },
  { id: 'habitat', name: 'Khu Dân Cư', color: '#FF9800', cost: 350, power: -8, crew: 4 },
  { id: 'storage', name: 'Kho Chứa', color: '#9C27B0', cost: 200, power: -5, storage: 100 },
  { id: 'communication', name: 'Truyền Thông', color: '#00BCD4', cost: 250, power: -12, range: 50 },
  { id: 'docking', name: 'Bến Đỗ Tàu', color: '#795548', cost: 300, power: -8, capacity: 2 },
  { id: 'greenhouse', name: 'Nhà Kính', color: '#8BC34A', cost: 450, power: -20, food: 15 },
];

// Types
interface StationStats {
  power: number;
  crew: number;
  research: number;
  food: number;
  storage: number;
}

interface StationModule {
  id: string;
  type: string;
  position: [number, number, number];
}

// Enhanced Space Station Module Component with drag and delete
function EnhancedStationModule({
  position,
  module,
  stationModule,
  onSelect,
  onDrag,
  onDelete,
  isSelected,
  isDragging,
}: {
  position: [number, number, number];
  module: (typeof STATION_MODULES)[0];
  stationModule: StationModule;
  onSelect: () => void;
  onDrag: (newPosition: [number, number, number]) => void;
  onDelete: () => void;
  isSelected: boolean;
  isDragging: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [dragStart, setDragStart] = useState<THREE.Vector3 | null>(null);

  useFrame((state) => {
    if (meshRef.current && !isDragging) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;

      const targetScale = isSelected ? 1.3 : hovered ? 1.1 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  const handleClick = (e: any) => {
    e.stopPropagation();
    if (e.shiftKey) {
      onDelete();
    } else {
      onSelect();
    }
  };

  const handlePointerDown = (e: any) => {
    e.stopPropagation();
    if (e.button === 0 && isSelected) {
      setDragStart(new THREE.Vector3().copy(e.point));
    }
  };

  const handlePointerMove = (e: any) => {
    if (dragStart && isSelected) {
      e.stopPropagation();
      const newPosition: [number, number, number] = [e.point.x, e.point.y, e.point.z];
      onDrag(newPosition);
    }
  };

  const handlePointerUp = () => {
    setDragStart(null);
  };

  const moduleShape = module.id === 'solar' ? 'plane' : module.id === 'communication' ? 'cone' : 'cylinder';

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={handleClick}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {moduleShape === 'plane' && <planeGeometry args={[2, 3]} />}
      {moduleShape === 'cone' && <coneGeometry args={[0.5, 2, 8]} />}
      {moduleShape === 'cylinder' && <cylinderGeometry args={[0.8, 0.8, 2, 8]} />}

      <meshStandardMaterial
        color={module.color}
        emissive={module.color}
        emissiveIntensity={isSelected ? 0.3 : hovered ? 0.2 : 0.1}
        metalness={0.7}
        roughness={0.3}
        transparent={isDragging}
        opacity={isDragging ? 0.7 : 1}
      />

      {/* Module label */}
      <Html position={[0, 2, 0]} center>
        <div
          className={`px-2 py-1 rounded text-xs font-bold text-white ${
            isSelected ? 'bg-blue-600' : hovered ? 'bg-gray-700' : 'bg-gray-800'
          }`}
        >
          {module.name}
          {isSelected && <div className="text-xs mt-1">Shift+Click để xóa | Drag để di chuyển</div>}
        </div>
      </Html>
    </mesh>
  );
}

// Earth component with detailed realistic appearance
function Earth() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  // Create earth texture with procedural approach
  const earthTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    // Create base earth colors
    const gradient = ctx.createLinearGradient(0, 0, 0, 256);
    gradient.addColorStop(0, '#1e3a8a'); // Deep blue (polar)
    gradient.addColorStop(0.3, '#3b82f6'); // Ocean blue
    gradient.addColorStop(0.5, '#22c55e'); // Land green
    gradient.addColorStop(0.7, '#f59e0b'); // Desert yellow
    gradient.addColorStop(1, '#ffffff'); // Ice white (polar)
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 256);

    // Add continent-like shapes
    ctx.fillStyle = '#166534'; // Darker green for continents
    
    // Simplified continent shapes
    const continents = [
      // Europe/Africa-like
      { x: 120, y: 80, width: 60, height: 100 },
      // Asia-like  
      { x: 200, y: 60, width: 100, height: 80 },
      // Americas-like
      { x: 350, y: 70, width: 40, height: 120 },
      // Australia-like
      { x: 280, y: 140, width: 30, height: 25 }
    ];

    continents.forEach(continent => {
      ctx.beginPath();
      ctx.roundRect(continent.x, continent.y, continent.width, continent.height, 10);
      ctx.fill();
    });

    // Add cloud layer
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 256;
      const size = 20 + Math.random() * 40;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }

    return new THREE.CanvasTexture(canvas);
  }, []);

  return (
    <group position={[0, -50, 0]}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[15, 64, 32]} />
        <meshStandardMaterial 
          map={earthTexture}
          color="#ffffff"
          emissive="#001122" 
          emissiveIntensity={0.1}
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>
      {/* Atmosphere glow effect */}
      <mesh scale={[1.05, 1.05, 1.05]}>
        <sphereGeometry args={[15, 32, 16]} />
        <meshBasicMaterial 
          color="#4da6ff" 
          transparent 
          opacity={0.15}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

// Connection lines between modules
function ConnectionLines({ modules }: { modules: StationModule[] }) {
  if (modules.length < 2) return null;

  const lines = [];
  for (let i = 0; i < modules.length - 1; i++) {
    const start = modules[i].position;
    const end = modules[i + 1].position;

    const points = new Float32Array([start[0], start[1], start[2], end[0], end[1], end[2]]);

    lines.push(
      <line key={`line-${i}`}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[points, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#FFFFFF" opacity={0.6} transparent />
      </line>,
    );
  }

  return <group>{lines}</group>;
}

// Enhanced Control Panel with save/load functionality
function EnhancedControlPanel({
  selectedModuleType,
  onSelectModuleType,
  stationStats,
  budget,
  onSave,
  onLoad,
  onReset,
  hasProgress,
}: {
  selectedModuleType: string | null;
  onSelectModuleType: (type: string | null) => void;
  stationStats: StationStats;
  budget: number;
  onSave: () => void;
  onLoad: () => void;
  onReset: () => void;
  hasProgress: boolean;
}) {
  return (
    <div className="absolute top-4 left-4 bg-black bg-opacity-90 text-white rounded-lg p-4 max-w-sm max-h-[80vh] overflow-y-auto z-50 shadow-2xl">
      <h3 className="text-lg font-bold mb-4">🚀 Space Station Builder</h3>

      {/* Save/Load Controls */}
      <div className="mb-4 grid grid-cols-3 gap-2">
        <button
          onClick={onSave}
          className="flex items-center justify-center p-2 bg-green-600 hover:bg-green-500 rounded text-xs"
          title="Lưu trạng thái game"
        >
          <Save size={16} />
        </button>
        <button
          onClick={onLoad}
          disabled={!hasProgress}
          className={`flex items-center justify-center p-2 rounded text-xs ${
            hasProgress ? 'bg-blue-600 hover:bg-blue-500' : 'bg-gray-600 cursor-not-allowed'
          }`}
          title="Tải trạng thái đã lưu"
        >
          Load
        </button>
        <button
          onClick={onReset}
          className="flex items-center justify-center p-2 bg-red-600 hover:bg-red-500 rounded text-xs"
          title="Reset game"
        >
          <RotateCcw size={16} />
        </button>
      </div>

      {/* Budget and Stats */}
      <div className="mb-4 p-3 bg-blue-900 bg-opacity-50 rounded-lg">
        <div className="text-lg font-bold text-yellow-400">💰 {budget.toLocaleString()} Credits</div>
        <div className="text-sm space-y-1 mt-2">
          <div className={`${stationStats.power >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            ⚡ Điện: {stationStats.power}
          </div>
          <div className="text-blue-400">👨‍🚀 Phi hành đoàn: {stationStats.crew}</div>
          <div className="text-purple-400">🔬 Nghiên cứu: {stationStats.research}/h</div>
          <div className="text-green-400">🌱 Thực phẩm: {stationStats.food}/h</div>
          <div className="text-orange-400">📦 Lưu trữ: {stationStats.storage}</div>
        </div>
      </div>

      {/* Module Types */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">🛰️ Modules</h4>
        <div className="grid grid-cols-1 gap-2">
          {STATION_MODULES.map((module) => (
            <button
              key={module.id}
              onClick={() => onSelectModuleType(module.id)}
              disabled={budget < module.cost}
              className={`p-2 rounded text-left text-sm transition-all ${
                selectedModuleType === module.id
                  ? 'bg-blue-600 text-white'
                  : budget >= module.cost
                    ? 'bg-gray-700 hover:bg-gray-600 text-white'
                    : 'bg-gray-800 text-gray-500 cursor-not-allowed'
              }`}
            >
              <div className="font-medium">{module.name}</div>
              <div className="text-xs opacity-75">💰 {module.cost.toLocaleString()} Credits</div>
              {module.power && (
                <div className="text-xs opacity-75">
                  ⚡ {module.power > 0 ? '+' : ''}
                  {module.power}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="text-xs text-gray-400 border-t border-gray-700 pt-3">
        <div className="mb-2 font-semibold">📖 Hướng dẫn:</div>
        <ul className="space-y-1">
          <li>• Click trên không gian để đặt module</li>
          <li>• Click module để chọn</li>
          <li>• Drag module để di chuyển</li>
          <li>• Shift+Click để xóa</li>
          <li>• Quản lý năng lượng cẩn thận!</li>
        </ul>
      </div>
    </div>
  );
}

// Main Enhanced Space Station Builder Component
// Component props
interface EnhancedSpaceStationBuilder3DProps {
  onComplete?: (success: boolean, rawScore?: number) => void;
  timeLeft?: number;
  onRestart?: () => void;
}

export default function EnhancedSpaceStationBuilder3D({ 
  onComplete, 
  timeLeft: gameTimeLeft, 
  onRestart 
}: EnhancedSpaceStationBuilder3DProps = {}) {
  const { spaceStation, setSpaceStationState, resetSpaceStation } = useGameStore();

  // Local state
  const [selectedModuleType, setSelectedModuleType] = useState<string | null>(null);
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const [draggedModuleId, setDraggedModuleId] = useState<string | null>(null);
  const [gameTime, setGameTime] = useState(0);

  // Initialize from store
  const [stationModules, setStationModules] = useState<StationModule[]>(spaceStation.modules);
  const [budget, setBudget] = useState(spaceStation.budget);

  // Game time counter
  useEffect(() => {
    const timer = setInterval(() => {
      setGameTime((prev) => prev + 1);
      setSpaceStationState({ gameTime: gameTime + 1 });
    }, 1000);
    return () => clearInterval(timer);
  }, [gameTime, setSpaceStationState]);

  // Calculate station stats
  const stationStats = useMemo(() => {
    const stats: StationStats = {
      power: 0,
      crew: 0,
      research: 0,
      food: 0,
      storage: 0,
    };

    stationModules.forEach((stationModule) => {
      const moduleType = STATION_MODULES.find((m) => m.id === stationModule.type);
      if (moduleType) {
        stats.power += moduleType.power || 0;
        stats.crew += (moduleType as any).crew || 0;
        stats.research += (moduleType as any).research || 0;
        stats.food += (moduleType as any).food || 0;
        stats.storage += (moduleType as any).storage || 0;
      }
    });

    return stats;
  }, [stationModules]);

  // Add new module
  const addModule = useCallback(
    (position: [number, number, number]) => {
      if (!selectedModuleType) return;

      const moduleType = STATION_MODULES.find((m) => m.id === selectedModuleType);
      if (!moduleType || budget < moduleType.cost) return;

      const newModule: StationModule = {
        id: `module-${Date.now()}`,
        type: selectedModuleType,
        position,
      };

      const newModules = [...stationModules, newModule];
      const newBudget = budget - moduleType.cost;

      setStationModules(newModules);
      setBudget(newBudget);
      setSelectedModuleType(null);

      // Save to store
      setSpaceStationState({
        modules: newModules,
        budget: newBudget,
        stats: stationStats,
      });
    },
    [selectedModuleType, budget, stationModules, stationStats, setSpaceStationState],
  );

  // Delete module
  const deleteModule = useCallback(
    (moduleId: string) => {
      const stationModule = stationModules.find((m) => m.id === moduleId);
      if (!stationModule) return;

      const moduleType = STATION_MODULES.find((m) => m.id === stationModule.type);
      if (!moduleType) return;

      const newModules = stationModules.filter((m) => m.id !== moduleId);
      const refund = Math.floor(moduleType.cost * 0.7); // 70% refund
      const newBudget = budget + refund;

      setStationModules(newModules);
      setBudget(newBudget);
      setSelectedModuleId(null);

      setSpaceStationState({
        modules: newModules,
        budget: newBudget,
        stats: stationStats,
      });
    },
    [stationModules, budget, stationStats, setSpaceStationState],
  );

  // Drag module
  const dragModule = useCallback(
    (moduleId: string, newPosition: [number, number, number]) => {
      const newModules = stationModules.map((m) => (m.id === moduleId ? { ...m, position: newPosition } : m));
      setStationModules(newModules);
      setSpaceStationState({ modules: newModules });
    },
    [stationModules, setSpaceStationState],
  );

  // Save current state
  const handleSave = useCallback(() => {
    setSpaceStationState({
      modules: stationModules,
      budget,
      stats: stationStats,
      gameTime,
    });
    alert('Trạng thái game đã được lưu!');
  }, [stationModules, budget, stationStats, gameTime, setSpaceStationState]);

  // Load saved state
  const handleLoad = useCallback(() => {
    setStationModules(spaceStation.modules);
    setBudget(spaceStation.budget);
    setGameTime(spaceStation.gameTime);
    alert('Đã tải trạng thái game đã lưu!');
  }, [spaceStation]);

  // Reset game
  const handleReset = useCallback(() => {
    resetSpaceStation();
    setStationModules([]);
    setBudget(5000);
    setGameTime(0);
    setSelectedModuleId(null);
    setSelectedModuleType(null);
  }, [resetSpaceStation]);

  // Canvas click handler
  const handleCanvasClick = useCallback(
    (e: any) => {
      if (selectedModuleType && e.point) {
        addModule([e.point.x, e.point.y, e.point.z]);
      }
    },
    [selectedModuleType, addModule],
  );

  const hasProgress = spaceStation.modules.length > 0 || spaceStation.gameTime > 0;

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-black to-blue-900">
      <EnhancedControlPanel
        selectedModuleType={selectedModuleType}
        onSelectModuleType={setSelectedModuleType}
        stationStats={stationStats}
        budget={budget}
        onSave={handleSave}
        onLoad={handleLoad}
        onReset={handleReset}
        hasProgress={hasProgress}
      />

      <Canvas camera={{ position: [0, 10, 20], fov: 60 }} onClick={handleCanvasClick}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <pointLight position={[0, 0, 0]} intensity={0.6} />

        <Stars radius={300} depth={50} count={1000} factor={4} fade={true} speed={1} />

        <Earth />

        <ConnectionLines modules={stationModules} />

        {stationModules.map((stationModule) => {
          const moduleType = STATION_MODULES.find((m) => m.id === stationModule.type);
          if (!moduleType) return null;

          return (
            <EnhancedStationModule
              key={stationModule.id}
              position={stationModule.position}
              module={moduleType}
              stationModule={stationModule}
              onSelect={() => setSelectedModuleId(stationModule.id)}
              onDrag={(newPos) => dragModule(stationModule.id, newPos)}
              onDelete={() => deleteModule(stationModule.id)}
              isSelected={selectedModuleId === stationModule.id}
              isDragging={draggedModuleId === stationModule.id}
            />
          );
        })}

        <OrbitControls enablePan={true} maxPolarAngle={Math.PI / 2} minDistance={10} maxDistance={50} />
      </Canvas>

      {/* Game Status */}
      <div className="absolute top-4 right-4 bg-black bg-opacity-90 text-white rounded-lg p-4">
        <div className="text-sm">
          <div>
            ⏱️ Thời gian: {Math.floor(gameTime / 60)}:{(gameTime % 60).toString().padStart(2, '0')}
          </div>
          <div>🏗️ Modules: {stationModules.length}</div>
          <div className={stationStats.power >= 0 ? 'text-green-400' : 'text-red-400'}>
            ⚡ Năng lượng: {stationStats.power >= 0 ? 'Ổn định' : 'Thiếu hụt!'}
          </div>
        </div>
      </div>
    </div>
  );
}
