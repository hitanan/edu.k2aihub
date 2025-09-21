import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

export const cybersecurityLessons: BaseLessonData[] = [
  {
    id: 'introduction-to-cybersecurity',
    title: 'Giới thiệu về An ninh mạng',
    description:
      'Tìm hiểu các khái niệm cơ bản về an ninh mạng, các loại tấn công phổ biến và các nguyên tắc cốt lõi để bảo vệ thông tin trong thế giới số.',
    duration: '60 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=inWWhr5tnEA',
    objectives: [
      'Hiểu được tầm quan trọng của an ninh mạng.',
      'Phân biệt các loại tấn công mạng phổ biến (Phishing, Malware, Ransomware).',
      'Nắm vững bộ ba CIA (Confidentiality, Integrity, Availability).',
      'Nhận biết các biện pháp phòng thủ cơ bản.',
    ],
    prerequisites: ['Kiến thức cơ bản về sử dụng máy tính và internet.'],
    exercises: [
      {
        title: 'Nhận diện email lừa đảo (Phishing)',
        description: 'Phân tích các email mẫu để xác định dấu hiệu của một cuộc tấn công phishing.',
        difficulty: 'Cơ bản',
        materials: ['Các email mẫu (thật và giả).'],
        procedure: [
          'Kiểm tra địa chỉ người gửi có đáng tin cậy không.',
          'Rà soát các lỗi chính tả, ngữ pháp bất thường.',
          'Di chuột qua các liên kết để xem URL thực sự trước khi nhấp.',
          'Cảnh giác với các yêu cầu cung cấp thông tin cá nhân hoặc mật khẩu.',
        ],
        expectedResults: 'Học viên có thể phân biệt chính xác ít nhất 4/5 email lừa đảo.',
      },
    ],
    realWorldApplications: [
      'Bảo vệ tài khoản email và mạng xã hội cá nhân.',
      'Giao dịch ngân hàng trực tuyến an toàn.',
      'Nhận biết và tránh các trang web độc hại.',
    ],
    resources: [
      {
        title: 'VirusTotal',
        description: 'Dịch vụ trực tuyến miễn phí phân tích tệp và URL để phát hiện phần mềm độc hại.',
        url: 'https://www.virustotal.com/',
        type: 'Tool',
      },
      {
        title: 'Have I Been Pwned?',
        description:
          'Kiểm tra xem địa chỉ email hoặc mật khẩu của bạn có bị lộ trong các vụ rò rỉ dữ liệu lớn hay không.',
        url: 'https://haveibeenpwned.com/',
        type: 'Tool',
      },
    ],
    caseStudies: [
      {
        title: 'Vụ tấn công Ransomware vào Colonial Pipeline (2021)',
        organization: 'Colonial Pipeline',
        problem:
          'Một cuộc tấn công ransomware đã buộc công ty phải ngừng hoạt động đường ống dẫn nhiên liệu lớn nhất Hoa Kỳ, gây ra tình trạng thiếu hụt xăng dầu trên diện rộng.',
        solution:
          'Công ty đã phải trả khoản tiền chuộc hàng triệu đô la để lấy lại quyền truy cập vào hệ thống, đồng thời hợp tác với FBI để điều tra.',
        impact:
          'Gây gián đoạn nghiêm trọng cho chuỗi cung ứng năng lượng, cho thấy lỗ hổng của cơ sở hạ tầng quan trọng trước các cuộc tấn công mạng.',
        innovations: [
          'Tăng cường các biện pháp xác thực đa yếu tố (MFA).',
          'Cải thiện phân đoạn mạng để ngăn chặn sự lây lan của mã độc.',
        ],
      },
    ],
    vietnamContext: {
      title: 'An ninh mạng trong bối cảnh chuyển đổi số tại Việt Nam',
      content: [
        'Luật An ninh mạng Việt Nam 2018 đã tạo ra hành lang pháp lý quan trọng để bảo vệ không gian mạng quốc gia.',
        'Các ngân hàng tại Việt Nam như Vietcombank, Techcombank liên tục đầu tư vào các giải pháp bảo mật tiên tiến và thường xuyên cảnh báo người dùng về các chiêu thức lừa đảo mới.',
        'Các cuộc tấn công có chủ đích (APT) nhắm vào các cơ quan chính phủ và doanh nghiệp lớn ở Việt Nam ngày càng gia tăng, đòi hỏi sự đầu tư nghiêm túc vào năng lực phòng thủ mạng.',
      ],
    },
    careerConnect: {
      name: 'Anh Ngô Vi Đồng',
      title: 'Chủ tịch, HVA (Hiệp hội An toàn Thông tin Việt Nam)',
      company: 'VNISA',
      imageUrl: 'https://i.pravatar.cc/150?u=ngo-vi-dong',
      quote:
        'An ninh mạng không còn là công việc của riêng bộ phận IT, mà là trách nhiệm của mọi cá nhân trong tổ chức. Xây dựng một "bức tường lửa" từ nhận thức của con người là tuyến phòng thủ vững chắc nhất.',
    },
    quizzes: [
      {
        question: 'Bộ ba CIA trong an ninh mạng là viết tắt của những từ nào?',
        options: [
          'Confidentiality, Integrity, Availability',
          'Cybersecurity, Intelligence, Analysis',
          'Control, Inspect, Audit',
          'Connection, Internet, Access',
        ],
        correctAnswerIndex: 0,
        explanation:
          'CIA là ba nguyên tắc cốt lõi của an ninh thông tin: Tính bảo mật (Confidentiality), Tính toàn vẹn (Integrity), và Tính sẵn sàng (Availability).',
      },
    ],
    faqs: [
      {
        question: 'Làm thế nào để tạo một mật khẩu mạnh?',
        answer:
          'Một mật khẩu mạnh nên có ít nhất 12 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt. Tránh sử dụng thông tin cá nhân dễ đoán. Tốt nhất là sử dụng một cụm từ dễ nhớ nhưng khó đoán, ví dụ: "ToiThichAnPhoHaNoi@2025!"',
      },
      {
        question: 'Malware, Virus, và Ransomware khác nhau như thế nào?',
        answer: 'Malware (phần mềm độc hại) là thuật ngữ chung cho mọi loại phần mềm có hại. Virus là một loại malware có khả năng tự nhân bản bằng cách chèn mã của nó vào các chương trình khác. Ransomware là một loại malware chuyên mã hóa dữ liệu của nạn nhân và đòi tiền chuộc để giải mã.',
      },
      {
        question: 'Tại sao tôi nên cập nhật phần mềm thường xuyên?',
        answer: 'Các bản cập nhật phần mềm không chỉ mang lại tính năng mới mà còn thường xuyên vá các lỗ hổng bảo mật mà tin tặc có thể khai thác. Việc không cập nhật khiến hệ thống của bạn trở thành một mục tiêu dễ dàng.',
      },
      {
        question: 'Tường lửa (Firewall) hoạt động như thế nào?',
        answer: 'Tường lửa hoạt động như một người bảo vệ giữa mạng nội bộ của bạn và Internet. Nó giám sát và lọc lưu lượng truy cập mạng đến và đi dựa trên các quy tắc bảo mật đã được xác định trước, ngăn chặn các truy cập trái phép.',
      },
      {
        question: 'Xác thực đa yếu tố (MFA) có thực sự cần thiết không?',
        answer: 'Cực kỳ cần thiết. Ngay cả khi tin tặc có được mật khẩu của bạn, chúng vẫn không thể đăng nhập vào tài khoản nếu không có yếu tố thứ hai (ví dụ: mã OTP trên điện thoại của bạn). Đây là một trong những cách hiệu quả nhất để bảo vệ tài khoản.',
      },
      {
        question: 'Social Engineering là gì?',
        answer: 'Social Engineering là nghệ thuật thao túng tâm lý con người để họ tiết lộ thông tin bí mật hoặc thực hiện một hành động nào đó. Phishing là một hình thức phổ biến của social engineering. Kẻ tấn công khai thác lòng tin, sự sợ hãi hoặc tính tò mò của con người thay vì khai thác lỗ hổng kỹ thuật.',
      },
      {
        question: 'Làm thế nào để lướt web an toàn khi dùng Wi-Fi công cộng?',
        answer: 'Tránh truy cập vào các trang web nhạy cảm như ngân hàng trực tuyến. Luôn ưu tiên các trang web sử dụng HTTPS. Cách tốt nhất là sử dụng một dịch vụ Mạng riêng ảo (VPN) để mã hóa toàn bộ lưu lượng truy cập của bạn, khiến tin tặc không thể đọc được.',
      },
      {
        question: 'Sự khác biệt giữa HTTP và HTTPS là gì?',
        answer: 'Chữ "S" trong HTTPS là viết tắt của "Secure". HTTPS sử dụng mã hóa (thường là SSL/TLS) để bảo mật kết nối giữa trình duyệt của bạn và máy chủ web. Điều này ngăn chặn kẻ gian nghe lén hoặc thay đổi dữ liệu được truyền đi. Luôn tìm kiếm biểu tượng ổ khóa trên thanh địa chỉ.',
      },
      {
        question: 'Zero-day attack là gì?',
        answer: 'Đây là một cuộc tấn công khai thác một lỗ hổng bảo mật chưa từng được biết đến trước đây và chưa có bản vá nào cho nó. Các cuộc tấn công zero-day rất nguy hiểm vì không có biện pháp phòng thủ cụ thể nào chống lại chúng cho đến khi lỗ hổng được phát hiện và vá.',
      },
      {
        question: 'Tôi có cần phần mềm diệt virus nếu tôi dùng macOS hoặc Linux không?',
        answer: 'Mặc dù Windows là mục tiêu phổ biến nhất của malware, macOS và Linux không hoàn toàn miễn nhiễm. Việc sử dụng một phần mềm diệt virus uy tín vẫn là một biện pháp phòng thủ thông minh để tăng cường bảo vệ, đặc biệt nếu bạn thường xuyên tải xuống tệp từ internet hoặc trao đổi tệp với người dùng Windows.',
      },
    ],
  },
  // ... other lessons will be added here
];

