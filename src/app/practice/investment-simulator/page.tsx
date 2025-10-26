import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import InvestmentSimulatorGame from '@/components/games/individual/InvestmentSimulatorGame';

export const metadata: Metadata = createGameMetadata('investment-simulator');

export default function InvestmentSimulatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-green-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            💰 Mô Phỏng Đầu Tư
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Học cách đầu tư thông minh qua game mô phỏng thực tế. Quản lý danh mục đầu tư, phân tích rủi ro và tối ưu hóa lợi nhuận!
          </p>
        </div>
        
        <InvestmentSimulatorGame />
      </div>
    </div>
  );
}
