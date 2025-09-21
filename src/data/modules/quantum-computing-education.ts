import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

export interface QuantumComputingLesson extends BaseLessonData {
  quizzes?: Array<{
    question: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
  }>;
  careerConnect?: {
    name: string;
    title: string;
    company: string;
    imageUrl: string;
    quote: string;
  };
}

export const quantumComputingLessons: QuantumComputingLesson[] = [
  {
    id: 'what-is-quantum-computing',
    videoUrl: null,
    title: 'Điện toán Lượng tử là gì?',
    description:
      'Một phần giới thiệu nhẹ nhàng về các khái niệm cốt lõi của điện toán lượng tử, giải thích sự khác biệt so với máy tính cổ điển.',
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
        explanation:
          'Qubit là đơn vị cơ bản của thông tin lượng tử, tương tự như bit trong máy tính cổ điển, nhưng có thể tồn tại ở trạng thái 0, 1, hoặc cả hai cùng lúc (chồng chập).',
      },
    ],
    prerequisites: [],
    exercises: [],
    faqs: [
      {
        question: 'Qubit là gì?',
        answer:
          'Qubit là đơn vị thông tin cơ bản trong điện toán lượng tử, tương tự bit trong máy tính cổ điển. Tuy nhiên, khác với bit chỉ có thể là 0 hoặc 1, qubit có thể là 0, 1, hoặc cả hai cùng một lúc nhờ nguyên lý chồng chập.',
      },
      {
        question: 'Chồng chập lượng tử (superposition) nghĩa là gì?',
        answer:
          'Chồng chập là khả năng một hệ lượng tử (như qubit) tồn tại ở nhiều trạng thái khác nhau cùng một lúc. Chỉ khi chúng ta đo lường, nó mới "sụp đổ" về một trạng thái xác định (0 hoặc 1).',
      },
      {
        question: 'Vướng víu lượng tử (entanglement) là gì?',
        answer:
          'Vướng víu là một hiện tượng kỳ lạ khi hai hoặc nhiều qubit được liên kết với nhau một cách đặc biệt. Trạng thái của một qubit ngay lập tức ảnh hưởng đến trạng thái của qubit kia, bất kể chúng cách xa nhau bao xa. Einstein gọi đây là "hành động ma quái ở khoảng cách xa".',
      },
      {
        question: 'Máy tính lượng tử có nhanh hơn máy tính cổ điển không?',
        answer:
          'Có và không. Đối với các tác vụ thông thường như lướt web hay soạn thảo văn bản, máy tính lượng tử không nhanh hơn. Tuy nhiên, đối với một số loại bài toán cụ thể (như phân tích thừa số nguyên, mô phỏng phân tử), chúng có khả năng giải quyết nhanh hơn theo cấp số nhân.',
      },
      {
        question: 'Tại sao chúng ta cần máy tính lượng tử?',
        answer:
          'Vì có những bài toán quá phức tạp đối với máy tính cổ điển mạnh nhất. Ví dụ, để mô phỏng chính xác một phân tử thuốc đơn giản có thể đòi hỏi một máy tính cổ điển lớn hơn cả vũ trụ. Máy tính lượng tử hứa hẹn sẽ giải quyết được những vấn đề như vậy.',
      },
      {
        question: 'Điện toán lượng tử có thay thế máy tính cá nhân của tôi không?',
        answer:
          'Không, ít nhất là trong tương lai gần. Máy tính lượng tử là những cỗ máy chuyên dụng, đắt tiền và nhạy cảm. Chúng sẽ hoạt động giống như các siêu máy tính hiện nay, được truy cập từ xa qua đám mây để giải quyết các bài toán cụ thể, chứ không thay thế laptop hay điện thoại của bạn.',
      },
      {
        question: 'Làm thế nào để một qubit có thể vừa là 0 vừa là 1?',
        answer:
          'Hãy tưởng tượng một đồng xu đang xoay. Khi đang xoay, nó không phải là sấp hay ngửa, mà là cả hai. Chỉ khi nó dừng lại (bị đo lường), nó mới rơi vào một trạng thái cụ thể. Qubit cũng tương tự như vậy trong thế giới hạ nguyên tử.',
      },
      {
        question: 'Lĩnh vực nào sẽ bị ảnh hưởng nhiều nhất bởi điện toán lượng tử?',
        answer:
          'Các lĩnh vực có thể bị ảnh hưởng sâu sắc bao gồm y dược (phát triển thuốc mới), khoa học vật liệu (tạo ra vật liệu siêu dẫn ở nhiệt độ phòng), tài chính (tối ưu hóa danh mục đầu tư), và an ninh mạng (phá vỡ mã hóa hiện tại).',
      },
      {
        question: 'Học về điện toán lượng tử có khó không?',
        answer:
          'Các nguyên tắc cơ bản có thể được tiếp cận ở mức độ khái niệm. Tuy nhiên, để đi sâu vào toán học và vật lý đằng sau nó (đại số tuyến tính, cơ học lượng tử) thì đòi hỏi sự nỗ lực đáng kể. Nhưng có nhiều công cụ và tài nguyên đang được phát triển để giúp việc học trở nên dễ dàng hơn.',
      },
      {
        question: 'Bit và Qubit khác nhau cơ bản ở điểm nào?',
        answer:
          'Một bit chỉ có thể lưu trữ một trong hai giá trị: 0 hoặc 1. Một qubit có thể lưu trữ một sự kết hợp tuyến tính của cả 0 và 1. Do đó, N qubit có thể biểu diễn 2^N trạng thái cùng một lúc, trong khi N bit chỉ có thể biểu diễn một trong 2^N trạng thái tại một thời điểm.',
      },
    ],
  },
  {
    id: 'quantum-algorithms',
    videoUrl: null,
    title: 'Các Thuật toán Lượng tử Nổi tiếng',
    description:
      'Tìm hiểu về các thuật toán đã chứng minh sức mạnh vượt trội của máy tính lượng tử, như thuật toán của Shor và Grover.',
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
    prerequisites: [],
    exercises: [],
    faqs: [
      {
        question: 'Thuật toán Shor dùng để làm gì?',
        answer:
          'Thuật toán Shor là một thuật toán lượng tử dùng để phân tích một số nguyên thành các thừa số nguyên tố. Đây là một bài toán cực kỳ khó đối với máy tính cổ điển, và là nền tảng của mã hóa RSA đang được sử dụng rộng rãi.',
      },
      {
        question: 'Tại sao thuật toán Shor lại là một mối đe dọa an ninh?',
        answer:
          'Bởi vì an ninh của mã hóa RSA dựa trên việc phân tích một số lớn thành thừa số nguyên tố là rất khó. Một máy tính lượng tử đủ mạnh chạy thuật toán Shor có thể thực hiện việc này một cách nhanh chóng, phá vỡ phần lớn hệ thống mã hóa bảo vệ dữ liệu của chúng ta ngày nay.',
      },
      {
        question: 'Thuật toán Grover làm được gì?',
        answer:
          'Thuật toán Grover là một thuật toán tìm kiếm lượng tử. Nó có thể tìm kiếm một mục tiêu trong một cơ sở dữ liệu lớn, không có cấu trúc với tốc độ nhanh hơn theo cấp số hai so với thuật toán cổ điển tốt nhất. Ví dụ, để tìm trong 1 triệu mục, máy tính cổ điển cần trung bình 500.000 lần thử, trong khi thuật toán Grover chỉ cần khoảng 1.000 lần thử.',
      },
      {
        question: 'Thuật toán Grover có ứng dụng thực tế nào?',
        answer:
          'Nó có thể được dùng để tăng tốc giải quyết nhiều bài toán tối ưu hóa và tìm kiếm, ví dụ như giải quyết các bài toán NP-complete, tìm kiếm trong cơ sở dữ liệu lớn, hoặc trong các tác vụ trí tuệ nhân tạo.',
      },
      {
        question: 'Sự khác biệt về tốc độ giữa thuật toán lượng tử và cổ điển là gì?',
        answer:
          'Sự khác biệt chính là ở "độ phức tạp tính toán". Một số thuật toán lượng tử như của Shor mang lại sự tăng tốc theo cấp số nhân (exponential speedup), biến một bài toán không thể giải quyết được thành có thể. Các thuật toán khác như của Grover mang lại sự tăng tốc theo cấp số hai (quadratic speedup), một sự cải thiện đáng kể nhưng không quá đột phá.',
      },
      {
        question: 'Ngoài Shor và Grover, còn có thuật toán lượng tử nào khác không?',
        answer:
          'Có rất nhiều. Ví dụ, các thuật toán mô phỏng lượng tử (quantum simulation) được dùng để mô phỏng các hệ thống vật lý phức tạp, hay thuật toán HHL dùng để giải các hệ phương trình tuyến tính. Đây là một lĩnh vực nghiên cứu rất sôi động.',
      },
      {
        question: 'Làm thế nào một thuật toán lượng tử có thể thử nhiều khả năng cùng một lúc?',
        answer:
          'Nhờ vào nguyên lý chồng chập. Một thanh ghi N qubit có thể tồn tại trong một sự chồng chập của tất cả 2^N trạng thái khả dĩ. Một thuật toán lượng tử có thể thực hiện các phép toán trên tất cả các trạng thái này đồng thời, tạo ra một dạng "tính toán song song" khổng lồ.',
      },
      {
        question: 'Giao thoa lượng tử (Quantum Interference) có vai trò gì trong thuật toán?',
        answer:
          'Giao thoa là một hiệu ứng quan trọng. Các thuật toán lượng tử được thiết kế để các đường tính toán dẫn đến câu trả lời sai sẽ triệt tiêu lẫn nhau (giao thoa triệt tiêu), trong khi các đường dẫn đến câu trả lời đúng sẽ cộng hưởng với nhau (giao thoa tăng cường), làm tăng xác suất đo được kết quả đúng.',
      },
      {
        question: 'Chúng ta đã có thể chạy thuật toán Shor để bẻ khóa RSA trong thực tế chưa?',
        answer:
          'Chưa. Mặc dù thuật toán Shor đã được chạy thành công để phân tích các số rất nhỏ (như 15 = 3x5), chúng ta vẫn chưa có máy tính lượng tử đủ lớn và đủ ổn định (với đủ số qubit và tỷ lệ lỗi thấp) để phân tích các số lớn được dùng trong mã hóa RSA thực tế.',
      },
      {
        question: 'Mật mã hậu lượng tử (Post-Quantum Cryptography) là gì?',
        answer:
          'Đó là lĩnh vực phát triển các thuật toán mã hóa mới có thể chạy trên máy tính cổ điển nhưng được cho là an toàn trước sự tấn công của cả máy tính cổ điển và máy tính lượng tử. Đây là một hướng đi quan trọng để chuẩn bị cho tương lai.',
      },
    ],
  },
  {
    id: 'building-a-quantum-computer',
    videoUrl: 'https://www.youtube.com/watch?v=AFYe0I4QUu8',
    title: 'Xây dựng một Máy tính Lượng tử',
    description:
      'Khám phá những thách thức kỹ thuật to lớn trong việc xây dựng và vận hành một máy tính lượng tử ổn định.',
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
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      quote:
        'Điện toán lượng tử không chỉ là một công cụ tính toán mới, nó là một cách tư duy hoàn toàn mới về vũ trụ.',
    },
    prerequisites: [],
    exercises: [],
    faqs: [
      {
        question: 'Thách thức lớn nhất khi xây dựng máy tính lượng tử là gì?',
        answer:
          'Thách thức lớn nhất là "mất kết hợp lượng tử" (decoherence). Các trạng thái lượng tử mỏng manh của qubit rất dễ bị nhiễu bởi môi trường xung quanh (nhiệt độ, rung động, trường điện từ), khiến chúng mất đi tính chất lượng tử và gây ra lỗi tính toán.',
      },
      {
        question: 'Làm thế nào để tạo ra một qubit?',
        answer:
          'Có nhiều cách tiếp cận khác nhau. Một số phương pháp phổ biến bao gồm: sử dụng các vòng lặp siêu dẫn được làm lạnh đến nhiệt độ gần độ không tuyệt đối, dùng tia laser để bẫy và điều khiển các ion riêng lẻ, hoặc sử dụng các khuyết tật trong cấu trúc tinh thể của kim cương (NV-centers).',
      },
      {
        question: 'Tại sao máy tính lượng tử cần được giữ ở nhiệt độ cực lạnh?',
        answer:
          'Nhiệt độ cao gây ra "nhiễu nhiệt", làm cho các nguyên tử rung động và tương tác với các qubit, gây ra hiện tượng mất kết hợp. Việc làm lạnh hệ thống xuống gần độ không tuyệt đối (-273°C) giúp giảm thiểu nhiễu này và duy trì trạng thái lượng tử mong manh của các qubit.',
      },
      {
        question: 'Sửa lỗi lượng tử (Quantum Error Correction) là gì?',
        answer:
          'Do các qubit rất dễ bị lỗi, sửa lỗi lượng tử là một tập hợp các kỹ thuật tối quan trọng. Ý tưởng là mã hóa thông tin của một qubit "logic" vào nhiều qubit "vật lý". Bằng cách đo lường các qubit vật lý này, ta có thể phát hiện và sửa lỗi mà không phá hủy trạng thái lượng tử của qubit logic.',
      },
      {
        question: 'Cần bao nhiêu qubit vật lý cho một qubit logic?',
        answer:
          'Con số này phụ thuộc vào chất lượng của các qubit vật lý và thuật toán sửa lỗi được sử dụng. Các ước tính hiện tại cho thấy có thể cần từ hàng trăm đến hàng nghìn qubit vật lý để tạo ra một qubit logic đủ tốt cho các tính toán hữu ích.',
      },
      {
        question: 'Chúng ta đang ở đâu trong cuộc đua xây dựng máy tính lượng tử?',
        answer:
          'Chúng ta đang ở trong kỷ nguyên "Máy tính lượng tử nhiễu quy mô trung bình" (Noisy Intermediate-Scale Quantum - NISQ). Các máy tính hiện tại có từ 50 đến vài trăm qubit, đủ để thực hiện các tác vụ mà máy tính cổ điển không thể mô phỏng, nhưng chúng vẫn còn quá nhiều lỗi để chạy các thuật toán lớn như của Shor.',
      },
      {
        question: 'Cổng lượng tử (Quantum Gate) là gì?',
        answer:
          'Tương tự như các cổng logic (AND, OR, NOT) trong máy tính cổ điển, cổng lượng tử là các phép toán cơ bản tác động lên một hoặc nhiều qubit để thay đổi trạng thái của chúng. Các thuật toán lượng tử được xây dựng từ một chuỗi các cổng lượng tử này.',
      },
      {
        question: 'Làm thế nào để "lập trình" một máy tính lượng tử?',
        answer:
          'Các nhà phát triển sử dụng các bộ công cụ phần mềm (SDK) như Qiskit (của IBM), Cirq (của Google), hoặc Q# (của Microsoft). Họ viết code bằng các ngôn ngữ như Python để định nghĩa một "mạch lượng tử" (quantum circuit) bao gồm các qubit và các cổng lượng tử, sau đó gửi mạch này đến máy tính lượng tử thực hoặc máy giả lập để thực thi.',
      },
      {
        question: 'Ưu và nhược điểm của qubit siêu dẫn và qubit ion bẫy là gì?',
        answer:
          'Qubit siêu dẫn có tốc độ cổng nhanh nhưng thời gian kết hợp ngắn hơn và cần nhiệt độ cực lạnh. Qubit ion bẫy có thời gian kết hợp rất dài và độ trung thực cao, nhưng tốc độ cổng chậm hơn và khó mở rộng quy mô hơn.',
      },
      {
        question: 'Tương lai của việc xây dựng máy tính lượng tử sẽ như thế nào?',
        answer:
          'Tương lai có thể sẽ chứng kiến sự phát triển của các máy tính lượng tử chịu lỗi (fault-tolerant quantum computers) với hàng triệu qubit vật lý. Cũng có khả năng các kiến trúc lai (hybrid) kết hợp nhiều công nghệ qubit khác nhau sẽ xuất hiện, hoặc các đột phá về vật liệu mới sẽ cho phép tạo ra các qubit ổn định hơn ở nhiệt độ cao hơn.',
      },
    ],
  },
];

export const quantumComputingEducationModule: ModuleData = {
  id: 'quantum-computing-education',
  title: 'Điện toán Lượng tử cho Giáo dục',
  description:
    'Khám phá thế giới kỳ lạ và hấp dẫn của điện toán lượng tử, từ các nguyên tắc cơ bản đến các thuật toán và ứng dụng trong tương lai.',
  image: 'quantum-computing-education.jpg',
  tags: ['điện toán lượng tử', 'qubit', 'chồng chập', 'vướng víu lượng tử', 'thuật toán lượng tử', 'giáo dục STEM'],
  category: 'Công nghệ Tương lai',
  primaryColor: '#A855F7',
  gradientColors: 'from-purple-600 to-violet-700',
  lessons: quantumComputingLessons,
};
