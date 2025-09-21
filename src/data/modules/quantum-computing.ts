import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

export interface QuantumComputingLesson extends BaseLessonData {
  videoUrl?: string;
  imageUrl?: string;
}

const lessons: QuantumComputingLesson[] = [
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
    prerequisites: [],
    exercises: [],
    realWorldApplications: [
      'Mô phỏng phân tử để phát triển thuốc mới.',
      'Tối ưu hóa các hệ thống phức tạp (logistics, tài chính).',
      'Phá vỡ các hệ thống mã hóa hiện tại.',
      'Phát triển các loại vật liệu mới với đặc tính mong muốn.',
    ],
    faqs: [
      {
        question: 'Điện toán lượng tử có phải là sẽ thay thế hoàn toàn máy tính cổ điển không?',
        answer: 'Không. Máy tính lượng tử được thiết kế để giải quyết các loại bài toán cụ thể mà máy tính cổ điển không thể xử lý hiệu quả. Máy tính cổ điển vẫn sẽ tốt hơn cho các tác vụ hàng ngày như lướt web, gửi email, hoặc chơi game.'
      },
      {
        question: 'Qubit là gì và nó khác gì so với bit?',
        answer: 'Một bit cổ điển chỉ có thể là 0 hoặc 1. Một qubit, nhờ vào nguyên lý chồng chập, có thể tồn tại ở trạng thái 0, 1, hoặc cả hai cùng một lúc. Khả năng này cho phép máy tính lượng tử xử lý một lượng thông tin lớn hơn theo cấp số nhân.'
      },
      {
        question: 'Chồng chập (superposition) có nghĩa là gì?',
        answer: 'Chồng chập là khả năng một hệ lượng tử (như một qubit) tồn tại ở nhiều trạng thái khác nhau cùng một lúc. Chỉ khi chúng ta đo lường nó, nó mới "sụp đổ" về một trong các trạng thái cơ bản (0 hoặc 1).'
      },
      {
        question: 'Vướng víu (entanglement) là gì?',
        answer: 'Vướng víu là một mối liên kết bí ẩn giữa hai hoặc nhiều qubit. Khi các qubit bị vướng víu, trạng thái của một qubit sẽ ngay lập tức ảnh hưởng đến trạng thái của các qubit khác, bất kể chúng ở cách xa nhau bao nhiêu. Einstein gọi đây là "hành động ma quái ở khoảng cách xa".'
      },
      {
        question: 'Tại sao chúng ta cần máy tính lượng tử?',
        answer: 'Nhiều vấn đề trong tự nhiên, như mô phỏng phân tử cho y học hoặc thiết kế vật liệu mới, quá phức tạp đối với máy tính mạnh nhất hiện nay. Máy tính lượng tử hoạt động theo các quy luật của vật lý lượng tử, giống như chính các phân tử đó, nên chúng có thể mô phỏng các hệ thống này một cách tự nhiên và hiệu quả.'
      },
      {
        question: 'Máy tính lượng tử có thực sự tồn tại chưa?',
        answer: 'Có, nhưng chúng vẫn đang ở giai đoạn đầu. Các công ty như IBM, Google, và Rigetti đã xây dựng các máy tính lượng tử với hàng chục đến hàng trăm qubit. Tuy nhiên, chúng vẫn còn bị ảnh hưởng bởi "nhiễu" và chưa đủ mạnh để giải quyết các vấn đề thực tế quy mô lớn.'
      },
      {
        question: 'Học điện toán lượng tử có khó không?',
        answer: 'Nó đòi hỏi một số kiến thức về toán học (đặc biệt là đại số tuyến tính) và vật lý, và các khái niệm của nó có thể phản trực giác. Tuy nhiên, với nhiều tài nguyên học tập và các công cụ lập trình như Qiskit, việc bắt đầu học đã trở nên dễ tiếp cận hơn bao giờ hết.'
      },
      {
        question: 'Điện toán lượng tử có thể giúp tạo ra AI mạnh hơn không?',
        answer: 'Có tiềm năng. Các thuật toán học máy lượng tử có thể tăng tốc độ xử lý các bài toán tối ưu hóa và nhận dạng mẫu, vốn là cốt lõi của nhiều ứng dụng AI. Đây là một lĩnh vực nghiên cứu rất tích cực.'
      },
      {
        question: 'Khi nào tôi có thể mua một chiếc máy tính lượng tử cá nhân?',
        answer: 'Có lẽ sẽ còn rất lâu nữa. Máy tính lượng tử hiện tại đòi hỏi các điều kiện vận hành cực kỳ nghiêm ngặt (nhiệt độ gần độ không tuyệt đối, cách ly khỏi môi trường) và rất đắt đỏ. Mô hình hiện tại là truy cập chúng thông qua dịch vụ đám mây.'
      },
      {
        question: 'Việc đo lường một qubit có ý nghĩa gì?',
        answer: 'Đo lường là hành động trích xuất thông tin cổ điển (0 hoặc 1) từ một qubit. Quá trình này phá vỡ trạng thái chồng chập của qubit, buộc nó phải chọn một trạng thái xác định. Đây là một khái niệm cơ bản và cũng là một thách thức trong điện toán lượng tử.'
      }
    ]
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
    prerequisites: [],
    exercises: [],
    realWorldApplications: [
      'Nền tảng cho mọi thuật toán lượng tử.',
      'Sửa lỗi lượng tử (Quantum Error Correction).',
      'Mô phỏng các hệ thống vật lý.',
    ],
    faqs: [
      {
        question: 'Khối cầu Bloch (Bloch Sphere) là gì?',
        answer: 'Khối cầu Bloch là một công cụ hình học để biểu diễn trạng thái của một qubit. Mọi điểm trên bề mặt của khối cầu tương ứng với một trạng thái qubit thuần túy. Cực Bắc biểu diễn trạng thái |0⟩ và Cực Nam biểu diễn trạng thái |1⟩.'
      },
      {
        question: 'Cổng lượng tử (quantum gate) là gì?',
        answer: 'Tương tự như các cổng logic (AND, OR, NOT) trong máy tính cổ điển, cổng lượng tử là các phép toán cơ bản tác động lên một hoặc nhiều qubit. Chúng thay đổi trạng thái của qubit, ví dụ như quay trạng thái trên khối cầu Bloch.'
      },
      {
        question: 'Cổng Hadamard (H gate) làm gì?',
        answer: 'Cổng Hadamard là một trong những cổng quan trọng nhất. Nó đưa một qubit từ trạng thái cơ bản (|0⟩ hoặc |1⟩) vào trạng thái chồng chập cân bằng, nơi có xác suất 50% là 0 và 50% là 1 khi đo lường. Đây là bước đầu tiên trong nhiều thuật toán lượng tử.'
      },
      {
        question: 'Cổng Pauli-X hoạt động như thế nào?',
        answer: 'Cổng Pauli-X (hay cổng X) tương đương với cổng NOT trong máy tính cổ điển. Nó lật trạng thái của một qubit: |0⟩ thành |1⟩ và |1⟩ thành |0⟩. Trên khối cầu Bloch, nó tương ứng với một phép quay 180 độ quanh trục X.'
      },
      {
        question: 'Cổng CNOT có vai trò gì?',
        answer: 'CNOT (Controlled-NOT) là một cổng hai qubit. Nó lật trạng thái của qubit thứ hai (qubit mục tiêu) chỉ khi qubit thứ nhất (qubit điều khiển) ở trạng thái |1⟩. Cổng CNOT rất quan trọng vì nó được dùng để tạo ra và thao tác các trạng thái vướng víu.'
      },
      {
        question: 'Tại sao các cổng lượng tử phải có tính thuận nghịch (reversible)?',
        answer: 'Theo các định luật của cơ học lượng tử, sự tiến hóa của một hệ lượng tử đóng là thuận nghịch, nghĩa là bạn luôn có thể quay ngược lại trạng thái ban đầu. Điều này có nghĩa là mọi cổng lượng tử phải có một cổng nghịch đảo. Ví dụ, áp dụng cổng X hai lần sẽ đưa qubit về trạng thái ban đầu.'
      },
      {
        question: 'Mạch lượng tử (quantum circuit) là gì?',
        answer: 'Mạch lượng tử là một chuỗi các cổng lượng tử được áp dụng cho các qubit theo một trình tự nhất định. Nó là mô hình tính toán tiêu chuẩn trong điện toán lượng tử, tương tự như một sơ đồ mạch điện trong điện tử cổ điển.'
      },
      {
        question: 'Tôi có thể biểu diễn trạng thái của 2 qubit như thế nào?',
        answer: 'Trạng thái của 2 qubit được biểu diễn bằng một vector trong không gian 4 chiều. Các trạng thái cơ bản là |00⟩, |01⟩, |10⟩, và |11⟩. Một trạng thái tổng quát là sự chồng chập của cả bốn trạng thái này.'
      },
      {
        question: 'Sự khác biệt giữa cổng Z và cổng X là gì?',
        answer: 'Cổng X lật xác suất (biến |0⟩ thành |1⟩). Cổng Z không thay đổi xác suất đo lường ra 0 hay 1, nhưng nó thay đổi "pha" của trạng thái |1⟩. Sự thay đổi pha này vô hình trong một qubit đơn lẻ nhưng lại cực kỳ quan trọng khi các qubit tương tác với nhau.'
      },
      {
        question: 'Một bộ cổng lượng tử phổ quát (universal quantum gate set) là gì?',
        answer: 'Đó là một tập hợp các cổng lượng tử mà từ đó, bất kỳ phép toán lượng tử nào cũng có thể được xây dựng với độ chính xác mong muốn. Một ví dụ phổ biến là tập hợp các cổng Hadamard, T, và CNOT.'
      }
    ]
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
    prerequisites: [],
    exercises: [],
    realWorldApplications: [
      'Mạng lượng tử và Internet lượng tử.',
      'Phân phối khóa lượng tử (Quantum Key Distribution) cho truyền thông bảo mật.',
      'Tính toán lượng tử phân tán.',
    ],
    faqs: [
      {
        question: 'Vướng víu lượng tử có cho phép truyền thông tin nhanh hơn ánh sáng không?',
        answer: 'Không. Mặc dù sự tương quan giữa các qubit vướng víu là tức thời, nhưng bạn không thể sử dụng nó để gửi thông tin một cách có chủ đích nhanh hơn ánh sáng. Để giải mã thông tin từ qubit vướng víu, bạn vẫn cần một kênh liên lạc cổ điển (giới hạn bởi tốc độ ánh sáng).'
      },
      {
        question: 'Nghịch lý EPR là gì?',
        answer: 'Nghịch lý Einstein-Podolsky-Rosen (EPR) là một thí nghiệm tưởng tượng được thiết kế để chỉ ra sự không hoàn chỉnh của cơ học lượng tử. Einstein cho rằng vướng víu ngụ ý có "các biến ẩn" mà chúng ta chưa biết. Tuy nhiên, các thí nghiệm sau này (Bất đẳng thức Bell) đã chứng minh rằng không có biến ẩn cục bộ nào tồn tại và vướng víu là một đặc tính thực sự của tự nhiên.'
      },
      {
        question: 'Làm thế nào để tạo ra một cặp qubit vướng víu?',
        answer: 'Một cách phổ biến để tạo ra một trạng thái vướng víu (cụ thể là trạng thái Bell) là bắt đầu với hai qubit ở trạng thái |00⟩, sau đó áp dụng cổng Hadamard cho qubit đầu tiên, và tiếp theo là cổng CNOT với qubit đầu tiên làm qubit điều khiển và qubit thứ hai làm mục tiêu.'
      },
      {
        question: 'Dịch chuyển lượng tử (quantum teleportation) có giống như trong phim khoa học viễn tưởng không?',
        answer: 'Không hẳn. Dịch chuyển lượng tử không phải là dịch chuyển vật chất. Nó là quá trình truyền trạng thái lượng tử của một qubit từ nơi này đến nơi khác mà không di chuyển chính qubit đó. Trạng thái của qubit gốc bị phá hủy trong quá trình này.'
      },
      {
        question: 'Các bước chính của giao thức dịch chuyển lượng tử là gì?',
        answer: 'Giao thức cần 3 qubit: qubit A (cần dịch chuyển), qubit B (của người gửi), và qubit C (của người nhận). B và C được vướng víu với nhau. Người gửi thực hiện một phép đo chung trên A và B, sau đó gửi kết quả (2 bit cổ điển) cho người nhận. Người nhận dựa vào 2 bit này để áp dụng các cổng phù hợp lên qubit C, và qubit C sẽ biến thành trạng thái ban đầu của qubit A.'
      },
      {
        question: 'Tại sao vướng víu lại quan trọng cho điện toán lượng tử?',
        answer: 'Vướng víu là một nguồn tài nguyên quan trọng. Nó cho phép tạo ra các tương quan phức tạp giữa các qubit, là nền tảng cho sự tăng tốc lượng tử trong nhiều thuật toán. Nếu không có vướng víu, một máy tính lượng tử có thể được mô phỏng hiệu quả trên máy tính cổ điển.'
      },
      {
        question: 'Trạng thái Bell là gì?',
        answer: 'Trạng thái Bell là một tập hợp bốn trạng thái vướng víu tối đa cụ thể của hai qubit. Chúng là những ví dụ đơn giản nhất và quan trọng nhất của vướng víu lượng tử, thường được sử dụng làm nền tảng trong các giao thức truyền thông lượng tử.'
      },
      {
        question: 'Làm thế nào chúng ta biết rằng các qubit thực sự vướng víu?',
        answer: 'Các nhà khoa học kiểm tra điều này bằng cách thực hiện các phép đo trên các qubit và kiểm tra xem kết quả có vi phạm Bất đẳng thức Bell hay không. Nếu bất đẳng thức bị vi phạm, điều đó chứng tỏ các tương quan giữa các qubit mạnh hơn bất kỳ lý thuyết cổ điển nào có thể giải thích, và chúng thực sự vướng víu.'
      },
      {
        question: 'Vướng víu có dễ bị phá vỡ không?',
        answer: 'Có. Vướng víu là một trạng thái rất mong manh. Bất kỳ tương tác nào với môi trường bên ngoài (gọi là sự mất kết hợp - decoherence) cũng có thể phá vỡ mối liên kết vướng víu. Đây là một trong những thách thức lớn nhất trong việc xây dựng máy tính lượng tử ổn định.'
      },
      {
        question: 'Có thể vướng víu nhiều hơn hai qubit không?',
        answer: 'Chắc chắn rồi. Các trạng thái vướng víu nhiều qubit, như trạng thái GHZ (Greenberger-Horne-Zeilinger), tồn tại và rất quan trọng cho các thuật toán sửa lỗi lượng tử và các giao thức truyền thông phức tạp.'
      }
    ]
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
    prerequisites: [],
    exercises: [],
    realWorldApplications: [
      'Thuật toán Shor: Phá vỡ mã hóa RSA, nền tảng của an ninh Internet hiện tại.',
      'Thuật toán Grover: Tăng tốc giải quyết các bài toán tối ưu hóa và tìm kiếm, ví dụ như trong lĩnh vực AI và logistics.',
      'Mô phỏng các hệ thống lượng tử phức tạp.',
    ],
    faqs: [
      {
        question: 'Thuật toán Shor làm gì và tại sao nó lại nguy hiểm?',
        answer: 'Thuật toán Shor có thể phân tích một số nguyên lớn thành các thừa số nguyên tố một cách hiệu quả theo cấp số nhân so với thuật toán cổ điển tốt nhất. Vì sự an toàn của mã hóa RSA (được dùng trong hầu hết các giao dịch trực tuyến) dựa trên sự khó khăn của việc phân tích số nguyên tố, một máy tính lượng tử đủ lớn chạy thuật toán Shor có thể phá vỡ gần như toàn bộ an ninh mạng hiện tại.'
      },
      {
        question: 'Chúng ta có nên lo lắng về thuật toán Shor ngay bây giờ không?',
        answer: 'Chưa cần hoảng sợ. Các máy tính lượng tử hiện tại còn quá nhỏ và quá nhiều lỗi để chạy thuật toán Shor với các số đủ lớn để phá vỡ mã hóa thực tế. Tuy nhiên, các nhà nghiên cứu đang tích cực phát triển "mật mã hậu lượng tử" (post-quantum cryptography) để chuẩn bị cho tương lai.'
      },
      {
        question: 'Thuật toán Grover dùng để làm gì?',
        answer: 'Thuật toán Grover được dùng để tìm kiếm một mục cụ thể trong một cơ sở dữ liệu lớn, không có cấu trúc. Hãy tưởng tượng bạn đang tìm một cái tên trong một danh bạ điện thoại khổng lồ không được sắp xếp theo thứ tự abc.'
      },
      {
        question: 'Thuật toán Grover nhanh hơn tìm kiếm cổ điển bao nhiêu?',
        answer: 'Một tìm kiếm cổ điển trong cơ sở dữ liệu N mục sẽ mất trung bình N/2 lần thử. Thuật toán Grover chỉ cần khoảng √N (căn bậc hai của N) lần thử. Đây là một sự tăng tốc đáng kể (tăng tốc bậc hai - quadratic speedup), nhưng không phải là tăng tốc theo cấp số nhân như thuật toán Shor.'
      },
      {
        question: 'Sự tăng tốc lượng tử (quantum speedup) đến từ đâu?',
        answer: 'Nó đến từ sự kết hợp của chồng chập và giao thoa lượng tử. Chồng chập cho phép máy tính lượng tử khám phá nhiều khả năng cùng một lúc. Giao thoa lượng tử sau đó được sử dụng để khuếch đại xác suất của câu trả lời đúng và triệt tiêu xác suất của các câu trả lời sai.'
      },
      {
        question: 'Ngoài Shor và Grover, còn có những thuật toán lượng tử nào khác không?',
        answer: 'Có rất nhiều. Một số thuật toán quan trọng khác bao gồm thuật toán của Deutsch-Jozsa (một trong những ví dụ đầu tiên về tăng tốc lượng tử), các thuật toán mô phỏng lượng tử (để mô phỏng các hệ vật lý), và HHL (để giải các hệ phương trình tuyến tính), có ứng dụng trong học máy.'
      },
      {
        question: 'Tại sao thuật toán Grover không mang lại lợi thế theo cấp số nhân?',
        answer: 'Bản chất của bài toán tìm kiếm không có cấu trúc là có giới hạn về mặt lý thuyết. Đã được chứng minh rằng thuật toán Grover là tối ưu, và không có thuật toán lượng tử nào có thể giải quyết bài toán này nhanh hơn đáng kể so với mức tăng tốc bậc hai.'
      },
      {
        question: 'Thuật toán Shor có ứng dụng nào khác ngoài việc phá mã hóa không?',
        answer: 'Về cơ bản, thuật toán Shor giải quyết "bài toán tìm chu kỳ" (period-finding problem). Bài toán này có nhiều ứng dụng trong toán học và vật lý, không chỉ riêng việc phân tích thừa số nguyên tố.'
      },
      {
        question: 'Làm thế nào để một thuật toán lượng tử "đọc" được câu trả lời cuối cùng?',
        answer: 'Sau khi thực hiện các phép toán lượng tử, thuật toán kết thúc bằng một phép đo. Phép đo này làm sụp đổ trạng thái chồng chập thành một chuỗi bit cổ điển. Nhờ vào giao thoa lượng tử, chuỗi bit này có xác suất cao chính là câu trả lời cho bài toán.'
      },
      {
        question: 'Liệu có thể có những thuật toán lượng tử mới được phát hiện trong tương lai không?',
        answer: 'Chắc chắn. Lĩnh vực thuật toán lượng tử vẫn còn rất mới và đang phát triển nhanh chóng. Các nhà nghiên cứu trên khắp thế giới đang liên tục tìm kiếm các vấn đề mới mà máy tính lượng tử có thể giải quyết hiệu quả hơn máy tính cổ điển.'
      }
    ]
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
    prerequisites: [],
    exercises: [],
    realWorldApplications: [
      'Nghiên cứu và phát triển các thuật toán lượng tử mới.',
      'Kiểm tra các lý thuyết vật lý lượng tử.',
      'Giáo dục và đào tạo thế hệ các nhà khoa học lượng tử tiếp theo.',
    ],
    faqs: [
      {
        question: 'Qiskit là gì?',
        answer: 'Qiskit là một bộ công cụ phát triển phần mềm (SDK) mã nguồn mở để làm việc với máy tính lượng tử ở cấp độ mạch, xung và thuật toán. Nó được phát triển bởi IBM và sử dụng ngôn ngữ lập trình Python.'
      },
      {
        question: 'Tại sao lại dùng Python cho lập trình lượng tử?',
        answer: 'Python được chọn vì cú pháp đơn giản, dễ học và có một hệ sinh thái khoa học dữ liệu và tính toán khoa học khổng lồ. Điều này cho phép các nhà nghiên cứu và lập trình viên dễ dàng tích hợp các công cụ lượng tử vào quy trình làm việc hiện có của họ.'
      },
      {
        question: 'Tôi có cần một máy tính lượng tử để bắt đầu với Qiskit không?',
        answer: 'Không. Qiskit đi kèm với các trình giả lập (simulator) hiệu suất cao có thể chạy trên máy tính xách tay của bạn. Bạn có thể xây dựng và kiểm tra các mạch lượng tử của mình trên trình giả lập trước khi gửi chúng đến một thiết bị lượng tử thực.'
      },
      {
        question: 'Làm thế nào để chạy code của tôi trên một máy tính lượng tử thực của IBM?',
        answer: 'Bạn cần tạo một tài khoản miễn phí trên IBM Quantum Experience. Sau đó, bạn có thể sử dụng Qiskit để chọn một "backend" (một máy tính lượng tử cụ thể), gửi "job" (mạch lượng tử của bạn) đến nó, và nhận lại kết quả sau khi job được thực thi.'
      },
      {
        question: 'Tại sao kết quả từ máy tính lượng tử thực lại khác với trình giả lập?',
        answer: 'Máy tính lượng tử thực bị ảnh hưởng bởi "nhiễu" (noise) từ môi trường, gây ra lỗi trong tính toán. Trình giả lập lý tưởng không có nhiễu. Sự khác biệt này cho thấy những thách thức trong việc xây dựng phần cứng lượng tử ổn định. Qiskit cũng cung cấp các công cụ để mô phỏng nhiễu và giảm thiểu lỗi.'
      },
      {
        question: 'Một "job" trong Qiskit là gì?',
        answer: 'Một "job" là một yêu cầu thực thi được gửi đến một backend lượng tử. Nó chứa một hoặc nhiều mạch lượng tử và các thông số cấu hình, chẳng hạn như số lần lặp lại phép đo ("shots").'
      },
      {
        question: '"Shots" có nghĩa là gì?',
        answer: 'Vì kết quả của một phép đo lượng tử có tính xác suất, chúng ta cần chạy cùng một mạch nhiều lần và thu thập thống kê. "Shots" là số lần mạch được thực thi. Ví dụ, 1024 shots có nghĩa là mạch sẽ được chạy 1024 lần.'
      },
      {
        question: 'Ngoài Qiskit, còn có các framework lập trình lượng tử nào khác không?',
        answer: 'Có. Một số framework phổ biến khác bao gồm Cirq của Google, PennyLane của Xanadu (tập trung vào học máy lượng tử), và Q# của Microsoft (một ngôn ngữ lập trình riêng biệt tích hợp với .NET).'
      },
      {
        question: 'Các bước cơ bản để tạo một chương trình Qiskit là gì?',
        answer: 'Thông thường bao gồm 4 bước: 1. Xây dựng (Build): Tạo một mạch lượng tử và thêm các cổng. 2. Biên dịch (Compile): Dịch mạch của bạn thành các lệnh mà phần cứng cụ thể có thể chạy. 3. Chạy (Run): Gửi job đến backend (trình giả lập hoặc máy thật). 4. Phân tích (Analyze): Thu thập và xử lý kết quả.'
      },
      {
        question: 'Tôi có thể học Qiskit ở đâu?',
        answer: 'Nguồn tốt nhất là tài liệu chính thức của Qiskit, bao gồm sách giáo khoa Qiskit trực tuyến, các hướng dẫn chi tiết và các ví dụ code. Kênh YouTube của Qiskit cũng có nhiều video bài giảng và hội thảo rất hữu ích.'
      }
    ]
  },
];

