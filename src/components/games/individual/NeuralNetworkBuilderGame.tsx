import React, { useState, useEffect } from 'react';

interface Layer {
  id: number;
  type: 'input' | 'hidden' | 'output';
  neurons: number;
  name: string;
}

interface NeuralNetworkBuilderGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

export function NeuralNetworkBuilderGame({ onComplete, timeLeft, onRestart }: NeuralNetworkBuilderGameProps) {
  const [layers, setLayers] = useState<Layer[]>([
    { id: 1, type: 'input', neurons: 3, name: 'Input Layer' },
    { id: 2, type: 'output', neurons: 1, name: 'Output Layer' },
  ]);
  const [currentAccuracy, setCurrentAccuracy] = useState(45);
  const [trainingEpochs, setTrainingEpochs] = useState(0);
  const [score, setScore] = useState(0);

  const addHiddenLayer = () => {
    const newLayer: Layer = {
      id: layers.length + 1,
      type: 'hidden',
      neurons: 4,
      name: `Hidden Layer ${layers.filter((l) => l.type === 'hidden').length + 1}`,
    };

    const newLayers = [...layers];
    newLayers.splice(-1, 0, newLayer); // Insert before output layer
    setLayers(newLayers);
    setCurrentAccuracy((prev) => Math.min(95, prev + 15));
  };

  const adjustNeurons = (layerId: number, change: number) => {
    setLayers((prev) =>
      prev.map((layer) =>
        layer.id === layerId
          ? {
              ...layer,
              neurons: Math.max(1, Math.min(10, layer.neurons + change)),
            }
          : layer,
      ),
    );
    setCurrentAccuracy((prev) => Math.min(95, prev + Math.random() * 5));
  };

  const trainNetwork = () => {
    setTrainingEpochs((prev) => prev + 10);
    const improvement = Math.random() * 10;
    setCurrentAccuracy((prev) => Math.min(98, prev + improvement));
    setScore((prev) => prev + Math.floor(improvement * 2));
  };

  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">🧠 Neural Network Builder</h3>
        <div className="flex justify-between">
          <div className="text-pink-400 font-medium">Điểm: {score}</div>
          <div
            className={`font-medium ${currentAccuracy > 90 ? 'text-green-400' : currentAccuracy > 70 ? 'text-yellow-400' : 'text-red-400'}`}
          >
            Accuracy: {currentAccuracy.toFixed(1)}%
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="text-white font-medium mb-3">Network Architecture:</h4>
          <div className="space-y-3">
            {layers.map((layer) => (
              <div
                key={layer.id}
                className={`p-4 rounded-lg border ${
                  layer.type === 'input'
                    ? 'bg-blue-500/20 border-blue-500/50'
                    : layer.type === 'hidden'
                      ? 'bg-purple-500/20 border-purple-500/50'
                      : 'bg-green-500/20 border-green-500/50'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-medium">{layer.name}</div>
                    <div className="text-gray-400 text-sm">Neurons: {layer.neurons}</div>
                  </div>
                  {layer.type === 'hidden' && (
                    <div className="flex gap-1">
                      <button
                        onClick={() => adjustNeurons(layer.id, -1)}
                        className="bg-red-600 hover:bg-red-700 text-white w-8 h-8 rounded text-sm"
                      >
                        -
                      </button>
                      <button
                        onClick={() => adjustNeurons(layer.id, 1)}
                        className="bg-green-600 hover:bg-green-700 text-white w-8 h-8 rounded text-sm"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={addHiddenLayer}
            disabled={layers.filter((l) => l.type === 'hidden').length >= 3}
            className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            + Add Hidden Layer
          </button>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Training Control:</h4>
          <div className="space-y-4">
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Training Progress:</span>
                <span className="text-blue-400">{trainingEpochs} epochs</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, trainingEpochs)}%` }}
                />
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Model Accuracy:</span>
                <span
                  className={
                    currentAccuracy > 90 ? 'text-green-400' : currentAccuracy > 70 ? 'text-yellow-400' : 'text-red-400'
                  }
                >
                  {currentAccuracy.toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentAccuracy > 90 ? 'bg-green-500' : currentAccuracy > 70 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${currentAccuracy}%` }}
                />
              </div>
            </div>

            <button
              onClick={trainNetwork}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
            >
              🔄 Train Network (+10 epochs)
            </button>

            {currentAccuracy > 90 && (
              <button
                onClick={() => onComplete(true, score + 100)}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-4 rounded-lg font-medium hover:from-green-600 hover:to-emerald-600 transition-all duration-200"
              >
                🎯 Deploy Model (90%+ accuracy!)
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
