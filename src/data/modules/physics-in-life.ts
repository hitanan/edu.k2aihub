import { ModuleData } from '@/types';

export const physicsInLifeModuleData: ModuleData = {
  id: 'physics-in-life',
  title: 'Vật Lý Trong Đời Sống',
  subtitle: 'Khám phá những ứng dụng kỳ diệu của vật lý trong công nghệ, giao thông và thể thao.',
  description:
    'Module này giải thích các nguyên lý vật lý cơ bản thông qua các ví dụ gần gũi, từ chiếc điện thoại thông minh bạn dùng hàng ngày đến các kỹ thuật trong thể thao đỉnh cao.',
  image: 'https://images.unsplash.com/photo-1632696123648-585052d42d79?w=1200&h=600&fit=crop',
  color: 'from-purple-500 to-indigo-500',
  category: 'Khoa học & Công nghệ',
  level: 'Trung học',
  duration: '10 tuần',
  lessons: [
    {
      id: 'vat-ly-trong-cong-nghe',
      title: 'Vật Lý Trong Các Thiết Bị Công Nghệ',
      description:
        'Tìm hiểu nguyên lý vật lý đằng sau hoạt động của điện thoại thông minh, lò vi sóng, và mạng không dây Wi-Fi.',
      duration: '45 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Điện thoại thông minh', 'Lò vi sóng', 'Mạng Wi-Fi', 'Máy tính'],
      objectives: [
        'Hiểu cách màn hình cảm ứng hoạt động dựa trên nguyên lý điện dung.',
        'Giải thích tại sao lò vi sóng có thể làm nóng thức ăn.',
        'Nắm được nguyên tắc truyền và nhận sóng điện từ của Wi-Fi.',
        'Khám phá vật lý bán dẫn trong các con chip máy tính.',
      ],
      faqs: [
        {
          question: 'Màn hình cảm ứng điện dung hoạt động như thế nào?',
          answer:
            'Màn hình được phủ một lớp vật liệu dẫn điện trong suốt. Khi ngón tay bạn (vốn cũng dẫn điện) chạm vào, nó làm thay đổi điện trường tại điểm đó. Mạch điều khiển sẽ phát hiện sự thay đổi này và xác định vị trí của cú chạm.',
        },
        {
          question: 'Tại sao không nên cho vật kim loại vào lò vi sóng?',
          answer:
            'Sóng vi ba trong lò tạo ra dòng điện trong kim loại. Dòng điện này có thể rất lớn, gây ra tia lửa điện, làm hỏng lò và có thể gây cháy nổ.',
        },
        {
            question: 'Nguyên lý vật lý nào giúp GPS xác định vị trí của bạn?',
            answer: 'GPS (Hệ thống Định vị Toàn cầu) hoạt động dựa trên nguyên lý giao thoa sóng vô tuyến. Thiết bị của bạn nhận tín hiệu từ ít nhất 4 vệ tinh. Bằng cách đo chính xác thời gian tín hiệu đi từ mỗi vệ tinh đến thiết bị, nó có thể tính toán khoảng cách đến từng vệ tinh và từ đó xác định vị trí chính xác của bạn trong không gian ba chiều.'
        },
        {
            question: 'Tại sao tai nghe chống ồn chủ động (Active Noise-Cancelling) có thể loại bỏ tiếng ồn?',
            answer: 'Chúng sử dụng nguyên lý giao thoa triệt tiêu. Một micro bên ngoài thu lại âm thanh môi trường. Sau đó, tai nghe tạo ra một sóng âm ngược pha (đỉnh gặp đáy) với sóng âm của tiếng ồn. Khi hai sóng này gặp nhau, chúng triệt tiêu lẫn nhau, và tai bạn chỉ còn nghe thấy âm nhạc.'
        },
        {
            question: 'Vật lý bán dẫn là gì và tại sao nó quan trọng?',
            answer: 'Vật lý bán dẫn nghiên cứu các vật liệu như silicon, có tính chất dẫn điện nằm giữa chất dẫn điện (như đồng) và chất cách điện (như cao su). Bằng cách kiểm soát tính dẫn điện này, chúng ta tạo ra các bóng bán dẫn (transistors) - thành phần cơ bản của mọi con chip máy tính, CPU, và bộ nhớ.'
        },
        {
            question: 'Sóng Wi-Fi và sóng điện thoại có giống nhau không?',
            answer: 'Cả hai đều là sóng điện từ, nhưng chúng hoạt động ở các tần số khác nhau. Sóng Wi-Fi thường hoạt động ở tần số 2.4 GHz và 5 GHz, trong khi sóng di động sử dụng nhiều dải tần số khác nhau. Sự khác biệt về tần số giúp chúng không gây nhiễu lẫn nhau.'
        },
        {
            question: 'Làm thế nào một chiếc tủ lạnh có thể làm mát bên trong?',
            answer: 'Tủ lạnh hoạt động như một máy bơm nhiệt. Nó sử dụng một chất làm lạnh lỏng, cho bay hơi ở bên trong tủ (quá trình bay hơi thu nhiệt, làm lạnh không gian). Sau đó, máy nén sẽ nén khí này lại thành lỏng ở bên ngoài tủ (dàn nóng phía sau), quá trình này tỏa nhiệt ra môi trường. Chu trình cứ thế lặp lại.'
        },
        {
            question: 'Pin lithium-ion trong điện thoại hoạt động như thế nào?',
            answer: 'Pin hoạt động dựa trên sự di chuyển của các ion Lithium. Khi bạn sạc, các ion Lithium di chuyển từ cực dương (cathode) sang cực âm (anode) để lưu trữ năng lượng. Khi bạn sử dụng điện thoại, các ion này di chuyển ngược lại, tạo ra một dòng electron, chính là dòng điện cung cấp cho điện thoại.'
        },
        {
            question: 'Nguyên lý nào đằng sau máy quét vân tay quang học?',
            answer: 'Máy quét quang học hoạt động như một máy ảnh kỹ thuật số. Nó chiếu sáng ngón tay của bạn và chụp lại hình ảnh các đường vân. Các đường vân lồi sẽ phản xạ ánh sáng khác với các rãnh lõm, tạo ra một hình ảnh độc nhất để so sánh và xác thực.'
        },
        {
            question: 'Tại sao bầu trời có màu xanh?',
            answer: 'Điều này là do hiện tượng tán xạ Rayleigh. Ánh sáng mặt trời là hỗn hợp của nhiều màu. Khi đi vào khí quyển, ánh sáng xanh và tím (có bước sóng ngắn) bị các phân tử không khí tán xạ (phân tán) ra mọi hướng nhiều hơn so với ánh sáng đỏ và vàng (có bước sóng dài). Do đó, khi nhìn lên trời, chúng ta thấy màu xanh từ ánh sáng bị tán xạ này.'
        }
      ],
      quizzes: [
        {
          question: 'Lò vi sóng sử dụng loại sóng nào để làm nóng thức ăn?',
          options: ['Sóng radio', 'Sóng vi ba (microwaves)', 'Tia hồng ngoại', 'Tia X'],
          correctAnswerIndex: 1,
          explanation:
            'Lò vi sóng sử dụng sóng vi ba để làm các phân tử nước trong thức ăn dao động mạnh, sinh ra nhiệt và làm nóng thức ăn.',
        },
      ],
    },
    {
      id: 'vat-ly-trong-giao-thong',
      title: 'Vật Lý Giao Thông và An Toàn',
      description:
        'Phân tích các lực tác động lên một chiếc ô tô, nguyên lý hoạt động của túi khí và tầm quan trọng của quán tính trong an toàn giao thông.',
      duration: '45 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Túi khí ô tô', 'Dây an toàn', 'Hệ thống phanh ABS', 'An toàn giao thông'],
      objectives: [
        'Áp dụng các định luật Newton để phân tích chuyển động của xe.',
        'Hiểu vai trò của lực ma sát trong việc phanh xe và vào cua.',
        'Giải thích nguyên lý hoạt động của túi khí và dây an toàn dựa trên khái niệm quán tính và xung lượng.',
        'Phân tích các yếu tố vật lý ảnh hưởng đến an toàn khi tham gia giao thông.',
      ],
      faqs: [
        {
          question: 'Tại sao chúng ta bị "nhào" về phía trước khi xe phanh gấp?',
          answer:
            'Đó là do quán tính. Cơ thể bạn có xu hướng duy trì chuyển động thẳng đều về phía trước. Khi xe đột ngột dừng lại, cơ thể bạn vẫn tiếp tục lao về phía trước cho đến khi bị dây an toàn hoặc các bộ phận khác của xe cản lại.',
        },
        {
          question: 'Túi khí hoạt động như thế nào?',
          answer:
            'Khi có va chạm mạnh, cảm biến sẽ kích hoạt một phản ứng hóa học cực nhanh, tạo ra một lượng lớn khí (thường là Nitơ) để làm phồng túi khí. Túi khí phồng lên giúp làm tăng thời gian va chạm của người lái với vô lăng, từ đó làm giảm lực tác động lên người, giảm thiểu chấn thương.',
        },
        {
            question: 'Hệ thống phanh ABS (Anti-lock Braking System) hoạt động ra sao?',
            answer: 'Khi bạn phanh gấp, ABS ngăn không cho bánh xe bị bó cứng (ngừng quay hoàn toàn). Thay vào đó, nó liên tục bóp và nhả phanh hàng chục lần mỗi giây. Điều này giúp bánh xe vẫn có thể lăn một chút, cho phép người lái duy trì khả năng điều khiển hướng xe và tránh bị trượt.'
        },
        {
            question: 'Tại sao lốp xe cần có gai (vân lốp)?',
            answer: 'Gai lốp có hai vai trò chính: 1. Tăng ma sát nghỉ giữa lốp và mặt đường, giúp xe bám đường tốt hơn. 2. Quan trọng hơn, các rãnh gai giúp thoát nước khi đi trên đường ướt, ngăn ngừa hiện tượng "trượt nước" (hydroplaning) khi lốp xe mất hoàn toàn tiếp xúc với mặt đường.'
        },
        {
            question: 'Lực cản không khí ảnh hưởng đến xe như thế nào?',
            answer: 'Lực cản không khí là lực cản mà không khí tác động lên xe khi nó di chuyển. Lực này tăng rất nhanh khi tốc độ tăng. Các nhà thiết kế ô tô cố gắng tạo ra hình dạng khí động học (aerodynamic) để giảm lực cản này, giúp xe tiết kiệm nhiên liệu hơn và đạt tốc độ cao hơn.'
        },
        {
            question: 'Tại sao xe đua thường rất thấp và có cánh gió phía sau?',
            answer: 'Thiết kế thấp giúp hạ thấp trọng tâm, tăng sự ổn định khi vào cua. Cánh gió phía sau hoạt động ngược lại với cánh máy bay: nó tạo ra một lực ép xuống (downforce), giúp tăng độ bám đường cho bánh sau, cho phép xe vào cua ở tốc độ cao hơn mà không bị trượt.'
        },
        {
            question: 'Động cơ đốt trong chuyển hóa năng lượng như thế nào?',
            answer: 'Động cơ đốt trong chuyển hóa hóa năng (từ xăng, dầu) thành nhiệt năng (thông qua việc đốt cháy nhiên liệu) và sau đó thành cơ năng. Vụ nổ trong xi-lanh đẩy piston di chuyển, làm quay trục khuỷu và cuối cùng truyền động đến các bánh xe.'
        },
        {
            question: 'Tại sao đi xe đạp lên dốc lại mệt?',
            answer: 'Khi đi lên dốc, ngoài việc phải thắng lực ma sát và lực cản không khí, bạn còn phải tác dụng một lực để thắng thành phần của trọng lực kéo xe xuống dốc. Công mà bạn thực hiện được dùng để tăng thế năng hấp dẫn của bạn và chiếc xe.'
        },
        {
            question: 'Vùng biến dạng (crumple zone) trên ô tô có tác dụng gì?',
            answer: 'Là các vùng ở đầu và đuôi xe được thiết kế để bị móp méo, biến dạng một cách có kiểm soát khi xảy ra va chạm. Việc biến dạng này giúp kéo dài thời gian va chạm, làm giảm lực tác động truyền vào khoang hành khách, bảo vệ người ngồi bên trong.'
        },
        {
            question: 'Tại sao tàu hỏa cần một quãng đường rất dài để dừng lại?',
            answer: 'Do khối lượng của tàu hỏa cực kỳ lớn, dẫn đến quán tính và động lượng của nó cũng rất lớn. Mặc dù lực phanh lớn, nhưng cần một xung lượng lực (lực nhân với thời gian) rất lớn để triệt tiêu động lượng này, điều đó đòi hỏi một khoảng thời gian và quãng đường đáng kể.'
        }
      ],
      quizzes: [
        {
          question: 'Khái niệm vật lý nào giải thích rõ nhất vai trò của dây an toàn?',
          options: ['Lực hấp dẫn', 'Năng lượng', 'Quán tính', 'Điện tích'],
          correctAnswerIndex: 2,
          explanation:
            'Dây an toàn giúp khắc phục quán tính của cơ thể, giữ cho bạn không bị lao về phía trước khi xe dừng đột ngột.',
        },
      ],
    },
    {
      id: 'vat-ly-trong-the-thao',
      title: 'Vật Lý Trong Thể Thao',
      description:
        'Khám phá cách các vận động viên tận dụng nguyên lý vật lý để đạt được thành tích cao, từ cú sút xoáy của cầu thủ bóng đá đến kỹ thuật nhảy cao.',
      duration: '50 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Bóng đá', 'Bóng rổ', 'Trượt băng nghệ thuật', 'Nhảy sào'],
      objectives: [
        'Hiểu về hiệu ứng Magnus và ứng dụng trong các cú sút xoáy (bóng đá, tennis).',
        'Phân tích chuyển động ném xiên trong các môn như bóng rổ, ném lao.',
        'Tìm hiểu về nguyên lý bảo toàn mô men động lượng trong các môn như trượt băng nghệ thuật, nhảy cầu.',
        'Phân tích sự chuyển hóa năng lượng trong môn nhảy sào.',
      ],
      faqs: [
        {
          question: 'Tại sao quả bóng lại bay xoáy (hiệu ứng Magnus)?',
          answer:
            'Khi một quả bóng quay tròn trong không khí, nó kéo theo một lớp không khí quay cùng. Một bên của quả bóng, hướng quay cùng chiều với dòng không khí đi tới, sẽ có tốc độ không khí cao hơn và áp suất thấp hơn. Bên còn lại có tốc độ không khí thấp hơn và áp suất cao hơn. Sự chênh lệch áp suất này tạo ra một lực đẩy quả bóng theo đường cong.',
        },
        {
          question: 'Làm thế nào vận động viên trượt băng có thể quay nhanh hơn bằng cách co tay lại?',
          answer:
            'Đây là nguyên lý bảo toàn mô men động lượng. Khi co tay lại, bán kính quay của cơ thể giảm đi. Để mô men động lượng (tích của tốc độ góc và mô men quán tính) được bảo toàn, tốc độ góc phải tăng lên, tức là vận động viên sẽ quay nhanh hơn.',
        },
        {
            question: 'Trong môn nhảy sào, năng lượng được chuyển hóa như thế nào?',
            answer: 'Quá trình này là một chuỗi chuyển hóa năng lượng ngoạn mục: 1. Động năng của vận động viên khi chạy lấy đà. 2. Chuyển thành thế năng đàn hồi khi cây sào bị uốn cong. 3. Thế năng đàn hồi của sào chuyển lại thành động năng và thế năng hấp dẫn, đẩy vận động viên lên cao.'
        },
        {
            question: 'Tại sao vận động viên nhảy cao thường uốn cong người theo kiểu "Fosbury Flop"?',
            answer: 'Kỹ thuật này cho phép trọng tâm của vận động viên có thể đi bên dưới xà ngang trong khi cơ thể của họ lại ở bên trên. Bằng cách uốn cong người, họ có thể vượt qua xà ở một độ cao lớn hơn so với việc giữ cơ thể thẳng.'
        },
        {
            question: 'Góc ném lý tưởng để một vật bay xa nhất là bao nhiêu (bỏ qua sức cản không khí)?',
            answer: 'Về mặt lý thuyết, góc ném 45 độ sẽ cho tầm bay xa nhất. Tuy nhiên, trong thực tế (ví dụ như ném lao, đẩy tạ), góc ném tối ưu thường thấp hơn một chút do ảnh hưởng của sức cản không khí và độ cao ban đầu của vật khi được ném ra.'
        },
        {
            question: 'Tại sao kình ngư cạo lông trên cơ thể?',
            answer: 'Để giảm lực cản của nước. Bề mặt da nhẵn mịn giúp giảm ma sát và lực cản dạng (form drag), cho phép kình ngư lướt đi trong nước hiệu quả hơn một chút. Trong bơi lội đỉnh cao, mỗi phần trăm giây đều quan trọng.'
        },
        {
            question: 'Nguyên lý "action-reaction" (hành động-phản ứng) của Newton thể hiện trong bơi lội như thế nào?',
            answer: 'Khi một kình ngư quạt tay và đạp chân về phía sau (hành động), nước sẽ đẩy họ về phía trước (phản ứng). Lực đẩy này chính là thứ giúp họ di chuyển trong nước.'
        },
        {
            question: 'Tại sao bóng rổ lại nảy?',
            answer: 'Khi quả bóng chạm sàn, nó bị biến dạng và tích trữ thế năng đàn hồi. Sau đó, quả bóng nhanh chóng trở lại hình dạng ban đầu, chuyển thế năng đàn hồi thành động năng, đẩy nó nảy lên. Một phần năng lượng bị mất đi dưới dạng nhiệt và âm thanh, nên bóng không bao giờ nảy lại được độ cao ban đầu.'
        },
        {
            question: 'Điểm ngọt (sweet spot) trên vợt tennis hoặc gậy bóng chày là gì?',
            answer: 'Đó là một khu vực trên vợt/gậy mà khi bóng va chạm vào đó, nó sẽ truyền ít rung động nhất đến tay người chơi và truyền năng lượng cho quả bóng một cách hiệu quả nhất. Về mặt vật lý, nó liên quan đến các điểm nút dao động và trung tâm bộ gõ (center of percussion).'
        },
        {
            question: 'Tại sao các vận động viên chạy nước rút lại sử dụng bàn đạp xuất phát (starting blocks)?',
            answer: 'Bàn đạp xuất phát cho phép vận động viên tạo ra một lực đẩy ban đầu lớn hơn nhiều so với việc chỉ đạp trên mặt đất. Theo định luật thứ ba của Newton, lực mà vận động viên đẩy vào bàn đạp sẽ tạo ra một phản lực tương đương đẩy họ về phía trước, giúp họ tăng tốc nhanh hơn ở những mét đầu tiên.'
        }
      ],
      quizzes: [
        {
          question: 'Hiệu ứng Magnus giải thích hiện tượng nào trong thể thao?',
          options: [
            'Vận động viên chạy nhanh hơn khi có gió sau lưng',
            'Quả bóng đá bay theo đường cong khi được sút xoáy',
            'Vận động viên nhảy sào có thể vượt qua xà',
            'Bóng rổ nảy cao hơn trên sàn cứng',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Hiệu ứng Magnus là nguyên lý vật lý giải thích tại sao các vật thể quay tròn khi di chuyển trong không khí lại bị lệch quỹ đạo, tạo ra các đường bay cong.',
        },
      ],
    },
  ],
  features: [
    'Giải thích vật lý qua các ví dụ thực tế',
    'Phân tích công nghệ, giao thông, thể thao',
    'Thí nghiệm ảo và mô phỏng tương tác',
    'Câu đố vui và câu hỏi thử thách',
  ],
  prerequisites: ['Kiến thức vật lý cơ bản (cơ học, điện học)'],
  objectives: [
    'Nhận thấy sự hiện diện của vật lý ở khắp mọi nơi.',
    'Hiểu nguyên lý hoạt động của các thiết bị và hiện tượng quen thuộc.',
    'Áp dụng tư duy vật lý để phân tích và giải quyết vấn đề.',
    'Tăng cường ý thức về an toàn dựa trên hiểu biết vật lý.',
  ],
  careerOutcomes: [
    'Nền tảng cho các ngành kỹ thuật, công nghệ, thiết kế sản phẩm.',
    'Tư duy phân tích hữu ích cho các ngành khoa học thể thao, phân tích dữ liệu.',
  ],
  tags: ['vật lý', 'công nghệ', 'giao thông', 'thể thao'],
};
