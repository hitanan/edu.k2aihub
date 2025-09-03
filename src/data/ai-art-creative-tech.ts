export interface AiArtLesson {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  duration: string;
  objectives: string[];
  prerequisites: string[];
  exercises: Exercise[];
  realWorldApplications: string[];
  videoUrl: string;
  imageUrl?: string;
  tools: string[];
  artType: string;
  resources: Resource[];
  caseStudies: CaseStudy[];
  vietnamContext: VietnamContext;
  careerConnect: CareerConnect;
  quizzes: Quiz[];
}

interface Exercise {
  title: string;
  description: string;
  difficulty: string;
  solution: string;
  requirements: string[];
  hints: string[];
  expectedOutput: string;
}

interface Resource {
  title: string;
  url: string;
  type: 'platform' | 'tool' | 'community' | 'marketplace' | 'tutorial';
  description: string;
}

interface CaseStudy {
  title: string;
  artist: string;
  challenge: string;
  solution: string;
  results: string;
  insights: string[];
}

interface VietnamContext {
  title: string;
  content: string[];
}

interface CareerConnect {
  name: string;
  title: string;
  company: string;
  imageUrl: string;
  quote: string;
}

interface Quiz {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export const aiArtLessons: AiArtLesson[] = [
  {
    id: 'ai-image-generation-fundamentals',
    title: 'Bài 1: AI Image Generation & Prompt Engineering',
    description:
      'Làm chủ việc tạo hình ảnh bằng AI với Midjourney, DALL-E, Stable Diffusion. Học các kỹ thuật prompt engineering, kiểm soát phong cách và quy trình tạo ảnh nâng cao.',
    videoUrl: 'https://www.youtube.com/watch?v=S2TAa4P2IuY',
    imageUrl: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=400&fit=crop',
    difficulty: 'Cơ bản',
    duration: '150 phút',
    artType: 'Tạo hình ảnh kỹ thuật số',
    objectives: [
      'Làm chủ các nền tảng tạo hình ảnh AI và khả năng độc đáo của chúng',
      'Phát triển kỹ năng prompt engineering nâng cao để có sản phẩm nghệ thuật nhất quán',
      'Hiểu các kỹ thuật chuyển đổi phong cách, kiểm soát bố cục và tinh chỉnh hình ảnh',
      'Tạo ra các tác phẩm nghệ thuật chất lượng chuyên nghiệp bằng quy trình được hỗ trợ bởi AI',
      'Thực hành nghệ thuật AI có đạo đức và cân nhắc về bản quyền',
    ],
    prerequisites: [
      'Hiểu biết cơ bản về các khái niệm nghệ thuật số',
      'Truy cập vào các nền tảng nghệ thuật AI (Midjourney, DALL-E, hoặc Stable Diffusion)',
      'Tầm nhìn sáng tạo và sự trân trọng nghệ thuật',
      'Kết nối Internet cho các dịch vụ AI dựa trên đám mây',
    ],
    tools: [
      'Midjourney (Nghệ thuật AI dựa trên Discord)',
      'DALL-E 2/3 (Tạo hình ảnh của OpenAI)',
      'Stable Diffusion (Nghệ thuật AI mã nguồn mở)',
      'Adobe Photoshop (Hậu kỳ)',
      'Figma (Tích hợp thiết kế)',
      'RunwayML (Video và các công cụ AI nâng cao)',
    ],
    exercises: [
      {
        title: 'Làm chủ Quy trình Tạo nghệ thuật AI Chuyên nghiệp',
        description:
          'Tạo hệ thống tạo nghệ thuật AI toàn diện bao gồm lên ý tưởng, tạo prompt, tạo ảnh, tinh chỉnh và cung cấp sản phẩm chuyên nghiệp',
        difficulty: 'Trung bình',
        solution:
          '# Quy trình Tạo nghệ thuật AI Chuyên nghiệp\n\n## 1. Lập kế hoạch & Lên ý tưởng Dự án\n\n### Phát triển Bản tóm tắt Sáng tạo:\n- **Loại dự án:** Thiết kế nhận diện thương hiệu cho startup thời trang bền vững\n- **Đối tượng mục tiêu:** Thế hệ Millennials và Gen Z có ý thức về môi trường\n- **Phong cách nghệ thuật:** Tối giản hiện đại với các yếu tố hữu cơ\n- **Bảng màu:** Tông màu đất, xanh lá cây rừng, màu trung tính ấm\n- **Tâm trạng/Cảm xúc:** Tươi mới, tự nhiên, tinh tế, lạc quan\n- **Sản phẩm giao:** Các biến thể logo, hình ảnh thương hiệu, hình ảnh marketing\n- **Thời gian:** 2 tuần lên ý tưởng, 1 tuần tạo ảnh, 1 tuần tinh chỉnh\n\n### Nghiên cứu & Thu thập Cảm hứng:\n- **Tài liệu tham khảo trực quan:** Thiết kế Scandinavia, chủ nghĩa tối giản Nhật Bản, nhiếp ảnh thực vật\n- **Phân tích đối thủ cạnh tranh:** Thẩm mỹ thương hiệu của Patagonia, Everlane, Reformation\n- **Nghiên cứu xu hướng:** Xu hướng hình ảnh thời trang bền vững hiện tại\n- **Bối cảnh văn hóa:** Biểu tượng môi trường, họa tiết lấy cảm hứng từ thiên nhiên\n\n## 2. Lựa chọn Nền tảng & Phân tích Khả năng\n\n### Midjourney (Dựa trên Discord):\n**Điểm mạnh:**\n- Diễn giải nghệ thuật và nâng cao sáng tạo đặc biệt\n- Hiệu suất mạnh mẽ với các khái niệm trừu tượng và phong cách nghệ thuật\n- Cộng đồng và nguồn cảm hứng chia sẻ tuyệt vời\n- Làm chủ ánh sáng và bố cục tự nhiên\n\n**Trường hợp sử dụng tốt nhất:**\n- Tác phẩm nghệ thuật ý tưởng và mood board\n- Ý tưởng logo nghệ thuật và hình ảnh thương hiệu\n- Biểu diễn trừu tượng các giá trị thương hiệu\n- Minh họa cách điệu và hình ảnh marketing\n\n**Tích hợp quy trình:**\n```\n/imagine sustainable fashion logo, minimalist design, leaf motif, earth tones, clean typography --ar 1:1 --stylize 750\n/imagine eco-friendly clothing brand imagery, natural textures, organic shapes, modern minimalism --ar 16:9 --stylize 500\n```\n\n### DALL-E 3 (OpenAI):\n**Điểm mạnh:**\n- Diễn giải prompt chính xác và độ chính xác chi tiết\n- Tích hợp văn bản và xử lý kiểu chữ xuất sắc\n- Biểu diễn nhân vật và đối tượng nhất quán\n- Đầu ra độ phân giải cao phù hợp để in\n\n**Trường hợp sử dụng tốt nhất:**\n- Mockup sản phẩm và render thực tế\n- Tài liệu marketing với yêu cầu văn bản cụ thể\n- Minh họa chi tiết với thông số kỹ thuật chính xác\n- Ứng dụng thương hiệu đòi hỏi độ chính xác của văn bản\n\n**Tích hợp quy trình:**\n```\nPrompt: "Create a sophisticated logo for \'EcoThreads\' sustainable fashion brand. Modern sans-serif typography in forest green, integrated with a stylized leaf icon. Clean, minimalist design on white background. Professional brand identity suitable for luxury eco-fashion."\n```\n\n### Stable Diffusion (Mã nguồn mở):\n**Điểm mạnh:**\n- Toàn quyền kiểm soát sáng tạo và tùy chỉnh\n- Hiệu quả về chi phí cho việc tạo số lượng lớn\n- Khả năng tinh chỉnh cho các phong cách thương hiệu cụ thể\n- Tích hợp với các quy trình tùy chỉnh và tự động hóa\n\n**Trường hợp sử dụng tốt nhất:**\n- Tạo nội dung quy mô lớn\n- Phát triển phong cách nhất quán trên nhiều tài sản\n- Đào tạo mô hình tùy chỉnh cho thẩm mỹ cụ thể của thương hiệu\n- Kỹ thuật thử nghiệm và phát triển phong cách\n\n## 3. Khung Prompt Engineering Nâng cao\n\n### Mẫu Cấu trúc Prompt:\n```\n[CHỦ THỂ] + [MÔ TẢ PHONG CÁCH] + [BỐ CỤC] + [ÁNH SÁNG] + [BẢNG MÀU] + [TÂM TRẠNG] + [THAM SỐ KỸ THUẬT]\n```\n\n### Thư viện Prompt dành riêng cho Thương hiệu:\n\n#### Tạo Logo:\n```\nPrompt cơ bản: "Minimalist logo design for sustainable fashion brand"\n\nBiến thể Phong cách:\n- "...in the style of Dieter Rams, geometric precision, golden ratio composition"\n- "...inspired by Scandinavian design principles, clean lines, functional beauty"\n- "...with Japanese minimalism influence, negative space mastery, zen aesthetic"\n\nTích hợp Yếu tố:\n- "...incorporating subtle leaf motif, organic curves, natural symbolism"\n- "...featuring intertwined threads, textile inspiration, craft heritage"\n- "...with growth spiral pattern, sustainability metaphor, evolution concept"\n\nThông số Kỹ thuật:\n- "...vector-style clarity, scalable design, print-ready quality"\n- "...professional brand identity, versatile applications, timeless appeal"\n- "...monochrome version compatible, high contrast, readable at small sizes"\n```\n\n#### Hình ảnh Thương hiệu:\n```\nPhong cách Nhiếp ảnh Sản phẩm:\n"Sustainable fashion photography, natural lighting, organic textures, earth tone palette, minimalist composition, shot with medium format camera, shallow depth of field, lifestyle context, environmentally conscious aesthetic"\n\nHình ảnh Marketing:\n"Eco-fashion marketing campaign imagery, diverse models in natural settings, authentic moments, soft golden hour lighting, sustainable lifestyle themes, genuine emotions, environmental harmony"\n\nThiết kế Họa tiết & Vải:\n"Organic textile patterns inspired by nature, botanical motifs, sustainable fashion applications, seamless repeat design, modern interpretation of traditional crafts, earth-friendly color palette"\n```\n\n### Kỹ thuật Tinh chỉnh Prompt:\n\n#### Quy trình Phát triển Lặp lại:\n1. **Tạo cơ bản:** Bắt đầu với prompt ý tưởng rộng\n2. **Tinh chỉnh Phong cách:** Thêm các mô tả phong cách nghệ thuật cụ thể\n3. **Kiểm soát Bố cục:** Tích hợp các thông số khung và bố cục\n4. **Nâng cao Chi tiết:** Chỉ định kết cấu, vật liệu và các chi tiết nhỏ\n5. **Tối ưu hóa Tâm trạng:** Điều chỉnh tông màu cảm xúc và các yếu tố không khí\n\n#### Prompt Engineering Nâng cao:\n```\n# Ví dụ Prompt có Trọng số:\n"sustainable fashion logo design::3, minimalist aesthetic::2, leaf motif::1.5, forest green color::2, scandinavian design influence::1, professional brand identity::3, vector-style clarity::2"\n\n# Prompt Phủ định:\n"--no cluttered design, excessive details, outdated typography, artificial colors, corporate sterility, fast fashion aesthetic"\n\n# Tích hợp Chuyển đổi Phong cách:\n"in the style of [specific designer/brand], maintaining original sustainable values, adapted for modern applications"\n```\n\n## 4. Quy trình Tạo ảnh & Kiểm soát Chất lượng\n\n### Chiến lược Tạo ảnh Đa nền tảng:\n\n#### Giai đoạn 1: Khám phá Ý tưởng (Midjourney)\n- Tạo 20-30 biến thể ý tưởng đa dạng\n- Khám phá các phong cách và cách tiếp cận nghệ thuật khác nhau\n- Xác định các hướng hình ảnh mạnh nhất\n- Tạo mood board và bộ sưu tập cảm hứng\n\n#### Giai đoạn 2: Phát triển Chính xác (DALL-E 3)\n- Tinh chỉnh các ý tưởng đã chọn với các yêu cầu cụ thể\n- Tạo các phiên bản độ phân giải cao để xem xét chi tiết\n- Kiểm tra tích hợp văn bản và ứng dụng kiểu chữ\n- Tạo nhiều biến thể kích thước và định dạng\n\n#### Giai đoạn 3: Sản xuất Số lượng lớn (Stable Diffusion)\n- Sản xuất tài sản cuối cùng với số lượng yêu cầu\n- Tạo các biến thể nhất quán cho các ứng dụng khác nhau\n- Tạo hệ thống thiết kế có thể mở rộng\n- Tự động hóa các tác vụ tạo ảnh lặp đi lặp lại\n\n### Khung Đánh giá Chất lượng:\n\n#### Danh sách Kiểm tra Chất lượng Kỹ thuật:\n- **Độ phân giải:** Tối thiểu 2048x2048 cho các ứng dụng in ấn\n- **Độ rõ nét:** Chi tiết sắc nét, không có lỗi AI hoặc biến dạng\n- **Độ chính xác màu sắc:** Nhất quán với thông số kỹ thuật bảng màu thương hiệu\n- **Khả năng mở rộng:** Có thể đọc và nhận dạng ở nhiều kích cỡ khác nhau\n- **Định dạng tệp:** Định dạng phù hợp cho mục đích sử dụng (PNG, SVG, PDF)\n\n#### Đánh giá Sự phù hợp với Thương hiệu:\n- **Tính nhất quán về Phong cách:** Phù hợp với thẩm mỹ thương hiệu đã thiết lập\n- **Sự rõ ràng của Thông điệp:** Truyền đạt các giá trị thương hiệu dự định\n- **Sức hấp dẫn của Đối tượng mục tiêu:** Phù hợp với nghiên cứu nhân khẩu học\n- **Sự khác biệt cạnh tranh:** Độc đáo trong bối cảnh thị trường\n- **Tính linh hoạt:** Hoạt động trên nhiều ứng dụng\n\n## 5. Hậu kỳ & Nâng cao Chuyên nghiệp\n\n### Tích hợp Adobe Photoshop:\n\n#### Quy trình Tinh chỉnh Nghệ thuật AI:\n```\n1. Nhập hình ảnh do AI tạo ra ở độ phân giải tối đa\n2. Dọn dẹp và tách nền:\n   - Xóa các lỗi không mong muốn\n   - Hoàn thiện việc phát hiện cạnh\n   - Dọn dẹp các yếu tố nền\n\n3. Chỉnh màu và phù hợp với thương hiệu:\n   - Điều chỉnh bảng màu theo thông số kỹ thuật chính xác của thương hiệu\n   - Đảm bảo tính nhất quán trên các tài sản được tạo ra\n   - Tối ưu hóa cho các phương tiện đầu ra khác nhau\n\n4. Nâng cao chi tiết:\n   - Làm sắc nét các yếu tố quan trọng\n   - Thêm kết cấu tinh tế để tạo sự chân thực\n   - Nâng cao khả năng đọc của kiểu chữ\n\n5. Tối ưu hóa định dạng:\n   - Tạo nhiều phiên bản tệp (web, in, mạng xã hội)\n   - Tạo phiên bản vector khi thích hợp\n   - Chuẩn bị tài sản cho các ứng dụng khác nhau\n```\n\n#### Quy trình Vector hóa Logo:\n```\n# Quy trình từ Photoshop sang Illustrator:\n1. Đồ lại logo do AI tạo bằng Image Trace\n2. Tinh chỉnh thủ công các đường vector\n3. Tái tạo kiểu chữ bằng các phông chữ chuyên nghiệp\n4. Tiêu chuẩn hóa bảng màu\n5. Xuất nhiều định dạng (AI, EPS, PDF, SVG)\n\n# Thay thế: Prompt tạo vector trực tiếp\n"vector logo design, clean lines, scalable graphics, Adobe Illustrator style, professional brand identity"\n```\n\n### Hệ thống hóa Tài sản Thương hiệu:\n\n#### Tạo Thư viện Tài sản Toàn diện:\n```\nBiến thể Logo:\n- Logo chính (đủ màu)\n- Logo phụ (một màu)\n- Dấu hiệu logo (chỉ biểu tượng)\n- Bố cục ngang\n- Bố cục xếp chồng\n- Phiên bản chữ lồng\n\nBiến thể Màu sắc:\n- Đủ màu trên nền trắng\n- Đủ màu trên nền tối\n- Đen và trắng\n- Đảo ngược (trắng trên nền tối)\n- Ứng dụng một màu\n\nTối ưu hóa Kích thước:\n- Định dạng lớn (biển quảng cáo, bảng hiệu)\n- Định dạng trung bình (bao bì, marketing)\n- Định dạng nhỏ (danh thiếp, favicon)\n- Tối ưu hóa kỹ thuật số (web, mạng xã hội)\n```\n\n## 6. Cân nhắc Đạo đức & Thực hành Tốt nhất\n\n### Bản quyền & Sở hữu Trí tuệ:\n- **Sáng tạo Nguyên bản:** Đảm bảo nội dung do AI tạo ra có tính biến đổi\n- **Ghi công Tham khảo:** Ghi công các nguồn cảm hứng một cách thích hợp\n- **Quyền sử dụng Thương mại:** Xác minh các điều khoản của nền tảng cho các ứng dụng thương mại\n- **Tính nguyên bản của Phong cách:** Tránh sao chép trực tiếp các tác phẩm nghệ thuật hiện có\n\n### Tiêu chuẩn Chuyên nghiệp:\n- **Giao tiếp với Khách hàng:** Giải thích rõ ràng quy trình được hỗ trợ bởi AI\n- **Đảm bảo Chất lượng:** Đánh giá và tinh chỉnh thủ công tất cả các sản phẩm đầu ra\n- **Quy trình Sửa đổi:** Cải tiến lặp đi lặp lại dựa trên phản hồi\n- **Tiêu chuẩn Giao hàng:** Trình bày chuyên nghiệp các tài sản cuối cùng\n\n### Nguyên tắc Thiết kế Bền vững:\n- **Thẩm mỹ Vượt thời gian:** Tạo ra các thiết kế không nhanh chóng lỗi thời\n- **Ứng dụng Linh hoạt:** Tối đa hóa tiện ích trên các phương tiện khác nhau\n- **Sản xuất Hiệu quả:** Giảm thiểu lãng phí tài nguyên thông qua việc tạo thông minh\n- **Nhạy cảm Văn hóa:** Tôn trọng các giá trị môi trường và xã hội\n\n## 7. Giao hàng & Tài liệu Dự án\n\n### Gói Giao hàng cho Khách hàng:\n```\nThư viện Tài sản Cuối cùng:\n├── Logos/\n│   ├── Primary_Logo_Color.png (300 DPI)\n│   ├── Primary_Logo_Vector.svg\n│   ├── Secondary_Logo_Variations/\n│   └── Usage_Guidelines.pdf\n├── Brand_Imagery/\n│   ├── Hero_Images/ (sẵn sàng cho web và in)\n│   ├── Product_Backgrounds/\n│   ├── Pattern_Library/\n│   └── Marketing_Templates/\n├── Documentation/\n│   ├── Brand_Style_Guide.pdf\n│   ├── AI_Generation_Process.pdf\n│   ├── Technical_Specifications.pdf\n│   └── Usage_Rights_Documentation.pdf\n└── Source_Files/\n    ├── AI_Prompts_Library.txt\n    ├── Photoshop_Working_Files/\n    └── Generation_History/\n```\n\n### Tài liệu Quy trình:\n- **Thư viện Prompt:** Bộ sưu tập đầy đủ các prompt hoạt động\n- **Nhật ký Tạo ảnh:** Ghi lại các lần lặp lại và quyết định\n- **Chỉ số Chất lượng:** Điểm đánh giá và ghi chú cải tiến\n- **Hướng dẫn Phong cách:** Hướng dẫn về tính nhất quán trong việc tạo AI trong tương lai',
        requirements: [
          'Truy cập vào nhiều nền tảng nghệ thuật AI (Midjourney, DALL-E, Stable Diffusion)',
          'Đăng ký Adobe Creative Suite để hậu kỳ',
          'Hiểu biết về phát triển thương hiệu và nhận diện hình ảnh',
          'Dự án portfolio từ ý tưởng đến giao hàng',
          'Tài liệu về quy trình sáng tạo hoàn chỉnh',
        ],
        hints: [
          'Bắt đầu với các khái niệm rộng, tinh chỉnh dần dần',
          'Kiểm tra các prompt trên nhiều nền tảng để có kết quả tốt nhất',
          'Xây dựng các thư viện prompt toàn diện để đảm bảo tính nhất quán',
          'Luôn hậu kỳ sản phẩm AI để có chất lượng chuyên nghiệp',
        ],
        expectedOutput:
          'Hệ thống nhận diện thương hiệu hoàn chỉnh được tạo bằng cách tạo nghệ thuật AI với các sản phẩm giao chất lượng chuyên nghiệp và tài liệu toàn diện',
      },
    ],
    realWorldApplications: [
      'Thiết kế nhận diện thương hiệu và logo cho các startup và doanh nghiệp',
      'Hình ảnh chiến dịch marketing và quảng cáo sáng tạo',
      'Tạo nội dung mạng xã hội và kể chuyện bằng hình ảnh',
      'Trực quan hóa sản phẩm và phát triển ý tưởng',
      'Nghệ thuật ý tưởng và kịch bản phân cảnh trong ngành giải trí',
    ],
    resources: [
      {
        title: 'Tài liệu Chính thức của Midjourney',
        url: 'https://docs.midjourney.com',
        type: 'platform',
        description: 'Hướng dẫn toàn diện về các tính năng, lệnh và thực hành tốt nhất của Midjourney',
      },
      {
        title: 'Nền tảng DALL-E của OpenAI',
        url: 'https://openai.com/dall-e-3',
        type: 'platform',
        description: 'Truy cập vào tạo hình ảnh DALL-E 3 với khả năng prompt nâng cao',
      },
    ],
    caseStudies: [
      {
        title: 'Ra mắt Nhận diện Thương hiệu do AI tạo ra',
        artist: 'Creative Studio, Nhà thiết kế Thương hiệu',
        challenge:
          'Tạo nhận diện thương hiệu hoàn chỉnh cho startup thời trang bền vững trong 2 tuần với ngân sách hạn chế, yêu cầu hàng chục tài sản hình ảnh và phong cách nhất quán trên tất cả các tài liệu.',
        solution:
          'Triển khai quy trình tạo nghệ thuật AI đa nền tảng: Midjourney để khám phá ý tưởng, DALL-E cho công việc chính xác, Stable Diffusion để sản xuất số lượng lớn. Phát triển thư viện prompt toàn diện và hệ thống hậu kỳ.',
        results:
          'Giao hơn 150 tài sản thương hiệu trong thời gian quy định với chi phí giảm 90% so với quy trình thiết kế truyền thống. Nhận diện thương hiệu đã nhận được giải thưởng thiết kế và giúp khách hàng huy động được vòng vốn 2 triệu đô la.',
        insights: [
          'Tạo nghệ thuật AI cho phép lặp lại và khám phá nhanh chóng không thể thực hiện được với các phương pháp truyền thống',
          'Cách tiếp cận đa nền tảng tận dụng các thế mạnh độc đáo của các hệ thống AI khác nhau',
          'Hậu kỳ chuyên nghiệp cần thiết cho sản phẩm chất lượng thương mại',
          'Prompt engineering toàn diện tạo ra thẩm mỹ thương hiệu nhất quán',
        ],
      },
    ],
    vietnamContext: {
      title: 'Nghệ thuật AI và Thị trường Sáng tạo Việt Nam',
      content: [
        'Cộng đồng nghệ sĩ AI tại Việt Nam đang phát triển nhanh chóng, đặc biệt trên các nền tảng như Facebook và Discord, nơi họ chia sẻ kinh nghiệm và tác phẩm.',
        'Các doanh nghiệp Việt Nam, đặc biệt là trong lĩnh vực marketing và quảng cáo, đang bắt đầu ứng dụng AI để tạo ra các chiến dịch hình ảnh độc đáo với chi phí tối ưu.',
        'Các cuộc thi và triển lãm nghệ thuật AI đang dần xuất hiện, mở ra một sân chơi mới cho các nghệ sĩ kỹ thuật số Việt Nam thể hiện tài năng.',
      ],
    },
    careerConnect: {
      name: 'Anh Tùng Khỉ (Crazy Monkey)',
      title: 'Nghệ sĩ Thị giác (Visual Artist)',
      company: 'Fustic. Studio',
      imageUrl: 'https://i.pravatar.cc/150?u=tung-khi',
      quote:
        'AI không phải là đối thủ, nó là một công cụ mới, một cây cọ mới. Nó giúp mình hiện thực hóa những ý tưởng điên rồ nhất mà trước đây không thể. Điều quan trọng là tầm nhìn và câu chuyện bạn muốn kể.',
    },
    quizzes: [
      {
        question: 'Prompt Engineering là gì?',
        options: [
          'Một loại kỹ thuật phần mềm',
          'Nghệ thuật và khoa học của việc tạo ra các câu lệnh (prompts) hiệu quả để AI tạo ra kết quả mong muốn',
          'Một cách để hack vào hệ thống AI',
          'Tên của một nền tảng tạo ảnh AI',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Prompt Engineering là kỹ năng cốt lõi để làm việc với các mô hình AI tạo sinh. Một prompt tốt sẽ chỉ định rõ ràng về chủ thể, phong cách, bố cục, ánh sáng và các chi tiết khác để hướng dẫn AI tạo ra hình ảnh chính xác và nghệ thuật.',
      },
    ],
  },
  {
    id: 'creative-video-ai-production',
    title: 'Bài 2: Sản xuất Video & Đồ họa chuyển động với AI',
    description:
      'Tạo ra những video tuyệt đẹp với các công cụ AI. Làm chủ RunwayML, Pika Labs, Stable Video Diffusion để tạo video, đồ họa chuyển động và kể chuyện điện ảnh.',
    videoUrl: 'https://www.youtube.com/watch?v=1MQ5ozIvgzE',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=400&fit=crop',
    difficulty: 'Nâng cao',
    duration: '180 phút',
    artType: 'Video & Đồ họa chuyển động',
    objectives: [
      'Làm chủ các nền tảng tạo video AI và các kỹ thuật điện ảnh',
      'Tạo đồ họa chuyển động chuyên nghiệp bằng quy trình được hỗ trợ bởi AI',
      'Phát triển kỹ năng kể chuyện bằng video với nội dung do AI tạo ra',
      'Tích hợp video AI với sản xuất video truyền thống',
      'Xây dựng hệ thống tạo nội dung video có thể mở rộng',
    ],
    prerequisites: [
      'Kinh nghiệm chỉnh sửa video cơ bản (Premiere, After Effects)',
      'Hiểu biết về các định dạng video và nén',
      'Truy cập vào các nền tảng video AI (RunwayML, Pika Labs)',
      'Kỹ năng kể chuyện sáng tạo',
    ],
    tools: [
      'RunwayML (Tạo video AI)',
      'Pika Labs (Văn bản thành video)',
      'Stable Video Diffusion (Mã nguồn mở)',
      'Adobe After Effects (Đồ họa chuyển động)',
      'Adobe Premiere Pro (Chỉnh sửa video)',
      'DaVinci Resolve (Chỉnh màu)',
    ],
    exercises: [
      {
        title: 'Tạo Video Chiến dịch Marketing được hỗ trợ bởi AI',
        description:
          'Sản xuất một chiến dịch video marketing hoàn chỉnh bằng cách sử dụng tạo video AI, đồ họa chuyển động và các kỹ thuật kể chuyện',
        difficulty: 'Nâng cao',
        solution:
          '# Quy trình Sản xuất Video Marketing được hỗ trợ bởi AI\n\n## 1. Chiến lược Chiến dịch & Phát triển Sáng tạo\n\n### Bản tóm tắt Dự án: Ra mắt Sản phẩm Công nghệ Bền vững\n- **Sản phẩm:** Tai nghe không dây chạy bằng năng lượng mặt trời\n- **Đối tượng mục tiêu:** Những người đam mê công nghệ có ý thức về môi trường, tuổi 25-40\n- **Mục tiêu Chiến dịch:** Thúc đẩy doanh số đặt hàng trước và nhận thức về thương hiệu\n- **Loại Video:** Video chính (60s), các đoạn cắt cho mạng xã hội (15s, 30s), demo sản phẩm\n- **Phân phối:** Website, YouTube, Instagram, TikTok, LinkedIn\n\n### Phát triển Ý tưởng Sáng tạo:\n- **Chủ đề:** "Năng lượng từ Thiên nhiên, Âm thanh từ Sáng tạo"\n- **Phong cách Hình ảnh:** Công nghệ sạch, hiện đại, tích hợp với thiên nhiên\n- **Cấu trúc Tường thuật:** Vấn đề → Giải pháp → Lợi ích → Kêu gọi Hành động\n- **Tâm trạng:** Truyền cảm hứng, đổi mới, có ý thức về môi trường\n\n## 2. Chiến lược Tạo Video AI\n\n### Lựa chọn Nền tảng & Quy trình:\n\n#### RunwayML (Nền tảng chính):\n**Khả năng:**\n- Tạo cảnh quay điện ảnh chất lượng cao\n- Văn bản thành video với kiểm soát cảnh chi tiết\n- Hoạt hình từ hình ảnh sang video\n- Chuyển động máy quay và các kỹ thuật điện ảnh\n- Tạo nền màn hình xanh\n\n**Quy trình Sản xuất:**\n```\nPhát triển Kịch bản phân cảnh:\n1. Mở đầu: Bình minh trên rừng, các tấm pin mặt trời lấp lánh\n   Prompt: "Cinematic sunrise over misty forest, solar panels catching golden light, drone shot, 4K quality, nature documentary style"\n\n2. Giới thiệu Sản phẩm: Tai nghe hiện ra từ ánh sáng\n   Prompt: "High-end product photography, wireless earbuds emerging from particles of light, studio lighting, premium tech aesthetic, macro lens detail"\n\n3. Tích hợp Lối sống: Mọi người sử dụng tai nghe trong thiên nhiên\n   Prompt: "Young professionals hiking, wearing sleek earbuds, natural lighting, active lifestyle, mountain backdrop, authentic moments"\n\n4. Trình diễn Công nghệ: Hoạt hình sạc bằng năng lượng mặt trời\n   Prompt: "Micro-cinematography of solar charging process, energy visualization, clean tech animation, scientific precision, futuristic aesthetic"\n```\n\n#### Pika Labs (Nội dung hỗ trợ):\n**Trường hợp sử dụng:**\n- Các đoạn cắt nhanh cho mạng xã hội\n- Hoạt hình văn bản động\n- Nêu bật các tính năng sản phẩm\n- Các yếu tố chuyển tiếp\n\n### Prompt Engineering Nâng cao cho Video:\n\n#### Tích hợp Ngôn ngữ Điện ảnh:\n```\nChuyển động Máy quay:\n- "Smooth dolly push towards product, shallow depth of field"\n- "Aerial drone shot, descending spiral around subject"\n- "Handheld documentary style, authentic human connection"\n- "Macro lens extreme close-up, revealing intricate details"\n\nThông số Ánh sáng:\n- "Golden hour natural lighting, warm color temperature"\n- "Studio lighting setup, key light from left, soft shadows"\n- "Ambient forest lighting, dappled sunlight through leaves"\n- "High-key lighting, clean white background, minimal shadows"\n\nTham khảo Phong cách:\n- "Shot on RED camera, cinematic color grading"\n- "Documentary photography style, authentic moments"\n- "Apple commercial aesthetic, clean và minimalist"\n- "Nature documentary cinematography, David Attenborough style"\n```\n\n## 3. Tích hợp Quy trình Sản xuất\n\n### Lập kế hoạch Tiền kỳ:\n\n#### Phát triển Kịch bản phân cảnh:\n```\nCảnh 1: Thiết lập Môi trường (0-10s)\n- AI tạo: Bình minh trên rừng, tổng quan trang trại năng lượng mặt trời\n- Live Action: Không yêu cầu\n- Âm thanh: Âm thanh thiên nhiên xung quanh, nhạc nền đang lên\n\nCảnh 2: Xác định Vấn đề (10-20s)\n- AI tạo: Pin điện thoại hết, người dùng thất vọng\n- Live Action: Phản ứng của diễn viên (quay riêng)\n- Âm thanh: Lời dẫn tập trung vào vấn đề\n\nCảnh 3: Giới thiệu Giải pháp (20-35s)\n- AI tạo: Các cảnh quay chính của sản phẩm, demo sạc bằng năng lượng mặt trời\n- Live Action: Tương tác tay với sản phẩm\n- Âm thanh: Chuyển tiếp nhạc hứng khởi, lời dẫn giải pháp\n\nCảnh 4: Tích hợp Lối sống (35-50s)\n- AI tạo: Các kịch bản sử dụng khác nhau, bối cảnh thiên nhiên\n- Live Action: Các cảnh quay tích hợp diễn viên\n- Âm thanh: Lời chứng thực, nhạc tiếp tục\n\nCảnh 5: Kêu gọi Hành động (50-60s)\n- AI tạo: Các cảnh quay cuối cùng của sản phẩm, hoạt hình logo thương hiệu\n- Live Action: Không yêu cầu\n- Âm thanh: CTA mạnh mẽ, nhạc lên đến đỉnh điểm\n```\n\n### Thực hiện Tạo AI:\n\n#### Quy trình Sản xuất RunwayML:\n```\n# Cảnh 1: Mở đầu Môi trường\nPrompt 1: "Cinematic drone shot over solar panel farm at sunrise, golden hour lighting, environmental documentary style, 4K resolution, slow motion, inspiring mood"\n\nCài đặt Tạo:\n- Thời lượng: 4 giây\n- Độ phân giải: 1920x1080\n- Tốc độ khung hình: 24fps\n- Độ mạnh Phong cách: 0.8\n- Chuyển động Máy quay: Đẩy tới chậm\n\nPrompt 2: "Close-up macro shot của solar panel surface, light reflecting, energy visualization, scientific precision, clean tech aesthetic"\n\nCài đặt Tạo:\n- Thời lượng: 3 giây\n- Độ phân giải: 1920x1080\n- Tốc độ khung hình: 24fps\n- Độ mạnh Phong cách: 0.7\n- Chuyển động Máy quay: Tĩnh với zoom nhẹ\n```\n\n#### Quy trình Kiểm soát Chất lượng:\n```\nDanh sách Kiểm tra Đánh giá Tạo:\n1. Chất lượng Kỹ thuật:\n   - Độ phân giải đạt tiêu chuẩn phát sóng\n   - Không có lỗi AI có thể nhìn thấy\n   - Chuyển động mượt mà không giật\n   - Tốc độ khung hình nhất quán\n\n2. Sự phù hợp Sáng tạo:\n   - Phù hợp với tầm nhìn kịch bản phân cảnh\n   - Tâm trạng và tông màu phù hợp\n   - Tính nhất quán của thương hiệu\n   - Sức hấp dẫn của đối tượng mục tiêu\n\n3. Khả năng Tương thích Tích hợp:\n   - Tiềm năng chỉnh màu\n   - Khả năng đồng bộ âm thanh\n   - Khả năng chuyển tiếp\n   - Tích hợp live action\n```\n\n### Tích hợp Hậu kỳ:\n\n#### Quy trình Adobe After Effects:\n```\n# Nâng cao Cảnh quay AI:\n1. Nhập các clip do AI tạo ra ở chất lượng tối đa\n2. Chỉnh màu và phân loại màu:\n   - Khớp ánh sáng giữa các cảnh\n   - Nâng cao bảng màu thương hiệu\n   - Tạo giao diện điện ảnh\n\n3. Tích hợp đồ họa chuyển động:\n   - Lớp phủ văn bản hoạt hình\n   - Chú thích tính năng sản phẩm\n   - Hoạt hình logo thương hiệu\n   - Các yếu tố chuyển tiếp\n\n4. Nâng cao hiệu ứng hình ảnh:\n   - Hệ thống hạt để trực quan hóa năng lượng\n   - Lóa ống kính cho sạc năng lượng mặt trời\n   - Điều chỉnh độ sâu trường ảnh\n   - Tăng tốc độ để tạo hiệu ứng kịch tính\n```\n\n#### Lắp ráp Adobe Premiere Pro:\n```\n# Dòng thời gian Chỉnh sửa Cuối cùng:\nV3: Đồ họa chuyển động & Văn bản\nV2: Nội dung do AI tạo (Chính)\nV1: Tích hợp Live Action\nA1: Nhạc nền\nA2: Lời dẫn\nA3: Hiệu ứng âm thanh\nA4: Âm thanh xung quanh\n\n# Quy trình Chỉnh sửa:\n1. Cắt thô với cảnh quay AI thiết lập nhịp độ\n2. Đồng bộ âm thanh và chỉnh sửa nhạc\n3. Chỉnh màu lần đầu\n4. Tích hợp đồ họa chuyển động\n5. Thiết kế và trộn âm thanh\n6. Phân loại màu cuối cùng\n7. Tối ưu hóa xuất cho nhiều nền tảng\n```\n\n## 4. Tối ưu hóa Đa nền tảng\n\n### Thông số Định dạng:\n\n#### YouTube (Video chính - 60s):\n```\nĐộ phân giải: 1920x1080\nTốc độ khung hình: 24fps\nTốc độ bit: 15 Mbps\nÂm thanh: 48kHz, 320kbps\nTỷ lệ khung hình: 16:9\nKhông gian màu: Rec. 709\n```\n\n#### Instagram Feed (Vuông - 30s):\n```\nĐộ phân giải: 1080x1080\nTốc độ khung hình: 30fps\nTốc độ bit: 8 Mbps\nÂm thanh: 48kHz, 128kbps\nTỷ lệ khung hình: 1:1\nPhụ đề: Ghi cứng để xem không tiếng\n```\n\n#### TikTok/Instagram Stories (Dọc - 15s):\n```\nĐộ phân giải: 1080x1920\nTốc độ khung hình: 30fps\nTốc độ bit: 6 Mbps\nÂm thanh: 48kHz, 128kbps\nTỷ lệ khung hình: 9:16\nTối ưu hóa cho xem trên di động\n```\n\n### Chiến lược Thích ứng Nội dung:\n```\n# Video chính (60s) → Các đoạn cắt cho Mạng xã hội\n1. Xác định các khoảnh khắc quan trọng từ video chính\n2. Tạo thêm nội dung AI cho các chuyển tiếp\n3. Thích ứng nhịp độ cho các thuật toán nền tảng\n4. Thêm các yếu tố dành riêng cho nền tảng:\n   - Instagram: Các đoạn âm thanh thịnh hành\n   - TikTok: Lớp phủ văn bản, các đoạn cắt nhanh\n   - LinkedIn: Tông màu chuyên nghiệp, thời gian xem dài hơn\n```\n\n## 5. Phân tích & Tối ưu hóa Hiệu suất\n\n### Theo dõi Chỉ số Thành công:\n```\nChỉ số Tương tác:\n- Tỷ lệ hoàn thành xem theo nền tảng\n- Tỷ lệ nhấp chuột đến trang sản phẩm\n- Chỉ số chia sẻ và lan truyền trên mạng xã hội\n- Phân tích cảm xúc bình luận\n\nChỉ số Chuyển đổi:\n- Số lượt đăng ký đặt hàng trước từ video\n- Chi phí mỗi chuyển đổi theo nền tảng\n- Lợi tức trên chi tiêu quảng cáo (ROAS)\n- Khảo sát nâng cao nhận thức thương hiệu\n\nChỉ số Sản xuất:\n- Tiết kiệm thời gian so với sản xuất truyền thống\n- Giảm chi phí thông qua tạo AI\n- Tốc độ lặp lại và linh hoạt sáng tạo\n- Khả năng mở rộng khối lượng nội dung\n```\n\n### Quy trình Cải tiến Liên tục:\n```\n# Khung Thử nghiệm A/B:\n1. Tạo nhiều phiên bản video AI\n2. Thử nghiệm các đoạn mở đầu khác nhau\n3. Thay đổi nhịp độ và phong cách chỉnh sửa\n4. So sánh hiệu suất trên các nhóm nhân khẩu học\n5. Lặp lại dựa trên thông tin chi tiết từ dữ liệu\n\n# Tiến hóa Sáng tạo:\n1. Phân tích các yếu tố hoạt động tốt nhất\n2. Phát triển thư viện prompt cho các phong cách thành công\n3. Xây dựng các quy trình mẫu để tăng hiệu quả\n4. Mở rộng các cách tiếp cận thành công trên các chiến dịch\n```\n\n## 6. Mở rộng & Tự động hóa\n\n### Quy trình Sản xuất hàng loạt:\n```\n# Sản xuất Loạt Chiến dịch:\n1. Phát triển thư viện prompt thương hiệu chính\n2. Tạo các bố cục mẫu trong After Effects\n3. Thiết lập các LUT chỉnh màu nhất quán\n4. Xây dựng các quy trình render tự động\n5. Tiêu chuẩn hóa các định dạng giao hàng\n\n# Tích hợp Lịch Nội dung:\n1. Lên kế hoạch chủ đề video hàng tháng\n2. Tạo nội dung AI hàng loạt\n3. Tạo các thành phần mô-đun để trộn\n4. Duy trì thẩm mỹ thương hiệu nhất quán\n5. Tối ưu hóa cho các chiến dịch theo mùa\n```\n\n### Phân tích Chi phí-Lợi ích:\n```\nSản xuất Video Truyền thống:\n- Tiền kỳ: 40 giờ\n- Quay phim: 2 ngày (16 giờ)\n- Hậu kỳ: 60 giờ\n- Tổng cộng: 116 giờ\n- Chi phí ước tính: $15,000-25,000\n\nSản xuất được Nâng cao bởi AI:\n- Tiền kỳ: 20 giờ\n- Tạo AI: 8 giờ\n- Hậu kỳ: 30 giờ\n- Tổng cộng: 58 giờ\n- Chi phí ước tính: $3,000-5,000\n\nTiết kiệm: Giảm 50% thời gian, giảm 70% chi phí\nChất lượng: Có thể so sánh với truyền thống cho nhiều trường hợp sử dụng\nLinh hoạt: Lặp lại và biến thể không giới hạn\n```',
        requirements: [
          'Truy cập vào các nền tảng tạo video AI',
          'Chuyên môn về phần mềm chỉnh sửa video chuyên nghiệp',
          'Hiểu biết về các chiến lược marketing video',
          'Dự án sản xuất video chiến dịch hoàn chỉnh',
          'Theo dõi và phân tích các chỉ số hiệu suất',
        ],
        hints: [
          'Lập kế hoạch kịch bản phân cảnh cẩn thận trước khi tạo AI',
          'Tạo nhiều phiên bản để thử nghiệm A/B',
          'Tập trung vào việc tích hợp liền mạch với live action',
          'Tối ưu hóa các prompt để có phong cách hình ảnh nhất quán',
        ],
        expectedOutput:
          'Chiến dịch video marketing hoàn chỉnh với nội dung do AI tạo ra, hậu kỳ chuyên nghiệp và tối ưu hóa đa nền tảng',
      },
    ],
    realWorldApplications: [
      'Sản xuất video chiến dịch marketing',
      'Tạo nội dung mạng xã hội quy mô lớn',
      'Phát triển video giáo dục và đào tạo',
      'Trực quan hóa ý tưởng trong ngành giải trí',
      'Truyền thông doanh nghiệp và nội dung nội bộ',
    ],
    resources: [
      {
        title: 'Nền tảng Video RunwayML',
        url: 'https://runwayml.com',
        type: 'platform',
        description: 'Tạo video AI nâng cao với khả năng điện ảnh và các công cụ chuyên nghiệp',
      },
      {
        title: 'Cộng đồng Pika Labs',
        url: 'https://pika.art',
        type: 'platform',
        description: 'Nền tảng tạo video AI dựa trên cộng đồng với sự hợp tác sáng tạo',
      },
    ],
    caseStudies: [
      {
        title: 'Thành công Lan truyền của Chiến dịch Video AI',
        artist: 'Cơ quan Marketing, Nhóm Sản xuất Video',
        challenge:
          'Tạo chiến dịch marketing lan truyền cho startup công nghệ với ngân sách 5.000 đô la và thời hạn 1 tuần, yêu cầu nhiều định dạng video cho các nền tảng và nhân khẩu học khác nhau.',
        solution:
          'Triển khai quy trình tạo video AI với RunwayML và Pika Labs, tạo ra hơn 25 biến thể video trong 3 ngày. Sử dụng thử nghiệm A/B để tối ưu hóa nội dung cho thuật toán của mỗi nền tảng.',
        results:
          'Chiến dịch đạt hơn 15 triệu lượt xem trên các nền tảng, tăng 300% lưu lượng truy cập trang web, 200.000 đô la đơn đặt hàng trước. Nội dung do AI tạo ra vượt trội hơn quảng cáo video truyền thống 40% về tỷ lệ tương tác.',
        insights: [
          'Video AI cho phép lặp lại nhanh chóng không thể thực hiện được với sản xuất truyền thống',
          'Tối ưu hóa nhiều nền tảng rất quan trọng để thành công lan truyền',
          'Nội dung do AI tạo ra có thể vượt trội hơn sản xuất truyền thống khi được thực hiện đúng cách',
          'Tiết kiệm chi phí cho phép thử nghiệm A/B và tối ưu hóa rộng rãi',
        ],
      },
    ],
    vietnamContext: {
      title: 'Video Ngắn và Cuộc cách mạng AI tại Việt Nam',
      content: [
        'Sự bùng nổ của TikTok và YouTube Shorts đã tạo ra một nhu cầu khổng lồ về nội dung video ngắn tại Việt Nam. Các công cụ AI giúp các nhà sáng tạo và thương hiệu đáp ứng nhu cầu này một cách hiệu quả.',
        'Các agency quảng cáo tại Việt Nam đang sử dụng AI để tạo ra các phiên bản quảng cáo khác nhau một cách nhanh chóng để thử nghiệm A/B và tìm ra thông điệp hiệu quả nhất.',
        'Việc tạo video bằng AI cũng mở ra cơ hội cho các doanh nghiệp nhỏ và vừa tạo ra các video quảng cáo chuyên nghiệp mà không cần ngân sách lớn.',
      ],
    },
    careerConnect: {
      name: 'Anh Denis Đặng',
      title: 'Giám đốc Sáng tạo',
      company: 'Đạo diễn MV & Phim',
      imageUrl: 'https://i.pravatar.cc/150?u=denis-dang',
      quote:
        'AI là một thế giới hình ảnh vô tận. Nó cho phép mình phác thảo những khung hình, những bối cảnh mà trước đây chỉ có trong tưởng tượng. Nó không thay thế đạo diễn, mà trở thành một siêu trợ lý cho trí tưởng tượng bay xa.',
    },
    quizzes: [
      {
        question: 'Nền tảng nào sau đây được biết đến với khả năng tạo video từ văn bản (text-to-video)?',
        options: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Pika Labs', 'Figma'],
        correctAnswerIndex: 2,
        explanation:
          'Pika Labs và RunwayML là hai trong số các nền tảng hàng đầu cho phép người dùng tạo ra các đoạn video ngắn từ các câu lệnh văn bản, mở ra một phương pháp sản xuất video hoàn toàn mới.',
      },
    ],
  },
];
