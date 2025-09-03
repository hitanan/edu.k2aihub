import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Quantum Computing Game State
export interface QuantumState {
  qubits: Array<{
    id: string;
    position: [number, number, number];
    state: 'superposition' | '0' | '1';
    entangled: boolean;
    rotationX: number;
    rotationY: number;
    rotationZ: number;
  }>;
  circuits: Array<{
    id: string;
    gates: Array<{
      type: 'Hadamard' | 'Pauli-X' | 'Pauli-Y' | 'Pauli-Z' | 'CNOT';
      position: [number, number];
      qubits: string[];
    }>;
  }>;
  currentLevel: number;
  score: number;
  completedExperiments: string[];
  achievements: string[];
}

// DNA Sequencing Game State
export interface DNAState {
  dnaStrands: Array<{
    id: string;
    sequence: string;
    position: [number, number, number];
    isEditing: boolean;
    mutations: Array<{
      position: number;
      original: string;
      mutated: string;
    }>;
  }>;
  proteins: Array<{
    id: string;
    aminoAcids: string[];
    foldingState: number;
    position: [number, number, number];
    isComplete: boolean;
  }>;
  tools: {
    selectedTool: 'sequencer' | 'editor' | 'analyzer' | 'folder';
    editMode: boolean;
  };
  currentExperiment: string;
  progress: number;
  discoveredGenes: string[];
}

// Smart Home IoT State
export interface SmartHomeState {
  rooms: Array<{
    id: string;
    name: string;
    position: [number, number, number];
    devices: Array<{
      id: string;
      type: 'light' | 'thermostat' | 'camera' | 'sensor' | 'speaker' | 'lock';
      position: [number, number, number];
      status: 'on' | 'off' | 'standby';
      value: number;
      automationRules: Array<{
        condition: string;
        action: string;
      }>;
    }>;
  }>;
  energyUsage: number;
  securityStatus: 'armed' | 'disarmed' | 'alert';
  scenarios: Array<{
    id: string;
    name: string;
    actions: Array<{
      deviceId: string;
      action: string;
      value?: number;
    }>;
  }>;
  currentScenario: string | null;
  budget: number;
  installedDevices: number;
}

// Molecular Assembly Game State
export interface MolecularAssemblyState {
  molecules: Array<{
    id: string;
    atoms: Array<{
      element: string;
      position: [number, number, number];
      bonds: string[];
      hybridization: 'sp' | 'sp2' | 'sp3';
    }>;
    bonds: Array<{
      id: string;
      atom1: string;
      atom2: string;
      type: 'single' | 'double' | 'triple';
      strength: number;
    }>;
    energy: number;
    stability: number;
  }>;
  proteins: Array<{
    id: string;
    sequence: string[];
    structure: 'alpha-helix' | 'beta-sheet' | 'random-coil';
    foldingEnergy: number;
    position: [number, number, number];
  }>;
  currentTarget: string;
  assembly: {
    selectedAtom: string | null;
    bondingMode: boolean;
    energyCalculation: boolean;
  };
  challenges: Array<{
    id: string;
    name: string;
    targetMolecule: string;
    difficulty: number;
    completed: boolean;
  }>;
  score: number;
  research: {
    points: number;
    unlockedElements: string[];
    discoveredMolecules: string[];
  };
}

// Physics Lab Game State
export interface PhysicsLabState {
  experiments: Array<{
    id: string;
    type: 'mechanics' | 'optics' | 'electromagnetic' | 'thermodynamics';
    equipment: Array<{
      id: string;
      type: string;
      position: [number, number, number];
      properties: Record<string, string | number | boolean>;
      connected: string[];
    }>;
    measurements: Array<{
      time: number;
      value: number;
      unit: string;
      property: string;
    }>;
    isRunning: boolean;
    results: Array<{
      hypothesis: string;
      measurement: number;
      conclusion: string;
    }>;
  }>;
  currentExperiment: string | null;
  labEquipment: Array<{
    id: string;
    name: string;
    type: string;
    available: boolean;
    condition: 'excellent' | 'good' | 'needs-maintenance';
  }>;
  safety: {
    safetyScore: number;
    violations: string[];
    protective: {
      goggles: boolean;
      gloves: boolean;
      labCoat: boolean;
    };
  };
  progress: {
    completedExperiments: string[];
    skillLevel: number;
    achievements: string[];
  };
}

