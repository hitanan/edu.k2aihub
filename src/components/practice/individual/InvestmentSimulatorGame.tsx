'use client';

import React, { useState } from 'react';
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  PieChart,
  Target,
  AlertTriangle,
  Briefcase,
  Calendar,
} from 'lucide-react';

interface Stock {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  sector: string;
  risk: 'high' | 'medium' | 'low';
}

interface Portfolio {
  [key: string]: {
    shares: number;
    avgPrice: number;
  };
}

interface MarketEvent {
  id: string;
  title: string;
  description: string;
  impact: {
    [key: string]: number; // symbol -> impact percentage
  };
  duration: number; // in rounds
}

const INITIAL_STOCKS: Stock[] = [
  {
    id: 'vn30',
    symbol: 'VN30',
    name: 'Vietnam Index',
    price: 1200,
    change: 15,
    changePercent: 1.27,
    volume: 5000000,
    sector: 'Index',
    risk: 'low',
  },
  {
    id: 'vingroup',
    symbol: 'VIC',
    name: 'Vingroup',
    price: 85,
    change: -2,
    changePercent: -2.3,
    volume: 2500000,
    sector: 'Real Estate',
    risk: 'medium',
  },
  {
    id: 'vietcombank',
    symbol: 'VCB',
    name: 'Vietcombank',
    price: 92,
    change: 3,
    changePercent: 3.37,
    volume: 1800000,
    sector: 'Banking',
    risk: 'low',
  },
  {
    id: 'fpt',
    symbol: 'FPT',
    name: 'FPT Corporation',
    price: 78,
    change: 5,
    changePercent: 6.85,
    volume: 3200000,
    sector: 'Technology',
    risk: 'medium',
  },
  {
    id: 'pvgas',
    symbol: 'GAS',
    name: 'PV Gas',
    price: 115,
    change: -8,
    changePercent: -6.5,
    volume: 1200000,
    sector: 'Energy',
    risk: 'high',
  },
  {
    id: 'vinamilk',
    symbol: 'VNM',
    name: 'Vinamilk',
    price: 68,
    change: 1,
    changePercent: 1.49,
    volume: 900000,
    sector: 'Consumer Goods',
    risk: 'low',
  },
];

const MARKET_EVENTS: MarketEvent[] = [
  {
    id: 'tech-boom',
    title: 'Bùng nổ công nghệ AI',
    description: 'Đầu tư mạnh vào AI và công nghệ số làm tăng giá cổ phiếu công nghệ',
    impact: { FPT: 15, VIC: 5 },
    duration: 3,
  },
  {
    id: 'banking-regulation',
    title: 'Chính sách ngân hàng mới',
    description: 'Ngân hàng Nhà nước công bố chính sách hỗ trợ thanh khoản',
    impact: { VCB: 10, VN30: 3 },
    duration: 2,
  },
  {
    id: 'oil-crisis',
    title: 'Khủng hoảng năng lượng',
    description: 'Giá dầu thế giới tăng vọt ảnh hưởng đến các công ty năng lượng',
    impact: { GAS: -12, VN30: -2 },
    duration: 4,
  },
  {
    id: 'consumer-boost',
    title: 'Tăng trưởng tiêu dùng',
    description: 'Kinh tế phục hồi mạnh, tiêu dùng trong nước tăng cao',
    impact: { VNM: 8, VIC: 6, VN30: 4 },
    duration: 3,
  },
];

