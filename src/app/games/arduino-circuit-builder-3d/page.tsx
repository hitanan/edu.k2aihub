import React from 'react';
import { Metadata } from 'next';
import ArduinoCircuitBuilder3D from '@/components/games/ArduinoCircuitBuilder3D';
import { createTitle, createDescription } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle('Arduino Circuit Builder 3D - Xây dựng mạch điện tử 3D tương tác'),
  description: createDescription('Tạo và test các mạch Arduino trong môi trường 3D. Học điện tử thực hành với components ảo, validation mạch, và thử thách engineering từ cơ bản đến nâng cao.'),
  keywords: ['Arduino', '3D circuit builder', 'electronics', 'điện tử', 'IoT', 'microcontroller', 'STEM education', 'engineering', 'maker'],
  openGraph: {    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',

    title: 'Arduino Circuit Builder 3D - Xây dựng mạch điện tử 3D',
    description: 'Môi trường 3D tương tác để học Arduino và điện tử. Tạo mạch với validation thời gian thực.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('K2AiHub Educational Content'),
    description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
  },
};

export default function ArduinoCircuitBuilder3DGame() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8">
      <div className="container mx-auto px-4">
        {/* Game Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Arduino Circuit Builder 3D
          </h1>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            Khám phá thế giới điện tử và IoT qua việc xây dựng mạch Arduino trong môi trường 3D tương tác. 
            Từ LED đơn giản đến hệ thống cảm biến phức tạp, tất cả đều có thể thực hiện ngay trên trình duyệt.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-800/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-300 mb-2">🔧 Component Library</h3>
              <p className="text-gray-300 text-sm">
                Arduino Uno, LEDs, resistors, sensors và nhiều linh kiện khác với 3D visualization thực tế
              </p>
            </div>
            <div className="bg-green-800/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-300 mb-2">⚡ Real-time Validation</h3>
              <p className="text-gray-300 text-sm">
                Kiểm tra mạch tự động với circuit validation rules và safety warnings
              </p>
            </div>
            <div className="bg-purple-800/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-purple-300 mb-2">🎯 Vietnamese Context</h3>
              <p className="text-gray-300 text-sm">
                Thử thách từ đèn Tết đến hệ thống giao thông, ứng dụng thực tế tại Việt Nam
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">🚀 Tính Năng Nổi Bật</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>3D drag-and-drop component placement với physics-based interactions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Real-time circuit simulation với LED animations và voltage display</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Progressive challenges: từ LED cơ bản đến IoT sensor systems</span>
                </li>
              </ul>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Automated safety checks: current limiting, voltage compatibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Vietnamese engineering context: traffic lights, home automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Educational tooltips và component specifications</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-800/40 to-cyan-800/40 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">🎓 Học Tập Qua Thực Hành</h3>
            <p className="text-gray-300 mb-4">
              Game này không chỉ là tool mà là complete learning platform cho Arduino và IoT development:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl mb-2">⚡</div>
                <h4 className="font-semibold text-blue-300">Circuit Fundamentals</h4>
                <p className="text-sm text-gray-400">Ohm&apos;s law, current limiting, voltage dividers</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🔌</div>
                <h4 className="font-semibold text-green-300">Arduino Programming</h4>
                <p className="text-sm text-gray-400">Digital I/O, PWM, sensor interfacing</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🛡️</div>
                <h4 className="font-semibold text-purple-300">Safety Practices</h4>
                <p className="text-sm text-gray-400">Component ratings, protective circuits</p>
              </div>
            </div>
          </div>
        </div>

        {/* Game Component */}
        <div className="w-full max-w-7xl mx-auto">
          <ArduinoCircuitBuilder3D />
        </div>

        {/* Learning Connections */}
        <div className="max-w-6xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-indigo-800/30 to-blue-800/30 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">🔗 Kết Nối Với Curriculum</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-300 mb-2">Arduino & IoT Programming</h4>
                <p className="text-gray-400 text-sm mb-3">
                  Áp dụng kiến thức từ Arduino lessons vào circuit design thực tế
                </p>
                <div className="text-xs text-gray-500">
                  Lessons: Arduino Setup, LED Control, Sensor Integration
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-green-300 mb-2">STEM Education</h4>
                <p className="text-gray-400 text-sm mb-3">
                  Thực hành physics principles và engineering design thinking
                </p>
                <div className="text-xs text-gray-500">
                  Lessons: Physics Experiments, Engineering Challenges
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-300 mb-2">Robotics</h4>
                <p className="text-gray-400 text-sm mb-3">
                  Foundation cho robot control systems và actuator integration
                </p>
                <div className="text-xs text-gray-500">
                  Lessons: Robot Hardware, Sensor Systems, Motor Control
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vietnamese Market Context */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-gradient-to-r from-yellow-800/30 to-orange-800/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">🇻🇳 Ứng Dụng Trong Bối Cảnh Việt Nam</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-300 mb-2">Công Nghiệp 4.0</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Smart factory automation tại các KCN</li>
                  <li>• IoT sensors cho nông nghiệp công nghệ cao</li>
                  <li>• Environmental monitoring systems</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-300 mb-2">Smart City Development</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Traffic management systems (TP.HCM, Hà Nội)</li>
                  <li>• Flood monitoring networks (Mekong Delta)</li>
                  <li>• Smart home automation cho urban areas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
