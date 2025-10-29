import React, { useState, useEffect, useCallback } from 'react';
import { 
  TrendingUp, 
  TrendingDown,
  Target,
  Play,
  RotateCcw,
  Award,
  Briefcase
} from 'lucide-react';

interface InvestmentPortfolioSimulatorProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface Investment {
  id: string;
  name: string;
  type: 'stocks' | 'bonds' | 'etf' | 'crypto' | 'real-estate' | 'commodities';
  symbol: string;
  price: number;
  change: number;
  risk: number; // 1-10
  expectedReturn: number; // annual %
  volatility: number; // 1-10
  minInvestment: number;
  description: string;
  icon: string;
}

interface PortfolioPosition {
  investment: Investment;
  shares: number;
  value: number;
  percentageOfPortfolio: number;
}

interface MarketEvent {
  id: string;
  title: string;
  description: string;
  impact: { [key: string]: number }; // impact by investment type
  probability: number;
  severity: number; // 1-10
}

const InvestmentPortfolioSimulatorGame: React.FC<InvestmentPortfolioSimulatorProps> = ({
  onComplete,
  timeLeft,
  onRestart,
}) => {
  // Game state
  const [gamePhase, setGamePhase] = useState<'setup' | 'investing' | 'market-events' | 'results'>('setup');
  const [isStarted, setIsStarted] = useState(false);
  const [score, setScore] = useState(0);

  // Portfolio management
  const [cash, setCash] = useState(100000); // Starting with $100,000
  const [portfolio, setPortfolio] = useState<PortfolioPosition[]>([]);
  const [selectedInvestment, setSelectedInvestment] = useState<Investment | null>(null);
  const [investmentAmount, setInvestmentAmount] = useState(0);
  const [totalPortfolioValue, setTotalPortfolioValue] = useState(100000);
  const [portfolioReturn, setPortfolioReturn] = useState(0);
  const [riskLevel, setRiskLevel] = useState(0);

  // Market simulation
  const [currentEvent, setCurrentEvent] = useState<MarketEvent | null>(null);
  const [marketCycle, setMarketCycle] = useState(0);
  const [eventHistory, setEventHistory] = useState<MarketEvent[]>([]);

  // Available investments
  const investments: Investment[] = [
    {
      id: 'tech-stock',
      name: 'Tech Growth Stock',
      type: 'stocks',
      symbol: 'TECH',
      price: 150,
      change: 2.5,
      risk: 8,
      expectedReturn: 12,
      volatility: 9,
      minInvestment: 1000,
      description: 'High-growth technology company with strong innovation potential',
      icon: '💻'
    },
    {
      id: 'dividend-stock',
      name: 'Dividend Stock',
      type: 'stocks',
      symbol: 'DIV',
      price: 80,
      change: 0.8,
      risk: 4,
      expectedReturn: 6,
      volatility: 3,
      minInvestment: 500,
      description: 'Stable company with consistent dividend payments',
      icon: '🏢'
    },
    {
      id: 'government-bond',
      name: 'Government Bond',
      type: 'bonds',
      symbol: 'GOVT',
      price: 100,
      change: 0.2,
      risk: 1,
      expectedReturn: 3,
      volatility: 1,
      minInvestment: 1000,
      description: 'Low-risk government-backed security',
      icon: '🏛️'
    },
    {
      id: 'sp500-etf',
      name: 'S&P 500 ETF',
      type: 'etf',
      symbol: 'SPY',
      price: 400,
      change: 1.2,
      risk: 5,
      expectedReturn: 8,
      volatility: 5,
      minInvestment: 400,
      description: 'Diversified index fund tracking the S&P 500',
      icon: '📈'
    },
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      type: 'crypto',
      symbol: 'BTC',
      price: 45000,
      change: -3.2,
      risk: 10,
      expectedReturn: 15,
      volatility: 10,
      minInvestment: 100,
      description: 'Leading cryptocurrency with high volatility',
      icon: '₿'
    },
    {
      id: 'reit',
      name: 'Real Estate Investment Trust',
      type: 'real-estate',
      symbol: 'REIT',
      price: 25,
      change: 1.1,
      risk: 6,
      expectedReturn: 7,
      volatility: 4,
      minInvestment: 250,
      description: 'Real estate investment with regular income',
      icon: '🏘️'
    },
    {
      id: 'gold',
      name: 'Gold ETF',
      type: 'commodities',
      symbol: 'GOLD',
      price: 180,
      change: -0.5,
      risk: 3,
      expectedReturn: 4,
      volatility: 6,
      minInvestment: 180,
      description: 'Precious metal hedge against inflation',
      icon: '🥇'
    }
  ];

  // Market events
  const marketEvents: MarketEvent[] = [
    {
      id: 'tech-boom',
      title: 'Technology Sector Surge',
      description: 'Major breakthrough in AI technology drives tech stocks up 15%',
      impact: { 'stocks': 15, 'etf': 8, 'crypto': 12, 'bonds': -1, 'real-estate': 2, 'commodities': 0 },
      probability: 0.3,
      severity: 7
    },
    {
      id: 'interest-rate-hike',
      title: 'Federal Reserve Raises Interest Rates',
      description: 'Central bank increases rates by 0.5%, affecting bond and stock markets',
      impact: { 'bonds': 8, 'stocks': -8, 'etf': -5, 'crypto': -10, 'real-estate': -6, 'commodities': 3 },
      probability: 0.4,
      severity: 6
    },
    {
      id: 'market-crash',
      title: 'Market Correction',
      description: 'Economic uncertainty leads to broad market decline',
      impact: { 'stocks': -20, 'etf': -15, 'crypto': -25, 'bonds': 5, 'real-estate': -10, 'commodities': -5 },
      probability: 0.2,
      severity: 9
    },
    {
      id: 'inflation-surge',
      title: 'Inflation Spike',
      description: 'Rising prices benefit commodities and real estate investments',
      impact: { 'commodities': 12, 'real-estate': 8, 'stocks': -5, 'bonds': -8, 'etf': -3, 'crypto': 15 },
      probability: 0.35,
      severity: 5
    },
    {
      id: 'crypto-regulation',
      title: 'Cryptocurrency Regulation',
      description: 'New regulations impact cryptocurrency markets',
      impact: { 'crypto': -18, 'stocks': 2, 'bonds': 1, 'etf': 1, 'real-estate': 0, 'commodities': 0 },
      probability: 0.25,
      severity: 8
    }
  ];

  // Calculate portfolio metrics
  const calculatePortfolioMetrics = useCallback(() => {
    if (portfolio.length === 0) return;

    let totalValue = cash;
    let totalRisk = 0;
    let weightedReturn = 0;

    portfolio.forEach(position => {
      totalValue += position.value;
      const weight = position.value / (totalValue - cash + position.value);
      totalRisk += position.investment.risk * weight;
      weightedReturn += position.investment.expectedReturn * weight;
    });

    setTotalPortfolioValue(totalValue);
    setRiskLevel(totalRisk);
    setPortfolioReturn(weightedReturn);
    
    // Update position percentages
    const updatedPortfolio = portfolio.map(position => ({
      ...position,
      percentageOfPortfolio: (position.value / totalValue) * 100
    }));
    setPortfolio(updatedPortfolio);
  }, [cash, portfolio]);

  // Apply market event effects
  const applyMarketEvent = (event: MarketEvent) => {
    const updatedPortfolio = portfolio.map(position => {
      const impact = event.impact[position.investment.type] || 0;
      const newValue = position.value * (1 + impact / 100);
      return {
        ...position,
        value: Math.max(newValue, 0)
      };
    });
    setPortfolio(updatedPortfolio);
    setEventHistory(prev => [...prev, event]);
  };

  // Start game
  const startGame = () => {
    setIsStarted(true);
    setGamePhase('investing');
  };

  // Invest in an asset
  const makeInvestment = () => {
    if (!selectedInvestment || investmentAmount <= 0 || investmentAmount > cash) return;

    const shares = investmentAmount / selectedInvestment.price;
    const existingPosition = portfolio.find(p => p.investment.id === selectedInvestment.id);

    if (existingPosition) {
      // Add to existing position
      const updatedPortfolio = portfolio.map(position => 
        position.investment.id === selectedInvestment.id
          ? {
              ...position,
              shares: position.shares + shares,
              value: position.value + investmentAmount
            }
          : position
      );
      setPortfolio(updatedPortfolio);
    } else {
      // Create new position
      const newPosition: PortfolioPosition = {
        investment: selectedInvestment,
        shares,
        value: investmentAmount,
        percentageOfPortfolio: 0
      };
      setPortfolio(prev => [...prev, newPosition]);
    }

    setCash(prev => prev - investmentAmount);
    setInvestmentAmount(0);
    setSelectedInvestment(null);
  };

  // Trigger market event
  const triggerMarketEvent = () => {
    const availableEvents = marketEvents.filter(event => 
      Math.random() < event.probability
    );
    
    if (availableEvents.length > 0) {
      const randomEvent = availableEvents[Math.floor(Math.random() * availableEvents.length)];
      setCurrentEvent(randomEvent);
      setGamePhase('market-events');
      
      setTimeout(() => {
        applyMarketEvent(randomEvent);
        setCurrentEvent(null);
        setMarketCycle(prev => prev + 1);
        
        if (marketCycle >= 2) {
          endGame();
        } else {
          setGamePhase('investing');
        }
      }, 3000);
    } else {
      setMarketCycle(prev => prev + 1);
      if (marketCycle >= 2) {
        endGame();
      }
    }
  };

  // End game and calculate final score
  const endGame = () => {
    setGamePhase('results');
    
    const finalValue = totalPortfolioValue;
    const initialValue = 100000;
    const returnPercentage = ((finalValue - initialValue) / initialValue) * 100;
    const riskAdjustedReturn = returnPercentage - (riskLevel * 2); // Risk penalty
    
    const finalScore = Math.max(0, Math.min(1000, 500 + (riskAdjustedReturn * 10)));
    setScore(finalScore);
    
    setTimeout(() => {
      onComplete(true, finalScore);
    }, 3000);
  };

  // Effects
  useEffect(() => {
    calculatePortfolioMetrics();
  }, [calculatePortfolioMetrics]);

  useEffect(() => {
    if (timeLeft === 30 && gamePhase === 'investing') {
      const availableEvents = marketEvents.filter(event => 
        Math.random() < event.probability
      );
      
      if (availableEvents.length > 0) {
        const randomEvent = availableEvents[Math.floor(Math.random() * availableEvents.length)];
        setCurrentEvent(randomEvent);
        setGamePhase('market-events');
        
        setTimeout(() => {
          applyMarketEvent(randomEvent);
          setCurrentEvent(null);
          setMarketCycle(prev => prev + 1);
          
          if (marketCycle >= 2) {
            endGame();
          } else {
            setGamePhase('investing');
          }
        }, 3000);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, gamePhase, marketCycle]);

  // Render setup phase
  if (!isStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">📊</div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Investment Portfolio Simulator
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Build a diversified investment portfolio and navigate market events
            </p>
          </div>

          <div className="bg-black bg-opacity-30 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Target className="mr-3" />
              Game Objectives
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-lg font-semibold text-white mb-2">Maximize Returns</h3>
                <p className="text-green-100">Grow your $100,000 portfolio through strategic investments</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">⚖️</div>
                <h3 className="text-lg font-semibold text-white mb-2">Manage Risk</h3>
                <p className="text-green-100">Balance high-return investments with portfolio stability</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🌊</div>
                <h3 className="text-lg font-semibold text-white mb-2">Navigate Markets</h3>
                <p className="text-green-100">Adapt to market events and economic changes</p>
              </div>
            </div>
          </div>

          <div className="bg-black bg-opacity-30 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Investment Options</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {investments.slice(0, 6).map((investment) => (
                <div key={investment.id} className="bg-white bg-opacity-10 rounded-lg p-4">
                  <div className="text-2xl mb-2">{investment.icon}</div>
                  <h3 className="font-semibold text-black">{investment.name}</h3>
                  <div className="text-sm text-black-100">
                    <div>Expected Return: {investment.expectedReturn}%</div>
                    <div>Risk Level: {investment.risk}/10</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={startGame}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center text-xl"
          >
            <Play className="mr-3" size={24} />
            Start Portfolio Management
          </button>
        </div>
      </div>
    );
  }

  // Render investing phase
  if (gamePhase === 'investing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Portfolio Dashboard */}
          <div className="bg-black bg-opacity-30 rounded-xl p-6 mb-6">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">${cash.toLocaleString()}</div>
                <div className="text-green-100">Available Cash</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">${totalPortfolioValue.toLocaleString()}</div>
                <div className="text-green-100">Total Portfolio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{portfolioReturn.toFixed(1)}%</div>
                <div className="text-green-100">Expected Return</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{riskLevel.toFixed(1)}/10</div>
                <div className="text-green-100">Risk Level</div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Investment Selection */}
            <div className="bg-black bg-opacity-30 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Available Investments</h2>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {investments.map((investment) => (
                  <div
                    key={investment.id}
                    onClick={() => setSelectedInvestment(investment)}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      selectedInvestment?.id === investment.id
                        ? 'bg-green-600 bg-opacity-50 border-2 border-green-400'
                        : 'bg-white bg-opacity-10 hover:bg-opacity-20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{investment.icon}</span>
                        <div>
                          <h3 className="font-semibold text-white">{investment.name}</h3>
                          <div className="text-sm text-green-100">
                            ${investment.price} | {investment.expectedReturn}% return | Risk: {investment.risk}/10
                          </div>
                        </div>
                      </div>
                      <div className={`flex items-center ${
                        investment.change >= 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {investment.change >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                        <span className="ml-1">{investment.change > 0 ? '+' : ''}{investment.change}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {selectedInvestment && (
                <div className="mt-6 p-4 bg-green-600 bg-opacity-20 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Invest in {selectedInvestment.name}</h3>
                  <p className="text-green-100 text-sm mb-4">{selectedInvestment.description}</p>
                  <div className="flex items-center space-x-4">
                    <input
                      type="number"
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(Math.max(0, parseInt(e.target.value) || 0))}
                      placeholder="Amount to invest"
                      min={selectedInvestment.minInvestment}
                      max={cash}
                      className="flex-1 px-3 py-2 bg-white bg-opacity-20 text-white rounded border border-green-400 focus:border-green-300 focus:outline-none"
                    />
                    <button
                      onClick={makeInvestment}
                      disabled={investmentAmount < selectedInvestment.minInvestment || investmentAmount > cash}
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white rounded font-semibold transition-all"
                    >
                      Invest
                    </button>
                  </div>
                  <div className="text-sm text-green-100 mt-2">
                    Minimum: ${selectedInvestment.minInvestment.toLocaleString()}
                  </div>
                </div>
              )}
            </div>

            {/* Current Portfolio */}
            <div className="bg-black bg-opacity-30 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Your Portfolio</h2>
              {portfolio.length === 0 ? (
                <div className="text-center text-green-100 py-8">
                  <Briefcase size={48} className="mx-auto mb-4 opacity-50" />
                  <p>No investments yet. Start building your portfolio!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {portfolio.map((position, index) => (
                    <div key={index} className="p-4 bg-white bg-opacity-10 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{position.investment.icon}</span>
                          <div>
                            <h3 className="font-semibold text-white">{position.investment.name}</h3>
                            <div className="text-sm text-green-100">
                              {position.shares.toFixed(2)} shares
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-white">${position.value.toLocaleString()}</div>
                          <div className="text-sm text-green-100">
                            {position.percentageOfPortfolio.toFixed(1)}% of portfolio
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 text-center">
                <button
                  onClick={triggerMarketEvent}
                  disabled={portfolio.length === 0}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white rounded-lg font-semibold transition-all"
                >
                  Continue to Market Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render market events phase
  if (gamePhase === 'market-events') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 p-6 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6">📈</div>
          <h1 className="text-4xl font-bold text-white mb-6">Market Event</h1>
          {currentEvent && (
            <div className="bg-black bg-opacity-30 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">{currentEvent.title}</h2>
              <p className="text-xl text-orange-100 mb-6">{currentEvent.description}</p>
              <div className="text-lg text-white">
                Analyzing impact on your portfolio...
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Render results phase
  if (gamePhase === 'results') {
    const finalReturn = ((totalPortfolioValue - 100000) / 100000) * 100;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 p-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🏆</div>
          <h1 className="text-4xl font-bold text-white mb-8">Portfolio Performance Results</h1>

          <div className="bg-black bg-opacity-30 rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-white">${totalPortfolioValue.toLocaleString()}</div>
                <div className="text-green-100">Final Portfolio Value</div>
              </div>
              <div>
                <div className={`text-3xl font-bold ${finalReturn >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {finalReturn > 0 ? '+' : ''}{finalReturn.toFixed(1)}%
                </div>
                <div className="text-green-100">Total Return</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">{score.toFixed(0)}</div>
                <div className="text-green-100">Investment Score</div>
              </div>
            </div>

            <div className="text-lg text-green-100 mb-6">
              {finalReturn > 10 ? '🎉 Excellent portfolio performance!' :
               finalReturn > 5 ? '👍 Good investment strategy!' :
               finalReturn > 0 ? '✅ Positive returns achieved!' :
               '📊 Learning experience - consider diversification!'}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Portfolio Breakdown</h3>
                {portfolio.map((position, index) => (
                  <div key={index} className="flex justify-between items-center mb-2 text-green-100">
                    <span>{position.investment.icon} {position.investment.name}</span>
                    <span>{position.percentageOfPortfolio.toFixed(1)}%</span>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Market Events</h3>
                {eventHistory.map((event, index) => (
                  <div key={index} className="text-sm text-green-100 mb-2">
                    📰 {event.title}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={onRestart}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center"
            >
              <RotateCcw className="mr-2" size={20} />
              Try Again
            </button>
            <button
              onClick={() => onComplete(true, score)}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center"
            >
              <Award className="mr-2" size={20} />
              Complete
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default InvestmentPortfolioSimulatorGame;