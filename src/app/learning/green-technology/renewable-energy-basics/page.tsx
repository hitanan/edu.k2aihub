import type { Metadata } from "next";
import Image from 'next/image';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { greenTechLessons } from '@/data/green-technology';
import { getModuleNavigation, ModuleNavigation } from '@/utils/moduleNavigation';
import { defaultImage } from "@/utils/image";

export const metadata: Metadata = {
  title: createTitle("Renewable Energy Basics - Nền Tảng Năng Lượng Tái Tạo"),
  description: createDescription("Học cơ bản về renewable energy: solar, wind, hydro và energy storage. Thực hành tính toán hiệu suất và thiết kế hệ thống năng lượng tái tạo."),
  keywords: createKeywords(["renewable energy", "solar power", "wind energy", "energy storage", "sustainability", "clean energy"]),
};

const lesson = greenTechLessons.find(l => l.id === 'renewable-energy-basics')!;
const imageUrl = defaultImage;

export default function RenewableEnergyBasicsPage() {
  const navConfig = getModuleNavigation('green-technology', 'renewable-energy-basics') ?? {} as ModuleNavigation;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
      {/* Navigation */}
      <div className="bg-black/20 sticky top-0 z-50 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <a href="/green-technology" className="text-green-400 hover:text-green-300 transition-colors">
                ← Green Technology
              </a>
              <span className="text-gray-500">/</span>
              <span className="text-white font-medium">{lesson.title}</span>
            </div>
            
            <div className="flex items-center space-x-4">
              {navConfig.previous && (
                <a 
                  href={navConfig.previous.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  ← {navConfig.previous.title}
                </a>
              )}
              {navConfig.next && (
                <a 
                  href={navConfig.next.href}
                  className="text-sm bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  {navConfig.next.title} →
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">☀️</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {lesson.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {lesson.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-green-500/20 text-green-200 px-4 py-2 rounded-full">
                ⏱️ {lesson.duration}
              </span>
              <span className="bg-emerald-500/20 text-emerald-200 px-4 py-2 rounded-full">
                🎯 {lesson.difficulty}
              </span>
              <span className="bg-teal-500/20 text-teal-200 px-4 py-2 rounded-full">
                🌱 {lesson.environmentalImpact}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Learning Objectives */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">🎯 Mục Tiêu Học Tập</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lesson.objectives.map((objective, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  {objective}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content Image */}
        <div className="mb-12">
          <Image 
            src={imageUrl} 
            alt="Renewable Energy Sources Overview"
            width={800} 
            height={400}
            className="w-full h-64 md:h-80 object-cover rounded-2xl"
          />
        </div>

        {/* Prerequisites */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">📋 Kiến Thức Cần Thiết</h2>
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6">
            <ul className="space-y-2">
              {lesson.prerequisites.map((prereq, index) => (
                <li key={index} className="flex items-start text-yellow-200">
                  <span className="text-yellow-400 mr-3">•</span>
                  {prereq}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Core Content Sections */}
        <div className="space-y-12">
          {/* Section 1: Solar Energy */}
          <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              ☀️ Solar Energy - Năng Lượng Mặt Trời
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-green-300 mb-4">Photovoltaic (PV) Systems</h3>
                <p className="text-gray-300 mb-4">
                  Photovoltaic cells chuyển đổi ánh sáng mặt trời thành điện năng thông qua hiệu ứng quang điện. 
                  Hiệu suất của PV panels hiện đại dao động từ 15-22%, với công nghệ silicon chiếm 95% thị trường.
                </p>
                
                <div className="bg-gray-900/50 rounded-lg p-4 my-4">
                  <h4 className="text-green-400 font-mono mb-2">Tính toán công suất solar panel:</h4>
                  <pre className="text-green-300 text-sm overflow-x-auto">
{`# Công thức tính công suất solar panel
P = A × r × H × PR

Trong đó:
- P = Công suất kWh/ngày
- A = Diện tích panel (m²)
- r = Hiệu suất panel (%)
- H = Giờ nắng trung bình/ngày
- PR = Performance ratio (0.75-0.85)

Ví dụ:
- A = 20 m²
- r = 20% = 0.20
- H = 5 giờ/ngày
- PR = 0.80

P = 20 × 0.20 × 5 × 0.80 = 16 kWh/ngày`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-green-300 mb-4">Solar Thermal Energy</h3>
                <p className="text-gray-300 mb-4">
                  Solar thermal systems sử dụng nhiệt mặt trời để đun nước nóng hoặc tạo hơi nước cho turbine điện. 
                  Hiệu suất cao hơn PV (60-70%) nhưng chỉ tạo ra nhiệt năng.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-500/10 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-2">🏠 Residential Solar Thermal</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Flat plate collectors</li>
                      <li>• Evacuated tube collectors</li>
                      <li>• Integrated collector storage</li>
                      <li>• Heat pump assisted systems</li>
                    </ul>
                  </div>
                  <div className="bg-orange-500/10 rounded-lg p-4">
                    <h4 className="text-orange-300 font-semibold mb-2">🏭 Industrial Solar Thermal</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Concentrating solar power (CSP)</li>
                      <li>• Parabolic trough systems</li>
                      <li>• Solar power towers</li>
                      <li>• Dish/engine systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Wind Energy */}
          <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              💨 Wind Energy - Năng Lượng Gió
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-green-300 mb-4">Wind Turbine Technology</h3>
                <p className="text-gray-300 mb-4">
                  Modern wind turbines có thể đạt hiệu suất 35-45% với rotor diameter lên đến 200m. 
                  Power curve của turbine cho thấy mối quan hệ giữa wind speed và electrical output.
                </p>
                
                <div className="bg-gray-900/50 rounded-lg p-4 my-4">
                  <h4 className="text-green-400 font-mono mb-2">Tính toán wind power:</h4>
                  <pre className="text-green-300 text-sm overflow-x-auto">
{`# Công thức tính wind power
P = 0.5 × ρ × A × v³ × Cp

Trong đó:
- P = Power (Watts)
- ρ = Air density (kg/m³) ≈ 1.225
- A = Swept area (m²) = π × r²
- v = Wind speed (m/s)
- Cp = Power coefficient (0.35-0.45)

Ví dụ turbine 2MW:
- Radius = 50m
- A = π × 50² = 7,854 m²
- v = 12 m/s
- Cp = 0.4

P = 0.5 × 1.225 × 7,854 × 12³ × 0.4
P = 2,640,000 W = 2.64 MW`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-green-300 mb-4">Offshore vs Onshore Wind</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-500/10 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-3">🌊 Offshore Wind</h4>
                    <div className="space-y-2 text-sm text-gray-300">
                      <div className="flex justify-between">
                        <span>Wind speed:</span>
                        <span className="text-blue-300">8-12 m/s</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Capacity factor:</span>
                        <span className="text-blue-300">40-50%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Installation cost:</span>
                        <span className="text-red-300">$3-5M/MW</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Turbine size:</span>
                        <span className="text-blue-300">8-15 MW</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-500/10 rounded-lg p-4">
                    <h4 className="text-green-300 font-semibold mb-3">🏔️ Onshore Wind</h4>
                    <div className="space-y-2 text-sm text-gray-300">
                      <div className="flex justify-between">
                        <span>Wind speed:</span>
                        <span className="text-green-300">6-9 m/s</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Capacity factor:</span>
                        <span className="text-green-300">25-35%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Installation cost:</span>
                        <span className="text-green-300">$1-2M/MW</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Turbine size:</span>
                        <span className="text-green-300">2-5 MW</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Energy Storage */}
          <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              🔋 Energy Storage - Lưu Trữ Năng Lượng
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-green-300 mb-4">Battery Storage Systems</h3>
                <p className="text-gray-300 mb-4">
                  Energy storage giải quyết vấn đề intermittency của renewable energy. 
                  Li-ion batteries là công nghệ phổ biến nhất với energy density 150-250 Wh/kg.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-purple-500/10 rounded-lg p-4">
                    <h4 className="text-purple-300 font-semibold mb-2">🔋 Li-ion</h4>
                    <ul className="text-gray-300 text-xs space-y-1">
                      <li>• Energy density: 150-250 Wh/kg</li>
                      <li>• Cycle life: 1,000-5,000</li>
                      <li>• Efficiency: 85-95%</li>
                      <li>• Response time: Milliseconds</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-500/10 rounded-lg p-4">
                    <h4 className="text-yellow-300 font-semibold mb-2">⚡ Lead-acid</h4>
                    <ul className="text-gray-300 text-xs space-y-1">
                      <li>• Energy density: 30-50 Wh/kg</li>
                      <li>• Cycle life: 200-2,000</li>
                      <li>• Efficiency: 70-85%</li>
                      <li>• Cost: $100-200/kWh</li>
                    </ul>
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-4">
                    <h4 className="text-green-300 font-semibold mb-2">🌊 Flow Battery</h4>
                    <ul className="text-gray-300 text-xs space-y-1">
                      <li>• Energy density: 15-25 Wh/kg</li>
                      <li>• Cycle life: 10,000+</li>
                      <li>• Efficiency: 65-85%</li>
                      <li>• Scalability: Excellent</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-green-300 mb-4">Grid-Scale Storage Solutions</h3>
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-green-400 font-mono mb-2">Battery sizing calculation:</h4>
                  <pre className="text-green-300 text-sm overflow-x-auto">
{`# Tính toán battery capacity cho solar system
Daily energy consumption = 30 kWh
Days of autonomy = 3 days
System voltage = 48V
Battery depth of discharge (DOD) = 80%

Required battery capacity:
Ah = (Daily consumption × Days) / (Voltage × DOD)
Ah = (30 × 3) / (48 × 0.8)
Ah = 90 / 38.4 = 2,344 Ah

Number of batteries (100Ah each):
Count = 2,344 / 100 = 24 batteries

Total cost estimate:
24 × $500 = $12,000`}
                  </pre>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Practical Exercises */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">🛠️ Bài Tập Thực Hành</h2>
          <div className="space-y-6">
            {lesson.exercises.map((exercise, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-green-300 mb-4">
                  Bài tập {index + 1}: {exercise.title}
                </h3>
                <p className="text-gray-300 mb-4">{exercise.description}</p>
                
                <div className="bg-blue-500/10 rounded-lg p-4 mb-4">
                  <h4 className="text-blue-300 font-medium mb-2">📝 Yêu cầu:</h4>
                  <ul className="text-gray-300 space-y-1">
                    {exercise.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <details className="bg-green-500/10 rounded-lg p-4">
                  <summary className="text-green-300 font-medium cursor-pointer mb-2">
                    💡 Gợi ý giải
                  </summary>
                  <div className="text-gray-300 mt-2">
                    {exercise.solution}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>

        {/* Real-world Applications */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">🌍 Ứng Dụng Thực Tế</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lesson.realWorldApplications.map((app, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🌍</div>
                <div className="text-purple-300 text-sm font-semibold">{app}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">📚 Tài Liệu Tham Khảo</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-300 mb-3">📖 Reading Materials</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• &ldquo;Renewable Energy: Power for a Sustainable Future&rdquo; - Oxford University Press</li>
                  <li>• IRENA Global Energy Transformation Reports</li>
                  <li>• IEA World Energy Outlook</li>
                  <li>• NREL Solar Resource Data</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-green-300 mb-3">🛠️ Tools & Software</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• PVsyst - Solar PV system design</li>
                  <li>• HOMER Grid - Microgrid design</li>
                  <li>• SAM - System Advisor Model</li>
                  <li>• WindPRO - Wind resource assessment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl p-8 border border-green-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">🎉 Hoàn thành bài học!</h2>
            <p className="text-gray-300 mb-6">
              Bạn đã học được cơ bản về renewable energy systems. 
              Tiếp theo, hãy khám phá cách ứng dụng IoT để tạo Smart Cities.
            </p>
            {navConfig.next && (
              <a 
                href={navConfig.next.href}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {navConfig.next.title} →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
