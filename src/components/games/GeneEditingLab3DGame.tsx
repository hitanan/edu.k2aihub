import React, { useState, useCallback, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere, Cylinder, Torus } from '@react-three/drei';
import { 
  RotateCcw, 
  Dna, 
  Microscope, 
  FlaskConical, 
  Zap,
  Award,
  Target,
  AlertTriangle,
  CheckCircle,
  Activity,
  Atom
} from 'lucide-react';

interface GameProps {
  onComplete: () => void;
  timeLeft: number;
  onRestart: () => void;
}

interface DNASegment {
  id: string;
  type: 'gene' | 'promoter' | 'enhancer' | 'silencer';
  sequence: string;
  position: [number, number, number];
  color: string;
  edited: boolean;
  function: string;
  stability: number;
  expression: number;
}

interface EditingTool {
  id: string;
  name: string;
  type: 'crispr' | 'prime' | 'base' | 'epigenome';
  precision: number;
  speed: number;
  cost: number;
}

interface GeneLab3DSceneProps {
  segments: DNASegment[];
  onSegmentClick: (id: string) => void;
  selectedSegment: string | null;
  editingMode: string;
  labProgress: number;
}

const GeneLab3DScene: React.FC<GeneLab3DSceneProps> = ({ 
  segments, 
  onSegmentClick, 
  selectedSegment, 
  editingMode,
  labProgress 
}) => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#14B8A6" />
      
      {/* DNA Double Helix Structure */}
      <group>
        {Array.from({ length: 20 }).map((_, i) => {
          const angle = (i / 20) * Math.PI * 4;
          const height = i * 0.5 - 5;
          return (
            <group key={`helix-${i}`}>
              {/* First strand */}
              <Sphere args={[0.15, 16, 16]} position={[
                Math.cos(angle) * 2,
                height,
                Math.sin(angle) * 2
              ]}>
                <meshBasicMaterial color="#3B82F6" />
              </Sphere>
              
              {/* Second strand */}
              <Sphere args={[0.15, 16, 16]} position={[
                Math.cos(angle + Math.PI) * 2,
                height,
                Math.sin(angle + Math.PI) * 2
              ]}>
                <meshBasicMaterial color="#EF4444" />
              </Sphere>
              
              {/* Connecting bonds */}
              <Cylinder
                args={[0.05, 0.05, 4, 8]}
                position={[0, height, 0]}
                rotation={[0, 0, angle]}
              >
                <meshBasicMaterial color="#94A3B8" transparent opacity={0.6} />
              </Cylinder>
            </group>
          );
        })}
      </group>
      
      {/* DNA Segments */}
      {segments.map((segment) => (
        <group key={segment.id} position={segment.position}>
          {/* Segment Shape based on type */}
          {segment.type === 'gene' && (
            <Box
              args={[2, segment.edited ? 1.5 : 1, 0.8]}
              onClick={() => onSegmentClick(segment.id)}
            >
              <meshStandardMaterial
                color={segment.color}
                transparent
                opacity={selectedSegment === segment.id ? 1 : 0.8}
                emissive={segment.edited ? segment.color : '#000000'}
                emissiveIntensity={segment.edited ? 0.15 : 0}
              />
            </Box>
          )}
          
          {segment.type === 'promoter' && (
            <Cylinder
              args={[segment.edited ? 0.8 : 0.6, segment.edited ? 0.8 : 0.6, 1.5, 16]}
              onClick={() => onSegmentClick(segment.id)}
            >
              <meshStandardMaterial
                color={segment.color}
                transparent
                opacity={selectedSegment === segment.id ? 1 : 0.8}
                emissive={segment.edited ? segment.color : '#000000'}
                emissiveIntensity={segment.edited ? 0.15 : 0}
              />
            </Cylinder>
          )}
          
          {['enhancer', 'silencer'].includes(segment.type) && (
            <Torus
              args={[segment.edited ? 0.8 : 0.6, 0.3, 8, 16]}
              onClick={() => onSegmentClick(segment.id)}
            >
              <meshStandardMaterial
                color={segment.color}
                transparent
                opacity={selectedSegment === segment.id ? 1 : 0.8}
                emissive={segment.edited ? segment.color : '#000000'}
                emissiveIntensity={segment.edited ? 0.15 : 0}
              />
            </Torus>
          )}
          
          {/* Stability Indicator */}
          <group position={[0, 1.2, 0]}>
            <Sphere args={[0.2, 16, 16]}>
              <meshBasicMaterial
                color={
                  segment.stability >= 80 ? '#10B981' :
                  segment.stability >= 60 ? '#F59E0B' : '#EF4444'
                }
              />
            </Sphere>
          </group>
          
          {/* Expression Level Visualization */}
          {segment.edited && segment.expression > 0 && (
            <group position={[0, 2, 0]}>
              {Array.from({ length: Math.ceil(segment.expression / 25) }).map((_, i) => (
                <Sphere key={i} args={[0.1, 8, 8]} position={[0, i * 0.3, 0]}>
                  <meshBasicMaterial color="#22D3EE" />
                </Sphere>
              ))}
            </group>
          )}
          
          {/* Segment Labels */}
          <Text
            position={[0, segment.edited ? -1.8 : -1.5, 0]}
            fontSize={0.3}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {segment.function}
          </Text>
          
          {/* Editing Effect */}
          {editingMode === 'editing' && selectedSegment === segment.id && (
            <group>
              {Array.from({ length: 16 }).map((_, i) => {
                const angle = (i / 16) * Math.PI * 2;
                const radius = 3;
                return (
                  <Box key={i} args={[0.2, 0.2, 0.2]} position={[
                    Math.cos(angle + Date.now() * 0.003) * radius,
                    Math.sin(angle + Date.now() * 0.003) * radius,
                    Math.sin(Date.now() * 0.002 + i) * 0.5
                  ]}>
                    <meshBasicMaterial color="#14B8A6" />
                  </Box>
                );
              })}
            </group>
          )}
        </group>
      ))}
      
      {/* Lab Equipment Visualization */}
      <group position={[8, 0, 0]}>
        {/* CRISPR Cas9 representation */}
        <Sphere args={[1, 32, 32]} position={[0, 2, 0]}>
          <meshStandardMaterial color="#8B5CF6" />
        </Sphere>
        <Text
          position={[0, 0.5, 0]}
          fontSize={0.4}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          CRISPR-Cas9
        </Text>
      </group>
      
      {/* Progress Visualization */}
      <group position={[0, -6, 0]}>
        <Cylinder args={[5, 5, 0.2, 32]}>
          <meshBasicMaterial color="#1F2937" />
        </Cylinder>
        <Cylinder args={[5 * (labProgress / 100), 5 * (labProgress / 100), 0.3, 32]}>
          <meshBasicMaterial color="#14B8A6" />
        </Cylinder>
        <Text
          position={[0, 0.5, 0]}
          fontSize={0.6}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Lab Progress: {Math.round(labProgress)}%
        </Text>
      </group>
      
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </>
  );
};

