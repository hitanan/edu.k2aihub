import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { BaseLessonData, QuizQuestion, VietnamContext, CareerProfile } from '@/types/lesson-base';

export interface DigitalCitizenshipLesson extends BaseLessonData {
  mainContent: {
    introduction: string;
    keyConcepts: {
      title: string;
      description: string;
      examples: string[];
    }[];
    practicalApplications: {
      area: string;
      description: string;
    }[];
    conclusion: string;
  };
  vietnamContext: VietnamContext;
  careerConnect: CareerProfile;
  quizzes: QuizQuestion[];
}

export const lessons: DigitalCitizenshipLesson[] = [
  {
    id: 'hieu-ve-cong-dan-so',
    title: 'Hiểu về Công dân số',
    description:
      'Khám phá khái niệm công dân số và tầm quan trọng của việc trở thành một công dân số có trách nhiệm trong kỷ nguyên số.',
    duration: '45 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=uJ065EhtUG4',
    imageUrl: 'https://i.ytimg.com/vi/s_c0n_O_w-E/hqdefault.jpg',
    mainContent: {
      introduction:
        'Trong thế giới số, mỗi hành động của chúng ta đều để lại dấu vết. Bài học này sẽ giúp bạn hiểu rõ về "dấu chân số", quyền và nghĩa vụ của một công dân số, từ đó xây dựng một hình ảnh cá nhân tích cực và có trách nhiệm trên không gian mạng.',
      keyConcepts: [
        {
          title: 'Công dân số (Digital Citizen)',
          description:
            'Là một người sử dụng công nghệ thông tin để tham gia vào xã hội, chính trị và kinh tế. Một công dân số có trách nhiệm cần có kiến thức, kỹ năng và chuẩn mực đạo đức để hành động an toàn, hợp pháp và có văn hóa.',
          examples: [
            'Tham gia thảo luận các vấn đề xã hội một cách văn minh trên mạng xã hội.',
            'Sử dụng các dịch vụ công trực tuyến của chính phủ.',
            'Mua bán hàng hóa và dịch vụ qua các kênh thương mại điện tử.',
          ],
        },
        {
          title: 'Dấu chân số (Digital Footprint)',
          description:
            'Là tập hợp tất cả dữ liệu bạn tạo ra và để lại khi sử dụng internet. Nó bao gồm dấu chân chủ động (những gì bạn cố ý chia sẻ) và bị động (dữ liệu được thu thập mà bạn không hay biết).',
          examples: [
            'Chủ động: Bài đăng trên Facebook, bình luận trên YouTube, hình ảnh trên Instagram.',
            'Bị động: Lịch sử tìm kiếm, địa chỉ IP, dữ liệu vị trí được các ứng dụng thu thập.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Quản lý hình ảnh cá nhân',
          description:
            'Nhà tuyển dụng thường xuyên tìm kiếm ứng viên trên mạng xã hội. Một dấu chân số tích cực và chuyên nghiệp có thể là một lợi thế lớn khi xin việc.',
        },
        {
          area: 'Bảo vệ thông tin cá nhân',
          description:
            'Hiểu về dấu chân số giúp bạn nhận thức được những thông tin nào của mình đang được chia sẻ và có biện pháp bảo vệ phù hợp để tránh bị lạm dụng.',
        },
      ],
      conclusion:
        'Trở thành một công dân số có trách nhiệm không chỉ là bảo vệ bản thân mà còn góp phần xây dựng một môi trường số an toàn, văn minh và đáng tin cậy cho tất cả mọi người.',
    },
    objectives: [
      'Định nghĩa được "công dân số" và "dấu chân số".',
      'Nhận thức được vai trò và trách nhiệm của một công dân số.',
      'Phân biệt được giữa dấu chân số chủ động và bị động.',
    ],
    prerequisites: ['Không yêu cầu kiến thức nền tảng.'],
    exercises: [
      {
        title: 'Phân tích Dấu chân số của bạn',
        description: 'Tự kiểm tra và phân tích dấu chân số cá nhân trên các nền tảng mạng xã hội.',
        difficulty: 'Cơ bản',
        procedure: [
          'Liệt kê các tài khoản mạng xã hội bạn đang sử dụng.',
          'Tìm kiếm tên của bạn trên Google và xem kết quả.',
          'Ghi lại những thông tin bạn tìm thấy về bản thân và cảm nhận của bạn.',
        ],
        expectedResults: 'Học viên nhận thức được những thông tin nào của họ đang công khai trên Internet.',
      },
    ],
    realWorldApplications: [
      'Quản lý hình ảnh cá nhân khi xin việc.',
      'Xây dựng thương hiệu cá nhân trên mạng xã hội.',
      'Hiểu rõ cách các công ty thu thập dữ liệu người dùng.',
    ],
    vietnamContext: {
      title: 'Bối cảnh Công dân số tại Việt Nam',
      content: [
        'Chương trình Chuyển đổi số quốc gia đến năm 2025, định hướng đến năm 2030 của Chính phủ nhấn mạnh việc nâng cao nhận thức và kỹ năng số cho người dân.',
        'Luật An ninh mạng 2018 quy định về các hành vi bị cấm trên không gian mạng và trách nhiệm của người dùng, đòi hỏi công dân số phải hiểu và tuân thủ pháp luật.',
        'Sự bùng nổ của các nền tảng mạng xã hội (Zalo, Facebook, TikTok) và thương mại điện tử (Shopee, Tiki) tại Việt Nam làm cho việc xây dựng uy tín và danh tính số trở nên quan trọng hơn bao giờ hết.',
      ],
    },
    careerConnect: {
      name: 'Nguyễn Huy',
      title: 'Chuyên viên An toàn thông tin',
      company: 'FPT Information System',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      quote:
        'Trong lĩnh vực an toàn thông tin, chúng tôi coi mỗi người dùng là một mắt xích. Một công dân số được trang bị kiến thức tốt sẽ là tuyến phòng thủ đầu tiên và hiệu quả nhất chống lại các cuộc tấn công mạng. Hiểu biết về danh tính số của chính mình là bước khởi đầu quan trọng.',
    },
    quizzes: [
      {
        question: '"Dấu chân số" (Digital Footprint) là gì?',
        options: [
          'Dấu vân tay bạn để lại trên màn hình thiết bị.',
          'Tổng hợp tất cả các hoạt động, dữ liệu bạn để lại khi sử dụng Internet.',
          'Một ứng dụng theo dõi bước chân.',
          'Mã số định danh công dân điện tử.',
        ],
        correctAnswerIndex: 1,
        explanation:
          '"Dấu chân số" là tập hợp tất cả các dấu vết bạn để lại trực tuyến, từ bình luận, hình ảnh, đến lịch sử tìm kiếm. Nó tạo nên hình ảnh của bạn trên không gian mạng.',
      },
      {
        question: 'Hành động nào sau đây thuộc về một công dân số có trách nhiệm?',
        options: [
          'Chia sẻ thông tin chưa kiểm chứng vì nó thú vị.',
          'Sử dụng ngôn từ gây thù ghét trong các cuộc tranh luận.',
          'Tôn trọng bản quyền và sở hữu trí tuệ.',
          'Tạo nhiều tài khoản ảo để tăng tương tác.',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Một công dân số có trách nhiệm luôn tôn trọng các quy định về bản quyền, giao tiếp văn minh và chia sẻ thông tin một cách có ý thức.',
      },
    ],
    faqs: [
      {
        question: 'Tại sao việc quản lý "dấu chân số" lại quan trọng?',
        answer:
          'Dấu chân số của bạn tạo nên hình ảnh và uy tín của bạn trên mạng. Nhà tuyển dụng, trường học và cả những người bạn tương lai có thể xem nó. Một dấu chân số tích cực và chuyên nghiệp có thể mở ra nhiều cơ hội, trong khi một dấu chân số tiêu cực có thể gây ra những hậu quả không mong muốn.',
      },
      {
        question: 'Làm thế nào để phân biệt giữa dấu chân số chủ động và bị động?',
        answer:
          'Dấu chân chủ động là những gì bạn cố ý chia sẻ, như một bài đăng trên Facebook hoặc một bình luận trên YouTube. Dấu chân bị động là dữ liệu được thu thập mà bạn có thể không nhận thức được, như lịch sử duyệt web của bạn được các trang web theo dõi qua cookies hoặc vị trí của bạn được một ứng dụng ghi lại.',
      },
      {
        question: 'Trở thành công dân số có trách nhiệm có lợi ích gì?',
        answer:
          'Nó không chỉ giúp bạn bảo vệ bản thân khỏi các rủi ro như lừa đảo, đánh cắp danh tính và bắt nạt trực tuyến, mà còn giúp bạn xây dựng uy tín cá nhân, tận dụng các cơ hội học tập và việc làm, và góp phần tạo ra một môi trường Internet an toàn và văn minh hơn cho mọi người.',
      },
      {
        question: 'Trẻ em có cần học về công dân số không?',
        answer:
          'Cực kỳ cần thiết. Trẻ em ngày nay tiếp xúc với Internet từ rất sớm. Dạy cho trẻ về công dân số giúp chúng hình thành các thói quen tốt, biết cách tự bảo vệ và tương tác một cách tích cực ngay từ đầu, thay vì phải sửa chữa những sai lầm sau này.',
      },
      {
        question: 'Danh tính số (digital identity) là gì?',
        answer:
          'Danh tính số là tập hợp các thông tin và thuộc tính của bạn tồn tại trên không gian mạng. Nó bao gồm tên người dùng, hồ sơ cá nhân, các hoạt động và tương tác của bạn. Quản lý tốt danh tính số là một phần quan trọng của việc trở thành công dân số có trách nhiệm.',
      },
      {
        question: 'Làm thế nào để xây dựng một dấu chân số tích cực?',
        answer:
          'Hãy chia sẻ những thành tựu, kiến thức và nội dung có giá trị. Tham gia các cuộc thảo luận một cách văn minh, tôn trọng. Thể hiện sự chuyên nghiệp trên các nền tảng như LinkedIn. Tránh đăng tải những nội dung tiêu cực, gây tranh cãi hoặc thiếu suy nghĩ.',
      },
      {
        question: 'Quyền riêng tư trên mạng có nghĩa là gì?',
        answer:
          'Quyền riêng tư trên mạng là quyền kiểm soát thông tin cá nhân của bạn: ai có thể xem, sử dụng và chia sẻ nó. Điều này bao gồm việc cài đặt các tùy chọn riêng tư trên mạng xã hội, hiểu rõ chính sách bảo mật của các ứng dụng và cẩn trọng với những thông tin bạn chia sẻ.',
      },
      {
        question: 'Tại sao nói "trên mạng không có gì là miễn phí"?',
        answer:
          'Nhiều dịch vụ trực tuyến "miễn phí" thực chất kiếm tiền bằng cách thu thập và sử dụng dữ liệu người dùng cho mục đích quảng cáo hoặc các mục đích khác. Khi sử dụng các dịch vụ này, bạn đang "trả" bằng chính thông tin cá nhân của mình.',
      },
      {
        question: 'Sự khác biệt giữa công dân số và người dùng Internet là gì?',
        answer:
          'Một người dùng Internet đơn thuần chỉ sử dụng mạng để truy cập thông tin hoặc giải trí. Một công dân số là người chủ động tham gia vào các hoạt động xã hội, kinh tế và chính trị trên mạng, đồng thời có ý thức về quyền, nghĩa vụ và trách nhiệm của mình.',
      },
      {
        question: 'Làm thế nào để báo cáo một nội dung xấu hoặc hành vi không phù hợp?',
        answer:
          'Hầu hết các nền tảng mạng xã hội và trang web đều có chức năng "Báo cáo" (Report). Hãy sử dụng nó để thông báo cho quản trị viên về các nội dung vi phạm tiêu chuẩn cộng đồng như ngôn từ gây thù ghét, bạo lực, hoặc tin giả. Đây là một hành động có trách nhiệm của công dân số.',
      },
    ],
  },
  {
    id: 'bao-ve-danh-tinh-truc-tuyen',
    title: 'Bảo vệ Danh tính Trực tuyến',
    description:
      'Học các phương pháp và công cụ hiệu quả để bảo vệ thông tin cá nhân và danh tính của bạn khỏi các mối đe dọa trên không gian mạng.',
    duration: '60 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=u_y_h-05DRk',
    imageUrl: 'https://i.ytimg.com/vi/u_y_h-05DRk/hqdefault.jpg',
    mainContent: {
      introduction:
        'Trên internet, danh tính của bạn là một tài sản quý giá. Bài học này sẽ trang bị cho bạn những "ổ khóa" và "chìa khóa" cần thiết để bảo vệ tài sản đó, từ việc tạo mật khẩu bất khả xâm phạm đến việc nhận diện các cạm bẫy tinh vi của tội phạm mạng.',
      keyConcepts: [
        {
          title: 'Quản lý mật khẩu',
          description:
            'Mật khẩu là lớp phòng thủ đầu tiên. Học cách tạo mật khẩu mạnh (dài, phức tạp, duy nhất cho mỗi tài khoản) và sử dụng các trình quản lý mật khẩu để lưu trữ chúng một cách an toàn.',
          examples: [
            'Sử dụng một cụm từ dễ nhớ nhưng khó đoán, ví dụ: "ToiThichAnPhoHaNoi@2024!"',
            'Sử dụng các công cụ như Bitwarden, LastPass để tự động tạo và lưu trữ mật khẩu.',
          ],
        },
        {
          title: 'Xác thực hai yếu tố (2FA)',
          description:
            'Là một lớp bảo mật bổ sung, yêu cầu bạn cung cấp một yếu tố thứ hai (ngoài mật khẩu) để xác minh danh tính, thường là một mã số được gửi đến điện thoại của bạn. 2FA có thể ngăn chặn 99.9% các cuộc tấn công tự động.',
          examples: [
            'Sử dụng ứng dụng Google Authenticator hoặc Microsoft Authenticator.',
            'Nhận mã xác thực qua tin nhắn SMS hoặc email.',
          ],
        },
        {
          title: 'Nhận diện lừa đảo (Phishing)',
          description:
            'Phishing là hình thức giả mạo các tổ chức uy tín (như ngân hàng, mạng xã hội) để lừa người dùng tiết lộ thông tin nhạy cảm. Học cách nhận biết các dấu hiệu đáng ngờ như email từ địa chỉ lạ, các liên kết đáng ngờ, và các yêu cầu khẩn cấp.',
          examples: [
            'Một email từ "Faceboook" (sai một chữ "o") yêu cầu bạn đăng nhập ngay để tránh bị khóa tài khoản.',
            'Một tin nhắn SMS thông báo bạn đã trúng thưởng và yêu cầu nhấp vào một liên kết lạ.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Giao dịch ngân hàng trực tuyến',
          description: 'Bảo vệ tài khoản ngân hàng khỏi bị truy cập trái phép, đảm bảo an toàn cho tài chính cá nhân.',
        },
        {
          area: 'Tài khoản mạng xã hội',
          description:
            'Tránh bị chiếm đoạt tài khoản, bị sử dụng để lừa đảo bạn bè, người thân hoặc đăng tải nội dung xấu.',
        },
        {
          area: 'Email công việc',
          description: 'Bảo vệ các thông tin nhạy cảm của công ty, tránh làm rò rỉ dữ liệu kinh doanh quan trọng.',
        },
      ],
      conclusion:
        'An toàn trực tuyến là một quá trình liên tục, không phải là một hành động đơn lẻ. Bằng cách xây dựng các thói quen tốt như sử dụng mật khẩu mạnh, bật 2FA và luôn cảnh giác với các yêu cầu đáng ngờ, bạn có thể giảm thiểu đáng kể nguy cơ bị tấn công.',
    },
    objectives: [
      'Tạo và quản lý mật khẩu mạnh.',
      'Sử dụng xác thực hai yếu tố (2FA).',
      'Nhận biết các email lừa đảo (phishing).',
      'Tùy chỉnh cài đặt quyền riêng tư trên mạng xã hội.',
    ],
    prerequisites: ['Bài 1: Hiểu về Công dân số'],
    exercises: [
      {
        title: 'Kiểm tra độ mạnh mật khẩu',
        description:
          'Sử dụng công cụ trực tuyến để kiểm tra độ mạnh của các mật khẩu hiện tại và tạo mật khẩu mới an toàn hơn.',
        difficulty: 'Cơ bản',
        materials: ['Trình duyệt web'],
        procedure: [
          'Truy cập một trang web kiểm tra độ mạnh mật khẩu (ví dụ: password.kaspersky.com).',
          'Nhập một mật khẩu cũ của bạn (không phải mật khẩu thật) để xem kết quả.',
          'Thực hành tạo một mật khẩu mới theo các nguyên tắc đã học.',
        ],
        expectedResults: 'Học viên có thể tạo ra các mật khẩu mạnh và khó đoán.',
      },
      {
        title: 'Kích hoạt Xác thực hai yếu tố (2FA)',
        description: 'Thực hành bật tính năng 2FA cho một tài khoản trực tuyến (ví dụ: Google, Facebook).',
        difficulty: 'Trung bình',
        procedure: [
          'Chọn một tài khoản để thực hành.',
          'Đi đến phần cài đặt bảo mật của tài khoản đó.',
          'Làm theo hướng dẫn để bật 2FA, sử dụng ứng dụng xác thực hoặc số điện thoại.',
        ],
        expectedResults: 'Học viên kích hoạt thành công 2FA và hiểu được lợi ích của nó.',
      },
    ],
    realWorldApplications: [
      'Bảo vệ tài khoản ngân hàng trực tuyến.',
      'Tránh bị đánh cắp tài khoản mạng xã hội.',
      'Bảo mật email công việc và cá nhân.',
    ],
    vietnamContext: {
      title: 'An toàn mạng tại Việt Nam',
      content: [
        'Theo Cục An toàn thông tin (Bộ TT&TT), các hình thức lừa đảo trực tuyến phổ biến tại Việt Nam bao gồm giả mạo thương hiệu, chiếm đoạt tài khoản mạng xã hội, và các trang web lừa đảo đầu tư tài chính.',
        'Việc sử dụng mật khẩu yếu và giống nhau cho nhiều tài khoản là một trong những lỗ hổng bảo mật lớn nhất của người dùng Internet Việt Nam.',
        'Xác thực hai yếu tố (2FA) qua ứng dụng (Google Authenticator, Authy) được khuyến nghị thay vì qua SMS do nguy cơ tấn công chiếm đoạt SIM (SIM swapping).',
      ],
    },
    careerConnect: {
      name: 'Phạm Tiến Dũng',
      title: 'Chuyên gia An ninh mạng',
      company: 'Viettel Cyber Security',
      imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
      quote:
        'Trong thế giới số, mỗi cá nhân là một "người lính" trên mặt trận an ninh mạng. Việc trang bị kiến thức bảo mật cơ bản không chỉ bảo vệ chính bạn mà còn góp phần tạo ra một không gian mạng an toàn hơn cho cả cộng đồng.',
    },
    quizzes: [
      {
        question: 'Xác thực hai yếu tố (2FA) là gì?',
        options: [
          'Sử dụng hai mật khẩu khác nhau.',
          'Một lớp bảo mật bổ sung ngoài mật khẩu, thường là một mã OTP hoặc xác nhận qua ứng dụng.',
          'Đăng nhập từ hai thiết bị khác nhau.',
          'Quét vân tay hai lần.',
        ],
        correctAnswerIndex: 1,
        explanation:
          '2FA yêu cầu bạn cung cấp hai loại thông tin khác nhau để chứng minh danh tính, làm cho việc truy cập trái phép khó khăn hơn nhiều, ngay cả khi kẻ tấn công biết mật khẩu của bạn.',
      },
      {
        question:
          'Bạn nhận được một email từ "Ngân hàng ACB" với địa chỉ người gửi là "support@acb-bank-vn.com" yêu cầu bạn cập nhật thông tin. Bạn nên làm gì?',
        options: [
          'Nhấp ngay vào liên kết để cập nhật.',
          'Xóa email và không làm gì cả.',
          'Nghi ngờ đây là email lừa đảo (phishing), không nhấp vào liên kết, và truy cập trực tiếp trang web chính thức của ngân hàng để kiểm tra.',
          'Chuyển tiếp email cho bạn bè để cảnh báo.',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Đây là dấu hiệu của một cuộc tấn công phishing. Kẻ tấn công thường sử dụng tên miền gần giống với tên miền thật để lừa người dùng. Luôn kiểm tra kỹ địa chỉ người gửi và không bao giờ nhấp vào các liên kết đáng ngờ.',
      },
    ],
    faqs: [
      {
        question: 'Tại sao tôi không nên sử dụng cùng một mật khẩu cho nhiều tài khoản?',
        answer:
          'Bởi vì nếu một trong các tài khoản đó bị rò rỉ dữ liệu (data breach), kẻ tấn công sẽ có được mật khẩu của bạn và thử dùng nó để đăng nhập vào tất cả các tài khoản khác của bạn (như email, ngân hàng, mạng xã hội). Đây được gọi là tấn công "credential stuffing".',
      },
      {
        question: 'Trình quản lý mật khẩu (password manager) có an toàn không?',
        answer:
          'Có, các trình quản lý mật khẩu uy tín (như Bitwarden, 1Password, LastPass) rất an toàn. Chúng mã hóa kho mật khẩu của bạn bằng một "mật khẩu chủ" mà chỉ bạn biết. Việc sử dụng chúng an toàn hơn nhiều so với việc cố gắng ghi nhớ hàng chục mật khẩu yếu hoặc ghi chúng ra giấy.',
      },
      {
        question: 'Xác thực hai yếu tố (2FA) qua SMS có an toàn tuyệt đối không?',
        answer:
          '2FA qua SMS tốt hơn là không có gì, nhưng nó không phải là an toàn nhất. Kẻ tấn công có thể thực hiện một cuộc tấn công "tráo SIM" (SIM swapping) để chiếm quyền kiểm soát số điện thoại của bạn. Phương pháp an toàn hơn là sử dụng các ứng dụng xác thực (như Google Authenticator) hoặc khóa bảo mật vật lý (YubiKey).',
      },
      {
        question: 'Tôi nên làm gì nếu nghi ngờ mình đã bị lừa đảo phishing?',
        answer:
          'Hãy hành động ngay lập tức. Thay đổi mật khẩu của tài khoản bị ảnh hưởng và bất kỳ tài khoản nào khác có cùng mật khẩu. Kiểm tra các hoạt động đáng ngờ trên tài khoản (ví dụ: giao dịch lạ, bài đăng lạ). Bật xác thực hai yếu tố nếu bạn chưa làm. Báo cáo email hoặc tin nhắn lừa đảo cho nhà cung cấp dịch vụ.',
      },
      {
        question: 'Ngoài mật khẩu và 2FA, còn cách nào khác để bảo vệ tài khoản không?',
        answer:
          'Có. Hãy cẩn thận khi sử dụng Wi-Fi công cộng, vì chúng thường không an toàn. Sử dụng Mạng riêng ảo (VPN) để mã hóa kết nối của bạn. Thường xuyên cập nhật phần mềm và hệ điều hành để vá các lỗ hổng bảo mật. Đừng nhấp vào các liên kết hoặc tệp đính kèm đáng ngờ.',
      },
      {
        question: 'Khóa bảo mật vật lý (security key) là gì và nó hoạt động như thế nào?',
        answer:
          'Đó là một thiết bị nhỏ (giống USB) hoạt động như một yếu tố xác thực thứ hai. Thay vì nhập mã, bạn chỉ cần cắm nó vào và chạm vào nó. Đây được coi là hình thức 2FA an toàn nhất hiện nay vì không thể bị lừa đảo phishing từ xa.',
      },
      {
        question: 'Làm thế nào để biết một trang web có an toàn để nhập thông tin thanh toán không?',
        answer:
          'Hãy tìm biểu tượng ổ khóa và chữ "https" ở đầu địa chỉ trang web (ví dụ: https://...). Điều này cho biết kết nối giữa bạn và trang web đã được mã hóa. Tuy nhiên, đây chỉ là một yếu tố, bạn vẫn cần đảm bảo rằng trang web đó là của một đơn vị uy tín.',
      },
      {
        question: 'Tấn công "Man-in-the-Middle" (Người đứng giữa) là gì?',
        answer:
          'Đây là một kiểu tấn công mà kẻ gian bí mật xen vào giữa kết nối của bạn và một dịch vụ (ví dụ: ngân hàng). Chúng có thể đọc và thậm chí thay đổi thông tin liên lạc. Sử dụng HTTPS và VPN là những cách hiệu quả để phòng chống loại tấn công này.',
      },
      {
        question: 'Tại sao tôi nên xóa bộ nhớ cache và cookie của trình duyệt?',
        answer:
          'Cookie có thể lưu trữ thông tin đăng nhập và theo dõi hoạt động của bạn trên các trang web. Xóa chúng định kỳ giúp bảo vệ quyền riêng tư và có thể giải quyết một số vấn đề về tải trang. Tuy nhiên, nó cũng sẽ đăng xuất bạn khỏi các trang web.',
      },
      {
        question: 'Tôi có nên lưu mật khẩu trên trình duyệt (Chrome, Firefox) không?',
        answer:
          'Lưu mật khẩu trên trình duyệt rất tiện lợi nhưng kém an toàn hơn so với việc sử dụng một trình quản lý mật khẩu chuyên dụng. Nếu ai đó có quyền truy cập vào máy tính của bạn khi đã đăng nhập, họ có thể xem tất cả các mật khẩu đã lưu. Trình quản lý mật khẩu cung cấp một lớp bảo vệ bổ sung bằng mật khẩu chủ.',
      },
    ],
  },
  {
    id: 'nhan-dien-tin-gia',
    title: 'Tư duy Phản biện & Nhận diện Tin giả',
    description:
      'Phát triển kỹ năng tư duy phản biện để đánh giá thông tin, nhận diện tin giả, và chống lại sự lan truyền của thông tin sai lệch.',
    duration: '75 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=A2eeiJu_2a0',
    imageUrl: 'https://i.ytimg.com/vi/A2eeiJu_2a0/hqdefault.jpg',
    mainContent: {
      introduction:
        'Trong một thế giới ngập tràn thông tin, khả năng phân biệt thật - giả là một siêu năng lực. Bài học này sẽ trang bị cho bạn bộ công cụ của một "thám tử thông tin", giúp bạn phát triển tư duy phản biện để không chỉ tự bảo vệ mình khỏi tin giả mà còn trở thành một nguồn tin cậy trong cộng đồng.',
      keyConcepts: [
        {
          title: 'Các loại thông tin sai lệch',
          description:
            'Phân biệt giữa Misinformation (thông tin sai nhưng người chia sẻ không có ác ý), Disinformation (thông tin sai được cố tình tạo ra và lan truyền để gây hại), và Malinformation (thông tin đúng nhưng được sử dụng để gây hại).',
          examples: [
            'Misinformation: Một người chia sẻ một bài thuốc dân gian chữa ung thư vì tin rằng nó hiệu quả.',
            'Disinformation: Một tài khoản ảo tạo ra tin đồn một công ty sắp phá sản để thao túng giá cổ phiếu.',
            'Malinformation: Tiết lộ email cá nhân của một người để quấy rối họ.',
          ],
        },
        {
          title: 'Kỹ thuật kiểm chứng thông tin (Fact-Checking)',
          description:
            'Học các phương pháp thực tế để kiểm tra tính xác thực của thông tin, bao gồm kiểm tra nguồn tin, tìm kiếm ngược hình ảnh, và đối chiếu với các nguồn tin chính thống.',
          examples: [
            'Khi thấy một hình ảnh gây sốc, sử dụng Google Image Search để tìm xem nó đã xuất hiện ở đâu và khi nào.',
            'Trước khi chia sẻ một tin tức, tìm kiếm chủ đề đó trên các trang báo lớn (VnExpress, Tuổi Trẻ, VTV) để xem họ có đưa tin không.',
          ],
        },
        {
          title: 'Thiên kiến xác nhận (Confirmation Bias)',
          description:
            'Là xu hướng tâm lý của con người chỉ tìm kiếm, diễn giải và ghi nhớ những thông tin xác nhận cho niềm tin sẵn có của mình. Nhận thức được thiên kiến này là bước đầu tiên để vượt qua nó.',
          examples: [
            'Nếu bạn không thích một chính trị gia, bạn sẽ có xu hướng chỉ đọc và tin những tin tức tiêu cực về người đó.',
            'Một người tin vào thuyết âm mưu sẽ chỉ tìm kiếm các bằng chứng ủng hộ cho thuyết đó.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Tiêu thụ tin tức hàng ngày',
          description:
            'Đọc tin tức một cách chủ động và có hoài nghi, không dễ dàng tin vào các tiêu đề giật gân hoặc các nguồn tin không rõ ràng.',
        },
        {
          area: 'Tranh luận trên mạng xã hội',
          description:
            'Sử dụng các lập luận dựa trên bằng chứng và dữ liệu đáng tin cậy thay vì cảm tính, góp phần tạo ra các cuộc thảo luận có giá trị.',
        },
        {
          area: 'Nghiên cứu và học tập',
          description:
            'Sử dụng các nguồn tài liệu học thuật đáng tin cậy, biết cách trích dẫn và đánh giá chất lượng của các nguồn thông tin khác nhau.',
        },
      ],
      conclusion:
        'Tư duy phản biện không phải là hoài nghi mọi thứ, mà là đặt câu hỏi đúng lúc, đúng chỗ. Bằng cách rèn luyện kỹ năng này, bạn sẽ trở thành một người tiêu thụ và chia sẻ thông tin thông thái, góp phần làm cho không gian mạng trở nên trong sạch hơn.',
    },
    objectives: [
      'Hiểu các loại thông tin sai lệch (misinformation, disinformation).',
      'Nắm vững các kỹ thuật kiểm tra thông tin (fact-checking).',
      'Phân tích các dấu hiệu của một tin giả.',
      'Trở thành người chia sẻ thông tin có trách nhiệm.',
    ],
    prerequisites: ['Bài 1: Hiểu về Công dân số'],
    exercises: [
      {
        title: 'Phân tích một bài báo',
        description: 'Áp dụng các kỹ thuật đã học để phân tích một bài báo có dấu hiệu đáng ngờ.',
        difficulty: 'Trung bình',
        procedure: [
          'Đọc một bài báo được cung cấp.',
          'Kiểm tra tác giả, nguồn tin, và ngày đăng.',
          'Tìm kiếm các nguồn tin khác để đối chứng thông tin.',
          'Đưa ra kết luận về độ tin cậy của bài báo.',
        ],
        expectedResults: 'Học viên có thể xác định các yếu tố đáng ngờ và đánh giá độ tin cậy của một nguồn tin.',
      },
    ],
    realWorldApplications: [
      'Đọc tin tức hàng ngày một cách có ý thức.',
      'Tham gia tranh luận trên mạng xã hội một cách văn minh.',
      'Đưa ra quyết định dựa trên thông tin đáng tin cậy.',
    ],
    vietnamContext: {
      title: 'Vấn nạn tin giả tại Việt Nam',
      content: [
        'Trung tâm Xử lý tin giả Việt Nam (VAFC) thuộc Bộ TT&TT là cơ quan chuyên trách tiếp nhận và xử lý các thông tin giả mạo trên mạng.',
        'Các tin giả tại Việt Nam thường tập trung vào các chủ đề nhạy cảm như sức khỏe (phương pháp chữa bệnh "thần kỳ"), chính sách của nhà nước, và đời tư của người nổi tiếng.',
        'Kỹ năng "đọc chậm", kiểm tra nguồn tin, và đối chiếu thông tin từ các báo chí chính thống là rất quan trọng để không trở thành nạn nhân hay người lan truyền tin giả.',
      ],
    },
    careerConnect: {
      name: 'Lê Thị Thu Hà',
      title: 'Phóng viên, Trung tâm Tin tức VTV24',
      company: 'Đài Truyền hình Việt Nam (VTV)',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      quote:
        'Nghề báo dạy tôi phải hoài nghi với mọi thông tin. Trước khi đưa một tin tức đến khán giả, chúng tôi phải thực hiện rất nhiều bước kiểm chứng. Tôi tin rằng mỗi công dân cũng nên là một "biên tập viên" cho chính những gì mình đọc và chia sẻ.',
    },
    quizzes: [
      {
        question: 'Đâu là một dấu hiệu đáng ngờ của một tin tức giả mạo?',
        options: [
          'Bài viết được nhiều người chia sẻ.',
          'Tiêu đề giật gân, gây cảm xúc mạnh (sốc, phẫn nộ).',
          'Bài viết có trích dẫn từ chuyên gia.',
          'Bài viết được đăng trên một trang web có giao diện chuyên nghiệp.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Tin giả thường sử dụng các tiêu đề giật gân để thu hút sự chú ý và kích động cảm xúc, khiến người đọc dễ dàng tin và chia sẻ mà không cần kiểm chứng.',
      },
      {
        question: 'Khi bạn muốn kiểm chứng một thông tin, bạn nên làm gì?',
        options: [
          'Hỏi ý kiến bạn bè trên Facebook.',
          'Tin vào bình luận đầu tiên bạn đọc được.',
          'Tìm kiếm thông tin đó trên các trang báo chí lớn, uy tín và các nguồn tin chính thống khác để đối chiếu.',
          'Nếu thông tin có vẻ hợp lý thì tin ngay.',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Đối chiếu thông tin từ nhiều nguồn đáng tin cậy là phương pháp kiểm tra thông tin (fact-checking) cơ bản và hiệu quả nhất để xác định tính xác thực của một tin tức.',
      },
    ],
    faqs: [
      {
        question: 'Tại sao tin giả lại lan truyền nhanh như vậy?',
        answer:
          'Tin giả thường được thiết kế để khai thác cảm xúc của con người như sự sợ hãi, tức giận hoặc tò mò. Các thuật toán mạng xã hội cũng có xu hướng ưu tiên hiển thị những nội dung gây tương tác mạnh, và tin giả thường làm được điều này rất tốt, tạo ra một vòng lặp lan truyền.',
      },
      {
        question: 'Làm thế nào để phân biệt giữa một trang tin tức thật và một trang tin giả?',
        answer:
          'Hãy kiểm tra phần "Giới thiệu" hoặc "Liên hệ" của trang web. Các trang tin thật thường có thông tin rõ ràng về ban biên tập, địa chỉ và sứ mệnh. Các trang tin giả thường có thông tin này rất sơ sài hoặc không có. Ngoài ra, hãy chú ý đến chất lượng của bài viết, lỗi chính tả, và các nguồn tin được trích dẫn.',
      },
      {
        question: 'Thiên kiến xác nhận (Confirmation Bias) ảnh hưởng đến việc chúng ta tiếp nhận tin tức như thế nào?',
        answer:
          'Nó giống như việc đeo một cặp kính màu. Nếu bạn đã có sẵn một quan điểm, não của bạn sẽ tự động tìm kiếm và ưu tiên những thông tin phù hợp với quan điểm đó và bỏ qua những thông tin trái chiều. Điều này khiến chúng ta rất dễ bị tin giả "dẫn dắt" nếu nó phù hợp với những gì chúng ta muốn tin.',
      },
      {
        question: 'Tôi nên làm gì khi một người bạn hoặc người thân chia sẻ tin giả?',
        answer:
          'Hãy tiếp cận một cách nhẹ nhàng và không phán xét. Thay vì nói "Tin này giả đấy", bạn có thể nói "Tôi thấy thông tin này có vẻ đáng ngờ, tôi đã tìm thấy một bài báo từ một nguồn tin cậy nói khác. Bạn xem thử xem?". Gửi cho họ một liên kết từ một trang kiểm chứng thông tin uy tín cũng là một cách hay.',
      },
      {
        question: 'Deepfake là gì và làm thế nào để nhận biết nó?',
        answer:
          'Deepfake là công nghệ sử dụng AI để tạo ra các video hoặc âm thanh giả mạo cực kỳ chân thực. Để nhận biết, hãy chú ý đến các chi tiết nhỏ như chớp mắt không tự nhiên, chuyển động môi không khớp với âm thanh, hoặc các biến dạng kỳ lạ ở rìa khuôn mặt.',
      },
      {
        question: 'Kiểm tra nguồn tin (source checking) nghĩa là gì?',
        answer:
          'Đó là hành động tìm hiểu xem thông tin đến từ đâu. Nguồn tin có đáng tin cậy không? Tác giả có chuyên môn về lĩnh vực này không? Bài viết có trích dẫn các nguồn khác không? Đặt những câu hỏi này giúp bạn đánh giá độ tin cậy của thông tin.',
      },
      {
        question: '"Bong bóng bộ lọc" (Filter Bubble) là gì?',
        answer:
          '"Bong bóng bộ lọc" là trạng thái mà các thuật toán trên mạng xã hội chỉ hiển thị cho bạn những nội dung mà chúng nghĩ rằng bạn sẽ thích, dựa trên lịch sử hoạt động của bạn. Điều này có thể khiến bạn bị cô lập khỏi các quan điểm và thông tin trái chiều, làm gia tăng thiên kiến xác nhận.',
      },
      {
        question: 'Làm thế nào để thoát khỏi "bong bóng bộ lọc"?',
        answer:
          'Hãy chủ động tìm kiếm và theo dõi các nguồn tin có quan điểm khác với bạn. Sử dụng các chế độ duyệt web ẩn danh để tìm kiếm thông tin một cách khách quan hơn. Thường xuyên xóa lịch sử xem và tìm kiếm để "đặt lại" các đề xuất của thuật toán.',
      },
      {
        question: 'Clickbait là gì?',
        answer:
          'Clickbait là việc sử dụng các tiêu đề giật gân, gây tò mò hoặc phóng đại quá mức để lôi kéo người dùng nhấp vào một liên kết. Nội dung bên trong thường không đáp ứng được sự kỳ vọng của tiêu đề. Đây là một dấu hiệu của các nguồn tin kém chất lượng.',
      },
      {
        question: 'Tại sao việc kiểm chứng thông tin trước khi chia sẻ lại quan trọng?',
        answer:
          'Mỗi khi bạn chia sẻ một thông tin, bạn đang dùng uy tín của mình để bảo chứng cho nó. Chia sẻ tin giả không chỉ gây hại cho người khác mà còn làm giảm sự tin cậy của chính bạn. Hành động kiểm chứng trước khi chia sẻ là một biểu hiện của sự tôn trọng đối với cộng đồng và chính bản thân bạn.',
      },
    ],
  },
  {
    id: 'giao-tiep-va-ung-xu-tren-mang',
    title: 'Giao tiếp và Ứng xử trên mạng (Netiquette)',
    description:
      'Học các quy tắc và chuẩn mực để giao tiếp một cách tôn trọng, hiệu quả và tích cực trong môi trường trực tuyến.',
    duration: '45 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=T_hkl7o6fbA',
    imageUrl: 'https://i.ytimg.com/vi/T_hkl7o6fbA/hqdefault.jpg',
    mainContent: {
      introduction:
        'Giao tiếp trên mạng cũng giống như giao tiếp ngoài đời thực, cần có những quy tắc ứng xử để duy trì sự tôn trọng và văn minh. Bài học này sẽ giới thiệu về "Netiquette" - những quy tắc vàng giúp bạn để lại ấn tượng tốt và xây dựng các mối quan hệ tích cực trong thế giới số.',
      keyConcepts: [
        {
          title: 'Quy tắc vàng: Hãy nhớ đến con người',
          description:
            'Đằng sau mỗi màn hình là một con người có cảm xúc. Trước khi viết hay gửi bất cứ điều gì, hãy tự hỏi: "Liệu mình có nói điều này với họ nếu đang mặt đối mặt không?". Điều này giúp ngăn chặn các hành vi thiếu suy nghĩ.',
          examples: [
            'Thay vì viết "Ý tưởng của bạn thật tệ", hãy viết "Tôi có một góc nhìn khác về vấn đề này...".',
            'Tránh sử dụng ngôn từ mỉa mai hoặc châm biếm vì chúng dễ bị hiểu lầm khi thiếu đi ngữ cảnh phi ngôn ngữ.',
          ],
        },
        {
          title: 'Tôn trọng thời gian và băng thông của người khác',
          description:
            'Thông tin trên mạng rất nhiều. Hãy đảm bảo rằng những gì bạn chia sẻ hoặc gửi đi là phù hợp, súc tích và có giá trị đối với người nhận. Đừng gửi các email không liên quan hoặc spam người khác.',
          examples: [
            'Viết tiêu đề email rõ ràng, đi thẳng vào vấn đề.',
            'Trong các nhóm chat, tránh gửi các tin nhắn không liên quan đến chủ đề chung.',
          ],
        },
        {
          title: 'Tha thứ cho lỗi lầm của người khác',
          description:
            'Không phải ai cũng là chuyên gia về "netiquette". Khi ai đó mắc lỗi, hãy đối xử với họ một cách khoan dung. Nếu bạn muốn chỉ ra lỗi sai, hãy làm điều đó một cách riêng tư và lịch sự.',
          examples: [
            'Nếu một người mới tham gia diễn đàn và đặt câu hỏi không đúng chỗ, hãy nhẹ nhàng hướng dẫn họ thay vì công kích.',
            'Bỏ qua các lỗi chính tả nhỏ nhặt trong các cuộc thảo luận không trang trọng.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Giao tiếp công sở',
          description:
            'Viết email, tin nhắn chuyên nghiệp, tham gia các cuộc họp trực tuyến một cách hiệu quả, và xây dựng mối quan hệ tốt với đồng nghiệp.',
        },
        {
          area: 'Tham gia cộng đồng trực tuyến',
          description:
            'Trở thành một thành viên tích cực và được tôn trọng trong các diễn đàn, nhóm mạng xã hội, hoặc cộng đồng game.',
        },
        {
          area: 'Xây dựng thương hiệu cá nhân',
          description:
            'Cách bạn ứng xử trên mạng là một phần quan trọng của thương hiệu cá nhân. Sự chuyên nghiệp và tích cực sẽ thu hút các cơ hội tốt.',
        },
      ],
      conclusion:
        'Netiquette không phải là các quy tắc cứng nhắc, mà là sự thể hiện của sự tôn trọng và đồng cảm trong môi trường số. Bằng cách thực hành những nguyên tắc này, bạn đang góp phần tạo ra một internet tử tế và hữu ích hơn.',
    },
    objectives: [
      'Hiểu khái niệm "Netiquette".',
      'Nhận biết và phòng tránh các hành vi tiêu cực như bắt nạt trực tuyến (cyberbullying).',
      'Viết email và bình luận một cách chuyên nghiệp, lịch sự.',
      'Xây dựng một môi trường trực tuyến tích cực.',
    ],
    prerequisites: ['Không yêu cầu kiến thức nền tảng.'],
    exercises: [
      {
        title: 'Tình huống ứng xử',
        description: 'Phân tích các tình huống giao tiếp trực tuyến và chọn cách ứng xử phù hợp.',
        difficulty: 'Cơ bản',
        procedure: [
          'Đọc các tình huống cho trước (ví dụ: nhận được một bình luận tiêu cực).',
          'Viết ra cách bạn sẽ phản hồi trong mỗi tình huống.',
          'Thảo luận về các cách phản hồi khác nhau và hậu quả của chúng.',
        ],
        expectedResults: 'Học viên biết cách phản ứng một cách xây dựng và bình tĩnh trước các tương tác tiêu cực.',
      },
    ],
    realWorldApplications: [
      'Giao tiếp với đồng nghiệp qua email, chat.',
      'Tham gia các cộng đồng, diễn đàn trực tuyến.',
      'Để lại đánh giá, bình luận về sản phẩm/dịch vụ.',
    ],
    vietnamContext: {
      title: 'Văn hóa ứng xử trên mạng của người Việt',
      content: [
        'Bộ Quy tắc ứng xử trên mạng xã hội do Bộ TT&TT ban hành (Quyết định số 874/QĐ-BTTTT) khuyến khích các hành vi "Tôn trọng, Trách nhiệm, An toàn, Lành mạnh".',
        'Vấn nạn "toxic" (độc hại) trong các cộng đồng game và mạng xã hội tại Việt Nam là một thách thức, đòi hỏi sự chung tay của cả nhà cung cấp dịch vụ và người dùng để xây dựng văn hóa ứng xử tích cực.',
        'Trong môi trường công sở, việc sử dụng email và các công cụ chat (Zalo, Teams) một cách chuyên nghiệp, rõ ràng và tôn trọng là một kỹ năng mềm quan trọng được các nhà tuyển dụng đánh giá cao.',
      ],
    },
    careerConnect: {
      name: 'Phan Văn Minh',
      title: 'Trưởng phòng Nhân sự',
      company: 'Tiki',
      imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop',
      quote:
        'Chúng tôi nhận được hàng trăm email xin việc mỗi ngày. Một email được viết chuyên nghiệp, không sai chính tả, và thể hiện sự tôn trọng luôn tạo được ấn tượng tốt ban đầu. Kỹ năng giao tiếp trực tuyến của bạn nói lên rất nhiều về con người bạn.',
    },
    quizzes: [
      {
        question: 'Hành vi nào sau đây là một ví dụ về "bắt nạt trực tuyến" (cyberbullying)?',
        options: [
          'Không đồng ý với quan điểm của người khác một cách lịch sự.',
          'Liên tục gửi tin nhắn đe dọa, chế giễu hoặc lan truyền tin đồn sai sự thật về một người.',
          'Báo cáo một bình luận vi phạm tiêu chuẩn cộng đồng.',
          'Chặn một người dùng làm phiền bạn.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Bắt nạt trực tuyến là hành vi có chủ đích, lặp đi lặp lại nhằm mục đích làm tổn thương, đe dọa hoặc làm bẽ mặt người khác trên không gian mạng.',
      },
      {
        question: 'Khi viết một email công việc, bạn nên tránh điều gì?',
        options: [
          'Sử dụng tiêu đề rõ ràng, súc tích.',
          'Viết hoa toàn bộ nội dung email.',
          'Kiểm tra lại lỗi chính tả trước khi gửi.',
          'Nêu rõ yêu cầu hoặc mục đích của email.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'VIẾT HOA TOÀN BỘ trong giao tiếp trực tuyến thường được coi là hành động "hét lớn", gây khó chịu và thiếu chuyên nghiệp. Hãy sử dụng định dạng văn bản một cách hợp lý.',
      },
    ],
    faqs: [
      {
        question: 'Netiquette là gì và tại sao nó lại quan trọng?',
        answer:
          'Netiquette là sự kết hợp của "Net" (mạng) và "etiquette" (phép lịch sự). Đó là bộ quy tắc ứng xử không chính thức khi giao tiếp trên mạng. Nó quan trọng vì giúp ngăn chặn hiểu lầm, xây dựng các cuộc thảo luận tích cực, và duy trì một môi trường trực tuyến văn minh, tôn trọng.',
      },
      {
        question: 'Làm thế nào để đối phó với một người có hành vi "toxic" hoặc bắt nạt tôi trên mạng?',
        answer:
          'Quy tắc vàng là "Đừng nuôi troll" (Don\'t feed the trolls). Đừng tranh cãi tay đôi với họ. Hãy sử dụng các công cụ có sẵn: báo cáo (report) hành vi của họ cho quản trị viên nền tảng, chặn (block) họ để không thấy nội dung của họ nữa, và nếu cần, hãy lưu lại bằng chứng và tìm kiếm sự giúp đỡ từ người lớn hoặc cơ quan chức năng.',
      },
      {
        question: 'Tại sao việc sử dụng biểu tượng cảm xúc (emoji) lại quan trọng trong giao tiếp trực tuyến?',
        answer:
          'Giao tiếp qua văn bản thiếu đi các yếu tố phi ngôn ngữ như nét mặt, giọng điệu. Emoji giúp bổ sung các sắc thái cảm xúc này, làm cho cuộc trò chuyện trở nên thân thiện hơn và giúp tránh các hiểu lầm không đáng có. Tuy nhiên, hãy sử dụng chúng một cách phù hợp với ngữ cảnh (ví dụ: hạn chế trong email công việc trang trọng).',
      },
      {
        question: 'Tôi có nên kết bạn với sếp và đồng nghiệp trên Facebook không?',
        answer:
          'Điều này phụ thuộc vào văn hóa công ty và mối quan hệ của bạn. Một quy tắc chung an toàn là sử dụng LinkedIn để kết nối chuyên nghiệp và giữ Facebook cho các mối quan hệ cá nhân hơn. Nếu bạn quyết định kết bạn, hãy đảm bảo rằng các cài đặt quyền riêng tư của bạn được thiết lập phù hợp để phân tách giữa cuộc sống cá nhân và công việc.',
      },
      {
        question: 'Spam là gì và làm thế nào để xử lý nó?',
        answer:
          'Spam là các tin nhắn hoặc email không mong muốn, thường mang tính quảng cáo hoặc lừa đảo, được gửi hàng loạt. Đừng bao giờ trả lời hoặc nhấp vào liên kết trong tin nhắn spam. Hãy sử dụng chức năng "Đánh dấu là Spam" (Mark as Spam) của nhà cung cấp email để giúp bộ lọc của họ hoạt động tốt hơn.',
      },
      {
        question: 'Sự khác biệt giữa CC và BCC trong email là gì?',
        answer:
          'CC (Carbon Copy) có nghĩa là những người trong danh sách này sẽ nhận được một bản sao của email và mọi người đều thấy địa chỉ của nhau. BCC (Blind Carbon Copy) cũng gửi một bản sao, nhưng không ai trong danh sách người nhận (kể cả trong To và CC) có thể thấy địa chỉ của những người trong danh sách BCC. Hãy sử dụng BCC để bảo vệ quyền riêng tư khi gửi email cho một nhóm lớn người không quen biết nhau.',
      },
      {
        question: 'Thế nào là một bình luận mang tính xây dựng?',
        answer:
          'Một bình luận mang tính xây dựng tập trung vào ý tưởng, không phải vào cá nhân. Nó chỉ ra những điểm tốt, sau đó đưa ra góp ý để cải thiện một cách lịch sự và cụ thể. Ví dụ: "Bài viết của bạn có nhiều ý tưởng hay. Để rõ ràng hơn, bạn có thể thử thêm một vài ví dụ thực tế ở phần X không?".',
      },
      {
        question: '"Trolling" trên mạng là gì?',
        answer:
          '"Trolling" là hành vi cố tình đăng những bình luận gây kích động, lạc đề hoặc xúc phạm để khơi mào một cuộc tranh cãi và làm phiền người khác cho vui. Cách tốt nhất để đối phó với troll là lờ họ đi.',
      },
      {
        question: 'Tôi nên làm gì trước khi đăng ảnh của người khác lên mạng?',
        answer:
          'Hãy luôn hỏi xin phép họ trước. Đăng ảnh của ai đó mà không có sự đồng ý của họ là một sự vi phạm quyền riêng tư. Điều này đặc biệt quan trọng đối với hình ảnh của trẻ em.',
      },
      {
        question: 'Tại sao việc có một hồ sơ LinkedIn chuyên nghiệp lại quan trọng?',
        answer:
          'LinkedIn là mạng xã hội chuyên nghiệp lớn nhất. Một hồ sơ đầy đủ và chuyên nghiệp hoạt động như một CV trực tuyến của bạn, giúp nhà tuyển dụng tìm thấy bạn, thể hiện kỹ năng và kinh nghiệm của bạn, và giúp bạn xây dựng mạng lưới quan hệ trong ngành.',
      },
    ],
  },
];

const transformedLessons: BaseLessonData[] = lessons.map((lesson) => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    mainContent,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    vietnamContext,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    careerConnect,
    ...baseLesson
  } = lesson;
  return {
    ...baseLesson,
    realWorldApplications: lesson.realWorldApplications || [],
  };
});

export const digitalCitizenshipOnlineSafetyModuleData: ModuleData = {
  id: K2Module.DigitalCitizenshipOnlineSafety,
  title: 'Công dân số & An toàn trực tuyến',
  subtitle: 'Hành trang thiết yếu cho thế hệ tương lai',
  description:
    'Trong thế giới kết nối ngày nay, việc trở thành một công dân số có trách nhiệm là vô cùng quan trọng. Khóa học này cung cấp cho học sinh những kiến thức và kỹ năng để tương tác an toàn, có đạo đức và hiệu quả trên môi trường Internet.',
  category: 'Kỹ năng sống',
  icon: '🛡️',
  color: 'from-teal-500 to-cyan-600',
  level: 'Cơ bản',
  duration: '8-10 giờ',
  features: [
    'Bảo vệ danh tính và thông tin cá nhân.',
    'Nhận diện và phòng chống tin giả, lừa đảo.',
    'Xây dựng dấu chân số tích cực.',
    'Giao tiếp và ứng xử văn minh trên mạng.',
  ],
  prerequisites: [
    'Kỹ năng sử dụng máy tính và Internet cơ bản.',
    'Có tài khoản mạng xã hội (Facebook, TikTok, etc.) là một lợi thế.',
    'Mong muốn trở thành người dùng Internet thông thái.',
  ],
  objectives: [
    'Hiểu về vai trò và trách nhiệm của một công dân số.',
    'Biết cách bảo vệ danh tính và thông tin cá nhân.',
    'Phát triển kỹ năng tư duy phản biện để nhận diện tin giả.',
    'Giao tiếp và ứng xử văn minh trên không gian mạng.',
  ],
  careerOutcomes: [
    'Chuyên viên truyền thông xã hội',
    'Nhà quản lý cộng đồng trực tuyến',
    'Chuyên viên tư vấn an toàn mạng cho trường học',
    'Người có ảnh hưởng (Influencer) có trách nhiệm',
  ],
  industryApplications: [
    {
      name: 'Giáo dục',
      description: 'Tích hợp các chương trình giảng dạy về công dân số và an toàn trực tuyến trong trường học.',
    },
    {
      name: 'Truyền thông & Marketing',
      description:
        'Xây dựng các chiến dịch truyền thông có trách nhiệm và quản lý cộng đồng trực tuyến một cách tích cực.',
    },
    {
      name: 'Nhân sự',
      description:
        'Đào tạo nhân viên về các quy tắc ứng xử chuyên nghiệp trên không gian mạng và bảo mật thông tin nội bộ.',
    },
    {
      name: 'Phát triển sản phẩm công nghệ',
      description:
        'Thiết kế các nền tảng và ứng dụng an toàn, thân thiện với người dùng và thúc đẩy các hành vi tích cực.',
    },
  ],
  marketDemand: {
    averageSalary: 'N/A (Kỹ năng nền tảng)',
    jobGrowth: 'Cao',
    hireDemand: 'Rất cao (cho các vị trí liên quan)',
  },
  relatedModules: [K2Module.CriticalThinking, K2Module.ContentCreator, K2Module.Cybersecurity],
  lessons: transformedLessons,
};
