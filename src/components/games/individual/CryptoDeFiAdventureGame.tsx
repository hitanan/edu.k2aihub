import React, { useState, useEffect, useCallback } from 'react';
import { 
  TrendingUp, 
  TrendingDown,
  Coins,
  Target,
  Play,
  RotateCcw,
  Award,
  CheckCircle
} from 'lucide-react';

interface CryptoDeFiAdventureProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface CryptoCurrency {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  marketCap: number;
  volume: number;
  volatility: number; // 1-10
  stakingReward: number; // APY %
  icon: string;
  description: string;
}

interface DeFiProtocol {
  id: string;
  name: string;
  type: 'lending' | 'dex' | 'yield-farming' | 'staking' | 'liquidity-pool';
  apy: number;
  risk: number; // 1-10
  minDeposit: number;
  lockPeriod: number; // days
  description: string;
  icon: string;
  rewards: string[];
}

interface UserPosition {
  type: 'crypto' | 'defi';
  asset: CryptoCurrency | DeFiProtocol;
  amount: number;
  value: number;
  entryPrice?: number;
  startTime: number;
}

interface MarketEvent {
  id: string;
  title: string;
  description: string;
  impact: { [symbol: string]: number };
  type: 'positive' | 'negative' | 'neutral';
  severity: number; // 1-10
}

