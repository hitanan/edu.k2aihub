import { BaseLessonData } from '../types/lesson-base';

export const quantumComputingLessons: BaseLessonData[] = [
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
    prerequisites: ['Kiến thức cơ bản về vật lý và toán học phổ thông.', 'Tư duy logic và sự tò mò về công nghệ mới.'],
    exercises: [
      {
        title: 'So sánh Bit và Qubit',
        description: 'Vẽ và mô tả sự khác biệt trong không gian trạng thái của một bit cổ điển và một qubit.',
        difficulty: 'Cơ bản',
        procedure: [
          'Vẽ một đường thẳng và đánh dấu hai điểm 0 và 1 để biểu diễn bit.',
          'Vẽ một hình cầu (khối cầu Bloch) và giải thích rằng qubit có thể tồn tại ở bất kỳ điểm nào trên bề mặt.',
          'Viết ra phương trình trạng thái của một qubit tổng quát.',
        ],
        expectedResults: 'Hiểu rõ sự khác biệt về khả năng biểu diễn thông tin giữa bit và qubit.',
      },
    ],
    realWorldApplications: [
      'Mô phỏng phân tử để phát triển thuốc mới.',
      'Tối ưu hóa các hệ thống phức tạp (logistics, tài chính).',
      'Phá vỡ các hệ thống mã hóa hiện tại.',
      'Phát triển các loại vật liệu mới với đặc tính mong muốn.',
    ],
    vietnamContext: {
      title: 'Điện toán lượng tử tại Việt Nam: Bước đầu hội nhập',
      content: [
        'Việt Nam đã bắt đầu có những nhóm nghiên cứu về vật lý lượng tử và công nghệ lượng tử tại các trường đại học lớn như ĐHQG Hà Nội và ĐHQG TP.HCM.',
        'Các hội thảo và khóa học về điện toán lượng tử đang dần được tổ chức, thu hút sự quan tâm của sinh viên và các nhà khoa học trẻ.',
        'FPT Software là một trong những công ty công nghệ tiên phong của Việt Nam trong việc nghiên cứu và tìm hiểu ứng dụng của điện toán lượng tử.',
      ],
    },
    careerConnect: {
      name: 'Giáo sư Nguyễn Văn A',
      title: 'Trưởng phòng thí nghiệm Vật lý Lượng tử',
      company: 'Viện Khoa học và Công nghệ Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-van-a',
      quote:
        'Điện toán lượng tử là một cuộc cách mạng. Việt Nam cần nhanh chóng xây dựng nguồn nhân lực chất lượng cao để không bị tụt hậu trong cuộc đua công nghệ toàn cầu này. Chúng tôi đang nỗ lực để đưa các khái niệm này đến gần hơn với sinh viên.',
    },
    quizzes: [
      {
        question: 'Đơn vị thông tin cơ bản trong máy tính lượng tử được gọi là gì?',
        options: ['Bit', 'Qubit', 'Gate', 'Electron'],
        correctAnswerIndex: 1,
        explanation:
          'Qubit (quantum bit) là đơn vị thông tin cơ bản của máy tính lượng tử, tương tự như bit trong máy tính cổ điển.',
      },
      {
        question: 'Hiện tượng nào cho phép một qubit tồn tại ở trạng thái 0 và 1 cùng một lúc?',
        options: [
          'Vướng víu (Entanglement)',
          'Chồng chập (Superposition)',
          'Giao thoa (Interference)',
          'Đường hầm (Tunneling)',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Chồng chập (Superposition) là nguyên lý cơ học lượng tử cho phép một qubit tồn tại trong sự kết hợp của cả hai trạng thái 0 và 1.',
      },
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
    prerequisites: [
      'Kiến thức về Đại số tuyến tính (vector, ma trận).',
      'Hoàn thành bài "Nhập môn Điện toán Lượng tử".',
    ],
    exercises: [
      {
        title: 'Xây dựng mạch Bell State',
        description:
          'Sử dụng cổng Hadamard và CNOT để tạo ra một trạng thái vướng víu (Bell state) từ hai qubit ban đầu ở trạng thái |00>.',
        difficulty: 'Trung bình',
        materials: ['Trình giả lập mạch lượng tử (ví dụ: IBM Quantum Experience, Quirk).'],
        procedure: [
          'Khởi tạo hai qubit ở trạng thái |0>.',
          'Áp dụng cổng Hadamard (H) lên qubit đầu tiên.',
          'Áp dụng cổng CNOT với qubit đầu tiên là control và qubit thứ hai là target.',
          'Đo lường xác suất của các trạng thái đầu ra (00, 01, 10, 11).',
        ],
        expectedResults:
          'Trạng thái đầu ra là một sự chồng chập của |00> và |11> với xác suất mỗi trạng thái khoảng 50%, cho thấy hai qubit đã bị vướng víu.',
      },
    ],
    realWorldApplications: [
      'Nền tảng cho mọi thuật toán lượng tử.',
      'Sửa lỗi lượng tử (Quantum Error Correction).',
      'Mô phỏng các hệ thống vật lý.',
    ],
    vietnamContext: {
      title: 'Giảng dạy Toán và Lý cho Kỷ nguyên Lượng tử',
      content: [
        'Chương trình giáo dục đại học ở Việt Nam cần cập nhật, nhấn mạnh hơn vào Đại số tuyến tính và các khái niệm vật lý hiện đại để chuẩn bị cho sinh viên.',
        'Các công cụ giả lập trực tuyến như IBM Quantum Experience là tài nguyên quý giá cho sinh viên Việt Nam để thực hành mà không cần phần cứng đắt tiền.',
      ],
    },
    careerConnect: {
      name: 'Bạn Trần Thị Bích',
      title: 'Sinh viên ngành Vật lý Kỹ thuật',
      company: 'Đại học Bách Khoa Hà Nội',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-thi-bich',
      quote:
        'Lúc đầu, các ma trận và vector có vẻ trừu tượng, nhưng khi thấy chúng biến đổi trạng thái của qubit trên khối cầu Bloch, tôi thực sự bị cuốn hút. Nó giống như học một ngôn ngữ mới để nói chuyện với tự nhiên ở cấp độ cơ bản nhất.',
    },
    quizzes: [
      {
        question: 'Cổng Hadamard (H) làm gì với một qubit ở trạng thái |0>?',
        options: [
          'Lật nó thành |1>',
          'Không làm gì cả',
          'Tạo ra một trạng thái chồng chập của |0> và |1>',
          'Đo lường qubit',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Cổng Hadamard là cổng lượng tử cơ bản dùng để tạo ra trạng thái chồng chập. Khi tác động lên |0>, nó tạo ra trạng thái |+> = (|0> + |1>)/sqrt(2).',
      },
      {
        question: 'Cổng CNOT (Controlled-NOT) cần bao nhiêu qubit để hoạt động?',
        options: ['1', '2', '3', '4'],
        correctAnswerIndex: 1,
        explanation:
          'CNOT là một cổng hai qubit, bao gồm một qubit điều khiển (control) và một qubit mục tiêu (target). Nó lật qubit mục tiêu nếu qubit điều khiển là |1>.',
      },
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
    prerequisites: ['Hoàn thành bài "Qubit và các Cổng Lượng tử".', 'Hiểu biết về các trạng thái Bell.'],
    exercises: [
      {
        title: 'Mô phỏng Giao thức Dịch chuyển Lượng tử',
        description:
          'Sử dụng trình giả lập để dịch chuyển trạng thái của một qubit từ Alice đến Bob bằng cách sử dụng một cặp qubit vướng víu.',
        difficulty: 'Nâng cao',
        materials: ['Trình giả lập mạch lượng tử.'],
        procedure: [
          'Chuẩn bị 3 qubit: một qubit |ψ> cần dịch chuyển (của Alice), và một cặp Bell |β00> (một cho Alice, một cho Bob).',
          'Alice thực hiện phép toán CNOT và Hadamard trên qubit của cô ấy.',
          'Alice đo hai qubit của mình và gửi kết quả (2 bit cổ điển) cho Bob.',
          'Dựa trên kết quả của Alice, Bob áp dụng các cổng X và/hoặc Z tương ứng lên qubit của mình.',
        ],
        expectedResults:
          'Qubit của Bob sẽ ở trạng thái |ψ>, giống hệt trạng thái ban đầu của qubit của Alice, chứng tỏ dịch chuyển đã thành công.',
      },
    ],
    realWorldApplications: [
      'Mạng lượng tử và Internet lượng tử.',
      'Phân phối khóa lượng tử (Quantum Key Distribution) cho truyền thông bảo mật.',
      'Tính toán lượng tử phân tán.',
    ],
    vietnamContext: {
      title: 'An ninh Mạng trong Kỷ nguyên Lượng tử',
      content: [
        'Khi máy tính lượng tử đủ mạnh, chúng có thể phá vỡ các hệ thống mã hóa hiện tại (như RSA). Việt Nam, với nền kinh tế số đang phát triển, sẽ phải đối mặt với thách thức an ninh này.',
        'Nghiên cứu về Mật mã Lượng tử (Quantum Cryptography) và Phân phối Khóa Lượng tử (QKD) là một hướng đi quan trọng để đảm bảo an ninh quốc gia trong tương lai.',
      ],
    },
    careerConnect: {
      name: 'Tiến sĩ Lê Hoàng Nam',
      title: 'Chuyên gia An ninh Mạng',
      company: 'Ban Cơ yếu Chính phủ',
      imageUrl: 'https://i.pravatar.cc/150?u=le-hoang-nam',
      quote:
        'Vướng víu lượng tử không chỉ là một khái niệm vật lý kỳ lạ, nó là nền tảng cho thế hệ tiếp theo của công nghệ bảo mật. Chúng tôi đang nghiên cứu cách sử dụng chính các định luật của vật lý lượng tử để tạo ra những kênh truyền thông không thể bị nghe lén.',
    },
    quizzes: [
      {
        question:
          'Trong một cặp qubit vướng víu, nếu đo một qubit ở trạng thái |0>, trạng thái của qubit còn lại sẽ là gì ngay lập tức?',
        options: ['|0>', '|1>', 'Trạng thái chồng chập', 'Phụ thuộc vào trạng thái ban đầu của nó'],
        correctAnswerIndex: 0,
        explanation:
          'Trong trạng thái Bell |β00> = (|00> + |11>)/sqrt(2), nếu một qubit được đo là |0>, qubit còn lại chắc chắn sẽ là |0> ngay lập tức, và ngược lại.',
      },
      {
        question: 'Dịch chuyển lượng tử có vi phạm giới hạn tốc độ ánh sáng không?',
        options: [
          'Có, nó truyền thông tin tức thời',
          'Không, vì nó cần một kênh truyền thông cổ điển',
          'Chỉ trong một số trường hợp',
          'Chưa ai biết chắc',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Dịch chuyển lượng tử không thể dùng để truyền thông tin nhanh hơn ánh sáng vì nó yêu cầu Alice phải gửi kết quả đo của mình cho Bob qua một kênh cổ điển (vốn bị giới hạn bởi tốc độ ánh sáng).',
      },
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
    prerequisites: ['Hoàn thành các bài học trước.', 'Kiến thức cơ bản về lý thuyết số và độ phức tạp thuật toán.'],
    exercises: [
      {
        title: 'Phân tích bài toán tìm kiếm',
        description:
          'So sánh số bước cần thiết để tìm một mục trong danh sách N mục bằng thuật toán cổ điển và thuật toán Grover.',
        difficulty: 'Trung bình',
        procedure: [
          'Tính số phép toán trung bình và tệ nhất cho tìm kiếm tuyến tính cổ điển (O(N)).',
          'Viết ra độ phức tạp của thuật toán Grover (O(sqrt(N))).',
          'Tính toán lợi thế tốc độ cho N = 1 triệu, N = 1 tỷ.',
        ],
        expectedResults:
          'Hiểu rõ lợi thế tốc độ bậc hai (quadratic speedup) của thuật toán Grover so với thuật toán cổ điển tốt nhất.',
      },
    ],
    realWorldApplications: [
      'Thuật toán Shor: Phá vỡ mã hóa RSA, nền tảng của an ninh Internet hiện tại.',
      'Thuật toán Grover: Tăng tốc giải quyết các bài toán tối ưu hóa và tìm kiếm, ví dụ như trong lĩnh vực AI và logistics.',
      'Mô phỏng các hệ thống lượng tử phức tạp.',
    ],
    vietnamContext: {
      title: 'Thách thức và Cơ hội cho ngành Tài chính - Ngân hàng',
      content: [
        'Hệ thống ngân hàng và tài chính Việt Nam hiện đang dựa trên mã hóa RSA. Sự ra đời của máy tính lượng tử đủ mạnh sẽ là một mối đe dọa an ninh nghiêm trọng.',
        'Mặt khác, các thuật toán tối ưu hóa lượng tử có thể giúp các ngân hàng Việt Nam quản lý rủi ro, tối ưu hóa danh mục đầu tư và phát hiện gian lận hiệu quả hơn.',
      ],
    },
    careerConnect: {
      name: 'Anh Phạm Tuấn Anh',
      title: 'Chuyên gia R&D',
      company: 'Ngân hàng Techcombank',
      imageUrl: 'https://i.pravatar.cc/150?u=pham-tuan-anh',
      quote:
        'Chúng tôi phải đi trước một bước. Việc nghiên cứu về "mật mã hậu lượng tử" (post-quantum cryptography) không còn là khoa học viễn tưởng, mà là một yêu cầu cấp thiết để bảo vệ tài sản của khách hàng và sự ổn định của hệ thống tài chính trong thập kỷ tới.',
    },
    quizzes: [
      {
        question: 'Thuật toán Shor có khả năng giải quyết hiệu quả bài toán nào mà máy tính cổ điển không thể?',
        options: [
          'Sắp xếp một danh sách',
          'Nhân hai số lớn',
          'Phân tích một số lớn ra thừa số nguyên tố',
          'Tìm đường đi ngắn nhất trong đồ thị',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Thuật toán Shor có thể phân tích một số nguyên tố trong thời gian đa thức, trong khi thuật toán cổ điển tốt nhất cần thời gian siêu đa thức, khiến nó trở nên bất khả thi với các số lớn.',
      },
      {
        question: 'Thuật toán Grover mang lại lợi thế tốc độ như thế nào so với tìm kiếm cổ điển?',
        options: [
          'Tốc độ gấp đôi',
          'Tốc độ lũy thừa (Exponential speedup)',
          'Tốc độ bậc hai (Quadratic speedup)',
          'Không có lợi thế tốc độ',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Thuật toán Grover có thể tìm một mục trong N mục với khoảng sqrt(N) bước, so với N/2 bước trung bình của tìm kiếm cổ điển. Đây được gọi là lợi thế tốc độ bậc hai.',
      },
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
    prerequisites: ['Kinh nghiệm lập trình Python.', 'Tài khoản IBM Quantum Experience (miễn phí).'],
    exercises: [
      {
        title: 'Hello, Quantum World!',
        description:
          'Tạo một trạng thái Bell, chạy trên cả trình giả lập và một máy tính lượng tử thực, sau đó so sánh kết quả.',
        difficulty: 'Trung bình',
        materials: ['Python, Jupyter Notebook, Qiskit, tài khoản IBM Quantum.'],
        procedure: [
          'Import các thư viện cần thiết từ Qiskit.',
          'Tạo một QuantumCircuit với 2 qubit và 2 classical bit.',
          'Áp dụng cổng H lên qubit 0 và CNOT với control là 0, target là 1.',
          'Thêm phép đo vào mạch.',
          'Chạy mạch trên `qasm_simulator` và vẽ biểu đồ kết quả.',
          'Chọn một backend máy tính lượng tử thực (ví dụ: `ibmq_lima`), gửi job và chờ kết quả.',
          'So sánh biểu đồ kết quả từ giả lập và từ máy thật, nhận xét về sự khác biệt do nhiễu.',
        ],
        expectedResults:
          'Thành công trong việc chạy một mạch lượng tử trên cả giả lập và phần cứng thực. Kết quả từ máy thật sẽ có một tỷ lệ nhỏ các trạng thái 01 và 10 do nhiễu, trong khi giả lập chỉ cho 00 và 11.',
      },
    ],
    realWorldApplications: [
      'Nghiên cứu và phát triển các thuật toán lượng tử mới.',
      'Kiểm tra các lý thuyết vật lý lượng tử.',
      'Giáo dục và đào tạo thế hệ các nhà khoa học lượng tử tiếp theo.',
    ],
    vietnamContext: {
      title: 'Cơ hội cho Lập trình viên Việt Nam',
      content: [
        'Với các nền tảng cloud như IBM Quantum, các lập trình viên Việt Nam có thể tiếp cận và thực hành trên các máy tính lượng tử hàng đầu thế giới mà không cần đầu tư phần cứng.',
        'Kỹ năng lập trình Python là một lợi thế lớn, vì hầu hết các framework lượng tử lớn (Qiskit, Cirq, PennyLane) đều dựa trên Python.',
        'Các cuộc thi và hackathon về lập trình lượng tử trực tuyến là cơ hội tốt để các tài năng trẻ Việt Nam cọ xát và học hỏi.',
      ],
    },
    careerConnect: {
      name: 'Bạn Lê Văn Cường',
      title: 'Lập trình viên Python',
      company: 'Tự do',
      imageUrl: 'https://i.pravatar.cc/150?u=le-van-cuong',
      quote:
        'Tôi chưa bao giờ nghĩ mình có thể điều khiển một máy tính lượng tử từ căn phòng của mình ở Đà Nẵng. Qiskit và IBM Quantum đã mở ra một thế giới hoàn toàn mới. Việc thấy kết quả chạy trên một cỗ máy thực sự, dù có nhiễu, là một trải nghiệm vô cùng phấn khích.',
    },
    quizzes: [
      {
        question: 'Qiskit là một framework mã nguồn mở được phát triển bởi công ty nào?',
        options: ['Google', 'Microsoft', 'IBM', 'Amazon'],
        correctAnswerIndex: 2,
        explanation:
          'Qiskit (Quantum Information Science Kit) là một SDK mã nguồn mở được phát triển và hậu thuẫn bởi IBM để làm việc với các máy tính lượng tử.',
      },
      {
        question: 'Tại sao kết quả từ một máy tính lượng tử thực thường khác với trình giả lập?',
        options: [
          'Do lỗi lập trình',
          'Do nhiễu (noise) trong hệ thống lượng tử',
          'Do trình giả lập không chính xác',
          'Do tốc độ mạng',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Các qubit rất nhạy cảm với môi trường xung quanh, gây ra hiện tượng "nhiễu" làm thay đổi trạng thái của chúng và dẫn đến sai sót trong tính toán. Đây là một trong những thách thức lớn nhất của điện toán lượng tử hiện nay.',
      },
    ],
  },
];
