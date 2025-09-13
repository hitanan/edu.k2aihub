import { BaseLessonData } from '@/types/lesson-base';

export const dailyLifeLessons: BaseLessonData[] = [
  {
    id: 'personal-assistant',
    title: 'Trợ lý AI cá nhân',
    description: 'Sử dụng trợ lý AI để quản lý lịch trình và công việc.',
    duration: '45 phút',
    difficulty: 'Cơ bản',
    objectives: ['Cài đặt và sử dụng trợ lý ảo', 'Tự động hóa công việc hàng ngày'],
    realWorldApplications: ['Quản lý lịch họp', 'Đặt báo thức và nhắc nhở'],
  },
  {
    id: 'financial-ai',
    title: 'Quản lý tài chính với AI',
    description: 'Dùng AI để theo dõi chi tiêu và lập kế hoạch tài chính.',
    duration: '50 phút',
    difficulty: 'Cơ bản',
    objectives: ['Sử dụng ứng dụng quản lý tài chính AI', 'Phân tích thói quen chi tiêu'],
    realWorldApplications: ['Lập ngân sách cá nhân', 'Theo dõi hóa đơn'],
  },
  {
    id: 'health-fitness',
    title: 'Sức khỏe & Fitness AI',
    description: 'Theo dõi sức khỏe và tập luyện với sự hỗ trợ của AI.',
    duration: '40 phút',
    difficulty: 'Cơ bản',
    objectives: ['Sử dụng ứng dụng theo dõi sức khỏe', 'Nhận gợi ý bài tập từ AI'],
    realWorldApplications: ['Theo dõi giấc ngủ', 'Lên kế hoạch tập luyện'],
  },
  {
    id: 'travel-ai',
    title: 'Du lịch thông minh với AI',
    description: 'Lên kế hoạch chuyến đi và khám phá địa điểm mới với AI.',
    duration: '35 phút',
    difficulty: 'Cơ bản',
    objectives: ['Sử dụng AI để tìm vé máy bay và khách sạn', 'Khám phá địa điểm du lịch'],
    realWorldApplications: ['Lên kế hoạch du lịch', 'Dịch thuật khi đi du lịch'],
  },
];
