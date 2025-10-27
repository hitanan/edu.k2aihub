'use client';

import React, { useState, useEffect, useRef, useCallback, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Plane } from '@react-three/drei';
import * as THREE from 'three';
import { Maximize, Minimize } from 'lucide-react';
import { useUnifiedScoring } from '@/utils/unifiedScoring';

// Types for game data
interface DroneSpec {
  id: string;
  name: string;
  battery: number;
  range: number;
  sensors: string[];
  color: string;
}

interface CropField {
  id: string;
  name: string;
  position: [number, number, number];
  size: [number, number];
  cropType: string;
  health: number;
  moisture: number;
  temperature: number;
  scanned: boolean;
}

interface Mission {
  id: number;
  title: string;
  description: string;
  requiredData: string[];
  targetFields: string[];
  reward: number;
}

interface GameState {
  currentMission: number | null;
  droneEnergy: number;
  activeDrone: string;
  dataCollected: Array<{
    fieldId: string;
    dataType: string;
    timestamp: number;
  }>;
  completedMissions: number[];
  score: number;
  gameTime: number;
}

// Game data
const DRONE_SPECS: DroneSpec[] = [
  {
    id: 'agri_pro',
    name: 'AgriPro X1',
    battery: 100,
    range: 500,
    sensors: ['multispectral', 'thermal', 'moisture'],
    color: '#22C55E',
  },
  {
    id: 'field_scout',
    name: 'FieldScout 3000',
    battery: 80,
    range: 300,
    sensors: ['rgb', 'ndvi', 'thermal'],
    color: '#3B82F6',
  },
];

const CROP_FIELDS: CropField[] = [
  {
    id: 'field1',
    name: 'Ruộng lúa A1',
    position: [-8, 0, -8],
    size: [6, 4],
    cropType: 'rice',
    health: 85,
    moisture: 70,
    temperature: 28,
    scanned: false,
  },
  {
    id: 'field2',
    name: 'Ruộng ngô B2',
    position: [0, 0, -8],
    size: [5, 4],
    cropType: 'corn',
    health: 92,
    moisture: 65,
    temperature: 30,
    scanned: false,
  },
  {
    id: 'field3',
    name: 'Ruộng rau C3',
    position: [8, 0, -8],
    size: [4, 3],
    cropType: 'vegetables',
    health: 78,
    moisture: 80,
    temperature: 25,
    scanned: false,
  },
];

const MISSIONS: Mission[] = [
  {
    id: 1,
    title: 'Khảo sát sức khỏe cây trồng',
    description: 'Sử dụng drone để quét và đánh giá sức khỏe của tất cả các ruộng',
    requiredData: ['health_scan', 'ndvi'],
    targetFields: ['field1', 'field2', 'field3'],
    reward: 100,
  },
  {
    id: 2,
    title: 'Giám sát độ ẩm đất',
    description: 'Thu thập dữ liệu độ ẩm từ các khu vực trồng trọt chính',
    requiredData: ['moisture_scan'],
    targetFields: ['field1', 'field3'],
    reward: 75,
  },
  {
    id: 3,
    title: 'Phân tích nhiệt độ môi trường',
    description: 'Thực hiện quét nhiệt để phát hiện các vấn đề về nhiệt độ',
    requiredData: ['thermal_scan'],
    targetFields: ['field2'],
    reward: 50,
  },
];

