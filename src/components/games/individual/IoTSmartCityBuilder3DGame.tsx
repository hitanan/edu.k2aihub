'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { 
  Building2, 
  Cpu, 
  Wifi, 
  Zap, 
  Thermometer, 
  Car, 
  Lightbulb,
  Gauge,
  Settings,
  Monitor,
  Smartphone,
  Cloud,
  Database,
  Shield,
  Recycle
} from 'lucide-react';

interface IoTSmartCityBuilder3DGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface SmartSystem {
  id: string;
  name: string;
  category: 'infrastructure' | 'transportation' | 'energy' | 'environment' | 'security' | 'healthcare';
  description: string;
  cost: number;
  energyUsage: number;
  citizenSatisfaction: number;
  efficiency: number;
  prerequisites: string[];
  connectedSystems: string[];
  iotDevices: IoTDevice[];
  dataGenerated: number; // MB per day
  maintenanceCost: number;
}

interface IoTDevice {
  id: string;
  name: string;
  type: 'sensor' | 'actuator' | 'gateway' | 'controller';
  connectivity: 'WiFi' | '5G' | 'LoRa' | 'NB-IoT' | 'Bluetooth';
  dataRate: number; // KB per hour
  powerConsumption: number; // Watts
  range: number; // meters
  cost: number;
}

interface CityResource {
  energy: number;
  budget: number;
  dataStorage: number;
  citizenHappiness: number;
  efficiency: number;
  sustainability: number;
}

const IOT_DEVICES: IoTDevice[] = [
  {
    id: 'temp-sensor',
    name: 'Cảm Biến Nhiệt Độ',
    type: 'sensor',
    connectivity: 'LoRa',
    dataRate: 1,
    powerConsumption: 0.5,
    range: 1000,
    cost: 50
  },
  {
    id: 'air-quality-sensor',
    name: 'Cảm Biến Chất Lượng Không Khí',
    type: 'sensor',
    connectivity: 'NB-IoT',
    dataRate: 5,
    powerConsumption: 2,
    range: 2000,
    cost: 120
  },
  {
    id: 'traffic-camera',
    name: 'Camera Giao Thông Thông Minh',
    type: 'sensor',
    connectivity: '5G',
    dataRate: 1000,
    powerConsumption: 15,
    range: 100,
    cost: 800
  },
  {
    id: 'smart-streetlight',
    name: 'Đèn Đường Thông Minh',
    type: 'actuator',
    connectivity: 'WiFi',
    dataRate: 10,
    powerConsumption: 50,
    range: 50,
    cost: 200
  },
  {
    id: 'parking-sensor',
    name: 'Cảm Biến Bãi Đỗ Xe',
    type: 'sensor',
    connectivity: 'LoRa',
    dataRate: 2,
    powerConsumption: 1,
    range: 500,
    cost: 80
  },
  {
    id: 'waste-bin-sensor',
    name: 'Cảm Biến Thùng Rác Thông Minh',
    type: 'sensor',
    connectivity: 'NB-IoT',
    dataRate: 3,
    powerConsumption: 1.5,
    range: 800,
    cost: 100
  },
  {
    id: 'iot-gateway',
    name: 'Cổng Kết Nối IoT',
    type: 'gateway',
    connectivity: '5G',
    dataRate: 10000,
    powerConsumption: 30,
    range: 5000,
    cost: 1500
  },
  {
    id: 'edge-computer',
    name: 'Máy Tính Biên',
    type: 'controller',
    connectivity: '5G',
    dataRate: 50000,
    powerConsumption: 100,
    range: 10000,
    cost: 3000
  }
];

