import { K2Module } from '@/data/k2-modules';
import { ModuleNavigation } from '@/types';

export const circularEconomyModuleData: ModuleNavigation = {
  id: K2Module.CircularEconomy,
  title: 'Kinh tế Tuần hoàn',
  subtitle: 'Xây dựng một tương lai bền vững',
  description:
    'Khám phá các nguyên tắc của kinh tế tuần hoàn, học cách thiết kế các sản phẩm và hệ thống không có rác thải, và đóng góp vào một hành tinh khỏe mạnh hơn.',
  category: 'Khoa học & Môi trường',
  icon: '♻️',
  color: 'from-green-500 to-teal-500',
  totalDuration: '4 giờ',
  difficulty: 'Trung bình',
  prerequisites: ['Kiến thức cơ bản về môi trường'],
  lessons: [],
};
