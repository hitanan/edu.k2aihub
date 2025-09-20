import { ModuleData } from '@/types';

export const appliedMathematicsLogicModuleData: ModuleData = {
  id: 'applied-mathematics-logic',
  title: 'Toán Ứng Dụng và Logic',
  subtitle: 'Vận dụng toán học để giải quyết các vấn đề thực tiễn và rèn luyện tư duy logic.',
  description:
    'Module này cung cấp kiến thức về toán ứng dụng trong tài chính, khoa học dữ liệu, và đời sống hàng ngày, đồng thời phát triển kỹ năng suy luận và giải quyết vấn đề một cách logic.',
  image: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d7923?w=1200&h=600&fit=crop',
  color: 'from-blue-500 to-sky-500',
  category: 'Khoa học & Tư duy',
  level: 'Trung học',
  duration: '12 tuần',
  lessons: [
    {
      id: 'logic-co-ban',
      title: 'Logic Mệnh Đề và Vị Từ',
      description: 'Giới thiệu về các khái niệm cơ bản của logic học, bao gồm mệnh đề, các phép toán logic, và vị từ.',
      duration: '45 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Lập trình', 'Luật', 'Tranh luận'],
      objectives: [
        'Hiểu và phân biệt được mệnh đề và câu không phải mệnh đề.',
        'Sử dụng thành thạo các phép toán logic: hội, tuyển, phủ định, kéo theo, tương đương.',
        'Nắm vững khái niệm vị từ, lượng từ phổ dụng và lượng từ tồn tại.',
        'Biết cách phủ định một mệnh đề chứa lượng từ.',
      ],
      faqs: [
        {
          question: 'Mệnh đề là gì?',
          answer: 'Mệnh đề là một câu khẳng định có tính đúng hoặc sai. Một mệnh đề không thể vừa đúng vừa sai.',
        },
        {
          question: 'Phép toán "kéo theo" (implies) hoạt động như thế nào?',
          answer:
            'Mệnh đề "P kéo theo Q" (P ⇒ Q) chỉ sai khi P đúng và Q sai. Trong tất cả các trường hợp khác, nó đều đúng.',
        },
      ],
      quizzes: [
        {
          question: 'Câu nào sau đây là một mệnh đề?',
          options: ['Bạn có khỏe không?', 'Trời hôm nay đẹp quá!', 'Số 5 là một số nguyên tố.', 'Hãy đi ngủ đi.'],
          correctAnswerIndex: 2,
          explanation:
            'Câu "Số 5 là một số nguyên tố." là một khẳng định có tính đúng (đúng trong trường hợp này), do đó nó là một mệnh đề.',
        },
      ],
    },
    {
      id: 'toan-tai-chinh',
      title: 'Toán Tài Chính Cá Nhân',
      description:
        'Ứng dụng các công cụ toán học để quản lý tài chính cá nhân, bao gồm lãi suất, tiết kiệm, và đầu tư.',
      duration: '60 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Quản lý tài chính cá nhân', 'Đầu tư', 'Kinh doanh'],
      objectives: [
        'Hiểu về lãi đơn, lãi kép và cách tính.',
        'Biết cách lập kế hoạch tiết kiệm cho các mục tiêu ngắn hạn và dài hạn.',
        'Phân tích các lựa chọn đầu tư cơ bản.',
        'Tính toán các khoản vay và trả góp.',
      ],
      faqs: [
        {
          question: 'Sự khác biệt giữa lãi đơn và lãi kép là gì?',
          answer:
            'Lãi đơn chỉ tính trên số vốn gốc. Lãi kép được tính trên cả vốn gốc và lãi đã tích lũy từ các kỳ trước, do đó nó giúp tiền của bạn tăng trưởng nhanh hơn.',
        },
        {
          question: 'Tại sao nên bắt đầu tiết kiệm và đầu tư càng sớm càng tốt?',
          answer:
            'Bắt đầu sớm cho phép bạn tận dụng tối đa sức mạnh của lãi kép. Một khoản tiền nhỏ được đầu tư trong thời gian dài có thể tăng trưởng thành một số tiền lớn hơn nhiều so với một khoản tiền lớn được đầu tư trong thời gian ngắn.',
        },
      ],
      quizzes: [
        {
          question:
            'Nếu bạn gửi 100 triệu đồng với lãi suất 10%/năm theo hình thức lãi kép, sau 2 năm bạn sẽ có bao nhiêu tiền (chưa tính các yếu tố khác)?',
          options: ['120 triệu', '121 triệu', '110 triệu', '122 triệu'],
          correctAnswerIndex: 1,
          explanation: 'Năm 1: 100 * 1.1 = 110 triệu. Năm 2: 110 * 1.1 = 121 triệu. Đây là sức mạnh của lãi kép.',
        },
      ],
    },
    {
      id: 'xac-suat-thong-ke',
      title: 'Xác Suất và Thống Kê Ứng Dụng',
      description:
        'Tìm hiểu cách xác suất và thống kê được sử dụng để phân tích dữ liệu, đưa ra dự đoán và quyết định trong thế giới thực.',
      duration: '60 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Khoa học dữ liệu', 'Y học', 'Kinh tế'],
      objectives: [
        'Nắm vững các quy tắc cơ bản của xác suất.',
        'Hiểu về xác suất có điều kiện và công thức Bayes.',
        'Biết cách thu thập, biểu diễn và phân tích dữ liệu thống kê (trung bình, trung vị, phương sai).',
        'Nhận biết các lỗi ngụy biện thống kê thường gặp.',
      ],
      faqs: [
        {
          question: 'Công thức Bayes có ý nghĩa gì trong thực tế?',
          answer:
            'Công thức Bayes giúp chúng ta cập nhật niềm tin hoặc xác suất về một sự kiện khi có thêm thông tin mới. Nó được ứng dụng rộng rãi trong y học (chẩn đoán bệnh), máy học (bộ lọc spam), và nhiều lĩnh vực khác.',
        },
        {
          question: 'Tại sao cần cẩn thận với các con số thống kê?',
          answer:
            'Thống kê có thể bị diễn giải sai hoặc cố tình bóp méo để phục vụ một mục đích nào đó. Cần xem xét kích thước mẫu, phương pháp thu thập dữ liệu và các yếu tố gây nhiễu để có cái nhìn chính xác.',
        },
      ],
      quizzes: [
        {
          question: 'Bạn tung một đồng xu công bằng 2 lần. Xác suất để cả hai lần đều ra mặt ngửa là bao nhiêu?',
          options: ['1/2', '1/3', '1/4', '2/3'],
          correctAnswerIndex: 2,
          explanation:
            'Xác suất lần 1 ra ngửa là 1/2. Xác suất lần 2 ra ngửa cũng là 1/2. Vì hai sự kiện độc lập, xác suất để cả hai xảy ra là (1/2) * (1/2) = 1/4.',
        },
      ],
    },
  ],
  features: [
    'Bài học về logic và suy luận',
    'Ứng dụng toán trong tài chính cá nhân',
    'Giới thiệu về xác suất và thống kê',
    'Ví dụ thực tế và bài tập tương tác',
  ],
  prerequisites: ['Kiến thức toán học cơ bản (đại số, phân số)'],
  objectives: [
    'Phát triển tư duy logic và khả năng suy luận.',
    'Áp dụng toán học để giải quyết các vấn đề trong cuộc sống hàng ngày.',
    'Xây dựng nền tảng về quản lý tài chính cá nhân.',
    'Hiểu và phân tích dữ liệu cơ bản bằng thống kê.',
  ],
  careerOutcomes: [
    'Nền tảng cho các ngành phân tích dữ liệu, tài chính, kinh tế.',
    'Kỹ năng giải quyết vấn đề cần thiết cho mọi ngành nghề.',
  ],
  tags: ['toán học', 'logic', 'tài chính', 'thống kê'],
};
