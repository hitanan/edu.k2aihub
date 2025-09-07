import { K2Module } from '@/data/k2-modules';
import { ModuleNavigation } from '@/types';

export const digitalCitizenshipOnlineSafetyModuleData: ModuleNavigation = {
  id: K2Module.DigitalCitizenshipOnlineSafety,
  title: 'Công dân số & An toàn trực tuyến',
  subtitle: 'Hành trang thiết yếu cho thế hệ tương lai',
  description:
    'Trong thế giới kết nối ngày nay, việc trở thành một công dân số có trách nhiệm là vô cùng quan trọng. Khóa học này cung cấp cho học sinh những kiến thức và kỹ năng để tương tác an toàn, có đạo đức và hiệu quả trên môi trường Internet.',
  category: ['essential', 'lifeskills'],
  icon: '🛡️',
  color: 'from-teal-500 to-cyan-600',
  totalDuration: '8-10 giờ',
  difficulty: 'Cơ bản',
  level: 'Cơ bản',
  duration: '8-10 giờ',
  href: '/learning/digital-citizenship-online-safety',
  features: [
    'Bảo vệ danh tính và thông tin cá nhân.',
    'Nhận diện và phòng chống tin giả, lừa đảo.',
    'Xây dựng dấu chân số tích cực.',
    'Giao tiếp và ứng xử văn minh trên mạng.',
  ],
  tags: ['công dân số', 'an toàn trực tuyến', 'an ninh mạng', 'đạo đức số'],
  prerequisites: [
    'Kỹ năng sử dụng máy tính và Internet cơ bản.',
    'Có tài khoản mạng xã hội (Facebook, TikTok, etc.) là một lợi thế.',
    'Mong muốn trở thành người dùng Internet thông thái.',
  ],
  lessons: [
    { id: 'hieu-ve-cong-dan-so', title: 'Hiểu về Công dân số', duration: '45 phút', difficulty: 'Cơ bản' },
    {
      id: 'bao-ve-danh-tinh-truc-tuyen',
      title: 'Bảo vệ Danh tính Trực tuyến',
      duration: '60 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'nhan-dien-tin-gia',
      title: 'Tư duy Phản biện & Nhận diện Tin giả',
      duration: '75 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'giao-tiep-va-ung-xu-tren-mang',
      title: 'Giao tiếp và Ứng xử trên mạng (Netiquette)',
      duration: '45 phút',
      difficulty: 'Cơ bản',
    },
  ],
};
