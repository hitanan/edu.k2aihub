import { ModuleData } from '@/types';
import { EnergyManagementLesson as PersonalEnergyLesson } from '@/types/lesson-base';

export type { PersonalEnergyLesson };

const lessons: PersonalEnergyLesson[] = [
  {
    id: 'understanding-personal-energy',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    title: 'Hiểu về Năng lượng Cá nhân',
    description: 'Khám phá bốn chiều năng lượng: thể chất, cảm xúc, tinh thần và tâm hồn.',
    duration: '45 phút',
    difficulty: 'Cơ bản',
    objectives: [
      'Phân biệt 4 loại năng lượng cá nhân.',
      'Hiểu chu kỳ dao động năng lượng tự nhiên.',
      'Nhận diện các yếu tố tiêu hao và phục hồi năng lượng.',
    ],
    realWorldApplications: [
      'Sắp xếp công việc theo chu kỳ năng lượng của bản thân.',
      'Nhận biết khi nào cần nghỉ ngơi để tái tạo năng lượng.',
    ],
  },
  {
    id: 'physical-energy-optimization',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    title: 'Tối ưu hóa Năng lượng Thể chất',
    description: 'Tìm hiểu về vai trò của dinh dưỡng, giấc ngủ và vận động trong việc duy trì năng lượng thể chất.',
    duration: '60 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Xây dựng chế độ ăn uống cung cấp năng lượng bền vững.',
      'Cải thiện chất lượng giấc ngủ.',
      'Tích hợp các bài tập vận động ngắn vào ngày làm việc.',
    ],
    realWorldApplications: [
      'Tránh tình trạng sụt giảm năng lượng sau bữa trưa.',
      'Duy trì sự tỉnh táo suốt cả ngày làm việc.',
    ],
  },
  {
    id: 'emotional-resilience',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    title: 'Xây dựng Sức bền Cảm xúc',
    description: 'Học cách quản lý cảm xúc tiêu cực và nuôi dưỡng cảm xúc tích cực để đối phó với áp lực.',
    duration: '60 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Thực hành các kỹ thuật quản lý stress.',
      'Nuôi dưỡng lòng biết ơn và sự lạc quan.',
      'Xây dựng các mối quan hệ xã hội hỗ trợ.',
    ],
    realWorldApplications: [
      'Giữ bình tĩnh khi đối mặt với deadline.',
      'Cải thiện mối quan hệ với đồng nghiệp và gia đình.',
    ],
  },
  {
    id: 'mental-focus-management',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    title: 'Quản lý Sự tập trung Tinh thần',
    description:
      'Các chiến lược để cải thiện sự tập trung, giảm thiểu sự phân tâm và thực hiện công việc sâu (deep work).',
    duration: '75 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Áp dụng kỹ thuật Pomodoro và Time-blocking.',
      'Thiết kế môi trường làm việc tối ưu cho sự tập trung.',
      'Rèn luyện khả năng tập trung đơn nhiệm.',
    ],
    realWorldApplications: [
      'Hoàn thành các công việc phức tạp hiệu quả hơn.',
      'Giảm thời gian làm việc mà vẫn tăng năng suất.',
    ],
  },
  {
    id: 'spiritual-alignment-purpose',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    title: 'Kết nối với Mục đích và Ý nghĩa',
    description:
      'Tìm kiếm và kết nối với các giá trị cốt lõi và mục đích sống để tạo ra nguồn năng lượng mạnh mẽ nhất.',
    duration: '45 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Xác định các giá trị cá nhân quan trọng nhất.',
      'Viết tuyên bố sứ mệnh cá nhân.',
      'Kết nối công việc hàng ngày với mục đích lớn hơn.',
    ],
    realWorldApplications: [
      'Tăng động lực và sự gắn kết với công việc.',
      'Cảm thấy hài lòng và có ý nghĩa hơn trong cuộc sống.',
    ],
  },
];

export const personalEnergyPerformanceManagementModule: ModuleData = {
  id: 'personal-energy-performance-management',
  title: 'Quản lý Năng lượng và Hiệu Suất Cá Nhân',
  description:
    'Học cách tối ưu hóa năng lượng cá nhân, quản lý căng thẳng và xây dựng khả năng phục hồi để đạt hiệu suất đỉnh cao trong công việc và cuộc sống.',
  image: 'personal-energy-management.jpg',
  tags: ['quản lý năng lượng', 'hiệu suất cá nhân', 'quản lý stress', 'resilience'],
  category: 'Phát triển cá nhân',
};

export const personalEnergyLessons = lessons;