const SMART_SYSTEMS: SmartSystem[] = [
  {
    id: 'smart-traffic',
    name: 'Hệ Thống Giao Thông Thông Minh',
    category: 'transportation',
    description: 'Quản lý lưu lượng giao thông bằng AI và IoT để giảm kẹt xe và tối ưu thời gian di chuyển.',
    cost: 10000,
    energyUsage: 500,
    citizenSatisfaction: 85,
    efficiency: 90,
    prerequisites: [],
    connectedSystems: ['smart-parking', 'environmental-monitoring'],
    iotDevices: [
      IOT_DEVICES.find(d => d.id === 'traffic-camera')!,
      IOT_DEVICES.find(d => d.id === 'iot-gateway')!
    ],
    dataGenerated: 5000,
    maintenanceCost: 800
  },
  {
    id: 'smart-lighting',
    name: 'Chiếu Sáng Thông Minh',
    category: 'infrastructure',
    description: 'Hệ thống đèn LED thông minh tự động điều chỉnh độ sáng theo điều kiện môi trường.',
    cost: 5000,
    energyUsage: 200,
    citizenSatisfaction: 70,
    efficiency: 95,
    prerequisites: [],
    connectedSystems: ['environmental-monitoring'],
    iotDevices: [
      IOT_DEVICES.find(d => d.id === 'smart-streetlight')!,
      IOT_DEVICES.find(d => d.id === 'temp-sensor')!
    ],
    dataGenerated: 500,
    maintenanceCost: 300
  },
  {
    id: 'smart-parking',
    name: 'Bãi Đỗ Xe Thông Minh',
    category: 'transportation',
    description: 'Hệ thống tìm kiếm và đặt chỗ đỗ xe tự động, tối ưu không gian đỗ xe đô thị.',
    cost: 8000,
    energyUsage: 150,
    citizenSatisfaction: 80,
    efficiency: 85,
    prerequisites: [],
    connectedSystems: ['smart-traffic'],
    iotDevices: [
      IOT_DEVICES.find(d => d.id === 'parking-sensor')!,
      IOT_DEVICES.find(d => d.id === 'iot-gateway')!
    ],
    dataGenerated: 2000,
    maintenanceCost: 500
  },
  {
    id: 'environmental-monitoring',
    name: 'Giám Sát Môi Trường',
    category: 'environment',
    description: 'Mạng lưới cảm biến theo dõi chất lượng không khí, tiếng ồn và các chỉ số môi trường.',
    cost: 12000,
    energyUsage: 300,
    citizenSatisfaction: 90,
    efficiency: 88,
    prerequisites: [],
    connectedSystems: ['smart-lighting', 'waste-management'],
    iotDevices: [
      IOT_DEVICES.find(d => d.id === 'air-quality-sensor')!,
      IOT_DEVICES.find(d => d.id === 'temp-sensor')!
    ],
    dataGenerated: 3000,
    maintenanceCost: 600
  },
  {
    id: 'smart-energy',
    name: 'Quản Lý Năng Lượng Thông Minh',
    category: 'energy',
    description: 'Lưới điện thông minh tích hợp năng lượng tái tạo và tối ưu phân phối điện.',
    cost: 20000,
    energyUsage: -1000, // Generates energy
    citizenSatisfaction: 75,
    efficiency: 92,
    prerequisites: ['smart-lighting'],
    connectedSystems: ['smart-lighting', 'smart-buildings'],
    iotDevices: [
      IOT_DEVICES.find(d => d.id === 'edge-computer')!,
      IOT_DEVICES.find(d => d.id === 'iot-gateway')!
    ],
    dataGenerated: 8000,
    maintenanceCost: 1200
  },
  {
    id: 'waste-management',
    name: 'Quản Lý Rác Thải Thông Minh',
    category: 'environment',
    description: 'Hệ thống thu gom rác tự động với thùng rác thông minh và tuyến đường tối ưu.',
    cost: 7000,
    energyUsage: 250,
    citizenSatisfaction: 85,
    efficiency: 80,
    prerequisites: [],
    connectedSystems: ['environmental-monitoring'],
    iotDevices: [
      IOT_DEVICES.find(d => d.id === 'waste-bin-sensor')!,
      IOT_DEVICES.find(d => d.id === 'iot-gateway')!
    ],
    dataGenerated: 1500,
    maintenanceCost: 400
  }
];

