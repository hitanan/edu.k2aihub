'use client';

import React, { useState, useEffect, useCallback, useRef, Suspense } from 'react';
import { Canvas, useFrame, ThreeEvent } from '@react-three/fiber';
import { 
  OrbitControls, 
  Box, 
  Sphere, 
  Text,
  Environment,
  Grid,
  Stats,
  Float
} from '@react-three/drei';
import { create } from 'zustand';
import * as THREE from 'three';
import { 
  Building2, 
  Cpu, 
  Zap, 
  Car, 
  Monitor,
  Cloud,
  Shield,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  Clock,
  Target
} from 'lucide-react';

interface IoTSmartCityBuilder3DProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface SmartSystem {
  id: string;
  name: string;
  category: 'infrastructure' | 'transportation' | 'energy' | 'environment' | 'security';
  description: string;
  cost: number;
  energyUsage: number;
  citizenSatisfaction: number;
  efficiency: number;
  position: THREE.Vector3;
  isActive: boolean;
  level: number;
}

interface CityMetrics {
  totalEnergy: number;
  energyUsage: number;
  citizenHappiness: number;
  trafficFlow: number;
  airQuality: number;
  security: number;
  dataFlow: number;
}

interface CityState {
  systems: SmartSystem[];
  metrics: CityMetrics;
  budget: number;
  time: number;
  isRunning: boolean;
  selectedSystem: SmartSystem | null;
  buildMode: string | null;
  addSystem: (system: SmartSystem) => void;
  removeSystem: (id: string) => void;
  updateSystem: (id: string, updates: Partial<SmartSystem>) => void;
  updateMetrics: (metrics: Partial<CityMetrics>) => void;
  setBuildMode: (mode: string | null) => void;
  selectSystem: (system: SmartSystem | null) => void;
  setRunning: (running: boolean) => void;
  spendBudget: (amount: number) => boolean;
  addBudget: (amount: number) => void;
}

const useCityStore = create<CityState>((set, get) => ({
  systems: [],
  metrics: {
    totalEnergy: 1000,
    energyUsage: 0,
    citizenHappiness: 50,
    trafficFlow: 50,
    airQuality: 70,
    security: 50,
    dataFlow: 0
  },
  budget: 10000,
  time: 0,
  isRunning: false,
  selectedSystem: null,
  buildMode: null,
  
  addSystem: (system) => set((state) => ({
    systems: [...state.systems, system]
  })),
  
  removeSystem: (id) => set((state) => ({
    systems: state.systems.filter(s => s.id !== id)
  })),
  
  updateSystem: (id, updates) => set((state) => ({
    systems: state.systems.map(s => s.id === id ? { ...s, ...updates } : s)
  })),
  
  updateMetrics: (metrics) => set((state) => ({
    metrics: { ...state.metrics, ...metrics }
  })),
  
  setBuildMode: (mode) => set({ buildMode: mode }),
  selectSystem: (system) => set({ selectedSystem: system }),
  setRunning: (running) => set({ isRunning: running }),
  
  spendBudget: (amount) => {
    const { budget } = get();
    if (budget >= amount) {
      set({ budget: budget - amount });
      return true;
    }
    return false;
  },
  
  addBudget: (amount) => set((state) => ({ budget: state.budget + amount }))
}));

const SYSTEM_TEMPLATES = {
  infrastructure: {
    name: 'Smart Building',
    cost: 1500,
    energyUsage: 200,
    citizenSatisfaction: 15,
    efficiency: 80
  },
  transportation: {
    name: 'Smart Traffic Light',
    cost: 800,
    energyUsage: 50,
    citizenSatisfaction: 10,
    efficiency: 90
  },
  energy: {
    name: 'Solar Panel Array',
    cost: 2000,
    energyUsage: -300,
    citizenSatisfaction: 8,
    efficiency: 85
  },
  environment: {
    name: 'Air Quality Monitor',
    cost: 600,
    energyUsage: 20,
    citizenSatisfaction: 5,
    efficiency: 95
  },
  security: {
    name: 'Smart Camera System',
    cost: 1000,
    energyUsage: 100,
    citizenSatisfaction: 12,
    efficiency: 88
  }
};

