import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';

export const semiconductorTechnologyModuleData: ModuleData = {
  id: 'semiconductor-technology',
  title: 'Công nghệ Bán dẫn & Thiết kế Vi mạch',
  subtitle: 'Khám phá thế giới vi mô định hình tương lai công nghệ.',
  description:
    'Khóa học này cung cấp kiến thức toàn diện về ngành công nghiệp bán dẫn, từ những nguyên lý vật lý cơ bản, quy trình thiết kế và chế tạo vi mạch phức tạp, đến các ứng dụng trong AI và điện toán hiệu năng cao. Đây là bước đệm vững chắc cho sự nghiệp trong ngành công nghệ cao đang bùng nổ tại Việt Nam.',
  level: 'Cơ bản - Nâng cao',
  duration: '25-30 giờ',
  category: 'Science & Research',
  features: [
    'Kiến thức từ cơ bản đến chuyên sâu về vật lý bán dẫn.',
    'Tìm hiểu quy trình thiết kế và chế tạo chip thực tế.',
    'Cập nhật các công nghệ tiên tiến như FinFET, EUV và chip AI.',
    'Kết nối với bối cảnh và cơ hội việc làm tại Việt Nam.',
  ],
  icon: '🔬',
  color: 'from-blue-500 to-purple-500',
  heroImageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2e79?w=1200&h=600&fit=crop',
  objectives: [
    'Hiểu nguyên lý hoạt động của transistor và các linh kiện bán dẫn.',
    'Nắm vững các bước trong quy trình thiết kế vi mạch (IC Design).',
    'Phân biệt được các công nghệ chế tạo (fabrication) khác nhau.',
    'Phân tích được kiến trúc của các loại chip chuyên dụng (CPU, GPU, AI Chip).',
  ],
  prerequisites: ['Kiến thức cơ bản về Vật lý và Hóa học.', 'Tư duy logic và khả năng phân tích hệ thống.'],
  careerOutcomes: [
    'Kỹ sư Thiết kế Vi mạch (IC Design Engineer)',
    'Kỹ sư Quy trình (Process Engineer)',
    'Kỹ sư Kiểm thử (Test Engineer)',
    'Kỹ sư Ứng dụng (Application Engineer)',
  ],
  industryApplications: [
    'Điện tử tiêu dùng (smartphone, laptop)',
    'Trung tâm dữ liệu và điện toán đám mây',
    'Công nghiệp ô tô (xe tự lái)',
    'Trí tuệ nhân tạo và Học máy',
  ],
  marketDemand: {
    averageSalary: '25-60 triệu VNĐ',
    jobGrowth: '+85%',
    hireDemand: 'Rất cao',
  },
  relatedModules: [K2Module.Robotics, K2Module.AdvancedAI, K2Module.QuantumComputingEducation],
};
