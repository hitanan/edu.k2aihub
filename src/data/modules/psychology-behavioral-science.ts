import { ModuleData } from '@/types';
import { PsychologyLesson } from '@/types/lesson-base';

export type { PsychologyLesson };

const lessons: PsychologyLesson[] = [
  {
    id: 'introduction-to-behavioral-science',
    videoUrl: null,
    title: 'Giới thiệu về Khoa học Hành vi',
    description: 'Tìm hiểu các khái niệm cốt lõi của khoa học hành vi và cách nó định hình quyết định của chúng ta.',
    duration: '45 phút',
    difficulty: 'Cơ bản',
    objectives: [
      'Định nghĩa khoa học hành vi và các lĩnh vực liên quan.',
      'Hiểu về hai hệ thống tư duy (System 1 và System 2).',
      'Nhận biết các thiên kiến nhận thức phổ biến.',
    ],
    realWorldApplications: [
      'Thiết kế website thân thiện với người dùng hơn.',
      'Tạo các chiến dịch marketing hiệu quả hơn.',
      'Cải thiện việc ra quyết định cá nhân.',
    ],
    prerequisites: [],
    exercises: [
      {
        title: 'Nhận diện Hệ thống 1 và 2',
        description:
          'Trong một ngày, hãy ghi lại 3 quyết định bạn đưa ra bằng Hệ thống 1 (nhanh, tự động) và 3 quyết định bằng Hệ thống 2 (chậm, cần nỗ lực). Suy ngẫm về sự khác biệt.',
        difficulty: 'Cơ bản',
        expectedResults: 'Tăng cường nhận thức về các quá trình tư duy của chính bạn.',
      },
    ],
    faqs: [
      {
        question: 'Khoa học hành vi là gì?',
        answer:
          'Là một lĩnh vực liên ngành nghiên cứu về hành vi của con người, kết hợp kiến thức từ tâm lý học, kinh tế học, và khoa học thần kinh để hiểu tại sao chúng ta lại hành động theo những cách nhất định.',
      },
      {
        question: 'Hệ thống 1 và Hệ thống 2 là gì?',
        answer:
          'Đây là mô hình của Daniel Kahneman. Hệ thống 1 là lối tư duy nhanh, tự động, theo cảm tính và thường không cần nỗ lực (ví dụ: 2+2=4). Hệ thống 2 là lối tư duy chậm, đòi hỏi sự tập trung, phân tích và nỗ lực (ví dụ: 17x24=?).',
      },
      {
        question: 'Thiên kiến nhận thức (cognitive bias) là gì?',
        answer:
          'Là những sai lầm có hệ thống trong tư duy, xảy ra khi não bộ của chúng ta cố gắng đơn giản hóa việc xử lý thông tin. Chúng hoạt động như những lối tắt tinh thần nhưng đôi khi dẫn đến những quyết định phi logic.',
      },
      {
        question: 'Tại sao chúng ta lại có thiên kiến nhận thức?',
        answer:
          'Thiên kiến là một sản phẩm phụ của quá trình tiến hóa. Chúng giúp tổ tiên chúng ta đưa ra quyết định nhanh chóng trong các tình huống sinh tồn. Trong thế giới hiện đại, những lối tắt này không phải lúc nào cũng hữu ích.',
      },
      {
        question: 'Làm thế nào để chống lại thiên kiến?',
        answer:
          'Hoàn toàn loại bỏ là không thể, nhưng chúng ta có thể giảm thiểu ảnh hưởng của chúng bằng cách: làm chậm lại quá trình ra quyết định, xem xét các quan điểm trái chiều, và nhận thức được các loại thiên kiến phổ biến.',
      },
      {
        question: 'Kinh tế học hành vi khác gì kinh tế học truyền thống?',
        answer:
          'Kinh tế học truyền thống giả định con người luôn hành động một cách hợp lý để tối đa hóa lợi ích. Kinh tế học hành vi cho rằng con người thường phi lý trí và bị ảnh hưởng bởi các yếu tố tâm lý, xã hội.',
      },
      {
        question: 'Một ví dụ về ứng dụng của khoa học hành vi?',
        answer:
          'Việc đặt các lựa chọn thực phẩm lành mạnh ở vị trí ngang tầm mắt trong căng tin là một ứng dụng. Nó không cấm các lựa chọn khác nhưng "thúc đẩy" mọi người hướng tới lựa chọn tốt hơn cho sức khỏe.',
      },
      {
        question: 'Khoa học hành vi có phải là thao túng không?',
        answer:
          'Nó có thể bị lạm dụng để thao túng. Tuy nhiên, khi được sử dụng một cách có đạo đức, nó là một công cụ mạnh mẽ để giúp mọi người đưa ra những quyết định tốt hơn cho chính họ và cho xã hội.',
      },
      {
        question: 'Lĩnh vực này có liên quan gì đến AI không?',
        answer:
          'Rất liên quan. Hiểu biết về thiên kiến của con người giúp các nhà phát triển AI tạo ra các hệ thống công bằng hơn. Ngược lại, AI cũng có thể được sử dụng để phát hiện và giảm thiểu thiên kiến trong các quyết định của con người.',
      },
      {
        question: 'Tôi có thể tìm hiểu thêm về lĩnh vực này ở đâu?',
        answer:
          'Hãy bắt đầu với cuốn sách "Tư duy nhanh và chậm" (Thinking, Fast and Slow) của Daniel Kahneman và "Cú hích" (Nudge) của Richard Thaler và Cass Sunstein. Đây là hai tác phẩm nền tảng.',
      },
    ],
  },
  {
    id: 'cognitive-biases-heuristics',
    videoUrl: null,
    title: 'Thiên kiến Nhận thức và Quy tắc suy nghiệm',
    description:
      'Đi sâu vào các lối tắt tinh thần và những sai lầm có hệ thống trong tư duy ảnh hưởng đến lựa chọn hàng ngày.',
    duration: '60 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Xác định và giải thích ít nhất 5 thiên kiến nhận thức (ví dụ: mỏ neo, xác nhận).',
      'Phân tích cách các quy tắc suy nghiệm (heuristics) có thể dẫn đến sai lầm.',
      'Áp dụng kiến thức để giảm thiểu ảnh hưởng của thiên kiến trong quyết định.',
    ],
    realWorldApplications: [
      'Tránh các bẫy đầu tư phổ biến.',
      'Thiết kế các thử nghiệm A/B để chống lại thiên kiến xác nhận.',
      'Cải thiện quy trình tuyển dụng để công bằng hơn.',
    ],
    prerequisites: ['Kiến thức từ bài "Giới thiệu về Khoa học Hành vi"'],
    exercises: [
      {
        title: 'Săn tìm thiên kiến',
        description:
          'Đọc một bài báo hoặc xem một bản tin. Cố gắng xác định ít nhất hai thiên kiến nhận thức đang được sử dụng hoặc đang ảnh hưởng đến cách thông tin được trình bày.',
        difficulty: 'Trung bình',
        expectedResults: 'Nâng cao khả năng phát hiện thiên kiến trong các thông điệp truyền thông hàng ngày.',
      },
    ],
    faqs: [
      {
        question: 'Thiên kiến xác nhận (Confirmation Bias) là gì?',
        answer:
          'Là xu hướng tìm kiếm, diễn giải và ghi nhớ thông tin theo cách xác nhận niềm tin hoặc giả thuyết sẵn có của chúng ta, đồng thời bỏ qua các thông tin trái ngược.',
      },
      {
        question: 'Thiên kiến mỏ neo (Anchoring Bias) hoạt động như thế nào?',
        answer:
          'Chúng ta có xu hướng phụ thuộc quá nhiều vào thông tin đầu tiên nhận được (cái "mỏ neo") khi đưa ra quyết định. Ví dụ, giá niêm yết đầu tiên của một sản phẩm sẽ ảnh hưởng lớn đến mức giá bạn sẵn sàng trả.',
      },
      {
        question: 'Quy tắc suy nghiệm về sự sẵn có (Availability Heuristic) là gì?',
        answer:
          'Là xu hướng đánh giá quá cao tầm quan trọng của những thông tin dễ dàng xuất hiện trong tâm trí. Ví dụ, chúng ta thường sợ đi máy bay hơn đi ô tô sau khi nghe tin về một vụ tai nạn máy bay, mặc dù đi ô tô nguy hiểm hơn về mặt thống kê.',
      },
      {
        question: 'Hiệu ứng hào quang (Halo Effect) là gì?',
        answer:
          'Là xu hướng để một ấn tượng tích cực ban đầu về một người, công ty, hoặc sản phẩm ảnh hưởng đến nhận thức tổng thể của chúng ta về họ. Ví dụ, chúng ta có thể cho rằng một người có ngoại hình ưa nhìn cũng thông minh và tốt bụng.',
      },
      {
        question: 'Thiên kiến nhận thức muộn (Hindsight Bias) là gì?',
        answer:
          'Còn được gọi là hiệu ứng "Tôi đã biết mà!", đây là xu hướng nhìn lại một sự kiện và tin rằng chúng ta đã có thể dự đoán được kết quả của nó ngay từ đầu.',
      },
      {
        question: 'Làm thế nào để giảm thiểu thiên kiến xác nhận?',
        answer:
          'Hãy chủ động tìm kiếm những bằng chứng chống lại giả thuyết của bạn. Đặt câu hỏi "Điều gì có thể chứng minh tôi sai?" thay vì chỉ tìm kiếm những gì chứng minh bạn đúng.',
      },
      {
        question: 'Sự khác biệt giữa thiên kiến (bias) và quy tắc suy nghiệm (heuristic) là gì?',
        answer:
          'Quy tắc suy nghiệm là những "quy tắc ngón tay cái" hay lối tắt tinh thần giúp chúng ta ra quyết định nhanh. Thiên kiến thường là kết quả tiêu cực hoặc sai lầm có hệ thống gây ra bởi việc áp dụng các quy tắc suy nghiệm đó một cách không phù hợp.',
      },
      {
        question: 'Thiên kiến kẻ sống sót (Survivorship Bias) là gì?',
        answer:
          'Là lỗi logic khi tập trung vào những người hoặc vật "sống sót" qua một quá trình và vô tình bỏ qua những người hoặc vật đã thất bại. Ví dụ, chỉ nghiên cứu các công ty thành công để tìm bí quyết kinh doanh mà bỏ qua hàng ngàn công ty đã phá sản.',
      },
      {
        question: 'Hiệu ứng Dunning-Kruger là gì?',
        answer:
          'Là một thiên kiến nhận thức trong đó những người có năng lực thấp ở một lĩnh vực nào đó lại đánh giá quá cao khả năng của chính họ. Ngược lại, những người có năng lực cao lại có xu hướng đánh giá thấp khả năng của mình.',
      },
      {
        question: 'Thiên kiến tiêu cực (Negativity Bias) là gì?',
        answer:
          'Là xu hướng của con người bị ảnh hưởng mạnh mẽ hơn bởi những trải nghiệm tiêu cực so với những trải nghiệm tích cực tương đương. Một lời chỉ trích thường có tác động lớn hơn một lời khen.',
      },
    ],
  },
  {
    id: 'behavioral-economics-nudging',
    videoUrl: null,
    title: 'Kinh tế học Hành vi và Cú hích',
    description:
      'Khám phá cách các yếu tố tâm lý, xã hội và cảm xúc ảnh hưởng đến quyết định kinh tế và cách "cú hích" có thể thay đổi hành vi.',
    duration: '75 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Hiểu sự khác biệt giữa kinh tế học cổ điển và kinh tế học hành vi.',
      'Học về lý thuyết triển vọng (prospect theory).',
      'Thiết kế các "cú hích" (nudges) đơn giản để khuyến khích hành vi tích cực.',
    ],
    realWorldApplications: [
      'Tăng tỷ lệ người dân tham gia tiết kiệm hưu trí.',
      'Khuyến khích lựa chọn thực phẩm lành mạnh trong căng tin.',
      'Thiết kế mặc định thông minh để tăng cường an toàn.',
    ],
    prerequisites: ['Kiến thức cơ bản về kinh tế và tâm lý học.'],
    exercises: [
      {
        title: 'Thiết kế một "Cú hích"',
        description:
          'Chọn một hành vi tích cực bạn muốn khuyến khích (ví dụ: uống nhiều nước hơn, đi cầu thang bộ thay vì thang máy). Thiết kế một "cú hích" đơn giản để thay đổi môi trường và làm cho hành vi đó dễ thực hiện hơn.',
        difficulty: 'Trung bình',
        expectedResults: 'Hiểu được quy trình tư duy đằng sau việc thiết kế can thiệp hành vi.',
      },
    ],
    faqs: [
      {
        question: 'Cú hích (Nudge) là gì?',
        answer:
          'Là bất kỳ khía cạnh nào của kiến trúc lựa chọn (choice architecture) làm thay đổi hành vi của mọi người một cách có thể dự đoán được mà không cấm bất kỳ lựa chọn nào hoặc thay đổi đáng kể các ưu đãi kinh tế của họ. Một cú hích phải dễ dàng và rẻ tiền để tránh.',
      },
      {
        question: 'Lý thuyết triển vọng (Prospect Theory) nói về điều gì?',
        answer:
          'Lý thuyết này của Kahneman và Tversky mô tả cách mọi người đưa ra quyết định giữa các lựa chọn có rủi ro. Nó chỉ ra hai điều chính: 1) Con người cảm thấy nỗi đau mất mát mạnh mẽ hơn niềm vui khi được lợi tương đương (loss aversion). 2) Con người đánh giá kết quả dựa trên một điểm tham chiếu, chứ không phải giá trị tuyệt đối.',
      },
      {
        question: 'Sợ mất mát (Loss Aversion) là gì?',
        answer:
          'Là xu hướng tâm lý cảm thấy tác động của một sự mất mát lớn hơn khoảng hai lần so với tác động của một sự được lợi tương đương. Mất 100.000 VNĐ sẽ khiến bạn buồn hơn là niềm vui khi tìm thấy 100.000 VNĐ.',
      },
      {
        question: 'Hiệu ứng sở hữu (Endowment Effect) là gì?',
        answer:
          'Là xu hướng con người định giá một món đồ mà họ sở hữu cao hơn nhiều so với giá trị thị trường của nó. Một khi bạn sở hữu thứ gì đó, việc từ bỏ nó cảm thấy như một sự mất mát.',
      },
      {
        question: 'Kiến trúc lựa chọn (Choice Architecture) là gì?',
        answer:
          'Là việc thiết kế bối cảnh mà trong đó mọi người đưa ra quyết định. Mọi thứ từ cách các món ăn được sắp xếp trong căng tin đến cách các tùy chọn được trình bày trên một trang web đều là kiến trúc lựa chọn.',
      },
      {
        question: 'Tùy chọn mặc định (Default Option) tại sao lại mạnh mẽ như vậy?',
        answer:
          'Con người có xu hướng gắn bó với tùy chọn mặc định vì nó đòi hỏi ít nỗ lực nhất. Việc thiết kế một tùy chọn mặc định tốt (ví dụ: tự động đăng ký chương trình tiết kiệm hưu trí) là một trong những cú hích hiệu quả nhất.',
      },
      {
        question: '"Tự do lựa chọn theo chủ nghĩa gia trưởng" (Libertarian Paternalism) là gì?',
        answer:
          'Đây là triết lý đằng sau "Cú hích". "Libertarian" (tự do) có nghĩa là mọi người vẫn hoàn toàn tự do lựa chọn. "Paternalism" (gia trưởng) có nghĩa là kiến trúc sư lựa chọn cố gắng ảnh hưởng đến hành vi của mọi người để làm cho cuộc sống của họ tốt hơn. Nói cách khác, đó là "giúp mọi người tự giúp mình".',
      },
      {
        question: 'Làm thế nào để một công ty có thể sử dụng "cú hích"?',
        answer:
          'Một công ty thương mại điện tử có thể hiển thị "Sản phẩm bán chạy nhất" (bằng chứng xã hội), sử dụng tùy chọn mặc định cho việc giao hàng thân thiện với môi trường, hoặc gửi lời nhắc về các mặt hàng còn lại trong giỏ hàng.',
      },
      {
        question: 'Có phải tất cả các "cú hích" đều tốt không?',
        answer:
          'Không. Những kỹ thuật tương tự có thể được sử dụng cho mục đích xấu, được gọi là "bùn" (sludge), làm cho các hành vi có lợi cho công ty nhưng bất lợi cho người tiêu dùng trở nên dễ dàng hơn (ví dụ: quy trình hủy đăng ký dịch vụ rất phức tạp).',
      },
      {
        question: 'EAST framework là gì?',
        answer:
          'Là một bộ khung đơn giản để tạo ra các cú hích hiệu quả, được phát triển bởi Behavioural Insights Team. Để khuyến khích một hành vi, hãy làm cho nó Dễ dàng (Easy), Hấp dẫn (Attractive), Mang tính Xã hội (Social), và Đúng lúc (Timely).',
      },
    ],
  },
  {
    id: 'psychology-in-ux-design',
    videoUrl: null,
    title: 'Tâm lý học trong Thiết kế UX/UI',
    description: 'Áp dụng các nguyên tắc tâm lý học để tạo ra các sản phẩm số hấp dẫn, dễ sử dụng và có ý nghĩa hơn.',
    duration: '60 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Áp dụng các định luật Gestalt về nhận thức thị giác.',
      'Sử dụng mô hình Fogg để thúc đẩy hành vi người dùng.',
      'Thiết kế luồng người dùng dựa trên các mô hình tâm lý.',
    ],
    realWorldApplications: [
      'Tối ưu hóa quy trình thanh toán của một trang web e-commerce.',
      'Thiết kế một ứng dụng di động gây nghiện (một cách có đạo đức).',
      'Cải thiện khả năng sử dụng của một phần mềm phức tạp.',
    ],
    prerequisites: ['Kiến thức cơ bản về thiết kế UX/UI.'],
    exercises: [
      {
        title: 'Phân tích UX của một ứng dụng',
        description:
          'Chọn một ứng dụng bạn thường dùng. Phân tích nó dựa trên các nguyên tắc tâm lý học đã học. Nó sử dụng những định luật Gestalt nào? Nó có tạo ra vòng lặp thói quen không? Ghi lại những phát hiện của bạn.',
        difficulty: 'Nâng cao',
        expectedResults: 'Khả năng nhìn nhận các sản phẩm số qua lăng kính của tâm lý học người dùng.',
      },
    ],
    faqs: [
      {
        question: 'Các định luật Gestalt là gì?',
        answer:
          'Là một tập hợp các nguyên tắc về nhận thức thị giác, mô tả cách con người có xu hướng tổ chức các yếu tố thị giác thành các nhóm hoặc một tổng thể thống nhất. Các nguyên tắc chính bao gồm: Gần gũi, Tương đồng, Bao đóng, Liên tục và Hình-Nền.',
      },
      {
        question: "Định luật Hick (Hick's Law) nói gì?",
        answer:
          'Định luật Hick nói rằng thời gian cần thiết để đưa ra quyết định tăng lên khi số lượng và độ phức tạp của các lựa chọn tăng lên. Trong thiết kế UX, điều này có nghĩa là bạn nên giảm thiểu số lượng lựa chọn để giúp người dùng không bị quá tải.',
      },
      {
        question: 'Mô hình Hành vi Fogg (Fogg Behavior Model) là gì?',
        answer:
          'Mô hình này của BJ Fogg nói rằng một hành vi xảy ra khi có ba yếu tố cùng lúc: Động lực (Motivation), Khả năng (Ability), và Tác nhân kích hoạt (Prompt). Công thức là B = MAP. Để tăng khả năng một hành vi xảy ra, hãy làm cho nó dễ thực hiện hơn.',
      },
      {
        question: 'Vòng lặp thói quen (Habit Loop) trong thiết kế sản phẩm là gì?',
        answer:
          'Được mô tả bởi Nir Eyal trong sách "Hooked", vòng lặp này gồm 4 bước: Tác nhân kích hoạt (Trigger), Hành động (Action), Phần thưởng thay đổi (Variable Reward), và Sự đầu tư (Investment). Các sản phẩm gây nghiện như mạng xã hội đều sử dụng vòng lặp này.',
      },
      {
        question: 'Tại sao "phần thưởng thay đổi" lại mạnh mẽ như vậy?',
        answer:
          'Bộ não của chúng ta được lập trình để tìm kiếm phần thưởng. Khi phần thưởng không thể đoán trước (lúc có lúc không, giá trị khác nhau), nó sẽ kích hoạt hệ thống dopamine mạnh mẽ hơn, khiến chúng ta liên tục quay lại để kiểm tra. Đây là cơ chế đằng sau máy đánh bạc và việc cuộn newfeed vô tận.',
      },
      {
        question: 'Tâm lý học màu sắc có thực sự hiệu quả trong thiết kế UI không?',
        answer:
          'Có, nhưng nó phức tạp hơn là "màu xanh lam = tin tưởng". Màu sắc có thể gợi lên những cảm xúc khác nhau, nhưng ý nghĩa của chúng bị ảnh hưởng rất nhiều bởi văn hóa, kinh nghiệm cá nhân và bối cảnh. Điều quan trọng hơn là sử dụng màu sắc để tạo ra sự tương phản, phân cấp thị giác và tính nhất quán của thương hiệu.',
      },
      {
        question: "Định luật Fitts (Fitts's Law) là gì?",
        answer:
          'Định luật này liên quan đến chuyển động của con người, nói rằng thời gian để di chuyển đến một mục tiêu phụ thuộc vào khoảng cách và kích thước của mục tiêu đó. Trong UI, điều này có nghĩa là các nút bấm quan trọng (như "Thêm vào giỏ hàng") nên có kích thước lớn và đặt ở vị trí dễ tiếp cận.',
      },
      {
        question: 'Mô hình tâm trí (Mental Model) của người dùng là gì?',
        answer:
          'Là niềm tin của người dùng về cách một hệ thống hoạt động. Một thiết kế tốt là khi mô hình khái niệm của sản phẩm khớp với mô hình tâm trí của người dùng. Khi có sự không khớp, người dùng sẽ cảm thấy bối rối và khó sử dụng.',
      },
      {
        question: 'Hiệu ứng Von Restorff (hay hiệu ứng cô lập) là gì?',
        answer:
          'Là xu hướng ghi nhớ một mục tiêu tốt hơn nếu nó nổi bật so với những mục tiêu còn lại. Trong thiết kế, bạn có thể sử dụng hiệu ứng này để làm cho nút kêu gọi hành động (Call to Action) chính trở nên khác biệt về màu sắc, kích thước hoặc hình dạng.',
      },
      {
        question: 'Làm thế nào để áp dụng tâm lý học một cách có đạo đức trong thiết kế?',
        answer:
          'Hãy tự hỏi: "Thiết kế này có thực sự giúp người dùng không? Hay nó chỉ đang lợi dụng các điểm yếu tâm lý của họ để phục vụ mục tiêu kinh doanh?". Hãy minh bạch, tôn trọng người dùng và luôn đặt lợi ích lâu dài của họ lên hàng đầu.',
      },
    ],
  },
  {
    id: 'social-influence-persuasion',
    videoUrl: 'https://www.youtube.com/watch?v=crvr9jDoye4',
    title: 'Ảnh hưởng Xã hội và Thuyết phục',
    description:
      'Nghiên cứu các cơ chế của sự tuân thủ, sự đồng thuận và quyền lực xã hội để hiểu và áp dụng nghệ thuật thuyết phục.',
    duration: '75 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Phân tích 6 nguyên tắc thuyết phục của Cialdini.',
      'Hiểu về các thí nghiệm kinh điển của Asch và Milgram.',
      'Xây dựng các chiến lược thuyết phục có đạo đức.',
    ],
    realWorldApplications: [
      'Xây dựng các chiến dịch lan truyền (viral marketing).',
      'Tăng cường sự hợp tác trong một đội nhóm.',
      'Trở thành một nhà lãnh đạo có sức ảnh hưởng lớn hơn.',
    ],
    prerequisites: ['Kiến thức cơ bản về tâm lý học xã hội.'],
    exercises: [
      {
        title: 'Phân tích một quảng cáo',
        description:
          'Tìm một quảng cáo trên TV hoặc YouTube. Phân tích xem nó đang sử dụng những nguyên tắc thuyết phục nào của Cialdini để tác động đến bạn.',
        difficulty: 'Trung bình',
        expectedResults: 'Khả năng nhận diện và phân tích các kỹ thuật thuyết phục trong thực tế.',
      },
    ],
    faqs: [
      {
        question: '6 nguyên tắc thuyết phục của Robert Cialdini là gì?',
        answer:
          'Đó là: 1. Tương hỗ (Reciprocity - cho đi để nhận lại), 2. Cam kết & Nhất quán (Commitment & Consistency - mọi người muốn hành động nhất quán với quyết định trước đó), 3. Bằng chứng xã hội (Social Proof - làm theo số đông), 4. Thiện cảm (Liking - dễ bị thuyết phục bởi người mình thích), 5. Uy quyền (Authority - tuân theo chuyên gia), 6. Khan hiếm (Scarcity - muốn thứ gì đó hơn khi nó có ít).',
      },
      {
        question: 'Bằng chứng xã hội (Social Proof) hoạt động như thế nào?',
        answer:
          'Khi không chắc chắn về cách hành động, chúng ta thường nhìn vào hành vi của người khác để định hướng cho mình. Đó là lý do tại sao các bài đánh giá sản phẩm, số lượng người theo dõi, hay dòng chữ "bán chạy nhất" lại rất hiệu quả.',
      },
      {
        question: 'Thí nghiệm về sự tuân thủ của Asch cho thấy điều gì?',
        answer:
          'Thí nghiệm này cho thấy áp lực của nhóm có thể mạnh mẽ đến mức nào. Nhiều người tham gia đã chọn một câu trả lời rõ ràng là sai chỉ vì tất cả những người khác trong nhóm (là diễn viên) cũng chọn câu trả lời sai đó.',
      },
      {
        question: 'Thí nghiệm của Milgram về sự vâng lời quyền uy nói lên điều gì?',
        answer:
          'Thí nghiệm gây tranh cãi này cho thấy rằng hầu hết mọi người sẵn sàng tuân theo mệnh lệnh từ một người có uy quyền, ngay cả khi những mệnh lệnh đó đi ngược lại với lương tâm của họ (trong thí nghiệm là gây sốc điện cho người khác).',
      },
      {
        question: 'Kỹ thuật "chân trong cửa" (Foot-in-the-door) là gì?',
        answer:
          'Đây là một kỹ thuật thuyết phục dựa trên nguyên tắc Cam kết & Nhất quán. Bạn bắt đầu bằng một yêu cầu nhỏ, dễ được chấp nhận. Sau khi người đó đã đồng ý, bạn đưa ra một yêu cầu lớn hơn (là yêu cầu bạn thực sự muốn). Họ có xu hướng đồng ý với yêu cầu lớn hơn để hành động nhất quán.',
      },
      {
        question: 'Kỹ thuật "cửa vào mặt" (Door-in-the-face) là gì?',
        answer:
          'Kỹ thuật này dựa trên nguyên tắc Tương hỗ. Bạn bắt đầu bằng một yêu cầu rất lớn và chắc chắn sẽ bị từ chối. Sau khi bị từ chối, bạn "nhượng bộ" bằng cách đưa ra một yêu cầu nhỏ hơn (là yêu cầu bạn thực sự muốn). Người kia cảm thấy có nghĩa vụ phải "nhượng bộ" lại và đồng ý.',
      },
      {
        question: 'Làm thế nào để tăng sự thiện cảm (Liking)?',
        answer:
          'Chúng ta có xu hướng thích những người: giống chúng ta, khen ngợi chúng ta, hợp tác với chúng ta để đạt mục tiêu chung, và có ngoại hình ưa nhìn. Việc tìm ra điểm chung là một cách hiệu quả để xây dựng thiện cảm.',
      },
      {
        question: 'Nguyên tắc khan hiếm (Scarcity) được áp dụng trong marketing như thế nào?',
        answer:
          'Các thông điệp như "Chỉ còn 2 phòng!", "Ưu đãi kết thúc sau 24 giờ", hoặc "Phiên bản giới hạn" đều là những ứng dụng của nguyên tắc khan hiếm. Chúng tạo ra cảm giác cấp bách và sợ bỏ lỡ (FOMO), thúc đẩy hành vi mua hàng.',
      },
      {
        question: 'Sự khác biệt giữa thuyết phục và thao túng là gì?',
        answer:
          'Sự khác biệt nằm ở ý định và sự trung thực. Thuyết phục là việc trình bày lập luận một cách trung thực để dẫn dắt ai đó đến một quyết định cùng có lợi. Thao túng là việc sử dụng sự lừa dối, che giấu thông tin hoặc lợi dụng điểm yếu của người khác để đạt được lợi ích cho riêng mình.',
      },
      {
        question: 'Làm thế nào để chống lại các kỹ thuật thuyết phục không mong muốn?',
        answer:
          'Hãy nhận biết các nguyên tắc này đang được sử dụng. Tự hỏi: "Tôi đồng ý vì bản thân lời đề nghị này tốt, hay vì tôi đang bị ảnh hưởng bởi một kỹ thuật tâm lý nào đó?". Dành thời gian để suy nghĩ và tách biệt cảm xúc ra khỏi quyết định.',
      },
    ],
  },
];

