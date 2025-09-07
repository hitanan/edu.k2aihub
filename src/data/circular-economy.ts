import { BaseLessonData } from '@/types/lesson-base';

export const circularEconomyLessons: BaseLessonData[] = [
  {
    id: 'introduction-to-circular-economy',
    title: 'Giới thiệu về Kinh tế Tuần hoàn',
    description: 'Hiểu các nguyên tắc cốt lõi của kinh tế tuần hoàn và sự khác biệt so với kinh tế tuyến tính.',
    duration: '45 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=z_4E255p3jY',
    imageUrl: '/images/modules/circular-economy/intro.jpg',
    objectives: [
      'Định nghĩa kinh tế tuần hoàn.',
      'So sánh mô hình kinh tế tuần hoàn và kinh tế tuyến tính.',
      'Xác định 3 nguyên tắc chính của kinh tế tuần hoàn.',
    ],
    prerequisites: ['Không có'],
    exercises: [
      {
        title: 'Phân tích sản phẩm',
        description:
          'Chọn một sản phẩm hàng ngày và phân tích vòng đời của nó trong mô hình kinh tế tuyến tính và tuần hoàn.',
        difficulty: 'Cơ bản',
        procedure: [
          'Chọn một sản phẩm (ví dụ: chai nhựa, áo thun).',
          'Vẽ sơ đồ vòng đời "từ sản xuất đến vứt bỏ" của nó.',
          'Brainstorm các cách để áp dụng nguyên tắc tuần hoàn (tái sử dụng, sửa chữa, tái chế).',
        ],
        expectedResults: 'Một sơ đồ so sánh hai mô hình và các ý tưởng cải tiến.',
      },
    ],
    realWorldApplications: ['Tái chế rác thải', 'Sử dụng đồ cũ', 'Thuê sản phẩm thay vì mua'],
    vietnamContext: {
      title: 'Bối cảnh Việt Nam',
      content: [
        'Việt Nam đang đối mặt với thách thức lớn về rác thải nhựa và ô nhiễm.',
        'Chính phủ đã ban hành các chính sách khuyến khích kinh tế tuần hoàn.',
        'Nhiều doanh nghiệp Việt Nam đang bắt đầu áp dụng các mô hình kinh doanh tuần hoàn.',
      ],
    },
  },
  {
    id: 'circular-design',
    title: 'Thiết kế Tuần hoàn',
    description: 'Học cách thiết kế sản phẩm và dịch vụ để chúng có thể được tái sử dụng, sửa chữa và tái chế.',
    duration: '60 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=L4s6I_3-b2s',
    imageUrl: '/images/modules/circular-economy/design.jpg',
    objectives: [
      'Hiểu các chiến lược thiết kế cho kinh tế tuần hoàn.',
      'Áp dụng các nguyên tắc như thiết kế để tháo dỡ, sử dụng vật liệu bền vững.',
      'Phân tích các ví dụ về thiết kế tuần hoàn thành công.',
    ],
    prerequisites: ['Kiến thức cơ bản về thiết kế sản phẩm.'],
    exercises: [
      {
        title: 'Thiết kế lại bao bì',
        description: 'Thiết kế lại bao bì cho một sản phẩm để giảm thiểu rác thải và tối đa hóa khả năng tái chế.',
        difficulty: 'Trung bình',
        procedure: [
          'Chọn một sản phẩm có bao bì lãng phí.',
          'Nghiên cứu các vật liệu thay thế bền vững.',
          'Phác thảo một thiết kế bao bì mới theo nguyên tắc tuần hoàn.',
        ],
        expectedResults: 'Một concept thiết kế bao bì mới với ghi chú về vật liệu và vòng đời.',
      },
    ],
    realWorldApplications: ['Nội thất module', 'Điện thoại có thể sửa chữa', 'Bao bì có thể phân hủy'],
  },
];
