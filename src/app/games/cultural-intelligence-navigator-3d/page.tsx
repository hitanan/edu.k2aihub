import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';

export const metadata: Metadata = createGameMetadata('cultural-intelligence-navigator-3d');

export default function CulturalIntelligenceNavigator3DPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            🌍 Cultural Intelligence Navigator 3D
          </h1>
          <p className="text-xl text-rose-200 max-w-3xl mx-auto">
            Khám phá thế giới đa văn hóa trong không gian 3D - Phát triển trí tuệ văn hóa và kỹ năng giao tiếp xuyên văn hóa
          </p>
        </div>

        {/* Game Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">🎯 Trí Tuệ Văn Hóa</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Hiểu biết về các nền văn hóa khác nhau</li>
                <li>• Kỹ năng giao tiếp phi ngôn ngữ</li>
                <li>• Adaptation và flexibility</li>
                <li>• Empathy và perspective-taking</li>
                <li>• Conflict resolution xuyên văn hóa</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">🌐 Trải Nghiệm 3D</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Virtual cultural immersion</li>
                <li>• Interactive cultural scenarios</li>
                <li>• 360-degree cultural environments</li>
                <li>• Multi-language support</li>
                <li>• Real-time cultural feedback</li>
              </ul>
            </div>
          </div>

          {/* Cultural Regions */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🗺️ Khám Phá Các Vùng Văn Hóa</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-red-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🏮</div>
                <h4 className="font-bold mb-2">East Asia</h4>
                <p className="text-sm text-gray-300 mb-3">Trung Quốc, Nhật, Hàn Quốc, Việt Nam</p>
                <div className="text-xs text-red-300">
                  <div>• Hierarchy và respect</div>
                  <div>• Face-saving culture</div>
                  <div>• Group harmony</div>
                </div>
              </div>
              
              <div className="bg-blue-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🏛️</div>
                <h4 className="font-bold mb-2">Western Europe</h4>
                <p className="text-sm text-gray-300 mb-3">Anh, Pháp, Đức, Bắc Âu</p>
                <div className="text-xs text-blue-300">
                  <div>• Direct communication</div>
                  <div>• Individualism</div>
                  <div>• Work-life balance</div>
                </div>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🕌</div>
                <h4 className="font-bold mb-2">Middle East</h4>
                <p className="text-sm text-gray-300 mb-3">UAE, Saudi, Turkey, Iran</p>
                <div className="text-xs text-green-300">
                  <div>• Hospitality culture</div>
                  <div>• Religious considerations</div>
                  <div>• Family importance</div>
                </div>
              </div>
              
              <div className="bg-orange-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🎭</div>
                <h4 className="font-bold mb-2">South Asia</h4>
                <p className="text-sm text-gray-300 mb-3">Ấn Độ, Pakistan, Bangladesh</p>
                <div className="text-xs text-orange-300">
                  <div>• Diversity trong unity</div>
                  <div>• Spiritual values</div>
                  <div>• Relationship-based</div>
                </div>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🦘</div>
                <h4 className="font-bold mb-2">Oceania</h4>
                <p className="text-sm text-gray-300 mb-3">Australia, New Zealand</p>
                <div className="text-xs text-purple-300">
                  <div>• Egalitarian values</div>
                  <div>• Indigenous respect</div>
                  <div>• Outdoor lifestyle</div>
                </div>
              </div>
              
              <div className="bg-teal-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🌎</div>
                <h4 className="font-bold mb-2">Latin America</h4>
                <p className="text-sm text-gray-300 mb-3">Brazil, Mexico, Argentina</p>
                <div className="text-xs text-teal-300">
                  <div>• Warm relationships</div>
                  <div>• Expressive communication</div>
                  <div>• Family-centered</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Scenarios */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🎭 Kịch Bản Tương Tác</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-rose-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🤝 Business Meeting</h4>
                <p className="text-gray-300 mb-4">Điều hướng cuộc họp đa văn hóa với các quy tắc khác nhau</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Greeting protocols</div>
                  <div>• Gift-giving etiquette</div>
                  <div>• Decision-making styles</div>
                  <div>• Time perception differences</div>
                </div>
              </div>
              
              <div className="bg-pink-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🏠 Social Gathering</h4>
                <p className="text-gray-300 mb-4">Tham gia các sự kiện xã hội trong các văn hóa khác nhau</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Dress code expectations</div>
                  <div>• Conversation topics</div>
                  <div>• Food and dining customs</div>
                  <div>• Personal space norms</div>
                </div>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">💼 Job Interview</h4>
                <p className="text-gray-300 mb-4">Phỏng vấn xin việc trong các nền văn hóa doanh nghiệp</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Self-promotion vs modesty</div>
                  <div>• Eye contact expectations</div>
                  <div>• Question-asking norms</div>
                  <div>• Follow-up protocols</div>
                </div>
              </div>
              
              <div className="bg-indigo-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🎓 Educational Setting</h4>
                <p className="text-gray-300 mb-4">Học tập và giảng dạy trong môi trường đa văn hóa</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Student-teacher relationships</div>
                  <div>• Participation styles</div>
                  <div>• Feedback acceptance</div>
                  <div>• Group work dynamics</div>
                </div>
              </div>
            </div>
          </div>

          {/* Cultural Competency Levels */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">📊 Cấp Độ Năng Lực Đa Văn Hóa</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold">🌱 Cultural Awareness</h4>
                  <span className="px-3 py-1 bg-red-500/30 rounded-full text-xs">Level 1</span>
                </div>
                <p className="text-gray-300 text-sm">Nhận biết sự tồn tại của các khác biệt văn hóa</p>
              </div>
              
              <div className="bg-gradient-to-r from-orange-600/20 to-yellow-600/20 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold">🔍 Cultural Knowledge</h4>
                  <span className="px-3 py-1 bg-orange-500/30 rounded-full text-xs">Level 2</span>
                </div>
                <p className="text-gray-300 text-sm">Hiểu biết cụ thể về các nền văn hóa khác nhau</p>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-600/20 to-green-600/20 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold">🤲 Cultural Empathy</h4>
                  <span className="px-3 py-1 bg-yellow-500/30 rounded-full text-xs">Level 3</span>
                </div>
                <p className="text-gray-300 text-sm">Cảm thông và thấu hiểu góc nhìn văn hóa khác</p>
              </div>
              
              <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold">⚡ Cultural Adaptation</h4>
                  <span className="px-3 py-1 bg-green-500/30 rounded-full text-xs">Level 4</span>
                </div>
                <p className="text-gray-300 text-sm">Điều chỉnh hành vi phù hợp với bối cảnh văn hóa</p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold">🌟 Cultural Mastery</h4>
                  <span className="px-3 py-1 bg-blue-500/30 rounded-full text-xs">Level 5</span>
                </div>
                <p className="text-gray-300 text-sm">Thành thạo giao tiếp và làm việc xuyên văn hóa</p>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="text-center bg-rose-600/20 p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">🚀 Sắp Ra Mắt</h3>
            <p className="text-gray-200 mb-6">
              Trải nghiệm được phát triển với sự tư vấn của các chuyên gia anthropology và cross-cultural psychology, tích hợp AI cultural coach thông minh.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-rose-300">📅 Dự kiến: Q2 2025</div>
              <div className="text-sm text-rose-300">🎯 Độ tuổi: 16+</div>
              <div className="text-sm text-rose-300">⏱️ Thời gian: 45-90 phút/region</div>
              <div className="text-sm text-rose-300">🏆 Certification: Global cultural competency</div>
              <div className="text-sm text-rose-300">🌍 Languages: 15+ languages supported</div>
              <div className="text-sm text-rose-300">🤝 Partnerships: UNESCO, cultural embassies</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}