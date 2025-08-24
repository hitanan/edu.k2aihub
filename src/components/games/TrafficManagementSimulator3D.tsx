'use client';

import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere, Cylinder } from '@react-three/drei';
import * as THREE from 'three';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Settings, 
  Car, 
  BarChart3
} from 'lucide-react';

// Interfaces for traffic management system
interface Vehicle {
  id: string;
  position: [number, number, number];
  destination: [number, number, number];
  speed: number;
  type: 'car' | 'truck' | 'bus' | 'emergency';
  priority: number;
  route: [number, number, number][];
  waitTime: number;
}

interface TrafficLight {
  id: string;
  position: [number, number, number];
  state: 'red' | 'yellow' | 'green';
  timer: number;
  maxTimer: number;
  intersection: string;
}

interface Road {
  id: string;
  start: [number, number, number];
  end: [number, number, number];
  lanes: number;
  congestion: number; // 0-1
  speedLimit: number;
}

interface Intersection {
  id: string;
  position: [number, number, number];
  connectedRoads: string[];
  trafficFlow: number;
  waitingVehicles: number;
}

interface GameState {
  isRunning: boolean;
  isPaused: boolean;
  totalVehicles: number;
  averageSpeed: number;
  totalWaitTime: number;
  congestionLevel: number;
  emergencyVehicles: number;
  trafficFlowRate: number;
  simulationSpeed: number;
  showStats: boolean;
  selectedIntersection: string | null;
  aiOptimization: boolean;
}

// Vehicle component with 3D representation and movement
const Vehicle3D: React.FC<{
  vehicle: Vehicle;
  onSelect: (id: string) => void;
}> = ({ vehicle, onSelect }) => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current && vehicle.route.length > 0) {
      // Move vehicle along route
      const target = vehicle.route[0];
      const current = vehicle.position;
      
      const direction = [
        target[0] - current[0],
        target[1] - current[1],
        target[2] - current[2]
      ];
      
      const distance = Math.sqrt(direction[0] ** 2 + direction[1] ** 2 + direction[2] ** 2);
      
      if (distance > 0.1) {
        const moveDistance = vehicle.speed * delta;
        const moveRatio = moveDistance / distance;
        
        meshRef.current.position.lerp(
          new THREE.Vector3(
            current[0] + direction[0] * moveRatio,
            current[1] + direction[1] * moveRatio,
            current[2] + direction[2] * moveRatio
          ),
          0.5
        );
        
        // Rotate vehicle to face movement direction
        meshRef.current.lookAt(new THREE.Vector3(...target));
      }
    }
  });

  const getVehicleColor = (type: string) => {
    switch (type) {
      case 'car': return '#3B82F6';
      case 'truck': return '#EF4444';
      case 'bus': return '#F59E0B';
      case 'emergency': return '#DC2626';
      default: return '#6B7280';
    }
  };

  const getVehicleSize = (type: string): [number, number, number] => {
    switch (type) {
      case 'car': return [0.4, 0.2, 0.8];
      case 'truck': return [0.5, 0.3, 1.2];
      case 'bus': return [0.5, 0.3, 1.5];
      case 'emergency': return [0.4, 0.2, 0.9];
      default: return [0.4, 0.2, 0.8];
    }
  };

  return (
    <group 
      ref={meshRef} 
      position={vehicle.position}
      onClick={() => onSelect(vehicle.id)}
    >
      <Box args={getVehicleSize(vehicle.type)}>
        <meshPhongMaterial 
          color={getVehicleColor(vehicle.type)}
          transparent
          opacity={vehicle.waitTime > 5 ? 0.7 : 0.9}
        />
      </Box>
      
      {/* Emergency vehicle flashing lights */}
      {vehicle.type === 'emergency' && (
        <Sphere args={[0.1]} position={[0, 0.3, 0]}>
          <meshPhongMaterial 
            color="#FF0000"
            emissive="#FF0000"
            emissiveIntensity={Math.sin(Date.now() * 0.01) > 0 ? 0.8 : 0.2}
          />
        </Sphere>
      )}
      
      {/* Wait time indicator */}
      {vehicle.waitTime > 3 && (
        <Text
          position={[0, 0.5, 0]}
          fontSize={0.2}
          color="#FF4444"
          anchorX="center"
          anchorY="middle"
        >
          {vehicle.waitTime.toFixed(1)}s
        </Text>
      )}
    </group>
  );
};

