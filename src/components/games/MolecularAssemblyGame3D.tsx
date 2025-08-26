'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Sphere, Cylinder } from '@react-three/drei';
import { Vector3 } from 'three';
import { useAdvancedGameStore } from '@/stores/advancedGameStore';

/* eslint-disable @typescript-eslint/no-explicit-any */

// Chemical elements with their properties
const ELEMENTS = {
  H: { color: '#ffffff', radius: 0.1, name: 'Hydrogen' },
  C: { color: '#333333', radius: 0.15, name: 'Carbon' },
  N: { color: '#0000ff', radius: 0.14, name: 'Nitrogen' },
  O: { color: '#ff0000', radius: 0.13, name: 'Oxygen' },
  P: { color: '#ff8800', radius: 0.17, name: 'Phosphorus' },
  S: { color: '#ffff00', radius: 0.16, name: 'Sulfur' },
  Cl: { color: '#00ff00', radius: 0.18, name: 'Chlorine' },
  Na: { color: '#8000ff', radius: 0.19, name: 'Sodium' }
};

// Target molecules for challenges
const TARGET_MOLECULES = {
  H2O: { atoms: ['H', 'O', 'H'], bonds: [['H', 'O'], ['O', 'H']], name: 'Water' },
  CH4: { atoms: ['C', 'H', 'H', 'H', 'H'], bonds: [['C', 'H'], ['C', 'H'], ['C', 'H'], ['C', 'H']], name: 'Methane' },
  NH3: { atoms: ['N', 'H', 'H', 'H'], bonds: [['N', 'H'], ['N', 'H'], ['N', 'H']], name: 'Ammonia' },
  C2H6: { atoms: ['C', 'C', 'H', 'H', 'H', 'H', 'H', 'H'], bonds: [['C', 'C'], ['C', 'H'], ['C', 'H'], ['C', 'H'], ['C', 'H'], ['C', 'H'], ['C', 'H']], name: 'Ethane' },
  DNA_BASE: { atoms: ['C', 'N', 'O', 'P', 'H'], bonds: [['C', 'N'], ['N', 'O'], ['O', 'P']], name: 'DNA Nucleotide' }
};

// 3D Atom Component
function Atom3D({
  element,
  position,
  isSelected = false,
  isBonding = false,
  onClick,
  atomId
}: {
  element: string;
  position: [number, number, number];
  isSelected?: boolean;
  isBonding?: boolean;
  onClick: (atomId: string) => void;
  atomId: string;
}) {
  const atomRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (atomRef.current) {
      if (isSelected) {
        atomRef.current.rotation.y += 0.02;
        atomRef.current.rotation.x += 0.01;
      }
      
      if (isBonding) {
        const scale = 1 + Math.sin(Date.now() * 0.008) * 0.1;
        atomRef.current.scale.setScalar(scale);
      }
    }
  });

  const elementData = ELEMENTS[element as keyof typeof ELEMENTS] || ELEMENTS.H;

  return (
    <group
      position={position}
      ref={atomRef}
      onClick={() => onClick(atomId)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Sphere 
        args={[elementData.radius * (hovered ? 1.3 : 1), 32, 32]}
      >
        <meshStandardMaterial
          color={elementData.color}
          emissive={elementData.color}
          emissiveIntensity={isSelected ? 0.5 : isBonding ? 0.3 : 0.1}
          metalness={0.3}
          roughness={0.7}
        />
      </Sphere>

      {/* Selection ring */}
      {isSelected && (
        <Sphere args={[elementData.radius * 1.5, 32, 32]}>
          <meshBasicMaterial
            color="#00ffff"
            transparent
            opacity={0.3}
            wireframe
          />
        </Sphere>
      )}

      {/* Element label */}
      <Html position={[0, elementData.radius + 0.2, 0]} center>
        <div className={`text-white text-sm font-bold px-2 py-1 rounded ${
          isSelected ? 'bg-cyan-600' : 'bg-black bg-opacity-60'
        }`}>
          {element}
          {hovered && (
            <div className="text-xs text-gray-300">
              {elementData.name}
            </div>
          )}
        </div>
      </Html>
    </group>
  );
}

