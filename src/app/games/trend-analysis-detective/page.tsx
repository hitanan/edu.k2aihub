import { Metadata } from 'next';
import { createTitle, createDescription } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle('Trend Analysis Detective - Thám Tử Phân Tích Xu Hướng'),
  description: createDescription('Trở thành thám tử phân tích xu hướng - khám phá và dự đoán các xu hướng công nghệ, xã hội thông qua điều tra và phân tích dữ liệu.'),
  keywords: ['trend analysis', 'data detective', 'phân tích xu hướng', 'điều tra dữ liệu', 'market research'],
  openGraph: {
    title: 'Trend Analysis Detective | K2AiHub',
    description: 'Khám phá và dự đoán xu hướng thông qua kỹ năng thám tử phân tích dữ liệu',
    type: 'website',
  },
};

export default function TrendAnalysisDetectivePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-red-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            🕵️ Trend Analysis Detective
          </h1>
          <p className="text-xl text-amber-200 max-w-3xl mx-auto">
            Trở thành thám tử chuyên nghiệp - khám phá các xu hướng ẩn giấu và dự đoán tương lai thông qua phân tích dữ liệu
          </p>
        </div>

        {/* Game Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">🔍 Kỹ Năng Thám Tử</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Thu thập và phân tích dữ liệu từ nhiều nguồn</li>
                <li>• Nhận diện các pattern và xu hướng ẩn</li>
                <li>• Kết nối các mảnh ghép thông tin rời rạc</li>
                <li>• Đánh giá độ tin cậy của nguồn dữ liệu</li>
                <li>• Dự đoán xu hướng tương lai</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">📊 Công Cụ Phân Tích</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Dashboard trực quan với biểu đồ động</li>
                <li>• AI Assistant cho phân tích dữ liệu</li>
                <li>• Social media listening tools</li>
                <li>• Market research databases</li>
                <li>• Prediction algorithms</li>
              </ul>
            </div>
          </div>

          {/* Investigation Areas */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🎯 Lĩnh Vực Điều Tra</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">💻</div>
                <h4 className="font-bold mb-2">Tech Trends</h4>
                <p className="text-sm text-gray-300">Công nghệ mới nổi và startup unicorn</p>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🛒</div>
                <h4 className="font-bold mb-2">Consumer Behavior</h4>
                <p className="text-sm text-gray-300">Hành vi tiêu dùng và thị trường</p>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">📱</div>
                <h4 className="font-bold mb-2">Social Media</h4>
                <p className="text-sm text-gray-300">Viral trends và influencer impact</p>
              </div>
              
              <div className="bg-orange-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">💼</div>
                <h4 className="font-bold mb-2">Business Models</h4>
                <p className="text-sm text-gray-300">Mô hình kinh doanh sáng tạo</p>
              </div>
              
              <div className="bg-teal-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🌍</div>
                <h4 className="font-bold mb-2">Global Events</h4>
                <p className="text-sm text-gray-300">Sự kiện toàn cầu và tác động</p>
              </div>
              
              <div className="bg-pink-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🎨</div>
                <h4 className="font-bold mb-2">Cultural Shifts</h4>
                <p className="text-sm text-gray-300">Thay đổi văn hóa và lifestyle</p>
              </div>
            </div>
          </div>

          {/* Game Missions */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🎮 Nhiệm Vụ Thám Tử</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-amber-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🚀 The Next Big Thing</h4>
                <p className="text-gray-300 mb-3">Tìm ra công nghệ hoặc xu hướng sẽ bùng nổ trong 6 tháng tới</p>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-amber-500/30 rounded-full text-xs">Khó: ⭐⭐⭐⭐</span>
                </div>
              </div>
              
              <div className="bg-orange-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">📉 Trend Killer</h4>
                <p className="text-gray-300 mb-3">Dự đoán xu hướng nào sẽ &ldquo;chết&rdquo; và tại sao</p>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-orange-500/30 rounded-full text-xs">Khó: ⭐⭐⭐</span>
                </div>
              </div>
              
              <div className="bg-red-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🎯 Market Opportunity</h4>
                <p className="text-gray-300 mb-3">Phát hiện thị trường ngách chưa được khai thác</p>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-red-500/30 rounded-full text-xs">Khó: ⭐⭐⭐⭐⭐</span>
                </div>
              </div>
              
              <div className="bg-yellow-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🌊 Viral Prediction</h4>
                <p className="text-gray-300 mb-3">Dự đoán nội dung nào sẽ viral trên social media</p>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-yellow-500/30 rounded-full text-xs">Khó: ⭐⭐</span>
                </div>
              </div>
            </div>
          </div>

          {/* Detective Tools */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🛠️ Bộ Công Cụ Thám Tử</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-blue-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🔍</div>
                <h5 className="font-bold text-sm">Data Magnifier</h5>
              </div>
              
              <div className="bg-green-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">📊</div>
                <h5 className="font-bold text-sm">Trend Tracker</h5>
              </div>
              
              <div className="bg-purple-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🤖</div>
                <h5 className="font-bold text-sm">AI Analyzer</h5>
              </div>
              
              <div className="bg-orange-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">📈</div>
                <h5 className="font-bold text-sm">Future Predictor</h5>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="text-center bg-amber-600/20 p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">🚀 Sắp Ra Mắt</h3>
            <p className="text-gray-200 mb-6">
              Game đang được phát triển với cơ sở dữ liệu thời gian thực và AI engine để tạo ra trải nghiệm thám tử xu hướng chân thực nhất.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-amber-300">📅 Dự kiến: Q1 2025</div>
              <div className="text-sm text-amber-300">🎯 Độ tuổi: 14+</div>
              <div className="text-sm text-amber-300">⏱️ Thời gian: 60-90 phút/nhiệm vụ</div>
              <div className="text-sm text-amber-300">🏆 Ranking: Global Leaderboard</div>
              <div className="text-sm text-amber-300">💰 Rewards: Crypto badges NFT</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}