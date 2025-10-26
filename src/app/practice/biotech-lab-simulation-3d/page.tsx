import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import BiotechLabSimulation3D from '@/components/games/individual/BiotechLabSimulation3D';

export const metadata: Metadata = createGameMetadata('biotech-lab-simulation-3d');

export default function BiotechLabSimulation3DPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Game Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🧬</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Biotech Lab Simulation 3D</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Khám phá thế giới công nghệ sinh học qua mô phỏng 3D tương tác. Thực hiện các thí nghiệm CRISPR, phát triển
            thuốc và nghiên cứu y sinh học trong môi trường phòng thí nghiệm ảo an toàn và chuyên nghiệp.
          </p>
        </div>

        {/* Game Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">⚗️</div>
            <h3 className="text-lg font-semibold text-white mb-2">Thí Nghiệm Thực Tế</h3>
            <p className="text-gray-300 text-sm">
              Thực hiện các thí nghiệm CRISPR, PCR, và phân tích DNA trong môi trường 3D chân thực
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🔬</div>
            <h3 className="text-lg font-semibold text-white mb-2">Thiết Bị Chuyên Nghiệp</h3>
            <p className="text-gray-300 text-sm">
              Sử dụng kính hiển vi, máy ly tâm, và thiết bị phân tích với tương tác 3D đầy đủ
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🧪</div>
            <h3 className="text-lg font-semibold text-white mb-2">An Toàn Tuyệt Đối</h3>
            <p className="text-gray-300 text-sm">
              Học protocols an toàn và quy trình nghiên cứu mà không có rủi ro thực tế
            </p>
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">🎯 Mục Tiêu Học Tập</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Hiểu quy trình thí nghiệm sinh học cơ bản
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Thực hành kỹ thuật CRISPR gene editing
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Sử dụng thiết bị phòng thí nghiệm chuyên nghiệp
              </li>
            </ul>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Áp dụng protocols an toàn trong nghiên cứu
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Phân tích và giải thích kết quả thí nghiệm
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Hiểu ứng dụng y sinh học và phát triển thuốc
              </li>
            </ul>
          </div>
        </div>

        {/* Game Container */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
          <BiotechLabSimulation3D />
        </div>

        {/* Related Lessons */}
        <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4">📚 Bài Học Liên Quan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">🧬 Genetic Engineering & CRISPR</h3>
              <p className="text-gray-300 text-sm">Học kỹ thuật chỉnh sửa gen hiện đại</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">💊 Biomedical Applications</h3>
              <p className="text-gray-300 text-sm">Ứng dụng y sinh học và phát triển thuốc</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">🔬 Synthetic Biology</h3>
              <p className="text-gray-300 text-sm">Thiết kế hệ sinh học tổng hợp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
