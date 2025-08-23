'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Sphere, Box } from '@react-three/drei';
import { Maximize, Minimize } from 'lucide-react';
import * as THREE from 'three';

// Game interfaces
interface SpaceExploration3DGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
}

interface Position3D {
  x: number;
  y: number;
  z: number;
}

interface Planet {
  id: string;
  name: string;
  position: Position3D;
  size: number;
  color: string;
  discovered: boolean;
  description: string;
  points: number;
  missions: Array<{
    id: string;
    name: string;
    type: 'orbit' | 'land' | 'scan' | 'sample';
    completed: boolean;
    points: number;
  }>;
}

interface Spacecraft {
  position: Position3D;
  velocity: Position3D;
  fuel: number;
  health: number;
  selectedTarget: string | null;
}

// Planet Component
function PlanetComponent({ planet, spacecraft, onPlanetClick }: {
  planet: Planet;
  spacecraft: Spacecraft;
  onPlanetClick: (planetId: string) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      
      // Glow effect when selected or hovered
      if (hovered || spacecraft.selectedTarget === planet.id) {
        meshRef.current.scale.setScalar(planet.size * 1.2);
      } else {
        meshRef.current.scale.setScalar(planet.size);
      }
    }
  });

  return (
    <group>
      <Sphere
        ref={meshRef}
        position={[planet.position.x, planet.position.y, planet.position.z]}
        args={[1, 32, 32]}
        onClick={() => onPlanetClick(planet.id)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={planet.color}
          emissive={hovered || spacecraft.selectedTarget === planet.id ? planet.color : '#000000'}
          emissiveIntensity={hovered || spacecraft.selectedTarget === planet.id ? 0.3 : 0}
        />
      </Sphere>
      
      {/* Planet name */}
      <Text
        position={[planet.position.x, planet.position.y + planet.size + 1, planet.position.z]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {planet.name}
      </Text>

      {/* Discovery indicator */}
      {planet.discovered && (
        <Text
          position={[planet.position.x, planet.position.y - planet.size - 1, planet.position.z]}
          fontSize={0.3}
          color="green"
          anchorX="center"
          anchorY="middle"
        >
          ✓ Discovered
        </Text>
      )}
    </group>
  );
}

// Spacecraft Component
function SpacecraftComponent({ spacecraft, targetPosition }: {
  spacecraft: Spacecraft;
  targetPosition: Position3D | null;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current && targetPosition) {
      // Move towards target
      const direction = new THREE.Vector3(
        targetPosition.x - spacecraft.position.x,
        targetPosition.y - spacecraft.position.y,
        targetPosition.z - spacecraft.position.z
      ).normalize();
      
      meshRef.current.lookAt(
        spacecraft.position.x + direction.x,
        spacecraft.position.y + direction.y,
        spacecraft.position.z + direction.z
      );
    }
  });

  return (
    <group>
      <Box
        ref={meshRef}
        position={[spacecraft.position.x, spacecraft.position.y, spacecraft.position.z]}
        args={[0.5, 0.3, 1]}
      >
        <meshStandardMaterial color="#00ff00" emissive="#004400" emissiveIntensity={0.2} />
      </Box>
      
      {/* Thruster effects */}
      <Sphere
        position={[spacecraft.position.x, spacecraft.position.y, spacecraft.position.z - 0.8]}
        args={[0.1, 8, 8]}
      >
        <meshStandardMaterial color="#ff6600" emissive="#ff6600" emissiveIntensity={0.8} />
      </Sphere>
    </group>
  );
}

