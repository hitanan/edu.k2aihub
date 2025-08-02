import type { Metadata } from "next";
import Link from 'next/link';
import Image from 'next/image';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { greenTechLessons } from '@/data/green-technology';

export const metadata: Metadata = {
  title: createTitle("Green Technology & Sustainability - Công Nghệ Xanh"),
  description: createDescription("Khóa học Green Technology toàn diện về năng lượng tái tạo, smart cities, và sustainable solutions cho tương lai xanh"),
  keywords: createKeywords(["green technology", "sustainability", "renewable energy", "smart city", "environmental technology", "clean energy"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Green Technology & Sustainability"),
    description: createDescription("Học công nghệ xanh và sustainability để xây dựng tương lai bền vững"),
    type: "website",
  },
};

export default function GreenTechnologyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/" className="text-green-400 hover:text-green-300 transition-colors duration-300">
              ← Quay lại Trang chủ
            </Link>
          </div>
          
          <div className="text-center">
            <div className="text-6xl mb-6">🌱</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Green Technology & Sustainability
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Khám phá công nghệ xanh và giải pháp bền vững cho tương lai. Từ năng lượng tái tạo đến smart cities, 
              học cách ứng dụng technology để bảo vệ môi trường và tạo ra impact tích cực.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-green-500/20 text-green-200 px-4 py-2 rounded-full">
                🌱 Sustainable Solutions
              </span>
              <span className="bg-emerald-500/20 text-emerald-200 px-4 py-2 rounded-full">
                ⚡ Clean Energy
              </span>
              <span className="bg-teal-500/20 text-teal-200 px-4 py-2 rounded-full">
                🏙️ Smart Cities
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-6">Tại Sao Học Green Technology?</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">🌍 Tác Động Toàn Cầu</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  Biến đổi khí hậu đang ảnh hưởng nghiêm trọng đến cuộc sống
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  Green technology là solution cho sustainable development
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  Cơ hội nghề nghiệp trong renewable energy industry
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  Tạo positive impact cho environment và society
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/20">
              <h3 className="text-xl font-bold text-white mb-4">📊 Market Opportunities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-2xl mb-2">💰</div>
                  <h4 className="font-semibold text-white mb-1">$2.5 Trillion Market</h4>
                  <p className="text-sm text-gray-400">Global renewable energy market by 2030</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-2xl mb-2">📈</div>
                  <h4 className="font-semibold text-white mb-1">42M New Jobs</h4>
                  <p className="text-sm text-gray-400">Renewable energy jobs worldwide by 2030</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-2xl mb-2">🌱</div>
                  <h4 className="font-semibold text-white mb-1">80% Reduction</h4>
                  <p className="text-sm text-gray-400">CO2 emissions target by 2050</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-2xl mb-2">🏭</div>
                  <h4 className="font-semibold text-white mb-1">1000+ Startups</h4>
                  <p className="text-sm text-gray-400">CleanTech startups in Vietnam</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-bold text-white mb-4">📊 Thông tin khóa học</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Số bài học:</span>
                  <span className="text-white font-medium">6 bài</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Tổng thời lượng:</span>
                  <span className="text-white font-medium">10+ giờ</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Độ khó:</span>
                  <span className="text-white font-medium">Cơ bản → Nâng cao</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Dự án thực tế:</span>
                  <span className="text-white font-medium">4+ projects</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl p-6 border border-emerald-500/20">
              <h3 className="text-lg font-bold text-white mb-4">🎯 Career Paths</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Renewable Energy Engineer</li>
                <li>• Sustainability Consultant</li>
                <li>• Smart City Solutions Architect</li>
                <li>• Environmental Data Scientist</li>
                <li>• CleanTech Entrepreneur</li>
                <li>• Carbon Footprint Analyst</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Nội Dung Khóa Học</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {greenTechLessons.map((lesson, index) => (
              <Link 
                key={lesson.id}
                href={`/green-technology/${lesson.id}`}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {lesson.imageUrl ? (
                      <Image 
                        src={lesson.imageUrl} 
                        alt={lesson.title}
                        width={60}
                        height={60}
                        className="w-15 h-15 rounded-lg object-cover"
                      />
                    ) : (
                      <div className="w-15 h-15 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-2xl">
                        {index + 1}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                      {lesson.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {lesson.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs bg-green-500/20 text-green-200 px-2 py-1 rounded">
                        ⏱️ {lesson.duration}
                      </span>
                      <span className="text-xs bg-emerald-500/20 text-emerald-200 px-2 py-1 rounded">
                        🎯 {lesson.difficulty}
                      </span>
                    </div>

                    <div className="flex items-center text-xs text-gray-400 mb-2">
                      <span className="mr-2">🌱</span>
                      {lesson.environmentalImpact}
                    </div>

                    <div className="flex items-center text-xs text-gray-400">
                      <span className="mr-2">🎬</span>
                      Video + Hands-on Projects
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Technology Focus Areas */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Công Nghệ Xanh Chính</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-4">☀️</div>
              <h3 className="text-lg font-bold text-white mb-3">Solar Technology</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Photovoltaic Systems</li>
                <li>• Solar Thermal Energy</li>
                <li>• Energy Storage Solutions</li>
                <li>• Grid Integration</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-4">💨</div>
              <h3 className="text-lg font-bold text-white mb-3">Wind Energy</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Wind Turbine Technology</li>
                <li>• Offshore Wind Farms</li>
                <li>• Power Electronics</li>
                <li>• Maintenance Systems</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-4">🏙️</div>
              <h3 className="text-lg font-bold text-white mb-3">Smart Cities</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• IoT Sensor Networks</li>
                <li>• Traffic Optimization</li>
                <li>• Waste Management</li>
                <li>• Air Quality Monitoring</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-4">🔋</div>
              <h3 className="text-lg font-bold text-white mb-3">Energy Storage</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Battery Technology</li>
                <li>• Grid-scale Storage</li>
                <li>• Hydrogen Systems</li>
                <li>• Pumped Hydro</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-4">♻️</div>
              <h3 className="text-lg font-bold text-white mb-3">Circular Economy</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Waste-to-Energy</li>
                <li>• Recycling Technology</li>
                <li>• Sustainable Materials</li>
                <li>• Life Cycle Assessment</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-4">🌊</div>
              <h3 className="text-lg font-bold text-white mb-3">Water Technology</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Water Treatment</li>
                <li>• Desalination Systems</li>
                <li>• Smart Water Grids</li>
                <li>• Conservation Tech</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl p-8 border border-green-500/20">
          <h2 className="text-2xl font-bold text-white mb-4">Sẵn sàng xây dựng tương lai xanh?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join the green revolution! Học cách ứng dụng technology để tạo ra sustainable solutions 
            và positive environmental impact. Tương lai xanh bắt đầu từ hôm nay.
          </p>
          <Link 
            href="/green-technology/renewable-energy-basics"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Bắt đầu học ngay →
          </Link>
        </div>

        {/* Cross-module Links */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Khóa học liên quan</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link 
              href="/arduino" 
              className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-white font-medium">Arduino & IoT</div>
              <div className="text-gray-400 text-sm">Smart Environmental Monitoring</div>
            </Link>
            
            <Link 
              href="/python" 
              className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-2xl mb-2">🐍</div>
              <div className="text-white font-medium">Python</div>
              <div className="text-gray-400 text-sm">Data Analysis & ML</div>
            </Link>
            
            <Link 
              href="/stem" 
              className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-2xl mb-2">🔬</div>
              <div className="text-white font-medium">STEM</div>
              <div className="text-gray-400 text-sm">Environmental Science</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
