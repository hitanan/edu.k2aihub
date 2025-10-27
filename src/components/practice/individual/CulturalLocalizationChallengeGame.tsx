'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Globe, Users, CheckCircle, Clock, Star, Target, Heart, Flag } from 'lucide-react';

interface GameProps {
  onComplete: (_: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface CulturalElement {
  id: string;
  name: string;
  category: string;
  description: string;
  importance: number;
  complexity: number;
  cost: number;
  impact: number;
}

interface LocalizationStrategy {
  id: string;
  name: string;
  description: string;
  approach: string;
  culturalAccuracy: number;
  userEngagement: number;
  implementationTime: number;
  cost: number;
}

interface Market {
  id: string;
  name: string;
  population: number;
  economicLevel: string;
  culturalDistance: number;
  digitalAdoption: number;
  regulations: string[];
}

const CULTURAL_ELEMENTS: CulturalElement[] = [
  {
    id: 'language-nuances',
    name: 'Sắc thái ngôn ngữ địa phương',
    category: 'Language',
    description: 'Thành ngữ, tục ngữ và cách diễn đạt đặc trưng',
    importance: 9,
    complexity: 8,
    cost: 25,
    impact: 90,
  },
  {
    id: 'color-symbolism',
    name: 'Biểu tượng màu sắc',
    category: 'Visual',
    description: 'Ý nghĩa văn hóa của màu sắc trong thiết kế',
    importance: 7,
    complexity: 5,
    cost: 15,
    impact: 70,
  },
  {
    id: 'festival-customs',
    name: 'Phong tục lễ hội',
    category: 'Cultural Events',
    description: 'Tích hợp các dịp lễ và phong tục quan trọng',
    importance: 8,
    complexity: 7,
    cost: 20,
    impact: 85,
  },
  {
    id: 'social-hierarchy',
    name: 'Cấu trúc xã hội',
    category: 'Social Norms',
    description: 'Hiểu biết về quan hệ xã hội và phép tắc',
    importance: 8,
    complexity: 9,
    cost: 30,
    impact: 80,
  },
  {
    id: 'religious-beliefs',
    name: 'Tín ngưỡng tôn giáo',
    category: 'Religion',
    description: 'Tôn trọng và tích hợp các yếu tố tôn giáo',
    importance: 9,
    complexity: 9,
    cost: 35,
    impact: 95,
  },
  {
    id: 'food-culture',
    name: 'Văn hóa ẩm thực',
    category: 'Lifestyle',
    description: 'Thói quen ăn uống và ý nghĩa thực phẩm',
    importance: 6,
    complexity: 4,
    cost: 12,
    impact: 60,
  },
  {
    id: 'business-etiquette',
    name: 'Nghi thức kinh doanh',
    category: 'Business',
    description: 'Cách thức giao tiếp và làm việc chuyên nghiệp',
    importance: 8,
    complexity: 6,
    cost: 18,
    impact: 75,
  },
  {
    id: 'family-values',
    name: 'Giá trị gia đình',
    category: 'Social Values',
    description: 'Vai trò gia đình và mối quan hệ thế hệ',
    importance: 9,
    complexity: 7,
    cost: 22,
    impact: 88,
  },
];

const LOCALIZATION_STRATEGIES: LocalizationStrategy[] = [
  {
    id: 'deep-cultural-research',
    name: 'Nghiên cứu văn hóa sâu',
    description: 'Phân tích chi tiết từng khía cạnh văn hóa',
    approach: 'Research-First',
    culturalAccuracy: 9,
    userEngagement: 7,
    implementationTime: 8,
    cost: 40,
  },
  {
    id: 'local-community-partnership',
    name: 'Hợp tác cộng đồng địa phương',
    description: 'Làm việc trực tiếp với người dân bản địa',
    approach: 'Community-Based',
    culturalAccuracy: 10,
    userEngagement: 9,
    implementationTime: 6,
    cost: 50,
  },
  {
    id: 'ai-cultural-analysis',
    name: 'Phân tích văn hóa bằng AI',
    description: 'Sử dụng AI để hiểu pattern văn hóa',
    approach: 'Technology-Driven',
    culturalAccuracy: 6,
    userEngagement: 8,
    implementationTime: 9,
    cost: 30,
  },
  {
    id: 'iterative-user-testing',
    name: 'Test người dùng lặp đi lặp lại',
    description: 'Cải tiến dựa trên phản hồi liên tục',
    approach: 'User-Centric',
    culturalAccuracy: 8,
    userEngagement: 10,
    implementationTime: 7,
    cost: 35,
  },
];

const MARKETS: Market[] = [
  {
    id: 'vietnam',
    name: 'Việt Nam',
    population: 97000000,
    economicLevel: 'Developing',
    culturalDistance: 0,
    digitalAdoption: 7,
    regulations: ['Luật An ninh mạng', 'Quy định nội dung số'],
  },
  {
    id: 'thailand',
    name: 'Thái Lan',
    population: 70000000,
    economicLevel: 'Upper-Middle',
    culturalDistance: 3,
    digitalAdoption: 8,
    regulations: ['Digital Economy Act', 'Personal Data Protection'],
  },
  {
    id: 'indonesia',
    name: 'Indonesia',
    population: 273000000,
    economicLevel: 'Lower-Middle',
    culturalDistance: 5,
    digitalAdoption: 6,
    regulations: ['Halal Certification', 'Religious Content Rules'],
  },
  {
    id: 'japan',
    name: 'Nhật Bản',
    population: 125000000,
    economicLevel: 'Developed',
    culturalDistance: 7,
    digitalAdoption: 9,
    regulations: ['Privacy Protection', 'Quality Standards'],
  },
  {
    id: 'india',
    name: 'Ấn Độ',
    population: 1380000000,
    economicLevel: 'Lower-Middle',
    culturalDistance: 8,
    digitalAdoption: 5,
    regulations: ['Digital India Act', 'Cultural Sensitivity Laws'],
  },
];

const CulturalLocalizationChallengeGame: React.FC<GameProps> = ({ onComplete, timeLeft, onRestart }) => {
  const [gamePhase, setGamePhase] = useState<
    'briefing' | 'market' | 'cultural' | 'strategy' | 'implementation' | 'results'
  >('briefing');
  const [budget] = useState(180); // 180 million VND budget
  const [selectedMarket, setSelectedMarket] = useState<Market | null>(null);
  const [selectedElements, setSelectedElements] = useState<CulturalElement[]>([]);
  const [selectedStrategy, setSelectedStrategy] = useState<LocalizationStrategy | null>(null);
  const [spentBudget, setSpentBudget] = useState(0);
  const [culturalAccuracy, setCulturalAccuracy] = useState(0);
  const [userSatisfaction, setUserSatisfaction] = useState(0);
  const [marketPenetration, setMarketPenetration] = useState(0);
  const [localizationScore, setLocalizationScore] = useState(0);

  const calculateResults = useCallback(() => {
    if (!selectedMarket || !selectedStrategy || selectedElements.length === 0) {
      setLocalizationScore(0);
      setGamePhase('results');
      onComplete(false, 0);
      return;
    }

    // Calculate cultural accuracy based on elements selected and strategy
    const elementAccuracy =
      selectedElements.reduce((sum, element) => sum + element.importance, 0) / Math.max(selectedElements.length, 1);
    const strategyAccuracy = selectedStrategy.culturalAccuracy * 10;
    const accuracy = Math.min(100, elementAccuracy * 0.6 + strategyAccuracy * 0.4);

    // Calculate user satisfaction based on cultural distance and engagement
    const culturalAdjustment = Math.max(0, 100 - selectedMarket.culturalDistance * 10);
    const engagementScore = selectedStrategy.userEngagement * 10;
    const satisfaction = Math.min(100, culturalAdjustment * 0.4 + engagementScore * 0.6);

    // Calculate market penetration based on digital adoption and localization quality
    const digitalScore = selectedMarket.digitalAdoption * 10;
    const localizationQuality = (accuracy + satisfaction) / 2;
    const penetration = Math.min(100, digitalScore * 0.3 + localizationQuality * 0.7);

    // Calculate overall score
    const budgetEfficiency = Math.min(100, ((budget - spentBudget) / budget) * 100);
    const overall = accuracy * 0.3 + satisfaction * 0.3 + penetration * 0.3 + budgetEfficiency * 0.1;

    setCulturalAccuracy(Math.round(accuracy));
    setUserSatisfaction(Math.round(satisfaction));
    setMarketPenetration(Math.round(penetration));
    setLocalizationScore(Math.round(overall));

    setGamePhase('results');
    onComplete(true, overall);
  }, [selectedMarket, selectedStrategy, selectedElements, onComplete, budget, spentBudget]);

  useEffect(() => {
    if (timeLeft <= 0 && gamePhase !== 'results') {
      calculateResults();
    }
  }, [timeLeft, gamePhase, calculateResults]);

  const handleMarketSelect = (market: Market) => {
    setSelectedMarket(market);
    setGamePhase('cultural');
  };

  const handleElementSelect = (element: CulturalElement) => {
    const newCost = spentBudget + element.cost;
    if (newCost <= budget && !selectedElements.find((e) => e.id === element.id) && selectedElements.length < 5) {
      setSelectedElements([...selectedElements, element]);
      setSpentBudget(newCost);
    }
  };

  const removeElement = (elementId: string) => {
    const element = selectedElements.find((e) => e.id === elementId);
    if (element) {
      setSelectedElements(selectedElements.filter((e) => e.id !== elementId));
      setSpentBudget(spentBudget - element.cost);
    }
  };

  const handleStrategySelect = (strategy: LocalizationStrategy) => {
    const newCost = spentBudget + strategy.cost;
    if (newCost <= budget) {
      setSelectedStrategy(strategy);
      setSpentBudget(newCost);
      setGamePhase('implementation');
    }
  };

  if (gamePhase === 'briefing') {
    return (
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8 rounded-lg text-white max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Globe className="w-16 h-16 mx-auto mb-4 text-indigo-400" />
          <h2 className="text-3xl font-bold mb-4">Cultural Localization Challenge</h2>
          <p className="text-xl text-indigo-200">Bản địa hóa sản phẩm cho thị trường đa văn hóa châu Á</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Target className="w-6 h-6 mr-2 text-green-400" />
              Mục tiêu bản địa hóa
            </h3>
            <ul className="space-y-2 text-indigo-100">
              <li>• Hiểu sâu văn hóa và tập quán địa phương</li>
              <li>• Tạo trải nghiệm phù hợp với người dùng</li>
              <li>• Tôn trọng giá trị và tín ngưỡng bản địa</li>
              <li>• Tối ưu hóa khả năng tiếp cận thị trường</li>
              <li>• Xây dựng thương hiệu địa phương mạnh</li>
            </ul>
          </div>

          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Heart className="w-6 h-6 mr-2 text-red-400" />
              Thách thức văn hóa
            </h3>
            <ul className="space-y-2 text-indigo-100">
              <li>• Sự khác biệt về ngôn ngữ và biểu đạt</li>
              <li>• Tôn giáo và tín ngưỡng đa dạng</li>
              <li>• Phong tục và truyền thống phức tạp</li>
              <li>• Chuẩn mực xã hội và đạo đức</li>
              <li>• Quy định pháp lý và kiểm duyệt</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/10 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Flag className="w-6 h-6 mr-2 text-yellow-400" />
            Chiến lược thành công
          </h3>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="bg-blue-600/50 p-4 rounded">
              <div className="text-2xl font-bold text-blue-200">1</div>
              <div className="text-sm text-blue-300">Chọn thị trường</div>
            </div>
            <div className="bg-purple-600/50 p-4 rounded">
              <div className="text-2xl font-bold text-purple-200">2</div>
              <div className="text-sm text-purple-300">Yếu tố văn hóa</div>
            </div>
            <div className="bg-green-600/50 p-4 rounded">
              <div className="text-2xl font-bold text-green-200">3</div>
              <div className="text-sm text-green-300">Chiến lược triển khai</div>
            </div>
            <div className="bg-pink-600/50 p-4 rounded">
              <div className="text-2xl font-bold text-pink-200">4</div>
              <div className="text-sm text-pink-300">Đánh giá kết quả</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 p-4 rounded-lg mb-6">
            <div className="text-2xl font-bold text-green-300">180 triệu VNĐ</div>
            <div className="text-sm text-green-200">Ngân sách bản địa hóa</div>
          </div>
          <button
            onClick={() => setGamePhase('market')}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-8 py-3 rounded-lg font-bold text-lg transition-all duration-200"
          >
            Bắt đầu bản địa hóa
          </button>
        </div>
      </div>
    );
  }

  if (gamePhase === 'market') {
    return (
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-6 rounded-lg text-white max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Chọn thị trường mục tiêu</h2>
          <div className="flex items-center space-x-4">
            <div className="bg-green-600/50 px-4 py-2 rounded">
              <span className="text-sm">
                Ngân sách: {budget - spentBudget}/{budget} triệu VNĐ
              </span>
            </div>
            <div className="bg-blue-600/50 px-4 py-2 rounded flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span className="text-sm">
                {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {MARKETS.map((market) => (
            <div
              key={market.id}
              className="p-6 rounded-lg border border-indigo-400 bg-indigo-500/10 hover:bg-indigo-500/20 transition-all duration-200 cursor-pointer"
              onClick={() => handleMarketSelect(market)}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{market.name}</h3>
                <div className="bg-indigo-600 px-2 py-1 rounded text-xs">{market.economicLevel}</div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">Dân số:</span>
                  <span className="font-bold">{(market.population / 1000000).toFixed(0)}M người</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">Khoảng cách văn hóa:</span>
                  <span className="font-bold">{market.culturalDistance}/10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">Áp dụng số:</span>
                  <span className="font-bold">{market.digitalAdoption}/10</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm text-gray-300 mb-2">Quy định pháp lý:</div>
                <div className="space-y-1">
                  {market.regulations.map((regulation, index) => (
                    <div key={index} className="text-xs bg-yellow-600/20 px-2 py-1 rounded">
                      {regulation}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-4 py-2 rounded font-bold transition-all duration-200">
                  Chọn thị trường
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (gamePhase === 'cultural') {
    return (
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-6 rounded-lg text-white max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Chọn yếu tố văn hóa (Tối đa 5)</h2>
          <div className="flex items-center space-x-4">
            <div className="bg-green-600/50 px-4 py-2 rounded">
              <span className="text-sm">
                Ngân sách: {budget - spentBudget}/{budget} triệu VNĐ
              </span>
            </div>
            <div className="bg-blue-600/50 px-4 py-2 rounded flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span className="text-sm">
                {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {selectedMarket && (
          <div className="bg-white/10 p-4 rounded-lg mb-6">
            <h3 className="font-bold mb-2">Thị trường đã chọn:</h3>
            <div className="flex items-center justify-between">
              <span>
                {selectedMarket.name} - {(selectedMarket.population / 1000000).toFixed(0)}M dân
              </span>
              <span className="text-indigo-300">Khoảng cách văn hóa: {selectedMarket.culturalDistance}/10</span>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Yếu tố văn hóa có sẵn:</h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {CULTURAL_ELEMENTS.map((element) => {
                const isSelected = selectedElements.find((e) => e.id === element.id);
                const canAfford = spentBudget + element.cost <= budget;
                const canSelect = selectedElements.length < 5;

                return (
                  <div
                    key={element.id}
                    className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'border-green-400 bg-green-500/20'
                        : canAfford && canSelect
                          ? 'border-purple-400 bg-purple-500/10 hover:bg-purple-500/20'
                          : 'border-gray-500 bg-gray-500/10 opacity-50'
                    }`}
                    onClick={() => {
                      if (isSelected) {
                        removeElement(element.id);
                      } else if (canAfford && canSelect) {
                        handleElementSelect(element);
                      }
                    }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{element.name}</h4>
                      <span className="bg-purple-600 px-2 py-1 rounded text-xs">{element.category}</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-3">{element.description}</p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="text-center">
                        <div className="text-yellow-300">Quan trọng</div>
                        <div className="font-bold">{element.importance}/10</div>
                      </div>
                      <div className="text-center">
                        <div className="text-red-300">Phức tạp</div>
                        <div className="font-bold">{element.complexity}/10</div>
                      </div>
                      <div className="text-center">
                        <div className="text-green-300">Chi phí</div>
                        <div className="font-bold">{element.cost}M</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Yếu tố đã chọn ({selectedElements.length}/5):</h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {selectedElements.map((element) => (
                <div key={element.id} className="bg-green-500/20 p-3 rounded border border-green-400">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{element.name}</h4>
                    <button onClick={() => removeElement(element.id)} className="text-red-400 hover:text-red-300">
                      ✕
                    </button>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Impact: {element.impact}%</span>
                    <span className="text-green-300">{element.cost}M VNĐ</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/20 pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Tổng chi phí:</span>
                <span className="text-xl font-bold text-green-300">
                  {spentBudget}/{budget} triệu VNĐ
                </span>
              </div>

              <button
                onClick={() => setGamePhase('strategy')}
                disabled={selectedElements.length === 0}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 px-6 py-3 rounded-lg font-bold transition-all duration-200"
              >
                Chọn chiến lược triển khai
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'strategy') {
    return (
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-6 rounded-lg text-white max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Chọn chiến lược bản địa hóa</h2>
          <div className="flex items-center space-x-4">
            <div className="bg-green-600/50 px-4 py-2 rounded">
              <span className="text-sm">
                Ngân sách: {budget - spentBudget}/{budget} triệu VNĐ
              </span>
            </div>
            <div className="bg-blue-600/50 px-4 py-2 rounded flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span className="text-sm">
                {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Thị trường: {selectedMarket?.name}</h3>
            <div className="text-sm text-gray-300">Khoảng cách văn hóa: {selectedMarket?.culturalDistance}/10</div>
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Yếu tố văn hóa: {selectedElements.length}</h3>
            <div className="text-sm text-gray-300">Chi phí hiện tại: {spentBudget} triệu VNĐ</div>
          </div>
        </div>

        <div className="space-y-6">
          {LOCALIZATION_STRATEGIES.map((strategy) => {
            const canAfford = strategy.cost <= budget - spentBudget;

            return (
              <div
                key={strategy.id}
                className={`p-6 rounded-lg border transition-all duration-200 cursor-pointer ${
                  canAfford
                    ? 'border-pink-400 bg-pink-500/10 hover:bg-pink-500/20'
                    : 'border-gray-500 bg-gray-500/10 opacity-50'
                }`}
                onClick={() => canAfford && handleStrategySelect(strategy)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{strategy.name}</h3>
                    <p className="text-gray-300 mb-2">{strategy.description}</p>
                    <span className="bg-pink-600 px-3 py-1 rounded text-sm">{strategy.approach}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-pink-300">{strategy.cost}M VNĐ</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white/10 p-3 rounded">
                    <div className="text-green-300 text-sm">Độ chính xác</div>
                    <div className="font-bold text-lg">{strategy.culturalAccuracy}/10</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded">
                    <div className="text-blue-300 text-sm">Tương tác</div>
                    <div className="font-bold text-lg">{strategy.userEngagement}/10</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded">
                    <div className="text-yellow-300 text-sm">Thời gian</div>
                    <div className="font-bold text-lg">{strategy.implementationTime}/10</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (gamePhase === 'implementation') {
    return (
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8 rounded-lg text-white max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Users className="w-16 h-16 mx-auto mb-4 text-indigo-400 animate-pulse" />
          <h2 className="text-3xl font-bold mb-4">Đang triển khai bản địa hóa...</h2>
          <p className="text-xl text-indigo-200">Tích hợp văn hóa và tối ưu trải nghiệm người dùng</p>
        </div>

        <div className="space-y-6 mb-8">
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-4">Tiến độ triển khai:</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                <span>Nghiên cứu và phân tích thị trường</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                <span>Tích hợp yếu tố văn hóa cốt lõi</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                <span>Thiết kế giao diện bản địa</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-yellow-400" />
                <span>Test và tối ưu với người dùng địa phương</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-yellow-400" />
                <span>Triển khai và theo dõi phản hồi</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 p-6 rounded-lg">
              <h4 className="font-bold mb-3">Thị trường:</h4>
              <div className="text-sm">{selectedMarket?.name}</div>
            </div>

            <div className="bg-white/10 p-6 rounded-lg">
              <h4 className="font-bold mb-3">Chiến lược:</h4>
              <div className="text-sm">{selectedStrategy?.name}</div>
            </div>
          </div>

          <div className="bg-white/10 p-6 rounded-lg">
            <h4 className="font-bold mb-3">Yếu tố văn hóa tích hợp:</h4>
            <div className="grid md:grid-cols-2 gap-2">
              {selectedElements.map((element) => (
                <div key={element.id} className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  <span>{element.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={calculateResults}
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-8 py-3 rounded-lg font-bold text-lg transition-all duration-200"
          >
            Đánh giá kết quả bản địa hóa
          </button>
        </div>
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

    const overallPerformance = getPerformanceLevel(localizationScore);

    return (
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8 rounded-lg text-white max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{overallPerformance.icon}</div>
          <h2 className="text-3xl font-bold mb-4">Kết quả bản địa hóa</h2>
          <p className={`text-2xl font-bold ${overallPerformance.color}`}>
            {overallPerformance.level} - {localizationScore}/100 điểm
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Chỉ số thành công:</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-red-400" />
                  Độ chính xác văn hóa
                </span>
                <span className="font-bold text-red-300">{culturalAccuracy}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-400" />
                  Hài lòng người dùng
                </span>
                <span className="font-bold text-blue-300">{userSatisfaction}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-green-400" />
                  Thâm nhập thị trường
                </span>
                <span className="font-bold text-green-300">{marketPenetration}%</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Thông tin dự án:</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Thị trường:</span>
                <span className="font-bold">{selectedMarket?.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Yếu tố văn hóa:</span>
                <span className="font-bold">{selectedElements.length}/8</span>
              </div>
              <div className="flex justify-between">
                <span>Chiến lược:</span>
                <span className="font-bold">{selectedStrategy?.approach}</span>
              </div>
              <div className="flex justify-between">
                <span>Ngân sách sử dụng:</span>
                <span className="font-bold">
                  {spentBudget}/{budget} triệu VNĐ
                </span>
              </div>
              <div className="flex justify-between">
                <span>Hiệu quả chi phí:</span>
                <span className="font-bold">{Math.round((localizationScore / spentBudget) * 10)}/10</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/10 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Star className="w-6 h-6 mr-2 text-yellow-400" />
            Đánh giá chuyên gia bản địa hóa
          </h3>
          <div className="text-gray-300 leading-relaxed">
            {localizationScore >= 90 && (
              <p>
                🎉 <strong>Xuất sắc!</strong> Dự án bản địa hóa của bạn đạt tiêu chuẩn quốc tế với sự hiểu biết sâu sắc
                về văn hóa địa phương, trải nghiệm người dùng tuyệt vời và chiến lược triển khai hiệu quả. Sản phẩm sẽ
                được cộng đồng đón nhận nồng nhiệt.
              </p>
            )}
            {localizationScore >= 80 && localizationScore < 90 && (
              <p>
                ⭐ <strong>Tốt!</strong> Bản địa hóa thành công với việc tích hợp tốt các yếu tố văn hóa quan trọng. Một
                số cải tiến nhỏ về trải nghiệm hoặc độ chính xác văn hóa sẽ giúp đạt kết quả tối ưu.
              </p>
            )}
            {localizationScore >= 70 && localizationScore < 80 && (
              <p>
                👍 <strong>Khá!</strong> Dự án có nền tảng tốt với các yếu tố văn hóa cơ bản được tích hợp. Cần đầu tư
                thêm vào nghiên cứu văn hóa sâu và tối ưu trải nghiệm người dùng.
              </p>
            )}
            {localizationScore >= 60 && localizationScore < 70 && (
              <p>
                📈 <strong>Trung bình.</strong> Bản địa hóa đáp ứng được nhu cầu cơ bản nhưng cần cải thiện đáng kể về
                độ chính xác văn hóa và chiến lược triển khai.
              </p>
            )}
            {localizationScore < 60 && (
              <p>
                🔧 <strong>Cần cải thiện.</strong> Dự án cần đầu tư nhiều hơn vào nghiên cứu văn hóa, tối ưu chiến lược
                và nâng cao chất lượng trải nghiệm người dùng địa phương.
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={onRestart}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-6 py-3 rounded-lg font-bold transition-all duration-200"
          >
            Bản địa hóa lại
          </button>
          <button
            onClick={() => onComplete(true, localizationScore)}
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

export default CulturalLocalizationChallengeGame;
