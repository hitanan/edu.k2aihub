import { ModuleData } from '@/types';

export const chemistryEnvironmentModuleData: ModuleData = {
  id: 'chemistry-environment',
  title: 'Hóa Học và Môi Trường',
  subtitle: 'Tìm hiểu vai trò của hóa học trong các vấn đề môi trường và các giải pháp hóa học xanh.',
  description:
    'Module này khám phá mối liên hệ giữa hóa học và môi trường, từ ô nhiễm không khí, nước đến các giải pháp năng lượng sạch và vật liệu bền vững.',
  image: 'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=1200&h=600&fit=crop',
  color: 'from-green-500 to-teal-500',
  category: 'Khoa học & Môi trường',
  level: 'Trung học',
  duration: '11 tuần',
  lessons: [
    {
      id: 'o-nhiem-khong-khi',
      title: 'Hóa Học Của Ô Nhiễm Không Khí',
      description:
        'Nghiên cứu về các chất gây ô nhiễm không khí chính, nguồn gốc và tác động của chúng, cũng như các phản ứng hóa học tạo ra mưa axit và sương mù quang hóa.',
      duration: '50 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Mưa axit', 'Sương mù quang hóa', 'Hiệu ứng nhà kính'],
      objectives: [
        'Nhận biết các khí gây ô nhiễm chính: SO₂, NO₂, CO, O₃, và các hạt bụi mịn.',
        'Hiểu quá trình hình thành mưa axit từ SO₂ và NO₂.',
        'Giải thích cơ chế tạo thành sương mù quang hóa.',
        'Phân tích tác động của ô nhiễm không khí đến sức khỏe và môi trường.',
      ],
      faqs: [
        {
          question: 'Mưa axit là gì và nó gây hại như thế nào?',
          answer:
            'Mưa axit là hiện tượng mưa hoặc các dạng giáng thủy khác có độ pH thấp hơn bình thường (dưới 5.6). Nó được hình thành khi khí sulfur dioxide (SO₂) và nitrogen oxides (NOx) phản ứng với nước, oxy và các chất khác trong khí quyển. Mưa axit gây hại cho cây cối, làm chua hóa đất và nước, và ăn mòn các công trình xây dựng.',
        },
        {
          question: 'Sương mù quang hóa (smog) hình thành khi nào?',
          answer:
            'Sương mù quang hóa thường hình thành ở các đô thị vào những ngày nắng, ấm. Nó là kết quả của phản ứng hóa học giữa các oxit nitơ (NOx) và các hợp chất hữu cơ dễ bay hơi (VOCs) dưới tác động của ánh sáng mặt trời, tạo ra ozon tầng đối lưu (O₃) và các chất ô nhiễm thứ cấp khác.',
        },
        {
          question: 'Sự khác biệt giữa ozon ở tầng bình lưu và ozon ở tầng đối lưu là gì?',
          answer:
            'Ozon (O₃) ở tầng bình lưu (tầng ozon) là "tốt", vì nó hấp thụ hầu hết các tia cực tím (UV) có hại từ mặt trời. Ngược lại, ozon ở tầng đối lưu (gần mặt đất) là "xấu", là một thành phần chính của sương mù quang hóa, gây hại cho hệ hô hấp và thực vật.',
        },
        {
          question: 'Hiệu ứng nhà kính là gì?',
          answer:
            'Hiệu ứng nhà kính là quá trình tự nhiên giữ ấm cho bề mặt Trái Đất. Tuy nhiên, các hoạt động của con người đã làm tăng nồng độ các khí nhà kính (như CO₂, CH₄), giữ lại nhiều nhiệt hơn và gây ra hiện tượng nóng lên toàn cầu.',
        },
        {
          question: 'Hạt bụi mịn (PM2.5) là gì và tại sao chúng nguy hiểm?',
          answer:
            'PM2.5 là các hạt bụi có đường kính nhỏ hơn hoặc bằng 2.5 micromet. Vì kích thước siêu nhỏ, chúng có thể xâm nhập sâu vào phổi và thậm chí đi vào máu, gây ra các bệnh về hô hấp, tim mạch và nhiều vấn đề sức khỏe nghiêm trọng khác.',
        },
        {
          question: 'Nguồn gốc chính của các hợp chất hữu cơ dễ bay hơi (VOCs) là từ đâu?',
          answer:
            'VOCs được thải ra từ nhiều nguồn, bao gồm khí thải xe cộ, các quy trình công nghiệp, và thậm chí từ các sản phẩm tiêu dùng hàng ngày như sơn, dung môi, và các sản phẩm làm sạch.',
        },
        {
          question: 'Làm thế nào để giảm thiểu ô nhiễm không khí từ xe cộ?',
          answer:
            'Các giải pháp bao gồm việc sử dụng các bộ chuyển đổi xúc tác (catalytic converters) để xử lý khí thải, chuyển sang sử dụng nhiên liệu sạch hơn (như xăng không chì, nhiên liệu sinh học), và thúc đẩy việc sử dụng phương tiện giao thông công cộng và xe điện.',
        },
        {
          question: 'Tại sao CO (carbon monoxide) lại là một khí độc?',
          answer:
            'CO là một khí không màu, không mùi. Khi hít phải, nó liên kết với hemoglobin trong máu mạnh hơn nhiều so với oxy. Điều này làm giảm khả năng vận chuyển oxy của máu đến các cơ quan trong cơ thể, có thể dẫn đến ngạt và tử vong.',
        },
        {
          question: 'Sự suy giảm tầng ozon và hiệu ứng nhà kính có liên quan đến nhau không?',
          answer:
            'Chúng là hai vấn đề môi trường khác nhau nhưng có một số mối liên hệ. Sự suy giảm tầng ozon chủ yếu do các hợp chất CFCs gây ra. Việc nóng lên toàn cầu (hiệu ứng nhà kính) có thể làm thay đổi nhiệt độ và luồng không khí ở tầng bình lưu, ảnh hưởng đến quá trình phục hồi của tầng ozon.',
        },
        {
          question: 'Chúng ta có thể làm gì ở cấp độ cá nhân để giảm ô nhiễm không khí?',
          answer:
            'Các hành động cá nhân bao gồm: giảm sử dụng phương tiện cá nhân, tiết kiệm điện, sử dụng các sản phẩm thân thiện với môi trường, và không đốt rác bừa bãi. Nâng cao nhận thức và vận động chính sách cũng là những hành động quan trọng.',
        },
      ],
      quizzes: [
        {
          question: 'Hai khí nào là nguyên nhân chính gây ra mưa axit?',
          options: ['CO₂ và O₂', 'SO₂ và NOx', 'CH₄ và H₂O', 'O₃ và CO'],
          correctAnswerIndex: 1,
          explanation:
            'Sulfur dioxide (SO₂) và các oxit nitơ (NOx) là hai tác nhân chính phản ứng với hơi nước trong khí quyển để tạo thành axit sulfuric và axit nitric, gây ra mưa axit.',
        },
      ],
    },
    {
      id: 'hoa-hoc-xanh',
      title: 'Nguyên Tắc Hóa Học Xanh',
      description:
        'Giới thiệu 12 nguyên tắc của hóa học xanh, một triết lý thiết kế các sản phẩm và quy trình hóa học nhằm giảm thiểu hoặc loại bỏ việc sử dụng và tạo ra các chất độc hại.',
      duration: '60 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Nhựa sinh học', 'Nhiên liệu sinh học', 'Dược phẩm bền vững'],
      objectives: [
        'Liệt kê và hiểu ý nghĩa của 12 nguyên tắc hóa học xanh.',
        'Phân tích các ví dụ thực tế về ứng dụng hóa học xanh.',
        'So sánh giữa quy trình hóa học truyền thống và quy trình hóa học xanh.',
        'Đánh giá tiềm năng của hóa học xanh trong việc giải quyết các vấn đề môi trường.',
      ],
      faqs: [
        {
          question: 'Hóa học xanh có phải là "không sử dụng hóa chất" không?',
          answer:
            'Không. Hóa học xanh không phải là loại bỏ hoàn toàn hóa chất, mà là thiết kế và sử dụng chúng một cách thông minh hơn, an toàn hơn và hiệu quả hơn. Mục tiêu là giảm thiểu tác động tiêu cực đến môi trường và sức khỏe con người ngay từ giai đoạn thiết kế.',
        },
        {
          question: 'Một ví dụ về hóa học xanh trong đời sống là gì?',
          answer:
            'Việc phát triển các loại nhựa phân hủy sinh học (bioplastics) từ tinh bột ngô hoặc mía là một ví dụ điển hình. Chúng giúp giảm sự phụ thuộc vào dầu mỏ và giảm thiểu vấn đề rác thải nhựa khó phân hủy.',
        },
        {
          question: 'Nguyên tắc "Kinh tế nguyên tử" (Atom Economy) trong hóa học xanh có nghĩa là gì?',
          answer:
            'Nguyên tắc này hướng tới việc thiết kế các phản ứng hóa học sao cho tối đa hóa lượng nguyên tử từ nguyên liệu ban đầu được chuyển vào sản phẩm cuối cùng, và giảm thiểu lượng nguyên tử bị thải ra ngoài dưới dạng sản phẩm phụ không mong muốn.',
        },
        {
          question: 'Tại sao việc sử dụng chất xúc tác lại được coi là một nguyên tắc của hóa học xanh?',
          answer:
            'Chất xúc tác giúp tăng tốc độ phản ứng, cho phép thực hiện phản ứng ở điều kiện nhiệt độ và áp suất thấp hơn, từ đó tiết kiệm năng lượng. Hơn nữa, chất xúc tác không bị tiêu hao và có thể tái sử dụng nhiều lần, làm giảm lượng chất thải.',
        },
        {
          question: 'Dung môi xanh là gì?',
          answer:
            'Dung môi xanh là các dung môi ít độc hại, an toàn và thân thiện với môi trường hơn so với các dung môi hữu cơ truyền thống. Ví dụ về dung môi xanh bao gồm nước, CO2 siêu tới hạn, và các chất lỏng ion.',
        },
        {
          question: 'Hóa học xanh có thể giúp giải quyết vấn đề rác thải điện tử không?',
          answer:
            'Có. Hóa học xanh thúc đẩy việc thiết kế các sản phẩm điện tử dễ tháo dỡ, tái chế và sử dụng các vật liệu ít độc hại hơn. Nó cũng tập trung vào việc phát triển các quy trình hiệu quả để thu hồi các kim loại quý từ rác thải điện tử.',
        },
        {
          question: 'Làm thế nào để một quy trình hóa học được coi là "bền vững"?',
          answer:
            'Một quy trình bền vững cần đáp ứng ba yếu tố: hiệu quả về kinh tế, có trách nhiệm với xã hội (an toàn cho người lao động và cộng đồng), và thân thiện với môi trường (sử dụng nguyên liệu tái tạo, giảm thiểu chất thải và ô nhiễm).',
        },
        {
          question: 'Hóa học xanh có làm cho sản phẩm đắt hơn không?',
          answer:
            'Không nhất thiết. Mặc dù chi phí nghiên cứu và phát triển ban đầu có thể cao, nhưng về lâu dài, các quy trình hóa học xanh thường tiết kiệm chi phí hơn do giảm tiêu thụ năng lượng, nguyên liệu và chi phí xử lý chất thải.',
        },
        {
          question: 'Nguyên tắc "Phòng ngừa hơn chữa trị" trong hóa học xanh có ý nghĩa gì?',
          answer:
            'Đây là nguyên tắc đầu tiên và quan trọng nhất. Nó nhấn mạnh rằng việc thiết kế một quy trình để ngăn chặn sự hình thành chất thải ngay từ đầu thì tốt hơn nhiều so với việc phải xử lý hoặc dọn dẹp chất thải sau khi nó đã được tạo ra.',
        },
        {
          question: 'Hóa học xanh có thể được áp dụng ở quy mô nhỏ, như trong phòng thí nghiệm trường học không?',
          answer:
            'Chắc chắn có. Việc sử dụng các hóa chất ít độc hại hơn, thực hiện các thí nghiệm ở quy mô nhỏ (microscale chemistry), và tái chế dung môi là những cách tuyệt vời để áp dụng các nguyên tắc hóa học xanh trong giáo dục.',
        },
      ],
      quizzes: [
        {
          question: 'Nguyên tắc nào sau đây KHÔNG thuộc 12 nguyên tắc của hóa học xanh?',
          options: [
            'Phòng ngừa chất thải',
            'Thiết kế hóa chất an toàn hơn',
            'Tối đa hóa lợi nhuận bằng mọi giá',
            'Sử dụng nguyên liệu tái tạo',
          ],
          correctAnswerIndex: 2,
          explanation:
            'Hóa học xanh ưu tiên sự bền vững và an toàn, do đó "Tối đa hóa lợi nhuận bằng mọi giá" đi ngược lại với triết lý của nó. Các nguyên tắc khác đều là cốt lõi của hóa học xanh.',
        },
      ],
    },
    {
      id: 'nang-luong-sach',
      title: 'Hóa Học Trong Năng Lượng Sạch',
      description:
        'Khám phá vai trò của hóa học trong việc phát triển các công nghệ năng lượng tái tạo như pin mặt trời, pin nhiên liệu và lưu trữ năng lượng.',
      duration: '55 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Pin mặt trời (Solar cells)', 'Pin nhiên liệu Hydro', 'Pin Lithium-ion'],
      objectives: [
        'Hiểu nguyên lý hoạt động cơ bản của pin mặt trời (quang điện).',
        'Tìm hiểu về phản ứng điện hóa trong pin nhiên liệu hydro.',
        'Khám phá cấu tạo và hóa học của pin Lithium-ion dùng để lưu trữ năng lượng.',
        'Thảo luận về những thách thức hóa học trong việc phát triển năng lượng bền vững.',
      ],
      faqs: [
        {
          question: 'Pin mặt trời tạo ra điện như thế nào?',
          answer:
            'Pin mặt trời, thường làm từ silicon, hoạt động dựa trên hiệu ứng quang điện. Khi ánh sáng mặt trời (photon) chiếu vào tấm pin, nó truyền năng lượng cho các electron, làm chúng bật ra khỏi vị trí và tạo thành dòng điện.',
        },
        {
          question: 'Pin nhiên liệu Hydro có ưu điểm gì so với động cơ đốt trong?',
          answer:
            'Pin nhiên liệu Hydro kết hợp hydro và oxy để tạo ra điện, và sản phẩm phụ duy nhất là nước tinh khiết (H₂O). Do đó, nó không phát thải khí nhà kính hay các chất gây ô nhiễm khác như động cơ đốt trong, thân thiện hơn nhiều với môi trường.',
        },
        {
          question: 'Tại sao việc lưu trữ năng lượng lại quan trọng đối với năng lượng tái tạo?',
          answer:
            'Các nguồn năng lượng tái tạo như mặt trời và gió không ổn định (chỉ có điện khi có nắng hoặc gió). Các hệ thống lưu trữ năng lượng, như pin Lithium-ion, cho phép lưu trữ năng lượng khi sản xuất dư thừa và sử dụng nó khi cần, đảm bảo nguồn cung cấp điện ổn định.',
        },
        {
          question: 'Hóa học đóng vai trò gì trong việc cải thiện hiệu suất của pin mặt trời?',
          answer:
            'Các nhà hóa học đang nghiên cứu các vật liệu mới, như perovskite, có khả năng hấp thụ ánh sáng hiệu quả hơn silicon. Họ cũng phát triển các lớp phủ chống phản xạ và các cấu trúc nano để tối đa hóa lượng ánh sáng được hấp thụ và chuyển đổi thành điện năng.',
        },
        {
          question: 'Thách thức lớn nhất của việc sử dụng hydro làm nhiên liệu là gì?',
          answer:
            'Thách thức chính là sản xuất, lưu trữ và phân phối hydro một cách an toàn và hiệu quả. Hiện nay, hầu hết hydro được sản xuất từ khí tự nhiên, vẫn phát thải CO₂. Việc sản xuất "hydro xanh" bằng cách điện phân nước sử dụng năng lượng tái tạo là mục tiêu, nhưng vẫn còn tốn kém.',
        },
        {
          question: 'Pin Lithium-ion hoạt động như thế nào?',
          answer:
            'Pin Li-ion hoạt động bằng cách di chuyển các ion lithium giữa hai điện cực (anode và cathode) qua một chất điện li. Khi sạc, các ion lithium di chuyển từ cathode sang anode. Khi xả (sử dụng), chúng di chuyển ngược lại, tạo ra một dòng electron, tức là dòng điện.',
        },
        {
          question: 'Tại sao việc tái chế pin lại quan trọng?',
          answer:
            'Pin, đặc biệt là pin Li-ion, chứa các kim loại quý và đôi khi độc hại như lithium, cobalt, và niken. Việc khai thác các kim loại này có tác động lớn đến môi trường. Tái chế pin giúp thu hồi các vật liệu có giá trị này, giảm nhu cầu khai thác mới và ngăn chặn các chất độc hại rò rỉ ra môi trường.',
        },
        {
          question: 'Nhiên liệu sinh học (biofuel) là gì?',
          answer:
            'Nhiên liệu sinh học là nhiên liệu được sản xuất từ các nguồn sinh học (sinh khối), chẳng hạn như thực vật hoặc chất thải nông nghiệp. Ví dụ phổ biến là ethanol (từ ngô, mía) và biodiesel (từ dầu thực vật). Chúng được coi là một giải pháp thay thế tái tạo cho nhiên liệu hóa thạch.',
        },
        {
          question: 'Điện hóa học là gì và nó liên quan gì đến năng lượng sạch?',
          answer:
            'Điện hóa học là ngành hóa học nghiên cứu mối quan hệ giữa điện năng và các phản ứng hóa học. Nó là nền tảng của hầu hết các công nghệ năng lượng sạch, bao gồm pin, pin nhiên liệu, và quá trình điện phân để sản xuất hydro.',
        },
        {
          question: 'Vật liệu siêu tụ điện (supercapacitor) có thể được sử dụng để lưu trữ năng lượng không?',
          answer:
            'Có. Siêu tụ điện lưu trữ năng lượng bằng cách tích tụ tĩnh điện, khác với pin lưu trữ bằng phản ứng hóa học. Chúng có thể sạc và xả nhanh hơn nhiều so với pin và có tuổi thọ cao hơn, nhưng mật độ năng lượng (lượng năng lượng lưu trữ trên mỗi kg) thường thấp hơn. Chúng rất phù hợp cho các ứng dụng cần cung cấp năng lượng nhanh và tức thời.',
        },
      ],
      quizzes: [
        {
          question: 'Sản phẩm phụ của phản ứng trong pin nhiên liệu Hydro là gì?',
          options: ['Carbon dioxide (CO₂)', 'Nước (H₂O)', 'Methane (CH₄)', 'Ozone (O₃)'],
          correctAnswerIndex: 1,
          explanation:
            'Phản ứng giữa hydro và oxy trong pin nhiên liệu (2H₂ + O₂ → 2H₂O) chỉ tạo ra nước, đây là một trong những ưu điểm lớn nhất về môi trường của công nghệ này.',
        },
      ],
    },
  ],
  features: [
    'Phân tích các vấn đề ô nhiễm môi trường từ góc độ hóa học',
    'Giới thiệu 12 nguyên tắc của hóa học xanh',
    'Khám phá hóa học trong năng lượng tái tạo',
    'Các nghiên cứu tình huống và giải pháp thực tế',
  ],
  prerequisites: ['Kiến thức hóa học cơ bản (phản ứng hóa học, nguyên tố, hợp chất)'],
  objectives: [
    'Hiểu được tác động hai mặt của hóa học đối với môi trường.',
    'Nắm vững các nguyên tắc của hóa học xanh và bền vững.',
    'Nhận biết vai trò của hóa học trong việc phát triển các giải pháp môi trường.',
    'Nâng cao nhận thức và trách nhiệm về bảo vệ môi trường.',
  ],
  careerOutcomes: [
    'Nền tảng cho các ngành khoa học môi trường, kỹ thuật hóa học, công nghệ vật liệu.',
    'Kiến thức cần thiết cho các chuyên gia về phát triển bền vững và chính sách môi trường.',
  ],
  tags: ['hóa học', 'môi trường', 'hóa học xanh', 'năng lượng sạch'],
};
