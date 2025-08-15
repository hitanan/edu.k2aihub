import { Metadata } from 'next';
import Link from 'next/link';
import { createTitle, createDescription } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle('Chính Sách Bảo Mật'),
  description: createDescription(
    'Chính sách bảo mật của K2AiHub - Nền tảng học tập không thu thập dữ liệu cá nhân, mọi thông tin được lưu trữ tại trình duyệt.',
  ),
  keywords: ['chính sách bảo mật', 'quyền riêng tư', 'K2AiHub', 'không thu thập dữ liệu', 'local storage'],
  openGraph: {
    title: 'Chính Sách Bảo Mật | K2AiHub',
    description:
      'K2AiHub không thu thập bất kỳ dữ liệu cá nhân nào - mọi thông tin được lưu trữ tại trình duyệt của bạn.',
    type: 'website',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">🔒 Chính Sách Bảo Mật</h1>
          <p className="text-gray-300 text-lg">
            K2AiHub cam kết bảo vệ tuyệt đối quyền riêng tư của bạn - chúng tôi KHÔNG thu thập bất kỳ dữ liệu cá nhân
            nào.
          </p>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-4">
            <p className="text-green-300 font-bold text-lg">
              ✅ 100% Riêng Tư - Mọi dữ liệu được lưu trữ tại trình duyệt của bạn
            </p>
          </div>
          <p className="text-gray-400 text-sm mt-4">Cập nhật lần cuối: 15 tháng 8, 2025</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Section 1: Không thu thập dữ liệu */}
          <section className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">�️ Cam Kết Không Thu Thập Dữ Liệu</h2>
            <div className="space-y-4 text-gray-300">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-green-400 mb-3">K2AiHub KHÔNG thu thập:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>❌ Tên hoặc thông tin cá nhân</li>
                  <li>❌ Địa chỉ email hoặc số điện thoại</li>
                  <li>❌ Địa chỉ IP hoặc vị trí địa lý</li>
                  <li>❌ Dữ liệu sử dụng hoặc hành vi trực tuyến</li>
                  <li>❌ Cookies theo dõi hoặc phân tích</li>
                  <li>❌ Bất kỳ thông tin nhận dạng cá nhân nào khác</li>
                </ul>
              </div>
              <p className="text-lg font-semibold text-emerald-400">
                🏆 K2AiHub hoạt động hoàn toàn OFFLINE về mặt dữ liệu cá nhân - không có máy chủ nào lưu trữ thông tin
                của bạn!
              </p>
            </div>
          </section>

          {/* Section 2: Lưu trữ tại trình duyệt */}
          <section className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">💾 Lưu Trữ Tại Trình Duyệt</h2>
            <div className="space-y-4 text-gray-300">
              <p className="text-blue-300 font-semibold">
                Tất cả dữ liệu học tập và tiến độ được lưu trữ trực tiếp trong trình duyệt của bạn:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Local Storage chứa:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>✅ Tiến độ hoàn thành bài học</li>
                    <li>✅ Điểm số trò chơi giáo dục</li>
                    <li>✅ Cài đặt giao diện cá nhân</li>
                    <li>✅ Lịch sử học tập gần đây</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Ưu điểm:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>🔒 Dữ liệu thuộc về bạn 100%</li>
                    <li>🚫 Không bị theo dõi trực tuyến</li>
                    <li>⚡ Tốc độ truy cập cực nhanh</li>
                    <li>🌐 Hoạt động ngay cả khi offline</li>
                  </ul>
                </div>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-4">
                <p className="text-blue-300 font-medium">
                  💡 <strong>Lưu ý:</strong> Bạn có thể xóa toàn bộ dữ liệu này bất kỳ lúc nào thông qua cài đặt trình
                  duyệt hoặc bằng cách xóa Local Storage.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Mục đích sử dụng Local Storage */}
          <section className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">🎯 Mục Đích Sử Dụng Local Storage</h2>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <span className="text-green-400 mr-3">✅</span>
                <span>Lưu tiến độ học tập để bạn có thể tiếp tục từ nơi đã dừng</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-3">✅</span>
                <span>Ghi nhớ cài đặt giao diện và preferences cá nhân</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-3">✅</span>
                <span>Theo dõi thành tích và điểm số trò chơi giáo dục</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-3">✅</span>
                <span>Đề xuất nội dung học tập phù hợp dựa trên lịch sử</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-3">✅</span>
                <span>Cải thiện trải nghiệm người dùng mà không cần đăng ký</span>
              </div>
            </div>
          </section>

          {/* Section 4: Không chia sẻ dữ liệu */}
          <section className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">🚫 Không Chia Sẻ Dữ Liệu</h2>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg font-semibold text-red-400">
                Vì chúng tôi KHÔNG thu thập dữ liệu, nên chắc chắn KHÔNG thể chia sẻ dữ liệu!
              </p>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-red-400 mb-2">K2AiHub KHÔNG:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>❌ Bán dữ liệu cho bên thứ ba</li>
                  <li>❌ Chia sẻ thông tin với đối tác quảng cáo</li>
                  <li>❌ Theo dõi bạn trên các website khác</li>
                  <li>❌ Tạo hồ sơ người dùng để marketing</li>
                  <li>❌ Sử dụng analytics hoặc tracking tools</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5: Bảo mật công nghệ */}
          <section className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">🔐 Bảo Mật Công Nghệ</h2>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <span className="text-yellow-400 mr-3">🛡️</span>
                <span>Website được phục vụ qua HTTPS để bảo mật kết nối</span>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-400 mr-3">🛡️</span>
                <span>Không sử dụng cookies theo dõi hoặc phân tích</span>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-400 mr-3">🛡️</span>
                <span>Mã nguồn mở và minh bạch (có thể kiểm tra trên GitHub)</span>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-400 mr-3">🛡️</span>
                <span>Hosting tĩnh - không có máy chủ xử lý dữ liệu cá nhân</span>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-400 mr-3">🛡️</span>
                <span>Tuân thủ các tiêu chuẩn bảo mật web hiện đại</span>
              </div>
            </div>
          </section>

          {/* Section 6: Quyền của người dùng */}
          <section className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">⚖️ Quyền Của Bạn</h2>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-green-400 mr-3">👁️</span>
                  <span>Kiểm tra Local Storage bất kỳ lúc nào qua Dev Tools</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 mr-3">🗑️</span>
                  <span>Xóa toàn bộ dữ liệu thông qua cài đặt trình duyệt</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 mr-3">�</span>
                  <span>Xuất dữ liệu Local Storage nếu muốn backup</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-green-400 mr-3">�</span>
                  <span>Kiểm soát hoàn toàn dữ liệu cá nhân</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 mr-3">🚫</span>
                  <span>Không cần lo lắng về rò rỉ dữ liệu</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 mr-3">✨</span>
                  <span>Sử dụng hoàn toàn ẩn danh và riêng tư</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Liên kết ngoài */}
          <section className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">🔗 Liên Kết Ngoài</h2>
            <div className="space-y-4 text-gray-300">
              <p>K2AiHub có thể chứa liên kết đến các website giáo dục khác. Khi bạn rời khỏi K2AiHub:</p>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>🌐 Các website khác có chính sách riêng về dữ liệu</li>
                  <li>📋 Chúng tôi khuyến khích bạn đọc chính sách của họ</li>
                  <li>🛡️ K2AiHub không chịu trách nhiệm về chính sách của website khác</li>
                  <li>🔒 Cam kết bảo mật của chúng tôi chỉ áp dụng cho K2AiHub</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 8: Liên hệ */}
          <section className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">� Liên Hệ Về Bảo Mật</h2>
            <div className="space-y-4 text-gray-300">
              <p>Nếu bạn có câu hỏi về chính sách này hoặc cách K2AiHub bảo vệ quyền riêng tư:</p>
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-cyan-400 mr-3">📋</span>
                    <span className="font-medium">Form liên hệ:</span>
                    <Link href="/feedback" className="ml-2 text-blue-400 hover:text-blue-300 underline">
                      Gửi phản hồi
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <span className="text-cyan-400 mr-3">�</span>
                    <span className="font-medium">GitHub:</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center">
            <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-2">🎉 Tóm Tắt Chính Sách</h3>
              <p className="text-emerald-300 font-semibold">
                K2AiHub = 0% Thu Thập Dữ Liệu + 100% Riêng Tư + 100% Miễn Phí
              </p>
              <p className="text-gray-300 text-sm mt-2">
                Học tập an toàn, riêng tư và hoàn toàn kiểm soát dữ liệu của chính bạn!
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© 2025 K2AiHub. Tất cả quyền được bảo lưu.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200">
                  Trang chủ
                </Link>
                <Link
                  href="/feedback"
                  className="text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200"
                >
                  Liên hệ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
