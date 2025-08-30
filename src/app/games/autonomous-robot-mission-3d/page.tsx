import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';

export const metadata: Metadata = createGameMetadata('autonomous-robot-mission-3d');

export default function AutonomousRobotMission3DPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            🤖 Autonomous Robot Mission 3D
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Điều khiển robot autonomous thực hiện missions phức tạp trong thế giới 3D - Advanced AI navigation, computer vision và sensor fusion technology
          </p>
        </div>

        {/* Game Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">🎯 Mission Objectives</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Advanced pathfinding và obstacle avoidance</li>
                <li>• Computer vision và object recognition</li>
                <li>• Sensor data fusion và decision making</li>
                <li>• Multi-robot coordination systems</li>
                <li>• Real-time navigation optimization</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">🔧 Robot Systems</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• LiDAR 3D mapping và localization</li>
                <li>• AI-powered path planning algorithms</li>
                <li>• Real-time environment analysis</li>
                <li>• Autonomous task execution</li>
                <li>• Emergency response protocols</li>
              </ul>
            </div>
          </div>

          {/* Mission Types */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🚀 Mission Categories</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🔍</div>
                <h4 className="font-bold mb-2">Search & Rescue</h4>
                <p className="text-sm text-gray-300 mb-3">Emergency response missions</p>
                <div className="text-xs text-blue-300">
                  <div>• Victim location algorithms</div>
                  <div>• Debris navigation systems</div>
                  <div>• Emergency communication</div>
                  <div>• Medical supply delivery</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-blue-500/30 rounded text-xs">Life-saving</span>
                </div>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🌱</div>
                <h4 className="font-bold mb-2">Environmental Survey</h4>
                <p className="text-sm text-gray-300 mb-3">Ecological monitoring missions</p>
                <div className="text-xs text-green-300">
                  <div>• Air quality measurement</div>
                  <div>• Wildlife tracking systems</div>
                  <div>• Pollution source detection</div>
                  <div>• Climate data collection</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-green-500/30 rounded text-xs">Eco-friendly</span>
                </div>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🏭</div>
                <h4 className="font-bold mb-2">Industrial Automation</h4>
                <p className="text-sm text-gray-300 mb-3">Manufacturing support missions</p>
                <div className="text-xs text-purple-300">
                  <div>• Quality control inspection</div>
                  <div>• Equipment maintenance</div>
                  <div>• Material transport systems</div>
                  <div>• Process optimization</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-purple-500/30 rounded text-xs">Industry 4.0</span>
                </div>
              </div>
              
              <div className="bg-orange-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🌌</div>
                <h4 className="font-bold mb-2">Space Exploration</h4>
                <p className="text-sm text-gray-300 mb-3">Extraterrestrial missions</p>
                <div className="text-xs text-orange-300">
                  <div>• Planetary surface mapping</div>
                  <div>• Resource prospecting</div>
                  <div>• Scientific sample collection</div>
                  <div>• Communication relay setup</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-orange-500/30 rounded text-xs">Frontier</span>
                </div>
              </div>
              
              <div className="bg-red-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">⚔️</div>
                <h4 className="font-bold mb-2">Security & Defense</h4>
                <p className="text-sm text-gray-300 mb-3">Protection operations</p>
                <div className="text-xs text-red-300">
                  <div>• Perimeter surveillance</div>
                  <div>• Threat detection systems</div>
                  <div>• Explosive disposal</div>
                  <div>• Strategic reconnaissance</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-red-500/30 rounded text-xs">Tactical</span>
                </div>
              </div>
              
              <div className="bg-teal-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🚗</div>
                <h4 className="font-bold mb-2">Urban Mobility</h4>
                <p className="text-sm text-gray-300 mb-3">Smart city navigation</p>
                <div className="text-xs text-teal-300">
                  <div>• Traffic flow optimization</div>
                  <div>• Autonomous delivery</div>
                  <div>• Public transport integration</div>
                  <div>• Smart parking solutions</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-teal-500/30 rounded text-xs">Smart City</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Navigation Systems */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🧠 AI Navigation Systems</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-cyan-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🗺️ Advanced Pathfinding</h4>
                <p className="text-gray-300 mb-4">Intelligent route planning và optimization</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• A* algorithm với dynamic weighting</div>
                  <div>• RRT* (Rapidly-exploring Random Tree)</div>
                  <div>• Dijkstra multi-objective optimization</div>
                  <div>• D* Lite dynamic replanning</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-cyan-500/30 rounded-full text-xs">Path optimization</span>
                </div>
              </div>
              
              <div className="bg-pink-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">👁️ Computer Vision</h4>
                <p className="text-gray-300 mb-4">Real-time visual perception systems</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• SLAM (Simultaneous Localization and Mapping)</div>
                  <div>• Object detection và classification</div>
                  <div>• Depth estimation from stereo vision</div>
                  <div>• Motion tracking và prediction</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-pink-500/30 rounded-full text-xs">Visual intelligence</span>
                </div>
              </div>
              
              <div className="bg-yellow-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">📡 Sensor Fusion</h4>
                <p className="text-gray-300 mb-4">Multi-sensor data integration</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• LiDAR point cloud processing</div>
                  <div>• IMU gyroscope và accelerometer data</div>
                  <div>• GPS positioning với RTK accuracy</div>
                  <div>• Kalman filter state estimation</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-yellow-500/30 rounded-full text-xs">Data fusion</span>
                </div>
              </div>
              
              <div className="bg-indigo-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">⚡ Real-time Decision Making</h4>
                <p className="text-gray-300 mb-4">Autonomous behavioral control</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Behavior tree architecture</div>
                  <div>• Finite state machine control</div>
                  <div>• Reinforcement learning adaptation</div>
                  <div>• Emergency response protocols</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-indigo-500/30 rounded-full text-xs">Autonomous control</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3D Environment Features */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🌍 3D Environment Features</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-blue-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🏢</div>
                <h5 className="font-bold text-sm mb-1">Dynamic Buildings</h5>
                <p className="text-xs text-gray-400">Multi-story navigation</p>
                <div className="mt-2 text-xs text-blue-300">Elevator access</div>
              </div>
              
              <div className="bg-green-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🌳</div>
                <h5 className="font-bold text-sm mb-1">Natural Terrain</h5>
                <p className="text-xs text-gray-400">Outdoor environments</p>
                <div className="mt-2 text-xs text-green-300">All-terrain mobility</div>
              </div>
              
              <div className="bg-purple-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🌊</div>
                <h5 className="font-bold text-sm mb-1">Weather Dynamics</h5>
                <p className="text-xs text-gray-400">Climate simulation</p>
                <div className="mt-2 text-xs text-purple-300">Adaptive systems</div>
              </div>
              
              <div className="bg-orange-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🚧</div>
                <h5 className="font-bold text-sm mb-1">Dynamic Obstacles</h5>
                <p className="text-xs text-gray-400">Moving barriers</p>
                <div className="mt-2 text-xs text-orange-300">Real-time adaptation</div>
              </div>
              
              <div className="bg-red-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">👥</div>
                <h5 className="font-bold text-sm mb-1">Human Interaction</h5>
                <p className="text-xs text-gray-400">Social navigation</p>
                <div className="mt-2 text-xs text-red-300">Crowd dynamics</div>
              </div>
              
              <div className="bg-teal-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🔄</div>
                <h5 className="font-bold text-sm mb-1">Day/Night Cycle</h5>
                <p className="text-xs text-gray-400">Lighting adaptation</p>
                <div className="mt-2 text-xs text-teal-300">Vision adjustment</div>
              </div>
              
              <div className="bg-pink-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🛰️</div>
                <h5 className="font-bold text-sm mb-1">GPS Integration</h5>
                <p className="text-xs text-gray-400">Real-world mapping</p>
                <div className="mt-2 text-xs text-pink-300">Precision tracking</div>
              </div>
              
              <div className="bg-cyan-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🔊</div>
                <h5 className="font-bold text-sm mb-1">Audio Navigation</h5>
                <p className="text-xs text-gray-400">Sound localization</p>
                <div className="mt-2 text-xs text-cyan-300">Acoustic mapping</div>
              </div>
            </div>
          </div>

          {/* Robot Fleet Management */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🚁 Multi-Robot Fleet Management</h3>
            <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 p-6 rounded-lg">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h5 className="font-bold mb-3 text-purple-400">🤖 Robot Types</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Ground rovers (all-terrain)</li>
                    <li>• Aerial drones (quadcopter)</li>
                    <li>• Marine robots (underwater)</li>
                    <li>• Humanoid assistants</li>
                    <li>• Specialized task robots</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-bold mb-3 text-blue-400">🔄 Coordination Systems</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Swarm intelligence algorithms</li>
                    <li>• Task allocation optimization</li>
                    <li>• Communication protocols</li>
                    <li>• Conflict resolution systems</li>
                    <li>• Load balancing strategies</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-bold mb-3 text-teal-400">📊 Fleet Analytics</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Performance monitoring</li>
                    <li>• Battery optimization</li>
                    <li>• Mission success metrics</li>
                    <li>• Predictive maintenance</li>
                    <li>• Resource allocation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Scenarios */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🎮 Interactive Mission Scenarios</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-600/20 p-6 rounded-lg">
                <h5 className="font-bold mb-3 text-blue-400">🏠 Smart Home Integration</h5>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>Cleaning automation</span>
                    <span className="text-green-400">✓ Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Security patrol</span>
                    <span className="text-green-400">✓ Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Elderly care assistance</span>
                    <span className="text-blue-400">🔄 Beta</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Garden maintenance</span>
                    <span className="text-yellow-400">⚡ Coming soon</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg">
                <h5 className="font-bold mb-3 text-green-400">🏥 Healthcare Applications</h5>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>Medicine delivery</span>
                    <span className="text-green-400">✓ Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Patient monitoring</span>
                    <span className="text-green-400">✓ Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Disinfection protocols</span>
                    <span className="text-blue-400">🔄 Beta</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergency response</span>
                    <span className="text-yellow-400">⚡ Coming soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">⚙️ Technical Specifications</h3>
            <div className="bg-gradient-to-r from-slate-600/10 to-blue-600/10 p-6 rounded-lg">
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-400">60 FPS</div>
                  <div className="text-sm text-gray-300">3D Rendering performance</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">1ms</div>
                  <div className="text-sm text-gray-300">Control loop latency</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">99.7%</div>
                  <div className="text-sm text-gray-300">Navigation accuracy</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400">100+</div>
                  <div className="text-sm text-gray-300">Simultaneous robots</div>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Outcomes */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🎓 Educational Learning Outcomes</h3>
            <div className="bg-gradient-to-r from-yellow-600/10 to-green-600/10 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold mb-3 text-yellow-400">🧮 STEM Skills</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Advanced mathematics (linear algebra, calculus)</li>
                    <li>• Physics principles (kinematics, dynamics)</li>
                    <li>• Computer science algorithms</li>
                    <li>• Engineering design thinking</li>
                    <li>• Scientific method application</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-bold mb-3 text-green-400">💻 Technical Skills</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Python/C++ robotics programming</li>
                    <li>• ROS (Robot Operating System)</li>
                    <li>• Machine learning model training</li>
                    <li>• 3D visualization techniques</li>
                    <li>• Real-time systems design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="text-center bg-purple-600/20 p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">🚀 Sắp Ra Mắt</h3>
            <p className="text-gray-200 mb-6">
              Advanced 3D robot simulation với photorealistic graphics, multi-robot fleet management, và comprehensive AI navigation systems for autonomous missions.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-purple-300">📅 Dự kiến: Q3 2025</div>
              <div className="text-sm text-purple-300">🎯 Độ tuổi: 16+ (Advanced mathematics helpful)</div>
              <div className="text-sm text-purple-300">⏱️ Mission duration: 15 minutes - 2 hours</div>
              <div className="text-sm text-purple-300">🏆 Certification: Robotics engineer + AI navigation specialist</div>
              <div className="text-sm text-purple-300">🤖 Supported platforms: Desktop, VR headsets</div>
              <div className="text-sm text-purple-300">🌐 Fleet size: Up to 100 autonomous robots</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}