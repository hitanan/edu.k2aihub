import { Metadata } from 'next';
import { createTitle, createDescription } from '@/utils/seo';
import ArduinoCircuitBuilderGame from '@/components/games/individual/ArduinoCircuitBuilderGame';

export const metadata: Metadata = {
  title: createTitle('Xây Dựng Mạch Arduino - Game Giáo Dục'),
  description: createDescription('Học cách thiết kế và lập trình mạch điện với Arduino thông qua game tương tác. Xây dựng mạch LED, cảm biến và nhiều dự án thú vị.'),
  keywords: ['arduino', 'mạch điện', 'led', 'lập trình', 'iot', 'điện tử', 'game giáo dục'],
  openGraph: {    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',

    title: 'Xây Dựng Mạch Arduino - Game Giáo Dục',
    description: 'Học Arduino qua game tương tác với mạch LED, cảm biến và các dự án thực tế.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('K2AiHub Educational Content'),
    description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
  },
};

export default function ArduinoCircuitBuilderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🔧 Xây Dựng Mạch Arduino
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Học cách thiết kế và lập trình mạch điện với Arduino. Xây dựng mạch LED, điều khiển cảm biến và tạo ra những dự án IoT thú vị!
          </p>
        </div>
        
        <ArduinoCircuitBuilderGame />
      </div>
    </div>
  );
}
