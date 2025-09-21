import { BaseLessonData } from '@/types/lesson-base';
import { ModuleData } from '@/types';

export interface SpaceTechnologyLesson extends BaseLessonData {
  vietnamContext: {
    title: string;
    content: string[];
  };
  careerConnect: {
    name: string;
    title: string;
    company: string;
    imageUrl: string;
    quote: string;
  };
  quizzes: Array<{
    question: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
  }>;
}

export const spaceTechnologyLessons: SpaceTechnologyLesson[] = [
  {
    id: 'space-exploration-fundamentals',
    title: 'Nền tảng Công nghệ Vũ trụ',
    description:
      'Tìm hiểu về công nghệ vũ trụ, các loại vệ tinh, và cơ hội cho Việt Nam trong kỷ nguyên không gian mới.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=mhwoKfMzah4',
    imageUrl: 'https://i.ytimg.com/vi/mhwoKfMzah4/hqdefault.jpg',
    objectives: [
      'Hiểu lịch sử và tình hình hiện tại của việc khám phá không gian.',
      'Nắm rõ các loại tàu vũ trụ và công nghệ vệ tinh.',
      'Khám phá các cơ hội cho Việt Nam trong ngành công nghiệp vũ trụ.',
      'Học về quy trình lập kế hoạch và thực hiện một sứ mệnh không gian.',
    ],
    prerequisites: ['Kiến thức cơ bản về vật lý và toán học.', 'Sự yêu thích khoa học và khám phá.'],
    exercises: [
      {
        title: 'Lập kế hoạch Sứ mệnh Vệ tinh Ảo',
        description: 'Thiết kế và lập kế hoạch cho một sứ mệnh quan sát Trái Đất giả định dành cho Việt Nam.',
        difficulty: 'Trung bình',
        procedure: [
          'Xác định các mục tiêu của sứ mệnh (ví dụ: theo dõi thời tiết, nông nghiệp, giám sát thiên tai).',
          'Thiết kế các thông số kỹ thuật cơ bản cho vệ tinh và chọn quỹ đạo phù hợp.',
          'Ước tính chi phí và thời gian thực hiện sứ mệnh.',
          'Lập kế hoạch về các trạm mặt đất cần thiết tại Việt Nam.',
        ],
        expectedResults: 'Một bản đề xuất sứ mệnh vệ tinh hoàn chỉnh, sẵn sàng để được đánh giá.',
      },
    ],
    realWorldApplications: [
      'Dự báo thời tiết và theo dõi biến đổi khí hậu.',
      'Giám sát nông nghiệp và dự đoán năng suất cây trồng.',
      'Hỗ trợ ứng phó thiên tai và truyền thông khẩn cấp.',
      'Giám sát hàng hải và an ninh biển.',
    ],
    caseStudies: [
      {
        title: 'Chương trình Vệ tinh VINASAT',
        organization: 'Tập đoàn Bưu chính Viễn thông Việt Nam (VNPT)',
        problem:
          'Việt Nam cần khả năng truyền thông vệ tinh độc lập để đảm bảo an ninh thông tin và phục vụ phát triển kinh tế-xã hội.',
        solution: 'Phóng thành công hai vệ tinh viễn thông VINASAT-1 (2008) và VINASAT-2 (2012) lên quỹ đạo.',
        impact:
          'Tăng cường đáng kể hạ tầng viễn thông, giảm sự phụ thuộc vào các nhà cung cấp nước ngoài, phủ sóng đến các vùng sâu, vùng xa, hải đảo.',
        innovations: ['Làm chủ vận hành vệ tinh', 'Cung cấp dịch vụ đa mục đích', 'Năng lực ứng phó thiên tai'],
      },
    ],
    vietnamContext: {
      title: 'Chiến lược Phát triển Công nghệ Vũ trụ Việt Nam',
      content: [
        'Việt Nam đặt mục tiêu đến năm 2030 sẽ tự chủ trong việc chế tạo các vệ tinh nhỏ quan sát Trái Đất.',
        'Trung tâm Vũ trụ Việt Nam (VNSC) tại Hòa Lạc là dự án trọng điểm quốc gia, với các phòng thí nghiệm, trung tâm điều khiển và bảo tàng vũ trụ.',
        'Ứng dụng công nghệ vệ tinh trong quản lý tài nguyên, môi trường, và nông nghiệp thông minh là ưu tiên hàng đầu.',
      ],
    },
    careerConnect: {
      name: 'Phạm Anh Tuấn',
      title: 'Tổng Giám đốc Trung tâm Vũ trụ Việt Nam (VNSC)',
      company: 'Viện Hàn lâm Khoa học và Công nghệ Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=pham-anh-tuan-vnsc',
      quote:
        'Làm chủ công nghệ vũ trụ không chỉ là niềm tự hào dân tộc, mà còn là một công cụ chiến lược để giải quyết các vấn đề thực tiễn của đất nước và thúc đẩy sự phát triển bền vững.',
    },
    quizzes: [
      {
        question: 'Vệ tinh VINASAT-1 của Việt Nam được phóng vào năm nào?',
        options: ['2005', '2008', '2012', '2015'],
        correctAnswerIndex: 1,
        explanation:
          'VINASAT-1, vệ tinh viễn thông đầu tiên của Việt Nam, đã được phóng thành công vào ngày 19 tháng 4 năm 2008, đánh dấu một cột mốc quan trọng trong lịch sử công nghệ vũ trụ của đất nước.',
      },
    ],
    faqs: [
      {
        question: 'Công nghệ vũ trụ là gì?',
        answer:
          'Công nghệ vũ trụ bao gồm tất cả các công nghệ được phát triển và sử dụng cho các hoạt động trong không gian, như tên lửa, vệ tinh, tàu vũ trụ, và các thiết bị hỗ trợ trên mặt đất.',
      },
      {
        question: 'Sự khác biệt giữa khoa học vũ trụ và công nghệ vũ trụ là gì?',
        answer:
          'Khoa học vũ trụ tập trung vào việc tìm hiểu vũ trụ (thiên văn học, vật lý thiên văn). Công nghệ vũ trụ tập trung vào việc tạo ra các công cụ và phương tiện (tên lửa, vệ tinh) để thực hiện các nghiên cứu khoa học đó và các ứng dụng khác.',
      },
      {
        question: 'Tại sao một quốc gia như Việt Nam lại cần đầu tư vào công nghệ vũ trụ?',
        answer:
          'Đầu tư vào công nghệ vũ trụ giúp một quốc gia tự chủ về viễn thông, giám sát tài nguyên thiên nhiên, dự báo và ứng phó với thiên tai, khẳng định chủ quyền và thúc đẩy phát triển khoa học công nghệ cao.',
      },
      {
        question: 'CubeSat là gì và tại sao nó lại quan trọng?',
        answer:
          'CubeSat là một loại vệ tinh siêu nhỏ có dạng hình lập phương với kích thước tiêu chuẩn (10x10x10 cm). Chúng quan trọng vì chi phí chế tạo và phóng thấp, cho phép các trường đại học, công ty khởi nghiệp và các nước đang phát triển dễ dàng tiếp cận không gian.',
      },
      {
        question: 'Làm thế nào để một vệ tinh có thể ở trên quỹ đạo mà không bị rơi xuống Trái Đất?',
        answer:
          'Vệ tinh duy trì trên quỹ đạo nhờ sự cân bằng giữa hai lực: lực hấp dẫn của Trái Đất kéo nó vào và vận tốc hướng ngang rất lớn của nó, khiến nó "liên tục rơi vòng quanh Trái Đất" thay vì rơi thẳng xuống.',
      },
      {
        question: 'Trạm mặt đất có vai trò gì trong một sứ mệnh không gian?',
        answer:
          'Trạm mặt đất là cơ sở trên Trái Đất có nhiệm vụ giao tiếp với tàu vũ trụ hoặc vệ tinh. Nó gửi lệnh điều khiển lên và nhận dữ liệu khoa học hoặc dữ liệu đo từ xa (telemetry) trở về.',
      },
      {
        question: 'Spin-off technology (công nghệ phái sinh) từ ngành vũ trụ là gì?',
        answer:
          'Là những công nghệ ban đầu được phát triển cho các sứ mệnh không gian nhưng sau đó được ứng dụng rộng rãi trong đời sống hàng ngày. Ví dụ bao gồm GPS, vật liệu memory foam, máy lọc nước, và thực phẩm đông khô.',
      },
      {
        question: 'Rác vũ trụ (space debris) là gì và tại sao nó nguy hiểm?',
        answer:
          'Rác vũ trụ là bất kỳ vật thể nhân tạo nào trên quỹ đạo không còn hoạt động, từ các vệ tinh hỏng đến các mảnh vỡ nhỏ. Chúng nguy hiểm vì di chuyển với tốc độ cực lớn và một vụ va chạm nhỏ cũng có thể phá hủy một vệ tinh đang hoạt động hoặc gây nguy hiểm cho các phi hành gia.',
      },
      {
        question: 'Việt Nam có kế hoạch tự phóng vệ tinh không?',
        answer:
          'Hiện tại, Việt Nam vẫn đang thuê các dịch vụ phóng của nước ngoài. Tuy nhiên, việc nghiên cứu và phát triển các công nghệ tên lửa đẩy là một mục tiêu dài hạn trong chiến lược vũ trụ của quốc gia, hướng tới khả năng tự chủ trong tương lai.',
      },
    ],
  },
  {
    id: 'satellite-communications-gps',
    title: 'Truyền thông Vệ tinh và Định vị Toàn cầu (GPS)',
    description:
      'Tìm hiểu cách vệ tinh cho phép chúng ta giao tiếp xuyên lục địa và xác định vị trí chính xác ở bất kỳ đâu trên Trái Đất.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=srS66A7j5Is',
    imageUrl: 'https://i.ytimg.com/vi/srS66A7j5Is/hqdefault.jpg',
    objectives: [
      'Hiểu nguyên lý hoạt động của truyền thông vệ tinh.',
      'Phân biệt các loại quỹ đạo vệ tinh (LEO, MEO, GEO).',
      'Nắm vững cách hệ thống GPS hoạt động với ít nhất 4 vệ tinh.',
      'Khám phá các ứng dụng của GPS ngoài việc chỉ đường.',
    ],
    prerequisites: ["Hoàn thành bài 'Nền tảng Công nghệ Vũ trụ'"],
    exercises: [
      {
        title: 'Phân tích Tín hiệu GPS',
        description:
          'Sử dụng một ứng dụng trên điện thoại thông minh để xem các vệ tinh GPS mà thiết bị của bạn đang kết nối và phân tích cường độ tín hiệu.',
        difficulty: 'Cơ bản',
        procedure: [
          'Cài đặt một ứng dụng phân tích GPS (ví dụ: GPS Test).',
          'Ra một khu vực thoáng đãng.',
          'Quan sát số lượng vệ tinh trong tầm nhìn và số lượng đang được sử dụng.',
          'Ghi lại cường độ tín hiệu (SNR) của từng vệ tinh.',
          'Di chuyển vào gần một tòa nhà cao tầng và quan sát sự thay đổi.',
        ],
        expectedResults:
          'Hiểu được rằng độ chính xác của GPS phụ thuộc vào số lượng và chất lượng tín hiệu từ nhiều vệ tinh.',
      },
    ],
    realWorldApplications: [
      'Truyền hình vệ tinh (K+).',
      'Điện thoại vệ tinh dùng trong các khu vực không có sóng di động.',
      'Hệ thống định vị trên ô tô, xe máy (Grab, Google Maps).',
      'Đồng bộ hóa thời gian cho các hệ thống tài chính và mạng máy tính.',
    ],
    caseStudies: [
      {
        title: 'Starlink của SpaceX: Internet Toàn cầu',
        organization: 'SpaceX',
        problem:
          'Hàng tỷ người trên thế giới vẫn chưa có kết nối Internet băng thông rộng, đáng tin cậy, đặc biệt là ở các vùng nông thôn và hẻo lánh.',
        solution:
          'Phóng hàng ngàn vệ tinh nhỏ lên quỹ đạo Trái Đất tầm thấp (LEO) để tạo thành một mạng lưới khổng lồ, cung cấp Internet tốc độ cao đến mọi nơi.',
        impact:
          'Có khả năng cách mạng hóa việc truy cập Internet toàn cầu, hỗ trợ giáo dục từ xa, y tế từ xa và phát triển kinh tế cho các khu vực khó khăn.',
        innovations: [
          'Mạng lưới vệ tinh LEO quy mô lớn',
          'Sản xuất vệ tinh hàng loạt',
          'Thiết bị đầu cuối người dùng nhỏ gọn',
        ],
      },
    ],
    vietnamContext: {
      title: 'GPS và Chuyển đổi số trong Giao thông Vận tải Việt Nam',
      content: [
        'Hệ thống giám sát hành trình (hộp đen) sử dụng GPS là yêu cầu bắt buộc đối với xe kinh doanh vận tải tại Việt Nam, giúp quản lý và tăng cường an toàn.',
        'Các ứng dụng gọi xe công nghệ như Grab, Gojek, Be đã thay đổi hoàn toàn ngành vận tải đô thị, với GPS là công nghệ cốt lõi.',
        'GPS giúp nông dân thực hiện nông nghiệp chính xác, tối ưu hóa việc gieo hạt và bón phân trên các cánh đồng lớn.',
      ],
    },
    careerConnect: {
      name: 'Bác Gia Bình',
      title: 'Cựu Chủ tịch Hội đồng Quản trị',
      company: 'FPT Corporation',
      imageUrl: 'https://i.pravatar.cc/150?u=gia-binh',
      quote:
        'Chuyển đổi số không phải là một lựa chọn, đó là con đường duy nhất để các quốc gia như Việt Nam có thể bắt kịp và vượt lên. Công nghệ vũ trụ và ứng dụng của nó là một phần không thể thiếu của hành trình đó.',
    },
    quizzes: [
      {
        question:
          'Để xác định chính xác vị trí 3D (kinh độ, vĩ độ, cao độ) của bạn, một máy thu GPS cần nhận được tín hiệu từ ít nhất bao nhiêu vệ tinh?',
        options: ['1', '2', '3', '4'],
        correctAnswerIndex: 3,
        explanation:
          'Về lý thuyết, 3 vệ tinh là đủ để xác định vị trí 2D. Tuy nhiên, cần có tín hiệu từ vệ tinh thứ tư để giải quyết sai số về thời gian và đồng bộ đồng hồ, từ đó cung cấp vị trí 3D chính xác.',
      },
    ],
    faqs: [
      {
        question: 'Sự khác biệt giữa quỹ đạo LEO, MEO và GEO là gì?',
        answer:
          'LEO (Quỹ đạo Trái Đất tầm thấp) gần Trái Đất, phù hợp cho vệ tinh quan sát và Internet tốc độ cao (như Starlink). MEO (Quỹ đạo Trái Đất tầm trung) là nơi đặt các hệ thống định vị như GPS. GEO (Quỹ đạo địa tĩnh) ở rất xa, nơi vệ tinh có vẻ "đứng yên" so với một điểm trên mặt đất, lý tưởng cho vệ tinh viễn thông và truyền hình.',
      },
      {
        question: 'Tại sao tín hiệu GPS lại yếu và dễ bị chặn bởi các tòa nhà?',
        answer:
          'Tín hiệu GPS được phát từ các vệ tinh cách xa hơn 20,000 km. Khi đến Trái Đất, chúng rất yếu (yếu hơn cả nhiễu nền vũ trụ). Do đó, chúng dễ dàng bị các vật cản lớn như tòa nhà, núi non, hoặc thậm chí là tán lá cây rậm rạp chặn lại.',
      },
      {
        question: 'Ngoài GPS, còn có những hệ thống định vị toàn cầu nào khác?',
        answer:
          'Các hệ thống định vị toàn cầu (GNSS) khác bao gồm GLONASS của Nga, Galileo của Liên minh Châu Âu, và BeiDou của Trung Quốc. Hầu hết các điện thoại thông minh hiện đại đều có thể sử dụng tín hiệu từ nhiều hệ thống này để tăng độ chính xác.',
      },
      {
        question: 'Làm thế nào thuyết tương đối của Einstein lại liên quan đến GPS?',
        answer:
          'Thuyết tương đối của Einstein đóng vai trò cực kỳ quan trọng. Do tốc độ cao (Thuyết tương đối hẹp) và trường hấp dẫn yếu hơn (Thuyết tương đối rộng), đồng hồ trên vệ tinh GPS chạy nhanh hơn một chút so với đồng hồ trên mặt đất. Nếu không tính toán và hiệu chỉnh sự khác biệt này, hệ thống GPS sẽ sai lệch tới vài km mỗi ngày.',
      },
      {
        question: 'SNR (Signal-to-Noise Ratio) trong tín hiệu GPS có ý nghĩa gì?',
        answer:
          'SNR là Tỷ lệ Tín hiệu trên Nhiễu. Nó đo lường cường độ của tín hiệu vệ tinh so với nhiễu nền. SNR càng cao, tín hiệu càng rõ ràng và đáng tin cậy, góp phần vào việc xác định vị trí chính xác hơn.',
      },
      {
        question: 'Tại sao điện thoại vệ tinh có thể hoạt động ở những nơi không có sóng di động?',
        answer:
          'Điện thoại di động dựa vào các trạm phát sóng mặt đất (BTS). Ở những vùng sâu vùng xa không có BTS, chúng sẽ mất sóng. Điện thoại vệ tinh không cần BTS, nó kết nối trực tiếp với các vệ tinh trên quỹ đạo, do đó có thể hoạt động ở bất kỳ đâu miễn là nhìn thấy bầu trời.',
      },
      {
        question: 'Chòm sao vệ tinh (satellite constellation) là gì?',
        answer:
          'Là một nhóm các vệ tinh nhân tạo hoạt động phối hợp với nhau như một hệ thống. Ví dụ, hệ thống GPS và Starlink đều là các chòm sao vệ tinh.',
      },
      {
        question: 'Độ trễ (latency) trong truyền thông vệ tinh là gì?',
        answer:
          'Là khoảng thời gian trễ từ khi tín hiệu được gửi đi cho đến khi nó được nhận lại. Với các vệ tinh GEO ở xa, độ trễ có thể lên tới nửa giây, gây khó khăn cho các ứng dụng thời gian thực như chơi game online hoặc gọi video. Các vệ tinh LEO như Starlink có độ trễ thấp hơn nhiều do ở gần Trái Đất hơn.',
      },
      {
        question: 'GPS có thể được sử dụng để làm gì ngoài việc chỉ đường?',
        answer:
          'GPS có rất nhiều ứng dụng: đồng bộ hóa thời gian cho các mạng tài chính và viễn thông, theo dõi và quản lý đội xe vận tải, nông nghiệp chính xác, khảo sát địa chất, và thậm chí là nghiên cứu sự dịch chuyển của các mảng kiến tạo.',
      },
    ],
  },
];

