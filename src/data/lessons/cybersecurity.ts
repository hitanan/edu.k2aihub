import { BaseLessonData } from '@/types/lesson-base';

export const CybersecurityLessons: BaseLessonData[] = [
  {
    id: 'intro-to-cybersecurity',
    title: 'Introduction to Cybersecurity',
    description: 'Learn the fundamentals of cybersecurity.',
    duration: '60 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=inWWhr5tnEA',
    objectives: [
      'Hiểu các khái niệm cốt lõi: CIA Triad (Confidentiality, Integrity, Availability).',
      'Phân biệt các loại tấn công mạng phổ biến: Malware, Phishing, DDoS.',
      'Nắm được vai trò của Ethical Hacking trong việc bảo vệ hệ thống.',
      'Tìm hiểu về các con đường sự nghiệp trong ngành an ninh mạng.',
    ],
    prerequisites: ['Kiến thức cơ bản về sử dụng máy tính và internet.'],
    exercises: [
      {
        title: 'Phân tích một cuộc tấn công Phishing',
        description: 'Phân tích một email lừa đảo mẫu để nhận diện các dấu hiệu đáng ngờ.',
        difficulty: 'Cơ bản',
        procedure: [
          'Kiểm tra địa chỉ email người gửi.',
          'Rà soát các lỗi chính tả, ngữ pháp trong nội dung.',
          'Di chuột qua các đường link để xem URL thực sự (không nhấp vào).',
          'Phân tích các yếu tố tạo cảm giác khẩn cấp hoặc đe dọa.',
        ],
        expectedResults: 'Học viên có thể nhận diện được ít nhất 3 dấu hiệu của một email phishing.',
      },
    ],
    realWorldApplications: [
      'Bảo vệ tài khoản cá nhân (email, mạng xã hội, ngân hàng) khỏi bị tấn công.',
      'Nhận biết và tránh các trang web, email lừa đảo.',
      'Sử dụng mạng Wi-Fi công cộng một cách an toàn.',
    ],
    vietnamContext: {
      title: 'Bối cảnh An ninh mạng tại Việt Nam',
      content: [
        'Việt Nam là một trong những quốc gia có số lượng người dùng internet lớn và cũng là mục tiêu của nhiều cuộc tấn công mạng.',
        'Các hình thức lừa đảo trực tuyến (phishing) mạo danh ngân hàng, cơ quan chính phủ, hoặc các dịch vụ phổ biến rất phổ biến tại Việt Nam.',
        'Luật An ninh mạng của Việt Nam, có hiệu lực từ năm 2019, đặt ra các quy định quan trọng về việc bảo vệ dữ liệu và không gian mạng quốc gia.',
      ],
    },
    careerConnect: {
      name: 'Anh Ngô Minh Hiếu (Hiếu PC)',
      title: 'Chuyên gia An ninh mạng',
      company: 'Trung tâm Giám sát an toàn không gian mạng quốc gia (NCSC)',
      imageUrl: 'https://i.pravatar.cc/150?u=hieu-pc',
      quote:
        'Từ một hacker mũ đen, tôi đã trở về để cống hiến cho cộng đồng. Công việc của chúng tôi là đi trước tội phạm mạng một bước, tìm ra các lỗ hổng và cảnh báo cho người dùng. An ninh mạng không chỉ là công nghệ, đó còn là trách nhiệm xã hội.',
    },
    quizzes: [
      {
        question: 'CIA Triad trong an ninh mạng là viết tắt của những từ gì?',
        options: [
          'Control, Inspect, Authorize',
          'Confidentiality, Integrity, Availability',
          'Cybersecurity, Intelligence, Analysis',
          'Central Intelligence Agency',
        ],
        correctAnswerIndex: 1,
        explanation:
          'CIA Triad là ba nguyên tắc cốt lõi của an ninh thông tin: Tính bảo mật (Confidentiality), Tính toàn vẹn (Integrity), và Tính sẵn sàng (Availability).',
      },
      {
        question: 'Phishing là hình thức tấn công gì?',
        options: [
          'Tấn công làm quá tải hệ thống.',
          'Cài đặt phần mềm độc hại.',
          'Lừa đảo người dùng để lấy thông tin nhạy cảm (như mật khẩu, thông tin thẻ tín dụng) bằng cách giả mạo một đơn vị uy tín.',
          'Giải mã mật khẩu.',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Phishing là một trong những hình thức tấn công phổ biến và hiệu quả nhất, nhắm vào yếu tố con người thay vì chỉ tấn công vào máy móc.',
      },
    ],
    faqs: [
      {
        question: 'Ethical Hacking (Hacking có đạo đức) khác gì so với hacking thông thường?',
        answer:
          'Ethical Hacking là hành động xâm nhập vào một hệ thống với sự cho phép của chủ sở hữu để tìm ra các lỗ hổng bảo mật. Mục đích là để vá các lỗ hổng này trước khi kẻ xấu có thể khai thác chúng. Hacking thông thường (bất hợp pháp) là hành vi xâm nhập trái phép nhằm mục đích phá hoại, đánh cắp dữ liệu hoặc các mục đích xấu khác.',
      },
      {
        question: 'Tại sao an ninh mạng lại quan trọng đến vậy trong thời đại số?',
        answer:
          'Trong thời đại số, hầu hết dữ liệu quan trọng của cá nhân và tổ chức đều được lưu trữ và xử lý trên không gian mạng. An ninh mạng giúp bảo vệ những dữ liệu này khỏi bị đánh cắp, phá hoại, đảm bảo sự riêng tư, an toàn tài chính và sự ổn định của các dịch vụ thiết yếu.',
      },
      {
        question: 'Làm thế nào một người mới bắt đầu có thể học về an ninh mạng?',
        answer:
          'Bạn có thể bắt đầu bằng cách học các kiến thức nền tảng về mạng máy tính (Network+), hệ điều hành (Linux, Windows), và một ngôn ngữ lập trình (Python là lựa chọn phổ biến). Sau đó, tham gia các khóa học về an ninh mạng cơ bản (như CompTIA Security+) và thực hành trên các nền tảng như TryHackMe hoặc HackTheBox.',
      },
      {
        question: 'Ngành an ninh mạng ở Việt Nam có tương lai không?',
        answer:
          'Rất có tương lai. Với sự phát triển mạnh mẽ của kinh tế số, nhu cầu về các chuyên gia an ninh mạng tại Việt Nam đang tăng cao hơn bao giờ hết. Các doanh nghiệp và tổ chức chính phủ đều đang đầu tư mạnh mẽ vào việc bảo vệ hệ thống của mình, tạo ra rất nhiều cơ hội việc làm với mức lương hấp dẫn.',
      },
    ],
  },
];
