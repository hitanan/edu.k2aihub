import { Metadata } from 'next';
import { createTitle, createDescription } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle('AI Art Creation Lab - Phòng Thí Nghiệm Tạo Nghệ Thuật AI'),
  description: createDescription('Sáng tạo nghệ thuật với AI tools - Midjourney, DALL-E, Stable Diffusion. Học prompt engineering và digital art techniques.'),
  keywords: ['AI art', 'Midjourney', 'DALL-E', 'Stable Diffusion', 'prompt engineering', 'digital art'],
  openGraph: {
    title: 'AI Art Creation Lab | K2AiHub',
    description: 'Phòng thí nghiệm sáng tạo nghệ thuật với AI công nghệ tiên tiến',
    type: 'website',
  },
};

export default function AIArtCreationLabPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            🎨 AI Art Creation Lab
          </h1>
          <p className="text-xl text-pink-200 max-w-3xl mx-auto">
            Phòng thí nghiệm sáng tạo nghệ thuật AI - Làm chủ Midjourney, DALL-E, Stable Diffusion để tạo ra những tác phẩm nghệ thuật tuyệt vời
          </p>
        </div>

        {/* Game Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">🎯 AI Art Skills</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Advanced prompt engineering techniques</li>
                <li>• Style transfer và artistic composition</li>
                <li>• Image editing và post-processing</li>
                <li>• Brand design và commercial applications</li>
                <li>• NFT creation và marketplace strategies</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">🚀 Creative Applications</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Book covers và publishing design</li>
                <li>• Marketing materials và social media</li>
                <li>• Game assets và character design</li>
                <li>• Architecture visualization</li>
                <li>• Fashion design và concept art</li>
              </ul>
            </div>
          </div>

          {/* AI Art Platforms */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🤖 AI Art Platforms</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🎭</div>
                <h4 className="font-bold mb-2">Midjourney</h4>
                <p className="text-sm text-gray-300 mb-3">Premium AI art với artistic style</p>
                <div className="text-xs text-blue-300">
                  <div>• V6 latest model</div>
                  <div>• Discord-based interface</div>
                  <div>• Commercial licensing</div>
                  <div>• Style references</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-blue-500/30 rounded text-xs">$30/month</span>
                </div>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🖼️</div>
                <h4 className="font-bold mb-2">DALL-E 3</h4>
                <p className="text-sm text-gray-300 mb-3">OpenAI's advanced image generator</p>
                <div className="text-xs text-green-300">
                  <div>• ChatGPT integration</div>
                  <div>• Natural language prompts</div>
                  <div>• High resolution output</div>
                  <div>• Safety guidelines</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-green-500/30 rounded text-xs">$20/month</span>
                </div>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🔬</div>
                <h4 className="font-bold mb-2">Stable Diffusion</h4>
                <p className="text-sm text-gray-300 mb-3">Open-source customizable AI</p>
                <div className="text-xs text-purple-300">
                  <div>• Local installation</div>
                  <div>• Custom model training</div>
                  <div>• LoRA adaptations</div>
                  <div>• ControlNet precision</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-purple-500/30 rounded text-xs">Free/Open</span>
                </div>
              </div>
              
              <div className="bg-orange-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">✨</div>
                <h4 className="font-bold mb-2">Adobe Firefly</h4>
                <p className="text-sm text-gray-300 mb-3">Creative Cloud integrated AI</p>
                <div className="text-xs text-orange-300">
                  <div>• Photoshop integration</div>
                  <div>• Commercial safe</div>
                  <div>• Text effects</div>
                  <div>• Vector generation</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-orange-500/30 rounded text-xs">$25/month</span>
                </div>
              </div>
              
              <div className="bg-teal-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🎪</div>
                <h4 className="font-bold mb-2">Leonardo AI</h4>
                <p className="text-sm text-gray-300 mb-3">Game-focused AI generation</p>
                <div className="text-xs text-teal-300">
                  <div>• Game asset creation</div>
                  <div>• Fine-tuned models</div>
                  <div>• Canvas editor</div>
                  <div>• Texture generation</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-teal-500/30 rounded text-xs">$12/month</span>
                </div>
              </div>
              
              <div className="bg-red-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🌟</div>
                <h4 className="font-bold mb-2">Runway ML</h4>
                <p className="text-sm text-gray-300 mb-3">AI video và advanced editing</p>
                <div className="text-xs text-red-300">
                  <div>• Video generation</div>
                  <div>• Motion brush</div>
                  <div>• Green screen AI</div>
                  <div>• Style transfer</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-red-500/30 rounded text-xs">$15/month</span>
                </div>
              </div>
            </div>
          </div>

          {/* Art Styles Mastery */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🎨 Art Styles Mastery</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-indigo-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🖌️ Classical Art Styles</h4>
                <p className="text-gray-300 mb-4">Master traditional art movements với AI interpretation</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Renaissance realism and perspective</div>
                  <div>• Impressionist light và color</div>
                  <div>• Art Nouveau decorative elements</div>
                  <div>• Surrealist dreamlike compositions</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-indigo-500/30 rounded-full text-xs">Historical accuracy</span>
                </div>
              </div>
              
              <div className="bg-pink-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🔮 Modern Digital Styles</h4>
                <p className="text-gray-300 mb-4">Contemporary digital art techniques và trends</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Synthwave và cyberpunk aesthetics</div>
                  <div>• Low-poly và geometric art</div>
                  <div>• Pixel art và 8-bit nostalgia</div>
                  <div>• Abstract generative patterns</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-pink-500/30 rounded-full text-xs">Trending styles</span>
                </div>
              </div>
              
              <div className="bg-cyan-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🎬 Cinematic Rendering</h4>
                <p className="text-gray-300 mb-4">Movie-quality lighting và composition</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Dramatic lighting setups</div>
                  <div>• Camera angle psychology</div>
                  <div>• Color grading techniques</div>
                  <div>• Atmosphere và mood creation</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-cyan-500/30 rounded-full text-xs">Professional quality</span>
                </div>
              </div>
              
              <div className="bg-emerald-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🏗️ Architectural Visualization</h4>
                <p className="text-gray-300 mb-4">3D architectural rendering với photorealism</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Interior design và furniture</div>
                  <div>• Landscape và environment</div>
                  <div>• Material textures và reflections</div>
                  <div>• Day/night lighting scenarios</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-emerald-500/30 rounded-full text-xs">Photorealistic</span>
                </div>
              </div>
            </div>
          </div>

          {/* Prompt Engineering */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🧠 Advanced Prompt Engineering</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-yellow-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">📝</div>
                <h5 className="font-bold text-sm mb-1">Descriptive Prompts</h5>
                <p className="text-xs text-gray-400">Detailed scene descriptions</p>
                <div className="mt-2 text-xs text-yellow-300">Foundation level</div>
              </div>
              
              <div className="bg-blue-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🎯</div>
                <h5 className="font-bold text-sm mb-1">Style Modifiers</h5>
                <p className="text-xs text-gray-400">Artist names và technique keywords</p>
                <div className="mt-2 text-xs text-blue-300">Intermediate</div>
              </div>
              
              <div className="bg-purple-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">⚙️</div>
                <h5 className="font-bold text-sm mb-1">Technical Parameters</h5>
                <p className="text-xs text-gray-400">Aspect ratios, quality settings</p>
                <div className="mt-2 text-xs text-purple-300">Advanced</div>
              </div>
              
              <div className="bg-green-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🔬</div>
                <h5 className="font-bold text-sm mb-1">Negative Prompts</h5>
                <p className="text-xs text-gray-400">What to avoid in generation</p>
                <div className="mt-2 text-xs text-green-300">Expert level</div>
              </div>
            </div>
          </div>

          {/* Commercial Applications */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">💼 Commercial Applications</h3>
            <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-6 rounded-lg">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h5 className="font-bold mb-3 text-purple-400">📚 Publishing Industry</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Book cover design</li>
                    <li>• Magazine illustrations</li>
                    <li>• Editorial graphics</li>
                    <li>• Children's book art</li>
                    <li>• Self-publishing assets</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-bold mb-3 text-pink-400">📱 Digital Marketing</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Social media content</li>
                    <li>• Ad campaign visuals</li>
                    <li>• Website graphics</li>
                    <li>• Product mockups</li>
                    <li>• Brand identity elements</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-bold mb-3 text-blue-400">🎮 Game Development</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Character concept art</li>
                    <li>• Environment backgrounds</li>
                    <li>• UI/UX elements</li>
                    <li>• Promotional materials</li>
                    <li>• Asset textures</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* NFT & Blockchain */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🔗 NFT & Blockchain Art</h3>
            <div className="bg-gradient-to-r from-orange-600/10 to-yellow-600/10 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold mb-3 text-orange-400">🎨 NFT Creation Process</h5>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div>• High-resolution AI art generation</div>
                    <div>• Metadata preparation và attributes</div>
                    <div>• Blockchain minting (Ethereum, Polygon)</div>
                    <div>• Marketplace listing (OpenSea, SuperRare)</div>
                    <div>• Community building và promotion</div>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-bold mb-3 text-yellow-400">💰 Monetization Strategies</h5>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div>• Limited edition collections</div>
                    <div>• Utility-based NFTs với perks</div>
                    <div>• Generative art series</div>
                    <div>• Collaborative artist drops</div>
                    <div>• Royalty structure optimization</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lab Equipment */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🔬 Lab Equipment & Tools</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-600/20 p-6 rounded-lg">
                <h5 className="font-bold mb-2 text-green-400">💻 Hardware Setup</h5>
                <div className="text-sm text-gray-400 space-y-1">
                  <div>• RTX 4090 GPU (24GB VRAM)</div>
                  <div>• 64GB RAM for large models</div>
                  <div>• 27" 4K color-accurate monitor</div>
                  <div>• Wacom Cintiq drawing tablet</div>
                  <div>• High-speed SSD storage</div>
                </div>
              </div>
              
              <div className="bg-blue-600/20 p-6 rounded-lg">
                <h5 className="font-bold mb-2 text-blue-400">🛠️ Software Suite</h5>
                <div className="text-sm text-gray-400 space-y-1">
                  <div>• Automatic1111 WebUI</div>
                  <div>• ComfyUI node-based workflow</div>
                  <div>• Photoshop với AI plugins</div>
                  <div>• DaVinci Resolve video editing</div>
                  <div>• Figma for design iteration</div>
                </div>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg">
                <h5 className="font-bold mb-2 text-purple-400">📊 Analytics Tools</h5>
                <div className="text-sm text-gray-400 space-y-1">
                  <div>• Generation cost tracking</div>
                  <div>• Style effectiveness metrics</div>
                  <div>• Market trend analysis</div>
                  <div>• Copyright compliance check</div>
                  <div>• Performance benchmarking</div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Stats */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">📈 Lab Performance Stats</h3>
            <div className="bg-gradient-to-r from-pink-600/10 to-purple-600/10 p-6 rounded-lg">
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-pink-400">50K+</div>
                  <div className="text-sm text-gray-300">Images generated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">500+</div>
                  <div className="text-sm text-gray-300">Unique styles mastered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">25</div>
                  <div className="text-sm text-gray-300">NFT collections launched</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">$85K</div>
                  <div className="text-sm text-gray-300">Total art sales</div>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="text-center bg-pink-600/20 p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">🚀 Sắp Ra Mắt</h3>
            <p className="text-gray-200 mb-6">
              Complete AI art creation platform với integrated marketplace, collaborative features, và advanced model training capabilities.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-pink-300">📅 Dự kiến: Q2 2025</div>
              <div className="text-sm text-pink-300">🎯 Độ tuổi: 14+ (Creative interest required)</div>
              <div className="text-sm text-pink-300">⏱️ Projects: 1-4 hours each</div>
              <div className="text-sm text-pink-300">🏆 Certification: AI artist + Digital creator</div>
              <div className="text-sm text-pink-300">💰 Marketplace: Direct sales integration</div>
              <div className="text-sm text-pink-300">🤝 Collaboration: Multi-artist projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}