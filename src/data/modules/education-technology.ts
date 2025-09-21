import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';
import { BaseLessonData } from '@/types/lesson-base';

export const educationTechnologyLessons: BaseLessonData[] = [
  {
    id: 'learning-management-systems',
    title: 'Hệ Thống Quản Lý Học Tập (LMS) & Nền Tảng Giáo Dục',
    description:
      'Tìm hiểu và triển khai các hệ thống quản lý học tập hiện đại như Moodle, Canvas, Google Classroom và các nền tảng giáo dục trực tuyến. Khóa học cung cấp kiến thức toàn diện về thiết kế, triển khai và quản lý LMS hiệu quả.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=aKZBxTJvPnE', // "LMS là gì?"
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu rõ các tính năng và lợi ích của các hệ thống LMS phổ biến',
      'Thiết kế và tùy chỉnh môi trường học tập trực tuyến hiệu quả',
      'Quản lý nội dung, đánh giá và tương tác học sinh trong LMS',
      'Tích hợp các công cụ giáo dục bên thứ ba vào hệ thống LMS',
      'Phân tích dữ liệu học tập và cải thiện hiệu quả giảng dạy',
    ],
    prerequisites: [
      'Kiến thức cơ bản về công nghệ thông tin và internet',
      'Kinh nghiệm giảng dạy hoặc quản lý giáo dục',
      'Hiểu biết về quy trình học tập và đánh giá học sinh',
    ],
    exercises: [
      {
        title: 'Thiết Lập Google Classroom Chuyên Nghiệp',
        description: 'Tạo lớp học ảo hoàn chỉnh với tài liệu, bài tập và hệ thống chấm điểm',
        difficulty: 'Cơ bản',
        materials: [
          'Tài khoản Google Workspace for Education',
          'Nội dung giảng dạy mẫu',
          'Danh sách học sinh thử nghiệm',
        ],
        procedure: [
          'Đăng ký và cấu hình Google Workspace for Education',
          'Tạo lớp học mới với banner và mô tả chuyên nghiệp',
          'Thiết lập cấu trúc thư mục và phân quyền truy cập',
          'Upload tài liệu giảng dạy và tạo bài tập tương tác',
          'Cấu hình hệ thống chấm điểm và phản hồi tự động',
          'Mời học sinh tham gia và hướng dẫn sử dụng nền tảng',
        ],
        expectedResults: 'Lớp học ảo hoạt động hoàn chỉnh với 100% học sinh tham gia và tương tác tích cực',
        solution:
          'Sử dụng Google Classroom như một giải pháp LMS miễn phí với tích hợp Gmail, Drive, Meet và các ứng dụng Google khác. Kết hợp với Kahoot, Padlet và các công cụ bên thứ ba để tăng tính tương tác.',
      },
      {
        title: 'Phân Tích Dữ Liệu Học Tập Với Canvas Analytics',
        description: 'Sử dụng công cụ phân tích của Canvas để theo dõi và cải thiện hiệu quả học tập',
        difficulty: 'Nâng cao',
        materials: ['Tài khoản Canvas Instructor', 'Dữ liệu học tập 3 tháng', 'Công cụ Excel/Google Sheets'],
        procedure: [
          'Truy cập Canvas Analytics và hiểu các metric cơ bản',
          'Xuất dữ liệu tương tác và điểm số của học sinh',
          'Phân tích mẫu hành vi học tập và xác định học sinh cần hỗ trợ',
          'Tạo dashboard tùy chỉnh để theo dõi tiến độ lớp học',
          'Thiết lập cảnh báo tự động cho học sinh có nguy cơ bỏ học',
          'Tạo báo cáo tiến độ chi tiết cho ban giám hiệu',
        ],
        expectedResults: 'Dashboard phân tích học tập giúp cải thiện 25% tỷ lệ thành công của học sinh',
        solution:
          'Canvas Analytics cung cấp insights sâu sắc về hành vi học tập. Kết hợp với Google Data Studio để tạo visualizations chuyên nghiệp và Power BI để phân tích predictive.',
      },
    ],
    realWorldApplications: [
      'Các trường đại học sử dụng Canvas và Blackboard để quản lý hàng nghìn khóa học trực tuyến',
      'Coursera và edX xây dựng nền tảng MOOC phục vụ hàng triệu học viên toàn cầu',
      'Khan Academy sử dụng adaptive learning để cá nhân hóa trải nghiệm học tập cho từng học sinh',
      'Google for Education tích hợp Classroom với Meet và Drive tạo hệ sinh thái giáo dục hoàn chỉnh',
    ],
    caseStudies: [
      {
        title: 'Chuyển Đổi Số Giáo Dục Tại Đại Học FPT',
        organization: 'Đại học FPT Việt Nam',
        problem: 'Quản lý hàng nghìn sinh viên và giảng viên trên nhiều cơ sở, đảm bảo chất lượng giảng dạy đồng nhất',
        solution:
          'Triển khai hệ thống LMS tùy chỉnh tích hợp với Microsoft Teams, Power BI analytics và AI chatbot hỗ trợ sinh viên',
        impact: 'Tăng 60% mức độ tương tác, giảm 40% thời gian quản lý, cải thiện 35% điểm satisfaction của sinh viên',
        innovations: [
          'AI-powered học tập cá nhân hóa',
          'Virtual reality labs',
          'Blockchain credential verification',
          'Predictive analytics để giảm tỷ lệ bỏ học',
        ],
      },
    ],
    resources: [
      {
        title: 'Hướng Dẫn Canvas Teacher',
        url: 'https://community.canvaslms.com/t5/Canvas-Basics-Guide/tkb-p/basics',
        type: 'Documentation',
      },
      {
        title: 'Google for Education Training Center',
        url: 'https://edu.google.com/teacher-center/',
        type: 'Tutorial',
      },
    ],
    vietnamContext: {
      title: 'Thực tiễn áp dụng LMS tại Việt Nam',
      content: [
        'Nhiều trường đại học lớn như Đại học FPT, HUTECH, RMIT Việt Nam đã triển khai sâu rộng các hệ thống LMS như Canvas, Blackboard và Moodle để quản lý đào tạo.',
        'Các tập đoàn lớn như Viettel, FPT Software sử dụng LMS để đào tạo nội bộ cho hàng chục nghìn nhân viên.',
        'Trong giáo dục phổ thông, các nền tảng như VNPT E-Learning, Viettel Study, và OLM.vn đang được sử dụng rộng rãi, đặc biệt sau giai đoạn học trực tuyến do COVID-19.',
        'Google Classroom là công cụ cực kỳ phổ biến ở mọi cấp học tại Việt Nam nhờ tính đơn giản, miễn phí và tích hợp tốt với bộ công cụ của Google.',
      ],
    },
    careerConnect: {
      name: 'Anh Trần Minh Huy',
      title: 'Chuyên gia E-Learning',
      company: 'Tập đoàn FPT',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-minh-huy',
      quote:
        'Công việc của tôi là biến các ý tưởng đào tạo thành các khóa học trực tuyến hấp dẫn trên hệ thống LMS. Việc lựa chọn, tùy chỉnh và quản trị một LMS hiệu quả là chìa khóa để đảm bảo hàng ngàn nhân viên có thể học tập mọi lúc, mọi nơi và theo dõi được tiến trình của mình.',
    },
    quizzes: [
      {
        question: 'Hệ thống LMS nào sau đây là mã nguồn mở và rất phổ biến tại các trường đại học Việt Nam?',
        options: ['Canvas', 'Blackboard', 'Moodle', 'Google Classroom'],
        correctAnswerIndex: 2,
        explanation:
          'Moodle là một hệ thống quản lý học tập mã nguồn mở, cho phép các trường đại học tùy biến sâu và được sử dụng rộng rãi tại Việt Nam.',
      },
      {
        question: 'Tính năng nào KHÔNG phải là một chức năng cốt lõi của một LMS?',
        options: [
          'Quản lý khóa học và tài liệu',
          'Theo dõi tiến độ và chấm điểm',
          'Tạo diễn đàn thảo luận',
          'Soạn thảo văn bản chuyên nghiệp như Microsoft Word',
        ],
        correctAnswerIndex: 3,
        explanation:
          'Mặc dù LMS có trình soạn thảo văn bản, nhưng nó không phải là một công cụ soạn thảo chuyên nghiệp như Word. Các chức năng cốt lõi của LMS tập trung vào quản lý và phân phối nội dung học tập.',
      },
    ],
    faqs: [
      {
        question: 'LMS là gì và tại sao nó quan trọng trong giáo dục hiện đại?',
        answer:
          'LMS (Learning Management System) là một phần mềm ứng dụng để quản trị, tài liệu hóa, theo dõi, báo cáo và cung cấp các khóa học giáo dục hoặc chương trình đào tạo. Nó quan trọng vì giúp tự động hóa việc quản lý, cung cấp nội dung học tập mọi lúc mọi nơi, cá nhân hóa lộ trình học và thu thập dữ liệu để cải thiện chất lượng giảng dạy.',
      },
      {
        question: 'Sự khác biệt chính giữa Moodle, Canvas và Google Classroom là gì?',
        answer:
          'Moodle là mã nguồn mở, tùy biến cao, phù hợp cho các tổ chức muốn toàn quyền kiểm soát. Canvas có giao diện hiện đại, thân thiện người dùng và hệ sinh thái tích hợp mạnh mẽ, phổ biến ở giáo dục đại học. Google Classroom đơn giản, miễn phí, tích hợp chặt chẽ với bộ công cụ Google, rất phổ biến trong giáo dục phổ thông.',
      },
      {
        question: 'Làm thế nào để lựa chọn LMS phù hợp cho một trường học hoặc doanh nghiệp?',
        answer:
          'Để chọn LMS phù hợp, bạn cần xem xét các yếu tố như: quy mô người dùng, ngân sách, yêu cầu về tính năng (ví dụ: gamification, báo cáo, tích hợp), trình độ kỹ thuật của đội ngũ quản trị và người dùng, và khả năng mở rộng trong tương lai.',
      },
      {
        question: 'Triển khai một hệ thống LMS thành công cần những yếu tố nào?',
        answer:
          'Một dự án triển khai LMS thành công cần có: sự ủng hộ từ ban lãnh đạo, một kế hoạch triển khai rõ ràng, chương trình đào tạo kỹ lưỡng cho giảng viên và học sinh, nội dung học tập chất lượng cao được chuẩn bị sẵn, và một đội ngũ hỗ trợ kỹ thuật chuyên nghiệp.',
      },
      {
        question: 'SCORM là gì và tại sao nó quan trọng với LMS?',
        answer: 'SCORM (Sharable Content Object Reference Model) là một bộ tiêu chuẩn kỹ thuật cho các phần mềm e-learning. Nội dung được tạo theo chuẩn SCORM có thể được chạy trên bất kỳ LMS nào tương thích với SCORM. Điều này cho phép các trường học và doanh nghiệp dễ dàng mua hoặc chia sẻ nội dung khóa học mà không bị "khóa" vào một nhà cung cấp LMS duy nhất.'
      },
      {
        question: 'Làm thế nào để tăng cường sự tương tác của học sinh trên LMS?',
        answer: 'Hãy tận dụng các công cụ tương tác như diễn đàn thảo luận, các buổi học ảo qua video conference, các bài tập nhóm, và các hoạt động có tính "game hóa" (gamification) như trao huy hiệu, bảng xếp hạng. Việc thiết kế các hoạt động đòi hỏi sự hợp tác và phản hồi thường xuyên cũng rất quan trọng.'
      },
      {
        question: 'xAPI (Experience API) là gì và nó khác gì so với SCORM?',
        answer: 'xAPI là một tiêu chuẩn e-learning mới hơn, linh hoạt hơn SCORM. Nó cho phép theo dõi nhiều loại trải nghiệm học tập hơn, không chỉ giới hạn trong LMS, mà còn cả trên ứng dụng di động, mô phỏng VR/AR, hoặc các hoạt động ngoài đời thực. Dữ liệu được lưu trữ trong một Kho lưu trữ hồ sơ học tập (LRS).'
      },
      {
        question: 'LMS có thể giúp gì trong việc đánh giá và kiểm định chất lượng giáo dục?',
        answer: 'LMS là một nguồn dữ liệu quý giá cho việc kiểm định. Nó cung cấp bằng chứng về việc phân phối nội dung, sự tương tác của sinh viên, kết quả đánh giá, và phản hồi của giảng viên. Các báo cáo từ LMS giúp chứng minh rằng chương trình đào tạo đang đáp ứng các tiêu chuẩn chất lượng đã đề ra.'
      },
      {
        question: 'Vai trò của quản trị viên LMS (LMS Administrator) là gì?',
        answer: 'Quản trị viên LMS chịu trách nhiệm về mặt kỹ thuật và vận hành của hệ thống. Công việc của họ bao gồm tạo khóa học, quản lý người dùng, cấu hình hệ thống, sao lưu dữ liệu, hỗ trợ kỹ thuật cho giảng viên và học sinh, và đảm bảo hệ thống hoạt động ổn định.'
      },
      {
        question: 'LMS trên nền tảng đám mây (Cloud-based) có ưu điểm gì so với tự host?',
        answer: 'LMS trên đám mây (SaaS) có ưu điểm là không cần đầu tư vào hạ tầng máy chủ, dễ dàng triển khai, được nhà cung cấp tự động cập nhật và bảo trì, và có khả năng mở rộng linh hoạt. Tự host cho phép tùy biến sâu hơn nhưng đòi hỏi đội ngũ kỹ thuật có chuyên môn cao để vận hành và bảo trì.'
      }
    ],
  },

  {
    id: 'ai-powered-education-tools',
    title: 'Công Cụ Giáo Dục Được Hỗ Trợ Bởi AI & Machine Learning',
    description:
      'Khám phá và ứng dụng các công cụ AI tiên tiến trong giáo dục như chatbot hỗ trợ học tập, hệ thống chấm bài tự động, adaptive learning và personalized education. Tìm hiểu cách tích hợp AI để nâng cao hiệu quả giảng dạy và học tập.',
    duration: '210 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=OBKNCcxfYEs', // "AI trong giáo dục"
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu nguyên lý hoạt động của AI trong giáo dục và các ứng dụng phổ biến',
      'Triển khai chatbot giáo dục để hỗ trợ học sinh 24/7',
      'Sử dụng AI để tự động chấm bài và phản hồi chi tiết cho học sinh',
      'Thiết kế hệ thống adaptive learning cá nhân hóa cho từng học sinh',
      'Đánh giá hiệu quả và đạo đức của việc sử dụng AI trong giáo dục',
    ],
    prerequisites: [
      'Hiểu biết cơ bản về artificial intelligence và machine learning',
      'Kinh nghiệm sử dụng các công cụ giáo dục số',
      'Kiến thức về data analysis và statistics cơ bản',
    ],
    exercises: [
      {
        title: 'Xây Dựng Chatbot Hỗ Trợ Học Tập Với Dialogflow',
        description: 'Tạo AI chatbot để trả lời câu hỏi thường gặp và hướng dẫn học sinh',
        difficulty: 'Trung bình',
        materials: [
          'Google Cloud Account',
          'Dialogflow Console',
          'Dataset câu hỏi thường gặp',
          'Webhook development knowledge',
        ],
        procedure: [
          'Thiết lập Dialogflow project và định nghĩa intents cơ bản',
          'Tạo training phrases cho các câu hỏi phổ biến của học sinh',
          'Thiết kế conversation flow với context và follow-up questions',
          'Tích hợp với database để truy xuất thông tin khóa học',
          'Deploy chatbot lên website hoặc ứng dụng messaging',
          'Test và fine-tune chatbot dựa trên feedback thực tế',
        ],
        expectedResults:
          'Chatbot có thể trả lời chính xác 85%+ câu hỏi của học sinh và giảm 60% workload của giảng viên',
        solution:
          'Sử dụng Google Dialogflow ES với Natural Language Understanding để tạo chatbot thông minh. Tích hợp với Google Sheets hoặc Airtable làm knowledge base và webhook để xử lý logic phức tạp.',
      },
      {
        title: 'Hệ Thống Chấm Bài Tự Động Với OpenAI GPT',
        description: 'Phát triển công cụ AI để chấm bài tự luận và đưa ra phản hồi chi tiết',
        difficulty: 'Nâng cao',
        materials: [
          'OpenAI API key',
          'Python programming environment',
          'Mẫu bài tự luận và rubric',
          'Database để lưu kết quả',
        ],
        procedure: [
          'Thiết lập OpenAI API và hiểu cách sử dụng GPT-4 cho grading',
          'Tạo detailed rubric và scoring criteria cho từng loại bài tập',
          'Phát triển prompt engineering để AI hiểu yêu cầu chấm bài',
          'Xây dựng giao diện web để giảng viên upload và quản lý bài tập',
          'Implement feedback generation với suggestions cải thiện cụ thể',
          'Tạo dashboard analytics để theo dõi hiệu suất lớp học',
        ],
        expectedResults: 'Hệ thống chấm bài với độ chính xác 90%+ và tiết kiệm 70% thời gian của giảng viên',
        solution:
          'Sử dụng OpenAI GPT-4 với custom prompts và fine-tuning. Kết hợp với computer vision để xử lý bài viết tay và natural language processing để phân tích grammar, logic và content quality.',
      },
    ],
    realWorldApplications: [
      'Duolingo sử dụng AI để cá nhân hóa lessons và dự đoán từ nào học sinh có thể quên',
      'Grammarly AI giúp hàng triệu học sinh cải thiện kỹ năng viết tiếng Anh',
      'Carnegie Learning triển khai MATHia AI tutor trong hàng nghìn trường học Mỹ',
      'Squirrel AI ở Trung Quốc sử dụng adaptive learning cho hàng triệu học sinh K-12',
    ],
    caseStudies: [
      {
        title: 'AI-Powered Personalized Learning tại Georgia State University',
        organization: 'Georgia State University, USA',
        problem: 'Tỷ lệ bỏ học cao (30%) và khó khăn trong việc hỗ trợ cá nhân hóa cho 50,000+ sinh viên',
        solution:
          'Triển khai chatbot AI "Pounce" và predictive analytics để identify và hỗ trợ sinh viên có nguy cơ bỏ học',
        impact: 'Giảm 22% tỷ lệ bỏ học, tăng 5% graduation rate, tiết kiệm $3.2 triệu chi phí tư vấn học tập',
        innovations: [
          'Chatbot với 40,000+ câu hỏi thường gặp',
          'Predictive modeling cho student success',
          'Automated financial aid guidance',
          'Real-time intervention alerts',
        ],
      },
    ],
    resources: [
      {
        title: 'Google AI for Education',
        url: 'https://ai.google/education/',
        type: 'Documentation',
      },
      {
        title: 'OpenAI Education Use Cases',
        url: 'https://openai.com/blog/chatgpt-in-education',
        type: 'Documentation',
      },
    ],
    vietnamContext: {
      title: 'AI trong Giáo dục tại Việt Nam',
      content: [
        'ELSA Speak, một startup Việt Nam thành công toàn cầu, sử dụng AI để dạy phát âm tiếng Anh.',
        'Nền tảng FPT.AI for Education cung cấp các giải pháp như nhận dạng chữ viết tay, chấm thi tự động cho các trường học.',
        'Các nền tảng học tập trực tuyến như VUIHOC, Hocmai.vn đang tích hợp AI để cá nhân hóa lộ trình học và gợi ý bài tập phù hợp cho học sinh.',
        'Chatbot tuyển sinh sử dụng AI được nhiều trường đại học và cao đẳng triển khai để tư vấn cho học sinh và phụ huynh 24/7.',
      ],
    },
    careerConnect: {
      name: 'Chị Nguyễn Lan Anh',
      title: 'Product Manager, AI in EdTech',
      company: 'ELSA Corp',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-lan-anh',
      quote:
        'Tại ELSA, chúng tôi không chỉ xây dựng một ứng dụng học tiếng Anh, mà còn tạo ra một người bạn đồng hành AI. Công việc của tôi là nghiên cứu nhu cầu người học, làm việc với các kỹ sư AI để phát triển các tính năng nhận diện giọng nói chính xác nhất, giúp hàng triệu người Việt tự tin hơn khi giao tiếp.',
    },
    quizzes: [
      {
        question: 'Ứng dụng nào của AI trong giáo dục giúp tạo ra lộ trình học tập riêng cho mỗi học sinh?',
        options: ['Chatbot hỗ trợ', 'Chấm bài tự động', 'Adaptive Learning (Học tập thích ứng)', 'Nhận dạng khuôn mặt'],
        correctAnswerIndex: 2,
        explanation:
          'Adaptive Learning sử dụng AI để phân tích hiệu suất của học sinh và tự động điều chỉnh độ khó, nội dung và phương pháp giảng dạy cho phù hợp với từng cá nhân.',
      },
      {
        question: 'Startup EdTech nào của Việt Nam nổi tiếng toàn cầu với ứng dụng luyện phát âm tiếng Anh bằng AI?',
        options: ['Hocmai.vn', 'ELSA Speak', 'VUIHOC', 'Topica'],
        correctAnswerIndex: 1,
        explanation:
          'ELSA Speak là một trong những startup EdTech thành công nhất của Việt Nam, huy động được hàng triệu USD vốn đầu tư và có hàng chục triệu người dùng trên toàn thế giới.',
      },
    ],
    faqs: [
      {
        question: 'AI có thể giúp cá nhân hóa việc học như thế nào?',
        answer: 'AI phân tích dữ liệu về cách một học sinh học (tốc độ, các lỗi thường gặp, các chủ đề đã nắm vững) để tự động điều chỉnh nội dung và độ khó của bài học tiếp theo. Điều này đảm bảo mỗi học sinh đều học ở nhịp độ phù hợp nhất với khả năng của mình, không bị quá dễ gây nhàm chán hay quá khó gây nản chí.'
      },
      {
        question: 'Hệ thống chấm bài tự động bằng AI hoạt động ra sao?',
        answer: 'Đối với câu hỏi trắc nghiệm, việc chấm điểm rất đơn giản. Đối với bài tự luận, AI sử dụng Xử lý ngôn ngữ tự nhiên (NLP) để phân tích cấu trúc, ngữ pháp, sự mạch lạc và cả ý nghĩa của bài viết dựa trên một rubric (bộ tiêu chí) được cung cấp. Nó có thể đưa ra phản hồi chi tiết và nhất quán.'
      },
      {
        question: 'Chatbot trong giáo dục có thể làm được những gì?',
        answer: 'Chatbot có thể đóng vai trò là một trợ giảng 24/7, trả lời các câu hỏi thường gặp về khóa học, giải thích các khái niệm cơ bản, đưa ra các câu đố vui để ôn tập, hoặc thậm chí đóng vai một nhân vật lịch sử để học sinh phỏng vấn. Điều này giúp giải phóng thời gian cho giáo viên để tập trung vào các vấn đề phức tạp hơn.'
      },
      {
        question: 'Sử dụng AI trong giáo dục có những rủi ro đạo đức nào?',
        answer: 'Các rủi ro chính bao gồm: 1. Thiên vị (bias) trong thuật toán, có thể đối xử không công bằng với một nhóm học sinh nào đó. 2. Quyền riêng tư dữ liệu của học sinh. 3. Sự phụ thuộc quá mức vào công nghệ, làm giảm tương tác giữa người với người. 4. Nguy cơ gian lận học thuật nếu không được quản lý đúng cách.'
      },
      {
        question: 'AI có thể giúp học sinh có nhu cầu đặc biệt như thế nào?',
        answer: 'AI mang lại lợi ích to lớn cho học sinh có nhu cầu đặc biệt. Ví dụ, công nghệ chuyển văn bản thành giọng nói (text-to-speech) giúp học sinh khiếm thị; công nghệ nhận dạng giọng nói giúp học sinh khó khăn vận động; các ứng dụng học tập thích ứng có thể điều chỉnh để phù hợp với học sinh mắc chứng khó đọc hoặc rối loạn tăng động giảm chú ý (ADHD).'
      },
      {
        question: 'Làm thế nào để giáo viên có thể bắt đầu sử dụng AI trong lớp học?',
        answer: 'Hãy bắt đầu từ những công cụ đơn giản. Sử dụng các nền tảng như Quizlet (với tính năng học thông minh), Grammarly để kiểm tra bài viết, hoặc thậm chí là ChatGPT để tạo ra các ý tưởng bài học, các ví dụ minh họa, hoặc các câu hỏi thảo luận. Điều quan trọng là hãy thử nghiệm và xem công cụ nào phù hợp với phong cách giảng dạy của bạn.'
      },
      {
        question: 'AI có thể dự đoán hiệu suất học tập của học sinh không?',
        answer: 'Có, đây là một ứng dụng quan trọng của phân tích dữ liệu học tập. Bằng cách phân tích các yếu tố như lịch sử điểm số, mức độ chuyên cần, và sự tương tác trên LMS, AI có thể xác định sớm những học sinh có nguy cơ học kém hoặc bỏ học, từ đó cho phép nhà trường can thiệp và hỗ trợ kịp thời.'
      },
      {
        question: 'Generative AI (AI tạo sinh) như DALL-E hay Midjourney có thể được dùng trong giáo dục không?',
        answer: 'Chắc chắn có. Trong môn nghệ thuật, học sinh có thể dùng nó để tạo ra các tác phẩm minh họa. Trong môn văn, học sinh có thể tạo hình ảnh cho các nhân vật trong truyện. Trong môn lịch sử, có thể dùng AI để tái hiện lại các bối cảnh lịch sử. Nó là một công cụ tuyệt vời để thúc đẩy sự sáng tạo.'
      },
      {
        question: 'Làm thế nào để đánh giá một công cụ giáo dục AI có tốt hay không?',
        answer: 'Hãy xem xét các yếu tố: nó có dựa trên các nguyên tắc khoa học giáo dục không? Nó có dễ sử dụng cho cả giáo viên và học sinh không? Nó có cung cấp dữ liệu và phân tích hữu ích không? Và quan trọng nhất, nó có thực sự cải thiện được kết quả học tập và tăng cường sự hứng thú của học sinh không?'
      },
      {
        question: 'Tương lai của AI trong giáo dục sẽ như thế nào?',
        answer: 'Trong tương lai, AI có thể tạo ra những người bạn đồng hành học tập siêu cá nhân hóa, hiểu rõ điểm mạnh, điểm yếu và cả cảm xúc của từng học sinh. Các lớp học ảo với giáo viên AI có thể dạy bất kỳ chủ đề nào. Việc đánh giá sẽ diễn ra liên tục và tức thì, thay vì chỉ qua các kỳ thi định kỳ.'
      }
    ]
  },

  {
    id: 'virtual-augmented-reality-education',
    title: 'Thực Tế Ảo (VR) & Thực Tế Tăng Cường (AR) Trong Giáo Dục',
    description:
      'Khám phá tiềm năng vô hạn của công nghệ VR/AR trong giáo dục. Học cách tạo trải nghiệm học tập immersive với virtual field trips, 3D simulations, và interactive learning environments. Tìm hiểu các công cụ và nền tảng để phát triển nội dung VR/AR giáo dục.',
    duration: '240 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=7r5frPWLUoE', // "VR AR trong giáo dục"
    imageUrl: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu sự khác biệt và ứng dụng của VR, AR và Mixed Reality trong giáo dục',
      'Thiết kế và phát triển trải nghiệm học tập VR/AR tương tác',
      'Sử dụng các nền tảng như CoSpaces, Nearpod VR và Google Expeditions',
      'Tích hợp VR/AR vào curriculum và đánh giá hiệu quả học tập',
      'Quản lý hardware và giải quyết các thách thức kỹ thuật',
    ],
    prerequisites: [
      'Kiến thức cơ bản về 3D graphics và spatial computing',
      'Hiểu biết về hardware VR/AR (Oculus, ARCore, ARKit)',
      'Kỹ năng basic 3D modeling hoặc game development',
    ],
    exercises: [
      {
        title: 'Tạo Virtual Museum Tour Với CoSpaces Edu',
        description: 'Xây dựng bảo tàng ảo tương tác cho môn lịch sử hoặc khoa học',
        difficulty: 'Trung bình',
        materials: [
          'CoSpaces Edu account',
          'VR headsets (tùy chọn)',
          '360° cameras hoặc 360° images',
          'Historical artifacts và content',
        ],
        procedure: [
          'Thiết lập CoSpaces workspace và hiểu giao diện cơ bản',
          'Import 3D models của artifacts và historical objects',
          'Tạo virtual environment với lighting và sound effects',
          'Thêm interactive hotspots với thông tin chi tiết',
          'Program basic interactions và animations với CoBlocks',
          'Test trải nghiệm trên mobile VR và desktop',
          'Share với học sinh và thu thập feedback',
        ],
        expectedResults: 'Virtual museum với 10+ interactive exhibits và 95% học sinh hoàn thành tour',
        solution:
          'CoSpaces Edu cung cấp drag-and-drop interface dễ sử dụng. Kết hợp với Sketchfab để import 3D models chất lượng cao và Poly Google cho assets miễn phí. Sử dụng Google Cardboard làm VR viewer giá rẻ.',
      },
      {
        title: 'AR Chemistry Lab Với Unity và ARCore',
        description: 'Phát triển ứng dụng AR cho phép học sinh thực hiện thí nghiệm hóa học an toàn',
        difficulty: 'Cao',
        materials: [
          'Unity 3D Editor',
          'ARCore SDK',
          'Android development environment',
          '3D models của chemical equipment',
          'Chemistry simulation logic',
        ],
        procedure: [
          'Setup Unity project với ARCore SDK và AR Foundation',
          'Tạo 3D models của laboratory equipment và chemicals',
          'Implement marker-based và markerless AR tracking',
          'Develop interaction system để mix chemicals và observe reactions',
          'Add particle effects và animations cho chemical reactions',
          'Create safety protocols và educational guidance',
          'Build và test trên multiple Android devices',
        ],
        expectedResults: 'AR chemistry app với 20+ experiments và 100% safety compliance',
        solution:
          'Unity AR Foundation với ARCore backend cho Android và ARKit cho iOS. Sử dụng chemistry simulation libraries như Open Babel và visualization với particle systems. Integration với LMS để tracking student progress.',
      },
    ],
    realWorldApplications: [
      'Stanford Medicine sử dụng VR để training phẫu thuật cho sinh viên y khoa',
      'Google Expeditions đưa hàng triệu học sinh đi virtual field trips khắp thế giới',
      'zSpace cung cấp AR workstations cho STEM education tại hàng nghìn trường học',
      'Immersive VR Education tạo virtual classrooms cho remote learning trong COVID-19',
    ],
    caseStudies: [
      {
        title: 'VR Chemistry Labs tại University of Illinois',
        organization: 'University of Illinois, USA',
        problem: 'Thiếu laboratory space và equipment đắt đỏ cho 3000+ sinh viên chemistry',
        solution: 'Triển khai VR chemistry labs với Oculus Rift và custom-built simulation software',
        impact: 'Tiết kiệm 40% chi phí lab, tăng 60% số lượng experiments, giảm 90% accidents',
        innovations: [
          'Physics-based chemistry simulation',
          'Haptic feedback integration',
          'Multi-user collaborative VR labs',
          'AI-powered lab assistant',
        ],
      },
    ],
    resources: [
      {
        title: 'Google for Education VR/AR',
        url: 'https://edu.google.com/products/vr-ar/',
        type: 'Documentation',
      },
      {
        title: 'Unity Learn - AR/VR Development',
        url: 'https://learn.unity.com/pathway/vr-development',
        type: 'Tutorial',
      },
    ],
    vietnamContext: {
      title: 'Ứng dụng VR/AR trong Giáo dục và Đào tạo tại Việt Nam',
      content: [
        'Các trường đại học kỹ thuật như Đại học Bách Khoa, USTH, RMIT Việt Nam đã xây dựng các phòng lab VR/AR để sinh viên thực hành mô phỏng.',
        'Trong lĩnh vực bất động sản, các công ty như Vinhomes sử dụng VR để tạo các tour tham quan nhà mẫu ảo cho khách hàng và đào tạo nhân viên kinh doanh.',
        'Trung tâm Bảo tồn Di tích Cố đô Huế đã bắt đầu ứng dụng AR để tái hiện lại các công trình lịch sử và cung cấp thông tin cho du khách.',
        'Các công ty game Việt Nam đang phát triển các sản phẩm giáo dục sử dụng VR/AR để dạy lịch sử, văn hóa và khoa học cho trẻ em.',
      ],
    },
    careerConnect: {
      name: 'Anh Phạm Hoàng Long',
      title: 'VR/AR Developer for Education',
      company: 'TMA Solutions',
      imageUrl: 'https://i.pravatar.cc/150?u=pham-hoang-long',
      quote:
        'Tôi tạo ra những thế giới ảo nơi sinh viên y khoa có thể thực hành phẫu thuật mà không gặp rủi ro, hay học sinh có thể du hành ngược thời gian về thăm Cố đô Huế. Công việc của tôi là kết hợp giữa lập trình, thiết kế 3D và kịch bản sư phạm để tạo ra những trải nghiệm học tập không thể nào quên.',
    },
    quizzes: [
      {
        question:
          'Công nghệ nào cho phép hiển thị các vật thể ảo trong môi trường thực tế thông qua camera của điện thoại?',
        options: ['Virtual Reality (VR)', 'Augmented Reality (AR)', 'Mixed Reality (MR)', '360° Video'],
        correctAnswerIndex: 1,
        explanation:
          'Augmented Reality (AR) hay Thực tế tăng cường là công nghệ chồng các lớp thông tin ảo (hình ảnh, dữ liệu) lên trên thế giới thực thông qua các thiết bị như smartphone hoặc kính thông minh.',
      },
      {
        question:
          'Nền tảng nào sau đây cho phép người dùng (kể cả không chuyên) dễ dàng tạo ra các thế giới ảo 3D cho giáo dục?',
        options: ['Unity', 'Unreal Engine', 'CoSpaces Edu', 'ARCore'],
        correctAnswerIndex: 2,
        explanation:
          'CoSpaces Edu là một nền tảng thân thiện với người dùng, cho phép giáo viên và học sinh tạo ra các nội dung 3D, VR và AR một cách dễ dàng bằng giao diện kéo-thả và lập trình khối đơn giản.',
      },
    ],
    faqs: [
      {
        question: 'Sự khác biệt cơ bản giữa VR và AR là gì?',
        answer:
          'VR (Thực tế ảo) đưa bạn vào một thế giới hoàn toàn ảo, tách biệt bạn khỏi môi trường thực tại, thường thông qua một chiếc kính che kín mắt. AR (Thực tế tăng cường) thì ngược lại, nó không thay thế mà "tăng cường" thế giới thực bằng cách chèn các vật thể hoặc thông tin ảo vào môi trường xung quanh bạn, thường qua màn hình điện thoại hoặc kính trong suốt.',
      },
      {
        question: 'Chi phí để triển khai VR/AR trong lớp học có đắt không?',
        answer:
          'Chi phí đã giảm đáng kể. Đối với AR, hầu hết học sinh đã có sẵn thiết bị là smartphone. Đối với VR, các giải pháp chi phí thấp như Google Cardboard (sử dụng với điện thoại) có giá rất rẻ. Các thiết bị VR độc lập như Oculus Quest có giá cao hơn nhưng đang ngày càng phải chăng. Quan trọng hơn chi phí phần cứng là chi phí phát triển nội dung chất lượng.',
      },
      {
        question: 'VR/AR có thể được áp dụng cho những môn học nào?',
        answer:
          'Hầu hết mọi môn học! Lịch sử (tham quan di tích ảo), Địa lý (du hành đến các quốc gia), Sinh học (khám phá cơ thể người từ bên trong), Hóa học (thực hiện thí nghiệm nguy hiểm một cách an toàn), Kỹ thuật (tháo lắp động cơ ảo), Nghệ thuật (điêu khắc trong không gian 3D)... Khả năng là vô tận.',
      },
      {
        question: 'Làm thế nào để bắt đầu tạo nội dung VR/AR cho giáo dục mà không cần biết lập trình?',
        answer:
          'Bạn có thể bắt đầu với các nền tảng "no-code" hoặc "low-code" được thiết kế cho giáo dục như CoSpaces Edu hoặc Nearpod. Chúng cung cấp giao diện kéo-thả, thư viện tài nguyên 3D có sẵn và các công cụ lập trình trực quan (dạng khối lệnh), cho phép giáo viên và học sinh tự tạo ra các trải nghiệm tương tác mà không cần kiến thức lập trình chuyên sâu.',
      },
      {
        question: 'Mixed Reality (MR) là gì?',
        answer: 'Mixed Reality (Thực tế hỗn hợp) là một bước tiến của AR. Nó không chỉ hiển thị các vật thể ảo trong thế giới thực, mà còn cho phép các vật thể ảo đó tương tác với môi trường thực. Ví dụ, một quả bóng ảo có thể nảy trên một chiếc bàn thật. Các thiết bị như Microsoft HoloLens là ví dụ điển hình của MR.'
      },
      {
        question: 'Những thách thức khi triển khai VR/AR trong giáo dục là gì?',
        answer: 'Các thách thức chính bao gồm: chi phí phần cứng ban đầu, thiếu nội dung giáo dục chất lượng cao, yêu cầu đào tạo cho giáo viên, các vấn đề kỹ thuật (pin, kết nối), và các lo ngại về sức khỏe (say chuyển động, mỏi mắt) nếu sử dụng trong thời gian dài.'
      },
      {
        question: 'Làm thế nào VR/AR có thể giúp phát triển kỹ năng mềm (soft skills)?',
        answer: 'VR có thể tạo ra các kịch bản mô phỏng thực tế để rèn luyện kỹ năng mềm. Ví dụ, sinh viên có thể thực hành một bài thuyết trình trước đám đông ảo, một nhân viên bán hàng có thể xử lý một khách hàng khó tính ảo, hoặc một nhà quản lý có thể thực hành đưa ra phản hồi cho nhân viên ảo. Môi trường an toàn này cho phép người học thực hành và nhận phản hồi mà không sợ hậu quả.'
      },
      {
        question: 'Một "chuyến đi thực tế ảo" (virtual field trip) hoạt động như thế nào?',
        answer: 'Sử dụng video 360 độ hoặc môi trường 3D được tái tạo, giáo viên có thể "dẫn" học sinh đến những nơi khó có thể đến được trong thực tế, như đỉnh Everest, bên trong một kim tự tháp Ai Cập, hoặc bề mặt sao Hỏa. Học sinh có thể nhìn xung quanh và tương tác với môi trường ảo, mang lại trải nghiệm học tập sống động hơn nhiều so với chỉ xem hình ảnh.'
      },
      {
        question: 'AR có thể được sử dụng trong sách giáo khoa như thế nào?',
        answer: 'Sách giáo khoa có thể được in với các "dấu hiệu" (markers) đặc biệt. Khi học sinh dùng điện thoại hoặc máy tính bảng quét qua các dấu hiệu này, các mô hình 3D, video, hoặc hoạt ảnh liên quan đến bài học sẽ hiện lên trên trang sách. Ví dụ, một mô hình 3D của trái tim đang đập có thể hiện ra từ trang sách sinh học.'
      },
      {
        question: 'Các công cụ phát triển VR/AR chuyên nghiệp là gì?',
        answer: 'Đối với các nhà phát triển chuyên nghiệp, hai game engine phổ biến nhất để tạo ra các ứng dụng VR/AR là Unity (sử dụng ngôn ngữ C#) và Unreal Engine (sử dụng C++ và hệ thống lập trình trực quan Blueprints). Cả hai đều hỗ trợ hầu hết các thiết bị VR/AR trên thị trường.'
      }
    ],
  },

  {
    id: 'educational-data-analytics',
    title: 'Phân Tích Dữ Liệu Giáo Dục & Learning Analytics',
    description:
      'Master nghệ thuật và khoa học của Educational Data Mining và Learning Analytics. Học cách thu thập, xử lý và phân tích dữ liệu học tập để cải thiện outcomes, dự đoán student performance và personalize learning experiences. Sử dụng các công cụ như Tableau, Power BI và Python.',
    duration: '200 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=XscUZ8dIa-8', // "Learning Analytics"
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu các loại dữ liệu giáo dục và phương pháp thu thập ethically',
      'Phân tích student behavior patterns và learning pathways',
      'Xây dựng predictive models cho student success và retention',
      'Tạo dashboards và reports cho stakeholders khác nhau',
      'Implement data-driven decision making trong educational institutions',
    ],
    prerequisites: [
      'Kiến thức statistics và data analysis cơ bản',
      'Kinh nghiệm với Excel/Google Sheets và basic SQL',
      'Hiểu biết về educational assessment và student outcomes',
    ],
    exercises: [
      {
        title: 'Student Performance Dashboard Với Power BI',
        description: 'Tạo interactive dashboard để theo dõi và phân tích hiệu suất học sinh real-time',
        difficulty: 'Trung bình',
        materials: [
          'Power BI Desktop',
          'Student information system data',
          'Learning management system exports',
          'Assessment data từ multiple sources',
        ],
        procedure: [
          'Thu thập và clean data từ SIS, LMS và assessment systems',
          'Thiết kế data model với relationships và calculated measures',
          'Tạo visualizations cho different stakeholder needs',
          'Build drill-down capabilities từ institution đến individual level',
          'Implement real-time data refresh và automated alerts',
          'Design mobile-friendly dashboards cho administrators',
          'Setup user permissions và data security protocols',
        ],
        expectedResults: 'Interactive dashboard với 15+ key metrics và 100% stakeholder adoption',
        solution:
          'Power BI với DirectQuery connections đến databases. Sử dụng Power Query để data transformation và DAX cho advanced calculations. Integration với Power Automate cho automated reporting.',
      },
      {
        title: 'Predictive Modeling Với Python & Scikit-learn',
        description: 'Phát triển machine learning models để dự đoán student success và identify at-risk students',
        difficulty: 'Cao',
        materials: [
          'Python environment với pandas, scikit-learn',
          'Historical student data (3+ years)',
          'Jupyter notebooks',
          'Feature engineering tools',
        ],
        procedure: [
          'Exploratory data analysis để hiểu data patterns',
          'Feature engineering từ raw student interaction data',
          'Split data thành training, validation và test sets',
          'Train multiple ML models (logistic regression, random forest, gradient boosting)',
          'Evaluate model performance với cross-validation',
          'Interpret model results và identify key success factors',
          'Deploy model với Flask API để real-time predictions',
        ],
        expectedResults: 'Predictive model với 85%+ accuracy và actionable insights cho early intervention',
        solution:
          'Sử dụng ensemble methods để combine multiple algorithms. Feature importance analysis để hiểu driving factors. SHAP values để explain individual predictions. MLflow để model versioning và deployment.',
      },
    ],
    realWorldApplications: [
      'Arizona State University sử dụng predictive analytics để tăng graduation rates lên 80%+',
      'Purdue University phát triển Course Signals system để identify struggling students',
      'Open University UK sử dụng learning analytics để personalize content cho 200,000+ students',
      'Khan Academy applies machine learning để optimize practice problems cho từng learner',
    ],
    caseStudies: [
      {
        title: 'Learning Analytics Platform tại FPT University',
        organization: 'FPT University Vietnam',
        problem:
          'Khó khăn trong việc monitor và improve student outcomes across multiple campuses với 50,000+ students',
        solution: 'Phát triển integrated learning analytics platform với real-time dashboards và predictive modeling',
        impact: 'Tăng 23% student retention, giảm 35% time-to-graduation, cải thiện 40% instructor effectiveness',
        innovations: [
          'Multi-campus data integration',
          'Vietnamese language NLP cho feedback analysis',
          'Mobile-first dashboard design',
          'Automated intervention workflows',
        ],
      },
    ],
    resources: [
      {
        title: 'Society for Learning Analytics Research',
        url: 'https://www.solaresearch.org/',
        type: 'Documentation',
      },
      {
        title: 'Learning Analytics Handbook',
        url: 'https://www.solaresearch.org/publications/hla-17/',
        type: 'Documentation',
      },
    ],
    vietnamContext: {
      title: 'Phân tích dữ liệu trong giáo dục Việt Nam',
      content: [
        'Đại học Quốc gia Hà Nội và TP.HCM sử dụng phân tích dữ liệu để tối ưu hóa quy trình tuyển sinh và dự báo kết quả học tập của sinh viên.',
        'Các trung tâm kiểm định chất lượng giáo dục đang áp dụng các công cụ phân tích để đánh giá hiệu quả của các chương trình đào tạo.',
        'Các công ty EdTech lớn tại Việt Nam như FPT, Viettel đều có bộ phận phân tích dữ liệu để cải thiện sản phẩm và cá nhân hóa trải nghiệm người dùng.',
        'Việc phân tích dữ liệu từ các kỳ thi quốc gia giúp các nhà hoạch định chính sách đưa ra những điều chỉnh phù hợp cho chương trình giáo dục phổ thông.',
      ],
    },
    careerConnect: {
      name: 'Chị Lê Thu Trang',
      title: 'Chuyên viên Phân tích Dữ liệu Học tập',
      company: 'Một Tổ chức Giáo dục lớn tại Hà Nội',
      imageUrl: 'https://i.pravatar.cc/150?u=le-thu-trang',
      quote:
        'Dữ liệu giống như "tiếng nói" của học sinh. Bằng cách phân tích điểm số, thời gian học, và mức độ tương tác, tôi có thể phát hiện sớm những sinh viên đang gặp khó khăn và đề xuất các biện pháp can thiệp kịp thời. Công việc của tôi giúp nhà trường đưa ra quyết định dựa trên bằng chứng, thay vì cảm tính.',
    },
    quizzes: [
      {
        question: 'Mục tiêu chính của Learning Analytics là gì?',
        options: [
          'Chỉ để theo dõi điểm danh của học sinh',
          'Để hiểu và tối ưu hóa việc học và môi trường học tập',
          'Để bán dữ liệu học sinh cho các công ty quảng cáo',
          'Để thay thế hoàn toàn vai trò của giáo viên',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Learning Analytics (Phân tích học tập) tập trung vào việc thu thập, phân tích và báo cáo dữ liệu về người học và bối cảnh của họ, nhằm mục đích hiểu và tối ưu hóa việc học và môi trường diễn ra việc học đó.',
      },
      {
        question: 'Công cụ nào sau đây thường được sử dụng để tạo các dashboard trực quan hóa dữ liệu giáo dục?',
        options: ['Python', 'SQL', 'Power BI / Tableau', 'Excel'],
        correctAnswerIndex: 2,
        explanation:
          'Power BI và Tableau là hai công cụ Business Intelligence (BI) hàng đầu, rất mạnh mẽ trong việc tạo ra các báo cáo và dashboard tương tác, trực quan từ các bộ dữ liệu lớn, rất phù hợp cho learning analytics.',
      },
    ],
    faqs: [
      {
        question: 'Phân tích dữ liệu giáo dục có vi phạm quyền riêng tư của học sinh không?',
        answer:
          'Đây là một vấn đề rất quan trọng. Việc phân tích dữ liệu phải luôn tuân thủ các quy định về bảo mật và quyền riêng tư (như GDPR). Dữ liệu phải được ẩn danh hóa, chỉ được sử dụng cho mục đích cải thiện giáo dục, và phải có sự đồng ý của học sinh hoặc phụ huynh. Đạo đức trong việc sử dụng dữ liệu là ưu tiên hàng đầu.',
      },
      {
        question: 'Sự khác biệt giữa Educational Data Mining (EDM) và Learning Analytics (LA) là gì?',
        answer:
          'Hai lĩnh vực này rất gần nhau. Nói một cách đơn giản, EDM thường tập trung hơn vào việc phát triển các thuật toán và phương pháp kỹ thuật mới để khám phá các mẫu trong dữ liệu. Trong khi đó, LA tập trung hơn vào việc áp dụng các phương pháp đó để giải quyết các vấn đề thực tiễn trong giáo dục, hỗ trợ người học và giáo viên.',
      },
      {
        question: 'Làm thế nào dữ liệu có thể dự đoán một học sinh có nguy cơ bỏ học?',
        answer:
          'Các mô hình dự đoán phân tích các mẫu hành vi trong quá khứ. Ví dụ, một học sinh có thể bị gắn cờ "có nguy cơ" nếu dữ liệu cho thấy họ thường xuyên vắng mặt, nộp bài tập muộn, điểm số giảm dần, và ít tương tác trên hệ thống LMS so với các bạn cùng lớp đã thành công. Việc phát hiện sớm giúp nhà trường can thiệp kịp thời.',
      },
      {
        question: 'Tôi không phải là chuyên gia dữ liệu, làm sao tôi có thể áp dụng Learning Analytics?',
        answer:
          'Bạn có thể bắt đầu bằng việc sử dụng các công cụ phân tích có sẵn trong các hệ thống LMS như Canvas, Moodle. Chúng thường cung cấp các dashboard trực quan về tỷ lệ hoàn thành khóa học, điểm số trung bình, mức độ tương tác... Hãy bắt đầu bằng việc đặt câu hỏi về lớp học của bạn và tìm kiếm câu trả lời trong các dữ liệu đó.',
      },
      {
        question: 'Dữ liệu nào có thể được thu thập cho Learning Analytics?',
        answer: 'Rất nhiều loại dữ liệu có thể được thu thập, bao gồm: dữ liệu nhân khẩu học (tuổi, giới tính), dữ liệu tương tác trên LMS (số lần nhấp chuột, thời gian trên trang, video đã xem), kết quả học tập (điểm số, tỷ lệ hoàn thành), và cả dữ liệu từ các nguồn bên ngoài (thư viện, hoạt động ngoại khóa).'
      },
      {
        question: 'Làm thế nào để trực quan hóa dữ liệu giáo dục một cách hiệu quả?',
        answer: 'Hãy chọn loại biểu đồ phù hợp với thông điệp bạn muốn truyền tải. Ví dụ, sử dụng biểu đồ đường để thể hiện sự tiến bộ theo thời gian, biểu đồ cột để so sánh kết quả giữa các nhóm, và biểu đồ phân tán để tìm mối tương quan giữa hai biến số (ví dụ: thời gian học và điểm số).'
      },
      {
        question: 'Một "dashboard" trong Learning Analytics là gì?',
        answer: 'Dashboard là một giao diện trực quan, thường là một trang duy nhất, tổng hợp các chỉ số và biểu đồ quan trọng nhất về tình hình học tập. Nó giúp các nhà quản lý, giáo viên, và cả học sinh có một cái nhìn tổng quan, nhanh chóng về hiệu suất và các xu hướng chính.'
      },
      {
        question: 'Phân tích dữ liệu có thể giúp cải thiện thiết kế khóa học không?',
        answer: 'Chắc chắn có. Bằng cách phân tích xem học sinh thường gặp khó khăn ở bài học nào, video nào bị bỏ qua nhiều nhất, hoặc câu hỏi nào có tỷ lệ trả lời sai cao, các nhà thiết kế khóa học có thể xác định và cải thiện những phần nội dung chưa hiệu quả.'
      },
      {
        question: 'Vai trò của AI trong Learning Analytics là gì?',
        answer: 'AI có thể tự động phát hiện các mẫu phức tạp trong dữ liệu mà con người khó có thể nhìn thấy. Nó là nền tảng cho các mô hình dự đoán (ví dụ: dự đoán học sinh có nguy cơ bỏ học) và các hệ thống đề xuất (ví dụ: gợi ý tài liệu học tập tiếp theo phù hợp nhất cho một học sinh cụ thể).'
      },
      {
        question: 'Làm thế nào để đảm bảo chất lượng của dữ liệu được sử dụng để phân tích?',
        answer: 'Đây là một bước cực kỳ quan trọng. Cần có quy trình làm sạch dữ liệu (data cleaning) để xử lý các giá trị bị thiếu, các lỗi nhập liệu, và các dữ liệu không nhất quán. "Rác vào, rác ra" (Garbage in, garbage out) - nếu dữ liệu đầu vào không chính xác, kết quả phân tích sẽ vô nghĩa.'
      }
    ],
  },

  {
    id: 'edtech-entrepreneurship-innovation',
    title: 'Khởi Nghiệp EdTech & Đổi Mới Giáo Dục',
    description:
      'Khám phá cơ hội khởi nghiệp trong lĩnh vực Education Technology. Từ ý tưởng đến product launch, học cách validate education solutions, build MVP, fundraise và scale EdTech startups. Tìm hiểu market trends, regulatory requirements và success strategies trong education industry.',
    duration: '190 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=aR2P8wXOhT4', // "Khởi nghiệp EdTech"
    imageUrl: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=1200&h=600&fit=crop',
    objectives: [
      'Identify và validate viable EdTech business opportunities',
      'Thiết kế user-centered educational products với design thinking',
      'Navigate regulatory landscape và compliance requirements',
      'Develop sustainable business models cho EdTech ventures',
      'Build partnerships với educational institutions và government agencies',
    ],
    prerequisites: [
      'Basic understanding of startup ecosystem và venture capital',
      'Knowledge về education sector challenges và opportunities',
      'Experience với product development hoặc project management',
    ],
    exercises: [
      {
        title: 'EdTech Market Research & Opportunity Analysis',
        description: 'Conduct comprehensive market analysis để identify underserved segments trong education',
        difficulty: 'Trung bình',
        materials: [
          'Survey tools (Google Forms, Typeform)',
          'Interview guides',
          'Competitive analysis frameworks',
          'Market research databases',
        ],
        procedure: [
          'Define target education segments và pain points cần giải quyết',
          'Conduct surveys với 100+ educators, students, parents',
          'Interview key stakeholders including administrators, policymakers',
          'Analyze competitors và identify market gaps',
          'Size addressable market và revenue potential',
          'Create user personas và journey maps',
          'Synthesize findings thành opportunity assessment report',
        ],
        expectedResults: 'Validated market opportunity với clear value proposition và target audience definition',
        solution:
          'Sử dụng lean startup methodology với customer development approach. Jobs-to-be-Done framework để understand user motivations. TAM-SAM-SOM analysis cho market sizing.',
      },
      {
        title: 'EdTech MVP Development & User Testing',
        description: 'Build và test minimum viable product cho validated EdTech solution',
        difficulty: 'Cao',
        materials: [
          'No-code platforms (Bubble, Webflow)',
          'Design tools (Figma, Sketch)',
          'User testing platforms',
          'Analytics tools',
        ],
        procedure: [
          'Define core features dựa trên market research findings',
          'Create wireframes và interactive prototypes',
          'Build MVP sử dụng no-code tools hoặc rapid development',
          'Setup user analytics và feedback collection systems',
          'Recruit beta users từ target education segments',
          'Conduct usability testing sessions với educators và students',
          'Iterate based on feedback và usage analytics',
          'Prepare product demo cho potential investors/partners',
        ],
        expectedResults: 'Functional MVP với validated product-market fit và positive user feedback',
        solution:
          'Agile development với 2-week sprints. A/B testing để optimize user experience. Integration với popular LMS platforms để increase adoption. Freemium model để build user base.',
      },
    ],
    realWorldApplications: [
      'Coursera raised $464M để revolutionize online higher education globally',
      'Duolingo IPO với $6.5B valuation, teaching 500M+ users 40+ languages',
      "Byju's became world's most valuable EdTech company với $22B valuation",
      'ClassDojo connects 50M+ students, parents và teachers trong K-8 education',
    ],
    caseStudies: [
      {
        title: 'ELSA Speak - Vietnamese EdTech Success Story',
        organization: 'ELSA Corp (Founded by Vietnamese entrepreneur)',
        problem: 'Non-native English speakers struggle với pronunciation và speaking confidence',
        solution: 'AI-powered pronunciation coach với speech recognition và personalized feedback',
        impact: '25M+ users globally, $15M+ funding raised, partnerships với major publishers',
        innovations: [
          'Vietnamese accent-aware AI training',
          'Gamified learning experience',
          'Corporate partnership model',
          'Localized content cho Asian markets',
        ],
      },
    ],
    resources: [
      {
        title: 'EdTechHub Research',
        url: 'https://www.edtechhub.org/',
        type: 'Documentation',
      },
      {
        title: 'ASU+GSV Education Innovation Summit',
        url: 'https://www.asugsvsummit.com/',
        type: 'Documentation',
      },
    ],
    vietnamContext: {
      title: 'Hệ sinh thái Khởi nghiệp EdTech tại Việt Nam',
      content: [
        'Việt Nam là một trong những thị trường EdTech phát triển nhanh nhất Đông Nam Á, với các tên tuổi nổi bật như ELSA Speak, CoderSchool, VUIHOC, Manabie.',
        'Chính phủ có nhiều chính sách hỗ trợ chuyển đổi số trong giáo dục, tạo điều kiện cho các startup EdTech phát triển (Đề án 844).',
        "Các quỹ đầu tư mạo hiểm trong và ngoài nước như Do Ventures, Monk's Hill Ventures, ThinkZone Ventures đang tích cực đầu tư vào các startup EdTech Việt Nam.",
        'Thách thức lớn nhất là việc thuyết phục các trường học công lập áp dụng công nghệ mới và mô hình kinh doanh bền vững.',
      ],
    },
    careerConnect: {
      name: 'Chị Văn Đinh Hồng Vũ',
      title: 'Nhà sáng lập & CEO',
      company: 'ELSA Corp',
      imageUrl: 'https://i.pravatar.cc/150?u=van-dinh-hong-vu',
      quote:
        'Khởi nghiệp EdTech là một hành trình đầy thử thách nhưng cũng vô cùng ý nghĩa. Chúng tôi bắt đầu từ một vấn đề cá nhân - khó khăn trong việc nói tiếng Anh - và biến nó thành một giải pháp công nghệ giúp hàng triệu người. Chìa khóa thành công là sự kiên trì, thấu hiểu sâu sắc người dùng và xây dựng một đội ngũ đam mê.',
    },
    quizzes: [
      {
        question: 'MVP trong khởi nghiệp là viết tắt của cụm từ nào?',
        options: [
          'Most Valuable Player (Người chơi giá trị nhất)',
          'Minimum Viable Product (Sản phẩm khả dụng tối thiểu)',
          'Maximum Viable Profit (Lợi nhuận khả thi tối đa)',
          'Mainstream Viral Promotion (Quảng bá lan truyền chính thống)',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Minimum Viable Product (MVP) là phiên bản sản phẩm có các tính năng cốt lõi tối thiểu, đủ để ra mắt cho những người dùng đầu tiên và thu thập phản hồi để phát triển tiếp.',
      },
      {
        question: 'Mô hình kinh doanh "Freemium" trong EdTech có nghĩa là gì?',
        options: [
          'Sản phẩm hoàn toàn miễn phí',
          'Sản phẩm chỉ dành cho người dùng trả phí cao cấp',
          'Cung cấp miễn phí các tính năng cơ bản và thu phí cho các tính năng nâng cao',
          'Bán sản phẩm với giá rất rẻ',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Mô hình Freemium là sự kết hợp giữa "Free" (miễn phí) và "Premium" (cao cấp). Nó cho phép người dùng trải nghiệm các tính năng cơ bản miễn phí và khuyến khích họ nâng cấp lên phiên bản trả phí để sử dụng các chức năng cao cấp hơn.',
      },
    ],
    faqs: [
      {
        question: 'Tôi có một ý tưởng EdTech, bước đầu tiên tôi nên làm là gì?',
        answer:
          'Đừng vội xây dựng sản phẩm. Bước đầu tiên và quan trọng nhất là "ra khỏi tòa nhà" và nói chuyện với khách hàng tiềm năng của bạn (học sinh, giáo viên, phụ huynh, quản lý trường học). Hãy xác thực xem vấn đề bạn đang cố gắng giải quyết có thực sự tồn tại và đủ "đau" để họ sẵn sàng trả tiền cho một giải pháp hay không. Giai đoạn này gọi là "xác thực vấn đề" (problem validation).',
      },
      {
        question: 'Làm thế nào để một startup EdTech có thể cạnh tranh với các "ông lớn"?',
        answer:
          'Hãy tập trung vào một thị trường ngách (niche market) mà các công ty lớn đang bỏ qua. Hãy làm tốt hơn họ ở một khía cạnh cụ thể, ví dụ: cung cấp dịch vụ chăm sóc khách hàng tốt hơn, tạo ra trải nghiệm người dùng vượt trội, hoặc tập trung sâu vào một chương trình giáo dục địa phương. Sự linh hoạt và tốc độ cũng là lợi thế của startup.',
      },
      {
        question: 'Mô hình kinh doanh nào là phổ biến nhất trong EdTech?',
        answer:
          'Có nhiều mô hình, nhưng phổ biến nhất bao gồm: 1. **Subscription (Thuê bao):** Người dùng trả phí hàng tháng/năm (ví dụ: Duolingo Plus). 2. **Freemium:** Miễn phí tính năng cơ bản, trả phí cho tính năng nâng cao (ví dụ: Canva for Education). 3. **B2B/B2B2C:** Bán cho các tổ chức (trường học, công ty), sau đó họ cung cấp cho người dùng cuối (ví dụ: Coursera for Business). 4. **Marketplace:** Nền tảng kết nối người dạy và người học, và lấy một phần phí giao dịch (ví dụ: Udemy).',
      },
      {
        question: 'Thách thức lớn nhất khi bán sản phẩm EdTech cho trường học là gì?',
        answer:
          'Chu kỳ bán hàng dài và phức tạp. Bạn thường phải thuyết phục nhiều bên liên quan: giáo viên (người dùng cuối), tổ trưởng chuyên môn, ban giám hiệu (người ra quyết định), và phòng tài chính (người chi tiền). Ngoài ra, ngân sách của các trường học thường có hạn và được quyết định theo năm học. Việc tích hợp với các hệ thống hiện có của trường cũng là một rào cản kỹ thuật lớn.',
      },
      {
        question: '"Product-Market Fit" trong EdTech nghĩa là gì?',
        answer: 'Product-Market Fit (Sự phù hợp giữa sản phẩm và thị trường) là điểm mà bạn đã xây dựng được một sản phẩm mà một thị trường đủ lớn thực sự cần và sẵn sàng trả tiền để sử dụng. Dấu hiệu của Product-Market Fit là khi bạn có được sự tăng trưởng người dùng tự nhiên, khách hàng hài lòng và giới thiệu sản phẩm cho người khác.'
      },
      {
        question: 'Tại sao "Design Thinking" lại quan trọng trong việc phát triển sản phẩm EdTech?',
        answer: 'Design Thinking là một quy trình lấy người dùng làm trung tâm, bắt đầu bằng việc đồng cảm sâu sắc với các vấn đề của họ. Trong giáo dục, điều này cực kỳ quan trọng vì bạn cần thiết kế một giải pháp không chỉ hiệu quả về mặt sư phạm mà còn phải dễ sử dụng và hấp dẫn đối với cả giáo viên và học sinh, những người có nhu cầu và khả năng công nghệ rất khác nhau.'
      },
      {
        question: 'Các xu hướng lớn trong ngành EdTech hiện nay là gì?',
        answer: 'Một số xu hướng chính bao gồm: 1. Cá nhân hóa học tập bằng AI (AI-powered personalized learning). 2. Học tập nhập vai qua VR/AR (Immersive learning). 3. Học tập dựa trên kỹ năng và chứng chỉ vi mô (Micro-credentials). 4. Game hóa (Gamification). 5. Học tập kết hợp (Blended learning) giữa online và offline.'
      },
      {
        question: 'Làm thế nào để gọi vốn cho một startup EdTech?',
        answer: 'Bạn cần chuẩn bị một "pitch deck" (bản trình bày) thuyết phục, trong đó nêu rõ vấn đề bạn giải quyết, giải pháp của bạn, quy mô thị trường, mô hình kinh doanh, đội ngũ sáng lập, và kế hoạch sử dụng vốn. Hãy bắt đầu bằng việc tìm kiếm các quỹ đầu tư mạo hiểm hoặc các nhà đầu tư thiên thần chuyên về lĩnh vực EdTech.'
      },
      {
        question: 'Sự khác biệt giữa B2C và B2B trong EdTech là gì?',
        answer: 'B2C (Business-to-Consumer) là mô hình bán sản phẩm trực tiếp cho người dùng cuối, như học sinh hoặc phụ huynh (ví dụ: Duolingo). B2B (Business-to-Business) là mô hình bán sản phẩm cho các tổ chức, như trường học hoặc công ty (ví dụ: Canvas). Mô hình B2B thường có giá trị hợp đồng lớn hơn nhưng chu kỳ bán hàng cũng dài hơn.'
      },
      {
        question: 'Làm thế nào để đo lường "tác động giáo dục" (educational impact) của một sản phẩm EdTech?',
        answer: 'Đây là một thách thức. Ngoài các chỉ số kinh doanh (doanh thu, người dùng), bạn cần đo lường các chỉ số học thuật. Điều này có thể được thực hiện thông qua các bài kiểm tra trước và sau khi sử dụng sản phẩm, các nghiên cứu đối chứng (so sánh một nhóm dùng sản phẩm và một nhóm không), hoặc thu thập phản hồi định tính từ giáo viên và học sinh về sự tiến bộ của họ.'
      }
    ],
  },
];

export const educationTechnologyModuleData: ModuleData = {
  id: K2Module.EducationTechnology,
  title: 'Công Nghệ Giáo Dục',
  subtitle: 'Education Technology & Digital Learning Innovation',
  description:
    'Khám phá và master các công nghệ tiên tiến đang revolutionize ngành giáo dục. Từ Learning Management Systems, AI-powered education tools, VR/AR immersive learning đến Educational Data Analytics và EdTech Entrepreneurship. Trở thành expert trong việc áp dụng technology để transform teaching và learning experiences.',
  level: 'Nâng cao',
  duration: '20-25 giờ',
  category: 'Education & Technology',
  heroImageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop',
  features: [
    'Triển khai và quản lý Learning Management Systems (LMS) professional',
    'Tích hợp AI và Machine Learning vào educational workflows',
    'Phát triển VR/AR experiences cho immersive learning',
    'Phân tích Educational Data để optimize student outcomes',
    'Khởi nghiệp EdTech startup từ ý tưởng đến market launch',
  ],
  icon: '🎓',
  color: 'from-indigo-600 to-purple-600',
  objectives: [
    'Master các platform LMS phổ biến và best practices deployment',
    'Phát triển AI-powered educational tools và chatbots',
    'Tạo VR/AR content cho enhanced learning experiences',
    'Thực hiện Educational Data Mining và Learning Analytics',
    'Validate và launch EdTech products với sustainable business models',
  ],
  prerequisites: [
    'Kiến thức cơ bản về công nghệ thông tin và web development',
    'Hiểu biết về educational processes và learning theories',
    'Experience với data analysis tools (Excel, basic SQL)',
    'Familiarity với cloud platforms và SaaS applications',
  ],
  careerOutcomes: [
    'Educational Technology Specialist - 25-40 triệu VNĐ/tháng',
    'Learning Experience Designer - 20-35 triệu VNĐ/tháng',
    'EdTech Product Manager - 30-50 triệu VNĐ/tháng',
    'Educational Data Analyst - 20-35 triệu VNĐ/tháng',
    'EdTech Entrepreneur - Potential unlimited income',
    'Corporate Learning & Development Manager - 25-45 triệu VNĐ/tháng',
  ],
  industryApplications: [
    'K-12 Schools: Smart classroom management và personalized learning systems',
    'Higher Education: University-wide LMS deployment và student analytics',
    'Corporate Training: Employee skill development platforms và VR simulations',
    'Language Learning: AI-powered tutoring systems và pronunciation coaching',
    'Healthcare Education: Medical simulation software và virtual training labs',
    'Government Training: Civil service education platforms và policy training systems',
  ],
  marketDemand: {
    averageSalary: '20-50 triệu VNĐ',
    jobGrowth: '+35%',
    hireDemand: 'Rất cao',
  },
  relatedModules: [
    K2Module.AdvancedAI,
    K2Module.DataScienceAnalytics,
    K2Module.ProfessionalSkills,
    K2Module.DigitalMarketing,
  ],
  lessons: educationTechnologyLessons,
};
