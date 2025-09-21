import { ModuleData } from '@/types';

export const careerGuidanceDevelopmentModuleData: ModuleData = {
  id: 'career-guidance-development',
  title: 'Hướng Nghiệp và Phát Triển Sự Nghiệp',
  subtitle: 'Khám phá bản thân, tìm hiểu thế giới nghề nghiệp và xây dựng lộ trình sự nghiệp cho tương lai.',
  description:
    'Module này cung cấp các công cụ và phương pháp giúp học sinh THPT tự khám phá sở thích, năng lực, giá trị của bản thân, từ đó đối chiếu với thế giới nghề nghiệp đa dạng để có những lựa chọn ngành học và nghề nghiệp phù hợp.',
  image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
  color: 'from-sky-500 to-indigo-500',
  category: 'Phát triển bản thân',
  level: 'Trung học',
  duration: '8 tuần',
  lessons: [
    {
      id: 'kham-pha-ban-than',
      title: 'Khám Phá Bản Thân: Sở Thích, Năng Lực và Giá Trị Nghề Nghiệp',
      description:
        'Sử dụng các bài trắc nghiệm và hoạt động tự phản ánh để xác định điểm mạnh, điểm yếu, sở thích và những giá trị bạn tìm kiếm trong công việc.',
      duration: '60 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Trắc nghiệm Holland', 'Phân tích SWOT cá nhân', 'Xác định giá trị cốt lõi'],
      objectives: [
        'Hiểu về 6 nhóm sở thích nghề nghiệp theo lý thuyết Holland (Realistic, Investigative, Artistic, Social, Enterprising, Conventional).',
        'Thực hiện phân tích SWOT (Điểm mạnh, Điểm yếu, Cơ hội, Thách thức) cho bản thân.',
        'Xác định được các giá trị nghề nghiệp quan trọng đối với mình (ví dụ: tiền bạc, sự ổn định, sự sáng tạo, giúp đỡ người khác).',
        'Tổng hợp các yếu tố trên để phác họa chân dung nghề nghiệp của bản thân.',
      ],
      faqs: [
        {
          question: 'Trắc nghiệm Holland (Mật mã Holland) là gì?',
          answer:
            'Đây là một lý thuyết và công cụ trắc nghiệm rất phổ biến trong hướng nghiệp, cho rằng con người và môi trường làm việc có thể được phân loại thành 6 nhóm chính. Khi sở thích nghề nghiệp của bạn khớp với môi trường làm việc, bạn sẽ có xu hướng hài lòng và thành công hơn.',
        },
        {
          question: 'Tại sao việc xác định "giá trị nghề nghiệp" lại quan trọng?',
          answer:
            'Giá trị nghề nghiệp là những gì bạn cho là quan trọng nhất trong công việc. Nếu công việc của bạn không phù hợp với giá trị của bạn (ví dụ: bạn coi trọng sự sáng tạo nhưng lại làm một công việc lặp đi lặp lại), bạn sẽ khó cảm thấy thỏa mãn và gắn bó lâu dài.',
        },
        {
            question: 'Phân tích SWOT cá nhân giúp ích gì cho việc hướng nghiệp?',
            answer: 'Phân tích SWOT (Strengths - Điểm mạnh, Weaknesses - Điểm yếu, Opportunities - Cơ hội, Threats - Thách thức) giúp bạn có một cái nhìn toàn diện về bản thân. Bạn có thể tận dụng điểm mạnh, cải thiện điểm yếu, nắm bắt cơ hội nghề nghiệp và chuẩn bị cho các thách thức, từ đó đưa ra lựa chọn sáng suốt hơn.',
        },
        {
            question: 'Sở thích có phải là yếu tố duy nhất để chọn nghề không?',
            answer: 'Không. Sở thích là một yếu tố quan trọng, nhưng không phải là duy nhất. Bạn cần cân nhắc cả năng lực (bạn có làm tốt việc đó không?), giá trị (công việc đó có ý nghĩa với bạn không?) và nhu cầu của thị trường lao động (công việc đó có dễ tìm việc và phát triển không?).',
        },
        {
            question: 'Làm thế nào để khám phá năng lực thực sự của bản thân?',
            answer: 'Hãy thử tham gia nhiều hoạt động khác nhau: các môn học, câu lạc bộ, dự án tình nguyện, công việc làm thêm. Hãy chú ý xem hoạt động nào bạn làm tốt một cách tự nhiên, nhận được lời khen từ người khác và cảm thấy tự tin khi thực hiện. Đó chính là dấu hiệu của năng lực.',
        },
        {
            question: 'Sự khác biệt giữa kỹ năng cứng và kỹ năng mềm là gì?',
            answer: 'Kỹ năng cứng là những kỹ năng chuyên môn, có thể đo lường được (ví dụ: lập trình, kế toán, ngoại ngữ). Kỹ năng mềm là những kỹ năng thuộc về tính cách và tương tác xã hội (ví dụ: giao tiếp, làm việc nhóm, tư duy phản biện). Cả hai đều quan trọng cho sự thành công trong sự nghiệp.',
        },
        {
            question: 'Nếu kết quả trắc nghiệm Holland của tôi không rõ ràng về một nhóm nào thì sao?',
            answer: 'Điều đó hoàn toàn bình thường. Nhiều người là sự kết hợp của 2-3 nhóm sở thích khác nhau. Ví dụ, một người có thể vừa có tính nghệ thuật (Artistic) vừa có tính xã hội (Social), phù hợp với các nghề như giáo viên dạy nhạc hoặc liệu pháp nghệ thuật. Hãy xem xét sự kết hợp của các nhóm nổi trội nhất của bạn.',
        },
        {
            question: 'Tôi có thể thay đổi sở thích và giá trị nghề nghiệp theo thời gian không?',
            answer: 'Chắc chắn có. Con người luôn phát triển và thay đổi. Những gì bạn coi trọng ở tuổi 18 có thể khác với ở tuổi 30. Vì vậy, việc tự khám phá và đánh giá lại bản thân là một quá trình liên tục trong suốt sự nghiệp của bạn.',
        },
        {
            question: 'Làm thế nào để phân biệt giữa sở thích nhất thời và đam mê thực sự?',
            answer: 'Sở thích nhất thời thường đến nhanh và đi cũng nhanh. Đam mê là một sự quan tâm sâu sắc và lâu dài, khiến bạn sẵn sàng đầu tư thời gian và công sức để tìm hiểu, thực hành và vượt qua khó khăn. Hãy thử theo đuổi một sở thích trong một khoảng thời gian đủ dài để xem nó có thực sự là đam mê của bạn không.',
        },
        {
            question: 'Nếu tôi không có sở thích hay điểm mạnh nào nổi trội thì phải làm sao?',
            answer: 'Đừng lo lắng, nhiều người cũng cảm thấy như vậy. Đây là cơ hội để bạn khám phá. Hãy bắt đầu bằng cách thử những điều mới, đọc sách về các lĩnh vực khác nhau, nói chuyện với mọi người về công việc của họ. Quá trình hướng nghiệp chính là một hành trình khám phá, không phải là một điểm đến có sẵn.',
        },
      ],
    },
    {
      id: 'tim-hieu-the-gioi-nghe-nghiep',
      title: 'Tìm Hiểu Thế Giới Nghề Nghiệp và Xu Hướng Tương Lai',
      description:
        'Nghiên cứu về các nhóm ngành nghề khác nhau, yêu cầu của từng nghề và những xu hướng nghề nghiệp trong cuộc Cách mạng Công nghiệp 4.0.',
      duration: '55 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Nghiên cứu ngành nghề', 'Tìm hiểu thị trường lao động', 'Dự báo nghề nghiệp tương lai'],
      objectives: [
        'Phân loại được các ngành nghề theo các lĩnh vực khác nhau (Kinh tế, Kỹ thuật, Xã hội, Sức khỏe...).',
        'Tìm hiểu thông tin về một nghề cụ thể: mô tả công việc, yêu cầu về kiến thức/kỹ năng, mức lương, triển vọng.',
        'Nhận diện được những ngành nghề đang có xu hướng phát triển mạnh trong tương lai (AI, khoa học dữ liệu, năng lượng tái tạo).',
        'Hiểu được tác động của tự động hóa và AI đến thị trường lao động.',
      ],
      faqs: [
        {
          question: 'Làm thế nào để tìm hiểu thông tin đáng tin cậy về một nghề?',
          answer:
            'Bạn có thể tìm trên các trang web tuyển dụng lớn (VietnamWorks, TopCV), các báo cáo về thị trường lao động, website của các trường đại học có đào tạo ngành đó, và quan trọng nhất là cố gắng trò chuyện, phỏng vấn những người đang thực sự làm trong ngành (information interview).',
        },
        {
          question: 'Những kỹ năng nào sẽ quan trọng trong tương lai, dù làm bất cứ nghề gì?',
          answer:
            'Các kỹ năng "xuyên suốt" như tư duy phản biện, giải quyết vấn đề phức tạp, sáng tạo, trí tuệ cảm xúc, kỹ năng giao tiếp và hợp tác, và khả năng học tập suốt đời được dự báo là sẽ ngày càng quan trọng trong một thế giới công việc luôn biến đổi.',
        },
        {
            question: '"Information Interview" (Phỏng vấn thông tin) là gì?',
            answer: 'Đây là một cuộc trò chuyện không chính thức với một người đang làm trong ngành nghề mà bạn quan tâm. Mục đích không phải để xin việc, mà là để thu thập thông tin thực tế về công việc hàng ngày, những thách thức, và lời khuyên từ người trong cuộc. Đây là một trong những cách tìm hiểu nghề nghiệp hiệu quả nhất.',
        },
        {
            question: 'Thị trường lao động Việt Nam đang có những xu hướng lớn nào?',
            answer: 'Một số xu hướng chính bao gồm: sự phát triển mạnh mẽ của kinh tế số (digital economy), nhu cầu cao về nhân lực trong các ngành công nghệ thông tin, logistics, và năng lượng tái tạo; sự gia tăng của lao động tự do (freelance) và làm việc từ xa.',
        },
        {
            question: 'Làm thế nào để biết một ngành nghề có triển vọng trong tương lai?',
            answer: 'Hãy xem xét các yếu tố sau: ngành đó có đang được chính phủ ưu tiên phát triển không? Ngành đó có đang nhận được nhiều vốn đầu tư không? Ngành đó có giải quyết các vấn đề lớn của xã hội (như già hóa dân số, biến đổi khí hậu) không? Các công nghệ mới như AI có đang thúc đẩy ngành đó phát triển không?',
        },
        {
            question: 'Sự khác biệt giữa "ngành học" và "nghề nghiệp" là gì?',
            answer: 'Ngành học là lĩnh vực kiến thức bạn được đào tạo ở trường (ví dụ: ngành Marketing). Nghề nghiệp là công việc cụ thể bạn làm (ví dụ: chuyên viên SEO, quản lý thương hiệu, nhân viên quảng cáo). Một ngành học có thể dẫn đến nhiều con đường sự nghiệp khác nhau.',
        },
        {
            question: 'Tôi có nên chọn nghề chỉ vì mức lương cao không?',
            answer: 'Lương là một yếu tố quan trọng, nhưng không nên là duy nhất. Một công việc lương cao nhưng không phù hợp với sở thích, năng lực và giá trị của bạn có thể dẫn đến căng thẳng và kiệt sức. Sự cân bằng giữa các yếu tố là lý tưởng nhất.',
        },
        {
            question: 'Tự động hóa sẽ ảnh hưởng đến những công việc nào nhiều nhất?',
            answer: 'Những công việc có tính chất lặp đi lặp lại, dựa trên quy tắc rõ ràng và không đòi hỏi sự sáng tạo hay tương tác phức tạp sẽ có nguy cơ bị tự động hóa cao nhất, ví dụ như nhập liệu, một số công việc trong dây chuyền lắp ráp, hoặc nhân viên thu ngân.',
        },
        {
            question: 'Làm thế nào để chuẩn bị cho những công việc "chưa từng tồn tại"?',
            answer: 'Thay vì chỉ tập trung vào kiến thức của một nghề cụ thể, hãy rèn luyện những kỹ năng có thể chuyển đổi (transferable skills) như học cách học, giải quyết vấn đề, giao tiếp, và thích ứng với sự thay đổi. Chính những kỹ năng này sẽ giúp bạn linh hoạt và sẵn sàng cho bất kỳ công việc nào trong tương lai.',
        },
        {
            question: 'Các khối ngành STEM là gì và tại sao chúng lại quan trọng?',
            answer: 'STEM là viết tắt của Science (Khoa học), Technology (Công nghệ), Engineering (Kỹ thuật), và Mathematics (Toán học). Các ngành này được coi là động lực chính cho sự đổi mới và phát triển kinh tế trong thế kỷ 21, và do đó, nhân lực trong lĩnh vực STEM thường có nhu cầu cao và mức lương tốt.',
        },
      ],
    },
    {
      id: 'xay-dung-lo-trinh',
      title: 'Xây Dựng Lộ Trình Học Tập và Phát Triển Cá Nhân',
      description:
        'Học cách đặt mục tiêu theo phương pháp SMART, lựa chọn môn học, hoạt động ngoại khóa và xây dựng một kế hoạch hành động để đạt được mục tiêu nghề nghiệp.',
      duration: '50 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Đặt mục tiêu học tập', 'Chọn câu lạc bộ', 'Chuẩn bị hồ sơ đại học'],
      objectives: [
        'Biết cách đặt mục tiêu SMART (Cụ thể, Đo lường được, Khả thi, Liên quan, Có thời hạn).',
        'Lựa chọn các môn học ở trường THPT để hỗ trợ cho định hướng ngành học của mình.',
        'Lên kế hoạch tham gia các hoạt động ngoại khóa, tình nguyện, thực tập để làm đẹp hồ sơ và tích lũy kinh nghiệm.',
        'Xây dựng một bản kế hoạch hành động cá nhân từ nay đến khi vào đại học.',
      ],
      faqs: [
        {
          question: 'Tại sao mục tiêu "Tôi muốn học giỏi" không phải là một mục tiêu SMART?',
          answer:
            'Vì nó không cụ thể (giỏi là như thế nào?), không đo lường được (làm sao biết đã đạt?), và không có thời hạn. Một mục tiêu SMART hơn sẽ là: "Tôi muốn đạt điểm trung bình môn Toán trên 8.5 trong học kỳ này bằng cách làm hết bài tập về nhà và học nhóm mỗi tuần một lần".',
        },
        {
          question: 'Hoạt động ngoại khóa có thực sự quan trọng khi xét tuyển đại học không?',
          answer:
            'Rất quan trọng, đặc biệt với các chương trình du học hoặc các trường đại học top đầu. Hoạt động ngoại khóa cho thấy bạn là một người năng động, có đam mê, có kỹ năng lãnh đạo, làm việc nhóm... chứ không chỉ là một "mọt sách". Hãy chọn những hoạt động mà bạn thực sự yêu thích và có thể gắn bó.',
        },
        {
            question: 'Làm thế nào để lựa chọn tổ hợp môn thi THPT Quốc gia phù hợp?',
            answer: 'Đầu tiên, xác định một vài ngành học bạn quan tâm. Sau đó, tìm hiểu xem các ngành đó ở các trường đại học bạn nhắm đến xét tuyển những tổ hợp môn nào. Cuối cùng, đối chiếu với những môn học bạn có thế mạnh để đưa ra lựa chọn tối ưu.',
        },
        {
            question: 'Xây dựng "thương hiệu cá nhân" từ khi còn là học sinh có cần thiết không?',
            answer: 'Rất cần thiết. Thương hiệu cá nhân không phải là thứ gì đó cao siêu, nó đơn giản là cách bạn thể hiện bản thân một cách nhất quán. Việc tham gia một lĩnh vực ngoại khóa bạn đam mê, chia sẻ những điều bạn học được, hoặc thực hiện một dự án nhỏ... đều là những cách để xây dựng thương hiệu cá nhân, giúp hồ sơ của bạn nổi bật.',
        },
        {
            question: 'Nếu tôi nhận ra mình đã chọn sai ngành học thì sao?',
            answer: 'Đừng quá hoảng sợ, đây là điều khá phổ biến. Bạn có thể tìm hiểu về việc học bằng kép, học chuyển tiếp sang ngành khác trong cùng trường, hoặc hoàn thành chương trình và học thêm các chứng chỉ, khóa học ngắn hạn về lĩnh vực bạn thực sự quan tâm sau khi ra trường.',
        },
        {
            question: 'Một bản kế hoạch hành động cá nhân nên bao gồm những gì?',
            answer: 'Nó nên bao gồm: mục tiêu lớn (ví dụ: đỗ vào ngành X, trường Y), các mục tiêu nhỏ hơn theo từng năm/học kỳ (ví dụ: đạt IELTS 7.0, làm leader một dự án), và các hành động cụ thể hàng tuần/hàng tháng để đạt được mục tiêu nhỏ đó.',
        },
        {
            question: 'Làm thế nào để cân bằng giữa việc học và hoạt động ngoại khóa?',
            answer: 'Kỹ năng quản lý thời gian là chìa khóa. Hãy sử dụng các công cụ như lịch biểu, danh sách việc cần làm. Áp dụng nguyên tắc "chất lượng hơn số lượng": thà tham gia ít hoạt động nhưng có vai trò tích cực và tạo ra ảnh hưởng, còn hơn là tham gia hời hợt ở quá nhiều nơi.',
        },
        {
            question: 'Tìm kiếm một người cố vấn (mentor) có lợi ích gì?',
            answer: 'Một người cố vấn là người đi trước trong ngành hoặc lĩnh vực bạn quan tâm. Họ có thể cho bạn những lời khuyên thực tế, chia sẻ kinh nghiệm, kết nối bạn với các cơ hội và giúp bạn tránh những sai lầm mà họ đã từng mắc phải. Đây là một trong những tài sản quý giá nhất trong sự nghiệp.',
        },
        {
            question: 'Việc đi thực tập sớm có lợi ích gì?',
            answer: 'Thực tập giúp bạn có được trải nghiệm làm việc thực tế, áp dụng kiến thức đã học vào thực tiễn, xây dựng mạng lưới quan hệ, và quan trọng nhất là giúp bạn "thử" một nghề để xem mình có thực sự phù hợp với nó hay không trước khi ra trường.',
        },
        {
            question: 'Làm thế nào để duy trì động lực khi thực hiện một kế hoạch dài hạn?',
            answer: 'Hãy chia mục tiêu lớn thành các bước nhỏ và tự thưởng cho mình khi hoàn thành mỗi bước. Thường xuyên xem lại "lý do tại sao" bạn bắt đầu. Tìm một nhóm bạn cùng chí hướng để hỗ trợ và động viên lẫn nhau. Và hãy nhớ rằng, việc thỉnh thoảng nghỉ ngơi và nạp lại năng lượng cũng là một phần của kế hoạch.',
        },
      ],
    },
  ],
  features: [
    'Các bài trắc nghiệm hướng nghiệp (Holland, SWOT)',
    'Thông tin cập nhật về các ngành nghề và xu hướng tương lai',
    'Hướng dẫn đặt mục tiêu và lập kế hoạch hành động',
    'Case study về các lựa chọn nghề nghiệp khác nhau',
  ],
  prerequisites: ['Không yêu cầu kiến thức nền tảng'],
  objectives: [
    'Hiểu rõ hơn về điểm mạnh, sở thích và giá trị của bản thân.',
    'Có cái nhìn tổng quan về thế giới nghề nghiệp và các xu hướng trong tương lai.',
    'Trang bị phương pháp để đưa ra quyết định chọn ngành, chọn trường một cách có cơ sở.',
    'Xây dựng được một kế hoạch phát triển cá nhân để chuẩn bị cho sự nghiệp tương lai.',
  ],
  careerOutcomes: [
    'Giúp học sinh có những lựa chọn hướng nghiệp đúng đắn, giảm thiểu tình trạng chọn sai ngành, sai nghề.',
    'Trang bị những kỹ năng lập kế hoạch và phát triển bản thân cần thiết cho suốt cuộc đời.',
  ],
  tags: ['hướng nghiệp', 'phát triển sự nghiệp', 'chọn ngành', 'kỹ năng mềm', 'tương lai'],
};