// 3D Building Component
function Building({ system, onClick }: { system: SmartSystem; onClick: () => void }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current && system.isActive) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = system.position.y + Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }
  });

  const getSystemColor = (category: string) => {
    switch (category) {
      case 'infrastructure': return '#2196F3';
      case 'transportation': return '#FF9800';
      case 'energy': return '#4CAF50';
      case 'environment': return '#8BC34A';
      case 'security': return '#F44336';
      default: return '#9E9E9E';
    }
  };

  return (
    <group
      position={system.position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Box
        ref={meshRef}
        args={[1, system.level * 0.5 + 0.5, 1]}
        scale={hovered ? 1.1 : 1}
      >
        <meshStandardMaterial 
          color={getSystemColor(system.category)} 
          transparent
          opacity={system.isActive ? 1 : 0.6}
          emissive={system.isActive ? getSystemColor(system.category) : '#000000'}
          emissiveIntensity={system.isActive ? 0.1 : 0}
        />
      </Box>
      
      {/* Data flow visualization */}
      {system.isActive && (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Sphere args={[0.05]} position={[0, system.level * 0.5 + 1, 0]}>
            <meshStandardMaterial color="#00FFFF" emissive="#00FFFF" emissiveIntensity={0.5} />
          </Sphere>
        </Float>
      )}
      
      <Text
        position={[0, -0.8, 0]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {system.name}
      </Text>
    </group>
  );
}

// Smart Grid Visualization
function SmartGrid() {
  const { systems, isRunning, metrics } = useCityStore();
  const linesRef = useRef<THREE.BufferGeometry>(null);

  useFrame(() => {
    if (!linesRef.current || !isRunning) return;

    const positions = [];
    const activeSystems = systems.filter(s => s.isActive);
    
    // Create connections between nearby systems
    for (let i = 0; i < activeSystems.length; i++) {
      for (let j = i + 1; j < activeSystems.length; j++) {
        const systemA = activeSystems[i];
        const systemB = activeSystems[j];
        const distance = systemA.position.distanceTo(systemB.position);
        
        if (distance < 5) {
          positions.push(systemA.position.x, systemA.position.y + 0.5, systemA.position.z);
          positions.push(systemB.position.x, systemB.position.y + 0.5, systemB.position.z);
        }
      }
    }
    
    linesRef.current.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  });

  return (
    <line>
      <bufferGeometry ref={linesRef}>
        <bufferAttribute attach="attributes-position" args={[new Float32Array(), 3]} count={0} />
      </bufferGeometry>
      <lineBasicMaterial 
        color="#00FFFF" 
        transparent 
        opacity={metrics.dataFlow / 100}
        linewidth={2}
      />
    </line>
  );
}

// Environmental Effects
function EnvironmentalEffects() {
  const { metrics } = useCityStore();
  const particlesRef = useRef<THREE.Points>(null);
  const [particlePositions] = useState(() => {
    const positions = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = Math.random() * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  });

  useFrame(() => {
    if (!particlesRef.current) return;

    const positions = particlesRef.current.geometry.attributes.position;
    
    for (let i = 0; i < positions.count; i++) {
      const y = positions.getY(i);
      positions.setY(i, y + 0.01);
      
      if (y > 10) {
        positions.setY(i, 0);
        positions.setX(i, (Math.random() - 0.5) * 20);
        positions.setZ(i, (Math.random() - 0.5) * 20);
      }
    }
    
    positions.needsUpdate = true;
  });

  const particleColor = metrics.airQuality > 70 ? '#4CAF50' : 
                       metrics.airQuality > 40 ? '#FF9800' : '#F44336';

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particlePositions, 3]}
          count={particlePositions.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial 
        color={particleColor} 
        size={0.05} 
        transparent 
        opacity={0.6}
      />
    </points>
  );
}

