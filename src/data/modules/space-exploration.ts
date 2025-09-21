import { BaseLessonData } from '@/types/lesson-base';
import { ModuleData } from '@/types';

export interface SpaceExplorationLesson extends BaseLessonData {
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

export const spaceLessons: SpaceExplorationLesson[] = [
  {
    id: 'space-exploration-fundamentals',
    title: 'Nền tảng về Khám phá Vũ trụ',
    description:
      'Tìm hiểu lịch sử và các nguyên lý cơ bản của việc khám phá không gian, từ khoa học tên lửa đến các sứ mệnh không gian.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=mEEJNG4uAPM',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu lịch sử khám phá vũ trụ từ vệ tinh Sputnik đến nay.',
      'Nắm vững nguyên lý đẩy của tên lửa và cơ học quỹ đạo.',
      'Tìm hiểu cấu trúc Hệ Mặt trời và các loại thiên thể.',
      'Khám phá các cơ quan không gian và các sứ mệnh nổi tiếng.',
    ],
    prerequisites: ['Kiến thức Vật lý và Toán học cấp 3.', 'Đam mê khám phá và công nghệ.'],
    exercises: [
      {
        title: 'Mô phỏng Lập kế hoạch Sứ mệnh',
        description: 'Sử dụng công cụ mô phỏng để thiết kế một sứ mệnh đơn giản khám phá Sao Hỏa.',
        difficulty: 'Trung bình',
        procedure: [
          'Xác định "cửa sổ phóng" (launch window) tối ưu để đến Sao Hỏa.',
          'Lựa chọn các thiết bị khoa học cần thiết cho tàu vũ trụ.',
          'Tính toán sơ bộ lượng nhiên liệu cần thiết.',
          'Vạch ra các giai đoạn chính của sứ mệnh: phóng, du hành, đi vào quỹ đạo, và hạ cánh.',
        ],
        expectedResults: 'Một bản kế hoạch sứ mệnh sơ bộ với các giai đoạn và mục tiêu rõ ràng.',
      },
    ],
    realWorldApplications: [
      'Công nghệ vệ tinh cho viễn thông và Internet.',
      'Hệ thống định vị toàn cầu (GPS).',
      'Quan sát Trái Đất để theo dõi biến đổi khí hậu.',
      'Nghiên cứu khoa học trong môi trường không trọng lực.',
    ],
    caseStudies: [
      {
        title: 'Sứ mệnh Sao Hỏa Perseverance của NASA',
        organization: 'NASA / JPL',
        problem:
          'Tìm kiếm dấu hiệu của sự sống cổ đại trên Sao Hỏa và thu thập các mẫu đất đá để mang về Trái Đất trong tương lai.',
        solution:
          'Triển khai một robot tự hành (rover) tiên tiến được trang bị các công cụ khoa học phức tạp và một hệ thống lưu trữ mẫu vật.',
        impact:
          'Mang lại những khám phá đột phá về địa chất Sao Hỏa, khả năng tồn tại của nước trong quá khứ và tiềm năng cho sự sống.',
        innovations: [
          'Trực thăng tự hành Ingenuity',
          'Hệ thống thu thập và lưu mẫu vật tiên tiến',
          'Công nghệ tự điều hướng bằng AI',
        ],
      },
    ],
    vietnamContext: {
      title: 'Dấu ấn Việt Nam trên bản đồ không gian',
      content: [
        'Việt Nam đã có vệ tinh riêng (VINASAT-1, VINASAT-2) để phục vụ viễn thông, khẳng định chủ quyền quốc gia trong không gian.',
        'Trung tâm Vũ trụ Việt Nam (VNSC) đang được xây dựng với mục tiêu làm chủ công nghệ vệ tinh nhỏ và ứng dụng công nghệ vũ trụ vào đời sống.',
        'Phạm Tuân là người Việt Nam và châu Á đầu tiên bay vào vũ trụ vào năm 1980 trong chương trình Interkosmos của Liên Xô.',
      ],
    },
    careerConnect: {
      name: 'Tiến sĩ Lê Thị Ngọc Hân',
      title: 'Nhà nghiên cứu Khoa học Hành tinh',
      company: 'Viện Hàn lâm Khoa học và Công nghệ Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=le-thi-ngoc-han',
      quote:
        'Vũ trụ là phòng thí nghiệm lớn nhất. Nghiên cứu các hành tinh khác giúp chúng ta hiểu rõ hơn về chính Trái Đất và vị trí của chúng ta trong vũ trụ.',
    },
    quizzes: [
      {
        question: 'Vệ tinh nhân tạo đầu tiên được con người phóng lên quỹ đạo Trái Đất có tên là gì?',
        options: ['Explorer 1', 'Sputnik 1', 'Vostok 1', 'Apollo 11'],
        correctAnswerIndex: 1,
        explanation:
          'Sputnik 1, được Liên Xô phóng vào ngày 4 tháng 10 năm 1957, đã mở ra kỷ nguyên chinh phục không gian của loài người.',
      },
    ],
    faqs: [
      {
        question: 'Tại sao chúng ta lại khám phá vũ trụ?',
        answer:
          'Việc khám phá vũ trụ thúc đẩy sự tò mò vốn có của con người, thúc đẩy tiến bộ công nghệ, tìm kiếm sự sống ngoài Trái Đất, và có thể đảm bảo sự tồn tại lâu dài của loài người bằng cách tìm kiếm những ngôi nhà mới.',
      },
      {
        question: 'Cơ học quỹ đạo là gì?',
        answer:
          'Cơ học quỹ đạo là ngành khoa học nghiên cứu chuyển động của các vật thể trong không gian dưới tác động của lực hấp dẫn, ví dụ như chuyển động của các hành tinh quanh Mặt Trời hoặc của vệ tinh quanh Trái Đất.',
      },
      {
        question: 'Sự khác biệt giữa một hành tinh và một ngôi sao là gì?',
        answer:
          'Một ngôi sao (như Mặt Trời) tự tạo ra ánh sáng và năng lượng thông qua phản ứng tổng hợp hạt nhân ở lõi của nó. Một hành tinh (như Trái Đất) không tự phát sáng mà chỉ phản chiếu ánh sáng từ ngôi sao mà nó quay quanh.',
      },
      {
        question: 'GPS hoạt động như thế nào?',
        answer:
          'Hệ thống Định vị Toàn cầu (GPS) hoạt động dựa trên một mạng lưới các vệ tinh quay quanh Trái Đất. Máy thu GPS của bạn nhận tín hiệu từ ít nhất bốn vệ tinh để tính toán vị trí chính xác của bạn thông qua quá trình giao hội ba chiều (trilateration).',
      },
      {
        question: 'Launch window (cửa sổ phóng) là gì?',
        answer:
          'Là một khoảng thời gian cụ thể mà một tên lửa phải được phóng để đạt được quỹ đạo hoặc mục tiêu mong muốn một cách hiệu quả nhất. Đối với các sứ mệnh liên hành tinh, cửa sổ phóng rất quan trọng để tiết kiệm nhiên liệu và thời gian di chuyển.',
      },
      {
        question: 'Tại sao môi trường không trọng lực lại quan trọng cho nghiên cứu khoa học?',
        answer:
          'Môi trường không trọng lực (chính xác hơn là vi trọng lực) trên Trạm Vũ trụ Quốc tế (ISS) cho phép các nhà khoa học nghiên cứu các hiện tượng vật lý, hóa học và sinh học mà không bị ảnh hưởng bởi lực hấp dẫn, dẫn đến những khám phá mới trong y học và khoa học vật liệu.',
      },
      {
        question: 'Ai là người đầu tiên đi bộ trên Mặt Trăng?',
        answer:
          'Phi hành gia người Mỹ Neil Armstrong là người đầu tiên đặt chân lên Mặt Trăng vào ngày 20 tháng 7 năm 1969, trong sứ mệnh Apollo 11 của NASA.',
      },
      {
        question: 'Kính viễn vọng không gian Hubble đã đóng góp gì cho khoa học?',
        answer:
          'Kính viễn vọng Hubble, quay quanh Trái Đất bên ngoài bầu khí quyển, đã cung cấp những hình ảnh vũ trụ sâu sắc và rõ nét nhất, giúp xác định tuổi của vũ trụ, khám phá năng lượng tối, và nghiên cứu các thiên hà xa xôi.',
      },
      {
        question: 'Tên lửa hoạt động như thế nào trong chân không khi không có không khí để "đẩy" vào?',
        answer:
          'Tên lửa hoạt động dựa trên Định luật III của Newton (Hành động và Phản ứng). Nó không "đẩy" vào không khí. Thay vào đó, nó phụt ra một lượng lớn khí nóng với tốc độ cao về phía sau, và theo nguyên tắc bảo toàn động lượng, tên lửa được đẩy về phía trước.',
      },
      {
        question: 'Rác vũ trụ là gì và tại sao nó nguy hiểm?',
        answer:
          'Rác vũ trụ là bất kỳ mảnh vỡ nào do con người tạo ra còn lại trên quỹ đạo Trái Đất, từ các vệ tinh cũ đến các mảnh tên lửa. Chúng di chuyển với tốc độ cực lớn và va chạm với các vệ tinh đang hoạt động hoặc tàu vũ trụ có thể gây ra thiệt hại thảm khốc.',
      },
    ],
  },
  {
    id: 'rocket-science-propulsion',
    title: 'Khoa học Tên lửa và Hệ thống Đẩy',
    description:
      'Đi sâu vào nguyên lý hoạt động của tên lửa và các loại hệ thống đẩy khác nhau được sử dụng trong khám phá không gian.',
    duration: '120 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=jI-HeXhsUIg',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    objectives: [
      'Nắm vững phương trình tên lửa Tsiolkovsky.',
      'Hiểu các loại động cơ đẩy chính: hóa học, điện, hạt nhân.',
      'Phân tích hiệu suất của tên lửa (lực đẩy, xung lực riêng).',
      'Tìm hiểu về các công nghệ đẩy trong tương lai.',
    ],
    prerequisites: ["Hoàn thành bài 'Nền tảng về Khám phá Vũ trụ'"],
    exercises: [
      {
        title: 'Tính toán Delta-v cho một Sứ mệnh',
        description:
          'Sử dụng phương trình tên lửa Tsiolkovsky để tính toán sự thay đổi vận tốc (delta-v) cần thiết cho một tên lửa.',
        difficulty: 'Nâng cao',
        procedure: [
          'Giả sử một tên lửa có khối lượng ban đầu (ướt) là 100,000 kg.',
          'Khối lượng sau khi đốt hết nhiên liệu (khô) là 10,000 kg.',
          'Vận tốc phụt khí của động cơ (Ve) là 4,500 m/s.',
          'Áp dụng công thức: Δv = Ve * ln(m0 / mf) để tính toán.',
        ],
        expectedResults: 'Tính toán ra được giá trị delta-v xấp xỉ 10,360 m/s.',
      },
    ],
    realWorldApplications: [
      'Động cơ Merlin của SpaceX sử dụng nhiên liệu lỏng (LOX/RP-1).',
      'Động cơ đẩy ion trên các tàu thăm dò không gian sâu.',
      'Tên lửa đẩy phụ nhiên liệu rắn (SRB) của Tàu con thoi.',
    ],
    caseStudies: [
      {
        title: 'SpaceX và Cuộc cách mạng Tên lửa Tái sử dụng',
        organization: 'SpaceX',
        problem: 'Chi phí phóng tên lửa cực kỳ đắt đỏ vì mỗi tên lửa chỉ sử dụng một lần rồi vứt bỏ.',
        solution:
          'Phát triển công nghệ để tầng đầu tiên của tên lửa có thể tự động quay trở lại và hạ cánh thẳng đứng, sẵn sàng cho lần phóng tiếp theo.',
        impact:
          'Giảm đáng kể chi phí phóng vệ tinh và đưa con người vào không gian, mở ra một kỷ nguyên mới cho ngành công nghiệp vũ trụ thương mại.',
        innovations: ['Hạ cánh thẳng đứng', 'Tái sử dụng tầng đẩy', 'Sản xuất hàng loạt'],
      },
    ],
    vietnamContext: {
      title: 'Tiềm năng Tên lửa "Made in Vietnam"',
      content: [
        'Các trường đại học kỹ thuật hàng đầu Việt Nam như Đại học Bách Khoa đã có các nhóm sinh viên nghiên cứu và chế tạo thành công các mẫu tên lửa thử nghiệm (sounding rocket) quy mô nhỏ.',
        'Các cuộc thi rocketry (tên lửa nước, tên lửa mô hình) đang ngày càng phổ biến, khơi dậy niềm đam mê khoa học không gian cho thế hệ trẻ.',
        'Việc phát triển tên lửa đẩy thương mại đòi hỏi một hệ sinh thái công nghiệp phụ trợ và đầu tư lớn, là một mục tiêu dài hạn cho Việt Nam.',
      ],
    },
    careerConnect: {
      name: 'Vũ Hồng Nhật',
      title: 'Kỹ sư trưởng, CLB Tên lửa Bách Khoa',
      company: 'HUST',
      imageUrl: 'https://i.pravatar.cc/150?u=vu-hong-nhat',
      quote:
        'Mỗi lần phóng tên lửa, dù là mô hình, đều là một bài học quý giá về kỹ thuật, làm việc nhóm và xử lý thất bại. Chúng tôi đang xây dựng những viên gạch đầu tiên cho ngành hàng không vũ trụ Việt Nam.',
    },
    quizzes: [
      {
        question:
          'Theo phương trình tên lửa Tsiolkovsky, yếu tố nào sau đây KHÔNG ảnh hưởng trực tiếp đến delta-v (khả năng thay đổi vận tốc) của tên lửa?',
        options: [
          'Tỷ lệ khối lượng (khối lượng ban đầu / khối lượng cuối)',
          'Vận tốc phụt khí của động cơ',
          'Thời gian đốt cháy nhiên liệu',
          'Tất cả đều ảnh hưởng',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Phương trình Tsiolkovsky (Δv = Ve * ln(m0 / mf)) chỉ phụ thuộc vào vận tốc phụt khí (Ve) và logarit tự nhiên của tỷ lệ khối lượng (m0/mf). Thời gian đốt cháy ảnh hưởng đến lực đẩy và gia tốc, nhưng không trực tiếp quyết định tổng delta-v.',
      },
    ],
    faqs: [
      {
        question: 'Delta-v là gì và tại sao nó lại là một chỉ số quan trọng trong du hành vũ trụ?',
        answer:
          'Delta-v (Δv), hay "thay đổi vận tốc", là thước đo "ngân sách" cơ động của một tàu vũ trụ. Nó biểu thị tổng lượng thay đổi vận tốc mà một con tàu có thể thực hiện. Mọi thao tác trong không gian, từ việc cất cánh khỏi Trái Đất đến việc đi vào quỹ đạo một hành tinh khác, đều "tiêu tốn" một lượng delta-v nhất định.',
      },
      {
        question: 'Xung lực riêng (Specific Impulse - Isp) là gì?',
        answer:
          'Xung lực riêng là một thước đo hiệu quả của động cơ tên lửa. Nó cho biết động cơ có thể tạo ra bao nhiêu lực đẩy từ một lượng nhiên liệu nhất định trong một khoảng thời gian. Isp càng cao, động cơ càng hiệu quả.',
      },
      {
        question: 'Sự khác biệt giữa động cơ tên lửa nhiên liệu lỏng và rắn là gì?',
        answer:
          'Động cơ nhiên liệu rắn đơn giản, đáng tin cậy và cung cấp lực đẩy lớn, nhưng một khi đã được kích hoạt thì không thể tắt hoặc điều chỉnh. Động cơ nhiên liệu lỏng phức tạp hơn nhưng cho phép điều chỉnh lực đẩy và có thể tắt/bật lại, mang lại khả năng điều khiển tốt hơn.',
      },
      {
        question: 'Động cơ đẩy ion hoạt động như thế nào?',
        answer:
          'Động cơ đẩy ion sử dụng điện trường để gia tốc các ion (nguyên tử tích điện) ra khỏi động cơ với tốc độ cực cao. Chúng tạo ra lực đẩy rất nhỏ nhưng cực kỳ hiệu quả về mặt nhiên liệu (Isp rất cao), lý tưởng cho các sứ mệnh du hành không gian sâu và dài ngày.',
      },
      {
        question: 'Tại sao tên lửa cần nhiều tầng?',
        answer:
          'Tên lửa sử dụng nhiều tầng để loại bỏ khối lượng không cần thiết (vỏ bình nhiên liệu rỗng của tầng trước) trong quá trình bay. Điều này làm tăng tỷ lệ khối lượng (m0/mf) cho các tầng còn lại, giúp chúng đạt được delta-v cao hơn theo phương trình Tsiolkovsky.',
      },
      {
        question: 'Làm thế nào tên lửa tái sử dụng của SpaceX có thể hạ cánh?',
        answer:
          'Sau khi tách ra, tầng đầu tiên sử dụng các động cơ đẩy nhỏ để định hướng lại, các vây lưới (grid fins) để điều khiển khí động học khi quay lại bầu khí quyển, và thực hiện một cú "đốt hạ cánh" (landing burn) ngay trước khi chạm đất để giảm tốc độ và hạ cánh nhẹ nhàng trên các chân đáp.',
      },
      {
        question: 'Nhiên liệu Hypergolic là gì?',
        answer:
          'Là một loại nhiên liệu tên lửa bao gồm hai chất (nhiên liệu và chất oxy hóa) sẽ tự động bốc cháy ngay khi tiếp xúc với nhau. Điều này làm cho động cơ rất đáng tin cậy vì không cần hệ thống đánh lửa phức tạp, rất hữu ích cho các động cơ cần phải khởi động lại trong không gian.',
      },
      {
        question: 'Aerospike engine là gì và ưu điểm của nó là gì?',
        answer:
          'Là một loại động cơ tên lửa có hình dạng vòi phun độc đáo, cho phép nó tự điều chỉnh để duy trì hiệu quả ở các độ cao và áp suất khí quyển khác nhau. Về lý thuyết, nó hiệu quả hơn các động cơ hình chuông truyền thống.',
      },
      {
        question: 'Tương lai của hệ thống đẩy trong không gian là gì?',
        answer:
          'Các công nghệ tương lai đầy hứa hẹn bao gồm động cơ đẩy hạt nhân (cung cấp lực đẩy và hiệu quả cao), cánh buồm mặt trời (sử dụng áp suất từ ánh sáng mặt trời để di chuyển), và các khái niệm xa hơn như động cơ nhiệt hạch hoặc động cơ EmDrive vẫn đang được nghiên cứu.',
      },
      {
        question: 'Phương trình tên lửa Tsiolkovsky có ý nghĩa gì?',
        answer:
          'Đây là phương trình nền tảng của du hành vũ trụ, cho thấy mối quan hệ giữa delta-v (khả năng thay đổi vận tốc của tên lửa), vận tốc phụt khí của động cơ, và tỷ lệ khối lượng (khối lượng ban đầu so với khối lượng cuối cùng). Nó giải thích tại sao việc làm cho tên lửa nhẹ hơn và có động cơ hiệu quả hơn lại cực kỳ quan trọng.',
      },
    ],
  },
];

export const spaceExplorationModuleData: ModuleData = {
  id: 'space-exploration',
  title: 'Space Exploration & Technology',
  subtitle: 'Khám phá vũ trụ 3D',
  description: 'Tìm hiểu space science, rocket engineering và satellite technology',
  category: 'science',
  icon: '🚀',
  color: 'from-indigo-600 to-purple-600',
  level: 'Trung bình',
  duration: '12-15 giờ',
  features: ['Space Fundamentals', 'Rocket Science', 'Satellite Technology', 'Space Colonization'],
  prerequisites: ['Physics fundamentals', 'Mathematics: calculus', 'Engineering principles', 'Scientific curiosity'],
  objectives: [
    'Hiểu các nguyên tắc cơ bản của khoa học vũ trụ và du hành không gian.',
    'Phân tích các hệ thống đẩy và thiết kế tên lửa.',
    'Nắm vững công nghệ vệ tinh và các ứng dụng của nó.',
    'Thảo luận về tương lai của việc khám phá và thuộc địa hóa không gian.',
  ],
  careerOutcomes: [
    'Kỹ sư hàng không vũ trụ',
    'Nhà khoa học dữ liệu không gian',
    'Chuyên gia vận hành vệ tinh',
    'Nhà phân tích nhiệm vụ không gian',
  ],
  industryApplications: [
    { name: 'Viễn thông', description: 'Phát triển và vận hành các chòm sao vệ tinh internet.' },
    { name: 'Quan sát Trái Đất', description: 'Sử dụng dữ liệu vệ tinh để theo dõi biến đổi khí hậu, nông nghiệp.' },
    { name: 'Quốc phòng', description: 'Công nghệ tên lửa, vệ tinh do thám và định vị toàn cầu.' },
    { name: 'Du lịch vũ trụ', description: 'Phát triển các phương tiện và cơ sở hạ tầng cho du lịch không gian.' },
  ],
  marketDemand: {
    averageSalary: '2500-6000 USD/tháng',
    jobGrowth: '8% mỗi năm',
    hireDemand: 'Cao',
  },
  relatedModules: ['physics-of-flight', 'rocket-science', 'satellite-communication'],
  lessons: spaceLessons,
};
