import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';

export const metadata: Metadata = createGameMetadata('energy-optimization-simulator');

export default function EnergyOptimizationSimulatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            ⚡ Energy Optimization Simulator
          </h1>
          <p className="text-xl text-emerald-200 max-w-3xl mx-auto">
            Trở thành chuyên gia tối ưu hóa năng lượng - Quản lý và tối ưu hóa tiêu thụ năng lượng trong các hệ thống thông minh
          </p>
        </div>

        {/* Game Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">🎯 Mục Tiêu Tối Ưu</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Giảm tiêu thụ năng lượng tới 40%</li>
                <li>• Tối đa hóa hiệu quả năng lượng tái tạo</li>
                <li>• Cân bằng cung cầu trong thời gian thực</li>
                <li>• Giảm phát thải carbon footprint</li>
                <li>• Tối ưu chi phí vận hành hệ thống</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">⚙️ Công Nghệ Simulator</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Real-time energy monitoring</li>
                <li>• AI-powered prediction algorithms</li>
                <li>• Smart grid simulation</li>
                <li>• Weather impact modeling</li>
                <li>• Demand response optimization</li>
              </ul>
            </div>
          </div>

          {/* System Types */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🏗️ Các Hệ Thống Năng Lượng</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🏠</div>
                <h4 className="font-bold mb-2">Smart Home</h4>
                <p className="text-sm text-gray-300">Nhà thông minh với IoT sensors</p>
                <div className="mt-3 text-xs text-blue-300">
                  <div>• Solar panels + Battery</div>
                  <div>• Smart appliances</div>
                  <div>• Automated controls</div>
                </div>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🏢</div>
                <h4 className="font-bold mb-2">Smart Building</h4>
                <p className="text-sm text-gray-300">Tòa nhà thương mại thông minh</p>
                <div className="mt-3 text-xs text-green-300">
                  <div>• HVAC optimization</div>
                  <div>• Lighting systems</div>
                  <div>• Elevator efficiency</div>
                </div>
              </div>
              
              <div className="bg-teal-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🏙️</div>
                <h4 className="font-bold mb-2">Smart City</h4>
                <p className="text-sm text-gray-300">Hệ thống năng lượng thành phố</p>
                <div className="mt-3 text-xs text-teal-300">
                  <div>• Grid management</div>
                  <div>• Public transportation</div>
                  <div>• Street lighting</div>
                </div>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🏭</div>
                <h4 className="font-bold mb-2">Industrial Plant</h4>
                <p className="text-sm text-gray-300">Nhà máy sản xuất thông minh</p>
                <div className="mt-3 text-xs text-purple-300">
                  <div>• Production scheduling</div>
                  <div>• Equipment efficiency</div>
                  <div>• Waste heat recovery</div>
                </div>
              </div>
              
              <div className="bg-orange-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🌱</div>
                <h4 className="font-bold mb-2">Renewable Farm</h4>
                <p className="text-sm text-gray-300">Trang trại năng lượng tái tạo</p>
                <div className="mt-3 text-xs text-orange-300">
                  <div>• Solar + Wind hybrid</div>
                  <div>• Energy storage</div>
                  <div>• Grid integration</div>
                </div>
              </div>
              
              <div className="bg-pink-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="font-bold mb-2">Microgrid</h4>
                <p className="text-sm text-gray-300">Lưới điện cục bộ độc lập</p>
                <div className="mt-3 text-xs text-pink-300">
                  <div>• Island operation</div>
                  <div>• Load balancing</div>
                  <div>• Backup systems</div>
                </div>
              </div>
            </div>
          </div>

          {/* Optimization Strategies */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🧠 Chiến Lược Tối Ưu</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">📊 Demand Response</h4>
                <p className="text-gray-300 mb-4">Điều chỉnh nhu cầu điện theo thời gian thực</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Peak shaving strategies</div>
                  <div>• Load shifting algorithms</div>
                  <div>• Dynamic pricing response</div>
                  <div>• Consumer behavior modeling</div>
                </div>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🔋 Energy Storage</h4>
                <p className="text-gray-300 mb-4">Quản lý và tối ưu hệ thống lưu trữ năng lượng</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Battery management systems</div>
                  <div>• Charge/discharge optimization</div>
                  <div>• Grid arbitrage strategies</div>
                  <div>• Degradation minimization</div>
                </div>
              </div>
              
              <div className="bg-teal-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🌤️ Weather Prediction</h4>
                <p className="text-gray-300 mb-4">Dự đoán thời tiết để tối ưu năng lượng tái tạo</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Solar irradiance forecasting</div>
                  <div>• Wind speed prediction</div>
                  <div>• Temperature impact analysis</div>
                  <div>• Seasonal planning</div>
                </div>
              </div>
              
              <div className="bg-blue-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🤖 AI Optimization</h4>
                <p className="text-gray-300 mb-4">Machine learning cho tối ưu hóa thông minh</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Neural network controllers</div>
                  <div>• Reinforcement learning</div>
                  <div>• Predictive maintenance</div>
                  <div>• Anomaly detection</div>
                </div>
              </div>
            </div>
          </div>

          {/* Challenge Scenarios */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🎯 Kịch Bản Thử Thách</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 p-4 rounded-lg">
                <h4 className="font-bold mb-2">🌟 &ldquo;Zero Carbon Campus&rdquo;</h4>
                <p className="text-gray-300 text-sm mb-2">Đưa một campus đại học về net-zero carbon emissions trong 5 năm</p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-green-500/20 rounded text-xs">⏱️ 3 giờ</span>
                  <span className="px-2 py-1 bg-emerald-500/20 rounded text-xs">🏆 Expert</span>
                  <span className="px-2 py-1 bg-green-500/20 rounded text-xs">💰 Budget: $50M</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600/20 to-teal-600/20 p-4 rounded-lg">
                <h4 className="font-bold mb-2">⚡ &ldquo;Blackout Recovery&rdquo;</h4>
                <p className="text-gray-300 text-sm mb-2">Khôi phục lưới điện sau sự cố mất điện toàn bộ trong 4 giờ</p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-blue-500/20 rounded text-xs">⏱️ 45 phút</span>
                  <span className="px-2 py-1 bg-teal-500/20 rounded text-xs">🚨 Emergency</span>
                  <span className="px-2 py-1 bg-blue-500/20 rounded text-xs">🎯 Crisis Mode</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-4 rounded-lg">
                <h4 className="font-bold mb-2">🌍 &ldquo;Island Microgrid&rdquo;</h4>
                <p className="text-gray-300 text-sm mb-2">Thiết kế hệ thống năng lượng độc lập cho đảo 10,000 dân</p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-purple-500/20 rounded text-xs">⏱️ 6 giờ</span>
                  <span className="px-2 py-1 bg-pink-500/20 rounded text-xs">🏝️ Isolated</span>
                  <span className="px-2 py-1 bg-purple-500/20 rounded text-xs">♻️ 100% Renewable</span>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="text-center bg-emerald-600/20 p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">🚀 Sắp Ra Mắt</h3>
            <p className="text-gray-200 mb-6">
              Simulator với physics engine chính xác và AI models được train trên dữ liệu thực từ các utility companies hàng đầu thế giới.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-emerald-300">📅 Dự kiến: Q2 2025</div>
              <div className="text-sm text-emerald-300">🎯 Độ tuổi: 16+</div>
              <div className="text-sm text-emerald-300">⏱️ Thời gian: 1-6 giờ/scenario</div>
              <div className="text-sm text-emerald-300">🏆 Certification: Energy efficiency specialist</div>
              <div className="text-sm text-emerald-300">🤝 Partnerships: Tesla, Google, Schneider Electric</div>
              <div className="text-sm text-emerald-300">💡 Innovation: Real-world impact tracking</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}