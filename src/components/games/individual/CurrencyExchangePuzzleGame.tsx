'use client';

import React, { useState, useEffect } from 'react';
import { Trophy, DollarSign, Clock, TrendingUp, Calculator, Globe, AlertTriangle, Target } from 'lucide-react';

interface GameProps {
  onComplete: (_: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface Currency {
  code: string;
  name: string;
  symbol: string;
  country: string;
  baseRate: number;
  volatility: number;
  marketCap: string;
  dailyVolume: string;
}

interface ExchangeScenario {
  id: string;
  title: string;
  description: string;
  startingCurrency: string;
  targetCurrency: string;
  amount: number;
  timeLimit: number;
  difficultyLevel: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  marketCondition: 'stable' | 'volatile' | 'crisis' | 'bull_run';
  bonusObjective?: string;
}

interface MarketEvent {
  id: string;
  title: string;
  description: string;
  impact: number;
  affectedCurrencies: string[];
  duration: number;
}

const CURRENCIES: Currency[] = [
  {
    code: 'VND',
    name: 'Vietnamese Dong',
    symbol: '₫',
    country: 'Vietnam',
    baseRate: 1,
    volatility: 0.02,
    marketCap: '$45B',
    dailyVolume: '$2.1B'
  },
  {
    code: 'USD',
    name: 'US Dollar',
    symbol: '$',
    country: 'United States',
    baseRate: 24500,
    volatility: 0.03,
    marketCap: '$18.2T',
    dailyVolume: '$6.6T'
  },
  {
    code: 'EUR',
    name: 'Euro',
    symbol: '€',
    country: 'European Union',
    baseRate: 26800,
    volatility: 0.04,
    marketCap: '$15.1T',
    dailyVolume: '$2.2T'
  },
  {
    code: 'JPY',
    name: 'Japanese Yen',
    symbol: '¥',
    country: 'Japan',
    baseRate: 164,
    volatility: 0.05,
    marketCap: '$4.2T',
    dailyVolume: '$1.1T'
  },
  {
    code: 'GBP',
    name: 'British Pound',
    symbol: '£',
    country: 'United Kingdom',
    baseRate: 31200,
    volatility: 0.06,
    marketCap: '$2.8T',
    dailyVolume: '$950B'
  },
  {
    code: 'CNY',
    name: 'Chinese Yuan',
    symbol: '¥',
    country: 'China',
    baseRate: 3400,
    volatility: 0.03,
    marketCap: '$17.7T',
    dailyVolume: '$280B'
  },
  {
    code: 'KRW',
    name: 'South Korean Won',
    symbol: '₩',
    country: 'South Korea',
    baseRate: 18.5,
    volatility: 0.04,
    marketCap: '$1.8T',
    dailyVolume: '$65B'
  },
  {
    code: 'THB',
    name: 'Thai Baht',
    symbol: '฿',
    country: 'Thailand',
    baseRate: 680,
    volatility: 0.03,
    marketCap: '$540B',
    dailyVolume: '$18B'
  }
];

const EXCHANGE_SCENARIOS: ExchangeScenario[] = [
  {
    id: 'tourist-exchange',
    title: 'Du lịch Châu Âu',
    description: 'Bạn cần đổi 50 triệu VNĐ sang EUR để du lịch châu Âu. Tỷ giá đang dao động, hãy chờ thời điểm tốt nhất!',
    startingCurrency: 'VND',
    targetCurrency: 'EUR',
    amount: 50000000,
    timeLimit: 180,
    difficultyLevel: 'beginner',
    marketCondition: 'stable',
    bonusObjective: 'Tiết kiệm được ít nhất 2% phí quy đổi'
  },
  {
    id: 'business-payment',
    title: 'Thanh toán nhập khẩu',
    description: 'Công ty cần thanh toán 100,000 USD cho nhà cung cấp Mỹ. Hãy tìm thời điểm tỷ giá có lợi nhất trong tuần.',
    startingCurrency: 'VND',
    targetCurrency: 'USD',
    amount: 2450000000,
    timeLimit: 240,
    difficultyLevel: 'intermediate',
    marketCondition: 'volatile',
    bonusObjective: 'Đạt tỷ giá tốt hơn 1% so với tỷ giá hiện tại'
  },
  {
    id: 'investment-diversification',
    title: 'Đa dạng hóa đầu tư',
    description: 'Bạn muốn đầu tư 200 triệu VNĐ vào 3 thị trường khác nhau. Phân bổ giữa USD, EUR và JPY để tối ưu rủi ro.',
    startingCurrency: 'VND',
    targetCurrency: 'MIX',
    amount: 200000000,
    timeLimit: 300,
    difficultyLevel: 'advanced',
    marketCondition: 'volatile',
    bonusObjective: 'Phân bổ tối ưu với rủi ro thấp nhất'
  },
  {
    id: 'emergency-transfer',
    title: 'Chuyển tiền khẩn cấp',
    description: 'Cần chuyển 50,000 USD khẩn cấp cho con đang học ở Anh. Thị trường đang biến động mạnh!',
    startingCurrency: 'VND',
    targetCurrency: 'GBP',
    amount: 1225000000,
    timeLimit: 120,
    difficultyLevel: 'expert',
    marketCondition: 'crisis',
    bonusObjective: 'Hoàn thành trong 2 phút với tổn thất tối thiểu'
  },
  {
    id: 'export-revenue',
    title: 'Thu xuất khẩu',
    description: 'Công ty vừa xuất khẩu hàng sang Hàn Quốc, nhận 500 triệu KRW. Cần đổi về VNĐ vào thời điểm tốt nhất.',
    startingCurrency: 'KRW',
    targetCurrency: 'VND',
    amount: 500000000,
    timeLimit: 200,
    difficultyLevel: 'intermediate',
    marketCondition: 'bull_run',
    bonusObjective: 'Tận dụng xu hướng tăng để tối đa hóa VNĐ nhận được'
  },
  {
    id: 'asean-trade',
    title: 'Thương mại ASEAN',
    description: 'Giao dịch với đối tác Thái Lan, cần đổi 100 triệu VNĐ sang THB. Thị trường khu vực đang ổn định.',
    startingCurrency: 'VND',
    targetCurrency: 'THB',
    amount: 100000000,
    timeLimit: 150,
    difficultyLevel: 'beginner',
    marketCondition: 'stable',
    bonusObjective: 'Hoàn thành giao dịch với phí thấp nhất'
  }
];

const MARKET_EVENTS: MarketEvent[] = [
  {
    id: 'fed-rate-hike',
    title: 'Fed tăng lãi suất',
    description: 'Ngân hàng Trung ương Mỹ tăng lãi suất 0.25%, USD mạnh lên',
    impact: 0.02,
    affectedCurrencies: ['USD'],
    duration: 60
  },
  {
    id: 'ecb-policy',
    title: 'ECB nới lỏng chính sách',
    description: 'Ngân hàng Trung ương châu Âu nới lỏng chính sách tiền tệ, EUR giảm',
    impact: -0.015,
    affectedCurrencies: ['EUR'],
    duration: 45
  },
  {
    id: 'china-trade-data',
    title: 'Số liệu thương mại Trung Quốc',
    description: 'Xuất khẩu Trung Quốc tăng mạnh, tác động tích cực đến CNY',
    impact: 0.01,
    affectedCurrencies: ['CNY'],
    duration: 30
  },
  {
    id: 'global-crisis',
    title: 'Khủng hoảng toàn cầu',
    description: 'Bất ổn địa chính trị, nhà đầu tư tìm kiếm tài sản an toàn',
    impact: -0.03,
    affectedCurrencies: ['EUR', 'GBP', 'JPY'],
    duration: 90
  },
  {
    id: 'vietnam-growth',
    title: 'Tăng trưởng Việt Nam',
    description: 'GDP Việt Nam tăng vượt kỳ vọng, VNĐ được kỳ vọng ổn định',
    impact: 0.005,
    affectedCurrencies: ['VND'],
    duration: 40
  }
];

const CurrencyExchangePuzzleGame: React.FC<GameProps> = ({ onComplete, timeLeft, onRestart }) => {
  const [gamePhase, setGamePhase] = useState<'briefing' | 'scenario-selection' | 'trading' | 'results'>('briefing');
  const [selectedScenario, setSelectedScenario] = useState<ExchangeScenario | null>(null);
  const [currentRates, setCurrentRates] = useState<Record<string, number>>({});
  const [activeEvents, setActiveEvents] = useState<MarketEvent[]>([]);
  const [tradingProgress, setTradingProgress] = useState(0);
  const [exchangeResult, setExchangeResult] = useState<{
    originalAmount: number;
    finalAmount: number;
    exchangeRate: number;
    profit: number;
    fees: number;
  } | null>(null);

  // Trading metrics
  const [profitLoss, setProfitLoss] = useState(0);
  const [riskManagement, setRiskManagement] = useState(0);
  const [timingAccuracy, setTimingAccuracy] = useState(0);

  const initializeRates = () => {
    const rates: Record<string, number> = {};
    CURRENCIES.forEach(currency => {
      rates[currency.code] = currency.baseRate;
    });
    setCurrentRates(rates);
  };

  const updateRates = () => {
    setCurrentRates(prev => {
      const newRates = { ...prev };
      
      CURRENCIES.forEach(currency => {
        // Natural volatility
        const change = (Math.random() - 0.5) * currency.volatility * 2;
        
        // Event impact
        const eventImpact = activeEvents
          .filter(event => event.affectedCurrencies.includes(currency.code))
          .reduce((sum, event) => sum + event.impact, 0);
        
        const totalChange = change + eventImpact;
        newRates[currency.code] = Math.max(0.1, newRates[currency.code] * (1 + totalChange));
      });
      
      return newRates;
    });
  };

  const triggerRandomEvent = () => {
    if (Math.random() < 0.3 && activeEvents.length < 2) {
      const availableEvents = MARKET_EVENTS.filter(event => 
        !activeEvents.some(active => active.id === event.id)
      );
      
      if (availableEvents.length > 0) {
        const randomEvent = availableEvents[Math.floor(Math.random() * availableEvents.length)];
        setActiveEvents(prev => [...prev, randomEvent]);
        
        setTimeout(() => {
          setActiveEvents(prev => prev.filter(event => event.id !== randomEvent.id));
        }, randomEvent.duration * 1000);
      }
    }
  };

  const executeExchange = () => {
    if (!selectedScenario || !currentRates) return;

    const scenario = selectedScenario;
    let startRate = currentRates[scenario.startingCurrency];
    let targetRate = currentRates[scenario.targetCurrency];

    // For VND as base currency (rate = 1)
    if (scenario.startingCurrency === 'VND') {
      targetRate = 1 / targetRate;
      startRate = 1;
    } else if (scenario.targetCurrency === 'VND') {
      startRate = 1 / startRate;
      targetRate = 1;
    } else {
      // Cross currency calculation
      const vndToStart = 1 / startRate;
      const vndToTarget = 1 / targetRate;
      startRate = vndToStart;
      targetRate = vndToTarget;
    }

    const exchangeRate = targetRate / startRate;
    const fees = scenario.amount * 0.005; // 0.5% fee
    const finalAmount = (scenario.amount - fees) * exchangeRate;
    
    // Calculate profit based on initial rate vs current rate
    const initialRate = CURRENCIES.find(c => c.code === scenario.targetCurrency)?.baseRate || 1;
    const currentMarketRate = currentRates[scenario.targetCurrency];
    const profit = ((currentMarketRate / initialRate) - 1) * 100;

    setExchangeResult({
      originalAmount: scenario.amount,
      finalAmount,
      exchangeRate,
      profit,
      fees
    });

    // Calculate performance metrics
    const maxProfit = Math.abs(profit);
    const profitScore = Math.max(0, Math.min(100, 50 + profit * 10));
    const riskScore = scenario.difficultyLevel === 'beginner' ? 90 : 
                     scenario.difficultyLevel === 'intermediate' ? 75 :
                     scenario.difficultyLevel === 'advanced' ? 60 : 45;
    const timingScore = Math.max(0, 100 - (tradingProgress / scenario.timeLimit) * 50);

    setProfitLoss(Math.round(profitScore));
    setRiskManagement(Math.round(riskScore));
    setTimingAccuracy(Math.round(timingScore));

    setGamePhase('results');
  };

  const getOverallScore = () => {
    const validProfitLoss = isNaN(profitLoss) ? 0 : profitLoss;
    const validRiskManagement = isNaN(riskManagement) ? 0 : riskManagement;
    const validTimingAccuracy = isNaN(timingAccuracy) ? 0 : timingAccuracy;
    
    const baseScore = (validProfitLoss * 0.4 + validRiskManagement * 0.3 + validTimingAccuracy * 0.3);
    const difficultyBonus = selectedScenario?.difficultyLevel === 'expert' ? 20 :
                           selectedScenario?.difficultyLevel === 'advanced' ? 15 :
                           selectedScenario?.difficultyLevel === 'intermediate' ? 10 : 5;
    
    const finalScore = Math.min(100, baseScore + difficultyBonus);
    return isNaN(finalScore) ? 0 : Math.round(finalScore);
  };

  const startTrading = () => {
    if (!selectedScenario) return;
    
    setGamePhase('trading');
    initializeRates();
    
    // Start market simulation
    const rateInterval = setInterval(updateRates, 2000);
    const eventInterval = setInterval(triggerRandomEvent, 15000);
    const progressInterval = setInterval(() => {
      setTradingProgress(prev => {
        if (prev >= selectedScenario.timeLimit) {
          clearInterval(rateInterval);
          clearInterval(eventInterval);
          clearInterval(progressInterval);
          executeExchange();
          return selectedScenario.timeLimit;
        }
        return prev + 1;
      });
    }, 1000);
  };

  useEffect(() => {
    if (timeLeft <= 0 && gamePhase !== 'results') {
      onComplete(false, 0);
    }
  }, [timeLeft, gamePhase, onComplete]);

  if (gamePhase === 'briefing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-slate-900 to-blue-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-green-500/20">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <DollarSign className="w-16 h-16 text-green-400" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Currency Exchange Puzzle</h1>
            <p className="text-xl text-gray-300 mb-6">
              Thành thạo nghệ thuật quy đổi ngoại tệ và kiếm lợi nhuận!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Calculator className="w-6 h-6 mr-2 text-green-400" />
                Kỹ năng trading
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Theo dõi biến động tỷ giá thời gian thực</li>
                <li>• Phân tích sự kiện thị trường toàn cầu</li>
                <li>• Tính toán chi phí và lợi nhuận</li>
                <li>• Quản lý rủi ro trong giao dịch</li>
                <li>• Tối ưu hóa thời điểm mua/bán</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Target className="w-6 h-6 mr-2 text-blue-400" />
                Tiêu chí đánh giá
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• <span className="text-green-400">Lợi nhuận (40%)</span> - Tỷ suất sinh lời đạt được</li>
                <li>• <span className="text-blue-400">Quản lý rủi ro (30%)</span> - An toàn giao dịch</li>
                <li>• <span className="text-yellow-400">Timing (30%)</span> - Chọn thời điểm tối ưu</li>
                <li>• <span className="text-purple-400">Bonus</span> - Độ khó scenario</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-yellow-400" />
              Thị trường ngoại tệ hôm nay
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {CURRENCIES.slice(0, 8).map(currency => (
                <div key={currency.code} className="text-center">
                  <div className="text-lg font-bold text-white">{currency.code}</div>
                  <div className="text-sm text-gray-400">{currency.symbol}</div>
                  <div className="text-xs text-green-400">{currency.marketCap}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('scenario-selection')}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Bắt đầu trading
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'scenario-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-slate-900 to-blue-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn tình huống giao dịch</h2>
            <p className="text-gray-300">Mỗi tình huống có độ khó và thời gian khác nhau</p>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {EXCHANGE_SCENARIOS.map((scenario) => {
              const isSelected = selectedScenario?.id === scenario.id;
              
              return (
                <div
                  key={scenario.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-green-500 bg-green-500/20'
                      : 'border-white/20 hover:border-green-400/50'
                  }`}
                  onClick={() => setSelectedScenario(scenario)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <DollarSign className="w-6 h-6 text-green-400 mr-2" />
                      <span className={`text-xs px-2 py-1 rounded ${
                        scenario.difficultyLevel === 'beginner' ? 'bg-green-500/20 text-green-400' :
                        scenario.difficultyLevel === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        scenario.difficultyLevel === 'advanced' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {scenario.difficultyLevel}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">{scenario.timeLimit}s</div>
                      <div className={`text-xs px-2 py-1 rounded mt-1 ${
                        scenario.marketCondition === 'stable' ? 'bg-blue-500/20 text-blue-400' :
                        scenario.marketCondition === 'volatile' ? 'bg-yellow-500/20 text-yellow-400' :
                        scenario.marketCondition === 'crisis' ? 'bg-red-500/20 text-red-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {scenario.marketCondition}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{scenario.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{scenario.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Từ:</span>
                      <span className="text-white font-mono">
                        {scenario.amount.toLocaleString()} {scenario.startingCurrency}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Sang:</span>
                      <span className="text-green-400 font-mono">{scenario.targetCurrency}</span>
                    </div>
                    {scenario.bonusObjective && (
                      <div className="mt-3 p-2 bg-yellow-500/20 rounded">
                        <div className="text-yellow-400 text-xs font-semibold">Mục tiêu bonus:</div>
                        <div className="text-gray-300 text-xs">{scenario.bonusObjective}</div>
                      </div>
                    )}
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
              onClick={startTrading}
              disabled={!selectedScenario}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Bắt đầu giao dịch
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'trading') {
    const timeRemaining = selectedScenario ? selectedScenario.timeLimit - tradingProgress : 0;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-slate-900 to-blue-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">{selectedScenario?.title}</h2>
            <div className="flex justify-center items-center gap-4 text-lg">
              <span className="text-yellow-400">Thời gian còn lại: {timeRemaining}s</span>
              <span className="text-blue-400">
                {selectedScenario?.amount.toLocaleString()} {selectedScenario?.startingCurrency} → {selectedScenario?.targetCurrency}
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Exchange Rates Panel */}
            <div className="md:col-span-2 bg-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                Tỷ giá thời gian thực
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {CURRENCIES.slice(0, 8).map(currency => {
                  const rate = currentRates[currency.code] || currency.baseRate;
                  const change = ((rate / currency.baseRate) - 1) * 100;
                  
                  return (
                    <div key={currency.code} className="bg-white/10 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-white">{currency.code}</span>
                        <span className={`text-sm ${
                          change > 0 ? 'text-green-400' : change < 0 ? 'text-red-400' : 'text-gray-400'
                        }`}>
                          {change > 0 ? '+' : ''}{change.toFixed(2)}%
                        </span>
                      </div>
                      <div className="text-gray-300 text-sm">{currency.name}</div>
                      <div className="text-lg font-mono text-yellow-400">
                        {rate.toLocaleString('vi-VN', { maximumFractionDigits: 2 })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Trading Panel */}
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <Calculator className="w-5 h-5 mr-2 text-blue-400" />
                Giao dịch
              </h3>
              
              {exchangeResult ? (
                <div className="space-y-3">
                  <div className="text-center">
                    <button
                      onClick={executeExchange}
                      className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
                    >
                      Thực hiện giao dịch
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">
                      {timeRemaining}s
                    </div>
                    <div className="bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-yellow-500 to-red-500 h-3 rounded-full transition-all duration-300" 
                        style={{width: `${(tradingProgress / (selectedScenario?.timeLimit || 1)) * 100}%`}}
                      ></div>
                    </div>
                  </div>
                  
                  <button
                    onClick={executeExchange}
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
                  >
                    Thực hiện giao dịch ngay
                  </button>
                  
                  <div className="text-xs text-gray-400 text-center">
                    Đợi thời điểm tốt hoặc thực hiện ngay
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Market Events */}
          {activeEvents.length > 0 && (
            <div className="bg-white/10 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
                Tin tức thị trường
              </h3>
              <div className="space-y-3">
                {activeEvents.map(event => (
                  <div key={event.id} className="bg-yellow-500/20 rounded-lg p-4">
                    <div className="font-semibold text-yellow-400">{event.title}</div>
                    <div className="text-gray-300 text-sm">{event.description}</div>
                    <div className="text-xs text-gray-400 mt-2">
                      Ảnh hưởng: {event.affectedCurrencies.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (gamePhase === 'results') {
    const overallScore = getOverallScore();

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-slate-900 to-blue-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-green-500/20">
          <div className="text-center mb-8">
            <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">Giao dịch hoàn thành!</h2>
            <p className="text-2xl text-gray-300 mb-2">{selectedScenario?.title}</p>
            <div className="text-6xl font-bold text-white mb-4">{overallScore} điểm</div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Kết quả giao dịch</h3>
              {exchangeResult && (
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Số tiền gốc:</span>
                    <span className="text-white font-mono">
                      {exchangeResult.originalAmount.toLocaleString()} {selectedScenario?.startingCurrency}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Phí giao dịch:</span>
                    <span className="text-red-400 font-mono">
                      -{exchangeResult.fees.toLocaleString()} {selectedScenario?.startingCurrency}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Tỷ giá:</span>
                    <span className="text-yellow-400 font-mono">
                      {exchangeResult.exchangeRate.toFixed(4)}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-white/20 pt-2">
                    <span className="text-gray-400">Số tiền nhận:</span>
                    <span className="text-green-400 font-mono font-bold">
                      {exchangeResult.finalAmount.toLocaleString()} {selectedScenario?.targetCurrency}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Lợi nhuận:</span>
                    <span className={`font-bold ${exchangeResult.profit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {exchangeResult.profit >= 0 ? '+' : ''}{exchangeResult.profit.toFixed(2)}%
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Đánh giá hiệu suất</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-green-400">Lợi nhuận:</span>
                  <span className="text-white font-bold">{isNaN(profitLoss) ? 0 : profitLoss}/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-400">Quản lý rủi ro:</span>
                  <span className="text-white font-bold">{isNaN(riskManagement) ? 0 : riskManagement}/100</span>
                </div>
                <div className="flex justify-between border-t border-white/20 pt-2">
                  <span className="text-yellow-400">Thời điểm giao dịch:</span>
                  <span className="text-white font-bold">{isNaN(timingAccuracy) ? 0 : timingAccuracy}/100</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-white mb-4">Nhận xét</h3>
            <div className="text-gray-300">
              {overallScore >= 90 && <p>🏆 Trader xuất sắc! Bạn có khả năng phân tích thị trường và timing tuyệt vời.</p>}
              {overallScore >= 80 && overallScore < 90 && <p>🌟 Trader giỏi! Bạn hiểu rõ về thị trường ngoại tệ và quản lý rủi ro tốt.</p>}
              {overallScore >= 70 && overallScore < 80 && <p>✅ Trader có tiềm năng! Cần cải thiện kỹ năng phân tích và timing.</p>}
              {overallScore >= 60 && overallScore < 70 && <p>⚠️ Trader mới! Hãy học thêm về phân tích kỹ thuật và quản lý rủi ro.</p>}
              {overallScore < 60 && <p>❌ Cần luyện tập nhiều hơn về giao dịch ngoại tệ và quản lý tài chính.</p>}
              
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-sm">
                  <strong>Gợi ý:</strong> Thị trường ngoại tệ rất nhạy cảm với tin tức kinh tế và địa chính trị. 
                  Hãy luôn cập nhật thông tin và có chiến lược quản lý rủi ro rõ ràng.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center space-x-4">
            <button
              onClick={onRestart}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Giao dịch mới
            </button>
            <button
              onClick={() => onComplete(true, overallScore)}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
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

export default CurrencyExchangePuzzleGame;
