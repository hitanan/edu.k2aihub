import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';

export const mobileAppDevelopmentModuleData: ModuleData = {
  id: 'mobile-app-development',
  title: 'Phát triển Ứng dụng Di động',
  subtitle: 'Học cách xây dựng ứng dụng cho iOS và Android từ đầu',
  description:
    'Khóa học này cung cấp kiến thức toàn diện về phát triển ứng dụng di động, từ việc lựa chọn công nghệ (React Native, Flutter, Swift, Kotlin) đến thiết kế UI/UX, quản lý trạng thái, và phát hành ứng dụng lên các cửa hàng.',
  level: 'Trung cấp',
  duration: '40-50 giờ',
  category: 'Lập trình & Phát triển',
  features: [
    'Phát triển đa nền tảng với React Native & Flutter',
    'Lập trình native cho iOS (Swift) và Android (Kotlin)',
    'Thiết kế giao diện người dùng (UI/UX) cho di động',
    'Quản lý trạng thái và tích hợp API',
  ],
  icon: '📱',
  color: 'from-cyan-500 to-blue-500',
  heroImageUrl: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=1200&h=600&fit=crop',
  objectives: [
    'Xây dựng được ứng dụng di động hoàn chỉnh cho cả iOS và Android.',
    'Nắm vững các khái niệm cốt lõi của phát triển di động.',
    'Biết cách tối ưu hóa hiệu năng và trải nghiệm người dùng.',
    'Tự tin phát hành ứng dụng lên App Store và Google Play.',
  ],
  prerequisites: [
    'Kiến thức cơ bản về lập trình (JavaScript, Dart hoặc Swift/Kotlin là một lợi thế).',
    'Hiểu biết về HTML/CSS.',
  ],
  careerOutcomes: ['Lập trình viên React Native/Flutter', 'Lập trình viên iOS/Android', 'Mobile App Developer'],
  industryApplications: [
    'Xây dựng ứng dụng thương mại điện tử',
    'Phát triển ứng dụng mạng xã hội',
    'Tạo ra các ứng dụng tiện ích, giải trí',
  ],
  marketDemand: {
    averageSalary: '20-45 triệu VNĐ',
    jobGrowth: '+30%',
    hireDemand: 'Rất cao',
  },
  relatedModules: [K2Module.Python, K2Module.AI, K2Module.Robotics],
};
