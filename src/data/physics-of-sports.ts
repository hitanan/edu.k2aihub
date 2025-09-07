import { BaseLessonData } from '@/types/lesson-base';
export interface PhysicsLessonType extends BaseLessonData {
  keyConcept: string;
}

export const physicsOfSportsLessons: PhysicsLessonType[] = [
  {
    id: 'physics-of-skateboarding',
    title: 'Vật lý Ván trượt: Trọng lực, Ma sát và Năng lượng',
    description:
      'Khám phá các nguyên tắc vật lý đằng sau những cú trick ngoạn mục trong môn ván trượt, từ định luật Newton đến bảo toàn năng lượng.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=_xSjyrUNiI4',
    imageUrl: 'https://i.ytimg.com/vi/_xSjyrUNiI4/hqdefault.jpg',
    keyConcept: "Newton's Laws of Motion",
    objectives: [
      'Hiểu về lực hấp dẫn và lực pháp tuyến.',
      'Phân tích lực ma sát trong chuyển động.',
      'Áp dụng nguyên lý bảo toàn năng lượng cho một hệ kín.',
    ],
    prerequisites: ['Kiến thức toán học cơ bản.'],
    exercises: [
      {
        title: 'Thử thách Cú nhảy Ollie',
        description: 'Tính toán lực cần thiết để thực hiện một cú nhảy Ollie cao 20cm.',
        difficulty: 'Trung bình',
        procedure: [
          'Xác định khối lượng của ván trượt và người trượt.',
          'Áp dụng công thức F=ma.',
          'Tính toán công và năng lượng cần thiết.',
        ],
        expectedResults: 'Một bản tính toán chi tiết về lực và năng lượng.',
      },
    ],
    realWorldApplications: ['Thiết kế dốc trượt an toàn hơn.', 'Cải thiện kỹ thuật của vận động viên.'],
  },
  {
    id: 'aerodynamics-of-curveball',
    title: 'Khí động học của cú ném bóng xoáy',
    description: 'Tìm hiểu về hiệu ứng Magnus và cách nó làm cho quả bóng có thể bay theo một đường cong không tưởng.',
    duration: '75 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=1Q-ZWbo-XlE',
    imageUrl: 'https://i.ytimg.com/vi/1Q-ZWbo-XlE/hqdefault.jpg',
    keyConcept: 'Magnus Effect',
    objectives: [
      'Hiểu về nguyên lý Bernoulli.',
      'Giải thích được Hiệu ứng Magnus.',
      'Phân tích các lực tác động lên một quả bóng đang quay.',
    ],
    prerequisites: ['Kiến thức cơ bản về áp suất và dòng chảy.'],
    exercises: [
      {
        title: 'Mô phỏng đường bay',
        description:
          'Sử dụng một công cụ mô phỏng đơn giản để xem vận tốc quay ảnh hưởng đến đường bay của quả bóng như thế nào.',
        difficulty: 'Cơ bản',
        procedure: [
          'Nhập các thông số về vận tốc, gia tốc, và độ xoáy.',
          'Quan sát đường bay được mô phỏng.',
          'Thay đổi các thông số và ghi lại sự khác biệt.',
        ],
        expectedResults: 'Hiểu rõ mối quan hệ giữa độ xoáy và độ cong của đường bay.',
      },
    ],
    realWorldApplications: ['Ném bóng trong bóng chày, bóng đá.', 'Thiết kế cánh máy bay.'],
  },
];
