import { ModuleData } from '@/types';

export const cyberSafetyDigitalEthicsModuleData: ModuleData = {
  id: 'cyber-safety-digital-ethics',
  title: 'An Toàn Mạng và Đạo Đức Số',
  subtitle: 'Trở thành một công dân số thông minh, có trách nhiệm và an toàn trong thế giới trực tuyến.',
  description:
    'Module này trang bị cho học sinh những kiến thức và kỹ năng thiết yếu để bảo vệ bản thân khỏi các mối đe dọa trên không gian mạng, xây dựng một danh tính số tích cực và hành xử một cách có văn hóa, có đạo đức.',
  image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&h=600&fit=crop',
  color: 'from-gray-500 to-slate-600',
  category: 'Công nghệ & Xã hội',
  level: 'Trung học',
  duration: '8 tuần',
  lessons: [
    {
      id: 'bao-ve-danh-tinh-so',
      title: 'Bảo Vệ Danh Tính Số và Dữ Liệu Cá Nhân',
      description:
        'Tìm hiểu về các loại thông tin cá nhân, tầm quan trọng của việc bảo vệ chúng và các kỹ thuật để tạo mật khẩu mạnh, nhận diện lừa đảo (phishing).',
      duration: '55 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: [
        'Tạo mật khẩu an toàn',
        'Cài đặt quyền riêng tư trên mạng xã hội',
        'Nhận diện email lừa đảo',
      ],
      objectives: [
        'Phân biệt được thông tin cá nhân nhạy cảm (số CCCD, mật khẩu) và thông tin ít nhạy cảm hơn.',
        'Hiểu khái niệm "dấu chân số" (digital footprint) và cách quản lý nó.',
        'Biết cách tạo và quản lý mật khẩu mạnh, kích hoạt xác thực hai yếu tố (2FA).',
        'Nhận diện được các dấu hiệu của một email hoặc tin nhắn lừa đảo (phishing).',
      ],
      faqs: [
        {
          question: 'Xác thực hai yếu tố (2FA) là gì và tại sao nên dùng?',
          answer:
            '2FA là một lớp bảo mật bổ sung cho tài khoản của bạn. Ngoài mật khẩu (yếu tố thứ nhất), bạn cần cung cấp thêm một mã xác thực, thường được gửi đến điện thoại của bạn (yếu tố thứ hai). Điều này khiến kẻ xấu gần như không thể truy cập tài khoản của bạn ngay cả khi họ biết mật khẩu.',
        },
        {
          question: 'Làm thế nào để nhận biết một email lừa đảo (phishing)?',
          answer:
            'Hãy cảnh giác với các dấu hiệu như: địa chỉ email người gửi lạ hoặc sai chính tả một cách tinh vi, lời lẽ khẩn cấp, hối thúc, đe dọa; yêu cầu cung cấp thông tin cá nhân; các liên kết đáng ngờ; và lỗi ngữ pháp, chính tả trong email.',
        },
        {
          question: 'Dấu chân số (digital footprint) là gì?',
          answer:
            'Dấu chân số là tất cả những dấu vết bạn để lại khi hoạt động trên mạng, từ những bài đăng, bình luận, lượt thích trên mạng xã hội đến lịch sử tìm kiếm và các trang web bạn đã truy cập. Nó có thể là chủ động (những gì bạn cố ý chia sẻ) hoặc bị động (dữ liệu được thu thập mà bạn không hay biết).',
        },
        {
          question: 'Tôi có nên sử dụng cùng một mật khẩu cho nhiều tài khoản không?',
          answer:
            'Tuyệt đối không. Nếu một dịch vụ bị rò rỉ dữ liệu, kẻ xấu sẽ dùng chính email và mật khẩu đó để thử đăng nhập vào các tài khoản khác của bạn (như email, ngân hàng, mạng xã hội). Hãy sử dụng một mật khẩu riêng cho mỗi tài khoản quan trọng.',
        },
        {
          question: 'Trình quản lý mật khẩu (password manager) là gì?',
          answer:
            'Đó là một công cụ giúp bạn tạo ra các mật khẩu rất mạnh và phức tạp cho mỗi tài khoản, và lưu trữ chúng một cách an toàn. Bạn chỉ cần nhớ một mật khẩu chủ để mở khóa trình quản lý. Đây là một trong những cách tốt nhất để bảo mật tài khoản.',
        },
        {
          question: 'Làm thế nào để xóa dấu chân số của tôi?',
          answer:
            'Rất khó để xóa hoàn toàn. Tuy nhiên, bạn có thể giảm thiểu nó bằng cách: rà soát và xóa các tài khoản cũ không dùng đến, cài đặt quyền riêng tư ở mức cao nhất trên mạng xã hội, và cẩn thận với những thông tin bạn chia sẻ trực tuyến.',
        },
        {
          question: 'VPN (Mạng riêng ảo) có giúp tôi an toàn hơn không?',
          answer:
            'Có. VPN mã hóa kết nối internet của bạn, giúp bảo vệ dữ liệu của bạn khỏi bị theo dõi, đặc biệt khi bạn sử dụng mạng Wi-Fi công cộng (ở quán cà phê, sân bay). Nó cũng che giấu địa chỉ IP thật của bạn, tăng cường sự riêng tư.',
        },
        {
          question: 'Tại sao các ứng dụng miễn phí lại yêu cầu nhiều quyền truy cập vậy?',
          answer:
            'Thường là vì họ thu thập dữ liệu của bạn để bán cho các nhà quảng cáo hoặc các bên thứ ba. Đây là cách họ kiếm tiền. Hãy luôn đọc kỹ các quyền mà ứng dụng yêu cầu và tự hỏi: "Một ứng dụng đèn pin có thực sự cần truy cập vào danh bạ của tôi không?".',
        },
        {
          question: 'Smishing và Vishing là gì?',
          answer:
            'Chúng là các biến thể của Phishing. Smishing (SMS + Phishing) là lừa đảo qua tin nhắn SMS. Vishing (Voice + Phishing) là lừa đảo qua các cuộc gọi điện thoại. Cả hai đều có chung mục đích là lừa bạn tiết lộ thông tin cá nhân hoặc tài chính.',
        },
        {
          question: 'Tôi nên làm gì nếu nghi ngờ tài khoản của mình đã bị xâm nhập?',
          answer:
            'Hãy hành động ngay lập tức: 1. Đổi mật khẩu của tài khoản đó. 2. Nếu bạn dùng mật khẩu đó ở nơi khác, hãy đổi cả những nơi đó. 3. Kích hoạt xác thực hai yếu tố (2FA). 4. Kiểm tra các hoạt động gần đây của tài khoản để tìm dấu hiệu bất thường. 5. Thông báo cho bạn bè và người thân để họ cảnh giác.',
        },
      ],
      quizzes: [
        {
          question: 'Mật khẩu nào sau đây được xem là mạnh nhất?',
          options: ['12345678', 'password', 'NguyenVanA1995', 'P@ssw0rd_!2025#'],
          correctAnswerIndex: 3,
          explanation:
            'Một mật khẩu mạnh nên có độ dài ít nhất 12 ký tự, bao gồm cả chữ hoa, chữ thường, số và ký tự đặc biệt. Nó không nên chứa thông tin cá nhân dễ đoán.',
        },
      ],
    },
    {
      id: 'bat-nat-truc-tuyen',
      title: 'Đối Phó Với Bắt Nạt Trực Tuyến (Cyberbullying)',
      description:
        'Nhận diện các hình thức của bắt nạt trực tuyến, hậu quả của nó và các bước cần thực hiện khi bạn hoặc ai đó bạn biết trở thành nạn nhân.',
      duration: '50 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Báo cáo (report) hành vi xấu', 'Chặn (block) người dùng', 'Tìm kiếm sự giúp đỡ'],
      objectives: [
        'Hiểu các hình thức của bắt nạt trực tuyến: tung tin đồn, loại trừ, đe dọa, giả mạo...',
        'Nhận thức được tác hại nghiêm trọng của bắt nạt trực tuyến đối với sức khỏe tinh thần.',
        'Biết các bước cần làm: không trả đũa, lưu lại bằng chứng, báo cáo cho người lớn và nhà cung cấp dịch vụ.',
        'Học cách trở thành một "người ngoài cuộc tích cực" (upstander) thay vì "người ngoài cuộc thụ động" (bystander).',
      ],
      faqs: [
        {
          question: 'Khi bị bắt nạt trên mạng, tại sao không nên trả đũa?',
          answer:
            'Việc trả đũa thường chỉ làm tình hình leo thang và biến bạn từ nạn nhân thành một phần của cuộc xung đột. Điều này cũng có thể gây khó khăn hơn khi bạn tìm kiếm sự giúp đỡ từ người lớn, vì họ có thể nhìn nhận đó là "cuộc cãi vã của cả hai bên".',
        },
        {
          question: 'Upstander (người ngoài cuộc tích cực) là gì?',
          answer:
            'Đó là người chứng kiến hành vi bắt nạt nhưng không làm ngơ. Họ có thể hành động bằng nhiều cách: trực tiếp lên tiếng phản đối (nếu an toàn), báo cáo hành vi đó, hoặc đơn giản là nhắn tin riêng để an ủi, ủng hộ nạn nhân. Hành động của upstander có thể tạo ra sự khác biệt rất lớn.',
        },
        {
          question: 'Sự khác biệt giữa trêu đùa và bắt nạt là gì?',
          answer:
            'Trêu đùa thường vui vẻ, hai chiều và cả hai bên đều cảm thấy thoải mái. Bắt nạt là hành vi có chủ đích, lặp đi lặp lại, và có sự mất cân bằng quyền lực, khiến một bên cảm thấy bị tổn thương, sợ hãi hoặc bị cô lập.',
        },
        {
          question: 'Làm thế nào để lưu lại bằng chứng khi bị bắt nạt trên mạng?',
          answer:
            'Hãy chụp ảnh màn hình (screenshot) các tin nhắn, bình luận hoặc bài đăng có nội dung bắt nạt. Ghi lại ngày tháng, thời gian và nền tảng xảy ra sự việc. Những bằng chứng này rất quan trọng khi bạn báo cáo cho người lớn hoặc nhà cung cấp dịch vụ.',
        },
        {
          question: 'Chặn (block) một người có thực sự hiệu quả không?',
          answer:
            'Có, chặn là một công cụ rất hiệu quả. Nó ngăn kẻ bắt nạt xem trang cá nhân của bạn hoặc liên lạc trực tiếp với bạn. Đây là một bước quan trọng để tạo ra không gian an toàn cho bản thân, dù nó không ngăn được họ nói xấu bạn ở nơi khác.',
        },
        {
          question: 'Cha mẹ và giáo viên nên làm gì để giúp đỡ?',
          answer:
            'Điều quan trọng nhất là lắng nghe một cách không phán xét và tin tưởng nạn nhân. Hãy trấn an rằng đó không phải là lỗi của họ. Cùng họ thu thập bằng chứng và đưa ra các bước hành động tiếp theo, tôn trọng mong muốn của họ.',
        },
        {
          question: 'Bắt nạt trực tuyến có thể gây ra những hậu quả lâu dài nào?',
          answer:
            'Nó có thể gây ra những tổn thương sâu sắc về mặt tinh thần, dẫn đến lo âu, trầm cảm, mất tự tin, và thậm chí là các vấn đề về sức khỏe thể chất. Trong nhiều trường hợp, hậu quả của nó còn nặng nề hơn bắt nạt ngoài đời thực vì nó có thể xảy ra 24/7.',
        },
        {
          question: 'Tại sao một số người lại đi bắt nạt người khác trên mạng?',
          answer:
            'Có nhiều lý do phức tạp: họ có thể đang tìm kiếm sự chú ý, cảm thấy bất an về bản thân, từng là nạn nhân của bắt nạt, hoặc đơn giản là không nhận thức được tác hại từ hành động của mình do sự ẩn danh của không gian mạng.',
        },
        {
          question: 'Làm thế nào để xây dựng sự tự tin trở lại sau khi bị bắt nạt?',
          answer:
            'Hãy tập trung vào những điểm mạnh và sở thích của bạn ngoài đời thực. Dành thời gian với những người bạn và gia đình thực sự yêu thương và ủng hộ bạn. Đừng ngại tìm đến sự giúp đỡ của chuyên gia tâm lý. Nhớ rằng, giá trị của bạn không được quyết định bởi lời nói của những kẻ ẩn danh trên mạng.',
        },
        {
          question: 'Luật pháp Việt Nam có quy định về hành vi bắt nạt trên mạng không?',
          answer:
            'Có. Luật An ninh mạng và các quy định liên quan có các điều khoản về việc xử lý hành vi xúc phạm danh dự, nhân phẩm của người khác trên không gian mạng. Nạn nhân có quyền yêu cầu cơ quan chức năng can thiệp và bảo vệ.',
        },
      ],
      quizzes: [
        {
          question:
            'Nếu bạn thấy một người bạn bị chế giễu trong một nhóm chat, hành động nào sau đây là của một "upstander"?',
          options: [
            'Hùa theo để trêu bạn đó',
            'Im lặng và không làm gì cả',
            'Rời khỏi nhóm chat ngay lập tức',
            'Nhắn tin riêng hỏi thăm và an ủi bạn đó, đồng thời báo cáo hành vi cho trưởng nhóm hoặc giáo viên',
          ],
          correctAnswerIndex: 3,
          explanation:
            'Một upstander sẽ không im lặng trước cái xấu. Việc ủng hộ nạn nhân và báo cáo hành vi bắt nạt là những hành động đúng đắn và dũng cảm.',
        },
      ],
    },
    {
      id: 'van-hoa-ung-xu-so',
      title: 'Văn Hóa Ứng Xử và Đạo Đức Số',
      description:
        'Thảo luận về các quy tắc ứng xử trên mạng (netiquette), tôn trọng bản quyền, và trách nhiệm của công dân số trong việc tạo ra một môi trường trực tuyến lành mạnh.',
      duration: '50 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Bình luận văn minh', 'Chia sẻ thông tin có trách nhiệm', 'Tôn trọng sở hữu trí tuệ'],
      objectives: [
        'Hiểu các quy tắc cơ bản của netiquette (ví dụ: không viết hoa toàn bộ, không spam).',
        'Nhận biết tầm quan trọng của việc kiểm chứng thông tin trước khi chia sẻ (fact-checking).',
        'Hiểu những điều cơ bản về bản quyền và sở hữu trí tuệ trên mạng.',
        'Thảo luận về vai trò của mỗi cá nhân trong việc chống lại tin giả và ngôn từ thù hận.',
      ],
      faqs: [
        {
          question: 'Tại sao không nên viết hoa toàn bộ (CAPS LOCK) khi bình luận hoặc chat?',
          answer:
            'Trong văn hóa mạng, VIẾT HOA TOÀN BỘ được coi là tương đương với việc LA HÉT. Nó thể hiện sự tức giận, hung hăng và có thể khiến người đọc cảm thấy khó chịu.',
        },
        {
          question: 'Làm thế nào để kiểm tra một tin tức có phải là tin giả hay không?',
          answer:
            'Hãy xem xét nguồn tin (có đáng tin cậy không?), tìm kiếm thông tin đó trên các trang báo chí chính thống khác để đối chiếu, chú ý đến ngày tháng của bài viết, và cảnh giác với những tiêu đề giật gân, gây sốc.',
        },
        {
          question: 'Hiệu ứng "buồng vang" (echo chamber) là gì?',
          answer:
            'Đó là tình trạng bạn chỉ nghe và thấy những ý kiến, quan điểm giống với của mình trên mạng xã hội. Các thuật toán có xu hướng hiển thị những nội dung bạn thích, dần dần tạo ra một "bong bóng" khiến bạn nghĩ rằng ai cũng nghĩ giống mình và khó chấp nhận các quan điểm trái chiều.',
        },
        {
          question: 'Tại sao việc "troll" hoặc bình luận ác ý lại phổ biến trên mạng?',
          answer:
            'Sự ẩn danh của Internet cho phép một số người hành xử theo cách mà họ sẽ không bao giờ dám làm ngoài đời thực. Họ không phải đối mặt trực tiếp với hậu quả hoặc sự đau khổ mà lời nói của họ gây ra cho người khác.',
        },
        {
          question: 'Quyền được lãng quên (Right to be Forgotten) là gì?',
          answer:
            'Đây là một nguyên tắc pháp lý (nổi tiếng ở châu Âu) cho phép các cá nhân yêu cầu các công cụ tìm kiếm như Google xóa các liên kết đến thông tin cá nhân cũ, không còn phù hợp hoặc gây hại cho họ. Nó thể hiện quyền kiểm soát của cá nhân đối với danh tính số của mình.',
        },
        {
          question: 'Sharenting là gì và có rủi ro gì?',
          answer:
            '"Sharenting" (Share + Parenting) là hành vi cha mẹ chia sẻ quá nhiều thông tin, hình ảnh của con cái lên mạng xã hội. Rủi ro bao gồm việc xâm phạm quyền riêng tư của trẻ, tạo ra một "dấu chân số" mà trẻ không mong muốn, và tiềm ẩn nguy cơ bị kẻ xấu lợi dụng hình ảnh.',
        },
        {
          question: 'Làm thế nào để tranh luận một cách văn minh trên mạng?',
          answer:
            'Hãy tập trung vào việc phản biện ý kiến, chứ không tấn công cá nhân người nói. Sử dụng lý lẽ và bằng chứng thay vì cảm tính. Tôn trọng quyền có quan điểm khác biệt và sẵn sàng đồng ý rằng hai bên không đồng ý (agree to disagree).',
        },
        {
          question: 'Tại sao việc ghi nguồn khi chia sẻ lại quan trọng?',
          answer:
            'Việc ghi nguồn thể hiện sự tôn trọng đối với công sức của người tạo ra nội dung gốc (tác giả, nghệ sĩ, nhiếp ảnh gia). Nó cũng giúp người đọc có thể tìm đến nguồn thông tin gốc để tìm hiểu sâu hơn và tự mình kiểm chứng.',
        },
        {
          question: 'Ngôn từ thù hận (hate speech) là gì?',
          answer:
            'Đó là những phát ngôn tấn công hoặc miệt thị một cá nhân hoặc một nhóm người dựa trên các đặc điểm như chủng tộc, tôn giáo, giới tính, xu hướng tính dục... Đây là một hình thức giao tiếp độc hại và bị cấm trên hầu hết các nền tảng lớn.',
        },
        {
          question: 'Trách nhiệm của một công dân số là gì?',
          answer:
            'Đó là việc hiểu rằng hành động của bạn trên mạng có tác động đến thế giới thực. Một công dân số có trách nhiệm sẽ tự bảo vệ mình, tôn trọng người khác, tôn trọng sở hữu trí tuệ, và góp phần xây dựng một môi trường trực tuyến an toàn, văn minh và đáng tin cậy hơn.',
        },
      ],
      quizzes: [
        {
          question: 'Hành động nào sau đây thể hiện sự tôn trọng bản quyền trên mạng?',
          options: [
            'Tải một bộ phim mới ra rạp từ một trang web lậu',
            'Sử dụng một bức ảnh của nhiếp ảnh gia mà không xin phép và ghi nguồn',
            'Mua phần mềm hoặc trả phí cho các dịch vụ streaming',
            'Sao chép toàn bộ một bài báo và đăng lên blog của mình',
          ],
          correctAnswerIndex: 2,
          explanation:
            'Tôn trọng bản quyền là việc trả tiền cho công sức sáng tạo của người khác. Việc sử dụng các sản phẩm lậu là hành vi vi phạm pháp luật và đạo đức.',
        },
      ],
    },
  ],
  features: [
    'Hướng dẫn bảo mật tài khoản cá nhân',
    'Chiến lược đối phó với bắt nạt trực tuyến',
    'Quy tắc ứng xử trên không gian mạng (Netiquette)',
    'Tình huống thực tế và thảo luận về đạo đức số',
  ],
  prerequisites: ['Sử dụng Internet và mạng xã hội cơ bản'],
  objectives: [
    'Trang bị kỹ năng để tự bảo vệ mình trong môi trường số.',
    'Phát triển khả năng ứng phó với các tình huống tiêu cực trên mạng.',
    'Xây dựng ý thức và trách nhiệm của một công dân số văn minh.',
    'Thúc đẩy một môi trường trực tuyến an toàn và tích cực hơn.',
  ],
  careerOutcomes: [
    'Kỹ năng số cần thiết cho mọi công dân trong thế kỷ 21.',
    'Nền tảng cho những ai quan tâm đến các ngành an ninh mạng, luật, truyền thông, khoa học xã hội.',
  ],
  tags: ['an toàn mạng', 'công dân số', 'đạo đức', 'bắt nạt trực tuyến', 'bảo mật'],
};
