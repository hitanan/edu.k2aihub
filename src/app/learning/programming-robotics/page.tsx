import type { Metadata } from 'next';

import ModulePageTemplate, {
  type ModuleData,
} from '@/components/learning/ModulePageTemplate';
import { ProgrammingRoboticsLessons } from '@/data/programming-robotics';
import { K2Module } from '@/data/moduleNavigation';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  'Programming & Robotics - Lập Trình Robot',
  'Học lập trình robot từ cơ bản đến nâng cao. Từ Python và C++ đến ROS và AI robotics, xây dựng robot thông minh.',
  ['programming robotics', 'robot programming', 'ros programming', 'python robotics', 'c++ robotics', 'embedded systems', 'k2aihub'],
  'programming-robotics'
);

export default function ProgrammingRoboticsPage() {
  const moduleData: ModuleData = {
    id: 'programming-robotics',
    title: 'Programming & Robotics',
    subtitle: 'Lập trình robot & hệ thống thông minh',
    description:
      'Khám phá thế giới lập trình robot từ embedded systems đến AI robotics. Học Python, C++, ROS và xây dựng robot autonomous hoàn chỉnh.',
    level: 'Cơ bản đến Nâng cao',
    duration: '18-25 giờ',
    category: 'Programming & Technology',
    primaryColor: 'cyan',
    gradientColors: 'from-slate-900 via-cyan-900 to-blue-900',
    basePath: '/learning/programming-robotics',
    heroImageUrl:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop',
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
    color: 'from-cyan-600 to-blue-600',
    statsConfig: {
      lessons: `${ProgrammingRoboticsLessons.length}+ bài`,
      duration: '18-25 giờ',
      level: 'Cơ bản đến Nâng cao',
      projects: '12+ robot projects',
    },
    marketData: {
      marketSize: '$189 Billion',
      marketNote: 'Global robotics market by 2025',
      jobGrowth: '48% Growth',
      jobNote: 'Robotics engineering jobs by 2030',
      reduction: '60% Time',
      reductionNote: 'Development time with ROS',
      startups: '5000+ Companies',
      startupsNote: 'Robotics startups worldwide',
    },
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
    careerPaths: [
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
    technicalHighlights: [
      {
        title: 'Programming Languages',
        icon: '💻',
        items: [
          'Python for Robotics',
          'C++ Real-time Systems',
          'MATLAB/Simulink',
          'JavaScript (Web UI)',
        ],
      },
      {
        title: 'ROS Ecosystem',
        icon: '🔧',
        items: [
          'ROS2 Architecture',
          'Navigation Stack',
          'Perception Pipeline',
          'Behavior Trees',
        ],
      },
      {
        title: 'Hardware Integration',
        icon: '⚡',
        items: [
          'Arduino Programming',
          'Raspberry Pi',
          'NVIDIA Jetson',
          'Sensor Fusion',
        ],
      },
      {
        title: 'AI & Computer Vision',
        icon: '👁️',
        items: [
          'OpenCV',
          'TensorFlow/PyTorch',
          'SLAM Algorithms',
          'Object Detection',
        ],
      },
      {
        title: 'Control Systems',
        icon: '🎛️',
        items: [
          'PID Controllers',
          'Kalman Filters',
          'Motion Planning',
          'Real-time Control',
        ],
      },
      {
        title: 'Simulation & Testing',
        icon: '🔬',
        items: [
          'Gazebo Simulator',
          'Unity Robotics',
          'Hardware-in-Loop',
          'Unit Testing',
        ],
      },
    ],
    relatedModules: [
      K2Module.Robotics,
      K2Module.Python,
      K2Module.Arduino,
      K2Module.AdvancedAI,
    ],
  };

  return (
    <ModulePageTemplate moduleData={moduleData} lessons={ProgrammingRoboticsLessons} />
  );
}
