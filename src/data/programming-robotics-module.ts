import { ModuleData } from '@/types';
import { K2Module } from '@/data/moduleNavigation';

export const programmingRoboticsModuleData: ModuleData = {
  id: 'programming-robotics',
  title: 'Programming & Robotics',
  subtitle: 'Lập trình robot & hệ thống thông minh',
  description:
    'Khám phá thế giới lập trình robot từ embedded systems đến AI robotics. Học Python, C++, ROS và xây dựng robot autonomous hoàn chỉnh.',
  level: 'Cơ bản đến Nâng cao',
  duration: '18-25 giờ',
  category: 'Programming & Technology',
  features: [
    'Python & C++ Programming for Robotics',
    'ROS (Robot Operating System)',
    'Embedded Systems & Microcontrollers',
    'Computer Vision & Machine Learning',
    'Autonomous Navigation & Path Planning',
    'Sensor Integration & Data Processing',
    'Real-time Control Systems',
    'Human-Robot Interaction',
  ],
  icon: '🤖',
  color: 'cyan',
  heroImageUrl:
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop',
  objectives: [
    'Thành thạo Python và C++ programming cho robotics',
    'Làm chủ ROS ecosystem và robotics middleware',
    'Phát triển embedded systems với microcontrollers',
    'Tích hợp computer vision và machine learning',
    'Xây dựng autonomous navigation systems',
    'Thiết kế human-robot interaction interfaces',
  ],
  prerequisites: [
    'Lập trình cơ bản (Python hoặc C++)',
    'Toán học và logic programming',
    'Hiểu biết về electronics cơ bản',
    'Kinh nghiệm với Linux/Unix systems',
  ],
  careerOutcomes: [
    'Robotics Software Engineer (25-45 triệu VNĐ)',
    'Embedded Systems Developer (20-38 triệu VNĐ)',
    'Autonomous Systems Engineer (28-50 triệu VNĐ)',
    'Computer Vision Engineer (25-42 triệu VNĐ)',
    'ROS Developer (22-40 triệu VNĐ)',
    'Robotics Research Scientist (30-55 triệu VNĐ)',
    'AI/ML Robotics Engineer (35-60 triệu VNĐ)',
    'Robotics Product Manager (40-70 triệu VNĐ)',
  ],
  industryApplications: [
    'Manufacturing và industrial automation',
    'Autonomous vehicles và transportation',
    'Healthcare và medical robotics',
    'Agriculture và farming automation',
    'Defense và security systems',
    'Service robotics và hospitality',
    'Space exploration và research',
    'Logistics và warehouse automation',
    'Education và research institutions',
    'Entertainment và consumer robotics',
  ],
  marketDemand: {
    averageSalary: '35-60 triệu VNĐ',
    jobGrowth: '+48%',
    hireDemand: 'Rất cao',
  },
  relatedModules: [
    K2Module.Robotics,
    K2Module.Python,
    K2Module.Arduino,
    K2Module.AdvancedAI,
  ],
};
