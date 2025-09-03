import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface QuantumComputingLesson extends BaseLessonData {
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

export const quantumComputingLessons: QuantumComputingLesson[] = [
  {
    id: 'quantum-fundamentals',
    title: 'Cơ bản về Điện toán Lượng tử',
    description:
      'Khám phá thế giới kỳ diệu của máy tính lượng tử, từ các nguyên lý vật lý cơ bản đến tiềm năng ứng dụng.',
    duration: '150 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=pZnt0qSYTHM',
    imageUrl: 'https://i.ytimg.com/vi/pZnt0qSYTHM/hqdefault.jpg',
    objectives: [
      'Hiểu các nguyên lý vật lý lượng tử cơ bản',
      'Nắm vững khái niệm qubit và chồng chập (superposition)',
      'Phân biệt điện toán lượng tử với điện toán cổ điển',
      'Tìm hiểu về các cổng lượng tử và mạch lượng tử',
      'Khám phá các khái niệm: Chồng chập, Vướng víu, Giao thoa lượng tử, Mất đồng bộ, Đo lường lượng tử',
    ],
    prerequisites: ['Toán học cơ bản: đại số tuyến tính', 'Vật lý đại cương', 'Hiểu biết về máy tính cổ điển'],
    exercises: [
      {
        title: 'Mô phỏng Mạch Lượng tử với Qiskit',
        description: 'Xây dựng và mô phỏng một mạch lượng tử đơn giản với IBM Qiskit để hiểu các khái niệm cơ bản.',
        difficulty: 'Cơ bản',
        materials: ['Python', 'Qiskit', 'Jupyter Notebook', 'Tài khoản IBM Quantum Experience'],
        procedure: [
          'Cài đặt Qiskit: pip install qiskit qiskit-aer matplotlib',
          'Tạo một mạch lượng tử với 2 qubit',
          'Áp dụng cổng Hadamard để tạo trạng thái chồng chập',
          'Áp dụng cổng CNOT để tạo trạng thái vướng víu',
          'Thêm các phép đo lường',
          'Chạy mô phỏng trên trình giả lập cục bộ',
          'Trực quan hóa kết quả bằng biểu đồ histogram',
        ],
        expectedResults: 'Hiểu được cách các trạng thái lượng tử hoạt động và cách tạo ra sự vướng víu.',
        solution:
          '# Mạch Lượng tử cơ bản\nfrom qiskit import QuantumCircuit, Aer, execute\nfrom qiskit.visualization import plot_histogram\nimport matplotlib.pyplot as plt\n\n# Tạo mạch lượng tử\nqc = QuantumCircuit(2, 2)\n\n# Áp dụng cổng Hadamard\nqc.h(0)\n\n# Tạo vướng víu với CNOT\nqc.cx(0, 1)\n\n# Đo lường\nqc.measure_all()\n\n# Mô phỏng\nsimulator = Aer.get_backend("qasm_simulator")\njob = execute(qc, simulator, shots=1024)\nresult = job.result()\ncounts = result.get_counts(qc)\n\n# Trực quan hóa\nprint("Kết quả đo lường:", counts)\nplot_histogram(counts)\nplt.show()',
      },
    ],
    realWorldApplications: [
      'Mã hóa lượng tử cho bảo mật tuyệt đối',
      'Tối ưu hóa logistics và chuỗi cung ứng',
      'Khám phá thuốc và mô hình hóa phân tử',
      'Tăng tốc học máy (Machine Learning)',
      'Dự báo thời tiết chính xác hơn',
    ],
    caseStudies: [
      {
        title: 'Thành tựu Ưu thế Lượng tử của Google',
        organization: 'Google AI Quantum',
        problem: 'Chứng minh máy tính lượng tử có thể giải quyết vấn đề mà máy tính cổ điển không thể làm hiệu quả.',
        solution: 'Sử dụng chip Sycamore 53-qubit để giải quyết bài toán lấy mẫu ngẫu nhiên phức tạp.',
        impact: 'Hoàn thành tác vụ trong 200 giây, so với ước tính 10.000 năm đối với siêu máy tính mạnh nhất.',
        innovations: ['Qubit siêu dẫn', 'Kỹ thuật sửa lỗi lượng tử', 'Thuật toán lượng tử'],
      },
    ],
    vietnamContext: {
      title: 'Nền tảng Lượng tử tại Việt Nam',
      content: [
        'Tại Việt Nam, nghiên cứu về khoa học lượng tử và máy tính lượng tử đang ở giai đoạn đầu, tập trung chủ yếu tại các viện nghiên cứu và trường đại học lớn như Viện Vật lý (Viện Hàn lâm KH&CN Việt Nam), Đại học Quốc gia Hà Nội và TP.HCM.',
        'Các nhóm nghiên cứu đang nỗ lực xây dựng nền tảng kiến thức, đào tạo thế hệ nhà khoa học trẻ và tiếp cận với các nền tảng đám mây lượng tử như IBM Quantum để thực hiện các mô phỏng đầu tiên.',
      ],
    },
    careerConnect: {
      name: 'GS.TS. Nguyễn Văn Hùng',
      title: 'Trưởng phòng Thí nghiệm Vật lý Lượng tử',
      company: 'Viện Khoa học Vật liệu (hư cấu)',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Hiểu được các nguyên lý cơ bản của thế giới lượng tử là bước đầu tiên để làm chủ công nghệ đột phá này. Việt Nam cần một thế hệ trẻ đam mê và dấn thân.',
    },
    quizzes: [
      {
        question: 'Đơn vị thông tin cơ bản trong máy tính lượng tử là gì?',
        options: ['Bit', 'Qubit', 'Gate', 'Circuit'],
        correctAnswerIndex: 1,
        explanation:
          'Qubit là đơn vị cơ bản của thông tin lượng tử, tương tự như bit trong máy tính cổ điển, nhưng có thêm các thuộc tính đặc biệt như chồng chập.',
      },
      {
        question: 'Hiện tượng "chồng chập" (superposition) cho phép qubit làm gì?',
        options: [
          'Chỉ tồn tại ở trạng thái 0',
          'Chỉ tồn tại ở trạng thái 1',
          'Tồn tại ở cả trạng thái 0 và 1 cùng một lúc',
          'Sao chép chính nó',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Chồng chập là một nguyên lý cơ bản của cơ học lượng tử, cho phép một qubit biểu diễn đồng thời cả giá trị 0 và 1 cho đến khi được đo.',
      },
    ],
  },
  {
    id: 'quantum-algorithms',
    title: 'Các Thuật toán Lượng tử',
    description: 'Tìm hiểu các thuật toán lượng tử nổi tiếng và cách chúng tạo ra lợi thế tính toán.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=V85332IZVs0',
    imageUrl: 'https://i.ytimg.com/vi/V85332IZVs0/hqdefault.jpg',
    objectives: [
      'Nắm vững thuật toán Shor và ứng dụng phá mã RSA',
      'Hiểu thuật toán Grover cho tìm kiếm nhanh',
      'Tìm hiểu Biến đổi Fourier Lượng tử (Quantum Fourier Transform)',
      'Thực hành triển khai các thuật toán lượng tử',
      'Khám phá các thuật toán: Shor, Grover, Quantum Fourier Transform, VQE, QAOA',
    ],
    prerequisites: [
      'Kiến thức cơ bản về điện toán lượng tử',
      'Toán học: số học modular, biến đổi Fourier',
      'Lập trình Python và Qiskit',
    ],
    exercises: [
      {
        title: 'Triển khai Thuật toán Grover',
        description: 'Cài đặt thuật toán Grover để tìm kiếm trong một cơ sở dữ liệu không có cấu trúc.',
        difficulty: 'Nâng cao',
        materials: ['Qiskit', 'Python', 'Kiến thức toán học'],
        procedure: [
          'Thiết kế hàm oracle cho mục tiêu cần tìm',
          'Triển khai toán tử khuếch tán (khuếch đại biên độ)',
          'Tính toán số lần lặp tối ưu: π/4 * √N',
          'Xây dựng mạch Grover hoàn chỉnh',
          'Kiểm tra với cơ sở dữ liệu 4 mục và 8 mục',
          'So sánh với độ phức tạp của tìm kiếm cổ điển',
          'Phân tích xác suất thành công theo số lần lặp',
        ],
        expectedResults: 'Tìm thấy mục tiêu với xác suất cao sau khoảng √N lần lặp.',
        solution:
          '# Triển khai Thuật toán Grover\nfrom qiskit import QuantumCircuit, QuantumRegister, ClassicalRegister\nfrom qiskit import Aer, execute\nimport numpy as np\n\ndef grover_algorithm(n_qubits, target_item):\n    # Tạo mạch lượng tử\n    qreg = QuantumRegister(n_qubits)\n    creg = ClassicalRegister(n_qubits)\n    qc = QuantumCircuit(qreg, creg)\n    \n    # Khởi tạo trạng thái chồng chập\n    for qubit in range(n_qubits):\n        qc.h(qubit)\n    \n    # Số lần lặp\n    iterations = int(np.pi/4 * np.sqrt(2**n_qubits))\n    \n    for _ in range(iterations):\n        # Oracle\n        oracle_circuit(qc, target_item, n_qubits)\n        \n        # Toán tử khuếch tán\n        diffusion_operator(qc, n_qubits)\n    \n    # Đo lường\n    qc.measure(qreg, creg)\n    \n    return qc\n\ndef oracle_circuit(qc, target, n_qubits):\n    # Đánh dấu trạng thái mục tiêu\n    # Việc triển khai phụ thuộc vào mục tiêu cụ thể\n    pass\n\ndef diffusion_operator(qc, n_qubits):\n    # Áp dụng Hadamard cho tất cả qubit\n    for qubit in range(n_qubits):\n        qc.h(qubit)\n    \n    # Lật quanh |00...0>\n    for qubit in range(n_qubits):\n        qc.x(qubit)\n    \n    # Cổng Z đa điều kiện\n    qc.h(n_qubits-1)\n    qc.mcx(list(range(n_qubits-1)), n_qubits-1)\n    qc.h(n_qubits-1)\n    \n    # Lật lại\n    for qubit in range(n_qubits):\n        qc.x(qubit)\n    \n    # Áp dụng Hadamard cho tất cả qubit\n    for qubit in range(n_qubits):\n        qc.h(qubit)',
      },
    ],
    realWorldApplications: [
      'Phá vỡ mã hóa RSA và mã hóa đường cong elliptic',
      'Tìm kiếm trong cơ sở dữ liệu lớn với độ phức tạp O(√N)',
      'Mô phỏng các hệ lượng tử nhiều vật thể',
      'Các bài toán tối ưu hóa (sử dụng QAOA)',
      'Học máy với lợi thế lượng tử',
    ],
    vietnamContext: {
      title: 'An ninh mạng và Thuật toán Lượng tử',
      content: [
        'Sự ra đời của thuật toán Shor đặt ra một thách thức lớn cho an ninh mạng toàn cầu, bao gồm cả Việt Nam. Các hệ thống mã hóa hiện tại (như RSA) có nguy cơ bị bẻ khóa.',
        'Ban Cơ yếu Chính phủ và các công ty an ninh mạng hàng đầu Việt Nam đang tích cực nghiên cứu và chuẩn bị cho "mật mã hậu lượng tử" (Post-Quantum Cryptography - PQC) để đảm bảo an toàn cho hạ tầng số quốc gia.',
      ],
    },
    careerConnect: {
      name: 'Chị Lê Thị Bảo An',
      title: 'Chuyên gia Mật mã Lượng tử',
      company: 'Viettel Cyber Security (hư cấu)',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Chúng tôi đang trong một cuộc chạy đua thầm lặng: xây dựng những chiếc khiên vững chắc trước khi những mũi giáo lượng tử sắc bén nhất được tạo ra.',
    },
    quizzes: [
      {
        question: 'Thuật toán Shor nổi tiếng vì khả năng làm gì?',
        options: [
          'Tìm kiếm trong cơ sở dữ liệu',
          'Phân tích số nguyên thành thừa số một cách hiệu quả',
          'Mô phỏng vật liệu',
          'Tối ưu hóa chuỗi cung ứng',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Thuật toán Shor có thể phân tích một số nguyên lớn thành các thừa số nguyên tố nhanh hơn theo cấp số nhân so với thuật toán cổ điển tốt nhất, đe dọa trực tiếp đến mã hóa RSA.',
      },
      {
        question: 'Thuật toán Grover được ứng dụng chính trong lĩnh vực nào?',
        options: [
          'Phá mã',
          'Tìm kiếm trong một cơ sở dữ liệu lớn, không có cấu trúc',
          'Dự báo thời tiết',
          'Nhận dạng hình ảnh',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Thuật toán Grover cung cấp một sự tăng tốc bậc hai (quadratic speedup) cho các bài toán tìm kiếm, giúp tìm một mục tiêu trong N mục với khoảng √N lần thử.',
      },
    ],
  },
  {
    id: 'quantum-cryptography',
    title: 'Mật mã Lượng tử và Bảo mật',
    description: 'Khám phá cách điện toán lượng tử thay đổi bảo mật thông tin và mã hóa.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=_5NQf8k3Jo0',
    imageUrl: 'https://i.ytimg.com/vi/_5NQf8k3Jo0/hqdefault.jpg',
    objectives: [
      'Hiểu về Phân phối Khóa Lượng tử (Quantum Key Distribution - QKD)',
      'Nắm vững về mật mã hậu lượng tử (post-quantum cryptography)',
      'Tìm hiểu các phương pháp mã hóa an toàn-lượng tử',
      'Đánh giá tác động của điện toán lượng tử lên an ninh mạng',
    ],
    prerequisites: ['Kiến thức mã hóa cổ điển', 'Kiến thức cơ bản về điện toán lượng tử', 'Bảo mật mạng'],
    exercises: [
      {
        title: 'Mô phỏng Giao thức BB84',
        description:
          'Triển khai giao thức trao đổi khóa lượng tử BB84 để hiểu cách nó hoạt động và phát hiện nghe lén.',
        difficulty: 'Trung bình',
        procedure: [
          'Mô phỏng Alice gửi các bit ngẫu nhiên',
          'Lựa chọn cơ sở ngẫu nhiên (thẳng và chéo)',
          'Bob đo lường với cơ sở ngẫu nhiên của mình',
          'So sánh công khai cơ sở đã dùng',
          'Sàng lọc khóa và sửa lỗi',
          'Phát hiện kẻ nghe lén (eavesdropping)',
          'Tạo khóa an toàn cuối cùng',
        ],
        expectedResults: 'Hiểu rõ cách QKD tạo ra khóa an toàn và tại sao việc nghe lén sẽ bị phát hiện.',
        solution:
          '# Giao thức BB84\n# Alice gửi qubit cho Bob\n# Bob đo lường\n# Alice và Bob công khai cơ sở đã dùng\n# Họ giữ lại các bit mà cơ sở của họ khớp nhau\n# Họ kiểm tra một phần nhỏ của khóa để phát hiện nghe lén\n# Nếu tỷ lệ lỗi thấp, khóa còn lại được coi là an toàn.',
      },
    ],
    realWorldApplications: [
      'Truyền thông an toàn-lượng tử cho ngân hàng',
      'Các kênh liên lạc an toàn của chính phủ',
      'Bảo vệ dữ liệu y tế',
      'Truyền thông quân sự',
      'Hệ thống giao dịch tài chính',
    ],
    vietnamContext: {
      title: 'Bảo mật Kênh Lượng tử cho Chính phủ và Tài chính',
      content: [
        'Việt Nam đang xem xét các công nghệ bảo mật kênh liên lạc thế hệ mới. Phân phối Khóa Lượng tử (QKD) là một trong những hướng đi tiềm năng để bảo vệ các kênh truyền thông trọng yếu của chính phủ, quân đội và ngành tài chính-ngân hàng.',
        'Dù việc triển khai trên diện rộng còn tốn kém, việc xây dựng các "hành lang an toàn" sử dụng QKD giữa các trung tâm dữ liệu quan trọng là một kịch bản đang được các nhà hoạch định chính sách cân nhắc.',
      ],
    },
    careerConnect: {
      name: 'Anh Trần Quốc Trung',
      title: 'Kỹ sư trưởng, Mạng Lưới Viễn thông An toàn',
      company: 'VNPT Technology (hư cấu)',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Với QKD, chúng ta không chỉ mã hóa thông tin, chúng ta sử dụng chính các quy luật của vật lý để đảm bảo rằng mọi hành vi nghe lén đều bị phát hiện. Đó là cấp độ bảo mật cao nhất.',
    },
    quizzes: [
      {
        question: 'Phân phối Khóa Lượng tử (QKD) giải quyết vấn đề gì?',
        options: [
          'Tăng tốc độ mã hóa',
          'Phân phối một khóa mã hóa bí mật một cách an toàn',
          'Bẻ khóa mã hóa của đối phương',
          'Lưu trữ khóa an toàn hơn',
        ],
        correctAnswerIndex: 1,
        explanation:
          'QKD sử dụng các nguyên lý của cơ học lượng tử để cho phép hai bên tạo ra và chia sẻ một khóa bí mật ngẫu nhiên mà chỉ họ biết, đồng thời có thể phát hiện sự hiện diện của bên thứ ba.',
      },
      {
        question: '"Mật mã hậu lượng tử" (PQC) là gì?',
        options: [
          'Mã hóa sử dụng máy tính lượng tử',
          'Các thuật toán mã hóa chạy trên máy tính cổ điển nhưng có khả năng chống lại các cuộc tấn công từ cả máy tính cổ điển và lượng tử',
          'Một tên gọi khác của QKD',
          'Mã hóa đã lỗi thời',
        ],
        correctAnswerIndex: 1,
        explanation:
          'PQC là các thuật toán được thiết kế để đảm bảo an toàn trong tương lai, khi các máy tính lượng tử đủ mạnh để phá vỡ các hệ thống mã hóa hiện tại đã trở nên phổ biến.',
      },
    ],
  },
  {
    id: 'quantum-future',
    title: 'Tương lai của Điện toán Lượng tử',
    description: 'Khám phá xu hướng phát triển và tác động tương lai của điện toán lượng tử.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=cer528-lIU8',
    imageUrl: 'https://i.ytimg.com/vi/cer528-lIU8/hqdefault.jpg',
    objectives: [
      'Hiểu lộ trình phát triển phần cứng lượng tử',
      'Nắm vững các thách thức kỹ thuật hiện tại',
      'Dự báo tác động lên các ngành công nghiệp',
      'Cơ hội nghề nghiệp trong lĩnh vực điện toán lượng tử',
    ],
    prerequisites: ['Kiến thức cơ bản về điện toán lượng tử', 'Hiểu biết chung về công nghệ'],
    exercises: [
      {
        title: 'Phân tích Hệ sinh thái Lượng tử',
        description: 'Nghiên cứu và so sánh các nền tảng điện toán lượng tử hiện tại.',
        difficulty: 'Cơ bản',
        procedure: [
          'Nghiên cứu về IBM Quantum, Google Quantum AI, Amazon Braket',
          'So sánh số lượng qubit và tỷ lệ lỗi',
          'Phân tích các mô hình định giá',
          'Đánh giá khả năng tiếp cận cho các nhà phát triển',
          'Dự báo thời gian đạt được lợi thế lượng tử',
          'Tạo một bài thuyết trình về bối cảnh lượng tử',
        ],
        expectedResults: 'Một bài phân tích tổng quan về các nền tảng lượng tử hàng đầu và vị thế của chúng.',
        solution:
          'Bài tập này là một bài nghiên cứu và phân tích, không có một giải pháp code duy nhất. Sinh viên cần trình bày kết quả dưới dạng báo cáo hoặc bài thuyết trình.',
      },
    ],
    realWorldApplications: [
      'Dịch vụ điện toán đám mây lượng tử',
      'Nền tảng học máy lượng tử',
      'Mô phỏng lượng tử để khám phá thuốc',
      'Tối ưu hóa lượng tử cho logistics',
      'Cảm biến lượng tử và đo lường',
    ],
    caseStudies: [
      {
        title: 'Dịch vụ Đám mây Lượng tử',
        organization: 'IBM, Google, Amazon, Microsoft',
        problem: 'Cung cấp quyền truy cập vào máy tính lượng tử mà không cần đầu tư phần cứng đắt đỏ.',
        solution:
          'Các gã khổng lồ công nghệ đã xây dựng các nền tảng đám mây (IBM Quantum, Amazon Braket, Azure Quantum) cho phép các nhà phát triển và nhà nghiên cứu chạy thuật toán trên các máy tính lượng tử thực sự.',
        impact:
          'Dân chủ hóa việc tiếp cận công nghệ lượng tử, thúc đẩy nghiên cứu và phát triển ứng dụng trên toàn cầu.',
        innovations: [
          'Lượng tử như một Dịch vụ (QaaS)',
          'Tác vụ lai lượng tử-cổ điển',
          'Bộ công cụ phát triển lượng tử',
        ],
      },
      {
        title: 'Tăng tốc Khám phá Thuốc',
        organization: 'Các công ty dược phẩm & công nghệ',
        problem:
          'Mô phỏng các phân tử phức tạp để tìm ra thuốc mới là một bài toán cực kỳ khó đối với máy tính cổ điển.',
        solution:
          'Sử dụng máy tính lượng tử để mô phỏng chính xác hơn các tương tác ở cấp độ phân tử, giúp sàng lọc và thiết kế các ứng cử viên thuốc tiềm năng nhanh hơn.',
        impact:
          'Có tiềm năng rút ngắn đáng kể thời gian và chi phí phát triển thuốc mới, từ hàng thập kỷ xuống còn vài năm.',
        innovations: ['Bộ giải Eigen lượng tử biến phân (VQE)', 'Học máy lượng tử cho hóa học'],
      },
    ],
    vietnamContext: {
      title: 'Cơ hội Lượng tử cho Doanh nghiệp Việt Nam',
      content: [
        'Các tập đoàn công nghệ lớn của Việt Nam như FPT, Viettel, Vingroup đang ở giai đoạn "sẵn sàng cho lượng tử" (quantum-ready), theo dõi sát sao sự phát triển và xây dựng đội ngũ R&D nòng cốt.',
        'Cơ hội trước mắt cho Việt Nam nằm ở việc phát triển phần mềm và thuật toán ứng dụng trên các nền tảng đám mây lượng tử, tập trung vào các bài toán tối ưu hóa cho logistics, tài chính, và sản xuất mà Việt Nam có thế mạnh.',
      ],
    },
    careerConnect: {
      name: 'Anh Đỗ Minh Khôi',
      title: 'Giám đốc Quỹ đầu tư Công nghệ Sâu',
      company: 'Mekong Capital (hư cấu)',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Chúng tôi không đầu tư vào công nghệ của ngày hôm nay, chúng tôi đầu tư vào đội ngũ sẽ xây dựng công nghệ của ngày mai. Điện toán lượng tử là một trong những canh bạc lớn nhất và thú vị nhất.',
    },
    quizzes: [
      {
        question: 'Thách thức lớn nhất của phần cứng máy tính lượng tử hiện nay là gì?',
        options: [
          'Tốc độ quá chậm',
          'Hiện tượng "mất đồng bộ lượng tử" (decoherence) và lỗi',
          'Tốn quá nhiều điện',
          'Khó lập trình',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Các trạng thái lượng tử rất mong manh và dễ bị ảnh hưởng bởi môi trường bên ngoài, gây ra lỗi tính toán. Việc kiểm soát và sửa lỗi là một trong những thách thức hàng đầu.',
      },
      {
        question: 'Một trong những ngành được dự báo sẽ bị ảnh hưởng sớm nhất bởi điện toán lượng tử là gì?',
        options: ['Bán lẻ', 'Nông nghiệp', 'Dược phẩm và Khoa học vật liệu', 'Giải trí'],
        correctAnswerIndex: 2,
        explanation:
          'Các ngành phụ thuộc vào việc mô phỏng các hệ thống phức tạp ở cấp độ phân tử và nguyên tử, như dược phẩm và vật liệu mới, được cho là sẽ gặt hái được "lợi thế lượng tử" sớm nhất.',
      },
    ],
  },
];
