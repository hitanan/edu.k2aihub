import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';

export const metadata: Metadata = createGameMetadata('social-media-campaign-builder');

export default function SocialMediaCampaignBuilderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            📱 Social Media Campaign Builder
          </h1>
          <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
            Trở thành chuyên gia marketing mạng xã hội - Tạo và quản lý các chiến dịch viral thành công trên mọi nền tảng
          </p>
        </div>

        {/* Game Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">🎯 Marketing Strategy</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Target audience research và persona</li>
                <li>• Content planning và calendar</li>
                <li>• Platform-specific optimization</li>
                <li>• Budget allocation và bidding</li>
                <li>• Performance tracking và analytics</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">🚀 Content Creation</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Visual design và video editing</li>
                <li>• Copywriting và storytelling</li>
                <li>• Influencer collaboration</li>
                <li>• User-generated content campaigns</li>
                <li>• Real-time engagement management</li>
              </ul>
            </div>
          </div>

          {/* Social Media Platforms */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">📱 Nền Tảng Mạng Xã Hội</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">📘</div>
                <h4 className="font-bold mb-2">Facebook/Meta</h4>
                <p className="text-sm text-gray-300 mb-3">Facebook, Instagram, Threads</p>
                <div className="text-xs text-blue-300">
                  <div>• Meta Ads Manager</div>
                  <div>• Instagram Reels strategy</div>
                  <div>• Facebook Groups marketing</div>
                </div>
              </div>
              
              <div className="bg-red-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🎥</div>
                <h4 className="font-bold mb-2">YouTube/Google</h4>
                <p className="text-sm text-gray-300 mb-3">YouTube, YouTube Shorts</p>
                <div className="text-xs text-red-300">
                  <div>• YouTube Ads campaigns</div>
                  <div>• Creator partnerships</div>
                  <div>• SEO optimization</div>
                </div>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🎵</div>
                <h4 className="font-bold mb-2">TikTok</h4>
                <p className="text-sm text-gray-300 mb-3">TikTok, TikTok Ads</p>
                <div className="text-xs text-purple-300">
                  <div>• Viral content creation</div>
                  <div>• Trend hijacking</div>
                  <div>• Hashtag challenges</div>
                </div>
              </div>
              
              <div className="bg-pink-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">📌</div>
                <h4 className="font-bold mb-2">Pinterest</h4>
                <p className="text-sm text-gray-300 mb-3">Pinterest, Pinterest Ads</p>
                <div className="text-xs text-pink-300">
                  <div>• Visual search optimization</div>
                  <div>• Seasonal campaigns</div>
                  <div>• Rich Pins strategy</div>
                </div>
              </div>
              
              <div className="bg-indigo-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">💼</div>
                <h4 className="font-bold mb-2">LinkedIn</h4>
                <p className="text-sm text-gray-300 mb-3">LinkedIn, LinkedIn Ads</p>
                <div className="text-xs text-indigo-300">
                  <div>• B2B content strategy</div>
                  <div>• Thought leadership</div>
                  <div>• Professional networking</div>
                </div>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">💬</div>
                <h4 className="font-bold mb-2">Emerging Platforms</h4>
                <p className="text-sm text-gray-300 mb-3">Snapchat, Discord, Clubhouse</p>
                <div className="text-xs text-green-300">
                  <div>• Early adopter advantage</div>
                  <div>• Niche communities</div>
                  <div>• Beta testing opportunities</div>
                </div>
              </div>
            </div>
          </div>

          {/* Campaign Types */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🎯 Loại Chiến Dịch</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-cyan-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🚀 Product Launch</h4>
                <p className="text-gray-300 mb-4">Ra mắt sản phẩm mới với chiến lược 360 độ</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Teaser campaign sequence</div>
                  <div>• Influencer early access</div>
                  <div>• Launch day event coordination</div>
                  <div>• Post-launch momentum sustaining</div>
                </div>
              </div>
              
              <div className="bg-blue-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">📈 Brand Awareness</h4>
                <p className="text-gray-300 mb-4">Tăng nhận diện thương hiệu và reach</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Brand storytelling strategy</div>
                  <div>• Visual identity consistency</div>
                  <div>• Community building tactics</div>
                  <div>• Share-of-voice optimization</div>
                </div>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">💰 Sales Conversion</h4>
                <p className="text-gray-300 mb-4">Tối ưu hóa conversion và ROI</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Funnel optimization strategy</div>
                  <div>• Retargeting campaigns</div>
                  <div>• Social commerce integration</div>
                  <div>• Attribution modeling</div>
                </div>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🎪 Event Promotion</h4>
                <p className="text-gray-300 mb-4">Quảng bá sự kiện và tăng attendance</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Event countdown campaigns</div>
                  <div>• Live streaming strategy</div>
                  <div>• FOMO creation tactics</div>
                  <div>• Post-event engagement</div>
                </div>
              </div>
            </div>
          </div>

          {/* Campaign Builder Tools */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🛠️ Công Cụ Xây Dựng Chiến Dịch</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-indigo-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">📊</div>
                <h5 className="font-bold text-sm mb-1">Analytics Dashboard</h5>
                <p className="text-xs text-gray-400">Real-time performance tracking</p>
              </div>
              
              <div className="bg-blue-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🎨</div>
                <h5 className="font-bold text-sm mb-1">Content Creator</h5>
                <p className="text-xs text-gray-400">AI-powered design tools</p>
              </div>
              
              <div className="bg-purple-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">📅</div>
                <h5 className="font-bold text-sm mb-1">Scheduler</h5>
                <p className="text-xs text-gray-400">Multi-platform posting</p>
              </div>
              
              <div className="bg-green-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🤖</div>
                <h5 className="font-bold text-sm mb-1">AI Assistant</h5>
                <p className="text-xs text-gray-400">Campaign optimization</p>
              </div>
              
              <div className="bg-orange-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">💰</div>
                <h5 className="font-bold text-sm mb-1">Budget Manager</h5>
                <p className="text-xs text-gray-400">Cost optimization</p>
              </div>
              
              <div className="bg-pink-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">👥</div>
                <h5 className="font-bold text-sm mb-1">Audience Builder</h5>
                <p className="text-xs text-gray-400">Target audience creation</p>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🏆 Câu Chuyện Thành Công</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-4 rounded-lg">
                <h4 className="font-bold mb-2">🎮 &ldquo;Gaming Chair Viral Campaign&rdquo;</h4>
                <p className="text-gray-300 text-sm mb-2">Startup ghế gaming tăng 2000% sales trong 30 ngày qua TikTok challenge</p>
                <div className="flex space-x-4 text-xs text-gray-400">
                  <span>📈 2M+ views</span>
                  <span>💰 ROI: 1500%</span>
                  <span>⏱️ 30 days</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-4 rounded-lg">
                <h4 className="font-bold mb-2">🍕 &ldquo;Local Pizza Global Fame&rdquo;</h4>
                <p className="text-gray-300 text-sm mb-2">Pizzeria địa phương trở thành franchise quốc tế nhờ Instagram Reels</p>
                <div className="flex space-x-4 text-xs text-gray-400">
                  <span>📍 50+ locations</span>
                  <span>👥 500K followers</span>
                  <span>🏆 Brand recognition</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 p-4 rounded-lg">
                <h4 className="font-bold mb-2">📚 &ldquo;EdTech Platform Explosion&rdquo;</h4>
                <p className="text-gray-300 text-sm mb-2">Nền tảng học trực tuyến thu hút 1M+ users qua LinkedIn thought leadership</p>
                <div className="flex space-x-4 text-xs text-gray-400">
                  <span>🎓 1M+ users</span>
                  <span>💡 Thought leader</span>
                  <span>📈 Series A funding</span>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="text-center bg-cyan-600/20 p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">🚀 Sắp Ra Mắt</h3>
            <p className="text-gray-200 mb-6">
              Platform với AI campaign optimization, real-time trend analysis và integrated creative suite. Kết nối với 10M+ creators và brands worldwide.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-cyan-300">📅 Dự kiến: Q1 2025</div>
              <div className="text-sm text-cyan-300">🎯 Độ tuổi: 16+</div>
              <div className="text-sm text-cyan-300">⏱️ Thời gian: 2-6 tuần/campaign</div>
              <div className="text-sm text-cyan-300">🏆 Certification: Social media marketing specialist</div>
              <div className="text-sm text-cyan-300">🤝 Partnerships: Facebook, TikTok, YouTube</div>
              <div className="text-sm text-cyan-300">💰 Budget simulator: $100 - $1M campaigns</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}