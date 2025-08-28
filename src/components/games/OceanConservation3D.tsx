'use client';

import React, { useState, useCallback, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

// Marine life types with realistic ocean species
const MARINE_LIFE = [
  {
    id: 'tropical-fish',
    name: 'Cá Nhiệt Đới',
    color: '#FFD700',
    secondaryColor: '#FFA500',
    health: 100,
    size: 0.3,
    bodyShape: 'tropical',
    finSwingSpeed: 8, // Fast tropical fish movement
  },
  {
    id: 'sea-turtle',
    name: 'Rùa Biển',
    color: '#228B22',
    secondaryColor: '#90EE90',
    health: 100,
    size: 0.8,
    bodyShape: 'turtle',
    finSwingSpeed: 2, // Very slow turtle movement
  },
  {
    id: 'coral-fish',
    name: 'Cá San Hô',
    color: '#FF6347',
    secondaryColor: '#FF4500',
    health: 100,
    size: 0.4,
    bodyShape: 'coral',
    finSwingSpeed: 12, // Fast reef fish movement
  },
  {
    id: 'whale',
    name: 'Cá Voi',
    color: '#4169E1',
    secondaryColor: '#6495ED',
    health: 100,
    size: 2.0,
    bodyShape: 'whale',
    finSwingSpeed: 3, // Slow majestic whale movement
  },
  {
    id: 'dolphin',
    name: 'Cá Heo',
    color: '#87CEEB',
    secondaryColor: '#ADD8E6',
    health: 100,
    size: 1.2,
    bodyShape: 'dolphin',
    finSwingSpeed: 6, // Medium playful dolphin movement
  },
  {
    id: 'shark',
    name: 'Cá Mập',
    color: '#708090',
    secondaryColor: '#A9A9A9',
    health: 100,
    size: 1.5,
    bodyShape: 'shark',
    finSwingSpeed: 5, // Medium predatory shark movement
  },
];

// Pollution types
const POLLUTION_TYPES = [
  { id: 'plastic_bottle', name: 'Chai Nhựa', color: '#FF4444', damage: 20, points: 10 },
  { id: 'plastic_bag', name: 'Túi Nilon', color: '#FF6666', damage: 15, points: 8 },
  { id: 'oil_spill', name: 'Tràn Dầu', color: '#654321', damage: 50, points: 25 },
  { id: 'chemical_waste', name: 'Chất Thải Hóa Học', color: '#800080', damage: 40, points: 20 },
  { id: 'microplastic', name: 'Vi Nhựa', color: '#FF8888', damage: 10, points: 5 },
  { id: 'fishing_net', name: 'Lưới Cũ', color: '#8B4513', damage: 30, points: 15 },
];

// Realistic Marine animal component with proper ocean species designs
function MarineAnimal({
  position,
  species,
  health,
  onRescue,
}: {
  position: [number, number, number];
  species: (typeof MARINE_LIFE)[0];
  health: number;
  onRescue: () => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const tailRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Swimming animation - different patterns for different species with individual fin swing speeds
      const timeOffset = position[2] * 0.5;
      const baseSpeed = species.finSwingSpeed || 5; // Fallback to 5 if not defined

      if (species.bodyShape === 'whale' || species.bodyShape === 'dolphin') {
        // Large mammals - slower, graceful movement
        meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * (baseSpeed * 0.1) + timeOffset) * 3;
        meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * (baseSpeed * 0.15) + timeOffset) * 1;
        meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * (baseSpeed * 0.08) + timeOffset) * 0.2;
      } else if (species.bodyShape === 'turtle') {
        // Turtle - very slow movement with slow fin swing
        meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * (baseSpeed * 0.1) + timeOffset) * 1;
        meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * (baseSpeed * 0.05) + timeOffset) * 0.5;
        meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * (baseSpeed * 0.05) + timeOffset) * 0.1;
      } else {
        // Fish - faster, darting movement with species-specific fin swing speeds
        meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * (baseSpeed * 0.1) + timeOffset) * 2;
        meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * (baseSpeed * 0.15) + timeOffset) * 0.8;
        meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * (baseSpeed * 0.075) + timeOffset) * 0.4;
      }

      // Scale based on health
      const healthScale = 0.8 + (health / 100) * 0.4;
      meshRef.current.scale.setScalar(species.size * healthScale * (hovered ? 1.2 : 1));
    }

    // Tail animation for fish with species-specific swing speed (not turtle)
    if (tailRef.current && species.bodyShape !== 'turtle') {
      const finSpeed = species.finSwingSpeed || 10;
      tailRef.current.rotation.y = Math.sin(state.clock.elapsedTime * finSpeed) * 0.3;
    }
  });

  const needsRescue = health < 50;

  // Render different body shapes for different marine species
  const renderMarineBody = () => {
    switch (species.bodyShape) {
      case 'whale':
        return (
          <group>
            {/* Whale body - large elongated */}
            <mesh scale={[3, 1, 1.5]}>
              <sphereGeometry args={[1, 16, 12]} />
              <meshStandardMaterial color={species.color} opacity={0.2 + (health / 100) * 0.8} transparent />
            </mesh>
            {/* Whale head */}
            <mesh position={[2.5, 0, 0]} scale={[1.5, 1.2, 1.2]}>
              <sphereGeometry args={[1, 16, 12]} />
              <meshStandardMaterial color={species.secondaryColor} transparent opacity={0.2 + (health / 100) * 0.8} />
            </mesh>
            {/* Whale eyes */}
            <mesh position={[3.2, 0.4, 0.8]}>
              <sphereGeometry args={[0.15, 8, 6]} />
              <meshStandardMaterial color="#000000" />
            </mesh>
            <mesh position={[3.2, 0.4, -0.8]}>
              <sphereGeometry args={[0.15, 8, 6]} />
              <meshStandardMaterial color="#000000" />
            </mesh>
            {/* Whale blowhole */}
            <mesh position={[3, 0.8, 0]}>
              <cylinderGeometry args={[0.1, 0.08, 0.2]} />
              <meshStandardMaterial color="#222222" />
            </mesh>
            {/* Pectoral fins */}
            <mesh position={[1, -0.3, 1.8]} rotation={[0, 0, -Math.PI / 6]} scale={[2, 0.3, 0.8]}>
              <boxGeometry args={[0.8, 0.1, 0.4]} />
              <meshStandardMaterial color={species.secondaryColor} transparent opacity={0.2 + (health / 100) * 0.8} />
            </mesh>
            <mesh position={[1, -0.3, -1.8]} rotation={[0, 0, Math.PI / 6]} scale={[2, 0.3, 0.8]}>
              <boxGeometry args={[0.8, 0.1, 0.4]} />
              <meshStandardMaterial color={species.secondaryColor} transparent opacity={0.2 + (health / 100) * 0.8} />
            </mesh>
            {/* Dorsal fin */}
            <mesh position={[0, 1.2, 0]} scale={[1.5, 1, 0.3]}>
              <coneGeometry args={[0.6, 0.8, 6]} />
              <meshStandardMaterial color={species.color} transparent opacity={0.2 + (health / 100) * 0.8} />
            </mesh>
            {/* Whale tail */}
            <mesh ref={tailRef} position={[-4, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <coneGeometry args={[1.5, 2, 6]} />
              <meshStandardMaterial color={species.color} transparent opacity={0.2 + (health / 100) * 0.8} />
            </mesh>
            {/* Grooves on throat (whale feature) */}
            {Array.from({ length: 6 }, (_, i) => (
              <mesh
                key={i}
                position={[2.5 + i * 0.3, -0.6, 0]}
                scale={[0.1, 0.05, 1]}
              >
                <cylinderGeometry args={[0.02, 0.02, 1.2]} />
                <meshStandardMaterial color="#555555" transparent opacity={0.6} />
              </mesh>
            ))}
          </group>
        );

      case 'dolphin':
        return (
          <group>
            {/* Dolphin body - sleek */}
            <mesh scale={[2.5, 0.8, 1]}>
              <sphereGeometry args={[1, 16, 12]} />
              <meshStandardMaterial color={species.color} transparent opacity={0.2 + (health / 100) * 0.8} />
            </mesh>
            {/* Dolphin beak */}
            <mesh position={[2, 0, 0]} scale={[1, 0.4, 0.4]}>
              <cylinderGeometry args={[0.2, 0.4, 1.5]} />
              <meshStandardMaterial color={species.secondaryColor} transparent opacity={0.2 + (health / 100) * 0.8} />
            </mesh>
            {/* Dolphin eyes */}
            <mesh position={[1.8, 0.3, 0.5]}>
              <sphereGeometry args={[0.12, 8, 6]} />
              <meshStandardMaterial color="#000000" />
            </mesh>
            <mesh position={[1.8, 0.3, -0.5]}>
              <sphereGeometry args={[0.12, 8, 6]} />
              <meshStandardMaterial color="#000000" />
            </mesh>
            {/* Blowhole */}
            <mesh position={[1.5, 0.6, 0]}>
              <cylinderGeometry args={[0.08, 0.06, 0.15]} />
              <meshStandardMaterial color="#222222" />
            </mesh>
            {/* Dorsal fin */}
            <mesh position={[0, 1, 0]} scale={[0.8, 1.2, 0.2]}>
              <coneGeometry args={[0.5, 1, 6]} />
              <meshStandardMaterial color={species.color} transparent opacity={0.2 + (health / 100) * 0.8} />
            </mesh>
            {/* Pectoral fins */}
            <mesh position={[0.5, -0.2, 1.2]} rotation={[0, 0, -Math.PI / 4]} scale={[1.5, 0.3, 0.6]}>
              <boxGeometry args={[0.6, 0.08, 0.3]} />
              <meshStandardMaterial color={species.secondaryColor} transparent opacity={0.2 + (health / 100) * 0.8} />
            </mesh>
            <mesh position={[0.5, -0.2, -1.2]} rotation={[0, 0, Math.PI / 4]} scale={[1.5, 0.3, 0.6]}>
              <boxGeometry args={[0.6, 0.08, 0.3]} />
              <meshStandardMaterial color={species.secondaryColor} transparent opacity={0.2 + (health / 100) * 0.8} />
            </mesh>
            {/* Anal fin */}
            <mesh position={[-1, -0.6, 0]} scale={[0.8, 0.6, 0.15]}>
              <coneGeometry args={[0.3, 0.6, 6]} />
              <meshStandardMaterial color={species.color} transparent opacity={0.2 + (health / 100) * 0.8} />
            </mesh>
            {/* Melon (forehead bulge) */}
            <mesh position={[1.8, 0.4, 0]} scale={[0.6, 0.5, 0.5]}>
              <sphereGeometry args={[0.4, 8, 6]} />
              <meshStandardMaterial color={species.secondaryColor} transparent opacity={0.1 + (health / 100) * 0.6} />
            </mesh>
            {/* Tail */}
            <mesh ref={tailRef} position={[-3, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
              <coneGeometry args={[0.8, 1.5, 6]} />
              <meshStandardMaterial color={species.color} transparent opacity={0.2 + (health / 100) * 0.8} />
            </mesh>
          </group>
        );

      case 'turtle':
        return (
          <group>
            {/* Turtle shell */}
            <mesh scale={[1.2, 0.6, 1.4]}>
              <sphereGeometry args={[1, 16, 12]} />
              <meshStandardMaterial color={species.color} transparent opacity={0.2 + (health / 100) * 0.8} />
            </mesh>
            {/* Shell pattern - hexagonal scutes */}
            {Array.from({ length: 12 }, (_, i) => (
              <mesh
                key={i}
                position={[
                  (i % 3) * 0.4 - 0.4,
                  0.35,
                  Math.floor(i / 3) * 0.4 - 0.6,
                ]}
                scale={[0.3, 0.1, 0.3]}
              >
                <cylinderGeometry args={[0.15, 0.15, 0.05, 6]} />
                <meshStandardMaterial color="#2F4F2F" transparent opacity={0.8} />
              </mesh>
            ))}
            {/* Turtle head */}
            <mesh position={[1.5, 0, 0]} scale={[0.6, 0.6, 0.6]}>
              <sphereGeometry args={[1, 12, 12]} />
              <meshStandardMaterial color={species.secondaryColor} transparent opacity={0.2 + (health / 100) * 0.8} />
            </mesh>
            {/* Turtle eyes */}
            <mesh position={[1.8, 0.3, 0.3]}>
              <sphereGeometry args={[0.08, 8, 6]} />
              <meshStandardMaterial color="#000000" />
            </mesh>
            <mesh position={[1.8, 0.3, -0.3]}>
              <sphereGeometry args={[0.08, 8, 6]} />
              <meshStandardMaterial color="#000000" />
            </mesh>
            {/* Turtle beak/mouth */}
            <mesh position={[2, 0, 0]} scale={[0.3, 0.2, 0.2]}>
              <sphereGeometry args={[0.15, 8, 6]} />
              <meshStandardMaterial color="#8B4513" />
            </mesh>
            {/* Flippers - more detailed */}
            {[
              { pos: [-0.5, 0, 1.2], rot: [0, 0, Math.PI / 6] },
              { pos: [-0.5, 0, -1.2], rot: [0, 0, -Math.PI / 6] },
              { pos: [0.5, 0, 1.2], rot: [0, 0, Math.PI / 4] },
              { pos: [0.5, 0, -1.2], rot: [0, 0, -Math.PI / 4] },
            ].map((flipper, index) => (
              <mesh
                key={index}
                position={flipper.pos as [number, number, number]}
                rotation={flipper.rot as [number, number, number]}
                scale={[0.8, 0.2, 0.4]}
              >
                <sphereGeometry args={[1, 12, 8]} />
                <meshStandardMaterial color={species.secondaryColor} transparent opacity={0.2 + (health / 100) * 0.8} />
              </mesh>
            ))}
            {/* Tail */}
            <mesh position={[-1.2, 0, 0]} scale={[0.4, 0.3, 0.3]}>
              <sphereGeometry args={[0.5, 8, 6]} />
              <meshStandardMaterial color={species.secondaryColor} transparent opacity={0.2 + (health / 100) * 0.8} />
            </mesh>
          </group>
        );

      case 'shark':
        return (
          <group>
            {/* Shark body - streamlined */}
            <mesh scale={[2.2, 0.8, 1]}>
              <sphereGeometry args={[1, 16, 12]} />
              <meshStandardMaterial color={species.color} transparent opacity={0.2 + (health / 100) * 0.8} />
            </mesh>
            {/* Shark head - pointed */}
            <mesh position={[1.8, 0, 0]} scale={[1, 0.6, 0.8]}>
              <coneGeometry args={[0.6, 1.2, 8]} />
              <meshStandardMaterial color={species.secondaryColor} transparent opacity={0.2 + (health / 100) * 0.8} />
            </mesh>
            {/* Shark eyes */}
            <mesh position={[2.2, 0.2, 0.4]}>
              <sphereGeometry args={[0.1, 8, 6]} />
              <meshStandardMaterial color="#000000" />
            </mesh>
            <mesh position={[2.2, 0.2, -0.4]}>
              <sphereGeometry args={[0.1, 8, 6]} />
              <meshStandardMaterial color="#000000" />
            </mesh>
            {/* Shark mouth/jaw */}
            <mesh position={[2.4, -0.2, 0]} scale={[0.6, 0.3, 0.8]}>
              <sphereGeometry args={[0.2, 8, 6]} />
              <meshStandardMaterial color="#2C1810" />
            </mesh>
            {/* Gills */}
            {Array.from({ length: 5 }, (_, i) => (
              <mesh
                key={i}
                position={[1 - i * 0.2, 0, 0.7]}
                scale={[0.05, 0.8, 0.1]}
              >
                <boxGeometry args={[0.1, 0.4, 0.02]} />
                <meshStandardMaterial color="#8B4513" transparent opacity={0.8} />
              </mesh>
            ))}
            {Array.from({ length: 5 }, (_, i) => (
              <mesh
                key={i + 5}
                position={[1 - i * 0.2, 0, -0.7]}
                scale={[0.05, 0.8, 0.1]}
              >
                <boxGeometry args={[0.1, 0.4, 0.02]} />
                <meshStandardMaterial color="#8B4513" transparent opacity={0.8} />
              </mesh>
            ))}
            {/* Pectoral fins */}
            <mesh position={[0.5, -0.3, 1.3]} rotation={[0, 0, -Math.PI / 6]} scale={[1.5, 0.3, 0.8]}>
              <boxGeometry args={[0.8, 0.1, 0.4]} />
              <meshStandardMaterial color={species.color} transparent opacity={0.2 + (health / 100) * 0.8} />
            </mesh>
            <mesh position={[0.5, -0.3, -1.3]} rotation={[0, 0, Math.PI / 6]} scale={[1.5, 0.3, 0.8]}>
              <boxGeometry args={[0.8, 0.1, 0.4]} />
              <meshStandardMaterial color={species.color} transparent opacity={0.2 + (health / 100) * 0.8} />
            </mesh>
            {/* Dorsal fin */}
            <mesh position={[-0.5, 1.2, 0]}>
              <coneGeometry args={[0.4, 1.5, 6]} />
              <meshStandardMaterial color={species.color} transparent opacity={0.2 + (health / 100) * 0.8} />
            </mesh>
            {/* Second dorsal fin */}
            <mesh position={[-1.5, 0.8, 0]} scale={[1, 0.6, 1]}>
              <coneGeometry args={[0.3, 0.8, 6]} />
              <meshStandardMaterial color={species.color} transparent opacity={0.2 + (health / 100) * 0.8} />
            </mesh>
            {/* Anal fin */}
            <mesh position={[-1.2, -0.6, 0]} scale={[0.8, 0.6, 1]}>
              <coneGeometry args={[0.25, 0.6, 6]} />
              <meshStandardMaterial color={species.color} transparent opacity={0.2 + (health / 100) * 0.8} />
            </mesh>
            {/* Tail fin */}
            <mesh ref={tailRef} position={[-2.8, 0, 0]} rotation={[0, 0, Math.PI / 3]}>
              <coneGeometry args={[1, 1.8, 6]} />
              <meshStandardMaterial color={species.color} transparent opacity={0.2 + (health / 100) * 0.8} />
            </mesh>
          </group>
        );

      case 'tropical':
      case 'coral':
      default:
        return (
          <group>
            {/* Tropical fish body - colorful and compressed with enhanced realism */}
            <mesh scale={[1.4, 1.6, 0.7]}>
              <sphereGeometry args={[1, 24, 18]} />
              <meshStandardMaterial
                color={species.color}
                transparent
                opacity={0.2 + (health / 100) * 0.8}
                roughness={0.3}
                metalness={0.1}
              />
            </mesh>

            {/* Eyes with pupils */}
            <mesh position={[1.2, 0.6, 0.4]} scale={[0.2, 0.2, 0.1]}>
              <sphereGeometry args={[1, 12, 8]} />
              <meshStandardMaterial color="#FFFFFF" />
            </mesh>
            <mesh position={[1.25, 0.62, 0.42]} scale={[0.12, 0.12, 0.06]}>
              <sphereGeometry args={[1, 8, 6]} />
              <meshStandardMaterial color="#000000" />
            </mesh>
            <mesh position={[1.2, 0.6, -0.4]} scale={[0.2, 0.2, 0.1]}>
              <sphereGeometry args={[1, 12, 8]} />
              <meshStandardMaterial color="#FFFFFF" />
            </mesh>
            <mesh position={[1.25, 0.62, -0.42]} scale={[0.12, 0.12, 0.06]}>
              <sphereGeometry args={[1, 8, 6]} />
              <meshStandardMaterial color="#000000" />
            </mesh>

            {/* Realistic stripes with varied opacity */}
            {[0, 0.4, 0.8, 1.2].map((offset, index) => (
              <mesh
                key={index}
                position={[offset - 0.6, 0, 0]}
                scale={[0.12, 1.8, 0.9]}
                rotation={[0, 0, Math.sin(index) * 0.1]}
              >
                <cylinderGeometry args={[0.8, 0.8, 0.1]} />
                <meshStandardMaterial
                  color={species.secondaryColor}
                  transparent
                  opacity={0.4 + (health / 100) * 0.6 - index * 0.05}
                />
              </mesh>
            ))}

            {/* Enhanced dorsal fin with more realistic shape */}
            <mesh position={[0, 1.4, 0]} scale={[1.8, 1.2, 0.15]} rotation={[0, 0, -0.1]}>
              <coneGeometry args={[0.8, 1.5, 10]} />
              <meshStandardMaterial
                color={species.secondaryColor}
                transparent
                opacity={0.3 + (health / 100) * 0.7}
                side={2} // Double-sided for transparency
              />
            </mesh>

            {/* Pectoral fins - side fins with animation */}
            <mesh position={[0.3, 0, 0.8]} scale={[0.6, 0.4, 0.12]} rotation={[0, Math.PI / 3, Math.PI / 6]}>
              <coneGeometry args={[0.7, 1.2, 8]} />
              <meshStandardMaterial color={species.color} transparent opacity={0.4 + (health / 100) * 0.6} />
            </mesh>
            <mesh position={[0.3, 0, -0.8]} scale={[0.6, 0.4, 0.12]} rotation={[0, -Math.PI / 3, -Math.PI / 6]}>
              <coneGeometry args={[0.7, 1.2, 8]} />
              <meshStandardMaterial color={species.color} transparent opacity={0.4 + (health / 100) * 0.6} />
            </mesh>

            {/* Anal fin - bottom rear fin */}
            <mesh position={[-0.3, -1.0, 0]} scale={[1.2, 0.8, 0.12]} rotation={[Math.PI, 0, 0.1]}>
              <coneGeometry args={[0.5, 1.0, 8]} />
              <meshStandardMaterial color={species.secondaryColor} transparent opacity={0.3 + (health / 100) * 0.7} />
            </mesh>

            {/* Enhanced tail fin with forked design */}
            <mesh ref={tailRef} position={[-1.6, 0.2, 0]} rotation={[0, 0, Math.PI / 8]} scale={[0.4, 1.2, 0.8]}>
              <coneGeometry args={[1.0, 1.8, 8]} />
              <meshStandardMaterial color={species.color} transparent opacity={0.4 + (health / 100) * 0.6} />
            </mesh>
            <mesh ref={tailRef} position={[-1.6, -0.2, 0]} rotation={[0, 0, -Math.PI / 8]} scale={[0.4, 1.2, 0.8]}>
              <coneGeometry args={[1.0, 1.8, 8]} />
              <meshStandardMaterial color={species.color} transparent opacity={0.4 + (health / 100) * 0.6} />
            </mesh>

            {/* Mouth with slight opening */}
            <mesh position={[1.5, 0.1, 0]} scale={[0.15, 0.08, 0.25]}>
              <sphereGeometry args={[1, 8, 6]} />
              <meshStandardMaterial color="#333333" />
            </mesh>
          </group>
        );
    }
  };

  return (
    <group
      ref={meshRef}
      position={position}
      onClick={needsRescue ? onRescue : undefined}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {renderMarineBody()}

      {/* Health indicator */}
      {needsRescue && (
        <Html position={[0, 2, 0]} center>
          <div className="px-2 py-1 rounded text-xs font-bold text-white bg-red-600 animate-pulse">
            🆘 Cứu tôi! {health.toFixed(0)}%
          </div>
        </Html>
      )}

      {hovered && !needsRescue && (
        <Html position={[0, 2, 0]} center>
          <div className="px-2 py-1 rounded text-xs font-bold text-white bg-blue-600">
            {species.name} - {health.toFixed(0)}% 💙
          </div>
        </Html>
      )}
    </group>
  );
}

// Pollution object component - ENHANCED with visible oil spills
function PollutionObject({
  position,
  type,
  onCleanup,
}: {
  position: [number, number, number];
  type: (typeof POLLUTION_TYPES)[0];
  onCleanup: () => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.z += 0.005;

      // Scale on hover
      meshRef.current.scale.setScalar(hovered ? 1.3 : 1);
    }
  });

  // Render different shapes for different pollution types
  const renderPollutionShape = () => {
    switch (type.id) {
      case 'oil_spill':
        return (
          <group>
            {/* Main oil spill - flat dark patch */}
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <circleGeometry args={[2, 16]} />
              <meshStandardMaterial color={type.color} transparent opacity={0.8} roughness={0.1} metalness={0.3} />
            </mesh>
            {/* Oil spill spreading rings */}
            {[1.2, 1.6, 2.2].map((radius, index) => (
              <mesh key={index} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01 * (index + 1), 0]}>
                <ringGeometry args={[radius - 0.2, radius, 12]} />
                <meshStandardMaterial
                  color={type.color}
                  transparent
                  opacity={0.4 - index * 0.1}
                  roughness={0.1}
                  metalness={0.2}
                />
              </mesh>
            ))}
            {/* Oil bubbles */}
            {Array.from({ length: 8 }, (_, i) => (
              <mesh
                key={i}
                position={[(Math.random() - 0.5) * 3, 0.1 + Math.random() * 0.3, (Math.random() - 0.5) * 3]}
              >
                <sphereGeometry args={[0.1 + Math.random() * 0.1, 8, 8]} />
                <meshStandardMaterial color={type.color} transparent opacity={0.7} metalness={0.4} />
              </mesh>
            ))}
          </group>
        );

      case 'plastic_bottle':
        return (
          <mesh>
            <cylinderGeometry args={[0.2, 0.25, 1]} />
            <meshStandardMaterial color={type.color} transparent opacity={0.9} />
          </mesh>
        );

      case 'plastic_bag':
        return (
          <mesh rotation={[Math.random(), Math.random(), Math.random()]}>
            <planeGeometry args={[0.8, 1]} />
            <meshStandardMaterial color={type.color} transparent opacity={0.7} side={THREE.DoubleSide} />
          </mesh>
        );

      case 'fishing_net':
        return (
          <group>
            <mesh>
              <torusGeometry args={[0.8, 0.1, 8, 16]} />
              <meshStandardMaterial color={type.color} />
            </mesh>
            {/* Net mesh pattern */}
            {Array.from({ length: 6 }, (_, i) => (
              <mesh key={i} rotation={[0, (i * Math.PI) / 3, 0]}>
                <planeGeometry args={[1.6, 0.05]} />
                <meshStandardMaterial color={type.color} transparent opacity={0.8} />
              </mesh>
            ))}
          </group>
        );

      default:
        return (
          <mesh>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial color={type.color} emissive={type.color} emissiveIntensity={0.2} />
          </mesh>
        );
    }
  };

  return (
    <group
      ref={meshRef}
      position={position}
      onClick={onCleanup}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {renderPollutionShape()}

      {hovered && (
        <Html position={[0, 1, 0]} center>
          <div className="px-2 py-1 rounded text-xs font-bold text-white bg-red-600">
            ♻️ Dọn {type.name} (+{type.points} điểm)
          </div>
        </Html>
      )}
    </group>
  );
}

