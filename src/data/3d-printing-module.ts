import { K2Module } from '@/data/k2-modules';
import { ModuleNavigation } from '@/types';

export const threeDPrintingModuleData: ModuleNavigation = {
  id: K2Module.ThreeDPrinting,
  title: 'Làm chủ Công nghệ In 3D',
  subtitle: 'Từ Ý tưởng Số đến Vật thể Thực',
  description:
    'Khóa học này là cánh cửa đưa bạn vào thế giới sản xuất kỹ thuật số. Bạn sẽ được học toàn bộ quy trình in 3D: từ việc lên ý tưởng, thiết kế mô hình 3D bằng phần mềm chuyên dụng, chuẩn bị file in, vận hành máy in 3D FDM, cho đến các kỹ thuật xử lý hậu kỳ để tạo ra sản phẩm hoàn thiện. Đây là kỹ năng quan trọng trong kỷ nguyên Công nghiệp 4.0.',
  category: 'stem',
  icon: '🖨️',
  color: 'from-orange-500 to-amber-500',
  totalDuration: '20-25 giờ',
  difficulty: 'Trung bình',
  level: 'Trung bình',
  duration: '20-25 giờ',
  href: '/learning/3d-printing',
  features: [
    'Tiếp cận công nghệ sản xuất tiên tiến.',
    'Thực hành với phần mềm thiết kế 3D miễn phí.',
    'Hiểu sâu về cấu tạo và vận hành máy in 3D.',
    'Tạo ra các sản phẩm độc đáo của riêng bạn.',
  ],
  tags: ['3d printing', 'stem', 'design', 'manufacturing', 'prototyping'],
  prerequisites: [
    'Tư duy không gian và hình học cơ bản.',
    'Kỹ năng sử dụng máy tính thành thạo.',
    'Sự kiên nhẫn và tỉ mỉ.',
  ],
  lessons: [
    {
      id: 'tong-quan-in-3d',
      title: 'Tổng quan về Công nghệ In 3D',
      duration: '90 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'thiet-ke-3d-co-ban-voi-tinkercad',
      title: 'Thiết kế 3D Cơ bản với Tinkercad',
      duration: '120 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'phan-mem-cat-lop-slicer',
      title: 'Làm quen với Phần mềm Cắt lớp (Slicer)',
      duration: '90 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'van-hanh-may-in-3d-fdm',
      title: 'Vận hành Máy in 3D FDM',
      duration: '120 phút',
      difficulty: 'Trung bình',
    },
  ],
};
