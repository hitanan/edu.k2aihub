import ModulePageTemplate, {
  ModuleData,
} from '@/components/learning/ModulePageTemplate';
import { arduinoLessons, ArduinoLesson } from '@/data/arduino';
import { BaseLessonData } from '@/components/learning/LessonPageTemplate';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import type { Metadata } from 'next';
import { K2Module } from '@/data/moduleNavigation';

export const metadata: Metadata = {
  title: createTitle('Học Arduino & IoT - Lập Trình Phần Cứng'),
  description: createDescription(
    'Khóa học Arduino và IoT từ cơ bản đến nâng cao. Học cách lập trình vi điều khiển, kết nối cảm biến và xây dựng dự án IoT thông minh',
  ),
  keywords: createKeywords([
    'arduino',
    'IoT',
    'vi điều khiển',
    'cảm biến',
    'lập trình phần cứng',
    'electronics',
    'ESP32',
    'WiFi',
  ]),
  authors: [{ name: 'K2AiHub Team' }],
  openGraph: {    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',

    title: createTitle('Học Arduino & IoT - Lập Trình Phần Cứng'),
    description: createDescription(
      'Khám phá thế giới IoT và điện tử với Arduino - từ LED đơn giản đến hệ thống thông minh',
    ),
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('K2AiHub Educational Content'),
    description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
  },
};

// Convert ArduinoLesson to BaseLessonData interface
function convertToLesson(arduinoLesson: ArduinoLesson): BaseLessonData {
  return {
    id: arduinoLesson.id,
    title: arduinoLesson.title,
    description: arduinoLesson.description,
    duration: arduinoLesson.duration,
    difficulty: arduinoLesson.difficulty,
    category: arduinoLesson.category || 'Arduino Programming',
    imageUrl: arduinoLesson.imageUrl || '/default-lesson.jpg',
    videoUrl: arduinoLesson.videoUrl,
    objectives: arduinoLesson.objectives,
    prerequisites: [
      'Basic computer skills',
      'Interest in electronics',
      'Problem-solving mindset',
    ],
    exercises:
      arduinoLesson.exercises?.map((ex) => ({
        title: ex.title,
        description: ex.description,
        difficulty: ex.difficulty,
        materials: arduinoLesson.materials || [],
        procedure: [ex.code],
        expectedResults: ex.expectedOutput,
        solution: ex.code,
      })) || [],
    resources: [],
    tools: arduinoLesson.materials || [],
    realWorldApplications: arduinoLesson.realWorldApplications || [],
    caseStudies: [],
  };
}

export default function ArduinoPage() {
  // Convert lessons to base interface
  const convertedLessons = arduinoLessons.map(convertToLesson);

  const moduleConfig: ModuleData = {
    title: 'Arduino & IoT Programming',
    subtitle: 'Lập Trình Phần Cứng & IoT',
    description:
      'Khám phá thế giới Arduino và IoT. Từ LED đơn giản đến hệ thống thông minh - học cách lập trình vi điều khiển, kết nối cảm biến và xây dựng các dự án IoT thực tế.',
    primaryColor: 'cyan',
    gradientColors: 'from-slate-900 via-cyan-900 to-blue-900',
    basePath: '/learning/arduino',
    heroImageUrl:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&h=600&fit=crop',
    statsConfig: {
      lessons: `${arduinoLessons.length}+ bài`,
      duration: '15-20 giờ',
      level: 'Cơ bản → Nâng cao',
      projects: '10+ dự án thực tế',
    },
    marketData: {
      marketSize: '$25 Billion',
      marketNote: 'Global IoT market value by 2025',
      jobGrowth: '20% Growth',
      jobNote: 'Embedded systems engineer jobs',
      reduction: '70% Faster',
      reductionNote: 'Prototyping time with Arduino',
      startups: '2000+ Startups',
      startupsNote: 'IoT startups using Arduino ecosystem',
    },
    careerPaths: [
      'IoT Developer',
      'Embedded Systems Engineer',
      'Hardware Prototype Designer',
      'Smart Device Developer',
      'Automation Engineer',
      'Robotics Programmer',
    ],
    technicalHighlights: [
      {
        title: 'Arduino Basics',
        icon: '🔧',
        items: [
          'Arduino IDE Setup',
          'Board Programming',
          'Digital I/O',
          'Analog Sensors',
        ],
      },
      {
        title: 'Sensor Integration',
        icon: '📡',
        items: [
          'Temperature Sensors',
          'Motion Detection',
          'Light Sensors',
          'Environmental Monitoring',
        ],
      },
      {
        title: 'IoT Connectivity',
        icon: '🌐',
        items: [
          'WiFi Modules',
          'ESP32 Programming',
          'Cloud Integration',
          'Remote Monitoring',
        ],
      },
      {
        title: 'Advanced Projects',
        icon: '🚀',
        items: [
          'Smart Home Systems',
          'Weather Stations',
          'Security Systems',
          'Automation Control',
        ],
      },
      {
        title: 'Communication',
        icon: '📱',
        items: [
          'Serial Communication',
          'I2C Protocol',
          'SPI Interface',
          'Bluetooth & WiFi',
        ],
      },
      {
        title: 'Real Applications',
        icon: '🏭',
        items: [
          'Industrial IoT',
          'Smart Agriculture',
          'Health Monitoring',
          'Environmental Sensing',
        ],
      },
    ],
    relatedModules: [K2Module.Python, K2Module.Robotics, K2Module.STEM],
  };

  return (
    <ModulePageTemplate moduleData={moduleConfig} lessons={convertedLessons} />
  );
}
