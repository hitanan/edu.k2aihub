'use client';

import React, { useState, useEffect, useCallback, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  Sphere, 
  Environment,
  Grid,
  Stats
} from '@react-three/drei';
import { create } from 'zustand';
import * as THREE from 'three';
import { 
  Zap, 
  Magnet, 
  Atom, 
  Waves, 
  RotateCcw, 
  Play, 
  Pause, 
  TestTube2,
  Target,
  CheckCircle2,
  Clock
} from 'lucide-react';

interface PhysicsExperimentLab3DProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface Experiment {
  id: string;
  name: string;
  description: string;
  category: 'mechanics' | 'electricity' | 'magnetism' | 'waves' | 'thermodynamics';
  difficulty: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
  equipment: string[];
  procedure: string[];
  theory: string;
  safetyTips: string[];
  expectedResults: string;
  realWorldApplications: string[];
}

interface PhysicsState {
  currentExperiment: Experiment | null;
  isRunning: boolean;
  simulationData: {
    pendulumAngle: number;
    pendulumVelocity: number;
    waveAmplitude: number;
    waveFrequency: number;
    electricField: THREE.Vector3;
    magneticField: THREE.Vector3;
    particlePositions: THREE.Vector3[];
    particleVelocities: THREE.Vector3[];
  };
  experimentResults: {
    accuracy: number;
    timeToComplete: number;
    theoreticalScore: number;
  };
  setExperiment: (experiment: Experiment) => void;
  startSimulation: () => void;
  stopSimulation: () => void;
  updateSimulation: (data: Partial<PhysicsState['simulationData']>) => void;
  updateResults: (results: Partial<PhysicsState['experimentResults']>) => void;
}

const usePhysicsStore = create<PhysicsState>((set) => ({
  currentExperiment: null,
  isRunning: false,
  simulationData: {
    pendulumAngle: 0,
    pendulumVelocity: 0,
    waveAmplitude: 1,
    waveFrequency: 1,
    electricField: new THREE.Vector3(0, 1, 0),
    magneticField: new THREE.Vector3(0, 0, 1),
    particlePositions: [],
    particleVelocities: []
  },
  experimentResults: {
    accuracy: 0,
    timeToComplete: 0,
    theoreticalScore: 0
  },
  setExperiment: (experiment) => set({ currentExperiment: experiment }),
  startSimulation: () => set({ isRunning: true }),
  stopSimulation: () => set({ isRunning: false }),
  updateSimulation: (data) => set((state) => ({
    simulationData: { ...state.simulationData, ...data }
  })),
  updateResults: (results) => set((state) => ({
    experimentResults: { ...state.experimentResults, ...results }
  }))
}));

const PHYSICS_EXPERIMENTS: Experiment[] = [
  {
    id: 'pendulum',
    name: 'Con Lắc Đơn 3D',
    description: 'Mô phỏng chuyển động của con lắc đơn trong không gian 3D',
    category: 'mechanics',
    difficulty: 'Cơ bản',
    equipment: ['Quả cầu', 'Dây treo', 'Thước đo góc', 'Đồng hồ bấm giây'],
    procedure: [
      'Thiết lập con lắc với chiều dài dây treo',
      'Đo góc lệch ban đầu',
      'Thả con lắc và quan sát chuyển động',
      'Ghi nhận chu kỳ dao động',
      'So sánh với công thức lý thuyết'
    ],
    theory: 'Chu kỳ dao động của con lắc đơn: T = 2π√(L/g)',
    safetyTips: [
      'Đảm bảo khu vực xung quanh an toàn',
      'Cẩn thận khi thả quả cầu',
      'Đeo kính bảo hộ'
    ],
    expectedResults: 'Chu kỳ dao động phụ thuộc vào chiều dài dây và gia tốc trọng trường',
    realWorldApplications: ['Đồng hồ quả lắc', 'Seismometer', 'Foucault pendulum']
  },
  {
    id: 'electromagnetic_field',
    name: 'Trường Điện Từ 3D',
    description: 'Trực quan hóa trường điện từ và tương tác với hạt tích điện',
    category: 'electricity',
    difficulty: 'Nâng cao',
    equipment: ['Nguồn điện', 'Nam châm', 'Hạt tích điện', 'Máy đo từ trường'],
    procedure: [
      'Tạo trường điện và từ trường',
      'Đưa hạt tích điện vào trường',
      'Quan sát quỹ đạo chuyển động',
      'Thay đổi cường độ trường',
      'Phân tích lực tác động'
    ],
    theory: 'Lực Lorentz: F = q(E + v × B)',
    safetyTips: [
      'Sử dụng điện áp thấp',
      'Tránh tiếp xúc trực tiếp với điện',
      'Cẩn thận với từ trường mạnh'
    ],
    expectedResults: 'Hạt chuyển động theo quỹ đạo xoắn ốc trong trường điện từ',
    realWorldApplications: ['Cyclotron', 'MRI', 'Màn hình CRT', 'Aurora borealis']
  },
  {
    id: 'wave_interference',
    name: 'Giao Thoa Sóng 3D',
    description: 'Mô phỏng hiện tượng giao thoa sóng trong không gian 3D',
    category: 'waves',
    difficulty: 'Trung bình',
    equipment: ['Máy phát sóng', 'Màn hình hiển thị', 'Cảm biến sóng'],
    procedure: [
      'Thiết lập hai nguồn sóng',
      'Điều chỉnh tần số và biên độ',
      'Quan sát mẫu giao thoa',
      'Đo khoảng cách giữa các vân',
      'Xác định điều kiện cực đại/cực tiểu'
    ],
    theory: 'Điều kiện giao thoa: Δφ = 2πΔd/λ',
    safetyTips: [
      'Đeo tai nghe khi cần thiết',
      'Tránh âm thanh quá lớn',
      'Bảo vệ mắt khỏi laser'
    ],
    expectedResults: 'Xuất hiện các vân giao thoa với khoảng cách đều nhau',
    realWorldApplications: ['Holography', 'Interferometry', 'Noise cancellation']
  }
];

