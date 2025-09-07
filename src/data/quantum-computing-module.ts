import { ModuleNavigation } from '@/types';

export const quantumComputingModuleData: ModuleNavigation = {
  id: 'quantum-computing',
  title: 'Quantum Computing',
  subtitle: 'Máy tính lượng tử',
  description: 'Khám phá thế giới quantum computing với Qiskit, quantum algorithms và cryptography',
  category: ['professional', 'programming'],
  icon: '⚛️',
  color: 'from-cyan-600 to-blue-600',
  totalDuration: '14-18 giờ',
  difficulty: 'Nâng cao',
  level: 'Nâng cao',
  duration: '14-18 giờ',
  href: '/learning/quantum-computing',
  features: ['Quantum Fundamentals', 'Qiskit Programming', 'Quantum Algorithms', 'Quantum Cryptography'],
  tags: ['quantum', 'qiskit', 'cryptography', 'algorithms'],
  prerequisites: [
    'Linear algebra và complex numbers',
    'Python programming',
    'Basic physics knowledge',
    'Mathematical reasoning',
  ],
  lessons: [
    {
      id: 'quantum-fundamentals',
      title: 'Quantum Computing Fundamentals',
      duration: '160 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'quantum-algorithms',
      title: 'Quantum Algorithms & Implementations',
      duration: '180 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'quantum-cryptography',
      title: 'Quantum Cryptography & Security',
      duration: '160 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'quantum-future',
      title: 'Future of Quantum Computing',
      duration: '120 phút',
      difficulty: 'Trung bình',
    },
  ],
};
