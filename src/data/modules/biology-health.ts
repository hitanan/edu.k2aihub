import { ModuleData } from '@/types';

export const biologyHealthModuleData: ModuleData = {
  id: 'biology-health',
  title: 'Sinh Học và Sức Khỏe Con Người',
  subtitle: 'Khám phá mối liên hệ mật thiết giữa sinh học, di truyền, dinh dưỡng và sức khỏe toàn diện.',
  description:
    'Module này cung cấp kiến thức nền tảng về cơ thể người, từ cấp độ tế bào đến các hệ cơ quan, đồng thời trang bị những hiểu biết quan trọng về dinh dưỡng, phòng bệnh và duy trì một lối sống lành mạnh.',
  image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1200&h=600&fit=crop',
  color: 'from-red-500 to-orange-500',
  category: 'Khoa học & Sức khỏe',
  level: 'Trung học',
  duration: '12 tuần',
  lessons: [
    {
      id: 'di-truyen-hoc',
      title: 'Di Truyền Học và Bệnh Tật',
      description:
        'Tìm hiểu về DNA, gen, nhiễm sắc thể và cách các đột biến di truyền có thể dẫn đến bệnh tật. Khám phá các ứng dụng của di truyền học trong y học hiện đại.',
      duration: '60 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Tư vấn di truyền', 'Liệu pháp gen', 'Sàng lọc trước sinh'],
      objectives: [
        'Hiểu cấu trúc của DNA và vai trò của gen trong việc quy định tính trạng.',
        'Phân biệt các loại đột biến gen và đột biến nhiễm sắc thể.',
        'Giải thích cơ chế di truyền của một số bệnh phổ biến (ví dụ: bệnh hồng cầu hình liềm, bệnh mù màu).',
        'Tìm hiểu về các công nghệ di truyền hiện đại như CRISPR-Cas9.',
      ],
      faqs: [
        {
          question: 'DNA, gen và nhiễm sắc thể liên quan với nhau như thế nào?',
          answer:
            'Hãy tưởng tượng DNA là một cuộn chỉ khổng lồ. Một đoạn chỉ chứa thông tin mã hóa cho một protein cụ thể được gọi là gen. Cuộn chỉ này được nén và gói lại rất chặt chẽ để tạo thành cấu trúc gọi là nhiễm sắc thể. Con người có 23 cặp nhiễm sắc thể trong mỗi tế bào.',
        },
        {
          question: 'Liệu pháp gen là gì?',
          answer:
            'Liệu pháp gen là một kỹ thuật y học nhằm sửa chữa hoặc thay thế các gen bị lỗi gây bệnh. Ví dụ, các nhà khoa học có thể sử dụng một virus đã được vô hiệu hóa để "vận chuyển" một bản sao gen khỏe mạnh vào tế bào của bệnh nhân.',
        },
        {
          question: 'Đột biến là gì và có phải tất cả đột biến đều có hại không?',
          answer:
            'Đột biến là một sự thay đổi trong trình tự DNA. Không phải tất cả đột biến đều có hại. Một số đột biến là trung tính (không có ảnh hưởng), một số có hại (gây bệnh), và một số khác thậm chí có thể có lợi, tạo ra sự đa dạng di truyền và là động lực cho quá trình tiến hóa.',
        },
        {
          question: 'CRISPR-Cas9 là gì và tại sao nó lại là một cuộc cách mạng?',
          answer:
            'CRISPR-Cas9 là một công cụ chỉnh sửa gen mạnh mẽ, cho phép các nhà khoa học cắt và dán các đoạn DNA một cách chính xác và dễ dàng hơn bao giờ hết. Nó có tiềm năng to lớn trong việc chữa các bệnh di truyền, tạo ra cây trồng có năng suất cao hơn và nghiên cứu chức năng của gen.',
        },
        {
          question: 'Tại sao con cái lại có những đặc điểm giống cả bố và mẹ?',
          answer:
            'Khi thụ tinh, con cái nhận được một nửa bộ nhiễm sắc thể từ bố (qua tinh trùng) và một nửa từ mẹ (qua trứng). Sự kết hợp của hai bộ gen này tạo ra một tổ hợp di truyền độc nhất, mang các đặc điểm từ cả hai bên.',
        },
        {
          question: 'Bệnh di truyền lặn và bệnh di truyền trội khác nhau như thế nào?',
          answer:
            'Đối với bệnh di truyền trội, chỉ cần một bản sao của gen bệnh (từ bố hoặc mẹ) là đủ để biểu hiện bệnh. Đối với bệnh di truyền lặn, cần phải có hai bản sao của gen bệnh (một từ bố và một từ mẹ) thì bệnh mới biểu hiện ra ngoài.',
        },
        {
          question: 'Sàng lọc di truyền trước sinh có mục đích gì?',
          answer:
            'Sàng lọc trước sinh là các xét nghiệm được thực hiện trong thai kỳ để xác định xem thai nhi có nguy cơ cao mắc một số rối loạn di truyền hoặc dị tật bẩm sinh hay không. Nó giúp cha mẹ có thêm thông tin để chuẩn bị và đưa ra quyết định.',
        },
        {
          question: 'Tế bào gốc là gì và chúng có liên quan gì đến di truyền học?',
          answer:
            'Tế bào gốc là những tế bào chưa biệt hóa, có khả năng phát triển thành nhiều loại tế bào khác nhau trong cơ thể. Trong y học tái tạo, các nhà khoa học nghiên cứu cách sử dụng tế bào gốc để thay thế các tế bào bị tổn thương do bệnh tật, bao gồm cả các bệnh di truyền.',
        },
        {
          question: 'Tại sao các nghiên cứu về các cặp song sinh cùng trứng lại quan trọng?',
          answer:
            'Các cặp song sinh cùng trứng có bộ gen gần như giống hệt nhau. Bằng cách nghiên cứu sự khác biệt về sức khỏe và hành vi giữa họ, các nhà khoa học có thể phân biệt được mức độ ảnh hưởng của yếu tố di truyền so với yếu tố môi trường (lối sống, giáo dục) đối với một tính trạng nào đó.',
        },
        {
          question: 'Dự án Bản đồ Gen Người (Human Genome Project) là gì?',
          answer:
            'Đây là một dự án nghiên cứu khoa học quốc tế có mục tiêu xác định trình tự của tất cả các cặp base tạo nên DNA của con người và xác định tất cả các gen của loài người. Dự án hoàn thành vào năm 2003, mở ra một kỷ nguyên mới cho y học và sinh học.',
        },
      ],
      quizzes: [
        {
          question: 'Cấu trúc xoắn kép là đặc trưng của phân tử nào?',
          options: ['Protein', 'RNA', 'DNA', 'Carbohydrate'],
          correctAnswerIndex: 2,
          explanation:
            'James Watson và Francis Crick đã khám phá ra cấu trúc xoắn kép của DNA vào năm 1953, một khám phá nền tảng cho di truyền học hiện đại.',
        },
      ],
    },
    {
      id: 'dinh-duong-khoa-hoc',
      title: 'Khoa Học Dinh Dưỡng',
      description:
        'Nghiên cứu về các nhóm chất dinh dưỡng chính (đạm, đường, béo, vitamin, khoáng chất), vai trò của chúng đối với cơ thể và cách xây dựng một chế độ ăn uống cân bằng.',
      duration: '50 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Xây dựng thực đơn', 'Đọc nhãn thực phẩm', 'Quản lý cân nặng'],
      objectives: [
        'Phân biệt các nhóm chất dinh dưỡng đa lượng và vi lượng.',
        'Hiểu vai trò của protein, carbohydrate và chất béo trong việc cung cấp năng lượng và xây dựng cơ thể.',
        'Nhận biết tầm quan trọng của vitamin và khoáng chất đối với các chức năng sống.',
        'Học cách đọc và hiểu thông tin trên nhãn dinh dưỡng của thực phẩm.',
      ],
      faqs: [
        {
          question: 'Tại sao chất béo (lipid) lại cần thiết cho cơ thể?',
          answer:
            'Chất béo không hoàn toàn xấu. Chúng là nguồn năng lượng dự trữ quan trọng, giúp hấp thụ các vitamin tan trong dầu (A, D, E, K), và là thành phần cấu tạo nên màng tế bào và một số hormone. Điều quan trọng là lựa chọn các loại chất béo không bão hòa lành mạnh (có trong quả bơ, các loại hạt, dầu ô liu).',
        },
        {
          question: 'Carbohydrate "tốt" và "xấu" khác nhau như thế nào?',
          answer:
            'Carb "tốt" (carb phức) có trong ngũ cốc nguyên hạt, rau củ, các loại đậu. Chúng chứa nhiều chất xơ, tiêu hóa chậm, cung cấp năng lượng ổn định. Carb "xấu" (carb đơn) có trong đường, bánh kẹo, nước ngọt. Chúng tiêu hóa nhanh, gây tăng đường huyết đột ngột và ít giá trị dinh dưỡng.',
        },
        {
          question: 'Protein có vai trò gì ngoài việc xây dựng cơ bắp?',
          answer:
            'Protein có vô số vai trò: chúng tạo nên các enzyme xúc tác cho các phản ứng hóa học, các kháng thể của hệ miễn dịch, các hormone như insulin, và hemoglobin vận chuyển oxy trong máu. Chúng thực sự là những "cỗ máy" của tế bào.',
        },
        {
          question: 'Chất xơ là gì và tại sao nó quan trọng?',
          answer:
            'Chất xơ là một loại carbohydrate mà cơ thể không thể tiêu hóa được. Nó không cung cấp năng lượng nhưng lại cực kỳ quan trọng cho hệ tiêu hóa khỏe mạnh, giúp ngăn ngừa táo bón, nuôi dưỡng hệ vi sinh vật đường ruột và có thể giúp kiểm soát lượng đường trong máu.',
        },
        {
          question: 'Sự khác biệt giữa vitamin và khoáng chất là gì?',
          answer:
            'Cả hai đều là vi chất dinh dưỡng. Vitamin là các hợp chất hữu cơ (chứa carbon) do thực vật hoặc động vật tạo ra. Khoáng chất là các nguyên tố vô cơ (không chứa carbon) có trong đất và nước, được thực vật hấp thụ hoặc động vật ăn vào.',
        },
        {
          question: 'Tại sao chúng ta cần uống đủ nước?',
          answer:
            'Nước chiếm khoảng 60% trọng lượng cơ thể và tham gia vào hầu hết mọi chức năng, từ điều hòa thân nhiệt, vận chuyển chất dinh dưỡng, loại bỏ chất thải, đến bôi trơn các khớp. Mất nước có thể dẫn đến mệt mỏi, đau đầu và suy giảm chức năng nhận thức.',
        },
        {
          question: 'Chất chống oxy hóa (antioxidant) là gì?',
          answer:
            'Chất chống oxy hóa là các hợp chất có trong thực vật (như vitamin C, E, beta-carotene) giúp bảo vệ tế bào của chúng ta khỏi bị hư hại bởi các phân tử không ổn định gọi là gốc tự do. Gốc tự do có thể gây ra lão hóa và các bệnh mãn tính.',
        },
        {
          question: 'Calo là gì?',
          answer:
            'Calo là một đơn vị đo năng lượng. Lượng calo ghi trên nhãn thực phẩm cho bạn biết thực phẩm đó cung cấp bao nhiêu năng lượng cho cơ thể. Nhu cầu calo của mỗi người phụ thuộc vào tuổi tác, giới tính, cân nặng và mức độ hoạt động thể chất.',
        },
        {
          question: 'Làm thế nào để đọc nhãn dinh dưỡng một cách hiệu quả?',
          answer:
            'Hãy chú ý đến "serving size" (khẩu phần) đầu tiên. Sau đó, xem lượng calo, chất béo bão hòa, đường và natri (muối) - nên hạn chế những chất này. Đồng thời, tìm kiếm các chất dinh dưỡng tốt như chất xơ, vitamin và khoáng chất.',
        },
        {
          question: 'Chế độ ăn chay có đủ dinh dưỡng không?',
          answer:
            'Hoàn toàn có thể. Một chế độ ăn chay hoặc thuần chay được lên kế hoạch tốt có thể cung cấp tất cả các chất dinh dưỡng bạn cần. Tuy nhiên, người ăn chay cần chú ý bổ sung đủ một số chất dinh dưỡng có nhiều trong thực phẩm động vật như vitamin B12, sắt, canxi và axit béo omega-3.',
        },
      ],
      quizzes: [
        {
          question: 'Nhóm chất nào sau đây là nguồn cung cấp năng lượng chính cho cơ thể?',
          options: ['Vitamin', 'Chất xơ', 'Carbohydrate', 'Nước'],
          correctAnswerIndex: 2,
          explanation:
            'Carbohydrate (chất bột đường) là nguồn năng lượng ưu tiên và dễ sử dụng nhất của cơ thể, đặc biệt là cho não bộ và các hoạt động thể chất.',
        },
      ],
    },
    {
      id: 'phong-benh-chu-dong',
      title: 'Phòng Bệnh Chủ Động và Hệ Miễn Dịch',
      description:
        'Tìm hiểu về hệ miễn dịch, cách vaccine hoạt động để bảo vệ cơ thể, và các biện pháp phòng ngừa bệnh truyền nhiễm cũng như các bệnh không lây nhiễm phổ biến.',
      duration: '55 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Tiêm chủng vaccine', 'Rửa tay đúng cách', 'Tầm soát sức khỏe định kỳ'],
      objectives: [
        'Mô tả các thành phần chính của hệ miễn dịch (miễn dịch bẩm sinh và miễn dịch thu được).',
        'Giải thích cơ chế hoạt động của vaccine trong việc tạo ra "trí nhớ miễn dịch".',
        'Nắm vững các biện pháp vệ sinh cá nhân để phòng bệnh truyền nhiễm.',
        'Hiểu tầm quan trọng của lối sống lành mạnh (dinh dưỡng, vận động) trong việc phòng các bệnh mãn tính như tiểu đường, tim mạch.',
      ],
      faqs: [
        {
          question: 'Vaccine hoạt động như thế nào?',
          answer:
            'Vaccine chứa các phiên bản đã bị làm yếu hoặc bất hoạt của mầm bệnh (hoặc chỉ một phần của mầm bệnh). Khi được đưa vào cơ thể, chúng không đủ sức gây bệnh nhưng đủ để kích thích hệ miễn dịch nhận diện, tạo ra kháng thể và các tế bào ghi nhớ. Nhờ vậy, khi mầm bệnh thật sự xâm nhập, cơ thể đã sẵn sàng để chống lại một cách nhanh chóng và hiệu quả.',
        },
        {
          question: 'Tại sao rửa tay bằng xà phòng lại hiệu quả trong việc phòng bệnh?',
          answer:
            'Nhiều vi khuẩn và virus (như virus cúm, coronavirus) có lớp vỏ ngoài bằng chất béo (lipid). Xà phòng có cấu trúc phân tử đặc biệt, một đầu ưa nước và một đầu ưa dầu/mỡ. Đầu ưa dầu sẽ phá vỡ lớp vỏ béo của virus, làm nó bất hoạt. Nước sau đó sẽ rửa trôi tất cả đi.',
        },
        {
          question: 'Sự khác biệt giữa miễn dịch bẩm sinh và miễn dịch thu được là gì?',
          answer:
            'Miễn dịch bẩm sinh là tuyến phòng thủ đầu tiên, không đặc hiệu, hoạt động ngay lập tức (ví dụ: da, các tế bào bạch cầu). Miễn dịch thu được (hay miễn dịch thích ứng) là tuyến phòng thủ thứ hai, có tính đặc hiệu cao, cần thời gian để phát triển và có khả năng "ghi nhớ" mầm bệnh (ví dụ: kháng thể, tế bào T).',
        },
        {
          question: 'Kháng sinh và vaccine khác nhau như thế nào?',
          answer:
            'Vaccine dùng để PHÒNG bệnh, chủ yếu là các bệnh do virus. Chúng giúp hệ miễn dịch tự tạo ra sự bảo vệ. Kháng sinh dùng để ĐIỀU TRỊ bệnh, và chúng chỉ có tác dụng với vi khuẩn, không có tác dụng với virus. Lạm dụng kháng sinh có thể dẫn đến tình trạng kháng kháng sinh.',
        },
        {
          question: 'Miễn dịch cộng đồng (herd immunity) là gì?',
          answer:
            'Miễn dịch cộng đồng xảy ra khi một tỷ lệ lớn dân số đã có miễn dịch với một bệnh truyền nhiễm (thông qua tiêm chủng hoặc đã từng mắc bệnh). Điều này làm giảm khả năng lây lan của mầm bệnh, giúp bảo vệ gián tiếp những người không thể tiêm chủng (như trẻ sơ sinh, người có hệ miễn dịch suy yếu).',
        },
        {
          question: 'Tại sao giấc ngủ lại quan trọng đối với hệ miễn dịch?',
          answer:
            'Trong khi ngủ, cơ thể sản xuất và giải phóng các protein quan trọng gọi là cytokine, một số trong đó giúp thúc đẩy giấc ngủ và một số cần thiết để chống lại nhiễm trùng và viêm. Thiếu ngủ có thể làm giảm sản xuất các cytokine bảo vệ này, khiến bạn dễ bị ốm hơn.',
        },
        {
          question: 'Bệnh tự miễn là gì?',
          answer:
            'Bệnh tự miễn là tình trạng hệ miễn dịch tấn công nhầm vào các tế bào và mô khỏe mạnh của chính cơ thể. Ví dụ về các bệnh tự miễn bao gồm lupus, viêm khớp dạng thấp và bệnh tiểu đường type 1.',
        },
        {
          question: 'Tầm soát sức khỏe định kỳ có lợi ích gì?',
          answer:
            'Tầm soát sức khỏe định kỳ giúp phát hiện sớm các vấn đề sức khỏe hoặc bệnh tật trước khi chúng có triệu chứng rõ ràng. Việc phát hiện sớm thường giúp cho việc điều trị trở nên dễ dàng, hiệu quả hơn và tăng cơ hội chữa khỏi.',
        },
        {
          question: 'Stress ảnh hưởng đến hệ miễn dịch như thế nào?',
          answer:
            'Stress mãn tính có thể làm suy yếu hệ miễn dịch. Nó làm tăng nồng độ hormone cortisol, và việc tiếp xúc lâu dài với cortisol có thể ức chế hiệu quả của hệ miễn dịch bằng cách giảm số lượng tế bào lympho (một loại tế bào bạch cầu quan trọng).',
        },
        {
          question: 'Bệnh không lây nhiễm là gì?',
          answer:
            'Bệnh không lây nhiễm (NCDs), còn gọi là bệnh mãn tính, là những bệnh không lây từ người này sang người khác. Chúng thường kéo dài và tiến triển chậm. Các ví dụ phổ biến bao gồm bệnh tim mạch, ung thư, bệnh hô hấp mãn tính và tiểu đường.',
        },
      ],
      quizzes: [
        {
          question: 'Hệ miễn dịch tạo ra chất nào để chống lại mầm bệnh một cách đặc hiệu?',
          options: ['Hồng cầu', 'Tiểu cầu', 'Kháng thể (Antibodies)', 'Hormone'],
          correctAnswerIndex: 2,
          explanation:
            'Kháng thể là các protein do tế bào B của hệ miễn dịch tạo ra. Mỗi loại kháng thể được "thiết kế" để nhận diện và gắn vào một loại kháng nguyên (mầm bệnh) cụ thể, giống như chìa khóa và ổ khóa.',
        },
      ],
    },
  ],
  features: [
    'Kiến thức nền tảng về di truyền học',
    'Hướng dẫn dinh dưỡng khoa học và dễ áp dụng',
    'Giải thích về hệ miễn dịch và vaccine',
    'Câu hỏi thực tế về sức khỏe và phòng bệnh',
  ],
  prerequisites: ['Kiến thức sinh học cơ bản'],
  objectives: [
    'Hiểu rõ hơn về cơ thể và sức khỏe của chính mình.',
    'Trang bị kiến thức để xây dựng một lối sống lành mạnh.',
    'Nâng cao khả năng phân biệt thông tin khoa học và tin giả về sức khỏe.',
    'Chủ động trong việc phòng ngừa bệnh tật cho bản thân và cộng đồng.',
  ],
  careerOutcomes: [
    'Nền tảng cho các ngành y, dược, công nghệ sinh học, dinh dưỡng học.',
    'Kiến thức cần thiết cho mọi người để chăm sóc sức khỏe bản thân và gia đình.',
  ],
  tags: ['sinh học', 'sức khỏe', 'di truyền', 'dinh dưỡng', 'miễn dịch'],
};
