import { ModuleData } from '@/types';

export const appliedMathematicsLogicModuleData: ModuleData = {
  id: 'applied-mathematics-logic',
  title: 'Toán Ứng Dụng và Logic',
  subtitle: 'Vận dụng toán học để giải quyết các vấn đề thực tiễn và rèn luyện tư duy logic.',
  description:
    'Module này cung cấp kiến thức về toán ứng dụng trong tài chính, khoa học dữ liệu, và đời sống hàng ngày, đồng thời phát triển kỹ năng suy luận và giải quyết vấn đề một cách logic.',
  image: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d7923?w=1200&h=600&fit=crop',
  color: 'from-blue-500 to-sky-500',
  category: 'Khoa học & Tư duy',
  level: 'Trung học',
  duration: '12 tuần',
  lessons: [
    {
      id: 'logic-co-ban',
      title: 'Logic Mệnh Đề và Vị Từ',
      description: 'Giới thiệu về các khái niệm cơ bản của logic học, bao gồm mệnh đề, các phép toán logic, và vị từ.',
      duration: '45 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Lập trình', 'Luật', 'Tranh luận'],
      objectives: [
        'Hiểu và phân biệt được mệnh đề và câu không phải mệnh đề.',
        'Sử dụng thành thạo các phép toán logic: hội, tuyển, phủ định, kéo theo, tương đương.',
        'Nắm vững khái niệm vị từ, lượng từ phổ dụng và lượng từ tồn tại.',
        'Biết cách phủ định một mệnh đề chứa lượng từ.',
      ],
      faqs: [
        {
          question: 'Mệnh đề là gì?',
          answer: 'Mệnh đề là một câu khẳng định có tính đúng hoặc sai. Một mệnh đề không thể vừa đúng vừa sai.',
        },
        {
          question: 'Phép toán "kéo theo" (implies) hoạt động như thế nào?',
          answer:
            'Mệnh đề "P kéo theo Q" (P ⇒ Q) chỉ sai khi P đúng và Q sai. Trong tất cả các trường hợp khác, nó đều đúng.',
        },
        {
          question: 'Sự khác biệt giữa mệnh đề và vị từ là gì?',
          answer:
            'Mệnh đề là một khẳng định hoàn chỉnh có giá trị đúng/sai. Vị từ là một khẳng định chứa biến, nó chỉ trở thành mệnh đề khi biến đó được gán một giá trị cụ thể hoặc được đi kèm với một lượng từ.',
        },
        {
          question: 'Lượng từ phổ dụng (∀) và lượng từ tồn tại (∃) có ý nghĩa gì?',
          answer:
            'Lượng từ phổ dụng (∀) có nghĩa là "với mọi". Mệnh đề ∀x, P(x) đúng khi P(x) đúng với mọi giá trị của x trong một tập hợp cho trước. Lượng từ tồn tại (∃) có nghĩa là "tồn tại ít nhất một". Mệnh đề ∃x, P(x) đúng khi có ít nhất một giá trị của x làm cho P(x) đúng.',
        },
        {
          question: 'Làm thế nào để phủ định một mệnh đề có lượng từ?',
          answer:
            'Quy tắc rất đơn giản: đổi lượng từ này thành lượng từ kia và phủ định vị từ bên trong. Phủ định của "Với mọi x, P(x)" là "Tồn tại x sao cho không P(x)". Phủ định của "Tồn tại x sao cho P(x)" là "Với mọi x, không P(x)".',
        },
        {
          question: 'Hằng đúng (tautology) và mâu thuẫn (contradiction) là gì?',
          answer:
            'Hằng đúng là một mệnh đề phức hợp luôn luôn đúng bất kể giá trị chân lý của các mệnh đề thành phần (ví dụ: P ∨ ¬P). Mâu thuẫn là một mệnh đề phức hợp luôn luôn sai (ví dụ: P ∧ ¬P).',
        },
        {
          question: 'Logic học có ứng dụng gì trong khoa học máy tính?',
          answer:
            'Logic là nền tảng của khoa học máy tính. Nó được sử dụng trong thiết kế mạch kỹ thuật số (logic gates), lập trình (các câu lệnh điều kiện if-then-else), cơ sở dữ liệu (truy vấn SQL), và trí tuệ nhân tạo (suy luận logic).',
        },
        {
          question: 'Phép tuyển loại trừ (XOR) khác gì với phép tuyển thông thường (OR)?',
          answer:
            '"P OR Q" đúng khi P đúng, hoặc Q đúng, hoặc cả hai cùng đúng. "P XOR Q" chỉ đúng khi P và Q có giá trị chân lý khác nhau (một đúng, một sai).',
        },
        {
          question: 'Một suy luận logic được coi là hợp lệ (valid) khi nào?',
          answer:
            'Một suy luận được coi là hợp lệ nếu và chỉ nếu kết luận của nó phải đúng mỗi khi tất cả các tiền đề (giả thiết) đều đúng. Tính hợp lệ không phụ thuộc vào việc các tiền đề có thực sự đúng trong thực tế hay không, mà chỉ phụ thuộc vào cấu trúc của suy luận.',
        },
        {
          question: 'Bảng chân lý (truth table) được sử dụng để làm gì?',
          answer:
            'Bảng chân lý là một công cụ toán học dùng để xác định giá trị đúng/sai của một mệnh đề phức hợp dựa trên tất cả các khả năng về giá trị đúng/sai của các mệnhDE thành phần. Nó rất hữu ích để kiểm tra xem hai mệnh đề có tương đương logic hay không, hoặc một suy luận có hợp lệ hay không.',
        },
      ],
      quizzes: [
        {
          question: 'Câu nào sau đây là một mệnh đề?',
          options: ['Bạn có khỏe không?', 'Trời hôm nay đẹp quá!', 'Số 5 là một số nguyên tố.', 'Hãy đi ngủ đi.'],
          correctAnswerIndex: 2,
          explanation:
            'Câu "Số 5 là một số nguyên tố." là một khẳng định có tính đúng (đúng trong trường hợp này), do đó nó là một mệnh đề.',
        },
      ],
    },
    {
      id: 'toan-tai-chinh',
      title: 'Toán Tài Chính Cá Nhân',
      description:
        'Ứng dụng các công cụ toán học để quản lý tài chính cá nhân, bao gồm lãi suất, tiết kiệm, và đầu tư.',
      duration: '60 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Quản lý tài chính cá nhân', 'Đầu tư', 'Kinh doanh'],
      objectives: [
        'Hiểu về lãi đơn, lãi kép và cách tính.',
        'Biết cách lập kế hoạch tiết kiệm cho các mục tiêu ngắn hạn và dài hạn.',
        'Phân tích các lựa chọn đầu tư cơ bản.',
        'Tính toán các khoản vay và trả góp.',
      ],
      faqs: [
        {
          question: 'Sự khác biệt giữa lãi đơn và lãi kép là gì?',
          answer:
            'Lãi đơn chỉ tính trên số vốn gốc. Lãi kép được tính trên cả vốn gốc và lãi đã tích lũy từ các kỳ trước, do đó nó giúp tiền của bạn tăng trưởng nhanh hơn.',
        },
        {
          question: 'Tại sao nên bắt đầu tiết kiệm và đầu tư càng sớm càng tốt?',
          answer:
            'Bắt đầu sớm cho phép bạn tận dụng tối đa sức mạnh của lãi kép. Một khoản tiền nhỏ được đầu tư trong thời gian dài có thể tăng trưởng thành một số tiền lớn hơn nhiều so với một khoản tiền lớn được đầu tư trong thời gian ngắn.',
        },
        {
          question: '"Quy tắc 72" là gì và nó được dùng để làm gì?',
          answer:
            'Quy tắc 72 là một công thức đơn giản để ước tính số năm cần thiết để một khoản đầu tư tăng gấp đôi với một mức lãi suất kép cố định. Bạn chỉ cần lấy 72 chia cho lãi suất hàng năm. Ví dụ, với lãi suất 8%/năm, bạn sẽ mất khoảng 72/8 = 9 năm để tiền của mình tăng gấp đôi.',
        },
        {
          question: 'Lạm phát ảnh hưởng đến tiền tiết kiệm của tôi như thế nào?',
          answer:
            'Lạm phát là sự gia tăng mức giá chung của hàng hóa và dịch vụ, làm giảm sức mua của đồng tiền. Nếu lãi suất tiết kiệm của bạn thấp hơn tỷ lệ lạm phát, thì giá trị thực của tiền tiết kiệm của bạn đang giảm đi theo thời gian.',
        },
        {
          question: 'Quỹ khẩn cấp là gì và tôi nên có bao nhiêu tiền trong đó?',
          answer:
            'Quỹ khẩn cấp là một khoản tiền tiết kiệm riêng biệt dùng để chi trả cho các chi phí bất ngờ như mất việc, ốm đau, sửa chữa nhà cửa... Một quy tắc chung là quỹ này nên có đủ tiền để trang trải chi phí sinh hoạt của bạn từ 3 đến 6 tháng.',
        },
        {
          question: 'Đa dạng hóa trong đầu tư có nghĩa là gì?',
          answer:
            'Đa dạng hóa là một chiến lược quản lý rủi ro, có nghĩa là bạn không "bỏ tất cả trứng vào một giỏ". Thay vì chỉ đầu tư vào một loại tài sản (ví dụ: một cổ phiếu), bạn phân bổ tiền của mình vào nhiều loại tài sản khác nhau (cổ phiếu, trái phiếu, bất động sản...) để giảm thiểu tác động tiêu cực nếu một trong số chúng hoạt động không tốt.',
        },
        {
          question: 'Giá trị thời gian của tiền (Time Value of Money) là gì?',
          answer:
            'Đây là một nguyên tắc cơ bản trong tài chính, cho rằng một đồng tiền bạn có hôm nay có giá trị hơn một đồng tiền bạn sẽ nhận được trong tương lai. Điều này là do bạn có thể đầu tư đồng tiền hôm nay để nó sinh lời.',
        },
        {
          question: 'Sự khác biệt giữa thẻ ghi nợ (debit card) và thẻ tín dụng (credit card) là gì?',
          answer:
            'Thẻ ghi nợ trừ tiền trực tiếp từ tài khoản ngân hàng của bạn. Bạn chỉ có thể tiêu số tiền bạn có. Thẻ tín dụng cho phép bạn vay tiền từ ngân hàng để chi tiêu và trả lại sau. Nếu không trả đúng hạn, bạn sẽ phải chịu lãi suất.',
        },
        {
          question: 'Điểm tín dụng (credit score) là gì và tại sao nó quan trọng?',
          answer:
            'Điểm tín dụng là một con số thể hiện mức độ uy tín của bạn trong việc vay và trả nợ. Điểm tín dụng cao giúp bạn dễ dàng được duyệt các khoản vay (như vay mua nhà, mua xe) với lãi suất ưu đãi hơn.',
        },
        {
          question: 'Lãi suất thả nổi và lãi suất cố định khác nhau như thế nào?',
          answer:
            'Lãi suất cố định không thay đổi trong suốt thời hạn của khoản vay. Lãi suất thả nổi có thể thay đổi theo thời gian dựa trên sự biến động của thị trường. Lãi suất cố định mang lại sự ổn định, trong khi lãi suất thả nổi có thể có lợi nếu lãi suất thị trường giảm.',
        },
      ],
      quizzes: [
        {
          question:
            'Nếu bạn gửi 100 triệu đồng với lãi suất 10%/năm theo hình thức lãi kép, sau 2 năm bạn sẽ có bao nhiêu tiền (chưa tính các yếu tố khác)?',
          options: ['120 triệu', '121 triệu', '110 triệu', '122 triệu'],
          correctAnswerIndex: 1,
          explanation: 'Năm 1: 100 * 1.1 = 110 triệu. Năm 2: 110 * 1.1 = 121 triệu. Đây là sức mạnh của lãi kép.',
        },
      ],
    },
    {
      id: 'xac-suat-thong-ke',
      title: 'Xác Suất và Thống Kê Ứng Dụng',
      description:
        'Tìm hiểu cách xác suất và thống kê được sử dụng để phân tích dữ liệu, đưa ra dự đoán và quyết định trong thế giới thực.',
      duration: '60 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Khoa học dữ liệu', 'Y học', 'Kinh tế'],
      objectives: [
        'Nắm vững các quy tắc cơ bản của xác suất.',
        'Hiểu về xác suất có điều kiện và công thức Bayes.',
        'Biết cách thu thập, biểu diễn và phân tích dữ liệu thống kê (trung bình, trung vị, phương sai).',
        'Nhận biết các lỗi ngụy biện thống kê thường gặp.',
      ],
      faqs: [
        {
          question: 'Công thức Bayes có ý nghĩa gì trong thực tế?',
          answer:
            'Công thức Bayes giúp chúng ta cập nhật niềm tin hoặc xác suất về một sự kiện khi có thêm thông tin mới. Nó được ứng dụng rộng rãi trong y học (chẩn đoán bệnh), máy học (bộ lọc spam), và nhiều lĩnh vực khác.',
        },
        {
          question: 'Tại sao cần cẩn thận với các con số thống kê?',
          answer:
            'Thống kê có thể bị diễn giải sai hoặc cố tình bóp méo để phục vụ một mục đích nào đó. Cần xem xét kích thước mẫu, phương pháp thu thập dữ liệu và các yếu tố gây nhiễu để có cái nhìn chính xác.',
        },
        {
          question: 'Sự khác biệt giữa xác suất và thống kê là gì?',
          answer:
            'Một cách nói đơn giản: Xác suất bắt đầu với một mô hình đã biết (ví dụ: một đồng xu công bằng) và dự đoán khả năng xảy ra của các kết quả. Thống kê thì ngược lại, nó bắt đầu với dữ liệu đã thu thập được và cố gắng suy ra mô hình cơ bản là gì.',
        },
        {
          question: 'Xác suất có điều kiện là gì?',
          answer:
            'Xác suất có điều kiện của sự kiện A, ký hiệu P(A|B), là xác suất sự kiện A xảy ra, biết rằng sự kiện B đã xảy ra. Ví dụ: xác suất một người bị bệnh tim, biết rằng người đó hút thuốc.',
        },
        {
          question: 'Sự khác biệt giữa Trung bình (Mean), Trung vị (Median) và Yếu vị (Mode)?',
          answer:
            'Trung bình là tổng tất cả các giá trị chia cho số lượng giá trị. Trung vị là giá trị nằm ở giữa của một tập dữ liệu đã được sắp xếp. Yếu vị là giá trị xuất hiện thường xuyên nhất. Trung vị ít bị ảnh hưởng bởi các giá trị ngoại lệ (outliers) hơn so với trung bình.',
        },
        {
          question: 'Độ lệch chuẩn (Standard Deviation) cho chúng ta biết điều gì?',
          answer:
            'Độ lệch chuẩn là một thước đo mức độ phân tán của dữ liệu so với giá trị trung bình. Độ lệch chuẩn thấp cho thấy các điểm dữ liệu có xu hướng ở gần giá trị trung bình. Độ lệch chuẩn cao cho thấy các điểm dữ liệu trải rộng trên một phạm vi giá trị lớn hơn.',
        },
        {
          question: '"Tương quan không bao hàm nhân quả" (Correlation does not imply causation) nghĩa là gì?',
          answer:
            'Đây là một nguyên tắc quan trọng trong thống kê. Chỉ vì hai sự kiện xảy ra cùng lúc (tương quan) không có nghĩa là sự kiện này gây ra sự kiện kia. Ví dụ, doanh số bán kem và số vụ chết đuối đều tăng vào mùa hè, nhưng không phải ăn kem gây ra chết đuối. Yếu tố thứ ba (thời tiết nóng) là nguyên nhân chung.',
        },
        {
          question: 'Thiên vị chọn mẫu (Sampling Bias) là gì?',
          answer:
            'Thiên vị chọn mẫu xảy ra khi mẫu được chọn để phân tích không đại diện cho toàn bộ tổng thể. Ví dụ, thực hiện một cuộc khảo sát về việc sử dụng internet chỉ qua điện thoại bàn sẽ bỏ qua những người chỉ sử dụng điện thoại di động, dẫn đến kết quả sai lệch.',
        },
        {
          question: 'Luật số lớn (Law of Large Numbers) phát biểu điều gì?',
          answer:
            'Luật số lớn nói rằng khi bạn lặp lại một thí nghiệm một số lần rất lớn, giá trị trung bình của các kết quả thu được sẽ ngày càng tiến gần đến giá trị kỳ vọng (xác suất lý thuyết). Ví dụ, nếu bạn tung đồng xu 10.000 lần, tỷ lệ mặt ngửa sẽ rất gần với 50%.',
        },
        {
          question: 'Giá trị p (p-value) trong kiểm định giả thuyết là gì?',
          answer:
            'Giá trị p là xác suất quan sát được một kết quả ít nhất cũng cực đoan như kết quả thực tế, với giả định rằng giả thuyết không (null hypothesis) là đúng. Một giá trị p nhỏ (thường < 0.05) cho thấy có bằng chứng để bác bỏ giả thuyết không.',
        },
      ],
      quizzes: [
        {
          question: 'Bạn tung một đồng xu công bằng 2 lần. Xác suất để cả hai lần đều ra mặt ngửa là bao nhiêu?',
          options: ['1/2', '1/3', '1/4', '2/3'],
          correctAnswerIndex: 2,
          explanation:
            'Xác suất lần 1 ra ngửa là 1/2. Xác suất lần 2 ra ngửa cũng là 1/2. Vì hai sự kiện độc lập, xác suất để cả hai xảy ra là (1/2) * (1/2) = 1/4.',
        },
      ],
    },
  ],
  features: [
    'Bài học về logic và suy luận',
    'Ứng dụng toán trong tài chính cá nhân',
    'Giới thiệu về xác suất và thống kê',
    'Ví dụ thực tế và bài tập tương tác',
  ],
  prerequisites: ['Kiến thức toán học cơ bản (đại số, phân số)'],
  objectives: [
    'Phát triển tư duy logic và khả năng suy luận.',
    'Áp dụng toán học để giải quyết các vấn đề trong cuộc sống hàng ngày.',
    'Xây dựng nền tảng về quản lý tài chính cá nhân.',
    'Hiểu và phân tích dữ liệu cơ bản bằng thống kê.',
  ],
  careerOutcomes: [
    'Nền tảng cho các ngành phân tích dữ liệu, tài chính, kinh tế.',
    'Kỹ năng giải quyết vấn đề cần thiết cho mọi ngành nghề.',
  ],
  tags: ['toán học', 'logic', 'tài chính', 'thống kê'],
};
