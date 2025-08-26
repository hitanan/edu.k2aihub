import { Metadata } from 'next';
import { createTitle, createDescription } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle('Privacy Protection Challenge - Trò Chơi Bảo Vệ Quyền Riêng Tư'),
  description: createDescription('Thử thách bảo vệ quyền riêng tư trong thế giới số. Học cách cấu hình bảo mật, nhận biết rủi ro và bảo vệ thông tin cá nhân hiệu quả.'),
  keywords: ['privacy protection', 'data security', 'bảo mật thông tin', 'quyền riêng tư', 'game bảo mật'],
  openGraph: {
    title: 'Privacy Protection Challenge | K2AiHub',
    description: 'Thử thách bảo vệ quyền riêng tư trong thế giới số với các kịch bản thực tế',
    type: 'website',
  },
};

export default function PrivacyProtectionChallengePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            🔐 Privacy Protection Challenge
          </h1>
          <p className="text-xl text-green-200 max-w-3xl mx-auto">
            Trở thành chuyên gia bảo vệ quyền riêng tư số thông qua các thử thách thực tiễn và kịch bản thực tế
          </p>
        </div>

        {/* Game Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">🛡️ Kỹ Năng Bảo Mật</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Cấu hình quyền riêng tư trên mạng xã hội</li>
                <li>• Nhận biết và tránh các mối đe dọa phishing</li>
                <li>• Sử dụng mật khẩu mạnh và 2FA</li>
                <li>• Quản lý dấu vết số (digital footprint)</li>
                <li>• Bảo vệ thông tin tài chính trực tuyến</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">🎯 Thử Thách Game</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Audit bảo mật tài khoản cá nhân</li>
                <li>• Mô phỏng tấn công và phòng thủ</li>
                <li>• Đánh giá rủi ro bảo mật</li>
                <li>• Xây dựng chiến lược bảo vệ</li>
                <li>• Xử lý sự cố vi phạm dữ liệu</li>
              </ul>
            </div>
          </div>

          {/* Challenge Levels */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🏆 Các Cấp Độ Thử Thách</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-green-600/20 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🌱</div>
                <h4 className="font-bold mb-2">Cơ Bản</h4>
                <p className="text-sm text-gray-300">Cài đặt bảo mật cơ bản</p>
              </div>
              
              <div className="bg-blue-600/20 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🛡️</div>
                <h4 className="font-bold mb-2">Trung Bình</h4>
                <p className="text-sm text-gray-300">Phòng chống tấn công</p>
              </div>
              
              <div className="bg-purple-600/20 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🔒</div>
                <h4 className="font-bold mb-2">Nâng Cao</h4>
                <p className="text-sm text-gray-300">Bảo mật doanh nghiệp</p>
              </div>
              
              <div className="bg-red-600/20 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🚨</div>
                <h4 className="font-bold mb-2">Chuyên Gia</h4>
                <p className="text-sm text-gray-300">Ứng phó khủng hoảng</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">✨ Tính Năng Đặc Biệt</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-teal-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">📊 Privacy Score</h4>
                <p className="text-gray-300">Hệ thống chấm điểm bảo mật cá nhân với phân tích chi tiết và khuyến nghị cải thiện.</p>
              </div>
              
              <div className="bg-blue-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🎭 Role-Playing</h4>
                <p className="text-gray-300">Đóng vai hacker, nạn nhân, và chuyên gia bảo mật để hiểu toàn bộ góc nhìn.</p>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">📱 Real-Time Updates</h4>
                <p className="text-gray-300">Cập nhật thường xuyên với các mối đe dọa mới và phương pháp bảo vệ mới nhất.</p>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🏅 Certification</h4>
                <p className="text-gray-300">Nhận chứng chỉ bảo vệ quyền riêng tư sau khi hoàn thành các thử thách.</p>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="text-center bg-green-600/20 p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">🚀 Sắp Ra Mắt</h3>
            <p className="text-gray-200 mb-6">
              Trò chơi đang được phát triển với sự tư vấn của các chuyên gia bảo mật hàng đầu để đảm bảo tính thực tiễn và hiệu quả.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-green-300">📅 Dự kiến: Q1 2025</div>
              <div className="text-sm text-green-300">🎯 Độ tuổi: 16+</div>
              <div className="text-sm text-green-300">⏱️ Thời gian: 90-120 phút</div>
              <div className="text-sm text-green-300">🏆 Chứng chỉ: Có</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}