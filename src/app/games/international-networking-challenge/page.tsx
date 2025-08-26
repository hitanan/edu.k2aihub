import { Metadata } from 'next';
import { createTitle, createDescription } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle('International Networking Challenge - Thử Thách Networking Quốc Tế'),
  description: createDescription('Phát triển kỹ năng networking quốc tế thông qua các thử thách thực tế. Học cách xây dựng mối quan hệ chuyên nghiệp xuyên biên giới.'),
  keywords: ['international networking', 'global connections', 'networking quốc tế', 'mối quan hệ kinh doanh', 'global business'],
  openGraph: {
    title: 'International Networking Challenge | K2AiHub',
    description: 'Phát triển kỹ năng networking quốc tế với các thử thách thực tế',
    type: 'website',
  },
};

export default function InternationalNetworkingChallengePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-orange-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            🌐 International Networking Challenge
          </h1>
          <p className="text-xl text-amber-200 max-w-3xl mx-auto">
            Chinh phục thế giới thông qua networking - Phát triển kỹ năng xây dựng mối quan hệ chuyên nghiệp quốc tế
          </p>
        </div>

        {/* Game Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">🎯 Kỹ Năng Networking</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Elevator pitch và self-introduction</li>
                <li>• Cross-cultural communication</li>
                <li>• Relationship building strategies</li>
                <li>• Follow-up và maintaining connections</li>
                <li>• Digital networking mastery</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">🚀 Global Opportunities</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• International partnerships</li>
                <li>• Export/import opportunities</li>
                <li>• Global talent acquisition</li>
                <li>• Cross-border investments</li>
                <li>• Cultural exchange programs</li>
              </ul>
            </div>
          </div>

          {/* Networking Environments */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🏢 Môi Trường Networking</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🏛️</div>
                <h4 className="font-bold mb-2">Business Conference</h4>
                <p className="text-sm text-gray-300 mb-3">Hội nghị kinh doanh quốc tế</p>
                <div className="text-xs text-blue-300">
                  <div>• Keynote sessions</div>
                  <div>• Panel discussions</div>
                  <div>• Networking breaks</div>
                </div>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🏪</div>
                <h4 className="font-bold mb-2">Trade Fair</h4>
                <p className="text-sm text-gray-300 mb-3">Hội chợ thương mại và triển lãm</p>
                <div className="text-xs text-green-300">
                  <div>• Product demonstrations</div>
                  <div>• Buyer meetings</div>
                  <div>• Partnership negotiations</div>
                </div>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🎓</div>
                <h4 className="font-bold mb-2">Academic Summit</h4>
                <p className="text-sm text-gray-300 mb-3">Hội thảo học thuật quốc tế</p>
                <div className="text-xs text-purple-300">
                  <div>• Research presentations</div>
                  <div>• Collaboration opportunities</div>
                  <div>• Grant discussions</div>
                </div>
              </div>
              
              <div className="bg-orange-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🚀</div>
                <h4 className="font-bold mb-2">Startup Ecosystem</h4>
                <p className="text-sm text-gray-300 mb-3">Cộng đồng khởi nghiệp toàn cầu</p>
                <div className="text-xs text-orange-300">
                  <div>• Pitch competitions</div>
                  <div>• Investor meetups</div>
                  <div>• Accelerator programs</div>
                </div>
              </div>
              
              <div className="bg-teal-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🍽️</div>
                <h4 className="font-bold mb-2">Business Dinner</h4>
                <p className="text-sm text-gray-300 mb-3">Bữa tối kinh doanh trang trọng</p>
                <div className="text-xs text-teal-300">
                  <div>• Dining etiquette</div>
                  <div>• Informal discussions</div>
                  <div>• Relationship building</div>
                </div>
              </div>
              
              <div className="bg-pink-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">💻</div>
                <h4 className="font-bold mb-2">Virtual Events</h4>
                <p className="text-sm text-gray-300 mb-3">Sự kiện networking trực tuyến</p>
                <div className="text-xs text-pink-300">
                  <div>• Digital platforms</div>
                  <div>• Breakout rooms</div>
                  <div>• Follow-up systems</div>
                </div>
              </div>
            </div>
          </div>

          {/* Challenge Categories */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🏆 Loại Thử Thách</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-amber-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">⚡ Speed Networking</h4>
                <p className="text-gray-300 mb-4">Kết nối nhanh với 20+ professionals trong 30 phút</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• 90-second introductions</div>
                  <div>• Quick value propositions</div>
                  <div>• Contact exchange efficiency</div>
                  <div>• Memorable impression tactics</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-amber-500/30 rounded-full text-xs">Difficulty: ⭐⭐</span>
                </div>
              </div>
              
              <div className="bg-yellow-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🎯 Target Networking</h4>
                <p className="text-gray-300 mb-4">Tiếp cận và kết nối với 5 người cụ thể trong sự kiện</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Research và preparation</div>
                  <div>• Strategic approach planning</div>
                  <div>• Meaningful conversation starters</div>
                  <div>• Follow-up commitment securing</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-yellow-500/30 rounded-full text-xs">Difficulty: ⭐⭐⭐</span>
                </div>
              </div>
              
              <div className="bg-orange-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🤝 Partnership Quest</h4>
                <p className="text-gray-300 mb-4">Tìm và thiết lập 1 partnership cụ thể trong 3 ngày</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Win-win opportunity identification</div>
                  <div>• Negotiation và agreement</div>
                  <div>• Legal và cultural considerations</div>
                  <div>• Implementation roadmap</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-orange-500/30 rounded-full text-xs">Difficulty: ⭐⭐⭐⭐</span>
                </div>
              </div>
              
              <div className="bg-red-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🌍 Global Expansion</h4>
                <p className="text-gray-300 mb-4">Xây dựng network để mở rộng business ra 3 quốc gia mới</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Market research networking</div>
                  <div>• Local partner identification</div>
                  <div>• Regulatory compliance contacts</div>
                  <div>• Distribution channel development</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-red-500/30 rounded-full text-xs">Difficulty: ⭐⭐⭐⭐⭐</span>
                </div>
              </div>
            </div>
          </div>

          {/* Digital Networking Tools */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">📱 Công Cụ Networking Số</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-blue-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">💼</div>
                <h5 className="font-bold text-sm">LinkedIn Pro</h5>
                <p className="text-xs text-gray-400">Advanced connection strategies</p>
              </div>
              
              <div className="bg-green-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">📧</div>
                <h5 className="font-bold text-sm">Email Mastery</h5>
                <p className="text-xs text-gray-400">Follow-up templates</p>
              </div>
              
              <div className="bg-purple-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">📊</div>
                <h5 className="font-bold text-sm">CRM Integration</h5>
                <p className="text-xs text-gray-400">Contact management</p>
              </div>
              
              <div className="bg-orange-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🎥</div>
                <h5 className="font-bold text-sm">Video Networking</h5>
                <p className="text-xs text-gray-400">Virtual meeting skills</p>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">📈 Thước Đo Thành Công</h3>
            <div className="bg-gradient-to-r from-yellow-600/10 to-amber-600/10 p-6 rounded-lg">
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-400">150+</div>
                  <div className="text-sm text-gray-300">Connections made</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-400">85%</div>
                  <div className="text-sm text-gray-300">Follow-up rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400">12</div>
                  <div className="text-sm text-gray-300">Partnerships formed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-400">$2.5M</div>
                  <div className="text-sm text-gray-300">Business generated</div>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="text-center bg-amber-600/20 p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">🚀 Sắp Ra Mắt</h3>
            <p className="text-gray-200 mb-6">
              Nền tảng được phát triển với AI matching algorithm và real-world business partnerships. Kết nối với 50,000+ professionals toàn cầu.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-amber-300">📅 Dự kiến: Q1 2025</div>
              <div className="text-sm text-amber-300">🎯 Độ tuổi: 22+</div>
              <div className="text-sm text-amber-300">⏱️ Thời gian: 2-8 giờ/challenge</div>
              <div className="text-sm text-amber-300">🏆 Certification: Global networking specialist</div>
              <div className="text-sm text-amber-300">🌍 Network: 195 countries</div>
              <div className="text-sm text-amber-300">💼 Partnerships: Real business opportunities</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}