import { BaseLessonData } from '@/types/lesson-base';

export interface CreativeDesignLesson extends BaseLessonData {
  tool?: string;
  technique?: string;
  artStyle?: string;
  tools: string[];
  platforms: string[];
}

export const creativeDesignLessons: CreativeDesignLesson[] = [
  {
    id: 'midjourney-mastery',
    title: 'Làm chủ Midjourney để tạo hình ảnh',
    description:
      'Học cách sử dụng Midjourney để tạo ra những hình ảnh độc đáo và ấn tượng từ những câu lệnh văn bản (prompt).',
    duration: '90 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=T3i_a_B9mmc',
    imageUrl: 'https://images.unsplash.com/photo-1678054463535-01524c2559a6?w=400&h=400&fit=crop',
    objectives: [
      'Hiểu các tham số cơ bản và nâng cao trong Midjourney.',
      'Học cách viết prompt hiệu quả để điều khiển kết quả hình ảnh.',
      'Sử dụng các kỹ thuật như image prompt, multi-prompt và remix.',
      'Tạo ra các hình ảnh nhất quán cho một dự án hoặc thương hiệu.',
    ],
    prerequisites: ['Có tài khoản Discord và đã tham gia server Midjourney.'],
    tools: ['Midjourney', 'Discord'],
    platforms: ['Social Media', 'Marketing', 'Art'],
    exercises: [
      {
        title: 'Tạo ảnh chân dung theo phong cách',
        description: 'Thực hành viết prompt để tạo một bức ảnh chân dung với một phong cách nghệ thuật cụ thể.',
        difficulty: 'Cơ bản',
        procedure: [
          'Bắt đầu với prompt: `/imagine prompt: a portrait of a Vietnamese woman`.',
          'Thêm các chi tiết về phong cách: `in the style of studio ghibli, cinematic lighting`.',
          'Thử nghiệm với tham số `--ar 16:9` để thay đổi tỷ lệ khung hình.',
        ],
        expectedResults: 'Một bức ảnh chân dung chất lượng cao, thể hiện đúng phong cách nghệ thuật đã chỉ định.',
      },
    ],
    realWorldApplications: [
      'Một nhà thiết kế tạo nhanh các concept art cho một dự án game.',
      'Một marketer tạo hình ảnh quảng cáo độc đáo cho một chiến dịch social media.',
      'Một nghệ sĩ khám phá các ý tưởng và phong cách mới.',
    ],
    faqs: [
      {
        question: 'Prompt là gì và tại sao nó quan trọng?',
        answer:
          'Prompt là một đoạn văn bản mô tả mà bạn cung cấp cho Midjourney để nó tạo ra hình ảnh. Chất lượng và độ chi tiết của prompt quyết định trực tiếp đến kết quả hình ảnh. Một prompt tốt sẽ bao gồm chủ thể, bối cảnh, phong cách nghệ thuật, ánh sáng, và các chi tiết khác.',
      },
      {
        question: 'Làm thế nào để tạo ra một nhân vật nhất quán qua nhiều hình ảnh?',
        answer:
          "Đây là một thách thức. Bạn có thể sử dụng tính năng 'Character Reference' (--cref) mới của Midjourney. Cung cấp một URL hình ảnh của nhân vật bạn muốn và Midjourney sẽ cố gắng giữ các đặc điểm của nhân vật đó trong các hình ảnh mới.",
      },
      {
        question: "Tham số '--ar' dùng để làm gì?",
        answer:
          "Tham số '--ar' (Aspect Ratio) dùng để xác định tỷ lệ khung hình của hình ảnh. Ví dụ, `--ar 16:9` cho ảnh màn hình rộng, `--ar 1:1` cho ảnh vuông, và `--ar 9:16` cho ảnh dọc kiểu story.",
      },
      {
        question: 'Tôi có thể sử dụng hình ảnh của chính mình trong Midjourney không?',
        answer:
          "Có, đây được gọi là 'Image Prompt'. Bạn tải hình ảnh lên Discord, sao chép URL của nó và dán vào đầu prompt của bạn. Midjourney sẽ sử dụng hình ảnh đó làm nguồn cảm hứng cho hình ảnh mới.",
      },
      {
        question: 'Làm thế nào để loại bỏ một vật thể khỏi hình ảnh?',
        answer:
          "Sử dụng tham số '--no'. Ví dụ, `a beautiful landscape --no trees` sẽ cố gắng tạo ra một phong cảnh không có cây cối. Tuy nhiên, nó không phải lúc nào cũng hoạt động hoàn hảo.",
      },
      {
        question: 'Sự khác biệt giữa các phiên bản Midjourney (V5, V6) là gì?',
        answer:
          'Mỗi phiên bản mới thường mang lại sự cải tiến lớn về độ chân thực, khả năng hiểu prompt, và các tính năng mới. Phiên bản V6, ví dụ, có khả năng tạo ra văn bản trong hình ảnh tốt hơn nhiều so với các phiên bản trước.',
      },
      {
        question: 'Tôi có quyền sử dụng thương mại đối với các hình ảnh tôi tạo ra không?',
        answer:
          'Nếu bạn là người dùng trả phí, theo điều khoản dịch vụ của Midjourney, bạn sở hữu các hình ảnh bạn tạo ra và có thể sử dụng chúng cho mục đích thương mại. Tuy nhiên, luật bản quyền về hình ảnh do AI tạo ra vẫn đang phát triển, vì vậy hãy luôn kiểm tra các quy định mới nhất.',
      },
      {
        question: "Làm thế nào để 'trộn' hai hình ảnh với nhau?",
        answer:
          'Sử dụng lệnh `/blend`. Lệnh này cho phép bạn tải lên từ 2 đến 5 hình ảnh và Midjourney sẽ tạo ra một hình ảnh mới kết hợp các yếu tố và thẩm mỹ của chúng.',
      },
      {
        question: 'Stylize (--s) và Chaos (--c) là gì?',
        answer:
          "Tham số `--s` (Stylize) kiểm soát mức độ 'nghệ thuật' của hình ảnh. Giá trị cao hơn sẽ tạo ra hình ảnh rất nghệ thuật nhưng có thể xa rời prompt của bạn. Tham số `--c` (Chaos) kiểm soát sự đa dạng của các hình ảnh trong lưới ban đầu. Giá trị cao hơn sẽ tạo ra các kết quả bất ngờ và khác biệt hơn.",
      },
      {
        question: 'Tôi có thể tìm cảm hứng cho prompt ở đâu?',
        answer:
          "Hãy khám phá trang web của Midjourney, nơi bạn có thể xem các tác phẩm của cộng đồng và prompt tương ứng. Ngoài ra, các trang web như 'PromptHero' và 'Lexica' là những thư viện prompt khổng lồ để bạn học hỏi.",
      },
    ],
  },
  {
    id: 'canva-ai-magic-studio',
    title: 'Thiết kế thông minh với Canva AI Magic Studio',
    description:
      'Khám phá bộ công cụ AI của Canva để tự động hóa và nâng cao quy trình thiết kế cho công việc, học tập và sáng tạo.',
    duration: '75 phút',
    difficulty: 'Cơ bản',
    objectives: [
      'Sử dụng Magic Write để tạo nội dung văn bản nhanh chóng.',
      'Biến ý tưởng thành thiết kế với Magic Design.',
      'Chỉnh sửa ảnh chuyên nghiệp với Magic Edit, Grab và Expand.',
      'Tạo video và bài thuyết trình hấp dẫn với các công cụ AI.',
    ],
    prerequisites: ['Có tài khoản Canva (miễn phí hoặc Pro).'],
    tools: ['Canva Magic Studio'],
    platforms: ['Social Media', 'Presentations', 'Video Editing', 'Branding'],
    exercises: [
      {
        title: 'Tạo bài đăng Instagram từ một ý tưởng',
        description:
          'Sử dụng Magic Design để nhanh chóng tạo ra một loạt các mẫu bài đăng cho Instagram từ một câu mô tả đơn giản.',
        difficulty: 'Cơ bản',
        procedure: [
          'Trên trang chủ Canva, chọn "Magic Studio".',
          'Trong ô Magic Design, nhập: "Một bài đăng Instagram quảng cáo cho một quán cà phê mới ở Hà Nội".',
          'Xem review các mẫu được tạo ra, chọn một mẫu bạn thích và tùy chỉnh nó.',
        ],
        expectedResults: 'Một bài đăng Instagram hoàn chỉnh, chuyên nghiệp, sẵn sàng để đăng tải.',
      },
    ],
    realWorldApplications: [
      'Một sinh viên tạo một bài thuyết trình ấn tượng trong thời gian ngắn.',
      'Chủ một doanh nghiệp nhỏ tự thiết kế bộ nhận diện thương hiệu.',
      'Một nhà sáng tạo nội dung sản xuất hàng loạt video ngắn cho TikTok và Reels.',
    ],
    faqs: [
      {
        question: 'Canva Magic Studio có miễn phí không?',
        answer:
          'Nhiều tính năng của Magic Studio có sẵn cho người dùng miễn phí, nhưng với giới hạn sử dụng (ví dụ: 50 lần sử dụng Magic Write). Để có quyền truy cập không giới hạn và các tính năng cao cấp nhất, bạn cần có tài khoản Canva Pro.',
      },
      {
        question: 'Magic Write có thể viết được những loại nội dung nào?',
        answer:
          'Magic Write có thể viết gần như mọi thứ: từ các bài đăng trên mạng xã hội, email marketing, ý tưởng cho blog, đến việc tóm tắt văn bản dài hoặc viết lại một đoạn văn theo một giọng văn khác.',
      },
      {
        question: 'Magic Edit hoạt động như thế nào?',
        answer:
          "Magic Edit cho phép bạn 'tô' vào một vùng trên ảnh và sau đó gõ mô tả những gì bạn muốn thay thế hoặc thêm vào vùng đó. Ví dụ, bạn có thể tô vào một chiếc bình hoa và gõ 'một chồng sách' để thay thế nó.",
      },
      {
        question: 'Sự khác biệt giữa Magic Grab và Background Remover là gì?',
        answer:
          "Background Remover xóa toàn bộ nền của ảnh. Magic Grab thông minh hơn, nó cho phép bạn 'nhấc' một đối tượng cụ thể ra khỏi ảnh (ví dụ: một người) và di chuyển, thay đổi kích thước hoặc xóa nó mà không ảnh hưởng đến phần còn lại của ảnh.",
      },
      {
        question: 'Tôi có thể tạo video bằng AI trong Canva không?',
        answer:
          'Có. Magic Design for Video cho phép bạn nhập mô tả về video bạn muốn, và Canva sẽ tạo ra một video ngắn với các cảnh quay, âm nhạc và văn bản phù hợp từ thư viện của họ. Bạn có thể tùy chỉnh nó sau đó.',
      },
      {
        question: 'Làm thế nào để chuyển đổi một thiết kế thành một định dạng khác?',
        answer:
          "Sử dụng tính năng 'Magic Switch'. Nó cho phép bạn chuyển đổi một thiết-kế, ví dụ từ một bài thuyết trình thành một bài đăng blog hoặc một email, và AI sẽ tự động định dạng lại nội dung cho phù hợp.",
      },
      {
        question: 'AI của Canva có thể giúp tôi tạo bài thuyết trình không?',
        answer:
          'Chắc chắn. Magic Design for Presentations cho phép bạn chỉ cần gõ một vài từ về chủ đề của bạn, và Canva sẽ tạo ra một bản nháp hoàn chỉnh cho bài thuyết trình với các trang tiêu đề, nội dung và hình ảnh minh họa.',
      },
      {
        question: "Tính năng 'Magic Animate' làm gì?",
        answer:
          'Magic Animate tự động áp dụng các hiệu ứng chuyển động và chuyển cảnh phù hợp cho tất cả các yếu-tố trong thiết kế của bạn chỉ bằng một cú nhấp chuột, giúp thiết kế của bạn trở nên sống động ngay lập tức.',
      },
      {
        question: 'Dữ liệu của tôi có được sử dụng để huấn luyện AI của Canva không?',
        answer:
          'Canva có chính sách rõ ràng về quyền riêng tư. Họ tuyên bố rằng họ không sử dụng nội dung của bạn để huấn luyện các mô hình AI của họ trừ khi bạn cho phép một cách rõ ràng.',
      },
      {
        question: 'Tôi nên bắt đầu với tính năng nào của Magic Studio?',
        answer:
          "Hãy bắt đầu với 'Magic Design'. Đây là cách nhanh nhất để thấy được sức mạnh của AI trong Canva. Chỉ cần đưa ra một ý tưởng, và xem Canva biến nó thành các thiết kế thực tế. Nó sẽ cho bạn một cái nhìn tổng quan về những gì có thể làm được.",
      },
    ],
  },
];
