'use client';

import React, { useState, useEffect } from 'react';
import { Trophy, Atom, Clock, Microscope, Zap, Beaker, Sparkles, Target } from 'lucide-react';

interface GameProps {
  onComplete: (_: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface NanoMaterial {
  id: string;
  name: string;
  type: 'carbon' | 'metal' | 'polymer' | 'ceramic';
  size: number; // in nanometers
  stability: number;
  reactivity: number;
  cost: number;
  applications: string[];
  description: string;
}

interface Experiment {
  id: string;
  name: string;
  complexity: number;
  duration: number;
  success_rate: number;
  safety_risk: number;
  expected_outcome: string;
  materials_needed: string[];
}

interface Equipment {
  id: string;
  name: string;
  precision: number;
  cost: number;
  maintenance: number;
  specialization: string[];
  description: string;
}

const NANO_MATERIALS: NanoMaterial[] = [
  {
    id: 'carbon-nanotubes',
    name: 'Ống nano carbon',
    type: 'carbon',
    size: 2,
    stability: 95,
    reactivity: 30,
    cost: 80,
    applications: ['Electronics', 'Composite materials', 'Energy storage'],
    description: 'Cấu trúc carbon siêu mạnh với tính dẫn điện xuất sắc'
  },
  {
    id: 'graphene',
    name: 'Graphene',
    type: 'carbon',
    size: 1,
    stability: 90,
    reactivity: 40,
    cost: 120,
    applications: ['Flexible electronics', 'Sensors', 'Batteries'],
    description: 'Lớp carbon một nguyên tử dày với tính chất độc đáo'
  },
  {
    id: 'silver-nanoparticles',
    name: 'Hạt nano bạc',
    type: 'metal',
    size: 10,
    stability: 80,
    reactivity: 70,
    cost: 60,
    applications: ['Antibacterial coatings', 'Medical devices', 'Water treatment'],
    description: 'Hạt nano bạc có tính kháng khuẩn mạnh'
  },
  {
    id: 'titanium-dioxide',
    name: 'Titanium dioxide nano',
    type: 'ceramic',
    size: 25,
    stability: 98,
    reactivity: 50,
    cost: 40,
    applications: ['UV protection', 'Photocatalysis', 'Coatings'],
    description: 'Vật liệu quang xúc tác bền và an toàn'
  },
  {
    id: 'quantum-dots',
    name: 'Chấm lượng tử',
    type: 'ceramic',
    size: 5,
    stability: 85,
    reactivity: 60,
    cost: 100,
    applications: ['Displays', 'Solar cells', 'Biomarkers'],
    description: 'Tinh thể nano phát sáng với màu sắc điều chỉnh được'
  },
  {
    id: 'polymer-nanofibers',
    name: 'Sợi nano polymer',
    type: 'polymer',
    size: 100,
    stability: 70,
    reactivity: 80,
    cost: 30,
    applications: ['Filtration', 'Tissue engineering', 'Textiles'],
    description: 'Sợi polymer siêu nhỏ có khả năng lọc tuyệt vời'
  }
];

const EXPERIMENTS: Experiment[] = [
  {
    id: 'synthesis',
    name: 'Tổng hợp vật liệu nano',
    complexity: 70,
    duration: 120,
    success_rate: 85,
    safety_risk: 30,
    expected_outcome: 'Tạo ra vật liệu nano với kích thước đồng đều',
    materials_needed: ['carbon-nanotubes', 'silver-nanoparticles']
  },
  {
    id: 'characterization',
    name: 'Đặc trưng hóa vật liệu',
    complexity: 50,
    duration: 90,
    success_rate: 95,
    safety_risk: 10,
    expected_outcome: 'Xác định kích thước và tính chất vật liệu',
    materials_needed: ['graphene', 'quantum-dots']
  },
  {
    id: 'functionalization',
    name: 'Chức năng hóa bề mặt',
    complexity: 80,
    duration: 150,
    success_rate: 75,
    safety_risk: 40,
    expected_outcome: 'Cải thiện tính tương thích và hoạt tính',
    materials_needed: ['titanium-dioxide', 'polymer-nanofibers']
  },
  {
    id: 'assembly',
    name: 'Lắp ráp cấu trúc nano',
    complexity: 90,
    duration: 180,
    success_rate: 70,
    safety_risk: 50,
    expected_outcome: 'Tạo cấu trúc 3D phức tạp từ nano building blocks',
    materials_needed: ['carbon-nanotubes', 'graphene', 'quantum-dots']
  },
  {
    id: 'application-test',
    name: 'Thử nghiệm ứng dụng',
    complexity: 60,
    duration: 100,
    success_rate: 80,
    safety_risk: 20,
    expected_outcome: 'Kiểm tra hiệu suất trong ứng dụng thực tế',
    materials_needed: ['silver-nanoparticles', 'titanium-dioxide']
  }
];

const EQUIPMENT: Equipment[] = [
  {
    id: 'electron-microscope',
    name: 'Kính hiển vi điện tử',
    precision: 95,
    cost: 150,
    maintenance: 40,
    specialization: ['imaging', 'characterization'],
    description: 'Quan sát cấu trúc nano với độ phân giải nguyên tử'
  },
  {
    id: 'atomic-force-microscope',
    name: 'Kính hiển vi lực nguyên tử',
    precision: 98,
    cost: 120,
    maintenance: 30,
    specialization: ['surface-analysis', 'manipulation'],
    description: 'Đo lực và thao tác nguyên tử đơn lẻ'
  },
  {
    id: 'cvd-reactor',
    name: 'Lò phản ứng CVD',
    precision: 85,
    cost: 100,
    maintenance: 60,
    specialization: ['synthesis', 'growth'],
    description: 'Tạo màng mỏng và cấu trúc nano bằng hơi hóa học'
  },
  {
    id: 'sputtering-system',
    name: 'Hệ thống phún xạ',
    precision: 80,
    cost: 80,
    maintenance: 50,
    specialization: ['coating', 'deposition'],
    description: 'Tạo lớp phủ nano đồng đều trên bề mặt'
  },
  {
    id: 'xray-diffractometer',
    name: 'Máy nhiễu xạ tia X',
    precision: 90,
    cost: 90,
    maintenance: 35,
    specialization: ['structure-analysis', 'crystallography'],
    description: 'Phân tích cấu trúc tinh thể của vật liệu nano'
  }
];

const NanoLabExplorerGame: React.FC<GameProps> = ({ onComplete, timeLeft, onRestart }) => {
  const [gamePhase, setGamePhase] = useState<'briefing' | 'material-selection' | 'equipment-selection' | 'experiment-selection' | 'lab-work' | 'results'>('briefing');
  const [selectedMaterials, setSelectedMaterials] = useState<NanoMaterial[]>([]);
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment[]>([]);
  const [selectedExperiment, setSelectedExperiment] = useState<Experiment | null>(null);
  const [budget, setBudget] = useState(400);
  const [experimentProgress, setExperimentProgress] = useState(0);
  const [isExperimenting, setIsExperimenting] = useState(false);

  // Lab metrics
  const [safetyLevel, setSafetyLevel] = useState(100);
  const [precision, setPrecision] = useState(0);
  const [efficiency, setEfficiency] = useState(0);

  const totalCost = selectedMaterials.reduce((sum, m) => sum + m.cost, 0) + 
    selectedEquipment.reduce((sum, e) => sum + e.cost, 0);

  const canAfford = totalCost <= budget;

  const calculatePrecision = () => {
    if (selectedEquipment.length === 0) return 0;
    return Math.round(selectedEquipment.reduce((sum, e) => sum + e.precision, 0) / selectedEquipment.length);
  };

  const calculateSuccess = () => {
    if (!selectedExperiment) return 0;
    
    const basePrecision = calculatePrecision();
    const materialStability = selectedMaterials.reduce((sum, m) => sum + m.stability, 0) / Math.max(selectedMaterials.length, 1);
    const experimentComplexity = selectedExperiment.complexity;
    
    const successRate = Math.min(100, 
      selectedExperiment.success_rate + 
      (basePrecision - 80) * 0.5 + 
      (materialStability - 80) * 0.3 - 
      (experimentComplexity - 70) * 0.2
    );
    
    return Math.max(0, Math.round(successRate));
  };

  const calculateInnovationScore = () => {
    const materialInnovation = selectedMaterials.reduce((sum, m) => {
      const sizeBonus = m.size <= 5 ? 20 : m.size <= 20 ? 10 : 0;
      const applicationBonus = m.applications.length * 5;
      return sum + sizeBonus + applicationBonus;
    }, 0);
    
    const equipmentInnovation = selectedEquipment.reduce((sum, e) => {
      return sum + e.precision + e.specialization.length * 5;
    }, 0);
    
    const experimentInnovation = selectedExperiment ? selectedExperiment.complexity : 0;
    
    return Math.min(100, Math.round((materialInnovation + equipmentInnovation + experimentInnovation) / 10));
  };

  const startExperiment = () => {
    if (!selectedExperiment || selectedMaterials.length === 0 || selectedEquipment.length === 0 || !canAfford) {
      onComplete(false, 0);
      return;
    }

    setGamePhase('lab-work');
    setIsExperimenting(true);
    
    const safetyRisk = selectedExperiment.safety_risk;
    const initialSafety = Math.max(50, 100 - safetyRisk);
    setSafetyLevel(initialSafety);
    
    const basePrecision = calculatePrecision();
    setPrecision(basePrecision);
    
    const efficiency = Math.round((budget - totalCost) / budget * 100);
    setEfficiency(efficiency);
    
    const duration = selectedExperiment.duration;
    const interval = setInterval(() => {
      setExperimentProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsExperimenting(false);
          setGamePhase('results');
          return 100;
        }
        return prev + (100 / duration) * 2;
      });
      
      // Random safety fluctuations during experiment
      setSafetyLevel(prev => Math.max(30, Math.min(100, prev + (Math.random() - 0.5) * 5)));
    }, 100);
  };

  const getOverallScore = () => {
    const successRate = calculateSuccess();
    const innovationScore = calculateInnovationScore();
    const costEfficiency = Math.round((budget - totalCost) / budget * 100);
    const finalSafety = safetyLevel;
    
    return Math.round((successRate * 0.3 + innovationScore * 0.3 + costEfficiency * 0.2 + finalSafety * 0.2));
  };

  useEffect(() => {
    if (timeLeft <= 0 && gamePhase !== 'results') {
      onComplete(false, 0);
    }
  }, [timeLeft, gamePhase, onComplete]);

  if (gamePhase === 'briefing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-purple-500/20">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Atom className="w-16 h-16 text-purple-400" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Nano Lab Explorer</h1>
            <p className="text-xl text-gray-300 mb-6">
              Khám phá thế giới nano và tạo ra vật liệu tương lai!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Target className="w-6 h-6 mr-2 text-purple-400" />
                Mục tiêu nhiệm vụ
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Chọn vật liệu nano phù hợp</li>
                <li>• Lựa chọn thiết bị lab chuyên dụng</li>
                <li>• Thiết kế thí nghiệm sáng tạo</li>
                <li>• Quản lý ngân sách 400 triệu VNĐ</li>
                <li>• Đảm bảo an toàn phòng lab</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Sparkles className="w-6 h-6 mr-2 text-blue-400" />
                Tiêu chí đánh giá
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• <span className="text-green-400">Tỷ lệ thành công (30%)</span> - Kết quả thí nghiệm</li>
                <li>• <span className="text-purple-400">Tính đổi mới (30%)</span> - Sự sáng tạo trong nghiên cứu</li>
                <li>• <span className="text-blue-400">Hiệu quả chi phí (20%)</span> - Tối ưu ngân sách</li>
                <li>• <span className="text-red-400">An toàn lab (20%)</span> - Quản lý rủi ro</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('material-selection')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Bắt đầu nghiên cứu
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'material-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn vật liệu nano (tối đa 3)</h2>
            <p className="text-gray-300">Ngân sách: {budget} triệu VNĐ</p>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {NANO_MATERIALS.map((material) => {
              const isSelected = selectedMaterials.some(m => m.id === material.id);
              const canSelect = selectedMaterials.length < 3 && 
                (totalCost + material.cost - (isSelected ? material.cost : 0)) <= budget;
              
              return (
                <div
                  key={material.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-purple-500 bg-purple-500/20'
                      : !canSelect && !isSelected
                      ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                      : 'border-white/20 hover:border-purple-400/50'
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
                    <div className="flex items-center">
                      <Atom className="w-8 h-8 text-purple-400" />
                      <span className="ml-2 text-sm text-gray-400">{material.size}nm</span>
                    </div>
                    <span className="text-yellow-400 font-bold">{material.cost}M VNĐ</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{material.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{material.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                    <div>
                      <span className="text-gray-400">Ổn định:</span>
                      <div className="bg-gray-700 rounded-full h-2 mt-1">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{width: `${material.stability}%`}}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Phản ứng:</span>
                      <div className="bg-gray-700 rounded-full h-2 mt-1">
                        <div 
                          className="bg-orange-500 h-2 rounded-full" 
                          style={{width: `${material.reactivity}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-400">
                    <strong>Ứng dụng:</strong> {material.applications.join(', ')}
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

          <div className="text-center">
            <button
              onClick={() => setGamePhase('equipment-selection')}
              disabled={selectedMaterials.length === 0}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Tiếp tục chọn thiết bị
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'equipment-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn thiết bị lab (tối đa 2)</h2>
            <div className="flex justify-center items-center gap-4 text-gray-300">
              <span>Ngân sách còn lại: {budget - selectedMaterials.reduce((sum, m) => sum + m.cost, 0)} triệu VNĐ</span>
              <span>Đã chọn: {selectedEquipment.length}/2</span>
            </div>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {EQUIPMENT.map((equipment) => {
              const isSelected = selectedEquipment.some(e => e.id === equipment.id);
              const currentCostWithoutEquip = selectedMaterials.reduce((sum, m) => sum + m.cost, 0) +
                selectedEquipment.filter(e => e.id !== equipment.id).reduce((sum, e) => sum + e.cost, 0);
              const canSelect = selectedEquipment.length < 2 && 
                (currentCostWithoutEquip + equipment.cost) <= budget;
              
              return (
                <div
                  key={equipment.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-blue-500 bg-blue-500/20'
                      : !canSelect && !isSelected
                      ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                      : 'border-white/20 hover:border-blue-400/50'
                  }`}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedEquipment(prev => prev.filter(e => e.id !== equipment.id));
                    } else if (canSelect) {
                      setSelectedEquipment(prev => [...prev, equipment]);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Microscope className="w-8 h-8 text-blue-400" />
                    <span className="text-yellow-400 font-bold">{equipment.cost}M VNĐ</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{equipment.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{equipment.description}</p>
                  
                  <div className="grid grid-cols-1 gap-2 text-sm mb-4">
                    <div>
                      <span className="text-gray-400">Độ chính xác:</span>
                      <div className="bg-gray-700 rounded-full h-2 mt-1">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{width: `${equipment.precision}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-400">
                    <strong>Chuyên môn:</strong> {equipment.specialization.join(', ')}
                  </div>
                  
                  {isSelected && (
                    <div className="mt-4 text-center">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Đã chọn</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('experiment-selection')}
              disabled={selectedEquipment.length === 0}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Tiếp tục chọn thí nghiệm
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'experiment-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn loại thí nghiệm</h2>
            <div className="text-gray-300">
              Tổng chi phí hiện tại: {totalCost} triệu VNĐ
            </div>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {EXPERIMENTS.map((experiment) => {
              const hasRequiredMaterials = experiment.materials_needed.every(materialId =>
                selectedMaterials.some(m => m.id === materialId)
              );
              
              return (
                <div
                  key={experiment.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    selectedExperiment?.id === experiment.id
                      ? 'border-green-500 bg-green-500/20'
                      : !hasRequiredMaterials
                      ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                      : 'border-white/20 hover:border-green-400/50'
                  }`}
                  onClick={() => {
                    if (hasRequiredMaterials) {
                      setSelectedExperiment(experiment);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Beaker className="w-8 h-8 text-green-400" />
                    <div className="text-right text-sm">
                      <div className="text-yellow-400">Thời gian: {experiment.duration}min</div>
                      <div className="text-red-400">Rủi ro: {experiment.safety_risk}%</div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{experiment.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{experiment.expected_outcome}</p>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                    <div>
                      <span className="text-gray-400">Độ phức tạp:</span>
                      <div className="bg-gray-700 rounded-full h-2 mt-1">
                        <div 
                          className="bg-orange-500 h-2 rounded-full" 
                          style={{width: `${experiment.complexity}%`}}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Tỷ lệ thành công:</span>
                      <div className="bg-gray-700 rounded-full h-2 mt-1">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{width: `${experiment.success_rate}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-400 mb-4">
                    <strong>Vật liệu cần:</strong> {experiment.materials_needed.map(id => 
                      NANO_MATERIALS.find(m => m.id === id)?.name || id
                    ).join(', ')}
                  </div>
                  
                  {!hasRequiredMaterials && (
                    <div className="text-red-400 text-sm text-center">
                      ❌ Thiếu vật liệu cần thiết
                    </div>
                  )}
                  
                  {selectedExperiment?.id === experiment.id && (
                    <div className="mt-4 text-center">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Đã chọn</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="bg-white/10 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Tóm tắt nghiên cứu</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Vật liệu</h4>
                {selectedMaterials.map(material => (
                  <p key={material.id} className="text-gray-300 text-sm">{material.name}</p>
                ))}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Thiết bị</h4>
                {selectedEquipment.map(equipment => (
                  <p key={equipment.id} className="text-gray-300 text-sm">{equipment.name}</p>
                ))}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-2">Thí nghiệm</h4>
                <p className="text-gray-300 text-sm">{selectedExperiment?.name || 'Chưa chọn'}</p>
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
              onClick={startExperiment}
              disabled={!selectedExperiment || !canAfford}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Bắt đầu thí nghiệm
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'lab-work') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-purple-500/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Đang tiến hành thí nghiệm...</h2>
            <p className="text-gray-300">{selectedExperiment?.name}</p>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <div className="flex justify-between text-white mb-2">
                <span>Tiến độ thí nghiệm</span>
                <span>{Math.round(experimentProgress)}%</span>
              </div>
              <div className="bg-gray-700 rounded-full h-6">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-6 rounded-full transition-all duration-300" 
                  style={{width: `${experimentProgress}%`}}
                ></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-red-400">An toàn Lab</span>
                  <span className="text-white font-bold">{Math.round(safetyLevel)}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full transition-all duration-300 ${
                      safetyLevel > 80 ? 'bg-green-500' : 
                      safetyLevel > 60 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{width: `${safetyLevel}%`}}
                  ></div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-400">Độ chính xác</span>
                  <span className="text-white font-bold">{precision}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-blue-500 h-3 rounded-full transition-all duration-300" 
                    style={{width: `${precision}%`}}
                  ></div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-green-400">Hiệu quả</span>
                  <span className="text-white font-bold">{efficiency}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-green-500 h-3 rounded-full transition-all duration-300" 
                    style={{width: `${efficiency}%`}}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center items-center space-x-4 text-gray-300">
              <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
              <span>Đang phân tích kết quả...</span>
              <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'results') {
    const successRate = calculateSuccess();
    const innovationScore = calculateInnovationScore();
    const labScore = getOverallScore();

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-purple-500/20">
          <div className="text-center mb-8">
            <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">Thí nghiệm hoàn tất!</h2>
            <p className="text-2xl text-gray-300 mb-2">{selectedExperiment?.name}</p>
            <div className="text-6xl font-bold text-white mb-4">{labScore} điểm</div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Kết quả chi tiết</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-green-400">Tỷ lệ thành công:</span>
                  <span className="text-white font-bold">{successRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-400">Tính đổi mới:</span>
                  <span className="text-white font-bold">{innovationScore}/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-400">Hiệu quả chi phí:</span>
                  <span className="text-white font-bold">{efficiency}%</span>
                </div>
                <div className="flex justify-between border-t border-white/20 pt-2">
                  <span className="text-red-400">An toàn cuối:</span>
                  <span className="text-white font-bold">{Math.round(safetyLevel)}%</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Đánh giá</h3>
              <div className="space-y-2 text-gray-300">
                {labScore >= 90 && <p>🏆 Nghiên cứu đột phá! Thành quả có thể thay đổi thế giới nano.</p>}
                {labScore >= 80 && labScore < 90 && <p>🌟 Nghiên cứu xuất sắc! Kết quả rất có giá trị khoa học.</p>}
                {labScore >= 70 && labScore < 80 && <p>✅ Nghiên cứu thành công! Có thể publish được trong journal.</p>}
                {labScore >= 60 && labScore < 70 && <p>⚠️ Nghiên cứu khá ổn! Cần cải thiện một số khía cạnh.</p>}
                {labScore < 60 && <p>❌ Nghiên cứu cần phát triển thêm để đạt tiêu chuẩn xuất bản.</p>}
                
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-sm">
                    <strong>Ghi chú:</strong> Nghiên cứu nano thành công cần cân bằng giữa 
                    độ chính xác thiết bị, an toàn thí nghiệm và hiệu quả kinh tế.
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
              Nghiên cứu lại
            </button>
            <button
              onClick={() => onComplete(true, labScore)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
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

export default NanoLabExplorerGame;
