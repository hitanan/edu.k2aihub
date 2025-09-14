import { BaseLessonData } from '@/types/lesson-base';
import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';

export const sustainableEnergyGreenTechLessons: BaseLessonData[] = [
  {
    id: 'introduction-to-sustainable-energy',
    title: 'Giới thiệu về Năng lượng Bền vững',
    description:
      'Tìm hiểu các khái niệm cơ bản về năng lượng bền vững, tầm quan trọng và các loại năng lượng tái tạo chính.',
    videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    duration: '45 phút',
    difficulty: 'Cơ bản',
    objectives: [
      'Hiểu định nghĩa và tầm quan trọng của năng lượng bền vững.',
      'Phân biệt được các loại năng lượng tái tạo chính (mặt trời, gió, thủy điện).',
      'Nhận thức được vai trò của năng lượng bền vững trong việc chống biến đổi khí hậu.',
    ],
    prerequisites: ['Kiến thức cơ bản về khoa học tự nhiên.'],
    exercises: [],
    realWorldApplications: [],
  },
  {
    id: 'solar-power-technology',
    title: 'Công nghệ Năng lượng Mặt trời',
    description:
      'Khám phá cách hoạt động của pin mặt trời, các loại hệ thống điện mặt trời và tiềm năng ứng dụng tại Việt Nam.',
    videoUrl: 'https://www.youtube.com/watch?v=0eQ12-mQ-4o',
    duration: '60 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Giải thích được nguyên lý hoạt động của pin quang điện (photovoltaic).',
      'Mô tả các thành phần của một hệ thống điện mặt trời dân dụng.',
      'Đánh giá tiềm năng và thách thức của điện mặt trời tại Việt Nam.',
    ],
    prerequisites: ['Bài học "Giới thiệu về Năng lượng Bền vững".'],
    exercises: [],
    realWorldApplications: [],
  },
  {
    id: 'wind-power-and-turbines',
    title: 'Năng lượng Gió và Tua bin',
    description:
      'Tìm hiểu về nguyên lý hoạt động của tua bin gió, các loại trang trại gió và thách thức trong phát triển điện gió.',
    videoUrl: 'https://www.youtube.com/watch?v=Z5vYafcxV_E',
    duration: '60 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Trình bày nguyên lý chuyển đổi động năng của gió thành điện năng.',
      'Phân biệt các loại tua bin gió trục ngang và trục đứng.',
      'Thảo luận về các yếu tố môi trường và kinh tế của các dự án điện gió.',
    ],
    prerequisites: ['Bài học "Giới thiệu về Năng lượng Bền vững".'],
    exercises: [],
    realWorldApplications: [],
  },
  {
    id: 'green-building-and-design',
    title: 'Thiết kế và Xây dựng Xanh',
    description:
      'Các nguyên tắc của kiến trúc bền vững, vật liệu xây dựng thân thiện với môi trường và công nghệ tòa nhà thông minh.',
    videoUrl: 'https://www.youtube.com/watch?v=Io-m_WIiXkI',
    duration: '50 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Liệt kê các nguyên tắc cốt lõi của thiết kế xanh.',
      'Nhận biết các loại vật liệu xây dựng bền vững.',
      'Hiểu về các công nghệ giúp tòa nhà tiết kiệm năng lượng.',
    ],
    prerequisites: ['Kiến thức cơ bản về kiến trúc hoặc xây dựng là một lợi thế.'],
    exercises: [],
    realWorldApplications: [],
  },
  {
    id: 'electric-vehicles-and-future-of-transport',
    title: 'Xe điện và Tương lai Giao thông',
    description: 'Phân tích công nghệ xe điện, hạ tầng trạm sạc và tác động của xe điện đến lưới điện và môi trường.',
    videoUrl: 'https://www.youtube.com/watch?v=3SAxXUIre28',
    duration: '55 phút',
    difficulty: 'Trung bình',
    objectives: [
      'So sánh ưu và nhược điểm của xe điện so với xe động cơ đốt trong.',
      'Hiểu về các loại công nghệ pin và hệ thống sạc.',
      'Phân tích các thách thức về hạ tầng và nguồn điện cho xe điện.',
    ],
    prerequisites: ['Kiến thức phổ thông về ô tô và điện.'],
    exercises: [],
    realWorldApplications: [],
  },
  {
    id: 'circular-economy-principles',
    title: 'Nguyên tắc Kinh tế Tuần hoàn',
    description:
      'Hiểu về mô hình kinh tế tuần hoàn, cách áp dụng trong sản xuất và tiêu dùng để giảm thiểu chất thải và bảo vệ tài nguyên.',
    videoUrl: 'https://www.youtube.com/watch?v=W-b_mS-L4-A',
    duration: '65 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Định nghĩa và giải thích mô hình kinh tế tuần hoàn (Circular Economy).',
      'Phân biệt kinh tế tuần hoàn và kinh tế tuyến tính (Linear Economy).',
      'Nêu các ví dụ thực tế về áp dụng kinh tế tuần hoàn trong doanh nghiệp.',
    ],
    prerequisites: ['Kiến thức cơ bản về kinh tế và môi trường.'],
    exercises: [],
    realWorldApplications: [],
  },
];