export default function InvestmentSimulatorGame() {
  const [balance, setBalance] = useState(1000000); // 1 triệu VNĐ ban đầu
  const [portfolio, setPortfolio] = useState<Portfolio>({});
  const [stocks, setStocks] = useState<Stock[]>(INITIAL_STOCKS);
  const [currentRound, setCurrentRound] = useState(1);
  const [selectedStock, setSelectedStock] = useState<string>('');
  const [tradeAmount, setTradeAmount] = useState<number>(0);
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');
  const [activeEvent, setActiveEvent] = useState<MarketEvent | null>(null);
  const [eventDuration, setEventDuration] = useState(0);
  const [gameLog, setGameLog] = useState<string[]>([]);
  const [showTutorial, setShowTutorial] = useState(true);

  // Calculate portfolio value
  const portfolioValue = Object.keys(portfolio).reduce((total, symbol) => {
    const stock = stocks.find((s) => s.symbol === symbol);
    if (stock && portfolio[symbol]) {
      return total + stock.price * portfolio[symbol].shares;
    }
    return total;
  }, 0);

  const totalAssets = balance + portfolioValue;
  const initialAssets = 1000000;
  const totalReturn = ((totalAssets - initialAssets) / initialAssets) * 100;

  // Market simulation - update prices each round
  const simulateMarket = () => {
    setStocks((prevStocks) =>
      prevStocks.map((stock) => {
        let priceChange = 0;

        // Base volatility based on risk level
        const volatility = stock.risk === 'high' ? 0.08 : stock.risk === 'medium' ? 0.05 : 0.03;
        priceChange = (Math.random() - 0.5) * 2 * volatility;

        // Apply market event effects
        if (activeEvent && activeEvent.impact[stock.symbol]) {
          priceChange += activeEvent.impact[stock.symbol] / 100;
        }

        const newPrice = Math.max(stock.price * (1 + priceChange), 1);
        const change = newPrice - stock.price;
        const changePercent = (change / stock.price) * 100;

        return {
          ...stock,
          price: Math.round(newPrice * 100) / 100,
          change: Math.round(change * 100) / 100,
          changePercent: Math.round(changePercent * 100) / 100,
          volume: Math.floor(stock.volume * (0.8 + Math.random() * 0.4)),
        };
      }),
    );
  };

  // Random market events
  const triggerRandomEvent = () => {
    if (Math.random() < 0.3 && !activeEvent) {
      // 30% chance per round
      const event = MARKET_EVENTS[Math.floor(Math.random() * MARKET_EVENTS.length)];
      setActiveEvent(event);
      setEventDuration(event.duration);
      addToLog(`📢 Sự kiện thị trường: ${event.title}`);
    }
  };

  const addToLog = (message: string) => {
    setGameLog((prev) => [`Vòng ${currentRound}: ${message}`, ...prev.slice(0, 9)]);
  };

  const executeTrade = () => {
    const stock = stocks.find((s) => s.symbol === selectedStock);
    if (!stock || tradeAmount <= 0) return;

    if (tradeType === 'buy') {
      const totalCost = stock.price * tradeAmount;
      if (totalCost > balance) {
        addToLog(`❌ Không đủ tiền để mua ${tradeAmount} cổ phiếu ${stock.symbol}`);
        return;
      }

      setBalance((prev) => prev - totalCost);
      setPortfolio((prev) => ({
        ...prev,
        [selectedStock]: {
          shares: (prev[selectedStock]?.shares || 0) + tradeAmount,
          avgPrice: prev[selectedStock]
            ? (prev[selectedStock].avgPrice * prev[selectedStock].shares + totalCost) /
              (prev[selectedStock].shares + tradeAmount)
            : stock.price,
        },
      }));

      addToLog(`✅ Mua ${tradeAmount} cổ phiếu ${stock.symbol} với giá ${stock.price.toLocaleString()} VNĐ`);
    } else {
      const currentShares = portfolio[selectedStock]?.shares || 0;
      if (tradeAmount > currentShares) {
        addToLog(`❌ Không đủ cổ phiếu ${stock.symbol} để bán`);
        return;
      }

      const sellValue = stock.price * tradeAmount;
      setBalance((prev) => prev + sellValue);
      setPortfolio((prev) => ({
        ...prev,
        [selectedStock]: {
          ...prev[selectedStock],
          shares: prev[selectedStock].shares - tradeAmount,
        },
      }));

      const profit = (stock.price - portfolio[selectedStock].avgPrice) * tradeAmount;
      addToLog(`💰 Bán ${tradeAmount} cổ phiếu ${stock.symbol} - Lãi/lỗ: ${profit.toLocaleString()} VNĐ`);
    }

    setTradeAmount(0);
  };

  const nextRound = () => {
    simulateMarket();
    triggerRandomEvent();

    if (eventDuration > 0) {
      setEventDuration((prev) => prev - 1);
      if (eventDuration === 1) {
        setActiveEvent(null);
        addToLog(`📅 Sự kiện thị trường kết thúc`);
      }
    }

    setCurrentRound((prev) => prev + 1);
    addToLog(`🔄 Chuyển sang vòng ${currentRound + 1}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-800 rounded-xl text-white">
      {/* Tutorial Modal */}
      {showTutorial && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-xl max-w-2xl mx-4">
            <h2 className="text-2xl font-bold mb-4 text-green-400">🎯 Hướng Dẫn Đầu Tư</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                • <strong>Mục tiêu:</strong> Tăng giá trị tài sản từ 1 triệu VNĐ ban đầu
              </p>
              <p>
                • <strong>Mua/Bán:</strong> Chọn cổ phiếu và số lượng để giao dịch
              </p>
              <p>
                • <strong>Rủi ro:</strong> Cổ phiếu có mức rủi ro khác nhau (thấp/trung bình/cao)
              </p>
              <p>
                • <strong>Sự kiện:</strong> Theo dõi tin tức thị trường ảnh hưởng giá cổ phiếu
              </p>
              <p>
                • <strong>Đa dạng hóa:</strong> Đầu tư nhiều lĩnh vực để giảm rủi ro
              </p>
            </div>
            <button
              onClick={() => setShowTutorial(false)}
              className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-bold"
            >
              Bắt đầu đầu tư! 🚀
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-4 mb-4">
          <DollarSign className="w-8 h-8 text-green-400" />
          <h1 className="text-3xl font-bold">Mô Phỏng Đầu Tư</h1>
          <TrendingUp className="w-8 h-8 text-blue-400" />
        </div>
      </div>

      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-green-900 p-6 rounded-lg text-center">
          <Briefcase className="w-8 h-8 text-green-400 mx-auto mb-2" />
          <div className="text-2xl font-bold">{balance.toLocaleString()} VNĐ</div>
          <div className="text-gray-300">Tiền mặt</div>
        </div>

        <div className="bg-blue-900 p-6 rounded-lg text-center">
          <PieChart className="w-8 h-8 text-blue-400 mx-auto mb-2" />
          <div className="text-2xl font-bold">{portfolioValue.toLocaleString()} VNĐ</div>
          <div className="text-gray-300">Giá trị cổ phiếu</div>
        </div>

        <div className="bg-purple-900 p-6 rounded-lg text-center">
          <Target className="w-8 h-8 text-purple-400 mx-auto mb-2" />
          <div className="text-2xl font-bold">{totalAssets.toLocaleString()} VNĐ</div>
          <div className="text-gray-300">Tổng tài sản</div>
        </div>

        <div className={`p-6 rounded-lg text-center ${totalReturn >= 0 ? 'bg-green-900' : 'bg-red-900'}`}>
          {totalReturn >= 0 ? (
            <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
          ) : (
            <TrendingDown className="w-8 h-8 text-red-400 mx-auto mb-2" />
          )}
          <div className="text-2xl font-bold">{totalReturn.toFixed(2)}%</div>
          <div className="text-gray-300">Lợi nhuận</div>
        </div>
      </div>

      {/* Market Event */}
      {activeEvent && (
        <div className="mb-6 p-4 bg-yellow-900 border border-yellow-400 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-6 h-6 text-yellow-400" />
            <h3 className="text-xl font-bold text-yellow-300">{activeEvent.title}</h3>
            <span className="text-sm bg-yellow-700 px-2 py-1 rounded">{eventDuration} vòng còn lại</span>
          </div>
          <p className="text-yellow-100">{activeEvent.description}</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Stock Market */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            📈 Thị Trường Chứng Khoán
            <span className="text-sm bg-gray-700 px-2 py-1 rounded">Vòng {currentRound}</span>
          </h2>

          <div className="space-y-4">
            {stocks.map((stock) => (
              <div
                key={stock.id}
                onClick={() => setSelectedStock(stock.symbol)}
                className={`p-4 bg-gray-700 rounded-lg cursor-pointer border-2 transition-all ${
                  selectedStock === stock.symbol
                    ? 'border-blue-400 bg-blue-900'
                    : 'border-gray-600 hover:border-gray-500'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="font-bold text-lg">{stock.symbol}</div>
                      <div className="text-gray-300">{stock.name}</div>
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          stock.risk === 'high'
                            ? 'bg-red-800 text-red-200'
                            : stock.risk === 'medium'
                              ? 'bg-yellow-800 text-yellow-200'
                              : 'bg-green-800 text-green-200'
                        }`}
                      >
                        {stock.risk === 'high' ? 'Rủi ro cao' : stock.risk === 'medium' ? 'Rủi ro TB' : 'Rủi ro thấp'}
                      </span>
                    </div>
                    <div className="text-gray-400 text-sm">{stock.sector}</div>
                  </div>

                  <div className="text-right">
                    <div className="text-2xl font-bold">{stock.price.toLocaleString()} VNĐ</div>
                    <div
                      className={`flex items-center gap-1 ${
                        stock.changePercent >= 0 ? 'text-green-400' : 'text-red-400'
                      }`}
                    >
                      {stock.changePercent >= 0 ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      <span>
                        {stock.change > 0 ? '+' : ''}
                        {stock.change.toLocaleString()}
                      </span>
                      <span>
                        ({stock.changePercent > 0 ? '+' : ''}
                        {stock.changePercent.toFixed(2)}%)
                      </span>
                    </div>
                  </div>
                </div>

                {portfolio[stock.symbol] && (
                  <div className="mt-2 pt-2 border-t border-gray-600">
                    <div className="text-sm text-blue-300">
                      Sở hữu: {portfolio[stock.symbol].shares} cổ phiếu | Giá mua TB:{' '}
                      {portfolio[stock.symbol].avgPrice.toLocaleString()} VNĐ | P&L:{' '}
                      {(
                        (stock.price - portfolio[stock.symbol].avgPrice) *
                        portfolio[stock.symbol].shares
                      ).toLocaleString()}{' '}
                      VNĐ
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Trading Panel */}
        <div className="space-y-6">
          {/* Trade Controls */}
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">🔄 Giao Dịch</h3>

            {selectedStock ? (
              <div className="space-y-4">
                <div>
                  <div className="font-bold text-lg text-blue-300">{selectedStock}</div>
                  <div className="text-sm text-gray-400">
                    Giá hiện tại: {stocks.find((s) => s.symbol === selectedStock)?.price.toLocaleString()} VNĐ
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setTradeType('buy')}
                    className={`p-3 rounded font-bold ${
                      tradeType === 'buy' ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-300'
                    }`}
                  >
                    Mua
                  </button>
                  <button
                    onClick={() => setTradeType('sell')}
                    className={`p-3 rounded font-bold ${
                      tradeType === 'sell' ? 'bg-red-600 text-white' : 'bg-gray-600 text-gray-300'
                    }`}
                  >
                    Bán
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Số lượng cổ phiếu:</label>
                  <input
                    type="number"
                    min="0"
                    value={tradeAmount}
                    onChange={(e) => setTradeAmount(Number(e.target.value))}
                    className="w-full p-3 bg-gray-600 rounded border border-gray-500 text-white"
                    placeholder="Nhập số lượng"
                  />
                </div>

                {tradeAmount > 0 && (
                  <div className="text-sm text-gray-300">
                    {tradeType === 'buy' ? 'Tổng chi phí' : 'Tổng thu được'}:{' '}
                    <span className="font-bold">
                      {((stocks.find((s) => s.symbol === selectedStock)?.price || 0) * tradeAmount).toLocaleString()}{' '}
                      VNĐ
                    </span>
                  </div>
                )}

                <button
                  onClick={executeTrade}
                  disabled={tradeAmount <= 0}
                  className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg font-bold transition-colors"
                >
                  {tradeType === 'buy' ? 'Mua' : 'Bán'} {tradeAmount} cổ phiếu
                </button>
              </div>
            ) : (
              <div className="text-center text-gray-400 py-8">Chọn một cổ phiếu để giao dịch</div>
            )}
          </div>

          {/* Game Log */}
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Nhật Ký Giao Dịch
            </h3>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {gameLog.map((log, index) => (
                <div key={index} className="text-sm text-gray-300 border-b border-gray-600 pb-1">
                  {log}
                </div>
              ))}
            </div>
          </div>

          {/* Next Round */}
          <button
            onClick={nextRound}
            className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg font-bold text-lg transition-all"
          >
            Chuyển sang vòng tiếp theo ⏭️
          </button>
        </div>
      </div>
    </div>
  );
}
