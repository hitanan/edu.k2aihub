import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';

export const futureCareersModuleData: ModuleData = {
  id: 'future-careers-ai',
  title: 'Định hướng Nghề nghiệp trong Kỷ nguyên AI',
  subtitle: 'Chuẩn bị cho Tương lai Công việc',
  description:
    'Trí tuệ nhân tạo không còn là khoa học viễn tưởng, nó đang ở đây và định hình lại mọi ngành nghề. Khóa học này giúp bạn hiểu rõ những thay đổi đó, xác định các cơ hội mới, và trang bị những kỹ năng cốt lõi để không chỉ tồn tại mà còn phát triển mạnh mẽ trong thị trường lao động tương lai.',
  level: 'Cơ bản',
  duration: '10-12 giờ',
  category: 'Professional Skills',
  features: [
    'Phân tích xu hướng thị trường lao động.',
    'Nhận diện kỹ năng chống lại sự thay thế của AI.',
    'Xây dựng lộ trình sự nghiệp cá nhân.',
    'Case study về các ngành nghề mới nổi.',
  ],
  icon: '🚀',
  color: 'fuchsia',
  heroImageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=600&fit=crop',
  objectives: [
    'Hiểu được tác động của AI đến các ngành nghề khác nhau.',
    "Xác định được những kỹ năng 'vàng' trong kỷ nguyên AI.",
    'Học cách sử dụng AI như một công cụ để nâng cao hiệu suất công việc.',
    'Xây dựng tư duy linh hoạt và khả năng học tập suốt đời.',
    'Lên kế hoạch phát triển sự nghiệp phù hợp với xu hướng tương lai.',
  ],
  prerequisites: [
    'Tò mò về tương lai và công nghệ.',
    'Mong muốn phát triển bản thân và sự nghiệp.',
    'Không yêu cầu kiến thức chuyên sâu về AI.',
  ],
  careerOutcomes: [
    'Chuyên viên tư vấn chuyển đổi số',
    'Nhà phân tích xu hướng tương lai',
    'Chuyên gia đào tạo và phát triển nhân lực',
    'Bất kỳ ngành nghề nào cũng cần kỹ năng thích ứng với AI',
  ],
  industryApplications: [
    'Tất cả các ngành, từ Y tế, Giáo dục đến Tài chính, Sáng tạo.',
    'Quản trị nhân sự và tuyển dụng.',
    'Tư vấn chiến lược và phát triển kinh doanh.',
  ],
  marketDemand: {
    averageSalary: 'Không áp dụng trực tiếp',
    jobGrowth: 'Kỹ năng liên quan AI tăng trưởng >50%',
    hireDemand: 'Rất cao',
  },
  relatedModules: [K2Module.AI, K2Module.CriticalThinking, K2Module.ContentCreator],
};
