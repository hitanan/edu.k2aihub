'use client';

import React, { useState, useEffect, useCallback, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Sphere, Cylinder, Text, Environment, Trail, Float } from '@react-three/drei';
import { create } from 'zustand';
import * as THREE from 'three';
import {
  Bot,
  Navigation,
  Target,
  Shield,
  Cpu,
  Battery,
  Wifi,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  Clock,
  MapPin,
} from 'lucide-react';

const calculatePath = (start: THREE.Vector3, end: THREE.Vector3, obstacles: THREE.Vector3[]): THREE.Vector3[] => {
  const path: THREE.Vector3[] = [];
  let currentPos = start.clone();
  path.push(currentPos.clone());

  const MAX_STEPS = 200; // Safety break
  let steps = 0;

  while (currentPos.distanceTo(end) > 0.5 && steps < MAX_STEPS) {
    steps++;
    const direction = end.clone().sub(currentPos).normalize();
    let nextPos = currentPos.clone().add(direction.clone().multiplyScalar(0.5));

    for (const obstacle of obstacles) {
      if (nextPos.distanceTo(obstacle) < 1.2) {
        // Obstacle detected, try to find a way around
        const avoidanceVector = new THREE.Vector3(-direction.z, 0, direction.x).normalize().multiplyScalar(1.5);
        
        // Try right
        const rightPos = nextPos.clone().add(avoidanceVector);
        let rightBlocked = false;
        for (const obs of obstacles) {
          if (rightPos.distanceTo(obs) < 1.2) {
            rightBlocked = true;
            break;
          }
        }
        if (!rightBlocked) {
          nextPos = rightPos;
          break; // Found a way
        }

        // Try left
        const leftPos = nextPos.clone().sub(avoidanceVector);
        let leftBlocked = false;
        for (const obs of obstacles) {
          if (leftPos.distanceTo(obs) < 1.2) {
            leftBlocked = true;
            break;
          }
        }
        if (!leftBlocked) {
          nextPos = leftPos;
          break; // Found a way
        }

        // If both are blocked, we are stuck. For now, just stop.
        nextPos = currentPos; // Stay put
        break;
      }
    }
    currentPos = nextPos;
    path.push(currentPos.clone());
  }

  path.push(end.clone());
  return path;
};

interface AutonomousRobotMission3DProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface RobotData {
  position: THREE.Vector3;
  rotation: THREE.Euler;
  velocity: THREE.Vector3;
  battery: number;
  health: number;
  sensors: {
    lidar: boolean;
    camera: boolean;
    ultrasonic: boolean;
    imu: boolean;
  };
  mode: 'idle' | 'navigating' | 'scanning' | 'collecting' | 'returning';
  pathIndex: number;
  collectedItems: number;
}

