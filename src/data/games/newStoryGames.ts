import { EducationalGame } from '@/types';
import { defaultImage } from '@/utils/image';

export const NEW_STORY_GAMES_DATA: EducationalGame[] = [
  {
    id: 'data-detective-missing-shipment',
    title: 'Data Detective: The Missing Shipment',
    description:
      'Phân tích các bộ dữ liệu để giải quyết bí ẩn về một lô hàng bị mất và học các kỹ năng khoa học dữ liệu cốt lõi.',
    category: ['Logic & Puzzle'],
    difficulty: 'Trung bình',
    imageUrl: defaultImage,
    tags: ['data science', 'puzzle', 'mystery', 'analytics', 'problem solving'],
    relatedLessons: [
      {
        moduleId: 'data-science',
        lessonId: 'data-science-fundamentals',
        title: 'Cơ bản về Data Science',
        connection: 'Áp dụng các khái niệm làm sạch và phân tích dữ liệu để giải quyết các manh mối trong game.',
      },
    ],
    isNew: true,
  },
  {
    id: 'ethical-ai-simulator',
    title: 'Ethical AI Simulator',
    description:
      'Đối mặt với những tình huống khó xử về đạo đức với tư cách là một nhà phát triển AI và xem hậu quả từ các lựa chọn của bạn.',
    category: ['Simulation'],
    difficulty: 'Trung bình',
    imageUrl: defaultImage,
    tags: ['ai', 'ethics', 'simulation', 'narrative', 'decision making'],
    relatedLessons: [
      {
        moduleId: 'ai-for-students',
        lessonId: 'ethical-use-of-ai',
        title: 'Sử dụng AI có trách nhiệm và đạo đức',
        connection:
          'Trải nghiệm trực tiếp các vấn đề thiên vị thuật toán và quyền riêng tư được thảo luận trong bài học.',
      },
    ],
    isNew: true,
  },
];
