import { BaseLessonData } from '@/types';

export const electricVehicleLessons: BaseLessonData[] = [
  {
    id: 'ev-fundamentals',
    title: 'Nguyên Lý Cơ Bản Của Xe Điện',
    duration: '60 phút',
    difficulty: 'Cơ bản',
    type: 'video',
    description:
      'Tìm hiểu về các thành phần cốt lõi của xe điện, bao gồm pin, động cơ điện, và hệ thống quản lý năng lượng.',
    objectives: [
      'Hiểu rõ cấu tạo và nguyên lý hoạt động của xe điện.',
      'Phân biệt được các loại pin và công nghệ sạc.',
      'Nắm được các khái niệm cơ bản về hiệu suất và phạm vi hoạt động của xe điện.',
    ],
    realWorldApplications: ['Lựa chọn mua xe điện phù hợp với nhu cầu.', 'Sử dụng và bảo dưỡng xe điện đúng cách.'],
    tags: ['xe điện', 'pin EV', 'động cơ điện', 'công nghệ ô tô'],
    faqs: [
      {
        question: 'Sự khác biệt lớn nhất giữa xe điện (EV) và xe hybrid là gì?',
        answer:
          'Xe điện (EV) chạy hoàn toàn bằng điện từ pin sạc. Xe hybrid có cả động cơ đốt trong và một động cơ điện, có thể sử dụng cả hai nguồn năng lượng. Xe hybrid sạc pin thông qua quá trình phanh tái tạo năng lượng, trong khi EV cần được cắm sạc từ nguồn điện bên ngoài.',
      },
      {
        question: 'Tuổi thọ trung bình của pin xe điện là bao lâu và chi phí thay thế có đắt không?',
        answer:
          'Hầu hết các nhà sản xuất bảo hành pin xe điện từ 8 đến 10 năm hoặc khoảng 160.000 km. Pin thường có tuổi thọ dài hơn thời gian bảo hành. Chi phí thay thế pin vẫn còn cao, nhưng đang giảm dần theo thời gian nhờ tiến bộ công nghệ và quy mô sản xuất.',
      },
      {
        question: 'Phạm vi hoạt động của xe điện bị ảnh hưởng bởi những yếu tố nào?',
        answer:
          'Phạm vi hoạt động của xe điện bị ảnh hưởng bởi nhiều yếu tố, bao gồm: dung lượng pin, nhiệt độ môi trường (thời tiết lạnh làm giảm phạm vi), tốc độ lái xe, địa hình (leo dốc tốn nhiều năng lượng hơn), và việc sử dụng các hệ thống phụ trợ như điều hòa không khí hoặc sưởi.',
      },
      {
        question: '"Phanh tái tạo" (Regenerative Braking) trên xe điện hoạt động như thế nào?',
        answer:
          'Phanh tái tạo là một quá trình trong đó động cơ điện hoạt động như một máy phát điện khi người lái giảm tốc hoặc phanh. Thay vì lãng phí năng lượng dưới dạng nhiệt như phanh truyền thống, nó chuyển đổi động năng của xe thành điện năng và sạc lại một phần cho pin, giúp tăng hiệu quả sử dụng năng lượng và phạm vi hoạt động.',
      },
    ],
  },
  {
    id: 'charging-infrastructure',
    title: 'Hạ Tầng Sạc và Hệ Sinh Thái',
    duration: '75 phút',
    difficulty: 'Trung bình',
    type: 'video',
    description:
      'Khám phá hệ sinh thái xe điện, từ các loại trạm sạc, phương thức thanh toán, đến việc tích hợp với lưới điện thông minh.',
    objectives: [
      'Phân loại các chuẩn sạc và công suất sạc khác nhau.',
      'Hiểu về quy hoạch và phát triển mạng lưới trạm sạc công cộng.',
      'Tìm hiểu về công nghệ V2G (Vehicle-to-Grid) và vai trò của xe điện trong lưới điện tương lai.',
    ],
    realWorldApplications: ['Đầu tư và kinh doanh trạm sạc xe điện.', 'Quy hoạch đô thị tích hợp hạ tầng cho xe điện.'],
    tags: ['trạm sạc', 'V2G', 'lưới điện thông minh', 'hạ tầng giao thông'],
  },
  {
    id: 'ev-market-trends',
    title: 'Thị Trường và Xu Hướng Xe Điện Toàn Cầu',
    duration: '50 phút',
    difficulty: 'Cơ bản',
    type: 'article',
    description:
      'Phân tích sự phát triển của thị trường xe điện tại Việt Nam và trên thế giới, các chính sách hỗ trợ và tác động đến ngành công nghiệp ô tô.',
    objectives: [
      'Nắm bắt các số liệu và xu hướng chính của thị trường xe điện.',
      'Hiểu về vai trò của các nhà sản xuất lớn như VinFast, Tesla, BYD.',
      'Phân tích các chính sách của chính phủ và ảnh hưởng của chúng đến người tiêu dùng.',
    ],
    realWorldApplications: [
      'Phân tích đầu tư vào cổ phiếu ngành ô tô điện.',
      'Hoạch định chiến lược kinh doanh trong lĩnh vực liên quan đến xe điện.',
    ],
    tags: ['thị trường ô tô', 'VinFast', 'Tesla', 'chính sách công'],
  },
  {
    id: 'ev-maintenance-repair',
    title: 'Bảo Dưỡng và Sửa Chữa Xe Điện',
    duration: '45 phút',
    difficulty: 'Trung bình',
    type: 'video',
    description:
      'Tìm hiểu những điểm khác biệt trong việc bảo dưỡng và sửa chữa xe điện so với xe động cơ đốt trong, và các kỹ năng cần thiết cho kỹ thuật viên.',
    objectives: [
      'Xác định các hạng mục bảo dưỡng định kỳ cho xe điện.',
      'Hiểu về chẩn đoán và sửa chữa các lỗi phổ biến liên quan đến pin và hệ thống điện.',
      'Nhận biết các yêu cầu về an toàn khi làm việc với hệ thống điện cao áp trên xe.',
    ],
    realWorldApplications: ['Kỹ thuật viên tại các xưởng dịch vụ ô tô.', 'Chủ xe tự bảo dưỡng cơ bản cho xe của mình.'],
    tags: ['bảo dưỡng ô tô', 'sửa chữa xe điện', 'kỹ thuật viên ô tô', 'an toàn điện'],
  },
];
