import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { roboticsLessons } from '@/data/robotics';
import { createTitle, createDescription } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';

// Generate metadata
export async function generateMetadata() {
  return {
    title: createTitle('Robotics & Hệ thống tự hành'),
    description: createDescription(
      'Khám phá thế giới robotics, từ thiết kế, lập trình robot cơ bản đến tích hợp AI và các hệ thống tự hành tiên tiến.',
    ),
    keywords: ['robotics', 'hệ thống tự hành', 'lập trình robot', 'AI', 'K2AI'],
    openGraph: {
      title: createTitle('Robotics & Hệ thống tự hành'),
      description: createDescription(
        'Khám phá thế giới robotics, từ thiết kế, lập trình robot cơ bản đến tích hợp AI và các hệ thống tự hành tiên tiến.',
      ),
      type: 'website',
    },
  };
}

export default function RoboticsMainPage() {
  const moduleData = {
    id: K2Module.Robotics,
    title: 'Robotics & Hệ thống tự hành',
    subtitle: 'Thiết kế, xây dựng và lập trình robot thông minh cho tương lai.',
    description:
      'Module này cung cấp kiến thức toàn diện về robotics, từ các thành phần cơ khí và điện tử, lập trình điều khiển chuyển động, đến việc tích hợp cảm biến, thị giác máy tính và trí tuệ nhân tạo để xây dựng các hệ thống tự hành phức tạp.',
    level: 'Nâng cao',
    duration: '10-12 giờ',
    category: 'STEM',
    features: [
      'Thiết kế và lắp ráp robot vật lý',
      'Lập trình điều khiển robot với Python/C++',
      'Tích hợp và xử lý dữ liệu từ cảm biến',
      'Ứng dụng AI và thuật toán cho điều hướng tự động',
    ],
    icon: '🤖',
    color: 'from-purple-600 to-pink-600',
    objectives: [
      'Hiểu các thành phần cơ bản và nguyên tắc hoạt động của robot.',
      'Lập trình và điều khiển chuyển động của robot.',
      'Tích hợp cảm biến và thị giác máy tính cho robot.',
      'Triển khai thuật toán điều hướng tự động và tích hợp AI.',
    ],
    prerequisites: [
      'Kiến thức cơ bản về lập trình (Python hoặc C++)',
      'Hiểu biết về các linh kiện điện tử cơ bản',
      'Tư duy logic và toán học',
      'Kỹ năng giải quyết vấn đề',
    ],
    careerOutcomes: [
      'Kỹ sư Robotics',
      'Chuyên gia Hệ thống Tự động hóa',
      'Kỹ sư AI/ML (chuyên về Robotics)',
      'Kỹ sư Điều khiển và Tự động hóa',
    ],
    industryApplications: [
      'Sản xuất và Lắp ráp công nghiệp',
      'Logistics và Quản lý kho bãi tự động',
      'Y tế và Phẫu thuật robot',
      'Nông nghiệp chính xác và thông minh',
      'Xe tự hành và Giao thông vận tải',
    ],
    marketDemand: {
      averageSalary: '20-45 triệu VNĐ/tháng',
      jobGrowth: '+30%',
      hireDemand: 'Rất cao',
    },
    relatedModules: [K2Module.Arduino, K2Module.Stem, K2Module.AdvancedAI, K2Module.SemiconductorTechnology],
    heroImageUrl: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1200&h=600&fit=crop',
  };

  return <ModulePageTemplate moduleData={moduleData} lessons={roboticsLessons} />;
}
