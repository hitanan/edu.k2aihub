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
        {
            question: 'Tiết tấu (rhythm) là gì?',
            answer: 'Tiết tấu là sự sắp xếp của âm thanh trong thời gian. Nó bao gồm độ dài của các nốt nhạc và khoảng lặng giữa chúng, tạo ra các mẫu hình nhịp điệu (pattern) lặp đi lặp lại, khiến bạn muốn gật gù hay nhún nhảy theo.'
        },
        {
            question: 'Tempo là gì?',
            answer: 'Tempo là tốc độ của bản nhạc, được đo bằng số phách mỗi phút (BPM - Beats Per Minute). Tempo nhanh tạo cảm giác sôi nổi, khẩn trương, trong khi tempo chậm tạo cảm giác thư thái, buồn bã.'
        },
        {
            question: 'Động lực (dynamics) trong âm nhạc nghĩa là gì?',
            answer: 'Động lực là độ to nhỏ (âm lượng) của âm nhạc. Các ký hiệu như p (piano - nhỏ) và f (forte - to) được dùng để chỉ dẫn người chơi nhạc thể hiện sắc thái tình cảm, từ thì thầm đến bùng nổ.'
        },
        {
            question: 'Cấu trúc verse-chorus là gì?',
            answer: 'Đây là cấu trúc phổ biến nhất trong nhạc pop. "Verse" (phiên khúc) là phần lời hát thay đổi để kể chuyện. "Chorus" (điệp khúc) là phần có giai điệu và lời hát lặp lại, chứa đựng thông điệp chính và dễ nhớ nhất của bài hát.'
        },
        {
            question: 'Hợp âm là gì?',
            answer: 'Hợp âm là sự kết hợp của ba hoặc nhiều nốt nhạc vang lên cùng một lúc. Các chuỗi hợp âm (chord progression) tạo nên phần nền hòa âm cho bài hát, dẫn dắt cảm xúc của người nghe.'
        },
        {
            question: 'Tại sao một bài hát nghe có vẻ "vui" hoặc "buồn"?',
            answer: 'Điều này thường được quyết định bởi việc sử dụng hợp âm trưởng (major) và thứ (minor). Hợp âm trưởng thường tạo cảm giác vui tươi, lạc quan, trong khi hợp âm thứ thường gợi lên cảm giác buồn, sâu lắng hoặc kịch tính.'
        },
        {
            question: 'Nhịp 4/4 nghĩa là gì?',
            answer: 'Đây là loại nhịp phổ biến nhất. Số 4 ở trên có nghĩa là có 4 phách trong mỗi ô nhịp. Số 4 ở dưới có nghĩa là mỗi phách tương ứng với một nốt đen. Bạn có thể đếm "1-2-3-4, 1-2-3-4" theo hầu hết các bài nhạc pop, rock hiện nay.'
        },
        {
            question: 'Sự khác biệt giữa cấu trúc và hình thức (form) là gì?',
            answer: 'Cấu trúc (structure) thường đề cập đến cách sắp xếp các phần trong một bài hát (verse, chorus, bridge). Hình thức (form) là một khái niệm rộng hơn, có thể chỉ các mẫu hình lớn hơn như sonata form trong nhạc cổ điển hay 12-bar blues trong nhạc blues.'
        }
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
        {
            question: 'Thời kỳ Cổ điển trong âm nhạc là khoảng thời gian nào?',
            answer: 'Thời kỳ Cổ điển (Classical period) trong âm nhạc phương Tây kéo dài từ khoảng năm 1730 đến 1820. Đặc trưng của thời kỳ này là sự nhấn mạnh vào sự rõ ràng, cân bằng và cấu trúc mạch lạc.'
        },
        {
            question: 'Haydn được mệnh danh là gì?',
            answer: 'Joseph Haydn thường được gọi là "Cha đẻ của Giao hưởng" và "Cha đẻ của Tứ tấu đàn dây" vì những đóng góp to lớn của ông trong việc định hình và phát triển hai thể loại âm nhạc quan trọng này.'
        },
        {
            question: 'Mozart đã sáng tác bao nhiêu tác phẩm?',
            answer: 'Trong cuộc đời ngắn ngủi 35 năm của mình, Mozart đã sáng tác hơn 800 tác phẩm ở mọi thể loại âm nhạc thời đó, từ opera, giao hưởng, concerto cho đến nhạc thính phòng. Đây là một minh chứng cho tài năng thiên bẩm của ông.'
        },
        {
            question: 'Sonata form là gì?',
            answer: 'Đây là một hình thức âm nhạc quan trọng của thời kỳ Cổ điển, thường được sử dụng trong chương đầu tiên của các bản giao hưởng, sonata. Nó gồm 3 phần chính: Trình bày (Exposition), Phát triển (Development), và Tái hiện (Recapitulation).'
        },
        {
            question: 'Tại sao âm nhạc của Mozart nghe có vẻ "trong sáng" và "thanh lịch"?',
            answer: 'Âm nhạc của Mozart phản ánh đặc trưng của thời kỳ Cổ điển: giai điệu đẹp, dễ nghe, cấu trúc cân đối và hòa âm rõ ràng. Ông là bậc thầy trong việc tạo ra những giai điệu duyên dáng và có khả năng biểu cảm sâu sắc một cách tự nhiên.'
        },
        {
            question: 'Bản giao hưởng số 9 của Beethoven có gì đặc biệt?',
            answer: 'Đây là bản giao hưởng lớn đầu tiên có sự tham gia của dàn hợp xướng và ca sĩ solo. Phần cuối của bản giao hưởng phổ nhạc bài thơ "Ode to Joy" (Khúc hoan ca), trở thành một biểu tượng của tình huynh đệ và hòa bình thế giới.'
        },
        {
            question: 'Concerto là gì?',
            answer: 'Concerto là một tác phẩm âm nhạc dành cho một hoặc nhiều nhạc cụ độc tấu (soloist) chơi cùng với dàn nhạc. Đây là nơi để người nghệ sĩ độc tấu thể hiện kỹ thuật điêu luyện của mình.'
        },
        {
            question: 'Sự khác biệt chính giữa thời kỳ Baroque và Cổ điển là gì?',
            answer: 'Âm nhạc Baroque (trước Cổ điển) thường phức tạp, trang trí công phu với nhiều tuyến giai điệu chồng chéo (polyphony). Âm nhạc Cổ điển chuyển sang phong cách đơn giản hơn, tập trung vào một giai điệu chính rõ ràng và phần đệm hòa âm (homophony).'
        }
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
        {
            question: 'Cấu trúc 12 ô nhịp (12-bar blues) là gì?',
            answer: 'Đây là một chuỗi hợp âm (chord progression) gồm 12 ô nhịp, là cấu trúc phổ biến và nền tảng nhất trong nhạc Blues. Hầu hết các bài hát Blues và nhiều bài Rock and Roll đều được xây dựng dựa trên cấu trúc này.'
        },
        {
            question: 'Nốt "blue" (blue note) là gì?',
            answer: 'Là những nốt nhạc được chơi hoặc hát ở một cao độ hơi khác (thường là thấp hơn một chút) so với cao độ chuẩn. Những nốt này tạo ra âm thanh đặc trưng, có chút "méo mó", u uất của nhạc Blues.'
        },
        {
            question: 'Nhịp điệu "swing" trong nhạc Jazz là gì?',
            answer: 'Swing là một cảm giác về nhịp điệu, khó có thể định nghĩa chính xác bằng lời. Về cơ bản, nó là cách chơi các nốt móc đơn không đều nhau (nốt đầu dài hơn nốt sau), tạo ra một cảm giác nhún nhảy, lôi cuốn, thôi thúc người nghe phải chuyển động.'
        },
        {
            question: 'Louis Armstrong có đóng góp gì quan trọng cho nhạc Jazz?',
            answer: 'Louis Armstrong, với biệt danh "Satchmo", là một trong những nhân vật có ảnh hưởng nhất trong lịch sử nhạc Jazz. Ông đã biến Jazz từ một dòng nhạc tập thể thành nghệ thuật của người độc tấu (soloist) và là một bậc thầy về ứng tác.'
        },
        {
            question: 'Big Band là gì?',
            answer: 'Big Band là một loại dàn nhạc Jazz lớn, phổ biến trong kỷ nguyên Swing (những năm 1930-1940). Nó thường bao gồm các bộ kèn (trumpet, trombone, saxophone) và bộ nhịp điệu (piano, guitar, bass, trống).'
        },
        {
            question: 'Blues đã ảnh hưởng đến Rock and Roll như thế nào?',
            answer: 'Rock and Roll về cơ bản là nhạc Blues được chơi với nhịp điệu mạnh hơn, tempo nhanh hơn và sử dụng các nhạc cụ điện. Nhiều nghệ sĩ Rock and Roll đầu tiên như Elvis Presley, Chuck Berry đều cover lại các bài hát Blues.'
        },
        {
            question: 'Scat singing là gì?',
            answer: 'Là một kỹ thuật hát ứng tác trong nhạc Jazz, trong đó ca sĩ sử dụng những âm tiết vô nghĩa (như "doo-be-doo-bop") để hát những giai điệu ngẫu hứng, bắt chước âm thanh của một nhạc cụ. Louis Armstrong là một trong những người tiên phong của kỹ thuật này.'
        },
        {
            question: 'Sự khác biệt giữa Blues và Jazz là gì?',
            answer: 'Blues thường có cấu trúc đơn giản hơn (ví dụ: 12 ô nhịp) và tập trung vào việc thể hiện cảm xúc qua lời ca và giai điệu. Jazz phức tạp hơn về hòa âm và nhịp điệu, và đặc biệt nhấn mạnh vào sự ứng tác của các nhạc công.'
        }
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
