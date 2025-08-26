import { Metadata } from 'next';
import { createTitle, createDescription } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle('Digital Citizenship Ethics Simulator - Trò Chơi Giáo Dục'),
  description: createDescription('Mô phỏng tình huống đạo đức công dân số thông qua các kịch bản tương tác thực tế. Học cách đưa ra quyết định có trách nhiệm trong thế giới số.'),
  keywords: ['digital citizenship', 'ethics simulator', 'công dân số', 'đạo đức công nghệ', 'game giáo dục'],
  openGraph: {
    title: 'Digital Citizenship Ethics Simulator | K2AiHub',
    description: 'Mô phỏng tình huống đạo đức công dân số qua các kịch bản tương tác thực tế',
    type: 'website',
  },
};

export default function DigitalCitizenshipEthicsSimulatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            🛡️ Digital Citizenship Ethics Simulator
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Khám phá các tình huống đạo đức phức tạp trong thế giới số thông qua trò chơi mô phỏng tương tác
          </p>
        </div>

        {/* Game Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">🎯 Mục Tiêu Học Tập</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Phát triển kỹ năng tư duy phản biện về đạo đức công nghệ</li>
                <li>• Học cách đưa ra quyết định có trách nhiệm trực tuyến</li>
                <li>• Hiểu về quyền riêng tư và bảo mật thông tin</li>
                <li>• Nhận biết và ứng phó với fake news</li>
                <li>• Xây dựng danh tiếng số tích cực</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">🎮 Tính Năng Game</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Kịch bản thực tế dựa trên tình huống thật</li>
                <li>• Hệ thống đưa ra quyết định có hậu quả</li>
                <li>• Điểm số đạo đức và phản hồi chi tiết</li>
                <li>• Nhiều kết thúc khác nhau</li>
                <li>• Hướng dẫn từ chuyên gia đạo đức</li>
              </ul>
            </div>
          </div>

          {/* Scenarios Preview */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">📋 Kịch Bản Mẫu</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-600/20 p-4 rounded-lg">
                <h4 className="font-bold mb-2">🔒 Vấn Đề Riêng Tư</h4>
                <p className="text-sm text-gray-300">Bạn phát hiện ứng dụng thu thập dữ liệu cá nhân mà không thông báo. Bạn sẽ làm gì?</p>
              </div>
              
              <div className="bg-indigo-600/20 p-4 rounded-lg">
                <h4 className="font-bold mb-2">📰 Fake News</h4>
                <p className="text-sm text-gray-300">Một tin tức gây sốc xuất hiện trên mạng xã hội. Làm sao để kiểm tra tính xác thực?</p>
              </div>
              
              <div className="bg-purple-600/20 p-4 rounded-lg">
                <h4 className="font-bold mb-2">💬 Cyberbullying</h4>
                <p className="text-sm text-gray-300">Bạn chứng kiến bạo lực mạng. Cách can thiệp an toàn và hiệu quả là gì?</p>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="text-center bg-blue-600/20 p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">🚀 Sắp Ra Mắt</h3>
            <p className="text-gray-200 mb-6">
              Trò chơi đang trong giai đoạn phát triển cuối cùng. Chúng tôi đang hoàn thiện các kịch bản và hệ thống đánh giá để mang đến trải nghiệm học tập tốt nhất.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-blue-300">📅 Dự kiến: Q1 2025</div>
              <div className="text-sm text-blue-300">🎯 Độ tuổi: 13+</div>
              <div className="text-sm text-blue-300">⏱️ Thời gian: 45-60 phút</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}