import { BaseLessonData } from '@/types/lesson-base';

export const threeDPrintingLessons: BaseLessonData[] = [
  {
    id: 'tong-quan-in-3d',
    title: 'Tổng quan về Công nghệ In 3D',
    description:
      'Khám phá lịch sử, các công nghệ in 3D phổ biến và tiềm năng ứng dụng vô hạn của nó trong đời sống và sản xuất.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=g0m3jR4H_yM',
    imageUrl: 'https://i.ytimg.com/vi/g0m3jR4H_yM/hqdefault.jpg',
    objectives: [
      'Hiểu được in 3D là gì và nguyên lý hoạt động cơ bản.',
      'Phân biệt các công nghệ in 3D chính (FDM, SLA, SLS).',
      'Nhận biết các loại vật liệu in 3D phổ biến.',
      'Khám phá các ứng dụng đột phá của in 3D trong nhiều lĩnh vực.',
    ],
    prerequisites: ['Tư duy logic và ham học hỏi.'],
    exercises: [
      {
        title: 'Nghiên cứu ứng dụng',
        description: 'Tìm kiếm và trình bày về một ứng dụng thực tế của công nghệ in 3D mà bạn thấy ấn tượng nhất.',
        difficulty: 'Cơ bản',
        procedure: [
          'Sử dụng công cụ tìm kiếm để tìm các bài viết, video về ứng dụng in 3D.',
          'Chọn một lĩnh vực (y tế, thời trang, kiến trúc, v.v.).',
          'Tóm tắt lại dự án hoặc sản phẩm đó.',
          'Phân tích tại sao in 3D là công nghệ phù hợp cho ứng dụng đó.',
        ],
        expectedResults: 'Một bài trình bày ngắn gọn về một ứng dụng cụ thể của in 3D.',
      },
    ],
    realWorldApplications: [
      'Sản xuất đồ dùng cá nhân hóa.',
      'Tạo mẫu nhanh trong ngành công nghiệp.',
      'Giáo dục và nghiên cứu.',
    ],
    vietnamContext: {
      title: 'Bối cảnh ứng dụng tại Việt Nam',
      content: [
        'Các startup Việt Nam đang ngày càng ứng dụng in 3D để tạo mẫu sản phẩm nhanh chóng với chi phí thấp.',
        'Lĩnh vực y tế tại các thành phố lớn như TP.HCM và Hà Nội đã bắt đầu sử dụng in 3D để tạo ra các mô hình giải phẫu và bộ phận giả tùy chỉnh.',
        'Cộng đồng makers và các không gian sáng chế (makerspace) ở Việt Nam đang phát triển, thúc đẩy sự sáng tạo và phổ biến của công nghệ in 3D.',
      ],
    },
    careerConnect: {
      name: 'Trần Minh Long',
      title: 'Kỹ sư In 3D & Nhà sáng lập Meetech.vn',
      company: 'Meetech.vn',
      imageUrl: 'https://i.pravatar.cc/150?u=tranminhlong',
      quote:
        'In 3D không chỉ là công nghệ, đó là cầu nối biến ý tưởng thành hiện thực. Tại Việt Nam, tiềm năng của nó chỉ mới bắt đầu được khai phá.',
    },
    quizzes: [
      {
        question: 'Công nghệ in 3D nào phổ biến nhất cho người dùng cá nhân và các mô hình giáo dục?',
        options: [
          'SLA (Stereolithography)',
          'SLS (Selective Laser Sintering)',
          'FDM (Fused Deposition Modeling)',
          'DLP (Digital Light Processing)',
        ],
        correctAnswerIndex: 2,
        explanation:
          'FDM là công nghệ phổ biến nhất do chi phí thấp, dễ sử dụng và vật liệu đa dạng, rất phù hợp cho người mới bắt đầu và mục đích giáo dục.',
      },
    ],
  },
  {
    id: 'thiet-ke-3d-co-ban-voi-tinkercad',
    title: 'Thiết kế 3D Cơ bản với Tinkercad',
    description:
      'Bước chân đầu tiên vào thế giới thiết kế 3D với Tinkercad, một công cụ trực tuyến, miễn phí và cực kỳ dễ sử dụng.',
    duration: '120 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=k_8aK249k3g',
    imageUrl: 'https://i.ytimg.com/vi/k_8aK249k3g/hqdefault.jpg',
    objectives: [
      'Làm quen với giao diện và các công cụ cơ bản của Tinkercad.',
      'Thao tác với các khối hình học cơ bản (kéo, thả, xoay, thay đổi kích thước).',
      'Sử dụng các công cụ Group, Hole để tạo ra các hình dạng phức tạp.',
      'Thiết kế được một vật thể 3D đơn giản (ví dụ: móc khóa).',
      'Xuất file STL để chuẩn bị cho việc in.',
    ],
    prerequisites: ["Hoàn thành bài 'Tổng quan về In 3D'"],
    exercises: [
      {
        title: 'Thiết kế Móc khóa Cá nhân',
        description: 'Tự tay thiết kế một chiếc móc khóa có tên hoặc biểu tượng của riêng bạn.',
        difficulty: 'Cơ bản',
        materials: ['Máy tính có kết nối internet', 'Tài khoản Tinkercad (miễn phí)'],
        procedure: [
          'Tạo một khối đế cho móc khóa.',
          'Sử dụng công cụ Text để thêm tên của bạn.',
          'Tạo một lỗ tròn để xỏ chìa khóa.',
          'Kết hợp (Group) tất cả các đối tượng lại.',
          'Xuất file dưới định dạng .STL.',
        ],
        expectedResults: 'Một file .STL sẵn sàng để in 3D.',
      },
    ],
    realWorldApplications: [
      'Tạo đồ trang trí, đồ chơi đơn giản.',
      'Thiết kế các vật dụng văn phòng phẩm cá nhân hóa.',
      'Làm mô hình cho các dự án học tập.',
    ],
    vietnamContext: {
      title: 'Tinkercad và Giáo dục STEM tại Việt Nam',
      content: [
        'Nhiều trường học và trung tâm STEM tại Việt Nam đang sử dụng Tinkercad như một công cụ nhập môn để dạy học sinh về tư duy không gian và thiết kế 3D.',
        'Các cuộc thi robotics và sáng tạo trẻ thường có các phần thi thiết kế nhanh, nơi Tinkercad là một lợi thế lớn.',
        'Học sinh Việt Nam có thể sử dụng Tinkercad để tạo ra các mô hình di tích lịch sử, các vật dụng văn hóa cho các dự án học tập.',
      ],
    },
    careerConnect: {
      name: 'Lê Thị Bích Hạnh',
      title: 'Giáo viên STEM & Điều phối viên CLB Sáng tạo',
      company: 'Trường Quốc tế ABC',
      imageUrl: 'https://i.pravatar.cc/150?u=lebichhanh',
      quote:
        'Với Tinkercad, rào cản kỹ thuật gần như bằng không. Tôi đã thấy học sinh lớp 5 tạo ra những mô hình 3D đáng kinh ngạc chỉ sau vài buổi học.',
    },
    quizzes: [
      {
        question: 'Công cụ nào trong Tinkercad dùng để kết hợp nhiều khối hình lại thành một đối tượng duy nhất?',
        options: ['Align', 'Group', 'Flip', 'Mirror'],
        correctAnswerIndex: 1,
        explanation:
          'Công cụ "Group" (Phím tắt: Ctrl + G) được sử dụng để hợp nhất các đối tượng được chọn thành một hình dạng duy nhất.',
      },
    ],
  },
  {
    id: 'phan-mem-cat-lop-slicer',
    title: 'Làm quen với Phần mềm Cắt lớp (Slicer)',
    description:
      'Tìm hiểu vai trò then chốt của phần mềm Slicer trong việc chuyển đổi mô hình 3D thành các chỉ lệnh (G-code) mà máy in có thể hiểu được.',
    duration: '90 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=zAI-H_Dx23c',
    imageUrl: 'https://i.ytimg.com/vi/zAI-H_Dx23c/hqdefault.jpg',
    objectives: [
      'Hiểu vai trò của Slicer trong quy trình in 3D.',
      'Làm quen với giao diện của một phần mềm Slicer phổ biến (ví dụ: Cura, PrusaSlicer).',
      'Nắm vững các thông số in cơ bản: Layer Height, Infill, Print Speed, Temperature.',
      'Học cách tạo và tùy chỉnh cấu trúc hỗ trợ (Supports) và bám dính (Adhesion).',
    ],
    prerequisites: ["Hoàn thành bài 'Thiết kế 3D với Tinkercad'"],
    exercises: [
      {
        title: 'Chuẩn bị file in cho Móc khóa',
        description: 'Sử dụng Slicer để chuẩn bị file G-code cho chiếc móc khóa bạn đã thiết kế.',
        difficulty: 'Trung bình',
        materials: ['File .STL từ bài trước', 'Phần mềm Cura hoặc PrusaSlicer'],
        procedure: [
          'Nhập file .STL vào Slicer.',
          'Chọn cấu hình máy in và vật liệu phù hợp.',
          'Điều chỉnh các thông số in cơ bản.',
          'Xem trước (Preview) quá trình in từng lớp.',
          'Lưu file G-code ra thẻ nhớ.',
        ],
        expectedResults: 'Một file G-code đã được tối ưu hóa để in.',
      },
    ],
    realWorldApplications: [
      'Tối ưu hóa chất lượng và thời gian in cho mọi sản phẩm.',
      'Giải quyết các vấn đề thường gặp khi in.',
      'In các mô hình phức tạp cần cấu trúc hỗ trợ.',
    ],
    vietnamContext: {
      title: 'Tối ưu hóa in 3D cho điều kiện Việt Nam',
      content: [
        'Khí hậu nóng ẩm ở Việt Nam có thể ảnh hưởng đến vật liệu in (filament). Việc hiểu rõ các thông số trong Slicer giúp điều chỉnh nhiệt độ, tốc độ quạt phù hợp.',
        'Các dịch vụ in 3D tại Việt Nam thường tính giá dựa trên thời gian in và lượng vật liệu. Tối ưu Slicer giúp giảm chi phí đáng kể.',
        'Việc tùy chỉnh Supports trong Slicer rất quan trọng khi in các mô hình kiến trúc cổ của Việt Nam vốn có nhiều chi tiết phức tạp.',
      ],
    },
    careerConnect: {
      name: 'Phạm Hoàng Việt',
      title: 'Chủ xưởng in 3D',
      company: '3D Print Factory Vietnam',
      imageUrl: 'https://i.pravatar.cc/150?u=phamhoangviet',
      quote:
        'Một mô hình 3D tốt chỉ là một nửa câu chuyện. Nửa còn lại nằm ở kỹ năng slicing. Một người slicing giỏi có thể cứu một bản in tưởng chừng thất bại.',
    },
    quizzes: [
      {
        question: 'Thông số "Infill" trong phần mềm Slicer quyết định điều gì?',
        options: [
          'Độ mịn của bề mặt ngoài',
          'Độ đặc của phần ruột bên trong vật thể',
          'Tốc độ di chuyển của đầu in',
          'Nhiệt độ của bàn in',
        ],
        correctAnswerIndex: 1,
        explanation:
          '"Infill" (lấp đầy) là thông số xác định mật độ của cấu trúc lưới bên trong vật thể, ảnh hưởng trực tiếp đến độ cứng và lượng vật liệu tiêu thụ.',
      },
    ],
  },
  {
    id: 'van-hanh-may-in-3d-fdm',
    title: 'Vận hành Máy in 3D FDM',
    description:
      'Hướng dẫn chi tiết các bước để vận hành một máy in 3D FDM, từ khâu chuẩn bị đến khi bắt đầu in sản phẩm đầu tiên.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=T-5u_3s5EwQ',
    imageUrl: 'https://i.ytimg.com/vi/T-5u_3s5EwQ/hqdefault.jpg',
    objectives: [
      'Hiểu cấu tạo các bộ phận chính của máy in 3D FDM.',
      'Thực hiện cân bàn in (bed leveling) một cách chính xác.',
      'Nạp và tháo vật liệu in (filament) đúng cách.',
      'Bắt đầu một quá trình in từ file G-code.',
      'Theo dõi và nhận biết các dấu hiệu của một bản in tốt.',
    ],
    prerequisites: ["Hoàn thành bài 'Phần mềm Cắt lớp'"],
    exercises: [
      {
        title: 'In sản phẩm đầu tay',
        description: 'Thực hành in chiếc móc khóa đã được chuẩn bị ở bài trước.',
        difficulty: 'Trung bình',
        materials: ['Máy in 3D FDM', 'Cuộn nhựa PLA', 'Thẻ nhớ chứa file G-code'],
        procedure: [
          'Kiểm tra máy in, đảm bảo bàn in sạch.',
          'Thực hiện cân lại bàn in.',
          'Nạp nhựa PLA vào máy.',
          'Cắm thẻ nhớ và chọn file để in.',
          'Quan sát lớp in đầu tiên và toàn bộ quá trình in.',
        ],
        expectedResults: 'Một chiếc móc khóa được in 3D hoàn chỉnh.',
      },
    ],
    realWorldApplications: [
      'Tất cả các hoạt động sản xuất bằng công nghệ FDM.',
      'Bảo trì và sửa chữa máy in 3D cơ bản.',
      'Tự tạo ra các sản phẩm vật lý tại nhà.',
    ],
    vietnamContext: {
      title: 'Vận hành máy in 3D tại nhà ở Việt Nam',
      content: [
        'Nguồn điện ở Việt Nam đôi khi không ổn định. Việc sử dụng một bộ lưu điện (UPS) cho máy in 3D là một giải pháp thông minh để tránh hỏng bản in khi mất điện đột ngột.',
        'Các dòng máy in 3D phổ thông như Creality Ender, Anet được cộng đồng người dùng Việt Nam ưa chuộng và hỗ trợ rất nhiều trên các diễn đàn, hội nhóm.',
        'Việc tìm mua vật liệu in (PLA, PETG, ABS) ở các thành phố lớn của Việt Nam hiện nay khá dễ dàng qua các sàn thương mại điện tử.',
      ],
    },
    careerConnect: {
      name: 'Vũ Anh Tuấn',
      title: 'Reviewer & Chuyên gia máy in 3D',
      company: 'YouTube Channel "In 3D Dễ Ợt"',
      imageUrl: 'https://i.pravatar.cc/150?u=vuanhtuan',
      quote:
        'Đừng sợ hỏng. Mỗi bản in lỗi là một bài học. Chiếc máy in 3D đầu tiên của tôi đã dạy tôi nhiều về sự kiên nhẫn hơn bất kỳ cuốn sách nào.',
    },
    quizzes: [
      {
        question:
          'Hành động quan trọng nhất cần thực hiện trước mỗi lần in để đảm bảo lớp đầu tiên bám dính tốt là gì?',
        options: ['Lau sạch bàn in', 'Cân lại bàn in (Bed leveling)', 'Làm nóng trước đầu in', 'Kiểm tra cuộn nhựa'],
        correctAnswerIndex: 1,
        explanation:
          'Cân bàn in là bước tối quan trọng, đảm bảo khoảng cách giữa đầu in và mặt bàn là đồng đều ở mọi điểm, giúp lớp in đầu tiên bám chắc và tạo nền tảng tốt cho toàn bộ vật thể.',
      },
    ],
  },
];
