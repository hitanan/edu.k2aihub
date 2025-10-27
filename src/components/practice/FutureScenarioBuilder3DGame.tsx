import React, { useState, useCallback, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Sphere } from '@react-three/drei';
import { RotateCcw, Target, Award, TrendingUp, Zap, Globe, Users, Brain } from 'lucide-react';

interface GameProps {
  onComplete: (success: boolean, rawScore?: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface Scenario {
  id: string;
  title: string;
  category: 'technology' | 'social' | 'economic' | 'environmental';
  position: [number, number, number];
  color: string;
  implemented: boolean;
  impact: number;
  feasibility: number;
  connections: string[];
  description: string;
}

interface Future3DSceneProps {
  scenarios: Scenario[];
  onScenarioClick: (id: string) => void;
  selectedScenario: string | null;
  buildingMode: string;
}

const Future3DScene: React.FC<Future3DSceneProps> = ({ scenarios, onScenarioClick, selectedScenario }) => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#4F46E5" />

      {/* Future Scenarios */}
      {scenarios.map((scenario) => (
        <group key={scenario.id} position={scenario.position}>
          <Sphere args={[scenario.implemented ? 0.8 : 0.6, 32, 32]} onClick={() => onScenarioClick(scenario.id)}>
            <meshStandardMaterial
              color={scenario.color}
              transparent
              opacity={selectedScenario === scenario.id ? 1 : 0.8}
              emissive={selectedScenario === scenario.id ? scenario.color : '#000000'}
              emissiveIntensity={selectedScenario === scenario.id ? 0.2 : 0}
            />
          </Sphere>

          {/* Node Labels */}
          <Text position={[0, 1.2, 0]} fontSize={0.3} color="white" anchorX="center" anchorY="middle">
            {scenario.title}
          </Text>

          {scenario.implemented && (
            <Sphere args={[1.2, 16, 16]} position={[0, 0, 0]}>
              <meshBasicMaterial color={scenario.color} transparent opacity={0.1} />
            </Sphere>
          )}
        </group>
      ))}

      {/* Connection Lines */}
      {scenarios.map((scenario) =>
        scenario.connections.map((connectionId) => {
          const targetScenario = scenarios.find((s) => s.id === connectionId);
          if (!targetScenario) return null;

          const positions = new Float32Array([...scenario.position, ...targetScenario.position]);

          return (
            <line key={`${scenario.id}-${connectionId}`}>
              <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
              </bufferGeometry>
              <lineBasicMaterial color="#64748B" transparent opacity={0.6} />
            </line>
          );
        }),
      )}

      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </>
  );
};

