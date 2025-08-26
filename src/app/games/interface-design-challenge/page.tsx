import { Metadata } from 'next';
import { createTitle, createDescription } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle('Interface Design Challenge - Thử Thách Thiết Kế Giao Diện'),
  description: createDescription('Thử thách thiết kế giao diện tương tác với các bài tập thực tế. Phát triển kỹ năng UI/UX qua các dự án từ cơ bản đến nâng cao.'),
  keywords: ['interface design', 'UI challenge', 'thiết kế giao diện', 'UI/UX design', 'design challenge'],
  openGraph: {
    title: 'Interface Design Challenge | K2AiHub',
    description: 'Thử thách thiết kế giao diện tương tác với dự án thực tế',
    type: 'website',
  },
};

export default function InterfaceDesignChallengePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            🎨 Interface Design Challenge
          </h1>
          <p className="text-xl text-violet-200 max-w-3xl mx-auto">
            Thử thách bản thân với các dự án thiết kế giao diện thực tế - Từ wireframe đến prototype hoàn chỉnh
          </p>
        </div>

        {/* Game Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">🎯 Thử Thách Thiết Kế</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Daily UI challenges với đề bài thực tế</li>
                <li>• Client briefs mô phỏng dự án thật</li>
                <li>• Time-boxed challenges để tăng hiệu suất</li>
                <li>• Peer review và feedback system</li>
                <li>• Portfolio building tự động</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">⚡ Kỹ Năng Phát Triển</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Visual hierarchy và information design</li>
                <li>• Color theory và typography mastery</li>
                <li>• Responsive design patterns</li>
                <li>• Micro-interactions và animations</li>
                <li>• Design system thinking</li>
              </ul>
            </div>
          </div>

          {/* Challenge Categories */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🏆 Loại Thử Thách</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-blue-600/20 p-4 rounded-lg text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="font-bold mb-2">Speed Design</h4>
                <p className="text-sm text-gray-300">15-30 phút</p>
                <p className="text-xs text-blue-300 mt-1">Quick concepts</p>
              </div>
              
              <div className="bg-green-600/20 p-4 rounded-lg text-center">
                <div className="text-3xl mb-3">🎨</div>
                <h4 className="font-bold mb-2">Daily UI</h4>
                <p className="text-sm text-gray-300">1-2 giờ</p>
                <p className="text-xs text-green-300 mt-1">Complete designs</p>
              </div>
              
              <div className="bg-purple-600/20 p-4 rounded-lg text-center">
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="font-bold mb-2">Project Sprint</h4>
                <p className="text-sm text-gray-300">3-5 ngày</p>
                <p className="text-xs text-purple-300 mt-1">Full projects</p>
              </div>
              
              <div className="bg-pink-600/20 p-4 rounded-lg text-center">
                <div className="text-3xl mb-3">👥</div>
                <h4 className="font-bold mb-2">Team Challenge</h4>
                <p className="text-sm text-gray-300">1-2 tuần</p>
                <p className="text-xs text-pink-300 mt-1">Collaboration</p>
              </div>
            </div>
          </div>

          {/* Popular Challenges */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🔥 Thử Thách Phổ Biến</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-bold">📱 Mobile Banking App</h4>
                  <span className="px-3 py-1 bg-blue-500/30 rounded-full text-xs">Popular</span>
                </div>
                <p className="text-gray-300 mb-4">Thiết kế app banking với focus vào security và user experience</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-500/20 rounded text-xs">iOS Design</span>
                  <span className="px-2 py-1 bg-purple-500/20 rounded text-xs">Security</span>
                  <span className="px-2 py-1 bg-blue-500/20 rounded text-xs">FinTech</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 p-6 rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-bold">🛒 E-commerce Redesign</h4>
                  <span className="px-3 py-1 bg-green-500/30 rounded-full text-xs">Hot</span>
                </div>
                <p className="text-gray-300 mb-4">Cải thiện conversion rate cho trang e-commerce</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-green-500/20 rounded text-xs">Web Design</span>
                  <span className="px-2 py-1 bg-teal-500/20 rounded text-xs">CRO</span>
                  <span className="px-2 py-1 bg-green-500/20 rounded text-xs">Shopping</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-6 rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-bold">🎵 Music Streaming UI</h4>
                  <span className="px-3 py-1 bg-purple-500/30 rounded-full text-xs">Trending</span>
                </div>
                <p className="text-gray-300 mb-4">Tạo trải nghiệm nghe nhạc độc đáo và engaging</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-purple-500/20 rounded text-xs">Mobile</span>
                  <span className="px-2 py-1 bg-pink-500/20 rounded text-xs">Entertainment</span>
                  <span className="px-2 py-1 bg-purple-500/20 rounded text-xs">Audio</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 p-6 rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-bold">🍕 Food Delivery App</h4>
                  <span className="px-3 py-1 bg-orange-500/30 rounded-full text-xs">New</span>
                </div>
                <p className="text-gray-300 mb-4">App đặt đồ ăn với AR menu và real-time tracking</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-orange-500/20 rounded text-xs">Food Tech</span>
                  <span className="px-2 py-1 bg-red-500/20 rounded text-xs">AR/VR</span>
                  <span className="px-2 py-1 bg-orange-500/20 rounded text-xs">Logistics</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skill Progression */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">📈 Lộ Trình Học Tập</h3>
            <div className="relative">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium">Beginner</span>
                <span className="text-sm font-medium">Expert</span>
              </div>
              
              <div className="grid grid-cols-5 gap-2 mb-6">
                <div className="bg-green-500/30 p-3 rounded text-center">
                  <div className="font-bold text-sm">Level 1</div>
                  <div className="text-xs text-gray-300">Buttons & Forms</div>
                </div>
                <div className="bg-blue-500/30 p-3 rounded text-center">
                  <div className="font-bold text-sm">Level 2</div>
                  <div className="text-xs text-gray-300">Layouts & Cards</div>
                </div>
                <div className="bg-purple-500/30 p-3 rounded text-center">
                  <div className="font-bold text-sm">Level 3</div>
                  <div className="text-xs text-gray-300">Complete Pages</div>
                </div>
                <div className="bg-pink-500/30 p-3 rounded text-center">
                  <div className="font-bold text-sm">Level 4</div>
                  <div className="text-xs text-gray-300">User Flows</div>
                </div>
                <div className="bg-orange-500/30 p-3 rounded text-center">
                  <div className="font-bold text-sm">Level 5</div>
                  <div className="text-xs text-gray-300">Full Apps</div>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="text-center bg-violet-600/20 p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">🚀 Sắp Ra Mắt</h3>
            <p className="text-gray-200 mb-6">
              Nền tảng thử thách thiết kế với AI mentor, real-time feedback và community-driven challenges. Kết nối với thousands designers worldwide.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-violet-300">📅 Dự kiến: Q1 2025</div>
              <div className="text-sm text-violet-300">🎯 Độ tuổi: 14+</div>
              <div className="text-sm text-violet-300">⏱️ Thời gian: 15 phút - 2 tuần</div>
              <div className="text-sm text-violet-300">🏆 Rewards: Digital badges & certificates</div>
              <div className="text-sm text-violet-300">👥 Community: 10,000+ designers</div>
              <div className="text-sm text-violet-300">💼 Portfolio: Auto-generated</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}