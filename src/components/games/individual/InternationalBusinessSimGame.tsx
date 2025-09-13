'use client';

import React, { useState, useEffect } from 'react';
import { Globe, TrendingUp, DollarSign, Clock, Target, RotateCcw, Building2, Users, BarChart3 } from 'lucide-react';

interface InternationalBusinessSimGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface Market {
  id: string;
  name: string;
  continent: string;
  size: number; // population in millions
  gdpPerCapita: number;
  marketPenetration: number; // 0-100
  culturalBarrier: number; // 0-100
  regulatoryComplexity: number; // 0-100
  competitionLevel: number; // 0-100
  growthRate: number; // annual %
  entryMode: 'export' | 'licensing' | 'franchise' | 'joint-venture' | 'subsidiary' | null;
  invested: number;
  revenue: number;
  profitMargin: number;
}

interface BusinessDecision {
  id: string;
  type: 'market-entry' | 'product-adaptation' | 'marketing' | 'operations' | 'partnership';
  title: string;
  description: string;
  options: Array<{
    id: string;
    text: string;
    cost: number;
    risk: number; // 0-100
    reward: number; // potential multiplier
    culturalFit: number; // 0-100
  }>;
  marketId: string;
}

const InternationalBusinessSimGame: React.FC<InternationalBusinessSimGameProps> = ({
  onComplete,
  timeLeft,
  onRestart,
}) => {
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<'overview' | 'market-analysis' | 'decision' | 'completed'>('overview');
  const [resources, setResources] = useState({
    capital: 1000000, // $1M starting capital
    experience: 0,
    reputation: 50,
    employees: 20,
  });
  const [currentDecision, setCurrentDecision] = useState<BusinessDecision | null>(null);
  const [quarter, setQuarter] = useState(1);
  const [year, setYear] = useState(2025);

  const [markets, setMarkets] = useState<Market[]>([
    {
      id: 'usa',
      name: 'Hoa Kỳ',
      continent: 'Bắc Mỹ',
      size: 331,
      gdpPerCapita: 70000,
      marketPenetration: 0,
      culturalBarrier: 30,
      regulatoryComplexity: 60,
      competitionLevel: 90,
      growthRate: 2.1,
      entryMode: null,
      invested: 0,
      revenue: 0,
      profitMargin: 15,
    },
    {
      id: 'germany',
      name: 'Đức',
      continent: 'Châu Âu',
      size: 83,
      gdpPerCapita: 46000,
      marketPenetration: 0,
      culturalBarrier: 45,
      regulatoryComplexity: 80,
      competitionLevel: 85,
      growthRate: 1.3,
      entryMode: null,
      invested: 0,
      revenue: 0,
      profitMargin: 12,
    },
    {
      id: 'japan',
      name: 'Nhật Bản',
      continent: 'Châu Á',
      size: 125,
      gdpPerCapita: 40000,
      marketPenetration: 0,
      culturalBarrier: 85,
      regulatoryComplexity: 70,
      competitionLevel: 95,
      growthRate: 0.7,
      entryMode: null,
      invested: 0,
      revenue: 0,
      profitMargin: 10,
    },
    {
      id: 'brazil',
      name: 'Brazil',
      continent: 'Nam Mỹ',
      size: 215,
      gdpPerCapita: 8500,
      marketPenetration: 0,
      culturalBarrier: 60,
      regulatoryComplexity: 75,
      competitionLevel: 60,
      growthRate: 2.8,
      entryMode: null,
      invested: 0,
      revenue: 0,
      profitMargin: 18,
    },
    {
      id: 'india',
      name: 'Ấn Độ',
      continent: 'Châu Á',
      size: 1380,
      gdpPerCapita: 2100,
      marketPenetration: 0,
      culturalBarrier: 70,
      regulatoryComplexity: 85,
      competitionLevel: 70,
      growthRate: 6.8,
      entryMode: null,
      invested: 0,
      revenue: 0,
      profitMargin: 25,
    },
    {
      id: 'south-korea',
      name: 'Hàn Quốc',
      continent: 'Châu Á',
      size: 51,
      gdpPerCapita: 31000,
      marketPenetration: 0,
      culturalBarrier: 75,
      regulatoryComplexity: 65,
      competitionLevel: 80,
      growthRate: 2.6,
      entryMode: null,
      invested: 0,
      revenue: 0,
      profitMargin: 14,
    },
  ]);

  const generateDecision = (marketId: string): BusinessDecision => {
    const market = markets.find((m) => m.id === marketId);
    if (!market) throw new Error('Market not found');

    const decisions = [
      {
        id: 'market-entry',
        type: 'market-entry' as const,
        title: `Cách thức vào thị trường ${market.name}`,
        description: `Chọn phương thức tốt nhất để thâm nhập thị trường ${market.name} với ${market.size}M dân số.`,
        options: [
          {
            id: 'export',
            text: 'Xuất khẩu trực tiếp',
            cost: 50000,
            risk: 20,
            reward: 1.2,
            culturalFit: 30,
          },
          {
            id: 'licensing',
            text: 'Cấp phép cho đối tác địa phương',
            cost: 100000,
            risk: 40,
            reward: 1.5,
            culturalFit: 70,
          },
          {
            id: 'joint-venture',
            text: 'Liên doanh với doanh nghiệp địa phương',
            cost: 300000,
            risk: 60,
            reward: 2.0,
            culturalFit: 85,
          },
          {
            id: 'subsidiary',
            text: 'Thành lập công ty con',
            cost: 500000,
            risk: 80,
            reward: 2.5,
            culturalFit: 50,
          },
        ],
      },
      {
        id: 'product-adaptation',
        type: 'product-adaptation' as const,
        title: `Điều chỉnh sản phẩm cho ${market.name}`,
        description: `Sản phẩm cần được điều chỉnh như thế nào để phù hợp với thị trường ${market.name}?`,
        options: [
          {
            id: 'no-adaptation',
            text: 'Giữ nguyên sản phẩm gốc',
            cost: 0,
            risk: 70,
            reward: 1.0,
            culturalFit: 20,
          },
          {
            id: 'minor-adaptation',
            text: 'Điều chỉnh nhỏ (màu sắc, kích thước)',
            cost: 80000,
            risk: 40,
            reward: 1.3,
            culturalFit: 60,
          },
          {
            id: 'major-adaptation',
            text: 'Điều chỉnh lớn (tính năng, thiết kế)',
            cost: 200000,
            risk: 30,
            reward: 1.8,
            culturalFit: 90,
          },
        ],
      },
      {
        id: 'marketing-strategy',
        type: 'marketing' as const,
        title: `Chiến lược marketing tại ${market.name}`,
        description: `Làm thế nào để tiếp cận khách hàng hiệu quả nhất tại ${market.name}?`,
        options: [
          {
            id: 'digital-only',
            text: 'Tập trung marketing digital',
            cost: 100000,
            risk: 50,
            reward: 1.4,
            culturalFit: 60,
          },
          {
            id: 'traditional-media',
            text: 'Quảng cáo truyền thống (TV, báo)',
            cost: 200000,
            risk: 40,
            reward: 1.3,
            culturalFit: 70,
          },
          {
            id: 'influencer-partnership',
            text: 'Hợp tác với KOL/Influencer địa phương',
            cost: 150000,
            risk: 60,
            reward: 1.7,
            culturalFit: 85,
          },
          {
            id: 'grassroots',
            text: 'Marketing cộng đồng từ cơ sở',
            cost: 80000,
            risk: 70,
            reward: 2.0,
            culturalFit: 95,
          },
        ],
      },
    ];

    return {
      ...decisions[Math.floor(Math.random() * decisions.length)],
      marketId,
    };
  };

  const selectMarket = (marketId: string) => {
    const decision = generateDecision(marketId);
    setCurrentDecision(decision);
    setGameState('decision');
  };

  const makeDecision = (optionId: string) => {
    if (!currentDecision) return;

    const option = currentDecision.options.find((opt) => opt.id === optionId);
    if (!option) return;

    const market = markets.find((m) => m.id === currentDecision.marketId);
    if (!market) return;

    // Calculate success based on cultural fit, risk, and random factors
    const culturalFitBonus = option.culturalFit / 100;
    const riskPenalty = option.risk / 100;
    const randomFactor = Math.random();

    const successRate = culturalFitBonus * 0.4 + (1 - riskPenalty) * 0.3 + randomFactor * 0.3;
    const isSuccess = successRate > 0.5;

    // Apply decision results
    setResources((prev) => ({
      ...prev,
      capital: prev.capital - option.cost,
      experience: prev.experience + (isSuccess ? 15 : 5),
      reputation: Math.max(0, Math.min(100, prev.reputation + (isSuccess ? 10 : -5))),
    }));

    // Update market
    if (currentDecision.type === 'market-entry') {
      setMarkets((prev) =>
        prev.map((m) => {
          if (m.id === currentDecision.marketId) {
            const entryMode = option.id as Market['entryMode'];
            const penetration = isSuccess ? Math.random() * 20 + 10 : Math.random() * 5;
            const revenue = isSuccess
              ? ((m.size * m.gdpPerCapita * penetration) / 100000) * option.reward
              : (m.size * m.gdpPerCapita * penetration) / 200000;

            return {
              ...m,
              entryMode,
              invested: m.invested + option.cost,
              marketPenetration: Math.min(100, m.marketPenetration + penetration),
              revenue: revenue,
            };
          }
          return m;
        }),
      );
    }

    // Add score
    const scoreGain = isSuccess ? option.reward * 100 : 50;
    setScore((prev) => prev + scoreGain);

    setTimeout(() => {
      setGameState('overview');
      setCurrentDecision(null);
    }, 2000);
  };

  const nextQuarter = () => {
    // Generate revenue from existing markets
    let totalRevenue = 0;
    setMarkets((prev) =>
      prev.map((market) => {
        if (market.entryMode && market.marketPenetration > 0) {
          const quarterlyRevenue = market.revenue / 4;
          totalRevenue += quarterlyRevenue;

          // Organic growth
          const growthRate = market.growthRate / 400; // Quarterly growth
          const organicGrowth = market.marketPenetration * growthRate;

          return {
            ...market,
            marketPenetration: Math.min(100, market.marketPenetration + organicGrowth),
            revenue: market.revenue * (1 + growthRate),
          };
        }
        return market;
      }),
    );

    setResources((prev) => ({
      ...prev,
      capital: prev.capital + totalRevenue,
    }));

    setScore((prev) => prev + Math.round(totalRevenue / 1000));

    // Advance time
    if (quarter === 4) {
      setQuarter(1);
      setYear((prev) => prev + 1);
    } else {
      setQuarter((prev) => prev + 1);
    }
  };

  const getMarketColor = (market: Market) => {
    if (market.entryMode) return 'border-green-500 bg-green-900/20';
    if (resources.capital < 100000) return 'border-red-500 bg-red-900/20';
    return 'border-blue-500 hover:border-blue-400';
  };

  const getEntryModeText = (mode: Market['entryMode']) => {
    switch (mode) {
      case 'export':
        return 'Xuất khẩu';
      case 'licensing':
        return 'Cấp phép';
      case 'franchise':
        return 'Nhượng quyền';
      case 'joint-venture':
        return 'Liên doanh';
      case 'subsidiary':
        return 'Công ty con';
      default:
        return 'Chưa vào';
    }
  };

  const calculateTotalRevenue = () => {
    return markets.reduce((sum, m) => sum + m.revenue, 0);
  };

  const calculateTotalInvestment = () => {
    return markets.reduce((sum, m) => sum + m.invested, 0);
  };

  // Game completion check
  useEffect(() => {
    const activeMarkets = markets.filter((m) => m.entryMode !== null).length;
    const totalRevenue = calculateTotalRevenue();

    if ((activeMarkets >= 4 && totalRevenue > 5000000) || year > 2030) {
      setGameState('completed');
      onComplete(true, score);
    }
  }, [markets, year, score, onComplete]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete(false, score);
    }
  }, [timeLeft, onComplete, score]);

  if (gameState === 'overview') {
    return (
      <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-blue-900 to-teal-900 text-white p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex justify-center items-center mb-4">
              <Globe className="w-12 h-12 text-blue-400 mr-4" />
              <div>
                <h2 className="text-3xl font-bold">Mô Phỏng Kinh Doanh Quốc Tế</h2>
                <p className="text-lg text-gray-300">Mở rộng doanh nghiệp ra toàn cầu</p>
              </div>
            </div>

            <div className="flex justify-center items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4 text-green-400" />
                <span className="font-semibold">{score.toLocaleString()} điểm</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="w-4 h-4 text-yellow-400" />
                <span className="font-semibold">${resources.capital.toLocaleString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building2 className="w-4 h-4 text-purple-400" />
                <span className="font-semibold">Uy tín: {resources.reputation}/100</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-red-400" />
                <span className="font-semibold">
                  Q{quarter} {year} | {Math.max(0, timeLeft)}s
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Markets */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold">Thị Trường Toàn Cầu</h3>
                <button
                  onClick={nextQuarter}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors flex items-center text-sm"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  Quý Tiếp Theo
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {markets.map((market) => (
                  <div
                    key={market.id}
                    className={`bg-black/30 backdrop-blur-sm rounded-lg p-6 border-2 transition-all cursor-pointer hover:scale-105 ${getMarketColor(market)}`}
                    onClick={() => selectMarket(market.id)}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <h4 className="font-bold text-lg">{market.name}</h4>
                        <p className="text-sm text-gray-400">{market.continent}</p>
                      </div>
                      <div className="text-2xl">
                        {market.continent === 'Bắc Mỹ'
                          ? '🇺🇸'
                          : market.continent === 'Châu Âu'
                            ? '🇩🇪'
                            : market.name === 'Nhật Bản'
                              ? '🇯🇵'
                              : market.name === 'Brazil'
                                ? '🇧🇷'
                                : market.name === 'Ấn Độ'
                                  ? '🇮🇳'
                                  : '🇰🇷'}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                      <div>
                        <span className="text-gray-400">Dân số:</span>
                        <div className="font-semibold">{market.size}M</div>
                      </div>
                      <div>
                        <span className="text-gray-400">GDP/người:</span>
                        <div className="font-semibold">${market.gdpPerCapita.toLocaleString()}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">Tăng trưởng:</span>
                        <div className="font-semibold text-green-400">+{market.growthRate}%</div>
                      </div>
                      <div>
                        <span className="text-gray-400">Thâm nhập:</span>
                        <div className="font-semibold">{market.marketPenetration.toFixed(1)}%</div>
                      </div>
                    </div>

                    {market.entryMode ? (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Phương thức:</span>
                          <span className="font-semibold text-green-400">{getEntryModeText(market.entryMode)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Doanh thu/năm:</span>
                          <span className="font-semibold text-yellow-400">${market.revenue.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-green-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${market.marketPenetration}%` }}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="text-center">
                        <div className="text-sm text-gray-400 mb-2">Nhấp để khám phá</div>
                        <div className="flex justify-between text-xs">
                          <span className="text-red-400">Rủi ro: {market.competitionLevel}%</span>
                          <span className="text-yellow-400">Tiềm năng: cao</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard */}
            <div className="space-y-6">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-green-400" />
                  Báo Cáo Tài Chính
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Vốn hiện có:</span>
                    <span className="font-semibold text-green-400">${resources.capital.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Tổng đầu tư:</span>
                    <span className="font-semibold text-red-400">${calculateTotalInvestment().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Doanh thu/năm:</span>
                    <span className="font-semibold text-yellow-400">${calculateTotalRevenue().toLocaleString()}</span>
                  </div>
                  <div className="border-t border-gray-600 pt-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">ROI dự kiến:</span>
                      <span className="font-semibold text-blue-400">
                        {calculateTotalInvestment() > 0
                          ? `${(((calculateTotalRevenue() - calculateTotalInvestment()) / calculateTotalInvestment()) * 100).toFixed(1)}%`
                          : 'N/A'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-400" />
                  Công Ty
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Nhân viên:</span>
                    <span className="font-semibold">{resources.employees}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Kinh nghiệm:</span>
                    <span className="font-semibold text-purple-400">{resources.experience}</span>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Uy tín:</span>
                      <span className="font-semibold">{resources.reputation}/100</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${
                          resources.reputation >= 80
                            ? 'bg-green-500'
                            : resources.reputation >= 60
                              ? 'bg-yellow-500'
                              : resources.reputation >= 40
                                ? 'bg-orange-500'
                                : 'bg-red-500'
                        }`}
                        style={{ width: `${resources.reputation}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Thị Trường Hoạt Động</h3>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-blue-400">
                    {markets.filter((m) => m.entryMode !== null).length}/6
                  </div>
                  <div className="text-sm text-gray-400">Thị trường đã vào</div>

                  <div className="text-xl font-bold text-green-400 mt-4">{score.toLocaleString()}</div>
                  <div className="text-xs text-gray-400">Điểm tổng</div>
                </div>
              </div>

              <button
                onClick={onRestart}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Khởi Nghiệp Mới
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'decision' && currentDecision) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-blue-900 to-teal-900 text-white p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold">{currentDecision.title}</h2>
              <p className="text-gray-300">{currentDecision.description}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right text-sm">
                <div>
                  Vốn: <span className="text-yellow-400">${resources.capital.toLocaleString()}</span>
                </div>
                <div>
                  Uy tín: <span className="text-blue-400">{resources.reputation}/100</span>
                </div>
              </div>
              <button
                onClick={() => setGameState('overview')}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition-colors"
              >
                ← Quay Lại
              </button>
            </div>
          </div>

          {/* Decision Options */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Chọn Quyết Định Tốt Nhất</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentDecision.options.map((option, index) => {
                const canAfford = resources.capital >= option.cost;

                return (
                  <button
                    key={option.id}
                    onClick={() => canAfford && makeDecision(option.id)}
                    disabled={!canAfford}
                    className={`p-6 rounded-lg border-2 text-left transition-all transform hover:scale-105 ${
                      canAfford
                        ? 'border-blue-500 hover:border-blue-400 bg-black/20'
                        : 'border-red-500 bg-red-900/20 opacity-50 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {String.fromCharCode(65 + index)}
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-yellow-400 font-semibold">${option.cost.toLocaleString()}</div>
                      </div>
                    </div>

                    <h4 className="font-bold text-lg mb-3">{option.text}</h4>

                    <div className="grid grid-cols-3 gap-3 text-sm">
                      <div className="text-center">
                        <div className="text-xs text-gray-400 mb-1">Rủi ro</div>
                        <div
                          className={`font-semibold ${
                            option.risk < 40 ? 'text-green-400' : option.risk < 70 ? 'text-yellow-400' : 'text-red-400'
                          }`}
                        >
                          {option.risk}%
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-400 mb-1">Tiềm năng</div>
                        <div className="font-semibold text-green-400">{option.reward.toFixed(1)}x</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-400 mb-1">Văn hóa</div>
                        <div
                          className={`font-semibold ${
                            option.culturalFit >= 70
                              ? 'text-green-400'
                              : option.culturalFit >= 50
                                ? 'text-yellow-400'
                                : 'text-red-400'
                          }`}
                        >
                          {option.culturalFit}%
                        </div>
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

  if (gameState === 'completed') {
    return (
      <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-blue-900 to-teal-900 text-white flex items-center justify-center">
        <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl text-center max-w-md mx-4">
          <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Globe className="w-10 h-10 text-blue-900" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Tập Đoàn Đa Quốc Gia!</h2>
          <p className="text-lg mb-4">Bạn đã thành công mở rộng kinh doanh toàn cầu!</p>
          <div className="text-blue-200 space-y-1 mb-6">
            <div>Điểm cuối: {score.toLocaleString()}</div>
            <div>Thị trường hoạt động: {markets.filter((m) => m.entryMode !== null).length}/6</div>
            <div>Doanh thu hàng năm: ${calculateTotalRevenue().toLocaleString()}</div>
            <div>Uy tín công ty: {resources.reputation}/100</div>
          </div>
          <button
            onClick={onRestart}
            className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Khởi Nghiệp Mới
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default InternationalBusinessSimGame;