// 3D Pendulum Component
function PendulumSimulation() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { isRunning, simulationData, updateSimulation } = usePhysicsStore();
  const [time, setTime] = useState(0);

  useFrame((state, delta) => {
    if (!isRunning || !meshRef.current) return;

    const newTime = time + delta;
    setTime(newTime);

    // Simple pendulum physics
    const L = 2; // length
    const g = 9.8; // gravity
    const damping = 0.995;
    
    const { pendulumAngle, pendulumVelocity } = simulationData;
    
    // Calculate angular acceleration
    const angularAcceleration = -(g / L) * Math.sin(pendulumAngle);
    
    // Update velocity and angle
    const newVelocity = (pendulumVelocity + angularAcceleration * delta) * damping;
    const newAngle = pendulumAngle + newVelocity * delta;
    
    updateSimulation({
      pendulumAngle: newAngle,
      pendulumVelocity: newVelocity
    });

    // Update mesh position
    const x = L * Math.sin(newAngle);
    const y = -L * Math.cos(newAngle);
    meshRef.current.position.set(x, y, 0);
  });

  return (
    <group>
      {/* Pivot point */}
      <Sphere ref={null} args={[0.05]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#666" />
      </Sphere>
      
      {/* String */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[new Float32Array([
              0, 0, 0,
              2 * Math.sin(simulationData.pendulumAngle), 
              -2 * Math.cos(simulationData.pendulumAngle), 
              0
            ]), 3]}
            count={2}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#333" />
      </line>
      
      {/* Pendulum bob */}
      <Sphere ref={meshRef} args={[0.1]} position={[0, -2, 0]}>
        <meshStandardMaterial color="#ff6b6b" />
      </Sphere>
    </group>
  );
}

// Electromagnetic Field Visualization
function ElectromagneticField() {
  const { isRunning, simulationData, updateSimulation } = usePhysicsStore();
  const particlesRef = useRef<THREE.InstancedMesh>(null);
  const [particles] = useState(() => {
    const positions = [];
    const velocities = [];
    
    for (let i = 0; i < 50; i++) {
      positions.push(new THREE.Vector3(
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4
      ));
      velocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.1
      ));
    }
    
    updateSimulation({ 
      particlePositions: positions, 
      particleVelocities: velocities 
    });
    
    return { positions, velocities };
  });

  useFrame((state, delta) => {
    if (!isRunning || !particlesRef.current) return;

    const { electricField, magneticField } = simulationData;
    const matrix = new THREE.Matrix4();
    
    particles.positions.forEach((position, i) => {
      const velocity = particles.velocities[i];
      
      // Simulate Lorentz force: F = q(E + v × B)
      const electricForce = electricField.clone().multiplyScalar(0.001);
      const magneticForce = velocity.clone().cross(magneticField).multiplyScalar(0.001);
      const totalForce = electricForce.add(magneticForce);
      
      velocity.add(totalForce.multiplyScalar(delta));
      position.add(velocity.clone().multiplyScalar(delta));
      
      // Boundary conditions
      if (position.length() > 5) {
        position.normalize().multiplyScalar(5);
        velocity.multiplyScalar(-0.8);
      }
      
      matrix.setPosition(position);
      particlesRef.current!.setMatrixAt(i, matrix);
    });
    
    particlesRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group>
      {/* Electric field visualization */}
      <Grid 
        args={[5, 5]} 
        position={[0, 0, 0]} 
        rotation={[Math.PI / 2, 0, 0]}
        cellColor="#4fc3f7"
        sectionColor="#29b6f6"
      />
      
      {/* Particles */}
      <instancedMesh ref={particlesRef} args={[undefined, undefined, 50]}>
        <sphereGeometry args={[0.02]} />
        <meshStandardMaterial color="#ff9800" />
      </instancedMesh>
    </group>
  );
}

