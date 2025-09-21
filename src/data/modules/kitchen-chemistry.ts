import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { KitchenChemistryLesson } from '@/types/lesson-base';

export const kitchenChemistryModuleData: ModuleData = {
  id: 'kitchen-chemistry',
  title: 'Hóa học Nhà bếp',
  subtitle: 'Biến căn bếp của bạn thành một phòng thí nghiệm.',
  description:
    'Module này giải thích các nguyên tắc hóa học phức tạp thông qua các hoạt động nấu ăn quen thuộc, từ việc nướng một chiếc bánh đến làm một lọ sốt mayonnaise.',
  level: 'Cơ bản',
  duration: '8-10 giờ',
  category: 'Science & Research',
  features: [
    'Thí nghiệm an toàn tại nhà.',
    'Giải thích khoa học về nấu ăn.',
    'Công thức nấu ăn dựa trên hóa học.',
    'Tìm hiểu về cấu trúc phân tử của thực phẩm.',
  ],
  icon: '🍳',
  color: 'from-orange-500 to-amber-500',
  heroImageUrl: 'https://images.unsplash.com/photo-1556909211-3a5872a3c2a2?w=1200&h=600&fit=crop',
  objectives: [
    'Hiểu về phản ứng Maillard và caramen hóa.',
    'Nắm vững nguyên lý của sự nhũ hóa.',
    'Khám phá vai trò của gluten trong làm bánh.',
    'Tìm hiểu về các loại axit và bazơ trong thực phẩm.',
  ],
  prerequisites: ['Tò mò về nấu ăn.', 'Kiến thức hóa học cơ bản.'],
  careerOutcomes: ['Nhà khoa học thực phẩm.', 'Đầu bếp chuyên nghiệp.', 'Chuyên gia phát triển sản phẩm (R&D).'],
  industryApplications: [
    { name: 'Công nghệ thực phẩm.', description: '' },
    { name: 'Nhà hàng và ẩm thực.', description: '' },
    { name: 'Sản xuất đồ uống.', description: '' },
  ],
  marketDemand: { averageSalary: '15-30 triệu VNĐ', jobGrowth: '+12%', hireDemand: 'Trung bình' },
  relatedModules: [K2Module.FoodTechnology, K2Module.Biotechnology],
};

