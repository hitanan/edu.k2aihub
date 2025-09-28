import { BaseLessonData } from '@/types/lesson-base';

export interface LeadershipLesson extends BaseLessonData {
  caseStudies: Array<{
    title: string;
    organization: string;
    problem: string;
    solution: string;
    impact: string;
    innovations: string[];
  }>;
}

export const leadershipManagementLessons: LeadershipLesson[] = [
  {
    id: 'introduction-to-modern-leadership',
    title: 'Bài 1: Giới thiệu về Lãnh đạo Hiện đại',
    description:
      'Khám phá các lý thuyết lãnh đạo cốt lõi và cách chúng được áp dụng trong môi trường kinh doanh năng động ngày nay, đặc biệt tại Việt Nam.',
    videoUrl: 'https://www.youtube.com/watch?v=p_iO35_Y2sY',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop',
    difficulty: 'Cơ bản',
    duration: '90 phút',
    objectives: [
      'Hiểu được sự khác biệt giữa quản lý và lãnh đạo.',
      'Nắm vững các phong cách lãnh đạo chính (Lãnh đạo phục vụ, Lãnh đạo chuyển đổi...).',
      'Phân tích các thách thức của lãnh đạo trong bối cảnh toàn cầu hóa và số hóa.',
      'Xác định và phát triển phong cách lãnh đạo cá nhân.',
    ],
    prerequisites: ['Không yêu cầu kiến thức nền tảng.', 'Có tinh thần học hỏi và mong muốn phát triển bản thân.'],
    exercises: [
      {
        title: 'Trắc nghiệm Phong cách Lãnh đạo',
        description:
          'Hoàn thành bài trắc nghiệm để xác định phong cách lãnh đạo tự nhiên của bạn và nhận diện điểm mạnh, điểm yếu.',
        difficulty: 'Cơ bản',
        materials: ['Giấy và bút hoặc một trình soạn thảo văn bản.'],
        procedure: [
          'Đọc qua một loạt các tình huống giả định trong môi trường làm việc.',
          'Chọn phương án giải quyết mà bạn cảm thấy phù hợp nhất với mình.',
          'Dựa trên các câu trả lời, tính điểm và xác định phong cách lãnh đạo chủ đạo của bạn.',
        ],
        expectedResults: 'Một báo cáo ngắn gọn mô tả phong cách lãnh đạo của bạn, cùng với các gợi ý để phát triển.',
        solution:
          'Không có đáp án đúng hay sai tuyệt đối. Kết quả phản ánh xu hướng hành vi của bạn. Ví dụ: Nếu bạn thường xuyên chọn các phương án tập trung vào việc hỗ trợ và phát triển đội ngũ, bạn có thể có xu hướng của một nhà lãnh đạo phục vụ.',
      },
    ],
    realWorldApplications: [
      'Xây dựng và dẫn dắt một đội nhóm startup.',
      'Quản lý một dự án phức tạp với nhiều bên liên quan.',
      'Thực hiện một sự thay đổi lớn trong tổ chức.',
      'Tạo động lực cho đội ngũ trong giai đoạn khó khăn.',
    ],
    caseStudies: [
      {
        title: 'Vinamilk và hành trình chuyển đổi dưới sự lãnh đạo của bà Mai Kiều Liên',
        organization: 'Vinamilk',
        problem:
          'Từ một công ty nhà nước, Vinamilk cần phải chuyển đổi để cạnh tranh trong nền kinh tế thị trường, đối mặt với các đối thủ đa quốc gia.',
        solution:
          'Bà Mai Kiều Liên đã áp dụng phong cách lãnh đạo quyết đoán, tập trung vào đổi mới sản phẩm, xây dựng thương hiệu mạnh và quản trị minh bạch. Bà trao quyền cho đội ngũ và đầu tư mạnh vào công nghệ.',
        impact:
          'Vinamilk trở thành một trong những công ty sữa lớn nhất châu Á, với thương hiệu được người tiêu dùng Việt Nam tin tưởng tuyệt đối.',
        innovations: [
          'Tiên phong trong việc áp dụng các tiêu chuẩn quốc tế vào sản xuất.',
          'Xây dựng thành công văn hóa doanh nghiệp tập trung vào chất lượng và sự chính trực.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Sự khác biệt cơ bản giữa quản lý và lãnh đạo là gì?',
        answer:
          'Quản lý tập trung vào việc duy trì sự ổn định, tổ chức công việc, và đảm bảo các quy trình được tuân thủ. Lãnh đạo tập trung vào việc truyền cảm hứng, tạo ra sự thay đổi, và định hướng cho tương lai. Một người quản lý giỏi giữ cho con tàu chạy đúng lịch trình, một nhà lãnh đạo giỏi quyết định con tàu sẽ đi về đâu.',
      },
      {
        question: 'Lãnh đạo phục vụ (Servant Leadership) là gì?',
        answer:
          'Là phong cách lãnh đạo đặt nhu cầu của đội ngũ lên hàng đầu. Nhà lãnh đạo phục vụ tập trung vào việc phát triển và trao quyền cho nhân viên, tin rằng khi đội ngũ phát triển, tổ chức sẽ thành công. Họ lắng nghe, đồng cảm và hỗ trợ.',
      },
      {
        question: 'Làm thế nào để một người hướng nội có thể trở thành một nhà lãnh đạo giỏi?',
        answer:
          'Người hướng nội có những thế mạnh lãnh đạo riêng: họ thường là những người lắng nghe tuyệt vời, suy nghĩ sâu sắc và chuẩn bị kỹ lưỡng. Thay vì cố gắng trở thành người hướng ngoại, họ nên tận dụng thế mạnh của mình, tập trung vào giao tiếp 1-1, và xây dựng ảnh hưởng thông qua kiến thức chuyên môn và sự chân thành.',
      },
      {
        question: 'Trí tuệ cảm xúc (EQ) quan trọng như thế nào đối với một nhà lãnh đạo?',
        answer:
          'Cực kỳ quan trọng. EQ là khả năng nhận biết, hiểu và quản lý cảm xúc của bản thân và của người khác. Một nhà lãnh đạo có EQ cao có thể xây dựng mối quan hệ bền chặt, giải quyết xung đột hiệu quả, và tạo ra một môi trường làm việc tích cực, tin cậy.',
      },
      {
        question: 'Làm thế nào để tạo động lực cho một đội ngũ đã mất đi nhiệt huyết?',
        answer:
          'Hãy bắt đầu bằng việc lắng nghe để hiểu nguyên nhân gốc rễ. Sau đó, hãy kết nối lại công việc của họ với một mục tiêu lớn hơn, ý nghĩa hơn. Công nhận và khen thưởng những nỗ lực nhỏ, trao cho họ quyền tự chủ và cơ hội để phát triển kỹ năng mới cũng là những cách hiệu quả.',
      },
      {
        question: "Phong cách lãnh đạo nào là 'tốt nhất'?",
        answer:
          "Không có phong cách nào là tốt nhất trong mọi tình huống. Nhà lãnh đạo hiệu quả nhất là người có khả năng linh hoạt, điều chỉnh phong cách của mình cho phù hợp với từng tình huống cụ thể và từng thành viên trong đội ngũ. Đây được gọi là 'Lãnh đạo theo tình huống' (Situational Leadership).",
      },
      {
        question: 'Làm thế nào để xây dựng lòng tin với đội ngũ của mình?',
        answer:
          'Lòng tin được xây dựng dựa trên ba yếu tố: Năng lực (bạn có đủ giỏi để dẫn dắt họ không?), Sự chính trực (bạn có làm điều đúng đắn không?), và Sự quan tâm (bạn có thực sự quan tâm đến họ không?). Hãy luôn minh bạch, giữ lời hứa, thừa nhận sai lầm và thể hiện sự quan tâm chân thành đến các thành viên.',
      },
      {
        question: 'Một nhà lãnh đạo mới nên làm gì trong 90 ngày đầu tiên?',
        answer:
          "Trong 90 ngày đầu, hãy tập trung vào việc 'Học hỏi'. Lắng nghe nhiều hơn nói. Gặp gỡ từng thành viên trong đội ngũ để hiểu về họ. Tìm hiểu về văn hóa, quy trình và những thách thức của công ty. Xác định một vài 'chiến thắng nhanh' (quick wins) để tạo đà và xây dựng sự tín nhiệm.",
      },
      {
        question: 'Làm thế nào để đưa ra phản hồi tiêu cực mà không làm mất lòng nhân viên?',
        answer:
          "Hãy sử dụng mô hình 'Bánh mì kẹp': Bắt đầu bằng một lời khen ngợi chân thành, sau đó đi vào phần góp ý cụ thể, tập trung vào hành vi chứ không phải con người, và cuối cùng kết thúc bằng một lời động viên và cam kết hỗ trợ. Luôn thực hiện cuộc trò chuyện này ở nơi riêng tư.",
      },
      {
        question: "Sự khác biệt giữa 'micromanagement' và quản lý chi tiết là gì?",
        answer:
          'Quản lý chi tiết là cần thiết khi một nhân viên mới hoặc đang thực hiện một nhiệm vụ quan trọng. Micromanagement là sự thiếu tin tưởng, kiểm soát mọi hành động nhỏ của nhân viên, ngay cả khi họ đã có đủ năng lực. Micromanagement giết chết sự sáng tạo và động lực, trong khi quản lý chi tiết đúng lúc sẽ giúp nhân viên phát triển.',
      },
    ],
  },
  {
    id: 'team-management',
    title: 'Bài 2: Quản lý đội nhóm',
    description: 'Học cách xây dựng và quản lý một đội nhóm hiệu quả.',
    duration: '90 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Hiểu các giai đoạn phát triển của một đội nhóm (Forming, Storming, Norming, Performing).',
      'Học cách giải quyết xung đột trong nhóm một cách xây dựng.',
      'Biết cách tạo động lực và gắn kết các thành viên trong nhóm.',
      'Phân công nhiệm vụ và vai trò rõ ràng để tối ưu hóa hiệu suất.',
    ],
    prerequisites: ['Kiến thức cơ bản về các phong cách lãnh đạo'],
    exercises: [
      {
        title: 'Bài tập tình huống: Giải quyết xung đột',
        description: 'Phân tích một tình huống xung đột giả định trong nhóm và đề xuất các bước giải quyết.',
        difficulty: 'Trung bình',
        procedure: [
          'Đọc tình huống: Hai thành viên trong nhóm bất đồng quan điểm về hướng đi của dự án.',
          'Xác định nguyên nhân gốc rễ của xung đột.',
          'Đề xuất một cuộc họp hòa giải với các quy tắc giao tiếp rõ ràng.',
          'Vạch ra một kế hoạch hành động để đi đến một giải pháp chung.',
        ],
        expectedResults: 'Một kế hoạch chi tiết để giải quyết xung đột, tập trung vào sự hợp tác và mục tiêu chung.',
      },
    ],
    realWorldApplications: [
      'Các trưởng nhóm dự án trong các công ty công nghệ sử dụng các kỹ thuật này để quản lý đội ngũ phát triển phần mềm.',
      'Các huấn luyện viên thể thao áp dụng các nguyên tắc quản lý nhóm để xây dựng tinh thần đồng đội và chiến thắng.',
      'Các nhà quản lý trong ngành dịch vụ khách hàng xây dựng các đội nhóm gắn kết để cung cấp trải nghiệm tốt nhất cho khách hàng.',
    ],
    caseStudies: [],
    faqs: [
      {
        question: 'Mô hình "Forming, Storming, Norming, Performing" của Tuckman mô tả điều gì?',
        answer:
          'Đây là mô hình mô tả bốn giai đoạn phát triển của một đội nhóm. Giai đoạn "Forming" là khi nhóm mới hình thành. "Storming" là giai đoạn xảy ra xung đột khi các ý tưởng và cá tính va chạm. "Norming" là khi nhóm bắt đầu giải quyết khác biệt và thiết lập quy tắc. "Performing" là giai đoạn nhóm hoạt động hiệu quả và đạt năng suất cao.',
      },
      {
        question: 'Làm thế nào để giải quyết xung đột một cách hiệu quả trong nhóm?',
        answer:
          'Hãy tiếp cận xung đột như một cơ hội để phát triển. Lắng nghe tích cực tất cả các bên, tập trung vào vấn đề chứ không phải con người, tìm kiếm điểm chung và hướng tới một giải pháp "cùng thắng" (win-win). Thiết lập các quy tắc giao tiếp tôn trọng là rất quan trọng.',
      },
      {
        question: 'Làm thế nào để tạo động lực cho một đội nhóm?',
        answer:
          'Tạo động lực bằng cách đặt ra các mục tiêu rõ ràng và thách thức, công nhận và khen thưởng thành tích, trao quyền và tin tưởng các thành viên, tạo cơ hội phát triển cá nhân và xây dựng một môi trường làm việc tích cực, hỗ trợ.',
      },
      {
        question: 'Tại sao việc phân công vai trò rõ ràng lại quan trọng?',
        answer:
          'Việc phân công vai trò rõ ràng giúp tránh sự chồng chéo công việc, giảm thiểu hiểu lầm và đảm bảo rằng mọi người đều biết trách nhiệm của mình là gì. Điều này dẫn đến hiệu quả cao hơn và giảm bớt căng thẳng trong nhóm.',
      },
      {
        question: '"Team building" có thực sự hiệu quả không?',
        answer:
          'Có, nếu được thực hiện đúng cách. Các hoạt động team building hiệu quả không chỉ là những chuyến đi chơi mà còn là các hoạt động có mục đích giúp cải thiện giao tiếp, xây dựng lòng tin và tăng cường sự hợp tác. Chúng nên được thiết kế phù hợp với văn hóa và nhu cầu của nhóm.',
      },
      {
        question: 'Sự khác biệt giữa một nhóm (group) và một đội (team) là gì?',
        answer:
          'Một nhóm là một tập hợp những người làm việc cùng nhau, nhưng mỗi người chịu trách nhiệm về công việc của riêng mình. Một đội là một nhóm người làm việc cùng nhau hướng tới một mục tiêu chung, với trách nhiệm và thành công chung. Một đội có mức độ hợp tác và phụ thuộc lẫn nhau cao hơn.',
      },
      {
        question: 'Làm thế nào để quản lý một thành viên có hiệu suất kém?',
        answer:
          'Bắt đầu bằng một cuộc trò chuyện riêng tư để hiểu nguyên nhân. Cung cấp phản hồi cụ thể, rõ ràng và mang tính xây dựng. Cùng nhau thiết lập một kế hoạch cải thiện hiệu suất (Performance Improvement Plan - PIP) với các mục tiêu và thời gian cụ thể. Cung cấp sự hỗ trợ và đào tạo cần thiết.',
      },
      {
        question: 'Làm thế nào để xây dựng lòng tin trong một đội nhóm?',
        answer:
          'Lòng tin được xây dựng thông qua sự nhất quán, minh bạch và đáng tin cậy. Hãy luôn giữ lời hứa, giao tiếp cởi mở và trung thực, thừa nhận sai lầm, và thể hiện sự tin tưởng vào khả năng của các thành viên khác. Trao quyền cho họ cũng là một cách thể hiện lòng tin.',
      },
      {
        question: 'Vai trò của người quản lý trong việc trao quyền cho nhóm là gì?',
        answer:
          'Người quản lý cần cung cấp cho nhóm các nguồn lực, thông tin và quyền hạn cần thiết để họ có thể tự đưa ra quyết định và hoàn thành công việc. Điều này bao gồm việc tin tưởng vào khả năng của họ, chấp nhận rủi ro có tính toán và không quản lý vi mô (micromanage).',
      },
      {
        question: 'Làm thế nào để tổ chức một cuộc họp nhóm hiệu quả?',
        answer:
          'Một cuộc họp hiệu quả cần có mục tiêu rõ ràng, một chương trình nghị sự (agenda) được gửi trước, chỉ mời những người thực sự cần thiết, bắt đầu và kết thúc đúng giờ, khuyến khích sự tham gia của mọi người, và kết thúc bằng các quyết định rõ ràng và các bước hành động cụ thể (action items) được giao cho từng người.',
      },
    ],
  },
  {
    id: 'effective-communication-eq',
    title: 'Bài 3: Giao tiếp Hiệu quả và Trí tuệ Cảm xúc (EQ)',
    description:
      'Nắm vững nghệ thuật giao tiếp và sử dụng trí tuệ cảm xúc để xây dựng mối quan hệ, truyền cảm hứng và dẫn dắt hiệu quả.',
    duration: '75 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Hiểu các thành phần của giao tiếp hiệu quả (lắng nghe, trình bày, phi ngôn ngữ).',
      'Phát triển 5 thành phần của trí tuệ cảm xúc (tự nhận thức, tự điều chỉnh, động lực, đồng cảm, kỹ năng xã hội).',
      'Học cách đưa ra và nhận phản hồi một cách xây dựng.',
      'Sử dụng kỹ năng giao tiếp để giải quyết xung đột và đàm phán.',
    ],
    prerequisites: ['Không yêu cầu'],
    exercises: [
      {
        title: 'Bài tập Lắng nghe Tích cực',
        description: 'Thực hành kỹ thuật lắng nghe tích cực trong một cuộc hội thoại đóng vai.',
        difficulty: 'Cơ bản',
        procedure: [
          'Bắt cặp với một người khác.',
          'Một người nói về một chủ đề trong 3 phút. Người còn lại chỉ được lắng nghe, không ngắt lời.',
          'Sau 3 phút, người nghe tóm tắt lại những gì họ đã nghe được và cảm xúc của người nói.',
          'Đổi vai.',
        ],
        expectedResults: 'Cải thiện khả năng tập trung, thấu cảm và hiểu sâu hơn thông điệp của người đối diện.',
      },
    ],
    realWorldApplications: [
      'Một nhà lãnh đạo sử dụng EQ để thấu cảm và hỗ trợ một nhân viên đang gặp khó khăn cá nhân.',
      'Một giám đốc bán hàng sử dụng kỹ năng đàm phán để chốt một hợp đồng lớn.',
      'Một trưởng nhóm sử dụng kỹ năng phản hồi để giúp một thành viên cải thiện hiệu suất.',
    ],
    caseStudies: [],
    faqs: [
      {
        question: 'Trí tuệ cảm xúc (EQ) có thể rèn luyện được không?',
        answer:
          'Hoàn toàn có thể. EQ không phải là bẩm sinh. Bằng cách thực hành tự nhận thức (ví dụ: viết nhật ký cảm xúc), quan sát người khác, và chủ động áp dụng các kỹ năng như lắng nghe tích cực, bạn có thể cải thiện đáng kể EQ của mình theo thời gian.',
      },
      {
        question: 'Làm thế nào để lắng nghe một cách tích cực?',
        answer:
          'Lắng nghe tích cực bao gồm: tập trung hoàn toàn vào người nói, tránh ngắt lời, đặt câu hỏi để làm rõ, diễn giải lại những gì bạn nghe được bằng lời của mình, và chú ý đến cả ngôn ngữ cơ thể của họ. Mục tiêu là để hiểu, không phải để trả lời.',
      },
      {
        question: 'Làm thế nào để đưa ra phản hồi mang tính xây dựng?',
        answer:
          'Hãy cụ thể, tập trung vào hành vi chứ không phải tính cách, và đưa ra các ví dụ rõ ràng. Sử dụng cấu trúc "Khi bạn làm X, nó gây ra ảnh hưởng Y, tôi cảm thấy Z". Luôn đưa ra phản hồi ở nơi riêng tư và kết thúc bằng một gợi ý cải thiện hoặc một cam kết hỗ trợ.',
      },
      {
        question: 'Ngôn ngữ cơ thể chiếm bao nhiêu phần trăm trong giao tiếp?',
        answer:
          'Các nghiên cứu chỉ ra rằng ngôn ngữ cơ thể (cử chỉ, ánh mắt, nét mặt) và giọng điệu chiếm một phần rất lớn trong việc truyền tải thông điệp, thường là trên 50%. Lời nói chỉ là một phần. Một nhà lãnh đạo giỏi cần nhận biết và sử dụng hiệu quả cả giao tiếp phi ngôn ngữ.',
      },
      {
        question: 'Làm thế nào để nói trước đám đông một cách tự tin?',
        answer:
          'Sự chuẩn bị là chìa khóa. Hãy hiểu rõ khán giả của bạn, cấu trúc bài nói của bạn một cách logic, và luyện tập nhiều lần. Bắt đầu bằng một câu chuyện hoặc một câu hỏi gây chú ý. Duy trì giao tiếp bằng mắt và sử dụng ngôn ngữ cơ thể cởi mở. Hãy nhớ rằng, mục tiêu là kết nối, không phải là hoàn hảo.',
      },
      {
        question: 'Kỹ năng đàm phán quan trọng như thế nào với nhà lãnh đạo?',
        answer:
          'Cực kỳ quan trọng. Lãnh đạo là quá trình gây ảnh hưởng, và đàm phán là một công cụ cốt lõi của sự ảnh hưởng. Nhà lãnh đạo cần đàm phán hàng ngày: với cấp trên về nguồn lực, với nhân viên về mục tiêu, với đối tác về hợp đồng. Kỹ năng đàm phán tốt giúp đạt được kết quả tối ưu cho tất cả các bên.',
      },
      {
        question: 'Làm thế nào để xây dựng sự đồng cảm (empathy)?',
        answer:
          'Hãy thực hành đặt mình vào vị trí của người khác. Chủ động hỏi về cảm xúc và quan điểm của họ. Đọc sách và xem phim để hiểu về các trải nghiệm sống khác nhau. Tạm gác lại phán xét của bạn và thực sự cố gắng nhìn thế giới qua lăng kính của người khác.',
      },
      {
        question: 'Sự khác biệt giữa đồng cảm (empathy) và thông cảm (sympathy) là gì?',
        answer:
          'Thông cảm là cảm thấy "tiếc cho" ai đó (I feel for you). Đồng cảm là cảm thấy "cùng với" ai đó (I feel with you). Đồng cảm là khả năng bạn thực sự hiểu và chia sẻ cảm xúc của người khác, trong khi thông cảm chỉ là sự thừa nhận nỗi khổ của họ từ một khoảng cách.',
      },
      {
        question: 'Làm thế nào để quản lý cảm xúc của bản thân khi căng thẳng?',
        answer:
          'Hãy bắt đầu bằng việc nhận diện cảm xúc của bạn. Hít thở sâu để làm dịu hệ thần kinh. Nếu có thể, hãy tạm thời rời khỏi tình huống đó. Thử nhìn nhận vấn đề từ một góc độ khác. Việc thường xuyên thực hành thiền định và tập thể dục cũng giúp tăng khả năng tự điều chỉnh cảm xúc.',
      },
      {
        question: 'Tại sao việc kể chuyện (storytelling) lại là một công cụ giao tiếp mạnh mẽ cho nhà lãnh đạo?',
        answer:
          'Câu chuyện giúp biến những dữ liệu và ý tưởng trừu tượng trở nên sống động, dễ nhớ và có cảm xúc. Một câu chuyện hay có thể truyền tải tầm nhìn, củng cố giá trị văn hóa, và truyền cảm hứng hành động một cách hiệu quả hơn nhiều so với các gạch đầu dòng trong một bài thuyết trình.',
      },
    ],
  },
  {
    id: 'decision-making-problem-solving',
    title: 'Bài 4: Ra quyết định và Giải quyết Vấn đề',
    description:
      'Trang bị các mô hình và công cụ tư duy để đưa ra những quyết định sáng suốt và giải quyết các vấn đề phức tạp một cách có hệ thống.',
    duration: '90 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Hiểu các thiên kiến nhận thức (cognitive biases) phổ biến ảnh hưởng đến việc ra quyết định.',
      'Áp dụng các mô hình ra quyết định như Ma trận Eisenhower, Phân tích SWOT.',
      'Sử dụng kỹ thuật "5 Whys" và biểu đồ xương cá để tìm ra nguyên nhân gốc rễ của vấn đề.',
      'Phát triển kỹ năng tư duy sáng tạo để tìm ra các giải pháp đột phá.',
    ],
    prerequisites: ['Tư duy logic cơ bản'],
    exercises: [
      {
        title: 'Phân tích Nguyên nhân Gốc rễ (Root Cause Analysis)',
        description:
          'Sử dụng kỹ thuật "5 Whys" để phân tích một vấn đề thường gặp trong công việc (ví dụ: dự án bị trễ tiến độ).',
        difficulty: 'Trung bình',
        procedure: [
          'Nêu vấn đề: "Dự án X bị trễ 2 tuần so với kế hoạch."',
          'Hỏi "Tại sao?" lần 1: "Bởi vì tính năng Y mất nhiều thời gian hơn dự kiến."',
          'Hỏi "Tại sao?" lần 2: "Bởi vì yêu cầu kỹ thuật không rõ ràng."',
          'Tiếp tục hỏi "Tại sao?" cho đến khi tìm ra nguyên nhân cốt lõi (ví dụ: quy trình thu thập yêu cầu ban đầu có lỗ hổng).',
        ],
        expectedResults: 'Xác định được nguyên nhân gốc rễ của vấn đề, thay vì chỉ xử lý các triệu chứng bề mặt.',
      },
    ],
    realWorldApplications: [
      'Một CEO sử dụng phân tích SWOT để quyết định hướng đi chiến lược cho công ty.',
      'Một đội ngũ kỹ sư sử dụng biểu đồ xương cá để tìm ra lỗi trong một sản phẩm.',
      'Một nhà quản lý dự án sử dụng ma trận Eisenhower để ưu tiên công việc cho đội nhóm.',
    ],
    caseStudies: [],
    faqs: [
      {
        question: 'Thiên kiến xác nhận (Confirmation Bias) là gì?',
        answer:
          'Đó là xu hướng chúng ta chỉ tìm kiếm, diễn giải và ghi nhớ những thông tin xác nhận cho niềm tin sẵn có của mình, trong khi bỏ qua những thông tin trái ngược. Để chống lại nó, hãy chủ động tìm kiếm những quan điểm và bằng chứng thách thức giả định của bạn.',
      },
      {
        question: 'Ma trận Eisenhower hoạt động như thế nào?',
        answer:
          'Ma trận này giúp bạn ưu tiên công việc bằng cách chia chúng vào 4 ô dựa trên hai tiêu chí: Khẩn cấp và Quan trọng. Ô 1 (Khẩn cấp & Quan trọng): Làm ngay. Ô 2 (Không Khẩn cấp & Quan trọng): Lên lịch. Ô 3 (Khẩn cấp & Không Quan trọng): Ủy quyền. Ô 4 (Không Khẩn cấp & Không Quan trọng): Loại bỏ.',
      },
      {
        question: 'Kỹ thuật "5 Whys" là gì?',
        answer:
          'Đây là một kỹ thuật đơn giản nhưng mạnh mẽ để tìm ra nguyên nhân gốc rễ của một vấn đề bằng cách hỏi "Tại sao?" lặp đi lặp lại (thường là khoảng 5 lần). Mỗi câu trả lời sẽ là cơ sở cho câu hỏi "Tại sao?" tiếp theo, giúp bạn đào sâu hơn vào chuỗi nhân quả.',
      },
      {
        question: 'Phân tích SWOT là gì?',
        answer:
          'SWOT là viết tắt của Strengths (Điểm mạnh), Weaknesses (Điểm yếu), Opportunities (Cơ hội), và Threats (Thách thức). Đây là một khung phân tích chiến lược giúp một cá nhân hoặc tổ chức xác định các yếu tố bên trong (S, W) và bên ngoài (O, T) để làm cơ sở cho việc ra quyết định.',
      },
      {
        question: 'Làm thế nào để khuyến khích tư duy sáng tạo trong đội nhóm?',
        answer:
          'Hãy tạo ra một môi trường an toàn tâm lý, nơi mọi ý tưởng, dù "điên rồ", đều được chào đón. Sử dụng các kỹ thuật như brainstorming (động não), mind mapping (sơ đồ tư duy), hoặc "six thinking hats" (sáu chiếc mũ tư duy) để khuyến khích mọi người nhìn vấn đề từ nhiều góc độ khác nhau.',
      },
      {
        question: 'Sự khác biệt giữa vấn đề phức tạp (complicated) và vấn đề rắc rối (complex) là gì?',
        answer:
          'Một vấn đề phức tạp (complicated) có nhiều bộ phận nhưng chúng hoạt động theo một cách có thể dự đoán được (ví dụ: động cơ xe hơi). Bạn có thể tháo rời và lắp ráp lại. Một vấn đề rắc rối (complex) có nhiều yếu tố tương tác với nhau theo những cách không thể đoán trước (ví dụ: thị trường chứng khoán, nuôi dạy con cái). Các giải pháp cho vấn đề rắc rối thường cần sự thử nghiệm và thích ứng liên tục.',
      },
      {
        question: 'Tư duy hệ thống (Systems Thinking) là gì?',
        answer:
          'Là cách nhìn nhận các vấn đề không phải như những sự kiện riêng lẻ, mà là một phần của một hệ thống lớn hơn với các mối quan hệ tương tác. Thay vì chỉ sửa chữa "triệu chứng", tư duy hệ thống giúp bạn tìm ra các điểm đòn bẩy để tạo ra sự thay đổi bền vững trong toàn bộ hệ thống.',
      },
      {
        question: 'Làm thế nào để ra quyết định khi có quá ít thông tin?',
        answer:
          'Trong trường hợp này, hãy tập trung vào việc đưa ra một quyết định "có thể đảo ngược" và có chi phí thấp để thử nghiệm. Coi quyết định đó như một giả thuyết và nhanh chóng thu thập dữ liệu để kiểm chứng. Hãy sẵn sàng điều chỉnh hoặc thay đổi quyết định khi có thêm thông tin. Đây là tư duy cốt lõi của phương pháp Lean Startup.',
      },
      {
        question: 'Hiệu ứng mỏ neo (Anchoring Effect) ảnh hưởng đến quyết định như thế nào?',
        answer:
          'Đây là một thiên kiến nhận thức khiến chúng ta phụ thuộc quá nhiều vào thông tin đầu tiên nhận được (cái "mỏ neo") khi ra quyết định. Ví dụ, mức lương đầu tiên bạn đề xuất trong một cuộc đàm phán sẽ ảnh hưởng lớn đến kết quả cuối cùng. Hãy nhận biết các "mỏ neo" và chủ động đặt câu hỏi về tính hợp lệ của chúng.',
      },
      {
        question: 'Khi nào một nhà lãnh đạo nên tự ra quyết định và khi nào nên tham khảo ý kiến nhóm?',
        answer:
          'Nếu quyết định đòi hỏi tốc độ và bạn là người có đủ thông tin và chuyên môn nhất, hãy tự quyết định. Nếu quyết định đòi hỏi sự sáng tạo, sự chấp nhận của cả nhóm, và các thành viên có những kiến thức giá trị để đóng góp, hãy để cả nhóm tham gia. Một nhà lãnh đạo giỏi biết khi nào cần quyết đoán và khi nào cần hợp tác.',
      },
    ],
  },
  {
    id: 'change-management-innovation',
    title: 'Bài 5: Quản lý Sự thay đổi và Đổi mới Sáng tạo',
    description:
      'Học cách dẫn dắt và quản lý các sáng kiến thay đổi trong tổ chức, đồng thời thúc đẩy một văn hóa đổi mới sáng tạo bền vững.',
    duration: '100 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Hiểu được tâm lý phản kháng sự thay đổi và cách vượt qua.',
      'Áp dụng mô hình quản lý thay đổi của Kotter (8 bước).',
      'Xây dựng một môi trường làm việc khuyến khích sự thử nghiệm và chấp nhận rủi ro.',
      'Phân biệt giữa đổi mới tiệm tiến (incremental) và đổi mới đột phá (disruptive).',
    ],
    prerequisites: ['Kinh nghiệm làm việc trong một tổ chức', 'Kiến thức về quản lý dự án là một lợi thế'],
    exercises: [
      {
        title: 'Lập kế hoạch Quản lý Thay đổi',
        description:
          'Sử dụng mô hình 8 bước của Kotter để lập kế hoạch cho một sáng kiến thay đổi giả định (ví dụ: áp dụng một phần mềm CRM mới cho toàn công ty).',
        difficulty: 'Nâng cao',
        procedure: [
          'Bước 1: Tạo cảm giác khẩn cấp (Tại sao phải thay đổi ngay bây giờ?).',
          'Bước 2: Xây dựng một liên minh dẫn dắt mạnh mẽ.',
          'Bước 3: Tạo ra một tầm nhìn cho sự thay đổi.',
          'Lập kế hoạch chi tiết cho 5 bước còn lại.',
        ],
        expectedResults: 'Một bản kế hoạch quản lý thay đổi chi tiết, có tính thuyết phục và khả thi.',
      },
    ],
    realWorldApplications: [
      'Một công ty thực hiện chuyển đổi số, thay đổi toàn bộ quy trình làm việc.',
      'Một tập đoàn sáp nhập hai công ty con với hai nền văn hóa khác biệt.',
      'Một startup giới thiệu một sản phẩm đột phá ra thị trường.',
    ],
    caseStudies: [],
    faqs: [
      {
        question: 'Tại sao mọi người thường phản kháng lại sự thay đổi?',
        answer:
          'Sự phản kháng thường không phải vì bản thân sự thay đổi, mà là vì những gì họ sợ mất đi: sự thoải mái của thói quen, cảm giác về năng lực, các mối quan hệ hiện có, hoặc quyền lực. Một nhà lãnh đạo giỏi cần thấu cảm và giải quyết những nỗi sợ này.',
      },
      {
        question: 'Mô hình 8 bước của Kotter để dẫn dắt sự thay đổi là gì?',
        answer:
          'Đó là một quy trình gồm 8 bước: 1. Tạo sự khẩn cấp. 2. Xây dựng liên minh. 3. Tạo tầm nhìn. 4. Truyền thông tầm nhìn. 5. Trao quyền hành động. 6. Tạo ra các chiến thắng ngắn hạn. 7. Củng cố thành quả và tạo ra nhiều thay đổi hơn. 8. Neo sự thay đổi vào văn hóa.',
      },
      {
        question: 'Làm thế nào để xây dựng một văn hóa đổi mới trong tổ chức?',
        answer:
          'Văn hóa đổi mới bắt đầu từ lãnh đạo. Hãy khuyến khích sự tò mò, trao quyền cho nhân viên thử nghiệm những ý tưởng mới, và quan trọng nhất là phải chấp nhận và học hỏi từ thất bại. Hãy công khai khen thưởng những nỗ lực thử nghiệm, ngay cả khi chúng không thành công.',
      },
      {
        question: 'Sự khác biệt giữa đổi mới (innovation) và sáng tạo (creativity) là gì?',
        answer:
          'Sáng tạo là việc nghĩ ra những ý tưởng mới. Đổi mới là việc thực thi những ý tưởng mới đó để tạo ra giá trị. Một tổ chức có thể có nhiều người sáng tạo, nhưng nếu không có quy trình và văn hóa để biến ý tưởng thành hiện thực, nó sẽ không có sự đổi mới.',
      },
      {
        question: '"Chiến thắng ngắn hạn" (short-term wins) có vai trò gì trong quản lý thay đổi?',
        answer:
          'Các chiến thắng ngắn hạn cực kỳ quan trọng. Chúng cung cấp bằng chứng hữu hình rằng sự thay đổi đang có hiệu quả, giúp duy trì động lực, làm im lặng những người hoài nghi, và tạo đà cho những bước thay đổi lớn hơn tiếp theo.',
      },
      {
        question: 'Làm thế nào để truyền thông hiệu quả trong một quá trình thay đổi?',
        answer:
          'Hãy truyền thông một cách thường xuyên, nhất quán và qua nhiều kênh khác nhau. Lặp lại tầm nhìn và lý do của sự thay đổi nhiều lần. Quan trọng nhất, hãy tạo ra các kênh để đối thoại hai chiều, nơi nhân viên có thể đặt câu hỏi và bày tỏ mối quan tâm của họ.',
      },
      {
        question: 'Đổi mới đột phá (Disruptive Innovation) là gì?',
        answer:
          'Là một loại đổi mới tạo ra một thị trường và mạng lưới giá trị mới, cuối cùng phá vỡ một thị trường hiện có. Thường thì nó bắt đầu bằng cách phục vụ một phân khúc khách hàng bị bỏ qua với một sản phẩm đơn giản hơn, rẻ hơn, và sau đó dần dần tiến lên thị trường cao cấp. Ví dụ: Netflix đã phá vỡ ngành cho thuê DVD của Blockbuster.',
      },
      {
        question: 'Làm thế nào để một công ty lớn có thể đổi mới như một startup?',
        answer:
          'Các công ty lớn có thể tạo ra các "nhóm đổi mới" nội bộ hoặc "phòng thí nghiệm" (innovation labs) hoạt động độc lập với các quy trình quan liêu thông thường. Họ được trao quyền tự chủ, ngân sách riêng và sự cho phép để thử nghiệm và thất bại nhanh chóng, giống như một startup.',
      },
      {
        question: 'Tư duy thiết kế (Design Thinking) giúp gì cho đổi mới?',
        answer:
          'Tư duy thiết kế là một quy trình đổi mới lấy con người làm trung tâm. Nó bắt đầu bằng việc thấu cảm sâu sắc với người dùng để hiểu vấn đề của họ, sau đó định nghĩa vấn đề, lên ý tưởng, tạo mẫu thử (prototype) và thử nghiệm. Nó giúp đảm bảo rằng các giải pháp đổi mới thực sự giải quyết được các vấn đề thực tế của người dùng.',
      },
      {
        question: 'Vai trò của người lãnh đạo sau khi một sự thay đổi đã được thực hiện là gì?',
        answer:
          'Công việc vẫn chưa kết thúc. Người lãnh đạo cần liên tục củng cố các hành vi mới, đảm bảo rằng các hệ thống và quy trình của công ty (tuyển dụng, đánh giá hiệu suất, khen thưởng) đều hỗ trợ cho sự thay đổi. Họ cần kể những câu chuyện thành công và đảm bảo rằng "cách làm việc mới" trở thành một phần không thể thiếu của văn hóa tổ chức.',
      },
    ],
  },
];
