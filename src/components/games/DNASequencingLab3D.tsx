'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Sphere, Box } from '@react-three/drei';
import { Vector3, CatmullRomCurve3 } from 'three';
import * as THREE from 'three';
import { useAdvancedGameStore } from '@/stores/advancedGameStore';

/* eslint-disable @typescript-eslint/no-explicit-any */

// DNA Base component (A, T, G, C)
function DNABase3D({
  base,
  position,
  isPaired = false,
  isSelected = false,
  onClick
}: {
  base: string;
  position: [number, number, number];
  isPaired?: boolean;
  isSelected?: boolean;
  onClick: () => void;
}) {
  const meshRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (meshRef.current && isSelected) {
      meshRef.current.rotation.y += delta * 2;
    }
  });

  const color = useMemo(() => {
    switch (base.toUpperCase()) {
      case 'A': return '#ff4444'; // Adenine - Red
      case 'T': return '#44ff44'; // Thymine - Green
      case 'G': return '#4444ff'; // Guanine - Blue
      case 'C': return '#ffff44'; // Cytosine - Yellow
      default: return '#888888';
    }
  }, [base]);

  return (
    <group position={position}>
      {/* Main base sphere */}
      <Sphere
        ref={meshRef}
        args={[0.2, 16, 16]}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered || isSelected ? 1.3 : 1}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={isSelected ? 0.5 : 0.2}
        />
      </Sphere>

      {/* Base letter label */}
      <Html position={[0, 0.3, 0]} center>
        <div className="text-white font-bold text-sm bg-black bg-opacity-60 px-2 py-1 rounded">
          {base.toUpperCase()}
        </div>
      </Html>

      {/* Hydrogen bonds to paired base */}
      {isPaired && (
        <>
          <meshBasicMaterial attach="material" color="#ffffff" />
          <Html position={[0, -0.3, 0.75]} center>
            <div className="text-gray-300 text-xs">
              {base === 'A' || base === 'T' ? '2 H-bonds' : '3 H-bonds'}
            </div>
          </Html>
        </>
      )}
    </group>
  );
}

// DNA Double Helix structure
function DNAHelix({
  sequence,
  position = [0, 0, 0],
  isEditing = false,
  onRemove
}: {
  sequence: string;
  position?: [number, number, number];
  isEditing?: boolean;
  onRemove?: () => void;
}) {
  const helixRef = useRef<THREE.Group>(null);
  const [selectedBase, setSelectedBase] = useState<number | null>(null);

  useFrame((_, delta) => {
    if (helixRef.current && !isEditing) {
      helixRef.current.rotation.y += delta * 0.3;
    }
  });

  // Create helix curve
  const helixCurve = useMemo(() => {
    const points = [];
    const turns = sequence.length / 10;
    const height = sequence.length * 0.3;
    
    for (let i = 0; i < sequence.length; i++) {
      const angle = (i / sequence.length) * Math.PI * 2 * turns;
      const y = (i / sequence.length) * height - height / 2;
      points.push(new Vector3(Math.cos(angle) * 1.5, y, Math.sin(angle) * 1.5));
    }
    
    return new CatmullRomCurve3(points);
  }, [sequence]);

  const complementarySequence = useMemo(() => {
    return sequence.split('').map(base => {
      switch (base.toUpperCase()) {
        case 'A': return 'T';
        case 'T': return 'A';
        case 'G': return 'C';
        case 'C': return 'G';
        default: return 'N';
      }
    }).join('');
  }, [sequence]);

  return (
    <group position={position} ref={helixRef}>
      {/* Sugar-phosphate backbone - simplified */}
      <mesh
        onContextMenu={(e) => {
          e.stopPropagation();
          if (onRemove) {
            onRemove();
          }
        }}
      >
        <torusGeometry args={[1.5, 0.1, 8, 32]} />
        <meshStandardMaterial color="#8844aa" />
      </mesh>

      {/* DNA bases on first strand */}
      {sequence.split('').map((base, index) => {
        const t = index / (sequence.length - 1);
        const point = helixCurve.getPoint(t);
        return (
          <DNABase3D
            key={`base1-${index}`}
            base={base}
            position={[point.x, point.y, point.z]}
            isPaired={true}
            isSelected={selectedBase === index}
            onClick={() => setSelectedBase(selectedBase === index ? null : index)}
          />
        );
      })}

      {/* DNA bases on complementary strand */}
      {complementarySequence.split('').map((base, index) => {
        const t = index / (complementarySequence.length - 1);
        const point = helixCurve.getPoint(t);
        const complementaryPoint: [number, number, number] = [
          -point.x * 0.8, point.y, -point.z * 0.8
        ];
        return (
          <DNABase3D
            key={`base2-${index}`}
            base={base}
            position={complementaryPoint}
            isPaired={true}
            onClick={() => {}}
          />
        );
      })}
    </group>
  );
}