export const sustainableEnergyModuleData: ModuleData = {
  id: 'sustainable-energy-green-tech',
  title: 'Năng lượng Tái tạo & Công nghệ Xanh',
  subtitle: 'Xây dựng một tương lai bền vững với năng lượng sạch và công nghệ xanh',
  description:
    'Khám phá các nguồn năng lượng tái tạo như mặt trời, gió, và thủy điện, cùng với các công nghệ xanh đột phá đang định hình lại thế giới của chúng ta, từ xe điện đến các tòa nhà thông minh.',
  level: 'Trung cấp',
  duration: '25-30 giờ',
  category: 'Khoa học Môi trường',
  features: [
    'Phân tích các loại năng lượng tái tạo.',
    'Thiết kế hệ thống năng lượng mặt trời cơ bản.',
    'Hiểu về lưới điện thông minh (smart grids).',
    'Nghiên cứu về xe điện và hạ tầng sạc.',
    'Tìm hiểu về kinh tế tuần hoàn và vật liệu bền vững.',
  ],
  icon: '♻️',
  color: 'from-green-500 to-teal-500',
  heroImageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&h=600&fit=crop',
  objectives: [
    'Nắm vững ưu và nhược điểm của các nguồn năng lượng tái tạo chính.',
    'Đánh giá tiềm năng năng lượng tái tạo tại Việt Nam.',
    'Hiểu các nguyên tắc của công nghệ xanh và phát triển bền vững.',
    'Phân tích chính sách và tác động kinh tế của năng lượng xanh.',
  ],
  prerequisites: [
    'Kiến thức cơ bản về khoa học tự nhiên (Lý, Hóa).',
    'Hiểu biết về các vấn đề môi trường hiện tại.',
    'Tư duy hệ thống và khả năng phân tích.',
  ],
  careerOutcomes: [
    'Kỹ sư Năng lượng Tái tạo',
    'Chuyên gia Tư vấn Môi trường',
    'Quản lý Dự án Năng lượng Xanh',
    'Chuyên viên Phân tích Chính sách Năng lượng',
  ],
  industryApplications: [
    'Phát triển các trang trại điện mặt trời và điện gió.',
    'Tư vấn giải pháp tiết kiệm năng lượng cho doanh nghiệp.',
    'Quản lý và vận hành các nhà máy thủy điện.',
    'Nghiên cứu và phát triển công nghệ lưu trữ năng lượng (pin).',
    'Xây dựng và phát triển đô thị thông minh, bền vững.',
  ],
  marketDemand: {
    averageSalary: '20-45 triệu VNĐ',
    jobGrowth: '+40%',
    hireDemand: 'Cao',
  },
  relatedModules: [K2Module.EnvironmentalDataScience, K2Module.Stem, K2Module.CircularEconomy],
};
