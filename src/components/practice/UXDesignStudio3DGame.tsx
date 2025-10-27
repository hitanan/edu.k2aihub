import React, { useState, useCallback, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere, RoundedBox } from '@react-three/drei';
import {
  RotateCcw,
  Palette,
  Layout,
  Target,
  Award,
  Smartphone,
  Monitor,
  Tablet,
  MousePointer,
  Heart,
} from 'lucide-react';

interface GameProps {
  onComplete: (success: boolean, rawScore?: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface DesignElement {
  id: string;
  type: 'wireframe' | 'prototype' | 'visual' | 'interaction';
  title: string;
  position: [number, number, number];
  color: string;
  completed: boolean;
  quality: number;
  device: 'mobile' | 'desktop' | 'tablet';
}

interface UX3DSceneProps {
  elements: DesignElement[];
  onElementClick: (id: string) => void;
  selectedElement: string | null;
  designPhase: string;
}

const UX3DScene: React.FC<UX3DSceneProps> = ({ elements, onElementClick, selectedElement, designPhase }) => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#EC4899" />

      {/* Design Elements */}
      {elements.map((element) => (
        <group key={element.id} position={element.position}>
          {/* Base Shape */}
          <RoundedBox
            args={[1.5, element.completed ? 2 : 1.5, 0.2]}
            radius={0.1}
            smoothness={4}
            onClick={() => onElementClick(element.id)}
          >
            <meshStandardMaterial
              color={element.color}
              transparent
              opacity={selectedElement === element.id ? 1 : 0.8}
              emissive={selectedElement === element.id ? element.color : '#000000'}
              emissiveIntensity={selectedElement === element.id ? 0.1 : 0}
            />
          </RoundedBox>

          {/* Quality Indicator */}
          {element.completed && (
            <Sphere args={[0.2, 16, 16]} position={[0.8, 0.8, 0.2]}>
              <meshBasicMaterial
                color={element.quality >= 80 ? '#10B981' : element.quality >= 60 ? '#F59E0B' : '#EF4444'}
              />
            </Sphere>
          )}

          {/* Device Indicator */}
          <Box args={[0.3, 0.3, 0.1]} position={[-0.8, -0.8, 0.2]}>
            <meshBasicMaterial
              color={element.device === 'mobile' ? '#3B82F6' : element.device === 'desktop' ? '#10B981' : '#F59E0B'}
            />
          </Box>

          {/* Element Labels */}
          <Text
            position={[0, element.completed ? 1.2 : 1, 0]}
            fontSize={0.3}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {element.title}
          </Text>

          {/* Progress Ring */}
          {designPhase === 'designing' && selectedElement === element.id && (
            <group>
              {Array.from({ length: 16 }).map((_, i) => {
                const angle = (i / 16) * Math.PI * 2;
                const radius = 2;
                return (
                  <Sphere key={i} args={[0.1, 8, 8]} position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}>
                    <meshBasicMaterial color="#EC4899" />
                  </Sphere>
                );
              })}
            </group>
          )}
        </group>
      ))}

      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </>
  );
};

