import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';

export const metadata: Metadata = createGameMetadata('iot-smart-city-builder-3d');

export default function IoTSmartCityBuilder3DPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            🌆 IoT Smart City Builder 3D
          </h1>
          <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
            Xây dựng thành phố thông minh của tương lai - Tích hợp IoT sensors, AI systems, và sustainable technology để tạo ra urban environment hoàn hảo
          </p>
        </div>

        {/* Game Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">🎯 Smart City Technologies</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• IoT sensor networks và data collection</li>
                <li>• AI-powered traffic management</li>
                <li>• Smart grid và renewable energy</li>
                <li>• Waste management automation</li>
                <li>• Environmental monitoring systems</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">🌱 Sustainability Goals</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Carbon neutral city planning</li>
                <li>• Water conservation và recycling</li>
                <li>• Green building standards</li>
                <li>• Public transportation optimization</li>
                <li>• Circular economy implementation</li>
              </ul>
            </div>
          </div>

          {/* IoT Infrastructure */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">📡 IoT Infrastructure Components</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">📊</div>
                <h4 className="font-bold mb-2">Data Collection Layer</h4>
                <p className="text-sm text-gray-300 mb-3">Sensors và edge devices</p>
                <div className="text-xs text-blue-300">
                  <div>• Environmental sensors</div>
                  <div>• Traffic flow monitors</div>
                  <div>• Security cameras</div>
                  <div>• Smart meters</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-blue-500/30 rounded text-xs">10K+ sensors</span>
                </div>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🌐</div>
                <h4 className="font-bold mb-2">Communication Networks</h4>
                <p className="text-sm text-gray-300 mb-3">Connectivity infrastructure</p>
                <div className="text-xs text-green-300">
                  <div>• 5G cellular networks</div>
                  <div>• LoRaWAN IoT networks</div>
                  <div>• WiFi 6 hotspots</div>
                  <div>• Fiber optic backbone</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-green-500/30 rounded text-xs">Ubiquitous</span>
                </div>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🧠</div>
                <h4 className="font-bold mb-2">AI Processing Platform</h4>
                <p className="text-sm text-gray-300 mb-3">Intelligent decision making</p>
                <div className="text-xs text-purple-300">
                  <div>• Edge computing nodes</div>
                  <div>• Cloud data centers</div>
                  <div>• Machine learning models</div>
                  <div>• Predictive analytics</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-purple-500/30 rounded text-xs">Real-time</span>
                </div>
              </div>
              
              <div className="bg-orange-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">📱</div>
                <h4 className="font-bold mb-2">Citizen Applications</h4>
                <p className="text-sm text-gray-300 mb-3">Public interfaces</p>
                <div className="text-xs text-orange-300">
                  <div>• Mobile city apps</div>
                  <div>• Public information displays</div>
                  <div>• Voice assistants</div>
                  <div>• AR/VR interfaces</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-orange-500/30 rounded text-xs">User-friendly</span>
                </div>
              </div>
              
              <div className="bg-red-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🔒</div>
                <h4 className="font-bold mb-2">Security & Privacy</h4>
                <p className="text-sm text-gray-300 mb-3">Protection systems</p>
                <div className="text-xs text-red-300">
                  <div>• Encryption protocols</div>
                  <div>• Access control systems</div>
                  <div>• Privacy compliance</div>
                  <div>• Cyber threat detection</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-red-500/30 rounded text-xs">Multi-layer</span>
                </div>
              </div>
              
              <div className="bg-teal-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="font-bold mb-2">Energy Management</h4>
                <p className="text-sm text-gray-300 mb-3">Smart grid integration</p>
                <div className="text-xs text-teal-300">
                  <div>• Renewable energy sources</div>
                  <div>• Battery storage systems</div>
                  <div>• Demand response</div>
                  <div>• Grid optimization</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-teal-500/30 rounded text-xs">Sustainable</span>
                </div>
              </div>
            </div>
          </div>

          {/* Smart City Systems */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🏙️ Smart City Systems</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🚦 Intelligent Transportation</h4>
                <p className="text-gray-300 mb-4">AI-optimized traffic flow và public transit</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Adaptive traffic signal control</div>
                  <div>• Real-time route optimization</div>
                  <div>• Autonomous vehicle integration</div>
                  <div>• Multimodal trip planning</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-blue-500/30 rounded-full text-xs">35% congestion reduction</span>
                </div>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🌿 Environmental Management</h4>
                <p className="text-gray-300 mb-4">Air quality monitoring và green space optimization</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Air pollution tracking</div>
                  <div>• Noise level monitoring</div>
                  <div>• Urban heat island mitigation</div>
                  <div>• Green corridor planning</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-green-500/30 rounded-full text-xs">WHO standards compliance</span>
                </div>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🏠 Smart Buildings & Housing</h4>
                <p className="text-gray-300 mb-4">Energy-efficient building management</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Automated HVAC systems</div>
                  <div>• Smart lighting controls</div>
                  <div>• Occupancy-based optimization</div>
                  <div>• Predictive maintenance</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-purple-500/30 rounded-full text-xs">40% energy savings</span>
                </div>
              </div>
              
              <div className="bg-orange-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🗑️ Waste Management 4.0</h4>
                <p className="text-gray-300 mb-4">Automated collection và recycling optimization</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Smart bin fill-level sensors</div>
                  <div>• Dynamic collection routing</div>
                  <div>• Automated sorting systems</div>
                  <div>• Circular economy tracking</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-orange-500/30 rounded-full text-xs">80% recycling rate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Citizen Services */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">👥 Smart Citizen Services</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-pink-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🏥</div>
                <h5 className="font-bold text-sm mb-1">Healthcare IoT</h5>
                <p className="text-xs text-gray-400">Telemedicine và health monitoring</p>
                <div className="mt-2 text-xs text-pink-300">24/7 coverage</div>
              </div>
              
              <div className="bg-blue-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">📚</div>
                <h5 className="font-bold text-sm mb-1">Smart Education</h5>
                <p className="text-xs text-gray-400">Digital learning platforms</p>
                <div className="mt-2 text-xs text-blue-300">Personalized</div>
              </div>
              
              <div className="bg-green-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🛡️</div>
                <h5 className="font-bold text-sm mb-1">Public Safety</h5>
                <p className="text-xs text-gray-400">Intelligent surveillance</p>
                <div className="mt-2 text-xs text-green-300">Crime prevention</div>
              </div>
              
              <div className="bg-purple-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">💳</div>
                <h5 className="font-bold text-sm mb-1">Digital Services</h5>
                <p className="text-xs text-gray-400">E-government platforms</p>
                <div className="mt-2 text-xs text-purple-300">One-stop shop</div>
              </div>
            </div>
          </div>

          {/* Data Analytics Dashboard */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">📊 City Analytics Dashboard</h3>
            <div className="bg-gradient-to-r from-cyan-600/10 to-blue-600/10 p-6 rounded-lg">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h5 className="font-bold mb-3 text-cyan-400">🚀 Performance KPIs</h5>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex justify-between">
                      <span>Energy efficiency</span>
                      <span className="text-cyan-300">+42%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Traffic flow optimization</span>
                      <span className="text-cyan-300">+35%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Waste reduction</span>
                      <span className="text-cyan-300">+28%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Air quality improvement</span>
                      <span className="text-cyan-300">+55%</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-bold mb-3 text-blue-400">💰 Economic Impact</h5>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex justify-between">
                      <span>Operational cost savings</span>
                      <span className="text-blue-300">$25M/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span>New job creation</span>
                      <span className="text-blue-300">15,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GDP growth impact</span>
                      <span className="text-blue-300">+8.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Business attraction</span>
                      <span className="text-blue-300">+125%</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-bold mb-3 text-purple-400">😊 Citizen Satisfaction</h5>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex justify-between">
                      <span>Quality of life rating</span>
                      <span className="text-purple-300">9.2/10</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service accessibility</span>
                      <span className="text-purple-300">95%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Digital engagement</span>
                      <span className="text-purple-300">78%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Safety perception</span>
                      <span className="text-purple-300">92%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Integration */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🔧 Advanced Technology Integration</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-indigo-600/20 p-6 rounded-lg">
                <h5 className="font-bold mb-3 text-indigo-400">🤖 AI & Machine Learning</h5>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Predictive analytics for infrastructure</div>
                  <div>• Computer vision for traffic management</div>
                  <div>• Natural language processing for citizen services</div>
                  <div>• Deep learning for energy optimization</div>
                  <div>• Anomaly detection for security</div>
                </div>
              </div>
              
              <div className="bg-cyan-600/20 p-6 rounded-lg">
                <h5 className="font-bold mb-3 text-cyan-400">🌐 Blockchain & Web3</h5>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Digital identity management</div>
                  <div>• Smart contracts for services</div>
                  <div>• Transparent governance voting</div>
                  <div>• Carbon credit tokenization</div>
                  <div>• Secure data sharing protocols</div>
                </div>
              </div>
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">⚡ City Challenges & IoT Solutions</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-red-600/20 p-6 rounded-lg">
                <h5 className="font-bold mb-2 text-red-400">🚨 Emergency Response</h5>
                <p className="text-sm text-gray-400 mb-2">Natural disaster và crisis management</p>
                <div className="text-xs text-gray-500 space-y-1">
                  <div>• Early warning systems</div>
                  <div>• Automated evacuation routing</div>
                  <div>• Resource allocation optimization</div>
                  <div>• Multi-agency coordination</div>
                </div>
              </div>
              
              <div className="bg-orange-600/20 p-6 rounded-lg">
                <h5 className="font-bold mb-2 text-orange-400">🌊 Climate Adaptation</h5>
                <p className="text-sm text-gray-400 mb-2">Resilience to climate change</p>
                <div className="text-xs text-gray-500 space-y-1">
                  <div>• Flood prediction và management</div>
                  <div>• Heat wave mitigation strategies</div>
                  <div>• Drought response systems</div>
                  <div>• Extreme weather preparedness</div>
                </div>
              </div>
              
              <div className="bg-yellow-600/20 p-6 rounded-lg">
                <h5 className="font-bold mb-2 text-yellow-400">👥 Population Growth</h5>
                <p className="text-sm text-gray-400 mb-2">Urban scalability challenges</p>
                <div className="text-xs text-gray-500 space-y-1">
                  <div>• Dynamic resource allocation</div>
                  <div>• Infrastructure capacity planning</div>
                  <div>• Service demand forecasting</div>
                  <div>• Growth pattern optimization</div>
                </div>
              </div>
            </div>
          </div>

          {/* City Performance */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🏆 Smart City Performance</h3>
            <div className="bg-gradient-to-r from-cyan-600/10 to-blue-600/10 p-6 rounded-lg">
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-cyan-400">2.5M</div>
                  <div className="text-sm text-gray-300">Connected citizens</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">50TB</div>
                  <div className="text-sm text-gray-300">Daily data processed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">99.9%</div>
                  <div className="text-sm text-gray-300">System uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">15ms</div>
                  <div className="text-sm text-gray-300">Average response time</div>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="text-center bg-cyan-600/20 p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">🚀 Sắp Ra Mắt</h3>
            <p className="text-gray-200 mb-6">
              Fully immersive 3D smart city builder với real IoT integration, AI-powered optimization, và collaborative multiplayer city planning.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-cyan-300">📅 Dự kiến: Q4 2025</div>
              <div className="text-sm text-cyan-300">🎯 Độ tuổi: 16+ (Urban planning interest)</div>
              <div className="text-sm text-cyan-300">⏱️ City projects: 5-50 hours</div>
              <div className="text-sm text-cyan-300">🏆 Certification: Smart city planner + IoT architect</div>
              <div className="text-sm text-cyan-300">🌐 Real data: Live city integrations</div>
              <div className="text-sm text-cyan-300">🤝 Multiplayer: Collaborative city building</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}