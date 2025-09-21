import { ModuleData } from '@/types';

export const artHistoryAppreciationModuleData: ModuleData = {
  id: 'art-history-appreciation',
  title: 'Nghệ Thuật và Lịch Sử Nghệ Thuật',
  subtitle: 'Hành trình khám phá và cảm thụ các tác phẩm nghệ thuật tiêu biểu của Việt Nam và thế giới.',
  description:
    'Module này mở ra một cánh cửa đến với thế giới của hội họa, điêu khắc và kiến trúc, giúp bạn không chỉ nhận biết các tác phẩm nổi tiếng mà còn hiểu được bối cảnh ra đời, phong cách nghệ thuật và thông điệp mà nghệ sĩ muốn truyền tải.',
  image: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=1200&h=600&fit=crop',
  color: 'from-purple-400 to-pink-500',
  category: 'Nghệ thuật & Nhân văn',
  level: 'Trung học',
  duration: '9 tuần',
  lessons: [
    {
      id: 'nghe-thuat-phuc-hung',
      title: 'Nghệ Thuật Thời Kỳ Phục Hưng: Sự Trở Lại Của Con Người',
      description:
        'Tìm hiểu về cuộc cách mạng nghệ thuật diễn ra ở Ý từ thế kỷ 14 đến 16, với sự tỏa sáng của các thiên tài như Leonardo da Vinci, Michelangelo và Raphael.',
      duration: '60 phút',
      difficulty: 'Trung bình',
      realWorldApplications: [
        'Phân tích tranh "Mona Lisa"',
        'Tìm hiểu kiến trúc Phục Hưng',
        'Ảnh hưởng đến văn hóa đại chúng',
      ],
      objectives: [
        'Hiểu được bối cảnh lịch sử và tư tưởng nhân văn của thời kỳ Phục Hưng.',
        'Nhận biết các đặc điểm của nghệ thuật Phục Hưng: tính chân thực, sự cân đối, phối cảnh tuyến tính.',
        'Phân tích được các tác phẩm tiêu biểu như "Mona Lisa", "Bữa ăn tối cuối cùng" (da Vinci), tượng "David", và mái vòm nhà nguyện Sistine (Michelangelo).',
        'So sánh sự khác biệt giữa nghệ thuật Trung Cổ và nghệ thuật Phục Hưng.',
      ],
      faqs: [
        {
          question: 'Tại sao nụ cười của nàng Mona Lisa lại bí ẩn đến vậy?',
          answer:
            'Leonardo da Vinci đã sử dụng một kỹ thuật gọi là "sfumato" (tiếng Ý nghĩa là "khói"), tạo ra sự chuyển tiếp mềm mại giữa các màu sắc và tông độ, đặc biệt là ở khóe miệng và mắt. Điều này làm cho biểu cảm của nàng có vẻ thay đổi khi người xem nhìn vào các phần khác nhau của bức tranh, tạo ra cảm giác bí ẩn, khó nắm bắt.',
        },
        {
          question: 'Nghệ thuật Phục Hưng có gì khác biệt so với nghệ thuật Trung Cổ?',
          answer:
            'Nghệ thuật Trung Cổ chủ yếu phục vụ tôn giáo, hình ảnh thường phẳng, mang tính biểu tượng. Nghệ thuật Phục Hưng, dù vẫn có nhiều chủ đề tôn giáo, nhưng lại đặt con người vào vị trí trung tâm. Các nghệ sĩ Phục Hưng nghiên cứu giải phẫu, toán học để tái hiện thế giới và con người một cách chân thực, có chiều sâu và sống động hơn.',
        },
        {
          question: 'Phối cảnh tuyến tính (linear perspective) là gì?',
          answer:
            'Đây là một kỹ thuật toán học được các nghệ sĩ Phục Hưng hoàn thiện để tạo ra ảo giác về chiều sâu trên một bề mặt phẳng. Các đường thẳng song song trong thực tế (như hai bên của một con đường) được vẽ hội tụ tại một điểm duy nhất trên đường chân trời, gọi là "điểm tụ".',
        },
        {
          question: 'Tại sao tượng David của Michelangelo lại quan trọng đến vậy?',
          answer:
            'Tượng David không chỉ là một kiệt tác về kỹ thuật điêu khắc mà còn là biểu tượng cho tinh thần của thành Florence: độc lập, tự do và sức mạnh của con người khi đối mặt với thử thách. Bức tượng thể hiện David trước khi chiến đấu với Goliath, nắm bắt được sự căng thẳng và tập trung, một hình ảnh đầy tính nhân văn.',
        },
        {
          question: 'Chủ nghĩa nhân văn (Humanism) đã ảnh hưởng đến nghệ thuật Phục Hưng như thế nào?',
          answer:
            'Chủ nghĩa nhân văn đề cao giá trị, tiềm năng và phẩm giá của con người. Trong nghệ thuật, điều này thể hiện qua việc tập trung vào vẻ đẹp cơ thể người, cảm xúc cá nhân và các chủ đề thần thoại Hy-La cổ điển, bên cạnh các chủ đề tôn giáo truyền thống.',
        },
        {
          question: 'Ai là những nhà bảo trợ nghệ thuật chính trong thời kỳ Phục Hưng?',
          answer:
            'Các nhà bảo trợ giàu có đóng vai trò cực kỳ quan trọng. Gia đình Medici ở Florence là một trong những nhà bảo trợ nổi tiếng nhất, đã tài trợ cho các nghệ sĩ như Michelangelo và Botticelli. Ngoài ra, Giáo hoàng ở Rome cũng là một nhà bảo trợ lớn, đặt hàng nhiều công trình nghệ thuật cho Vatican.',
        },
        {
          question: 'Bức "Sự ra đời của thần Vệ Nữ" của Botticelli có ý nghĩa gì?',
          answer:
            'Tác phẩm này là một ví dụ điển hình của việc tái khám phá các chủ đề thần thoại cổ điển. Nó mô tả nữ thần Tình yêu và Sắc đẹp được sinh ra từ biển cả, thể hiện lý tưởng về vẻ đẹp và sự trong trắng theo quan niệm của chủ nghĩa nhân văn Phục Hưng.',
        },
        {
          question: 'Kỹ thuật "chiaroscuro" là gì?',
          answer:
            'Chiaroscuro (tiếng Ý có nghĩa là "sáng-tối") là kỹ thuật sử dụng sự tương phản mạnh mẽ giữa ánh sáng và bóng tối để tạo khối cho các vật thể, làm cho chúng có vẻ ba chiều và có chiều sâu hơn. Kỹ thuật này được các nghệ sĩ như Leonardo da Vinci và Caravaggio sử dụng rất thành thạo.',
        },
        {
          question: 'Raphael được biết đến với phong cách nghệ thuật như thế nào?',
          answer:
            'Raphael nổi tiếng với sự hài hòa, cân đối và vẻ đẹp thanh bình trong các tác phẩm của mình. Tranh của ông, đặc biệt là các bức vẽ Đức Mẹ và Chúa Hài đồng, thể hiện sự dịu dàng, duyên dáng và hoàn hảo về mặt bố cục, tiêu biểu là tác phẩm "Trường học Athens".',
        },
        {
          question: 'Tại sao Florence được coi là cái nôi của thời kỳ Phục Hưng?',
          answer:
            'Florence vào thế kỷ 15 là một trung tâm thương mại và tài chính giàu có, tạo điều kiện cho nghệ thuật phát triển. Thành phố này quy tụ nhiều nghệ sĩ thiên tài, các nhà tư tưởng nhân văn và các nhà bảo trợ hào phóng, tạo ra một môi trường cạnh tranh và sáng tạo sôi nổi.',
        },
      ],
      quizzes: [
        {
          question: 'Ai là họa sĩ của tác phẩm "Bữa ăn tối cuối cùng" (The Last Supper)?',
          options: ['Michelangelo', 'Raphael', 'Donatello', 'Leonardo da Vinci'],
          correctAnswerIndex: 3,
          explanation:
            'Leonardo da Vinci đã vẽ bức bích họa nổi tiếng này trên tường của một tu viện ở Milan, Ý. Tác phẩm nổi tiếng với việc khắc họa tâm lý phức tạp của các tông đồ ngay sau khi Chúa Jesus tuyên bố một trong số họ sẽ phản bội Ngài.',
        },
      ],
    },
    {
      id: 'nghe-thuat-an-tuong',
      title: 'Trường Phái Ấn Tượng: Khoảnh Khắc và Ánh Sáng',
      description:
        'Khám phá cuộc cách mạng của các họa sĩ Ấn tượng như Monet, Renoir, Degas, những người đã từ bỏ xưởng vẽ để ra ngoài trời ghi lại những khoảnh khắc thoáng qua của cuộc sống hiện đại.',
      duration: '55 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Nhiếp ảnh', 'Thiết kế', 'Cảm nhận màu sắc'],
      objectives: [
        'Hiểu bối cảnh ra đời của trường phái Ấn tượng và lý do tại sao nó bị coi là "nổi loạn" vào thời điểm đó.',
        'Nhận biết các đặc điểm của tranh Ấn tượng: nét vẽ nhanh, rõ ràng; tập trung vào ánh sáng và màu sắc; chủ đề đời thường.',
        'Phân tích các tác phẩm nổi tiếng như "Ấn tượng, mặt trời mọc" (Monet), "Vũ hội ở quán Moulin de la Galette" (Renoir).',
        'Hiểu được sự ảnh hưởng của nhiếp ảnh đến hội họa Ấn tượng.',
      ],
      faqs: [
        {
          question: 'Tại sao trường phái này lại có tên là "Ấn tượng"?',
          answer:
            'Cái tên này ban đầu mang ý nghĩa chế giễu. Năm 1874, khi Claude Monet trưng bày bức tranh "Ấn tượng, mặt trời mọc" (Impression, soleil levant), một nhà phê bình đã dùng từ "ấn tượng" để mỉa mai rằng bức tranh trông còn dang dở, chỉ là một bản phác thảo. Tuy nhiên, các họa sĩ đã chấp nhận và sử dụng chính cái tên này cho phong trào của mình.',
        },
        {
          question: 'Các họa sĩ Ấn tượng có vẽ trong xưởng vẽ không?',
          answer:
            'Họ là những người tiên phong trong việc vẽ ngoài trời (en plein air). Họ muốn nắm bắt ánh sáng và màu sắc thay đổi liên tục của tự nhiên một cách trực tiếp, thay vì vẽ theo trí nhớ hoặc trong điều kiện ánh sáng nhân tạo của xưởng vẽ.',
        },
        {
          question: 'Đặc điểm chính của tranh Ấn tượng là gì?',
          answer:
            'Các đặc điểm chính bao gồm: nét cọ ngắn, dày và rõ ràng; tập trung vào việc nắm bắt hiệu ứng của ánh sáng và sự thay đổi của nó; màu sắc được đặt cạnh nhau thay vì trộn kỹ để mắt người xem tự "hòa trộn"; và các chủ đề về cuộc sống hiện đại, đời thường.',
        },
        {
          question: 'Sự ra đời của nhiếp ảnh đã ảnh hưởng đến trường phái Ấn tượng như thế nào?',
          answer:
            'Nhiếp ảnh đã giải phóng các họa sĩ khỏi nhiệm vụ phải sao chép hiện thực một cách chính xác. Thay vào đó, họ có thể tập trung vào việc thể hiện cảm xúc, ấn tượng và cách nhìn cá nhân của mình về thế giới. Bố cục cắt cúp và những khoảnh khắc "chộp" được của nhiếp ảnh cũng ảnh hưởng đến cách các họa sĩ Ấn tượng đóng khung cảnh vật.',
        },
        {
          question: 'Ukiyo-e (tranh khắc gỗ Nhật Bản) có vai trò gì đối với các họa sĩ Ấn tượng?',
          answer:
            'Các họa sĩ Ấn tượng như Monet, Degas và Van Gogh rất ngưỡng mộ tranh khắc gỗ Nhật Bản. Họ học hỏi từ đó cách sử dụng các đường viền đậm, các mảng màu phẳng, bố cục bất đối xứng và các góc nhìn độc đáo, khác biệt hoàn toàn với truyền thống nghệ thuật phương Tây.',
        },
        {
          question: 'Tại sao các họa sĩ Ấn tượng lại thích vẽ cùng một chủ đề nhiều lần?',
          answer:
            'Claude Monet nổi tiếng với việc vẽ các loạt tranh về cùng một đối tượng (như đống cỏ khô, nhà thờ Rouen, hoa súng) vào các thời điểm khác nhau trong ngày và các mùa khác nhau trong năm. Mục đích của ông không phải là vẽ chính đối tượng đó, mà là để nghiên cứu sự thay đổi của ánh sáng và màu sắc trên bề mặt của nó.',
        },
        {
          question: 'Ai là những nữ họa sĩ quan trọng của trường phái Ấn tượng?',
          answer:
            'Berthe Morisot và Mary Cassatt là hai trong số những nữ họa sĩ nổi bật nhất. Họ đã đóng góp những tác phẩm quan trọng và tham gia nhiều cuộc triển lãm của nhóm. Các tác phẩm của họ thường tập trung vào cuộc sống riêng tư của phụ nữ và trẻ em.',
        },
        {
          question: 'Trường phái Hậu-Ấn tượng (Post-Impressionism) khác gì với Ấn tượng?',
          answer:
            'Các họa sĩ Hậu-Ấn tượng như Cézanne, Van Gogh, và Gauguin bắt đầu từ trường phái Ấn tượng nhưng sau đó phát triển theo hướng riêng. Họ muốn đưa vào tranh nhiều cảm xúc, cấu trúc và ý nghĩa biểu tượng hơn, thay vì chỉ tập trung vào việc ghi lại ấn tượng thị giác bề ngoài.',
        },
        {
          question: 'Chủ đề phổ biến trong tranh của Edgar Degas là gì?',
          answer:
            'Degas nổi tiếng với các bức tranh về vũ công ba lê, các cuộc đua ngựa và cảnh sinh hoạt của phụ nữ. Ông quan tâm đến việc nắm bắt chuyển động, bố cục độc đáo và những khoảnh khắc đời thường không được sắp đặt.',
        },
        {
          question: 'Màu sắc trong tranh Ấn tượng được sử dụng như thế nào?',
          answer:
            'Các họa sĩ Ấn tượng thường sử dụng màu nguyên chất và đặt các nét cọ màu bổ sung cạnh nhau (ví dụ: màu xanh lam cạnh màu cam). Khi nhìn từ xa, mắt người xem sẽ tự hòa trộn các màu này, tạo ra một hiệu ứng rung động và rực rỡ hơn so với việc trộn màu trên bảng vẽ.',
        },
      ],
      quizzes: [
        {
          question: 'Họa sĩ nào được coi là người dẫn đầu và là biểu tượng của trường phái Ấn tượng?',
          options: ['Vincent van Gogh', 'Paul Cézanne', 'Claude Monet', 'Édouard Manet'],
          correctAnswerIndex: 2,
          explanation:
            'Claude Monet là một trong những người sáng lập và là người kiên định nhất với các nguyên tắc của hội họa Ấn tượng trong suốt sự nghiệp của mình. Loạt tranh "Hoa súng" của ông là một trong những thành tựu đỉnh cao của trường phái này.',
        },
      ],
    },
    {
      id: 'my-thuat-hien-dai-viet-nam',
      title: 'Mỹ Thuật Hiện Đại Việt Nam: Sự Giao Thoa Đông - Tây',
      description:
        'Tìm hiểu về sự hình thành và phát triển của nền mỹ thuật hiện đại Việt Nam đầu thế kỷ 20, đặc biệt là vai trò của trường Cao đẳng Mỹ thuật Đông Dương và sự kết hợp độc đáo giữa kỹ thuật phương Tây và tâm hồn Việt.',
      duration: '60 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Tham quan bảo tàng mỹ thuật', 'Tìm hiểu tranh sơn mài', 'Định giá nghệ thuật'],
      objectives: [
        'Hiểu vai trò của trường Cao đẳng Mỹ thuật Đông Dương trong việc đào tạo thế hệ họa sĩ đầu tiên của Việt Nam.',
        'Nhận biết các chất liệu hội họa độc đáo như sơn mài, lụa.',
        'Phân tích sự kết hợp giữa kỹ thuật tạo hình phương Tây và các chủ đề, màu sắc, tinh thần Á Đông trong tranh.',
        'Làm quen với các danh họa tiêu biểu: Nguyễn Gia Trí, Tô Ngọc Vân, Nguyễn Phan Chánh, Bùi Xuân Phái.',
      ],
      faqs: [
        {
          question: 'Tranh sơn mài Việt Nam có gì độc đáo?',
          answer:
            'Các họa sĩ Việt Nam đã biến kỹ thuật sơn mài thủ công truyền thống (dùng để trang trí đồ vật) thành một chất liệu hội họa đỉnh cao. Họ đã sử dụng các kỹ thuật mài, rắc vỏ trứng, vỏ trai... để tạo ra những hiệu ứng màu sắc và ánh sáng vô cùng phong phú, có chiều sâu mà sơn dầu khó đạt được. Nguyễn Gia Trí được coi là người có công lớn nhất trong việc này.',
        },
        {
          question: 'Tại sao Bùi Xuân Phái lại nổi tiếng với việc vẽ "Phố Phái"?',
          answer:
            'Bùi Xuân Phái có một tình yêu đặc biệt với Hà Nội. Ông đã vẽ hàng trăm bức tranh về các góc phố cổ Hà Nội với những mái nhà rêu phong, những bức tường vàng, những hàng cây... tạo nên một phong cách rất riêng, đầy hoài niệm và lãng mạn. "Phố Phái" đã trở thành một thuật ngữ để chỉ những bức tranh vẽ phố của ông.',
        },
        {
          question: 'Vai trò của họa sĩ Tô Ngọc Vân là gì?',
          answer:
            'Tô Ngọc Vân là một trong những họa sĩ và nhà giáo dục mỹ thuật hàng đầu. Tác phẩm "Thiếu nữ bên hoa huệ" của ông là một kiệt tác, thể hiện sự kết hợp nhuần nhuyễn giữa kỹ thuật sơn dầu phương Tây và vẻ đẹp dịu dàng, tinh thần của người phụ nữ Việt Nam. Ông cũng là hiệu trưởng của trường mỹ thuật trong kháng chiến.',
        },
        {
          question: 'Tranh lụa của Nguyễn Phan Chánh có đặc điểm gì nổi bật?',
          answer:
            'Nguyễn Phan Chánh được coi là người đã khai sinh ra tranh lụa hiện đại Việt Nam. Tranh của ông thường có gam màu nâu trầm, giản dị, khắc họa cuộc sống và con người ở nông thôn với một phong cách tạo hình độc đáo, thấm đẫm tinh thần Á Đông.',
        },
        {
          question: 'Bộ tứ danh họa nổi tiếng nhất của mỹ thuật hiện đại Việt Nam là ai?',
          answer:
            'Đó là "Nhất Trí, nhì Vân, tam Lân, tứ Cẩn", tức là các họa sĩ Nguyễn Gia Trí, Tô Ngọc Vân, Nguyễn Tường Lân và Trần Văn Cẩn. Họ là những cây đại thụ, có những đóng góp to lớn và định hình nên bộ mặt của nền mỹ thuật hiện đại Việt Nam.',
        },
        {
          question: 'Chất liệu sơn dầu được các họa sĩ Việt Nam sử dụng như thế nào?',
          answer:
            'Các họa sĩ Việt Nam đã tiếp thu kỹ thuật sơn dầu từ phương Tây nhưng đã "Việt hóa" nó để thể hiện tâm hồn và quang cảnh của đất nước. Họ không sao chép phong cách châu Âu mà tìm tòi, sáng tạo để tạo ra một ngôn ngữ sơn dầu riêng, phù hợp với con người và không khí nhiệt đới.',
        },
        {
          question: 'Mỹ thuật thời kỳ chiến tranh có những đặc điểm gì?',
          answer:
            'Trong thời kỳ kháng chiến chống Pháp và chống Mỹ, mỹ thuật chủ yếu mang tính cổ động, phục vụ cho cuộc đấu tranh của dân tộc. Các họa sĩ thường vẽ về các chủ đề như quân đội, sản xuất, tinh thần chiến đấu. Chất liệu cũng trở nên đa dạng và linh hoạt hơn, như ký họa bằng bút sắt, màu nước, bột màu.',
        },
        {
          question: 'Tranh của họa sĩ Nguyễn Sáng có phong cách gì?',
          answer:
            'Nguyễn Sáng là một họa sĩ có phong cách tạo hình mạnh mẽ, khúc chiết và đầy nội lực. Ông nổi tiếng với các tác phẩm về đề tài chiến tranh và lịch sử, như bức sơn mài "Kết nạp Đảng ở Điện Biên Phủ", thể hiện được sự hào hùng và bi tráng của thời đại.',
        },
        {
          question: 'Thế nào là "tinh thần phương Đông" trong tranh Việt Nam?',
          answer:
            'Đó là một khái niệm khá trừu tượng, nhưng có thể hiểu là sự ưu tiên cho tính gợi tả hơn là tả thực, sự chú trọng vào không gian và khoảng trống trong tranh (như trong tranh thủy mặc), và việc thể hiện những cảm xúc, tâm tư nội tâm kín đáo, thay vì bộc lộ trực tiếp.',
        },
        {
          question: 'Bảo tàng Mỹ thuật Việt Nam ở đâu và trưng bày những gì?',
          answer:
            'Bảo tàng Mỹ thuật Việt Nam nằm ở số 66 Nguyễn Thái Học, Hà Nội. Đây là nơi lưu giữ và trưng bày một bộ sưu tập đồ sộ các tác phẩm nghệ thuật của Việt Nam từ thời tiền sử cho đến ngày nay, là một địa chỉ không thể bỏ qua cho những ai muốn tìm hiểu về lịch sử mỹ thuật nước nhà.',
        },
      ],
      quizzes: [
        {
          question: 'Họa sĩ nào được mệnh danh là "Vua sơn mài Việt Nam"?',
          options: ['Tô Ngọc Vân', 'Bùi Xuân Phái', 'Nguyễn Gia Trí', 'Nguyễn Sáng'],
          correctAnswerIndex: 2,
          explanation:
            'Nguyễn Gia Trí là người đã đưa nghệ thuật sơn mài từ trang trí thủ công lên tầm hội họa bác học với những tác phẩm hoành tráng, lộng lẫy, đánh dấu một cột mốc quan trọng cho mỹ thuật hiện đại Việt Nam.',
        },
      ],
    },
  ],
  features: [
    'Khám phá các trường phái nghệ thuật lớn',
    'Phân tích các tác phẩm kinh điển',
    'Tìm hiểu về mỹ thuật Việt Nam',
    'Thư viện hình ảnh chất lượng cao',
  ],
  prerequisites: ['Không yêu cầu kiến thức nền tảng, chỉ cần sự tò mò và yêu thích cái đẹp'],
  objectives: [
    'Phát triển khả năng cảm thụ và phân tích nghệ thuật.',
    'Nắm được dòng chảy của lịch sử nghệ thuật thế giới và Việt Nam.',
    'Làm giàu thêm đời sống tinh thần và vốn văn hóa.',
    'Khuyến khích tư duy sáng tạo và góc nhìn đa chiều.',
  ],
  careerOutcomes: [
    'Nền tảng cho các ngành thiết kế, kiến trúc, giám tuyển nghệ thuật (curator), lịch sử nghệ thuật, marketing.',
    'Nâng cao thẩm mỹ và tư duy sáng tạo, hữu ích cho mọi ngành nghề.',
  ],
  tags: ['nghệ thuật', 'lịch sử nghệ thuật', 'hội họa', 'phục hưng', 'ấn tượng', 'mỹ thuật Việt Nam'],
};
