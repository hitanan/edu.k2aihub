import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import type { BaseLessonData } from '@/types/lesson-base';

export interface BiomedicalEngineeringLesson extends BaseLessonData {
  medicalApplications?: string[];
  regulatoryConsiderations?: string[];
  safetyCriteria?: string[];
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
}

export const biomedicalEngineeringLessons: BiomedicalEngineeringLesson[] = [
  {
    id: 'medical-device-design',
    title: 'Thiết Kế & Phát Triển Thiết Bị Y Tế',
    description:
      'Giới thiệu toàn diện về các nguyên tắc thiết kế thiết bị y tế, từ ý tưởng đến triển khai lâm sàng. Bao gồm các yêu cầu của FDA/CE, quản lý chất lượng ISO 13485 và các quy định về thiết bị y tế của Việt Nam.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=rt0jmVCdpSU',
    imageUrl: 'https://i.ytimg.com/vi/ZqW4PS9-NIA/hqdefault.jpg',
    objectives: [
      'Hiểu hệ thống phân loại thiết bị y tế và các lộ trình pháp lý.',
      'Áp dụng kiểm soát thiết kế và quản lý rủi ro (ISO 14971) trong phát triển thiết bị.',
      'Triển khai hệ thống quản lý chất lượng theo tiêu chuẩn ISO 13485.',
      'Nắm vững quy trình phê duyệt của Bộ Y tế Việt Nam cho thiết bị y tế.',
      'Thiết kế giao diện y tế lấy người dùng làm trung tâm với các yếu tố con người.',
    ],
    prerequisites: [
      'Nguyên tắc kỹ thuật cơ bản trong cơ khí hoặc điện.',
      'Hiểu biết về giải phẫu và sinh lý người.',
      'Kiến thức về quy trình sản xuất và khoa học vật liệu.',
      'Quen thuộc với các nguyên tắc kiểm soát chất lượng.',
    ],
    exercises: [
      {
        title: 'Phân Tích Rủi Ro Thiết Bị Y Tế',
        description:
          'Thực hiện đánh giá rủi ro toàn diện cho thiết kế máy đo huyết áp bằng phương pháp luận ISO 14971.',
        difficulty: 'Trung bình',
        materials: [
          'Tiêu chuẩn Quản lý Rủi ro ISO 14971',
          'Mẫu phân tích FMEA',
          'Cơ sở dữ liệu thiết bị y tế',
          'Tài liệu hướng dẫn pháp lý',
        ],
        procedure: [
          'Xác định mục đích sử dụng và hồ sơ người dùng cho máy đo huyết áp.',
          'Nhận diện các mối nguy tiềm ẩn và các tình huống nguy hiểm thông qua phân tích hệ thống.',
          'Đánh giá mức độ nghiêm trọng, xác suất xảy ra và khả năng phát hiện rủi ro.',
          'Phát triển các chiến lược giảm thiểu rủi ro và kiểm soát thiết kế.',
          'Lập hồ sơ quản lý rủi ro theo yêu cầu pháp lý.',
          'Tạo kế hoạch giám sát sau khi đưa ra thị trường để theo dõi rủi ro liên tục.',
        ],
        expectedResults: 'Hồ sơ quản lý rủi ro hoàn chỉnh, sẵn sàng để nộp cho cơ quan quản lý.',
        solution:
          'Phương pháp tiếp cận có hệ thống xác định 15-20 rủi ro chính với các chiến lược giảm thiểu phù hợp, chứng minh sự tuân thủ các tiêu chuẩn quốc tế.',
      },
      {
        title: 'Đăng Ký Thiết Bị Y Tế tại Việt Nam',
        description: 'Thực hiện quy trình đăng ký tại Bộ Y tế cho một thiết bị y tế sáng tạo.',
        difficulty: 'Nâng cao',
        materials: [
          'Hướng dẫn theo Thông tư 30/2015/TT-BYT của Bộ Y tế',
          'Mẫu hồ sơ kỹ thuật',
          'Báo cáo đánh giá lâm sàng',
          'Cơ sở dữ liệu pháp quy của Việt Nam',
        ],
        procedure: [
          'Phân loại thiết bị theo các danh mục thiết bị y tế của Việt Nam.',
          'Chuẩn bị bộ hồ sơ kỹ thuật có bản dịch tiếng Việt.',
          'Thực hiện các yêu cầu về đánh giá lâm sàng hoặc nghiên cứu lâm sàng.',
          'Nộp hồ sơ đăng ký qua cổng thông tin trực tuyến.',
          'Phản hồi các câu hỏi và yêu cầu kiểm tra của Bộ Y tế.',
          'Nhận Giấy chứng nhận Lưu hành Tự do cho thị trường Việt Nam.',
        ],
        expectedResults: 'Được Bộ Y tế Việt Nam phê duyệt đăng ký lưu hành thiết bị y tế thành công.',
        solution:
          'Việc chuẩn bị hồ sơ toàn diện với phân loại phù hợp giúp quy trình phê duyệt được tinh giản trong vòng 6-12 tháng.',
      },
    ],
    realWorldApplications: [
      'Bệnh viện Vinmec: Tích hợp thiết bị y tế tiên tiến trong hệ thống y tế tư nhân.',
      'Bệnh viện Chợ Rẫy: Triển khai các hệ thống chẩn đoán hình ảnh.',
      'Các công ty khởi nghiệp thiết bị y tế Việt Nam: Sáng tạo địa phương trong các giải pháp y tế giá cả phải chăng.',
      'Các nhà sản xuất thiết bị quốc tế: Chiến lược thâm nhập thị trường cho ngành y tế Việt Nam.',
      'Bộ Y tế: Xây dựng khung pháp lý cho các công nghệ y tế mới nổi.',
    ],
    medicalApplications: [
      'Hệ thống chẩn đoán hình ảnh: Tối ưu hóa thiết bị MRI, CT, siêu âm.',
      'Thiết bị theo dõi bệnh nhân: Dấu hiệu sinh tồn, theo dõi tim mạch, thần kinh.',
      'Thiết bị trị liệu: Dụng cụ phẫu thuật, thiết bị phục hồi chức năng.',
      'Thiết bị cấy ghép: Máy tạo nhịp tim, cấy ghép chỉnh hình, hệ thống phân phối thuốc.',
      'Xét nghiệm tại chỗ: Thiết bị chẩn đoán nhanh cho y tế nông thôn.',
    ],
    regulatoryConsiderations: [
      'Quy trình cấp phép 510(k) của FDA cho các thiết bị có rủi ro trung bình.',
      'Yêu cầu về dấu CE để tiếp cận thị trường châu Âu.',
      'Đăng ký tại Bộ Y tế Việt Nam theo Thông tư 30/2015/TT-BYT.',
      'Triển khai hệ thống quản lý chất lượng ISO 13485.',
      'Yêu cầu về nghiên cứu lâm sàng và phê duyệt đạo đức.',
    ],
    caseStudies: [
      {
        title: 'Phát triển Công nghệ Y tế của Vingroup',
        organization: 'Vingroup JSC - VinTech',
        problem: 'Phát triển các thiết bị y tế sản xuất trong nước để giảm chi phí y tế tại các bệnh viện Việt Nam.',
        solution:
          'Thành lập chương trình R&D toàn diện với các đối tác quốc tế, tập trung vào thiết bị chẩn đoán và hệ thống theo dõi bệnh nhân.',
        impact:
          'Ra mắt thành công 5 thiết bị y tế với chi phí giảm 40% so với các sản phẩm nhập khẩu, phục vụ hơn 50 bệnh viện tại Việt Nam.',
        innovations: [
          'Phân tích hình ảnh chẩn đoán bằng AI.',
          'Hệ thống theo dõi bệnh nhân dựa trên đám mây.',
          'Thiết bị siêu âm di động cho y tế nông thôn.',
          'Nền tảng tích hợp y tế từ xa.',
        ],
      },
      {
        title: 'Chuyển đổi số tại Bệnh viện Chợ Rẫy',
        organization: 'Bệnh viện Chợ Rẫy - Trung tâm Y tế Hàng đầu',
        problem:
          'Hiện đại hóa cơ sở hạ tầng bệnh viện với các hệ thống thiết bị y tế tích hợp để cải thiện hiệu quả chăm sóc bệnh nhân.',
        solution: 'Triển khai nền tảng y tế số toàn diện tích hợp thiết bị y tế, hệ thống EMR và chẩn đoán bằng AI.',
        impact:
          'Giảm 35% thời gian chờ của bệnh nhân, cải thiện 28% độ chính xác chẩn đoán, nâng cao kết quả điều trị thông qua các thông tin dựa trên dữ liệu.',
        innovations: [
          'Bảng điều khiển theo dõi bệnh nhân thời gian thực.',
          'Phân tích dự đoán cho chăm sóc đặc biệt.',
          'Hệ thống cấp phát thuốc tự động.',
          'Hệ thống định vị phẫu thuật tích hợp.',
        ],
      },
    ],
    resources: [
      {
        title: 'Hướng dẫn Phát triển Thiết bị Y tế của FDA',
        url: 'https://www.fda.gov/medical-devices',
        type: 'Hướng dẫn Pháp lý',
      },
      {
        title: 'Tiêu chuẩn Thiết bị Y tế ISO 13485',
        url: 'https://www.iso.org/standard/59752.html',
        type: 'Tiêu chuẩn Quốc tế',
      },
      {
        title: 'Quy định về Thiết bị Y tế của Việt Nam',
        url: 'https://moh.gov.vn/web/guest/home',
        type: 'Quy định Địa phương',
      },
    ],
    vietnamContext: {
      title: 'Sản xuất Thiết bị Y tế "Made in Vietnam"',
      content: [
        'Chính phủ Việt Nam đang thúc đẩy mạnh mẽ ngành công nghiệp sản xuất thiết bị y tế trong nước để giảm sự phụ thuộc vào hàng nhập khẩu và đảm bảo an ninh y tế quốc gia.',
        'Các khu công nghệ cao tại TP.HCM và Hà Nội đang trở thành trung tâm cho các công ty khởi nghiệp và R&D trong lĩnh vực thiết bị y tế, thu hút cả vốn đầu tư trong và ngoài nước.',
        'Việc hiểu rõ các quy định của Bộ Y tế (như Thông tư 30) là chìa khóa để các kỹ sư và doanh nghiệp có thể đưa sản phẩm ra thị trường Việt Nam thành công.',
      ],
    },
    careerConnect: {
      name: 'Chị Trần Thị Ngọc',
      title: 'Giám đốc Pháp chế & Chất lượng',
      company: 'Medical Technology Vietnam',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-thi-ngoc',
      quote:
        'Đưa một thiết bị y tế từ phòng thí nghiệm đến tay bệnh nhân là một hành trình đầy thách thức nhưng vô cùng ý nghĩa. Tại Việt Nam, việc nắm vững cả kỹ thuật và các quy định pháp lý như ISO 13485 là yếu tố quyết định sự thành công.',
    },
    quizzes: [
      {
        question: 'Tiêu chuẩn quốc tế nào là cốt lõi cho hệ thống quản lý chất lượng thiết bị y tế?',
        options: ['ISO 9001', 'ISO 14971', 'ISO 13485', 'CE Marking'],
        correctAnswerIndex: 2,
        explanation:
          'ISO 13485 là tiêu chuẩn quốc tế quy định các yêu cầu đối với hệ thống quản lý chất lượng dành riêng cho ngành thiết bị y tế.',
      },
      {
        question: 'Tại Việt Nam, cơ quan nào chịu trách nhiệm chính trong việc phê duyệt và quản lý thiết bị y tế?',
        options: ['Bộ Khoa học và Công nghệ', 'Bộ Y tế', 'Tổng cục Tiêu chuẩn Đo lường Chất lượng', 'Bộ Công Thương'],
        correctAnswerIndex: 1,
        explanation:
          'Bộ Y tế là cơ quan quản lý nhà nước cao nhất, chịu trách nhiệm cấp phép lưu hành, quản lý và giám sát chất lượng thiết bị y tế tại Việt Nam.',
      },
    ],
    faqs: [
      {
        question: 'Kỹ thuật Y sinh có khó không và cần những tố chất gì?',
        answer:
          'Kỹ thuật Y sinh là một ngành học liên ngành, đòi hỏi kiến thức tổng hợp từ kỹ thuật, sinh học và y học. Bạn cần có tư duy logic, khả năng giải quyết vấn đề, sự tỉ mỉ, chính xác và một niềm đam mê với việc cải thiện sức khỏe con người.',
      },
      {
        question: 'Sự khác biệt giữa thiết bị y tế loại A, B, C, D tại Việt Nam là gì?',
        answer:
          'Đây là cách phân loại mức độ rủi ro của thiết bị y tế theo quy định của Bộ Y tế. Loại A có rủi ro thấp nhất (ví dụ: bông băng), trong khi loại D có rủi ro cao nhất (ví dụ: máy tạo nhịp tim cấy ghép). Việc phân loại này quyết định quy trình đăng ký và quản lý.',
      },
      {
        question: 'Tôi có thể tự làm một thiết bị y tế đơn giản tại nhà không?',
        answer:
          'Bạn có thể tạo ra các nguyên mẫu (prototype) cho mục đích học tập, ví dụ như một máy đo nhịp tim đơn giản dùng Arduino. Tuy nhiên, để trở thành một thiết bị y tế thực thụ và sử dụng cho con người, nó phải trải qua quá trình kiểm định, thử nghiệm và cấp phép cực kỳ nghiêm ngặt.',
      },
      {
        question: 'Cơ hội việc làm cho ngành Kỹ thuật Y sinh ở Việt Nam như thế nào?',
        answer:
          'Rất rộng mở. Bạn có thể làm việc tại các bệnh viện (quản lý trang thiết bị), các công ty sản xuất và kinh doanh thiết bị y tế, các viện nghiên cứu, trường đại học, hoặc các cơ quan quản lý nhà nước. Nhu cầu nhân lực chất lượng cao trong lĩnh vực này đang ngày càng tăng.',
      },
      {
        question: 'ISO 13485 là gì và tại sao nó quan trọng?',
        answer:
          'ISO 13485 là một tiêu chuẩn quốc tế về hệ thống quản lý chất lượng dành riêng cho các nhà sản xuất thiết bị y tế. Việc tuân thủ tiêu chuẩn này đảm bảo rằng sản phẩm được thiết kế, sản xuất và phân phối một cách an toàn và nhất quán, đáp ứng các yêu cầu pháp lý.',
      },
      {
        question: 'Quản lý rủi ro (ISO 14971) trong thiết kế thiết bị y tế là gì?',
        answer:
          'Đây là một quy trình có hệ thống để xác định, đánh giá và kiểm soát các rủi ro liên quan đến việc sử dụng một thiết bị y tế trong suốt vòng đời của nó. Mục tiêu là đảm bảo lợi ích của việc sử dụng thiết bị vượt trội so với các rủi ro tiềm ẩn.',
      },
      {
        question: 'Giao diện người dùng (UI/UX) có quan trọng đối với thiết bị y tế không?',
        answer:
          'Cực kỳ quan trọng. Một giao diện được thiết kế tồi có thể dẫn đến lỗi sử dụng, gây nguy hiểm cho bệnh nhân. Thiết kế UI/UX trong y tế phải ưu tiên sự rõ ràng, dễ sử dụng, giảm thiểu khả năng nhầm lẫn, đặc biệt là trong các tình huống căng thẳng, khẩn cấp.',
      },
      {
        question: 'Thử nghiệm lâm sàng cho thiết bị y tế là gì?',
        answer:
          'Là quá trình nghiên cứu trên người để đánh giá sự an toàn và hiệu quả của một thiết bị y tế mới. Quá trình này được kiểm soát chặt chẽ và phải tuân thủ các nguyên tắc đạo đức nghiêm ngặt để bảo vệ người tham gia.',
      },
      {
        question: 'Sự khác biệt giữa FDA (Mỹ) và dấu CE (Châu Âu) là gì?',
        answer:
          'Cả hai đều là các quy chuẩn để đưa thiết bị y tế ra thị trường. FDA (Cục quản lý Thực phẩm và Dược phẩm Hoa Kỳ) yêu cầu một quy trình phê duyệt trước khi ra thị trường. Dấu CE (Conformité Européenne) là một tuyên bố của nhà sản xuất rằng sản phẩm của họ đáp ứng các yêu cầu của EU, và quy trình này thường dựa trên sự tự chứng nhận hoặc đánh giá của một bên thứ ba.',
      },
      {
        question: 'Vật liệu sinh học (biomaterial) là gì?',
        answer:
          'Vật liệu sinh học là bất kỳ vật liệu nào, tự nhiên hay tổng hợp, được sử dụng để tương tác với các hệ thống sinh học. Trong kỹ thuật y sinh, chúng được dùng để làm các bộ phận cấy ghép (khớp nhân tạo), khung đỡ cho kỹ thuật mô, hoặc hệ thống phân phối thuốc.',
      },
    ],
  },
  {
    id: 'biosignal-processing',
    title: 'Xử lý Tín hiệu Sinh học & Hình ảnh Y tế',
    description:
      'Các kỹ thuật nâng cao để xử lý tín hiệu sinh học và hình ảnh y tế. Bao gồm phân tích tín hiệu ECG, EEG, EMG, các thuật toán xử lý hình ảnh y tế và ứng dụng AI trong chẩn đoán hình ảnh.',
    duration: '210 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=n0lSdqPb554',
    imageUrl: 'https://i.ytimg.com/vi/l9GBf0sTk4s/hqdefault.jpg',
    objectives: [
      'Làm chủ các kỹ thuật xử lý tín hiệu số cho tín hiệu sinh học.',
      'Triển khai các thuật toán phân tích hình ảnh y tế bằng MATLAB/Python.',
      'Áp dụng các mô hình học máy để chẩn đoán tự động.',
      'Phát triển hệ thống theo dõi tín hiệu sinh học thời gian thực.',
      'Tích hợp các công cụ chẩn đoán bằng AI vào quy trình lâm sàng.',
    ],
    prerequisites: [
      'Nền tảng vững chắc về xử lý tín hiệu và đại số tuyến tính.',
      'Kinh nghiệm lập trình bằng MATLAB, Python hoặc các ngôn ngữ tương tự.',
      'Hiểu biết cơ bản về sinh lý người và thuật ngữ y khoa.',
      'Kiến thức về lọc số và phân tích miền tần số.',
    ],
    exercises: [
      {
        title: 'Hệ Thống Phát Hiện Rối Loạn Nhịp Tim ECG',
        description: 'Xây dựng hệ thống phát hiện rối loạn nhịp tim tự động bằng học máy với dữ liệu ECG thực.',
        difficulty: 'Nâng cao',
        materials: [
          'Cơ sở dữ liệu Rối loạn nhịp tim MIT-BIH',
          'Python với các thư viện scikit-learn, scipy',
          'Thuật toán xử lý tín hiệu ECG',
          'Mô hình phân loại học máy',
        ],
        procedure: [
          'Tiền xử lý tín hiệu ECG: lọc, hiệu chỉnh đường cơ sở, loại bỏ nhiễu.',
          'Trích xuất đặc trưng: phát hiện đỉnh R, biến thiên nhịp tim, đặc trưng hình thái.',
          'Triển khai các thuật toán phân loại: SVM, Random Forest, Mạng Nơ-ron.',
          'Huấn luyện mô hình trên bộ dữ liệu rối loạn nhịp tim đã được gán nhãn với kiểm định chéo.',
          'Đánh giá hiệu suất: độ nhạy, độ đặc hiệu, độ chính xác.',
          'Triển khai hệ thống phát hiện thời gian thực với xác nhận lâm sàng.',
        ],
        expectedResults:
          'Hệ thống phát hiện rối loạn nhịp tim với độ chính xác >95% trên các bộ dữ liệu thử nghiệm tiêu chuẩn.',
        solution:
          'Phương pháp tiếp cận toàn diện kết hợp xử lý tín hiệu tiên tiến với học máy đạt được hiệu suất cấp lâm sàng cho việc theo dõi tim mạch tự động.',
      },
      {
        title: 'Phân Đoạn Hình Ảnh Y Tế cho Khối U Não',
        description: 'Phát triển mô hình học sâu để phân đoạn khối u não tự động từ hình ảnh MRI.',
        difficulty: 'Nâng cao',
        materials: [
          'Bộ dữ liệu BraTS (Phân đoạn Khối u Não)',
          'Framework TensorFlow/PyTorch',
          'Các triển khai kiến trúc U-Net',
          'Công cụ trực quan hóa hình ảnh y tế',
        ],
        procedure: [
          'Tiền xử lý dữ liệu MRI: chuẩn hóa, tăng cường, chuyển đổi định dạng.',
          'Triển khai kiến trúc U-Net với các cơ chế chú ý (attention).',
          'Huấn luyện mô hình phân đoạn với nhãn khối u đa lớp.',
          'Áp dụng các kỹ thuật hậu xử lý: toán tử hình thái, các thành phần liên thông.',
          'Xác thực kết quả với các chú thích của bác sĩ X-quang bằng hệ số Dice.',
          'Tạo các công cụ trực quan hóa lâm sàng để lập kế hoạch điều trị.',
        ],
        expectedResults: 'Mô hình phân đoạn khối u não với điểm Dice >0.85 cho các vùng tăng cường khối u.',
        solution:
          'Phương pháp học sâu tiên tiến cho phép phát hiện ranh giới khối u chính xác, hỗ trợ ra quyết định lâm sàng để lập kế hoạch phẫu thuật thần kinh.',
      },
    ],
    realWorldApplications: [
      'Bệnh viện Bạch Mai: Chẩn đoán hình ảnh bằng AI trong khoa ung bướu.',
      'Bệnh viện FV: Hệ thống theo dõi tim mạch tiên tiến với phát hiện rối loạn nhịp tim thời gian thực.',
      'Bệnh viện Nội tiết Trung ương: Sàng lọc võng mạc tự động cho bệnh nhân tiểu đường.',
      'Các nền tảng y tế từ xa của Việt Nam: Khả năng chẩn đoán từ xa cho y tế nông thôn.',
      'Các công ty thiết bị y tế: Tích hợp thuật toán AI vào thiết bị hình ảnh.',
    ],
    medicalApplications: [
      'Chẩn đoán tim mạch: Phân tích ECG, đánh giá biến thiên nhịp tim.',
      'Theo dõi thần kinh: Phân tích EEG, hệ thống phát hiện động kinh.',
      'Hình ảnh y tế: Nâng cao và phân tích hình ảnh CT, MRI, siêu âm.',
      'Y học phục hồi chức năng: Hệ thống điều khiển bộ phận giả dựa trên EMG.',
      'Y học cấp cứu: Hệ thống phân loại tự động sử dụng phân tích dấu hiệu sinh tồn.',
    ],
    caseStudies: [
      {
        title: 'Nền tảng Chẩn đoán AI của Bệnh viện Bạch Mai',
        organization: 'Bệnh viện Bạch Mai - Trung tâm Y tế Quốc gia',
        problem:
          'Cải thiện độ chính xác chẩn đoán và giảm khối lượng công việc của bác sĩ X-quang thông qua phân tích hình ảnh y tế tự động.',
        solution: 'Triển khai nền tảng AI toàn diện với các mô hình học sâu để phân tích X-quang ngực, CT scan và MRI.',
        impact:
          'Tăng 60% tốc độ chẩn đoán, cải thiện 25% độ chính xác, giảm 40% các chẩn đoán bị bỏ sót trên toàn khoa X-quang.',
        innovations: [
          'Kiến trúc học sâu đa phương thức.',
          'Đánh giá chất lượng hình ảnh thời gian thực.',
          'Hệ thống tạo báo cáo tự động.',
          'Tích hợp hỗ trợ quyết định lâm sàng.',
        ],
      },
      {
        title: 'Sáng tạo Theo dõi Tim mạch tại Bệnh viện FV',
        organization: 'Bệnh viện Pháp-Việt',
        problem:
          'Triển khai các hệ thống theo dõi tim mạch tiên tiến để cải thiện kết quả của bệnh nhân trong các đơn vị chăm sóc đặc biệt.',
        solution:
          'Triển khai theo dõi ECG bằng AI với phát hiện rối loạn nhịp tim thời gian thực và phân tích dự đoán cho các biến cố tim mạch.',
        impact:
          'Giảm 35% các sự cố ngừng tim, cải thiện 50% thời gian phản ứng, nâng cao tỷ lệ sống sót của bệnh nhân trong ICU.',
        innovations: [
          'Theo dõi ECG liên tục với thuật toán ML.',
          'Mô hình dự đoán cho các biến cố tim mạch.',
          'Hệ thống cảnh báo di động cho nhân viên y tế.',
          'Tích hợp với hồ sơ sức khỏe điện tử.',
        ],
      },
    ],
    resources: [
      {
        title: 'Hộp công cụ Xử lý Tín hiệu MATLAB',
        url: 'https://www.mathworks.com/products/signal.html',
        type: 'Công cụ Phần mềm',
      },
      {
        title: 'Tạp chí Phân tích Hình ảnh Y tế',
        url: 'https://www.journals.elsevier.com/medical-image-analysis',
        type: 'Ấn phẩm Nghiên cứu',
      },
      {
        title: 'Cơ sở dữ liệu Lâm sàng PhysioNet',
        url: 'https://physionet.org/',
        type: 'Bộ dữ liệu Mở',
      },
    ],
    vietnamContext: {
      title: 'AI trong Chẩn đoán Y tế tại Việt Nam',
      content: [
        'Việt Nam đang chứng kiến sự bùng nổ của các ứng dụng AI trong y tế, đặc biệt là trong chẩn đoán hình ảnh tại các bệnh viện lớn như Bạch Mai, Chợ Rẫy, và 108.',
        'Các công ty công nghệ Việt Nam như VinBigdata (VinBrain) đã phát triển các sản phẩm AI (ví dụ: DrAid™) có khả năng phân tích X-quang, CT, MRI, được công nhận quốc tế và triển khai rộng rãi.',
        'Nhu cầu về kỹ sư có khả năng xử lý tín hiệu sinh học và phát triển mô hình AI cho y tế đang tăng cao, mở ra cơ hội nghề nghiệp hấp dẫn.',
      ],
    },
    careerConnect: {
      name: 'Anh Trương Quốc Hùng',
      title: 'Giám đốc Khoa học Dữ liệu',
      company: 'VinBrain (Vingroup)',
      imageUrl: 'https://i.pravatar.cc/150?u=truong-quoc-hung',
      quote:
        'Kết hợp AI và dữ liệu y tế đang tạo ra một cuộc cách mạng. Công việc của chúng tôi là biến những hình ảnh y tế phức tạp thành những thông tin chi tiết, giúp bác sĩ chẩn đoán bệnh sớm và chính xác hơn. Đây là lĩnh vực đòi hỏi sự chính xác tuyệt đối và đam mê cứu người.',
    },
    quizzes: [
      {
        question: 'Kiến trúc mạng nơ-ron nào thường được sử dụng cho việc phân đoạn hình ảnh y tế?',
        options: ['ResNet', 'U-Net', 'VGGNet', 'AlexNet'],
        correctAnswerIndex: 1,
        explanation:
          'U-Net là một kiến trúc mạng nơ-ron tích chập được thiết kế đặc biệt cho việc phân đoạn hình ảnh y sinh, nổi bật với khả năng hoạt động tốt ngay cả với dữ liệu huấn luyện hạn chế.',
      },
      {
        question: 'Trong xử lý tín hiệu ECG, "đỉnh R" (R-peak) đại diện cho sự kiện sinh lý nào?',
        options: ['Tâm nhĩ co', 'Tâm thất co', 'Tâm nhĩ giãn', 'Tâm thất giãn'],
        correctAnswerIndex: 1,
        explanation:
          'Phức bộ QRS, trong đó đỉnh R là nổi bật nhất, đại diện cho sự khử cực (co) của tâm thất, là sự kiện bơm máu chính của tim.',
      },
    ],
    faqs: [
      {
        question: 'Tín hiệu sinh học là gì và tại sao chúng ta cần xử lý chúng?',
        answer:
          'Tín hiệu sinh học là các tín hiệu điện được tạo ra bởi cơ thể, ví dụ như điện tim (ECG), điện não (EEG). Chúng chứa thông tin quý giá về tình trạng sức khỏe. Việc xử lý các tín hiệu này giúp loại bỏ nhiễu, trích xuất các đặc trưng quan trọng và hỗ trợ bác sĩ chẩn đoán bệnh chính xác hơn.',
      },
      {
        question: 'Học máy và AI đóng vai trò gì trong xử lý hình ảnh y tế?',
        answer:
          'AI và học máy có thể tự động phát hiện các dấu hiệu bất thường trong hình ảnh y tế (như khối u trên ảnh MRI, tổn thương trên ảnh X-quang) mà mắt người có thể bỏ sót. Chúng giúp tăng tốc độ chẩn đoán, cải thiện độ chính xác và giảm tải công việc cho các bác sĩ X-quang.',
      },
      {
        question: 'U-Net là gì và tại sao nó hiệu quả cho việc phân đoạn ảnh y tế?',
        answer:
          'U-Net là một kiến trúc mạng nơ-ron học sâu được thiết kế đặc biệt để "tô màu" hoặc phân đoạn các vùng quan tâm trong ảnh y tế (ví dụ: xác định ranh giới của một khối u). Kiến trúc đối xứng của nó cho phép nắm bắt cả thông tin tổng thể và chi tiết, giúp nó hoạt động rất hiệu quả ngay cả với số lượng ảnh huấn luyện hạn chế.',
      },
      {
        question: 'Sự khác biệt giữa ECG, EEG và EMG là gì?',
        answer:
          'Cả ba đều là các tín hiệu điện sinh học. ECG (Điện tâm đồ) ghi lại hoạt động điện của tim. EEG (Điện não đồ) ghi lại hoạt động điện của não. EMG (Điện cơ đồ) ghi lại hoạt động điện của cơ bắp.',
      },
      {
        question: 'Phân tích miền tần số (Fourier Transform) được sử dụng để làm gì trong xử lý tín hiệu sinh học?',
        answer:
          'Biến đổi Fourier giúp chuyển đổi một tín hiệu từ miền thời gian sang miền tần số. Điều này cho phép chúng ta phân tích các thành phần tần số khác nhau của tín hiệu. Ví dụ, trong EEG, các dải tần số khác nhau (alpha, beta, delta) tương ứng với các trạng thái khác nhau của não (thư giãn, tập trung, ngủ sâu).',
      },
      {
        question: 'Lọc kỹ thuật số (digital filtering) là gì?',
        answer:
          'Lọc kỹ thuật số là một thuật toán dùng để loại bỏ các thành phần không mong muốn khỏi một tín hiệu. Ví dụ, chúng ta có thể sử dụng bộ lọc thông thấp để loại bỏ nhiễu tần số cao khỏi tín hiệu ECG, làm cho các sóng quan trọng trở nên rõ ràng hơn.',
      },
      {
        question: 'DICOM là gì?',
        answer:
          'DICOM (Digital Imaging and Communications in Medicine) là một tiêu chuẩn quốc tế để truyền, lưu trữ, truy xuất, in, xử lý và hiển thị thông tin hình ảnh y tế. Nó đảm bảo rằng hình ảnh y tế từ các thiết bị khác nhau (MRI, CT) có thể được xem và chia sẻ một cách nhất quán.',
      },
      {
        question: 'Phân đoạn (segmentation) trong hình ảnh y tế có nghĩa là gì?',
        answer:
          'Phân đoạn là quá trình phân chia một hình ảnh y tế thành nhiều phân đoạn hoặc vùng khác nhau. Mục tiêu thường là để xác định vị trí và ranh giới của các cơ quan, mô hoặc khối u. Đây là một bước quan trọng để phân tích định lượng và lập kế hoạch điều trị.',
      },
      {
        question: 'Thế nào là một hệ thống hỗ trợ chẩn đoán bằng máy tính (CAD)?',
        answer:
          'CAD là các hệ thống sử dụng công nghệ máy tính để giúp các bác sĩ diễn giải hình ảnh y tế. Hệ thống CAD có thể đánh dấu các khu vực đáng ngờ trên hình ảnh để bác sĩ X-quang chú ý, hoạt động như một "con mắt thứ hai" để cải thiện độ chính xác.',
      },
      {
        question: 'Thách thức lớn nhất của việc áp dụng AI trong y tế là gì?',
        answer:
          'Một trong những thách thức lớn nhất là sự cần thiết của dữ liệu lớn, chất lượng cao và được gán nhãn chính xác để huấn luyện các mô hình AI. Ngoài ra, các vấn đề về quyền riêng tư của bệnh nhân, sự chấp nhận của bác sĩ và các quy định pháp lý cũng là những rào cản quan trọng cần được giải quyết.',
      },
    ],
  },
  {
    id: 'regenerative-medicine',
    title: 'Y học Tái tạo & Kỹ thuật Mô',
    description:
      'Các khái niệm nâng cao trong kỹ thuật mô, công nghệ tế bào gốc và các ứng dụng y học tái tạo. Bao gồm vật liệu sinh học, in sinh học 3D, kỹ thuật nuôi cấy tế bào và các thách thức trong chuyển giao lâm sàng.',
    duration: '240 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=2JOKH1EveLM',
    imageUrl: 'https://i.ytimg.com/vi/LT4cwXqwxm0/hqdefault.jpg',
    objectives: [
      'Hiểu các nguyên tắc cơ bản của kỹ thuật mô và y học tái tạo.',
      'Làm chủ việc lựa chọn và đặc tính hóa vật liệu sinh học cho khung đỡ mô.',
      'Áp dụng các nguyên tắc sinh học tế bào gốc trong các ứng dụng trị liệu.',
      'Thiết kế các quy trình in sinh học 3D để xây dựng mô.',
      'Nắm vững các lộ trình pháp lý cho các sản phẩm y học tái tạo.',
    ],
    prerequisites: [
      'Nền tảng vững chắc về sinh học tế bào và sinh học phân tử.',
      'Hiểu biết về khoa học vật liệu và các đặc tính của vật liệu sinh học.',
      'Kiến thức về giải phẫu, sinh lý và bệnh lý người.',
      'Quen thuộc với các kỹ thuật nuôi cấy tế bào vô trùng.',
    ],
    exercises: [
      {
        title: 'Quy trình Phòng thí nghiệm In Sinh học 3D',
        description: 'Thiết kế và triển khai quy trình in sinh học 3D cho kỹ thuật mô tim bằng tế bào gốc.',
        difficulty: 'Nâng cao',
        materials: [
          'Máy in sinh học 3D có kiểm soát nhiệt độ',
          'Mực sinh học hydrogel (alginate, collagen, gelatin)',
          'Tế bào gốc tim hoặc iPSCs',
          'Thiết bị và thuốc thử nuôi cấy tế bào',
          'Hệ thống hình ảnh để phân tích mô',
        ],
        procedure: [
          'Chuẩn bị các công thức mực sinh học với mật độ và khả năng sống của tế bào được tối ưu hóa.',
          'Thiết kế kiến trúc khung đỡ 3D bằng phần mềm CAD.',
          'Hiệu chỉnh các thông số máy in sinh học: nhiệt độ, áp suất, tốc độ.',
          'In các cấu trúc mô tim với vị trí tế bào được kiểm soát.',
          'Nuôi cấy các mô đã in trong hệ thống bioreactor.',
          'Phân tích sự phát triển của mô: khả năng sống, sự biệt hóa, chức năng.',
        ],
        expectedResults: 'Các cấu trúc mô tim chức năng với nhịp đập đồng bộ và tổ chức tế bào phù hợp.',
        solution:
          'Các thông số in sinh học được tối ưu hóa cho phép tạo ra các mô tim sống có khả năng sống của tế bào >90% và chức năng co bóp có thể đo lường được.',
      },
      {
        title: 'Phát triển Liệu pháp Tế bào Gốc',
        description: 'Phát triển quy trình trị liệu bằng tế bào gốc trung mô cho các ứng dụng chỉnh hình.',
        difficulty: 'Nâng cao',
        materials: [
          'Tế bào gốc trung mô (từ tủy xương)',
          'Các yếu tố tăng trưởng và cytokine',
          'Các chất mang vật liệu sinh học (hydrogel, vi cầu)',
          'Các xét nghiệm biệt hóa trong ống nghiệm',
          'Hệ thống mô hình động vật',
        ],
        procedure: [
          'Phân lập và tăng sinh tế bào gốc trung mô với kiểm soát chất lượng.',
          'Đặc tính hóa kiểu hình tế bào: các dấu ấn bề mặt, tiềm năng biệt hóa.',
          'Phát triển các hệ thống giải phóng có kiểm soát để phân phối yếu tố tăng trưởng.',
          'Kiểm tra sự biệt hóa thành xương trong hệ thống nuôi cấy 3D.',
          'Đánh giá hiệu quả trị liệu trên các mô hình động vật.',
          'Chuẩn bị quy trình thử nghiệm lâm sàng với các cân nhắc về pháp lý.',
        ],
        expectedResults:
          'Liệu pháp tế bào gốc đã được xác nhận cho thấy sự tái tạo xương được tăng cường với các tác dụng phụ tối thiểu.',
        solution:
          'Phương pháp phát triển toàn diện chứng tỏ tiềm năng trị liệu với lộ trình rõ ràng để chuyển giao lâm sàng.',
      },
    ],
    realWorldApplications: [
      'Viện Nghiên cứu Tế bào gốc Vinmec: Các ứng dụng lâm sàng của y học tái tạo.',
      'Bệnh viện Chấn thương Chỉnh hình Trung ương: Kỹ thuật mô xương cho các ca gãy xương phức tạp.',
      'Đại học Y Dược TP.HCM: Các chương trình nghiên cứu về tái tạo thần kinh.',
      'Các công ty dược phẩm Việt Nam: Phát triển các sản phẩm trị liệu tế bào.',
      'Hợp tác quốc tế: Các chương trình chuyển giao công nghệ với các viện nghiên cứu hàng đầu.',
    ],
    medicalApplications: [
      'Y học tim mạch: Kỹ thuật vá tim, tái tạo mạch máu.',
      'Phẫu thuật chỉnh hình: Tái tạo xương, sụn và dây chằng.',
      'Thần kinh học: Sửa chữa mô thần kinh, điều trị tổn thương tủy sống.',
      'Da liễu: Ghép da, tăng cường chữa lành vết thương.',
      'Nhãn khoa: Tái tạo giác mạc, thay thế mô võng mạc.',
    ],
    regulatoryConsiderations: [
      'Chỉ định RMAT (Liệu pháp Tiên tiến Y học Tái tạo) của FDA.',
      'Quy định về Sản phẩm Thuốc Trị liệu Tiên tiến (ATMP) của EMA.',
      'Hướng dẫn của Bộ Y tế Việt Nam cho các sản phẩm trị liệu tế bào.',
      'Hướng dẫn ICH Q5A cho các sản phẩm công nghệ sinh học.',
      'Yêu cầu GMP cho sản xuất trị liệu tế bào và gen.',
    ],
    caseStudies: [
      {
        title: 'Câu chuyện Thành công của Viện Tế bào gốc Vinmec',
        organization: 'Bệnh viện Đa khoa Quốc tế Vinmec',
        problem: 'Phát triển các liệu pháp tế bào gốc tự thân cho bệnh nhân Việt Nam mắc các bệnh thoái hóa.',
        solution:
          'Thành lập chương trình tế bào gốc toàn diện bao gồm các quy trình phân lập, tăng sinh và ứng dụng lâm sàng.',
        impact:
          'Điều trị cho hơn 200 bệnh nhân với nhiều tình trạng khác nhau, đạt tỷ lệ cải thiện 70% trong các ứng dụng chỉnh hình.',
        innovations: [
          'Hệ thống xử lý tế bào tự động.',
          'Quy trình kiểm soát chất lượng cho các tế bào cấp lâm sàng.',
          'Kỹ thuật phân phối xâm lấn tối thiểu.',
          'Hệ thống theo dõi bệnh nhân để có kết quả lâu dài.',
        ],
      },
      {
        title: 'Chương trình Nghiên cứu Tổn thương Tủy sống Việt Nam',
        organization: 'Đại học Y Dược TP.HCM',
        problem: 'Giải quyết các lựa chọn điều trị hạn chế cho bệnh nhân tổn thương tủy sống tại Việt Nam.',
        solution:
          'Phát triển chương trình trị liệu bằng tế bào gốc thần kinh với sự hợp tác quốc tế và các quy trình lâm sàng nghiêm ngặt.',
        impact:
          'Tiên phong trong các thử nghiệm lâm sàng đầu tiên tại Việt Nam, chứng minh tính an toàn và hiệu quả sơ bộ ở 30 bệnh nhân.',
        innovations: [
          'Quy trình biệt hóa tế bào gốc thần kinh.',
          'Khung đỡ vật liệu sinh học để sửa chữa tủy sống.',
          'Các chương trình tích hợp phục hồi chức năng.',
          'Các công cụ đánh giá kết quả dành riêng cho dân số Việt Nam.',
        ],
      },
    ],
    resources: [
      {
        title: 'Hướng dẫn của Hiệp hội Quốc tế về Nghiên cứu Tế bào gốc',
        url: 'https://www.isscr.org/',
        type: 'Hướng dẫn Chuyên ngành',
      },
      {
        title: 'Tạp chí Kỹ thuật Mô',
        url: 'https://www.liebertpub.com/loi/ten',
        type: 'Ấn phẩm Nghiên cứu',
      },
      {
        title: 'Hướng dẫn về Y học Tái tạo của FDA',
        url: 'https://www.fda.gov/vaccines-blood-biologics/cellular-gene-therapy-products',
        type: 'Hướng dẫn Pháp lý',
      },
    ],
    vietnamContext: {
      title: 'Tế bào gốc: Hy vọng mới cho Y học Việt Nam',
      content: [
        'Việt Nam đã có những bước tiến vượt bậc trong nghiên cứu và ứng dụng tế bào gốc, với các trung tâm lớn như Viện Tế bào gốc (ĐH KHTN TPHCM) và Vinmec.',
        'Các ứng dụng lâm sàng của tế bào gốc trong điều trị bệnh xương khớp, tiểu đường, và các bệnh về máu đã được triển khai thành công tại nhiều bệnh viện, mở ra hy vọng cho nhiều bệnh nhân.',
        'Lĩnh vực này đang thu hút sự quan tâm lớn, và các kỹ sư y sinh có chuyên môn về kỹ thuật mô và tế bào gốc có cơ hội lớn để đóng góp và phát triển sự nghiệp.',
      ],
    },
    careerConnect: {
      name: 'PGS. TS. Phạm Văn Phúc',
      title: 'Viện trưởng',
      company: 'Viện Tế bào gốc, Trường ĐH KHTN, ĐHQG-HCM',
      imageUrl: 'https://i.pravatar.cc/150?u=pham-van-phuc',
      quote:
        'Y học tái tạo là tương lai, và kỹ thuật mô là công cụ để chúng ta xây dựng tương lai đó. Việc tạo ra các mô và cơ quan thay thế không còn là khoa học viễn tưởng. Chúng tôi đang biến điều đó thành hiện thực ngay tại Việt Nam.',
    },
    quizzes: [
      {
        question: 'Vật liệu sinh học lý tưởng cho khung đỡ kỹ thuật mô (scaffold) cần có đặc tính nào?',
        options: [
          'Tương thích sinh học và có khả năng phân hủy sinh học',
          'Cứng và không phân hủy',
          'Gây ra phản ứng miễn dịch mạnh để kích thích tái tạo',
          'Chỉ có nguồn gốc tổng hợp',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Một khung đỡ lý tưởng phải tương thích với cơ thể, không gây hại, và có thể phân hủy dần dần để nhường chỗ cho mô mới tự tái tạo.',
      },
      {
        question: 'In sinh học 3D (3D Bioprinting) khác với in 3D thông thường ở điểm chính nào?',
        options: [
          'Sử dụng tia laser thay vì vòi phun',
          'Chỉ in được các vật thể nhỏ',
          'Sử dụng "mực sinh học" (bioink) chứa tế bào sống',
          'Tốc độ in nhanh hơn nhiều',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Điểm cốt lõi của in sinh học 3D là sử dụng vật liệu chứa tế bào sống (bioink) để tạo ra các cấu trúc mô có chức năng sinh học, thay vì chỉ dùng nhựa hoặc kim loại.',
      },
    ],
    faqs: [
      {
        question: 'Y học tái tạo có phải là "nuôi cấy" các bộ phận cơ thể trong phòng thí nghiệm không?',
        answer:
          'Đó là một trong những mục tiêu cuối cùng. Y học tái tạo là một lĩnh vực rộng lớn nhằm mục đích sửa chữa, thay thế hoặc tái tạo các tế bào, mô hoặc cơ quan bị tổn thương. Nó bao gồm các phương pháp như liệu pháp tế bào gốc, kỹ thuật mô (sử dụng khung đỡ sinh học), và in sinh học 3D.',
      },
      {
        question: 'Tế bào gốc là gì và chúng được lấy từ đâu?',
        answer:
          'Tế bào gốc là những tế bào "chưa biệt hóa", có khả năng phát triển thành nhiều loại tế bào khác nhau trong cơ thể. Chúng có thể được lấy từ tủy xương, mô mỡ, máu cuống rốn,... và có tiềm năng to lớn trong việc điều trị nhiều loại bệnh.',
      },
      {
        question: 'In sinh học 3D (3D Bioprinting) có thể tạo ra một trái tim hoàn chỉnh để cấy ghép chưa?',
        answer:
          'Hiện tại, công nghệ in sinh học 3D đã có thể tạo ra các cấu trúc mô nhỏ và đơn giản có chức năng. Việc in một cơ quan phức tạp và hoàn chỉnh như trái tim vẫn là một thách thức lớn và là mục tiêu nghiên cứu trong tương lai. Tuy nhiên, các mô được in ra đã rất hữu ích cho việc thử nghiệm thuốc và nghiên cứu bệnh tật.',
      },
      {
        question: 'Khung đỡ (scaffold) trong kỹ thuật mô có vai trò gì?',
        answer:
          'Khung đỡ là một cấu trúc tạm thời, thường được làm từ vật liệu sinh học, cung cấp một "giàn giáo" cho các tế bào bám vào và phát triển thành mô mới. Nó định hình cấu trúc của mô và có thể chứa các yếu tố tăng trưởng để khuyến khích sự phát triển của tế bào.',
      },
      {
        question: 'Sự khác biệt giữa tế bào gốc phôi và tế bào gốc trưởng thành là gì?',
        answer:
          'Tế bào gốc phôi (lấy từ phôi giai đoạn sớm) là toàn năng, có nghĩa là chúng có thể phát triển thành bất kỳ loại tế bào nào trong cơ thể. Tế bào gốc trưởng thành (tìm thấy trong các mô của cơ thể) là đa năng, có nghĩa là chúng chỉ có thể phát triển thành một số loại tế bào nhất định, thường là của mô mà chúng được tìm thấy.',
      },
      {
        question: 'Tế bào gốc vạn năng cảm ứng (iPSCs) là gì?',
        answer:
          'iPSCs là các tế bào trưởng thành (ví dụ: tế bào da) đã được tái lập trình trong phòng thí nghiệm để trở lại trạng thái giống như tế bào gốc phôi. Đây là một đột phá lớn vì nó cho phép tạo ra các tế bào gốc dành riêng cho bệnh nhân mà không cần sử dụng phôi, tránh được các vấn đề về đạo đức và thải ghép.',
      },
      {
        question: 'Vật liệu sinh học thông minh (smart biomaterials) là gì?',
        answer:
          'Đây là những vật liệu có thể phản ứng với những thay đổi trong môi trường của chúng. Ví dụ, một hydrogel thông minh có thể giải phóng thuốc khi nhiệt độ cơ thể tăng lên (dấu hiệu của nhiễm trùng) hoặc thay đổi hình dạng để lấp đầy một vết thương.',
      },
      {
        question: 'Bioreactor (lò phản ứng sinh học) được sử dụng để làm gì trong kỹ thuật mô?',
        answer:
          'Bioreactor là một thiết bị cung cấp một môi trường được kiểm soát chặt chẽ (nhiệt độ, oxy, chất dinh dưỡng, lực cơ học) để nuôi cấy các mô được thiết kế trong phòng thí nghiệm. Nó giúp mô phát triển khỏe mạnh và có chức năng giống như mô tự nhiên trong cơ thể.',
      },
      {
        question: 'Những thách thức về đạo đức trong y học tái tạo là gì?',
        answer:
          'Các vấn đề đạo đức chính bao gồm việc sử dụng tế bào gốc phôi, khả năng tạo ra các sinh vật lai, và các câu hỏi về sự an toàn lâu dài và khả năng tiếp cận công bằng của các liệu pháp đắt tiền này.',
      },
      {
        question: 'Y học tái tạo có thể chữa được bệnh lão hóa không?',
        answer:
          'Mặc dù y học tái tạo có tiềm năng sửa chữa các tổn thương liên quan đến tuổi tác và điều trị nhiều bệnh mãn tính, việc "chữa khỏi" hoàn toàn quá trình lão hóa phức tạp vẫn còn là một mục tiêu rất xa. Tuy nhiên, nó hứa hẹn sẽ kéo dài "tuổi thọ khỏe mạnh" (healthspan) của con người.',
      },
    ],
  },
  {
    id: 'medical-robotics',
    title: 'Robot Y tế & Hệ thống Phẫu thuật',
    description:
      'Khám phá toàn diện các ứng dụng của robot y tế, từ robot phẫu thuật đến hệ thống phục hồi chức năng. Bao gồm hệ thống điều khiển, phản hồi xúc giác, thị giác máy tính và các cân nhắc về an toàn trong môi trường lâm sàng.',
    duration: '195 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=Tu503jjHsrs',
    imageUrl: 'https://i.ytimg.com/vi/RssggkQKqoY/hqdefault.jpg',
    objectives: [
      'Hiểu các nguyên tắc thiết kế và điều khiển hệ thống robot y tế.',
      'Làm chủ động học và lập kế hoạch quỹ đạo của robot phẫu thuật.',
      'Triển khai các thuật toán thị giác máy tính để dẫn đường phẫu thuật.',
      'Thiết kế hệ thống an toàn và khả năng chịu lỗi trong robot y tế.',
      'Đánh giá kết quả lâm sàng và hiệu quả chi phí của các hệ thống robot.',
    ],
    prerequisites: [
      'Nền tảng vững chắc về kỹ thuật robot và hệ thống điều khiển.',
      'Kinh nghiệm lập trình bằng C++, Python, ROS (Hệ điều hành Robot).',
      'Hiểu biết về các quy trình y tế và quy trình phẫu thuật.',
      'Kiến thức về kỹ thuật thị giác máy tính và xử lý hình ảnh.',
    ],
    exercises: [
      {
        title: 'Hệ Thống Điều Khiển Robot Phẫu Thuật',
        description: 'Thiết kế hệ thống điều khiển phản hồi lực cho dụng cụ phẫu thuật robot có khả năng xúc giác.',
        difficulty: 'Nâng cao',
        materials: [
          'Tay máy robot có cảm biến lực',
          'Thiết bị phản hồi xúc giác',
          'Phần mềm điều khiển thời gian thực (C++/ROS)',
          'Môi trường mô phỏng phẫu thuật',
          'Hệ thống giám sát an toàn',
        ],
        procedure: [
          'Mô hình hóa động học và động lực học của robot cho không gian làm việc phẫu thuật.',
          'Triển khai các thuật toán điều khiển vị trí và lực với các giới hạn an toàn.',
          'Phát triển hệ thống phản hồi xúc giác cho cảm giác của bác sĩ phẫu thuật.',
          'Tạo các cơ chế phát hiện và tránh va chạm.',
          'Kiểm tra hiệu suất điều khiển trong các kịch bản phẫu thuật mô phỏng.',
          'Xác thực các hệ thống an toàn với phân tích chế độ lỗi.',
        ],
        expectedResults: 'Điều khiển robot phẫu thuật ổn định với định vị chính xác (<1mm) và phản hồi lực thực tế.',
        solution:
          'Các thuật toán điều khiển tiên tiến với dự phòng an toàn cho phép thao tác phẫu thuật chính xác với khả năng của bác sĩ phẫu thuật được tăng cường.',
      },
      {
        title: 'Thị giác Máy tính cho Dẫn đường Phẫu thuật',
        description:
          'Phát triển hệ thống thị giác máy tính thời gian thực để theo dõi dụng cụ phẫu thuật và đăng ký giải phẫu.',
        difficulty: 'Nâng cao',
        materials: [
          'Hệ thống camera lập thể',
          'Thư viện OpenCV và PCL',
          'Tăng tốc GPU (CUDA)',
          'Các dấu theo dõi phẫu thuật',
          'Trạm làm việc hình ảnh y tế',
        ],
        procedure: [
          'Hiệu chỉnh hệ thống camera lập thể để tái tạo 3D chính xác.',
          'Triển khai các thuật toán theo dõi đối tượng thời gian thực cho các dụng cụ phẫu thuật.',
          'Phát triển phát hiện mốc giải phẫu bằng học sâu.',
          'Tạo hệ thống đăng ký 3D với dữ liệu hình ảnh tiền phẫu.',
          'Tối ưu hóa quy trình xử lý cho hiệu suất thời gian thực (độ trễ <50ms).',
          'Xác thực độ chính xác theo dõi trong môi trường mô phỏng phẫu thuật.',
        ],
        expectedResults:
          'Hệ thống dẫn đường phẫu thuật thời gian thực với độ chính xác theo dõi <2mm và hiệu suất mạnh mẽ.',
        solution:
          'Quy trình thị giác máy tính được tối ưu hóa cho phép dẫn đường phẫu thuật chính xác với độ trễ tối thiểu để tăng cường độ chính xác phẫu thuật.',
      },
    ],
    realWorldApplications: [
      'Bệnh viện Chợ Rẫy: Triển khai hệ thống phẫu thuật da Vinci.',
      'Bệnh viện FV: Khả năng phẫu thuật chỉnh hình bằng robot.',
      'Viện Tim mạch Quốc gia Việt Nam: Chương trình robot phẫu thuật tim.',
      'Các trung tâm phục hồi chức năng: Hệ thống trị liệu có sự hỗ trợ của robot.',
      'Các công ty thiết bị y tế: Phát triển robot phẫu thuật tại địa phương.',
    ],
    medicalApplications: [
      'Phẫu thuật xâm lấn tối thiểu: Các thủ thuật nội soi lồng ngực, ổ bụng.',
      'Phẫu thuật thần kinh: Phẫu thuật lập thể, cắt bỏ khối u não.',
      'Phẫu thuật chỉnh hình: Thay khớp, phẫu thuật cột sống.',
      'Phẫu thuật tim: Sửa van, thủ thuật bắc cầu.',
      'Robot phục hồi chức năng: Luyện tập dáng đi, trị liệu chi trên.',
    ],
    safetyCriteria: [
      'Hệ thống an toàn dự phòng và cơ chế dừng khẩn cấp.',
      'Giám sát thời gian thực không gian làm việc của robot và an toàn của bệnh nhân.',
      'Các thuật toán điều khiển an toàn khi hỏng hóc với sự suy giảm hiệu suất từ từ.',
      'Các cân nhắc thiết kế vô trùng cho môi trường phòng mổ.',
      'Các quy trình kiểm tra toàn diện để xác nhận lâm sàng.',
    ],
    caseStudies: [
      {
        title: 'Chương trình Phẫu thuật Robot của Bệnh viện Chợ Rẫy',
        organization: 'Bệnh viện Chợ Rẫy - Trung tâm Y tế Hàng đầu',
        problem:
          'Triển khai các khả năng phẫu thuật robot tiên tiến để cải thiện kết quả của bệnh nhân và giảm thời gian hồi phục.',
        solution:
          'Triển khai hệ thống phẫu thuật da Vinci với chương trình đào tạo toàn diện cho các đội phẫu thuật và quy trình lựa chọn bệnh nhân.',
        impact:
          'Thực hiện hơn 500 ca phẫu thuật bằng robot với thời gian hồi phục giảm 30%, biến chứng giảm 50% so với phẫu thuật truyền thống.',
        innovations: [
          'Kỹ thuật phẫu thuật xâm lấn tối thiểu.',
          'Hệ thống trực quan 3D nâng cao.',
          'Khả năng điều khiển dụng cụ chính xác.',
          'Giảm mệt mỏi cho bác sĩ phẫu thuật và cải thiện công thái học.',
        ],
      },
      {
        title: 'Sáng tạo Phục hồi chức năng Quốc gia Việt Nam',
        organization: 'Bệnh viện Phục hồi chức năng Quốc gia',
        problem: 'Cải thiện kết quả phục hồi chức năng cho bệnh nhân đột quỵ và bệnh nhân tổn thương tủy sống.',
        solution:
          'Triển khai các hệ thống luyện tập dáng đi có sự hỗ trợ của robot và robot phục hồi chức năng chi trên với các quy trình trị liệu được cá nhân hóa.',
        impact:
          'Tăng 40% tỷ lệ phục hồi, cải thiện động lực của bệnh nhân, giảm khối lượng công việc của nhà trị liệu trong khi vẫn duy trì chất lượng trị liệu.',
        innovations: [
          'Các thuật toán điều khiển thích ứng cho trị liệu theo từng bệnh nhân.',
          'Hệ thống phản hồi sinh học thời gian thực.',
          'Tích hợp thực tế ảo để trị liệu hấp dẫn.',
          'Các công cụ theo dõi tiến trình và đo lường kết quả.',
        ],
      },
    ],
    resources: [
      {
        title: 'IEEE Robotics and Automation in Medical Applications',
        url: 'https://www.ieee-ras.org/',
        type: 'Hiệp hội Chuyên ngành',
      },
      {
        title: 'Tạp chí Quốc tế về Robot Y tế',
        url: 'https://onlinelibrary.wiley.com/journal/1478596x',
        type: 'Ấn phẩm Nghiên cứu',
      },
      {
        title: 'Hướng dẫn về Thiết bị Y tế Robot của FDA',
        url: 'https://www.fda.gov/medical-devices',
        type: 'Hướng dẫn Pháp lý',
      },
    ],
    vietnamContext: {
      title: 'Robot phẫu thuật: Cuộc cách mạng trong phòng mổ Việt Nam',
      content: [
        'Phẫu thuật bằng robot, đặc biệt với hệ thống Da Vinci, đã được triển khai tại các bệnh viện hàng đầu như Chợ Rẫy, Bình Dân, Bệnh viện K, đánh dấu một bước tiến lớn trong y học Việt Nam.',
        'Ứng dụng robot giúp thực hiện các ca phẫu thuật phức tạp với độ chính xác cao, ít xâm lấn, giúp bệnh nhân hồi phục nhanh hơn và giảm biến chứng.',
        'Nhu cầu về các kỹ sư y sinh có khả năng vận hành, bảo trì và phát triển các hệ thống robot y tế đang ngày càng tăng, tạo ra một hướng đi sự nghiệp mới và đầy hứa hẹn.',
      ],
    },
    careerConnect: {
      name: 'BS. CKII. Nguyễn Triệu Vũ',
      title: 'Trưởng khoa Ung bướu',
      company: 'Bệnh viện Thành phố Thủ Đức',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-trieu-vu',
      quote:
        'Robot phẫu thuật không thay thế bác sĩ, mà nó là một cánh tay nối dài, giúp chúng tôi thực hiện những thao tác tinh vi nhất mà tay người khó có thể làm được. Việc làm chủ công nghệ này giúp chúng tôi mang lại kết quả điều trị tốt hơn cho bệnh nhân ung thư.',
    },
    quizzes: [
      {
        question: 'Hệ thống phẫu thuật Da Vinci nổi tiếng với ưu điểm chính nào?',
        options: [
          'Chi phí thấp',
          'Hoàn toàn tự động không cần bác sĩ',
          'Cung cấp hình ảnh 3D phóng đại và các cánh tay robot linh hoạt',
          'Sử dụng tia laser để cắt mô',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Hệ thống Da Vinci cung cấp cho bác sĩ phẫu thuật một giao diện điều khiển với hình ảnh 3D độ nét cao và các dụng cụ phẫu thuật có độ linh hoạt vượt trội so với tay người, cho phép phẫu thuật xâm lấn tối thiểu với độ chính xác cao.',
      },
      {
        question: 'ROS (Robot Operating System) là gì trong bối cảnh robot y tế?',
        options: [
          'Một hệ điều hành cho máy tính cá nhân',
          'Một bộ các thư viện và công cụ phần mềm để xây dựng ứng dụng robot',
          'Một loại cảm biến robot',
          'Một ngôn ngữ lập trình mới',
        ],
        correctAnswerIndex: 1,
        explanation:
          'ROS là một framework mã nguồn mở cung cấp các dịch vụ chuẩn cho robot, như trình điều khiển phần cứng, thông điệp, quản lý gói, giúp đơn giản hóa việc phát triển các phần mềm robot phức tạp.',
      },
    ],
    faqs: [
      {
        question: 'Robot phẫu thuật có tự mình thực hiện ca mổ không?',
        answer:
          'Không. Các hệ thống robot phẫu thuật hiện tại như Da Vinci là hệ thống "master-slave". Bác sĩ phẫu thuật ngồi tại một bàn điều khiển và thực hiện các thao tác, các cánh tay robot sẽ sao chép chính xác các chuyển động đó với độ chính xác và ổn định cao hơn. Robot là một công cụ tinh vi, không phải là một bác sĩ tự động.',
      },
      {
        question: 'Ưu điểm lớn nhất của phẫu thuật bằng robot là gì?',
        answer:
          'Ưu điểm chính là phẫu thuật xâm lấn tối thiểu. Nhờ các vết mổ rất nhỏ, bệnh nhân ít đau hơn, mất ít máu hơn, giảm nguy cơ nhiễm trùng và thời gian hồi phục nhanh hơn đáng kể so với phẫu thuật mở truyền thống.',
      },
      {
        question: 'ROS (Robot Operating System) có vai trò gì trong robot y tế?',
        answer:
          'ROS là một nền tảng phần mềm mã nguồn mở, cung cấp các công cụ và thư viện giúp các nhà phát triển xây dựng ứng dụng cho robot một cách nhanh chóng hơn. Trong robot y tế, ROS giúp xử lý các tác vụ phức tạp như điều khiển chuyển động, xử lý dữ liệu cảm biến, và lập kế hoạch quỹ đạo, cho phép các kỹ sư tập trung vào các tính năng y tế chuyên biệt.',
      },
      {
        question: 'Phản hồi xúc giác (haptic feedback) trong robot phẫu thuật là gì?',
        answer:
          'Phản hồi xúc giác là công nghệ truyền lại cảm giác về lực và kết cấu từ đầu dụng cụ phẫu thuật của robot về tay của bác sĩ phẫu thuật. Điều này giúp bác sĩ "cảm nhận" được mô mà họ đang thao tác, làm cho ca phẫu thuật trở nên trực quan và an toàn hơn.',
      },
      {
        question: 'Thị giác máy tính được sử dụng như thế nào để dẫn đường phẫu thuật?',
        answer:
          'Thị giác máy tính giúp robot "nhìn" và hiểu được không gian phẫu thuật. Nó có thể theo dõi vị trí của các dụng cụ, xác định các mốc giải phẫu quan trọng, và chồng lớp hình ảnh 3D từ dữ liệu quét trước phẫu thuật (như CT, MRI) lên hình ảnh thực tế để dẫn đường cho bác sĩ.',
      },
      {
        question: 'Động học robot (robot kinematics) là gì?',
        answer:
          'Động học robot là môn khoa học nghiên cứu về chuyển động của robot. Động học thuận tính toán vị trí của đầu công tác (ví dụ: đầu dao mổ) dựa trên góc của các khớp. Động học ngược giải bài toán ngược lại: cần các góc khớp là bao nhiêu để đưa đầu công tác đến một vị trí mong muốn.',
      },
      {
        question: 'Ngoài phẫu thuật, robot còn được ứng dụng gì khác trong y tế?',
        answer:
          'Robot y tế có rất nhiều ứng dụng khác, bao gồm: robot phục hồi chức năng (giúp bệnh nhân tập đi), robot khử khuẩn trong bệnh viện, robot dược sĩ (tự động cấp phát thuốc), và robot hỗ trợ chăm sóc người già.',
      },
      {
        question: 'Những thách thức về an toàn của robot phẫu thuật là gì?',
        answer:
          'An toàn là ưu tiên hàng đầu. Các thách thức bao gồm: đảm bảo hệ thống không bao giờ có những chuyển động không mong muốn, có cơ chế dừng khẩn cấp đáng tin cậy, phần mềm không có lỗi, và bảo mật hệ thống khỏi các cuộc tấn công mạng.',
      },
      {
        question: 'Phẫu thuật từ xa (telesurgery) là gì?',
        answer:
          'Phẫu thuật từ xa là việc bác sĩ phẫu thuật ở một nơi có thể điều khiển một robot phẫu thuật ở một nơi khác (có thể cách xa hàng nghìn km) để thực hiện ca mổ. Công nghệ này có tiềm năng mang lại dịch vụ y tế chuyên sâu cho các vùng sâu vùng xa.',
      },
      {
        question: 'Tương lai của robot y tế sẽ như thế nào?',
        answer:
          'Tương lai của robot y tế hướng tới các hệ thống nhỏ hơn, thông minh hơn và tự chủ hơn. Chúng ta có thể thấy các robot siêu nhỏ (nanobots) di chuyển trong mạch máu để đưa thuốc đến khối u, hoặc các robot phẫu thuật được tích hợp AI có khả năng tự thực hiện một số bước đơn giản dưới sự giám sát của bác sĩ.',
      },
    ],
  },
];

export const biomedicalEngineeringModuleData: ModuleData = {
  id: K2Module.BiomedicalEngineering,
  title: 'Kỹ thuật Y sinh',
  subtitle: 'Công nghệ cho Sức khỏe Con người',
  description:
    'Khám phá các công nghệ tiên tiến trong y tế, từ thiết bị chẩn đoán, xử lý tín hiệu sinh học, y học tái tạo đến robot phẫu thuật.',
  category: 'Khoa học & Kỹ thuật',
  icon: '🧬',
  color: 'from-red-500 to-orange-500',
  level: 'Chuyên sâu',
  duration: '12-15 giờ',
  prerequisites: [
    'Kiến thức nền tảng về sinh học, kỹ thuật',
    'Tư duy logic và giải quyết vấn đề',
    'Đam mê với lĩnh vực y tế và công nghệ',
  ],
  lessons: biomedicalEngineeringLessons,
  objectives: [],
  careerOutcomes: [],
  industryApplications: [],
  marketDemand: {
    averageSalary: '',
    jobGrowth: '',
    hireDemand: '',
  },
  features: ['Thiết kế Thiết bị Y tế', 'Xử lý Tín hiệu Sinh học', 'Y học Tái tạo', 'Robot Y tế'],
  relatedModules: [K2Module.Biotechnology, 'data-science', 'ai-machine-learning'],
  heroImageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop',
};
