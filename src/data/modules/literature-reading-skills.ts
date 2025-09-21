import { ModuleData } from '@/types';

export const literatureReadingSkillsModuleData: ModuleData = {
  id: 'literature-reading-skills',
  title: 'Văn Học và Kỹ Năng Đọc Hiểu',
  subtitle: 'Phân tích sâu tác phẩm văn học và phát triển tư duy phản biện thông qua việc đọc.',
  description:
    'Module này giúp học sinh tiếp cận các tác phẩm văn học kinh điển và hiện đại một cách sâu sắc, không chỉ để cảm thụ cái hay, cái đẹp mà còn để rèn luyện kỹ năng phân tích, bình luận, và liên hệ với cuộc sống.',
  image: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=1200&h=600&fit=crop',
  color: 'from-orange-500 to-amber-500',
  category: 'Ngôn ngữ & Nhân văn',
  level: 'Trung học',
  duration: '12 tuần',
  lessons: [
    {
      id: 'phan-tich-tho-hien-dai',
      title: 'Phân Tích Thơ Việt Nam Hiện Đại',
      description:
        'Hướng dẫn cách tiếp cận và phân tích các bài thơ trong chương trình THPT, tập trung vào hình ảnh, ngôn từ, giọng điệu và thông điệp của tác giả.',
      duration: '60 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Cảm thụ nghệ thuật', 'Kỹ năng viết', 'Tư duy biểu tượng'],
      objectives: [
        'Nắm vững các yếu tố của một bài thơ: hình ảnh, tứ thơ, nhịp điệu, ngôn từ, biện pháp tu từ.',
        'Học cách phân tích một bài thơ theo đặc trưng thể loại.',
        'Cảm nhận và lý giải được những thông điệp sâu sắc mà tác giả gửi gắm.',
        'Phân tích các tác phẩm tiêu biểu như "Tây Tiến" (Quang Dũng), "Sóng" (Xuân Quỳnh).',
      ],
      faqs: [
        {
          question: 'Làm thế nào để tìm ra "thông điệp" của một bài thơ?',
          answer:
            'Thông điệp thường không được nói ra trực tiếp. Hãy chú ý đến các hình ảnh, biểu tượng được lặp đi lặp lại, sự thay đổi trong cảm xúc và giọng điệu của nhân vật trữ tình. Hãy tự hỏi: Tác giả muốn nói lên điều gì về tình yêu, cuộc sống, hay đất nước qua những hình ảnh đó?',
        },
        {
          question: '"Tứ thơ" là gì?',
          answer:
            'Tứ thơ là ý chính, là linh hồn của bài thơ, là cái "cớ" để tác giả bộc lộ cảm xúc và suy tưởng. Ví dụ, trong bài "Sóng" của Xuân Quỳnh, hình tượng "sóng" chính là tứ thơ, được dùng để diễn tả những cung bậc phức tạp của tình yêu.',
        },
        {
          question: 'Nhân vật trữ tình trong thơ là ai?',
          answer: 'Nhân vật trữ tình là người trực tiếp bộc lộ cảm xúc, suy nghĩ trong bài thơ, là "cái tôi" của tác giả hóa thân vào. Đôi khi nhân vật trữ tình xưng "tôi", "anh", "em", nhưng cũng có thể ẩn mình, không xuất hiện trực tiếp.'
        },
        {
          question: 'Phân biệt giọng điệu và nhịp điệu của bài thơ như thế nào?',
          answer: 'Nhịp điệu liên quan đến cách ngắt nhịp, sự phối hợp thanh bằng - trắc, tạo nên nhạc tính cho thơ. Giọng điệu là thái độ, tình cảm của người nói (nhân vật trữ tình) thể hiện qua thơ, ví dụ: giọng trang trọng, giọng tha thiết, giọng mỉa mai, giọng buồn thương...'
        },
        {
          question: 'Biện pháp tu từ "ẩn dụ" và "hoán dụ" khác nhau ở điểm nào?',
          answer: 'Ẩn dụ dựa trên sự tương đồng (giống nhau) giữa hai sự vật, ví dụ: "Ngày ngày mặt trời đi qua trên lăng / Thấy một mặt trời trong lăng rất đỏ" (Viễn Phương) - "mặt trời trong lăng" ẩn dụ cho Bác Hồ. Hoán dụ dựa trên sự tương cận (gần gũi, có liên quan) giữa hai sự vật, ví dụ: "Áo nâu liền với áo xanh" - "áo nâu", "áo xanh" hoán dụ cho nông dân và công nhân.'
        },
        {
          question: 'Không gian và thời gian nghệ thuật trong thơ là gì?',
          answer: 'Là không gian và thời gian được nhà thơ tái tạo, lựa chọn, và tổ chức lại theo ý đồ nghệ thuật, không đơn thuần là không gian, thời gian thực. Ví dụ, không gian trong "Tây Tiến" vừa hùng vĩ, hoang sơ, vừa thơ mộng, lãng mạn.'
        },
        {
          question: 'Làm sao để phân tích hiệu quả của một biện pháp tu từ?',
          answer: 'Đừng chỉ gọi tên biện pháp đó. Hãy trả lời ba câu hỏi: 1. Biện pháp đó được thể hiện qua từ ngữ, hình ảnh nào? 2. Nó có tác dụng gợi hình, gợi cảm như thế nào (làm cho hình ảnh/câu thơ sinh động, đẹp, ấn tượng ra sao)? 3. Nó góp phần thể hiện nội dung, tư tưởng, tình cảm gì của tác giả?'
        },
        {
          question: 'Thơ tự do khác gì thơ cách luật (thơ Đường)?',
          answer: 'Thơ cách luật bị ràng buộc chặt chẽ bởi niêm, luật, vần, đối và số câu, số chữ. Thơ tự do không bị giới hạn về số câu, số chữ, cách gieo vần, ngắt nhịp... cho phép tác giả thể hiện cảm xúc một cách linh hoạt, phóng khoáng hơn.'
        },
        {
          question: 'Khi phân tích bài "Tây Tiến", cần chú ý những điểm đặc sắc nào?',
          answer: 'Cần chú ý đến cảm hứng lãng mạn và bi tráng. Lãng mạn thể hiện ở vẻ đẹp thiên nhiên hùng vĩ, thơ mộng và hình ảnh người lính hào hoa. Bi tráng thể hiện ở sự hy sinh, gian khổ nhưng không hề bi lụy, yếu đuối mà vẫn kiêu dũng, oai hùng.'
        },
        {
          question: 'Trong bài "Sóng", hình tượng "sóng" và "em" có mối quan hệ như thế nào?',
          answer: 'Hai hình tượng này song hành, lúc tách ra, lúc hòa vào một. "Sóng" là một hình ảnh ẩn dụ để "em" soi vào, tự nhận thức và bộc lộ những khát khao, trăn trở trong tình yêu. Qua "sóng", những trạng thái của tình yêu được cụ thể hóa và trở nên mãnh liệt hơn.'
        }
      ],
      quizzes: [
        {
          question: 'Hình ảnh "con thuyền" và "bến" trong thơ ca truyền thống thường là biểu tượng cho điều gì?',
          options: [
            'Người nông dân và cánh đồng',
            'Người chinh phụ và kẻ chinh phu',
            'Người con gái và người con trai trong tình yêu',
            'Người đi xa và người ở lại chờ đợi',
          ],
          correctAnswerIndex: 3,
          explanation:
            'Hình ảnh "thuyền" thường tượng trưng cho người con trai, người đi xa vì sự nghiệp, còn "bến" tượng trưng cho người con gái, người ở lại, là bến đỗ bình yên, thủy chung chờ đợi.',
        },
      ],
    },
    {
      id: 'doc-hieu-van-ban-nghi-luan',
      title: 'Kỹ Năng Đọc Hiểu Văn Bản Nghị Luận',
      description:
        'Rèn luyện kỹ năng đọc-hiểu các văn bản nghị luận xã hội và nghị luận văn học, tập trung vào việc xác định luận điểm, luận cứ và các thao tác lập luận.',
      duration: '55 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Đọc báo chí', 'Phân tích diễn văn', 'Viết bài luận'],
      objectives: [
        'Phân biệt được luận điểm, luận cứ và lập luận trong một văn bản.',
        'Nhận diện các thao tác lập luận chính: giải thích, phân tích, chứng minh, bình luận, so sánh.',
        'Phát hiện và phân tích các lỗi ngụy biện trong lập luận.',
        'Tóm tắt và đánh giá được quan điểm của tác giả.',
      ],
      faqs: [
        {
          question: 'Luận điểm và luận cứ khác nhau như thế nào?',
          answer:
            'Luận điểm là ý kiến, quan điểm chính mà người viết muốn trình bày. Luận cứ là những lý lẽ, dẫn chứng (số liệu, sự kiện, trích dẫn) được đưa ra để làm sáng tỏ và thuyết phục cho luận điểm đó. Luận điểm trả lời câu hỏi "Cái gì?", còn luận cứ trả lời câu hỏi "Tại sao?" và "Như thế nào?".',
        },
        {
          question: 'Ngụy biện "tấn công cá nhân" (ad hominem) là gì?',
          answer:
            'Đó là một lỗi lập luận, thay vì bác bỏ luận điểm của đối phương, người nói lại quay sang công kích, chỉ trích cá nhân, ngoại hình, hoặc hoàn cảnh của họ. Ví dụ: "Ý kiến của anh về kinh tế sai bét, vì anh có giàu đâu!".',
        },
        {
          question: 'Thao tác lập luận "bác bỏ" là gì?',
          answer: 'Là dùng lý lẽ và dẫn chứng để chỉ ra sự sai lầm, phi lý của một ý kiến, quan điểm nào đó. Để bác bỏ hiệu quả, cần chỉ ra được điểm yếu trong luận điểm, sự thiếu xác thực của luận cứ hoặc sự phi logic trong lập luận của đối phương.'
        },
        {
          question: 'Làm thế nào để xác định luận điểm chính của một văn bản dài?',
          answer: 'Luận điểm chính thường được nêu ở đầu văn bản (đoạn mở bài), cuối văn bản (đoạn kết luận), hoặc được lặp lại nhiều lần dưới các hình thức khác nhau. Hãy chú ý đến các câu chủ đề của mỗi đoạn và tiêu đề của văn bản.'
        },
        {
          question: 'Ngụy biện "người rơm" (straw man) là gì?',
          answer: 'Là lỗi ngụy biện bằng cách bóp méo, xuyên tạc hoặc đơn giản hóa luận điểm của đối phương cho nó trở nên yếu ớt, dễ bị tấn công hơn, sau đó bác bỏ luận điểm đã bị bóp méo đó. Ví dụ: Người A nói "Nên đầu tư thêm cho giáo dục". Người B ngụy biện: "Vậy là anh muốn cắt hết ngân sách quốc phòng à? Thật vô lý!".'
        },
        {
          question: 'Sự khác biệt giữa thao tác "phân tích" và "chứng minh"?',
          answer: 'Phân tích là chia nhỏ đối tượng thành các yếu tố, bộ phận để đi sâu tìm hiểu (ví dụ: phân tích nhân vật trên các phương diện ngoại hình, nội tâm...). Chứng minh là dùng những dẫn chứng xác thực, đã được thừa nhận để khẳng định một luận điểm là đúng đắn.'
        },
        {
          question: 'Làm sao để đánh giá một dẫn chứng là đáng tin cậy?',
          answer: 'Một dẫn chứng đáng tin cậy cần phải cụ thể, xác thực, có nguồn gốc rõ ràng và tiêu biểu. Dẫn chứng từ các nghiên cứu khoa học, số liệu thống kê của các tổ chức uy tín, hoặc các sự kiện lịch sử được ghi nhận rộng rãi thường có độ tin cậy cao.'
        },
        {
          question: 'Thao tác lập luận "bình luận" có gì khác với "phân tích"?',
          answer: 'Phân tích tập trung vào việc làm rõ các khía cạnh của đối tượng một cách khách quan. Bình luận là bước cao hơn, sau khi phân tích, người viết đưa ra những nhận xét, đánh giá, bàn bạc, mở rộng vấn đề theo quan điểm cá nhân của mình.'
        },
        {
          question: 'Tại sao cần phải nhận diện các lỗi ngụy biện?',
          answer: 'Nhận diện lỗi ngụy biện giúp chúng ta không bị đánh lừa bởi những lập luận có vẻ hợp lý nhưng thực chất lại sai lầm. Nó giúp ta đánh giá thông tin một cách kritis, xây dựng lập luận của bản thân chặt chẽ hơn và giao tiếp hiệu quả hơn.'
        },
        {
          question: 'Làm thế nào để tóm tắt một văn bản nghị luận một cách hiệu quả?',
          answer: 'Đầu tiên, hãy xác định luận điểm chính và các luận điểm phụ. Sau đó, xác định các luận cứ chính cho mỗi luận điểm. Cuối cùng, viết lại các ý chính đó bằng lời văn của bạn một cách ngắn gọn, mạch lạc, đảm bảo giữ được mối quan hệ logic giữa các ý.'
        }
      ],
      quizzes: [
        {
          question:
            'Khi một bài viết đưa ra các số liệu, thống kê, trích dẫn từ chuyên gia, tác giả đang sử dụng loại luận cứ nào?',
          options: ['Luận cứ tình cảm', 'Luận cứ logic', 'Luận cứ thực tế (dẫn chứng)', 'Luận cứ giả định'],
          correctAnswerIndex: 2,
          explanation:
            'Đây là các dẫn chứng thực tế, khách quan được sử dụng để tăng tính thuyết phục cho luận điểm, làm cho bài viết trở nên đáng tin cậy hơn.',
        },
      ],
    },
    {
      id: 'phan-tich-nhan-vat-truyen-ngan',
      title: 'Phân Tích Nhân Vật Trong Truyện Ngắn Hiện Đại',
      description:
        'Học cách phân tích sâu một nhân vật văn học thông qua hành động, lời nói, nội tâm và mối quan hệ với các nhân vật khác.',
      duration: '60 phút',
      difficulty: 'Nâng cao',
      realWorldApplications: ['Thấu hiểu con người', 'Phân tích tâm lý', 'Kể chuyện'],
      objectives: [
        'Phân tích nhân vật trên các phương diện: lai lịch, ngoại hình, nội tâm, hành động, ngôn ngữ.',
        'Hiểu được nghệ thuật xây dựng nhân vật của nhà văn (xây dựng trực tiếp, gián tiếp).',
        'Phân tích mối quan hệ giữa nhân vật và hoàn cảnh xã hội.',
        'Phân tích các nhân vật phức tạp như Chí Phèo, Thị Nở (Nam Cao), người vợ nhặt (Kim Lân).',
      ],
      faqs: [
        {
          question: 'Làm thế nào để phân tích nội tâm nhân vật?',
          answer:
            'Hãy chú ý đến những đoạn văn miêu tả suy nghĩ, cảm xúc, dằn vặt, hoặc những giấc mơ của nhân vật. Đôi khi, nội tâm được thể hiện qua độc thoại (nhân vật tự nói với mình) hoặc độc thoại nội tâm (dòng suy nghĩ không cất thành lời). Cảnh vật bên ngoài cũng có thể là tấm gương phản chiếu tâm trạng nhân vật.',
        },
        {
          question: 'Chi tiết nghệ thuật là gì và vai trò của nó trong việc khắc họa nhân vật?',
          answer:
            'Chi tiết nghệ thuật là những chi tiết nhỏ nhưng đắt giá, có sức gợi lớn, góp phần thể hiện tính cách hoặc số phận nhân vật. Ví dụ, chi tiết "bát cháo hành" của Thị Nở trong truyện "Chí Phèo" không chỉ là một món ăn, nó là biểu tượng của tình người, của sự chăm sóc giản dị đã đánh thức phần người trong Chí Phèo.',
        },
        {
          question: 'Phân biệt nghệ thuật xây dựng nhân vật trực tiếp và gián tiếp?',
          answer: 'Xây dựng trực tiếp là khi nhà văn trực tiếp nhận xét, đánh giá về nhân vật ("hắn là một người tốt"). Xây dựng gián tiếp là để nhân vật tự bộc lộ tính cách của mình thông qua ngoại hình, hành động, lời nói, suy nghĩ và mối quan hệ với các nhân vật khác. Các nhà văn hiện đại thường ưa chuộng cách gián tiếp hơn.'
        },
        {
          question: '"Điển hình hóa nhân vật" nghĩa là gì?',
          answer: 'Là việc nhà văn xây dựng một nhân vật vừa có những nét cá tính riêng, độc đáo, không thể trộn lẫn, lại vừa mang những đặc điểm chung, tiêu biểu cho một tầng lớp, một giai cấp, hoặc một thời đại nhất định. Ví dụ, Chí Phèo vừa là một cá nhân có số phận bi thảm, vừa là điển hình cho người nông dân bị tha hóa trong xã hội cũ.'
        },
        {
          question: 'Ngôn ngữ nhân vật có vai trò gì?',
          answer: 'Ngôn ngữ nhân vật (lời đối thoại và độc thoại) là một phương tiện quan trọng để cá tính hóa nhân vật. Ngôn ngữ phù hợp với xuất thân, trình độ, tính cách (ví dụ: ngôn ngữ của một người trí thức khác với một người nông dân) sẽ làm cho nhân vật trở nên sống động và chân thực.'
        },
        {
          question: 'Hoàn cảnh xã hội ảnh hưởng đến nhân vật như thế nào?',
          answer: 'Hoàn cảnh xã hội là bối cảnh mà nhân vật sống, hành động và suy nghĩ. Nó có thể tác động, định hình, thậm chí quyết định tính cách và số phận của nhân vật. Khi phân tích, cần làm rõ mối quan hệ hai chiều giữa hoàn cảnh và nhân vật.'
        },
        {
          question: 'Tại sao ngoại hình lại quan trọng trong việc phân tích nhân vật?',
          answer: 'Ngoại hình không chỉ là vẻ bề ngoài. Các nhà văn thường sử dụng ngoại hình để hé lộ tính cách, nghề nghiệp hoặc số phận của nhân vật ("trông mặt mà bắt hình dong"). Ví dụ, cái đầu trọc lốc, hàm răng cạo trắng hớn, và những vết sẹo của Chí Phèo cho thấy sự tha hóa và bản chất lưu manh của hắn.'
        },
        {
          question: 'Nhân vật chức năng là gì?',
          answer: 'Là những nhân vật phụ, xuất hiện trong tác phẩm chủ yếu để thúc đẩy cốt truyện phát triển hoặc làm nổi bật tính cách, đặc điểm của nhân vật chính. Ví dụ, Bá Kiến trong "Chí Phèo" là nhân vật phản diện chính, nhưng cũng có vai trò làm rõ nguyên nhân bi kịch của Chí Phèo.'
        },
        {
          question: 'Phân tích nhân vật "người vợ nhặt" cần tập trung vào những phẩm chất nào?',
          answer: 'Cần tập trung vào sự biến đổi của nhân vật. Ban đầu là một người phụ nữ chao chát, chỏng lỏn vì đói. Nhưng khi theo Tràng về nhà, chị đã bộc lộ những phẩm chất tốt đẹp: sự e thẹn, ý tứ của một người phụ nữ, lòng hiếu thảo với mẹ chồng, và đặc biệt là khát vọng sống, niềm tin vào tương lai.'
        },
        {
          question: 'Tình huống truyện có vai trò gì trong việc bộc lộ tính cách nhân vật?',
          answer: 'Tình huống truyện là hoàn cảnh đặc biệt, éo le mà nhà văn tạo ra để nhân vật bộc lộ rõ nhất bản chất, tính cách của mình. Ví dụ, tình huống "nhặt được vợ" giữa lúc đói khát đỉnh điểm đã làm nổi bật lòng nhân ái của Tràng và khát vọng sống mãnh liệt của người vợ nhặt.'
        }
      ],
      quizzes: [
        {
          question:
            'Trong tác phẩm "Vợ nhặt" của Kim Lân, hình ảnh "lá cờ đỏ sao vàng bay phấp phới" ở cuối truyện có ý nghĩa gì?',
          options: [
            'Báo hiệu một trận đánh sắp diễn ra',
            'Chỉ là một chi tiết tả thực về cảnh vật',
            'Gợi ra một tương lai tươi sáng, một con đường cách mạng cho các nhân vật',
            'Tượng trưng cho sự tuyệt vọng cùng cực',
          ],
          correctAnswerIndex: 2,
          explanation:
            'Hình ảnh lá cờ đỏ và đoàn người đi phá kho thóc Nhật ở cuối truyện là một chi tiết mang tính biểu tượng, mở ra một lối thoát và hy vọng cho các nhân vật đang trong cảnh đói khổ, gợi ra con đường đi theo cách mạng để thay đổi số phận.',
        },
      ],
    },
  ],
  features: [
    'Hướng dẫn phân tích thơ, truyện ngắn',
    'Kỹ năng đọc hiểu văn bản nghị luận',
    'Phân tích nhân vật và chi tiết nghệ thuật',
    'Liên hệ văn học và cuộc sống',
  ],
  prerequisites: ['Khả năng đọc và viết tiếng Việt cơ bản'],
  objectives: [
    'Nâng cao năng lực cảm thụ văn học.',
    'Rèn luyện kỹ năng đọc hiểu sâu và tư duy phản biện.',
    'Phát triển kỹ năng viết bài nghị luận văn học và xã hội.',
    'Bồi dưỡng tâm hồn, nhân cách qua các giá trị nhân văn trong tác phẩm.',
  ],
  careerOutcomes: [
    'Nền tảng cho các ngành báo chí, xuất bản, sư phạm, viết lách, marketing nội dung.',
    'Kỹ năng phân tích và giao tiếp cần thiết cho nhiều lĩnh vực.',
  ],
  tags: ['văn học', 'đọc hiểu', 'nghị luận', 'phân tích tác phẩm'],
};
