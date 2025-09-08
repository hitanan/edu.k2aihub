import { ModuleData } from '@/types';

export const quantumComputingModuleData: ModuleData = {
  id: 'quantum-computing',
  title: 'Quantum Computing',
  subtitle: 'Máy tính lượng tử',
  description: 'Khám phá thế giới quantum computing với Qiskit, quantum algorithms và cryptography',
  category: 'professional',
  icon: '⚛️',
  color: 'from-cyan-600 to-blue-600',
  level: 'Nâng cao',
  duration: '14-18 giờ',
  features: ['Quantum Fundamentals', 'Qiskit Programming', 'Quantum Algorithms', 'Quantum Cryptography'],
  prerequisites: [
    'Linear algebra và complex numbers',
    'Python programming',
    'Basic physics knowledge',
    'Mathematical reasoning',
  ],
  objectives: [
    'Nắm vững các nguyên lý cơ bản của tính toán lượng tử, bao gồm superposition và entanglement.',
    'Lập trình các thuật toán lượng tử cơ bản bằng Qiskit.',
    'Hiểu các ứng dụng tiềm năng của máy tính lượng tử trong các lĩnh vực như y học, tài chính và mật mã.',
    'Phân tích các thách thức và tương lai của công nghệ lượng tử.',
  ],
  careerOutcomes: [
    'Nhà nghiên cứu lượng tử',
    'Kỹ sư phần mềm lượng tử',
    'Chuyên gia phân tích dữ liệu lượng tử',
    'Tư vấn công nghệ lượng tử',
  ],
  industryApplications: [
    { name: 'Dược phẩm', description: 'Mô phỏng phân tử để phát triển thuốc mới.' },
    { name: 'Tài chính', description: 'Tối ưu hóa danh mục đầu tư và quản lý rủi ro.' },
    { name: 'An ninh mạng', description: 'Phát triển các giao thức mã hóa lượng tử.' },
    { name: 'Trí tuệ nhân tạo', description: 'Tăng tốc các thuật toán machine learning.' },
  ],
  marketDemand: {
    averageSalary: '2000-5000 USD/tháng',
    jobGrowth: '30% mỗi năm (dự kiến)',
    hireDemand: 'Rất cao',
  },
  relatedModules: ['python', 'ai-fundamentals', 'cybersecurity'],
};
