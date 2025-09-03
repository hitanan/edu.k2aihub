import type { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface NanotechnologyLesson extends BaseLessonData {
  nanotechApplications: string[];
  materialsProperties: string[];
  safetyConsiderations: string[];
}

export const nanotechnologyLessons: NanotechnologyLesson[] = [
  {
    id: 'nanomaterials-synthesis-characterization',
    title: 'Tổng hợp & Đặc tính hóa Vật liệu Nano',
    description:
      'Khoa học vật liệu nano toàn diện bao gồm các phương pháp tổng hợp, kỹ thuật đặc tính hóa và phân tích thuộc tính. Tập trung vào năng lực nghiên cứu và ứng dụng của Việt Nam trong điện tử, năng lượng và công nghệ môi trường.',
    duration: '195 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=YhuUFLzJSsg',
    imageUrl: 'https://i.ytimg.com/vi/8DpZ1beHuK8/hqdefault.jpg',
    objectives: [
      'Nắm vững các kỹ thuật tổng hợp vật liệu nano: phương pháp từ trên xuống và từ dưới lên',
      'Hiểu các phương pháp đặc tính hóa: kính hiển vi điện tử, quang phổ, phân tích tia X',
      'Áp dụng mối quan hệ cấu trúc-thuộc tính trong thiết kế vật liệu nano',
      'Thiết kế vật liệu nano cho các ứng dụng cụ thể trong các ngành công nghiệp Việt Nam',
      'Tuân thủ các quy trình an toàn và cân nhắc về môi trường khi xử lý vật liệu nano',
    ],
    prerequisites: [
      'Nền tảng vững chắc về hóa học, vật lý và khoa học vật liệu',
      'Hiểu biết về tinh thể học và vật lý chất rắn',
      'Kiến thức về các kỹ thuật tổng hợp hóa học và quy trình phòng thí nghiệm',
      'Quen thuộc với các công cụ phân tích và phân tích dữ liệu',
    ],
    nanotechApplications: [],
    materialsProperties: [],
    safetyConsiderations: [],
    exercises: [
      {
        title: 'Tổng hợp hạt nano vàng cho ứng dụng y tế tại Việt Nam',
        description:
          'Tổng hợp và đặc tính hóa các hạt nano vàng được tối ưu hóa cho các ứng dụng phân phối thuốc trong hệ thống y tế Việt Nam',
        difficulty: 'Nâng cao',
        materials: [
          'Hóa chất tiền chất vàng (HAuCl4)',
          'Chất khử và phối tử ổn định',
          'Máy quang phổ UV-Vis',
          'Kính hiển vi điện tử truyền qua',
          'Thiết bị tán xạ ánh sáng động',
        ],
        procedure: [
          'Thiết kế quy trình tổng hợp nhắm đến kích thước và hình thái hạt cụ thể',
          'Chuẩn bị hạt nano vàng bằng phương pháp khử citrate',
          'Đặc tính hóa các thuộc tính quang học bằng quang phổ UV-Vis',
          'Phân tích kích thước và hình thái hạt bằng hình ảnh TEM',
          'Đánh giá độ ổn định keo và đo điện tích bề mặt',
          'Kiểm tra khả năng tương thích sinh học và khả năng tải thuốc',
        ],
        expectedResults:
          'Các hạt nano vàng đơn phân tán với kích thước được kiểm soát (10-50 nm) phù hợp cho các ứng dụng y sinh',
        solution:
          'Tổng hợp tối ưu tạo ra các hạt nano ổn định, tương thích sinh học sẵn sàng cho các ứng dụng dược phẩm trong y tế Việt Nam',
      },
      {
        title: 'Sản xuất Ống nano Carbon cho Thiết bị Điện tử Việt Nam',
        description:
          'Phát triển quy trình tổng hợp ống nano carbon được tối ưu hóa cho các ứng dụng thiết bị điện tử trong sản xuất Việt Nam',
        difficulty: 'Nâng cao',
        materials: [
          'Hệ thống lắng đọng hơi hóa học (CVD)',
          'Khí nguồn carbon (metan, axetilen)',
          'Hạt nano xúc tác kim loại',
          'Thiết bị quang phổ Raman',
          'Công cụ đặc tính điện',
        ],
        procedure: [
          'Tối ưu hóa điều kiện CVD: nhiệt độ, áp suất, lưu lượng khí',
          'Chuẩn bị bề mặt xúc tác cho sự phát triển ống nano có kiểm soát',
          'Tổng hợp ống nano carbon đơn tường với chất lượng cao',
          'Đặc tính hóa các thuộc tính cấu trúc bằng quang phổ Raman',
          'Đo độ dẫn điện và các thuộc tính điện tử',
          'Đánh giá tính phù hợp cho các ứng dụng điện cực trong suốt',
        ],
        expectedResults:
          'Ống nano carbon chất lượng cao với các thuộc tính điện tuyệt vời phù hợp cho các ứng dụng điện tử',
        solution:
          'Quá trình tổng hợp có kiểm soát cho phép sản xuất ống nano carbon đáp ứng các thông số kỹ thuật cho sản xuất điện tử Việt Nam',
      },
    ],
    realWorldApplications: [
      'Ngành công nghiệp điện tử Việt Nam: Vật liệu nano cho các thiết bị bán dẫn',
      'Các viện nghiên cứu y tế: Y học nano và hệ thống phân phối thuốc',
      'Ngành năng lượng: Vật liệu nano cho pin mặt trời và pin lưu trữ',
      'Công nghệ môi trường: Vật liệu nano để xử lý nước',
      'Ngành dệt may: Lớp phủ nano cho các loại vải chức năng',
    ],
    caseStudies: [
      {
        title: 'Nghiên cứu Y học Nano tại Đại học Quốc gia Việt Nam',
        organization: 'ĐHQG Hà Nội - Khoa Khoa học Vật liệu',
        problem:
          'Phát triển các giải pháp y học nano cho các thách thức y tế của Việt Nam bao gồm phân phối thuốc và ứng dụng chẩn đoán',
        solution:
          'Thành lập các cơ sở tổng hợp và đặc tính hóa vật liệu nano toàn diện tập trung vào các ứng dụng y sinh',
        impact:
          'Phát triển hơn 5 nguyên mẫu y học nano, đào tạo hơn 50 nhà nghiên cứu, thiết lập quan hệ đối tác công nghiệp để thương mại hóa',
        innovations: [
          'Tổng hợp hạt nano tương thích sinh học',
          'Hệ thống phân phối thuốc có mục tiêu',
          'Chất cản quang dựa trên hạt nano',
          'Lớp phủ nano kháng khuẩn',
        ],
      },
      {
        title: 'Phát triển Điện tử Nano tại Đại học FPT',
        organization: 'Đại học FPT - Trung tâm Nghiên cứu Công nghệ Nano',
        problem: 'Tạo ra các khả năng công nghệ nano hỗ trợ phát triển ngành công nghiệp điện tử Việt Nam',
        solution:
          'Xây dựng các cơ sở chế tạo nano hiện đại và phát triển các chương trình nghiên cứu liên quan đến ngành công nghiệp',
        impact:
          'Hỗ trợ hơn 10 công ty điện tử, phát triển các nhà cung cấp vật liệu nano, nâng cao khả năng công nghệ của Việt Nam',
        innovations: [
          'Điện tử ống nano carbon',
          'Vật liệu nanocomposite',
          'Chất nền điện tử linh hoạt',
          'Nền tảng công nghệ cảm biến',
        ],
      },
    ],
    resources: [
      {
        title: 'Viện Khoa học Vật liệu - ĐHQG Hà Nội',
        url: 'https://ims.vnu.edu.vn/',
        type: 'Research Institution',
      },
      {
        title: 'Tạp chí Nature Nanotechnology',
        url: 'https://www.nature.com/nnano/',
        type: 'Scientific Publication',
      },
      {
        title: 'Trung tâm Nanoarchitectonics Vật liệu Quốc tế',
        url: 'https://www.nims.go.jp/mana/',
        type: 'Research Collaboration',
      },
    ],
    vietnamContext: {
      title: 'Bối cảnh Nghiên cứu Công nghệ Nano tại Việt Nam',
      content: [
        'Các chương trình nghiên cứu của Đại học Quốc gia Việt Nam.',
        'Các sáng kiến công nghệ nano của Đại học FPT.',
        'Các trung tâm thuộc Viện Hàn lâm Khoa học và Công nghệ Việt Nam.',
        'Hợp tác quốc tế với Singapore, Nhật Bản.',
        'Nguồn vốn của chính phủ cho nghiên cứu công nghệ nano.',
      ],
    },
    careerConnect: {
      name: 'TS. Trần Thị Anh Thư',
      title: 'Nhà nghiên cứu chính',
      company: 'Viện Khoa học Vật liệu',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-thi-anh-thu',
      quote:
        'Công nghệ nano mở ra những cánh cửa không tưởng cho y học và năng lượng sạch tại Việt Nam. Công việc của chúng tôi là biến những hạt vật chất siêu nhỏ thành những giải pháp vĩ đại cho đất nước.',
    },
    quizzes: [
      {
        question:
          'Phương pháp nào sau đây thuộc về cách tiếp cận "từ dưới lên" (bottom-up) trong tổng hợp vật liệu nano?',
        options: ['Nghiền bi', 'Lắng đọng hóa học từ pha hơi (CVD)', 'Quang khắc', 'Ăn mòn'],
        correctAnswerIndex: 1,
        explanation:
          'Phương pháp "từ dưới lên" xây dựng vật liệu nano từ các nguyên tử hoặc phân tử, và CVD là một ví dụ điển hình.',
      },
      {
        question: 'Kỹ thuật nào thường được sử dụng để xác định kích thước và hình thái của hạt nano?',
        options: [
          'Quang phổ UV-Vis',
          'Nhiễu xạ tia X (XRD)',
          'Kính hiển vi điện tử truyền qua (TEM)',
          'Phân tích nhiệt trọng lượng (TGA)',
        ],
        correctAnswerIndex: 2,
        explanation:
          'TEM cung cấp hình ảnh có độ phân giải cao, cho phép quan sát trực tiếp hình dạng và đo lường kích thước của các hạt nano.',
      },
    ],
  },
  {
    id: 'nanoelectronics-quantum-devices',
    title: 'Điện tử Nano & Thiết bị Lượng tử',
    description:
      'Điện tử nano tiên tiến bao gồm các thiết bị lượng tử, điện tử phân tử và công nghệ máy tính thế hệ tiếp theo. Khám phá các ứng dụng trong ngành công nghiệp bán dẫn Việt Nam và công nghệ lượng tử mới nổi.',
    duration: '210 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=2voX3fjMGjA',
    imageUrl: 'https://i.ytimg.com/vi/6SHv455QHlU/hqdefault.jpg',
    objectives: [
      'Hiểu các nguyên lý cơ học lượng tử trong các thiết bị điện tử nano',
      'Nắm vững các kỹ thuật chế tạo và đặc tính hóa thiết bị lượng tử',
      'Áp dụng các khái niệm điện tử phân tử cho máy tính thế hệ tiếp theo',
      'Thiết kế các cảm biến và phần tử tính toán lượng tử',
      'Khám phá các cơ hội của Việt Nam trong phát triển công nghệ lượng tử',
    ],
    prerequisites: [
      'Vật lý nâng cao: cơ học lượng tử, vật lý chất rắn',
      'Kỹ thuật điện tử: vật lý thiết bị bán dẫn',
      'Khoa học vật liệu: vật liệu điện tử, khoa học bề mặt',
      'Toán học: đại số tuyến tính, phương trình vi phân',
    ],
    nanotechApplications: [],
    materialsProperties: [],
    safetyConsiderations: [],
    exercises: [
      {
        title: 'Phát triển Pin mặt trời Chấm lượng tử',
        description:
          'Thiết kế và chế tạo pin mặt trời chấm lượng tử được tối ưu hóa cho các ứng dụng năng lượng mặt trời tại Việt Nam',
        difficulty: 'Nâng cao',
        materials: [
          'Thiết bị tổng hợp chấm lượng tử',
          'Công cụ chế tạo pin mặt trời',
          'Máy quang phổ để đặc tính hóa quang học',
          'Hệ thống đo lường điện',
          'Buồng thử nghiệm môi trường',
        ],
        procedure: [
          'Tổng hợp các chấm lượng tử với vùng cấm được điều chỉnh cho phổ mặt trời',
          'Chuẩn bị màng mỏng chấm lượng tử bằng phương pháp xử lý dung dịch',
          'Chế tạo các thiết bị pin mặt trời với kiến trúc được tối ưu hóa',
          'Đặc tính hóa sự hấp thụ quang và các thuộc tính phát quang',
          'Đo hiệu suất quang điện: hiệu suất, độ ổn định',
          'Đánh giá hiệu suất trong điều kiện khí hậu nhiệt đới của Việt Nam',
        ],
        expectedResults: 'Pin mặt trời chấm lượng tử với hiệu suất >10% ổn định trong điều kiện nhiệt đới',
        solution:
          'Các thiết bị chấm lượng tử được tối ưu hóa cung cấp các giải pháp năng lượng mặt trời hiệu quả về chi phí cho thị trường năng lượng tái tạo của Việt Nam',
      },
      {
        title: 'Prototyping Thiết bị Điện tử Phân tử',
        description: 'Phát triển các công tắc và cảm biến điện tử phân tử cho các ứng dụng IoT tại Việt Nam',
        difficulty: 'Nâng cao',
        materials: [
          'Phòng thí nghiệm tổng hợp phân tử',
          'Hệ thống kính hiển vi quét',
          'Thiết bị đặc tính điện',
          'Phòng sạch chế tạo thiết bị',
          'Phần mềm mô phỏng máy tính',
        ],
        procedure: [
          'Thiết kế cấu trúc phân tử với các thuộc tính điện tử có thể chuyển đổi',
          'Tổng hợp các phân tử mục tiêu với độ tinh khiết được kiểm soát',
          'Đặc tính hóa các thuộc tính điện tử phân tử bằng cách sử dụng STM',
          'Chế tạo các thiết bị thử nghiệm điện tử phân tử',
          'Đo lường hành vi chuyển đổi và độ ổn định của thiết bị',
          'Đánh giá các ứng dụng trong mạng lưới cảm biến IoT của Việt Nam',
        ],
        expectedResults: 'Các thiết bị điện tử phân tử chức năng cho thấy hành vi chuyển đổi đáng tin cậy',
        solution:
          'Điện tử phân tử cho phép các cảm biến siêu nhỏ phù hợp cho các ứng dụng thành phố thông minh tại Việt Nam',
      },
    ],
    realWorldApplications: [
      'Các công ty bán dẫn Việt Nam: Phát triển thiết bị thế hệ tiếp theo',
      'Các nhà sản xuất điện tử: Tích hợp cảm biến lượng tử',
      'Các viện nghiên cứu: Các chương trình nghiên cứu tính toán lượng tử',
      'Viễn thông: Công nghệ truyền thông lượng tử',
      'Ứng dụng quốc phòng: Cảm biến và truyền thông lượng tử',
    ],
    caseStudies: [
      {
        title: 'Đối tác Công nghệ Lượng tử Việt Nam-Nhật Bản',
        organization: 'Viện Hàn lâm Khoa học Việt Nam và RIKEN Nhật Bản',
        problem: 'Phát triển năng lực của Việt Nam trong nghiên cứu và ứng dụng công nghệ lượng tử',
        solution:
          'Thành lập các chương trình nghiên cứu chung, chuyển giao công nghệ và các sáng kiến xây dựng năng lực',
        impact:
          'Thành lập trung tâm nghiên cứu lượng tử, đào tạo hơn 30 nhà nghiên cứu, phát triển các nguyên mẫu cảm biến lượng tử',
        innovations: [
          'Phát triển cảm biến lượng tử',
          'Giao thức truyền thông lượng tử',
          'Thuật toán tính toán lượng tử',
          'Chương trình chuyển giao công nghệ',
        ],
      },
      {
        title: 'Các Ứng dụng Cảm biến Lượng tử tại Việt Nam',
        organization: 'Viện Vật lý Việt Nam',
        problem: 'Áp dụng công nghệ cảm biến lượng tử cho giám sát cơ sở hạ tầng và khám phá tài nguyên',
        solution: 'Phát triển các cảm biến lượng tử cho các cuộc khảo sát địa chất và giám sát cơ sở hạ tầng',
        impact:
          'Nâng cao khả năng khám phá khoáng sản, cải thiện giám sát cơ sở hạ tầng, hỗ trợ các nghiên cứu môi trường',
        innovations: [
          'Cảm biến lượng tử cầm tay',
          'Gravimeter độ chính xác cao',
          'Cảm biến giám sát môi trường',
          'Thuật toán phân tích dữ liệu',
        ],
      },
    ],
    resources: [
      {
        title: 'Viện Vật lý - VAST',
        url: 'https://iop.vast.ac.vn/',
        type: 'Research Institution',
      },
      {
        title: 'Tạp chí Nature Quantum Information',
        url: 'https://www.nature.com/nqi/',
        type: 'Scientific Publication',
      },
      {
        title: 'Hội Điện tử Lượng tử IEEE',
        url: 'https://www.ieee.org/communities/societies/photonics.html',
        type: 'Professional Organization',
      },
    ],
    vietnamContext: {
      title: 'Bối cảnh Nghiên cứu Lượng tử tại Việt Nam',
      content: [
        'Hợp tác công nghệ lượng tử Việt Nam-Nhật Bản.',
        'Các sáng kiến nghiên cứu lượng tử của Việt Nam.',
        'Phát triển mạng lưới lượng tử khu vực.',
        'Quan hệ đối tác công nghiệp cho các ứng dụng lượng tử.',
        'Các chương trình giáo dục về công nghệ lượng tử.',
      ],
    },
    careerConnect: {
      name: 'PGS. TS. Nguyễn Thế Toàn',
      title: 'Trưởng phòng thí nghiệm Quang học Lượng tử',
      company: 'Viện Vật lý',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-the-toan',
      quote:
        'Việt Nam đang bước những bước đầu tiên vào cuộc cách mạng lượng tử. Chúng tôi đang xây dựng nền tảng để một ngày nào đó, Việt Nam có thể tự chủ về công nghệ cảm biến và truyền thông bảo mật dựa trên các nguyên lý lượng tử.',
    },
    quizzes: [
      {
        question: 'Qubit là gì?',
        options: [
          'Một loại bóng bán dẫn',
          'Đơn vị cơ bản của thông tin lượng tử',
          'Một loại cảm biến',
          'Một thuật toán mã hóa',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Qubit, hay bit lượng tử, là đơn vị cơ bản của thông tin trong máy tính lượng tử, tương tự như bit trong máy tính cổ điển nhưng có thêm các thuộc tính lượng tử như chồng chập và vướng víu.',
      },
      {
        question: 'Ứng dụng nào sau đây KHÔNG phải là một ứng dụng tiềm năng của công nghệ lượng tử?',
        options: [
          'Phát triển thuốc mới',
          'Tạo ra vật liệu mới',
          'Cải thiện dự báo thời tiết',
          'Làm cho video tải nhanh hơn trên YouTube',
        ],
        correctAnswerIndex: 3,
        explanation:
          'Công nghệ lượng tử có tiềm năng cách mạng hóa các lĩnh vực đòi hỏi tính toán phức tạp như mô phỏng phân tử (thuốc, vật liệu) và tối ưu hóa, nhưng không trực tiếp cải thiện tốc độ streaming video thông thường.',
      },
    ],
  },
  {
    id: 'biomedical-nanotechnology',
    title: 'Công nghệ Nano Y sinh & Phân phối Thuốc',
    description:
      'Các ứng dụng y sinh tiên tiến của công nghệ nano bao gồm hệ thống phân phối thuốc, hạt nano chẩn đoán và y học tái tạo. Tập trung vào các ứng dụng y tế và các quy định pháp lý tại Việt Nam.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=DAOFpgocfrg',
    imageUrl: 'https://i.ytimg.com/vi/rlv250ZdjaI/hqdefault.jpg',
    objectives: [
      'Nắm vững các nguyên tắc thiết kế và tổng hợp hạt nano y sinh',
      'Hiểu các cơ chế phân phối thuốc và chiến lược nhắm mục tiêu',
      'Áp dụng công nghệ nano cho các ứng dụng chẩn đoán và điều trị',
      'Thiết kế vật liệu nano tương thích sinh học đáp ứng các yêu cầu an toàn',
      'Tuân thủ các quy định y tế của Việt Nam để phát triển y học nano',
    ],
    prerequisites: [
      'Kiến thức cơ bản về kỹ thuật y sinh: sinh học tế bào, dược lý học',
      'Khoa học vật liệu: vật liệu tương thích sinh học, hóa học bề mặt',
      'Hóa học: tổng hợp hữu cơ, hóa phân tích',
      'Hiểu biết về sinh lý người và cơ chế bệnh tật',
    ],
    nanotechApplications: [],
    materialsProperties: [],
    safetyConsiderations: [],
    exercises: [
      {
        title: 'Hệ thống phân phối thuốc điều trị ung thư có mục tiêu',
        description:
          'Phát triển hệ thống phân phối thuốc dựa trên hạt nano nhắm vào bệnh ung thư gan phổ biến trong dân số Việt Nam',
        difficulty: 'Nâng cao',
        materials: [
          'Hạt nano polymer phân hủy sinh học',
          'Phối tử nhắm mục tiêu ung thư',
          'Hợp chất thuốc chống ung thư',
          'Cơ sở nuôi cấy tế bào',
          'Thiết bị xét nghiệm trong ống nghiệm',
        ],
        procedure: [
          'Thiết kế công thức hạt nano để nhắm mục tiêu ung thư gan',
          'Tổng hợp các hạt nano có mục tiêu với thuốc được bao gói',
          'Đặc tính hóa kích thước hạt, tải lượng thuốc, động học giải phóng',
          'Kiểm tra sự hấp thu của tế bào và độc tính tế bào trong ống nghiệm',
          'Đánh giá tính đặc hiệu nhắm mục tiêu bằng các mô hình tế bào ung thư',
          'Đánh giá tính tương thích sinh học và hồ sơ an toàn',
        ],
        expectedResults:
          'Các hạt nano có mục tiêu cung cấp nồng độ thuốc cao hơn 5 lần cho các tế bào ung thư so với các tế bào bình thường',
        solution:
          'Hệ thống phân phối thuốc được tối ưu hóa cho phép điều trị ung thư hiệu quả với các tác dụng phụ giảm cho bệnh nhân Việt Nam',
      },
      {
        title: 'Hạt nano chẩn đoán cho Bệnh truyền nhiễm',
        description:
          'Tạo ra các hạt nano chẩn đoán cho việc phát hiện nhanh các bệnh truyền nhiễm phổ biến trong khí hậu nhiệt đới của Việt Nam',
        difficulty: 'Nâng cao',
        materials: [
          'Chấm lượng tử phát quang',
          'Reagent liên kết kháng thể',
          'Mẫu và đối chứng tác nhân gây bệnh',
          'Thiết bị kính hiển vi huỳnh quang',
          'Nền tảng xét nghiệm tại chỗ',
        ],
        procedure: [
          'Chọn nền tảng hạt nano thích hợp cho các ứng dụng chẩn đoán',
          'Liên kết các kháng thể phát hiện vào bề mặt hạt nano',
          'Tối ưu hóa độ nhạy và độ đặc hiệu phát hiện',
          'Kiểm tra hiệu suất chẩn đoán với các mẫu lâm sàng',
          'Phát triển các giao thức xét nghiệm tại chỗ',
          'Xác nhận hiệu suất trong điều kiện thực địa',
        ],
        expectedResults:
          'Các hạt nano chẩn đoán phát hiện tác nhân gây bệnh với độ nhạy >95% và tỷ lệ dương tính giả <5%',
        solution:
          'Các công cụ chẩn đoán nhanh cho phép phát hiện sớm bệnh tật hỗ trợ các sáng kiến y tế công cộng của Việt Nam',
      },
    ],
    realWorldApplications: [
      'Các bệnh viện Việt Nam: Ứng dụng y học nano trong chăm sóc bệnh nhân',
      'Các công ty dược phẩm: Phát triển thuốc bằng công nghệ nano',
      'Các công ty chẩn đoán: Xét nghiệm chẩn đoán dựa trên hạt nano',
      'Các nhà sản xuất thiết bị y tế: Thiết bị y tế được phủ nano',
      'Các viện nghiên cứu: Phát triển công nghệ nano y sinh',
    ],
    caseStudies: [
      {
        title: 'Sáng kiến Y học Nano của Bệnh viện Vinmec',
        organization: 'Bệnh viện Đa khoa Quốc tế Vinmec',
        problem: 'Thực hiện các công nghệ y học nano để điều trị ung thư tiên tiến trong hệ thống y tế Việt Nam',
        solution:
          'Thành lập chương trình nghiên cứu y học nano với các đối tác quốc tế phát triển các phác đồ điều trị có mục tiêu',
        impact: 'Cải thiện kết quả điều trị ung thư, giảm tác dụng phụ, thiết lập năng lực y học nano của Việt Nam',
        innovations: [
          'Phác đồ điều trị bằng hạt nano có mục tiêu',
          'Ứng dụng hạt nano chẩn đoán',
          'Phương pháp tiếp cận y học nano cá nhân hóa',
          'Hệ thống quản lý thử nghiệm lâm sàng',
        ],
      },
      {
        title: 'Chẩn đoán Bệnh Nhiệt đới ở Việt Nam',
        organization: 'Viện Vệ sinh Dịch tễ Trung ương',
        problem: 'Phát triển các công cụ chẩn đoán nhanh cho các bệnh nhiệt đới ảnh hưởng đến dân số Việt Nam',
        solution: 'Tạo ra các nền tảng chẩn đoán dựa trên hạt nano cho phép xét nghiệm tại chỗ ở các vùng xa xôi',
        impact:
          'Giảm thời gian chẩn đoán bệnh từ vài ngày xuống còn vài giờ, cải thiện kết quả cho bệnh nhân, tăng cường giám sát dịch bệnh',
        innovations: [
          'Thiết bị chẩn đoán tại chỗ',
          'Hệ thống giám sát sức khỏe di động',
          'Chiến lược triển khai ở vùng xa',
          'Đào tạo nhân viên y tế cộng đồng',
        ],
      },
    ],
    resources: [
      {
        title: 'Viện Vệ sinh Dịch tễ Trung ương',
        url: 'https://nihe.org.vn/',
        type: 'Government Health Institute',
      },
      {
        title: 'Tạp chí Nature Biomedical Engineering',
        url: 'https://www.nature.com/natbiomedeng/',
        type: 'Scientific Publication',
      },
      {
        title: 'Hội Nanomedicine Quốc tế',
        url: 'https://www.isnanomed.org/',
        type: 'Professional Organization',
      },
    ],
    vietnamContext: {
      title: 'Ứng dụng Y sinh của Công nghệ Nano tại Việt Nam',
      content: [
        'Y học nano đang được nghiên cứu tại các bệnh viện lớn như Vinmec và Viện K để phát triển các phương pháp điều trị ung thư mới, ít tác dụng phụ hơn.',
        'Các bộ kit chẩn đoán nhanh dựa trên hạt nano vàng đang được phát triển để phát hiện sớm các bệnh nhiệt đới như sốt xuất huyết, phù hợp với điều kiện Việt Nam.',
        'Việc phát triển vật liệu nano tương thích sinh học cho các ứng dụng y học tái tạo (ví dụ: giá đỡ mô) là một hướng đi đầy hứa hẹn tại các viện nghiên cứu.',
      ],
    },
    careerConnect: {
      name: 'ThS. Lê Hoàng Anh',
      title: 'Chuyên gia Phát triển Sản phẩm',
      company: 'Công ty Dược phẩm Nanogen',
      imageUrl: 'https://i.pravatar.cc/150?u=le-hoang-anh',
      quote:
        'Chúng tôi sử dụng công nghệ nano để "dạy" cho thuốc biết đường đến chính xác tế bào ung thư và bỏ qua tế bào lành. Đây là tương lai của ngành dược, và Việt Nam hoàn toàn có khả năng đi đầu trong lĩnh vực này.',
    },
    quizzes: [
      {
        question: 'Tại sao hạt nano lại hiệu quả trong việc phân phối thuốc?',
        options: [
          'Vì chúng có màu vàng',
          'Vì chúng có tỷ lệ diện tích bề mặt trên thể tích lớn, cho phép gắn nhiều phân tử thuốc',
          'Vì chúng chỉ có thể được nhìn thấy bằng kính hiển vi',
          'Vì chúng rất rẻ',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Tỷ lệ diện tích bề mặt trên thể tích cao của hạt nano cho phép chúng mang một lượng lớn thuốc và có thể được chức năng hóa để nhắm mục tiêu cụ thể đến các tế bào hoặc mô bệnh.',
      },
      {
        question: 'Theranostics là gì?',
        options: [
          'Một loại thuốc mới',
          'Một phương pháp phẫu thuật',
          'Một cách tiếp cận kết hợp chẩn đoán (diagnostics) và điều trị (therapeutics) trong một nền tảng duy nhất, thường là hạt nano',
          'Một thiết bị tập thể dục',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Theranostics là một lĩnh vực mới trong y học, nơi các hạt nano được thiết kế để vừa có khả năng chẩn đoán (ví dụ: hình ảnh khối u) vừa có khả năng điều trị (ví dụ: giải phóng thuốc tại khối u).',
      },
    ],
  },
  {
    id: 'environmental-nanotechnology',
    title: 'Công nghệ Nano Môi trường & Ứng dụng Bền vững',
    description:
      'Các giải pháp công nghệ nano cho các thách thức môi trường bao gồm xử lý nước, lọc không khí và các ứng dụng năng lượng bền vững. Tập trung vào các vấn đề môi trường và mục tiêu bền vững của Việt Nam.',
    duration: '165 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=9ZFx-7zI9MQ',
    imageUrl: 'https://i.ytimg.com/vi/EjZA-xfw8k8/hqdefault.jpg',
    objectives: [
      'Áp dụng các giải pháp công nghệ nano để xử lý ô nhiễm nước và không khí',
      'Hiểu về số phận và sự vận chuyển của vật liệu nano trong môi trường',
      'Thiết kế vật liệu nano bền vững với tác động môi trường giảm thiểu',
      'Thực hiện công nghệ nano cho các ứng dụng năng lượng tái tạo',
      'Giải quyết các thách thức môi trường của Việt Nam bằng công nghệ nano',
    ],
    prerequisites: [
      'Kiến thức cơ bản về khoa học môi trường: ô nhiễm, hệ sinh thái',
      'Hóa học: hóa học bề mặt, xúc tác, quang hóa',
      'Khoa học vật liệu: thuộc tính vật liệu nano, đặc tính hóa',
      'Hiểu biết về các thách thức môi trường của Việt Nam',
    ],
    nanotechApplications: [],
    materialsProperties: [],
    safetyConsiderations: [],
    exercises: [
      {
        title: 'Công nghệ Nano xử lý nước cho Đồng bằng sông Cửu Long',
        description:
          'Phát triển hệ thống xử lý nước dựa trên vật liệu nano giải quyết ô nhiễm trong các tuyến đường thủy ở Đồng bằng sông Cửu Long',
        difficulty: 'Trung bình',
        materials: [
          'Hạt nano quang xúc tác (TiO2, ZnO)',
          'Màng ống nano carbon',
          'Mẫu nước từ Đồng bằng sông Cửu Long',
          'Hệ thống chiếu tia UV',
          'Thiết bị kiểm tra chất lượng nước',
        ],
        procedure: [
          'Phân tích các nguồn ô nhiễm và chất gây ô nhiễm trong Đồng bằng sông Cửu Long',
          'Thiết kế hệ thống xử lý công nghệ nano đa giai đoạn',
          'Tổng hợp các hạt nano quang xúc tác để phân hủy chất ô nhiễm hữu cơ',
          'Phát triển màng lọc nano để loại bỏ kim loại nặng',
          'Kiểm tra hiệu quả xử lý với các mẫu nước thực tế',
          'Đánh giá tác động môi trường và tính bền vững',
        ],
        expectedResults: 'Hệ thống xử lý nước loại bỏ >95% chất ô nhiễm trong khi vẫn đảm bảo an toàn môi trường',
        solution:
          'Phương pháp tiếp cận công nghệ nano tích hợp cung cấp xử lý nước bền vững cho các cộng đồng nông nghiệp Việt Nam',
      },
      {
        title: 'Lớp phủ Nano làm sạch không khí cho các Thành phố Việt Nam',
        description:
          'Tạo ra các vật liệu lớp phủ nano cho các tòa nhà có khả năng làm sạch không khí chủ động trong môi trường đô thị Việt Nam',
        difficulty: 'Trung bình',
        materials: [
          'Lớp phủ hạt nano quang xúc tác',
          'Chất nền vật liệu xây dựng',
          'Hỗn hợp khí ô nhiễm không khí',
          'Nguồn sáng UV',
          'Thiết bị giám sát chất lượng không khí',
        ],
        procedure: [
          'Phân tích các mẫu ô nhiễm không khí trong các thành phố lớn của Việt Nam',
          'Thiết kế lớp phủ nano nhắm mục tiêu vào các chất ô nhiễm cụ thể',
          'Áp dụng lớp phủ lên các vật liệu xây dựng và kiểm tra độ bám dính',
          'Đánh giá hiệu suất làm sạch không khí của lớp phủ quang xúc tác',
          'Kiểm tra độ bền trong điều kiện thời tiết nhiệt đới',
          'Tính toán tác động môi trường và hiệu quả chi phí',
        ],
        expectedResults: 'Lớp phủ tòa nhà giảm ô nhiễm không khí địa phương từ 30-50% trong môi trường đô thị',
        solution:
          'Các lớp phủ thông minh góp phần làm sạch không khí trong các thành phố Việt Nam đồng thời mang lại lợi ích thẩm mỹ',
      },
    ],
    realWorldApplications: [
      'Các nhà máy xử lý nước: Hệ thống lọc tăng cường bằng công nghệ nano',
      'Quy hoạch đô thị: Vật liệu xây dựng lọc không khí',
      'Kiểm soát ô nhiễm công nghiệp: Chất xúc tác nano để giảm phát thải',
      'Ứng dụng nông nghiệp: Phân bón nano và phân phối thuốc trừ sâu',
      'Năng lượng tái tạo: Pin mặt trời và pin nhiên liệu có cấu trúc nano',
    ],
    caseStudies: [
      {
        title: 'Đổi mới xử lý nước ở Đồng bằng sông Cửu Long',
        organization: 'Đại học Cần Thơ - Khoa Kỹ thuật Môi trường',
        problem:
          'Giải quyết ô nhiễm nước ở Đồng bằng sông Cửu Long ảnh hưởng đến năng suất nông nghiệp và sức khỏe cộng đồng',
        solution:
          'Phát triển các hệ thống xử lý nước dựa trên công nghệ nano được thiết kế đặc biệt cho điều kiện đồng bằng',
        impact:
          'Cải thiện chất lượng nước cho hơn 100.000 cư dân, tăng năng suất nông nghiệp, giảm các bệnh lây truyền qua đường nước',
        innovations: [
          'Nền tảng xử lý nước nổi',
          'Hệ thống lọc nano chạy bằng năng lượng mặt trời',
          'Các đơn vị xử lý quy mô cộng đồng',
          'Giám sát chất lượng nước theo thời gian thực',
        ],
      },
      {
        title: 'Cải thiện chất lượng không khí tại TP.HCM',
        organization: 'Cơ quan Bảo vệ Môi trường TP.HCM',
        problem:
          'Triển khai các giải pháp công nghệ nano cho giảm ô nhiễm không khí đô thị trong thành phố đang phát triển nhanh chóng',
        solution:
          'Triển khai các lớp phủ quang xúc tác và hệ thống làm sạch không khí trên toàn bộ cơ sở hạ tầng thành phố',
        impact: 'Giảm 25% bụi mịn, cải thiện chỉ số chất lượng không khí, nâng cao đời sống đô thị',
        innovations: [
          'Mặt tiền tòa nhà tự làm sạch',
          'Bề mặt đường quang xúc tác',
          'Trạm dừng xe buýt làm sạch không khí',
          'Mạng lưới giám sát môi trường thông minh',
        ],
      },
    ],
    resources: [
      {
        title: 'Tổng cục Môi trường Việt Nam',
        url: 'https://vea.gov.vn/',
        type: 'Government Environmental Agency',
      },
      {
        title: 'Tạp chí Environmental Science & Technology',
        url: 'https://pubs.acs.org/journal/esthag',
        type: 'Scientific Publication',
      },
      {
        title: 'Hiệp hội Công nghệ Nano Quốc tế',
        url: 'https://ianano.org/',
        type: 'Professional Organization',
      },
    ],
    vietnamContext: {
      title: 'Nghiên cứu Công nghệ Nano Môi trường tại Việt Nam',
      content: [
        'Các viện nghiên cứu môi trường Việt Nam đang phát triển vật liệu nano để xử lý nước thải công nghiệp và sinh hoạt.',
        'Các sáng kiến cải thiện chất lượng không khí tại Hà Nội và TP.HCM đang xem xét sử dụng các lớp phủ quang xúc tác trên các tòa nhà.',
        'Các chương trình nông nghiệp bền vững đang thử nghiệm phân bón nano để giảm thiểu thất thoát và ô nhiễm môi trường.',
        'Các dự án năng lượng tái tạo đang nghiên cứu vật liệu nano để tăng hiệu suất của pin mặt trời.',
      ],
    },
    careerConnect: {
      name: 'KS. Hoàng Nam Trung',
      title: 'Kỹ sư Môi trường',
      company: 'Một công ty xử lý nước thải',
      imageUrl: 'https://i.pravatar.cc/150?u=hoang-nam-trung',
      quote:
        'Công nghệ nano cho chúng tôi những công cụ mạnh mẽ để "làm sạch" môi trường ở cấp độ phân tử. Từ việc loại bỏ asen trong nước ngầm đến việc phân hủy khói bụi thành phố, đây là một lĩnh vực đầy thách thức nhưng cũng vô cùng ý nghĩa.',
    },
    quizzes: [
      {
        question: 'Quang xúc tác (photocatalysis) sử dụng vật liệu nano như TiO2 hoạt động như thế nào?',
        options: [
          'Hấp thụ chất ô nhiễm như một miếng bọt biển',
          'Sử dụng ánh sáng (ví dụ: ánh sáng mặt trời) để tạo ra các gốc tự do có khả năng phân hủy chất ô nhiễm',
          'Lọc các hạt lớn',
          'Thay đổi độ pH của nước',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Vật liệu nano quang xúc tác như TiO2 khi được chiếu sáng sẽ tạo ra các cặp electron-lỗ trống, phản ứng với nước và oxy để tạo ra các gốc oxy hóa mạnh có thể phá vỡ các chất ô nhiễm hữu cơ.',
      },
      {
        question: 'Tại sao màng lọc ống nano carbon (CNT) lại hiệu quả để lọc nước?',
        options: [
          'Vì chúng có màu đen',
          'Vì chúng có đường kính lỗ xốp siêu nhỏ và diện tích bề mặt lớn, cho phép loại bỏ các chất ô nhiễm nhỏ',
          'Vì chúng dẫn điện',
          'Vì chúng rất cứng',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Màng CNT có cấu trúc độc đáo với các lỗ xốp kích thước nano và diện tích bề mặt lớn, giúp chúng có khả năng hấp phụ và lọc bỏ hiệu quả các chất ô nhiễm như kim loại nặng và hợp chất hữu cơ khỏi nước.',
      },
    ],
  },
];