// Traffic light component with state visualization
const TrafficLight3D: React.FC<{
  light: TrafficLight;
  onSelect: (id: string) => void;
}> = ({ light, onSelect }) => {
  const lightRef = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (lightRef.current) {
      // Animate light intensity based on state
      const intensity = light.state === 'green' ? 0.8 : 
                       light.state === 'yellow' ? 0.6 : 0.4;
      lightRef.current.scale.setScalar(1 + intensity * 0.1);
    }
  });

  const getLightColor = () => {
    switch (light.state) {
      case 'red': return '#EF4444';
      case 'yellow': return '#F59E0B';
      case 'green': return '#10B981';
      default: return '#6B7280';
    }
  };

  return (
    <group 
      ref={lightRef}
      position={light.position}
      onClick={() => onSelect(light.id)}
    >
      {/* Traffic light pole */}
      <Cylinder args={[0.05, 0.05, 2]} position={[0, 1, 0]}>
        <meshPhongMaterial color="#4B5563" />
      </Cylinder>
      
      {/* Light housing */}
      <Box args={[0.3, 0.8, 0.2]} position={[0, 2, 0]}>
        <meshPhongMaterial color="#1F2937" />
      </Box>
      
      {/* Active light */}
      <Sphere args={[0.1]} position={[0, 2, 0.15]}>
        <meshPhongMaterial 
          color={getLightColor()}
          emissive={getLightColor()}
          emissiveIntensity={0.5}
        />
      </Sphere>
      
      {/* Timer display */}
      <Text
        position={[0, 1.5, 0.2]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {light.timer.toFixed(0)}
      </Text>
    </group>
  );
};

// Road component with congestion visualization
const Road3D: React.FC<{
  road: Road;
}> = ({ road }) => {
  const roadRef = useRef<THREE.Mesh>(null);
  
  // Calculate road properties
  const length = Math.sqrt(
    (road.end[0] - road.start[0]) ** 2 +
    (road.end[1] - road.start[1]) ** 2 +
    (road.end[2] - road.start[2]) ** 2
  );
  
  const midPoint: [number, number, number] = [
    (road.start[0] + road.end[0]) / 2,
    (road.start[1] + road.end[1]) / 2,
    (road.start[2] + road.end[2]) / 2
  ];

  const getCongestionColor = () => {
    const red = Math.min(255, road.congestion * 255);
    const green = Math.max(0, 255 - road.congestion * 255);
    return `rgb(${red}, ${green}, 0)`;
  };

  return (
    <group>
      {/* Road surface */}
      <Box 
        ref={roadRef}
        args={[road.lanes * 0.5, 0.05, length]} 
        position={midPoint}
      >
        <meshPhongMaterial 
          color={road.congestion > 0.7 ? '#EF4444' : '#6B7280'}
          transparent
          opacity={0.8}
        />
      </Box>
      
      {/* Lane markings */}
      {Array.from({ length: road.lanes - 1 }, (_, i) => (
        <Box 
          key={`lane-${i}`}
          args={[0.02, 0.06, length]} 
          position={[
            midPoint[0] + (i + 1 - road.lanes / 2) * 0.5,
            midPoint[1] + 0.03,
            midPoint[2]
          ]}
        >
          <meshBasicMaterial color="white" />
        </Box>
      ))}
      
      {/* Congestion indicator */}
      {road.congestion > 0.5 && (
        <Text
          position={[midPoint[0], midPoint[1] + 0.5, midPoint[2]]}
          fontSize={0.2}
          color={getCongestionColor()}
          anchorX="center"
          anchorY="middle"
        >
          {(road.congestion * 100).toFixed(0)}% Congestion
        </Text>
      )}
    </group>
  );
};