// Ocean floor component
function OceanFloor() {
  return (
    <mesh position={[0, -8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial color="#4682B4" transparent opacity={0.6} side={THREE.DoubleSide} />
    </mesh>
  );
}

// Ocean waves component with physics affecting boats and buoys
function OceanWaves({
  boatRef,
  buoyRef,
}: {
  boatRef: React.RefObject<THREE.Group | null>;
  buoyRef: React.RefObject<THREE.Mesh | null>;
}) {
  const waveRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    // Wave equation for ocean surface
    const waveHeight = (x: number, z: number, t: number) => {
      return (
        Math.sin(x * 0.2 + t * 2) * 0.8 + Math.sin(z * 0.3 + t * 1.5) * 0.6 + Math.sin((x + z) * 0.15 + t * 1.8) * 0.4
      );
    };

    // Apply wave motion to boat
    if (boatRef.current) {
      const boatPos = boatRef.current.position;
      const newY = 2 + waveHeight(boatPos.x, boatPos.z, time);
      boatRef.current.position.y = newY;

      // Add realistic boat rotation based on waves
      const tiltX = Math.sin(time * 1.2 + boatPos.x * 0.1) * 0.08;
      const tiltZ = Math.sin(time * 0.8 + boatPos.z * 0.1) * 0.06;
      boatRef.current.rotation.x = tiltX;
      boatRef.current.rotation.z = tiltZ;
    }

    // Apply wave motion to buoy
    if (buoyRef.current) {
      const buoyPos = buoyRef.current.position;
      const newY = 1.5 + waveHeight(buoyPos.x, buoyPos.z, time) * 0.7; // Buoys bob less than boats
      buoyRef.current.position.y = newY;

      // Buoy tilts with waves but less than boat
      const tiltX = Math.sin(time * 1.5 + buoyPos.x * 0.15) * 0.05;
      const tiltZ = Math.sin(time * 1.1 + buoyPos.z * 0.12) * 0.04;
      buoyRef.current.rotation.x = tiltX;
      buoyRef.current.rotation.z = tiltZ;
    }

    // Animate the ocean surface with waves
    if (waveRef.current) {
      const geometry = waveRef.current.geometry as THREE.PlaneGeometry;
      const positions = geometry.attributes.position;

      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const z = positions.getZ(i);
        const y = waveHeight(x, z, time) * 0.3; // Subtle wave animation for ocean surface
        positions.setY(i, y);
      }

      positions.needsUpdate = true;
      geometry.computeVertexNormals();
    }
  });

  return (
    <mesh ref={waveRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[200, 200, 50, 50]} />
      <meshStandardMaterial color="#1E90FF" transparent opacity={0.7} roughness={0.1} metalness={0.1} />
    </mesh>
  );
}

