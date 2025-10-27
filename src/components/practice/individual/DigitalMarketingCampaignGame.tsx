'use client';

import React, { useState, useEffect } from 'react';
import { Trophy, Target, Clock, Megaphone, BarChart3, Users } from 'lucide-react';

interface DigitalMarketingCampaignGameProps {
  onComplete: (score: number) => void;
}

interface MarketingDecision {
  id: string;
  title: string;
  description: string;
  options: {
    id: string;
    text: string;
    impact: {
      reach: number;
      engagement: number;
      conversion: number;
      budget: number;
    };
  }[];
}

const MARKETING_DECISIONS: MarketingDecision[] = [
  {
    id: 'platform',
    title: 'Chọn nền tảng chính',
    description: 'Bạn muốn tập trung vào nền tảng nào để tiếp cận khách hàng?',
    options: [
      {
        id: 'facebook',
        text: 'Facebook - Đa dạng độ tuổi, targeting tốt',
        impact: { reach: 85, engagement: 70, conversion: 75, budget: -40 },
      },
      {
        id: 'tiktok',
        text: 'TikTok - Gen Z, viral content',
        impact: { reach: 95, engagement: 90, conversion: 60, budget: -30 },
      },
      {
        id: 'google',
        text: 'Google Ads - Intent cao, conversion tốt',
        impact: { reach: 70, engagement: 60, conversion: 95, budget: -50 },
      },
      {
        id: 'youtube',
        text: 'YouTube - Video content, brand awareness',
        impact: { reach: 80, engagement: 85, conversion: 65, budget: -45 },
      },
    ],
  },
  {
    id: 'content',
    title: 'Chiến lược nội dung',
    description: 'Loại nội dung nào sẽ thu hút khách hàng mục tiêu nhất?',
    options: [
      {
        id: 'ugc',
        text: 'User-Generated Content - Tăng độ tin cậy',
        impact: { reach: 70, engagement: 95, conversion: 80, budget: -20 },
      },
      {
        id: 'influencer',
        text: 'Influencer Marketing - Uy tín và tầm ảnh hưởng',
        impact: { reach: 90, engagement: 85, conversion: 75, budget: -60 },
      },
      {
        id: 'video',
        text: 'Video Ads - Hấp dẫn và dễ nhớ',
        impact: { reach: 85, engagement: 90, conversion: 70, budget: -50 },
      },
      {
        id: 'interactive',
        text: 'Interactive Content - Tham gia tích cực',
        impact: { reach: 75, engagement: 100, conversion: 85, budget: -40 },
      },
    ],
  },
  {
    id: 'targeting',
    title: 'Targeting khách hàng',
    description: 'Cách nào hiệu quả nhất để tiếp cận đúng đối tượng?',
    options: [
      {
        id: 'lookalike',
        text: 'Lookalike Audience - Mở rộng từ khách hàng hiện tại',
        impact: { reach: 80, engagement: 85, conversion: 90, budget: -35 },
      },
      {
        id: 'interest',
        text: 'Interest Targeting - Dựa vào sở thích',
        impact: { reach: 90, engagement: 75, conversion: 70, budget: -30 },
      },
      {
        id: 'behavioral',
        text: 'Behavioral Targeting - Dựa vào hành vi',
        impact: { reach: 75, engagement: 80, conversion: 95, budget: -40 },
      },
      {
        id: 'retargeting',
        text: 'Retargeting - Tái tiếp cận khách đã quan tâm',
        impact: { reach: 60, engagement: 90, conversion: 100, budget: -25 },
      },
    ],
  },
  {
    id: 'optimization',
    title: 'Tối ưu hóa chiến dịch',
    description: 'Làm thế nào để cải thiện hiệu suất trong quá trình chạy?',
    options: [
      {
        id: 'ab-test',
        text: 'A/B Testing - Thử nghiệm nhiều phiên bản',
        impact: { reach: 70, engagement: 80, conversion: 90, budget: -20 },
      },
      {
        id: 'dayparting',
        text: 'Dayparting - Tối ưu thời gian chạy quảng cáo',
        impact: { reach: 85, engagement: 75, conversion: 80, budget: -15 },
      },
      {
        id: 'dynamic-ads',
        text: 'Dynamic Ads - Cá nhân hóa quảng cáo',
        impact: { reach: 75, engagement: 90, conversion: 95, budget: -35 },
      },
      {
        id: 'automation',
        text: 'Smart Bidding - Tự động tối ưu giá thầu',
        impact: { reach: 80, engagement: 70, conversion: 85, budget: -30 },
      },
    ],
  },
  {
    id: 'measurement',
    title: 'Đo lường kết quả',
    description: 'Phương pháp nào giúp đánh giá ROI chính xác nhất?',
    options: [
      {
        id: 'attribution',
        text: 'Multi-touch Attribution - Theo dõi toàn bộ customer journey',
        impact: { reach: 60, engagement: 70, conversion: 95, budget: -25 },
      },
      {
        id: 'cohort',
        text: 'Cohort Analysis - Phân tích nhóm khách hàng theo thời gian',
        impact: { reach: 65, engagement: 80, conversion: 90, budget: -20 },
      },
      {
        id: 'ltv',
        text: 'LTV Tracking - Theo dõi giá trị trọn đời khách hàng',
        impact: { reach: 70, engagement: 75, conversion: 100, budget: -30 },
      },
      {
        id: 'realtime',
        text: 'Real-time Analytics - Điều chỉnh tức thì',
        impact: { reach: 80, engagement: 85, conversion: 85, budget: -35 },
      },
    ],
  },
];

