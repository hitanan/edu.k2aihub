import { BaseLessonData } from '@/types/lesson-base';

export const creativeDesignLessons: BaseLessonData[] = [
  {
    id: 'midjourney-basics',
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
    title: 'Prompt engineering nâng cao',
    description: 'Học cách viết prompt nâng cao cho Midjourney.',
    duration: '75 phút',
    difficulty: 'Nâng cao',
    objectives: ['Viết prompt phức tạp', 'Kiểm soát hình ảnh tốt hơn'],
    realWorldApplications: ['Tạo concept art cho game'],
  },
  {
    id: 'canva-ai',
    title: 'Canva AI Magic Studio',
    description: 'Khám phá sức mạnh của Canva AI Magic Studio.',
    duration: '50 phút',
    difficulty: 'Trung bình',
    objectives: ['Sử dụng các công cụ AI của Canva', 'Thiết kế nhanh hơn'],
    realWorldApplications: ['Tạo bài đăng mạng xã hội'],
  },
  {
    id: 'content-creation',
    title: 'Tạo nội dung với AI',
    description: 'Học cách tạo nội dung hấp dẫn bằng các công cụ AI.',
    duration: '45 phút',
    difficulty: 'Trung bình',
    objectives: ['Tạo ý tưởng nội dung', 'Viết nội dung tự động'],
    realWorldApplications: ['Viết blog, email marketing'],
  },
];
