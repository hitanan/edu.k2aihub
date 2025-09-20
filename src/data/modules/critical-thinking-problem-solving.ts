import { ModuleData } from '@/types';

export const criticalThinkingProblemSolvingModuleData: ModuleData = {
  id: 'critical-thinking-problem-solving',
  title: 'Tư Duy Phản Biện và Giải Quyết Vấn Đề',
  subtitle:
    'Trang bị bộ công cụ tư duy sắc bén để phân tích thông tin, nhận diện ngụy biện và đưa ra quyết định hiệu quả.',
  description:
    'Trong một thế giới đầy rẫy thông tin, khả năng tư duy phản biện là chìa khóa để phân biệt sự thật và giả dối. Module này cung cấp các phương pháp luận và bài tập thực hành để bạn mài giũa kỹ năng phân tích, đánh giá và giải quyết vấn đề một cách logic và sáng tạo.',
  image: 'https://images.unsplash.com/photo-1518349619879-54339d1a5a3a?w=1200&h=600&fit=crop',
  color: 'from-purple-500 to-indigo-600',
  category: 'Kỹ năng sống',
  level: 'Trung học',
  duration: '8 tuần',
  lessons: [
    {
      id: 'introduction-to-critical-thinking',
      title: 'Nhập Môn Tư Duy Phản Biện',
      description:
        'Hiểu rõ tư duy phản biện là gì, tại sao nó quan trọng và các đặc điểm của một người có tư duy phản biện.',
      duration: '45 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Phân tích tin tức', 'Đánh giá sản phẩm', 'Tham gia tranh luận'],
      objectives: [
        'Định nghĩa được tư duy phản biện và phân biệt nó với tư duy thông thường.',
        'Nhận biết các rào cản tâm lý ngăn cản tư duy phản biện (ví dụ: thiên kiến xác nhận).',
        'Hiểu về mô hình 5 bước của tư duy phản biện: Quan sát, Phân tích, Suy luận, Giao tiếp, và Phản tư.',
        'Áp dụng các câu hỏi "5W1H" (What, Why, Who, Where, When, How) để phân tích một vấn đề.',
      ],
      faqs: [
        {
          question: 'Tư duy phản biện có phải là luôn luôn chỉ trích và phản đối không?',
          answer:
            'Không. Tư duy phản biện không phải là tìm lỗi một cách tiêu cực. Nó là một quá trình tư duy có kỷ luật để phân tích và đánh giá thông tin một cách khách quan nhằm đưa ra một phán đoán hợp lý. Nó bao gồm cả việc công nhận những điểm mạnh và hợp lý của một lập luận.',
        },
        {
          question: 'Thiên kiến xác nhận (confirmation bias) là gì?',
          answer:
            'Đó là xu hướng tâm lý của con người chỉ tìm kiếm, diễn giải và ghi nhớ những thông tin xác nhận cho niềm tin hoặc giả thuyết sẵn có của mình, trong khi bỏ qua những thông tin trái ngược. Đây là một trong những rào cản lớn nhất của tư duy phản biện.',
        },
      ],
      quizzes: [
        {
          question: 'Đặc điểm nào sau đây KHÔNG phải của người có tư duy phản biện?',
          options: [
            'Tò mò, ham học hỏi',
            'Chấp nhận thông tin một cách nhanh chóng mà không cần bằng chứng',
            'Sẵn sàng xem xét các quan điểm khác nhau',
            'Sử dụng logic và bằng chứng để hỗ trợ lập luận',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Người có tư duy phản biện luôn đòi hỏi bằng chứng và xem xét thông tin một cách cẩn trọng trước khi chấp nhận nó.',
        },
      ],
    },
    {
      id: 'fallacies-detection',
      title: 'Nhận Diện Ngụy Biện Logic',
      description:
        'Học cách phát hiện các lỗi lập luận phổ biến (ngụy biện) trong giao tiếp hàng ngày, quảng cáo và các bài tranh luận.',
      duration: '60 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Xem quảng cáo', 'Đọc bình luận trên mạng xã hội', 'Nghe các bài phát biểu chính trị'],
      objectives: [
        'Hiểu ngụy biện là gì và tại sao chúng lại có vẻ thuyết phục.',
        'Nhận diện các loại ngụy biện phổ biến như: Tấn công cá nhân (Ad Hominem), Người rơm (Straw Man), Lập luận vòng quanh (Circular Reasoning), và Dốc trơn (Slippery Slope).',
        'Phân tích các ví dụ thực tế về ngụy biện trong quảng cáo và truyền thông.',
        'Học cách phản hồi một cách lịch sự và hiệu quả khi phát hiện ngụy biện.',
      ],
      faqs: [
        {
          question: 'Ngụy biện "người rơm" (straw man) hoạt động như thế nào?',
          answer:
            'Ngụy biện người rơm xảy ra khi một người bóp méo hoặc phóng đại lập luận của đối phương, sau đó tấn công vào phiên bản bị bóp méo đó thay vì lập luận gốc. Điều này giúp họ dễ dàng "chiến thắng" cuộc tranh luận hơn.',
        },
        {
          question: 'Tại sao quảng cáo thường sử dụng ngụy biện?',
          answer:
            'Quảng cáo thường nhằm mục đích tác động đến cảm xúc hơn là lý trí của khách hàng. Các ngụy biện như "kêu gọi đám đông" (bandwagon) hay "dựa vào người nổi tiếng" (appeal to authority) có thể rất hiệu quả trong việc thuyết phục mọi người mua sản phẩm mà không cần đưa ra bằng chứng logic về chất lượng.',
        },
      ],
      quizzes: [
        {
          question:
            'Một chính trị gia nói: "Chúng ta không nên nghe kế hoạch kinh tế của ông A, vì ông ấy đã từng ly hôn." Đây là loại ngụy biện gì?',
          options: ['Lập luận vòng quanh', 'Tấn công cá nhân (Ad Hominem)', 'Người rơm', 'Dốc trơn'],
          correctAnswerIndex: 1,
          explanation:
            'Đây là ngụy biện tấn công cá nhân, vì nó tấn công vào đời tư của ông A thay vì phân tích kế hoạch kinh tế của ông ấy.',
        },
      ],
    },
    {
      id: 'problem-solving-frameworks',
      title: 'Các Mô Hình Giải Quyết Vấn Đề',
      description:
        'Tìm hiểu và áp dụng các phương pháp có cấu trúc để giải quyết các vấn đề phức tạp, từ đơn giản đến phức tạp.',
      duration: '55 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Lập kế hoạch dự án', 'Giải quyết xung đột', 'Đổi mới sản phẩm'],
      objectives: [
        'Học và áp dụng chu trình PDCA (Plan-Do-Check-Act) để cải tiến liên tục.',
        'Sử dụng phương pháp "5 Whys" để tìm ra gốc rễ của vấn đề.',
        'Làm quen với sơ đồ xương cá (Ishikawa diagram) để phân tích các nguyên nhân có thể gây ra vấn đề.',
        'Thực hành kỹ thuật brainstorming và sơ đồ tư duy (mind mapping) để tìm kiếm giải pháp sáng tạo.',
      ],
      faqs: [
        {
          question: 'Phương pháp "5 Whys" hoạt động như thế nào?',
          answer:
            'Bằng cách liên tục hỏi "Tại sao?" (thường là khoảng 5 lần), bạn có thể đi từ triệu chứng bề mặt của một vấn đề đến nguyên nhân cốt lõi của nó. Ví dụ: "Xe không khởi động được." -> Tại sao? -> "Ắc quy hết điện." -> Tại sao? -> "Máy phát điện không hoạt động." -> Tại sao? -> "Dây curoa máy phát bị đứt."',
        },
        {
          question: 'Khi nào nên sử dụng sơ đồ tư duy (mind mapping)?',
          answer:
            'Sơ đồ tư duy rất hữu ích trong giai đoạn đầu của việc giải quyết vấn đề, đặc biệt là khi brainstorming. Nó cho phép bạn tự do liên kết các ý tưởng, khám phá các khía cạnh khác nhau của vấn đề và nhìn thấy mối liên hệ giữa chúng một cách trực quan.',
        },
      ],
      quizzes: [
        {
          question: 'Phương pháp nào sau đây tập trung vào việc tìm ra NGUYÊN NHÂN GỐC RỄ của vấn đề?',
          options: ['PDCA', 'Brainstorming', '5 Whys', 'Sơ đồ tư duy'],
          correctAnswerIndex: 2,
          explanation:
            'Phương pháp "5 Whys" được thiết kế đặc biệt để đào sâu qua các lớp triệu chứng và tìm ra nguyên nhân cốt lõi gây ra sự cố.',
        },
      ],
    },
  ],
  features: [
    'Phân tích các ví dụ ngụy biện thực tế',
    'Bài tập tương tác để rèn luyện kỹ năng',
    'Giới thiệu các mô hình giải quyết vấn đề hiệu quả',
    'Case study về các quyết định dựa trên tư duy phản biện',
  ],
  prerequisites: ['Không yêu cầu kiến thức chuyên sâu, chỉ cần tinh thần ham học hỏi và cởi mở.'],
  objectives: [
    'Nâng cao khả năng phân tích và đánh giá thông tin một cách khách quan.',
    'Nhận diện và tránh được các lỗi ngụy biện logic trong cuộc sống.',
    'Nắm vững các phương pháp giải quyết vấn đề một cách có hệ thống.',
    'Tăng cường sự tự tin khi đưa ra quyết định và bảo vệ quan điểm của mình.',
  ],
  careerOutcomes: [
    'Kỹ năng tư duy phản biện là yêu cầu hàng đầu của các nhà tuyển dụng trong mọi lĩnh vực.',
    'Nền tảng vững chắc cho các ngành nghề như luật, báo chí, nghiên cứu, quản lý, và phân tích dữ liệu.',
  ],
  tags: ['tư duy phản biện', 'giải quyết vấn đề', 'logic', 'ngụy biện', 'kỹ năng mềm'],
};