interface Mission {
  id: string;
  name: string;
  description: string;
  targets: THREE.Vector3[];
  obstacles: THREE.Vector3[];
  timeLimit: number;
  requiredItems: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

interface GameState {
  robot: RobotData;
  currentMission: Mission | null;
  isRunning: boolean;
  score: number;
  missionTime: number;
  gamePhase: 'setup' | 'running' | 'completed';
  pathPlanning: THREE.Vector3[];
  obstacles: THREE.Vector3[];
  targets: THREE.Vector3[];
  collectibles: THREE.Vector3[];
  setMission: (mission: Mission) => void;
  updateRobot: (updates: Partial<RobotData>) => void;
  setRunning: (running: boolean) => void;
  addScore: (points: number) => void;
  setGamePhase: (phase: GameState['gamePhase']) => void;
  collectItem: (position: THREE.Vector3) => void;
  planPath: (start: THREE.Vector3, end: THREE.Vector3) => void;
}

const useRobotStore = create<GameState>((set, get) => ({
  robot: {
    position: new THREE.Vector3(0, 0.5, 0),
    rotation: new THREE.Euler(0, 0, 0),
    velocity: new THREE.Vector3(0, 0, 0),
    battery: 100,
    health: 100,
    sensors: {
      lidar: true,
      camera: true,
      ultrasonic: true,
      imu: true,
    },
    mode: 'idle',
    pathIndex: 0,
    collectedItems: 0,
  },
  currentMission: null,
  isRunning: false,
  score: 0,
  missionTime: 0,
  gamePhase: 'setup',
  pathPlanning: [],
  obstacles: [],
  targets: [],
  collectibles: [],

  setMission: (mission) =>
    set({
      currentMission: mission,
      obstacles: mission.obstacles,
      targets: mission.targets,
      collectibles: mission.targets.map((t) => t.clone()),
      robot: { // Reset robot state on new mission
        position: new THREE.Vector3(0, 0.5, 0),
        rotation: new THREE.Euler(0, 0, 0),
        velocity: new THREE.Vector3(0, 0, 0),
        battery: 100,
        health: 100,
        sensors: { lidar: true, camera: true, ultrasonic: true, imu: true },
        mode: 'idle',
        pathIndex: 0,
        collectedItems: 0,
      },
      pathPlanning: [],
      score: 0,
    }),

  updateRobot: (updates) =>
    set((state) => ({
      robot: { ...state.robot, ...updates },
    })),

  setRunning: (running) => set({ isRunning: running }),
  addScore: (points) => set((state) => ({ score: state.score + points })),
  setGamePhase: (phase) => set({ gamePhase: phase }),

  collectItem: (position) => {
    set(state => {
      const { collectibles, robot, currentMission, score, obstacles } = state;

      const isPresent = collectibles.some((c) => c.distanceTo(position) < 0.8);
      if (!isPresent) return state;

      const newCollectibles = collectibles.filter((c) => c.distanceTo(position) > 0.5);
      const newScore = score + 100;
      const newCollectedItemsCount = robot.collectedItems + 1;

      if (currentMission && newCollectedItemsCount < currentMission.requiredItems) {
        const nextTarget = currentMission.targets[newCollectedItemsCount];
        const newPath = calculatePath(robot.position, nextTarget, obstacles);

        return {
          ...state,
          collectibles: newCollectibles,
          score: newScore,
          pathPlanning: newPath,
          robot: {
            ...robot,
            mode: 'navigating',
            collectedItems: newCollectedItemsCount,
            pathIndex: 0,
          },
        };
      } else {
        // All items collected, return to base
        const returnPath = calculatePath(robot.position, new THREE.Vector3(0, 0.5, 0), obstacles);
        return {
          ...state,
          collectibles: newCollectibles,
          score: newScore,
          pathPlanning: returnPath,
          robot: {
            ...robot,
            mode: 'returning',
            collectedItems: newCollectedItemsCount,
            pathIndex: 0,
          },
        };
      }
    });
  },

  planPath: (start, end) => {
    const { obstacles } = get();
    const path = calculatePath(start, end, obstacles);
    set({ pathPlanning: path });
  },
}));

const MISSIONS: Mission[] = [
  {
    id: 'warehouse_patrol',
    name: 'Tuần tra kho hàng',
    description: 'Robot tuần tra và thu thập dữ liệu trong kho hàng tự động',
    targets: [
      new THREE.Vector3(3, 0.5, 3),
      new THREE.Vector3(-3, 0.5, 3),
      new THREE.Vector3(-3, 0.5, -3),
      new THREE.Vector3(3, 0.5, -3),
    ],
    obstacles: [new THREE.Vector3(1, 0.5, 1), new THREE.Vector3(-1, 0.5, -1), new THREE.Vector3(0, 0.5, 2)],
    timeLimit: 120,
    requiredItems: 4,
    difficulty: 'easy',
  },
  {
    id: 'search_rescue',
    name: 'Tìm kiếm cứu nạn',
    description: 'Robot tìm kiếm và thu thập các vật thể trong môi trường phức tạp',
    targets: [
      new THREE.Vector3(4, 0.5, 2),
      new THREE.Vector3(-2, 0.5, 4),
      new THREE.Vector3(-4, 0.5, -2),
      new THREE.Vector3(2, 0.5, -4),
      new THREE.Vector3(0, 0.5, 0),
    ],
    obstacles: [
      new THREE.Vector3(2, 0.5, 1),
      new THREE.Vector3(-1, 0.5, 2),
      new THREE.Vector3(1, 0.5, -1),
      new THREE.Vector3(-2, 0.5, -1),
      new THREE.Vector3(0, 0.5, 3),
    ],
    timeLimit: 180,
    requiredItems: 5,
    difficulty: 'medium',
  },
  {
    id: 'mars_exploration',
    name: 'Thám hiểm sao Hỏa',
    description: 'Nhiệm vụ thám hiểm và thu thập mẫu vật trên bề mặt sao Hỏa',
    targets: [
      new THREE.Vector3(5, 0.5, 0),
      new THREE.Vector3(3, 0.5, 4),
      new THREE.Vector3(-3, 0.5, 4),
      new THREE.Vector3(-5, 0.5, 0),
      new THREE.Vector3(-3, 0.5, -4),
      new THREE.Vector3(3, 0.5, -4),
    ],
    obstacles: [
      new THREE.Vector3(2, 0.5, 2),
      new THREE.Vector3(-2, 0.5, 2),
      new THREE.Vector3(-2, 0.5, -2),
      new THREE.Vector3(2, 0.5, -2),
      new THREE.Vector3(4, 0.5, 1),
      new THREE.Vector3(-4, 0.5, -1),
      new THREE.Vector3(1, 0.5, 3),
      new THREE.Vector3(-1, 0.5, -3),
    ],
    timeLimit: 240,
    requiredItems: 6,
    difficulty: 'hard',
  },
];

// 3D Robot Component
function Robot3D() {
  const robotRef = useRef<THREE.Group>(null);
  const { robot, isRunning, pathPlanning, updateRobot, collectItem, collectibles } = useRobotStore();

  useFrame((state, delta) => {
    if (!robotRef.current || !isRunning) return;

    // Move robot along path
    if (pathPlanning.length > robot.pathIndex + 1) {
      const currentTarget = pathPlanning[robot.pathIndex + 1];
      const direction = currentTarget.clone().sub(robot.position).normalize();
      const distance = robot.position.distanceTo(currentTarget);

      if (distance > 0.1) {
        const moveSpeed = 2.0 * delta;
        const newPosition = robot.position.clone().add(direction.multiplyScalar(moveSpeed));

        updateRobot({
          position: newPosition,
          rotation: new THREE.Euler(0, Math.atan2(direction.x, direction.z), 0),
          mode: 'navigating',
        });

        robotRef.current.position.copy(newPosition);
        robotRef.current.rotation.copy(robot.rotation);
      } else {
        updateRobot({ pathIndex: robot.pathIndex + 1 });
      }
    }

    // Check for collectibles
    collectibles.forEach((collectible) => {
      if (robot.position.distanceTo(collectible) < 0.8) {
        collectItem(collectible);
      }
    });

    // Update battery (drain over time)
    const batteryDrain = delta * 0.5; // 0.5% per second
    updateRobot({ battery: Math.max(0, robot.battery - batteryDrain) });
  });

  return (
    <group ref={robotRef} position={robot.position}>
      {/* Robot body */}
      <Box args={[0.8, 0.3, 1.2]}>
        <meshStandardMaterial color="#2196F3" metalness={0.8} roughness={0.2} />
      </Box>

      {/* Robot head with sensors */}
      <group position={[0, 0.3, 0]}>
        <Box args={[0.4, 0.3, 0.4]}>
          <meshStandardMaterial color="#1976D2" />
        </Box>

        {/* Camera */}
        <Cylinder args={[0.05, 0.05, 0.1]} position={[0, 0, 0.25]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#000000" />
        </Cylinder>

        {/* LIDAR */}
        {robot.sensors.lidar && (
          <Cylinder args={[0.1, 0.1, 0.2]} position={[0, 0.2, 0]}>
            <meshStandardMaterial color="#FF9800" emissive="#FF9800" emissiveIntensity={0.2} />
          </Cylinder>
        )}
      </group>

      {/* Wheels */}
      <Cylinder args={[0.15, 0.15, 0.1]} position={[-0.3, -0.15, 0.4]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#424242" />
      </Cylinder>
      <Cylinder args={[0.15, 0.15, 0.1]} position={[0.3, -0.15, 0.4]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#424242" />
      </Cylinder>
      <Cylinder args={[0.15, 0.15, 0.1]} position={[-0.3, -0.15, -0.4]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#424242" />
      </Cylinder>
      <Cylinder args={[0.15, 0.15, 0.1]} position={[0.3, -0.15, -0.4]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#424242" />
      </Cylinder>

      {/* Battery indicator */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
        <Sphere args={[0.1]} position={[0, 0.8, 0]}>
          <meshStandardMaterial
            color={robot.battery > 50 ? '#4CAF50' : robot.battery > 20 ? '#FF9800' : '#F44336'}
            emissive={robot.battery > 50 ? '#4CAF50' : robot.battery > 20 ? '#FF9800' : '#F44336'}
            emissiveIntensity={0.3}
          />
        </Sphere>
      </Float>

      {/* Status indicator */}
      <Text position={[0, 1, 0]} fontSize={0.2} color="white" anchorX="center" anchorY="middle">
        {robot.mode.toUpperCase()}
      </Text>

      {/* Trail effect */}
      <Trail width={0.1} length={10} color="#00FFFF" attenuation={(t) => t * t}>
        <Sphere args={[0.02]} position={[0, -0.4, 0]}>
          <meshBasicMaterial color="#00FFFF" />
        </Sphere>
      </Trail>
    </group>
  );
}

// Obstacle Component
function Obstacle({ position }: { position: THREE.Vector3 }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Box ref={meshRef} args={[0.8, 1.5, 0.8]} position={position}>
      <meshStandardMaterial color="#F44336" metalness={0.5} roughness={0.5} />
    </Box>
  );
}

// Collectible Item Component
function Collectible({ position, onCollect }: { position: THREE.Vector3; onCollect: () => void }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [collected, setCollected] = useState(false);

  useFrame((state) => {
    if (meshRef.current && !collected) {
      meshRef.current.rotation.y += 0.02;
      meshRef.current.position.y = position.y + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  if (collected) return null;

  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere
        ref={meshRef}
        args={[0.2]}
        position={position}
        onClick={() => {
          setCollected(true);
          onCollect();
        }}
      >
        <meshStandardMaterial
          color="#FFD700"
          emissive="#FFD700"
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>
    </Float>
  );
}

// Path Visualization
function PathVisualization() {
  const { pathPlanning } = useRobotStore();

  if (pathPlanning.length < 2) return null;

  const pathPoints = pathPlanning.flatMap((p) => [p.x, p.y, p.z]);

  return (
    <line>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[new Float32Array(pathPoints), 3]} />
      </bufferGeometry>
      <lineBasicMaterial color="#00FF00" linewidth={3} />
    </line>
  );
}

function RobotScene3D() {
  const { obstacles, collectibles, collectItem } = useRobotStore();

  return (
    <Canvas camera={{ position: [8, 8, 8], fov: 50 }}>
      <Suspense fallback={null}>
        <Environment preset="warehouse" />
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[0, 5, 0]} intensity={0.5} color="#00FFFF" />

        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />

        {/* Ground */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#37474F" />
        </mesh>

        {/* Grid */}
        <gridHelper args={[20, 20, '#555555', '#333333']} />

        <Robot3D />

        {obstacles.map((pos, index) => (
          <Obstacle key={`obstacle-${index}`} position={pos} />
        ))}

        {collectibles.map((pos, index) => (
          <Collectible key={`collectible-${index}`} position={pos} onCollect={() => collectItem(pos)} />
        ))}

        <PathVisualization />
      </Suspense>
    </Canvas>
  );
}

const AutonomousRobotMission3D: React.FC<AutonomousRobotMission3DProps> = ({ onComplete, timeLeft, onRestart }) => {
  const {
    robot,
    currentMission,
    isRunning,
    score,
    gamePhase,
    pathPlanning,
    setMission,
    setRunning,
    setGamePhase,
    planPath,
    collectibles,
  } = useRobotStore();

  const handleStartMission = useCallback(
    (mission: Mission) => {
      setMission(mission);
      setGamePhase('running');

      // Plan initial path to first target
      if (mission.targets.length > 0) {
        planPath(robot.position, mission.targets[0]);
      }
    },
    [setMission, setGamePhase, planPath, robot.position],
  );

  const handleToggleSimulation = useCallback(() => {
    setRunning(!isRunning);
  }, [isRunning, setRunning]);

  // Mission completion check
  useEffect(() => {
    if (currentMission && robot.collectedItems >= currentMission.requiredItems) {
      setGamePhase('completed');
      setRunning(false);

      const timeBonus = Math.max(0, timeLeft * 2);
      const finalScore = score + timeBonus + robot.battery * 5 + robot.health * 3;

      setTimeout(() => {
        onComplete(true, Math.round(finalScore));
      }, 2000);
    }
  }, [
    currentMission,
    robot.collectedItems,
    robot.battery,
    robot.health,
    score,
    timeLeft,
    setGamePhase,
    setRunning,
    onComplete,
  ]);

  // Time out check
  useEffect(() => {
    if (timeLeft <= 0 && gamePhase === 'running') {
      setGamePhase('completed');
      setRunning(false);
      setTimeout(() => {
        onComplete(false, score);
      }, 2000);
    }
  }, [timeLeft, gamePhase, score, setGamePhase, setRunning, onComplete]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900 text-white">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm p-4 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Nhiệm vụ Robot tự hành 3D</h2>
            <p className="text-sm text-gray-300">Điều khiển robot thực hiện nhiệm vụ tự động</p>
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
            <Battery className="w-4 h-4" />
            <span className="font-mono">{Math.round(robot.battery)}%</span>
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
          {gamePhase === 'setup' && (
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <Navigation className="w-5 h-5" />
                <span>Chọn nhiệm vụ</span>
              </h3>

              <div className="space-y-3">
                {MISSIONS.map((mission) => (
                  <div
                    key={mission.id}
                    className="bg-white/10 rounded-lg p-4 cursor-pointer hover:bg-white/20 transition-colors"
                    onClick={() => handleStartMission(mission)}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="w-4 h-4 text-blue-400" />
                      <span className="font-medium text-sm">{mission.name}</span>
                    </div>
                    <p className="text-xs text-gray-300 mb-2">{mission.description}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span
                        className={`px-2 py-1 rounded ${
                          mission.difficulty === 'easy'
                            ? 'bg-green-500/30 text-green-200'
                            : mission.difficulty === 'medium'
                              ? 'bg-yellow-500/30 text-yellow-200'
                              : 'bg-red-500/30 text-red-200'
                        }`}
                      >
                        {mission.difficulty}
                      </span>
                      <span className="text-gray-400">
                        {mission.timeLimit}s • {mission.requiredItems} mục tiêu
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentMission && gamePhase !== 'setup' && (
            <div className="space-y-6">
              {/* Mission Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Target className="w-5 h-5" />
                  <span>Nhiệm vụ hiện tại</span>
                </h3>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-medium mb-2">{currentMission.name}</h4>
                  <p className="text-sm text-gray-300 mb-3">{currentMission.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Mục tiêu:</span>
                      <span className="text-green-400">
                        {robot.collectedItems}/{currentMission.requiredItems}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Thời gian:</span>
                      <span className="text-yellow-400">{currentMission.timeLimit}s</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Robot Status */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Bot className="w-5 h-5" />
                  <span>Trạng thái Robot</span>
                </h3>
                <div className="space-y-3">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm flex items-center space-x-2">
                        <Battery className="w-4 h-4 text-green-400" />
                        <span>Pin</span>
                      </span>
                      <span className="text-sm">{Math.round(robot.battery)}%</span>
                    </div>
                    <div className="w-full bg-black/30 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          robot.battery > 50 ? 'bg-green-400' : robot.battery > 20 ? 'bg-yellow-400' : 'bg-red-400'
                        }`}
                        style={{ width: `${robot.battery}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm flex items-center space-x-2">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span>Sức khỏe</span>
                      </span>
                      <span className="text-sm">{Math.round(robot.health)}%</span>
                    </div>
                    <div className="w-full bg-black/30 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{ width: `${robot.health}%` }}></div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm flex items-center space-x-2">
                        <Cpu className="w-4 h-4 text-red-400" />
                        <span>CPU</span>
                      </span>
                      <span className="text-sm">{robot.mode.toUpperCase()}</span>
                    </div>
                    <div className="w-full bg-black/30 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          robot.mode === 'navigating'
                            ? 'bg-blue-400'
                            : robot.mode === 'collecting'
                              ? 'bg-green-400'
                              : robot.mode === 'scanning'
                                ? 'bg-yellow-400'
                                : 'bg-gray-400'
                        }`}
                        style={{ width: `100%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Control */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Cpu className="w-5 h-5" />
                  <span>Điều khiển</span>
                </h3>
                <button
                  onClick={handleToggleSimulation}
                  className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-colors ${
                    isRunning
                      ? 'bg-red-500/30 hover:bg-red-500/40 text-red-200'
                      : 'bg-green-500/30 hover:bg-green-500/40 text-green-200'
                  }`}
                >
                  {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  <span>{isRunning ? 'Dừng' : 'Bắt đầu'}</span>
                </button>
              </div>

              {/* Sensors */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Wifi className="w-5 h-5" />
                  <span>Cảm biến</span>
                </h3>
                <div className="space-y-2">
                  {Object.entries(robot.sensors).map(([sensor, active]) => (
                    <div key={sensor} className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                      <span className="text-sm capitalize">{sensor.toUpperCase()}</span>
                      <div className={`w-3 h-3 rounded-full ${active ? 'bg-green-400' : 'bg-red-400'}`}></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Path Planning Info */}
              {pathPlanning.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                    <Navigation className="w-5 h-5" />
                    <span>Đường đi</span>
                  </h3>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-sm">
                      <p>
                        Điểm đường: <span className="text-blue-400">{pathPlanning.length}</span>
                      </p>
                      <p>
                        Bước hiện tại:{' '}
                        <span className="text-green-400">
                          {robot.pathIndex}/{pathPlanning.length - 1}
                        </span>
                      </p>
                      <p>
                        Vật phẩm còn lại: <span className="text-yellow-400">{collectibles.length}</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* 3D Scene */}
        <div className="flex-1 relative">
          <RobotScene3D />
        </div>
      </div>

      {/* Mission Complete Modal */}
      {gamePhase === 'completed' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full mx-4">
            <div className="text-center">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  robot.collectedItems >= (currentMission?.requiredItems || 0) ? 'bg-green-500' : 'bg-red-500'
                }`}
              >
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {robot.collectedItems >= (currentMission?.requiredItems || 0)
                  ? 'Nhiệm vụ hoàn thành!'
                  : 'Nhiệm vụ thất bại'}
              </h3>
              <div className="space-y-2 text-sm text-gray-300 mb-6">
                <p>
                  Điểm số cuối: <span className="text-green-400 font-semibold">{score}</span>
                </p>
                <p>
                  Vật phẩm thu thập:{' '}
                  <span className="text-blue-400">
                    {robot.collectedItems}/{currentMission?.requiredItems || 0}
                  </span>
                </p>
                <p>
                  Pin còn lại: <span className="text-yellow-400">{Math.round(robot.battery)}%</span>
                </p>
                <p>
                  Sức khỏe: <span className="text-purple-400">{Math.round(robot.health)}%</span>
                </p>
              </div>
              <button
                onClick={onRestart}
                className="bg-blue-500 hover:bg-blue-400 px-6 py-2 rounded-lg transition-colors"
              >
                Nhiệm vụ mới
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutonomousRobotMission3D;
