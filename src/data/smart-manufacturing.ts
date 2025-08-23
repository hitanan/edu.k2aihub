import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface SmartManufacturingLessonType extends BaseLessonData {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  objectives: Array<string>;
  prerequisites: Array<string>;
  exercises: Array<{
    title: string;
    description: string;
    difficulty: string;
    procedure: Array<string>;
    expectedResults: string;
  }>;
  realWorldApplications: Array<string>;
}

export const smartManufacturingLessons: SmartManufacturingLessonType[] = [
  {
    id: 'industry-4-fundamentals',
    title: 'Cơ bản về Công nghiệp 4.0',
    description: 'Giới thiệu về cách mạng công nghiệp 4.0 và những công nghệ nền tảng',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    objectives: [
      'Hiểu khái niệm Công nghiệp 4.0',
      'Nắm được các công nghệ cốt lõi',
      'Ứng dụng trong sản xuất thông minh',
    ],
    prerequisites: ['Kiến thức cơ bản về sản xuất', 'Hiểu biết về công nghệ thông tin'],
    exercises: [
      {
        title: 'Nghiên cứu case study',
        description: 'Phân tích ví dụ thực tế về chuyển đổi số',
        difficulty: 'Cơ bản',
        procedure: [
          'Chọn một công ty đã triển khai Industry 4.0',
          'Phân tích các công nghệ được sử dụng',
          'Đánh giá hiệu quả và thách thức',
        ],
        expectedResults: 'Hiểu được cách thức triển khai thực tế của Công nghiệp 4.0',
      },
    ],
    realWorldApplications: [
      'Nhà máy thông minh với IoT sensors',
      'Hệ thống sản xuất tự động hóa',
      'Predictive maintenance cho máy móc',
    ],
  },
];
