import { ModuleData } from '@/types';

export const spaceExplorationModuleData: ModuleData = {
  id: 'space-exploration',
  title: 'Space Exploration & Technology',
  subtitle: 'Khám phá vũ trụ 3D',
  description: 'Tìm hiểu space science, rocket engineering và satellite technology',
  category: 'science',
  icon: '🚀',
  color: 'from-indigo-600 to-purple-600',
  level: 'Trung bình',
  duration: '12-15 giờ',
  features: ['Space Fundamentals', 'Rocket Science', 'Satellite Technology', 'Space Colonization'],
  prerequisites: ['Physics fundamentals', 'Mathematics: calculus', 'Engineering principles', 'Scientific curiosity'],
  objectives: [
    'Hiểu các nguyên tắc cơ bản của khoa học vũ trụ và du hành không gian.',
    'Phân tích các hệ thống đẩy và thiết kế tên lửa.',
    'Nắm vững công nghệ vệ tinh và các ứng dụng của nó.',
    'Thảo luận về tương lai của việc khám phá và thuộc địa hóa không gian.',
  ],
  careerOutcomes: [
    'Kỹ sư hàng không vũ trụ',
    'Nhà khoa học dữ liệu không gian',
    'Chuyên gia vận hành vệ tinh',
    'Nhà phân tích nhiệm vụ không gian',
  ],
  industryApplications: [
    { name: 'Viễn thông', description: 'Phát triển và vận hành các chòm sao vệ tinh internet.' },
    { name: 'Quan sát Trái Đất', description: 'Sử dụng dữ liệu vệ tinh để theo dõi biến đổi khí hậu, nông nghiệp.' },
    { name: 'Quốc phòng', description: 'Công nghệ tên lửa, vệ tinh do thám và định vị toàn cầu.' },
    { name: 'Du lịch vũ trụ', description: 'Phát triển các phương tiện và cơ sở hạ tầng cho du lịch không gian.' },
  ],
  marketDemand: {
    averageSalary: '2500-6000 USD/tháng',
    jobGrowth: '8% mỗi năm',
    hireDemand: 'Cao',
  },
  relatedModules: ['physics-of-flight', 'rocket-science', 'satellite-communication'],
};
