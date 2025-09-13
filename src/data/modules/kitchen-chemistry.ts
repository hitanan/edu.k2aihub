import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { KitchenChemistryLesson } from '@/types/lesson-base';

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
  industryApplications: [{ name: 'Công nghệ thực phẩm.', description: '' }, { name: 'Nhà hàng và ẩm thực.', description: '' }, { name: 'Sản xuất đồ uống.', description: '' }],
  marketDemand: { averageSalary: '15-30 triệu VNĐ', jobGrowth: '+12%', hireDemand: 'Trung bình' },
  relatedModules: [K2Module.FoodTechnology, K2Module.Biotechnology],
};

export const kitchenChemistryLessons: KitchenChemistryLesson[] = [
  {
    id: 'maillard-reaction',
    title: 'Phản ứng Maillard: Nghệ thuật của việc "làm nâu" thực phẩm',
    description:
      'Khám phá phản ứng hóa học tạo ra hương vị thơm ngon và màu sắc hấp dẫn cho bánh mì nướng, bít tết và cà phê.',
    duration: '60 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=zftlz_cFzeQ',
    imageUrl: 'https://i.ytimg.com/vi/zftlz_cFzeQ/hqdefault.jpg',
    keyConcept: 'Non-enzymatic browning',
    objectives: [
      'Hiểu được điều kiện xảy ra phản ứng Maillard (nhiệt độ, axit amin, đường).',
      'Phân biệt phản ứng Maillard và phản ứng caramen hóa.',
      'Nhận biết các sản phẩm của phản ứng Maillard.',
    ],
    prerequisites: ['Kiến thức hóa học phổ thông.'],
    exercises: [
      {
        title: 'Thí nghiệm Bít tết',
        description: 'Quan sát sự khác biệt khi áp chảo bít tết ở các nhiệt độ khác nhau.',
        difficulty: 'Cơ bản',
        procedure: [
          'Chuẩn bị hai miếng bít tết có độ dày tương đương.',
          'Áp chảo một miếng ở lửa vừa và một miếng ở lửa lớn.',
          'So sánh màu sắc, mùi thơm và hương vị.',
        ],
        expectedResults:
          'Miếng bít tết ở lửa lớn có màu nâu đậm và hương vị phức tạp hơn do phản ứng Maillard diễn ra mạnh mẽ.',
      },
    ],
    realWorldApplications: ['Nướng bánh mì', 'Rang cà phê', 'Áp chảo thịt'],
  },
  {
    id: 'emulsification',
    title: 'Sự nhũ hóa: Bí mật đằng sau Sốt Mayonnaise',
    description:
      'Tìm hiểu cách dầu và nước, hai chất lỏng không thể hòa tan, lại có thể kết hợp với nhau để tạo thành một hỗn hợp mịn màng.',
    duration: '75 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=zhI7bQyTmHw',
    imageUrl: 'https://i.ytimg.com/vi/zhI7bQyTmHw/hqdefault.jpg',
    keyConcept: 'Colloidal systems',
    objectives: [
      'Định nghĩa được sự nhũ hóa và chất nhũ hóa.',
      'Hiểu vai trò của lecithin trong lòng đỏ trứng.',
      'Thực hành tạo ra một dung dịch nhũ tương ổn định.',
    ],
    prerequisites: ['Kiến thức cơ bản về phân tử phân cực và không phân cực.'],
    exercises: [
      {
        title: 'Tự làm sốt Mayonnaise',
        description: 'Tạo ra sốt mayonnaise từ các nguyên liệu cơ bản.',
        difficulty: 'Trung bình',
        procedure: [
          'Tách lấy lòng đỏ trứng.',
          'Từ từ thêm dầu ăn vào lòng đỏ trong khi đánh liên tục.',
          'Thêm giấm hoặc chanh và quan sát sự thay đổi.',
        ],
        expectedResults: 'Một hỗn hợp sốt mayonnaise mịn, không bị tách lớp.',
      },
    ],
    realWorldApplications: ['Sản xuất sốt salad', 'Làm kem', 'Dược phẩm'],
  },
];