export const spaceTechnologyModuleData: ModuleData = {
  id: 'space-technology',
  title: 'Space Technology & Exploration',
  subtitle: 'Công nghệ vũ trụ',
  description: 'Khám phá công nghệ vũ trụ, từ thiết kế tên lửa đến khám phá hành tinh và du hành vũ trụ.',
  category: 'technology',
  icon: '🚀',
  color: 'from-gray-700 to-blue-900',
  level: 'Nâng cao',
  duration: '15-20 giờ',
  features: ['Rocket Science', 'Satellite Technology', 'Planetary Exploration', 'Space Colonization'],
  prerequisites: [
    'Vật lý và toán học nâng cao',
    'Kỹ thuật cơ khí hoặc hàng không vũ trụ',
    'Lập trình cho hệ thống nhúng',
    'Đam mê khám phá vũ trụ',
  ],
  objectives: [
    'Hiểu sâu về các loại động cơ tên lửa và nguyên lý hoạt động.',
    'Thiết kế một mô hình vệ tinh nhỏ (CubeSat) với các hệ thống con.',
    'Lập kế hoạch cho một nhiệm vụ khám phá liên hành tinh.',
    'Phân tích các công nghệ cần thiết cho việc định cư ngoài Trái Đất.',
  ],
  careerOutcomes: [
    'Kỹ sư hàng không vũ trụ',
    'Chuyên gia thiết kế vệ tinh',
    'Nhà phân tích quỹ đạo',
    'Kỹ sư hệ thống đẩy',
  ],
  industryApplications: [
    { name: 'Phóng vệ tinh thương mại', description: 'Đưa vệ tinh của các công ty lên quỹ đạo.' },
    {
      name: 'Khai thác tài nguyên không gian',
      description: 'Thăm dò và khai thác khoáng sản trên các tiểu hành tinh.',
    },
    { name: 'Du lịch vũ trụ', description: 'Phát triển tàu vũ trụ và dịch vụ cho khách du lịch.' },
    { name: 'Nghiên cứu khoa học', description: 'Chế tạo kính thiên văn không gian, tàu thăm dò.' },
  ],
  marketDemand: {
    averageSalary: '3000-7000 USD/tháng',
    jobGrowth: '10% mỗi năm',
    hireDemand: 'Cao, đặc biệt cho chuyên gia có kinh nghiệm',
  },
  relatedModules: ['aerospace-engineering', 'robotics', 'materials-science'],
};
