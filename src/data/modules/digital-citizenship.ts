import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { DigitalCitizenshipLesson } from '@/types/lesson-base';

export const digitalCitizenshipModuleData: ModuleData = {
  id: 'digital-citizenship',
  title: 'Digital Citizenship & Online Safety',
  subtitle: 'Công dân số và An toàn trực tuyến',
  description:
    'Trang bị kỹ năng để trở thành công dân số có trách nhiệm, an toàn và thông thái trong thế giới kết nối.',
  category: 'essential',
  icon: '🛡️',
  color: 'from-sky-500 to-blue-500',
  totalDuration: '10-14 giờ',
  difficulty: 'Cơ bản',
  level: 'Cơ bản',
  duration: '10-14 giờ',
  href: '/learning/digital-citizenship',
  features: [
    'Digital Footprint',
    'Cyberbullying Prevention',
    'Privacy Management',
    'Fake News Detection',
    'Netiquette',
  ],
  tags: ['digital citizenship', 'online safety', 'cybersecurity', 'privacy', 'media literacy'],
  prerequisites: ['Sử dụng Internet và mạng xã hội cơ bản', 'Mong muốn trở thành người dùng Internet có trách nhiệm'],
  objectives: [
    'Hiểu và quản lý dấu chân số của bản thân.',
    'Nhận biết và ứng phó với các hình thức bắt nạt và quấy rối trực tuyến.',
    'Bảo vệ thông tin cá nhân và quyền riêng tư trên không gian mạng.',
    'Phát triển kỹ năng tư duy phản biện để phát hiện tin giả và thông tin sai lệch.',
    'Thực hành các quy tắc ứng xử văn minh và giao tiếp hiệu quả trên môi trường số.',
  ],
  careerOutcomes: [
    'Kỹ năng cần thiết cho mọi ngành nghề trong thế kỷ 21.',
    'Nền tảng để trở thành chuyên gia truyền thông xã hội, quản lý cộng đồng.',
    'Kiến thức cơ bản cho các ngành an ninh mạng, luật công nghệ thông tin.',
  ],
  industryApplications: [
    {
      name: 'Mọi ngành nghề',
      description: 'Xây dựng thương hiệu cá nhân chuyên nghiệp và an toàn trên mạng.',
    },
    {
      name: 'Giáo dục',
      description: 'Hướng dẫn học sinh sử dụng internet một cách an toàn và có trách nhiệm.',
    },
    {
      name: 'Truyền thông & Marketing',
      description: 'Quản lý khủng hoảng truyền thông và xây dựng hình ảnh thương hiệu tích cực.',
    },
  ],
  marketDemand: {
    averageSalary: 'N/A',
    jobGrowth: 'Kỹ năng cơ bản',
    hireDemand: 'Cao',
  },
  relatedModules: [K2Module.SocialMedia, K2Module.Cybersecurity],
};

