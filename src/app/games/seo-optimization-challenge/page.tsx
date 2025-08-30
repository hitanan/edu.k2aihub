import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';

export const metadata: Metadata = createGameMetadata('seo-optimization-challenge');

export default function SEOOptimizationChallengePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            🔍 SEO Optimization Challenge
          </h1>
          <p className="text-xl text-green-200 max-w-3xl mx-auto">
            Chinh phục Google Top 1 - Thử thách tối ưu hóa SEO toàn diện từ technical đến content và link building
          </p>
        </div>

        {/* Game Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">🎯 SEO Core Skills</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Keyword research và competitive analysis</li>
                <li>• On-page optimization và content SEO</li>
                <li>• Technical SEO và site performance</li>
                <li>• Link building và authority building</li>
                <li>• Analytics và performance tracking</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">⚡ Advanced Techniques</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Schema markup và structured data</li>
                <li>• Core Web Vitals optimization</li>
                <li>• International SEO và hreflang</li>
                <li>• Voice search và featured snippets</li>
                <li>• AI content optimization</li>
              </ul>
            </div>
          </div>

          {/* SEO Challenge Categories */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🏆 Danh Mục Thử Thách</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">📝</div>
                <h4 className="font-bold mb-2">On-Page SEO</h4>
                <p className="text-sm text-gray-300 mb-3">Tối ưu nội dung và cấu trúc trang</p>
                <div className="text-xs text-green-300">
                  <div>• Title tags optimization</div>
                  <div>• Meta descriptions</div>
                  <div>• Header structure (H1-H6)</div>
                  <div>• Internal linking</div>
                </div>
              </div>
              
              <div className="bg-blue-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">⚙️</div>
                <h4 className="font-bold mb-2">Technical SEO</h4>
                <p className="text-sm text-gray-300 mb-3">Tối ưu kỹ thuật và performance</p>
                <div className="text-xs text-blue-300">
                  <div>• Site speed optimization</div>
                  <div>• Mobile responsiveness</div>
                  <div>• Crawling và indexing</div>
                  <div>• XML sitemaps</div>
                </div>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🔗</div>
                <h4 className="font-bold mb-2">Link Building</h4>
                <p className="text-sm text-gray-300 mb-3">Xây dựng authority và backlinks</p>
                <div className="text-xs text-purple-300">
                  <div>• Guest posting strategy</div>
                  <div>• Digital PR outreach</div>
                  <div>• Broken link building</div>
                  <div>• Resource page inclusion</div>
                </div>
              </div>
              
              <div className="bg-orange-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">📊</div>
                <h4 className="font-bold mb-2">Local SEO</h4>
                <p className="text-sm text-gray-300 mb-3">Tối ưu cho tìm kiếm địa phương</p>
                <div className="text-xs text-orange-300">
                  <div>• Google My Business</div>
                  <div>• Local citations</div>
                  <div>• Review management</div>
                  <div>• Local content strategy</div>
                </div>
              </div>
              
              <div className="bg-teal-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🛒</div>
                <h4 className="font-bold mb-2">E-commerce SEO</h4>
                <p className="text-sm text-gray-300 mb-3">SEO cho website bán hàng</p>
                <div className="text-xs text-teal-300">
                  <div>• Product page optimization</div>
                  <div>• Category page SEO</div>
                  <div>• Schema for products</div>
                  <div>• User-generated content</div>
                </div>
              </div>
              
              <div className="bg-pink-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">📱</div>
                <h4 className="font-bold mb-2">Mobile SEO</h4>
                <p className="text-sm text-gray-300 mb-3">Tối ưu cho thiết bị di động</p>
                <div className="text-xs text-pink-300">
                  <div>• Mobile-first indexing</div>
                  <div>• AMP implementation</div>
                  <div>• App store optimization</div>
                  <div>• Voice search optimization</div>
                </div>
              </div>
            </div>
          </div>

          {/* Challenge Levels */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">📈 Cấp Độ Thử Thách</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🌱 Beginner: &ldquo;Local Business Boost&rdquo;</h4>
                <p className="text-gray-300 mb-4">Đưa website doanh nghiệp địa phương vào top 3 Google Maps</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Target: Top 3 local pack</div>
                  <div>• Timeline: 30 ngày</div>
                  <div>• Tools: Google My Business, local directories</div>
                  <div>• KPIs: Local visibility, phone calls</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-green-500/30 rounded-full text-xs">Difficulty: ⭐⭐</span>
                </div>
              </div>
              
              <div className="bg-blue-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">💼 Intermediate: &ldquo;E-commerce Growth&rdquo;</h4>
                <p className="text-gray-300 mb-4">Tăng 300% organic traffic cho website bán hàng trong 6 tháng</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Target: 300% traffic increase</div>
                  <div>• Timeline: 6 tháng</div>
                  <div>• Focus: Product và category pages</div>
                  <div>• KPIs: Organic revenue, conversion rate</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-blue-500/30 rounded-full text-xs">Difficulty: ⭐⭐⭐</span>
                </div>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🚀 Advanced: &ldquo;Enterprise Domination&rdquo;</h4>
                <p className="text-gray-300 mb-4">Đạt top 1 cho 50+ competitive keywords trong 12 tháng</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Target: 50+ #1 rankings</div>
                  <div>• Timeline: 12 tháng</div>
                  <div>• Strategy: Complete technical overhaul</div>
                  <div>• KPIs: Domain authority, market share</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-purple-500/30 rounded-full text-xs">Difficulty: ⭐⭐⭐⭐</span>
                </div>
              </div>
              
              <div className="bg-red-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">💎 Expert: &ldquo;Algorithm Recovery&rdquo;</h4>
                <p className="text-gray-300 mb-4">Phục hồi website bị penalty và đưa về top positions</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Target: Full traffic recovery + growth</div>
                  <div>• Timeline: 6-18 tháng</div>
                  <div>• Challenge: Algorithm penalty recovery</div>
                  <div>• KPIs: Trust signals, ranking recovery</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-red-500/30 rounded-full text-xs">Difficulty: ⭐⭐⭐⭐⭐</span>
                </div>
              </div>
            </div>
          </div>

          {/* SEO Tools Arsenal */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🛠️ Kho Công Cụ SEO</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-blue-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🔍</div>
                <h5 className="font-bold text-sm">Keyword Research</h5>
                <p className="text-xs text-gray-400">Ahrefs, SEMrush, Google Keyword Planner</p>
              </div>
              
              <div className="bg-green-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">⚡</div>
                <h5 className="font-bold text-sm">Performance</h5>
                <p className="text-xs text-gray-400">PageSpeed, GTmetrix, Core Web Vitals</p>
              </div>
              
              <div className="bg-purple-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🔗</div>
                <h5 className="font-bold text-sm">Link Analysis</h5>
                <p className="text-xs text-gray-400">Majestic, Moz Link Explorer, Disavow</p>
              </div>
              
              <div className="bg-orange-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">📊</div>
                <h5 className="font-bold text-sm">Analytics</h5>
                <p className="text-xs text-gray-400">Google Analytics, Search Console, Data Studio</p>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🏆 Thành Tích Đạt Được</h3>
            <div className="bg-gradient-to-r from-green-600/10 to-teal-600/10 p-6 rounded-lg">
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400">#1</div>
                  <div className="text-sm text-gray-300">Average ranking achieved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400">500%</div>
                  <div className="text-sm text-gray-300">Traffic increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-400">95</div>
                  <div className="text-sm text-gray-300">Page Speed score</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">85+</div>
                  <div className="text-sm text-gray-300">Domain Authority</div>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="text-center bg-green-600/20 p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">🚀 Sắp Ra Mắt</h3>
            <p className="text-gray-200 mb-6">
              Platform với AI SEO analysis, real-time algorithm updates và automated optimization suggestions. Kết nối trực tiếp với Google Search Console API.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-green-300">📅 Dự kiến: Q1 2025</div>
              <div className="text-sm text-green-300">🎯 Độ tuổi: 18+</div>
              <div className="text-sm text-green-300">⏱️ Thời gian: 1-12 tháng/challenge</div>
              <div className="text-sm text-green-300">🏆 Certification: Google-recognized SEO specialist</div>
              <div className="text-sm text-green-300">🤖 AI Assistant: 24/7 optimization recommendations</div>
              <div className="text-sm text-green-300">📈 Success Rate: 92% participants achieve top 10</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}