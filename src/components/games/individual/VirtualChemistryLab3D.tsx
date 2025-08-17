'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

// Molecular game data interface
interface Atom {
  id: string;
  symbol: string;
  name: string;
  color: string;
  radius: number;
  valence: number;
}

interface Equipment {
  id: string;
  name: string;
  description: string;
  model: string;
  interactive: boolean;
}

interface VirtualChemistryLab3DData {
  molecules: Array<{
    id: string;
    name: string;
    formula: string;
    atoms: Array<{
      element: string;
      position: { x: number; y: number; z: number };
    }>;
    bonds: Array<{
      atom1: number;
      atom2: number;
      type: 'single' | 'double' | 'triple';
    }>;
    description: string;
    points: number;
  }>;
  equipment: Array<{
    id: string;
    name: string;
    description: string;
    model: string;
    interactive: boolean;
  }>;
  challenges: Array<{
    id: string;
    title: string;
    description: string;
    targetMolecule: string;
    difficulty: 'easy' | 'medium' | 'hard';
    points: number;
    hints: string[];
  }>;
}

// Default game data
const DEFAULT_ATOMS: Atom[] = [
  { id: 'H', symbol: 'H', name: 'Hydrogen', color: '#ffffff', radius: 0.3, valence: 1 },
  { id: 'C', symbol: 'C', name: 'Carbon', color: '#404040', radius: 0.7, valence: 4 },
  { id: 'O', symbol: 'O', name: 'Oxygen', color: '#ff0000', radius: 0.6, valence: 2 },
  { id: 'N', symbol: 'N', name: 'Nitrogen', color: '#0000ff', radius: 0.6, valence: 3 },
  { id: 'Cl', symbol: 'Cl', name: 'Chlorine', color: '#00ff00', radius: 0.8, valence: 1 },
];

// Atom component
interface AtomComponentProps {
  atom: Atom;
  position: [number, number, number];
  onClick: () => void;
  selected: boolean;
}

function AtomComponent({ atom, position, onClick, selected }: AtomComponentProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current && selected) {
      meshRef.current.scale.setScalar(1.2 + Math.sin(Date.now() * 0.005) * 0.1);
    } else if (meshRef.current && !selected) {
      meshRef.current.scale.setScalar(1);
    }
  });

  return (
    <group position={position} onClick={onClick}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[atom.radius, 16, 16]} />
        <meshPhongMaterial 
          color={atom.color}
          shininess={100}
          emissive={selected ? 0x444444 : 0x000000}
        />
      </mesh>
      <Text
        position={[0, atom.radius + 0.3, 0]}
        fontSize={0.3}
        color="#000000"
        anchorX="center"
        anchorY="middle"
      >
        {atom.symbol}
      </Text>
      {selected && (
        <mesh>
          <ringGeometry args={[atom.radius + 0.1, atom.radius + 0.2, 16]} />
          <meshBasicMaterial color="#ffff00" transparent opacity={0.6} />
        </mesh>
      )}
    </group>
  );
}

// Bond component
interface BondComponentProps {
  start: [number, number, number];
  end: [number, number, number];
  type: 'single' | 'double' | 'triple';
}

function BondComponent({ start, end, type }: BondComponentProps) {
  const bondRef = useRef<THREE.Mesh>(null);
  
  useEffect(() => {
    if (bondRef.current) {
      const distance = Math.sqrt(
        Math.pow(end[0] - start[0], 2) +
        Math.pow(end[1] - start[1], 2) +
        Math.pow(end[2] - start[2], 2)
      );
      
      bondRef.current.scale.y = distance;
      bondRef.current.position.set(
        (start[0] + end[0]) / 2,
        (start[1] + end[1]) / 2,
        (start[2] + end[2]) / 2
      );
      
      const direction = new THREE.Vector3(
        end[0] - start[0],
        end[1] - start[1],
        end[2] - start[2]
      ).normalize();
      
      const up = new THREE.Vector3(0, 1, 0);
      const quaternion = new THREE.Quaternion().setFromUnitVectors(up, direction);
      bondRef.current.setRotationFromQuaternion(quaternion);
    }
  }, [start, end]);

  const getBondColor = () => {
    switch (type) {
      case 'single': return '#888888';
      case 'double': return '#666666';
      case 'triple': return '#444444';
      default: return '#888888';
    }
  };

  const getBondRadius = () => {
    switch (type) {
      case 'single': return 0.05;
      case 'double': return 0.08;
      case 'triple': return 0.1;
      default: return 0.05;
    }
  };

  return (
    <mesh ref={bondRef}>
      <cylinderGeometry args={[getBondRadius(), getBondRadius(), 1, 8]} />
      <meshPhongMaterial color={getBondColor()} />
    </mesh>
  );
}