// 3D Components
function DroneModel({
  position,
  rotation,
  isActive,
  batteryLevel,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  isActive: boolean;
  batteryLevel: number;
}) {
  const droneRef = useRef<THREE.Group>(null);
  const propellerRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    if (droneRef.current && isActive) {
      // Gentle floating motion
      droneRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;

      // Rotate propellers
      propellerRefs.current.forEach((propeller) => {
        if (propeller) {
          propeller.rotation.y += 0.5;
        }
      });
    }
  });

  const droneColor = isActive ? '#22C55E' : '#64748B';
  const propellerColor = batteryLevel > 30 ? '#EF4444' : '#F59E0B';

  return (
    <group ref={droneRef} position={position} rotation={rotation}>
      {/* Main drone body */}
      <Box args={[1.5, 0.3, 1.5]}>
        <meshStandardMaterial color={droneColor} />
      </Box>

      {/* Propeller arms */}
      {[
        [-0.6, 0, -0.6],
        [0.6, 0, -0.6],
        [-0.6, 0, 0.6],
        [0.6, 0, 0.6],
      ].map((pos, index) => (
        <group key={index} position={pos as [number, number, number]}>
          {/* Motor */}
          <Box args={[0.15, 0.2, 0.15]} position={[0, 0.1, 0]}>
            <meshStandardMaterial color="#1A202C" />
          </Box>
          {/* Propeller blades */}
          <Box
            ref={(el) => {
              if (el) propellerRefs.current[index] = el;
            }}
            args={[0.15, 0.01, 0.02]}
            position={[0, 0.04, 0]}
          >
            <meshStandardMaterial color={propellerColor} />
          </Box>
          <Box args={[0.02, 0.01, 0.15]} position={[0, 0.04, 0]}>
            <meshStandardMaterial color={propellerColor} />
          </Box>
        </group>
      ))}

      {/* Battery indicator */}
      <Box args={[0.3, 0.1, 0.5]} position={[0, 0.2, 0]}>
        <meshStandardMaterial color={batteryLevel > 50 ? '#22C55E' : batteryLevel > 20 ? '#F59E0B' : '#EF4444'} />
      </Box>
    </group>
  );
}

function CropFieldModel({
  field,
  isSelected,
  isScanning,
}: {
  field: CropField;
  isSelected: boolean;
  isScanning: boolean;
}) {
  const fieldRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (fieldRef.current && isScanning) {
      (fieldRef.current.material as THREE.MeshStandardMaterial).opacity =
        0.7 + Math.sin(state.clock.elapsedTime * 4) * 0.3;
    }
  });

  const getHealthColor = (health: number) => {
    if (health >= 80) return '#22C55E'; // Green
    if (health >= 60) return '#F59E0B'; // Yellow
    return '#EF4444'; // Red
  };

  const getCropHeight = (cropType: string) => {
    switch (cropType) {
      case 'rice':
        return 0.3;
      case 'corn':
        return 0.6;
      case 'vegetables':
        return 0.2;
      default:
        return 0.3;
    }
  };

  return (
    <group position={field.position}>
      {/* Field base */}
      <Plane ref={fieldRef} args={field.size} rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color={getHealthColor(field.health)} transparent opacity={isScanning ? 0.8 : 0.6} />
      </Plane>

      {/* Crop representation */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Box
          key={i}
          args={[0.1, getCropHeight(field.cropType), 0.1]}
          position={[
            (Math.random() - 0.5) * field.size[0] * 0.8,
            getCropHeight(field.cropType) / 2,
            (Math.random() - 0.5) * field.size[1] * 0.8,
          ]}
        >
          <meshStandardMaterial color={getHealthColor(field.health)} />
        </Box>
      ))}

      {/* Field label */}
      <Text
        position={[0, 1, 0]}
        fontSize={0.3}
        color={isSelected ? '#F59E0B' : '#FFFFFF'}
        anchorX="center"
        anchorY="middle"
      >
        {field.name}
      </Text>

      {/* Data indicators */}
      <Text position={[0, 0.8, 0]} fontSize={0.2} color="#FFFFFF" anchorX="center" anchorY="middle">
        {`💚 ${field.health}% | 💧 ${field.moisture}% | 🌡️ ${field.temperature}°C`}
      </Text>
    </group>
  );
}

// Main Game Component
interface DroneCropMonitoring3DProps {
  onComplete?: (score: number) => void;
}

