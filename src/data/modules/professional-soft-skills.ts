import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';
import { ProfessionalSoftSkillsLesson } from '@/types/lesson-base';
import { ModuleNavigation } from '@/types';

export type SoftSkillsLesson = ProfessionalSoftSkillsLesson;

export const professionalSkillsModuleData: ModuleNavigation = {
  id: K2Module.ProfessionalSkills,
  title: 'Professional Soft Skills & Communication',
  subtitle: 'Kỹ năng mềm chuyên nghiệp',
  description: 'Phát triển kỹ năng giao tiếp, thuyết trình và lãnh đạo cho môi trường làm việc hiện đại',
  category: 'professional',
  icon: '🎯',
  color: 'from-blue-600 to-indigo-600',
  totalDuration: '15-18 giờ',
  difficulty: 'Trung bình',
  level: 'Trung bình',
  duration: '15-18 giờ',
  href: '/learning/professional-soft-skills',
  features: ['Presentation Skills', 'Professional Communication', 'Leadership Development', 'Time Management'],
  tags: ['soft skills', 'communication', 'leadership', 'professional'],
  prerequisites: ['Basic work experience', 'Vietnamese và English communication'],
  lessons: [
    {
      id: 'presentation-skills',
      title: 'Presentation Skills & Public Speaking',
      duration: '180 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'professional-email-writing',
      title: 'Professional Email & Business Writing',
      duration: '160 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'leadership-team-management',
      title: 'Leadership & Team Management',
      duration: '200 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'negotiation-conflict-resolution',
      title: 'Negotiation & Conflict Resolution',
      duration: '180 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'time-productivity-management',
      title: 'Time & Productivity Management',
      duration: '140 phút',
      difficulty: 'Trung bình',
    },
  ],
};

