import React, { useState, useCallback, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere, Cylinder } from '@react-three/drei';
import { RotateCcw, Globe, Users, MessageCircle, Book, Award, Target, Map, Star, Compass } from 'lucide-react';

interface GameProps {
  onComplete: (success: boolean, rawScore?: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface CulturalNode {
  id: string;
  culture: string;
  region: string;
  position: [number, number, number];
  color: string;
  explored: boolean;
  challenges: Challenge[];
  connections: string[];
  difficulty: number;
}

interface Challenge {
  id: string;
  type: 'communication' | 'etiquette' | 'business' | 'social';
  title: string;
  completed: boolean;
  points: number;
}

interface Cultural3DSceneProps {
  nodes: CulturalNode[];
  onNodeClick: (id: string) => void;
  selectedNode: string | null;
  explorationMode: string;
  connections: Array<[string, string]>;
}

const Cultural3DScene: React.FC<Cultural3DSceneProps> = ({
  nodes,
  onNodeClick,
  selectedNode,
  explorationMode,
  connections,
}) => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#22D3EE" />

      {/* Cultural Nodes */}
      {nodes.map((node) => (
        <group key={node.id} position={node.position}>
          {/* Main Node */}
          <Sphere args={[node.explored ? 1.2 : 1, 32, 32]} onClick={() => onNodeClick(node.id)}>
            <meshStandardMaterial
              color={node.color}
              transparent
              opacity={selectedNode === node.id ? 1 : 0.8}
              emissive={node.explored ? node.color : '#000000'}
              emissiveIntensity={node.explored ? 0.1 : 0}
            />
          </Sphere>

          {/* Difficulty Ring */}
          <group rotation={[Math.PI / 2, 0, 0]}>
            <Cylinder args={[1.5, 1.5, 0.1, 32, 1, true]} position={[0, 0, 0]}>
              <meshBasicMaterial
                color={node.difficulty === 1 ? '#10B981' : node.difficulty === 2 ? '#F59E0B' : '#EF4444'}
                transparent
                opacity={0.3}
              />
            </Cylinder>
          </group>

          {/* Progress Indicators */}
          {node.explored &&
            node.challenges.map((challenge, index) => {
              const angle = (index / node.challenges.length) * Math.PI * 2;
              const radius = 1.8;
              return (
                <Box
                  key={challenge.id}
                  args={[0.3, 0.3, 0.3]}
                  position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0.5]}
                >
                  <meshBasicMaterial color={challenge.completed ? '#10B981' : '#64748B'} />
                </Box>
              );
            })}

          {/* Culture Labels */}
          <Text
            position={[0, node.explored ? 1.5 : 1.3, 0]}
            fontSize={0.4}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {node.culture}
          </Text>

          <Text
            position={[0, node.explored ? -1.8 : -1.6, 0]}
            fontSize={0.25}
            color="#94A3B8"
            anchorX="center"
            anchorY="middle"
          >
            {node.region}
          </Text>

          {/* Exploration Effect */}
          {explorationMode === 'exploring' && selectedNode === node.id && (
            <group>
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i / 12) * Math.PI * 2;
                const radius = 2.5;
                return (
                  <Sphere
                    key={i}
                    args={[0.15, 8, 8]}
                    position={[
                      Math.cos(angle) * radius,
                      Math.sin(angle) * radius,
                      Math.sin(Date.now() * 0.002 + i) * 0.5,
                    ]}
                  >
                    <meshBasicMaterial color="#22D3EE" />
                  </Sphere>
                );
              })}
            </group>
          )}
        </group>
      ))}

      {/* Connection Lines */}
      {connections.map(([from, to], index) => {
        const fromNode = nodes.find((n) => n.id === from);
        const toNode = nodes.find((n) => n.id === to);
        if (!fromNode || !toNode) return null;

        const midpoint: [number, number, number] = [
          (fromNode.position[0] + toNode.position[0]) / 2,
          (fromNode.position[1] + toNode.position[1]) / 2,
          (fromNode.position[2] + toNode.position[2]) / 2 + 0.5,
        ];

        return (
          <Cylinder
            key={index}
            args={[
              0.05,
              0.05,
              Math.sqrt(
                Math.pow(toNode.position[0] - fromNode.position[0], 2) +
                  Math.pow(toNode.position[1] - fromNode.position[1], 2) +
                  Math.pow(toNode.position[2] - fromNode.position[2], 2),
              ),
            ]}
            position={midpoint}
            rotation={[
              Math.atan2(
                toNode.position[1] - fromNode.position[1],
                Math.sqrt(
                  Math.pow(toNode.position[0] - fromNode.position[0], 2) +
                    Math.pow(toNode.position[2] - fromNode.position[2], 2),
                ),
              ),
              Math.atan2(toNode.position[0] - fromNode.position[0], toNode.position[2] - fromNode.position[2]),
              0,
            ]}
          >
            <meshBasicMaterial color="#22D3EE" transparent opacity={0.4} />
          </Cylinder>
        );
      })}

      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </>
  );
};

