import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';

export const metadata: Metadata = createGameMetadata('stress-resilience-training');

export default function StressResilienceTrainingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            🧘 Stress & Resilience Training
          </h1>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Phát triển khả năng quản lý căng thẳng và xây dựng sức bền tâm lý - Trang bị kỹ năng cần thiết để thành công trong thế giới hiện đại
          </p>
        </div>

        {/* Game Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">🎯 Kỹ Năng Cốt Lõi</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Nhận biết và quản lý căng thẳng</li>
                <li>• Kỹ thuật thở và thiền mindfulness</li>
                <li>• Tư duy tích cực và resilience</li>
                <li>• Time management và work-life balance</li>
                <li>• Kỹ năng giao tiếp trong áp lực</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">🛠️ Phương Pháp Huấn Luyện</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Mô phỏng tình huống căng thẳng</li>
                <li>• Biofeedback và heart rate monitoring</li>
                <li>• VR meditation và relaxation</li>
                <li>• Gamified progress tracking</li>
                <li>• Community support system</li>
              </ul>
            </div>
          </div>

          {/* Training Modules */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">📚 Module Huấn Luyện</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🧠</div>
                <h4 className="font-bold mb-2">Stress Awareness</h4>
                <p className="text-sm text-gray-300 mb-3">Nhận biết nguồn gốc và dấu hiệu căng thẳng</p>
                <div className="text-xs text-blue-300">
                  <div>• Stress assessment</div>
                  <div>• Trigger identification</div>
                  <div>• Early warning signs</div>
                </div>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">💨</div>
                <h4 className="font-bold mb-2">Breathing Techniques</h4>
                <p className="text-sm text-gray-300 mb-3">Kỹ thuật thở để giảm căng thẳng tức thì</p>
                <div className="text-xs text-green-300">
                  <div>• Box breathing</div>
                  <div>• 4-7-8 technique</div>
                  <div>• Belly breathing</div>
                </div>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🧘</div>
                <h4 className="font-bold mb-2">Mindfulness</h4>
                <p className="text-sm text-gray-300 mb-3">Thiền mindfulness và present moment awareness</p>
                <div className="text-xs text-purple-300">
                  <div>• Body scan meditation</div>
                  <div>• Walking meditation</div>
                  <div>• Mindful eating</div>
                </div>
              </div>
              
              <div className="bg-teal-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">💪</div>
                <h4 className="font-bold mb-2">Resilience Building</h4>
                <p className="text-sm text-gray-300 mb-3">Xây dựng khả năng phục hồi tâm lý</p>
                <div className="text-xs text-teal-300">
                  <div>• Cognitive restructuring</div>
                  <div>• Emotional regulation</div>
                  <div>• Growth mindset</div>
                </div>
              </div>
              
              <div className="bg-orange-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">⚖️</div>
                <h4 className="font-bold mb-2">Work-Life Balance</h4>
                <p className="text-sm text-gray-300 mb-3">Cân bằng công việc và cuộc sống</p>
                <div className="text-xs text-orange-300">
                  <div>• Boundary setting</div>
                  <div>• Time management</div>
                  <div>• Energy management</div>
                </div>
              </div>
              
              <div className="bg-pink-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🤝</div>
                <h4 className="font-bold mb-2">Social Support</h4>
                <p className="text-sm text-gray-300 mb-3">Xây dựng mạng lưới hỗ trợ xã hội</p>
                <div className="text-xs text-pink-300">
                  <div>• Communication skills</div>
                  <div>• Conflict resolution</div>
                  <div>• Empathy building</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Features */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🎮 Tính Năng Tương Tác</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-indigo-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">📊 Stress Monitoring</h4>
                <p className="text-gray-300 mb-4">Theo dõi mức độ căng thẳng real-time với biometric sensors</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Heart rate variability</div>
                  <div>• Cortisol level simulation</div>
                  <div>• Sleep quality tracking</div>
                  <div>• Mood assessment</div>
                </div>
              </div>
              
              <div className="bg-blue-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🎯 Challenge Scenarios</h4>
                <p className="text-gray-300 mb-4">Mô phỏng tình huống căng thẳng để luyện tập</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Job interview stress</div>
                  <div>• Public speaking anxiety</div>
                  <div>• Deadline pressure</div>
                  <div>• Conflict situations</div>
                </div>
              </div>
              
              <div className="bg-cyan-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🎨 VR Relaxation</h4>
                <p className="text-gray-300 mb-4">Trải nghiệm thư giãn immersive trong VR</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Virtual nature environments</div>
                  <div>• Guided meditation spaces</div>
                  <div>• Breathing visualization</div>
                  <div>• Zen gardens</div>
                </div>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">👥 Community Support</h4>
                <p className="text-gray-300 mb-4">Kết nối với cộng đồng hỗ trợ lẫn nhau</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Peer support groups</div>
                  <div>• Success story sharing</div>
                  <div>• Expert mentorship</div>
                  <div>• Anonymous chat support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Tracking */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">📈 Theo Dõi Tiến Độ</h3>
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-lg">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">7</div>
                  <div className="text-sm text-gray-300">Ngày streak thiền</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">85%</div>
                  <div className="text-sm text-gray-300">Stress reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">12</div>
                  <div className="text-sm text-gray-300">Kỹ năng đã học</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">Level 3</div>
                  <div className="text-sm text-gray-300">Resilience level</div>
                </div>
              </div>
            </div>
          </div>

          {/* Scientific Backing */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🔬 Nền Tảng Khoa Học</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-gray-600/20 p-4 rounded-lg">
                <h4 className="font-bold mb-2">🧪 Neuroscience</h4>
                <p className="text-sm text-gray-300">Based on latest brain research</p>
              </div>
              
              <div className="bg-gray-600/20 p-4 rounded-lg">
                <h4 className="font-bold mb-2">💊 Psychology</h4>
                <p className="text-sm text-gray-300">CBT và positive psychology</p>
              </div>
              
              <div className="bg-gray-600/20 p-4 rounded-lg">
                <h4 className="font-bold mb-2">📊 Research</h4>
                <p className="text-sm text-gray-300">Evidence-based methods</p>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="text-center bg-indigo-600/20 p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">🚀 Sắp Ra Mắt</h3>
            <p className="text-gray-200 mb-6">
              Chương trình được phát triển với sự tư vấn của các chuyên gia tâm lý học và neuroscience hàng đầu, tích hợp AI coach cá nhân hóa.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-indigo-300">📅 Dự kiến: Q1 2025</div>
              <div className="text-sm text-indigo-300">🎯 Độ tuổi: 16+</div>
              <div className="text-sm text-indigo-300">⏱️ Thời gian: 15-60 phút/session</div>
              <div className="text-sm text-indigo-300">🏆 Certification: Mental wellness coach</div>
              <div className="text-sm text-indigo-300">🤖 AI Coach: Personalized guidance</div>
              <div className="text-sm text-indigo-300">📱 Mobile: Stress SOS features</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}