export const DigitalCitizenshipLessons: DigitalCitizenshipLesson[] = [
  {
    id: 'understanding-digital-footprint',
    title: 'Hiểu về Dấu chân số của bạn',
    description: 'Khám phá dấu chân số của bạn là gì, nó được tạo ra như thế nào và tại sao nó lại quan trọng.',
    duration: '100 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=6T_prg3E4j8',
    imageUrl: 'https://i.ytimg.com/vi/6T_prg3E4j8/hqdefault.jpg',
    objectives: [
      'Định nghĩa dấu chân số chủ động và bị động.',
      'Nhận biết các hoạt động trực tuyến tạo ra dấu chân số.',
      'Hiểu được tác động lâu dài của dấu chân số đến danh tiếng và cơ hội.',
      'Học cách kiểm tra và quản lý dấu chân số của bản thân.',
    ],
    prerequisites: ['Có tài khoản mạng xã hội (ví dụ: Facebook, Instagram).', 'Sử dụng công cụ tìm kiếm (Google).'],
    exercises: [
      {
        title: 'Kiểm tra Dấu chân số của bạn',
        description: 'Thực hiện một cuộc "tự kiểm tra" trên Google để xem những thông tin gì về bạn đang công khai trên mạng.',
        difficulty: 'Cơ bản',
        procedure: [
          'Mở một trình duyệt ở chế độ ẩn danh.',
          'Tìm kiếm tên đầy đủ của bạn trong dấu ngoặc kép (ví dụ: "Nguyễn Văn A").',
          'Tìm kiếm tên của bạn kèm theo trường học, nơi làm việc hoặc thành phố.',
          'Tìm kiếm hình ảnh liên quan đến tên của bạn.',
          'Ghi lại những kết quả đáng ngạc nhiên hoặc đáng lo ngại.',
        ],
        expectedResults: 'Một bản tóm tắt về những thông tin công khai của bạn trên Internet và cảm nhận của bạn về chúng.',
      },
    ],
    realWorldApplications: [
      'Nhà tuyển dụng kiểm tra dấu chân số của ứng viên trước khi phỏng vấn.',
      'Các trường đại học xem xét hoạt động trực tuyến của sinh viên tương lai.',
      'Thông tin bạn chia sẻ hôm nay có thể ảnh hưởng đến các mối quan hệ trong tương lai.',
    ],
    vietnamContext: {
      title: 'Dấu chân số trong bối cảnh Việt Nam',
      content: [
        'Văn hóa "hóng phốt", "bóc phốt" trên mạng xã hội Việt Nam có thể khiến một bình luận hoặc hình ảnh cũ của bạn bị "đào lại" và gây ra khủng hoảng bất cứ lúc nào.',
        'Nhiều bạn trẻ Việt Nam vô tư chia sẻ thông tin cá nhân như số điện thoại, địa chỉ nhà trên các livestream bán hàng hoặc các nhóm cộng đồng, tạo ra rủi ro về an toàn.',
        'Luật An ninh mạng Việt Nam có các quy định về hành vi trên không gian mạng, và dấu chân số của bạn có thể trở thành bằng chứng pháp lý.',
      ],
    },
    careerConnect: {
      name: 'Anh Nguyễn Hữu Thông',
      title: 'Chuyên gia An ninh mạng',
      company: 'Viettel Cyber Security',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-huu-thong',
      quote: 'Trên Internet, không có gì là thực sự biến mất. Mỗi cú nhấp chuột, mỗi bình luận, mỗi bức ảnh bạn đăng đều là một viên gạch xây nên ngôi nhà số của bạn. Hãy đảm bảo rằng đó là một ngôi nhà mà bạn tự hào, chứ không phải là một nhà tù.',
    },
    quizzes: [
      {
        question: 'Đâu là ví dụ về dấu chân số BỊ ĐỘNG?',
        options: [
          'Đăng một bức ảnh lên Instagram.',
          'Gửi một email cho bạn bè.',
          'Trang web lưu lại địa chỉ IP và lịch sử truy cập của bạn.',
          'Viết một bình luận trên Facebook.',
        ],
        correctAnswerIndex: 2,
        explanation: 'Dấu chân số bị động là dữ liệu được thu thập mà bạn không chủ động cung cấp, ví dụ như lịch sử duyệt web, địa chỉ IP, vị trí địa lý.',
      },
    ],
  },
  {
    id: 'cyberbullying-and-online-harassment',
    title: 'Phòng chống Bắt nạt và Quấy rối trên mạng',
    description: 'Nhận diện, đối phó và trở thành một người bảo vệ trước các hành vi tiêu cực trên mạng.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=6teflf_J5gE',
    imageUrl: 'https://i.ytimg.com/vi/6teflf_J5gE/hqdefault.jpg',
    objectives: [
      'Nhận diện các hình thức khác nhau của bắt nạt trực tuyến (cyberbullying).',
      'Hiểu tác động tâm lý của bắt nạt trực tuyến đối với nạn nhân.',
      'Học các chiến lược đối phó khi bản thân hoặc người khác bị bắt nạt.',
      'Biết cách thu thập bằng chứng và báo cáo các hành vi quấy rối.',
    ],
    prerequisites: ['Tham gia các cộng đồng trực tuyến (nhóm Facebook, diễn đàn).', 'Chứng kiến hoặc trải qua các tương tác tiêu cực trên mạng.'],
    exercises: [
      {
        title: 'Kịch bản Nhập vai',
        description: 'Thảo luận và đưa ra cách xử lý cho các tình huống bắt nạt trực tuyến giả định.',
        difficulty: 'Trung bình',
        procedure: [
          'Tình huống 1: Một người bạn bị chế giễu về ngoại hình trong một nhóm chat chung.',
          'Tình huống 2: Bạn nhận được những tin nhắn đe dọa từ một tài khoản ẩn danh.',
          'Tình huống 3: Một người lan truyền tin đồn sai sự thật về bạn trên mạng xã hội.',
          'Với mỗi tình huống, hãy trả lời: Bạn sẽ làm gì? Bạn sẽ khuyên người trong cuộc làm gì? Đâu là ranh giới giữa trêu đùa và bắt nạt?',
        ],
        expectedResults: 'Các chiến lược hành động cụ thể và sự tự tin để đối phó với các tình huống bắt nạt.',
      },
    ],
    realWorldApplications: [
      'Xây dựng một môi trường học tập và làm việc trực tuyến an toàn, tích cực.',
      'Bảo vệ sức khỏe tinh thần của bản thân và bạn bè.',
      'Trở thành một người có ảnh hưởng tích cực (upstander) thay vì người ngoài cuộc (bystander).',
    ],
    vietnamContext: {
      title: 'Vấn nạn Bắt nạt trên mạng tại Việt Nam',
      content: [
        '"Body shaming" (miệt thị ngoại hình) và "cancel culture" (văn hóa tẩy chay) là những hình thức bắt nạt trực tuyến rất phổ biến tại Việt Nam, gây ảnh hưởng nặng nề đến nhiều người, kể cả người nổi tiếng.',
        'Nhiều vụ việc bắt nạt học đường bắt nguồn từ những mâu thuẫn trên mạng xã hội.',
        'Các công cụ như "Tổng đài Quốc gia bảo vệ trẻ em 111" và các tổ chức như "Ngôi nhà bình yên" cung cấp sự hỗ trợ cho nạn nhân của bạo lực trên cơ sở giới, bao gồm cả quấy rối trực tuyến.',
      ],
    },
    careerConnect: {
      name: 'Thạc sĩ Nguyễn Phương Anh',
      title: 'Chuyên gia Tâm lý học đường',
      company: 'Hệ thống giáo dục Vinschool',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-phuong-anh',
      quote: 'Bắt nạt trên mạng còn đáng sợ hơn bắt nạt ngoài đời thực vì nó theo bạn 24/7, vào tận phòng ngủ, vào tận tâm trí bạn. Học cách tự bảo vệ mình và lên tiếng vì người khác không chỉ là một kỹ năng, đó là một hành động dũng cảm để đòi lại sự tử tế cho không gian mạng.',
    },
    quizzes: [
      {
        question: 'Khi bị bắt nạt trên mạng, hành động nào sau đây được khuyến khích?',
        options: [
          'Trả đũa, chửi lại kẻ bắt nạt.',
          'Im lặng và chịu đựng một mình.',
          'Lưu lại bằng chứng (chụp màn hình), chặn kẻ bắt nạt và chia sẻ với người lớn mà bạn tin tưởng.',
          'Xóa tài khoản và không bao giờ lên mạng nữa.',
        ],
        correctAnswerIndex: 2,
        explanation: 'Đối đầu trực tiếp có thể làm tình hình tồi tệ hơn. Việc lưu bằng chứng là rất quan trọng để báo cáo sau này. Chia sẻ với người lớn (phụ huynh, thầy cô) sẽ giúp bạn có được sự hỗ trợ cần thiết.',
      },
    ],
  },
];
