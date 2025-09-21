import { ModuleData } from '@/types';

export const leadershipManagementModule: ModuleData = {
  id: 'leadership-management',
  title: 'Lãnh đạo và Quản lý',
  description: 'Phát triển kỹ năng lãnh đạo và quản lý hiệu quả để dẫn dắt đội nhóm và tổ chức thành công.',
  category: 'Kỹ năng chuyên nghiệp',
  lessons: [
    {
      id: 'leadership-styles',
      title: 'Các phong cách lãnh đạo',
      description: 'Tìm hiểu về các phong cách lãnh đạo khác nhau và khi nào nên áp dụng chúng.',
      duration: '60 phút',
      difficulty: 'Cơ bản',
      objectives: [],
      realWorldApplications: [],
      faqs: [
        {
          question: 'Phong cách lãnh đạo chuyên quyền (Autocratic) là gì?',
          answer:
            'Là phong cách mà người lãnh đạo đưa ra quyết định một mình mà không cần hoặc có rất ít sự tham gia từ các thành viên trong nhóm. Phong cách này hiệu quả trong các tình huống cần quyết định nhanh chóng hoặc khi người lãnh đạo là người có chuyên môn cao nhất.',
        },
        {
          question: 'Khi nào nên sử dụng phong cách lãnh đạo dân chủ (Democratic)?',
          answer:
            'Phong cách lãnh đạo dân chủ, nơi các thành viên trong nhóm được khuyến khích tham gia vào quá trình ra quyết định, rất phù hợp khi cần sự sáng tạo, sự đồng thuận cao và khi các thành viên trong nhóm có kiến thức và kỹ năng để đóng góp.',
        },
        {
          question: 'Lãnh đạo trao quyền (Laissez-Faire) có phải là không quản lý gì cả không?',
          answer:
            'Không hẳn. Lãnh đạo trao quyền cung cấp cho các thành viên trong nhóm rất nhiều quyền tự do trong công việc của họ, nhưng người lãnh đạo vẫn cung cấp các nguồn lực và lời khuyên khi cần. Phong cách này hoạt động tốt nhất với các đội nhóm có kinh nghiệm, có động lực cao và tự quản lý tốt.',
        },
        {
          question: 'Phong cách lãnh đạo chuyển đổi (Transformational) tập trung vào điều gì?',
          answer:
            'Lãnh đạo chuyển đổi tập trung vào việc truyền cảm hứng và động lực cho các thành viên trong nhóm để họ vượt qua lợi ích cá nhân vì mục tiêu chung của tổ chức. Họ thường có tầm nhìn rõ ràng và khả năng truyền đạt tầm nhìn đó một cách thuyết phục.',
        },
        {
          question: 'Lãnh đạo phục vụ (Servant Leadership) là gì?',
          answer: 'Lãnh đạo phục vụ đặt nhu cầu của nhân viên lên hàng đầu. Người lãnh đạo tập trung vào việc phát triển và hỗ trợ các thành viên trong nhóm, tin rằng khi nhân viên phát triển và cảm thấy được quan tâm, họ sẽ làm việc hiệu quả hơn. Đây là một cách tiếp cận "đặt con người lên trước".'
        },
        {
          question: 'Sự khác biệt giữa lãnh đạo giao dịch (Transactional) và lãnh đạo chuyển đổi (Transformational) là gì?',
          answer: 'Lãnh đạo giao dịch tập trung vào cấu trúc, quy trình và phần thưởng/hình phạt (ví dụ: "Nếu bạn đạt KPI, bạn sẽ được thưởng"). Lãnh đạo chuyển đổi tập trung vào việc truyền cảm hứng, tạo ra sự thay đổi và phát triển cá nhân. Lãnh đạo giao dịch quản lý hiệu suất, trong khi lãnh đạo chuyển đổi truyền cảm hứng cho sự xuất sắc.'
        },
        {
          question: 'Có phong cách lãnh đạo nào là "tốt nhất" không?',
          answer: 'Không có phong cách lãnh đạo nào là tốt nhất trong mọi tình huống. Người lãnh đạo hiệu quả nhất là người có thể linh hoạt điều chỉnh phong cách của mình để phù hợp với tình hình cụ thể, mức độ trưởng thành của đội nhóm và tính chất của công việc. Đây được gọi là "Lãnh đạo tình huống" (Situational Leadership).'
        },
        {
          question: 'Làm thế nào để một người mới có thể xác định phong cách lãnh đạo của mình?',
          answer: 'Bạn có thể bắt đầu bằng cách tự đánh giá các giá trị, điểm mạnh và điểm yếu của mình. Hãy quan sát những nhà lãnh đạo mà bạn ngưỡng mộ. Thử nghiệm các cách tiếp cận khác nhau trong các dự án nhỏ và thu thập phản hồi từ đồng nghiệp. Các công cụ đánh giá như Myers-Briggs (MBTI) hoặc DiSC cũng có thể cung cấp những gợi ý hữu ích.'
        },
        {
          question: 'Phong cách lãnh đạo có thể thay đổi theo thời gian không?',
          answer: 'Chắc chắn có. Khi một người lãnh đạo tích lũy thêm kinh nghiệm, đối mặt với những thách thức mới và học hỏi từ những thành công cũng như thất bại, phong cách lãnh đạo của họ thường sẽ phát triển và trở nên tinh tế hơn. Sự tự nhận thức và sẵn sàng học hỏi là chìa khóa cho sự phát triển này.'
        },
        {
          question: 'Lãnh đạo và quản lý có giống nhau không?',
          answer: 'Không. Quản lý tập trung vào việc xử lý sự phức tạp: lập kế hoạch, ngân sách, tổ chức, nhân sự, kiểm soát và giải quyết vấn đề. Lãnh đạo tập trung vào việc đối phó với sự thay đổi: xác định phương hướng, truyền đạt tầm nhìn, truyền cảm hứng và tạo động lực. Một người có thể là một nhà quản lý giỏi nhưng không phải là một nhà lãnh đạo giỏi, và ngược lại.'
        }
      ],
    },
    {
      id: 'team-management',
      title: 'Quản lý đội nhóm',
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
      faqs: [
        {
          question: 'Mô hình "Forming, Storming, Norming, Performing" của Tuckman mô tả điều gì?',
          answer: 'Đây là mô hình mô tả bốn giai đoạn phát triển của một đội nhóm. Giai đoạn "Forming" là khi nhóm mới hình thành. "Storming" là giai đoạn xảy ra xung đột khi các ý tưởng và cá tính va chạm. "Norming" là khi nhóm bắt đầu giải quyết khác biệt và thiết lập quy tắc. "Performing" là giai đoạn nhóm hoạt động hiệu quả và đạt năng suất cao.'
        },
        {
          question: 'Làm thế nào để giải quyết xung đột một cách hiệu quả trong nhóm?',
          answer: 'Hãy tiếp cận xung đột như một cơ hội để phát triển. Lắng nghe tích cực tất cả các bên, tập trung vào vấn đề chứ không phải con người, tìm kiếm điểm chung và hướng tới một giải pháp "cùng thắng" (win-win). Thiết lập các quy tắc giao tiếp tôn trọng là rất quan trọng.'
        },
        {
          question: 'Làm thế nào để tạo động lực cho một đội nhóm?',
          answer: 'Tạo động lực bằng cách đặt ra các mục tiêu rõ ràng và thách thức, công nhận và khen thưởng thành tích, trao quyền và tin tưởng các thành viên, tạo cơ hội phát triển cá nhân và xây dựng một môi trường làm việc tích cực, hỗ trợ.'
        },
        {
          question: 'Tại sao việc phân công vai trò rõ ràng lại quan trọng?',
          answer: 'Việc phân công vai trò rõ ràng giúp tránh sự chồng chéo công việc, giảm thiểu hiểu lầm và đảm bảo rằng mọi người đều biết trách nhiệm của mình là gì. Điều này dẫn đến hiệu quả cao hơn và giảm bớt căng thẳng trong nhóm.'
        },
        {
          question: '"Team building" có thực sự hiệu quả không?',
          answer: 'Có, nếu được thực hiện đúng cách. Các hoạt động team building hiệu quả không chỉ là những chuyến đi chơi mà còn là các hoạt động có mục đích giúp cải thiện giao tiếp, xây dựng lòng tin và tăng cường sự hợp tác. Chúng nên được thiết kế phù hợp với văn hóa và nhu cầu của nhóm.'
        },
        {
          question: 'Sự khác biệt giữa một nhóm (group) và một đội (team) là gì?',
          answer: 'Một nhóm là một tập hợp những người làm việc cùng nhau, nhưng mỗi người chịu trách nhiệm về công việc của riêng mình. Một đội là một nhóm người làm việc cùng nhau hướng tới một mục tiêu chung, với trách nhiệm và thành công chung. Một đội có mức độ hợp tác và phụ thuộc lẫn nhau cao hơn.'
        },
        {
          question: 'Làm thế nào để quản lý một thành viên có hiệu suất kém?',
          answer: 'Bắt đầu bằng một cuộc trò chuyện riêng tư để hiểu nguyên nhân. Cung cấp phản hồi cụ thể, rõ ràng và mang tính xây dựng. Cùng nhau thiết lập một kế hoạch cải thiện hiệu suất (Performance Improvement Plan - PIP) với các mục tiêu và thời gian cụ thể. Cung cấp sự hỗ trợ và đào tạo cần thiết.'
        },
        {
          question: 'Làm thế nào để xây dựng lòng tin trong một đội nhóm?',
          answer: 'Lòng tin được xây dựng thông qua sự nhất quán, minh bạch và đáng tin cậy. Hãy luôn giữ lời hứa, giao tiếp cởi mở và trung thực, thừa nhận sai lầm, và thể hiện sự tin tưởng vào khả năng của các thành viên khác. Trao quyền cho họ cũng là một cách thể hiện lòng tin.'
        },
        {
          question: 'Vai trò của người quản lý trong việc trao quyền cho nhóm là gì?',
          answer: 'Người quản lý cần cung cấp cho nhóm các nguồn lực, thông tin và quyền hạn cần thiết để họ có thể tự đưa ra quyết định và hoàn thành công việc. Điều này bao gồm việc tin tưởng vào khả năng của họ, chấp nhận rủi ro có tính toán và không quản lý vi mô (micromanage).'
        },
        {
          question: 'Làm thế nào để tổ chức một cuộc họp nhóm hiệu quả?',
          answer: 'Một cuộc họp hiệu quả cần có mục tiêu rõ ràng, một chương trình nghị sự (agenda) được gửi trước, chỉ mời những người thực sự cần thiết, bắt đầu và kết thúc đúng giờ, khuyến khích sự tham gia của mọi người, và kết thúc bằng các quyết định rõ ràng và các bước hành động cụ thể (action items) được giao cho từng người.'
        }
      ],
    },
  ],
};
