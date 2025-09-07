import { BaseLessonData } from '@/types/lesson-base';
export interface VietnameseCultureLesson extends BaseLessonData {
  culturalAspects: string[];
  technologies: string[];
}

export const vietnameseCultureLessons: VietnameseCultureLesson[] = [
  {
    id: 'digital-heritage-preservation',
    title: 'Bài 1: Digital Heritage Preservation và Cultural Documentation',
    description:
      'Học cách số hóa và bảo tồn di sản văn hóa Việt Nam bằng công nghệ hiện đại. Phát triển solutions cho museums, historical sites và cultural institutions.',
    videoUrl: 'https://www.youtube.com/watch?v=ZuJNBWKczBQ',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    difficulty: 'Trung bình',
    duration: '150 phút',
    culturalAspects: ['Di sản số', 'Tài liệu văn hóa', 'Bảo tàng ảo'],
    technologies: ['3D Laser Scanning', 'Photogrammetry', 'Virtual Reality', 'Digital Archiving'],
    objectives: [
      'Implement digital preservation workflows cho Vietnamese cultural artifacts',
      'Create virtual museum experiences with immersive technology',
      'Develop cultural knowledge management systems',
      'Build community engagement platforms cho cultural education',
    ],
    prerequisites: [
      'Basic understanding of Vietnamese culture và history',
      'Familiarity với digital media tools',
      'Knowledge of database management',
    ],
    exercises: [
      {
        title: 'Virtual Museum Creation',
        description: 'Build virtual museum experience cho Vietnamese traditional crafts',
        difficulty: 'Trung bình',
        materials: ['3D modeling software', 'Web development tools', 'Cultural content'],
        procedure: [
          'Chọn một làng nghề truyền thống (ví dụ: gốm Bát Tràng, lụa Vạn Phúc).',
          'Sử dụng kỹ thuật chụp ảnh 360 độ và 3D scanning để số hóa sản phẩm và không gian.',
          'Xây dựng một trang web tương tác, cho phép người dùng "tham quan" không gian ảo.',
          'Tích hợp các video, bài viết và câu chuyện về lịch sử và quy trình sản xuất.',
        ],
        expectedResults: 'Một bảo tàng ảo tương tác với nội dung giáo dục phong phú.',
        solution:
          'Sử dụng các nền tảng như Three.js hoặc Matterport để tạo môi trường ảo, kết hợp với việc kể chuyện đa phương tiện.',
      },
    ],
    realWorldApplications: [
      'Các dự án chuyển đổi số cho bảo tàng.',
      'Nền tảng công nghệ phục vụ du lịch văn hóa.',
      'Nội dung giáo dục về di sản Việt Nam.',
      'Hệ thống lưu trữ và tư liệu hóa di sản.',
    ],
    vietnamContext: {
      title: 'Bảo tồn Di sản trong Kỷ nguyên số',
      content: [
        'Việt Nam sở hữu một kho tàng di sản văn hóa vật thể và phi vật thể đồ sộ, từ các di tích lịch sử đến các loại hình nghệ thuật dân gian. Việc bảo tồn và phát huy các giá trị này trong bối cảnh hiện đại là một nhiệm vụ quan trọng.',
        'Công nghệ mở ra những cơ hội chưa từng có để lưu trữ, tái tạo và quảng bá di sản. Các dự án số hóa như 3D scanning các cổ vật, xây dựng bảo tàng ảo, hay lưu trữ các câu chuyện dân gian trên nền tảng số đang ngày càng được quan tâm.',
        'Thách thức nằm ở việc đảm bảo tính chân thực, tôn trọng bản sắc văn hóa và thu hút sự tham gia của cộng đồng trong quá trình số hóa.',
      ],
    },
    caseStudies: [
      {
        title: 'Dự án Số hóa Di sản Huế',
        organization: 'Trung tâm Bảo tồn Di tích Cố đô Huế',
        problem:
          'Các công trình kiến trúc và cổ vật trong Quần thể Di tích Cố đô Huế đang đối mặt với nguy cơ xuống cấp do thời gian và thời tiết. Cần một giải pháp để lưu trữ và phục vụ công tác trùng tu, nghiên cứu.',
        solution:
          'Dự án đã sử dụng công nghệ 3D laser scanning và flycam để tạo ra các mô hình số 3D chi tiết của các công trình kiến trúc như Đại Nội, lăng tẩm. Một cơ sở dữ liệu số về các cổ vật cũng được xây dựng.',
        impact:
          'Tạo ra một bộ tư liệu số vô giá phục vụ cho công tác bảo tồn và trùng tu một cách chính xác. Các mô hình 3D cũng được sử dụng để phát triển các sản phẩm du lịch thực tế ảo, thu hút du khách.',
        innovations: ['3D Laser Scanning', 'Photogrammetry với Flycam', 'Cơ sở dữ liệu di sản số'],
      },
      {
        title: 'Ký ức người lính - The Veteran Archives',
        organization: 'Một nhóm các nhà làm phim tài liệu độc lập',
        problem:
          'Những câu chuyện và ký ức của các cựu chiến binh Việt Nam đang dần mất đi theo thời gian. Cần một cách để ghi lại và chia sẻ những câu chuyện này cho thế hệ trẻ.',
        solution:
          'Dự án đã thực hiện các cuộc phỏng vấn sâu với hàng trăm cựu chiến binh trên cả nước, ghi lại dưới dạng video và audio. Các tư liệu này được sắp xếp và đăng tải lên một trang web lưu trữ trực tuyến, kèm theo bản đồ và dòng thời gian.',
        impact:
          'Xây dựng được một kho lưu trữ lịch sử truyền miệng quý giá, giúp thế hệ trẻ hiểu hơn về lịch sử đất nước qua những câu chuyện cá nhân. Dự án nhận được sự ủng hộ lớn từ cộng đồng.',
        innovations: [
          'Lịch sử truyền miệng (Oral History)',
          'Lưu trữ số (Digital Archiving)',
          'Nền tảng kể chuyện tương tác',
        ],
      },
    ],
    careerConnect: {
      name: 'Trần Trọng Thành',
      title: 'Chủ tịch, Vinasa & Người sáng lập Zeniac',
      company: 'Zeniac',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-trong-thanh',
      quote:
        'Công nghệ và văn hóa không phải là hai thái cực đối lập. Khi kết hợp một cách thông minh, công nghệ có thể trở thành công cụ mạnh mẽ nhất để bảo tồn và lan tỏa những giá trị văn hóa cốt lõi của dân tộc đến với thế giới.',
    },
    quizzes: [
      {
        question: 'Công nghệ nào được sử dụng trong dự án số hóa Di sản Huế để tạo mô hình 3D chi tiết?',
        options: ['Máy in 3D', '3D Laser Scanning và Flycam', 'Trí tuệ nhân tạo', 'Blockchain'],
        correctAnswerIndex: 1,
        explanation:
          'Dự án đã sử dụng các công nghệ quét 3D laser và chụp ảnh từ flycam (photogrammetry) để tạo ra các mô hình số có độ chính xác cao của các công trình kiến trúc.',
      },
      {
        question: 'Mục tiêu chính của dự án "Ký ức người lính" là gì?',
        options: [
          'Xây dựng một trò chơi điện tử về chiến tranh',
          'Sản xuất một bộ phim điện ảnh',
          'Ghi lại và lưu trữ các câu chuyện của cựu chiến binh',
          'Phân tích dữ liệu về sức khỏe cựu chiến binh',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Dự án tập trung vào việc ghi lại lịch sử truyền miệng (oral history) từ các nhân chứng sống để bảo tồn ký ức và chia sẻ với các thế hệ tương lai.',
      },
    ],
    resources: [
      {
        title: 'Vietnam Museum of Ethnology Online',
        url: 'http://www.vme.org.vn/',
        type: 'museum',
      },
      {
        title: 'National Archives of Vietnam',
        url: 'http://archives.org.vn/',
        type: 'archive',
      },
    ],
  },
];
