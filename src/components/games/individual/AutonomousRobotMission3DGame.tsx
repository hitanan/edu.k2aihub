'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { 
  Bot, 
  Navigation, 
  Target, 
  Zap, 
  Shield, 
  Cpu, 
  Radar,
  Settings,
  MapPin,
  Activity,
  Battery,
  Wifi,
  AlertTriangle,
  CheckCircle2,
  Play,
  Pause
} from 'lucide-react';

interface AutonomousRobotMission3DGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface RobotSystem {
  id: string;
  name: string;
  status: 'online' | 'offline' | 'maintenance' | 'error';
  efficiency: number;
  battery: number;
  dataRate: number; // MB/s
  temperature: number; // Celsius
}

interface Mission {
  id: string;
  name: string;
  description: string;
  difficulty: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
  environment: 'indoor' | 'outdoor' | 'underwater' | 'space' | 'industrial';
  objectives: MissionObjective[];
  obstacles: Obstacle[];
  duration: number; // minutes
  rewards: {
    score: number;
    unlockSystems: string[];
    achievements: string[];
  };
}

interface MissionObjective {
  id: string;
  description: string;
  type: 'navigation' | 'collection' | 'surveillance' | 'rescue' | 'construction';
  completed: boolean;
  priority: 'low' | 'medium' | 'high' | 'critical';
}

interface Obstacle {
  id: string;
  type: 'static' | 'dynamic' | 'hazard';
  name: string;
  position: { x: number; y: number; z: number };
  severity: number; // 1-10
}

interface Robot3DPosition {
  x: number;
  y: number;
  z: number;
  rotation: { x: number; y: number; z: number };
}

const ROBOT_SYSTEMS: RobotSystem[] = [
  {
    id: 'navigation-system',
    name: 'Hệ Thống Điều Hướng',
    status: 'online',
    efficiency: 95,
    battery: 87,
    dataRate: 2.5,
    temperature: 45
  },
  {
    id: 'sensor-array',
    name: 'Cụm Cảm Biến',
    status: 'online',
    efficiency: 88,
    battery: 92,
    dataRate: 15.3,
    temperature: 38
  },
  {
    id: 'ai-processor',
    name: 'Bộ Xử Lý AI',
    status: 'online',
    efficiency: 91,
    battery: 75,
    dataRate: 45.7,
    temperature: 62
  },
  {
    id: 'communication-module',
    name: 'Module Liên Lạc',
    status: 'online',
    efficiency: 96,
    battery: 89,
    dataRate: 8.2,
    temperature: 41
  },
  {
    id: 'power-management',
    name: 'Quản Lý Năng Lượng',
    status: 'online',
    efficiency: 93,
    battery: 100,
    dataRate: 1.1,
    temperature: 35
  },
  {
    id: 'defense-system',
    name: 'Hệ Thống Phòng Thủ',
    status: 'offline',
    efficiency: 0,
    battery: 65,
    dataRate: 0,
    temperature: 25
  }
];

