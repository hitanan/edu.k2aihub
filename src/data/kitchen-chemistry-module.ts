import { ModuleData } from '@/types';
import { K2Module } from '@/data/moduleNavigation';

export const kitchenChemistryModuleData: ModuleData = {
  id: 'kitchen-chemistry',
  title: 'Hóa học Nhà bếp',
  subtitle: 'Biến căn bếp của bạn thành một phòng thí nghiệm.',
  description:
    'Module này giải thích các nguyên tắc hóa học phức tạp thông qua các hoạt động nấu ăn quen thuộc, từ việc nướng một chiếc bánh đến làm một lọ sốt mayonnaise.',
  level: 'Cơ bản',
  duration: '8-10 giờ',
  category: 'Science & Research',
  features: [
    'Thí nghiệm an toàn tại nhà.',
    'Giải thích khoa học về nấu ăn.',
    'Công thức nấu ăn dựa trên hóa học.',
    'Tìm hiểu về cấu trúc phân tử của thực phẩm.',
  ],
  icon: '🍳',
  color: 'from-orange-500 to-amber-500',
  heroImageUrl: 'https://images.unsplash.com/photo-1556909211-3a5872a3c2a2?w=1200&h=600&fit=crop',
  objectives: [
    'Hiểu về phản ứng Maillard và caramen hóa.',
    'Nắm vững nguyên lý của sự nhũ hóa.',
    'Khám phá vai trò của gluten trong làm bánh.',
    'Tìm hiểu về các loại axit và bazơ trong thực phẩm.',
  ],
  prerequisites: ['Tò mò về nấu ăn.', 'Kiến thức hóa học cơ bản.'],
  careerOutcomes: ['Nhà khoa học thực phẩm.', 'Đầu bếp chuyên nghiệp.', 'Chuyên gia phát triển sản phẩm (R&D).'],
  industryApplications: ['Công nghệ thực phẩm.', 'Nhà hàng và ẩm thực.', 'Sản xuất đồ uống.'],
  marketDemand: { averageSalary: '15-30 triệu VNĐ', jobGrowth: '+12%', hireDemand: 'Trung bình' },
  relatedModules: [K2Module.FoodTechnology, K2Module.Biotechnology],
};
