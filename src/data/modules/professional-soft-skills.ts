import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

export type SoftSkillsLesson = BaseLessonData;

const lessons: SoftSkillsLesson[] = [
  {
    id: 'effective-communication',
    videoUrl: null,
    title: 'Giao tiếp Hiệu quả và Lắng nghe Chủ động',
    description:
      'Nắm vững nghệ thuật truyền đạt thông điệp rõ ràng, thuyết phục và xây dựng mối quan hệ qua việc lắng nghe sâu sắc.',
    duration: '60 phút',
    difficulty: 'Cơ bản',
    objectives: [
      'Hiểu các thành phần của quá trình giao tiếp.',
      'Thực hành kỹ thuật lắng nghe chủ động.',
      'Cung cấp và tiếp nhận phản hồi một cách xây dựng.',
    ],
    realWorldApplications: [
      'Giải quyết xung đột trong nhóm.',
      'Xây dựng lòng tin với khách hàng và đồng nghiệp.',
      'Trình bày ý tưởng một cách rõ ràng trong các cuộc họp.',
    ],
    prerequisites: [],
    exercises: [],
  },
  {
    id: 'presentation-public-speaking',
    videoUrl: null,
    title: 'Kỹ năng Thuyết trình và Nói trước Công chúng',
    description:
      'Tự tin trình bày ý tưởng, báo cáo và dự án trước đám đông, từ việc chuẩn bị nội dung đến làm chủ ngôn ngữ cơ thể.',
    duration: '75 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Xây dựng cấu trúc bài thuyết trình logic và hấp dẫn.',
      'Sử dụng hiệu quả các công cụ trực quan (slide, demo).',
      'Kiểm soát căng thẳng và làm chủ sân khấu.',
    ],
    realWorldApplications: [
      'Thuyết trình báo cáo kết quả kinh doanh.',
      'Giới thiệu sản phẩm mới cho khách hàng.',
      'Chia sẻ kiến thức trong các buổi seminar nội bộ.',
    ],
    prerequisites: [],
    exercises: [],
  },
  {
    id: 'time-management-productivity',
    videoUrl: null,
    title: 'Quản lý Thời gian và Tăng năng suất',
    description:
      'Học các phương pháp và công cụ để ưu tiên công việc, loại bỏ sự trì hoãn và tối đa hóa hiệu suất làm việc.',
    duration: '60 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Áp dụng ma trận Eisenhower để xác định việc quan trọng và khẩn cấp.',
      'Sử dụng kỹ thuật Pomodoro để duy trì sự tập trung.',
      'Lập kế hoạch ngày, tuần, tháng hiệu quả.',
    ],
    realWorldApplications: [
      'Hoàn thành công việc đúng deadline mà không cần làm thêm giờ.',
      'Cân bằng giữa công việc và cuộc sống cá nhân.',
      'Giảm stress do áp lực công việc.',
    ],
    prerequisites: [],
    exercises: [],
  },
  {
    id: 'leadership-teamwork',
    videoUrl: null,
    title: 'Lãnh đạo và Làm việc Nhóm',
    description:
      'Phát triển khả năng gây ảnh hưởng, truyền cảm hứng cho người khác và hợp tác hiệu quả để đạt được mục tiêu chung.',
    duration: '75 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Phân biệt các phong cách lãnh đạo và khi nào nên áp dụng.',
      'Học cách ủy thác công việc hiệu quả.',
      'Xây dựng một đội nhóm gắn kết và hiệu suất cao.',
    ],
    realWorldApplications: [
      'Dẫn dắt một dự án thành công.',
      'Tạo ra một môi trường làm việc tích cực và sáng tạo.',
      'Giải quyết các vấn đề phức tạp thông qua sức mạnh tập thể.',
    ],
    prerequisites: [],
    exercises: [],
  },
  {
    id: 'negotiation-persuasion',
    videoUrl: 'https://www.youtube.com/watch?v=YCyWQKhqLEM',
    title: 'Nghệ thuật Đàm phán và Thuyết phục',
    description:
      'Trang bị kỹ năng để đạt được các thỏa thuận có lợi cho đôi bên trong công việc và cuộc sống, từ đàm phán lương đến chốt hợp đồng.',
    duration: '60 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Hiểu nguyên tắc đàm phán Win-Win.',
      'Chuẩn bị và lên kịch bản cho một cuộc đàm phán.',
      'Sử dụng các nguyên tắc tâm lý học trong thuyết phục.',
    ],
    realWorldApplications: [
      'Đàm phán tăng lương hoặc thăng chức.',
      'Thương lượng các điều khoản hợp đồng với đối tác.',
      'Thuyết phục sếp phê duyệt một dự án mới.',
    ],
    prerequisites: [],
    exercises: [],
  },
];

export const professionalSoftSkillsModule: ModuleData = {
  id: 'professional-soft-skills',
  title: 'Kỹ Năng Mềm Chuyên Nghiệp',
  description:
    'Trang bị những kỹ năng mềm thiết yếu để thành công trong môi trường làm việc hiện đại, từ giao tiếp, lãnh đạo đến quản lý thời gian và đàm phán.',
  image: 'professional-soft-skills.jpg',
  tags: ['kỹ năng mềm', 'giao tiếp', 'lãnh đạo', 'thuyết trình', 'đàm phán', 'quản lý thời gian'],
  category: 'Phát triển cá nhân',
  primaryColor: '#4A90E2',
  gradientColors: 'from-blue-500 to-teal-400',
};

export const softSkillsLessons = lessons;
