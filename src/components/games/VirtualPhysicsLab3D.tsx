'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Sphere, Box, Cylinder, Plane } from '@react-three/drei';
import { useAdvancedGameStore } from '@/stores/advancedGameStore';

/* eslint-disable @typescript-eslint/no-explicit-any */

// Physics Equipment 3D Components
function Pendulum3D({ 
  position, 
  length = 2, 
  isRunning = false,
  angle = 0 
}: { 
  position: [number, number, number]; 
  length?: number; 
  isRunning?: boolean;
  angle?: number;
}) {
  const pendulumRef = useRef<any>(null);
  const ballRef = useRef<any>(null);
  const [currentAngle, setCurrentAngle] = useState(angle);
  const [velocity, setVelocity] = useState(0);

  useFrame((_, delta) => {
    if (isRunning && ballRef.current) {
      // Simple pendulum physics simulation
      const gravity = 9.81;
      const angularAcceleration = -(gravity / length) * Math.sin(currentAngle);
      const newVelocity = velocity + angularAcceleration * delta;
      const newAngle = currentAngle + newVelocity * delta;
      
      setVelocity(newVelocity * 0.999); // Add damping
      setCurrentAngle(newAngle);

      // Update visual position
      const x = Math.sin(newAngle) * length;
      const y = -Math.cos(newAngle) * length;
      ballRef.current.position.set(x, y, 0);
    }
  });

  return (
    <group position={position} ref={pendulumRef}>
      {/* Pendulum support */}
      <Box args={[0.1, 0.1, 0.1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#666666" />
      </Box>
      
      {/* Pendulum string */}
      <Cylinder 
        args={[0.01, 0.01, length, 8]} 
        position={[Math.sin(currentAngle) * length / 2, -Math.cos(currentAngle) * length / 2, 0]}
        rotation={[0, 0, currentAngle]}
      >
        <meshStandardMaterial color="#444444" />
      </Cylinder>

      {/* Pendulum bob */}
      <Sphere 
        ref={ballRef}
        args={[0.1, 16, 16]} 
        position={[Math.sin(currentAngle) * length, -Math.cos(currentAngle) * length, 0]}
      >
        <meshStandardMaterial 
          color="#ff4444" 
          metalness={0.7}
          roughness={0.3}
        />
      </Sphere>

      {/* Arc path indicator */}
      {isRunning && (
        <mesh>
          <ringGeometry args={[length - 0.05, length + 0.05, 32, 1, -Math.PI/3, 2*Math.PI/3]} />
          <meshBasicMaterial color="#00ffff" transparent opacity={0.3} />
        </mesh>
      )}

      <Html position={[0, 1, 0]} center>
        <div className="text-white text-sm bg-blue-600 bg-opacity-80 px-2 py-1 rounded">
          Pendulum: {(currentAngle * 180/Math.PI).toFixed(1)}°
        </div>
      </Html>
    </group>
  );
}

function SpringMassSystem3D({ 
  position, 
  isRunning = false,
  mass = 1,
  springConstant = 10
}: { 
  position: [number, number, number]; 
  isRunning?: boolean;
  mass?: number;
  springConstant?: number;
}) {
  const springRef = useRef<any>(null);
  const massRef = useRef<any>(null);
  const [displacement, setDisplacement] = useState(0);
  const [velocity, setVelocity] = useState(0);

  useFrame((_, delta) => {
    if (isRunning && massRef.current) {
      // Spring-mass system physics: F = -kx, a = F/m
      const force = -springConstant * displacement;
      const acceleration = force / mass;
      const newVelocity = velocity + acceleration * delta;
      const newDisplacement = displacement + newVelocity * delta;
      
      setVelocity(newVelocity * 0.98); // Add damping
      setDisplacement(newDisplacement);

      // Update visual position
      massRef.current.position.y = newDisplacement;
      
      // Update spring length
      if (springRef.current) {
        springRef.current.scale.y = 1 + newDisplacement / 2;
      }
    }
  });

  return (
    <group position={position}>
      {/* Spring support */}
      <Box args={[0.2, 0.1, 0.2]} position={[0, 2, 0]}>
        <meshStandardMaterial color="#666666" />
      </Box>
      
      {/* Spring coils */}
      <group ref={springRef}>
        {Array.from({ length: 8 }, (_, i) => (
          <Cylinder 
            key={i}
            args={[0.15, 0.15, 0.1, 8]}
            position={[0, 2 - (i + 1) * 0.25, 0]}
          >
            <meshStandardMaterial 
              color="#4444ff" 
              wireframe={i % 2 === 0}
            />
          </Cylinder>
        ))}
      </group>

      {/* Mass */}
      <Box 
        ref={massRef}
        args={[0.3, 0.3, 0.3]} 
        position={[0, 0, 0]}
      >
        <meshStandardMaterial 
          color="#ff8844" 
          metalness={0.6}
          roughness={0.4}
        />
      </Box>

      <Html position={[0, -1, 0]} center>
        <div className="text-white text-sm bg-green-600 bg-opacity-80 px-2 py-1 rounded">
          Spring-Mass: {displacement.toFixed(2)}m
          <br />
          k={springConstant} N/m, m={mass} kg
        </div>
      </Html>
    </group>
  );
}

function OpticsSetup3D({ 
  position, 
  isRunning = false 
}: { 
  position: [number, number, number]; 
  isRunning?: boolean; 
}) {
  const laserRef = useRef<any>(null);
  const [beamVisible, setBeamVisible] = useState(false);

  useFrame(() => {
    if (isRunning) {
      setBeamVisible(true);
      if (laserRef.current) {
        laserRef.current.rotation.y += 0.01;
      }
    } else {
      setBeamVisible(false);
    }
  });

  return (
    <group position={position}>
      {/* Laser source */}
      <Cylinder 
        ref={laserRef}
        args={[0.05, 0.05, 0.3, 8]} 
        position={[-2, 0, 0]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <meshStandardMaterial color="#ff0000" />
      </Cylinder>

      {/* Laser beam */}
      {beamVisible && (
        <Cylinder 
          args={[0.01, 0.01, 3, 8]} 
          position={[0, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <meshStandardMaterial 
            color="#ff0000" 
            emissive="#ff0000" 
            emissiveIntensity={0.8}
            transparent
            opacity={0.7}
          />
        </Cylinder>
      )}

      {/* Prism */}
      <Box args={[0.3, 0.3, 0.3]} position={[1, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
        <meshStandardMaterial 
          color="#88ffff" 
          transparent 
          opacity={0.7}
          metalness={0.1}
          roughness={0.1}
        />
      </Box>

      {/* Screen */}
      <Plane args={[1, 1]} position={[3, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <meshStandardMaterial color="#ffffff" />
      </Plane>

      <Html position={[0, 1, 0]} center>
        <div className="text-white text-sm bg-red-600 bg-opacity-80 px-2 py-1 rounded">
          Optics: Light Refraction
        </div>
      </Html>
    </group>
  );
}

// Physics Lab Control Panel
function PhysicsLabControlPanel() {
  const { physics, updatePhysicsState, startExperiment, recordMeasurement } = useAdvancedGameStore();
  const [selectedExperiment, setSelectedExperiment] = useState<string>('');
  const [measurementValue, setMeasurementValue] = useState<number>(0);

  const experimentTypes = [
    { id: 'pendulum', name: 'Simple Pendulum', description: 'Measure period vs length' },
    { id: 'spring-mass', name: 'Spring-Mass System', description: 'Hooke\'s law and oscillation' },
    { id: 'optics', name: 'Light Refraction', description: 'Snell\'s law with prism' },
    { id: 'free-fall', name: 'Free Fall Motion', description: 'Gravity acceleration measurement' }
  ];

  const safetyItems = [
    { id: 'goggles', name: 'Safety Goggles' },
    { id: 'gloves', name: 'Lab Gloves' },
    { id: 'labCoat', name: 'Lab Coat' }
  ];

  const startNewExperiment = (experimentId: string) => {
    const newExperiment = {
      id: experimentId,
      type: experimentId as 'mechanics' | 'optics' | 'electromagnetic' | 'thermodynamics',
      equipment: [],
      measurements: [],
      isRunning: true,
      results: []
    };

    updatePhysicsState({
      experiments: [...physics.experiments, newExperiment]
    });
    
    startExperiment(experimentId);
    setSelectedExperiment(experimentId);
  };

  const takeMeasurement = () => {
    if (selectedExperiment && measurementValue > 0) {
      const measurement = {
        time: Date.now(),
        value: measurementValue,
        unit: selectedExperiment === 'pendulum' ? 's' : selectedExperiment === 'spring-mass' ? 'm' : 'deg',
        property: selectedExperiment === 'pendulum' ? 'period' : selectedExperiment === 'spring-mass' ? 'displacement' : 'angle'
      };

      recordMeasurement(selectedExperiment, measurement);
      setMeasurementValue(0);
    }
  };

  const toggleSafety = (item: string) => {
    updatePhysicsState({
      safety: {
        ...physics.safety,
        protective: {
          ...physics.safety.protective,
          [item]: !physics.safety.protective[item as keyof typeof physics.safety.protective]
        }
      }
    });
  };

  return (
    <div className="absolute top-4 left-4 bg-black bg-opacity-80 text-white p-4 rounded-lg max-w-sm">
      <h3 className="text-lg font-bold mb-3 text-blue-300">⚗️ Physics Laboratory</h3>
      
      {/* Safety Equipment */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Safety Equipment</h4>
        <div className="grid grid-cols-2 gap-2">
          {safetyItems.map((item) => (
            <button
              key={item.id}
              onClick={() => toggleSafety(item.id)}
              className={`px-2 py-1 rounded text-xs ${
                physics.safety.protective[item.id as keyof typeof physics.safety.protective]
                  ? 'bg-green-600 text-white' 
                  : 'bg-red-600 hover:bg-red-500'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="text-sm mt-2">
          Safety Score: {physics.safety.safetyScore}/100
        </div>
      </div>

      {/* Experiment Selection */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Select Experiment</h4>
        {experimentTypes.map((exp) => (
          <div key={exp.id} className="mb-2">
            <button
              onClick={() => startNewExperiment(exp.id)}
              className="bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded w-full text-left text-sm"
            >
              {exp.name}
            </button>
            <p className="text-xs text-gray-300 mt-1">{exp.description}</p>
          </div>
        ))}
      </div>

      {/* Measurements */}
      {selectedExperiment && (
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Take Measurement</h4>
          <input
            type="number"
            value={measurementValue}
            onChange={(e) => setMeasurementValue(parseFloat(e.target.value) || 0)}
            className="bg-gray-700 text-white px-2 py-1 rounded w-full mb-2"
            placeholder="Enter value..."
            step="0.01"
          />
          <button
            onClick={takeMeasurement}
            className="bg-green-600 hover:bg-green-500 px-3 py-1 rounded w-full"
          >
            📊 Record Measurement
          </button>
        </div>
      )}

      {/* Lab Stats */}
      <div className="text-sm border-t border-gray-600 pt-2">
        <div>Experiments: {physics.experiments.length}</div>
        <div>Skill Level: {physics.progress.skillLevel}</div>
        <div>Achievements: {physics.progress.achievements.length}</div>
        <div>Equipment: {physics.labEquipment.length}</div>
        {physics.currentExperiment && (
          <div className="text-cyan-300 font-semibold">
            Running: {physics.currentExperiment}
          </div>
        )}
      </div>
    </div>
  );
}

// Main Virtual Physics Lab component
export default function VirtualPhysicsLab3D() {
  const { physics } = useAdvancedGameStore();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeEquipment, setActiveEquipment] = useState<string>('pendulum');

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key.toLowerCase()) {
        case 'f':
          setIsFullscreen(!isFullscreen);
          break;
        case '1':
          setActiveEquipment('pendulum');
          break;
        case '2':
          setActiveEquipment('spring-mass');
          break;
        case '3':
          setActiveEquipment('optics');
          break;
        case 'space':
          e.preventDefault();
          // Start/stop experiment
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isFullscreen]);

  const isExperimentRunning = useMemo(() => {
    return physics.experiments.some(exp => exp.isRunning);
  }, [physics.experiments]);

  return (
    <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50' : 'h-screen'} bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900`}>
      <Canvas
        camera={{ position: [0, 3, 8], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-5, 5, 5]} intensity={0.8} color="#ffffff" />

        {/* Controls */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          maxDistance={15}
          minDistance={3}
          maxPolarAngle={Math.PI / 2.1}
        />

        {/* Lab bench */}
        <Box args={[12, 0.2, 6]} position={[0, -1, 0]}>
          <meshStandardMaterial color="#8B4513" />
        </Box>

        {/* Physics Equipment */}
        {activeEquipment === 'pendulum' && (
          <Pendulum3D 
            position={[-3, 1, 0]} 
            isRunning={isExperimentRunning}
            angle={Math.PI / 6}
          />
        )}

        {activeEquipment === 'spring-mass' && (
          <SpringMassSystem3D 
            position={[0, 1, 0]} 
            isRunning={isExperimentRunning}
            mass={1}
            springConstant={10}
          />
        )}

        {activeEquipment === 'optics' && (
          <OpticsSetup3D 
            position={[3, 0, 0]} 
            isRunning={isExperimentRunning}
          />
        )}

        {/* Lab walls */}
        <Plane args={[15, 8]} position={[0, 2, -3]} rotation={[0, 0, 0]}>
          <meshStandardMaterial color="#f0f0f0" />
        </Plane>

        <Plane args={[6, 8]} position={[-6, 2, 0]} rotation={[0, Math.PI / 2, 0]}>
          <meshStandardMaterial color="#f0f0f0" />
        </Plane>

        {/* Floor */}
        <Plane args={[20, 20]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.1, 0]}>
          <meshStandardMaterial color="#666666" />
        </Plane>

        {/* Grid */}
        <gridHelper args={[20, 20, '#444444', '#222222']} position={[0, -1.1, 0]} />
      </Canvas>

      {/* Control Panel */}
      <PhysicsLabControlPanel />

      {/* Fullscreen toggle */}
      <button
        onClick={() => setIsFullscreen(!isFullscreen)}
        className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded"
      >
        {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'} [F]
      </button>

      {/* Equipment Selection */}
      <div className="absolute top-4 right-20 bg-black bg-opacity-80 text-white p-3 rounded">
        <h4 className="font-bold mb-2">Equipment</h4>
        <div className="space-y-1">
          <button
            onClick={() => setActiveEquipment('pendulum')}
            className={`px-2 py-1 rounded text-xs w-full ${
              activeEquipment === 'pendulum' ? 'bg-blue-600' : 'bg-gray-600 hover:bg-gray-500'
            }`}
          >
            [1] Pendulum
          </button>
          <button
            onClick={() => setActiveEquipment('spring-mass')}
            className={`px-2 py-1 rounded text-xs w-full ${
              activeEquipment === 'spring-mass' ? 'bg-blue-600' : 'bg-gray-600 hover:bg-gray-500'
            }`}
          >
            [2] Spring-Mass
          </button>
          <button
            onClick={() => setActiveEquipment('optics')}
            className={`px-2 py-1 rounded text-xs w-full ${
              activeEquipment === 'optics' ? 'bg-blue-600' : 'bg-gray-600 hover:bg-gray-500'
            }`}
          >
            [3] Optics
          </button>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-80 text-white p-3 rounded max-w-sm">
        <h4 className="font-bold mb-2 text-blue-300">🔬 Lab Instructions</h4>
        <div className="text-sm space-y-1">
          <div>• Select equipment: [1][2][3]</div>
          <div>• Wear safety gear before experiments</div>
          <div>• Start experiment → Take measurements</div>
          <div>• [SPACE]: Start/stop experiment</div>
          <div>• [F]: Toggle fullscreen</div>
          <div>• Record data for analysis</div>
        </div>
      </div>

      {/* Physics Information */}
      <div className="absolute bottom-4 right-4 bg-black bg-opacity-80 text-white p-3 rounded max-w-xs">
        <h4 className="font-bold mb-2 text-cyan-300">📐 Physics Info</h4>
        <div className="text-sm space-y-1">
          <div><strong>Pendulum:</strong> T = 2π√(L/g)</div>
          <div><strong>Spring:</strong> F = -kx (Hooke&apos;s Law)</div>
          <div><strong>Optics:</strong> n₁sin θ₁ = n₂sin θ₂</div>
          <div><strong>Free Fall:</strong> h = ½gt²</div>
          <div className="text-blue-300 font-semibold mt-2">
            &quot;Physics is the fundamental science that seeks to understand how the universe works&quot;
          </div>
        </div>
      </div>
    </div>
  );
}
