import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

export const uxUiDesignLessons: BaseLessonData[] = [
  {
    id: 'user-research-and-personas',
    videoUrl: null,
    title: 'Nghiên cứu Người dùng và Xây dựng Chân dung Khách hàng',
    description: 'Học cách thực hiện nghiên cứu người dùng và tạo ra các persona chi tiết.',
    duration: '280 phút',
    difficulty: 'Trung bình',
    objectives: ['Nắm vững các phương pháp nghiên cứu người dùng.', 'Xây dựng được user persona hoàn chỉnh.'],
    realWorldApplications: ['Phát triển sản phẩm mới dựa trên insight khách hàng.'],
    faqs: [
      {
        question: 'User Persona là gì và tại sao nó quan trọng?',
        answer:
          'User Persona (Chân dung khách hàng) là một hồ sơ hư cấu đại diện cho một nhóm người dùng mục tiêu. Nó bao gồm thông tin về nhân khẩu học, mục tiêu, nhu cầu, và "nỗi đau" của họ. Persona giúp đội ngũ phát triển sản phẩm đồng cảm với người dùng và đưa ra các quyết định thiết kế lấy người dùng làm trung tâm.',
      },
      {
        question: 'Sự khác biệt giữa nghiên cứu định tính và định lượng là gì?',
        answer:
          'Nghiên cứu định lượng (quantitative) trả lời câu hỏi "Bao nhiêu?" bằng cách thu thập dữ liệu có thể đo lường được (ví dụ: khảo sát, phân tích web). Nghiên cứu định tính (qualitative) trả lời câu hỏi "Tại sao?" bằng cách tìm hiểu sâu về hành vi và động cơ của người dùng (ví dụ: phỏng vấn sâu, quan sát). Cả hai đều quan trọng để có một cái nhìn toàn diện.',
      },
      {
        question: 'Empathy Map (Bản đồ thấu cảm) là gì?',
        answer:
          'Là một công cụ trực quan giúp đội nhóm hiểu sâu hơn về người dùng. Nó được chia thành 4 góc phần tư: Says (Nói), Thinks (Nghĩ), Feels (Cảm thấy), và Does (Làm). Việc điền vào bản đồ này giúp chúng ta đặt mình vào vị trí của người dùng và khám phá những mâu thuẫn giữa những gì họ nói và những gì họ thực sự làm.',
      },
      {
        question: 'Customer Journey Map (Bản đồ hành trình khách hàng) được sử dụng để làm gì?',
        answer:
          'Nó trực quan hóa toàn bộ trải nghiệm của khách hàng với một sản phẩm hoặc dịch vụ, từ lúc họ nhận biết nhu cầu cho đến khi trở thành khách hàng trung thành. Bản đồ này giúp xác định các "điểm chạm" (touchpoints) và các "nỗi đau" (pain points) trong suốt hành trình, từ đó tìm ra cơ hội cải thiện.',
      },
      {
        question: 'Làm thế nào để tiến hành một cuộc phỏng vấn người dùng hiệu quả?',
        answer:
          'Hãy chuẩn bị một danh sách câu hỏi mở, nhưng linh hoạt để đào sâu vào những câu trả lời thú vị. Lắng nghe nhiều hơn nói. Tránh các câu hỏi dẫn dắt hoặc câu hỏi có/không. Thay vì hỏi "Bạn có thích tính năng này không?", hãy hỏi "Hãy kể cho tôi nghe về lần cuối bạn thực hiện công việc [X]".',
      },
      {
        question: 'Năm phương pháp nghiên cứu người dùng phổ biến là gì?',
        answer:
          'Năm phương pháp phổ biến bao gồm: Phỏng vấn sâu (In-depth Interviews), Khảo sát (Surveys), Kiểm thử tính khả dụng (Usability Testing), Sắp xếp thẻ (Card Sorting) để hiểu cấu trúc thông tin, và Phân tích đối thủ cạnh tranh (Competitive Analysis).',
      },
      {
        question: 'Sự khác biệt giữa UX (User Experience) và UI (User Interface) là gì?',
        answer:
          'UX là trải nghiệm tổng thể của người dùng với sản phẩm, bao gồm cảm giác của họ khi sử dụng nó có dễ dàng, hữu ích và thú vị không. UI là giao diện người dùng, tức là phần nhìn thấy và tương tác được của sản phẩm (nút bấm, icon, màu sắc). UI là một phần quan trọng của UX, nhưng UX bao hàm rộng hơn nhiều.',
      },
      {
        question: 'Tại sao cần phải xác định "Jobs to be Done" (JTBD) của người dùng?',
        answer:
          'Framework JTBD giúp chúng ta tập trung vào "công việc" mà người dùng "thuê" sản phẩm của chúng ta để thực hiện. Ví dụ, người ta không mua một cái khoan, họ "thuê" nó để tạo ra một cái lỗ. Hiểu được JTBD giúp chúng ta thiết kế giải pháp tốt hơn, thay vì chỉ tập trung vào các tính năng của sản phẩm.',
      },
      {
        question: 'Làm thế nào để tổng hợp kết quả nghiên cứu thành insight (sự thật ngầm hiểu)?',
        answer:
          'Sau khi thu thập dữ liệu, hãy tìm kiếm các mẫu (patterns) và các chủ đề lặp đi lặp lại trong các câu trả lời và hành vi của người dùng. Một insight tốt thường là một sự thật gây ngạc nhiên, không rõ ràng ngay từ đầu, và nó chỉ ra một cơ hội để hành động. Ví dụ: "Người dùng nói rằng họ muốn nhiều lựa chọn, nhưng thực tế họ lại bị tê liệt khi có quá nhiều quyết định."',
      },
      {
        question: 'Nghiên cứu thứ cấp (Secondary Research) là gì và khi nào nên sử dụng?',
        answer:
          'Là việc thu thập và phân tích dữ liệu đã có sẵn từ các nguồn khác, như báo cáo thị trường, bài báo học thuật, phân tích của đối thủ. Bạn nên bắt đầu bằng nghiên cứu thứ cấp để hiểu bối cảnh chung của vấn đề trước khi tiến hành nghiên cứu sơ cấp (tự mình thu thập dữ liệu), giúp tiết kiệm thời gian và nguồn lực.',
      },
    ],
  },
  {
    id: 'wireframing-prototyping-with-figma',
    videoUrl: null,
    title: 'Wireframing và Prototyping với Figma',
    description: 'Sử dụng Figma để tạo wireframe và prototype cho ứng dụng web/mobile.',
    duration: '300 phút',
    difficulty: 'Trung bình',
    objectives: ['Thành thạo các công cụ cơ bản của Figma.', 'Tạo ra các prototype tương tác được.'],
    realWorldApplications: ['Thiết kế giao diện cho một ứng dụng đặt đồ ăn.'],
    faqs: [
      {
        question: 'Wireframe, Mockup, và Prototype khác nhau như thế nào?',
        answer:
          'Wireframe là bản phác thảo cấu trúc cơ bản (bộ xương) của một trang, tập trung vào bố cục và chức năng, thường có độ trung thực thấp (low-fidelity). Mockup là bản thiết kế có độ trung thực cao (high-fidelity), thể hiện cả về mặt hình ảnh (màu sắc, font chữ). Prototype là một phiên bản tương tác được của sản phẩm, cho phép người dùng nhấp và trải nghiệm luồng hoạt động, giúp kiểm tra tính khả dụng trước khi lập trình.',
      },
      {
        question: 'Tại sao nên dùng Figma thay vì các công cụ khác như Sketch hay Adobe XD?',
        answer:
          'Figma có lợi thế lớn là hoạt động hoàn toàn trên nền tảng web, cho phép cộng tác theo thời gian thực một cách liền mạch. Nhiều người có thể cùng làm việc trên một file thiết kế, giống như Google Docs. Điều này giúp tăng tốc độ làm việc nhóm và dễ dàng chia sẻ, nhận phản hồi.',
      },
      {
        question: 'Component trong Figma là gì?',
        answer:
          'Component là các yếu tố thiết kế có thể tái sử dụng (ví dụ: nút bấm, icon, thẻ sản phẩm). Khi bạn tạo một "Main Component", bạn có thể tạo ra nhiều "Instance" (bản sao) của nó. Bất kỳ thay đổi nào trên Main Component sẽ tự động cập nhật cho tất cả các Instance, giúp tiết kiệm thời gian và đảm bảo tính nhất quán.',
      },
      {
        question: 'Auto Layout là một trong những tính năng mạnh mẽ nhất của Figma. Nó dùng để làm gì?',
        answer:
          'Auto Layout cho phép bạn tạo ra các frame và component có thể tự động co giãn hoặc sắp xếp lại khi nội dung bên trong thay đổi. Ví dụ, một nút bấm sẽ tự động mở rộng khi bạn thay đổi text bên trong. Tính năng này cực kỳ hữu ích để tạo ra các thiết kế linh hoạt và dễ bảo trì.',
      },
      {
        question: 'Prototype trong Figma có thể làm được những gì?',
        answer:
          'Figma cho phép bạn kết nối các frame lại với nhau để tạo ra các luồng người dùng có thể tương tác. Bạn có thể thiết lập các hành động (click, hover, drag), các hiệu ứng chuyển cảnh (slide, dissolve), và thậm chí tạo ra các prototype nâng cao với biến (variables) và logic có điều kiện để mô phỏng trải nghiệm ứng dụng một cách chân thực.',
      },
      {
        question: 'Sự khác biệt giữa Frame và Group trong Figma là gì?',
        answer:
          'Group chỉ đơn giản là một nhóm các layer lại với nhau. Frame giống như một "thùng chứa" mạnh mẽ hơn, nó có các thuộc tính riêng như kích thước, auto layout, và có thể được lồng vào nhau. Trong thiết kế responsive, Frame là công cụ không thể thiếu.',
      },
      {
        question: 'Làm thế nào để chia sẻ thiết kế của mình cho lập trình viên?',
        answer:
          'Figma có chế độ "Dev Mode". Khi bạn mời lập trình viên vào file với quyền xem, họ có thể chuyển sang Dev Mode để xem các thông số kỹ thuật của thiết kế (kích thước, màu sắc, khoảng cách), và thậm chí lấy mã CSS, Swift, hoặc XML cho các thành phần. Điều này giúp quá trình chuyển giao từ thiết kế sang lập trình (handoff) trở nên suôn sẻ hơn.',
      },
      {
        question: 'Style (Kiểu) trong Figma được sử dụng để làm gì?',
        answer:
          'Styles cho phép bạn lưu và tái sử dụng các thuộc tính như màu sắc, font chữ, và hiệu ứng. Ví dụ, bạn có thể tạo một "Color Style" cho màu chính của thương hiệu. Nếu sau này bạn cần thay đổi màu đó, bạn chỉ cần cập nhật Style, và tất cả các đối tượng đang sử dụng nó sẽ tự động thay đổi theo.',
      },
      {
        question: 'Figma Community là gì?',
        answer:
          'Đó là một kho tài nguyên khổng lồ nơi người dùng Figma trên toàn thế giới chia sẻ các file thiết kế, plugin, và widget. Bạn có thể tìm thấy hàng ngàn thư viện UI, bộ icon, và các file mẫu để học hỏi hoặc sử dụng trong dự án của mình. Đây là một nơi tuyệt vời để tìm cảm hứng và tăng tốc công việc.',
      },
      {
        question: 'Độ trung thực (Fidelity) trong thiết kế có nghĩa là gì?',
        answer:
          'Độ trung thực đề cập đến mức độ chi tiết và thực tế của một wireframe hoặc prototype. Low-fidelity (lo-fi) tập trung vào cấu trúc và luồng, thường là các bản phác thảo đen trắng. High-fidelity (hi-fi) trông rất giống sản phẩm cuối cùng, bao gồm màu sắc, hình ảnh và các chi tiết tương tác.',
      },
    ],
  },
  {
    id: 'usability-testing-and-feedback-analysis',
    videoUrl: null,
    title: 'Kiểm thử Tính khả dụng và Phân tích Phản hồi',
    description: 'Học cách tổ chức các buổi usability testing và phân tích feedback từ người dùng.',
    duration: '260 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Lên kế hoạch và thực hiện một buổi usability test.',
      'Phân tích và tổng hợp kết quả để cải thiện sản phẩm.',
    ],
    realWorldApplications: ['Cải thiện trải nghiệm người dùng của một trang web e-commerce.'],
    faqs: [
      {
        question: 'Cần bao nhiêu người dùng để thực hiện một buổi usability test hiệu quả?',
        answer:
          'Theo nghiên cứu của Nielsen Norman Group, chỉ cần 5 người dùng là bạn đã có thể phát hiện ra khoảng 85% các vấn đề về tính khả dụng. Việc kiểm thử với một nhóm nhỏ nhưng lặp lại nhiều lần trong suốt quá trình phát triển sẽ hiệu quả hơn là một bài kiểm tra lớn với hàng chục người chỉ ở cuối dự án.',
      },
      {
        question: 'Làm thế nào để người dùng không cảm thấy họ đang "bị kiểm tra"?',
        answer:
          'Hãy nhấn mạnh rằng bạn đang kiểm tra sản phẩm, chứ không phải kiểm tra họ. Sử dụng các câu nói như "Không có câu trả lời đúng hay sai" và "Hãy suy nghĩ thành tiếng". Tạo một không khí thoải mái, thân thiện và khuyến khích họ hành động một cách tự nhiên nhất có thể.',
      },
      {
        question: 'Sự khác biệt giữa Usability Testing có người điều phối và không có người điều phối?',
        answer:
          'Testing có người điều phối (Moderated) là khi có một người hướng dẫn (moderator) trực tiếp quan sát và tương tác với người dùng. Testing không có người điều phối (Unmoderated) là khi người dùng tự thực hiện các tác vụ thông qua một công cụ online. Moderated testing cho insight sâu hơn, trong khi unmoderated testing nhanh hơn và có thể thực hiện với quy mô lớn hơn.',
      },
      {
        question: 'System Usability Scale (SUS) là gì?',
        answer:
          'SUS là một bảng câu hỏi gồm 10 câu, được sử dụng rộng rãi để đo lường cảm nhận chủ quan của người dùng về tính khả dụng của một hệ thống. Nó cung cấp một điểm số từ 0 đến 100, giúp bạn có một thước đo định lượng để so sánh các phiên bản khác nhau của sản phẩm hoặc so sánh với đối thủ.',
      },
      {
        question: 'Làm thế nào để viết một kịch bản (script) cho buổi usability test?',
        answer:
          'Một kịch bản tốt bao gồm: 1. Lời giới thiệu (giới thiệu mục đích, nhấn mạnh không có đúng sai). 2. Các câu hỏi khởi động (để người dùng thoải mái). 3. Các tác vụ chính (tasks) yêu cầu người dùng thực hiện, nên dựa trên các tình huống thực tế. 4. Các câu hỏi tổng kết (để thu thập cảm nhận chung).',
      },
      {
        question: 'Heuristic Evaluation (Đánh giá Heuristic) là gì?',
        answer:
          'Là một phương pháp kiểm tra tính khả dụng, trong đó các chuyên gia UX sẽ đánh giá giao diện dựa trên một bộ các nguyên tắc thiết kế đã được công nhận (ví dụ: 10 Nguyên tắc của Nielsen). Đây là một cách nhanh chóng và tiết kiệm để tìm ra các vấn đề tiềm ẩn mà không cần tuyển người dùng thực.',
      },
      {
        question: 'Làm thế nào để phân tích và trình bày kết quả từ usability testing?',
        answer:
          'Hãy tập hợp tất cả các quan sát, tìm kiếm các vấn đề lặp lại ở nhiều người dùng. Phân loại các vấn đề theo mức độ nghiêm trọng (ví dụ: nghiêm trọng, trung bình, nhỏ). Khi trình bày, hãy tập trung vào các insight chính và đề xuất các giải pháp cụ thể. Sử dụng các trích dẫn hoặc video clip ngắn của người dùng để làm cho vấn đề trở nên sinh động và thuyết phục hơn.',
      },
      {
        question: 'A/B Testing có phải là một hình thức của Usability Testing không?',
        answer:
          'Không hẳn. Usability Testing tập trung vào việc tìm hiểu "tại sao" người dùng gặp khó khăn (định tính). A/B Testing tập trung vào việc so sánh hiệu quả của hai phiên bản khác nhau để xem phiên bản nào tốt hơn trong việc đạt được một mục tiêu cụ thể, ví dụ như tỷ lệ nhấp chuột (định lượng). Chúng thường bổ sung cho nhau.',
      },
      {
        question: 'Nên thực hiện Usability Testing ở giai đoạn nào của dự án?',
        answer:
          'Ở mọi giai đoạn! Bạn có thể kiểm tra các bản phác thảo trên giấy, wireframe, prototype, hoặc sản phẩm đã ra mắt. "Kiểm thử sớm, kiểm thử thường xuyên" là một nguyên tắc vàng. Việc phát hiện và sửa một vấn đề ở giai đoạn thiết kế rẻ hơn rất nhiều so với việc sửa nó sau khi sản phẩm đã được lập trình xong.',
      },
      {
        question: 'Làm gì nếu người dùng không thực hiện tác vụ như bạn mong đợi?',
        answer:
          'Đó chính là một phát hiện quý giá! Đừng cố gắng "sửa" họ hoặc hướng dẫn họ đi đúng luồng. Thay vào đó, hãy tìm hiểu tại sao họ lại hành động như vậy. Hãy hỏi những câu như: "Tôi thấy bạn đã nhấp vào đó, bạn đang mong đợi điều gì sẽ xảy ra?". Những sai lệch so với kịch bản thường là nơi chứa đựng những insight sâu sắc nhất.',
      },
    ],
  },
  {
    id: 'building-and-maintaining-design-systems',
    videoUrl: null,
    title: 'Xây dựng và Duy trì Hệ thống Thiết kế',
    description: 'Tìm hiểu về tầm quan trọng của design system và cách xây dựng, duy trì nó.',
    duration: '240 phút',
    difficulty: 'Nâng cao',
    objectives: ['Hiểu cấu trúc của một design system.', 'Bắt đầu xây dựng một thư viện component cho dự án.'],
    realWorldApplications: ['Đảm bảo tính nhất quán cho bộ sản phẩm của một công ty lớn.'],
    faqs: [
      {
        question: 'Design System (Hệ thống Thiết kế) là gì?',
        answer:
          'Design System là một bộ sưu tập các component (thành phần) có thể tái sử dụng, được quản lý bằng các tiêu chuẩn rõ ràng, cho phép các nhóm thiết kế và phát triển sản phẩm một cách nhất quán và hiệu quả. Nó không chỉ là một thư viện UI, mà còn bao gồm cả quy tắc, nguyên tắc và tài liệu hướng dẫn.',
      },
      {
        question: 'Lợi ích của việc sử dụng Design System là gì?',
        answer:
          'Nó giúp tạo ra sự nhất quán trên tất cả các sản phẩm, tăng tốc độ thiết kế và phát triển (vì không phải tạo lại những thứ đã có), cải thiện sự hợp tác giữa designer và developer, và giúp việc giới thiệu thành viên mới vào team trở nên dễ dàng hơn.',
      },
      {
        question: 'Atomic Design là gì và nó liên quan gì đến Design System?',
        answer:
          'Atomic Design là một phương pháp luận do Brad Frost đề xuất để xây dựng hệ thống thiết kế. Nó chia giao diện thành 5 cấp độ: Atoms (nguyên tử - các yếu tố cơ bản như nút, input), Molecules (phân tử - kết hợp các atom, ví dụ: một form tìm kiếm), Organisms (sinh vật - các phần phức tạp hơn), Templates (bản mẫu), và Pages (trang hoàn chỉnh). Phương pháp này giúp xây dựng design system một cách có hệ thống.',
      },
      {
        question: 'Sự khác biệt giữa Design System và Style Guide (Hướng dẫn phong cách)?',
        answer:
          'Style Guide thường chỉ tập trung vào các yếu tố hình ảnh như logo, màu sắc, typography. Design System là một khái niệm rộng hơn nhiều, nó bao gồm Style Guide, nhưng còn có cả một thư viện các component có thể tái sử dụng, các nguyên tắc thiết kế, quy tắc sử dụng, và cả code của các component đó.',
      },
      {
        question: 'Khi nào một công ty nên bắt đầu xây dựng Design System?',
        answer:
          'Khi bạn bắt đầu cảm thấy sự thiếu nhất quán giữa các sản phẩm hoặc các trang khác nhau, hoặc khi đội ngũ của bạn dành quá nhiều thời gian để thiết kế lại những thứ tương tự nhau. Bắt đầu nhỏ bằng một thư viện UI Kit trên Figma, sau đó phát triển dần lên.',
      },
      {
        question: 'Ai nên tham gia vào việc xây dựng và duy trì Design System?',
        answer:
          'Đây là nỗ lực của cả nhóm. Lý tưởng nhất là có một nhóm chuyên trách (Design System Team) bao gồm cả designer và developer. Tuy nhiên, với các công ty nhỏ, nó có thể là trách nhiệm chung của các trưởng nhóm thiết kế và kỹ thuật. Sự tham gia của cả hai phía là rất quan trọng.',
      },
      {
        question: 'Làm thế nào để khuyến khích mọi người trong công ty sử dụng Design System?',
        answer:
          'Hãy làm cho nó trở thành cách dễ nhất để hoàn thành công việc. Cung cấp tài liệu hướng dẫn rõ ràng, hỗ trợ nhiệt tình, và đảm bảo các component trong hệ thống luôn được cập nhật và có chất lượng cao. Nếu việc sử dụng component từ hệ thống nhanh và tốt hơn việc tự tạo mới, mọi người sẽ tự động sử dụng nó.',
      },
      {
        question: 'Design Tokens là gì?',
        answer:
          'Design Tokens là các "biến" lưu trữ các giá trị cốt lõi của thiết kế, như mã màu, kích thước font, khoảng cách. Ví dụ, thay vì code cứng màu `#007bff`, bạn định nghĩa một token là `$color-primary: #007bff`. Điều này cho phép bạn thay đổi giá trị ở một nơi duy nhất và nó sẽ cập nhật trên toàn bộ hệ thống, đảm bảo tính nhất quán và dễ bảo trì.',
      },
      {
        question: 'Làm thế nào để quản lý phiên bản (versioning) cho Design System?',
        answer:
          'Giống như phần mềm, Design System cũng cần có phiên bản. Hãy sử dụng "Semantic Versioning" (ví dụ: 1.2.5). Major version (1.x.x) cho các thay đổi lớn, có thể phá vỡ tính tương thích. Minor version (x.2.x) cho việc thêm tính năng mới. Patch version (x.x.5) cho các bản vá lỗi nhỏ. Điều này giúp các đội nhóm biết khi nào cần cập nhật.',
      },
      {
        question: 'Một số Design System nổi tiếng để học hỏi là gì?',
        answer:
          'Một vài ví dụ tuyệt vời bao gồm Material Design của Google, Human Interface Guidelines của Apple, Carbon Design System của IBM, và Polaris của Shopify. Nghiên cứu chúng sẽ cho bạn nhiều ý tưởng về cách cấu trúc và tài liệu hóa một hệ thống thiết kế hiệu quả.',
      },
    ],
  },
  {
    id: 'agile-product-management-for-designers',
    videoUrl: null,
    title: 'Quản lý Sản phẩm Agile cho Nhà thiết kế',
    description: 'Hiểu vai trò của designer trong quy trình phát triển sản phẩm Agile.',
    duration: '220 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Hiểu các khái niệm cơ bản của Agile và Scrum.',
      'Biết cách phối hợp hiệu quả với Product Manager và Developers.',
    ],
    realWorldApplications: ['Làm việc trong một team startup công nghệ.'],
    faqs: [
      {
        question: 'Agile là gì và nó khác gì so với mô hình Thác nước (Waterfall)?',
        answer:
          'Mô hình Thác nước là một quy trình tuyến tính, tuần tự (làm xong bước này mới đến bước kia). Ngược lại, Agile là một phương pháp lặp lại và tăng trưởng, chia dự án lớn thành các phần nhỏ gọi là "sprint". Điều này cho phép team linh hoạt hơn, thích ứng với thay đổi và nhận phản hồi sớm từ người dùng.',
      },
      {
        question: 'Vai trò của UX Designer trong một sprint là gì?',
        answer:
          'Trong một sprint, UX Designer không chỉ thiết kế cho các tính năng của sprint hiện tại, mà còn thường xuyên "đi trước" một hoặc hai sprint để nghiên cứu và chuẩn bị cho các tính năng tiếp theo. Họ làm việc chặt chẽ với Product Manager để định hình yêu cầu và với Developer để đảm bảo thiết kế được triển khai đúng ý tưởng.',
      },
      {
        question: 'Scrum là gì? Nó có phải là Agile không?',
        answer:
          'Agile là một triết lý, một tư duy phát triển phần mềm. Scrum là một framework (khung làm việc) cụ thể để thực thi triết lý Agile. Scrum có các vai trò (Product Owner, Scrum Master, Development Team), các sự kiện (Sprint Planning, Daily Stand-up, Sprint Review, Sprint Retrospective) và các công cụ (Product Backlog, Sprint Backlog) rất rõ ràng. Scrum là cách phổ biến nhất để triển khai Agile.',
      },
      {
        question: 'User Story (Câu chuyện người dùng) là gì?',
        answer:
          'Là một cách mô tả yêu cầu tính năng từ góc nhìn của người dùng cuối. Nó thường có cấu trúc: "Là một [loại người dùng], tôi muốn [làm một việc gì đó], để [đạt được một mục tiêu nào đó]". User story giúp đội ngũ tập trung vào giá trị mang lại cho người dùng, thay vì chỉ tập trung vào tính năng.',
      },
      {
        question: 'Definition of Done (Định nghĩa Hoàn thành) là gì?',
        answer:
          'Là một danh sách các tiêu chí mà một User Story phải đáp ứng để được coi là "hoàn thành". Ví dụ: "Đã được thiết kế, lập trình, kiểm thử, và viết tài liệu". Việc có một Definition of Done rõ ràng giúp đảm bảo chất lượng và sự minh bạch trong nhóm.',
      },
      {
        question: 'Sự khác biệt giữa Product Manager và Product Designer?',
        answer:
          'Product Manager chịu trách nhiệm về "cái gì" và "tại sao" - xác định sản phẩm cần xây dựng và lý do kinh doanh đằng sau nó. Product Designer chịu trách nhiệm về "như thế nào" - làm thế nào để sản phẩm đó dễ sử dụng, hữu ích và thú vị. Họ là hai đối tác chiến lược quan trọng trong việc phát triển sản phẩm.',
      },
      {
        question: 'Lean UX là gì?',
        answer:
          'Lean UX là một phương pháp tiếp cận kết hợp các nguyên tắc của Lean Startup và Agile, tập trung vào việc giảm lãng phí và học hỏi nhanh chóng. Thay vì tạo ra các tài liệu thiết kế chi tiết, Lean UX ưu tiên việc tạo ra các MVP (Minimum Viable Product), kiểm thử giả định và học hỏi từ phản hồi của người dùng để lặp lại.',
      },
      {
        question: 'Làm thế nào để designer có thể tham gia vào Sprint Planning (Lập kế hoạch Sprint)?',
        answer:
          'Designer nên tham gia Sprint Planning để giúp team hiểu rõ hơn về các user story, trình bày các prototype hoặc thiết kế liên quan, và giúp ước tính độ phức tạp của công việc từ góc độ thiết kế. Sự tham gia của designer giúp đảm bảo cả team có cùng một tầm nhìn về những gì sắp được xây dựng.',
      },
      {
        question: 'Sprint Retrospective (Họp cải tiến Sprint) có mục đích gì?',
        answer:
          'Đây là cuộc họp ở cuối mỗi sprint để cả nhóm nhìn lại và trả lời ba câu hỏi: Điều gì đã làm tốt? Điều gì chưa tốt? Chúng ta có thể cải thiện điều gì trong sprint tiếp theo? Đây là một cơ chế quan trọng để nhóm liên tục học hỏi và cải tiến quy trình làm việc của mình.',
      },
      {
        question:
          'Làm thế nào để cân bằng giữa việc xây dựng tính năng mới và xử lý "nợ kỹ thuật" (technical debt) hoặc "nợ thiết kế" (design debt)?',
        answer:
          'Đây là một thách thức phổ biến. Một cách tiếp cận tốt là dành một phần nhỏ của mỗi sprint (ví dụ: 10-20% thời gian) để giải quyết các khoản nợ này. Việc này giúp hệ thống không bị xuống cấp theo thời gian và giữ cho tốc độ phát triển bền vững trong dài hạn.',
      },
    ],
  },
];

