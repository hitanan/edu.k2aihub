import { BaseLessonData } from '@/types/lesson-base';
export const softSkillsLessons: BaseLessonData[] = [
  {
    id: 'giao-tiep-hieu-qua',
    title: 'Giao tiếp hiệu quả',
    description:
      'Học cách truyền đạt ý tưởng một cách rõ ràng, lắng nghe tích cực và xây dựng mối quan hệ tốt đẹp trong công việc và cuộc sống.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=YkhX5QixmKY',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu các nguyên tắc cốt lõi của giao tiếp hiệu quả.',
      'Thực hành kỹ năng lắng nghe tích cực và đặt câu hỏi.',
      'Học cách đưa ra và nhận phản hồi một cách xây dựng.',
      'Cải thiện khả năng giao tiếp phi ngôn ngữ.',
    ],
    prerequisites: ['Không yêu cầu kiến thức nền tảng.', 'Sẵn sàng học hỏi và thực hành.'],
    exercises: [
      {
        title: 'Bài tập đóng vai: Lắng nghe tích cực',
        description: 'Thực hành kỹ năng lắng nghe tích cực thông qua một tình huống đóng vai.',
        difficulty: 'Cơ bản',
        procedure: [
          'Chia thành các cặp.',
          'Một người nói về một chủ đề trong 2 phút, người kia chỉ lắng nghe mà không ngắt lời.',
          'Người nghe tóm tắt lại những gì họ đã nghe.',
          'Đổi vai và lặp lại.',
        ],
        expectedResults: 'Học viên có thể tóm tắt chính xác nội dung của người nói và thể hiện sự đồng cảm.',
      },
    ],
    realWorldApplications: [
      'Phỏng vấn xin việc',
      'Thuyết trình trước đám đông',
      'Giải quyết xung đột trong nhóm',
      'Xây dựng mạng lưới quan hệ chuyên nghiệp',
    ],
    vietnamContext: {
      title: 'Văn hóa "Cả nể" và Thách thức trong Giao tiếp',
      content: [
        'Trong văn hóa Việt Nam, sự "cả nể" đôi khi khiến việc đưa ra phản hồi thẳng thắn trở nên khó khăn. Học cách góp ý một cách khéo léo và tôn trọng là rất quan trọng.',
        'Giao tiếp phi ngôn ngữ, như cách chào hỏi, gật đầu, và duy trì ánh mắt, đóng vai trò quan trọng trong việc xây dựng lòng tin.',
        'Trong môi trường công sở hiện đại, kỹ năng trình bày ý tưởng một cách rõ ràng, mạch lạc đang ngày càng được coi trọng hơn.',
      ],
    },
    careerConnect: {
      name: 'Nguyễn Thị Lan Anh',
      title: 'Trưởng phòng Nhân sự',
      company: 'Navigos Group',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-huu-loi',
      quote:
        'Chúng tôi có thể đào tạo kỹ năng chuyên môn, nhưng chúng tôi tuyển dụng những người có kỹ năng giao tiếp tốt. Đó là nền tảng của mọi sự hợp tác thành công.',
    },
    quizzes: [
      {
        question:
          'Kỹ thuật tóm tắt lại lời của người nói bằng ngôn ngữ của chính bạn để xác nhận sự thấu hiểu được gọi là gì?',
        options: ['Lắng nghe chọn lọc', 'Lắng nghe thấu cảm', 'Diễn giải (Paraphrasing)', 'Phản hồi trực tiếp'],
        correctAnswerIndex: 2,
        explanation:
          'Diễn giải là một kỹ thuật cốt lõi của lắng nghe tích cực, giúp đảm bảo bạn đã hiểu đúng thông điệp của người nói và thể hiện rằng bạn đang thực sự chú ý.',
      },
    ],
    faqs: [
      {
        question: 'Kỹ năng giao tiếp là gì?',
        answer:
          'Là khả năng truyền đạt và trao đổi thông tin một cách hiệu quả, bao gồm cả nói, viết, và giao tiếp phi ngôn ngữ. Đây là một trong những kỹ năng mềm quan trọng nhất trong công việc và cuộc sống.',
      },
      {
        question: 'Làm thế nào để cải thiện kỹ năng lắng nghe?',
        answer:
          'Hãy thực hành lắng nghe tích cực: tập trung hoàn toàn vào người nói, tránh ngắt lời, đặt câu hỏi để làm rõ, và diễn giải lại những gì bạn nghe được để xác nhận sự thấu hiểu.',
      },
      {
        question: 'Giao tiếp phi ngôn ngữ bao gồm những gì?',
        answer:
          'Bao gồm ngôn ngữ cơ thể (tư thế, cử chỉ), nét mặt, giao tiếp bằng mắt, và giọng điệu. Những yếu tố này thường truyền tải nhiều thông điệp hơn cả lời nói.',
      },
      {
        question: 'Làm thế nào để đưa ra phản hồi mang tính xây dựng?',
        answer:
          'Sử dụng mô hình "Bánh mì kẹp": bắt đầu bằng một lời khen hoặc điểm tích cực, sau đó đưa ra góp ý cụ thể cần cải thiện, và kết thúc bằng một lời động viên hoặc khẳng định lại điểm mạnh.',
      },
      {
        question: 'Tại sao việc đặt câu hỏi lại quan trọng trong giao tiếp?',
        answer:
          'Đặt câu hỏi cho thấy bạn đang lắng nghe và quan tâm. Nó giúp làm rõ thông tin, khám phá các khía cạnh mới của vấn đề, và khuyến khích người khác chia sẻ nhiều hơn.',
      },
      {
        question: 'Làm thế nào để tự tin hơn khi thuyết trình?',
        answer:
          'Sự chuẩn bị là chìa khóa. Hãy nắm vững nội dung, luyện tập nhiều lần, và chuẩn bị cho các câu hỏi có thể xảy ra. Bắt đầu bằng cách thuyết trình trước một nhóm nhỏ bạn bè để xây dựng sự tự tin.',
      },
      {
        question: 'Kỹ năng giao tiếp qua email có gì khác biệt?',
        answer:
          'Giao tiếp qua email đòi hỏi sự rõ ràng, ngắn gọn và chuyên nghiệp. Hãy sử dụng tiêu đề rõ ràng, chia nhỏ nội dung thành các đoạn ngắn, và luôn kiểm tra lại lỗi chính tả trước khi gửi.',
      },
      {
        question: 'Làm thế nào để xử lý một cuộc trò chuyện khó khăn?',
        answer:
          'Hãy chọn thời điểm và không gian phù hợp. Bắt đầu bằng cách nêu lên quan điểm của bạn một cách bình tĩnh, sử dụng "Tôi cảm thấy..." thay vì "Bạn đã làm...". Lắng nghe quan điểm của đối phương và tập trung vào việc tìm kiếm giải pháp chung.',
      },
      {
        question: 'Sự khác biệt giữa đồng cảm (empathy) và thông cảm (sympathy) là gì?',
        answer:
          'Thông cảm là cảm thấy tiếc cho ai đó. Đồng cảm là cố gắng hiểu và chia sẻ cảm xúc của người khác, đặt mình vào vị trí của họ. Đồng cảm là một yếu tố quan trọng để xây dựng các mối quan hệ sâu sắc.',
      },
      {
        question: 'Làm thế nào để xây dựng mạng lưới quan hệ (networking) hiệu quả?',
        answer:
          'Hãy tập trung vào việc xây dựng các mối quan hệ chân thành thay vì chỉ thu thập danh thiếp. Hãy quan tâm đến người khác, lắng nghe câu chuyện của họ, và tìm cách giúp đỡ họ trước khi bạn cần sự giúp đỡ.',
      },
    ],
  },
  {
    id: 'giai-quyet-van-de',
    title: 'Giải quyết vấn đề và ra quyết định',
    description: 'Học cách phân tích vấn đề, xác định các giải pháp tiềm năng và đưa ra quyết định hiệu quả.',
    duration: '90 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=XfbH2pPCvA0',
    objectives: [
      'Hiểu quy trình giải quyết vấn đề và ra quyết định.',
      'Phân tích và xác định vấn đề một cách hiệu quả.',
      'Đánh giá và lựa chọn giải pháp tối ưu.',
      'Thực hiện và theo dõi quyết định đã đưa ra.',
    ],
    prerequisites: ['Hoàn thành khóa học "Giao tiếp hiệu quả"', 'Có kinh nghiệm làm việc nhóm cơ bản'],
    exercises: [
      {
        title: 'Bài tập phân tích tình huống',
        description: 'Phân tích một tình huống thực tế để xác định vấn đề và đề xuất giải pháp.',
        difficulty: 'Trung bình',
        procedure: [
          'Chia nhóm và nhận một tình huống thực tế.',
          'Xác định vấn đề chính trong tình huống.',
          'Đề xuất ít nhất ba giải pháp tiềm năng.',
          'Đánh giá và chọn giải pháp tốt nhất để thực hiện.',
        ],
        expectedResults: 'Học viên có khả năng phân tích tình huống và đưa ra giải pháp hợp lý.',
      },
    ],
    realWorldApplications: [
      'Giải quyết vấn đề trong dự án công việc',
      'Ra quyết định trong quản lý thời gian',
      'Lập kế hoạch và tổ chức sự kiện',
      'Đàm phán và thuyết phục trong kinh doanh',
    ],
    vietnamContext: {
      title: 'Ra quyết định trong môi trường tập thể',
      content: [
        'Các doanh nghiệp Việt Nam thường có xu hướng ra quyết định dựa trên sự đồng thuận của tập thể. Kỹ năng trình bày và thuyết phục để đạt được sự đồng thuận là rất cần thiết.',
        'Áp lực từ "sếp" hoặc những người lớn tuổi hơn có thể ảnh hưởng đến quyết định. Học cách bảo vệ quan điểm của mình một cách logic và tôn trọng là một kỹ năng quan trọng.',
        'Trong bối cảnh kinh doanh thay đổi nhanh chóng, khả năng ra quyết định dựa trên dữ liệu thay vì cảm tính đang trở thành một lợi thế cạnh tranh lớn.',
      ],
    },
    careerConnect: {
      name: 'Lê Hồng Minh',
      title: 'Chủ tịch & CEO',
      company: 'VNG Corporation',
      imageUrl: 'https://i.pravatar.cc/150?u=le-hong-minh',
      quote:
        'Khởi nghiệp là một chuỗi các quyết định. Không phải quyết định nào cũng đúng, nhưng quyết định nhanh và học hỏi từ sai lầm còn hơn là không dám quyết định.',
    },
    quizzes: [
      {
        question: 'Bước đầu tiên và quan trọng nhất trong quy trình giải quyết vấn đề là gì?',
        options: ['Tìm kiếm giải pháp', 'Xác định rõ ràng vấn đề', 'Đánh giá các lựa chọn', 'Thực hiện giải pháp'],
        correctAnswerIndex: 1,
        explanation:
          'Nếu không xác định đúng vấn đề gốc rễ, mọi giải pháp đưa ra sau đó đều có thể trở nên vô nghĩa. Việc định nghĩa rõ ràng vấn đề là nền tảng cho toàn bộ quy trình.',
      },
    ],
    faqs: [
      {
        question: 'Quy trình 5 bước để giải quyết vấn đề là gì?',
        answer:
          'Một quy trình phổ biến bao gồm: 1. Xác định vấn đề. 2. Phân tích vấn đề (tìm nguyên nhân gốc rễ). 3. Đưa ra các giải pháp tiềm năng. 4. Đánh giá và lựa chọn giải pháp tốt nhất. 5. Thực hiện và theo dõi kết quả.',
      },
      {
        question: 'Kỹ thuật "5 Whys" là gì?',
        answer:
          'Là một kỹ thuật đơn giản để tìm ra nguyên nhân gốc rễ của một vấn đề bằng cách liên tục hỏi "Tại sao?" (thường là 5 lần). Mỗi câu trả lời sẽ là cơ sở cho câu hỏi "Tại sao?" tiếp theo.',
      },
      {
        question: 'Sự khác biệt giữa vấn đề và triệu chứng là gì?',
        answer:
          'Triệu chứng là dấu hiệu có thể nhìn thấy của một vấn đề (ví dụ: doanh số giảm). Vấn đề là nguyên nhân sâu xa gây ra triệu chứng đó (ví dụ: chất lượng sản phẩm kém). Giải quyết triệu chứng chỉ là tạm thời, cần phải giải quyết vấn đề gốc rễ.',
      },
      {
        question: 'Brainstorming (công não) hiệu quả cần những nguyên tắc nào?',
        answer:
          'Các nguyên tắc chính bao gồm: không phán xét ý tưởng của người khác, khuyến khích các ý tưởng "điên rồ", tập trung vào số lượng hơn chất lượng (ở giai đoạn đầu), và xây dựng dựa trên ý tưởng của nhau.',
      },
      {
        question: 'Ma trận Eisenhower là gì và nó giúp ra quyết định như thế nào?',
        answer:
          'Là một công cụ quản lý thời gian và ra quyết định giúp bạn phân loại các nhiệm vụ dựa trên hai tiêu chí: mức độ khẩn cấp và mức độ quan trọng. Nó chia công việc thành 4 ô: Làm ngay, Lên lịch, Giao việc, và Loại bỏ.',
      },
      {
        question: 'Làm thế nào để tránh "tê liệt vì phân tích" (analysis paralysis)?',
        answer:
          'Đây là tình trạng suy nghĩ quá nhiều về một vấn đề mà không thể đưa ra quyết định. Để tránh điều này, hãy đặt ra một thời hạn để ra quyết định, chấp nhận rằng không có giải pháp nào là hoàn hảo, và tập trung vào nguyên tắc 80/20 (80% kết quả đến từ 20% nỗ lực).',
      },
      {
        question: 'Tư duy phát triển (growth mindset) ảnh hưởng đến việc giải quyết vấn đề như thế nào?',
        answer:
          'Người có tư duy phát triển tin rằng khả năng có thể được cải thiện thông qua nỗ lực. Họ xem các vấn đề là cơ hội để học hỏi và không ngại thử thách, điều này rất quan trọng để tìm ra các giải pháp sáng tạo.',
      },
      {
        question: 'Khi nào nên ra quyết định một mình và khi nào nên tham khảo ý kiến nhóm?',
        answer:
          'Ra quyết định một mình khi vấn đề đơn giản, cần tốc độ, hoặc bạn là người có đầy đủ thông tin và chuyên môn nhất. Tham khảo ý kiến nhóm khi vấn đề phức tạp, ảnh hưởng đến nhiều người, và cần sự đồng thuận để thực hiện thành công.',
      },
      {
        question: 'Làm thế nào để đánh giá các giải pháp một cách khách quan?',
        answer:
          'Hãy xây dựng một bộ tiêu chí đánh giá rõ ràng trước khi xem xét các giải pháp. Các tiêu chí có thể bao gồm: chi phí, thời gian thực hiện, rủi ro, và mức độ phù hợp với mục tiêu. Cho điểm mỗi giải pháp dựa trên từng tiêu chí.',
      },
      {
        question: 'Sau khi ra quyết định, bước tiếp theo là gì?',
        answer:
          'Bước tiếp theo là lập một kế hoạch hành động chi tiết: xác định các bước cần làm, ai chịu trách nhiệm, thời hạn hoàn thành, và các chỉ số để đo lường sự thành công. Việc theo dõi và điều chỉnh kế hoạch là rất quan trọng.',
      },
    ],
  },
  {
    id: 'tu-duy-phan-bien',
    title: 'Tư duy phản biện',
    description: 'Phát triển khả năng phân tích thông tin, đánh giá lập luận và hình thành các phán đoán có cơ sở.',
    duration: '75 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=UjbKZvPw1MU',
    objectives: [
      'Hiểu khái niệm và tầm quan trọng của tư duy phản biện.',
      'Phân tích và đánh giá thông tin một cách có hệ thống.',
      'Nhận diện và tránh các bẫy tư duy phổ biến.',
      'Hình thành và bảo vệ quan điểm cá nhân một cách logic.',
    ],
    prerequisites: [
      'Hoàn thành khóa học "Giải quyết vấn đề và ra quyết định"',
      'Có kinh nghiệm làm việc nhóm và giao tiếp cơ bản',
    ],
    exercises: [
      {
        title: 'Bài tập phân tích lập luận',
        description: 'Phân tích một lập luận để xác định các yếu tố hỗ trợ và phản đối.',
        difficulty: 'Trung bình',
        procedure: [
          'Đọc một bài viết hoặc xem một video có chứa lập luận.',
          'Xác định luận điểm chính và các bằng chứng hỗ trợ.',
          'Tìm kiếm các phản biện hoặc lập luận trái chiều.',
          'Thảo luận và đánh giá tính thuyết phục của lập luận.',
        ],
        expectedResults: 'Học viên có khả năng phân tích và đánh giá lập luận một cách khách quan và logic.',
      },
    ],
    realWorldApplications: [
      'Đánh giá thông tin và tin tức hàng ngày',
      'Ra quyết định trong kinh doanh và đầu tư',
      'Giải quyết xung đột và bất đồng quan điểm',
      'Lập kế hoạch và thực hiện các dự án cá nhân và nghề nghiệp',
    ],
    resources: [
      {
        title: 'Sách "Tư duy phản biện trong kinh doanh"',
        url: 'https://www.amazon.com/T%C6%B0-Duy-Ph%E1%BA%A1n-Bi%E1%BB%87n-Trong-Kinh-Doanh/dp/B08L5V7V7G',
        type: 'Reference',
      },
    ],
    faqs: [
      {
        question: 'Tư duy phản biện có phải là luôn luôn chỉ trích hay phản đối không?',
        answer:
          'Không. Tư duy phản biện không phải là chỉ trích tiêu cực. Đó là quá trình phân tích và đánh giá thông tin một cách khách quan để hình thành một phán đoán có cơ sở. Nó bao gồm cả việc công nhận những điểm mạnh của một lập luận.',
      },
      {
        question: 'Làm thế nào để nhận biết tin giả (fake news)?',
        answer:
          'Hãy kiểm tra nguồn tin (có đáng tin cậy không?), kiểm tra tác giả, xem xét các nguồn tin khác có đưa tin tương tự không, chú ý đến các tiêu đề giật gân, và kiểm tra ngày tháng của bài viết. Hãy hoài nghi với những thông tin gây cảm xúc mạnh.',
      },
      {
        question: 'Thiên kiến xác nhận (confirmation bias) là gì?',
        answer:
          'Là xu hướng tìm kiếm, diễn giải, và ghi nhớ thông tin theo cách xác nhận niềm tin hoặc giả thuyết sẵn có của chúng ta, trong khi bỏ qua các thông tin trái ngược. Đây là một trong những rào cản lớn nhất của tư duy phản biện.',
      },
      {
        question: 'Sự khác biệt giữa tương quan (correlation) và nhân quả (causation) là gì?',
        answer:
          'Tương quan có nghĩa là hai sự việc xảy ra cùng lúc, nhưng không nhất thiết cái này gây ra cái kia. Nhân quả có nghĩa là một sự việc trực tiếp gây ra một sự việc khác. Nhầm lẫn giữa hai điều này là một lỗi logic phổ biến.',
      },
      {
        question: 'Làm thế nào để xây dựng một lập luận mạnh mẽ?',
        answer:
          'Một lập luận mạnh cần có một luận điểm rõ ràng, được hỗ trợ bởi các bằng chứng xác thực và đáng tin cậy (dữ liệu, số liệu thống kê, nghiên cứu), và được trình bày một cách logic, có cấu trúc.',
      },
      {
        question: 'Ngụy biện "người rơm" (straw man fallacy) là gì?',
        answer:
          'Là lỗi ngụy biện trong đó một người bóp méo hoặc diễn giải sai lập luận của đối phương để làm cho nó có vẻ yếu hơn và dễ tấn công hơn, thay vì phản biện lại lập luận thực sự.',
      },
      {
        question: 'Làm thế nào để rèn luyện kỹ năng tư duy phản biện hàng ngày?',
        answer:
          'Hãy tập đặt câu hỏi về những thông tin bạn tiếp nhận: "Nguồn tin này từ đâu?", "Có bằng chứng nào không?", "Có góc nhìn nào khác không?". Đọc các bài viết có quan điểm trái chiều và cố gắng hiểu logic của họ.',
      },
      {
        question: 'Tại sao tư duy phản biện lại quan trọng trong thời đại số?',
        answer:
          'Trong thời đại bùng nổ thông tin, chúng ta liên tục tiếp xúc với một lượng lớn thông tin, bao gồm cả tin giả và thông tin sai lệch. Tư duy phản biện giúp chúng ta trở thành những người tiêu thụ thông tin thông thái, có khả năng phân biệt sự thật và đưa ra quyết định đúng đắn.',
      },
      {
        question: 'Kỹ thuật Socratic (Socratic method) là gì?',
        answer:
          'Là một phương pháp đặt câu hỏi liên tục để kích thích tư duy phản biện và khám phá các ý tưởng. Nó tập trung vào việc đặt các câu hỏi sâu sắc để làm rõ các giả định và khám phá logic đằng sau một lập luận.',
      },
      {
        question: 'Tư duy phản biện có thể được áp dụng trong những lĩnh vực nào của cuộc sống?',
        answer:
          'Trong mọi lĩnh vực. Từ việc quyết định nên tin vào một bài báo sức khỏe, bỏ phiếu cho một ứng cử viên chính trị, đến việc lựa chọn một chiến lược kinh doanh hay giải quyết một mâu thuẫn cá nhân.',
      },
    ],
  },
  {
    id: 'sang-tao-va-doi-moi',
    title: 'Sáng tạo và đổi mới',
    description: 'Học cách tư duy sáng tạo, phát triển các ý tưởng mới và áp dụng chúng vào thực tế.',
    duration: '60 phút',
    difficulty: 'Dễ',
    videoUrl: 'https://www.youtube.com/watch?v=RojLaCktyhY',
    objectives: [
      'Hiểu khái niệm và tầm quan trọng của sáng tạo và đổi mới.',
      'Phát triển tư duy sáng tạo và khả năng tưởng tượng.',
      'Áp dụng các kỹ thuật tư duy sáng tạo vào giải quyết vấn đề.',
      'Thực hành phát triển ý tưởng và đổi mới trong công việc và cuộc sống.',
    ],
    prerequisites: [
      'Hoàn thành các khóa học "Giao tiếp hiệu quả", "Giải quyết vấn đề và ra quyết định", "Tư duy phản biện"',
      'Có tinh thần cởi mở và sẵn sàng thử nghiệm cái mới',
    ],
    exercises: [
      {
        title: 'Bài tập phát triển ý tưởng',
        description: 'Sử dụng kỹ thuật brainstorming để phát triển ý tưởng cho một dự án hoặc vấn đề cụ thể.',
        difficulty: 'Dễ',
        procedure: [
          'Chọn một chủ đề hoặc vấn đề cần giải quyết.',
          'Sử dụng kỹ thuật brainstorming để phát triển ít nhất 10 ý tưởng khác nhau.',
          'Đánh giá và chọn ra 3 ý tưởng khả thi nhất để phát triển thêm.',
        ],
        expectedResults: 'Học viên có khả năng phát triển nhiều ý tưởng sáng tạo và chọn lọc ra ý tưởng khả thi nhất.',
      },
    ],
    realWorldApplications: [
      'Phát triển sản phẩm hoặc dịch vụ mới',
      'Cải tiến quy trình làm việc',
      'Tạo ra các chiến dịch marketing sáng tạo',
      'Giải quyết các vấn đề phức tạp trong kinh doanh và cuộc sống',
    ],
    resources: [
      {
        title: 'Video "Sáng tạo trong kinh doanh: Tư duy thiết kế"',
        url: 'https://www.youtube.com/watch?v=6pGJ8tG1g6A',
        type: 'Video',
      },
    ],
    faqs: [
      {
        question: 'Sáng tạo có phải là một tài năng bẩm sinh không?',
        answer:
          'Không hoàn toàn. Mặc dù một số người có năng khiếu tự nhiên, sáng tạo là một kỹ năng có thể học hỏi và rèn luyện. Nó giống như một cơ bắp, càng luyện tập thì càng mạnh mẽ.',
      },
      {
        question: 'Làm thế nào để có nhiều ý tưởng sáng tạo hơn?',
        answer:
          'Hãy tiếp xúc với nhiều lĩnh vực khác nhau, đọc sách, đi du lịch, nói chuyện với những người có nền tảng khác bạn. Sự sáng tạo thường nảy sinh từ việc kết nối những ý tưởng tưởng chừng không liên quan. Hãy luôn mang theo một cuốn sổ để ghi lại những ý tưởng bất chợt.',
      },
      {
        question: 'Tư duy hội tụ (convergent thinking) và tư duy phân kỳ (divergent thinking) là gì?',
        answer:
          'Tư duy phân kỳ là quá trình tạo ra nhiều ý tưởng hoặc giải pháp khác nhau (ví dụ: brainstorming). Tư duy hội tụ là quá trình phân tích và lựa chọn ra giải pháp tốt nhất từ các ý tưởng đó. Cả hai đều quan trọng cho sự sáng tạo.',
      },
      {
        question: 'Nỗi sợ thất bại ảnh hưởng đến sự sáng tạo như thế nào?',
        answer:
          'Nỗi sợ thất bại là một trong những kẻ thù lớn nhất của sự sáng tạo. Nó ngăn cản chúng ta thử nghiệm những ý tưởng mới và chấp nhận rủi ro. Để sáng tạo, bạn phải sẵn sàng chấp nhận rằng không phải mọi ý tưởng đều sẽ thành công.',
      },
      {
        question: 'Kỹ thuật SCAMPER là gì?',
        answer:
          'Là một kỹ thuật brainstorming sử dụng một bộ câu hỏi để kích thích sự sáng tạo: Substitute (Thay thế), Combine (Kết hợp), Adapt (Thích ứng), Modify (Sửa đổi), Put to another use (Sử dụng vào mục đích khác), Eliminate (Loại bỏ), Reverse (Đảo ngược).',
      },
      {
        question: 'Đổi mới (innovation) khác gì với sáng tạo (creativity)?',
        answer:
          'Sáng tạo là việc nghĩ ra những ý tưởng mới. Đổi mới là việc thực thi những ý tưởng đó để tạo ra giá trị. Một ý tưởng dù sáng tạo đến đâu cũng sẽ vô ích nếu không được áp dụng vào thực tế.',
      },
      {
        question: 'Làm thế nào để xây dựng một môi trường làm việc sáng tạo?',
        answer:
          'Hãy khuyến khích sự tò mò, cho phép nhân viên có thời gian để thử nghiệm, chấp nhận rủi ro và thất bại như một phần của quá trình học hỏi. Tạo ra không gian để mọi người có thể tự do chia sẻ và thảo luận ý tưởng mà không sợ bị phán xét.',
      },
      {
        question: 'Tư duy thiết kế (Design Thinking) là gì?',
        answer:
          'Là một quy trình giải quyết vấn đề và đổi mới tập trung vào việc thấu hiểu sâu sắc người dùng. Quy trình này thường bao gồm 5 bước: Thấu cảm (Empathize), Xác định (Define), Lên ý tưởng (Ideate), Tạo mẫu (Prototype), và Thử nghiệm (Test).',
      },
      {
        question: 'Làm thế nào để vượt qua "khối sáng tạo" (creative block)?',
        answer:
          'Hãy thử thay đổi môi trường làm việc, đi dạo, nghe một loại nhạc mới, hoặc làm một việc gì đó hoàn toàn khác. Đôi khi, việc tạm dừng và để cho tiềm thức hoạt động lại là cách tốt nhất để tìm ra giải pháp.',
      },
      {
        question: 'Sự ràng buộc có thể thúc đẩy sự sáng tạo không?',
        answer:
          'Có. Trái với suy nghĩ thông thường, các ràng buộc (về thời gian, ngân sách, tài nguyên) có thể buộc chúng ta phải suy nghĩ một cách sáng tạo hơn để tìm ra các giải pháp độc đáo và hiệu quả trong giới hạn cho phép. Đây được gọi là "sáng tạo trong chiếc hộp".',
      },
    ],
  },
];

