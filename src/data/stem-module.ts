import { K2Module } from '@/data/moduleNavigation';
import { ModuleData } from '@/types';

export const stemModuleData: ModuleData = {
  id: 'stem',
  title: 'STEM Education',
  subtitle: 'Khoa Học - Công Nghệ - Kỹ Thuật - Toán Học',
  description:
    'Khám phá thế giới STEM/STEAM qua các bài học thực hành thú vị. Từ thí nghiệm khoa học đến lập trình, kỹ thuật và nghệ thuật sáng tạo - phát triển tư duy khoa học và sáng tạo.',
  level: 'Cơ bản - Nâng cao',
  duration: '25-30 giờ',
  category: 'Science & Research',
  features: [
    'Học qua dự án thực tế',
    'Phát triển tư duy phản biện',
    'Tích hợp liên môn (STEAM)',
    'Chuẩn bị cho tương lai số',
  ],
  icon: '🔬',
  color: 'from-pink-500 to-purple-500',
  heroImageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop',
  objectives: [
    'Nắm vững phương pháp luận khoa học.',
    'Áp dụng quy trình thiết kế kỹ thuật để giải quyết vấn đề.',
    'Sử dụng công nghệ và lập trình để tạo ra sản phẩm.',
    'Phát triển kỹ năng tư duy logic và phân tích dữ liệu.',
  ],
  prerequisites: [
    'Sự tò mò, không ngại đặt câu hỏi.',
    'Tinh thần ham học hỏi và khám phá.',
    'Không yêu cầu kiến thức nền tảng chuyên sâu.',
  ],
  careerOutcomes: [
    'Kỹ sư Phần mềm',
    'Nhà khoa học Dữ liệu',
    'Kỹ sư Robot',
    'Nhà nghiên cứu Y sinh',
    'Chuyên gia Phân tích Môi trường',
  ],
  industryApplications: [
    'Y tế & Chăm sóc sức khỏe',
    'Công nghệ thông tin',
    'Năng lượng tái tạo',
    'Hàng không & Vũ trụ',
    'Nông nghiệp công nghệ cao',
  ],
  marketDemand: {
    averageSalary: '20-45 triệu VNĐ',
    jobGrowth: '+15%',
    hireDemand: 'Rất cao',
  },
  relatedModules: [K2Module.Scratch, K2Module.Python, K2Module.Arduino],
};
