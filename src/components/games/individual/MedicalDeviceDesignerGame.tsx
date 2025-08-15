'use client';

import React, { useState, useEffect } from 'react';
import { Trophy, Heart, Clock, Stethoscope, Zap, Shield, Brain, Target } from 'lucide-react';

interface GameProps {
  onComplete: (_: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface Device {
  id: string;
  name: string;
  type: 'diagnostic' | 'therapeutic' | 'monitoring' | 'surgical';
  cost: number;
  development: number;
  safety: number;
  innovation: number;
  description: string;
}

interface Material {
  id: string;
  name: string;
  biocompatibility: number;
  durability: number;
  cost: number;
  innovation: number;
}

interface Technology {
  id: string;
  name: string;
  type: 'sensors' | 'ai' | 'robotics' | 'materials' | 'electronics';
  accuracy: number;
  cost: number;
  complexity: number;
}

const MEDICAL_DEVICES: Device[] = [
  {
    id: 'cardiac-monitor',
    name: 'Thiết bị theo dõi tim mạch AI',
    type: 'monitoring',
    cost: 80,
    development: 70,
    safety: 95,
    innovation: 85,
    description: 'Theo dõi nhịp tim và phát hiện rối loạn tim mạch thông minh'
  },
  {
    id: 'surgical-robot',
    name: 'Robot phẫu thuật nano',
    type: 'surgical',
    cost: 150,
    development: 90,
    safety: 90,
    innovation: 95,
    description: 'Robot siêu nhỏ hỗ trợ phẫu thuật chính xác cao'
  },
  {
    id: 'smart-prosthetic',
    name: 'Chân tay giả thông minh',
    type: 'therapeutic',
    cost: 100,
    development: 80,
    safety: 85,
    innovation: 90,
    description: 'Chân tay giả điều khiển bằng tín hiệu não'
  },
  {
    id: 'cancer-scanner',
    name: 'Máy quét phát hiện ung thư sớm',
    type: 'diagnostic',
    cost: 120,
    development: 85,
    safety: 92,
    innovation: 88,
    description: 'Phát hiện tế bào ung thư ở giai đoạn rất sớm'
  },
  {
    id: 'drug-delivery',
    name: 'Hệ thống tiêm thuốc thông minh',
    type: 'therapeutic',
    cost: 60,
    development: 60,
    safety: 88,
    innovation: 75,
    description: 'Tiêm thuốc tự động với liều lượng chính xác'
  },
  {
    id: 'brain-interface',
    name: 'Giao diện não-máy tính',
    type: 'monitoring',
    cost: 200,
    development: 95,
    safety: 80,
    innovation: 98,
    description: 'Đọc và phiên dịch tín hiệu não để điều khiển thiết bị'
  }
];

const MATERIALS: Material[] = [
  {
    id: 'titanium-alloy',
    name: 'Hợp kim Titanium sinh học',
    biocompatibility: 95,
    durability: 90,
    cost: 40,
    innovation: 70
  },
  {
    id: 'bioceramics',
    name: 'Gốm sinh học nano',
    biocompatibility: 90,
    durability: 85,
    cost: 60,
    innovation: 85
  },
  {
    id: 'smart-polymers',
    name: 'Polymer thông minh',
    biocompatibility: 85,
    durability: 80,
    cost: 30,
    innovation: 90
  },
  {
    id: 'graphene-composite',
    name: 'Composite graphene',
    biocompatibility: 80,
    durability: 95,
    cost: 80,
    innovation: 95
  },
  {
    id: 'hydrogel',
    name: 'Hydrogel tái tạo',
    biocompatibility: 98,
    durability: 70,
    cost: 25,
    innovation: 80
  }
];

const TECHNOLOGIES: Technology[] = [
  {
    id: 'ai-diagnostics',
    name: 'AI Chẩn đoán y khoa',
    type: 'ai',
    accuracy: 95,
    cost: 70,
    complexity: 85
  },
  {
    id: 'quantum-sensors',
    name: 'Cảm biến lượng tử',
    type: 'sensors',
    accuracy: 98,
    cost: 90,
    complexity: 95
  },
  {
    id: 'micro-robotics',
    name: 'Robot vi mô',
    type: 'robotics',
    accuracy: 90,
    cost: 85,
    complexity: 90
  },
  {
    id: 'bio-sensors',
    name: 'Cảm biến sinh học',
    type: 'sensors',
    accuracy: 85,
    cost: 40,
    complexity: 60
  },
  {
    id: 'neural-chips',
    name: 'Chip thần kinh',
    type: 'electronics',
    accuracy: 92,
    cost: 100,
    complexity: 95
  },
  {
    id: 'smart-materials',
    name: 'Vật liệu thông minh',
    type: 'materials',
    accuracy: 80,
    cost: 50,
    complexity: 70
  }
];

const MedicalDeviceDesignerGame: React.FC<GameProps> = ({ onComplete, timeLeft, onRestart }) => {
  const [gamePhase, setGamePhase] = useState<'briefing' | 'device-selection' | 'material-selection' | 'technology-selection' | 'development' | 'results'>('briefing');
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
  const [selectedMaterials, setSelectedMaterials] = useState<Material[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);
  const [budget, setBudget] = useState(300);
  const [developmentProgress, setDevelopmentProgress] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  // Development phases
  const [designPhase, setDesignPhase] = useState(0);
  const [prototypePhase, setPrototypePhase] = useState(0);
  const [testingPhase, setTestingPhase] = useState(0);
  const [approvalPhase, setApprovalPhase] = useState(0);

  const totalCost = (selectedDevice?.cost || 0) + 
    selectedMaterials.reduce((sum, m) => sum + m.cost, 0) + 
    selectedTechnologies.reduce((sum, t) => sum + t.cost, 0);

  const canAfford = totalCost <= budget;

  const calculateSafetyScore = () => {
    if (!selectedDevice || selectedMaterials.length === 0) return 0;
    
    const deviceSafety = selectedDevice.safety;
    const materialSafety = selectedMaterials.reduce((sum, m) => sum + m.biocompatibility, 0) / selectedMaterials.length;
    const technologyComplexity = selectedTechnologies.reduce((sum, t) => sum + (100 - t.complexity), 0) / Math.max(selectedTechnologies.length, 1);
    
    return Math.round((deviceSafety * 0.4 + materialSafety * 0.4 + technologyComplexity * 0.2));
  };

  const calculateInnovationScore = () => {
    if (!selectedDevice || selectedMaterials.length === 0) return 0;
    
    const deviceInnovation = selectedDevice.innovation;
    const materialInnovation = selectedMaterials.reduce((sum, m) => sum + m.innovation, 0) / selectedMaterials.length;
    const technologyInnovation = selectedTechnologies.reduce((sum, t) => sum + t.accuracy, 0) / Math.max(selectedTechnologies.length, 1);
    
    return Math.round((deviceInnovation * 0.4 + materialInnovation * 0.3 + technologyInnovation * 0.3));
  };

  const calculateEffectivenessScore = () => {
    if (!selectedDevice || selectedMaterials.length === 0) return 0;
    
    const materialDurability = selectedMaterials.reduce((sum, m) => sum + m.durability, 0) / selectedMaterials.length;
    const technologyAccuracy = selectedTechnologies.reduce((sum, t) => sum + t.accuracy, 0) / Math.max(selectedTechnologies.length, 1);
    const budgetEfficiency = Math.min(100, (budget - totalCost) / budget * 100);
    
    return Math.round((materialDurability * 0.4 + technologyAccuracy * 0.4 + budgetEfficiency * 0.2));
  };

  const startDevelopment = () => {
    if (!selectedDevice || selectedMaterials.length === 0 || !canAfford) {
      onComplete(false, 0);
      return;
    }

    setGamePhase('development');
    setIsSimulating(true);
    
    const developmentSpeed = 100 - (selectedDevice.development + 
      selectedTechnologies.reduce((sum, t) => sum + t.complexity, 0) / Math.max(selectedTechnologies.length, 1)) / 2;
    
    const interval = setInterval(() => {
      setDevelopmentProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSimulating(false);
          setGamePhase('results');
          return 100;
        }
        return prev + Math.max(1, developmentSpeed / 20);
      });
      
      setDesignPhase(prev => Math.min(100, prev + Math.random() * 5));
      setPrototypePhase(prev => Math.min(100, prev + Math.random() * 3));
      setTestingPhase(prev => Math.min(100, prev + Math.random() * 2));
      setApprovalPhase(prev => Math.min(100, prev + Math.random() * 1.5));
    }, 200);
  };

  const getOverallScore = () => {
    const safety = calculateSafetyScore();
    const innovation = calculateInnovationScore();
    const effectiveness = calculateEffectivenessScore();
    const costEfficiency = Math.min(100, (budget - totalCost) / budget * 100);
    
    return Math.round((safety * 0.3 + innovation * 0.3 + effectiveness * 0.25 + costEfficiency * 0.15));
  };

  useEffect(() => {
    if (timeLeft <= 0 && gamePhase !== 'results') {
      onComplete(false, 0);
    }
  }, [timeLeft, gamePhase, onComplete]);

  if (gamePhase === 'briefing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-slate-900 to-blue-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-red-500/20">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Heart className="w-16 h-16 text-red-400" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Thiết kế Thiết bị Y tế</h1>
            <p className="text-xl text-gray-300 mb-6">
              Thiết kế thiết bị y tế cách mạng để cứu sống con người!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Target className="w-6 h-6 mr-2 text-red-400" />
                Mục tiêu nhiệm vụ
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Chọn thiết bị y tế phù hợp</li>
                <li>• Lựa chọn vật liệu an toàn và hiệu quả</li>
                <li>• Tích hợp công nghệ tiên tiến</li>
                <li>• Quản lý ngân sách 300 triệu VNĐ</li>
                <li>• Đảm bảo an toàn và đổi mới</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Brain className="w-6 h-6 mr-2 text-blue-400" />
                Tiêu chí đánh giá
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• <span className="text-red-400">An toàn (30%)</span> - Độ tương thích sinh học</li>
                <li>• <span className="text-blue-400">Đổi mới (30%)</span> - Tính sáng tạo và tiến bộ</li>
                <li>• <span className="text-green-400">Hiệu quả (25%)</span> - Độ chính xác và bền bỉ</li>
                <li>• <span className="text-yellow-400">Chi phí (15%)</span> - Hiệu quả kinh tế</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('device-selection')}
              className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Bắt đầu thiết kế
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'device-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-slate-900 to-blue-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn loại thiết bị y tế</h2>
            <p className="text-gray-300">Ngân sách: {budget} triệu VNĐ</p>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {MEDICAL_DEVICES.map((device) => (
              <div
                key={device.id}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                  selectedDevice?.id === device.id
                    ? 'border-red-500 bg-red-500/20'
                    : 'border-white/20 hover:border-red-400/50'
                }`}
                onClick={() => setSelectedDevice(device)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {device.type === 'diagnostic' && <Stethoscope className="w-8 h-8 text-blue-400" />}
                    {device.type === 'therapeutic' && <Heart className="w-8 h-8 text-red-400" />}
                    {device.type === 'monitoring' && <Brain className="w-8 h-8 text-green-400" />}
                    {device.type === 'surgical' && <Zap className="w-8 h-8 text-yellow-400" />}
                  </div>
                  <span className="text-yellow-400 font-bold">{device.cost}M VNĐ</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{device.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{device.description}</p>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-gray-400">An toàn:</span>
                    <div className="bg-gray-700 rounded-full h-2 mt-1">
                      <div 
                        className="bg-red-500 h-2 rounded-full" 
                        style={{width: `${device.safety}%`}}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-400">Đổi mới:</span>
                    <div className="bg-gray-700 rounded-full h-2 mt-1">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{width: `${device.innovation}%`}}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('material-selection')}
              disabled={!selectedDevice}
              className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Tiếp tục chọn vật liệu
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'material-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-slate-900 to-blue-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn vật liệu (tối thiểu 1, tối đa 3)</h2>
            <div className="flex justify-center items-center gap-4 text-gray-300">
              <span>Ngân sách còn lại: {budget - (selectedDevice?.cost || 0)} triệu VNĐ</span>
              <span>Đã chọn: {selectedMaterials.length}/3</span>
            </div>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {MATERIALS.map((material) => {
              const isSelected = selectedMaterials.some(m => m.id === material.id);
              const canSelect = selectedMaterials.length < 3 && 
                (totalCost + material.cost) <= budget;
              
              return (
                <div
                  key={material.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-green-500 bg-green-500/20'
                      : !canSelect && !isSelected
                      ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                      : 'border-white/20 hover:border-green-400/50'
                  }`}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedMaterials(prev => prev.filter(m => m.id !== material.id));
                    } else if (canSelect) {
                      setSelectedMaterials(prev => [...prev, material]);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Shield className="w-8 h-8 text-green-400" />
                    <span className="text-yellow-400 font-bold">{material.cost}M VNĐ</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{material.name}</h3>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-400">Tương thích:</span>
                      <div className="bg-gray-700 rounded-full h-2 mt-1">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{width: `${material.biocompatibility}%`}}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Bền bỉ:</span>
                      <div className="bg-gray-700 rounded-full h-2 mt-1">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{width: `${material.durability}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  {isSelected && (
                    <div className="mt-4 text-center">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Đã chọn</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('technology-selection')}
              disabled={selectedMaterials.length === 0}
              className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Tiếp tục chọn công nghệ
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'technology-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-slate-900 to-blue-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn công nghệ (tối đa 2)</h2>
            <div className="flex justify-center items-center gap-4 text-gray-300">
              <span>Ngân sách còn lại: {budget - totalCost + selectedTechnologies.reduce((sum, t) => sum + t.cost, 0)} triệu VNĐ</span>
              <span>Đã chọn: {selectedTechnologies.length}/2</span>
            </div>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {TECHNOLOGIES.map((tech) => {
              const isSelected = selectedTechnologies.some(t => t.id === tech.id);
              const currentCostWithoutTech = (selectedDevice?.cost || 0) + 
                selectedMaterials.reduce((sum, m) => sum + m.cost, 0) +
                selectedTechnologies.filter(t => t.id !== tech.id).reduce((sum, t) => sum + t.cost, 0);
              const canSelect = selectedTechnologies.length < 2 && 
                (currentCostWithoutTech + tech.cost) <= budget;
              
              return (
                <div
                  key={tech.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-purple-500 bg-purple-500/20'
                      : !canSelect && !isSelected
                      ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                      : 'border-white/20 hover:border-purple-400/50'
                  }`}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedTechnologies(prev => prev.filter(t => t.id !== tech.id));
                    } else if (canSelect) {
                      setSelectedTechnologies(prev => [...prev, tech]);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Zap className="w-8 h-8 text-purple-400" />
                    <span className="text-yellow-400 font-bold">{tech.cost}M VNĐ</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-400">Độ chính xác:</span>
                      <div className="bg-gray-700 rounded-full h-2 mt-1">
                        <div 
                          className="bg-purple-500 h-2 rounded-full" 
                          style={{width: `${tech.accuracy}%`}}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Độ phức tạp:</span>
                      <div className="bg-gray-700 rounded-full h-2 mt-1">
                        <div 
                          className="bg-orange-500 h-2 rounded-full" 
                          style={{width: `${tech.complexity}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  {isSelected && (
                    <div className="mt-4 text-center">
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">Đã chọn</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="bg-white/10 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Tóm tắt lựa chọn</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="text-lg font-semibold text-red-400 mb-2">Thiết bị</h4>
                <p className="text-gray-300">{selectedDevice?.name}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-2">Vật liệu</h4>
                {selectedMaterials.map(material => (
                  <p key={material.id} className="text-gray-300 text-sm">{material.name}</p>
                ))}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Công nghệ</h4>
                {selectedTechnologies.map(tech => (
                  <p key={tech.id} className="text-gray-300 text-sm">{tech.name}</p>
                ))}
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-white">Tổng chi phí: {totalCost} triệu VNĐ</span>
                <span className={`text-lg font-semibold ${canAfford ? 'text-green-400' : 'text-red-400'}`}>
                  {canAfford ? '✅ Trong ngân sách' : '❌ Vượt ngân sách'}
                </span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={startDevelopment}
              disabled={!canAfford || selectedMaterials.length === 0}
              className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Bắt đầu phát triển
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'development') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-slate-900 to-blue-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-red-500/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Đang phát triển thiết bị...</h2>
            <p className="text-gray-300">Quá trình phát triển đang diễn ra</p>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <div className="flex justify-between text-white mb-2">
                <span>Thiết kế</span>
                <span>{Math.round(designPhase)}%</span>
              </div>
              <div className="bg-gray-700 rounded-full h-4">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 h-4 rounded-full transition-all duration-500" 
                  style={{width: `${designPhase}%`}}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-white mb-2">
                <span>Chế tạo nguyên mẫu</span>
                <span>{Math.round(prototypePhase)}%</span>
              </div>
              <div className="bg-gray-700 rounded-full h-4">
                <div 
                  className="bg-gradient-to-r from-green-500 to-emerald-500 h-4 rounded-full transition-all duration-500" 
                  style={{width: `${prototypePhase}%`}}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-white mb-2">
                <span>Thử nghiệm</span>
                <span>{Math.round(testingPhase)}%</span>
              </div>
              <div className="bg-gray-700 rounded-full h-4">
                <div 
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 h-4 rounded-full transition-all duration-500" 
                  style={{width: `${testingPhase}%`}}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-white mb-2">
                <span>Phê duyệt</span>
                <span>{Math.round(approvalPhase)}%</span>
              </div>
              <div className="bg-gray-700 rounded-full h-4">
                <div 
                  className="bg-gradient-to-r from-red-500 to-pink-500 h-4 rounded-full transition-all duration-500" 
                  style={{width: `${approvalPhase}%`}}
                ></div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="text-6xl font-bold text-white mb-4">
              {Math.round(developmentProgress)}%
            </div>
            <p className="text-gray-300">Hoàn thành phát triển</p>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'results') {
    const safetyScore = calculateSafetyScore();
    const innovationScore = calculateInnovationScore();
    const effectivenessScore = calculateEffectivenessScore();
    const deviceScore = getOverallScore();

    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-slate-900 to-blue-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-red-500/20">
          <div className="text-center mb-8">
            <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">Thiết bị hoàn thành!</h2>
            <p className="text-2xl text-gray-300 mb-2">{selectedDevice?.name}</p>
            <div className="text-6xl font-bold text-white mb-4">{deviceScore} điểm</div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Điểm chi tiết</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-red-400">An toàn y tế:</span>
                  <span className="text-white font-bold">{safetyScore}/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-400">Tính đổi mới:</span>
                  <span className="text-white font-bold">{innovationScore}/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-400">Hiệu quả thiết bị:</span>
                  <span className="text-white font-bold">{effectivenessScore}/100</span>
                </div>
                <div className="flex justify-between border-t border-white/20 pt-2">
                  <span className="text-yellow-400">Chi phí:</span>
                  <span className="text-white font-bold">{totalCost}/300M VNĐ</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Đánh giá</h3>
              <div className="space-y-2 text-gray-300">
                {deviceScore >= 90 && <p>🏆 Thiết bị cách mạng! Sẽ cứu sống hàng triệu người.</p>}
                {deviceScore >= 80 && deviceScore < 90 && <p>🌟 Thiết bị xuất sắc! Đáp ứng cao yêu cầu y tế.</p>}
                {deviceScore >= 70 && deviceScore < 80 && <p>✅ Thiết bị tốt! Có thể ứng dụng thực tế.</p>}
                {deviceScore >= 60 && deviceScore < 70 && <p>⚠️ Thiết bị khá ổn! Cần cải thiện thêm.</p>}
                {deviceScore < 60 && <p>❌ Thiết bị cần phát triển thêm để đảm bảo an toàn.</p>}
                
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-sm">
                    <strong>Lời khuyên:</strong> Thiết bị y tế cần cân bằng giữa an toàn, 
                    đổi mới và hiệu quả kinh tế để có thể ứng dụng rộng rãi trong y tế.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-x-4">
            <button
              onClick={onRestart}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Thiết kế lại
            </button>
            <button
              onClick={() => onComplete(true, deviceScore)}
              className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Hoàn thành
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default MedicalDeviceDesignerGame;
