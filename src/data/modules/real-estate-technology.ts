import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';
import { K2Module } from '@/data/k2-modules';

export interface RealEstateTechLesson extends BaseLessonData {
  measurableROI?: Array<{
    metric: string;
    description: string;
  }>;
  vietnamContext?: {
    title: string;
    content: string[];
  };
  careerConnect?: {
    name: string;
    title: string;
    company: string;
    imageUrl: string;
    quote: string;
  };
  quizzes?: Array<{
    question: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
  }>;
}

const lessons: RealEstateTechLesson[] = [
  {
    id: 'proptech-innovation-fundamentals',
    title: 'Đổi mới PropTech & Chuyển đổi số Cơ bản',
    description:
      'Khám phá cuộc cách mạng PropTech đang thay đổi ngành bất động sản toàn cầu. Từ các ứng dụng di động đến định giá bằng AI, hồ sơ bất động sản trên blockchain đến hợp đồng thông minh. Tìm hiểu các xu hướng, công nghệ và mô hình kinh doanh đang định hình lại ngành bất động sản.',
    duration: '190 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=eZ7b5Phuk7g',
    imageUrl: 'https://i.ytimg.com/vi/eZ7b5Phuk7g/hqdefault.jpg',
    objectives: [
      'Hiểu hệ sinh thái PropTech và các bên liên quan chính trên thị trường toàn cầu',
      'Phân tích các công nghệ đột phá đang thay đổi chuỗi giá trị bất động sản',
      'Đánh giá cơ hội và thách thức trong đổi mới PropTech',
      'Thiết kế lộ trình chuyển đổi số cho các doanh nghiệp bất động sản',
      'Triển khai các giải pháp công nghệ để cải thiện hiệu quả và trải nghiệm khách hàng',
    ],
    prerequisites: [
      'Kiến thức cơ bản về thị trường bất động sản và giao dịch nhà đất',
      'Hiểu biết về công nghệ số và ứng dụng di động',
      'Hiểu biết cơ bản về fintech và dịch vụ tài chính',
    ],
    exercises: [
      {
        title: 'Phân tích Thị trường PropTech & Đánh giá Cơ hội',
        description: 'Phân tích thị trường PropTech Việt Nam và xác định các cơ hội tăng trưởng.',
        difficulty: 'Trung bình',
        materials: [
          'Cơ sở dữ liệu nghiên cứu thị trường',
          'Cơ sở dữ liệu các công ty PropTech',
          'Báo cáo thị trường bất động sản',
          'Các khung phân tích ngành',
        ],
        procedure: [
          'Nghiên cứu các xu hướng PropTech toàn cầu và các mô hình kinh doanh thành công',
          'Phân tích các "điểm đau" của thị trường bất động sản Việt Nam',
          'Lập bản đồ các công ty PropTech chủ chốt trong hệ sinh thái Việt Nam',
          'Xác định các phân khúc thị trường chưa được phục vụ và các khoảng trống công nghệ',
          'Đánh giá môi trường pháp lý và các yêu cầu tuân thủ',
          'Đánh giá quy mô thị trường và tiềm năng doanh thu cho các mảng PropTech khác nhau',
          'Tạo báo cáo cơ hội PropTech toàn diện',
        ],
        expectedResults:
          'Một bản phân tích thị trường chi tiết với hơn 5 cơ hội PropTech đã được xác thực cho thị trường Việt Nam.',
        solution:
          'Sử dụng các khung phân tích như SWOT, Năm lực lượng cạnh tranh của Porter và định cỡ thị trường TAM-SAM-SOM. Nghiên cứu các công ty như PropertyGuru, Batdongsan.com.vn và các công ty quốc tế như Zillow, Compass để hiểu các thông lệ tốt nhất.',
      },
      {
        title: 'Thiết kế Nền tảng Bất động sản Số',
        description: 'Thiết kế một nền tảng số toàn diện cho các giao dịch bất động sản.',
        difficulty: 'Cao',
        materials: [
          'Công cụ thiết kế UI/UX',
          'Phần mềm thiết kế cơ sở dữ liệu',
          'Tài liệu API',
          'Thông tin chi tiết từ nghiên cứu người dùng',
        ],
        procedure: [
          'Tiến hành nghiên cứu người dùng với người mua, người bán, môi giới và chủ đầu tư',
          'Thiết kế luồng trải nghiệm người dùng cho các hành trình của các bên liên quan khác nhau',
          'Tạo wireframe và các nguyên mẫu tương tác',
          'Lập kế hoạch kiến trúc cơ sở dữ liệu cho danh sách bất động sản và quản lý người dùng',
          'Thiết kế các điểm cuối API cho ứng dụng di động và tích hợp của bên thứ ba',
          'Triển khai các biện pháp bảo mật cho các giao dịch tài chính',
          'Lập kế hoạch các chiến lược tối ưu hóa hiệu suất và khả năng mở rộng',
        ],
        expectedResults:
          'Một thiết kế nền tảng hoàn chỉnh với các thông số kỹ thuật và giao diện đã được người dùng kiểm thử.',
        solution:
          'Thực hiện theo phương pháp tư duy thiết kế với cách tiếp cận lấy con người làm trung tâm. Sử dụng các công cụ như Figma để thiết kế UI, Draw.io cho kiến trúc hệ thống và Postman cho tài liệu API. Cân nhắc kiến trúc microservices để có khả năng mở rộng.',
      },
    ],
    realWorldApplications: [
      'Zillow đã cách mạng hóa việc tìm kiếm bất động sản với các mô hình định giá tự động (AVM)',
      'Opendoor đã tạo ra nền tảng mua nhà tức thì với giá cả dựa trên dữ liệu',
      'WeWork đã thay đổi bất động sản thương mại với các khái niệm không gian làm việc linh hoạt',
      'Compass sử dụng AI để kết nối môi giới với các khách hàng tiềm năng đủ điều kiện và tối ưu hóa tiếp thị',
    ],
    caseStudies: [
      {
        title: 'Chuyển đổi số của PropertyGuru tại Đông Nam Á',
        organization: 'Tập đoàn PropertyGuru',
        problem:
          'Các thị trường bất động sản phân mảnh trên khắp Đông Nam Á với việc áp dụng kỹ thuật số và tính minh bạch còn hạn chế',
        solution:
          'Nền tảng PropTech toàn diện với danh sách bất động sản, công cụ cho môi giới, dịch vụ tài chính và phân tích dữ liệu',
        impact:
          'Hơn 30 triệu danh sách bất động sản, hơn 25 triệu người dùng hàng tháng, mở rộng ra 4 quốc gia, định giá IPO 1,8 tỷ USD',
        innovations: [
          'Tìm kiếm bất động sản ưu tiên thiết bị di động',
          'Công cụ tăng năng suất cho môi giới',
          'Tích hợp thị trường thế chấp',
          'Phân tích dữ liệu bất động sản',
        ],
      },
    ],
    resources: [
      {
        title: 'PropTech101 - Tổng quan về ngành',
        url: 'https://www.proptech101.com/',
        type: 'Nền tảng',
      },
      {
        title: 'Trung tâm Kỹ thuật số Xây dựng Anh',
        url: 'https://www.cdbb.cam.ac.uk/',
        type: 'Nghiên cứu',
      },
    ],
    vietnamContext: {
      title: 'Sự bùng nổ PropTech tại Việt Nam',
      content: [
        'Thị trường PropTech Việt Nam đang phát triển nhanh chóng, được thúc đẩy bởi dân số trẻ, am hiểu công nghệ và tốc độ đô thị hóa cao. Các nền tảng như Batdongsan.com.vn (thuộc PropertyGuru) và Rever đã trở thành những công cụ không thể thiếu.',
        'Thách thức lớn nhất là tính minh bạch của thị trường và dữ liệu phân mảnh. Các startup PropTech thành công là những startup giải quyết được bài toán này, cung cấp thông tin đáng tin cậy và quy trình giao dịch mượt mà cho người dùng.',
      ],
    },
    careerConnect: {
      name: 'Ông Phan Lê Thành Long',
      title: 'Nhà sáng lập & CEO, Rever',
      company: 'Rever.vn',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Công nghệ không thay thế môi giới, mà nó trao quyền cho những môi giới giỏi nhất. Sứ mệnh của chúng tôi là xây dựng một nền tảng công nghệ minh bạch, hiệu quả cho cả người mua, người bán và nhà môi giới tại Việt Nam.',
    },
    quizzes: [
      {
        question: 'PropTech là viết tắt của từ gì?',
        options: ['Property Technology', 'Proper Technology', 'Proposition Technology', 'Propaganda Technology'],
        correctAnswerIndex: 0,
        explanation:
          'PropTech là sự kết hợp giữa Property (Bất động sản) và Technology (Công nghệ), chỉ việc ứng dụng công nghệ vào ngành bất động sản.',
      },
      {
        question:
          'Đâu là một trong những "điểm đau" lớn nhất của thị trường BĐS Việt Nam mà PropTech đang cố gắng giải quyết?',
        options: [
          'Giá nhà quá cao',
          'Thiếu các dự án cao cấp',
          'Thiếu minh bạch thông tin và quy trình phức tạp',
          'Quá nhiều môi giới',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Sự thiếu minh bạch về giá, pháp lý và quy hoạch, cùng với các thủ tục giấy tờ phức tạp là những rào cản lớn mà các nền tảng PropTech đang nỗ lực đơn giản hóa và cải thiện.',
      },
    ],
    faqs: [
      {
        question: 'PropTech là gì và nó ảnh hưởng đến ngành bất động sản như thế nào?',
        answer:
          'PropTech (Property Technology) là việc ứng dụng công nghệ và đổi mới vào ngành bất động sản. Nó ảnh hưởng đến mọi khía cạnh, từ tìm kiếm, mua bán, cho thuê, quản lý đến đầu tư bất động sản, giúp quy trình trở nên hiệu quả, minh bạch và dễ tiếp cận hơn.',
      },
      {
        question: 'Tại sao chuyển đổi số lại quan trọng đối với các công ty bất động sản?',
        answer:
          'Chuyển đổi số giúp các công ty bất động sản tối ưu hóa hoạt động, giảm chi phí, tiếp cận được nhiều khách hàng hơn, và cung cấp trải nghiệm tốt hơn. Trong một thị trường cạnh tranh, việc không áp dụng công nghệ có thể dẫn đến việc bị tụt hậu.',
      },
      {
        question: 'Một vài ví dụ về công nghệ đột phá trong PropTech là gì?',
        answer:
          'Các công nghệ đột phá bao gồm Trí tuệ nhân tạo (AI) để định giá và phân tích, Thực tế ảo (VR/AR) cho các chuyến tham quan ảo, Internet of Things (IoT) cho các tòa nhà thông minh, và Blockchain cho các giao dịch an toàn và minh bạch.',
      },
      {
        question: 'Làm thế nào để một công ty bất động sản truyền thống có thể bắt đầu chuyển đổi số?',
        answer:
          'Họ có thể bắt đầu bằng những bước nhỏ như xây dựng một website chuyên nghiệp, sử dụng hệ thống quản lý quan hệ khách hàng (CRM), áp dụng các công cụ tiếp thị kỹ thuật số, và sau đó dần dần tích hợp các công nghệ phức tạp hơn như tour ảo 360 độ hoặc phân tích dữ liệu.',
      },
      {
        question: 'Thách thức lớn nhất khi triển khai PropTech là gì?',
        answer:
          'Các thách thức bao gồm chi phí đầu tư ban đầu, sự thay đổi trong tư duy và văn hóa của tổ chức, vấn đề bảo mật dữ liệu, và việc tích hợp các công nghệ mới vào các quy trình làm việc hiện có. Tại Việt Nam, hành lang pháp lý chưa hoàn thiện cũng là một rào cản.',
      },
      {
        question: 'FinTech có liên quan gì đến PropTech?',
        answer:
          'FinTech (Financial Technology) và PropTech có mối quan hệ chặt chẽ. Các giải pháp FinTech như cho vay thế chấp trực tuyến, thanh toán kỹ thuật số, và các nền tảng đầu tư chung (crowdfunding) đang được tích hợp vào các nền tảng PropTech để tạo ra một quy trình giao dịch bất động sản liền mạch.',
      },
      {
        question: 'Mô hình kinh doanh "iBuyer" như Opendoor hoạt động như thế nào?',
        answer:
          'iBuyer (instant buyer) là các công ty sử dụng công nghệ để đưa ra lời đề nghị mua nhà ngay lập tức cho người bán. Họ sử dụng các thuật toán để định giá và sau đó sửa chữa, bán lại ngôi nhà để kiếm lời, mang lại sự tiện lợi và nhanh chóng cho người bán.',
      },
      {
        question: 'Công nghệ có thay thế hoàn toàn các nhà môi giới bất động sản không?',
        answer:
          'Hầu hết các chuyên gia tin rằng công nghệ sẽ không thay thế hoàn toàn mà sẽ trao quyền cho các nhà môi giới. Công nghệ giúp môi giới tự động hóa các công việc lặp đi lặp lại, tiếp cận nhiều khách hàng hơn và cung cấp dịch vụ tư vấn chuyên sâu hơn, thay vì chỉ là người cung cấp thông tin.',
      },
      {
        question: 'Hệ sinh thái PropTech bao gồm những thành phần nào?',
        answer:
          'Hệ sinh thái PropTech rất đa dạng, bao gồm các nền tảng niêm yết (listing platforms), công nghệ cho thuê và quản lý tài sản, công nghệ xây dựng (ConTech), công nghệ tài chính cho BĐS (FinTech), và các công cụ dành cho môi giới.',
      },
      {
        question: 'Xu hướng nào đang định hình tương lai của PropTech?',
        answer:
          'Các xu hướng chính bao gồm sự bền vững và công nghệ xanh trong các tòa nhà, việc sử dụng AI và dữ liệu lớn để ra quyết định, sự phát triển của các thành phố thông minh, và việc mã hóa bất động sản trên blockchain để dân chủ hóa đầu tư.',
      },
    ],
  },

  {
    id: 'virtual-property-tours-360-vr',
    title: 'Tham quan ảo 360° & Công nghệ xem nhà bằng VR',
    description:
      'Làm chủ nghệ thuật tạo ra trải nghiệm bất động sản ảo sống động. Từ chụp ảnh 360°, phát triển các chuyến tham quan VR đến các sơ đồ mặt bằng tương tác và dàn dựng thực tế tăng cường. Học cách sử dụng Matterport, CloudPano và phát triển VR tùy chỉnh để cách mạng hóa tiếp thị bất động sản.',
    duration: '220 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=LIuMSgU_Zq0',
    imageUrl: 'https://i.ytimg.com/vi/LIuMSgU_Zq0/hqdefault.jpg',
    objectives: [
      'Làm chủ các kỹ thuật chụp ảnh 360° và thiết lập thiết bị',
      'Phát triển các chuyến tham quan bất động sản VR bằng các nền tảng chuyên nghiệp',
      'Tạo sơ đồ mặt bằng tương tác với các điểm nóng có thể nhấp',
      'Triển khai các công cụ dàn dựng và trực quan hóa nội thất AR',
      'Tối ưu hóa các chuyến tham quan ảo cho thiết bị di động và chia sẻ trên mạng xã hội',
    ],
    prerequisites: [
      'Kỹ năng chụp ảnh cơ bản và hiểu biết về các nguyên tắc chiếu sáng',
      'Quen thuộc với các khái niệm mô hình 3D và nhận thức không gian',
      'Kinh nghiệm phát triển web hoặc sản xuất đa phương tiện',
    ],
    exercises: [
      {
        title: 'Quy trình Chụp ảnh Bất động sản 360° Chuyên nghiệp',
        description: 'Thiết lập quy trình làm việc hoàn chỉnh để chụp và xử lý hình ảnh bất động sản 360°.',
        difficulty: 'Trung bình',
        materials: [
          'Máy ảnh 360° (Insta360, Ricoh Theta)',
          'Chân máy và thiết bị ổn định',
          'Thiết bị chiếu sáng',
          'Phần mềm xử lý hậu kỳ',
        ],
        procedure: [
          'Lập kế hoạch các vị trí chụp tối ưu và chiến lược đặt máy ảnh',
          'Thiết lập ánh sáng để giảm thiểu bóng và đảm bảo độ phơi sáng nhất quán',
          'Chụp ảnh 360° với độ chồng chéo và độ bao phủ phù hợp',
          'Xử lý ảnh thô 360° bằng phần mềm ghép ảnh',
          'Chỉnh màu và nâng cao chất lượng hình ảnh',
          'Thêm các điểm nóng tương tác và lớp phủ thông tin',
          'Tải lên và nhúng các chuyến tham quan trên trang web và các nền tảng niêm yết',
        ],
        expectedResults:
          'Một chuyến tham quan bất động sản 360° chuyên nghiệp với điều hướng liền mạch và hình ảnh chất lượng cao.',
        solution:
          'Sử dụng kỹ thuật chụp ảnh HDR để có được ánh sáng tối ưu. Các công cụ như PTGui để ghép ảnh nâng cao, Adobe Lightroom để chỉnh màu và Kuula hoặc Roundme để lưu trữ các chuyến tham quan.',
      },
      {
        title: 'Phát triển Ứng dụng Bất động sản VR Tùy chỉnh',
        description: 'Phát triển ứng dụng VR cho trải nghiệm xem bất động sản sống động.',
        difficulty: 'Cao',
        materials: [
          'Unity 3D hoặc Unreal Engine',
          'Kính thực tế ảo (Oculus, HTC Vive)',
          'Mô hình 3D của bất động sản',
          'SDK và công cụ phát triển VR',
        ],
        procedure: [
          'Nhập mô hình 3D của bất động sản hoặc tạo từ ảnh 360°',
          'Thiết lập dự án VR với tỷ lệ và cài đặt thoải mái phù hợp',
          'Triển khai hệ thống dịch chuyển tức thời và di chuyển mượt mà',
          'Thêm các yếu tố tương tác như cửa, cửa sổ, điều khiển ánh sáng',
          'Tạo các yếu tố giao diện người dùng cho thông tin bất động sản và điều hướng',
          'Tối ưu hóa hiệu suất để có trải nghiệm VR mượt mà',
          'Kiểm tra với nhiều nền tảng và thiết bị VR',
          'Triển khai và phân phối qua các cửa hàng ứng dụng VR',
        ],
        expectedResults:
          'Một ứng dụng VR tùy chỉnh với hình ảnh bất động sản thực tế và điều khiển điều hướng trực quan.',
        solution:
          'Unity với XR Toolkit cung cấp khả năng phát triển VR đa nền tảng. Sử dụng các công cụ đo ảnh như RealityCapture để tạo mô hình 3D thực tế từ ảnh. Triển khai các mẫu tương tác VR thoải mái để tránh say tàu xe.',
      },
    ],
    realWorldApplications: [
      'Redfin tích hợp các chuyến tham quan nhà 3D vào các trang niêm yết để tăng tương tác của người dùng',
      'Các đại lý của RE/MAX sử dụng Matterport để tạo các bài thuyết trình niêm yết cao cấp',
      "Sotheby's International Realty cung cấp trải nghiệm VR cho các bất động sản sang trọng",
      'Keller Williams cung cấp đào tạo VR cho các đại lý sử dụng các công cụ niêm yết ảo',
    ],
    caseStudies: [
      {
        title: 'Việc áp dụng Tham quan ảo 3D của Matterport trong đại dịch COVID-19',
        organization: 'Matterport Inc.',
        problem:
          'Các hạn chế do COVID-19 đã ngăn cản việc xem nhà trực tiếp, gây ra sự chậm lại của thị trường bất động sản',
        solution: 'Triển khai nhanh chóng công nghệ tham quan ảo 3D với các khả năng chia sẻ nâng cao',
        impact: 'Tăng 400% việc tạo tham quan ảo, IPO 640 triệu USD, hợp tác với các thương hiệu bất động sản lớn',
        innovations: [
          'Tạo sơ đồ mặt bằng bằng AI',
          'Khả năng dàn dựng ảo',
          'Bảng điều khiển phân tích để theo dõi tương tác',
          'Tương thích VR trên di động',
        ],
      },
    ],
    resources: [
      {
        title: 'Học viện Matterport',
        url: 'https://matterport.com/academy',
        type: 'Đào tạo',
      },
      {
        title: 'Hướng dẫn Chụp ảnh 360°',
        url: 'https://www.360cities.net/blog',
        type: 'Hướng dẫn',
      },
    ],
    vietnamContext: {
      title: 'Tham quan ảo: Xu hướng tất yếu của BĐS Việt Nam',
      content: [
        'Đại dịch COVID-19 đã thúc đẩy mạnh mẽ việc áp dụng công nghệ tham quan ảo (virtual tour) tại Việt Nam. Các chủ đầu tư lớn như Vinhomes, Novaland, Sun Group đã tích hợp 360° tours và sa bàn ảo vào website của họ để tiếp cận khách hàng từ xa.',
        'Công nghệ này đặc biệt hiệu quả với phân khúc bất động sản nghỉ dưỡng và khách hàng ở nước ngoài, giúp họ trải nghiệm không gian một cách chân thực trước khi đưa ra quyết định đầu tư.',
      ],
    },
    careerConnect: {
      name: 'Chị Nguyễn Ngọc Anh',
      title: 'Giám đốc Sáng tạo',
      company: 'VR360.com.vn (hư cấu)',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Chúng tôi không chỉ bán một căn nhà, chúng tôi bán một giấc mơ, một không gian sống. Công nghệ VR/360° cho phép chúng tôi truyền tải giấc mơ đó một cách trọn vẹn và đầy cảm xúc nhất đến với khách hàng, dù họ ở bất cứ đâu.',
    },
    quizzes: [
      {
        question: 'Nền tảng nào sau đây rất phổ biến để tạo các tour tham quan 3D cho bất động sản?',
        options: ['Photoshop', 'Matterport', 'AutoCAD', 'Excel'],
        correctAnswerIndex: 1,
        explanation:
          'Matterport là một nền tảng hàng đầu thế giới, cung cấp cả phần cứng (camera 3D) và phần mềm để tạo ra các mô hình 3D (digital twin) và tour tham quan ảo cho không gian vật lý.',
      },
      {
        question: 'Lợi ích chính của việc sử dụng virtual tour đối với người bán/chủ đầu tư là gì?',
        options: [
          'Tăng giá bán của bất động sản',
          'Tiếp cận được lượng khách hàng tiềm năng lớn hơn và sàng lọc khách hàng hiệu quả',
          'Thay thế hoàn toàn vai trò của môi giới',
          'Chỉ phù hợp với các bất động sản giá rẻ',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Virtual tour giúp tiếp cận khách hàng 24/7 trên toàn cầu, đồng thời giúp sàng lọc những khách hàng thực sự quan tâm, tiết kiệm thời gian và chi phí cho các buổi tham quan thực tế không cần thiết.',
      },
    ],
    faqs: [
      {
        question: 'Sự khác biệt giữa tour 360°, VR tour và AR là gì?',
        answer:
          'Tour 360° là một chuỗi các hình ảnh toàn cảnh được ghép lại, cho phép bạn nhìn xung quanh từ một điểm cố định. VR (Thực tế ảo) tour đưa bạn vào một môi trường 3D hoàn toàn, thường yêu cầu kính VR để có trải nghiệm đắm chìm. AR (Thực tế tăng cường) phủ thông tin hoặc vật thể ảo lên thế giới thực thông qua camera của điện thoại hoặc máy tính bảng.',
      },
      {
        question: 'Tôi có cần thiết bị đắt tiền để tạo một tour 360° không?',
        answer:
          'Không nhất thiết. Bạn có thể bắt đầu với một chiếc máy ảnh 360° dành cho người tiêu dùng như Insta360 hoặc Ricoh Theta. Chất lượng có thể không bằng các hệ thống chuyên nghiệp như Matterport, nhưng nó là một điểm khởi đầu tốt và chi phí hợp lý.',
      },
      {
        question: 'Dàn dựng ảo (virtual staging) là gì?',
        answer:
          'Dàn dựng ảo là quá trình sử dụng phần mềm để thêm đồ nội thất và trang trí vào hình ảnh của một căn phòng trống. Điều này giúp người mua tiềm năng hình dung được không gian sống và làm cho bất động sản trở nên hấp dẫn hơn mà không cần chi phí cho việc dàn dựng vật lý.',
      },
      {
        question: 'Làm thế nào để một tour ảo có thể giúp bán bất động sản nhanh hơn?',
        answer:
          'Tour ảo cho phép bất động sản "mở cửa" 24/7, thu hút người mua từ khắp nơi trên thế giới. Nó giúp người mua có cái nhìn chi tiết và sàng lọc các lựa chọn trước khi đến xem trực tiếp, điều này có nghĩa là những người đến xem thực tế thường là những khách hàng nghiêm túc hơn.',
      },
      {
        question: 'Matterport là gì và tại sao nó lại phổ biến?',
        answer:
          'Matterport là một nền tảng tất cả trong một cung cấp camera chuyên dụng và phần mềm để tạo ra các "bản sao kỹ thuật số" (digital twins) 3D chính xác của một không gian. Nó phổ biến vì chất lượng cao, khả năng tạo sơ đồ mặt bằng tự động và trải nghiệm điều hướng mượt mà.',
      },
      {
        question: 'Công nghệ VR có thể được sử dụng cho các dự án bất động sản chưa được xây dựng không?',
        answer:
          'Chắc chắn rồi. Đây là một trong những ứng dụng mạnh mẽ nhất của VR. Các nhà phát triển có thể tạo ra các mô hình 3D của các dự án tương lai, cho phép khách hàng "đi bộ" trong căn hộ hoặc tòa nhà của họ trước cả khi nó được xây dựng, giúp thúc đẩy việc bán hàng trên giấy.',
      },
      {
        question: 'Những thách thức khi tạo một tour VR chất lượng cao là gì?',
        answer:
          'Các thách thức bao gồm việc tạo ra các mô hình 3D chân thực, tối ưu hóa hiệu suất để tránh gây chóng mặt cho người dùng (motion sickness), thiết kế cơ chế điều hướng trực quan, và chi phí sản xuất cao hơn so với chụp ảnh truyền thống.',
      },
      {
        question: 'Làm thế nào để tối ưu hóa một tour ảo cho thiết bị di động?',
        answer:
          'Cần đảm bảo rằng nền tảng lưu trữ tour ảo có thiết kế đáp ứng (responsive), các hình ảnh được nén để tải nhanh mà không làm giảm chất lượng quá nhiều, và các điều khiển điều hướng phải thân thiện với màn hình cảm ứng.',
      },
      {
        question: 'Sơ đồ mặt bằng tương tác (interactive floor plan) là gì?',
        answer:
          'Đó là một sơ đồ 2D hoặc 3D của bất động sản, nơi người dùng có thể nhấp vào một phòng cụ thể để "nhảy" ngay đến vị trí đó trong tour 360° hoặc xem hình ảnh của phòng đó. Nó cung cấp một cái nhìn tổng quan và cải thiện trải nghiệm điều hướng.',
      },
      {
        question: 'Tương lai của công nghệ xem nhà ảo sẽ như thế nào?',
        answer:
          'Tương lai có thể bao gồm các trải nghiệm VR xã hội (nhiều người cùng tham quan một lúc), tích hợp AI để trả lời câu hỏi của khách hàng trong tour, và sử dụng AR để cho phép người dùng thử các loại sơn hoặc đồ nội thất khác nhau trong thời gian thực.',
      },
    ],
  },

  {
    id: 'smart-buildings-iot-management',
    title: 'Tòa nhà Thông minh & Hệ thống Quản lý Bất động sản IoT',
    description:
      'Khám phá tương lai của quản lý tòa nhà với các cảm biến IoT, tự động hóa nhà thông minh và bảo trì dự đoán. Tìm hiểu cách tích hợp các hệ thống khác nhau từ HVAC, an ninh, chiếu sáng đến quản lý năng lượng. Làm chủ các nền tảng như SmartThings, Home Assistant và tự động hóa tòa nhà doanh nghiệp.',
    duration: '230 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=8zXaMnq8i80',
    imageUrl: 'https://i.ytimg.com/vi/8zXaMnq8i80/hqdefault.jpg',
    objectives: [
      'Thiết kế kiến trúc IoT toàn diện cho các tòa nhà thông minh',
      'Triển khai hệ thống tự động hóa tòa nhà với điều khiển tập trung',
      'Phát triển các thuật toán bảo trì dự đoán bằng dữ liệu cảm biến',
      'Tạo các chiến lược tối ưu hóa năng lượng với giám sát thời gian thực',
      'Xây dựng các nền tảng tương tác với người thuê nhà có các tính năng của tòa nhà thông minh',
    ],
    prerequisites: [
      'Hiểu biết về các giao thức IoT (WiFi, Zigbee, Z-Wave, LoRa)',
      'Kiến thức cơ bản về hệ thống điện và hoạt động của HVAC',
      'Kinh nghiệm lập trình với Python, Node.js hoặc các ngôn ngữ tương tự',
    ],
    exercises: [
      {
        title: 'Thiết kế Mạng Cảm biến IoT cho Tòa nhà Văn phòng',
        description: 'Thiết kế một mạng cảm biến toàn diện để giám sát và điều khiển hoạt động của tòa nhà.',
        difficulty: 'Cao',
        materials: [
          'Cảm biến IoT (nhiệt độ, độ ẩm, sự hiện diện)',
          'Thiết bị cổng và bộ định tuyến',
          'Tài khoản nền tảng IoT đám mây',
          'Sơ đồ mặt bằng tòa nhà',
        ],
        procedure: [
          'Phân tích sơ đồ tòa nhà và xác định vị trí đặt cảm biến tối ưu',
          'Chọn các giao thức IoT phù hợp dựa trên phạm vi và yêu cầu về năng lượng',
          'Thiết kế cấu trúc liên kết mạng với khả năng dự phòng và mở rộng',
          'Thiết lập nền tảng IoT đám mây để thu thập và phân tích dữ liệu',
          'Triển khai các quy tắc điều khiển tự động cho hệ thống HVAC và chiếu sáng',
          'Tạo bảng điều khiển cho người quản lý cơ sở và người vận hành tòa nhà',
          'Kiểm tra độ tin cậy và thời gian phản hồi của hệ thống',
          'Lập tài liệu về các quy trình bảo trì và hướng dẫn khắc phục sự cố',
        ],
        expectedResults:
          'Một mạng IoT hoạt động đầy đủ với khả năng giám sát thời gian thực và điều khiển tòa nhà tự động.',
        solution:
          'Sử dụng AWS IoT Core hoặc Azure IoT Hub để kết nối đám mây. LoRaWAN cho các cảm biến tầm xa, công suất thấp. Triển khai giao thức MQTT để truyền dữ liệu hiệu quả. Tạo một bản sao kỹ thuật số của tòa nhà trên đám mây.',
      },
      {
        title: 'Phát triển Hệ thống Bảo trì Dự đoán',
        description: 'Xây dựng một hệ thống dựa trên ML để dự đoán hỏng hóc thiết bị và tối ưu hóa lịch trình bảo trì.',
        difficulty: 'Cao',
        materials: [
          'Dữ liệu bảo trì lịch sử',
          'Nguồn cấp dữ liệu cảm biến thời gian thực',
          'Nền tảng học máy',
          'API phần mềm quản lý bảo trì',
        ],
        procedure: [
          'Thu thập và làm sạch dữ liệu hiệu suất thiết bị lịch sử',
          'Thiết kế các đặc trưng từ dữ liệu cảm biến (rung, nhiệt độ, kiểu sử dụng)',
          'Huấn luyện các mô hình ML để dự đoán xác suất hỏng hóc',
          'Phát triển hệ thống cảnh báo để thông báo sớm',
          'Tích hợp với các quy trình quản lý bảo trì hiện có',
          'Tạo các công cụ phân tích chi phí-lợi ích cho việc lập lịch bảo trì',
          'Triển khai các mô hình với khả năng học liên tục',
          'Xây dựng bảng điều khiển báo cáo cho các nhóm quản lý cơ sở',
        ],
        expectedResults: 'Một hệ thống bảo trì dự đoán với độ chính xác hơn 80% trong việc dự đoán hỏng hóc.',
        solution:
          'Sử dụng phân tích chuỗi thời gian với mạng nơ-ron LSTM. Azure Machine Learning hoặc AWS SageMaker để huấn luyện mô hình. Tích hợp với các hệ thống CMMS như UpKeep hoặc Fiix để quản lý lệnh công việc.',
      },
    ],
    realWorldApplications: [
      'Tòa nhà The Edge ở Amsterdam - văn phòng bền vững nhất thế giới với 28.000 cảm biến',
      'Hudson Yards ở NYC sử dụng IoT để tối ưu hóa việc sử dụng năng lượng cho toàn bộ khu phát triển',
      'Sáng kiến quốc gia thông minh của Singapore tích hợp các tòa nhà với mạng IoT toàn thành phố',
      'Các văn phòng của WeWork sử dụng cảm biến chiếm dụng để tối ưu hóa việc sử dụng không gian và trải nghiệm của thành viên',
    ],
    caseStudies: [
      {
        title: 'Triển khai Tòa nhà Thông minh Lotte Tower',
        organization: 'Lotte World Tower, Seoul',
        problem: 'Quản lý tòa tháp đa năng 123 tầng với các hệ thống phức tạp và chi phí năng lượng cao',
        solution: 'Hệ thống quản lý tòa nhà tích hợp với cảm biến IoT, phân tích AI và điều khiển tự động',
        impact: 'Tiết kiệm 30% năng lượng, giảm 50% hỏng hóc thiết bị, cải thiện điểm hài lòng của người thuê nhà',
        innovations: [
          'Tối ưu hóa HVAC bằng AI',
          'Bảo trì thang máy dự đoán',
          'Chiếu sáng thông minh với phát hiện chiếm dụng',
          'Ứng dụng di động cho các dịch vụ của người thuê nhà',
        ],
      },
    ],
    resources: [
      {
        title: 'Building IoT - Hướng dẫn về Tòa nhà Thông minh',
        url: 'https://www.buildingiot.com/',
        type: 'Nền tảng',
      },
      {
        title: 'Tạp chí Tòa nhà Thông minh',
        url: 'https://www.smartbuildingsmagazine.com/',
        type: 'Xuất bản',
      },
    ],
    vietnamContext: {
      title: 'Tòa nhà thông minh tại các Đô thị Việt Nam',
      content: [
        'Xu hướng "Smart Building" đang trở nên phổ biến tại các thành phố lớn như Hà Nội và TP.HCM, đặc biệt trong các dự án văn phòng hạng A và chung cư cao cấp. Các khu đô thị mới như Ecopark, Phú Mỹ Hưng đang tiên phong áp dụng các giải pháp IoT.',
        'Chính phủ Việt Nam cũng đang thúc đẩy các sáng kiến "Thành phố thông minh", trong đó tòa nhà thông minh là một thành phần quan trọng, tập trung vào việc tối ưu hóa năng lượng, quản lý an ninh và nâng cao chất lượng sống cho cư dân.',
      ],
    },
    careerConnect: {
      name: 'Anh Lê Hoàng Minh',
      title: 'Giám đốc Kỹ thuật Tòa nhà',
      company: 'Lotte Center Hanoi',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Quản lý một tòa nhà hiện đại không còn là công việc thủ công. Chúng tôi dựa vào dữ liệu từ hàng ngàn cảm biến để đưa ra quyết định, từ việc điều chỉnh nhiệt độ đến dự báo thời điểm cần bảo trì thang máy. Đó là sự kết hợp giữa kỹ thuật và khoa học dữ liệu.',
    },
    quizzes: [
      {
        question: 'IoT trong "Smart Building" là viết tắt của cụm từ nào?',
        options: [
          'Internal Office Technology',
          'Internet of Things',
          'Integrated Office Tools',
          'International Office Treaty',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Internet of Things (Vạn vật kết nối) là mạng lưới các thiết bị vật lý được tích hợp cảm biến, phần mềm và công nghệ khác để kết nối và trao đổi dữ liệu với nhau qua Internet.',
      },
      {
        question: 'Một lợi ích chính của hệ thống quản lý tòa nhà thông minh (BMS) là gì?',
        options: [
          'Giảm giá thuê văn phòng',
          'Tăng số lượng người làm việc trong tòa nhà',
          'Tối ưu hóa việc sử dụng năng lượng và giảm chi phí vận hành',
          'Làm cho tòa nhà trông đẹp hơn',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Bằng cách tự động điều khiển hệ thống chiếu sáng, HVAC (điều hòa không khí) dựa trên dữ liệu thời gian thực (như số người trong phòng), BMS có thể giúp giảm đáng kể lượng năng lượng tiêu thụ.',
      },
    ],
    faqs: [
      {
        question: 'Tòa nhà thông minh (Smart Building) là gì?',
        answer:
          'Tòa nhà thông minh là một công trình sử dụng công nghệ để tự động hóa và tích hợp các hệ thống của tòa nhà, bao gồm HVAC (sưởi, thông gió, điều hòa không khí), chiếu sáng, an ninh, và nhiều hệ thống khác, nhằm mục đích tăng hiệu quả vận hành, tiết kiệm năng lượng và nâng cao trải nghiệm cho người sử dụng.',
      },
      {
        question: 'IoT đóng vai trò gì trong các tòa nhà thông minh?',
        answer:
          'IoT (Internet of Things) là xương sống của tòa nhà thông minh. Nó bao gồm một mạng lưới các cảm biến (nhiệt độ, ánh sáng, chuyển động, chất lượng không khí...) và các thiết bị được kết nối để thu thập dữ liệu thời gian thực và cho phép điều khiển các hệ thống của tòa nhà từ xa.',
      },
      {
        question: 'Bảo trì dự đoán (predictive maintenance) hoạt động như thế nào?',
        answer:
          'Bảo trì dự đoán sử dụng dữ liệu từ các cảm biến IoT (ví dụ: độ rung, nhiệt độ của một động cơ) và các thuật toán học máy để dự đoán khi nào một thiết bị có khả năng bị hỏng. Điều này cho phép việc bảo trì được thực hiện trước khi sự cố xảy ra, giúp giảm thời gian chết và chi phí sửa chữa.',
      },
      {
        question: 'Các giao thức kết nối phổ biến cho các thiết bị IoT trong tòa nhà là gì?',
        answer:
          'Các giao thức phổ biến bao gồm Wi-Fi (cho băng thông cao), Zigbee và Z-Wave (cho các mạng lưới cảm biến tiêu thụ ít năng lượng), và LoRaWAN (cho các ứng dụng tầm xa, xuyên tường tốt). Việc lựa chọn phụ thuộc vào yêu cầu cụ thể của ứng dụng.',
      },
      {
        question: 'Làm thế nào một tòa nhà thông minh có thể cải thiện trải nghiệm của người thuê nhà?',
        answer:
          'Nó có thể cung cấp khả năng điều khiển cá nhân hóa về nhiệt độ và ánh sáng qua ứng dụng di động, tự động đặt phòng họp, hướng dẫn tìm chỗ đỗ xe trống, cải thiện chất lượng không khí, và tăng cường an ninh với hệ thống nhận dạng khuôn mặt.',
      },
      {
        question: 'Bản sao kỹ thuật số (Digital Twin) của một tòa nhà là gì?',
        answer:
          'Bản sao kỹ thuật số là một mô hình ảo, thời gian thực của một tòa nhà vật lý. Nó được cập nhật liên tục với dữ liệu từ các cảm biến IoT, cho phép người quản lý mô phỏng các kịch bản, theo dõi hiệu suất và tối ưu hóa hoạt động của tòa nhà một cách trực quan.',
      },
      {
        question: 'Những lo ngại về bảo mật đối với các tòa nhà thông minh là gì?',
        answer:
          'Với hàng ngàn thiết bị được kết nối, các tòa nhà thông minh có thể trở thành mục tiêu của các cuộc tấn công mạng. Kẻ tấn công có thể cố gắng chiếm quyền điều khiển các hệ thống của tòa nhà, đánh cắp dữ liệu nhạy cảm, hoặc gây ra gián đoạn vật lý. Do đó, an ninh mạng là một ưu tiên hàng đầu.',
      },
      {
        question: 'Hệ thống quản lý tòa nhà (BMS) là gì?',
        answer:
          'BMS (Building Management System) là một hệ thống điều khiển dựa trên máy tính được cài đặt trong các tòa nhà để kiểm soát và giám sát các thiết bị cơ và điện của tòa nhà như thông gió, chiếu sáng, điện, hệ thống chữa cháy và an ninh.',
      },
      {
        question: 'Tòa nhà thông minh có thể giúp tiết kiệm năng lượng như thế nào?',
        answer:
          'Bằng cách sử dụng cảm biến chiếm dụng để tự động tắt đèn và điều hòa ở những khu vực trống, điều chỉnh rèm cửa dựa trên ánh sáng mặt trời, và tối ưu hóa hoạt động của hệ thống HVAC dựa trên dự báo thời tiết và mô hình sử dụng của tòa nhà.',
      },
      {
        question: 'Tương lai của các tòa nhà thông minh sẽ như thế nào?',
        answer:
          'Tương lai sẽ chứng kiến các tòa nhà ngày càng tự chủ hơn, có khả năng học hỏi và thích ứng với hành vi của người dùng. Chúng sẽ được tích hợp sâu hơn vào lưới điện thông minh và các hệ sinh thái thành phố thông minh, đồng thời tập trung nhiều hơn vào sức khỏe và sự thoải mái của con người.',
      },
    ],
  },

  {
    id: 'real-estate-data-analytics-ai',
    title: 'Phân tích Dữ liệu Bất động sản & Trí tuệ Thị trường dựa trên AI',
    description:
      'Khai thác sức mạnh của dữ liệu lớn và trí tuệ nhân tạo để cách mạng hóa việc ra quyết định trong lĩnh vực bất động sản. Từ các mô hình định giá bất động sản, phân tích xu hướng thị trường đến phân tích đầu tư và đánh giá rủi ro. Làm chủ các công cụ như Python, Tableau và các nền tảng phân tích PropTech chuyên dụng.',
    duration: '200 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=U2oEJKsPdHo',
    imageUrl: 'https://i.ytimg.com/vi/U2oEJKsPdHo/hqdefault.jpg',
    objectives: [
      'Phát triển các mô hình định giá tự động (AVM) bằng học máy',
      'Tạo các bảng điều khiển phân tích thị trường toàn diện với dữ liệu thời gian thực',
      'Xây dựng các công cụ phân tích đầu tư với khả năng đánh giá rủi ro',
      'Triển khai các công cụ đề xuất bất động sản cho người mua và nhà đầu tư',
      'Thiết kế các mô hình dự đoán cho xu hướng thị trường và biến động giá',
    ],
    prerequisites: [
      'Nền tảng vững chắc về thống kê và phân tích dữ liệu',
      'Kỹ năng lập trình bằng Python, R hoặc SQL',
      'Hiểu biết về các nguyên tắc cơ bản của bất động sản và động lực thị trường',
    ],
    exercises: [
      {
        title: 'Phát triển Mô hình Định giá Tự động (AVM)',
        description: 'Xây dựng một mô hình ML để ước tính giá trị bất động sản dựa trên nhiều nguồn dữ liệu.',
        difficulty: 'Cao',
        materials: [
          'Dữ liệu giao dịch bất động sản',
          'Dữ liệu nhân khẩu học và kinh tế',
          'Môi trường phát triển Python/R',
          'Thư viện học máy',
        ],
        procedure: [
          'Thu thập dữ liệu bất động sản toàn diện từ nhiều nguồn (MLS, hồ sơ công khai, điều tra dân số)',
          'Làm sạch và tiền xử lý dữ liệu, xử lý các giá trị bị thiếu và các giá trị ngoại lệ',
          'Thiết kế các đặc trưng bao gồm vị trí, đặc điểm bất động sản, chỉ số khu vực lân cận',
          'Chia dữ liệu thành các tập huấn luyện, xác thực và kiểm tra',
          'Huấn luyện nhiều thuật toán ML (Random Forest, XGBoost, Mạng nơ-ron)',
          'Đánh giá hiệu suất mô hình với các chỉ số khác nhau (MAE, MAPE, R²)',
          'Triển khai các phương pháp tập hợp để kết hợp nhiều mô hình',
          'Triển khai mô hình với các điểm cuối API cho các yêu cầu định giá thời gian thực',
        ],
        expectedResults: 'Một AVM với độ chính xác trong vòng 10% giá trị thị trường cho 80% bất động sản.',
        solution:
          'Sử dụng các thuật toán tăng cường độ dốc như XGBoost hoặc LightGBM để có hiệu suất tốt nhất. Kết hợp dữ liệu bên ngoài như xếp hạng trường học, thống kê tội phạm, các chỉ số kinh tế. Sử dụng phân tích không gian địa lý để nắm bắt các khoản phí bảo hiểm vị trí.',
      },
      {
        title: 'Bảng điều khiển Trí tuệ Thị trường Bất động sản',
        description:
          'Tạo một bảng điều khiển toàn diện để phân tích xu hướng thị trường và thông tin chi tiết về đầu tư.',
        difficulty: 'Trung bình',
        materials: [
          'Giấy phép Tableau hoặc Power BI',
          'Dữ liệu thị trường bất động sản',
          'Dữ liệu chỉ số kinh tế',
          'Công cụ thu thập dữ liệu web',
        ],
        procedure: [
          'Xác định các chỉ số thị trường chính và các chỉ số hiệu suất',
          'Thiết lập các đường ống dữ liệu tự động từ các nguồn khác nhau',
          'Thiết kế bố cục bảng điều khiển thân thiện với người dùng cho các cá nhân người dùng khác nhau',
          'Triển khai các khả năng lọc và xem chi tiết tương tác',
          'Tạo các mô hình dự báo cho các dự đoán xu hướng thị trường',
          'Thêm hệ thống cảnh báo cho những thay đổi thị trường quan trọng',
          'Tích hợp với các thiết bị di động để truy cập khi đang di chuyển',
          'Kiểm tra bảng điều khiển với các chuyên gia bất động sản để thu thập phản hồi',
        ],
        expectedResults:
          'Một bảng điều khiển trí tuệ thị trường tương tác với các bản cập nhật thời gian thực và thông tin chi tiết dự đoán.',
        solution:
          'Sử dụng API từ các nền tảng bất động sản, cơ sở dữ liệu của chính phủ, các nhà cung cấp dữ liệu kinh tế. Triển khai các quy trình ETL với các công cụ như Apache Airflow. Tạo thiết kế đáp ứng trên thiết bị di động với một khung đáp ứng.',
      },
    ],
    realWorldApplications: [
      'Zestimate AVM của Zillow cung cấp định giá bất động sản tức thì cho hơn 100 triệu ngôi nhà',
      'BlackRock sử dụng phân tích AI để quản lý danh mục đầu tư bất động sản trị giá hơn 20 tỷ USD',
      'CoStar cung cấp nền tảng dữ liệu và phân tích bất động sản thương mại toàn diện',
      'Reonomy cung cấp trí tuệ bất động sản thương mại dựa trên AI cho các nhà đầu tư',
    ],
    caseStudies: [
      {
        title: 'Thành công của Nền tảng AI Bất động sản Compass',
        organization: 'Compass Real Estate',
        problem: 'Các đại lý bất động sản cần các công cụ tốt hơn để xác định cơ hội và phục vụ khách hàng hiệu quả',
        solution:
          'Nền tảng dựa trên AI với phân tích thị trường, chấm điểm khách hàng tiềm năng và các đề xuất khách hàng được cá nhân hóa',
        impact: 'Định giá IPO 6,9 tỷ USD, hơn 19.000 đại lý áp dụng, tăng 40% năng suất của đại lý',
        innovations: [
          'Thuật toán chấm điểm khách hàng tiềm năng theo hành vi',
          'Báo cáo phân tích thị trường tự động',
          'Kết nối khách hàng dựa trên AI',
          'Đề xuất giá dự đoán',
        ],
      },
    ],
    resources: [
      {
        title: 'Khóa học Phân tích Dữ liệu Bất động sản - MIT',
        url: 'https://mitsloan.mit.edu/',
        type: 'Giáo dục',
      },
      {
        title: 'REIS (Giải pháp Thông tin Bất động sản)',
        url: 'https://www.reis.com/',
        type: 'Nhà cung cấp dữ liệu',
      },
    ],
    vietnamContext: {
      title: 'Dữ liệu và AI trong ngành BĐS Việt Nam',
      content: [
        'Các công ty tư vấn BĐS lớn như Savills, CBRE, JLL tại Việt Nam đang ngày càng phụ thuộc vào phân tích dữ liệu để đưa ra các báo cáo thị trường và tư vấn đầu tư. Dữ liệu về giá, tỷ lệ hấp thụ, và xu hướng nhân khẩu học được sử dụng để dự báo tiềm năng của các dự án.',
        'Tuy nhiên, chất lượng và tính nhất quán của dữ liệu BĐS tại Việt Nam vẫn là một thách thức. Các công ty PropTech có khả năng thu thập và chuẩn hóa dữ liệu lớn (Big Data) sẽ có lợi thế cạnh tranh rất lớn.',
      ],
    },
    careerConnect: {
      name: 'Chị Vũ Thị Phương Mai',
      title: 'Trưởng phòng Phân tích Dữ liệu',
      company: 'Savills Việt Nam (hư cấu)',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Trong bất động sản, câu "vị trí, vị trí, vị trí" đang dần được thay thế bởi "dữ liệu, dữ liệu, dữ liệu". Một quyết định đầu tư trị giá hàng triệu đô la ngày nay phải được hậu thuẫn bởi những phân tích sâu sắc từ dữ liệu chứ không chỉ là cảm tính.',
    },
    quizzes: [
      {
        question: 'AVM trong phân tích BĐS là viết tắt của gì?',
        options: [
          'Automated Valuation Model',
          'Advanced Virtual Machine',
          'Agent Verification Method',
          'Asset Value Management',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Automated Valuation Model (Mô hình định giá tự động) là các thuật toán sử dụng machine learning để ước tính giá trị của một bất động sản dựa trên các thuộc tính của nó và dữ liệu thị trường.',
      },
      {
        question: 'AI có thể giúp một nhà đầu tư bất động sản như thế nào?',
        options: [
          'Đảm bảo lợi nhuận 100%',
          'Xây dựng tòa nhà nhanh hơn',
          'Phân tích xu hướng thị trường và xác định các cơ hội đầu tư tiềm năng',
          'Miễn thuế bất động sản',
        ],
        correctAnswerIndex: 2,
        explanation:
          'AI có thể phân tích một lượng lớn dữ liệu để xác định các khu vực có tiềm năng tăng trưởng, dự báo sự thay đổi giá, và đề xuất các bất động sản phù hợp với tiêu chí của nhà đầu tư, giúp họ ra quyết định tốt hơn.',
      },
    ],
    faqs: [
      {
        question: 'Phân tích dữ liệu bất động sản là gì?',
        answer:
          'Đó là quá trình thu thập, làm sạch, phân tích và trực quan hóa dữ liệu liên quan đến bất động sản để rút ra những hiểu biết sâu sắc, xác định xu hướng và đưa ra các quyết định dựa trên dữ liệu, thay vì chỉ dựa vào trực giác.',
      },
      {
        question: 'Mô hình định giá tự động (AVM) hoạt động như thế nào?',
        answer:
          'AVM sử dụng các thuật toán học máy để phân tích dữ liệu của một bất động sản (diện tích, số phòng ngủ, vị trí...) cùng với dữ liệu về các giao dịch gần đây trong khu vực để ước tính giá trị thị trường của nó. Các mô hình phức tạp hơn có thể kết hợp cả dữ liệu về trường học, tiện ích, và các chỉ số kinh tế.',
      },
      {
        question: 'Những nguồn dữ liệu nào được sử dụng trong phân tích bất động sản?',
        answer:
          'Các nguồn dữ liệu bao gồm dữ liệu niêm yết từ các cổng thông tin bất động sản, dữ liệu giao dịch công khai từ chính phủ, dữ liệu nhân khẩu học từ điều tra dân số, dữ liệu kinh tế (lãi suất, GDP), và thậm chí cả dữ liệu thay thế như hình ảnh vệ tinh hoặc dữ liệu từ mạng xã hội.',
      },
      {
        question: 'Làm thế nào AI có thể dự báo xu hướng thị trường bất động sản?',
        answer:
          'AI có thể phân tích các chuỗi dữ liệu thời gian lịch sử về giá cả, số lượng giao dịch, và các chỉ số kinh tế vĩ mô để xác định các mẫu và dự báo các biến động trong tương lai. Các mô hình này có thể giúp nhà đầu tư quyết định khi nào nên mua hoặc bán.',
      },
      {
        question: 'Trí tuệ thị trường (Market Intelligence) trong bất động sản là gì?',
        answer:
          'Đó là thông tin chi tiết và có thể hành động về một thị trường bất động sản cụ thể. Nó không chỉ là dữ liệu thô, mà là sự phân tích sâu sắc về các yếu tố cạnh tranh, cơ hội đầu tư, rủi ro, và động lực của người mua/người bán.',
      },
      {
        question: 'Tại sao việc làm sạch dữ liệu lại quan trọng trong phân tích bất động sản?',
        answer:
          'Dữ liệu bất động sản thường không nhất quán, thiếu sót và chứa lỗi (ví dụ: nhập sai diện tích, địa chỉ không chuẩn). Việc làm sạch và chuẩn hóa dữ liệu là một bước quan trọng để đảm bảo rằng các phân tích và mô hình được xây dựng trên đó là chính xác và đáng tin cậy.',
      },
      {
        question: 'Các công cụ phổ biến để phân tích dữ liệu bất động sản là gì?',
        answer:
          'Các nhà phân tích thường sử dụng Python (với các thư viện như Pandas, Scikit-learn) hoặc R để xử lý và mô hình hóa dữ liệu. Đối với trực quan hóa và tạo bảng điều khiển, các công cụ như Tableau và Power BI rất phổ biến.',
      },
      {
        question: 'AI có thể giúp cá nhân hóa việc tìm kiếm nhà như thế nào?',
        answer:
          'Các hệ thống đề xuất dựa trên AI có thể học hỏi từ hành vi duyệt web và sở thích của người dùng (ví dụ: những bất động sản họ đã xem, lưu lại) để đề xuất những bất động sản khác có khả năng phù hợp cao, giúp tiết kiệm thời gian tìm kiếm.',
      },
      {
        question: 'Phân tích không gian địa lý (Geospatial Analysis) có vai trò gì?',
        answer:
          'Bất động sản là tất cả về vị trí. Phân tích không gian địa lý cho phép các nhà phân tích hiểu được các yếu tố liên quan đến vị trí ảnh hưởng đến giá trị như thế nào, ví dụ như khoảng cách đến trường học, công viên, trạm giao thông công cộng, hoặc mức độ tiếng ồn và ô nhiễm.',
      },
      {
        question: 'Những hạn chế của các mô hình AI trong bất động sản là gì?',
        answer:
          'Các mô hình AI phụ thuộc vào chất lượng của dữ liệu lịch sử và có thể không dự đoán chính xác các sự kiện "thiên nga đen" hoặc những thay đổi đột ngột của thị trường. Chúng cũng có thể kế thừa và khuếch đại các thành kiến có sẵn trong dữ liệu, ví dụ như phân biệt đối xử trong định giá.',
      },
    ],
  },

  {
    id: 'blockchain-real-estate-fintech',
    title: 'Công nghệ Blockchain & Đổi mới FinTech Bất động sản',
    description:
      'Khám phá các ứng dụng tiên tiến của blockchain trong bất động sản từ hợp đồng thông minh, quyền sở hữu bất động sản được mã hóa đến các giải pháp tài chính phi tập trung. Tìm hiểu các giao thức DeFi cho bất động sản, chứng chỉ bất động sản NFT và tích hợp thanh toán bằng tiền điện tử.',
    duration: '210 phút',
    difficulty: 'Cao',
    videoUrl: 'https://www.youtube.com/watch?v=sqtsOx0iCPc',
    imageUrl: 'https://i.ytimg.com/vi/sqtsOx0iCPc/hqdefault.jpg',
    objectives: [
      'Hiểu các nguyên tắc cơ bản của blockchain và các ứng dụng trong bất động sản',
      'Phát triển hợp đồng thông minh cho các giao dịch bất động sản và ký quỹ',
      'Triển khai các giải pháp mã hóa cho quyền sở hữu bất động sản phân đoạn',
      'Tạo các giao thức DeFi cho cho vay và đầu tư bất động sản',
      'Thiết kế chứng chỉ bất động sản dựa trên NFT và quản lý tài sản kỹ thuật số',
    ],
    prerequisites: [
      'Hiểu biết cơ bản về công nghệ blockchain và tiền điện tử',
      'Kiến thức lập trình bằng Solidity hoặc các ngôn ngữ hợp đồng thông minh',
      'Quen thuộc với các khía cạnh pháp lý của các giao dịch bất động sản',
    ],
    exercises: [
      {
        title: 'Phát triển Hợp đồng Thông minh cho Ký quỹ Bất động sản',
        description:
          'Phát triển một hợp đồng thông minh Ethereum để tự động hóa quy trình ký quỹ giao dịch bất động sản.',
        difficulty: 'Cao',
        materials: [
          'Môi trường phát triển Solidity',
          'Quyền truy cập mạng thử nghiệm Ethereum',
          'Công cụ phát triển Web3',
          'Mẫu tài liệu pháp lý',
        ],
        procedure: [
          'Thiết kế kiến trúc hợp đồng cho các giao dịch bất động sản nhiều bên',
          'Triển khai logic ký quỹ với việc giải ngân vốn dựa trên các mốc quan trọng',
          'Thêm tích hợp oracle để xác minh dữ liệu bên ngoài',
          'Tạo cơ chế giải quyết tranh chấp và quy trình trọng tài',
          'Triển khai kiểm soát truy cập và quyền dựa trên vai trò',
          'Thêm các sự kiện và ghi nhật ký để giao dịch minh bạch',
          'Kiểm tra kỹ lưỡng hợp đồng trên mạng thử nghiệm với các kịch bản khác nhau',
          'Triển khai hợp đồng và tạo giao diện người dùng để tương tác',
        ],
        expectedResults:
          'Một hợp đồng thông minh chức năng xử lý ký quỹ bất động sản với việc thực thi minh bạch và tự động.',
        solution:
          'Sử dụng các thư viện OpenZeppelin để phát triển hợp đồng an toàn. Triển khai ví đa chữ ký để tăng cường bảo mật. Sử dụng các oracle của Chainlink cho các nguồn cấp dữ liệu bên ngoài như thẩm định giá bất động sản.',
      },
      {
        title: 'Nền tảng Mã hóa Bất động sản',
        description: 'Xây dựng một nền tảng cho quyền sở hữu bất động sản phân đoạn thông qua các token blockchain.',
        difficulty: 'Cao',
        materials: [
          'Khung phát triển Blockchain',
          'Thông số kỹ thuật tiêu chuẩn token',
          'Công cụ tuân thủ KYC/AML',
          'API định giá bất động sản',
        ],
        procedure: [
          'Thiết kế mô hình kinh tế token cho quyền sở hữu bất động sản phân đoạn',
          'Phát triển các token bảo mật ERC-1400 với sự tuân thủ quy định',
          'Tạo quy trình giới thiệu nhà đầu tư với xác minh KYC/AML',
          'Triển khai các cơ chế định giá bất động sản và token',
          'Xây dựng thị trường cho giao dịch token thứ cấp',
          'Thêm hệ thống phân phối cổ tức cho thu nhập cho thuê',
          'Tích hợp với các hệ thống ngân hàng truyền thống để chuyển đổi tiền pháp định',
          'Tạo bảng điều khiển nhà đầu tư với các công cụ quản lý danh mục đầu tư',
        ],
        expectedResults:
          'Một nền tảng mã hóa hoàn chỉnh cho phép đầu tư bất động sản phân đoạn với sự tuân thủ quy định.',
        solution:
          'Sử dụng các tiêu chuẩn token bảo mật như ERC-1400 để tuân thủ. Tích hợp với các dịch vụ như Polymath hoặc Harbor cho các khung pháp lý. Sử dụng IPFS để lưu trữ tài liệu phi tập trung.',
      },
    ],
    realWorldApplications: [
      'RealT mã hóa các bất động sản cho thuê cho phép các nhà đầu tư toàn cầu đầu tư với mức tối thiểu 1 USD',
      'Propy tạo điều kiện cho các giao dịch bất động sản quốc tế bằng cách sử dụng blockchain và tiền điện tử',
      'Republic Real Estate cung cấp các khoản đầu tư bất động sản thương mại được mã hóa',
      'Chính phủ Dubai có kế hoạch thực hiện 100% giao dịch bất động sản trên blockchain vào năm 2025',
    ],
    caseStudies: [
      {
        title: 'Sáng kiến Bất động sản Blockchain của Dubai',
        organization: 'Cục Đất đai Dubai',
        problem: 'Quy trình giao dịch bất động sản phức tạp với nhiều bên trung gian và thủ tục kéo dài',
        solution: 'Nền tảng blockchain toàn diện để đăng ký, giao dịch bất động sản và tích hợp thành phố thông minh',
        impact: 'Mục tiêu 100% giao dịch kỹ thuật số vào năm 2025, giảm thời gian xử lý từ vài tuần xuống còn vài phút',
        innovations: [
          'Sổ đăng ký bất động sản Blockchain',
          'Tự động hóa hợp đồng thông minh',
          'Xác minh danh tính kỹ thuật số',
          'Hệ thống thanh toán tích hợp',
        ],
      },
    ],
    resources: [
      {
        title: 'Sáng kiến Blockchain Bất động sản',
        url: 'https://www.reblockchain.org/',
        type: 'Hiệp hội ngành',
      },
      {
        title: 'Hướng dẫn Phát triển Bất động sản Ethereum',
        url: 'https://ethereum.org/en/developers/docs/',
        type: 'Tài liệu',
      },
    ],
    vietnamContext: {
      title: 'Blockchain và BĐS: Tiềm năng và Thách thức tại Việt Nam',
      content: [
        'Ứng dụng blockchain trong bất động sản tại Việt Nam vẫn còn ở giai đoạn rất sơ khai và thử nghiệm. Các dự án chủ yếu tập trung vào việc "token hóa" bất động sản để kêu gọi vốn đầu tư theo hình thức sở hữu chung (fractional ownership).',
        'Thách thức lớn nhất là hành lang pháp lý chưa rõ ràng cho việc công nhận tài sản số và hợp đồng thông minh trong giao dịch BĐS. Tuy nhiên, tiềm năng về tăng tính minh bạch, giảm chi phí và thời gian giao dịch là rất lớn và đang thu hút sự quan tâm của nhiều nhà đổi mới.',
      ],
    },
    careerConnect: {
      name: 'Luật sư Trịnh Hoàng An',
      title: 'Chuyên gia Tư vấn, LegalTech',
      company: 'Công ty Luật TNHH An và Cộng sự (hư cấu)',
      imageUrl: '/placeholder-attraction.svg',
      quote:
        'Công nghệ Blockchain có thể giải quyết được nhiều vấn đề cố hữu của thị trường BĐS. Vai trò của chúng tôi là làm cầu nối giữa công nghệ và pháp luật, đảm bảo rằng sự đổi mới diễn ra trong một khuôn khổ an toàn và được pháp luật bảo vệ.',
    },
    quizzes: [
      {
        question: '"Token hóa" bất động sản có nghĩa là gì?',
        options: [
          'Xây dựng một token để quảng cáo BĐS',
          'Chuyển đổi quyền sở hữu một bất động sản thành các token kỹ thuật số trên blockchain',
          'Sử dụng token để trả tiền thuê nhà',
          'Tạo ra một bản sao ảo của BĐS',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Token hóa cho phép chia nhỏ một bất động sản thành nhiều phần (token), giúp nhiều nhà đầu tư nhỏ có thể cùng sở hữu và giao dịch các phần sở hữu đó một cách dễ dàng.',
      },
      {
        question: 'Hợp đồng thông minh (Smart Contract) có thể giúp gì trong giao dịch BĐS?',
        options: [
          'Tự động thương lượng giá',
          'Tự động thực thi các điều khoản (ví dụ: chuyển tiền khi các điều kiện pháp lý được đáp ứng) mà không cần bên trung gian',
          'Tìm kiếm người mua tiềm năng',
          'Thiết kế nội thất cho căn nhà',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Smart contract là các chương trình máy tính tự động thực thi các điều khoản đã được lập trình sẵn, giúp giảm thiểu vai trò của các bên trung gian (như ngân hàng, công chứng), từ đó giảm chi phí và tăng tốc độ giao dịch.',
      },
    ],
    faqs: [
      {
        question: 'Blockchain có thể giải quyết vấn đề gì trong ngành bất động sản?',
        answer:
          'Blockchain có thể giải quyết các vấn đề về thiếu minh bạch, quy trình thủ tục giấy tờ phức tạp, và chi phí giao dịch cao. Bằng cách tạo ra một sổ cái phi tập trung, bất biến, nó có thể giúp theo dõi lịch sử sở hữu một cách rõ ràng và tự động hóa các giao dịch.',
      },
      {
        question: 'Hợp đồng thông minh (Smart Contract) là gì?',
        answer:
          'Hợp đồng thông minh là một chương trình máy tính chạy trên blockchain, tự động thực thi các điều khoản của một hợp đồng. Ví dụ, một hợp đồng thông minh có thể tự động chuyển quyền sở hữu (dưới dạng token) cho người mua và chuyển tiền cho người bán khi tất cả các điều kiện đã được đáp ứng.',
      },
      {
        question: 'Token hóa bất động sản (Real Estate Tokenization) là gì?',
        answer:
          'Đó là quá trình chuyển đổi quyền sở hữu của một tài sản bất động sản thành các token kỹ thuật số trên blockchain. Điều này cho phép chia nhỏ tài sản thành nhiều phần, giúp các nhà đầu tư nhỏ có thể mua một phần của bất động sản, tăng tính thanh khoản và dân chủ hóa việc đầu tư.',
      },
      {
        question: 'Sở hữu phân đoạn (Fractional Ownership) thông qua token hóa có lợi ích gì?',
        answer:
          'Lợi ích chính là cho phép các nhà đầu tư nhỏ lẻ tiếp cận thị trường bất động sản với số vốn ít. Nó cũng tăng tính thanh khoản cho tài sản, vì các token có thể được giao dịch dễ dàng trên các sàn giao dịch thứ cấp, không giống như việc mua bán cả một bất động sản.',
      },
      {
        question: 'DeFi (Tài chính phi tập trung) có thể được áp dụng cho bất động sản như thế nào?',
        answer:
          'DeFi có thể tạo ra các nền tảng cho vay thế chấp ngang hàng (peer-to-peer), nơi các nhà đầu tư có thể cho người mua nhà vay tiền trực tiếp thông qua các hợp đồng thông minh, loại bỏ các ngân hàng truyền thống. Nó cũng có thể tạo ra các công cụ tài chính phức tạp hơn dựa trên tài sản bất động sản được mã hóa.',
      },
      {
        question: 'NFT có thể được sử dụng trong bất động sản không?',
        answer:
          'Có. Một NFT (Non-Fungible Token) có thể được sử dụng để đại diện cho quyền sở hữu duy nhất của một bất động sản cụ thể. Giấy chứng nhận quyền sở hữu có thể được phát hành dưới dạng NFT, giúp việc chuyển nhượng trở nên dễ dàng và an toàn hơn trên blockchain.',
      },
      {
        question: 'Những thách thức pháp lý đối với blockchain trong bất động sản là gì?',
        answer:
          'Thách thức lớn nhất là việc công nhận pháp lý đối với các giao dịch và quyền sở hữu được ghi lại trên blockchain. Nhiều khu vực pháp lý vẫn chưa có khung pháp lý rõ ràng cho tài sản số và hợp đồng thông minh, tạo ra sự không chắc chắn cho các nhà đầu tư và người dùng.',
      },
      {
        question: 'Làm thế nào để blockchain tăng cường tính minh bạch?',
        answer:
          'Mọi giao dịch trên blockchain đều được ghi lại trên một sổ cái công khai và không thể thay đổi. Bất kỳ ai cũng có thể kiểm tra lịch sử sở hữu của một tài sản, các khoản thế chấp, và các thông tin liên quan khác, giúp giảm gian lận và tăng cường sự tin tưởng.',
      },
      {
        question: 'Sử dụng blockchain có thực sự loại bỏ hoàn toàn các bên trung gian không?',
        answer:
          'Nó có thể giảm đáng kể vai trò của một số bên trung gian như ngân hàng trong việc ký quỹ hoặc công chứng viên trong việc xác thực. Tuy nhiên, vẫn cần có các bên khác như các nhà thẩm định giá, thanh tra, và các chuyên gia pháp lý để đảm bảo các khía cạnh vật lý và pháp lý của tài sản.',
      },
      {
        question: 'Tình hình áp dụng blockchain trong bất động sản tại Việt Nam như thế nào?',
        answer:
          'Hiện tại, việc áp dụng vẫn còn rất hạn chế và chủ yếu ở giairoạn thử nghiệm, tập trung vào việc token hóa để huy động vốn. Rào cản lớn nhất là hành lang pháp lý chưa rõ ràng. Tuy nhiên, tiềm năng của công nghệ này đang được nhiều nhà đổi mới và các cơ quan quản lý quan tâm.',
      },
    ],
  },
];

export const realEstateTechnologyModuleData: ModuleData = {
  id: 'real-estate-technology',
  title: 'Công Nghệ Bất Động Sản',
  subtitle: 'Real Estate Technology & PropTech Innovation',
  description:
    'Khám phá cách mạng PropTech đang transform ngành bất động sản toàn cầu. Từ virtual property tours, IoT smart buildings, AI-powered analytics đến blockchain property transactions. Master các technologies tiên tiến để revolutionize real estate industry và create innovative PropTech solutions.',
  level: 'Nâng cao',
  duration: '22-27 giờ',
  category: 'Real Estate & Technology',
  heroImageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop',
  features: [
    'PropTech Innovation & Digital Transformation strategies',
    '360° Virtual Tours & VR Property Viewing development',
    'Smart Buildings IoT Management Systems',
    'AI-Powered Real Estate Analytics & Market Intelligence',
    'Blockchain Technology & Real Estate FinTech solutions',
  ],
  icon: '🏢',
  color: 'from-blue-600 to-indigo-600',
  objectives: [
    'Phát triển comprehensive PropTech platforms và digital solutions',
    'Tạo immersive virtual property experiences với VR/AR technology',
    'Thiết kế smart building systems với IoT và predictive analytics',
    'Build AI-powered valuation models và market intelligence tools',
    'Implement blockchain solutions cho property transactions và tokenization',
  ],
  prerequisites: [
    'Hiểu biết cơ bản về real estate market và property transactions',
    'Kiến thức về web development, mobile apps và cloud platforms',
    'Basic understanding về IoT, blockchain và AI/ML concepts',
    'Familiarity với data analytics và visualization tools',
  ],
  careerOutcomes: [
    'PropTech Product Manager - 35-55 triệu VNĐ/tháng',
    'Real Estate Technology Specialist - 25-40 triệu VNĐ/tháng',
    'Smart Building Systems Engineer - 30-50 triệu VNĐ/tháng',
    'Real Estate Data Analyst - 22-38 triệu VNĐ/tháng',
    'PropTech Entrepreneur - Potential unlimited income',
    'Digital Real Estate Marketing Manager - 20-35 triệu VNĐ/tháng',
  ],
  industryApplications: [
    'Residential Real Estate: Virtual tours, smart home automation và buyer matching platforms',
    'Commercial Properties: IoT building management, predictive maintenance và tenant engagement',
    'Property Development: VR project visualization, construction monitoring và pre-sales platforms',
    'Real Estate Investment: AI-powered analytics, market intelligence và portfolio optimization',
    'Property Management: Smart building operations, tenant services và maintenance automation',
    'Real Estate Finance: Blockchain transactions, tokenized investments và DeFi lending',
  ],
  marketDemand: {
    averageSalary: '25-55 triệu VNĐ',
    jobGrowth: '+42%',
    hireDemand: 'Rất cao',
  },
  relatedModules: [
    K2Module.BlockchainDeFi,
    K2Module.AdvancedAI,
    K2Module.SmartManufacturing,
    K2Module.DigitalMarketing,
  ],
};

export const realEstateLessons = lessons;