// 3D Chemical Bond Component
function ChemicalBond3D({
  startPosition,
  endPosition,
  bondType
}: {
  startPosition: [number, number, number];
  endPosition: [number, number, number];
  bondType: 'single' | 'double' | 'triple';
}) {
  const bondRef = useRef<any>(null);

  useFrame(() => {
    if (bondRef.current) {
      bondRef.current.rotation.z += 0.001;
    }
  });

  const start = new Vector3(...startPosition);
  const end = new Vector3(...endPosition);
  const direction = end.clone().sub(start);
  const length = direction.length();
  const center = start.clone().add(direction.clone().multiplyScalar(0.5));

  const bondColor = bondType === 'single' ? '#ffffff' : bondType === 'double' ? '#ffff00' : '#ff0000';
  const bondRadius = bondType === 'single' ? 0.02 : bondType === 'double' ? 0.03 : 0.04;

  return (
    <group position={center.toArray()} ref={bondRef}>
      <Cylinder 
        args={[bondRadius, bondRadius, length, 8]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          color={bondColor}
          emissive={bondColor}
          emissiveIntensity={0.2}
        />
      </Cylinder>

      {/* Multiple bonds for double/triple */}
      {bondType === 'double' && (
        <Cylinder
          args={[bondRadius * 0.7, bondRadius * 0.7, length, 8]}
          position={[0.1, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial
            color={bondColor}
            emissive={bondColor}
            emissiveIntensity={0.2}
          />
        </Cylinder>
      )}

      {bondType === 'triple' && (
        <>
          <Cylinder
            args={[bondRadius * 0.6, bondRadius * 0.6, length, 8]}
            position={[0.08, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <meshStandardMaterial color={bondColor} />
          </Cylinder>
          <Cylinder
            args={[bondRadius * 0.6, bondRadius * 0.6, length, 8]}
            position={[-0.08, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <meshStandardMaterial color={bondColor} />
          </Cylinder>
        </>
      )}

      {/* Bond type label */}
      <Html position={[0, 0.3, 0]} center>
        <div className="text-white text-xs bg-gray-800 bg-opacity-80 px-1 py-0.5 rounded">
          {bondType.toUpperCase()}
        </div>
      </Html>
    </group>
  );
}

// Molecular Assembly Control Panel
function MolecularControlPanel() {
  const { molecular, updateMolecularState, addAtom, createBond } = useAdvancedGameStore();
  const [selectedElement, setSelectedElement] = useState('H');
  const [selectedAtom, setSelectedAtom] = useState<string | null>(null);
  const [bondType, setBondType] = useState<'single' | 'double' | 'triple'>('single');
  const [currentTarget, setCurrentTarget] = useState('H2O');

  const availableElements = Object.keys(ELEMENTS);
  const bondTypes: ('single' | 'double' | 'triple')[] = ['single', 'double', 'triple'];

  const addNewAtom = () => {
    const position: [number, number, number] = [
      (molecular.molecules.length % 4) * 2 - 3,
      Math.floor(molecular.molecules.length / 4) * 2,
      0
    ];
    addAtom(selectedElement, position);
  };

  const handleAtomClick = (atomId: string) => {
    if (!selectedAtom) {
      setSelectedAtom(atomId);
      updateMolecularState({
        assembly: { ...molecular.assembly, selectedAtom: atomId }
      });
    } else if (selectedAtom !== atomId) {
      // Create bond between selected atoms
      createBond(selectedAtom, atomId, bondType);
      setSelectedAtom(null);
      updateMolecularState({
        assembly: { ...molecular.assembly, selectedAtom: null }
      });
    } else {
      setSelectedAtom(null);
      updateMolecularState({
        assembly: { ...molecular.assembly, selectedAtom: null }
      });
    }
  };

  const checkMoleculeComplete = () => {
    const target = TARGET_MOLECULES[currentTarget as keyof typeof TARGET_MOLECULES];
    if (target) {
      // Simple validation - check if we have right number of atoms
      const currentMolecule = molecular.molecules[0];
      if (currentMolecule && currentMolecule.atoms.length >= target.atoms.length) {
        updateMolecularState({
          score: molecular.score + 100,
          research: {
            ...molecular.research,
            points: molecular.research.points + 50,
            discoveredMolecules: [...molecular.research.discoveredMolecules, target.name]
          }
        });
      }
    }
  };

  return (
    <div className="absolute top-4 left-4 bg-black bg-opacity-80 text-white p-4 rounded-lg max-w-sm">
      <h3 className="text-lg font-bold mb-3 text-purple-300">🧪 Molecular Assembly Lab</h3>
      
      {/* Element Selection */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Select Element</h4>
        <div className="grid grid-cols-4 gap-2">
          {availableElements.map((element) => (
            <button
              key={element}
              onClick={() => setSelectedElement(element)}
              className={`px-2 py-1 rounded text-sm font-bold ${
                selectedElement === element 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              style={{ 
                backgroundColor: selectedElement === element ? undefined : ELEMENTS[element as keyof typeof ELEMENTS].color,
                color: selectedElement === element ? undefined : '#000000'
              }}
            >
              {element}
            </button>
          ))}
        </div>
        <button
          onClick={addNewAtom}
          className="bg-green-600 hover:bg-green-500 px-3 py-1 rounded mt-2 w-full"
        >
          + Add {selectedElement} Atom
        </button>
      </div>

      {/* Bond Type Selection */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Bond Type</h4>
        <div className="flex gap-2">
          {bondTypes.map((type) => (
            <button
              key={type}
              onClick={() => setBondType(type)}
              className={`px-2 py-1 rounded text-xs ${
                bondType === type 
                  ? 'bg-yellow-600 text-white' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Target Molecule Challenge */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Target Molecule</h4>
        <select
          value={currentTarget}
          onChange={(e) => setCurrentTarget(e.target.value)}
          className="bg-gray-700 text-white px-2 py-1 rounded w-full mb-2"
        >
          {Object.entries(TARGET_MOLECULES).map(([key, mol]) => (
            <option key={key} value={key}>
              {mol.name} ({key})
            </option>
          ))}
        </select>
        <button
          onClick={checkMoleculeComplete}
          className="bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded w-full text-sm"
        >
          ✅ Check Molecule
        </button>
      </div>

      {/* Assembly Stats */}
      <div className="text-sm border-t border-gray-600 pt-2">
        <div>Molecules: {molecular.molecules.length}</div>
        <div>Score: {molecular.score}</div>
        <div>Research Points: {molecular.research.points}</div>
        <div>Discovered: {molecular.research.discoveredMolecules.length}</div>
        {selectedAtom && (
          <div className="text-cyan-300 font-semibold">
            Selected Atom: {selectedAtom}
          </div>
        )}
      </div>
    </div>
  );
}

// Main Molecular Assembly Game component
export default function MolecularAssemblyGame3D() {
  const { molecular } = useAdvancedGameStore();
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key.toLowerCase()) {
        case 'f':
          setIsFullscreen(!isFullscreen);
          break;
        case 'h':
          // Quick add Hydrogen
          break;
        case 'c':
          // Quick add Carbon  
          break;
        case 'o':
          // Quick add Oxygen
          break;
        case 'n':
          // Quick add Nitrogen
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isFullscreen]);

  return (
    <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50' : 'h-screen'} bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900`}>
      <Canvas
        camera={{ position: [0, 5, 10], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-5, 5, 5]} intensity={0.8} color="#ff88ff" />
        <pointLight position={[5, -5, -5]} intensity={0.6} color="#88ffff" />

        {/* Controls */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          maxDistance={20}
          minDistance={2}
        />

        {/* Lab bench/workspace */}
        <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[15, 15]} />
          <meshStandardMaterial color="#333333" />
        </mesh>

        {/* Render molecules */}
        {molecular.molecules.map((molecule, molIndex) => (
          <group key={`molecule-${molIndex}`}>
            {/* Render atoms */}
            {molecule.atoms.map((atom, atomIndex) => (
              <Atom3D
                key={`atom-${molIndex}-${atomIndex}`}
                element={atom.element}
                position={atom.position}
                isSelected={molecular.assembly.selectedAtom === `${molIndex}-${atomIndex}`}
                isBonding={molecular.assembly.bondingMode}
                onClick={() => console.log(`Atom clicked: ${molIndex}-${atomIndex}`)}
                atomId={`${molIndex}-${atomIndex}`}
              />
            ))}

            {/* Render bonds */}
            {molecule.bonds.map((bond, bondIndex) => {
              const atom1 = molecule.atoms.find(a => a.element === bond.atom1);
              const atom2 = molecule.atoms.find(a => a.element === bond.atom2);
              
              if (atom1 && atom2) {
                return (
                  <ChemicalBond3D
                    key={`bond-${molIndex}-${bondIndex}`}
                    startPosition={atom1.position}
                    endPosition={atom2.position}
                    bondType={bond.type}
                  />
                );
              }
              return null;
            })}
          </group>
        ))}

        {/* Laboratory equipment in background */}
        <mesh position={[-8, -1, 0]}>
          <boxGeometry args={[2, 1.5, 1]} />
          <meshStandardMaterial color="#666666" />
        </mesh>

        <mesh position={[8, -1, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 2, 16]} />
          <meshStandardMaterial color="#444444" />
        </mesh>

        {/* Grid */}
        <gridHelper args={[20, 20, '#444444', '#222222']} position={[0, -2, 0]} />
      </Canvas>

      {/* Control Panel */}
      <MolecularControlPanel />

      {/* Fullscreen toggle */}
      <button
        onClick={() => setIsFullscreen(!isFullscreen)}
        className="absolute top-4 right-4 bg-purple-600 hover:bg-purple-500 text-white px-3 py-2 rounded"
      >
        {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'} [F]
      </button>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-80 text-white p-3 rounded max-w-sm">
        <h4 className="font-bold mb-2 text-purple-300">🧪 Assembly Instructions</h4>
        <div className="text-sm space-y-1">
          <div>• Select element → Add atom</div>
          <div>• Click atom 1 → Click atom 2 → Create bond</div>
          <div>• [H][C][O][N]: Quick add elements</div>
          <div>• [F]: Toggle fullscreen</div>
          <div>• Build target molecules for points</div>
        </div>
      </div>

      {/* Chemistry Information */}
      <div className="absolute bottom-4 right-4 bg-black bg-opacity-80 text-white p-3 rounded max-w-xs">
        <h4 className="font-bold mb-2 text-cyan-300">⚗️ Chemistry Info</h4>
        <div className="text-sm space-y-1">
          <div><strong>Single Bond:</strong> σ orbital overlap</div>
          <div><strong>Double Bond:</strong> σ + π orbital overlap</div>
          <div><strong>Triple Bond:</strong> σ + 2π orbital overlap</div>
          <div><strong>VSEPR Theory:</strong> Electron pair repulsion shapes molecules</div>
          <div className="text-purple-300 font-semibold mt-2">
            &quot;Chemistry is the study of matter and the changes it undergoes&quot;
          </div>
        </div>
      </div>
    </div>
  );
}
