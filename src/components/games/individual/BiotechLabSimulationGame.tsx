'use client';

import React, { useState, useEffect } from 'react';
import { Trophy, Microscope, Clock, Dna, TestTube, Zap } from 'lucide-react';

interface BiotechLabSimulationGameProps {
  onComplete: (score: number) => void;
}

interface Experiment {
  id: string;
  name: string;
  type: 'genetic' | 'protein' | 'cell' | 'drug';
  difficulty: 'easy' | 'medium' | 'hard';
  cost: number;
  duration: number;
  successRate: number;
  potentialImpact: number;
  requirements: string[];
  description: string;
}

interface LabEquipment {
  id: string;
  name: string;
  cost: number;
  efficiency: number;
  required: boolean;
}

const EXPERIMENTS: Experiment[] = [
  {
    id: 'gene-therapy',
    name: 'Gene Therapy cho bệnh hiếm',
    type: 'genetic',
    difficulty: 'hard',
    cost: 80,
    duration: 120,
    successRate: 60,
    potentialImpact: 95,
    requirements: ['CRISPR-Cas9', 'Vector delivery system', 'Cell culture'],
    description: 'Phát triển liệu pháp gen để điều trị bệnh di truyền hiếm gặp'
  },
  {
    id: 'protein-folding',
    name: 'Nghiên cứu Protein Folding',
    type: 'protein',
    difficulty: 'medium',
    cost: 50,
    duration: 90,
    successRate: 75,
    potentialImpact: 80,
    requirements: ['X-ray crystallography', 'NMR spectroscopy', 'AI modeling'],
    description: 'Tìm hiểu cơ chế gấp cuộn protein để phát triển thuốc mới'
  },
  {
    id: 'stem-cell',
    name: 'Tái sinh mô từ Stem Cell',
    type: 'cell',
    difficulty: 'hard',
    cost: 70,
    duration: 100,
    successRate: 65,
    potentialImpact: 90,
    requirements: ['Stem cell culture', 'Growth factors', '3D bioprinting'],
    description: 'Nuôi cấy tế bào gốc để tái tạo các mô và cơ quan'
  },
  {
    id: 'cancer-drug',
    name: 'Thuốc điều trị ung thư',
    type: 'drug',
    difficulty: 'hard',
    cost: 90,
    duration: 150,
    successRate: 55,
    potentialImpact: 100,
    requirements: ['Drug screening', 'Cell viability assays', 'Animal testing'],
    description: 'Phát triển loại thuốc mới tấn công đặc hiệu tế bào ung thư'
  },
  {
    id: 'enzyme-engineering',
    name: 'Thiết kế Enzyme công nghiệp',
    type: 'protein',
    difficulty: 'medium',
    cost: 40,
    duration: 70,
    successRate: 80,
    potentialImpact: 70,
    requirements: ['Protein engineering', 'Activity assays', 'Stability testing'],
    description: 'Tối ưu hóa enzyme để ứng dụng trong sản xuất công nghiệp'
  },
  {
    id: 'biosensor',
    name: 'Biosensor phát hiện virus',
    type: 'genetic',
    difficulty: 'easy',
    cost: 30,
    duration: 50,
    successRate: 85,
    potentialImpact: 75,
    requirements: ['DNA/RNA extraction', 'PCR amplification', 'Detection system'],
    description: 'Phát triển thiết bị sinh học phát hiện nhanh virus và bacteria'
  }
];

const LAB_EQUIPMENT: LabEquipment[] = [
  { id: 'pcr', name: 'PCR Machine', cost: 20, efficiency: 15, required: true },
  { id: 'microscope', name: 'Confocal Microscope', cost: 35, efficiency: 25, required: false },
  { id: 'sequencer', name: 'DNA Sequencer', cost: 40, efficiency: 30, required: false },
  { id: 'incubator', name: 'Cell Incubator', cost: 15, efficiency: 10, required: true },
  { id: 'centrifuge', name: 'High-speed Centrifuge', cost: 25, efficiency: 20, required: false }
];