// Wave Interference Visualization
function WaveInterference() {
  const { isRunning, simulationData } = usePhysicsStore();
  const waveRef = useRef<THREE.Points>(null);
  const [time, setTime] = useState(0);

  useFrame((state, delta) => {
    if (!isRunning || !waveRef.current) return;

    setTime(time + delta);
    
    const { waveAmplitude, waveFrequency } = simulationData;
    const positions = waveRef.current.geometry.attributes.position;
    
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const z = positions.getZ(i);
      
      // Two wave sources
      const d1 = Math.sqrt(Math.pow(x + 1, 2) + Math.pow(z, 2));
      const d2 = Math.sqrt(Math.pow(x - 1, 2) + Math.pow(z, 2));
      
      const wave1 = waveAmplitude * Math.sin(waveFrequency * time - d1 * 2);
      const wave2 = waveAmplitude * Math.sin(waveFrequency * time - d2 * 2);
      
      positions.setY(i, wave1 + wave2);
    }
    
    positions.needsUpdate = true;
  });

  // Create wave grid
  const wavePositions = new Float32Array(10000 * 3);
  let index = 0;
  
  for (let x = -5; x < 5; x += 0.1) {
    for (let z = -5; z < 5; z += 0.1) {
      wavePositions[index] = x;
      wavePositions[index + 1] = 0;
      wavePositions[index + 2] = z;
      index += 3;
    }
  }

  return (
    <points ref={waveRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[wavePositions, 3]}
          count={wavePositions.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial color="#e91e63" size={0.02} />
    </points>
  );
}

function Scene3D() {
  const { currentExperiment } = usePhysicsStore();

  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
      <Suspense fallback={null}>
        <Environment preset="studio" />
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 10]} intensity={0.8} />
        
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        
        {currentExperiment?.id === 'pendulum' && <PendulumSimulation />}
        {currentExperiment?.id === 'electromagnetic_field' && <ElectromagneticField />}
        {currentExperiment?.id === 'wave_interference' && <WaveInterference />}
        
        <Stats />
      </Suspense>
    </Canvas>
  );
}

