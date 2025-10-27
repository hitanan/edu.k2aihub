'use client';

import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Html } from '@react-three/drei';
import * as THREE from 'three';
import { Heart, Activity, Zap, RotateCcw, Search, CheckCircle } from 'lucide-react';

// Medical Device Types
interface MedicalDevice {
  id: string;
  name: string;
  nameVN: string;
  type: 'pacemaker' | 'stent' | 'prosthetic' | 'monitor' | 'implant' | 'diagnostic';
  position: [number, number, number];
  scale: [number, number, number];
  color: string;
  function: string;
  anatomy: string[];
  specifications: {
    material: string;
    power: string;
    lifespan: string;
    biocompatibility: string;
  };
  benefits: string[];
  risks: string[];
  isPlaced: boolean;
}

interface AnatomyPart {
  id: string;
  name: string;
  nameVN: string;
  position: [number, number, number];
  scale: [number, number, number];
  color: string;
  function: string;
  compatibleDevices: string[];
  isHealthy: boolean;
}

// Anatomy data
const ANATOMY_PARTS: AnatomyPart[] = [
  {
    id: 'heart',
    name: 'Heart',
    nameVN: 'Tim',
    position: [0, 2, 0],
    scale: [1.2, 1.5, 1.0],
    color: '#dc2626',
    function: 'Pumps blood throughout the body',
    compatibleDevices: ['pacemaker', 'heart-monitor', 'defibrillator'],
    isHealthy: true,
  },
  {
    id: 'femur',
    name: 'Femur',
    nameVN: 'Xương đùi',
    position: [-2, -1, 0],
    scale: [0.3, 2.5, 0.3],
    color: '#f3f4f6',
    function: 'Supports body weight and enables leg movement',
    compatibleDevices: ['hip-prosthetic', 'knee-prosthetic'],
    isHealthy: false,
  },
  {
    id: 'coronary-artery',
    name: 'Coronary Artery',
    nameVN: 'Động mạch vành',
    position: [0.8, 2.2, 0],
    scale: [0.1, 0.8, 0.1],
    color: '#ef4444',
    function: 'Supplies blood to heart muscle',
    compatibleDevices: ['stent', 'bypass-graft'],
    isHealthy: false,
  },
  {
    id: 'skull',
    name: 'Skull',
    nameVN: 'Hộp sọ',
    position: [0, 4.5, 0],
    scale: [1.0, 1.0, 1.2],
    color: '#e5e7eb',
    function: 'Protects brain and supports facial structure',
    compatibleDevices: ['brain-monitor', 'cochlear-implant'],
    isHealthy: true,
  },
];

// Medical devices data
const MEDICAL_DEVICES: MedicalDevice[] = [
  {
    id: 'pacemaker',
    name: 'Cardiac Pacemaker',
    nameVN: 'Máy tạo nhịp tim',
    type: 'pacemaker',
    position: [-0.5, 2.8, 0.5],
    scale: [0.3, 0.2, 0.1],
    color: '#3b82f6',
    function: 'Regulates heart rhythm with electrical impulses',
    anatomy: ['heart'],
    specifications: {
      material: 'Titanium alloy',
      power: '10-year battery life',
      lifespan: '8-10 years',
      biocompatibility: 'ISO 10993 compliant',
    },
    benefits: ['Prevents cardiac arrest', 'Improves quality of life', 'Remote monitoring'],
    risks: ['Infection risk', 'Lead displacement', 'Battery replacement'],
    isPlaced: false,
  },
  {
    id: 'coronary-stent',
    name: 'Coronary Stent',
    nameVN: 'Stent động mạch vành',
    type: 'stent',
    position: [1.0, 2.5, 0],
    scale: [0.05, 0.3, 0.05],
    color: '#10b981',
    function: 'Keeps blocked arteries open for blood flow',
    anatomy: ['coronary-artery'],
    specifications: {
      material: 'Drug-eluting polymer',
      power: 'No power required',
      lifespan: 'Permanent implant',
      biocompatibility: 'Biocompatible coating',
    },
    benefits: ['Restores blood flow', 'Reduces chest pain', 'Prevents heart attack'],
    risks: ['Blood clots', 'Restenosis', 'Allergic reaction'],
    isPlaced: false,
  },
  {
    id: 'hip-prosthetic',
    name: 'Hip Prosthetic',
    nameVN: 'Khớp háng nhân tạo',
    type: 'prosthetic',
    position: [-2, -0.5, 0],
    scale: [0.4, 1.0, 0.4],
    color: '#f59e0b',
    function: 'Replaces damaged hip joint for mobility',
    anatomy: ['femur'],
    specifications: {
      material: 'Ceramic and titanium',
      power: 'No power required',
      lifespan: '15-20 years',
      biocompatibility: 'Osseointegration design',
    },
    benefits: ['Pain relief', 'Restored mobility', 'Improved quality of life'],
    risks: ['Dislocation', 'Wear and tear', 'Infection'],
    isPlaced: false,
  },
  {
    id: 'cochlear-implant',
    name: 'Cochlear Implant',
    nameVN: 'Ốc tai điện tử',
    type: 'implant',
    position: [0.8, 4.2, 0.5],
    scale: [0.2, 0.15, 0.1],
    color: '#8b5cf6',
    function: 'Provides hearing sensation by stimulating auditory nerve',
    anatomy: ['skull'],
    specifications: {
      material: 'Biocompatible silicone',
      power: 'External processor battery',
      lifespan: '20+ years internal, 5 years processor',
      biocompatibility: 'MRI conditional',
    },
    benefits: ['Hearing restoration', 'Speech development', 'Social integration'],
    risks: ['Surgical complications', 'Device failure', 'Infection'],
    isPlaced: false,
  },
];

