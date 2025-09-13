import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';
import { electricVehicleLessons } from '@/data/lessons/electric-vehicle-tech';

export { electricVehicleLessons };

export const electricVehicleTechModuleData: ModuleData = {
  id: K2Module.ElectricVehicleTech,
  title: 'Công Nghệ Xe Điện',
  subtitle: 'Khám phá công nghệ xe điện và tương lai của giao thông',
  description:
    'Khám phá công nghệ xe điện, từ hệ thống truyền động và pin đến lái xe tự hành và hạ tầng sạc thông minh, tập trung vào các ứng dụng thực tế tại Việt Nam.',
  heroImageUrl: 'https://images.unsplash.com/photo-1617886322207-6f504e7472c5?w=1200&h=600&fit=crop',
  color: 'from-green-500 to-blue-600',
  icon: '🚗',
  level: 'Trung cấp',
  duration: '15 giờ',
  category: 'Công nghệ & Kỹ thuật',
  features: [
    'Hệ thống truyền động điện',
    'Công nghệ pin và quản lý năng lượng',
    'Lái xe tự hành (ADAS)',
    'Hạ tầng sạc thông minh',
    'Sản xuất và kiểm soát chất lượng',
  ],
  relatedModules: [K2Module.RenewableEnergy, K2Module.AdvancedAI, K2Module.SmartManufacturing],
  lessons: electricVehicleLessons,
  objectives: [
    'Hiểu rõ kiến trúc hệ thống truyền động và công nghệ pin xe điện.',
    'Nắm vững các nguyên tắc của hệ thống lái xe tự hành và ADAS.',
    'Thiết kế và phân tích hạ tầng sạc xe điện và tích hợp lưới điện.',
    'Áp dụng các tiêu chuẩn kiểm soát chất lượng trong sản xuất xe điện.',
  ],
  prerequisites: ['Kiến thức cơ bản về kỹ thuật điện.', 'Hiểu biết về nguyên lý hoạt động của ô tô.'],
  careerOutcomes: [
    'Kỹ sư hệ thống xe điện',
    'Chuyên gia công nghệ pin',
    'Kỹ sư xe tự hành',
    'Quản lý hạ tầng sạc',
    'Kỹ sư sản xuất ô tô',
  ],
  marketDemand: {
    averageSalary: '25.000.000 - 45.000.000 VNĐ/tháng',
    jobGrowth: '30%',
    hireDemand: 'Rất cao',
  },
  industryApplications: [
    {
      name: 'VinFast',
      description:
        'Là nhà sản xuất ô tô và xe máy điện hàng đầu Việt Nam, VinFast đang tiên phong trong việc xây dựng hệ sinh thái xe điện toàn diện, từ sản xuất pin, lắp ráp xe đến phát triển mạng lưới trạm sạc trên toàn quốc.',
      url: 'https://vinfastauto.com/',
    },
    {
      name: 'Tập đoàn Điện lực Việt Nam (EVN)',
      description:
        'EVN đóng vai trò quan trọng trong việc phát triển hạ tầng lưới điện để đáp ứng nhu cầu sạc xe điện ngày càng tăng, đồng thời nghiên cứu các giải pháp lưới điện thông minh để tích hợp xe điện một cách hiệu quả.',
      url: 'https://www.evn.com.vn/',
    },
    {
      name: 'VinAI',
      description:
        'Là một công ty con của Vingroup, VinAI tập trung nghiên cứu và phát triển các công nghệ AI tiên tiến, đặc biệt là trong lĩnh vực xe tự hành, góp phần nâng cao khả năng cạnh tranh cho các sản phẩm xe điện của VinFast.',
      url: 'https://www.vinai.io/',
    },
  ],
};
