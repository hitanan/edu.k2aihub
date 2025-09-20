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
    id: 'digital-identity-and-footprint',
    videoUrl: null,
    title: 'Xây Dựng và Quản Lý Dấu Chân Số',
    description: 'Khám phá dấu chân số của bạn là gì, nó được tạo ra như thế nào và tại sao nó lại quan trọng.',
    duration: '100 phút',
    difficulty: 'Cơ bản',
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
        description:
          'Thực hiện một cuộc "tự kiểm tra" trên Google để xem những thông tin gì về bạn đang công khai trên mạng.',
        difficulty: 'Cơ bản',
        procedure: [
          'Mở một trình duyệt ở chế độ ẩn danh.',
          'Tìm kiếm tên đầy đủ của bạn trong dấu ngoặc kép (ví dụ: "Nguyễn Văn A").',
          'Tìm kiếm tên của bạn kèm theo trường học, nơi làm việc hoặc thành phố.',
          'Tìm kiếm hình ảnh liên quan đến tên của bạn.',
          'Ghi lại những kết quả đáng ngạc nhiên hoặc đáng lo ngại.',
        ],
        expectedResults:
          'Một bản tóm tắt về những thông tin công khai của bạn trên Internet và cảm nhận của bạn về chúng.',
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
      quote:
        'Trên Internet, không có gì là thực sự biến mất. Mỗi cú nhấp chuột, mỗi bình luận, mỗi bức ảnh bạn đăng đều là một viên gạch xây nên ngôi nhà số của bạn. Hãy đảm bảo rằng đó là một ngôi nhà mà bạn tự hào, chứ không phải là một nhà tù.',
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
        explanation:
          'Dấu chân số bị động là dữ liệu được thu thập mà bạn không chủ động cung cấp, ví dụ như lịch sử duyệt web, địa chỉ IP, vị trí địa lý.',
      },
    ],
    faqs: [
      {
        question: 'Làm thế nào để kiểm tra dấu chân số của tôi?',
        answer:
          'Bắt đầu bằng cách tìm kiếm tên của bạn trên Google. Kiểm tra cài đặt quyền riêng tư trên các tài khoản mạng xã hội. Sử dụng các dịch vụ như Have I Been Pwned để xem email của bạn có bị lộ trong các vụ rò rỉ dữ liệu không. Thường xuyên xem lại các ứng dụng và dịch vụ bạn đã cấp quyền truy cập vào dữ liệu của mình.',
      },
    ],
  },
  {
    id: 'privacy-and-security',
    videoUrl: null,
    title: 'Bảo vệ Quyền riêng tư và An ninh mạng',
    description:
      'Trang bị các kỹ năng thiết yếu để bảo vệ thông tin cá nhân trong môi trường số. Tìm hiểu về các mối đe dọa phổ biến và các công cụ, thói quen tốt nhất để giữ an toàn.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    imageUrl: 'https://i.ytimg.com/vi/6teflf_J5gE/hqdefault.jpg',
    objectives: [
      'Nhận diện các mối đe dọa đối với quyền riêng tư và an ninh mạng.',
      'Biết cách bảo vệ thông tin cá nhân trên các thiết bị và ứng dụng khác nhau.',
      'Thực hành các biện pháp bảo mật cơ bản như tạo mật khẩu mạnh, sử dụng VPN.',
      'Hiểu biết về quyền của bạn trong việc kiểm soát thông tin cá nhân.',
    ],
    prerequisites: ['Sử dụng điện thoại thông minh và máy tính bảng.', 'Có tài khoản trên ít nhất một mạng xã hội.'],
    exercises: [
      {
        title: 'Tạo Mật khẩu Mạnh',
        description: 'Học cách tạo ra những mật khẩu khó đoán nhưng dễ nhớ, và tại sao việc này lại quan trọng.',
        difficulty: 'Cơ bản',
        procedure: [
          'Sử dụng ít nhất 12 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.',
          'Tránh sử dụng thông tin cá nhân dễ đoán như ngày sinh, tên thú cưng.',
          'Sử dụng trình quản lý mật khẩu để lưu trữ và quản lý mật khẩu.',
        ],
        expectedResults:
          'Một mật khẩu mạnh được tạo ra cho từng tài khoản quan trọng và ghi nhớ nguyên tắc để tạo mật khẩu.',
      },
    ],
    realWorldApplications: [
      'Bảo vệ tài khoản ngân hàng trực tuyến khỏi bị truy cập trái phép.',
      'Ngăn chặn kẻ xấu đánh cắp thông tin cá nhân để lừa đảo.',
      'Giữ an toàn cho các giao dịch trực tuyến và thông tin nhạy cảm.',
    ],
    vietnamContext: {
      title: 'An ninh mạng và quyền riêng tư tại Việt Nam',
      content: [
        'Việt Nam là một trong những quốc gia có tỷ lệ tội phạm mạng cao nhất Đông Nam Á, với nhiều hình thức lừa đảo trực tuyến ngày càng tinh vi.',
        'Luật An ninh mạng 2018 quy định rõ về trách nhiệm của các tổ chức, cá nhân trong việc bảo vệ an ninh mạng và thông tin cá nhân.',
        'Các dịch vụ như bảo mật điện thoại, bảo vệ danh tính trực tuyến đang trở thành nhu cầu thiết yếu.',
      ],
    },
    careerConnect: {
      name: 'Chị Trần Thị Kim Anh',
      title: 'Chuyên gia An ninh mạng',
      company: 'BKAV',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-thi-kim-anh',
      quote:
        'Trong thế giới số, thông tin là sức mạnh. Bảo vệ thông tin cá nhân không chỉ là bảo vệ bản thân mà còn là bảo vệ gia đình và cộng đồng. Hãy là một công dân số thông thái và có trách nhiệm.',
    },
    quizzes: [
      {
        question: 'Biện pháp nào sau đây KHÔNG giúp bảo vệ quyền riêng tư trực tuyến?',
        options: [
          'Sử dụng mật khẩu mạnh và khác nhau cho mỗi tài khoản.',
          'Chia sẻ mật khẩu cho bạn bè thân thiết để họ giúp bạn quản lý tài khoản.',
          'Kiểm tra cài đặt quyền riêng tư trên mạng xã hội.',
          'Sử dụng VPN khi kết nối với mạng Wi-Fi công cộng.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Chia sẻ mật khẩu là hành động làm giảm bảo mật và có thể dẫn đến việc tài khoản của bạn bị truy cập trái phép.',
      },
    ],
    faqs: [
      {
        question: 'Xác thực hai yếu tố (2FA) là gì và tại sao nó quan trọng?',
        answer:
          'Xác thực hai yếu tố là một lớp bảo mật bổ sung yêu cầu bạn cung cấp hai hình thức nhận dạng khác nhau để đăng nhập. Ví dụ: mật khẩu của bạn (yếu tố đầu tiên) và một mã số được gửi đến điện thoại của bạn (yếu tố thứ hai). Nó cực kỳ quan trọng vì ngay cả khi kẻ xấu có được mật khẩu của bạn, họ vẫn không thể truy cập vào tài khoản nếu không có thiết bị của bạn.',
      },
    ],
  },
  {
    id: 'media-literacy-and-critical-thinking',
    videoUrl: null,
    title: 'Tư Duy Phản Biện và Đọc Hiểu Truyền Thông Số',
    description:
      'Phát triển khả năng phân tích và đánh giá thông tin trên môi trường số. Nhận diện tin giả, thông tin sai lệch và hiểu biết về cách thức truyền thông hoạt động.',
    duration: '90 phút',
    difficulty: 'Trung bình',
    imageUrl: 'https://i.ytimg.com/vi/6teflf_J5gE/hqdefault.jpg',
    objectives: [
      'Nhận diện các yếu tố của tin giả và thông tin sai lệch.',
      'Phân tích độ tin cậy của các nguồn thông tin.',
      'Hiểu biết về cách thức truyền thông ảnh hưởng đến nhận thức và hành vi.',
      'Phát triển kỹ năng tư duy phản biện trong việc tiếp nhận và xử lý thông tin.',
    ],
    prerequisites: ['Sử dụng Internet để tìm kiếm thông tin.', 'Có tài khoản trên các mạng xã hội phổ biến.'],
    exercises: [
      {
        title: 'Phân tích Một Bài viết Trực tuyến',
        description:
          'Chọn một bài viết trên mạng và phân tích các yếu tố như tác giả, nguồn gốc, mục đích, và đối tượng độc giả.',
        difficulty: 'Trung bình',
        procedure: [
          'Bước 1: Xác định tác giả và tổ chức đứng sau bài viết.',
          'Bước 2: Kiểm tra độ tin cậy của nguồn thông tin.',
          'Bước 3: Phân tích ngôn ngữ và hình ảnh được sử dụng trong bài viết.',
          'Bước 4: Đánh giá mục đích và đối tượng độc giả mà bài viết hướng tới.',
        ],
        expectedResults:
          'Một báo cáo ngắn gọn về độ tin cậy của bài viết và những điểm cần lưu ý khi tiếp nhận thông tin từ nguồn này.',
      },
    ],
    realWorldApplications: [
      'Giúp bạn đọc hiểu và phân tích thông tin một cách chính xác hơn.',
      'Bảo vệ bạn khỏi những tin tức giả mạo và thông tin sai lệch.',
      'Phát triển khả năng tư duy độc lập và phản biện.',
    ],
    vietnamContext: {
      title: 'Truyền thông và thông tin tại Việt Nam',
      content: [
        'Việt Nam có một thị trường truyền thông đa dạng với nhiều loại hình báo chí, truyền hình, và mạng xã hội.',
        'Sự phát triển nhanh chóng của Internet đã tạo ra nhiều cơ hội nhưng cũng đặt ra không ít thách thức về thông tin sai lệch, tin giả.',
        'Người dùng cần trang bị kỹ năng phân tích và đánh giá thông tin để bảo vệ bản thân và gia đình.',
      ],
    },
    careerConnect: {
      name: 'Nguyễn Văn A',
      title: 'Nhà báo tự do',
      company: 'Báo điện tử VNExpress',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-van-a',
      quote:
        'Là một nhà báo, tôi hiểu rõ sức mạnh của thông tin và trách nhiệm đi kèm với nó. Mỗi người dùng Internet đều có thể trở thành một nhà báo công dân, hãy sử dụng sức mạnh đó một cách thông thái và có trách nhiệm.',
    },
    quizzes: [
      {
        question: 'Đâu là dấu hiệu của một bài viết không đáng tin cậy?',
        options: [
          'Có nhiều lỗi chính tả và ngữ pháp.',
          'Được chia sẻ rộng rãi trên mạng xã hội.',
          'Có trích dẫn từ các chuyên gia.',
          'Được đăng trên một trang web nổi tiếng.',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Những bài viết không đáng tin cậy thường có nhiều lỗi chính tả, ngữ pháp và thiếu thông tin xác thực.',
      },
    ],
    faqs: [
      {
        question: 'Tại sao tôi cần phải quan tâm đến dấu chân số của mình?',
        answer:
          'Dấu chân số của bạn có thể ảnh hưởng đến danh tiếng, cơ hội nghề nghiệp và mối quan hệ cá nhân. Quản lý và bảo vệ dấu chân số là cách để bạn kiểm soát hình ảnh và thông tin về mình trên mạng.',
      },
      {
        question: 'Làm thế nào để xây dựng một dấu chân số tích cực?',
        answer:
          'Hãy chia sẻ những nội dung thể hiện sự quan tâm của bạn đến ngành nghề, các dự án bạn đã làm, hoặc các bài viết thể hiện tư duy tích cực. Tham gia các cuộc thảo luận một cách văn minh. Sử dụng LinkedIn để xây dựng một hồ sơ chuyên nghiệp. Về cơ bản, hãy biến Internet thành nơi để thể hiện phiên bản tốt nhất của bạn.',
      },
    ],
  },
];
