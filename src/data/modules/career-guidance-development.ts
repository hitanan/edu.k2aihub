import { ModuleData } from '@/types';

export const careerGuidanceDevelopmentModuleData: ModuleData = {
  id: 'career-guidance-development',
  title: 'Hướng Nghiệp và Phát Triển Sự Nghiệp',
  subtitle: 'Khám phá bản thân, tìm hiểu thế giới nghề nghiệp và xây dựng lộ trình sự nghiệp cho tương lai.',
  description:
    'Module này cung cấp các công cụ và phương pháp giúp học sinh THPT tự khám phá sở thích, năng lực, giá trị của bản thân, từ đó đối chiếu với thế giới nghề nghiệp đa dạng để có những lựa chọn ngành học và nghề nghiệp phù hợp.',
  image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
  color: 'from-sky-500 to-indigo-500',
  category: 'Phát triển bản thân',
  level: 'Trung học',
  duration: '8 tuần',
  lessons: [
    {
      id: 'kham-pha-ban-than',
      title: 'Khám Phá Bản Thân: Sở Thích, Năng Lực và Giá Trị Nghề Nghiệp',
      description:
        'Sử dụng các bài trắc nghiệm và hoạt động tự phản ánh để xác định điểm mạnh, điểm yếu, sở thích và những giá trị bạn tìm kiếm trong công việc.',
      duration: '60 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Trắc nghiệm Holland', 'Phân tích SWOT cá nhân', 'Xác định giá trị cốt lõi'],
      objectives: [
        'Hiểu về 6 nhóm sở thích nghề nghiệp theo lý thuyết Holland (Realistic, Investigative, Artistic, Social, Enterprising, Conventional).',
        'Thực hiện phân tích SWOT (Điểm mạnh, Điểm yếu, Cơ hội, Thách thức) cho bản thân.',
        'Xác định được các giá trị nghề nghiệp quan trọng đối với mình (ví dụ: tiền bạc, sự ổn định, sự sáng tạo, giúp đỡ người khác).',
        'Tổng hợp các yếu tố trên để phác họa chân dung nghề nghiệp của bản thân.',
      ],
      faqs: [
        {
          question: 'Trắc nghiệm Holland (Mật mã Holland) là gì?',
          answer:
            'Đây là một lý thuyết và công cụ trắc nghiệm rất phổ biến trong hướng nghiệp, cho rằng con người và môi trường làm việc có thể được phân loại thành 6 nhóm chính. Khi sở thích nghề nghiệp của bạn khớp với môi trường làm việc, bạn sẽ có xu hướng hài lòng và thành công hơn.',
        },
        {
          question: 'Tại sao việc xác định "giá trị nghề nghiệp" lại quan trọng?',
          answer:
            'Giá trị nghề nghiệp là những gì bạn cho là quan trọng nhất trong công việc. Nếu công việc của bạn không phù hợp với giá trị của bạn (ví dụ: bạn coi trọng sự sáng tạo nhưng lại làm một công việc lặp đi lặp lại), bạn sẽ khó cảm thấy thỏa mãn và gắn bó lâu dài.',
        },
      ],
      quizzes: [
        {
          question:
            'Một người thích làm việc với các ý tưởng, lý thuyết, thích quan sát, phân tích và giải quyết vấn đề thường thuộc nhóm sở thích nào theo lý thuyết Holland?',
          options: ['Realistic (Thực tế)', 'Investigative (Nghiên cứu)', 'Artistic (Nghệ thuật)', 'Social (Xã hội)'],
          correctAnswerIndex: 1,
          explanation:
            'Đây là đặc điểm điển hình của nhóm Investigative (Nghiên cứu), bao gồm các nhà khoa học, nhà nghiên cứu, nhà phân tích dữ liệu.',
        },
      ],
    },
    {
      id: 'tim-hieu-the-gioi-nghe-nghiep',
      title: 'Tìm Hiểu Thế Giới Nghề Nghiệp và Xu Hướng Tương Lai',
      description:
        'Nghiên cứu về các nhóm ngành nghề khác nhau, yêu cầu của từng nghề và những xu hướng nghề nghiệp trong cuộc Cách mạng Công nghiệp 4.0.',
      duration: '55 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Nghiên cứu ngành nghề', 'Tìm hiểu thị trường lao động', 'Dự báo nghề nghiệp tương lai'],
      objectives: [
        'Phân loại được các ngành nghề theo các lĩnh vực khác nhau (Kinh tế, Kỹ thuật, Xã hội, Sức khỏe...).',
        'Tìm hiểu thông tin về một nghề cụ thể: mô tả công việc, yêu cầu về kiến thức/kỹ năng, mức lương, triển vọng.',
        'Nhận diện được những ngành nghề đang có xu hướng phát triển mạnh trong tương lai (AI, khoa học dữ liệu, năng lượng tái tạo).',
        'Hiểu được tác động của tự động hóa và AI đến thị trường lao động.',
      ],
      faqs: [
        {
          question: 'Làm thế nào để tìm hiểu thông tin đáng tin cậy về một nghề?',
          answer:
            'Bạn có thể tìm trên các trang web tuyển dụng lớn (VietnamWorks, TopCV), các báo cáo về thị trường lao động, website của các trường đại học có đào tạo ngành đó, và quan trọng nhất là cố gắng trò chuyện, phỏng vấn những người đang thực sự làm trong ngành (information interview).',
        },
        {
          question: 'Những kỹ năng nào sẽ quan trọng trong tương lai, dù làm bất cứ nghề gì?',
          answer:
            'Các kỹ năng "xuyên suốt" như tư duy phản biện, giải quyết vấn đề phức tạp, sáng tạo, trí tuệ cảm xúc, kỹ năng giao tiếp và hợp tác, và khả năng học tập suốt đời được dự báo là sẽ ngày càng quan trọng trong một thế giới công việc luôn biến đổi.',
        },
      ],
      quizzes: [
        {
          question:
            'Ngành nào sau đây được dự báo sẽ có sự tăng trưởng mạnh mẽ do tác động của cuộc Cách mạng Công nghiệp 4.0?',
          options: ['Thư ký đánh máy', 'Nhân viên trực tổng đài', 'Chuyên gia An ninh mạng', 'Nhân viên bán vé giấy'],
          correctAnswerIndex: 2,
          explanation:
            'Khi mọi thứ đều được số hóa và kết nối, nhu cầu bảo vệ dữ liệu và hệ thống khỏi các cuộc tấn công mạng trở nên vô cùng cấp thiết, khiến ngành An ninh mạng trở thành một trong những ngành "hot" nhất.',
        },
      ],
    },
    {
      id: 'xay-dung-lo-trinh',
      title: 'Xây Dựng Lộ Trình Học Tập và Phát Triển Cá Nhân',
      description:
        'Học cách đặt mục tiêu theo phương pháp SMART, lựa chọn môn học, hoạt động ngoại khóa và xây dựng một kế hoạch hành động để đạt được mục tiêu nghề nghiệp.',
      duration: '50 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Đặt mục tiêu học tập', 'Chọn câu lạc bộ', 'Chuẩn bị hồ sơ đại học'],
      objectives: [
        'Biết cách đặt mục tiêu SMART (Cụ thể, Đo lường được, Khả thi, Liên quan, Có thời hạn).',
        'Lựa chọn các môn học ở trường THPT để hỗ trợ cho định hướng ngành học của mình.',
        'Lên kế hoạch tham gia các hoạt động ngoại khóa, tình nguyện, thực tập để làm đẹp hồ sơ và tích lũy kinh nghiệm.',
        'Xây dựng một bản kế hoạch hành động cá nhân từ nay đến khi vào đại học.',
      ],
      faqs: [
        {
          question: 'Tại sao mục tiêu "Tôi muốn học giỏi" không phải là một mục tiêu SMART?',
          answer:
            'Vì nó không cụ thể (giỏi là như thế nào?), không đo lường được (làm sao biết đã đạt?), và không có thời hạn. Một mục tiêu SMART hơn sẽ là: "Tôi muốn đạt điểm trung bình môn Toán trên 8.5 trong học kỳ này bằng cách làm hết bài tập về nhà và học nhóm mỗi tuần một lần".',
        },
        {
          question: 'Hoạt động ngoại khóa có thực sự quan trọng khi xét tuyển đại học không?',
          answer:
            'Rất quan trọng, đặc biệt với các chương trình du học hoặc các trường đại học top đầu. Hoạt động ngoại khóa cho thấy bạn là một người năng động, có đam mê, có kỹ năng lãnh đạo, làm việc nhóm... chứ không chỉ là một "mọt sách". Hãy chọn những hoạt động mà bạn thực sự yêu thích và có thể gắn bó.',
        },
      ],
      quizzes: [
        {
          question: 'Trong phương pháp đặt mục tiêu SMART, chữ "A" là viết tắt của từ gì?',
          options: [
            'Actionable (Có thể hành động)',
            'Ambitious (Tham vọng)',
            'Achievable (Khả thi)',
            'Awesome (Tuyệt vời)',
          ],
          correctAnswerIndex: 2,
          explanation:
            '"A" là viết tắt của Achievable (hoặc Attainable), nghĩa là mục tiêu phải có tính khả thi, nằm trong khả năng của bạn, không quá xa vời đến mức gây nản chí.',
        },
      ],
    },
  ],
  features: [
    'Các bài trắc nghiệm hướng nghiệp (Holland, SWOT)',
    'Thông tin cập nhật về các ngành nghề và xu hướng tương lai',
    'Hướng dẫn đặt mục tiêu và lập kế hoạch hành động',
    'Case study về các lựa chọn nghề nghiệp khác nhau',
  ],
  prerequisites: ['Không yêu cầu kiến thức nền tảng'],
  objectives: [
    'Hiểu rõ hơn về điểm mạnh, sở thích và giá trị của bản thân.',
    'Có cái nhìn tổng quan về thế giới nghề nghiệp và các xu hướng trong tương lai.',
    'Trang bị phương pháp để đưa ra quyết định chọn ngành, chọn trường một cách có cơ sở.',
    'Xây dựng được một kế hoạch phát triển cá nhân để chuẩn bị cho sự nghiệp tương lai.',
  ],
  careerOutcomes: [
    'Giúp học sinh có những lựa chọn hướng nghiệp đúng đắn, giảm thiểu tình trạng chọn sai ngành, sai nghề.',
    'Trang bị những kỹ năng lập kế hoạch và phát triển bản thân cần thiết cho suốt cuộc đời.',
  ],
  tags: ['hướng nghiệp', 'phát triển sự nghiệp', 'chọn ngành', 'kỹ năng mềm', 'tương lai'],
};
