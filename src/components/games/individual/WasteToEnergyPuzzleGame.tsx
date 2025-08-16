'use client';

import React, { useState, useEffect } from 'react';
import { Trophy, Zap, Clock, Flame, Factory, Leaf, TrendingUp, Battery } from 'lucide-react';

interface GameProps {
  onComplete: (_: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface WasteSource {
  id: string;
  name: string;
  type: 'municipal' | 'agricultural' | 'industrial' | 'forestry' | 'food' | 'mixed';
  energy_content: number; // kWh per ton
  availability: number; // tons per day
  processing_difficulty: number;
  moisture_content: number;
  environmental_benefit: number;
  cost_per_ton: number;
  description: string;
}

interface ConversionTechnology {
  id: string;
  name: string;
  method: 'incineration' | 'gasification' | 'pyrolysis' | 'anaerobic' | 'biofuel' | 'hybrid';
  efficiency: number; // percentage
  capacity: number; // tons per day
  energy_output: number; // kWh per ton
  emissions_level: number; // lower is better
  investment_cost: number; // millions VND
  operating_cost: number; // per ton
  compatible_waste: string[];
  description: string;
}

interface OptimizationFeature {
  id: string;
  name: string;
  category: 'efficiency' | 'emission' | 'automation' | 'storage' | 'grid';
  efficiency_boost: number;
  emission_reduction: number;
  cost_reduction: number;
  energy_storage: number;
  grid_stability: number;
  cost: number;
  required_tech: string[];
  description: string;
}

const WASTE_SOURCES: WasteSource[] = [
  {
    id: 'municipal-solid',
    name: 'Rác thải đô thị',
    type: 'municipal',
    energy_content: 10,
    availability: 500,
    processing_difficulty: 40,
    moisture_content: 35,
    environmental_benefit: 80,
    cost_per_ton: 0.5,
    description: 'Rác sinh hoạt từ các hộ gia đình và cơ quan'
  },
  {
    id: 'rice-husk',
    name: 'Vỏ trấu',
    type: 'agricultural',
    energy_content: 15,
    availability: 200,
    processing_difficulty: 25,
    moisture_content: 12,
    environmental_benefit: 90,
    cost_per_ton: 0.3,
    description: 'Phụ phẩm từ quá trình xay xát gạo'
  },
  {
    id: 'wood-chips',
    name: 'Dăm gỗ',
    type: 'forestry',
    energy_content: 18,
    availability: 150,
    processing_difficulty: 20,
    moisture_content: 15,
    environmental_benefit: 85,
    cost_per_ton: 0.8,
    description: 'Dăm gỗ từ cành cây và gỗ thải'
  },
  {
    id: 'food-waste',
    name: 'Rác thực phẩm',
    type: 'food',
    energy_content: 12,
    availability: 300,
    processing_difficulty: 60,
    moisture_content: 70,
    environmental_benefit: 75,
    cost_per_ton: 0.2,
    description: 'Thức ăn thừa từ nhà hàng và chợ'
  },
  {
    id: 'industrial-waste',
    name: 'Chất thải công nghiệp',
    type: 'industrial',
    energy_content: 25,
    availability: 100,
    processing_difficulty: 80,
    moisture_content: 20,
    environmental_benefit: 95,
    cost_per_ton: 1.5,
    description: 'Chất thải từ các nhà máy sản xuất'
  },
  {
    id: 'bagasse',
    name: 'Bã mía',
    type: 'agricultural',
    energy_content: 16,
    availability: 180,
    processing_difficulty: 30,
    moisture_content: 50,
    environmental_benefit: 85,
    cost_per_ton: 0.1,
    description: 'Phụ phẩm từ quá trình ép mía'
  }
];

const CONVERSION_TECHNOLOGIES: ConversionTechnology[] = [
  {
    id: 'mass-burn-incinerator',
    name: 'Lò đốt khối lượng lớn',
    method: 'incineration',
    efficiency: 85,
    capacity: 500,
    energy_output: 8,
    emissions_level: 60,
    investment_cost: 150,
    operating_cost: 2,
    compatible_waste: ['municipal-solid', 'industrial-waste'],
    description: 'Đốt cháy trực tiếp chất thải để sản xuất điện'
  },
  {
    id: 'fluidized-bed-gasifier',
    name: 'Lò khí hóa tầng sôi',
    method: 'gasification',
    efficiency: 80,
    capacity: 200,
    energy_output: 12,
    emissions_level: 40,
    investment_cost: 120,
    operating_cost: 3,
    compatible_waste: ['rice-husk', 'wood-chips', 'bagasse'],
    description: 'Chuyển đổi chất thải thành khí có thể cháy'
  },
  {
    id: 'fast-pyrolysis-reactor',
    name: 'Lò nhiệt phân nhanh',
    method: 'pyrolysis',
    efficiency: 75,
    capacity: 150,
    energy_output: 15,
    emissions_level: 30,
    investment_cost: 100,
    operating_cost: 4,
    compatible_waste: ['wood-chips', 'rice-husk', 'industrial-waste'],
    description: 'Phân hủy nhiệt trong môi trường không oxi'
  },
  {
    id: 'anaerobic-digester',
    name: 'Bể ủ yếm khí',
    method: 'anaerobic',
    efficiency: 70,
    capacity: 300,
    energy_output: 6,
    emissions_level: 20,
    investment_cost: 80,
    operating_cost: 1.5,
    compatible_waste: ['food-waste', 'municipal-solid', 'bagasse'],
    description: 'Sản xuất biogas từ quá trình lên men yếm khí'
  },
  {
    id: 'biomass-power-plant',
    name: 'Nhà máy điện sinh khối',
    method: 'incineration',
    efficiency: 90,
    capacity: 400,
    energy_output: 14,
    emissions_level: 50,
    investment_cost: 200,
    operating_cost: 2.5,
    compatible_waste: ['wood-chips', 'rice-husk', 'bagasse'],
    description: 'Đốt sinh khối trong lò hơi hiệu suất cao'
  },
  {
    id: 'waste-to-ethanol',
    name: 'Chuyển đổi thành ethanol',
    method: 'biofuel',
    efficiency: 65,
    capacity: 100,
    energy_output: 20,
    emissions_level: 25,
    investment_cost: 90,
    operating_cost: 5,
    compatible_waste: ['food-waste', 'bagasse', 'municipal-solid'],
    description: 'Sản xuất nhiên liệu sinh học ethanol'
  },
  {
    id: 'integrated-facility',
    name: 'Cơ sở tích hợp đa công nghệ',
    method: 'hybrid',
    efficiency: 85,
    capacity: 600,
    energy_output: 16,
    emissions_level: 35,
    investment_cost: 250,
    operating_cost: 3.5,
    compatible_waste: ['municipal-solid', 'food-waste', 'industrial-waste', 'wood-chips'],
    description: 'Kết hợp nhiều công nghệ chuyển đổi'
  }
];

const OPTIMIZATION_FEATURES: OptimizationFeature[] = [
  {
    id: 'heat-recovery',
    name: 'Thu hồi nhiệt thải',
    category: 'efficiency',
    efficiency_boost: 15,
    emission_reduction: 10,
    cost_reduction: 20,
    energy_storage: 0,
    grid_stability: 5,
    cost: 40,
    required_tech: ['mass-burn-incinerator', 'biomass-power-plant'],
    description: 'Tận dụng nhiệt thải để tăng hiệu suất'
  },
  {
    id: 'emission-control',
    name: 'Kiểm soát khí thải nâng cao',
    category: 'emission',
    efficiency_boost: 5,
    emission_reduction: 40,
    cost_reduction: 0,
    energy_storage: 0,
    grid_stability: 0,
    cost: 50,
    required_tech: ['mass-burn-incinerator', 'fluidized-bed-gasifier'],
    description: 'Hệ thống lọc khí thải tiên tiến'
  },
  {
    id: 'smart-automation',
    name: 'Tự động hóa thông minh',
    category: 'automation',
    efficiency_boost: 20,
    emission_reduction: 15,
    cost_reduction: 25,
    energy_storage: 0,
    grid_stability: 10,
    cost: 60,
    required_tech: [],
    description: 'AI và IoT để tối ưu hóa vận hành'
  },
  {
    id: 'energy-storage',
    name: 'Hệ thống lưu trữ năng lượng',
    category: 'storage',
    efficiency_boost: 10,
    emission_reduction: 5,
    cost_reduction: 15,
    energy_storage: 50,
    grid_stability: 30,
    cost: 70,
    required_tech: [],
    description: 'Pin và hệ thống lưu trữ năng lượng'
  },
  {
    id: 'grid-integration',
    name: 'Tích hợp lưới điện thông minh',
    category: 'grid',
    efficiency_boost: 8,
    emission_reduction: 10,
    cost_reduction: 30,
    energy_storage: 20,
    grid_stability: 40,
    cost: 45,
    required_tech: [],
    description: 'Kết nối với lưới điện quốc gia'
  },
  {
    id: 'carbon-capture',
    name: 'Thu giữ và lưu trữ carbon',
    category: 'emission',
    efficiency_boost: -5,
    emission_reduction: 60,
    cost_reduction: -10,
    energy_storage: 0,
    grid_stability: 0,
    cost: 80,
    required_tech: ['mass-burn-incinerator', 'biomass-power-plant'],
    description: 'Hệ thống CCS để giảm phát thải CO2'
  },
  {
    id: 'waste-preprocessing',
    name: 'Tiền xử lý chất thải',
    category: 'efficiency',
    efficiency_boost: 25,
    emission_reduction: 20,
    cost_reduction: 10,
    energy_storage: 0,
    grid_stability: 0,
    cost: 35,
    required_tech: [],
    description: 'Phân loại và chuẩn bị chất thải tối ưu'
  }
];

const WasteToEnergyPuzzleGame: React.FC<GameProps> = ({ onComplete, timeLeft, onRestart }) => {
  const [gamePhase, setGamePhase] = useState<'briefing' | 'waste-selection' | 'technology-selection' | 'optimization-selection' | 'operation' | 'results'>('briefing');
  const [selectedWasteSources, setSelectedWasteSources] = useState<WasteSource[]>([]);
  const [selectedTechnology, setSelectedTechnology] = useState<ConversionTechnology | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<OptimizationFeature[]>([]);
  const [budget, setBudget] = useState(500);
  const [operationProgress, setOperationProgress] = useState(0);
  const [isOperating, setIsOperating] = useState(false);

  // Plant performance metrics
  const [energyOutput, setEnergyOutput] = useState(0);
  const [environmentalScore, setEnvironmentalScore] = useState(0);
  const [economicViability, setEconomicViability] = useState(0);

  // Reset game state when restart is called
  const resetGameState = () => {
    setGamePhase('briefing');
    setSelectedWasteSources([]);
    setSelectedTechnology(null);
    setSelectedFeatures([]);
    setBudget(500);
    setOperationProgress(0);
    setIsOperating(false);
    setEnergyOutput(0);
    setEnvironmentalScore(0);
    setEconomicViability(0);
  };

  const handleRestart = () => {
    resetGameState();
    onRestart(); // Call parent restart function
  };

  const calculateTotalCost = () => {
    const techCost = selectedTechnology ? selectedTechnology.investment_cost : 0;
    const featureCost = selectedFeatures.reduce((sum, f) => sum + f.cost, 0);
    return techCost + featureCost;
  };

  const canAfford = calculateTotalCost() <= budget;

  const calculatePlantPerformance = () => {
    if (selectedWasteSources.length === 0 || !selectedTechnology) {
      return { energy: 0, environmental: 0, economic: 0 };
    }
    
    // Energy output calculation
    const totalWastePerDay = selectedWasteSources.reduce((sum, w) => sum + w.availability, 0);
    const avgEnergyContent = selectedWasteSources.reduce((sum, w) => sum + w.energy_content * w.availability, 0) / totalWastePerDay;
    const techEfficiency = selectedTechnology.efficiency + selectedFeatures.reduce((sum, f) => sum + f.efficiency_boost, 0);
    const dailyEnergyOutput = totalWastePerDay * avgEnergyContent * (techEfficiency / 100);
    const energyScore = Math.min(100, Math.round(dailyEnergyOutput / 100));
    
    // Environmental score
    const avgEnvironmentalBenefit = selectedWasteSources.reduce((sum, w) => sum + w.environmental_benefit * w.availability, 0) / totalWastePerDay;
    const emissionReduction = selectedFeatures.reduce((sum, f) => sum + f.emission_reduction, 0);
    const baseEmissions = 100 - selectedTechnology.emissions_level;
    const environmentalScore = Math.round((avgEnvironmentalBenefit + baseEmissions + emissionReduction) / 3);
    
    // Economic viability
    const wasteCost = selectedWasteSources.reduce((sum, w) => sum + w.cost_per_ton * w.availability, 0);
    const operatingCost = selectedTechnology.operating_cost * totalWastePerDay;
    const costReduction = selectedFeatures.reduce((sum, f) => sum + f.cost_reduction, 0);
    const dailyRevenue = dailyEnergyOutput * 0.8; // VND per kWh
    const dailyProfit = dailyRevenue - wasteCost - operatingCost + (costReduction * 10);
    const economicScore = Math.min(100, Math.max(0, Math.round(dailyProfit / 50 + 50)));
    
    return {
      energy: Math.min(100, energyScore),
      environmental: Math.min(100, environmentalScore),
      economic: Math.min(100, economicScore)
    };
  };

  const startOperation = () => {
    if (selectedWasteSources.length === 0 || !selectedTechnology || !canAfford) {
      onComplete(false, 0);
      return;
    }

    setGamePhase('operation');
    setIsOperating(true);
    
    const plantResults = calculatePlantPerformance();
    setEnergyOutput(plantResults.energy);
    setEnvironmentalScore(plantResults.environmental);
    setEconomicViability(plantResults.economic);
    
    const operationComplexity = selectedWasteSources.reduce((sum, w) => sum + w.processing_difficulty, 0) / 10 +
      selectedTechnology.investment_cost / 20 +
      selectedFeatures.reduce((sum, f) => sum + f.cost, 0) / 10;
    
    const interval = setInterval(() => {
      setOperationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsOperating(false);
          setGamePhase('results');
          return 100;
        }
        return prev + Math.max(1, (100 / operationComplexity) * 3);
      });
    }, 200);
  };

  const getOverallScore = () => {
    const plantResults = calculatePlantPerformance();
    const costEfficiency = Math.round((budget - calculateTotalCost()) / budget * 100);
    const wasteUtilization = Math.min(25, selectedWasteSources.length * 5);
    const techAdvancement = selectedTechnology ? Math.round(selectedTechnology.efficiency / 4) : 0;
    const featureIntegration = Math.min(20, selectedFeatures.length * 4);
    const gridStability = selectedFeatures.reduce((sum, f) => sum + f.grid_stability, 0) / 10;
    
    return Math.round(
      plantResults.energy * 0.30 + 
      plantResults.environmental * 0.25 + 
      plantResults.economic * 0.20 + 
      costEfficiency * 0.1 + 
      (wasteUtilization + techAdvancement + featureIntegration) * 0.1 +
      gridStability * 0.05
    );
  };

  useEffect(() => {
    if (timeLeft <= 0 && gamePhase !== 'results') {
      onComplete(false, 0);
    }
  }, [timeLeft, gamePhase, onComplete]);

  if (gamePhase === 'briefing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-yellow-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-orange-500/20">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Flame className="w-16 h-16 text-orange-400" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Waste to Energy Puzzle</h1>
            <p className="text-xl text-gray-300 mb-6">
              Chuyển đổi chất thải thành năng lượng sạch!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Zap className="w-6 h-6 mr-2 text-orange-400" />
                Tính năng chuyển đổi
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Chọn nguồn chất thải</li>
                <li>• Lựa chọn công nghệ chuyển đổi</li>
                <li>• Tối ưu hóa hiệu suất và môi trường</li>
                <li>• Quản lý ngân sách 500 triệu VNĐ</li>
                <li>• Tích hợp với lưới điện quốc gia</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Battery className="w-6 h-6 mr-2 text-yellow-400" />
                Tiêu chí đánh giá
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• <span className="text-orange-400">Sản lượng năng lượng (30%)</span> - Điện năng</li>
                <li>• <span className="text-green-400">Môi trường (25%)</span> - Giảm khí thải</li>
                <li>• <span className="text-blue-400">Kinh tế (20%)</span> - Khả năng sinh lời</li>
                <li>• <span className="text-purple-400">Hiệu quả (25%)</span> - Công nghệ và tích hợp</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('waste-selection')}
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Bắt đầu thiết kế
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'waste-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-yellow-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn nguồn chất thải (tối đa 4)</h2>
            <p className="text-gray-300">Ngân sách: {budget} triệu VNĐ</p>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {WASTE_SOURCES.map((waste) => {
              const isSelected = selectedWasteSources.some(w => w.id === waste.id);
              const canSelect = selectedWasteSources.length < 4;
              
              return (
                <div
                  key={waste.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-orange-500 bg-orange-500/20'
                      : !canSelect && !isSelected
                      ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                      : 'border-white/20 hover:border-orange-400/50'
                  }`}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedWasteSources(prev => prev.filter(w => w.id !== waste.id));
                    } else if (canSelect) {
                      setSelectedWasteSources(prev => [...prev, waste]);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {waste.type === 'municipal' && <Factory className="w-6 h-6 text-gray-400" />}
                      {waste.type === 'agricultural' && <Leaf className="w-6 h-6 text-green-400" />}
                      {waste.type === 'industrial' && <TrendingUp className="w-6 h-6 text-red-400" />}
                      {waste.type === 'forestry' && <Leaf className="w-6 h-6 text-emerald-400" />}
                      {waste.type === 'food' && <Factory className="w-6 h-6 text-yellow-400" />}
                      {waste.type === 'mixed' && <Battery className="w-6 h-6 text-purple-400" />}
                    </div>
                    <div className="text-right">
                      <span className="text-orange-400 font-bold text-sm">{waste.energy_content} kWh/tấn</span>
                      <div className="text-xs text-gray-400">{waste.availability} tấn/ngày</div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{waste.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{waste.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-400">Độ khó xử lý:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div 
                          className="bg-red-500 h-1 rounded-full" 
                          style={{width: `${waste.processing_difficulty}%`}}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Độ ẩm:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div 
                          className="bg-blue-500 h-1 rounded-full" 
                          style={{width: `${waste.moisture_content}%`}}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Lợi ích MT:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div 
                          className="bg-green-500 h-1 rounded-full" 
                          style={{width: `${waste.environmental_benefit}%`}}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Chi phí:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div 
                          className="bg-yellow-500 h-1 rounded-full" 
                          style={{width: `${waste.cost_per_ton * 20}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <span className={`text-xs px-2 py-1 rounded ${
                      waste.type === 'municipal' ? 'bg-gray-500/20 text-gray-400' :
                      waste.type === 'agricultural' ? 'bg-green-500/20 text-green-400' :
                      waste.type === 'industrial' ? 'bg-red-500/20 text-red-400' :
                      waste.type === 'forestry' ? 'bg-emerald-500/20 text-emerald-400' :
                      waste.type === 'food' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {waste.type}
                    </span>
                  </div>
                  
                  {isSelected && (
                    <div className="mt-4 text-center">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">Đã chọn</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('technology-selection')}
              disabled={selectedWasteSources.length === 0}
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
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
      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-yellow-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn công nghệ chuyển đổi (1 công nghệ)</h2>
            <div className="flex justify-center items-center gap-4 text-gray-300">
              <span>Nguồn chất thải: {selectedWasteSources.length}</span>
              <span>Đã chọn: {selectedTechnology ? 1 : 0}/1</span>
            </div>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {CONVERSION_TECHNOLOGIES.map((tech) => {
              const isSelected = selectedTechnology?.id === tech.id;
              const hasCompatibleWaste = tech.compatible_waste.some(wasteId =>
                selectedWasteSources.some(w => w.id === wasteId)
              );
              const canSelect = hasCompatibleWaste;
              
              return (
                <div
                  key={tech.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-red-500 bg-red-500/20'
                      : !canSelect
                      ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                      : 'border-white/20 hover:border-red-400/50'
                  }`}
                  onClick={() => {
                    if (canSelect) {
                      setSelectedTechnology(isSelected ? null : tech);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {tech.method === 'incineration' && <Flame className="w-6 h-6 text-red-400" />}
                      {tech.method === 'gasification' && <Zap className="w-6 h-6 text-blue-400" />}
                      {tech.method === 'pyrolysis' && <Factory className="w-6 h-6 text-purple-400" />}
                      {tech.method === 'anaerobic' && <Leaf className="w-6 h-6 text-green-400" />}
                      {tech.method === 'biofuel' && <Battery className="w-6 h-6 text-yellow-400" />}
                      {tech.method === 'hybrid' && <TrendingUp className="w-6 h-6 text-orange-400" />}
                    </div>
                    <div className="text-right">
                      <span className="text-red-400 font-bold text-sm">{tech.investment_cost}M VNĐ</span>
                      <div className="text-xs text-gray-400">{tech.capacity} tấn/ngày</div>
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
                      <span className="text-gray-400">Năng lượng ra:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div 
                          className="bg-orange-500 h-1 rounded-full" 
                          style={{width: `${tech.energy_output * 4}%`}}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Phát thải:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div 
                          className="bg-red-500 h-1 rounded-full" 
                          style={{width: `${tech.emissions_level}%`}}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Vận hành:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div 
                          className="bg-yellow-500 h-1 rounded-full" 
                          style={{width: `${tech.operating_cost * 20}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {!hasCompatibleWaste && (
                    <div className="mt-3 p-2 bg-red-500/20 rounded text-xs">
                      <div className="text-red-400">Không tương thích với chất thải đã chọn</div>
                    </div>
                  )}

                  <div className="mt-4 text-center">
                    <span className={`text-xs px-2 py-1 rounded ${
                      tech.method === 'incineration' ? 'bg-red-500/20 text-red-400' :
                      tech.method === 'gasification' ? 'bg-blue-500/20 text-blue-400' :
                      tech.method === 'pyrolysis' ? 'bg-purple-500/20 text-purple-400' :
                      tech.method === 'anaerobic' ? 'bg-green-500/20 text-green-400' :
                      tech.method === 'biofuel' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-orange-500/20 text-orange-400'
                    }`}>
                      {tech.method}
                    </span>
                  </div>
                  
                  {isSelected && (
                    <div className="mt-4 text-center">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">Đã chọn</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('optimization-selection')}
              disabled={!selectedTechnology}
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Tiếp tục tối ưu hóa
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'optimization-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-yellow-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn tính năng tối ưu (tối đa 5)</h2>
            <div className="flex justify-center items-center gap-4 text-gray-300">
              <span>Chi phí hiện tại: {calculateTotalCost()} triệu VNĐ</span>
              <span>Đã chọn: {selectedFeatures.length}/5</span>
            </div>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {OPTIMIZATION_FEATURES.map((feature) => {
              const isSelected = selectedFeatures.some(f => f.id === feature.id);
              const hasRequiredTech = feature.required_tech.length === 0 || 
                (selectedTechnology && feature.required_tech.includes(selectedTechnology.id));
              const currentCostWithoutFeature = (selectedTechnology?.investment_cost || 0) +
                selectedFeatures.filter(f => f.id !== feature.id).reduce((sum, f) => sum + f.cost, 0);
              const canSelect = selectedFeatures.length < 5 && 
                hasRequiredTech && 
                (currentCostWithoutFeature + feature.cost) <= budget;
              
              return (
                <div
                  key={feature.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-yellow-500 bg-yellow-500/20'
                      : !canSelect && !isSelected
                      ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                      : 'border-white/20 hover:border-yellow-400/50'
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
                      {feature.category === 'efficiency' && <TrendingUp className="w-6 h-6 text-green-400" />}
                      {feature.category === 'emission' && <Leaf className="w-6 h-6 text-emerald-400" />}
                      {feature.category === 'automation' && <Factory className="w-6 h-6 text-blue-400" />}
                      {feature.category === 'storage' && <Battery className="w-6 h-6 text-purple-400" />}
                      {feature.category === 'grid' && <Zap className="w-6 h-6 text-yellow-400" />}
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
                      <span className="text-gray-400">Giảm phát thải:</span>
                      <div className="bg-gray-700 rounded-full h-1 w-12">
                        <div 
                          className="bg-emerald-500 h-1 rounded-full" 
                          style={{width: `${feature.emission_reduction * 1.5}%`}}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Giảm chi phí:</span>
                      <div className="bg-gray-700 rounded-full h-1 w-12">
                        <div 
                          className="bg-green-500 h-1 rounded-full" 
                          style={{width: `${feature.cost_reduction * 3}%`}}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Ổn định lưới:</span>
                      <div className="bg-gray-700 rounded-full h-1 w-12">
                        <div 
                          className="bg-blue-500 h-1 rounded-full" 
                          style={{width: `${feature.grid_stability * 2.5}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {!hasRequiredTech && selectedTechnology && (
                    <div className="mt-3 p-2 bg-red-500/20 rounded text-xs">
                      <div className="text-red-400">Không tương thích với công nghệ đã chọn</div>
                    </div>
                  )}

                  <div className="mt-4 text-center">
                    <span className={`text-xs px-2 py-1 rounded ${
                      feature.category === 'efficiency' ? 'bg-green-500/20 text-green-400' :
                      feature.category === 'emission' ? 'bg-emerald-500/20 text-emerald-400' :
                      feature.category === 'automation' ? 'bg-blue-500/20 text-blue-400' :
                      feature.category === 'storage' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {feature.category}
                    </span>
                  </div>
                  
                  {isSelected && (
                    <div className="mt-4 text-center">
                      <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">Đã chọn</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="bg-white/10 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Tóm tắt Nhà máy Waste-to-Energy</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="text-lg font-semibold text-orange-400 mb-2">Chất thải ({selectedWasteSources.length})</h4>
                {selectedWasteSources.map(waste => (
                  <p key={waste.id} className="text-gray-300 text-sm">{waste.name}</p>
                ))}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-red-400 mb-2">Công nghệ</h4>
                {selectedTechnology && (
                  <p className="text-gray-300 text-sm">{selectedTechnology.name}</p>
                )}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-yellow-400 mb-2">Tối ưu ({selectedFeatures.length})</h4>
                {selectedFeatures.slice(0, 3).map(feature => (
                  <p key={feature.id} className="text-gray-300 text-sm">{feature.name}</p>
                ))}
                {selectedFeatures.length > 3 && <p className="text-gray-400 text-xs">+{selectedFeatures.length - 3} khác</p>}
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
              disabled={!canAfford || selectedWasteSources.length === 0 || !selectedTechnology}
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
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
      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-yellow-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-orange-500/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Đang vận hành nhà máy...</h2>
            <p className="text-gray-300">Chuyển đổi chất thải thành năng lượng sạch</p>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <div className="flex justify-between text-white mb-2">
                <span>Tiến độ vận hành</span>
                <span>{Math.round(operationProgress)}%</span>
              </div>
              <div className="bg-gray-700 rounded-full h-6">
                <div 
                  className="bg-gradient-to-r from-orange-500 to-red-500 h-6 rounded-full transition-all duration-300" 
                  style={{width: `${operationProgress}%`}}
                ></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-orange-400">Sản lượng năng lượng</span>
                  <span className="text-white font-bold">{energyOutput}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-orange-500 h-3 rounded-full transition-all duration-300" 
                    style={{width: `${energyOutput}%`}}
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
                  <span className="text-blue-400">Khả năng sinh lời</span>
                  <span className="text-white font-bold">{economicViability}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-blue-500 h-3 rounded-full transition-all duration-300" 
                    style={{width: `${economicViability}%`}}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center items-center space-x-4 text-gray-300">
              <Flame className="w-6 h-6 text-orange-400 animate-pulse" />
              <span>Đang chuyển đổi {selectedWasteSources.length} loại chất thải...</span>
              <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
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
      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-yellow-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-orange-500/20">
          <div className="text-center mb-8">
            <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">Nhà máy Waste-to-Energy hoàn thành!</h2>
            <p className="text-2xl text-gray-300 mb-2">{selectedTechnology?.name}</p>
            <div className="text-6xl font-bold text-white mb-4">{plantScore} điểm</div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Hiệu suất Nhà máy</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-orange-400">Sản lượng năng lượng:</span>
                  <span className="text-white font-bold">{plantResults.energy}/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-400">Điểm môi trường:</span>
                  <span className="text-white font-bold">{plantResults.environmental}/100</span>
                </div>
                <div className="flex justify-between border-t border-white/20 pt-2">
                  <span className="text-blue-400">Khả năng sinh lời:</span>
                  <span className="text-white font-bold">{plantResults.economic}/100</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Đánh giá tổng thể</h3>
              <div className="space-y-2 text-gray-300">
                {plantScore >= 90 && <p>🏆 Nhà máy Waste-to-Energy xuất sắc! Giải pháp năng lượng bền vững hoàn hảo.</p>}
                {plantScore >= 80 && plantScore < 90 && <p>🌟 Nhà máy chất lượng cao! Đóng góp tích cực cho môi trường và năng lượng.</p>}
                {plantScore >= 70 && plantScore < 80 && <p>✅ Nhà máy tốt! Cần cải thiện một số công nghệ và quy trình.</p>}
                {plantScore >= 60 && plantScore < 70 && <p>⚠️ Nhà máy cơ bản! Hãy đầu tư thêm công nghệ tối ưu hóa.</p>}
                {plantScore < 60 && <p>❌ Cần cải thiện đáng kể để đạt hiệu quả kinh tế và môi trường.</p>}
                
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-sm">
                    <strong>Chi phí đầu tư:</strong> {calculateTotalCost()} triệu VNĐ
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Lưu ý:</strong> Nhà máy Waste-to-Energy thành công cần cân bằng giữa năng lượng, môi trường và kinh tế.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-x-4">
            <button
              onClick={handleRestart}
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Thiết kế nhà máy mới
            </button>
            <button
              onClick={() => onComplete(true, plantScore)}
              className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
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

export default WasteToEnergyPuzzleGame;
