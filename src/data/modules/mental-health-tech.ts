import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

export interface MentalHealthLesson extends BaseLessonData {
  technologies?: string[];
  wellnessImpact?: string;
}

export const mentalHealthTechModule: ModuleData<MentalHealthLesson> = {
  id: 'mental-health-tech',
  title: 'Mental Health Technology',
  subtitle: 'Công nghệ trong Sức khỏe Tâm thần',
  description:
    'Khóa học toàn diện về ứng dụng công nghệ trong sức khỏe tâm thần. Học cách sử dụng digital wellness tools, mental health apps, wearables và AI therapy để cải thiện wellbeing và quản lý stress hiệu quả.',
  level: 'Cơ bản',
  duration: '12-15 giờ',
  category: 'Professional Skills',
  features: [
    'Chiến lược Digital Wellness và sử dụng công nghệ lành mạnh',
    'Hệ sinh thái ứng dụng Mental Health và cách triển khai hiệu quả',
    'Thiết bị đeo & giám sát sinh trắc học để theo dõi sức khỏe',
    'Công cụ trị liệu bằng AI và các giải pháp sức khỏe tâm thần cá nhân hóa',
  ],
  icon: '🧠',
  color: 'from-emerald-600 to-teal-600',
  heroImageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop',
  objectives: [
    'Hiểu mối quan hệ giữa công nghệ và sức khỏe tâm thần',
    'Triển khai các chiến lược digital wellness và quản lý căng thẳng',
    'Sử dụng hiệu quả các ứng dụng sức khỏe tâm thần và thiết bị đeo',
    'Áp dụng các công cụ AI cho trị liệu cá nhân hóa và cải thiện wellbeing',
  ],
  prerequisites: [
    'Không yêu cầu kiến thức kỹ thuật đặc biệt',
    'Quan tâm đến sức khỏe tâm thần và sức khỏe cá nhân',
    'Sẵn sàng khám phá các công cụ công nghệ mới',
  ],
  careerOutcomes: [
    'Chuyên gia Tư vấn Digital Wellness',
    'Quản lý Sản phẩm Công nghệ Sức khỏe',
    'Nhà phát triển Ứng dụng Sức khỏe Tâm thần',
    'Chuyên gia Công nghệ Nhân sự trong mảng Wellness',
  ],
  industryApplications: [
    { name: 'Công nghệ Y tế và Nền tảng Sức khỏe Số', description: '' },
    { name: 'Chương trình Sức khỏe Doanh nghiệp', description: '' },
    { name: 'Hỗ trợ Sức khỏe Tâm thần trong Giáo dục', description: '' },
    { name: 'Ứng dụng Wellness cho người tiêu dùng', description: '' },
  ],
  marketDemand: {
    averageSalary: '18-35 triệu VNĐ',
    jobGrowth: '+28%',
    hireDemand: 'Rất cao',
  },
  relatedModules: ['healthcare-tech', 'ai-machine-learning', 'data-science'],
  lessons: [
    {
      id: 'digital-wellness-fundamentals',
      title: 'Bài 1: Sức khỏe Kỹ thuật số & Công nghệ Sức khỏe Tâm thần',
      description:
        'Hiểu tác động của công nghệ lên sức khỏe tâm thần. Học cách sử dụng ứng dụng, thiết bị đeo và công cụ kỹ thuật số để cải thiện sức khỏe và quản lý căng thẳng.',
      videoUrl: 'https://www.youtube.com/watch?v=gmLb9SJHlgU',
      imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop',
      difficulty: 'Cơ bản',
      duration: '120 phút',
      objectives: [
        'Hiểu mối quan hệ giữa việc sử dụng công nghệ và sức khỏe tâm thần',
        'Thực hiện các chiến lược cai nghiện kỹ thuật số và thói quen công nghệ lành mạnh',
        'Sử dụng hiệu quả các ứng dụng sức khỏe tâm thần để thiền và theo dõi tâm trạng',
        'Thiết lập hệ thống theo dõi sức khỏe với thiết bị đeo và điện thoại thông minh',
        'Tạo kế hoạch sức khỏe kỹ thuật số cá nhân hóa cho sức khỏe tâm thần lâu dài',
      ],
      realWorldApplications: [
        'Quản lý và phòng ngừa sức khỏe tâm thần cá nhân',
        'Các chương trình chăm sóc sức khỏe cho nhân viên trong công ty',
        'Tích hợp theo dõi bệnh nhân trong lĩnh vực chăm sóc sức khỏe',
        'Hỗ trợ sức khỏe tâm thần tại các cơ sở giáo dục',
        'Phát triển chương trình sức khỏe tâm thần cộng đồng',
      ],
      faqs: [
        {
          question: 'Digital wellness (sức khỏe kỹ thuật số) là gì?',
          answer:
            'Sức khỏe kỹ thuật số là việc thực hành các thói quen lành mạnh liên quan đến việc sử dụng công nghệ. Nó bao gồm việc quản lý thời gian sử dụng thiết bị, bảo vệ bản thân khỏi các nội dung tiêu cực và sử dụng công nghệ một cách có chủ đích để cải thiện sức khỏe thể chất và tinh thần.',
        },
        {
          question: 'Làm thế nào một ứng dụng trên điện thoại có thể giúp tôi thiền?',
          answer:
            'Các ứng dụng thiền thường cung cấp các bài hướng dẫn bằng giọng nói, âm thanh tự nhiên, hoặc nhạc thư giãn để giúp bạn tập trung vào hơi thở và thư giãn tâm trí. Chúng cũng có thể nhắc nhở bạn dành thời gian thiền mỗi ngày và theo dõi tiến trình của bạn.',
        },
        {
          question: 'Thiết bị đeo tay theo dõi sức khỏe có ích lợi gì cho sức khỏe tâm thần?',
          answer:
            'Thiết bị đeo có thể theo dõi các chỉ số sinh trắc học như nhịp tim, chất lượng giấc ngủ và mức độ hoạt động thể chất. Những dữ liệu này có thể giúp bạn nhận ra các dấu hiệu của căng thẳng (stress) và hiểu rõ hơn mối liên hệ giữa thể chất và tinh thần, từ đó có những điều chỉnh phù hợp.',
        },
        {
          question: 'Cai nghiện kỹ thuật số (digital detox) có thực sự cần thiết không?',
          answer:
            'Việc "cai nghiện" kỹ thuật số, tức là giảm bớt hoặc tạm dừng sử dụng các thiết bị điện tử, có thể rất hữu ích. Nó giúp não bộ được nghỉ ngơi, giảm cảm giác quá tải thông tin, cải thiện sự tập trung và khuyến khích các tương tác xã hội trực tiếp, tất cả đều có lợi cho sức khỏe tâm thần.',
        },
      ],
    },
    {
      id: 'ai-therapy-tools',
      title: 'Bài 2: Công cụ Sức khỏe Tâm thần dùng AI & Trị liệu bằng Chatbot',
      description:
        'Khám phá các ứng dụng của AI trong sức khỏe tâm thần: trị liệu bằng chatbot, can thiệp cá nhân hóa, phân tích dự báo. Xây dựng các công cụ AI để hỗ trợ sức khỏe tinh thần.',
      videoUrl: null,
      imageUrl: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=400&fit=crop',
      difficulty: 'Nâng cao',
      duration: '180 phút',
      objectives: [
        'Hiểu các ứng dụng của AI trong chăm sóc sức khỏe tâm thần và trị liệu',
        'Đánh giá hiệu quả và hạn chế của các công cụ trị liệu AI',
        'Thiết kế hệ thống AI đàm thoại để hỗ trợ sức khỏe tâm thần',
        'Thực hiện học máy để dự đoán tâm trạng và can thiệp',
        'Giải quyết các cân nhắc về đạo đức trong sức khỏe tâm thần do AI cung cấp',
      ],
      realWorldApplications: [
        'Hỗ trợ và tăng cường trị liệu lâm sàng',
        'Các chương trình sức khỏe tâm thần tại nơi làm việc',
        'Dịch vụ tư vấn tại các cơ sở giáo dục',
        'Tiếp cận sức khỏe tâm thần cộng đồng',
        'Can thiệp khủng hoảng và phòng chống tự tử',
      ],
    },
  ],
};
