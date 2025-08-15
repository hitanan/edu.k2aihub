'use client';

import React, { useState, useEffect } from 'react';
import { Trophy, Recycle, Clock, Truck, Factory, Leaf, Zap, TrendingUp } from 'lucide-react';

interface GameProps {
  onComplete: (_: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface WasteType {
  id: string;
  name: string;
  category: 'plastic' | 'paper' | 'glass' | 'metal' | 'organic' | 'electronic';
  difficulty: number;
  value_per_ton: number;
  environmental_impact: number;
  processing_time: number;
  market_demand: number;
  description: string;
}

interface ProcessingTechnology {
  id: string;
  name: string;
  type: 'sorting' | 'cleaning' | 'shredding' | 'melting' | 'composting' | 'advanced';
  efficiency: number;
  capacity_per_hour: number;
  energy_consumption: number;
  maintenance_cost: number;
  environmental_benefit: number;
  cost: number;
  compatible_waste: string[];
  description: string;
}

interface SustainabilityFeature {
  id: string;
  name: string;
  category: 'energy' | 'water' | 'emission' | 'automation' | 'circular';
  efficiency_boost: number;
  cost_reduction: number;
  environmental_score: number;
  public_image_boost: number;
  cost: number;
  required_tech: string[];
  description: string;
}

const WASTE_TYPES: WasteType[] = [
  {
    id: 'plastic-bottles',
    name: 'Chai nhựa PET',
    category: 'plastic',
    difficulty: 40,
    value_per_ton: 15,
    environmental_impact: 85,
    processing_time: 30,
    market_demand: 90,
    description: 'Chai nước ngọt, nước suối dễ tái chế'
  },
  {
    id: 'paper-cardboard',
    name: 'Giấy và bìa carton',
    category: 'paper',
    difficulty: 25,
    value_per_ton: 8,
    environmental_impact: 70,
    processing_time: 20,
    market_demand: 85,
    description: 'Giấy báo, hộp carton, giấy văn phòng'
  },
  {
    id: 'glass-containers',
    name: 'Chai lọ thủy tinh',
    category: 'glass',
    difficulty: 50,
    value_per_ton: 12,
    environmental_impact: 80,
    processing_time: 45,
    market_demand: 75,
    description: 'Chai bia, lọ thực phẩm có thể tái chế vô hạn'
  },
  {
    id: 'aluminum-cans',
    name: 'Lon nhôm',
    category: 'metal',
    difficulty: 35,
    value_per_ton: 25,
    environmental_impact: 95,
    processing_time: 25,
    market_demand: 95,
    description: 'Lon nước ngọt, bia có giá trị cao'
  },
  {
    id: 'organic-waste',
    name: 'Rác thực phẩm',
    category: 'organic',
    difficulty: 70,
    value_per_ton: 5,
    environmental_impact: 60,
    processing_time: 60,
    market_demand: 40,
    description: 'Thức ăn thừa, vỏ trái cây làm phân compost'
  },
  {
    id: 'e-waste',
    name: 'Rác điện tử',
    category: 'electronic',
    difficulty: 90,
    value_per_ton: 35,
    environmental_impact: 100,
    processing_time: 90,
    market_demand: 60,
    description: 'Điện thoại, máy tính cũ chứa kim loại quý'
  }
];

const PROCESSING_TECHNOLOGIES: ProcessingTechnology[] = [
  {
    id: 'optical-sorter',
    name: 'Máy phân loại quang học',
    type: 'sorting',
    efficiency: 95,
    capacity_per_hour: 500,
    energy_consumption: 50,
    maintenance_cost: 15,
    environmental_benefit: 70,
    cost: 80,
    compatible_waste: ['plastic-bottles', 'paper-cardboard', 'glass-containers'],
    description: 'Phân loại tự động bằng AI và cảm biến quang học'
  },
  {
    id: 'industrial-shredder',
    name: 'Máy nghiền công nghiệp',
    type: 'shredding',
    efficiency: 85,
    capacity_per_hour: 800,
    energy_consumption: 80,
    maintenance_cost: 25,
    environmental_benefit: 60,
    cost: 60,
    compatible_waste: ['plastic-bottles', 'paper-cardboard', 'e-waste'],
    description: 'Nghiền vật liệu thành mảnh nhỏ để xử lý tiếp'
  },
  {
    id: 'washing-system',
    name: 'Hệ thống rửa làm sạch',
    type: 'cleaning',
    efficiency: 90,
    capacity_per_hour: 300,
    energy_consumption: 40,
    maintenance_cost: 20,
    environmental_benefit: 80,
    cost: 45,
    compatible_waste: ['plastic-bottles', 'glass-containers', 'aluminum-cans'],
    description: 'Làm sạch nhãn mác và chất bẩn trên bao bì'
  },
  {
    id: 'melting-furnace',
    name: 'Lò nấu chảy',
    type: 'melting',
    efficiency: 80,
    capacity_per_hour: 200,
    energy_consumption: 120,
    maintenance_cost: 40,
    environmental_benefit: 85,
    cost: 100,
    compatible_waste: ['glass-containers', 'aluminum-cans'],
    description: 'Nấu chảy kim loại và thủy tinh để tái tạo'
  },
  {
    id: 'composting-system',
    name: 'Hệ thống ủ phân hữu cơ',
    type: 'composting',
    efficiency: 75,
    capacity_per_hour: 150,
    energy_consumption: 30,
    maintenance_cost: 10,
    environmental_benefit: 90,
    cost: 35,
    compatible_waste: ['organic-waste'],
    description: 'Chuyển đổi rác hữu cơ thành phân compost'
  },
  {
    id: 'precious-metal-extractor',
    name: 'Máy trích xuất kim loại quý',
    type: 'advanced',
    efficiency: 70,
    capacity_per_hour: 50,
    energy_consumption: 100,
    maintenance_cost: 50,
    environmental_benefit: 95,
    cost: 150,
    compatible_waste: ['e-waste'],
    description: 'Tách chiết vàng, bạc, đồng từ thiết bị điện tử'
  },
  {
    id: 'plastic-pelletizer',
    name: 'Máy tạo hạt nhựa',
    type: 'advanced',
    efficiency: 85,
    capacity_per_hour: 400,
    energy_consumption: 70,
    maintenance_cost: 30,
    environmental_benefit: 85,
    cost: 90,
    compatible_waste: ['plastic-bottles'],
    description: 'Biến nhựa tái chế thành hạt nhựa nguyên liệu'
  }
];

const SUSTAINABILITY_FEATURES: SustainabilityFeature[] = [
  {
    id: 'solar-power',
    name: 'Hệ thống năng lượng mặt trời',
    category: 'energy',
    efficiency_boost: 15,
    cost_reduction: 30,
    environmental_score: 90,
    public_image_boost: 85,
    cost: 70,
    required_tech: [],
    description: 'Pin mặt trời cung cấp năng lượng xanh cho nhà máy'
  },
  {
    id: 'water-recycling',
    name: 'Hệ thống tái chế nước',
    category: 'water',
    efficiency_boost: 10,
    cost_reduction: 25,
    environmental_score: 80,
    public_image_boost: 70,
    cost: 50,
    required_tech: ['washing-system'],
    description: 'Tái sử dụng nước rửa, giảm lãng phí'
  },
  {
    id: 'emission-control',
    name: 'Kiểm soát khí thải',
    category: 'emission',
    efficiency_boost: 5,
    cost_reduction: 10,
    environmental_score: 95,
    public_image_boost: 90,
    cost: 45,
    required_tech: ['melting-furnace'],
    description: 'Lọc khí thải, giảm ô nhiễm không khí'
  },
  {
    id: 'ai-automation',
    name: 'Tự động hóa AI',
    category: 'automation',
    efficiency_boost: 25,
    cost_reduction: 20,
    environmental_score: 60,
    public_image_boost: 75,
    cost: 80,
    required_tech: ['optical-sorter'],
    description: 'Robot AI tự động vận hành và tối ưu hóa'
  },
  {
    id: 'circular-economy',
    name: 'Mô hình kinh tế tuần hoàn',
    category: 'circular',
    efficiency_boost: 20,
    cost_reduction: 15,
    environmental_score: 100,
    public_image_boost: 95,
    cost: 60,
    required_tech: ['plastic-pelletizer', 'composting-system'],
    description: 'Tạo vòng khép kín từ rác thành sản phẩm mới'
  },
  {
    id: 'carbon-capture',
    name: 'Thu giữ carbon',
    category: 'emission',
    efficiency_boost: 8,
    cost_reduction: 5,
    environmental_score: 85,
    public_image_boost: 80,
    cost: 55,
    required_tech: ['composting-system'],
    description: 'Hấp thụ CO2 từ khí quyển trong quá trình ủ phân'
  }
];

const RecyclingPlantManagerGame: React.FC<GameProps> = ({ onComplete, timeLeft, onRestart }) => {
  const [gamePhase, setGamePhase] = useState<'briefing' | 'waste-selection' | 'technology-selection' | 'sustainability-selection' | 'operation' | 'results'>('briefing');
  const [selectedWasteTypes, setSelectedWasteTypes] = useState<WasteType[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<ProcessingTechnology[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<SustainabilityFeature[]>([]);
  const [budget, setBudget] = useState(450);
  const [operationProgress, setOperationProgress] = useState(0);
  const [isOperating, setIsOperating] = useState(false);

  // Plant performance metrics
  const [processingEfficiency, setProcessingEfficiency] = useState(0);
  const [environmentalScore, setEnvironmentalScore] = useState(0);
  const [profitability, setProfitability] = useState(0);

  const calculateTotalCost = () => {
    const techCost = selectedTechnologies.reduce((sum, t) => sum + t.cost, 0);
    const featureCost = selectedFeatures.reduce((sum, f) => sum + f.cost, 0);
    return techCost + featureCost;
  };

  const canAfford = calculateTotalCost() <= budget;

  const calculatePlantPerformance = () => {
    if (selectedWasteTypes.length === 0 || selectedTechnologies.length === 0) {
      return { efficiency: 0, environmental: 0, profit: 0 };
    }
    
    // Processing efficiency
    const techEfficiency = selectedTechnologies.reduce((sum, t) => sum + t.efficiency, 0) / selectedTechnologies.length;
    const wasteComplexity = selectedWasteTypes.reduce((sum, w) => sum + (100 - w.difficulty), 0) / selectedWasteTypes.length;
    const sustainabilityBoost = selectedFeatures.reduce((sum, f) => sum + f.efficiency_boost, 0);
    const efficiencyScore = Math.round((techEfficiency * 0.6 + wasteComplexity * 0.3 + sustainabilityBoost * 0.1));
    
    // Environmental score
    const wasteImpact = selectedWasteTypes.reduce((sum, w) => sum + w.environmental_impact, 0) / selectedWasteTypes.length;
    const techBenefit = selectedTechnologies.reduce((sum, t) => sum + t.environmental_benefit, 0) / selectedTechnologies.length;
    const sustainabilityScore = selectedFeatures.reduce((sum, f) => sum + f.environmental_score, 0) / Math.max(selectedFeatures.length, 1);
    const environmentalScore = Math.round((wasteImpact * 0.4 + techBenefit * 0.4 + sustainabilityScore * 0.2));
    
    // Profitability
    const wasteValue = selectedWasteTypes.reduce((sum, w) => sum + w.value_per_ton * w.market_demand / 100, 0);
    const costReduction = selectedFeatures.reduce((sum, f) => sum + f.cost_reduction, 0);
    const operatingCost = selectedTechnologies.reduce((sum, t) => sum + t.maintenance_cost, 0);
    const profitScore = Math.round(Math.max(0, wasteValue - operatingCost / 5 + costReduction / 2));
    
    return {
      efficiency: Math.min(100, efficiencyScore),
      environmental: Math.min(100, environmentalScore),
      profit: Math.min(100, profitScore)
    };
  };

  const startOperation = () => {
    if (selectedWasteTypes.length === 0 || selectedTechnologies.length === 0 || !canAfford) {
      onComplete(false, 0);
      return;
    }

    setGamePhase('operation');
    setIsOperating(true);
    
    const plantResults = calculatePlantPerformance();
    setProcessingEfficiency(plantResults.efficiency);
    setEnvironmentalScore(plantResults.environmental);
    setProfitability(plantResults.profit);
    
    const operationComplexity = selectedWasteTypes.reduce((sum, w) => sum + w.difficulty, 0) / 10 +
      selectedTechnologies.reduce((sum, t) => sum + t.maintenance_cost, 0) / 10;
    
    const interval = setInterval(() => {
      setOperationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsOperating(false);
          setGamePhase('results');
          return 100;
        }
        return prev + Math.max(1, (100 / operationComplexity) * 2.5);
      });
    }, 200);
  };

  const getOverallScore = () => {
    const plantResults = calculatePlantPerformance();
    const costEfficiency = Math.round((budget - calculateTotalCost()) / budget * 100);
    const wasteTypeDiversity = Math.min(25, selectedWasteTypes.length * 5);
    const technologyIntegration = Math.min(20, selectedTechnologies.length * 3);
    const publicImage = selectedFeatures.reduce((sum, f) => sum + f.public_image_boost, 0) / Math.max(selectedFeatures.length, 1) / 5;
    
    return Math.round(
      plantResults.efficiency * 0.25 + 
      plantResults.environmental * 0.30 + 
      plantResults.profit * 0.20 + 
      costEfficiency * 0.1 + 
      (wasteTypeDiversity + technologyIntegration) * 0.1 +
      publicImage * 0.05
    );
  };

  useEffect(() => {
    if (timeLeft <= 0 && gamePhase !== 'results') {
      onComplete(false, 0);
    }
  }, [timeLeft, gamePhase, onComplete]);

  if (gamePhase === 'briefing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-emerald-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-green-500/20">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Recycle className="w-16 h-16 text-green-400" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Recycling Plant Manager</h1>
            <p className="text-xl text-gray-300 mb-6">
              Xây dựng và vận hành nhà máy tái chế hiện đại!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Factory className="w-6 h-6 mr-2 text-green-400" />
                Tính năng quản lý
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Chọn loại rác cần xử lý</li>
                <li>• Lựa chọn công nghệ tái chế</li>
                <li>• Thiết kế tính năng bền vững</li>
                <li>• Quản lý ngân sách 450 triệu VNĐ</li>
                <li>• Tối ưu hóa hiệu quả và lợi nhuận</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Leaf className="w-6 h-6 mr-2 text-emerald-400" />
                Tiêu chí đánh giá
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• <span className="text-blue-400">Hiệu suất (25%)</span> - Khả năng xử lý</li>
                <li>• <span className="text-green-400">Môi trường (30%)</span> - Tác động tích cực</li>
                <li>• <span className="text-yellow-400">Lợi nhuận (20%)</span> - Bền vững kinh tế</li>
                <li>• <span className="text-purple-400">Hiệu quả (25%)</span> - Chi phí và đa dạng</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('waste-selection')}
              className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Bắt đầu xây dựng
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'waste-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-emerald-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn loại rác xử lý (tối đa 4)</h2>
            <p className="text-gray-300">Ngân sách: {budget} triệu VNĐ</p>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {WASTE_TYPES.map((waste) => {
              const isSelected = selectedWasteTypes.some(w => w.id === waste.id);
              const canSelect = selectedWasteTypes.length < 4;
              
              return (
                <div
                  key={waste.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-green-500 bg-green-500/20'
                      : !canSelect && !isSelected
                      ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                      : 'border-white/20 hover:border-green-400/50'
                  }`}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedWasteTypes(prev => prev.filter(w => w.id !== waste.id));
                    } else if (canSelect) {
                      setSelectedWasteTypes(prev => [...prev, waste]);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {waste.category === 'plastic' && <Recycle className="w-6 h-6 text-blue-400" />}
                      {waste.category === 'paper' && <Truck className="w-6 h-6 text-orange-400" />}
                      {waste.category === 'glass' && <Factory className="w-6 h-6 text-cyan-400" />}
                      {waste.category === 'metal' && <Zap className="w-6 h-6 text-yellow-400" />}
                      {waste.category === 'organic' && <Leaf className="w-6 h-6 text-green-400" />}
                      {waste.category === 'electronic' && <TrendingUp className="w-6 h-6 text-purple-400" />}
                    </div>
                    <div className="text-right">
                      <span className="text-yellow-400 font-bold text-sm">{waste.value_per_ton}M/tấn</span>
                      <div className="text-xs text-gray-400">{waste.processing_time}min</div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{waste.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{waste.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-400">Độ khó:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div 
                          className="bg-red-500 h-1 rounded-full" 
                          style={{width: `${waste.difficulty}%`}}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Tác động MT:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div 
                          className="bg-green-500 h-1 rounded-full" 
                          style={{width: `${waste.environmental_impact}%`}}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Nhu cầu TT:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div 
                          className="bg-blue-500 h-1 rounded-full" 
                          style={{width: `${waste.market_demand}%`}}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Giá trị:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div 
                          className="bg-yellow-500 h-1 rounded-full" 
                          style={{width: `${waste.value_per_ton * 3}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <span className={`text-xs px-2 py-1 rounded ${
                      waste.category === 'plastic' ? 'bg-blue-500/20 text-blue-400' :
                      waste.category === 'paper' ? 'bg-orange-500/20 text-orange-400' :
                      waste.category === 'glass' ? 'bg-cyan-500/20 text-cyan-400' :
                      waste.category === 'metal' ? 'bg-yellow-500/20 text-yellow-400' :
                      waste.category === 'organic' ? 'bg-green-500/20 text-green-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {waste.category}
                    </span>
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
              disabled={selectedWasteTypes.length === 0}
              className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
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
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-emerald-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn công nghệ tái chế (tối đa 5)</h2>
            <div className="flex justify-center items-center gap-4 text-gray-300">
              <span>Loại rác: {selectedWasteTypes.length}</span>
              <span>Đã chọn: {selectedTechnologies.length}/5</span>
            </div>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {PROCESSING_TECHNOLOGIES.map((tech) => {
              const isSelected = selectedTechnologies.some(t => t.id === tech.id);
              const hasCompatibleWaste = tech.compatible_waste.some(wasteId =>
                selectedWasteTypes.some(w => w.id === wasteId)
              );
              const canSelect = selectedTechnologies.length < 5 && hasCompatibleWaste;
              
              return (
                <div
                  key={tech.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-blue-500 bg-blue-500/20'
                      : !canSelect && !isSelected
                      ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                      : 'border-white/20 hover:border-blue-400/50'
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
                    <div className="flex items-center">
                      {tech.type === 'sorting' && <TrendingUp className="w-6 h-6 text-blue-400" />}
                      {tech.type === 'cleaning' && <Truck className="w-6 h-6 text-cyan-400" />}
                      {tech.type === 'shredding' && <Factory className="w-6 h-6 text-red-400" />}
                      {tech.type === 'melting' && <Zap className="w-6 h-6 text-orange-400" />}
                      {tech.type === 'composting' && <Leaf className="w-6 h-6 text-green-400" />}
                      {tech.type === 'advanced' && <Recycle className="w-6 h-6 text-purple-400" />}
                    </div>
                    <div className="text-right">
                      <span className="text-yellow-400 font-bold text-sm">{tech.cost}M</span>
                      <div className="text-xs text-gray-400">{tech.capacity_per_hour}/h</div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{tech.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-400">Hiệu suất:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div 
                          className="bg-green-500 h-1 rounded-full" 
                          style={{width: `${tech.efficiency}%`}}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Lợi ích MT:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div 
                          className="bg-emerald-500 h-1 rounded-full" 
                          style={{width: `${tech.environmental_benefit}%`}}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Năng lượng:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div 
                          className="bg-yellow-500 h-1 rounded-full" 
                          style={{width: `${tech.energy_consumption / 2}%`}}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Bảo trì:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div 
                          className="bg-red-500 h-1 rounded-full" 
                          style={{width: `${tech.maintenance_cost * 2}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {!hasCompatibleWaste && (
                    <div className="mt-3 p-2 bg-red-500/20 rounded text-xs">
                      <div className="text-red-400">Không tương thích với loại rác đã chọn</div>
                    </div>
                  )}

                  <div className="mt-4 text-center">
                    <span className={`text-xs px-2 py-1 rounded ${
                      tech.type === 'sorting' ? 'bg-blue-500/20 text-blue-400' :
                      tech.type === 'cleaning' ? 'bg-cyan-500/20 text-cyan-400' :
                      tech.type === 'shredding' ? 'bg-red-500/20 text-red-400' :
                      tech.type === 'melting' ? 'bg-orange-500/20 text-orange-400' :
                      tech.type === 'composting' ? 'bg-green-500/20 text-green-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {tech.type}
                    </span>
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
              onClick={() => setGamePhase('sustainability-selection')}
              disabled={selectedTechnologies.length === 0}
              className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Tiếp tục chọn tính năng bền vững
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'sustainability-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-emerald-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn tính năng bền vững (tối đa 4)</h2>
            <div className="flex justify-center items-center gap-4 text-gray-300">
              <span>Chi phí hiện tại: {calculateTotalCost()} triệu VNĐ</span>
              <span>Đã chọn: {selectedFeatures.length}/4</span>
            </div>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {SUSTAINABILITY_FEATURES.map((feature) => {
              const isSelected = selectedFeatures.some(f => f.id === feature.id);
              const hasRequiredTech = feature.required_tech.length === 0 || 
                feature.required_tech.every(techId =>
                  selectedTechnologies.some(t => t.id === techId)
                );
              const currentCostWithoutFeature = selectedTechnologies.reduce((sum, t) => sum + t.cost, 0) +
                selectedFeatures.filter(f => f.id !== feature.id).reduce((sum, f) => sum + f.cost, 0);
              const canSelect = selectedFeatures.length < 4 && 
                hasRequiredTech && 
                (currentCostWithoutFeature + feature.cost) <= budget;
              
              return (
                <div
                  key={feature.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-emerald-500 bg-emerald-500/20'
                      : !canSelect && !isSelected
                      ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                      : 'border-white/20 hover:border-emerald-400/50'
                  }`}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedFeatures(prev => prev.filter(f => f.id !== feature.id));
                    } else if (canSelect) {
                      setSelectedFeatures(prev => [...prev, feature]);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {feature.category === 'energy' && <Zap className="w-6 h-6 text-yellow-400" />}
                      {feature.category === 'water' && <Truck className="w-6 h-6 text-blue-400" />}
                      {feature.category === 'emission' && <Leaf className="w-6 h-6 text-green-400" />}
                      {feature.category === 'automation' && <TrendingUp className="w-6 h-6 text-purple-400" />}
                      {feature.category === 'circular' && <Recycle className="w-6 h-6 text-emerald-400" />}
                    </div>
                    <div className="text-right">
                      <span className="text-yellow-400 font-bold text-sm">{feature.cost}M</span>
                      <div className="text-xs text-gray-400">+{feature.efficiency_boost}% hiệu suất</div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{feature.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                  
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Giảm chi phí:</span>
                      <div className="bg-gray-700 rounded-full h-1 w-12">
                        <div 
                          className="bg-green-500 h-1 rounded-full" 
                          style={{width: `${feature.cost_reduction}%`}}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Điểm môi trường:</span>
                      <div className="bg-gray-700 rounded-full h-1 w-12">
                        <div 
                          className="bg-emerald-500 h-1 rounded-full" 
                          style={{width: `${feature.environmental_score}%`}}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Hình ảnh công chúng:</span>
                      <div className="bg-gray-700 rounded-full h-1 w-12">
                        <div 
                          className="bg-blue-500 h-1 rounded-full" 
                          style={{width: `${feature.public_image_boost}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {!hasRequiredTech && (
                    <div className="mt-3 p-2 bg-red-500/20 rounded text-xs">
                      <div className="text-red-400">Thiếu công nghệ cần thiết:</div>
                      <div className="text-gray-300">
                        {feature.required_tech.filter(techId =>
                          !selectedTechnologies.some(t => t.id === techId)
                        ).map(techId => 
                          PROCESSING_TECHNOLOGIES.find(t => t.id === techId)?.name
                        ).join(', ')}
                      </div>
                    </div>
                  )}

                  <div className="mt-4 text-center">
                    <span className={`text-xs px-2 py-1 rounded ${
                      feature.category === 'energy' ? 'bg-yellow-500/20 text-yellow-400' :
                      feature.category === 'water' ? 'bg-blue-500/20 text-blue-400' :
                      feature.category === 'emission' ? 'bg-green-500/20 text-green-400' :
                      feature.category === 'automation' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-emerald-500/20 text-emerald-400'
                    }`}>
                      {feature.category}
                    </span>
                  </div>
                  
                  {isSelected && (
                    <div className="mt-4 text-center">
                      <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm">Đã chọn</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="bg-white/10 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Tóm tắt Nhà máy tái chế</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-2">Loại rác ({selectedWasteTypes.length})</h4>
                {selectedWasteTypes.map(waste => (
                  <p key={waste.id} className="text-gray-300 text-sm">{waste.name}</p>
                ))}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Công nghệ ({selectedTechnologies.length})</h4>
                {selectedTechnologies.slice(0, 3).map(tech => (
                  <p key={tech.id} className="text-gray-300 text-sm">{tech.name}</p>
                ))}
                {selectedTechnologies.length > 3 && <p className="text-gray-400 text-xs">+{selectedTechnologies.length - 3} khác</p>}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-2">Bền vững ({selectedFeatures.length})</h4>
                {selectedFeatures.map(feature => (
                  <p key={feature.id} className="text-gray-300 text-sm">{feature.name}</p>
                ))}
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-white">Tổng chi phí:</span>
                <span className="text-yellow-400 font-bold">{calculateTotalCost()}M VNĐ</span>
              </div>
              <div className="mt-2 flex justify-center">
                <span className={`text-lg font-semibold ${canAfford ? 'text-green-400' : 'text-red-400'}`}>
                  {canAfford ? '✅ Trong ngân sách' : '❌ Vượt ngân sách'}
                </span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={startOperation}
              disabled={!canAfford || selectedWasteTypes.length === 0 || selectedTechnologies.length === 0}
              className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Bắt đầu vận hành
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'operation') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-emerald-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-green-500/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Đang vận hành nhà máy...</h2>
            <p className="text-gray-300">Thu gom, phân loại và tái chế rác thải</p>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <div className="flex justify-between text-white mb-2">
                <span>Tiến độ vận hành</span>
                <span>{Math.round(operationProgress)}%</span>
              </div>
              <div className="bg-gray-700 rounded-full h-6">
                <div 
                  className="bg-gradient-to-r from-green-500 to-teal-500 h-6 rounded-full transition-all duration-300" 
                  style={{width: `${operationProgress}%`}}
                ></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-400">Hiệu suất xử lý</span>
                  <span className="text-white font-bold">{processingEfficiency}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-blue-500 h-3 rounded-full transition-all duration-300" 
                    style={{width: `${processingEfficiency}%`}}
                  ></div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-green-400">Điểm môi trường</span>
                  <span className="text-white font-bold">{environmentalScore}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-green-500 h-3 rounded-full transition-all duration-300" 
                    style={{width: `${environmentalScore}%`}}
                  ></div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-yellow-400">Lợi nhuận</span>
                  <span className="text-white font-bold">{profitability}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-yellow-500 h-3 rounded-full transition-all duration-300" 
                    style={{width: `${profitability}%`}}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center items-center space-x-4 text-gray-300">
              <Factory className="w-6 h-6 text-green-400 animate-pulse" />
              <span>Đang xử lý {selectedWasteTypes.length} loại rác thải...</span>
              <Recycle className="w-6 h-6 text-teal-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'results') {
    const plantResults = calculatePlantPerformance();
    const plantScore = getOverallScore();

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-emerald-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-green-500/20">
          <div className="text-center mb-8">
            <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">Nhà máy tái chế hoàn thành!</h2>
            <p className="text-2xl text-gray-300 mb-2">Xử lý {selectedWasteTypes.length} loại rác thải</p>
            <div className="text-6xl font-bold text-white mb-4">{plantScore} điểm</div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Hiệu suất Nhà máy</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-blue-400">Hiệu suất xử lý:</span>
                  <span className="text-white font-bold">{plantResults.efficiency}/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-400">Điểm môi trường:</span>
                  <span className="text-white font-bold">{plantResults.environmental}/100</span>
                </div>
                <div className="flex justify-between border-t border-white/20 pt-2">
                  <span className="text-yellow-400">Lợi nhuận:</span>
                  <span className="text-white font-bold">{plantResults.profit}/100</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Đánh giá tổng thể</h3>
              <div className="space-y-2 text-gray-300">
                {plantScore >= 90 && <p>🏆 Nhà máy tái chế xuất sắc! Mô hình bền vững và hiệu quả cao.</p>}
                {plantScore >= 80 && plantScore < 90 && <p>🌟 Nhà máy tái chế chất lượng! Đóng góp tích cực cho môi trường.</p>}
                {plantScore >= 70 && plantScore < 80 && <p>✅ Nhà máy tái chế tốt! Cần cải thiện một số quy trình.</p>}
                {plantScore >= 60 && plantScore < 70 && <p>⚠️ Nhà máy cơ bản! Hãy đầu tư thêm công nghệ và tính năng.</p>}
                {plantScore < 60 && <p>❌ Cần cải thiện đáng kể để đạt hiệu quả mong muốn.</p>}
                
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-sm">
                    <strong>Chi phí đầu tư:</strong> {calculateTotalCost()} triệu VNĐ
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Lưu ý:</strong> Nhà máy tái chế thành công cần cân bằng giữa hiệu quả, môi trường và lợi nhuận.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-x-4">
            <button
              onClick={onRestart}
              className="bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Xây dựng nhà máy mới
            </button>
            <button
              onClick={() => onComplete(true, plantScore)}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
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

export default RecyclingPlantManagerGame;
