import { ModuleNavigation } from '@/types';

export const digitalCitizenshipModuleData: ModuleNavigation = {
  id: 'digital-citizenship',
  title: 'Digital Citizenship & Online Safety',
  subtitle: 'Công dân số và An toàn trực tuyến',
  description:
    'Trang bị kỹ năng để trở thành công dân số có trách nhiệm, an toàn và thông thái trong thế giới kết nối.',
  category: 'essential',
  icon: '🛡️',
  color: 'from-sky-500 to-blue-500',
  totalDuration: '10-14 giờ',
  difficulty: 'Cơ bản',
  level: 'Cơ bản',
  duration: '10-14 giờ',
  href: '/learning/digital-citizenship',
  features: [
    'Digital Footprint',
    'Cyberbullying Prevention',
    'Privacy Management',
    'Fake News Detection',
    'Netiquette',
  ],
  tags: ['digital citizenship', 'online safety', 'cybersecurity', 'privacy', 'media literacy'],
  prerequisites: ['Sử dụng Internet và mạng xã hội cơ bản', 'Mong muốn trở thành người dùng Internet có trách nhiệm'],
  lessons: [
    {
      id: 'understanding-digital-footprint',
      title: 'Hiểu về Dấu chân số của bạn',
      duration: '100 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'cyberbullying-and-online-harassment',
      title: 'Phòng chống Bắt nạt và Quấy rối trên mạng',
      duration: '120 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'managing-your-online-privacy',
      title: 'Quản lý Quyền riêng tư Trực tuyến',
      duration: '110 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'detecting-fake-news-and-misinformation',
      title: 'Phát hiện Tin giả và Thông tin sai lệch',
      duration: '130 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'netiquette-and-digital-communication',
      title: 'Quy tắc ứng xử và Giao tiếp trên mạng',
      duration: '90 phút',
      difficulty: 'Cơ bản',
    },
  ],
};
