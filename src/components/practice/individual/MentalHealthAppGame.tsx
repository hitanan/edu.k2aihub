'use client';

import React, { useState, useEffect } from 'react';
import { Trophy, Heart, Clock, Brain, Users, Shield, Smartphone, Target } from 'lucide-react';

interface GameProps {
  onComplete: (_: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface Feature {
  id: string;
  name: string;
  category: 'therapy' | 'monitoring' | 'community' | 'education' | 'emergency';
  impact: number;
  development_cost: number;
  user_engagement: number;
  privacy_level: number;
  description: string;
}

interface TechStack {
  id: string;
  name: string;
  type: 'frontend' | 'backend' | 'ai' | 'security' | 'analytics';
  performance: number;
  security: number;
  cost: number;
  scalability: number;
  description: string;
}

interface TargetGroup {
  id: string;
  name: string;
  age_range: string;
  mental_health_needs: string[];
  tech_comfort: number;
  price_sensitivity: number;
  engagement_pattern: string;
  market_size: number;
  description: string;
}

const APP_FEATURES: Feature[] = [
  {
    id: 'mood-tracking',
    name: 'Theo dõi tâm trạng thông minh',
    category: 'monitoring',
    impact: 85,
    development_cost: 60,
    user_engagement: 90,
    privacy_level: 80,
    description: 'AI phân tích tâm trạng qua văn bản và giọng nói',
  },
  {
    id: 'ai-therapy',
    name: 'Trị liệu AI 24/7',
    category: 'therapy',
    impact: 95,
    development_cost: 120,
    user_engagement: 85,
    privacy_level: 90,
    description: 'Chatbot chuyên nghiệp hỗ trợ tâm lý mọi lúc',
  },
  {
    id: 'peer-support',
    name: 'Cộng đồng hỗ trợ đồng đẳng',
    category: 'community',
    impact: 80,
    development_cost: 80,
    user_engagement: 95,
    privacy_level: 70,
    description: 'Kết nối với những người có cùng trải nghiệm',
  },
  {
    id: 'crisis-intervention',
    name: 'Can thiệp khủng hoảng',
    category: 'emergency',
    impact: 100,
    development_cost: 100,
    user_engagement: 60,
    privacy_level: 95,
    description: 'Phát hiện và ứng phó tự động với khủng hoảng tâm lý',
  },
  {
    id: 'mindfulness-exercises',
    name: 'Bài tập chánh niệm & thiền',
    category: 'therapy',
    impact: 75,
    development_cost: 40,
    user_engagement: 80,
    privacy_level: 90,
    description: 'Thư viện meditation và breathing exercises',
  },
  {
    id: 'professional-connect',
    name: 'Kết nối chuyên gia tâm lý',
    category: 'therapy',
    impact: 90,
    development_cost: 90,
    user_engagement: 75,
    privacy_level: 85,
    description: 'Video call bảo mật với tâm lý học viên',
  },
  {
    id: 'stress-analytics',
    name: 'Phân tích stress đa chiều',
    category: 'monitoring',
    impact: 70,
    development_cost: 70,
    user_engagement: 70,
    privacy_level: 75,
    description: 'Kết hợp wearables và behavioral patterns',
  },
  {
    id: 'educational-content',
    name: 'Nội dung giáo dục sức khỏe tâm thần',
    category: 'education',
    impact: 65,
    development_cost: 30,
    user_engagement: 60,
    privacy_level: 95,
    description: 'Kiến thức về sức khỏe tâm thần và self-care',
  },
];

const TECH_STACKS: TechStack[] = [
  {
    id: 'react-native',
    name: 'React Native + Node.js',
    type: 'frontend',
    performance: 80,
    security: 75,
    cost: 60,
    scalability: 85,
    description: 'Cross-platform development với JavaScript ecosystem',
  },
  {
    id: 'flutter-firebase',
    name: 'Flutter + Firebase',
    type: 'frontend',
    performance: 85,
    security: 80,
    cost: 50,
    scalability: 80,
    description: 'Fast development với Google cloud backend',
  },
  {
    id: 'native-aws',
    name: 'Native iOS/Android + AWS',
    type: 'backend',
    performance: 95,
    security: 90,
    cost: 120,
    scalability: 95,
    description: 'Maximum performance với enterprise cloud',
  },
  {
    id: 'ai-nlp-stack',
    name: 'TensorFlow + NLP Models',
    type: 'ai',
    performance: 90,
    security: 70,
    cost: 100,
    scalability: 75,
    description: 'Advanced AI cho sentiment analysis và chatbot',
  },
  {
    id: 'blockchain-security',
    name: 'Blockchain Privacy Layer',
    type: 'security',
    performance: 60,
    security: 98,
    cost: 150,
    scalability: 60,
    description: 'Decentralized data storage cho ultimate privacy',
  },
  {
    id: 'analytics-ml',
    name: 'Real-time Analytics + ML',
    type: 'analytics',
    performance: 85,
    security: 75,
    cost: 80,
    scalability: 90,
    description: 'Predictive analytics cho intervention timing',
  },
];

const TARGET_GROUPS: TargetGroup[] = [
  {
    id: 'young-adults',
    name: 'Thanh niên (18-25 tuổi)',
    age_range: '18-25',
    mental_health_needs: ['anxiety', 'depression', 'stress', 'social anxiety'],
    tech_comfort: 95,
    price_sensitivity: 80,
    engagement_pattern: 'High frequency, short sessions',
    market_size: 85,
    description: 'Digital natives, stressed về tương lai và công việc',
  },
  {
    id: 'working-professionals',
    name: 'Người lao động (26-40 tuổi)',
    age_range: '26-40',
    mental_health_needs: ['burnout', 'work stress', 'anxiety', 'sleep issues'],
    tech_comfort: 80,
    price_sensitivity: 60,
    engagement_pattern: 'Medium frequency, focused sessions',
    market_size: 90,
    description: 'Có thu nhập ổn định, cần giải pháp hiệu quả nhanh',
  },
  {
    id: 'parents',
    name: 'Phụ huynh (30-50 tuổi)',
    age_range: '30-50',
    mental_health_needs: ['parental stress', 'anxiety', 'depression', 'relationship issues'],
    tech_comfort: 70,
    price_sensitivity: 70,
    engagement_pattern: 'Irregular, crisis-driven',
    market_size: 75,
    description: 'Cần hỗ trợ nuôi dạy con và cân bằng cuộc sống',
  },
  {
    id: 'seniors',
    name: 'Người cao tuổi (50+ tuổi)',
    age_range: '50+',
    mental_health_needs: ['loneliness', 'mild depression', 'health anxiety', 'grief'],
    tech_comfort: 40,
    price_sensitivity: 85,
    engagement_pattern: 'Low frequency, long sessions',
    market_size: 60,
    description: 'Cần giao diện đơn giản và hỗ trợ kỹ thuật',
  },
  {
    id: 'students',
    name: 'Học sinh - Sinh viên',
    age_range: '15-22',
    mental_health_needs: ['exam stress', 'social anxiety', 'identity issues', 'peer pressure'],
    tech_comfort: 98,
    price_sensitivity: 95,
    engagement_pattern: 'Very high frequency, micro-sessions',
    market_size: 70,
    description: 'Ngân sách hạn chế nhưng rất am hiểu công nghệ',
  },
];

const MentalHealthAppGame: React.FC<GameProps> = ({ onComplete, timeLeft, onRestart }) => {
  const [gamePhase, setGamePhase] = useState<
    'briefing' | 'target-selection' | 'feature-selection' | 'tech-selection' | 'development' | 'results'
  >('briefing');
  const [selectedTarget, setSelectedTarget] = useState<TargetGroup | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<Feature[]>([]);
  const [selectedTech, setSelectedTech] = useState<TechStack[]>([]);
  const [budget] = useState(400);
  const [developmentProgress, setDevelopmentProgress] = useState(0);
  const [, setIsDeveloping] = useState(false);

  // App metrics
  const [userEngagement, setUserEngagement] = useState(0);
  const [privacyScore, setPrivacyScore] = useState(0);
  const [marketFit, setMarketFit] = useState(0);

  const totalCost =
    selectedFeatures.reduce((sum, f) => sum + f.development_cost, 0) + selectedTech.reduce((sum, t) => sum + t.cost, 0);

  const canAfford = totalCost <= budget;

  const calculateAppScore = () => {
    if (!selectedTarget || selectedFeatures.length === 0) return { impact: 0, engagement: 0, privacy: 0, fit: 0 };

    // Impact score based on feature effectiveness
    const impactScore = selectedFeatures.reduce((sum, f) => sum + f.impact, 0) / selectedFeatures.length;

    // Engagement score combining feature engagement and tech comfort
    const featureEngagement = selectedFeatures.reduce((sum, f) => sum + f.user_engagement, 0) / selectedFeatures.length;
    const techEngagement = selectedTech.reduce((sum, t) => sum + t.performance, 0) / Math.max(selectedTech.length, 1);
    const targetComfort = selectedTarget.tech_comfort;
    const engagementScore = featureEngagement * 0.4 + techEngagement * 0.3 + targetComfort * 0.3;

    // Privacy score
    const featurePrivacy = selectedFeatures.reduce((sum, f) => sum + f.privacy_level, 0) / selectedFeatures.length;
    const techSecurity = selectedTech.reduce((sum, t) => sum + t.security, 0) / Math.max(selectedTech.length, 1);
    const privacyScore = featurePrivacy * 0.6 + techSecurity * 0.4;

    // Market fit score
    const needsAlignment = selectedFeatures.filter((f) => {
      if (f.category === 'therapy' && selectedTarget.mental_health_needs.includes('anxiety')) return true;
      if (f.category === 'monitoring' && selectedTarget.mental_health_needs.includes('stress')) return true;
      if (f.category === 'community' && selectedTarget.mental_health_needs.includes('social anxiety')) return true;
      if (f.category === 'emergency' && selectedTarget.mental_health_needs.includes('depression')) return true;
      return f.category === 'education';
    }).length;

    const marketFitScore = (needsAlignment / selectedFeatures.length) * 100 * (selectedTarget.market_size / 100);

    return {
      impact: Math.round(impactScore),
      engagement: Math.round(engagementScore),
      privacy: Math.round(privacyScore),
      fit: Math.round(marketFitScore),
    };
  };

  const startDevelopment = () => {
    if (!selectedTarget || selectedFeatures.length === 0 || selectedTech.length === 0 || !canAfford) {
      onComplete(false, 0);
      return;
    }

    setGamePhase('development');
    setIsDeveloping(true);

    const appMetrics = calculateAppScore();
    setUserEngagement(appMetrics.engagement);
    setPrivacyScore(appMetrics.privacy);
    setMarketFit(appMetrics.fit);

    const totalComplexity =
      selectedFeatures.reduce((sum, f) => sum + f.development_cost, 0) +
      selectedTech.reduce((sum, t) => sum + t.cost, 0);

    const interval = setInterval(() => {
      setDevelopmentProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDeveloping(false);
          setGamePhase('results');
          return 100;
        }
        return prev + Math.max(1, (100 / totalComplexity) * 3);
      });
    }, 150);
  };

  const getOverallScore = () => {
    const appMetrics = calculateAppScore();
    const costEfficiency = Math.round(((budget - totalCost) / budget) * 100);
    const scalability = selectedTech.reduce((sum, t) => sum + t.scalability, 0) / Math.max(selectedTech.length, 1);

    return Math.round(
      appMetrics.impact * 0.25 +
        appMetrics.engagement * 0.25 +
        appMetrics.privacy * 0.2 +
        appMetrics.fit * 0.2 +
        costEfficiency * 0.05 +
        scalability * 0.05,
    );
  };

  useEffect(() => {
    if (timeLeft <= 0 && gamePhase !== 'results') {
      onComplete(false, 0);
    }
  }, [timeLeft, gamePhase, onComplete]);

  if (gamePhase === 'briefing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-900 via-slate-900 to-purple-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-pink-500/20">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Heart className="w-16 h-16 text-pink-400" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Ứng dụng Sức khỏe Tâm thần</h1>
            <p className="text-xl text-gray-300 mb-6">
              Phát triển app hỗ trợ sức khỏe tâm thần cho cộng đồng Việt Nam!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Target className="w-6 h-6 mr-2 text-pink-400" />
                Mục tiêu dự án
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Chọn nhóm người dùng mục tiêu</li>
                <li>• Thiết kế tính năng phù hợp</li>
                <li>• Lựa chọn công nghệ thích hợp</li>
                <li>• Quản lý ngân sách 400 triệu VNĐ</li>
                <li>• Đảm bảo quyền riêng tư và hiệu quả</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Brain className="w-6 h-6 mr-2 text-purple-400" />
                Tiêu chí đánh giá
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>
                  • <span className="text-pink-400">Tác động (25%)</span> - Hiệu quả hỗ trợ tâm lý
                </li>
                <li>
                  • <span className="text-blue-400">Tương tác (25%)</span> - Engagement của người dùng
                </li>
                <li>
                  • <span className="text-green-400">Bảo mật (20%)</span> - Quyền riêng tư dữ liệu
                </li>
                <li>
                  • <span className="text-yellow-400">Phù hợp (20%)</span> - Market-product fit
                </li>
                <li>
                  • <span className="text-purple-400">Khác (10%)</span> - Chi phí & khả năng mở rộng
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('target-selection')}
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Bắt đầu phát triển
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'target-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-900 via-slate-900 to-purple-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn nhóm người dùng mục tiêu</h2>
            <p className="text-gray-300">Ngân sách: {budget} triệu VNĐ</p>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {TARGET_GROUPS.map((target) => {
              const isSelected = selectedTarget?.id === target.id;

              return (
                <div
                  key={target.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected ? 'border-pink-500 bg-pink-500/20' : 'border-white/20 hover:border-pink-400/50'
                  }`}
                  onClick={() => setSelectedTarget(target)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Users className="w-8 h-8 text-pink-400" />
                    <span className="text-blue-400 font-bold">Thị trường: {target.market_size}%</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{target.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{target.description}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Độ tuổi:</span>
                      <span className="text-white">{target.age_range}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Thông thạo công nghệ:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${target.tech_comfort}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Nhạy cảm giá:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div
                          className="bg-red-500 h-2 rounded-full"
                          style={{ width: `${target.price_sensitivity}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <span className="text-gray-400 text-xs">Nhu cầu chính:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {target.mental_health_needs.slice(0, 2).map((need) => (
                          <span key={need} className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-xs">
                            {need}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="mt-4 text-center">
                      <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm">Đã chọn</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('feature-selection')}
              disabled={!selectedTarget}
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Tiếp tục chọn tính năng
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'feature-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-900 via-slate-900 to-purple-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn tính năng ứng dụng (tối đa 4)</h2>
            <div className="flex justify-center items-center gap-4 text-gray-300">
              <span>Nhóm mục tiêu: {selectedTarget?.name}</span>
              <span>Đã chọn: {selectedFeatures.length}/4</span>
            </div>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {APP_FEATURES.map((feature) => {
              const isSelected = selectedFeatures.some((f) => f.id === feature.id);
              const canSelect =
                selectedFeatures.length < 4 &&
                totalCost + feature.development_cost - (isSelected ? feature.development_cost : 0) <= budget;

              return (
                <div
                  key={feature.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-green-500 bg-green-500/20'
                      : !canSelect && !isSelected
                        ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                        : 'border-white/20 hover:border-green-400/50'
                  }`}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedFeatures((prev) => prev.filter((f) => f.id !== feature.id));
                    } else if (canSelect) {
                      setSelectedFeatures((prev) => [...prev, feature]);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      {feature.category === 'therapy' && <Heart className="w-6 h-6 text-red-400" />}
                      {feature.category === 'monitoring' && <Brain className="w-6 h-6 text-blue-400" />}
                      {feature.category === 'community' && <Users className="w-6 h-6 text-green-400" />}
                      {feature.category === 'emergency' && <Shield className="w-6 h-6 text-red-600" />}
                      {feature.category === 'education' && <Smartphone className="w-6 h-6 text-purple-400" />}
                    </div>
                    <span className="text-yellow-400 font-bold text-sm">{feature.development_cost}M</span>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-2">{feature.name}</h3>
                  <p className="text-gray-300 text-xs mb-3">{feature.description}</p>

                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Tác động:</span>
                      <div className="bg-gray-700 rounded-full h-1 w-12">
                        <div className="bg-pink-500 h-1 rounded-full" style={{ width: `${feature.impact}%` }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Engagement:</span>
                      <div className="bg-gray-700 rounded-full h-1 w-12">
                        <div
                          className="bg-blue-500 h-1 rounded-full"
                          style={{ width: `${feature.user_engagement}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Bảo mật:</span>
                      <div className="bg-gray-700 rounded-full h-1 w-12">
                        <div
                          className="bg-green-500 h-1 rounded-full"
                          style={{ width: `${feature.privacy_level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="mt-3 text-center">
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">Đã chọn</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('tech-selection')}
              disabled={selectedFeatures.length === 0}
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Tiếp tục chọn công nghệ
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'tech-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-900 via-slate-900 to-purple-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn công nghệ phát triển (tối đa 3)</h2>
            <div className="flex justify-center items-center gap-4 text-gray-300">
              <span>
                Ngân sách còn lại: {budget - selectedFeatures.reduce((sum, f) => sum + f.development_cost, 0)} triệu VNĐ
              </span>
              <span>Đã chọn: {selectedTech.length}/3</span>
            </div>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {TECH_STACKS.map((tech) => {
              const isSelected = selectedTech.some((t) => t.id === tech.id);
              const currentCostWithoutTech =
                selectedFeatures.reduce((sum, f) => sum + f.development_cost, 0) +
                selectedTech.filter((t) => t.id !== tech.id).reduce((sum, t) => sum + t.cost, 0);
              const canSelect = selectedTech.length < 3 && currentCostWithoutTech + tech.cost <= budget;

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
                      setSelectedTech((prev) => prev.filter((t) => t.id !== tech.id));
                    } else if (canSelect) {
                      setSelectedTech((prev) => [...prev, tech]);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Smartphone className="w-8 h-8 text-blue-400" />
                    <span className="text-yellow-400 font-bold">{tech.cost}M VNĐ</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{tech.description}</p>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-400">Performance:</span>
                      <div className="bg-gray-700 rounded-full h-2 mt-1">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: `${tech.performance}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Security:</span>
                      <div className="bg-gray-700 rounded-full h-2 mt-1">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: `${tech.security}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Scalability:</span>
                      <div className="bg-gray-700 rounded-full h-2 mt-1">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${tech.scalability}%` }}></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <span
                        className={`text-sm px-2 py-1 rounded ${
                          tech.type === 'frontend'
                            ? 'bg-blue-500/20 text-blue-400'
                            : tech.type === 'backend'
                              ? 'bg-green-500/20 text-green-400'
                              : tech.type === 'ai'
                                ? 'bg-purple-500/20 text-purple-400'
                                : tech.type === 'security'
                                  ? 'bg-red-500/20 text-red-400'
                                  : 'bg-yellow-500/20 text-yellow-400'
                        }`}
                      >
                        {tech.type}
                      </span>
                    </div>
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

          <div className="bg-white/10 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Tóm tắt ứng dụng</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="text-lg font-semibold text-pink-400 mb-2">Người dùng</h4>
                <p className="text-gray-300 text-sm">{selectedTarget?.name}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-2">Tính năng ({selectedFeatures.length})</h4>
                {selectedFeatures.map((feature) => (
                  <p key={feature.id} className="text-gray-300 text-sm">
                    {feature.name}
                  </p>
                ))}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Công nghệ ({selectedTech.length})</h4>
                {selectedTech.map((tech) => (
                  <p key={tech.id} className="text-gray-300 text-sm">
                    {tech.name}
                  </p>
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
              disabled={!canAfford || selectedTech.length === 0}
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
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
      <div className="min-h-screen bg-gradient-to-br from-pink-900 via-slate-900 to-purple-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-pink-500/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Đang phát triển ứng dụng...</h2>
            <p className="text-gray-300">Coding, testing và deployment</p>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <div className="flex justify-between text-white mb-2">
                <span>Tiến độ phát triển</span>
                <span>{Math.round(developmentProgress)}%</span>
              </div>
              <div className="bg-gray-700 rounded-full h-6">
                <div
                  className="bg-gradient-to-r from-pink-500 to-purple-500 h-6 rounded-full transition-all duration-300"
                  style={{ width: `${developmentProgress}%` }}
                ></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-400">User Engagement</span>
                  <span className="text-white font-bold">{userEngagement}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${userEngagement}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-green-400">Privacy Score</span>
                  <span className="text-white font-bold">{privacyScore}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${privacyScore}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-yellow-400">Market Fit</span>
                  <span className="text-white font-bold">{marketFit}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-yellow-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${marketFit}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center items-center space-x-4 text-gray-300">
              <Smartphone className="w-6 h-6 text-pink-400 animate-pulse" />
              <span>Đang build và test ứng dụng...</span>
              <Smartphone className="w-6 h-6 text-pink-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'results') {
    const appMetrics = calculateAppScore();
    const appScore = getOverallScore();

    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-900 via-slate-900 to-purple-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-pink-500/20">
          <div className="text-center mb-8">
            <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">Ứng dụng hoàn thành!</h2>
            <p className="text-2xl text-gray-300 mb-2">Mental Health App cho {selectedTarget?.name}</p>
            <div className="text-6xl font-bold text-white mb-4">{appScore} điểm</div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Chỉ số ứng dụng</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-pink-400">Tác động tâm lý:</span>
                  <span className="text-white font-bold">{appMetrics.impact}/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-400">User engagement:</span>
                  <span className="text-white font-bold">{appMetrics.engagement}/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-400">Bảo mật dữ liệu:</span>
                  <span className="text-white font-bold">{appMetrics.privacy}/100</span>
                </div>
                <div className="flex justify-between border-t border-white/20 pt-2">
                  <span className="text-yellow-400">Market fit:</span>
                  <span className="text-white font-bold">{appMetrics.fit}/100</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Đánh giá</h3>
              <div className="space-y-2 text-gray-300">
                {appScore >= 90 && <p>🏆 Ứng dụng xuất sắc! Có thể thay đổi cách chăm sóc sức khỏe tâm thần.</p>}
                {appScore >= 80 && appScore < 90 && <p>🌟 Ứng dụng rất tốt! Người dùng sẽ cảm thấy hữu ích.</p>}
                {appScore >= 70 && appScore < 80 && <p>✅ Ứng dụng khá ổn! Cần cải thiện một số tính năng.</p>}
                {appScore >= 60 && appScore < 70 && <p>⚠️ Ứng dụng cơ bản! Cần phát triển thêm để cạnh tranh.</p>}
                {appScore < 60 && <p>❌ Ứng dụng cần cải thiện nhiều để đáp ứng nhu cầu người dùng.</p>}

                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-sm">
                    <strong>Lưu ý:</strong> Ứng dụng sức khỏe tâm thần cần cân bằng giữa hiệu quả trị liệu, quyền riêng
                    tư và trải nghiệm người dùng.
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
              Phát triển lại
            </button>
            <button
              onClick={() => onComplete(true, appScore)}
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
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

export default MentalHealthAppGame;
