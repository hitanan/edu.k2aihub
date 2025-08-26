import { Metadata } from 'next';
import { createTitle, createDescription } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle('UX Design Studio 3D - Studio Thiết Kế Trải Nghiệm Người Dùng'),
  description: createDescription('Studio thiết kế UX/UI 3D tương tác. Học cách tạo ra các giao diện và trải nghiệm người dùng xuất sắc thông qua mô phỏng thực tế.'),
  keywords: ['UX design', 'UI design', 'user experience', 'thiết kế giao diện', '3D design studio'],
  openGraph: {
    title: 'UX Design Studio 3D | K2AiHub',
    description: 'Studio thiết kế UX/UI 3D tương tác cho trải nghiệm học tập thực tế',
    type: 'website',
  },
};

export default function UXDesignStudio3DPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            🎨 UX Design Studio 3D
          </h1>
          <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
            Studio thiết kế trải nghiệm người dùng 3D - Học cách tạo ra các giao diện và trải nghiệm xuất sắc trong môi trường tương tác thực tế
          </p>
        </div>

        {/* Game Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">🎯 Kỹ Năng UX Design</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• User Research và persona development</li>
                <li>• Information Architecture và wireframing</li>
                <li>• Prototyping và usability testing</li>
                <li>• Visual design và design systems</li>
                <li>• Accessibility và responsive design</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">🛠️ Công Cụ 3D Studio</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• 3D mockup và prototype tools</li>
                <li>• Real-time collaboration workspace</li>
                <li>• User testing simulation</li>
                <li>• Analytics và heatmap visualization</li>
                <li>• VR/AR design preview</li>
              </ul>
            </div>
          </div>

          {/* Design Specializations */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">💼 Chuyên Ngành Thiết Kế</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">📱</div>
                <h4 className="font-bold mb-2">Mobile App Design</h4>
                <p className="text-sm text-gray-300">iOS, Android và cross-platform</p>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">💻</div>
                <h4 className="font-bold mb-2">Web Design</h4>
                <p className="text-sm text-gray-300">Responsive và progressive web apps</p>
              </div>
              
              <div className="bg-teal-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🥽</div>
                <h4 className="font-bold mb-2">VR/AR Interface</h4>
                <p className="text-sm text-gray-300">Immersive experience design</p>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🚗</div>
                <h4 className="font-bold mb-2">Automotive UI</h4>
                <p className="text-sm text-gray-300">In-car và dashboard design</p>
              </div>
              
              <div className="bg-orange-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🏠</div>
                <h4 className="font-bold mb-2">Smart Home</h4>
                <p className="text-sm text-gray-300">IoT và home automation</p>
              </div>
              
              <div className="bg-pink-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🎮</div>
                <h4 className="font-bold mb-2">Gaming UI/UX</h4>
                <p className="text-sm text-gray-300">Game interface và player experience</p>
              </div>
            </div>
          </div>

          {/* Studio Modules */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🏗️ Module Studio</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-cyan-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">📐 Design Lab</h4>
                <p className="text-gray-300 mb-4">Workspace tương tác với tools thiết kế chuyên nghiệp</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-cyan-500/30 rounded text-xs">Figma Clone</span>
                  <span className="px-2 py-1 bg-cyan-500/30 rounded text-xs">3D Mockups</span>
                  <span className="px-2 py-1 bg-cyan-500/30 rounded text-xs">Component Library</span>
                </div>
              </div>
              
              <div className="bg-blue-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">👥 User Testing Hub</h4>
                <p className="text-gray-300 mb-4">Mô phỏng user testing với AI avatars</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-500/30 rounded text-xs">A/B Testing</span>
                  <span className="px-2 py-1 bg-blue-500/30 rounded text-xs">Heatmaps</span>
                  <span className="px-2 py-1 bg-blue-500/30 rounded text-xs">Analytics</span>
                </div>
              </div>
              
              <div className="bg-indigo-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🎨 Visual Workshop</h4>
                <p className="text-gray-300 mb-4">Tạo design systems và style guides</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-indigo-500/30 rounded text-xs">Color Theory</span>
                  <span className="px-2 py-1 bg-indigo-500/30 rounded text-xs">Typography</span>
                  <span className="px-2 py-1 bg-indigo-500/30 rounded text-xs">Icon Design</span>
                </div>
              </div>
              
              <div className="bg-teal-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">⚡ Prototype Engine</h4>
                <p className="text-gray-300 mb-4">Tạo prototypes tương tác high-fidelity</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-teal-500/30 rounded text-xs">Animations</span>
                  <span className="px-2 py-1 bg-teal-500/30 rounded text-xs">Micro-interactions</span>
                  <span className="px-2 py-1 bg-teal-500/30 rounded text-xs">State Management</span>
                </div>
              </div>
            </div>
          </div>

          {/* Design Challenges */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🏆 Thử Thách Thiết Kế</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-4 rounded-lg">
                <h4 className="font-bold mb-2">📱 &ldquo;Banking App Redesign&rdquo;</h4>
                <p className="text-gray-300 text-sm mb-2">Thiết kế lại app ngân hàng để tăng 40% user engagement</p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-blue-500/20 rounded text-xs">⏱️ 4 giờ</span>
                  <span className="px-2 py-1 bg-cyan-500/20 rounded text-xs">👥 Team challenge</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-4 rounded-lg">
                <h4 className="font-bold mb-2">🛒 &ldquo;E-commerce Checkout Flow&rdquo;</h4>
                <p className="text-gray-300 text-sm mb-2">Giảm cart abandonment rate xuống dưới 20%</p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-purple-500/20 rounded text-xs">⏱️ 2 giờ</span>
                  <span className="px-2 py-1 bg-pink-500/20 rounded text-xs">🎯 Solo challenge</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 p-4 rounded-lg">
                <h4 className="font-bold mb-2">♿ &ldquo;Accessibility Champion&rdquo;</h4>
                <p className="text-gray-300 text-sm mb-2">Thiết kế app accessibility-first cho người khuyết tật</p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-green-500/20 rounded text-xs">⏱️ 6 giờ</span>
                  <span className="px-2 py-1 bg-teal-500/20 rounded text-xs">🏅 Expert level</span>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="text-center bg-cyan-600/20 p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">🚀 Sắp Ra Mắt</h3>
            <p className="text-gray-200 mb-6">
              Studio đang được phát triển với engine 3D tiên tiến và tích hợp AI để tạo ra môi trường học UX Design chân thực và hiệu quả nhất.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-cyan-300">📅 Dự kiến: Q2 2025</div>
              <div className="text-sm text-cyan-300">🎯 Độ tuổi: 16+</div>
              <div className="text-sm text-cyan-300">⏱️ Thời gian: 3-8 giờ/dự án</div>
              <div className="text-sm text-cyan-300">👥 Chế độ: Solo + Team collaboration</div>
              <div className="text-sm text-cyan-300">🏆 Portfolio: Exportable projects</div>
              <div className="text-sm text-cyan-300">💼 Certification: Industry-recognized</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}