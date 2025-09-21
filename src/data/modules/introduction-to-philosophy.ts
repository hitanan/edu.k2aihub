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
        {
          question: 'Sự khác biệt giữa triết học và khoa học là gì?',
          answer: 'Khoa học sử dụng phương pháp thực nghiệm để kiểm tra các giả thuyết về thế giới vật chất. Triết học thường giải quyết các câu hỏi không thể trả lời chỉ bằng dữ liệu thực nghiệm, chẳng hạn như câu hỏi về đạo đức, ý nghĩa và bản chất của ý thức. Tuy nhiên, chúng thường xuyên giao thoa và bổ sung cho nhau.'
        },
        {
          question: 'Tại sao có nhiều trường phái triết học khác nhau? Không có câu trả lời nào đúng duy nhất sao?',
          answer: 'Triết học khám phá những câu hỏi phức tạp nhất mà con người có thể tự hỏi. Các trường phái khác nhau đưa ra những cách tiếp cận và hệ thống giá trị khác nhau để trả lời những câu hỏi đó. Việc không có một câu trả lời đúng duy nhất chính là động lực để tư duy triết học tiếp tục phát triển.'
        },
        {
          question: 'Logic là gì và tại sao nó quan trọng trong triết học?',
          answer: 'Logic là công cụ cơ bản của triết học. Đó là khoa học về lập luận đúng đắn. Nó giúp các nhà triết học xây dựng các lập luận chặt chẽ, xác định các lỗi ngụy biện và phân tích các khái niệm một cách rõ ràng. Không có logic, các cuộc tranh luận triết học sẽ chỉ là những ý kiến chủ quan.'
        },
        {
          question: 'Triết học có thực tế không?',
          answer: 'Hoàn toàn có. Triết học giúp bạn suy nghĩ rõ ràng hơn về các quyết định hàng ngày, các giá trị cá nhân và các vấn đề xã hội. Nó cung cấp cho bạn một "bộ công cụ tinh thần" để sống một cuộc đời có ý thức và ý nghĩa hơn.'
        },
        {
          question: 'Socrates là ai và phương pháp Socrates là gì?',
          answer: 'Socrates là một triết gia Hy Lạp cổ đại được coi là một trong những người sáng lập ra triết học phương Tây. Phương pháp của ông, được gọi là phương pháp Socrates, là một hình thức đối thoại hợp tác dựa trên việc đặt và trả lời các câu hỏi để kích thích tư duy phản biện và rút ra những ý tưởng và giả định sâu sắc.'
        },
        {
          question: 'Tại sao phải nghiên cứu các triết gia cổ đại khi thế giới đã quá khác biệt?',
          answer: 'Bởi vì những câu hỏi cơ bản mà họ đặt ra - về công lý, hạnh phúc, kiến thức, và mục đích sống - vẫn còn nguyên giá trị cho đến ngày nay. Việc nghiên cứu họ cho chúng ta thấy nguồn gốc của nhiều ý tưởng định hình thế giới hiện đại.'
        },
        {
          question: 'Triết học có phải chỉ là về ý kiến cá nhân không?',
          answer: 'Không. Mặc dù triết học khám phá nhiều quan điểm, nó không chỉ đơn thuần là việc nêu ý kiến. Một quan điểm triết học phải được hỗ trợ bởi các lập luận logic, bằng chứng (nếu có), và phải được bảo vệ trước các phản biện. Mục tiêu là tìm kiếm câu trả lời hợp lý nhất, không phải là câu trả lời được nhiều người thích nhất.'
        },
        {
          question: '"Thí nghiệm tưởng tượng" trong triết học là gì?',
          answer: 'Thí nghiệm tưởng tượng là những kịch bản giả định được thiết kế để khám phá các khái niệm và kiểm tra các lý thuyết. Ví dụ như "Vấn đề Xe điện" (Trolley Problem) hay "Bộ não trong thùng" (Brain in a Vat). Chúng giúp chúng ta suy nghĩ về các vấn đề phức tạp trong một môi trường được kiểm soát.'
        }
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
            'Thuyết Vị Lợi tập trung vào KẾT QUẢ của hành động (consequentialism). Hành động được coi là đúng nếu nó tối đa hóa hạnh phúc hoặc lợi ích cho số đông. Ngược lại, Đạo đức học của Kant (deontology) tập trung vào BẢN CHẤT của hành động, dựa trên các quy tắc và nghĩa vụ. Một số hành động được coi là sai về mặt đạo đức bất kể hậu quả của chúng là gì.',
        },
        {
          question: 'Sự khác biệt giữa "đạo đức" (ethics) và "luân lý" (morals) là gì?',
          answer: 'Mặc dù thường được sử dụng thay thế cho nhau, "luân lý" (morals) thường đề cập đến các quy tắc và giá trị cá nhân về đúng và sai, trong khi "đạo đức" (ethics) đề cập đến các tiêu chuẩn hành vi đúng đắn do một nhóm hoặc một hệ thống (như một tôn giáo hoặc một ngành nghề) đặt ra.'
        },
        {
          question: 'Nếu luân lý là tương đối, điều đó có nghĩa là mọi thứ đều được phép?',
          answer: 'Thuyết tương đối luân lý cho rằng không có tiêu chuẩn đạo đức phổ quát. Tuy nhiên, điều này không nhất thiết có nghĩa là "mọi thứ đều được phép". Hầu hết các nhà tương đối luận vẫn tin vào các quy tắc đạo đức trong khuôn khổ văn hóa hoặc cá nhân của họ. Họ chỉ đơn giản là không tin rằng các quy tắc đó áp dụng cho tất cả mọi người ở mọi nơi.'
        },
        {
          question: 'Thuyết Mệnh lệnh của Thần (Divine Command Theory) là gì?',
          answer: 'Đây là một lý thuyết đạo đức cho rằng một hành động là đúng về mặt đạo đức nếu nó được một vị thần ra lệnh hoặc cho phép. Theo quan điểm này, sự tốt lành và sự xấu xa được quyết định bởi ý muốn của Chúa.'
        },
        {
          question: 'Có hành động nào được coi là sai trái một cách phổ quát không?',
          answer: 'Đây là một câu hỏi triết học sâu sắc. Trong khi nhiều hành động như tra tấn trẻ em để giải trí bị lên án rộng rãi, việc tìm ra một hành động bị coi là sai trái một cách tuyệt đối trong mọi nền văn hóa, mọi thời đại và mọi hoàn cảnh là vô cùng khó khăn. Đây là một trong những cuộc tranh luận trung tâm giữa các nhà tương đối luận và các nhà phổ quát luận.'
        },
        {
          question: 'Luật pháp liên quan đến đạo đức như thế nào?',
          answer: 'Luật pháp và đạo đức không phải là một. Một hành động có thể hợp pháp nhưng vô đạo đức (ví dụ: tìm ra một lỗ hổng pháp lý để trốn thuế). Ngược lại, một hành động có thể là bất hợp pháp nhưng lại được coi là có đạo đức (ví dụ: bất tuân dân sự để phản đối một luật lệ bất công). Lý tưởng nhất, luật pháp nên phản ánh các giá trị đạo đức của xã hội.'
        },
        {
          question: 'Tại sao tôi nên hành động có đạo đức?',
          answer: 'Các triết gia đã đưa ra nhiều câu trả lời. Platon cho rằng sống có đạo đức là sống một cuộc sống hài hòa và lành mạnh. Aristotle tin rằng nó dẫn đến hạnh phúc (eudaimonia). Các nhà vị lợi cho rằng nó góp phần vào hạnh phúc chung. Các nhà lý thuyết hợp đồng xã hội cho rằng đó là điều kiện cần thiết để xã hội có thể hoạt động.'
        },
        {
          question: 'Vai trò của cảm xúc trong các quyết định đạo đức là gì?',
          answer: 'Theo truyền thống, nhiều nhà triết học (như Kant) coi cảm xúc là thứ làm lu mờ lý trí và nên được loại bỏ khỏi việc ra quyết định đạo đức. Tuy nhiên, các nhà triết học khác (như David Hume và các nhà đạo đức học hiện đại) cho rằng cảm xúc, đặc biệt là sự đồng cảm, là nền tảng của đạo đức và là động lực thúc đẩy chúng ta hành động vì người khác.'
        },
        {
          question: 'Đạo đức học đức hạnh (Virtue Ethics) khác với các lý thuyết khác như thế nào?',
          answer: 'Trong khi Thuyết Vị Lợi tập trung vào "Hành động nào mang lại kết quả tốt nhất?" và Đạo đức học của Kant hỏi "Hành động nào tuân theo quy tắc?", Đạo đức học đức hạnh hỏi "Tôi nên trở thành loại người nào?". Nó tập trung vào việc trau dồi các phẩm chất (đức hạnh) như lòng dũng cảm, sự trung thực, và lòng trắc ẩn để trở thành một con người tốt.'
        }
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
        {
          question: 'Hạnh phúc có phải chỉ là một phản ứng hóa học trong não không?',
          answer: 'Chắc chắn các chất hóa học trong não như dopamine và serotonin có liên quan đến cảm giác vui vẻ, nhưng hầu hết các triết gia sẽ cho rằng hạnh phúc không chỉ có vậy. Họ phân biệt giữa niềm vui nhất thời (pleasure) và một trạng thái hạnh phúc sâu sắc, bền vững hơn (eudaimonia), vốn đến từ việc sống một cuộc sống có ý nghĩa và đức hạnh.'
        },
        {
          question: 'Sự khác biệt giữa hạnh phúc và niềm vui là gì?',
          answer: 'Niềm vui (pleasure) thường là một cảm giác ngắn hạn, đến từ các kích thích bên ngoài như ăn một món ngon hay xem một bộ phim hay. Hạnh phúc (happiness), đặc biệt là eudaimonia của Aristotle, là một trạng thái viên mãn lâu dài, đến từ việc phát huy hết tiềm năng, sống có mục đích và đức hạnh.'
        },
        {
          question: 'Tiền có mua được hạnh phúc không?',
          answer: 'Nghiên cứu cho thấy tiền có thể làm tăng hạnh phúc đến một mức độ nhất định, chủ yếu bằng cách giảm bớt căng thẳng từ những nhu cầu cơ bản (nhà ở, thức ăn, an toàn). Tuy nhiên, sau một ngưỡng nhất định, việc có nhiều tiền hơn không đồng nghĩa với việc hạnh phúc hơn. Các yếu tố như mối quan hệ, ý nghĩa và mục đích sống trở nên quan trọng hơn.'
        },
        {
          question: 'Có thể hạnh phúc mọi lúc không?',
          answer: 'Hầu hết các trường phái triết học đều cho rằng việc mưu cầu hạnh phúc không ngừng nghỉ là một mục tiêu phi thực tế và thậm chí có thể phản tác dụng. Cuộc sống vốn dĩ có những thăng trầm. Chủ nghĩa Khắc kỷ, ví dụ, dạy chúng ta tìm kiếm sự bình thản (tranquility) thay vì hạnh phúc, bằng cách chấp nhận những gì chúng ta không thể kiểm soát.'
        },
        {
          question: 'Chủ nghĩa Khắc kỷ khác với Chủ nghĩa Khoái lạc (Epicureanism) như thế nào?',
          answer: 'Mặc dù cả hai đều tìm kiếm sự bình an, Chủ nghĩa Khoái lạc cho rằng con đường dẫn đến nó là tối đa hóa niềm vui (đặc biệt là những niềm vui đơn giản, không gây đau khổ) và giảm thiểu nỗi đau. Chủ nghĩa Khắc kỷ lại cho rằng con đường đó là sống theo lý trí và đức hạnh, và chấp nhận số phận một cách bình thản.'
        },
        {
          question: 'Nietzsche có ý gì khi nói về "amor fati" (yêu lấy định mệnh của mình)?',
          answer: '"Amor fati" là một khái niệm của Nietzsche, khuyến khích chúng ta không chỉ chấp nhận mà còn yêu thương mọi thứ xảy ra trong cuộc đời mình, cả niềm vui và nỗi đau. Đó là thái độ khẳng định cuộc sống một cách trọn vẹn, coi mọi trải nghiệm đều là một phần cần thiết của con người mà chúng ta trở thành.'
        },
        {
          question: 'Nếu chúng ta tự tạo ra ý nghĩa cho riêng mình, điều đó có làm cho ý nghĩa cuộc sống trở nên tùy tiện không?',
          answer: 'Các nhà hiện sinh như Sartre và Camus sẽ nói rằng nó không tùy tiện, mà là một trách nhiệm to lớn. Việc bạn chọn điều gì để cống hiến cuộc đời mình, dù là nghệ thuật, khoa học, gia đình hay công lý xã hội, sẽ định hình con người bạn. Sự lựa chọn đó là của bạn, và chính hành động lựa chọn và cam kết với nó đã mang lại ý nghĩa.'
        },
        {
          question: 'Mối quan hệ giữa hạnh phúc và các mối quan hệ xã hội là gì?',
          answer: 'Hầu hết các nghiên cứu tâm lý học và nhiều trường phái triết học đều đồng ý rằng các mối quan hệ xã hội bền chặt là một trong những yếu tố dự báo mạnh mẽ nhất về hạnh phúc. Con người là sinh vật xã hội, và việc thuộc về một cộng đồng, có những mối quan hệ yêu thương và hỗ trợ là nền tảng cho một cuộc sống viên mãn.'
        }
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