export default function DroneCropMonitoring3D({ onComplete }: DroneCropMonitoring3DProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedField, setSelectedField] = useState<string | null>(null);
  const [scanningField, setScanningField] = useState<string | null>(null);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [lastScanTime, setLastScanTime] = useState(0); // Add debouncing for scan triggers
  const [completionStats, setCompletionStats] = useState<{
    totalDataCollected: number;
    averageFieldHealth: number;
    bestField: string;
    worstField: string;
    efficiencyScore: number;
  } | null>(null);
  const { recordGameScore } = useUnifiedScoring();

  const [gameState, setGameState] = useState<GameState>({
    currentMission: 1,
    droneEnergy: 100,
    activeDrone: 'agri_pro',
    dataCollected: [],
    completedMissions: [],
    score: 0,
    gameTime: 0,
  });

  // Fullscreen toggle
  const toggleFullscreen = useCallback(() => {
    setIsFullscreen((prev) => !prev);
  }, []);

  // Exit fullscreen on escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    if (isFullscreen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => document.removeEventListener('keydown', handleEscape);
  }, [isFullscreen]);

  // Game timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameStarted) {
      timer = setInterval(() => {
        setGameState((prev) => ({
          ...prev,
          gameTime: prev.gameTime + 1,
          droneEnergy: Math.max(0, prev.droneEnergy - 0.5),
        }));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameStarted]);

  // Check mission completion
  const checkMissionCompletion = useCallback(
    (
      scannedFieldId: string,
      newData: Array<{
        fieldId: string;
        dataType: string;
        timestamp: number;
      }>,
    ) => {
      const currentMission = MISSIONS.find((m) => m.id === gameState.currentMission);
      if (!currentMission) return;

      // Get all scanned fields including the new one
      const allData = [...gameState.dataCollected, ...newData];

      // Check if all required data types are collected for each target field
      const requiredFields = currentMission.targetFields || ['field1', 'field2', 'field3'];
      const allFieldsScanned = requiredFields.every((fieldId) => {
        return currentMission.requiredData.every((dataType) => {
          return allData.some((data) => data.fieldId === fieldId && data.dataType === dataType);
        });
      });

      if (allFieldsScanned) {
        const newScore = gameState.score + currentMission.reward; // Only add mission reward

        setGameState((prev) => ({
          ...prev,
          completedMissions: [...prev.completedMissions, currentMission.id],
          currentMission: null,
          score: newScore,
        }));

        // Record score for unified system integration
        recordGameScore('drone-crop-monitoring-3d', newScore, '3d-game');

        const nextMission = MISSIONS.find(
          (m) => !gameState.completedMissions.includes(m.id) && m.id !== currentMission.id,
        );
        if (nextMission) {
          setTimeout(() => {
            setGameState((prev) => ({
              ...prev,
              currentMission: nextMission.id,
            }));
          }, 2000);
        } else {
          // All missions completed - calculate completion stats
          const totalDataCollected = gameState.dataCollected.length;
          const averageFieldHealth = CROP_FIELDS.reduce((sum, field) => sum + field.health, 0) / CROP_FIELDS.length;
          const bestField = CROP_FIELDS.reduce((best, field) => (field.health > best.health ? field : best));
          const worstField = CROP_FIELDS.reduce((worst, field) => (field.health < worst.health ? field : worst));
          const efficiencyScore = Math.round((newScore / Math.max(1, 100 - gameState.droneEnergy)) * 100);

          setCompletionStats({
            totalDataCollected,
            averageFieldHealth,
            bestField: bestField.name,
            worstField: worstField.name,
            efficiencyScore,
          });
          setGameCompleted(true);

          if (onComplete) onComplete(newScore);
        }
      }
    },
    [
      gameState.currentMission,
      gameState.dataCollected,
      gameState.completedMissions,
      gameState.score,
      gameState.droneEnergy,
      onComplete,
      recordGameScore,
      setCompletionStats,
      setGameCompleted,
    ],
  );

  // Auto-scan when drone reaches a field
  const [dronePosition, setDronePosition] = useState<[number, number, number]>([0, 3, 0]);
  const [isMovingToField, setIsMovingToField] = useState(false);
  const droneTargetRef = useRef<[number, number, number]>([0, 3, 0]);

  // Field scanning
  const handleFieldScan = useCallback(
    (fieldId: string) => {
      if (gameState.droneEnergy < 10) {
        alert('⚠️ Pin drone thấp! Cần sạc lại để tiếp tục.');
        return;
      }

      setScanningField(fieldId);
      setSelectedField(fieldId);

      // Simulate scanning time
      setTimeout(() => {
        const currentMission = MISSIONS.find((m) => m.id === gameState.currentMission);
        const field = CROP_FIELDS.find((f) => f.id === fieldId);

        if (currentMission && field) {
          // Mark field as scanned
          field.scanned = true;

          // Collect required data
          const newDataCollected: Array<{
            fieldId: string;
            dataType: string;
            timestamp: number;
          }> = [];

          if (currentMission.requiredData.includes('health_scan')) {
            newDataCollected.push({
              fieldId,
              dataType: 'health_scan',
              timestamp: Date.now(),
            });
          }

          if (currentMission.requiredData.includes('moisture_scan')) {
            newDataCollected.push({
              fieldId,
              dataType: 'moisture_scan',
              timestamp: Date.now(),
            });
          }

          if (currentMission.requiredData.includes('thermal_scan')) {
            newDataCollected.push({
              fieldId,
              dataType: 'thermal_scan',
              timestamp: Date.now(),
            });
          }

          if (currentMission.requiredData.includes('ndvi')) {
            newDataCollected.push({
              fieldId,
              dataType: 'ndvi',
              timestamp: Date.now(),
            });
          }

          setGameState((prev) => ({
            ...prev,
            dataCollected: [...prev.dataCollected, ...newDataCollected],
            score: prev.score + newDataCollected.length * 25, // Points for data collection
            droneEnergy: prev.droneEnergy - 5,
          }));

          // Check mission completion
          checkMissionCompletion(fieldId, newDataCollected);
        }

        setScanningField(null);
      }, 2000);
    },
    [gameState.currentMission, gameState.droneEnergy, checkMissionCompletion],
  );

  // Battery recharge functionality
  const rechargeBattery = useCallback(() => {
    setGameState((prev) => ({
      ...prev,
      droneEnergy: 100,
    }));
  }, []);

  // Reset battery to full and reset game state
  const resetGame = useCallback(() => {
    // Reset all field scan status FIRST
    CROP_FIELDS.forEach((field) => {
      field.scanned = false;
    });

    setGameState({
      currentMission: 1,
      droneEnergy: 100,
      activeDrone: 'agri_pro',
      dataCollected: [],
      completedMissions: [],
      score: 0,
      gameTime: 0,
    });
    setDronePosition([0, 3, 0]);
    setSelectedField(null);
    setScanningField(null);
    setGameCompleted(false);
    setCompletionStats(null);
    setLastScanTime(0);

    // Force re-render to update progress indicators
    setTimeout(() => {
      setGameState((prev) => ({ ...prev }));
    }, 100);
  }, []);

  // Auto-scan behavior - only move to field, don't auto-scan unless explicitly triggered
  useEffect(() => {
    if (selectedField && !scanningField) {
      const targetField = CROP_FIELDS.find((f) => f.id === selectedField);
      if (targetField && !isMovingToField) {
        const targetPos: [number, number, number] = [targetField.position[0], 3, targetField.position[2]];
        droneTargetRef.current = targetPos;
        setIsMovingToField(true);

        // Just move drone to position, don't auto-scan
        const moveTimer = setTimeout(() => {
          setDronePosition(targetPos);
          setIsMovingToField(false);
        }, 1500);

        return () => clearTimeout(moveTimer);
      }
    }
  }, [selectedField, scanningField, isMovingToField]);

  // Keyboard controls for drone movement
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (gameCompleted || scanningField) return;

      switch (event.key) {
        case 'ArrowLeft':
        case 'a':
        case 'A':
          event.preventDefault();
          setDronePosition((prev) => [Math.max(prev[0] - 1, -8), prev[1], prev[2]]);
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          event.preventDefault();
          setDronePosition((prev) => [Math.min(prev[0] + 1, 8), prev[1], prev[2]]);
          break;
        case 'ArrowUp':
        case 'w':
        case 'W':
          event.preventDefault();
          setDronePosition((prev) => [
            prev[0],
            prev[1],
            Math.max(prev[2] - 1, -8), // Fixed: Move backward (decrease Z)
          ]);
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          event.preventDefault();
          setDronePosition((prev) => [
            prev[0],
            prev[1],
            Math.min(prev[2] + 1, 8), // Fixed: Move forward (increase Z)
          ]);
          break;
        case 'q':
        case 'Q':
          event.preventDefault();
          setDronePosition((prev) => [prev[0], Math.min(prev[1] + 0.5, 10), prev[2]]);
          break;
        case 'e':
        case 'E':
          event.preventDefault();
          setDronePosition((prev) => [prev[0], Math.max(prev[1] - 0.5, 1), prev[2]]);
          break;
        case 'Enter':
        case ' ':
          event.preventDefault();
          // Add debouncing to prevent double-triggering
          const now = Date.now();
          if (now - lastScanTime < 1000) {
            return; // Prevent scan if less than 1 second since last scan
          }
          setLastScanTime(now);

          // Scan the closest field to drone position
          const closestField = findClosestField(dronePosition);
          if (closestField) {
            setSelectedField(closestField.id);
            handleFieldScan(closestField.id);
          }
          break;
        case 'Escape':
          event.preventDefault();
          setSelectedField(null);
          break;
      }
    };

    // Helper function to find closest field to drone
    const findClosestField = (dronePos: [number, number, number]): CropField | null => {
      let closestField: CropField | null = null;
      let minDistance = Infinity;

      CROP_FIELDS.forEach((field) => {
        const distance = Math.sqrt(
          Math.pow(field.position[0] - dronePos[0], 2) + Math.pow(field.position[2] - dronePos[2], 2),
        );
        if (distance < minDistance) {
          minDistance = distance;
          closestField = field;
        }
      });

      return closestField;
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameCompleted, scanningField, dronePosition, handleFieldScan, lastScanTime]);

  // Auto-select first field if none selected
  useEffect(() => {
    if (!selectedField && CROP_FIELDS.length > 0 && !gameCompleted) {
      setSelectedField(CROP_FIELDS[0].id);
    }
  }, [selectedField, gameCompleted]);

  // Start game
  const startGame = () => setGameStarted(true);

  if (!gameStarted) {
    return (
      <div className="w-full h-screen bg-gradient-to-br from-green-900 via-blue-900 to-green-900 flex items-center justify-center">
        <div className="text-center bg-black/50 p-8 rounded-xl backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-white mb-4">🚁 Drone Crop Monitoring 3D</h1>
          <p className="text-xl text-green-200 mb-6">Sử dụng drone thông minh để giám sát và quản lý nông trại</p>
          <div className="space-y-2 text-left text-white mb-6">
            <p>🎯 Hoàn thành các nhiệm vụ khảo sát</p>
            <p>📊 Thu thập dữ liệu cây trồng</p>
            <p>🔋 Quản lý pin drone hiệu quả</p>
            <p>📈 Phân tích sức khỏe ruộng lúa</p>
          </div>
          <button
            onClick={startGame}
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Bắt đầu khảo sát
          </button>
        </div>
      </div>
    );
  }

  const currentMission = MISSIONS.find((m) => m.id === gameState.currentMission);
  const currentDrone = DRONE_SPECS.find((d) => d.id === gameState.activeDrone);
  const completedDataCount = gameState.dataCollected.filter(
    (d) => currentMission?.targetFields.includes(d.fieldId) && currentMission?.requiredData.includes(d.dataType),
  ).length;

  return (
    <div
      className={`${isFullscreen ? 'fixed inset-0 z-50' : 'w-full h-screen'} bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900`}
    >
      {/* Game Header */}
      <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-start">
        <div className="bg-black/70 rounded-lg p-4 backdrop-blur-sm">
          <h2 className="text-white text-xl font-bold mb-2">🚁 Drone Crop Monitoring</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-300">Nhiệm vụ hiện tại:</div>
              <div className="text-white font-semibold">{currentMission?.title || 'Hoàn thành'}</div>
            </div>
            <div>
              <div className="text-gray-300">Pin Drone:</div>
              <div
                className={`font-bold ${gameState.droneEnergy > 50 ? 'text-green-400' : gameState.droneEnergy > 20 ? 'text-yellow-400' : 'text-red-400'}`}
              >
                {Math.round(gameState.droneEnergy)}%
              </div>
              {/* Battery controls */}
              <div className="flex gap-2 mt-1">
                <button
                  onClick={rechargeBattery}
                  className="px-2 py-1 bg-green-600 hover:bg-green-700 text-white text-xs rounded transition-colors"
                  title="Sạc pin đầy"
                >
                  ⚡ Sạc pin
                </button>
                <button
                  onClick={resetGame}
                  className="px-2 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded transition-colors"
                  title="Khởi động lại game"
                >
                  🔄 Reset
                </button>
              </div>
            </div>
            <div>
              <div className="text-gray-300">Điểm số:</div>
              <div className="text-yellow-400 font-bold">{gameState.score}</div>
            </div>
            <div>
              <div className="text-gray-300">Tiến độ:</div>
              <div className="text-blue-400 font-bold">
                {completedDataCount}/
                {(currentMission?.requiredData.length || 0) * (currentMission?.targetFields.length || 0)}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={toggleFullscreen}
          className="bg-black/70 hover:bg-black/90 p-3 rounded-lg backdrop-blur-sm transition-colors"
        >
          {isFullscreen ? <Minimize className="w-5 h-5 text-white" /> : <Maximize className="w-5 h-5 text-white" />}
        </button>
      </div>

      {/* Mission Details */}
      {currentMission && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-black/70 rounded-lg p-4 backdrop-blur-sm max-w-md">
            <h3 className="text-white font-bold mb-2">📋 {currentMission.title}</h3>
            <p className="text-gray-300 text-sm mb-2">{currentMission.description}</p>
            <div className="text-xs text-blue-200">
              Dữ liệu cần:{' '}
              {currentMission.requiredData
                .map((data) =>
                  data === 'health_scan' ? '🌱 Sức khỏe' : data === 'moisture_scan' ? '💧 Độ ẩm' : '🌡️ Nhiệt độ',
                )
                .join(', ')}
            </div>
          </div>
        </div>
      )}

      {/* 3D Scene */}
      <div className={`${isFullscreen ? 'w-full h-full absolute inset-0' : 'w-full h-full'}`}>
        <Canvas
          camera={{
            position: [0, 15, 15],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
          style={{ width: '100%', height: '100%', position: isFullscreen ? 'absolute' : 'relative', top: 0, left: 0 }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />

          <Suspense fallback={null}>
            {/* Ground */}
            <Plane args={[40, 40]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
              <meshStandardMaterial color="#2D5016" />
            </Plane>

            {/* Drone */}
            <DroneModel
              position={dronePosition}
              rotation={[0, 0, 0]}
              isActive={true}
              batteryLevel={gameState.droneEnergy}
            />

            {/* Crop Fields */}
            {CROP_FIELDS.map((field) => (
              <group key={field.id}>
                <CropFieldModel
                  field={field}
                  isSelected={selectedField === field.id}
                  isScanning={scanningField === field.id}
                />
                {/* Clickable area for field selection */}
                <Plane
                  args={[field.size[0] + 2, field.size[1] + 2]}
                  position={field.position}
                  rotation={[-Math.PI / 2, 0, 0]}
                  onClick={() => {
                    // Move drone to field and auto-start scanning
                    setSelectedField(field.id);
                    const targetPos: [number, number, number] = [field.position[0], 3, field.position[2]];
                    droneTargetRef.current = targetPos;
                    setIsMovingToField(true);

                    // Start scanning automatically after drone reaches field
                    setTimeout(() => {
                      setDronePosition(targetPos);
                      setIsMovingToField(false);
                      // Auto-trigger scan when drone reaches the field
                      setTimeout(() => {
                        handleFieldScan(field.id);
                      }, 500);
                    }, 1500);
                  }}
                  onPointerOver={(e) => {
                    e.stopPropagation();
                    document.body.style.cursor = 'pointer';
                  }}
                  onPointerOut={() => {
                    document.body.style.cursor = 'default';
                  }}
                >
                  <meshStandardMaterial transparent opacity={0} />
                </Plane>
              </group>
            ))}

            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} maxDistance={30} minDistance={5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Bottom UI */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <div className="bg-black/70 rounded-lg p-4 backdrop-blur-sm">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <div className="text-center">
                <div className="text-gray-300 text-xs">Drone hiện tại</div>
                <div className="text-white font-semibold">{currentDrone?.name}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-300 text-xs">Ruộng đã quét</div>
                <div className="text-white font-semibold">
                  {CROP_FIELDS.filter((f) => f.scanned).length}/{CROP_FIELDS.length}
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="text-gray-300 text-xs">Điều khiển</div>
              <div className="text-white text-sm">
                {isMovingToField ? (
                  <span className="text-blue-300">🚁 Đang di chuyển đến ruộng...</span>
                ) : selectedField ? (
                  <>
                    <span className="text-blue-300">⬅️➡️⬆️⬇️</span> Di chuyển |{' '}
                    <span className="text-green-300">Enter/Space</span> Quét | <span className="text-red-300">Esc</span>{' '}
                    Hủy
                  </>
                ) : (
                  'Nhấp vào ruộng hoặc dùng phím mũi tên'
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scanning overlay */}
      {scanningField && (
        <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center z-20">
          <div className="bg-black/80 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-white text-xl font-bold mb-2">🔍 Đang quét dữ liệu...</div>
            <div className="text-blue-200">
              Thu thập thông tin từ {CROP_FIELDS.find((f) => f.id === scanningField)?.name}
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-4">
              <div className="bg-blue-500 h-2 rounded-full animate-pulse w-3/4"></div>
            </div>
          </div>
        </div>
      )}

      {/* Game Completion Screen */}
      {gameCompleted && completionStats && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-30">
          <div className="bg-gradient-to-br from-green-800 to-blue-800 rounded-2xl p-8 backdrop-blur-sm border-2 border-green-400 max-w-2xl mx-4">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">🎉 Nhiệm vụ hoàn thành!</h2>
              <p className="text-green-200">Bạn đã thành công trong việc giám sát và phân tích cây trồng</p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-yellow-300 font-bold mb-2">📊 Thống kê tổng quan</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Tổng dữ liệu:</span>
                    <span className="text-white font-semibold">{completionStats.totalDataCollected} mẫu</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sức khỏe TB:</span>
                    <span className="text-green-300 font-semibold">
                      {Math.round(completionStats.averageFieldHealth)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Hiệu suất:</span>
                    <span className="text-blue-300 font-semibold">{completionStats.efficiencyScore}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Điểm cuối:</span>
                    <span className="text-yellow-300 font-semibold">{gameState.score} điểm</span>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-blue-300 font-bold mb-2">🏆 Phân tích ruộng</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-300">Ruộng tốt nhất:</span>
                    <div className="text-green-300 font-semibold">{completionStats.bestField}</div>
                  </div>
                  <div>
                    <span className="text-gray-300">Cần cải thiện:</span>
                    <div className="text-red-300 font-semibold">{completionStats.worstField}</div>
                  </div>
                  <div className="mt-3 p-2 bg-blue-900/50 rounded text-xs">
                    <div className="text-blue-200">💡 Gợi ý:</div>
                    <div className="text-gray-300">
                      {completionStats.averageFieldHealth > 80
                        ? 'Cây trồng phát triển tốt! Duy trì chế độ chăm sóc hiện tại.'
                        : completionStats.averageFieldHealth > 60
                          ? 'Cần tăng cường tưới nước và bón phân cho một số khu vực.'
                          : 'Cần can thiệp khẩn cấp: kiểm tra hệ thống tưới và phòng trừ sâu bệnh.'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={() => {
                  // Reset all field scan status first
                  CROP_FIELDS.forEach((field) => {
                    field.scanned = false;
                  });

                  setGameCompleted(false);
                  setCompletionStats(null);
                  setGameState({
                    currentMission: 1,
                    droneEnergy: 100,
                    activeDrone: 'agri_pro',
                    dataCollected: [],
                    completedMissions: [],
                    score: 0,
                    gameTime: 0,
                  });
                  setDronePosition([0, 3, 0]);
                  setSelectedField(null);
                  setScanningField(null);
                  setLastScanTime(0);

                  // Force re-render to update progress indicators
                  setTimeout(() => {
                    setGameState((prev) => ({ ...prev }));
                  }, 100);
                }}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-colors"
              >
                🔄 Practice again
              </button>
              <button
                onClick={() => {
                  setGameCompleted(false);
                  setCompletionStats(null);
                }}
                className="px-6 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg text-white font-semibold transition-colors"
              >
                📋 Xem kết quả
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
