import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { physicsOfSportsLessons } from '@/data/physics-of-sports';
import { createTitle, createDescription } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';

export async function generateMetadata() {
  return {
    title: createTitle('Vật lý trong Thể thao'),
    description: createDescription('Khám phá các nguyên tắc vật lý hấp dẫn đằng sau các môn thể thao yêu thích của bạn.'),
  };
}

export default function PhysicsOfSportsPage() {
  const moduleData = {
    id: 'physics-of-sports',
    title: 'Vật lý trong Thể thao',
    subtitle: 'Từ sân cỏ đến sân băng, vật lý ở khắp mọi nơi.',
    description: 'Module này biến các khái niệm vật lý trừu tượng thành những bài học trực quan và thú vị thông qua lăng kính của các môn thể thao như bóng đá, bóng rổ, và trượt ván.',
    level: 'Cơ bản',
    duration: '10-12 giờ',
    category: 'Science & Research',
    features: ['Học vật lý qua các ví dụ thực tế.', 'Thí nghiệm ảo tương tác.', 'Phân tích video chuyển động chậm.', 'Thử thách thiết kế và kỹ thuật.'],
    icon: '⚽',
    color: 'from-teal-600 to-cyan-600',
    objectives: ['Áp dụng các định luật Newton vào chuyển động trong thể thao.', 'Hiểu về khí động học và thủy động lực học.', 'Phân tích năng lượng và động lượng trong các va chạm.'],
    prerequisites: ['Đam mê thể thao.', 'Tư duy logic cơ bản.'],
    careerOutcomes: ['Nhà khoa học dữ liệu thể thao.', 'Kỹ sư thiết bị thể thao.', 'Chuyên gia phân tích hiệu suất.'],
    industryApplications: ['Phân tích hiệu suất vận động viên.', 'Thiết kế dụng cụ thể thao.', 'Phát triển game mô phỏng thể thao.'],
    marketDemand: { averageSalary: '18-35 triệu VNĐ', jobGrowth: '+15%', hireDemand: 'Trung bình' },
    relatedModules: [K2Module.DataScienceAnalytics, K2Module.GameDevelopment]
  };

  return (
    <ModulePageTemplate
      moduleData={moduleData}
      lessons={physicsOfSportsLessons}
    />
  );
}