const CITY_CHALLENGES = [
  {
    id: 'traffic-congestion',
    name: 'Kẹt Xe Giao Thông',
    description: 'Lưu lượng giao thông cao gây kẹt xe trong giờ cao điểm',
    impact: { citizenHappiness: -20, efficiency: -15 },
    solution: ['smart-traffic', 'smart-parking']
  },
  {
    id: 'air-pollution',
    name: 'Ô Nhiễm Không Khí',
    description: 'Chất lượng không khí kém ảnh hưởng sức khỏe cư dân',
    impact: { citizenHappiness: -25, sustainability: -20 },
    solution: ['environmental-monitoring', 'smart-energy']
  },
  {
    id: 'energy-shortage',
    name: 'Thiếu Hụt Năng Lượng',
    description: 'Nhu cầu điện vượt quá khả năng cung cấp',
    impact: { efficiency: -30, citizenHappiness: -15 },
    solution: ['smart-energy', 'smart-lighting']
  }
];

export default function IoTSmartCityBuilder3DGame({ 
  onComplete, 
  timeLeft, 
  onRestart 
}: IoTSmartCityBuilder3DGameProps) {
  const [cityResources, setCityResources] = useState<CityResource>({
    energy: 1000,
    budget: 50000,
    dataStorage: 10000, // MB
    citizenHappiness: 50,
    efficiency: 40,
    sustainability: 30
  });

  const [installedSystems, setInstalledSystems] = useState<string[]>([]);
  const [gamePhase, setGamePhase] = useState<'planning' | 'building' | 'monitoring' | 'completed'>('planning');
  const [selectedSystem, setSelectedSystem] = useState<SmartSystem | null>(null);
  const [activeChallenges, setActiveChallenges] = useState(CITY_CHALLENGES.slice(0, 2));
  const [score, setScore] = useState(0);
  const [notifications, setNotifications] = useState<string[]>([]);
  const [is3DView, setIs3DView] = useState(true);
  const [simulationSpeed, setSimulationSpeed] = useState(1);

  // Simulation tick
  useEffect(() => {
    if (gamePhase === 'monitoring') {
      const interval = setInterval(() => {
        updateCityMetrics();
      }, 2000 / simulationSpeed);

      return () => clearInterval(interval);
    }
  }, [gamePhase, installedSystems, simulationSpeed]);

  const updateCityMetrics = useCallback(() => {
    setCityResources(prev => {
      const newResources = { ...prev };
      
      // Calculate system effects
      installedSystems.forEach(systemId => {
        const system = SMART_SYSTEMS.find(s => s.id === systemId);
        if (system) {
          newResources.energy -= system.energyUsage;
          newResources.budget -= system.maintenanceCost;
          newResources.dataStorage -= system.dataGenerated / 24; // Per simulation tick
          newResources.citizenHappiness = Math.min(100, newResources.citizenHappiness + 0.5);
          newResources.efficiency = Math.min(100, newResources.efficiency + 0.3);
          newResources.sustainability = Math.min(100, newResources.sustainability + 0.2);
        }
      });

      // Apply challenge effects
      activeChallenges.forEach(challenge => {
        if (challenge.impact.citizenHappiness) {
          newResources.citizenHappiness += challenge.impact.citizenHappiness * 0.1;
        }
        if (challenge.impact.efficiency) {
          newResources.efficiency += challenge.impact.efficiency * 0.1;
        }
        if (challenge.impact.sustainability) {
          newResources.sustainability += challenge.impact.sustainability * 0.1;
        }
      });

      // Clamp values
      Object.keys(newResources).forEach(key => {
        const typedKey = key as keyof CityResource;
        if (typedKey !== 'budget' && typedKey !== 'dataStorage') {
          newResources[typedKey] = Math.max(0, Math.min(100, newResources[typedKey]));
        }
      });

      return newResources;
    });

    // Update score
    setScore(prev => prev + Math.floor(
      (cityResources.citizenHappiness + cityResources.efficiency + cityResources.sustainability) / 10
    ));

    // Check win condition
    if (cityResources.citizenHappiness >= 80 && cityResources.efficiency >= 80 && cityResources.sustainability >= 70) {
      setGamePhase('completed');
      onComplete(true, score + 500);
    }
  }, [installedSystems, activeChallenges, cityResources, score, onComplete]);

  const installSystem = (system: SmartSystem) => {
    if (cityResources.budget >= system.cost && 
        system.prerequisites.every(prereq => installedSystems.includes(prereq))) {
      
      setInstalledSystems(prev => [...prev, system.id]);
      setCityResources(prev => ({
        ...prev,
        budget: prev.budget - system.cost
      }));

      // Check if system solves any challenges
      const solvedChallenges = activeChallenges.filter(challenge =>
        challenge.solution.includes(system.id)
      );

      if (solvedChallenges.length > 0) {
        setActiveChallenges(prev => prev.filter(challenge => !solvedChallenges.includes(challenge)));
        setNotifications(prev => [...prev, `Đã giải quyết thành công: ${solvedChallenges[0].name}`]);
      }

      setNotifications(prev => [...prev, `Đã cài đặt: ${system.name}`]);
      setScore(prev => prev + 100);
    }
  };

  const render3DCityView = () => (
    <div className="relative w-full h-96 bg-gradient-to-b from-blue-800 via-cyan-700 to-blue-900 rounded-xl border border-cyan-500/30 overflow-hidden">
      {/* 3D City Skyline */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse at 50% 100%, rgba(0,255,255,0.2) 0%, transparent 70%),
          linear-gradient(180deg, rgba(56,189,248,0.3) 0%, rgba(15,23,42,0.8) 100%)
        `,
        perspective: '1200px'
      }}>
        
        {/* City Buildings */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end space-x-2">
          {Array.from({ length: 8 }).map((_, index) => {
            const isSmartBuilding = installedSystems.length > index;
            const height = Math.random() * 120 + 80;
            
            return (
              <div
                key={index}
                className={`relative ${
                  isSmartBuilding 
                    ? 'bg-gradient-to-t from-cyan-600 via-blue-500 to-cyan-400' 
                    : 'bg-gradient-to-t from-gray-700 via-gray-600 to-gray-500'
                }`}
                style={{
                  width: `${30 + Math.random() * 20}px`,
                  height: `${height}px`,
                  transformStyle: 'preserve-3d',
                  transform: `rotateX(${Math.random() * 5}deg) rotateY(${(index - 4) * 2}deg) translateZ(${Math.random() * 20}px)`,
                  clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)'
                }}
              >
                {/* Smart building indicators */}
                {isSmartBuilding && (
                  <>
                    {/* Windows */}
                    {Array.from({ length: Math.floor(height / 15) }).map((_, floor) => (
                      <div key={floor} className="absolute left-1 right-1 flex justify-between" 
                           style={{ top: `${floor * 15 + 10}px` }}>
                        <div className="w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
                        <div className="w-1 h-1 bg-yellow-300 rounded-full animate-pulse" 
                             style={{ animationDelay: '0.5s' }}></div>
                      </div>
                    ))}
                    
                    {/* IoT Antenna */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-0.5 h-4 bg-red-400 animate-pulse"></div>
                      <div className="w-2 h-0.5 bg-red-400 absolute top-1 left-1/2 transform -translate-x-1/2"></div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* IoT Network Connections */}
        {installedSystems.length > 1 && (
          <div className="absolute inset-0">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-px bg-cyan-400 animate-pulse"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 40}%`,
                  height: `${Math.random() * 50 + 20}px`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  opacity: 0.6,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        )}

        {/* Data Flow Animation */}
        <div className="absolute inset-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* City Status HUD */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm p-3 rounded-lg border border-cyan-500/30">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center space-x-1">
              <Lightbulb className="w-3 h-3 text-yellow-400" />
              <span className="text-white">{installedSystems.length} Systems</span>
            </div>
            <div className="flex items-center space-x-1">
              <Database className="w-3 h-3 text-blue-400" />
              <span className="text-white">{Math.floor(cityResources.dataStorage)}MB</span>
            </div>
            <div className="flex items-center space-x-1">
              <Zap className="w-3 h-3 text-green-400" />
              <span className="text-white">{cityResources.energy}kW</span>
            </div>
            <div className="flex items-center space-x-1">
              <Building2 className="w-3 h-3 text-purple-400" />
              <span className="text-white">{Math.floor(cityResources.citizenHappiness)}%</span>
            </div>
          </div>
        </div>

        {/* Weather/Environment Indicator */}
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm p-2 rounded-lg border border-cyan-500/30">
          <div className="flex items-center space-x-2">
            <Thermometer className="w-4 h-4 text-orange-400" />
            <span className="text-white text-sm">22°C</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );

  if (gamePhase === 'planning') {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Building2 className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl font-bold text-white">IoT Smart City Builder 3D</h2>
            <Cpu className="w-8 h-8 text-blue-400" />
          </div>
          <p className="text-gray-300 mb-6">
            Xây dựng thành phố thông minh với hệ thống IoT tiên tiến và giải quyết các thách thức đô thị
          </p>
          
          {render3DCityView()}
        </div>

        {/* City Resources Dashboard */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/30">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
            <Gauge className="w-6 h-6 text-cyan-400" />
            <span>Tài Nguyên Thành Phố</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300 flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-green-400" />
                  <span>Năng Lượng</span>
                </span>
                <span className="text-white font-bold">{cityResources.energy} kW</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (cityResources.energy / 2000) * 100)}%` }}
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300 flex items-center space-x-2">
                  <Database className="w-4 h-4 text-blue-400" />
                  <span>Ngân Sách</span>
                </span>
                <span className="text-white font-bold">${cityResources.budget.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (cityResources.budget / 50000) * 100)}%` }}
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300 flex items-center space-x-2">
                  <Building2 className="w-4 h-4 text-purple-400" />
                  <span>Hài Lòng Cư Dân</span>
                </span>
                <span className="text-white font-bold">{Math.floor(cityResources.citizenHappiness)}%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${cityResources.citizenHappiness}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Active Challenges */}
        <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-sm p-6 rounded-xl border border-red-500/30">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
            <Shield className="w-6 h-6 text-red-400" />
            <span>Thách Thức Thành Phố</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {activeChallenges.map(challenge => (
              <div key={challenge.id} className="p-4 bg-slate-800/50 rounded-lg border border-red-500/20">
                <h4 className="font-bold text-red-400 mb-2">{challenge.name}</h4>
                <p className="text-gray-300 text-sm mb-3">{challenge.description}</p>
                <div className="text-xs">
                  <span className="text-gray-400">Giải pháp:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {challenge.solution.map(solution => (
                      <span key={solution} className="bg-red-500/20 text-red-300 px-2 py-1 rounded">
                        {SMART_SYSTEMS.find(s => s.id === solution)?.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Start Building Button */}
        <div className="text-center">
          <button
            onClick={() => setGamePhase('building')}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl font-bold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
          >
            Bắt Đầu Xây Dựng
          </button>
        </div>
      </div>
    );
  }

  if (gamePhase === 'building') {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Xây Dựng Hệ Thống IoT</h2>
          {render3DCityView()}
        </div>

        {/* System Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SMART_SYSTEMS.map(system => {
            const isInstalled = installedSystems.includes(system.id);
            const canInstall = cityResources.budget >= system.cost && 
                              system.prerequisites.every(prereq => installedSystems.includes(prereq));
            const missingPrereqs = system.prerequisites.filter(prereq => !installedSystems.includes(prereq));
            
            return (
              <div
                key={system.id}
                className={`relative bg-gradient-to-br backdrop-blur-sm p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                  isInstalled 
                    ? 'from-green-900/50 to-emerald-900/50 border-green-500/30' 
                    : canInstall
                      ? 'from-slate-800/50 to-slate-900/50 border-slate-700/30 hover:border-cyan-500/50'
                      : 'from-gray-900/50 to-gray-800/50 border-gray-600/30 opacity-60'
                }`}
                onClick={() => !isInstalled && canInstall && setSelectedSystem(system)}
              >
                {/* System Icon */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    {system.category === 'transportation' && <Car className="w-5 h-5 text-blue-400" />}
                    {system.category === 'infrastructure' && <Building2 className="w-5 h-5 text-gray-400" />}
                    {system.category === 'energy' && <Zap className="w-5 h-5 text-yellow-400" />}
                    {system.category === 'environment' && <Recycle className="w-5 h-5 text-green-400" />}
                    {system.category === 'security' && <Shield className="w-5 h-5 text-red-400" />}
                    
                    <span className="text-white font-medium text-sm">{system.name}</span>
                  </div>
                  
                  {isInstalled && <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>}
                </div>

                <p className="text-gray-300 text-xs mb-3 line-clamp-2">{system.description}</p>

                {/* System Stats */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Chi phí:</span>
                    <span className="text-white font-bold">${system.cost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Hài lòng cư dân:</span>
                    <span className="text-cyan-400 font-bold">+{system.citizenSatisfaction}%</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Hiệu quả:</span>
                    <span className="text-blue-400 font-bold">+{system.efficiency}%</span>
                  </div>
                </div>

                {/* IoT Devices */}
                <div className="mt-3 pt-3 border-t border-gray-600/30">
                  <div className="text-xs text-gray-400 mb-1">Thiết bị IoT:</div>
                  <div className="flex flex-wrap gap-1">
                    {system.iotDevices.slice(0, 2).map(device => (
                      <span key={device.id} className="text-xs bg-cyan-500/20 text-cyan-300 px-1 py-0.5 rounded">
                        {device.name}
                      </span>
                    ))}
                    {system.iotDevices.length > 2 && (
                      <span className="text-xs text-gray-400">+{system.iotDevices.length - 2}</span>
                    )}
                  </div>
                </div>

                {/* Prerequisites */}
                {missingPrereqs.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-red-600/30">
                    <div className="text-xs text-red-400 mb-1">Cần có trước:</div>
                    <div className="flex flex-wrap gap-1">
                      {missingPrereqs.map(prereqId => (
                        <span key={prereqId} className="text-xs bg-red-500/20 text-red-300 px-1 py-0.5 rounded">
                          {SMART_SYSTEMS.find(s => s.id === prereqId)?.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Install Button */}
                {!isInstalled && canInstall && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      installSystem(system);
                    }}
                    className="w-full mt-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-2 px-3 rounded-lg font-medium transition-all duration-200 text-sm"
                  >
                    Cài Đặt Hệ Thống
                  </button>
                )}

                {isInstalled && (
                  <div className="w-full mt-3 bg-green-500/20 border border-green-500/30 text-green-400 py-2 px-3 rounded-lg font-medium text-sm text-center">
                    ✓ Đã Cài Đặt
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Resource Status */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700/30">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Tình Trạng Tài Nguyên</h3>
            <div className="flex space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Database className="w-4 h-4 text-blue-400" />
                <span className="text-white">${cityResources.budget.toLocaleString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Lightbulb className="w-4 h-4 text-cyan-400" />
                <span className="text-white">{installedSystems.length} hệ thống</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">
                {Math.floor(cityResources.citizenHappiness)}%
              </div>
              <div className="text-sm text-gray-400">Hài Lòng</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">
                {Math.floor(cityResources.efficiency)}%
              </div>
              <div className="text-sm text-gray-400">Hiệu Quả</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">
                {Math.floor(cityResources.sustainability)}%
              </div>
              <div className="text-sm text-gray-400">Bền Vững</div>
            </div>
          </div>
        </div>

        {/* Continue to Monitoring */}
        {installedSystems.length >= 3 && (
          <div className="text-center">
            <button
              onClick={() => setGamePhase('monitoring')}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl font-bold transition-all duration-200 shadow-lg hover:shadow-green-500/25"
            >
              Bắt Đầu Giám Sát Thành Phố
            </button>
          </div>
        )}
      </div>
    );
  }

  if (gamePhase === 'monitoring') {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Giám Sát Thành Phố Thông Minh</h2>
          {render3DCityView()}
        </div>

        {/* Real-time Metrics Dashboard */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm p-4 rounded-xl border border-purple-500/30">
            <div className="flex items-center justify-between mb-2">
              <Building2 className="w-6 h-6 text-purple-400" />
              <span className="text-2xl font-bold text-white">{Math.floor(cityResources.citizenHappiness)}%</span>
            </div>
            <div className="text-sm text-gray-300">Hài Lòng Cư Dân</div>
            <div className="w-full bg-gray-700/50 rounded-full h-2 mt-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${cityResources.citizenHappiness}%` }}
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 backdrop-blur-sm p-4 rounded-xl border border-blue-500/30">
            <div className="flex items-center justify-between mb-2">
              <Gauge className="w-6 h-6 text-blue-400" />
              <span className="text-2xl font-bold text-white">{Math.floor(cityResources.efficiency)}%</span>
            </div>
            <div className="text-sm text-gray-300">Hiệu Quả Hệ Thống</div>
            <div className="w-full bg-gray-700/50 rounded-full h-2 mt-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${cityResources.efficiency}%` }}
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-sm p-4 rounded-xl border border-green-500/30">
            <div className="flex items-center justify-between mb-2">
              <Recycle className="w-6 h-6 text-green-400" />
              <span className="text-2xl font-bold text-white">{Math.floor(cityResources.sustainability)}%</span>
            </div>
            <div className="text-sm text-gray-300">Phát Triển Bền Vững</div>
            <div className="w-full bg-gray-700/50 rounded-full h-2 mt-2">
              <div
                className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${cityResources.sustainability}%` }}
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 backdrop-blur-sm p-4 rounded-xl border border-yellow-500/30">
            <div className="flex items-center justify-between mb-2">
              <Zap className="w-6 h-6 text-yellow-400" />
              <span className="text-2xl font-bold text-white">{score}</span>
            </div>
            <div className="text-sm text-gray-300">Điểm Số Tổng</div>
            <div className="text-xs text-yellow-300 mt-2">
              +{Math.floor((cityResources.citizenHappiness + cityResources.efficiency + cityResources.sustainability) / 10)}/phút
            </div>
          </div>
        </div>

        {/* IoT Systems Status */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/30">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Trạng Thái Hệ Thống IoT</h3>
            <div className="flex items-center space-x-2">
              <Cloud className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 text-sm">Kết nối: Ổn định</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {installedSystems.map(systemId => {
              const system = SMART_SYSTEMS.find(s => s.id === systemId);
              if (!system) return null;
              
              return (
                <div key={systemId} className="p-4 bg-slate-700/30 rounded-lg border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">{system.name}</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm">Hoạt động</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-gray-400">Dữ liệu/ngày:</span>
                      <span className="text-cyan-400 ml-1">{system.dataGenerated}MB</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Năng lượng:</span>
                      <span className={`ml-1 ${system.energyUsage < 0 ? 'text-green-400' : 'text-yellow-400'}`}>
                        {system.energyUsage < 0 ? '+' : ''}{Math.abs(system.energyUsage)}kW
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">IoT thiết bị:</span>
                      <span className="text-blue-400 ml-1">{system.iotDevices.length}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Bảo trì:</span>
                      <span className="text-orange-400 ml-1">${system.maintenanceCost}/tháng</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Simulation Controls */}
        <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-sm p-4 rounded-xl border border-indigo-500/30">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">Điều Khiển Mô Phỏng</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-gray-300 text-sm">Tốc độ:</span>
                <select
                  value={simulationSpeed}
                  onChange={(e) => setSimulationSpeed(Number(e.target.value))}
                  className="bg-slate-700 text-white px-3 py-1 rounded border border-slate-600 focus:border-indigo-500"
                >
                  <option value={0.5}>0.5x</option>
                  <option value={1}>1x</option>
                  <option value={2}>2x</option>
                  <option value={4}>4x</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <Monitor className="w-4 h-4 text-indigo-400" />
                <span className="text-indigo-400 text-sm">Thời gian thực</span>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        {notifications.length > 0 && (
          <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-sm p-4 rounded-xl border border-green-500/30">
            <h3 className="text-lg font-bold text-white mb-3">Thông Báo Hệ Thống</h3>
            <div className="space-y-2">
              {notifications.slice(-3).map((notification, index) => (
                <div key={index} className="p-2 bg-slate-700/30 rounded text-sm text-green-300 border border-green-500/20">
                  {notification}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Win Condition Progress */}
        <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/30">
          <h3 className="text-lg font-bold text-white mb-4">Mục Tiêu Thành Phố Thông Minh</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Hài lòng cư dân ≥ 80%</span>
              <span className={`font-bold ${cityResources.citizenHappiness >= 80 ? 'text-green-400' : 'text-yellow-400'}`}>
                {Math.floor(cityResources.citizenHappiness)}%
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Hiệu quả hệ thống ≥ 80%</span>
              <span className={`font-bold ${cityResources.efficiency >= 80 ? 'text-green-400' : 'text-yellow-400'}`}>
                {Math.floor(cityResources.efficiency)}%
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Phát triển bền vững ≥ 70%</span>
              <span className={`font-bold ${cityResources.sustainability >= 70 ? 'text-green-400' : 'text-yellow-400'}`}>
                {Math.floor(cityResources.sustainability)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'completed') {
    return (
      <div className="text-center space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">🏆 Chúc Mừng!</h2>
          <p className="text-xl text-cyan-400 mb-2">Thành phố thông minh của bạn đã hoàn thiện!</p>
          <p className="text-gray-300 mb-6">
            Bạn đã thành công xây dựng một thành phố IoT hiện đại với hệ thống thông minh tích hợp.
          </p>
          
          {render3DCityView()}
        </div>

        <div className="bg-gradient-to-br from-gold-900/50 to-yellow-900/50 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/30">
          <h3 className="text-xl font-bold text-white mb-4">Thành Tích Cuối Game</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Hệ thống đã cài đặt:</span>
                <span className="text-white font-bold">{installedSystems.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Hài lòng cư dân:</span>
                <span className="text-purple-400 font-bold">{Math.floor(cityResources.citizenHappiness)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Hiệu quả hệ thống:</span>
                <span className="text-blue-400 font-bold">{Math.floor(cityResources.efficiency)}%</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Phát triển bền vững:</span>
                <span className="text-green-400 font-bold">{Math.floor(cityResources.sustainability)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Thách thức đã giải quyết:</span>
                <span className="text-cyan-400 font-bold">{CITY_CHALLENGES.length - activeChallenges.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Điểm số cuối:</span>
                <span className="text-yellow-400 font-bold">{score + 500}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={onRestart}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl font-bold transition-all duration-200 mr-4"
          >
            Chơi Lại
          </button>
          <button
            onClick={() => onComplete(true, score + 500)}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl font-bold transition-all duration-200"
          >
            Hoàn Thành
          </button>
        </div>
      </div>
    );
  }

  return null;
}