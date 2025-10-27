'use client';

import React, { useState, useEffect } from 'react';
import { Trophy, Lightbulb, Clock, ChefHat, Beaker, Package } from 'lucide-react';

interface FoodTechInnovatorGameProps {
  onComplete: (success: boolean, score: number) => void;
}

interface FoodInnovation {
  id: string;
  name: string;
  category: 'preservation' | 'nutrition' | 'sustainability' | 'safety';
  impact: number;
  cost: number;
  description: string;
  requirements: string[];
}

const FOOD_INNOVATIONS: FoodInnovation[] = [
  {
    id: 'smart-packaging',
    name: 'Bao bì thông minh',
    category: 'preservation',
    impact: 85,
    cost: 60,
    description: 'Bao bì có khả năng theo dõi độ tươi và nhiệt độ thực phẩm',
    requirements: ['IoT sensors', 'Biodegradable materials', 'Mobile app integration'],
  },
  {
    id: 'plant-protein',
    name: 'Protein thực vật',
    category: 'nutrition',
    impact: 90,
    cost: 40,
    description: 'Phát triển protein thay thế từ thực vật cho thịt truyền thống',
    requirements: ['Plant extraction tech', 'Flavor enhancement', 'Texture optimization'],
  },
  {
    id: 'vertical-farming',
    name: 'Nông nghiệp thẳng đứng',
    category: 'sustainability',
    impact: 95,
    cost: 80,
    description: 'Hệ thống trồng trọt trong không gian đô thị tiết kiệm tài nguyên',
    requirements: ['LED lighting', 'Hydroponic systems', 'Climate control'],
  },
  {
    id: 'blockchain-tracing',
    name: 'Truy xuất nguồn gốc Blockchain',
    category: 'safety',
    impact: 75,
    cost: 50,
    description: 'Theo dõi toàn bộ chuỗi cung ứng thực phẩm bằng blockchain',
    requirements: ['Blockchain infrastructure', 'QR code system', 'Database integration'],
  },
  {
    id: 'food-3d-printing',
    name: 'In 3D thực phẩm',
    category: 'nutrition',
    impact: 70,
    cost: 90,
    description: 'Công nghệ in 3D để tạo ra thực phẩm cá nhân hóa',
    requirements: ['3D printing tech', 'Food-grade materials', 'Nutritional algorithms'],
  },
  {
    id: 'ai-quality-control',
    name: 'Kiểm soát chất lượng AI',
    category: 'safety',
    impact: 88,
    cost: 70,
    description: 'Hệ thống AI phát hiện tự động khuyết tật và ô nhiễm thực phẩm',
    requirements: ['Computer vision', 'Machine learning models', 'Automated sorting'],
  },
];

const CATEGORIES = [
  { id: 'preservation', name: 'Bảo quản', icon: '📦', color: 'text-blue-400' },
  { id: 'nutrition', name: 'Dinh dưỡng', icon: '🥗', color: 'text-green-400' },
  { id: 'sustainability', name: 'Bền vững', icon: '🌱', color: 'text-emerald-400' },
  { id: 'safety', name: 'An toàn', icon: '🛡️', color: 'text-red-400' },
];

