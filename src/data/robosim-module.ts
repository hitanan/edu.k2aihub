import { K2Module } from '@/data/k2-modules';
import { ModuleNavigation } from '@/types';

export const robosimModuleData: ModuleNavigation = {
  id: K2Module.Robosim,
  title: 'RoboSim: Lập Trình & Thi Đấu Robot',
  subtitle: 'Mô phỏng và chiến lược thi đấu robot',
  description:
    'Khóa học giới thiệu về lập trình robot mô phỏng, tập trung vào các cuộc thi robotics phổ biến tại Việt Nam như VEX IQ và First Lego League. Học sinh sẽ được học về chiến lược, thiết kế và lập trình robot hiệu quả.',
  category: ['programming', 'stem'],
  icon: '🤖',
  color: 'from-blue-600 to-indigo-600',
  totalDuration: '10-12 giờ',
  difficulty: 'Trung bình',
  level: 'Trung bình',
  duration: '10-12 giờ',
  href: '/learning/robosim',
  features: [
    'Giới thiệu các cuộc thi robotics tại Việt Nam',
    'Lập trình robot mô phỏng',
    'Chiến lược thi đấu hiệu quả',
    'Kỹ năng làm việc nhóm và giải quyết vấn đề',
  ],
  tags: ['robotics', 'robosim', 'vex iq', 'first lego league', 'stem'],
  prerequisites: ['Tư duy logic cơ bản', ' đam mê công nghệ và robot', 'Không yêu cầu kinh nghiệm lập trình'],
  lessons: [
    {
      id: 'intro-to-robosim',
      title: 'Giới thiệu Robosim và các cuộc thi Robotics',
      duration: '90 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'vex-iq-challenge-guide',
      title: 'Hướng dẫn thi đấu VEX IQ Challenge',
      duration: '120 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'first-lego-league-essentials',
      title: 'Những điều cần biết về First Lego League',
      duration: '120 phút',
      difficulty: 'Trung bình',
    },
  ],
};
