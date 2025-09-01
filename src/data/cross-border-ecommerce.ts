import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

// Cross-border E-commerce Lesson Interface
export interface CrossBorderEcommerceLessonData extends BaseLessonData {
  marketSize?: string;
  growthRate?: string;
  platforms?: string[];
  regulations?: string[];
  tools?: string[];
  mainContent: {
    introduction: string;
    keyConcepts: Array<{
      title: string;
      description: string;
      examples: string[];
    }>;
    practicalApplications: Array<{
      area: string;
      description: string;
    }>;
    conclusion: string;
  };
  relatedGames: Array<{
    id: string;
    name: string;
    description: string;
  }>;
}

export const crossBorderEcommerceLessons: CrossBorderEcommerceLessonData[] = [
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
    prerequisites: ['Kiến thức cơ bản về business law', 'Hiểu về international trade'],
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
  },
];

export default crossBorderEcommerceLessons;