// 3D Anatomy Part Component
const AnatomyPart3D: React.FC<{
  part: AnatomyPart;
  isHighlighted: boolean;
  onClick: () => void;
}> = ({ part, isHighlighted, onClick }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      const targetOpacity = isHighlighted ? 0.9 : hovered ? 0.7 : 0.6;
      const material = meshRef.current.material as THREE.MeshPhongMaterial;
      material.opacity = THREE.MathUtils.lerp(material.opacity, targetOpacity, delta * 3);

      if (isHighlighted) {
        meshRef.current.rotation.y += delta * 0.5;
      }
    }
  });

  const getGeometry = () => {
    switch (part.id) {
      case 'heart':
        return <sphereGeometry args={[0.8, 8, 6]} />;
      case 'femur':
        return <cylinderGeometry args={[0.15, 0.2, 2.5, 8]} />;
      case 'coronary-artery':
        return <cylinderGeometry args={[0.05, 0.05, 0.8, 6]} />;
      case 'skull':
        return <sphereGeometry args={[0.8, 12, 12]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  };

  return (
    <group position={part.position}>
      <mesh
        ref={meshRef}
        scale={part.scale}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {getGeometry()}
        <meshPhongMaterial
          color={part.color}
          transparent
          opacity={0.6}
          emissive={part.color}
          emissiveIntensity={isHighlighted ? 0.2 : 0}
        />
      </mesh>

      {/* Health indicator */}
      <mesh position={[0.8, 0.8, 0]} scale={0.2}>
        <sphereGeometry args={[0.2, 8, 8]} />
        <meshBasicMaterial color={part.isHealthy ? '#22c55e' : '#ef4444'} />
      </mesh>

      {/* Part label */}
      <Text position={[0, -1, 0]} fontSize={0.2} color="#ffffff" anchorX="center" anchorY="middle">
        {part.nameVN}
      </Text>

      {hovered && (
        <Html position={[1.5, 0, 0]} className="pointer-events-none">
          <div className="bg-gray-900/95 backdrop-blur-sm p-2 rounded border border-gray-600 max-w-xs">
            <p className="text-white text-xs">{part.function}</p>
            <p className="text-gray-400 text-xs mt-1">Status: {part.isHealthy ? 'Healthy' : 'Needs Treatment'}</p>
          </div>
        </Html>
      )}
    </group>
  );
};

// 3D Medical Device Component
const MedicalDevice3D: React.FC<{
  device: MedicalDevice;
  isSelected: boolean;
  onSelect: () => void;
}> = ({ device, isSelected, onSelect }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      if (isSelected && !device.isPlaced) {
        meshRef.current.rotation.y += delta * 2;
        const scale = 1.0 + Math.sin(state.clock.elapsedTime * 3) * 0.1;
        meshRef.current.scale.setScalar(scale);
      }
    }
  });

  const getDeviceGeometry = () => {
    switch (device.type) {
      case 'pacemaker':
        return <boxGeometry args={[0.3, 0.2, 0.1]} />;
      case 'stent':
        return <cylinderGeometry args={[0.025, 0.025, 0.3, 8]} />;
      case 'prosthetic':
        return <sphereGeometry args={[0.2, 8, 8]} />;
      case 'implant':
        return <boxGeometry args={[0.2, 0.15, 0.1]} />;
      default:
        return <boxGeometry args={[0.2, 0.2, 0.2]} />;
    }
  };

  return (
    <group position={device.position}>
      <mesh
        ref={meshRef}
        scale={device.scale}
        onClick={onSelect}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {getDeviceGeometry()}
        <meshPhongMaterial
          color={device.color}
          emissive={device.color}
          emissiveIntensity={isSelected ? 0.3 : hovered ? 0.1 : 0}
          transparent
          opacity={device.isPlaced ? 0.9 : 0.8}
        />
      </mesh>

      {/* Placement indicator */}
      {device.isPlaced && (
        <mesh position={[0, 0.5, 0]} scale={0.1}>
          <sphereGeometry args={[0.3, 8, 8]} />
          <meshBasicMaterial color="#22c55e" />
        </mesh>
      )}

      {/* Device label */}
      <Text position={[0, -0.4, 0]} fontSize={0.15} color="#ffffff" anchorX="center" anchorY="middle">
        {device.nameVN}
      </Text>
    </group>
  );
};

