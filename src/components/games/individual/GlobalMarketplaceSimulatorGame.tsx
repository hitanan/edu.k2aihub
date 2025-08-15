import React, { useState, useEffect } from 'react';
import { Globe, ShoppingCart, Truck, TrendingUp, AlertCircle } from 'lucide-react';

interface GlobalMarketplaceSimulatorProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface MarketData {
  name: string;
  demand: number;
  competition: number;
  shippingCost: number;
  customerSat: number;
  revenue: number;
}

interface Store {
  platform: string;
  market: string;
  products: number;
  sales: number;
  rating: number;
  issues: string[];
}

export default function GlobalMarketplaceSimulator({ 
  onComplete, 
  timeLeft, 
  onRestart 
}: GlobalMarketplaceSimulatorProps) {
  const [score, setScore] = useState(0);
  const [budget, setBudget] = useState(10000);
  const [month, setMonth] = useState(1);
  const [selectedMarket, setSelectedMarket] = useState<string>('');
  const [stores, setStores] = useState<Store[]>([]);
  const [currentPhase, setCurrentPhase] = useState<'setup' | 'manage' | 'results'>('setup');

  const markets: MarketData[] = [
    { name: 'Singapore', demand: 85, competition: 70, shippingCost: 50, customerSat: 90, revenue: 0 },
    { name: 'Malaysia', demand: 75, competition: 60, shippingCost: 30, customerSat: 85, revenue: 0 },
    { name: 'Thailand', demand: 80, competition: 65, shippingCost: 35, customerSat: 80, revenue: 0 },
    { name: 'Philippines', demand: 70, competition: 55, shippingCost: 40, customerSat: 75, revenue: 0 },
    { name: 'Indonesia', demand: 90, competition: 80, shippingCost: 45, customerSat: 70, revenue: 0 },
  ];

  const platforms = [
    { name: 'Shopee', fee: 5, reach: 'High', setup: 500 },
    { name: 'Lazada', fee: 7, reach: 'High', setup: 600 },
    { name: 'Amazon', fee: 15, reach: 'Global', setup: 1000 },
    { name: 'eBay', fee: 10, reach: 'Global', setup: 800 },
  ];

  const products = [
    { name: 'Vietnamese Coffee', margin: 40, demand: 85, cultural: 'High' },
    { name: 'Handicrafts', margin: 60, demand: 70, cultural: 'Very High' },
    { name: 'Electronics', margin: 20, demand: 95, cultural: 'Low' },
    { name: 'Fashion', margin: 50, demand: 80, cultural: 'Medium' },
  ];

  const setupStore = (platform: string, market: string, productType: string) => {
    const platformData = platforms.find(p => p.name === platform);
    const marketData = markets.find(m => m.name === market);
    const productData = products.find(p => p.name === productType);
    
    if (platformData && marketData && productData && budget >= platformData.setup) {
      setBudget(prev => prev - platformData.setup);
      
      const newStore: Store = {
        platform,
        market,
        products: 1,
        sales: 0,
        rating: 4.0,
        issues: []
      };
      
      setStores(prev => [...prev, newStore]);
      setScore(prev => prev + 20);
    }
  };

  const simulateMonth = () => {
    setStores(prevStores => 
      prevStores.map(store => {
        const market = markets.find(m => m.name === store.market);
        const platform = platforms.find(p => p.name === store.platform);
        
        if (!market || !platform) return store;

        // Calculate sales based on demand, competition, and rating
        const baseSales = Math.floor(
          (market.demand / market.competition) * 
          (store.rating / 5) * 
          Math.random() * 100
        );
        
        const revenue = baseSales * 50; // Average order value
        const platformFee = revenue * (platform.fee / 100);
        const shippingCost = baseSales * market.shippingCost;
        const profit = revenue - platformFee - shippingCost;
        
        setBudget(prev => prev + profit);
        
        // Random issues
        const newIssues: string[] = [];
        if (Math.random() < 0.2) newIssues.push('Shipping delays');
        if (Math.random() < 0.15) newIssues.push('Payment disputes');
        if (Math.random() < 0.1) newIssues.push('Currency fluctuation');
        
        return {
          ...store,
          sales: store.sales + baseSales,
          rating: Math.max(3.0, store.rating + (Math.random() - 0.5) * 0.3),
          issues: newIssues
        };
      })
    );
    
    setMonth(prev => prev + 1);
    setScore(prev => prev + 10);
    
    if (month >= 6) {
      setCurrentPhase('results');
      const finalScore = Math.floor(budget / 100) + stores.length * 50;
      setScore(finalScore);
      onComplete(budget > 12000, finalScore);
    }
  };

  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);

  const renderSetupPhase = () => (
    <div className="space-y-6">
      <h4 className="text-white font-medium mb-4">📝 Thiết lập Stores Quốc tế</h4>
      
      {/* Market Selection */}
      <div>
        <h5 className="text-gray-300 mb-3">Chọn thị trường mục tiêu:</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {markets.map((market) => (
            <button
              key={market.name}
              onClick={() => setSelectedMarket(market.name)}
              className={`p-3 rounded-lg border text-left transition-all ${
                selectedMarket === market.name
                  ? 'bg-emerald-500/20 border-emerald-500/50'
                  : 'bg-gray-800/50 border-gray-600 hover:bg-gray-700/50'
              }`}
            >
              <div className="text-white font-medium">{market.name}</div>
              <div className="text-gray-400 text-sm">
                Demand: {market.demand}% | Competition: {market.competition}%
              </div>
              <div className="text-gray-400 text-sm">
                Shipping: ${market.shippingCost} | Satisfaction: {market.customerSat}%
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Platform & Product Selection */}
      {selectedMarket && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="text-gray-300 mb-3">Chọn Platform:</h5>
            {platforms.map((platform) => (
              <button
                key={platform.name}
                onClick={() => setupStore(platform.name, selectedMarket, 'Vietnamese Coffee')}
                disabled={budget < platform.setup}
                className="w-full mb-2 p-3 bg-gray-800/50 border border-gray-600 rounded-lg hover:bg-gray-700/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="text-white font-medium">{platform.name}</div>
                <div className="text-gray-400 text-sm">
                  Fee: {platform.fee}% | Setup: ${platform.setup}
                </div>
              </button>
            ))}
          </div>
          
          <div>
            <h5 className="text-gray-300 mb-3">Active Stores:</h5>
            {stores.map((store, index) => (
              <div key={index} className="mb-2 p-3 bg-green-500/20 border border-green-500/50 rounded-lg">
                <div className="text-white font-medium">{store.platform} - {store.market}</div>
                <div className="text-green-400 text-sm">Rating: {store.rating.toFixed(1)} ⭐</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {stores.length > 0 && (
        <button
          onClick={() => setCurrentPhase('manage')}
          className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white py-3 px-6 rounded-lg font-medium hover:from-emerald-600 hover:to-green-600 transition-all duration-200"
        >
          Bắt đầu Kinh doanh →
        </button>
      )}
    </div>
  );

  const renderManagePhase = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h4 className="text-white font-medium">📈 Quản lý Business - Tháng {month}</h4>
        <div className="text-emerald-400 font-bold">Budget: ${budget.toLocaleString()}</div>
      </div>

      {/* Store Performance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stores.map((store, index) => (
          <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-gray-600">
            <div className="text-white font-medium mb-2">
              {store.platform} - {store.market}
            </div>
            <div className="space-y-1 text-sm">
              <div className="text-gray-300">Sales: {store.sales} orders</div>
              <div className="text-gray-300">Rating: {store.rating.toFixed(1)} ⭐</div>
              {store.issues.length > 0 && (
                <div className="text-red-400 flex items-center">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  {store.issues.join(', ')}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Business Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <button
          onClick={simulateMonth}
          className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          <TrendingUp className="w-5 h-5 mx-auto mb-1" />
          Next Month
        </button>
        
        <button
          onClick={() => {
            setBudget(prev => prev - 500);
            setScore(prev => prev + 15);
          }}
          disabled={budget < 500}
          className="bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-600 transition-colors disabled:opacity-50"
        >
          <ShoppingCart className="w-5 h-5 mx-auto mb-1" />
          Add Products
        </button>
        
        <button
          onClick={() => {
            setBudget(prev => prev - 300);
            setScore(prev => prev + 10);
          }}
          disabled={budget < 300}
          className="bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50"
        >
          <Truck className="w-5 h-5 mx-auto mb-1" />
          Optimize Shipping
        </button>
        
        <button
          onClick={() => {
            setBudget(prev => prev - 400);
            setScore(prev => prev + 12);
          }}
          disabled={budget < 400}
          className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50"
        >
          <Globe className="w-5 h-5 mx-auto mb-1" />
          Marketing
        </button>
      </div>

      <div className="text-center text-gray-400 text-sm">
        Mục tiêu: Đạt $12,000 budget sau 6 tháng để thành công
      </div>
    </div>
  );

  const renderResultsPhase = () => (
    <div className="text-center space-y-4">
      <h4 className="text-2xl font-bold text-white">🎉 Kết quả Kinh doanh</h4>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-emerald-500/20 border border-emerald-500/50 rounded-lg p-4">
          <div className="text-emerald-400 text-2xl font-bold">${budget.toLocaleString()}</div>
          <div className="text-gray-300">Final Budget</div>
        </div>
        
        <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg p-4">
          <div className="text-blue-400 text-2xl font-bold">{stores.length}</div>
          <div className="text-gray-300">Active Stores</div>
        </div>
      </div>

      <div className="text-gray-300">
        {budget > 15000 ? '🏆 Xuất sắc! Bạn đã xây dựng empire thành công!' :
         budget > 12000 ? '🎯 Thành công! Kinh doanh quốc tế hiệu quả!' :
         '📈 Cần cải thiện chiến lược và quản lý tốt hơn.'}
      </div>

      <button
        onClick={() => onComplete(budget > 12000, score)}
        className="bg-gradient-to-r from-emerald-500 to-green-500 text-white py-3 px-6 rounded-lg font-medium hover:from-emerald-600 hover:to-green-600 transition-all duration-200"
      >
        Hoàn thành Simulation ✓
      </button>
    </div>
  );

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2 flex items-center">
          <Globe className="w-6 h-6 mr-2" />
          Mô Phỏng Thương Mại Quốc Tế
        </h3>
        <div className="text-emerald-400 font-medium">Điểm: {score} | Budget: ${budget.toLocaleString()}</div>
      </div>

      {currentPhase === 'setup' && renderSetupPhase()}
      {currentPhase === 'manage' && renderManagePhase()}
      {currentPhase === 'results' && renderResultsPhase()}
    </div>
  );
}
