'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Sphere, Box, Cylinder, Plane } from '@react-three/drei';
import { useAdvancedGameStore } from '@/stores/advancedGameStore';

/* eslint-disable @typescript-eslint/no-explicit-any */

// Smart Home Device Component
function SmartDevice3D({
  device,
  position,
  onClick,
}: {
  device: any;
  position: [number, number, number];
  onClick: () => void;
}) {
  const meshRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current && device.status === 'on') {
      // Subtle glow animation for active devices
      meshRef.current.scale.setScalar(1 + Math.sin(Date.now() * 0.003) * 0.05);
    }
  });

  const deviceColor = useMemo(() => {
    if (device.status === 'on') {
      switch (device.type) {
        case 'light':
          return '#ffff88';
        case 'thermostat':
          return '#ff8888';
        case 'camera':
          return '#88ff88';
        case 'sensor':
          return '#8888ff';
        case 'speaker':
          return '#ff88ff';
        case 'lock':
          return '#88ffff';
        default:
          return '#ffffff';
      }
    }
    return '#444444';
  }, [device.type, device.status]);

  const DeviceShape = ({ type }: { type: string }) => {
    switch (type) {
      case 'light':
        return (
          <Sphere args={[0.2, 16, 16]}>
            <meshStandardMaterial
              color={deviceColor}
              emissive={device.status === 'on' ? deviceColor : '#000000'}
              emissiveIntensity={device.status === 'on' ? 0.5 : 0}
            />
          </Sphere>
        );
      case 'thermostat':
        return (
          <Cylinder args={[0.15, 0.15, 0.1, 8]}>
            <meshStandardMaterial
              color={deviceColor}
              emissive={device.status === 'on' ? '#ff4444' : '#000000'}
              emissiveIntensity={0.3}
            />
          </Cylinder>
        );
      case 'camera':
        return (
          <Box args={[0.3, 0.2, 0.15]}>
            <meshStandardMaterial color={device.status === 'on' ? '#444444' : '#222222'} />
          </Box>
        );
      case 'sensor':
        return (
          <Sphere args={[0.1, 16, 16]}>
            <meshStandardMaterial
              color={deviceColor}
              emissive={device.status === 'on' ? '#4444ff' : '#000000'}
              emissiveIntensity={0.8}
            />
          </Sphere>
        );
      case 'speaker':
        return (
          <Cylinder args={[0.2, 0.2, 0.3, 16]}>
            <meshStandardMaterial color={device.status === 'on' ? '#333333' : '#111111'} />
          </Cylinder>
        );
      case 'lock':
        return (
          <Box args={[0.1, 0.3, 0.15]}>
            <meshStandardMaterial color={device.status === 'on' ? '#888888' : '#444444'} />
          </Box>
        );
      default:
        return (
          <Box args={[0.2, 0.2, 0.2]}>
            <meshStandardMaterial color="#666666" />
          </Box>
        );
    }
  };

  return (
    <group
      position={position}
      ref={meshRef}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}
    >
      <DeviceShape type={device.type} />

      {/* Device status indicator */}
      {device.status === 'on' && (
        <Sphere args={[0.05, 8, 8]} position={[0, 0.3, 0]}>
          <meshBasicMaterial color="#00ff00" />
        </Sphere>
      )}

      {/* Device label */}
      <Html position={[0, -0.4, 0]} center>
        <div className="text-white text-xs bg-black bg-opacity-60 px-2 py-1 rounded">
          {device.type.charAt(0).toUpperCase() + device.type.slice(1)}
          {device.status === 'on' && device.value > 0 && (
            <div className="text-yellow-300">
              {device.type === 'thermostat' ? `${device.value}°C` : `${device.value}%`}
            </div>
          )}
        </div>
      </Html>
    </group>
  );
}