export const kitchenChemistryLessons: KitchenChemistryLesson[] = [
  {
    id: 'maillard-reaction',
    title: 'Phản ứng Maillard: Nghệ thuật của việc "làm nâu" thực phẩm',
    description:
      'Khám phá phản ứng hóa học tạo ra hương vị thơm ngon và màu sắc hấp dẫn cho bánh mì nướng, bít tết và cà phê.',
    duration: '60 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=zftlz_cFzeQ',
    imageUrl: 'https://i.ytimg.com/vi/zftlz_cFzeQ/hqdefault.jpg',
    keyConcept: 'Non-enzymatic browning',
    objectives: [
      'Hiểu được điều kiện xảy ra phản ứng Maillard (nhiệt độ, axit amin, đường).',
      'Phân biệt phản ứng Maillard và phản ứng caramen hóa.',
      'Nhận biết các sản phẩm của phản ứng Maillard.',
    ],
    prerequisites: ['Kiến thức hóa học phổ thông.'],
    exercises: [
      {
        title: 'Thí nghiệm Bít tết',
        description: 'Quan sát sự khác biệt khi áp chảo bít tết ở các nhiệt độ khác nhau.',
        difficulty: 'Cơ bản',
        procedure: [
          'Chuẩn bị hai miếng bít tết có độ dày tương đương.',
          'Áp chảo một miếng ở lửa vừa và một miếng ở lửa lớn.',
          'So sánh màu sắc, mùi thơm và hương vị.',
        ],
        expectedResults:
          'Miếng bít tết ở lửa lớn có màu nâu đậm và hương vị phức tạp hơn do phản ứng Maillard diễn ra mạnh mẽ.',
      },
    ],
    faqs: [
      {
        question: 'Phản ứng Maillard là gì?',
        answer:
          'Phản ứng Maillard là một phản ứng hóa học phức tạp giữa axit amin và đường khử, xảy ra khi thực phẩm được đun nóng. Nó tạo ra hàng trăm hợp chất hương vị và màu sắc mới, mang lại màu nâu hấp dẫn và hương vị thơm ngon cho nhiều loại thực phẩm như bánh mì nướng, bít tết, và cà phê rang.',
      },
      {
        question: 'Phản ứng Maillard và caramen hóa có giống nhau không?',
        answer:
          'Không. Caramen hóa chỉ liên quan đến việc đun nóng đường, trong khi phản ứng Maillard cần cả đường và axit amin (thành phần của protein). Phản ứng Maillard tạo ra một phổ hương vị phức tạp và đa dạng hơn nhiều so với caramen hóa.',
      },
      {
        question: 'Tại sao cần phải thấm khô miếng thịt trước khi áp chảo?',
        answer:
          'Phản ứng Maillard chỉ xảy ra ở nhiệt độ cao (trên 140°C). Nước trên bề mặt thịt sẽ sôi ở 100°C và ngăn nhiệt độ tăng cao hơn cho đến khi nó bay hơi hết. Việc thấm khô thịt giúp bề mặt nhanh chóng đạt đến nhiệt độ cần thiết để phản ứng Maillard diễn ra, tạo lớp vỏ màu nâu đẹp mắt.',
      },
      {
        question: 'Có thể tăng tốc phản ứng Maillard không?',
        answer:
          'Có. Tăng nhiệt độ, tăng độ pH (môi trường kiềm, ví dụ thêm một chút baking soda), và chọn các loại đường và axit amin phù hợp có thể giúp phản ứng Maillard diễn ra nhanh hơn và mạnh mẽ hơn.',
      },
      {
        question: 'Phản ứng Maillard có xảy ra trong lò vi sóng không?',
        answer: 'Thường là không. Lò vi sóng làm nóng thực phẩm bằng cách kích thích các phân tử nước, giữ cho nhiệt độ bề mặt ở khoảng 100°C, quá thấp để phản ứng Maillard diễn ra hiệu quả. Đây là lý do tại sao thực phẩm nấu bằng lò vi sóng thường không có lớp vỏ màu nâu hấp dẫn.'
      },
      {
        question: 'Những thực phẩm nào là ví dụ điển hình của phản ứng Maillard?',
        answer: 'Rất nhiều! Vỏ bánh mì nướng, bề mặt cháy xém của miếng bít tết, khoai tây chiên vàng giòn, hành tây phi thơm, màu nâu của cà phê và sô cô la đều là kết quả của phản ứng Maillard.'
      },
      {
        question: 'Phản ứng Maillard có hại cho sức khỏe không?',
        answer: 'Đây là một vấn đề phức tạp. Phản ứng Maillard tạo ra hương vị tuyệt vời, nhưng ở nhiệt độ rất cao, nó cũng có thể tạo ra một lượng nhỏ các hợp chất có khả năng gây hại như acrylamide, đặc biệt là trong thực phẩm giàu carbohydrate. Tuy nhiên, với một chế độ ăn uống cân bằng, lợi ích về hương vị thường được coi là lớn hơn nguy cơ tiềm ẩn.'
      },
      {
        question: 'Vai trò của độ pH trong phản ứng Maillard là gì?',
        answer: 'Phản ứng Maillard diễn ra nhanh hơn trong môi trường kiềm (pH cao). Đây là lý do tại sao một số công thức làm bánh quy có thêm một chút baking soda (một chất kiềm) để giúp bánh có màu nâu vàng đẹp mắt và nhanh hơn.'
      },
      {
        question: 'Có thể có phản ứng Maillard mà không cần nhiệt độ cao không?',
        answer: 'Có, nhưng rất chậm. Phản ứng Maillard có thể xảy ra ở nhiệt độ phòng trong thời gian dài. Đây là một trong những lý do khiến các loại thực phẩm lưu trữ lâu ngày như sữa đặc có thể dần chuyển sang màu nâu và thay đổi hương vị.'
      },
      {
        question: 'Tại sao hành tây khi xào lại có vị ngọt và thơm?',
        answer: 'Khi xào hành tây, nhiệt độ cao không chỉ gây ra phản ứng Maillard (tạo ra màu nâu và hương vị phức tạp) mà còn phá vỡ các phân tử đường phức tạp trong hành tây thành các phân tử đường đơn giản hơn, làm cho chúng có vị ngọt hơn.'
      }
    ],
    realWorldApplications: ['Nướng bánh mì', 'Rang cà phê', 'Áp chảo thịt'],
  },
  {
    id: 'emulsification',
    title: 'Sự nhũ hóa: Bí mật đằng sau Sốt Mayonnaise',
    description:
      'Tìm hiểu cách dầu và nước, hai chất lỏng không thể hòa tan, lại có thể kết hợp với nhau để tạo thành một hỗn hợp mịn màng.',
    duration: '75 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=zhI7bQyTmHw',
    imageUrl: 'https://i.ytimg.com/vi/zhI7bQyTmHw/hqdefault.jpg',
    keyConcept: 'Colloidal systems',
    objectives: [
      'Định nghĩa được sự nhũ hóa và chất nhũ hóa.',
      'Hiểu vai trò của lecithin trong lòng đỏ trứng.',
      'Thực hành tạo ra một dung dịch nhũ tương ổn định.',
    ],
    prerequisites: ['Kiến thức cơ bản về phân tử phân cực và không phân cực.'],
    exercises: [
      {
        title: 'Tự làm sốt Mayonnaise',
        description: 'Tạo ra sốt mayonnaise từ các nguyên liệu cơ bản.',
        difficulty: 'Trung bình',
        procedure: [
          'Tách lấy lòng đỏ trứng.',
          'Từ từ thêm dầu ăn vào lòng đỏ trong khi đánh liên tục.',
          'Thêm giấm hoặc chanh và quan sát sự thay đổi.',
        ],
        expectedResults: 'Một hỗn hợp sốt mayonnaise mịn, không bị tách lớp.',
      },
    ],
    faqs: [
      {
        question: 'Nhũ tương là gì?',
        answer: 'Nhũ tương là một hỗn hợp gồm hai chất lỏng thường không hòa tan vào nhau, như dầu và nước, trong đó một chất lỏng được phân tán thành các giọt nhỏ li ti trong chất lỏng kia. Sữa, sốt mayonnaise và sốt salad là những ví dụ về nhũ tương trong thực phẩm.'
      },
      {
        question: 'Chất nhũ hóa là gì và nó hoạt động như thế nào?',
        answer: 'Chất nhũ hóa là một phân tử đặc biệt có hai đầu: một đầu "ưa nước" (hòa tan trong nước) và một đầu "ưa dầu" (hòa tan trong dầu). Nó hoạt động như một cầu nối, bao bọc các giọt dầu nhỏ và giúp chúng phân tán đều trong nước mà không bị tách lớp.'
      },
      {
        question: 'Lecithin trong lòng đỏ trứng hoạt động như một chất nhũ hóa như thế nào?',
        answer: 'Lecithin là một chất nhũ hóa tự nhiên mạnh mẽ có trong lòng đỏ trứng. Phân tử lecithin có một đầu phosphate ưa nước và một đầu axit béo ưa dầu. Khi làm mayonnaise, đầu ưa dầu của lecithin bám vào các giọt dầu, trong khi đầu ưa nước hướng ra ngoài, tương tác với nước (từ lòng đỏ và giấm/chanh), tạo ra một hỗn hợp ổn định.'
      },
      {
        question: 'Tại sao sốt mayonnaise của tôi bị tách lớp (bị vữa)?',
        answer: 'Mayonnaise bị tách lớp thường do thêm dầu vào quá nhanh. Khi đó, các chất nhũ hóa trong lòng đỏ trứng không có đủ thời gian để bao bọc các giọt dầu, khiến chúng kết tụ lại với nhau và tách ra khỏi phần nước.'
      },
      {
        question: 'Làm thế nào để "cứu" một mẻ mayonnaise bị hỏng?',
        answer: 'Bạn có thể thử "cứu" nó. Lấy một lòng đỏ trứng mới vào một bát sạch, sau đó từ từ nhỏ từng giọt hỗn hợp mayonnaise hỏng vào và đánh đều. Lòng đỏ trứng mới sẽ cung cấp thêm chất nhũ hóa để ổn định lại hỗn hợp.'
      },
      {
        question: 'Ngoài mayonnaise, có những loại nhũ tương thực phẩm phổ biến nào khác?',
        answer: 'Rất nhiều! Sữa là một nhũ tương của chất béo trong nước. Bơ là một nhũ tương của nước trong chất béo. Các loại sốt salad (vinaigrette), kem, và sô cô la cũng là những ví dụ về nhũ tương.'
      },
      {
        question: 'Sự khác biệt giữa nhũ tương tạm thời và nhũ tương vĩnh viễn là gì?',
        answer: 'Nhũ tương tạm thời, như sốt dầu giấm đơn giản (dầu và giấm), sẽ nhanh chóng tách lớp sau khi bạn ngừng lắc. Nhũ tương vĩnh viễn, như mayonnaise, có chứa một chất nhũ hóa mạnh giúp nó giữ được sự ổn định trong một thời gian dài.'
      },
      {
        question: 'Có thể làm mayonnaise mà không cần trứng không?',
        answer: 'Có, bạn có thể làm mayonnaise thuần chay. Thay vì lòng đỏ trứng, bạn có thể sử dụng các chất nhũ hóa khác như aquafaba (nước luộc đậu gà), protein đậu nành, hoặc các loại gôm thực vật.'
      },
      {
        question: 'Vai trò của mù tạt trong công thức làm mayonnaise là gì?',
        answer: 'Mù tạt đóng hai vai trò. Thứ nhất, nó thêm hương vị. Thứ hai, hạt mù tạt chứa một lượng nhỏ chất nhũ hóa tự nhiên và có thể giúp ổn định nhũ tương, làm cho quá trình làm mayonnaise dễ dàng hơn một chút.'
      },
      {
        question: 'Tại sao phải thêm dầu từ từ khi làm nhũ tương?',
        answer: 'Việc thêm dầu từ từ cho phép lực cắt từ việc đánh (bằng phới hoặc máy) phá vỡ dầu thành các giọt nhỏ. Điều này tạo ra diện tích bề mặt lớn hơn cho các chất nhũ hóa bám vào và bao bọc các giọt dầu, ngăn chúng kết tụ lại với nhau.'
      }
    ],
    realWorldApplications: ['Sản xuất sốt salad', 'Làm kem', 'Dược phẩm'],
  },
];
