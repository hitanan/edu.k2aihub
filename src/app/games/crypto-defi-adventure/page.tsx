import { Metadata } from 'next';
import { createTitle, createDescription } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle('Crypto & DeFi Adventure - Cuộc Phiêu Lưu Crypto và DeFi'),
  description: createDescription('Khám phá thế giới cryptocurrency và DeFi thông qua trải nghiệm tương tác. Học trading, staking, yield farming và blockchain technology.'),
  keywords: ['cryptocurrency', 'DeFi', 'blockchain', 'crypto trading', 'yield farming', 'NFT'],
  openGraph: {
    title: 'Crypto & DeFi Adventure | K2AiHub',
    description: 'Khám phá thế giới crypto và DeFi thông qua trải nghiệm tương tác',
    type: 'website',
  },
};

export default function CryptoDeFiAdventurePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            ₿ Crypto & DeFi Adventure
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Khám phá thế giới tài chính phi tập trung - Học crypto trading, DeFi protocols, và blockchain technology qua trải nghiệm thực tế
          </p>
        </div>

        {/* Game Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">🎯 Crypto Skills</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Blockchain fundamentals và consensus mechanisms</li>
                <li>• Cryptocurrency trading strategies</li>
                <li>• DeFi protocols và yield farming</li>
                <li>• NFTs và Web3 applications</li>
                <li>• Security và wallet management</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">🚀 DeFi Ecosystem</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Decentralized exchanges (DEX)</li>
                <li>• Lending và borrowing protocols</li>
                <li>• Liquidity mining và staking</li>
                <li>• Automated market makers (AMM)</li>
                <li>• Cross-chain bridges</li>
              </ul>
            </div>
          </div>

          {/* Crypto Categories */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">💎 Thể Loại Cryptocurrency</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-orange-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">₿</div>
                <h4 className="font-bold mb-2">Bitcoin & Store of Value</h4>
                <p className="text-sm text-gray-300 mb-3">Digital gold và reserve assets</p>
                <div className="text-xs text-orange-300">
                  <div>• Bitcoin (BTC)</div>
                  <div>• Bitcoin Cash (BCH)</div>
                  <div>• Litecoin (LTC)</div>
                  <div>• Digital Gold strategies</div>
                </div>
              </div>
              
              <div className="bg-blue-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="font-bold mb-2">Smart Contract Platforms</h4>
                <p className="text-sm text-gray-300 mb-3">Programmable blockchains</p>
                <div className="text-xs text-blue-300">
                  <div>• Ethereum (ETH)</div>
                  <div>• Solana (SOL)</div>
                  <div>• Cardano (ADA)</div>
                  <div>• Binance Smart Chain (BSC)</div>
                </div>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🏦</div>
                <h4 className="font-bold mb-2">DeFi Tokens</h4>
                <p className="text-sm text-gray-300 mb-3">Decentralized finance protocols</p>
                <div className="text-xs text-green-300">
                  <div>• Uniswap (UNI)</div>
                  <div>• Aave (AAVE)</div>
                  <div>• Compound (COMP)</div>
                  <div>• MakerDAO (MKR)</div>
                </div>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🎨</div>
                <h4 className="font-bold mb-2">NFTs & Gaming</h4>
                <p className="text-sm text-gray-300 mb-3">Non-fungible tokens và metaverse</p>
                <div className="text-xs text-purple-300">
                  <div>• NFT marketplaces</div>
                  <div>• Play-to-earn games</div>
                  <div>• Virtual real estate</div>
                  <div>• Digital collectibles</div>
                </div>
              </div>
              
              <div className="bg-pink-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">💰</div>
                <h4 className="font-bold mb-2">Stablecoins & CBDCs</h4>
                <p className="text-sm text-gray-300 mb-3">Price-stable cryptocurrencies</p>
                <div className="text-xs text-pink-300">
                  <div>• USDT, USDC, DAI</div>
                  <div>• Algorithmic stablecoins</div>
                  <div>• Central Bank Digital Currencies</div>
                  <div>• Cross-border payments</div>
                </div>
              </div>
              
              <div className="bg-teal-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🌐</div>
                <h4 className="font-bold mb-2">Web3 & Infrastructure</h4>
                <p className="text-sm text-gray-300 mb-3">Decentralized internet infrastructure</p>
                <div className="text-xs text-teal-300">
                  <div>• Chainlink (LINK)</div>
                  <div>• Filecoin (FIL)</div>
                  <div>• The Graph (GRT)</div>
                  <div>• Decentralized storage</div>
                </div>
              </div>
            </div>
          </div>

          {/* DeFi Adventures */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🏛️ DeFi Adventures</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-indigo-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🌊 Liquidity Pool Master</h4>
                <p className="text-gray-300 mb-4">Cung cấp thanh khoản cho DEX và thu farming rewards</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Impermanent loss calculation</div>
                  <div>• Optimal pool selection</div>
                  <div>• Yield farming strategies</div>
                  <div>• Risk management techniques</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-indigo-500/30 rounded-full text-xs">APY: 20-200%</span>
                </div>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">💸 Flash Loan Arbitrage</h4>
                <p className="text-gray-300 mb-4">Sử dụng flash loans để thực hiện arbitrage không rủi ro</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Cross-DEX price differences</div>
                  <div>• Smart contract automation</div>
                  <div>• Gas fee optimization</div>
                  <div>• MEV (Maximal Extractable Value)</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-purple-500/30 rounded-full text-xs">Profit: $100-10K/trade</span>
                </div>
              </div>
              
              <div className="bg-blue-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🏦 DeFi Banking Empire</h4>
                <p className="text-gray-300 mb-4">Xây dựng hệ sinh thái lending/borrowing</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Collateralized lending</div>
                  <div>• Liquidation protection</div>
                  <div>• Interest rate optimization</div>
                  <div>• Multi-protocol strategies</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-blue-500/30 rounded-full text-xs">Collateral ratio management</span>
                </div>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🎮 NFT Gaming Mogul</h4>
                <p className="text-gray-300 mb-4">Đầu tư và trade NFTs trong play-to-earn games</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Game economics analysis</div>
                  <div>• Rare NFT identification</div>
                  <div>• Breeding và crafting strategies</div>
                  <div>• Community building</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-green-500/30 rounded-full text-xs">ROI tracking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trading Challenges */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">📈 Trading Challenges</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-red-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">⚡</div>
                <h5 className="font-bold text-sm mb-1">Scalping</h5>
                <p className="text-xs text-gray-400">Quick profits từ price movements</p>
                <div className="mt-2 text-xs text-red-300">1-5 minutes</div>
              </div>
              
              <div className="bg-orange-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">📊</div>
                <h5 className="font-bold text-sm mb-1">Day Trading</h5>
                <p className="text-xs text-gray-400">Intraday technical analysis</p>
                <div className="mt-2 text-xs text-orange-300">Hours</div>
              </div>
              
              <div className="bg-blue-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">📈</div>
                <h5 className="font-bold text-sm mb-1">Swing Trading</h5>
                <p className="text-xs text-gray-400">Multi-day trend following</p>
                <div className="mt-2 text-xs text-blue-300">Days-Weeks</div>
              </div>
              
              <div className="bg-green-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">💎</div>
                <h5 className="font-bold text-sm mb-1">HODLing</h5>
                <p className="text-xs text-gray-400">Long-term value investing</p>
                <div className="mt-2 text-xs text-green-300">Years</div>
              </div>
            </div>
          </div>

          {/* Security & Risk */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🛡️ Bảo Mật & Quản Lý Rủi Ro</h3>
            <div className="bg-gradient-to-r from-red-600/10 to-orange-600/10 p-6 rounded-lg">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">🔐</div>
                  <h5 className="font-bold mb-2">Wallet Security</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Hardware wallets</li>
                    <li>• Multi-signature setup</li>
                    <li>• Seed phrase backup</li>
                    <li>• Cold storage strategies</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl mb-2">⚠️</div>
                  <h5 className="font-bold mb-2">Risk Management</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Position sizing</li>
                    <li>• Stop-loss strategies</li>
                    <li>• Portfolio diversification</li>
                    <li>• Smart contract risks</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl mb-2">🕵️</div>
                  <h5 className="font-bold mb-2">Scam Prevention</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Rug pull detection</li>
                    <li>• Phishing awareness</li>
                    <li>• Due diligence process</li>
                    <li>• Community verification</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">📊 Thống Kê Thành Tích</h3>
            <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 p-6 rounded-lg">
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-purple-400">2,847%</div>
                  <div className="text-sm text-gray-300">Best portfolio gain</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">156</div>
                  <div className="text-sm text-gray-300">DeFi protocols mastered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">$1.2M</div>
                  <div className="text-sm text-gray-300">NFT collection value</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400">89%</div>
                  <div className="text-sm text-gray-300">Successful trades</div>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="text-center bg-purple-600/20 p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">🚀 Sắp Ra Mắt</h3>
            <p className="text-gray-200 mb-6">
              Platform với live trading integration, real-time DeFi protocols và metaverse experiences. Kết nối với major exchanges và wallet providers.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-purple-300">📅 Dự kiến: Q1 2025</div>
              <div className="text-sm text-purple-300">🎯 Độ tuổi: 18+ (Legal requirements)</div>
              <div className="text-sm text-purple-300">⏱️ Thời gian: Real-time markets</div>
              <div className="text-sm text-purple-300">🏆 Certification: Blockchain developer + DeFi specialist</div>
              <div className="text-sm text-purple-300">💰 Live trading: Paper + Real money options</div>
              <div className="text-sm text-purple-300">🌍 Multi-chain: Ethereum, BSC, Polygon, Solana</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}