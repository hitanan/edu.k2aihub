import { ModuleData } from '@/types';
import { PhysicsOfSportsLesson } from '@/types/lesson-base';

export const physicsOfSportsModule: ModuleData<PhysicsOfSportsLesson> = {
  id: 'physics-of-sports',
  title: 'Vật lý trong Thể thao',
  description: 'Khám phá các nguyên tắc vật lý đằng sau các hoạt động thể thao, từ cơ học, động lực học đến khí động lực học.',
  image: 'physics-of-sports.jpg',
  tags: ['vật lý', 'thể thao', 'khoa học thể thao', 'cơ học'],
  category: 'Khoa học ứng dụng',
  lessons: [
    {
      id: 'mechanics-of-motion',
      title: 'Cơ học của Chuyển động trong Thể thao',
      description: 'Phân tích các định luật Newton về chuyển động qua các ví dụ trong bóng đá, bóng rổ và điền kinh.',
      duration: '60 phút',
      difficulty: 'Cơ bản',
      keyConcept: 'Định luật Newton',
      objectives: [
        'Áp dụng 3 định luật Newton vào các tình huống thể thao.',
        'Phân tích lực, khối lượng và gia tốc trong các môn thể thao.',
        'Hiểu khái niệm về xung lượng và động lượng.',
      ],
      realWorldApplications: [
        'Tính toán lực cần thiết để đá một quả bóng bay xa.',
        'Phân tích tại sao VĐV nhảy cao lại cong người khi nhảy.',
      ],
    },
    {
      id: 'energy-and-power',
      title: 'Năng lượng và Sức mạnh trong Thể thao',
      description: 'Tìm hiểu về công, năng lượng và sức mạnh, và cách chúng được tối ưu hóa trong các môn cử tạ, bơi lội.',
      duration: '60 phút',
      difficulty: 'Trung bình',
      keyConcept: 'Năng lượng và Công suất',
      objectives: [
        'Phân biệt công, năng lượng và công suất.',
        'Hiểu về thế năng và động năng trong thể thao.',
        'Tính toán công suất của một vận động viên.',
      ],
      realWorldApplications: [
        'Tối ưu hóa kỹ thuật bơi để giảm lực cản và tiết kiệm năng lượng.',
        'Phân tích kỹ thuật của VĐV cử tạ để nâng được mức tạ tối đa.',
      ],
    },
    {
      id: 'projectile-motion',
      title: 'Chuyển động Ném xiên: Từ Quả bóng rổ đến Cú sút phạt',
      description: 'Nghiên cứu quỹ đạo của các vật thể được ném hoặc đá, áp dụng vào bóng rổ, golf và bóng đá.',
      duration: '75 phút',
      difficulty: 'Trung bình',
      keyConcept: 'Chuyển động ném xiên',
      objectives: [
        'Vẽ và phân tích quỹ đạo parabol của vật bị ném.',
        'Xác định góc ném tối ưu để đạt tầm xa cực đại.',
        'Hiểu ảnh hưởng của lực cản không khí.',
      ],
      realWorldApplications: [
        'Kỹ thuật ném bóng rổ để có xác suất vào rổ cao nhất.',
        'Kỹ thuật sút phạt trong bóng đá để bóng đi qua hàng rào.',
      ],
    },
    {
      id: 'rotational-dynamics',
      title: 'Động lực học Quay và Hiệu ứng Magnus',
      description: 'Khám phá nguyên lý của chuyển động quay, mô-men xoắn và hiệu ứng Magnus trong các môn như bóng bàn, tennis và trượt băng nghệ thuật.',
      duration: '75 phút',
      difficulty: 'Nâng cao',
      keyConcept: 'Chuyển động quay',
      objectives: [
        'Hiểu về mô-men quán tính và mô-men xoắn.',
        'Giải thích nguyên nhân của hiệu ứng Magnus (cú sút xoáy).',
        'Phân tích nguyên lý bảo toàn mô-men động lượng trong trượt băng.',
      ],
      realWorldApplications: [
        'Cú giao bóng xoáy trong tennis.',
        'Cú sút "lá vàng rơi" của Roberto Carlos.',
        'VĐV trượt băng nghệ thuật quay nhanh hơn khi co tay lại.',
      ],
    },
    {
      id: 'fluid-dynamics-aerodynamics',
      title: 'Khí động lực học trong Đua xe và Bơi lội',
      description: 'Nghiên cứu về lực cản không khí và lực cản của nước, và cách các vận động viên và kỹ sư tối ưu hóa hình dạng để tăng tốc độ.',
      duration: '60 phút',
      difficulty: 'Nâng cao',
      keyConcept: 'Động lực học chất lưu',
      objectives: [
        'Hiểu về dòng chảy tầng và dòng chảy rối.',
        'Phân tích các yếu tố ảnh hưởng đến lực cản.',
        'Giải thích thiết kế khí động học của xe đua F1 và mũ bảo hiểm xe đạp.',
      ],
      realWorldApplications: [
        'Thiết kế xe đua Công thức 1.',
        'Kỹ thuật "núp gió" trong đua xe đạp.',
        'Trang phục bơi lội giúp giảm lực cản của nước.',
      ],
    },
  ],
};
