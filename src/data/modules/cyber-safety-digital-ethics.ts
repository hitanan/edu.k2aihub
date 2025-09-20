import { ModuleData } from '@/types';

export const cyberSafetyDigitalEthicsModuleData: ModuleData = {
  id: 'cyber-safety-digital-ethics',
  title: 'An Toàn Mạng và Đạo Đức Số',
  subtitle: 'Trở thành một công dân số thông minh, có trách nhiệm và an toàn trong thế giới trực tuyến.',
  description:
    'Module này trang bị cho học sinh những kiến thức và kỹ năng thiết yếu để bảo vệ bản thân khỏi các mối đe dọa trên không gian mạng, xây dựng một danh tính số tích cực và hành xử một cách có văn hóa, có đạo đức.',
  image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&h=600&fit=crop',
  color: 'from-gray-500 to-slate-600',
  category: 'Công nghệ & Xã hội',
  level: 'Trung học',
  duration: '8 tuần',
  lessons: [
    {
      id: 'bao-ve-danh-tinh-so',
      title: 'Bảo Vệ Danh Tính Số và Dữ Liệu Cá Nhân',
      description:
        'Tìm hiểu về các loại thông tin cá nhân, tầm quan trọng của việc bảo vệ chúng và các kỹ thuật để tạo mật khẩu mạnh, nhận diện lừa đảo (phishing).',
      duration: '55 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: [
        'Tạo mật khẩu an toàn',
        'Cài đặt quyền riêng tư trên mạng xã hội',
        'Nhận diện email lừa đảo',
      ],
      objectives: [
        'Phân biệt được thông tin cá nhân nhạy cảm (số CCCD, mật khẩu) và thông tin ít nhạy cảm hơn.',
        'Hiểu khái niệm "dấu chân số" (digital footprint) và cách quản lý nó.',
        'Biết cách tạo và quản lý mật khẩu mạnh, kích hoạt xác thực hai yếu tố (2FA).',
        'Nhận diện được các dấu hiệu của một email hoặc tin nhắn lừa đảo (phishing).',
      ],
      faqs: [
        {
          question: 'Xác thực hai yếu tố (2FA) là gì và tại sao nên dùng?',
          answer:
            '2FA là một lớp bảo mật bổ sung cho tài khoản của bạn. Ngoài mật khẩu (yếu tố thứ nhất), bạn cần cung cấp thêm một mã xác thực, thường được gửi đến điện thoại của bạn (yếu tố thứ hai). Điều này khiến kẻ xấu gần như không thể truy cập tài khoản của bạn ngay cả khi họ biết mật khẩu.',
        },
        {
          question: 'Làm thế nào để nhận biết một email lừa đảo (phishing)?',
          answer:
            'Hãy cảnh giác với các dấu hiệu như: địa chỉ email người gửi lạ hoặc sai chính tả một cách tinh vi, lời lẽ khẩn cấp, hối thúc, đe dọa; yêu cầu cung cấp thông tin cá nhân; các liên kết đáng ngờ; và lỗi ngữ pháp, chính tả trong email.',
        },
      ],
      quizzes: [
        {
          question: 'Mật khẩu nào sau đây được xem là mạnh nhất?',
          options: ['12345678', 'password', 'NguyenVanA1995', 'P@ssw0rd_!2025#'],
          correctAnswerIndex: 3,
          explanation:
            'Một mật khẩu mạnh nên có độ dài ít nhất 12 ký tự, bao gồm cả chữ hoa, chữ thường, số và ký tự đặc biệt. Nó không nên chứa thông tin cá nhân dễ đoán.',
        },
      ],
    },
    {
      id: 'bat-nat-truc-tuyen',
      title: 'Đối Phó Với Bắt Nạt Trực Tuyến (Cyberbullying)',
      description:
        'Nhận diện các hình thức của bắt nạt trực tuyến, hậu quả của nó và các bước cần thực hiện khi bạn hoặc ai đó bạn biết trở thành nạn nhân.',
      duration: '50 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Báo cáo (report) hành vi xấu', 'Chặn (block) người dùng', 'Tìm kiếm sự giúp đỡ'],
      objectives: [
        'Hiểu các hình thức của bắt nạt trực tuyến: tung tin đồn, loại trừ, đe dọa, giả mạo...',
        'Nhận thức được tác hại nghiêm trọng của bắt nạt trực tuyến đối với sức khỏe tinh thần.',
        'Biết các bước cần làm: không trả đũa, lưu lại bằng chứng, báo cáo cho người lớn và nhà cung cấp dịch vụ.',
        'Học cách trở thành một "người ngoài cuộc tích cực" (upstander) thay vì "người ngoài cuộc thụ động" (bystander).',
      ],
      faqs: [
        {
          question: 'Khi bị bắt nạt trên mạng, tại sao không nên trả đũa?',
          answer:
            'Việc trả đũa thường chỉ làm tình hình leo thang và biến bạn từ nạn nhân thành một phần của cuộc xung đột. Điều này cũng có thể gây khó khăn hơn khi bạn tìm kiếm sự giúp đỡ từ người lớn, vì họ có thể nhìn nhận đó là "cuộc cãi vã của cả hai bên".',
        },
        {
          question: 'Upstander (người ngoài cuộc tích cực) là gì?',
          answer:
            'Đó là người chứng kiến hành vi bắt nạt nhưng không làm ngơ. Họ có thể hành động bằng nhiều cách: trực tiếp lên tiếng phản đối (nếu an toàn), báo cáo hành vi đó, hoặc đơn giản là nhắn tin riêng để an ủi, ủng hộ nạn nhân. Hành động của upstander có thể tạo ra sự khác biệt rất lớn.',
        },
      ],
      quizzes: [
        {
          question:
            'Nếu bạn thấy một người bạn bị chế giễu trong một nhóm chat, hành động nào sau đây là của một "upstander"?',
          options: [
            'Hùa theo để trêu bạn đó',
            'Im lặng và không làm gì cả',
            'Rời khỏi nhóm chat ngay lập tức',
            'Nhắn tin riêng hỏi thăm và an ủi bạn đó, đồng thời báo cáo hành vi cho trưởng nhóm hoặc giáo viên',
          ],
          correctAnswerIndex: 3,
          explanation:
            'Một upstander sẽ không im lặng trước cái xấu. Việc ủng hộ nạn nhân và báo cáo hành vi bắt nạt là những hành động đúng đắn và dũng cảm.',
        },
      ],
    },
    {
      id: 'van-hoa-ung-xu-so',
      title: 'Văn Hóa Ứng Xử và Đạo Đức Số',
      description:
        'Thảo luận về các quy tắc ứng xử trên mạng (netiquette), tôn trọng bản quyền, và trách nhiệm của công dân số trong việc tạo ra một môi trường trực tuyến lành mạnh.',
      duration: '50 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Bình luận văn minh', 'Chia sẻ thông tin có trách nhiệm', 'Tôn trọng sở hữu trí tuệ'],
      objectives: [
        'Hiểu các quy tắc cơ bản của netiquette (ví dụ: không viết hoa toàn bộ, không spam).',
        'Nhận biết tầm quan trọng của việc kiểm chứng thông tin trước khi chia sẻ (fact-checking).',
        'Hiểu những điều cơ bản về bản quyền và sở hữu trí tuệ trên mạng.',
        'Thảo luận về vai trò của mỗi cá nhân trong việc chống lại tin giả và ngôn từ thù hận.',
      ],
      faqs: [
        {
          question: 'Tại sao không nên viết hoa toàn bộ (CAPS LOCK) khi bình luận hoặc chat?',
          answer:
            'Trong văn hóa mạng, VIẾT HOA TOÀN BỘ được coi là tương đương với việc LA HÉT. Nó thể hiện sự tức giận, hung hăng và có thể khiến người đọc cảm thấy khó chịu.',
        },
        {
          question: 'Làm thế nào để kiểm tra một tin tức có phải là tin giả hay không?',
          answer:
            'Hãy xem xét nguồn tin (có đáng tin cậy không?), tìm kiếm thông tin đó trên các trang báo chí chính thống khác để đối chiếu, chú ý đến ngày tháng của bài viết, và cảnh giác với những tiêu đề giật gân, gây sốc.',
        },
      ],
      quizzes: [
        {
          question: 'Hành động nào sau đây thể hiện sự tôn trọng bản quyền trên mạng?',
          options: [
            'Tải một bộ phim mới ra rạp từ một trang web lậu',
            'Sử dụng một bức ảnh của nhiếp ảnh gia mà không xin phép và ghi nguồn',
            'Mua phần mềm hoặc trả phí cho các dịch vụ streaming',
            'Sao chép toàn bộ một bài báo và đăng lên blog của mình',
          ],
          correctAnswerIndex: 2,
          explanation:
            'Tôn trọng bản quyền là việc trả tiền cho công sức sáng tạo của người khác. Việc sử dụng các sản phẩm lậu là hành vi vi phạm pháp luật và đạo đức.',
        },
      ],
    },
  ],
  features: [
    'Hướng dẫn bảo mật tài khoản cá nhân',
    'Chiến lược đối phó với bắt nạt trực tuyến',
    'Quy tắc ứng xử trên không gian mạng (Netiquette)',
    'Tình huống thực tế và thảo luận về đạo đức số',
  ],
  prerequisites: ['Sử dụng Internet và mạng xã hội cơ bản'],
  objectives: [
    'Trang bị kỹ năng để tự bảo vệ mình trong môi trường số.',
    'Phát triển khả năng ứng phó với các tình huống tiêu cực trên mạng.',
    'Xây dựng ý thức và trách nhiệm của một công dân số văn minh.',
    'Thúc đẩy một môi trường trực tuyến an toàn và tích cực hơn.',
  ],
  careerOutcomes: [
    'Kỹ năng số cần thiết cho mọi công dân trong thế kỷ 21.',
    'Nền tảng cho những ai quan tâm đến các ngành an ninh mạng, luật, truyền thông, khoa học xã hội.',
  ],
  tags: ['an toàn mạng', 'công dân số', 'đạo đức', 'bắt nạt trực tuyến', 'bảo mật'],
};