const PLATFORMS = [
  { id: 'facebook', name: 'Facebook', icon: '📘', color: 'text-blue-400' },
  { id: 'google', name: 'Google', icon: '🔍', color: 'text-red-400' },
  { id: 'tiktok', name: 'TikTok', icon: '🎵', color: 'text-pink-400' },
  { id: 'youtube', name: 'YouTube', icon: '📺', color: 'text-red-500' },
  { id: 'instagram', name: 'Instagram', icon: '📸', color: 'text-purple-400' },
];

const DigitalMarketingCampaignGame: React.FC<DigitalMarketingCampaignGameProps> = ({ onComplete }) => {
  const [gamePhase, setGamePhase] = useState<'briefing' | 'playing' | 'results'>('briefing');
  const [currentDecision, setCurrentDecision] = useState(0);
  const [budget] = useState(100);
  const [remainingBudget, setRemainingBudget] = useState(100);
  const [campaignMetrics, setCampaignMetrics] = useState({
    reach: 0,
    engagement: 0,
    conversion: 0,
  });
  const [decisions, setDecisions] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(240); // 4 minutes

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
    setTimeLeft(240);
  };

  const makeDecision = (optionId: string) => {
    const decision = MARKETING_DECISIONS[currentDecision];
    const option = decision.options.find((o) => o.id === optionId);

    if (option && remainingBudget + option.impact.budget >= 0) {
      setDecisions([...decisions, optionId]);
      setRemainingBudget((prev) => prev + option.impact.budget);
      setCampaignMetrics((prev) => ({
        reach: Math.min(100, Math.max(0, prev.reach + option.impact.reach)),
        engagement: Math.min(100, Math.max(0, prev.engagement + option.impact.engagement)),
        conversion: Math.min(100, Math.max(0, prev.conversion + option.impact.conversion)),
      }));

      if (currentDecision < MARKETING_DECISIONS.length - 1) {
        setCurrentDecision(currentDecision + 1);
      } else {
        setTimeout(() => setGamePhase('results'), 1000);
      }
    }
  };

  const calculateScore = () => {
    const reachScore = campaignMetrics.reach * 0.3;
    const engagementScore = campaignMetrics.engagement * 0.35;
    const conversionScore = campaignMetrics.conversion * 0.35;
    const budgetBonus = (remainingBudget / budget) * 10;
    return Math.round(reachScore + engagementScore + conversionScore + budgetBonus);
  };

  const calculateROI = () => {
    const invested = budget - remainingBudget;
    const revenue = (campaignMetrics.conversion / 100) * invested * 3;
    return invested > 0 ? ((revenue - invested) / invested) * 100 : 0;
  };

  const finishGame = () => {
    const finalScore = calculateScore();
    onComplete(finalScore);
  };

  if (gamePhase === 'briefing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <div className="text-center mb-8">
              <Megaphone className="w-16 h-16 mx-auto mb-4 text-purple-400" />
              <h1 className="text-4xl font-bold text-white mb-4">📱 Chiến Dịch Digital Marketing</h1>
              <p className="text-xl text-gray-300 mb-6">
                Tạo và quản lý chiến dịch marketing số hiệu quả để tối đa hóa ROI!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-500/10 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-purple-400" />
                  Mục Tiêu
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Tối đa hóa Reach (tiếp cận) và Engagement (tương tác)</li>
                  <li>• Đạt tỷ lệ Conversion (chuyển đổi) cao nhất</li>
                  <li>• Quản lý ngân sách hiệu quả và ROI tích cực</li>
                  <li>• Đưa ra quyết định dựa trên data và insights</li>
                </ul>
              </div>

              <div className="bg-blue-500/10 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-blue-400" />
                  Metrics Quan Trọng
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">🎯 Reach</span>
                    <span className="text-blue-400">Số người tiếp cận</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">💬 Engagement</span>
                    <span className="text-green-400">Tương tác</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">🎯 Conversion</span>
                    <span className="text-yellow-400">Chuyển đổi</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">💰 Budget</span>
                    <span className="text-purple-400">100 triệu VNĐ</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-500/10 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-green-400" />
                Các Nền Tảng Chính
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {PLATFORMS.map((platform) => (
                  <div key={platform.id} className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-2">{platform.icon}</div>
                    <div className={`text-sm ${platform.color}`}>{platform.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-orange-500/10 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-4">Quy Trình Chiến Dịch:</h3>
              <div className="grid md:grid-cols-5 gap-4 text-sm text-gray-300">
                <div className="text-center">
                  <div className="font-semibold text-purple-400 mb-2">1. Platform</div>
                  <p>Chọn nền tảng phù hợp</p>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-blue-400 mb-2">2. Content</div>
                  <p>Xây dựng strategy nội dung</p>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-green-400 mb-2">3. Targeting</div>
                  <p>Nhắm mục tiêu chính xác</p>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-yellow-400 mb-2">4. Optimize</div>
                  <p>Tối ưu hiệu suất</p>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-red-400 mb-2">5. Measure</div>
                  <p>Đo lường kết quả</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={startGame}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg"
              >
                Khởi Tạo Chiến Dịch! 🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'playing') {
    const decision = MARKETING_DECISIONS[currentDecision];

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 mb-6 border border-purple-500/20">
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
                  <span>{remainingBudget} triệu</span>
                </div>
              </div>
              <div className="text-sm text-gray-400">
                Bước {currentDecision + 1}/{MARKETING_DECISIONS.length}
              </div>
            </div>

            {/* Campaign Metrics */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-blue-500/10 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-blue-400">{campaignMetrics.reach}%</div>
                <div className="text-xs text-gray-400">Reach</div>
              </div>
              <div className="bg-green-500/10 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-green-400">{campaignMetrics.engagement}%</div>
                <div className="text-xs text-gray-400">Engagement</div>
              </div>
              <div className="bg-yellow-500/10 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-yellow-400">{campaignMetrics.conversion}%</div>
                <div className="text-xs text-gray-400">Conversion</div>
              </div>
            </div>
          </div>

          {/* Decision */}
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{decision.title}</h2>
              <p className="text-gray-300 text-lg">{decision.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {decision.options.map((option) => {
                const canAfford = remainingBudget + option.impact.budget >= 0;
                return (
                  <button
                    key={option.id}
                    onClick={() => makeDecision(option.id)}
                    disabled={!canAfford}
                    className={`p-6 rounded-xl text-left transition-all duration-200 ${
                      canAfford
                        ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/50'
                        : 'bg-gray-600/20 border border-gray-600/30 cursor-not-allowed opacity-50'
                    }`}
                  >
                    <div className="font-semibold text-white mb-3">{option.text}</div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-blue-400">Reach:</span>
                        <span className="text-white">
                          {option.impact.reach > 0 ? '+' : ''}
                          {option.impact.reach}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-green-400">Engagement:</span>
                        <span className="text-white">
                          {option.impact.engagement > 0 ? '+' : ''}
                          {option.impact.engagement}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-yellow-400">Conversion:</span>
                        <span className="text-white">
                          {option.impact.conversion > 0 ? '+' : ''}
                          {option.impact.conversion}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-400">Chi phí:</span>
                        <span className="text-white">{option.impact.budget} triệu</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Results phase
  const score = calculateScore();
  const roi = calculateROI();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
          <div className="text-center mb-8">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <h2 className="text-3xl font-bold text-white mb-4">Kết Quả Chiến Dịch!</h2>
            <div className="text-4xl font-bold text-yellow-400 mb-2">{score}/100 điểm</div>
            <p className="text-gray-300">
              {score >= 80
                ? 'Xuất sắc! Chiến dịch của bạn rất hiệu quả!'
                : score >= 60
                  ? 'Tốt! ROI tích cực và metrics ổn định.'
                  : score >= 40
                    ? 'Khá ổn! Cần tối ưu thêm targeting và content.'
                    : 'Cần cải thiện! Hãy phân tích lại strategy và budget allocation.'}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-500/10 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">{campaignMetrics.reach}%</div>
              <div className="text-sm text-gray-300">Reach</div>
            </div>
            <div className="bg-green-500/10 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">{campaignMetrics.engagement}%</div>
              <div className="text-sm text-gray-300">Engagement</div>
            </div>
            <div className="bg-yellow-500/10 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-2">{campaignMetrics.conversion}%</div>
              <div className="text-sm text-gray-300">Conversion</div>
            </div>
            <div className="bg-purple-500/10 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">{roi.toFixed(0)}%</div>
              <div className="text-sm text-gray-300">ROI</div>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-white mb-4">Phân Tích Chi Tiết:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-semibold mb-3">Hiệu Suất Metrics:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Reach Performance:</span>
                    <span
                      className={
                        campaignMetrics.reach >= 70
                          ? 'text-green-400'
                          : campaignMetrics.reach >= 40
                            ? 'text-yellow-400'
                            : 'text-red-400'
                      }
                    >
                      {campaignMetrics.reach >= 70 ? 'Xuất sắc' : campaignMetrics.reach >= 40 ? 'Tốt' : 'Cần cải thiện'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Engagement Quality:</span>
                    <span
                      className={
                        campaignMetrics.engagement >= 70
                          ? 'text-green-400'
                          : campaignMetrics.engagement >= 40
                            ? 'text-yellow-400'
                            : 'text-red-400'
                      }
                    >
                      {campaignMetrics.engagement >= 70
                        ? 'Cao'
                        : campaignMetrics.engagement >= 40
                          ? 'Trung bình'
                          : 'Thấp'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Conversion Rate:</span>
                    <span
                      className={
                        campaignMetrics.conversion >= 70
                          ? 'text-green-400'
                          : campaignMetrics.conversion >= 40
                            ? 'text-yellow-400'
                            : 'text-red-400'
                      }
                    >
                      {campaignMetrics.conversion >= 70
                        ? 'Rất tốt'
                        : campaignMetrics.conversion >= 40
                          ? 'Ổn'
                          : 'Cần tối ưu'}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">Quản Lý Ngân Sách:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Đã sử dụng:</span>
                    <span className="text-red-400">{budget - remainingBudget} triệu VNĐ</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Còn lại:</span>
                    <span className="text-green-400">{remainingBudget} triệu VNĐ</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Efficiency:</span>
                    <span className={roi > 100 ? 'text-green-400' : roi > 0 ? 'text-yellow-400' : 'text-red-400'}>
                      {roi > 100 ? 'Xuất sắc' : roi > 0 ? 'Tích cực' : 'Cần cải thiện'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={finishGame}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg"
            >
              Hoàn Thành 🎉
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingCampaignGame;
