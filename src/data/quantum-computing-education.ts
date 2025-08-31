import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface QuantumComputingLessonType extends BaseLessonData {
  quantumConcepts: string[];
  practicalApplications: string[];
  programmingTools: string[];
  industryUseCase: string;
  requiredMath: string[];
}

export const quantumComputingLessons: QuantumComputingLessonType[] = [
  {
    id: 'quantum-fundamentals-introduction',
    title: 'Quantum Computing Fundamentals - Giới Thiệu Cơ Bản',
    description: 'Khám phá thế giới quantum computing từ những khái niệm cơ bản nhất. Hiểu được sự khác biệt giữa classical computing và quantum computing.',
    duration: '120 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=JhHMJCUmq28',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop',
    objectives: [
      'Hiểu khái niệm quantum mechanics cơ bản',
      'Phân biệt classical bits và quantum bits (qubits)',
      'Nắm vững quantum superposition và entanglement',
      'Biết được ứng dụng thực tế của quantum computing',
      'Tìm hiểu các công ty leading trong quantum computing'
    ],
    prerequisites: [
      'Toán học cơ bản (đại số tuyến tính)',
      'Hiểu biết về computer science cơ bản',
      'Physics cấp trung học phổ thông'
    ],
    quantumConcepts: [
      'Quantum Superposition',
      'Quantum Entanglement', 
      'Quantum Interference',
      'Qubit States',
      'Quantum Gates'
    ],
    practicalApplications: [
      'Cryptography and Security',
      'Drug Discovery',
      'Financial Modeling',
      'Weather Prediction',
      'Artificial Intelligence'
    ],
    programmingTools: [
      'IBM Qiskit',
      'Google Cirq',
      'Microsoft Q#',
      'Amazon Braket'
    ],
    industryUseCase: 'Google Quantum AI achieving quantum supremacy with Sycamore processor',
    requiredMath: [
      'Linear Algebra',
      'Complex Numbers',
      'Probability Theory',
      'Matrix Operations'
    ],
    exercises: [
      {
        title: 'Quantum Coin Flip Simulation',
        description: 'Tạo quantum coin flip để hiểu superposition',
        difficulty: 'Cơ bản',
        materials: ['IBM Quantum Experience', 'Qiskit Python library'],
        procedure: [
          'Tạo IBM Quantum account',
          'Setup môi trường Qiskit',
          'Viết quantum circuit cho coin flip',
          'Run simulation trên quantum simulator',
          'So sánh kết quả với classical coin flip'
        ],
        expectedResults: 'Hiểu được sự khác biệt giữa quantum và classical randomness',
        solution: `
# Quantum Coin Flip với Qiskit
from qiskit import QuantumCircuit, execute, Aer
from qiskit.visualization import plot_histogram

# Tạo quantum circuit
qc = QuantumCircuit(1, 1)
qc.h(0)  # Hadamard gate tạo superposition
qc.measure(0, 0)

# Run simulation
simulator = Aer.get_backend('qasm_simulator')
result = execute(qc, simulator, shots=1000).result()
counts = result.get_counts()
print(counts)
        `
      }
    ],
    realWorldApplications: [
      'IBM đang phát triển quantum processors cho cloud computing',
      'Google sử dụng quantum computing cho AI research và optimization',
      'Volkswagen test quantum computing cho traffic flow optimization',
      'JPMorgan Chase nghiên cứu quantum computing cho risk analysis',
      'Roche sử dụng quantum simulation cho drug discovery'
    ],
    caseStudies: [
      {
        title: 'Google Quantum Supremacy Achievement',
        organization: 'Google Quantum AI',
        problem: 'Prove quantum computers can solve problems classical computers cannot',
        solution: 'Developed Sycamore 53-qubit processor to perform quantum sampling',
        impact: 'Achieved quantum supremacy by solving a problem in 200 seconds that would take classical supercomputers 10,000 years',
        innovations: [
          'Superconducting quantum processor architecture',
          'Advanced quantum error correction',
          'Quantum supremacy verification protocols'
        ]
      }
    ],
    resources: [
      {
        title: 'IBM Quantum Experience',
        url: 'https://quantum-computing.ibm.com/',
        type: 'Platform'
      },
      {
        title: 'Qiskit Textbook',
        url: 'https://qiskit.org/textbook/',
        type: 'Documentation'
      }
    ]
  },

  {
    id: 'quantum-algorithms-basics',
    title: 'Quantum Algorithms Cơ Bản - Shor & Grover',
    description: 'Học các quantum algorithms nổi tiếng nhất: Shor algorithm cho factoring và Grover algorithm cho database search.',
    duration: '150 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=lvTqbM5Dq4Q',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
    objectives: [
      'Hiểu Shor algorithm và ứng dụng trong cryptography',
      'Master Grover algorithm cho unstructured search',
      'Implement quantum algorithms bằng Qiskit',
      'So sánh performance với classical algorithms',
      'Understand quantum advantage và limitations'
    ],
    prerequisites: [
      'Quantum Computing Fundamentals',
      'Programming experience (Python preferred)',
      'Basic cryptography knowledge'
    ],
    quantumConcepts: [
      'Quantum Fourier Transform',
      'Quantum Phase Estimation',
      'Amplitude Amplification',
      'Quantum Parallelism',
      'Quantum Oracle'
    ],
    practicalApplications: [
      'Breaking RSA encryption',
      'Database search optimization',
      'Optimization problems',
      'Machine learning acceleration',
      'Chemical simulation'
    ],
    programmingTools: [
      'Qiskit',
      'Cirq',
      'PennyLane',
      'Microsoft Q#'
    ],
    industryUseCase: 'NSA preparing for post-quantum cryptography due to Shor algorithm threat',
    requiredMath: [
      'Number Theory',
      'Modular Arithmetic',
      'Discrete Mathematics',
      'Algorithm Complexity'
    ],
    exercises: [
      {
        title: 'Implement Grover Search Algorithm',
        description: 'Code Grover algorithm để search unsorted database',
        difficulty: 'Trung bình',
        materials: ['Qiskit', 'Jupyter Notebook', 'Python 3.7+'],
        procedure: [
          'Setup quantum circuit với n qubits',
          'Initialize uniform superposition',
          'Implement oracle function',
          'Apply diffusion operator',
          'Repeat for optimal iterations',
          'Measure và analyze results'
        ],
        expectedResults: 'Tìm target item với probability ~100% trong O(√N) steps',
        solution: `
# Grover Algorithm Implementation
from qiskit import QuantumCircuit, QuantumRegister, ClassicalRegister
import numpy as np

def grovers_algorithm(n_qubits, target_item):
    # Create quantum circuit
    qreg = QuantumRegister(n_qubits)
    creg = ClassicalRegister(n_qubits)
    qc = QuantumCircuit(qreg, creg)
    
    # Initialize superposition
    qc.h(range(n_qubits))
    
    # Calculate optimal iterations
    N = 2**n_qubits
    iterations = int(np.pi/4 * np.sqrt(N))
    
    for i in range(iterations):
        # Oracle (mark target)
        oracle(qc, qreg, target_item)
        
        # Diffusion operator
        diffusion_operator(qc, qreg)
    
    # Measure
    qc.measure_all()
    return qc
        `
      }
    ],
    realWorldApplications: [
      'Post-quantum cryptography development để protect against Shor algorithm',
      'Optimization của supply chain và logistics problems',
      'Drug discovery acceleration thông qua molecular simulation',
      'Financial portfolio optimization với quantum advantage',
      'Machine learning model training speedup'
    ],
    caseStudies: [
      {
        title: 'D-Wave Quantum Annealing for Volkswagen Traffic Optimization',
        organization: 'Volkswagen & D-Wave Systems',
        problem: 'Optimize traffic flow in major cities to reduce congestion',
        solution: 'Used quantum annealing to solve vehicle routing optimization problems',
        impact: 'Reduced travel time by 20% in Beijing traffic pilot program',
        innovations: [
          'Quantum annealing for combinatorial optimization',
          'Real-time traffic data integration',
          'Hybrid classical-quantum algorithms'
        ]
      }
    ],
    resources: [
      {
        title: 'Quantum Algorithm Zoo',
        url: 'https://quantumalgorithmzoo.org/',
        type: 'Reference'
      },
      {
        title: 'Microsoft Quantum Katas',
        url: 'https://github.com/Microsoft/QuantumKatas',
        type: 'Tutorial'
      }
    ]
  },

  {
    id: 'quantum-programming-qiskit',
    title: 'Quantum Programming với IBM Qiskit',
    description: 'Hands-on programming với IBM Qiskit framework. Từ cơ bản đến advanced quantum circuits và quantum machine learning.',
    duration: '200 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=a1NZC5rqQD8',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
    objectives: [
      'Master Qiskit framework và ecosystem',
      'Build complex quantum circuits',
      'Implement quantum machine learning algorithms',
      'Debug và optimize quantum programs',
      'Deploy quantum applications trên IBM Cloud'
    ],
    prerequisites: [
      'Python programming intermediate level',
      'Quantum algorithms basics',
      'Linear algebra fundamentals'
    ],
    quantumConcepts: [
      'Quantum Circuit Model',
      'Quantum Gates Library',
      'Quantum Error Correction',
      'Noise Models',
      'Quantum Machine Learning'
    ],
    practicalApplications: [
      'Quantum Machine Learning',
      'Quantum Chemistry Simulation',
      'Quantum Finance Applications',
      'Quantum Optimization',
      'Quantum Cryptography'
    ],
    programmingTools: [
      'IBM Qiskit',
      'Qiskit Aqua',
      'Qiskit Machine Learning',
      'Qiskit Chemistry',
      'IBM Quantum Lab'
    ],
    industryUseCase: 'IBM collaborating with pharmaceutical companies for drug discovery using quantum ML',
    requiredMath: [
      'Linear Algebra',
      'Probability Theory',
      'Statistics',
      'Calculus'
    ],
    exercises: [
      {
        title: 'Quantum Machine Learning Classifier',
        description: 'Build quantum classifier cho image recognition',
        difficulty: 'Nâng cao',
        materials: ['Qiskit ML', 'Sklearn', 'Matplotlib', 'Classical dataset'],
        procedure: [
          'Load và preprocess classical data',
          'Design quantum feature map',
          'Implement variational quantum classifier',
          'Train model với classical optimizer',
          'Evaluate performance trên test set',
          'Compare với classical ML methods'
        ],
        expectedResults: 'Quantum classifier với competitive accuracy trên small datasets',
        solution: `
# Quantum Machine Learning Classifier
from qiskit import Aer
from qiskit.algorithms.optimizers import COBYLA
from qiskit.machine_learning.algorithms import VQC
from qiskit.circuit.library import ZFeatureMap, RealAmplitudes

# Create feature map and ansatz
feature_map = ZFeatureMap(feature_dimension=2, reps=2)
ansatz = RealAmplitudes(num_qubits=2, reps=3)

# Setup VQC
vqc = VQC(
    feature_map=feature_map,
    ansatz=ansatz,
    optimizer=COBYLA(maxiter=200),
    quantum_instance=Aer.get_backend('aer_simulator')
)

# Train and evaluate
vqc.fit(X_train, y_train)
score = vqc.score(X_test, y_test)
print(f"Accuracy: {score}")
        `
      }
    ],
    realWorldApplications: [
      'Roche sử dụng quantum simulation cho drug molecule optimization',
      'Goldman Sachs nghiên cứu quantum Monte Carlo cho risk analysis',
      'Toyota research quantum computing cho battery material discovery',
      'NASA investigating quantum algorithms cho space mission planning',
      'CERN exploring quantum computing cho particle physics simulations'
    ],
    caseStudies: [
      {
        title: 'IBM Quantum Network for Enterprise Applications',
        organization: 'IBM Quantum Network',
        problem: 'Enable enterprises to explore quantum advantage for business problems',
        solution: 'Created quantum cloud platform with 180+ member organizations',
        impact: 'Over 300 research papers published, multiple quantum applications in development',
        innovations: [
          'Quantum cloud computing platform',
          'Enterprise quantum development tools',
          'Quantum-classical hybrid algorithms'
        ]
      }
    ],
    resources: [
      {
        title: 'Qiskit Tutorials',
        url: 'https://qiskit.org/documentation/tutorials.html',
        type: 'Tutorial'
      },
      {
        title: 'IBM Quantum Community',
        url: 'https://qiskit.org/advocates/',
        type: 'Community'
      }
    ]
  },

  {
    id: 'quantum-cryptography-security',
    title: 'Quantum Cryptography & Cybersecurity Future',
    description: 'Tìm hiểu quantum cryptography, post-quantum cryptography và tác động lên cybersecurity landscape hiện tại.',
    duration: '140 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=12Q3Mrh03Gk',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    objectives: [
      'Hiểu quantum key distribution (QKD) protocols',
      'Analyze threats từ quantum computers lên current cryptography',
      'Learn post-quantum cryptographic algorithms',
      'Implement quantum cryptography protocols',
      'Plan quantum-safe security strategies'
    ],
    prerequisites: [
      'Basic cryptography knowledge',
      'Understanding của RSA, AES encryption',
      'Quantum computing fundamentals'
    ],
    quantumConcepts: [
      'Quantum Key Distribution',
      'BB84 Protocol',
      'Quantum No-Cloning Theorem',
      'Quantum Entanglement for Communication',
      'Quantum Random Number Generation'
    ],
    practicalApplications: [
      'Secure Banking Communications',
      'Government Classified Information',
      'Healthcare Data Protection',
      'Corporate Trade Secrets',
      'Critical Infrastructure Security'
    ],
    programmingTools: [
      'QuTiP (Quantum Toolbox)',
      'SimulaQron',
      'NetQASM',
      'QKD Simulators'
    ],
    industryUseCase: 'Chinese quantum communication network protecting financial transactions',
    requiredMath: [
      'Information Theory',
      'Probability Theory',
      'Number Theory',
      'Group Theory'
    ],
    exercises: [
      {
        title: 'BB84 Quantum Key Distribution Simulation',
        description: 'Simulate BB84 protocol và detect eavesdropping attempts',
        difficulty: 'Trung bình',
        materials: ['Python', 'NumPy', 'Quantum simulator'],
        procedure: [
          'Setup Alice và Bob quantum channels',
          'Implement BB84 encoding/decoding',
          'Add noise và eavesdropping simulation',
          'Calculate error rates',
          'Determine secure key generation rate',
          'Test security against different attacks'
        ],
        expectedResults: 'Working QKD simulation với eavesdropping detection',
        solution: `
# BB84 Protocol Simulation
import numpy as np
from numpy.random import random, choice

class BB84Protocol:
    def __init__(self):
        self.alice_bits = []
        self.alice_bases = []
        self.bob_bases = []
        self.bob_bits = []
        self.shared_key = []
    
    def alice_prepare(self, n_bits):
        # Alice generates random bits and bases
        self.alice_bits = [choice([0, 1]) for _ in range(n_bits)]
        self.alice_bases = [choice([0, 1]) for _ in range(n_bits)]
        
    def bob_measure(self):
        # Bob chooses random bases
        self.bob_bases = [choice([0, 1]) for _ in range(len(self.alice_bits))]
        
        # Simulate quantum measurement
        for i in range(len(self.alice_bits)):
            if self.alice_bases[i] == self.bob_bases[i]:
                # Same basis - correct measurement
                self.bob_bits.append(self.alice_bits[i])
            else:
                # Different basis - random result
                self.bob_bits.append(choice([0, 1]))
    
    def sift_key(self):
        # Keep bits where bases matched
        for i in range(len(self.alice_bits)):
            if self.alice_bases[i] == self.bob_bases[i]:
                self.shared_key.append(self.alice_bits[i])
        
        return len(self.shared_key)
        `
      }
    ],
    realWorldApplications: [
      'China quantum communication satellite Micius for secure government communications',
      'European Quantum Communication Infrastructure (EuroQCI) project',
      'Banking sector implementing quantum-safe encryption standards',
      'Military communications upgrading to post-quantum cryptography',
      'Healthcare systems protecting patient data với quantum encryption'
    ],
    caseStudies: [
      {
        title: 'Chinese Quantum Communication Network',
        organization: 'Chinese Academy of Sciences',
        problem: 'Create unhackable communication network for national security',
        solution: 'Built 2,000km quantum communication network using QKD and satellite technology',
        impact: 'World\'s first operational quantum communication network protecting government and financial communications',
        innovations: [
          'Satellite-based quantum key distribution',
          'Ground-based quantum fiber networks',
          'Integration with classical communication infrastructure'
        ]
      }
    ],
    resources: [
      {
        title: 'NIST Post-Quantum Cryptography',
        url: 'https://csrc.nist.gov/projects/post-quantum-cryptography',
        type: 'Reference'
      },
      {
        title: 'European Quantum Flagship',
        url: 'https://qt.eu/',
        type: 'Community'
      }
    ]
  },

  {
    id: 'quantum-business-applications',
    title: 'Quantum Computing Business Applications & ROI',
    description: 'Khám phá business applications của quantum computing. Từ financial modeling đến supply chain optimization và competitive advantage.',
    duration: '160 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=wE1OCXvaDtc',
    imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
    objectives: [
      'Identify quantum computing business opportunities',
      'Calculate ROI cho quantum computing investments',
      'Develop quantum strategy cho enterprises',
      'Understand quantum consulting market',
      'Plan quantum workforce development'
    ],
    prerequisites: [
      'Business strategy fundamentals',
      'Basic quantum computing knowledge',
      'Understanding của emerging technologies'
    ],
    quantumConcepts: [
      'Quantum Advantage',
      'NISQ Era Computing',
      'Fault-Tolerant Quantum Computing',
      'Quantum-Classical Hybrid Algorithms',
      'Quantum Software Stack'
    ],
    practicalApplications: [
      'Portfolio Optimization',
      'Risk Analysis and Monte Carlo Simulations',
      'Supply Chain and Logistics Optimization',
      'Drug Discovery and Pharmaceutical R&D',
      'Materials Science and Chemistry Simulation'
    ],
    programmingTools: [
      'IBM Qiskit Runtime',
      'Amazon Braket',
      'Google Quantum Cloud',
      'Microsoft Azure Quantum'
    ],
    industryUseCase: 'JPMorgan Chase quantum computing lab generating millions in trading optimizations',
    requiredMath: [
      'Statistics',
      'Financial Mathematics',
      'Operations Research',
      'Game Theory'
    ],
    exercises: [
      {
        title: 'Quantum ROI Analysis Framework',
        description: 'Create business case analysis cho quantum computing adoption',
        difficulty: 'Trung bình',
        materials: ['Spreadsheet software', 'Business case templates', 'Market research data'],
        procedure: [
          'Identify specific business problem',
          'Research classical vs quantum solutions',
          'Calculate implementation costs',
          'Estimate potential benefits và time savings',
          'Analyze risks và mitigation strategies',
          'Create timeline cho quantum adoption'
        ],
        expectedResults: 'Complete ROI analysis với recommendations',
        solution: `
# Quantum ROI Analysis Template
class QuantumROIAnalysis:
    def __init__(self, use_case, industry):
        self.use_case = use_case
        self.industry = industry
        self.costs = {}
        self.benefits = {}
        self.timeline = {}
    
    def calculate_implementation_costs(self):
        # Hardware/Cloud costs
        self.costs['quantum_access'] = 50000  # Annual cloud access
        self.costs['talent'] = 150000  # Quantum developers
        self.costs['training'] = 25000  # Team training
        self.costs['integration'] = 100000  # System integration
        
        return sum(self.costs.values())
    
    def estimate_benefits(self):
        # Industry-specific benefits
        if self.industry == 'financial':
            self.benefits['optimization'] = 500000  # Trading optimizations
            self.benefits['risk_modeling'] = 200000  # Better risk models
        elif self.industry == 'pharma':
            self.benefits['r_and_d_speed'] = 2000000  # Faster drug discovery
            self.benefits['cost_reduction'] = 800000  # R&D cost savings
            
        return sum(self.benefits.values())
    
    def calculate_roi(self, years=3):
        total_costs = self.calculate_implementation_costs() * years
        total_benefits = self.estimate_benefits() * years
        roi = (total_benefits - total_costs) / total_costs * 100
        
        return {
            'roi_percentage': roi,
            'payback_period': total_costs / (total_benefits / years),
            'net_benefit': total_benefits - total_costs
        }
        `
      }
    ],
    realWorldApplications: [
      'Wells Fargo using quantum algorithms cho fraud detection và risk management',
      'BMW optimizing manufacturing logistics với quantum annealing',
      'Merck accelerating drug discovery với quantum molecular simulations',
      'Barclays developing quantum algorithms cho portfolio optimization',
      'Airbus researching quantum computing cho aircraft design optimization'
    ],
    caseStudies: [
      {
        title: 'Volkswagen Quantum Traffic Optimization',
        organization: 'Volkswagen Group',
        problem: 'Optimize urban traffic flow to reduce congestion and emissions',
        solution: 'Partnered with D-Wave to develop quantum traffic optimization algorithms',
        impact: 'Reduced travel time by 20% in Beijing pilot, potential savings of millions in fuel costs',
        innovations: [
          'Real-time quantum optimization',
          'Integration with existing traffic systems',
          'Scalable quantum-classical hybrid approach'
        ]
      }
    ],
    resources: [
      {
        title: 'McKinsey Quantum Computing Report',
        url: 'https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/quantum-computing',
        type: 'Reference'
      },
      {
        title: 'Boston Consulting Group Quantum Advantage',
        url: 'https://www.bcg.com/publications/2019/quantum-computing-when-will-your-industry-be-disrupted.aspx',
        type: 'Reference'
      }
    ]
  }
];

export default quantumComputingLessons;