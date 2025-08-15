'use client';

import React, { useState, useEffect } from 'react';
import { Brain, Database, Code, BarChart3, Clock, Star, Zap, Target, TrendingUp, Cpu } from 'lucide-react';

interface GameProps {
  onComplete: (_: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface Dataset {
  id: string;
  name: string;
  description: string;
  size: number;
  quality: number;
  domain: string;
  cost: number;
  features: number;
}

interface Algorithm {
  id: string;
  name: string;
  type: string;
  accuracy: number;
  speed: number;
  interpretability: number;
  complexity: number;
  cost: number;
}

interface TrainingConfig {
  epochs: number;
  batchSize: number;
  learningRate: number;
  validationSplit: number;
  earlyStopping: boolean;
  cost: number;
}

const DATASETS: Dataset[] = [
  {
    id: 'customer-behavior',
    name: 'Dữ liệu hành vi khách hàng',
    description: 'Phân tích mua sắm và tương tác online',
    size: 1000000,
    quality: 8,
    domain: 'E-commerce',
    cost: 15,
    features: 25
  },
  {
    id: 'medical-imaging',
    name: 'Hình ảnh y tế CT/MRI',
    description: 'Chẩn đoán bệnh qua hình ảnh',
    size: 50000,
    quality: 9,
    domain: 'Healthcare',
    cost: 30,
    features: 512
  },
  {
    id: 'financial-transactions',
    name: 'Giao dịch tài chính',
    description: 'Phát hiện gian lận và rủi ro',
    size: 2000000,
    quality: 7,
    domain: 'Finance',
    cost: 25,
    features: 40
  },
  {
    id: 'traffic-patterns',
    name: 'Mô hình giao thông',
    description: 'Dự đoán và tối ưu lưu lượng',
    size: 500000,
    quality: 6,
    domain: 'Transportation',
    cost: 10,
    features: 15
  },
  {
    id: 'weather-climate',
    name: 'Dữ liệu thời tiết khí hậu',
    description: 'Dự báo thời tiết dài hạn',
    size: 5000000,
    quality: 8,
    domain: 'Environment',
    cost: 20,
    features: 35
  },
  {
    id: 'social-media',
    name: 'Nội dung mạng xã hội',
    description: 'Phân tích sentiment và trend',
    size: 10000000,
    quality: 5,
    domain: 'Social Media',
    cost: 12,
    features: 100
  }
];

const ALGORITHMS: Algorithm[] = [
  {
    id: 'deep-neural-network',
    name: 'Deep Neural Network',
    type: 'Deep Learning',
    accuracy: 9,
    speed: 6,
    interpretability: 3,
    complexity: 9,
    cost: 40
  },
  {
    id: 'random-forest',
    name: 'Random Forest',
    type: 'Ensemble',
    accuracy: 7,
    speed: 8,
    interpretability: 7,
    complexity: 5,
    cost: 15
  },
  {
    id: 'gradient-boosting',
    name: 'Gradient Boosting',
    type: 'Ensemble',
    accuracy: 8,
    speed: 7,
    interpretability: 6,
    complexity: 6,
    cost: 20
  },
  {
    id: 'svm',
    name: 'Support Vector Machine',
    type: 'Kernel Method',
    accuracy: 7,
    speed: 6,
    interpretability: 4,
    complexity: 7,
    cost: 18
  },
  {
    id: 'transformer',
    name: 'Transformer Neural Network',
    type: 'Deep Learning',
    accuracy: 10,
    speed: 4,
    interpretability: 2,
    complexity: 10,
    cost: 50
  },
  {
    id: 'linear-regression',
    name: 'Linear/Logistic Regression',
    type: 'Linear Model',
    accuracy: 5,
    speed: 10,
    interpretability: 10,
    complexity: 2,
    cost: 5
  }
];

const TRAINING_CONFIGS: TrainingConfig[] = [
  {
    epochs: 10,
    batchSize: 32,
    learningRate: 0.01,
    validationSplit: 0.2,
    earlyStopping: false,
    cost: 5
  },
  {
    epochs: 50,
    batchSize: 64,
    learningRate: 0.001,
    validationSplit: 0.3,
    earlyStopping: true,
    cost: 15
  },
  {
    epochs: 100,
    batchSize: 128,
    learningRate: 0.0001,
    validationSplit: 0.25,
    earlyStopping: true,
    cost: 25
  }
];

const MLModelBuilderGame: React.FC<GameProps> = ({ onComplete, timeLeft, onRestart }) => {
  const [gamePhase, setGamePhase] = useState<'briefing' | 'dataset' | 'algorithm' | 'training' | 'evaluation' | 'results'>('briefing');
  const [budget] = useState(150); // 150 million VND budget
  const [selectedDataset, setSelectedDataset] = useState<Dataset | null>(null);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<Algorithm | null>(null);
  const [selectedConfig, setSelectedConfig] = useState<TrainingConfig | null>(null);
  const [spentBudget, setSpentBudget] = useState(0);
  const [modelAccuracy, setModelAccuracy] = useState(0);
  const [trainingTime, setTrainingTime] = useState(0);
  const [modelComplexity, setModelComplexity] = useState(0);
  const [deploymentReadiness, setDeploymentReadiness] = useState(0);
  const [overallScore, setOverallScore] = useState(0);
  const [isTraining, setIsTraining] = useState(false);
  const [trainingProgress, setTrainingProgress] = useState(0);

  useEffect(() => {
    if (timeLeft <= 0 && gamePhase !== 'results') {
      calculateResults();
    }
  }, [timeLeft, gamePhase]);

  useEffect(() => {
    if (isTraining) {
      const interval = setInterval(() => {
        setTrainingProgress(prev => {
          if (prev >= 100) {
            setIsTraining(false);
            setGamePhase('evaluation');
            return 100;
          }
          return prev + 5;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [isTraining]);

  const calculateResults = () => {
    if (!selectedDataset || !selectedAlgorithm || !selectedConfig) {
      setOverallScore(0);
      setGamePhase('results');
      onComplete(false, 0);
      return;
    }

    // Calculate model accuracy based on dataset quality, algorithm accuracy, and training config
    const dataQualityBonus = selectedDataset.quality * 10;
    const algorithmAccuracy = selectedAlgorithm.accuracy * 10;
    const configBonus = (selectedConfig.epochs / 10) + (selectedConfig.validationSplit * 100);
    const accuracy = Math.min(100, (dataQualityBonus * 0.3 + algorithmAccuracy * 0.5 + configBonus * 0.2));

    // Calculate training efficiency (speed vs quality trade-off)
    const speedScore = selectedAlgorithm.speed * 10;
    const complexityPenalty = selectedAlgorithm.complexity * 5;
    const efficiency = Math.max(0, speedScore - complexityPenalty + 50);

    // Calculate model interpretability and deployment readiness
    const interpretabilityScore = selectedAlgorithm.interpretability * 10;
    const deployment = Math.min(100, (accuracy * 0.4 + efficiency * 0.3 + interpretabilityScore * 0.3));

    // Calculate overall score
    const budgetEfficiency = Math.min(100, ((budget - spentBudget) / budget) * 100);
    const overall = (accuracy * 0.4 + efficiency * 0.3 + deployment * 0.2 + budgetEfficiency * 0.1);

    setModelAccuracy(Math.round(accuracy));
    setTrainingTime(Math.round(efficiency));
    setModelComplexity(selectedAlgorithm.complexity * 10);
    setDeploymentReadiness(Math.round(deployment));
    setOverallScore(Math.round(overall));
    
    setGamePhase('results');
    onComplete(true, overall);
  };

  const handleDatasetSelect = (dataset: Dataset) => {
    setSelectedDataset(dataset);
    setSpentBudget(dataset.cost);
    setGamePhase('algorithm');
  };

  const handleAlgorithmSelect = (algorithm: Algorithm) => {
    setSelectedAlgorithm(algorithm);
    setSpentBudget(prev => prev + algorithm.cost);
    setGamePhase('training');
  };

  const handleConfigSelect = (config: TrainingConfig) => {
    setSelectedConfig(config);
    setSpentBudget(prev => prev + config.cost);
    setGamePhase('evaluation');
    setIsTraining(true);
    setTrainingProgress(0);
  };

  if (gamePhase === 'briefing') {
    return (
      <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8 rounded-lg text-white max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Brain className="w-16 h-16 mx-auto mb-4 text-purple-400" />
          <h2 className="text-3xl font-bold mb-4">AI Model Builder Challenge</h2>
          <p className="text-xl text-purple-200">Xây dựng mô hình AI tối ưu cho doanh nghiệp Việt Nam</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Target className="w-6 h-6 mr-2 text-green-400" />
              Mục tiêu dự án
            </h3>
            <ul className="space-y-2 text-purple-100">
              <li>• Xây dựng mô hình AI hiệu quả cao</li>
              <li>• Tối ưu hóa độ chính xác và tốc độ</li>
              <li>• Đảm bảo khả năng giải thích model</li>
              <li>• Triển khai production-ready</li>
              <li>• Quản lý ngân sách hiệu quả</li>
            </ul>
          </div>

          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Zap className="w-6 h-6 mr-2 text-yellow-400" />
              Thách thức ML/AI
            </h3>
            <ul className="space-y-2 text-purple-100">
              <li>• Chọn dataset phù hợp với bài toán</li>
              <li>• Cân bằng accuracy vs interpretability</li>
              <li>• Tối ưu hyperparameters training</li>
              <li>• Quản lý overfitting và bias</li>
              <li>• Đảm bảo scalability và performance</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/10 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Database className="w-6 h-6 mr-2 text-blue-400" />
            Quy trình phát triển AI
          </h3>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="bg-blue-600/50 p-4 rounded">
              <div className="text-2xl font-bold text-blue-200">1</div>
              <div className="text-sm text-blue-300">Chọn Dataset</div>
            </div>
            <div className="bg-purple-600/50 p-4 rounded">
              <div className="text-2xl font-bold text-purple-200">2</div>
              <div className="text-sm text-purple-300">Chọn Algorithm</div>
            </div>
            <div className="bg-green-600/50 p-4 rounded">
              <div className="text-2xl font-bold text-green-200">3</div>
              <div className="text-sm text-green-300">Training Config</div>
            </div>
            <div className="bg-yellow-600/50 p-4 rounded">
              <div className="text-2xl font-bold text-yellow-200">4</div>
              <div className="text-sm text-yellow-300">Evaluate Model</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 p-4 rounded-lg mb-6">
            <div className="text-2xl font-bold text-green-300">150 triệu VNĐ</div>
            <div className="text-sm text-green-200">Ngân sách dự án AI</div>
          </div>
          <button
            onClick={() => setGamePhase('dataset')}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-3 rounded-lg font-bold text-lg transition-all duration-200"
          >
            Bắt đầu xây dựng AI Model
          </button>
        </div>
      </div>
    );
  }

  if (gamePhase === 'dataset') {
    return (
      <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6 rounded-lg text-white max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Chọn Dataset Training</h2>
          <div className="flex items-center space-x-4">
            <div className="bg-green-600/50 px-4 py-2 rounded">
              <span className="text-sm">Ngân sách: {budget - spentBudget}/{budget} triệu VNĐ</span>
            </div>
            <div className="bg-blue-600/50 px-4 py-2 rounded flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span className="text-sm">{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {DATASETS.map((dataset) => {
            const canAfford = dataset.cost <= (budget - spentBudget + (selectedDataset?.cost || 0));
            
            return (
              <div
                key={dataset.id}
                className={`p-6 rounded-lg border transition-all duration-200 cursor-pointer ${
                  selectedDataset?.id === dataset.id
                    ? 'border-purple-400 bg-purple-500/20'
                    : canAfford
                    ? 'border-blue-400 bg-blue-500/10 hover:bg-blue-500/20'
                    : 'border-gray-500 bg-gray-500/10 opacity-50'
                }`}
                onClick={() => canAfford && handleDatasetSelect(dataset)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold">{dataset.name}</h3>
                  <div className="bg-blue-600 px-2 py-1 rounded text-xs">
                    {dataset.domain}
                  </div>
                </div>
                
                <p className="text-sm text-gray-300 mb-4">{dataset.description}</p>
                
                <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                  <div className="text-center bg-white/10 p-2 rounded">
                    <div className="text-blue-300">Kích thước</div>
                    <div className="font-bold">{(dataset.size / 1000000).toFixed(1)}M records</div>
                  </div>
                  <div className="text-center bg-white/10 p-2 rounded">
                    <div className="text-green-300">Chất lượng</div>
                    <div className="font-bold">{dataset.quality}/10</div>
                  </div>
                  <div className="text-center bg-white/10 p-2 rounded">
                    <div className="text-yellow-300">Features</div>
                    <div className="font-bold">{dataset.features}</div>
                  </div>
                  <div className="text-center bg-white/10 p-2 rounded">
                    <div className="text-purple-300">Chi phí</div>
                    <div className="font-bold">{dataset.cost}M VNĐ</div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    disabled={!canAfford}
                    className={`px-4 py-2 rounded font-bold transition-all duration-200 ${
                      canAfford
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
                        : 'bg-gray-600 cursor-not-allowed'
                    }`}
                  >
                    {selectedDataset?.id === dataset.id ? 'Đã chọn' : 'Chọn Dataset'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (gamePhase === 'algorithm') {
    return (
      <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6 rounded-lg text-white max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Chọn AI Algorithm</h2>
          <div className="flex items-center space-x-4">
            <div className="bg-green-600/50 px-4 py-2 rounded">
              <span className="text-sm">Ngân sách: {budget - spentBudget}/{budget} triệu VNĐ</span>
            </div>
            <div className="bg-blue-600/50 px-4 py-2 rounded flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span className="text-sm">{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
            </div>
          </div>
        </div>

        {selectedDataset && (
          <div className="bg-white/10 p-4 rounded-lg mb-6">
            <h3 className="font-bold mb-2">Dataset đã chọn:</h3>
            <div className="flex items-center justify-between">
              <span>{selectedDataset.name}</span>
              <span className="text-blue-300">{selectedDataset.cost}M VNĐ</span>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {ALGORITHMS.map((algorithm) => {
            const canAfford = algorithm.cost <= (budget - spentBudget);
            
            return (
              <div
                key={algorithm.id}
                className={`p-6 rounded-lg border transition-all duration-200 cursor-pointer ${
                  canAfford
                    ? 'border-purple-400 bg-purple-500/10 hover:bg-purple-500/20'
                    : 'border-gray-500 bg-gray-500/10 opacity-50'
                }`}
                onClick={() => canAfford && handleAlgorithmSelect(algorithm)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold">{algorithm.name}</h3>
                  <div className="bg-purple-600 px-2 py-1 rounded text-xs">
                    {algorithm.type}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                  <div className="text-center bg-white/10 p-2 rounded">
                    <div className="text-green-300">Accuracy</div>
                    <div className="font-bold">{algorithm.accuracy}/10</div>
                  </div>
                  <div className="text-center bg-white/10 p-2 rounded">
                    <div className="text-blue-300">Speed</div>
                    <div className="font-bold">{algorithm.speed}/10</div>
                  </div>
                  <div className="text-center bg-white/10 p-2 rounded">
                    <div className="text-yellow-300">Interpret</div>
                    <div className="font-bold">{algorithm.interpretability}/10</div>
                  </div>
                  <div className="text-center bg-white/10 p-2 rounded">
                    <div className="text-red-300">Complexity</div>
                    <div className="font-bold">{algorithm.complexity}/10</div>
                  </div>
                </div>

                <div className="text-center mb-4">
                  <span className="text-purple-300 font-bold text-lg">{algorithm.cost}M VNĐ</span>
                </div>

                <div className="flex justify-center">
                  <button
                    disabled={!canAfford}
                    className={`px-4 py-2 rounded font-bold transition-all duration-200 ${
                      canAfford
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                        : 'bg-gray-600 cursor-not-allowed'
                    }`}
                  >
                    Chọn Algorithm
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (gamePhase === 'training') {
    return (
      <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6 rounded-lg text-white max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Cấu hình Training</h2>
          <div className="flex items-center space-x-4">
            <div className="bg-green-600/50 px-4 py-2 rounded">
              <span className="text-sm">Ngân sách: {budget - spentBudget}/{budget} triệu VNĐ</span>
            </div>
            <div className="bg-blue-600/50 px-4 py-2 rounded flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span className="text-sm">{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Dataset:</h3>
            <div className="text-sm">{selectedDataset?.name}</div>
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Algorithm:</h3>
            <div className="text-sm">{selectedAlgorithm?.name}</div>
          </div>
        </div>

        <div className="space-y-6">
          {TRAINING_CONFIGS.map((config, index) => {
            const canAfford = config.cost <= (budget - spentBudget);
            
            return (
              <div
                key={index}
                className={`p-6 rounded-lg border transition-all duration-200 cursor-pointer ${
                  canAfford
                    ? 'border-green-400 bg-green-500/10 hover:bg-green-500/20'
                    : 'border-gray-500 bg-gray-500/10 opacity-50'
                }`}
                onClick={() => canAfford && handleConfigSelect(config)}
              >
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-blue-300 text-sm">Epochs</div>
                    <div className="font-bold text-xl">{config.epochs}</div>
                  </div>
                  <div>
                    <div className="text-green-300 text-sm">Batch Size</div>
                    <div className="font-bold text-xl">{config.batchSize}</div>
                  </div>
                  <div>
                    <div className="text-yellow-300 text-sm">Learning Rate</div>
                    <div className="font-bold text-xl">{config.learningRate}</div>
                  </div>
                  <div>
                    <div className="text-purple-300 text-sm">Validation</div>
                    <div className="font-bold text-xl">{(config.validationSplit * 100).toFixed(0)}%</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm">
                    Early Stopping: <span className={config.earlyStopping ? 'text-green-400' : 'text-red-400'}>
                      {config.earlyStopping ? 'Có' : 'Không'}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-green-300">
                    {config.cost}M VNĐ
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (gamePhase === 'evaluation') {
    return (
      <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8 rounded-lg text-white max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Cpu className="w-16 h-16 mx-auto mb-4 text-purple-400 animate-pulse" />
          <h2 className="text-3xl font-bold mb-4">Đang Training AI Model...</h2>
          <p className="text-xl text-purple-200">Hệ thống đang học và tối ưu hóa model</p>
        </div>

        <div className="bg-white/10 p-6 rounded-lg mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-bold">Training Progress:</span>
            <span className="text-xl font-bold text-green-300">{trainingProgress}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-6 mb-4">
            <div 
              className="bg-gradient-to-r from-purple-600 to-blue-600 h-6 rounded-full transition-all duration-200"
              style={{ width: `${trainingProgress}%` }}
            ></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-sm text-gray-300">Dataset</div>
              <div className="font-bold">{selectedDataset?.name}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-300">Algorithm</div>
              <div className="font-bold">{selectedAlgorithm?.name}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-300">Epochs</div>
              <div className="font-bold">{selectedConfig?.epochs}</div>
            </div>
          </div>
        </div>

        {!isTraining && (
          <div className="text-center">
            <button
              onClick={calculateResults}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-8 py-3 rounded-lg font-bold text-lg transition-all duration-200"
            >
              Đánh giá kết quả Model
            </button>
          </div>
        )}
      </div>
    );
  }

  if (gamePhase === 'results') {
    const getPerformanceLevel = (score: number) => {
      if (score >= 90) return { level: 'Xuất sắc', color: 'text-green-400', icon: '🏆' };
      if (score >= 80) return { level: 'Tốt', color: 'text-blue-400', icon: '⭐' };
      if (score >= 70) return { level: 'Khá', color: 'text-yellow-400', icon: '👍' };
      if (score >= 60) return { level: 'Trung bình', color: 'text-orange-400', icon: '📈' };
      return { level: 'Cần cải thiện', color: 'text-red-400', icon: '🔧' };
    };

    const overallPerformance = getPerformanceLevel(overallScore);

    return (
      <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8 rounded-lg text-white max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{overallPerformance.icon}</div>
          <h2 className="text-3xl font-bold mb-4">Kết quả AI Model</h2>
          <p className={`text-2xl font-bold ${overallPerformance.color}`}>
            {overallPerformance.level} - {overallScore}/100 điểm
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Hiệu suất Model:</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                  Model Accuracy
                </span>
                <span className="font-bold text-green-300">{modelAccuracy}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-blue-400" />
                  Training Efficiency
                </span>
                <span className="font-bold text-blue-300">{trainingTime}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-purple-400" />
                  Model Complexity
                </span>
                <span className="font-bold text-purple-300">{modelComplexity}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-yellow-400" />
                  Deployment Ready
                </span>
                <span className="font-bold text-yellow-300">{deploymentReadiness}%</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Thông tin dự án:</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Dataset:</span>
                <span className="font-bold">{selectedDataset?.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Algorithm:</span>
                <span className="font-bold">{selectedAlgorithm?.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Training Cost:</span>
                <span className="font-bold">{selectedConfig?.cost}M VNĐ</span>
              </div>
              <div className="flex justify-between">
                <span>Total Budget:</span>
                <span className="font-bold">{spentBudget}/{budget} triệu VNĐ</span>
              </div>
              <div className="flex justify-between">
                <span>Cost Efficiency:</span>
                <span className="font-bold">{Math.round((overallScore / spentBudget) * 10)}/10</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/10 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Star className="w-6 h-6 mr-2 text-yellow-400" />
            Đánh giá AI Expert
          </h3>
          <div className="text-gray-300 leading-relaxed">
            {overallScore >= 90 && (
              <p>
                🎉 <strong>Outstanding AI Model!</strong> Bạn đã xây dựng một mô hình AI đẳng cấp thế giới với độ chính xác cao, 
                hiệu quả training tối ưu và sẵn sàng deploy production. Model này có thể tạo ra giá trị kinh doanh to lớn 
                và thúc đẩy chuyển đổi số doanh nghiệp.
              </p>
            )}
            {overallScore >= 80 && overallScore < 90 && (
              <p>
                ⭐ <strong>Excellent Model!</strong> AI model của bạn đạt chất lượng rất tốt với cân bằng hợp lý giữa 
                accuracy, speed và interpretability. Một số tinh chỉnh nhỏ sẽ giúp đạt được performance tối ưu.
              </p>
            )}
            {overallScore >= 70 && overallScore < 80 && (
              <p>
                👍 <strong>Good Model!</strong> Model có nền tảng tốt và có thể đáp ứng nhu cầu cơ bản. 
                Cần cải thiện thêm về accuracy hoặc optimization để đạt được hiệu quả cao hơn.
              </p>
            )}
            {overallScore >= 60 && overallScore < 70 && (
              <p>
                📈 <strong>Average Model.</strong> Model đáp ứng được yêu cầu tối thiểu nhưng cần đầu tư thêm 
                về data quality, algorithm selection hoặc training configuration.
              </p>
            )}
            {overallScore < 60 && (
              <p>
                🔧 <strong>Needs Improvement.</strong> Model cần được tối ưu đáng kể về mặt kỹ thuật, 
                data preparation và training strategy để đạt được hiệu quả thực tế.
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={onRestart}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-lg font-bold transition-all duration-200"
          >
            Xây dựng lại Model
          </button>
          <button
            onClick={() => onComplete(true, overallScore)}
            className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 px-6 py-3 rounded-lg font-bold transition-all duration-200"
          >
            Hoàn thành
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default MLModelBuilderGame;
