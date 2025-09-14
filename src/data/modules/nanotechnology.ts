import { ModuleData } from '@/types';
import { NanotechnologyLesson as BaseNanotechnologyLesson } from '@/types/lesson-base';

export type NanotechnologyLesson = BaseNanotechnologyLesson;

const lessons: NanotechnologyLesson[] = [
  {
    id: 'introduction-to-nanotechnology',
    title: 'Giới Thiệu về Công Nghệ Nano',
    description:
      'Tìm hiểu các khái niệm cơ bản, lịch sử và tầm quan trọng của công nghệ nano trong khoa học và đời sống hiện đại.',
    duration: '45 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/embed/DAOFpgcW7iA',
    objectives: [
      'Hiểu định nghĩa và quy mô của công nghệ nano.',
      'Nắm được lịch sử phát triển và các cột mốc quan trọng.',
      'Nhận biết tiềm năng và các lĩnh vực ứng dụng chính.',
    ],
    realWorldApplications: [
      'Sản xuất vật liệu siêu bền, siêu nhẹ.',
      'Mỹ phẩm chống nắng với hạt nano.',
      'Quần áo không bám bẩn, không thấm nước.',
    ],
    nanotechApplications: ['Tổng quan về ứng dụng', 'Lịch sử phát triển'],
    materialsProperties: ['Định nghĩa Nanomet', 'Tỷ lệ bề mặt/thể tích'],
    safetyConsiderations: ['Tiềm năng và rủi ro', 'Bối cảnh đạo đức'],
  },
  {
    id: 'nanomaterials-fabrication',
    title: 'Chế Tạo và Tổng Hợp Vật Liệu Nano',
    description:
      'Khám phá các phương pháp từ trên xuống (top-down) và từ dưới lên (bottom-up) để tạo ra các cấu trúc và vật liệu nano.',
    duration: '60 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/embed/Z4ygi0kGf3c',
    objectives: [
      'Phân biệt được hai phương pháp chính: top-down và bottom-up.',
      'Hiểu nguyên lý của các kỹ thuật như quang khắc (lithography) và tự lắp ráp (self-assembly).',
      'Biết cách lựa chọn phương pháp phù hợp cho các loại vật liệu nano khác nhau.',
    ],
    realWorldApplications: [
      'Sản xuất chip vi xử lý máy tính.',
      'Tạo ra các lớp phủ chống trầy xước.',
      'Phát triển các cảm biến sinh học siêu nhạy.',
    ],
    nanotechApplications: ['Phương pháp Top-down (Lithography)', 'Phương pháp Bottom-up (Tự lắp ráp)'],
    materialsProperties: ['Nanoparticles', 'Nanotubes', 'Nanorods'],
    safetyConsiderations: ['Kiểm soát chất lượng', 'Độ tinh khiết của vật liệu'],
  },
  {
    id: 'nanomedicine-applications',
    title: 'Y Học Nano: Chẩn Đoán và Trị Liệu',
    description:
      'Ứng dụng của công nghệ nano trong y học, bao gồm hệ thống phân phối thuốc, chẩn đoán hình ảnh và kỹ thuật mô.',
    duration: '75 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/embed/5aR_p_g95y8',
    objectives: [
      'Hiểu cách hạt nano được sử dụng để vận chuyển thuốc đến tế bào ung thư.',
      'Nắm được vai trò của quantum dots trong chẩn đoán hình ảnh y tế.',
      'Khám phá tiềm năng của kỹ thuật mô nano trong y học tái tạo.',
    ],
    realWorldApplications: [
      'Thuốc điều trị ung thư nhắm trúng đích.',
      'Chất tương phản trong chụp MRI.',
      'Vá các mô bị tổn thương bằng vật liệu sinh học nano.',
    ],
    nanotechApplications: [
      'Hệ thống phân phối thuốc (Drug Delivery)',
      'Chẩn đoán hình ảnh phân tử',
      'Kỹ thuật mô và y học tái tạo',
    ],
    materialsProperties: ['Liposomes', 'Dendrimers', 'Quantum Dots trong y học'],
    safetyConsiderations: ['Độc tính của vật liệu nano (Nanotoxicity)', 'Thử nghiệm lâm sàng và quy định'],
  },
  {
    id: 'nanoelectronics-quantum-devices',
    title: 'Điện Tử Nano và Thiết Bị Lượng Tử',
    description:
      'Tìm hiểu về các linh kiện điện tử ở cấp độ nano và các nguyên tắc cơ bản của máy tính lượng tử và các thiết bị liên quan.',
    duration: '75 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/embed/64-Jd_l_5zg',
    objectives: [
      'Hiểu được những thách thức khi thu nhỏ bóng bán dẫn.',
      'Nắm bắt các khái niệm cơ bản của điện tử spin (spintronics).',
      'Tìm hiểu về nguyên lý hoạt động của màn hình QLED.',
    ],
    realWorldApplications: [
      'Bộ vi xử lý trong điện thoại thông minh và máy tính.',
      'Ổ cứng SSD dung lượng cao.',
      'TV và màn hình với màu sắc rực rỡ.',
    ],
    nanotechApplications: ['Transistors siêu nhỏ', 'Spintronics', 'Màn hình Quantum Dot (QLED)'],
    materialsProperties: ['Hiệu ứng đường hầm lượng tử', 'Điểm lượng tử (Quantum Dots)'],
    safetyConsiderations: ['Tản nhiệt trong thiết bị nano', 'Hạn chế của định luật Moore'],
  },
  {
    id: 'nanotech-energy-environment',
    title: 'Nano trong Năng Lượng và Môi Trường',
    description:
      'Khám phá vai trò của công nghệ nano trong việc cải thiện hiệu quả năng lượng, lưu trữ năng lượng và xử lý ô nhiễm môi trường.',
    duration: '60 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/embed/G2hBwTqBiKk',
    objectives: [
      'Hiểu cách vật liệu nano tăng hiệu suất của pin mặt trời.',
      'Khám phá các phương pháp lưu trữ hydro an toàn và hiệu quả.',
      'Tìm hiểu về ứng dụng của xúc tác nano trong việc làm sạch nước và không khí.',
    ],
    realWorldApplications: [
      'Tấm pin năng lượng mặt trời thế hệ mới.',
      'Pin cho xe điện và các thiết bị di động.',
      'Hệ thống lọc nước tiên tiến.',
    ],
    nanotechApplications: ['Pin mặt trời hiệu suất cao', 'Lưu trữ hydro', 'Xúc tác nano để xử lý nước'],
    materialsProperties: ['Aerogels', 'Vật liệu nano xốp'],
    safetyConsiderations: ['Tác động sinh thái của vật liệu nano', 'Vòng đời sản phẩm nano'],
  },
];

export const nanotechnologyModule: ModuleData = {
  id: 'nanotechnology',
  title: 'Công Nghệ Nano & Vật Liệu Tiên Tiến',
  description:
    'Khám phá thế giới vi mô của công nghệ nano, từ vật liệu nano, y học nano đến các thiết bị lượng tử, và hiểu các tác động an toàn và môi trường.',
  image: 'nanotechnology-module.jpg',
  tags: ['công nghệ nano', 'vật liệu tiên tiến', 'y học nano', 'thiết bị lượng tử'],
  category: 'Công nghệ mới nổi',
};

export const nanotechnologyLessons = lessons;