export const quantumComputingModule: ModuleData = {
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
  prerequisites: [
    'Kiến thức cơ bản về đại số tuyến tính (vector, ma trận).',
    'Kinh nghiệm lập trình Python là một lợi thế.',
  ],
  projectIdeas: [
    'Mô phỏng thuật toán Grover để tìm kiếm một phần tử trong danh sách.',
    'Xây dựng một bộ tạo số ngẫu nhiên lượng tử thực sự.',
    'Triển khai giao thức dịch chuyển lượng tử (quantum teleportation) bằng Qiskit.',
  ],
  practicalApplications: [
    {
      name: 'Phát triển thuốc và vật liệu',
      description:
        'Mô phỏng chính xác các phân tử và phản ứng hóa học, giúp đẩy nhanh quá trình khám phá thuốc mới và thiết kế vật liệu với các đặc tính mong muốn.',
    },
    {
      name: 'Tài chính',
      description:
        'Tối ưu hóa danh mục đầu tư, định giá các công cụ tài chính phức tạp và quản lý rủi ro hiệu quả hơn.',
    },
    {
      name: 'Trí tuệ nhân tạo',
      description: 'Tăng tốc các thuật toán học máy, đặc biệt là trong các bài toán tối ưu hóa và nhận dạng mẫu.',
    },
    {
      name: 'An ninh mạng',
      description:
        'Phá vỡ các hệ thống mã hóa hiện tại (ví dụ: RSA) nhưng cũng cho phép tạo ra các phương thức truyền thông an toàn tuyệt đối (mật mã lượng tử).',
    },
  ],
};

export const quantumComputingLessons = lessons;