// Device Library Panel
const DeviceLibrary: React.FC<{
  devices: MedicalDevice[];
  selectedDevice: MedicalDevice | null;
  onDeviceSelect: (device: MedicalDevice) => void;
}> = ({ devices, selectedDevice, onDeviceSelect }) => {
  return (
    <div className="absolute top-4 left-4 bg-gray-900/95 backdrop-blur-sm p-4 rounded-lg border border-gray-700 max-w-sm">
      <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
        <Heart className="w-4 h-4" />
        Medical Devices Library
      </h3>

      <div className="space-y-2 max-h-80 overflow-y-auto">
        {devices.map((device) => (
          <button
            key={device.id}
            onClick={() => onDeviceSelect(device)}
            className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
              selectedDevice?.id === device.id
                ? 'bg-blue-600/80 border border-blue-400'
                : 'bg-gray-800/60 hover:bg-gray-700/60 border border-gray-600'
            }`}
          >
            <div className="flex justify-between items-start mb-1">
              <h4 className="text-white font-medium text-sm">{device.nameVN}</h4>
              {device.isPlaced && <CheckCircle className="w-4 h-4 text-green-400" />}
            </div>
            <p className="text-gray-400 text-xs mb-2">{device.function}</p>
            <div className="flex flex-wrap gap-1">
              {device.anatomy.slice(0, 2).map((anat) => (
                <span key={anat} className="bg-red-600/60 text-white px-2 py-1 rounded text-xs">
                  {anat}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

// Device Details Panel
const DeviceDetailsPanel: React.FC<{
  device: MedicalDevice | null;
  onPlace: () => void;
  canPlace: boolean;
}> = ({ device, onPlace, canPlace }) => {
  if (!device) return null;

  return (
    <div className="absolute top-4 right-4 bg-gray-900/95 backdrop-blur-sm p-4 rounded-lg border border-gray-700 max-w-md max-h-[80vh] overflow-y-auto">
      <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
        <Activity className="w-5 h-5" />
        {device.nameVN}
      </h2>

      <div className="space-y-4 text-sm">
        <div>
          <h3 className="text-blue-400 font-semibold mb-2">Function</h3>
          <p className="text-gray-300">{device.function}</p>
        </div>

        <div>
          <h3 className="text-green-400 font-semibold mb-2">Specifications</h3>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-400">Material:</span>
              <span className="text-gray-300">{device.specifications.material}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Power:</span>
              <span className="text-gray-300">{device.specifications.power}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Lifespan:</span>
              <span className="text-gray-300">{device.specifications.lifespan}</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-yellow-400 font-semibold mb-2">Benefits</h3>
          <ul className="space-y-1">
            {device.benefits.map((benefit) => (
              <li key={benefit} className="text-gray-300 text-xs flex items-start gap-2">
                <span className="text-green-400">•</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-red-400 font-semibold mb-2">Risks</h3>
          <ul className="space-y-1">
            {device.risks.map((risk) => (
              <li key={risk} className="text-gray-300 text-xs flex items-start gap-2">
                <span className="text-red-400">•</span>
                {risk}
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={onPlace}
          disabled={!canPlace || device.isPlaced}
          className={`w-full px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors font-medium ${
            device.isPlaced
              ? 'bg-green-600 text-white cursor-not-allowed'
              : canPlace
                ? 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
          }`}
        >
          {device.isPlaced ? (
            <>
              <CheckCircle className="w-4 h-4" />
              Device Placed
            </>
          ) : (
            <>
              <Zap className="w-4 h-4" />
              Place Device
            </>
          )}
        </button>
      </div>
    </div>
  );
};

// Main Medical Device Designer 3D Component
export default function MedicalDeviceDesigner3D() {
  const [selectedDevice, setSelectedDevice] = useState<MedicalDevice | null>(null);
  const [selectedAnatomy, setSelectedAnatomy] = useState<AnatomyPart | null>(null);
  const [devices, setDevices] = useState(MEDICAL_DEVICES);
  const [anatomyParts] = useState(ANATOMY_PARTS);
  const [showLibrary, setShowLibrary] = useState(true);

  const handleDeviceSelect = (device: MedicalDevice) => {
    setSelectedDevice(selectedDevice?.id === device.id ? null : device);
  };

  const handleAnatomySelect = (part: AnatomyPart) => {
    setSelectedAnatomy(selectedAnatomy?.id === part.id ? null : part);
  };

  const canPlaceDevice = () => {
    if (!selectedDevice || !selectedAnatomy) return false;
    return selectedDevice.anatomy.includes(selectedAnatomy.id) && !selectedDevice.isPlaced;
  };

  const handlePlaceDevice = () => {
    if (!selectedDevice || !canPlaceDevice()) return;

    setDevices((prev) =>
      prev.map((device) => (device.id === selectedDevice.id ? { ...device, isPlaced: true } : device)),
    );

    // Update selected device
    setSelectedDevice((prev) => (prev ? { ...prev, isPlaced: true } : null));
  };

  const resetDesign = () => {
    setDevices(MEDICAL_DEVICES);
    setSelectedDevice(null);
    setSelectedAnatomy(null);
  };

  const placedDevicesCount = devices.filter((d) => d.isPlaced).length;
  const isCompleted = placedDevicesCount === devices.length;

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Completion Celebration Modal */}
      {isCompleted && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-green-900 to-emerald-900 p-8 rounded-2xl border border-green-500 text-center max-w-md mx-4">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold text-green-400 mb-2">Thiết Kế Hoàn Thành!</h2>
            <p className="text-green-200 mb-4">
              Bạn đã đặt thành công tất cả {devices.length} thiết bị y tế!
            </p>
            <p className="text-green-300 text-sm mb-6">
              Những thiết bị này sẽ giúp cải thiện chất lượng cuộc sống của bệnh nhân.
            </p>
            <button
              onClick={resetDesign}
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors"
            >
              Thiết Kế Mới
            </button>
          </div>
        </div>
      )}

      <Canvas camera={{ position: [8, 4, 8], fov: 60 }} gl={{ antialias: true }} style={{ background: 'transparent' }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 10]} intensity={0.8} />
          <pointLight position={[5, 5, 5]} intensity={0.6} color="#ffffff" />
          <pointLight position={[-5, 5, -5]} intensity={0.4} color="#3b82f6" />

          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} maxDistance={20} minDistance={3} />

          {/* Human anatomy */}
          {anatomyParts.map((part) => (
            <AnatomyPart3D
              key={part.id}
              part={part}
              isHighlighted={selectedAnatomy?.id === part.id}
              onClick={() => handleAnatomySelect(part)}
            />
          ))}

          {/* Medical devices */}
          {devices.map((device) => (
            <MedicalDevice3D
              key={device.id}
              device={device}
              isSelected={selectedDevice?.id === device.id}
              onSelect={() => handleDeviceSelect(device)}
            />
          ))}

          {/* Floor grid */}
          <gridHelper args={[20, 20, '#444444', '#333333']} position={[0, -3, 0]} />
        </Suspense>
      </Canvas>

      {/* Device Library */}
      {showLibrary && (
        <DeviceLibrary devices={devices} selectedDevice={selectedDevice} onDeviceSelect={handleDeviceSelect} />
      )}

      {/* Device Details Panel */}
      <DeviceDetailsPanel device={selectedDevice} onPlace={handlePlaceDevice} canPlace={canPlaceDevice()} />

      {/* Bottom Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        <button
          onClick={resetDesign}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg flex items-center gap-2 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Reset Design
        </button>

        <button
          onClick={() => setShowLibrary(!showLibrary)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 transition-colors"
        >
          <Search className="w-4 h-4" />
          {showLibrary ? 'Hide' : 'Show'} Library
        </button>

        <div
          className={`bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-lg border ${isCompleted ? 'border-green-500' : 'border-gray-700'}`}
        >
          <span className={`text-sm ${isCompleted ? 'text-green-400 font-semibold' : 'text-gray-300'}`}>
            {isCompleted ? '🎉 Design Complete!' : `Placed Devices: ${placedDevicesCount}/${devices.length}`}
          </span>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
        <div className="bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700">
          <p className="text-gray-300 text-sm">
            Click on anatomy parts and devices to select • Choose compatible combinations • Place devices to help
            patients
          </p>
        </div>
      </div>
    </div>
  );
}
