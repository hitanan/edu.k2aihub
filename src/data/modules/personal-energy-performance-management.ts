import { ModuleData } from '@/types';
import { EnergyManagementLesson as PersonalEnergyLesson } from '@/types/lesson-base';

export type { PersonalEnergyLesson };

const lessons: PersonalEnergyLesson[] = [
  {
    id: 'understanding-personal-energy',
    videoUrl: null,
    title: 'Hiểu về Năng lượng Cá nhân',
    description: 'Khám phá bốn chiều năng lượng: thể chất, cảm xúc, tinh thần và tâm hồn.',
    duration: '45 phút',
    difficulty: 'Cơ bản',
    objectives: [
      'Phân biệt 4 loại năng lượng cá nhân.',
      'Hiểu chu kỳ dao động năng lượng tự nhiên.',
      'Nhận diện các yếu tố tiêu hao và phục hồi năng lượng.',
    ],
    realWorldApplications: [
      'Sắp xếp công việc theo chu kỳ năng lượng của bản thân.',
      'Nhận biết khi nào cần nghỉ ngơi để tái tạo năng lượng.',
    ],
    faqs: [
        { question: 'Bốn chiều năng lượng cá nhân là gì?', answer: 'Đó là Thể chất (sức khỏe, sức bền), Cảm xúc (chất lượng cảm xúc), Tinh thần (khả năng tập trung), và Tâm hồn (ý nghĩa, mục đích).' },
        { question: 'Tại sao quản lý năng lượng lại quan trọng hơn quản lý thời gian?', answer: 'Thời gian là hữu hạn, nhưng năng lượng có thể được tái tạo và nâng cao chất lượng. Quản lý năng lượng giúp bạn làm việc hiệu quả hơn trong cùng một khoảng thời gian.' },
        { question: 'Chu kỳ dao động năng lượng (ultradian rhythm) là gì?', answer: 'Là chu kỳ tự nhiên của cơ thể, trong đó năng lượng của chúng ta tăng và giảm trong khoảng 90-120 phút. Hiểu điều này giúp chúng ta lên lịch làm việc xen kẽ với các quãng nghỉ ngắn để tối ưu hiệu suất.' },
        { question: 'Làm thế nào để nhận biết mình đang cạn kiệt năng lượng?', answer: 'Các dấu hiệu phổ biến bao gồm khó tập trung, cảm thấy cáu kỉnh, mệt mỏi, mất động lực, và có xu hướng trì hoãn công việc.' },
        { question: 'Năng lượng cảm xúc là gì?', answer: 'Là chất lượng của cảm xúc của chúng ta. Cảm xúc tích cực (vui vẻ, lạc quan) là năng lượng hiệu suất cao. Cảm xúc tiêu cực (tức giận, lo lắng) tiêu tốn rất nhiều năng lượng.' },
        { question: 'Năng lượng tinh thần liên quan đến điều gì?', answer: 'Nó liên quan đến khả năng tập trung, suy nghĩ sáng tạo, và giải quyết vấn đề. Sự phân tâm và làm việc đa nhiệm là những kẻ thù lớn nhất của năng lượng tinh thần.' },
        { question: 'Năng lượng tâm hồn (spiritual energy) có phải là về tôn giáo không?', answer: 'Không nhất thiết. Năng lượng tâm hồn đến từ việc cảm thấy công việc của bạn có mục đích, ý nghĩa và phù hợp với các giá trị cốt lõi của bạn.' },
        { question: 'Nghỉ ngơi có phải là lãng phí thời gian không?', answer: 'Hoàn toàn không. Nghỉ ngơi là một phần thiết yếu của quá trình làm việc. Các quãng nghỉ ngắn giúp phục hồi năng lượng tinh thần và thể chất, cho phép bạn quay lại công việc với sự tập trung cao hơn.' },
        { question: 'Một số hoạt động giúp phục hồi năng lượng nhanh là gì?', answer: 'Đi bộ ngắn, nghe một bản nhạc yêu thích, hít thở sâu, uống một cốc nước, hoặc trò chuyện với đồng nghiệp về một chủ đề không liên quan đến công việc.' },
        { question: 'Làm thế nào để bắt đầu quản lý năng lượng của mình?', answer: 'Bước đầu tiên là tự quan sát. Hãy ghi lại mức năng lượng của bạn vào các thời điểm khác nhau trong ngày trong vòng một tuần để nhận ra các quy luật và chu kỳ của riêng bạn.' }
    ]
  },
  {
    id: 'physical-energy-optimization',
    videoUrl: null,
    title: 'Tối ưu hóa Năng lượng Thể chất',
    description: 'Tìm hiểu về vai trò của dinh dưỡng, giấc ngủ và vận động trong việc duy trì năng lượng thể chất.',
    duration: '60 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Xây dựng chế độ ăn uống cung cấp năng lượng bền vững.',
      'Cải thiện chất lượng giấc ngủ.',
      'Tích hợp các bài tập vận động ngắn vào ngày làm việc.',
    ],
    realWorldApplications: [
      'Tránh tình trạng sụt giảm năng lượng sau bữa trưa.',
      'Duy trì sự tỉnh táo suốt cả ngày làm việc.',
    ],
    faqs: [
        { question: 'Tại sao giấc ngủ lại quan trọng đối với năng lượng thể chất?', answer: 'Giấc ngủ là thời gian cơ thể tự sửa chữa, củng cố trí nhớ và phục hồi năng lượng. Thiếu ngủ ảnh hưởng trực tiếp đến khả năng tập trung, ra quyết định và sức khỏe tổng thể.' },
        { question: 'Nên ngủ bao nhiêu tiếng mỗi đêm?', answer: 'Hầu hết người trưởng thành cần từ 7-9 tiếng ngủ mỗi đêm để hoạt động tối ưu. Chất lượng giấc ngủ cũng quan trọng như số lượng.' },
        { question: 'Làm thế nào để cải thiện chất lượng giấc ngủ?', answer: 'Tạo một lịch trình ngủ đều đặn, giữ phòng ngủ tối, mát mẻ và yên tĩnh, tránh sử dụng thiết bị điện tử trước khi ngủ, và hạn chế caffeine vào buổi chiều và tối.' },
        { question: 'Loại thực phẩm nào giúp cung cấp năng lượng bền vững?', answer: 'Hãy tập trung vào các loại carbohydrate phức hợp (ngũ cốc nguyên hạt, yến mạch), protein nạc, và chất béo lành mạnh. Những thực phẩm này giải phóng năng lượng từ từ, giúp bạn duy trì sự ổn định.' },
        { question: 'Tại sao tôi cảm thấy mệt mỏi sau khi ăn trưa?', answer: 'Hiện tượng này thường do ăn một bữa trưa quá nhiều carbohydrate đơn giản (cơm trắng, bánh mì trắng, đồ ngọt), gây tăng đột ngột rồi giảm nhanh lượng đường trong máu. Một bữa trưa cân bằng hơn sẽ giúp khắc phục điều này.' },
        { question: 'Uống đủ nước có ảnh hưởng đến năng lượng không?', answer: 'Rất ảnh hưởng. Mất nước nhẹ cũng có thể gây ra mệt mỏi, đau đầu và giảm khả năng tập trung. Hãy đảm bảo uống đủ nước trong suốt cả ngày.' },
        { question: 'Vận động giúp tăng năng lượng như thế nào?', answer: 'Vận động làm tăng lưu thông máu, cung cấp nhiều oxy và chất dinh dưỡng hơn cho não và cơ bắp. Ngay cả một cuộc đi bộ ngắn 10 phút cũng có thể làm tăng năng lượng và cải thiện tâm trạng.' },
        { question: 'Tôi không có thời gian đến phòng gym, làm sao để vận động?', answer: 'Bạn không cần phải đến phòng gym. Hãy thử đi thang bộ thay vì thang máy, đi bộ trong giờ nghỉ trưa, hoặc thực hiện các bài tập giãn cơ đơn giản ngay tại bàn làm việc.' },
        { question: 'Caffeine có thực sự giúp tăng năng lượng không?', answer: 'Caffeine là một chất kích thích có thể tạm thời tăng sự tỉnh táo. Tuy nhiên, nó không tạo ra năng lượng thực sự và có thể ảnh hưởng đến giấc ngủ nếu dùng quá muộn trong ngày. Hãy sử dụng một cách điều độ.' },
        { question: 'Hít thở sâu có tác dụng gì?', answer: 'Hít thở sâu và chậm giúp kích hoạt hệ thần kinh phó giao cảm, làm giảm nhịp tim và huyết áp, đưa cơ thể vào trạng thái bình tĩnh và phục hồi. Đây là một cách nhanh chóng để giảm căng thẳng và tái tạo năng lượng.' }
    ]
  },
  {
    id: 'emotional-resilience',
    videoUrl: null,
    title: 'Xây dựng Sức bền Cảm xúc',
    description: 'Học cách quản lý cảm xúc tiêu cực và nuôi dưỡng cảm xúc tích cực để đối phó với áp lực.',
    duration: '60 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Thực hành các kỹ thuật quản lý stress.',
      'Nuôi dưỡng lòng biết ơn và sự lạc quan.',
      'Xây dựng các mối quan hệ xã hội hỗ trợ.',
    ],
    realWorldApplications: [
      'Giữ bình tĩnh khi đối mặt với deadline.',
      'Cải thiện mối quan hệ với đồng nghiệp và gia đình.',
    ],
    faqs: [
        { question: 'Sức bền cảm xúc (emotional resilience) là gì?', answer: 'Là khả năng phục hồi nhanh chóng sau những căng thẳng, nghịch cảnh hoặc thất bại. Người có sức bền cảm xúc không phải là người không bao giờ gặp khó khăn, mà là người biết cách đối phó và vượt qua chúng một cách hiệu quả.' },
        { question: 'Làm thế nào để quản lý cảm xúc tiêu cực như tức giận hay lo lắng?', answer: 'Bước đầu tiên là nhận diện cảm xúc đó mà không phán xét. Sau đó, hãy thử các kỹ thuật như hít thở sâu, viết ra suy nghĩ của bạn, hoặc tạm thời rời khỏi tình huống để lấy lại bình tĩnh trước khi phản ứng.' },
        { question: 'Thực hành lòng biết ơn có lợi ích gì?', answer: 'Thực hành lòng biết ơn, ví dụ như viết ra 3 điều bạn biết ơn mỗi ngày, đã được chứng minh là giúp giảm căng thẳng, tăng cảm giác hạnh phúc và cải thiện sức khỏe tổng thể. Nó giúp chuyển sự tập trung của bạn từ những gì tiêu cực sang những gì tích cực.' },
        { question: 'Tư duy lạc quan có thể rèn luyện được không?', answer: 'Có. Lạc quan không phải là phớt lờ thực tế, mà là tin tưởng vào khả năng của bản thân để đối phó với thách thức. Bạn có thể rèn luyện bằng cách tập trung vào giải pháp thay vì vấn đề, và xem thất bại như một cơ hội để học hỏi.' },
        { question: 'Tại sao các mối quan hệ xã hội lại quan trọng đối với sức bền cảm xúc?', answer: 'Một mạng lưới hỗ trợ gồm gia đình, bạn bè và đồng nghiệp đáng tin cậy cung cấp một "vùng đệm" chống lại căng thẳng. Chia sẻ cảm xúc và nhận được sự đồng cảm từ người khác là một cách phục hồi năng lượng cảm xúc hiệu quả.' },
        { question: 'Sự đồng cảm (empathy) và sự cảm thông (sympathy) khác nhau như thế nào?', answer: 'Cảm thông là cảm thấy tiếc cho ai đó. Đồng cảm là cố gắng thấu hiểu và cảm nhận cảm xúc của người khác như thể bạn đang ở trong hoàn cảnh của họ. Đồng cảm giúp xây dựng kết nối sâu sắc hơn.' },
        { question: 'Làm thế nào để không bị ảnh hưởng bởi cảm xúc tiêu cực của người khác?', answer: 'Hãy học cách đặt ra ranh giới cảm xúc. Bạn có thể lắng nghe và thấu hiểu họ mà không cần phải "hấp thụ" toàn bộ sự tiêu cực đó. Sau khi tương tác, hãy dành thời gian cho bản thân để "sạc" lại năng lượng tích cực.' },
        { question: 'Chánh niệm (mindfulness) giúp gì cho việc quản lý cảm xúc?', answer: 'Chánh niệm là thực hành chú tâm vào khoảnh khắc hiện tại mà không phán xét. Nó giúp bạn tạo ra một khoảng trống giữa tác nhân kích thích và phản ứng của bạn, cho phép bạn lựa chọn cách phản ứng một cách bình tĩnh và sáng suốt hơn.' },
        { question: 'Làm thế nào để xây dựng sự tự tin?', answer: 'Sự tự tin được xây dựng thông qua hành động. Hãy đặt ra những mục tiêu nhỏ và hoàn thành chúng. Ghi nhận những thành công của bạn, dù là nhỏ nhất. Học hỏi từ những sai lầm thay vì để chúng làm bạn nản lòng.' },
        { question: 'Khi nào tôi nên tìm kiếm sự giúp đỡ chuyên nghiệp về cảm xúc?', answer: 'Nếu bạn cảm thấy bị choáng ngợp bởi cảm xúc tiêu cực trong một thời gian dài, và nó ảnh hưởng đến công việc, các mối quan hệ hoặc sức khỏe của bạn, việc tìm đến một nhà trị liệu hoặc chuyên gia tư vấn là một bước đi mạnh mẽ và khôn ngoan.' }
    ]
  },
  {
    id: 'mental-focus-management',
    videoUrl: null,
    title: 'Quản lý Sự tập trung Tinh thần',
    description:
      'Các chiến lược để cải thiện sự tập trung, giảm thiểu sự phân tâm và thực hiện công việc sâu (deep work).',
    duration: '75 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Áp dụng kỹ thuật Pomodoro và Time-blocking.',
      'Thiết kế môi trường làm việc tối ưu cho sự tập trung.',
      'Rèn luyện khả năng tập trung đơn nhiệm.',
    ],
    realWorldApplications: [
      'Hoàn thành các công việc phức tạp hiệu quả hơn.',
      'Giảm thời gian làm việc mà vẫn tăng năng suất.',
    ],
    faqs: [
        { question: 'Deep work (làm việc sâu) là gì?', answer: 'Là khả năng tập trung hoàn toàn vào một nhiệm vụ đòi hỏi nhận thức cao mà không bị phân tâm. Đây là trạng thái giúp bạn tạo ra công việc có chất lượng cao nhất trong thời gian ngắn nhất.' },
        { question: 'Time-blocking là gì?', answer: 'Là một kỹ thuật quản lý thời gian trong đó bạn lên lịch cho từng khoảng thời gian trong ngày của mình để thực hiện một nhiệm vụ cụ thể. Nó giúp bạn chủ động kiểm soát thời gian thay vì phản ứng với các yêu cầu bên ngoài.' },
        { question: 'Làm thế nào để giảm thiểu sự phân tâm từ công nghệ?', answer: 'Hãy tắt các thông báo không cần thiết trên điện thoại và máy tính. Dành ra những khoảng thời gian cụ thể trong ngày để kiểm tra email và mạng xã hội, thay vì để chúng làm gián đoạn bạn liên tục.' },
        { question: 'Tại sao làm việc đa nhiệm (multitasking) lại không hiệu quả?', answer: 'Bộ não con người không thực sự làm nhiều việc cùng lúc, mà nó chuyển đổi rất nhanh giữa các nhiệm vụ. Quá trình chuyển đổi này tiêu tốn năng lượng tinh thần và làm giảm hiệu suất tổng thể.' },
        { question: 'Làm thế nào để thiết kế một môi trường làm việc tối ưu?', answer: 'Giữ không gian làm việc của bạn gọn gàng, ngăn nắp. Đảm bảo có đủ ánh sáng. Sử dụng tai nghe chống ồn nếu bạn làm việc trong môi trường ồn ào. Báo cho đồng nghiệp biết khi bạn cần tập trung và không muốn bị làm phiền.' },
        { question: 'Kỹ thuật Pomodoro có thực sự hiệu quả không?', answer: 'Rất hiệu quả cho nhiều người. Việc làm việc trong các phiên ngắn (25 phút) giúp bạn dễ dàng bắt đầu và duy trì sự tập trung. Các quãng nghỉ ngắn giúp bộ não được "sạc" lại, tránh kiệt sức.' },
        { question: 'Làm sao để duy trì sự tập trung trong các cuộc họp dài?', answer: 'Hãy tham gia một cách tích cực: ghi chú, đặt câu hỏi. Nếu bạn chỉ là người nghe, hãy cố gắng tóm tắt lại các điểm chính trong đầu. Tránh sử dụng điện thoại hoặc kiểm tra email trong khi họp.' },
        { question: '"Sự mệt mỏi vì quyết định" (decision fatigue) là gì?', answer: 'Là hiện tượng chất lượng các quyết định của bạn bị suy giảm sau một chuỗi dài phải đưa ra quyết định. Để tránh điều này, hãy tự động hóa các quyết định nhỏ (ví dụ: mặc gì, ăn gì) và đưa ra các quyết định quan trọng nhất vào buổi sáng khi năng lượng tinh thần của bạn ở mức cao nhất.' },
        { question: 'Làm thế nào để rèn luyện "cơ bắp" tập trung?', answer: 'Giống như cơ bắp thể chất, sự tập trung có thể được rèn luyện. Bắt đầu với các khoảng thời gian tập trung ngắn và tăng dần lên. Thiền định cũng là một cách tuyệt vời để cải thiện khả năng chú ý.' },
        { question: 'Nếu tôi bị phân tâm, tôi nên làm gì?', answer: 'Đừng tự trách mình. Chỉ cần nhẹ nhàng nhận ra rằng bạn đã bị phân tâm và sau đó từ từ đưa sự chú ý của bạn trở lại với nhiệm vụ ban đầu. Mỗi lần bạn làm điều này là một lần bạn đang rèn luyện sự tập trung.' }
    ]
  },
  {
    id: 'spiritual-alignment-purpose',
    videoUrl: null,
    title: 'Kết nối với Mục đích và Ý nghĩa',
    description:
      'Tìm kiếm và kết nối với các giá trị cốt lõi và mục đích sống để tạo ra nguồn năng lượng mạnh mẽ nhất.',
    duration: '45 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Xác định các giá trị cá nhân quan trọng nhất.',
      'Viết tuyên bố sứ mệnh cá nhân.',
      'Kết nối công việc hàng ngày với mục đích lớn hơn.',
    ],
    realWorldApplications: [
      'Tăng động lực và sự gắn kết với công việc.',
      'Cảm thấy hài lòng và có ý nghĩa hơn trong cuộc sống.',
    ],
    faqs: [
        { question: 'Năng lượng tâm hồn (spiritual energy) là gì?', answer: 'Đó là năng lượng đến từ việc sống và làm việc phù hợp với các giá trị và mục đích sâu sắc nhất của bạn. Nó là câu trả lời cho câu hỏi "Tại sao tôi làm việc này?"' },
        { question: 'Tại sao việc xác định giá trị cá nhân lại quan trọng?', answer: 'Giá trị cá nhân là kim chỉ nam cho các quyết định và hành động của bạn. Khi bạn sống và làm việc phù hợp với giá trị của mình, bạn sẽ cảm thấy đích thực, có động lực và ít bị căng thẳng hơn.' },
        { question: 'Làm thế nào để xác định giá trị cốt lõi của mình?', answer: 'Hãy suy ngẫm về những khoảnh khắc bạn cảm thấy tự hào hoặc hài lòng nhất. Những giá trị nào đã được thể hiện trong những khoảnh khắc đó? Bạn cũng có thể xem một danh sách các giá trị và chọn ra 5-10 giá trị quan trọng nhất đối với bạn.' },
        { question: 'Tuyên bố sứ mệnh cá nhân là gì?', answer: 'Đó là một câu hoặc một đoạn văn ngắn gọn mô tả mục đích của bạn, bạn muốn trở thành người như thế nào và những gì bạn muốn đóng góp. Nó hoạt động như một lời nhắc nhở và một nguồn cảm hứng.' },
        { question: 'Làm thế nào để kết nối công việc hàng ngày với một mục đích lớn hơn?', answer: 'Hãy cố gắng nhìn xa hơn các nhiệm vụ hàng ngày và suy nghĩ về tác động của công việc bạn làm. Công việc của bạn giúp đỡ ai? Nó đóng góp gì cho mục tiêu của nhóm, của công ty, hay của xã hội?' },
        { question: 'Nếu tôi cảm thấy công việc hiện tại không có ý nghĩa thì sao?', answer: 'Bạn có thể thử "tái định hình công việc" (job crafting) - tìm cách thay đổi các nhiệm vụ hoặc mối quan hệ trong công việc để nó phù hợp hơn với giá trị của bạn. Hoặc, bạn có thể tìm kiếm ý nghĩa từ các hoạt động bên ngoài công việc, như tình nguyện hoặc theo đuổi một sở thích.' },
        { question: 'Sự khác biệt giữa mục tiêu và mục đích là gì?', answer: 'Mục tiêu là những gì bạn muốn đạt được (ví dụ: được thăng chức). Mục đích là lý do tại sao bạn muốn đạt được điều đó (ví dụ: để có thể tạo ra tác động lớn hơn). Mục đích cung cấp động lực bền vững hơn.' },
        { question: 'Lòng vị tha và sự cống hiến có phải là một phần của năng lượng tâm hồn không?', answer: 'Có, đối với nhiều người, việc giúp đỡ người khác và đóng góp cho một điều gì đó lớn hơn bản thân là một nguồn năng lượng và sự hài lòng vô cùng mạnh mẽ.' },
        { question: 'Làm thế nào để duy trì năng lượng tâm hồn?', answer: 'Hãy dành thời gian thường xuyên để suy ngẫm về các giá trị và mục đích của bạn. Dành thời gian cho những hoạt động mang lại cho bạn niềm vui và cảm giác ý nghĩa, dù là trong hay ngoài công việc.' },
        { question: 'Năng lượng tâm hồn có thể giúp tôi đối phó với thất bại không?', answer: 'Chắc chắn có. Khi bạn có một mục đích rõ ràng, một thất bại trong một nhiệm vụ cụ thể sẽ chỉ được xem là một trở ngại tạm thời trên một hành trình dài hơn, chứ không phải là một sự phán xét về giá trị của bản thân bạn.' }
    ]
  },
];

export const personalEnergyPerformanceManagementModule: ModuleData = {
  id: 'personal-energy-performance-management',
  title: 'Quản lý Năng lượng và Hiệu Suất Cá Nhân',
  description:
    'Học cách tối ưu hóa năng lượng cá nhân, quản lý căng thẳng và xây dựng khả năng phục hồi để đạt hiệu suất đỉnh cao trong công việc và cuộc sống.',
  image: 'personal-energy-management.jpg',
  tags: ['quản lý năng lượng', 'hiệu suất cá nhân', 'quản lý stress', 'resilience'],
  category: 'Phát triển cá nhân',
};

export const personalEnergyLessons = lessons;