// Combined Game Store
interface GameStore {
  quantum: QuantumState;
  dna: DNAState;
  smartHome: SmartHomeState;
  molecular: MolecularAssemblyState;
  physics: PhysicsLabState;

  // Actions
  updateQuantumState: (updates: Partial<QuantumState>) => void;
  addQubit: (position: [number, number, number]) => void;
  updateQubitState: (qubitId: string, state: 'superposition' | '0' | '1') => void;

  updateDNAState: (updates: Partial<DNAState>) => void;
  addDNAStrand: (sequence: string, position: [number, number, number]) => void;
  removeDNAStrand: (strandId: string) => void;
  mutateDNA: (strandId: string, position: number, newBase: string) => void;

  updateSmartHomeState: (updates: Partial<SmartHomeState>) => void;
  addDevice: (roomId: string, deviceType: string, position: [number, number, number]) => void;
  toggleDevice: (deviceId: string) => void;

  updateMolecularState: (updates: Partial<MolecularAssemblyState>) => void;
  addAtom: (element: string, position: [number, number, number]) => void;
  createBond: (atom1Id: string, atom2Id: string, bondType: 'single' | 'double' | 'triple') => void;
  removeAtom: (atomId: string) => void;

  updatePhysicsState: (updates: Partial<PhysicsLabState>) => void;
  startExperiment: (experimentId: string) => void;
  recordMeasurement: (
    experimentId: string,
    measurement: { time: number; value: number; unit: string; property: string },
  ) => void;

  resetAllGames: () => void;
}

const initialQuantumState: QuantumState = {
  qubits: [],
  circuits: [],
  currentLevel: 1,
  score: 0,
  completedExperiments: [],
  achievements: [],
};

const initialDNAState: DNAState = {
  dnaStrands: [],
  proteins: [],
  tools: {
    selectedTool: 'sequencer',
    editMode: false,
  },
  currentExperiment: '',
  progress: 0,
  discoveredGenes: [],
};

const initialSmartHomeState: SmartHomeState = {
  rooms: [
    {
      id: 'living-room',
      name: 'Phòng khách',
      position: [0, 0, 0],
      devices: [],
    },
    {
      id: 'bedroom',
      name: 'Phòng ngủ',
      position: [5, 0, 0],
      devices: [],
    },
    {
      id: 'kitchen',
      name: 'Nhà bếp',
      position: [0, 0, 5],
      devices: [],
    },
  ],
  energyUsage: 0,
  securityStatus: 'disarmed',
  scenarios: [],
  currentScenario: null,
  budget: 10000000, // 10 triệu VND
  installedDevices: 0,
};

const initialMolecularState: MolecularAssemblyState = {
  molecules: [],
  proteins: [],
  currentTarget: '',
  assembly: {
    selectedAtom: null,
    bondingMode: false,
    energyCalculation: false,
  },
  challenges: [
    {
      id: 'water-h2o',
      name: 'Tạo phân tử nước (H2O)',
      targetMolecule: 'H2O',
      difficulty: 1,
      completed: false,
    },
    {
      id: 'methane-ch4',
      name: 'Tạo phân tử methane (CH4)',
      targetMolecule: 'CH4',
      difficulty: 2,
      completed: false,
    },
    {
      id: 'protein-insulin',
      name: 'Gấp protein insulin',
      targetMolecule: 'INSULIN',
      difficulty: 5,
      completed: false,
    },
  ],
  score: 0,
  research: {
    points: 0,
    unlockedElements: ['H', 'C', 'O', 'N'],
    discoveredMolecules: [],
  },
};

