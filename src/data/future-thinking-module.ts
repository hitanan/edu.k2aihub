import { ModuleNavigation } from '@/types';

export const futureThinkingModuleData: ModuleNavigation = {
  id: 'future-thinking',
  title: 'Future Thinking & Strategic Foresight',
  subtitle: 'Tư duy tương lai và Tầm nhìn chiến lược',
  description:
    'Học cách dự báo xu hướng, phân tích kịch bản và xây dựng chiến lược để chuẩn bị cho một tương lai bất định.',
  category: 'essential',
  icon: '🔮',
  color: 'from-purple-500 to-indigo-600',
  totalDuration: '16-20 giờ',
  difficulty: 'Nâng cao',
  level: 'Nâng cao',
  duration: '16-20 giờ',
  href: '/learning/future-thinking',
  features: ['Trend Analysis', 'Scenario Planning', 'Strategic Foresight', 'Futures Wheel', 'Backcasting'],
  tags: ['future thinking', 'strategy', 'foresight', 'trends', 'scenarios'],
  prerequisites: [
    'Tư duy phân tích và hệ thống',
    'Khả năng làm việc với dữ liệu và thông tin phức tạp',
    'Sự sáng tạo và trí tưởng tượng',
  ],
  lessons: [
    {
      id: 'introduction-to-strategic-foresight',
      title: 'Giới thiệu về Tầm nhìn Chiến lược',
      duration: '180 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'trend-analysis-and-horizon-scanning',
      title: 'Phân tích Xu hướng và Quét Chân trời',
      duration: '200 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'scenario-planning-and-worldbuilding',
      title: 'Hoạch định Kịch bản và Xây dựng Thế giới',
      duration: '220 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'backcasting-and-preferred-futures',
      title: 'Backcasting và Xây dựng Tương lai Ưa thích',
      duration: '190 phút',
      difficulty: 'Nâng cao',
    },
  ],
};
