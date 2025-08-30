import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';

export const metadata: Metadata = createGameMetadata('investment-portfolio-simulator');

export default function InvestmentPortfolioSimulatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            💰 Investment Portfolio Simulator
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Trở thành nhà đầu tư chuyên nghiệp - Học cách xây dựng và quản lý danh mục đầu tư với dữ liệu thị trường thực tế
          </p>
        </div>

        {/* Game Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">📈 Investment Skills</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Portfolio diversification strategies</li>
                <li>• Risk assessment và management</li>
                <li>• Technical và fundamental analysis</li>
                <li>• Market timing và dollar-cost averaging</li>
                <li>• Tax optimization và rebalancing</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">🎯 Market Access</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Stocks, bonds, commodities, crypto</li>
                <li>• International markets (US, EU, Asia)</li>
                <li>• Real-time market data</li>
                <li>• Economic indicators tracking</li>
                <li>• News sentiment analysis</li>
              </ul>
            </div>
          </div>

          {/* Investment Categories */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">💼 Loại Tài Sản Đầu Tư</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">📊</div>
                <h4 className="font-bold mb-2">Stocks & ETFs</h4>
                <p className="text-sm text-gray-300 mb-3">Cổ phiếu và quỹ ETF</p>
                <div className="text-xs text-blue-300">
                  <div>• S&P 500, NASDAQ, VN-Index</div>
                  <div>• Sector-specific ETFs</div>
                  <div>• International exposure</div>
                  <div>• Dividend strategies</div>
                </div>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🏛️</div>
                <h4 className="font-bold mb-2">Bonds & Fixed Income</h4>
                <p className="text-sm text-gray-300 mb-3">Trái phiếu và thu nhập cố định</p>
                <div className="text-xs text-green-300">
                  <div>• Government bonds</div>
                  <div>• Corporate bonds</div>
                  <div>• Municipal bonds</div>
                  <div>• International bonds</div>
                </div>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🏠</div>
                <h4 className="font-bold mb-2">Real Estate</h4>
                <p className="text-sm text-gray-300 mb-3">Bất động sản và REITs</p>
                <div className="text-xs text-purple-300">
                  <div>• REITs (Real Estate Investment Trusts)</div>
                  <div>• Commercial real estate</div>
                  <div>• International property</div>
                  <div>• Real estate crowdfunding</div>
                </div>
              </div>
              
              <div className="bg-yellow-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🥇</div>
                <h4 className="font-bold mb-2">Commodities</h4>
                <p className="text-sm text-gray-300 mb-3">Hàng hóa và kim loại quý</p>
                <div className="text-xs text-yellow-300">
                  <div>• Gold, Silver, Platinum</div>
                  <div>• Oil, Gas, Agriculture</div>
                  <div>• Inflation hedge strategies</div>
                  <div>• Commodity ETFs</div>
                </div>
              </div>
              
              <div className="bg-orange-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">₿</div>
                <h4 className="font-bold mb-2">Cryptocurrency</h4>
                <p className="text-sm text-gray-300 mb-3">Tiền điện tử và DeFi</p>
                <div className="text-xs text-orange-300">
                  <div>• Bitcoin, Ethereum, Altcoins</div>
                  <div>• DeFi protocols</div>
                  <div>• NFTs và Web3</div>
                  <div>• Staking strategies</div>
                </div>
              </div>
              
              <div className="bg-teal-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🚀</div>
                <h4 className="font-bold mb-2">Alternative Investments</h4>
                <p className="text-sm text-gray-300 mb-3">Đầu tư thay thế</p>
                <div className="text-xs text-teal-300">
                  <div>• Private equity, Hedge funds</div>
                  <div>• Collectibles (Art, Wine)</div>
                  <div>• Peer-to-peer lending</div>
                  <div>• Startup investments</div>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Strategies */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🎯 Chiến Lược Danh Mục</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🌱 Conservative Growth</h4>
                <p className="text-gray-300 mb-4">Tăng trưởng ổn định với rủi ro thấp</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• 60% Bonds, 30% Stocks, 10% Cash</div>
                  <div>• Target return: 5-7% annually</div>
                  <div>• Risk level: Low to moderate</div>
                  <div>• Time horizon: 3-10 years</div>
                </div>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">⚖️ Balanced Portfolio</h4>
                <p className="text-gray-300 mb-4">Cân bằng tăng trưởng và bảo toàn vốn</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• 50% Stocks, 40% Bonds, 10% Alternatives</div>
                  <div>• Target return: 7-9% annually</div>
                  <div>• Risk level: Moderate</div>
                  <div>• Time horizon: 5-15 years</div>
                </div>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🚀 Aggressive Growth</h4>
                <p className="text-gray-300 mb-4">Tối đa hóa tăng trưởng dài hạn</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• 80% Stocks, 15% Alternatives, 5% Bonds</div>
                  <div>• Target return: 10-15% annually</div>
                  <div>• Risk level: High</div>
                  <div>• Time horizon: 10+ years</div>
                </div>
              </div>
              
              <div className="bg-orange-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">💰 Income Focused</h4>
                <p className="text-gray-300 mb-4">Tối ưu hóa thu nhập thụ động</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• 40% Dividend stocks, 40% Bonds, 20% REITs</div>
                  <div>• Target yield: 6-8% annually</div>
                  <div>• Risk level: Low to moderate</div>
                  <div>• Focus: Regular cash flow</div>
                </div>
              </div>
            </div>
          </div>

          {/* Simulator Features */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">⚙️ Tính Năng Mô Phỏng</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-600/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">📡</div>
                <h5 className="font-bold text-sm mb-1">Real-Time Data</h5>
                <p className="text-xs text-gray-400">Live market prices and news</p>
              </div>
              
              <div className="bg-blue-600/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🎮</div>
                <h5 className="font-bold text-sm mb-1">Backtesting</h5>
                <p className="text-xs text-gray-400">Test strategies on historical data</p>
              </div>
              
              <div className="bg-green-600/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🤖</div>
                <h5 className="font-bold text-sm mb-1">AI Advisor</h5>
                <p className="text-xs text-gray-400">Personalized investment recommendations</p>
              </div>
              
              <div className="bg-purple-600/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">⚠️</div>
                <h5 className="font-bold text-sm mb-1">Risk Analyzer</h5>
                <p className="text-xs text-gray-400">Portfolio risk assessment</p>
              </div>
              
              <div className="bg-orange-600/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">📊</div>
                <h5 className="font-bold text-sm mb-1">Performance Tracker</h5>
                <p className="text-xs text-gray-400">Detailed analytics và reporting</p>
              </div>
              
              <div className="bg-teal-600/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🎯</div>
                <h5 className="font-bold text-sm mb-1">Goal Planning</h5>
                <p className="text-xs text-gray-400">Retirement và financial goals</p>
              </div>
            </div>
          </div>

          {/* Challenge Scenarios */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🎯 Kịch Bản Thử Thách</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 p-4 rounded-lg">
                <h4 className="font-bold mb-2">🎓 &ldquo;College Fund Challenge&rdquo;</h4>
                <p className="text-gray-300 text-sm mb-2">Đầu tư $50,000 để có $200,000 cho học phí đại học sau 15 năm</p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-blue-500/20 rounded text-xs">⏱️ 15 năm</span>
                  <span className="px-2 py-1 bg-indigo-500/20 rounded text-xs">🎯 4x return</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 p-4 rounded-lg">
                <h4 className="font-bold mb-2">🏖️ &ldquo;Early Retirement Quest&rdquo;</h4>
                <p className="text-gray-300 text-sm mb-2">Tích lũy $2M để nghỉ hưu sớm trong 20 năm với $100K/năm</p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-green-500/20 rounded text-xs">⏱️ 20 năm</span>
                  <span className="px-2 py-1 bg-emerald-500/20 rounded text-xs">💰 $2M target</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-4 rounded-lg">
                <h4 className="font-bold mb-2">🌪️ &ldquo;Market Crash Recovery&rdquo;</h4>
                <p className="text-gray-300 text-sm mb-2">Phục hồi danh mục sau khi mất 40% giá trị trong market crash</p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-purple-500/20 rounded text-xs">📉 -40% start</span>
                  <span className="px-2 py-1 bg-pink-500/20 rounded text-xs">🎯 Full recovery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="text-center bg-slate-600/20 p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">🚀 Sắp Ra Mắt</h3>
            <p className="text-gray-200 mb-6">
              Platform với AI portfolio optimization, real-time market analysis và social trading features. Kết nối với major brokers để thực hiện trades thật.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-slate-300">📅 Dự kiến: Q2 2025</div>
              <div className="text-sm text-slate-300">🎯 Độ tuổi: 18+</div>
              <div className="text-sm text-slate-300">⏱️ Thời gian: Long-term simulation</div>
              <div className="text-sm text-slate-300">🏆 Certification: Portfolio management specialist</div>
              <div className="text-sm text-slate-300">💼 Broker integration: Live trading option</div>
              <div className="text-sm text-slate-300">🌍 Global markets: 50+ exchanges supported</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}