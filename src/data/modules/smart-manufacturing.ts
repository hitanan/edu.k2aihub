import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';
export interface SmartManufacturingLessonType extends BaseLessonData {
  technologyFocus: string;
}

export const smartManufacturingLessons: SmartManufacturingLessonType[] = [
  {
    id: 'industry-4-fundamentals',
    title: 'Nền tảng về Công nghiệp 4.0 và Sản xuất Thông minh',
    description:
      'Giới thiệu về cuộc cách mạng công nghiệp 4.0, các công nghệ nền tảng và cách chúng định hình lại ngành sản xuất hiện đại.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    technologyFocus: 'Tổng quan',
    videoUrl: 'https://www.youtube.com/watch?v=V8atyl7iu0k',
    imageUrl: 'https://i.ytimg.com/vi/V8atyl7iu0k/hqdefault.jpg',
    objectives: [
      'Hiểu rõ khái niệm Công nghiệp 4.0 và nhà máy thông minh.',
      'Nắm được các công nghệ cốt lõi: IoT, AI, Big Data, Cloud Computing.',
      'Nhận biết các ứng dụng của Công nghiệp 4.0 trong sản xuất.',
    ],
    prerequisites: ['Kiến thức cơ bản về quy trình sản xuất.', 'Hiểu biết chung về công nghệ thông tin.'],
    exercises: [
      {
        title: 'Phân tích Case Study Chuyển đổi số',
        description:
          'Nghiên cứu và phân tích một ví dụ thực tế về một công ty đã áp dụng thành công các nguyên tắc của Công nghiệp 4.0.',
        difficulty: 'Cơ bản',
        procedure: [
          'Chọn một công ty nổi tiếng về chuyển đổi số (ví dụ: Siemens, Bosch, VinFast).',
          'Xác định các công nghệ 4.0 mà họ đã triển khai.',
          'Phân tích những lợi ích và thách thức họ đã đối mặt.',
        ],
        expectedResults: 'Một bài trình bày ngắn gọn về cách một công ty thực tế đã triển khai Công nghiệp 4.0.',
      },
    ],
    realWorldApplications: [
      'Nhà máy thông minh tự động hóa cao.',
      'Hệ thống bảo trì dự đoán cho máy móc.',
      'Chuỗi cung ứng được tối ưu hóa bằng dữ liệu thời gian thực.',
    ],
    vietnamContext: {
      title: 'Làn sóng Công nghiệp 4.0 tại Việt Nam',
      content: [
        'Chính phủ Việt Nam đã xác định Công nghiệp 4.0 là một chiến lược trọng tâm để hiện đại hóa nền kinh tế.',
        'Các khu công nghiệp lớn tại Bắc Ninh, Bình Dương, và Đồng Nai đang tiên phong trong việc xây dựng các nhà máy thông minh.',
        'Các doanh nghiệp lớn như VinFast, TH True MILK, Viettel đang đầu tư mạnh mẽ vào tự động hóa và phân tích dữ liệu để nâng cao năng lực cạnh tranh.',
      ],
    },
    careerConnect: {
      name: 'Trần Quốc Dũng',
      title: 'Giám đốc Nhà máy Thông minh',
      company: 'Becamex IDC',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-quoc-dung',
      quote:
        'Công nghiệp 4.0 không chỉ là về công nghệ, mà là về việc thay đổi tư duy. Chúng tôi không chỉ sản xuất sản phẩm, chúng tôi tạo ra một hệ sinh thái sản xuất thông minh và bền vững.',
    },
    quizzes: [
      {
        question:
          'Công nghệ nào được coi là "hệ thần kinh" của nhà máy thông minh, kết nối máy móc và thu thập dữ liệu?',
        options: [
          'Trí tuệ nhân tạo (AI)',
          'Internet vạn vật (IoT)',
          'Điện toán đám mây (Cloud Computing)',
          'In 3D (3D Printing)',
        ],
        correctAnswerIndex: 1,
        explanation:
          'IoT (Internet of Things) bao gồm các cảm biến và thiết bị được kết nối mạng, cho phép thu thập và trao đổi dữ liệu từ mọi ngóc ngách của nhà máy, tương tự như một hệ thần kinh.',
      },
    ],
    faqs: [
      {
        question: 'Công nghiệp 4.0 là gì và tại sao nó lại quan trọng?',
        answer:
          'Công nghiệp 4.0 là cuộc cách mạng công nghiệp lần thứ tư, tập trung vào việc tự động hóa và trao đổi dữ liệu trong công nghệ sản xuất. Nó quan trọng vì giúp tăng năng suất, hiệu quả, tính linh hoạt và tạo ra các mô hình kinh doanh mới.',
      },
      {
        question: 'Nhà máy thông minh khác gì so với nhà máy truyền thống?',
        answer:
          'Nhà máy thông minh sử dụng các công nghệ như IoT, AI, và Big Data để kết nối, tự động hóa, và tối ưu hóa các quy trình sản xuất. Ngược lại, nhà máy truyền thống thường có các quy trình thủ công hơn và ít kết nối hơn.',
      },
      {
        question: 'Big Data có vai trò gì trong sản xuất thông minh?',
        answer:
          'Big Data cho phép các nhà máy thu thập và phân tích một lượng lớn dữ liệu từ các cảm biến và quy trình sản xuất. Phân tích này giúp tối ưu hóa hoạt động, dự đoán lỗi, và cải thiện chất lượng sản phẩm.',
      },
      {
        question: 'Điện toán đám mây (Cloud Computing) giúp ích gì cho Công nghiệp 4.0?',
        answer:
          'Điện toán đám mây cung cấp hạ tầng linh hoạt để lưu trữ và xử lý lượng dữ liệu khổng lồ từ các thiết bị IoT. Nó cũng cho phép truy cập và quản lý hệ thống sản xuất từ xa.',
      },
      {
        question: 'Làm thế nào AI được ứng dụng trong các nhà máy thông minh?',
        answer:
          'AI được sử dụng để phân tích dữ liệu, tối ưu hóa quy trình, điều khiển robot, kiểm tra chất lượng sản phẩm tự động (computer vision), và thực hiện bảo trì dự đoán.',
      },
      {
        question: 'Thách thức lớn nhất khi triển khai Công nghiệp 4.0 là gì?',
        answer:
          'Các thách thức chính bao gồm chi phí đầu tư ban đầu cao, vấn đề an ninh mạng, thiếu hụt nhân lực có kỹ năng, và sự cần thiết phải thay đổi văn hóa doanh nghiệp.',
      },
      {
        question: 'Doanh nghiệp nhỏ và vừa (SMEs) có thể hưởng lợi từ Công nghiệp 4.0 không?',
        answer:
          'Chắc chắn có. SMEs có thể bắt đầu bằng việc triển khai các giải pháp nhỏ hơn như cảm biến IoT để giám sát máy móc hoặc sử dụng phần mềm dựa trên đám mây để quản lý. Điều này giúp họ tăng khả năng cạnh tranh mà không cần đầu tư quá lớn.',
      },
      {
        question: 'An ninh mạng quan trọng như thế nào trong một nhà máy thông minh?',
        answer:
          'Cực kỳ quan trọng. Vì tất cả các thiết bị đều được kết nối, một lỗ hổng bảo mật có thể cho phép kẻ tấn công làm gián đoạn toàn bộ hoạt động sản xuất, đánh cắp dữ liệu nhạy cảm, hoặc gây ra các tai nạn nguy hiểm.',
      },
      {
        question: 'Công nghiệp 4.0 ảnh hưởng đến người lao động như thế nào?',
        answer:
          'Công nghiệp 4.0 tạo ra sự thay đổi về yêu cầu kỹ năng. Một số công việc thủ công, lặp đi lặp lại có thể được tự động hóa, trong khi nhu cầu về các kỹ năng mới như phân tích dữ liệu, quản lý robot, và an ninh mạng sẽ tăng lên.',
      },
    ],
  },
  {
    id: 'iot-sensors-manufacturing',
    title: 'Cảm biến IoT trong Sản xuất Thông minh',
    description:
      'Tìm hiểu sâu về các loại cảm biến IoT, cách chúng hoạt động và vai trò của chúng trong việc giám sát, điều khiển và tối ưu hóa quy trình sản xuất.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    technologyFocus: 'IoT & Cảm biến',
    videoUrl: 'https://www.youtube.com/watch?v=gY0ikBI1J9c',
    imageUrl: 'https://i.ytimg.com/vi/gY0ikBI1J9c/hqdefault.jpg',
    objectives: [
      'Hiểu rõ các loại cảm biến phổ biến trong nhà máy (nhiệt độ, áp suất, độ rung, quang học).',
      'Học cách thiết kế một hệ thống giám sát dựa trên IoT.',
      'Làm quen với việc xử lý và phân tích dữ liệu từ cảm biến.',
    ],
    prerequisites: ['Kiến thức cơ bản về IoT.', 'Lập trình cơ bản (Python hoặc C++).'],
    exercises: [
      {
        title: 'Thiết kế Hệ thống Giám sát Nhiệt độ cho Lò nung',
        description: 'Xây dựng một mô hình giả lập để giám sát nhiệt độ của một lò nung công nghiệp bằng cảm biến IoT.',
        difficulty: 'Trung bình',
        procedure: [
          'Chọn loại cảm biến nhiệt độ phù hợp (ví dụ: thermocouple).',
          'Thiết kế kiến trúc hệ thống: Cảm biến -> Gateway -> Cloud -> Dashboard.',
          'Viết mã giả (pseudocode) để thu thập, truyền dữ liệu và thiết lập cảnh báo khi nhiệt độ vượt ngưỡng.',
        ],
        expectedResults: 'Một sơ đồ kiến trúc hệ thống hoàn chỉnh và mã giả mô tả logic hoạt động.',
      },
    ],
    realWorldApplications: [
      'Giám sát nhiệt độ trong lò nung thép.',
      'Theo dõi độ rung của máy CNC để bảo trì dự đoán.',
      'Đo lường áp suất trong hệ thống thủy lực.',
      'Kiểm tra chất lượng sản phẩm bằng camera và cảm biến quang học.',
    ],
    vietnamContext: {
      title: 'Ứng dụng IoT trong Nông nghiệp và Thủy sản Việt Nam',
      content: [
        'Ngoài nhà máy, IoT đang được ứng dụng mạnh mẽ trong nông nghiệp công nghệ cao tại Việt Nam.',
        'Các trang trại ở Đà Lạt sử dụng cảm biến độ ẩm và nhiệt độ để tự động hóa hệ thống tưới tiêu.',
        'Các đầm nuôi tôm ở Đồng bằng sông Cửu Long dùng cảm biến để giám sát chất lượng nước (pH, oxy hòa tan), giảm thiểu rủi ro và tăng năng suất.',
      ],
    },
    careerConnect: {
      name: 'Võ Thanh Phong',
      title: 'Kỹ sư Tự động hóa',
      company: 'Schneider Electric Vietnam',
      imageUrl: 'https://i.pravatar.cc/150?u=vo-thanh-phong',
      quote:
        'Dữ liệu từ cảm biến là "dầu mỏ" của thế kỷ 21. Công việc của chúng tôi là xây dựng những "giàn khoan" hiệu quả để khai thác và biến dữ liệu đó thành giá trị cho doanh nghiệp.',
    },
    quizzes: [
      {
        question:
          'Việc sử dụng cảm biến độ rung để phân tích và dự đoán khi nào một máy móc có khả năng hỏng được gọi là gì?',
        options: [
          'Bảo trì phản ứng (Reactive Maintenance)',
          'Bảo trì phòng ngừa (Preventive Maintenance)',
          'Bảo trì dự đoán (Predictive Maintenance)',
          'Bảo trì tự động (Automated Maintenance)',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Bảo trì dự đoán (Predictive Maintenance) là phương pháp sử dụng dữ liệu thời gian thực từ các cảm biến để dự báo các sự cố trước khi chúng xảy ra, giúp tối ưu hóa lịch trình bảo trì và giảm thời gian chết của máy.',
      },
    ],
    faqs: [
      {
        question: 'Cảm biến IoT trong sản xuất là gì?',
        answer:
          'Là các thiết bị điện tử nhỏ được gắn vào máy móc, thiết bị hoặc sản phẩm để thu thập dữ liệu về trạng thái hoạt động của chúng như nhiệt độ, áp suất, độ rung, vị trí, v.v. và gửi dữ liệu đó qua mạng.',
      },
      {
        question: 'Tại sao dữ liệu từ cảm biến lại quan trọng?',
        answer:
          'Dữ liệu từ cảm biến cung cấp cái nhìn sâu sắc và thời gian thực về quy trình sản xuất, giúp phát hiện sớm các vấn đề, tối ưu hóa hiệu suất, dự đoán hỏng hóc và cải thiện chất lượng sản phẩm.',
      },
      {
        question: 'Gateway trong hệ thống IoT có chức năng gì?',
        answer:
          'Gateway hoạt động như một cầu nối, thu thập dữ liệu từ nhiều cảm biến và chuyển tiếp nó đến hệ thống trung tâm (thường là nền tảng đám mây) để xử lý và phân tích. Nó cũng có thể thực hiện một số xử lý sơ bộ tại biên (edge computing).',
      },
      {
        question: 'Làm thế nào để chọn đúng loại cảm biến cho một ứng dụng cụ thể?',
        answer:
          'Việc lựa chọn cảm biến phụ thuộc vào đại lượng cần đo (nhiệt độ, áp suất, v.v.), môi trường hoạt động (nhiệt độ cao, ẩm ướt), độ chính xác yêu cầu, và chi phí. Ví dụ, thermocouple thích hợp cho nhiệt độ rất cao trong lò nung.',
      },
      {
        question: 'Edge Computing (Điện toán biên) là gì và nó liên quan gì đến IoT sản xuất?',
        answer:
          'Edge Computing là việc xử lý dữ liệu ngay tại hoặc gần nơi dữ liệu được tạo ra (tức là tại các cảm biến hoặc gateway), thay vì gửi tất cả lên đám mây. Điều này giúp giảm độ trễ, tiết kiệm băng thông và cho phép phản ứng nhanh hơn.',
      },
      {
        question: 'Dữ liệu từ cảm biến có thể giúp giảm chi phí năng lượng không?',
        answer:
          'Có. Bằng cách sử dụng các cảm biến để giám sát việc sử dụng năng lượng của từng máy, nhà máy có thể xác định các khu vực lãng phí, tối ưu hóa lịch trình hoạt động của máy móc và tự động tắt các thiết bị không sử dụng, từ đó tiết kiệm đáng kể chi phí năng lượng.',
      },
      {
        question: 'Làm thế nào để đảm bảo an toàn cho dữ liệu được truyền từ cảm biến IoT?',
        answer:
          'Các biện pháp bảo mật bao gồm mã hóa dữ liệu cả khi truyền và khi lưu trữ, xác thực thiết bị để đảm bảo chỉ các thiết bị được ủy quyền mới có thể kết nối, và phân đoạn mạng để cô lập các thiết bị IoT khỏi các hệ thống quan trọng khác.',
      },
      {
        question: 'Sự khác biệt giữa cảm biến analog và cảm biến digital là gì?',
        answer:
          'Cảm biến analog tạo ra một tín hiệu điện áp liên tục tỷ lệ với đại lượng đo được (ví dụ: nhiệt độ). Cảm biến digital tạo ra tín hiệu rời rạc, thường ở dạng nhị phân (0 và 1), trực tiếp biểu thị giá trị đo được.',
      },
      {
        question: 'Chi phí triển khai một hệ thống giám sát dựa trên IoT có cao không?',
        answer:
          'Chi phí có thể thay đổi rất nhiều. Tuy nhiên, với sự phát triển của công nghệ, giá của cảm biến và các nền tảng IoT đã giảm đáng kể. Doanh nghiệp có thể bắt đầu với một dự án thí điểm nhỏ để chứng minh lợi tức đầu tư (ROI) trước khi mở rộng ra toàn nhà máy.',
      },
    ],
  },
  {
    id: 'industrial-automation-plc',
    title: 'Tự động hóa Công nghiệp với PLC',
    description: 'Lập trình PLC và thiết kế hệ thống tự động hóa cho dây chuyền sản xuất',
    duration: '150 phút',
    difficulty: 'Trung bình',
    technologyFocus: 'Tự động hóa & PLC',
    videoUrl: 'https://www.youtube.com/watch?v=NeDav6lRLCo', // PLC Programming Tutorial - RealPars
    objectives: [
      'Hiểu nguyên lý hoạt động của PLC',
      'Lập trình PLC với Ladder Logic',
      'Thiết kế hệ thống tự động hóa',
      'Tích hợp PLC với HMI',
    ],
    prerequisites: ['Điện tử cơ bản', 'Logic số', 'Kiến thức về relay và motor'],
    exercises: [
      {
        title: 'Lập trình điều khiển băng tải',
        description: 'Thiết kế chương trình PLC điều khiển băng tải tự động',
        difficulty: 'Trung bình',
        procedure: [
          'Phân tích yêu cầu hệ thống băng tải',
          'Vẽ sơ đồ ladder logic',
          'Lập trình PLC với timer và counter',
          'Test và debug chương trình',
          'Tạo giao diện HMI đơn giản',
        ],
        expectedResults: 'Băng tải hoạt động theo chu kỳ tự động với điều khiển start/stop',
      },
      {
        title: 'Hệ thống phân loại sản phẩm',
        description: 'Xây dựng hệ thống phân loại tự động dựa trên sensor',
        difficulty: 'Khó',
        procedure: [
          'Thiết kế mạch sensor màu sắc',
          'Lập trình logic phân loại',
          'Điều khiển actuator để phân loại',
          'Tích hợp với database để lưu số liệu',
        ],
        expectedResults: 'Hệ thống phân loại sản phẩm với độ chính xác > 95%',
      },
    ],
    realWorldApplications: [
      'Điều khiển robot trong dây chuyền lắp ráp',
      'Hệ thống phân loại và đóng gói tự động',
      'Điều khiển nhiệt độ lò nung',
      'Quản lý kho hàng tự động với AGV',
    ],
    vietnamContext: {
      title: 'Tự động hóa trong Ngành sản xuất Việt Nam',
      content: [
        'Nhiều nhà máy tại Việt Nam đang áp dụng tự động hóa để nâng cao năng suất và chất lượng sản phẩm.',
        'Các hệ thống PLC được sử dụng rộng rãi trong ngành chế biến thực phẩm, đồ uống, và sản xuất linh kiện điện tử.',
        'Việt Nam đang trở thành trung tâm sản xuất của nhiều tập đoàn đa quốc gia nhờ vào lực lượng lao động dồi dào và chi phí cạnh tranh.',
      ],
    },
    careerConnect: {
      name: 'Nguyễn Văn A',
      title: 'Kỹ sư Tự động hóa',
      company: 'Siemens Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-van-a',
      quote:
        'Tự động hóa không chỉ là xu hướng, mà là điều kiện tiên quyết để tồn tại và phát triển trong ngành sản xuất hiện đại.',
    },
    quizzes: [
      {
        question: 'PLC trong tự động hóa công nghiệp thường được lập trình bằng ngôn ngữ nào?',
        options: ['Ladder Logic', 'C++', 'Python', 'Java'],
        correctAnswerIndex: 0,
        explanation:
          'Ladder Logic là ngôn ngữ lập trình phổ biến nhất được sử dụng để lập trình PLC trong tự động hóa công nghiệp.',
      },
    ],
    faqs: [
      {
        question: 'PLC là viết tắt của từ gì và chức năng chính của nó là gì?',
        answer:
          'PLC là viết tắt của "Programmable Logic Controller" (Bộ điều khiển Logic khả trình). Chức năng chính của nó là tự động hóa các quy trình công nghiệp bằng cách điều khiển máy móc dựa trên một chương trình được lập trình sẵn.',
      },
      {
        question: 'Tại sao PLC lại được sử dụng rộng rãi trong công nghiệp thay vì máy tính thông thường?',
        answer:
          'PLC được thiết kế để hoạt động bền bỉ trong môi trường công nghiệp khắc nghiệt (nhiễu điện, rung động, nhiệt độ cao). Chúng có độ tin cậy cao, dễ lập trình cho các tác vụ điều khiển tuần tự và có các cổng vào/ra (I/O) được tích hợp sẵn để kết nối với cảm biến và cơ cấu chấp hành.',
      },
      {
        question: 'Ladder Logic (LAD) là gì?',
        answer:
          'Ladder Logic là một ngôn ngữ lập trình đồ họa cho PLC, mô phỏng sơ đồ mạch relay điện. Nó trực quan và dễ hiểu đối với các kỹ sư điện và kỹ thuật viên, những người đã quen thuộc với logic relay.',
      },
      {
        question: 'HMI là gì và nó tương tác với PLC như thế nào?',
        answer:
          'HMI là viết tắt của "Human-Machine Interface" (Giao diện Người-Máy). Đây là một màn hình đồ họa cho phép người vận hành giám sát và điều khiển hệ thống do PLC kiểm soát. HMI giao tiếp với PLC để hiển thị trạng thái (ví dụ: nhiệt độ, tốc độ) và nhận lệnh (ví dụ: nút Start/Stop).',
      },
      {
        question: 'Sự khác biệt giữa đầu vào (Input) và đầu ra (Output) của PLC là gì?',
        answer:
          'Đầu vào (Input) là nơi PLC nhận tín hiệu từ các thiết bị bên ngoài như cảm biến, nút nhấn. Đầu ra (Output) là nơi PLC gửi tín hiệu để điều khiển các thiết bị khác như động cơ, van, đèn báo.',
      },
      {
        question: 'Timer và Counter trong lập trình PLC được sử dụng để làm gì?',
        answer:
          'Timer được sử dụng để tạo ra độ trễ thời gian hoặc thực hiện một hành động sau một khoảng thời gian nhất định. Counter được sử dụng để đếm các sự kiện, ví dụ như đếm số lượng sản phẩm đi qua một băng tải.',
      },
      {
        question: 'SCADA và PLC có mối quan hệ như thế nào?',
        answer:
          'SCADA (Supervisory Control and Data Acquisition) là một hệ thống cấp cao hơn, dùng để giám sát và điều khiển một quy trình lớn, có thể bao gồm nhiều PLC. PLC thực hiện việc điều khiển trực tiếp tại chỗ, trong khi SCADA cung cấp một giao diện trung tâm để quản lý và thu thập dữ liệu từ toàn bộ hệ thống.',
      },
      {
        question: 'Làm thế nào để gỡ lỗi (debug) một chương trình PLC?',
        answer:
          'Các phần mềm lập trình PLC hiện đại cho phép theo dõi trạng thái của chương trình trong thời gian thực. Lập trình viên có thể xem trạng thái của các tiếp điểm, cuộn dây, giá trị của timer và counter trực tiếp trên sơ đồ thang để xác định lỗi logic.',
      },
      {
        question: 'Một số hãng sản xuất PLC nổi tiếng là gì?',
        answer:
          'Một số thương hiệu PLC hàng đầu trên thế giới bao gồm Siemens (dòng SIMATIC), Rockwell Automation (Allen-Bradley), Mitsubishi Electric (dòng MELSEC), Schneider Electric (dòng Modicon), và Omron.',
      },
    ],
  },
  {
    id: 'predictive-maintenance-ai',
    title: 'Bảo trì Dự báo với AI/ML',
    description: 'Ứng dụng trí tuệ nhân tạo trong bảo trì dự báo máy móc công nghiệp',
    duration: '180 phút',
    difficulty: 'Khó',
    technologyFocus: 'AI/ML & Bảo trì',
    videoUrl: 'https://www.youtube.com/watch?v=ULE78ME1ckQ', // Predictive Maintenance with AI - IBM
    objectives: [
      'Hiểu nguyên lý bảo trì dự báo',
      'Áp dụng machine learning cho dự báo lỗi',
      'Xây dựng mô hình RUL (Remaining Useful Life)',
      'Tích hợp AI vào hệ thống quản lý bảo trì',
    ],
    prerequisites: ['Machine Learning cơ bản', 'Python programming', 'Thống kê và xác suất'],
    exercises: [
      {
        title: 'Xây dựng mô hình dự báo lỗi bearing',
        description: 'Sử dụng dữ liệu rung và nhiệt độ để dự báo lỗi vòng bi',
        difficulty: 'Khó',
        procedure: [
          'Tiền xử lý dữ liệu từ sensors',
          'Feature engineering từ tín hiệu rung',
          'Huấn luyện mô hình Random Forest',
          'Đánh giá và tối ưu mô hình',
          'Deploy mô hình vào production',
        ],
        expectedResults: 'Mô hình dự báo lỗi bearing với F1-score > 0.9',
      },
      {
        title: 'Hệ thống cảnh báo thông minh',
        description: 'Phát triển hệ thống cảnh báo dựa trên AI cho nhiều loại máy',
        difficulty: 'Khó',
        procedure: [
          'Tích hợp dữ liệu từ nhiều nguồn sensor',
          'Xây dựng ensemble model',
          'Thiết kế hệ thống alert tự động',
          'Tạo dashboard theo dõi thời gian thực',
        ],
        expectedResults: 'Hệ thống cảnh báo proactive giảm downtime > 30%',
      },
    ],
    realWorldApplications: [
      'Dự báo lỗi motor trong nhà máy thép',
      'Bảo trì dự báo turbine gió',
      'Giám sát sức khỏe máy CNC',
      'Quản lý bảo trì tàu và máy bay',
    ],
    vietnamContext: {
      title: 'Trí tuệ nhân tạo và Bảo trì dự báo tại Việt Nam',
      content: [
        'AI và machine learning đang được áp dụng trong nhiều lĩnh vực tại Việt Nam, từ sản xuất, giao thông vận tải đến y tế.',
        'Nhiều doanh nghiệp lớn đã bắt đầu triển khai các giải pháp bảo trì dự báo để giảm thiểu chi phí bảo trì và tăng độ tin cậy của thiết bị.',
        'Việt Nam có tiềm năng lớn để phát triển các ứng dụng AI trong công nghiệp nhờ vào nguồn dữ liệu phong phú và lực lượng lao động trẻ, năng động.',
      ],
    },
    careerConnect: {
      name: 'Lê Thị Hoa',
      title: 'Chuyên gia Dữ liệu',
      company: 'FPT Software',
      imageUrl: 'https://i.pravatar.cc/150?u=le-thi-hoa',
      quote:
        'Dữ liệu là tài sản quý giá nhất của doanh nghiệp trong kỷ nguyên số. Chúng tôi giúp doanh nghiệp khai thác giá trị từ dữ liệu để đưa ra những quyết định thông minh và kịp thời.',
    },
    quizzes: [
      {
        question:
          'Mô hình nào sau đây thường được sử dụng trong bảo trì dự báo để ước lượng thời gian còn lại trước khi một thiết bị hỏng hóc?',
        options: ['Classification model', 'Regression model', 'Clustering model', 'Anomaly detection model'],
        correctAnswerIndex: 1,
        explanation:
          'Mô hình hồi quy (Regression model) được sử dụng để ước lượng giá trị liên tục, trong trường hợp này là thời gian còn lại trước khi thiết bị hỏng hóc.',
      },
    ],
    faqs: [
      {
        question: 'Bảo trì dự báo (Predictive Maintenance - PdM) là gì?',
        answer:
          'Là một chiến lược bảo trì sử dụng các công cụ và kỹ thuật phân tích dữ liệu để phát hiện các bất thường trong hoạt động và các lỗi có thể xảy ra trong thiết bị và quy trình, nhằm mục đích dự đoán khi nào một thiết bị có thể hỏng hóc.',
      },
      {
        question: 'PdM khác với bảo trì phòng ngừa (Preventive Maintenance) như thế nào?',
        answer:
          'Bảo trì phòng ngừa được thực hiện theo một lịch trình cố định (ví dụ: thay dầu sau mỗi 3 tháng), bất kể tình trạng thực tế của thiết bị. Trong khi đó, bảo trì dự báo chỉ thực hiện bảo trì khi dữ liệu cho thấy cần thiết, giúp tránh bảo trì không cần thiết và ngăn ngừa hỏng hóc bất ngờ.',
      },
      {
        question: 'RUL (Remaining Useful Life) là gì?',
        answer:
          'RUL là viết tắt của "Remaining Useful Life" (Thời gian sử dụng hữu ích còn lại). Đây là một ước tính bằng thời gian (giờ, ngày, chu kỳ) về khoảng thời gian một thiết bị có thể tiếp tục hoạt động trước khi cần phải sửa chữa hoặc thay thế.',
      },
      {
        question: 'Loại dữ liệu nào cần thiết để xây dựng mô hình bảo trì dự báo?',
        answer:
          'Dữ liệu cần thiết bao gồm dữ liệu từ cảm biến (rung, nhiệt độ, áp suất), dữ liệu vận hành (tốc độ, tải), lịch sử bảo trì (các lần sửa chữa, thay thế trước đây), và dữ liệu về lỗi (thời điểm và loại lỗi đã xảy ra).',
      },
      {
        question: 'Feature engineering trong bối cảnh PdM là gì?',
        answer:
          'Là quá trình sử dụng kiến thức chuyên môn để tạo ra các đặc trưng (features) mới từ dữ liệu thô ban đầu. Ví dụ, từ dữ liệu rung dạng sóng, ta có thể tính toán các đặc trưng thống kê như giá trị trung bình, độ lệch chuẩn, hoặc các đặc trưng trong miền tần số để mô hình học tốt hơn.',
      },
      {
        question: 'Tại sao Random Forest lại là một thuật toán phổ biến cho PdM?',
        answer:
          'Random Forest là một mô hình học máy mạnh mẽ, có khả năng xử lý cả nhiệm vụ phân loại (ví dụ: sắp hỏng/không hỏng) và hồi quy (ví dụ: dự đoán RUL). Nó cũng ít bị ảnh hưởng bởi overfitting và có thể cho biết tầm quan trọng của các đặc trưng khác nhau.',
      },
      {
        question: 'Lợi ích chính của việc áp dụng AI/ML vào bảo trì là gì?',
        answer:
          'Lợi ích chính bao gồm giảm thời gian chết của máy móc, tăng tuổi thọ thiết bị, tối ưu hóa lịch trình bảo trì, giảm chi phí sửa chữa và tồn kho phụ tùng, và tăng cường an toàn cho người lao động.',
      },
      {
        question: 'Làm thế nào để bắt đầu triển khai một dự án bảo trì dự báo?',
        answer:
          'Một cách tiếp cận phổ biến là bắt đầu với một dự án thí điểm trên một nhóm nhỏ các thiết bị quan trọng. Quá trình này bao gồm việc thu thập dữ liệu, xây dựng và xác thực mô hình, sau đó chứng minh lợi tức đầu tư (ROI) trước khi mở rộng ra toàn bộ nhà máy.',
      },
      {
        question: 'Deep Learning có vai trò gì trong bảo trì dự báo?',
        answer:
          'Các mô hình Deep Learning, như Mạng nơ-ron tích chập (CNN) hoặc Mạng nơ-ron hồi quy (RNN/LSTM), có thể tự động học các đặc trưng phức tạp từ dữ liệu cảm biến thô (ví dụ: chuỗi thời gian, hình ảnh quang phổ), giảm bớt nhu cầu về feature engineering thủ công.',
      },
    ],
  },
  {
    id: 'digital-twin-technology',
    title: 'Công nghệ Digital Twin',
    description: 'Xây dựng và ứng dụng Digital Twin trong sản xuất thông minh',
    duration: '135 phút',
    difficulty: 'Khó',
    technologyFocus: 'Digital Twin & Mô phỏng',
    videoUrl: 'https://www.youtube.com/watch?v=RvvmJHyR1zg', // Digital Twin Technology Explained - Siemens
    objectives: [
      'Hiểu khái niệm Digital Twin',
      'Xây dựng mô hình Digital Twin',
      'Tích hợp dữ liệu thời gian thực',
      'Ứng dụng trong tối ưu hóa sản xuất',
    ],
    prerequisites: ['Modeling và simulation', 'IoT data integration', '3D modeling cơ bản'],
    exercises: [
      {
        title: 'Xây dựng Digital Twin cho máy CNC',
        description: 'Tạo mô hình Digital Twin của máy CNC với dữ liệu thời gian thực',
        difficulty: 'Khó',
        procedure: [
          'Tạo mô hình 3D máy CNC',
          'Kết nối với dữ liệu sensor thực tế',
          'Lập trình simulation engine',
          'Tích hợp predictive analytics',
          'Tạo giao diện visualization',
        ],
        expectedResults: 'Digital Twin hiển thị trạng thái máy thời gian thực và dự báo bảo trì',
      },
      {
        title: 'Tối ưu hóa dây chuyền với Digital Twin',
        description: 'Sử dụng Digital Twin để tối ưu hóa throughput dây chuyền',
        difficulty: 'Khó',
        procedure: [
          'Mô hình hóa toàn bộ dây chuyền sản xuất',
          'Chạy simulation với các scenario khác nhau',
          'Áp dụng optimization algorithms',
          'Validate kết quả với dữ liệu thực tế',
        ],
        expectedResults: 'Tăng hiệu suất dây chuyền 15-20% thông qua tối ưu hóa',
      },
    ],
    realWorldApplications: [
      'Digital Twin nhà máy ô tô',
      'Mô phỏng dây chuyền sản xuất chip',
      'Tối ưu hóa logistics warehouse',
      'Thiết kế và test sản phẩm mới',
    ],
    vietnamContext: {
      title: 'Digital Twin và Cách mạng 4.0 tại Việt Nam',
      content: [
        'Digital Twin là một trong những công nghệ cốt lõi của Cách mạng công nghiệp 4.0, cho phép mô phỏng và tối ưu hóa quy trình sản xuất trong thời gian thực.',
        'Nhiều doanh nghiệp tại Việt Nam đã bắt đầu áp dụng Digital Twin để nâng cao hiệu quả sản xuất và giảm thiểu chi phí.',
        'Công nghệ này đặc biệt hữu ích trong các ngành công nghiệp yêu cầu độ chính xác cao và quy trình sản xuất phức tạp như ô tô, hàng không, và điện tử.',
      ],
    },
    careerConnect: {
      name: 'Nguyễn Văn B',
      title: 'Chuyên gia Digital Twin',
      company: 'Siemens Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-van-b',
      quote:
        'Digital Twin không chỉ là một công nghệ, mà là một cuộc cách mạng trong cách chúng ta nghĩ về thiết kế, sản xuất và bảo trì.',
    },
    quizzes: [
      {
        question:
          'Khái niệm Digital Twin đề cập đến việc tạo ra một bản sao ảo của một đối tượng vật lý trong môi trường số. Đúng hay Sai?',
        options: ['Đúng', 'Sai'],
        correctAnswerIndex: 0,
        explanation:
          'Đúng. Digital Twin là một bản sao ảo của một đối tượng vật lý, cho phép theo dõi, phân tích và tối ưu hóa đối tượng đó trong thời gian thực.',
      },
    ],
    faqs: [
      {
        question: 'Digital Twin (Bản sao số) là gì?',
        answer:
          'Digital Twin là một bản sao ảo, động của một đối tượng, quy trình hoặc hệ thống vật lý. Nó được cập nhật liên tục với dữ liệu từ các cảm biến trong thế giới thực, cho phép mô phỏng, phân tích và tối ưu hóa hoạt động của đối tượng vật lý đó.',
      },
      {
        question: 'Digital Twin khác với mô hình 3D hoặc mô phỏng truyền thống như thế nào?',
        answer:
          'Một mô hình 3D chỉ là một biểu diễn tĩnh. Một mô phỏng có thể mô phỏng hành vi nhưng thường không được kết nối với đối tượng thực. Digital Twin là một mô hình động, được kết nối hai chiều với đối tượng vật lý, nhận dữ liệu thời gian thực và có thể gửi lệnh điều khiển trở lại.',
      },
      {
        question: 'Lợi ích của việc sử dụng Digital Twin trong sản xuất là gì?',
        answer:
          'Digital Twin cho phép các công ty thử nghiệm và xác thực các thay đổi quy trình trong môi trường ảo trước khi áp dụng vào thực tế, tối ưu hóa hiệu suất, thực hiện bảo trì dự đoán, đào tạo nhân viên và tăng tốc độ đổi mới sản phẩm.',
      },
      {
        question: 'Làm thế nào để xây dựng một Digital Twin?',
        answer:
          'Quá trình này bao gồm ba bước chính: tạo một mô hình kỹ thuật số (ví dụ: mô hình 3D CAD), tích hợp dữ liệu từ các cảm biến IoT trên đối tượng vật lý, và phát triển các thuật toán phân tích và mô phỏng để diễn giải dữ liệu và dự đoán hành vi trong tương lai.',
      },
      {
        question: 'Digital Twin có thể được sử dụng cho những gì ngoài sản xuất?',
        answer:
          'Có, Digital Twin được ứng dụng trong nhiều lĩnh vực: y tế (mô hình ảo của bệnh nhân), thành phố thông minh (mô hình của toàn bộ thành phố để quản lý giao thông, năng lượng), năng lượng (mô hình của tua-bin gió để tối ưu hóa hiệu suất).',
      },
      {
        question: 'Chi phí để tạo ra một Digital Twin có cao không?',
        answer:
          'Chi phí có thể đáng kể, tùy thuộc vào độ phức tạp của đối tượng và mức độ chi tiết của mô hình. Tuy nhiên, lợi tức đầu tư (ROI) thường rất cao do tiết kiệm được chi phí vận hành, bảo trì và tăng hiệu quả sản xuất.',
      },
      {
        question: 'Dữ liệu từ Digital Twin có thể được sử dụng cho Machine Learning không?',
        answer:
          'Chắc chắn có. Dữ liệu thời gian thực và dữ liệu mô phỏng từ Digital Twin là nguồn dữ liệu vô giá để huấn luyện các mô hình Machine Learning cho các tác vụ như bảo trì dự đoán, kiểm soát chất lượng và tối ưu hóa quy trình.',
      },
      {
        question: 'Digital Thread là gì và nó liên quan đến Digital Twin như thế nào?',
        answer:
          'Digital Thread (Luồng kỹ thuật số) là một khuôn khổ giao tiếp cho phép một luồng dữ liệu được kết nối và tích hợp trong suốt vòng đời của sản phẩm. Digital Twin là một thành phần của Digital Thread, cung cấp một cái nhìn động về sản phẩm tại một thời điểm cụ thể.',
      },
      {
        question: 'Thách thức chính khi triển khai công nghệ Digital Twin là gì?',
        answer:
          'Các thách thức bao gồm việc tích hợp các hệ thống và nguồn dữ liệu khác nhau, đảm bảo chất lượng và độ chính xác của dữ liệu, quản lý và lưu trữ lượng dữ liệu khổng lồ, và các vấn đề về an ninh mạng.',
      },
    ],
  },
  {
    id: 'quality-control-computer-vision',
    title: 'Kiểm soát Chất lượng với Computer Vision',
    description: 'Ứng dụng computer vision và AI trong kiểm tra chất lượng sản phẩm',
    duration: '160 phút',
    difficulty: 'Trung bình',
    technologyFocus: 'Computer Vision & QC',
    videoUrl: 'https://www.youtube.com/watch?v=hOXBtjcd-eY', // Computer Vision in Manufacturing - Cognex
    objectives: [
      'Hiểu nguyên lý computer vision trong QC',
      'Xây dựng hệ thống phát hiện lỗi tự động',
      'Áp dụng deep learning cho image classification',
      'Tích hợp với hệ thống sản xuất',
    ],
    prerequisites: ['Computer vision cơ bản', 'Python và OpenCV', 'Deep learning fundamentals'],
    exercises: [
      {
        title: 'Hệ thống phát hiện lỗi bề mặt',
        description: 'Xây dựng AI system phát hiện scratches và dents trên sản phẩm kim loại',
        difficulty: 'Trung bình',
        procedure: [
          'Thu thập và label dataset ảnh lỗi',
          'Tiền xử lý ảnh và augmentation',
          'Huấn luyện CNN model cho classification',
          'Optimize model cho real-time inference',
          'Tích hợp với camera và conveyor belt',
        ],
        expectedResults: 'Hệ thống phát hiện lỗi với accuracy > 96% và tốc độ > 30 FPS',
      },
      {
        title: 'Đo kích thước sản phẩm tự động',
        description: 'Phát triển hệ thống đo kích thước chính xác bằng computer vision',
        difficulty: 'Trung bình',
        procedure: [
          'Thiết lập hệ thống camera và lighting',
          'Calibration camera và xác định tỷ lệ',
          'Áp dụng edge detection và contour analysis',
          'Tính toán kích thước và so sánh với spec',
        ],
        expectedResults: 'Đo kích thước với độ chính xác ±0.1mm cho sản phẩm <100mm',
      },
    ],
    realWorldApplications: [
      'Kiểm tra chất lượng linh kiện điện tử',
      'Phân loại sản phẩm nông nghiệp',
      'Inspection welding seams trong ô tô',
      'Kiểm tra in ấn và packaging',
    ],
    vietnamContext: {
      title: 'Computer Vision và Tự động hóa kiểm tra chất lượng tại Việt Nam',
      content: [
        'Computer Vision đang ngày càng được ưa chuộng trong ngành sản xuất Việt Nam nhờ vào khả năng tự động hóa và nâng cao độ chính xác trong kiểm tra chất lượng.',
        'Nhiều nhà máy đã đầu tư vào hệ thống camera và phần mềm phân tích hình ảnh để phát hiện lỗi sản phẩm trong quá trình sản xuất.',
        'Công nghệ này giúp giảm thiểu nhân công, tăng tốc độ sản xuất và đảm bảo chất lượng sản phẩm đồng nhất.',
      ],
    },
    careerConnect: {
      name: 'Trần Văn C',
      title: 'Kỹ sư Computer Vision',
      company: 'Cognex Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-van-c',
      quote:
        'Computer Vision là tương lai của sản xuất thông minh. Nó cho phép máy móc "nhìn thấy" và "hiểu" thế giới xung quanh, từ đó đưa ra những quyết định chính xác và nhanh chóng.',
    },
    quizzes: [
      {
        question:
          'Trong kiểm soát chất lượng, việc sử dụng camera và phần mềm phân tích hình ảnh để phát hiện lỗi sản phẩm được gọi là gì?',
        options: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Data Analytics'],
        correctAnswerIndex: 2,
        explanation:
          'Computer Vision là công nghệ cho phép máy tính và hệ thống tự động "nhìn thấy" và "hiểu" hình ảnh từ camera, từ đó phát hiện và phân loại lỗi sản phẩm.',
      },
    ],
    faqs: [
      {
        question: 'Computer Vision (Thị giác máy tính) là gì?',
        answer:
          'Là một lĩnh vực của trí tuệ nhân tạo cho phép máy tính và hệ thống có khả năng "nhìn", diễn giải và hiểu thông tin hình ảnh và video. Trong sản xuất, nó được dùng để tự động hóa việc kiểm tra và phân tích trực quan.',
      },
      {
        question: 'Hệ thống kiểm soát chất lượng bằng Computer Vision hoạt động như thế nào?',
        answer:
          'Hệ thống thường bao gồm một hoặc nhiều camera chụp ảnh sản phẩm trên dây chuyền, một hệ thống chiếu sáng để đảm bảo hình ảnh rõ nét, và một máy tính chạy phần mềm phân tích hình ảnh để so sánh với tiêu chuẩn chất lượng và phát hiện các sai sót.',
      },
      {
        question: 'Những loại lỗi nào có thể được phát hiện bằng Computer Vision?',
        answer:
          'Rất nhiều loại lỗi, bao gồm lỗi bề mặt (vết xước, vết lõm), lỗi lắp ráp (thiếu bộ phận, lắp sai vị trí), lỗi in ấn (sai màu, mờ chữ), và lỗi kích thước (không đúng hình dạng, kích thước).',
      },
      {
        question: 'Deep Learning đã thay đổi việc kiểm soát chất lượng bằng Computer Vision như thế nào?',
        answer:
          'Các phương pháp truyền thống đòi hỏi phải lập trình thủ công các quy tắc để phát hiện lỗi. Deep Learning, đặc biệt là Mạng n-ron tích chập (CNN), cho phép hệ thống tự học cách nhận biết lỗi từ một bộ dữ liệu lớn các hình ảnh đã được gán nhãn, giúp phát hiện các lỗi phức tạp và biến đổi một cách hiệu quả hơn.',
      },
      {
        question: 'Data augmentation là gì và tại sao nó quan trọng?',
        answer:
          'Data augmentation là kỹ thuật tạo ra các dữ liệu huấn luyện mới từ dữ liệu hiện có bằng cách áp dụng các phép biến đổi như xoay, lật, thay đổi độ sáng. Nó quan trọng vì giúp tăng kích thước và sự đa dạng của bộ dữ liệu, làm cho mô hình AI trở nên mạnh mẽ hơn và ít bị overfitting.',
      },
      {
        question: 'Tốc độ xử lý (FPS - Frames Per Second) có quan trọng không?',
        answer:
          'Rất quan trọng, đặc biệt trên các dây chuyền sản xuất tốc độ cao. Hệ thống Computer Vision phải có khả năng chụp và phân tích hình ảnh đủ nhanh để theo kịp tốc độ của dây chuyền, đảm bảo 100% sản phẩm được kiểm tra.',
      },
      {
        question: 'Hệ thống chiếu sáng ảnh hưởng đến kết quả như thế nào?',
        answer:
          'Chiếu sáng là một trong những yếu tố quan trọng nhất. Ánh sáng không phù hợp có thể tạo ra bóng, phản xạ hoặc làm mờ các chi tiết, khiến hệ thống khó phát hiện lỗi. Một hệ thống chiếu sáng được thiết kế tốt sẽ làm nổi bật các khuyết tật cần tìm.',
      },
      {
        question: 'Liệu Computer Vision có thể thay thế hoàn toàn con người trong việc kiểm tra chất lượng?',
        answer:
          'Đối với các nhiệm vụ lặp đi lặp lại và được xác định rõ ràng, Computer Vision có thể vượt trội hơn con người về tốc độ, tính nhất quán và độ bền. Tuy nhiên, con người vẫn đóng vai trò quan trọng trong việc xử lý các trường hợp phức tạp, không xác định và trong việc huấn luyện, giám sát hệ thống AI.',
      },
      {
        question: 'OpenCV là gì?',
        answer:
          'OpenCV (Open Source Computer Vision Library) là một thư viện mã nguồn mở hàng đầu chứa hàng ngàn thuật toán thị giác máy tính. Nó cung cấp các công cụ cần thiết để xây dựng các ứng dụng Computer Vision, từ xử lý ảnh cơ bản đến các thuật toán Machine Learning phức tạp.',
      },
    ],
  },
  {
    id: 'smart-supply-chain-management',
    title: 'Quản lý Chuỗi Cung ứng Thông minh',
    description: 'Tối ưu hóa chuỗi cung ứng với AI, IoT và blockchain technology',
    duration: '140 phút',
    difficulty: 'Trung bình',
    technologyFocus: 'Chuỗi cung ứng & AI',
    videoUrl: 'https://www.youtube.com/watch?v=oS8XJZ_oAQU', // Smart Supply Chain Management - SAP
    objectives: [
      'Hiểu supply chain 4.0 concepts',
      'Áp dụng AI trong demand forecasting',
      'Sử dụng blockchain cho traceability',
      'Tối ưu hóa inventory và logistics',
    ],
    prerequisites: ['Supply chain cơ bản', 'Data analytics', 'Blockchain fundamentals'],
    exercises: [
      {
        title: 'Hệ thống dự báo nhu cầu với AI',
        description: 'Xây dựng model dự báo nhu cầu sử dụng historical data và external factors',
        difficulty: 'Trung bình',
        procedure: [
          'Thu thập dữ liệu bán hàng và external factors',
          'Feature engineering và data cleaning',
          'Thử nghiệm nhiều algorithms (ARIMA, LSTM, etc.)',
          'Validate model và measure accuracy',
          'Deploy model cho production use',
        ],
        expectedResults: 'Model dự báo nhu cầu với MAPE < 15% cho 3 tháng tới',
      },
      {
        title: 'Blockchain traceability system',
        description: 'Phát triển hệ thống truy xuất nguồn gốc sản phẩm với blockchain',
        difficulty: 'Khó',
        procedure: [
          'Thiết kế smart contract cho product tracking',
          'Tích hợp với IoT sensors cho data collection',
          'Xây dựng web interface cho traceability',
          'Test với supply chain scenario thực tế',
        ],
        expectedResults: 'Hệ thống truy xuất nguồn gốc end-to-end với blockchain',
      },
    ],
    realWorldApplications: [
      'Quản lý chuỗi cung ứng thực phẩm',
      'Traceability trong dược phẩm',
      'Inventory optimization cho retail',
      'Logistics optimization cho e-commerce',
    ],
    vietnamContext: {
      title: 'Cách mạng 4.0 và Tương lai của Chuỗi cung ứng tại Việt Nam',
      content: [
        'Việt Nam đang trong quá trình chuyển mình mạnh mẽ để trở thành trung tâm sản xuất và logistics của khu vực Đông Nam Á.',
        'Nhiều doanh nghiệp đã bắt đầu áp dụng AI và IoT để tối ưu hóa quy trình sản xuất và quản lý chuỗi cung ứng.',
        'Blockchain cũng đang được nghiên cứu và triển khai thử nghiệm trong việc truy xuất nguồn gốc sản phẩm và quản lý hợp đồng thông minh.',
      ],
    },
    careerConnect: {
      name: 'Phạm Minh Tuấn',
      title: 'Giám đốc Chuỗi cung ứng',
      company: 'Thế Giới Di Động',
      imageUrl: 'https://i.pravatar.cc/150?u=pham-minh-tuan',
      quote:
        'Chuỗi cung ứng thông minh không chỉ giúp giảm chi phí, mà còn tăng cường khả năng phản ứng nhanh với thị trường và nâng cao trải nghiệm khách hàng.',
    },
    quizzes: [
      {
        question:
          'Trong quản lý chuỗi cung ứng, thuật ngữ nào được sử dụng để chỉ khả năng dự đoán chính xác nhu cầu của khách hàng trong tương lai?',
        options: ['Demand forecasting', 'Supply planning', 'Inventory management', 'Logistics optimization'],
        correctAnswerIndex: 0,
        explanation:
          'Demand forecasting là quá trình ước lượng nhu cầu của khách hàng trong tương lai dựa trên các dữ liệu lịch sử và các yếu tố tác động bên ngoài.',
      },
    ],
    faqs: [
      {
        question: 'Chuỗi cung ứng thông minh (Supply Chain 4.0) là gì?',
        answer:
          'Là việc áp dụng các công nghệ của Công nghiệp 4.0 như IoT, AI, và blockchain vào các hoạt động của chuỗi cung ứng để tạo ra một hệ thống kết nối, thông minh, hiệu quả và linh hoạt hơn.',
      },
      {
        question: 'AI giúp ích gì trong việc dự báo nhu cầu (demand forecasting)?',
        answer:
          'Các mô hình AI có thể phân tích dữ liệu bán hàng lịch sử cùng với các yếu tố bên ngoài (thời tiết, xu hướng mạng xã hội, sự kiện kinh tế) để tạo ra các dự báo chính xác hơn nhiều so với các phương pháp thống kê truyền thống.',
      },
      {
        question: 'Blockchain được sử dụng để làm gì trong chuỗi cung ứng?',
        answer:
          'Blockchain tạo ra một sổ cái phân tán, bất biến và minh bạch. Nó được sử dụng để tăng cường khả năng truy xuất nguồn gốc (traceability), cho phép theo dõi sản phẩm từ nguồn gốc đến tay người tiêu dùng, chống hàng giả và tăng cường niềm tin.',
      },
      {
        question: 'Làm thế nào IoT tối ưu hóa logistics?',
        answer:
          'Các cảm biến IoT được gắn trên các phương tiện vận chuyển và container cung cấp dữ liệu vị trí, nhiệt độ, độ ẩm theo thời gian thực. Điều này giúp tối ưu hóa tuyến đường, đảm bảo điều kiện bảo quản hàng hóa và dự đoán thời gian giao hàng chính xác.',
      },
      {
        question: 'Tồn kho thông minh (smart inventory) là gì?',
        answer:
          'Là hệ thống quản lý tồn kho sử dụng công nghệ như RFID hoặc cảm biến IoT để theo dõi mức tồn kho theo thời gian thực. Kết hợp với dự báo nhu cầu từ AI, nó có thể tự động đặt hàng để duy trì mức tồn kho tối ưu, giảm thiểu tình trạng hết hàng hoặc tồn kho quá nhiều.',
      },
      {
        question: 'MAPE (Mean Absolute Percentage Error) là gì?',
        answer:
          'MAPE là một chỉ số phổ biến để đo lường độ chính xác của một mô hình dự báo. Nó tính toán phần trăm sai số trung bình giữa giá trị dự báo và giá trị thực tế. MAPE càng thấp thì mô hình càng chính xác.',
      },
      {
        question: 'Hợp đồng thông minh (Smart Contract) trên blockchain có ứng dụng gì trong chuỗi cung ứng?',
        answer:
          'Hợp đồng thông minh có thể tự động thực thi các điều khoản khi các điều kiện được đáp ứng. Ví dụ, một hợp đồng thông minh có thể tự động thanh toán cho nhà cung cấp ngay khi hệ thống xác nhận hàng hóa đã được giao đến kho đúng chất lượng.',
      },
      {
        question: 'Sự khác biệt giữa ARIMA và LSTM trong dự báo chuỗi thời gian là gì?',
        answer:
          'ARIMA là một mô hình thống kê truyền thống, hoạt động tốt với các chuỗi thời gian có quy luật rõ ràng. LSTM là một loại mạng nơ-ron hồi quy (RNN) thuộc lĩnh vực Deep Learning, có khả năng học các mẫu phức tạp và dài hạn trong dữ liệu, thường cho kết quả tốt hơn với các chuỗi cung ứng biến động.',
      },
      {
        question: 'Lợi ích lớn nhất của một chuỗi cung ứng thông minh là gì?',
        answer:
          'Lợi ích lớn nhất là tăng cường khả năng phục hồi và sự linh hoạt. Một chuỗi cung ứng thông minh có thể nhanh chóng phát hiện và phản ứng với các gián đoạn (ví dụ: thiên tai, tắc nghẽn cảng), giảm thiểu tác động tiêu cực đến hoạt động kinh doanh.',
      },
    ],
  },
  {
    id: 'cybersecurity-smart-factory',
    title: 'An ninh Mạng cho Nhà máy Thông minh',
    description: 'Bảo mật hệ thống IIoT và infrastructure trong smart manufacturing',
    duration: '120 phút',
    difficulty: 'Trung bình',
    technologyFocus: 'An ninh mạng & IIoT',
    videoUrl: 'https://www.youtube.com/watch?v=LqubiRdJRSQ', // Industrial Cybersecurity Basics - Rockwell Automation
    objectives: [
      'Hiểu threat landscape trong IIoT',
      'Thiết kế security architecture',
      'Implement network segmentation',
      'Monitoring và incident response',
    ],
    prerequisites: ['Network security cơ bản', 'IIoT protocols', 'Risk assessment'],
    exercises: [
      {
        title: 'Security assessment cho IIoT network',
        description: 'Thực hiện đánh giá bảo mật cho mạng IIoT nhà máy',
        difficulty: 'Trung bình',
        procedure: [
          'Inventory tất cả IoT devices và protocols',
          'Vulnerability scanning và penetration testing',
          'Risk assessment và threat modeling',
          'Đề xuất security controls và mitigation',
        ],
        expectedResults: 'Báo cáo đánh giá bảo mật toàn diện với action plan',
      },
      {
        title: 'Triển khai network segmentation',
        description: 'Thiết kế và cấu hình network segmentation cho OT/IT networks',
        difficulty: 'Trung bình',
        procedure: [
          'Thiết kế network topology với security zones',
          'Cấu hình firewall rules và access controls',
          'Implement monitoring và logging',
          'Test security controls effectiveness',
        ],
        expectedResults: 'Network segmentation giảm attack surface > 80%',
      },
    ],
    realWorldApplications: [
      'Bảo mật SCADA systems',
      'ICS security monitoring',
      'Secure remote access cho maintenance',
      'Incident response cho cyber attacks',
    ],
    vietnamContext: {
      title: 'An ninh mạng trong kỷ nguyên số tại Việt Nam',
      content: [
        'Với sự phát triển nhanh chóng của công nghệ thông tin và truyền thông, an ninh mạng đang trở thành một trong những ưu tiên hàng đầu của các doanh nghiệp tại Việt Nam.',
        'Nhiều vụ tấn công mạng đã xảy ra, gây thiệt hại lớn về tài chính và uy tín cho các tổ chức.',
        'Chính phủ và các doanh nghiệp đang nỗ lực tăng cường bảo mật mạng lưới IIoT và hạ tầng công nghệ thông tin để bảo vệ dữ liệu và duy trì hoạt động sản xuất kinh doanh.',
      ],
    },
    careerConnect: {
      name: 'Nguyễn Hữu Lợi',
      title: 'Chuyên gia An ninh mạng',
      company: 'Bkav',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-huu-loi',
      quote:
        'An ninh mạng không chỉ là một bộ phận của công nghệ thông tin, mà là một phần thiết yếu trong chiến lược phát triển bền vững của doanh nghiệp.',
    },
    quizzes: [
      {
        question:
          'Trong bối cảnh IIoT, việc phân đoạn mạng (network segmentation) có tác dụng gì trong việc tăng cường an ninh mạng?',
        options: [
          'Giảm băng thông mạng',
          'Tăng cường khả năng giám sát',
          'Giảm thiểu diện tích tấn công',
          'Tất cả các đáp án trên',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Phân đoạn mạng giúp giới hạn phạm vi tấn công và giảm thiểu rủi ro bị xâm nhập, từ đó tăng cường an ninh mạng cho hệ thống IIoT.',
      },
    ],
    faqs: [
      {
        question: 'IIoT là gì và tại sao nó là mục tiêu của các cuộc tấn công mạng?',
        answer:
          'IIoT (Industrial Internet of Things) là việc ứng dụng IoT trong môi trường công nghiệp. Nó trở thành mục tiêu vì các hệ thống này điều khiển các quy trình vật lý quan trọng; một cuộc tấn công thành công có thể gây gián đoạn sản xuất, thiệt hại kinh tế lớn, hoặc thậm chí là các thảm họa về an toàn.',
      },
      {
        question: 'Sự khác biệt giữa mạng IT (Công nghệ thông tin) và mạng OT (Công nghệ vận hành) là gì?',
        answer:
          'Mạng IT tập trung vào dữ liệu và truyền thông (email, máy chủ web). Mạng OT tập trung vào việc giám sát và điều khiển các quy trình vật lý (PLC, SCADA). An ninh mạng OT ưu tiên tính sẵn sàng và an toàn, trong khi an ninh IT ưu tiên tính bảo mật và toàn vẹn dữ liệu.',
      },
      {
        question: 'Tại sao phân đoạn mạng lại quan trọng trong môi trường OT?',
        answer:
          'Phân đoạn mạng (Network Segmentation) tạo ra các vùng (zones) riêng biệt, cô lập các hệ thống quan trọng (như hệ thống điều khiển) khỏi các mạng ít an toàn hơn (như mạng văn phòng hoặc Internet). Nếu một vùng bị xâm nhập, các vùng khác vẫn được bảo vệ, giúp ngăn chặn sự lây lan của cuộc tấn công.',
      },
      {
        question: 'Threat modeling (mô hình hóa mối đe dọa) là gì?',
        answer:
          'Là một quy trình có cấu trúc để xác định các mối đe dọa tiềm tàng đối với một hệ thống và ưu tiên các biện pháp giảm thiểu. Nó giúp trả lời các câu hỏi như "Kẻ tấn công là ai?", "Họ muốn gì?", và "Họ có thể tấn công chúng ta như thế nào?".',
      },
      {
        question: 'Hệ thống SCADA là gì?',
        answer:
          'SCADA (Supervisory Control and Data Acquisition) là một hệ thống điều khiển được sử dụng để giám sát và điều khiển các quy trình công nghiệp lớn và phân tán về mặt địa lý, ví dụ như lưới điện, hệ thống cấp nước, hoặc đường ống dẫn dầu.',
      },
      {
        question: 'Làm thế nào để bảo mật việc truy cập từ xa để bảo trì?',
        answer:
          'Truy cập từ xa cần được kiểm soát chặt chẽ thông qua các giải pháp như Mạng riêng ảo (VPN), xác thực đa yếu tố (MFA), và giới hạn quyền truy cập chỉ cho các hệ thống và thời gian cần thiết. Mọi phiên truy cập cần được ghi lại và giám sát.',
      },
      {
        question: 'Hệ thống phát hiện xâm nhập (IDS) có vai trò gì trong an ninh nhà máy thông minh?',
        answer:
          'IDS giám sát lưu lượng mạng để phát hiện các hoạt động đáng ngờ hoặc các mẫu tấn công đã biết. Trong môi trường OT, IDS chuyên dụng có thể hiểu các giao thức công nghiệp (như Modbus, Profinet) để phát hiện các lệnh bất thường có thể gây hại cho thiết bị.',
      },
      {
        question: 'Zero Trust Architecture (Kiến trúc không tin cậy) là gì?',
        answer:
          'Là một mô hình bảo mật hoạt động theo nguyên tắc "không bao giờ tin tưởng, luôn xác minh". Thay vì tin tưởng bất kỳ ai hoặc thiết bị nào bên trong mạng, nó yêu cầu xác minh danh tính nghiêm ngặt cho mọi người và mọi thiết bị mỗi khi họ cố gắng truy cập tài nguyên.',
      },
      {
        question: 'Ai chịu trách nhiệm về an ninh mạng trong một nhà máy thông minh?',
        answer:
          'An ninh mạng là trách nhiệm chung. Nó đòi hỏi sự hợp tác chặt chẽ giữa đội ngũ IT (chuyên về an ninh mạng truyền thống) và đội ngũ OT (hiểu rõ về các quy trình và thiết bị công nghiệp), cùng với sự cam kết từ ban lãnh đạo và nhận thức của tất cả nhân viên.',
      },
    ],
  },
];

export const smartManufacturingModuleData: ModuleData = {
  id: 'smart-manufacturing',
  title: 'Smart Manufacturing & Industry 4.0',
  subtitle: 'Sản xuất thông minh và Công nghiệp 4.0',
  description:
    'Tìm hiểu về nhà máy thông minh, IoT trong sản xuất, robot tự động và phân tích dữ liệu để tối ưu hóa chuỗi cung ứng.',
  category: 'technology',
  icon: '🏭',
  color: 'from-slate-500 to-gray-600',
  level: 'Nâng cao',
  duration: '22-28 giờ',
  features: [
    'Industrial IoT (IIoT)',
    'Robotics & Automation',
    'Digital Twin',
    'Supply Chain Analytics',
    'Additive Manufacturing',
  ],
  prerequisites: [
    'Kiến thức về quy trình sản xuất',
    'Hiểu biết về kỹ thuật công nghiệp',
    'Kỹ năng phân tích dữ liệu',
    'Làm quen với các khái niệm tự động hóa',
  ],
  objectives: [
    'Hiểu rõ các trụ cột của Công nghiệp 4.0.',
    'Triển khai các giải pháp IIoT để thu thập và phân tích dữ liệu sản xuất.',
    'Ứng dụng robot và tự động hóa để tăng năng suất.',
    'Sử dụng Digital Twin để mô phỏng và tối ưu hóa quy trình.',
    'Phân tích dữ liệu chuỗi cung ứng để đưa ra quyết định thông minh.',
  ],
  careerOutcomes: [
    'Kỹ sư tự động hóa',
    'Chuyên gia IIoT',
    'Kỹ sư sản xuất thông minh',
    'Chuyên viên phân tích dữ liệu sản xuất',
    'Quản lý chuỗi cung ứng số',
  ],
  industryApplications: [
    { name: 'Sản xuất ô tô', description: 'Tự động hóa dây chuyền lắp ráp, kiểm tra chất lượng bằng AI.' },
    { name: 'Điện tử', description: 'Sử dụng robot chính xác cao để lắp ráp vi mạch.' },
    { name: 'Dược phẩm', description: 'Theo dõi và kiểm soát quy trình sản xuất theo thời gian thực.' },
    { name: 'Hàng tiêu dùng', description: 'Tối ưu hóa chuỗi cung ứng từ nhà máy đến người tiêu dùng.' },
  ],
  marketDemand: {
    averageSalary: '2000-4000 USD/tháng',
    jobGrowth: '18% mỗi năm',
    hireDemand: 'Rất cao',
  },
  relatedModules: ['iot-basics', 'robotics', 'data-analytics', 'supply-chain-logistics'],
};