// Lab Equipment component
interface LabEquipmentProps {
  equipment: Equipment;
  position: [number, number, number];
  onClick: () => void;
  active: boolean;
}

function LabEquipmentComponent({ equipment, position, onClick, active }: LabEquipmentProps) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (meshRef.current && active) {
      meshRef.current.rotation.y += 0.02;
    }
  });

  const getEquipmentGeometry = () => {
    switch (equipment.model) {
      case 'beaker':
      case 'flask':
        return <cylinderGeometry args={[0.3, 0.4, 0.8, 8]} />;
      case 'burner':
        return <coneGeometry args={[0.2, 0.6, 6]} />;
      case 'pipette':
        return <capsuleGeometry args={[0.05, 0.8]} />;
      default:
        return <boxGeometry args={[0.4, 0.4, 0.4]} />;
    }
  };

  const getEquipmentColor = () => {
    return active ? '#00ff88' : '#cccccc';
  };

  return (
    <group ref={meshRef} position={position} onClick={onClick}>
      <mesh>
        {getEquipmentGeometry()}
        <meshPhongMaterial 
          color={getEquipmentColor()}
          transparent 
          opacity={active ? 1 : 0.7}
        />
      </mesh>
      <Text
        position={[0, -0.8, 0]}
        fontSize={0.2}
        color="#000000"
        anchorX="center"
        anchorY="middle"
      >
        {equipment.name}
      </Text>
    </group>
  );
}

interface GameSceneProps {
  gameData: VirtualChemistryLab3DData;
  onScoreChange: (score: number) => void;
  atomToAdd?: string | null;
  onChallengeComplete?: (challengeId: string) => void;
  currentChallenge: number;
}

interface PlacedAtom {
    atom: Atom;
    position: [number, number, number];
    id: string;
    element: string;
}