// Protein 3D structure
function Protein3D({
  aminoAcids,
  position,
  foldingState = 0
}: {
  aminoAcids: string[];
  position: [number, number, number];
  foldingState?: number;
}) {
  const proteinRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (proteinRef.current) {
      proteinRef.current.rotation.x += delta * 0.2;
      proteinRef.current.rotation.y += delta * 0.3;
    }
  });

  // Protein structure types
  const structures = ['random-coil', 'alpha-helix', 'beta-sheet'];
  const currentStructure = structures[Math.floor(foldingState / 33)] || 'random-coil';

  return (
    <group position={position} ref={proteinRef}>
      {aminoAcids.map((amino, index) => {
        let pos: [number, number, number];
        
        switch (currentStructure) {
          case 'alpha-helix':
            const helixAngle = index * 0.6;
            pos = [
              Math.cos(helixAngle) * 1.5,
              index * 0.3,
              Math.sin(helixAngle) * 1.5
            ];
            break;
          case 'beta-sheet':
            pos = [
              (index % 2) * 2 - 1,
              Math.floor(index / 2) * 0.5,
              (index % 4) * 0.3
            ];
            break;
          default: // random-coil
            pos = [
              (Math.random() - 0.5) * 3,
              index * 0.2,
              (Math.random() - 0.5) * 3
            ];
        }

        return (
          <Sphere key={`amino-${index}`} args={[0.15, 12, 12]} position={pos}>
            <meshStandardMaterial
              color={amino === 'H' ? '#ff8844' : amino === 'P' ? '#4488ff' : '#88ff44'}
              emissive={amino === 'H' ? '#ff4422' : amino === 'P' ? '#2244ff' : '#44aa22'}
              emissiveIntensity={0.3}
            />
          </Sphere>
        );
      })}

      <Html position={[0, 3, 0]} center>
        <div className="text-white text-sm bg-purple-600 bg-opacity-80 px-2 py-1 rounded">
          {currentStructure.replace('-', ' ').toUpperCase()}
        </div>
      </Html>
    </group>
  );
}

