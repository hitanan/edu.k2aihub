import { Metadata } from 'next';
import { createTitle, createDescription } from '@/utils/seo';
import DroneCropMonitoring3D from '@/components/games/individual/DroneCropMonitoring3D';

export const metadata: Metadata = {
  title: createTitle('Drone Crop Monitoring 3D - Mô Phỏng Drone Nông Nghiệp 3D'),
  description: createDescription(
    'Điều khiển drone nông nghiệp 3D để giám sát cây trồng, phân tích sức khỏe cây trồng và thực hiện nhiệm vụ precision farming trong môi trường trang trại chân thực.'
  ),
  keywords: [
    'drone nông nghiệp',
    'precision farming',
    'mô phỏng 3D',
    'giám sát cây trồng',
    'công nghệ xanh',
    'nông nghiệp thông minh',
    'K2AI'
  ],
  openGraph: {    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',

    title: 'Drone Crop Monitoring 3D - Mô Phỏng Drone Nông Nghiệp | K2AiHub',
    description: 'Điều khiển drone nông nghiệp 3D cho precision farming và giám sát cây trồng thông minh.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('K2AiHub Educational Content'),
    description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
  },
};

export default function DroneCropMonitoring3DPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Game Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🚁</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Drone Crop Monitoring 3D
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Khám phá tương lai của nông nghiệp thông minh với drone 3D. Điều khiển drone để giám sát cây trồng, 
            phân tích sức khỏe thực vật và thực hiện các nhiệm vụ precision farming trong môi trường trang trại chân thực.
          </p>
        </div>

        {/* Game Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🌾</div>
            <h3 className="text-lg font-semibold text-white mb-2">Giám Sát Cây Trồng</h3>
            <p className="text-gray-300 text-sm">
              Sử dụng drone để theo dõi sức khỏe cây trồng, phát hiện sâu bệnh và tối ưu hóa tưới tiêu
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-semibold text-white mb-2">Phân Tích Dữ Liệu</h3>
            <p className="text-gray-300 text-sm">
              Thu thập và phân tích dữ liệu từ cảm biến đa phổ để đưa ra quyết định nông nghiệp thông minh
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold text-white mb-2">Precision Farming</h3>
            <p className="text-gray-300 text-sm">
              Thực hiện các nhiệm vụ nông nghiệp chính xác với GPS và AI để tối đa hóa năng suất
            </p>
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">🎯 Mục Tiêu Học Tập</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="text-amber-400 mr-2">✓</span>
                Hiểu nguyên lý hoạt động của drone nông nghiệp
              </li>
              <li className="flex items-center">
                <span className="text-amber-400 mr-2">✓</span>
                Thực hành điều khiển drone 3D trong nhiệm vụ thực tế
              </li>
              <li className="flex items-center">
                <span className="text-amber-400 mr-2">✓</span>
                Sử dụng cảm biến và công nghệ IoT trong nông nghiệp
              </li>
            </ul>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="text-amber-400 mr-2">✓</span>
                Phân tích dữ liệu cây trồng và môi trường
              </li>
              <li className="flex items-center">
                <span className="text-amber-400 mr-2">✓</span>
                Áp dụng AI trong precision farming
              </li>
              <li className="flex items-center">
                <span className="text-amber-400 mr-2">✓</span>
                Hiểu sustainable agriculture và công nghệ xanh
              </li>
            </ul>
          </div>
        </div>

        {/* Mission Types */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">🎮 Các Nhiệm Vụ Có Sẵn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">🌱 Crop Health Monitoring</h3>
              <p className="text-gray-300 text-sm">Kiểm tra sức khỏe cây trồng và phát hiện sớm bệnh tật</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">💧 Irrigation Optimization</h3>
              <p className="text-gray-300 text-sm">Tối ưu hóa hệ thống tưới tiêu dựa trên dữ liệu thực tế</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">🐛 Pest Detection</h3>
              <p className="text-gray-300 text-sm">Sử dụng AI để phát hiện và theo dõi sâu bệnh</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">📈 Yield Prediction</h3>
              <p className="text-gray-300 text-sm">Dự đoán năng suất dựa trên phân tích dữ liệu đa chiều</p>
            </div>
          </div>
        </div>

        {/* Game Container */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
          <DroneCropMonitoring3D />
        </div>

        {/* Related Lessons */}
        <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4">📚 Bài Học Liên Quan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">🌱 Sustainable Agriculture Tech</h3>
              <p className="text-gray-300 text-sm">Công nghệ nông nghiệp bền vững</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">📡 Arduino Sensors</h3>
              <p className="text-gray-300 text-sm">Cảm biến và xử lý dữ liệu</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">🤖 Autonomous Systems</h3>
              <p className="text-gray-300 text-sm">Hệ thống tự động và AI</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">🌿 Environmental Solutions</h3>
              <p className="text-gray-300 text-sm">Giải pháp môi trường bền vững</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}