const UXDesignStudio3DGame: React.FC<GameProps> = ({ onComplete, timeLeft, onRestart }) => {
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [completedElements, setCompletedElements] = useState<Set<string>>(new Set());
  const [score, setScore] = useState(0);
  const [designPhase, setDesignPhase] = useState<'planning' | 'designing' | 'testing' | 'completed'>('planning');
  const [userFeedback, setUserFeedback] = useState(75);

  const initialElements: DesignElement[] = useMemo(
    () => [
      {
        id: 'mobile-wireframe',
        type: 'wireframe',
        title: 'Mobile Wireframe',
        position: [-3, 2, 0],
        color: '#64748B',
        completed: false,
        quality: 0,
        device: 'mobile',
      },
      {
        id: 'desktop-wireframe',
        type: 'wireframe',
        title: 'Desktop Wireframe',
        position: [-1, 2, 0],
        color: '#64748B',
        completed: false,
        quality: 0,
        device: 'desktop',
      },
      {
        id: 'mobile-prototype',
        type: 'prototype',
        title: 'Mobile Prototype',
        position: [-3, 0, 0],
        color: '#3B82F6',
        completed: false,
        quality: 0,
        device: 'mobile',
      },
      {
        id: 'desktop-prototype',
        type: 'prototype',
        title: 'Desktop Prototype',
        position: [-1, 0, 0],
        color: '#3B82F6',
        completed: false,
        quality: 0,
        device: 'desktop',
      },
      {
        id: 'visual-design',
        type: 'visual',
        title: 'Visual Design',
        position: [1, 1, 0],
        color: '#EC4899',
        completed: false,
        quality: 0,
        device: 'desktop',
      },
      {
        id: 'interaction-design',
        type: 'interaction',
        title: 'Interaction Design',
        position: [3, 1, 0],
        color: '#10B981',
        completed: false,
        quality: 0,
        device: 'mobile',
      },
      {
        id: 'tablet-adaptation',
        type: 'prototype',
        title: 'Tablet Version',
        position: [1, -1, 0],
        color: '#F59E0B',
        completed: false,
        quality: 0,
        device: 'tablet',
      },
      {
        id: 'accessibility',
        type: 'interaction',
        title: 'Accessibility',
        position: [3, -1, 0],
        color: '#8B5CF6',
        completed: false,
        quality: 0,
        device: 'desktop',
      },
    ],
    [],
  );

  const [elements, setElements] = useState<DesignElement[]>(initialElements);

  const selectedElementData = useMemo(
    () => elements.find((e) => e.id === selectedElement),
    [elements, selectedElement],
  );

  const designElement = useCallback(
    (elementId: string) => {
      if (completedElements.has(elementId)) return;

      const element = elements.find((e) => e.id === elementId);
      if (!element) return;

      setDesignPhase('designing');

      setTimeout(() => {
        // Calculate quality based on user feedback and random factors
        const baseQuality = Math.random() * 40 + 40; // 40-80 base
        const feedbackBonus = (userFeedback / 100) * 30; // Up to 30 bonus
        const finalQuality = Math.min(100, Math.round(baseQuality + feedbackBonus));

        // Calculate score
        let elementScore = finalQuality;

        // Bonus for completing related elements
        const relatedCompleted = elements.filter(
          (e) => e.device === element.device && completedElements.has(e.id),
        ).length;
        elementScore += relatedCompleted * 10;

        setScore((prev) => prev + elementScore);
        setCompletedElements((prev) => new Set([...prev, elementId]));

        setElements((prev) =>
          prev.map((e) => (e.id === elementId ? { ...e, completed: true, quality: finalQuality } : e)),
        );

        // Update user feedback based on quality
        setUserFeedback((prev) => {
          const change = finalQuality > 80 ? 5 : finalQuality > 60 ? 2 : -3;
          return Math.max(0, Math.min(100, prev + change));
        });

        // Check for completion
        if (completedElements.size >= 6) {
          setDesignPhase('completed');
          setTimeout(() => onComplete(true, userFeedback), 2000);
        } else {
          setDesignPhase('planning');
        }

        setSelectedElement(null);
      }, 2000);
    },
    [completedElements, elements, userFeedback, onComplete],
  );

  const getDeviceIcon = (device: string) => {
    switch (device) {
      case 'mobile':
        return <Smartphone className="w-4 h-4" />;
      case 'desktop':
        return <Monitor className="w-4 h-4" />;
      case 'tablet':
        return <Tablet className="w-4 h-4" />;
      default:
        return <Monitor className="w-4 h-4" />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'wireframe':
        return <Layout className="w-4 h-4" />;
      case 'prototype':
        return <MousePointer className="w-4 h-4" />;
      case 'visual':
        return <Palette className="w-4 h-4" />;
      case 'interaction':
        return <Target className="w-4 h-4" />;
      default:
        return <Layout className="w-4 h-4" />;
    }
  };

  const getQualityColor = (quality: number) => {
    if (quality >= 80) return 'text-green-400';
    if (quality >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-black/20">
        <div className="flex items-center gap-4">
          <Palette className="w-8 h-8 text-pink-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">UX Design Studio 3D</h2>
            <p className="text-pink-200">Create comprehensive user experiences</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-white font-bold">Score: {score}</div>
            <div className="text-pink-200">{timeLeft}s</div>
          </div>
          <button onClick={onRestart} className="p-2 bg-pink-600 hover:bg-pink-700 rounded-lg transition-colors">
            <RotateCcw className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* 3D Scene */}
        <div className="flex-1 relative">
          <Canvas camera={{ position: [6, 6, 8], fov: 60 }}>
            <UX3DScene
              elements={elements}
              onElementClick={setSelectedElement}
              selectedElement={selectedElement}
              designPhase={designPhase}
            />
          </Canvas>

          {designPhase === 'designing' && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-white text-xl">Designing component...</p>
                <p className="text-pink-200 mt-2">Considering user feedback and best practices</p>
              </div>
            </div>
          )}
        </div>

        {/* Control Panel */}
        <div className="w-80 bg-black/40 p-6 space-y-4">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">Design Studio</h3>
            <div className="flex justify-center gap-4 text-sm mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">{completedElements.size}</div>
                <div className="text-gray-300">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{elements.length - completedElements.size}</div>
                <div className="text-gray-300">Remaining</div>
              </div>
            </div>

            {/* User Feedback Meter */}
            <div className="bg-black/30 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-4 h-4 text-red-400" />
                <span className="text-white text-sm font-medium">User Satisfaction</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${userFeedback}%` }}
                ></div>
              </div>
              <div className="text-center mt-1">
                <span className={`text-sm font-bold ${getQualityColor(userFeedback)}`}>{userFeedback}%</span>
              </div>
            </div>
          </div>

          {selectedElementData && (
            <div className="bg-white/10 rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2">
                {getTypeIcon(selectedElementData.type)}
                <h4 className="font-bold text-white">{selectedElementData.title}</h4>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  {getDeviceIcon(selectedElementData.device)}
                  <span className="text-gray-300">Target: {selectedElementData.device}</span>
                </div>

                <div className="text-sm">
                  <span className="text-gray-400">Type:</span>
                  <span className="ml-2 px-2 py-1 rounded text-xs bg-pink-600 text-white">
                    {selectedElementData.type}
                  </span>
                </div>

                {selectedElementData.completed && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Quality:</span>
                    <span className={`font-bold ${getQualityColor(selectedElementData.quality)}`}>
                      {selectedElementData.quality}%
                    </span>
                  </div>
                )}
              </div>

              {!selectedElementData.completed ? (
                <button
                  onClick={() => designElement(selectedElementData.id)}
                  disabled={designPhase === 'designing'}
                  className="w-full flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 disabled:bg-gray-600 text-white py-2 px-4 rounded transition-colors"
                >
                  <Palette className="w-4 h-4" />
                  Design Component
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
            <h4 className="font-bold text-white">Design Elements:</h4>
            {elements.map((element) => (
              <div
                key={element.id}
                onClick={() => setSelectedElement(element.id)}
                className={`p-3 rounded cursor-pointer transition-colors ${
                  selectedElement === element.id
                    ? 'bg-pink-600/50 border border-pink-400'
                    : 'bg-white/5 hover:bg-white/10'
                } ${element.completed ? 'border-l-4 border-green-500' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getTypeIcon(element.type)}
                    {getDeviceIcon(element.device)}
                    <span className="text-white text-sm font-medium">{element.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {element.completed && (
                      <span className={`text-xs font-bold ${getQualityColor(element.quality)}`}>
                        {element.quality}%
                      </span>
                    )}
                    {element.completed && <Award className="w-4 h-4 text-green-400" />}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-black/30 rounded-lg p-3 text-xs text-gray-300">
            <h5 className="font-bold text-white mb-2">UX Tips:</h5>
            <ul className="space-y-1">
              <li>• Start with wireframes before prototypes</li>
              <li>• Consider mobile-first design</li>
              <li>• Test accessibility features</li>
              <li>• User feedback affects quality</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UXDesignStudio3DGame;