const MISSIONS: Mission[] = [
  {
    id: 'warehouse-patrol',
    name: 'Tuần Tra Kho Hàng Tự Động',
    description: 'Robot thực hiện nhiệm vụ tuần tra an ninh trong kho hàng, phát hiện bất thường và báo cáo.',
    difficulty: 'Cơ bản',
    environment: 'indoor',
    objectives: [
      {
        id: 'patrol-route-1',
        description: 'Hoàn thành tuyến tuần tra số 1',
        type: 'navigation',
        completed: false,
        priority: 'high'
      },
      {
        id: 'inventory-scan',
        description: 'Quét kiểm kê hàng hóa khu vực A',
        type: 'surveillance',
        completed: false,
        priority: 'medium'
      },
      {
        id: 'security-report',
        description: 'Gửi báo cáo tình hình an ninh',
        type: 'surveillance',
        completed: false,
        priority: 'low'
      }
    ],
    obstacles: [
      { id: 'forklift', type: 'dynamic', name: 'Xe nâng di chuyển', position: { x: 30, y: 0, z: 45 }, severity: 6 },
      { id: 'boxes', type: 'static', name: 'Thùng hàng xếp chồng', position: { x: 50, y: 0, z: 20 }, severity: 4 },
      { id: 'workers', type: 'dynamic', name: 'Công nhân làm việc', position: { x: 70, y: 0, z: 60 }, severity: 8 }
    ],
    duration: 15,
    rewards: {
      score: 200,
      unlockSystems: ['defense-system'],
      achievements: ['First Mission', 'Security Expert']
    }
  },
  {
    id: 'search-rescue',
    name: 'Tìm Kiếm Cứu Nạn Khẩn Cấp',
    description: 'Nhiệm vụ tìm kiếm và cứu hộ người bị nạn trong khu vực nguy hiểm với thời gian có hạn.',
    difficulty: 'Trung bình',
    environment: 'outdoor',
    objectives: [
      {
        id: 'locate-survivor',
        description: 'Xác định vị trí người bị nạn',
        type: 'surveillance',
        completed: false,
        priority: 'critical'
      },
      {
        id: 'clear-path',
        description: 'Dọn đường tiếp cận an toàn',
        type: 'construction',
        completed: false,
        priority: 'high'
      },
      {
        id: 'medical-supply',
        description: 'Chuyển phẩm cấp cứu đến hiện trường',
        type: 'collection',
        completed: false,
        priority: 'critical'
      },
      {
        id: 'establish-comm',
        description: 'Thiết lập liên lạc với đội cứu hộ',
        type: 'surveillance',
        completed: false,
        priority: 'high'
      }
    ],
    obstacles: [
      { id: 'debris', type: 'static', name: 'Đống đổ nát', position: { x: 25, y: 0, z: 35 }, severity: 9 },
      { id: 'fire-zone', type: 'hazard', name: 'Khu vực cháy', position: { x: 60, y: 0, z: 50 }, severity: 10 },
      { id: 'unstable-structure', type: 'hazard', name: 'Công trình không ổn định', position: { x: 80, y: 0, z: 30 }, severity: 8 }
    ],
    duration: 25,
    rewards: {
      score: 400,
      unlockSystems: ['sensor-array'],
      achievements: ['Life Saver', 'Emergency Response', 'Hero Robot']
    }
  },
  {
    id: 'space-exploration',
    name: 'Khám Phá Không Gian Sâu',
    description: 'Robot thực hiện nhiệm vụ khám phá bề mặt hành tinh xa lạ và thu thập dữ liệu khoa học.',
    difficulty: 'Nâng cao',
    environment: 'space',
    objectives: [
      {
        id: 'surface-mapping',
        description: 'Lập bản đồ địa hình bề mặt',
        type: 'surveillance',
        completed: false,
        priority: 'high'
      },
      {
        id: 'sample-collection',
        description: 'Thu thập mẫu đất đá và khí quyển',
        type: 'collection',
        completed: false,
        priority: 'critical'
      },
      {
        id: 'scientific-analysis',
        description: 'Phân tích thành phần hóa học',
        type: 'surveillance',
        completed: false,
        priority: 'medium'
      },
      {
        id: 'comm-relay',
        description: 'Truyền dữ liệu về Trái Đất',
        type: 'surveillance',
        completed: false,
        priority: 'high'
      },
      {
        id: 'base-setup',
        description: 'Lắp đặt trạm nghiên cứu tự động',
        type: 'construction',
        completed: false,
        priority: 'medium'
      }
    ],
    obstacles: [
      { id: 'crater', type: 'static', name: 'Hố thiên thạch lớn', position: { x: 40, y: -10, z: 40 }, severity: 7 },
      { id: 'solar-storm', type: 'hazard', name: 'Bão từ trường mặt trời', position: { x: 0, y: 0, z: 0 }, severity: 9 },
      { id: 'rocky-terrain', type: 'static', name: 'Địa hình đá gồ ghề', position: { x: 70, y: 5, z: 60 }, severity: 6 }
    ],
    duration: 40,
    rewards: {
      score: 800,
      unlockSystems: ['ai-processor', 'communication-module'],
      achievements: ['Space Pioneer', 'Scientific Discovery', 'Interplanetary Explorer', 'Ultimate Mission']
    }
  }
];