export const cybersecurityModuleData: ModuleData = {
  id: K2Module.Cybersecurity,
  title: 'An ninh mạng & Ethical Hacking',
  subtitle: 'Trở thành người bảo vệ trong thế giới số',
  description:
    'Trang bị kiến thức và kỹ năng để bảo vệ hệ thống thông tin trước các mối đe dọa. Từ các nguyên tắc cơ bản đến kỹ thuật phòng thủ nâng cao và hacking có đạo đức.',
  level: 'Trung bình',
  duration: '25-30 giờ',
  category: 'Technology',
  primaryColor: 'red',
  features: [
    'Phân tích mã độc',
    'Kiểm thử xâm nhập (Penetration Testing)',
    'Bảo mật mạng',
    'Điều tra số (Digital Forensics)',
    'Quản lý rủi ro',
    'Hacking có đạo đức (Ethical Hacking)',
  ],
  icon: 'ShieldCheck',
  color: 'red',
  gradientColors: 'from-slate-900 via-red-900 to-orange-900',
  heroImageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
  objectives: [
    'Xác định và phân loại các loại tấn công mạng.',
    'Sử dụng các công cụ để quét lỗ hổng và phân tích mạng.',
    'Thực hiện các kỹ thuật phòng thủ chống lại các cuộc tấn-công phổ biến.',
    'Hiểu rõ các khía cạnh pháp lý và đạo đức trong an ninh mạng.',
  ],
  prerequisites: [
    'Hiểu biết về mạng máy tính (TCP/IP).',
    'Kiến thức cơ bản về hệ điều hành (Windows/Linux).',
    'Tư duy logic và phân tích.',
  ],
  careerOutcomes: [
    'Chuyên viên phân tích an ninh mạng (Security Analyst)',
    'Chuyên gia kiểm thử xâm nhập (Penetration Tester)',
    'Kỹ sư bảo mật (Security Engineer)',
    'Chuyên gia điều tra số (Digital Forensics Investigator)',
  ],
  industryApplications: [
    'Tài chính - Ngân hàng: Bảo vệ dữ liệu giao dịch và thông tin khách hàng.',
    'Chính phủ: Bảo mật cơ sở dữ liệu quốc gia và chống lại các cuộc tấn công có chủ đích.',
    'Thương mại điện tử: Đảm bảo an toàn cho các giao dịch trực tuyến.',
    'Y tế: Bảo vệ hồ sơ bệnh án điện tử và các thiết bị y tế kết nối.',
  ],
  marketDemand: {
    averageSalary: '20.000.000 - 50.000.000 VNĐ/tháng',
    jobGrowth: '30%',
    hireDemand:
      'Nhu cầu nhân lực an ninh mạng chất lượng cao tại Việt Nam đang ở mức "khát" và sẽ tiếp tục tăng mạnh trong những năm tới.',
  },
  relatedModules: [K2Module.Python, K2Module.DigitalCitizenshipOnlineSafety, K2Module.Blockchain],
  lessons: cybersecurityLessons,
};