const CulturalIntelligenceNavigator3DGame: React.FC<GameProps> = ({ onComplete, timeLeft, onRestart }) => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [exploredNodes, setExploredNodes] = useState<Set<string>>(new Set());
  const [score, setScore] = useState(0);
  const [explorationMode, setExplorationMode] = useState<'selecting' | 'exploring' | 'completed'>('selecting');
  const [culturalInsights, setCulturalInsights] = useState(0);

  const initialNodes: CulturalNode[] = useMemo(
    () => [
      {
        id: 'japan',
        culture: 'Japan',
        region: 'East Asia',
        position: [3, 2, 0],
        color: '#DC2626',
        explored: false,
        difficulty: 3,
        connections: ['korea', 'china'],
        challenges: [
          { id: 'jp-bow', type: 'etiquette', title: 'Proper Bowing', completed: false, points: 25 },
          { id: 'jp-business', type: 'business', title: 'Business Cards Exchange', completed: false, points: 30 },
          { id: 'jp-comm', type: 'communication', title: 'Indirect Communication', completed: false, points: 35 },
          { id: 'jp-social', type: 'social', title: 'Group Harmony', completed: false, points: 30 },
        ],
      },
      {
        id: 'germany',
        culture: 'Germany',
        region: 'Central Europe',
        position: [-2, 1, 0],
        color: '#1D4ED8',
        explored: false,
        difficulty: 2,
        connections: ['france', 'netherlands'],
        challenges: [
          { id: 'de-punct', type: 'etiquette', title: 'Punctuality Culture', completed: false, points: 20 },
          { id: 'de-direct', type: 'communication', title: 'Direct Communication', completed: false, points: 25 },
          { id: 'de-formal', type: 'business', title: 'Formal Address', completed: false, points: 30 },
          { id: 'de-privacy', type: 'social', title: 'Privacy Respect', completed: false, points: 25 },
        ],
      },
      {
        id: 'brazil',
        culture: 'Brazil',
        region: 'South America',
        position: [-3, -2, 0],
        color: '#059669',
        explored: false,
        difficulty: 2,
        connections: ['argentina', 'colombia'],
        challenges: [
          { id: 'br-warm', type: 'social', title: 'Warmth & Affection', completed: false, points: 20 },
          { id: 'br-time', type: 'etiquette', title: 'Flexible Time', completed: false, points: 25 },
          { id: 'br-touch', type: 'communication', title: 'Physical Contact', completed: false, points: 30 },
          { id: 'br-family', type: 'social', title: 'Family Importance', completed: false, points: 25 },
        ],
      },
      {
        id: 'saudi',
        culture: 'Saudi Arabia',
        region: 'Middle East',
        position: [0, 0, 2],
        color: '#7C3AED',
        explored: false,
        difficulty: 3,
        connections: ['egypt', 'uae'],
        challenges: [
          { id: 'sa-islam', type: 'etiquette', title: 'Islamic Customs', completed: false, points: 35 },
          { id: 'sa-respect', type: 'communication', title: 'Respectful Language', completed: false, points: 30 },
          { id: 'sa-gender', type: 'social', title: 'Gender Interactions', completed: false, points: 40 },
          { id: 'sa-business', type: 'business', title: 'Business Relationships', completed: false, points: 35 },
        ],
      },
      {
        id: 'india',
        culture: 'India',
        region: 'South Asia',
        position: [2, -1, 1],
        color: '#EA580C',
        explored: false,
        difficulty: 3,
        connections: ['china', 'thailand'],
        challenges: [
          { id: 'in-hier', type: 'social', title: 'Hierarchy Respect', completed: false, points: 30 },
          { id: 'in-namaste', type: 'etiquette', title: 'Namaste Greeting', completed: false, points: 20 },
          { id: 'in-diverse', type: 'communication', title: 'Cultural Diversity', completed: false, points: 35 },
          { id: 'in-relig', type: 'social', title: 'Religious Sensitivity', completed: false, points: 35 },
        ],
      },
      {
        id: 'sweden',
        culture: 'Sweden',
        region: 'Northern Europe',
        position: [-1, 3, 0],
        color: '#0891B2',
        explored: false,
        difficulty: 1,
        connections: ['germany', 'finland'],
        challenges: [
          { id: 'se-equal', type: 'social', title: 'Equality Values', completed: false, points: 25 },
          { id: 'se-lagom', type: 'etiquette', title: 'Lagom Philosophy', completed: false, points: 30 },
          { id: 'se-consensus', type: 'business', title: 'Consensus Building', completed: false, points: 25 },
          { id: 'se-nature', type: 'social', title: 'Nature Connection', completed: false, points: 20 },
        ],
      },
    ],
    [],
  );

  const [nodes, setNodes] = useState<CulturalNode[]>(initialNodes);

  const selectedNodeData = useMemo(() => nodes.find((n) => n.id === selectedNode), [nodes, selectedNode]);

  const connections = useMemo(() => {
    const result: Array<[string, string]> = [];
    nodes.forEach((node) => {
      if (node.explored) {
        node.connections.forEach((connId) => {
          const connNode = nodes.find((n) => n.id === connId);
          if (connNode && connNode.explored) {
            result.push([node.id, connId]);
          }
        });
      }
    });
    return result;
  }, [nodes]);

  const exploreNode = useCallback(
    (nodeId: string) => {
      if (exploredNodes.has(nodeId)) return;

      const node = nodes.find((n) => n.id === nodeId);
      if (!node) return;

      setExplorationMode('exploring');

      setTimeout(() => {
        // Auto-complete some challenges with varying success
        const completedChallenges = node.challenges.map((challenge) => ({
          ...challenge,
          completed: Math.random() > 0.3, // 70% success rate
        }));

        const completedPoints = completedChallenges.filter((c) => c.completed).reduce((sum, c) => sum + c.points, 0);

        // Cultural insight bonus
        const insightBonus = Math.random() > 0.5 ? 50 : 0;
        if (insightBonus > 0) {
          setCulturalInsights((prev) => prev + 1);
        }

        const totalNodeScore = completedPoints + insightBonus + node.difficulty * 20;
        setScore((prev) => prev + totalNodeScore);

        setExploredNodes((prev) => new Set([...prev, nodeId]));
        setNodes((prev) =>
          prev.map((n) =>
            n.id === nodeId
              ? {
                  ...n,
                  explored: true,
                  challenges: completedChallenges,
                }
              : n,
          ),
        );

        // Check for completion
        if (exploredNodes.size >= 4) {
          setExplorationMode('completed');
          setTimeout(() => onComplete(true, score), 2000);
        } else {
          setExplorationMode('selecting');
        }

        setSelectedNode(null);
      }, 3000);
    },
    [exploredNodes, nodes, onComplete, score],
  );

  const getChallengeIcon = (type: string) => {
    switch (type) {
      case 'communication':
        return <MessageCircle className="w-4 h-4" />;
      case 'etiquette':
        return <Star className="w-4 h-4" />;
      case 'business':
        return <Target className="w-4 h-4" />;
      case 'social':
        return <Users className="w-4 h-4" />;
      default:
        return <Book className="w-4 h-4" />;
    }
  };

  const getDifficultyColor = (difficulty: number) => {
    switch (difficulty) {
      case 1:
        return 'text-green-400';
      case 2:
        return 'text-yellow-400';
      case 3:
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getDifficultyText = (difficulty: number) => {
    switch (difficulty) {
      case 1:
        return 'Easy';
      case 2:
        return 'Medium';
      case 3:
        return 'Hard';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-black/20">
        <div className="flex items-center gap-4">
          <Globe className="w-8 h-8 text-cyan-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">Cultural Intelligence Navigator 3D</h2>
            <p className="text-cyan-200">Explore global cultures and build cross-cultural competence</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-white font-bold">Score: {score}</div>
            <div className="text-cyan-200">{timeLeft}s</div>
          </div>
          <button onClick={onRestart} className="p-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors">
            <RotateCcw className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* 3D Scene */}
        <div className="flex-1 relative">
          <Canvas camera={{ position: [8, 6, 8], fov: 60 }}>
            <Cultural3DScene
              nodes={nodes}
              onNodeClick={setSelectedNode}
              selectedNode={selectedNode}
              explorationMode={explorationMode}
              connections={connections}
            />
          </Canvas>

          {explorationMode === 'exploring' && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center">
                <div className="animate-pulse w-20 h-20 border-8 border-cyan-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-white text-xl">Exploring {selectedNodeData?.culture}...</p>
                <p className="text-cyan-200 mt-2">Learning cultural nuances and customs</p>
              </div>
            </div>
          )}
        </div>

        {/* Control Panel */}
        <div className="w-80 bg-black/40 p-6 space-y-4">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">Cultural Navigator</h3>
            <div className="flex justify-center gap-4 text-sm mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{exploredNodes.size}</div>
                <div className="text-gray-300">Explored</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{culturalInsights}</div>
                <div className="text-gray-300">Insights</div>
              </div>
            </div>
          </div>

          {selectedNodeData && (
            <div className="bg-white/10 rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-cyan-400" />
                <h4 className="font-bold text-white">{selectedNodeData.culture}</h4>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Map className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300">{selectedNodeData.region}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Difficulty:</span>
                  <span className={`font-bold ${getDifficultyColor(selectedNodeData.difficulty)}`}>
                    {getDifficultyText(selectedNodeData.difficulty)}
                  </span>
                </div>

                <div className="text-sm">
                  <span className="text-gray-400">Challenges:</span>
                  <div className="mt-1 space-y-1">
                    {selectedNodeData.challenges.map((challenge) => (
                      <div key={challenge.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {getChallengeIcon(challenge.type)}
                          <span className={`text-xs ${challenge.completed ? 'text-green-400' : 'text-gray-300'}`}>
                            {challenge.title}
                          </span>
                        </div>
                        <span className="text-xs text-gray-400">{challenge.points}pts</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {!selectedNodeData.explored ? (
                <button
                  onClick={() => exploreNode(selectedNodeData.id)}
                  disabled={explorationMode === 'exploring'}
                  className="w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-600 text-white py-2 px-4 rounded transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  Explore Culture
                </button>
              ) : (
                <div className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-4 rounded">
                  <Award className="w-4 h-4" />
                  Explored
                </div>
              )}
            </div>
          )}

          <div className="space-y-2">
            <h4 className="font-bold text-white">Cultural Nodes:</h4>
            {nodes.map((node) => (
              <div
                key={node.id}
                onClick={() => setSelectedNode(node.id)}
                className={`p-3 rounded cursor-pointer transition-colors ${
                  selectedNode === node.id ? 'bg-cyan-600/50 border border-cyan-400' : 'bg-white/5 hover:bg-white/10'
                } ${node.explored ? 'border-l-4 border-green-500' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" style={{ color: node.color }} />
                    <span className="text-white text-sm font-medium">{node.culture}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold ${getDifficultyColor(node.difficulty)}`}>
                      {getDifficultyText(node.difficulty)}
                    </span>
                    {node.explored && <Award className="w-4 h-4 text-green-400" />}
                  </div>
                </div>
                <div className="text-xs text-gray-400 mt-1">{node.region}</div>
              </div>
            ))}
          </div>

          <div className="bg-black/30 rounded-lg p-3 text-xs text-gray-300">
            <h5 className="font-bold text-white mb-2">Cultural Tips:</h5>
            <ul className="space-y-1">
              <li>• Research before visiting new cultures</li>
              <li>• Respect local customs and traditions</li>
              <li>• Practice active listening and empathy</li>
              <li>• Learn basic phrases in local language</li>
              <li>• Observe and adapt to communication styles</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturalIntelligenceNavigator3DGame;
