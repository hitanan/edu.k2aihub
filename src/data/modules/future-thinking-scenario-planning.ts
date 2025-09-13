import { ModuleData } from '@/types';
import { futureThinkingLessons } from '../lessons/future-thinking-scenario-planning';

export const futureThinkingScenarioPlanningModule: ModuleData = {
  id: 'future-thinking-scenario-planning',
  title: 'Tư Duy Tương Lai & Lập Kế Hoạch Kịch Bản',
  subtitle:
    'Phát triển kỹ năng tư duy chiến lược về tương lai, phân tích các xu hướng và xây dựng các kịch bản để chuẩn bị cho sự thay đổi và đưa ra quyết định tốt hơn.',
  description:
    'Module này cung cấp các công cụ và phương pháp để bạn có thể dự báo, phân tích và chuẩn bị cho các tương lai có thể xảy ra. Từ việc nhận diện các tín hiệu yếu đến việc xây dựng các kịch bản chi tiết, bạn sẽ học cách đưa ra các quyết định chiến lược vững chắc hơn trong một thế giới đầy biến động.',
  level: 'Nâng cao',
  duration: '6 giờ',
  category: 'Tư duy chiến lược',
  icon: 'brain',
  color: 'purple',
  heroImageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=600&fit=crop',
  lessons: futureThinkingLessons,
  objectives: [
    'Hiểu các khái niệm cốt lõi của tư duy tương lai và lập kế hoạch kịch bản.',
    'Phân tích các xu hướng và tín hiệu yếu để dự báo các khả năng trong tương lai.',
    'Xây dựng các kịch bản tương lai chi tiết và đáng tin cậy.',
    'Áp dụng tư duy kịch bản vào việc ra quyết định chiến lược cá nhân và tổ chức.',
  ],
  prerequisites: ['Tư duy phản biện', 'Kỹ năng phân tích cơ bản'],
  careerOutcomes: [
    'Chuyên gia hoạch định chiến lược',
    'Nhà phân tích tương lai',
    'Tư vấn quản lý',
    'Nhà quản lý đổi mới',
  ],
  industryApplications: ['Phát triển kinh doanh', 'Hoạch định chính sách công', 'Quản lý sản phẩm', 'Đầu tư mạo hiểm'],
  marketDemand: {
    averageSalary: '120.000.000 VNĐ/năm',
    jobGrowth: '15%',
    hireDemand: 'Cao',
  },
  relatedModules: ['ai-strategy-business-leaders', 'data-driven-decision-making'],
  features: [
    '3 bài học chuyên sâu',
    'Bài tập thực hành xây dựng kịch bản',
    'Case study từ các tập đoàn lớn',
    'Công cụ phân tích xu hướng',
  ],
};
