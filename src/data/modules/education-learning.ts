import { BaseLessonData } from '@/types/lesson-base';

export interface EducationLearningLesson extends BaseLessonData {
  learningConcept?: string;
  pedagogy?: string;
  aiTool?: string;
  concepts: string[];
  tools: string[];
}

export const educationLearningLessons: EducationLearningLesson[] = [
  {
    id: 'ai-tutoring',
    title: 'Gia sư AI và Hỗ trợ Cá nhân hóa',
    description:
      'Khám phá cách các công cụ AI như Khanmigo và ChatGPT có thể trở thành người bạn đồng hành học tập, giúp bạn hiểu sâu các khái niệm khó và luyện tập hiệu quả.',
    duration: '60 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=rnIgnS8Sus4',
    imageUrl: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=400&h=400&fit=crop',
    objectives: [
      'Sử dụng AI để giải thích các khái niệm phức tạp bằng nhiều cách khác nhau.',
      'Tạo ra các bài tập và câu đố tùy chỉnh để tự kiểm tra kiến thức.',
      'Nhận phản hồi và hướng dẫn từng bước khi giải quyết vấn đề.',
      'Sử dụng AI để lên kế hoạch học tập và theo dõi tiến độ.',
    ],
    prerequisites: ['Tò mò và sẵn sàng học hỏi.'],
    concepts: ['Học tập thích ứng', 'Phản hồi tức thì', 'Cá nhân hóa giáo dục'],
    tools: ['Khanmigo (từ Khan Academy)', 'ChatGPT', 'Perplexity AI'],
    exercises: [
      {
        title: 'Giải thích khái niệm "Quang hợp"',
        description:
          'Sử dụng ChatGPT để hiểu sâu về quá trình quang hợp như thể bạn đang nói chuyện với một chuyên gia sinh học.',
        difficulty: 'Cơ bản',
        procedure: [
          'Hỏi ChatGPT: "Hãy giải thích quá trình quang hợp cho một học sinh lớp 8."',
          'Yêu cầu làm rõ: "Sự khác biệt giữa chu trình Calvin và phản ứng sáng là gì?"',
          'Yêu cầu một phép loại suy: "Hãy ví von quá trình quang hợp như một nhà máy sản xuất thức ăn."',
        ],
        expectedResults:
          'Một sự hiểu biết vững chắc và trực quan về quang hợp, vượt ra ngoài định nghĩa trong sách giáo khoa.',
      },
    ],
    realWorldApplications: [
      'Một học sinh gặp khó khăn với môn vật lý sử dụng Khanmigo để nhận các gợi ý và giải thích cho đến khi hiểu bài.',
      'Một sinh viên đại học sử dụng Perplexity AI để tìm và tóm tắt các bài báo nghiên cứu cho luận văn của mình.',
      'Một người tự học lập trình yêu cầu ChatGPT tạo ra các thử thách code nhỏ để luyện tập một khái niệm mới.',
    ],
    faqs: [
      {
        question: 'Khanmigo là gì và nó khác gì ChatGPT?',
        answer:
          'Khanmigo là một gia sư AI được phát triển bởi Khan Academy, được thiết kế đặc biệt cho mục đích giáo dục. Nó được tích hợp sâu với nội dung của Khan Academy và được lập trình để hướng dẫn bạn tự tìm ra câu trả lời (phương pháp Socrates) thay vì chỉ đưa ra đáp án.',
      },
      {
        question: 'Sử dụng gia sư AI có được coi là gian lận không?',
        answer:
          'Điều này phụ thuộc vào cách bạn sử dụng nó. Nếu bạn chỉ sao chép câu trả lời, đó là gian lận. Nếu bạn sử dụng nó như một công cụ để hiểu sâu hơn, để nhận gợi ý, hoặc để kiểm tra kiến thức của mình, thì đó là một hình thức học tập thông minh và hiệu quả.',
      },
      {
        question: 'Làm thế nào để AI có thể cá nhân hóa việc học?',
        answer:
          'AI có thể theo dõi các câu trả lời của bạn, xác định những lỗ hổng kiến thức và đề xuất các bài học hoặc bài tập phù hợp. Nó có thể điều chỉnh độ khó của câu hỏi dựa trên trình độ của bạn, tạo ra một lộ trình học tập riêng cho bạn.',
      },
      {
        question: 'Chi phí để sử dụng các gia sư AI này là bao nhiêu?',
        answer:
          'ChatGPT có phiên bản miễn phí mạnh mẽ. Perplexity AI cũng vậy. Khanmigo hiện đang được cung cấp thông qua một khoản quyên góp cho Khan Academy, nhưng mục tiêu của họ là cung cấp nó với chi phí thấp.',
      },
      {
        question: 'AI có thể giúp tôi chuẩn bị cho các kỳ thi không?',
        answer:
          'Rất tốt. Bạn có thể yêu cầu AI tạo ra một đề thi thử dựa trên một chủ đề cụ thể, chấm điểm câu trả lời của bạn, và giải thích tại sao một câu trả lời lại sai. Đây là một cách tuyệt vời để ôn tập và kiểm tra kiến thức.',
      },
      {
        question: 'AI có thể dạy tôi các kỹ năng thực hành như chơi guitar không?',
        answer:
          'Hiện tại, AI dựa trên văn bản và hình ảnh chưa phải là công cụ tốt nhất cho các kỹ năng vận động. Tuy nhiên, nó có thể cung cấp lý thuyết âm nhạc, hợp âm, và các bài tập. Các ứng dụng chuyên biệt khác có thể sử dụng camera để phân tích và đưa ra phản hồi về kỹ thuật của bạn.',
      },
      {
        question: 'Làm thế nào để bắt đầu sử dụng AI để học một ngôn ngữ mới?',
        answer:
          'Hãy bắt đầu bằng cách yêu cầu ChatGPT đóng vai một người bản xứ và thực hành các cuộc hội thoại hàng ngày. Bạn có thể yêu cầu nó sửa lỗi ngữ pháp và phát âm (thông qua văn bản) cho bạn. Các ứng dụng như Duolingo Max cũng tích hợp AI để giải thích câu trả lời và nhập vai.',
      },
      {
        question: 'AI có thể thay thế giáo viên con người không?',
        answer:
          'Không. AI là một công cụ hỗ trợ mạnh mẽ, nhưng nó không thể thay thế sự đồng cảm, sự truyền cảm hứng, và khả năng cố vấn của một giáo viên giỏi. Vai trò của giáo viên sẽ phát triển, tập trung nhiều hơn vào việc hướng dẫn, khuyến khích và phát triển các kỹ năng xã hội cho học sinh.',
      },
      {
        question: 'Làm thế nào để đảm bảo thông tin từ AI là chính xác?',
        answer:
          'Luôn kiểm tra chéo thông tin, đặc biệt là với các sự kiện và dữ liệu quan trọng. Sử dụng các công cụ như Perplexity AI, vốn trích dẫn nguồn thông tin của nó, có thể hữu ích. Hãy coi AI như một điểm khởi đầu cho việc nghiên cứu, không phải là nguồn chân lý cuối cùng.',
      },
      {
        question: 'AI có thể giúp tôi học các môn nghệ thuật và sáng tạo không?',
        answer:
          'Có. Bạn có thể yêu cầu AI phân tích một tác phẩm nghệ thuật, giải thích các trường phái hội họa, hoặc thậm chí là đưa ra các ý tưởng để bạn thực hành vẽ. Nó là một công cụ tuyệt vời để khám phá và lấy cảm hứng.',
      },
    ],
  },
  {
    id: 'ai-research-summarization',
    title: 'Nghiên cứu và Tóm tắt tài liệu với AI',
    description:
      'Học cách sử dụng các công cụ AI để nhanh chóng tiêu hóa một lượng lớn thông tin, từ các bài báo khoa học đến các chương sách dài.',
    duration: '45 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Tóm tắt các tệp PDF và các bài báo trực tuyến chỉ bằng một cú nhấp chuột.',
      'Đặt câu hỏi trực tiếp cho tài liệu và nhận câu trả lời có trích dẫn.',
      'So sánh và tổng hợp thông tin từ nhiều nguồn khác nhau.',
      'Tăng tốc độ nghiên cứu và tìm kiếm thông tin.',
    ],
    prerequisites: ['Biết cách tìm kiếm thông tin trực tuyến.'],
    concepts: ['Xử lý ngôn ngữ tự nhiên (NLP)', 'Tóm tắt văn bản', 'Tìm kiếm ngữ nghĩa'],
    tools: ['Perplexity AI', 'Consensus', 'SciSpace (Typeset.io)', 'Claude.ai'],
    exercises: [
      {
        title: 'Tóm tắt một bài báo khoa học',
        description:
          'Sử dụng Consensus để tìm và tóm tắt các kết quả chính từ các bài báo khoa học về một chủ đề cụ thể.',
        difficulty: 'Trung bình',
        procedure: [
          'Truy cập trang web của Consensus (consensus.app).',
          'Nhập một câu hỏi nghiên cứu, ví dụ: "Does intermittent fasting improve metabolism?" (Ăn chay gián đoạn có cải thiện trao đổi chất không?).',
          'Xem lại các kết quả được tóm tắt từ các bài báo khoa học, với các trích dẫn và chỉ số về mức độ tin cậy của nghiên cứu.',
        ],
        expectedResults:
          'Một bản tóm tắt các phát hiện chính từ cộng đồng khoa học về câu hỏi của bạn, giúp bạn tiết kiệm hàng giờ đọc tài liệu.',
      },
    ],
    realWorldApplications: [
      'Một nhà nghiên cứu nhanh chóng nắm bắt được các xu hướng mới nhất trong lĩnh vực của họ.',
      'Một luật sư tóm tắt các tài liệu pháp lý dài hàng trăm trang.',
      'Một nhà báo kiểm tra và tổng hợp thông tin từ nhiều báo cáo khác nhau cho một bài viết.',
    ],
    faqs: [
      {
        question: 'Sự khác biệt giữa Perplexity AI và Google là gì?',
        answer:
          'Google là một công cụ tìm kiếm, nó trả về một danh sách các liên kết. Perplexity AI là một "công cụ trả lời". Nó tìm kiếm trên web, đọc các nguồn thông tin và sau đó viết một câu trả lời tổng hợp cho bạn, kèm theo các trích dẫn đến nguồn mà nó đã sử dụng.',
      },
      {
        question: 'Consensus là gì và tại sao nó hữu ích cho nghiên cứu khoa học?',
        answer:
          'Consensus là một công cụ tìm kiếm được thiết kế đặc biệt để tìm kiếm trong hơn 200 triệu bài báo khoa học. Nó sử dụng AI để trích xuất các phát hiện chính liên quan đến câu hỏi của bạn, giúp bạn nhanh chóng có được một cái nhìn tổng quan dựa trên bằng chứng.',
      },
      {
        question: 'Tôi có thể tải lên tệp PDF của riêng mình để AI tóm tắt không?',
        answer:
          'Chắc chắn. Các công cụ như SciSpace và Claude.ai cho phép bạn tải lên các tệp PDF (bài báo, sách, báo cáo) và sau đó bạn có thể "trò chuyện" với tài liệu đó: đặt câu hỏi, yêu cầu tóm tắt các phần cụ thể, hoặc giải thích các bảng biểu.',
      },
      {
        question: 'Bản tóm tắt của AI có đáng tin cậy không?',
        answer:
          'AI ngày càng tốt hơn trong việc tóm tắt, nhưng nó vẫn có thể bỏ sót các chi tiết tinh vi hoặc hiểu sai ngữ cảnh. Luôn sử dụng bản tóm tắt như một công cụ để quyết định xem tài liệu đó có đáng để đọc kỹ hơn hay không, chứ không nên thay thế hoàn toàn việc đọc.',
      },
      {
        question: 'Làm thế nào để AI giúp tôi so sánh các nguồn thông tin?',
        answer:
          'Bạn có thể mở nhiều tài liệu trong một công cụ như SciSpace hoặc cung cấp nhiều liên kết cho Perplexity và đặt câu hỏi như: "Dựa trên các nguồn này, hãy so sánh ưu và nhược điểm của phương pháp X và Y".',
      },
      {
        question: 'Các công cụ này có miễn phí không?',
        answer:
          'Hầu hết các công cụ này đều có các gói miễn phí rất hữu ích. Gói miễn phí có thể giới hạn số lượng tài liệu bạn có thể tải lên hoặc số lượng câu hỏi bạn có thể hỏi mỗi ngày. Các gói trả phí cung cấp quyền truy cập không giới hạn.',
      },
      {
        question: 'AI có thể giúp tôi kiểm tra độ tin cậy của một nguồn không?',
        answer:
          'Một cách gián tiếp. Các công cụ như Consensus hiển thị thông tin về tạp chí xuất bản và số lần trích dẫn, giúp bạn đánh giá tầm ảnh hưởng của một nghiên cứu. Perplexity trích dẫn nguồn rõ ràng, cho phép bạn tự mình kiểm tra.',
      },
      {
        question: 'Làm thế nào để trích dẫn nguồn khi sử dụng thông tin từ các công cụ này?',
        answer:
          'Không bao giờ trích dẫn chính công cụ AI. Hãy luôn đi đến nguồn gốc mà AI đã sử dụng (bài báo, báo cáo) và trích dẫn trực tiếp từ đó. Các công cụ này là để tìm kiếm và hiểu, không phải để làm nguồn trích dẫn.',
      },
      {
        question: 'AI có thể hiểu được các biểu đồ và bảng trong tài liệu không?',
        answer:
          'Các mô hình AI mới nhất (như của SciSpace và Claude 3) đang ngày càng tốt hơn trong việc phân tích và giải thích các biểu đồ, bảng và hình ảnh trong tài liệu, cho phép bạn đặt câu hỏi trực tiếp về chúng.',
      },
      {
        question: 'Công cụ nào là tốt nhất để bắt đầu?',
        answer:
          'Hãy bắt đầu với Perplexity AI. Giao diện của nó rất đơn giản và nó ngay lập tức cho thấy sự khác biệt giữa việc "tìm kiếm" và việc "nhận câu trả lời". Nó rất hữu ích cho các câu hỏi hàng ngày và nghiên cứu sơ bộ.',
      },
    ],
  },
];
