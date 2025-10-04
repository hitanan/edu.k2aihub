import { BaseLessonData } from '@/types/lesson-base';
import { ModuleData } from '@/types';

export const aiCodingAssistantsLessons: BaseLessonData[] = [
  {
    id: 'what-are-ai-coding-assistants',
    title: 'Trợ lý lập trình AI là gì?',
    description:
      'Định nghĩa và cách hoạt động của các công cụ hỗ trợ lập trình dựa trên AI, được cung cấp bởi các Mô hình Ngôn ngữ Lớn (LLM) và được đào tạo trên kho mã nguồn mở khổng lồ.',
    duration: '15 phút',
    difficulty: 'Cơ bản',
    objectives: [
      'Hiểu định nghĩa về trợ lý lập trình AI.',
      'Biết cách chúng hoạt động ở mức độ cơ bản.',
      'Liệt kê các ví dụ phổ biến như GitHub Copilot và Cursor.',
    ],
    realWorldApplications: [
      'Tăng tốc độ viết mã hàng ngày.',
      'Tự động hóa việc tạo mã lặp đi lặp lại.',
      'Hỗ trợ học một ngôn ngữ lập trình hoặc framework mới.',
    ],
    exercises: [
      {
        title: 'Thảo luận về trải nghiệm',
        description:
          'Chia sẻ kinh nghiệm cá nhân của bạn (nếu có) với một trợ lý lập trình AI. Bạn đã sử dụng nó cho việc gì và cảm thấy nó hữu ích như thế nào?',
        difficulty: 'Cơ bản',
        expectedResults: 'Một cuộc thảo luận ngắn về các trường hợp sử dụng và lợi ích ban đầu của trợ lý AI.',
      },
    ],
  },
  {
    id: 'how-do-they-think',
    title: 'Chúng "suy nghĩ" như thế nào? (Tokens, Context & Index)',
    description:
      'Khám phá các khái niệm cốt lõi đằng sau cách LLM xử lý thông tin: tokens, cửa sổ ngữ cảnh (context window) và tầm quan trọng của việc lập chỉ mục (indexing) mã nguồn của bạn.',
    duration: '25 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Giải thích được token là gì và vai trò của nó.',
      'Hiểu khái niệm "cửa sổ ngữ cảnh" và giới hạn của nó.',
      'Phân biệt giữa lập chỉ mục cục bộ (local index) và từ xa (remote index).',
      'Hiểu tại sao việc lập chỉ mục lại quan trọng đối với "bộ nhớ dài hạn" của AI.',
    ],
    realWorldApplications: [
      'Tối ưu hóa các câu lệnh (prompts) để nhận được kết quả tốt hơn.',
      'Hiểu tại sao AI đôi khi "quên" các phần trước của cuộc trò chuyện.',
      'Đánh giá các công cụ AI dựa trên khả năng lập chỉ mục và xử lý ngữ cảnh của chúng.',
    ],
  },
  {
    id: 'core-benefits',
    title: 'Lợi ích chính cho lập trình viên',
    description:
      'Phân tích những lợi ích cốt lõi mà trợ lý AI mang lại, bao gồm tăng năng suất, cải thiện chất lượng mã, học hỏi nhanh hơn và giảm tải công việc trí óc.',
    duration: '15 phút',
    difficulty: 'Cơ bản',
    objectives: [
      'Liệt kê ít nhất 4 lợi ích chính của việc sử dụng trợ lý AI.',
      'Giải thích cách AI giúp cải thiện chất lượng mã.',
      'Mô tả cách các công cụ này có thể đẩy nhanh quá trình học và làm quen với dự án mới.',
    ],
    realWorldApplications: [
      'Hoàn thành dự án nhanh hơn deadline.',
      'Giảm số lượng lỗi cú pháp và lỗi logic đơn giản.',
      'Tự tin hơn khi làm việc với các thư viện hoặc API không quen thuộc.',
    ],
  },
  {
    id: 'core-functions-tour',
    title: 'Khám phá các chức năng cốt lõi',
    description:
      'Tổng quan về các khả năng chính của trợ lý lập trình AI, bao gồm hoàn thành và tạo mã, gỡ lỗi, tái cấu trúc, tạo unit test và tương tác bằng ngôn ngữ tự nhiên.',
    duration: '30 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Nhận biết các chức năng chính của một trợ lý AI hiện đại.',
      'Hiểu sự khác biệt giữa hoàn thành mã (code completion) và tạo mã (code generation).',
      'Mô tả cách AI có thể hỗ trợ trong việc gỡ lỗi và tái cấu trúc.',
    ],
    realWorldApplications: [
      'Sử dụng AI để tạo mã boilerplate.',
      'Khám phá các tính năng của một thư viện mới.',
      'Tạo các đoạn mã mẫu để thử nghiệm.',
    ],
    exercises: [
      {
        title: 'Tạo hàm bằng ngôn ngữ tự nhiên',
        description:
          'Viết một comment mô tả một hàm đơn giản (ví dụ: `// Viết một hàm Python nhận vào một danh sách số và trả về tổng của chúng`) và xem trợ lý AI tạo ra mã.',
        difficulty: 'Cơ bản',
        expectedResults: 'Mã nguồn Python cho hàm được yêu cầu, được tạo tự động bởi AI.',
      },
    ],
  },
  {
    id: 'debugging-and-refactoring',
    title: 'Debugging và Tái cấu trúc mã',
    description:
      'Đi sâu vào cách sử dụng AI để phát hiện lỗi, đề xuất sửa lỗi và cải thiện mã nguồn hiện có để dễ đọc và hiệu quả hơn.',
    duration: '20 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Sử dụng AI để xác định các lỗi tiềm ẩn trong một đoạn mã.',
      'Yêu cầu AI tái cấu trúc một hàm để cải thiện hiệu suất hoặc khả năng đọc.',
      'Sử dụng tính năng giải thích mã để hiểu các đoạn logic phức tạp.',
    ],
    realWorldApplications: [
      'Nhanh chóng tìm ra nguyên nhân gốc rễ của một bug.',
      'Dọn dẹp mã cũ (legacy code) một cách an toàn.',
      'Chuẩn hóa phong cách mã trong một dự án nhóm.',
    ],
  },
  {
    id: 'security-and-privacy',
    title: 'Bảo mật và Quyền riêng tư: Một cái nhìn quan trọng',
    description:
      'Thảo luận về những cân nhắc quan trọng nhất khi sử dụng AI: dữ liệu của bạn đi đâu, các vấn đề về sở hữu trí tuệ và nguy cơ AI tạo ra mã có lỗ hổng bảo mật.',
    duration: '20 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Hiểu các rủi ro tiềm ẩn về quyền riêng tư khi gửi mã lên dịch vụ đám mây.',
      'Nhận thức được tầm quan trọng của việc bảo vệ sở hữu trí tuệ.',
      'Biết rằng nhà phát triển là người chịu trách nhiệm cuối cùng về bảo mật của mã.',
    ],
    realWorldApplications: [
      'Đọc và hiểu chính sách bảo mật của một công cụ AI.',
      'Lựa chọn các công cụ cấp doanh nghiệp (enterprise-grade) để bảo vệ mã nguồn của công ty.',
      'Luôn thực hiện kiểm tra bảo mật cho mã do AI tạo ra.',
    ],
  },
  {
    id: 'best-practices',
    title: 'Các phương pháp hay nhất để sử dụng hiệu quả',
    description:
      'Học các chiến lược để tận dụng tối đa trợ lý AI: luôn xem xét mã, sử dụng nó như một công cụ thay vì một cái nạng, viết prompt rõ ràng và cung cấp đủ ngữ cảnh.',
    duration: '20 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Nắm vững nguyên tắc "Tin tưởng, nhưng xác minh".',
      'Học cách viết các prompt hiệu quả để có kết quả tốt nhất.',
      'Hiểu tầm quan trọng của việc cung cấp ngữ cảnh cho AI.',
      'Tuân thủ các chính sách của tổ chức về việc sử dụng AI.',
    ],
    realWorldApplications: [
      'Cải thiện chất lượng gợi ý của AI bằng cách mở các tệp liên quan.',
      'Sử dụng AI để học hỏi các mẫu thiết kế mới thay vì sao chép-dán một cách mù quáng.',
      'Tích hợp AI vào quy trình làm việc hàng ngày một cách có trách nhiệm.',
    ],
  },
  {
    id: 'configuration-and-setup',
    title: 'Cấu hình và Cài đặt',
    description:
      'Hướng dẫn từng bước cách cài đặt, xác thực và tùy chỉnh một tiện ích mở rộng trợ lý AI trong IDE của bạn, chẳng hạn như VS Code.',
    duration: '15 phút',
    difficulty: 'Cơ bản',
    objectives: [
      'Cài đặt thành công một tiện ích mở rộng trợ lý AI từ marketplace.',
      'Xác thực tài khoản để kích hoạt dịch vụ.',
      'Khám phá các tùy chọn cấu hình để cá nhân hóa trải nghiệm.',
    ],
    realWorldApplications: [
      'Cài đặt và kích hoạt GitHub Copilot trong VS Code.',
      'Tùy chỉnh các cài đặt cơ bản của trợ lý AI.',
      'Bật hoặc tắt các đề xuất tự động.',
    ],
    exercises: [
      {
        title: 'Cài đặt và cấu hình',
        description:
          'Thực hiện theo các bước để cài đặt GitHub Copilot (hoặc một công cụ tương tự) trong VS Code của bạn. Thử thay đổi một cài đặt, ví dụ như bật/tắt các đề xuất inline.',
        difficulty: 'Cơ bản',
        expectedResults: 'Tiện ích mở rộng AI được cài đặt và hoạt động trong IDE.',
      },
    ],
  },
  {
    id: 'limitations-and-future',
    title: 'Hạn chế và Tương lai phía trước',
    description:
      'Thảo luận về các hạn chế hiện tại của AI như "ảo giác" (hallucinations), kiến thức lỗi thời và thiên vị. Nhìn về tương lai với các AI Agent, trí thông minh toàn dự án và tương tác đa phương thức.',
    duration: '15 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Nhận biết các hạn chế phổ biến của các mô hình AI hiện tại.',
      'Hiểu khái niệm "AI Agent" và vai trò của nó trong tương lai.',
      'Hình dung về các khả năng trong tương lai của công nghệ này.',
    ],
    realWorldApplications: [
      'Kiểm tra chéo thông tin do AI cung cấp, đặc biệt là về các phiên bản thư viện mới.',
      'Chuẩn bị cho làn sóng công cụ phát triển tiếp theo dựa trên AI agent.',
      'Tham gia vào các cuộc thảo luận về tương lai của phát triển phần mềm.',
    ],
  },
];