function CityScene3D() {
  const { systems, selectedSystem, buildMode, addSystem, selectSystem, setBuildMode, spendBudget } = useCityStore();

  const handleClick = useCallback((event: ThreeEvent<MouseEvent>) => {
    if (!buildMode) return;

    const template = SYSTEM_TEMPLATES[buildMode as keyof typeof SYSTEM_TEMPLATES];
    if (!template || !spendBudget(template.cost)) return;

    const point = event.point as THREE.Vector3;
    const newSystem: SmartSystem = {
      id: `system-${Date.now()}`,
      name: template.name,
      category: buildMode as SmartSystem['category'],
      description: `Deployed ${template.name}`,
      cost: template.cost,
      energyUsage: template.energyUsage,
      citizenSatisfaction: template.citizenSatisfaction,
      efficiency: template.efficiency,
      position: new THREE.Vector3(
        Math.round(point.x),
        0.5,
        Math.round(point.z)
      ),
      isActive: true,
      level: 1
    };

    addSystem(newSystem);
    setBuildMode(null);
  }, [buildMode, addSystem, setBuildMode, spendBudget]);

  return (
    <Canvas camera={{ position: [10, 10, 10], fov: 50 }}>
      <Suspense fallback={null}>
        <Environment preset="city" />
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[0, 5, 0]} intensity={0.5} color="#00FFFF" />
        
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        
        {/* Ground plane */}
        <mesh 
          rotation={[-Math.PI / 2, 0, 0]} 
          position={[0, -0.01, 0]}
          onClick={handleClick}
        >
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#2C3E50" transparent opacity={0.8} />
        </mesh>
        
        <Grid args={[20, 20]} position={[0, 0, 0]} />
        
        {/* Buildings */}
        {systems.map((system) => (
          <Building
            key={system.id}
            system={system}
            onClick={() => selectSystem(selectedSystem?.id === system.id ? null : system)}
          />
        ))}
        
        <SmartGrid />
        <EnvironmentalEffects />
        
        <Stats />
      </Suspense>
    </Canvas>
  );
}

