import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';

export const sustainableEnergyModuleData: ModuleData = {
  id: 'sustainable-energy-green-tech',
  title: 'Năng lượng Tái tạo & Công nghệ Xanh',
  subtitle: 'Xây dựng một tương lai bền vững với năng lượng sạch và công nghệ xanh',
  description:
    'Khám phá các nguồn năng lượng tái tạo như mặt trời, gió, và thủy điện, cùng với các công nghệ xanh đột phá đang định hình lại thế giới của chúng ta, từ xe điện đến các tòa nhà thông minh.',
  level: 'Trung cấp',
  duration: '25-30 giờ',
  category: 'Khoa học Môi trường',
  features: [
    'Phân tích các loại năng lượng tái tạo.',
    'Thiết kế hệ thống năng lượng mặt trời cơ bản.',
    'Hiểu về lưới điện thông minh (smart grids).',
    'Nghiên cứu về xe điện và hạ tầng sạc.',
    'Tìm hiểu về kinh tế tuần hoàn và vật liệu bền vững.',
  ],
  icon: '♻️',
  color: 'from-green-500 to-teal-500',
  heroImageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&h=600&fit=crop',
  objectives: [
    'Nắm vững ưu và nhược điểm của các nguồn năng lượng tái tạo chính.',
    'Đánh giá tiềm năng năng lượng tái tạo tại Việt Nam.',
    'Hiểu các nguyên tắc của công nghệ xanh và phát triển bền vững.',
    'Phân tích chính sách và tác động kinh tế của năng lượng xanh.',
  ],
  prerequisites: [
    'Kiến thức cơ bản về khoa học tự nhiên (Lý, Hóa).',
    'Hiểu biết về các vấn đề môi trường hiện tại.',
    'Tư duy hệ thống và khả năng phân tích.',
  ],
  careerOutcomes: [
    'Kỹ sư Năng lượng Tái tạo',
    'Chuyên gia Tư vấn Môi trường',
    'Quản lý Dự án Năng lượng Xanh',
    'Chuyên viên Phân tích Chính sách Năng lượng',
  ],
  industryApplications: [
    'Phát triển các trang trại điện mặt trời và điện gió.',
    'Tư vấn giải pháp tiết kiệm năng lượng cho doanh nghiệp.',
    'Quản lý và vận hành các nhà máy thủy điện.',
    'Nghiên cứu và phát triển công nghệ lưu trữ năng lượng (pin).',
    'Xây dựng và phát triển đô thị thông minh, bền vững.',
  ],
  marketDemand: {
    averageSalary: '20-45 triệu VNĐ',
    jobGrowth: '+40%',
    hireDemand: 'Cao',
  },
  relatedModules: [K2Module.EnvironmentalDataScience, K2Module.Stem, K2Module.CircularEconomy],
};
