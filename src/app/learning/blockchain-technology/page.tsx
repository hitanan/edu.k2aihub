import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { BlockchainLessons } from '@/data/blockchain-technology';
import { createModuleMetadata } from '@/utils/seo';
import { ModuleData } from '@/types';

export const metadata: Metadata = createModuleMetadata(
  'Công nghệ Blockchain & Phát triển Web3',
  'Khám phá thế giới blockchain và Web3. Từ nền tảng tiền điện tử đến hợp đồng thông minh, ứng dụng DeFi và phát triển NFT.',
  ['công nghệ blockchain', 'tiền điện tử', 'hợp đồng thông minh', 'phát triển web3', 'DeFi', 'NFT', 'Ethereum', 'K2AI'],
  'blockchain-technology',
);

const blockchainTechnologyModuleData: ModuleData = {
  id: 'blockchain-technology',
  title: 'Công nghệ Blockchain & Phát triển Web3',
  subtitle: 'Từ Bitcoin đến DApps: Làm chủ công nghệ của tương lai',
  description:
    'Khóa học này cung cấp một cái nhìn toàn diện về công nghệ blockchain, bắt đầu từ những nguyên tắc cơ bản của tiền điện tử, đi sâu vào việc phát triển hợp đồng thông minh trên Ethereum, và khám phá các ứng dụng đột phá trong lĩnh vực Tài chính Phi tập trung (DeFi) và NFT.',
  level: 'Trung cấp',
  duration: '25 giờ',
  category: 'Công nghệ mới',
  heroImageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=600&fit=crop',
  features: [
    'Nền tảng Blockchain & Kiến trúc',
    'Tiền điện tử & Tài sản số',
    'Phát triển Hợp đồng thông minh',
    'Giao thức DeFi & Ứng dụng',
    'Tạo và triển khai NFT',
    'Ngăn xếp phát triển Web3',
  ],
  icon: 'chain',
  color: 'purple',
  objectives: [
    'Hiểu sâu về kiến trúc blockchain và các cơ chế đồng thuận.',
    'Phát triển và triển khai hợp đồng thông minh bằng Solidity trên Ethereum.',
    'Xây dựng các ứng dụng tài chính phi tập trung (DeFi).',
    'Tạo và quản lý các bộ sưu tập NFT (Non-Fungible Token).',
    'Nắm vững các công cụ trong ngăn xếp phát triển Web3.',
  ],
  prerequisites: [
    'Kiến thức lập trình cơ bản (JavaScript hoặc Python được khuyến nghị).',
    'Hiểu biết về các khái niệm phát triển web.',
    'Tư duy logic và khả năng giải quyết vấn đề.',
  ],
  careerOutcomes: [
    'Kỹ sư Blockchain (Lương: 35-80 triệu VNĐ/tháng)',
    'Nhà phát triển Hợp đồng thông minh (Lương: 40-90 triệu VNĐ/tháng)',
    'Kỹ sư Giao thức DeFi (Lương: 50-120 triệu VNĐ/tháng)',
  ],
  industryApplications: [
    'Tài chính: Sàn giao dịch tiền điện tử, Nền tảng cho vay DeFi, Thanh toán xuyên biên giới',
    'Chuỗi cung ứng: Truy xuất nguồn gốc sản phẩm, Quản lý hàng tồn kho minh bạch',
    'Giải trí & Nghệ thuật: Thị trường NFT, GameFi, Quản lý bản quyền số',
  ],
  marketDemand: {
    averageSalary: '55 triệu VNĐ/tháng',
    jobGrowth: '46.6% CAGR',
    hireDemand: 'Rất cao',
  },
  relatedModules: ['financial-literacy', 'cybersecurity', 'python'],
};

export default function BlockchainTechnologyPage() {
  return <ModulePageTemplate moduleData={blockchainTechnologyModuleData} lessons={BlockchainLessons} />;
}
