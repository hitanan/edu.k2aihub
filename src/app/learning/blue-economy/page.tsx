import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { blueEconomyLessons } from '@/data/blue-economy';
import { createModuleMetadata } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  'Kinh Tế Biển Xanh & Công Nghệ Biển',
  'Khóa học toàn diện về kinh tế biển bền vững, từ nuôi trồng thủy sản thông minh đến năng lượng tái tạo biển. Khai thác tiềm năng 3.200km bờ biển Việt Nam.',
  ['kinh tế biển', 'nuôi trồng thủy sản', 'năng lượng biển', 'công nghệ biển', 'IoT', 'AI', 'bền vững'],
  'blue-economy'
);

export default function BlueEconomyMainPage() {
  const moduleData = {
    id: 'blue-economy',
    title: 'Kinh Tế Biển Xanh & Công Nghệ Biển',
    subtitle: 'Khai thác tiềm năng 3.200km bờ biển Việt Nam',
    description: 'Phát triển kinh tế biển bền vững với công nghệ thông minh, từ nuôi trồng thủy sản đến năng lượng tái tạo biển. Đây là cơ hội vàng cho Việt Nam trở thành cường quốc biển.',
    level: 'Trung bình',
    duration: '8-12 giờ',
    category: 'Ocean Technology',
    features: [
      'Smart Aquaculture với IoT & AI monitoring',
      'Marine Renewable Energy systems',
      'Ocean Data Analytics platforms',
      'Sustainable Fisheries Management'
    ],
    icon: '🌊',
    color: 'from-blue-600 to-cyan-600',
    objectives: [
      'Nắm vững khái niệm kinh tế biển xanh và tiềm năng Việt Nam',
      'Thiết kế hệ thống IoT cho nuôi trồng thủy sản thông minh',
      'Phát triển giải pháp năng lượng tái tạo biển',
      'Ứng dụng công nghệ sinh học biển trong dược phẩm',
      'Xây dựng hệ thống quản lý nghề cá bền vững'
    ],
    prerequisites: [
      'Kiến thức cơ bản về kinh tế học',
      'Hiểu biết về môi trường biển',
      'IoT và cảm biến cơ bản'
    ],
    careerOutcomes: [
      'Marine Technology Engineer ($2,000-4,000/tháng)',
      'Aquaculture IoT Specialist ($1,500-3,000/tháng)',
      'Ocean Data Analyst ($1,800-3,500/tháng)',
      'Marine Renewable Energy Consultant ($2,200-4,200/tháng)',
      'Blue Economy Project Manager ($2,500-5,000/tháng)'
    ],
    industryApplications: [
      'Ngành nuôi trồng thủy sản (thứ 3 thế giới)',
      'Du lịch biển và công viên biển',
      'Năng lượng gió ngoài khơi',
      'Công nghiệp dược phẩm từ biển',
      'Vận tải biển và logistics cảng'
    ],
    marketDemand: {
      averageSalary: '20-45 triệu VNĐ',
      jobGrowth: '+45%',
      hireDemand: 'Rất cao'
    },
    relatedModules: [
      K2Module.GreenTechnology,
      K2Module.Arduino,
      K2Module.STEM,
      K2Module.EnvironmentalDataScience
    ],
    heroImageUrl: '/images/blue-economy-hero.jpg'
  };

  return (
    <ModulePageTemplate
      moduleData={moduleData}
      lessons={blueEconomyLessons}
    />
  );
}
