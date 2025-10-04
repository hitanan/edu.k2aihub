import { BaseLessonData } from '@/types/lesson-base';
import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { createModuleMetadata } from '@/utils/seo';

export const metadata = createModuleMetadata(
  'AI trong Đời sống Hàng ngày',
  'Khám phá cách AI có thể trở thành một trợ lý đắc lực trong cuộc sống, từ quản lý công việc, tài chính, sức khỏe đến việc lên kế hoạch du lịch.',
  ['AI đời sống', 'trợ lý AI', 'công nghệ hàng ngày', 'smart home', 'AI cá nhân', 'K2AI'],
  'daily-life',
);

export const dailyLifeLessons: BaseLessonData[] = [
  {
    id: 'personal-assistant',
    videoUrl: null,
    title: 'Trợ lý AI cá nhân',
    description: 'Sử dụng trợ lý AI để quản lý lịch trình và công việc.',
    duration: '45 phút',
    difficulty: 'Cơ bản',
    objectives: ['Cài đặt và sử dụng trợ lý ảo', 'Tự động hóa công việc hàng ngày'],
    realWorldApplications: ['Quản lý lịch họp', 'Đặt báo thức và nhắc nhở'],
    faqs: [
      {
        question: 'Trợ lý AI cá nhân có thực sự hiểu những gì tôi nói không?',
        answer:
          'Có, các trợ lý AI hiện đại như Google Assistant, Siri, hoặc Alexa sử dụng công nghệ xử lý ngôn ngữ tự nhiên (NLP) rất tiên tiến để hiểu ý định và ngữ cảnh trong lời nói của bạn. Chúng ngày càng trở nên thông minh hơn qua mỗi lần tương tác.',
      },
      {
        question: 'Sử dụng trợ lý AI có an toàn về mặt bảo mật thông tin cá nhân không?',
        answer:
          'Các công ty lớn như Google, Apple, Amazon đều có các chính sách bảo mật nghiêm ngặt. Dữ liệu của bạn thường được mã hóa. Tuy nhiên, bạn nên xem lại cài đặt bảo mật của mình và chỉ chia sẻ những thông tin cần thiết để đảm bảo an toàn.',
      },
      {
        question: 'Làm thế nào để trợ lý AI có thể giúp tôi làm việc hiệu quả hơn?',
        answer:
          'Trợ lý AI có thể giúp bạn bằng cách tự động hóa các tác vụ lặp đi lặp lại như đặt lịch hẹn, gửi email ngắn, tạo danh sách công việc, và nhắc nhở bạn về các deadline quan trọng. Điều này giúp bạn giải phóng thời gian để tập trung vào những công việc đòi hỏi sự sáng tạo và tư duy sâu hơn.',
      },
      {
        question: 'Tôi có thể sử dụng trợ lý AI để điều khiển các thiết bị trong nhà không?',
        answer:
          'Chắc chắn rồi. Đây là một trong những ứng dụng phổ biến nhất của trợ lý AI. Bằng cách kết nối với các thiết bị nhà thông minh (smart home), bạn có thể dùng giọng nói để điều khiển đèn, quạt, TV, máy lạnh và nhiều thiết bị khác.',
      },
      {
        question: 'Sự khác biệt giữa Google Assistant, Siri và Alexa là gì?',
        answer:
          'Về cơ bản, chúng đều là trợ lý ảo nhưng được phát triển bởi các công ty khác nhau. Google Assistant (của Google) mạnh về tìm kiếm và tích hợp với các dịch vụ của Google. Siri (của Apple) tích hợp sâu với hệ sinh thái Apple. Alexa (của Amazon) mạnh về mua sắm và điều khiển các thiết bị nhà thông minh.',
      },
      {
        question: 'Làm thế nào để "dạy" trợ lý AI hiểu tôi tốt hơn?',
        answer:
          'Hãy thường xuyên tương tác và sửa lỗi cho nó. Khi trợ lý không hiểu đúng ý bạn, hãy thử diễn đạt lại bằng cách khác. Nhiều trợ lý cũng có phần cài đặt để bạn có thể xem lại lịch sử và giúp nó nhận dạng giọng nói của bạn tốt hơn.',
      },
      {
        question: 'Trợ lý AI có thể hoạt động mà không cần Internet không?',
        answer:
          'Hầu hết các tính năng phức tạp như tìm kiếm thông tin, chơi nhạc trực tuyến đều cần Internet. Tuy nhiên, một số tác vụ cơ bản như đặt báo thức hoặc mở ứng dụng có thể hoạt động ngoại tuyến trên một số thiết bị.',
      },
      {
        question: 'Routine (Thói quen) trong trợ lý AI là gì?',
        answer:
          'Routine là một tính năng cho phép bạn kích hoạt một chuỗi hành động chỉ bằng một câu lệnh duy nhất. Ví dụ, bạn có thể tạo một routine "Chào buổi sáng" để khi bạn nói câu lệnh đó, trợ lý sẽ tự động tắt báo thức, đọc tin tức, thông báo thời tiết và bật bản nhạc yêu thích của bạn.',
      },
      {
        question: 'Tôi có thể sử dụng trợ lý AI bằng tiếng Việt không?',
        answer:
          'Có, Google Assistant và Siri đều hỗ trợ tiếng Việt rất tốt. Bạn có thể giao tiếp, ra lệnh và nhận phản hồi hoàn toàn bằng tiếng Việt, giúp trải nghiệm trở nên tự nhiên và dễ dàng hơn cho người dùng Việt Nam.',
      },
      {
        question: 'Trợ lý AI có thể giúp gì cho người lớn tuổi?',
        answer:
          'Trợ lý AI rất hữu ích cho người lớn tuổi. Họ có thể dùng giọng nói để gọi điện cho người thân mà không cần nhớ số, đặt lịch nhắc uống thuốc, nghe tin tức hoặc sách nói một cách dễ dàng, giúp họ kết nối với thế giới và sống độc lập hơn.',
      },
    ],
  },
  {
    id: 'financial-ai',
    videoUrl: null,
    title: 'Quản lý tài chính với AI',
    description: 'Dùng AI để theo dõi chi tiêu và lập kế hoạch tài chính.',
    duration: '50 phút',
    difficulty: 'Cơ bản',
    objectives: ['Sử dụng ứng dụng quản lý tài chính AI', 'Phân tích thói quen chi tiêu'],
    realWorldApplications: ['Lập ngân sách cá nhân', 'Theo dõi hóa đơn'],
    faqs: [
      {
        question: 'Các ứng dụng tài chính AI hoạt động như thế nào?',
        answer:
          'Các ứng dụng này thường kết nối an toàn với tài khoản ngân hàng của bạn. Sau đó, AI sẽ tự động phân loại các giao dịch (ví dụ: ăn uống, đi lại, mua sắm), giúp bạn có một cái nhìn tổng quan về thói quen chi tiêu mà không cần nhập liệu thủ công.',
      },
      {
        question: 'AI có thể giúp tôi tiết kiệm tiền bằng cách nào?',
        answer:
          'AI có thể phân tích các khoản chi tiêu của bạn và chỉ ra những lĩnh vực bạn đang chi tiêu quá nhiều. Một số ứng dụng còn có thể tìm và đề xuất hủy các gói đăng ký mà bạn không còn sử dụng, hoặc gợi ý các cách để tối ưu hóa hóa đơn hàng tháng.',
      },
      {
        question: 'Liệu AI có thể đưa ra lời khuyên đầu tư không?',
        answer:
          'Có, các "robo-advisor" là những nền tảng đầu tư sử dụng AI để xây dựng và quản lý danh mục đầu tư cho bạn dựa trên mức độ chấp nhận rủi ro và mục tiêu tài chính của bạn. Chúng là một cách tiếp cận đầu tư chi phí thấp và dễ dàng cho người mới bắt đầu.',
      },
      {
        question: 'Sử dụng các ứng dụng này có an toàn không?',
        answer:
          'Các ứng dụng tài chính uy tín sử dụng mã hóa cấp ngân hàng và các biện pháp bảo mật mạnh mẽ để bảo vệ dữ liệu của bạn. Tuy nhiên, hãy luôn chọn các ứng dụng có tên tuổi, đọc kỹ các bài đánh giá và sử dụng mật khẩu mạnh.',
      },
      {
        question: 'Việc kết nối tài khoản ngân hàng với ứng dụng AI có rủi ro gì?',
        answer:
          'Rủi ro chính là nguy cơ rò rỉ dữ liệu. Tuy nhiên, các ứng dụng uy tín thường sử dụng các giao thức kết nối "chỉ đọc" (read-only) thông qua các bên trung gian an toàn như Plaid, nghĩa là ứng dụng chỉ có thể xem chứ không thể thực hiện giao dịch trên tài khoản của bạn.',
      },
      {
        question: 'AI có thể giúp tôi phát hiện gian lận thẻ tín dụng không?',
        answer:
          'Chính các ngân hàng và công ty thẻ tín dụng đang sử dụng AI rất nhiều để làm việc này. AI học các thói quen chi tiêu của bạn và có thể gắn cờ các giao dịch bất thường (ví dụ: một giao dịch lớn ở một quốc gia khác) và thông báo cho bạn ngay lập tức.',
      },
      {
        question: 'Làm thế nào AI có thể giúp tôi cải thiện điểm tín dụng?',
        answer:
          'Một số ứng dụng AI có thể phân tích lịch sử tài chính của bạn và đưa ra các khuyến nghị cụ thể để cải thiện điểm tín dụng, chẳng hạn như đề xuất thanh toán các khoản nợ nào trước, hoặc nhắc nhở bạn về các ngày đến hạn thanh toán để tránh trả chậm.',
      },
      {
        question: 'Robo-advisor có tốt hơn một nhà tư vấn tài chính con người không?',
        answer:
          'Robo-advisor có ưu điểm là chi phí thấp, dễ tiếp cận và loại bỏ cảm xúc ra khỏi quyết định đầu tư. Tuy nhiên, một nhà tư vấn con người có thể hiểu sâu hơn về các tình huống cuộc sống phức tạp của bạn và đưa ra lời khuyên toàn diện hơn, không chỉ về đầu tư. Nhiều người kết hợp cả hai.',
      },
      {
        question: 'AI có thể dự đoán thị trường chứng khoán không?',
        answer:
          'Mặc dù các quỹ đầu tư lớn sử dụng AI để phân tích dữ liệu và tìm kiếm lợi thế, nhưng không có AI nào có thể dự đoán thị trường chứng khoán một cách chính xác và nhất quán. Thị trường bị ảnh hưởng bởi quá nhiều yếu tố bất ngờ. Hãy cẩn thận với bất kỳ ai hứa hẹn điều này.',
      },
      {
        question: 'Tôi có cần phải là chuyên gia tài chính để sử dụng các công cụ này không?',
        answer:
          'Hoàn toàn không. Ưu điểm lớn nhất của các ứng dụng tài chính AI là chúng dân chủ hóa việc quản lý tài chính. Chúng được thiết kế với giao diện trực quan, dễ hiểu để giúp những người không chuyên có thể đưa ra các quyết định tài chính thông minh hơn.',
      },
    ],
  },
  {
    id: 'health-fitness',
    videoUrl: null,
    title: 'Sức khỏe & Fitness AI',
    description: 'Theo dõi sức khỏe và tập luyện với sự hỗ trợ của AI.',
    duration: '40 phút',
    difficulty: 'Cơ bản',
    objectives: ['Sử dụng ứng dụng theo dõi sức khỏe', 'Nhận gợi ý bài tập từ AI'],
    realWorldApplications: ['Theo dõi giấc ngủ', 'Lên kế hoạch tập luyện'],
    faqs: [
      {
        question: 'AI theo dõi giấc ngủ của tôi như thế nào?',
        answer:
          'Các thiết bị đeo như đồng hồ thông minh hoặc nhẫn thông minh sử dụng các cảm biến để theo dõi nhịp tim, chuyển động và nhịp thở của bạn trong khi ngủ. AI sẽ phân tích dữ liệu này để xác định các giai đoạn giấc ngủ (ngủ nông, ngủ sâu, REM) và đưa ra điểm số chất lượng giấc ngủ cùng các khuyến nghị cải thiện.',
      },
      {
        question: 'AI có thể tạo ra một kế hoạch tập luyện cá nhân hóa cho tôi không?',
        answer:
          'Có. Nhiều ứng dụng fitness hiện nay sử dụng AI để tạo ra các kế hoạch tập luyện dựa trên mục tiêu, trình độ thể chất, thời gian bạn có và thậm chí cả các thiết bị bạn có sẵn. AI sẽ điều chỉnh độ khó của bài tập dựa trên phản hồi và tiến trình của bạn.',
      },
      {
        question: 'Làm thế nào AI có thể giúp tôi ăn uống lành mạnh hơn?',
        answer:
          'Các ứng dụng như MyFitnessPal cho phép bạn chụp ảnh bữa ăn và AI sẽ nhận diện các loại thực phẩm để ước tính lượng calo và chất dinh dưỡng. Một số ứng dụng còn có thể đưa ra gợi ý công thức nấu ăn lành mạnh dựa trên sở thích và mục tiêu sức khỏe của bạn.',
      },
      {
        question: 'Các thiết bị theo dõi sức khỏe có chính xác không?',
        answer:
          'Mặc dù không thể chính xác 100% như các thiết bị y tế chuyên dụng, các thiết bị đeo hiện đại ngày càng trở nên chính xác hơn trong việc theo dõi các chỉ số như nhịp tim, số bước chân và lượng calo tiêu thụ. Chúng là công cụ tuyệt vời để theo dõi xu hướng và tạo động lực.',
      },
      {
        question: 'AI có thể phân tích dáng chạy hoặc tư thế tập luyện của tôi không?',
        answer:
          'Có, một số ứng dụng tiên tiến sử dụng camera của điện thoại để phân tích chuyển động của bạn trong thời gian thực. AI có thể đưa ra phản hồi tức thì để giúp bạn sửa lỗi tư thế, tránh chấn thương và tập luyện hiệu quả hơn, giống như có một huấn luyện viên cá nhân ảo.',
      },
      {
        question: 'AI có thể dự đoán nguy cơ mắc bệnh không?',
        answer:
          'Đây là một lĩnh vực đang phát triển rất nhanh. AI có thể phân tích dữ liệu sức khỏe tổng hợp của bạn (nhịp tim khi nghỉ, biến thiên nhịp tim HRV, chất lượng giấc ngủ) để phát hiện các dấu hiệu sớm của stress, kiệt sức hoặc thậm chí là một số bệnh tật, và cảnh báo bạn nên đi khám bác sĩ.',
      },
      {
        question: 'Làm thế nào AI giúp quản lý stress?',
        answer:
          'Nhiều ứng dụng thiền định và sức khỏe tinh thần như Calm hay Headspace sử dụng AI để đề xuất các bài thiền hoặc bài tập thở phù hợp với tâm trạng hiện tại của bạn. Các thiết bị đeo cũng có thể phát hiện mức độ stress dựa trên nhịp tim và nhắc nhở bạn dành thời gian để thư giãn.',
      },
      {
        question: 'Dữ liệu sức khỏe của tôi có được bảo mật không?',
        answer:
          'Dữ liệu sức khỏe là loại thông tin cực kỳ nhạy cảm. Các công ty uy tín như Apple, Google, Garmin có các chính sách bảo mật rất chặt chẽ. Tuy nhiên, bạn nên cẩn thận với các ứng dụng ít tên tuổi và luôn kiểm tra xem bạn đang cấp cho họ những quyền truy cập nào.',
      },
      {
        question: 'AI có thể thay thế bác sĩ không?',
        answer:
          'Không. Các công cụ AI là những trợ lý sức khỏe tuyệt vời, giúp bạn theo dõi, tạo động lực và có ý thức hơn về lối sống. Tuy nhiên, chúng không thể chẩn đoán bệnh. Nếu có bất kỳ vấn đề sức khỏe nào, bạn phải luôn tham khảo ý kiến của bác sĩ hoặc chuyên gia y tế.',
      },
      {
        question: 'AI có thể giúp gì cho người có bệnh mãn tính (ví dụ: tiểu đường)?',
        answer:
          'AI rất hữu ích. Các máy theo dõi đường huyết liên tục (CGM) kết hợp với AI có thể dự đoán xu hướng đường huyết, cảnh báo về nguy cơ hạ hoặc tăng đường huyết, và giúp bệnh nhân điều chỉnh liều lượng insulin hoặc chế độ ăn uống một cách chính xác hơn.',
      },
    ],
  },
  {
    id: 'travel-ai',
    videoUrl: null,
    title: 'Du lịch thông minh với AI',
    description: 'Lên kế hoạch chuyến đi và khám phá địa điểm mới với AI.',
    duration: '35 phút',
    difficulty: 'Cơ bản',
    objectives: ['Sử dụng AI để tìm vé máy bay và khách sạn', 'Khám phá địa điểm du lịch'],
    realWorldApplications: ['Lên kế hoạch du lịch', 'Dịch thuật khi đi du lịch'],
    faqs: [
      {
        question: 'AI giúp tôi tìm vé máy bay giá rẻ như thế nào?',
        answer:
          'Các công cụ như Google Flights hoặc Skyscanner sử dụng AI để phân tích hàng triệu chuyến bay và dự đoán xu hướng giá. Chúng có thể cho bạn biết khi nào là thời điểm tốt nhất để mua vé, hoặc gợi ý các sân bay/ngày bay thay thế để có giá tốt hơn.',
      },
      {
        question: 'Làm thế nào để AI giúp tôi lên kế hoạch cho một chuyến đi?',
        answer:
          'Bạn có thể sử dụng các công cụ như ChatGPT và yêu cầu nó tạo một lịch trình du lịch chi tiết. Ví dụ: "Tạo cho tôi lịch trình 5 ngày ở Đà Lạt, tập trung vào thiên nhiên và cà phê". AI sẽ gợi ý các địa điểm, nhà hàng và thậm chí cả thứ tự di chuyển hợp lý.',
      },
      {
        question: 'Google Maps sử dụng AI như thế nào?',
        answer:
          'Google Maps sử dụng AI để phân tích dữ liệu giao thông thời gian thực từ hàng triệu người dùng để dự đoán thời gian di chuyển và gợi ý tuyến đường nhanh nhất. Tính năng Live View còn sử dụng AI và thực tế tăng cường (AR) để chỉ đường cho bạn trong thế giới thực.',
      },
      {
        question: 'AI có thể giúp gì khi tôi đang ở một quốc gia không nói tiếng Anh?',
        answer:
          'Ứng dụng Google Translate là một cứu cánh. Nó sử dụng AI để dịch văn bản qua camera (ví dụ: dịch thực đơn), dịch giọng nói trong thời gian thực để bạn có thể trò chuyện với người bản xứ, và dịch các đoạn văn bản bạn nhập vào.',
      },
      {
        question: 'AI có thể gợi ý các địa điểm "ẩn" mà ít người biết không?',
        answer:
          'Có. Thay vì chỉ dựa vào các địa điểm nổi tiếng, một số nền tảng AI phân tích các bài đăng trên mạng xã hội, blog du lịch, và các bài đánh giá để tìm ra những "viên ngọc ẩn" (hidden gems) mà chỉ người dân địa phương hoặc những người đi du lịch sành sỏi mới biết.',
      },
      {
        question: 'Làm thế nào AI giúp tôi chọn khách sạn phù hợp?',
        answer:
          'Các trang web đặt phòng như Booking.com sử dụng AI để cá nhân hóa các kết quả tìm kiếm. Dựa trên các lựa chọn trước đây của bạn, AI sẽ ưu tiên hiển thị các khách sạn có phong cách, mức giá và tiện nghi mà bạn có khả năng thích nhất.',
      },
      {
        question: 'AI có thể giúp tôi đóng gói hành lý không?',
        answer:
          'Có, một số ứng dụng du lịch có thể đưa ra danh sách các vật dụng cần đóng gói dựa trên điểm đến, thời gian của chuyến đi và dự báo thời tiết. Chúng sẽ nhắc bạn mang theo áo mưa nếu trời có khả năng mưa, hoặc kem chống nắng nếu trời nắng.',
      },
      {
        question: 'Các hãng hàng không sử dụng AI để làm gì?',
        answer:
          'Họ sử dụng AI cho rất nhiều việc, từ việc tối ưu hóa giá vé (dynamic pricing), dự đoán nhu cầu bay để sắp xếp lịch trình, cho đến việc bảo trì dự đoán (predictive maintenance) để phát hiện các vấn đề tiềm ẩn của máy bay trước khi chúng xảy ra.',
      },
      {
        question: 'AI có thể giúp tôi tránh đám đông khi đi du lịch không?',
        answer:
          'Có. Google Maps có tính năng "Popular times" (Thời gian phổ biến) sử dụng dữ liệu vị trí ẩn danh để cho bạn biết một địa điểm (như bảo tàng, nhà hàng) thường đông đúc vào lúc nào, giúp bạn lên kế hoạch ghé thăm vào những giờ vắng khách hơn.',
      },
      {
        question: 'Trong tương lai, AI sẽ thay đổi ngành du lịch như thế nào?',
        answer:
          'Trong tương lai, AI có thể tạo ra các trải nghiệm du lịch siêu cá nhân hóa. Hãy tưởng tượng một trợ lý AI biết rõ sở thích của bạn, tự động đặt vé, lên lịch trình, và thậm chí điều chỉnh kế hoạch trong thời gian thực dựa trên tâm trạng hoặc thời tiết, tạo ra một chuyến đi hoàn hảo chỉ dành riêng cho bạn.',
      },
    ],
  },
];

export const dailyLifeModuleData: ModuleData = {
  id: K2Module.DailyLife,
  title: 'AI trong Đời sống Hàng ngày',
  description:
    'Khám phá cách AI có thể trở thành một trợ lý đắc lực trong cuộc sống, từ quản lý công việc, tài chính, sức khỏe đến việc lên kế hoạch du lịch.',
  image: 'https://images.unsplash.com/photo-1555421689-491a97320404?w=800&h=800&fit=crop',
  category: 'Ứng dụng AI',
  features: [
    'Biến điện thoại thành trợ lý cá nhân thông minh',
    'Quản lý tài chính cá nhân tự động',
    'Theo dõi sức khỏe và tối ưu hóa lối sống',
    'Lên kế hoạch du lịch thông minh và tiết kiệm',
  ],
  lessons: dailyLifeLessons,
  relatedModules: [K2Module.AIForStudents, K2Module.MentalHealthTech, K2Module.FinancialLiteracy],
};
