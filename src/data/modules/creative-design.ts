import { BaseLessonData } from '@/types/lesson-base';

export const creativeDesignLessons: BaseLessonData[] = [
  {
    id: 'midjourney-basics',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    title: 'Midjourney cơ bản',
    description: 'Học những điều cơ bản về Midjourney.',
    duration: '60 phút',
    difficulty: 'Cơ bản',
    objectives: ['Hiểu cách hoạt động của Midjourney', 'Tạo hình ảnh đầu tiên'],
    realWorldApplications: ['Tạo ảnh minh họa cho bài viết'],
    faqs: [
      {
        question: 'Midjourney có miễn phí không?',
        answer:
          'Midjourney cung cấp một số lượt dùng thử miễn phí khi bạn mới đăng ký. Sau khi hết lượt dùng thử, bạn cần đăng ký một trong các gói trả phí để tiếp tục sử dụng. Các gói này cung cấp số lượng hình ảnh tạo ra không giới hạn hoặc số lượng lớn.',
      },
      {
        question: 'Làm thế nào để tạo ra một hình ảnh nhất quán về nhân vật trong Midjourney?',
        answer:
          'Để tạo sự nhất quán, hãy sử dụng tính năng "Character Reference" (--cref) cùng với URL của hình ảnh nhân vật bạn muốn. Bạn cũng có thể sử dụng cùng một seed (tham số --seed) và mô tả chi tiết các đặc điểm của nhân vật trong prompt.',
      },
      {
        question: 'Tôi có thể sử dụng hình ảnh từ Midjourney cho mục đích thương mại không?',
        answer:
          'Nếu bạn có gói trả phí, bạn được phép sử dụng hình ảnh cho mục đích thương mại. Tuy nhiên, hãy luôn kiểm tra các điều khoản dịch vụ mới nhất của Midjourney để đảm bảo bạn tuân thủ đúng các quy định về bản quyền và sử dụng.',
      },
      {
        question: 'Prompt "engineering" có thực sự quan trọng không?',
        answer:
          'Rất quan trọng. Chất lượng của prompt quyết định trực tiếp đến chất lượng của hình ảnh đầu ra. Việc học cách mô tả chi tiết, sử dụng các tham số như --ar (tỷ lệ khung hình), --style, và các từ khóa chính xác sẽ giúp bạn kiểm soát kết quả tốt hơn rất nhiều.',
      },
    ],
  },
  {
    id: 'advanced-prompting',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    title: 'Prompt engineering nâng cao',
    description: 'Học cách viết prompt nâng cao cho Midjourney.',
    duration: '75 phút',
    difficulty: 'Nâng cao',
    objectives: ['Viết prompt phức tạp', 'Kiểm soát hình ảnh tốt hơn'],
    realWorldApplications: ['Tạo concept art cho game'],
    faqs: [
      {
        question: 'Làm thế nào để kết hợp nhiều ý tưởng trong một prompt?',
        answer:
          'Sử dụng "multi-prompting" bằng cách dùng dấu `::`. Ví dụ: `a cat::2 wearing a hat::1` sẽ tạo ra một con mèo và một cái mũ, với trọng số "cat" gấp đôi "hat". Điều này cho phép bạn kiểm soát các yếu tố riêng biệt trong ảnh.',
      },
      {
        question: 'Tham số --chaos có tác dụng gì?',
        answer:
          'Tham số `--chaos` (từ 0 đến 100) kiểm soát mức độ đa dạng và "sáng tạo" của các hình ảnh trong một lưới. Chaos cao hơn sẽ tạo ra các kết quả bất ngờ và khác biệt hơn so với prompt gốc, rất hữu ích để khám phá ý tưởng mới.',
      },
      {
        question: 'Làm sao để loại bỏ một vật thể khỏi hình ảnh?',
        answer:
          'Sử dụng tham số `--no`. Ví dụ, `a beautiful landscape --no trees` sẽ cố gắng tạo ra một phong cảnh không có cây cối. Đây là một công cụ mạnh mẽ để tinh chỉnh kết quả của bạn.',
      },
      {
        question: 'Tôi có thể sử dụng hình ảnh của riêng mình làm nguồn cảm hứng không?',
        answer:
          'Có, bạn có thể tải lên một hình ảnh và sử dụng URL của nó trong prompt. Midjourney sẽ phân tích hình ảnh đó và sử dụng nó như một phần của nguồn cảm hứng để tạo ra kết quả mới, kết hợp với mô tả văn bản của bạn.',
      },
    ],
  },
  {
    id: 'canva-ai',
    videoUrl: 'https://www.youtube.com/watch?v=HbBvNooPUP8',
    title: 'Canva AI Magic Studio',
    description: 'Khám phá sức mạnh của Canva AI Magic Studio.',
    duration: '50 phút',
    difficulty: 'Trung bình',
    objectives: ['Sử dụng các công cụ AI của Canva', 'Thiết kế nhanh hơn'],
    realWorldApplications: ['Tạo bài đăng mạng xã hội'],
    faqs: [
      {
        question: 'Magic Write trong Canva có thể làm gì?',
        answer:
          'Magic Write là một trợ lý viết lách bằng AI. Nó có thể giúp bạn tạo ra văn bản từ một mô tả ngắn, tóm tắt văn bản dài, viết lại câu, hoặc thậm chí tạo ra các ý tưởng cho bài viết của bạn, tất cả ngay trong trình chỉnh sửa Canva.',
      },
      {
        question: 'Làm thế nào để xóa một vật thể không mong muốn khỏi ảnh trong Canva?',
        answer:
          'Sử dụng công cụ "Magic Eraser". Chỉ cần chọn công cụ, tô lên vật thể bạn muốn xóa, và AI của Canva sẽ tự động lấp đầy khoảng trống một cách thông minh, giúp bạn có một bức ảnh sạch sẽ.',
      },
      {
        question: 'Text to Image của Canva hoạt động như thế nào?',
        answer:
          'Tương tự như Midjourney, bạn chỉ cần mô tả hình ảnh bạn muốn tạo, chọn một phong cách (ví dụ: ảnh chụp, tranh vẽ, 3D), và Canva sẽ tạo ra một số tùy chọn hình ảnh cho bạn lựa chọn và sử dụng ngay trong thiết kế của mình.',
      },
      {
        question: 'Canva AI có thể giúp tôi tạo bản trình bày (presentation) không?',
        answer:
          'Có, tính năng "Magic Design for Presentations" cực kỳ hữu ích. Bạn chỉ cần nhập một vài từ về chủ đề của mình, và Canva sẽ tự động tạo ra một bản trình bày hoàn chỉnh với nhiều slide, bao gồm cả văn bản và hình ảnh minh họa.',
      },
    ],
  },
  {
    id: 'content-creation',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    title: 'Tạo nội dung với AI',
    description: 'Học cách tạo nội dung hấp dẫn bằng các công cụ AI.',
    duration: '45 phút',
    difficulty: 'Trung bình',
    objectives: ['Tạo ý tưởng nội dung', 'Viết nội dung tự động'],
    realWorldApplications: ['Viết blog, email marketing'],
    faqs: [
      {
        question: 'AI có thể giúp tôi tìm ý tưởng nội dung không?',
        answer:
          'Chắc chắn. Bạn có thể sử dụng các công cụ như ChatGPT và yêu cầu nó "đóng vai" một chuyên gia trong lĩnh vực của bạn và gợi ý 10 chủ đề blog hấp dẫn, hoặc tạo ra các kịch bản video ngắn cho TikTok.',
      },
      {
        question: 'Làm thế nào để đảm bảo nội dung do AI viết ra không bị trùng lặp và có "chất riêng"?',
        answer:
          'Luôn coi AI là một trợ lý, không phải là người thay thế bạn. Sử dụng kết quả của AI làm bản nháp đầu tiên, sau đó thêm vào đó kiến thức, kinh nghiệm, và giọng văn độc đáo của bạn. Luôn kiểm tra lại thông tin và chỉnh sửa để nó thực sự là của bạn.',
      },
      {
        question: 'AI có thể giúp tôi tối ưu hóa SEO cho bài viết không?',
        answer:
          'Có. Các công cụ AI có thể giúp bạn nghiên cứu từ khóa, đề xuất các tiêu đề hấp dẫn, tạo ra các đoạn meta description, và thậm chí cấu trúc bài viết của bạn theo cách thân thiện với công cụ tìm kiếm.',
      },
      {
        question: 'Ngoài văn bản, AI có thể tạo ra loại nội dung nào khác?',
        answer:
          'AI có thể tạo ra hình ảnh (Midjourney), video (RunwayML, Sora), âm nhạc (Suno AI), và thậm chí cả giọng nói (ElevenLabs). Việc kết hợp các công cụ này cho phép bạn tạo ra các sản phẩm nội dung đa phương tiện phức tạp một cách nhanh chóng.',
      },
    ],
  },
];

import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';

export const creativeDesignModuleData: ModuleData = {
  id: K2Module.CreativeDesign,
  title: 'Thiết kế Sáng tạo với AI',
  description:
    'Học cách sử dụng các công cụ AI hàng đầu như Midjourney và Canva Magic Studio để tạo ra hình ảnh, thiết kế và nội dung ấn tượng.',
  image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=800&h=800&fit=crop',
  category: 'AI và Sáng tạo',
  features: [
    'Làm chủ Midjourney từ cơ bản đến nâng cao',
    'Thành thạo Canva AI Magic Studio',
    'Kỹ thuật "prompt engineering" chuyên sâu',
    'Ứng dụng AI vào quy trình sáng tạo nội dung',
  ],
  lessons: creativeDesignLessons,
  relatedModules: [K2Module.AIArtCreativeTech, K2Module.ContentCreator, K2Module.DigitalMarketing],
};