const IoTSmartCityBuilder3D: React.FC<IoTSmartCityBuilder3DProps> = ({
  onComplete,
  timeLeft,
  onRestart
}) => {
  const {
    systems,
    metrics,
    budget,
    isRunning,
    selectedSystem,
    buildMode,
    setBuildMode,
    setRunning,
    updateMetrics
  } = useCityStore();

  const [score, setScore] = useState(0);
  const [gamePhase, setGamePhase] = useState<'building' | 'running' | 'completed'>('building');

  // Simulation update loop
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      const activeSystems = systems.filter(s => s.isActive);
      
      // Calculate metrics based on systems
      const totalEnergyUsage = activeSystems.reduce((sum, s) => sum + Math.max(0, s.energyUsage), 0);
      const totalEnergyProduction = activeSystems.reduce((sum, s) => sum + Math.max(0, -s.energyUsage), 0);
      const totalSatisfaction = activeSystems.reduce((sum, s) => sum + s.citizenSatisfaction, 0);
      const avgEfficiency = activeSystems.length > 0 
        ? activeSystems.reduce((sum, s) => sum + s.efficiency, 0) / activeSystems.length 
        : 0;

      const newMetrics = {
        energyUsage: totalEnergyUsage,
        totalEnergy: 1000 + totalEnergyProduction,
        citizenHappiness: Math.min(100, 50 + totalSatisfaction),
        trafficFlow: Math.min(100, 50 + (activeSystems.filter(s => s.category === 'transportation').length * 10)),
        airQuality: Math.min(100, 70 + (activeSystems.filter(s => s.category === 'environment').length * 5)),
        security: Math.min(100, 50 + (activeSystems.filter(s => s.category === 'security').length * 15)),
        dataFlow: Math.min(100, avgEfficiency)
      };

      updateMetrics(newMetrics);

      // Calculate score
      const newScore = Math.round(
        newMetrics.citizenHappiness * 2 +
        newMetrics.trafficFlow * 1.5 +
        newMetrics.airQuality * 1.5 +
        newMetrics.security * 2 +
        (newMetrics.totalEnergy - newMetrics.energyUsage) / 10
      );
      setScore(newScore);

    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, systems, updateMetrics]);

  // Game completion check
  useEffect(() => {
    if (timeLeft <= 0 && gamePhase !== 'completed') {
      setGamePhase('completed');
      setRunning(false);
      
      const finalScore = Math.round(score * (metrics.citizenHappiness / 100));
      const success = finalScore > 500;
      
      setTimeout(() => {
        onComplete(success, finalScore);
      }, 2000);
    }
  }, [timeLeft, gamePhase, score, metrics.citizenHappiness, setRunning, onComplete]);

  const handleStartSimulation = () => {
    if (systems.length > 0) {
      setRunning(!isRunning);
      if (!isRunning) {
        setGamePhase('running');
      }
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm p-4 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Smart City Builder 3D</h2>
            <p className="text-sm text-gray-300">Xây dựng thành phố thông minh với IoT</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-yellow-400">
            <Clock className="w-4 h-4" />
            <span className="font-mono">{formatTime(timeLeft)}</span>
          </div>
          <div className="flex items-center space-x-2 text-green-400">
            <Target className="w-4 h-4" />
            <span className="font-mono">{score}</span>
          </div>
          <div className="flex items-center space-x-2 text-blue-400">
            <Cpu className="w-4 h-4" />
            <span className="font-mono">${budget}</span>
          </div>
          <button
            onClick={onRestart}
            className="flex items-center space-x-2 bg-gray-600/50 hover:bg-gray-500/50 px-3 py-2 rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Làm lại</span>
          </button>
        </div>
      </div>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Control Panel */}
        <div className="w-80 bg-black/20 backdrop-blur-sm p-6 overflow-y-auto border-r border-white/10">
          <div className="space-y-6">
            {/* System Building */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <Building2 className="w-5 h-5" />
                <span>Hệ thống IoT</span>
              </h3>
              
              <div className="grid grid-cols-1 gap-2">
                {Object.entries(SYSTEM_TEMPLATES).map(([category, template]) => (
                  <button
                    key={category}
                    onClick={() => setBuildMode(buildMode === category ? null : category)}
                    disabled={budget < template.cost}
                    className={`p-3 rounded-lg text-left transition-colors ${
                      buildMode === category
                        ? 'bg-blue-500/30 border-2 border-blue-400'
                        : 'bg-white/10 hover:bg-white/20 border-2 border-transparent'
                    } ${budget < template.cost ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">{template.name}</span>
                      <span className="text-xs text-green-400">${template.cost}</span>
                    </div>
                    <div className="text-xs text-gray-300">
                      Năng lượng: {template.energyUsage > 0 ? '+' : ''}{template.energyUsage}W
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Simulation Control */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <Monitor className="w-5 h-5" />
                <span>Điều khiển</span>
              </h3>
              
              <button
                onClick={handleStartSimulation}
                disabled={systems.length === 0}
                className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-colors ${
                  systems.length === 0
                    ? 'bg-gray-600/50 cursor-not-allowed'
                    : isRunning
                    ? 'bg-red-500/30 hover:bg-red-500/40 text-red-200'
                    : 'bg-green-500/30 hover:bg-green-500/40 text-green-200'
                }`}
              >
                {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                <span>{isRunning ? 'Tạm dừng' : 'Chạy mô phỏng'}</span>
              </button>
            </div>

            {/* Metrics */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <Monitor className="w-5 h-5" />
                <span>Chỉ số</span>
              </h3>
              
              <div className="space-y-3">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      <span>Năng lượng</span>
                    </span>
                    <span className="text-sm">{metrics.energyUsage}/{metrics.totalEnergy}W</span>
                  </div>
                  <div className="w-full bg-black/30 rounded-full h-2">
                    <div 
                      className="bg-yellow-400 h-2 rounded-full" 
                      style={{ width: `${Math.min(100, (metrics.energyUsage / metrics.totalEnergy) * 100)}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm flex items-center space-x-2">
                      <span>😊</span>
                      <span>Hạnh phúc</span>
                    </span>
                    <span className="text-sm">{Math.round(metrics.citizenHappiness)}%</span>
                  </div>
                  <div className="w-full bg-black/30 rounded-full h-2">
                    <div 
                      className="bg-green-400 h-2 rounded-full" 
                      style={{ width: `${metrics.citizenHappiness}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm flex items-center space-x-2">
                      <Car className="w-4 h-4 text-orange-400" />
                      <span>Giao thông</span>
                    </span>
                    <span className="text-sm">{Math.round(metrics.trafficFlow)}%</span>
                  </div>
                  <div className="w-full bg-black/30 rounded-full h-2">
                    <div 
                      className="bg-orange-400 h-2 rounded-full" 
                      style={{ width: `${metrics.trafficFlow}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm flex items-center space-x-2">
                      <Cloud className="w-4 h-4 text-blue-400" />
                      <span>Không khí</span>
                    </span>
                    <span className="text-sm">{Math.round(metrics.airQuality)}%</span>
                  </div>
                  <div className="w-full bg-black/30 rounded-full h-2">
                    <div 
                      className="bg-blue-400 h-2 rounded-full" 
                      style={{ width: `${metrics.airQuality}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-red-400" />
                      <span>An ninh</span>
                    </span>
                    <span className="text-sm">{Math.round(metrics.security)}%</span>
                  </div>
                  <div className="w-full bg-black/30 rounded-full h-2">
                    <div 
                      className="bg-red-400 h-2 rounded-full" 
                      style={{ width: `${metrics.security}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Selected System Info */}
            {selectedSystem && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Thông tin hệ thống</h3>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-medium mb-2">{selectedSystem.name}</h4>
                  <div className="space-y-1 text-sm text-gray-300">
                    <p>Danh mục: {selectedSystem.category}</p>
                    <p>Chi phí: ${selectedSystem.cost}</p>
                    <p>Năng lượng: {selectedSystem.energyUsage}W</p>
                    <p>Hiệu quả: {selectedSystem.efficiency}%</p>
                    <p>Mức độ: {selectedSystem.level}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 3D Scene */}
        <div className="flex-1 relative">
          {buildMode && (
            <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-sm rounded-lg p-3">
              <p className="text-sm text-white">
                Chế độ xây dựng: <span className="text-blue-400 font-medium">{SYSTEM_TEMPLATES[buildMode as keyof typeof SYSTEM_TEMPLATES].name}</span>
              </p>
              <p className="text-xs text-gray-300">Nhấn vào mặt đất để đặt hệ thống</p>
            </div>
          )}
          
          <CityScene3D />
        </div>
      </div>

      {/* Game Completed Modal */}
      {gamePhase === 'completed' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full mx-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Thành phố hoàn thành!</h3>
              <div className="space-y-2 text-sm text-gray-300 mb-6">
                <p>Điểm số cuối: <span className="text-green-400 font-semibold">{score}</span></p>
                <p>Hạnh phúc công dân: <span className="text-blue-400">{Math.round(metrics.citizenHappiness)}%</span></p>
                <p>Hệ thống IoT: <span className="text-yellow-400">{systems.length} hệ thống</span></p>
                <p>Ngân sách còn lại: <span className="text-purple-400">${budget}</span></p>
              </div>
              <button
                onClick={onRestart}
                className="bg-blue-500 hover:bg-blue-400 px-6 py-2 rounded-lg transition-colors"
              >
                Thành phố mới
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IoTSmartCityBuilder3D;
