import { ModuleData } from '@/types';

export const chemistryEnvironmentModuleData: ModuleData = {
  id: 'chemistry-environment',
  title: 'Hóa Học và Môi Trường',
  subtitle: 'Tìm hiểu vai trò của hóa học trong các vấn đề môi trường và các giải pháp hóa học xanh.',
  description:
    'Module này khám phá mối liên hệ giữa hóa học và môi trường, từ ô nhiễm không khí, nước đến các giải pháp năng lượng sạch và vật liệu bền vững.',
  image: 'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=1200&h=600&fit=crop',
  color: 'from-green-500 to-teal-500',
  category: 'Khoa học & Môi trường',
  level: 'Trung học',
  duration: '11 tuần',
  lessons: [
    {
      id: 'o-nhiem-khong-khi',
      title: 'Hóa Học Của Ô Nhiễm Không Khí',
      description:
        'Nghiên cứu về các chất gây ô nhiễm không khí chính, nguồn gốc và tác động của chúng, cũng như các phản ứng hóa học tạo ra mưa axit và sương mù quang hóa.',
      duration: '50 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Mưa axit', 'Sương mù quang hóa', 'Hiệu ứng nhà kính'],
      objectives: [
        'Nhận biết các khí gây ô nhiễm chính: SO₂, NO₂, CO, O₃, và các hạt bụi mịn.',
        'Hiểu quá trình hình thành mưa axit từ SO₂ và NO₂.',
        'Giải thích cơ chế tạo thành sương mù quang hóa.',
        'Phân tích tác động của ô nhiễm không khí đến sức khỏe và môi trường.',
      ],
      faqs: [
        {
          question: 'Mưa axit là gì và nó gây hại như thế nào?',
          answer:
            'Mưa axit là hiện tượng mưa hoặc các dạng giáng thủy khác có độ pH thấp hơn bình thường (dưới 5.6). Nó được hình thành khi khí sulfur dioxide (SO₂) và nitrogen oxides (NOx) phản ứng với nước, oxy và các chất khác trong khí quyển. Mưa axit gây hại cho cây cối, làm chua hóa đất và nước, và ăn mòn các công trình xây dựng.',
        },
        {
          question: 'Sương mù quang hóa (smog) hình thành khi nào?',
          answer:
            'Sương mù quang hóa thường hình thành ở các đô thị vào những ngày nắng, ấm. Nó là kết quả của phản ứng hóa học giữa các oxit nitơ (NOx) và các hợp chất hữu cơ dễ bay hơi (VOCs) dưới tác động của ánh sáng mặt trời, tạo ra ozon tầng đối lưu (O₃) và các chất ô nhiễm thứ cấp khác.',
        },
      ],
      quizzes: [
        {
          question: 'Hai khí nào là nguyên nhân chính gây ra mưa axit?',
          options: ['CO₂ và O₂', 'SO₂ và NOx', 'CH₄ và H₂O', 'O₃ và CO'],
          correctAnswerIndex: 1,
          explanation:
            'Sulfur dioxide (SO₂) và các oxit nitơ (NOx) là hai tác nhân chính phản ứng với hơi nước trong khí quyển để tạo thành axit sulfuric và axit nitric, gây ra mưa axit.',
        },
      ],
    },
    {
      id: 'hoa-hoc-xanh',
      title: 'Nguyên Tắc Hóa Học Xanh',
      description:
        'Giới thiệu 12 nguyên tắc của hóa học xanh, một triết lý thiết kế các sản phẩm và quy trình hóa học nhằm giảm thiểu hoặc loại bỏ việc sử dụng và tạo ra các chất độc hại.',
      duration: '60 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Nhựa sinh học', 'Nhiên liệu sinh học', 'Dược phẩm bền vững'],
      objectives: [
        'Liệt kê và hiểu ý nghĩa của 12 nguyên tắc hóa học xanh.',
        'Phân tích các ví dụ thực tế về ứng dụng hóa học xanh.',
        'So sánh giữa quy trình hóa học truyền thống và quy trình hóa học xanh.',
        'Đánh giá tiềm năng của hóa học xanh trong việc giải quyết các vấn đề môi trường.',
      ],
      faqs: [
        {
          question: 'Hóa học xanh có phải là "không sử dụng hóa chất" không?',
          answer:
            'Không. Hóa học xanh không phải là loại bỏ hoàn toàn hóa chất, mà là thiết kế và sử dụng chúng một cách thông minh hơn, an toàn hơn và hiệu quả hơn. Mục tiêu là giảm thiểu tác động tiêu cực đến môi trường và sức khỏe con người ngay từ giai đoạn thiết kế.',
        },
        {
          question: 'Một ví dụ về hóa học xanh trong đời sống là gì?',
          answer:
            'Việc phát triển các loại nhựa phân hủy sinh học (bioplastics) từ tinh bột ngô hoặc mía là một ví dụ điển hình. Chúng giúp giảm sự phụ thuộc vào dầu mỏ và giảm thiểu vấn đề rác thải nhựa khó phân hủy.',
        },
      ],
      quizzes: [
        {
          question: 'Nguyên tắc nào sau đây KHÔNG thuộc 12 nguyên tắc của hóa học xanh?',
          options: [
            'Phòng ngừa chất thải',
            'Thiết kế hóa chất an toàn hơn',
            'Tối đa hóa lợi nhuận bằng mọi giá',
            'Sử dụng nguyên liệu tái tạo',
          ],
          correctAnswerIndex: 2,
          explanation:
            'Hóa học xanh ưu tiên sự bền vững và an toàn, do đó "Tối đa hóa lợi nhuận bằng mọi giá" đi ngược lại với triết lý của nó. Các nguyên tắc khác đều là cốt lõi của hóa học xanh.',
        },
      ],
    },
    {
      id: 'nang-luong-sach',
      title: 'Hóa Học Trong Năng Lượng Sạch',
      description:
        'Khám phá vai trò của hóa học trong việc phát triển các công nghệ năng lượng tái tạo như pin mặt trời, pin nhiên liệu và lưu trữ năng lượng.',
      duration: '55 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Pin mặt trời (Solar cells)', 'Pin nhiên liệu Hydro', 'Pin Lithium-ion'],
      objectives: [
        'Hiểu nguyên lý hoạt động cơ bản của pin mặt trời (quang điện).',
        'Tìm hiểu về phản ứng điện hóa trong pin nhiên liệu hydro.',
        'Khám phá cấu tạo và hóa học của pin Lithium-ion dùng để lưu trữ năng lượng.',
        'Thảo luận về những thách thức hóa học trong việc phát triển năng lượng bền vững.',
      ],
      faqs: [
        {
          question: 'Pin mặt trời tạo ra điện như thế nào?',
          answer:
            'Pin mặt trời, thường làm từ silicon, hoạt động dựa trên hiệu ứng quang điện. Khi ánh sáng mặt trời (photon) chiếu vào tấm pin, nó truyền năng lượng cho các electron, làm chúng bật ra khỏi vị trí và tạo thành dòng điện.',
        },
        {
          question: 'Pin nhiên liệu Hydro có ưu điểm gì so với động cơ đốt trong?',
          answer:
            'Pin nhiên liệu Hydro kết hợp hydro và oxy để tạo ra điện, và sản phẩm phụ duy nhất là nước tinh khiết (H₂O). Do đó, nó không phát thải khí nhà kính hay các chất gây ô nhiễm khác như động cơ đốt trong, thân thiện hơn nhiều với môi trường.',
        },
      ],
      quizzes: [
        {
          question: 'Sản phẩm phụ của phản ứng trong pin nhiên liệu Hydro là gì?',
          options: ['Carbon dioxide (CO₂)', 'Nước (H₂O)', 'Methane (CH₄)', 'Ozone (O₃)'],
          correctAnswerIndex: 1,
          explanation:
            'Phản ứng giữa hydro và oxy trong pin nhiên liệu (2H₂ + O₂ → 2H₂O) chỉ tạo ra nước, đây là một trong những ưu điểm lớn nhất về môi trường của công nghệ này.',
        },
      ],
    },
  ],
  features: [
    'Phân tích các vấn đề ô nhiễm môi trường từ góc độ hóa học',
    'Giới thiệu 12 nguyên tắc của hóa học xanh',
    'Khám phá hóa học trong năng lượng tái tạo',
    'Các nghiên cứu tình huống và giải pháp thực tế',
  ],
  prerequisites: ['Kiến thức hóa học cơ bản (phản ứng hóa học, nguyên tố, hợp chất)'],
  objectives: [
    'Hiểu được tác động hai mặt của hóa học đối với môi trường.',
    'Nắm vững các nguyên tắc của hóa học xanh và bền vững.',
    'Nhận biết vai trò của hóa học trong việc phát triển các giải pháp môi trường.',
    'Nâng cao nhận thức và trách nhiệm về bảo vệ môi trường.',
  ],
  careerOutcomes: [
    'Nền tảng cho các ngành khoa học môi trường, kỹ thuật hóa học, công nghệ vật liệu.',
    'Kiến thức cần thiết cho các chuyên gia về phát triển bền vững và chính sách môi trường.',
  ],
  tags: ['hóa học', 'môi trường', 'hóa học xanh', 'năng lượng sạch'],
};
