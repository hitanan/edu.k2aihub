import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';

export const quantumComputingEducationModuleData: ModuleData = {
  id: 'quantum-computing-education',
  title: 'Quantum Computing Education',
  subtitle: 'Giáo Dục Điện Toán Lượng Tử',
  description:
    'Khám phá thế giới quantum computing từ những khái niệm cơ bản nhất đến ứng dụng business thực tế. Học quantum algorithms, programming với IBM Qiskit, và hiểu được tác động revolutionary của quantum computing lên các ngành công nghiệp.',
  level: 'Trung bình',
  duration: '15-20 giờ',
  category: 'Emerging Technology',
  features: [
    'Hands-on programming với IBM Qiskit framework',
    'Quantum algorithms từ Shor đến Grover',
    'Real-world case studies từ Google, IBM, và leading companies',
    'Business applications và ROI analysis frameworks',
  ],
  icon: '⚛️',
  color: 'from-purple-600 to-indigo-600',
  heroImageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=600&fit=crop',
  objectives: [
    'Master quantum computing fundamentals và quantum mechanics principles',
    'Implement quantum algorithms như Shor và Grover algorithms',
    'Program quantum applications với IBM Qiskit framework',
    'Understand quantum cryptography và post-quantum security implications',
    'Analyze business opportunities và calculate ROI cho quantum investments',
  ],
  prerequisites: [
    'Toán học đại học (linear algebra, probability)',
    'Programming experience (Python preferred)',
    'Basic physics understanding',
    'Interest in cutting-edge technology',
  ],
  careerOutcomes: [
    'Quantum Software Developer',
    'Quantum Research Scientist',
    'Quantum Computing Consultant',
    'Cryptography Security Specialist',
    'Quantum Business Analyst',
  ],
  industryApplications: [
    'Financial services - portfolio optimization và risk analysis',
    'Pharmaceutical - drug discovery acceleration',
    'Technology - quantum machine learning và AI',
    'Cybersecurity - post-quantum cryptography',
    'Manufacturing - supply chain optimization',
  ],
  marketDemand: {
    averageSalary: '40-80 triệu VNĐ',
    jobGrowth: '+300%',
    hireDemand: 'Rất cao',
  },
  relatedModules: [K2Module.AdvancedAI, K2Module.Cybersecurity, K2Module.Python, K2Module.DataScienceAnalytics],
};
