import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

export interface VietnamContext {
  title: string;
  content: string[];
}

export interface CareerConnect {
  name: string;
  title: string;
  company: string;
  imageUrl: string;
  quote: string;
}

export interface CrossBorderEcommerceLessonData extends BaseLessonData {
  marketSize?: string;
  growthRate?: string;
  platforms?: string[];
  regulations?: string[];
  vietnamContext?: VietnamContext;
  careerConnect?: CareerConnect;
  tools?: string[];
}

const crossBorderEcommerceLessonsData: CrossBorderEcommerceLessonData[] = [
  {
    id: 'ecommerce-fundamentals',
    title: 'Cơ bản Thương mại Điện tử Xuyên biên giới',
    description: 'Hiểu về thương mại điện tử quốc tế và cơ hội cho doanh nghiệp Việt Nam',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=hqlC1WxOp50',
    mainContent: {
      introduction:
        'Thương mại điện tử xuyên biên giới không còn là sân chơi của các ông lớn. Đây là cơ hội vàng cho các doanh nghiệp Việt Nam vươn ra biển lớn, tiếp cận hàng tỷ khách hàng toàn cầu. Bài học này sẽ mở ra cánh cửa vào thế giới xuất khẩu trực tuyến, cung cấp cho bạn nền tảng vững chắc để bắt đầu hành trình chinh phục thị trường quốc tế.',
      keyConcepts: [
        {
          title: 'Mô hình kinh doanh (Business Models)',
          description:
            'Hiểu các mô hình phổ biến như B2C (Bán trực tiếp cho người tiêu dùng), B2B (Bán cho doanh nghiệp khác), và D2C (Bán trực tiếp từ nhà sản xuất). Việc chọn đúng mô hình sẽ quyết định chiến lược vận hành và marketing của bạn.',
          examples: [
            'Bán đồ thủ công mỹ nghệ Việt Nam trên Etsy (B2C).',
            'Cung cấp nguyên liệu cà phê cho các quán rang xay ở châu Âu qua Alibaba (B2B).',
            'Một thương hiệu thời trang tự sản xuất và bán trực tiếp cho khách hàng quốc tế qua website riêng (D2C).',
          ],
        },
        {
          title: 'Nghiên cứu thị trường (Market Research)',
          description:
            'Đừng bán thứ bạn có, hãy bán thứ thị trường cần. Học cách sử dụng các công cụ để phân tích nhu cầu, đối thủ cạnh tranh, và các rào cản văn hóa, pháp lý tại thị trường mục tiêu.',
          examples: [
            'Sử dụng Google Trends để xem xu hướng tìm kiếm "áo dài" tại Mỹ.',
            'Phân tích các cửa hàng bán chạy nhất trên Amazon để tìm ra sản phẩm ngách.',
          ],
        },
        {
          title: 'Định vị sản phẩm (Product-Market Fit)',
          description:
            'Tìm ra điểm giao thoa hoàn hảo giữa sản phẩm độc đáo của Việt Nam và nhu cầu của thị trường quốc tế. Điều này có thể đòi hỏi việc điều chỉnh sản phẩm, bao bì, hoặc câu chuyện thương hiệu.',
          examples: [
            'Điều chỉnh vị phở ăn liền ít cay hơn cho thị trường châu Âu.',
            'Thiết kế bao bì sang trọng hơn cho sản phẩm cà phê đặc sản khi bán tại Nhật Bản.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Doanh nghiệp nhỏ và vừa (SMEs)',
          description: 'Mở rộng kênh phân phối ra toàn cầu với chi phí thấp hơn nhiều so với xuất khẩu truyền thống.',
        },
        {
          area: 'Nghệ nhân và nhà sản xuất địa phương',
          description:
            'Bán trực tiếp sản phẩm thủ công, nông sản đặc sản cho người tiêu dùng cuối cùng ở nước ngoài, tối đa hóa lợi nhuận.',
        },
        {
          area: 'Startups và thương hiệu D2C',
          description: 'Xây dựng thương hiệu toàn cầu từ con số không bằng cách tiếp cận trực tiếp khách hàng quốc tế.',
        },
      ],
      conclusion:
        'Thương mại điện tử xuyên biên giới là một hành trình đầy thử thách nhưng cũng vô cùng xứng đáng. Với một chiến lược đúng đắn và sự chuẩn bị kỹ lưỡng, các sản phẩm và thương hiệu Việt Nam hoàn toàn có khả năng cạnh tranh sòng phẳng trên thị trường toàn cầu.',
    },
    relatedGames: [
      {
        id: 'global-ambassador-3d',
        name: 'Global Ambassador 3D',
        description:
          'Navigate cross-cultural communication scenarios, build diplomatic skills, and solve global challenges in 3D',
      },
    ],
    objectives: [
      'Hiểu khái niệm và mô hình kinh doanh cross-border e-commerce',
      'Nắm được xu hướng thị trường và cơ hội cho Việt Nam',
      'Phân tích case studies thành công từ các doanh nghiệp Việt',
      'Xây dựng chiến lược gia nhập thị trường quốc tế',
    ],
    prerequisites: [
      'Kiến thức cơ bản về thương mại điện tử',
      'Hiểu biết về marketing online',
      'Kỹ năng sử dụng máy tính và internet',
    ],
    exercises: [
      {
        title: 'Phân tích Thị trường Mục tiêu',
        description: 'Nghiên cứu và phân tích một thị trường quốc tế cụ thể',
        difficulty: 'Cơ bản',
        procedure: [
          'Chọn một quốc gia/thị trường mục tiêu',
          'Thu thập dữ liệu về quy mô thị trường, đối thủ cạnh tranh',
          'Phân tích hành vi tiêu dùng và preferences',
          'Đánh giá rào cản gia nhập và cơ hội',
          'Lập kế hoạch chiến lược gia nhập',
        ],
        expectedResults: 'Báo cáo phân tích thị trường chi tiết với khuyến nghị cụ thể',
      },
    ],
    realWorldApplications: [
      'Mở rộng kinh doanh ra thị trường quốc tế',
      'Tăng doanh thu từ khách hàng nước ngoài',
      'Đa dạng hóa nguồn thu nhập',
      'Xây dựng thương hiệu toàn cầu',
    ],
    marketSize: '$5-12 billion by 2028',
    growthRate: '+42% annually',
    platforms: ['Shopee', 'Lazada', 'Amazon', 'eBay', 'AliExpress'],
    regulations: ['EVFTA', 'CPTPP', 'ASEAN Trade Agreement'],
    vietnamContext: {
      title: 'Bối cảnh Việt Nam',
      content: [
        'Chính phủ Việt Nam đặt mục tiêu kim ngạch xuất khẩu thương mại điện tử xuyên biên giới đạt 200.000 tỷ đồng vào năm 2025.',
        'Các mặt hàng xuất khẩu phổ biến của Việt Nam qua kênh TMĐT bao gồm: dệt may, da giày, đồ gỗ, thủ công mỹ nghệ, và nông sản chế biến.',
        'Các doanh nghiệp nhỏ và vừa (SMEs) chiếm hơn 95% tổng số doanh nghiệp tại Việt Nam, và TMĐT xuyên biên giới là con đường hiệu quả nhất để họ vươn ra toàn cầu.',
        'Các "nhà xuất khẩu triệu đô" trên Amazon từ Việt Nam đang tăng nhanh, chứng tỏ tiềm năng to lớn của thị trường này.',
      ],
    },
    careerConnect: {
      name: 'Chị Trần Thị Lan Anh',
      title: 'Nhà sáng lập, VietCrafts Global',
      company: 'VietCrafts Global (hư cấu)',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-thi-lan-anh',
      quote:
        '5 năm trước, chúng tôi chỉ là một cửa hàng nhỏ ở Hội An. Nhờ có Etsy và Amazon, những sản phẩm mây tre đan của các nghệ nhân làng nghề đã có mặt trong các gia đình ở Mỹ, châu Âu. TMĐT xuyên biên giới không chỉ là kinh doanh, đó là cách chúng tôi kể câu chuyện văn hóa Việt Nam với thế giới.',
    },
    quizzes: [
      {
        question: 'Mô hình D2C (Direct-to-Consumer) trong TMĐT xuyên biên giới có nghĩa là gì?',
        options: [
          'Bán hàng cho các doanh nghiệp khác ở nước ngoài.',
          'Bán hàng thông qua một nhà phân phối lớn.',
          'Nhà sản xuất bán hàng trực tiếp cho người tiêu dùng cuối cùng ở nước ngoài, không qua trung gian.',
          'Chỉ bán hàng trên các sàn TMĐT.',
        ],
        correctAnswerIndex: 2,
        explanation:
          'D2C cho phép các thương hiệu kiểm soát hoàn toàn trải nghiệm khách hàng và giữ lại phần lớn lợi nhuận, đây là một xu hướng đang phát triển mạnh mẽ.',
      },
      {
        question:
          'Lợi ích lớn nhất của TMĐT xuyên biên giới đối với các doanh nghiệp nhỏ và vừa (SMEs) Việt Nam là gì?',
        options: [
          'Tiếp cận thị trường toàn cầu với chi phí thấp.',
          'Chỉ cần bán hàng trong nước.',
          'Không cần quan tâm đến marketing.',
          'Tránh được mọi rủi ro pháp lý.',
        ],
        correctAnswerIndex: 0,
        explanation:
          'So với xuất khẩu truyền thống đòi hỏi vốn lớn và các mối quan hệ phức tạp, TMĐT xuyên biên giới cho phép các SMEs tiếp cận hàng tỷ khách hàng với chi phí khởi đầu thấp hơn rất nhiều.',
      },
    ],
    faqs: [
      {
        question: 'Tôi nên bắt đầu với nền tảng nào trước?',
        answer:
          'Nếu bạn mới bắt đầu, hãy tập trung làm tốt trên MỘT nền tảng trước khi mở rộng. Amazon thường là lựa chọn tốt nhất cho thị trường B2C ở Mỹ/EU vì lượng truy cập khổng lồ và hệ thống FBA mạnh mẽ. Nếu sản phẩm của bạn là đồ thủ công, Etsy là lựa chọn không thể bỏ qua.',
      },
      {
        question: 'Làm thế nào để tối ưu hóa tiêu đề sản phẩm?',
        answer:
          'Một công thức hiệu quả là: [Thương hiệu] + [Tên sản phẩm chính] + [2-3 Từ khóa mô tả quan trọng] + [Lợi ích chính hoặc đối tượng sử dụng]. Ví dụ: "VietCrafts Giỏ Mây Tre Đan Thủ Công, Túi Xách Đi Biển Mùa Hè cho Nữ". Hãy sử dụng các công cụ nghiên cứu từ khóa để tìm ra các thuật ngữ mà khách hàng thực sự tìm kiếm.',
      },
      {
        question: 'Tại sao hình ảnh sản phẩm lại quan trọng đến vậy?',
        answer:
          'Vì khách hàng không thể chạm vào sản phẩm của bạn. Hình ảnh là yếu tố quan trọng nhất để truyền tải chất lượng, chi tiết và công dụng của sản phẩm. Hãy đầu tư vào việc chụp ít nhất 5-7 ảnh chất lượng cao, bao gồm ảnh trên nền trắng, ảnh chi tiết, ảnh lifestyle (sản phẩm trong bối cảnh sử dụng) và ảnh so sánh kích thước.',
      },
      {
        question: 'Làm thế nào để xử lý một đánh giá tiêu cực (1-2 sao)?',
        answer:
          'Đừng hoảng sợ và đừng bao giờ tranh cãi với khách hàng. Hãy trả lời một cách công khai, chuyên nghiệp và đồng cảm. Cảm ơn họ đã phản hồi, xin lỗi về trải nghiệm không tốt và đề nghị một giải pháp (ví dụ: hoàn tiền, gửi sản phẩm thay thế). Một phản hồi tốt có thể biến một khách hàng không hài lòng thành một người ủng hộ thương hiệu.',
      },
      {
        question: 'Sự khác biệt giữa B2B và B2C trong TMĐT xuyên biên giới là gì?',
        answer: 'B2C (Business-to-Consumer) là bán hàng trực tiếp cho người tiêu dùng cá nhân, thường với số lượng nhỏ. B2B (Business-to-Business) là bán hàng cho các doanh nghiệp khác, thường với số lượng lớn. Alibaba là nền tảng B2B hàng đầu, trong khi Amazon và Etsy chủ yếu là B2C.',
      },
      {
        question: 'Product-Market Fit là gì và tại sao nó quan trọng?',
        answer: 'Product-Market Fit là điểm mà sản phẩm của bạn đáp ứng được nhu cầu mạnh mẽ của một thị trường cụ thể. Việc đạt được Product-Market Fit là cực kỳ quan trọng trước khi mở rộng quy mô, vì nó đảm bảo rằng có một lượng khách hàng thực sự muốn mua sản phẩm của bạn.',
      },
      {
        question: 'Tôi có cần phải biết tiếng Anh giỏi để kinh doanh xuyên biên giới không?',
        answer: 'Biết tiếng Anh là một lợi thế lớn, nhưng không phải là điều kiện bắt buộc. Bạn có thể sử dụng các công cụ dịch thuật và thuê các freelancer để hỗ trợ viết mô tả sản phẩm và dịch vụ khách hàng. Quan trọng hơn là hiểu biết về thị trường và sản phẩm.',
      },
      {
        question: 'Chi phí ban đầu để bắt đầu kinh doanh trên Amazon là bao nhiêu?',
        answer: 'Chi phí có thể dao động rất nhiều. Các khoản chính bao gồm: phí tài khoản người bán chuyên nghiệp của Amazon (~$39.99/tháng), chi phí sản xuất hoặc nhập hàng, chi phí vận chuyển hàng đến kho Amazon (FBA), chi phí marketing ban đầu, và chi phí cho các công cụ nghiên cứu. Một ngân sách khởi đầu an toàn có thể từ vài nghìn đô la.',
      },
      {
        question: 'Làm thế nào để nghiên cứu đối thủ cạnh tranh một cách hiệu quả?',
        answer: 'Hãy tìm những người bán hàng đầu trong ngách của bạn trên các sàn TMĐT. Phân tích sản phẩm, giá cả, hình ảnh, mô tả và đặc biệt là các đánh giá của khách hàng (cả tích cực và tiêu cực) của họ. Điều này sẽ cho bạn biết họ đang làm tốt điều gì và khách hàng đang mong muốn điều gì mà họ chưa đáp ứng được.',
      },
      {
        question: 'Mô hình D2C (Direct-to-Consumer) có phù hợp cho người mới bắt đầu không?',
        answer: 'D2C (bán hàng qua website riêng) mang lại sự kiểm soát tối đa nhưng cũng đòi hỏi bạn phải tự mình thu hút lưu lượng truy cập, điều này rất khó khăn và tốn kém khi mới bắt đầu. Một chiến lược phổ biến là bắt đầu trên các sàn TMĐT lớn như Amazon để tận dụng lượng khách hàng có sẵn, sau đó xây dựng website D2C song song để dần dần xây dựng thương hiệu riêng.',
      },
    ],
  },
  {
    id: 'international-platforms',
    title: 'Nền tảng Thương mại Quốc tế',
    description: 'Làm chủ các platform lớn để bán hàng ra thị trường toàn cầu',
    duration: '120 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=ihSDvXtvpKs',
    mainContent: {
      introduction:
        'Các sàn thương mại điện tử quốc tế như Amazon, Alibaba, eBay là những con đường cao tốc đưa sản phẩm của bạn đến tay người tiêu dùng toàn cầu. Tuy nhiên, mỗi sàn có luật chơi riêng. Bài học này sẽ là tấm bản đồ chi tiết giúp bạn điều hướng, thiết lập và tối ưu hóa gian hàng của mình trên các nền tảng phức tạp này.',
      keyConcepts: [
        {
          title: 'Lựa chọn nền tảng phù hợp (Platform Selection)',
          description:
            'Không phải nền tảng nào cũng phù hợp với sản phẩm của bạn. Học cách phân tích ưu, nhược điểm của từng sàn: Amazon mạnh về B2C ở Bắc Mỹ và Châu Âu, Alibaba là vua B2B toàn cầu, Etsy là thiên đường cho đồ thủ công, và eBay phù hợp với các sản phẩm độc lạ.',
          examples: [
            'Sản phẩm handmade nên ưu tiên Etsy.',
            'Muốn bán số lượng lớn cho doanh nghiệp khác, hãy chọn Alibaba.',
            'Muốn tiếp cận lượng khách hàng tiêu dùng lớn nhất, hãy nghĩ đến Amazon.',
          ],
        },
        {
          title: 'Tối ưu hóa danh sách sản phẩm (Listing Optimization)',
          description:
            'Đây là nghệ thuật và khoa học để sản phẩm của bạn nổi bật giữa hàng triệu đối thủ. Nắm vững kỹ thuật viết tiêu đề chứa từ khóa, chụp ảnh sản phẩm chuyên nghiệp, viết mô tả thuyết phục và sử dụng các từ khóa backend.',
          examples: [
            'Sử dụng công cụ như Helium 10 để nghiên cứu từ khóa trên Amazon.',
            'Chụp ảnh sản phẩm với nền trắng và ảnh lifestyle trong bối cảnh sử dụng thực tế.',
          ],
        },
        {
          title: 'Quản lý đánh giá và xếp hạng (Review and Rating Management)',
          description:
            'Đánh giá của khách hàng là vàng trong thế giới e-commerce. Xây dựng chiến lược để khuyến khích khách hàng để lại đánh giá tích cực và xử lý chuyên nghiệp các phản hồi tiêu cực để xây dựng lòng tin và cải thiện thứ hạng sản phẩm.',
          examples: [
            'Gửi email cảm ơn và nhẹ nhàng nhờ khách hàng đánh giá sau khi họ nhận được hàng.',
            'Phản hồi công khai và lịch sự trước các đánh giá 1-2 sao, đề nghị giải pháp cho khách hàng.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Xây dựng gian hàng "Flagship"',
          description:
            'Tạo một gian hàng chính thức, chuyên nghiệp trên một nền tảng lớn để xây dựng uy tín và thương hiệu quốc tế.',
        },
        {
          area: 'Chiến lược đa kênh (Multi-platform Strategy)',
          description:
            'Phân phối sản phẩm trên nhiều nền tảng khác nhau để đa dạng hóa nguồn doanh thu và giảm thiểu rủi ro.',
        },
        {
          area: 'Nghiên cứu đối thủ cạnh tranh',
          description:
            'Phân tích gian hàng, sản phẩm, giá cả và chiến lược của đối thủ ngay trên các nền tảng để học hỏi và tìm ra lợi thế cạnh tranh.',
        },
      ],
      conclusion:
        'Việc làm chủ các nền tảng quốc tế đòi hỏi sự kiên trì và khả năng thích ứng liên tục. Bằng cách đầu tư thời gian để học luật chơi và tối ưu hóa từng chi tiết nhỏ, bạn sẽ xây dựng được một cỗ máy bán hàng tự động, hoạt động 24/7 và mang về doanh thu từ khắp nơi trên thế giới.',
    },
    relatedGames: [],
    objectives: [
      'Nắm vững cách hoạt động của các platform quốc tế',
      'Thiết lập và tối ưu hóa store trên nhiều nền tảng',
      'Hiểu về fee structure và chính sách của từng platform',
      'Xây dựng chiến lược multi-platform',
    ],
    prerequisites: ['Hoàn thành bài học Cơ bản Thương mại Xuyên biên giới', 'Có kinh nghiệm bán hàng online cơ bản'],
    exercises: [
      {
        title: 'Thiết lập Store Đa nền tảng',
        description: 'Tạo và tối ưu hóa store trên 3 platform khác nhau',
        difficulty: 'Trung bình',
        procedure: [
          'Đăng ký seller account trên Amazon, eBay, Etsy',
          'Thiết lập profile và store information',
          'Upload sản phẩm với mô tả và hình ảnh tối ưu',
          'Cấu hình shipping và payment methods',
          'Thiết lập customer service và return policy',
        ],
        expectedResults: 'Store hoạt động trên 3 platform với sản phẩm ready-to-sell',
      },
    ],
    realWorldApplications: [
      'Bán hàng đa kênh quốc tế',
      'Tối ưu hóa revenue từ nhiều nguồn',
      'Giảm thiểu rủi ro phụ thuộc một platform',
      'Tiếp cận đa dạng customer segments',
    ],
    vietnamContext: {
      title: 'Bối cảnh Việt Nam',
      content: [
        'Amazon Global Selling và Alibaba.com có đội ngũ hỗ trợ riêng tại Việt Nam, tích cực tổ chức các hội thảo và chương trình đào tạo cho người bán hàng.',
        'Các "E-commerce Enablers" (công ty cung cấp dịch vụ hỗ trợ TMĐT) như OnPoint, Society Pass đang phát triển mạnh, giúp các doanh nghiệp Việt Nam quản lý gian hàng trên nhiều nền tảng quốc tế.',
        'Thách thức lớn nhất cho người bán Việt Nam là cạnh tranh về giá với người bán từ Trung Quốc và xây dựng thương hiệu đủ mạnh để khách hàng tin tưởng.',
        'Bán hàng trên các nền tảng khu vực như Shopee, Lazada sang các nước Đông Nam Á (Malaysia, Singapore, Thái Lan) là một bước đệm tốt trước khi tiến ra các thị trường lớn hơn như Mỹ, EU.',
      ],
    },
    careerConnect: {
      name: 'Anh Lê Minh Đức',
      title: 'Amazon FBA Seller & Trainer',
      company: 'FBA Masters (hư cấu)',
      imageUrl: 'https://i.pravatar.cc/150?u=le-minh-duc',
      quote:
        'Nhiều người nghĩ chỉ cần đăng sản phẩm lên Amazon là có thể bán được hàng. Thực tế, đó là một cuộc chiến thực sự về từ khóa, hình ảnh, và đánh giá. Công việc của tôi là giúp các doanh nghiệp Việt Nam hiểu luật chơi và sử dụng các công cụ một cách thông minh để chiến thắng trong cuộc chiến đó.',
    },
    quizzes: [
      {
        question: 'Nền tảng nào được xem là phù hợp nhất cho các sản phẩm thủ công mỹ nghệ (handmade)?',
        options: ['Alibaba', 'Amazon', 'Etsy', 'eBay'],
        correctAnswerIndex: 2,
        explanation:
          'Etsy là một thị trường ngách toàn cầu chuyên dành cho các sản phẩm handmade, vintage, và đồ thủ công độc đáo, nơi người mua đánh giá cao tính độc bản và câu chuyện đằng sau sản phẩm.',
      },
      {
        question: 'Tại sao việc quản lý đánh giá (reviews) lại cực kỳ quan trọng trên các sàn TMĐT quốc tế?',
        options: [
          'Vì nó không ảnh hưởng đến doanh số.',
          'Vì nó là yếu tố then chốt để xây dựng lòng tin và cải thiện thứ hạng tìm kiếm của sản phẩm.',
          'Vì người bán có thể xóa các đánh giá xấu.',
          'Vì chỉ cần có nhiều đánh giá là đủ, không quan trọng tốt hay xấu.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Đối với khách hàng quốc tế khi mua một sản phẩm từ Việt Nam, đánh giá từ những người mua trước là bằng chứng xã hội quan trọng nhất để họ ra quyết định. Các thuật toán của sàn cũng ưu tiên hiển thị các sản phẩm có đánh giá tốt.',
      },
    ],
    faqs: [
      {
        question: 'Tôi nên bắt đầu với nền tảng nào trước?',
        answer:
          'Nếu bạn mới bắt đầu, hãy tập trung làm tốt trên MỘT nền tảng trước khi mở rộng. Amazon thường là lựa chọn tốt nhất cho thị trường B2C ở Mỹ/EU vì lượng truy cập khổng lồ và hệ thống FBA mạnh mẽ. Nếu sản phẩm của bạn là đồ thủ công, Etsy là lựa chọn không thể bỏ qua.',
      },
      {
        question: 'Làm thế nào để tối ưu hóa tiêu đề sản phẩm?',
        answer:
          'Một công thức hiệu quả là: [Thương hiệu] + [Tên sản phẩm chính] + [2-3 Từ khóa mô tả quan trọng] + [Lợi ích chính hoặc đối tượng sử dụng]. Ví dụ: "VietCrafts Giỏ Mây Tre Đan Thủ Công, Túi Xách Đi Biển Mùa Hè cho Nữ". Hãy sử dụng các công cụ nghiên cứu từ khóa để tìm ra các thuật ngữ mà khách hàng thực sự tìm kiếm.',
      },
      {
        question: 'Tại sao hình ảnh sản phẩm lại quan trọng đến vậy?',
        answer:
          'Vì khách hàng không thể chạm vào sản phẩm của bạn. Hình ảnh là yếu tố quan trọng nhất để truyền tải chất lượng, chi tiết và công dụng của sản phẩm. Hãy đầu tư vào việc chụp ít nhất 5-7 ảnh chất lượng cao, bao gồm ảnh trên nền trắng, ảnh chi tiết, ảnh lifestyle (sản phẩm trong bối cảnh sử dụng) và ảnh so sánh kích thước.',
      },
      {
        question: 'Làm thế nào để xử lý một đánh giá tiêu cực (1-2 sao)?',
        answer:
          'Đừng hoảng sợ và đừng bao giờ tranh cãi với khách hàng. Hãy trả lời một cách công khai, chuyên nghiệp và đồng cảm. Cảm ơn họ đã phản hồi, xin lỗi về trải nghiệm không tốt và đề nghị một giải pháp (ví dụ: hoàn tiền, gửi sản phẩm thay thế). Một phản hồi tốt có thể biến một khách hàng không hài lòng thành một người ủng hộ thương hiệu.',
      },
      {
        question: 'A+ Content (hoặc Enhanced Brand Content) trên Amazon là gì?',
        answer: 'Đây là một tính năng cho phép các chủ sở hữu thương hiệu đã đăng ký Brand Registry có thể thêm hình ảnh, văn bản và các module thiết kế phong phú vào phần mô tả sản phẩm. A+ Content giúp trang sản phẩm của bạn trông chuyên nghiệp hơn, kể câu chuyện thương hiệu và có thể tăng tỷ lệ chuyển đổi.',
      },
      {
        question: 'Từ khóa backend (backend keywords) là gì?',
        answer: 'Đây là những từ khóa bạn có thể thêm vào phần cài đặt sản phẩm trên Amazon mà khách hàng không nhìn thấy. Đây là nơi để bạn thêm các từ khóa đồng nghĩa, các lỗi chính tả phổ biến, hoặc các thuật ngữ liên quan mà bạn không muốn đưa vào tiêu đề hoặc mô tả chính.',
      },
      {
        question: 'Làm thế nào để có được huy hiệu "Bestseller" trên Amazon?',
        answer: 'Huy hiệu "Bestseller" được trao cho sản phẩm có doanh số bán hàng cao nhất trong một danh mục hoặc danh mục con cụ thể. Nó được cập nhật hàng giờ. Để đạt được nó, bạn cần có một sản phẩm tốt, được tối ưu hóa tốt và thường cần một chiến lược ra mắt sản phẩm mạnh mẽ để tạo ra doanh số đột biến trong thời gian ngắn.',
      },
      {
        question: 'Sự khác biệt giữa bán hàng trên Amazon và eBay là gì?',
        answer: 'Amazon tập trung vào các sản phẩm mới và trải nghiệm mua sắm nhanh chóng (đặc biệt với FBA). eBay khởi đầu là một trang đấu giá và vẫn còn mạnh về các mặt hàng đã qua sử dụng, đồ sưu tầm, và các sản phẩm độc lạ. Cấu trúc phí và mức độ cạnh tranh trên hai nền tảng này cũng khác nhau.',
      },
      {
        question: 'Tôi có nên chạy quảng cáo trả phí (PPC) trên các sàn TMĐT không?',
        answer: 'Có, quảng cáo PPC (Pay-Per-Click) là một phần gần như không thể thiếu để thành công trên các sàn cạnh tranh như Amazon. Nó giúp sản phẩm của bạn được hiển thị ở các vị trí hàng đầu ngay cả khi bạn là người bán mới, giúp bạn có được những đơn hàng và đánh giá đầu tiên để xây dựng đà tăng trưởng.',
      },
      {
        question: 'Làm thế nào để bảo vệ thương hiệu của tôi trên Amazon?',
        answer: 'Cách tốt nhất là đăng ký chương trình Amazon Brand Registry. Điều này yêu cầu bạn phải có một nhãn hiệu đã được đăng ký chính thức. Brand Registry cung cấp cho bạn các công cụ mạnh mẽ để loại bỏ những người bán hàng giả, kiểm soát trang sản phẩm của bạn và truy cập các tính năng marketing nâng cao như A+ Content.',
      },
    ],
  },
  {
    id: 'cross-border-logistics',
    title: 'Logistics và Vận chuyển Quốc tế',
    description: 'Quản lý hiệu quả chuỗi cung ứng và vận chuyển xuyên biên giới',
    duration: '100 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=vHldw8oh9NI',
    mainContent: {
      introduction:
        'Làm thế nào để đưa một món hàng từ Việt Nam đến tay khách hàng ở Mỹ trong thời gian ngắn nhất với chi phí hợp lý nhất? Logistics chính là câu trả lời. Đây là xương sống của thương mại điện tử xuyên biêniers giới. Bài học này sẽ giúp bạn giải mã mê cung của vận chuyển quốc tế, quản lý tồn kho và thủ tục hải quan.',
      keyConcepts: [
        {
          title: 'Các phương thức vận chuyển (Shipping Methods)',
          description:
            'Hiểu rõ ưu nhược điểm của các phương thức khác nhau: vận chuyển đường hàng không (Air Freight) nhanh nhưng đắt, vận chuyển đường biển (Sea Freight) rẻ nhưng chậm, và dịch vụ chuyển phát nhanh (Express Couriers) như DHL, FedEx là lựa chọn cân bằng.',
          examples: [
            'Sử dụng Express Couriers cho các đơn hàng nhỏ, giá trị cao.',
            'Sử dụng Sea Freight để vận chuyển số lượng lớn hàng hóa đến kho ở nước ngoài.',
          ],
        },
        {
          title: 'Mô hình thực hiện đơn hàng (Fulfillment Models)',
          description:
            'Lựa chọn giữa việc tự đóng gói và gửi hàng từ Việt Nam (Self-fulfillment), hoặc sử dụng dịch vụ của bên thứ ba (3PL - Third-party Logistics), hoặc sử dụng dịch vụ hoàn thiện đơn hàng của chính sàn TMĐT như FBA (Fulfillment by Amazon).',
          examples: [
            'Mới bắt đầu có thể tự gửi hàng để tiết kiệm chi phí.',
            'Khi số lượng đơn hàng tăng, sử dụng FBA giúp bạn giao hàng nhanh chóng và đủ điều kiện Prime, tăng khả năng cạnh tranh.',
          ],
        },
        {
          title: 'Thủ tục hải quan và thuế nhập khẩu (Customs & Duties)',
          description:
            'Đây là rào cản lớn nhất nhưng có thể vượt qua. Nắm vững các khái niệm về mã HS (HS Code) của sản phẩm, thuế nhập khẩu (Import Duty), và các giấy tờ cần thiết để hàng hóa được thông quan một cách suôn sẻ.',
          examples: [
            'Sản phẩm dệt may và nông sản thường có quy định nhập khẩu chặt chẽ tại Mỹ và EU.',
            'Sử dụng một công ty giao nhận vận tải (freight forwarder) có kinh nghiệm để xử lý các thủ tục hải quan phức tạp.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Tối ưu hóa chi phí',
          description:
            'Lựa chọn đúng phương thức vận chuyển và mô hình fulfillment có thể tiết kiệm 20-40% chi phí logistics.',
        },
        {
          area: 'Nâng cao trải nghiệm khách hàng',
          description:
            'Giao hàng nhanh chóng, đúng hẹn và cung cấp tracking đầy đủ là yếu tố then chốt để có được đánh giá 5 sao.',
        },
        {
          area: 'Mở rộng thị trường',
          description:
            'Sử dụng các kho hàng ở nước ngoài cho phép bạn tiếp cận các thị trường xa xôi với tốc độ giao hàng nội địa.',
        },
      ],
      conclusion:
        'Logistics không còn là một "hộp đen" đáng sợ. Bằng cách hiểu rõ các lựa chọn và xây dựng một quy trình hiệu quả, bạn có thể biến logistics thành lợi thế cạnh tranh, mang lại trải nghiệm vượt trội cho khách hàng và tối ưu hóa lợi nhuận cho doanh nghiệp của mình.',
    },
    relatedGames: [],
    objectives: [
      'Hiểu về các phương thức vận chuyển quốc tế',
      'Tối ưu hóa chi phí và thời gian shipping',
      'Quản lý inventory cho multi-market',
      'Xử lý vấn đề customs và tax',
    ],
    prerequisites: ['Kiến thức về logistics cơ bản', 'Hiểu về các platform thương mại quốc tế'],
    exercises: [
      {
        title: 'Xây dựng Hệ thống Logistics',
        description: 'Thiết kế chuỗi cung ứng tối ưu cho cross-border business',
        difficulty: 'Trung bình',
        procedure: [
          'Phân tích các shipping carriers và so sánh cost',
          'Thiết lập warehouse/fulfillment strategy',
          'Cấu hình inventory management system',
          'Lập kế hoạch customs clearance procedure',
          'Thiết lập tracking và customer notification system',
        ],
        expectedResults: 'Blueprint hoàn chỉnh cho logistics operation',
      },
    ],
    realWorldApplications: [
      'Giảm chi phí vận chuyển 20-30%',
      'Cải thiện customer satisfaction',
      'Tăng tốc độ delivery',
      'Mở rộng thị trường địa lý',
    ],
    tools: ['ShipStation', 'Easyship', 'Flexport', 'DHL Express', 'FedEx'],
    vietnamContext: {
      title: 'Bối cảnh Việt Nam',
      content: [
        'Hệ thống cảng biển tại TP.HCM và Hải Phòng là cửa ngõ logistics quan trọng cho hàng hóa xuất khẩu.',
        'Các công ty logistics nội địa như Giao Hàng Nhanh, Viettel Post đang mở rộng dịch vụ vận chuyển quốc tế, tạo ra sự cạnh tranh với các hãng lớn như DHL, FedEx.',
        'Các công ty 3PL (Third-party Logistics) tại Việt Nam như Boxme, Fado đang cung cấp các giải pháp fulfillment toàn diện, giúp người bán lưu kho, đóng gói và vận chuyển hàng hóa từ Việt Nam đi khắp thế giới.',
        'Thủ tục thông quan tại Việt Nam vẫn còn là một thách thức, đòi hỏi người bán phải chuẩn bị kỹ lưỡng giấy tờ và làm việc với các đối tác logistics uy tín.',
      ],
    },
    careerConnect: {
      name: 'Ông Nguyễn Hòa Bình',
      title: 'Chủ tịch, NextTech Group',
      company: 'NextTech Group (sở hữu Boxme)',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-hoa-binh',
      quote:
        'Logistics là mạch máu của thương mại điện tử. Chúng tôi nhận thấy các doanh nghiệp Việt Nam rất giỏi sản xuất và marketing, nhưng lại gặp khó ở khâu hậu cần khi ra biển lớn. Sứ mệnh của chúng tôi là cung cấp một giải pháp logistics "chia sẻ", giúp bất kỳ ai cũng có thể xuất khẩu hàng hóa một cách dễ dàng như bán hàng trong nước.',
    },
    quizzes: [
      {
        question: 'FBA (Fulfillment by Amazon) là mô hình gì?',
        options: [
          'Người bán tự đóng gói và gửi hàng từ Việt Nam.',
          'Người bán lưu trữ sản phẩm của mình trong các trung tâm hoàn thiện đơn hàng của Amazon, và Amazon sẽ thay mặt người bán xử lý việc giao hàng.',
          'Một dịch vụ vận chuyển đường biển.',
          'Một phương thức thanh toán.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'FBA là một dịch vụ cực kỳ mạnh mẽ, giúp sản phẩm của người bán đủ điều kiện giao hàng nhanh "Prime", tăng đáng kể khả năng cạnh tranh và sự tin tưởng của khách hàng trên Amazon.',
      },
      {
        question: 'Khi nào nên sử dụng vận chuyển đường biển (Sea Freight) thay vì đường hàng không (Air Freight)?',
        options: [
          'Khi cần giao hàng gấp cho khách.',
          'Khi vận chuyển các mặt hàng nhỏ, giá trị cao.',
          'Khi vận chuyển số lượng lớn hàng hóa, không yêu cầu giao hàng gấp và muốn tối ưu chi phí.',
          'Khi vận chuyển hàng hóa trong nội địa.',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Vận chuyển đường biển có chi phí rẻ hơn nhiều so với đường hàng không nhưng thời gian vận chuyển lâu hơn đáng kể. Đây là lựa chọn tối ưu để vận chuyển hàng tồn kho số lượng lớn đến các kho ở nước ngoài.',
      },
    ],
    faqs: [
      {
        question: 'FBA (Fulfillment by Amazon) có đắt không?',
        answer:
          'FBA có các loại phí như phí lưu kho (hàng tháng) và phí hoàn thiện đơn hàng (cho mỗi đơn hàng được bán). Mặc dù có chi phí, nhưng lợi ích mà nó mang lại (đủ điều kiện Prime, giao hàng nhanh, dịch vụ khách hàng của Amazon) thường vượt trội so với chi phí, đặc biệt khi bạn bán hàng với số lượng lớn.',
      },
      {
        question: 'Mã HS (HS Code) là gì và tại sao nó quan trọng?',
        answer:
          'Mã HS (Harmonized System Code) là một hệ thống phân loại hàng hóa được tiêu chuẩn hóa quốc tế. Việc xác định đúng mã HS cho sản phẩm của bạn là cực kỳ quan trọng để tính toán chính xác thuế nhập khẩu và đảm bảo hàng hóa được thông quan một cách suôn sẻ.',
      },
      {
        question: 'Tôi có nên tự gửi hàng từ Việt Nam (self-fulfillment) không?',
        answer:
          'Tự gửi hàng là một lựa chọn tốt khi bạn mới bắt đầu, có số lượng đơn hàng ít, hoặc bán các sản phẩm có giá trị cao, nhỏ gọn. Tuy nhiên, khi số lượng đơn hàng tăng lên, việc này sẽ tốn nhiều thời gian và chi phí vận chuyển cho mỗi đơn hàng có thể cao hơn so với việc sử dụng FBA hoặc 3PL.',
      },
      {
        question: '3PL (Third-Party Logistics) là gì?',
        answer:
          '3PL là một công ty dịch vụ mà bạn có thể thuê để thực hiện các hoạt động logistics thay cho bạn, bao gồm lưu kho, quản lý tồn kho, đóng gói và vận chuyển. Sử dụng 3PL là một giải pháp linh hoạt, cho phép bạn tập trung vào việc kinh doanh và marketing.',
      },
      {
        question: 'Thuế nhập khẩu (Import Duty) và thuế VAT/Sales Tax có giống nhau không?',
        answer: 'Không. Thuế nhập khẩu là thuế do hải quan thu khi hàng hóa vào một quốc gia. Thuế VAT (ở châu Âu) hoặc Sales Tax (ở Mỹ) là thuế tiêu dùng được tính trên giá bán cuối cùng cho khách hàng. Bạn có thể phải chịu cả hai loại thuế này.',
      },
      {
        question: 'Làm thế nào để tính toán chi phí vận chuyển cho khách hàng?',
        answer: 'Bạn có thể cung cấp các mức phí vận chuyển khác nhau: miễn phí vận chuyển (tích hợp chi phí vào giá sản phẩm), phí vận chuyển cố định (flat rate), hoặc phí vận chuyển được tính toán theo thời gian thực dựa trên trọng lượng, kích thước và địa chỉ của khách hàng. Các sàn TMĐT và nền tảng website thường có công cụ để giúp bạn thiết lập việc này.',
      },
      {
        question: 'Incoterms là gì?',
        answer: 'Incoterms là một bộ các quy tắc thương mại quốc tế quy định trách nhiệm của người bán và người mua trong việc giao nhận hàng hóa. Các điều khoản phổ biến bao gồm EXW (Ex Works), FOB (Free On Board), và DDP (Delivered Duty Paid). Hiểu rõ Incoterms rất quan trọng khi làm việc với các nhà cung cấp và công ty vận chuyển.',
      },
      {
        question: 'Làm thế nào để xử lý việc trả hàng (returns) từ khách hàng quốc tế?',
        answer: 'Việc trả hàng quốc tế rất tốn kém. Một số giải pháp bao gồm: thuê một địa chỉ trả hàng ở nước ngoài (thông qua 3PL), chỉ chấp nhận trả hàng cho các sản phẩm giá trị cao, hoặc trong một số trường hợp, hoàn tiền cho khách hàng mà không yêu cầu họ gửi trả lại sản phẩm (đối với các mặt hàng giá trị thấp).',
      },
      {
        question: 'Freight Forwarder (công ty giao nhận vận tải) có vai trò gì?',
        answer: 'Freight Forwarder là một đối tác cực kỳ quan trọng. Họ không sở hữu tàu hay máy bay, nhưng họ sắp xếp và quản lý toàn bộ quá trình vận chuyển hàng hóa của bạn từ Việt Nam đến kho ở nước ngoài, bao gồm việc xử lý thủ tục hải quan, giấy tờ và lựa chọn hãng vận chuyển tốt nhất.',
      },
      {
        question: 'Làm thế nào để giảm thời gian vận chuyển quốc tế?',
        answer: 'Sử dụng dịch vụ vận chuyển hàng không thay vì đường biển là cách nhanh nhất nhưng cũng đắt nhất. Một chiến lược cân bằng là sử dụng mô hình FBA hoặc 3PL: bạn vận chuyển số lượng lớn hàng hóa bằng đường biển đến kho ở nước ngoài, sau đó các đơn hàng lẻ sẽ được giao nhanh chóng từ kho nội địa đó đến tay khách hàng.',
      },
    ],
  },
  {
    id: 'payment-solutions',
    title: 'Giải pháp Thanh toán Xuyên biên giới',
    description: 'Thiết lập hệ thống thanh toán an toàn và hiệu quả cho thị trường quốc tế',
    duration: '110 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=t3Ujsr56sgk',
    mainContent: {
      introduction:
        'Làm thế nào để khách hàng ở Đức có thể trả bằng Euro, khách ở Nhật trả bằng Yên, và bạn nhận về tiền Việt một cách an toàn và nhanh chóng? Chào mừng bạn đến với thế giới phức tạp nhưng đầy tiềm năng của các giải pháp thanh toán xuyên biên giới. Bài học này sẽ hướng dẫn bạn cách xây dựng một hệ thống thanh toán toàn cầu liền mạch.',
      keyConcepts: [
        {
          title: 'Cổng thanh toán quốc tế (International Payment Gateways)',
          description:
            'Đây là các công ty trung gian giúp bạn xử lý thanh toán từ nhiều loại thẻ và ví điện tử khác nhau trên toàn thế giới. Tìm hiểu về các ông lớn như Stripe, PayPal, và các giải pháp mới nổi như Payoneer.',
          examples: [
            'Tích hợp Stripe vào website để chấp nhận thẻ tín dụng từ hơn 100 quốc gia.',
            'Sử dụng PayPal Checkout để cung cấp một lựa chọn thanh toán quen thuộc và đáng tin cậy cho khách hàng quốc tế.',
          ],
        },
        {
          title: 'Quản lý đa tiền tệ (Multi-currency Management)',
          description:
            'Cho phép khách hàng xem giá và thanh toán bằng đồng tiền của họ giúp tăng tỷ lệ chuyển đổi đáng kể. Học cách quản lý tỷ giá hối đoái, phí chuyển đổi và rút tiền về tài khoản ngân hàng Việt Nam một cách hiệu quả.',
          examples: [
            'Sử dụng tính năng đa tiền tệ của Shopify để tự động hiển thị giá theo vị trí của khách hàng.',
            'Mở tài khoản Payoneer hoặc Wise để nhận tiền từ nhiều loại tiền tệ với chi phí thấp.',
          ],
        },
        {
          title: 'An ninh và chống gian lận (Security & Fraud Prevention)',
          description:
            'Thanh toán quốc tế đi kèm với rủi ro gian lận cao hơn. Nắm vững các tiêu chuẩn an ninh như PCI-DSS và sử dụng các công cụ phát hiện gian lận được tích hợp sẵn trong các cổng thanh toán để bảo vệ doanh nghiệp của bạn.',
          examples: [
            'Kích hoạt tính năng 3D Secure (xác thực 2 yếu tố) cho các giao dịch thẻ.',
            'Sử dụng các công cụ của Stripe Radar để tự động chặn các giao dịch đáng ngờ.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Tăng tỷ lệ chuyển đổi',
          description:
            'Cung cấp các phương thức thanh toán địa phương quen thuộc có thể tăng tỷ lệ hoàn tất đơn hàng lên đến 30% ở một số thị trường.',
        },
        {
          area: 'Giảm tỷ lệ từ chối giao dịch',
          description:
            'Sử dụng các cổng thanh toán có mạng lưới ngân hàng toàn cầu giúp giảm tỷ lệ giao dịch bị từ chối một cách vô lý.',
        },
        {
          area: 'Xây dựng lòng tin',
          description:
            'Hiển thị logo của các cổng thanh toán uy tín như PayPal, Stripe giúp tăng cường sự tin tưởng của khách hàng đối với một website từ Việt Nam.',
        },
      ],
      conclusion:
        'Một hệ thống thanh toán trơn tru là bước cuối cùng nhưng vô cùng quan trọng để hoàn tất một giao dịch xuyên biên giới. Bằng cách cung cấp các lựa chọn thanh toán đa dạng, an toàn và quen thuộc, bạn đang gỡ bỏ rào cản cuối cùng giữa khách hàng và sản phẩm của mình.',
    },
    relatedGames: [
      {
        id: 'financial-freedom-quest-3d',
        name: 'Financial Freedom Quest 3D',
        description:
          'Learn financial literacy, investing, and wealth management by navigating challenges in a 3D world',
      },
    ],
    objectives: [
      'Hiểu về các phương thức thanh toán quốc tế',
      'Thiết lập payment gateway đa tiền tệ',
      'Quản lý currency exchange và fees',
      'Đảm bảo security và compliance',
    ],
    prerequisites: ['Kiến thức về payment processing', 'Hiểu biết về banking và finance cơ bản'],
    exercises: [
      {
        title: 'Thiết lập Payment System',
        description: 'Cấu hình hệ thống thanh toán đa tiền tệ và đa phương thức',
        difficulty: 'Trung bình',
        procedure: [
          'So sánh và chọn payment service providers',
          'Thiết lập multi-currency checkout',
          'Cấu hình fraud detection và security measures',
          'Tích hợp với accounting và tax systems',
          'Test payment flows cho different markets',
        ],
        expectedResults: 'Hệ thống thanh toán hoạt động với 5+ currencies',
      },
    ],
    realWorldApplications: [
      'Tăng conversion rate 15-25%',
      'Giảm cart abandonment',
      'Cải thiện customer trust',
      'Mở rộng customer base quốc tế',
    ],
    tools: ['PayPal', 'Stripe', 'Wise', 'Payoneer', 'Alipay Global'],
    vietnamContext: {
      title: 'Bối cảnh Việt Nam',
      content: [
        'Việc nhận tiền thanh toán từ nước ngoài về Việt Nam qua các kênh ngân hàng truyền thống thường phức tạp và tốn kém. Do đó, các giải pháp như Payoneer và Wise (trước đây là TransferWise) trở nên cực kỳ phổ biến.',
        'PayPal là cổng thanh toán quốc tế được biết đến nhiều nhất tại Việt Nam, nhưng phí khá cao và chính sách đôi khi khắt khe với người bán mới.',
        'Stripe, một trong những cổng thanh toán hàng đầu thế giới, vẫn chưa hỗ trợ chính thức cho các doanh nghiệp đăng ký tại Việt Nam, tạo ra một rào cản lớn. Nhiều doanh nghiệp phải đăng ký công ty ở nước ngoài (ví dụ: Singapore, Mỹ) để sử dụng Stripe.',
        'Sự phát triển của blockchain và tiền điện tử đang mở ra các kênh thanh toán xuyên biên giới mới, nhưng vẫn còn nhiều rào cản pháp lý tại Việt Nam.',
      ],
    },
    careerConnect: {
      name: 'Chị Vương An Ngọc',
      title: 'Giám đốc Quốc gia',
      company: 'Payoneer Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=vuong-an-ngoc',
      quote:
        'Rào cản lớn nhất của các freelancer và doanh nghiệp xuất khẩu Việt Nam không phải là chất lượng sản phẩm, mà là làm sao để nhận tiền thanh toán một cách nhanh chóng, an toàn và chi phí thấp. Chúng tôi ở đây để giải quyết bài toán đó, giúp dòng tiền chảy về Việt Nam một cách thông suốt nhất.',
    },
    quizzes: [
      {
        question: 'Tại sao việc cho phép khách hàng thanh toán bằng đồng tiền của họ lại quan trọng?',
        options: [
          'Vì nó làm cho sản phẩm trông rẻ hơn.',
          'Vì nó giúp người bán thu được nhiều lợi nhuận hơn.',
          'Vì nó tạo ra trải nghiệm mua sắm quen thuộc, minh bạch về giá và tăng tỷ lệ chuyển đổi.',
          'Vì đó là yêu cầu bắt buộc của pháp luật.',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Khách hàng thường không thích phải tự tính toán tỷ giá và các chi phí ẩn. Việc nhìn thấy giá cuối cùng bằng đồng tiền của mình sẽ giúp họ tự tin hơn khi ra quyết định mua hàng.',
      },
      {
        question:
          'Đâu là một trong những thách thức lớn nhất đối với người bán hàng Việt Nam khi sử dụng các cổng thanh toán quốc tế?',
        options: [
          'Không có thách thức nào.',
          'Phí giao dịch quá thấp.',
          'Nhiều cổng thanh toán hàng đầu như Stripe chưa hỗ trợ trực tiếp cho doanh nghiệp đăng ký tại Việt Nam.',
          'Tất cả các cổng thanh toán đều giống hệt nhau.',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Việc Stripe chưa hỗ trợ trực tiếp tại Việt Nam là một trở ngại lớn, buộc nhiều doanh nghiệp phải tìm các giải pháp thay thế hoặc đăng ký kinh doanh ở nước ngoài, làm tăng chi phí và độ phức tạp.',
      },
    ],
    faqs: [
      {
        question: 'PayPal và Payoneer khác nhau như thế nào?',
        answer:
          'PayPal chủ yếu là một cổng thanh toán cho khách hàng lẻ (B2C), cho phép họ thanh toán an toàn trên các website. Payoneer mạnh hơn về mảng nhận thanh toán B2B, nhận tiền từ các sàn TMĐT (như Amazon), và cho phép các doanh nghiệp trả tiền cho nhà cung cấp hoặc đối tác trên toàn cầu.',
      },
      {
        question: 'Làm thế nào để giảm phí khi nhận tiền từ nước ngoài?',
        answer:
          'Hãy so sánh biểu phí của các dịch vụ khác nhau. Các dịch vụ như Payoneer hoặc Wise thường có tỷ giá hối đoái và phí chuyển tiền tốt hơn so với việc nhận tiền trực tiếp qua ngân hàng hoặc PayPal. Gom nhiều khoản thanh toán và rút tiền một lần cũng có thể giúp giảm phí.',
      },
      {
        question: 'PCI-DSS là gì và tại sao tôi cần quan tâm?',
        answer:
          'PCI-DSS (Payment Card Industry Data Security Standard) là một bộ tiêu chuẩn an ninh dành cho các tổ chức xử lý thẻ tín dụng. Nếu bạn tự xây dựng website và xử lý thanh toán, bạn phải tuân thủ PCI-DSS. Tuy nhiên, nếu bạn sử dụng các cổng thanh toán lớn như Stripe hoặc PayPal, họ đã tuân thủ sẵn cho bạn, giúp giảm bớt gánh nặng này.',
      },
      {
        question: 'Tôi có nên chấp nhận thanh toán bằng tiền điện tử (crypto) không?',
        answer:
          'Chấp nhận crypto có thể thu hút một nhóm khách hàng mới và có phí giao dịch thấp. Tuy nhiên, nó cũng đi kèm với rủi ro biến động giá rất cao và các vấn đề pháp lý chưa rõ ràng ở nhiều quốc gia, bao gồm cả Việt Nam. Hiện tại, đây vẫn là một lựa chọn có tính thử nghiệm cao.',
      },
      {
        question: 'Chargeback (đòi lại tiền) là gì và làm thế nào để phòng tránh?',
        answer: 'Chargeback xảy ra khi một khách hàng yêu cầu công ty thẻ tín dụng của họ hoàn lại một giao dịch. Để phòng tránh, hãy cung cấp mô tả sản phẩm rõ ràng, giao hàng đúng hẹn, có bằng chứng giao hàng (tracking), và cung cấp dịch vụ khách hàng tốt để giải quyết vấn đề trước khi khách hàng phải yêu cầu chargeback.',
      },
      {
        question: 'Tại sao tài khoản PayPal của tôi lại dễ bị giới hạn hoặc khóa?',
        answer: 'PayPal có các thuật toán chống gian lận rất nghiêm ngặt. Các hoạt động bất thường như doanh thu tăng đột biến, tỷ lệ chargeback cao, hoặc bán các mặt hàng có rủi ro cao có thể kích hoạt cơ chế bảo vệ của họ. Hãy luôn cung cấp đầy đủ giấy tờ kinh doanh và thông tin theo dõi đơn hàng để xây dựng lòng tin với PayPal.',
      },
      {
        question: 'Wise (trước đây là TransferWise) hoạt động như thế nào?',
        answer: 'Wise là một dịch vụ chuyển tiền thông minh. Thay vì chuyển tiền trực tiếp qua biên giới, nó sử dụng một mạng lưới các tài khoản ngân hàng địa phương. Ví dụ, khi bạn chuyển tiền từ Mỹ về Việt Nam, tiền của bạn sẽ được chuyển vào tài khoản của Wise ở Mỹ, và sau đó tài khoản của Wise ở Việt Nam sẽ chuyển tiền cho người nhận. Điều này giúp giảm đáng kể phí và có tỷ giá hối đoái thực tế.',
      },
      {
        question: 'Làm thế nào để tích hợp nhiều cổng thanh toán trên website của tôi?',
        answer: 'Các nền tảng website TMĐT như Shopify hay WooCommerce thường cho phép bạn dễ dàng tích hợp nhiều cổng thanh toán khác nhau thông qua các ứng dụng hoặc plugin. Việc cung cấp nhiều lựa chọn (ví dụ: Stripe cho thẻ tín dụng, PayPal, Apple Pay) có thể giúp tăng tỷ lệ chuyển đổi.',
      },
      {
        question: 'Tỷ giá hối đoái mà tôi thấy trên Google có giống với tỷ giá tôi nhận được không?',
        answer: 'Thường là không. Tỷ giá bạn thấy trên Google là tỷ giá liên ngân hàng (mid-market rate). Các ngân hàng và dịch vụ thanh toán thường sẽ cộng thêm một khoản chênh lệch (spread) vào tỷ giá đó để kiếm lời. Các dịch vụ như Wise nổi tiếng vì sử dụng tỷ giá gần với tỷ giá thực tế nhất.',
      },
      {
        question: 'Tôi có cần phải có công ty ở nước ngoài để sử dụng Stripe không?',
        answer: 'Tính đến hiện tại, Stripe chưa hỗ trợ trực tiếp cho các doanh nghiệp đăng ký tại Việt Nam. Do đó, để sử dụng Stripe, nhiều doanh nghiệp Việt Nam phải sử dụng các dịch vụ như Stripe Atlas để thành lập một công ty tại Mỹ (thường là ở bang Delaware), đi kèm với việc mở tài khoản ngân hàng và mã số thuế tại Mỹ.',
      },
    ],
  },
  {
    id: 'cultural-localization',
    title: 'Localization và Marketing Văn hóa',
    description: 'Thích ứng sản phẩm và marketing với văn hóa địa phương các thị trường mục tiêu',
    duration: '95 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=DaVB0Rr9K8U',
    mainContent: {
      introduction:
        '"Think global, act local." Đây là câu thần chú của thương mại điện tử xuyên biên giới. Việc chỉ dịch website của bạn sang tiếng Anh là chưa đủ. Để thực sự chinh phục một thị trường, bạn cần phải "nói" ngôn ngữ văn hóa của họ. Bài học này sẽ dạy bạn nghệ thuật Localization - biến sản phẩm và thông điệp của bạn trở nên gần gũi và phù hợp với từng địa phương.',
      keyConcepts: [
        {
          title: 'Bản địa hóa không chỉ là dịch thuật (Localization vs. Translation)',
          description:
            'Dịch thuật chỉ là chuyển đổi từ ngữ. Bản địa hóa là quá trình thích ứng toàn bộ trải nghiệm, bao gồm hình ảnh, màu sắc, đơn vị đo lường, phương thức thanh toán, và thậm chí cả các ví dụ và câu chuyện thương hiệu.',
          examples: [
            'Thay đổi hình ảnh người mẫu từ châu Á sang châu Âu khi marketing tại Đức.',
            'Sử dụng đơn vị "inch" và "pound" thay vì "cm" và "kg" trên website bán cho thị trường Mỹ.',
            'Tránh sử dụng màu đỏ làm màu chủ đạo cho nút "mua" ở một số nền văn hóa.',
          ],
        },
        {
          title: "Các chiều văn hóa của Hofstede (Hofstede's Cultural Dimensions)",
          description:
            'Sử dụng mô hình này như một công cụ để hiểu sự khác biệt trong tâm lý người tiêu dùng. Ví dụ, các nền văn hóa theo chủ nghĩa cá nhân (như Mỹ) sẽ ưa thích các thông điệp marketing nhấn mạnh sự độc đáo và tự thể hiện, trong khi các nền văn hóa theo chủ nghĩa tập thể (như Nhật Bản) sẽ phản ứng tốt hơn với các thông điệp về sự hòa hợp và lợi ích cho cộng đồng.',
          examples: [
            'Marketing một chiếc ba lô ở Mỹ: "Thể hiện cá tính của bạn." Marketing cùng chiếc ba lô đó ở Nhật: "Người bạn đồng hành đáng tin cậy cho mọi hành trình."',
          ],
        },
        {
          title: 'Marketing đa văn hóa (Cross-Cultural Marketing)',
          description:
            'Xây dựng các chiến dịch marketing có khả năng gây tiếng vang ở nhiều nền văn hóa khác nhau. Điều này đòi hỏi sự nhạy cảm, tránh các định kiến và khuôn mẫu, và đôi khi là tạo ra các chiến dịch riêng biệt cho từng thị trường lớn.',
          examples: [
            'Chiến dịch "Share a Coke" của Coca-Cola thành công toàn cầu vì nó chạm đến một giá trị chung: sự kết nối và chia sẻ.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Tối ưu hóa website',
          description:
            'Tạo các phiên bản website khác nhau cho các thị trường mục tiêu, với ngôn ngữ, hình ảnh và nội dung được bản địa hóa hoàn toàn.',
        },
        {
          area: 'Chiến dịch quảng cáo mạng xã hội',
          description:
            'Chạy các chiến dịch quảng cáo Facebook/Instagram với hình ảnh, video và caption được tùy chỉnh riêng cho từng quốc gia.',
        },
        {
          area: 'Dịch vụ khách hàng',
          description:
            'Cung cấp hỗ trợ khách hàng bằng ngôn ngữ mẹ đẻ của họ và hiểu rõ các sắc thái văn hóa trong giao tiếp.',
        },
      ],
      conclusion:
        'Localization là sự thể hiện sự tôn trọng sâu sắc nhất đối với khách hàng của bạn. Bằng cách đầu tư vào việc thấu hiểu và thích ứng với văn hóa địa phương, bạn không chỉ tăng doanh số bán hàng mà còn xây dựng được một thương hiệu toàn cầu được yêu mến và tin tưởng.',
    },
    relatedGames: [
      {
        id: 'global-ambassador-3d',
        name: 'Global Ambassador 3D',
        description:
          'Navigate cross-cultural communication scenarios, build diplomatic skills, and solve global challenges in 3D',
      },
    ],
    objectives: [
      'Hiểu tầm quan trọng của cultural adaptation',
      'Phát triển chiến lược localization hiệu quả',
      'Tạo content marketing phù hợp văn hóa',
      'Xây dựng brand positioning cho từng market',
    ],
    prerequisites: ['Kinh nghiệm marketing online', 'Hiểu biết về cultural differences', 'Kỹ năng content creation'],
    exercises: [
      {
        title: 'Campaign Localization Project',
        description: 'Tạo campaign marketing được localized cho 2 thị trường khác nhau',
        difficulty: 'Nâng cao',
        procedure: [
          'Nghiên cứu cultural insights của target markets',
          'Adapt product messaging và value proposition',
          'Tạo visual assets phù hợp với cultural preferences',
          'Phát triển content calendar và social media strategy',
          'A/B test messaging effectiveness',
        ],
        expectedResults: 'Hai campaign hoàn chỉnh với measurable KPIs',
      },
    ],
    realWorldApplications: [
      'Tăng brand acceptance trong thị trường mới',
      'Cải thiện engagement rates',
      'Giảm cultural misunderstandings',
      'Xây dựng long-term customer relationships',
    ],
    vietnamContext: {
      title: 'Bối cảnh Việt Nam',
      content: [
        'Một ví dụ điển hình về localization là cách các thương hiệu cà phê Việt Nam như Trung Nguyên Legend, King Coffee xây dựng câu chuyện thương hiệu và thiết kế bao bì khác nhau cho thị trường nội địa và quốc tế.',
        'Thách thức: Nhiều doanh nghiệp Việt Nam chỉ đơn thuần dịch nội dung website sang tiếng Anh mà không điều chỉnh hình ảnh, ví dụ, và các yếu tố văn hóa khác, làm giảm sự kết nối với khách hàng quốc tế.',
        'Cơ hội: Các sản phẩm mang đậm bản sắc văn hóa Việt Nam (áo dài, nón lá, gốm sứ Bát Tràng) có tiềm năng lớn nếu được marketing một cách tinh tế, tôn trọng và phù hợp với bối cảnh văn hóa của người mua.',
        'Khi marketing tại các nước châu Á khác, các doanh nghiệp Việt Nam cần chú ý đến các yếu tố như ngày lễ (Tết Nguyên Đán, Trung Thu), các biểu tượng may mắn, và các giá trị cộng đồng.',
      ],
    },
    careerConnect: {
      name: 'Bà Nguyễn Thị Mai',
      title: 'Giám đốc Marketing Toàn cầu',
      company: 'Vinamilk',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-thi-mai',
      quote:
        'Khi mang sữa Việt ra thế giới, chúng tôi không chỉ bán một sản phẩm dinh dưỡng. Chúng tôi phải kể một câu chuyện mà người tiêu dùng ở Trung Đông, ở châu Phi có thể hiểu và tin tưởng. Điều đó có nghĩa là phải bản địa hóa mọi thứ, từ bao bì sản phẩm đến thông điệp quảng cáo, để nó thực sự gần gũi với họ.',
    },
    quizzes: [
      {
        question: 'Đâu là sự khác biệt chính giữa Dịch thuật (Translation) và Bản địa hóa (Localization)?',
        options: [
          'Không có sự khác biệt nào.',
          'Dịch thuật chỉ chuyển đổi ngôn ngữ, còn Bản địa hóa là thích ứng toàn bộ trải nghiệm (hình ảnh, màu sắc, văn hóa) cho thị trường địa phương.',
          'Bản địa hóa rẻ hơn dịch thuật.',
          'Bản địa hóa chỉ cần thiết cho các sản phẩm phần mềm.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Bản địa hóa là một quá trình sâu rộng hơn nhiều so với dịch thuật, nó đảm bảo rằng sản phẩm và thông điệp của bạn không chỉ dễ hiểu mà còn phù hợp và có tính kết nối về mặt văn hóa.',
      },
      {
        question:
          'Theo mô hình của Hofstede, một thông điệp marketing nhấn mạnh "sự độc đáo cá nhân" và "tự thể hiện" sẽ hiệu quả hơn ở thị trường nào?',
        options: [
          'Nhật Bản (văn hóa tập thể)',
          'Hàn Quốc (văn hóa tập thể)',
          'Mỹ (văn hóa cá nhân)',
          'Việt Nam (văn hóa tập thể)',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Các nền văn hóa theo chủ nghĩa cá nhân như Mỹ đánh giá cao sự khác biệt và thành tựu cá nhân, do đó các thông điệp marketing tập trung vào việc sản phẩm giúp họ thể hiện bản thân sẽ có hiệu quả cao.',
      },
    ],
    faqs: [
      {
        question: 'Làm thế nào để nghiên cứu văn hóa của một thị trường mới?',
        answer:
          'Bắt đầu bằng việc đọc các báo cáo thị trường, xem các nội dung phổ biến trên YouTube hoặc TikTok tại quốc gia đó, và phân tích các quảng cáo của các thương hiệu địa phương thành công. Sử dụng các công cụ như Hofstede Insights để so sánh các chiều văn hóa. Nếu có thể, hãy nói chuyện trực tiếp với người bản xứ.',
      },
      {
        question: 'Một ví dụ về lỗi localization thất bại là gì?',
        answer:
          'Khi Pepsi vào thị trường Trung Quốc, slogan "Come alive with the Pepsi Generation" của họ đã bị dịch thành "Pepsi brings your ancestors back from the grave" (Pepsi mang tổ tiên của bạn từ dưới mộ trở về), gây ra một sự hiểu lầm tai hại về mặt văn hóa.',
      },
      {
        question: 'Tôi có cần phải dịch toàn bộ website sang nhiều ngôn ngữ không?',
        answer:
          'Không nhất thiết phải làm tất cả cùng một lúc. Hãy bắt đầu với các thị trường quan trọng nhất của bạn. Tiếng Anh là một khởi đầu tốt, nhưng việc cung cấp phiên bản tiếng Tây Ban Nha cho thị trường Mỹ, hoặc tiếng Đức cho thị trường Đức có thể làm tăng đáng kể tỷ lệ chuyển đổi.',
      },
      {
        question: 'Làm thế nào để tìm một người dịch/localizer tốt?',
        answer:
          'Đừng chỉ tìm một người dịch. Hãy tìm một người bản xứ của thị trường mục tiêu, người cũng hiểu về marketing và lĩnh vực sản phẩm của bạn. Họ không chỉ dịch từ ngữ mà còn có thể tư vấn cho bạn về các sắc thái văn hóa và cách diễn đạt phù hợp.',
      },
      {
        question: 'Màu sắc có ý nghĩa khác nhau ở các nền văn hóa không?',
        answer: 'Chắc chắn có. Ví dụ, màu trắng ở phương Tây thường tượng trưng cho sự tinh khôi và đám cưới, nhưng ở nhiều nước châu Á, nó lại liên quan đến tang lễ. Màu đỏ ở Trung Quốc và Việt Nam là may mắn, nhưng ở Nam Phi lại là màu của tang tóc. Hiểu ý nghĩa màu sắc là một phần quan trọng của localization.',
      },
      {
        question: 'High-context và low-context culture là gì?',
        answer: 'Low-context cultures (văn hóa ngữ cảnh thấp) như Mỹ hay Đức ưa chuộng giao tiếp trực tiếp, rõ ràng và minh bạch. High-context cultures (văn hóa ngữ cảnh cao) như Nhật Bản hay Việt Nam lại dựa nhiều vào các yếu tố phi ngôn ngữ, mối quan hệ và bối cảnh. Điều này ảnh hưởng đến cách bạn viết email, quảng cáo và đàm phán.',
      },
      {
        question: 'Làm thế nào để bản địa hóa hình ảnh và video?',
        answer: 'Hãy sử dụng người mẫu, bối cảnh và các vật dụng quen thuộc với văn hóa địa phương. Ví dụ, một quảng cáo về đồ ăn ở Việt Nam có thể có hình ảnh gia đình quây quần bên mâm cơm, trong khi ở Mỹ có thể là một nhóm bạn bè đang tổ chức tiệc BBQ ngoài trời.',
      },
      {
        question: 'Transcreation là gì?',
        answer: 'Transcreation (dịch sáng tạo) còn đi xa hơn cả localization. Đó là quá trình lấy một thông điệp cốt lõi và sáng tạo lại nó một cách hoàn toàn mới để phù hợp với văn hóa địa phương, trong khi vẫn giữ được tinh thần của thương hiệu. Nó thường được sử dụng cho các slogan hoặc các chiến dịch marketing lớn.',
      },
      {
        question: 'Tôi có nên sử dụng các meme hoặc trend địa phương trong marketing không?',
        answer: 'Có thể, nhưng hãy cực kỳ cẩn thận. Nếu làm đúng, nó có thể giúp thương hiệu của bạn trở nên gần gũi và hợp thời. Nhưng nếu làm sai, bạn có thể trông lạc lõng, thiếu hiểu biết hoặc thậm chí là xúc phạm. Hãy đảm bảo bạn thực sự hiểu sâu sắc về trend đó trước khi sử dụng.',
      },
      {
        question: 'Làm thế nào để đo lường hiệu quả của việc localization?',
        answer: 'Bạn có thể theo dõi các chỉ số như tỷ lệ chuyển đổi, tỷ lệ thoát trang (bounce rate), và thời gian trên trang cho các phiên bản website đã được bản địa hóa. So sánh các chỉ số này giữa các thị trường khác nhau sẽ cho bạn thấy nỗ lực localization của mình có mang lại kết quả hay không.',
      },
    ],
  },
  {
    id: 'legal-compliance',
    title: 'Pháp lý và Tuân thủ Quốc tế',
    description: 'Nắm vững các quy định pháp lý và compliance requirements cho cross-border business',
    duration: '85 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=AGpmQ6n4cC0',
    mainContent: {
      introduction:
        'Kinh doanh quốc tế đồng nghĩa với việc bạn phải tuân thủ luật chơi của nhiều quốc gia. Việc bỏ qua các vấn đề pháp lý và tuân thủ có thể khiến doanh nghiệp của bạn đối mặt với các khoản phạt khổng lồ, hàng hóa bị giữ lại ở hải quan, hoặc thậm chí là bị cấm bán. Bài học này là một bản đồ pháp lý giúp bạn kinh doanh một cách an toàn và bền vững trên toàn cầu.',
      keyConcepts: [
        {
          title: 'Luật bảo vệ dữ liệu (Data Protection Laws)',
          description:
            'Hiểu rõ các quy định quan trọng như GDPR ở Châu Âu và CCPA ở California. Việc thu thập, lưu trữ và sử dụng dữ liệu khách hàng quốc tế đòi hỏi sự minh bạch và tuân thủ nghiêm ngặt.',
          examples: [
            'Phải có một trang Chính sách Bảo mật (Privacy Policy) rõ ràng trên website.',
            'Cần có sự đồng ý rõ ràng của người dùng trước khi gửi email marketing.',
          ],
        },
        {
          title: 'Sở hữu trí tuệ quốc tế (International Intellectual Property)',
          description:
            'Bản quyền và nhãn hiệu của bạn ở Việt Nam không tự động được bảo hộ trên toàn thế giới. Tìm hiểu về hệ thống Madrid để đăng ký nhãn hiệu ở nhiều quốc gia cùng lúc và các công ước quốc tế về bản quyền.',
          examples: [
            'Đăng ký nhãn hiệu ở các thị trường mục tiêu quan trọng như Mỹ, EU trước khi bắt đầu bán hàng.',
            'Sử dụng các công cụ của Amazon Brand Registry để bảo vệ thương hiệu của bạn trên nền tảng này.',
          ],
        },
        {
          title: 'Luật bảo vệ người tiêu dùng (Consumer Protection Laws)',
          description:
            'Nhiều quốc gia có luật bảo vệ người tiêu dùng rất nghiêm ngặt, đặc biệt là về chính sách đổi trả, bảo hành và mô tả sản phẩm. Bạn cần phải tuân thủ luật của quốc gia nơi khách hàng của bạn sinh sống.',
          examples: [
            'Luật của EU yêu cầu người bán phải cho phép khách hàng trả lại hàng trong vòng 14 ngày mà không cần lý do.',
            'Mô tả sản phẩm phải chính xác và không gây hiểu lầm.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Xây dựng website',
          description:
            'Tích hợp các hộp kiểm đồng ý (consent checkboxes), liên kết đến chính sách bảo mật và các trang pháp lý cần thiết khác.',
        },
        {
          area: 'Quan hệ với đối tác',
          description:
            'Soạn thảo các hợp đồng chặt chẽ với các nhà cung cấp, đối tác logistics và các nhà phân phối ở nước ngoài.',
        },
        {
          area: 'Quản lý rủi ro',
          description:
            'Mua bảo hiểm trách nhiệm sản phẩm và các loại bảo hiểm cần thiết khác để bảo vệ doanh nghiệp trước các vụ kiện tiềm tàng.',
        },
      ],
      conclusion:
        'Pháp lý và tuân thủ không phải là rào cản, mà là nền móng cho một doanh nghiệp xuyên biên giới vững chắc. Bằng cách chủ động tìm hiểu và tuân thủ các quy định, bạn đang xây dựng một doanh nghiệp uy tín, đáng tin cậy và sẵn sàng cho sự phát triển lâu dài.',
    },
    relatedGames: [],
    objectives: [
      'Hiểu về trade regulations và tax implications',
      'Tuân thủ data protection laws',
      'Quản lý intellectual property rights',
      'Xử lý legal disputes và customer protection',
    ],
    prerequisites: ['Kiến thức cơ bản về business law', 'Hiểu biết về international trade'],
    exercises: [
      {
        title: 'Compliance Audit',
        description: 'Thực hiện đánh giá compliance cho cross-border operation',
        difficulty: 'Nâng cao',
        procedure: [
          'Review current business practices vs regulations',
          'Identify compliance gaps và risks',
          'Develop compliance checklist và procedures',
          'Create documentation và record-keeping system',
          'Establish monitoring và review process',
        ],
        expectedResults: 'Complete compliance framework và action plan',
      },
    ],
    realWorldApplications: [
      'Tránh được penalties và legal issues',
      'Xây dựng trust với customers và partners',
      'Mở rộng business một cách bền vững',
      'Bảo vệ company reputation',
    ],
    regulations: ['GDPR', 'CCPA', 'VAT regulations', 'Consumer protection laws'],
    vietnamContext: {
      title: 'Bối cảnh Việt Nam',
      content: [
        'Các hiệp định thương mại tự do (FTA) như EVFTA (với EU) và CPTPP giúp giảm thuế quan cho hàng hóa Việt Nam, nhưng cũng đi kèm các yêu cầu nghiêm ngặt về quy tắc xuất xứ và tiêu chuẩn lao động, môi trường.',
        'Nghị định 52/2013/NĐ-CP về thương mại điện tử là khung pháp lý chính tại Việt Nam, nhưng khi bán hàng ra nước ngoài, doanh nghiệp phải tuân thủ luật của cả Việt Nam và nước sở tại.',
        'Bảo hộ sở hữu trí tuệ là một điểm yếu của nhiều doanh nghiệp Việt Nam. Việc bị ăn cắp mẫu mã, thương hiệu khi vừa mới thành công ở thị trường quốc tế là một rủi ro hiện hữu.',
        'Việt Nam cũng đã ban hành Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân, có nhiều điểm tương đồng với GDPR, cho thấy sự hội nhập của Việt Nam với các tiêu chuẩn toàn cầu.',
      ],
    },
    careerConnect: {
      name: 'Luật sư Trương Trọng Nghĩa',
      title: 'Phó Chủ nhiệm Đoàn Luật sư TP.HCM',
      company: 'YKVN Lawyers',
      imageUrl: 'https://i.pravatar.cc/150?u=truong-trong-nghia',
      quote:
        'Nhiều doanh nghiệp Việt khi ra biển lớn chỉ lo bán hàng mà quên mất việc xây dựng "tấm khiên" pháp lý. Một hợp đồng sơ sài, một nhãn hiệu không được đăng ký, một chính sách bảo mật thiếu sót... tất cả đều có thể trở thành tử huyệt khi có tranh chấp xảy ra. Pháp lý không phải là chi phí, mà là một khoản đầu tư để đi đường dài.',
    },
    quizzes: [
      {
        question: 'GDPR là luật bảo vệ dữ liệu cá nhân áp dụng chủ yếu ở đâu?',
        options: ['Mỹ', 'Trung Quốc', 'Liên minh châu Âu (EU)', 'Việt Nam'],
        correctAnswerIndex: 2,
        explanation:
          'GDPR (General Data Protection Regulation) là quy định rất nghiêm ngặt của EU. Bất kỳ doanh nghiệp nào trên thế giới, nếu xử lý dữ liệu cá nhân của công dân EU, đều phải tuân thủ GDPR.',
      },
      {
        question:
          'Tại sao một doanh nghiệp Việt Nam bán hàng đi Mỹ lại cần quan tâm đến việc đăng ký nhãn hiệu tại Mỹ?',
        options: [
          'Vì đăng ký ở Việt Nam là đủ.',
          'Vì quyền sở hữu trí tuệ có tính lãnh thổ. Đăng ký ở Việt Nam không tự động bảo hộ bạn ở Mỹ. Nếu không đăng ký, người khác có thể đăng ký và "cướp" mất thương hiệu của bạn tại thị trường đó.',
          'Vì nó không quan trọng.',
          'Vì chỉ các công ty lớn mới cần đăng ký.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Nguyên tắc lãnh thổ là một trong những nguyên tắc cơ bản nhất của luật sở hữu trí tuệ. Bạn phải đăng ký bảo hộ ở từng quốc gia hoặc khu vực mà bạn muốn kinh doanh.',
      },
    ],
    faqs: [
      {
        question: 'Tôi có cần một luật sư để kinh doanh xuyên biên giới không?',
        answer:
          'Khi bạn mới bắt đầu, bạn có thể sử dụng các mẫu tài liệu pháp lý có sẵn và tuân thủ các quy định của sàn TMĐT. Tuy nhiên, khi doanh nghiệp của bạn phát triển, việc tham khảo ý kiến của một luật sư chuyên về thương mại quốc tế và sở hữu trí tuệ là một khoản đầu tư khôn ngoan để tránh các rủi ro đắt giá.',
      },
      {
        question: 'Làm thế nào để viết một Chính sách Bảo mật (Privacy Policy) tuân thủ GDPR?',
        answer:
          'Chính sách của bạn phải nêu rõ: bạn thu thập loại dữ liệu nào, tại sao bạn thu thập nó, bạn sử dụng nó như thế nào, bạn lưu trữ nó trong bao lâu, và người dùng có quyền gì đối với dữ liệu của họ (ví dụ: quyền được xóa). Có nhiều công cụ và mẫu online có thể giúp bạn tạo ra một chính sách cơ bản.',
      },
      {
        question: 'Quy tắc xuất xứ (Rules of Origin) trong các FTA có nghĩa là gì?',
        answer:
          'Để được hưởng ưu đãi thuế quan từ một Hiệp định thương mại tự do (FTA), hàng hóa của bạn phải chứng minh được nó có "xuất xứ" từ quốc gia thành viên (ví dụ: Việt Nam). Điều này thường có nghĩa là một tỷ lệ phần trăm nhất định của sản phẩm phải được sản xuất hoặc chế biến tại Việt Nam. Đây là một quy định phức tạp và quan trọng.',
      },
      {
        question: 'Tôi có phải đóng thuế ở nước ngoài không?',
        answer:
          'Điều này phụ thuộc vào luật của từng quốc gia và quy mô kinh doanh của bạn. Ví dụ, ở EU, bạn có thể cần phải đăng ký và nộp thuế VAT. Ở Mỹ, bạn có thể phải nộp thuế bán hàng (Sales Tax) ở các tiểu bang mà bạn có "nexus" (sự hiện diện kinh tế đáng kể). Đây là một lĩnh vực phức tạp và bạn nên tham khảo ý kiến của một chuyên gia về thuế quốc tế.',
      },
      {
        question: 'Sự khác biệt giữa bản quyền (copyright) và nhãn hiệu (trademark) là gì?',
        answer: 'Bản quyền bảo vệ các tác phẩm sáng tạo gốc (ví dụ: hình ảnh sản phẩm, mô tả sản phẩm, video). Nhãn hiệu bảo vệ các yếu tố nhận diện thương hiệu (tên thương hiệu, logo) khỏi việc bị người khác sử dụng gây nhầm lẫn.',
      },
      {
        question: 'Hệ thống Madrid để đăng ký nhãn hiệu hoạt động như thế nào?',
        answer: 'Hệ thống Madrid cho phép bạn nộp một đơn đăng ký duy nhất, bằng một ngôn ngữ duy nhất, và trả một bộ phí duy nhất để đăng ký bảo hộ nhãn hiệu của mình ở nhiều quốc gia thành viên. Nó đơn giản hóa đáng kể quy trình đăng ký nhãn hiệu quốc tế.',
      },
      {
        question: 'Tôi có cần phải lo lắng về luật bảo vệ người tiêu dùng ở tất cả các nước không?',
        answer: 'Về nguyên tắc, bạn phải tuân thủ luật của quốc gia nơi khách hàng của bạn sinh sống. Tuy nhiên, các khu vực có luật nghiêm ngặt nhất là EU, Bắc Mỹ và Úc. Nếu bạn tuân thủ các quy định ở những nơi này (ví dụ: chính sách đổi trả trong 14-30 ngày), bạn thường sẽ đáp ứng được yêu cầu của hầu hết các quốc gia khác.',
      },
      {
        question: 'Làm thế nào để đảm bảo sản phẩm của tôi tuân thủ các tiêu chuẩn an toàn ở nước ngoài?',
        answer: 'Mỗi thị trường có các tiêu chuẩn an toàn riêng (ví dụ: dấu CE ở châu Âu, chứng nhận của CPSC ở Mỹ). Bạn cần nghiên cứu các yêu cầu đối với ngành hàng của mình và có thể cần phải gửi sản phẩm đến các phòng thí nghiệm được công nhận để kiểm tra và cấp chứng nhận. Đây là điều đặc biệt quan trọng đối với các sản phẩm dành cho trẻ em, đồ điện tử, và mỹ phẩm.',
      },
      {
        question: 'Dropshipping có những rủi ro pháp lý nào?',
        answer: 'Khi bạn dropship, bạn vẫn là người bán hàng và chịu trách nhiệm pháp lý đối với khách hàng, ngay cả khi bạn không trực tiếp cầm sản phẩm. Các rủi ro bao gồm: nhà cung cấp gửi hàng kém chất lượng, vi phạm sở hữu trí tuệ, hoặc không tuân thủ các tiêu chuẩn an toàn sản phẩm. Do đó, việc lựa chọn nhà cung cấp uy tín là cực kỳ quan trọng.',
      },
      {
        question: 'Hiệp định tránh đánh thuế hai lần là gì?',
        answer: 'Đây là các hiệp định giữa hai quốc gia nhằm ngăn chặn việc một cá nhân hoặc doanh nghiệp phải đóng cùng một loại thuế trên cùng một khoản thu nhập ở cả hai quốc gia. Việt Nam đã ký hiệp định này với nhiều nước, giúp giảm bớt gánh nặng thuế cho các doanh nghiệp kinh doanh quốc tế.',
      },
    ],
  },
  {
    id: 'analytics-optimization',
    title: 'Phân tích Dữ liệu và Tối ưu hóa',
    description: 'Sử dụng data analytics để tối ưu hóa performance và ROI của cross-border business',
    duration: '105 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=Y2u5fUynk9s',
    mainContent: {
      introduction:
        'Dữ liệu là người dẫn đường đáng tin cậy nhất trong hành trình chinh phục thị trường toàn cầu. Thay vì quyết định dựa trên cảm tính, việc phân tích dữ liệu giúp bạn hiểu rõ khách hàng từ các nền văn hóa khác nhau, tối ưu hóa các chiến dịch marketing và phân bổ ngân sách một cách hiệu quả. Bài học này sẽ trang bị cho bạn tư duy và công cụ để ra quyết định dựa trên dữ liệu.',
      keyConcepts: [
        {
          title: 'Phân tích theo phân khúc thị trường (Cohort Analysis)',
          description:
            'Đừng xem tất cả khách hàng quốc tế là một. Phân tích hành vi của các nhóm khách hàng theo từng quốc gia, nguồn truy cập, hoặc thời điểm mua hàng đầu tiên để tìm ra những insight giá trị.',
          examples: [
            'Phân tích xem khách hàng ở Pháp có giá trị vòng đời (Lifetime Value) cao hơn khách hàng ở Ý hay không.',
            'So sánh tỷ lệ chuyển đổi của khách hàng đến từ quảng cáo Facebook và Google.',
          ],
        },
        {
          title: 'Mô hình phân bổ (Attribution Modeling)',
          description:
            'Hành trình của khách hàng quốc tế thường phức tạp và đi qua nhiều kênh. Hiểu các mô hình phân bổ khác nhau (ví dụ: Last-click, First-click, Linear) để đánh giá đúng vai trò của từng kênh marketing (social media, email, search) trong việc tạo ra đơn hàng.',
          examples: [
            'Sử dụng Google Analytics để so sánh các mô hình phân bổ và tìm ra mô hình phù hợp nhất với doanh nghiệp của bạn.',
          ],
        },
        {
          title: 'Tối ưu hóa tỷ lệ chuyển đổi (Conversion Rate Optimization - CRO)',
          description:
            'Đây là quá trình cải thiện website và các trang sản phẩm một cách có hệ thống để tăng tỷ lệ người truy cập trở thành người mua hàng. Nó bao gồm việc thử nghiệm A/B các yếu tố như tiêu đề, hình ảnh, nút kêu gọi hành động, và quy trình thanh toán.',
          examples: [
            'Thử nghiệm một nút "Buy Now" màu xanh lá cây so với màu cam để xem màu nào tạo ra nhiều lượt nhấp hơn.',
            'Đơn giản hóa quy trình thanh toán từ 5 bước xuống còn 3 bước.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Phân bổ ngân sách marketing',
          description: 'Dồn ngân sách vào các kênh và thị trường mang lại Lợi tức đầu tư (ROI) cao nhất.',
        },
        {
          area: 'Phát triển sản phẩm',
          description:
            'Sử dụng dữ liệu về các sản phẩm được xem nhiều nhất hoặc bán chạy nhất ở từng thị trường để quyết định nên phát triển dòng sản phẩm nào tiếp theo.',
        },
        {
          area: 'Cá nhân hóa trải nghiệm',
          description:
            'Sử dụng dữ liệu hành vi để hiển thị các sản phẩm gợi ý hoặc các chương trình khuyến mãi được cá nhân hóa cho từng khách hàng.',
        },
      ],
      conclusion:
        'Trong thương mại điện tử xuyên biên giới, công ty nào hiểu dữ liệu tốt hơn, công ty đó sẽ chiến thắng. Bằng cách biến dữ liệu thành những insight hành động, bạn sẽ có khả năng thích ứng nhanh chóng với sự thay đổi của thị trường, tối ưu hóa mọi khía cạnh của doanh nghiệp và tạo ra một lợi thế cạnh tranh bền vững.',
    },
    relatedGames: [
      {
        id: 'data-visualizer-3d',
        name: 'Data Visualizer 3D',
        description:
          'Explore and visualize complex datasets in interactive 3D environments, uncovering insights and trends',
      },
    ],
    objectives: [
      'Thiết lập comprehensive analytics framework',
      'Track và analyze key performance metrics',
      'Optimize marketing spend và ROI',
      'Predict trends và forecast demand',
    ],
    prerequisites: [
      'Kiến thức về digital marketing analytics',
      'Kỹ năng sử dụng Excel/Google Sheets',
      'Hiểu biết về statistical analysis cơ bản',
    ],
    exercises: [
      {
        title: 'Analytics Dashboard Creation',
        description: 'Xây dựng dashboard theo dõi performance đa thị trường',
        difficulty: 'Nâng cao',
        procedure: [
          'Định nghĩa KPIs và success metrics',
          'Thiết lập tracking cho multiple channels',
          'Tạo automated reports và alerts',
          'Phân tích customer journey across markets',
          'Develop optimization recommendations',
        ],
        expectedResults: 'Real-time dashboard với actionable insights',
      },
    ],
    realWorldApplications: [
      'Tăng ROI 25-40% thông qua data-driven decisions',
      'Optimize marketing budget allocation',
      'Identify high-potential markets',
      'Improve customer lifetime value',
    ],
    tools: ['Google Analytics', 'Facebook Analytics', 'Klaviyo', 'Hotjar', 'Tableau'],
    vietnamContext: {
      title: 'Bối cảnh Việt Nam',
      content: [
        'Các sàn TMĐT lớn tại Việt Nam như Tiki, Shopee, Lazada đều có đội ngũ phân tích dữ liệu rất mạnh để tối ưu hóa trải nghiệm người dùng và các chiến dịch marketing.',
        'Các "E-commerce enablers" tại Việt Nam đang cung cấp các dịch vụ phân tích dữ liệu cho các thương hiệu, giúp họ hiểu rõ hiệu suất bán hàng trên nhiều nền tảng.',
        'Thách thức: Nhiều doanh nghiệp vừa và nhỏ Việt Nam vẫn còn ra quyết định dựa trên cảm tính, chưa có văn hóa sử dụng dữ liệu để định hướng chiến lược.',
        'Cơ hội: Nguồn nhân lực trong lĩnh vực phân tích dữ liệu tại Việt Nam đang phát triển nhanh, cung cấp tài năng cho các công ty muốn xây dựng năng lực này.',
      ],
    },
    careerConnect: {
      name: 'Anh Hoàng Nam',
      title: 'Head of E-commerce Analytics',
      company: 'Tiki',
      imageUrl: 'https://i.pravatar.cc/150?u=hoang-nam',
      quote:
        'Tại Tiki, mỗi quyết định, từ việc thay đổi màu sắc một cái nút đến việc ra mắt một ngành hàng mới, đều phải dựa trên dữ liệu. Dữ liệu không nói dối. Nó cho chúng tôi biết khách hàng thực sự muốn gì, ở đâu, và khi nào. Trong TMĐT, không có dữ liệu, bạn như một người đi trong bóng tối.',
    },
    quizzes: [
      {
        question: 'CRO (Conversion Rate Optimization) là viết tắt của từ gì?',
        options: [
          'Tối ưu hóa quan hệ khách hàng',
          'Tối ưu hóa tỷ lệ chuyển đổi',
          'Tối ưu hóa chi phí công ty',
          'Tối ưu hóa lợi nhuận khách hàng',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Tối ưu hóa tỷ lệ chuyển đổi là một quá trình có hệ thống nhằm tăng tỷ lệ phần trăm khách truy cập website thực hiện một hành động mong muốn - chẳng hạn như mua hàng.',
      },
      {
        question: 'A/B testing là gì?',
        options: [
          'Thử nghiệm hai phiên bản hoàn toàn khác nhau của một website.',
          'Một phương pháp so sánh hai phiên bản của một trang web hoặc ứng dụng (phiên bản A và phiên bản B) để xem phiên bản nào hoạt động tốt hơn.',
          'Một bài kiểm tra về kiến thức cơ bản.',
          'Luôn luôn chọn phiên bản B.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'A/B testing là một công cụ cực kỳ mạnh mẽ trong CRO. Bằng cách chỉ thay đổi một yếu tố (ví dụ: tiêu đề) và giữ nguyên mọi thứ khác, bạn có thể xác định một cách khoa học yếu tố nào có tác động thực sự đến hành vi của người dùng.',
      },
    ],
    faqs: [
      {
        question: 'Những chỉ số (metrics) nào là quan trọng nhất để theo dõi?',
        answer:
          'Một vài chỉ số quan trọng nhất bao gồm: Tỷ lệ chuyển đổi (Conversion Rate), Giá trị đơn hàng trung bình (Average Order Value - AOV), Chi phí thu hút khách hàng (Customer Acquisition Cost - CAC), và Giá trị vòng đời khách hàng (Customer Lifetime Value - LTV). Việc theo dõi tỷ lệ LTV/CAC là cực kỳ quan trọng để đảm bảo sự tăng trưởng bền vững.',
      },
      {
        question: 'Google Analytics có quá phức tạp cho người mới bắt đầu không?',
        answer:
          'Google Analytics có thể trông đáng sợ lúc đầu, nhưng bạn có thể bắt đầu với những báo cáo cơ bản nhất. Hãy tập trung vào các báo cáo như: Đối tượng (Audience) -> Tổng quan (Overview) để biết khách hàng của bạn từ đâu, và Chuyển đổi (Conversions) -> Thương mại điện tử (Ecommerce) để xem hiệu suất bán hàng.',
      },
      {
        question: 'Làm thế nào để biết kênh marketing nào đang hoạt động hiệu quả nhất?',
        answer:
          'Sử dụng báo cáo "Sức thu hút" (Acquisition) trong Google Analytics. Báo cáo này sẽ cho bạn biết khách hàng đến từ đâu (ví dụ: Google Search, Facebook, Email) và kênh nào mang lại nhiều doanh thu nhất. Điều này giúp bạn quyết định nên đầu tư ngân sách marketing vào đâu.',
      },
      {
        question: 'Tôi nên xem dữ liệu của mình bao lâu một lần?',
        answer:
          'Tránh việc xem dữ liệu hàng giờ vì nó có thể gây ra các quyết định vội vàng. Hãy tạo một thói quen xem xét các chỉ số chính hàng tuần để theo dõi xu hướng và xem xét sâu hơn hàng tháng để đưa ra các quyết định chiến lược. ',
      },
      {
        question: 'Tỷ lệ bỏ giỏ hàng (Cart Abandonment Rate) cao nói lên điều gì?',
        answer: 'Một tỷ lệ bỏ giỏ hàng cao thường cho thấy có vấn đề trong quy trình thanh toán của bạn. Nguyên nhân có thể là chi phí vận chuyển bất ngờ, quy trình quá phức tạp, yêu cầu tạo tài khoản bắt buộc, hoặc thiếu các phương thức thanh toán đáng tin cậy. Phân tích và tối ưu hóa bước này có thể làm tăng doanh thu đáng kể.',
      },
      {
        question: 'Hotjar là gì và nó giúp ích như thế nào?',
        answer: 'Hotjar là một công cụ phân tích hành vi người dùng. Nó cung cấp các "bản đồ nhiệt" (heatmaps) cho thấy nơi người dùng nhấp chuột và di chuyển chuột nhiều nhất, cũng như các bản ghi phiên (session recordings) cho phép bạn xem lại chính xác cách một người dùng đã tương tác với trang web của bạn. Nó giúp bạn hiểu "tại sao" đằng sau các con số trong Google Analytics.',
      },
      {
        question: 'Làm thế nào để tính toán Giá trị vòng đời khách hàng (LTV)?',
        answer: 'Một cách tính đơn giản là: LTV = (Giá trị đơn hàng trung bình) x (Số lần mua hàng trung bình mỗi năm) x (Số năm trung bình một khách hàng gắn bó). Hiểu được LTV giúp bạn biết mình có thể chi bao nhiêu tiền để thu hút một khách hàng mới (CAC) mà vẫn có lãi.',
      },
      {
        question: 'Phân tích theo phân khúc (cohort analysis) có lợi ích gì?',
        answer: 'Nó giúp bạn so sánh hành vi của các nhóm người dùng khác nhau theo thời gian. Ví dụ, bạn có thể so sánh xem nhóm khách hàng đăng ký vào tháng 1 có giữ chân tốt hơn nhóm đăng ký vào tháng 2 hay không. Điều này giúp bạn xác định tác động của các thay đổi về sản phẩm hoặc marketing.',
      },
      {
        question: 'Tôi có nên tin vào dữ liệu 100% không?',
        answer: 'Dữ liệu rất quan trọng, nhưng nó không phải là tất cả. Dữ liệu cho bạn biết "cái gì" đang xảy ra, nhưng không phải lúc nào cũng cho biết "tại sao". Hãy kết hợp dữ liệu định lượng (quantitative data) từ Google Analytics với dữ liệu định tính (qualitative data) từ các cuộc khảo sát, phỏng vấn khách hàng, và trực giác kinh doanh của bạn để có được bức tranh toàn cảnh.',
      },
      {
        question: 'Làm thế nào để bắt đầu với A/B testing mà không cần các công cụ đắt tiền?',
        answer: 'Bạn có thể thực hiện các thử nghiệm A/B thủ công. Ví dụ, chạy một chiến dịch quảng cáo Facebook với hai hình ảnh khác nhau trong một tuần và so sánh tỷ lệ nhấp chuột (CTR). Hoặc gửi hai tiêu đề email khác nhau cho hai nửa danh sách email của bạn và xem tiêu đề nào có tỷ lệ mở cao hơn. Quan trọng là chỉ thay đổi một yếu-tố-duy-nhất trong mỗi thử nghiệm.',
      },
    ],
  },
];

export const crossBorderEcommerceLessons = crossBorderEcommerceLessonsData;

export const crossBorderEcommerceModuleData: ModuleData = {
  id: K2Module.CrossBorderEcommerce,
  title: 'Thương mại Điện tử Xuyên biên giới',
  subtitle: 'Đưa sản phẩm Việt Nam ra thị trường toàn cầu',
  description:
    'Khóa học toàn diện giúp bạn nắm vững các kỹ năng cần thiết để bán hàng thành công trên các nền tảng thương mại điện tử quốc tế như Amazon, Alibaba, và Etsy.',
  category: 'Kinh doanh & Khởi nghiệp',
  icon: '🌍',
  color: 'from-blue-500 to-green-500',
  level: 'Trung cấp',
  duration: '12-15 giờ',
  features: [
    'Chiến lược gia nhập thị trường quốc tế',
    'Tối ưu hóa gian hàng trên Amazon, Etsy',
    'Quản lý logistics và thanh toán xuyên biên giới',
    'Marketing và localization đa văn hóa',
  ],
  prerequisites: ['Kiến thức cơ bản về kinh doanh online', 'Tiếng Anh đọc hiểu'],
  objectives: [
    'Hiểu khái niệm và mô hình kinh doanh cross-border e-commerce.',
    'Làm chủ các nền tảng quốc tế như Amazon, Etsy, Alibaba.',
    'Quản lý hiệu quả logistics, vận chuyển và thanh toán quốc tế.',
    'Thích ứng sản phẩm và marketing với văn hóa địa phương.',
    'Nắm vững các quy định pháp lý và tuân thủ quốc tế.',
    'Sử dụng dữ liệu để phân tích và tối ưu hóa hoạt động kinh doanh.',
  ],
  careerOutcomes: [
    'Chuyên viên E-commerce quốc tế',
    'Quản lý gian hàng Amazon/Etsy',
    'Chuyên viên Logistics & Supply Chain',
    'Nhà sáng lập thương hiệu D2C toàn cầu',
  ],
  industryApplications: [
    'Bán lẻ và hàng tiêu dùng',
    'Thủ công mỹ nghệ và sản phẩm văn hóa',
    'Nông sản và thực phẩm chế biến',
    'Thời trang và phụ kiện',
  ],
  marketDemand: {
    averageSalary: '700 - 2.500 USD/tháng',
    jobGrowth: '30% mỗi năm',
    hireDemand: 'Cao',
  },
  relatedModules: [
    K2Module.DigitalMarketing,
    K2Module.BusinessMarketing,
    K2Module.CrossCulturalIntelligence,
    K2Module.DataDrivenAnalytics,
  ],
  lessons: crossBorderEcommerceLessonsData,
};
