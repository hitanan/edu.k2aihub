import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

export interface AiArtCreativeTechLesson extends BaseLessonData {
  tools: string[];
  artType: string;
}

export const aiArtCreativeTechLessons: AiArtCreativeTechLesson[] = [
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
        solution: `# Quy trình Tạo nghệ thuật AI Chuyên nghiệp

## 1. Lập kế hoạch & Lên ý tưởng Dự án

### Phát triển Bản tóm tắt Sáng tạo:
- **Loại dự án:** Thiết kế nhận diện thương hiệu cho startup thời trang bền vững
- **Đối tượng mục tiêu:** Thế hệ Millennials và Gen Z có ý thức về môi trường
- **Phong cách nghệ thuật:** Tối giản hiện đại với các yếu tố hữu cơ
- **Bảng màu:** Tông màu đất, xanh lá cây rừng, màu trung tính ấm
- **Tâm trạng/Cảm xúc:** Tươi mới, tự nhiên, tinh tế, lạc quan
- **Sản phẩm giao:** Các biến thể logo, hình ảnh thương hiệu, hình ảnh marketing
- **Thời gian:** 2 tuần lên ý tưởng, 1 tuần tạo ảnh, 1 tuần tinh chỉnh

### Nghiên cứu & Thu thập Cảm hứng:
- **Tài liệu tham khảo trực quan:** Thiết kế Scandinavia, chủ nghĩa tối giản Nhật Bản, nhiếp ảnh thực vật
- **Phân tích đối thủ cạnh tranh:** Thẩm mỹ thương hiệu của Patagonia, Everlane, Reformation
- **Nghiên cứu xu hướng:** Xu hướng hình ảnh thời trang bền vững hiện tại
- **Bối cảnh văn hóa:** Biểu tượng môi trường, họa tiết lấy cảm hứng từ thiên nhiên

## 2. Lựa chọn Nền tảng & Phân tích Khả năng

### Midjourney (Dựa trên Discord):
**Điểm mạnh:**
- Diễn giải nghệ thuật và nâng cao sáng tạo đặc biệt
- Hiệu suất mạnh mẽ với các khái niệm trừu tượng và phong cách nghệ thuật
- Cộng đồng và nguồn cảm hứng chia sẻ tuyệt vời
- Làm chủ ánh sáng và bố cục tự nhiên

**Trường hợp sử dụng tốt nhất:**
- Tác phẩm nghệ thuật ý tưởng và mood board
- Ý tưởng logo nghệ thuật và hình ảnh thương hiệu
- Biểu diễn trừu tượng các giá trị thương hiệu
- Minh họa cách điệu và hình ảnh marketing

**Tích hợp quy trình:**
\`\`\`
/imagine sustainable fashion logo, minimalist design, leaf motif, earth tones, clean typography --ar 1:1 --stylize 750
/imagine eco-friendly clothing brand imagery, natural textures, organic shapes, modern minimalism --ar 16:9 --stylize 500
\`\`\`

### DALL-E 3 (OpenAI):
**Điểm mạnh:**
- Diễn giải prompt chính xác và độ chính xác chi tiết
- Tích hợp văn bản và xử lý kiểu chữ xuất sắc
- Biểu diễn nhân vật và đối tượng nhất quán
- Đầu ra độ phân giải cao phù hợp để in

**Trường hợp sử dụng tốt nhất:**
- Mockup sản phẩm và render thực tế
- Tài liệu marketing với yêu cầu văn bản cụ thể
- Minh họa chi tiết với thông số kỹ thuật chính xác
- Ứng dụng thương hiệu đòi hỏi độ chính xác của văn bản

**Tích hợp quy trình:**
\`\`\`
Prompt: "Create a sophisticated logo for 'EcoThreads' sustainable fashion brand. Modern sans-serif typography in forest green, integrated with a stylized leaf icon. Clean, minimalist design on white background. Professional brand identity suitable for luxury eco-fashion."
\`\`\`

### Stable Diffusion (Mã nguồn mở):
**Điểm mạnh:**
- Toàn quyền kiểm soát sáng tạo và tùy chỉnh
- Hiệu quả về chi phí cho việc tạo số lượng lớn
- Khả năng tinh chỉnh cho các phong cách thương hiệu cụ thể
- Tích hợp với các quy trình tùy chỉnh và tự động hóa

**Trường hợp sử dụng tốt nhất:**
- Tạo nội dung quy mô lớn
- Phát triển phong cách nhất quán trên nhiều tài sản
- Đào tạo mô hình tùy chỉnh cho thẩm mỹ cụ thể của thương hiệu
- Kỹ thuật thử nghiệm và phát triển phong cách

## 3. Khung Prompt Engineering Nâng cao

### Mẫu Cấu trúc Prompt:
\`\`\`
[CHỦ THỂ] + [MÔ TẢ PHONG CÁCH] + [BỐ CỤC] + [ÁNH SÁNG] + [BẢNG MÀU] + [TÂM TRẠNG] + [THAM SỐ KỸ THUẬT]
\`\`\`

### Thư viện Prompt dành riêng cho Thương hiệu:

#### Tạo Logo:
\`\`\`
Prompt cơ bản: "Minimalist logo design for sustainable fashion brand"

Biến thể Phong cách:
- "...in the style of Dieter Rams, geometric precision, golden ratio composition"
- "...inspired by Scandinavian design principles, clean lines, functional beauty"
- "...with Japanese minimalism influence, negative space mastery, zen aesthetic"

Tích hợp Yếu tố:
- "...incorporating subtle leaf motif, organic curves, natural symbolism"
- "...featuring intertwined threads, textile inspiration, craft heritage"
- "...with growth spiral pattern, sustainability metaphor, evolution concept"

Thông số Kỹ thuật:
- "...vector-style clarity, scalable design, print-ready quality"
- "...professional brand identity, versatile applications, timeless appeal"
- "...monochrome version compatible, high contrast, readable at small sizes"
\`\`\`

#### Hình ảnh Thương hiệu:
\`\`\`
Phong cách Nhiếp ảnh Sản phẩm:
"Sustainable fashion photography, natural lighting, organic textures, earth tone palette, minimalist composition, shot with medium format camera, shallow depth of field, lifestyle context, environmentally conscious aesthetic"

Hình ảnh Marketing:
"Eco-fashion marketing campaign imagery, diverse models in natural settings, authentic moments, soft golden hour lighting, sustainable lifestyle themes, genuine emotions, environmental harmony"

Thiết kế Họa tiết & Vải:
"Organic textile patterns inspired by nature, botanical motifs, sustainable fashion applications, seamless repeat design, modern interpretation of traditional crafts, earth-friendly color palette"
\`\`\`

### Kỹ thuật Tinh chỉnh Prompt:

#### Quy trình Phát triển Lặp lại:
1. **Tạo cơ bản:** Bắt đầu với prompt ý tưởng rộng
2. **Tinh chỉnh Phong cách:** Thêm các mô tả phong cách nghệ thuật cụ thể
3. **Kiểm soát Bố cục:** Tích hợp các thông số khung và bố cục
4. **Nâng cao Chi tiết:** Chỉ định kết cấu, vật liệu và các chi tiết nhỏ
5. **Tối ưu hóa Tâm trạng:** Điều chỉnh tông màu cảm xúc và các yếu tố không khí

#### Prompt Engineering Nâng cao:
\`\`\`
# Ví dụ Prompt có Trọng số:
"sustainable fashion logo design::3, minimalist aesthetic::2, leaf motif::1.5, forest green color::2, scandinavian design influence::1, professional brand identity::3, vector-style clarity::2"

# Prompt Phủ định:
"--no cluttered design, excessive details, outdated typography, artificial colors, corporate sterility, fast fashion aesthetic"

# Tích hợp Chuyển đổi Phong cách:
"in the style of [specific designer/brand], maintaining original sustainable values, adapted for modern applications"
\`\`\`

## 4. Quy trình Tạo ảnh & Kiểm soát Chất lượng

### Chiến lược Tạo ảnh Đa nền tảng:

#### Giai đoạn 1: Khám phá Ý tưởng (Midjourney)
- Tạo 20-30 biến thể ý tưởng đa dạng
- Khám phá các phong cách và cách tiếp cận nghệ thuật khác nhau
- Xác định các hướng hình ảnh mạnh nhất
- Tạo mood board và bộ sưu tập cảm hứng

#### Giai đoạn 2: Phát triển Chính xác (DALL-E 3)
- Tinh chỉnh các ý tưởng đã chọn với các yêu cầu cụ thể
- Tạo các phiên bản độ phân giải cao để xem xét chi tiết
- Kiểm tra tích hợp văn bản và ứng dụng kiểu chữ
- Tạo nhiều biến thể kích thước và định dạng

#### Giai đoạn 3: Sản xuất Số lượng lớn (Stable Diffusion)
- Sản xuất tài sản cuối cùng với số lượng yêu cầu
- Tạo các biến thể nhất quán cho các ứng dụng khác nhau
- Tạo hệ thống thiết kế có thể mở rộng
- Tự động hóa các tác vụ tạo ảnh lặp đi lặp lại

### Khung Đánh giá Chất lượng:

#### Danh sách Kiểm tra Chất lượng Kỹ thuật:
- **Độ phân giải:** Tối thiểu 2048x2048 cho các ứng dụng in ấn
- **Độ rõ nét:** Chi tiết sắc nét, không có lỗi AI hoặc biến dạng
- **Độ chính xác màu sắc:** Nhất quán với thông số kỹ thuật bảng màu thương hiệu
- **Khả năng mở rộng:** Có thể đọc và nhận dạng ở nhiều kích cỡ khác nhau
- **Định dạng tệp:** Định dạng phù hợp cho mục đích sử dụng (PNG, SVG, PDF)

#### Đánh giá Sự phù hợp với Thương hiệu:
- **Tính nhất quán về Phong cách:** Phù hợp với thẩm mỹ thương hiệu đã thiết lập
- **Sự rõ ràng của Thông điệp:** Truyền đạt các giá trị thương hiệu dự định
- **Sức hấp dẫn của Đối tượng mục tiêu:** Phù hợp với nghiên cứu nhân khẩu học
- **Sự khác biệt cạnh tranh:** Độc đáo trong bối cảnh thị trường
- **Tính linh hoạt:** Hoạt động trên nhiều ứng dụng

## 5. Hậu kỳ & Nâng cao Chuyên nghiệp

### Tích hợp Adobe Photoshop:

#### Quy trình Tinh chỉnh Nghệ thuật AI:
\`\`\`
1. Nhập hình ảnh do AI tạo ra ở độ phân giải tối đa
2. Dọn dẹp và tách nền:
   - Xóa các lỗi không mong muốn
   - Hoàn thiện việc phát hiện cạnh
   - Dọn dẹp các yếu tố nền

3. Chỉnh màu và phù hợp với thương hiệu:
   - Điều chỉnh bảng màu theo thông số kỹ thuật chính xác của thương hiệu
   - Đảm bảo tính nhất quán trên các tài sản được tạo ra
   - Tối ưu hóa cho các phương tiện đầu ra khác nhau

4. Nâng cao chi tiết:
   - Làm sắc nét các yếu tố quan trọng
   - Thêm kết cấu tinh tế để tạo sự chân thực
   - Nâng cao khả năng đọc của kiểu chữ

5. Tối ưu hóa định dạng:
   - Tạo nhiều phiên bản tệp (web, in, mạng xã hội)
   - Tạo phiên bản vector khi thích hợp
   - Chuẩn bị tài sản cho các ứng dụng khác nhau
\`\`\`

#### Quy trình Vector hóa Logo:
\`\`\`
# Quy trình từ Photoshop sang Illustrator:
1. Đồ lại logo do AI tạo bằng Image Trace
2. Tinh chỉnh thủ công các đường vector
3. Tái tạo kiểu chữ bằng các phông chữ chuyên nghiệp
4. Tiêu chuẩn hóa bảng màu
5. Xuất nhiều định dạng (AI, EPS, PDF, SVG)

# Thay thế: Prompt tạo vector trực tiếp
"vector logo design, clean lines, scalable graphics, Adobe Illustrator style, professional brand identity"
\`\`\`

### Hệ thống hóa Tài sản Thương hiệu:

#### Tạo Thư viện Tài sản Toàn diện:
\`\`\`
Biến thể Logo:
- Logo chính (đủ màu)
- Logo phụ (một màu)
- Dấu hiệu logo (chỉ biểu tượng)
- Bố cục ngang
- Bố cục xếp chồng
- Phiên bản chữ lồng

Biến thể Màu sắc:
- Đủ màu trên nền trắng
- Đủ màu trên nền tối
- Đen và trắng
- Đảo ngược (trắng trên nền tối)
- Ứng dụng một màu

Tối ưu hóa Kích thước:
- Định dạng lớn (biển quảng cáo, bảng hiệu)
- Định dạng trung bình (bao bì, marketing)
- Định dạng nhỏ (danh thiếp, favicon)
- Tối ưu hóa kỹ thuật số (web, mạng xã hội)
\`\`\`

## 6. Cân nhắc Đạo đức & Thực hành Tốt nhất

### Bản quyền & Sở hữu Trí tuệ:
- **Sáng tạo Nguyên bản:** Đảm bảo nội dung do AI tạo ra có tính biến đổi
- **Ghi công Tham khảo:** Ghi công các nguồn cảm hứng một cách thích hợp
- **Quyền sử dụng Thương mại:** Xác minh các điều khoản của nền tảng cho các ứng dụng thương mại
- **Tính nguyên bản của Phong cách:** Tránh sao chép trực tiếp các tác phẩm nghệ thuật hiện có

### Tiêu chuẩn Chuyên nghiệp:
- **Giao tiếp với Khách hàng:** Giải thích rõ ràng quy trình được hỗ trợ bởi AI
- **Đảm bảo Chất lượng:** Đánh giá và tinh chỉnh thủ công tất cả các sản phẩm đầu ra
- **Quy trình Sửa đổi:** Cải tiến lặp đi lặp lại dựa trên phản hồi
- **Tiêu chuẩn Giao hàng:** Trình bày chuyên nghiệp các tài sản cuối cùng

### Nguyên tắc Thiết kế Bền vững:
- **Thẩm mỹ Vượt thời gian:** Tạo ra các thiết kế không nhanh chóng lỗi thời
- **Ứng dụng Linh hoạt:** Tối đa hóa tiện ích trên các phương tiện khác nhau
- **Sản xuất Hiệu quả:** Giảm thiểu lãng phí tài nguyên thông qua việc tạo thông minh
- **Nhạy cảm Văn hóa:** Tôn trọng các giá trị môi trường và xã hội

## 7. Giao hàng & Tài liệu Dự án

### Gói Giao hàng cho Khách hàng:
\`\`\`
Thư viện Tài sản Cuối cùng:
├── Logos/
│   ├── Primary_Logo_Color.png (300 DPI)
│   ├── Primary_Logo_Vector.svg
│   ├── Secondary_Logo_Variations/
│   └── Usage_Guidelines.pdf
├── Brand_Imagery/
│   ├── Hero_Images/ (sẵn sàng cho web và in)
│   ├── Product_Backgrounds/
│   ├── Pattern_Library/
│   └── Marketing_Templates/
├── Documentation/
│   ├── Brand_Style_Guide.pdf
│   ├── AI_Generation_Process.pdf
│   ├── Technical_Specifications.pdf
│   └── Usage_Rights_Documentation.pdf
└── Source_Files/
    ├── AI_Prompts_Library.txt
    ├── Photoshop_Working_Files/
    └── Generation_History/
\`\`\`

### Tài liệu Quy trình:
- **Thư viện Prompt:** Bộ sưu tập đầy đủ các prompt hoạt động
- **Nhật ký Tạo ảnh:** Ghi lại các lần lặp lại và quyết định
- **Chỉ số Chất lượng:** Điểm đánh giá và ghi chú cải tiến
- **Hướng dẫn Phong cách:** Hướng dẫn về tính nhất quán trong việc tạo AI trong tương lai`,
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
    faqs: [
      {
        question: 'Sự khác biệt chính giữa Midjourney, DALL-E 3 và Stable Diffusion là gì?',
        answer:
          'Midjourney mạnh về diễn giải nghệ thuật và sáng tạo. DALL-E 3 vượt trội trong việc tuân thủ prompt chính xác và tạo văn bản. Stable Diffusion cung cấp khả năng tùy chỉnh và kiểm soát tối đa vì là mã nguồn mở.',
      },
      {
        question: 'Làm thế nào để tránh các vấn đề về bản quyền khi sử dụng ảnh do AI tạo ra cho mục đích thương mại?',
        answer:
          'Hãy đảm bảo tác phẩm của bạn có tính "biến đổi" đủ để được coi là nguyên gốc, kiểm tra giấy phép thương mại của nền tảng bạn sử dụng, và tránh sao chép trực tiếp phong cách của các nghệ sĩ đang còn sống hoặc các tác phẩm có bản quyền.',
      },
      {
        question: '"Prompt có trọng số" (weighted prompt) hoạt động như thế nào?',
        answer:
          'Prompt có trọng số cho phép bạn gán mức độ quan trọng khác nhau cho các phần khác nhau của prompt. Ví dụ, trong Midjourney, bạn có thể sử dụng `::` theo sau là một số (ví dụ: `red car::2 blue background::1`) để nhấn mạnh tầm quan trọng của "red car" hơn "blue background".',
      },
      {
        question: 'Tôi có cần kỹ năng nghệ thuật để sử dụng các công cụ này không?',
        answer:
          'Không cần thiết, nhưng có kiến thức cơ bản về bố cục, màu sắc và lý thuyết nghệ thuật sẽ giúp bạn tạo ra các prompt tốt hơn và đạt được kết quả ấn tượng hơn. Các công cụ này là để hỗ trợ sự sáng tạo, không phải thay thế nó.',
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
        solution: `# Quy trình Sản xuất Video Marketing được hỗ trợ bởi AI

## 1. Chiến lược Chiến dịch & Phát triển Sáng tạo

### Bản tóm tắt Dự án: Ra mắt Sản phẩm Công nghệ Bền vững
- **Sản phẩm:** Tai nghe không dây chạy bằng năng lượng mặt trời
- **Đối tượng mục tiêu:** Những người đam mê công nghệ có ý thức về môi trường, tuổi 25-40
- **Mục tiêu Chiến dịch:** Thúc đẩy doanh số đặt hàng trước và nhận thức về thương hiệu
- **Loại Video:** Video chính (60s), các đoạn cắt cho mạng xã hội (15s, 30s), demo sản phẩm
- **Phân phối:** Website, YouTube, Instagram, TikTok, LinkedIn

### Phát triển Ý tưởng Sáng tạo:
- **Chủ đề:** "Năng lượng từ Thiên nhiên, Âm thanh từ Sáng tạo"
- **Phong cách Hình ảnh:** Công nghệ sạch, hiện đại, tích hợp với thiên nhiên
- **Cấu trúc Tường thuật:** Vấn đề → Giải pháp → Lợi ích → Kêu gọi Hành động
- **Tâm trạng:** Truyền cảm hứng, đổi mới, có ý thức về môi trường

## 2. Chiến lược Tạo Video AI

### Lựa chọn Nền tảng & Quy trình:

#### RunwayML (Nền tảng chính):
**Khả năng:**
- Tạo cảnh quay điện ảnh chất lượng cao
- Văn bản thành video với kiểm soát cảnh chi tiết
- Hoạt hình từ hình ảnh sang video
- Chuyển động máy quay và các kỹ thuật điện ảnh
- Tạo nền màn hình xanh

**Quy trình Sản xuất:**
\`\`\`
Phát triển Kịch bản phân cảnh:
1. Mở đầu: Bình minh trên rừng, các tấm pin mặt trời lấp lánh
   Prompt: "Cinematic sunrise over misty forest, solar panels catching golden light, drone shot, 4K quality, nature documentary style"

2. Giới thiệu Sản phẩm: Tai nghe hiện ra từ ánh sáng
   Prompt: "High-end product photography, wireless earbuds emerging from particles of light, studio lighting, premium tech aesthetic, macro lens detail"

3. Tích hợp Lối sống: Mọi người sử dụng tai nghe trong thiên nhiên
   Prompt: "Young professionals hiking, wearing sleek earbuds, natural lighting, active lifestyle, mountain backdrop, authentic moments"

4. Trình diễn Công nghệ: Hoạt hình sạc bằng năng lượng mặt trời
   Prompt: "Micro-cinematography of solar charging process, energy visualization, clean tech animation, scientific precision, futuristic aesthetic"
\`\`\`

#### Pika Labs (Nội dung hỗ trợ):
**Trường hợp sử dụng:**
- Các đoạn cắt nhanh cho mạng xã hội
- Hoạt hình văn bản động
- Nêu bật các tính năng sản phẩm
- Các yếu tố chuyển tiếp

### Prompt Engineering Nâng cao cho Video:

#### Tích hợp Ngôn ngữ Điện ảnh:
\`\`\`
Chuyển động Máy quay:
- "Smooth dolly push towards product, shallow depth of field"
- "Aerial drone shot, descending spiral around subject"
- "Handheld documentary style, authentic human connection"
- "Macro lens extreme close-up, revealing intricate details"

Thông số Ánh sáng:
- "Golden hour natural lighting, warm color temperature"
- "Studio lighting setup, key light from left, soft shadows"
- "Ambient forest lighting, dappled sunlight through leaves"
- "High-key lighting, clean white background, minimal shadows"

Tham khảo Phong cách:
- "Shot on RED camera, cinematic color grading"
- "Documentary photography style, authentic moments"
- "Apple commercial aesthetic, clean và minimalist"
- "Nature documentary cinematography, David Attenborough style"
\`\`\`

## 3. Tích hợp Quy trình Sản xuất

### Lập kế hoạch Tiền kỳ:

#### Phát triển Kịch bản phân cảnh:
\`\`\`
Cảnh 1: Thiết lập Môi trường (0-10s)
- AI tạo: Bình minh trên rừng, tổng quan trang trại năng lượng mặt trời
- Live Action: Không yêu cầu
- Âm thanh: Âm thanh thiên nhiên xung quanh, nhạc nền đang lên

Cảnh 2: Xác định Vấn đề (10-20s)
- AI tạo: Pin điện thoại hết, người dùng thất vọng
- Live Action: Phản ứng của diễn viên (quay riêng)
- Âm thanh: Lời dẫn tập trung vào vấn đề

Cảnh 3: Giới thiệu Giải pháp (20-35s)
- AI tạo: Các cảnh quay chính của sản phẩm, demo sạc bằng năng lượng mặt trời
- Live Action: Tương tác tay với sản phẩm
- Âm thanh: Chuyển tiếp nhạc hứng khởi, lời dẫn giải pháp

Cảnh 4: Tích hợp Lối sống (35-50s)
- AI tạo: Các kịch bản sử dụng khác nhau, bối cảnh thiên nhiên
- Live Action: Các cảnh quay tích hợp diễn viên
- Âm thanh: Lời chứng thực, nhạc tiếp tục

Cảnh 5: Kêu gọi Hành động (50-60s)
- AI tạo: Các cảnh quay cuối cùng của sản phẩm, hoạt hình logo thương hiệu
- Live Action: Không yêu cầu
- Âm thanh: CTA mạnh mẽ, nhạc lên đến đỉnh điểm
\`\`\`

### Thực hiện Tạo AI:

#### Quy trình Sản xuất RunwayML:
\`\`\`
# Cảnh 1: Mở đầu Môi trường
Prompt 1: "Cinematic drone shot over solar panel farm at sunrise, golden hour lighting, environmental documentary style, 4K resolution, slow motion, inspiring mood"

Cài đặt Tạo:
- Thời lượng: 4 giây
- Độ phân giải: 1920x1080
- Tốc độ khung hình: 24fps
- Độ mạnh Phong cách: 0.8
- Chuyển động Máy quay: Đẩy tới chậm

Prompt 2: "Close-up macro shot của solar panel surface, light reflecting, energy visualization, scientific precision, clean tech aesthetic"

Cài đặt Tạo:
- Thời lượng: 3 giây
- Độ phân giải: 1920x1080
- Tốc độ khung hình: 24fps
- Độ mạnh Phong cách: 0.7
- Chuyển động Máy quay: Tĩnh với zoom nhẹ
\`\`\`

#### Quy trình Kiểm soát Chất lượng:
\`\`\`
Danh sách Kiểm tra Đánh giá Tạo:
1. Chất lượng Kỹ thuật:
   - Độ phân giải đạt tiêu chuẩn phát sóng
   - Không có lỗi AI có thể nhìn thấy
   - Chuyển động mượt mà không giật
   - Tốc độ khung hình nhất quán

2. Sự phù hợp Sáng tạo:
   - Phù hợp với tầm nhìn kịch bản phân cảnh
   - Tâm trạng và tông màu phù hợp
   - Tính nhất quán của thương hiệu
   - Sức hấp dẫn của đối tượng mục tiêu

3. Khả năng Tương thích Tích hợp:
   - Tiềm năng chỉnh màu
   - Khả năng đồng bộ âm thanh
   - Khả năng chuyển tiếp
   - Tích hợp live action
\`\`\`

### Tích hợp Hậu kỳ:

#### Quy trình Adobe After Effects:
\`\`\`
# Nâng cao Cảnh quay AI:
1. Nhập các clip do AI tạo ra ở chất lượng tối đa
2. Chỉnh màu và phân loại màu:
   - Khớp ánh sáng giữa các cảnh
   - Nâng cao bảng màu thương hiệu
   - Tạo giao diện điện ảnh

3. Tích hợp đồ họa chuyển động:
   - Lớp phủ văn bản hoạt hình
   - Chú thích tính năng sản phẩm
   - Hoạt hình logo thương hiệu
   - Các yếu tố chuyển tiếp

4. Nâng cao hiệu ứng hình ảnh:
   - Hệ thống hạt để trực quan hóa năng lượng
   - Lóa ống kính cho sạc năng lượng mặt trời
   - Điều chỉnh độ sâu trường ảnh
   - Tăng tốc độ để tạo hiệu ứng kịch tính
\`\`\`

#### Lắp ráp Adobe Premiere Pro:
\`\`\`
# Dòng thời gian Chỉnh sửa Cuối cùng:
V3: Đồ họa chuyển động & Văn bản
V2: Nội dung do AI tạo (Chính)
V1: Tích hợp Live Action
A1: Nhạc nền
A2: Lời dẫn
A3: Hiệu ứng âm thanh
A4: Âm thanh xung quanh

# Quy trình Chỉnh sửa:
1. Cắt thô với cảnh quay AI thiết lập nhịp độ
2. Đồng bộ âm thanh và chỉnh sửa nhạc
3. Chỉnh màu lần đầu
4. Tích hợp đồ họa chuyển động
5. Thiết kế và trộn âm thanh
6. Phân loại màu cuối cùng
7. Tối ưu hóa xuất cho nhiều nền tảng
\`\`\`

## 4. Tối ưu hóa Đa nền tảng

### Thông số Định dạng:

#### YouTube (Video chính - 60s):
\`\`\`
Độ phân giải: 1920x1080
Tốc độ khung hình: 24fps
Tốc độ bit: 15 Mbps
Âm thanh: 48kHz, 320kbps
Tỷ lệ khung hình: 16:9
Không gian màu: Rec. 709
\`\`\`

#### Instagram Feed (Vuông - 30s):
\`\`\`
Độ phân giải: 1080x1080
Tốc độ khung hình: 30fps
Tốc độ bit: 8 Mbps
Âm thanh: 48kHz, 128kbps
Tỷ lệ khung hình: 1:1
Phụ đề: Ghi cứng để xem không tiếng
\`\`\`

#### TikTok/Instagram Stories (Dọc - 15s):
\`\`\`
Độ phân giải: 1080x1920
Tốc độ khung hình: 30fps
Tốc độ bit: 6 Mbps
Âm thanh: 48kHz, 128kbps
Tỷ lệ khung hình: 9:16
Tối ưu hóa cho xem trên di động
\`\`\`

### Chiến lược Thích ứng Nội dung:
\`\`\`
# Video chính (60s) → Các đoạn cắt cho Mạng xã hội
1. Xác định các khoảnh khắc quan trọng từ video chính
2. Tạo thêm nội dung AI cho các chuyển tiếp
3. Thích ứng nhịp độ cho các thuật toán nền tảng
4. Thêm các yếu tố dành riêng cho nền tảng:
   - Instagram: Các đoạn âm thanh thịnh hành
   - TikTok: Lớp phủ văn bản, các đoạn cắt nhanh
   - LinkedIn: Tông màu chuyên nghiệp, thời gian xem dài hơn
\`\`\`

## 5. Phân tích & Tối ưu hóa Hiệu suất

### Theo dõi Chỉ số Thành công:
\`\`\`
Chỉ số Tương tác:
- Tỷ lệ hoàn thành xem theo nền tảng
- Tỷ lệ nhấp chuột đến trang sản phẩm
- Chỉ số chia sẻ và lan truyền trên mạng xã hội
- Phân tích cảm xúc bình luận

Chỉ số Chuyển đổi:
- Số lượt đăng ký đặt hàng trước từ video
- Chi phí mỗi chuyển đổi theo nền tảng
- Lợi tức trên chi tiêu quảng cáo (ROAS)
- Khảo sát nâng cao nhận thức thương hiệu

Chỉ số Sản xuất:
- Tiết kiệm thời gian so với sản xuất truyền thống
- Giảm chi phí thông qua tạo AI
- Tốc độ lặp lại và linh hoạt sáng tạo
- Khả năng mở rộng khối lượng nội dung
\`\`\`

### Quy trình Cải tiến Liên tục:
\`\`\`
# Khung Thử nghiệm A/B:
1. Tạo nhiều phiên bản video AI
2. Thử nghiệm các đoạn mở đầu khác nhau
3. Thay đổi nhịp độ và phong cách chỉnh sửa
4. So sánh hiệu suất trên các nhóm nhân khẩu học
5. Lặp lại dựa trên thông tin chi tiết từ dữ liệu

# Tiến hóa Sáng tạo:
1. Phân tích các yếu tố hoạt động tốt nhất
2. Phát triển thư viện prompt cho các phong cách thành công
3. Xây dựng các quy trình mẫu để tăng hiệu quả
4. Mở rộng các cách tiếp cận thành công trên các chiến dịch
\`\`\`

## 6. Mở rộng & Tự động hóa

### Quy trình Sản xuất hàng loạt:
\`\`\`
# Sản xuất Loạt Chiến dịch:
1. Phát triển thư viện prompt thương hiệu chính
2. Tạo các bố cục mẫu trong After Effects
3. Thiết lập các LUT chỉnh màu nhất quán
4. Xây dựng các quy trình render tự động
5. Tiêu chuẩn hóa các định dạng giao hàng

# Tích hợp Lịch Nội dung:
1. Lên kế hoạch chủ đề video hàng tháng
2. Tạo nội dung AI hàng loạt
3. Tạo các thành phần mô-đun để trộn
4. Duy trì thẩm mỹ thương hiệu nhất quán
5. Tối ưu hóa cho các chiến dịch theo mùa
\`\`\`

### Phân tích Chi phí-Lợi ích:
\`\`\`
Sản xuất Video Truyền thống:
- Tiền kỳ: 40 giờ
- Quay phim: 2 ngày (16 giờ)
- Hậu kỳ: 60 giờ
- Tổng cộng: 116 giờ
- Chi phí ước tính: $15,000-25,000

Sản xuất được Nâng cao bởi AI:
- Tiền kỳ: 20 giờ
- Tạo AI: 8 giờ
- Hậu kỳ: 30 giờ
- Tổng cộng: 58 giờ
- Chi phí ước tính: $3,000-5,000

Tiết kiệm: Giảm 50% thời gian, giảm 70% chi phí
Chất lượng: Có thể so sánh với truyền thống cho nhiều trường hợp sử dụng
Linh hoạt: Lặp lại và biến thể không giới hạn
\`\`\``,
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

export const aiArtCreativeTechModuleData: ModuleData = {
  id: K2Module.AIArtCreativeTech,
  title: 'AI Art & Creative Technology',
  subtitle: 'AI sáng tạo',
  description: 'Master AI tools như Midjourney, DALL-E, Stable Diffusion',
  category: 'creative',
  icon: '🎨',
  color: 'from-pink-600 to-rose-600',
  duration: '8-10 giờ',
  level: 'Trung bình',
  features: ['Midjourney Pro', 'Video Generation', 'Creative Workflows', 'Commercial Use'],
  prerequisites: ['Basic computer skills', 'Creative interest', 'Understanding của digital media'],
  objectives: [
    'Nắm vững các công cụ tạo nghệ thuật AI hàng đầu như Midjourney, DALL-E và Stable Diffusion.',
    "Phát triển kỹ năng 'prompt engineering' để tạo ra các tác phẩm hình ảnh và video chất lượng cao.",
    'Tích hợp quy trình làm việc AI vào các dự án sáng tạo chuyên nghiệp.',
    'Hiểu rõ các ứng dụng thương mại và các cân nhắc về đạo đức của nghệ thuật AI.',
  ],
  careerOutcomes: [
    'AI Artist / Creative Technologist',
    'Chuyên gia Thiết kế đồ họa với AI',
    'Nhà sản xuất Video và Đồ họa chuyển động',
    'Chuyên gia Prompt Engineer',
    'Giám đốc Sáng tạo trong các dự án sử dụng AI',
  ],
  industryApplications: [
    { name: 'Quảng cáo và Marketing', description: 'Tạo chiến dịch hình ảnh và video.' },
    { name: 'Giải trí', description: 'Phát triển concept art, kịch bản hình ảnh, và hiệu ứng đặc biệt.' },
    { name: 'Thiết kế sản phẩm', description: 'Trực quan hóa sản phẩm và tạo mẫu nhanh.' },
    { name: 'Thương mại điện tử', description: 'Tạo hình ảnh sản phẩm và nội dung marketing.' },
    { name: 'Truyền thông và Xuất bản', description: 'Minh họa cho bài viết và nội dung số.' },
  ],
  marketDemand: {
    averageSalary: '70-120 triệu VND/năm',
    jobGrowth: '35%',
    hireDemand: 'Cao',
  },
  relatedModules: [],
  lessons: aiArtCreativeTechLessons,
};
