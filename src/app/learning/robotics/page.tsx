import ModulePageTemplate, { ModuleData } from '@/components/learning/ModulePageTemplate'
import { roboticsLessons, RoboticsLesson } from '@/data/robotics'
import { BaseLessonData } from '@/components/learning/LessonPageTemplate'
import { createTitle, createDescription, createKeywords } from '@/utils/seo'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: createTitle("Học Robotics - Từ Cơ Bản Đến Nâng Cao"),
  description: createDescription("Khóa học robotics toàn diện với các bài học từ cơ bản đến nâng cao. Học cách thiết kế, lập trình và điều khiển robot thông minh"),
  keywords: createKeywords(["robotics", "robot", "lập trình robot", "arduino robot", "cảm biến", "động cơ servo", "IoT robot"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Học Robotics - K2AiHub"),
    description: createDescription("Khám phá thế giới robotics với các bài học thực hành và dự án thú vị"),
    type: "website",
  },
};

// Convert RoboticsLesson to BaseLessonData interface
function convertToLesson(roboticsLesson: RoboticsLesson): BaseLessonData {
  return {
    id: roboticsLesson.id,
    title: roboticsLesson.title,
    description: roboticsLesson.description,
    duration: roboticsLesson.duration,
    difficulty: roboticsLesson.difficulty,
    category: 'Robotics',
    imageUrl: roboticsLesson.imageUrl || '/default-lesson.jpg',
    videoUrl: roboticsLesson.videoUrl,
    objectives: roboticsLesson.objectives,
    prerequisites: ['Basic electronics knowledge', 'Programming fundamentals', 'Arduino basics'],
    exercises: roboticsLesson.exercises?.map(ex => ({
      title: ex.title,
      description: ex.description,
      difficulty: ex.difficulty,
      materials: roboticsLesson.materials || [],
      procedure: [ex.code || ex.description],
      expectedResults: ex.expectedOutput || 'Robot hoạt động theo yêu cầu',
      solution: ex.code || 'Code solution provided in lesson'
    })) || [],
    resources: [],
    tools: roboticsLesson.materials || ['Arduino', 'Sensors', 'Motors', 'Chassis'],
    realWorldApplications: roboticsLesson.realWorldApplications || [],
    caseStudies: []
  }
}

export default function RoboticsPage() {
  // Convert lessons to base interface
  const convertedLessons = roboticsLessons.map(convertToLesson);

  const moduleConfig: ModuleData = {
    title: 'Robotics',
    subtitle: 'Học Robotics Từ Cơ Bản Đến Nâng Cao',
    description: 'Khám phá thế giới robotics với các bài học thực hành. Từ robot đơn giản đến hệ thống tự động thông minh - tạo ra những robot có thể tương tác với thế giới thực.',
    primaryColor: 'purple',
    gradientColors: 'from-slate-900 via-purple-900 to-blue-900',
    basePath: '/learning/robotics',
    statsConfig: {
      lessons: `${roboticsLessons.length}+ bài`,
      duration: '20-25 giờ',
      level: 'Cơ bản → Nâng cao',
      projects: '8+ robot thực tế'
    },
    marketData: {
      marketSize: '$75 Billion',
      marketNote: 'Global robotics market by 2026',
      jobGrowth: '33% Growth',
      jobNote: 'Robotics engineer jobs by 2030',
      reduction: '80% Efficiency',
      reductionNote: 'Improvement in automated systems',
      startups: '3000+ Startups',
      startupsNote: 'Robotics companies worldwide'
    },
    careerPaths: [
      'Robotics Engineer',
      'Automation Specialist', 
      'AI Robotics Developer',
      'Industrial Robot Programmer',
      'Research Roboticist',
      'Mechatronics Engineer'
    ],
    technicalHighlights: [
      {
        title: 'Robot Mechanics',
        icon: '⚙️',
        items: ['Chassis Design', 'Motor Control', 'Gear Systems', 'Movement Mechanics']
      },
      {
        title: 'Sensor Integration',
        icon: '📡',
        items: ['Ultrasonic Sensors', 'Camera Vision', 'Gyroscope/IMU', 'Touch Sensors']
      },
      {
        title: 'Programming',
        icon: '💻',
        items: ['Arduino Programming', 'Algorithm Development', 'State Machines', 'Real-time Control']
      },
      {
        title: 'Artificial Intelligence',
        icon: '🧠',
        items: ['Machine Learning', 'Computer Vision', 'Path Planning', 'Decision Making']
      },
      {
        title: 'Communication',
        icon: '📱',
        items: ['Wireless Control', 'IoT Integration', 'Remote Monitoring', 'Swarm Robotics']
      },
      {
        title: 'Applications',
        icon: '🏭',
        items: ['Industrial Automation', 'Medical Robotics', 'Home Assistants', 'Space Exploration']
      }
    ],
    relatedModules: [
      {
        href: '/learning/arduino',
        icon: '⚡',
        title: 'Arduino & IoT',
        description: 'Hardware Programming Foundation'
      },
      {
        href: '/learning/python',
        icon: '🐍',
        title: 'Python Programming',
        description: 'AI & Control Algorithms'
      },
      {
        href: '/stem',
        icon: '🔬',
        title: 'STEM Education',
        description: 'Engineering Fundamentals'
      }
    ]
  }

  return <ModulePageTemplate moduleData={moduleConfig} lessons={convertedLessons} />
}

