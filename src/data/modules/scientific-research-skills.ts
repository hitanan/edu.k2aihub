import { ModuleData } from '@/types';

export const scientificResearchSkillsModuleData: ModuleData = {
  id: 'scientific-research-skills',
  title: 'Kỹ Năng Nghiên Cứu Khoa Học',
  subtitle:
    'Học cách đặt câu hỏi, tìm kiếm thông tin, phân tích dữ liệu và trình bày kết quả như một nhà khoa học thực thụ.',
  description:
    'Module này cung cấp một lộ trình chi tiết để bạn thực hiện một dự án nghiên cứu khoa học nhỏ. Từ việc hình thành một câu hỏi nghiên cứu thú vị đến việc trình bày phát hiện của mình một cách thuyết phục, bạn sẽ được trang bị những kỹ năng nền tảng cho mọi hoạt động học thuật và chuyên nghiệp sau này.',
  image: 'https://images.unsplash.com/photo-1579154288985-239e18305365?w=1200&h=600&fit=crop',
  color: 'from-green-500 to-teal-600',
  category: 'Học thuật & Nghiên cứu',
  level: 'Trung học',
  duration: '10 tuần',
  lessons: [
    {
      id: 'what-is-scientific-research',
      title: 'Tổng Quan Về Nghiên Cứu Khoa Học',
      description:
        'Tìm hiểu bản chất của nghiên cứu khoa học, các loại hình nghiên cứu và các bước cơ bản trong một quy trình nghiên cứu.',
      duration: '45 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Nghiên cứu thị trường', 'Phát triển sản phẩm', 'Phân tích chính sách'],
      objectives: [
        'Phân biệt được nghiên cứu khoa học và việc tìm kiếm thông tin thông thường.',
        'Hiểu về các loại hình nghiên cứu chính: nghiên cứu định tính và nghiên cứu định lượng.',
        'Nắm được 7 bước cơ bản của một quy trình nghiên cứu: từ quan sát đến truyền đạt kết quả.',
        'Xác định được các đặc điểm của một câu hỏi nghiên cứu tốt (tính cụ thể, có thể đo lường, có thể trả lời).',
      ],
      faqs: [
        {
          question: 'Nghiên cứu định tính và định lượng khác nhau như thế nào?',
          answer:
            'Nghiên cứu định lượng tập trung vào việc thu thập và phân tích dữ liệu dạng số (ví dụ: bao nhiêu người, tần suất bao nhiêu). Nghiên cứu định tính tập trung vào việc hiểu sâu hơn về các khía cạnh "tại sao" và "như thế nào" thông qua phỏng vấn, quan sát, phân tích văn bản.',
        },
        {
          question: 'Tại sao cần phải có câu hỏi nghiên cứu cụ thể?',
          answer:
            'Một câu hỏi nghiên cứu cụ thể giống như một chiếc la bàn, nó định hướng cho toàn bộ quá trình nghiên cứu của bạn. Một câu hỏi quá rộng (ví dụ: "Mạng xã hội ảnh hưởng đến giới trẻ như thế nào?") sẽ rất khó để trả lời. Một câu hỏi cụ thể hơn (ví dụ: "Việc sử dụng Instagram trên 2 giờ mỗi ngày có ảnh hưởng đến mức độ hài lòng về ngoại hình của nữ sinh lớp 11 tại Hà Nội không?") sẽ dễ dàng hơn nhiều để thiết kế nghiên cứu và tìm câu trả lời.',
        },
      ],
      quizzes: [
        {
          question: 'Bước đầu tiên trong quy trình nghiên cứu khoa học là gì?',
          options: ['Phân tích dữ liệu', 'Quan sát và đặt câu hỏi', 'Viết báo cáo', 'Đưa ra kết luận'],
          correctAnswerIndex: 1,
          explanation:
            'Mọi nghiên cứu khoa học đều bắt đầu từ một sự tò mò, một quan sát về thế giới xung quanh và từ đó hình thành nên các câu hỏi cần được giải đáp.',
        },
      ],
    },
    {
      id: 'literature-review',
      title: 'Tìm Kiếm và Tổng Quan Tài Liệu',
      description:
        'Học cách tìm kiếm thông tin đáng tin cậy từ các nguồn học thuật, đọc hiểu và tổng hợp chúng một cách hiệu quả.',
      duration: '60 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Viết luận', 'Chuẩn bị bài thuyết trình', 'Tìm hiểu một chủ đề mới'],
      objectives: [
        'Sử dụng các công cụ tìm kiếm học thuật như Google Scholar, PubMed.',
        'Phân biệt được các nguồn thông tin sơ cấp, thứ cấp và tam cấp.',
        'Học kỹ thuật đọc lướt (skimming) và đọc quét (scanning) để đánh giá nhanh một bài báo khoa học.',
        'Biết cách trích dẫn tài liệu tham khảo để tránh đạo văn (sử dụng các chuẩn như APA, MLA).',
      ],
      faqs: [
        {
          question: 'Làm thế nào để biết một nguồn thông tin trên mạng là đáng tin cậy?',
          answer:
            'Hãy kiểm tra các yếu tố sau: Tác giả (có chuyên môn không?), Nhà xuất bản (có uy tín không, ví dụ: các tạp chí khoa học, trường đại học), Ngày xuất bản (có cập nhật không?), Mục đích (để cung cấp thông tin hay để quảng cáo?), và Nguồn (có trích dẫn các nguồn khác không?).',
        },
        {
          question: 'Tại sao phải trích dẫn tài liệu tham khảo?',
          answer:
            'Trích dẫn tài liệu tham khảo có 3 mục đích chính: 1. Thể hiện sự tôn trọng đối với tác giả gốc của ý tưởng. 2. Giúp người đọc có thể tìm lại nguồn thông tin bạn đã sử dụng để kiểm chứng. 3. Tăng tính thuyết phục và uy tín cho bài viết của bạn.',
        },
      ],
      quizzes: [
        {
          question: 'Một bài báo cáo gốc công bố kết quả của một thí nghiệm mới được coi là nguồn thông tin loại gì?',
          options: ['Sơ cấp', 'Thứ cấp', 'Tam cấp', 'Không chính thống'],
          correctAnswerIndex: 0,
          explanation:
            'Nguồn sơ cấp là các tài liệu gốc, trực tiếp từ nghiên cứu hoặc sự kiện, chẳng hạn như bài báo nghiên cứu, nhật ký, hoặc dữ liệu thô.',
        },
      ],
    },
    {
      id: 'data-collection-analysis',
      title: 'Thu Thập và Phân Tích Dữ Liệu Cơ Bản',
      description:
        'Làm quen với các phương pháp thu thập dữ liệu phổ biến như khảo sát, phỏng vấn và các công cụ đơn giản để phân tích dữ liệu.',
      duration: '60 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Khảo sát ý kiến khách hàng', 'Phỏng vấn người dùng', 'Phân tích kết quả học tập'],
      objectives: [
        'Thiết kế một bảng câu hỏi khảo sát tốt (sử dụng câu hỏi đóng, câu hỏi mở).',
        'Hiểu các nguyên tắc cơ bản khi tiến hành một cuộc phỏng vấn.',
        'Sử dụng bảng tính (Excel, Google Sheets) để nhập và làm sạch dữ liệu.',
        'Tạo các biểu đồ cơ bản (cột, tròn, đường) để trực quan hóa dữ liệu và rút ra nhận xét.',
      ],
      faqs: [
        {
          question: 'Nên dùng câu hỏi đóng hay câu hỏi mở trong khảo sát?',
          answer:
            'Nên dùng cả hai. Câu hỏi đóng (ví dụ: trắc nghiệm, thang điểm) dễ dàng để thu thập và phân tích dữ liệu số lượng lớn. Câu hỏi mở ("Bạn nghĩ gì về...?") cho phép người trả lời cung cấp thông tin sâu sắc và chi tiết hơn mà bạn có thể chưa lường trước được.',
        },
        {
          question: 'Làm thế nào để tạo một biểu đồ hiệu quả?',
          answer:
            'Một biểu đồ hiệu quả phải rõ ràng, dễ hiểu và truyền tải đúng thông điệp. Hãy đảm bảo biểu đồ có tiêu đề, chú thích các trục, và sử dụng loại biểu đồ phù hợp với dữ liệu (ví dụ: biểu đồ cột để so sánh, biểu đồ đường để xem xu hướng theo thời gian, biểu đồ tròn để thể hiện tỷ lệ phần trăm).',
        },
      ],
      quizzes: [
        {
          question:
            'Để so sánh doanh thu hàng tháng của 3 sản phẩm khác nhau trong một năm, loại biểu đồ nào là phù hợp nhất?',
          options: ['Biểu đồ tròn', 'Biểu đồ đường (với 3 đường riêng biệt)', 'Biểu đồ cột', 'Biểu đồ phân tán'],
          correctAnswerIndex: 1,
          explanation:
            'Biểu đồ đường là lựa chọn tốt nhất để thể hiện sự thay đổi của dữ liệu theo thời gian. Sử dụng các đường riêng biệt cho mỗi sản phẩm sẽ giúp dễ dàng so sánh xu hướng của chúng.',
        },
      ],
    },
  ],
  features: [
    'Hướng dẫn từng bước thực hiện dự án nghiên cứu',
    'Giới thiệu các công cụ tìm kiếm học thuật',
    'Bài tập thực hành thiết kế khảo sát và phân tích dữ liệu',
    'Mẫu báo cáo và cách trình bày kết quả nghiên cứu',
  ],
  prerequisites: ['Kỹ năng đọc hiểu cơ bản', 'Tò mò và ham muốn khám phá'],
  objectives: [
    'Phát triển khả năng tư duy một cách có hệ thống và dựa trên bằng chứng.',
    'Nắm vững các bước cơ bản để tiến hành một nghiên cứu khoa học.',
    'Nâng cao kỹ năng tìm kiếm, đánh giá và tổng hợp thông tin.',
    'Tăng cường kỹ năng trình bày và lập luận một cách thuyết phục.',
  ],
  careerOutcomes: [
    'Kỹ năng nghiên cứu là nền tảng không thể thiếu cho bậc đại học và sau đại học.',
    'Rất cần thiết cho các ngành nghề như phân tích thị trường, R&D, báo chí, tư vấn chính sách.',
  ],
  tags: [
    'nghiên cứu khoa học',
    'phương pháp nghiên cứu',
    'phân tích dữ liệu',
    'tổng quan tài liệu',
    'kỹ năng học thuật',
  ],
};
