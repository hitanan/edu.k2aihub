import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import type { BaseLessonData } from '@/types/lesson-base';

export const circularEconomyLessons: BaseLessonData[] = [
  {
    id: 'introduction-to-circular-economy',
    title: 'Giới thiệu về Kinh tế Tuần hoàn',
    description: 'Hiểu các nguyên tắc cốt lõi của kinh tế tuần hoàn và sự khác biệt so với kinh tế tuyến tính.',
    duration: '45 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=BSqMgDUOi4A',
    imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop',
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
    faqs: [
      {
        question: 'Kinh tế tuần hoàn là gì?',
        answer:
          'Kinh tế tuần hoàn là một mô hình kinh tế thay thế cho mô hình kinh tế tuyến tính truyền thống (sản xuất, sử dụng, vứt bỏ). Trong kinh tế tuần hoàn, chúng ta cố gắng giữ cho các nguồn tài nguyên được sử dụng càng lâu càng tốt, khai thác giá trị tối đa từ chúng, sau đó phục hồi và tái tạo các sản phẩm và vật liệu ở cuối mỗi vòng đời phục vụ.',
      },
      {
        question: 'Ba nguyên tắc chính của kinh tế tuần hoàn là gì?',
        answer:
          'Ba nguyên tắc chính là: 1) Thiết kế để loại bỏ chất thải và ô nhiễm ngay từ đầu. 2) Giữ cho các sản phẩm và vật liệu được sử dụng và lưu thông ở giá trị cao nhất của chúng. 3) Tái tạo các hệ thống tự nhiên.',
      },
      {
        question: 'Tại sao kinh tế tuần hoàn lại quan trọng đối với Việt Nam?',
        answer:
          'Việt Nam đang đối mặt với những thách thức nghiêm trọng về môi trường như ô nhiễm rác thải nhựa. Việc chuyển đổi sang kinh tế tuần hoàn không chỉ giúp giải quyết các vấn đề này mà còn tạo ra cơ hội kinh tế mới, tăng cường khả năng cạnh tranh và thúc đẩy sự phát triển bền vững.',
      },
      {
        question: 'Làm thế nào tôi có thể đóng góp vào kinh tế tuần hoàn trong cuộc sống hàng ngày?',
        answer:
          'Bạn có thể bắt đầu bằng những hành động đơn giản như giảm thiểu rác thải, ưu tiên sửa chữa đồ đạc thay vì mua mới, tái sử dụng các vật dụng, phân loại rác để tái chế, và ủng hộ các doanh nghiệp áp dụng mô hình kinh doanh bền vững.',
      },
      {
        question: 'Kinh tế tuyến tính (linear economy) là gì?',
        answer: 'Kinh tế tuyến tính là mô hình "take-make-dispose" (khai thác-sản xuất-vứt bỏ). Trong mô hình này, chúng ta khai thác tài nguyên thiên nhiên, sản xuất sản phẩm, sử dụng chúng và sau đó vứt bỏ chúng như rác thải, dẫn đến cạn kiệt tài nguyên và ô nhiễm môi trường.',
      },
      {
        question: 'Upcycling và Downcycling khác nhau như thế nào?',
        answer: 'Upcycling (tái chế nâng cấp) là quá trình biến đổi chất thải hoặc sản phẩm không mong muốn thành sản phẩm mới có chất lượng và giá trị cao hơn. Downcycling (tái chế hạ cấp) cũng là tái chế, nhưng sản phẩm mới có chất lượng thấp hơn bản gốc, ví dụ như tái chế chai nhựa thành sợi tổng hợp.',
      },
      {
        question: 'Mô hình "Sản phẩm như một Dịch vụ" (Product as a Service - PaaS) là gì?',
        answer: 'Đây là một mô hình kinh doanh tuần hoàn, nơi khách hàng trả tiền để sử dụng sản phẩm thay vì sở hữu nó. Ví dụ, thay vì mua một máy in, bạn trả phí hàng tháng cho dịch vụ in ấn. Nhà sản xuất chịu trách nhiệm bảo trì, sửa chữa và thu hồi sản phẩm, khuyến khích họ thiết kế sản phẩm bền hơn.',
      },
      {
        question: 'Kinh tế tuần hoàn có tạo ra việc làm mới không?',
        answer: 'Có, kinh tế tuần hoàn tạo ra nhiều cơ hội việc làm mới trong các lĩnh vực như sửa chữa, tân trang, tái chế, logistics ngược (reverse logistics), và thiết kế bền vững. Nó đòi hỏi các kỹ năng mới và thúc đẩy sự đổi mới.',
      },
      {
        question: 'Thách thức lớn nhất khi chuyển đổi sang kinh tế tuần hoàn là gì?',
        answer: 'Các thách thức bao gồm việc thay đổi tư duy và thói quen tiêu dùng của xã hội, cần có sự đầu tư ban đầu vào công nghệ và cơ sở hạ tầng mới, và xây dựng các chính sách hỗ trợ mạnh mẽ từ chính phủ để tạo ra một sân chơi bình đẳng cho các doanh nghiệp tuần hoàn.',
      },
      {
        question: 'Kinh tế sinh học (Bioeconomy) có liên quan đến kinh tế tuần hoàn không?',
        answer: 'Có, chúng có mối quan hệ chặt chẽ. Kinh tế sinh học tập trung vào việc sử dụng các nguồn tài nguyên sinh học tái tạo (như thực vật, tảo) để sản xuất thực phẩm, năng lượng và vật liệu. Nó là một phần quan trọng của kinh tế tuần hoàn, đặc biệt trong việc tái tạo các hệ thống tự nhiên và tạo ra các vật liệu có thể phân hủy sinh học.',
      },
    ],
  },
  {
    id: 'circular-design',
    title: 'Thiết kế Tuần hoàn',
    description: 'Học cách thiết kế sản phẩm và dịch vụ để chúng có thể được tái sử dụng, sửa chữa và tái chế.',
    duration: '60 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=BSqMgDUOi4A',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
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
    faqs: [
      {
        question: 'Thiết kế tuần hoàn khác gì với thiết kế truyền thống?',
        answer:
          'Thiết kế truyền thống thường tập trung vào thẩm mỹ, chức năng và chi phí sản xuất. Thiết kế tuần hoàn bổ sung một yếu tố quan trọng: toàn bộ vòng đời của sản phẩm. Nó đặt câu hỏi "Điều gì sẽ xảy ra với sản phẩm này sau khi người dùng không cần nó nữa?" ngay từ giai đoạn đầu tiên.',
      },
      {
        question: '"Thiết kế để tháo dỡ" (Design for Disassembly) có nghĩa là gì?',
        answer:
          'Đó là nguyên tắc thiết kế sản phẩm sao cho các bộ phận của nó có thể dễ dàng được tách rời. Điều này giúp cho việc sửa chữa, nâng cấp và tái chế trở nên đơn giản hơn, thay vì phải vứt bỏ toàn bộ sản phẩm khi chỉ một bộ phận bị hỏng.',
      },
      {
        question: 'Làm thế nào để chọn vật liệu bền vững cho thiết kế?',
        answer:
          'Việc lựa chọn vật liệu cần xem xét nhiều yếu tố: nó có phải là vật liệu tái chế không, nó có thể được tái chế sau khi sử dụng không, nó có thể phân hủy sinh học không, và quá trình sản xuất ra nó có tiêu tốn nhiều năng lượng và tài nguyên hay không. Các công cụ như Phân tích Vòng đời Sản phẩm (LCA) có thể giúp đánh giá tác động này.',
      },
      {
        question: 'Một ví dụ về thiết kế tuần hoàn thành công là gì?',
        answer:
          'Điện thoại Fairphone là một ví dụ điển hình. Nó được thiết kế theo dạng module, cho phép người dùng dễ dàng tự thay thế các bộ phận như pin, camera, màn hình. Điều này kéo dài tuổi thọ của sản phẩm và giảm thiểu rác thải điện tử.',
      },
      {
        question: 'Thiết kế cảm xúc (Emotional Design) có vai trò gì trong thiết kế tuần hoàn?',
        answer: 'Thiết kế cảm xúc tạo ra một mối liên kết mạnh mẽ hơn giữa người dùng và sản phẩm. Khi người dùng yêu thích một sản phẩm, họ có xu hướng giữ gìn, sửa chữa và sử dụng nó lâu hơn, thay vì nhanh chóng vứt bỏ. Điều này trực tiếp góp phần vào việc kéo dài vòng đời sản phẩm.',
      },
      {
        question: 'Vật liệu đơn (Monomaterials) là gì và tại sao chúng quan trọng?',
        answer: 'Vật liệu đơn là các sản phẩm được làm từ một loại vật liệu duy nhất. Ví dụ, một chai hoàn toàn làm từ nhựa PET (kể cả nắp và nhãn) sẽ dễ tái chế hơn nhiều so với một chai có nhiều loại nhựa khác nhau. Sử dụng vật liệu đơn giúp đơn giản hóa quá trình phân loại và tái chế.',
      },
      {
        question: 'Làm thế nào để thiết kế một sản phẩm có thể nâng cấp được?',
        answer: 'Thiết kế để nâng cấp đòi hỏi một kiến trúc module, nơi các thành phần chính có thể được thay thế hoặc bổ sung. Ví dụ, một máy tính cho phép người dùng dễ dàng thêm RAM hoặc thay thế card đồ họa. Điều này giúp sản phẩm không bị lỗi thời và kéo dài thời gian sử dụng.',
      },
      {
        question: 'Thiết kế bao bì tuần hoàn cần những yếu tố nào?',
        answer: 'Bao bì tuần hoàn cần được thiết kế để: 1) Giảm thiểu vật liệu sử dụng (Reduce). 2) Có thể tái sử dụng nhiều lần (Reuse). 3) Dễ dàng tái chế (Recycle). 4) Nếu có thể, làm từ vật liệu có thể phân hủy sinh học (Rot).',
      },
      {
        question: 'Cradle to Cradle (C2C) là gì?',
        answer: 'Cradle to Cradle (Từ Nôi đến Nôi) là một triết lý thiết kế coi tất cả các vật liệu là "chất dinh dưỡng" cho một chu trình mới. Có hai loại chu trình: chu trình sinh học (vật liệu phân hủy và quay trở lại tự nhiên) và chu trình kỹ thuật (vật liệu được tái chế thành sản phẩm mới mà không làm giảm chất lượng).',
      },
      {
        question: 'Tại sao mã nguồn mở lại có thể hỗ trợ thiết kế tuần hoàn?',
        answer: 'Mã nguồn mở, đặc biệt là trong thiết kế phần cứng, cho phép mọi người truy cập vào bản thiết kế của sản phẩm. Điều này tạo điều kiện cho một cộng đồng toàn cầu tham gia vào việc sửa chữa, cải tiến và tùy biến sản phẩm, giúp chúng tồn tại lâu hơn và thích ứng tốt hơn với nhu cầu của người dùng.',
      },
    ],
  },
];

