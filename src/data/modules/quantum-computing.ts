import { ModuleData } from '@/types';
import { QuantumComputingLesson } from '@/types/lesson-base';

export const quantumComputingModule: ModuleData<QuantumComputingLesson> = {
  id: 'quantum-computing',
  title: 'Điện toán Lượng tử',
  description:
    'Khám phá thế giới kỳ lạ và hấp dẫn của điện toán lượng tử, từ các nguyên lý cơ bản như qubit, chồng chập, vướng víu cho đến các thuật toán mạnh mẽ có khả năng thay đổi thế giới.',
  image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=600&fit=crop',
  version: '1.0.0',
  lastUpdated: '2024-07-26',
  author: 'K2AI Team',
  isNew: false,
  isComingSoon: false,
  isPremium: false,
  isUnlocked: true,
  primaryColor: '#8A2BE2',
  gradientColors: 'from-blue-violet-500 to-violet-700',
  category: 'Công nghệ mới nổi',
  tags: ['Quantum Computing', 'Vật lý lượng tử', 'Công nghệ', 'Thuật toán'],
  learningGoals: [
    'Hiểu các khái niệm cơ bản của điện toán lượng tử: qubit, chồng chập, và vướng víu.',
    'Nắm được cách hoạt động của các cổng lượng tử và xây dựng các mạch lượng tử đơn giản.',
    'Tìm hiểu về các thuật toán lượng tử quan trọng như Shor và Grover.',
    'Thực hành lập trình lượng tử cơ bản bằng Qiskit và chạy trên máy tính lượng tử thực.',
  ],
  targetAudience: {
    level: ['Trung cấp', 'Nâng cao'],
    description:
      'Sinh viên các ngành khoa học, công nghệ, kỹ thuật, toán học (STEM), các lập trình viên muốn tìm hiểu về lĩnh vực mới, và bất kỳ ai tò mò về tương lai của công nghệ máy tính.',
  },
  prerequisites: ['Kiến thức cơ bản về đại số tuyến tính (vector, ma trận).', 'Kinh nghiệm lập trình Python là một lợi thế.'],
  projectIdeas: [
    'Mô phỏng thuật toán Grover để tìm kiếm một phần tử trong danh sách.',
    'Xây dựng một bộ tạo số ngẫu nhiên lượng tử thực sự.',
    'Triển khai giao thức dịch chuyển lượng tử (quantum teleportation) bằng Qiskit.',
  ],
  practicalApplications: [
    {
      name: 'Phát triển thuốc và vật liệu',
      description: 'Mô phỏng chính xác các phân tử và phản ứng hóa học, giúp đẩy nhanh quá trình khám phá thuốc mới và thiết kế vật liệu với các đặc tính mong muốn.',
    },
    {
      name: 'Tài chính',
      description: 'Tối ưu hóa danh mục đầu tư, định giá các công cụ tài chính phức tạp và quản lý rủi ro hiệu quả hơn.',
    },
    {
      name: 'Trí tuệ nhân tạo',
      description: 'Tăng tốc các thuật toán học máy, đặc biệt là trong các bài toán tối ưu hóa và nhận dạng mẫu.',
    },
    {
      name: 'An ninh mạng',
      description: 'Phá vỡ các hệ thống mã hóa hiện tại (ví dụ: RSA) nhưng cũng cho phép tạo ra các phương thức truyền thông an toàn tuyệt đối (mật mã lượng tử).',
    },
  ],
  lessons: [
    {
      id: 'quantum-intro',
      title: 'Nhập môn Điện toán Lượng tử',
      description:
        'Giới thiệu các khái niệm cơ bản của điện toán lượng tử, so sánh sự khác biệt giữa bit cổ điển và qubit, và khám phá tiềm năng cách mạng của công nghệ này.',
      duration: '120 phút',
      difficulty: 'Trung bình',
      videoUrl: 'https://www.youtube.com/watch?v=IrbwR_j_sIQ',
      imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&h=600&fit=crop',
      objectives: [
        'Hiểu được tại sao cần điện toán lượng tử.',
        'Phân biệt được bit và qubit.',
        'Nắm được các khái niệm cốt lõi: chồng chập và vướng víu lượng tử.',
        'Khám phá các lĩnh vực ứng dụng tiềm năng của máy tính lượng tử.',
      ],
      realWorldApplications: [
        'Mô phỏng phân tử để phát triển thuốc mới.',
        'Tối ưu hóa các hệ thống phức tạp (logistics, tài chính).',
        'Phá vỡ các hệ thống mã hóa hiện tại.',
        'Phát triển các loại vật liệu mới với đặc tính mong muốn.',
      ],
    },
    {
      id: 'qubits-and-gates',
      title: 'Qubit và các Cổng Lượng tử',
      description:
        'Đi sâu vào toán học của qubit, biểu diễn chúng trên khối cầu Bloch và tìm hiểu cách các cổng lượng tử (Pauli-X, Hadamard, CNOT) thao tác trên chúng.',
      duration: '150 phút',
      difficulty: 'Trung bình',
      videoUrl: 'https://www.youtube.com/watch?v=9f-v_i543_c',
      imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=600&fit=crop',
      objectives: [
        'Biểu diễn trạng thái qubit bằng vector và trên khối cầu Bloch.',
        'Hiểu chức năng của các cổng lượng tử một qubit: X, Y, Z, H.',
        'Hiểu chức năng của cổng lượng tử hai qubit: CNOT.',
        'Xây dựng các mạch lượng tử đơn giản.',
      ],
      realWorldApplications: [
        'Nền tảng cho mọi thuật toán lượng tử.',
        'Sửa lỗi lượng tử (Quantum Error Correction).',
        'Mô phỏng các hệ thống vật lý.',
      ],
    },
    {
      id: 'quantum-entanglement',
      title: 'Vướng víu Lượng tử và Dịch chuyển Tức thời',
      description:
        'Khám phá "hành động ma quái ở khoảng cách xa" như Einstein đã mô tả. Tìm hiểu cách các qubit vướng víu được kết nối với nhau bất kể khoảng cách và ứng dụng trong dịch chuyển lượng tử.',
      duration: '130 phút',
      difficulty: 'Nâng cao',
      videoUrl: 'https://www.youtube.com/watch?v=ZzRcAk-2y_A',
      imageUrl: 'https://images.unsplash.com/photo-1504333638930-c8787321eee0?w=1200&h=600&fit=crop',
      objectives: [
        'Định nghĩa và nhận biết một trạng thái vướng víu.',
        'Hiểu nghịch lý EPR và ý nghĩa của nó.',
        'Nắm được các bước của giao thức dịch chuyển lượng tử.',
        'Phân biệt giữa dịch chuyển lượng tử và truyền thông tin nhanh hơn ánh sáng.',
      ],
      realWorldApplications: [
        'Mạng lượng tử và Internet lượng tử.',
        'Phân phối khóa lượng tử (Quantum Key Distribution) cho truyền thông bảo mật.',
        'Tính toán lượng tử phân tán.',
      ],
    },
    {
      id: 'quantum-algorithms',
      title: 'Thuật toán Lượng tử: Shor và Grover',
      description:
        'Tìm hiểu hai thuật toán lượng tử nổi tiếng nhất: Thuật toán Shor để phân tích số nguyên tố (đe dọa mã hóa RSA) và thuật toán Grover để tìm kiếm trong cơ sở dữ liệu không có cấu trúc.',
      duration: '180 phút',
      difficulty: 'Nâng cao',
      videoUrl: 'https://www.youtube.com/watch?v=iTr3X5y2AgI',
      imageUrl: 'https://images.unsplash.com/photo-1605835613824-3c28a456b3a3?w=1200&h=600&fit=crop',
      objectives: [
        'Hiểu được vấn đề mà thuật toán Shor giải quyết và tại sao nó lại quan trọng.',
        'Nắm được ý tưởng chính đằng sau thuật toán Grover và lợi thế tốc độ của nó.',
        'So sánh độ phức tạp tính toán của thuật toán cổ điển và lượng tử cho các vấn đề này.',
        'Nhận thức được tác động của các thuật toán này đối với thế giới thực.',
      ],
      realWorldApplications: [
        'Thuật toán Shor: Phá vỡ mã hóa RSA, nền tảng của an ninh Internet hiện tại.',
        'Thuật toán Grover: Tăng tốc giải quyết các bài toán tối ưu hóa và tìm kiếm, ví dụ như trong lĩnh vực AI và logistics.',
        'Mô phỏng các hệ thống lượng tử phức tạp.',
      ],
    },
    {
      id: 'quantum-programming-qiskit',
      title: 'Lập trình Lượng tử với Qiskit',
      description:
        'Hướng dẫn thực hành từng bước để bắt đầu lập trình lượng tử. Cài đặt môi trường, viết mạch lượng tử đầu tiên với Qiskit, và chạy nó trên cả trình giả lập và máy tính lượng tử thực của IBM.',
      duration: '200 phút',
      difficulty: 'Trung bình',
      videoUrl: 'https://www.youtube.com/watch?v=a11bdY1i-wI',
      imageUrl: 'https://images.unsplash.com/photo-1614926852348-c778453a6a6a?w=1200&h=600&fit=crop',
      objectives: [
        'Cài đặt Python và Qiskit.',
        'Xây dựng, vẽ và mô phỏng các mạch lượng tử.',
        'Gửi một công việc (job) đến một máy tính lượng tử thực qua cloud.',
        'Phân tích kết quả và hiểu về nhiễu (noise) trong các thiết bị lượng tử thực.',
      ],
      realWorldApplications: [
        'Nghiên cứu và phát triển các thuật toán lượng tử mới.',
        'Kiểm tra các lý thuyết vật lý lượng tử.',
        'Giáo dục và đào tạo thế hệ các nhà khoa học lượng tử tiếp theo.',
      ],
    },
  ],
};

export default quantumComputingModule;
