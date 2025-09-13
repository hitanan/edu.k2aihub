import { ModuleData } from '@/types';
import { QuantumComputingEducationLesson } from '@/types/lesson-base';

export const quantumComputingEducationModule: ModuleData<QuantumComputingEducationLesson> = {
  id: 'quantum-computing-education',
  title: 'Điện toán Lượng tử cho Giáo dục',
  description: 'Khám phá thế giới kỳ lạ và hấp dẫn của điện toán lượng tử, từ các nguyên tắc cơ bản đến các thuật toán và ứng dụng trong tương lai.',
  image: 'quantum-computing-education.jpg',
  tags: ['điện toán lượng tử', 'qubit', 'chồng chập', 'vướng víu lượng tử', 'thuật toán lượng tử', 'giáo dục STEM'],
  category: 'Công nghệ Tương lai',
  primaryColor: '#A855F7',
  gradientColors: 'from-purple-600 to-violet-700',
  lessons: [
    {
      id: 'what-is-quantum-computing',
      title: 'Điện toán Lượng tử là gì?',
      description: 'Một phần giới thiệu nhẹ nhàng về các khái niệm cốt lõi của điện toán lượng tử, giải thích sự khác biệt so với máy tính cổ điển.',
      duration: '45 phút',
      difficulty: 'Cơ bản',
      objectives: [
        'Hiểu khái niệm về qubit, chồng chập và vướng víu lượng tử.',
        'Phân biệt giữa bit cổ điển và qubit.',
        'Nhận biết các ứng dụng tiềm năng của điện toán lượng tử.',
      ],
      realWorldApplications: [
        'Phát triển thuốc và vật liệu mới.',
        'Tối ưu hóa các hệ thống phức tạp (logistics, tài chính).',
        'Phá vỡ các hệ thống mã hóa hiện tại.',
      ],
      quizzes: [
        {
          question: 'Đơn vị cơ bản của thông tin trong máy tính lượng tử là gì?',
          options: ['Bit', 'Qubit', 'Byte', 'Gate'],
          correctAnswerIndex: 1,
          explanation: 'Qubit là đơn vị cơ bản của thông tin lượng tử, tương tự như bit trong máy tính cổ điển, nhưng có thể tồn tại ở trạng thái 0, 1, hoặc cả hai cùng lúc (chồng chập).',
        },
      ],
    },
    {
      id: 'quantum-algorithms',
      title: 'Các Thuật toán Lượng tử Nổi tiếng',
      description: 'Tìm hiểu về các thuật toán đã chứng minh sức mạnh vượt trội của máy tính lượng tử, như thuật toán của Shor và Grover.',
      duration: '60 phút',
      difficulty: 'Trung bình',
      objectives: [
        'Hiểu mục đích của thuật toán Shor (phân tích thừa số nguyên).',
        'Hiểu mục đích của thuật toán Grover (tìm kiếm không có cấu trúc).',
        'So sánh tốc độ của thuật toán lượng tử và cổ điển cho các bài toán cụ thể.',
      ],
      realWorldApplications: [
        'Bẻ khóa mã hóa RSA (thuật toán Shor).',
        'Tìm kiếm trong các cơ sở dữ liệu khổng lồ (thuật toán Grover).',
        'Mô phỏng các hệ thống phân tử phức tạp.',
      ],
    },
    {
      id: 'building-a-quantum-computer',
      title: 'Xây dựng một Máy tính Lượng tử',
      description: 'Khám phá những thách thức kỹ thuật to lớn trong việc xây dựng và vận hành một máy tính lượng tử ổn định.',
      duration: '50 phút',
      difficulty: 'Nâng cao',
      objectives: [
        'Liệt kê các phương pháp vật lý khác nhau để tạo qubit (siêu dẫn, ion bẫy).',
        'Hiểu về vấn đề mất kết hợp lượng tử (decoherence).',
        'Biết tầm quan trọng của việc sửa lỗi lượng tử.',
      ],
      realWorldApplications: [
        'Nghiên cứu vật liệu ở nhiệt độ cực thấp.',
        'Phát triển hệ thống laser và vi sóng siêu chính xác.',
        'Thiết kế các hệ thống cách ly khỏi môi trường.',
      ],
      careerConnect: {
        name: 'Dr. Nguyễn Thị Lượng Tử',
        title: 'Nhà nghiên cứu Vật lý Lượng tử',
        company: 'Viện Khoa học và Công nghệ K2AI',
        imageUrl: '/images/career-quantum-physicist.jpg',
        quote: 'Điện toán lượng tử không chỉ là một công cụ tính toán mới, nó là một cách tư duy hoàn toàn mới về vũ trụ.',
      },
    },
  ],
};
