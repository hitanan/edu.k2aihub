import { ModuleData } from '@/types';

export const appliedEnglishModuleData: ModuleData = {
  id: 'applied-english',
  title: 'Tiếng Anh Ứng Dụng',
  subtitle: 'Tập trung vào kỹ năng giao tiếp, viết luận và sử dụng tiếng Anh trong các tình huống thực tế.',
  description:
    'Module này vượt ra ngoài ngữ pháp và từ vựng đơn thuần, giúp học sinh tự tin sử dụng tiếng Anh để giao tiếp hàng ngày, thuyết trình, tham gia tranh biện và viết các bài luận học thuật.',
  image: 'https://images.unsplash.com/photo-1521302080220-5d7a4a0f0b24?w=1200&h=600&fit=crop',
  color: 'from-pink-500 to-rose-500',
  category: 'Ngôn ngữ & Giao tiếp',
  level: 'Trung học',
  duration: '12 tuần',
  lessons: [
    {
      id: 'everyday-communication',
      title: 'Giao Tiếp Tiếng Anh Hàng Ngày',
      description:
        'Học các mẫu câu, thành ngữ và từ vựng cần thiết cho các tình huống giao tiếp phổ biến như giới thiệu bản thân, mua sắm, hỏi đường, và nói chuyện qua điện thoại.',
      duration: '50 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Nói chuyện với người nước ngoài', 'Du lịch', 'Mua sắm'],
      objectives: [
        'Tự tin giới thiệu bản thân và hỏi thông tin về người khác.',
        'Sử dụng các mẫu câu thông dụng khi mua sắm và gọi món ăn.',
        'Biết cách hỏi và chỉ đường một cách lịch sự.',
        'Thực hành các cuộc hội thoại qua điện thoại.',
      ],
      faqs: [
        {
          question: '"How do you do?" và "How are you?" khác nhau như thế nào?',
          answer:
            '"How do you do?" là một lời chào rất trang trọng, thường chỉ dùng khi bạn được giới thiệu với ai đó lần đầu tiên. Câu trả lời lịch sự cũng là "How do you do?". "How are you?" là câu hỏi thăm sức khỏe thông thường, bạn có thể trả lời "I\'m fine, thank you. And you?".',
        },
        {
          question: 'Làm thế nào để từ chối một lời đề nghị một cách lịch sự?',
          answer:
            'Thay vì nói "No", bạn có thể dùng các cách nói mềm mỏng hơn như "I\'d love to, but I have another plan." (Tôi rất muốn, nhưng tôi có kế hoạch khác rồi), hoặc "That\'s very kind of you, but I\'m afraid I can\'t." (Bạn thật tốt bụng, nhưng tôi e là không thể).',
        },
        {
          question: 'Một vài cách phổ biến để bắt đầu cuộc trò chuyện với người lạ là gì?',
          answer:
            'Bạn có thể bắt đầu bằng cách bình luận về tình huống chung, ví dụ: "This is a lovely event, isn\'t it?" (Đây là một sự kiện thật dễ chịu, phải không?) hoặc hỏi một câu hỏi mở, chẳng hạn như "What brings you here today?" (Điều gì đưa bạn đến đây hôm nay?). Một lời khen chân thành cũng là một cách hay, ví dụ: "I love your jacket!".',
        },
        {
          question: 'Làm thế nào để đưa ra một lời khen mà không bị ngượng ngùng?',
          answer:
            'Hãy cụ thể và chân thành. Thay vì nói "You are great", hãy thử "You did a fantastic job on that presentation. I was really impressed with your data analysis." (Bạn đã làm rất tốt bài thuyết trình đó. Tôi thực sự ấn tượng với phần phân tích dữ liệu của bạn).',
        },
        {
          question: 'Sự khác biệt giữa "I\'m sorry" và "Excuse me" là gì?',
          answer:
            '"I\'m sorry" được dùng để xin lỗi khi bạn đã làm sai điều gì đó. "Excuse me" được dùng để thu hút sự chú ý của ai đó một cách lịch sự, hoặc khi bạn muốn đi qua chỗ đông người, hoặc khi bạn lỡ ho hay hắt xì.',
        },
        {
          question: 'Làm thế nào để nhờ giúp đỡ trong một cửa hàng?',
          answer:
            'Bạn có thể thu hút sự chú ý của nhân viên bằng cách nói "Excuse me". Sau đó, bạn có thể hỏi: "Could you help me, please?" (Bạn có thể giúp tôi được không?) hoặc "I\'m looking for..." (Tôi đang tìm kiếm...).',
        },
        {
          question: 'Một vài cách lịch sự để ngắt lời ai đó là gì?',
          answer:
            'Nếu thực sự cần thiết, bạn có thể nói: "I\'m so sorry to interrupt, but..." (Tôi rất xin lỗi vì phải ngắt lời, nhưng...) hoặc "May I jump in here for a second?" (Tôi có thể xen vào một chút được không?).',
        },
        {
          question: 'Làm thế nào để kết thúc một cuộc trò chuyện một cách duyên dáng?',
          answer:
            'Bạn có thể nói: "Well, it was lovely talking to you. I should get going now." (Rất vui được nói chuyện với bạn. Bây giờ tôi phải đi rồi) hoặc "I need to run, but let\'s catch up again soon." (Tôi phải đi ngay, nhưng chúng ta hãy sớm gặp lại nhé).',
        },
        {
          question: 'Một vài chủ đề "small talk" (nói chuyện phiếm) phổ biến là gì?',
          answer:
            'Các chủ đề an toàn và phổ biến bao gồm thời tiết ("It\'s a beautiful day, isn\'t it?"), công việc hoặc học tập ("How is work/school going?"), sở thích ("Have you seen any good movies lately?"), hoặc các sự kiện gần đây.',
        },
        {
          question: 'Làm thế nào để thể hiện sự đồng ý và không đồng ý một cách lịch sự?',
          answer:
            'Để đồng ý, bạn có thể nói "I completely agree" hoặc "You\'re absolutely right". Để không đồng ý, hãy bắt đầu một cách mềm mỏng: "I see your point, but I have a different perspective." (Tôi hiểu ý bạn, nhưng tôi có một góc nhìn khác) hoặc "I\'m not so sure about that." (Tôi không chắc lắm về điều đó).',
        },
      ],
      quizzes: [
        {
          question: 'Khi muốn gọi món trong nhà hàng, bạn nên nói câu nào?',
          options: [
            'Give me the chicken soup.',
            'I want the chicken soup.',
            "I'd like the chicken soup, please.",
            'The chicken soup!',
          ],
          correctAnswerIndex: 2,
          explanation: '"I\'d like..." hoặc "I\'ll have..." là cách gọi món lịch sự và phổ biến nhất trong tiếng Anh.',
        },
      ],
    },
    {
      id: 'academic-essay-writing',
      title: 'Kỹ Năng Viết Luận Học Thuật',
      description:
        'Hướng dẫn cấu trúc của một bài luận 5 đoạn (5-paragraph essay), cách viết câu chủ đề (topic sentence), phát triển luận điểm và viết kết bài hiệu quả.',
      duration: '60 phút',
      difficulty: 'Trung bình',
      realWorldApplications: [
        'Viết bài luận ở trường',
        'Chuẩn bị cho các kỳ thi chuẩn hóa (IELTS, TOEFL)',
        'Viết email trang trọng',
      ],
      objectives: [
        'Hiểu rõ cấu trúc của một bài luận học thuật: Mở bài, Thân bài, Kết bài.',
        'Học cách viết một câu luận đề (thesis statement) rõ ràng và mạch lạc.',
        'Phát triển các đoạn thân bài với câu chủ đề, các ý hỗ trợ và ví dụ cụ thể.',
        'Sử dụng các từ nối (linking words) để tạo sự liên kết giữa các câu và các đoạn.',
      ],
      faqs: [
        {
          question: 'Thesis statement (câu luận đề) là gì và tại sao nó quan trọng?',
          answer:
            'Thesis statement là một hoặc hai câu, thường nằm ở cuối đoạn mở bài, tóm tắt ý chính hoặc quan điểm của toàn bộ bài luận. Nó giống như một tấm bản đồ chỉ đường cho cả người viết và người đọc, cho biết bài luận sẽ nói về điều gì và theo hướng nào.',
        },
        {
          question: 'Làm thế nào để đoạn văn của tôi không bị rời rạc?',
          answer:
            'Hãy sử dụng các từ và cụm từ nối. Ví dụ: để thêm ý, dùng "Furthermore", "In addition". Để chỉ sự tương phản, dùng "However", "On the other hand". Để chỉ kết quả, dùng "Therefore", "As a result". Chúng giúp tạo ra một dòng chảy mượt mà cho bài viết.',
        },
        {
          question: 'Sự khác biệt giữa bài luận mô tả (descriptive) và bài luận nghị luận (argumentative) là gì?',
          answer:
            'Bài luận mô tả nhằm mục đích "vẽ" một bức tranh bằng lời cho người đọc, tập trung vào chi tiết cảm quan. Bài luận nghị luận nhằm mục đích thuyết phục người đọc chấp nhận một quan điểm cụ thể bằng cách đưa ra các luận điểm và bằng chứng.',
        },
        {
          question: 'Làm thế nào để tránh đạo văn (plagiarism)?',
          answer:
            'Luôn luôn trích dẫn nguồn khi bạn sử dụng ý tưởng, dữ liệu hoặc câu chữ của người khác. Hãy diễn giải (paraphrase) ý tưởng bằng lời của chính bạn thay vì sao chép nguyên văn, và vẫn phải ghi nguồn. Sử dụng các công cụ kiểm tra đạo văn trước khi nộp bài.',
        },
        {
          question: 'Câu chủ đề (topic sentence) là gì?',
          answer:
            'Câu chủ đề là câu quan trọng nhất trong một đoạn văn. Nó thường là câu đầu tiên và nêu lên ý chính của toàn bộ đoạn văn đó. Các câu còn lại trong đoạn sẽ có nhiệm vụ giải thích, làm rõ hoặc đưa ra ví dụ cho câu chủ đề.',
        },
        {
          question: 'Làm thế nào để trích dẫn nguồn đúng cách trong bài luận?',
          answer:
            'Có nhiều phong cách trích dẫn khác nhau (APA, MLA, Chicago...). Hãy hỏi giáo viên của bạn về phong cách được yêu cầu. Về cơ bản, bạn cần có trích dẫn trong bài (in-text citation) ngay sau thông tin bạn sử dụng và một danh sách tài liệu tham khảo (bibliography/references) ở cuối bài.',
        },
        {
          question: 'Một số lỗi ngữ pháp phổ biến cần tránh trong văn viết học thuật là gì?',
          answer:
            'Các lỗi phổ biến bao gồm: lỗi hòa hợp chủ-vị (subject-verb agreement), câu thiếu thành phần (sentence fragments), câu quá dài và rườm rà (run-on sentences), và sử dụng sai dấu câu.',
        },
        {
          question: 'Làm thế nào để bài viết của tôi súc tích hơn?',
          answer:
            'Tránh các từ và cụm từ không cần thiết. Sử dụng động từ mạnh thay vì các cụm động từ dài. Ví dụ, thay vì viết "make a decision", hãy viết "decide". Đọc lại bài viết của bạn và cắt bỏ bất kỳ từ nào không đóng góp vào ý nghĩa của câu.',
        },
        {
          question: 'Mục đích của việc đưa ra phản đề (counter-argument) trong bài luận là gì?',
          answer:
            'Việc đưa ra và sau đó bác bỏ một phản đề cho thấy bạn đã xem xét vấn đề từ nhiều phía. Điều này làm cho luận điểm của bạn trở nên mạnh mẽ và đáng tin cậy hơn, vì bạn đã chủ động giải quyết các ý kiến trái chiều.',
        },
        {
          question: 'Làm thế nào để tìm ý tưởng cho bài luận của mình?',
          answer:
            'Bạn có thể thử các kỹ thuật như viết tự do (freewriting), lập sơ đồ tư duy (mind mapping), hoặc thảo luận với bạn bè. Đọc các bài viết liên quan đến chủ đề cũng là một cách tuyệt vời để khơi nguồn cảm hứng và hình thành quan điểm riêng.',
        },
      ],
      quizzes: [
        {
          question: 'Phần nào của bài luận nên tóm tắt lại các ý chính và đưa ra nhận định cuối cùng?',
          options: [
            'Mở bài (Introduction)',
            'Đoạn thân bài đầu tiên',
            'Kết bài (Conclusion)',
            'Câu chủ đề (Topic sentence)',
          ],
          correctAnswerIndex: 2,
          explanation:
            'Kết bài là nơi bạn nhắc lại câu luận đề bằng một cách diễn đạt khác, tóm tắt các luận điểm chính đã trình bày trong thân bài, và đưa ra một suy nghĩ, một lời kêu gọi hoặc một dự đoán cuối cùng.',
        },
      ],
    },
    {
      id: 'presentation-debate-skills',
      title: 'Kỹ Năng Thuyết Trình và Tranh Biện',
      description:
        'Trang bị các kỹ năng cần thiết để xây dựng một bài thuyết trình hấp dẫn và tham gia vào một cuộc tranh biện một cách tự tin và thuyết phục.',
      duration: '55 phút',
      difficulty: 'Nâng cao',
      realWorldApplications: ['Thuyết trình dự án', 'Tham gia câu lạc bộ tranh biện', 'Bảo vệ quan điểm cá nhân'],
      objectives: [
        'Học cách cấu trúc một bài thuyết trình (Mở đầu, Nội dung chính, Kết luận).',
        'Sử dụng ngôn ngữ cơ thể (giao tiếp bằng mắt, cử chỉ) một cách hiệu quả.',
        'Học các cụm từ dùng để giới thiệu, chuyển ý và kết thúc bài nói.',
        'Nắm vững các kỹ thuật cơ bản trong tranh biện: đưa ra luận điểm, phản bác và cung cấp bằng chứng.',
      ],
      faqs: [
        {
          question: 'Làm thế nào để bớt run khi thuyết trình?',
          answer:
            'Sự chuẩn bị kỹ lưỡng là chìa khóa. Hãy luyện tập nhiều lần, nói trước gương hoặc ghi âm lại. Nắm vững nội dung sẽ giúp bạn tự tin hơn. Trước khi nói, hãy hít thở sâu vài lần. Hãy nhớ rằng khán giả muốn bạn thành công!',
        },
        {
          question: 'Trong tranh biện, làm thế nào để phản bác ý kiến của người khác mà không gây mất lòng?',
          answer:
            'Hãy tập trung vào việc phản bác luận điểm, chứ không phải công kích cá nhân. Bắt đầu bằng cách công nhận ý kiến của họ một cách lịch sự, ví dụ: "I understand your point, however..." (Tôi hiểu quan điểm của bạn, tuy nhiên...) hoặc "That\'s an interesting perspective, but have you considered...?" (Đó là một góc nhìn thú vị, nhưng bạn đã xem xét đến... chưa?).',
        },
        {
          question: 'Bài thuyết trình của tôi nên dài bao lâu?',
          answer:
            'Điều này phụ thuộc vào yêu cầu. Một quy tắc chung là mỗi slide nên tương ứng với khoảng 1-2 phút nói. Nếu bạn có 15 phút, hãy nhắm đến khoảng 7-10 slide. Luôn dành thời gian cho phần hỏi đáp ở cuối.',
        },
        {
          question: 'Thế nào là một slide thuyết trình (visual aid) tốt?',
          answer:
            'Một slide tốt nên đơn giản, trực quan và dễ đọc. Sử dụng ít chữ, nhiều hình ảnh hoặc biểu đồ. Mỗi slide chỉ nên tập trung vào một ý chính. Tránh các màu sắc gây mất tập trung và các font chữ khó đọc.',
        },
        {
          question: 'Làm thế nào để cấu trúc phần mở đầu bài thuyết trình để thu hút khán giả?',
          answer:
            'Hãy bắt đầu bằng một "cái móc" (a hook). Đó có thể là một câu hỏi gây ngạc nhiên, một số liệu thống kê gây sốc, một câu chuyện cá nhân ngắn gọn, hoặc một hình ảnh ấn tượng. Sau đó, giới thiệu ngắn gọn chủ đề và cho khán giả biết họ sẽ học được gì sau bài nói của bạn.',
        },
        {
          question: '"Quy tắc số ba" (Rule of Three) trong nói trước công chúng là gì?',
          answer:
            'Đây là một nguyên tắc cho rằng thông tin được trình bày theo nhóm ba sẽ dễ nhớ và có tác động mạnh mẽ hơn. Ví dụ, bạn có thể cấu trúc bài nói của mình thành ba phần chính, hoặc đưa ra ba luận điểm hỗ trợ cho ý kiến của mình.',
        },
        {
          question: 'Trong tranh biện, sự khác biệt giữa "rebuttal" và "counter-argument" là gì?',
          answer:
            '"Counter-argument" (phản đề) là bạn chủ động đưa ra một quan điểm đối lập với mình. "Rebuttal" (phản bác) là khi bạn trực tiếp đáp lại và chỉ ra điểm yếu trong luận điểm mà đối thủ vừa trình bày.',
        },
        {
          question: 'Làm thế nào để sử dụng giọng nói hiệu quả (tông giọng, tốc độ, âm lượng)?',
          answer:
            'Hãy thay đổi giọng nói của bạn để giữ sự chú ý. Nói chậm và rõ ràng khi trình bày những điểm quan trọng. Tăng âm lượng và tốc độ để thể hiện sự nhiệt tình. Sử dụng những khoảng lặng ngắn để nhấn mạnh một ý hoặc cho khán giả thời gian suy ngẫm.',
        },
        {
          question: 'Tôi nên làm gì nếu quên mất mình định nói gì tiếp theo?',
          answer:
            'Đừng hoảng sợ. Hãy bình tĩnh hít một hơi. Bạn có thể nhìn vào ghi chú của mình. Một cách khác là tương tác với khán giả bằng cách hỏi một câu hỏi, ví dụ: "Does that make sense so far?" (Đến đây mọi người vẫn hiểu chứ ạ?). Điều này cho bạn một vài giây để định thần lại.',
        },
        {
          question: 'Tại sao phần hỏi đáp (Q&A) lại quan trọng?',
          answer:
            'Phần Q&A cho thấy bạn tự tin vào chủ đề của mình và tôn trọng khán giả. Đây là cơ hội để bạn làm rõ những điểm khán giả chưa hiểu, nhận được phản hồi và tạo ra một cuộc đối thoại hai chiều, thay vì chỉ độc thoại.',
        },
      ],
      quizzes: [
        {
          question: 'Trong một bài thuyết trình, "giao tiếp bằng mắt" (eye contact) có tác dụng gì?',
          options: [
            'Làm cho bạn trông đáng sợ hơn',
            'Giúp bạn nhớ bài tốt hơn',
            'Tạo sự kết nối và tin tưởng với khán giả',
            'Không có tác dụng gì đặc biệt',
          ],
          correctAnswerIndex: 2,
          explanation:
            'Giao tiếp bằng mắt cho thấy sự tự tin và chân thành. Nó giúp thu hút sự chú ý của khán giả và làm cho họ cảm thấy được tôn trọng và tham gia vào bài nói của bạn.',
        },
      ],
    },
  ],
  features: [
    'Tình huống giao tiếp thực tế',
    'Hướng dẫn viết luận chi tiết',
    'Mẹo thuyết trình và tranh biện',
    'Bài tập thực hành và đóng vai',
  ],
  prerequisites: ['Tiếng Anh trình độ trung cấp (B1) trở lên'],
  objectives: [
    'Giao tiếp tự tin và lưu loát trong các tình huống hàng ngày.',
    'Viết được các bài luận có cấu trúc, mạch lạc và thuyết phục.',
    'Trình bày ý tưởng một cách rõ ràng và hấp dẫn trước đám đông.',
    'Phát triển tư duy phản biện và khả năng bảo vệ quan điểm bằng tiếng Anh.',
  ],
  careerOutcomes: [
    'Kỹ năng cần thiết để du học và làm việc trong môi trường quốc tế.',
    'Nền tảng cho các ngành nghề đòi hỏi sử dụng tiếng Anh thường xuyên như biên-phiên dịch, quan hệ quốc tế, du lịch, kinh doanh quốc tế.',
  ],
  tags: ['tiếng Anh', 'giao tiếp', 'viết luận', 'thuyết trình', 'tranh biện'],
};
