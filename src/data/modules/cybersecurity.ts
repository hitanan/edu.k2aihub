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
        answer:
          'Malware (phần mềm độc hại) là thuật ngữ chung cho mọi loại phần mềm có hại. Virus là một loại malware có khả năng tự nhân bản bằng cách chèn mã của nó vào các chương trình khác. Ransomware là một loại malware chuyên mã hóa dữ liệu của nạn nhân và đòi tiền chuộc để giải mã.',
      },
      {
        question: 'Tại sao tôi nên cập nhật phần mềm thường xuyên?',
        answer:
          'Các bản cập nhật phần mềm không chỉ mang lại tính năng mới mà còn thường xuyên vá các lỗ hổng bảo mật mà tin tặc có thể khai thác. Việc không cập nhật khiến hệ thống của bạn trở thành một mục tiêu dễ dàng.',
      },
      {
        question: 'Tường lửa (Firewall) hoạt động như thế nào?',
        answer:
          'Tường lửa hoạt động như một người bảo vệ giữa mạng nội bộ của bạn và Internet. Nó giám sát và lọc lưu lượng truy cập mạng đến và đi dựa trên các quy tắc bảo mật đã được xác định trước, ngăn chặn các truy cập trái phép.',
      },
      {
        question: 'Xác thực đa yếu tố (MFA) có thực sự cần thiết không?',
        answer:
          'Cực kỳ cần thiết. Ngay cả khi tin tặc có được mật khẩu của bạn, chúng vẫn không thể đăng nhập vào tài khoản nếu không có yếu tố thứ hai (ví dụ: mã OTP trên điện thoại của bạn). Đây là một trong những cách hiệu quả nhất để bảo vệ tài khoản.',
      },
      {
        question: 'Social Engineering là gì?',
        answer:
          'Social Engineering là nghệ thuật thao túng tâm lý con người để họ tiết lộ thông tin bí mật hoặc thực hiện một hành động nào đó. Phishing là một hình thức phổ biến của social engineering. Kẻ tấn công khai thác lòng tin, sự sợ hãi hoặc tính tò mò của con người thay vì khai thác lỗ hổng kỹ thuật.',
      },
      {
        question: 'Làm thế nào để lướt web an toàn khi dùng Wi-Fi công cộng?',
        answer:
          'Tránh truy cập vào các trang web nhạy cảm như ngân hàng trực tuyến. Luôn ưu tiên các trang web sử dụng HTTPS. Cách tốt nhất là sử dụng một dịch vụ Mạng riêng ảo (VPN) để mã hóa toàn bộ lưu lượng truy cập của bạn, khiến tin tặc không thể đọc được.',
      },
      {
        question: 'Sự khác biệt giữa HTTP và HTTPS là gì?',
        answer:
          'Chữ "S" trong HTTPS là viết tắt của "Secure". HTTPS sử dụng mã hóa (thường là SSL/TLS) để bảo mật kết nối giữa trình duyệt của bạn và máy chủ web. Điều này ngăn chặn kẻ gian nghe lén hoặc thay đổi dữ liệu được truyền đi. Luôn tìm kiếm biểu tượng ổ khóa trên thanh địa chỉ.',
      },
      {
        question: 'Zero-day attack là gì?',
        answer:
          'Đây là một cuộc tấn công khai thác một lỗ hổng bảo mật chưa từng được biết đến trước đây và chưa có bản vá nào cho nó. Các cuộc tấn công zero-day rất nguy hiểm vì không có biện pháp phòng thủ cụ thể nào chống lại chúng cho đến khi lỗ hổng được phát hiện và vá.',
      },
      {
        question: 'Tôi có cần phần mềm diệt virus nếu tôi dùng macOS hoặc Linux không?',
        answer:
          'Mặc dù Windows là mục tiêu phổ biến nhất của malware, macOS và Linux không hoàn toàn miễn nhiễm. Việc sử dụng một phần mềm diệt virus uy tín vẫn là một biện pháp phòng thủ thông minh để tăng cường bảo vệ, đặc biệt nếu bạn thường xuyên tải xuống tệp từ internet hoặc trao đổi tệp với người dùng Windows.',
      },
    ],
  },
  {
    id: 'network-security-and-defensive-strategies',
    title: 'Bảo mật Mạng và Chiến lược Phòng thủ',
    description:
      'Xây dựng các tuyến phòng thủ vững chắc cho hệ thống mạng. Học về tường lửa, hệ thống phát hiện xâm nhập (IDS/IPS), VPN, và các kỹ thuật làm cứng (hardening) hệ thống.',
    duration: '90 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=32g2TPn_W2c',
    objectives: [
      'Cấu hình và quản lý tường lửa.',
      'Triển khai và phân tích cảnh báo từ IDS/IPS.',
      'Hiểu và thiết lập kết nối Mạng riêng ảo (VPN).',
      'Áp dụng các nguyên tắc bảo mật cho máy chủ và thiết bị mạng.',
    ],
    prerequisites: ['Hoàn thành bài "Giới thiệu về An ninh mạng".', 'Kiến thức cơ bản về mô hình TCP/IP.'],
    exercises: [
      {
        title: 'Cấu hình Tường lửa UFW trên Linux',
        description:
          'Thực hành cấu hình Uncomplicated Firewall (UFW) trên một máy chủ Ubuntu để cho phép và chặn các dịch vụ cụ thể.',
        difficulty: 'Trung bình',
        materials: ['Máy ảo Ubuntu Server.'],
        procedure: [
          'Cài đặt UFW.',
          'Thiết lập quy tắc mặc định: từ chối tất cả các kết nối đến, cho phép tất cả các kết nối đi.',
          'Mở các cổng cho các dịch vụ phổ biến như SSH (22), HTTP (80), và HTTPS (443).',
          'Kiểm tra trạng thái và các quy tắc của tường lửa.',
        ],
        expectedResults: 'Học viên có thể cấu hình tường lửa cơ bản để bảo vệ máy chủ.',
      },
    ],
    realWorldApplications: [
      'Bảo vệ mạng văn phòng công ty.',
      'Thiết lập môi trường máy chủ an toàn trên đám mây.',
      'Bảo mật mạng gia đình khỏi các truy cập trái phép.',
    ],
    vietnamContext: {
      title: 'Phòng thủ không gian mạng tại Việt Nam',
      content: [
        'Trung tâm Giám sát an toàn không gian mạng quốc gia (NCSC) thuộc Cục An toàn thông tin, Bộ TT&TT, đóng vai trò đầu não trong việc giám sát và cảnh báo các nguy cơ tấn công mạng tại Việt Nam.',
        'Các doanh nghiệp viễn thông lớn như Viettel, VNPT cung cấp các dịch vụ giám sát an ninh (SOC) và tường lửa ứng dụng web (WAF) cho các tổ chức, doanh nghiệp.',
        'Mô hình "4 tại chỗ" (lực lượng tại chỗ, chỉ huy tại chỗ, phương tiện tại chỗ, hậu cần tại chỗ) là chiến lược cốt lõi của Việt Nam trong việc ứng phó với các sự cố an ninh mạng quy mô lớn.',
      ],
    },
    careerConnect: {
      name: 'Ông Nguyễn Minh Đức',
      title: 'CEO & Founder',
      company: 'CyRadar',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-minh-duc',
      quote:
        'Phòng thủ trong an ninh mạng giống như chơi cờ, bạn phải lường trước nước đi của đối thủ. Xây dựng nhiều lớp phòng thủ sâu (defense-in-depth) là chiến lược hiệu quả nhất để làm nản lòng kẻ tấn công.',
    },
    quizzes: [
      {
        question: 'Hệ thống phát hiện xâm nhập (IDS) khác với Hệ thống ngăn chặn xâm nhập (IPS) ở điểm nào?',
        options: [
          'IDS chỉ ghi log, IPS có thể chặn lưu lượng đáng ngờ.',
          'IDS được đặt bên trong mạng, IPS được đặt ở biên.',
          'IDS phân tích lưu lượng đi ra, IPS phân tích lưu lượng đi vào.',
          'Không có sự khác biệt nào.',
        ],
        correctAnswerIndex: 0,
        explanation:
          'IDS (Intrusion Detection System) chỉ phát hiện và cảnh báo, trong khi IPS (Intrusion Prevention System) có khả năng chủ động ngăn chặn các cuộc tấn công được phát hiện.',
      },
    ],
    faqs: [
      {
        question: 'Defense-in-Depth (Phòng thủ theo chiều sâu) là gì?',
        answer:
          'Đây là một chiến lược an ninh mạng sử dụng nhiều lớp biện pháp bảo vệ khác nhau. Ý tưởng là nếu một lớp phòng thủ bị xuyên thủng, các lớp tiếp theo vẫn có thể ngăn chặn cuộc tấn công. Ví dụ: kết hợp tường lửa, IDS/IPS, phần mềm diệt virus, và xác thực đa yếu tố.',
      },
      {
        question: 'VPN (Virtual Private Network) hoạt động như thế nào?',
        answer:
          'VPN tạo ra một "đường hầm" được mã hóa an toàn qua mạng internet công cộng. Toàn bộ lưu lượng truy cập của bạn sẽ đi qua đường hầm này, giúp che giấu địa chỉ IP thực và bảo vệ dữ liệu khỏi bị nghe lén, đặc biệt hữu ích khi sử dụng Wi-Fi công cộng.',
      },
      {
        question: 'Sự khác biệt giữa blacklist và whitelist là gì?',
        answer:
          'Trong bảo mật, blacklist là một danh sách các đối tượng (IP, ứng dụng, email) bị cấm truy cập. Whitelist là một danh sách các đối tượng được phép truy cập, và tất cả những thứ khác đều bị chặn. Whitelisting thường được coi là một cách tiếp cận an toàn hơn nhưng khó quản lý hơn.',
      },
      {
        question: 'Honeypot (Hũ mật) là gì?',
        answer:
          'Honeypot là một hệ thống máy tính được thiết lập như một cái bẫy để thu hút và đánh lạc hướng những kẻ tấn công. Bằng cách theo dõi các hoạt động trong honeypot, các chuyên gia bảo mật có thể tìm hiểu về các phương pháp tấn công mới và thu thập thông tin về kẻ tấn công.',
      },
      {
        question: 'DMZ (Demilitarized Zone) trong mạng máy tính là gì?',
        answer:
          'DMZ là một mạng con vật lý hoặc logic, chứa và phơi bày các dịch vụ đối mặt với bên ngoài của một tổ chức ra một mạng không đáng tin cậy, thường là Internet. Mục đích của DMZ là thêm một lớp bảo mật cho mạng LAN của tổ chức; một máy chủ bên ngoài có thể truy cập các máy chủ trong DMZ, nhưng không thể truy cập mạng LAN.',
      },
    ],
  },
  {
    id: 'ethical-hacking-and-penetration-testing',
    title: 'Ethical Hacking & Kiểm thử xâm nhập',
    description:
      'Học cách suy nghĩ như một hacker để tìm ra các lỗ hổng bảo mật. Khóa học này cung cấp các kiến thức và kỹ năng thực hành về kiểm thử xâm nhập (Penetration Testing) một cách có đạo đức.',
    duration: '120 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=fNzpcB7ODxQ',
    objectives: [
      'Hiểu rõ các giai đoạn của một cuộc kiểm thử xâm nhập.',
      'Sử dụng các công cụ phổ biến như Nmap, Metasploit, Burp Suite.',
      'Thực hiện các kỹ thuật thu thập thông tin, quét lỗ hổng.',
      'Khai thác các lỗ hổng web và hệ thống cơ bản.',
      'Viết báo cáo kiểm thử xâm nhập chuyên nghiệp.',
    ],
    prerequisites: ['Hoàn thành bài "Bảo mật Mạng".', 'Kiến thức về kịch bản lệnh (Python/Bash) là một lợi thế.'],
    exercises: [
      {
        title: 'Quét và Khai thác máy chủ Metasploitable2',
        description:
          'Sử dụng Nmap để quét các cổng và dịch vụ đang chạy trên máy chủ ảo Metasploitable2, sau đó dùng Metasploit Framework để khai thác một lỗ hổng đã biết.',
        difficulty: 'Nâng cao',
        materials: ['Máy ảo Kali Linux', 'Máy ảo Metasploitable2.'],
        procedure: [
          'Thiết lập hai máy ảo trên cùng một mạng NAT.',
          'Sử dụng Nmap để quét toàn diện các cổng trên Metasploitable2.',
          'Xác định một dịch vụ có lỗ hổng đã biết (ví dụ: vsftpd 2.3.4).',
          'Tìm kiếm và cấu hình module khai thác tương ứng trong Metasploit.',
          'Chạy exploit để giành quyền truy cập shell vào máy chủ mục tiêu.',
        ],
        expectedResults: 'Học viên có thể giành được quyền truy cập root vào máy chủ Metasploitable2.',
      },
    ],
    realWorldApplications: [
      'Đánh giá an ninh cho các ứng dụng web và di động.',
      'Kiểm tra độ bền của hệ thống mạng doanh nghiệp.',
      'Tuân thủ các tiêu chuẩn bảo mật như PCI-DSS.',
    ],
    vietnamContext: {
      title: 'Cộng đồng Ethical Hacking tại Việt Nam',
      content: [
        'Các cuộc thi "săn lỗi nhận thưởng" (bug bounty) được các tập đoàn lớn như Vingroup, FPT, Viettel tổ chức thường xuyên, thu hút đông đảo các hacker mũ trắng Việt Nam tham gia.',
        'Cộng đồng WhiteHat.vn là một trong những diễn đàn an ninh mạng lớn và lâu đời nhất Việt Nam, nơi các chuyên gia và người mới bắt đầu trao đổi kiến thức.',
        'Nhiều chuyên gia bảo mật Việt Nam đã được các công ty công nghệ hàng đầu thế giới như Google, Facebook, Microsoft vinh danh vì đã phát hiện và báo cáo các lỗ hổng bảo mật nghiêm trọng.',
      ],
    },
    careerConnect: {
      name: 'Anh Phạm Tiến Đạt (p4w)',
      title: 'Chuyên gia An ninh mạng',
      company: 'Viettel Cyber Security',
      imageUrl: 'https://i.pravatar.cc/150?u=pham-tien-dat',
      quote:
        'Để bắt được tội phạm, bạn phải hiểu tư duy của tội phạm. Ethical hacking cho chúng ta sức mạnh đó, sức mạnh để bảo vệ hệ thống bằng cách tìm ra điểm yếu trước khi kẻ xấu làm điều đó.',
    },
    quizzes: [
      {
        question: 'Công cụ nào thường được sử dụng để quét cổng và phát hiện dịch vụ trên một máy chủ?',
        options: ['Wireshark', 'Metasploit', 'Nmap', 'Burp Suite'],
        correctAnswerIndex: 2,
        explanation:
          'Nmap (Network Mapper) là công cụ quét mạng mã nguồn mở hàng đầu, được sử dụng rộng rãi để khám phá máy chủ và dịch vụ trên một mạng máy tính, từ đó tạo ra một "bản đồ" của mạng.',
      },
    ],
    faqs: [
      {
        question: 'Ethical Hacking (Hacking có đạo đức) có hợp pháp không?',
        answer:
          'Hoàn toàn hợp pháp, miễn là bạn có sự cho phép rõ ràng bằng văn bản từ chủ sở hữu của hệ thống mà bạn đang kiểm thử. Nếu không có sự cho phép, hành động đó sẽ được coi là bất hợp pháp.',
      },
      {
        question: 'Sự khác biệt giữa Black Hat, White Hat, và Grey Hat hacker là gì?',
        answer:
          'Black Hat (mũ đen) là những kẻ tấn công với mục đích xấu (trộm cắp, phá hoại). White Hat (mũ trắng) là các chuyên gia bảo mật, các ethical hacker, sử dụng kỹ năng của mình để bảo vệ hệ thống. Grey Hat (mũ xám) là những người ở giữa, họ có thể xâm nhập vào một hệ thống mà không có phép nhưng với mục đích tốt (ví dụ: để cảnh báo về một lỗ hổng).',
      },
      {
        question: 'Metasploit Framework là gì?',
        answer:
          'Metasploit là một công cụ cực kỳ mạnh mẽ, chứa một cơ sở dữ liệu khổng lồ các mã khai thác (exploits) cho các lỗ hổng đã biết. Nó giúp tự động hóa quá trình tấn công, từ việc quét, khai thác, cho đến leo thang đặc quyền.',
      },
      {
        question: 'Burp Suite được dùng để làm gì?',
        answer:
          'Burp Suite là công cụ hàng đầu để kiểm thử bảo mật ứng dụng web. Nó hoạt động như một proxy, cho phép hacker chặn, xem và sửa đổi tất cả các yêu cầu (requests) và phản hồi (responses) giữa trình duyệt và máy chủ web.',
      },
      {
        question: 'SQL Injection là gì?',
        answer:
          'SQL Injection là một kỹ thuật tấn công web cho phép kẻ tấn công chèn các câu lệnh SQL độc hại vào các truy vấn mà một ứng dụng web gửi đến cơ sở dữ liệu của nó. Một cuộc tấn công thành công có thể đọc, sửa đổi, hoặc xóa dữ liệu nhạy cảm.',
      },
    ],
  },
  {
    id: 'digital-forensics-and-incident-response',
    title: 'Điều tra số & Ứng cứu sự cố',
    description:
      'Khi một cuộc tấn công xảy ra, bạn sẽ làm gì? Khóa học này dạy bạn cách thu thập bằng chứng kỹ thuật số, phân tích và ứng phó với các sự cố an ninh mạng một cách có hệ thống.',
    duration: '90 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=c9S4DW2g-S0',
    objectives: [
      'Hiểu quy trình ứng cứu sự cố (Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned).',
      'Thực hiện thu thập và bảo quản bằng chứng số (Chain of Custody).',
      'Phân tích bộ nhớ (RAM) và ổ đĩa để tìm dấu vết của kẻ tấn công.',
      'Sử dụng các công cụ điều tra số như Autopsy, Volatility.',
    ],
    prerequisites: ['Kiến thức vững chắc về hệ điều hành và hệ thống tệp.'],
    exercises: [
      {
        title: 'Phân tích Ảnh đĩa (Disk Image)',
        description:
          'Sử dụng công cụ Autopsy để phân tích một file ảnh đĩa mẫu, tìm kiếm các tệp đã bị xóa, lịch sử duyệt web và các bằng chứng khác.',
        difficulty: 'Nâng cao',
        materials: ['Công cụ Autopsy', 'File ảnh đĩa mẫu (ví dụ: từ digitalcorpora.org).'],
        procedure: [
          'Tạo một ca điều tra mới trong Autopsy và nạp file ảnh đĩa.',
          'Chạy các module phân tích (ingest modules) để xử lý dữ liệu.',
          'Khám phá hệ thống tệp, tìm các tệp đã bị xóa.',
          'Phân tích lịch sử trình duyệt và các cấu phần hệ điều hành (artifacts).',
          'Tạo báo cáo về các phát hiện.',
        ],
        expectedResults: 'Học viên có thể trích xuất các bằng chứng quan trọng từ một file ảnh đĩa.',
      },
    ],
    realWorldApplications: [
      'Điều tra các vụ xâm nhập hệ thống doanh nghiệp.',
      'Hỗ trợ cơ quan thực thi pháp luật trong các vụ án tội phạm mạng.',
      'Phục hồi dữ liệu sau một sự cố an ninh.',
    ],
    vietnamContext: {
      title: 'Thực thi pháp luật và Điều tra tội phạm mạng tại Việt Nam',
      content: [
        'Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao (A05) - Bộ Công an là đơn vị chủ lực trong việc điều tra và xử lý các vụ án liên quan đến tội phạm mạng tại Việt Nam.',
        'Các vụ việc như lừa đảo trực tuyến, đánh bạc qua mạng, và phát tán thông tin sai sự thật đều được A05 và công an các địa phương điều tra, xử lý.',
        'Việt Nam đang xây dựng và hoàn thiện các quy định pháp lý về bằng chứng điện tử để có cơ sở vững chắc hơn trong việc xét xử các vụ án công nghệ cao.',
      ],
    },
    careerConnect: {
      name: 'Thiếu tướng Nguyễn Văn Giang',
      title: 'Phó Cục trưởng Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao (A05)',
      company: 'Bộ Công an',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-van-giang',
      quote:
        'Cuộc chiến trên không gian mạng là một cuộc chiến không tiếng súng nhưng đầy cam go. Công tác điều tra số đòi hỏi sự tỉ mỉ, kiến thức sâu rộng và một cái đầu lạnh để tìm ra sự thật từ những dấu vết nhỏ nhất.',
    },
    quizzes: [
      {
        question: 'Chain of Custody (Chuỗi hành trình của bằng chứng) trong điều tra số có ý nghĩa gì?',
        options: [
          'Một danh sách các nghi phạm.',
          'Một bản ghi chi tiết về việc ai đã xử lý bằng chứng, khi nào, và ở đâu, để đảm bảo tính toàn vẹn của nó.',
          'Một kỹ thuật mã hóa bằng chứng.',
          'Một phương pháp để xóa dấu vết.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Chain of Custody là một tài liệu cực kỳ quan trọng để đảm bảo rằng bằng chứng kỹ thuật số không bị thay đổi và có thể được chấp nhận tại tòa án.',
      },
    ],
    faqs: [
      {
        question: 'Tại sao việc phân tích bộ nhớ (RAM) lại quan trọng?',
        answer:
          'RAM chứa rất nhiều thông tin tạm thời và dễ bay hơi mà không được lưu trên ổ đĩa, ví dụ như các tiến trình đang chạy, kết nối mạng đang hoạt động, và thậm chí cả khóa mã hóa. Phân tích RAM có thể cung cấp những bằng chứng quan trọng về một cuộc tấn công đang diễn ra.',
      },
      {
        question: 'Volatility Framework là gì?',
        answer:
          'Volatility là một framework mã nguồn mở hàng đầu để phân tích các file kết xuất bộ nhớ (memory dump) từ các hệ điều hành Windows, Linux và macOS. Nó có thể trích xuất thông tin về các tiến trình, kết nối mạng, DLL, và nhiều hơn nữa.',
      },
      {
        question: 'Tại sao phải tạo một "ảnh" (image) của ổ đĩa thay vì làm việc trực tiếp trên ổ đĩa gốc?',
        answer:
          'Làm việc trực tiếp trên ổ đĩa gốc có thể vô tình làm thay đổi dữ liệu và phá hủy bằng chứng. Việc tạo một bản sao chính xác từng bit (bit-for-bit copy) hay còn gọi là "ảnh đĩa" cho phép nhà điều tra phân tích mà không làm ảnh hưởng đến bằng chứng gốc. Các thiết bị chống ghi (write-blocker) thường được sử dụng trong quá trình này.',
      },
      {
        question: 'Steganography là gì?',
        answer:
          'Steganography là nghệ thuật che giấu một tệp, tin nhắn, hình ảnh, hoặc video bên trong một tệp, tin nhắn, hình ảnh, hoặc video khác. Không giống như mã hóa (cryptography) che giấu nội dung của một tin nhắn, steganography che giấu chính sự tồn tại của tin nhắn đó.',
      },
      {
        question: 'Sáu giai đoạn của quy trình ứng cứu sự cố là gì?',
        answer:
          'Quy trình này thường được chia thành 6 giai đoạn theo NIST: 1. Preparation (Chuẩn bị), 2. Identification (Nhận dạng), 3. Containment (Ngăn chặn), 4. Eradication (Loại bỏ), 5. Recovery (Phục hồi), và 6. Lessons Learned (Rút kinh nghiệm).',
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
