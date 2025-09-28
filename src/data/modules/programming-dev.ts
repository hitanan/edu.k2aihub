import { BaseLessonData } from '@/types/lesson-base';

export interface ProgrammingDevLesson extends BaseLessonData {
  technologies: string[];
  platforms: string[];
}

export const programmingDevLessons: ProgrammingDevLesson[] = [
  {
    id: 'github-copilot-mastery',
    title: 'Làm chủ GitHub Copilot',
    description:
      'Học cách sử dụng GitHub Copilot không chỉ như một công cụ tự động hoàn thành code, mà còn là một người trợ lý lập trình AI thực thụ.',
    duration: '75 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=8n2n_Gq0v_E',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f1a467f032f3?w=400&h=400&fit=crop',
    objectives: [
      'Sử dụng Copilot để tạo các hàm và class hoàn chỉnh từ comment.',
      'Học cách viết comment hiệu quả để hướng dẫn Copilot tạo code chính xác.',
      'Sử dụng Copilot để viết unit test và debug code.',
      'Khám phá các tính năng nâng cao như Copilot Chat và Copilot for PRs.',
    ],
    prerequisites: [
      'Kiến thức cơ bản về ít nhất một ngôn ngữ lập trình (ví dụ: Python, JavaScript).',
      'Đã cài đặt VS Code và extension GitHub Copilot.',
    ],
    technologies: ['GitHub Copilot', 'VS Code', 'Git'],
    platforms: ['Web Development', 'Data Science', 'Mobile App Development'],
    exercises: [
      {
        title: 'Tạo hàm bằng Comment',
        description: 'Thực hành viết một comment mô tả chức năng và xem Copilot tự động tạo ra một hàm hoàn chỉnh.',
        difficulty: 'Cơ bản',
        procedure: [
          'Trong một tệp JavaScript, viết comment: "// function to fetch user data from an API endpoint and return it as JSON".',
          'Quan sát Copilot đề xuất một hàm `fetchUserData` hoàn chỉnh.',
          'Chấp nhận và kiểm tra lại code được tạo ra.',
        ],
        expectedResults: 'Một hàm bất đồng bộ sử dụng `fetch` để lấy dữ liệu người dùng, có xử lý lỗi cơ bản.',
      },
    ],
    realWorldApplications: [
      'Một lập trình viên web tăng tốc độ xây dựng các component React.',
      'Một nhà khoa học dữ liệu nhanh chóng viết các kịch bản phân tích dữ liệu với Pandas.',
      'Một kỹ sư DevOps sử dụng Copilot để viết các tệp cấu hình YAML.',
    ],
    faqs: [
      {
        question: 'GitHub Copilot có miễn phí không?',
        answer:
          'GitHub Copilot là một dịch vụ trả phí. Tuy nhiên, nó miễn phí cho các sinh viên đã được xác minh, giáo viên và những người bảo trì các dự án mã nguồn mở phổ biến.',
      },
      {
        question: "Làm thế nào để viết comment 'thân thiện' với Copilot?",
        answer:
          'Hãy viết các comment rõ ràng, cụ thể và chi tiết. Thay vì `// a function`, hãy viết `// a function that takes a user ID, fetches user data from /api/users/:id, and returns the user object`. Càng nhiều chi tiết, Copilot càng tạo ra code chính xác.',
      },
      {
        question: 'Copilot có thể hiểu được code đã có trong dự án của tôi không?',
        answer:
          'Có. Copilot phân tích ngữ cảnh từ các tệp bạn đang mở để đưa ra các đề xuất phù hợp hơn với phong cách và các hàm đã có trong dự án của bạn.',
      },
      {
        question: 'Sử dụng Copilot có làm tôi lười suy nghĩ và giảm kỹ năng lập trình không?',
        answer:
          'Điều này phụ thuộc vào cách bạn sử dụng nó. Nếu bạn chỉ chấp nhận code mà không hiểu nó, kỹ năng của bạn có thể bị ảnh hưởng. Hãy coi Copilot là một công cụ để học hỏi và tăng tốc. Luôn đọc, hiểu và kiểm tra lại code mà nó tạo ra. Nó là một người trợ lý, không phải là người thay thế bạn.',
      },
      {
        question: 'Copilot có thể giúp tôi học một ngôn ngữ lập trình mới không?',
        answer:
          'Rất tốt. Khi bạn không chắc về cú pháp, bạn có thể viết mô tả bằng ngôn ngữ tự nhiên và xem Copilot chuyển nó thành code. Đây là một cách học rất trực quan và hiệu quả.',
      },
      {
        question: 'Copilot Chat là gì và nó khác gì so với Copilot thông thường?',
        answer:
          'Copilot thông thường đưa ra đề xuất code ngay trong trình soạn thảo. Copilot Chat cung cấp một giao diện trò chuyện nơi bạn có thể hỏi các câu hỏi về code, yêu cầu giải thích, tìm lỗi, hoặc thậm chí là lên kế hoạch cho các tính năng mới.',
      },
      {
        question: 'Code do Copilot tạo ra có an toàn và không có lỗi không?',
        answer:
          'Không phải lúc nào cũng vậy. Code do Copilot tạo ra có thể chứa lỗi, các phương pháp không tối ưu, hoặc thậm chí là các lỗ hổng bảo mật. Bạn, với tư cách là lập trình viên, luôn chịu trách nhiệm cuối cùng về chất lượng và sự an toàn của code.',
      },
      {
        question: 'Làm thế nào để Copilot giúp tôi viết Unit Test?',
        answer:
          "Sau khi viết một hàm, bạn có thể mở một tệp test và viết một comment như `// Unit tests for the 'calculateTotalPrice' function`. Copilot sẽ đề xuất các trường hợp kiểm thử khác nhau, bao gồm cả các trường hợp biên (edge cases).",
      },
      {
        question: "Copilot có 'ăn cắp' code từ các dự án khác không?",
        answer:
          'Copilot được huấn luyện trên một tập dữ liệu khổng lồ gồm các mã nguồn mở công khai. Nó học các mẫu và cấu trúc từ đó, chứ không sao chép trực tiếp. Tuy nhiên, trong một số trường hợp hiếm, nó có thể tạo ra một đoạn code giống hệt một đoạn code trong tập dữ liệu huấn luyện. GitHub đã thêm một bộ lọc để giảm thiểu khả năng này.',
      },
      {
        question: 'Tôi có thể sử dụng Copilot trong các IDE nào khác ngoài VS Code không?',
        answer:
          'Có. GitHub Copilot hỗ trợ một loạt các IDE phổ biến khác như JetBrains (IntelliJ, PyCharm...), Visual Studio và Neovim.',
      },
    ],
  },
  {
    id: 'ai-code-review',
    title: 'Review Code Nâng cao với AI',
    description:
      'Sử dụng các công cụ AI để tự động phát hiện các vấn đề tiềm ẩn, cải thiện chất lượng code và tối ưu hóa hiệu suất trong quá trình review code.',
    duration: '60 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Tích hợp các công cụ AI vào quy trình Pull Request (PR).',
      'Tự động phát hiện các lỗi logic, vấn đề hiệu suất và lỗ hổng bảo mật.',
      'Nhận các đề xuất cải thiện code tự động.',
      'Tập trung vào các vấn đề kiến trúc và logic phức tạp hơn trong quá trình review.',
    ],
    prerequisites: ['Kiến thức về Git và quy trình làm việc với Pull Request (hoặc Merge Request).'],
    technologies: ['GitHub Copilot for PRs', 'CodeRabbit', 'Sentry'],
    platforms: ['GitHub', 'GitLab', 'Bitbucket'],
    exercises: [
      {
        title: 'Sử dụng AI để Review một Pull Request',
        description:
          'Cài đặt một công cụ AI review code vào một repository và xem nó tự động bình luận trên một Pull Request mới.',
        difficulty: 'Trung bình',
        procedure: [
          'Chọn một repository cá nhân trên GitHub.',
          'Vào GitHub Marketplace và cài đặt ứng dụng CodeRabbit (có gói miễn phí).',
          'Tạo một nhánh mới, thực hiện một vài thay đổi (có thể cố tình tạo một lỗi nhỏ).',
          'Tạo một Pull Request mới.',
          'Quan sát bot CodeRabbit tự động review, phát hiện lỗi và đề xuất cách sửa.',
        ],
        expectedResults: 'Một bình luận tự động từ bot trên PR, chỉ ra các vấn đề và gợi ý code để cải thiện.',
      },
    ],
    realWorldApplications: [
      'Một nhóm phát triển giảm thời gian review code xuống 40%.',
      'Phát hiện một lỗ hổng bảo mật SQL injection trước khi code được merge.',
      'Một lập trình viên mới học được các best practice từ các đề xuất của AI.',
    ],
    faqs: [
      {
        question: 'AI có thể thay thế hoàn toàn việc review code của con người không?',
        answer:
          'Không. AI rất giỏi trong việc phát hiện các lỗi mẫu, vấn đề hiệu suất và các lỗ hổng phổ biến. Tuy nhiên, nó không thể hiểu được bối cảnh kinh doanh hoặc các yêu cầu kiến trúc phức tạp. Vai trò của con người là tập trung vào các khía cạnh đó, trong khi để AI xử lý các kiểm tra cấp thấp.',
      },
      {
        question: 'Các công cụ AI review code hoạt động như thế nào?',
        answer:
          'Khi một Pull Request được tạo, một webhook sẽ kích hoạt công cụ AI. Công cụ này sẽ phân tích sự thay đổi trong code (diff), so sánh với các mẫu lỗi phổ biến, phân tích luồng dữ liệu và đề xuất các cải tiến dựa trên hàng triệu dòng code mà nó đã học.',
      },
      {
        question: 'Công cụ AI review code nào là tốt nhất?',
        answer:
          'Có nhiều lựa chọn tốt. CodeRabbit và Sentry (Code Review) rất phổ biến và có các gói miễn phí mạnh mẽ. GitHub Copilot for Pull Requests là một tính năng mới đầy hứa hẹn được tích hợp sẵn trong GitHub. Lựa chọn phụ thuộc vào ngân sách và hệ sinh thái của bạn (GitHub, GitLab...).',
      },
      {
        question: 'Sử dụng AI review code có làm chậm quy trình CI/CD không?',
        answer:
          'Hầu hết các công cụ hiện đại được tối ưu hóa để chạy rất nhanh, thường chỉ mất một vài phút để review một PR. Lợi ích về việc phát hiện lỗi sớm thường lớn hơn nhiều so với sự chậm trễ nhỏ này.',
      },
      {
        question: 'Chi phí cho các công cụ này là bao nhiêu?',
        answer:
          'Nhiều công cụ như CodeRabbit và Sentry cung cấp các gói miễn phí cho các dự án cá nhân và mã nguồn mở. Đối với các đội ngũ thương mại, chi phí thường được tính dựa trên số lượng lập trình viên, khoảng 10-30 USD mỗi lập trình viên mỗi tháng.',
      },
      {
        question: 'AI có thể phát hiện được các lỗi logic phức tạp không?',
        answer:
          'Ngày càng tốt hơn. Các mô hình AI mới có thể theo dõi luồng dữ liệu qua nhiều tệp và hàm, giúp chúng phát hiện các lỗi logic tinh vi hơn. Tuy nhiên, đây vẫn là lĩnh vực mà con người vượt trội hơn.',
      },
      {
        question: 'Làm thế nào để tùy chỉnh các quy tắc review của AI?',
        answer:
          'Hầu hết các công cụ cho phép bạn tùy chỉnh. Bạn có thể tắt các loại kiểm tra nhất định mà bạn không quan tâm, hoặc thậm chí cung cấp các hướng dẫn riêng về phong cách code của nhóm bạn để AI tuân theo.',
      },
      {
        question: 'AI có thể giúp tối ưu hóa hiệu suất code không?',
        answer:
          'Có. AI có thể phát hiện các mẫu code không hiệu quả, chẳng hạn như các vòng lặp lồng nhau không cần thiết, các truy vấn cơ sở dữ liệu N+1, hoặc việc sử dụng các cấu trúc dữ liệu không phù hợp và đề xuất các phương án thay thế hiệu quả hơn.',
      },
      {
        question: 'Việc này có ý nghĩa gì đối với các lập trình viên trẻ?',
        answer:
          "Đây là một công cụ học tập tuyệt vời. Bằng cách xem các đề xuất từ AI, các lập trình viên trẻ có thể nhanh chóng học được các 'code smell' (mã có mùi), các best practice và các lỗi phổ biến cần tránh.",
      },
      {
        question: 'Làm thế nào để thuyết phục nhóm của tôi áp dụng AI review code?',
        answer:
          'Hãy bắt đầu bằng một dự án thử nghiệm nhỏ. Cài đặt một công cụ có gói miễn phí và để nhóm xem các kết quả thực tế. Thống kê thời gian tiết kiệm được và số lượng lỗi được phát hiện sớm. Dữ liệu thực tế là cách thuyết phục tốt nhất.',
      },
    ],
  },
];
