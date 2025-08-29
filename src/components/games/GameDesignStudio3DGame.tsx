import React, { useState, useCallback, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere, Cylinder, Cone } from '@react-three/drei';
import { 
  RotateCcw, 
  Gamepad2, 
  Layers, 
  Volume2, 
  Palette,
  Code,
  Award,
  Target,
  Play,
  Users,
  Zap
} from 'lucide-react';

interface GameProps {
  onComplete: () => void;
  timeLeft: number;
  onRestart: () => void;
}

interface GameComponent {
  id: string;
  type: 'mechanics' | 'art' | 'audio' | 'ui' | 'story' | 'code';
  name: string;
  position: [number, number, number];
  color: string;
  developed: boolean;
  quality: number;
  complexity: number;
  dependencies: string[];
}

interface GameStudio3DSceneProps {
  components: GameComponent[];
  onComponentClick: (id: string) => void;
  selectedComponent: string | null;
  developmentMode: string;
  gameProgress: number;
}

const GameStudio3DScene: React.FC<GameStudio3DSceneProps> = ({ 
  components, 
  onComponentClick, 
  selectedComponent, 
  developmentMode,
  gameProgress 
}) => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#A855F7" />
      
      {/* Game Components */}
      {components.map((component) => (
        <group key={component.id} position={component.position}>
          {/* Base Component Shape */}
          {component.type === 'mechanics' && (
            <Box
              args={[1.5, component.developed ? 2 : 1.5, 1]}
              onClick={() => onComponentClick(component.id)}
            >
              <meshStandardMaterial
                color={component.color}
                transparent
                opacity={selectedComponent === component.id ? 1 : 0.8}
                emissive={component.developed ? component.color : '#000000'}
                emissiveIntensity={component.developed ? 0.1 : 0}
              />
            </Box>
          )}
          
          {component.type === 'art' && (
            <Cone
              args={[1, component.developed ? 2.5 : 2, 8]}
              onClick={() => onComponentClick(component.id)}
            >
              <meshStandardMaterial
                color={component.color}
                transparent
                opacity={selectedComponent === component.id ? 1 : 0.8}
                emissive={component.developed ? component.color : '#000000'}
                emissiveIntensity={component.developed ? 0.1 : 0}
              />
            </Cone>
          )}
          
          {['audio', 'ui', 'story', 'code'].includes(component.type) && (
            <Cylinder
              args={[1, component.developed ? 1.3 : 1, component.developed ? 2.2 : 1.8, 16]}
              onClick={() => onComponentClick(component.id)}
            >
              <meshStandardMaterial
                color={component.color}
                transparent
                opacity={selectedComponent === component.id ? 1 : 0.8}
                emissive={component.developed ? component.color : '#000000'}
                emissiveIntensity={component.developed ? 0.1 : 0}
              />
            </Cylinder>
          )}
          
          {/* Quality Stars */}
          {component.developed && component.quality >= 75 && (
            <group position={[0, 2, 0]}>
              {Array.from({ length: Math.floor(component.quality / 25) }).map((_, i) => (
                <Sphere key={i} args={[0.1, 8, 8]} position={[(i - 1.5) * 0.3, 0, 0]}>
                  <meshBasicMaterial color="#FFD700" />
                </Sphere>
              ))}
            </group>
          )}
          
          {/* Complexity Indicators */}
          <group position={[1.5, 0, 0]}>
            {Array.from({ length: component.complexity }).map((_, i) => (
              <Box key={i} args={[0.2, 0.2, 0.2]} position={[0, i * 0.3 - 0.3, 0]}>
                <meshBasicMaterial
                  color={component.complexity === 1 ? '#10B981' : 
                        component.complexity === 2 ? '#F59E0B' : '#EF4444'}
                />
              </Box>
            ))}
          </group>
          
          {/* Component Labels */}
          <Text
            position={[0, component.developed ? 2.8 : 2.3, 0]}
            fontSize={0.35}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {component.name}
          </Text>
          
          {/* Development Animation */}
          {developmentMode === 'developing' && selectedComponent === component.id && (
            <group>
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i / 8) * Math.PI * 2;
                const radius = 2.5;
                return (
                  <Box key={i} args={[0.3, 0.3, 0.3]} position={[
                    Math.cos(angle + Date.now() * 0.002) * radius,
                    Math.sin(angle + Date.now() * 0.002) * radius,
                    0
                  ]}>
                    <meshBasicMaterial color="#A855F7" />
                  </Box>
                );
              })}
            </group>
          )}
        </group>
      ))}
      
      {/* Game Progress Visualization */}
      <group position={[0, -4, 0]}>
        <Cylinder args={[4, 4, 0.2, 32]}>
          <meshBasicMaterial color="#1F2937" />
        </Cylinder>
        <Cylinder args={[4 * (gameProgress / 100), 4 * (gameProgress / 100), 0.3, 32]}>
          <meshBasicMaterial color="#A855F7" />
        </Cylinder>
        <Text
          position={[0, 0.5, 0]}
          fontSize={0.6}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Game Progress: {Math.round(gameProgress)}%
        </Text>
      </group>
      
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </>
  );
};