export const psychologyBehavioralScienceModule: ModuleData = {
  id: 'psychology-behavioral-science',
  title: 'Tâm lý học & Khoa học hành vi',
  subtitle: 'Khám phá những bí ẩn đằng sau hành vi con người và ứng dụng các nguyên tắc tâm lý học.',
  description:
    'Khám phá những bí ẩn đằng sau hành vi con người và ứng dụng các nguyên tắc tâm lý học để cải thiện sản phẩm, marketing và tương tác xã hội.',
  image: 'https://images.unsplash.com/photo-1583348898525-42280a39c413?w=1200&h=600&fit=crop',
  tags: [
    'tâm lý học hành vi',
    'khoa học hành vi',
    'tâm lý học người dùng',
    'kinh tế học hành vi',
    'tâm lý học nhận thức',
    'tâm lý học UX',
  ],
  category: 'Khoa học xã hội',
  level: 'Tất cả mức độ',
  duration: '6 tuần',
  lessons: lessons,
  features: [
    'Phân tích các thiên kiến nhận thức phổ biến.',
    'Thiết kế "cú hích" để thay đổi hành vi.',
    'Case study về tâm lý học trong thiết kế UX.',
    'Các thí nghiệm tâm lý học xã hội kinh điển.',
  ],
  prerequisites: ['Không yêu cầu kiến thức nền tảng.'],
  objectives: [
    'Hiểu được các nguyên tắc cơ bản chi phối hành vi và quyết định của con người.',
    'Nhận diện và giảm thiểu ảnh hưởng của các thiên kiến nhận thức trong cuộc sống.',
    'Áp dụng kiến thức tâm lý học để thiết kế sản phẩm và trải nghiệm người dùng tốt hơn.',
    'Nắm vững các kỹ thuật thuyết phục và ảnh hưởng xã hội một cách có đạo đức.',
  ],
  careerOutcomes: [
    'Chuyên viên UX/UI Designer/Researcher có hiểu biết sâu sắc về người dùng.',
    'Chuyên viên Marketing/Product Manager có khả năng xây dựng chiến dịch hiệu quả.',
    'Nhà lãnh đạo có khả năng thấu hiểu và tạo động lực cho đội nhóm.',
    'Cải thiện kỹ năng ra quyết định và tương tác xã hội trong mọi lĩnh vực.',
  ],
  color: 'from-purple-500 to-indigo-600',
};

export const psychologyLessons = lessons;
