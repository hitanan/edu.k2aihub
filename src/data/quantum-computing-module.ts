import { ModuleData } from '@/types';
import { K2Module } from '@/data/moduleNavigation';

export const quantumComputingModuleData: ModuleData = {
  id: 'quantum-computing',
  title: 'Quantum Computing - Điện toán lượng tử',
  subtitle: 'Khám phá thế giới kỳ lạ và mạnh mẽ của điện toán lượng tử',
  description:
    'Đi sâu vào các nguyên lý của cơ học lượng tử, khám phá cách qubit, sự chồng chập và vướng víu lượng tử đang cách mạng hóa ngành công nghiệp máy tính, giải quyết các vấn-đề bất khả thi đối với máy tính cổ điển.',
  level: 'Nâng cao',
  duration: '30-35 giờ',
  category: 'Công nghệ Tương lai',
  features: [
    'Hiểu biết sâu sắc về qubit và các cổng lượng tử.',
    'Lập trình với Qiskit, framework điện toán lượng tử của IBM.',
    'Khám phá các thuật toán lượng tử như Shor và Grover.',
    'Nghiên cứu ứng dụng trong hóa học, tài chính và AI.',
  ],
  icon: '⚛️',
  color: 'from-indigo-500 to-purple-600',
  heroImageUrl: 'https://images.unsplash.com/photo-1617854818583-09e7f077a156?w=1200&h=600&fit=crop',
  objectives: [
    'Nắm vững các khái niệm cơ bản của cơ học lượng tử áp dụng cho điện toán.',
    'Xây dựng và mô phỏng các mạch lượng tử bằng Qiskit.',
    'Hiểu và phân tích các thuật toán lượng tử cốt lõi.',
    'Đánh giá các ứng dụng tiềm năng và thách thức của điện toán lượng tử.',
  ],
  prerequisites: [
    'Kiến thức vững chắc về Đại số tuyến tính (vector, ma trận).',
    'Kinh nghiệm lập trình Python.',
    'Hiểu biết cơ bản về vật lý cổ điển.',
  ],
  careerOutcomes: [
    'Nhà nghiên cứu Lượng tử (Quantum Researcher)',
    'Kỹ sư Phần mềm Lượng tử (Quantum Software Engineer)',
    'Chuyên gia Phân tích Dữ liệu Lượng tử',
    'Tư vấn Công nghệ Lượng tử',
  ],
  industryApplications: [
    'Phát triển thuốc và vật liệu mới (Hóa học lượng tử).',
    'Tối ưu hóa danh mục đầu tư và quản lý rủi ro (Tài chính).',
    'Phá vỡ các hệ thống mã hóa hiện tại (An ninh mạng).',
    'Tăng tốc các mô hình học máy phức tạp (Trí tuệ nhân tạo).',
  ],
  marketDemand: {
    averageSalary: '40-80 triệu VNĐ (cho vị trí có kinh nghiệm)',
    jobGrowth: '+50% (dự kiến trong 5 năm tới)',
    hireDemand: 'Rất cao (nhưng yêu cầu chuyên môn sâu)',
  },
  relatedModules: [K2Module.Python, K2Module.Cybersecurity, K2Module.Biotechnology],
};
