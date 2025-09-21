import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import type { BaseLessonData } from '@/types/lesson-base';

export interface BlockchainLesson extends BaseLessonData {
  blockchainType: string;
  frameworks: string[];
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

export const blockchainLessons: BlockchainLesson[] = [
  {
    id: 'blockchain-fundamentals',
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
    faqs: [
      {
        question: 'Blockchain là gì và nó hoạt động như thế nào?',
        answer:
          'Blockchain là một sổ cái kỹ thuật số phi tập trung, phân tán, ghi lại các giao dịch trên nhiều máy tính để không thể thay đổi bản ghi một cách hồi tố. Mỗi khối chứa một danh sách các giao dịch và được liên kết với khối trước đó bằng một hàm băm mật mã, tạo thành một chuỗi an toàn và bất biến.',
      },
      {
        question: 'Sự khác biệt giữa Proof of Work (PoW) và Proof of Stake (PoS) là gì?',
        answer:
          'PoW (như trong Bitcoin) yêu cầu các "thợ đào" giải các bài toán phức tạp để xác thực giao dịch và tạo khối mới, tiêu tốn nhiều năng lượng. PoS (như trong Ethereum 2.0) cho phép chủ sở hữu tiền điện tử "đặt cược" coin của họ làm tài sản thế chấp để có cơ hội xác thực các giao dịch và nhận phần thưởng, tiết kiệm năng lượng hơn nhiều.',
      },
      {
        question: 'Hợp đồng thông minh là gì?',
        answer:
          'Hợp đồng thông minh là các hợp đồng tự thực thi với các điều khoản của thỏa thuận được viết trực tiếp vào mã. Chúng chạy trên blockchain, tự động thực thi và thực thi các điều khoản khi các điều kiện được xác định trước được đáp ứng, loại bỏ nhu cầu về trung gian.',
      },
      {
        question: 'Tại sao blockchain lại quan trọng đối với Việt Nam?',
        answer:
          'Đối với Việt Nam, blockchain mang lại tiềm năng to lớn trong việc tăng cường tính minh bạch trong chuỗi cung ứng (ví dụ: nông sản), tạo điều kiện cho các giao dịch kiều hối rẻ hơn và nhanh hơn, và thúc đẩy tài chính toàn diện. Với cộng đồng nhà phát triển năng động, Việt Nam có vị thế tốt để đổi mới trong không gian này.',
      },
      {
        question: 'Tiền điện tử có hợp pháp tại Việt Nam không?',
        answer:
          'Hiện tại, Việt Nam chưa công nhận tiền điện tử là phương tiện thanh toán hợp pháp. Tuy nhiên, việc sở hữu, giao dịch và đầu tư vào tài sản số không bị cấm. Chính phủ đang trong quá trình nghiên cứu và xây dựng hành lang pháp lý để quản lý tài sản ảo và tiền ảo.',
      },
      {
        question: 'Sổ cái phi tập trung (decentralized ledger) có nghĩa là gì?',
        answer:
          'Sổ cái phi tập trung có nghĩa là không có một thực thể trung tâm nào (như ngân hàng hoặc chính phủ) kiểm soát sổ cái. Thay vào đó, một bản sao của sổ cái được lưu trữ và đồng bộ trên nhiều máy tính (nút) trong mạng lưới, đảm bảo tính minh bạch và chống kiểm duyệt.',
      },
      {
        question: 'Thế nào là một "khối" trong blockchain?',
        answer:
          'Một "khối" là một bản ghi chứa một tập hợp các giao dịch đã được xác thực. Mỗi khối cũng chứa một tham chiếu đến khối trước đó (hàm băm của khối trước), tạo thành một chuỗi liên kết. Đây là lý do tại sao nó được gọi là "blockchain" (chuỗi khối).',
      },
      {
        question: 'Ai có thể tham gia vào một mạng lưới blockchain công khai?',
        answer:
          'Bất kỳ ai có kết nối internet đều có thể tham gia vào một mạng lưới blockchain công khai (public blockchain) như Bitcoin hoặc Ethereum. Người dùng có thể gửi giao dịch, xem lịch sử giao dịch và tham gia vào quá trình đồng thuận (ví dụ: đào coin).',
      },
      {
        question: 'Sự khác biệt giữa blockchain công khai và riêng tư là gì?',
        answer:
          'Blockchain công khai (public) cho phép bất kỳ ai tham gia, trong khi blockchain riêng tư (private) yêu cầu quyền truy cập và thường được kiểm soát bởi một tổ chức duy nhất. Blockchain riêng tư thường được các doanh nghiệp sử dụng để tăng hiệu quả nội bộ.',
      },
      {
        question: 'Tấn công 51% là gì?',
        answer:
          'Tấn công 51% là một cuộc tấn công tiềm tàng vào một mạng lưới blockchain (đặc biệt là các mạng sử dụng PoW), nơi một cá nhân hoặc một nhóm kiểm soát hơn 50% sức mạnh tính toán của mạng. Điều này cho phép họ có thể ngăn chặn các giao dịch mới hoặc đảo ngược các giao dịch của chính họ, gây ra tình trạng chi tiêu kép.',
      },
    ],
  },
  {
    id: 'smart-contracts-dapps',
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
    faqs: [
      {
        question: 'Solidity là gì và tại sao nó lại quan trọng?',
        answer:
          'Solidity là ngôn ngữ lập trình chính để viết hợp đồng thông minh trên Ethereum và các blockchain tương thích EVM. Việc thành thạo Solidity là kỹ năng cơ bản cho bất kỳ nhà phát triển blockchain nào muốn xây dựng các ứng dụng phi tập trung (dApps).',
      },
      {
        question: 'Sự khác biệt giữa Hardhat và Truffle là gì?',
        answer:
          'Cả hai đều là các môi trường phát triển phổ biến cho Ethereum. Hardhat được biết đến với tính linh hoạt, hiệu suất nhanh và khả năng debug mạnh mẽ với console.log. Truffle có lịch sử lâu đời hơn và một hệ sinh thái trưởng thành với các công cụ tích hợp như Ganache và Drizzle.',
      },
      {
        question: 'Tại sao bảo mật hợp đồng thông minh lại cực kỳ quan trọng?',
        answer:
          'Một khi đã được triển khai, mã của hợp đồng thông minh là bất biến và quản lý các tài sản có giá trị thực. Một lỗ hổng bảo mật nhỏ có thể dẫn đến thiệt hại tài chính không thể khắc phục. Do đó, việc kiểm toán và tuân thủ các phương pháp tốt nhất về bảo mật là tối quan trọng.',
      },
      {
        question: 'Làm thế nào để bắt đầu với việc phát triển hợp đồng thông minh?',
        answer:
          'Bắt đầu bằng cách học các khái niệm cơ bản của Solidity, sau đó thiết lập một môi trường phát triển cục bộ với Hardhat hoặc Truffle. Sử dụng các thư viện như OpenZeppelin để tận dụng các hợp đồng đã được kiểm toán và an toàn. Thực hành bằng cách xây dựng các dự án nhỏ như token ERC-20 hoặc một dApp bỏ phiếu đơn giản.',
      },
      {
        question: 'Gas fee là gì và tại sao nó lại tồn tại?',
        answer:
          'Gas fee là phí giao dịch trên mạng Ethereum, được trả cho những người xác thực (thợ đào/validator) để thực hiện các hoạt động như gửi token hoặc tương tác với hợp đồng thông minh. Phí này bù đắp cho tài nguyên tính toán cần thiết để xử lý và bảo mật giao dịch.',
      },
      {
        question: 'Thư viện OpenZeppelin là gì?',
        answer:
          'OpenZeppelin là một thư viện cung cấp các hợp đồng thông minh đã được kiểm toán và an toàn cho các tiêu chuẩn phổ biến như ERC-20 và ERC-721. Sử dụng OpenZeppelin giúp các nhà phát triển tiết kiệm thời gian và giảm thiểu rủi ro bảo mật bằng cách xây dựng trên các thành phần đã được kiểm chứng.',
      },
      {
        question: 'EVM (Ethereum Virtual Machine) là gì?',
        answer:
          'EVM là môi trường thực thi cho các hợp đồng thông minh trên Ethereum. Nó giống như một máy tính toàn cầu phi tập trung, nơi mọi giao dịch và hợp đồng thông minh được thực thi. Mọi nút trong mạng Ethereum đều chạy một bản sao của EVM để duy trì sự đồng thuận.',
      },
      {
        question: 'Làm thế nào để kiểm thử một hợp đồng thông minh?',
        answer:
          'Kiểm thử là một bước quan trọng. Các framework như Hardhat và Truffle cung cấp các công cụ mạnh mẽ để viết các bài kiểm thử đơn vị (unit test) và kiểm thử tích hợp (integration test) bằng JavaScript hoặc TypeScript. Điều này cho phép bạn mô phỏng các tương tác và xác minh hành vi của hợp đồng trước khi triển khai.',
      },
      {
        question: 'Sự khác biệt giữa testnet và mainnet là gì?',
        answer:
          'Mainnet là mạng lưới blockchain chính nơi các giao dịch có giá trị thực. Testnet là các mạng lưới song song được sử dụng cho mục đích thử nghiệm. Các nhà phát triển triển khai và kiểm thử ứng dụng của họ trên testnet (sử dụng token không có giá trị) trước khi triển khai lên mainnet.',
      },
      {
        question: 'Một "oracle" trong blockchain là gì?',
        answer:
          'Một oracle là một dịch vụ của bên thứ ba cung cấp dữ liệu từ thế giới thực (ví dụ: giá cổ phiếu, kết quả thời tiết) cho các hợp đồng thông minh. Hợp đồng thông minh không thể tự truy cập dữ liệu bên ngoài blockchain, vì vậy oracles đóng vai trò là cầu nối quan trọng.',
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
    faqs: [
      {
        question: 'DeFi là gì và nó khác với tài chính truyền thống (TradFi) như thế nào?',
        answer:
          'DeFi (Tài chính phi tập trung) là một hệ thống tài chính mở được xây dựng trên công nghệ blockchain, không cần đến các trung gian tài chính truyền thống như ngân hàng. Nó cho phép mọi người cho vay, đi vay, giao dịch và đầu tư một cách minh bạch và không cần cấp phép, trong khi TradFi phụ thuộc vào các tổ chức tập trung.',
      },
      {
        question: 'Rủi ro lớn nhất khi tham gia vào DeFi là gì?',
        answer:
          'Các rủi ro chính trong DeFi bao gồm rủi ro hợp đồng thông minh (lỗi mã), rủi ro thị trường (biến động giá tài sản), rủi ro thanh khoản, và tổn thất vô thường (impermanent loss) khi cung cấp thanh khoản cho các AMM. Việc nghiên cứu kỹ lưỡng và quản lý rủi ro là rất quan trọng.',
      },
      {
        question: 'Làm thế nào các giao thức DeFi có thể mang lại lợi nhuận cao như vậy?',
        answer:
          'Lợi nhuận cao trong DeFi (yield) đến từ nhiều nguồn: phí giao dịch, phần thưởng từ việc cung cấp thanh khoản (khai thác thanh khoản), lãi suất cho vay, và phần thưởng quản trị (governance tokens). Tuy nhiên, lợi nhuận cao thường đi kèm với rủi ro cao.',
      },
      {
        question: 'Tôi có cần nhiều tiền để bắt đầu với DeFi không?',
        answer:
          'Không hẳn. Mặc dù một số chiến lược yêu cầu vốn đáng kể, bạn có thể bắt đầu với một số tiền nhỏ để thử nghiệm. Tuy nhiên, hãy lưu ý đến phí giao dịch (gas fee), đặc biệt là trên mạng Ethereum, có thể làm cho các giao dịch nhỏ không hiệu quả về mặt chi phí. Các giải pháp Layer 2 có thể giúp giảm bớt vấn đề này.',
      },
      {
        question: 'Tổn thất vô thường (Impermanent Loss) là gì?',
        answer:
          'Tổn thất vô thường là một rủi ro đặc thù khi cung cấp thanh khoản cho một AMM. Nó xảy ra khi giá của các token trong bể thanh khoản thay đổi so với khi bạn gửi chúng vào. Nếu bạn rút tiền ra, giá trị tổng cộng của các token bạn nhận lại có thể thấp hơn so với việc bạn chỉ giữ chúng trong ví của mình.',
      },
      {
        question: 'Stablecoin là gì và vai trò của nó trong DeFi là gì?',
        answer:
          'Stablecoin là một loại tiền điện tử được thiết kế để duy trì một giá trị ổn định, thường được neo giá vào một tài sản trong thế giới thực như đô la Mỹ. Trong DeFi, chúng đóng vai trò quan trọng như một phương tiện trao đổi ổn định, một tài sản thế chấp, và một nơi trú ẩn an toàn khỏi sự biến động của thị trường.',
      },
      {
        question: 'Sàn giao dịch phi tập trung (DEX) khác với sàn giao dịch tập trung (CEX) như thế nào?',
        answer:
          'DEX (như Uniswap) hoạt động trên blockchain, cho phép người dùng giao dịch trực tiếp từ ví của họ mà không cần ký gửi tài sản cho một bên thứ ba. CEX (như Binance) là các công ty tập trung giữ tiền của người dùng và hoạt động thông qua sổ lệnh truyền thống. DEX cung cấp quyền tự chủ lớn hơn nhưng CEX thường có tốc độ nhanh hơn và thanh khoản cao hơn.',
      },
      {
        question: 'DAO (Tổ chức tự trị phi tập trung) là gì?',
        answer:
          'DAO là một tổ chức được điều hành bởi các quy tắc được mã hóa trong các hợp đồng thông minh. Các quyết định thường được đưa ra thông qua việc bỏ phiếu của các thành viên sở hữu token quản trị. Nhiều giao thức DeFi được quản lý bởi các DAO.',
      },
      {
        question: 'Làm thế nào để tôi có thể tham gia vào yield farming?',
        answer:
          'Để tham gia, bạn cần có một ví tiền điện tử (như MetaMask), một số vốn ban đầu, và kiến thức về các giao thức khác nhau. Bạn sẽ cần cung cấp thanh khoản cho một bể trên một DEX hoặc cho vay tài sản trên một nền tảng cho vay, sau đó "stake" (đặt cược) các token nhận được để kiếm thêm phần thưởng.',
      },
      {
        question: 'Flash loan là gì?',
        answer:
          'Flash loan là một loại khoản vay không cần tài sản thế chấp trong DeFi, nhưng nó phải được vay và trả lại trong cùng một giao dịch blockchain. Chúng thường được các nhà giao dịch sử dụng cho các cơ hội kinh doanh chênh lệch giá (arbitrage) và các chiến lược phức tạp khác.',
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
    faqs: [
      {
        question: 'NFT thực sự là gì? Tôi có sở hữu hình ảnh không?',
        answer:
          'NFT (Non-Fungible Token) là một chứng chỉ sở hữu kỹ thuật số duy nhất được ghi lại trên blockchain. Khi bạn mua một NFT, bạn không nhất thiết sở hữu bản quyền của hình ảnh, mà bạn sở hữu chính token đó, một bản ghi xác thực quyền sở hữu của bạn đối với một tài sản kỹ thuật số cụ thể.',
      },
      {
        question: 'Sự khác biệt giữa ERC-721 và ERC-1155 là gì?',
        answer:
          'ERC-721 là tiêu chuẩn cho các NFT hoàn toàn độc nhất, mỗi token là một hợp đồng riêng. ERC-1155 là một tiêu chuẩn đa token, cho phép một hợp đồng duy nhất quản lý nhiều loại token khác nhau, cả fungible (có thể thay thế) và non-fungible (không thể thay thế). Điều này hiệu quả hơn cho các game có nhiều vật phẩm.',
      },
      {
        question: 'Metaverse có phải chỉ là một trò chơi không?',
        answer:
          'Không. Mặc dù game là một phần quan trọng, metaverse là một khái niệm rộng lớn hơn về một Internet 3D, nơi công việc, giao tiếp xã hội, giải trí, và thương mại đều có thể diễn ra. Nó được xem là một không gian ảo liên tục và tương tác.',
      },
      {
        question: 'Làm thế nào để tạo và bán một NFT?',
        answer:
          'Bạn có thể sử dụng các nền tảng như OpenSea, Rarible, hoặc Foundation. Quá trình này thường bao gồm việc tải lên tệp kỹ thuật số của bạn (hình ảnh, video, v.v.), điền thông tin chi tiết, và "mint" (đúc) nó thành một NFT trên blockchain. Sau đó, bạn có thể niêm yết nó để bán.',
      },
      {
        question: 'Dữ liệu của NFT (hình ảnh, video) được lưu trữ ở đâu?',
        answer:
          'Việc lưu trữ các tệp lớn trực tiếp trên blockchain rất tốn kém. Do đó, siêu dữ liệu (metadata) và tệp phương tiện của NFT thường được lưu trữ off-chain (ngoài chuỗi) bằng các hệ thống như IPFS (InterPlanetary File System) hoặc Arweave. NFT trên chuỗi chỉ chứa một liên kết đến vị trí lưu trữ này.',
      },
      {
        question: 'GameFi là gì?',
        answer:
          'GameFi là sự kết hợp giữa Game (trò chơi) và Finance (tài chính). Đây là các trò chơi blockchain kết hợp các yếu tố DeFi và thường sử dụng NFT cho các vật phẩm trong game. Mô hình "Play-to-Earn" (Chơi để kiếm tiền) là một đặc điểm nổi bật của GameFi, cho phép người chơi kiếm được tài sản có giá trị thực.',
      },
      {
        question: 'Tiền bản quyền (royalties) hoạt động như thế nào với NFT?',
        answer:
          'Một trong những tính năng mạnh mẽ của NFT là khả năng lập trình tiền bản quyền vĩnh viễn. Người tạo ra NFT có thể mã hóa một tỷ lệ phần trăm (ví dụ: 5-10%) vào hợp đồng thông minh. Mỗi khi NFT đó được bán lại trên thị trường thứ cấp, một phần tiền bán sẽ tự động được chuyển đến ví của người tạo ban đầu.',
      },
      {
        question: 'Tôi có thể sử dụng NFT của mình trong metaverse không?',
        answer:
          'Điều đó phụ thuộc vào metaverse cụ thể. Mục tiêu dài hạn là khả năng tương tác, nơi bạn có thể mang tài sản kỹ thuật số (avatar, vật phẩm, nghệ thuật) của mình qua các thế giới ảo khác nhau. Các tiêu chuẩn như ERC-721 và ERC-1155 là nền tảng cho tầm nhìn này.',
      },
      {
        question: '"Minting" một NFT có nghĩa là gì?',
        answer:
          '"Minting" là quá trình xuất bản một token duy nhất của bạn lên blockchain để làm cho nó có thể mua được. Nó tương tự như việc tạo ra một đồng xu mới. Quá trình này ghi lại thông tin của NFT vào sổ cái phi tập trung, biến nó thành một tài sản kỹ thuật số vĩnh viễn và có thể xác minh.',
      },
      {
        question: 'Tại sao một số NFT lại có giá trị hàng triệu đô la?',
        answer:
          'Giá trị của NFT, giống như nghệ thuật truyền thống, mang tính chủ quan cao và được quyết định bởi thị trường. Các yếu tố ảnh hưởng đến giá trị bao gồm danh tiếng của nghệ sĩ, tính độc đáo và hiếm có, ý nghĩa văn hóa, cộng đồng xung quanh dự án, và tiện ích (utility) mà NFT đó mang lại (ví dụ: quyền truy cập vào một sự kiện hoặc cộng đồng độc quyền).',
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
    faqs: [
      {
        question: 'Tại sao quy định pháp lý lại quan trọng đối với sự phát triển của blockchain?',
        answer:
          'Một khung pháp lý rõ ràng giúp bảo vệ người tiêu dùng và nhà đầu tư, ngăn chặn các hoạt động bất hợp pháp, và tạo ra một môi trường ổn định để các doanh nghiệp hợp pháp có thể đổi mới và phát triển. Sự rõ ràng về quy định là cần thiết cho việc áp dụng blockchain ở quy mô lớn.',
      },
      {
        question: 'Kiểm toán hợp đồng thông minh (smart contract audit) là gì?',
        answer:
          'Đó là một quá trình phân tích và xem xét mã của hợp đồng thông minh một cách kỹ lưỡng để tìm ra các lỗ hổng bảo mật, lỗi logic, và các vấn đề tiềm ẩn trước khi nó được triển khai. Đây là một bước quan trọng để đảm bảo an toàn cho các ứng dụng DeFi và NFT.',
      },
      {
        question: 'AML là viết tắt của gì và nó liên quan gì đến tiền điện tử?',
        answer:
          'AML là viết tắt của Anti-Money Laundering (Chống rửa tiền). Các quy định AML yêu cầu các sàn giao dịch và dịch vụ tiền điện tử phải thực hiện các biện pháp để ngăn chặn việc sử dụng nền tảng của họ cho các hoạt động rửa tiền, thường bao gồm cả quy trình KYC (Know Your Customer).',
      },
      {
        question: 'Nếu tôi tìm thấy một lỗi trong một giao thức DeFi, tôi nên làm gì?',
        answer:
          'Nếu bạn tin rằng mình đã tìm thấy một lỗ hổng bảo mật, hãy hành động có trách nhiệm. Tìm kiếm chương trình "bug bounty" (săn lỗi nhận thưởng) của dự án và báo cáo riêng cho nhóm phát triển. Đừng khai thác lỗ hổng hoặc tiết lộ công khai cho đến khi nó được vá, vì điều này có thể gây nguy hiểm cho tiền của người dùng.',
      },
      {
        question: 'Phân tích tĩnh (static analysis) trong kiểm toán hợp đồng thông minh là gì?',
        answer:
          'Phân tích tĩnh là quá trình kiểm tra mã nguồn của hợp đồng thông minh mà không cần thực thi nó. Các công cụ như Slither hoặc MythX sẽ tự động quét mã để tìm các mẫu lỗ hổng đã biết, các lỗi logic phổ biến và các vi phạm các phương pháp bảo mật tốt nhất.',
      },
      {
        question: 'Fuzzing là gì và nó được áp dụng như thế nào cho hợp đồng thông minh?',
        answer:
          'Fuzzing là một kỹ thuật kiểm thử tự động bao gồm việc cung cấp một lượng lớn dữ liệu đầu vào ngẫu nhiên hoặc không hợp lệ cho một chương trình để tìm ra các lỗi hoặc sự cố. Đối với hợp đồng thông minh, các công cụ như Echidna có thể được sử dụng để kiểm tra các thuộc tính và tìm ra các trường hợp ngoại lệ không mong muốn.',
      },
      {
        question: 'Mô hình "Checks-Effects-Interactions" là gì?',
        answer:
          'Đây là một mẫu thiết kế bảo mật quan trọng trong Solidity để ngăn chặn các cuộc tấn công re-entrancy. Nó khuyến nghị rằng một hàm nên: 1. Thực hiện tất cả các kiểm tra (Checks) trước. 2. Thực hiện các thay đổi đối với trạng thái của hợp đồng (Effects). 3. Cuối cùng, tương tác (Interactions) với các hợp đồng bên ngoài. Điều này đảm bảo trạng thái được cập nhật trước khi bất kỳ mã bên ngoài nào có thể gọi lại.',
      },
      {
        question: 'Tại sao việc quản lý khóa riêng (private key) lại quan trọng đến vậy?',
        answer:
          'Trong thế giới blockchain, "không phải khóa của bạn, không phải coin của bạn". Khóa riêng cung cấp toàn quyền kiểm soát đối với một ví và tài sản trong đó. Nếu khóa riêng bị mất hoặc bị đánh cắp, không có cách nào để khôi phục lại tài sản. Do đó, việc bảo mật khóa riêng bằng ví phần cứng hoặc các phương pháp an toàn khác là tối quan trọng.',
      },
      {
        question: 'Travel Rule (Quy tắc di chuyển) của FATF là gì?',
        answer:
          'Travel Rule là một khuyến nghị từ Lực lượng đặc nhiệm tài chính (FATF) yêu cầu các nhà cung cấp dịch vụ tài sản ảo (VASP) phải thu thập và chia sẻ thông tin về người gửi và người nhận trong các giao dịch tiền điện tử. Đây là một phần của nỗ lực toàn cầu nhằm chống rửa tiền và tài trợ khủng bố.',
      },
      {
        question: 'Làm thế nào để bảo vệ mình khỏi các vụ lừa đảo (scam) trong không gian tiền điện tử?',
        answer:
          'Hãy luôn cảnh giác. Không bao giờ chia sẻ khóa riêng hoặc cụm từ khôi phục của bạn. Cẩn thận với các lời hứa về lợi nhuận "chắc chắn" hoặc "không có rủi ro". Xác minh danh tính của những người bạn tương tác và kiểm tra kỹ địa chỉ hợp đồng trước khi tương tác với một dApp. Luôn tự mình nghiên cứu (DYOR - Do Your Own Research).',
      },
    ],
  },
];

export const blockchainModuleData: ModuleData = {
  id: K2Module.Blockchain,
  title: 'Công nghệ Blockchain',
  subtitle: 'Từ nền tảng đến ứng dụng phi tập trung',
  description:
    'Học blockchain từ các nguyên tắc cơ bản đến phát triển hợp đồng thông minh, ứng dụng DeFi, NFT và metaverse.',
  category: 'Lập trình & Phát triển',
  icon: '⛓️',
  color: 'from-orange-600 to-yellow-600',
  totalDuration: '16-20 giờ',
  difficulty: 'Trung bình đến Nâng cao',
  level: 'Chuyên sâu',
  duration: '16-20 giờ',
  href: '/learning/blockchain',
  features: [
    'Nền tảng Blockchain & Tiền điện tử',
    'Phát triển Hợp đồng thông minh',
    'Giao thức DeFi & Ứng dụng',
    'Công nghệ NFT & Metaverse',
    'Bảo mật & Tuân thủ',
  ],
  tags: ['blockchain', 'cryptocurrency', 'smart contracts', 'solidity', 'defi', 'nft', 'metaverse'],
  prerequisites: [
    'Kinh nghiệm lập trình (Python/JavaScript)',
    'Hiểu biết cơ bản về mật mã học',
    'Kiến thức về phát triển web',
    'Quan tâm đến tài chính và công nghệ',
  ],
  lessons: blockchainLessons,
  objectives: [
    'Trang bị kiến thức toàn diện về công nghệ blockchain, có khả năng phát triển và triển khai các ứng dụng phi tập trung (dApps) trong các lĩnh vực khác nhau.',
  ],
  careerOutcomes: [
    'Kỹ sư Blockchain',
    'Lập trình viên Solidity',
    'Chuyên gia DeFi',
    'Nhà phát triển DApp',
    'Chuyên gia tư vấn Blockchain',
  ],
  industryApplications: [
    {
      name: 'Tài chính Phi tập trung (DeFi)',
      description:
        'Phát triển các giao thức cho vay, sàn giao dịch phi tập trung (DEX), và các công cụ tài chính sáng tạo khác.',
    },
    {
      name: 'Quản lý Chuỗi cung ứng',
      description: 'Tăng cường tính minh bạch và truy xuất nguồn gốc cho hàng hóa từ sản xuất đến người tiêu dùng.',
    },
    {
      name: 'NFT và GameFi',
      description: 'Xây dựng các thị trường cho tài sản số độc nhất và phát triển các nền kinh tế trong game.',
    },
    {
      name: 'Nhận dạng Kỹ thuật số',
      description: 'Tạo ra các hệ thống nhận dạng tự chủ và an toàn cho công dân và tổ chức.',
    },
  ],
  marketDemand: {
    averageSalary: '120.000 - 180.000 USD/năm',
    jobGrowth: '30-40% mỗi năm',
    hireDemand: 'Rất cao',
  },
  targetAudience: 'Lập trình viên, sinh viên CNTT, nhà đầu tư công nghệ, và bất kỳ ai muốn tìm hiểu sâu về blockchain.',
  careerProspects:
    'Kỹ sư Blockchain, Lập trình viên Solidity, Chuyên gia DeFi, Nhà phát triển DApp, Chuyên gia tư vấn Blockchain.',
  relatedModules: [K2Module.Cybersecurity, K2Module.FinancialLiteracy, K2Module.Python],
  imageUrl: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&h=600&fit=crop',
};
