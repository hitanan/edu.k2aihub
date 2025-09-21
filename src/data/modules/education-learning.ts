import { BaseLessonData } from '@/types';

export const educationLearningLessons: BaseLessonData[] = [
  {
    id: 'ai-tutor',
    title: 'AI như gia sư cá nhân',
    duration: '50 phút',
    difficulty: 'Cơ bản',
    type: 'video',
    videoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID_HERE',
    description:
      'Khám phá cách sử dụng các công cụ AI làm gia sư ảo để giải thích các khái niệm phức tạp, trả lời câu hỏi và cá nhân hóa lộ trình học tập.',
    objectives: [
      'Hiểu vai trò của AI trong giáo dục cá nhân hóa.',
      'Sử dụng các nền tảng AI để hỗ trợ học tập.',
      'Tạo câu lệnh (prompt) hiệu quả để nhận được sự trợ giúp tốt nhất từ AI.',
      'Đánh giá ưu và nhược điểm của việc học với AI.',
    ],
    realWorldApplications: [
      'Học sinh, sinh viên tự học các môn khó.',
      'Người đi làm học kỹ năng mới theo tốc độ của riêng mình.',
      'Nghiên cứu và chuẩn bị cho các kỳ thi.',
    ],
    tags: ['AI trong giáo dục', 'học tập cá nhân hóa', 'gia sư ảo', 'công nghệ giáo dục'],
    faqs: [
      {
        question: 'Liệu AI có thể thay thế hoàn toàn giáo viên con người không?',
        answer:
          'Không. AI là một công cụ hỗ trợ mạnh mẽ, có thể cá nhân hóa việc học và giải đáp thắc mắc 24/7. Tuy nhiên, giáo viên con người vẫn không thể thiếu trong việc truyền cảm hứng, hướng dẫn kỹ năng mềm, và tạo ra một môi trường học tập tương tác, giàu cảm xúc.',
      },
      {
        question: 'Làm thế nào để đặt câu hỏi (prompt) hiệu quả cho AI gia sư?',
        answer:
          'Hãy cụ thể và cung cấp ngữ cảnh. Thay vì hỏi "Giải thích về quang hợp", hãy thử "Hãy giải thích quá trình quang hợp cho một học sinh lớp 7, sử dụng ví dụ về một cái cây trong vườn và vai trò của mặt trời, nước và không khí."',
      },
      {
        question: 'Sử dụng AI để làm bài tập có được coi là gian lận không?',
        answer:
          'Điều này phụ thuộc vào cách bạn sử dụng. Nếu bạn sao chép nguyên văn câu trả lời của AI, đó là gian lận. Nếu bạn sử dụng AI để hiểu khái niệm, tìm các nguồn tham khảo, hoặc kiểm tra lại ý tưởng của mình, đó là một cách học tập thông minh và hiệu quả.',
      },
      {
        question: 'Các công cụ AI gia sư phổ biến hiện nay là gì?',
        answer:
          'Một số công cụ nổi bật bao gồm ChatGPT (với các prompt được thiết kế cho việc học), Khan Academy (tích hợp AI để hỗ trợ), Duolingo (cho việc học ngôn ngữ), và Socratic by Google (giúp giải các bài toán).',
      },
      {
        question: 'Làm thế nào để kiểm chứng thông tin do AI cung cấp?',
        answer: 'Luôn luôn kiểm tra chéo thông tin từ AI với các nguồn đáng tin cậy khác như sách giáo khoa, bài báo khoa học, hoặc các trang web giáo dục uy tín. Hãy xem AI như một người trợ giúp kiến thức, không phải là một nguồn chân lý tuyệt đối.'
      },
      {
        question: 'AI có thể giúp tôi chuẩn bị cho một bài kiểm tra như thế nào?',
        answer: 'Bạn có thể yêu cầu AI tạo ra các câu hỏi ôn tập, giải thích lại các khái niệm bạn chưa hiểu rõ, hoặc tạo ra một kế hoạch học tập chi tiết cho tuần cuối cùng trước kỳ thi. Bạn cũng có thể "dạy" AI về nội dung môn học và yêu cầu nó đóng vai người hỏi thi bạn.'
      },
      {
        question: 'Sự khác biệt giữa học với AI và tìm kiếm trên Google là gì?',
        answer: 'Google cung cấp cho bạn một danh sách các liên kết, còn bạn phải tự tổng hợp thông tin. AI có thể tổng hợp, giải thích, và trình bày thông tin theo một cách có cấu trúc và hội thoại hơn. Nó có thể đóng vai một người đối thoại, giúp bạn đào sâu vào vấn đề.'
      },
      {
        question: 'AI có thể giúp tôi học các kỹ năng thực hành như lập trình hay thiết kế không?',
        answer: 'Chắc chắn có. AI có thể giúp bạn gỡ lỗi (debug) code, đề xuất các đoạn code tốt hơn, giải thích các khái niệm lập trình phức tạp, hoặc đưa ra các ý tưởng thiết kế ban đầu. Nó hoạt động như một người đồng hành lập trình viên hoặc một người cố vấn sáng tạo.'
      },
      {
        question: 'Học với AI có làm giảm khả năng tư duy phản biện của tôi không?',
        answer: 'Ngược lại, nếu được sử dụng đúng cách, nó có thể tăng cường tư duy phản biện. Bạn cần phải học cách đặt câu hỏi đúng, đánh giá câu trả lời của AI, và xác định khi nào thông tin có thể sai lệch hoặc thiếu sót. Quá trình này chính là rèn luyện tư duy phản biện.'
      },
      {
        question: 'AI có thể tạo ra một lộ trình học tập cá nhân hóa cho tôi không?',
        answer: 'Có. Bạn có thể cung cấp cho AI mục tiêu học tập của mình (ví dụ: "Tôi muốn học về Digital Marketing trong 3 tháng"), trình độ hiện tại và thời gian bạn có. AI có thể đề xuất một lộ trình học tập bao gồm các chủ đề cần học, nguồn tài liệu tham khảo, và các dự án thực hành.'
      }
    ],
  },
  {
    id: 'research-ai',
    title: 'Nghiên cứu với AI',
    duration: '60 phút',
    difficulty: 'Trung bình',
    type: 'video',
    videoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID_HERE',
    description:
      'Học cách tận dụng AI để tăng tốc quá trình nghiên cứu, từ tìm kiếm tài liệu, phân tích dữ liệu đến phát hiện các xu hướng mới.',
    objectives: [
      'Sử dụng các công cụ AI để tìm kiếm và sàng lọc tài liệu học thuật.',
      'Áp dụng AI để phân tích và trực quan hóa dữ liệu nghiên cứu.',
      'Hiểu cách AI có thể giúp xác định các lỗ hổng kiến thức và đề xuất hướng nghiên cứu mới.',
      'Nhận thức về các vấn đề đạo đức khi sử dụng AI trong nghiên cứu.',
    ],
    realWorldApplications: [
      'Sinh viên làm luận văn, luận án.',
      'Nhà khoa học và nhà nghiên cứu trong các lĩnh vực.',
      'Chuyên viên phân tích thị trường và kinh doanh.',
    ],
    tags: ['nghiên cứu khoa học', 'phân tích dữ liệu', 'AI học thuật', 'công cụ nghiên cứu'],
    faqs: [
      {
        question: 'AI có thể giúp tôi tìm kiếm tài liệu nghiên cứu như thế nào?',
        answer: 'Các công cụ như Semantic Scholar, Scite.ai, hoặc Elicit.org sử dụng AI để tìm các bài báo liên quan dựa trên ý nghĩa, không chỉ từ khóa. Chúng có thể hiển thị các bài báo trích dẫn hoặc được trích dẫn bởi một bài báo gốc, giúp bạn nhanh chóng xây dựng một cái nhìn tổng quan về lĩnh vực.'
      },
      {
        question: 'Làm thế nào AI có thể giúp tôi trong việc tổng quan tài liệu (literature review)?',
        answer: 'AI có thể tóm tắt các bài báo, nhóm các bài báo có cùng chủ đề lại với nhau, và xác định các chủ đề chính, các phương pháp nghiên cứu phổ biến, và các kết quả quan trọng trong một lĩnh vực. Điều này giúp bạn tiết kiệm hàng giờ đọc và tổng hợp.'
      },
      {
        question: 'Sử dụng AI để viết một phần của bài nghiên cứu có được chấp nhận không?',
        answer: 'Việc sử dụng AI để tạo ra văn bản và nhận đó là của mình bị coi là đạo văn ở hầu hết các tổ chức học thuật. Tuy nhiên, bạn có thể sử dụng AI để kiểm tra ngữ pháp, diễn đạt lại các câu văn cho rõ ràng hơn, hoặc brainstorm ý tưởng. Luôn luôn minh bạch về việc bạn đã sử dụng công cụ nào.'
      },
      {
        question: 'AI có thể giúp phân tích các loại dữ liệu nào?',
        answer: 'AI có thể phân tích nhiều loại dữ liệu, từ dữ liệu có cấu trúc (bảng tính, cơ sở dữ liệu) đến dữ liệu phi cấu trúc (văn bản, hình ảnh, âm thanh). Ví dụ, AI có thể phân tích cảm xúc trong các bài đánh giá sản phẩm, hoặc nhận dạng các đối tượng trong hình ảnh y tế.'
      },
      {
        question: 'Lỗ hổng kiến thức (knowledge gap) trong nghiên cứu là gì và AI giúp tìm ra nó như thế nào?',
        answer: 'Lỗ hổng kiến thức là những câu hỏi hoặc lĩnh vực chưa được khám phá hoặc trả lời đầy đủ trong các nghiên cứu trước đây. AI có thể giúp xác định các lỗ hổng này bằng cách phân tích một lượng lớn tài liệu và chỉ ra những lĩnh vực ít được nghiên cứu hoặc có kết quả trái ngược nhau.'
      },
      {
        question: 'Các công cụ AI nào hữu ích cho việc phân tích dữ liệu định tính?',
        answer: 'Các công cụ như NVivo (với các tính năng AI), hoặc các thư viện Python như NLTK và spaCy có thể giúp các nhà nghiên cứu định tính phân tích các chủ đề, cảm xúc, và các mẫu trong các văn bản phỏng vấn, khảo sát mở, hoặc các tài liệu văn bản khác.'
      },
      {
        question: 'Làm thế nào để đảm bảo tính khách quan khi sử dụng AI trong nghiên cứu?',
        answer: 'Hãy nhận thức rằng các mô hình AI có thể chứa đựng những thành kiến (bias) có trong dữ liệu mà chúng được huấn luyện. Luôn kiểm tra lại kết quả của AI, sử dụng nhiều công cụ khác nhau, và so sánh với phân tích thủ công của chính bạn để đảm bảo tính khách quan.'
      },
      {
        question: 'AI có thể giúp tôi trực quan hóa dữ liệu không?',
        answer: 'Có, bạn có thể dán dữ liệu của mình vào các công cụ như ChatGPT (với Code Interpreter) hoặc Microsoft Copilot và yêu cầu nó tạo ra các biểu đồ (biểu đồ cột, biểu đồ tròn, bản đồ nhiệt...). Bạn có thể yêu cầu nó thử nhiều loại biểu đồ khác nhau để tìm ra cách trực quan hóa hiệu quả nhất.'
      },
      {
        question: 'Scite.ai là gì và nó giúp ích gì cho nhà nghiên cứu?',
        answer: 'Scite.ai là một công cụ đặc biệt giúp bạn xem một bài báo đã được các nghiên cứu sau này ủng hộ, đề cập, hay phản bác như thế nào. Điều này giúp bạn nhanh chóng đánh giá mức độ tin cậy và tầm ảnh hưởng của một công trình nghiên cứu.'
      },
      {
        question: 'Tôi có thể sử dụng AI để dịch các tài liệu nghiên cứu không?',
        answer: 'Có, các công cụ dịch thuật AI như Google Translate hay DeepL ngày càng trở nên chính xác. Tuy nhiên, đối với các thuật ngữ chuyên ngành phức tạp, bạn nên cẩn thận và kiểm tra lại với một người bản xứ hoặc một từ điển chuyên ngành nếu có thể.'
      }
    ]
  },
  {
    id: 'language-learning',
    videoUrl: null,
    title: 'Học ngôn ngữ với AI',
    duration: '45 phút',
    difficulty: 'Cơ bản',
    type: 'interactive',
    description:
      'Trải nghiệm các ứng dụng AI giúp cải thiện kỹ năng nghe, nói, đọc, viết, luyện phát âm và giao tiếp với chatbot.',
    objectives: [
      'Sử dụng ứng dụng học ngôn ngữ dựa trên AI.',
      'Luyện phát âm và nhận phản hồi tức thì từ AI.',
      'Thực hành giao tiếp với chatbot ngôn ngữ.',
      'Cá nhân hóa kế hoạch học từ vựng và ngữ pháp.',
    ],
    realWorldApplications: [
      'Người học ngoại ngữ ở mọi cấp độ.',
      'Chuẩn bị cho các kỳ thi chứng chỉ ngôn ngữ.',
      'Cải thiện kỹ năng giao tiếp trong môi trường quốc tế.',
    ],
    tags: ['học ngoại ngữ', 'luyện phát âm', 'chatbot', 'ứng dụng học tập'],
    faqs: [
      {
        question: 'Ứng dụng học ngôn ngữ AI hoạt động như thế nào?',
        answer: 'Các ứng dụng này sử dụng AI để cá nhân hóa bài học dựa trên trình độ và tốc độ học của bạn. Chúng sử dụng thuật toán lặp lại ngắt quãng (Spaced Repetition) để giúp bạn ghi nhớ từ vựng hiệu quả và cung cấp các bài tập tương tác phù hợp với lỗi bạn thường mắc phải.'
      },
      {
        question: 'Làm thế nào AI có thể giúp tôi luyện phát âm?',
        answer: 'Nhiều ứng dụng sử dụng công nghệ nhận dạng giọng nói để phân tích cách phát âm của bạn. Chúng có thể chỉ ra chính xác âm nào bạn phát âm sai và cho bạn xem khẩu hình miệng đúng. Ví dụ như ứng dụng ELSA Speak.'
      },
      {
        question: 'Chatbot có thực sự giúp cải thiện kỹ năng giao tiếp không?',
        answer: 'Có, chatbot là một môi trường an toàn để bạn thực hành giao tiếp mà không sợ bị phán xét. Bạn có thể trò chuyện về nhiều chủ đề khác nhau, luyện tập các mẫu câu và nhận được phản hồi ngay lập tức. Điều này giúp xây dựng sự tự tin trước khi nói chuyện với người thật.'
      },
      {
        question: 'Làm thế nào để sử dụng AI để học từ vựng hiệu quả?',
        answer: 'Thay vì chỉ học một danh sách từ, hãy yêu cầu AI tạo ra các câu ví dụ với từ đó trong các ngữ cảnh khác nhau. Bạn cũng có thể yêu cầu nó tạo một câu chuyện ngắn chứa tất cả các từ mới bạn vừa học để giúp ghi nhớ tốt hơn.'
      },
      {
        question: 'AI có thể chấm điểm bài viết của tôi không?',
        answer: 'Có, các công cụ như Grammarly hoặc tính năng tích hợp trong Microsoft Word có thể kiểm tra lỗi ngữ pháp, chính tả và đề xuất cách diễn đạt tốt hơn. Một số công cụ AI tiên tiến hơn còn có thể đưa ra nhận xét về cấu trúc và sự mạch lạc của bài viết.'
      },
      {
        question: 'Sự khác biệt giữa Duolingo và Babbel là gì?',
        answer: 'Duolingo tập trung vào việc "game hóa" trải nghiệm học tập với các bài học ngắn, vui nhộn. Babbel tập trung nhiều hơn vào các cuộc hội thoại thực tế và giải thích ngữ pháp một cách rõ ràng. Cả hai đều sử dụng AI nhưng có triết lý dạy học khác nhau.'
      },
      {
        question: 'Tôi có thể học các ngôn ngữ ít phổ biến với AI không?',
        answer: 'Có, mặc dù các ngôn ngữ phổ biến như tiếng Anh, Tây Ban Nha có nhiều tài nguyên hơn, nhưng các ứng dụng như Duolingo và Memrise cũng cung cấp các khóa học cho nhiều ngôn ngữ ít phổ biến hơn. Chất lượng có thể khác nhau, nhưng đó là một điểm khởi đầu tốt.'
      },
      {
        question: 'Làm thế nào để kết hợp AI và các phương pháp học truyền thống?',
        answer: 'Hãy xem AI là một công cụ bổ trợ. Bạn vẫn nên tham gia các lớp học, nói chuyện với người bản xứ, và đọc sách. Sử dụng AI để lấp đầy các khoảng trống: luyện tập thêm vào buổi tối, hỏi nhanh một câu hỏi ngữ pháp, hoặc tìm hiểu sâu hơn về một chủ đề bạn đã học trên lớp.'
      },
      {
        question: 'AI có thể giúp tôi hiểu văn hóa của một quốc gia không?',
        answer: 'Gián tiếp thì có. Bạn có thể yêu cầu AI giải thích về các phong tục, các ngày lễ, hoặc các thành ngữ phổ biến của một quốc gia. Bạn cũng có thể yêu cầu nó giới thiệu các bộ phim, bài hát, hoặc sách nổi tiếng từ nền văn hóa đó.'
      },
      {
        question: 'Chi phí cho các công cụ học ngôn ngữ AI là bao nhiêu?',
        answer: 'Nhiều ứng dụng hoạt động theo mô hình "freemium": cung cấp các tính năng cơ bản miễn phí và yêu cầu trả phí cho các tính năng nâng cao. Ví dụ, bạn có thể học miễn phí trên Duolingo, nhưng phiên bản trả phí sẽ loại bỏ quảng cáo và cung cấp các bài luyện tập không giới hạn.'
      }
    ]
  },
  {
    id: 'document-summary',
    title: 'Tóm tắt tài liệu với AI',
    duration: '30 phút',
    difficulty: 'Cơ bản',
    type: 'video',
    videoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID_HERE',
    description:
      'Khám phá cách sử dụng AI để tóm tắt nhanh chóng và hiệu quả các tài liệu dài, giúp tiết kiệm thời gian và nắm bắt thông tin chính xác.',
    objectives: [
      'Sử dụng AI để tóm tắt văn bản.',
      'Đánh giá độ chính xác và độ tin cậy của các bản tóm tắt AI.',
      'Hiểu các ứng dụng thực tiễn của việc tóm tắt tài liệu trong học tập và công việc.',
    ],
    realWorldApplications: [
      'Sinh viên tóm tắt sách giáo khoa, bài báo nghiên cứu.',
      'Nhân viên văn phòng tóm tắt báo cáo, email, và tài liệu dự án.',
      'Nhà nghiên cứu tổng hợp thông tin từ nhiều nguồn tài liệu.',
    ],
    tags: ['tóm tắt tài liệu', 'AI trong nghiên cứu', 'công cụ học tập', 'năng suất làm việc'],
    faqs: [
      {
        question: 'AI có thể tóm tắt được những loại tài liệu nào?',
        answer: 'AI có thể tóm tắt nhiều loại tài liệu khác nhau, bao gồm văn bản, bài báo, sách, báo cáo nghiên cứu, và thậm chí là các cuộc hội thoại. Chỉ cần cung cấp cho AI nội dung bạn muốn tóm tắt, và nó sẽ phân tích để rút ra các điểm chính.'
      },
      {
        question: 'Tôi có thể tin tưởng vào độ chính xác của các bản tóm tắt do AI tạo ra không?',
        answer: 'Điều này phụ thuộc vào chất lượng của mô hình AI và độ phức tạp của tài liệu gốc. Các mô hình AI tiên tiến như GPT-3 thường tạo ra các bản tóm tắt rất chính xác, nhưng bạn vẫn nên kiểm tra lại để đảm bảo không có thông tin quan trọng nào bị bỏ sót.'
      },
      {
        question: 'Làm thế nào để sử dụng AI để tóm tắt một bài báo nghiên cứu?',
        answer: 'Bạn có thể sao chép và dán nội dung bài báo vào công cụ tóm tắt của AI, hoặc cung cấp cho AI liên kết đến bài báo (nếu công cụ hỗ trợ). Hãy chắc chắn rằng bài báo không quá dài vượt quá giới hạn ký tự của công cụ AI.'
      },
      {
        question: 'Các công cụ AI nào tốt nhất cho việc tóm tắt tài liệu?',
        answer: 'Một số công cụ nổi bật bao gồm QuillBot, SMMRY, và Resoomer. Các công cụ này sử dụng các thuật toán AI tiên tiến để phân tích và tóm tắt văn bản một cách hiệu quả.'
      },
      {
        question: 'AI có thể giúp tôi tóm tắt video hoặc audio không?',
        answer: 'Có, nhưng yêu cầu kỹ thuật hơn một chút. Bạn cần chuyển đổi nội dung video hoặc audio thành văn bản (sử dụng các công cụ chuyển đổi giọng nói thành văn bản), sau đó sử dụng AI để tóm tắt văn bản đó. Một số công cụ như Otter.ai đã tích hợp sẵn tính năng này.'
      },
      {
        question: 'Làm thế nào để đảm bảo rằng bản tóm tắt của AI là khách quan?',
        answer: 'Để đảm bảo tính khách quan, hãy sử dụng nhiều công cụ tóm tắt khác nhau và so sánh các bản tóm tắt. Bạn cũng nên đọc qua tài liệu gốc để tự mình đánh giá độ chính xác và tính đầy đủ của bản tóm tắt.'
      },
      {
        question: 'AI có thể tóm tắt tài liệu bằng nhiều ngôn ngữ khác nhau không?',
        answer: 'Có, nhiều công cụ tóm tắt AI hỗ trợ nhiều ngôn ngữ khác nhau. Tuy nhiên, độ chính xác của việc tóm tắt có thể khác nhau tùy theo ngôn ngữ và chất lượng dữ liệu huấn luyện của mô hình AI.'
      },
      {
        question: 'Tôi có thể sử dụng AI để tóm tắt tài liệu cho mục đích thương mại không?',
        answer: 'Có, bạn có thể sử dụng AI để tóm tắt tài liệu phục vụ cho công việc hoặc nghiên cứu thương mại. Tuy nhiên, hãy chắc chắn rằng bạn tuân thủ các quy định về bản quyền và sử dụng dữ liệu một cách hợp pháp.'
      }
    ]
  },
  {
    id: 'note-taking',
    title: 'Ghi chú thông minh với AI',
    duration: '40 phút',
    difficulty: 'Cơ bản',
    type: 'interactive',
    description:
      'Tìm hiểu cách sử dụng AI để ghi chú hiệu quả hơn, từ việc tổ chức ghi chú đến việc tạo ra các nhắc nhở thông minh.',
    objectives: [
      'Sử dụng AI để tạo và tổ chức ghi chú.',
      'Thiết lập nhắc nhở và lịch trình học tập thông minh với AI.',
      'Khám phá các công cụ AI hỗ trợ ghi chú và quản lý thời gian.',
    ],
    realWorldApplications: [
      'Nghiên cứu sinh và học giả cần xử lý lượng lớn tài liệu.',
      'Chuyên viên cần nắm bắt nhanh thông tin từ báo cáo.',
      'Bất kỳ ai muốn đọc hiệu quả hơn.',
    ],
    tags: ['tóm tắt văn bản', 'xử lý ngôn ngữ tự nhiên', 'hiệu suất học tập', 'đọc nhanh'],
  },
];

import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';

export const educationLearningModuleData: ModuleData = {
  id: K2Module.EducationTechnology,
  title: 'Học tập và Giáo dục với AI',
  description:
    'Khám phá cách AI đang cách mạng hóa giáo dục, từ việc trở thành gia sư cá nhân đến việc tăng tốc nghiên cứu và học ngôn ngữ.',
  image: 'https://images.unsplash.com/photo-1503676260728-1c64c1a5341e?w=800&h=800&fit=crop',
  category: 'AI và Giáo dục',
  features: [
    'Sử dụng AI như một gia sư cá nhân 24/7',
    'Tăng tốc độ nghiên cứu và phân tích tài liệu',
    'Phương pháp học ngôn ngữ mới với sự hỗ trợ của AI',
    'Kỹ năng tóm tắt và nắm bắt thông tin hiệu quả',
  ],
  lessons: educationLearningLessons,
  relatedModules: [K2Module.AIForStudents, K2Module.CriticalThinking, K2Module.DataScience],
};