const initialPhysicsState: PhysicsLabState = {
  experiments: [],
  currentExperiment: null,
  labEquipment: [
    {
      id: 'pendulum',
      name: 'Con lắc đơn',
      type: 'mechanics',
      available: true,
      condition: 'excellent',
    },
    {
      id: 'spring-mass',
      name: 'Lò xo - quả nặng',
      type: 'mechanics',
      available: true,
      condition: 'good',
    },
    {
      id: 'laser',
      name: 'Laser pointer',
      type: 'optics',
      available: true,
      condition: 'excellent',
    },
    {
      id: 'prism',
      name: 'Lăng kính',
      type: 'optics',
      available: true,
      condition: 'excellent',
    },
  ],
  safety: {
    safetyScore: 100,
    violations: [],
    protective: {
      goggles: false,
      gloves: false,
      labCoat: false,
    },
  },
  progress: {
    completedExperiments: [],
    skillLevel: 1,
    achievements: [],
  },
};

export const useAdvancedGameStore = create<GameStore>()(
  persist(
    (set) => ({
      quantum: initialQuantumState,
      dna: initialDNAState,
      smartHome: initialSmartHomeState,
      molecular: initialMolecularState,
      physics: initialPhysicsState,

      // Quantum Computing Actions
      updateQuantumState: (updates) =>
        set((state) => ({
          quantum: { ...state.quantum, ...updates },
        })),

      addQubit: (position) =>
        set((state) => ({
          quantum: {
            ...state.quantum,
            qubits: [
              ...state.quantum.qubits,
              {
                id: `qubit-${Date.now()}`,
                position,
                state: 'superposition',
                entangled: false,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
              },
            ],
          },
        })),

      updateQubitState: (qubitId, newState) =>
        set((state) => ({
          quantum: {
            ...state.quantum,
            qubits: state.quantum.qubits.map((qubit) => (qubit.id === qubitId ? { ...qubit, state: newState } : qubit)),
          },
        })),

      // DNA Sequencing Actions
      updateDNAState: (updates) =>
        set((state) => ({
          dna: { ...state.dna, ...updates },
        })),

      addDNAStrand: (sequence, position) =>
        set((state) => ({
          dna: {
            ...state.dna,
            dnaStrands: [
              ...state.dna.dnaStrands,
              {
                id: `dna-${Date.now()}`,
                sequence,
                position,
                isEditing: false,
                mutations: [],
              },
            ],
          },
        })),

      removeDNAStrand: (strandId) =>
        set((state) => ({
          dna: {
            ...state.dna,
            dnaStrands: state.dna.dnaStrands.filter((strand) => strand.id !== strandId),
          },
        })),

      mutateDNA: (strandId, position, newBase) =>
        set((state) => ({
          dna: {
            ...state.dna,
            dnaStrands: state.dna.dnaStrands.map((strand) =>
              strand.id === strandId
                ? {
                    ...strand,
                    mutations: [
                      ...strand.mutations,
                      {
                        position,
                        original: strand.sequence[position],
                        mutated: newBase,
                      },
                    ],
                  }
                : strand,
            ),
          },
        })),

      // Smart Home Actions
      updateSmartHomeState: (updates) =>
        set((state) => ({
          smartHome: { ...state.smartHome, ...updates },
        })),

      addDevice: (roomId, deviceType, position) =>
        set((state) => ({
          smartHome: {
            ...state.smartHome,
            rooms: state.smartHome.rooms.map((room) =>
              room.id === roomId
                ? {
                    ...room,
                    devices: [
                      ...room.devices,
                      {
                        id: `device-${Date.now()}`,
                        type: deviceType as 'light' | 'thermostat' | 'camera' | 'sensor' | 'speaker' | 'lock',
                        position,
                        status: 'off',
                        value: 0,
                        automationRules: [],
                      },
                    ],
                  }
                : room,
            ),
            installedDevices: state.smartHome.installedDevices + 1,
          },
        })),

      toggleDevice: (deviceId) =>
        set((state) => ({
          smartHome: {
            ...state.smartHome,
            rooms: state.smartHome.rooms.map((room) => ({
              ...room,
              devices: room.devices.map((device) =>
                device.id === deviceId
                  ? {
                      ...device,
                      status: device.status === 'on' ? 'off' : 'on',
                    }
                  : device,
              ),
            })),
          },
        })),

      // Molecular Assembly Actions
      updateMolecularState: (updates) =>
        set((state) => ({
          molecular: { ...state.molecular, ...updates },
        })),

      addAtom: (element, position) =>
        set((state) => {
          const newMolecule = {
            id: `molecule-${Date.now()}`,
            atoms: [
              {
                element,
                position,
                bonds: [],
                hybridization: 'sp3' as const,
              },
            ],
            bonds: [],
            energy: 0,
            stability: 50,
          };
          return {
            molecular: {
              ...state.molecular,
              molecules: [...state.molecular.molecules, newMolecule],
            },
          };
        }),

      createBond: (atom1Id, atom2Id, bondType) =>
        set((state) => ({
          molecular: {
            ...state.molecular,
            molecules: state.molecular.molecules.map((molecule) => {
              const hasAtom1 = molecule.atoms.some((atom) => atom.element === atom1Id);
              const hasAtom2 = molecule.atoms.some((atom) => atom.element === atom2Id);

              if (hasAtom1 || hasAtom2) {
                return {
                  ...molecule,
                  bonds: [
                    ...molecule.bonds,
                    {
                      id: `bond-${Date.now()}`,
                      atom1: atom1Id,
                      atom2: atom2Id,
                      type: bondType,
                      strength: bondType === 'single' ? 1 : bondType === 'double' ? 2 : 3,
                    },
                  ],
                };
              }
              return molecule;
            }),
          },
        })),

      removeAtom: (atomId: string) =>
        set((state) => ({
          molecular: {
            ...state.molecular,
            molecules: state.molecular.molecules
              .map((molecule) => ({
                ...molecule,
                atoms: molecule.atoms.filter((atom, index) => `${atom.element}-${index}` !== atomId),
                bonds: molecule.bonds.filter((bond) => bond.atom1 !== atomId && bond.atom2 !== atomId),
              }))
              .filter((molecule) => molecule.atoms.length > 0), // Remove empty molecules
          },
        })),

      // Physics Lab Actions
      updatePhysicsState: (updates) =>
        set((state) => ({
          physics: { ...state.physics, ...updates },
        })),

      startExperiment: (experimentId) =>
        set((state) => ({
          physics: {
            ...state.physics,
            currentExperiment: experimentId,
            experiments: state.physics.experiments.map((exp) =>
              exp.id === experimentId ? { ...exp, isRunning: true } : { ...exp, isRunning: false },
            ),
          },
        })),

      recordMeasurement: (experimentId, measurement) =>
        set((state) => ({
          physics: {
            ...state.physics,
            experiments: state.physics.experiments.map((exp) =>
              exp.id === experimentId
                ? {
                    ...exp,
                    measurements: [...exp.measurements, measurement],
                  }
                : exp,
            ),
          },
        })),

      resetAllGames: () =>
        set(() => ({
          quantum: initialQuantumState,
          dna: initialDNAState,
          smartHome: initialSmartHomeState,
          molecular: initialMolecularState,
          physics: initialPhysicsState,
        })),
    }),
    {
      name: 'advanced-3d-games-storage',
      partialize: (state) => ({
        quantum: state.quantum,
        dna: state.dna,
        smartHome: state.smartHome,
        molecular: state.molecular,
        physics: state.physics,
      }),
    },
  ),
);