const FoodTechInnovatorGame: React.FC<FoodTechInnovatorGameProps> = ({ onComplete }) => {
  const [gamePhase, setGamePhase] = useState<'briefing' | 'playing' | 'results'>('briefing');
  const [budget] = useState(200);
  const [remainingBudget, setRemainingBudget] = useState(200);
  const [selectedInnovations, setSelectedInnovations] = useState<FoodInnovation[]>([]);
  const [currentInnovation, setCurrentInnovation] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [totalImpact, setTotalImpact] = useState(0);

  useEffect(() => {
    if (gamePhase === 'playing' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && gamePhase === 'playing') {
      setGamePhase('results');
    }
  }, [timeLeft, gamePhase]);

  const startGame = () => {
    setGamePhase('playing');
    setTimeLeft(300);
  };

  const selectInnovation = (innovation: FoodInnovation) => {
    if (remainingBudget >= innovation.cost && !selectedInnovations.find((i) => i.id === innovation.id)) {
      const newSelected = [...selectedInnovations, innovation];
      setSelectedInnovations(newSelected);
      setRemainingBudget(remainingBudget - innovation.cost);
      setTotalImpact(newSelected.reduce((sum, i) => sum + i.impact, 0));

      if (currentInnovation < FOOD_INNOVATIONS.length - 1) {
        setCurrentInnovation(currentInnovation + 1);
      } else {
        setGamePhase('results');
      }
    }
  };

  const skipInnovation = () => {
    if (currentInnovation < FOOD_INNOVATIONS.length - 1) {
      setCurrentInnovation(currentInnovation + 1);
    } else {
      setGamePhase('results');
    }
  };

  const calculateScore = () => {
    const impactScore = Math.min(totalImpact / 3, 100);
    const budgetScore = ((budget - remainingBudget) / budget) * 50;
    const diversityScore = new Set(selectedInnovations.map((i) => i.category)).size * 12.5;
    return Math.round(impactScore + budgetScore + diversityScore);
  };

  const finishGame = () => {
    const finalScore = calculateScore();
    onComplete(true, finalScore);
  };

  if (gamePhase === 'briefing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20">
            <div className="text-center mb-8">
              <ChefHat className="w-16 h-16 mx-auto mb-4 text-orange-400" />
              <h1 className="text-4xl font-bold text-white mb-4">🍽️ Nhà Đổi Mới Công Nghệ Thực Phẩm</h1>
              <p className="text-xl text-gray-300 mb-6">
                Phát triển các công nghệ thực phẩm tiên tiến để giải quyết thách thức toàn cầu!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-orange-500/10 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2 text-orange-400" />
                  Mục Tiêu
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Phát triển portfolio công nghệ thực phẩm đa dạng</li>
                  <li>• Tối ưu hóa tác động và chi phí đầu tư</li>
                  <li>• Giải quyết các vấn đề bảo quản, dinh dưỡng, bền vững và an toàn</li>
                  <li>• Tạo ra giải pháp có thể thương mại hóa</li>
                </ul>
              </div>

              <div className="bg-green-500/10 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <Package className="w-5 h-5 mr-2 text-green-400" />
                  Lĩnh Vực Công Nghệ
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {CATEGORIES.map((category) => (
                    <div key={category.id} className="flex items-center text-gray-300">
                      <span className="mr-2">{category.icon}</span>
                      <span className={`text-sm ${category.color}`}>{category.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-blue-500/10 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <Beaker className="w-5 h-5 mr-2 text-blue-400" />
                Cách Practice
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
                <div>
                  <div className="font-semibold text-blue-400 mb-2">1. Phân Tích</div>
                  <p>Đánh giá các công nghệ về tác động, chi phí và yêu cầu kỹ thuật</p>
                </div>
                <div>
                  <div className="font-semibold text-green-400 mb-2">2. Đầu Tư</div>
                  <p>Chọn công nghệ phù hợp trong ngân sách 200 triệu VNĐ</p>
                </div>
                <div>
                  <div className="font-semibold text-purple-400 mb-2">3. Tối Ưu</div>
                  <p>Tạo portfolio đa dạng để tối đa hóa tác động thị trường</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={startGame}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg"
              >
                Bắt Đầu Đổi Mới! 🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'playing') {
    const innovation = FOOD_INNOVATIONS[currentInnovation];
    const canAfford = remainingBudget >= innovation.cost;
    const category = CATEGORIES.find((c) => c.id === innovation.category);

    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 mb-6 border border-orange-500/20">
            <div className="flex justify-between items-center text-white">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-400" />
                  <span>
                    {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">💰</span>
                  <span>{remainingBudget} triệu VNĐ</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-yellow-400" />
                  <span>Tác động: {totalImpact}</span>
                </div>
              </div>
              <div className="text-sm text-gray-400">
                {currentInnovation + 1}/{FOOD_INNOVATIONS.length}
              </div>
            </div>
          </div>

          {/* Current Innovation */}
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center mb-4">
                <span className="text-4xl mr-3">{category?.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold text-white">{innovation.name}</h2>
                  <p className={`text-sm ${category?.color}`}>{category?.name}</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-6">{innovation.description}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-500/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">{innovation.impact}%</div>
                <div className="text-sm text-gray-300">Tác Động Thị Trường</div>
              </div>
              <div className="bg-red-500/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-red-400 mb-2">{innovation.cost}</div>
                <div className="text-sm text-gray-300">Chi Phí (triệu VNĐ)</div>
              </div>
              <div className="bg-green-500/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">{innovation.requirements.length}</div>
                <div className="text-sm text-gray-300">Yêu Cầu Kỹ Thuật</div>
              </div>
            </div>

            <div className="bg-gray-500/10 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-4">Yêu Cầu Công Nghệ:</h3>
              <div className="grid md:grid-cols-3 gap-3">
                {innovation.requirements.map((req, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-3 text-center">
                    <span className="text-sm text-gray-300">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={() => selectInnovation(innovation)}
                disabled={!canAfford}
                className={`px-8 py-3 rounded-xl font-bold text-lg transition-all duration-200 ${
                  canAfford
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 shadow-lg'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
              >
                {canAfford ? `Đầu Tư (${innovation.cost} triệu)` : 'Không Đủ Ngân Sách'}
              </button>
              <button
                onClick={skipInnovation}
                className="px-8 py-3 rounded-xl font-bold text-lg bg-white/10 text-white hover:bg-white/20 transition-all duration-200"
              >
                Bỏ Qua
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Results phase
  const score = calculateScore();
  const categoryCoverage = new Set(selectedInnovations.map((i) => i.category)).size;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20">
          <div className="text-center mb-8">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <h2 className="text-3xl font-bold text-white mb-4">Kết Quả Đổi Mới!</h2>
            <div className="text-4xl font-bold text-yellow-400 mb-2">{score}/100 điểm</div>
            <p className="text-gray-300">
              {score >= 80
                ? 'Xuất sắc! Bạn là nhà đổi mới công nghệ thực phẩm tài ba!'
                : score >= 60
                  ? 'Tốt! Portfolio của bạn có tiềm năng thương mại hóa cao.'
                  : score >= 40
                    ? 'Khá ổn! Cần tối ưu hóa thêm về đa dạng và hiệu quả.'
                    : 'Cần cải thiện! Hãy cân nhắc kỹ hơn về tác động và chi phí.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-500/10 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">{totalImpact}</div>
              <div className="text-sm text-gray-300">Tổng Tác Động</div>
            </div>
            <div className="bg-green-500/10 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">{budget - remainingBudget}</div>
              <div className="text-sm text-gray-300">Đã Đầu Tư (triệu)</div>
            </div>
            <div className="bg-purple-500/10 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">{categoryCoverage}/4</div>
              <div className="text-sm text-gray-300">Lĩnh Vực Phủ Sóng</div>
            </div>
          </div>

          {selectedInnovations.length > 0 && (
            <div className="bg-white/5 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-4">Portfolio Công Nghệ Của Bạn:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {selectedInnovations.map((innovation) => {
                  const category = CATEGORIES.find((c) => c.id === innovation.category);
                  return (
                    <div key={innovation.id} className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <span className="text-xl mr-2">{category?.icon}</span>
                        <span className="font-semibold text-white">{innovation.name}</span>
                      </div>
                      <div className="text-sm text-gray-300">
                        Tác động: {innovation.impact}% | Chi phí: {innovation.cost} triệu
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="text-center">
            <button
              onClick={finishGame}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg"
            >
              Hoàn Thành 🎉
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodTechInnovatorGame;