import { ModuleData } from '@/types';

export const softSkillsModuleData: ModuleData = {
  id: 'soft-skills',
  title: 'Kỹ Năng Mềm Thiết Yếu',
  subtitle: 'Chìa khóa thành công bền vững',
  description:
    'Trang bị bộ kỹ năng mềm toàn diện từ giao tiếp, tư duy phản biện, làm việc nhóm đến trí tuệ cảm xúc để thành công trong mọi lĩnh vực.',
  category: 'Essential Skills',
  icon: '🤝',
  color: 'from-blue-500 to-sky-500',
  level: 'Cơ bản',
  duration: '10-12 giờ',
  features: [
    'Giao tiếp hiệu quả và thuyết trình',
    'Tư duy phản biện và giải quyết vấn đề',
    'Làm việc nhóm và hợp tác',
    'Trí tuệ cảm xúc và quản lý bản thân',
  ],
  prerequisites: ['Không có'],
  objectives: [
    'Giao tiếp tự tin và thuyết phục trong môi trường chuyên nghiệp.',
    'Phân tích vấn đề một cách logic và đưa ra giải pháp sáng tạo.',
    'Hợp tác hiệu quả trong đội nhóm để đạt mục tiêu chung.',
    'Quản lý cảm xúc và xây dựng mối quan hệ tích cực.',
  ],
  careerOutcomes: [
    'Nâng cao khả năng được tuyển dụng ở mọi ngành nghề.',
    'Cải thiện hiệu suất làm việc và khả năng thăng tiến.',
    'Xây dựng mạng lưới quan hệ chuyên nghiệp vững chắc.',
    'Trở thành một nhà lãnh đạo hiệu quả.',
  ],
  industryApplications: [
    { name: 'Kinh doanh', description: 'Đàm phán, bán hàng, quản lý nhân sự.' },
    { name: 'Công nghệ', description: 'Làm việc nhóm trong các dự án phần mềm, trình bày ý tưởng sản phẩm.' },
    { name: 'Y tế', description: 'Giao tiếp với bệnh nhân, làm việc với đội ngũ y bác sĩ.' },
    { name: 'Giáo dục', description: 'Giảng dạy, quản lý lớp học, tương tác với phụ huynh.' },
  ],
  marketDemand: {
    averageSalary: 'Tăng 10-20% thu nhập',
    jobGrowth: 'Luôn cần thiết',
    hireDemand: 'Rất cao ở mọi cấp độ',
  },
  relatedModules: ['professional-communication', 'leadership-management', 'critical-thinking'],
};
