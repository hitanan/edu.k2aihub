import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { quantumComputingLessons } from '@/data/quantum-computing';
import { createModuleMetadata } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  'Quantum Computing - Máy Tính Lượng Tử',
  'Khám phá thế giới kỳ diệu của máy tính lượng tử từ nguyên lý cơ bản đến ứng dụng thực tế. Học quantum algorithms, cryptography và tương lai công nghệ.',
  [
    'quantum computing',
    'máy tính lượng tử',
    'quantum algorithms',
    'quantum cryptography',
    'qiskit',
    'quantum physics',
    'vật lý lượng tử',
    'công nghệ tương lai',
    'K2AI',
  ],
  'quantum-computing',
);

export default function QuantumComputingMainPage() {
  const moduleData = {
    id: 'quantum-computing',
    title: 'Quantum Computing - Máy Tính Lượng Tử',
    subtitle: 'Công nghệ tính toán thế hệ mới với tiềm năng vô hạn',
    description: `
      Khám phá thế giới kỳ diệu của máy tính lượng tử - công nghệ có thể thay đổi hoàn toàn cách chúng ta tính toán và giải quyết vấn đề. 
      Từ các nguyên lý vật lý lượng tử cơ bản đến ứng dụng thực tế trong mã hóa, AI và khoa học vật liệu, 
      khóa học này sẽ đưa bạn vào hành trình khám phá công nghệ tương lai.
    `,
    level: 'Nâng cao',
    duration: '20-25 giờ',
    category: 'Advanced Technology',
    features: [
      'Nắm vững nguyên lý quantum mechanics ứng dụng',
      'Thực hành với IBM Qiskit và quantum simulators',
      'Hiểu quantum algorithms: Shor, Grover, QFT',
      'Ứng dụng quantum cryptography và bảo mật',
      'Khám phá quantum machine learning',
      'Dự báo tác động của quantum computing',
    ],
    icon: '⚛️',
    color: 'from-purple-600 to-pink-600',
    objectives: [
      'Hiểu các nguyên lý vật lý lượng tử: superposition, entanglement, interference',
      'Nắm vững cách hoạt động của qubits và quantum gates',
      'Thực hành lập trình quantum với Qiskit và quantum circuits',
      'Phân tích các thuật toán lượng tử nổi tiếng và ưu thế tính toán',
      'Ứng dụng quantum cryptography cho bảo mật thông tin',
      'Đánh giá tác động của quantum computing lên các ngành công nghiệp',
    ],
    prerequisites: [
      'Toán học đại học: đại số tuyến tính, xác suất thống kê',
      'Vật lý đại cương có hiểu biết về mechanics và waves',
      'Lập trình Python cơ bản',
      'Kiến thức máy tính và thuật toán cổ điển',
      'Tư duy logic và phân tích toán học',
    ],
    careerOutcomes: [
      'Quantum Algorithm Developer - 40-80 triệu VNĐ',
      'Quantum Cryptography Specialist - 35-70 triệu VNĐ',
      'Quantum Research Scientist - 50-100 triệu VNĐ',
      'Quantum Software Engineer - 45-85 triệu VNĐ',
      'Quantum Machine Learning Engineer - 55-95 triệu VNĐ',
      'Quantum Computing Consultant - 60-120 triệu VNĐ',
    ],
    industryApplications: [
      'Cryptography & Cybersecurity: Quantum-safe encryption và quantum key distribution',
      'Financial Services: Portfolio optimization và risk analysis với quantum algorithms',
      'Drug Discovery: Molecular simulation và protein folding với quantum computing',
      'Materials Science: Quantum simulation cho advanced materials research',
      'Machine Learning: Quantum ML algorithms cho pattern recognition',
      'Logistics: Optimization problems giải quyết với quantum advantage',
      'Climate Modeling: Complex system simulation với quantum computers',
      'Artificial Intelligence: Quantum-enhanced AI và neural networks',
    ],
    marketDemand: {
      averageSalary: '45-85 triệu VNĐ',
      jobGrowth: '+180%',
      hireDemand: 'Cực cao',
    },
    relatedModules: [
      K2Module.AdvancedAI,
      K2Module.Cybersecurity,
      K2Module.Python,
      K2Module.DataScienceAnalytics,
      K2Module.Nanotechnology,
    ],
  };

  return <ModulePageTemplate moduleData={moduleData} lessons={quantumComputingLessons} />;
}
