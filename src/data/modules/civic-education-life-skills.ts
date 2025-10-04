import { ModuleData } from '@/types';

export const civicEducationLifeSkillsModuleData: ModuleData = {
  id: 'civic-education-life-skills',
  title: 'Giáo Dục Công Dân và Kỹ Năng Sống',
  subtitle: 'Trang bị kiến thức pháp luật, đạo đức và những kỹ năng mềm cần thiết cho cuộc sống và hội nhập.',
  description:
    'Module này không chỉ là môn học đạo đức khô khan mà là một cẩm nang sống, giúp học sinh hiểu về quyền và nghĩa vụ công dân, xây dựng nhân cách tốt đẹp và rèn luyện các kỹ năng sống thiết yếu như giao tiếp, quản lý cảm xúc, và giải quyết vấn đề.',
  image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=600&fit=crop',
  color: 'from-teal-500 to-cyan-500',
  category: 'Phát triển bản thân',
  level: 'Trung học',
  duration: '12 tuần',
  lessons: [
    {
      id: 'phap-luat-co-ban',
      title: 'Pháp Luật Cơ Bản Cho Công Dân Trẻ',
      description:
        'Giới thiệu về hệ thống pháp luật Việt Nam, quyền và nghĩa vụ cơ bản của công dân, đặc biệt là những quy định liên quan đến lứa tuổi vị thành niên.',
      duration: '50 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Luật Giao thông đường bộ', 'Luật An ninh mạng', 'Quyền trẻ em'],
      objectives: [
        'Hiểu được khái niệm pháp luật, đặc điểm và vai trò của pháp luật trong xã hội.',
        'Nắm được các quyền và nghĩa vụ cơ bản của công dân được quy định trong Hiến pháp.',
        'Nhận biết các hành vi vi phạm pháp luật phổ biến ở lứa tuổi học sinh.',
        'Biết cách bảo vệ bản thân và người khác theo đúng quy định của pháp luật.',
      ],
      faqs: [
        {
          question: 'Tại sao mọi người phải sống và làm việc theo Hiến pháp và pháp luật?',
          answer:
            'Pháp luật tạo ra một khuôn khổ chung, công bằng cho mọi người trong xã hội. Việc tuân thủ pháp luật giúp đảm bảo trật tự, an toàn, bảo vệ quyền và lợi ích hợp pháp của mỗi cá nhân, và thúc đẩy xã hội phát triển ổn định.',
        },
        {
          question: 'Người từ đủ bao nhiêu tuổi phải chịu trách nhiệm hình sự về mọi tội phạm?',
          answer:
            'Theo Bộ luật Hình sự Việt Nam, người từ đủ 16 tuổi trở lên phải chịu trách nhiệm hình sự về mọi tội phạm, trừ những tội phạm mà Bộ luật có quy định khác.',
        },
        {
          question: 'Quyền và nghĩa vụ cơ bản của công dân khác nhau như thế nào?',
          answer:
            'Quyền là những gì công dân được hưởng, được làm, được đòi hỏi (ví dụ: quyền được học tập, quyền tự do kinh doanh). Nghĩa vụ là những gì công dân bắt buộc phải làm cho nhà nước, cho xã hội (ví dụ: nghĩa vụ quân sự, nghĩa vụ đóng thuế).',
        },
        {
          question: 'Khi tham gia giao thông bằng xe đạp điện, học sinh có cần đội mũ bảo hiểm không?',
          answer:
            'Có. Theo Luật Giao thông đường bộ, người điều khiển, người ngồi trên xe đạp máy (kể cả xe đạp điện) phải đội mũ bảo hiểm có cài quai đúng quy cách.',
        },
        {
          question: 'Hành vi bạo lực học đường có vi phạm pháp luật không?',
          answer:
            'Chắc chắn có. Tùy theo mức độ, hành vi bạo lực học đường có thể bị xử phạt hành chính (phạt tiền) hoặc thậm chí bị truy cứu trách nhiệm hình sự về các tội như Cố ý gây thương tích hoặc Làm nhục người khác.',
        },
        {
          question: 'Luật An ninh mạng quy định những hành vi nào bị cấm trên không gian mạng?',
          answer:
            'Một số hành vi bị cấm bao gồm: đăng tải thông tin sai sự thật gây hoang mang, xúc phạm danh dự nhân phẩm người khác, lừa đảo, tổ chức đánh bạc, và chia sẻ thông tin có nội dung đồi trụy, bạo lực.',
        },
        {
          question: 'Quyền trẻ em là gì?',
          answer:
            'Quyền trẻ em là những quyền được pháp luật quốc tế và Việt Nam công nhận để đảm bảo trẻ em được sống, được bảo vệ, được phát triển và được tham gia. Ví dụ: quyền được khai sinh, quyền được chăm sóc sức khỏe, quyền được học tập.',
        },
        {
          question: 'Nếu bị người khác vu khống trên mạng xã hội, em nên làm gì?',
          answer:
            'Đầu tiên, hãy thu thập bằng chứng (chụp màn hình). Sau đó, bạn có thể báo cáo bài viết với quản trị viên mạng xã hội. Nếu sự việc nghiêm trọng, bạn có quyền trình báo với cơ quan công an hoặc khởi kiện ra tòa án để yêu cầu bồi thường và xử lý người vi phạm.',
        },
        {
          question: 'Công dân có nghĩa vụ gì trong việc bảo vệ môi trường?',
          answer:
            'Mọi công dân có nghĩa vụ bảo vệ môi trường, bao gồm việc không vứt rác bừa bãi, tham gia các hoạt động làm sạch môi trường, và tố giác các hành vi gây ô nhiễm nghiêm trọng.',
        },
        {
          question: 'Sự khác biệt giữa vi phạm hành chính và tội phạm là gì?',
          answer:
            'Vi phạm hành chính là hành vi có mức độ nguy hiểm cho xã hội thấp hơn, xâm phạm các quy tắc quản lý nhà nước và thường bị xử phạt bằng các hình thức như cảnh cáo, phạt tiền. Tội phạm là hành vi nguy hiểm cho xã hội được quy định trong Bộ luật Hình sự và có thể bị xử phạt bằng các hình phạt nghiêm khắc hơn như tù có thời hạn, tù chung thân.',
        },
      ],
      quizzes: [
        {
          question: 'Văn bản nào có hiệu lực pháp lý cao nhất trong hệ thống pháp luật Việt Nam?',
          options: ['Bộ luật Dân sự', 'Bộ luật Hình sự', 'Luật Giáo dục', 'Hiến pháp'],
          correctAnswerIndex: 3,
          explanation:
            'Hiến pháp là luật cơ bản của nhà nước, có hiệu lực pháp lý cao nhất. Mọi văn bản pháp luật khác đều phải phù hợp với Hiến pháp.',
        },
      ],
    },
    {
      id: 'ky-nang-quan-ly-cam-xuc',
      title: 'Kỹ Năng Quản Lý Cảm Xúc (EQ)',
      description:
        'Học cách nhận biết, thấu hiểu và điều chỉnh cảm xúc của bản thân cũng như nhận biết cảm xúc của người khác để xây dựng mối quan hệ tốt đẹp.',
      duration: '60 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Kiểm soát cơn giận', 'Vượt qua căng thẳng', 'Đồng cảm với bạn bè'],
      objectives: [
        'Nhận diện được các loại cảm xúc cơ bản (vui, buồn, giận, sợ).',
        'Hiểu được mối liên hệ giữa cảm xúc, suy nghĩ và hành vi.',
        'Học các kỹ thuật đơn giản để kiểm soát cảm xúc tiêu cực (hít thở sâu, đếm ngược).',
        'Phát triển khả năng đồng cảm và lắng nghe người khác.',
      ],
      faqs: [
        {
          question: 'Tại sao quản lý cảm xúc lại quan trọng?',
          answer:
            'Quản lý cảm xúc giúp chúng ta đưa ra quyết định sáng suốt hơn (thay vì hành động bốc đồng khi nóng giận), giảm bớt căng thẳng, cải thiện mối quan hệ với mọi người và tăng cường sức khỏe tinh thần.',
        },
        {
          question: 'Làm thế nào để vượt qua cảm giác lo lắng trước kỳ thi?',
          answer:
            'Một vài kỹ thuật hữu ích bao gồm: chuẩn bị bài vở kỹ lưỡng để tăng sự tự tin, tập hít thở sâu để làm dịu hệ thần kinh, chia sẻ cảm xúc với bạn bè hoặc người thân, và duy trì một lịch trình ngủ nghỉ, ăn uống hợp lý.',
        },
        {
          question: 'Sự khác biệt giữa đồng cảm (empathy) và thông cảm (sympathy) là gì?',
          answer:
            'Thông cảm là bạn cảm thấy tiếc cho hoàn cảnh của ai đó. Đồng cảm là bạn đặt mình vào vị trí của họ để thực sự thấu hiểu cảm xúc và góc nhìn của họ. Đồng cảm sâu sắc hơn và giúp kết nối con người tốt hơn.',
        },
        {
          question: 'Kỹ thuật "hít thở hộp" (box breathing) là gì?',
          answer:
            'Đây là một kỹ thuật thư giãn đơn giản: Hít vào trong 4 giây, giữ hơi trong 4 giây, thở ra trong 4 giây, và giữ phổi trống trong 4 giây. Lặp lại chu trình này vài lần sẽ giúp làm chậm nhịp tim và giảm căng thẳng.',
        },
        {
          question: 'Viết nhật ký có giúp quản lý cảm xúc không?',
          answer:
            'Có, viết nhật ký là một cách rất hiệu quả. Nó giúp bạn gọi tên và làm rõ những cảm xúc hỗn loạn, nhìn nhận vấn đề từ một góc độ khác, và theo dõi các kiểu mẫu cảm xúc của bản thân theo thời gian.',
        },
        {
          question: 'Làm gì khi cảm thấy tức giận?',
          answer:
            'Thay vì phản ứng ngay lập tức, hãy thử dừng lại một chút. Rời khỏi tình huống nếu cần, tập trung vào hơi thở, hoặc thử vận động thể chất (như đi bộ nhanh) để giải tỏa năng lượng. Sau khi đã bình tĩnh hơn, hãy suy nghĩ về nguyên nhân và cách giải quyết.',
        },
        {
          question: 'Làm thế nào để thể hiện sự đồng cảm mà không bị cảm xúc của người khác lấn át?',
          answer:
            'Hãy lắng nghe một cách tích cực, xác nhận cảm xúc của họ ("Tớ hiểu là cậu đang cảm thấy rất thất vọng"), nhưng đồng thời duy trì ranh giới cảm xúc của riêng mình. Nhớ rằng bạn ở đó để hỗ trợ, không phải để "hấp thụ" nỗi buồn của họ.',
        },
        {
          question: 'Tại sao việc đặt tên cho cảm xúc của mình lại hữu ích?',
          answer:
            'Khi bạn có thể nói "Tôi đang cảm thấy thất vọng" thay vì chỉ cảm thấy "tệ", bạn đã chuyển cảm xúc từ một trạng thái mơ hồ sang một vấn đề cụ thể hơn. Điều này giúp não bộ dễ dàng xử lý và tìm ra hướng giải quyết.',
        },
        {
          question: 'Làm thế nào để xây dựng khả năng phục hồi (resilience) sau thất bại?',
          answer:
            'Hãy xem thất bại như một cơ hội để học hỏi, tập trung vào những gì bạn có thể kiểm soát, duy trì một cái nhìn lạc quan, và tìm kiếm sự hỗ trợ từ mạng lưới bạn bè, gia đình. Khả năng phục hồi không phải là không bao giờ vấp ngã, mà là đứng dậy sau mỗi lần ngã.',
        },
        {
          question: 'Cảm xúc tích cực có lợi ích gì?',
          answer:
            'Cảm xúc tích cực không chỉ làm chúng ta cảm thấy dễ chịu. Chúng còn giúp mở rộng tư duy, tăng cường khả năng sáng tạo và giải quyết vấn đề, xây dựng các mối quan hệ xã hội bền chặt và cải thiện sức khỏe thể chất.',
        },
      ],
      quizzes: [
        {
          question: 'EQ là viết tắt của cụm từ nào?',
          options: ['Chỉ số thông minh', 'Trí tuệ cảm xúc', 'Năng lực học tập', 'Khả năng sáng tạo'],
          correctAnswerIndex: 1,
          explanation:
            'EQ (Emotional Quotient) hay Trí tuệ cảm xúc là khả năng nhận biết, đánh giá và kiểm soát cảm xúc của bản thân, của người khác và của các nhóm.',
        },
      ],
    },
    {
      id: 'ky-nang-giai-quyet-van-de',
      title: 'Kỹ Năng Giải Quyết Vấn Đề và Ra Quyết Định',
      description:
        'Trang bị một quy trình có hệ thống để xác định, phân tích và giải quyết các vấn đề gặp phải trong học tập và cuộc sống.',
      duration: '55 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Giải quyết mâu thuẫn với bạn bè', 'Lập kế hoạch học tập', 'Chọn trường, chọn ngành'],
      objectives: [
        'Học quy trình 5 bước để giải quyết vấn đề: Xác định vấn đề, Phân tích nguyên nhân, Đề xuất giải pháp, Lựa chọn và thực hiện, Đánh giá kết quả.',
        'Phân biệt giữa triệu chứng và nguyên nhân cốt lõi của một vấn đề.',
        'Sử dụng các công cụ tư duy như sơ đồ xương cá, 5 Whys.',
        'Rèn luyện khả năng ra quyết định dựa trên việc phân tích ưu, nhược điểm.',
      ],
      faqs: [
        {
          question: 'Kỹ thuật "5 Whys" là gì?',
          answer:
            'Đây là một kỹ thuật đơn giản để tìm ra nguyên nhân gốc rễ của một vấn đề bằng cách hỏi "Tại sao?" lặp đi lặp lại (thường là 5 lần). Ví dụ: "Tại sao bạn đi học muộn?" -> "Vì xe bị hỏng." -> "Tại sao xe bị hỏng?" -> "Vì lốp bị xẹp." -> "Tại sao lốp bị xẹp?" -> "Vì hôm qua đi qua đinh mà không biết."...',
        },
        {
          question: 'Làm thế nào để đưa ra một quyết định khó khăn?',
          answer:
            'Hãy thử lập một danh sách các lựa chọn. Với mỗi lựa chọn, liệt kê tất cả các ưu điểm và nhược điểm có thể nghĩ ra. Cho điểm từng ưu/nhược điểm theo mức độ quan trọng. Tổng hợp lại và xem lựa chọn nào có vẻ tối ưu nhất. Đôi khi, việc tham khảo ý kiến từ người bạn tin tưởng cũng rất hữu ích.',
        },
        {
          question: 'Sơ đồ xương cá (Fishbone Diagram) được sử dụng để làm gì?',
          answer:
            'Sơ đồ xương cá, hay còn gọi là sơ đồ Ishikawa, là một công cụ trực quan để phân tích nguyên nhân-kết quả. Nó giúp xác định và phân loại các nguyên nhân tiềm tàng của một vấn đề, thường được nhóm thành các loại chính như Con người, Quy trình, Máy móc, Vật liệu, Môi trường.',
        },
        {
          question: 'Tại sao việc "brainstorm" (động não) lại quan trọng khi tìm giải pháp?',
          answer:
            'Brainstorming khuyến khích việc tạo ra một số lượng lớn các ý tưởng mà không phán xét chúng ngay lập tức. Điều này giúp phá vỡ lối mòn tư duy, khám phá các khả năng sáng tạo và tăng cơ hội tìm ra một giải pháp đột phá.',
        },
        {
          question: 'Sự khác biệt giữa giải quyết vấn đề và ra quyết định là gì?',
          answer:
            'Giải quyết vấn đề là một quy trình rộng hơn, bao gồm việc xác định vấn đề và tìm ra các giải pháp. Ra quyết định là một bước trong quy trình đó, là hành động lựa chọn một giải pháp tốt nhất từ các phương án đã có.',
        },
        {
          question: 'Ma trận Eisenhower là gì và nó giúp ra quyết định như thế nào?',
          answer:
            'Đây là một công cụ quản lý thời gian và ưu tiên công việc. Nó chia các nhiệm vụ thành 4 ô dựa trên hai tiêu chí: Khẩn cấp và Quan trọng. Điều này giúp bạn quyết định nên làm gì ngay, lên lịch làm gì, ủy thác cho ai, hoặc loại bỏ việc gì.',
        },
        {
          question: 'Tại sao cần phải "đánh giá kết quả" sau khi thực hiện giải pháp?',
          answer:
            'Việc đánh giá giúp bạn xác định xem giải pháp có thực sự hiệu quả hay không. Nếu vấn đề vẫn còn, bạn có thể cần quay lại các bước trước để phân tích lại hoặc thử một giải pháp khác. Đây là một bước quan trọng để học hỏi và cải tiến.',
        },
        {
          question: 'Làm thế nào để giải quyết mâu thuẫn trong nhóm một cách xây dựng?',
          answer:
            'Hãy tập trung vào vấn đề, không phải con người. Lắng nghe quan điểm của tất cả các bên một cách khách quan, tìm kiếm điểm chung và mục tiêu chung, và cùng nhau tìm ra một giải pháp mà tất cả mọi người đều có thể chấp nhận (win-win).',
        },
        {
          question: 'Tư duy phản biện (critical thinking) có vai trò gì trong giải quyết vấn đề?',
          answer:
            'Tư duy phản biện là khả năng phân tích thông tin một cách khách quan, đánh giá các lập luận, và xác định các giả định ẩn. Nó là kỹ năng cốt lõi giúp bạn phân tích sâu sắc nguyên nhân của vấn đề và đánh giá hiệu quả của các giải pháp tiềm năng.',
        },
        {
          question: 'Khi nào nên chấp nhận một giải pháp "đủ tốt" thay vì tìm kiếm giải pháp "hoàn hảo"?',
          answer:
            'Trong nhiều tình huống thực tế, việc tìm kiếm một giải pháp hoàn hảo có thể tốn quá nhiều thời gian và nguồn lực. Nếu một giải pháp "đủ tốt" có thể giải quyết được vấn đề một cách hiệu quả, ít tốn kém và có thể thực hiện ngay, đó thường là lựa chọn khôn ngoan hơn.',
        },
      ],
    },
  ],
  features: [
    'Kiến thức pháp luật thiết thực',
    'Bài tập rèn luyện trí tuệ cảm xúc (EQ)',
    'Quy trình giải quyết vấn đề hiệu quả',
    'Tình huống thực tế và câu hỏi thảo luận',
  ],
  prerequisites: ['Không yêu cầu kiến thức nền tảng'],
  objectives: [
    'Trở thành một công dân có hiểu biết và trách nhiệm.',
    'Nâng cao khả năng tự nhận thức và quản lý bản thân.',
    'Xây dựng các mối quan hệ xã hội tích cực.',
    'Trang bị những kỹ năng mềm cần thiết cho sự thành công trong tương lai.',
  ],
  careerOutcomes: [
    'Kỹ năng sống cần thiết cho mọi ngành nghề và lĩnh vực.',
    'Nền tảng cho các ngành luật, tâm lý học, công tác xã hội, quản trị nhân sự.',
  ],
  tags: ['giáo dục công dân', 'kỹ năng sống', 'pháp luật', 'trí tuệ cảm xúc'],
};
