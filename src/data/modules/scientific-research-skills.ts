import { ModuleData } from '@/types';

export const scientificResearchSkillsModuleData: ModuleData = {
  id: 'scientific-research-skills',
  title: 'Kỹ Năng Nghiên Cứu Khoa Học',
  subtitle:
    'Học cách đặt câu hỏi, tìm kiếm thông tin, phân tích dữ liệu và trình bày kết quả như một nhà khoa học thực thụ.',
  description:
    'Module này cung cấp một lộ trình chi tiết để bạn thực hiện một dự án nghiên cứu khoa học nhỏ. Từ việc hình thành một câu hỏi nghiên cứu thú vị đến việc trình bày phát hiện của mình một cách thuyết phục, bạn sẽ được trang bị những kỹ năng nền tảng cho mọi hoạt động học thuật và chuyên nghiệp sau này.',
  image: 'https://images.unsplash.com/photo-1579154288985-239e18305365?w=1200&h=600&fit=crop',
  color: 'from-green-500 to-teal-600',
  category: 'Học thuật & Nghiên cứu',
  level: 'Trung học',
  duration: '10 tuần',
  lessons: [
    {
      id: 'what-is-scientific-research',
      title: 'Tổng Quan Về Nghiên Cứu Khoa Học',
      description:
        'Tìm hiểu bản chất của nghiên cứu khoa học, các loại hình nghiên cứu và các bước cơ bản trong một quy trình nghiên cứu.',
      duration: '45 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Nghiên cứu thị trường', 'Phát triển sản phẩm', 'Phân tích chính sách'],
      objectives: [
        'Phân biệt được nghiên cứu khoa học và việc tìm kiếm thông tin thông thường.',
        'Hiểu về các loại hình nghiên cứu chính: nghiên cứu định tính và nghiên cứu định lượng.',
        'Nắm được 7 bước cơ bản của một quy trình nghiên cứu: từ quan sát đến truyền đạt kết quả.',
        'Xác định được các đặc điểm của một câu hỏi nghiên cứu tốt (tính cụ thể, có thể đo lường, có thể trả lời).',
      ],
      faqs: [
        {
          question: 'Nghiên cứu định tính và định lượng khác nhau như thế nào?',
          answer:
            'Nghiên cứu định lượng tập trung vào việc thu thập và phân tích dữ liệu dạng số (ví dụ: bao nhiêu người, tần suất bao nhiêu). Nghiên cứu định tính tập trung vào việc hiểu sâu hơn về các khía cạnh "tại sao" và "như thế nào" thông qua phỏng vấn, quan sát, phân tích văn bản.',
        },
        {
          question: 'Tại sao cần phải có câu hỏi nghiên cứu cụ thể?',
          answer:
            'Một câu hỏi nghiên cứu cụ thể giống như một chiếc la bàn, nó định hướng cho toàn bộ quá trình nghiên cứu của bạn. Một câu hỏi quá rộng (ví dụ: "Mạng xã hội ảnh hưởng đến giới trẻ như thế nào?") sẽ rất khó để trả lời. Một câu hỏi cụ thể hơn (ví dụ: "Việc sử dụng Instagram trên 2 giờ mỗi ngày có ảnh hưởng đến mức độ hài lòng về ngoại hình của nữ sinh lớp 11 tại Hà Nội không?") sẽ dễ dàng hơn nhiều để thiết kế nghiên cứu và tìm câu trả lời.',
        },
        {
          question: 'Giả thuyết (hypothesis) là gì?',
          answer:
            'Giả thuyết là một dự đoán có thể kiểm chứng được về mối quan hệ giữa các biến số. Nó không phải là một câu hỏi, mà là một phát biểu khẳng định mà bạn sẽ cố gắng chứng minh hoặc bác bỏ thông qua nghiên cứu của mình. Ví dụ: "Học sinh ngủ đủ 8 tiếng mỗi đêm có điểm số trung bình cao hơn những học sinh ngủ ít hơn".',
        },
        {
          question: 'Sự khác biệt giữa tương quan (correlation) và quan hệ nhân quả (causation) là gì?',
          answer:
            'Tương quan có nghĩa là hai sự việc xảy ra cùng nhau, nhưng không nhất thiết cái này gây ra cái kia (ví dụ: doanh số bán kem và số vụ đuối nước đều tăng vào mùa hè). Quan hệ nhân quả có nghĩa là một sự việc trực tiếp gây ra sự việc kia. Chứng minh quan hệ nhân quả khó hơn nhiều so với chứng minh tương quan.',
        },
        {
          question: 'Biến số (variable) trong nghiên cứu là gì?',
          answer:
            'Biến số là bất kỳ yếu tố, đặc điểm hoặc điều kiện nào có thể thay đổi hoặc có các giá trị khác nhau. Ví dụ: trong một nghiên cứu về học tập, các biến số có thể là "số giờ học", "điểm số", "phương pháp học", "giới tính".',
        },
        {
          question: 'Mục đích của nhóm đối chứng (control group) trong một thí nghiệm là gì?',
          answer:
            'Nhóm đối chứng là nhóm không nhận được sự can thiệp hoặc yếu tố đang được thử nghiệm. Nó cung cấp một đường cơ sở để so sánh với nhóm thử nghiệm (experimental group), giúp các nhà nghiên cứu xác định xem liệu sự thay đổi quan sát được có thực sự là do sự can thiệp gây ra hay không.',
        },
        {
          question: 'Một nghiên cứu được "bình duyệt" (peer-reviewed) nghĩa là gì?',
          answer:
            'Điều đó có nghĩa là trước khi được xuất bản, bài báo nghiên cứu đã được các chuyên gia khác trong cùng lĩnh vực đánh giá một cách ẩn danh về chất lượng, phương pháp luận và tính hợp lệ của kết quả. Đây là một tiêu chuẩn vàng để đảm bảo chất lượng trong khoa học.',
        },
        {
          question: 'Nghiên cứu có thể hoàn toàn khách quan không?',
          answer:
            'Các nhà khoa học luôn cố gắng để đạt được sự khách quan, nhưng những định kiến cá nhân vẫn có thể ảnh hưởng đến nghiên cứu. Điều quan trọng là nhận thức được những định kiến tiềm tàng này và áp dụng các phương pháp (như thí nghiệm mù đôi) để giảm thiểu chúng.',
        },
        {
          question: 'Tại sao việc lặp lại (replicate) một nghiên cứu lại quan trọng?',
          answer:
            'Việc lặp lại một nghiên cứu bởi các nhà khoa học khác giúp xác minh kết quả và đảm bảo rằng chúng không phải là do ngẫu nhiên hay sai sót. Khi một kết quả có thể được lặp lại nhiều lần, sự tin cậy vào phát hiện đó sẽ tăng lên đáng kể.',
        },
        {
          question: 'Sự khác biệt giữa một học thuyết (theory) và một định luật (law) trong khoa học là gì?',
          answer:
            'Một định luật mô tả một hiện tượng quan sát được (ví dụ: Định luật vạn vật hấp dẫn của Newton mô tả lực hút giữa các vật thể). Một học thuyết là một lời giải thích sâu sắc, được chứng minh bằng nhiều bằng chứng, cho một khía cạnh nào đó của thế giới tự nhiên (ví dụ: Thuyết tương đối của Einstein giải thích tại sao lực hấp dẫn tồn tại).',
        },
      ],
      quizzes: [
        {
          question: 'Bước đầu tiên trong quy trình nghiên cứu khoa học là gì?',
          options: ['Phân tích dữ liệu', 'Quan sát và đặt câu hỏi', 'Viết báo cáo', 'Đưa ra kết luận'],
          correctAnswerIndex: 1,
          explanation:
            'Mọi nghiên cứu khoa học đều bắt đầu từ một sự tò mò, một quan sát về thế giới xung quanh và từ đó hình thành nên các câu hỏi cần được giải đáp.',
        },
      ],
    },
    {
      id: 'literature-review',
      title: 'Tìm Kiếm và Tổng Quan Tài Liệu',
      description:
        'Học cách tìm kiếm thông tin đáng tin cậy từ các nguồn học thuật, đọc hiểu và tổng hợp chúng một cách hiệu quả.',
      duration: '60 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Viết luận', 'Chuẩn bị bài thuyết trình', 'Tìm hiểu một chủ đề mới'],
      objectives: [
        'Sử dụng các công cụ tìm kiếm học thuật như Google Scholar, PubMed.',
        'Phân biệt được các nguồn thông tin sơ cấp, thứ cấp và tam cấp.',
        'Học kỹ thuật đọc lướt (skimming) và đọc quét (scanning) để đánh giá nhanh một bài báo khoa học.',
        'Biết cách trích dẫn tài liệu tham khảo để tránh đạo văn (sử dụng các chuẩn như APA, MLA).',
      ],
      faqs: [
        {
          question: 'Làm thế nào để biết một nguồn thông tin trên mạng là đáng tin cậy?',
          answer:
            'Hãy kiểm tra các yếu tố sau: Tác giả (có chuyên môn không?), Nhà xuất bản (có uy tín không, ví dụ: các tạp chí khoa học, trường đại học), Ngày xuất bản (có cập nhật không?), Mục đích (để cung cấp thông tin hay để quảng cáo?), và Nguồn (có trích dẫn các nguồn khác không?).',
        },
        {
          question: 'Tại sao phải trích dẫn tài liệu tham khảo?',
          answer:
            'Trích dẫn tài liệu tham khảo có 3 mục đích chính: 1. Thể hiện sự tôn trọng đối với tác giả gốc của ý tưởng. 2. Giúp người đọc có thể tìm lại nguồn thông tin bạn đã sử dụng để kiểm chứng. 3. Tăng tính thuyết phục và uy tín cho bài viết của bạn.',
        },
        {
          question: 'Tóm tắt (abstract) của một bài báo khoa học là gì?',
          answer:
            'Tóm tắt là một đoạn văn ngắn gọn (thường khoảng 150-250 từ) ở đầu bài báo, cung cấp một cái nhìn tổng quan về mục đích, phương pháp, kết quả chính và kết luận của nghiên cứu. Đọc tóm tắt là cách nhanh nhất để quyết định xem bài báo có phù hợp với bạn hay không.',
        },
        {
          question: 'Từ khóa (keywords) quan trọng như thế nào trong việc tìm kiếm?',
          answer:
            'Từ khóa là những thuật ngữ chính mô tả chủ đề của bạn. Sử dụng đúng từ khóa, bao gồm cả các từ đồng nghĩa và thuật ngữ liên quan, sẽ giúp bạn tìm thấy các bài báo phù hợp nhất trong các cơ sở dữ liệu học thuật.',
        },
        {
          question: 'Phần mềm quản lý trích dẫn như Zotero hay Mendeley để làm gì?',
          answer:
            'Đây là những công cụ giúp bạn thu thập, sắp xếp, ghi chú và tự động tạo danh mục tài liệu tham khảo theo các định dạng chuẩn (APA, MLA, Chicago...). Sử dụng chúng giúp tiết kiệm rất nhiều thời gian và tránh sai sót trong việc trích dẫn.',
        },
        {
          question: 'Thế nào là "tổng hợp" (synthesize) thông tin, thay vì chỉ "tóm tắt" (summarize)?',
          answer:
            'Tóm tắt là trình bày lại ý chính của một nguồn tài liệu. Tổng hợp là một bước cao hơn, bạn kết hợp các ý tưởng từ nhiều nguồn khác nhau để tạo ra một lập luận hoặc một cái nhìn mới, chỉ ra sự tương đồng, khác biệt hoặc các lỗ hổng kiến thức giữa các nghiên cứu.',
        },
        {
          question: 'Làm thế nào để đọc một bài báo khoa học hiệu quả?',
          answer:
            'Hãy thử chiến lược sau: 1. Đọc Tiêu đề, Tóm tắt, và Kết luận để nắm ý chính. 2. Xem các Hình ảnh, Biểu đồ và Bảng vì chúng thường chứa các kết quả quan trọng nhất. 3. Đọc phần Giới thiệu để hiểu bối cảnh. 4. Chỉ đọc kỹ phần Phương pháp nếu bạn cần hiểu sâu về cách thí nghiệm được thực hiện.',
        },
        {
          question: 'Sự khác biệt giữa danh mục tham khảo (reference list) và thư mục (bibliography) là gì?',
          answer:
            'Một danh mục tham khảo chỉ liệt kê những nguồn mà bạn đã thực sự trích dẫn trong bài viết của mình. Một thư mục có thể bao gồm tất cả các nguồn bạn đã đọc và tham khảo trong quá trình nghiên cứu, ngay cả khi chúng không được trích dẫn trực tiếp.',
        },
        {
          question: 'Phương pháp "quả cầu tuyết" (snowball method) để tìm tài liệu là gì?',
          answer:
            'Đây là một kỹ thuật hữu ích khi bạn đã có một vài bài báo "hạt nhân" rất liên quan. Bạn xem danh mục tài liệu tham khảo của những bài báo đó để tìm thêm các công trình quan trọng khác. Giống như một quả cầu tuyết lăn và lớn dần lên.',
        },
        {
          question: 'Khi nào thì tôi biết mình đã tìm đủ tài liệu?',
          answer:
            'Bạn có thể cảm thấy đã đủ khi bắt đầu thấy các tác giả, các nghiên cứu và các ý tưởng quen thuộc được lặp đi lặp lại trong các bài báo mới mà bạn tìm thấy. Điều này cho thấy bạn đã nắm được phần lớn các công trình quan trọng trong lĩnh vực đó.',
        },
      ],
      quizzes: [
        {
          question: 'Một bài báo cáo gốc công bố kết quả của một thí nghiệm mới được coi là nguồn thông tin loại gì?',
          options: ['Sơ cấp', 'Thứ cấp', 'Tam cấp', 'Không chính thống'],
          correctAnswerIndex: 0,
          explanation:
            'Nguồn sơ cấp là các tài liệu gốc, trực tiếp từ nghiên cứu hoặc sự kiện, chẳng hạn như bài báo nghiên cứu, nhật ký, hoặc dữ liệu thô.',
        },
      ],
    },
    {
      id: 'data-collection-analysis',
      title: 'Thu Thập và Phân Tích Dữ Liệu Cơ Bản',
      description:
        'Làm quen với các phương pháp thu thập dữ liệu phổ biến như khảo sát, phỏng vấn và các công cụ đơn giản để phân tích dữ liệu.',
      duration: '60 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Khảo sát ý kiến khách hàng', 'Phỏng vấn người dùng', 'Phân tích kết quả học tập'],
      objectives: [
        'Thiết kế một bảng câu hỏi khảo sát tốt (sử dụng câu hỏi đóng, câu hỏi mở).',
        'Hiểu các nguyên tắc cơ bản khi tiến hành một cuộc phỏng vấn.',
        'Sử dụng bảng tính (Excel, Google Sheets) để nhập và làm sạch dữ liệu.',
        'Tạo các biểu đồ cơ bản (cột, tròn, đường) để trực quan hóa dữ liệu và rút ra nhận xét.',
      ],
      faqs: [
        {
          question: 'Nên dùng câu hỏi đóng hay câu hỏi mở trong khảo sát?',
          answer:
            'Nên dùng cả hai. Câu hỏi đóng (ví dụ: trắc nghiệm, thang điểm) dễ dàng để thu thập và phân tích dữ liệu số lượng lớn. Câu hỏi mở ("Bạn nghĩ gì về...?") cho phép người trả lời cung cấp thông tin sâu sắc và chi tiết hơn mà bạn có thể chưa lường trước được.',
        },
        {
          question: 'Làm thế nào để tạo một biểu đồ hiệu quả?',
          answer:
            'Một biểu đồ hiệu quả phải rõ ràng, dễ hiểu và truyền tải đúng thông điệp. Hãy đảm bảo biểu đồ có tiêu đề, chú thích các trục, và sử dụng loại biểu đồ phù hợp với dữ liệu (ví dụ: biểu đồ cột để so sánh, biểu đồ đường để xem xu hướng theo thời gian, biểu đồ tròn để thể hiện tỷ lệ phần trăm).',
        },
        {
          question: 'Sự khác biệt giữa quần thể (population) và mẫu (sample) là gì?',
          answer:
            'Quần thể là toàn bộ nhóm mà bạn muốn nghiên cứu và rút ra kết luận (ví dụ: tất cả học sinh THPT ở Việt Nam). Mẫu là một nhóm nhỏ hơn, đại diện được chọn ra từ quần thể đó để thu thập dữ liệu, vì việc nghiên cứu toàn bộ quần thể thường là không khả thi.',
        },
        {
          question: '"Chọn mẫu ngẫu nhiên" (random sampling) là gì?',
          answer:
            'Đây là phương pháp chọn mẫu trong đó mọi cá nhân trong quần thể đều có cơ hội được chọn như nhau. Điều này giúp đảm bảo rằng mẫu của bạn không bị sai lệch và các kết quả từ mẫu có thể khái quát hóa cho toàn bộ quần thể.',
        },
        {
          question: 'Dữ liệu định tính (qualitative data) là gì?',
          answer:
            'Là dữ liệu không ở dạng số, thường là văn bản, hình ảnh, hoặc video. Ví dụ: nội dung các cuộc phỏng vấn, ghi chép quan sát, các câu trả lời cho câu hỏi mở. Dữ liệu định tính cung cấp sự sâu sắc và bối cảnh.',
        },
        {
          question: 'Dữ liệu định lượng (quantitative data) là gì?',
          answer:
            'Là dữ liệu ở dạng số và có thể đo lường được. Ví dụ: tuổi, chiều cao, điểm số, số lượng sản phẩm bán ra, xếp hạng trên thang điểm từ 1 đến 5. Dữ liệu định lượng cho phép thực hiện các phân tích thống kê.',
        },
        {
          question: 'Mean, median, và mode là gì?',
          answer:
            'Đây là ba thước đo "xu hướng trung tâm" của dữ liệu: Mean (trung bình cộng) là tổng tất cả các giá trị chia cho số lượng giá trị. Median (trung vị) là giá trị nằm ở chính giữa của một tập dữ liệu đã được sắp xếp. Mode (yếu vị) là giá trị xuất hiện thường xuyên nhất.',
        },
        {
          question: 'Tại sao cần phải "làm sạch" dữ liệu?',
          answer:
            'Dữ liệu thô thường chứa lỗi, chẳng hạn như lỗi nhập liệu, giá trị bị thiếu, hoặc các định dạng không nhất quán. "Làm sạch" là quá trình sửa các lỗi này để đảm bảo rằng việc phân tích của bạn sẽ chính xác và đáng tin cậy.',
        },
        {
          question: 'Phân tích hồi quy (regression analysis) dùng để làm gì?',
          answer:
            'Đây là một kỹ thuật thống kê dùng để kiểm tra và mô hình hóa mối quan hệ giữa các biến số. Ví dụ, bạn có thể dùng phân tích hồi quy để xem liệu "số giờ học" có thể dự đoán được "điểm thi" hay không và mức độ ảnh hưởng là bao nhiêu.',
        },
        {
          question: 'Sự khác biệt giữa mô tả (description) và suy luận (inference) trong phân tích dữ liệu là gì?',
          answer:
            'Mô tả là việc tóm tắt các đặc điểm của dữ liệu bạn đã thu thập (ví dụ: "Điểm trung bình của lớp là 8.5"). Suy luận là việc sử dụng dữ liệu từ mẫu của bạn để đưa ra kết luận hoặc dự đoán về một quần thể lớn hơn (ví dụ: "Dựa trên mẫu này, chúng tôi ước tính rằng phương pháp học mới giúp tăng điểm số trung bình của tất cả học sinh lên 10%").',
        },
      ],
      quizzes: [
        {
          question:
            'Để so sánh doanh thu hàng tháng của 3 sản phẩm khác nhau trong một năm, loại biểu đồ nào là phù hợp nhất?',
          options: ['Biểu đồ tròn', 'Biểu đồ đường (với 3 đường riêng biệt)', 'Biểu đồ cột', 'Biểu đồ phân tán'],
          correctAnswerIndex: 1,
          explanation:
            'Biểu đồ đường là lựa chọn tốt nhất để thể hiện sự thay đổi của dữ liệu theo thời gian. Sử dụng các đường riêng biệt cho mỗi sản phẩm sẽ giúp dễ dàng so sánh xu hướng của chúng.',
        },
      ],
    },
  ],
  features: [
    'Hướng dẫn từng bước thực hiện dự án nghiên cứu',
    'Giới thiệu các công cụ tìm kiếm học thuật',
    'Bài tập thực hành thiết kế khảo sát và phân tích dữ liệu',
    'Mẫu báo cáo và cách trình bày kết quả nghiên cứu',
  ],
  prerequisites: ['Kỹ năng đọc hiểu cơ bản', 'Tò mò và ham muốn khám phá'],
  objectives: [
    'Phát triển khả năng tư duy một cách có hệ thống và dựa trên bằng chứng.',
    'Nắm vững các bước cơ bản để tiến hành một nghiên cứu khoa học.',
    'Nâng cao kỹ năng tìm kiếm, đánh giá và tổng hợp thông tin.',
    'Tăng cường kỹ năng trình bày và lập luận một cách thuyết phục.',
  ],
  careerOutcomes: [
    'Kỹ năng nghiên cứu là nền tảng không thể thiếu cho bậc đại học và sau đại học.',
    'Rất cần thiết cho các ngành nghề như phân tích thị trường, R&D, báo chí, tư vấn chính sách.',
  ],
  tags: [
    'nghiên cứu khoa học',
    'phương pháp nghiên cứu',
    'phân tích dữ liệu',
    'tổng quan tài liệu',
    'kỹ năng học thuật',
  ],
};