// 3D Scene Component
function SpaceScene({ 
  planets, 
  spacecraft, 
  onPlanetClick,
  targetPosition 
}: {
  planets: Planet[];
  spacecraft: Spacecraft;
  onPlanetClick: (planetId: string) => void;
  targetPosition: Position3D | null;
}) {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4444ff" />
      
      {/* Star field background */}
      {Array.from({ length: 200 }).map((_, i) => (
        <Sphere
          key={i}
          position={[
            (Math.random() - 0.5) * 100,
            (Math.random() - 0.5) * 100,
            (Math.random() - 0.5) * 100
          ]}
          args={[0.05, 4, 4]}
        >
          <meshBasicMaterial color="white" />
        </Sphere>
      ))}
      
      {/* Planets */}
      {planets.map((planet) => (
        <PlanetComponent
          key={planet.id}
          planet={planet}
          spacecraft={spacecraft}
          onPlanetClick={onPlanetClick}
        />
      ))}
      
      {/* Spacecraft */}
      <SpacecraftComponent spacecraft={spacecraft} targetPosition={targetPosition} />
      
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </>
  );
}

// Mission Panel Component
function MissionPanel({ 
  selectedPlanet, 
  onMissionSelect
}: {
  selectedPlanet: Planet | null;
  onMissionSelect: (missionId: string) => void;
}) {
  if (!selectedPlanet) return null;

  return (
    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white max-w-sm">
      <h3 className="font-bold text-lg mb-2 text-purple-300">{selectedPlanet.name}</h3>
      <p className="text-sm text-gray-300 mb-3">{selectedPlanet.description}</p>
      
      <div className="space-y-2">
        <h4 className="font-semibold text-blue-300">Nhiệm vụ:</h4>
        {selectedPlanet.missions.map((mission) => (
          <button
            key={mission.id}
            onClick={() => onMissionSelect(mission.id)}
            disabled={mission.completed}
            className={`w-full text-left p-2 rounded text-sm transition-colors ${
              mission.completed 
                ? 'bg-green-900/50 text-green-300 cursor-not-allowed' 
                : 'bg-gray-700/50 hover:bg-gray-600/50 text-white'
            }`}
          >
            <div className="flex justify-between items-center">
              <span>{mission.completed ? '✅' : '📋'} {mission.name}</span>
              <span className="text-yellow-300">{mission.points} pts</span>
            </div>
            <div className="text-xs text-gray-400 mt-1 capitalize">{mission.type}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

// Main Game Component
export default function SpaceExploration3DGame({ onComplete, timeLeft }: SpaceExploration3DGameProps) {
  const [planets, setPlanets] = useState<Planet[]>([
    {
      id: 'mars',
      name: 'Mars',
      position: { x: -8, y: 2, z: -5 },
      size: 1.2,
      color: '#ff4444',
      discovered: false,
      description: 'Hành tinh đỏ với khí quyển mỏng và địa hình đa dạng.',
      points: 100,
      missions: [
        { id: 'mars-orbit', name: 'Bay quỹ đạo', type: 'orbit', completed: false, points: 50 },
        { id: 'mars-scan', name: 'Quét bề mặt', type: 'scan', completed: false, points: 75 },
        { id: 'mars-land', name: 'Hạ cánh', type: 'land', completed: false, points: 100 },
      ]
    },
    {
      id: 'jupiter',
      name: 'Jupiter',
      position: { x: 12, y: -3, z: 8 },
      size: 2.5,
      color: '#ffaa00',
      discovered: false,
      description: 'Hành tinh khí khổng lồ với vòng từ trường mạnh.',
      points: 150,
      missions: [
        { id: 'jupiter-approach', name: 'Tiếp cận', type: 'orbit', completed: false, points: 75 },
        { id: 'jupiter-scan', name: 'Nghiên cứu từ trường', type: 'scan', completed: false, points: 100 },
        { id: 'jupiter-sample', name: 'Lấy mẫu khí', type: 'sample', completed: false, points: 125 },
      ]
    },
    {
      id: 'saturn',
      name: 'Saturn',
      position: { x: -15, y: 4, z: 12 },
      size: 2.0,
      color: '#ffdd44',
      discovered: false,
      description: 'Hành tinh có vành đai đẹp nhất hệ mặt trời.',
      points: 200,
      missions: [
        { id: 'saturn-rings', name: 'Nghiên cứu vành đai', type: 'scan', completed: false, points: 100 },
        { id: 'saturn-moons', name: 'Khám phá vệ tinh', type: 'orbit', completed: false, points: 150 },
      ]
    },
    {
      id: 'europa',
      name: 'Europa',
      position: { x: 5, y: -8, z: -10 },
      size: 0.8,
      color: '#aaccff',
      discovered: false,
      description: 'Vệ tinh băng giá của Sao Mộc với đại dương ngầm.',
      points: 250,
      missions: [
        { id: 'europa-orbit', name: 'Quỹ đạo ổn định', type: 'orbit', completed: false, points: 100 },
        { id: 'europa-ice', name: 'Khoan băng', type: 'sample', completed: false, points: 200 },
        { id: 'europa-ocean', name: 'Tìm sự sống', type: 'scan', completed: false, points: 300 },
      ]
    }
  ]);

  const [spacecraft, setSpacecraft] = useState<Spacecraft>({
    position: { x: 0, y: 0, z: 0 },
    velocity: { x: 0, y: 0, z: 0 },
    fuel: 100,
    health: 100,
    selectedTarget: null
  });

  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState<'playing' | 'completed' | 'failed'>('playing');
  const [targetPosition, setTargetPosition] = useState<Position3D | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Fullscreen functionality
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {
        // Fullscreen failed, ignore
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(() => {
        // Exit fullscreen failed, ignore
      });
    }
  }, []);

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Handle planet selection
  const handlePlanetClick = useCallback((planetId: string) => {
    const planet = planets.find(p => p.id === planetId);
    if (planet) {
      setSelectedPlanet(planet);
      setSpacecraft(prev => ({ ...prev, selectedTarget: planetId }));
      setTargetPosition(planet.position);
      
      // Don't mark as discovered immediately - wait until spacecraft reaches planet
    }
  }, [planets]);

  // Handle mission execution
  const handleMissionSelect = useCallback((missionId: string) => {
    if (!selectedPlanet) return;

    const mission = selectedPlanet.missions.find(m => m.id === missionId);
    if (!mission || mission.completed) return;

    // Simulate mission execution
    setTimeout(() => {
      setPlanets(prev => prev.map(planet => 
        planet.id === selectedPlanet.id
          ? {
              ...planet,
              missions: planet.missions.map(m =>
                m.id === missionId ? { ...m, completed: true } : m
              )
            }
          : planet
      ));
      
      setScore(prev => prev + mission.points);
      
      // Update spacecraft resources
      setSpacecraft(prev => ({
        ...prev,
        fuel: Math.max(0, prev.fuel - 10),
        health: Math.max(0, prev.health - 2)
      }));
    }, 2000);
  }, [selectedPlanet]);

  // Move spacecraft towards target
  useEffect(() => {
    if (!targetPosition || !spacecraft.selectedTarget) return;

    const interval = setInterval(() => {
      setSpacecraft(prev => {
        const dx = targetPosition.x - prev.position.x;
        const dy = targetPosition.y - prev.position.y;
        const dz = targetPosition.z - prev.position.z;
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (distance < 0.5) {
          // Reached target - mark planet as discovered if not already
          const targetPlanet = planets.find(p => p.id === spacecraft.selectedTarget);
          if (targetPlanet && !targetPlanet.discovered) {
            setPlanets(prevPlanets => prevPlanets.map(p => 
              p.id === spacecraft.selectedTarget ? { ...p, discovered: true } : p
            ));
            setScore(prevScore => prevScore + targetPlanet.points);
          }
          
          return prev; // Reached target
        }

        const speed = 0.05;
        // Consume fuel while moving (0.1% per movement step)
        const fuelConsumption = 0.1;
        
        return {
          ...prev,
          position: {
            x: prev.position.x + (dx / distance) * speed,
            y: prev.position.y + (dy / distance) * speed,
            z: prev.position.z + (dz / distance) * speed
          },
          fuel: Math.max(0, prev.fuel - fuelConsumption) // Consume fuel during movement
        };
      });
    }, 50);

    return () => clearInterval(interval);
  }, [targetPosition, spacecraft.selectedTarget, planets]);

  // Check win condition
  useEffect(() => {
    const allMissionsCompleted = planets.every(planet =>
      planet.missions.every(mission => mission.completed)
    );

    if (allMissionsCompleted && gameStatus === 'playing') {
      setGameStatus('completed');
      onComplete(true, score);
    }
  }, [planets, gameStatus, score, onComplete]);

  // Check fail condition
  useEffect(() => {
    if (timeLeft <= 0 && gameStatus === 'playing') {
      setGameStatus('failed');
      onComplete(false, score);
    }
  }, [timeLeft, gameStatus, score, onComplete]);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* 3D Scene */}
      <Canvas camera={{ position: [20, 20, 20], fov: 60 }}>
        <SpaceScene
          planets={planets}
          spacecraft={spacecraft}
          onPlanetClick={handlePlanetClick}
          targetPosition={targetPosition}
        />
      </Canvas>

      {/* Fullscreen Button */}
      <button
        onClick={toggleFullscreen}
        className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-3 text-white hover:bg-black/90 transition-colors z-10"
        title={isFullscreen ? "Thoát toàn màn hình" : "Toàn màn hình"}
      >
        {isFullscreen ? (
          <Minimize className="w-5 h-5" />
        ) : (
          <Maximize className="w-5 h-5" />
        )}
      </button>

      {/* UI Overlays */}
      <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white">
        <h2 className="font-bold text-xl mb-2 text-purple-300">🚀 Khám Phá Vũ Trụ 3D</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Điểm số:</span>
            <span className="font-mono text-yellow-300">{score}</span>
          </div>
          <div className="flex justify-between">
            <span>Thời gian:</span>
            <span className="font-mono text-blue-300">{Math.max(0, timeLeft)}s</span>
          </div>
          <div className="flex justify-between">
            <span>Nhiên liệu:</span>
            <span className={`font-mono ${spacecraft.fuel > 30 ? 'text-green-300' : 'text-red-300'}`}>
              {spacecraft.fuel}%
            </span>
          </div>
          <div className="flex justify-between">
            <span>Sức khỏe tàu:</span>
            <span className={`font-mono ${spacecraft.health > 50 ? 'text-green-300' : 'text-red-300'}`}>
              {spacecraft.health}%
            </span>
          </div>
        </div>
      </div>

      {/* Mission Panel */}
      <MissionPanel 
        selectedPlanet={selectedPlanet}
        onMissionSelect={handleMissionSelect}
      />

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white max-w-md">
        <h3 className="font-bold mb-2">📋 Hướng dẫn:</h3>
        <ul className="text-sm space-y-1 text-gray-300">
          <li>• Click vào hành tinh để chọn mục tiêu</li>
          <li>• Tàu sẽ tự động bay đến hành tinh đã chọn</li>
          <li>• Thực hiện nhiệm vụ để thu thập điểm</li>
          <li>• Hoàn thành tất cả nhiệm vụ để thắng</li>
          <li>• Sử dụng chuột để xoay/zoom camera</li>
        </ul>
      </div>

      {/* Game Over Screen */}
      {gameStatus !== 'playing' && (
        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white">
            <div className="text-6xl mb-4">
              {gameStatus === 'completed' ? '🎉' : '💥'}
            </div>
            <h2 className="text-3xl font-bold mb-4">
              {gameStatus === 'completed' ? 'Nhiệm vụ hoàn thành!' : 'Nhiệm vụ thất bại!'}
            </h2>
            <p className="text-xl text-gray-300 mb-4">Điểm số cuối cùng: {score}</p>
            <div className="text-sm text-gray-400">
              {gameStatus === 'completed' 
                ? 'Bạn đã khám phá thành công tất cả hành tinh!' 
                : 'Hết thời gian hoặc tàu hỏng. Thử lại nhé!'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