const EXPERIMENT_TYPES = [
  { id: 'genetic', name: 'Di truyền học', icon: '🧬', color: 'text-green-400' },
  { id: 'protein', name: 'Protein học', icon: '🔬', color: 'text-blue-400' },
  { id: 'cell', name: 'Tế bào học', icon: '🦠', color: 'text-purple-400' },
  { id: 'drug', name: 'Dược học', icon: '💊', color: 'text-red-400' }
];

const BiotechLabSimulationGame: React.FC<BiotechLabSimulationGameProps> = ({ onComplete }) => {
  const [gamePhase, setGamePhase] = useState<'briefing' | 'setup' | 'research' | 'results'>('briefing');
  const [budget] = useState(200);
  const [remainingBudget, setRemainingBudget] = useState(200);
  const [selectedEquipment, setSelectedEquipment] = useState<string[]>([]);
  const [currentExperiment, setCurrentExperiment] = useState<Experiment | null>(null);
  const [completedExperiments, setCompletedExperiments] = useState<{ experiment: Experiment; success: boolean; impact: number }[]>([]);
  const [researchTime, setResearchTime] = useState(0);
  const [maxResearchTime] = useState(300); // 5 minutes
  const [experimentProgress, setExperimentProgress] = useState(0);
  const [isExperimentRunning, setIsExperimentRunning] = useState(false);

  useEffect(() => {
    if (gamePhase === 'research' && researchTime < maxResearchTime) {
      const timer = setTimeout(() => setResearchTime(researchTime + 1), 1000);
      return () => clearTimeout(timer);
    } else if (researchTime >= maxResearchTime && gamePhase === 'research') {
      setGamePhase('results');
    }
  }, [researchTime, gamePhase, maxResearchTime]);

  useEffect(() => {
    if (isExperimentRunning && currentExperiment) {
      if (experimentProgress < currentExperiment.duration) {
        const timer = setTimeout(() => setExperimentProgress(experimentProgress + 1), 50);
        return () => clearTimeout(timer);
      } else {
        finishCurrentExperiment();
      }
    }
  }, [experimentProgress, isExperimentRunning, currentExperiment]);

  const startGame = () => {
    setGamePhase('setup');
  };

  const buyEquipment = (equipmentId: string) => {
    const equipment = LAB_EQUIPMENT.find(e => e.id === equipmentId);
    if (equipment && remainingBudget >= equipment.cost && !selectedEquipment.includes(equipmentId)) {
      setSelectedEquipment([...selectedEquipment, equipmentId]);
      setRemainingBudget(remainingBudget - equipment.cost);
    }
  };

  const startResearch = () => {
    // Check if required equipment is available
    const requiredEquipment = LAB_EQUIPMENT.filter(e => e.required);
    const hasRequired = requiredEquipment.every(e => selectedEquipment.includes(e.id));
    
    if (hasRequired) {
      setGamePhase('research');
      setResearchTime(0);
    }
  };

  const startExperiment = (experiment: Experiment) => {
    if (remainingBudget >= experiment.cost && !isExperimentRunning) {
      setCurrentExperiment(experiment);
      setRemainingBudget(remainingBudget - experiment.cost);
      setExperimentProgress(0);
      setIsExperimentRunning(true);
    }
  };

  const finishCurrentExperiment = () => {
    if (currentExperiment) {
      const equipmentEfficiency = selectedEquipment.reduce((total, eqId) => {
        const eq = LAB_EQUIPMENT.find(e => e.id === eqId);
        return total + (eq?.efficiency || 0);
      }, 0);

      const modifiedSuccessRate = Math.min(95, currentExperiment.successRate + equipmentEfficiency);
      const success = Math.random() * 100 < modifiedSuccessRate;
      const impact = success ? currentExperiment.potentialImpact : Math.floor(currentExperiment.potentialImpact * 0.3);

      setCompletedExperiments([...completedExperiments, {
        experiment: currentExperiment,
        success,
        impact
      }]);

      setCurrentExperiment(null);
      setIsExperimentRunning(false);
      setExperimentProgress(0);
    }
  };

  const calculateScore = () => {
    const totalImpact = completedExperiments.reduce((sum, exp) => sum + exp.impact, 0);
    const successRate = completedExperiments.length > 0 
      ? (completedExperiments.filter(exp => exp.success).length / completedExperiments.length) * 100 
      : 0;
    const budgetEfficiency = ((budget - remainingBudget) / budget) * 30;
    const equipmentBonus = selectedEquipment.length * 5;
    
    return Math.round((totalImpact / 5) + (successRate * 0.3) + budgetEfficiency + equipmentBonus);
  };

  const finishGame = () => {
    const finalScore = calculateScore();
    onComplete(finalScore);
  };

  if (gamePhase === 'briefing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
            <div className="text-center mb-8">
              <Microscope className="w-16 h-16 mx-auto mb-4 text-green-400" />
              <h1 className="text-4xl font-bold text-white mb-4">🧬 Phòng Thí Nghiệm Biotech</h1>
              <p className="text-xl text-gray-300 mb-6">
                Điều hành phòng lab sinh học hiện đại và tiến hành các nghiên cứu đột phá!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-500/10 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <Dna className="w-5 h-5 mr-2 text-green-400" />
                  Mục Tiêu Nghiên Cứu
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Thiết lập phòng lab với thiết bị cần thiết</li>
                  <li>• Tiến hành các thí nghiệm biotech tiên tiến</li>
                  <li>• Tối đa hóa tác động nghiên cứu khoa học</li>
                  <li>• Phát triển ứng dụng y sinh học thực tế</li>
                </ul>
              </div>

              <div className="bg-blue-500/10 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <TestTube className="w-5 h-5 mr-2 text-blue-400" />
                  Lĩnh Vực Nghiên Cứu
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {EXPERIMENT_TYPES.map(type => (
                    <div key={type.id} className="flex items-center text-gray-300">
                      <span className="mr-2">{type.icon}</span>
                      <span className={`text-sm ${type.color}`}>{type.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-purple-500/10 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-purple-400" />
                Quy Trình Nghiên Cứu
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
                <div>
                  <div className="font-semibold text-green-400 mb-2">1. Thiết Lập Lab</div>
                  <p>Mua sắm thiết bị cần thiết trong ngân sách 200 triệu VNĐ</p>
                </div>
                <div>
                  <div className="font-semibold text-blue-400 mb-2">2. Nghiên Cứu</div>
                  <p>Chọn và tiến hành các thí nghiệm biotech</p>
                </div>
                <div>
                  <div className="font-semibold text-purple-400 mb-2">3. Đánh Giá</div>
                  <p>Phân tích kết quả và tác động khoa học</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-500/10 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-4">Yếu Tố Thành Công:</h3>
              <div className="grid md:grid-cols-4 gap-3 text-sm text-gray-300">
                <div className="text-center">
                  <div className="text-xl mb-2">🔬</div>
                  <div className="font-semibold text-green-400">Thiết bị chất lượng</div>
                </div>
                <div className="text-center">
                  <div className="text-xl mb-2">⚗️</div>
                  <div className="font-semibold text-blue-400">Thí nghiệm đa dạng</div>
                </div>
                <div className="text-center">
                  <div className="text-xl mb-2">📊</div>
                  <div className="font-semibold text-purple-400">Tỷ lệ thành công</div>
                </div>
                <div className="text-center">
                  <div className="text-xl mb-2">💡</div>
                  <div className="font-semibold text-yellow-400">Tác động nghiên cứu</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={startGame}
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-xl font-bold text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200 shadow-lg"
              >
                Khởi Tạo Phòng Lab! 🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'setup') {
    const requiredEquipment = LAB_EQUIPMENT.filter(e => e.required);
    const hasAllRequired = requiredEquipment.every(e => selectedEquipment.includes(e.id));

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-green-500/20">
            <div className="flex justify-between items-center text-white">
              <h2 className="text-2xl font-bold">Thiết Lập Phòng Lab</h2>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">💰</span>
                <span>{remainingBudget} triệu VNĐ</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Thiết Bị Khả Dụng</h3>
              <div className="space-y-4">
                {LAB_EQUIPMENT.map(equipment => {
                  const owned = selectedEquipment.includes(equipment.id);
                  const canAfford = remainingBudget >= equipment.cost;
                  
                  return (
                    <div key={equipment.id} className="bg-white/5 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="flex items-center">
                            <span className="font-semibold text-white">{equipment.name}</span>
                            {equipment.required && <span className="ml-2 text-red-400 text-xs">REQUIRED</span>}
                          </div>
                          <div className="text-sm text-gray-400">
                            Hiệu suất: +{equipment.efficiency}%
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-green-400 font-bold">{equipment.cost} triệu</div>
                          {owned ? (
                            <span className="text-green-400 text-sm">✓ Đã mua</span>
                          ) : (
                            <button
                              onClick={() => buyEquipment(equipment.id)}
                              disabled={!canAfford}
                              className={`text-sm px-3 py-1 rounded ${
                                canAfford
                                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                              }`}
                            >
                              {canAfford ? 'Mua' : 'Hết tiền'}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Lab Của Bạn</h3>
              
              {selectedEquipment.length === 0 ? (
                <div className="text-gray-400 text-center py-8">
                  Chưa có thiết bị nào được mua
                </div>
              ) : (
                <div className="space-y-3 mb-6">
                  {selectedEquipment.map(eqId => {
                    const equipment = LAB_EQUIPMENT.find(e => e.id === eqId);
                    return equipment ? (
                      <div key={eqId} className="bg-green-500/10 rounded-lg p-3">
                        <div className="font-semibold text-white">{equipment.name}</div>
                        <div className="text-sm text-green-400">+{equipment.efficiency}% hiệu suất</div>
                      </div>
                    ) : null;
                  })}
                </div>
              )}

              <div className="text-center">
                <div className="mb-4">
                  <div className="text-lg font-bold text-white">
                    Tổng hiệu suất: +{selectedEquipment.reduce((total, eqId) => {
                      const eq = LAB_EQUIPMENT.find(e => e.id === eqId);
                      return total + (eq?.efficiency || 0);
                    }, 0)}%
                  </div>
                </div>
                
                {hasAllRequired ? (
                  <button
                    onClick={startResearch}
                    className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-xl font-bold hover:from-green-600 hover:to-blue-600 transition-all duration-200"
                  >
                    Bắt Đầu Nghiên Cứu! 🔬
                  </button>
                ) : (
                  <div className="text-red-400 text-sm">
                    Cần mua đầy đủ thiết bị bắt buộc để tiếp tục
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'research') {
    const timeRemaining = maxResearchTime - researchTime;

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 p-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 mb-6 border border-green-500/20">
            <div className="flex justify-between items-center text-white">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-400" />
                  <span>{Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">💰</span>
                  <span>{remainingBudget} triệu</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-yellow-400" />
                  <span>Hoàn thành: {completedExperiments.length}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Experiments List */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Thí Nghiệm Khả Dụng</h3>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {EXPERIMENTS.map(experiment => {
                  const canAfford = remainingBudget >= experiment.cost;
                  const experimentType = EXPERIMENT_TYPES.find(t => t.id === experiment.type);
                  
                  return (
                    <div key={experiment.id} className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{experimentType?.icon}</span>
                          <div>
                            <div className="font-semibold text-white">{experiment.name}</div>
                            <div className={`text-sm ${experimentType?.color}`}>{experimentType?.name}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-red-400 text-sm">{experiment.cost} triệu</div>
                          <div className="text-yellow-400 text-sm">Tác động: {experiment.potentialImpact}</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-3">{experiment.description}</p>
                      
                      <div className="flex justify-between items-center text-xs text-gray-400 mb-3">
                        <span>Thành công: {experiment.successRate}%</span>
                        <span>Thời gian: {experiment.duration}s</span>
                      </div>

                      <button
                        onClick={() => startExperiment(experiment)}
                        disabled={!canAfford || isExperimentRunning}
                        className={`w-full py-2 px-3 rounded text-sm font-medium ${
                          canAfford && !isExperimentRunning
                            ? 'bg-green-500 text-white hover:bg-green-600'
                            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        {!canAfford ? 'Không đủ ngân sách' : 
                         isExperimentRunning ? 'Đang thí nghiệm...' : 'Bắt đầu thí nghiệm'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Current Experiment & Results */}
            <div className="space-y-6">
              {/* Current Experiment */}
              {currentExperiment && (
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                  <h3 className="text-xl font-bold text-white mb-4">Thí Nghiệm Đang Chạy</h3>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-white mb-2">{currentExperiment.name}</div>
                    <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-blue-500 h-4 rounded-full transition-all duration-100"
                        style={{ width: `${(experimentProgress / currentExperiment.duration) * 100}%` }}
                      ></div>
                    </div>
                    <div className="text-gray-300">
                      {Math.round((experimentProgress / currentExperiment.duration) * 100)}% hoàn thành
                    </div>
                  </div>
                </div>
              )}

              {/* Completed Experiments */}
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
                <h3 className="text-xl font-bold text-white mb-4">Kết Quả Nghiên Cứu</h3>
                {completedExperiments.length === 0 ? (
                  <div className="text-gray-400 text-center py-4">
                    Chưa có thí nghiệm nào hoàn thành
                  </div>
                ) : (
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {completedExperiments.map((result, index) => (
                      <div key={index} className={`rounded-lg p-3 ${result.success ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-semibold text-white">{result.experiment.name}</div>
                            <div className={`text-sm ${result.success ? 'text-green-400' : 'text-red-400'}`}>
                              {result.success ? '✓ Thành công' : '✗ Thất bại'}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-yellow-400 font-bold">+{result.impact}</div>
                            <div className="text-xs text-gray-400">Tác động</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Results phase
  const score = calculateScore();
  const totalImpact = completedExperiments.reduce((sum, exp) => sum + exp.impact, 0);
  const successRate = completedExperiments.length > 0 
    ? Math.round((completedExperiments.filter(exp => exp.success).length / completedExperiments.length) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
          <div className="text-center mb-8">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <h2 className="text-3xl font-bold text-white mb-4">Kết Quả Nghiên Cứu!</h2>
            <div className="text-4xl font-bold text-yellow-400 mb-2">{score}/100 điểm</div>
            <p className="text-gray-300">
              {score >= 80 ? 'Xuất sắc! Bạn là nhà nghiên cứu biotech tài ba!' :
               score >= 60 ? 'Tốt! Lab của bạn có nhiều đóng góp khoa học.' :
               score >= 40 ? 'Khá ổn! Cần cải thiện hiệu suất và đa dạng hóa nghiên cứu.' :
               'Cần cải thiện! Hãy đầu tư thiết bị tốt hơn và lựa chọn thí nghiệm phù hợp.'}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-500/10 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">{totalImpact}</div>
              <div className="text-sm text-gray-300">Tổng Tác Động</div>
            </div>
            <div className="bg-green-500/10 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">{successRate}%</div>
              <div className="text-sm text-gray-300">Tỷ Lệ Thành Công</div>
            </div>
            <div className="bg-purple-500/10 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">{completedExperiments.length}</div>
              <div className="text-sm text-gray-300">Thí Nghiệm Hoàn Thành</div>
            </div>
            <div className="bg-yellow-500/10 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-2">{budget - remainingBudget}</div>
              <div className="text-sm text-gray-300">Đã Đầu Tư (triệu)</div>
            </div>
          </div>

          {completedExperiments.length > 0 && (
            <div className="bg-white/5 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-4">Thành Tựu Nghiên Cứu:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {completedExperiments.filter(exp => exp.success).map((result, index) => (
                  <div key={index} className="bg-green-500/10 rounded-lg p-4">
                    <div className="font-semibold text-white">{result.experiment.name}</div>
                    <div className="text-sm text-green-400">Tác động: +{result.impact} điểm</div>
                    <div className="text-xs text-gray-400 mt-1">{result.experiment.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="text-center">
            <button
              onClick={finishGame}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-xl font-bold text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200 shadow-lg"
            >
              Hoàn Thành 🎉
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiotechLabSimulationGame;
