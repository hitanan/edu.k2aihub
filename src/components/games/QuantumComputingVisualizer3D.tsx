'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text, Html, Sphere, Box } from '@react-three/drei';
import { Vector3, Color, BufferGeometry, Float32BufferAttribute } from 'three';
import * as THREE from 'three';
import { useAdvancedGameStore } from '@/stores/advancedGameStore';

// Qubit component với 3D visualization
function Qubit3D({ 
  position, 
  state, 
  isEntangled, 
  onClick,
  rotation = [0, 0, 0]
}: {
  position: [number, number, number];
  state: 'superposition' | '0' | '1';
  isEntangled: boolean;
  onClick: () => void;
  rotation?: [number, number, number];
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Animation cho qubit trong trạng thái superposition
  useFrame((_, delta) => {
    if (meshRef.current && state === 'superposition') {
      meshRef.current.rotation.y += delta * 2;
      meshRef.current.rotation.x += delta * 1;
    }
  });

  // Màu sắc dựa trên trạng thái
  const color = useMemo(() => {
    if (state === '0') return '#ff4444';
    if (state === '1') return '#4444ff';
    return '#ff44ff'; // superposition = tím
  }, [state]);

  return (
    <group position={position}>
      {/* Qubit sphere chính */}
      <Sphere
        ref={meshRef}
        args={[0.3, 32, 32]}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={state === 'superposition' ? 0.8 : 1}
        />
      </Sphere>

      {/* Quantum spin visualization */}
      {state === 'superposition' && (
        <>
          <Box args={[0.02, 1, 0.02]} position={[0, 0, 0]} rotation={rotation}>
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
          </Box>
          <Box args={[1, 0.02, 0.02]} position={[0, 0, 0]} rotation={rotation}>
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
          </Box>
        </>
      )}

      {/* Entanglement indicator */}
      {isEntangled && (
        <Sphere args={[0.5, 16, 16]} position={[0, 0, 0]}>
          <meshBasicMaterial
            color="#00ffff"
            transparent
            opacity={0.1}
            wireframe
          />
        </Sphere>
      )}

      {/* State label */}
      <Html position={[0, 0.5, 0]} center>
        <div className="text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
          {state === 'superposition' ? '|ψ⟩' : `|${state}⟩`}
        </div>
      </Html>
    </group>
  );
}

// Quantum Gate component
function QuantumGate({ 
  position, 
  type, 
  onClick 
}: { 
  position: [number, number, number]; 
  type: string; 
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  const color = useMemo(() => {
    switch (type) {
      case 'Hadamard': return '#ff8800';
      case 'Pauli-X': return '#ff0000';
      case 'Pauli-Y': return '#00ff00';
      case 'Pauli-Z': return '#0000ff';
      case 'CNOT': return '#ff00ff';
      default: return '#888888';
    }
  }, [type]);

  return (
    <group position={position}>
      <Box
        args={[0.8, 0.8, 0.2]}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Box>
      
      <Html position={[0, 0, 0.15]} center>
        <div className="text-white text-xs font-bold">
          {type === 'Hadamard' ? 'H' : 
           type === 'Pauli-X' ? 'X' :
           type === 'Pauli-Y' ? 'Y' :
           type === 'Pauli-Z' ? 'Z' :
           type === 'CNOT' ? '⊕' : type}
        </div>
      </Html>
    </group>
  );
}

// Quantum circuit visualization với đường connection
function QuantumCircuit({ qubits }: { qubits: { id: string; position: [number, number, number]; state: string; entangled: boolean }[] }) {
  const positions: number[] = useMemo(() => {
    const posArray: number[] = [];
    
    // Tạo circuit lines nối các qubits
    qubits.forEach((qubit, index) => {
      const y = index * 2 - (qubits.length - 1);
      posArray.push(-5, y, 0);
      posArray.push(5, y, 0);
    });
    
    return posArray;
  }, [qubits]);

  return (
    <group>
      <mesh>
        <boxGeometry args={[10, 0.1, 0.1]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}

// Control Panel cho quantum experiments
function QuantumControlPanel() {
  const { quantum, addQubit, updateQubitState, updateQuantumState } = useAdvancedGameStore();
  const [selectedGate, setSelectedGate] = useState<string>('Hadamard');

  const gates = ['Hadamard', 'Pauli-X', 'Pauli-Y', 'Pauli-Z', 'CNOT'];
  const experiments = [
    {
      id: 'superposition',
      name: 'Quantum Superposition',
      description: 'Tạo qubit ở trạng thái superposition bằng Hadamard gate'
    },
    {
      id: 'entanglement',
      name: 'Quantum Entanglement',
      description: 'Tạo cặp qubit entangled bằng CNOT gate'
    },
    {
      id: 'teleportation',
      name: 'Quantum Teleportation',
      description: 'Teleport trạng thái qubit qua entanglement'
    }
  ];

  const addNewQubit = () => {
    const position: [number, number, number] = [
      (quantum.qubits.length % 3) * 2 - 2,
      Math.floor(quantum.qubits.length / 3) * 2,
      0
    ];
    addQubit(position);
  };

  const runExperiment = (experimentId: string) => {
    switch (experimentId) {
      case 'superposition':
        quantum.qubits.forEach(qubit => {
          updateQubitState(qubit.id, 'superposition');
        });
        break;
      case 'entanglement':
        if (quantum.qubits.length >= 2) {
          updateQuantumState({
            qubits: quantum.qubits.map((qubit, index) => ({
              ...qubit,
              entangled: index < 2,
              state: 'superposition'
            }))
          });
        }
        break;
    }
  };

  return (
    <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white p-4 rounded-lg max-w-sm">
      <h3 className="text-lg font-bold mb-3 text-purple-300">🔮 Quantum Computing Lab</h3>
      
      {/* Qubit Controls */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Qubit Management</h4>
        <button
          onClick={addNewQubit}
          className="bg-purple-600 hover:bg-purple-500 px-3 py-1 rounded mr-2"
        >
          + Add Qubit
        </button>
        <span className="text-sm">Qubits: {quantum.qubits.length}</span>
      </div>

      {/* Gate Selection */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Quantum Gates</h4>
        <div className="grid grid-cols-2 gap-2">
          {gates.map((gate) => (
            <button
              key={gate}
              onClick={() => setSelectedGate(gate)}
              className={`px-2 py-1 rounded text-xs ${
                selectedGate === gate 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            >
              {gate}
            </button>
          ))}
        </div>
      </div>

      {/* Experiments */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Quantum Experiments</h4>
        {experiments.map((exp) => (
          <div key={exp.id} className="mb-2">
            <button
              onClick={() => runExperiment(exp.id)}
              className="bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded w-full text-left text-sm"
            >
              {exp.name}
            </button>
            <p className="text-xs text-gray-300 mt-1">{exp.description}</p>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="text-sm border-t border-gray-600 pt-2">
        <div>Score: {quantum.score}</div>
        <div>Level: {quantum.currentLevel}</div>
        <div>Achievements: {quantum.achievements.length}</div>
      </div>
    </div>
  );
}

// Main Quantum Computing Visualizer component
export default function QuantumComputingVisualizer3D() {
  const { quantum, updateQubitState } = useAdvancedGameStore();
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key.toLowerCase()) {
        case 'f':
          setIsFullscreen(!isFullscreen);
          break;
        case 'r':
          // Reset quantum state
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isFullscreen]);

  const handleQubitClick = (qubitId: string) => {
    const qubit = quantum.qubits.find(q => q.id === qubitId);
    if (qubit) {
      const nextState = qubit.state === '0' ? '1' : 
                       qubit.state === '1' ? 'superposition' : '0';
      updateQubitState(qubitId, nextState);
    }
  };

  return (
    <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50' : 'h-screen'} bg-gradient-to-br from-purple-900 via-blue-900 to-black`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8844ff" />

        {/* Controls */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          maxDistance={15}
          minDistance={3}
        />

        {/* Background quantum field effect */}
        <Sphere args={[50, 32, 32]} position={[0, 0, 0]}>
          <meshBasicMaterial
            color="#001122"
            transparent
            opacity={0.1}
            side={2}
          />
        </Sphere>

        {/* Render Qubits */}
        {quantum.qubits.map((qubit) => (
          <Qubit3D
            key={qubit.id}
            position={qubit.position}
            state={qubit.state}
            isEntangled={qubit.entangled}
            rotation={[qubit.rotationX, qubit.rotationY, qubit.rotationZ]}
            onClick={() => handleQubitClick(qubit.id)}
          />
        ))}

        {/* Quantum Circuit Visualization */}
        {quantum.qubits.length > 0 && (
          <QuantumCircuit qubits={quantum.qubits} />
        )}

        {/* Grid helper */}
        <gridHelper args={[10, 10, '#444444', '#222222']} />
      </Canvas>

      {/* Control Panel */}
      <QuantumControlPanel />

      {/* Fullscreen toggle */}
      <button
        onClick={() => setIsFullscreen(!isFullscreen)}
        className="absolute top-4 right-4 bg-purple-600 hover:bg-purple-500 text-white px-3 py-2 rounded"
      >
        {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'} [F]
      </button>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white p-3 rounded">
        <h4 className="font-bold mb-2">🎮 Controls</h4>
        <div className="text-sm space-y-1">
          <div>• Click qubit: Change state (|0⟩ → |1⟩ → |ψ⟩)</div>
          <div>• Mouse: Rotate, zoom, pan camera</div>
          <div>• [F]: Toggle fullscreen</div>
          <div>• Purple qubits = Superposition |ψ⟩</div>
          <div>• Red = |0⟩, Blue = |1⟩</div>
        </div>
      </div>

      {/* Quantum Information */}
      <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white p-3 rounded max-w-xs">
        <h4 className="font-bold mb-2 text-cyan-300">ℹ️ Quantum Info</h4>
        <div className="text-sm space-y-1">
          <div><strong>Superposition:</strong> Qubit can be in |0⟩ and |1⟩ simultaneously</div>
          <div><strong>Entanglement:</strong> Qubits connected across space</div>
          <div><strong>Gates:</strong> Operations that manipulate quantum states</div>
          <div className="text-purple-300 font-semibold mt-2">
                      <p className="text-green-400 font-mono bg-black bg-opacity-50 p-2 rounded">
            &ldquo;Quantum computing is not just faster computing, it&rsquo;s a fundamentally different way of processing information&rdquo;
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}
