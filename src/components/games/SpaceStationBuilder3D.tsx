'use client';

import React, { useState, useCallback, useRef, useMemo } from 'react';
import { Canvas, useFrame, ThreeEvent } from '@react-three/fiber';
import { OrbitControls, Html, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { useGameStore } from '@/utils/gameStore';

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

// Earth component with realistic appearance
function Earth() {
  const meshRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.003; // Clouds rotate slower
    }
  });

  // Create Earth texture with continents pattern
  const earthTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Ocean base with gradient
      const oceanGradient = ctx.createLinearGradient(0, 0, 0, 512);
      oceanGradient.addColorStop(0, '#1e3a8a'); // Dark blue at poles
      oceanGradient.addColorStop(0.5, '#1e40af'); // Medium blue at equator
      oceanGradient.addColorStop(1, '#1e3a8a'); // Dark blue at poles
      ctx.fillStyle = oceanGradient;
      ctx.fillRect(0, 0, 1024, 512);
      
      // Draw continents with more detail
      ctx.fillStyle = '#22c55e'; // Green continents
      
      // North America - more detailed
      ctx.fillRect(150, 60, 120, 140); // Main body
      ctx.fillRect(120, 80, 40, 100); // West coast
      ctx.fillRect(180, 40, 80, 40); // Canada
      ctx.fillRect(160, 180, 60, 60); // Mexico/Central America
      
      // South America - improved shape
      ctx.fillRect(200, 220, 80, 180); // Main body
      ctx.fillRect(220, 400, 40, 60); // Argentina
      ctx.fillRect(240, 200, 30, 40); // Northern coast
      
      // Africa - more realistic
      ctx.fillRect(450, 120, 100, 200); // Main body
      ctx.fillRect(480, 100, 60, 40); // North Africa
      ctx.fillRect(460, 300, 80, 80); // Southern Africa
      
      // Europe
      ctx.fillRect(480, 80, 80, 60);
      ctx.fillRect(520, 60, 40, 40); // Scandinavia
      
      // Asia - expanded
      ctx.fillRect(560, 100, 200, 120); // Main body
      ctx.fillRect(620, 80, 100, 40); // Siberia
      ctx.fillRect(680, 140, 80, 60); // India
      ctx.fillRect(740, 180, 120, 80); // Southeast Asia
      
      // Australia and Oceania
      ctx.fillRect(760, 280, 100, 60);
      ctx.fillRect(800, 260, 30, 30); // New Guinea
      
      // Add mountain ranges (darker green)
      ctx.fillStyle = '#16a34a';
      // Rocky Mountains
      ctx.fillRect(160, 80, 10, 100);
      // Andes
      ctx.fillRect(200, 250, 15, 120);
      // Himalayas
      ctx.fillRect(640, 120, 80, 15);
      // Atlas Mountains
      ctx.fillRect(450, 110, 40, 10);
      
      // Add deserts (sandy color)
      ctx.fillStyle = '#f59e0b';
      // Sahara
      ctx.fillRect(460, 140, 80, 40);
      // Arabian Desert
      ctx.fillRect(580, 160, 40, 30);
      // Gobi Desert
      ctx.fillRect(680, 100, 50, 25);
      
      // Ice caps with more detail
      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(0, 0, 1024, 20); // North pole
      ctx.fillRect(0, 492, 1024, 20); // South pole
      
      // Add some cloud-like white patches for variety
      ctx.fillStyle = '#e2e8f0';
      for (let i = 0; i < 15; i++) {
        const x = Math.random() * 1000;
        const y = Math.random() * 480 + 16;
        const size = 10 + Math.random() * 20;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    return new THREE.CanvasTexture(canvas);
  }, []);

  return (
    <group position={[0, -30, 0]}>
      {/* Earth surface with enhanced details */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[15, 128, 128]} />
        <meshPhongMaterial
          map={earthTexture}
          shininess={150}
          specular={new THREE.Color(0x4169e1)}
          emissive={new THREE.Color(0x001122)}
          emissiveIntensity={0.15}
          transparent={false}
        />
      </mesh>

      {/* Enhanced cloud layer with realistic movement */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[15.3, 64, 64]} />
        <meshPhongMaterial
          color={new THREE.Color(0xffffff)}
          transparent
          opacity={0.4}
          alphaMap={createCloudTexture()}
          depthWrite={false}
        />
      </mesh>

      {/* Enhanced atmospheric glow with gradient effect */}
      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[15.8, 32, 32]} />
        <meshBasicMaterial
          color={new THREE.Color(0x87ceeb)}
          transparent
          opacity={0.15}
          depthWrite={false}
          side={THREE.BackSide}
        />
      </mesh>
      
      {/* Additional atmospheric layer for more realistic glow */}
      <mesh>
        <sphereGeometry args={[16.2, 32, 32]} />
        <meshBasicMaterial
          color={new THREE.Color(0x4682b4)}
          transparent
          opacity={0.05}
          depthWrite={false}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );

  function createCloudTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Create cloud patterns
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, 1024, 512);
      
      // Add realistic cloud formations with varying density
      ctx.fillStyle = '#ffffff';
      
      // Create weather systems and storm patterns
      for (let i = 0; i < 80; i++) {
        const x = Math.random() * 1024;
        const y = Math.random() * 512;
        const size = Math.random() * 60 + 15;
        const density = Math.random() * 0.7 + 0.3;
        
        ctx.globalAlpha = density;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add connected cloud formations for realistic weather patterns
        if (Math.random() > 0.6) {
          const angle = Math.random() * Math.PI * 2;
          const distance = size * (0.5 + Math.random() * 0.8);
          const newX = x + Math.cos(angle) * distance;
          const newY = y + Math.sin(angle) * distance;
          
          ctx.globalAlpha = density * 0.8;
          ctx.beginPath();
          ctx.arc(newX, newY, size * 0.7, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      // Add hurricane/cyclone formations
      for (let i = 0; i < 5; i++) {
        const centerX = Math.random() * 1024;
        const centerY = 100 + Math.random() * 312; // Avoid poles
        const spiralSize = 40 + Math.random() * 60;
        
        ctx.globalAlpha = 0.8;
        for (let angle = 0; angle < Math.PI * 8; angle += 0.2) {
          const radius = angle * 8;
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;
          
          if (radius < spiralSize) {
            ctx.beginPath();
            ctx.arc(x, y, 8 - (radius / spiralSize) * 6, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
      
      // Add polar cloud formations
      ctx.globalAlpha = 0.6;
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * 1024;
        const y = Math.random() * 50; // North pole
        ctx.beginPath();
        ctx.arc(x, y, 15 + Math.random() * 25, 0, Math.PI * 2);
        ctx.fill();
        
        const y2 = 462 + Math.random() * 50; // South pole
        ctx.beginPath();
        ctx.arc(x, y2, 15 + Math.random() * 25, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    return new THREE.CanvasTexture(canvas);
  }
}

// Space station module component - ENHANCED with drag and delete
function StationModule({
  position,
  module,
  onSelect,
  onDrag,
  onDelete,
  isSelected,
  isDragging,
}: {
  position: [number, number, number];
  module: (typeof STATION_MODULES)[0];
  onSelect: () => void;
  onDrag: (newPosition: [number, number, number]) => void;
  onDelete: () => void;
  isSelected: boolean;
  isDragging: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [dragStart, setDragStart] = useState<THREE.Vector3 | null>(null);
  const [currentPosition, setCurrentPosition] = useState<[number, number, number]>(position);

  // Update position when prop changes
  React.useEffect(() => {
    setCurrentPosition(position);
  }, [position]);

  useFrame((state) => {
    if (meshRef.current && !isDragging) {
      // Gentle rotation in space
      meshRef.current.rotation.y += 0.01;

      // Float animation
      meshRef.current.position.y = currentPosition[1] + Math.sin(state.clock.elapsedTime + currentPosition[0]) * 0.1;

      // Scale on selection or hover
      const targetScale = isSelected ? 1.3 : hovered ? 1.1 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }

    if (meshRef.current && isDragging) {
      // Update mesh position during drag
      meshRef.current.position.set(...currentPosition);
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

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    if (e.button === 0 && isSelected) {
      // Only allow drag on selected modules with left mouse button
      setDragStart(new THREE.Vector3().copy(e.point));
    }
  };

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (dragStart && isSelected) {
      e.stopPropagation();
      const newPosition: [number, number, number] = [e.point.x, e.point.y, e.point.z];
      setCurrentPosition(newPosition);
    }
  };

  const handlePointerUp = () => {
    if (dragStart && isSelected) {
      // Final position update
      onDrag(currentPosition);
      setDragStart(null);
    }
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
          {isSelected && (
            <div className="text-xs mt-1">
              {hovered && 'Shift+Click để xóa'}
              <br />
              {hovered && 'Drag để di chuyển'}
            </div>
          )}
        </div>
      </Html>
    </mesh>
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

// Control panel component
function ControlPanel({
  selectedModuleType,
  onSelectModuleType,
  stationStats,
  budget,
}: {
  selectedModuleType: string | null;
  onSelectModuleType: (type: string | null) => void;
  stationStats: StationStats;
  budget: number;
}) {
  return (
    <div className="absolute top-4 left-4 bg-black bg-opacity-90 text-white rounded-lg p-4 max-w-sm max-h-[80vh] overflow-y-auto z-50 shadow-2xl">
      <h3 className="text-lg font-bold mb-4">🚀 Space Station Builder</h3>

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

      {/* Actions */}
      <div className="space-y-2">
        <button
          onClick={() => onSelectModuleType(null)}
          className="w-full px-3 py-2 bg-gray-600 text-white rounded hover:bg-gray-500 transition-colors text-sm"
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
    <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white rounded-xl p-8 max-w-2xl mx-4 text-center">
        <h2 className="text-3xl font-bold mb-4">🚀 Space Station Builder 3D</h2>

        <div className="text-left space-y-4 mb-6">
          <p className="text-gray-300">
            Xây dựng trạm vũ trụ hoành tráng với các module khác nhau và duy trì sự sống trong không gian!
          </p>

          <div className="bg-blue-900 bg-opacity-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-400 mb-2">🎮 Cách chơi:</h3>
            <ul className="text-blue-300 space-y-1 text-sm">
              <li>
                • <strong>Chọn module</strong> từ bảng điều khiển
              </li>
              <li>
                • <strong>Click trong không gian</strong> để đặt module
              </li>
              <li>
                • <strong>Quản lý năng lượng</strong> - cần đủ điện cho toàn bộ trạm
              </li>
              <li>
                • <strong>Cân bằng</strong> phi hành đoàn, nghiên cứu và thực phẩm
              </li>
              <li>
                • <strong>Mở rộng trạm</strong> để khám phá vũ trụ sâu hơn
              </li>
            </ul>
          </div>

          <div className="bg-green-900 bg-opacity-50 p-4 rounded-lg">
            <h3 className="font-bold text-green-400 mb-2">🎯 Mục tiêu:</h3>
            <p className="text-green-300 text-sm">
              Tạo trạm vũ trụ tự cung tự cấp với năng lượng dương, đủ chỗ cho phi hành đoàn và khả năng nghiên cứu!
            </p>
          </div>
        </div>

        <button
          onClick={onStart}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105"
        >
          🚀 Bắt Đầu Xây Dựng
        </button>
      </div>
    </div>
  );
}

// Main component
export default function SpaceStationBuilder3D() {
  const { spaceStation, setSpaceStationState } = useGameStore();
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedModuleType, setSelectedModuleType] = useState<string | null>(null);
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  // Initialize persistence on mount
  React.useEffect(() => {
    setSpaceStationState({ lastSaved: Date.now() });
  }, [setSpaceStationState]);

  // Initialize from gameStore
  const modules = spaceStation.modules;
  const budget = spaceStation.budget;

  const stationStats = useMemo(() => {
    return modules.reduce(
      (stats, module) => {
        const moduleType = STATION_MODULES.find((m) => m.id === module.type);
        if (moduleType) {
          return {
            power: stats.power + (moduleType.power || 0),
            crew: stats.crew + (moduleType.crew || 0),
            research: stats.research + (moduleType.research || 0),
            food: stats.food + (moduleType.food || 0),
            storage: stats.storage + (moduleType.storage || 0),
          };
        }
        return stats;
      },
      { power: 0, crew: 0, research: 0, food: 0, storage: 0 },
    );
  }, [modules]);

  const handleSpaceClick = useCallback(() => {
    if (!selectedModuleType) return;

    const moduleType = STATION_MODULES.find((m) => m.id === selectedModuleType);
    if (!moduleType || budget < moduleType.cost) return;

    // Generate position in space around existing modules
    const basePosition = modules.length === 0 ? [0, 0, 0] : modules[modules.length - 1].position;
    const newPosition = [
      basePosition[0] + (Math.random() - 0.5) * 10,
      basePosition[1] + (Math.random() - 0.5) * 5,
      basePosition[2] + (Math.random() - 0.5) * 10,
    ] as [number, number, number];

    const newModule = {
      id: `${selectedModuleType}-${Date.now()}`,
      type: selectedModuleType,
      position: newPosition,
    };

    // Update gameStore with new module and reduced budget
    setSpaceStationState({
      modules: [...modules, newModule],
      budget: budget - moduleType.cost,
      lastSaved: Date.now(),
    });
  }, [selectedModuleType, budget, modules, setSpaceStationState]);

  const handleModuleSelect = useCallback(
    (moduleId: string) => {
      setSelectedModule(moduleId === selectedModule ? null : moduleId);
    },
    [selectedModule],
  );

  const handleModuleDelete = useCallback(
    (moduleId: string) => {
      const updatedModules = modules.filter((m) => m.id !== moduleId);
      setSpaceStationState({
        modules: updatedModules,
        lastSaved: Date.now(),
      });
      setSelectedModule(null);
    },
    [modules, setSpaceStationState],
  );

  const handleModuleDrag = useCallback(
    (moduleId: string, newPosition: [number, number, number]) => {
      const updatedModules = modules.map((m) => (m.id === moduleId ? { ...m, position: newPosition } : m));
      setSpaceStationState({
        modules: updatedModules,
        lastSaved: Date.now(),
      });
    },
    [modules, setSpaceStationState],
  );

  // Generate income from research - auto-save to gameStore
  React.useEffect(() => {
    if (!gameStarted) return;

    const interval = setInterval(() => {
      setSpaceStationState({
        budget: budget + stationStats.research * 10,
        lastSaved: Date.now(),
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [gameStarted, stationStats.research, budget, setSpaceStationState]);

  if (!gameStarted) {
    return <Instructions onStart={() => setGameStarted(true)} />;
  }

  return (
    <div className="relative w-full h-screen bg-black">
      <ControlPanel
        selectedModuleType={selectedModuleType}
        onSelectModuleType={setSelectedModuleType}
        stationStats={stationStats}
        budget={budget}
      />

      <Canvas
        camera={{ position: [0, 5, 15], fov: 75 }}
        gl={{ antialias: false, alpha: false }}
        dpr={[1, 1.5]}
        onClick={handleSpaceClick}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <pointLight position={[0, 0, 0]} intensity={0.5} color="#4169E1" />

        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade />

        <Earth />
        <ConnectionLines modules={modules} />

        {/* Render station modules */}
        {modules.map((module) => {
          const moduleType = STATION_MODULES.find((m) => m.id === module.type);
          if (!moduleType) return null;

          return (
            <StationModule
              key={module.id}
              position={module.position}
              module={moduleType}
              onSelect={() => handleModuleSelect(module.id)}
              onDrag={(newPosition) => handleModuleDrag(module.id, newPosition)}
              onDelete={() => handleModuleDelete(module.id)}
              isSelected={selectedModule === module.id}
              isDragging={false}
            />
          );
        })}

        <OrbitControls enablePan={true} maxPolarAngle={Math.PI} minDistance={5} maxDistance={50} />
      </Canvas>
    </div>
  );
}
