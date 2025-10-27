'use client';

import React, { useState, useCallback } from 'react';
import { Brain, Play, Plus, Minus, Zap, RotateCcw } from 'lucide-react';

interface NetworkLayer {
  id: string;
  nodes: number;
  activation: string;
  name: string;
}

interface TrainingData {
  accuracy: number;
  loss: number;
  epoch: number;
}

// Component props
interface NeuralNetworkBuilder3DProps {
  onComplete?: (success: boolean, rawScore?: number) => void;
  timeLeft?: number;
  onRestart?: () => void;
}

export default function NeuralNetworkBuilder3D({}: NeuralNetworkBuilder3DProps = {}) {
  const [started, setStarted] = useState(false);
  const [layers, setLayers] = useState<NetworkLayer[]>([
    { id: 'input', nodes: 3, activation: 'linear', name: 'Input Layer' },
    { id: 'hidden1', nodes: 4, activation: 'relu', name: 'Hidden Layer 1' },
    { id: 'output', nodes: 2, activation: 'softmax', name: 'Output Layer' },
  ]);
  const [isTraining, setIsTraining] = useState(false);
  const [trainingData, setTrainingData] = useState<TrainingData>({
    accuracy: 0,
    loss: 1.0,
    epoch: 0,
  });

  const handlePlayGame = useCallback(() => {
    setStarted(true);
  }, []);

  const addLayer = () => {
    const newLayer: NetworkLayer = {
      id: `hidden${layers.length}`,
      nodes: 3,
      activation: 'relu',
      name: `Hidden Layer ${layers.length - 1}`,
    };
    const newLayers = [...layers];
    newLayers.splice(-1, 0, newLayer);
    setLayers(newLayers);
  };

  const removeLayer = (layerId: string) => {
    if (layers.length <= 2) return;
    setLayers((prev) => prev.filter((layer) => layer.id !== layerId));
  };

  const updateLayerNodes = (layerId: string, nodes: number) => {
    if (nodes < 1 || nodes > 10) return;
    setLayers((prev) => prev.map((layer) => (layer.id === layerId ? { ...layer, nodes } : layer)));
  };

  const updateLayerActivation = (layerId: string, activation: string) => {
    setLayers((prev) => prev.map((layer) => (layer.id === layerId ? { ...layer, activation } : layer)));
  };

  const startTraining = () => {
    setIsTraining(true);
    let epoch = 0;

    const trainingInterval = setInterval(() => {
      epoch++;
      const progress = Math.min(epoch / 50, 1);
      const newAccuracy = Math.min(0.95, progress * 0.95 + Math.random() * 0.05);
      const newLoss = Math.max(0.05, 1.0 - progress + Math.random() * 0.1);

      setTrainingData({
        accuracy: newAccuracy,
        loss: newLoss,
        epoch,
      });

      if (epoch >= 50) {
        clearInterval(trainingInterval);
        setIsTraining(false);
      }
    }, 200);
  };

  const resetNetwork = () => {
    setLayers([
      { id: 'input', nodes: 3, activation: 'linear', name: 'Input Layer' },
      { id: 'hidden1', nodes: 4, activation: 'relu', name: 'Hidden Layer 1' },
      { id: 'output', nodes: 2, activation: 'softmax', name: 'Output Layer' },
    ]);
    setTrainingData({ accuracy: 0, loss: 1.0, epoch: 0 });
    setIsTraining(false);
  };

  if (!started) {
    return (
      <div className="w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center p-8">
          <Brain className="w-24 h-24 mx-auto mb-6 text-purple-400" />
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Neural Network Builder 3D Advanced
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Xây dựng và huấn luyện mạng neural trong không gian 3D tương tác. Khám phá deep learning, backpropagation,
            và các kiến trúc neural network tiên tiến.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-semibold text-white mb-2">3D Neural Architecture</h3>
              <p className="text-gray-300 text-sm">
                Thiết kế mạng neural trong không gian 3D với layers và nodes trực quan
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold text-white mb-2">Real-time Training</h3>
              <p className="text-gray-300 text-sm">Xem quá trình học của mạng neural với visualization real-time</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-semibold text-white mb-2">Interactive Learning</h3>
              <p className="text-gray-300 text-sm">Thực hành AI và machine learning qua trải nghiệm tương tác</p>
            </div>
          </div>

          <button
            onClick={handlePlayGame}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
          >
            <Play className="w-6 h-6 mr-2" />
            Bắt Đầu Xây Dựng Neural Network
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Brain className="w-8 h-8 text-purple-400" />
            Neural Network Builder 3D
          </h1>
          <div className="flex gap-4">
            <button
              onClick={startTraining}
              disabled={isTraining}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white rounded-lg flex items-center gap-2"
            >
              <Zap className="w-4 h-4" />
              {isTraining ? 'Training...' : 'Train Network'}
            </button>
            <button
              onClick={resetNetwork}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-black/30 backdrop-blur-sm rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Network Architecture</h2>

            <div className="space-y-4">
              {layers.map((layer, index) => (
                <div key={layer.id} className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-purple-400">{layer.name}</h3>
                    {layer.id !== 'input' && layer.id !== 'output' && (
                      <button onClick={() => removeLayer(layer.id)} className="text-red-400 hover:text-red-300">
                        <Minus className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Nodes:</span>
                      <button
                        onClick={() => updateLayerNodes(layer.id, layer.nodes - 1)}
                        className="w-6 h-6 bg-purple-600 rounded text-xs"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-mono">{layer.nodes}</span>
                      <button
                        onClick={() => updateLayerNodes(layer.id, layer.nodes + 1)}
                        className="w-6 h-6 bg-purple-600 rounded text-xs"
                      >
                        +
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-sm">Activation:</span>
                      <select
                        value={layer.activation}
                        onChange={(e) => updateLayerActivation(layer.id, e.target.value)}
                        className="bg-gray-800 text-white px-2 py-1 rounded text-sm"
                        disabled={layer.id === 'input'}
                      >
                        <option value="linear">Linear</option>
                        <option value="relu">ReLU</option>
                        <option value="sigmoid">Sigmoid</option>
                        <option value="tanh">Tanh</option>
                        <option value="softmax">Softmax</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="flex gap-1">
                      {Array.from({ length: Math.min(layer.nodes, 8) }, (_, i) => (
                        <div
                          key={i}
                          className={`w-8 h-8 rounded-full border-2 ${
                            isTraining && trainingData.epoch > index * 10
                              ? 'bg-purple-400 border-purple-300 animate-pulse'
                              : 'bg-purple-600 border-purple-400'
                          }`}
                        />
                      ))}
                      {layer.nodes > 8 && <span className="text-xs text-gray-400 ml-2">+{layer.nodes - 8}</span>}
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={addLayer}
                className="w-full py-3 border-2 border-dashed border-purple-500 hover:border-purple-400 rounded-lg flex items-center justify-center gap-2 text-purple-400 hover:text-purple-300"
              >
                <Plus className="w-4 h-4" />
                Add Hidden Layer
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">Training Progress</h2>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Accuracy</span>
                    <span>{(trainingData.accuracy * 100).toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full transition-all"
                      style={{ width: `${trainingData.accuracy * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Loss</span>
                    <span>{trainingData.loss.toFixed(3)}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-red-500 h-2 rounded-full transition-all"
                      style={{ width: `${Math.min(trainingData.loss * 100, 100)}%` }}
                    />
                  </div>
                </div>

                <div className="text-sm">
                  <span className="text-gray-400">Epoch: </span>
                  <span className="font-mono">{trainingData.epoch}/50</span>
                </div>

                {isTraining && (
                  <div className="text-center">
                    <div className="animate-spin w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full mx-auto"></div>
                    <p className="text-sm text-purple-400 mt-2">Training in progress...</p>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">Network Info</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Layers:</span>
                  <span>{layers.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Nodes:</span>
                  <span>{layers.reduce((sum, layer) => sum + layer.nodes, 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Parameters:</span>
                  <span>
                    ~{layers.reduce((sum, layer, i) => (i > 0 ? sum + layers[i - 1].nodes * layer.nodes : sum), 0)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
