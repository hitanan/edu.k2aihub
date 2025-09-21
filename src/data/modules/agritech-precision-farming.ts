import { BaseLessonData } from '@/types/lesson-base';
export interface AgriTechLessonData extends BaseLessonData {
  cropType?: string;
  farmSize?: string;
  technologyLevel?: string;
}

export const AgriTechLessons: AgriTechLessonData[] = [
  {
    id: 'smart-farming-fundamentals',
    title: 'Cơ bản Nông nghiệp Thông minh',
    description:
      'Tìm hiểu về công nghệ nông nghiệp hiện đại và ứng dụng IoT trong canh tác. Khám phá cách công nghệ thay đổi ngành nông nghiệp Việt Nam.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=nBOKyHpKCHU',
    imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop',
    cropType: 'Đa dạng',
    farmSize: 'Nhỏ đến vừa',
    technologyLevel: 'Cơ bản',
    objectives: [
      'Hiểu được khái niệm nông nghiệp thông minh và precision farming',
      'Nắm vững các công nghệ IoT cơ bản trong nông nghiệp',
      'Phân tích lợi ích và thách thức của smart farming tại Việt Nam',
      'Đánh giá ROI của việc áp dụng công nghệ trong nông nghiệp',
    ],
    prerequisites: [
      'Kiến thức cơ bản về nông nghiệp',
      'Hiểu biết về công nghệ IoT',
      'Khả năng sử dụng smartphone và máy tính',
    ],
    exercises: [
      {
        title: 'Thiết kế Hệ thống Giám sát Cây trồng',
        description: 'Tạo ra một hệ thống giám sát cơ bản cho một loại cây trồng cụ thể',
        difficulty: 'Cơ bản',
        materials: ['Smartphone', 'App mô phỏng sensor', 'Giấy và bút'],
        procedure: [
          'Chọn một loại cây trồng phổ biến tại Việt Nam (lúa, cà phê, rau củ)',
          'Xác định các thông số cần giám sát (nhiệt độ, độ ẩm, pH đất)',
          'Thiết kế sơ đồ đặt sensor trong đồng ruộng',
          'Tính toán chi phí đầu tư và thời gian hoàn vốn',
          'Đưa ra kế hoạch triển khai từng giai đoạn',
        ],
        expectedResults: 'Một kế hoạch chi tiết để triển khai hệ thống giám sát thông minh',
        solution: 'Hệ thống IoT cơ bản có thể giúp tăng năng suất 15-25% và giảm chi phí đầu vào 20-30%',
      },
    ],
    realWorldApplications: [
      'Nông trại thông minh tại Đà Lạt sử dụng IoT để tối ưu hóa sản xuất rau sạch',
      'Các công ty như FPT, Viettel đang phát triển giải pháp nông nghiệp số',
      'Nông dân ở ĐBSCL áp dụng app di động để theo dõi giá lúa và thời tiết',
      'Startup như iMaker, Avimech cung cấp drone nông nghiệp cho nông dân Việt',
    ],
    caseStudies: [
      {
        title: 'Nông trại Rau sạch Đà Lạt',
        organization: 'Công ty TNHH Nông nghiệp Công nghệ cao',
        problem: 'Khó kiểm soát chất lượng và năng suất rau trong nhà kính',
        solution: 'Triển khai hệ thống IoT giám sát nhiệt độ, độ ẩm, CO2 tự động',
        impact: 'Tăng năng suất 40%, giảm chi phí lao động 25%, chất lượng ổn định',
        innovations: ['Tự động hóa tưới tiêu', 'Cảnh báo sớm dịch bệnh', 'Truy xuất nguồn gốc'],
      },
    ],
    resources: [
      {
        title: 'Cẩm nang Nông nghiệp thông minh Việt Nam',
        url: 'https://mard.gov.vn/smart-agriculture',
        type: 'Documentation',
      },
      {
        title: 'IoT Platform cho Nông nghiệp',
        url: 'https://thingsboard.io/smart-farming/',
        type: 'Tool',
      },
    ],
    vietnamContext: {
      title: 'Nông nghiệp thông minh tại Việt Nam',
      content: [
        'Việt Nam đang đẩy mạnh chuyển đổi số trong nông nghiệp, với các vùng chuyên canh công nghệ cao ở Lâm Đồng, TP.HCM, Hà Nội.',
        'Các sản phẩm chủ lực như lúa gạo ở Đồng bằng sông Cửu Long, cà phê ở Tây Nguyên đang dần được áp dụng công nghệ để tăng chất lượng và giá trị xuất khẩu.',
        'Thách thức lớn nhất là chi phí đầu tư ban đầu và trình độ kỹ thuật của nông dân, đòi hỏi các giải pháp công nghệ phải "dễ dùng, dễ trúng thưởng".',
      ],
    },
    careerConnect: {
      name: 'Chị Nguyễn Thị Lan',
      title: 'Chủ trang trại',
      company: 'Dalat Hasfarm',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyenthilan',
      quote:
        'Công nghệ không thay thế người nông dân, mà nó trở thành công cụ đắc lực giúp chúng tôi làm việc thông minh hơn, tạo ra sản phẩm tốt hơn cho người tiêu dùng.',
    },
    quizzes: [
      {
        question: 'IoT trong nông nghiệp là viết tắt của cụm từ nào?',
        options: [
          'Internet of Tractors',
          'Internet of Things',
          'International Organic Technology',
          'Investment in On-farm Technology',
        ],
        correctAnswerIndex: 1,
        explanation:
          'IoT (Internet of Things) là mạng lưới các thiết bị vật lý được gắn cảm biến, phần mềm và các công nghệ khác để kết nối và trao đổi dữ liệu với nhau qua Internet.',
      },
    ],
    faqs: [
      {
        question: 'Precision Farming (Nông nghiệp chính xác) là gì?',
        answer:
          'Nông nghiệp chính xác là một khái niệm quản lý trang trại sử dụng công nghệ thông tin để đảm bảo rằng cây trồng và đất nhận được chính xác những gì chúng cần để có sức khỏe và năng suất tối ưu. Nó trái ngược với phương pháp truyền thống là áp dụng cùng một lượng nước, phân bón cho toàn bộ cánh đồng.',
      },
      {
        question: 'ROI (Return on Investment) của việc áp dụng nông nghiệp thông minh được tính như thế nào?',
        answer:
          'ROI được tính bằng cách lấy lợi nhuận ròng (do tăng năng suất, giảm chi phí đầu vào như nước, phân bón, thuốc trừ sâu) chia cho tổng chi phí đầu tư công nghệ. Một hệ thống IoT có thể có ROI dương trong vòng 1-3 năm tùy thuộc vào quy mô và loại cây trồng.',
      },
      {
        question: 'Cảm biến IoT trong nông nghiệp có thể đo được những thông số gì?',
        answer: 'Các cảm biến phổ biến có thể đo độ ẩm đất, nhiệt độ và độ ẩm không khí, độ pH của đất, độ dẫn điện (EC) để ước tính dinh dưỡng, cường độ ánh sáng, và thậm chí cả nồng độ CO2 trong nhà kính.',
      },
      {
        question: 'Làm thế nào để kết nối các cảm biến ở những nơi không có Wi-Fi?',
        answer: 'Ở những khu vực rộng lớn hoặc không có Wi-Fi, các công nghệ kết nối không dây tầm xa, năng lượng thấp như LoRaWAN hoặc NB-IoT thường được sử dụng để truyền dữ liệu từ cảm biến về trạm trung tâm.',
      },
      {
        question: 'Dữ liệu từ nông nghiệp thông minh được lưu trữ và xử lý ở đâu?',
        answer: 'Dữ liệu thường được gửi lên một nền tảng đám mây (cloud platform). Tại đây, dữ liệu được lưu trữ, phân tích và trực quan hóa thành các biểu đồ, cảnh báo dễ hiểu mà người nông dân có thể truy cập qua điện thoại hoặc máy tính.',
      },
      {
        question: 'Nông nghiệp thông minh có áp dụng được cho quy mô nhỏ, hộ gia đình không?',
        answer: 'Chắc chắn có. Hiện nay có nhiều bộ kit IoT nông nghiệp với chi phí hợp lý, cho phép các hộ gia đình tự động hóa việc tưới tiêu cho vườn rau sân thượng hoặc giám sát điều kiện cho cây trồng trong nhà.',
      },
      {
        question: 'Thách thức lớn nhất khi triển khai nông nghiệp thông minh ở Việt Nam là gì?',
        answer: 'Ngoài chi phí đầu tư ban đầu, thách thức lớn là việc đào tạo và thay đổi tư duy của người nông dân. Các giải pháp công nghệ cần phải thực sự dễ sử dụng, đáng tin cậy và chứng minh được hiệu quả kinh tế rõ ràng.',
      },
      {
        question: 'Truy xuất nguồn gốc sản phẩm có liên quan gì đến nông nghiệp thông minh?',
        answer: 'Nông nghiệp thông minh tạo ra một "nhật ký số" chi tiết về quá trình sinh trưởng của sản phẩm (ngày gieo trồng, lượng nước tưới, loại phân bón...). Dữ liệu này có thể được sử dụng để tạo ra các hệ thống truy xuất nguồn gốc minh bạch, tăng niềm tin cho người tiêu dùng.',
      },
      {
        question: 'Văn hóa "canh tác theo kinh nghiệm" ảnh hưởng đến việc áp dụng công nghệ như thế nào?',
        answer: 'Đây là một rào cản. Nhiều nông dân tin vào kinh nghiệm lâu năm của mình hơn là dữ liệu từ cảm biến. Để vượt qua, các công ty công nghệ cần chứng minh rằng dữ liệu có thể bổ sung và nâng cao kinh nghiệm, giúp đưa ra quyết định chính xác hơn, đặc biệt trong bối cảnh biến đổi khí hậu làm cho các "kinh nghiệm" cũ không còn luôn đúng.',
      },
      {
        question: 'Chính phủ Việt Nam có chính sách gì để hỗ trợ nông nghiệp thông minh?',
        answer: 'Chính phủ đã có nhiều chương trình và đề án hỗ trợ, như "Chương trình chuyển đổi số quốc gia", trong đó nông nghiệp là một lĩnh vực ưu tiên. Các chính sách bao gồm hỗ trợ vốn vay ưu đãi, khuyến khích nghiên cứu và phát triển, và xây dựng các khu nông nghiệp công nghệ cao làm mô hình thí điểm.',
      },
    ],
  },
  {
    id: 'drone-crop-monitoring-3d',
    title: 'Giám sát Cây trồng bằng Drone',
    description:
      'Học cách sử dụng drone và AI để giám sát sức khỏe cây trồng, phát hiện sớm dịch bệnh và tối ưu hóa việc phun thuốc.',
    duration: '105 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=u9x_s30_jlo',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    cropType: 'Lúa, Cà phê, Hoa màu',
    farmSize: 'Trung bình đến lớn',
    technologyLevel: 'Trung bình',
    objectives: [
      'Hiểu được ứng dụng drone trong nông nghiệp precision farming',
      'Nắm vững kỹ thuật chụp ảnh và phân tích hình ảnh từ drone',
      'Phát hiện sớm dịch bệnh và stress cây trồng qua hình ảnh multispectral',
      'Tối ưu hóa việc phun thuốc và bón phán bằng drone',
    ],
    prerequisites: [
      'Kiến thức cơ bản về nông nghiệp',
      'Hiểu biết về công nghệ drone',
      'Kỹ năng phân tích hình ảnh cơ bản',
    ],
    exercises: [
      {
        title: 'Lập kế hoạch Bay Drone cho Ruộng Lúa',
        description: 'Thiết kế flight path tối ưu để giám sát một ruộng lúa 10 hecta',
        difficulty: 'Trung bình',
        materials: ['Phần mềm Mission Planner', 'Google Earth', 'Máy tính'],
        procedure: [
          'Xác định kích thước và hình dạng ruộng lúa trên Google Earth',
          'Thiết lập flight path với overlap 75% giữa các ảnh',
          'Tính toán độ cao bay tối ưu (50-120m)',
          'Lập lịch bay theo giai đoạn sinh trưởng của lúa',
          'Đánh giá thời gian bay và số lần thay pin cần thiết',
        ],
        expectedResults: 'Kế hoạch bay chi tiết với timeline và chi phí ước tính',
        solution: 'Drone có thể giám sát 100 hecta trong 2-3 giờ, hiệu quả hơn gấp 50 lần so với kiểm tra thủ công',
      },
    ],
    realWorldApplications: [
      'Công ty Avimech cung cấp drone nông nghiệp cho nông dân miền Bắc',
      'Dự án "Drone cho nông nghiệp" của Bộ NN&PTNT tại các tỉnh ĐBSCL',
      'Nông dân Tây Ninh sử dụng drone để phun thuốc trừ sâu trên cây cao su',
      'Startup AgriDrone phát triển AI phân tích bệnh cây trồng từ hình ảnh',
    ],
    caseStudies: [
      {
        title: 'Ứng dụng Drone ở Đồng bằng Sông Cửu Long',
        organization: 'Hợp tác xã Nông nghiệp An Giang',
        problem: 'Khó phát hiện sớm bệnh đạo ôn lúa trên diện tích lớn',
        solution: 'Sử dụng drone với camera multispectral để giám sát hàng tuần',
        impact: 'Phát hiện sớm bệnh 85% trường hợp, giảm thiệt hại 60%',
        innovations: ['AI phân tích hình ảnh real-time', 'Alert system tự động', 'Prescription mapping'],
      },
    ],
    resources: [
      {
        title: 'Hướng dẫn sử dụng Drone Nông nghiệp',
        url: 'https://dronethongminh.vn/huong-dan',
        type: 'Tutorial',
      },
      {
        title: 'Phần mềm phân tích NDVI',
        url: 'https://qgis.org/en/site/',
        type: 'Tool',
      },
    ],
    vietnamContext: {
      title: 'Drone: "Mắt thần" trên đồng ruộng Việt',
      content: [
        'Tại Đồng bằng sông Cửu Long, drone phun thuốc đã trở nên phổ biến, giúp nông dân tiết kiệm 30% thuốc, 90% nước và bảo vệ sức khỏe.',
        'Các vườn cây ăn trái lớn ở miền Đông Nam Bộ dùng drone để thụ phấn nhân tạo, giải quyết vấn đề thiếu côn trùng thụ phấn tự nhiên.',
        'Chính phủ Việt Nam đang xây dựng hành lang pháp lý cho việc sử dụng drone trong nông nghiệp, mở đường cho công nghệ này phát triển mạnh mẽ hơn.',
      ],
    },
    careerConnect: {
      name: 'Anh Trần Văn A',
      title: 'Phi công Drone Nông nghiệp',
      company: 'AgriDrone Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=tranvana',
      quote:
        'Nghề của chúng tôi là "lái máy bay" trên đồng ruộng. Mỗi chuyến bay không chỉ giúp tăng năng suất mà còn giúp người nông dân bớt đi gánh nặng và độc hại.',
    },
    quizzes: [
      {
        question: 'Chỉ số NDVI (Normalized Difference Vegetation Index) được dùng để đo lường điều gì?',
        options: ['Độ ẩm của đất', 'Sức khỏe và mật độ của thảm thực vật', 'Nhiệt độ của lá cây', 'Tốc độ gió'],
        correctAnswerIndex: 1,
        explanation:
          'NDVI được tính toán từ ánh sáng phản xạ ở vùng cận hồng ngoại (NIR) và vùng ánh sáng nhìn thấy (VIS). Thực vật khỏe mạnh hấp thụ nhiều ánh sáng đỏ và phản xạ nhiều ánh sáng cận hồng ngoại, do đó có chỉ số NDVI cao.',
      },
    ],
    faqs: [
      {
        question: 'Sử dụng drone trong nông nghiệp ở Việt Nam có cần giấy phép không?',
        answer:
          'Có. Việc sử dụng máy bay không người lái (drone) tại Việt Nam phải tuân thủ các quy định của Bộ Quốc phòng. Người dùng cần đăng ký thiết bị và xin giấy phép bay cho từng khu vực và khoảng thời gian cụ thể để đảm bảo an ninh, an toàn hàng không.',
      },
      {
        question: 'Camera đa phổ (multispectral camera) khác gì camera thường?',
        answer:
          'Camera thường (RGB) chỉ thu nhận ánh sáng trong 3 dải màu mà mắt người nhìn thấy (Đỏ, Xanh lá, Xanh dương). Camera đa phổ có thể thu nhận ánh sáng ở các dải sóng khác, đặc biệt là vùng cận hồng ngoại (NIR), giúp phát hiện các dấu hiệu stress của cây trồng mà mắt thường không thể nhìn thấy.',
      },
      {
        question: 'Drone phun thuốc trừ sâu có ưu điểm gì so với phun tay?',
        answer: 'Drone phun thuốc nhanh hơn, đều hơn và giúp người nông dân tránh tiếp xúc trực tiếp với hóa chất độc hại. Nó cũng tạo ra luồng gió từ cánh quạt giúp thuốc bám đều cả mặt trên và mặt dưới của lá, tăng hiệu quả và giảm lượng thuốc cần dùng.',
      },
      {
        question: 'Chi phí đầu tư một chiếc drone nông nghiệp là bao nhiêu?',
        answer: 'Chi phí có thể dao động rất lớn, từ vài chục triệu đồng cho một chiếc drone giám sát nhỏ, đến vài trăm triệu đồng cho một chiếc drone phun thuốc chuyên dụng có tải trọng lớn. Tuy nhiên, ngày càng có nhiều dịch vụ cho thuê drone, giúp nông dân tiếp cận công nghệ mà không cần đầu tư lớn ban đầu.',
      },
      {
        question: 'Làm thế nào để xử lý hàng trăm hoặc hàng nghìn bức ảnh từ drone?',
        answer: 'Các phần mềm chuyên dụng như Agisoft Metashape hoặc Pix4D được sử dụng để "ghép" (stitching) hàng nghìn bức ảnh lại với nhau, tạo thành một bản đồ trực quan (orthomosaic map) duy nhất của toàn bộ khu vực khảo sát.',
      },
      {
        question: 'Drone có thể bay trong điều kiện thời tiết xấu không?',
        answer: 'Hầu hết các drone nông nghiệp không nên bay khi có mưa hoặc gió mạnh (thường trên 30-40 km/h). Gió mạnh có thể ảnh hưởng đến sự ổn định của drone và làm tản mát thuốc phun không đều. Mưa có thể làm hỏng các linh kiện điện tử.',
      },
      {
        question: 'Ngoài giám sát cây trồng, drone còn có ứng dụng gì khác trong nông nghiệp?',
        answer: 'Drone còn được dùng để gieo hạt, thụ phấn cho cây trồng, đếm số lượng cây, đánh giá thiệt hại sau thiên tai, và thậm chí là lùa gia súc ở các trang trại lớn.',
      },
      {
        question: 'AI có vai trò gì trong việc phân tích ảnh từ drone?',
        answer: 'AI (Trí tuệ nhân tạo), đặc biệt là các mô hình Computer Vision, có thể tự động phân tích hình ảnh từ drone để đếm cây, xác định loài cỏ dại, phát hiện các khu vực cây trồng bị bệnh hoặc thiếu dinh dưỡng, và tạo ra "bản đồ sức khỏe" cho toàn bộ cánh đồng.',
      },
      {
        question: 'Độ chính xác của việc phun thuốc bằng drone như thế nào?',
        answer: 'Các drone hiện đại được trang bị GPS RTK (Real-Time Kinematic) có thể đạt độ chính xác đến từng centimet. Điều này cho phép phun thuốc một cách cực kỳ chính xác vào các khu vực cần thiết, tránh lãng phí và giảm tác động đến môi trường.',
      },
      {
        question: 'Tương lai của drone trong nông nghiệp Việt Nam sẽ như thế nào?',
        answer: 'Trong tương lai, chúng ta có thể thấy các "đàn" drone (drone swarms) hoạt động phối hợp với nhau một cách tự động để quản lý các trang trại lớn, tích hợp dữ liệu với robot mặt đất và các hệ thống IoT để tạo thành một hệ sinh thái nông nghiệp hoàn toàn tự động.',
      },
    ],
  },
  {
    id: 'smart-irrigation-systems',
    title: 'Hệ thống Tưới tiêu Thông minh',
    description:
      'Thiết kế và triển khai hệ thống tưới tiêu tự động dựa trên dữ liệu sensor và dự báo thời tiết để tối ưu hóa việc sử dụng nước.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=Xsm5Wc2x49A',
    imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
    cropType: 'Cây ăn quả, Rau màu',
    farmSize: 'Vừa đến lớn',
    technologyLevel: 'Trung bình',
    objectives: [
      'Thiết kế hệ thống tưới tiêu tự động với sensor độ ẩm đất',
      'Tích hợp dữ liệu thời tiết để tối ưu hóa lịch tưới',
      'Tính toán hiệu quả sử dụng nước và ROI của hệ thống',
      'Triển khai giải pháp cho các loại cây trồng khác nhau',
    ],
    prerequisites: [
      'Kiến thức về hệ thống tưới tiêu truyền thống',
      'Hiểu biết cơ bản về sensor và IoT',
      'Kỹ năng đọc hiểu dữ liệu và biểu đồ',
    ],
    exercises: [
      {
        title: 'Thiết kế Hệ thống Tưới nhỏ giọt Thông minh',
        description: 'Tạo ra hệ thống tưới tự động cho vườn cây ăn quả 5 hecta',
        difficulty: 'Trung bình',
        materials: ['Sơ đồ vườn cây', 'Catalog thiết bị tưới', 'Calculator'],
        procedure: [
          'Phân tích nhu cầu nước của từng loại cây trong vườn',
          'Thiết kế sơ đồ đường ống và vị trí đặt sensor',
          'Tính toán lưu lượng nước và áp suất cần thiết',
          'Lập trình logic điều khiển dựa trên dữ liệu sensor',
          'Ước tính chi phí đầu tư và tiết kiệm nước hàng năm',
        ],
        expectedResults: 'Bản thiết kế hoàn chỉnh với ước tính chi phí và hiệu quả',
        solution: 'Hệ thống thông minh có thể tiết kiệm 30-50% nước so với tưới truyền thống',
      },
    ],
    realWorldApplications: [
      'Các nông trại Đà Lạt sử dụng hệ thống tưới thông minh cho hoa và rau',
      'Vườn cây ăn quả ở Tiền Giang áp dụng IoT để tưới tự động',
      'Công ty Netafim Việt Nam cung cấp giải pháp tưới nhỏ giọt thông minh',
      'Dự án tưới tiêu thông minh tại các tỉnh miền Trung chống hạn hán',
    ],
    caseStudies: [
      {
        title: 'Vườn Cây ăn quả Thông minh Tiền Giang',
        organization: 'HTX Nông nghiệp Cai Lậy',
        problem: 'Lãng phí nước tưới và năng suất không ổn định',
        solution: 'Triển khai hệ thống tưới nhỏ giọt với IoT monitoring',
        impact: 'Tiết kiệm 40% nước, tăng năng suất 25%, giảm chi phí lao động 30%',
        innovations: ['Weather-based scheduling', 'Soil moisture optimization', 'Remote monitoring'],
      },
    ],
    resources: [
      {
        title: 'Cẩm nang Tưới tiêu Thông minh',
        url: 'https://smartirrigation.org/guide',
        type: 'Documentation',
      },
      {
        title: 'IoT Platform cho Nông nghiệp',
        url: 'https://blynk.io/',
        type: 'Tool',
      },
    ],
    vietnamContext: {
      title: 'Giải bài toán "khát" cho nông nghiệp Việt',
      content: [
        'Tưới nhỏ giọt theo công nghệ Israel đang được áp dụng rộng rãi tại các vùng khô hạn như Ninh Thuận, Bình Thuận, giúp trồng được các loại cây có giá trị cao như nho, táo.',
        'Đối với cây cà phê ở Tây Nguyên, tưới thông minh không chỉ tiết kiệm nước mà còn giúp cây ra hoa đồng loạt, tăng tỷ lệ đậu quả và chất lượng hạt.',
        'Thách thức là tích hợp hệ thống tưới với các nguồn nước không ổn định và địa hình phức tạp của Việt Nam.',
      ],
    },
    careerConnect: {
      name: 'Ông Nguyễn Văn Dũng',
      title: 'Kỹ sư trưởng',
      company: 'Netafim Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyenvandung',
      quote:
        'Mỗi giọt nước được tiết kiệm hôm nay là một hạt giống cho tương lai bền vững của nông nghiệp Việt Nam. Công nghệ tưới thông minh chính là chìa khóa.',
    },
    quizzes: [
      {
        question: 'Hệ thống tưới tiêu thông minh thường dựa vào dữ liệu từ cảm biến nào nhất?',
        options: ['Cảm biến nhiệt độ không khí', 'Cảm biến ánh sáng', 'Cảm biến độ ẩm đất', 'Cảm biến âm thanh'],
        correctAnswerIndex: 2,
        explanation:
          'Cảm biến độ ẩm đất là thành phần cốt lõi, nó cung cấp dữ liệu trực tiếp về lượng nước có sẵn cho rễ cây, giúp hệ thống quyết định khi nào và tưới bao nhiêu là tối ưu.',
      },
    ],
    faqs: [
      {
        question: 'Hệ thống tưới nhỏ giọt có lợi ích gì so với tưới phun mưa?',
        answer:
          'Tưới nhỏ giọt đưa nước trực tiếp đến vùng rễ của cây, giảm thiểu sự bay hơi và thất thoát nước. Nó hiệu quả hơn tưới phun mưa, đặc biệt ở những vùng khô hạn và gió nhiều. Tưới nhỏ giọt cũng giúp hạn chế sự phát triển của cỏ dại giữa các hàng cây.',
      },
      {
        question: 'Làm thế nào để một hệ thống tưới thông minh tích hợp được dự báo thời tiết?',
        answer:
          'Hệ thống sẽ kết nối với một dịch vụ API thời tiết. Nếu hệ thống dự báo sắp có mưa lớn, lịch tưới tự động sẽ được hoãn lại hoặc giảm lượng nước tưới, giúp tiết kiệm nước và tránh tình trạng ngập úng cho cây trồng.',
      },
      {
        question: 'Hệ thống tưới thông minh có thể giúp bón phân không?',
        answer: 'Có, kỹ thuật này được gọi là "fertigation" (bón phân qua tưới). Hệ thống có thể tự động hòa tan phân bón vào nước tưới với nồng độ chính xác và cung cấp dinh dưỡng cho cây một cách đều đặn, hiệu quả hơn nhiều so với bón phân thủ công.',
      },
      {
        question: 'Chi phí lắp đặt một hệ thống tưới thông minh có cao không?',
        answer: 'Chi phí ban đầu có thể cao hơn so với hệ thống truyền thống, nhưng khoản đầu tư này thường được bù đắp trong vài năm nhờ việc tiết kiệm nước, phân bón, chi phí nhân công và tăng năng suất cây trồng.',
      },
      {
        question: 'Cảm biến độ ẩm đất hoạt động như thế nào?',
        answer: 'Có hai loại chính: cảm biến điện dung (capacitive) và cảm biến điện trở (resistive). Cảm biến điện dung đo sự thay đổi điện dung của đất, vốn bị ảnh hưởng bởi hàm lượng nước. Chúng thường chính xác và bền hơn cảm biến điện trở, loại đo điện trở của đất.',
      },
      {
        question: 'Hệ thống có thể điều khiển các khu vực tưới khác nhau một cách độc lập không?',
        answer: 'Có. Một hệ thống tưới thông minh tốt cho phép chia trang trại thành nhiều "vùng" (zones). Mỗi vùng có thể được điều khiển độc lập dựa trên loại cây trồng, loại đất và dữ liệu từ cảm biến riêng của vùng đó.',
      },
      {
        question: 'Nếu mất kết nối internet, hệ thống có còn hoạt động không?',
        answer: 'Nhiều bộ điều khiển thông minh hiện đại có khả năng lưu trữ lịch trình tưới cơ bản và hoạt động ngoại tuyến. Tuy nhiên, chúng sẽ không thể cập nhật dữ liệu thời tiết hoặc nhận lệnh điều khiển từ xa cho đến khi kết nối được khôi phục.',
      },
      {
        question: 'Làm thế nào để bảo trì một hệ thống tưới nhỏ giọt?',
        answer: 'Bảo trì bao gồm việc kiểm tra và làm sạch các bộ lọc, xả cặn định kỳ các đường ống, và kiểm tra các đầu nhỏ giọt để đảm bảo chúng không bị tắc nghẽn bởi cặn khoáng hoặc rêu.',
      },
      {
        question: 'Hệ thống tưới thông minh có phù hợp với mọi loại đất không?',
        answer: 'Hệ thống này có thể được điều chỉnh để phù hợp với nhiều loại đất. Ví dụ, đối với đất sét giữ nước tốt, hệ thống sẽ tưới với tần suất thấp hơn nhưng thời gian dài hơn. Đối với đất cát thoát nước nhanh, hệ thống sẽ tưới với tần suất cao hơn nhưng thời gian ngắn hơn.',
      },
      {
        question: 'Tôi có thể tự lắp đặt một hệ thống tưới thông minh không?',
        answer: 'Đối với các khu vườn nhỏ hoặc quy mô gia đình, việc tự lắp đặt là hoàn toàn khả thi với các bộ kit có sẵn trên thị trường. Tuy nhiên, đối với các trang trại lớn, việc thuê một công ty chuyên nghiệp để thiết kế và lắp đặt sẽ đảm bảo hiệu quả và độ tin cậy của hệ thống.',
      },
    ],
  },
  {
    id: 'blockchain-supply-chain',
    title: 'Blockchain trong Chuỗi Cung ứng Nông sản',
    description:
      'Ứng dụng công nghệ blockchain để tạo sự minh bạch và truy xuất nguồn gốc trong chuỗi cung ứng nông sản từ nông trại đến người tiêu dùng.',
    duration: '135 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=ojP9nY-YJNg',
    imageUrl: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=600&fit=crop',
    cropType: 'Tất cả nông sản',
    farmSize: 'Lớn và chuỗi cung ứng',
    technologyLevel: 'Nâng cao',
    objectives: [
      'Hiểu được cách blockchain tạo minh bạch trong chuỗi cung ứng',
      'Thiết kế hệ thống truy xuất nguồn gốc cho nông sản',
      'Phát triển smart contract cho giao dịch nông sản',
      'Đánh giá lợi ích và thách thức của blockchain trong nông nghiệp',
    ],
    prerequisites: [
      'Hiểu biết cơ bản về blockchain và cryptocurrency',
      'Kiến thức về chuỗi cung ứng nông sản',
      'Kỹ năng lập trình cơ bản (khuyến nghị)',
    ],
    exercises: [
      {
        title: 'Thiết kế Hệ thống Truy xuất Nguồn gốc Cà phê',
        description: 'Tạo blockchain system để theo dõi cà phê từ nông trại đến cửa hàng',
        difficulty: 'Nâng cao',
        materials: ['Hyperledger Fabric mô phỏng', 'Flowchart tool', 'Database design'],
        procedure: [
          'Xác định các bên liên quan trong chuỗi cung ứng cà phê',
          'Thiết kế data structure cho mỗi giai đoạn (trồng, thu hoạch, chế biến, vận chuyển)',
          'Tạo smart contract cho việc chuyển giao quyền sở hữu',
          'Phát triển interface cho nông dân, nhà máy, và nhà bán lẻ',
          'Test hệ thống với một lô cà phê mẫu từ Đăk Lăk',
        ],
        expectedResults: 'Hệ thống blockchain hoàn chỉnh với demo truy xuất nguồn gốc',
        solution: 'Blockchain giúp tăng giá trị nông sản 15-30% nhờ xây dựng niềm tin người tiêu dùng',
      },
    ],
    realWorldApplications: [
      'Walmart sử dụng blockchain để truy xuất nguồn gốc thực phẩm tại Việt Nam',
      'Công ty TNHH Cà phê Trung Nguyên thí điểm blockchain cho cà phê organic',
      'Dự án VeChain với nông sản Việt Nam xuất khẩu sang Trung Quốc',
      'Startup AgriChain phát triển platform blockchain cho nông dân Việt',
    ],
    caseStudies: [
      {
        title: 'Chuỗi Cung ứng Cà phê Organic Đăk Lăk',
        organization: 'Tập đoàn Cà phê Việt Nam',
        problem: 'Khó chứng minh nguồn gốc và chất lượng organic cho thị trường xuất khẩu',
        solution: 'Triển khai blockchain platform theo dõi từ nông trại đến cửa hàng',
        impact: 'Tăng giá bán 25%, giảm thời gian certification 60%, tăng niềm tin khách hàng',
        innovations: ['QR code truy xuất instant', 'IoT sensors tích hợp', 'International compliance'],
      },
    ],
    resources: [
      {
        title: 'Blockchain cho Nông nghiệp',
        url: 'https://hyperledger.org/use-cases/agriculture',
        type: 'Documentation',
      },
      {
        title: 'Platform phát triển Smart Contract',
        url: 'https://remix.ethereum.org/',
        type: 'Tool',
      },
    ],
    vietnamContext: {
      title: 'Minh bạch hóa nông sản Việt bằng Blockchain',
      content: [
        'Đối với các sản phẩm xuất khẩu chủ lực như gạo, cà phê, thủy sản, blockchain là "giấy thông hành" để vào các thị trường khó tính như EU, Nhật Bản, Mỹ.',
        'Nhiều hợp tác xã đã áp dụng tem QR code dựa trên blockchain, cho phép người tiêu dùng quét và xem toàn bộ "nhật ký" của sản phẩm từ lúc gieo trồng.',
        'Thách thức là làm sao để tất cả các tác nhân trong chuỗi cung ứng, đặc biệt là các nông hộ nhỏ lẻ, có thể tham gia vào hệ thống một cách dễ dàng.',
      ],
    },
    careerConnect: {
      name: 'Ông Đào Hà Trung',
      title: 'Chủ tịch Hội Công nghệ cao TP.HCM (HITECH)',
      company: 'TE-FOOD International',
      imageUrl: 'https://i.pravatar.cc/150?u=daohatrung',
      quote:
        'Blockchain không phải là cây đũa thần, nhưng nó là công cụ mạnh mẽ nhất để xây dựng niềm tin - thứ còn quý hơn vàng trong ngành nông sản.',
    },
    quizzes: [
      {
        question: 'Đặc tính nào của Blockchain làm cho nó phù hợp với việc truy xuất nguồn gốc?',
        options: [
          'Tính ẩn danh',
          'Tính tập trung',
          'Tính bất biến (không thể thay đổi) và minh bạch',
          'Tốc độ giao dịch nhanh',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Tính bất biến đảm bảo rằng một khi dữ liệu đã được ghi vào chuỗi, không ai có thể sửa đổi hoặc xóa nó. Tính minh bạch cho phép tất cả các bên được cấp phép có thể xem cùng một thông tin, tạo ra một "sự thật duy nhất".',
      },
    ],
    faqs: [
      {
        question: 'Smart Contract (Hợp đồng thông minh) trong chuỗi cung ứng nông sản là gì?',
        answer:
          'Smart Contract là các chương trình máy tính tự động thực thi các điều khoản của một hợp đồng khi các điều kiện được đáp ứng. Ví dụ, một smart contract có thể tự động chuyển tiền thanh toán cho nông dân ngay khi hệ thống xác nhận lô hàng đã được giao đến kho của nhà bán lẻ, mà không cần sự can thiệp của bên thứ ba.',
      },
      {
        question: 'Blockchain có giúp chống hàng giả, hàng nhái không?',
        answer:
          'Có. Bằng cách tạo ra một bản ghi kỹ thuật số không thể thay đổi cho mỗi sản phẩm, blockchain giúp người tiêu dùng xác thực nguồn gốc và hành trình của sản phẩm. Nếu một sản phẩm không có trong hệ thống blockchain hoặc có thông tin không khớp, nó có khả năng cao là hàng giả.',
      },
      {
        question: 'Dữ liệu trên blockchain có hoàn toàn an toàn không?',
        answer: 'Bản thân dữ liệu một khi đã được ghi vào blockchain thì rất an toàn và gần như không thể thay đổi. Tuy nhiên, điểm yếu nằm ở khâu nhập dữ liệu ban đầu (nguyên tắc "rác vào, rác ra"). Nếu thông tin sai được nhập vào blockchain ngay từ đầu, hệ thống vẫn sẽ ghi lại thông tin sai đó. Do đó, việc kết hợp blockchain với các cảm biến IoT để tự động thu thập dữ liệu là rất quan trọng.',
      },
      {
        question: 'Public Blockchain và Private Blockchain khác nhau như thế nào?',
        answer: 'Public Blockchain (như Bitcoin, Ethereum) cho phép bất kỳ ai cũng có thể tham gia và xem dữ liệu. Private Blockchain (hoặc Consortium Blockchain như Hyperledger Fabric) chỉ cho phép các bên được cấp phép tham gia. Đối với chuỗi cung ứng doanh nghiệp, Private Blockchain thường được ưa chuộng hơn vì nó cho phép kiểm soát quyền riêng tư và hiệu suất tốt hơn.',
      },
      {
        question: 'Chi phí để triển khai blockchain cho chuỗi cung ứng có đắt không?',
        answer: 'Chi phí ban đầu có thể đáng kể, bao gồm chi phí phát triển nền tảng, tích hợp với các hệ thống hiện có, và đào tạo nhân viên. Tuy nhiên, nhiều công ty cung cấp các giải pháp "Blockchain-as-a-Service" (BaaS), cho phép doanh nghiệp sử dụng công nghệ blockchain trên cơ sở thuê bao, giảm bớt gánh nặng đầu tư ban đầu.',
      },
      {
        question: 'Làm thế nào để kết nối sản phẩm vật lý với bản ghi kỹ thuật số trên blockchain?',
        answer: 'Điều này thường được thực hiện bằng cách gán cho mỗi sản phẩm hoặc lô sản phẩm một mã định danh duy nhất, thường là dưới dạng mã QR, NFC hoặc thẻ RFID. Người dùng có thể quét mã này để truy cập thông tin tương ứng trên blockchain.',
      },
      {
        question: 'Blockchain có thể giúp nông dân nhỏ lẻ không?',
        answer: 'Có, về lý thuyết. Blockchain có thể giúp nông dân nhỏ lẻ tiếp cận thị trường tốt hơn và nhận được giá bán công bằng hơn bằng cách chứng minh chất lượng và nguồn gốc sản phẩm của họ. Tuy nhiên, thách thức là làm cho công nghệ trở nên dễ tiếp cận và dễ sử dụng đối với họ.',
      },
      {
        question: 'Ngoài truy xuất nguồn gốc, blockchain còn có ứng dụng gì khác trong nông nghiệp?',
        answer: 'Blockchain còn có thể được sử dụng để quản lý tài chính nông nghiệp (cho vay vi mô, bảo hiểm mùa màng dựa trên smart contract), quản lý quyền sử dụng đất, và tạo ra các thị trường giao dịch nông sản phi tập trung.',
      },
      {
        question: 'Tốc độ giao dịch của blockchain có phải là một vấn đề không?',
        answer: 'Đối với các public blockchain như Bitcoin, tốc độ giao dịch chậm có thể là một vấn đề. Tuy nhiên, các private blockchain được thiết kế cho doanh nghiệp như Hyperledger Fabric có thể xử lý hàng nghìn giao dịch mỗi giây, đủ nhanh cho hầu hết các ứng dụng chuỗi cung ứng.',
      },
      {
        question: 'Ai là người sở hữu và kiểm soát dữ liệu trên một private blockchain?',
        answer: 'Trong một private blockchain (hoặc consortium blockchain), quyền sở hữu và kiểm soát được chia sẻ giữa các thành viên tham gia (ví dụ: nông dân, nhà chế biến, nhà vận chuyển, nhà bán lẻ). Các quy tắc về ai có thể xem và ghi dữ liệu nào được xác định trước bởi các thành viên này.',
      },
    ],
  },
  {
    id: 'vertical-farming-systems',
    title: 'Hệ thống Nông nghiệp Đứng',
    description:
      'Khám phá công nghệ vertical farming và hydroponic để tối đa hóa năng suất trên diện tích nhỏ, phù hợp với xu hướng đô thị hóa.',
    duration: '110 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=XNlNP75vyYc',
    imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop',
    cropType: 'Rau xanh, Thảo mộc',
    farmSize: 'Nhỏ, Đô thị',
    technologyLevel: 'Trung bình',
    objectives: [
      'Hiểu được nguyên lý và lợi ích của vertical farming',
      'Thiết kế hệ thống hydroponic cho urban farming',
      'Tối ưu hóa ánh sáng LED và dinh dưỡng cho cây trồng',
      'Phân tích kinh tế và tính bền vững của mô hình',
    ],
    prerequisites: [
      'Kiến thức cơ bản về sinh lý thực vật',
      'Hiểu biết về hệ thống điện và LED',
      'Kỹ năng thiết kế và tính toán cơ bản',
    ],
    exercises: [
      {
        title: 'Thiết kế Vertical Farm cho Căn hộ Chung cư',
        description: 'Tạo hệ thống trồng rau trong không gian 10m2',
        difficulty: 'Trung bình',
        materials: ['Software thiết kế 3D', 'Catalog thiết bị', 'Máy tính'],
        procedure: [
          'Khảo sát không gian và điều kiện ánh sáng tự nhiên',
          'Thiết kế khung giá đỡ tối ưu cho 5-7 tầng trồng',
          'Tính toán hệ thống đèn LED và thời gian chiếu sáng',
          'Thiết kế hệ thống tuần hoàn nước và dinh dưỡng',
          'Ước tính chi phí đầu tư và sản lượng dự kiến',
        ],
        expectedResults: 'Bản thiết kế 3D với danh sách thiết bị và chi phí',
        solution: 'Vertical farm mini có thể sản xuất 20-30kg rau/tháng trong 10m2',
      },
    ],
    realWorldApplications: [
      'Saigon Innovation Hub phát triển vertical farm cho các trường học TP.HCM',
      'Startup VinEco triển khai hệ thống urban farming tại các chung cư cao cấp',
      'Đại học Nông Lâm TP.HCM nghiên cứu hydroponic cho nông nghiệp đô thị',
      'Các khách sạn 5 sao sử dụng vertical farm để cung cấp rau sạch',
    ],
    caseStudies: [
      {
        title: 'Urban Farm tại Landmark 81',
        organization: 'Vinhomes Central Park',
        problem: 'Cung cấp rau sạch cho cư dân trong môi trường đô thị',
        solution: 'Xây dựng vertical farm 200m2 trên tầng thượng chung cư',
        impact: 'Sản xuất 500kg rau/tháng, giảm 70% chi phí mua rau cho cư dân',
        innovations: ['Automated nutrient system', 'Climate control', 'Mobile app monitoring'],
      },
    ],
    resources: [
      {
        title: 'Hướng dẫn Vertical Farming',
        url: 'https://verticalfarm.org/guide',
        type: 'Documentation',
      },
      {
        title: 'Hydroponic Calculator',
        url: 'https://hydroponics.net/calculator',
        type: 'Tool',
      },
    ],
    vietnamContext: {
      title: 'Mang trang trại về thành phố',
      content: [
        'Với tốc độ đô thị hóa nhanh, vertical farming là giải pháp tiềm năng để đảm bảo an ninh lương thực cho các thành phố lớn như Hà Nội và TP.HCM.',
        'Mô hình này đặc biệt phù hợp để trồng các loại rau gia vị, salad cao cấp cho các nhà hàng, khách sạn, đảm bảo độ tươi ngon và an toàn tuyệt đối.',
        'Các công ty như Vingroup đang tiên phong trong việc tích hợp các trang trại thẳng đứng vào các khu đô thị thông minh của họ.',
      ],
    },
    careerConnect: {
      name: 'Chị Phan Thị Thảo',
      title: 'Sáng lập',
      company: 'Greeny Vertical Farm',
      imageUrl: 'https://i.pravatar.cc/150?u=phanthithao',
      quote:
        'Chúng tôi không chỉ trồng rau, chúng tôi mang cả một hệ sinh thái xanh vào từng ngôi nhà, giúp mọi người kết nối lại với thiên nhiên ngay trong lòng đô thị.',
    },
    quizzes: [
      {
        question: 'Hydroponics là phương pháp trồng cây...',
        options: [
          'Trong không khí',
          'Trong dung dịch dinh dưỡng, không cần đất',
          'Trên các tầng cao của tòa nhà',
          'Chỉ sử dụng ánh sáng mặt trời',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Hydroponics là một nhánh của hydroculture, phương pháp trồng cây mà không cần đất, bằng cách sử dụng dung dịch dinh dưỡng khoáng chất trong dung môi nước.',
      },
    ],
    faqs: [
      {
        question: 'Tại sao đèn LED chuyên dụng lại quan trọng cho vertical farming?',
        answer:
          'Đèn LED chuyên dụng cho phép tùy chỉnh quang phổ ánh sáng để phù hợp với từng giai đoạn phát triển của cây (ví dụ, ánh sáng xanh cho giai đoạn tăng trưởng lá, ánh sáng đỏ cho giai đoạn ra hoa). Chúng cũng tiết kiệm năng lượng và tỏa nhiệt ít hơn so với các loại đèn truyền thống, rất quan trọng trong không gian kín của trang trại thẳng đứng.',
      },
      {
        question: 'Vertical farming có thực sự bền vững không?',
        answer:
          'Mô hình này có nhiều ưu điểm bền vững: sử dụng ít hơn tới 95% nước so với nông nghiệp truyền thống, không cần thuốc trừ sâu, và giảm quãng đường vận chuyển thực phẩm đến người tiêu dùng. Tuy nhiên, nó đòi hỏi một lượng lớn năng lượng cho việc chiếu sáng và kiểm soát khí hậu, đây là một thách thức cần được giải quyết bằng các nguồn năng lượng tái tạo.',
      },
      {
        question: 'Sự khác biệt giữa Hydroponics, Aeroponics và Aquaponics là gì?',
        answer: 'Cả ba đều là phương pháp trồng cây không cần đất. Hydroponics: rễ cây được ngâm trong dung dịch dinh dưỡng. Aeroponics: rễ cây được treo lơ lửng trong không khí và được phun sương dinh dưỡng. Aquaponics: kết hợp nuôi cá và trồng cây; chất thải từ cá được vi khuẩn chuyển hóa thành dinh dưỡng cho cây.',
      },
      {
        question: 'Những loại cây nào phù hợp nhất để trồng trong trang trại thẳng đứng?',
        answer: 'Các loại cây phát triển nhanh, có giá trị cao và không chiếm nhiều không gian là phù hợp nhất, chẳng hạn như các loại rau diếp, cải bó xôi, cải xoăn, các loại thảo mộc (húng quế, bạc hà), và dâu tây.',
      },
      {
        question: 'Năng suất của vertical farming so với nông nghiệp truyền thống như thế nào?',
        answer: 'Năng suất trên một mét vuông của vertical farming có thể cao hơn hàng chục, thậm chí hàng trăm lần so với nông nghiệp truyền thống, vì nó cho phép trồng nhiều lớp và có thể thu hoạch quanh năm, không phụ thuộc vào mùa vụ.',
      },
      {
        question: 'Hệ thống kiểm soát khí hậu (HVAC) có vai trò gì?',
        answer: 'Hệ thống HVAC (Heating, Ventilation, and Air Conditioning) rất quan trọng để duy trì nhiệt độ, độ ẩm và luồng không khí tối ưu cho cây trồng. Nó cũng giúp kiểm soát nồng độ CO2, một yếu tố quan trọng cho quá trình quang hợp.',
      },
      {
        question: 'Chi phí vận hành chính của một trang trại thẳng đứng là gì?',
        answer: 'Chi phí vận hành lớn nhất thường là tiền điện để chạy hệ thống chiếu sáng và kiểm soát khí hậu. Các chi phí khác bao gồm dung dịch dinh dưỡng, hạt giống và nhân công.',
      },
      {
        question: 'Trang trại thẳng đứng có thể trồng được các loại cây lương thực như lúa hoặc ngô không?',
        answer: 'Về mặt kỹ thuật là có thể, nhưng không kinh tế. Các loại cây lương thực cần rất nhiều không gian và ánh sáng, và giá trị sản phẩm trên mỗi kg không đủ cao để bù đắp cho chi phí vận hành của một trang trại thẳng đứng. Mô hình này hiệu quả hơn với các loại cây trồng có giá trị cao.',
      },
      {
        question: 'Làm thế nào để đảm bảo cây trồng trong hệ thống hydroponics không bị bệnh?',
        answer: 'Môi trường được kiểm soát chặt chẽ của trang trại thẳng đứng giúp giảm nguy cơ sâu bệnh. Tuy nhiên, các bệnh do nấm hoặc vi khuẩn lây lan qua nước vẫn có thể xảy ra. Việc khử trùng nước (ví dụ bằng tia UV) và duy trì vệ sinh hệ thống là rất quan trọng.',
      },
      {
        question: 'Tương lai của vertical farming sẽ như thế nào?',
        answer: 'Tương lai của vertical farming có thể sẽ tích hợp sâu hơn với AI để tối ưu hóa mọi yếu tố, sử dụng robot để tự động hóa hoàn toàn việc gieo trồng và thu hoạch, và được cung cấp năng lượng hoàn toàn từ các nguồn tái tạo, trở thành một phần không thể thiếu của các thành phố thông minh.',
      },
    ],
  },
  {
    id: 'ai-pest-disease-detection',
    title: 'AI Phát hiện Sâu bệnh Cây trồng',
    description:
      'Sử dụng machine learning và computer vision để phát hiện sớm sâu bệnh, giúp nông dân can thiệp kịp thời và giảm thiệt hại.',
    duration: '125 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=c62HxNjLKo0',
    imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
    cropType: 'Lúa, Cây ăn quả, Rau màu',
    farmSize: 'Trung bình đến lớn',
    technologyLevel: 'Nâng cao',
    objectives: [
      'Hiểu được ứng dụng AI và computer vision trong nông nghiệp',
      'Phát triển model AI để nhận diện sâu bệnh từ hình ảnh',
      'Tạo mobile app cho nông dân sử dụng AI detection',
      'Đánh giá độ chính xác và hiệu quả của hệ thống AI',
    ],
    prerequisites: [
      'Kiến thức cơ bản về machine learning',
      'Hiểu biết về bệnh cây trồng phổ biến',
      'Kỹ năng lập trình Python cơ bản',
    ],
    exercises: [
      {
        title: 'Huấn luyện Model Nhận diện Bệnh Lá Lúa',
        description: 'Xây dựng CNN model để phân loại bệnh lá lúa từ hình ảnh',
        difficulty: 'Nâng cao',
        materials: ['Dataset hình ảnh bệnh lúa', 'Google Colab', 'TensorFlow/Keras'],
        procedure: [
          'Download dataset 5000 ảnh lá lúa (khỏe mạnh, đạo ôn, cháy lá, khô vằn)',
          'Preprocessing ảnh: resize, normalization, data augmentation',
          'Thiết kế CNN architecture với transfer learning (ResNet50)',
          'Training model với 80% data, validation 20%',
          'Đánh giá accuracy, precision, recall và confusion matrix',
        ],
        expectedResults: 'AI model với độ chính xác >90% trong nhận diện bệnh lúa',
        solution: 'CNN model có thể đạt 92-95% accuracy, giúp phát hiện sớm bệnh 2-3 tuần',
      },
    ],
    realWorldApplications: [
      'PlantVillage platform của Penn State hỗ trợ nông dân Châu Phi',
      'Startup Việt Nam phát triển app "Bác sĩ cây trồng" cho nông dân',
      'Google AI for Social Good project về plant disease detection',
      'Các trung tâm khuyến nông sử dụng AI để tư vấn từ xa',
    ],
    caseStudies: [
      {
        title: 'AI Plant Doctor cho Nông dân Đồng bằng Sông Cửu Long',
        organization: 'Trung tâm Khuyến nông Quốc gia',
        problem: 'Nông dân khó tiếp cận chuyên gia khi cây bị bệnh',
        solution: 'Triển khai app AI có thể chẩn đoán 15 loại bệnh phổ biến',
        impact: 'Giảm 40% thời gian chẩn đoán, tăng 60% khả năng điều trị thành công',
        innovations: ['Offline AI model', 'Voice guidance tiếng Việt', 'Community support network'],
      },
    ],
    resources: [
      {
        title: 'PlantVillage Dataset',
        url: 'https://www.kaggle.com/emmarex/plantdisease',
        type: 'Dataset',
      },
      {
        title: 'TensorFlow Plant Disease Guide',
        url: 'https://tensorflow.org/lite/examples/image_classification',
        type: 'Tutorial',
      },
    ],
    vietnamContext: {
      title: '"Bác sĩ cây trồng" trong túi nông dân Việt',
      content: [
        'Các ứng dụng di động như "Bác sĩ Cây trồng" đang giúp nông dân Việt Nam tự chẩn đoán bệnh cho cây chỉ bằng một bức ảnh chụp từ điện thoại.',
        'Dữ liệu hình ảnh về các loại sâu bệnh đặc hữu của Việt Nam là yếu tố quan trọng để xây dựng các mô hình AI chính xác và hiệu quả.',
        'AI không chỉ phát hiện bệnh mà còn có thể đưa ra khuyến nghị về loại thuốc và liều lượng phù hợp, giúp giảm lạm dụng thuốc bảo vệ thực vật.',
      ],
    },
    careerConnect: {
      name: 'TS. Nguyễn Đức Thành',
      title: 'Nhà khoa học dữ liệu',
      company: 'Viện Di truyền Nông nghiệp',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyenducthanh',
      quote:
        'Mỗi bức ảnh về một chiếc lá bệnh mà người nông dân gửi lên là một đóng góp quý giá. Chúng tôi dùng AI để biến hàng triệu bức ảnh đó thành tri thức giúp ích lại cho hàng triệu người.',
    },
    quizzes: [
      {
        question: 'Transfer Learning trong Computer Vision là gì?',
        options: [
          'Chuyển ảnh từ máy tính này sang máy tính khác',
          'Sử dụng một mô hình đã được huấn luyện trên một bộ dữ liệu lớn (ví dụ: ImageNet) làm điểm khởi đầu để huấn luyện cho một tác vụ mới',
          'Chuyển đổi mô hình từ TensorFlow sang PyTorch',
          'Học cách nhận diện nhiều loại bệnh cùng lúc',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Transfer Learning giúp tiết kiệm thời gian và tài nguyên tính toán đáng kể. Thay vì huấn luyện từ đầu, chúng ta tận dụng các "kiến thức" về các đặc trưng hình ảnh (cạnh, góc, kết cấu...) mà mô hình lớn đã học được.',
      },
    ],
    faqs: [
      {
        question: 'Làm thế nào để cải thiện độ chính xác của mô hình AI nhận diện bệnh cây trồng?',
        answer:
          'Độ chính xác có thể được cải thiện bằng nhiều cách: tăng số lượng và sự đa dạng của hình ảnh trong tập dữ liệu huấn luyện, sử dụng các kỹ thuật tăng cường dữ liệu (data augmentation), tinh chỉnh kiến trúc mô hình (ví dụ: thêm các lớp, thay đổi hàm kích hoạt), và sử dụng các kỹ thuật ensemble (kết hợp nhiều mô hình).',
      },
      {
        question: 'Mô hình AI có thể hoạt động khi không có kết nối internet không?',
        answer:
          'Có. Các mô hình có thể được tối ưu hóa và nén lại (ví dụ: sử dụng TensorFlow Lite) để chạy trực tiếp trên thiết bị di động. Điều này rất quan trọng cho nông dân ở các khu vực có kết nối internet kém, cho phép họ sử dụng ứng dụng ngay tại ruộng đồng.',
      },
      {
        question: 'Data Augmentation (Tăng cường dữ liệu) trong ngữ cảnh này là gì?',
        answer: 'Là kỹ thuật tạo ra các phiên bản ảnh mới từ ảnh gốc bằng cách xoay, lật, thay đổi độ sáng, độ tương phản, hoặc thêm nhiễu. Điều này giúp mô hình học được cách nhận diện bệnh trong nhiều điều kiện ánh sáng và góc chụp khác nhau, làm cho nó trở nên mạnh mẽ hơn.',
      },
      {
        question: 'Mô hình AI có thể phân biệt được giữa bệnh và tình trạng thiếu dinh dưỡng không?',
        answer: 'Có, nếu nó được huấn luyện trên một tập dữ liệu đủ lớn và đa dạng, bao gồm cả hình ảnh của cây bị bệnh và cây bị thiếu các loại dinh dưỡng khác nhau. Đây là một bài toán phân loại đa lớp phức tạp nhưng hoàn toàn khả thi.',
      },
      {
        question: 'Làm thế nào để thu thập dữ liệu hình ảnh để huấn luyện mô hình?',
        answer: 'Dữ liệu có thể được thu thập từ nhiều nguồn: chụp ảnh trực tiếp tại các trang trại, hợp tác với các viện nghiên cứu nông nghiệp, hoặc sử dụng các bộ dữ liệu công khai như PlantVillage. Việc có các chuyên gia nông nghiệp gán nhãn chính xác cho các hình ảnh là cực kỳ quan trọng.',
      },
      {
        question: 'CNN (Convolutional Neural Network) là gì và tại sao nó phù hợp cho việc nhận diện hình ảnh?',
        answer: 'CNN là một loại mạng nơ-ron nhân tạo được thiết kế đặc biệt để xử lý dữ liệu hình ảnh. Nó phù hợp vì kiến trúc của nó, với các lớp tích chập (convolutional layers), có khả năng tự động và hiệu quả trong việc học các đặc trưng phân cấp từ hình ảnh, từ các cạnh và góc đơn giản đến các cấu trúc phức tạp như mắt hoặc khuôn mặt. Điều này bắt chước cách hệ thống thị giác của con người hoạt động.',
      },
      {
        question: 'Mô hình có thể đưa ra mức độ nghiêm trọng của bệnh không?',
        answer: 'Có. Thay vì chỉ phân loại bệnh, mô hình có thể được huấn luyện để phân loại mức độ nghiêm trọng (ví dụ: nhẹ, trung bình, nặng) dựa trên tỷ lệ diện tích lá bị ảnh hưởng. Đây là một bài toán hồi quy hoặc phân loại theo thứ tự.',
      },
      {
        question: 'Làm thế nào để người nông dân tin tưởng vào kết quả chẩn đoán của AI?',
        answer: 'Để xây dựng lòng tin, các ứng dụng AI nên cung cấp "bằng chứng" cho chẩn đoán của mình, ví dụ bằng cách làm nổi bật các vùng trên ảnh mà mô hình cho là có dấu hiệu bệnh. Ngoài ra, việc cung cấp thông tin về độ tin cậy (confidence score) của dự đoán cũng rất hữu ích.',
      },
      {
        question: 'AI có thể dự đoán sự bùng phát của dịch bệnh không?',
        answer: 'Có, bằng cách kết hợp dữ liệu phát hiện bệnh từ nhiều người dùng với dữ liệu thời tiết và các yếu tố môi trường khác, các mô hình AI có thể dự đoán nguy cơ bùng phát dịch bệnh ở một khu vực cụ thể, giúp đưa ra cảnh báo sớm cho cộng đồng.',
      },
      {
        question: 'Việc phát triển các mô hình AI này có tốn kém không?',
        answer: 'Việc huấn luyện các mô hình lớn từ đầu đòi hỏi tài nguyên tính toán đáng kể. Tuy nhiên, kỹ thuật Transfer Learning cho phép các nhà phát triển tận dụng các mô hình đã được huấn luyện trước, giảm đáng kể chi phí và thời gian phát triển, làm cho công nghệ này ngày càng dễ tiếp cận hơn.',
      },
    ],
  },
  {
    id: 'agricultural-robotics',
    title: 'Robot Nông nghiệp và Tự động hóa',
    description:
      'Khám phá các loại robot nông nghiệp từ robot thu hoạch đến robot làm cỏ, hiểu cách chúng thay đổi ngành nông nghiệp hiện đại.',
    duration: '140 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=-OeaKm-aBio',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    cropType: 'Đa dạng',
    farmSize: 'Lớn và công nghiệp',
    technologyLevel: 'Nâng cao',
    objectives: [
      'Hiểu được các loại robot nông nghiệp và ứng dụng của chúng',
      'Thiết kế robot đơn giản cho tác vụ nông nghiệp cụ thể',
      'Phân tích ROI và tính khả thi của robot nông nghiệp',
      'Đánh giá tác động của robotics đến việc làm nông nghiệp',
    ],
    prerequisites: [
      'Kiến thức cơ bản về robotics và automation',
      'Hiểu biết về quy trình nông nghiệp',
      'Kỹ năng thiết kế cơ khí cơ bản',
    ],
    exercises: [
      {
        title: 'Thiết kế Robot Thu hoạch Cà chua',
        description: 'Tạo concept robot tự động thu hoạch cà chua trong nhà kính',
        difficulty: 'Nâng cao',
        materials: ['CAD software', 'Sensor specifications', 'Actuator catalogs'],
        procedure: [
          'Phân tích yêu cầu: nhận diện cà chua chín, gắp không làm hỏng',
          'Thiết kế cơ cấu di chuyển trong lối đi nhà kính',
          'Thiết kế tay gắp với độ mềm mại phù hợp',
          'Tích hợp camera và AI vision cho object detection',
          'Tính toán tốc độ thu hoạch và chi phí vận hành',
        ],
        expectedResults: 'Bản thiết kế robot hoàn chỉnh với specifications kỹ thuật',
        solution: 'Robot thu hoạch có thể làm việc 24/7, hiệu quả gấp 5-10 lần thủ công',
      },
    ],
    realWorldApplications: [
      'Công ty John Deere phát triển máy kéo tự động cho nông nghiệp lớn',
      'Robot Ecorobotix của Thụy Sĩ làm cỏ chính xác từng cây',
      'Startup Việt Nam nghiên cứu robot thu hoạch lúa tự động',
      'Robot ong thụ phấn thay thế khi thiếu ong tự nhiên',
    ],
    caseStudies: [
      {
        title: 'Robot Farm tại Australia',
        organization: 'Australian Centre for Field Robotics',
        problem: 'Thiếu lao động nông nghiệp mùa thu hoạch',
        solution: 'Triển khai robot fleet cho gieo hạt, làm cỏ, thu hoạch',
        impact: 'Giảm 60% chi phí lao động, tăng 25% hiệu quả thu hoạch',
        innovations: ['Swarm robotics', 'Autonomous coordination', 'Multi-crop capability'],
      },
    ],
    resources: [
      {
        title: 'Agricultural Robotics Research',
        url: 'https://www.field-robotics.org/',
        type: 'Research',
      },
      {
        title: 'ROS cho Robot Nông nghiệp',
        url: 'https://wiki.ros.org/agriculture',
        type: 'Documentation',
      },
    ],
    vietnamContext: {
      title: 'Robot thay trâu trên đồng ruộng Việt Nam?',
      content: [
        'Tình trạng thiếu lao động nông thôn do di cư ra thành thị đang thúc đẩy nhu cầu tự động hóa trong nông nghiệp Việt Nam.',
        'Các viện nghiên cứu và trường đại học như Đại học Bách Khoa đang phát triển các mẫu robot nông nghiệp "made in Vietnam" với chi phí hợp lý.',
        'Robot nông nghiệp không chỉ giải quyết bài toán lao động mà còn giúp thực hiện các công việc đòi hỏi độ chính xác cao mà con người khó làm được, như vi phun thuốc hoặc làm cỏ chọn lọc.',
      ],
    },
    careerConnect: {
      name: 'PGS. TS. Đỗ Văn Dũng',
      title: 'Nguyên Hiệu trưởng',
      company: 'Đại học Sư phạm Kỹ thuật TP.HCM',
      imageUrl: 'https://i.pravatar.cc/150?u=dovandung',
      quote:
        'Tương lai của nông nghiệp nằm ở những cỗ máy thông minh. Đào tạo ra một thế hệ kỹ sư có thể thiết kế, chế tạo và vận hành những robot này là nhiệm vụ của chúng tôi.',
    },
    quizzes: [
      {
        question: 'ROS trong robotics là viết tắt của?',
        options: [
          'Robot Operating System',
          'Remote Operation Service',
          'Robotic Object Sensor',
          'Real-time Operating System',
        ],
        correctAnswerIndex: 0,
        explanation:
          'ROS (Robot Operating System) là một framework linh hoạt để viết phần mềm cho robot. Nó cung cấp một tập hợp các công cụ, thư viện và quy ước nhằm mục đích đơn giản hóa nhiệm vụ tạo ra các hành vi robot phức tạp và mạnh mẽ trên nhiều nền tảng robot khác nhau.',
      },
    ],
    faqs: [
      {
        question: 'Robot nông nghiệp có thay thế hoàn toàn lao động con người không?',
        answer:
          'Không hoàn toàn. Robot có xu hướng thay thế các công việc lặp đi lặp lại, nặng nhọc và nguy hiểm (như phun thuốc trừ sâu). Tuy nhiên, vẫn cần con người để giám sát, bảo trì robot, và thực hiện các công việc đòi hỏi sự phán đoán tinh vi. Robot sẽ thay đổi bản chất của công việc nông nghiệp, đòi hỏi người lao động có kỹ năng cao hơn.',
      },
      {
        question: 'SLAM (Simultaneous Localization and Mapping) là gì và tại sao nó quan trọng cho robot nông nghiệp?',
        answer:
          'SLAM là khả năng của một robot có thể xây dựng một bản đồ của môi trường xung quanh và đồng thời xác định vị trí của chính nó trên bản đồ đó. Đây là công nghệ cốt lõi cho phép robot tự động di chuyển và điều hướng trong các môi trường phức tạp như một trang trại mà không cần đến GPS có độ chính xác cao.',
      },
      {
        question: 'Làm thế nào để một robot thu hoạch phân biệt được quả chín và quả xanh?',
        answer: 'Robot sử dụng camera kết hợp với các thuật toán Computer Vision. Mô hình AI được huấn luyện để nhận diện màu sắc, kích thước và hình dạng của quả chín. Một số robot còn có thể sử dụng cảm biến quang phổ để phân tích thành phần hóa học của quả.',
      },
      {
        question: 'Robot nông nghiệp có thể làm việc trong mọi điều kiện thời tiết không?',
        answer: 'Không. Hầu hết các robot hiện nay hoạt động tốt nhất trong điều kiện khô ráo. Mưa, bùn lầy và sương mù dày đặc có thể ảnh hưởng đến hoạt động của các cảm biến (như camera, LiDAR) và khả năng di chuyển của robot.',
      },
      {
        question: 'Chi phí của một robot nông nghiệp là bao nhiêu?',
        answer: 'Chi phí rất đa dạng, từ vài nghìn đô la cho một robot làm cỏ đơn giản đến hàng trăm nghìn đô la cho một máy thu hoạch tự động phức tạp. Tuy nhiên, mô hình "Robotics-as-a-Service" (RaaS), nơi nông dân thuê robot theo giờ hoặc theo diện tích, đang trở nên phổ biến.',
      },
      {
        question: 'Tay gắp (end-effector) của robot thu hoạch được thiết kế như thế nào?',
        answer: 'Thiết kế tay gắp là một trong những thách thức lớn nhất. Chúng thường được làm bằng vật liệu mềm (soft robotics) và sử dụng khí nén hoặc thủy lực để tạo ra một lực kẹp đủ chắc để giữ quả nhưng đủ nhẹ nhàng để không làm dập nát.',
      },
      {
        question: 'Robot có thể giúp giảm việc sử dụng thuốc diệt cỏ không?',
        answer: 'Chắc chắn có. Các robot làm cỏ sử dụng camera để xác định chính xác vị trí của cây cỏ dại và tiêu diệt chúng bằng nhiều phương pháp như nhổ cơ học, đốt bằng laser, hoặc phun một lượng nhỏ thuốc diệt cỏ chính xác vào cây cỏ đó, thay vì phun tràn lan ra cả cánh đồng.',
      },
      {
        question: 'Làm thế nào để robot và con người có thể làm việc an toàn cùng nhau trong một trang trại?',
        answer: 'Robot được trang bị nhiều lớp cảm biến an toàn như LiDAR, camera và cảm biến va chạm để phát hiện người và các vật cản. Chúng được lập trình để dừng lại hoặc thay đổi đường đi khi có người đến gần. Các quy trình an toàn và khu vực làm việc được phân định rõ ràng cũng rất quan trọng.',
      },
      {
        question: 'Robot nông nghiệp có thể được điều khiển từ xa không?',
        answer: 'Có. Hầu hết các robot đều có khả năng được giám sát và điều khiển từ xa thông qua máy tính hoặc điện thoại thông minh. Điều này cho phép một người vận hành có thể quản lý cả một đội robot từ một trung tâm điều khiển.',
      },
      {
        question: 'Tương lai của robot nông nghiệp là gì?',
        answer: 'Tương lai là các trang trại hoàn toàn tự động, nơi các đội robot (robot mặt đất và drone) phối hợp với nhau, chia sẻ dữ liệu và đưa ra quyết định một cách tự chủ để tối ưu hóa toàn bộ quá trình sản xuất từ gieo trồng đến thu hoạch.',
      },
    ],
  },
];
