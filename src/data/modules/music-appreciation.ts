import { ModuleData } from '@/types';

export const musicAppreciationModuleData: ModuleData = {
  id: 'music-appreciation',
  title: 'Âm Nhạc và Cảm Thụ Âm Nhạc',
  subtitle: 'Hành trình lắng nghe và thấu hiểu ngôn ngữ của âm nhạc, từ cổ điển đến hiện đại.',
  description:
    'Module này giúp bạn vượt qua việc nghe nhạc một cách thụ động để bắt đầu lắng nghe một cách chủ động. Bạn sẽ được tìm hiểu về các yếu tố cơ bản của âm nhạc, các thể loại và những nhà soạn nhạc vĩ đại, từ đó làm giàu thêm trải nghiệm âm nhạc của mình.',
  image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&h=600&fit=crop',
  color: 'from-red-400 to-yellow-500',
  category: 'Nghệ thuật & Nhân văn',
  level: 'Trung học',
  duration: '9 tuần',
  lessons: [
    {
      id: 'cac-yeu-to-am-nhac',
      title: 'Các Yếu Tố Cơ Bản Của Âm Nhạc',
      description:
        'Tìm hiểu về những "viên gạch" xây nên một tác phẩm âm nhạc: giai điệu, hòa âm, tiết tấu, âm sắc và cấu trúc.',
      duration: '50 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Phân tích bài hát yêu thích', 'Học chơi nhạc cụ', 'Sáng tác nhạc'],
      objectives: [
        'Phân biệt được giai điệu (melody) và hòa âm (harmony).',
        'Nhận biết các loại nhịp điệu (rhythm) và tiết tấu khác nhau.',
        'Hiểu khái niệm âm sắc (timbre) - thứ giúp phân biệt tiếng đàn violin và tiếng kèn trumpet.',
        'Làm quen với các cấu trúc bài hát phổ biến (ví dụ: AABA, verse-chorus).',
      ],
      faqs: [
        {
          question: 'Giai điệu và hòa âm khác nhau như thế nào?',
          answer:
            'Giai điệu là một chuỗi các nốt nhạc được chơi lần lượt, là phần "lời ca" mà bạn có thể ngân nga theo. Hòa âm là nhiều nốt nhạc được chơi cùng một lúc để tạo ra các hợp âm, làm nền và tạo nên chiều sâu cho giai điệu.',
        },
        {
          question: 'Âm sắc (timbre) là gì?',
          answer:
            'Âm sắc là "màu sắc" hay "chất giọng" riêng của mỗi loại nhạc cụ hoặc giọng hát. Đó là lý do tại sao cùng chơi một nốt Đô, nhưng tiếng piano, guitar và sáo lại nghe hoàn toàn khác nhau.',
        },
      ],
      quizzes: [
        {
          question: 'Yếu tố nào của âm nhạc liên quan đến độ nhanh, chậm của một bản nhạc?',
          options: ['Giai điệu', 'Hòa âm', 'Tiết tấu (Tempo)', 'Âm sắc'],
          correctAnswerIndex: 2,
          explanation:
            'Tiết tấu (bao gồm cả nhịp và tempo) là yếu tố quyết định "xương sống" về mặt thời gian của bản nhạc, bao gồm cả tốc độ nhanh hay chậm.',
        },
      ],
    },
    {
      id: 'nhac-co-dien',
      title: 'Dạo Chơi Trong Thế Giới Nhạc Cổ Điển',
      description:
        'Làm quen với ba nhà soạn nhạc vĩ đại của thời kỳ Cổ điển Viên: Haydn, Mozart và Beethoven, và lắng nghe những tác phẩm bất hủ của họ.',
      duration: '60 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Nhạc phim', 'Nhạc quảng cáo', 'Cải thiện sự tập trung'],
      objectives: [
        'Hiểu các đặc điểm của âm nhạc thời kỳ Cổ điển: sự trong sáng, cân đối, cấu trúc rõ ràng.',
        'Làm quen với cuộc đời và phong cách của Mozart - một thần đồng âm nhạc.',
        'Khám phá sự nghiệp của Beethoven - người đã kết nối thời kỳ Cổ điển và Lãng mạn.',
        'Nghe và nhận biết một số tác phẩm nổi tiếng như "Bản giao hưởng số 5" (Beethoven) hay "Eine kleine Nachtmusik" (Mozart).',
      ],
      faqs: [
        {
          question: 'Tại sao Beethoven vẫn có thể soạn nhạc sau khi bị điếc?',
          answer:
            'Beethoven bắt đầu mất thính lực dần dần, không phải ngay lập tức. Quan trọng hơn, ông có một khả năng gọi là "inner ear" (tai trong) phi thường. Ông có thể "nghe" thấy âm nhạc trong đầu mình, hình dung ra sự kết hợp của các nhạc cụ và cấu trúc của tác phẩm mà không cần nghe bằng tai thường. Những tác phẩm vĩ đại nhất của ông được sáng tác khi ông đã điếc hoàn toàn.',
        },
        {
          question: 'Nhạc cổ điển có khó nghe không?',
          answer:
            'Không hẳn. Nhiều tác phẩm nhạc cổ điển có giai điệu rất hay và quen thuộc (bạn có thể đã nghe trong phim ảnh hoặc quảng cáo mà không biết). Hãy bắt đầu với những bản nhạc ngắn, vui tươi của Mozart hoặc những giai điệu mạnh mẽ, quen thuộc của Beethoven, bạn sẽ thấy nó không hề xa lạ.',
        },
      ],
      quizzes: [
        {
          question: 'Bốn nốt nhạc "ngắn-ngắn-ngắn-dài" (da-da-da-DUM) mở đầu cho bản giao hưởng nào sau đây?',
          options: [
            'Giao hưởng "Bất ngờ" của Haydn',
            'Giao hưởng số 40 của Mozart',
            'Giao hưởng số 5 của Beethoven',
            'Giao hưởng "Từ Thế giới Mới" của Dvořák',
          ],
          correctAnswerIndex: 2,
          explanation:
            'Đây là mô-típ mở đầu nổi tiếng và đầy kịch tính của Bản giao hưởng số 5 của Beethoven, thường được gọi là bản giao hưởng "Định mệnh".',
        },
      ],
    },
    {
      id: 'nhac-jazz-blues',
      title: 'Nguồn Gốc Của Nhạc Pop: Blues và Jazz',
      description:
        'Hành trình ngược dòng thời gian về miền Nam nước Mỹ để tìm hiểu nguồn gốc của nhạc Blues và sự ra đời của Jazz - hai thể loại âm nhạc có ảnh hưởng sâu sắc đến hầu hết các dòng nhạc hiện đại.',
      duration: '55 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Hiểu về nhạc Pop, Rock, R&B', 'Kỹ thuật ứng tác (improvisation)'],
      objectives: [
        'Hiểu được nguồn gốc của nhạc Blues từ những bài ca lao động và tâm linh của người Mỹ gốc Phi.',
        'Nhận biết cấu trúc 12 ô nhịp (12-bar blues) đặc trưng của nhạc Blues.',
        'Khám phá sự ra đời của nhạc Jazz tại New Orleans với đặc trưng là sự ứng tác và nhịp điệu swing.',
        'Làm quen với các nghệ sĩ huyền thoại như Louis Armstrong, Duke Ellington.',
      ],
      faqs: [
        {
          question: 'Tại sao nhạc Blues thường nghe có vẻ buồn?',
          answer:
            'Nhạc Blues ra đời từ nỗi thống khổ, sự áp bức của người Mỹ gốc Phi sau thời kỳ nô lệ. Lời ca của nó thường kể về những khó khăn trong cuộc sống, tình yêu tan vỡ, sự bất công... Tuy nhiên, Blues cũng là một cách để giải tỏa và vượt qua nỗi buồn đó, nên nó vừa buồn nhưng cũng đầy nội lực.',
        },
        {
          question: 'Ứng tác (improvisation) trong nhạc Jazz là gì?',
          answer:
            'Ứng tác là việc người nhạc công sáng tạo ra giai điệu ngay tại chỗ, không dựa trên bản nhạc có sẵn. Trong một ban nhạc Jazz, các nhạc công sẽ lần lượt "solo", thể hiện kỹ thuật và sự sáng tạo của mình dựa trên một cấu trúc hợp âm đã được thống nhất trước. Đây chính là linh hồn của nhạc Jazz.',
        },
      ],
      quizzes: [
        {
          question: 'Thành phố nào của Mỹ được coi là cái nôi của nhạc Jazz?',
          options: ['New York', 'Chicago', 'Los Angeles', 'New Orleans'],
          correctAnswerIndex: 3,
          explanation:
            'New Orleans, với sự pha trộn văn hóa đa dạng của người Pháp, Tây Ban Nha, và châu Phi, đã tạo ra một môi trường độc đáo cho sự ra đời và phát triển của nhạc Jazz vào đầu thế kỷ 20.',
        },
      ],
    },
  ],
  features: [
    'Giải thích các yếu tố âm nhạc một cách trực quan',
    'Giới thiệu các nhà soạn nhạc và thể loại lớn',
    'Thư viện audio với các tác phẩm tiêu biểu',
    'Hướng dẫn lắng nghe chủ động',
  ],
  prerequisites: ['Không yêu cầu kiến thức nhạc lý, chỉ cần một đôi tai cởi mở'],
  objectives: [
    'Phát triển khả năng lắng nghe và cảm thụ âm nhạc một cách sâu sắc hơn.',
    'Nắm được lịch sử phát triển của các thể loại âm nhạc quan trọng.',
    'Làm giàu vốn văn hóa và trải nghiệm thẩm mỹ.',
    'Tìm thấy niềm vui trong việc khám phá những dòng nhạc mới.',
  ],
  careerOutcomes: [
    'Nền tảng cho những ai muốn theo đuổi các ngành sản xuất âm nhạc, phê bình âm nhạc, báo chí văn hóa.',
    'Tăng cường sự sáng tạo và khả năng cảm thụ nghệ thuật, hữu ích cho mọi lĩnh vực.',
  ],
  tags: ['âm nhạc', 'cảm thụ âm nhạc', 'nhạc cổ điển', 'jazz', 'blues'],
};
