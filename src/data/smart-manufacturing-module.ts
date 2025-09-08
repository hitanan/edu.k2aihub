import { ModuleData } from '@/types';

export const smartManufacturingModuleData: ModuleData = {
  id: 'smart-manufacturing',
  title: 'Smart Manufacturing & Industry 4.0',
  subtitle: 'Sản xuất thông minh và Công nghiệp 4.0',
  description:
    'Tìm hiểu về nhà máy thông minh, IoT trong sản xuất, robot tự động và phân tích dữ liệu để tối ưu hóa chuỗi cung ứng.',
  category: 'technology',
  icon: '🏭',
  color: 'from-slate-500 to-gray-600',
  level: 'Nâng cao',
  duration: '22-28 giờ',
  features: [
    'Industrial IoT (IIoT)',
    'Robotics & Automation',
    'Digital Twin',
    'Supply Chain Analytics',
    'Additive Manufacturing',
  ],
  prerequisites: [
    'Kiến thức về quy trình sản xuất',
    'Hiểu biết về kỹ thuật công nghiệp',
    'Kỹ năng phân tích dữ liệu',
    'Làm quen với các khái niệm tự động hóa',
  ],
  objectives: [
    'Hiểu rõ các trụ cột của Công nghiệp 4.0.',
    'Triển khai các giải pháp IIoT để thu thập và phân tích dữ liệu sản xuất.',
    'Ứng dụng robot và tự động hóa để tăng năng suất.',
    'Sử dụng Digital Twin để mô phỏng và tối ưu hóa quy trình.',
    'Phân tích dữ liệu chuỗi cung ứng để đưa ra quyết định thông minh.',
  ],
  careerOutcomes: [
    'Kỹ sư tự động hóa',
    'Chuyên gia IIoT',
    'Kỹ sư sản xuất thông minh',
    'Chuyên viên phân tích dữ liệu sản xuất',
    'Quản lý chuỗi cung ứng số',
  ],
  industryApplications: [
    { name: 'Sản xuất ô tô', description: 'Tự động hóa dây chuyền lắp ráp, kiểm tra chất lượng bằng AI.' },
    { name: 'Điện tử', description: 'Sử dụng robot chính xác cao để lắp ráp vi mạch.' },
    { name: 'Dược phẩm', description: 'Theo dõi và kiểm soát quy trình sản xuất theo thời gian thực.' },
    { name: 'Hàng tiêu dùng', description: 'Tối ưu hóa chuỗi cung ứng từ nhà máy đến người tiêu dùng.' },
  ],
  marketDemand: {
    averageSalary: '2000-4000 USD/tháng',
    jobGrowth: '18% mỗi năm',
    hireDemand: 'Rất cao',
  },
  relatedModules: ['iot-basics', 'robotics', 'data-analytics', 'supply-chain-logistics'],
};
