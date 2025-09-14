import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

export type PsychologyLesson = BaseLessonData;

const lessons: PsychologyLesson[] = [
  {
    id: 'introduction-to-behavioral-science',
    title: 'Giới thiệu về Khoa học Hành vi',
    description: 'Tìm hiểu các khái niệm cốt lõi của khoa học hành vi và cách nó định hình quyết định của chúng ta.',
    duration: '45 phút',
    difficulty: 'Cơ bản',
    objectives: [
      'Định nghĩa khoa học hành vi và các lĩnh vực liên quan.',
      'Hiểu về hai hệ thống tư duy (System 1 và System 2).',
      'Nhận biết các thiên kiến nhận thức phổ biến.',
    ],
    realWorldApplications: [
      'Thiết kế website thân thiện với người dùng hơn.',
      'Tạo các chiến dịch marketing hiệu quả hơn.',
      'Cải thiện việc ra quyết định cá nhân.',
    ],
    prerequisites: [],
    exercises: [],
  },
  {
    id: 'cognitive-biases-heuristics',
    title: 'Thiên kiến Nhận thức và Quy tắc suy nghiệm',
    description:
      'Đi sâu vào các lối tắt tinh thần và những sai lầm có hệ thống trong tư duy ảnh hưởng đến lựa chọn hàng ngày.',
    duration: '60 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Xác định và giải thích ít nhất 5 thiên kiến nhận thức (ví dụ: mỏ neo, xác nhận).',
      'Phân tích cách các quy tắc suy nghiệm (heuristics) có thể dẫn đến sai lầm.',
      'Áp dụng kiến thức để giảm thiểu ảnh hưởng của thiên kiến trong quyết định.',
    ],
    realWorldApplications: [
      'Tránh các bẫy đầu tư phổ biến.',
      'Thiết kế các thử nghiệm A/B để chống lại thiên kiến xác nhận.',
      'Cải thiện quy trình tuyển dụng để công bằng hơn.',
    ],
    prerequisites: [],
    exercises: [],
  },
  {
    id: 'behavioral-economics-nudging',
    title: 'Kinh tế học Hành vi và Cú hích',
    description:
      'Khám phá cách các yếu tố tâm lý, xã hội và cảm xúc ảnh hưởng đến quyết định kinh tế và cách "cú hích" có thể thay đổi hành vi.',
    duration: '75 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Hiểu sự khác biệt giữa kinh tế học cổ điển và kinh tế học hành vi.',
      'Học về lý thuyết triển vọng (prospect theory).',
      'Thiết kế các "cú hích" (nudges) đơn giản để khuyến khích hành vi tích cực.',
    ],
    realWorldApplications: [
      'Tăng tỷ lệ người dân tham gia tiết kiệm hưu trí.',
      'Khuyến khích lựa chọn thực phẩm lành mạnh trong căng tin.',
      'Thiết kế mặc định thông minh để tăng cường an toàn.',
    ],
    prerequisites: [],
    exercises: [],
  },
  {
    id: 'psychology-in-ux-design',
    title: 'Tâm lý học trong Thiết kế UX/UI',
    description: 'Áp dụng các nguyên tắc tâm lý học để tạo ra các sản phẩm số hấp dẫn, dễ sử dụng và có ý nghĩa hơn.',
    duration: '60 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Áp dụng các định luật Gestalt về nhận thức thị giác.',
      'Sử dụng mô hình Fogg để thúc đẩy hành vi người dùng.',
      'Thiết kế luồng người dùng dựa trên các mô hình tâm lý.',
    ],
    realWorldApplications: [
      'Tối ưu hóa quy trình thanh toán của một trang web e-commerce.',
      'Thiết kế một ứng dụng di động gây nghiện (một cách có đạo đức).',
      'Cải thiện khả năng sử dụng của một phần mềm phức tạp.',
    ],
    prerequisites: [],
    exercises: [],
  },
  {
    id: 'social-influence-persuasion',
    title: 'Ảnh hưởng Xã hội và Thuyết phục',
    description:
      'Nghiên cứu các cơ chế của sự tuân thủ, sự đồng thuận và quyền lực xã hội để hiểu và áp dụng nghệ thuật thuyết phục.',
    duration: '75 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Phân tích 6 nguyên tắc thuyết phục của Cialdini.',
      'Hiểu về các thí nghiệm kinh điển của Asch và Milgram.',
      'Xây dựng các chiến lược thuyết phục có đạo đức.',
    ],
    realWorldApplications: [
      'Xây dựng các chiến dịch lan truyền (viral marketing).',
      'Tăng cường sự hợp tác trong một đội nhóm.',
      'Trở thành một nhà lãnh đạo có sức ảnh hưởng lớn hơn.',
    ],
    prerequisites: [],
    exercises: [],
  },
];

export const psychologyBehavioralScienceModule: ModuleData = {
  id: 'psychology-behavioral-science',
  title: 'Tâm lý học & Khoa học hành vi',
  description:
    'Khám phá những bí ẩn đằng sau hành vi con người và ứng dụng các nguyên tắc tâm lý học để cải thiện sản phẩm, marketing và tương tác xã hội.',
  image: 'psychology-behavioral-science.jpg',
  tags: [
    'tâm lý học hành vi',
    'khoa học hành vi',
    'tâm lý học người dùng',
    'kinh tế học hành vi',
    'tâm lý học nhận thức',
    'tâm lý học UX',
  ],
  category: 'Khoa học xã hội',
  primaryColor: '#8B5CF6',
  gradientColors: 'from-purple-500 to-indigo-600',
};

export const psychologyLessons = lessons;
