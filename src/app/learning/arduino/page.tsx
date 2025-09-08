import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { arduinoLessons } from '@/data/arduino';
import { createModuleMetadata } from '@/utils/seo';
import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';

export const metadata: Metadata = createModuleMetadata(
  'Lập Trình Arduino & IoT',
  'Học lập trình Arduino từ cơ bản đến nâng cao. Tạo các project IoT, robotics và embedded systems để làm chủ thế giới phần cứng.',
  ['arduino', 'lập trình', 'iot', 'hệ thống nhúng', 'vi điều khiển', 'cảm biến', 'robotics', 'K2AI'],
  'arduino',
);

const arduinoModuleData: ModuleData = {
  id: 'arduino',
  title: 'Lập Trình Arduino & IoT',
  subtitle: 'Làm chủ thế giới phần cứng và Internet of Things',
  description:
    'Khám phá thế giới Arduino và IoT. Từ LED đơn giản đến hệ thống thông minh - học cách lập trình vi điều khiển, kết nối cảm biến và xây dựng các dự án IoT thực tế.',
  level: 'Cơ bản đến Nâng cao',
  duration: '15-20 giờ',
  category: 'Hardware',
  primaryColor: 'cyan',
  features: [
    'Lập trình C/C++',
    'Tích hợp cảm biến',
    'Giao thức I2C, SPI',
    'Kết nối WiFi/Bluetooth',
    'Xây dựng dự án IoT',
    'Thiết kế mạch điện tử',
  ],
  icon: 'Cpu',
  color: 'cyan',
  gradientColors: 'from-slate-900 via-cyan-900 to-blue-900',
  heroImageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&h=600&fit=crop',

  objectives: [
    'Làm chủ Arduino IDE và quy trình lập trình phần cứng.',
    'Tích hợp và đọc dữ liệu từ nhiều loại cảm biến.',
    'Xây dựng các dự án IoT hoàn chỉnh với kết nối WiFi/Bluetooth.',
    'Thiết kế và triển khai các hệ thống tự động hóa và điều khiển.',
  ],

  prerequisites: ['Kỹ năng máy tính cơ bản.', 'Đam mê với điện tử và sáng tạo.', 'Tư duy giải quyết vấn đề.'],

  careerOutcomes: [
    'Kỹ sư Hệ thống nhúng (Embedded Systems Engineer)',
    'Lập trình viên IoT (IoT Developer)',
    'Nhà thiết kế mẫu phần cứng (Hardware Prototype Designer)',
    'Kỹ sư Tự động hóa (Automation Engineer)',
  ],

  industryApplications: [
    'Nhà thông minh: Tự động hóa đèn, rèm cửa, và các thiết bị gia dụng.',
    'Nông nghiệp Công nghệ cao: Hệ thống tưới tiêu và giám sát môi trường tự động.',
    'Robotics: Xây dựng bộ não cho robot tự hành và cánh tay máy.',
    'Giám sát Môi trường: Các trạm quan trắc chất lượng không khí và nước.',
  ],

  marketDemand: {
    averageSalary: '15.000.000 - 30.000.000 VNĐ/tháng',
    jobGrowth: '20%',
    hireDemand: 'Nhu cầu kỹ sư hệ thống nhúng và IoT đang tăng trưởng mạnh mẽ tại Việt Nam và toàn cầu.',
  },

  relatedModules: [K2Module.Python, K2Module.Robotics, K2Module.Stem],
};

export default function ArduinoPage() {
  return <ModulePageTemplate moduleData={arduinoModuleData} lessons={arduinoLessons} />;
}