const GameDesignStudio3DGame: React.FC<GameProps> = ({ onComplete, timeLeft, onRestart }) => {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [developedComponents, setDevelopedComponents] = useState<Set<string>>(new Set());
  const [score, setScore] = useState(0);
  const [developmentMode, setDevelopmentMode] = useState<'planning' | 'developing' | 'testing' | 'completed'>('planning');
  const [teamMotivation, setTeamMotivation] = useState(80);

  const initialComponents: GameComponent[] = useMemo(() => [
    {
      id: 'core-mechanics',
      type: 'mechanics',
      name: 'Core Mechanics',
      position: [0, 2, 0],
      color: '#EF4444',
      developed: false,
      quality: 0,
      complexity: 3,
      dependencies: []
    },
    {
      id: 'character-art',
      type: 'art',
      name: 'Character Art',
      position: [-3, 1, 0],
      color: '#F59E0B',
      developed: false,
      quality: 0,
      complexity: 2,
      dependencies: ['core-mechanics']
    },
    {
      id: 'environment-art',
      type: 'art',
      name: 'Environment Art',
      position: [-3, -1, 0],
      color: '#F59E0B',
      developed: false,
      quality: 0,
      complexity: 2,
      dependencies: ['core-mechanics']
    },
    {
      id: 'sound-effects',
      type: 'audio',
      name: 'Sound Effects',
      position: [3, 1, 0],
      color: '#10B981',
      developed: false,
      quality: 0,
      complexity: 2,
      dependencies: ['core-mechanics']
    },
    {
      id: 'music',
      type: 'audio',
      name: 'Background Music',
      position: [3, -1, 0],
      color: '#10B981',
      developed: false,
      quality: 0,
      complexity: 1,
      dependencies: []
    },
    {
      id: 'user-interface',
      type: 'ui',
      name: 'User Interface',
      position: [0, 0, 2],
      color: '#3B82F6',
      developed: false,
      quality: 0,
      complexity: 2,
      dependencies: ['core-mechanics']
    },
    {
      id: 'game-story',
      type: 'story',
      name: 'Game Story',
      position: [0, 0, -2],
      color: '#8B5CF6',
      developed: false,
      quality: 0,
      complexity: 2,
      dependencies: []
    },
    {
      id: 'game-engine',
      type: 'code',
      name: 'Game Engine',
      position: [0, -2, 0],
      color: '#06B6D4',
      developed: false,
      quality: 0,
      complexity: 3,
      dependencies: ['core-mechanics', 'user-interface']
    }
  ], []);

  const [components, setComponents] = useState<GameComponent[]>(initialComponents);

  const selectedComponentData = useMemo(() => 
    components.find(c => c.id === selectedComponent), [components, selectedComponent]
  );

  const gameProgress = useMemo(() => {
    const totalComponents = components.length;
    const developedCount = developedComponents.size;
    const qualityAverage = components
      .filter(c => c.developed)
      .reduce((sum, c) => sum + c.quality, 0) / Math.max(developedCount, 1);
    
    return (developedCount / totalComponents) * 70 + (qualityAverage / 100) * 30;
  }, [components, developedComponents]);

  const developComponent = useCallback((componentId: string) => {
    if (developedComponents.has(componentId)) return;

    const component = components.find(c => c.id === componentId);
    if (!component) return;

    // Check dependencies
    const missingDependencies = component.dependencies.filter(dep => !developedComponents.has(dep));
    if (missingDependencies.length > 0) {
      return; // Cannot develop without dependencies
    }

    setDevelopmentMode('developing');

    setTimeout(() => {
      // Calculate quality based on team motivation and complexity
      const baseQuality = Math.random() * 50 + 30; // 30-80 base
      const motivationBonus = (teamMotivation / 100) * 30; // Up to 30 bonus
      const complexityPenalty = component.complexity * 5; // Complexity reduces quality
      const finalQuality = Math.min(100, Math.max(20, Math.round(baseQuality + motivationBonus - complexityPenalty)));

      // Calculate score
      let componentScore = finalQuality;
      componentScore += component.complexity * 25; // Complexity bonus
      
      // Dependency bonus
      const dependencyBonus = component.dependencies.length * 15;
      componentScore += dependencyBonus;

      setScore(prev => prev + componentScore);
      setDevelopedComponents(prev => new Set([...prev, componentId]));
      
      setComponents(prev => prev.map(c => 
        c.id === componentId ? { ...c, developed: true, quality: finalQuality } : c
      ));

      // Update team motivation based on quality
      setTeamMotivation(prev => {
        const change = finalQuality > 80 ? 5 : finalQuality > 60 ? 2 : -3;
        return Math.max(20, Math.min(100, prev + change));
      });

      // Check for completion
      if (developedComponents.size >= 6) {
        setDevelopmentMode('completed');
        setTimeout(() => onComplete(), 2000);
      } else {
        setDevelopmentMode('planning');
      }
      
      setSelectedComponent(null);
    }, 3000);
  }, [developedComponents, components, teamMotivation, onComplete]);

  const getComponentIcon = (type: string) => {
    switch (type) {
      case 'mechanics': return <Gamepad2 className="w-4 h-4" />;
      case 'art': return <Palette className="w-4 h-4" />;
      case 'audio': return <Volume2 className="w-4 h-4" />;
      case 'ui': return <Layers className="w-4 h-4" />;
      case 'story': return <Users className="w-4 h-4" />;
      case 'code': return <Code className="w-4 h-4" />;
      default: return <Target className="w-4 h-4" />;
    }
  };

  const getComplexityColor = (complexity: number) => {
    switch (complexity) {
      case 1: return 'text-green-400';
      case 2: return 'text-yellow-400';
      case 3: return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getComplexityText = (complexity: number) => {
    switch (complexity) {
      case 1: return 'Simple';
      case 2: return 'Medium';
      case 3: return 'Complex';
      default: return 'Unknown';
    }
  };

  const getQualityColor = (quality: number) => {
    if (quality >= 80) return 'text-green-400';
    if (quality >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const canDevelop = (component: GameComponent) => {
    return component.dependencies.every(dep => developedComponents.has(dep));
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-black/20">
        <div className="flex items-center gap-4">
          <Gamepad2 className="w-8 h-8 text-purple-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">Game Design Studio 3D</h2>
            <p className="text-purple-200">Design and develop your dream game</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-white font-bold">Score: {score}</div>
            <div className="text-purple-200">{timeLeft}s</div>
          </div>
          <button
            onClick={onRestart}
            className="p-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
          >
            <RotateCcw className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* 3D Scene */}
        <div className="flex-1 relative">
          <Canvas camera={{ position: [8, 6, 8], fov: 60 }}>
            <GameStudio3DScene
              components={components}
              onComponentClick={setSelectedComponent}
              selectedComponent={selectedComponent}
              developmentMode={developmentMode}
              gameProgress={gameProgress}
            />
          </Canvas>
          
          {developmentMode === 'developing' && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin w-20 h-20 border-8 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-white text-xl">Developing {selectedComponentData?.name}...</p>
                <p className="text-purple-200 mt-2">Coding, designing, and testing component</p>
              </div>
            </div>
          )}
        </div>

        {/* Control Panel */}
        <div className="w-80 bg-black/40 p-6 space-y-4">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">Development Studio</h3>
            <div className="flex justify-center gap-4 text-sm mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{developedComponents.size}</div>
                <div className="text-gray-300">Components</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{Math.round(gameProgress)}%</div>
                <div className="text-gray-300">Progress</div>
              </div>
            </div>
            
            {/* Team Motivation Meter */}
            <div className="bg-black/30 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-white text-sm font-medium">Team Motivation</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${teamMotivation}%` }}
                ></div>
              </div>
              <div className="text-center mt-1">
                <span className={`text-sm font-bold ${getQualityColor(teamMotivation)}`}>
                  {teamMotivation}%
                </span>
              </div>
            </div>
          </div>

          {selectedComponentData && (
            <div className="bg-white/10 rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2">
                {getComponentIcon(selectedComponentData.type)}
                <h4 className="font-bold text-white">{selectedComponentData.name}</h4>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="text-gray-400">Type:</span>
                  <span className="ml-2 px-2 py-1 rounded text-xs bg-purple-600 text-white capitalize">
                    {selectedComponentData.type}
                  </span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Complexity:</span>
                  <span className={`font-bold ${getComplexityColor(selectedComponentData.complexity)}`}>
                    {getComplexityText(selectedComponentData.complexity)}
                  </span>
                </div>

                {selectedComponentData.dependencies.length > 0 && (
                  <div className="text-sm">
                    <span className="text-gray-400">Dependencies:</span>
                    <div className="mt-1 space-y-1">
                      {selectedComponentData.dependencies.map(depId => {
                        const depComponent = components.find(c => c.id === depId);
                        const isCompleted = developedComponents.has(depId);
                        return (
                          <div key={depId} className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${isCompleted ? 'bg-green-500' : 'bg-red-500'}`}></div>
                            <span className={`text-xs ${isCompleted ? 'text-green-400' : 'text-red-400'}`}>
                              {depComponent?.name || depId}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {selectedComponentData.developed && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Quality:</span>
                    <span className={`font-bold ${getQualityColor(selectedComponentData.quality)}`}>
                      {selectedComponentData.quality}%
                    </span>
                  </div>
                )}
              </div>

              {!selectedComponentData.developed ? (
                <button
                  onClick={() => developComponent(selectedComponentData.id)}
                  disabled={developmentMode === 'developing' || !canDevelop(selectedComponentData)}
                  className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white py-2 px-4 rounded transition-colors"
                >
                  <Play className="w-4 h-4" />
                  {canDevelop(selectedComponentData) ? 'Develop' : 'Missing Dependencies'}
                </button>
              ) : (
                <div className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-4 rounded">
                  <Award className="w-4 h-4" />
                  Completed
                </div>
              )}
            </div>
          )}

          <div className="space-y-2">
            <h4 className="font-bold text-white">Game Components:</h4>
            {components.map(component => (
              <div
                key={component.id}
                onClick={() => setSelectedComponent(component.id)}
                className={`p-3 rounded cursor-pointer transition-colors ${
                  selectedComponent === component.id 
                    ? 'bg-purple-600/50 border border-purple-400' 
                    : 'bg-white/5 hover:bg-white/10'
                } ${component.developed ? 'border-l-4 border-green-500' : ''} ${
                  !canDevelop(component) && !component.developed ? 'opacity-60' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getComponentIcon(component.type)}
                    <span className="text-white text-sm font-medium">{component.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold ${getComplexityColor(component.complexity)}`}>
                      {getComplexityText(component.complexity)}
                    </span>
                    {component.developed && (
                      <span className={`text-xs font-bold ${getQualityColor(component.quality)}`}>
                        {component.quality}%
                      </span>
                    )}
                    {component.developed && <Award className="w-4 h-4 text-green-400" />}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-black/30 rounded-lg p-3 text-xs text-gray-300">
            <h5 className="font-bold text-white mb-2">Development Tips:</h5>
            <ul className="space-y-1">
              <li>• Start with core mechanics first</li>
              <li>• Complete dependencies before dependent components</li>
              <li>• Higher team motivation improves quality</li>
              <li>• Complex components give more points</li>
              <li>• Quality affects overall game success</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDesignStudio3DGame;