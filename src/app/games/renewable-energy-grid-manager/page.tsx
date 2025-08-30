import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';

export const metadata: Metadata = createGameMetadata('renewable-energy-grid-manager');

export default function RenewableEnergyGridManagerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            ⚡ Renewable Energy Grid Manager
          </h1>
          <p className="text-xl text-green-200 max-w-3xl mx-auto">
            Trở thành chuyên gia quản lý lưới điện thông minh - Thiết kế, vận hành và tối ưu hóa hệ thống năng lượng tái tạo cho tương lai bền vững
          </p>
        </div>

        {/* Game Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">🎯 Grid Management Skills</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Smart grid architecture và design</li>
                <li>• Renewable energy integration</li>
                <li>• Energy storage optimization</li>
                <li>• Load balancing và demand response</li>
                <li>• Grid stability và power quality</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">🌱 Sustainability Goals</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Carbon footprint reduction</li>
                <li>• Energy efficiency optimization</li>
                <li>• Renewable energy maximization</li>
                <li>• Cost-effective operations</li>
                <li>• Environmental impact minimization</li>
              </ul>
            </div>
          </div>

          {/* Energy Sources */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">⚡ Nguồn Năng Lượng Tái Tạo</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-yellow-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">☀️</div>
                <h4 className="font-bold mb-2">Solar Power</h4>
                <p className="text-sm text-gray-300 mb-3">Photovoltaic và thermal systems</p>
                <div className="text-xs text-yellow-300">
                  <div>• Peak capacity: 400MW</div>
                  <div>• Efficiency: 22-25%</div>
                  <div>• Storage: 8-12 hours</div>
                  <div>• Cost: $0.03-0.05/kWh</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-yellow-500/30 rounded text-xs">Intermittent</span>
                </div>
              </div>
              
              <div className="bg-blue-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">💨</div>
                <h4 className="font-bold mb-2">Wind Power</h4>
                <p className="text-sm text-gray-300 mb-3">Onshore và offshore wind farms</p>
                <div className="text-xs text-blue-300">
                  <div>• Peak capacity: 600MW</div>
                  <div>• Capacity factor: 35-45%</div>
                  <div>• Turbine height: 150m</div>
                  <div>• Cost: $0.02-0.04/kWh</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-blue-500/30 rounded text-xs">Variable</span>
                </div>
              </div>
              
              <div className="bg-teal-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🌊</div>
                <h4 className="font-bold mb-2">Hydro Power</h4>
                <p className="text-sm text-gray-300 mb-3">Run-of-river và pumped storage</p>
                <div className="text-xs text-teal-300">
                  <div>• Peak capacity: 200MW</div>
                  <div>• Efficiency: 90%+</div>
                  <div>• Reservoir: 24 hours</div>
                  <div>• Cost: $0.02-0.03/kWh</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-teal-500/30 rounded text-xs">Dispatchable</span>
                </div>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🔋</div>
                <h4 className="font-bold mb-2">Battery Storage</h4>
                <p className="text-sm text-gray-300 mb-3">Lithium-ion và flow batteries</p>
                <div className="text-xs text-purple-300">
                  <div>• Capacity: 500MWh</div>
                  <div>• Response time: &lt;100ms</div>
                  <div>• Cycles: 10,000+</div>
                  <div>• Efficiency: 95%</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-purple-500/30 rounded text-xs">Fast Response</span>
                </div>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🌿</div>
                <h4 className="font-bold mb-2">Biomass</h4>
                <p className="text-sm text-gray-300 mb-3">Waste-to-energy và biogas</p>
                <div className="text-xs text-green-300">
                  <div>• Peak capacity: 50MW</div>
                  <div>• Availability: 24/7</div>
                  <div>• Fuel cost: Variable</div>
                  <div>• CO2 neutral</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-green-500/30 rounded text-xs">Baseload</span>
                </div>
              </div>
              
              <div className="bg-orange-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🌋</div>
                <h4 className="font-bold mb-2">Geothermal</h4>
                <p className="text-sm text-gray-300 mb-3">Ground source heat pumps</p>
                <div className="text-xs text-orange-300">
                  <div>• Peak capacity: 25MW</div>
                  <div>• Load factor: 95%</div>
                  <div>• Temperature: Stable</div>
                  <div>• Maintenance: Low</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-orange-500/30 rounded text-xs">Reliable</span>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Management Scenarios */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🎛️ Grid Management Scenarios</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-yellow-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🌅 Morning Peak Challenge</h4>
                <p className="text-gray-300 mb-4">Quản lý demand tăng cao khi mọi người thức dậy và solar chưa đạt peak</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Demand: 800MW (7-9 AM)</div>
                  <div>• Solar output: 20% capacity</div>
                  <div>• Wind: 60% capacity</div>
                  <div>• Battery discharge strategy</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-yellow-500/30 rounded-full text-xs">Difficulty: Medium</span>
                </div>
              </div>
              
              <div className="bg-orange-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">☀️ Solar Noon Surplus</h4>
                <p className="text-gray-300 mb-4">Xử lý dư thừa solar power và optimize energy storage</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Solar output: 100% (350MW)</div>
                  <div>• Demand: 600MW (12-2 PM)</div>
                  <div>• Battery charging optimization</div>
                  <div>• Grid export decisions</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-orange-500/30 rounded-full text-xs">Strategy: Storage</span>
                </div>
              </div>
              
              <div className="bg-red-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🌃 Evening Peak Crisis</h4>
                <p className="text-gray-300 mb-4">Highest demand khi solar giảm mạnh và people return home</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Demand: 1,200MW (6-8 PM)</div>
                  <div>• Solar output: 10% capacity</div>
                  <div>• All storage systems active</div>
                  <div>• Emergency backup needed</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-red-500/30 rounded-full text-xs">Difficulty: Hard</span>
                </div>
              </div>
              
              <div className="bg-blue-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">⛈️ Storm Response</h4>
                <p className="text-gray-300 mb-4">Wind farm shutdown và emergency grid islanding</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Wind shutdown: Safety protocol</div>
                  <div>• Reduced generation: 400MW</div>
                  <div>• Islanding procedures</div>
                  <div>• Critical load prioritization</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-blue-500/30 rounded-full text-xs">Emergency Protocol</span>
                </div>
              </div>
            </div>
          </div>

          {/* Smart Grid Technologies */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🤖 Smart Grid Technologies</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-cyan-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">📊</div>
                <h5 className="font-bold text-sm mb-1">SCADA Systems</h5>
                <p className="text-xs text-gray-400">Real-time monitoring và control</p>
                <div className="mt-2 text-xs text-cyan-300">99.9% uptime</div>
              </div>
              
              <div className="bg-purple-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🧠</div>
                <h5 className="font-bold text-sm mb-1">AI Forecasting</h5>
                <p className="text-xs text-gray-400">Demand và weather prediction</p>
                <div className="mt-2 text-xs text-purple-300">95% accuracy</div>
              </div>
              
              <div className="bg-green-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🏠</div>
                <h5 className="font-bold text-sm mb-1">Smart Meters</h5>
                <p className="text-xs text-gray-400">Two-way communication</p>
                <div className="mt-2 text-xs text-green-300">IoT enabled</div>
              </div>
              
              <div className="bg-orange-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">⚡</div>
                <h5 className="font-bold text-sm mb-1">Microgrids</h5>
                <p className="text-xs text-gray-400">Distributed resilience</p>
                <div className="mt-2 text-xs text-orange-300">Island capability</div>
              </div>
            </div>
          </div>

          {/* Optimization Challenges */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🎯 Tối Ưu Hóa Hệ Thống</h3>
            <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 p-6 rounded-lg">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h5 className="font-bold mb-3 text-green-400">💰 Economic Dispatch</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Merit order optimization</li>
                    <li>• Marginal cost calculations</li>
                    <li>• Market price forecasting</li>
                    <li>• Revenue maximization</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-bold mb-3 text-blue-400">⚖️ Load Balancing</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Supply-demand matching</li>
                    <li>• Frequency regulation</li>
                    <li>• Voltage control</li>
                    <li>• Reactive power management</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-bold mb-3 text-purple-400">🔄 Storage Strategy</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Charge/discharge timing</li>
                    <li>• Arbitrage opportunities</li>
                    <li>• Ancillary services</li>
                    <li>• Battery degradation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Environmental Impact */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🌍 Tác Động Môi Trường</h3>
            <div className="bg-gradient-to-r from-green-600/10 to-teal-600/10 p-6 rounded-lg">
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400">95%</div>
                  <div className="text-sm text-gray-300">CO2 reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">2.8M</div>
                  <div className="text-sm text-gray-300">tons CO2 avoided/year</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-400">85%</div>
                  <div className="text-sm text-gray-300">renewable penetration</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">$50M</div>
                  <div className="text-sm text-gray-300">carbon credit value</div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Dashboard */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">📈 Grid Performance Dashboard</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-600/20 p-6 rounded-lg">
                <h5 className="font-bold mb-3 text-green-400">⚡ Reliability Metrics</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>SAIFI (interruptions/year)</span>
                    <span className="text-green-300">0.8</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SAIDI (minutes/year)</span>
                    <span className="text-green-300">45</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Grid uptime</span>
                    <span className="text-green-300">99.91%</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-600/20 p-6 rounded-lg">
                <h5 className="font-bold mb-3 text-blue-400">💰 Economic Performance</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>LCOE ($/MWh)</span>
                    <span className="text-blue-300">$28</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Peak demand cost</span>
                    <span className="text-blue-300">$85/MWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual savings</span>
                    <span className="text-blue-300">$125M</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg">
                <h5 className="font-bold mb-3 text-purple-400">🔄 Operational Excellence</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Response time</span>
                    <span className="text-purple-300">&lt; 4 sec</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Forecast accuracy</span>
                    <span className="text-purple-300">94.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Automation level</span>
                    <span className="text-purple-300">85%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="text-center bg-green-600/20 p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">🚀 Sắp Ra Mắt</h3>
            <p className="text-gray-200 mb-6">
              Platform với real-time grid data integration, advanced AI optimization algorithms, và virtual reality grid control interface.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-green-300">📅 Dự kiến: Q2 2025</div>
              <div className="text-sm text-green-300">🎯 Độ tuổi: 14+ (Technical complexity)</div>
              <div className="text-sm text-green-300">⏱️ Thời gian: Real-time operations</div>
              <div className="text-sm text-green-300">🏆 Certification: Grid operator + Renewable energy</div>
              <div className="text-sm text-green-300">🌐 Integration: Live weather + market data</div>
              <div className="text-sm text-green-300">🎮 VR support: Immersive control room</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}