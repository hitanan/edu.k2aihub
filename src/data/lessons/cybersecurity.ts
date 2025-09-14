import { BaseLessonData } from '@/types/lesson-base';

export const CybersecurityLessons: BaseLessonData[] = [
  {
    id: 'intro-to-cybersecurity',
    title: 'Introduction to Cybersecurity',
    description: 'Learn the fundamentals of cybersecurity.',
    duration: '60 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=inWWhr5tnEA',
    objectives: [],
    prerequisites: [],
    exercises: [],
    realWorldApplications: [],
    vietnamContext: {
      title: '',
      content: [],
    },
    careerConnect: {
      name: '',
      title: '',
      company: '',
      imageUrl: '',
      quote: '',
    },
    quizzes: [],
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
