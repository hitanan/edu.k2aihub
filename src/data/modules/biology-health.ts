import { ModuleData } from '@/types';

export const biologyHealthModuleData: ModuleData = {
  id: 'biology-health',
  title: 'Sinh Học và Sức Khỏe Con Người',
  subtitle: 'Khám phá mối liên hệ mật thiết giữa sinh học, di truyền, dinh dưỡng và sức khỏe toàn diện.',
  description:
    'Module này cung cấp kiến thức nền tảng về cơ thể người, từ cấp độ tế bào đến các hệ cơ quan, đồng thời trang bị những hiểu biết quan trọng về dinh dưỡng, phòng bệnh và duy trì một lối sống lành mạnh.',
  image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1200&h=600&fit=crop',
  color: 'from-red-500 to-orange-500',
  category: 'Khoa học & Sức khỏe',
  level: 'Trung học',
  duration: '12 tuần',
  lessons: [
    {
      id: 'di-truyen-hoc',
      title: 'Di Truyền Học và Bệnh Tật',
      description:
        'Tìm hiểu về DNA, gen, nhiễm sắc thể và cách các đột biến di truyền có thể dẫn đến bệnh tật. Khám phá các ứng dụng của di truyền học trong y học hiện đại.',
      duration: '60 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Tư vấn di truyền', 'Liệu pháp gen', 'Sàng lọc trước sinh'],
      objectives: [
        'Hiểu cấu trúc của DNA và vai trò của gen trong việc quy định tính trạng.',
        'Phân biệt các loại đột biến gen và đột biến nhiễm sắc thể.',
        'Giải thích cơ chế di truyền của một số bệnh phổ biến (ví dụ: bệnh hồng cầu hình liềm, bệnh mù màu).',
        'Tìm hiểu về các công nghệ di truyền hiện đại như CRISPR-Cas9.',
      ],
      faqs: [
        {
          question: 'DNA, gen và nhiễm sắc thể liên quan với nhau như thế nào?',
          answer:
            'Hãy tưởng tượng DNA là một cuộn chỉ khổng lồ. Một đoạn chỉ chứa thông tin mã hóa cho một protein cụ thể được gọi là gen. Cuộn chỉ này được nén và gói lại rất chặt chẽ để tạo thành cấu trúc gọi là nhiễm sắc thể. Con người có 23 cặp nhiễm sắc thể trong mỗi tế bào.',
        },
        {
          question: 'Liệu pháp gen là gì?',
          answer:
            'Liệu pháp gen là một kỹ thuật y học nhằm sửa chữa hoặc thay thế các gen bị lỗi gây bệnh. Ví dụ, các nhà khoa học có thể sử dụng một virus đã được vô hiệu hóa để "vận chuyển" một bản sao gen khỏe mạnh vào tế bào của bệnh nhân.',
        },
      ],
      quizzes: [
        {
          question: 'Cấu trúc xoắn kép là đặc trưng của phân tử nào?',
          options: ['Protein', 'RNA', 'DNA', 'Carbohydrate'],
          correctAnswerIndex: 2,
          explanation:
            'James Watson và Francis Crick đã khám phá ra cấu trúc xoắn kép của DNA vào năm 1953, một khám phá nền tảng cho di truyền học hiện đại.',
        },
      ],
    },
    {
      id: 'dinh-duong-khoa-hoc',
      title: 'Khoa Học Dinh Dưỡng',
      description:
        'Nghiên cứu về các nhóm chất dinh dưỡng chính (đạm, đường, béo, vitamin, khoáng chất), vai trò của chúng đối với cơ thể và cách xây dựng một chế độ ăn uống cân bằng.',
      duration: '50 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Xây dựng thực đơn', 'Đọc nhãn thực phẩm', 'Quản lý cân nặng'],
      objectives: [
        'Phân biệt các nhóm chất dinh dưỡng đa lượng và vi lượng.',
        'Hiểu vai trò của protein, carbohydrate và chất béo trong việc cung cấp năng lượng và xây dựng cơ thể.',
        'Nhận biết tầm quan trọng của vitamin và khoáng chất đối với các chức năng sống.',
        'Học cách đọc và hiểu thông tin trên nhãn dinh dưỡng của thực phẩm.',
      ],
      faqs: [
        {
          question: 'Tại sao chất béo (lipid) lại cần thiết cho cơ thể?',
          answer:
            'Chất béo không hoàn toàn xấu. Chúng là nguồn năng lượng dự trữ quan trọng, giúp hấp thụ các vitamin tan trong dầu (A, D, E, K), và là thành phần cấu tạo nên màng tế bào và một số hormone. Điều quan trọng là lựa chọn các loại chất béo không bão hòa lành mạnh (có trong quả bơ, các loại hạt, dầu ô liu).',
        },
        {
          question: 'Carbohydrate "tốt" và "xấu" khác nhau như thế nào?',
          answer:
            'Carb "tốt" (carb phức) có trong ngũ cốc nguyên hạt, rau củ, các loại đậu. Chúng chứa nhiều chất xơ, tiêu hóa chậm, cung cấp năng lượng ổn định. Carb "xấu" (carb đơn) có trong đường, bánh kẹo, nước ngọt. Chúng tiêu hóa nhanh, gây tăng đường huyết đột ngột và ít giá trị dinh dưỡng.',
        },
      ],
      quizzes: [
        {
          question: 'Nhóm chất nào sau đây là nguồn cung cấp năng lượng chính cho cơ thể?',
          options: ['Vitamin', 'Chất xơ', 'Carbohydrate', 'Nước'],
          correctAnswerIndex: 2,
          explanation:
            'Carbohydrate (chất bột đường) là nguồn năng lượng ưu tiên và dễ sử dụng nhất của cơ thể, đặc biệt là cho não bộ và các hoạt động thể chất.',
        },
      ],
    },
    {
      id: 'phong-benh-chu-dong',
      title: 'Phòng Bệnh Chủ Động và Hệ Miễn Dịch',
      description:
        'Tìm hiểu về hệ miễn dịch, cách vaccine hoạt động để bảo vệ cơ thể, và các biện pháp phòng ngừa bệnh truyền nhiễm cũng như các bệnh không lây nhiễm phổ biến.',
      duration: '55 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Tiêm chủng vaccine', 'Rửa tay đúng cách', 'Tầm soát sức khỏe định kỳ'],
      objectives: [
        'Mô tả các thành phần chính của hệ miễn dịch (miễn dịch bẩm sinh và miễn dịch thu được).',
        'Giải thích cơ chế hoạt động của vaccine trong việc tạo ra "trí nhớ miễn dịch".',
        'Nắm vững các biện pháp vệ sinh cá nhân để phòng bệnh truyền nhiễm.',
        'Hiểu tầm quan trọng của lối sống lành mạnh (dinh dưỡng, vận động) trong việc phòng các bệnh mãn tính như tiểu đường, tim mạch.',
      ],
      faqs: [
        {
          question: 'Vaccine hoạt động như thế nào?',
          answer:
            'Vaccine chứa các phiên bản đã bị làm yếu hoặc bất hoạt của mầm bệnh (hoặc chỉ một phần của mầm bệnh). Khi được đưa vào cơ thể, chúng không đủ sức gây bệnh nhưng đủ để kích thích hệ miễn dịch nhận diện, tạo ra kháng thể và các tế bào ghi nhớ. Nhờ vậy, khi mầm bệnh thật sự xâm nhập, cơ thể đã sẵn sàng để chống lại một cách nhanh chóng và hiệu quả.',
        },
        {
          question: 'Tại sao rửa tay bằng xà phòng lại hiệu quả trong việc phòng bệnh?',
          answer:
            'Nhiều vi khuẩn và virus (như virus cúm, coronavirus) có lớp vỏ ngoài bằng chất béo (lipid). Xà phòng có cấu trúc phân tử đặc biệt, một đầu ưa nước và một đầu ưa dầu/mỡ. Đầu ưa dầu sẽ phá vỡ lớp vỏ béo của virus, làm nó bất hoạt. Nước sau đó sẽ rửa trôi tất cả đi.',
        },
      ],
      quizzes: [
        {
          question: 'Hệ miễn dịch tạo ra chất nào để chống lại mầm bệnh một cách đặc hiệu?',
          options: ['Hồng cầu', 'Tiểu cầu', 'Kháng thể (Antibodies)', 'Hormone'],
          correctAnswerIndex: 2,
          explanation:
            'Kháng thể là các protein do tế bào B của hệ miễn dịch tạo ra. Mỗi loại kháng thể được "thiết kế" để nhận diện và gắn vào một loại kháng nguyên (mầm bệnh) cụ thể, giống như chìa khóa và ổ khóa.',
        },
      ],
    },
  ],
  features: [
    'Kiến thức nền tảng về di truyền học',
    'Hướng dẫn dinh dưỡng khoa học và dễ áp dụng',
    'Giải thích về hệ miễn dịch và vaccine',
    'Câu hỏi thực tế về sức khỏe và phòng bệnh',
  ],
  prerequisites: ['Kiến thức sinh học cơ bản'],
  objectives: [
    'Hiểu rõ hơn về cơ thể và sức khỏe của chính mình.',
    'Trang bị kiến thức để xây dựng một lối sống lành mạnh.',
    'Nâng cao khả năng phân biệt thông tin khoa học và tin giả về sức khỏe.',
    'Chủ động trong việc phòng ngừa bệnh tật cho bản thân và cộng đồng.',
  ],
  careerOutcomes: [
    'Nền tảng cho các ngành y, dược, công nghệ sinh học, dinh dưỡng học.',
    'Kiến thức cần thiết cho mọi người để chăm sóc sức khỏe bản thân và gia đình.',
  ],
  tags: ['sinh học', 'sức khỏe', 'di truyền', 'dinh dưỡng', 'miễn dịch'],
};