export const uxUiDesignModuleData: ModuleData = {
  id: 'ux-ui-design',
  title: 'UX/UI Design & Product Development',
  subtitle: 'Thiết kế trải nghiệm người dùng và phát triển sản phẩm',
  description:
    'Học cách thiết kế sản phẩm số mà người dùng yêu thích, từ nghiên cứu người dùng đến prototyping và product management.',
  category: 'creative',
  icon: '🎨',
  color: 'from-violet-500 to-fuchsia-500',
  level: 'Trung bình',
  duration: '25-30 giờ',
  features: [
    'User Research',
    'Wireframing & Prototyping',
    'Usability Testing',
    'Design Systems',
    'Agile Product Management',
  ],
  prerequisites: [
    'Tư duy thẩm mỹ và sự đồng cảm',
    'Kỹ năng giải quyết vấn đề',
    'Làm quen với các công cụ thiết kế là một lợi thế',
  ],
  objectives: [
    'Hiểu quy trình thiết kế UX/UI từ A-Z.',
    'Thành thạo Figma cho wireframing và prototyping.',
    'Biết cách thực hiện usability testing hiệu quả.',
    'Xây dựng và quản lý design systems.',
  ],
  careerOutcomes: ['UX/UI Designer', 'Product Designer', 'Interaction Designer'],
  industryApplications: ['Web/Mobile Apps', 'SaaS Products', 'E-commerce'],
  marketDemand: {
    averageSalary: '30.000.000 VNĐ/tháng',
    jobGrowth: '20%',
    hireDemand: 'Rất cao',
  },
  relatedModules: ['creative-design', 'web-development-fundamentals'],
  lessons: uxUiDesignLessons,
};
