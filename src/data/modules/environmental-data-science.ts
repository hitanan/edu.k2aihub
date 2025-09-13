import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';
import { environmentalDataScienceLessons } from '@/data/lessons/environmental-data-science';

export { environmentalDataScienceLessons };

export const environmentalDataScienceModuleData: ModuleData = {
  id: K2Module.EnvironmentalDataScience,
  title: 'Khoa Học Dữ Liệu Môi Trường',
  subtitle: 'Công Nghệ Xanh & Phân Tích Bền Vững',
  description:
    'Ứng dụng khoa học dữ liệu để giải quyết các thách thức môi trường tại Việt Nam. Khóa học bao gồm phân tích khí hậu, giám sát môi trường, viễn thám và học máy để dự báo và tối ưu hóa.',
  level: 'Nâng cao',
  duration: '12-16 giờ',
  category: 'Data Science',
  features: [
    'Phân tích & Mô hình hóa Dữ liệu Khí hậu, tập trung vào Việt Nam',
    'Hệ thống Giám sát Chất lượng Không khí & Nước bằng IoT',
    'Ứng dụng Viễn thám Vệ tinh & GIS để giám sát phá rừng',
    'Học máy & Mô hình hóa Dự báo để tối ưu hóa bền vững',
    'Các ứng dụng thực tế tại Việt Nam với case study và dữ liệu địa phương',
  ],
  icon: '🌍',
  color: 'from-green-600 to-emerald-600',
  heroImageUrl: 'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?w=1200&h=600&fit=crop&auto=format',
  objectives: [
    'Thành thạo kỹ thuật phân tích dữ liệu khí hậu tập trung vào các kiểu thời tiết Việt Nam',
    'Thiết kế hệ thống giám sát môi trường IoT để theo dõi chất lượng không khí và nước',
    'Áp dụng viễn thám vệ tinh để giám sát rừng và phát hiện thay đổi ven biển',
    'Triển khai các mô hình học máy để dự báo và tối ưu hóa môi trường',
    'Nắm vững các quy định môi trường của Việt Nam và phát triển giải pháp tuân thủ',
  ],
  prerequisites: [
    'Nền tảng vững chắc về khoa học dữ liệu, thống kê và lập trình (Python/R)',
    'Hiểu biết về các nguyên tắc khoa học môi trường và khái niệm bền vững',
    'Kiến thức cơ bản về hệ thống GIS, hình ảnh vệ tinh và viễn thám',
    'Quen thuộc với các thuật toán học máy và kỹ thuật trực quan hóa dữ liệu',
  ],
  careerOutcomes: [
    'Nhà khoa học dữ liệu môi trường (30-70 triệu VNĐ/tháng)',
    'Nhà phân tích dữ liệu khí hậu (25-60 triệu VNĐ/tháng)',
    'Chuyên gia viễn thám (32-75 triệu VNĐ/tháng)',
    'Kỹ sư giám sát môi trường (28-65 triệu VNĐ/tháng)',
    'Tư vấn dữ liệu bền vững (35-80 triệu VNĐ/tháng)',
  ],
  industryApplications: [
    'Các cơ quan môi trường của chính phủ: Hệ thống giám sát và tuân thủ',
    'Các công ty tư vấn môi trường: Đánh giá tác động và lập kế hoạch khắc phục',
    'Ngành nông nghiệp: Nông nghiệp chính xác và các thực hành bền vững',
    'Các công ty năng lượng: Đánh giá tài nguyên năng lượng tái tạo',
    'Quy hoạch đô thị: Tối ưu hóa môi trường thành phố thông minh',
  ],
  marketDemand: {
    averageSalary: '25-90 triệu VNĐ/tháng',
    jobGrowth: '+75%',
    hireDemand: 'Cao',
  },
  relatedModules: [K2Module.AdvancedAI, K2Module.Python, K2Module.GreenTechnology, K2Module.DigitalMarketing],
  lessons: environmentalDataScienceLessons,
};