function GameScene({ gameData, onScoreChange, atomToAdd, onChallengeComplete, currentChallenge }: GameSceneProps) {
  const [placedAtoms, setPlacedAtoms] = useState<Array<PlacedAtom>>([]);

  const [selectedAtoms, setSelectedAtoms] = useState<string[]>([]);
  const [bonds, setBonds] = useState<Array<{
    from: string;
    to: string;
    type: 'single' | 'double' | 'triple';
  }>>([]);
  
  const [activeEquipment, setActiveEquipment] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  // Add atom to the scene
  const addAtom = useCallback((atomSymbol: string) => {
    const atom = DEFAULT_ATOMS.find(a => a.symbol === atomSymbol);
    if (!atom) return;

    const newAtom = {
      atom,
      element: atomSymbol,
      position: [
        Math.random() * 4 - 2,
        Math.random() * 2,
        Math.random() * 4 - 2
      ] as [number, number, number],
      id: `${atomSymbol}_${Date.now()}_${Math.random()}`
    };

    setPlacedAtoms(prev => [...prev, newAtom]);
  }, []);

  // Select atom
  const selectAtom = useCallback((atomId: string) => {
    setSelectedAtoms(prev => {
      if (prev.includes(atomId)) {
        return prev.filter(id => id !== atomId);
      } else if (prev.length < 2) {
        return [...prev, atomId];
      } else {
        return [atomId];
      }
    });
  }, []);

  // Molecular validation function
  const validateMolecule = useCallback((atoms: PlacedAtom[], currentBonds: typeof bonds) => {
    if (!gameData.challenges || !gameData.challenges[currentChallenge]) return false;
    
    const challenge = gameData.challenges[currentChallenge];
    const targetMolecule = gameData.molecules.find(m => m.id === challenge.targetMolecule);
    if (!targetMolecule) return false;

    // Count atoms by type
    const atomCounts = atoms.reduce((acc, atom) => {
      acc[atom.element] = (acc[atom.element] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Count target atoms
    const targetAtomCounts = targetMolecule.atoms.reduce((acc, atom) => {
      acc[atom.element] = (acc[atom.element] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Check if atom counts match
    const atomTypesMatch = Object.keys(targetAtomCounts).every(element => 
      atomCounts[element] === targetAtomCounts[element]
    ) && Object.keys(atomCounts).every(element => 
      targetAtomCounts[element] === atomCounts[element]
    );

    if (!atomTypesMatch) return false;

    // Check if we have the right number of bonds
    const expectedBonds = targetMolecule.bonds.length;
    if (currentBonds.length !== expectedBonds) return false;

    // For simple validation, check if all atoms are connected properly
    const bondedAtomIds = new Set<string>();
    currentBonds.forEach(bond => {
      bondedAtomIds.add(bond.from);
      bondedAtomIds.add(bond.to);
    });

    // Simple connectivity check - all atoms should be bonded for small molecules
    return bondedAtomIds.size >= Math.min(atoms.length, expectedBonds + 1);
  }, [gameData.challenges, gameData.molecules, currentChallenge]);

  // Create bond between selected atoms
  const createBond = useCallback(() => {
    if (selectedAtoms.length === 2) {
      const newBond = {
        from: selectedAtoms[0],
        to: selectedAtoms[1],
        type: 'single' as const
      };
      
      const newBonds = [...bonds, newBond];
      setBonds(newBonds);
      setSelectedAtoms([]);
      const newScore = score + 5;
      setScore(newScore);
      onScoreChange(newScore);
      
      // Check if molecule is complete after creating bond
      if (validateMolecule(placedAtoms, newBonds)) {
        const challenge = gameData.challenges[currentChallenge];
        if (challenge && onChallengeComplete) {
          onChallengeComplete(challenge.id);
        }
      }
    }
  }, [selectedAtoms, bonds, placedAtoms, score, validateMolecule, onScoreChange, gameData.challenges, onChallengeComplete, currentChallenge]);

  // Reset game
  const resetGame = useCallback(() => {
    setPlacedAtoms([]);
    setSelectedAtoms([]);
    setBonds([]);
    setActiveEquipment(null);
    setScore(0);
    onScoreChange(0);
  }, [onScoreChange]);

  // Handle external atom addition
  useEffect(() => {
    if (atomToAdd) {
      addAtom(atomToAdd);
    }
  }, [atomToAdd, addAtom]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'Space':
          event.preventDefault();
          createBond();
          break;
        case 'Escape':
          setSelectedAtoms([]);
          break;
        case 'KeyR':
          resetGame();
          break;
        case 'KeyH':
          addAtom('H');
          break;
        case 'KeyC':
          addAtom('C');
          break;
        case 'KeyO':
          addAtom('O');
          break;
        case 'KeyN':
          addAtom('N');
          break;
        case 'KeyL':
          addAtom('Cl');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [createBond, resetGame, addAtom]);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />

      {/* Atoms in scene */}
      {placedAtoms.map((placedAtom) => (
        <AtomComponent
          key={placedAtom.id}
          atom={placedAtom.atom}
          position={placedAtom.position}
          onClick={() => selectAtom(placedAtom.id)}
          selected={selectedAtoms.includes(placedAtom.id)}
        />
      ))}

      {/* Bonds */}
      {bonds.map((bond, index) => {
        const fromAtom = placedAtoms.find(a => a.id === bond.from);
        const toAtom = placedAtoms.find(a => a.id === bond.to);
        
        if (!fromAtom || !toAtom) return null;
        
        return (
          <BondComponent
            key={index}
            start={fromAtom.position}
            end={toAtom.position}
            type={bond.type}
          />
        );
      })}

      {/* Lab Equipment */}
      {gameData.equipment.map((equipment, index) => (
        <LabEquipmentComponent
          key={equipment.id}
          equipment={equipment}
          position={[4, 0, index * 2 - 3] as [number, number, number]}
          onClick={() => {
            setActiveEquipment(prev => prev === equipment.id ? null : equipment.id);
            if (equipment.id === 'burner') {
              setScore(prev => {
                const newScore = prev + 10;
                onScoreChange(newScore);
                return newScore;
              });
            }
          }}
          active={activeEquipment === equipment.id}
        />
      ))}

      {/* Ground plane */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshPhongMaterial color="#f0f0f0" />
      </mesh>

      {/* Controls */}
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        maxDistance={15}
        minDistance={2}
      />
    </>
  );
}

// Main component
interface VirtualChemistryLab3DProps {
  gameData?: VirtualChemistryLab3DData;
  onComplete?: (success: boolean, score: number) => void;
  // timeLeft?: number;
  // onRestart?: () => void;
}

// Default game data
const defaultGameData: VirtualChemistryLab3DData = {
  molecules: [
    {
      id: 'h2o',
      name: 'Water',
      formula: 'H2O',
      atoms: [
        { element: 'O', position: { x: 0, y: 0, z: 0 } },
        { element: 'H', position: { x: -1, y: 0.5, z: 0 } },
        { element: 'H', position: { x: 1, y: 0.5, z: 0 } }
      ],
      bonds: [
        { atom1: 0, atom2: 1, type: 'single' },
        { atom1: 0, atom2: 2, type: 'single' }
      ],
      description: 'Water molecule',
      points: 50
    },
    {
      id: 'co2',
      name: 'Carbon Dioxide',
      formula: 'CO2',
      atoms: [
        { element: 'C', position: { x: 0, y: 0, z: 0 } },
        { element: 'O', position: { x: -1.5, y: 0, z: 0 } },
        { element: 'O', position: { x: 1.5, y: 0, z: 0 } }
      ],
      bonds: [
        { atom1: 0, atom2: 1, type: 'double' },
        { atom1: 0, atom2: 2, type: 'double' }
      ],
      description: 'Carbon dioxide molecule',
      points: 75
    },
    {
      id: 'nh3',
      name: 'Ammonia',
      formula: 'NH3',
      atoms: [
        { element: 'N', position: { x: 0, y: 0, z: 0 } },
        { element: 'H', position: { x: -1, y: 0.5, z: 0 } },
        { element: 'H', position: { x: 1, y: 0.5, z: 0 } },
        { element: 'H', position: { x: 0, y: -1, z: 0 } }
      ],
      bonds: [
        { atom1: 0, atom2: 1, type: 'single' },
        { atom1: 0, atom2: 2, type: 'single' },
        { atom1: 0, atom2: 3, type: 'single' }
      ],
      description: 'Ammonia molecule',
      points: 60
    },
    {
      id: 'ch4',
      name: 'Methane',
      formula: 'CH4',
      atoms: [
        { element: 'C', position: { x: 0, y: 0, z: 0 } },
        { element: 'H', position: { x: -1, y: 0, z: 0 } },
        { element: 'H', position: { x: 1, y: 0, z: 0 } },
        { element: 'H', position: { x: 0, y: -1, z: 0 } },
        { element: 'H', position: { x: 0, y: 1, z: 0 } }
      ],
      bonds: [
        { atom1: 0, atom2: 1, type: 'single' },
        { atom1: 0, atom2: 2, type: 'single' },
        { atom1: 0, atom2: 3, type: 'single' },
        { atom1: 0, atom2: 4, type: 'single' }
      ],
      description: 'Methane molecule',
      points: 80
    }
  ],
  equipment: [
    { id: 'beaker', name: 'Beaker', description: 'Glass container for mixing', model: 'beaker.obj', interactive: true },
    { id: 'burner', name: 'Bunsen Burner', description: 'Heat source for reactions', model: 'burner.obj', interactive: true },
  ],
  challenges: [
    { id: 'h2o', title: 'Create Water', description: 'Build H2O molecule', targetMolecule: 'h2o', difficulty: 'easy', points: 50, hints: ['Start with oxygen', 'Add two hydrogens'] },
    { id: 'co2', title: 'Create Carbon Dioxide', description: 'Build CO2 molecule', targetMolecule: 'co2', difficulty: 'medium', points: 75, hints: ['Place carbon in center', 'Add oxygen atoms on sides'] },
    { id: 'nh3', title: 'Create Ammonia', description: 'Build NH3 molecule', targetMolecule: 'nh3', difficulty: 'medium', points: 60, hints: ['Nitrogen needs 3 bonds', 'Arrange hydrogens around nitrogen'] },
    { id: 'ch4', title: 'Create Methane', description: 'Build CH4 molecule', targetMolecule: 'ch4', difficulty: 'hard', points: 80, hints: ['Carbon in center', 'Four hydrogen atoms around'] },
  ]
};

export default function VirtualChemistryLab3D({ 
  gameData = defaultGameData,
  onComplete,
  // timeLeft = 300,
  // onRestart 
}: VirtualChemistryLab3DProps) {
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [atomToAdd, setAtomToAdd] = useState<string | null>(null);
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);
  const [showChallengeComplete, setShowChallengeComplete] = useState<string | null>(null);
  const [gameKey, setGameKey] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleScoreChange = useCallback((newScore: number) => {
    setScore(newScore);
  }, []);

  const handleAddAtom = useCallback((atomSymbol: string) => {
    setAtomToAdd(atomSymbol);
    // Reset after a brief moment to allow the GameScene to pick it up
    setTimeout(() => setAtomToAdd(null), 100);
  }, []);

  const handleChallengeComplete = useCallback((challengeId: string) => {
    if (!completedChallenges.includes(challengeId)) {
      setCompletedChallenges(prev => [...prev, challengeId]);
      setShowChallengeComplete(challengeId);
      
      // Find challenge and add bonus points
      const challenge = gameData.challenges.find(c => c.id === challengeId);
      if (challenge) {
        setScore(prev => prev + challenge.points);
      }
      
      // Auto-advance to next challenge after 3 seconds
      setTimeout(() => {
        setShowChallengeComplete(null);
        if (currentChallenge < gameData.challenges.length - 1) {
          setCurrentChallenge(prev => prev + 1);
          // Reset game for next challenge
          setGameKey(prev => prev + 1);
        } else {
          // All challenges completed - call onComplete callback
          if (onComplete && challenge) {
            onComplete(true, score + challenge.points);
          }
        }
      }, 3000);
    }
  }, [completedChallenges, currentChallenge, gameData.challenges, onComplete, score]);

  // Fullscreen functionality
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((err) => {
        console.log('Fullscreen not supported or denied:', err);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const getCurrentChallenge = () => {
    return gameData.challenges[currentChallenge];
  };

  const getTargetMolecule = () => {
    const challenge = getCurrentChallenge();
    return gameData.molecules.find(m => m.id === challenge.targetMolecule);
  };

  if (!gameData) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-100">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">❌ Lỗi dữ liệu</h2>
          <p className="text-gray-600">Không thể tải dữ liệu game.</p>
        </div>
      </div>
    );
  }

  if (!gameStarted) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-100">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">🧪 Virtual Chemistry Lab 3D</h2>
          <p className="text-gray-600 mb-6">
            Khám phá thế giới hóa học trong không gian 3D. Tạo các phân tử như H₂O, CO₂, NH₃ và hoàn thành thử thách từng bước!
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="font-bold text-blue-800 mb-2">🎯 Mục tiêu học tập:</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Tạo phân tử H₂O (nước)</li>
              <li>• Tạo phân tử CO₂ (khí carbonic)</li>
              <li>• Tạo phân tử NH₃ (amoniac)</li>
              <li>• Tạo phân tử CH₄ (khí metan)</li>
            </ul>
          </div>

          <div className="mb-6 text-sm text-gray-500 bg-gray-50 p-3 rounded">
            <p className="font-semibold mb-2">⌨️ Phím tắt:</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <p>• <kbd className="bg-gray-200 px-1 rounded">H, C, O, N</kbd> - Thêm nguyên tử</p>
              <p>• <kbd className="bg-gray-200 px-1 rounded">Space</kbd> - Tạo liên kết</p>
              <p>• <kbd className="bg-gray-200 px-1 rounded">Esc</kbd> - Bỏ chọn</p>
              <p>• <kbd className="bg-gray-200 px-1 rounded">R</kbd> - Khởi động lại</p>
            </div>
          </div>
          
          <button
            onClick={() => setGameStarted(true)}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            🚀 Bắt đầu thí nghiệm
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen relative bg-gradient-to-br from-blue-50 to-green-50">
      {/* Current Challenge Panel */}
      <div className="absolute top-4 left-4 z-10 bg-white bg-opacity-95 rounded-lg p-4 shadow-lg max-w-sm">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">🎯</span>
          <h3 className="text-lg font-bold text-gray-800">Thử thách hiện tại</h3>
        </div>
        
        {getCurrentChallenge() && (
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Bài {currentChallenge + 1}/{gameData.challenges.length}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                getCurrentChallenge().difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                getCurrentChallenge().difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>
                {getCurrentChallenge().difficulty === 'easy' ? 'Dễ' :
                 getCurrentChallenge().difficulty === 'medium' ? 'Trung bình' : 'Khó'}
              </span>
            </div>
            
            <h4 className="font-semibold text-gray-800">{getCurrentChallenge().title}</h4>
            <p className="text-sm text-gray-600">{getCurrentChallenge().description}</p>
            
            {getTargetMolecule() && (
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">🎯</span>
                  <span className="font-semibold text-blue-800">Mục tiêu: {getTargetMolecule()!.name}</span>
                </div>
                <p className="text-xs text-blue-600 mb-2">{getTargetMolecule()!.description}</p>
                <div className="text-sm font-mono bg-white p-2 rounded border">
                  Công thức: <span className="font-bold text-blue-700">{getTargetMolecule()!.formula}</span>
                </div>
              </div>
            )}
            
            <div className="bg-yellow-50 p-2 rounded">
              <div className="flex items-center gap-1 mb-1">
                <span className="text-sm">💡</span>
                <span className="text-xs font-semibold text-yellow-800">Gợi ý:</span>
              </div>
              <p className="text-xs text-yellow-700">{getCurrentChallenge().hints[0]}</p>
            </div>
          </div>
        )}
      </div>

      {/* Score and Progress Panel */}
      <div className="absolute top-4 right-80 z-10 bg-white bg-opacity-95 rounded-lg p-4 shadow-lg">
        <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
          <span>🏆</span> Tiến độ
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Điểm số:</span>
            <span className="font-bold text-blue-600">{score}</span>
          </div>
          <div className="flex justify-between">
            <span>Hoàn thành:</span>
            <span className="font-bold text-green-600">{completedChallenges.length}/{gameData.challenges.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(completedChallenges.length / gameData.challenges.length) * 100}%` }}
            ></div>
          </div>
          <button 
            onClick={() => setGameStarted(false)} 
            className="w-full px-2 py-1 bg-gray-500 hover:bg-gray-600 text-white rounded text-xs transition-colors"
          >
            📋 Quay lại menu
          </button>
        </div>
      </div>

      {/* Atom palette */}
      <div className="absolute top-4 right-4 z-10 bg-white bg-opacity-90 rounded-lg p-4 shadow-lg">
        <h4 className="text-sm font-bold text-gray-800 mb-2">🧬 Nguyên tố</h4>
        <div className="grid grid-cols-2 gap-2">
          {DEFAULT_ATOMS.map(atom => (
            <button
              key={atom.symbol}
              onClick={() => handleAddAtom(atom.symbol)}
              className="px-2 py-1 text-xs font-bold rounded transition-colors hover:opacity-80"
              style={{ 
                backgroundColor: atom.color + '40', 
                border: `2px solid ${atom.color}`,
                color: atom.color === '#ffffff' ? '#000000' : atom.color 
              }}
            >
              {atom.symbol}
            </button>
          ))}
        </div>
        
        {/* Fullscreen button - only show on desktop */}
        <div className="hidden md:block mt-3 pt-2 border-t border-gray-300">
          <button
            onClick={toggleFullscreen}
            className="w-full px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-xs transition-colors"
            title={isFullscreen ? 'Thoát fullscreen' : 'Chế độ toàn màn hình'}
          >
            {isFullscreen ? '🗗 Thoát fullscreen' : '⛶ Fullscreen'}
          </button>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 z-10 bg-black bg-opacity-80 rounded-lg p-3 text-white text-xs">
        <div className="space-y-1">
          <p>• Click atoms to select (max 2)</p>
          <p>• <kbd>Space</kbd> Create bond</p>
          <p>• <kbd>Esc</kbd> Deselect all</p>
          <p>• <kbd>R</kbd> Reset game</p>
          <p>• Mouse: Rotate, zoom, pan</p>
        </div>
      </div>

      {/* 3D Canvas */}
      <Canvas camera={{ position: [5, 5, 5] }}>
        <GameScene 
          key={gameKey}
          gameData={gameData} 
          onScoreChange={handleScoreChange}
          atomToAdd={atomToAdd}
          onChallengeComplete={handleChallengeComplete}
          currentChallenge={currentChallenge}
        />
      </Canvas>

      {/* Challenge Complete Overlay */}
      {showChallengeComplete && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md text-center transform animate-pulse">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-green-600 mb-2">Thử thách hoàn thành!</h2>
            <p className="text-gray-600 mb-4">
              Bạn đã tạo thành công {getTargetMolecule()?.name}!
            </p>
            <div className="text-sm text-gray-500">
              Tự động chuyển sang thử thách tiếp theo...
            </div>
          </div>
        </div>
      )}

      {/* All Challenges Complete */}
      {completedChallenges.length === gameData.challenges.length && (
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 to-blue-900/80 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-lg text-center">
            <div className="text-8xl mb-6">🏆</div>
            <h2 className="text-3xl font-bold text-green-600 mb-4">Chúc mừng!</h2>
            <p className="text-lg text-gray-700 mb-4">
              Bạn đã hoàn thành tất cả thử thách trong phòng thí nghiệm hóa học 3D!
            </p>
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <div className="text-2xl font-bold text-green-700">Tổng điểm: {score}</div>
              <div className="text-sm text-green-600">Hoàn thành: {completedChallenges.length}/{gameData.challenges.length} thử thách</div>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all"
            >
              🔄 Chơi lại
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
