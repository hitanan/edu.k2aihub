import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { robosimLessons } from '@/data/modules/robosim';
import { createTitle, createDescription } from '@/utils/seo';
import { K2Module } from '@/data/k2-modules';

export async function generateMetadata() {
  return {
    title: createTitle('Robosim - Lập trình và Thi đấu Robotics Giả lập'),
    description: createDescription(
      'Học lập trình robot, xây dựng chiến thuật và chinh phục các cuộc thi robotics hàng đầu Việt Nam như VEX IQ, FLL qua môi trường giả lập 3D.',
    ),
    keywords: ['robotics', 'robosim', 'VEX IQ', 'FIRST LEGO League', 'lập trình robot', 'giáo dục STEM', 'K2AI'],
    openGraph: {
      title: 'Robosim - Lập trình và Thi đấu Robotics Giả lập',
      description: 'Chinh phục các cuộc thi robotics hàng đầu Việt Nam như VEX IQ, FLL qua môi trường giả lập 3D.',
      type: 'website',
    },
  };
}

export default function RobosimModulePage() {
  const moduleData = {
    id: 'robosim',
    title: 'Robosim - Lập trình và Thi đấu Robotics Giả lập',
    subtitle: 'Từ sân chơi ảo đến đấu trường quốc tế',
    description:
      'Module này cung cấp kiến thức toàn diện về lập trình robot và chiến thuật thi đấu thông qua các nền tảng giả lập 3D. Học sinh sẽ được làm quen với các cuộc thi robotics phổ biến nhất dành cho lứa tuổi tiểu học và trung học tại Việt Nam, bao gồm VEX IQ, FIRST LEGO League (FLL), và RoboBimi. Nội dung tập trung vào việc phân tích luật chơi, xây dựng chiến thuật hiệu quả, và lập trình robot để giải quyết các thử thách, giúp học sinh sẵn sàng cho các cuộc thi thực tế.',
    level: 'Cơ bản - Nâng cao',
    duration: '20-30 giờ',
    category: 'STEM & Robotics',
    features: [
      'Làm quen với các cuộc thi robotics hàng đầu: VEX IQ, FLL.',
      'Học lập trình robot với VEXcode VR và LEGO Mindstorms.',
      'Phân tích luật chơi và xây dựng chiến thuật thi đấu.',
      'Phát triển kỹ năng giải quyết vấn đề, làm việc nhóm và tư duy phản biện.',
    ],
    icon: '🤖',
    color: 'from-green-500 to-teal-500',
    objectives: [
      'Hiểu rõ luật chơi và cách tính điểm của các cuộc thi robotics phổ biến.',
      'Thiết kế và lập trình robot ảo để hoàn thành các nhiệm vụ thi đấu.',
      'Xây dựng và kiểm thử các chiến thuật thi đấu hiệu quả.',
      'Phát triển kỹ năng mềm cần thiết cho các cuộc thi: làm việc nhóm, quản lý thời gian, giải quyết vấn đề.',
    ],
    prerequisites: [
      'Tư duy logic và yêu thích giải quyết vấn đề.',
      'Đam mê với robot và công nghệ.',
      'Không yêu cầu kinh nghiệm lập trình hay cơ khí trước đó.',
    ],
    careerOutcomes: [
      'Kỹ sư Robotics',
      'Lập trình viên hệ thống nhúng',
      'Chuyên gia tự động hóa',
      'Nhà phát triển game giả lập',
    ],
    industryApplications: [
      'Thử nghiệm và phát triển robot công nghiệp trong môi trường ảo.',
      'Huấn luyện AI cho xe tự hành.',
      'Mô phỏng và tối ưu hóa các quy trình sản xuất tự động.',
      'Giáo dục và đào tạo kỹ sư robotics thế hệ mới.',
    ],
    marketDemand: {
      averageSalary: '18-40 triệu VNĐ',
      jobGrowth: '+30%',
      hireDemand: 'Rất cao',
    },
    relatedModules: [K2Module.Robotics, K2Module.Python, K2Module.GameDevelopment],
    heroImageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
  };

  return <ModulePageTemplate moduleData={moduleData} lessons={robosimLessons} />;
}
