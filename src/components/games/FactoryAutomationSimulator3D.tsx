'use client';

import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Box, Cylinder, Text, Html, Plane } from '@react-three/drei';
import * as THREE from 'three';

// Factory components interfaces
interface Machine {
  id: string;
  type: 'conveyor' | 'robot' | 'assembly' | 'inspection' | 'packaging';
  position: [number, number, number];
  rotation: [number, number, number];
  status: 'idle' | 'working' | 'error' | 'maintenance';
  throughput: number; // items per minute
  efficiency: number; // 0-100%
  isActive: boolean;
}

interface Product {
  id: string;
  position: [number, number, number];
  stage: 'raw' | 'processed' | 'assembled' | 'inspected' | 'packaged';
  quality: number; // 0-100
  defective: boolean;
}

interface ConveyorPath {
  id: string;
  points: [number, number, number][];
  direction: number;
  speed: number;
}

// Production Statistics Interface
interface ProductionStats {
  totalProduced: number;
  currentThroughput: number;
  overallEfficiency: number;
  defectiveRate: number;
}

// Conveyor Belt 3D Component
function ConveyorBelt3D({
  machine,
  path,
  isRunning,
  onClick,
}: {
  machine: Machine;
  path?: { points: [number, number, number][]; speed: number };
  isRunning: boolean;
  onClick: () => void;
}) {
  const beltRef = useRef<THREE.Mesh>(null);
  const [textureOffset, setTextureOffset] = useState(0);

  useFrame((state, delta) => {
    if (isRunning && path && beltRef.current) {
      // Animate belt texture to show movement
      setTextureOffset((prev) => prev + delta * path.speed * 0.1);

      // Apply texture offset animation
      const material = beltRef.current.material as THREE.Material;
      if ('map' in material && material.map) {
        // Create animated effect on belt surface
        const offset = textureOffset * 0.1;
        // Use offset for animation (simplified implementation)
      }
    }
  });

  const getStatusColor = () => {
    switch (machine.status) {
      case 'working':
        return '#22c55e'; // Green
      case 'idle':
        return '#64748b'; // Gray
      case 'error':
        return '#ef4444'; // Red
      case 'maintenance':
        return '#f59e0b'; // Yellow
      default:
        return '#64748b';
    }
  };

  return (
    <group position={machine.position} rotation={machine.rotation} onClick={onClick}>
      {/* Main belt structure */}
      <Box ref={beltRef} args={[4, 0.2, 1]} position={[0, 0, 0]}>
        <meshPhongMaterial color={getStatusColor()} transparent opacity={0.8} />
      </Box>

      {/* Belt rollers */}
      <Cylinder args={[0.1, 0.1, 1.2]} position={[-1.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshPhongMaterial color="#444444" />
      </Cylinder>
      <Cylinder args={[0.1, 0.1, 1.2]} position={[1.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshPhongMaterial color="#444444" />
      </Cylinder>

      {/* Status indicator */}
      <Html position={[0, 1, 0]} center>
        <div
          className={`px-2 py-1 rounded text-xs font-bold text-white ${
            machine.status === 'working'
              ? 'bg-green-600'
              : machine.status === 'error'
                ? 'bg-red-600'
                : machine.status === 'maintenance'
                  ? 'bg-yellow-600'
                  : 'bg-gray-600'
          }`}
        >
          {machine.id} - {machine.throughput}/min
        </div>
      </Html>
    </group>
  );
}

// Robotic Arm 3D Component
function RoboticArm3D({ machine, isRunning, onClick }: { machine: Machine; isRunning: boolean; onClick: () => void }) {
  const armRef = useRef<THREE.Group>(null);
  const [armRotation, setArmRotation] = useState(0);

  useFrame((state, delta) => {
    if (isRunning && machine.isActive && armRef.current) {
      // Animate robotic arm movement
      setArmRotation((prev) => prev + delta * 2);
      armRef.current.rotation.y = Math.sin(armRotation) * 0.5;
    }
  });

  return (
    <group ref={armRef} position={machine.position} onClick={onClick}>
      {/* Base */}
      <Cylinder args={[0.5, 0.8, 0.3]} position={[0, 0, 0]}>
        <meshPhongMaterial color="#2563eb" />
      </Cylinder>

      {/* Main arm */}
      <Box args={[0.2, 2, 0.2]} position={[0, 1.2, 0]}>
        <meshPhongMaterial color="#1d4ed8" />
      </Box>

      {/* Secondary arm */}
      <Box args={[1.5, 0.15, 0.15]} position={[0.75, 2.2, 0]}>
        <meshPhongMaterial color="#1e40af" />
      </Box>

      {/* End effector */}
      <Box args={[0.3, 0.3, 0.3]} position={[1.5, 2.2, 0]}>
        <meshPhongMaterial color={machine.status === 'working' ? '#22c55e' : '#64748b'} />
      </Box>

      <Html position={[0, 3, 0]} center>
        <div className="px-2 py-1 bg-blue-600 text-white rounded text-xs font-bold">
          Robot Arm - {machine.efficiency}%
        </div>
      </Html>
    </group>
  );
}

// Assembly Station 3D Component
function AssemblyStation3D({ machine, onClick }: { machine: Machine; onClick: () => void }) {
  return (
    <group position={machine.position} onClick={onClick}>
      {/* Main workstation */}
      <Box args={[2, 1, 2]} position={[0, 0.5, 0]}>
        <meshPhongMaterial color="#059669" />
      </Box>

      {/* Work surface */}
      <Box args={[1.8, 0.1, 1.8]} position={[0, 1.05, 0]}>
        <meshPhongMaterial color="#047857" />
      </Box>

      {/* Assembly tools */}
      <Cylinder args={[0.05, 0.05, 0.5]} position={[-0.5, 1.35, 0]}>
        <meshPhongMaterial color="#374151" />
      </Cylinder>
      <Cylinder args={[0.05, 0.05, 0.5]} position={[0.5, 1.35, 0]}>
        <meshPhongMaterial color="#374151" />
      </Cylinder>

      <Html position={[0, 2, 0]} center>
        <div className="px-2 py-1 bg-green-600 text-white rounded text-xs font-bold">
          Assembly - {machine.throughput}/min
        </div>
      </Html>
    </group>
  );
}

// Product 3D Component
function Product3D({ product }: { product: Product }) {
  const getProductColor = () => {
    if (product.defective) return '#ef4444'; // Red for defective
    switch (product.stage) {
      case 'raw':
        return '#64748b'; // Gray
      case 'processed':
        return '#3b82f6'; // Blue
      case 'assembled':
        return '#f59e0b'; // Orange
      case 'inspected':
        return '#10b981'; // Green
      case 'packaged':
        return '#8b5cf6'; // Purple
      default:
        return '#64748b';
    }
  };

  return (
    <Box args={[0.3, 0.3, 0.3]} position={product.position}>
      <meshPhongMaterial
        color={getProductColor()}
        emissive={product.defective ? '#7f1d1d' : '#000000'}
        emissiveIntensity={product.defective ? 0.3 : 0}
      />
    </Box>
  );
}

// Factory Scenarios Data
const FACTORY_SCENARIOS = [
  {
    id: 'basic',
    name: 'Basic Assembly Line',
    description: 'Simple linear production với basic conveyor system',
    layout: {
      machines: [
        {
          id: 'conveyor-1',
          type: 'conveyor',
          position: [-6, 0, 0],
          rotation: [0, 0, 0],
          status: 'working',
          throughput: 20,
          efficiency: 85,
          isActive: true,
        },
        {
          id: 'assembly-1',
          type: 'assembly',
          position: [-2, 0, 0],
          rotation: [0, 0, 0],
          status: 'working',
          throughput: 18,
          efficiency: 90,
          isActive: true,
        },
        {
          id: 'conveyor-2',
          type: 'conveyor',
          position: [2, 0, 0],
          rotation: [0, 0, 0],
          status: 'working',
          throughput: 18,
          efficiency: 88,
          isActive: true,
        },
        {
          id: 'packaging-1',
          type: 'packaging',
          position: [6, 0, 0],
          rotation: [0, 0, 0],
          status: 'working',
          throughput: 15,
          efficiency: 80,
          isActive: true,
        },
      ],
      conveyorPaths: [
        {
          id: 'path-1',
          points: [
            [-8, 0, 0],
            [-6, 0, 0],
            [-2, 0, 0],
          ],
          direction: 0,
          speed: 1,
        },
        {
          id: 'path-2',
          points: [
            [-2, 0, 0],
            [2, 0, 0],
            [6, 0, 0],
          ],
          direction: 0,
          speed: 1,
        },
        {
          id: 'path-3',
          points: [
            [6, 0, 0],
            [8, 0, 0],
          ],
          direction: 0,
          speed: 1,
        },
      ],
    },
    targetThroughput: 15,
    maxEfficiency: 85,
  },
  {
    id: 'automated',
    name: 'Automated Factory',
    description: 'Advanced automation với robotic systems và quality control',
    layout: {
      machines: [
        {
          id: 'conveyor-1',
          type: 'conveyor',
          position: [-8, 0, 0],
          rotation: [0, 0, 0],
          status: 'working',
          throughput: 25,
          efficiency: 90,
          isActive: true,
        },
        {
          id: 'robot-1',
          type: 'robot',
          position: [-4, 0, 2],
          rotation: [0, 0, 0],
          status: 'working',
          throughput: 24,
          efficiency: 95,
          isActive: true,
        },
        {
          id: 'assembly-1',
          type: 'assembly',
          position: [0, 0, 0],
          rotation: [0, 0, 0],
          status: 'working',
          throughput: 22,
          efficiency: 88,
          isActive: true,
        },
        {
          id: 'inspection-1',
          type: 'inspection',
          position: [4, 0, 0],
          rotation: [0, 0, 0],
          status: 'working',
          throughput: 20,
          efficiency: 92,
          isActive: true,
        },
        {
          id: 'packaging-1',
          type: 'packaging',
          position: [8, 0, 0],
          rotation: [0, 0, 0],
          status: 'working',
          throughput: 18,
          efficiency: 85,
          isActive: true,
        },
      ],
      conveyorPaths: [
        {
          id: 'path-1',
          points: [
            [-10, 0, 0],
            [-8, 0, 0],
            [-4, 0, 0],
          ],
          direction: 0,
          speed: 1.2,
        },
        {
          id: 'path-2',
          points: [
            [-4, 0, 0],
            [0, 0, 0],
            [4, 0, 0],
          ],
          direction: 0,
          speed: 1.2,
        },
        {
          id: 'path-3',
          points: [
            [4, 0, 0],
            [8, 0, 0],
            [10, 0, 0],
          ],
          direction: 0,
          speed: 1.2,
        },
      ],
    },
    targetThroughput: 18,
    maxEfficiency: 90,
  },
  {
    id: 'smart-factory',
    name: 'Smart Factory 4.0',
    description: 'Industry 4.0 với IoT sensors, AI optimization và predictive maintenance',
    layout: {
      machines: [
        {
          id: 'smart-conveyor-1',
          type: 'conveyor',
          position: [-8, 0, -2],
          rotation: [0, 0, 0],
          status: 'working',
          throughput: 30,
          efficiency: 95,
          isActive: true,
        },
        {
          id: 'smart-conveyor-2',
          type: 'conveyor',
          position: [-8, 0, 2],
          rotation: [0, 0, 0],
          status: 'working',
          throughput: 28,
          efficiency: 93,
          isActive: true,
        },
        {
          id: 'robot-1',
          type: 'robot',
          position: [-4, 0, -2],
          rotation: [0, 0, 0],
          status: 'working',
          throughput: 28,
          efficiency: 96,
          isActive: true,
        },
        {
          id: 'robot-2',
          type: 'robot',
          position: [-4, 0, 2],
          rotation: [0, 0, 0],
          status: 'working',
          throughput: 26,
          efficiency: 94,
          isActive: true,
        },
        {
          id: 'assembly-1',
          type: 'assembly',
          position: [0, 0, 0],
          rotation: [0, 0, 0],
          status: 'working',
          throughput: 25,
          efficiency: 92,
          isActive: true,
        },
        {
          id: 'inspection-1',
          type: 'inspection',
          position: [4, 0, -1],
          rotation: [0, 0, 0],
          status: 'working',
          throughput: 24,
          efficiency: 98,
          isActive: true,
        },
        {
          id: 'inspection-2',
          type: 'inspection',
          position: [4, 0, 1],
          rotation: [0, 0, 0],
          status: 'working',
          throughput: 22,
          efficiency: 96,
          isActive: true,
        },
        {
          id: 'packaging-1',
          type: 'packaging',
          position: [8, 0, 0],
          rotation: [0, 0, 0],
          status: 'working',
          throughput: 20,
          efficiency: 90,
          isActive: true,
        },
      ],
      conveyorPaths: [
        {
          id: 'path-1',
          points: [
            [-10, 0, -2],
            [-8, 0, -2],
            [-4, 0, -2],
          ],
          direction: 0,
          speed: 1.5,
        },
        {
          id: 'path-2',
          points: [
            [-10, 0, 2],
            [-8, 0, 2],
            [-4, 0, 2],
          ],
          direction: 0,
          speed: 1.5,
        },
        {
          id: 'path-merge',
          points: [
            [-4, 0, -2],
            [0, 0, 0],
          ],
          direction: 0,
          speed: 1.3,
        },
        {
          id: 'path-merge-2',
          points: [
            [-4, 0, 2],
            [0, 0, 0],
          ],
          direction: 0,
          speed: 1.3,
        },
        {
          id: 'path-3',
          points: [
            [0, 0, 0],
            [4, 0, -1],
          ],
          direction: 0,
          speed: 1.4,
        },
        {
          id: 'path-4',
          points: [
            [0, 0, 0],
            [4, 0, 1],
          ],
          direction: 0,
          speed: 1.4,
        },
        {
          id: 'path-final',
          points: [
            [4, 0, -1],
            [8, 0, 0],
          ],
          direction: 0,
          speed: 1.2,
        },
        {
          id: 'path-final-2',
          points: [
            [4, 0, 1],
            [8, 0, 0],
          ],
          direction: 0,
          speed: 1.2,
        },
      ],
    },
    targetThroughput: 20,
    maxEfficiency: 95,
  },
];

// Main Factory Automation Simulator Component
export default function FactoryAutomationSimulator3D() {
  const [selectedScenario, setSelectedScenario] = useState(FACTORY_SCENARIOS[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);
  const [simulationTime, setSimulationTime] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [showControlPanel, setShowControlPanel] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);

  // Production statistics
  const [productionStats, setProductionStats] = useState<ProductionStats>({
    totalProduced: 0,
    currentThroughput: 0,
    overallEfficiency: 85,
    defectiveRate: 5,
  });

  // Factory simulation logic
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSimulationTime((prev) => prev + 1);

      // Generate new products
      if (Math.random() < 0.3) {
        const newProduct: Product = {
          id: `product-${Date.now()}-${Math.random()}`,
          position: [-10 + Math.random() * 2, 0.5, Math.random() * 4 - 2] as [number, number, number],
          stage: 'raw',
          quality: Math.random() * 100,
          defective: Math.random() < 0.05, // 5% defect rate
        };
        setProducts((prev) => [...prev, newProduct]);
      }

      // Move products through production line
      setProducts((prev) =>
        prev
          .map((product) => ({
            ...product,
            position: [
              product.position[0] + 0.1, // Move along X axis
              product.position[1],
              product.position[2],
            ] as [number, number, number],
          }))
          .filter((p) => p.position[0] < 12),
      ); // Remove products that exit the factory

      // Update production statistics
      setProductionStats((prev) => ({
        ...prev,
        currentThroughput: Math.floor(Math.random() * 5) + 15,
        overallEfficiency: Math.min(95, prev.overallEfficiency + (Math.random() - 0.5) * 2),
        defectiveRate: Math.max(0, Math.min(10, prev.defectiveRate + (Math.random() - 0.5) * 0.5)),
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  // Scenario change handler
  const changeScenario = (scenario: (typeof FACTORY_SCENARIOS)[0]) => {
    setSelectedScenario(scenario);
    setProducts([]);
    setIsRunning(false);
    setSimulationTime(0);
    setSelectedMachine(null);
  };

  const resetFactory = () => {
    setProducts([]);
    setSimulationTime(0);
    setProductionStats({
      totalProduced: 0,
      currentThroughput: 0,
      overallEfficiency: 85,
      defectiveRate: 5,
    });
  };

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  // Handle fullscreen changes and ESC key
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && document.fullscreenElement) {
        document.exitFullscreen();
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  const renderMachine = (machine: Machine) => {
    const commonProps = { machine, isRunning, onClick: () => setSelectedMachine(machine) };

    switch (machine.type) {
      case 'conveyor':
        const path = selectedScenario.layout.conveyorPaths.find((p) =>
          p.points.some((point) => Math.abs(point[0] - machine.position[0]) < 2),
        ) as { points: [number, number, number][]; speed: number } | undefined;
        return <ConveyorBelt3D key={machine.id} {...commonProps} path={path} />;
      case 'robot':
        return <RoboticArm3D key={machine.id} {...commonProps} />;
      case 'assembly':
      case 'inspection':
      case 'packaging':
        return <AssemblyStation3D key={machine.id} {...commonProps} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`${isFullscreen ? 'fixed inset-0 z-50 bg-gray-900' : 'relative w-full h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900'}`}
    >
      {/* Instructions Overlay */}
      {showInstructions && (
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-gray-900/95 p-8 rounded-2xl border border-blue-500/30 max-w-2xl mx-4">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">🏭 Factory Automation Simulator</h2>
              <p className="text-gray-300">Chào mừng đến với hệ thống mô phỏng nhà máy tự động hóa!</p>
            </div>

            <div className="space-y-4 text-gray-300 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">📖 Cốt truyện:</h3>
                <p>
                  Bạn là kỹ sư trưởng của một nhà máy hiện đại. Nhiệm vụ của bạn là thiết kế và vận hành hệ thống sản
                  xuất tự động để tối ưu hóa hiệu suất và chất lượng sản phẩm.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">🎮 Cách chơi:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Chọn kịch bản:</strong> Chọn loại nhà máy (Electronics, Automotive, Food)
                  </li>
                  <li>
                    <strong>Điều khiển máy móc:</strong> Click vào máy móc để xem thông tin và điều chỉnh
                  </li>
                  <li>
                    <strong>Bắt đầu sản xuất:</strong> Nhấn &ldquo;Start Production&rdquo; để khởi động dây chuyền
                  </li>
                  <li>
                    <strong>Theo dõi chỉ số:</strong> Giám sát hiệu suất, chất lượng và tỷ lệ lỗi
                  </li>
                  <li>
                    <strong>Tối ưu hóa:</strong> Điều chỉnh tốc độ và cấu hình để đạt hiệu quả tối đa
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">🎯 Mục tiêu:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Đạt hiệu suất sản xuất trên 90%</li>
                  <li>Giữ tỷ lệ lỗi dưới 3%</li>
                  <li>Sản xuất ít nhất 100 sản phẩm</li>
                  <li>Tối ưu hóa thời gian và chi phí sản xuất</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowInstructions(false)}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105"
              >
                🚀 Bắt Đầu Mô Phỏng
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Control Panel */}
      {!isFullscreen && showControlPanel && (
        <div className="absolute top-4 left-4 bg-gray-900/90 backdrop-blur-sm p-4 rounded-xl border border-white/20 max-w-sm z-10">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white font-bold flex items-center gap-2">🏭 Factory Control Center</h3>
            <button
              onClick={() => setShowControlPanel(false)}
              className="text-gray-400 hover:text-white transition-colors p-1"
              title="Đóng bảng điều khiển"
            >
              ✕
            </button>
          </div>

          {/* Scenario Selection */}
          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2">Factory Type:</label>
            <select
              value={selectedScenario.id}
              onChange={(e) => changeScenario(FACTORY_SCENARIOS.find((s) => s.id === e.target.value)!)}
              className="w-full bg-gray-800 text-white rounded px-3 py-2 text-sm border border-gray-600"
            >
              {FACTORY_SCENARIOS.map((scenario) => (
                <option key={scenario.id} value={scenario.id}>
                  {scenario.name}
                </option>
              ))}
            </select>
            <p className="text-gray-400 text-xs mt-1">{selectedScenario.description}</p>
          </div>

          {/* Production Statistics */}
          <div className="mb-4 p-3 bg-gray-800/50 rounded-lg">
            <h4 className="text-white font-semibold text-sm mb-2">📊 Production Stats</h4>
            <div className="space-y-1 text-xs">
              <div>
                Time:{' '}
                <span className="font-bold text-blue-400">
                  {Math.floor(simulationTime / 60)}:{(simulationTime % 60).toString().padStart(2, '0')}
                </span>
              </div>
              <div>
                Products: <span className="font-bold text-green-400">{products.length}</span>
              </div>
              <div>
                Throughput: <span className="font-bold text-purple-400">{productionStats.currentThroughput}/min</span>
              </div>
              <div>
                Efficiency:{' '}
                <span className="font-bold text-yellow-400">{productionStats.overallEfficiency.toFixed(0)}%</span>
              </div>
              <div>
                Defective: <span className="font-bold text-red-400">{productionStats.defectiveRate.toFixed(0)}%</span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className={`px-3 py-2 rounded text-white font-medium transition-colors text-xs ${
                  isRunning ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
                }`}
              >
                {isRunning ? '⏸️ Stop Production' : '▶️ Start Production'}
              </button>
              <button
                onClick={resetFactory}
                className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition-colors text-xs"
              >
                🔄 Reset Factory
              </button>
              <button
                onClick={toggleFullscreen}
                className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded font-medium transition-colors text-xs"
              >
                {isFullscreen ? '📱 Exit Full' : '🖥️ Fullscreen'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Control Panel Button - Show when panel is hidden and not in fullscreen */}
      {!isFullscreen && !showControlPanel && (
        <div className="absolute top-4 left-4 z-10">
          <div className="flex gap-2">
            <button
              onClick={() => setShowControlPanel(true)}
              className="px-3 py-2 bg-gray-900/90 backdrop-blur-sm hover:bg-gray-800/90 text-white rounded-lg border border-white/20 transition-colors text-xs font-medium"
              title="Mở bảng điều khiển"
            >
              🏭 Controls
            </button>
            <button
              onClick={toggleFullscreen}
              className="px-3 py-2 bg-indigo-600/90 backdrop-blur-sm hover:bg-indigo-700/90 text-white rounded-lg border border-white/20 transition-colors text-xs font-medium"
              title="Chế độ toàn màn hình"
            >
              🖥️ Fullscreen
            </button>
          </div>
        </div>
      )}

      {/* 3D Factory Scene */}
      <Canvas camera={{ position: [0, 10, 15], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <pointLight position={[-10, 10, -10]} intensity={0.5} />

        {/* Factory Floor */}
        <Plane args={[30, 20]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
          <meshPhongMaterial color="#1f2937" />
        </Plane>

        {/* Grid Lines */}
        {Array.from({ length: 31 }, (_, i) => (
          <Box key={`grid-x-${i}`} args={[0.02, 0.02, 20]} position={[i - 15, -0.4, 0]}>
            <meshBasicMaterial color="#374151" />
          </Box>
        ))}
        {Array.from({ length: 21 }, (_, i) => (
          <Box key={`grid-z-${i}`} args={[30, 0.02, 0.02]} position={[0, -0.4, i - 10]}>
            <meshBasicMaterial color="#374151" />
          </Box>
        ))}

        {/* Factory Machines */}
        {selectedScenario.layout.machines.map((machine) => renderMachine(machine as Machine))}

        {/* Conveyor Paths Visualization */}
        {selectedScenario.layout.conveyorPaths.map((path) => (
          <group key={path.id}>
            {path.points.slice(0, -1).map((point, index) => {
              const nextPoint = path.points[index + 1];
              const center = [(point[0] + nextPoint[0]) / 2, 0.1, (point[2] + nextPoint[2]) / 2] as [
                number,
                number,
                number,
              ];
              const length = Math.sqrt(Math.pow(nextPoint[0] - point[0], 2) + Math.pow(nextPoint[2] - point[2], 2));

              return (
                <Box key={index} args={[length, 0.05, 0.3]} position={center}>
                  <meshBasicMaterial color="#fbbf24" opacity={0.6} transparent />
                </Box>
              );
            })}
          </group>
        ))}

        {/* Products */}
        {products.map((product) => (
          <Product3D key={product.id} product={product} />
        ))}

        <OrbitControls enablePan={true} maxPolarAngle={Math.PI / 2} minDistance={5} maxDistance={30} />
      </Canvas>

      {/* Machine Details Panel - now available in fullscreen too */}
      {selectedMachine && (
        <div className={`absolute top-4 right-4 bg-gray-900/90 backdrop-blur-sm p-4 rounded-xl border border-white/20 max-w-sm z-10 ${isFullscreen ? 'text-white' : ''}`}>
          <h4 className="text-white font-bold mb-2 flex items-center gap-2">🔧 {selectedMachine.id}</h4>
          <div className="space-y-2 text-sm">
            <div>
              Type: <span className="font-bold text-blue-400 capitalize">{selectedMachine.type}</span>
            </div>
            <div>
              Status:{' '}
              <span
                className={`font-bold ${
                  selectedMachine.status === 'working'
                    ? 'text-green-400'
                    : selectedMachine.status === 'error'
                      ? 'text-red-400'
                      : selectedMachine.status === 'maintenance'
                        ? 'text-yellow-400'
                        : 'text-gray-400'
                }`}
              >
                {selectedMachine.status}
              </span>
            </div>
            <div>
              Throughput: <span className="font-bold text-purple-400">{selectedMachine.throughput}/min</span>
            </div>
            <div>
              Efficiency: <span className="font-bold text-yellow-400">{selectedMachine.efficiency}%</span>
            </div>
          </div>
          
          {/* Machine Controls */}
          <div className="mt-4 space-y-2">
            <button
              onClick={() => {
                // Toggle machine active state
                const updatedMachines = selectedScenario.layout.machines.map(m => 
                  m.id === selectedMachine.id 
                    ? { ...m, isActive: !m.isActive, status: (m.isActive ? 'idle' : 'working') as Machine['status'] }
                    : m
                );
                setSelectedScenario({
                  ...selectedScenario,
                  layout: {
                    ...selectedScenario.layout,
                    machines: updatedMachines
                  }
                });
                setSelectedMachine((updatedMachines.find(m => m.id === selectedMachine.id) as Machine) || null);
              }}
              className={`w-full px-3 py-1 rounded text-xs font-semibold ${
                selectedMachine.isActive 
                  ? 'bg-red-600 hover:bg-red-700 text-white' 
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              {selectedMachine.isActive ? '⏹️ Stop Machine' : '▶️ Start Machine'}
            </button>
            
            <button
              onClick={() => {
                // Adjust machine speed/efficiency
                const updatedMachines = selectedScenario.layout.machines.map(m => 
                  m.id === selectedMachine.id 
                    ? { ...m, efficiency: Math.min(100, m.efficiency + 10) }
                    : m
                );
                setSelectedScenario({
                  ...selectedScenario,
                  layout: {
                    ...selectedScenario.layout,
                    machines: updatedMachines
                  }
                });
                setSelectedMachine((updatedMachines.find(m => m.id === selectedMachine.id) as Machine) || null);
              }}
              className="w-full px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-semibold"
            >
              ⚡ Boost Efficiency (+10%)
            </button>
            
            <button
              onClick={() => {
                // Maintenance mode
                const updatedMachines = selectedScenario.layout.machines.map(m => 
                  m.id === selectedMachine.id 
                    ? { ...m, status: m.status === 'maintenance' ? 'idle' : 'maintenance' }
                    : m
                );
                setSelectedScenario({
                  ...selectedScenario,
                  layout: {
                    ...selectedScenario.layout,
                    machines: updatedMachines
                  }
                });
                setSelectedMachine((updatedMachines.find(m => m.id === selectedMachine.id) as Machine) || null);
              }}
              className={`w-full px-3 py-1 rounded text-xs font-semibold ${
                selectedMachine.status === 'maintenance'
                  ? 'bg-gray-600 hover:bg-gray-700 text-white'
                  : 'bg-yellow-600 hover:bg-yellow-700 text-white'
              }`}
            >
              {selectedMachine.status === 'maintenance' ? '🔧 End Maintenance' : '🛠️ Start Maintenance'}
            </button>
          </div>

          <button
            onClick={() => setSelectedMachine(null)}
            className="mt-3 px-3 py-1 bg-gray-600 hover:bg-gray-700 text-white rounded text-xs w-full"
          >
            Close
          </button>
        </div>
      )}

      {/* Scenario Information */}
      {!isFullscreen && (
        <div className="absolute bottom-4 left-4 bg-gray-900/90 backdrop-blur-sm p-4 rounded-xl border border-white/20 max-w-md z-10">
          <h4 className="text-white font-bold mb-2">🎯 Target Metrics</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-400">Target Throughput</div>
              <div className="font-bold text-green-400">{selectedScenario.targetThroughput}/min</div>
            </div>
            <div>
              <div className="text-gray-400">Max Efficiency</div>
              <div className="font-bold text-yellow-400">{selectedScenario.maxEfficiency}%</div>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      {!isRunning && !isFullscreen && (
        <div className="absolute bottom-4 right-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm p-4 rounded-xl border border-purple-400/30 max-w-sm z-10">
          <h4 className="text-white font-bold mb-2">🚀 Quick Start</h4>
          <div className="text-sm text-gray-300 space-y-1">
            <div>• Choose a factory scenario</div>
            <div>• Click &quot;Start Production&quot;</div>
            <div>• Monitor real-time metrics</div>
            <div>• Click machines for details</div>
          </div>
          <button
            onClick={() => setIsRunning(true)}
            className="mt-3 w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded font-bold hover:from-purple-700 hover:to-blue-700 transition-all"
          >
            🏁 Start Production
          </button>
        </div>
      )}
    </div>
  );
}