const FutureScenarioBuilder3DGame: React.FC<GameProps> = ({ onComplete, timeLeft, onRestart }) => {
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [implementedScenarios, setImplementedScenarios] = useState<Set<string>>(new Set());
  const [score, setScore] = useState(0);
  const [gamePhase, setGamePhase] = useState<'building' | 'analyzing' | 'completed'>('building');

  const initialScenarios: Scenario[] = useMemo(
    () => [
      {
        id: 'ai-governance',
        title: 'AI Governance',
        description: 'Implement comprehensive AI ethics and regulation frameworks',
        position: [0, 2, 0],
        connections: ['digital-citizenship', 'smart-cities'],
        impact: 85,
        feasibility: 75,
        category: 'technology',
        color: '#3B82F6',
        implemented: false,
      },
      {
        id: 'climate-tech',
        title: 'Climate Technology',
        description: 'Deploy advanced carbon capture and renewable energy systems',
        position: [-3, 0, 2],
        connections: ['sustainable-transport', 'green-economy'],
        impact: 95,
        feasibility: 70,
        category: 'environmental',
        color: '#10B981',
        implemented: false,
      },
      {
        id: 'digital-citizenship',
        title: 'Digital Citizenship',
        description: 'Establish digital rights and cyber security frameworks',
        position: [3, 1, -1],
        connections: ['ai-governance', 'social-equity'],
        impact: 75,
        feasibility: 85,
        category: 'social',
        color: '#F59E0B',
        implemented: false,
      },
      {
        id: 'green-economy',
        title: 'Green Economy',
        description: 'Transition to sustainable economic models and circular economy',
        position: [-2, -1, -2],
        connections: ['climate-tech', 'social-equity'],
        impact: 90,
        feasibility: 65,
        category: 'economic',
        color: '#EF4444',
        implemented: false,
      },
      {
        id: 'smart-cities',
        title: 'Smart Cities',
        description: 'Develop intelligent urban infrastructure and IoT integration',
        position: [1, -2, 1],
        connections: ['ai-governance', 'sustainable-transport'],
        impact: 80,
        feasibility: 80,
        category: 'technology',
        color: '#8B5CF6',
        implemented: false,
      },
      {
        id: 'social-equity',
        title: 'Social Equity',
        description: 'Ensure equitable access to technology and opportunities',
        position: [0, 0, 3],
        connections: ['digital-citizenship', 'green-economy'],
        impact: 85,
        feasibility: 70,
        category: 'social',
        color: '#EC4899',
        implemented: false,
      },
      {
        id: 'sustainable-transport',
        title: 'Sustainable Transport',
        description: 'Implement electric and autonomous transportation systems',
        position: [-1, 1, -3],
        connections: ['climate-tech', 'smart-cities'],
        impact: 70,
        feasibility: 90,
        category: 'environmental',
        color: '#06B6D4',
        implemented: false,
      },
    ],
    [],
  );

  const [scenarios, setScenarios] = useState<Scenario[]>(initialScenarios);

  const currentScenario = useMemo(
    () => scenarios.find((s) => s.id === selectedScenario),
    [scenarios, selectedScenario],
  );

  const implementScenario = useCallback(
    (scenarioId: string) => {
      if (implementedScenarios.has(scenarioId)) return;

      const scenario = scenarios.find((s) => s.id === scenarioId);
      if (!scenario) return;

      // Calculate impact bonus
      let impactBonus = scenario.impact;

      // Bonus for connected implemented scenarios
      const connectedImplemented = scenario.connections.filter((id: string) => implementedScenarios.has(id)).length;
      impactBonus += connectedImplemented * 15;

      setScore((prev) => prev + impactBonus);
      setImplementedScenarios((prev) => new Set([...prev, scenarioId]));

      setScenarios((prev) => prev.map((s) => (s.id === scenarioId ? { ...s, implemented: true } : s)));

      // Check for completion
      if (implementedScenarios.size >= 6) {
        setGamePhase('completed');
        setTimeout(() => onComplete(true, score), 2000);
      }
    },
    [implementedScenarios, scenarios, onComplete, score],
  );

  const analyzeScenario = useCallback(() => {
    if (!currentScenario) return;
    setGamePhase('analyzing');

    setTimeout(() => {
      implementScenario(currentScenario.id);
      setGamePhase('building');
      setSelectedScenario(null);
    }, 1500);
  }, [currentScenario, implementScenario]);

  const getCategoryIcon = (category: Scenario['category']) => {
    switch (category) {
      case 'technology':
        return <Zap className="w-4 h-4" />;
      case 'social':
        return <Users className="w-4 h-4" />;
      case 'economic':
        return <TrendingUp className="w-4 h-4" />;
      case 'environmental':
        return <Globe className="w-4 h-4" />;
    }
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-black/20">
        <div className="flex items-center gap-4">
          <Brain className="w-8 h-8 text-blue-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">Future Scenario Builder 3D</h2>
            <p className="text-blue-200">Build interconnected future scenarios</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-white font-bold">Score: {score}</div>
            <div className="text-blue-200">{timeLeft}s</div>
          </div>
          <button onClick={onRestart} className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
            <RotateCcw className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* 3D Scene */}
        <div className="flex-1 relative">
          <Canvas camera={{ position: [8, 8, 8], fov: 60 }}>
            <Future3DScene
              scenarios={scenarios}
              onScenarioClick={setSelectedScenario}
              selectedScenario={selectedScenario}
              buildingMode={gamePhase}
            />
          </Canvas>

          {gamePhase === 'analyzing' && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-white text-xl">Analyzing scenario impact...</p>
              </div>
            </div>
          )}
        </div>

        {/* Control Panel */}
        <div className="w-80 bg-black/40 p-6 space-y-4">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">Scenario Control</h3>
            <div className="flex justify-center gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{implementedScenarios.size}</div>
                <div className="text-gray-300">Implemented</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{scenarios.length - implementedScenarios.size}</div>
                <div className="text-gray-300">Remaining</div>
              </div>
            </div>
          </div>

          {currentScenario && (
            <div className="bg-white/10 rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2">
                {getCategoryIcon(currentScenario.category)}
                <h4 className="font-bold text-white">{currentScenario.title}</h4>
              </div>

              <p className="text-gray-300 text-sm">{currentScenario.description}</p>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Impact Score:</span>
                  <span className="text-yellow-400 font-bold">{currentScenario.impact}</span>
                </div>

                <div className="text-sm">
                  <span className="text-gray-400">Category:</span>
                  <span className="ml-2 px-2 py-1 rounded text-xs bg-blue-600 text-white">
                    {currentScenario.category}
                  </span>
                </div>

                {currentScenario.connections.length > 0 && (
                  <div className="text-sm">
                    <span className="text-gray-400">Connected to:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {currentScenario.connections.map((id: string) => {
                        const connected = scenarios.find((s) => s.id === id);
                        return connected ? (
                          <span
                            key={id}
                            className={`px-2 py-1 rounded text-xs ${
                              implementedScenarios.has(id) ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-200'
                            }`}
                          >
                            {connected.title}
                          </span>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}
              </div>

              {!currentScenario.implemented ? (
                <button
                  onClick={analyzeScenario}
                  disabled={gamePhase === 'analyzing'}
                  className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white py-2 px-4 rounded transition-colors"
                >
                  <Target className="w-4 h-4" />
                  Implement Scenario
                </button>
              ) : (
                <div className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded">
                  <Award className="w-4 h-4" />
                  Implemented
                </div>
              )}
            </div>
          )}

          <div className="space-y-2">
            <h4 className="font-bold text-white">All Scenarios:</h4>
            {scenarios.map((scenario) => (
              <div
                key={scenario.id}
                onClick={() => setSelectedScenario(scenario.id)}
                className={`p-3 rounded cursor-pointer transition-colors ${
                  selectedScenario === scenario.id
                    ? 'bg-blue-600/50 border border-blue-400'
                    : 'bg-white/5 hover:bg-white/10'
                } ${scenario.implemented ? 'border-l-4 border-green-500' : ''}`}
              >
                <div className="flex items-center gap-2">
                  {getCategoryIcon(scenario.category)}
                  <span className="text-white text-sm font-medium">{scenario.title}</span>
                  {scenario.implemented && <Award className="w-4 h-4 text-green-400" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureScenarioBuilder3DGame;
