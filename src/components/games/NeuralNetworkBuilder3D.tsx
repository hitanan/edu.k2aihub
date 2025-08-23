"use client";
import React, { useState, useMemo } from 'react';
import { Brain, Play, Square, RotateCcw, Settings, CheckCircle, TrendingUp } from 'lucide-react';

// Neural network interfaces
interface NeuronNode {
  id: string;
  layer: number;
  position: { x: number; y: number; z: number };
  activation: number;
  bias: number;
  type: 'input' | 'hidden' | 'output';
  label?: string;
}

interface Connection {
  id: string;
  fromNeuron: string;
  toNeuron: string;
  weight: number;
  animated: boolean;
}

interface Layer {
  id: string;
  type: 'input' | 'hidden' | 'output';
  neuronCount: number;
  activationFunction: 'sigmoid' | 'relu' | 'tanh' | 'softmax';
  color: string;
}

interface NetworkArchitecture {
  layers: Layer[];
  neurons: NeuronNode[];
  connections: Connection[];
  learningRate: number;
  epochs: number;
  loss: number;
  accuracy: number;
}

interface TrainingData {
  inputs: number[][];
  outputs: number[][];
  name: string;
  description: string;
}

// Predefined training datasets
const DATASETS: TrainingData[] = [
  {
    name: 'XOR Problem',
    description: 'Classic XOR logic gate problem',
    inputs: [[0, 0], [0, 1], [1, 0], [1, 1]],
    outputs: [[0], [1], [1], [0]]
  },
  {
    name: 'Linear Classification',
    description: 'Simple binary classification',
    inputs: [[0, 0], [0, 1], [1, 0], [1, 1]],
    outputs: [[0], [0], [0], [1]]
  },
  {
    name: 'Iris Classification',
    description: 'Flower species classification (simplified)',
    inputs: [
      [5.1, 3.5, 1.4, 0.2],
      [4.9, 3.0, 1.4, 0.2],
      [7.0, 3.2, 4.7, 1.4],
      [6.4, 3.2, 4.5, 1.5],
      [6.3, 3.3, 6.0, 2.5],
      [5.8, 2.7, 5.1, 1.9]
    ],
    outputs: [[1, 0, 0], [1, 0, 0], [0, 1, 0], [0, 1, 0], [0, 0, 1], [0, 0, 1]]
  }
];

// Activation functions
const ACTIVATION_FUNCTIONS = {
  sigmoid: (x: number) => 1 / (1 + Math.exp(-x)),
  relu: (x: number) => Math.max(0, x),
  tanh: (x: number) => Math.tanh(x),
  softmax: (x: number[]) => {
    const max = Math.max(...x);
    const exp = x.map(val => Math.exp(val - max));
    const sum = exp.reduce((acc, val) => acc + val, 0);
    return exp.map(val => val / sum);
  }
};

// Network challenges for progressive learning
const CHALLENGES = [
  {
    id: 'simple-perceptron',
    title: 'Simple Perceptron',
    description: 'Build single neuron perceptron for binary classification',
    requirements: ['2 input neurons', '1 output neuron', 'No hidden layers'],
    dataset: 'Linear Classification',
    targetAccuracy: 0.75,
    points: 100,
    level: 1
  },
  {
    id: 'xor-solver',
    title: 'XOR Problem Solver',
    description: 'Solve classic XOR problem với hidden layer',
    requirements: ['2 input neurons', '2+ hidden neurons', '1 output neuron'],
    dataset: 'XOR Problem',
    targetAccuracy: 0.95,
    points: 200,
    level: 2
  },
  {
    id: 'multi-class',
    title: 'Multi-class Classifier',
    description: 'Build network for 3-class Iris classification',
    requirements: ['4 input neurons', 'Hidden layer(s)', '3 output neurons'],
    dataset: 'Iris Classification',
    targetAccuracy: 0.80,
    points: 300,
    level: 3
  },
  {
    id: 'deep-network',
    title: 'Deep Neural Network',
    description: 'Build deep network với multiple hidden layers',
    requirements: ['4+ input neurons', '2+ hidden layers', 'Multiple outputs'],
    dataset: 'Iris Classification',
    targetAccuracy: 0.90,
    points: 400,
    level: 4
  }
];

