import { Metadata } from 'next';
import { createTitle, createDescription } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle('Game Design Studio 3D - Studio Thiết Kế Game 3D'),
  description: createDescription('Tạo ra những game 3D tuyệt vời với Unity, Unreal Engine. Học game design, programming, 3D modeling và level design.'),
  keywords: ['game development', 'Unity', 'Unreal Engine', '3D modeling', 'game design', 'level design'],
  openGraph: {
    title: 'Game Design Studio 3D | K2AiHub',
    description: 'Studio thiết kế và phát triển game 3D chuyên nghiệp',
    type: 'website',
  },
};

export default function GameDesignStudio3DPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            🎮 Game Design Studio 3D
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Xây dựng studio game 3D của riêng bạn - Từ concept design đến publishing, làm chủ mọi khía cạnh của game development
          </p>
        </div>

        {/* Game Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">🎯 Game Development Pipeline</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Concept art và game design document</li>
                <li>• 3D modeling, texturing và animation</li>
                <li>• Programming với C#/C++ và scripting</li>
                <li>• Level design và world building</li>
                <li>• Testing, debugging và optimization</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">🚀 Publishing & Marketing</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Steam, Epic Games Store publishing</li>
                <li>• Mobile app store optimization</li>
                <li>• Marketing campaigns và community</li>
                <li>• Monetization strategies</li>
                <li>• Post-launch support và updates</li>
              </ul>
            </div>
          </div>

          {/* Game Genres */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🎨 Thể Loại Game Phát Triển</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-red-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">⚔️</div>
                <h4 className="font-bold mb-2">Action/Adventure</h4>
                <p className="text-sm text-gray-300 mb-3">Combat systems và exploration</p>
                <div className="text-xs text-red-300">
                  <div>• Character controllers</div>
                  <div>• Combat mechanics</div>
                  <div>• Quest systems</div>
                  <div>• Inventory management</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-red-500/30 rounded text-xs">Complexity: High</span>
                </div>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🧩</div>
                <h4 className="font-bold mb-2">Puzzle/Strategy</h4>
                <p className="text-sm text-gray-300 mb-3">Logic games và tactical thinking</p>
                <div className="text-xs text-green-300">
                  <div>• AI decision trees</div>
                  <div>• Pathfinding algorithms</div>
                  <div>• Turn-based systems</div>
                  <div>• Score systems</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-green-500/30 rounded text-xs">Logic focused</span>
                </div>
              </div>
              
              <div className="bg-blue-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🏎️</div>
                <h4 className="font-bold mb-2">Racing/Sports</h4>
                <p className="text-sm text-gray-300 mb-3">Physics simulation games</p>
                <div className="text-xs text-blue-300">
                  <div>• Vehicle physics</div>
                  <div>• Realistic handling</div>
                  <div>• Track design</div>
                  <div>• Multiplayer racing</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-blue-500/30 rounded text-xs">Physics heavy</span>
                </div>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">👻</div>
                <h4 className="font-bold mb-2">Horror/Thriller</h4>
                <p className="text-sm text-gray-300 mb-3">Atmospheric storytelling</p>
                <div className="text-xs text-purple-300">
                  <div>• Dynamic lighting</div>
                  <div>• Audio design</div>
                  <div>• Psychological effects</div>
                  <div>• Narrative structure</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-purple-500/30 rounded text-xs">Atmosphere</span>
                </div>
              </div>
              
              <div className="bg-yellow-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🌍</div>
                <h4 className="font-bold mb-2">Open World</h4>
                <p className="text-sm text-gray-300 mb-3">Massive explorable environments</p>
                <div className="text-xs text-yellow-300">
                  <div>• Procedural generation</div>
                  <div>• LOD systems</div>
                  <div>• Streaming technology</div>
                  <div>• Dynamic weather</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-yellow-500/30 rounded text-xs">Technical challenge</span>
                </div>
              </div>
              
              <div className="bg-pink-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">👥</div>
                <h4 className="font-bold mb-2">Multiplayer</h4>
                <p className="text-sm text-gray-300 mb-3">Online cooperative/competitive</p>
                <div className="text-xs text-pink-300">
                  <div>• Networking code</div>
                  <div>• Server architecture</div>
                  <div>• Matchmaking systems</div>
                  <div>• Anti-cheat measures</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-pink-500/30 rounded text-xs">Network focused</span>
                </div>
              </div>
            </div>
          </div>

          {/* Development Tools */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🛠️ Game Development Tools</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🎲 Unity Engine</h4>
                <p className="text-gray-300 mb-4">Industry-standard game engine với cross-platform support</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Visual scripting với Bolt/Visual Scripting</div>
                  <div>• 2D và 3D rendering pipelines</div>
                  <div>• Asset store với 40,000+ assets</div>
                  <div>• Mobile, PC, Console deployment</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-orange-500/30 rounded-full text-xs">C# Programming</span>
                </div>
              </div>
              
              <div className="bg-blue-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🎯 Unreal Engine</h4>
                <p className="text-gray-300 mb-4">Epic&apos;s AAA game engine với Blueprint visual scripting</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Photorealistic graphics capabilities</div>
                  <div>• Blueprint visual programming</div>
                  <div>• Marketplace với premium assets</div>
                  <div>• Advanced lighting và physics</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-blue-500/30 rounded-full text-xs">C++ & Blueprint</span>
                </div>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🎨 3D Modeling Suite</h4>
                <p className="text-gray-300 mb-4">Professional 3D content creation tools</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Blender: Free, open-source modeling</div>
                  <div>• Maya: Industry-standard animation</div>
                  <div>• Substance Suite: Texturing workflows</div>
                  <div>• ZBrush: Digital sculpting</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-green-500/30 rounded-full text-xs">Art Pipeline</span>
                </div>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🎵 Audio & Music</h4>
                <p className="text-gray-300 mb-4">Sound design và music production tools</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• FMOD: Interactive audio engine</div>
                  <div>• Wwise: Professional audio pipeline</div>
                  <div>• FL Studio: Music composition</div>
                  <div>• Audacity: Sound editing</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-purple-500/30 rounded-full text-xs">Audio Design</span>
                </div>
              </div>
            </div>
          </div>

          {/* Studio Departments */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🏢 Studio Departments</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-cyan-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">📝</div>
                <h5 className="font-bold text-sm mb-1">Game Design</h5>
                <p className="text-xs text-gray-400">Mechanics và player experience</p>
                <div className="mt-2 text-xs text-cyan-300">Lead Designer</div>
              </div>
              
              <div className="bg-red-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">💻</div>
                <h5 className="font-bold text-sm mb-1">Programming</h5>
                <p className="text-xs text-gray-400">Engine code và gameplay</p>
                <div className="mt-2 text-xs text-red-300">Tech Lead</div>
              </div>
              
              <div className="bg-green-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🎨</div>
                <h5 className="font-bold text-sm mb-1">Art & Animation</h5>
                <p className="text-xs text-gray-400">Visual assets creation</p>
                <div className="mt-2 text-xs text-green-300">Art Director</div>
              </div>
              
              <div className="bg-purple-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🧪</div>
                <h5 className="font-bold text-sm mb-1">QA Testing</h5>
                <p className="text-xs text-gray-400">Bug hunting và polish</p>
                <div className="mt-2 text-xs text-purple-300">QA Manager</div>
              </div>
            </div>
          </div>

          {/* Project Milestones */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🎯 Project Milestones</h3>
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold mb-3 text-blue-400">📋 Pre-Production (3 months)</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Game Design Document</li>
                    <li>• Technical Design Document</li>
                    <li>• Art style guide</li>
                    <li>• Prototype development</li>
                    <li>• Team assembly</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-bold mb-3 text-green-400">🏗️ Production (18 months)</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Core systems implementation</li>
                    <li>• Asset creation pipeline</li>
                    <li>• Level design và building</li>
                    <li>• Alpha/Beta testing phases</li>
                    <li>• Performance optimization</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-bold mb-3 text-orange-400">🚀 Launch (6 months)</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Marketing campaign</li>
                    <li>• Press và influencer outreach</li>
                    <li>• Platform store optimization</li>
                    <li>• Day-one patch preparation</li>
                    <li>• Community management setup</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-bold mb-3 text-purple-400">🔄 Post-Launch (Ongoing)</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Bug fixes và patches</li>
                    <li>• Content updates (DLC)</li>
                    <li>• Community feedback integration</li>
                    <li>• Performance monitoring</li>
                    <li>• Next project planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Studio Success Metrics */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">📊 Studio Success Metrics</h3>
            <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-6 rounded-lg">
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-purple-400">15</div>
                  <div className="text-sm text-gray-300">Games published</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">2.8M</div>
                  <div className="text-sm text-gray-300">Total downloads</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">4.7/5</div>
                  <div className="text-sm text-gray-300">Average rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400">$1.2M</div>
                  <div className="text-sm text-gray-300">Revenue generated</div>
                </div>
              </div>
            </div>
          </div>

          {/* Game Portfolio */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🎮 Studio Portfolio</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-red-600/20 p-6 rounded-lg">
                <h5 className="font-bold mb-2 text-red-400">🗡️ &quot;Shadow Realm&quot;</h5>
                <p className="text-sm text-gray-400 mb-2">Dark fantasy action-RPG</p>
                <div className="text-xs text-gray-500 space-y-1">
                  <div>• 500K+ downloads</div>
                  <div>• 4.8/5 rating</div>
                  <div>• PC, PlayStation, Xbox</div>
                  <div>• $400K revenue</div>
                </div>
              </div>
              
              <div className="bg-blue-600/20 p-6 rounded-lg">
                <h5 className="font-bold mb-2 text-blue-400">🚀 &quot;Stellar Drift&quot;</h5>
                <p className="text-sm text-gray-400 mb-2">Space exploration simulator</p>
                <div className="text-xs text-gray-500 space-y-1">
                  <div>• 1.2M+ downloads</div>
                  <div>• 4.6/5 rating</div>
                  <div>• PC, Mobile, Switch</div>
                  <div>• $650K revenue</div>
                </div>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg">
                <h5 className="font-bold mb-2 text-green-400">🧩 &quot;Mind Maze&quot;</h5>
                <p className="text-sm text-gray-400 mb-2">3D puzzle-adventure</p>
                <div className="text-xs text-gray-500 space-y-1">
                  <div>• 800K+ downloads</div>
                  <div>• 4.9/5 rating</div>
                  <div>• Mobile, Tablet</div>
                  <div>• $280K revenue</div>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="text-center bg-purple-600/20 p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">🚀 Sắp Ra Mắt</h3>
            <p className="text-gray-200 mb-6">
              Complete game development environment với real Unity/Unreal integration, live collaboration tools, và publishing pipeline automation.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-purple-300">📅 Dự kiến: Q3 2025</div>
              <div className="text-sm text-purple-300">🎯 Độ tuổi: 16+ (Programming knowledge helpful)</div>
              <div className="text-sm text-purple-300">⏱️ Project timeline: 2-24 months</div>
              <div className="text-sm text-purple-300">🏆 Certification: Game developer + Unity/Unreal certified</div>
              <div className="text-sm text-purple-300">💰 Monetization: Revenue sharing model</div>
              <div className="text-sm text-purple-300">🌐 Publishing: Steam, Epic, Mobile stores</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}