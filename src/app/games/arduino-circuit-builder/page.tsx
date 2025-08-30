import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import ArduinoCircuitBuilderGame from '@/components/games/individual/ArduinoCircuitBuilderGame';

export const metadata: Metadata = createGameMetadata('arduino-circuit-builder');

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
