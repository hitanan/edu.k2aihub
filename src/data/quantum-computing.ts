import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface QuantumLessonData extends BaseLessonData {
  quantumConcepts?: string[];
  quantumAlgorithms?: string[];
  practicalApplications?: Array<{
    title: string;
    description: string;
    currentStatus: string;
    futureImpact: string;
  }>;
}

export const QuantumLessons: QuantumLessonData[] = [
  {
    id: 'quantum-fundamentals',
    title: 'Cơ bản về Quantum Computing',
    description:
      'Khám phá thế giới kỳ diệu của máy tính lượng tử, từ các nguyên lý vật lý cơ bản đến tiềm năng ứng dụng.',
    duration: '150 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=pZnt0qSYTHM', // Máy tính lượng tử là gì? Giải thích dễ hiểu trong 5 phút
    imageUrl: '/images/quantum-fundamentals.jpg',
    objectives: [
      'Hiểu các nguyên lý vật lý lượng tử cơ bản',
      'Nắm vững khái niệm qubit và superposition',
      'Phân biệt quantum computing với classical computing',
      'Tìm hiểu các quantum gates và quantum circuits',
    ],
    prerequisites: ['Toán học cơ bản: đại số tuyến tính', 'Vật lý đại cương', 'Hiểu biết về máy tính cổ điển'],
    exercises: [
      {
        title: 'Mô phỏng Quantum Circuit với Qiskit',
        description: 'Xây dựng và mô phỏng quantum circuit đơn giản với IBM Qiskit',
        difficulty: 'Cơ bản',
        materials: ['Python', 'Qiskit', 'Jupyter Notebook', 'IBM Quantum Experience'],
        procedure: [
          'Cài đặt Qiskit: pip install qiskit qiskit-aer matplotlib',
          'Tạo quantum circuit với 2 qubits',
          'Áp dụng Hadamard gate để tạo superposition',
          'Áp dụng CNOT gate để tạo entanglement',
          'Thêm measurement operations',
          'Chạy mô phỏng trên local simulator',
          'Visualize kết quả với histogram',
        ],
        expectedResults: 'Hiểu được cách quantum states hoạt động và tạo ra entanglement',
        solution:
          '# Quantum Circuit cơ bản\nfrom qiskit import QuantumCircuit, Aer, execute\nfrom qiskit.visualization import plot_histogram\nimport matplotlib.pyplot as plt\n\n# Tạo quantum circuit\nqc = QuantumCircuit(2, 2)\n\n# Áp dụng Hadamard gate\nqc.h(0)\n\n# Tạo entanglement với CNOT\nqc.cx(0, 1)\n\n# Measurement\nqc.measure_all()\n\n# Mô phỏng\nsimulator = Aer.get_backend("qasm_simulator")\njob = execute(qc, simulator, shots=1024)\nresult = job.result()\ncounts = result.get_counts(qc)\n\n# Visualize\nprint("Measurement results:", counts)\nplot_histogram(counts)\nplt.show()',
      },
    ],
    realWorldApplications: [
      'Mã hóa lượng tử bảo mật tuyệt đối',
      'Tối ưu hóa logistics và supply chain',
      'Khám phá thuốc và molecular modeling',
      'Machine learning tăng tốc',
      'Dự báo thời tiết chính xác',
    ],
    caseStudies: [
      {
        title: 'Google Quantum Supremacy Achievement',
        organization: 'Google AI Quantum',
        problem: 'Chứng minh quantum computer có thể vượt trội classical computer',
        solution: 'Sử dụng chip Sycamore 53-qubit để giải bài toán random sampling',
        impact: 'Hoàn thành trong 200 giây so với 10,000 năm của supercomputer',
        innovations: ['Superconducting qubits', 'Error correction', 'Quantum algorithms'],
      },
    ],
    quantumConcepts: ['Superposition', 'Entanglement', 'Quantum Interference', 'Decoherence', 'Quantum Measurement'],
  },
  {
    id: 'quantum-algorithms',
    title: 'Thuật toán Quantum Computing',
    description: 'Tìm hiểu các thuật toán lượng tử nổi tiếng và cách chúng tạo ra lợi thế tính toán.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=V85332IZVs0',
    objectives: [
      'Nắm vững thuật toán Shor và ứng dụng phá mã RSA',
      'Hiểu thuật toán Grover cho tìm kiếm nhanh',
      'Tìm hiểu Quantum Fourier Transform',
      'Thực hành implement quantum algorithms',
    ],
    prerequisites: [
      'Quantum computing cơ bản',
      'Toán học: số học modular, Fourier transform',
      'Lập trình Python và Qiskit',
    ],
    exercises: [
      {
        title: 'Implement Grover Algorithm',
        description: 'Cài đặt thuật toán Grover để tìm kiếm trong database không có cấu trúc',
        difficulty: 'Nâng cao',
        materials: ['Qiskit', 'Python', 'Mathematical knowledge'],
        procedure: [
          'Thiết kế oracle function cho target item',
          'Implement diffusion operator (amplitude amplification)',
          'Tính số iterations tối ưu: π/4 * √N',
          'Xây dựng complete Grover circuit',
          'Test với database 4-item và 8-item',
          'So sánh với classical search complexity',
          'Phân tích xác suất success theo iterations',
        ],
        expectedResults: 'Tìm target item với xác suất cao sau √N iterations',
        solution:
          '# Grover Algorithm Implementation\nfrom qiskit import QuantumCircuit, QuantumRegister, ClassicalRegister\nfrom qiskit import Aer, execute\nimport numpy as np\n\ndef grover_algorithm(n_qubits, target_item):\n    # Create quantum circuit\n    qreg = QuantumRegister(n_qubits)\n    creg = ClassicalRegister(n_qubits)\n    qc = QuantumCircuit(qreg, creg)\n    \n    # Initialize superposition\n    for qubit in range(n_qubits):\n        qc.h(qubit)\n    \n    # Number of iterations\n    iterations = int(np.pi/4 * np.sqrt(2**n_qubits))\n    \n    for _ in range(iterations):\n        # Oracle\n        oracle_circuit(qc, target_item, n_qubits)\n        \n        # Diffusion operator\n        diffusion_operator(qc, n_qubits)\n    \n    # Measurement\n    qc.measure(qreg, creg)\n    \n    return qc\n\ndef oracle_circuit(qc, target, n_qubits):\n    # Mark target state\n    # Implementation depends on specific target\n    pass\n\ndef diffusion_operator(qc, n_qubits):\n    # Hadamard all qubits\n    for qubit in range(n_qubits):\n        qc.h(qubit)\n    \n    # Flip around |00...0>\n    for qubit in range(n_qubits):\n        qc.x(qubit)\n    \n    # Multi-controlled Z\n    qc.h(n_qubits-1)\n    qc.mcx(list(range(n_qubits-1)), n_qubits-1)\n    qc.h(n_qubits-1)\n    \n    # Flip back\n    for qubit in range(n_qubits):\n        qc.x(qubit)\n    \n    # Hadamard all qubits\n    for qubit in range(n_qubits):\n        qc.h(qubit)',
      },
    ],
    realWorldApplications: [
      'Phá mã RSA và elliptic curve cryptography',
      'Tìm kiếm database lớn trong O(√N)',
      'Simulation hệ thống quantum many-body',
      'Optimization problems (QAOA)',
      'Machine learning with quantum advantage',
    ],
    quantumAlgorithms: [
      'Shor Algorithm',
      'Grover Algorithm',
      'Quantum Fourier Transform',
      'Variational Quantum Eigensolver (VQE)',
      'Quantum Approximate Optimization Algorithm (QAOA)',
    ],
  },
  {
    id: 'quantum-cryptography',
    title: 'Quantum Cryptography và Bảo mật',
    description: 'Khám phá cách quantum computing thay đổi bảo mật thông tin và mã hóa.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=_5NQf8k3Jo0',
    objectives: [
      'Hiểu Quantum Key Distribution (QKD)',
      'Nắm vững post-quantum cryptography',
      'Tìm hiểu quantum-safe encryption methods',
      'Đánh giá tác động của quantum computing lên cybersecurity',
    ],
    prerequisites: ['Kiến thức mã hóa cổ điển', 'Quantum computing cơ bản', 'Network security'],
    exercises: [
      {
        title: 'Mô phỏng BB84 Protocol',
        description: 'Implement giao thức trao đổi khóa lượng tử BB84',
        difficulty: 'Trung bình',
        procedure: [
          'Mô phỏng Alice sending random bits',
          'Random basis selection (rectilinear vs diagonal)',
          'Bob measurement với random basis',
          'Public basis comparison',
          'Key sifting và error correction',
          'Eavesdropping detection',
          'Final secure key generation',
        ],
      },
    ],
    realWorldApplications: [
      'Banking quantum-safe communication',
      'Government secure channels',
      'Healthcare data protection',
      'Military communications',
      'Financial trading systems',
    ],
  },
  {
    id: 'quantum-future',
    title: 'Tương lai của Quantum Computing',
    description: 'Khám phá xu hướng phát triển và tác động tương lai của quantum computing.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=cer528-lIU8',
    objectives: [
      'Hiểu roadmap phát triển quantum hardware',
      'Nắm vững các thách thức kỹ thuật hiện tại',
      'Dự báo impact lên các ngành công nghiệp',
      'Cơ hội nghề nghiệp trong quantum computing',
    ],
    prerequisites: ['Quantum computing cơ bản', 'Hiểu biết về công nghệ'],
    exercises: [
      {
        title: 'Phân tích Quantum Ecosystem',
        description: 'Nghiên cứu và so sánh các platform quantum computing hiện tại',
        difficulty: 'Cơ bản',
        procedure: [
          'Research IBM Quantum, Google Quantum AI, Amazon Braket',
          'So sánh số lượng qubits và error rates',
          'Phân tích pricing models',
          'Đánh giá accessibility cho developers',
          'Dự báo timeline quantum advantage',
          'Tạo presentation về quantum landscape',
        ],
      },
    ],
    realWorldApplications: [
      'Quantum cloud computing services',
      'Quantum machine learning platforms',
      'Quantum simulation for drug discovery',
      'Quantum optimization for logistics',
      'Quantum sensing and metrology',
    ],
    practicalApplications: [
      {
        title: 'Quantum Cloud Services',
        description: 'IBM Quantum Network, Amazon Braket, Azure Quantum',
        currentStatus: 'Available với limited qubits',
        futureImpact: 'Democratize quantum computing access',
      },
      {
        title: 'Drug Discovery',
        description: 'Molecular simulation với quantum advantage',
        currentStatus: 'Proof-of-concept studies',
        futureImpact: 'Accelerate new medicine development',
      },
    ],
  },
];
