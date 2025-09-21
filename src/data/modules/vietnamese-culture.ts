import { BaseLessonData } from '@/types/lesson-base';
import { ModuleData } from '@/types';
import { K2Module } from '../k2-modules';

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
    faqs: [
      {
        question: 'Số hóa di sản là gì?',
        answer:
          'Số hóa di sản là quá trình chuyển đổi các tài sản văn hóa (như cổ vật, tài liệu, công trình kiến trúc, hoặc các loại hình nghệ thuật phi vật thể) sang định dạng kỹ thuật số. Điều này không chỉ giúp lưu trữ chúng một cách an toàn mà còn mở ra nhiều cách thức mới để tiếp cận, nghiên cứu và trải nghiệm di sản.',
      },
      {
        question: 'Tại sao việc bảo tồn di sản văn hóa lại quan trọng?',
        answer:
          'Di sản văn hóa là bản sắc, là tâm hồn của một dân tộc. Nó kết nối chúng ta với quá khứ, giúp chúng ta hiểu mình là ai và định hình tương lai. Bảo tồn di sản không chỉ là giữ gìn những giá trị cho thế hệ mai sau mà còn là một nguồn lực quan trọng để phát triển kinh tế - xã hội, đặc biệt là trong lĩnh vực du lịch và giáo dục.',
      },
      {
        question: 'Photogrammetry là gì?',
        answer:
          'Là kỹ thuật tạo ra các mô hình 3D từ một loạt các bức ảnh 2D được chụp từ nhiều góc độ khác nhau. Một phần mềm chuyên dụng sẽ phân tích các bức ảnh này, tìm ra các điểm chung và tái tạo lại hình dạng 3D của vật thể. Đây là một phương pháp hiệu quả về chi phí để số hóa các vật thể và không gian lớn.',
      },
      {
        question: 'Thực tế ảo (VR) và Thực tế tăng cường (AR) có thể được ứng dụng trong bảo tồn di sản như thế nào?',
        answer:
          'VR có thể tạo ra các chuyến tham quan ảo hoàn toàn, cho phép người dùng "đến thăm" các di tích đã bị phá hủy hoặc ở những nơi xa xôi. AR có thể làm phong phú thêm trải nghiệm tại di tích thật, ví dụ như hướng điện thoại vào một bức tường thành và xem cảnh tượng chiến trận xưa kia được tái hiện, hoặc xem thông tin bổ sung về một cổ vật.',
      },
      {
        question: 'Di sản văn hóa phi vật thể là gì và làm thế nào để số hóa nó?',
        answer:
          'Là các di sản không thể sờ nắm được, như âm nhạc dân gian (Ca trù, Quan họ), các nghi lễ, lễ hội, nghề thủ công truyền thống, và các câu chuyện truyền miệng. Việc số hóa chúng bao gồm việc ghi âm, quay video, phỏng vấn các nghệ nhân, và xây dựng các kho lưu trữ trực tuyến để lưu giữ và chia sẻ các tư liệu này.',
      },
      {
        question: 'Metadata (siêu dữ liệu) quan trọng như thế nào trong việc lưu trữ di sản số?',
        answer:
          'Metadata là "dữ liệu về dữ liệu". Nó mô tả các thông tin quan trọng về một đối tượng số, như nó là gì, được tạo ra khi nào, bởi ai, bằng công nghệ gì, bối cảnh lịch sử của nó. Nếu không có metadata, một file 3D hay một bản ghi âm sẽ chỉ là một tập tin vô nghĩa, không có giá trị nghiên cứu hay tra cứu.',
      },
      {
        question: 'Làm thế nào để cộng đồng có thể tham gia vào việc số hóa di sản?',
        answer:
          'Cộng đồng có thể tham gia bằng nhiều cách: chia sẻ những câu chuyện, hình ảnh, tài liệu cũ của gia đình; tham gia các dự án ghi lại lịch sử truyền miệng; giúp nhận dạng và cung cấp thông tin về các địa điểm hoặc nhân vật trong các bức ảnh cũ; hoặc thậm chí học các kỹ năng số hóa cơ bản để giúp ghi lại di sản tại địa phương mình.',
      },
      {
        question: 'Bản quyền trong di sản số được xử lý như thế nào?',
        answer:
          'Đây là một vấn đề phức tạp. Cần xác định ai là người sở hữu bản quyền của di sản gốc (nếu có) và ai sở hữu bản quyền của phiên bản số hóa. Nhiều tổ chức văn hóa chọn sử dụng các giấy phép mở (như Creative Commons) để cho phép công chúng truy cập và tái sử dụng di sản một cách hợp pháp cho các mục đích giáo dục và phi thương mại.',
      },
      {
        question: 'Du lịch văn hóa số là gì?',
        answer:
          'Là việc sử dụng công nghệ số để nâng cao trải nghiệm của du khách khi khám phá văn hóa. Nó có thể bao gồm các ứng dụng hướng dẫn du lịch AR, các tour tham quan ảo VR trước khi đi, các mã QR tại di tích để cung cấp thông tin sâu hơn, hoặc các nền tảng kể chuyện kỹ thuật số về lịch sử và văn hóa địa phương.',
      },
      {
        question: 'Thách thức lớn nhất của việc bảo tồn di sản số là gì?',
        answer:
          'Một trong những thách thức lớn nhất là sự lỗi thời của công nghệ. Các định dạng file, phần mềm và phần cứng thay đổi rất nhanh. Một file được tạo ra hôm nay có thể không mở được trong 10-20 năm nữa. Do đó, bảo tồn di sản số đòi hỏi một chiến lược dài hạn về việc di chuyển dữ liệu (data migration) và cập nhật công nghệ liên tục.',
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

export const vietnameseCultureModuleData: ModuleData = {
  id: 'vietnamese-culture',
  title: 'Văn Hóa Việt Nam & Di Sản Số',
  subtitle: 'Digital Heritage Preservation & Tourism Technology',
  description:
    'Học cách số hóa và bảo tồn di sản văn hóa Việt Nam bằng công nghệ hiện đại. Phát triển tourism technology platforms và cultural experience solutions cho thị trường 95 triệu người Việt Nam và 18 triệu du khách quốc tế hàng năm.',
  level: 'Trung bình',
  duration: '8-12 giờ',
  category: 'Vietnamese-Specific Technology',
  heroImageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop',
  features: [
    'Digital heritage preservation với 3D scanning và VR technology',
    'Tourism platform development cho Vietnamese destinations',
    'Cultural knowledge management systems',
    'Community-based tourism technology solutions',
  ],
  icon: '🏛️',
  color: 'from-yellow-600 to-orange-600',
  objectives: [
    'Master digital preservation techniques cho Vietnamese cultural artifacts',
    'Develop comprehensive tourism technology platforms',
    'Create sustainable cultural technology solutions',
    'Build community engagement systems cho cultural education',
  ],
  prerequisites: [
    'Basic understanding of Vietnamese culture và history',
    'Familiarity với web development hoặc mobile development',
    'Interest trong cultural preservation và tourism',
  ],
  careerOutcomes: [
    'Cultural Technology Specialist tại museums và heritage sites',
    'Tourism Platform Developer cho travel companies',
    'Digital Heritage Consultant cho government projects',
    'Cultural Content Creator cho educational platforms',
  ],
  industryApplications: [
    'Museum digital transformation initiatives',
    'Tourism và hospitality technology',
    'Educational content development',
    'Government cultural preservation projects',
  ],
  marketDemand: {
    averageSalary: '20-40 triệu VNĐ',
    jobGrowth: '+35%',
    hireDemand: 'Cao',
  },
  relatedModules: [K2Module.AI, K2Module.VietnameseBusiness, K2Module.DigitalGovernment],
  lessons: vietnameseCultureLessons,
};
