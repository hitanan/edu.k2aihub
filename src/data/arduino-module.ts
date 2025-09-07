import { K2Module } from './moduleNavigation';
import { ModuleNavigation } from '@/types';

export const arduinoModuleData: ModuleNavigation = {
  id: K2Module.Arduino,
  title: 'Arduino & IoT Programming',
  subtitle: 'Lập trình phần cứng',
  description: 'Xây dựng hệ thống IoT thông minh với Arduino',
  category: 'stem',
  icon: '⚡',
  color: 'from-cyan-600 to-blue-600',
  totalDuration: '12-15 giờ',
  difficulty: 'Trung bình',
  level: 'Nâng cao',
  duration: '12-15 giờ',
  href: '/learning/arduino',
  features: ['Arduino Programming', 'IoT Projects', 'Sensors', 'Smart Home'],
  tags: ['arduino', 'iot', 'hardware', 'sensors'],
  prerequisites: ['Basic electronics knowledge', 'Programming fundamentals', 'Problem-solving skills'],
  lessons: [
    {
      id: 'arduino-setup',
      title: 'Arduino Setup & Development Environment',
      duration: '60 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'led-digital-outputs',
      title: 'LED Control & Digital Outputs',
      duration: '90 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'arduino-inputs',
      title: 'Arduino Inputs & Sensor Integration',
      duration: '90 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'arduino-sensors',
      title: 'Advanced Sensors & Data Processing',
      duration: '90 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'arduino-communication',
      title: 'Communication & Networking Protocols',
      duration: '90 phút',
      difficulty: 'Nâng cao',
    },
  ],
};
