'use client';

import React, { useState, useCallback, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import { Vector3Array } from '@/data/gameData';
// Fish species data with realistic designs
const FISH_SPECIES = [
  {
    id: 'ca-tra',
    name: 'Cá Tra',
    nameEn: 'Basa Fish',
    optimalTemp: [26, 30],
    optimalPH: [6.5, 8.0],
    optimalO2: [4, 8],
    color: '#4682B4',
    secondaryColor: '#6495ED',
    size: 0.35,
    growthRate: 0.02,
    value: 50000,
    bodyShape: 'elongated', // Long streamlined body with barbels
    details: {
      hasWhiskers: true, // Catfish whiskers
      finShape: 'rounded',
      bodyRatio: [3, 1, 1.2], // length, height, width
    },
  },
  {
    id: 'tom-su',
    name: 'Tôm Sú',
    nameEn: 'Black Tiger Shrimp',
    optimalTemp: [26, 32],
    optimalPH: [7.0, 8.5],
    optimalO2: [5, 9],
    color: '#FF6347',
    secondaryColor: '#FF4500',
    size: 0.12,
    growthRate: 0.03,
    value: 120000,
    bodyShape: 'shrimp', // Curved segmented body with antenna
    details: {
      hasAntenna: true, // Long antenna
      hasSegments: true, // Segmented body
      bodyRatio: [2, 0.8, 0.6], // curved elongated
      tailFan: true, // Fan-shaped tail
    },
  },
  {
    id: 'ca-ro-phi',
    name: 'Cá Rô Phi',
    nameEn: 'Tilapia',
    optimalTemp: [24, 32],
    optimalPH: [6.0, 9.0],
    optimalO2: [3, 7],
    color: '#32CD32',
    secondaryColor: '#90EE90',
    size: 0.28,
    growthRate: 0.025,
    value: 30000,
    bodyShape: 'round', // Round compressed body with pronounced fins
    details: {
      finShape: 'large',
      bodyRatio: [1.5, 1.8, 1.2], // compressed laterally
      dorsalFin: true, // Large dorsal fin
      stripes: true, // Body stripes
    },
  },
];

// IoT Sensor types
const SENSOR_TYPES = [
  { id: 'temp', name: 'Temperature', unit: '°C', icon: '🌡️', color: '#FF4444' },
  { id: 'ph', name: 'pH Level', unit: 'pH', icon: '⚗️', color: '#44FF44' },
  { id: 'oxygen', name: 'Oxygen', unit: 'mg/L', icon: '💨', color: '#4444FF' },
  { id: 'turbidity', name: 'Turbidity', unit: 'NTU', icon: '💧', color: '#44FFFF' },
];

// Realistic Fish component with proper shapes
function Fish({
  position,
  species,
  size,
  isHealthy,
}: {
  position: [number, number, number];
  species: (typeof FISH_SPECIES)[0];
  size: number;
  isHealthy: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const tailRef = useRef<THREE.Mesh>(null);
  const [swimDirection, setSwimDirection] = useState([
    (Math.random() - 0.5) * 0.02,
    (Math.random() - 0.5) * 0.01,
    (Math.random() - 0.5) * 0.02,
  ]);

  useFrame((state) => {
    if (meshRef.current) {
      // Swimming animation
      meshRef.current.position.x += swimDirection[0];
      meshRef.current.position.y += swimDirection[1];
      meshRef.current.position.z += swimDirection[2];

      // Boundary checking and direction change
      if (Math.abs(meshRef.current.position.x) > 8) {
        setSwimDirection((prev) => [-prev[0], prev[1], prev[2]]);
      }
      if (meshRef.current.position.y > 2 || meshRef.current.position.y < -3) {
        setSwimDirection((prev) => [prev[0], -prev[1], prev[2]]);
      }
      if (Math.abs(meshRef.current.position.z) > 8) {
        setSwimDirection((prev) => [prev[0], prev[1], -prev[2]]);
      }

      // Swimming motion - side to side
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 8) * 0.2;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 6) * 0.1;
    }

    // Tail wagging for fish (not shrimp)
    if (tailRef.current && species.bodyShape !== 'shrimp') {
      tailRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 12) * 0.4;
    }
  });

  // Different body shapes for different species
  const renderFishBody = () => {
    switch (species.bodyShape) {
      case 'elongated': // Catfish like
        return (
          <group>
            {/* Main body - elongated and streamlined */}
            <mesh scale={(species.details?.bodyRatio || [3, 1, 1.2]) as Vector3Array}>
              <sphereGeometry args={[species.size * size, 16, 12]} />
              <meshStandardMaterial
                color={species.color}
                transparent
                opacity={isHealthy ? 1 : 0.7}
                emissive={isHealthy ? '#000000' : '#330000'}
                emissiveIntensity={isHealthy ? 0 : 0.2}
              />
            </mesh>
            {/* Head - broader for catfish */}
            <mesh position={[species.size * size * 1.4, 0, 0]} scale={[1.2, 1.1, 1.1]}>
              <sphereGeometry args={[species.size * size * 0.7, 16, 12]} />
              <meshStandardMaterial color={species.secondaryColor} transparent opacity={isHealthy ? 1 : 0.7} />
            </mesh>
            {/* Catfish whiskers/barbels */}
            {species.details?.hasWhiskers &&
              [
                { pos: [species.size * size * 1.8, 0.1, 0.2], rot: [0, 0, 0.3] },
                { pos: [species.size * size * 1.8, -0.1, 0.2], rot: [0, 0, -0.3] },
                { pos: [species.size * size * 1.8, 0.1, -0.2], rot: [0, 0, 0.3] },
                { pos: [species.size * size * 1.8, -0.1, -0.2], rot: [0, 0, -0.3] },
              ].map((whisker, index) => (
                <mesh
                  key={index}
                  position={whisker.pos as [number, number, number]}
                  rotation={whisker.rot as [number, number, number]}
                  scale={[0.8, 0.05, 0.05]}
                >
                  <boxGeometry args={[species.size * size * 0.8, 0.02, 0.02]} />
                  <meshStandardMaterial color="#444444" />
                </mesh>
              ))}
            {/* Dorsal fin */}
            <mesh position={[0, species.size * size * 0.8, 0]} scale={[1.5, 1, 0.2]}>
              <boxGeometry args={[species.size * size, species.size * size * 0.6, 0.05]} />
              <meshStandardMaterial color={species.secondaryColor} transparent opacity={0.8} />
            </mesh>
            {/* Tail */}
            <mesh ref={tailRef} position={[-species.size * size * 2.2, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
              <coneGeometry args={[species.size * size * 0.8, species.size * size * 1.4, 6]} />
              <meshStandardMaterial color={species.color} transparent opacity={isHealthy ? 0.8 : 0.5} />
            </mesh>
          </group>
        );

      case 'shrimp': // Curved segmented body with details
        return (
          <group>
            {/* Segmented body parts - more curved */}
            {[0, 1, 2, 3, 4, 5].map((segment) => (
              <mesh
                key={segment}
                position={[
                  -segment * species.size * size * 0.25,
                  Math.sin(segment * 0.4) * species.size * size * 0.3,
                  0,
                ]}
                scale={[0.9 - segment * 0.08, 0.5, 0.5]}
              >
                <sphereGeometry args={[species.size * size * 0.6, 8, 8]} />
                <meshStandardMaterial
                  color={segment === 0 ? species.secondaryColor : species.color}
                  transparent
                  opacity={isHealthy ? 1 : 0.7}
                />
              </mesh>
            ))}
            {/* Long antennae for shrimp */}
            {species.details?.hasAntenna &&
              [
                {
                  pos: [species.size * size * 0.5, species.size * size * 0.2, species.size * size * 0.15],
                  rot: [0, 0, 0.3],
                },
                {
                  pos: [species.size * size * 0.5, species.size * size * 0.2, -species.size * size * 0.15],
                  rot: [0, 0, -0.3],
                },
              ].map((antenna, index) => (
                <mesh
                  key={index}
                  position={antenna.pos as [number, number, number]}
                  rotation={antenna.rot as [number, number, number]}
                  scale={[2, 0.02, 0.02]}
                >
                  <cylinderGeometry args={[0.005, 0.005, species.size * size * 1.8]} />
                  <meshStandardMaterial color={species.secondaryColor} />
                </mesh>
              ))}
            {/* Fan-shaped tail */}
            {species.details?.tailFan && (
              <mesh
                position={[-species.size * size * 1.2, species.size * size * 0.4, 0]}
                rotation={[0, 0, Math.PI / 6]}
              >
                <coneGeometry args={[species.size * size * 0.4, species.size * size * 0.3, 8]} />
                <meshStandardMaterial color={species.color} transparent opacity={0.8} />
              </mesh>
            )}
          </group>
        );

      case 'round': // Tilapia - round compressed with large fins
        return (
          <group>
            {/* Main body - round and laterally compressed */}
            <mesh scale={(species.details?.bodyRatio || [1.5, 1.8, 1.2]) as Vector3Array}>
              <sphereGeometry args={[species.size * size, 16, 12]} />
              <meshStandardMaterial
                color={species.color}
                transparent
                opacity={isHealthy ? 1 : 0.7}
                emissive={isHealthy ? '#000000' : '#330000'}
                emissiveIntensity={isHealthy ? 0 : 0.2}
              />
            </mesh>
            {/* Body stripes for tilapia */}
            {species.details?.stripes &&
              [0, 1, 2].map((stripe) => (
                <mesh
                  key={stripe}
                  position={[(stripe - 1) * species.size * size * 0.3, 0, species.size * size * 0.75]}
                  scale={[0.2, 1.6, 0.1]}
                >
                  <boxGeometry args={[species.size * size * 0.2, species.size * size * 1.4, 0.01]} />
                  <meshStandardMaterial color={species.secondaryColor} transparent opacity={0.6} />
                </mesh>
              ))}
            {/* Large dorsal fin */}
            {species.details?.dorsalFin && (
              <mesh position={[0, species.size * size * 1.3, 0]} scale={[2, 1.2, 0.15]}>
                <boxGeometry args={[species.size * size * 0.8, species.size * size * 0.8, species.size * size * 0.1]} />
                <meshStandardMaterial color={species.secondaryColor} transparent opacity={isHealthy ? 0.9 : 0.6} />
              </mesh>
            )}
            {/* Pectoral fins */}
            {[
              { pos: [species.size * size * 0.3, 0, species.size * size * 0.8], rot: [0, 0, Math.PI / 6] },
              { pos: [species.size * size * 0.3, 0, -species.size * size * 0.8], rot: [0, 0, -Math.PI / 6] },
            ].map((fin, index) => (
              <mesh
                key={index}
                position={fin.pos as [number, number, number]}
                rotation={fin.rot as [number, number, number]}
                scale={[0.8, 1.2, 0.1]}
              >
                <boxGeometry args={[species.size * size * 0.6, species.size * size * 0.4, 0.02]} />
                <meshStandardMaterial color={species.secondaryColor} transparent opacity={0.7} />
              </mesh>
            ))}
            {/* Tail fin - fan shaped */}
            <mesh ref={tailRef} position={[-species.size * size * 1.6, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
              <coneGeometry args={[species.size * size * 0.9, species.size * size * 1.2, 8]} />
              <meshStandardMaterial color={species.color} transparent opacity={isHealthy ? 0.8 : 0.5} />
            </mesh>
          </group>
        );

      default:
        return (
          <mesh scale={[1, 0.6, 1.5]}>
            <sphereGeometry args={[species.size * size, 16, 12]} />
            <meshStandardMaterial color={species.color} transparent opacity={isHealthy ? 1 : 0.7} />
          </mesh>
        );
    }
  };

  return (
    <group ref={meshRef} position={position}>
      {renderFishBody()}
    </group>
  );
}

// IoT Sensor component with clickable functionality
function IoTSensor({
  position,
  sensorType,
  value,
  isAlert,
  onClick,
}: {
  position: [number, number, number];
  sensorType: (typeof SENSOR_TYPES)[0];
  value: number;
  isAlert: boolean;
  onClick: () => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current && isAlert) {
      // Pulsing animation for alerts
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 8) * 0.2);
    }
  });

  return (
    <group position={position}>
      {/* Sensor body - clickable */}
      <mesh
        ref={meshRef}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <cylinderGeometry args={[0.2, 0.2, 0.6]} />
        <meshStandardMaterial
          color={hovered ? '#FFFF00' : isAlert ? '#FF0000' : sensorType.color}
          emissive={isAlert ? '#FF0000' : hovered ? '#444400' : '#000000'}
          emissiveIntensity={isAlert ? 0.3 : hovered ? 0.2 : 0}
        />
      </mesh>

      {/* Sensor cable */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 1]} />
        <meshStandardMaterial color="#333333" />
      </mesh>

      {/* Data display */}
      <Html position={[0, 0.8, 0]} center>
        <div
          className={`px-2 py-1 rounded text-xs font-bold cursor-pointer transition-all ${
            isAlert
              ? 'bg-red-500 text-white animate-pulse'
              : hovered
                ? 'bg-yellow-400 text-black'
                : 'bg-white text-gray-800'
          }`}
          onClick={onClick}
        >
          {sensorType.icon} {value.toFixed(1)}
          {sensorType.unit}
        </div>
      </Html>
    </group>
  );
}