// DNA Sequencing Tools Panel
function DNAToolsPanel() {
  const { dna, updateDNAState, addDNAStrand } = useAdvancedGameStore();
  const [newSequence, setNewSequence] = useState('ATCGATCGATCG');

  const commonSequences = [
    'ATCGATCGATCG',
    'GGCCTTAACGTA',
    'CGTACGTACGTA',
    'ATGCATGCATGC'
  ];

  const addNewDNAStrand = () => {
    const position: [number, number, number] = [
      (dna.dnaStrands.length % 3) * 4 - 4,
      0,
      (dna.dnaStrands.length % 2) * 3 - 1.5
    ];
    addDNAStrand(newSequence, position);
  };

  const performSequencing = () => {
    updateDNAState({
      currentExperiment: 'sequencing',
      progress: Math.min(dna.progress + 20, 100)
    });
  };

  const foldProtein = () => {
    updateDNAState({
      proteins: dna.proteins.map(protein => ({
        ...protein,
        foldingState: Math.min(protein.foldingState + 25, 100)
      }))
    });
  };

  return (
    <div className="absolute top-4 left-4 bg-black bg-opacity-80 text-white p-4 rounded-lg max-w-sm">
      <h3 className="text-lg font-bold mb-3 text-green-300">🧬 DNA Sequencing Lab</h3>
      
      {/* DNA Input */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Create DNA Strand</h4>
        <input
          type="text"
          value={newSequence}
          onChange={(e) => setNewSequence(e.target.value.toUpperCase())}
          className="bg-gray-700 text-white px-2 py-1 rounded w-full text-sm"
          placeholder="ATCGATCG..."
          maxLength={20}
        />
        <button
          onClick={addNewDNAStrand}
          className="bg-green-600 hover:bg-green-500 px-3 py-1 rounded mt-2 w-full"
        >
          + Add DNA Strand
        </button>
      </div>

      {/* Quick sequences */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Quick Sequences</h4>
        <div className="grid grid-cols-2 gap-1">
          {commonSequences.map((seq, index) => (
            <button
              key={index}
              onClick={() => setNewSequence(seq)}
              className="bg-blue-600 hover:bg-blue-500 px-2 py-1 rounded text-xs"
            >
              {seq.substring(0, 6)}...
            </button>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Lab Tools</h4>
        <div className="space-y-2">
          <button
            onClick={performSequencing}
            className="bg-purple-600 hover:bg-purple-500 px-3 py-1 rounded w-full text-sm"
          >
            🔍 Sequence Analysis
          </button>
          <button
            onClick={foldProtein}
            className="bg-orange-600 hover:bg-orange-500 px-3 py-1 rounded w-full text-sm"
          >
            🌀 Protein Folding
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="text-sm border-t border-gray-600 pt-2">
        <div>DNA Strands: {dna.dnaStrands.length}</div>
        <div>Proteins: {dna.proteins.length}</div>
        <div>Progress: {dna.progress}%</div>
        <div>Genes Found: {dna.discoveredGenes.length}</div>
      </div>
    </div>
  );
}

// Main DNA Sequencing Lab component
export default function DNASequencingLab3D() {
  const { dna, removeDNAStrand } = useAdvancedGameStore();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [cameraTarget, setCameraTarget] = useState<[number, number, number]>([0, 0, 0]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key.toLowerCase()) {
        case 'f':
          setIsFullscreen(!isFullscreen);
          break;
        case '1':
          setCameraTarget([0, 0, 0]); // Focus on DNA
          break;
        case '2':
          setCameraTarget([5, 2, 0]); // Focus on proteins
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isFullscreen]);

  return (
    <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50' : 'h-screen'} bg-gradient-to-br from-green-900 via-blue-900 to-black`}>
      <Canvas
        camera={{ position: [0, 5, 10], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-5, 5, 5]} intensity={0.8} color="#44ff44" />
        <pointLight position={[5, -5, -5]} intensity={0.6} color="#ff4444" />

        {/* Controls */}
        <OrbitControls
          target={cameraTarget}
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          maxDistance={20}
          minDistance={2}
        />

        {/* Lab environment */}
        <Box args={[20, 0.1, 20]} position={[0, -3, 0]}>
          <meshStandardMaterial color="#333333" />
        </Box>

        {/* Render DNA strands */}
        {dna.dnaStrands.map((strand) => (
          <DNAHelix
            key={strand.id}
            sequence={strand.sequence}
            position={strand.position}
            isEditing={strand.isEditing}
            onRemove={() => removeDNAStrand(strand.id)}
          />
        ))}

        {/* Render Proteins */}
        {dna.proteins.map((protein) => (
          <Protein3D
            key={protein.id}
            aminoAcids={protein.aminoAcids}
            position={protein.position}
            foldingState={protein.foldingState}
          />
        ))}

        {/* Lab equipment */}
        <Box args={[2, 1, 1]} position={[-8, -1, 0]}>
          <meshStandardMaterial color="#666666" emissive="#333333" emissiveIntensity={0.3} />
        </Box>
        <Html position={[-8, 0.5, 0]} center>
          <div className="text-white text-sm bg-gray-800 px-2 py-1 rounded">
            PCR Machine
          </div>
        </Html>

        <Box args={[1.5, 1.2, 0.8]} position={[8, -1, 0]}>
          <meshStandardMaterial color="#444488" emissive="#222244" emissiveIntensity={0.3} />
        </Box>
        <Html position={[8, 0.5, 0]} center>
          <div className="text-white text-sm bg-blue-800 px-2 py-1 rounded">
            Sequencer
          </div>
        </Html>

        {/* Grid */}
        <gridHelper args={[20, 20, '#444444', '#222222']} position={[0, -3, 0]} />
      </Canvas>

      {/* Tools Panel */}
      <DNAToolsPanel />

      {/* Fullscreen toggle */}
      <button
        onClick={() => setIsFullscreen(!isFullscreen)}
        className="absolute top-4 right-4 bg-green-600 hover:bg-green-500 text-white px-3 py-2 rounded"
      >
        {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'} [F]
      </button>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-80 text-white p-3 rounded max-w-sm">
        <h4 className="font-bold mb-2 text-green-300">🧬 DNA Lab Controls</h4>
        <div className="text-sm space-y-1">
          <div>• Click DNA bases: Select and examine</div>
          <div>• [1]: Focus on DNA strands</div>
          <div>• [2]: Focus on proteins</div>
          <div>• [F]: Toggle fullscreen</div>
          <div>• A=Red, T=Green, G=Blue, C=Yellow</div>
          <div>• DNA automatically rotates</div>
        </div>
      </div>

      {/* DNA Information */}
      <div className="absolute bottom-4 right-4 bg-black bg-opacity-80 text-white p-3 rounded max-w-xs">
        <h4 className="font-bold mb-2 text-cyan-300">📚 Genetics Info</h4>
        <div className="text-sm space-y-1">
          <div><strong>Base Pairing:</strong> A-T (2 bonds), G-C (3 bonds)</div>
          <div><strong>DNA Double Helix:</strong> Antiparallel strands</div>
          <div><strong>Protein Folding:</strong> Primary → Secondary → Tertiary</div>
          <div><strong>Gene Expression:</strong> DNA → RNA → Protein</div>
          <div className="text-green-300 font-semibold mt-2">
            &quot;DNA is the language of life, written in four letters: A, T, G, C&quot;
          </div>
        </div>
      </div>
    </div>
  );
}