const GeneEditingLab3DGame: React.FC<GameProps> = ({ onComplete, timeLeft, onRestart }) => {
  const [selectedSegment, setSelectedSegment] = useState<string | null>(null);
  const [editedSegments, setEditedSegments] = useState<Set<string>>(new Set());
  const [score, setScore] = useState(0);
  const [editingMode, setEditingMode] = useState<'planning' | 'editing' | 'analyzing' | 'completed'>('planning');
  const [labBudget, setLabBudget] = useState(1000);
  const [successfulEdits, setSuccessfulEdits] = useState(0);

  const editingTools: EditingTool[] = useMemo(() => [
    {
      id: 'crispr-cas9',
      name: 'CRISPR-Cas9',
      type: 'crispr',
      precision: 85,
      speed: 70,
      cost: 200
    },
    {
      id: 'prime-editing',
      name: 'Prime Editing',
      type: 'prime',
      precision: 95,
      speed: 50,
      cost: 350
    },
    {
      id: 'base-editing',
      name: 'Base Editing',
      type: 'base',
      precision: 90,
      speed: 80,
      cost: 250
    },
    {
      id: 'epigenome-editing',
      name: 'Epigenome Editing',
      type: 'epigenome',
      precision: 75,
      speed: 90,
      cost: 150
    }
  ], []);

  const [currentTool, setCurrentTool] = useState<EditingTool>(editingTools[0]);

  const initialSegments: DNASegment[] = useMemo(() => [
    {
      id: 'insulin-gene',
      type: 'gene',
      sequence: 'ATGTTCCAGCACCGGCCGCCTCAAC',
      position: [-4, 2, 0],
      color: '#EF4444',
      edited: false,
      function: 'Insulin Production',
      stability: 90,
      expression: 0
    },
    {
      id: 'promoter-region',
      type: 'promoter',
      sequence: 'TATAATGACCCGGACTCCGC',
      position: [-2, 1, 0],
      color: '#F59E0B',
      edited: false,
      function: 'Gene Activation',
      stability: 85,
      expression: 0
    },
    {
      id: 'enhancer-seq',
      type: 'enhancer',
      sequence: 'CGGCGGTCAACTAATGGCC',
      position: [0, 2, 0],
      color: '#10B981',
      edited: false,
      function: 'Expression Boost',
      stability: 80,
      expression: 0
    },
    {
      id: 'tumor-suppressor',
      type: 'gene',
      sequence: 'ATGGATCCGAGCCTGACTC',
      position: [2, 0, 0],
      color: '#3B82F6',
      edited: false,
      function: 'Cancer Prevention',
      stability: 95,
      expression: 0
    },
    {
      id: 'silencer-region',
      type: 'silencer',
      sequence: 'GCCTGGATCCACGACGTCC',
      position: [4, 1, 0],
      color: '#8B5CF6',
      edited: false,
      function: 'Gene Suppression',
      stability: 75,
      expression: 0
    },
    {
      id: 'dystrophin-gene',
      type: 'gene',
      sequence: 'ATGCTGTCGCACGACCTGG',
      position: [-1, -1, 0],
      color: '#EC4899',
      edited: false,
      function: 'Muscle Function',
      stability: 70,
      expression: 0
    }
  ], []);

  const [segments, setSegments] = useState<DNASegment[]>(initialSegments);

  const selectedSegmentData = useMemo(() => 
    segments.find(s => s.id === selectedSegment), [segments, selectedSegment]
  );

  const labProgress = useMemo(() => {
    const totalSegments = segments.length;
    const editedCount = editedSegments.size;
    const expressionAverage = segments
      .filter(s => s.edited)
      .reduce((sum, s) => sum + s.expression, 0) / Math.max(editedCount, 1);
    
    return (editedCount / totalSegments) * 60 + (expressionAverage / 100) * 40;
  }, [segments, editedSegments]);

  const editSegment = useCallback((segmentId: string) => {
    if (editedSegments.has(segmentId) || labBudget < currentTool.cost) return;

    const segment = segments.find(s => s.id === segmentId);
    if (!segment) return;

    setEditingMode('editing');

    setTimeout(() => {
      // Calculate edit success based on tool precision and segment stability
      const successChance = (currentTool.precision + segment.stability) / 2;
      const isSuccessful = Math.random() * 100 < successChance;

      let finalStability = segment.stability;
      let expression = 0;

      if (isSuccessful) {
        // Successful edit
        expression = Math.random() * 40 + 60; // 60-100%
        finalStability = Math.min(100, segment.stability + Math.random() * 10);
        setSuccessfulEdits(prev => prev + 1);
      } else {
        // Failed edit - reduce stability
        finalStability = Math.max(20, segment.stability - Math.random() * 30);
        expression = Math.random() * 30; // 0-30%
      }

      // Calculate score
      let segmentScore = isSuccessful ? expression * 2 : expression * 0.5;
      segmentScore += finalStability;
      
      // Tool efficiency bonus
      const efficiencyBonus = (currentTool.precision / 100) * 50;
      segmentScore += efficiencyBonus;

      setScore(prev => prev + Math.round(segmentScore));
      setLabBudget(prev => prev - currentTool.cost);
      setEditedSegments(prev => new Set([...prev, segmentId]));
      
      setSegments(prev => prev.map(s => 
        s.id === segmentId ? { 
          ...s, 
          edited: true, 
          stability: finalStability,
          expression: Math.round(expression)
        } : s
      ));

      // Check for completion
      if (editedSegments.size >= 4 || successfulEdits >= 3) {
        setEditingMode('completed');
        setTimeout(() => onComplete(), 2000);
      } else {
        setEditingMode('planning');
      }
      
      setSelectedSegment(null);
    }, 4000);
  }, [editedSegments, segments, currentTool, labBudget, successfulEdits, onComplete]);

  const getSegmentIcon = (type: string) => {
    switch (type) {
      case 'gene': return <Dna className="w-4 h-4" />;
      case 'promoter': return <Zap className="w-4 h-4" />;
      case 'enhancer': return <Activity className="w-4 h-4" />;
      case 'silencer': return <Target className="w-4 h-4" />;
      default: return <Atom className="w-4 h-4" />;
    }
  };

  const getStabilityColor = (stability: number) => {
    if (stability >= 80) return 'text-green-400';
    if (stability >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getExpressionColor = (expression: number) => {
    if (expression >= 70) return 'text-green-400';
    if (expression >= 40) return 'text-yellow-400';
    return 'text-red-400';
  };

  const canAfford = (tool: EditingTool) => labBudget >= tool.cost;

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-black/20">
        <div className="flex items-center gap-4">
          <Dna className="w-8 h-8 text-teal-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">Gene Editing Lab 3D</h2>
            <p className="text-teal-200">Advanced genetic engineering with CRISPR technology</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-white font-bold">Score: {score}</div>
            <div className="text-teal-200">{timeLeft}s</div>
          </div>
          <button
            onClick={onRestart}
            className="p-2 bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors"
          >
            <RotateCcw className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* 3D Scene */}
        <div className="flex-1 relative">
          <Canvas camera={{ position: [10, 8, 10], fov: 60 }}>
            <GeneLab3DScene
              segments={segments}
              onSegmentClick={setSelectedSegment}
              selectedSegment={selectedSegment}
              editingMode={editingMode}
              labProgress={labProgress}
            />
          </Canvas>
          
          {editingMode === 'editing' && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center">
                <div className="animate-pulse w-24 h-24 border-8 border-teal-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-white text-xl">Editing {selectedSegmentData?.function}...</p>
                <p className="text-teal-200 mt-2">Using {currentTool.name} for precise modification</p>
              </div>
            </div>
          )}
        </div>

        {/* Control Panel */}
        <div className="w-80 bg-black/40 p-6 space-y-4">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">Gene Lab</h3>
            <div className="flex justify-center gap-4 text-sm mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-400">{editedSegments.size}</div>
                <div className="text-gray-300">Edited</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{successfulEdits}</div>
                <div className="text-gray-300">Success</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">${labBudget}</div>
                <div className="text-gray-300">Budget</div>
              </div>
            </div>
          </div>

          {/* Tool Selection */}
          <div className="space-y-2">
            <h4 className="font-bold text-white">Editing Tools:</h4>
            {editingTools.map(tool => (
              <div
                key={tool.id}
                onClick={() => canAfford(tool) && setCurrentTool(tool)}
                className={`p-3 rounded cursor-pointer transition-colors ${
                  currentTool.id === tool.id 
                    ? 'bg-teal-600/50 border border-teal-400' 
                    : canAfford(tool) ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-800 opacity-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Microscope className="w-4 h-4 text-teal-400" />
                    <span className="text-white text-sm font-medium">{tool.name}</span>
                  </div>
                  <span className="text-xs text-yellow-400">${tool.cost}</span>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>Precision: {tool.precision}%</span>
                  <span>Speed: {tool.speed}%</span>
                </div>
              </div>
            ))}
          </div>

          {selectedSegmentData && (
            <div className="bg-white/10 rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2">
                {getSegmentIcon(selectedSegmentData.type)}
                <h4 className="font-bold text-white">{selectedSegmentData.function}</h4>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="text-gray-400">Type:</span>
                  <span className="ml-2 px-2 py-1 rounded text-xs bg-teal-600 text-white capitalize">
                    {selectedSegmentData.type}
                  </span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Stability:</span>
                  <span className={`font-bold ${getStabilityColor(selectedSegmentData.stability)}`}>
                    {selectedSegmentData.stability}%
                  </span>
                </div>

                {selectedSegmentData.edited && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Expression:</span>
                    <span className={`font-bold ${getExpressionColor(selectedSegmentData.expression)}`}>
                      {selectedSegmentData.expression}%
                    </span>
                  </div>
                )}

                <div className="text-xs text-gray-400 font-mono bg-black/30 p-2 rounded">
                  {selectedSegmentData.sequence}
                </div>
              </div>

              {!selectedSegmentData.edited ? (
                <button
                  onClick={() => editSegment(selectedSegmentData.id)}
                  disabled={editingMode === 'editing' || !canAfford(currentTool)}
                  className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 disabled:bg-gray-600 text-white py-2 px-4 rounded transition-colors"
                >
                  {canAfford(currentTool) ? (
                    <>
                      <FlaskConical className="w-4 h-4" />
                      Edit Gene (${currentTool.cost})
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="w-4 h-4" />
                      Insufficient Budget
                    </>
                  )}
                </button>
              ) : (
                <div className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-4 rounded">
                  <CheckCircle className="w-4 h-4" />
                  Successfully Edited
                </div>
              )}
            </div>
          )}

          <div className="space-y-2">
            <h4 className="font-bold text-white">DNA Segments:</h4>
            {segments.map(segment => (
              <div
                key={segment.id}
                onClick={() => setSelectedSegment(segment.id)}
                className={`p-3 rounded cursor-pointer transition-colors ${
                  selectedSegment === segment.id 
                    ? 'bg-teal-600/50 border border-teal-400' 
                    : 'bg-white/5 hover:bg-white/10'
                } ${segment.edited ? 'border-l-4 border-green-500' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getSegmentIcon(segment.type)}
                    <span className="text-white text-sm font-medium">{segment.function}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold ${getStabilityColor(segment.stability)}`}>
                      {segment.stability}%
                    </span>
                    {segment.edited && (
                      <span className={`text-xs font-bold ${getExpressionColor(segment.expression)}`}>
                        {segment.expression}%
                      </span>
                    )}
                    {segment.edited && <Award className="w-4 h-4 text-green-400" />}
                  </div>
                </div>
                <div className="text-xs text-gray-400 mt-1 capitalize">{segment.type}</div>
              </div>
            ))}
          </div>

          <div className="bg-black/30 rounded-lg p-3 text-xs text-gray-300">
            <h5 className="font-bold text-white mb-2">Lab Safety Tips:</h5>
            <ul className="space-y-1">
              <li>• Higher precision tools reduce edit failures</li>
              <li>• Stable genes are easier to edit successfully</li>
              <li>• Budget management is crucial for success</li>
              <li>• Failed edits can damage gene stability</li>
              <li>• Expression levels indicate edit success</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneEditingLab3DGame;