// Water environment component
function WaterEnvironment({ quality }: { quality: number }) {
  const waterColor = useMemo(() => {
    // Water color based on quality
    if (quality > 0.8) return '#0077BE'; // Clear blue
    if (quality > 0.6) return '#4A90A4'; // Slightly murky
    if (quality > 0.4) return '#6B9080'; // Murky green
    return '#8B7355'; // Poor quality brown
  }, [quality]);

  return (
    <>
      {/* Water surface */}
      <mesh position={[0, 2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color={waterColor} transparent opacity={0.7} side={THREE.DoubleSide} />
      </mesh>

      {/* Pond bottom */}
      <mesh position={[0, -4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#654321" />
      </mesh>

      {/* Pond walls */}
      {[
        { pos: [10, -1, 0], rot: [0, 0, Math.PI / 2] },
        { pos: [-10, -1, 0], rot: [0, 0, -Math.PI / 2] },
        { pos: [0, -1, 10], rot: [Math.PI / 2, 0, 0] },
        { pos: [0, -1, -10], rot: [-Math.PI / 2, 0, 0] },
      ].map((wall, index) => (
        <mesh key={index} position={wall.pos as Vector3Array} rotation={wall.rot as Vector3Array}>
          <planeGeometry args={[20, 6]} />
          <meshStandardMaterial color="#8B7D6B" />
        </mesh>
      ))}

      {/* Bubbles effect for aeration */}
      {Array.from({ length: 20 }, (_, i) => (
        <mesh key={i} position={[(Math.random() - 0.5) * 16, Math.random() * 4 - 2, (Math.random() - 0.5) * 16]}>
          <sphereGeometry args={[0.05]} />
          <meshBasicMaterial color="white" transparent opacity={0.6} />
        </mesh>
      ))}
    </>
  );
}

// Control Panel Component
function ControlPanel({
  sensors,
  fishHealth,
  production,
  onAction,
}: {
  sensors: Record<string, number>;
  fishHealth: number;
  production: number;
  onAction: (action: string) => void;
}) {
  const getStatusColor = (value: number, optimal: [number, number]) => {
    if (value >= optimal[0] && value <= optimal[1]) return 'text-green-600';
    if (value < optimal[0] * 0.8 || value > optimal[1] * 1.2) return 'text-red-600';
    return 'text-yellow-600';
  };

  return (
    <div className="absolute top-2 left-4 bg-white bg-opacity-95 rounded-lg p-3 min-w-[280px] max-h-[60vh] overflow-y-auto z-20 shadow-lg">
      <h3 className="text-base font-bold text-gray-800 mb-3">🐟 IoT Aquaculture Control</h3>

      {/* Sensor Readings */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">📊 Sensor Readings</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>🌡️ Temperature:</span>
            <span className={getStatusColor(sensors.temp, [26, 30])}>{sensors.temp.toFixed(1)}°C</span>
          </div>
          <div className="flex justify-between">
            <span>⚗️ pH Level:</span>
            <span className={getStatusColor(sensors.ph, [6.5, 8.0])}>{sensors.ph.toFixed(1)} pH</span>
          </div>
          <div className="flex justify-between">
            <span>💨 Oxygen:</span>
            <span className={getStatusColor(sensors.oxygen, [4, 8])}>{sensors.oxygen.toFixed(1)} mg/L</span>
          </div>
          <div className="flex justify-between">
            <span>💧 Turbidity:</span>
            <span className={getStatusColor(sensors.turbidity, [0, 10])}>{sensors.turbidity.toFixed(1)} NTU</span>
          </div>
        </div>
      </div>

      {/* Fish Health */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">🐠 Fish Health</h4>
        <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
          <div
            className={`h-3 rounded-full transition-all duration-500 ${
              fishHealth > 80 ? 'bg-green-500' : fishHealth > 60 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            style={{ width: `${fishHealth}%` }}
          ></div>
        </div>
        <div className="text-sm text-gray-600">Health: {fishHealth.toFixed(1)}%</div>
      </div>

      {/* Production Stats */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">📈 Production</h4>
        <div className="text-sm space-y-1">
          <div className="flex justify-between">
            <span>Daily Growth:</span>
            <span>{(production * 100).toFixed(2)}%</span>
          </div>
          <div className="flex justify-between">
            <span>Feed Efficiency:</span>
            <span>{production > 0.02 ? 'High' : production > 0.01 ? 'Medium' : 'Low'}</span>
          </div>
        </div>
      </div>

      {/* Control Actions */}
      <div className="space-y-2">
        <h4 className="font-semibold">⚙️ Controls</h4>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <button
            onClick={() => onAction('feed')}
            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            🐟 Feed Fish
          </button>
          <button
            onClick={() => onAction('aerate')}
            className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            🫧 Aerate
          </button>
          <button
            onClick={() => onAction('clean')}
            className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
          >
            🧽 Clean Water
          </button>
          <button
            onClick={() => onAction('adjust')}
            className="px-2 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
          >
            ⚗️ Adjust pH
          </button>
        </div>
      </div>
    </div>
  );
}

// Instructions Component
function Instructions({ onStart }: { onStart: () => void }) {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-2xl mx-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🐟 Aquaculture IoT Manager 3D</h2>

        <div className="text-left space-y-4 mb-6">
          <p className="text-gray-600">
            Quản lý trang trại nuôi trồng thủy sản thông minh với hệ thống IoT sensors! Theo dõi chất lượng nước và sức
            khỏe cá để tối ưu hóa sản xuất.
          </p>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-2">🎮 Cách chơi:</h3>
            <ul className="text-blue-700 space-y-1 text-sm">
              <li>
                • <strong>Theo dõi sensors</strong> để kiểm soát môi trường nước
              </li>
              <li>
                • <strong>Cho cá ăn</strong> để tăng tốc độ phát triển
              </li>
              <li>
                • <strong>Sục khí</strong> khi nồng độ O₂ thấp
              </li>
              <li>
                • <strong>Làm sạch nước</strong> khi độ đục cao
              </li>
              <li>
                • <strong>Điều chỉnh pH</strong> về mức tối ưu
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-green-800 mb-2">🎯 Mục tiêu:</h3>
            <p className="text-green-700 text-sm">
              Duy trì sức khỏe cá trên 80% và tối ưu hóa tăng trưởng hàng ngày. Cân bằng giữa chi phí vận hành và hiệu
              quả sản xuất!
            </p>
          </div>
        </div>

        <button
          onClick={onStart}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-green-600 transition-all transform hover:scale-105"
        >
          🚀 Bắt Đầu Quản Lý
        </button>
      </div>
    </div>
  );
}

// Main Game Component
export default function AquacultureIoTManager3D() {
  const [gameStarted, setGameStarted] = useState(false);
  const [sensors, setSensors] = useState({
    temp: 28,
    ph: 7.2,
    oxygen: 6,
    turbidity: 5,
  });
  const [fishHealth, setFishHealth] = useState(85);
  const [production, setProduction] = useState(0.02);
  const [fishData] = useState(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      species: FISH_SPECIES[Math.floor(Math.random() * FISH_SPECIES.length)],
      position: [(Math.random() - 0.5) * 16, Math.random() * 4 - 2, (Math.random() - 0.5) * 16] as [
        number,
        number,
        number,
      ],
      size: 0.8 + Math.random() * 0.4,
      health: 80 + Math.random() * 20,
    })),
  );

  // Simulate sensor changes over time
  React.useEffect(() => {
    if (!gameStarted) return;

    const interval = setInterval(() => {
      setSensors((prev) => ({
        temp: Math.max(20, Math.min(35, prev.temp + (Math.random() - 0.5) * 0.5)),
        ph: Math.max(5, Math.min(9, prev.ph + (Math.random() - 0.5) * 0.1)),
        oxygen: Math.max(2, Math.min(12, prev.oxygen + (Math.random() - 0.5) * 0.3)),
        turbidity: Math.max(0, Math.min(20, prev.turbidity + (Math.random() - 0.5) * 0.8)),
      }));

      // Update fish health based on water conditions
      setFishHealth((prev) => {
        const tempOk = sensors.temp >= 24 && sensors.temp <= 32;
        const phOk = sensors.ph >= 6.0 && sensors.ph <= 8.5;
        const oxygenOk = sensors.oxygen >= 4;
        const turbidityOk = sensors.turbidity <= 15;

        const healthFactors = [tempOk, phOk, oxygenOk, turbidityOk].filter(Boolean).length;
        const targetHealth = 50 + healthFactors * 12.5;

        return prev + (targetHealth - prev) * 0.1;
      });

      // Update production based on fish health
      setProduction((prev) => {
        const targetProduction = fishHealth > 80 ? 0.025 : fishHealth > 60 ? 0.015 : 0.005;
        return prev + (targetProduction - prev) * 0.1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [gameStarted, sensors, fishHealth]);

  const handleAction = useCallback((action: string) => {
    switch (action) {
      case 'feed':
        setFishHealth((prev) => Math.min(100, prev + 5));
        setProduction((prev) => prev + 0.005);
        break;
      case 'aerate':
        setSensors((prev) => ({ ...prev, oxygen: Math.min(10, prev.oxygen + 2) }));
        break;
      case 'clean':
        setSensors((prev) => ({ ...prev, turbidity: Math.max(0, prev.turbidity - 3) }));
        break;
      case 'adjust':
        setSensors((prev) => ({ ...prev, ph: 7.0 + (Math.random() - 0.5) * 0.5 }));
        break;
    }
  }, []);

  const handleSensorClick = useCallback(
    (sensorType: string) => {
      // Provide detailed sensor information and controls
      switch (sensorType) {
        case 'temp':
          alert(
            `🌡️ Temperature Sensor\nCurrent: ${sensors.temp.toFixed(1)}°C\nOptimal Range: 24-32°C\n\nTip: Use heating/cooling systems to adjust temperature.`,
          );
          break;
        case 'ph':
          alert(
            `⚗️ pH Level Sensor\nCurrent: ${sensors.ph.toFixed(1)} pH\nOptimal Range: 6.0-8.5 pH\n\nTip: Add pH buffers to stabilize water chemistry.`,
          );
          break;
        case 'oxygen':
          alert(
            `💨 Oxygen Sensor\nCurrent: ${sensors.oxygen.toFixed(1)} mg/L\nOptimal Range: 4-8 mg/L\n\nTip: Use aeration systems to increase oxygen levels.`,
          );
          break;
        case 'turbidity':
          alert(
            `💧 Turbidity Sensor\nCurrent: ${sensors.turbidity.toFixed(1)} NTU\nOptimal Range: 0-15 NTU\n\nTip: Use filtration and water changes to reduce turbidity.`,
          );
          break;
      }
    },
    [sensors],
  );

  if (!gameStarted) {
    return <Instructions onStart={() => setGameStarted(true)} />;
  }

  const waterQuality =
    (sensors.temp >= 24 && sensors.temp <= 32 ? 0.25 : 0) +
    (sensors.ph >= 6.0 && sensors.ph <= 8.5 ? 0.25 : 0) +
    (sensors.oxygen >= 4 ? 0.25 : 0) +
    (sensors.turbidity <= 15 ? 0.25 : 0);

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-blue-300 to-blue-600">
      {/* Control Panel */}
      <ControlPanel sensors={sensors} fishHealth={fishHealth} production={production} onAction={handleAction} />

      {/* 3D Scene */}
      <Canvas camera={{ position: [0, 5, 15], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[0, 5, 0]} intensity={0.5} color="#00BFFF" />

        <WaterEnvironment quality={waterQuality} />

        {/* Fish */}
        {fishData.map((fish) => (
          <Fish
            key={fish.id}
            position={fish.position}
            species={fish.species}
            size={fish.size}
            isHealthy={fish.health > 60}
          />
        ))}

        {/* IoT Sensors with clickable functionality */}
        {SENSOR_TYPES.map((sensorType, index) => (
          <IoTSensor
            key={sensorType.id}
            position={[-8 + index * 5, 1, -8]}
            sensorType={sensorType}
            value={sensors[sensorType.id as keyof typeof sensors]}
            isAlert={
              (sensorType.id === 'temp' && (sensors.temp < 24 || sensors.temp > 32)) ||
              (sensorType.id === 'ph' && (sensors.ph < 6 || sensors.ph > 8.5)) ||
              (sensorType.id === 'oxygen' && sensors.oxygen < 4) ||
              (sensorType.id === 'turbidity' && sensors.turbidity > 15)
            }
            onClick={() => handleSensorClick(sensorType.id)}
          />
        ))}

        <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2.2} minDistance={8} maxDistance={25} />
      </Canvas>
    </div>
  );
}
