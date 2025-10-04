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
        {
          question: 'Làm thế nào để rèn luyện tư duy phản biện hàng ngày?',
          answer:
            'Hãy bắt đầu bằng việc đặt câu hỏi về những thông tin bạn tiếp nhận. Khi đọc một tin tức, hãy tự hỏi: "Nguồn tin này có đáng tin cậy không?", "Có góc nhìn nào khác không?", "Bằng chứng nào được đưa ra?". Thảo luận về các chủ đề với bạn bè có quan điểm khác bạn cũng là một cách tuyệt vời.',
        },
        {
          question: 'Tư duy phản biện có ích gì trong học tập?',
          answer:
            'Nó giúp bạn không chỉ ghi nhớ kiến thức một cách máy móc mà còn hiểu sâu sắc vấn đề. Bạn có thể phân tích các lý thuyết, so sánh các quan điểm khác nhau và hình thành lập luận của riêng mình, giúp việc học trở nên chủ động và hiệu quả hơn.',
        },
        {
          question: 'Sự khác biệt giữa ý kiến (opinion) và lập luận (argument) là gì?',
          answer:
            'Ý kiến là một niềm tin hoặc phán đoán cá nhân, không nhất thiết phải dựa trên bằng chứng. Một lập luận là một chuỗi các lý lẽ, được hỗ trợ bởi bằng chứng, nhằm thuyết phục người khác về một kết luận cụ thể. Tư duy phản biện tập trung vào việc xây dựng và đánh giá các lập luận.',
        },
        {
          question: 'Tại sao sự tò mò lại quan trọng đối với tư duy phản biện?',
          answer:
            'Sự tò mò thúc đẩy chúng ta đặt câu hỏi, tìm kiếm thông tin và không chấp nhận câu trả lời bề mặt. Một người có tư duy phản biện luôn muốn biết "tại sao" và "như thế nào", điều này dẫn đến sự hiểu biết sâu sắc hơn.',
        },
        {
          question: 'Làm thế nào để giữ một cái đầu "mở" nhưng không "rỗng"?',
          answer:
            'Giữ một cái đầu "mở" có nghĩa là sẵn sàng xem xét các ý tưởng và bằng chứng mới, ngay cả khi chúng thách thức niềm tin của bạn. Tuy nhiên, điều đó không có nghĩa là chấp nhận mọi thứ một cách không chọn lọc. Hãy sử dụng các tiêu chuẩn về logic và bằng chứng để đánh giá thông tin trước khi chấp nhận nó.',
        },
        {
          question: 'Mô hình 5 bước của tư duy phản biện có cần phải theo đúng thứ tự không?',
          answer:
            'Mô hình (Quan sát, Phân tích, Suy luận, Giao tiếp, Phản tư) cung cấp một cấu trúc hữu ích, nhưng trong thực tế, quá trình tư duy có thể không hoàn toàn tuyến tính. Bạn có thể quay lại bước phân tích sau khi đã suy luận, hoặc liên tục quan sát trong suốt quá trình. Sự linh hoạt là quan trọng.',
        },
        {
          question: 'Tư duy phản biện có phải là một kỹ năng bẩm sinh?',
          answer:
            'Một số người có thể có khuynh hướng tự nhiên tò mò và phân tích hơn, nhưng tư duy phản biện về cơ bản là một kỹ năng có thể học và rèn luyện được. Giống như chơi một môn thể thao, bạn càng thực hành nhiều, bạn càng trở nên giỏi hơn.',
        },
        {
          question: 'Làm thế nào để áp dụng 5W1H một cách hiệu quả?',
          answer:
            'Hãy dùng nó như một bộ công cụ để "bóc tách" một vấn đề. What (Cái gì đã xảy ra?), Why (Tại sao nó xảy ra?), Who (Ai liên quan?), Where (Nó xảy ra ở đâu?), When (Khi nào?), và How (Nó diễn ra như thế nào?). Trả lời những câu hỏi này giúp bạn có một cái nhìn toàn diện về tình huống trước khi đưa ra phán đoán.',
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
        {
          question: 'Ngụy biện "dốc trơn" (slippery slope) là gì?',
          answer:
            'Đây là lập luận cho rằng một hành động ban đầu, có vẻ vô hại, sẽ chắc chắn dẫn đến một chuỗi các sự kiện tiêu cực không thể tránh khỏi. Ví dụ: "Nếu chúng ta cho phép học sinh sử dụng điện thoại trong lớp, chúng sẽ không bao giờ chú ý học và tất cả sẽ trượt kỳ thi." Lập luận này bỏ qua các khả năng khác.',
        },
        {
          question: 'Làm thế nào để phân biệt giữa một lập luận yếu và một ngụy biện?',
          answer:
            'Một lập luận yếu có thể có lý lẽ và bằng chứng, nhưng chúng không đủ mạnh để hỗ trợ kết luận. Một ngụy biện là một lỗi trong cấu trúc logic của lập luận, khiến nó không hợp lệ, ngay cả khi các tiền đề của nó là đúng.',
        },
        {
          question: 'Ngụy biện "song đề sai" (false dilemma) là gì?',
          answer:
            'Đây là ngụy biện đưa ra chỉ hai lựa chọn như thể đó là những khả năng duy nhất, trong khi thực tế có nhiều lựa chọn khác. Ví dụ: "Hoặc là bạn hoàn toàn ủng hộ chính sách của chúng tôi, hoặc là bạn chống lại sự tiến bộ của đất nước." Nó buộc người nghe phải chọn một trong hai thái cực.',
        },
        {
          question: 'Tại sao việc nhận diện ngụy biện lại quan trọng?',
          answer:
            'Việc nhận diện ngụy biện giúp bạn không bị đánh lừa bởi những lập luận có vẻ thuyết phục nhưng lại rỗng tuếch về mặt logic. Nó giúp bạn đưa ra quyết định dựa trên lý trí và bằng chứng, thay vì bị thao túng bởi cảm xúc hoặc các lỗi lập luận.',
        },
        {
          question: 'Phản ứng như thế nào khi ai đó sử dụng ngụy biện với bạn?',
          answer:
            'Hãy giữ bình tĩnh và lịch sự. Thay vì nói "Bạn đang ngụy biện!", hãy thử chỉ ra lỗi logic một cách cụ thể. Ví dụ: "Tôi hiểu quan điểm của bạn, nhưng dường như chúng ta đang thảo luận về tính cách của anh ấy thay vì tính hợp lý trong kế hoạch của anh ấy. Chúng ta có thể quay lại chủ đề chính không?"',
        },
        {
          question: 'Ngụy biện "tấn công cá nhân" (Ad Hominem) có phải lúc nào cũng sai không?',
          answer:
            'Trong hầu hết các cuộc tranh luận về một vấn đề, tấn công cá nhân là một ngụy biện. Tuy nhiên, trong một số ngữ cảnh nhất định, chẳng hạn như đánh giá sự đáng tin của một nhân chứng, việc xem xét tính cách hoặc động cơ của họ có thể có liên quan. Nhưng nó vẫn cần được thực hiện một cách cẩn trọng.',
        },
        {
          question: 'Ngụy biện "lập luận vòng quanh" (circular reasoning) là gì?',
          answer:
            'Xảy ra khi một người bắt đầu bằng chính điều họ đang cố gắng chứng minh. Ví dụ: "Cuốn sách này nói sự thật, vì nó được viết bởi một chuyên gia. Chúng ta biết ông ấy là chuyên gia vì ông ấy đã viết cuốn sách này." Lập luận này không đưa ra bằng chứng bên ngoài nào.',
        },
        {
          question: 'Làm thế nào để tránh sử dụng ngụy biện trong lập luận của chính mình?',
          answer:
            'Hãy luôn tự hỏi: "Các bằng chứng của mình có thực sự hỗ trợ cho kết luận không?". Hãy xem xét các góc nhìn phản biện đối với lập luận của bạn. Trình bày ý kiến của mình một cách rõ ràng và trung thực, tập trung vào vấn đề thay vì tấn công người khác.',
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
        {
          question: 'Chu trình PDCA (Plan-Do-Check-Act) có lợi ích gì?',
          answer:
            'PDCA tạo ra một vòng lặp cải tiến liên tục. Nó giúp bạn thử nghiệm các giải pháp một cách có hệ thống, đo lường kết quả (Check), và sau đó điều chỉnh (Act) hoặc tiêu chuẩn hóa giải pháp nếu nó hiệu quả. Nó ngăn chặn việc giải quyết vấn đề một cách ngẫu hứng.',
        },
        {
          question: 'Sơ đồ xương cá (Ishikawa) giúp ích gì trong việc phân tích vấn đề?',
          answer:
            'Sơ đồ này giúp phân loại các nguyên nhân tiềm tàng của một vấn đề vào các nhóm chính (ví dụ: Con người, Quy trình, Máy móc, Nguyên vật liệu, Môi trường, Đo lường). Điều này đảm bảo bạn không bỏ sót các khía cạnh quan trọng khi phân tích.',
        },
        {
          question: 'Sự khác biệt giữa giải quyết vấn đề và ra quyết định là gì?',
          answer:
            'Giải quyết vấn đề là quá trình từ việc xác định một vấn đề đến việc thực hiện một giải pháp. Ra quyết định là một phần của quá trình đó, cụ thể là bước lựa chọn một giải pháp từ nhiều phương án khác nhau. Bạn ra quyết định trong khi giải quyết vấn đề.',
        },
        {
          question: 'Làm thế nào để brainstorming hiệu quả?',
          answer:
            'Để brainstorming hiệu quả, hãy tuân thủ các quy tắc: không phán xét bất kỳ ý tưởng nào, khuyến khích những ý tưởng "điên rồ", tập trung vào số lượng hơn chất lượng (ở giai đoạn đầu), và xây dựng dựa trên ý tưởng của người khác. Một người điều phối tốt cũng rất quan trọng.',
        },
        {
          question: 'Phương pháp "5 Whys" có nhược điểm gì không?',
          answer:
            'Có, nó có thể quá đơn giản cho các vấn đề phức tạp có nhiều nguyên nhân gốc rễ. Nó cũng có thể dẫn đến kết quả khác nhau tùy thuộc vào người thực hiện. Do đó, nó thường được sử dụng tốt nhất cho các vấn đề không quá phức tạp hoặc như một bước khởi đầu.',
        },
        {
          question: 'Làm thế nào để xác định đúng vấn đề cần giải quyết?',
          answer:
            'Hãy dành thời gian để định nghĩa vấn đề một cách rõ ràng. Thay vì nói "Doanh số thấp", hãy cụ thể hơn: "Doanh số sản phẩm X đã giảm 20% trong quý vừa qua so với cùng kỳ năm ngoái". Một vấn đề được định nghĩa rõ ràng sẽ dễ giải quyết hơn nhiều.',
        },
        {
          question: 'Tại sao việc "Check" (Kiểm tra) trong chu trình PDCA lại quan trọng?',
          answer:
            'Bước "Check" là nơi bạn so sánh kết quả thực tế với những gì bạn đã lên kế hoạch (Plan). Nếu không có bước này, bạn sẽ không biết liệu giải pháp của mình có thực sự hiệu quả hay không, và bạn có thể lặp lại những sai lầm tương tự trong tương lai.',
        },
        {
          question: 'Tôi có thể kết hợp các mô hình giải quyết vấn đề với nhau không?',
          answer:
            'Chắc chắn có! Việc kết hợp chúng thường mang lại hiệu quả cao nhất. Ví dụ, bạn có thể sử dụng Sơ đồ xương cá để brainstorming các nguyên nhân tiềm tàng, sau đó dùng "5 Whys" để đào sâu vào một nguyên nhân cụ thể, và cuối cùng quản lý việc thực hiện giải pháp bằng chu trình PDCA.',
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
