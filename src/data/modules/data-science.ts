import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { dataScienceLessons } from '@/data/lessons/data-science';

export const dataScienceModuleData: ModuleData = {
  id: K2Module.DataScience,
  title: 'Khoa học Dữ liệu',
  subtitle: 'Biến dữ liệu thành hành động',
  description:
    'Khóa học toàn diện về khoa học dữ liệu, từ các khái niệm cơ bản, thuật toán học máy, đến dữ liệu lớn và cách kể chuyện bằng dữ liệu.',
  category: 'Công nghệ',
  icon: '📊',
  color: 'from-blue-500 to-cyan-500',
  level: 'Nâng cao',
  duration: '12-15 giờ',
  features: [
    'Quy trình khoa học dữ liệu từ A-Z',
    'Các thuật toán Machine Learning phổ biến',
    'Xử lý Big Data với Spark',
    'Kỹ năng Data Visualization và Storytelling',
  ],
  prerequisites: ['Kiến thức về Python', 'Thống kê cơ bản', 'Tư duy logic'],
  objectives: [
    'Nắm vững quy trình khoa học dữ liệu từ A-Z.',
    'Áp dụng các thuật toán Machine Learning phổ biến vào các bài toán thực tế.',
    'Sử dụng các công cụ Big Data như Spark để xử lý dữ liệu lớn.',
    'Thiết kế các biểu đồ trực quan và kể chuyện bằng dữ liệu một cách thuyết phục.',
  ],
  careerOutcomes: [
    'Data Scientist',
    'Data Analyst',
    'Machine Learning Engineer',
    'Business Intelligence Analyst',
    'Big Data Engineer',
  ],
  industryApplications: [
    'Thương mại điện tử',
    'Tài chính - Ngân hàng',
    'Y tế',
    'Marketing và quảng cáo',
    'Sản xuất và chuỗi cung ứng',
  ],
  marketDemand: {
    averageSalary: '35.000.000 VNĐ/tháng',
    jobGrowth: '30%/năm',
    hireDemand: 'Rất cao',
  },
  relatedModules: ['python', 'ai-machine-learning', 'business-marketing'],
  lessons: dataScienceLessons,
};
