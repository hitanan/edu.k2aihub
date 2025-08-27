import React, { useState } from 'react';
import { 
  Dna, 
  Zap,
  Target,
  AlertTriangle,
  Play,
  RotateCcw,
  Award,
  Settings,
  Eye,
  Activity
} from 'lucide-react';

interface GeneEditingLab3DProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface Gene {
  id: string;
  name: string;
  function: string;
  chromosome: string;
  sequence: string; // Simplified DNA sequence
  expression: number; // 0-100
  mutations: string[];
  targetable: boolean;
}

interface CRISPRSystem {
  id: string;
  name: string;
  type: 'cas9' | 'cas12' | 'cas13' | 'base-editor' | 'prime-editor';
  precision: number; // 0-100
  efficiency: number; // 0-100
  offTargetRisk: number; // 0-100
  description: string;
  icon: React.ReactNode;
}

interface EditingProject {
  id: string;
  name: string;
  targetGene: Gene;
  editingSystem: CRISPRSystem;
  editType: 'knockout' | 'knock-in' | 'activation' | 'repression' | 'base-edit';
  targetSequence: string;
  guideRNA: string;
  expectedOutcome: string;
  success: boolean;
  efficiency: number;
  offTargetEffects: number;
}

interface Disease {
  id: string;
  name: string;
  description: string;
  targetGenes: string[];
  complexity: number; // 1-10
  prevalence: string;
  currentTreatments: string[];
}

