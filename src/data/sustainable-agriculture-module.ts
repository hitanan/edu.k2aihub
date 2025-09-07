import { K2Module } from '@/data/moduleNavigation';
import { ModuleData } from '@/types';

export const sustainableAgricultureModuleData: ModuleData = {
  id: 'sustainable-agriculture',
  title: 'Nông nghiệp Bền vững và AgriTech',
  subtitle: 'Gieo mầm Tương lai Xanh',
  description:
    'Đối mặt với thách thức về biến đổi khí hậu và an ninh lương thực, nông nghiệp bền vững kết hợp với công nghệ cao (AgriTech) là chìa khóa cho tương lai. Khóa học này giới thiệu các phương pháp canh tác thân thiện với môi trường và ứng dụng công nghệ để tối ưu hóa năng suất, giảm thiểu tác động và tạo ra một chuỗi cung ứng thực phẩm minh bạch, hiệu quả.',
  level: 'Trung bình',
  duration: '15-20 giờ',
  category: 'Green Technology',
  features: [
    'Tìm hiểu về các mô hình canh tác hữu cơ, permaculture.',
    'Ứng dụng IoT và cảm biến trong quản lý trang trại.',
    'Sử dụng drone để giám sát và phân tích cây trồng.',
    'Xây dựng mô hình kinh tế tuần hoàn trong nông nghiệp.',
  ],
  icon: '🌿',
  color: 'from-lime-500 to-green-500',
  heroImageUrl: 'https://images.unsplash.com/photo-1492496913980-501348b61469?w=1200&h=600&fit=crop',
  objectives: [
    'Hiểu các nguyên tắc cốt lõi của nông nghiệp bền vững.',
    'Phân tích và lựa chọn các công nghệ AgriTech phù hợp.',
    'Thiết kế một hệ thống canh tác tuần hoàn đơn giản.',
    'Đánh giá được lợi ích kinh tế và môi trường của AgriTech.',
    'Xây dựng nền tảng để khởi nghiệp trong lĩnh vực nông nghiệp công nghệ cao.',
  ],
  prerequisites: [
    'Quan tâm đến nông nghiệp, công nghệ và môi trường.',
    'Tư duy hệ thống và kỹ năng giải quyết vấn đề.',
  ],
  careerOutcomes: [
    'Chuyên gia AgriTech',
    'Quản lý trang trại thông minh',
    'Nhà phát triển giải pháp IoT cho nông nghiệp',
    'Doanh nhân khởi nghiệp trong lĩnh vực nông nghiệp bền vững',
  ],
  industryApplications: [
    'Canh tác chính xác (Precision Farming)',
    'Chuỗi cung ứng thực phẩm minh bạch (Food Traceability)',
    'Nông nghiệp đô thị (Urban Farming)',
    'Quản lý tài nguyên nước thông minh.',
  ],
  marketDemand: {
    averageSalary: '20-40 triệu VNĐ',
    jobGrowth: '+35%',
    hireDemand: 'Rất cao',
  },
  relatedModules: [K2Module.GreenTechnology, K2Module.EnvironmentalDataScience, K2Module.CircularEconomy],
};