const NeuralNetworkBuilder3D: React.FC = () => {
  const [network, setNetwork] = useState<NetworkArchitecture>({
    layers: [
      { id: 'input', type: 'input', neuronCount: 2, activationFunction: 'sigmoid', color: '#3b82f6' },
      { id: 'output', type: 'output', neuronCount: 1, activationFunction: 'sigmoid', color: '#ef4444' }
    ],
    neurons: [],
    connections: [],
    learningRate: 0.1,
    epochs: 100,
    loss: 0,
    accuracy: 0
  });

  const [selectedDataset, setSelectedDataset] = useState<TrainingData>(DATASETS[0]);
  const [isTraining, setIsTraining] = useState(false);
  const [trainingProgress, setTrainingProgress] = useState(0);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [selectedNeuron, setSelectedNeuron] = useState<NeuronNode | null>(null);

  // Generate neurons based on layers
  const generateNeurons = useMemo(() => {
    const neurons: NeuronNode[] = [];
    let layerIndex = 0;

    network.layers.forEach((layer, idx) => {
      const layerZ = (idx - network.layers.length / 2) * 100;
      
      for (let i = 0; i < layer.neuronCount; i++) {
        const neuron: NeuronNode = {
          id: `${layer.id}-${i}`,
          layer: layerIndex,
          position: {
            x: (i - (layer.neuronCount - 1) / 2) * 80,
            y: 0,
            z: layerZ
          },
          activation: Math.random(),
          bias: (Math.random() - 0.5) * 2,
          type: layer.type,
          label: layer.type === 'input' 
            ? `Input ${i + 1}` 
            : layer.type === 'output' 
            ? `Output ${i + 1}` 
            : `Hidden ${i + 1}`
        };
        neurons.push(neuron);
      }
      layerIndex++;
    });

    return neurons;
  }, [network.layers]);

  // Generate connections between layers
  const generateConnections = useMemo(() => {
    const connections: Connection[] = [];
    
    for (let i = 0; i < network.layers.length - 1; i++) {
      const currentLayerNeurons = generateNeurons.filter(n => n.layer === i);
      const nextLayerNeurons = generateNeurons.filter(n => n.layer === i + 1);
      
      currentLayerNeurons.forEach(fromNeuron => {
        nextLayerNeurons.forEach(toNeuron => {
          connections.push({
            id: `${fromNeuron.id}-${toNeuron.id}`,
            fromNeuron: fromNeuron.id,
            toNeuron: toNeuron.id,
            weight: (Math.random() - 0.5) * 2,
            animated: false
          });
        });
      });
    }
    
    return connections;
  }, [generateNeurons, network.layers]);

  // Add layer to network
  const addLayer = (type: 'hidden', neuronCount: number, activationFunction: Layer['activationFunction']) => {
    const newLayer: Layer = {
      id: `hidden-${Date.now()}`,
      type,
      neuronCount,
      activationFunction,
      color: '#8b5cf6'
    };

    const newLayers = [...network.layers];
    newLayers.splice(-1, 0, newLayer); // Insert before output layer

    setNetwork({
      ...network,
      layers: newLayers
    });
    setScore(score + 20);
  };

  // Remove layer from network
  const removeLayer = (layerId: string) => {
    if (network.layers.length <= 2) return; // Keep at least input and output

    setNetwork({
      ...network,
      layers: network.layers.filter(l => l.id !== layerId)
    });
  };

  // Update layer neuron count
  const updateLayerNeuronCount = (layerId: string, count: number) => {
    setNetwork({
      ...network,
      layers: network.layers.map(layer => 
        layer.id === layerId ? { ...layer, neuronCount: Math.max(1, count) } : layer
      )
    });
  };

  // Simulate training process
  const trainNetwork = async () => {
    if (generateNeurons.length === 0) return;

    setIsTraining(true);
    setTrainingProgress(0);

    // Simulate training epochs
    for (let epoch = 0; epoch < network.epochs; epoch++) {
      await new Promise(resolve => setTimeout(resolve, 50));
      
      // Update progress
      setTrainingProgress((epoch + 1) / network.epochs);
      
      // Simulate loss reduction
      const loss = Math.max(0.01, 1 - (epoch / network.epochs) * 0.8 + Math.random() * 0.1);
      const accuracy = Math.min(0.99, (epoch / network.epochs) * 0.9 + Math.random() * 0.1);
      
      setNetwork(prev => ({
        ...prev,
        loss,
        accuracy,
        connections: prev.connections.map(conn => ({
          ...conn,
          animated: Math.random() > 0.7
        }))
      }));
    }

    // Check for completed challenges
    const currentAccuracy = network.accuracy;
    CHALLENGES.forEach(challenge => {
      if (challenge.level <= level + 1 && !completedChallenges.includes(challenge.id)) {
        const meetsRequirements = checkChallengeRequirements();
        const correctDataset = selectedDataset.name === challenge.dataset;
        const meetsAccuracy = currentAccuracy >= challenge.targetAccuracy;
        
        if (meetsRequirements && correctDataset && meetsAccuracy) {
          setCompletedChallenges([...completedChallenges, challenge.id]);
          setScore(score + challenge.points);
          
          if (challenge.level > level) {
            setLevel(challenge.level);
          }
        }
      }
    });

    setIsTraining(false);
  };

  // Check if network meets challenge requirements
  const checkChallengeRequirements = (): boolean => {
    const inputLayer = network.layers.find(l => l.type === 'input');
    const outputLayer = network.layers.find(l => l.type === 'output');

    // This is a simplified check - in real implementation, you&apos;d parse requirements more thoroughly
    return inputLayer !== undefined && outputLayer !== undefined;
  };

  // Clear network
  const clearNetwork = () => {
    setNetwork({
      layers: [
        { id: 'input', type: 'input', neuronCount: 2, activationFunction: 'sigmoid', color: '#3b82f6' },
        { id: 'output', type: 'output', neuronCount: 1, activationFunction: 'sigmoid', color: '#ef4444' }
      ],
      neurons: [],
      connections: [],
      learningRate: 0.1,
      epochs: 100,
      loss: 0,
      accuracy: 0
    });
    setIsTraining(false);
    setTrainingProgress(0);
  };

  // Render 3D neuron
  const render3DNeuron = (neuron: NeuronNode) => {
    const layer = network.layers.find(l => l.id.split('-')[0] === neuron.type);
    const isSelected = selectedNeuron?.id === neuron.id;
    
    return (
      <div
        key={neuron.id}
        className="neuron-node absolute cursor-pointer transition-all duration-300 hover:scale-110"
        style={{
          left: `${neuron.position.x + 250}px`,
          top: `${neuron.position.y + 200}px`,
          transform: `
            translate3d(0, 0, ${neuron.position.z}px)
          `,
          transformStyle: 'preserve-3d',
        }}
        onClick={() => setSelectedNeuron(neuron)}
      >
        <div
          className={`
            w-16 h-16 rounded-full flex items-center justify-center text-xs font-bold text-white
            border-2 shadow-lg transition-all duration-300
            ${isSelected ? 'border-yellow-400 ring-2 ring-yellow-200' : 'border-gray-300'}
            ${isTraining ? 'animate-pulse' : ''}
          `}
          style={{
            backgroundColor: layer?.color || '#6b7280',
            opacity: 0.7 + neuron.activation * 0.3,
            boxShadow: `0 ${neuron.position.z * 0.1}px ${neuron.position.z * 0.2}px rgba(0,0,0,0.3)`
          }}
        >
          <div className="text-center">
            <div className="text-[8px] leading-tight">{neuron.label}</div>
            <div className="text-[10px] font-bold">{neuron.activation.toFixed(2)}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Neural Network Builder 3D
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Build, train, và visualize neural networks trong interactive 3D environment
          </p>
          
          {/* Game Stats */}
          <div className="flex justify-center gap-8 mb-6">
            <div className="bg-purple-800/50 px-4 py-2 rounded-lg">
              <div className="text-sm text-purple-200">Score</div>
              <div className="text-2xl font-bold">{score}</div>
            </div>
            <div className="bg-pink-800/50 px-4 py-2 rounded-lg">
              <div className="text-sm text-pink-200">Level</div>
              <div className="text-2xl font-bold">{level}</div>
            </div>
            <div className="bg-green-800/50 px-4 py-2 rounded-lg">
              <div className="text-sm text-green-200">Accuracy</div>
              <div className="text-2xl font-bold">{(network.accuracy * 100).toFixed(1)}%</div>
            </div>
            <div className="bg-blue-800/50 px-4 py-2 rounded-lg">
              <div className="text-sm text-blue-200">Loss</div>
              <div className="text-2xl font-bold">{network.loss.toFixed(3)}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Network Builder */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Settings className="w-5 h-5 mr-2" />
                Network Architecture
              </h3>
              
              {/* Layer Configuration */}
              <div className="space-y-4">
                {network.layers.map((layer) => (
                  <div key={layer.id} className="bg-gray-700/50 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold capitalize">{layer.type} Layer</span>
                      {layer.type === 'hidden' && (
                        <button
                          onClick={() => removeLayer(layer.id)}
                          className="text-red-400 hover:text-red-300 text-sm"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <label className="text-xs text-gray-400">Neurons:</label>
                      <input
                        type="number"
                        value={layer.neuronCount}
                        onChange={(e) => updateLayerNeuronCount(layer.id, parseInt(e.target.value))}
                        className="w-16 px-2 py-1 bg-gray-600 rounded text-sm"
                        min="1"
                        max="10"
                        disabled={isTraining}
                      />
                    </div>
                    
                    <select
                      value={layer.activationFunction}
                      onChange={(e) => {
                        setNetwork({
                          ...network,
                          layers: network.layers.map(l => 
                            l.id === layer.id 
                              ? { ...l, activationFunction: e.target.value as Layer['activationFunction'] } 
                              : l
                          )
                        });
                      }}
                      className="w-full px-2 py-1 bg-gray-600 rounded text-xs"
                      disabled={isTraining}
                    >
                      <option value="sigmoid">Sigmoid</option>
                      <option value="relu">ReLU</option>
                      <option value="tanh">Tanh</option>
                      {layer.type === 'output' && <option value="softmax">Softmax</option>}
                    </select>
                  </div>
                ))}
                
                {/* Add Hidden Layer */}
                <button
                  onClick={() => addLayer('hidden', 4, 'relu')}
                  disabled={isTraining || network.layers.length >= 6}
                  className="w-full p-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 rounded-lg text-sm font-semibold transition-colors duration-200"
                >
                  Add Hidden Layer
                </button>
              </div>
            </div>

            {/* Training Configuration */}
            <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-bold mb-4">Training</h3>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Dataset</label>
                  <select
                    value={selectedDataset.name}
                    onChange={(e) => {
                      const dataset = DATASETS.find(d => d.name === e.target.value);
                      if (dataset) setSelectedDataset(dataset);
                    }}
                    className="w-full px-3 py-2 bg-gray-600 rounded"
                    disabled={isTraining}
                  >
                    {DATASETS.map(dataset => (
                      <option key={dataset.name} value={dataset.name}>
                        {dataset.name}
                      </option>
                    ))}
                  </select>
                  <div className="text-xs text-gray-400 mt-1">{selectedDataset.description}</div>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Learning Rate</label>
                  <input
                    type="number"
                    value={network.learningRate}
                    onChange={(e) => setNetwork({ ...network, learningRate: parseFloat(e.target.value) })}
                    className="w-full px-3 py-2 bg-gray-600 rounded"
                    step="0.01"
                    min="0.001"
                    max="1"
                    disabled={isTraining}
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Epochs</label>
                  <input
                    type="number"
                    value={network.epochs}
                    onChange={(e) => setNetwork({ ...network, epochs: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 bg-gray-600 rounded"
                    min="10"
                    max="1000"
                    disabled={isTraining}
                  />
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-4">Controls</h3>
              <div className="space-y-2">
                <button
                  onClick={trainNetwork}
                  disabled={isTraining || generateNeurons.length === 0}
                  className={`w-full p-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center ${
                    isTraining
                      ? 'bg-orange-600 cursor-not-allowed'
                      : 'bg-green-600 hover:bg-green-700'
                  }`}
                >
                  {isTraining ? (
                    <>
                      <Square className="w-4 h-4 mr-2" />
                      Training... ({(trainingProgress * 100).toFixed(0)}%)
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Train Network
                    </>
                  )}
                </button>
                
                <button
                  onClick={clearNetwork}
                  className="w-full p-3 bg-gray-600 hover:bg-gray-700 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Clear Network
                </button>
              </div>

              {/* Training Progress */}
              {isTraining && (
                <div className="mt-4">
                  <div className="bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${trainingProgress * 100}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 3D Visualization */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/30 rounded-lg p-4 h-[600px] relative overflow-hidden">
              <div className="absolute top-4 left-4 z-10">
                <h3 className="text-lg font-bold mb-2">Neural Network Visualization</h3>
                <div className="text-sm text-gray-400">
                  Drag to rotate, click neurons to inspect
                </div>
              </div>
              
              {/* 3D Perspective Container */}
              <div 
                className="w-full h-full relative"
                style={{ 
                  perspective: '1000px',
                  perspectiveOrigin: 'center center'
                }}
                onMouseMove={(e) => {
                  // Only update rotation if mouse is not over a neuron
                  const target = e.target as HTMLElement;
                  if (target.closest('.neuron-node')) {
                    return; // Don't rotate when hovering over neurons
                  }
                  
                  const rect = e.currentTarget.getBoundingClientRect();
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const mouseX = e.clientX - rect.left;
                  const mouseY = e.clientY - rect.top;
                  
                  setRotation({
                    x: ((mouseY - centerY) / centerY) * 20,
                    y: ((mouseX - centerX) / centerX) * 20
                  });
                }}
              >
                {/* 3D Grid Background */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
                  }}
                />
                
                {/* 3D Neurons */}
                <div 
                  className="absolute inset-0"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
                  }}
                >
                  {generateNeurons.map(neuron => render3DNeuron(neuron))}
                </div>

                {/* Connection Wires */}
                <svg className="absolute inset-0 pointer-events-none">
                  {generateConnections.map((connection) => {
                    const fromNeuron = generateNeurons.find(n => n.id === connection.fromNeuron);
                    const toNeuron = generateNeurons.find(n => n.id === connection.toNeuron);
                    
                    if (!fromNeuron || !toNeuron) return null;
                    
                    const opacity = Math.abs(connection.weight) / 2;
                    const strokeWidth = Math.abs(connection.weight) * 2 + 1;
                    const color = connection.weight > 0 ? '#10b981' : '#ef4444';
                    
                    return (
                      <line
                        key={connection.id}
                        x1={fromNeuron.position.x + 250 + 32}
                        y1={fromNeuron.position.y + 200 + 32}
                        x2={toNeuron.position.x + 250 + 32}
                        y2={toNeuron.position.y + 200 + 32}
                        stroke={color}
                        strokeWidth={strokeWidth}
                        opacity={opacity}
                        className={connection.animated ? 'animate-pulse' : ''}
                      />
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>

          {/* Status Panel */}
          <div className="lg:col-span-1">
            {/* Network Stats */}
            <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Brain className="w-5 h-5 mr-2" />
                Network Stats
              </h3>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Layers:</span>
                  <span>{network.layers.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Neurons:</span>
                  <span>{generateNeurons.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Connections:</span>
                  <span>{generateConnections.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Parameters:</span>
                  <span>{generateConnections.length + generateNeurons.length}</span>
                </div>
              </div>

              {/* Performance Metrics */}
              {network.accuracy > 0 && (
                <div className="mt-4 p-3 bg-purple-800/30 rounded-lg">
                  <div className="text-sm font-semibold text-purple-300 mb-2">Performance</div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Accuracy:</span>
                      <span className="text-green-400">{(network.accuracy * 100).toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Loss:</span>
                      <span className="text-red-400">{network.loss.toFixed(4)}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Selected Neuron Details */}
            {selectedNeuron && (
              <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-bold mb-4">Neuron Details</h3>
                <div className="space-y-2">
                  <div><strong>ID:</strong> {selectedNeuron.id}</div>
                  <div><strong>Type:</strong> {selectedNeuron.type}</div>
                  <div><strong>Activation:</strong> {selectedNeuron.activation.toFixed(4)}</div>
                  <div><strong>Bias:</strong> {selectedNeuron.bias.toFixed(4)}</div>
                  <div><strong>Layer:</strong> {selectedNeuron.layer}</div>
                </div>
              </div>
            )}

            {/* Challenges */}
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Challenges
              </h3>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {CHALLENGES.filter(challenge => challenge.level <= level + 1).map(challenge => (
                  <div
                    key={challenge.id}
                    className={`p-3 rounded-lg border ${
                      completedChallenges.includes(challenge.id)
                        ? 'bg-green-800/30 border-green-600'
                        : challenge.level <= level
                        ? 'bg-purple-800/30 border-purple-600'
                        : 'bg-gray-700/30 border-gray-600'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-semibold text-sm">{challenge.title}</div>
                      <div className="text-xs text-gray-400">Lv.{challenge.level}</div>
                    </div>
                    <div className="text-xs text-gray-300 mb-2">{challenge.description}</div>
                    <div className="text-xs text-gray-400 mb-2">
                      Dataset: {challenge.dataset}
                    </div>
                    <div className="text-xs text-gray-400">
                      Target: {(challenge.targetAccuracy * 100).toFixed(0)}% accuracy
                    </div>
                    {completedChallenges.includes(challenge.id) && (
                      <div className="text-xs text-green-400 mt-1 flex items-center">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Completed! +{challenge.points} points
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Educational Information */}
        <div className="mt-12 bg-gradient-to-r from-purple-800/30 to-pink-800/30 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Neural Network Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-purple-300">Architecture Design</h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Layer depth và width optimization</li>
                <li>• Activation function selection</li>
                <li>• Regularization techniques</li>
                <li>• Network capacity planning</li>
                <li>• Skip connections và residual learning</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-pink-300">Training Dynamics</h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Gradient descent optimization</li>
                <li>• Learning rate scheduling</li>
                <li>• Batch size effects</li>
                <li>• Loss function selection</li>
                <li>• Overfitting prevention</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-300">Real Applications</h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Computer vision systems</li>
                <li>• Natural language processing</li>
                <li>• Recommendation engines</li>
                <li>• Autonomous vehicle control</li>
                <li>• Medical diagnosis assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralNetworkBuilder3D;
