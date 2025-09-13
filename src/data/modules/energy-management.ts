import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';

export const energyManagementModule: ModuleData = {
  id: K2Module.EnergyManagement,
  title: 'Quản lý Năng lượng & Lưới điện Thông minh',
  subtitle: 'Tối ưu hóa tương lai năng lượng bền vững',
  description:
    'Khám phá công nghệ lưới điện thông minh và các hệ thống năng lượng tái tạo, từ tối ưu hóa lưới điện đến quản lý năng lượng bền vững trong bối cảnh chuyển đổi số.',
  category: 'Công nghệ Xanh',
  level: 'Trung cấp',
  duration: '12-15 giờ',
  icon: '💡',
  color: 'from-green-500 to-teal-500',
  features: [
    'Kiến trúc lưới điện thông minh',
    'Tích hợp năng lượng tái tạo',
    'Hệ thống lưu trữ năng lượng',
    'Tối ưu hóa lưới điện bằng AI',
    'Báo cáo bền vững (ESG)',
  ],
  prerequisites: [
    'Kiến thức cơ bản về kỹ thuật điện.',
    'Hiểu biết về các nguồn năng lượng.',
    'Tư duy logic và phân tích hệ thống.',
  ],
  objectives: [
    'Thiết kế và triển khai kiến trúc lưới điện thông minh.',
    'Tích hợp hiệu quả các nguồn năng lượng tái tạo.',
    'Phát triển hệ thống lưu trữ và quản lý năng lượng.',
    'Xây dựng các thuật toán tối ưu hóa lưới điện.',
    'Hiểu các chỉ số và báo cáo về tính bền vững.',
  ],
  careerOutcomes: [
    'Kỹ sư Lưới điện Thông minh',
    'Chuyên gia Quản lý Năng lượng',
    'Nhà phát triển Năng lượng Tái tạo',
    'Quản lý Vận hành Lưới điện',
    'Nhà phân tích Giao dịch Năng lượng',
  ],
  heroImageUrl: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=1200&h=600&fit=crop',
  tags: ['green-tech', 'sustainability', 'smart-city', 'engineering'],
  relatedModules: [K2Module.GreenTechnology, K2Module.DataScienceAnalytics, K2Module.EnvironmentalScienceClimate],
  lessons: [
    {
      id: 'introduction-to-smart-grids',
      title: 'Giới thiệu về Lưới điện Thông minh',
      description: 'Hiểu rõ khái niệm, kiến trúc và lợi ích của lưới điện thông minh trong bối cảnh năng lượng hiện đại.',
      duration: '90 phút',
      difficulty: 'Beginner',
      objectives: [],
      realWorldApplications: [],
    },
    {
      id: 'renewable-energy-integration',
      title: 'Tích hợp Năng lượng Tái tạo',
      description: 'Các thách thức và giải pháp khi tích hợp các nguồn năng lượng tái tạo như mặt trời và gió vào lưới điện.',
      duration: '120 phút',
      difficulty: 'Intermediate',
      objectives: [],
      realWorldApplications: [],
    },
    {
      id: 'energy-storage-systems',
      title: 'Hệ thống Lưu trữ Năng lượng (ESS)',
      description: 'Tìm hiểu về các công nghệ lưu trữ năng lượng, đặc biệt là hệ thống lưu trữ bằng pin (BESS) và vai trò của chúng.',
      duration: '110 phút',
      difficulty: 'Intermediate',
      objectives: [],
      realWorldApplications: [],
    },
    {
      id: 'grid-optimization-with-ai',
      title: 'Tối ưu hóa Lưới điện bằng AI',
      description: 'Ứng dụng Trí tuệ Nhân tạo (AI) và Học máy (ML) để dự báo, tối ưu hóa và tự động hóa vận hành lưới điện.',
      duration: '120 phút',
      difficulty: 'Advanced',
      objectives: [],
      realWorldApplications: [],
    },
    {
      id: 'sustainability-reporting-esg',
      title: 'Báo cáo Bền vững (ESG)',
      description: 'Tìm hiểu về các tiêu chuẩn Môi trường, Xã hội và Quản trị (ESG) và cách các công ty năng lượng báo cáo về tính bền vững.',
      duration: '90 phút',
      difficulty: 'Intermediate',
      objectives: [],
      realWorldApplications: [],
    },
  ],
  practicalApplications: [
    {
      name: 'Hiện đại hóa lưới điện của các công ty điện lực.',
      description: 'Nâng cấp và tự động hóa lưới điện để tăng hiệu quả, độ tin cậy và tích hợp năng lượng tái tạo.',
      steps: [
        'Triển khai cảm biến và đồng hồ thông minh',
        'Xây dựng trung tâm điều khiển hiện đại',
        'Tích hợp hệ thống quản lý năng lượng phân tán (DERMS)',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1624395217339-32d945a5d34c?w=800',
    },
    {
      name: 'Tối ưu hóa năng lượng trong công nghiệp.',
      description:
        'Áp dụng các giải pháp công nghệ để giảm tiêu thụ năng lượng và chi phí sản xuất trong các nhà máy và khu công nghiệp.',
      steps: ['Kiểm toán năng lượng', 'Lắp đặt hệ thống giám sát năng lượng (EMS)', 'Tự động hóa quy trình sản xuất'],
      imageUrl: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800',
    },
    {
      name: 'Quản lý tòa nhà thương mại thông minh.',
      description:
        'Sử dụng công nghệ IoT và AI để tối ưu hóa việc sử dụng năng lượng trong các tòa nhà văn phòng, trung tâm thương mại.',
      steps: [
        'Lắp đặt hệ thống HVAC thông minh',
        'Tự động hóa hệ thống chiếu sáng',
        'Phân tích dữ liệu tiêu thụ năng lượng',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800',
    },
    {
      name: 'Mạng lưới sạc xe điện.',
      description:
        'Phát triển hạ tầng sạc thông minh để đáp ứng nhu cầu ngày càng tăng của xe điện và quản lý tác động lên lưới điện.',
      steps: [
        'Quy hoạch vị trí trạm sạc',
        'Triển khai hệ thống quản lý sạc thông minh (V2G/V1G)',
        'Tích hợp với các ứng dụng thanh toán di động',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1619623532287-3a7a35d66a4c?w=800',
    },
    {
      name: 'Cơ sở hạ tầng thành phố thông minh.',
      description:
        'Tích hợp các giải pháp năng lượng thông minh vào quy hoạch và vận hành đô thị để tạo ra các thành phố bền vững và đáng sống hơn.',
      steps: [
        'Triển khai chiếu sáng đường phố thông minh',
        'Xây dựng lưới điện vi mô (microgrids) cho các khu vực trọng yếu',
        'Phát triển giao thông công cộng chạy điện',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=800',
    },
  ],
  careerProspects: [
    'Kỹ sư Lưới điện Thông minh',
    'Chuyên gia Quản lý Năng lượng',
    'Nhà phát triển Năng lượng Tái tạo',
    'Quản lý Vận hành Lưới điện',
    'Nhà phân tích Giao dịch Năng lượng',
  ],
  marketDemand: {
    averageSalary: '40.000.000 - 95.000.000 VNĐ/tháng',
    jobGrowth: '76%',
    hireDemand: 'Cao',
  },
  industryApplications: [
    {
      name: 'Tập đoàn Điện lực Việt Nam (EVN)',
      description:
        'EVN đang dẫn đầu trong việc hiện đại hóa lưới điện quốc gia để cải thiện hiệu quả và độ tin cậy, tích hợp các nguồn năng lượng tái tạo và triển khai công nghệ lưới điện thông minh.',
      url: 'https://www.evn.com.vn/',
    },
    {
      name: 'VinFast',
      description:
        'Với hệ sinh thái xe điện, VinFast đang đầu tư mạnh vào hạ tầng trạm sạc và các giải pháp sạc thông minh, góp phần vào việc quản lý nhu cầu năng lượng và ổn định lưới điện.',
      url: 'https://vinfastauto.com/',
    },
    {
      name: 'Các khu công nghiệp công nghệ cao',
      description:
        'Các khu công nghiệp như Khu Công nghệ cao Hòa Lạc và Khu Công nghệ cao TP.HCM đang triển khai các giải pháp lưới điện vi mô (microgrid) và quản lý năng lượng thông minh để đảm bảo nguồn cung cấp điện ổn định và hiệu quả.',
      url: 'https://hhtp.gov.vn/',
    },
  ],
};

