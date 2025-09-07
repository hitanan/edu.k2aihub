import { ModuleData } from '@/types';
import { K2Module } from '@/data/moduleNavigation';

export const digitalMarketingModuleData: ModuleData = {
  id: 'digital-marketing',
  title: 'Digital Marketing & E-commerce',
  subtitle: 'Từ chiến lược đến thực thi bán hàng đa kênh',
  description:
    'Khóa học cung cấp kiến thức toàn diện về Digital Marketing và Thương mại điện tử, giúp bạn xây dựng chiến lược, tối ưu hóa các kênh và thúc đẩy doanh số.',
  level: 'Cơ bản đến Nâng cao',
  duration: '20-25 giờ',
  category: 'Kinh doanh & Marketing',
  features: [
    'Chiến lược marketing đa kênh',
    'SEO & Content Marketing',
    'Quảng cáo Google Ads & Facebook Ads',
    'Phân tích dữ liệu và tối ưu hóa',
    'Quản lý sàn thương mại điện tử',
    'Tối ưu hóa tỷ lệ chuyển đổi (CRO)',
  ],
  icon: '🚀',
  color: 'from-blue-500 to-purple-600',
  heroImageUrl: '/images/modules/digital-marketing.jpg',
  objectives: [
    'Nắm vững các khái niệm và công cụ cốt lõi của Digital Marketing.',
    'Xây dựng được một kế hoạch marketing kỹ thuật số hoàn chỉnh.',
    'Thực thi và tối ưu hóa các chiến dịch quảng cáo trên Google và Mạng xã hội.',
    'Phân tích dữ liệu để đo lường hiệu quả và ra quyết định.',
    'Hiểu và vận hành mô hình kinh doanh trên các sàn E-commerce.',
  ],
  prerequisites: [
    'Kiến thức cơ bản về marketing.',
    'Kỹ năng sử dụng máy tính và internet.',
    'Tư duy logic và khả năng phân tích.',
  ],
  careerOutcomes: [
    'Chuyên viên Digital Marketing',
    'Chuyên viên SEO/SEM',
    'Social Media Manager',
    'E-commerce Specialist',
    'Performance Marketing Executive',
  ],
  industryApplications: [
    'Bán lẻ và hàng tiêu dùng',
    'Dịch vụ và Du lịch',
    'Công nghệ và Phần mềm',
    'Giáo dục và Đào tạo',
    'Bất động sản',
  ],
  marketDemand: {
    averageSalary: '15-35 triệu VNĐ/tháng',
    jobGrowth: '25%/năm',
    hireDemand: 'Cao',
  },
  relatedModules: [
    K2Module.AIContentCreator,
    K2Module.GenZMarketing,
    K2Module.DataDrivenAnalytics,
    K2Module.UXUIDesign,
  ],
};
