import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import RenewableEnergyManagerGame from '@/components/games/individual/RenewableEnergyManagerGame';

export const metadata: Metadata = createGameMetadata('renewable-energy-manager');

export default function RenewableEnergyManagerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-emerald-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">🌱 Quản Lý Năng Lượng Tái Tạo</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Xây dựng hệ thống năng lượng sạch, tối ưu hóa hiệu suất và tạo ra tương lai bền vững cho hành tinh!
          </p>
        </div>

        <RenewableEnergyManagerGame />
      </div>
    </div>
  );
}