const GeneEditingLab3DGame: React.FC<GeneEditingLab3DProps> = ({
  onComplete,
  timeLeft,
  onRestart,
}) => {
  // Game state
  const [gamePhase, setGamePhase] = useState<'setup' | 'design' | 'editing' | 'analysis' | 'results'>('setup');
  const [isStarted, setIsStarted] = useState(false);
  const [score, setScore] = useState(0);

  // Lab state
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);
  const [selectedGene, setSelectedGene] = useState<Gene | null>(null);
  const [selectedSystem, setSelectedSystem] = useState<CRISPRSystem | null>(null);
  const [selectedEditType, setSelectedEditType] = useState<string>('');
  const [currentProject, setCurrentProject] = useState<EditingProject | null>(null);
  const [ethicsScore, setEthicsScore] = useState(100);

  // Available genes
  const availableGenes: Gene[] = [
    {
      id: 'dystrophin',
      name: 'Dystrophin (DMD)',
      function: 'Muscle fiber structural protein',
      chromosome: 'X',
      sequence: 'ATGGCTGGCGTTCGCGATCTTCAAG',
      expression: 85,
      mutations: ['deletion', 'duplication', 'point_mutation'],
      targetable: true
    },
    {
      id: 'cftr',
      name: 'CFTR',
      function: 'Chloride channel regulation',
      chromosome: '7',
      sequence: 'ATGTCGTCGATCGAGTTCGGAATCG',
      expression: 75,
      mutations: ['F508del', 'G542X', 'N1303K'],
      targetable: true
    },
    {
      id: 'huntingtin',
      name: 'Huntingtin (HTT)',
      function: 'Neuronal development and survival',
      chromosome: '4',
      sequence: 'ATGGCGACCCTGGAAAAGCTGATG',
      expression: 60,
      mutations: ['CAG_repeat_expansion'],
      targetable: true
    },
    {
      id: 'tp53',
      name: 'TP53',
      function: 'Tumor suppressor protein',
      chromosome: '17',
      sequence: 'ATGGAGGAGCCGCAGTCAGATCCT',
      expression: 90,
      mutations: ['R273H', 'R175H', 'R248Q'],
      targetable: true
    },
    {
      id: 'myc',
      name: 'MYC',
      function: 'Oncogene transcription factor',
      chromosome: '8',
      sequence: 'ATGCCCCTCAACGTTAGCTTCACC',
      expression: 45,
      mutations: ['translocation', 'amplification'],
      targetable: true
    },
    {
      id: 'apoe',
      name: 'APOE',
      function: 'Lipid metabolism and transport',
      chromosome: '19',
      sequence: 'ATGGCGCAGAAGATGCAGGGTCTG',
      expression: 70,
      mutations: ['E4_variant', 'E2_variant'],
      targetable: true
    }
  ];

  // CRISPR systems
  const crisprSystems: CRISPRSystem[] = [
    {
      id: 'cas9',
      name: 'CRISPR-Cas9',
      type: 'cas9',
      precision: 85,
      efficiency: 90,
      offTargetRisk: 25,
      description: 'Most widely used, creates double-strand breaks',
      icon: <Zap className="w-5 h-5" />
    },
    {
      id: 'cas12a',
      name: 'CRISPR-Cas12a',
      type: 'cas12',
      precision: 88,
      efficiency: 80,
      offTargetRisk: 20,
      description: 'Creates staggered cuts, different PAM requirements',
      icon: <Target className="w-5 h-5" />
    },
    {
      id: 'cas13',
      name: 'CRISPR-Cas13',
      type: 'cas13',
      precision: 92,
      efficiency: 70,
      offTargetRisk: 15,
      description: 'RNA-targeting system for knockdown applications',
      icon: <Activity className="w-5 h-5" />
    },
    {
      id: 'base-editor',
      name: 'Cytosine Base Editor',
      type: 'base-editor',
      precision: 95,
      efficiency: 75,
      offTargetRisk: 10,
      description: 'Precise single nucleotide changes without DSBs',
      icon: <Settings className="w-5 h-5" />
    },
    {
      id: 'prime-editor',
      name: 'Prime Editor',
      type: 'prime-editor',
      precision: 98,
      efficiency: 60,
      offTargetRisk: 5,
      description: 'Most precise system for insertions, deletions, and substitutions',
      icon: <Eye className="w-5 h-5" />
    }
  ];

  // Diseases
  const diseases: Disease[] = [
    {
      id: 'duchenne-md',
      name: 'Duchenne Muscular Dystrophy',
      description: 'Genetic disorder causing progressive muscle degeneration',
      targetGenes: ['dystrophin'],
      complexity: 8,
      prevalence: '1 in 3,500 male births',
      currentTreatments: ['Corticosteroids', 'Physical therapy', 'Respiratory support']
    },
    {
      id: 'cystic-fibrosis',
      name: 'Cystic Fibrosis',
      description: 'Genetic disorder affecting lungs and digestive system',
      targetGenes: ['cftr'],
      complexity: 7,
      prevalence: '1 in 2,500 births',
      currentTreatments: ['CFTR modulators', 'Airway clearance', 'Nutritional support']
    },
    {
      id: 'huntingtons',
      name: "Huntington's Disease",
      description: 'Neurodegenerative disorder causing movement, cognitive, and psychiatric disorders',
      targetGenes: ['huntingtin'],
      complexity: 9,
      prevalence: '1 in 10,000 people',
      currentTreatments: ['Symptom management', 'Physical therapy', 'Psychiatric care']
    },
    {
      id: 'cancer',
      name: 'Cancer (TP53 mutations)',
      description: 'Various cancers caused by tumor suppressor gene mutations',
      targetGenes: ['tp53', 'myc'],
      complexity: 10,
      prevalence: 'Variable by cancer type',
      currentTreatments: ['Chemotherapy', 'Radiation', 'Immunotherapy', 'Surgery']
    }
  ];

  // Start gene editing project
  const startProject = () => {
    if (!selectedDisease || !selectedGene || !selectedSystem || !selectedEditType) return;

    const project: EditingProject = {
      id: `project-${Date.now()}`,
      name: `${selectedDisease.name} - ${selectedGene.name} Editing`,
      targetGene: selectedGene,
      editingSystem: selectedSystem,
      editType: selectedEditType as 'knockout' | 'knock-in' | 'activation' | 'repression' | 'base-edit',
      targetSequence: selectedGene.sequence.substring(10, 15), // Simplified target
      guideRNA: 'GUCUCAUGCGACGAUC', // Simplified gRNA
      expectedOutcome: getExpectedOutcome(),
      success: false,
      efficiency: 0,
      offTargetEffects: 0
    };

    setCurrentProject(project);
    setGamePhase('design');
    setIsStarted(true);
  };

  // Get expected outcome based on edit type
  const getExpectedOutcome = () => {
    if (!selectedEditType || !selectedGene) return '';
    
    switch (selectedEditType) {
      case 'knockout':
        return `Disable ${selectedGene.name} gene function`;
      case 'knock-in':
        return `Insert corrective sequence into ${selectedGene.name}`;
      case 'activation':
        return `Increase ${selectedGene.name} expression`;
      case 'repression':
        return `Decrease ${selectedGene.name} expression`;
      case 'base-edit':
        return `Correct point mutation in ${selectedGene.name}`;
      default:
        return '';
    }
  };

  // Perform gene editing
  const performEditing = () => {
    if (!currentProject) return;

    setGamePhase('editing');

    // Simulate editing process
    setTimeout(() => {
      // Calculate success based on system properties and complexity
      const systemScore = (currentProject.editingSystem.precision + currentProject.editingSystem.efficiency) / 2;
      const complexityFactor = selectedDisease ? (11 - selectedDisease.complexity) / 10 : 0.5;
      const baseSuccessRate = systemScore * complexityFactor * 0.8;

      const editingSuccess = Math.random() < baseSuccessRate / 100;
      const efficiency = editingSuccess ? 
        Math.min(95, systemScore + Math.random() * 20 - 10) :
        Math.max(5, systemScore * 0.3 + Math.random() * 10);
      
      const offTargetEffects = Math.max(0, 
        currentProject.editingSystem.offTargetRisk + Math.random() * 20 - 10
      );

      // Update ethics score based on editing type and target
      if (selectedDisease?.id === 'cancer' && selectedEditType === 'knockout') {
        setEthicsScore(prev => Math.max(70, prev - 10)); // Oncogene targeting is more acceptable
      } else if (selectedEditType === 'activation' && offTargetEffects > 50) {
        setEthicsScore(prev => Math.max(50, prev - 20)); // High off-target risk
      }

      const updatedProject = {
        ...currentProject,
        success: editingSuccess,
        efficiency,
        offTargetEffects
      };

      setCurrentProject(updatedProject);
      setGamePhase('analysis');

      // Calculate final score after analysis
      setTimeout(() => {
        const efficiencyScore = efficiency * 3;
        const safetyScore = (100 - offTargetEffects) * 2;
        const complexityBonus = selectedDisease ? selectedDisease.complexity * 20 : 0;
        const ethicsBonus = ethicsScore;
        const timeBonus = timeLeft > 120 ? 200 : timeLeft > 60 ? 150 : 100;
        const systemBonus = currentProject.editingSystem.precision;

        const finalScore = Math.max(0, Math.min(1000,
          efficiencyScore + safetyScore + complexityBonus + ethicsBonus + timeBonus + systemBonus
        ));

        setScore(finalScore);
        setGamePhase('results');
        
        setTimeout(() => {
          onComplete(true, finalScore);
        }, 3000);
      }, 4000);
    }, 6000);
  };

  // Render setup phase
  if (!isStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🧬</div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Gene Editing Lab 3D
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Advanced CRISPR-Cas gene editing simulation for therapeutic research
            </p>
          </div>

          <div className="bg-black bg-opacity-30 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Dna className="mr-3" />
              Gene Editing Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-lg font-semibold text-white mb-2">Target Selection</h3>
                <p className="text-purple-100">Choose disease, target gene, and editing strategy</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🔬</div>
                <h3 className="text-lg font-semibold text-white mb-2">System Design</h3>
                <p className="text-purple-100">Select CRISPR system and design guide RNA</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-lg font-semibold text-white mb-2">Gene Editing</h3>
                <p className="text-purple-100">Perform targeted genome modification</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="text-lg font-semibold text-white mb-2">Analysis</h3>
                <p className="text-purple-100">Analyze efficiency, safety, and outcomes</p>
              </div>
            </div>
          </div>

          {/* Disease Selection */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">Select Target Disease</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {diseases.map(disease => (
                <div
                  key={disease.id}
                  onClick={() => setSelectedDisease(disease)}
                  className={`p-6 rounded-xl cursor-pointer transition-all ${
                    selectedDisease?.id === disease.id
                      ? 'bg-purple-600 bg-opacity-50 border-2 border-purple-400'
                      : 'bg-black bg-opacity-30 hover:bg-opacity-40'
                  }`}
                >
                  <h4 className="text-xl font-bold text-white mb-2">{disease.name}</h4>
                  <p className="text-purple-100 mb-4">{disease.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-purple-200">Prevalence:</div>
                      <div className="text-white">{disease.prevalence}</div>
                    </div>
                    <div>
                      <div className="text-purple-200">Complexity:</div>
                      <div className="text-white">{disease.complexity}/10</div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="text-purple-200 text-sm mb-2">Target Genes:</div>
                    <div className="flex flex-wrap gap-2">
                      {disease.targetGenes.map(gene => (
                        <span key={gene} className="bg-purple-500 text-white px-2 py-1 rounded text-xs">
                          {gene.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {selectedDisease && (
            <>
              {/* Gene Selection */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Select Target Gene</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {availableGenes.filter(gene => 
                    selectedDisease.targetGenes.includes(gene.id)
                  ).map(gene => (
                    <div
                      key={gene.id}
                      onClick={() => setSelectedGene(gene)}
                      className={`p-4 rounded-lg cursor-pointer transition-all ${
                        selectedGene?.id === gene.id
                          ? 'bg-blue-600 bg-opacity-50 border-2 border-blue-400'
                          : 'bg-black bg-opacity-30 hover:bg-opacity-40'
                      }`}
                    >
                      <h4 className="font-bold text-white">{gene.name}</h4>
                      <p className="text-blue-100 text-sm mb-2">{gene.function}</p>
                      <div className="text-xs">
                        <div className="text-blue-200">Chromosome: {gene.chromosome}</div>
                        <div className="text-blue-200">Expression: {gene.expression}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Selection */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Choose CRISPR System</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {crisprSystems.map(system => (
                    <div
                      key={system.id}
                      onClick={() => setSelectedSystem(system)}
                      className={`p-4 rounded-lg cursor-pointer transition-all ${
                        selectedSystem?.id === system.id
                          ? 'bg-teal-600 bg-opacity-50 border-2 border-teal-400'
                          : 'bg-black bg-opacity-30 hover:bg-opacity-40'
                      }`}
                    >
                      <div className="flex items-center mb-2">
                        <div className="text-teal-400 mr-2">{system.icon}</div>
                        <h4 className="font-bold text-white">{system.name}</h4>
                      </div>
                      <p className="text-teal-100 text-sm mb-3">{system.description}</p>
                      
                      <div className="space-y-1 text-xs">
                        <div className="flex justify-between">
                          <span className="text-teal-200">Precision:</span>
                          <span className="text-white">{system.precision}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-teal-200">Efficiency:</span>
                          <span className="text-white">{system.efficiency}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-teal-200">Off-target Risk:</span>
                          <span className="text-white">{system.offTargetRisk}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Edit Type Selection */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Select Editing Strategy</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { id: 'knockout', name: 'Gene Knockout', desc: 'Disable gene function' },
                    { id: 'knock-in', name: 'Gene Knock-in', desc: 'Insert corrective sequence' },
                    { id: 'activation', name: 'Gene Activation', desc: 'Increase gene expression' },
                    { id: 'repression', name: 'Gene Repression', desc: 'Decrease gene expression' },
                    { id: 'base-edit', name: 'Base Editing', desc: 'Precise nucleotide changes' }
                  ].map(editType => (
                    <div
                      key={editType.id}
                      onClick={() => setSelectedEditType(editType.id)}
                      className={`p-4 rounded-lg cursor-pointer transition-all ${
                        selectedEditType === editType.id
                          ? 'bg-green-600 bg-opacity-50 border-2 border-green-400'
                          : 'bg-black bg-opacity-30 hover:bg-opacity-40'
                      }`}
                    >
                      <h4 className="font-bold text-white mb-2">{editType.name}</h4>
                      <p className="text-green-100 text-sm">{editType.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          <button
            onClick={startProject}
            disabled={!selectedDisease || !selectedGene || !selectedSystem || !selectedEditType}
            className="w-full bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 disabled:from-gray-600 disabled:to-gray-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center text-xl"
          >
            <Play className="mr-3" size={24} />
            Start Gene Editing Project
          </button>
        </div>
      </div>
    );
  }

  // Render design phase
  if (gamePhase === 'design') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🔬</div>
            <h1 className="text-4xl font-bold text-white mb-4">Designing CRISPR System</h1>
            
            {currentProject && (
              <div className="bg-black bg-opacity-30 rounded-xl p-6 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">{currentProject.name}</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Project Details</h3>
                    <div className="space-y-2 text-purple-100">
                      <div>Target Gene: <span className="text-white">{currentProject.targetGene.name}</span></div>
                      <div>CRISPR System: <span className="text-white">{currentProject.editingSystem.name}</span></div>
                      <div>Edit Type: <span className="text-white capitalize">{currentProject.editType.replace('-', ' ')}</span></div>
                      <div>Expected Outcome: <span className="text-white">{currentProject.expectedOutcome}</span></div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Technical Specifications</h3>
                    <div className="space-y-2 text-purple-100">
                      <div>Target Sequence: 
                        <code className="text-green-400 ml-2 font-mono">{currentProject.targetSequence}</code>
                      </div>
                      <div>Guide RNA: 
                        <code className="text-blue-400 ml-2 font-mono">{currentProject.guideRNA}</code>
                      </div>
                      <div>System Precision: <span className="text-white">{currentProject.editingSystem.precision}%</span></div>
                      <div>Expected Efficiency: <span className="text-white">{currentProject.editingSystem.efficiency}%</span></div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-900 bg-opacity-30 rounded-lg">
                  <div className="flex items-start">
                    <AlertTriangle className="text-yellow-400 mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="text-yellow-400 font-semibold mb-2">Ethical Considerations</h4>
                      <p className="text-yellow-100 text-sm">
                        Gene editing carries significant ethical responsibilities. Ensure proper oversight,
                        informed consent, and consideration of long-term consequences for therapeutic applications.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={performEditing}
                  className="w-full mt-6 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center"
                >
                  <Zap className="mr-2" size={20} />
                  Perform Gene Editing
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Render editing phase
  if (gamePhase === 'editing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-teal-900 to-green-900 p-6 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6">⚡</div>
          <h1 className="text-4xl font-bold text-white mb-6">Gene Editing in Progress</h1>
          <div className="bg-black bg-opacity-30 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">CRISPR System Active</h2>
            <p className="text-xl text-teal-100 mb-6">
              Performing targeted DNA modification using {currentProject?.editingSystem.name}...
            </p>
            <div className="flex items-center justify-center space-x-4 text-white">
              <div className="animate-spin">🧬</div>
              <div>Editing {currentProject?.targetGene.name}</div>
              <div className="animate-pulse">⚡</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render analysis phase
  if (gamePhase === 'analysis') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-900 via-green-900 to-blue-900 p-6 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6">📊</div>
          <h1 className="text-4xl font-bold text-white mb-6">Analyzing Results</h1>
          <div className="bg-black bg-opacity-30 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Post-Editing Analysis</h2>
            <p className="text-xl text-green-100 mb-6">
              Sequencing edited cells, measuring efficiency, and checking for off-target effects...
            </p>
            <div className="flex items-center justify-center space-x-4 text-white">
              <div className="animate-spin">🔬</div>
              <div>Running comprehensive analysis</div>
              <div className="animate-pulse">📈</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render results phase
  if (gamePhase === 'results') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 p-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🧬</div>
          <h1 className="text-4xl font-bold text-white mb-8">Gene Editing Complete!</h1>

          <div className="bg-black bg-opacity-30 rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-white">{score.toFixed(0)}</div>
                <div className="text-purple-100">Research Score</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">
                  {currentProject?.efficiency.toFixed(0)}%
                </div>
                <div className="text-purple-100">Editing Efficiency</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">
                  {currentProject ? (100 - currentProject.offTargetEffects).toFixed(0) : 0}%
                </div>
                <div className="text-purple-100">Safety Score</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">{ethicsScore}</div>
                <div className="text-purple-100">Ethics Score</div>
              </div>
            </div>

            <div className="text-lg text-purple-100 mb-6">
              {currentProject?.success ? (
                score > 800 ? '🏆 Breakthrough! Your gene therapy could revolutionize treatment!' :
                score > 600 ? '🔬 Successful editing with therapeutic potential!' :
                '👍 Good results, but optimization needed for clinical application.'
              ) : (
                score > 400 ? '📚 Learning experience - gene editing is challenging but promising.' :
                '🛠️ More research needed. Consider different approaches or systems.'
              )}
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Project Details</h3>
                {currentProject && (
                  <div className="space-y-2 text-purple-100">
                    <div>Disease: <span className="text-white">{selectedDisease?.name}</span></div>
                    <div>Target Gene: <span className="text-white">{currentProject.targetGene.name}</span></div>
                    <div>CRISPR System: <span className="text-white">{currentProject.editingSystem.name}</span></div>
                    <div>Edit Type: <span className="text-white capitalize">{currentProject.editType.replace('-', ' ')}</span></div>
                    <div>Success: 
                      <span className={currentProject.success ? 'text-green-400' : 'text-red-400'}>
                        {currentProject.success ? ' Yes' : ' No'}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Technical Results</h3>
                {currentProject && (
                  <div className="space-y-2 text-purple-100">
                    <div>Editing Efficiency: 
                      <span className="text-green-400 font-semibold"> {currentProject.efficiency.toFixed(1)}%</span>
                    </div>
                    <div>Off-target Effects: 
                      <span className="text-red-400 font-semibold"> {currentProject.offTargetEffects.toFixed(1)}%</span>
                    </div>
                    <div>System Precision: 
                      <span className="text-blue-400 font-semibold"> {currentProject.editingSystem.precision}%</span>
                    </div>
                    <div>Overall Quality: 
                      <span className="text-white font-semibold">
                        {score > 700 ? 'Excellent' : score > 500 ? 'Good' : score > 300 ? 'Fair' : 'Needs Improvement'}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Research Impact</h3>
                <div className="space-y-2 text-purple-100">
                  <div>Therapeutic Potential: 
                    <span className="text-white">
                      {score > 750 ? ' High' : score > 500 ? ' Moderate' : ' Limited'}
                    </span>
                  </div>
                  <div>Clinical Readiness: 
                    <span className="text-white">
                      {score > 800 ? ' Ready for trials' : score > 600 ? ' Optimization needed' : ' Preclinical research'}
                    </span>
                  </div>
                  <div>Safety Profile: 
                    <span className="text-white">
                      {ethicsScore > 80 ? ' Excellent' : ethicsScore > 60 ? ' Good' : ' Needs review'}
                    </span>
                  </div>
                  <div>Regulatory Approval: 
                    <span className="text-white">
                      {score > 750 && ethicsScore > 80 ? ' Likely' : ' Additional studies needed'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={onRestart}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center"
            >
              <RotateCcw className="mr-2" size={20} />
              New Project
            </button>
            <button
              onClick={() => onComplete(true, score)}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center"
            >
              <Award className="mr-2" size={20} />
              Complete
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default GeneEditingLab3DGame;