// 3D Room Component
function Room3D({ room, onDeviceClick }: { room: any; onDeviceClick: (deviceId: string) => void }) {
  // Room walls and floor
  return (
    <group position={room.position}>
      {/* Floor */}
      <Plane args={[4, 4]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
        <meshStandardMaterial color="#8B4513" />
      </Plane>

      {/* Walls */}
      <Plane args={[4, 3]} position={[0, 1.4, -2]}>
        <meshStandardMaterial color="#F5F5DC" />
      </Plane>
      <Plane args={[4, 3]} position={[-2, 1.4, 0]} rotation={[0, Math.PI / 2, 0]}>
        <meshStandardMaterial color="#F5F5DC" />
      </Plane>

      {/* Room furniture based on type */}
      {room.name === 'Phòng khách' && (
        <>
          <Box args={[1.5, 0.4, 0.8]} position={[0, 0.1, 0]}>
            <meshStandardMaterial color="#8B4513" />
          </Box>
          <Box args={[0.8, 1, 0.8]} position={[-1, 0.4, -1]}>
            <meshStandardMaterial color="#696969" />
          </Box>
        </>
      )}

      {room.name === 'Nhà bếp' && (
        <>
          <Box args={[0.6, 0.8, 0.6]} position={[1, 0.3, -1]}>
            <meshStandardMaterial color="#C0C0C0" />
          </Box>
          <Box args={[2, 0.6, 0.6]} position={[0, 0.2, 1]}>
            <meshStandardMaterial color="#8B4513" />
          </Box>
        </>
      )}

      {room.name === 'Phòng ngủ' && (
        <>
          <Box args={[1.5, 0.3, 2]} position={[0, 0.05, 0]}>
            <meshStandardMaterial color="#8B4513" />
          </Box>
          <Box args={[0.4, 1.2, 0.8]} position={[-1.5, 0.5, -1]}>
            <meshStandardMaterial color="#8B4513" />
          </Box>
        </>
      )}

      {/* Render devices */}
      {room.devices.map((device: any) => (
        <SmartDevice3D
          key={device.id}
          device={device}
          position={device.position}
          onClick={() => onDeviceClick(device.id)}
        />
      ))}

      {/* Room name label */}
      <Html position={[0, 2.5, 0]} center>
        <div className="text-white font-bold bg-blue-600 bg-opacity-80 px-3 py-2 rounded">{room.name}</div>
      </Html>
    </group>
  );
}

// Smart Home Control Panel
function SmartHomeControlPanel() {
  const { smartHome, updateSmartHomeState, addDevice } = useAdvancedGameStore();
  const [selectedRoom, setSelectedRoom] = useState('living-room');
  const [selectedDeviceType, setSelectedDeviceType] = useState('light');

  const deviceTypes = ['light', 'thermostat', 'camera', 'sensor', 'speaker', 'lock'];
  const deviceCosts = {
    light: 500000, // 500k VND
    thermostat: 2000000, // 2M VND
    camera: 3000000, // 3M VND
    sensor: 800000, // 800k VND
    speaker: 1500000, // 1.5M VND
    lock: 2500000, // 2.5M VND
  };

  const addNewDevice = () => {
    const cost = deviceCosts[selectedDeviceType as keyof typeof deviceCosts] || 500000;

    if (smartHome.budget >= cost) {
      const room = smartHome.rooms.find((r) => r.id === selectedRoom);
      if (room) {
        const position: [number, number, number] = [
          (room.devices.length % 3) - 1,
          0.5,
          Math.floor(room.devices.length / 3) - 0.5,
        ];

        addDevice(selectedRoom, selectedDeviceType, position);
        updateSmartHomeState({
          budget: smartHome.budget - cost,
        });
      }
    }
  };

  const createAutomationScenario = () => {
    const scenarios = [
      {
        id: 'morning',
        name: 'Buổi sáng',
        actions: [
          { deviceId: 'all-lights', action: 'turn-on', value: 80 },
          { deviceId: 'thermostat', action: 'set-temperature', value: 24 },
        ],
      },
      {
        id: 'night',
        name: 'Buổi tối',
        actions: [
          { deviceId: 'all-lights', action: 'turn-off' },
          { deviceId: 'security', action: 'arm' },
        ],
      },
    ];

    // Check if scenarios already exist to prevent duplicates
    const existingIds = new Set(smartHome.scenarios.map((s) => s.id));
    const newScenarios = scenarios.filter((scenario) => !existingIds.has(scenario.id));

    if (newScenarios.length > 0) {
      updateSmartHomeState({
        scenarios: [...smartHome.scenarios, ...newScenarios],
      });
    }
  };

  return (
    <div className="absolute top-4 left-4 bg-black bg-opacity-80 text-white p-4 rounded-lg max-w-sm">
      <h3 className="text-lg font-bold mb-3 text-blue-300">🏠 Smart Home Control</h3>

      {/* Room Selection */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Select Room</h4>
        <select
          value={selectedRoom}
          onChange={(e) => setSelectedRoom(e.target.value)}
          className="bg-gray-700 text-white px-2 py-1 rounded w-full"
        >
          {smartHome.rooms.map((room) => (
            <option key={room.id} value={room.id}>
              {room.name}
            </option>
          ))}
        </select>
      </div>

      {/* Device Management */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Add Device</h4>
        <select
          value={selectedDeviceType}
          onChange={(e) => setSelectedDeviceType(e.target.value)}
          className="bg-gray-700 text-white px-2 py-1 rounded w-full mb-2"
        >
          {deviceTypes.map((type) => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)} -{' '}
              {(deviceCosts[type as keyof typeof deviceCosts] / 1000).toFixed(0)}k VND
            </option>
          ))}
        </select>
        <button
          onClick={addNewDevice}
          disabled={smartHome.budget < (deviceCosts[selectedDeviceType as keyof typeof deviceCosts] || 500000)}
          className="bg-green-600 hover:bg-green-500 disabled:bg-gray-600 px-3 py-1 rounded w-full"
        >
          + Add Device
        </button>
      </div>

      {/* Automation */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Automation</h4>
        <button
          onClick={createAutomationScenario}
          className="bg-purple-600 hover:bg-purple-500 px-3 py-1 rounded w-full text-sm mb-2"
        >
          🤖 Create Scenarios
        </button>

        {smartHome.scenarios.map((scenario) => (
          <button
            key={scenario.id}
            onClick={() => updateSmartHomeState({ currentScenario: scenario.id })}
            className="bg-orange-600 hover:bg-orange-500 px-2 py-1 rounded text-xs mr-1 mb-1"
          >
            {scenario.name}
          </button>
        ))}
      </div>

      {/* Home Stats */}
      <div className="text-sm border-t border-gray-600 pt-2">
        <div>Budget: {(smartHome.budget / 1000).toFixed(0)}k VND</div>
        <div>Devices: {smartHome.installedDevices}</div>
        <div>Energy: {smartHome.energyUsage}W</div>
        <div>Security: {smartHome.securityStatus}</div>
      </div>
    </div>
  );
}

// Main Smart Home IoT Simulator component
export default function SmartHomeIoTSimulator3D() {
  const { smartHome, toggleDevice } = useAdvancedGameStore();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [cameraTarget, setCameraTarget] = useState<[number, number, number]>([0, 0, 0]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key.toLowerCase()) {
        case 'f':
          setIsFullscreen(!isFullscreen);
          break;
        case '1':
          setCameraTarget([0, 2, 5]); // Living room view
          break;
        case '2':
          setCameraTarget([5, 2, 5]); // Bedroom view
          break;
        case '3':
          setCameraTarget([0, 2, 10]); // Kitchen view
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isFullscreen]);

  const handleDeviceClick = (deviceId: string) => {
    toggleDevice(deviceId);
  };

  return (
    <div
      className={`relative ${isFullscreen ? 'fixed inset-0 z-50' : 'h-screen'} bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900`}
    >
      <Canvas camera={{ position: [0, 8, 12], fov: 75 }} gl={{ antialias: true, alpha: true }}>
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} color="#ffffff" />
        <pointLight position={[0, 5, 0]} intensity={0.6} color="#ffff88" />

        {/* Controls */}
        <OrbitControls
          target={cameraTarget}
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          maxDistance={25}
          minDistance={5}
          maxPolarAngle={Math.PI / 2.2}
        />

        {/* Render all rooms */}
        {smartHome.rooms.map((room) => (
          <Room3D key={room.id} room={room} onDeviceClick={handleDeviceClick} />
        ))}

        {/* House exterior */}
        <Box args={[15, 4, 15]} position={[2.5, 1.5, 2.5]}>
          <meshStandardMaterial color="#8B7355" wireframe />
        </Box>

        {/* Ground */}
        <Plane args={[30, 30]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
          <meshStandardMaterial color="#2d5016" />
        </Plane>

        {/* Grid helper */}
        <gridHelper args={[30, 30, '#444444', '#222222']} position={[0, -1, 0]} />
      </Canvas>

      {/* Control Panel */}
      <SmartHomeControlPanel />

      {/* Fullscreen toggle */}
      <button
        onClick={() => setIsFullscreen(!isFullscreen)}
        className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded"
      >
        {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'} [F]
      </button>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-80 text-white p-3 rounded max-w-sm">
        <h4 className="font-bold mb-2 text-blue-300">🏠 Smart Home Controls</h4>
        <div className="text-sm space-y-1">
          <div>• Click devices: Toggle on/off</div>
          <div>• [1]: Living room view</div>
          <div>• [2]: Bedroom view</div>
          <div>• [3]: Kitchen view</div>
          <div>• [F]: Toggle fullscreen</div>
          <div>• Green dot = Device ON</div>
        </div>
      </div>

      {/* IoT Information */}
      <div className="absolute bottom-4 right-4 bg-black bg-opacity-80 text-white p-3 rounded max-w-xs">
        <h4 className="font-bold mb-2 text-cyan-300">🌐 IoT Info</h4>
        <div className="text-sm space-y-1">
          <div>
            <strong>Smart Lighting:</strong> Energy efficient LED control
          </div>
          <div>
            <strong>Climate Control:</strong> Automated temperature management
          </div>
          <div>
            <strong>Security System:</strong> Camera và sensor monitoring
          </div>
          <div>
            <strong>Home Automation:</strong> Scheduled and scenario-based control
          </div>
          <div className="text-blue-300 font-semibold mt-2">
            &quot;Smart homes save energy and increase convenience&quot;
          </div>
        </div>
      </div>
    </div>
  );
}