const PhysicsExperimentLab3D: React.FC<PhysicsExperimentLab3DProps> = ({
  onComplete,
  timeLeft,
  onRestart
}) => {
  const {
    currentExperiment,
    isRunning,
    simulationData,
    experimentResults,
    setExperiment,
    startSimulation,
    stopSimulation,
    updateResults
  } = usePhysicsStore();

  const [gamePhase, setGamePhase] = useState<'setup' | 'experiment' | 'analysis' | 'results'>('setup');
  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState<number>(0);

  const handleStartExperiment = useCallback((experiment: Experiment) => {
    setExperiment(experiment);
    setGamePhase('experiment');
    setStartTime(Date.now());
    
    // Initialize simulation based on experiment type
    if (experiment.id === 'pendulum') {
      usePhysicsStore.setState({
        simulationData: {
          ...simulationData,
          pendulumAngle: Math.PI / 4, // 45 degrees
          pendulumVelocity: 0
        }
      });
    }
  }, [simulationData, setExperiment]);

  const handleRunSimulation = useCallback(() => {
    if (isRunning) {
      stopSimulation();
    } else {
      startSimulation();
    }
  }, [isRunning, startSimulation, stopSimulation]);

  const handleCompleteExperiment = useCallback(() => {
    const timeToComplete = (Date.now() - startTime) / 1000;
    const timeBonus = Math.max(0, 100 - timeToComplete);
    const difficultyMultiplier = currentExperiment?.difficulty === 'Nâng cao' ? 1.5 : 
                                currentExperiment?.difficulty === 'Trung bình' ? 1.2 : 1;
    
    const finalScore = Math.round((timeBonus + 50) * difficultyMultiplier);
    
    updateResults({
      accuracy: 85 + Math.random() * 15, // Simulated accuracy
      timeToComplete,
      theoreticalScore: Math.min(100, 60 + Math.random() * 40)
    });
    
    setScore(finalScore);
    setGamePhase('results');
    
    setTimeout(() => {
      onComplete(true, finalScore);
    }, 2000);
  }, [currentExperiment, startTime, onComplete, updateResults]);

  useEffect(() => {
    if (timeLeft <= 0 && gamePhase !== 'results') {
      setGamePhase('results');
      onComplete(false, score);
    }
  }, [timeLeft, gamePhase, score, onComplete]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm p-4 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
            <TestTube2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Phòng Thí Nghiệm Vật Lý 3D</h2>
            <p className="text-sm text-gray-300">Khám phá các định luật vật lý qua mô phỏng 3D</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-yellow-400">
            <Clock className="w-4 h-4" />
            <span className="font-mono">{formatTime(timeLeft)}</span>
          </div>
          <div className="flex items-center space-x-2 text-green-400">
            <Target className="w-4 h-4" />
            <span className="font-mono">{score}</span>
          </div>
          <button
            onClick={onRestart}
            className="flex items-center space-x-2 bg-gray-600/50 hover:bg-gray-500/50 px-3 py-2 rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Làm lại</span>
          </button>
        </div>
      </div>

      {/* Game Content */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Experiment Selection Panel */}
        <div className="w-80 bg-black/20 backdrop-blur-sm p-6 overflow-y-auto border-r border-white/10">
          <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
            <Atom className="w-5 h-5" />
            <span>Thí Nghiệm</span>
          </h3>
          
          {gamePhase === 'setup' && (
            <div className="space-y-3">
              {PHYSICS_EXPERIMENTS.map((experiment) => (
                <div
                  key={experiment.id}
                  className="bg-white/10 rounded-lg p-4 cursor-pointer hover:bg-white/20 transition-colors"
                  onClick={() => handleStartExperiment(experiment)}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    {experiment.category === 'mechanics' && <Waves className="w-4 h-4 text-blue-400" />}
                    {experiment.category === 'electricity' && <Zap className="w-4 h-4 text-yellow-400" />}
                    {experiment.category === 'magnetism' && <Magnet className="w-4 h-4 text-red-400" />}
                    {experiment.category === 'waves' && <Waves className="w-4 h-4 text-green-400" />}
                    <span className="font-medium text-sm">{experiment.name}</span>
                  </div>
                  <p className="text-xs text-gray-300 mb-2">{experiment.description}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className={`px-2 py-1 rounded ${
                      experiment.difficulty === 'Cơ bản' ? 'bg-green-500/30 text-green-200' :
                      experiment.difficulty === 'Trung bình' ? 'bg-yellow-500/30 text-yellow-200' :
                      'bg-red-500/30 text-red-200'
                    }`}>
                      {experiment.difficulty}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {currentExperiment && gamePhase !== 'setup' && (
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold text-sm mb-2">{currentExperiment.name}</h4>
                <p className="text-xs text-gray-300 mb-3">{currentExperiment.description}</p>
                
                <div className="space-y-2">
                  <h5 className="text-xs font-semibold text-blue-300">Thiết bị cần thiết:</h5>
                  <ul className="text-xs space-y-1">
                    {currentExperiment.equipment.map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4">
                <h5 className="text-xs font-semibold text-green-300 mb-2">Điều khiển mô phỏng:</h5>
                <div className="space-y-2">
                  <button
                    onClick={handleRunSimulation}
                    className={`w-full flex items-center justify-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                      isRunning 
                        ? 'bg-red-500/30 hover:bg-red-500/40 text-red-200'
                        : 'bg-green-500/30 hover:bg-green-500/40 text-green-200'
                    }`}
                  >
                    {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    <span>{isRunning ? 'Dừng' : 'Chạy'}</span>
                  </button>
                  
                  {gamePhase === 'experiment' && (
                    <button
                      onClick={handleCompleteExperiment}
                      className="w-full flex items-center justify-center space-x-2 bg-blue-500/30 hover:bg-blue-500/40 text-blue-200 px-3 py-2 rounded-lg transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Hoàn thành</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 3D Visualization */}
        <div className="flex-1 relative">
          {currentExperiment ? (
            <Scene3D />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <TestTube2 className="w-16 h-16 mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">Chọn thí nghiệm để bắt đầu</h3>
                <p className="text-gray-300">Khám phá các định luật vật lý qua mô phỏng 3D tương tác</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results Modal */}
      {gamePhase === 'results' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full mx-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Thí nghiệm hoàn thành!</h3>
              <div className="space-y-2 text-sm text-gray-300 mb-6">
                <p>Điểm số: <span className="text-green-400 font-semibold">{score}</span></p>
                <p>Độ chính xác: <span className="text-blue-400">{experimentResults.accuracy.toFixed(1)}%</span></p>
                <p>Thời gian: <span className="text-yellow-400">{experimentResults.timeToComplete.toFixed(1)}s</span></p>
                <p>Lý thuyết: <span className="text-purple-400">{experimentResults.theoreticalScore.toFixed(1)}%</span></p>
              </div>
              <button
                onClick={onRestart}
                className="bg-blue-500 hover:bg-blue-400 px-6 py-2 rounded-lg transition-colors"
              >
                Thí nghiệm mới
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhysicsExperimentLab3D;
