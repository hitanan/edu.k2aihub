import { K2Module } from '@/data/moduleNavigation';
import { ModuleData } from '@/types';

export const smartManufacturingModuleData: ModuleData = {
  id: 'smart-manufacturing',
  title: 'Sản Xuất Thông Minh & Công Nghiệp 4.0',
  subtitle: 'Chuyển đổi số trong sản xuất - Cơ hội từ China+1 strategy',
  description: 'Nắm vững công nghệ Công nghiệp 4.0 để tận dụng làn sóng chuyển dịch sản xuất từ Trung Quốc sang Việt Nam. Thị trường 15-25 tỷ USD đang chờ đón những chuyên gia am hiểu công nghệ.',
  level: 'Trung bình',
  duration: '10-15 giờ',
  category: 'Industry 4.0',
  features: [
    'Factory Automation Systems',
    'Predictive Maintenance AI',
    'Supply Chain Optimization',
    'Quality Control với Computer Vision'
  ],
  icon: '🏭',
  color: 'from-orange-600 to-red-600',
  objectives: [
    'Hiểu rõ về cuộc cách mạng Công nghiệp 4.0 và cơ hội Việt Nam',
    'Thiết kế và triển khai hệ thống tự động hóa nhà máy',
    'Phát triển AI cho bảo trì dự đoán và kiểm soát chất lượng',
    'Tối ưu hóa chuỗi cung ứng với blockchain và IoT',
    'Xây dựng nhà máy thông minh hoàn chỉnh'
  ],
  prerequisites: [
    'Kiến thức điện tử cơ bản',
    'Lập trình cơ bản',
    'Hiểu biết về quy trình sản xuất'
  ],
  careerOutcomes: [
    'Industry 4.0 Consultant ($2,200-4,500/tháng)',
    'Factory Automation Engineer ($1,800-3,500/tháng)',
    'Smart Manufacturing Specialist ($2,000-4,000/tháng)',
    'Predictive Maintenance Engineer ($1,900-3,700/tháng)',
    'Digital Transformation Manager ($2,800-5,500/tháng)'
  ],
  industryApplications: [
    'Dệt may và da giày (xuất khẩu 40+ tỷ USD)',
    'Điện tử và linh kiện',
    'Thực phẩm và đồ uống',
    'Ô tô và phụ tùng',
    'Hóa chất và vật liệu'
  ],
  marketDemand: {
    averageSalary: '22-50 triệu VNĐ',
    jobGrowth: '+35%',
    hireDemand: 'Rất cao'
  },
  relatedModules: [
    K2Module.Arduino,
    K2Module.Robotics,
    K2Module.Python,
    K2Module.AIApplications
  ],
  heroImageUrl: '/images/smart-manufacturing-hero.jpg'
};
