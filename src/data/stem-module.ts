import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';

export const stemModuleData: ModuleData = {
  id: K2Module.Stem,
  title: 'STEM Education',
  subtitle: 'Khoa học ứng dụng',
  description: 'Thí nghiệm vật lý, toán học thực tế và engineering',
  category: 'stem',
  icon: '🔬',
  color: 'from-teal-600 to-green-600',
  level: 'Cơ bản',
  duration: '8-10 giờ',
  features: ['Physics Experiments', 'Math Applications', 'Engineering Design', 'Science Projects'],
  prerequisites: ['Curiosity and interest in science', 'Basic math skills', 'Safety awareness'],
  objectives: [
    'Hiểu và áp dụng phương pháp khoa học.',
    'Thực hiện các thí nghiệm vật lý vui và an toàn tại nhà.',
    'Làm quen với tư duy lập trình và giải quyết vấn đề.',
    'Phát triển kỹ năng thiết kế và kỹ thuật thông qua các thử thách thực tế.',
  ],
  careerOutcomes: [
    'Nền tảng vững chắc cho các ngành học STEM ở bậc cao hơn.',
    'Phát triển tư duy phản biện và kỹ năng giải quyết vấn đề.',
    'Khơi dậy đam mê với khoa học, công nghệ và sáng tạo.',
  ],
  industryApplications: [
    { name: 'Mọi ngành nghề', description: 'Tư duy STEM là cần thiết trong hầu hết các lĩnh vực hiện đại.' },
    { name: 'Nghiên cứu khoa học', description: 'Nền tảng để trở thành nhà khoa học, nhà nghiên cứu.' },
    { name: 'Kỹ thuật', description: 'Bước đầu để trở thành kỹ sư, nhà thiết kế sản phẩm.' },
    { name: 'Công nghệ thông tin', description: 'Làm quen với logic lập trình, nền tảng của ngành CNTT.' },
  ],
  marketDemand: {
    averageSalary: 'N/A',
    jobGrowth: 'Cao (kỹ năng nền tảng)',
    hireDemand: 'Rất cao (kỹ năng nền tảng)',
  },
  relatedModules: ['coding-for-kids', 'fun-physics-experiments', 'engineering-challenges'],
};