export default function AutonomousRobotMission3DGame({ 
  onComplete, 
  timeLeft, 
  onRestart 
}: AutonomousRobotMission3DGameProps) {
  const [currentMission, setCurrentMission] = useState<Mission | null>(null);
  const [gamePhase, setGamePhase] = useState<'briefing' | 'mission' | 'systems' | 'completed'>('briefing');
  const [robotSystems, setRobotSystems] = useState<RobotSystem[]>(ROBOT_SYSTEMS);
  const [robotPosition, setRobotPosition] = useState<Robot3DPosition>({
    x: 10,
    y: 0,
    z: 10,
    rotation: { x: 0, y: 0, z: 0 }
  });
  const [completedMissions, setCompletedMissions] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [missionProgress, setMissionProgress] = useState(0);
  const [systemAlerts, setSystemAlerts] = useState<string[]>([]);
  const [isRobotMoving, setIsRobotMoving] = useState(false);
  const [unlockedSystems, setUnlockedSystems] = useState<string[]>(['navigation-system', 'power-management']);

  // Mission simulation
  useEffect(() => {
    if (gamePhase === 'mission' && currentMission) {
      const interval = setInterval(() => {
        simulateRobotOperation();
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [gamePhase, currentMission]);

  const simulateRobotOperation = useCallback(() => {
    if (!currentMission) return;

    // Update robot systems
    setRobotSystems(prev => prev.map(system => ({
      ...system,
      battery: Math.max(0, system.battery - (Math.random() * 2)),
      temperature: Math.min(80, system.temperature + (Math.random() * 3 - 1.5)),
      efficiency: Math.max(70, Math.min(100, system.efficiency + (Math.random() * 10 - 5)))
    })));

    // Update mission progress
    setMissionProgress(prev => {
      const newProgress = Math.min(100, prev + Math.random() * 8);
      
      // Complete objectives based on progress
      if (newProgress > 25 && !currentMission.objectives[0].completed) {
        currentMission.objectives[0].completed = true;
        setSystemAlerts(prev => [...prev, `✅ Đã hoàn thành: ${currentMission.objectives[0].description}`]);
        setScore(prev => prev + 50);
      }
      if (newProgress > 50 && currentMission.objectives[1] && !currentMission.objectives[1].completed) {
        currentMission.objectives[1].completed = true;
        setSystemAlerts(prev => [...prev, `✅ Đã hoàn thành: ${currentMission.objectives[1].description}`]);
        setScore(prev => prev + 75);
      }
      if (newProgress > 75 && currentMission.objectives[2] && !currentMission.objectives[2].completed) {
        currentMission.objectives[2].completed = true;
        setSystemAlerts(prev => [...prev, `✅ Đã hoàn thành: ${currentMission.objectives[2].description}`]);
        setScore(prev => prev + 100);
      }

      // Complete mission
      if (newProgress >= 100) {
        setTimeout(() => completeMission(), 2000);
      }

      return newProgress;
    });

    // Simulate robot movement
    if (Math.random() > 0.7) {
      setRobotPosition(prev => ({
        ...prev,
        x: Math.max(0, Math.min(100, prev.x + (Math.random() * 10 - 5))),
        z: Math.max(0, Math.min(100, prev.z + (Math.random() * 10 - 5))),
        rotation: {
          ...prev.rotation,
          y: prev.rotation.y + (Math.random() * 20 - 10)
        }
      }));
      setIsRobotMoving(true);
      setTimeout(() => setIsRobotMoving(false), 1000);
    }

    // Random system alerts
    if (Math.random() > 0.8) {
      const alerts = [
        '⚠️ Phát hiện vật cản di động',
        '🔋 Mức năng lượng giảm nhẹ',
        '📡 Cập nhật dữ liệu từ cảm biến',
        '🎯 Đang tiếp cận mục tiêu',
        '🤖 AI đang phân tích môi trường'
      ];
      setSystemAlerts(prev => [...prev.slice(-4), alerts[Math.floor(Math.random() * alerts.length)]]);
    }
  }, [currentMission]);

  const startMission = (mission: Mission) => {
    setCurrentMission(mission);
    setGamePhase('mission');
    setMissionProgress(0);
    setSystemAlerts([`🚀 Bắt đầu nhiệm vụ: ${mission.name}`]);
    
    // Reset objectives
    mission.objectives.forEach(obj => obj.completed = false);
  };

  const completeMission = () => {
    if (!currentMission) return;

    setCompletedMissions(prev => [...prev, currentMission.id]);
    setScore(prev => prev + currentMission.rewards.score);
    
    // Unlock new systems
    currentMission.rewards.unlockSystems.forEach(systemId => {
      if (!unlockedSystems.includes(systemId)) {
        setUnlockedSystems(prev => [...prev, systemId]);
        setSystemAlerts(prev => [...prev, `🔓 Mở khóa hệ thống: ${ROBOT_SYSTEMS.find(s => s.id === systemId)?.name}`]);
      }
    });

    if (completedMissions.length >= 2) {
      setGamePhase('completed');
      onComplete(true, score + currentMission.rewards.score);
    } else {
      setTimeout(() => setGamePhase('briefing'), 3000);
    }
  };

  const activateSystem = (systemId: string) => {
    if (!unlockedSystems.includes(systemId)) return;
    
    setRobotSystems(prev => prev.map(system =>
      system.id === systemId
        ? { ...system, status: system.status === 'online' ? 'offline' : 'online' }
        : system
    ));

    const system = robotSystems.find(s => s.id === systemId);
    if (system) {
      setSystemAlerts(prev => [...prev, `${system.status === 'online' ? '🔴' : '🟢'} ${system.name}: ${system.status === 'online' ? 'Tắt' : 'Bật'}`]);
    }
  };

  const render3DRobotEnvironment = () => (
    <div className="relative w-full h-80 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-xl border border-cyan-500/30 overflow-hidden">
      {/* 3D Environment */}
      <div className="absolute inset-0" style={{
        background: `
          ${currentMission?.environment === 'space' ? 
            'radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.4) 0%, rgba(15,23,42,0.9) 70%)' :
          currentMission?.environment === 'outdoor' ?
            'linear-gradient(180deg, rgba(56,189,248,0.6) 0%, rgba(34,197,94,0.4) 50%, rgba(15,23,42,0.8) 100%)' :
            'linear-gradient(180deg, rgba(71,85,105,0.6) 0%, rgba(30,41,59,0.8) 100%)'
          }
        `,
        perspective: '1000px'
      }}>
        
        {/* Environment Elements */}
        {currentMission?.environment === 'space' && (
          <>
            {/* Stars */}
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
            {/* Planet surface */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-red-900 to-orange-800 opacity-60"></div>
          </>
        )}

        {currentMission?.environment === 'indoor' && (
          <>
            {/* Warehouse floor */}
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-gray-600 to-gray-500"></div>
            {/* Warehouse shelves */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="absolute bottom-4 bg-gray-700 rounded-sm"
                style={{
                  left: `${i * 15 + 10}%`,
                  width: '8%',
                  height: `${60 + Math.random() * 40}px`,
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${i * 5}deg) translateZ(${i * 2}px)`
                }}
              />
            ))}
          </>
        )}

        {currentMission?.environment === 'outdoor' && (
          <>
            {/* Ground */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-green-800 to-green-600 opacity-70"></div>
            {/* Trees/Debris */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute bottom-8 bg-gradient-to-t from-green-700 to-green-500 rounded-full"
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  width: `${10 + Math.random() * 15}px`,
                  height: `${30 + Math.random() * 40}px`,
                  transformStyle: 'preserve-3d',
                  transform: `translateZ(${Math.random() * 20}px)`
                }}
              />
            ))}
          </>
        )}

        {/* 3D Robot */}
        <div
          className={`absolute transition-all duration-1000 ${isRobotMoving ? 'animate-bounce' : ''}`}
          style={{
            left: `${robotPosition.x}%`,
            bottom: `${currentMission?.environment === 'space' ? 20 : currentMission?.environment === 'indoor' ? 8 : 12}%`,
            transform: `translateX(-50%) rotateY(${robotPosition.rotation.y}deg)`,
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Robot Body */}
          <div className="relative">
            <div 
              className="w-8 h-12 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-lg border-2 border-cyan-300 shadow-lg"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateX(15deg)'
              }}
            >
              {/* Robot Head */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full border-2 border-cyan-300">
                <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Robot Arms */}
              <div className="absolute top-2 -left-2 w-2 h-6 bg-gradient-to-b from-gray-400 to-gray-600 rounded transform rotate-12"></div>
              <div className="absolute top-2 -right-2 w-2 h-6 bg-gradient-to-b from-gray-400 to-gray-600 rounded transform -rotate-12"></div>
              
              {/* Status Light */}
              <div className={`absolute top-6 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full animate-pulse ${
                robotSystems.find(s => s.id === 'navigation-system')?.status === 'online' ? 'bg-green-400' : 'bg-red-400'
              }`}></div>
            </div>

            {/* Robot Tracks */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              <div className="w-1.5 h-2 bg-gray-700 rounded"></div>
              <div className="w-1.5 h-2 bg-gray-700 rounded"></div>
            </div>
          </div>

          {/* Navigation Path Visualization */}
          {gamePhase === 'mission' && (
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-1">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Mission Objectives Markers */}
        {currentMission && gamePhase === 'mission' && (
          <>
            {currentMission.objectives.map((objective, index) => (
              <div
                key={objective.id}
                className={`absolute transition-all duration-500 ${objective.completed ? 'opacity-50' : 'opacity-100'}`}
                style={{
                  left: `${20 + index * 25}%`,
                  bottom: '20%',
                  transform: 'translateX(-50%)'
                }}
              >
                <div className={`w-4 h-4 rounded-full border-2 animate-pulse ${
                  objective.completed 
                    ? 'bg-green-400 border-green-300'
                    : objective.priority === 'critical' 
                      ? 'bg-red-400 border-red-300'
                      : objective.priority === 'high'
                        ? 'bg-orange-400 border-orange-300'
                        : 'bg-blue-400 border-blue-300'
                }`}>
                  {objective.completed && (
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  )}
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-center text-white whitespace-nowrap">
                  {objective.type}
                </div>
              </div>
            ))}
          </>
        )}

        {/* Environment Info HUD */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm p-3 rounded-lg border border-cyan-500/30">
          <div className="text-cyan-400 text-sm font-bold mb-1">
            {currentMission ? `${currentMission.environment.toUpperCase()} ENVIRONMENT` : 'STANDBY MODE'}
          </div>
          <div className="text-xs text-gray-300">
            Position: ({Math.floor(robotPosition.x)}, {Math.floor(robotPosition.z)})
          </div>
          <div className="text-xs text-gray-300">
            Status: {isRobotMoving ? 'MOVING' : 'STATIONARY'}
          </div>
        </div>

        {/* Mission Progress */}
        {gamePhase === 'mission' && (
          <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm p-3 rounded-lg border border-cyan-500/30">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white text-sm font-bold">Tiến Độ Nhiệm Vụ</span>
              <span className="text-cyan-400 text-sm">{Math.floor(missionProgress)}%</span>
            </div>
            <div className="w-full bg-gray-700/50 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${missionProgress}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );

  if (gamePhase === 'briefing') {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Bot className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl font-bold text-white">Robot Mission Control 3D</h2>
            <Navigation className="w-8 h-8 text-blue-400" />
          </div>
          <p className="text-gray-300 mb-6">
            Điều khiển robot tự hành thực hiện các nhiệm vụ phức tạp trong môi trường 3D
          </p>
          
          {render3DRobotEnvironment()}
        </div>

        {/* Robot Systems Overview */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/30">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white flex items-center space-x-2">
              <Settings className="w-6 h-6 text-cyan-400" />
              <span>Hệ Thống Robot</span>
            </h3>
            <button
              onClick={() => setGamePhase('systems')}
              className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
            >
              Xem Chi Tiết
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {robotSystems.filter(system => unlockedSystems.includes(system.id)).map(system => (
              <div key={system.id} className="p-3 bg-slate-700/30 rounded-lg border border-slate-600/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{system.name}</span>
                  <div className={`w-2 h-2 rounded-full ${
                    system.status === 'online' ? 'bg-green-400 animate-pulse' : 'bg-red-400'
                  }`}></div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-gray-400">Hiệu quả:</span>
                    <span className="text-cyan-400 ml-1">{system.efficiency}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Pin:</span>
                    <span className={`ml-1 ${system.battery > 50 ? 'text-green-400' : 'text-orange-400'}`}>
                      {system.battery}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Selection */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MISSIONS.map(mission => {
            const isCompleted = completedMissions.includes(mission.id);
            const canStart = robotSystems.filter(s => unlockedSystems.includes(s.id) && s.status === 'online').length >= 3;
            
            return (
              <div
                key={mission.id}
                className={`relative bg-gradient-to-br backdrop-blur-sm p-6 rounded-xl border transition-all duration-300 ${
                  isCompleted
                    ? 'from-green-900/50 to-emerald-900/50 border-green-500/30'
                    : canStart
                      ? 'from-slate-800/50 to-slate-900/50 border-slate-700/30 hover:border-cyan-500/50 cursor-pointer'
                      : 'from-gray-900/50 to-gray-800/50 border-gray-600/30 opacity-60'
                }`}
                onClick={() => canStart && !isCompleted && startMission(mission)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {mission.environment === 'indoor' && <Bot className="w-6 h-6 text-blue-400" />}
                    {mission.environment === 'outdoor' && <Target className="w-6 h-6 text-green-400" />}
                    {mission.environment === 'space' && <Zap className="w-6 h-6 text-purple-400" />}
                    {mission.environment === 'underwater' && <Radar className="w-6 h-6 text-cyan-400" />}
                    {mission.environment === 'industrial' && <Shield className="w-6 h-6 text-orange-400" />}
                    
                    <div>
                      <h3 className="text-lg font-bold text-white">{mission.name}</h3>
                      <p className="text-sm text-gray-400">{mission.difficulty} • {mission.duration} phút</p>
                    </div>
                  </div>
                  
                  {isCompleted && <CheckCircle2 className="w-6 h-6 text-green-400" />}
                </div>

                <p className="text-gray-300 text-sm mb-4">{mission.description}</p>

                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Nhiệm vụ:</div>
                    <div className="text-xs text-gray-300">
                      {mission.objectives.length} objectives • {mission.obstacles.length} obstacles
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-400 mb-1">Phần thưởng:</div>
                    <div className="flex items-center space-x-2 text-xs">
                      <span className="text-yellow-400">+{mission.rewards.score} điểm</span>
                      <span className="text-blue-400">{mission.rewards.unlockSystems.length} hệ thống mới</span>
                    </div>
                  </div>
                </div>

                {!isCompleted && canStart && (
                  <button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2">
                    <Play className="w-4 h-4" />
                    <span>Bắt Đầu Nhiệm Vụ</span>
                  </button>
                )}

                {!canStart && !isCompleted && (
                  <div className="w-full mt-4 bg-gray-600/20 border border-gray-600/30 text-gray-400 py-2 px-4 rounded-lg text-center text-sm">
                    Cần ít nhất 3 hệ thống hoạt động
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Progress Summary */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/30">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Tiến Độ Nhiệm Vụ</h3>
              <p className="text-gray-300">
                Hoàn thành {completedMissions.length}/{MISSIONS.length} nhiệm vụ
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-cyan-400">{score}</div>
              <div className="text-sm text-gray-400">Điểm số</div>
            </div>
          </div>

          <div className="w-full bg-gray-700/50 rounded-full h-2 mt-4">
            <div
              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(completedMissions.length / MISSIONS.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'systems') {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Quản Lý Hệ Thống Robot</h2>
          {render3DRobotEnvironment()}
        </div>

        {/* System Control Panel */}
        <div className="grid md:grid-cols-2 gap-6">
          {robotSystems.map(system => {
            const isUnlocked = unlockedSystems.includes(system.id);
            
            return (
              <div
                key={system.id}
                className={`bg-gradient-to-br backdrop-blur-sm p-6 rounded-xl border transition-all duration-300 ${
                  isUnlocked
                    ? system.status === 'online'
                      ? 'from-green-900/30 to-emerald-900/30 border-green-500/30'
                      : 'from-slate-800/50 to-slate-900/50 border-slate-700/30'
                    : 'from-gray-900/50 to-gray-800/50 border-gray-600/30 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {system.id.includes('navigation') && <Navigation className="w-6 h-6 text-blue-400" />}
                    {system.id.includes('sensor') && <Radar className="w-6 h-6 text-cyan-400" />}
                    {system.id.includes('ai') && <Cpu className="w-6 h-6 text-purple-400" />}
                    {system.id.includes('communication') && <Wifi className="w-6 h-6 text-green-400" />}
                    {system.id.includes('power') && <Battery className="w-6 h-6 text-yellow-400" />}
                    {system.id.includes('defense') && <Shield className="w-6 h-6 text-red-400" />}
                    
                    <div>
                      <h3 className="text-lg font-bold text-white">{system.name}</h3>
                      <p className="text-sm text-gray-400">
                        {system.status.toUpperCase()} • {system.temperature}°C
                      </p>
                    </div>
                  </div>
                  
                  <div className={`w-4 h-4 rounded-full ${
                    system.status === 'online' ? 'bg-green-400 animate-pulse' :
                    system.status === 'error' ? 'bg-red-400 animate-pulse' :
                    'bg-gray-400'
                  }`}></div>
                </div>

                {/* System Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Hiệu Quả</div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${system.efficiency}%` }}
                      />
                    </div>
                    <div className="text-xs text-white mt-1">{system.efficiency}%</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Pin</div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${
                          system.battery > 50 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                          system.battery > 20 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                          'bg-gradient-to-r from-red-500 to-red-600'
                        }`}
                        style={{ width: `${system.battery}%` }}
                      />
                    </div>
                    <div className="text-xs text-white mt-1">{system.battery}%</div>
                  </div>
                </div>

                {/* System Stats */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Data Rate:</span>
                    <span className="text-cyan-400">{system.dataRate} MB/s</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Temperature:</span>
                    <span className={`${system.temperature > 60 ? 'text-red-400' : 'text-green-400'}`}>
                      {system.temperature}°C
                    </span>
                  </div>
                </div>

                {/* System Controls */}
                {isUnlocked ? (
                  <button
                    onClick={() => activateSystem(system.id)}
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                      system.status === 'online'
                        ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white'
                        : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white'
                    }`}
                  >
                    {system.status === 'online' ? 'Tắt Hệ Thống' : 'Bật Hệ Thống'}
                  </button>
                ) : (
                  <div className="w-full bg-gray-600/20 border border-gray-600/30 text-gray-400 py-2 px-4 rounded-lg text-center text-sm">
                    🔒 Chưa mở khóa
                  </div>
                )}

                {/* System Alerts */}
                {system.temperature > 70 && isUnlocked && (
                  <div className="mt-2 p-2 bg-red-500/20 border border-red-500/30 rounded text-xs text-red-300">
                    <AlertTriangle className="w-3 h-3 inline mr-1" />
                    Nhiệt độ cao - Cần bảo trì
                  </div>
                )}
                
                {system.battery < 20 && isUnlocked && (
                  <div className="mt-2 p-2 bg-yellow-500/20 border border-yellow-500/30 rounded text-xs text-yellow-300">
                    <Battery className="w-3 h-3 inline mr-1" />
                    Pin yếu - Cần sạc
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => setGamePhase('briefing')}
            className="px-8 py-3 bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white rounded-xl font-bold transition-all duration-200"
          >
            Quay Lại Briefing
          </button>
        </div>
      </div>
    );
  }

  if (gamePhase === 'mission' && currentMission) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Thực Thi Nhiệm Vụ</h2>
          <h3 className="text-xl text-cyan-400 mb-4">{currentMission.name}</h3>
          
          {render3DRobotEnvironment()}
        </div>

        {/* Mission Objectives */}
        <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
            <Target className="w-6 h-6 text-blue-400" />
            <span>Mục Tiêu Nhiệm Vụ</span>
          </h3>
          
          <div className="space-y-3">
            {currentMission.objectives.map((objective) => (
              <div key={objective.id} className={`p-3 rounded-lg border transition-all duration-300 ${
                objective.completed 
                  ? 'bg-green-900/30 border-green-500/30' 
                  : 'bg-slate-800/50 border-slate-600/30'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {objective.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    ) : (
                      <div className={`w-5 h-5 rounded-full border-2 ${
                        objective.priority === 'critical' ? 'border-red-400' :
                        objective.priority === 'high' ? 'border-orange-400' :
                        'border-blue-400'
                      }`}></div>
                    )}
                    <span className={`${
                      objective.completed ? 'text-gray-400 line-through' : 'text-white'
                    }`}>
                      {objective.description}
                    </span>
                  </div>
                  <div className={`px-2 py-1 rounded text-xs font-bold ${
                    objective.priority === 'critical' ? 'bg-red-500/20 text-red-300' :
                    objective.priority === 'high' ? 'bg-orange-500/20 text-orange-300' :
                    objective.priority === 'medium' ? 'bg-blue-500/20 text-blue-300' :
                    'bg-gray-500/20 text-gray-300'
                  }`}>
                    {objective.priority.toUpperCase()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Status */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/30">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
            <Activity className="w-6 h-6 text-cyan-400" />
            <span>Trạng Thái Hệ Thống</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            {robotSystems.filter(s => unlockedSystems.includes(s.id) && s.status === 'online').map(system => (
              <div key={system.id} className="p-3 bg-slate-700/30 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white text-sm font-medium">{system.name}</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Pin:</span>
                    <span className={`${system.battery > 50 ? 'text-green-400' : 'text-orange-400'}`}>
                      {Math.floor(system.battery)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Nhiệt độ:</span>
                    <span className={`${system.temperature > 60 ? 'text-red-400' : 'text-green-400'}`}>
                      {system.temperature}°C
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Alerts */}
        {systemAlerts.length > 0 && (
          <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-sm p-6 rounded-xl border border-green-500/30">
            <h3 className="text-lg font-bold text-white mb-4">Mission Log</h3>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {systemAlerts.slice(-5).map((alert, index) => (
                <div key={index} className="p-2 bg-slate-800/50 rounded text-sm text-gray-300">
                  <span className="text-gray-500 mr-2">
                    {new Date().toLocaleTimeString()}
                  </span>
                  {alert}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Emergency Controls */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setGamePhase('briefing')}
            className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg font-medium transition-all duration-200"
          >
            Hủy Nhiệm Vụ
          </button>
        </div>
      </div>
    );
  }

  if (gamePhase === 'completed') {
    return (
      <div className="text-center space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">🤖 Mission Accomplished!</h2>
          <p className="text-xl text-cyan-400 mb-2">Robot đã hoàn thành tất cả nhiệm vụ!</p>
          <p className="text-gray-300 mb-6">
            Kỹ năng điều khiển robot tự hành của bạn đã đạt trình độ chuyên nghiệp.
          </p>
          
          {render3DRobotEnvironment()}
        </div>

        <div className="bg-gradient-to-br from-gold-900/50 to-yellow-900/50 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/30">
          <h3 className="text-xl font-bold text-white mb-4">Mission Report</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Nhiệm vụ hoàn thành:</span>
                <span className="text-white font-bold">{completedMissions.length}/{MISSIONS.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Hệ thống đã mở khóa:</span>
                <span className="text-blue-400 font-bold">{unlockedSystems.length}/{robotSystems.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Robot uptime:</span>
                <span className="text-green-400 font-bold">98.5%</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Efficiency trung bình:</span>
                <span className="text-cyan-400 font-bold">
                  {Math.floor(robotSystems.reduce((acc, sys) => acc + sys.efficiency, 0) / robotSystems.length)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Nhiệm vụ khó khăn nhất:</span>
                <span className="text-purple-400 font-bold">Space Exploration</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Điểm số cuối:</span>
                <span className="text-yellow-400 font-bold">{score}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={onRestart}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl font-bold transition-all duration-200 mr-4"
          >
            Khởi Động Lại Robot
          </button>
          <button
            onClick={() => onComplete(true, score)}
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