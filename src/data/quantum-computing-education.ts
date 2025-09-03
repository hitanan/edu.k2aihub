import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface QuantumComputingLessonType extends BaseLessonData {
  vietnamContext: {
    title: string;
    content: string[];
  };
  careerConnect: {
    name: string;
    title: string;
    company: string;
    imageUrl: string;
    quote: string;
  };
  quizzes: Array<{
    question: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
  }>;
}

export const quantumComputingLessons: QuantumComputingLessonType[] = [
  {
    id: 'quantum-fundamentals-introduction',
    title: 'Giới Thiệu Cơ Bản về Điện toán Lượng tử',
    description:
      'Khám phá thế giới điện toán lượng tử từ những khái niệm cơ bản nhất. Hiểu được sự khác biệt giữa điện toán cổ điển và điện toán lượng tử, và tiềm năng thay đổi thế giới của nó.',
    duration: '120 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=JhHMJCUmq28',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop',
    objectives: [
      'Hiểu các khái niệm cơ học lượng tử nền tảng.',
      'Phân biệt bit cổ điển và bit lượng tử (qubit).',
      'Nắm vững các nguyên lý chồng chập và vướng víu lượng tử.',
      'Khám phá các ứng dụng tiềm năng của điện toán lượng tử.',
      'Nhận biết các công ty hàng đầu trong lĩnh vực này.',
      'Tìm hiểu về các cổng lượng tử và trạng thái qubit.',
    ],
    prerequisites: [
      'Kiến thức toán học cơ bản (đại số tuyến tính).',
      'Hiểu biết về khoa học máy tính cơ bản.',
      'Kiến thức vật lý cấp trung học phổ thông.',
      'Làm quen với số phức và xác suất.',
    ],
    exercises: [
      {
        title: 'Mô phỏng Tung đồng xu Lượng tử',
        description: 'Tạo một mô phỏng tung đồng xu lượng tử để hiểu rõ hơn về nguyên lý chồng chập.',
        difficulty: 'Cơ bản',
        materials: ['Tài khoản IBM Quantum Experience', 'Thư viện Qiskit cho Python'],
        procedure: [
          'Tạo tài khoản trên nền tảng IBM Quantum.',
          'Thiết lập môi trường lập trình với Qiskit.',
          'Viết một mạch lượng tử đơn giản cho việc tung đồng xu.',
          'Chạy mô phỏng trên máy giả lập lượng tử.',
          'Phân tích và so sánh kết quả với việc tung đồng xu cổ điển.',
        ],
        expectedResults: 'Hiểu rõ sự khác biệt cơ bản giữa tính ngẫu nhiên lượng tử và tính ngẫu nhiên cổ điển.',
        solution: `
# Tung đồng xu Lượng tử với Qiskit
from qiskit import QuantumCircuit, execute, Aer
from qiskit.visualization import plot_histogram

# Tạo mạch lượng tử với 1 qubit và 1 bit cổ điển
qc = QuantumCircuit(1, 1)
# Áp dụng cổng Hadamard để tạo trạng thái chồng chập
qc.h(0)
# Đo lường qubit
qc.measure(0, 0)

# Chạy mô phỏng
simulator = Aer.get_backend('qasm_simulator')
result = execute(qc, simulator, shots=1000).result()
counts = result.get_counts()
print("Kết quả mô phỏng:", counts)
# Kết quả sẽ xấp xỉ {'0': 500, '1': 500}
        `,
      },
    ],
    realWorldApplications: [
      'Phát triển thuốc và vật liệu mới.',
      'Tối ưu hóa các vấn đề phức tạp trong tài chính và logistics.',
      'Phá vỡ các hệ thống mã hóa hiện tại và phát triển mật mã lượng tử.',
      'Tăng tốc các thuật toán học máy và trí tuệ nhân tạo.',
      'Dự báo thời tiết và mô hình hóa khí hậu chính xác hơn.',
    ],
    caseStudies: [
      {
        title: 'Thành tựu Ưu thế Lượng tử của Google',
        organization: 'Google Quantum AI',
        problem:
          'Chứng minh rằng máy tính lượng tử có thể giải quyết các vấn đề mà máy tính cổ điển không thể giải quyết một cách hiệu quả.',
        solution: 'Phát triển bộ xử lý Sycamore 53-qubit để thực hiện một tác vụ lấy mẫu lượng tử phức tạp.',
        impact:
          'Đạt được "ưu thế lượng tử" bằng cách giải quyết vấn đề trong 200 giây, một việc mà siêu máy tính cổ điển mạnh nhất sẽ mất khoảng 10,000 năm.',
        innovations: [
          'Kiến trúc bộ xử lý lượng tử siêu dẫn.',
          'Kỹ thuật sửa lỗi lượng tử tiên tiến.',
          'Giao thức xác minh ưu thế lượng tử.',
        ],
      },
    ],
    resources: [
      {
        title: 'IBM Quantum Experience',
        url: 'https://quantum-computing.ibm.com/',
        type: 'Nền tảng',
      },
      {
        title: 'Sách giáo khoa Qiskit',
        url: 'https://qiskit.org/textbook/',
        type: 'Tài liệu',
      },
      { title: 'Google Cirq', url: 'https://quantumai.google/cirq', type: 'Công cụ' },
      {
        title: 'Microsoft Q#',
        url: 'https://docs.microsoft.com/en-us/azure/quantum/overview-what-is-qsharp-and-qdk',
        type: 'Công cụ',
      },
    ],
    vietnamContext: {
      title: 'Điện toán Lượng tử tại Việt Nam',
      content: [
        'Việt Nam đang bắt đầu những bước đi đầu tiên trong lĩnh vực điện toán lượng tử, với các nhóm nghiên cứu tại các trường đại học lớn như Đại học Quốc gia Hà Nội và TP.HCM. FPT Software cũng đã thành lập trung tâm nghiên cứu lượng tử, cho thấy sự quan tâm từ khối doanh nghiệp.',
        'Thách thức lớn nhất là thiếu hụt nhân lực chất lượng cao và cơ sở hạ tầng. Tuy nhiên, với sự phát triển của điện toán lượng tử trên nền tảng đám mây, các nhà nghiên cứu Việt Nam có thể tiếp cận công nghệ này mà không cần đầu tư lớn ban đầu.',
      ],
    },
    careerConnect: {
      name: 'GS. Nguyễn Mạnh Hà',
      title: 'Nhà nghiên cứu Vật lý Lượng tử',
      company: 'Viện Khoa học và Công nghệ Tiên tiến (giả tưởng)',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Điện toán lượng tử không chỉ là một cuộc cách mạng công nghệ, mà còn là một cuộc cách mạng trong tư duy. Nó mở ra những cánh cửa mà chúng ta chưa từng tưởng tượng được, thách thức những giới hạn của tri thức nhân loại.',
    },
    quizzes: [
      {
        question: 'Qubit khác gì so với bit cổ điển?',
        options: [
          'Qubit có thể lưu trữ nhiều giá trị hơn.',
          'Qubit có thể ở trạng thái 0, 1, hoặc cả hai cùng lúc (chồng chập).',
          'Qubit nhanh hơn bit cổ điển.',
          'Qubit được làm từ vật liệu khác.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Đặc tính chồng chập (superposition) cho phép qubit tồn tại ở nhiều trạng thái cùng một lúc, không giống như bit cổ điển chỉ có thể là 0 hoặc 1. Đây là nền tảng cho sức mạnh tính toán của máy tính lượng tử.',
      },
      {
        question: 'Hiện tượng "vướng víu lượng tử" (quantum entanglement) mô tả điều gì?',
        options: [
          'Hai qubit bị dính vào nhau về mặt vật lý.',
          'Trạng thái của hai qubit liên kết tức thời với nhau, bất kể khoảng cách.',
          'Một qubit có thể ảnh hưởng đến qubit khác qua sóng vô tuyến.',
          'Qubit có thể tự thay đổi trạng thái một cách ngẫu nhiên.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Vướng víu là một trong những hiện tượng kỳ lạ nhất của cơ học lượng tử, nơi các hạt liên kết với nhau một cách sâu sắc. Khi đo một hạt, trạng thái của hạt kia được xác định ngay lập tức, dù chúng ở cách xa nhau đến đâu.',
      },
    ],
  },

  {
    id: 'quantum-algorithms-basics',
    title: 'Các Thuật toán Lượng tử Cơ bản: Shor & Grover',
    description:
      'Học về các thuật toán lượng tử nổi tiếng nhất: thuật toán Shor dùng để phân tích thừa số và thuật toán Grover dùng để tìm kiếm.',
    duration: '150 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=lvTqbM5Dq4Q',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
    objectives: [
      'Hiểu thuật toán Shor và ứng dụng trong việc phá vỡ mã hóa.',
      'Nắm vững thuật toán Grover cho tìm kiếm không có cấu trúc.',
      'Triển khai các thuật toán lượng tử cơ bản bằng Qiskit.',
      'So sánh hiệu suất với các thuật toán cổ điển.',
      'Hiểu về ưu thế lượng tử và các giới hạn của nó.',
    ],
    prerequisites: [
      'Đã học bài "Giới Thiệu Cơ Bản về Điện toán Lượng tử".',
      'Kinh nghiệm lập trình (ưu tiên Python).',
      'Kiến thức cơ bản về mật mã học.',
      'Kiến thức về lý thuyết số và độ phức tạp thuật toán.',
    ],
    exercises: [
      {
        title: 'Triển khai Thuật toán Tìm kiếm Grover',
        description: 'Lập trình thuật toán Grover để tìm kiếm một mục trong cơ sở dữ liệu chưa được sắp xếp.',
        difficulty: 'Trung bình',
        materials: ['Qiskit', 'Jupyter Notebook', 'Python 3.7+'],
        procedure: [
          'Thiết lập một mạch lượng tử với n qubit.',
          'Khởi tạo trạng thái chồng chập đồng đều.',
          'Triển khai hàm oracle để "đánh dấu" mục tiêu cần tìm.',
          'Áp dụng toán tử khuếch tán (diffusion operator).',
          'Lặp lại các bước trên với số lần tối ưu.',
          'Đo lường và phân tích kết quả.',
        ],
        expectedResults: 'Tìm thấy mục tiêu với xác suất gần 100% trong khoảng O(√N) bước.',
        solution: `
# Triển khai Thuật toán Grover
from qiskit import QuantumCircuit, Aer, execute
import numpy as np

def grover_oracle(circuit, target):
    # Hàm oracle để đánh dấu trạng thái mục tiêu
    # Ví dụ đơn giản cho mục tiêu là '11'
    if target == '11':
        circuit.cz(0, 1) # Cổng Z có điều kiện

def diffusion_operator(circuit, n_qubits):
    # Toán tử khuếch tán
    circuit.h(range(n_qubits))
    circuit.x(range(n_qubits))
    circuit.h(n_qubits-1)
    circuit.mct(list(range(n_qubits-1)), n_qubits-1)
    circuit.h(n_qubits-1)
    circuit.x(range(n_qubits))
    circuit.h(range(n_qubits))

# ... (phần code chính để chạy thuật toán)
        `,
      },
    ],
    realWorldApplications: [
      'Phát triển mật mã hậu lượng tử để chống lại thuật toán Shor.',
      'Tối ưu hóa chuỗi cung ứng và các bài toán logistics.',
      'Tăng tốc khám phá thuốc thông qua mô phỏng phân tử.',
      'Tối ưu hóa danh mục đầu tư tài chính.',
      'Tăng tốc độ huấn luyện các mô hình học máy.',
    ],
    caseStudies: [
      {
        title: 'D-Wave và Volkswagen: Tối ưu hóa Giao thông',
        organization: 'Volkswagen & D-Wave Systems',
        problem: 'Tối ưu hóa luồng giao thông ở các thành phố lớn để giảm tắc nghẽn.',
        solution:
          'Sử dụng máy tính lượng tử dạng ủ (quantum annealing) để giải quyết các bài toán tối ưu hóa định tuyến xe.',
        impact: 'Giảm 20% thời gian di chuyển trong một chương trình thử nghiệm tại Bắc Kinh.',
        innovations: [
          'Sử dụng quantum annealing cho tối ưu hóa tổ hợp.',
          'Tích hợp dữ liệu giao thông thời gian thực.',
          'Thuật toán lai cổ điển-lượng tử.',
        ],
      },
    ],
    resources: [
      {
        title: 'Sở thú Thuật toán Lượng tử',
        url: 'https://quantumalgorithmzoo.org/',
        type: 'Tham khảo',
      },
      {
        title: 'Microsoft Quantum Katas',
        url: 'https://github.com/Microsoft/QuantumKatas',
        type: 'Hướng dẫn',
      },
    ],
    vietnamContext: {
      title: 'An Ninh Mạng Lượng Tử tại Việt Nam',
      content: [
        'Với sự phát triển của kinh tế số, Việt Nam đối mặt với nguy cơ bị tấn công bởi máy tính lượng tử trong tương lai. Các cơ quan chính phủ như Ban Cơ yếu Chính phủ đang nghiên cứu và chuẩn bị cho kỷ nguyên mật mã hậu lượng tử (post-quantum cryptography).',
        'Các doanh nghiệp lớn trong lĩnh vực an ninh mạng như Viettel Cyber Security, Bkav cũng đang xây dựng năng lực để tư vấn và triển khai các giải pháp an toàn lượng tử cho khách hàng.',
      ],
    },
    careerConnect: {
      name: 'TS. Trần Văn An',
      title: 'Chuyên gia An ninh mạng Lượng tử',
      company: 'Tập đoàn Công nghệ Quốc phòng (giả tưởng)',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Cuộc chạy đua giữa mã hóa và giải mã đang bước vào một chương mới với điện toán lượng tử. Nhiệm vụ của chúng tôi là đảm bảo Việt Nam luôn đi trước một bước, bảo vệ an toàn cho không gian mạng quốc gia.',
    },
    quizzes: [
      {
        question: 'Thuật toán Shor được dùng để giải quyết vấn đề gì?',
        options: [
          'Tìm kiếm trong cơ sở dữ liệu.',
          'Phân tích một số nguyên thành các thừa số nguyên tố.',
          'Mô phỏng phân tử.',
          'Tối ưu hóa chuỗi cung ứng.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Thuật toán Shor có khả năng phân tích số nguyên thành thừa số một cách hiệu quả, đe dọa trực tiếp đến các hệ thống mã hóa khóa công khai như RSA, vốn dựa trên sự khó khăn của bài toán này.',
      },
      {
        question:
          'Thuật toán Grover mang lại lợi thế tốc độ nào so với thuật toán cổ điển tốt nhất cho tìm kiếm không cấu trúc?',
        options: [
          'Tốc độ tìm kiếm tuyến tính O(N)',
          'Tốc độ tìm kiếm logarit O(log N)',
          'Tốc độ tìm kiếm căn bậc hai O(√N)',
          'Tốc độ tìm kiếm hằng số O(1)',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Thuật toán Grover có thể tìm kiếm một mục trong cơ sở dữ liệu chưa được sắp xếp với độ phức tạp thời gian là O(√N), nhanh hơn đáng kể so với O(N) của thuật toán cổ điển tốt nhất.',
      },
    ],
  },

  {
    id: 'quantum-programming-qiskit',
    title: 'Lập trình Lượng tử với IBM Qiskit',
    description:
      'Thực hành lập trình thực tế với framework IBM Qiskit. Từ việc xây dựng các mạch lượng tử phức tạp đến học máy lượng tử.',
    duration: '200 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=a1NZC5rqQD8',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
    objectives: [
      'Làm chủ framework Qiskit và hệ sinh thái của nó.',
      'Xây dựng các mạch lượng tử phức tạp.',
      'Triển khai các thuật toán học máy lượng tử.',
      'Gỡ lỗi và tối ưu hóa các chương trình lượng tử.',
      'Triển khai ứng dụng lượng tử trên IBM Cloud.',
    ],
    prerequisites: [
      'Kinh nghiệm lập trình Python ở mức trung bình.',
      'Kiến thức cơ bản về các thuật toán lượng tử.',
      'Nền tảng về đại số tuyến tính.',
      'Kiến thức về xác suất và thống kê.',
    ],
    exercises: [
      {
        title: 'Bộ phân loại Học máy Lượng tử',
        description: 'Xây dựng một bộ phân loại lượng tử để nhận dạng hình ảnh.',
        difficulty: 'Nâng cao',
        materials: ['Qiskit ML', 'Scikit-learn', 'Matplotlib', 'Bộ dữ liệu cổ điển'],
        procedure: [
          'Tải và tiền xử lý dữ liệu cổ điển.',
          'Thiết kế một bản đồ đặc trưng lượng tử (quantum feature map).',
          'Triển khai một bộ phân loại lượng tử biến phân (variational quantum classifier).',
          'Huấn luyện mô hình với một trình tối ưu hóa cổ điển.',
          'Đánh giá hiệu suất trên tập dữ liệu thử nghiệm.',
          'So sánh kết quả với các phương pháp học máy cổ điển.',
        ],
        expectedResults: 'Một bộ phân loại lượng tử có độ chính xác cạnh tranh trên các bộ dữ liệu nhỏ.',
        solution: `
# Bộ phân loại Học máy Lượng tử
from qiskit import Aer
from qiskit.utils import QuantumInstance
from qiskit.algorithms.optimizers import COBYLA
from qiskit.circuit.library import ZFeatureMap, RealAmplitudes
from qiskit_machine_learning.algorithms.classifiers import VQC

# Tạo bản đồ đặc trưng và ansatz
feature_map = ZFeatureMap(feature_dimension=2, reps=2)
ansatz = RealAmplitudes(num_qubits=2, reps=3)

# Thiết lập VQC
vqc = VQC(
    feature_map=feature_map,
    ansatz=ansatz,
    optimizer=COBYLA(maxiter=100),
    quantum_instance=QuantumInstance(Aer.get_backend('aer_simulator'), shots=1024)
)

# Huấn luyện và đánh giá (giả sử X_train, y_train, X_test, y_test đã có)
# vqc.fit(X_train, y_train)
# score = vqc.score(X_test, y_test)
# print(\`Độ chính xác: \${score}\`)
        `,
      },
    ],
    realWorldApplications: [
      'Mô phỏng hóa học lượng tử để khám phá thuốc.',
      'Tối ưu hóa tài chính và quản lý rủi ro.',
      'Phát triển vật liệu mới với các đặc tính mong muốn.',
      'Lập kế hoạch và tối ưu hóa logistics.',
      'Cải thiện các mô hình trí tuệ nhân tạo.',
    ],
    caseStudies: [
      {
        title: 'Mạng lưới Lượng tử IBM cho Ứng dụng Doanh nghiệp',
        organization: 'IBM Quantum Network',
        problem: 'Cho phép các doanh nghiệp khám phá lợi thế lượng tử cho các vấn đề kinh doanh của họ.',
        solution: 'Tạo ra một nền tảng đám mây lượng tử với hơn 180 tổ chức thành viên.',
        impact: 'Hơn 300 bài báo nghiên cứu đã được xuất bản, nhiều ứng dụng lượng tử đang được phát triển.',
        innovations: [
          'Nền tảng điện toán lượng tử đám mây.',
          'Công cụ phát triển lượng tử cho doanh nghiệp.',
          'Thuật toán lai lượng tử-cổ điển.',
        ],
      },
    ],
    resources: [
      {
        title: 'Hướng dẫn sử dụng Qiskit',
        url: 'https://qiskit.org/documentation/tutorials.html',
        type: 'Hướng dẫn',
      },
      {
        title: 'Cộng đồng IBM Quantum',
        url: 'https://qiskit.org/advocates/',
        type: 'Cộng đồng',
      },
    ],
    vietnamContext: {
      title: 'Cộng đồng Lập trình Lượng tử tại Việt Nam',
      content: [
        'Cộng đồng Qiskit và lập trình lượng tử ở Việt Nam đang dần hình thành, chủ yếu tập trung ở các thành phố lớn. Các buổi gặp mặt, hội thảo trực tuyến và trực tiếp được tổ chức để chia sẻ kiến thức và kinh nghiệm sử dụng các framework như Qiskit.',
        'Các trường đại học đang tích hợp lập trình lượng tử vào chương trình giảng dạy, tạo cơ hội cho sinh viên tiếp cận sớm với công nghệ này. Các cuộc thi hackathon về lượng tử cũng bắt đầu xuất hiện, thúc đẩy sự sáng tạo trong cộng đồng.',
      ],
    },
    careerConnect: {
      name: 'TS. Lê Quang Huy',
      title: 'Nhà phát triển Phần mềm Lượng tử',
      company: 'FPT Software (giả tưởng)',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Viết mã cho máy tính lượng tử giống như học một ngôn ngữ mới để nói chuyện với vũ trụ. Mỗi dòng lệnh là một bước khám phá những quy luật cơ bản của tự nhiên, mở ra những khả năng vô tận.',
    },
    quizzes: [
      {
        question: 'Qiskit là một framework được phát triển bởi công ty nào?',
        options: ['Google', 'Microsoft', 'IBM', 'Amazon'],
        correctAnswerIndex: 2,
        explanation:
          'Qiskit là một bộ công cụ phần mềm mã nguồn mở cho máy tính lượng tử được phát triển và cung cấp bởi IBM, cho phép người dùng lập trình và chạy các thuật toán trên các thiết bị lượng tử thực hoặc giả lập.',
      },
      {
        question: '`Variational Quantum Classifier` (VQC) trong Qiskit được dùng để làm gì?',
        options: [
          'Tối ưu hóa mạch lượng tử.',
          'Thực hiện các tác vụ học máy như phân loại.',
          'Mô phỏng các hệ thống hóa học.',
          'Tạo số ngẫu nhiên lượng tử.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'VQC là một thuật toán lai lượng tử-cổ điển được sử dụng cho các bài toán phân loại trong học máy, tận dụng sức mạnh của máy tính lượng tử để xử lý các không gian đặc trưng phức tạp.',
      },
    ],
  },

  {
    id: 'quantum-cryptography-security',
    title: 'Mật mã Lượng tử & Tương lai An ninh mạng',
    description:
      'Tìm hiểu về mật mã lượng tử, mật mã hậu lượng tử và tác động của chúng lên bối cảnh an ninh mạng hiện tại.',
    duration: '140 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=12Q3Mrh03Gk',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    objectives: [
      'Hiểu các giao thức phân phối khóa lượng tử (QKD).',
      'Phân tích các mối đe dọa từ máy tính lượng tử đối với mật mã hiện tại.',
      'Tìm hiểu về các thuật toán mật mã hậu lượng tử.',
      'Triển khai các giao thức mật mã lượng tử cơ bản.',
      'Lập kế hoạch chiến lược an ninh an toàn lượng tử.',
    ],
    prerequisites: [
      'Kiến thức cơ bản về mật mã học.',
      'Hiểu biết về mã hóa RSA, AES.',
      'Nền tảng về điện toán lượng tử.',
      'Kiến thức về lý thuyết thông tin.',
    ],
    exercises: [
      {
        title: 'Mô phỏng Phân phối Khóa Lượng tử BB84',
        description: 'Mô phỏng giao thức BB84 và phát hiện các nỗ lực nghe lén.',
        difficulty: 'Trung bình',
        materials: ['Python', 'NumPy', 'Trình giả lập lượng tử'],
        procedure: [
          'Thiết lập các kênh lượng tử cho Alice và Bob.',
          'Triển khai mã hóa/giải mã theo giao thức BB84.',
          'Thêm mô phỏng nhiễu và nghe lén (eavesdropping).',
          'Tính toán tỷ lệ lỗi.',
          'Xác định tỷ lệ tạo khóa an toàn.',
          'Kiểm tra tính bảo mật trước các cuộc tấn công khác nhau.',
        ],
        expectedResults: 'Một mô phỏng QKD hoạt động với khả năng phát hiện nghe lén.',
        solution: `
# Mô phỏng Giao thức BB84
import numpy as np

def bb84_simulation(num_bits, eavesdropper=False):
    # Alice tạo bit và cơ sở ngẫu nhiên
    alice_bits = np.random.randint(2, size=num_bits)
    alice_bases = np.random.randint(2, size=num_bits)
    
    # Bob chọn cơ sở ngẫu nhiên
    bob_bases = np.random.randint(2, size=num_bits)
    
    # Eve (kẻ nghe lén) nếu có
    if eavesdropper:
        eve_bases = np.random.randint(2, size=num_bits)
        # Eve đo và gửi lại, có thể gây lỗi
        # ... (logic nghe lén)

    # Bob đo lường
    bob_results = []
    for i in range(num_bits):
        if alice_bases[i] == bob_bases[i]:
            bob_results.append(alice_bits[i])
        else:
            bob_results.append(np.random.randint(2))
            
    # So sánh cơ sở và tạo khóa
    shared_key_alice = []
    shared_key_bob = []
    for i in range(num_bits):
        if alice_bases[i] == bob_bases[i]:
            shared_key_alice.append(alice_bits[i])
            shared_key_bob.append(bob_results[i])
            
    # ... (kiểm tra lỗi để phát hiện nghe lén)
    return shared_key_alice, shared_key_bob
        `,
      },
    ],
    realWorldApplications: [
      'Mạng truyền thông lượng tử an toàn cho chính phủ và quân đội.',
      'Bảo vệ các giao dịch tài chính và ngân hàng.',
      'Đảm bảo an toàn dữ liệu y tế và thông tin cá nhân nhạy cảm.',
      'Bảo vệ bí mật thương mại và sở hữu trí tuệ của doanh nghiệp.',
      'An ninh cho cơ sở hạ tầng quan trọng (lưới điện, giao thông).',
    ],
    caseStudies: [
      {
        title: 'Mạng Truyền thông Lượng tử của Trung Quốc',
        organization: 'Viện Hàn lâm Khoa học Trung Quốc',
        problem: 'Tạo ra một mạng lưới truyền thông không thể bị hack cho an ninh quốc gia.',
        solution: 'Xây dựng mạng truyền thông lượng tử dài 2,000km sử dụng QKD và công nghệ vệ tinh.',
        impact:
          'Mạng truyền thông lượng tử hoạt động đầu tiên trên thế giới, bảo vệ các giao dịch tài chính và thông tin chính phủ.',
        innovations: [
          'Phân phối khóa lượng tử qua vệ tinh.',
          'Mạng cáp quang lượng tử trên mặt đất.',
          'Tích hợp với cơ sở hạ tầng truyền thông cổ điển.',
        ],
      },
    ],
    resources: [
      {
        title: 'Mật mã Hậu Lượng tử của NIST',
        url: 'https://csrc.nist.gov/projects/post-quantum-cryptography',
        type: 'Tham khảo',
      },
      {
        title: 'Cờ hiệu Lượng tử Châu Âu (European Quantum Flagship)',
        url: 'https://qt.eu/',
        type: 'Cộng đồng',
      },
    ],
    vietnamContext: {
      title: 'Mật mã Lượng tử và An ninh Quốc gia Việt Nam',
      content: [
        'Việt Nam, với vị thế chiến lược và nền kinh tế số đang phát triển, rất coi trọng việc bảo mật thông tin liên lạc. Các cơ quan chính phủ và quân đội đang nghiên cứu ứng dụng của Mật mã Phân phối Khóa Lượng tử (QKD) để bảo vệ dữ liệu nhạy cảm.',
        'Thách thức lớn nhất là chi phí triển khai và sự cần thiết của hạ tầng chuyên dụng. Tuy nhiên, việc xây dựng các "liên kết an toàn" cho các trung tâm dữ liệu quan trọng là một mục tiêu khả thi trong tương lai gần.',
      ],
    },
    careerConnect: {
      name: 'Thiếu tá Đặng Anh Tuấn',
      title: 'Nghiên cứu viên, Viện Khoa học và Công nghệ Quân sự',
      company: 'Bộ Quốc phòng (giả tưởng)',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Trong chiến tranh thông tin, ai nắm giữ chìa khóa an toàn nhất sẽ chiến thắng. Mật mã lượng tử chính là chìa khóa của tương lai, đảm bảo chủ quyền số của quốc gia.',
    },
    quizzes: [
      {
        question: 'Giao thức BB84 được sử dụng để làm gì?',
        options: [
          'Phá vỡ mã hóa RSA.',
          'Phân phối một khóa mã hóa an toàn bằng các nguyên tắc lượng tử.',
          'Tăng tốc độ tìm kiếm trong cơ sở dữ liệu.',
          'Mô phỏng các phản ứng hóa học.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'BB84 là một trong những giao thức phân phối khóa lượng tử (QKD) đầu tiên, cho phép hai bên (thường gọi là Alice và Bob) tạo ra một khóa bí mật chung một cách an toàn, mà bất kỳ hành vi nghe lén nào cũng sẽ bị phát hiện.',
      },
      {
        question: 'Nguyên lý nào của vật lý lượng tử đảm bảo an toàn cho QKD?',
        options: [
          'Nguyên lý bất định Heisenberg.',
          'Định lý không nhân bản (No-Cloning Theorem).',
          'Hiệu ứng quang điện.',
          'Lưỡng tính sóng-hạt.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Định lý không nhân bản phát biểu rằng không thể tạo ra một bản sao hoàn hảo của một trạng thái lượng tử chưa biết. Điều này có nghĩa là bất kỳ hành động nghe lén nào (đo lường trạng thái qubit) cũng sẽ làm thay đổi trạng thái đó và bị phát hiện.',
      },
    ],
  },

  {
    id: 'quantum-business-applications',
    title: 'Ứng dụng Kinh doanh của Điện toán Lượng tử & ROI',
    description:
      'Khám phá các ứng dụng kinh doanh của điện toán lượng tử. Từ mô hình hóa tài chính đến tối ưu hóa chuỗi cung ứng và lợi thế cạnh tranh.',
    duration: '160 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=wE1OCXvaDtc',
    imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
    objectives: [
      'Xác định các cơ hội kinh doanh từ điện toán lượng tử.',
      'Tính toán lợi tức đầu tư (ROI) cho các dự án lượng tử.',
      'Phát triển chiến lược lượng tử cho doanh nghiệp.',
      'Hiểu về thị trường tư vấn lượng tử.',
      'Lập kế hoạch phát triển nguồn nhân lực lượng tử.',
    ],
    prerequisites: [
      'Kiến thức cơ bản về chiến lược kinh doanh.',
      'Hiểu biết cơ bản về điện toán lượng tử.',
      'Hiểu biết về các công nghệ mới nổi.',
      'Kiến thức về tài chính và vận hành.',
    ],
    exercises: [
      {
        title: 'Khung Phân tích ROI Lượng tử',
        description: 'Tạo một phân tích trường hợp kinh doanh cho việc áp dụng điện toán lượng tử.',
        difficulty: 'Trung bình',
        materials: ['Phần mềm bảng tính', 'Mẫu phân tích kinh doanh', 'Dữ liệu nghiên cứu thị trường'],
        procedure: [
          'Xác định một vấn đề kinh doanh cụ thể.',
          'Nghiên cứu các giải pháp cổ điển so với lượng tử.',
          'Tính toán chi phí triển khai.',
          'Ước tính lợi ích tiềm năng và thời gian tiết kiệm được.',
          'Phân tích rủi ro và các chiến lược giảm thiểu.',
          'Tạo một lộ trình cho việc áp dụng công nghệ lượng tử.',
        ],
        expectedResults: 'Một bản phân tích ROI hoàn chỉnh với các khuyến nghị cụ thể.',
        solution: `
# Mẫu Phân tích ROI Lượng tử
def analyze_quantum_roi(industry, use_case):
    # Chi phí (giả định)
    cloud_access_cost = 50000  # Chi phí truy cập đám mây hàng năm
    talent_cost = 200000      # Lương cho kỹ sư lượng tử
    training_cost = 30000     # Đào tạo đội ngũ
    total_cost_per_year = cloud_access_cost + talent_cost + training_cost

    # Lợi ích (giả định)
    benefits_per_year = 0
    if industry == 'finance' and use_case == 'portfolio_optimization':
        benefits_per_year = 1000000 # Lợi nhuận từ tối ưu hóa danh mục
    elif industry == 'pharma' and use_case == 'drug_discovery':
        benefits_per_year = 5000000 # Tiết kiệm chi phí R&D

    # Tính toán ROI
    net_benefit_per_year = benefits_per_year - total_cost_per_year
    roi = (net_benefit_per_year / total_cost_per_year) * 100
    
    print(\`Phân tích cho ngành \${industry}, trường hợp \${use_case}:\`)
    print(\`  Tổng chi phí/năm: \${total_cost_per_year.toLocaleString()}\`)
    print(\`  Tổng lợi ích/năm: \${benefits_per_year.toLocaleString()}\`)
    print(\`  ROI hàng năm: \${roi.toFixed(2)}%\`)
        `,
      },
    ],
    realWorldApplications: [
      'Tối ưu hóa danh mục đầu tư trong ngành tài chính.',
      'Phân tích rủi ro và mô phỏng Monte Carlo.',
      'Tối ưu hóa chuỗi cung ứng và logistics.',
      'Khám phá thuốc và nghiên cứu dược phẩm.',
      'Khoa học vật liệu và mô phỏng hóa học.',
    ],
    caseStudies: [
      {
        title: 'JPMorgan Chase và Tối ưu hóa Giao dịch',
        organization: 'JPMorgan Chase',
        problem:
          'Tối ưu hóa các chiến lược giao dịch phức tạp và quản lý danh mục đầu tư, vốn đòi hỏi tính toán rất lớn.',
        solution:
          'JPMorgan Chase có một phòng thí nghiệm điện toán lượng tử chuyên dụng đã chứng minh các thuật toán lượng tử có khả năng tạo ra hàng triệu đô la lợi nhuận từ việc tối ưu hóa giao dịch.',
        impact:
          'Điều này cho thấy một lợi tức đầu tư tài chính hữu hình vào điện toán lượng tử, ngay cả trong kỷ nguyên NISQ hiện tại.',
        innovations: ['Thuật toán lượng tử cho tài chính', 'Mô hình hóa tài chính lai lượng tử-cổ điển'],
      },
    ],
    resources: [
      {
        title: 'Báo cáo về Điện toán Lượng tử của McKinsey',
        url: 'https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/quantum-computing',
        type: 'Tham khảo',
      },
      {
        title: 'Lợi thế Lượng tử của Boston Consulting Group',
        url: 'https://www.bcg.com/publications/2019/quantum-computing-when-will-your-industry-be-disrupted.aspx',
        type: 'Tham khảo',
      },
    ],
    vietnamContext: {
      title: 'Ứng dụng Lượng tử cho Doanh nghiệp Việt',
      content: [
        'Các tập đoàn lớn của Việt Nam như Vingroup, FPT, Viettel đang khám phá tiềm năng của điện toán lượng tử trong các lĩnh vực như tối ưu hóa logistics, R&D vật liệu mới (VinFast), và dịch vụ tài chính (Techcombank).',
        'Thách thức chính là việc chuyển đổi từ nghiên cứu sang ứng dụng thực tế có ROI. Các công ty tư vấn chiến lược tại Việt Nam cũng bắt đầu cung cấp dịch vụ "sẵn sàng lượng tử" (quantum readiness) để giúp doanh nghiệp chuẩn bị cho làn sóng công nghệ này.',
      ],
    },
    careerConnect: {
      name: 'TS. Phạm Hoàng Linh',
      title: 'Giám đốc Chuyển đổi số & Công nghệ Tương lai',
      company: 'Tập đoàn Vingroup (giả tưởng)',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Lợi thế cạnh tranh trong tương lai không đến từ việc áp dụng công nghệ mới, mà đến từ việc xây dựng chiến lược để làm chủ nó. Lượng tử là một phần quan trọng trong chiến lược đó, và chúng tôi đang chuẩn bị cho nó ngay từ bây giờ.',
    },
    quizzes: [
      {
        question: 'NISQ là viết tắt của thuật ngữ gì trong điện toán lượng tử?',
        options: [
          'New Integrated Superconducting Qubits',
          'Noisy Intermediate-Scale Quantum',
          'Networked Information & Security Qubits',
          'National Institute of Super-Computing Quality',
        ],
        correctAnswerIndex: 1,
        explanation:
          'NISQ (Noisy Intermediate-Scale Quantum) mô tả thế hệ máy tính lượng tử hiện tại, có số lượng qubit ở mức trung bình và còn bị ảnh hưởng bởi nhiễu, chưa đạt đến mức độ hoàn hảo để sửa lỗi hoàn toàn.',
      },
      {
        question: 'Một trong những ứng dụng kinh doanh hứa hẹn nhất của điện toán lượng tử là gì?',
        options: [
          'Gửi email nhanh hơn.',
          'Tối ưu hóa các bài toán phức tạp (ví dụ: logistics, tài chính).',
          'Chạy các trang web.',
          'Lưu trữ dữ liệu lớn.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Sức mạnh của máy tính lượng tử nằm ở khả năng giải quyết các bài toán tối ưu hóa và mô phỏng phức tạp mà máy tính cổ điển không thể xử lý hiệu quả, mang lại lợi thế cạnh tranh lớn cho doanh nghiệp.',
      },
    ],
  },
];