const lessons: ProfessionalSoftSkillsLesson[] = [
  {
    id: 'effective-communication',
    videoUrl: null,
    title: 'Giao tiếp Hiệu quả và Lắng nghe Chủ động',
    description:
      'Nắm vững nghệ thuật truyền đạt thông điệp rõ ràng, thuyết phục và xây dựng mối quan hệ qua việc lắng nghe sâu sắc.',
    duration: '60 phút',
    difficulty: 'Cơ bản',
    objectives: [
      'Hiểu các thành phần của quá trình giao tiếp.',
      'Thực hành kỹ thuật lắng nghe chủ động.',
      'Cung cấp và tiếp nhận phản hồi một cách xây dựng.',
    ],
    realWorldApplications: [
      'Giải quyết xung đột trong nhóm.',
      'Xây dựng lòng tin với khách hàng và đồng nghiệp.',
      'Trình bày ý tưởng một cách rõ ràng trong các cuộc họp.',
    ],
    prerequisites: [],
    exercises: [],
    faqs: [
      {
        question: 'Lắng nghe chủ động là gì?',
        answer:
          'Là quá trình tập trung hoàn toàn vào người nói, hiểu thông điệp của họ, phản hồi một cách chu đáo và ghi nhớ thông tin. Nó không chỉ là im lặng mà còn bao gồm việc đặt câu hỏi làm rõ và diễn giải lại ý của người nói.',
      },
      {
        question: 'Làm thế nào để đưa ra phản hồi mang tính xây dựng?',
        answer:
          'Sử dụng phương pháp "Bánh mì kẹp": Bắt đầu bằng một lời khen (điểm tốt), sau đó nêu ra điểm cần cải thiện một cách cụ thể, và kết thúc bằng một lời động viên hoặc gợi ý tích cực.',
      },
      {
        question: 'Giao tiếp phi ngôn ngữ chiếm bao nhiêu phần trăm trong giao tiếp?',
        answer:
          'Các nghiên cứu chỉ ra rằng giao tiếp phi ngôn ngữ (ngôn ngữ cơ thể, ánh mắt, giọng điệu) có thể chiếm tới hơn 50% hiệu quả của thông điệp. Cách bạn nói quan trọng không kém nội dung bạn nói.',
      },
      {
        question: 'Sự khác biệt giữa "nghe" và "lắng nghe" là gì?',
        answer:
          '"Nghe" là một hành động sinh lý thụ động của việc tiếp nhận âm thanh. "Lắng nghe" là một kỹ năng chủ động, đòi hỏi sự tập trung và nỗ lực để giải mã và thấu hiểu ý nghĩa đằng sau những lời nói đó.',
      },
      {
        question: 'Làm thế nào để vượt qua nỗi sợ nói trước đám đông?',
        answer:
          'Sự chuẩn bị kỹ lưỡng là chìa khóa. Hãy luyện tập nhiều lần, hiểu rõ nội dung của bạn, và tập trung vào việc truyền tải giá trị cho khán giả thay vì lo lắng về bản thân. Bắt đầu với các nhóm nhỏ cũng là một cách tốt.',
      },
      {
        question: 'Kỹ thuật "diễn giải lại" (paraphrasing) là gì?',
        answer:
          'Là việc bạn nhắc lại ý của người nói bằng ngôn từ của chính bạn. Ví dụ: "Vậy nếu tôi hiểu đúng thì ý của bạn là...". Kỹ thuật này cho thấy bạn đang thực sự lắng nghe và giúp xác nhận lại thông tin.',
      },
      {
        question: 'Tại sao giao tiếp bằng mắt lại quan trọng?',
        answer:
          'Giao tiếp bằng mắt thể hiện sự tự tin, trung thực và sự tham gia vào cuộc trò chuyện. Nó giúp xây dựng sự kết nối và tin tưởng giữa những người giao tiếp.',
      },
      {
        question: 'Làm thế nào để giao tiếp hiệu quả qua email?',
        answer:
          'Hãy viết tiêu đề rõ ràng, đi thẳng vào vấn đề, sử dụng các đoạn văn ngắn, và kiểm tra lại lỗi chính tả trước khi gửi. Luôn giữ một giọng điệu chuyên nghiệp và lịch sự.',
      },
      {
        question: 'Xung đột trong nhóm có phải lúc nào cũng xấu không?',
        answer:
          'Không. Xung đột về ý tưởng (task conflict) có thể rất tốt, nó thúc đẩy sự sáng tạo và tìm ra giải pháp tối ưu. Xung đột cần tránh là xung đột cá nhân (relationship conflict), gây tổn hại đến mối quan hệ.',
      },
      {
        question: 'Kỹ năng kể chuyện (storytelling) giúp ích gì trong giao tiếp?',
        answer:
          'Kể chuyện giúp biến những dữ liệu và thông tin khô khan trở nên sống động, dễ nhớ và có cảm xúc. Một câu chuyện hay có thể thuyết phục và truyền cảm hứng mạnh mẽ hơn nhiều so với các gạch đầu dòng đơn thuần.',
      },
    ],
  },
  {
    id: 'presentation-public-speaking',
    videoUrl: null,
    title: 'Kỹ năng Thuyết trình và Nói trước Công chúng',
    description:
      'Tự tin trình bày ý tưởng, báo cáo và dự án trước đám đông, từ việc chuẩn bị nội dung đến làm chủ ngôn ngữ cơ thể.',
    duration: '75 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Xây dựng cấu trúc bài thuyết trình logic và hấp dẫn.',
      'Sử dụng hiệu quả các công cụ trực quan (slide, demo).',
      'Kiểm soát căng thẳng và làm chủ sân khấu.',
    ],
    realWorldApplications: [
      'Thuyết trình báo cáo kết quả kinh doanh.',
      'Giới thiệu sản phẩm mới cho khách hàng.',
      'Chia sẻ kiến thức trong các buổi seminar nội bộ.',
    ],
    prerequisites: [],
    exercises: [],
    faqs: [
      {
        question: 'Quy tắc 10/20/30 trong thuyết trình là gì?',
        answer:
          'Đây là quy tắc của Guy Kawasaki: một bài thuyết trình nên có không quá 10 slide, kéo dài không quá 20 phút, và sử dụng cỡ chữ không nhỏ hơn 30. Điều này buộc bạn phải chắt lọc những gì tinh túy nhất.',
      },
      {
        question: 'Làm thế nào để mở đầu một bài thuyết trình một cách ấn tượng?',
        answer:
          'Hãy bắt đầu bằng một câu chuyện, một câu hỏi gây sốc, một số liệu thống kê đáng ngạc nhiên, hoặc một hình ảnh ấn tượng. Tránh mở đầu bằng "Xin chào, hôm nay tôi sẽ nói về..."',
      },
      {
        question: 'Một slide thuyết trình tốt nên trông như thế nào?',
        answer:
          'Ít chữ, nhiều hình ảnh. Mỗi slide chỉ nên truyền tải một ý tưởng chính. Hãy sử dụng hình ảnh, biểu đồ để minh họa cho lời nói của bạn, đừng biến slide thành một kịch bản để bạn đọc.',
      },
      {
        question: 'Làm thế nào để tương tác với khán giả?',
        answer:
          'Đặt câu hỏi, tạo các cuộc khảo sát nhanh (polls), mời họ chia sẻ kinh nghiệm, hoặc tổ chức các hoạt động nhỏ. Sự tương tác giúp khán giả tập trung và cảm thấy được tham gia vào bài nói của bạn.',
      },
      {
        question: 'Ngôn ngữ cơ thể nào cần tránh khi thuyết trình?',
        answer:
          'Tránh khoanh tay (tạo cảm giác phòng thủ), cho tay vào túi quần, nhìn xuống sàn hoặc trần nhà, và di chuyển qua lại liên tục không có mục đích. Hãy đứng vững, sử dụng tay để minh họa và giao tiếp bằng mắt với khán giả.',
      },
      {
        question: 'Làm thế nào để kết thúc bài thuyết trình một cách mạnh mẽ?',
        answer:
          'Hãy tóm tắt lại 3 điểm chính mà bạn muốn khán giả nhớ. Kết thúc bằng một lời kêu gọi hành động (call to action) rõ ràng, một câu trích dẫn truyền cảm hứng, hoặc quay trở lại câu chuyện bạn đã kể ở phần mở đầu.',
      },
      {
        question: 'Tôi nên luyện tập bài thuyết trình như thế nào?',
        answer:
          'Đừng chỉ đọc thuộc lòng. Hãy luyện tập nói thành tiếng, thậm chí ghi âm hoặc quay video lại để xem lại. Luyện tập trước mặt bạn bè hoặc đồng nghiệp và xin phản hồi cũng rất hữu ích.',
      },
      {
        question: 'Sự khác biệt giữa thuyết trình và báo cáo là gì?',
        answer:
          'Báo cáo thường tập trung vào việc trình bày dữ liệu và thông tin một cách chi tiết. Thuyết trình tập trung vào việc truyền tải một thông điệp cốt lõi, thuyết phục và truyền cảm hứng cho khán giả hành động.',
      },
      {
        question: 'Nếu tôi quên mất mình định nói gì thì phải làm sao?',
        answer:
          'Hãy bình tĩnh. Dừng lại một chút, nhìn vào ghi chú của bạn (việc có ghi chú là hoàn toàn bình thường). Bạn cũng có thể tương tác với khán giả bằng cách hỏi một câu hỏi trong khi bạn đang nhớ lại ý.',
      },
      {
        question: 'Làm thế nào để xử lý các câu hỏi khó từ khán giả?',
        answer:
          'Luôn lắng nghe hết câu hỏi. Khen ngợi câu hỏi ("Đó là một câu hỏi rất hay"). Nếu bạn biết câu trả lời, hãy trả lời thẳng thắn. Nếu không, hãy trung thực thừa nhận và hứa sẽ tìm hiểu và trả lời sau. Đừng bao giờ tỏ ra phòng thủ.',
      },
    ],
  },
  {
    id: 'time-management-productivity',
    videoUrl: null,
    title: 'Quản lý Thời gian và Tăng năng suất',
    description:
      'Học các phương pháp và công cụ để ưu tiên công việc, loại bỏ sự trì hoãn và tối đa hóa hiệu suất làm việc.',
    duration: '60 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Áp dụng ma trận Eisenhower để xác định việc quan trọng và khẩn cấp.',
      'Sử dụng kỹ thuật Pomodoro để duy trì sự tập trung.',
      'Lập kế hoạch ngày, tuần, tháng hiệu quả.',
    ],
    realWorldApplications: [
      'Hoàn thành công việc đúng deadline mà không cần làm thêm giờ.',
      'Cân bằng giữa công việc và cuộc sống cá nhân.',
      'Giảm stress do áp lực công việc.',
    ],
    prerequisites: [],
    exercises: [],
    faqs: [
      {
        question: 'Ma trận Eisenhower hoạt động như thế nào?',
        answer:
          'Nó chia công việc thành 4 góc phần tư: 1. Quan trọng & Khẩn cấp (Làm ngay), 2. Quan trọng & Không khẩn cấp (Lên kế hoạch làm), 3. Không quan trọng & Khẩn cấp (Ủy thác), 4. Không quan trọng & Không khẩn cấp (Loại bỏ).',
      },
      {
        question: 'Kỹ thuật Pomodoro là gì?',
        answer:
          'Là một phương pháp quản lý thời gian, trong đó bạn làm việc tập trung cao độ trong một khoảng thời gian (thường là 25 phút), sau đó nghỉ ngắn 5 phút. Sau 4 phiên như vậy, bạn sẽ có một kỳ nghỉ dài hơn.',
      },
      {
        question: 'Tại sao "làm việc đa nhiệm" (multitasking) lại không hiệu quả?',
        answer:
          'Khi bạn làm nhiều việc cùng lúc, não của bạn phải liên tục chuyển đổi ngữ cảnh, điều này làm tiêu tốn năng lượng và thời gian. Nó làm tăng khả năng mắc lỗi và giảm chất lượng của công việc. Tập trung vào một việc tại một thời điểm (single-tasking) hiệu quả hơn nhiều.',
      },
      {
        question: 'Quy tắc 2 phút là gì?',
        answer:
          'Quy tắc này của David Allen nói rằng: "Nếu một công việc chỉ mất chưa đến 2 phút để hoàn thành, hãy làm nó ngay lập tức". Điều này giúp giải quyết nhanh các việc nhỏ và tránh chúng tích tụ lại.',
      },
      {
        question: 'Làm thế nào để chống lại sự trì hoãn?',
        answer:
          'Một kỹ thuật hiệu quả là chia nhỏ công việc lớn thành các bước nhỏ, dễ quản lý. Bắt đầu với một bước nhỏ nhất có thể (ví dụ: "mở file Word") để tạo đà. Đặt deadline cho bản thân và tự thưởng khi hoàn thành cũng là một cách tốt.',
      },
      {
        question: '"Time blocking" là gì?',
        answer:
          'Là phương pháp lên lịch cho ngày của bạn bằng cách phân bổ các khối thời gian cụ thể cho từng công việc hoặc loại công việc. Thay vì làm việc theo danh sách việc cần làm, bạn làm việc theo lịch trình. Điều này giúp bảo vệ thời gian của bạn cho các công việc quan trọng.',
      },
      {
        question: 'Làm thế nào để nói "Không" một cách lịch sự?',
        answer:
          'Hãy giải thích ngắn gọn lý do bạn không thể nhận thêm việc (ví dụ: "Hiện tại tôi đang tập trung hoàn thành dự án X để kịp deadline"). Nếu có thể, hãy đề xuất một giải pháp thay thế hoặc một thời điểm khác bạn có thể giúp.',
      },
      {
        question: 'Tại sao việc nghỉ ngơi lại quan trọng đối với năng suất?',
        answer:
          'Não và cơ thể cần thời gian để phục hồi. Làm việc liên tục không nghỉ sẽ dẫn đến kiệt sức và giảm hiệu quả. Các kỳ nghỉ ngắn trong ngày, giấc ngủ đủ và các kỳ nghỉ dài hơn giúp bạn nạp lại năng lượng và duy trì sự sáng tạo.',
      },
      {
        question: 'Deep Work (Làm việc sâu) là gì?',
        answer:
          'Là khả năng tập trung không bị phân tâm vào một nhiệm vụ đòi hỏi nhận thức cao. Để thực hiện Deep Work, bạn cần loại bỏ mọi yếu tố gây nhiễu (tắt thông báo, đóng các tab không liên quan) và dành ra những khoảng thời gian không bị gián đoạn.',
      },
      {
        question: 'Tôi nên sử dụng công cụ quản lý công việc nào?',
        answer:
          'Công cụ tốt nhất là công cụ bạn thực sự sử dụng. Có thể là một cuốn sổ tay đơn giản, hoặc các ứng dụng như Trello, Asana, Todoist. Hãy bắt đầu đơn giản và chọn công cụ phù hợp với quy trình làm việc của bạn.',
      },
    ],
  },
  {
    id: 'leadership-teamwork',
    videoUrl: null,
    title: 'Lãnh đạo và Làm việc Nhóm',
    description:
      'Phát triển khả năng gây ảnh hưởng, truyền cảm hứng cho người khác và hợp tác hiệu quả để đạt được mục tiêu chung.',
    duration: '75 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Phân biệt các phong cách lãnh đạo và khi nào nên áp dụng.',
      'Học cách ủy thác công việc hiệu quả.',
      'Xây dựng một đội nhóm gắn kết và hiệu suất cao.',
    ],
    realWorldApplications: [
      'Dẫn dắt một dự án thành công.',
      'Tạo ra một môi trường làm việc tích cực và sáng tạo.',
      'Giải quyết các vấn đề phức tạp thông qua sức mạnh tập thể.',
    ],
    prerequisites: [],
    exercises: [],
    faqs: [
      {
        question: 'Sự khác biệt giữa quản lý (management) và lãnh đạo (leadership) là gì?',
        answer:
          'Quản lý là về việc thực thi các quy trình, kế hoạch và giữ cho mọi thứ hoạt động trơn tru. Lãnh đạo là về việc truyền cảm hứng, tạo ra tầm nhìn và định hướng cho tương lai. Bạn quản lý công việc, nhưng bạn lãnh đạo con người.',
      },
      {
        question: 'Lãnh đạo phục vụ (Servant Leadership) là gì?',
        answer:
          'Là phong cách lãnh đạo trong đó người lãnh đạo đặt nhu cầu của đội nhóm lên hàng đầu. Họ tập trung vào việc hỗ trợ, tạo điều kiện và phát triển các thành viên, tin rằng khi các thành viên phát triển thì tổ chức cũng sẽ thành công.',
      },
      {
        question: 'Làm thế nào để ủy thác công việc một cách hiệu quả?',
        answer:
          'Ủy thác hiệu quả không chỉ là giao việc. Nó bao gồm việc giải thích rõ ràng kết quả mong muốn (cái gì), trao quyền cho người thực hiện (họ quyết định cách làm), cung cấp đủ nguồn lực và kiểm tra tiến độ một cách hợp lý.',
      },
      {
        question: 'Các giai đoạn phát triển của một đội nhóm là gì?',
        answer:
          'Mô hình của Tuckman mô tả 4 giai đoạn chính: Forming (Hình thành), Storming (Sóng gió - xung đột), Norming (Chuẩn hóa - thống nhất quy tắc), và Performing (Hoạt động hiệu quả). Người lãnh đạo cần có cách tiếp cận khác nhau ở mỗi giai đoạn.',
      },
      {
        question: 'An toàn tâm lý (Psychological Safety) trong một đội nhóm là gì?',
        answer:
          'Là một môi trường nơi các thành viên cảm thấy an toàn để chấp nhận rủi ro, nêu ý kiến trái chiều, thừa nhận sai lầm mà không sợ bị trừng phạt hay làm bẽ mặt. Đây là yếu tố quan trọng nhất của một đội nhóm hiệu suất cao.',
      },
      {
        question: 'Làm thế nào để xây dựng lòng tin trong đội nhóm?',
        answer:
          'Lòng tin được xây dựng dựa trên sự nhất quán, năng lực và sự quan tâm. Hãy luôn giữ lời, thể hiện năng lực chuyên môn của bạn và quan tâm thực sự đến các thành viên trong nhóm như những con người.',
      },
      {
        question: 'Trí tuệ cảm xúc (Emotional Intelligence - EQ) quan trọng như thế nào đối với một nhà lãnh đạo?',
        answer:
          'Cực kỳ quan trọng. EQ bao gồm khả năng tự nhận thức, tự quản lý, đồng cảm và kỹ năng xã hội. Một nhà lãnh đạo có EQ cao có thể hiểu và thúc đẩy đội nhóm của mình tốt hơn, cũng như quản lý các mối quan hệ một cách hiệu quả.',
      },
      {
        question: 'Làm thế nào để một thành viên trong nhóm có thể đóng góp hiệu quả?',
        answer:
          'Hãy chủ động nhận trách nhiệm, hoàn thành công việc đúng hạn với chất lượng cao, giao tiếp cởi mở, hỗ trợ các thành viên khác và đưa ra các ý kiến đóng góp mang tính xây dựng.',
      },
      {
        question: 'Tại sao sự đa dạng (diversity) lại quan trọng trong một đội nhóm?',
        answer:
          'Một đội nhóm đa dạng về kinh nghiệm, kỹ năng và góc nhìn có khả năng sáng tạo và giải quyết vấn đề tốt hơn. Họ có thể nhìn thấy các khía cạnh khác nhau của một vấn đề và tránh được lối "tư duy nhóm" (groupthink).',
      },
      {
        question: 'Phong cách lãnh đạo nào là tốt nhất?',
        answer:
          'Không có phong cách nào là "tốt nhất" trong mọi tình huống. Một nhà lãnh đạo giỏi là người có thể linh hoạt điều chỉnh phong cách của mình (chỉ đạo, huấn luyện, hỗ trợ, ủy thác) cho phù hợp với từng tình huống và từng thành viên cụ thể trong nhóm.',
      },
    ],
  },
  {
    id: 'negotiation-persuasion',
    videoUrl: 'https://www.youtube.com/watch?v=YCyWQKhqLEM',
    title: 'Nghệ thuật Đàm phán và Thuyết phục',
    description:
      'Trang bị kỹ năng để đạt được các thỏa thuận có lợi cho đôi bên trong công việc và cuộc sống, từ đàm phán lương đến chốt hợp đồng.',
    duration: '60 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Hiểu nguyên tắc đàm phán Win-Win.',
      'Chuẩn bị và lên kịch bản cho một cuộc đàm phán.',
      'Sử dụng các nguyên tắc tâm lý học trong thuyết phục.',
    ],
    realWorldApplications: [
      'Đàm phán tăng lương hoặc thăng chức.',
      'Thương lượng các điều khoản hợp đồng với đối tác.',
      'Thuyết phục sếp phê duyệt một dự án mới.',
    ],
    prerequisites: [],
    exercises: [],
    faqs: [
      {
        question: 'BATNA là gì và tại sao nó là khái niệm quan trọng nhất trong đàm phán?',
        answer:
          'BATNA (Best Alternative to a Negotiated Agreement) là "Phương án thay thế tốt nhất nếu không đạt được thỏa thuận". Đây là nguồn sức mạnh của bạn. Nếu bạn có một BATNA tốt, bạn có thể tự tin bước ra khỏi một cuộc đàm phán không có lợi.',
      },
      {
        question:
          'Đàm phán dựa trên lập trường (Positional Bargaining) và đàm phán dựa trên lợi ích (Interest-Based Bargaining) khác nhau như thế nào?',
        answer:
          'Đàm phán dựa trên lập trường là việc hai bên đưa ra yêu cầu của mình và cố gắng "kéo co". Đàm phán dựa trên lợi ích tập trung vào việc tìm hiểu "tại sao" đằng sau yêu cầu của mỗi bên để tìm ra các giải pháp sáng tạo đáp ứng lợi ích của cả hai.',
      },
      {
        question: 'Nguyên tắc "Tách con người ra khỏi vấn đề" nghĩa là gì?',
        answer:
          'Đây là một nguyên tắc cốt lõi của đàm phán. Hãy cứng rắn với vấn đề nhưng mềm mỏng với con người. Đừng để cảm xúc cá nhân hay mối quan hệ bị ảnh hưởng bởi những bất đồng trong quá trình đàm phán.',
      },
      {
        question: 'Làm thế nào để tạo ra các lựa chọn cùng có lợi (win-win)?',
        answer:
          'Hãy "mở rộng chiếc bánh" thay vì chỉ "chia bánh". Tìm kiếm những thứ mà đối với bạn ít giá trị nhưng lại có giá trị cao với phía bên kia, và ngược lại. Ví dụ: bạn có thể chấp nhận giá cao hơn nếu họ có thể giao hàng sớm hơn.',
      },
      {
        question: '6 nguyên tắc thuyết phục của Robert Cialdini là gì?',
        answer:
          'Đó là: 1. Tương hỗ (Reciprocity), 2. Cam kết & Nhất quán (Commitment & Consistency), 3. Bằng chứng xã hội (Social Proof), 4. Thiện cảm (Liking), 5. Uy quyền (Authority), 6. Khan hiếm (Scarcity).',
      },
      {
        question: 'An anchoring effect (hiệu ứng mỏ neo) trong đàm phán là gì?',
        answer:
          'Là xu hướng tâm lý bị ảnh hưởng nặng nề bởi con số đầu tiên được đưa ra trong một cuộc đàm phán. Người đưa ra lời đề nghị đầu tiên (the first anchor) thường có lợi thế vì nó định hình toàn bộ cuộc thảo luận sau đó.',
      },
      {
        question: 'Tại sao việc đặt câu hỏi lại quan trọng trong đàm phán?',
        answer:
          'Câu hỏi giúp bạn thu thập thông tin, tìm hiểu lợi ích thực sự của đối phương, kiểm soát dòng chảy của cuộc trò chuyện và tạo ra không gian để suy nghĩ. Người đặt câu hỏi là người kiểm soát cuộc đàm phán.',
      },
      {
        question: 'Làm thế nào để đối phó với một đối tác đàm phán khó tính?',
        answer:
          'Hãy giữ bình tĩnh và chuyên nghiệp. Tập trung vào các tiêu chí khách quan (dữ liệu thị trường, tiêu chuẩn ngành). Sử dụng các câu hỏi để hiểu lý do đằng sau sự cứng rắn của họ. Đừng quên BATNA của bạn - sẵn sàng bước đi nếu cần.',
      },
      {
        question: 'Sự im lặng có phải là một công cụ đàm phán không?',
        answer:
          'Có, và nó rất mạnh mẽ. Sau khi bạn đưa ra một đề nghị hoặc đặt một câu hỏi quan trọng, hãy im lặng và chờ đợi. Sự im lặng thường tạo áp lực buộc phía bên kia phải lên tiếng trước, có thể tiết lộ thêm thông tin hoặc đưa ra một sự nhượng bộ.',
      },
      {
        question: 'Khi nào tôi nên chấp nhận lời đề nghị?',
        answer:
          'Bạn nên chấp nhận một lời đề nghị khi nó tốt hơn BATNA của bạn. Đừng bao giờ chấp nhận một thỏa thuận tồi chỉ vì sợ không đạt được thỏa thuận nào cả.',
      },
    ],
  },
];

export const softSkillsLessons = lessons;

export const professionalSkillsModule: ModuleData = {
  id: 'professional-soft-skills',
  title: 'Kỹ Năng Mềm Chuyên Nghiệp',
  description:
    'Trang bị những kỹ năng mềm thiết yếu để thành công trong môi trường làm việc hiện đại, từ giao tiếp, lãnh đạo đến quản lý thời gian và đàm phán.',
  image: 'professional-soft-skills.jpg',
  tags: ['kỹ năng mềm', 'giao tiếp', 'lãnh đạo', 'thuyết trình', 'đàm phán', 'quản lý thời gian'],
  category: 'Phát triển cá nhân',
  lessons: lessons,
};