const CryptoDeFiAdventureGame: React.FC<CryptoDeFiAdventureProps> = ({
  onComplete,
  timeLeft,
  onRestart,
}) => {
  // Game state
  const [gamePhase, setGamePhase] = useState<'setup' | 'trading' | 'defi' | 'event' | 'results'>('setup');
  const [isStarted, setIsStarted] = useState(false);
  const [score, setScore] = useState(0);

  // Portfolio management
  const [wallet, setWallet] = useState(10000); // Starting with $10,000 USDC
  const [positions, setPositions] = useState<UserPosition[]>([]);
  const [totalValue, setTotalValue] = useState(10000);
  const [totalReturns, setTotalReturns] = useState(0);

  // Selection states
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoCurrency | null>(null);
  const [selectedProtocol, setSelectedProtocol] = useState<DeFiProtocol | null>(null);
  const [tradeAmount, setTradeAmount] = useState(0);

  // Market events
  const [currentEvent, setCurrentEvent] = useState<MarketEvent | null>(null);
  const [eventHistory, setEventHistory] = useState<MarketEvent[]>([]);

  // Available cryptocurrencies
  const cryptocurrencies: CryptoCurrency[] = [
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 45000,
      change24h: 2.5,
      marketCap: 850000000000,
      volume: 25000000000,
      volatility: 7,
      stakingReward: 0,
      icon: '₿',
      description: 'The original cryptocurrency and store of value'
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      price: 2800,
      change24h: 4.1,
      marketCap: 350000000000,
      volume: 15000000000,
      volatility: 8,
      stakingReward: 5.2,
      icon: 'Ξ',
      description: 'Smart contract platform powering DeFi ecosystem'
    },
    {
      id: 'solana',
      name: 'Solana',
      symbol: 'SOL',
      price: 180,
      change24h: 6.8,
      marketCap: 45000000000,
      volume: 2000000000,
      volatility: 9,
      stakingReward: 7.1,
      icon: '◎',
      description: 'High-performance blockchain for DeFi applications'
    },
    {
      id: 'cardano',
      name: 'Cardano',
      symbol: 'ADA',
      price: 1.2,
      change24h: -1.5,
      marketCap: 38000000000,
      volume: 800000000,
      volatility: 6,
      stakingReward: 4.5,
      icon: '₳',
      description: 'Sustainable proof-of-stake blockchain'
    },
    {
      id: 'polygon',
      name: 'Polygon',
      symbol: 'MATIC',
      price: 0.95,
      change24h: 8.2,
      marketCap: 15000000000,
      volume: 600000000,
      volatility: 8,
      stakingReward: 8.5,
      icon: '⬡',
      description: 'Ethereum scaling solution with low fees'
    }
  ];

  // Available DeFi protocols
  const defiProtocols: DeFiProtocol[] = [
    {
      id: 'compound',
      name: 'Compound Finance',
      type: 'lending',
      apy: 4.2,
      risk: 3,
      minDeposit: 100,
      lockPeriod: 0,
      description: 'Decentralized lending and borrowing protocol',
      icon: '🏦',
      rewards: ['Interest earning', 'COMP tokens']
    },
    {
      id: 'uniswap',
      name: 'Uniswap V3',
      type: 'liquidity-pool',
      apy: 12.5,
      risk: 7,
      minDeposit: 500,
      lockPeriod: 0,
      description: 'Automated market maker for token swaps',
      icon: '🦄',
      rewards: ['Trading fees', 'UNI tokens', 'Impermanent loss risk']
    },
    {
      id: 'aave',
      name: 'Aave Protocol',
      type: 'lending',
      apy: 3.8,
      risk: 4,
      minDeposit: 200,
      lockPeriod: 0,
      description: 'Open source liquidity protocol',
      icon: '👻',
      rewards: ['Variable interest', 'AAVE tokens']
    },
    {
      id: 'yearn',
      name: 'Yearn Finance',
      type: 'yield-farming',
      apy: 18.6,
      risk: 8,
      minDeposit: 1000,
      lockPeriod: 7,
      description: 'Automated yield farming strategies',
      icon: '🌾',
      rewards: ['Optimized yield', 'YFI tokens', 'Auto-compounding']
    },
    {
      id: 'curve',
      name: 'Curve Finance',
      type: 'liquidity-pool',
      apy: 9.3,
      risk: 5,
      minDeposit: 300,
      lockPeriod: 0,
      description: 'Stablecoin and similar asset trading',
      icon: '📈',
      rewards: ['Trading fees', 'CRV tokens', 'Low slippage']
    },
    {
      id: 'lido',
      name: 'Lido Staking',
      type: 'staking',
      apy: 5.4,
      risk: 2,
      minDeposit: 32,
      lockPeriod: 30,
      description: 'Liquid staking for Ethereum 2.0',
      icon: '🔒',
      rewards: ['ETH staking rewards', 'stETH tokens', 'Liquid staking']
    }
  ];

  // Market events
  const marketEvents: MarketEvent[] = [
    {
      id: 'regulation-news',
      title: 'Positive Crypto Regulation',
      description: 'Major country announces crypto-friendly regulations',
      impact: { 'BTC': 8, 'ETH': 12, 'SOL': 15, 'ADA': 10, 'MATIC': 18 },
      type: 'positive',
      severity: 6
    },
    {
      id: 'defi-hack',
      title: 'DeFi Protocol Exploit',
      description: 'Major DeFi protocol suffers security breach',
      impact: { 'BTC': -3, 'ETH': -8, 'SOL': -12, 'ADA': -5, 'MATIC': -15 },
      type: 'negative',
      severity: 7
    },
    {
      id: 'institutional-adoption',
      title: 'Major Institution Adopts Crypto',
      description: 'Fortune 500 company adds crypto to balance sheet',
      impact: { 'BTC': 15, 'ETH': 10, 'SOL': 8, 'ADA': 6, 'MATIC': 12 },
      type: 'positive',
      severity: 8
    },
    {
      id: 'market-crash',
      title: 'Crypto Market Correction',
      description: 'Broader market downturn affects crypto prices',
      impact: { 'BTC': -20, 'ETH': -25, 'SOL': -30, 'ADA': -18, 'MATIC': -28 },
      type: 'negative',
      severity: 9
    },
    {
      id: 'ethereum-upgrade',
      title: 'Ethereum Network Upgrade',
      description: 'Successful implementation of major Ethereum improvement',
      impact: { 'BTC': 2, 'ETH': 18, 'SOL': 5, 'ADA': 3, 'MATIC': 22 },
      type: 'positive',
      severity: 7
    }
  ];

  // Calculate total portfolio value
  const calculatePortfolioValue = useCallback(() => {
    let totalPortfolioValue = wallet;
    
    positions.forEach(position => {
      if (position.type === 'crypto') {
        const crypto = position.asset as CryptoCurrency;
        totalPortfolioValue += position.amount * crypto.price;
      } else {
        const protocol = position.asset as DeFiProtocol;
        const timeElapsed = (Date.now() - position.startTime) / (1000 * 60 * 60 * 24); // days
        const yieldAmount = position.value * (protocol.apy / 100) * (timeElapsed / 365);
        totalPortfolioValue += position.value + yieldAmount;
      }
    });

    const returns = totalPortfolioValue - 10000;
    setTotalValue(totalPortfolioValue);
    setTotalReturns(returns);
  }, [wallet, positions]);

  // Buy cryptocurrency
  const buyCrypto = () => {
    if (!selectedCrypto || tradeAmount <= 0 || tradeAmount > wallet) return;

    const amount = tradeAmount / selectedCrypto.price;
    const existingPosition = positions.find(
      p => p.type === 'crypto' && (p.asset as CryptoCurrency).id === selectedCrypto.id
    );

    if (existingPosition) {
      const updatedPositions = positions.map(position => 
        position.type === 'crypto' && (position.asset as CryptoCurrency).id === selectedCrypto.id
          ? { ...position, amount: position.amount + amount, value: position.value + tradeAmount }
          : position
      );
      setPositions(updatedPositions);
    } else {
      const newPosition: UserPosition = {
        type: 'crypto',
        asset: selectedCrypto,
        amount,
        value: tradeAmount,
        entryPrice: selectedCrypto.price,
        startTime: Date.now()
      };
      setPositions(prev => [...prev, newPosition]);
    }

    setWallet(prev => prev - tradeAmount);
    setTradeAmount(0);
    setSelectedCrypto(null);
  };

  // Enter DeFi protocol
  const enterDeFi = () => {
    if (!selectedProtocol || tradeAmount <= 0 || tradeAmount < selectedProtocol.minDeposit || tradeAmount > wallet) return;

    const newPosition: UserPosition = {
      type: 'defi',
      asset: selectedProtocol,
      amount: tradeAmount,
      value: tradeAmount,
      startTime: Date.now()
    };

    setPositions(prev => [...prev, newPosition]);
    setWallet(prev => prev - tradeAmount);
    setTradeAmount(0);
    setSelectedProtocol(null);
  };

  // Apply market event
  const applyMarketEvent = (event: MarketEvent) => {
    const updatedPositions = positions.map(position => {
      if (position.type === 'crypto') {
        const crypto = position.asset as CryptoCurrency;
        const impact = event.impact[crypto.symbol] || 0;
        const newPrice = crypto.price * (1 + impact / 100);
        
        return {
          ...position,
          asset: { ...crypto, price: Math.max(newPrice, crypto.price * 0.1) }, // Minimum 10% of original
          value: position.value * (1 + impact / 100)
        };
      }
      return position;
    });

    setPositions(updatedPositions);
    setEventHistory(prev => [...prev, event]);
  };

  // Start game
  const startGame = () => {
    setIsStarted(true);
    setGamePhase('trading');
  };

  // Trigger market event
  const triggerMarketEvent = () => {
    const randomEvent = marketEvents[Math.floor(Math.random() * marketEvents.length)];
    setCurrentEvent(randomEvent);
    setGamePhase('event');
    
    setTimeout(() => {
      applyMarketEvent(randomEvent);
      setCurrentEvent(null);
      if (timeLeft < 20) {
        endGame();
      } else {
        setGamePhase(Math.random() > 0.5 ? 'trading' : 'defi');
      }
    }, 3000);
  };

  // End game
  const endGame = () => {
    setGamePhase('results');
    const returnPercentage = (totalReturns / 10000) * 100;
    const finalScore = Math.max(0, Math.min(1000, 500 + (returnPercentage * 15)));
    setScore(finalScore);
    
    setTimeout(() => {
      onComplete(true, finalScore);
    }, 3000);
  };

  // Effects
  useEffect(() => {
    calculatePortfolioValue();
  }, [calculatePortfolioValue]);

  useEffect(() => {
    if (timeLeft === 45 && gamePhase !== 'setup' && gamePhase !== 'results') {
      triggerMarketEvent();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, gamePhase]);

  // Render setup phase
  if (!isStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">₿</div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Crypto & DeFi Adventure
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Explore cryptocurrency trading and decentralized finance protocols
            </p>
          </div>

          <div className="bg-black bg-opacity-30 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Target className="mr-3" />
              Adventure Goals
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-lg font-semibold text-white mb-2">Trade Cryptocurrencies</h3>
                <p className="text-blue-100">Buy and sell crypto assets to maximize returns</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🌾</div>
                <h3 className="text-lg font-semibold text-white mb-2">Explore DeFi</h3>
                <p className="text-blue-100">Earn yield through lending, staking, and liquidity provision</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-lg font-semibold text-white mb-2">Navigate Volatility</h3>
                <p className="text-blue-100">Manage risk while capitalizing on market opportunities</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-black bg-opacity-30 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Available Cryptocurrencies</h2>
              <div className="space-y-4">
                {cryptocurrencies.slice(0, 3).map((crypto) => (
                  <div key={crypto.id} className="bg-white bg-opacity-10 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{crypto.icon}</span>
                        <div>
                          <h3 className="font-semibold text-white">{crypto.name}</h3>
                          <div className="text-sm text-blue-100">${crypto.price.toLocaleString()}</div>
                        </div>
                      </div>
                      <div className={`flex items-center ${crypto.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {crypto.change24h >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                        <span className="ml-1">{crypto.change24h > 0 ? '+' : ''}{crypto.change24h}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black bg-opacity-30 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">DeFi Protocols</h2>
              <div className="space-y-4">
                {defiProtocols.slice(0, 3).map((protocol) => (
                  <div key={protocol.id} className="bg-white bg-opacity-10 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{protocol.icon}</span>
                        <div>
                          <h3 className="font-semibold text-white">{protocol.name}</h3>
                          <div className="text-sm text-blue-100">{protocol.type}</div>
                        </div>
                      </div>
                      <div className="text-green-400 font-semibold">
                        {protocol.apy}% APY
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={startGame}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center text-xl"
          >
            <Play className="mr-3" size={24} />
            Start Crypto Adventure
          </button>
        </div>
      </div>
    );
  }

  // Render trading phase
  if (gamePhase === 'trading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Portfolio Dashboard */}
          <div className="bg-black bg-opacity-30 rounded-xl p-6 mb-6">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">${wallet.toLocaleString()}</div>
                <div className="text-blue-100">Available USDC</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">${totalValue.toLocaleString()}</div>
                <div className="text-blue-100">Total Portfolio</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${totalReturns >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  ${totalReturns.toLocaleString()}
                </div>
                <div className="text-blue-100">Total Returns</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${totalReturns >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {((totalReturns / 10000) * 100).toFixed(1)}%
                </div>
                <div className="text-blue-100">Return %</div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Crypto Trading */}
            <div className="bg-black bg-opacity-30 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Cryptocurrency Trading</h2>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {cryptocurrencies.map((crypto) => (
                  <div
                    key={crypto.id}
                    onClick={() => setSelectedCrypto(crypto)}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      selectedCrypto?.id === crypto.id
                        ? 'bg-purple-600 bg-opacity-50 border-2 border-purple-400'
                        : 'bg-white bg-opacity-10 hover:bg-opacity-20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{crypto.icon}</span>
                        <div>
                          <h3 className="font-semibold text-white">{crypto.name} ({crypto.symbol})</h3>
                          <div className="text-sm text-blue-100">${crypto.price.toLocaleString()}</div>
                        </div>
                      </div>
                      <div className={`flex items-center ${crypto.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {crypto.change24h >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                        <span className="ml-1">{crypto.change24h > 0 ? '+' : ''}{crypto.change24h}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {selectedCrypto && (
                <div className="mt-6 p-4 bg-purple-600 bg-opacity-20 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Buy {selectedCrypto.name}</h3>
                  <p className="text-blue-100 text-sm mb-4">{selectedCrypto.description}</p>
                  <div className="flex items-center space-x-4">
                    <input
                      type="number"
                      value={tradeAmount}
                      onChange={(e) => setTradeAmount(Math.max(0, parseInt(e.target.value) || 0))}
                      placeholder="Amount in USDC"
                      min={1}
                      max={wallet}
                      className="flex-1 px-3 py-2 bg-white bg-opacity-20 text-white rounded border border-purple-400 focus:border-purple-300 focus:outline-none"
                    />
                    <button
                      onClick={buyCrypto}
                      disabled={tradeAmount <= 0 || tradeAmount > wallet}
                      className="px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white rounded font-semibold transition-all"
                    >
                      Buy
                    </button>
                  </div>
                  <div className="text-sm text-blue-100 mt-2">
                    You&apos;ll get: {tradeAmount > 0 ? (tradeAmount / selectedCrypto.price).toFixed(4) : '0'} {selectedCrypto.symbol}
                  </div>
                </div>
              )}
            </div>

            {/* Portfolio Positions */}
            <div className="bg-black bg-opacity-30 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Your Positions</h2>
              {positions.length === 0 ? (
                <div className="text-center text-blue-100 py-8">
                  <Coins size={48} className="mx-auto mb-4 opacity-50" />
                  <p>No positions yet. Start trading or explore DeFi!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {positions.map((position, index) => (
                    <div key={index} className="p-4 bg-white bg-opacity-10 rounded-lg">
                      {position.type === 'crypto' ? (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-2xl mr-3">{(position.asset as CryptoCurrency).icon}</span>
                            <div>
                              <h3 className="font-semibold text-white">{position.asset.name}</h3>
                              <div className="text-sm text-blue-100">
                                {position.amount.toFixed(4)} {(position.asset as CryptoCurrency).symbol}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-white">
                              ${(position.amount * (position.asset as CryptoCurrency).price).toLocaleString()}
                            </div>
                            <div className={`text-sm ${
                              position.amount * (position.asset as CryptoCurrency).price > position.value ? 'text-green-400' : 'text-red-400'
                            }`}>
                              {position.entryPrice ? 
                                `${(((position.asset as CryptoCurrency).price - position.entryPrice) / position.entryPrice * 100).toFixed(1)}%` 
                                : '0%'}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-2xl mr-3">{(position.asset as DeFiProtocol).icon}</span>
                            <div>
                              <h3 className="font-semibold text-white">{position.asset.name}</h3>
                              <div className="text-sm text-blue-100">{(position.asset as DeFiProtocol).type}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-white">${position.value.toLocaleString()}</div>
                            <div className="text-green-400 text-sm">
                              {(position.asset as DeFiProtocol).apy}% APY
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 text-center">
                <button
                  onClick={() => setGamePhase('defi')}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all mr-4"
                >
                  Explore DeFi
                </button>
                <button
                  onClick={triggerMarketEvent}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all"
                >
                  Continue Adventure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render DeFi phase
  if (gamePhase === 'defi') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black bg-opacity-30 rounded-xl p-6 mb-6">
            <h1 className="text-3xl font-bold text-white mb-4 text-center">🌾 DeFi Protocols</h1>
            <p className="text-xl text-green-100 text-center">Earn yield through decentralized finance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {defiProtocols.map((protocol) => (
              <div
                key={protocol.id}
                onClick={() => setSelectedProtocol(protocol)}
                className={`bg-black bg-opacity-30 rounded-xl p-6 cursor-pointer transition-all ${
                  selectedProtocol?.id === protocol.id
                    ? 'ring-2 ring-green-400 bg-opacity-50'
                    : 'hover:bg-opacity-40'
                }`}
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{protocol.icon}</div>
                  <h3 className="text-xl font-bold text-white">{protocol.name}</h3>
                  <div className="text-green-100 capitalize">{protocol.type}</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-green-100">APY</span>
                    <span className="text-green-400 font-bold">{protocol.apy}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-100">Risk</span>
                    <span className={`font-bold ${
                      protocol.risk <= 3 ? 'text-green-400' : 
                      protocol.risk <= 6 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {protocol.risk}/10
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-100">Min Deposit</span>
                    <span className="text-white">${protocol.minDeposit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-100">Lock Period</span>
                    <span className="text-white">{protocol.lockPeriod} days</span>
                  </div>
                </div>

                <p className="text-green-100 text-sm mt-4 mb-4">{protocol.description}</p>

                <div className="space-y-2">
                  <div className="text-sm font-semibold text-white">Rewards:</div>
                  {protocol.rewards.map((reward, index) => (
                    <div key={index} className="text-xs text-green-100 flex items-center">
                      <CheckCircle size={12} className="mr-1 text-green-400" />
                      {reward}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {selectedProtocol && (
            <div className="mt-8 bg-black bg-opacity-30 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Enter {selectedProtocol.name}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-green-100 mb-4">{selectedProtocol.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-green-100">Expected APY:</span>
                      <span className="text-green-400 font-bold">{selectedProtocol.apy}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-100">Risk Level:</span>
                      <span className={`font-bold ${
                        selectedProtocol.risk <= 3 ? 'text-green-400' : 
                        selectedProtocol.risk <= 6 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {selectedProtocol.risk}/10
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-100">Lock Period:</span>
                      <span className="text-white">{selectedProtocol.lockPeriod} days</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-green-100 text-sm font-medium mb-2">
                        Deposit Amount (USDC)
                      </label>
                      <input
                        type="number"
                        value={tradeAmount}
                        onChange={(e) => setTradeAmount(Math.max(0, parseInt(e.target.value) || 0))}
                        placeholder={`Min: $${selectedProtocol.minDeposit}`}
                        min={selectedProtocol.minDeposit}
                        max={wallet}
                        className="w-full px-4 py-2 bg-white bg-opacity-20 text-white rounded border border-green-400 focus:border-green-300 focus:outline-none"
                      />
                    </div>
                    <div className="text-sm text-green-100">
                      Estimated annual yield: ${tradeAmount > 0 ? (tradeAmount * selectedProtocol.apy / 100).toLocaleString() : '0'}
                    </div>
                    <button
                      onClick={enterDeFi}
                      disabled={tradeAmount < selectedProtocol.minDeposit || tradeAmount > wallet}
                      className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white rounded-lg font-semibold transition-all"
                    >
                      Enter Protocol
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 text-center">
            <button
              onClick={() => setGamePhase('trading')}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all mr-4"
            >
              Back to Trading
            </button>
            <button
              onClick={triggerMarketEvent}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all"
            >
              Continue Adventure
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Render event phase
  if (gamePhase === 'event') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 p-6 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6">⚡</div>
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
    const returnPercentage = (totalReturns / 10000) * 100;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🏆</div>
          <h1 className="text-4xl font-bold text-white mb-8">Crypto Adventure Results</h1>

          <div className="bg-black bg-opacity-30 rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-white">${totalValue.toLocaleString()}</div>
                <div className="text-blue-100">Final Portfolio Value</div>
              </div>
              <div>
                <div className={`text-3xl font-bold ${returnPercentage >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {returnPercentage > 0 ? '+' : ''}{returnPercentage.toFixed(1)}%
                </div>
                <div className="text-blue-100">Total Return</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">{score.toFixed(0)}</div>
                <div className="text-blue-100">Adventure Score</div>
              </div>
            </div>

            <div className="text-lg text-blue-100 mb-6">
              {returnPercentage > 20 ? '🚀 Outstanding crypto performance!' :
               returnPercentage > 10 ? '💎 Great DeFi strategy!' :
               returnPercentage > 0 ? '✅ Positive adventure outcome!' :
               '📚 Learning experience - crypto is volatile!'}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Final Positions</h3>
                {positions.map((position, index) => (
                  <div key={index} className="flex justify-between items-center mb-2 text-blue-100">
                    <span>
                      {position.type === 'crypto' ? 
                        `${(position.asset as CryptoCurrency).icon} ${position.asset.name}` :
                        `${(position.asset as DeFiProtocol).icon} ${position.asset.name}`
                      }
                    </span>
                    <span>${position.value.toLocaleString()}</span>
                  </div>
                ))}
                <div className="border-t border-blue-400 pt-2 mt-2">
                  <div className="flex justify-between items-center text-white font-semibold">
                    <span>💵 Available USDC</span>
                    <span>${wallet.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Market Events</h3>
                {eventHistory.map((event, index) => (
                  <div key={index} className="text-sm text-blue-100 mb-2">
                    {event.type === 'positive' ? '📈' : event.type === 'negative' ? '📉' : '📊'} {event.title}
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
              New Adventure
            </button>
            <button
              onClick={() => onComplete(true, score)}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center"
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

export default CryptoDeFiAdventureGame;