import { K2Module } from '@/data/moduleNavigation';
import { ModuleData } from '@/types';

export const professionalSoftSkillsModuleData: ModuleData = {
  id: 'professional-soft-skills',
  title: 'Kỹ Năng Mềm và Giao Tiếp Chuyên Nghiệp',
  subtitle: 'Nâng tầm sự nghiệp với bộ kỹ năng mềm toàn diện.',
  description:
    'Trang bị những kỹ năng mềm thiết yếu để thành công trong môi trường làm việc hiện đại, từ giao tiếp, thuyết trình, lãnh đạo đến quản lý thời gian và đàm phán.',
  level: 'Cơ bản',
  duration: '10-12 giờ',
  category: 'Phát triển bản thân',
  features: [
    '5 khóa học chuyên sâu về các kỹ năng mềm quan trọng nhất.',
    'Bài tập thực hành, tình huống thực tế và case study.',
    'Học cách xây dựng thương hiệu cá nhân và giao tiếp hiệu quả.',
    'Phát triển kỹ năng lãnh đạo và làm việc nhóm.',
  ],
  icon: '🤝',
  color: 'from-sky-500 to-indigo-500',
  heroImageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop',
  objectives: [
    'Tự tin thuyết trình và truyền đạt ý tưởng một cách thuyết phục.',
    'Viết email và văn bản công việc chuyên nghiệp, hiệu quả.',
    'Nắm vững các nguyên tắc lãnh đạo và quản lý đội nhóm.',
    'Thành thạo kỹ năng đàm phán và thuyết phục.',
    'Quản lý thời gian và công việc hiệu quả để tối ưu năng suất.',
  ],
  prerequisites: ['Không yêu cầu kiến thức chuyên môn.'],
  careerOutcomes: [
    'Chuyên viên nhân sự',
    'Trưởng nhóm / Quản lý dự án',
    'Chuyên viên phát triển kinh doanh',
    'Bất kỳ vị trí chuyên nghiệp nào đòi hỏi kỹ năng giao tiếp và làm việc nhóm',
  ],
  industryApplications: [
    'Công nghệ thông tin',
    'Kinh doanh và Bán hàng',
    'Marketing và Truyền thông',
    'Dịch vụ khách hàng',
    'Quản lý và Nhân sự',
  ],
  marketDemand: {
    averageSalary: 'Tăng 15-25% lương',
    jobGrowth: '+20%',
    hireDemand: 'Rất cao',
  },
  relatedModules: [K2Module.DigitalMarketing, K2Module.FinancialLiteracy, K2Module.AI],
};