//  Beautiful Ocean Environment Component
function OceanEnvironment() {
  const oceanRef = useRef<THREE.Mesh>(null);
  const waveRefs = useRef<THREE.Mesh[]>([]);
  const boatRef = useRef<THREE.Group>(null);
  const buoyRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    // Gentle wave animation
    if (oceanRef.current && oceanRef.current.material && 'uniforms' in oceanRef.current.material) {
      const material = oceanRef.current.material as THREE.ShaderMaterial;
      if (material.uniforms) {
        material.uniforms.time = { value: state.clock.elapsedTime };
      }
    }

    // Wave animations
    waveRefs.current.forEach((wave, index) => {
      if (wave) {
        wave.position.y = Math.sin(state.clock.elapsedTime * 2 + index * 0.5) * 0.2;
        wave.rotation.z = Math.sin(state.clock.elapsedTime * 1.5 + index * 0.8) * 0.1;
      }
    });
  });

  return (
    <group>
      {/* Ocean Floor */}
      <mesh position={[0, -8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100, 50, 50]} />
        <meshStandardMaterial color="#8B7355" transparent opacity={0.8} roughness={0.8} />
      </mesh>

      {/* Clear Blue Ocean Water with gentle waves */}
      <mesh ref={oceanRef} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[80, 80, 40, 40]} />
        <meshStandardMaterial
          color="#006994"
          transparent
          opacity={0.7}
          side={THREE.DoubleSide}
          roughness={0.1}
          metalness={0.1}
        />
      </mesh>

      {/* Surface waves */}
      {Array.from({ length: 8 }, (_, i) => (
        <mesh
          key={i}
          ref={(el) => (waveRefs.current[i] = el!)}
          position={[(Math.random() - 0.5) * 60, 2 + Math.random() * 0.5, (Math.random() - 0.5) * 60]}
          rotation={[-Math.PI / 2, 0, Math.random() * Math.PI]}
        >
          <ringGeometry args={[2 + i * 0.5, 3 + i * 0.5, 16]} />
          <meshStandardMaterial color="#B0E0E6" transparent opacity={0.3 - i * 0.03} side={THREE.DoubleSide} />
        </mesh>
      ))}

      {/* Orange life buoy floating horizontally - FIXED ORIENTATION */}
      <mesh ref={buoyRef} position={[15, 1.5, 10]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.2, 0.3, 8, 16]} />
        <meshStandardMaterial color="#FF6600" roughness={0.3} metalness={0.1} />
        {/* White stripes for realism */}
        <mesh rotation={[0, 0, 0]}>
          <torusGeometry args={[1.25, 0.15, 8, 16]} />
          <meshStandardMaterial color="#FFFFFF" transparent opacity={0.9} />
        </mesh>
      </mesh>

      {/* Realistic boat with detailed design */}
      <group ref={boatRef} position={[-20, 2, 15]}>
        {/* Hull - main body */}
        <mesh>
          <boxGeometry args={[6, 1.2, 3]} />
          <meshStandardMaterial color="#2F4F4F" roughness={0.4} metalness={0.6} />
        </mesh>

        {/* Bow (front) */}
        <mesh position={[3.2, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <coneGeometry args={[1.5, 1.2, 8]} />
          <meshStandardMaterial color="#2F4F4F" roughness={0.4} metalness={0.6} />
        </mesh>

        {/* Stern (back) */}
        <mesh position={[-3.2, 0, 0]}>
          <boxGeometry args={[1, 1.2, 3]} />
          <meshStandardMaterial color="#2F4F4F" roughness={0.4} metalness={0.6} />
        </mesh>

        {/* Deck */}
        <mesh position={[0, 0.8, 0]}>
          <boxGeometry args={[5.5, 0.2, 2.8]} />
          <meshStandardMaterial color="#D2691E" roughness={0.8} />
        </mesh>

        {/* Cabin */}
        <mesh position={[0, 2, 0]}>
          <boxGeometry args={[3, 2, 2.5]} />
          <meshStandardMaterial color="#F5F5DC" roughness={0.6} />
        </mesh>

        {/* Wheelhouse */}
        <mesh position={[1, 3.2, 0]}>
          <boxGeometry args={[1.5, 1, 2]} />
          <meshStandardMaterial color="#F0F0F0" roughness={0.3} />
        </mesh>

        {/* Windows */}
        {[
          { pos: [1.76, 3.2, 0.8], size: [0.02, 0.6, 0.4] },
          { pos: [1.76, 3.2, -0.8], size: [0.02, 0.6, 0.4] },
          { pos: [1.76, 3.2, 0], size: [0.02, 0.6, 0.8] },
        ].map((window, index) => (
          <mesh key={index} position={window.pos as [number, number, number]}>
            <boxGeometry args={window.size as [number, number, number]} />
            <meshStandardMaterial color="#87CEEB" transparent opacity={0.7} />
          </mesh>
        ))}

        {/* Boat mast - taller and more realistic */}
        <mesh position={[-1, 4.5, 0]}>
          <cylinderGeometry args={[0.08, 0.12, 6]} />
          <meshStandardMaterial color="#8B4513" roughness={0.8} />
        </mesh>

        {/* Main sail */}
        <mesh position={[-0.3, 6, 0]} rotation={[0, 0, Math.PI / 12]}>
          <planeGeometry args={[2.5, 4]} />
          <meshStandardMaterial color="#F5F5F5" side={THREE.DoubleSide} transparent opacity={0.9} />
        </mesh>

        {/* Jib sail */}
        <mesh position={[1.5, 5, 0]} rotation={[0, 0, -Math.PI / 8]}>
          <planeGeometry args={[1.5, 2.5]} />
          <meshStandardMaterial color="#FFFAF0" side={THREE.DoubleSide} transparent opacity={0.9} />
        </mesh>

        {/* Rigging lines */}
        {[
          { start: [-1, 7.5, 0], end: [2, 4, 0] },
          { start: [-1, 7.5, 0], end: [-2, 4, 0] },
          { start: [-1, 6, 0], end: [3, 2, 0] },
        ].map((line, index) => {
          const points = new Float32Array([...line.start, ...line.end]);
          return (
            <line key={index}>
              <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[points, 3]} />
              </bufferGeometry>
              <lineBasicMaterial color="#654321" />
            </line>
          );
        })}
      </group>

      {/* Underwater coral formations */}
      {Array.from({ length: 12 }, (_, i) => (
        <mesh
          key={`coral-${i}`}
          position={[(Math.random() - 0.5) * 50, -6 - Math.random() * 2, (Math.random() - 0.5) * 50]}
        >
          <coneGeometry args={[0.5 + Math.random() * 0.5, 2 + Math.random() * 2, 8]} />
          <meshStandardMaterial
            color={['#FF6347', '#FF4500', '#FFA500', '#32CD32'][Math.floor(Math.random() * 4)]}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}

      {/* Underwater seaweed */}
      {Array.from({ length: 15 }, (_, i) => (
        <group key={`seaweed-${i}`} position={[(Math.random() - 0.5) * 60, -7, (Math.random() - 0.5) * 60]}>
          {Array.from({ length: 3 + Math.random() * 3 }, (_, j) => (
            <mesh key={j} position={[Math.random() * 0.5, j * 0.8, Math.random() * 0.5]}>
              <cylinderGeometry args={[0.1, 0.1, 1]} />
              <meshStandardMaterial color="#228B22" transparent opacity={0.6} />
            </mesh>
          ))}
        </group>
      ))}

      {/* Bubbles rising from ocean floor */}
      {Array.from({ length: 30 }, (_, i) => (
        <mesh
          key={`bubble-${i}`}
          position={[(Math.random() - 0.5) * 40, -7 + Math.random() * 6, (Math.random() - 0.5) * 40]}
        >
          <sphereGeometry args={[0.1 + Math.random() * 0.1, 8, 8]} />
          <meshStandardMaterial color="white" transparent opacity={0.4} />
        </mesh>
      ))}

      {/* Ocean waves with physics for boat and buoy movement */}
      <OceanWaves boatRef={boatRef} buoyRef={buoyRef} />
    </group>
  );
}

// Game UI component with task completion tracking
// Game UI component with task completion tracking
function GameUI({
  score,
  rescued,
  cleaned,
  timer,
  gameState,
  tasksCompleted,
  totalTasks,
  showCompletion,
}: {
  score: number;
  rescued: number;
  cleaned: number;
  timer: number;
  gameState: string;
  tasksCompleted: { [key: string]: number };
  totalTasks: { [key: string]: number };
  showCompletion: boolean;
}) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getTaskProgress = (taskType: string) => {
    const completed = tasksCompleted[taskType] || 0;
    const total = totalTasks[taskType] || 0;
    return { completed, total, percentage: total > 0 ? (completed / total) * 100 : 0 };
  };

  return (
    <div className="absolute top-4 right-4 bg-white bg-opacity-95 rounded-lg p-4 min-w-64 z-50 shadow-xl">
      <h3 className="text-lg font-bold text-blue-800 mb-3">🌊 Ocean Conservation</h3>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
          <span>🏆 Điểm số:</span>
          <span className="font-bold text-blue-600">{score.toLocaleString()}</span>
        </div>

        <div className="flex justify-between items-center p-2 bg-green-50 rounded">
          <span>🐢 Đã cứu:</span>
          <span className="font-bold text-green-600">{rescued}</span>
        </div>

        <div className="flex justify-between items-center p-2 bg-orange-50 rounded">
          <span>♻️ Đã dọn:</span>
          <span className="font-bold text-orange-600">{cleaned}</span>
        </div>

        <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
          <span>⏱️ Thời gian:</span>
          <span className="font-bold text-gray-600">{formatTime(timer)}</span>
        </div>

        {/* Task completion progress */}
        <div className="mt-4 space-y-2">
          <h4 className="font-semibold text-gray-700">📋 Nhiệm vụ:</h4>

          {Object.entries(totalTasks).map(([taskType, total]) => {
            const { completed, percentage } = getTaskProgress(taskType);
            const taskNames = {
              plastic_cleanup: '🗑️ Dọn rác nhựa',
              animal_rescue: '🐠 Cứu động vật',
              oil_cleanup: '🛢️ Dọn tràn dầu',
              general_cleanup: '🧹 Làm sạch chung',
            };

            return (
              <div key={taskType} className="bg-gray-50 p-2 rounded">
                <div className="flex justify-between text-xs">
                  <span>{taskNames[taskType as keyof typeof taskNames] || taskType}</span>
                  <span>
                    {completed}/{total}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      percentage === 100 ? 'bg-green-500' : 'bg-blue-500'
                    }`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                {percentage === 100 && <div className="text-xs text-green-600 mt-1">✅ Hoàn thành!</div>}
              </div>
            );
          })}
        </div>
      </div>

      {showCompletion && (
        <div className="absolute inset-0 bg-green-500 bg-opacity-90 rounded-lg flex items-center justify-center">
          <div className="text-center text-white p-4">
            <div className="text-2xl mb-2">🎉</div>
            <div className="font-bold text-lg">Cảm ơn bạn!</div>
            <div className="text-sm">Đại dương đã sạch hơn!</div>
          </div>
        </div>
      )}

      {gameState === 'completed' && (
        <div className="mt-4 p-3 bg-green-100 rounded-lg text-center">
          <div className="text-green-800 font-bold">🎉 Hoàn thành!</div>
          <div className="text-sm text-green-600 mt-1">Đại dương đã sạch hơn nhờ bạn!</div>
        </div>
      )}
    </div>
  );
}

// Instructions component
function Instructions({ onStart }: { onStart: () => void }) {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-2xl mx-4 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">🌊 Ocean Conservation 3D</h2>

        <div className="text-left space-y-4 mb-6">
          <p className="text-gray-600">Bảo vệ đại dương bằng cách dọn rác thải nhựa và cứu hộ sinh vật biển!</p>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-2">🎮 Cách chơi:</h3>
            <ul className="text-blue-700 space-y-1 text-sm">
              <li>
                • <strong>Click vào rác thải</strong> để dọn sạch đại dương
              </li>
              <li>
                • <strong>Click vào động vật có biểu tượng SOS</strong> để cứu hộ
              </li>
              <li>
                • <strong>Sử dụng chuột</strong> để xoay và zoom camera
              </li>
              <li>
                • <strong>Làm sạch nhanh</strong> để bảo vệ sinh vật biển
              </li>
              <li>
                • <strong>Ghi điểm</strong> bằng cách dọn rác và cứu động vật
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-green-800 mb-2">🎯 Mục tiêu:</h3>
            <p className="text-green-700 text-sm">
              Dọn sạch ô nhiễm nhựa và cứu hộ tất cả sinh vật biển đang gặp nguy hiểm!
            </p>
          </div>
        </div>

        <button
          onClick={onStart}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-green-600 transition-all transform hover:scale-105"
        >
          🏊‍♀️ Bắt Đầu Bảo Vệ Đại Dương
        </button>
      </div>
    </div>
  );
}

// Main component with enhanced task tracking
// Main component props
interface OceanConservation3DProps {
  onComplete?: (success: boolean, rawScore?: number) => void;
  timeLeft?: number;
  onRestart?: () => void;
}

export default function OceanConservation3D({ 
  onComplete, 
  timeLeft, 
  onRestart 
}: OceanConservation3DProps = {}) {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [rescued, setRescued] = useState(0);
  const [cleaned, setCleaned] = useState(0);
  const [timer, setTimer] = useState(300); // 5 minutes
  const [gameState, setGameState] = useState('playing');
  const [showCompletion, setShowCompletion] = useState(false);

  // Task completion tracking with proper typing
  const [tasksCompleted, setTasksCompleted] = useState<{ [key: string]: number }>({
    plastic_cleanup: 0,
    animal_rescue: 0,
    oil_cleanup: 0,
    general_cleanup: 0,
  });

  const totalTasks = useMemo(
    () => ({
      plastic_cleanup: 8,
      animal_rescue: 5,
      oil_cleanup: 3,
      general_cleanup: 4,
    }),
    [],
  );

  // Generate marine life
  const marineLife = useMemo(() => {
    const animals = [];
    for (let i = 0; i < 15; i++) {
      const species = MARINE_LIFE[Math.floor(Math.random() * MARINE_LIFE.length)];
      const health = Math.random() < 0.3 ? 20 + Math.random() * 30 : 80 + Math.random() * 20; // 30% chance of needing rescue
      animals.push({
        id: `animal-${i}`,
        species,
        position: [(Math.random() - 0.5) * 30, -2 - Math.random() * 4, (Math.random() - 0.5) * 30] as [
          number,
          number,
          number,
        ],
        health,
        rescued: false,
      });
    }
    return animals;
  }, []);

  // Generate pollution
  const [pollution, setPollution] = useState(() => {
    const pollutionItems = [];
    for (let i = 0; i < 20; i++) {
      const type = POLLUTION_TYPES[Math.floor(Math.random() * POLLUTION_TYPES.length)];
      pollutionItems.push({
        id: `pollution-${i}`,
        type,
        position: [(Math.random() - 0.5) * 35, -1 - Math.random() * 6, (Math.random() - 0.5) * 35] as [
          number,
          number,
          number,
        ],
        cleaned: false,
      });
    }
    return pollutionItems;
  });

  const [animals, setAnimals] = useState(marineLife);

  const handleCleanup = useCallback(
    (pollutionId: string) => {
      setPollution((prev) => {
        const item = prev.find((p) => p.id === pollutionId);
        if (item && !item.cleaned) {
          setScore((s) => s + item.type.points);
          setCleaned((c) => c + 1);

          // Update task completion
          setTasksCompleted((tasks) => {
            const newTasks = { ...tasks };
            if (item.type.id.includes('plastic')) {
              newTasks.plastic_cleanup = (newTasks.plastic_cleanup || 0) + 1;
            } else if (item.type.id.includes('oil')) {
              newTasks.oil_cleanup = (newTasks.oil_cleanup || 0) + 1;
            } else {
              newTasks.general_cleanup = (newTasks.general_cleanup || 0) + 1;
            }

            // Check if task is completed and show thanks
            Object.entries(newTasks).forEach(([taskType, completed]) => {
              const taskKey = taskType as keyof typeof totalTasks;
              if (completed === totalTasks[taskKey] && completed > (tasks[taskKey] || 0)) {
                setShowCompletion(true);
                setTimeout(() => setShowCompletion(false), 3000);
              }
            });

            return newTasks;
          });

          return prev.map((p) => (p.id === pollutionId ? { ...p, cleaned: true } : p));
        }
        return prev;
      });
    },
    [totalTasks],
  );

  const handleRescue = useCallback(
    (animalId: string) => {
      setAnimals((prev) => {
        const animal = prev.find((a) => a.id === animalId);
        if (animal && !animal.rescued && animal.health < 50) {
          setScore((s) => s + 50);
          setRescued((r) => r + 1);

          // Update animal rescue task
          setTasksCompleted((tasks) => {
            const newTasks = { ...tasks };
            newTasks.animal_rescue = (newTasks.animal_rescue || 0) + 1;

            // Check if task is completed
            if (
              newTasks.animal_rescue === totalTasks.animal_rescue &&
              newTasks.animal_rescue > (tasks.animal_rescue || 0)
            ) {
              setShowCompletion(true);
              setTimeout(() => setShowCompletion(false), 3000);
            }

            return newTasks;
          });

          return prev.map((a) => (a.id === animalId ? { ...a, rescued: true, health: 100 } : a));
        }
        return prev;
      });
    },
    [totalTasks],
  );

  // Timer and game state management
  React.useEffect(() => {
    if (!gameStarted || gameState !== 'playing') return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          setGameState('completed');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [gameStarted, gameState]);

  // Check win condition
  React.useEffect(() => {
    const allPollutionCleaned = pollution.every((p) => p.cleaned);
    const allAnimalsRescued = animals.filter((a) => a.health < 50).every((a) => a.rescued);

    if (allPollutionCleaned && allAnimalsRescued && gameState === 'playing') {
      setGameState('completed');
      setScore((s) => s + timer * 10); // Time bonus
    }
  }, [pollution, animals, timer, gameState]);

  if (!gameStarted) {
    return <Instructions onStart={() => setGameStarted(true)} />;
  }

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-blue-300 to-blue-600">
      <GameUI
        score={score}
        rescued={rescued}
        cleaned={cleaned}
        timer={timer}
        gameState={gameState}
        tasksCompleted={tasksCompleted}
        totalTasks={totalTasks}
        showCompletion={showCompletion}
      />

      <Canvas camera={{ position: [0, 5, 15], fov: 60 }} gl={{ antialias: false, alpha: false }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <pointLight position={[0, 0, 0]} intensity={0.6} color="#87CEEB" />

        <OceanFloor />
        <OceanEnvironment />

        {/* Render marine life */}
        {animals.map((animal) => (
          <MarineAnimal
            key={animal.id}
            position={animal.position}
            species={animal.species}
            health={animal.health}
            onRescue={() => handleRescue(animal.id)}
          />
        ))}

        {/* Render pollution */}
        {pollution
          .filter((p) => !p.cleaned)
          .map((pollutionItem) => (
            <PollutionObject
              key={pollutionItem.id}
              position={pollutionItem.position}
              type={pollutionItem.type}
              onCleanup={() => handleCleanup(pollutionItem.id)}
            />
          ))}

        <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2.2} minDistance={10} maxDistance={40} />
      </Canvas>
    </div>
  );
}
