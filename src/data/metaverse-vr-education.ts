import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface MetaverseVRLessonType extends BaseLessonData {
  technologyLevel?: string;
  tools?: string[];
}

export const MetaverseVREducationLessons: MetaverseVRLessonType[] = [
  {
    id: 'metaverse-fundamentals',
    title: 'Cơ Bản Về Metaverse và Thực Tế Ảo',
    description: 'Tìm hiểu về Metaverse, công nghệ VR/AR và cách chúng đang thay đổi giáo dục và cuộc sống.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=YJg02ivYzSs',
    imageUrl: '/images/metaverse-fundamentals.jpg',
    objectives: [
      'Hiểu được khái niệm Metaverse và Web3',
      'Phân biệt VR, AR, MR và các ứng dụng',
      'Sử dụng cơ bản tai nghe VR và điều hướng',
      'Tạo avatar và tương tác trong môi trường VR',
      'Nhận biết cơ hội nghề nghiệp trong lĩnh vực này',
    ],
    prerequisites: [
      'Kiến thức cơ bản về internet và công nghệ',
      'Hiểu biết về mạng xã hội và trò chơi',
      'Không cần kinh nghiệm VR trước đó',
    ],
    exercises: [
      {
        title: 'Trải Nghiệm VR Đầu Tiên',
        description: 'Sử dụng tai nghe VR để khám phá môi trường ảo đầu tiên của bạn.',
        difficulty: 'Cơ bản',
        materials: ['Tai nghe VR (hoặc smartphone + VR cardboard)', 'Ứng dụng VRChat hoặc Mozilla Hubs'],
        procedure: [
          'Tải và cài đặt ứng dụng VR trên thiết bị',
          'Thiết lập tai nghe VR và hiệu chỉnh cơ bản',
          'Tạo tài khoản và avatar cá nhân',
          'Tham gia một phòng ảo công cộng',
          'Thực hành di chuyển và tương tác cơ bản',
          'Tham gia một lớp học ảo hoặc chuyến tham quan bảo tàng',
        ],
        expectedResults: 'Có thể điều hướng và tương tác cơ bản trong môi trường VR.',
        solution: 'Hướng dẫn chi tiết cài đặt và khắc phục các sự cố thường gặp.',
      },
      {
        title: 'Tạo Không Gian Học Tập Ảo',
        description: 'Thiết kế một không gian học tập ảo đơn giản.',
        difficulty: 'Trung bình',
        materials: ['Mozilla Hubs', 'Blender (tùy chọn)', 'Tài sản mẫu'],
        procedure: [
          'Đăng ký tài khoản Mozilla Hubs',
          'Sử dụng các công cụ có sẵn để tạo phòng',
          'Thêm các đối tượng 3D và tài liệu giáo dục',
          'Thiết lập ánh sáng và môi trường',
          'Mời bạn bè để kiểm tra tính năng cộng tác',
          'Tùy chỉnh với các yếu tố thương hiệu',
        ],
        expectedResults: 'Tạo được một lớp học ảo có thể chia sẻ và sử dụng.',
        solution: 'Mẫu và các phương pháp hay nhất cho thiết kế không gian học tập ảo.',
      },
    ],
    realWorldApplications: [
      'Lớp học ảo cho việc học từ xa hiệu quả hơn',
      'Đào tạo y khoa với mô phỏng VR không rủi ro',
      'Trực quan hóa và đánh giá kiến trúc và kỹ thuật',
      'Tái tạo lịch sử cho giáo dục lịch sử',
      'Học ngôn ngữ với môi trường nhập vai',
      'Đào tạo kỹ năng mềm và thực hành thuyết trình',
      'Các chuyến đi thực tế ảo đến những nơi không thể đến được',
    ],
    caseStudies: [
      {
        title: 'Chương trình Đào tạo VR của VinGroup',
        organization: 'Tập đoàn Vingroup - Việt Nam',
        problem: 'Đào tạo nhân viên bán lẻ và dịch vụ khách hàng hiệu quả.',
        solution: 'Phát triển các mô-đun đào tạo VR cho các tình huống tương tác với khách hàng.',
        impact: 'Giảm 40% thời gian đào tạo, tăng 60% tỷ lệ ghi nhớ.',
        innovations: [
          'Các kịch bản khách hàng thực tế',
          'Hỗ trợ đa ngôn ngữ',
          'Phân tích hiệu suất',
          'Các yếu tố Gamification',
        ],
      },
    ],
    resources: [
      {
        title: 'Meta for Education - Nguồn tài nguyên học tập VR',
        url: 'https://about.meta.com/realitylabs/education/',
        type: 'Documentation',
      },
      {
        title: 'Hướng dẫn cho người sáng tạo Mozilla Hubs',
        url: 'https://hubs.mozilla.com/docs/creators-guide.html',
        type: 'Tutorial',
      },
    ],
    vietnamContext: {
      title: 'Metaverse và VR tại Việt Nam: Tiềm năng và ứng dụng',
      content: [
        'Các công ty công nghệ lớn của Việt Nam như FPT, VNG và Viettel đang tích cực nghiên cứu và đầu tư vào Metaverse.',
        'Trong giáo dục, các trường đại học như Đại học FPT đã tiên phong trong việc xây dựng campus ảo để sinh viên có thể tham gia lớp học và sự kiện từ xa.',
        'Lĩnh vực bất động sản cũng ứng dụng VR/AR mạnh mẽ, cho phép khách hàng "tham quan" các dự án căn hộ ngay cả trước khi chúng được xây dựng, điển hình là các dự án của Vinhomes.',
      ],
    },
    careerConnect: {
      name: 'Anh Nguyễn Thành Nam',
      title: 'Giám đốc sản phẩm VR/AR',
      company: 'Một công ty công nghệ tại Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-thanh-nam',
      quote:
        'Chúng tôi không chỉ xây dựng game. Chúng tôi đang tạo ra những thế giới mới cho giáo dục, y tế và công nghiệp. Thách thức lớn nhất là làm cho công nghệ này dễ tiếp cận và thực sự hữu ích cho người dùng Việt Nam, giải quyết các bài toán thực tế của họ.',
    },
    quizzes: [
      {
        question: 'VR là viết tắt của từ gì?',
        options: ['Virtual Reality', 'Visual Reality', 'Video Reality', 'Vivid Reality'],
        correctAnswerIndex: 0,
        explanation:
          'VR là viết tắt của Virtual Reality, hay Thực tế ảo, là công nghệ tạo ra một môi trường mô phỏng bằng máy tính.',
      },
      {
        question: 'Ứng dụng nào của VR đang được áp dụng mạnh mẽ trong lĩnh vực bất động sản tại Việt Nam?',
        options: ['Chơi game VR', 'Xem phim VR', 'Tham quan nhà mẫu ảo', 'Họp hành trong VR'],
        correctAnswerIndex: 2,
        explanation:
          'Nhiều công ty bất động sản lớn tại Việt Nam đã sử dụng VR để tạo ra các tour tham quan nhà mẫu ảo, giúp khách hàng trải nghiệm không gian sống một cách chân thực từ xa.',
      },
    ],
  },
  {
    id: 'vr-content-creation',
    title: 'Tạo Nội Dung VR Giáo Dục',
    description: 'Học cách thiết kế và phát triển các trải nghiệm ảo và nội dung giáo dục cho các nền tảng VR.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=1cQbMP3I5Sk',
    imageUrl: '/images/vr-content-creation.jpg',
    objectives: [
      'Thiết kế UX/UI cho môi trường VR',
      'Sử dụng Unity hoặc A-Frame để tạo ứng dụng VR',
      'Tối ưu hóa hiệu suất cho các trải nghiệm VR',
      'Tạo các yếu tố tương tác và gamification',
      'Triển khai nội dung VR lên các nền tảng khác nhau',
    ],
    prerequisites: [
      'Hoàn thành bài "Cơ Bản Về Metaverse và Thực Tế Ảo"',
      'Kiến thức cơ bản về thiết kế 3D hoặc phát triển game',
      'Hiểu biết về các nguyên tắc trải nghiệm người dùng',
    ],
    exercises: [
      {
        title: 'Thiết Kế Bảo Tàng Ảo',
        description: 'Tạo một bảo tàng ảo trưng bày lịch sử Việt Nam.',
        difficulty: 'Trung bình',
        materials: ['Unity 3D', 'Tài sản 3D miễn phí', 'Hình ảnh và video lịch sử', 'Tai nghe VR để kiểm tra'],
        procedure: [
          'Lập kế hoạch bố cục bảo tàng và hành trình người dùng',
          'Nhập và thiết lập các mô hình 3D trong Unity',
          'Tạo các khu trưng bày tương tác với văn bản, âm thanh, video',
          'Thực hiện hệ thống dịch chuyển và điều hướng',
          'Thêm các yếu tố môi trường (ánh sáng, âm thanh)',
          'Xây dựng và kiểm tra trên tai nghe VR',
          'Tối ưu hóa hiệu suất và sửa lỗi',
          'Triển khai lên WebXR hoặc các cửa hàng ứng dụng',
        ],
        expectedResults: 'Một bảo tàng ảo hoàn chỉnh có thể chia sẻ và trải nghiệm.',
        solution: 'Hướng dẫn Unity từng bước với các tài sản và mẫu được tạo sẵn.',
      },
    ],
    realWorldApplications: [
      'Các cơ sở giáo dục tạo ra trải nghiệm học tập nhập vai',
      'Các chương trình đào tạo của công ty với các kịch bản rủi ro cao',
      'Mô phỏng y tế cho các thủ thuật y khoa',
      'Thiết kế hợp tác trong kỹ thuật và kiến trúc',
      'Bảo tồn di sản văn hóa và du lịch',
    ],
    caseStudies: [
      {
        title: 'Dự án VR của Bảo tàng Lịch sử Quốc gia Việt Nam',
        organization: 'Bảo tàng Lịch sử Quốc gia Việt Nam',
        problem: 'Không gian vật lý hạn chế và khả năng tiếp cận cho khách quốc tế.',
        solution: 'Các chuyến tham quan VR toàn diện về các hiện vật và khu trưng bày lịch sử Việt Nam.',
        impact: 'Tăng 300% lượng khách tham quan ảo, nâng cao kết quả giáo dục.',
        innovations: [
          'Thuyết minh đa ngôn ngữ',
          'Xem hiện vật 360 độ',
          'Thông tin phủ lớp AR',
          'Dòng thời gian tương tác',
        ],
      },
    ],
    resources: [
      {
        title: 'Bộ công cụ sáng tạo VR của Unity Learn',
        url: 'https://learn.unity.com/project/vr-creator-kit',
        type: 'Tutorial',
      },
      {
        title: 'Trường học A-Frame - Phát triển WebVR',
        url: 'https://aframe.io/aframe-school/',
        type: 'Documentation',
      },
    ],
    vietnamContext: {
      title: 'Sáng tạo nội dung VR "Made in Vietnam"',
      content: [
        'Cộng đồng các nhà phát triển game và lập trình viên Unity tại Việt Nam rất năng động, tạo ra một nguồn nhân lực tiềm năng cho việc phát triển nội dung VR.',
        'Các studio như Holomia, Hamsa... đang tiên phong trong việc tạo ra các sản phẩm VR/AR cho thị trường trong nước và quốc tế, từ game, quảng cáo đến các giải pháp doanh nghiệp.',
        'Các cuộc thi và sự kiện về VR/AR ngày càng được tổ chức nhiều hơn, thúc đẩy sự sáng tạo và tìm kiếm tài năng trong lĩnh vực này tại Việt Nam.',
      ],
    },
    careerConnect: {
      name: 'Chị Trần Hoàng Yến',
      title: 'Nghệ sĩ 3D & Nhà phát triển VR',
      company: 'Một studio game tại Đà Nẵng',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-hoang-yen',
      quote:
        'Việc tạo ra một thế giới ảo không chỉ là kỹ thuật, đó là nghệ thuật. Tôi có thể tái hiện lại một ngôi đền cổ của Việt Nam hoặc tạo ra một phòng thí nghiệm khoa học viễn tưởng. VR cho phép chúng tôi kể những câu chuyện mà phim ảnh hay sách vở không thể, và tôi tự hào khi được làm điều đó tại Việt Nam.',
    },
    quizzes: [
      {
        question: 'Unity 3D là gì?',
        options: [
          'Một loại tai nghe VR',
          'Một nền tảng để phát triển game và các ứng dụng 3D/VR',
          'Một phần mềm để vẽ 3D',
          'Một mạng xã hội VR',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Unity 3D là một trong những game engine phổ biến nhất thế giới, được sử dụng rộng rãi để phát triển các ứng dụng và game cho nhiều nền tảng, bao gồm cả VR và AR.',
      },
      {
        question: 'WebXR là gì?',
        options: [
          'Một trang web về VR',
          'Một tiêu chuẩn cho phép chạy các trải nghiệm VR/AR trực tiếp trên trình duyệt web',
          'Một loại tai nghe VR mới',
          'Một ngôn ngữ lập trình cho VR',
        ],
        correctAnswerIndex: 1,
        explanation:
          'WebXR là một API cho phép các nhà phát triển tạo ra các trải nghiệm VR và AR có thể truy cập trực tiếp từ một trình duyệt web tương thích mà không cần cài đặt ứng dụng riêng.',
      },
    ],
  },
  {
    id: 'ar-mobile-applications',
    title: 'Ứng Dụng AR Trên Di Động',
    description:
      'Phát triển các ứng dụng Thực tế tăng cường cho giáo dục sử dụng điện thoại thông minh và máy tính bảng.',
    duration: '100 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=WzfDo2Wpxks',
    imageUrl: '/images/ar-mobile-applications.jpg',
    objectives: [
      'Hiểu về công nghệ AR và các nguyên tắc cơ bản của thị giác máy tính',
      'Phát triển ứng dụng AR sử dụng ARCore/ARKit',
      'Tạo nội dung 3D tương tác với AR dựa trên điểm đánh dấu và không cần điểm đánh dấu',
      'Thực hiện nhận dạng hình ảnh và theo dõi đối tượng',
      'Thiết kế giao diện người dùng AR trực quan',
    ],
    prerequisites: [
      'Kiến thức cơ bản về phát triển ứng dụng di động (iOS hoặc Android)',
      'Hiểu biết về đồ họa 3D và Unity (ưu tiên)',
      'Kinh nghiệm với nhiếp ảnh trên điện thoại thông minh và thiết kế cơ bản',
    ],
    exercises: [
      {
        title: 'Ứng dụng Dòng thời gian Lịch sử AR',
        description: 'Tạo một ứng dụng AR hiển thị các sự kiện lịch sử Việt Nam tại các địa điểm cụ thể.',
        difficulty: 'Trung bình',
        materials: ['Unity với AR Foundation', 'Mô hình và hình ảnh lịch sử 3D', 'Điện thoại thông minh để kiểm tra'],
        procedure: [
          'Thiết lập dự án Unity với gói AR Foundation',
          'Cấu hình cài đặt ARCore/ARKit cho các thiết bị mục tiêu',
          'Tạo các trình kích hoạt AR dựa trên vị trí',
          'Nhập và thiết lập nội dung lịch sử 3D',
          'Thực hiện giao diện người dùng để hiển thị thông tin',
          'Thêm tường thuật âm thanh và các yếu tố tương tác',
          'Kiểm tra tại các địa điểm trong thế giới thực',
          'Tối ưu hóa hiệu suất cho các thiết bị khác nhau',
        ],
        expectedResults: 'Ứng dụng AR hoạt động tại ít nhất 3 địa điểm lịch sử.',
        solution: 'Dự án Unity hoàn chỉnh với tích hợp dịch vụ vị trí.',
      },
    ],
    realWorldApplications: [
      'Sách giáo khoa và tài liệu giáo dục tương tác',
      'Các khu trưng bày bảo tàng với thông tin nâng cao',
      'Đào tạo công nghiệp với hướng dẫn phủ lớp lên thiết bị',
      'Giáo dục y tế với trực quan hóa giải phẫu',
      'Trực quan hóa kiến trúc tại các công trường xây dựng',
    ],
    caseStudies: [
      {
        title: 'Hướng dẫn AR Nhà thờ Đức Bà Sài Gòn',
        organization: 'Sở Du lịch TP.HCM',
        problem: 'Khách du lịch thiếu bối cảnh lịch sử khi tham quan các địa danh.',
        solution: 'Ứng dụng di động AR hiển thị lịch sử và chi tiết kiến trúc của nhà thờ.',
        impact: 'Nâng cao trải nghiệm của khách tham quan, tăng cường sự tham gia của khách du lịch.',
        innovations: [
          'Hỗ trợ đa ngôn ngữ',
          'Phủ lớp tái tạo lịch sử',
          'Dòng thời gian tương tác',
          'Tính năng chia sẻ xã hội',
        ],
      },
    ],
    resources: [
      {
        title: 'Hướng dẫn phát triển Google ARCore',
        url: 'https://developers.google.com/ar',
        type: 'Documentation',
      },
      {
        title: 'Tài liệu Apple ARKit',
        url: 'https://developer.apple.com/arkit/',
        type: 'Documentation',
      },
    ],
    vietnamContext: {
      title: 'AR và Di sản văn hóa Việt Nam',
      content: [
        'AR là một công cụ mạnh mẽ để "sống lại" các di sản văn hóa. Nhiều dự án đang được phát triển để tái hiện các di tích lịch sử như Hoàng thành Thăng Long hay các trận đánh lịch sử qua AR.',
        'Các sản phẩm tiêu dùng cũng bắt đầu ứng dụng AR. Ví dụ, một số bao bì sản phẩm khi được quét bằng điện thoại sẽ hiển thị các video hoặc mô hình 3D quảng cáo.',
        'Trong giáo dục, sách giáo khoa AR đang được thử nghiệm, giúp học sinh có thể xem mô hình 3D của hệ mặt trời hay cấu trúc của một tế bào ngay trên trang sách.',
      ],
    },
    careerConnect: {
      name: 'Bạn Vũ Anh Đức',
      title: 'Lập trình viên AR',
      company: 'Một startup về công nghệ giáo dục',
      imageUrl: 'https://i.pravatar.cc/150?u=vu-anh-duc',
      quote:
        'Công việc của tôi là mang những thứ trong sách vở ra thế giới thực. Khi một đứa trẻ có thể thấy một con khủng long 3D đi lại trong phòng khách của mình chỉ bằng chiếc điện thoại, bài học về lịch sử tự nhiên sẽ trở nên khó quên hơn rất nhiều. Đó là sức mạnh của AR.',
    },
    quizzes: [
      {
        question: 'AR là viết tắt của từ gì?',
        options: ['Augmented Reality', 'Advanced Reality', 'Audio Reality', 'Actual Reality'],
        correctAnswerIndex: 0,
        explanation:
          'AR là viết tắt của Augmented Reality, hay Thực tế tăng cường, là công nghệ phủ lớp thông tin ảo (hình ảnh, âm thanh, dữ liệu) lên thế giới thực.',
      },
      {
        question: 'Công nghệ AR nào sau đây được phát triển bởi Apple cho các thiết bị iOS?',
        options: ['ARCore', 'ARKit', 'Vuforia', 'Spark AR'],
        correctAnswerIndex: 1,
        explanation:
          'ARKit là bộ công cụ phát triển thực tế tăng cường của Apple dành riêng cho các thiết bị như iPhone và iPad.',
      },
    ],
  },
  {
    id: 'social-vr-collaboration',
    title: 'Hợp Tác Xã Hội Trong VR',
    description: 'Tạo và quản lý các không gian ảo hợp tác cho giáo dục, làm việc nhóm và học tập xã hội.',
    duration: '80 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=k_y8YYcGaZQ',
    imageUrl: '/images/social-vr-collaboration.jpg',
    objectives: [
      'Thiết kế các không gian họp ảo hiệu quả',
      'Tạo điều kiện cho các trải nghiệm học tập hợp tác trong VR',
      'Quản lý các nhóm làm việc ảo và hợp tác từ xa',
      'Tạo ra các môi trường ảo toàn diện và dễ tiếp cận',
      'Hiểu được động lực xã hội trong không gian ảo',
    ],
    prerequisites: [
      'Kinh nghiệm với các nền tảng VR và điều hướng cơ bản',
      'Hiểu biết về các công cụ hợp tác trực tuyến',
      'Kiến thức cơ bản về tâm lý học giáo dục',
    ],
    exercises: [
      {
        title: 'Nền tảng Nhóm học ảo',
        description: 'Tạo một không gian ảo dành riêng cho các nhóm học của sinh viên.',
        difficulty: 'Cơ bản',
        materials: ['Tài khoản Mozilla Hubs', 'Tài liệu học tập (PDF, video)', 'Tích hợp công cụ hợp tác'],
        procedure: [
          'Thiết kế bố cục phòng học tối ưu cho việc học nhóm',
          'Thiết lập bảng trắng và các công cụ thuyết trình chung',
          'Tích hợp các nguồn tài liệu học tập bên ngoài',
          'Tạo hệ thống lên lịch các buổi học',
          'Thực hiện theo dõi tiến độ và trách nhiệm',
          'Thêm các phòng nhỏ cho công việc cá nhân',
          'Kiểm tra với các nhóm học thực tế',
          'Thu thập phản hồi và lặp lại thiết kế',
        ],
        expectedResults: 'Không gian học tập ảo chức năng hỗ trợ 6-8 sinh viên.',
        solution: 'Hướng dẫn cấu hình Mozilla Hubs với các phương pháp hay nhất trong giáo dục.',
      },
    ],
    realWorldApplications: [
      'Cung cấp giáo dục từ xa cho các trường học ở nông thôn Việt Nam',
      'Các dự án hợp tác quốc tế cho góc nhìn toàn cầu',
      'Đào tạo doanh nghiệp với các nhóm làm việc phân tán',
      'Tư vấn y tế và chẩn đoán hợp tác',
      'Các hội thảo tư duy thiết kế với các nhóm đa chức năng',
    ],
    caseStudies: [
      {
        title: 'Chương trình Trao đổi Sinh viên TP.HCM - Thung lũng Silicon',
        organization: 'Sở Giáo dục TP.HCM & Đại học Stanford',
        problem: 'Ngân sách hạn chế cho các chương trình trao đổi sinh viên thực tế.',
        solution: 'Các cuộc họp VR hàng tháng giữa sinh viên Việt Nam và Mỹ.',
        impact: 'Giảm 95% chi phí, tăng 400% số người tham gia.',
        innovations: [
          'Dịch thuật thời gian thực',
          'Chia sẻ hiện vật văn hóa',
          'Không gian dự án chung',
          'Chương trình cố vấn',
        ],
      },
    ],
    resources: [
      {
        title: 'Hướng dẫn cho nhà giáo dục Mozilla Hubs',
        url: 'https://hubs.mozilla.com/docs/educators-guide.html',
        type: 'Documentation',
      },
      {
        title: 'Hướng dẫn tạo thế giới VRChat',
        url: 'https://docs.vrchat.com/docs/creating-your-first-world',
        type: 'Tutorial',
      },
    ],
    vietnamContext: {
      title: 'Làm việc và học tập từ xa qua VR tại Việt Nam',
      content: [
        'Đại dịch COVID-19 đã thúc đẩy mạnh mẽ nhu cầu làm việc và học tập từ xa tại Việt Nam, mở đường cho các giải pháp như họp hành trong VR.',
        'Các không gian làm việc chung (co-working space) ảo đang được thử nghiệm, cho phép các công ty có nhân viên ở nhiều tỉnh thành có thể "gặp nhau" trong một văn phòng ảo.',
        'Các sự kiện và hội thảo cũng bắt đầu được tổ chức trên các nền tảng VR, thu hút người tham dự từ khắp nơi mà không cần di chuyển.',
      ],
    },
    careerConnect: {
      name: 'Chị Lê Thị Bích Trâm',
      title: 'Chuyên gia Tổ chức Sự kiện ảo',
      company: 'Một công ty sự kiện',
      imageUrl: 'https://i.pravatar.cc/150?u=le-thi-bich-tram',
      quote:
        'Tổ chức một sự kiện trong VR không chỉ là dựng một sân khấu 3D. Đó là việc tạo ra sự kết nối, sự tương tác mà các buổi họp online thông thường không có được. Tôi giúp các công ty tạo ra những trải nghiệm đáng nhớ, từ một buổi họp toàn công ty cho đến một triển lãm sản phẩm quốc tế, tất cả đều diễn ra trong không gian ảo.',
    },
    quizzes: [
      {
        question:
          'Nền tảng nào sau đây cho phép người dùng tự tạo các không gian họp VR của riêng mình một cách dễ dàng?',
        options: ['Zoom', 'Microsoft Teams', 'Mozilla Hubs', 'Skype'],
        correctAnswerIndex: 2,
        explanation:
          'Mozilla Hubs là một nền tảng mã nguồn mở cho phép người dùng dễ dàng tạo, chia sẻ và tùy chỉnh các không gian VR riêng tư có thể truy cập từ trình duyệt web.',
      },
      {
        question: 'Lợi ích chính của việc hợp tác trong VR so với họp video truyền thống là gì?',
        options: [
          'Chất lượng video tốt hơn',
          'Cảm giác "hiện diện" và tương tác không gian thực hơn',
          'Không cần internet',
          'Luôn luôn miễn phí',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Lợi thế lớn nhất của VR là tạo ra cảm giác "hiện diện" (sense of presence), nơi người tham gia cảm thấy như họ đang thực sự ở cùng một không gian với nhau, giúp tăng cường sự tương tác và kết nối.',
      },
    ],
  },
  {
    id: 'metaverse-business-economics',
    title: 'Kinh Tế Metaverse & Cơ Hội Kinh Doanh',
    description: 'Khám phá nền kinh tế ảo, NFT, bất động sản ảo và các cơ hội nghề nghiệp trong Metaverse.',
    duration: '90 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    imageUrl: '/images/metaverse-business-economics.jpg',
    objectives: [
      'Hiểu các nguyên tắc kinh tế ảo và tokenomics',
      'Khám phá các cơ hội nghề nghiệp trong ngành công nghiệp Metaverse',
      'Tìm hiểu về NFT, tài sản ảo và quyền sở hữu kỹ thuật số',
      'Hiểu các chiến lược đầu tư bất động sản ảo',
      'Phát triển các mô hình kinh doanh cho các dự án Metaverse',
    ],
    prerequisites: [
      'Hiểu biết cơ bản về tiền điện tử và blockchain',
      'Quan tâm đến kinh doanh và khởi nghiệp',
      'Đã hoàn thành các khóa học cơ bản về Metaverse',
    ],
    exercises: [
      {
        title: 'Phát triển Kế hoạch Kinh doanh Ảo',
        description: 'Tạo một kế hoạch kinh doanh cho một dịch vụ hoặc sản phẩm ảo.',
        difficulty: 'Trung bình',
        materials: ['Công cụ nghiên cứu thị trường', 'Mẫu kế hoạch kinh doanh', 'Truy cập nền tảng Metaverse'],
        procedure: [
          'Nghiên cứu các xu hướng kinh tế ảo hiện tại',
          'Xác định một thị trường ngách hoặc nhu cầu chưa được đáp ứng',
          'Phát triển một khái niệm sản phẩm/dịch vụ độc đáo',
          'Xây dựng một mô hình doanh thu (ví dụ: bán tài sản ảo, đăng ký)',
          'Phân tích đối thủ cạnh tranh và chiến lược marketing',
          'Tạo một lộ trình phát triển và dự báo tài chính',
          'Trình bày kế hoạch kinh doanh cho các nhà đầu tư tiềm năng',
        ],
        expectedResults: 'Một kế hoạch kinh doanh toàn diện cho một dự án Metaverse.',
        solution: 'Hướng dẫn từng bước với các ví dụ và nghiên cứu điển hình.',
      },
    ],
    realWorldApplications: [
      'Các thương hiệu tạo ra các cửa hàng và trải nghiệm ảo',
      'Các nghệ sĩ bán các tác phẩm nghệ thuật kỹ thuật số dưới dạng NFT',
      'Các nhà phát triển tạo ra các trò chơi và trải nghiệm kiếm tiền (play-to-earn)',
      'Các nhà đầu tư mua và phát triển bất động sản ảo',
      'Các nhà giáo dục tạo ra các trường học và khóa học ảo',
    ],
    caseStudies: [
      {
        title: 'Thành công của Axie Infinity',
        organization: 'Sky Mavis (Việt Nam)',
        problem: 'Game thủ không thực sự sở hữu các vật phẩm trong game mà họ đã bỏ công sức cày cuốc.',
        solution:
          'Tạo ra một trò chơi dựa trên blockchain nơi người chơi sở hữu các nhân vật (Axie) dưới dạng NFT và có thể kiếm được tiền điện tử.',
        impact:
          'Tạo ra một cuộc cách mạng trong ngành game với mô hình "Play-to-Earn", đạt giá trị vốn hóa hàng tỷ đô la và thu hút hàng triệu người chơi trên toàn thế giới.',
        innovations: [
          'Quyền sở hữu tài sản kỹ thuật số thực sự',
          'Nền kinh tế do người chơi điều hành',
          'Cơ chế học bổng (scholarship)',
        ],
      },
    ],
    resources: [
      {
        title: 'OpenSea - Chợ NFT lớn nhất',
        url: 'https://opensea.io/',
        type: 'Tool',
      },
      {
        title: 'The Sandbox - Nền tảng Metaverse',
        url: 'https://www.sandbox.game/en/',
        type: 'Tool',
      },
    ],
    vietnamContext: {
      title: 'Việt Nam - Cường quốc GameFi và Kinh tế số',
      content: [
        'Việt Nam đã nổi lên như một trung tâm toàn cầu về GameFi (Game + Finance) và phát triển blockchain, với các dự án đình đám như Axie Infinity.',
        'Nhiều bạn trẻ Việt Nam đã tham gia vào nền kinh tế Metaverse, không chỉ với tư cách là người chơi mà còn là nhà phát triển, nghệ sĩ NFT và nhà quản lý cộng đồng.',
        'Các quỹ đầu tư mạo hiểm trong và ngoài nước đang tích cực tìm kiếm và đầu tư vào các startup blockchain và Metaverse của Việt Nam, cho thấy tiềm năng to lớn của thị trường này.',
      ],
    },
    careerConnect: {
      name: 'Anh Nguyễn Trung Tín',
      title: 'Nhà sáng lập & CEO một dự án GameFi',
      company: 'Một startup Blockchain',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-trung-tin',
      quote:
        'Metaverse không phải là tương lai xa vời, nó đang diễn ra ngay bây giờ. Chúng tôi đang xây dựng những nền kinh tế nơi mọi người có thể làm việc, giải trí và kiếm sống hoàn toàn trong không gian số. Việt Nam có đủ tài năng và sự nhanh nhạy để trở thành người dẫn đầu trong cuộc cách mạng này.',
    },
    quizzes: [
      {
        question: 'NFT là viết tắt của từ gì?',
        options: ['Non-Fungible Token', 'New Financial Technology', 'National Finance Token', 'Network Fungible Token'],
        correctAnswerIndex: 0,
        explanation:
          'NFT (Non-Fungible Token) là một loại tài sản số độc nhất trên blockchain, đại diện cho quyền sở hữu một vật phẩm cụ thể, không thể thay thế được.',
      },
      {
        question: 'Dự án nào của Việt Nam đã tạo ra tiếng vang lớn trên toàn cầu trong lĩnh vực GameFi?',
        options: ['Zalo', 'Flappy Bird', 'Axie Infinity', 'VNG'],
        correctAnswerIndex: 2,
        explanation:
          'Axie Infinity, được phát triển bởi studio Sky Mavis của Việt Nam, là một trong những dự án GameFi (Play-to-Earn) thành công nhất, khởi đầu cho một xu hướng toàn cầu.',
      },
    ],
  },
];
