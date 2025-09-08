import { type BaseLessonData } from '@/types/lesson-base';

export interface BlockchainLesson extends BaseLessonData {
  blockchainType: string;
  frameworks: string[];
}

export const blockchainLessons: BlockchainLesson[] = [
  {
    id: 'blockchain-fundamentals-vietnam',
    title: 'Bài 1: Nền tảng Blockchain & Tiền điện tử tại Việt Nam',
    description:
      'Khám phá các nguyên tắc cơ bản của công nghệ blockchain, tiền điện tử và các ứng dụng của chúng trong bối cảnh Việt Nam, bao gồm các cơ chế đồng thuận, hợp đồng thông minh và các trường hợp sử dụng trong thế giới thực.',
    duration: '180 phút',
    difficulty: 'Cơ bản',
    blockchainType: 'Nền tảng',
    videoUrl: 'https://www.youtube.com/watch?v=SSo_EIwHSd4',
    objectives: [
      'Hiểu các khái niệm cốt lõi của blockchain: phi tập trung, bất biến, minh bạch',
      'Phân biệt giữa các cơ chế đồng thuận khác nhau: PoW, PoS, DPoS',
      'Giải thích vai trò của tiền điện tử và hợp đồng thông minh trong hệ sinh thái blockchain',
      'Xác định các ứng dụng tiềm năng của blockchain tại Việt Nam',
    ],
    prerequisites: [
      'Kiến thức cơ bản về khoa học máy tính',
      'Hiểu biết về các khái niệm mạng cơ bản',
      'Quan tâm đến công nghệ tài chính và đổi mới',
      'Không yêu cầu kinh nghiệm lập trình',
    ],
    exercises: [
      {
        title: 'Xây dựng Blockchain đơn giản từ đầu',
        description: 'Triển khai một blockchain cơ bản với cơ chế đồng thuận proof-of-work bằng Python.',
        difficulty: 'Trung bình',
        materials: ['IDE Python', 'Thư viện mật mã', 'Mô phỏng mạng'],
        procedure: [
          'Triển khai cấu trúc khối cơ bản với header và dữ liệu giao dịch',
          'Tạo các hàm băm SHA-256 để đảm bảo tính toàn vẹn của khối',
          'Xây dựng cây Merkle để xác minh giao dịch',
          'Triển khai thuật toán đào proof-of-work',
          'Tạo một mô phỏng mạng ngang hàng đơn giản',
          'Thêm xác thực giao dịch và xác minh chữ ký số',
        ],
        expectedResults: 'Một nguyên mẫu blockchain hoạt động với khả năng đào và giao dịch',
        solution: 'Triển khai Python theo module với sự phân tách rõ ràng các mối quan tâm và xác thực phù hợp',
      },
      {
        title: 'Phân tích Tiền điện tử cho Thị trường Việt Nam',
        description: 'Phân tích các loại tiền điện tử lớn và sự phù hợp của chúng với hệ sinh thái tài chính Việt Nam.',
        difficulty: 'Trung bình',
        materials: ['Công cụ phân tích dữ liệu', 'Nền tảng nghiên cứu thị trường', 'Dữ liệu tài chính Việt Nam'],
        procedure: [
          'Nghiên cứu môi trường pháp lý của Việt Nam đối với tiền điện tử',
          'Phân tích các đặc điểm của Bitcoin, Ethereum và stablecoin',
          'Nghiên cứu các trường hợp sử dụng kiều hối cho người lao động Việt Nam ở nước ngoài',
          'Đánh giá tác động tiêu thụ năng lượng đối với tính bền vững của môi trường',
          'Tạo các kịch bản áp dụng cho các nhóm nhân khẩu học khác nhau của Việt Nam',
          'Đề xuất các chiến lược triển khai tuân thủ quy định',
        ],
        expectedResults: 'Phân tích toàn diện về tiềm năng áp dụng tiền điện tử tại Việt Nam',
        solution:
          'Tập trung vào stablecoin và các trường hợp sử dụng kiều hối với cách tiếp cận tuân thủ quy định theo từng giai đoạn',
      },
    ],
    realWorldApplications: [
      'Sàn giao dịch tiền điện tử và ví kỹ thuật số',
      'Kiều hối xuyên biên giới cho người lao động Việt Nam ở nước ngoài',
      'Minh bạch chuỗi cung ứng trong nông nghiệp Việt Nam',
      'Hệ thống nhận dạng kỹ thuật số cho các dịch vụ của chính phủ',
      'Hệ thống xác minh chứng chỉ học thuật',
    ],
    caseStudies: [
      {
        title: 'Nghiên cứu Tiền tệ Kỹ thuật số của Ngân hàng Trung ương Việt Nam (CBDC)',
        organization: 'Ngân hàng Nhà nước Việt Nam',
        problem: 'Khám phá các lựa chọn tiền kỹ thuật số trong khi vẫn duy trì quyền kiểm soát chính sách tiền tệ',
        solution: 'Nghiên cứu mô hình CBDC lai kết hợp kiểm soát tập trung với sự tiện lợi kỹ thuật số',
        impact: 'Nền tảng cho việc triển khai tiền kỹ thuật số của Việt Nam trong tương lai',
        innovations: ['Kiến trúc CBDC', 'Thanh toán kỹ thuật số', 'Chính sách tiền tệ', 'Tài chính toàn diện'],
      },
    ],
    resources: [
      {
        title: 'Sách trắng Bitcoin',
        url: 'https://bitcoin.org/bitcoin.pdf',
        type: 'Tài liệu nền tảng',
      },
    ],
    frameworks: ['Bitcoin', 'Ethereum', 'Hyperledger', 'Thư viện Mật mã', 'Thuật toán Đồng thuận'],
    vietnamContext: {
      title: 'Blockchain tại Việt Nam: Từ thử nghiệm đến ứng dụng thực tiễn',
      content: [
        'Việt Nam là một trong những quốc gia đi đầu về tỷ lệ chấp nhận tiền điện tử. Chính phủ đang tích cực nghiên cứu và xây dựng hành lang pháp lý cho tài sản số và công nghệ blockchain.',
        'Các ứng dụng blockchain không chỉ dừng lại ở tài chính (Fintech) mà còn mở rộng sang truy xuất nguồn gốc nông sản, quản lý chuỗi cung ứng, và logistics, giúp nâng cao giá trị và sự minh bạch cho hàng hóa Việt Nam.',
        'Cộng đồng nhà phát triển blockchain tại Việt Nam rất năng động, với nhiều dự án nổi bật như Axie Infinity, TomoChain (nay là Viction), và Kyber Network, thu hút sự chú ý của quốc tế.',
      ],
    },
    careerConnect: {
      name: 'Ông Long Vương',
      title: 'CEO & Đồng sáng lập',
      company: 'TomoChain (Viction)',
      imageUrl: 'https://i.pravatar.cc/150?u=long-vuong',
      quote:
        'Blockchain không chỉ là một công nghệ, đó là một cuộc cách mạng về niềm tin và sự minh bạch. Việt Nam có tiềm năng trở thành một trung tâm blockchain của khu vực và thế giới, và thế hệ trẻ chính là những người sẽ hiện thực hóa tầm nhìn đó.',
    },
    quizzes: [
      {
        question:
          'Đặc tính nào của blockchain đảm bảo rằng một khi dữ liệu đã được ghi lại, nó không thể bị thay đổi hoặc xóa bỏ?',
        options: ['Phi tập trung', 'Minh bạch', 'Bất biến', 'Mã hóa'],
        correctAnswerIndex: 2,
        explanation:
          'Tính bất biến (immutability) là một trong những đặc tính cốt lõi của blockchain. Mỗi khối được liên kết với khối trước đó bằng một hàm băm mật mã, tạo ra một chuỗi không thể bị thay đổi mà không làm thay đổi tất cả các khối sau đó.',
      },
      {
        question: 'Proof of Work (PoW) là gì?',
        options: [
          'Một cơ chế bỏ phiếu để xác thực giao dịch',
          'Một thuật toán yêu cầu các thợ đào giải một bài toán phức tạp để thêm khối mới',
          'Một cách để lưu trữ dữ liệu trên blockchain',
          'Một loại tiền điện tử',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Proof of Work là một cơ chế đồng thuận, trong đó các "thợ đào" cạnh tranh để giải một bài toán mật mã. Người đầu tiên giải được sẽ có quyền thêm khối tiếp theo vào chuỗi và nhận phần thưởng. Quá trình này đòi hỏi năng lực tính toán đáng kể, giúp bảo mật mạng lưới.',
      },
    ],
  },
  {
    id: 'smart-contract-development',
    title: 'Bài 2: Phát triển Hợp đồng thông minh & Lập trình Solidity',
    description:
      'Phát triển hợp đồng thông minh nâng cao bằng Solidity, các framework kiểm thử, các phương pháp bảo mật tốt nhất và chiến lược triển khai cho Ethereum và các blockchain tương thích.',
    duration: '220 phút',
    difficulty: 'Nâng cao',
    blockchainType: 'Hợp đồng thông minh',
    videoUrl: 'https://www.youtube.com/watch?v=-1GB6m39-rM',
    objectives: [
      'Nắm vững ngôn ngữ lập trình Solidity và phát triển hợp đồng thông minh',
      'Triển khai các mẫu thiết kế phổ biến: proxy, factory, kiểm soát truy cập',
      'Hiểu các lỗ hổng bảo mật của hợp đồng thông minh và các chiến lược giảm thiểu',
      'Triển khai và tương tác với hợp đồng thông minh trên các mạng blockchain khác nhau',
    ],
    prerequisites: [
      'Kinh nghiệm lập trình trong các ngôn ngữ hướng đối tượng',
      'Hiểu biết về các nguyên tắc cơ bản của blockchain',
      'Kiến thức cơ bản về phát triển web',
      'Quen thuộc với JavaScript/TypeScript',
    ],
    exercises: [
      {
        title: 'Hệ thống Hợp đồng thông minh Kiều hối Việt Nam',
        description: 'Xây dựng hệ thống kiều hối phi tập trung cho người lao động Việt Nam ở nước ngoài.',
        difficulty: 'Nâng cao',
        materials: ['Hardhat', 'MetaMask', 'Remix IDE', 'Triển khai Testnet'],
        procedure: [
          'Thiết kế hệ thống ví đa chữ ký cho kiều hối gia đình',
          'Triển khai tích hợp oracle tỷ giá hối đoái',
          'Tạo hợp đồng ký quỹ với cơ chế giải quyết tranh chấp',
          'Xây dựng giao diện người dùng cho người dùng Việt Nam không chuyên về kỹ thuật',
          'Triển khai các tính năng tuân thủ KYC/AML',
          'Triển khai và kiểm thử trên mạng Polygon/BSC (phí thấp hơn)',
        ],
        expectedResults: 'Một dApp kiều hối sẵn sàng sản xuất với hỗ trợ tiếng Việt',
        solution: 'Giải pháp Layer 2 với tích hợp stablecoin và giao diện tiếng Việt thân thiện với người dùng',
      },
      {
        title: 'Theo dõi Chuỗi cung ứng Nông sản',
        description:
          'Tạo hệ thống blockchain theo dõi các sản phẩm nông nghiệp Việt Nam từ trang trại đến người tiêu dùng.',
        difficulty: 'Nâng cao',
        materials: ['Truffle', 'Ngăn xếp phát triển Web3', 'Phát triển ứng dụng di động'],
        procedure: [
          'Thiết kế hợp đồng thông minh theo dõi sản phẩm',
          'Triển khai hệ thống đăng ký và xác minh nông dân',
          'Tạo quy trình chứng nhận và kiểm tra chất lượng',
          'Xây dựng ứng dụng xác minh cho người tiêu dùng bằng cách quét mã QR',
          'Tích hợp cảm biến IoT để lấy dữ liệu môi trường',
          'Triển khai chương trình thí điểm với các hợp tác xã nông nghiệp Việt Nam',
        ],
        expectedResults: 'Hệ thống chuỗi cung ứng minh bạch cải thiện xuất khẩu nông sản Việt Nam',
        solution: 'Kiến trúc lai on-chain/off-chain với lưu trữ IPFS và thiết kế ưu tiên di động',
      },
    ],
    realWorldApplications: [
      'Giao thức tài chính phi tập trung (DeFi)',
      'Thị trường NFT cho nghệ thuật và văn hóa Việt Nam',
      'Hệ thống bỏ phiếu cho quản trị minh bạch',
      'Hợp đồng thông minh bảo hiểm cho rủi ro nông nghiệp',
      'Token hóa bất động sản để đầu tư',
    ],
    caseStudies: [
      {
        title: 'Hợp tác Chuỗi cung ứng VeChain Việt Nam',
        organization: 'VeChain Foundation',
        problem: 'Cải thiện tính minh bạch trong sản xuất và xuất khẩu của Việt Nam',
        solution: 'Xác thực sản phẩm và theo dõi chuỗi cung ứng dựa trên blockchain',
        impact: 'Tăng cường niềm tin vào các sản phẩm Việt Nam trên thị trường toàn cầu',
        innovations: ['Blockchain VeChain', 'Cảm biến IoT', 'Ứng dụng di động', 'Xác thực QR'],
      },
    ],
    resources: [
      {
        title: 'Tài liệu Solidity',
        url: 'https://docs.soliditylang.org/',
        type: 'Tài liệu kỹ thuật',
      },
    ],
    frameworks: ['Solidity', 'Hardhat', 'Truffle', 'Web3.js', 'OpenZeppelin', 'IPFS'],
    vietnamContext: {
      title: 'Hợp đồng thông minh: Tự động hóa và Minh bạch hóa Kinh doanh tại Việt Nam',
      content: [
        'Hợp đồng thông minh đang được ứng dụng để tự động hóa các quy trình kinh doanh phức tạp, từ bảo hiểm, logistics đến quản lý bất động sản, giúp giảm thiểu chi phí và sai sót của con người.',
        'Tại Việt Nam, các ứng dụng tiềm năng bao gồm hợp đồng bảo hiểm nông nghiệp tự động kích hoạt khi có dữ liệu thời tiết bất lợi, hoặc hợp đồng cho thuê bất động sản tự động chuyển tiền và quyền sử dụng.',
        'Thách thức lớn nhất là việc xây dựng khung pháp lý để công nhận giá trị của hợp đồng thông minh và giải quyết các tranh chấp phát sinh, một lĩnh vực mà các luật sư công nghệ Việt Nam đang tích cực nghiên cứu.',
      ],
    },
    careerConnect: {
      name: 'Anh Phạm Minh Tuấn',
      title: 'Trưởng nhóm Kỹ sư Blockchain',
      company: 'FPT Software',
      imageUrl: 'https://i.pravatar.cc/150?u=pham-minh-tuan',
      quote:
        'Lập trình Solidity và phát triển hợp đồng thông minh là một kỹ năng cực kỳ "hot". Nó không chỉ đòi hỏi tư duy logic của một lập trình viên mà còn cần sự cẩn trọng của một luật sư và tầm nhìn của một nhà kinh tế. Đây là một lĩnh vực đầy thách thức nhưng cũng vô cùng xứng đáng.',
    },
    quizzes: [
      {
        question: 'Solidity là ngôn ngữ lập trình được thiết kế chủ yếu cho nền tảng blockchain nào?',
        options: ['Bitcoin', 'Hyperledger Fabric', 'Ethereum', 'Cardano'],
        correctAnswerIndex: 2,
        explanation:
          'Solidity là ngôn ngữ lập trình hướng đối tượng, bậc cao được tạo ra để viết các hợp đồng thông minh trên nền tảng Ethereum và các blockchain tương thích với Máy ảo Ethereum (EVM).',
      },
      {
        question: 'Mục đích chính của việc sử dụng một framework như Hardhat hoặc Truffle là gì?',
        options: [
          'Để viết mã Solidity nhanh hơn',
          'Để cung cấp một môi trường phát triển toàn diện bao gồm biên dịch, kiểm thử, và triển khai hợp đồng thông minh',
          'Để lưu trữ dữ liệu blockchain',
          'Để tạo giao diện người dùng cho dApps',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Các framework như Hardhat và Truffle cung cấp một bộ công cụ hoàn chỉnh giúp đơn giản hóa và tự động hóa các tác vụ trong vòng đời phát triển hợp đồng thông minh, từ việc viết mã, kiểm thử đến triển khai lên các mạng lưới blockchain.',
      },
    ],
  },
  {
    id: 'defi-protocols-applications',
    title: 'Bài 3: Giao thức DeFi & Ứng dụng phi tập trung',
    description:
      'Hiểu biết toàn diện về hệ sinh thái DeFi: DEX, giao thức cho vay, yield farming, khai thác thanh khoản và các chiến lược DeFi nâng cao cho các ứng dụng đầu tư và kinh doanh.',
    duration: '190 phút',
    difficulty: 'Nâng cao',
    blockchainType: 'DeFi',
    videoUrl: 'https://www.youtube.com/watch?v=e9Eg0CmboFU',
    objectives: [
      'Hiểu các thành phần cơ bản của DeFi: AMM, cho vay/vay, phái sinh',
      'Phân tích các chiến lược yield farming và quản lý rủi ro',
      'Triển khai các chiến lược cung cấp thanh khoản và tạo lập thị trường',
      'Thiết kế các giao thức DeFi phù hợp với nhu cầu tài chính của Việt Nam',
    ],
    prerequisites: [
      'Hiểu biết vững chắc về tài chính truyền thống',
      'Kinh nghiệm phát triển hợp đồng thông minh',
      'Các nguyên tắc quản lý rủi ro',
      'Kỹ năng mô hình hóa toán học',
    ],
    exercises: [
      {
        title: 'Nền tảng DeFi Stablecoin Việt Nam',
        description:
          'Xây dựng nền tảng DeFi được tối ưu hóa cho người dùng Việt Nam với stablecoin được neo giá theo VND.',
        difficulty: 'Nâng cao',
        materials: ['Framework phát triển DeFi', 'Oracle giá', 'Quản lý thanh khoản'],
        procedure: [
          'Thiết kế stablecoin được neo giá theo VND với quản lý tài sản thế chấp',
          'Triển khai nhà tạo lập thị trường tự động cho các cặp VND/tiền điện tử',
          'Tạo giao thức cho vay cho các doanh nghiệp vừa và nhỏ của Việt Nam',
          'Xây dựng các cơ hội yield farming với tokenomics bền vững',
          'Tích hợp API ngân hàng Việt Nam để nạp/rút tiền pháp định',
          'Triển khai các tính năng tuân thủ quy định',
        ],
        expectedResults: 'Một hệ sinh thái DeFi hoàn chỉnh phục vụ nhu cầu tài chính của Việt Nam',
        solution: 'Stablecoin đa tài sản thế chấp với quản trị cộng đồng và tạo ra lợi nhuận bền vững',
      },
      {
        title: 'Tài chính Thương mại Xuyên biên giới DeFi',
        description: 'Tạo giải pháp DeFi cho tài chính thương mại xuất nhập khẩu của Việt Nam.',
        difficulty: 'Nâng cao',
        materials: ['Cầu nối chuỗi chéo', 'Nền tảng tài chính thương mại', 'Công cụ tuân thủ'],
        procedure: [
          'Thiết kế hợp đồng thông minh thư tín dụng (L/C)',
          'Triển khai hệ thống ký quỹ đa bên',
          'Tạo giao thức bao thanh toán hóa đơn',
          'Xây dựng các giải pháp tài trợ chuỗi cung ứng',
          'Tích hợp với các hệ thống chứng từ thương mại quốc tế',
          'Triển khai các tính năng báo cáo theo quy định',
        ],
        expectedResults: 'Nền tảng tài chính thương mại hiệu quả giúp giảm chi phí và thời gian xử lý',
        solution: 'DeFi cấp tổ chức với các tính năng tuân thủ và tích hợp tài chính truyền thống',
      },
    ],
    realWorldApplications: [
      'Sàn giao dịch phi tập trung để giao dịch tiền điện tử',
      'Nền tảng cho vay ngang hàng',
      'Chương trình yield farming và khai thác thanh khoản',
      'Giải pháp thanh toán xuyên biên giới',
      'Tài chính vi mô DeFi cho các vùng nông thôn Việt Nam',
    ],
    caseStudies: [
      {
        title: 'Mở rộng DeFi của MDEX Việt Nam',
        organization: 'Giao thức MDEX',
        problem: 'Mang dịch vụ DeFi đến người dùng tiền điện tử Việt Nam',
        solution: 'Nền tảng DeFi được bản địa hóa với hỗ trợ tiếng Việt và các đối tác địa phương',
        impact: 'Tăng cường việc áp dụng DeFi trong cộng đồng tiền điện tử Việt Nam',
        innovations: ['Giao thức AMM', 'Yield Farming', 'Công nghệ chuỗi chéo', 'DeFi di động'],
      },
    ],
    resources: [
      {
        title: 'DeFi Pulse - Phân tích Giao thức',
        url: 'https://defipulse.com/',
        type: 'Nền tảng dữ liệu thị trường',
      },
    ],
    frameworks: ['Uniswap', 'Compound', 'Aave', 'Curve', 'Yearn Finance', 'Chainlink Oracles'],
    vietnamContext: {
      title: 'DeFi: Tương lai của Tài chính tại Việt Nam?',
      content: [
        'Với dân số trẻ, am hiểu công nghệ và tỷ lệ sử dụng điện thoại thông minh cao, Việt Nam có tiềm năng lớn để trở thành một thị trường DeFi sôi động.',
        'Các dự án DeFi "Made in Vietnam" như Kyber Network đã tạo được tiếng vang trên toàn cầu, chứng tỏ năng lực của các kỹ sư Việt.',
        'DeFi có thể giải quyết các vấn đề cố hữu của tài chính truyền thống tại Việt Nam như tiếp cận vốn cho doanh nghiệp nhỏ và vừa, và cung cấp các sản phẩm đầu tư đa dạng hơn cho người dân.',
      ],
    },
    careerConnect: {
      name: 'Ông Lợi Lưu',
      title: 'CEO & Đồng sáng lập',
      company: 'Kyber Network',
      imageUrl: 'https://i.pravatar.cc/150?u=loi-luu',
      quote:
        'DeFi đang xây dựng lại hệ thống tài chính từ đầu, một hệ thống mở, công bằng và dễ tiếp cận hơn cho tất cả mọi người. Đây là cơ hội để Việt Nam nhảy vọt và định hình tương lai tài chính toàn cầu.',
    },
    quizzes: [
      {
        question: 'AMM (Automated Market Maker) là gì?',
        options: [
          'Một nhà giao dịch chuyên nghiệp',
          'Một loại hợp đồng thông minh cho phép giao dịch tài sản kỹ thuật số một cách tự động bằng cách sử dụng các bể thanh khoản',
          'Một công cụ để dự đoán giá thị trường',
          'Một cơ quan quản lý tài chính',
        ],
        correctAnswerIndex: 1,
        explanation:
          'AMM là xương sống của các sàn giao dịch phi tập trung (DEX). Thay vì sổ lệnh truyền thống, AMM sử dụng các bể thanh khoản (liquidity pools) và một công thức toán học để xác định giá, cho phép người dùng giao dịch trực tiếp với hợp đồng thông minh.',
      },
      {
        question: 'Yield Farming là gì?',
        options: [
          'Một hình thức trồng trọt kỹ thuật số',
          'Hành động cho vay hoặc staking tiền điện tử để kiếm phần thưởng dưới dạng tiền điện tử nhiều hơn',
          'Một cách để bảo mật mạng lưới blockchain',
          'Một loại ví tiền điện tử',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Yield Farming là một chiến lược đầu tư trong DeFi, nơi người dùng di chuyển tài sản của họ giữa các giao thức cho vay và bể thanh khoản khác nhau để tối đa hóa lợi nhuận. Đây là một hoạt động có rủi ro cao nhưng cũng có thể mang lại lợi nhuận cao.',
      },
    ],
  },
  {
    id: 'nft-metaverse-development',
    title: 'Bài 4: Công nghệ NFT & Phát triển Metaverse',
    description:
      'Tạo NFT nâng cao, phát triển thị trường, ứng dụng metaverse và bảo tồn văn hóa bằng công nghệ blockchain với trọng tâm là văn hóa số Việt Nam.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    blockchainType: 'NFT/Metaverse',
    videoUrl: 'https://www.youtube.com/watch?v=NNQLJcJEzv0',
    objectives: [
      'Nắm vững các tiêu chuẩn NFT: ERC-721, ERC-1155 và các triển khai nâng cao',
      'Xây dựng các thị trường NFT với các tính năng nâng cao',
      'Hiểu kiến trúc metaverse và phát triển thế giới ảo',
      'Triển khai các dự án bảo tồn văn hóa bằng công nghệ NFT',
    ],
    prerequisites: [
      'Kỹ năng phát triển hợp đồng thông minh',
      'Kinh nghiệm phát triển web',
      'Hiểu biết về nghệ thuật số và sở hữu trí tuệ',
      'Kiến thức cơ bản về mô hình 3D và phát triển game',
    ],
    exercises: [
      {
        title: 'Nền tảng NFT Di sản Văn hóa Việt Nam',
        description: 'Tạo nền tảng NFT bảo tồn các hiện vật văn hóa và nghệ thuật truyền thống của Việt Nam.',
        difficulty: 'Trung bình',
        materials: ['Framework phát triển NFT', 'Công cụ bảo tồn kỹ thuật số', 'Tiêu chuẩn siêu dữ liệu'],
        procedure: [
          'Hợp tác với các bảo tàng và tổ chức văn hóa Việt Nam',
          'Thiết kế các tiêu chuẩn siêu dữ liệu NFT cho các hiện vật văn hóa',
          'Triển khai theo dõi xuất xứ và xác minh tính xác thực',
          'Tạo nền tảng giáo dục với tích hợp NFT',
          'Xây dựng quản trị cộng đồng cho các quyết định bảo tồn văn hóa',
          'Triển khai chia sẻ doanh thu với các tổ chức văn hóa',
        ],
        expectedResults: 'Một nền tảng toàn diện bảo tồn văn hóa Việt Nam ở định dạng kỹ thuật số',
        solution: 'Nền tảng NFT giáo dục với quản trị cộng đồng và mô hình tài trợ bền vững',
      },
      {
        title: 'Thị trường NFT cho Nghệ sĩ Việt Nam',
        description: 'Xây dựng thị trường NFT chuyên biệt hỗ trợ các nghệ sĩ và cộng đồng sáng tạo Việt Nam.',
        difficulty: 'Trung bình',
        materials: ['Nền tảng phát triển thị trường', 'Công cụ sáng tạo cho nghệ sĩ', 'Tính năng xã hội'],
        procedure: [
          'Thiết kế hệ thống giới thiệu và xác minh nghệ sĩ',
          'Triển khai cơ chế phân phối tiền bản quyền',
          'Tạo giao diện và hỗ trợ tiếng Việt',
          'Xây dựng các tính năng cộng đồng: phòng trưng bày, hồ sơ nghệ sĩ, sự kiện',
          'Tích hợp các phương thức thanh toán của Việt Nam',
          'Triển khai các công cụ tiếp thị để quảng bá nghệ sĩ',
        ],
        expectedResults: 'Một thị trường NFT phát triển mạnh hỗ trợ nền kinh tế sáng tạo của Việt Nam',
        solution:
          'Thị trường lấy nghệ sĩ làm trung tâm với phí thấp, các tính năng cộng đồng và tập trung vào thị trường Việt Nam',
      },
    ],
    realWorldApplications: [
      'Thị trường nghệ thuật số cho các nghệ sĩ Việt Nam',
      'Các sáng kiến bảo tồn di sản văn hóa',
      'Tài sản trong game và nền kinh tế thế giới ảo',
      'Các ứng dụng trong ngành công nghiệp âm nhạc và giải trí',
      'Hệ thống chứng chỉ và thành tích giáo dục',
    ],
    caseStudies: [
      {
        title: 'Phát triển Hệ sinh thái NFT của TomoChain',
        organization: 'TomoChain (Blockchain Việt Nam)',
        problem: 'Xây dựng hệ sinh thái NFT tập trung vào Việt Nam với chi phí giao dịch thấp',
        solution: 'Phát triển cơ sở hạ tầng NFT toàn diện hỗ trợ các nhà sáng tạo Việt Nam',
        impact: 'Cộng đồng NFT Việt Nam đang phát triển với trọng tâm là thị trường địa phương',
        innovations: ['Blockchain TomoChain', 'Tiêu chuẩn NFT', 'Công cụ cho nhà sáng tạo', 'Thị trường Việt Nam'],
      },
    ],
    resources: [
      {
        title: 'Thị trường NFT OpenSea',
        url: 'https://opensea.io/',
        type: 'Nền tảng NFT',
      },
    ],
    frameworks: ['ERC-721', 'ERC-1155', 'OpenZeppelin', 'IPFS', 'Moralis', 'Alchemy NFT API'],
    vietnamContext: {
      title: 'NFT và Metaverse: Sân chơi mới cho Văn hóa và Sáng tạo Việt',
      content: [
        'NFT đã mở ra một con đường mới cho các nghệ sĩ Việt Nam tiếp cận thị trường toàn cầu mà không cần qua trung gian, giúp họ khẳng định bản quyền và có nguồn thu nhập tốt hơn.',
        'Các dự án metaverse đang tìm cách tái tạo các địa danh lịch sử, văn hóa của Việt Nam trong không gian số, mang đến cơ hội quảng bá du lịch và giáo dục lịch sử một cách sinh động.',
        'Sự kết hợp giữa game và blockchain (GameFi), mà Việt Nam là một cường quốc, đang thúc đẩy sự phát triển của các nền kinh tế ảo trong metaverse, tạo ra các mô hình kinh doanh và việc làm mới.',
      ],
    },
    careerConnect: {
      name: 'Anh Nguyễn Thành Trung',
      title: 'CEO & Đồng sáng lập',
      company: 'Sky Mavis (Axie Infinity)',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-thanh-trung',
      quote:
        'Chúng tôi đã chứng minh rằng người Việt Nam có thể tạo ra những sản phẩm công nghệ dẫn đầu xu hướng toàn cầu. Metaverse và NFT là một miền đất hứa, nơi trí tưởng tượng và năng lực kỹ thuật có thể tạo ra những giá trị không giới hạn.',
    },
    quizzes: [
      {
        question: 'ERC-721 là một tiêu chuẩn cho loại tài sản nào trên blockchain Ethereum?',
        options: [
          'Token có thể thay thế (Fungible Tokens)',
          'Token không thể thay thế (Non-Fungible Tokens - NFTs)',
          'Stablecoins',
          'Token quản trị',
        ],
        correctAnswerIndex: 1,
        explanation:
          'ERC-721 là tiêu chuẩn đầu tiên và phổ biến nhất cho NFT. Mỗi token ERC-721 là duy nhất và không thể thay thế cho nhau, làm cho nó trở nên lý tưởng để đại diện cho các tài sản độc nhất như tác phẩm nghệ thuật, vật phẩm sưu tầm, hoặc bất động sản ảo.',
      },
      {
        question: 'Metaverse là gì?',
        options: [
          'Một trò chơi điện tử mới',
          'Một mạng lưới các thế giới ảo 3D tập trung vào kết nối xã hội',
          'Một loại tiền điện tử',
          'Một nền tảng mạng xã hội',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Metaverse là một khái niệm về một không gian ảo tập thể, được tạo ra bởi sự hội tụ của thực tế vật lý và không gian kỹ thuật số. Nó được coi là bước tiến tiếp theo của Internet, nơi người dùng có thể tương tác với nhau và với các đối tượng kỹ thuật số trong một môi trường 3D sống động.',
      },
    ],
  },
  {
    id: 'regulatory-compliance-security',
    title: 'Bài 5: Tuân thủ Quy định & Bảo mật Blockchain',
    description:
      'Các phương pháp bảo mật blockchain toàn diện, các khuôn khổ tuân thủ quy định, quy trình kiểm toán và quản lý rủi ro cho các ứng dụng blockchain doanh nghiệp.',
    duration: '170 phút',
    difficulty: 'Nâng cao',
    blockchainType: 'Bảo mật/Tuân thủ',
    videoUrl: 'https://www.youtube.com/watch?v=M_hLYKYFS5w',
    objectives: [
      'Nắm vững các phương pháp bảo mật blockchain tốt nhất và đánh giá lỗ hổng',
      'Hiểu các khuôn khổ quy định: AML/KYC, luật chứng khoán, ý nghĩa về thuế',
      'Triển khai các hệ thống tuân thủ cho các yêu cầu pháp lý của Việt Nam',
      'Thiết kế quy trình kiểm toán bảo mật và thủ tục ứng phó sự cố',
    ],
    prerequisites: [
      'Kinh nghiệm phát triển blockchain nâng cao',
      'Hiểu biết về các nguyên tắc an ninh mạng',
      'Kiến thức về các quy định tài chính',
      'Nhận thức pháp lý và kinh nghiệm tuân thủ',
    ],
    exercises: [
      {
        title: 'Hệ thống Tuân thủ cho Sàn giao dịch Tiền điện tử Việt Nam',
        description:
          'Thiết kế một khuôn khổ tuân thủ toàn diện cho một sàn giao dịch tiền điện tử hoạt động tại Việt Nam.',
        difficulty: 'Nâng cao',
        materials: ['Nền tảng tuân thủ', 'Công cụ kiểm tra bảo mật', 'Hệ thống báo cáo theo quy định'],
        procedure: [
          'Nghiên cứu các quy định về tiền điện tử và các dự thảo luật của Việt Nam',
          'Triển khai hệ thống xác minh KYC/AML',
          'Thiết kế giám sát giao dịch và báo cáo hoạt động đáng ngờ',
          'Tạo cơ chế bảo vệ quỹ của khách hàng',
          'Triển khai tuân thủ bảo vệ dữ liệu (luật dữ liệu của Việt Nam)',
          'Thiết kế hệ thống báo cáo theo quy định và dấu vết kiểm toán',
        ],
        expectedResults: 'Một khuôn khổ sàn giao dịch tuân thủ quy định sẵn sàng cho thị trường Việt Nam',
        solution: 'Hệ thống tuân thủ đa lớp với giám sát tự động và báo cáo theo quy định',
      },
      {
        title: 'Khuôn khổ Kiểm toán Bảo mật Hợp đồng thông minh',
        description: 'Tạo một quy trình kiểm toán bảo mật toàn diện cho các dự án blockchain của Việt Nam.',
        difficulty: 'Nâng cao',
        materials: ['Công cụ phân tích tĩnh', 'Framework Fuzzing', 'Xác minh chính thức'],
        procedure: [
          'Phát triển các công cụ quét lỗ hổng tự động',
          'Tạo danh sách kiểm tra đánh giá mã thủ công',
          'Triển khai các quy trình xác minh chính thức',
          'Thiết kế các phương pháp kiểm thử thâm nhập',
          'Tạo thủ tục ứng phó sự cố',
          'Xây dựng các chương trình đào tạo bảo mật cho các nhà phát triển Việt Nam',
        ],
        expectedResults: 'Một khuôn khổ kiểm toán bảo mật theo tiêu chuẩn ngành cho hệ sinh thái blockchain Việt Nam',
        solution: 'Khuôn khổ bảo mật toàn diện với tích hợp tuân thủ quy định của Việt Nam',
      },
    ],
    realWorldApplications: [
      'Triển khai bảo mật blockchain doanh nghiệp',
      'Tuân thủ quy định của sàn giao dịch tiền điện tử',
      'Kiểm toán bảo mật giao thức DeFi',
      'Bảo mật dự án blockchain của chính phủ',
      'Hệ thống tuân thủ thanh toán xuyên biên giới',
    ],
    caseStudies: [
      {
        title: 'Tiêu chuẩn Bảo mật của Hiệp hội Blockchain Việt Nam',
        organization: 'Hiệp hội Blockchain Việt Nam',
        problem: 'Thiết lập các tiêu chuẩn bảo mật và tuân thủ cho ngành công nghiệp blockchain Việt Nam',
        solution: 'Phát triển các khuôn khổ bảo mật và các phương pháp tốt nhất trên toàn ngành',
        impact: 'Cải thiện tình hình bảo mật trên toàn hệ sinh thái blockchain Việt Nam',
        innovations: ['Tiêu chuẩn bảo mật', 'Hướng dẫn ngành', 'Phương pháp tốt nhất', 'Khung pháp lý'],
      },
    ],
    resources: [
      {
        title: 'Các phương pháp Bảo mật Tốt nhất của ConsenSys',
        url: 'https://consensys.github.io/smart-contract-best-practices/',
        type: 'Hướng dẫn bảo mật',
      },
    ],
    frameworks: ['MythX', 'Slither', 'Echidna', 'Certora', 'OpenZeppelin Security', 'Chainlink Security'],
    vietnamContext: {
      title: 'An ninh và Pháp lý: Thách thức và Cơ hội cho Blockchain Việt Nam',
      content: [
        'Khi thị trường blockchain phát triển, các vấn đề về bảo mật và tuân thủ pháp lý trở nên quan trọng hơn bao giờ hết để bảo vệ người dùng và các nhà đầu tư.',
        'Hiệp hội Blockchain Việt Nam đang đóng vai trò quan trọng trong việc hợp tác với các cơ quan chính phủ để xây dựng một hành lang pháp lý rõ ràng, thúc đẩy sự phát triển bền vững của ngành.',
        'Nhu cầu về các chuyên gia kiểm toán hợp đồng thông minh (smart contract auditor) và luật sư công nghệ am hiểu về blockchain tại Việt Nam đang tăng cao, mở ra một lĩnh vực nghề nghiệp mới đầy tiềm năng.',
      ],
    },
    careerConnect: {
      name: 'Bà Đinh Thị Thúy Hằng',
      title: 'Giám đốc Pháp lý',
      company: 'Một công ty tư vấn luật lớn',
      imageUrl: 'https://i.pravatar.cc/150?u=dinh-thi-thuy-hang',
      quote:
        'Cân bằng giữa đổi mới sáng tạo và tuân thủ pháp luật là chìa khóa cho sự thành công của bất kỳ dự án blockchain nào. Vai trò của chúng tôi là giúp các nhà phát triển điều hướng trong một môi trường pháp lý phức tạp và xây dựng các sản phẩm an toàn, đáng tin cậy.',
    },
    quizzes: [
      {
        question: 'KYC (Know Your Customer) là một quy trình nhằm mục đích gì?',
        options: [
          'Để quảng bá sản phẩm đến khách hàng mới',
          'Để xác minh danh tính của khách hàng nhằm ngăn chặn gian lận và rửa tiền',
          'Để cung cấp hỗ trợ kỹ thuật cho khách hàng',
          'Để phân tích hành vi của khách hàng',
        ],
        correctAnswerIndex: 1,
        explanation:
          'KYC là một yêu cầu pháp lý bắt buộc đối với các tổ chức tài chính và các dịch vụ liên quan, bao gồm cả nhiều sàn giao dịch tiền điện tử. Nó bao gồm việc thu thập và xác minh thông tin nhận dạng của khách hàng để tuân thủ các quy định chống rửa tiền (AML).',
      },
      {
        question: 'Một cuộc tấn công "re-entrancy" trong hợp đồng thông minh là gì?',
        options: [
          'Một cuộc tấn công từ chối dịch vụ',
          'Một lỗ hổng cho phép kẻ tấn công gọi lại một hàm một cách đệ quy trước khi trạng thái của hợp đồng được cập nhật, thường dẫn đến việc rút tiền trái phép',
          'Một cách để thay đổi mã của một hợp đồng đã triển khai',
          'Một lỗi trong trình biên dịch Solidity',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Tấn công Re-entrancy là một trong những lỗ hổng bảo mật khét tiếng nhất trong lịch sử Ethereum, đã được sử dụng trong vụ hack The DAO. Nó xảy ra khi một hợp đồng bên ngoài có thể gọi lại vào hợp đồng đang gọi trước khi nó hoàn thành việc thực thi, cho phép kẻ tấn công thao túng trạng thái và rút tiền nhiều lần.',
      },
    ],
  },
];
