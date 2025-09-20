import { ModuleData } from '@/types';

export const introductionToPhilosophyModuleData: ModuleData = {
  id: 'introduction-to-philosophy',
  title: 'Nhập Môn Triết Học',
  subtitle:
    'Hành trình suy ngẫm về những câu hỏi lớn của cuộc đời: Hạnh phúc là gì? Công lý là gì? Ta tồn tại để làm gì?',
  description:
    'Triết học không phải là những lý thuyết khô khan, xa vời. Đó là nghệ thuật đặt câu hỏi, suy tư và tìm kiếm sự thông thái. Module này mời bạn cùng khám phá những ý tưởng vĩ đại đã định hình nền văn minh nhân loại, từ đó giúp bạn hiểu rõ hơn về bản thân và thế giới xung quanh.',
  image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&h=600&fit=crop',
  color: 'from-gray-400 to-gray-600',
  category: 'Nghệ thuật & Nhân văn',
  level: 'Trung học',
  duration: '9 tuần',
  lessons: [
    {
      id: 'what-is-philosophy',
      title: 'Triết Học Là Gì?',
      description:
        'Khám phá định nghĩa, mục đích và các nhánh chính của triết học, đồng thời làm quen với phương pháp tư duy triết học.',
      duration: '45 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Xây dựng lập luận', 'Phân tích đạo đức', 'Tư duy về mục đích sống'],
      objectives: [
        'Hiểu rằng triết học là tình yêu đối với sự thông thái (philosophia).',
        'Phân biệt được ba nhánh chính của triết học: Siêu hình học (Metaphysics), Nhận thức luận (Epistemology), và Đạo đức học (Ethics).',
        'Làm quen với phương pháp của Socrates: đặt câu hỏi liên tục để kiểm tra niềm tin.',
        'Thực hành xây dựng một lập luận đơn giản với tiền đề và kết luận.',
      ],
      faqs: [
        {
          question: 'Học triết có giúp kiếm được nhiều tiền không?',
          answer:
            'Có thể không trực tiếp, nhưng triết học rèn luyện những kỹ năng được đánh giá rất cao trong mọi ngành nghề: tư duy phản biện, giải quyết vấn đề phức tạp, khả năng lập luận và giao tiếp rõ ràng. Những kỹ năng này là nền tảng cho sự thành công lâu dài.',
        },
        {
          question: 'Siêu hình học (Metaphysics) nghiên cứu về cái gì?',
          answer:
            'Siêu hình học đặt ra những câu hỏi cơ bản nhất về bản chất của thực tại. Ví dụ: Thực tại được tạo nên từ cái gì? Con người có tự do ý chí không? Thời gian là gì? Chúa có tồn tại không?',
        },
      ],
      quizzes: [
        {
          question: 'Nhánh nào của triết học đặt câu hỏi "Làm thế nào chúng ta biết những gì chúng ta biết?"',
          options: ['Siêu hình học', 'Đạo đức học', 'Logic học', 'Nhận thức luận (Epistemology)'],
          correctAnswerIndex: 3,
          explanation:
            'Nhận thức luận là lý thuyết về tri thức, nó nghiên cứu về bản chất, nguồn gốc và giới hạn của sự hiểu biết của con người.',
        },
      ],
    },
    {
      id: 'ethics-and-morality',
      title: 'Đạo Đức Học: Đúng và Sai',
      description:
        'Khám phá các lý thuyết đạo đức lớn và áp dụng chúng vào các tình huống khó xử trong thực tế (dilemmas).',
      duration: '60 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Đạo đức kinh doanh', 'Đạo đức y sinh', 'Quyết định cá nhân'],
      objectives: [
        'Tìm hiểu về Thuyết Vị Lợi (Utilitarianism): hành động đúng là hành động mang lại hạnh phúc cho số đông nhất.',
        'Khám phá Đạo đức học của Kant (Deontology): một số hành động vốn dĩ là đúng hoặc sai, bất kể hậu quả.',
        'Suy ngẫm về Đạo đức học đức hạnh (Virtue Ethics) của Aristotle: tập trung vào việc xây dựng một phẩm chất tốt đẹp.',
        'Phân tích các tình huống giả định như "Vấn đề xe điện" (Trolley Problem).',
      ],
      faqs: [
        {
          question: '"Vấn đề xe điện" (Trolley Problem) là gì?',
          answer:
            'Đó là một thí nghiệm tưởng tượng nổi tiếng. Một chiếc xe điện mất kiểm soát đang lao tới và sẽ đâm chết 5 người đang làm việc trên đường ray. Bạn đang đứng cạnh một cái cần gạt, nếu bạn gạt cần, chiếc xe sẽ chuyển sang một đường ray khác, nơi chỉ có 1 người đang làm việc. Bạn có nên gạt cần không? Tình huống này buộc chúng ta phải đối mặt với sự lựa chọn giữa hai lý thuyết đạo đức: Thuyết Vị Lợi (cứu 5 người tốt hơn cứu 1) và Đạo đức học của Kant (hành động gạt cần trực tiếp gây ra cái chết cho 1 người là sai).',
        },
        {
          question: 'Sự khác biệt chính giữa Thuyết Vị Lợi và Đạo đức học của Kant là gì?',
          answer:
            'Thuyết Vị Lợi tập trung vào KẾT QUẢ của hành động (consequentialism). Đạo đức học của Kant tập trung vào BẢN CHẤT của hành động, dựa trên các quy tắc và nghĩa vụ (deontology).',
        },
      ],
      quizzes: [
        {
          question:
            'Một bác sĩ có 5 bệnh nhân sắp chết vì thiếu nội tạng. Một người khỏe mạnh đến khám sức khỏe, và nội tạng của người này hoàn toàn tương thích với 5 bệnh nhân kia. Theo Thuyết Vị Lợi thuần túy, hành động nào sẽ được ưu tiên?',
          options: [
            'Không làm gì cả',
            'Lấy nội tạng của người khỏe mạnh để cứu 5 người kia',
            'Chỉ cứu một trong 5 bệnh nhân',
            'Tìm một người hiến tạng khác',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Theo Thuyết Vị Lợi, hành động mang lại hạnh phúc (sự sống) cho số đông nhất (5 người > 1 người) là hành động đúng. Tuy nhiên, ví dụ này cũng cho thấy những vấn đề của việc áp dụng Thuyết Vị Lợi một cách máy móc.',
        },
      ],
    },
    {
      id: 'philosophy-of-happiness',
      title: 'Triết Học Về Hạnh Phúc',
      description:
        'Khám phá quan điểm về hạnh phúc của các trường phái triết học lớn: từ Chủ nghĩa Khắc kỷ (Stoicism) đến Chủ nghĩa Hiện sinh (Existentialism).',
      duration: '55 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Đối mặt với khó khăn', 'Tìm kiếm ý nghĩa cuộc sống', 'Xây dựng sự bình an nội tâm'],
      objectives: [
        'Học hỏi từ Chủ nghĩa Khắc kỷ: tập trung vào những gì ta có thể kiểm soát và chấp nhận những gì ta không thể.',
        'Tìm hiểu về Eudaimonia của Aristotle: hạnh phúc không phải là cảm xúc nhất thời, mà là một cuộc sống trọn vẹn, có ý nghĩa.',
        'Khám phá quan điểm của Chủ nghĩa Hiện sinh: con người được "kết án phải tự do", chúng ta tự tạo ra ý nghĩa cho cuộc đời mình.',
        'Suy ngẫm về mối quan hệ giữa hạnh phúc, ý nghĩa và đau khổ.',
      ],
      faqs: [
        {
          question: 'Chủ nghĩa Khắc kỷ (Stoicism) có phải là sống một cách vô cảm không?',
          answer:
            'Không. Người Khắc kỷ không tìm cách triệt tiêu cảm xúc, mà là không để bị chúng thống trị. Họ thực hành việc phân biệt giữa sự kiện xảy ra và phán xét của chúng ta về sự kiện đó. Họ chấp nhận những gì không thể thay đổi và tập trung nỗ lực vào những gì nằm trong tầm kiểm soát của mình.',
        },
        {
          question: 'Theo Chủ nghĩa Hiện sinh, nếu cuộc sống không có ý nghĩa sẵn có, vậy tại sao chúng ta phải sống?',
          answer:
            'Chính vì cuộc sống không có ý nghĩa sẵn có, nên chúng ta mới có sự tự do và trách nhiệm để TẠO RA ý nghĩa cho chính mình. Ý nghĩa không phải là thứ để tìm kiếm, mà là thứ để xây dựng thông qua các lựa chọn và hành động của chúng ta.',
        },
      ],
      quizzes: [
        {
          question: 'Triết gia nào đã nói "Con người được kết án phải tự do"?',
          options: [
            'Aristotle',
            'Epictetus (nhà Khắc kỷ)',
            'Jean-Paul Sartre (nhà Hiện sinh)',
            'Jeremy Bentham (nhà Vị lợi)',
          ],
          correctAnswerIndex: 2,
          explanation:
            'Đây là một câu nói nổi tiếng của Jean-Paul Sartre, thể hiện quan điểm của Chủ nghĩa Hiện sinh rằng con người hoàn toàn tự do và do đó phải chịu trách nhiệm hoàn toàn cho các lựa chọn và hành động của mình.',
        },
      ],
    },
  ],
  features: [
    'Giới thiệu các triết gia và trường phái lớn',
    'Phân tích các thí nghiệm tưởng tượng kinh điển',
    'Bài tập suy ngẫm và viết luận triết học',
    'Kết nối triết học với các vấn đề đương đại',
  ],
  prerequisites: ['Một trí óc tò mò và sẵn sàng đặt câu hỏi về mọi thứ.'],
  objectives: [
    'Phát triển khả năng tư duy trừu tượng và lập luận logic.',
    'Làm quen với những câu hỏi và ý tưởng nền tảng của văn minh nhân loại.',
    'Nâng cao khả năng tự phản tư và hiểu rõ hơn về các giá trị của bản thân.',
    'Học cách thảo luận về các chủ đề phức tạp một cách văn minh và có cấu trúc.',
  ],
  careerOutcomes: [
    'Nền tảng vững chắc cho các ngành khoa học xã hội và nhân văn.',
    'Rèn luyện kỹ năng tư duy bậc cao, hữu ích cho các lĩnh vực đòi hỏi sự sáng tạo và giải quyết vấn đề như luật, chính sách, quản lý, và nghệ thuật.',
  ],
  tags: ['triết học', 'đạo đức học', 'hạnh phúc', 'tư duy', 'ý nghĩa cuộc sống'],
};
