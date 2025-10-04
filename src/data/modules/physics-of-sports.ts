import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

export interface PhysicsOfSportsLesson extends BaseLessonData {
  keyConcept: string;
}

const lessons: PhysicsOfSportsLesson[] = [
  {
    id: 'mechanics-of-motion',
    videoUrl: null,
    title: 'Cơ học của Chuyển động trong Thể thao',
    description: 'Phân tích các định luật Newton về chuyển động qua các ví dụ trong bóng đá, bóng rổ và điền kinh.',
    duration: '60 phút',
    difficulty: 'Cơ bản',
    keyConcept: 'Định luật Newton',
    objectives: [
      'Áp dụng 3 định luật Newton vào các tình huống thể thao.',
      'Phân tích lực, khối lượng và gia tốc trong các môn thể thao.',
      'Hiểu khái niệm về xung lượng và động lượng.',
    ],
    realWorldApplications: [
      'Tính toán lực cần thiết để đá một quả bóng bay xa.',
      'Phân tích tại sao VĐV nhảy cao lại cong người khi nhảy.',
    ],
    prerequisites: [],
    exercises: [],
    faqs: [
      {
        question: 'Định luật Newton thứ nhất (Luật Quán tính) thể hiện trong thể thao như thế nào?',
        answer:
          'Một quả bóng đá sẽ đứng yên cho đến khi bị đá (lực tác động). Một vận động viên trượt băng sẽ tiếp tục chuyển động thẳng đều cho đến khi lực ma sát hoặc lực cản của không khí làm họ chậm lại. Đây chính là quán tính.',
      },
      {
        question: 'Làm thế nào để áp dụng Định luật Newton thứ hai (F=ma) trong việc ném bóng?',
        answer:
          'Để ném quả bóng đi với gia tốc lớn hơn (bay nhanh hơn), bạn cần tác dụng một lực lớn hơn. Tương tự, với cùng một lực, một quả bóng nhẹ hơn (khối lượng m nhỏ hơn) sẽ có gia tốc lớn hơn quả bóng nặng hơn.',
      },
      {
        question: 'Định luật Newton thứ ba (Hành động - Phản ứng) hoạt động ra sao trong môn bơi lội?',
        answer:
          'Khi vận động viên đẩy nước về phía sau (hành động), nước sẽ đẩy vận động viên về phía trước (phản ứng). Lực đẩy của nước chính là thứ giúp họ di chuyển.',
      },
      {
        question: 'Xung lượng là gì và tại sao nó quan trọng khi bắt bóng?',
        answer:
          'Xung lượng là tích của lực và thời gian tác dụng (F*t). Khi bắt một quả bóng đang bay nhanh, bạn thường hơi thu tay lại. Hành động này làm tăng thời gian va chạm, do đó làm giảm lực tác động lên tay bạn, giúp bạn đỡ đau hơn.',
      },
      {
        question: 'Động lượng được bảo toàn trong những tình huống thể thao nào?',
        answer:
          'Động lượng (p=mv) được bảo toàn trong các hệ kín. Ví dụ, trong một cú va chạm giữa hai quả bi-a, tổng động lượng của hai quả bi-a trước và sau va chạm là không đổi (bỏ qua ma sát).',
      },
      {
        question: 'Tại sao một võ sĩ quyền anh lại xoay người khi ra đòn?',
        answer:
          'Việc xoay hông và thân người giúp huy động khối lượng lớn hơn của cơ thể tham gia vào cú đấm. Theo định luật F=ma, với cùng một gia tốc, việc tăng khối lượng (m) sẽ làm tăng lực (F) của cú đấm một cách đáng kể.',
      },
      {
        question: 'Lực ma sát có vai trò gì trong môn chạy điền kinh?',
        answer:
          'Lực ma sát nghỉ giữa giày của vận động viên và mặt đường là lực đẩy họ về phía trước. Nếu không có ma sát, chân họ sẽ chỉ trượt tại chỗ. Đây là lý do tại sao giày chạy có gai để tăng độ bám.',
      },
      {
        question: 'Tại sao khi nhảy xa, vận động viên lại chạy lấy đà?',
        answer:
          'Việc chạy lấy đà giúp vận động viên tích lũy động lượng theo phương ngang. Khi giậm nhảy, họ chuyển một phần động lượng này thành chuyển động lên trên, giúp họ bay xa hơn.',
      },
      {
        question: 'Khái niệm "trọng tâm" quan trọng như thế nào trong thể dục dụng cụ?',
        answer:
          'Việc kiểm soát vị trí trọng tâm của cơ thể là chìa khóa để giữ thăng bằng. Các vận động viên liên tục điều chỉnh tư thế tay, chân để giữ cho trọng tâm của họ luôn nằm trong diện tích chân đế, giúp họ không bị ngã.',
      },
      {
        question: 'Tại sao một quả bóng golf có các vết lõm trên bề mặt?',
        answer:
          'Các vết lõm này tạo ra một lớp không khí mỏng, chảy rối ngay trên bề mặt quả bóng. Lớp khí rối này giúp giảm lực cản tổng thể và tạo ra lực nâng, cho phép quả bóng bay xa và cao hơn so với một quả bóng nhẵn hoàn toàn.',
      },
    ],
  },
  {
    id: 'energy-and-power',
    videoUrl: null,
    title: 'Năng lượng và Sức mạnh trong Thể thao',
    description:
      'Tìm hiểu về công, năng lượng và sức mạnh, và cách chúng được tối ưu hóa trong các môn cử tạ, bơi lội.',
    duration: '60 phút',
    difficulty: 'Trung bình',
    keyConcept: 'Năng lượng và Công suất',
    objectives: [
      'Phân biệt công, năng lượng và công suất.',
      'Hiểu về thế năng và động năng trong thể thao.',
      'Tính toán công suất của một vận động viên.',
    ],
    realWorldApplications: [
      'Tối ưu hóa kỹ thuật bơi để giảm lực cản và tiết kiệm năng lượng.',
      'Phân tích kỹ thuật của VĐV cử tạ để nâng được mức tạ tối đa.',
    ],
    prerequisites: [],
    exercises: [],
    faqs: [
      {
        question: 'Công trong vật lý khác gì với "công việc" hàng ngày?',
        answer:
          'Trong vật lý, công chỉ được sinh ra khi có một lực tác dụng làm vật dịch chuyển một quãng đường. Nếu bạn đẩy một bức tường nhưng nó không di chuyển, bạn không sinh ra công nào về mặt vật lý, mặc dù bạn vẫn tốn năng lượng.',
      },
      {
        question: 'Động năng và thế năng khác nhau như thế nào trong môn nhảy sào?',
        answer:
          'Động năng là năng lượng của chuyển động (khi VĐV chạy lấy đà). Thế năng có hai loại: thế năng đàn hồi (khi cây sào bị uốn cong) và thế năng hấp dẫn (khi VĐV ở điểm cao nhất). Có sự chuyển hóa liên tục giữa các dạng năng lượng này.',
      },
      {
        question: 'Công suất là gì và tại sao nó quan trọng với một vận động viên chạy nước rút?',
        answer:
          'Công suất là tốc độ sinh công (Công/thời gian). Một VĐV chạy nước rút cần tạo ra công suất cực lớn trong thời gian ngắn để đạt được gia tốc tối đa. Họ có thể rất mạnh (sinh lực lớn) nhưng nếu không nhanh (thời gian ngắn) thì công suất sẽ không cao.',
      },
      {
        question: 'Tại sao VĐV cử tạ lại hạ thấp người trước khi nâng tạ?',
        answer:
          'Việc hạ thấp người giúp họ huy động được sức mạnh từ các nhóm cơ lớn hơn (như cơ đùi, cơ mông) và tăng quãng đường tác dụng lực, từ đó thực hiện một công lớn hơn để nâng tạ lên.',
      },
      {
        question: 'Năng lượng bị "mất đi" đâu trong các hoạt động thể thao?',
        answer:
          'Theo định luật bảo toàn năng lượng, năng lượng không tự mất đi mà chuyển hóa thành các dạng khác. Trong thể thao, một phần lớn năng lượng cơ học bị chuyển hóa thành nhiệt năng (do ma sát, co cơ) và âm thanh.',
      },
      {
        question: 'Làm thế nào để tính công suất của một người khi leo cầu thang?',
        answer:
          'Bạn cần biết: khối lượng của người đó (m), chiều cao của cầu thang (h), và thời gian leo (t). Công thực hiện để thắng trọng lực là A = m*g*h (với g là gia tốc trọng trường). Công suất là P = A/t.',
      },
      {
        question: 'Tại sao bơi trong nước lại tốn nhiều năng lượng hơn chạy bộ trên cạn?',
        answer:
          'Nước có mật độ và độ nhớt cao hơn không khí rất nhiều, do đó tạo ra một lực cản lớn hơn đáng kể. VĐV bơi lội phải sinh ra một công lớn hơn để thắng lực cản này, do đó tốn nhiều năng lượng hơn.',
      },
      {
        question: 'Hiệu suất của cơ thể người trong việc chuyển hóa năng lượng là bao nhiêu?',
        answer:
          'Cơ thể người không phải là một cỗ máy hoàn hảo. Hiệu suất chuyển hóa năng lượng từ thức ăn thành công cơ học chỉ khoảng 20-25%. Phần còn lại của năng lượng bị thất thoát chủ yếu dưới dạng nhiệt.',
      },
      {
        question: 'Sức mạnh bùng nổ (explosive power) là gì?',
        answer:
          'Là khả năng tạo ra lực tối đa trong khoảng thời gian ngắn nhất có thể. Đây là yếu tố quyết định trong các hành động như nhảy, ném, hoặc xuất phát trong chạy nước rút. Nó là sự kết hợp của sức mạnh và tốc độ.',
      },
      {
        question: 'Tại sao VĐV đạp xe lại cúi gập người xuống?',
        answer:
          'Tư thế này giúp giảm diện tích tiếp xúc của cơ thể với không khí theo hướng chuyển động, từ đó làm giảm lực cản của không khí. Giảm lực cản đồng nghĩa với việc họ cần ít công suất hơn để duy trì cùng một tốc độ, giúp tiết kiệm năng lượng.',
      },
    ],
  },
  {
    id: 'projectile-motion',
    videoUrl: null,
    title: 'Chuyển động Ném xiên: Từ Quả bóng rổ đến Cú sút phạt',
    description: 'Nghiên cứu quỹ đạo của các vật thể được ném hoặc đá, áp dụng vào bóng rổ, golf và bóng đá.',
    duration: '75 phút',
    difficulty: 'Trung bình',
    keyConcept: 'Chuyển động ném xiên',
    objectives: [
      'Vẽ và phân tích quỹ đạo parabol của vật bị ném.',
      'Xác định góc ném tối ưu để đạt tầm xa cực đại.',
      'Hiểu ảnh hưởng của lực cản không khí.',
    ],
    realWorldApplications: [
      'Kỹ thuật ném bóng rổ để có xác suất vào rổ cao nhất.',
      'Kỹ thuật sút phạt trong bóng đá để bóng đi qua hàng rào.',
    ],
    prerequisites: [],
    exercises: [],
    faqs: [
      {
        question: 'Tại sao quỹ đạo của một quả bóng bị ném lại có hình parabol?',
        answer:
          'Đó là do sự kết hợp của hai chuyển động độc lập: chuyển động thẳng đều theo phương ngang (do vận tốc ban đầu, bỏ qua sức cản không khí) và chuyển động rơi tự do theo phương thẳng đứng (do tác dụng của trọng lực).',
      },
      {
        question: 'Góc ném bao nhiêu độ sẽ giúp vật bay xa nhất?',
        answer:
          'Trong điều kiện lý tưởng (bỏ qua sức cản không khí và ném từ cùng một độ cao), góc ném 45 độ sẽ cho tầm bay xa cực đại.',
      },
      {
        question: 'Tại sao trong thực tế, VĐV đẩy tạ lại ném với góc thấp hơn 45 độ?',
        answer:
          'Vì quả tạ được đẩy đi từ một độ cao ban đầu (chiều cao của vai). Góc ném thấp hơn một chút giúp tối ưu hóa giữa thành phần vận tốc ngang và thời gian bay, mang lại tầm xa lớn hơn so với góc 45 độ.',
      },
      {
        question: 'Lực cản không khí ảnh hưởng đến quỹ đạo ném xiên như thế nào?',
        answer:
          'Lực cản không khí luôn ngược chiều chuyển động, làm giảm cả vận tốc ngang và vận tốc đứng. Điều này khiến cho quỹ đạo thực tế không phải là một parabol hoàn hảo: tầm bay xa bị ngắn lại, độ cao cực đại thấp hơn và vật rơi xuống dốc hơn.',
      },
      {
        question: 'Tại sao khi ném bóng rổ, người ta thường ném cầu vồng?',
        answer:
          'Một quỹ đạo cao (cầu vồng) làm tăng góc mà quả bóng tiếp cận rổ. Góc tiếp cận lớn hơn sẽ tạo ra một "diện tích hiệu dụng" của rổ lớn hơn, từ đó làm tăng xác suất bóng lọt vào rổ.',
      },
      {
        question: 'Làm thế nào để tính được độ cao cực đại mà một quả bóng đạt được?',
        answer:
          'Độ cao cực đại đạt được khi thành phần vận tốc theo phương thẳng đứng bằng 0. Dựa vào vận tốc ban đầu theo phương đứng và gia tốc trọng trường, ta có thể sử dụng các công thức chuyển động để tính toán.',
      },
      {
        question: 'Trong môn nhảy xa, thành phần vận tốc nào quan trọng hơn, ngang hay đứng?',
        answer:
          'Cả hai đều quan trọng. Vận tốc ngang quyết định quãng đường đi được trong khi bay, còn vận tốc đứng quyết định thời gian bay. Sự kết hợp tối ưu của cả hai sẽ cho kết quả tốt nhất.',
      },
      {
        question: 'Tại sao một quả cầu lông lại rơi xuống rất nhanh và dốc?',
        answer:
          'Do quả cầu lông rất nhẹ nhưng lại có diện tích lớn (phần lông vũ), nó chịu ảnh hưởng rất lớn từ lực cản không khí. Lực cản này nhanh chóng làm triệt tiêu vận tốc theo phương ngang, khiến nó gần như rơi thẳng đứng.',
      },
      {
        question: 'Khi một quả bóng đạt đến đỉnh của quỹ đạo, vận tốc và gia tốc của nó bằng bao nhiêu?',
        answer:
          'Tại đỉnh, thành phần vận tốc theo phương thẳng đứng của nó bằng 0, nhưng thành phần vận tốc theo phương ngang vẫn không đổi (bỏ qua sức cản). Gia tốc của nó tại mọi điểm trên quỹ đạo luôn là gia tốc trọng trường (g), hướng thẳng xuống dưới.',
      },
      {
        question: 'Tầm bay xa của một vật phụ thuộc vào những yếu tố nào?',
        answer:
          'Tầm bay xa phụ thuộc vào ba yếu tố chính: vận tốc ban đầu (tốc độ ném), góc ném, và độ cao ban đầu của vật khi được ném ra. Ngoài ra, các yếu tố như sức cản không khí và gió cũng có ảnh hưởng đáng kể.',
      },
    ],
  },
  {
    id: 'rotational-dynamics',
    videoUrl: null,
    title: 'Động lực học Quay và Hiệu ứng Magnus',
    description:
      'Khám phá nguyên lý của chuyển động quay, mô-men xoắn và hiệu ứng Magnus trong các môn như bóng bàn, tennis và trượt băng nghệ thuật.',
    duration: '75 phút',
    difficulty: 'Nâng cao',
    keyConcept: 'Chuyển động quay',
    objectives: [
      'Hiểu về mô-men quán tính và mô-men xoắn.',
      'Giải thích nguyên nhân của hiệu ứng Magnus (cú sút xoáy).',
      'Phân tích nguyên lý bảo toàn mô-men động lượng trong trượt băng.',
    ],
    realWorldApplications: [
      'Cú giao bóng xoáy trong tennis.',
      'Cú sút "lá vàng rơi" của Roberto Carlos.',
      'VĐV trượt băng nghệ thuật quay nhanh hơn khi co tay lại.',
    ],
    prerequisites: [],
    exercises: [],
    faqs: [
      {
        question: 'Hiệu ứng Magnus là gì?',
        answer:
          'Là hiện tượng một vật thể quay tròn khi di chuyển trong không khí (hoặc chất lưu) sẽ chịu một lực tác động vuông góc với phương chuyển động, làm cho quỹ đạo của nó bị bẻ cong. Đây là nguyên lý đằng sau các cú sút xoáy.',
      },
      {
        question: 'Tại sao một cú sút xoáy trong bóng đá lại có thể bay vòng qua hàng rào?',
        answer:
          'Khi quả bóng xoay, nó tạo ra sự chênh lệch áp suất không khí ở hai bên. Bên có hướng xoay cùng chiều với dòng khí sẽ có áp suất thấp, bên ngược lại có áp suất cao. Sự chênh lệch này tạo ra một lực đẩy quả bóng đi theo đường cong.',
      },
      {
        question: 'Nguyên lý bảo toàn mô-men động lượng hoạt động như thế nào trong trượt băng nghệ thuật?',
        answer:
          'Mô-men động lượng = Mô-men quán tính x Tốc độ góc. Khi VĐV co tay và chân lại gần trục quay, mô-men quán tính của họ giảm xuống. Để bảo toàn mô-men động lượng, tốc độ góc phải tăng lên, khiến họ quay nhanh hơn.',
      },
      {
        question: 'Mô-men xoắn là gì?',
        answer:
          'Mô-men xoắn là một đại lượng tương tự như lực nhưng dành cho chuyển động quay. Nó là tác dụng làm quay của một lực. Ví dụ, khi bạn dùng cờ lê để vặn một con ốc, bạn đang tác dụng một mô-men xoắn.',
      },
      {
        question: 'Tại sao VĐV nhảy cầu lại cuộn tròn người trên không?',
        answer:
          'Tương tự như VĐV trượt băng, việc cuộn tròn người giúp giảm mô-men quán tính, cho phép họ thực hiện nhiều vòng quay hơn trong khoảng thời gian ngắn trên không. Trước khi tiếp nước, họ duỗi người ra để làm chậm tốc độ quay.',
      },
      {
        question: 'Trong bóng bàn, cú đánh xoáy lên (topspin) và xoáy xuống (backspin) khác nhau ra sao?',
        answer:
          'Cú topspin làm bóng bay theo quỹ đạo cong xuống nhanh hơn, khiến bóng nảy về phía trước sau khi chạm bàn, rất khó đỡ. Cú backspin làm bóng bay lơ lửng hơn và có xu hướng dừng lại hoặc nảy ngược lại sau khi chạm bàn.',
      },
      {
        question: 'Làm thế nào một VĐV thể dục dụng cụ có thể thực hiện các động tác xoay trên xà?',
        answer:
          'Họ sử dụng mô-men xoắn tạo ra từ chính cơ thể mình. Bằng cách thay đổi vị trí tay, chân và thân người so với xà, họ tạo ra một mô-men xoắn làm cho cơ thể quay quanh xà.',
      },
      {
        question: 'Mô-men quán tính phụ thuộc vào những yếu tố nào?',
        answer:
          'Mô-men quán tính phụ thuộc vào hai yếu tố: tổng khối lượng của vật và sự phân bố của khối lượng đó so với trục quay. Khối lượng càng xa trục quay thì mô-men quán tính càng lớn.',
      },
      {
        question: 'Tại sao con quay (con cù) có thể đứng thẳng khi đang quay nhanh?',
        answer:
          'Do hiệu ứng con quay hồi chuyển. Một vật thể quay có xu hướng chống lại sự thay đổi hướng của trục quay của nó. Mô-men động lượng góc lớn giúp nó duy trì sự ổn định và đứng thẳng, chống lại tác động của trọng lực.',
      },
      {
        question: 'Cú "knuckleball" trong bóng đá hoặc bóng chày là gì?',
        answer:
          'Đó là một cú sút hoặc ném mà quả bóng gần như không xoay. Việc thiếu độ xoáy làm cho dòng không khí chảy qua nó trở nên hỗn loạn và khó đoán, khiến quỹ đạo của quả bóng lạng đi một cách bất thường, gây khó khăn cho thủ môn hoặc người bắt bóng.',
      },
    ],
  },
  {
    id: 'fluid-dynamics-aerodynamics',
    videoUrl: null,
    title: 'Khí động lực học trong Đua xe và Bơi lội',
    description:
      'Nghiên cứu về lực cản không khí và lực cản của nước, và cách các vận động viên và kỹ sư tối ưu hóa hình dạng để tăng tốc độ.',
    duration: '60 phút',
    difficulty: 'Nâng cao',
    keyConcept: 'Động lực học chất lưu',
    objectives: [
      'Hiểu về dòng chảy tầng và dòng chảy rối.',
      'Phân tích các yếu tố ảnh hưởng đến lực cản.',
      'Giải thích thiết kế khí động học của xe đua F1 và mũ bảo hiểm xe đạp.',
    ],
    realWorldApplications: [
      'Thiết kế xe đua Công thức 1.',
      'Kỹ thuật "núp gió" trong đua xe đạp.',
      'Trang phục bơi lội giúp giảm lực cản của nước.',
    ],
    prerequisites: [],
    exercises: [],
    faqs: [
      {
        question: 'Lực cản không khí là gì và tại sao nó quan trọng trong thể thao?',
        answer:
          'Là lực mà không khí tác động ngược chiều chuyển động của một vật thể. Trong các môn thể thao tốc độ cao như đua xe, đua xe đạp, điền kinh, lực cản không khí là rào cản chính mà VĐV phải vượt qua. Giảm được lực cản sẽ giúp tăng tốc độ đáng kể.',
      },
      {
        question: 'Tại sao các VĐV đua xe đạp thường đi thành một hàng dài (núp gió)?',
        answer:
          'VĐV đi đầu tiên sẽ "xé gió", chịu phần lớn lực cản không khí. Những người đi ngay sau sẽ được hưởng lợi từ vùng không khí có áp suất thấp hơn, giúp họ tiết kiệm tới 30-40% năng lượng.',
      },
      {
        question: 'Thiết kế khí động học của xe đua F1 hoạt động như thế nào?',
        answer:
          'Xe F1 được thiết kế như một "cánh máy bay lộn ngược". Các cánh gió trước và sau tạo ra một lực ép xuống (downforce) khổng lồ, giúp tăng độ bám đường và cho phép xe vào cua ở tốc độ cực cao mà không bị văng ra ngoài.',
      },
      {
        question: 'Tại sao VĐV bơi lội lại cạo lông, đội mũ và mặc đồ bơi bó sát?',
        answer:
          'Tất cả những điều này đều nhằm mục đích giảm lực cản của nước. Một bề mặt càng nhẵn mịn thì càng giúp giảm ma sát với nước, cho phép VĐV lướt đi nhanh hơn.',
      },
      {
        question: 'Dòng chảy tầng và dòng chảy rối khác nhau như thế nào?',
        answer:
          'Dòng chảy tầng là dòng chảy mượt mà, các lớp chất lưu trượt lên nhau một cách có trật tự. Dòng chảy rối là dòng chảy hỗn loạn, có các xoáy và chuyển động bất thường. Trong thể thao, người ta thường cố gắng duy trì dòng chảy tầng để giảm lực cản.',
      },
      {
        question: 'Tại sao quả bóng golf có các vết lõm?',
        answer:
          'Các vết lõm này tạo ra một lớp dòng chảy rối mỏng ngay trên bề mặt quả bóng. Lớp rối này lại giúp dòng khí chính bám vào bề mặt bóng lâu hơn, làm giảm vùng áp suất thấp phía sau và do đó giảm lực cản tổng thể, giúp bóng bay xa hơn.',
      },
      {
        question: 'Lực nâng trong bơi lội được tạo ra như thế nào?',
        answer:
          'Tương tự như cánh máy bay, bàn tay của VĐV bơi lội khi di chuyển trong nước có thể tạo ra lực nâng. Bằng cách điều chỉnh góc của bàn tay, họ tạo ra sự chênh lệch áp suất giữa mặt trên và mặt dưới, tạo ra một lực vuông góc với hướng chuyển động của tay, góp phần đẩy cơ thể về phía trước.',
      },
      {
        question: 'Drafting (núp gió) trong bơi lội có hiệu quả không?',
        answer:
          'Có. Bơi ngay phía sau hoặc bên cạnh một VĐV khác có thể giúp giảm đáng kể lực cản của nước, tương tự như trong đua xe đạp. Đây là một chiến thuật quan trọng trong các cuộc thi bơi đường dài.',
      },
      {
        question: 'Tại sao tư thế của VĐV trượt tuyết đổ đèo lại là ngồi xổm?',
        answer:
          'Tư thế ngồi xổm, gập người giúp giảm tối đa diện tích cản của cơ thể đối với không khí. Trong một môn thể thao mà tốc độ quyết định tất cả, việc giảm lực cản không khí là yếu tố sống còn.',
      },
      {
        question: 'Lực cản dạng (form drag) và ma sát bề mặt (skin friction) là gì?',
        answer:
          'Lực cản dạng phụ thuộc vào hình dạng của vật thể và sự chênh lệch áp suất giữa phía trước và phía sau. Ma sát bề mặt phụ thuộc vào độ nhám của bề mặt vật thể. Trong bơi lội, cả hai đều quan trọng, trong khi ở tốc độ cao trên cạn, lực cản dạng thường chiếm ưu thế.',
      },
    ],
  },
];

export const physicsOfSportsModule: ModuleData = {
  id: 'physics-of-sports',
  title: 'Vật lý trong Thể thao',
  description:
    'Khám phá các nguyên tắc vật lý đằng sau các hoạt động thể thao, từ cơ học, động lực học đến khí động lực học.',
  image: 'physics-of-sports.jpg',
  tags: ['vật lý', 'thể thao', 'khoa học thể thao', 'cơ học'],
  category: 'Khoa học ứng dụng',
};

export const physicsOfSportsLessons = lessons;