export const circularEconomyModuleData: ModuleData = {
  id: K2Module.CircularEconomy,
  title: 'Kinh tế Tuần hoàn',
  subtitle: 'Xây dựng một tương lai bền vững',
  description:
    'Khám phá các nguyên tắc của kinh tế tuần hoàn, học cách thiết kế các sản phẩm và hệ thống không có rác thải, và đóng góp vào một hành tinh khỏe mạnh hơn.',
  category: 'Khoa học & Môi trường',
  icon: '♻️',
  color: 'from-green-500 to-teal-500',
  duration: '4 giờ',
  level: 'Trung bình',
  prerequisites: ['Kiến thức cơ bản về môi trường'],
  features: [
    'Nguyên tắc Kinh tế Tuần hoàn',
    'Thiết kế Sản phẩm Bền vững',
    'Mô hình Kinh doanh Tuần hoàn',
    'Quản lý Chuỗi Cung ứng Xanh',
    'Chính sách và Quy định',
    'Phân tích Vòng đời Sản phẩm (LCA)',
  ],
  objectives: [
    'Hiểu rõ 3 nguyên tắc cốt lõi của kinh tế tuần hoàn: loại bỏ rác thải và ô nhiễm, lưu thông sản phẩm và vật liệu, và tái tạo tự nhiên.',
    'Áp dụng các chiến lược thiết kế cho sự bền vững, tái sử dụng và tái chế.',
    'Phân tích và phát triển các mô hình kinh doanh tuần hoàn mới.',
    'Đánh giá tác động môi trường của sản phẩm và quy trình.',
    'Xác định các cơ hội cho kinh tế tuần hoàn trong bối cảnh Việt Nam.',
  ],
  careerOutcomes: [
    'Chuyên gia Tư vấn Bền vững',
    'Quản lý Sản phẩm Tuần hoàn',
    'Nhà thiết kế Hệ thống Bền vững',
    'Chuyên viên Phân tích Chuỗi Cung ứng Xanh',
    'Quản lý Tuân thủ Môi trường',
  ],
  industryApplications: [
    'Sản xuất và Tiêu dùng',
    'Nông nghiệp và Thực phẩm',
    'Xây dựng và Bất động sản',
    'Thời trang và Dệt may',
    'Năng lượng và Tiện ích',
  ],
  marketDemand: {
    averageSalary: '70-120 triệu VNĐ/năm',
    jobGrowth: '25% (dự kiến)',
    hireDemand: 'Cao',
  },
  relatedModules: [K2Module.SustainableAgriculture, K2Module.RenewableEnergy],
  lessons: circularEconomyLessons,
};
