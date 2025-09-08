import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';

export const circularEconomyModuleData: ModuleData = {
  id: K2Module.CircularEconomy,
  title: 'Kinh tế Tuần hoàn',
  subtitle: 'Xây dựng một tương lai bền vững',
  description:
    'Khám phá các nguyên tắc của kinh tế tuần hoàn, học cách thiết kế các sản phẩm và hệ thống không có rác thải, và đóng góp vào một hành tinh khỏe mạnh hơn.',
  category: 'Khoa học & Môi trường',
  icon: '♻️',
  color: 'from-green-500 to-teal-500',
  duration: '4 giờ',
  level: 'Trung bình',
  prerequisites: ['Kiến thức cơ bản về môi trường'],
  features: [
    'Nguyên tắc Kinh tế Tuần hoàn',
    'Thiết kế Sản phẩm Bền vững',
    'Mô hình Kinh doanh Tuần hoàn',
    'Quản lý Chuỗi Cung ứng Xanh',
    'Chính sách và Quy định',
    'Phân tích Vòng đời Sản phẩm (LCA)',
  ],
  objectives: [
    'Hiểu rõ 3 nguyên tắc cốt lõi của kinh tế tuần hoàn: loại bỏ rác thải và ô nhiễm, lưu thông sản phẩm và vật liệu, và tái tạo tự nhiên.',
    'Áp dụng các chiến lược thiết kế cho sự bền vững, tái sử dụng và tái chế.',
    'Phân tích và phát triển các mô hình kinh doanh tuần hoàn mới.',
    'Đánh giá tác động môi trường của sản phẩm và quy trình.',
    'Xác định các cơ hội cho kinh tế tuần hoàn trong bối cảnh Việt Nam.',
  ],
  careerOutcomes: [
    'Chuyên gia Tư vấn Bền vững',
    'Quản lý Sản phẩm Tuần hoàn',
    'Nhà thiết kế Hệ thống Bền vững',
    'Chuyên viên Phân tích Chuỗi Cung ứng Xanh',
    'Quản lý Tuân thủ Môi trường',
  ],
  industryApplications: [
    'Sản xuất và Tiêu dùng',
    'Nông nghiệp và Thực phẩm',
    'Xây dựng và Bất động sản',
    'Thời trang và Dệt may',
    'Năng lượng và Tiện ích',
  ],
  marketDemand: {
    averageSalary: '70-120 triệu VNĐ/năm',
    jobGrowth: '25% (dự kiến)',
    hireDemand: 'Cao',
  },
  relatedModules: [K2Module.SustainableAgriculture, K2Module.RenewableEnergy],
};