// Main traffic management simulator component
const TrafficManagementSimulator3D: React.FC = () => {
  // Instructions state
  const [showInstructions, setShowInstructions] = useState(true);
  
  const [gameState, setGameState] = useState<GameState>({
    isRunning: false,
    isPaused: false,
    totalVehicles: 50,
    averageSpeed: 25,
    totalWaitTime: 0,
    congestionLevel: 0.3,
    emergencyVehicles: 0,
    trafficFlowRate: 15,
    simulationSpeed: 1.0,
    showStats: true,
    selectedIntersection: null,
    aiOptimization: false
  });

  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [trafficLights, setTrafficLights] = useState<TrafficLight[]>([]);
  const [roads, setRoads] = useState<Road[]>([]);
  const [intersections, setIntersections] = useState<Intersection[]>([]);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);

  // Initialize traffic system
  useEffect(() => {
    initializeTrafficSystem();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Game loop
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (gameState.isRunning && !gameState.isPaused) {
      interval = setInterval(() => {
        setTime(prev => prev + 1);
        updateTrafficSimulation();
      }, 1000 / gameState.simulationSpeed);
    }
    
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState.isRunning, gameState.isPaused, gameState.simulationSpeed]);

  const initializeTrafficSystem = () => {
    // Create a grid-based city layout
    const newRoads: Road[] = [];
    const newIntersections: Intersection[] = [];
    const newTrafficLights: TrafficLight[] = [];
    const newVehicles: Vehicle[] = [];

    // Create main roads
    for (let i = -2; i <= 2; i++) {
      for (let j = -2; j <= 2; j++) {
        const roadId = `road-${i}-${j}`;
        
        // Horizontal roads
        if (j < 2) {
          newRoads.push({
            id: `${roadId}-h`,
            start: [i * 3, 0, j * 3],
            end: [i * 3, 0, (j + 1) * 3],
            lanes: 2,
            congestion: Math.random() * 0.6,
            speedLimit: 50
          });
        }
        
        // Vertical roads
        if (i < 2) {
          newRoads.push({
            id: `${roadId}-v`,
            start: [i * 3, 0, j * 3],
            end: [(i + 1) * 3, 0, j * 3],
            lanes: 2,
            congestion: Math.random() * 0.6,
            speedLimit: 50
          });
        }
        
        // Intersections
        newIntersections.push({
          id: `intersection-${i}-${j}`,
          position: [i * 3, 0, j * 3],
          connectedRoads: [],
          trafficFlow: Math.random() * 20,
          waitingVehicles: 0
        });
        
        // Traffic lights at intersections
        newTrafficLights.push({
          id: `light-${i}-${j}`,
          position: [i * 3 + 0.5, 0, j * 3 + 0.5],
          state: Math.random() > 0.5 ? 'red' : 'green',
          timer: Math.random() * 30 + 10,
          maxTimer: 30,
          intersection: `intersection-${i}-${j}`
        });
      }
    }

    // Create vehicles
    for (let i = 0; i < gameState.totalVehicles; i++) {
      const vehicleTypes: Vehicle['type'][] = ['car', 'truck', 'bus'];
      const type = vehicleTypes[Math.floor(Math.random() * vehicleTypes.length)];
      
      newVehicles.push({
        id: `vehicle-${i}`,
        position: [
          (Math.random() - 0.5) * 12,
          0.1,
          (Math.random() - 0.5) * 12
        ],
        destination: [
          (Math.random() - 0.5) * 12,
          0.1,
          (Math.random() - 0.5) * 12
        ],
        speed: 2 + Math.random() * 3,
        type,
        priority: type === 'emergency' ? 10 : Math.random() * 5,
        route: [],
        waitTime: 0
      });
    }

    setRoads(newRoads);
    setIntersections(newIntersections);
    setTrafficLights(newTrafficLights);
    setVehicles(newVehicles);
  };

  const updateTrafficSimulation = () => {
    // Update traffic lights
    setTrafficLights(prevLights => 
      prevLights.map(light => {
        let newTimer = light.timer - 1;
        let newState = light.state;
        
        if (newTimer <= 0) {
          newState = light.state === 'red' ? 'green' : 
                    light.state === 'green' ? 'yellow' : 'red';
          newTimer = light.maxTimer;
        }
        
        return { ...light, timer: newTimer, state: newState };
      })
    );

    // Update vehicles
    setVehicles(prevVehicles => 
      prevVehicles.map(vehicle => {
        const newWaitTime = vehicle.speed < 0.5 ? vehicle.waitTime + 1 : 0;
        
        // Generate new route if needed
        const newRoute = vehicle.route.length === 0 ? 
          generateRandomRoute(vehicle.position, vehicle.destination) : 
          vehicle.route.slice(1);
        
        return {
          ...vehicle,
          waitTime: newWaitTime,
          route: newRoute
        };
      })
    );

    // Update game statistics
    setGameState(prev => ({
      ...prev,
      totalWaitTime: vehicles.reduce((sum, v) => sum + v.waitTime, 0),
      averageSpeed: vehicles.reduce((sum, v) => sum + v.speed, 0) / vehicles.length,
      congestionLevel: roads.reduce((sum, r) => sum + r.congestion, 0) / roads.length
    }));

    // Update score based on traffic efficiency
    const efficiency = Math.max(0, 100 - gameState.totalWaitTime / 10 - gameState.congestionLevel * 50);
    setScore(prev => prev + Math.floor(efficiency));
  };

  const generateRandomRoute = (start: [number, number, number], end: [number, number, number]) => {
    const route: [number, number, number][] = [];
    const steps = Math.floor(Math.random() * 5) + 3;
    
    for (let i = 0; i < steps; i++) {
      const progress = (i + 1) / steps;
      route.push([
        start[0] + (end[0] - start[0]) * progress + (Math.random() - 0.5) * 2,
        start[1],
        start[2] + (end[2] - start[2]) * progress + (Math.random() - 0.5) * 2
      ]);
    }
    
    return route;
  };

  const handleStart = () => {
    setGameState(prev => ({ ...prev, isRunning: true, isPaused: false }));
  };

  const handlePause = () => {
    setGameState(prev => ({ ...prev, isPaused: !prev.isPaused }));
  };

  const handleReset = () => {
    setGameState(prev => ({
      ...prev,
      isRunning: false,
      isPaused: false,
      totalWaitTime: 0,
      selectedIntersection: null
    }));
    setScore(0);
    setTime(0);
    initializeTrafficSystem();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.3),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.3),transparent)] pointer-events-none" />
      
      {/* Instructions Overlay */}
      {showInstructions && (
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="max-w-4xl mx-auto p-8 bg-black/60 backdrop-blur rounded-2xl border border-blue-500/30">
            <div className="text-center mb-6">
              <Car className="w-16 h-16 mx-auto mb-4 text-blue-400" />
              <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Traffic Management Simulator 3D
              </h2>
              <p className="text-xl text-gray-300">Quản lý giao thông thông minh - Tối ưu hóa lưu lượng và giảm ùn tắc</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-blue-400 mb-3">🎯 Mục Tiêu Trò Chơi</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-yellow-400">Tối Ưu Lưu Lượng Giao Thông</div>
                      <div className="text-gray-300">Điều chỉnh đèn giao thông để xe cộ di chuyển mượt mà</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-green-400">Giảm Thời Gian Chờ</div>
                      <div className="text-gray-300">Đảm bảo xe không phải đợi quá lâu tại ngã tư</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-purple-400">Xử Lý Tình Huống Khẩn Cấp</div>
                      <div className="text-gray-300">Ưu tiên xe cứu thương và xe cứu hỏa</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-green-400 mb-3">🎮 Cách Chơi</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded text-center text-xs font-bold flex items-center justify-center flex-shrink-0">1</div>
                    <div>
                      <div className="font-semibold">Quan Sát Giao Thông</div>
                      <div className="text-gray-300">Xem xe cộ di chuyển và tình trạng ùn tắc</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded text-center text-xs font-bold flex items-center justify-center flex-shrink-0">2</div>
                    <div>
                      <div className="font-semibold">Điều Chỉnh Đèn Giao Thông</div>
                      <div className="text-gray-300">Click vào ngã tư để thay đổi chu kỳ đèn</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded text-center text-xs font-bold flex items-center justify-center flex-shrink-0">3</div>
                    <div>
                      <div className="font-semibold">Theo Dõi Chỉ Số</div>
                      <div className="text-gray-300">Kiểm tra tốc độ trung bình và mức ùn tắc</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded text-center text-xs font-bold flex items-center justify-center flex-shrink-0">4</div>
                    <div>
                      <div className="font-semibold">Tối Ưu Hệ Thống</div>
                      <div className="text-gray-300">Đạt điểm cao bằng cách giảm ùn tắc</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-600 pt-6">
              <h3 className="text-xl font-bold text-center mb-4 text-orange-400">💡 Mẹo Chơi Hiệu Quả</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl mb-2">🚨</div>
                  <div className="font-semibold">Xe Ưu Tiên</div>
                  <div className="text-gray-300">Luôn nhường đường cho xe cứu thương</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">⏱️</div>
                  <div className="font-semibold">Thời Gian Đèn</div>
                  <div className="text-gray-300">Điều chỉnh chu kỳ theo lưu lượng xe</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📊</div>
                  <div className="font-semibold">Theo Dõi Metrics</div>
                  <div className="text-gray-300">Chú ý tốc độ trung bình và thời gian chờ</div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                onClick={() => setShowInstructions(false)}
                className="inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-green-600 rounded-xl hover:from-blue-700 hover:to-green-700 transition-all transform hover:scale-105"
              >
                <Play className="w-6 h-6 mr-2" />
                Bắt Đầu Quản Lý Giao Thông
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Game UI */}
      <div className="absolute top-4 left-4 z-10 bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-white/10">
        <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
          <Car className="w-5 h-5" />
          Traffic Management Simulator 3D
        </h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-400">Score:</span>
            <span className="ml-2 font-bold text-yellow-400">{score}</span>
          </div>
          <div>
            <span className="text-gray-400">Time:</span>
            <span className="ml-2 font-bold">{formatTime(time)}</span>
          </div>
          <div>
            <span className="text-gray-400">Vehicles:</span>
            <span className="ml-2 font-bold text-blue-400">{vehicles.length}</span>
          </div>
          <div>
            <span className="text-gray-400">Avg Speed:</span>
            <span className="ml-2 font-bold text-green-400">{gameState.averageSpeed.toFixed(1)} km/h</span>
          </div>
          <div>
            <span className="text-gray-400">Wait Time:</span>
            <span className="ml-2 font-bold text-red-400">{gameState.totalWaitTime.toFixed(1)}s</span>
          </div>
          <div>
            <span className="text-gray-400">Congestion:</span>
            <span className="ml-2 font-bold text-orange-400">{(gameState.congestionLevel * 100).toFixed(0)}%</span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <button
          onClick={handleStart}
          disabled={gameState.isRunning && !gameState.isPaused}
          className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 px-4 py-2 rounded-lg font-bold transition-colors flex items-center gap-2"
        >
          <Play className="w-4 h-4" />
          Start
        </button>
        <button
          onClick={handlePause}
          disabled={!gameState.isRunning}
          className="bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-600 px-4 py-2 rounded-lg font-bold transition-colors flex items-center gap-2"
        >
          <Pause className="w-4 h-4" />
          Pause
        </button>
        <button
          onClick={handleReset}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-bold transition-colors flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </button>
      </div>

      {/* Settings Panel */}
      <div className="absolute bottom-4 left-4 z-10 bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-white/10">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <Settings className="w-4 h-4" />
          Settings
        </h3>
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={gameState.showStats}
              onChange={(e) => setGameState(prev => ({ ...prev, showStats: e.target.checked }))}
              className="rounded"
            />
            Show Statistics
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={gameState.aiOptimization}
              onChange={(e) => setGameState(prev => ({ ...prev, aiOptimization: e.target.checked }))}
              className="rounded"
            />
            AI Optimization
          </label>
          <div>
            <label className="block text-gray-400 mb-1">Simulation Speed</label>
            <input
              type="range"
              min="0.5"
              max="3"
              step="0.1"
              value={gameState.simulationSpeed}
              onChange={(e) => setGameState(prev => ({ ...prev, simulationSpeed: parseFloat(e.target.value) }))}
              className="w-full"
            />
            <span className="text-xs text-gray-400">{gameState.simulationSpeed.toFixed(1)}x</span>
          </div>
          <div>
            <label className="block text-gray-400 mb-1">Traffic Flow Rate</label>
            <input
              type="range"
              min="5"
              max="30"
              step="1"
              value={gameState.trafficFlowRate}
              onChange={(e) => setGameState(prev => ({ ...prev, trafficFlowRate: parseInt(e.target.value) }))}
              className="w-full"
            />
            <span className="text-xs text-gray-400">{gameState.trafficFlowRate} vehicles/min</span>
          </div>
        </div>
      </div>

      {/* Stats Panel */}
      {gameState.showStats && (
        <div className="absolute bottom-4 right-4 z-10 bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-white/10">
          <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            Traffic Analytics
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Traffic Lights:</span>
              <span className="text-blue-400">{trafficLights.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Intersections:</span>
              <span className="text-green-400">{intersections.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Road Network:</span>
              <span className="text-purple-400">{roads.length} segments</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Emergency Vehicles:</span>
              <span className="text-red-400">{gameState.emergencyVehicles}</span>
            </div>
            <div className="mt-2 pt-2 border-t border-white/10">
              <div className="text-xs text-gray-400 mb-1">System Efficiency</div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-2 rounded-full" 
                  style={{ width: `${Math.max(0, 100 - gameState.congestionLevel * 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [15, 12, 15], fov: 60 }}
        className="absolute inset-0"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <pointLight position={[-10, 10, -10]} intensity={0.4} />
          <directionalLight position={[0, 20, 0]} intensity={0.6} />
          
          {/* Render roads */}
          {roads.map(road => (
            <Road3D key={road.id} road={road} />
          ))}
          
          {/* Render traffic lights */}
          {trafficLights.map(light => (
            <TrafficLight3D
              key={light.id}
              light={light}
              onSelect={(id) => console.log('Traffic light selected:', id)}
            />
          ))}
          
          {/* Render vehicles */}
          {vehicles.map(vehicle => (
            <Vehicle3D
              key={vehicle.id}
              vehicle={vehicle}
              onSelect={(id) => console.log('Vehicle selected:', id)}
            />
          ))}
          
          {/* City ground */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
            <planeGeometry args={[30, 30]} />
            <meshPhongMaterial color="#2D3748" transparent opacity={0.8} />
          </mesh>
          
          {/* City buildings (simple boxes) */}
          {Array.from({ length: 20 }, (_, i) => (
            <Box 
              key={`building-${i}`}
              args={[
                0.8 + Math.random() * 0.4, 
                1 + Math.random() * 2, 
                0.8 + Math.random() * 0.4
              ]}
              position={[
                (Math.random() - 0.5) * 12 + (Math.random() > 0.5 ? 1.5 : -1.5),
                0.5 + Math.random(),
                (Math.random() - 0.5) * 12 + (Math.random() > 0.5 ? 1.5 : -1.5)
              ]}
            >
              <meshPhongMaterial color="#4A5568" />
            </Box>
          ))}
          
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            maxDistance={30}
            minDistance={5}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>

      {/* Instructions */}
      <div className="absolute bottom-4 center-4 z-10 text-center">
        <div className="bg-black/20 backdrop-blur-sm rounded-lg p-2 border border-white/10 text-xs text-gray-300">
          Mouse to navigate • Monitor traffic flow • Optimize intersections
        </div>
      </div>
    </div>
  );
};

export default TrafficManagementSimulator3D;