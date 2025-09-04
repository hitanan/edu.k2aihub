import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface DigitalCitizenshipLesson extends BaseLessonData {
  mainContent: {
    introduction: string;
    keyConcepts: Array<{
      title: string;
      description: string;
      examples: string[];
    }>;
    practicalApplications: Array<{
      area: string;
      description: string;
    }>;
    conclusion: string;
  };
}

export const DigitalCitizenshipLessons: DigitalCitizenshipLesson[] = [
  {
    id: 'hieu-ve-cong-dan-so',
    title: 'Hiểu về Công dân số',
    description:
      'Khám phá khái niệm công dân số và tầm quan trọng của việc trở thành một công dân số có trách nhiệm trong kỷ nguyên số.',
    duration: '45 phút',
    difficulty: 'Cơ bản',
    videoUrl: https://www.youtube.com/watch?v=uJ065EhtUG4,
    imageUrl: 'https://i.ytimg.com/vi/vd2dtkMINIw/hqdefault.jpg',
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
  },
];
