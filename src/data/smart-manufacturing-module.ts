import { ModuleNavigation } from '@/types';

export const smartManufacturingModuleData: ModuleNavigation = {
  id: 'smart-manufacturing',
  title: 'Smart Manufacturing & Industry 4.0',
  subtitle: 'Sản xuất thông minh và Công nghiệp 4.0',
  description:
    'Tìm hiểu về nhà máy thông minh, IoT trong sản xuất, robot tự động và phân tích dữ liệu để tối ưu hóa chuỗi cung ứng.',
  category: 'technology',
  icon: '🏭',
  color: 'from-slate-500 to-gray-600',
  totalDuration: '22-28 giờ',
  difficulty: 'Nâng cao',
  level: 'Nâng cao',
  duration: '22-28 giờ',
  href: '/learning/smart-manufacturing',
  features: [
    'Industrial IoT (IIoT)',
    'Robotics & Automation',
    'Digital Twin',
    'Supply Chain Analytics',
    'Additive Manufacturing',
  ],
  tags: ['industry 4.0', 'smart factory', 'iot', 'robotics', 'supply chain'],
  prerequisites: [
    'Kiến thức về quy trình sản xuất',
    'Hiểu biết về kỹ thuật công nghiệp',
    'Kỹ năng phân tích dữ liệu',
    'Làm quen với các khái niệm tự động hóa',
  ],
  lessons: [
    {
      id: 'industrial-iot-connectivity',
      title: 'Industrial IoT và Kết nối Nhà máy',
      duration: '260 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'robotics-automation-in-manufacturing',
      title: 'Robot và Tự động hóa trong Sản xuất',
      duration: '280 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'digital-twin-simulation',
      title: 'Digital Twin và Mô phỏng Sản xuất',
      duration: '240 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'supply-chain-analytics-optimization',
      title: 'Phân tích và Tối ưu hóa Chuỗi cung ứng',
      duration: '220 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'additive-manufacturing-3d-printing',
      title: 'Sản xuất Bồi đắp (In 3D công nghiệp)',
      duration: '200 phút',
      difficulty: 'Trung bình',
    },
  ],
};