export const aiCodingAssistantsModuleData: ModuleData = {
  id: 'ai-coding-assistants',
  title: 'Trợ lý lập trình AI',
  description:
    'Tìm hiểu sâu về các trợ lý lập trình AI, cách chúng hoạt động, lợi ích, các chức năng cốt lõi và cách sử dụng chúng một cách hiệu quả và an toàn.',
  category: 'Lập trình',
  icon: 'Code',
  color: 'blue',
  learningObjectives: [
    'Hiểu định nghĩa và cách hoạt động của các trợ lý lập trình AI.',
    'Nắm vững các khái niệm chính như token, context window và indexing.',
    'Nhận diện các lợi ích cốt lõi mà AI coding assistants mang lại cho lập trình viên.',
    'Sử dụng thành thạo các chức năng chính: hoàn thành mã, gỡ lỗi, tái cấu trúc và tạo unit test.',
    'Đánh giá các vấn đề về bảo mật và quyền riêng tư khi sử dụng công cụ AI.',
    'Áp dụng các phương pháp hay nhất để tối ưu hóa hiệu quả làm việc với AI.',
  ],
  prerequisites: [
    'Kiến thức cơ bản về lập trình.',
    'Kinh nghiệm sử dụng một môi trường phát triển tích hợp (IDE) như VS Code.',
  ],
  careerOpportunities: [
    'Lập trình viên phần mềm hiệu suất cao',
    'Kỹ sư DevOps',
    'Trưởng nhóm kỹ thuật',
    'Chuyên gia tự động hóa quy trình phát triển',
  ],
  relatedModules: ['python', 'game-development', 'digital-marketing'],
};

export default aiCodingAssistantsLessons;
