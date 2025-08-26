import { Metadata } from 'next';
import { createTitle, createDescription } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle('Future Scenario Builder 3D - Xây Dựng Kịch Bản Tương Lai'),
  description: createDescription('Khám phá và xây dựng các kịch bản tương lai thông qua mô phỏng 3D tương tác. Dự đoán xu hướng công nghệ và tác động xã hội.'),
  keywords: ['future scenarios', 'technology trends', 'dự đoán tương lai', 'xu hướng công nghệ', '3D simulation'],
  openGraph: {
    title: 'Future Scenario Builder 3D | K2AiHub',
    description: 'Xây dựng và khám phá các kịch bản tương lai thông qua mô phỏng 3D',
    type: 'website',
  },
};

export default function FutureScenarioBuilder3DPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            🔮 Future Scenario Builder 3D
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Trở thành nhà tương lai học - xây dựng và khám phá các kịch bản tương lai có thể xảy ra trong thế giới 3D tương tác
          </p>
        </div>

        {/* Game Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">🎯 Khả Năng Dự Đoán</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Phân tích xu hướng công nghệ mới nổi</li>
                <li>• Dự đoán tác động xã hội và kinh tế</li>
                <li>• Mô hình hóa các kịch bản thay thế</li>
                <li>• Đánh giá rủi ro và cơ hội tương lai</li>
                <li>• Xây dựng chiến lược ứng phó</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">🌐 Công Nghệ 3D</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Mô phỏng thành phố tương lai 3D</li>
                <li>• Tương tác thời gian thực</li>
                <li>• Visualize dữ liệu phức tạp</li>
                <li>• Mô hình đa chiều</li>
                <li>• Phản hồi động theo quyết định</li>
              </ul>
            </div>
          </div>

          {/* Scenario Categories */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🚀 Các Lĩnh Vực Kịch Bản</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🤖</div>
                <h4 className="font-bold mb-2">AI & Robotics</h4>
                <p className="text-sm text-gray-300">Trí tuệ nhân tạo và robot trong cuộc sống hàng ngày</p>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🌱</div>
                <h4 className="font-bold mb-2">Climate & Energy</h4>
                <p className="text-sm text-gray-300">Biến đổi khí hậu và năng lượng tái tạo</p>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🏙️</div>
                <h4 className="font-bold mb-2">Smart Cities</h4>
                <p className="text-sm text-gray-300">Thành phố thông minh và IoT</p>
              </div>
              
              <div className="bg-pink-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">💊</div>
                <h4 className="font-bold mb-2">Healthcare</h4>
                <p className="text-sm text-gray-300">Y tế cá nhân hóa và công nghệ sinh học</p>
              </div>
              
              <div className="bg-indigo-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🎓</div>
                <h4 className="font-bold mb-2">Education</h4>
                <p className="text-sm text-gray-300">Học tập ảo và giáo dục cá nhân hóa</p>
              </div>
              
              <div className="bg-teal-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🚀</div>
                <h4 className="font-bold mb-2">Space & Exploration</h4>
                <p className="text-sm text-gray-300">Khám phá vũ trụ và thuộc địa không gian</p>
              </div>
            </div>
          </div>

          {/* Game Features */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🎮 Tính Năng Gameplay</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">⏰ Time Machine</h4>
                <p className="text-gray-300 mb-3">Du hành từ hiện tại đến 50 năm trong tương lai</p>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-purple-500/30 rounded-full text-xs">2025</span>
                  <span className="px-3 py-1 bg-purple-500/30 rounded-full text-xs">2035</span>
                  <span className="px-3 py-1 bg-purple-500/30 rounded-full text-xs">2050</span>
                  <span className="px-3 py-1 bg-purple-500/30 rounded-full text-xs">2075</span>
                </div>
              </div>
              
              <div className="bg-pink-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🎛️ Decision Impact</h4>
                <p className="text-gray-300">Mọi quyết định tạo ra hiệu ứng domino trong mô phỏng</p>
              </div>
              
              <div className="bg-indigo-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">📊 Data Visualization</h4>
                <p className="text-gray-300">Biểu đồ và đồ thị 3D cho dữ liệu phức tạp</p>
              </div>
              
              <div className="bg-teal-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">👥 Collaborative Mode</h4>
                <p className="text-gray-300">Xây dựng kịch bản cùng nhóm với nhiều góc nhìn</p>
              </div>
            </div>
          </div>

          {/* Sample Scenarios */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">📋 Kịch Bản Mẫu</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 rounded-lg">
                <h4 className="font-bold mb-2">🌍 &ldquo;Thế Giới Zero Carbon 2050&rdquo;</h4>
                <p className="text-gray-300 text-sm">Khám phá cách nhân loại đạt được mục tiêu carbon trung hòa và tác động đến nền kinh tế toàn cầu.</p>
              </div>
              
              <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 p-4 rounded-lg">
                <h4 className="font-bold mb-2">🤖 &ldquo;AI Superintelligence Era&rdquo;</h4>
                <p className="text-gray-300 text-sm">Mô phỏng thế giới khi AI đạt đến siêu trí tuệ và ảnh hưởng đến mọi khía cạnh của xã hội.</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-4 rounded-lg">
                <h4 className="font-bold mb-2">🏙️ &ldquo;Megacity of Tomorrow&rdquo;</h4>
                <p className="text-gray-300 text-sm">Thiết kế thành phố 20 triệu dân với công nghệ thông minh và bền vững.</p>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="text-center bg-purple-600/20 p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">🚀 Sắp Ra Mắt</h3>
            <p className="text-gray-200 mb-6">
              Đội ngũ chuyên gia tương lai học và nhà phát triển 3D đang hoàn thiện engine mô phỏng phức tạp và cơ sở dữ liệu xu hướng toàn cầu.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-purple-300">📅 Dự kiến: Q2 2025</div>
              <div className="text-sm text-purple-300">🎯 Độ tuổi: 16+</div>
              <div className="text-sm text-purple-300">⏱️ Thời gian: 2-4 giờ</div>
              <div className="text-sm text-purple-300">👥 Chế độ: Đơn + Nhóm</div>
              <div className="text-sm text-purple-300">🌍 Ngôn ngữ: Vietnamese, English</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}