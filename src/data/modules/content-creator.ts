import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

export interface ContentCreatorLessonData extends BaseLessonData {
  platforms?: string[];
  monetizationMethods?: string[];
  toolsRequired?: string[];
  averageIncome?: string;
  timeToMaster?: string;
  imageUrl?: string;
}

export const contentCreatorLessons: ContentCreatorLessonData[] = [
  {
    id: 'social-media-personal-branding',
    title: 'Social Media Strategy & Personal Branding',
    description:
      'Xây dựng thương hiệu cá nhân mạnh mẽ trên các nền tảng social media, phát triển voice và aesthetic riêng biệt để thu hút audience.',
    duration: '180 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=Df11SkLnekM',
    imageUrl: 'https://i.ytimg.com/vi/mBy7PU1jTn4/hqdefault.jpg',
    objectives: [
      'Định hình brand identity và personal voice độc đáo',
      'Tạo content strategy hiệu quả cho từng platform',
      'Phát triển visual aesthetic nhất quán',
      'Xây dựng engagement strategy và community building',
      'Hiểu rõ algorithm của các platform chính',
    ],
    prerequisites: [
      'Hiểu biết cơ bản về social media platforms',
      'Khả năng sử dụng smartphone để chụp ảnh/quay video',
      'Tư duy sáng tạo và khả năng storytelling',
      'Kiên nhẫn và consistency trong content creation',
    ],
    realWorldApplications: [
      'Freelance social media manager cho small businesses (15-25 triệu VNĐ/tháng)',
      'Personal brand development cho entrepreneurs và professionals',
      'Content creation cho e-commerce businesses và startups',
      'Digital marketing consultant với social media expertise',
      'Influencer marketing coordinator cho agencies',
    ],
    faqs: [
      {
        question: 'Làm thế nào để tìm ra "ngách" (niche) cho kênh của mình?',
        answer:
          'Bắt đầu bằng cách liệt kê đam mê, sở trường và kiến thức chuyên môn của bạn. Sau đó, nghiên cứu xem trong những lĩnh vực đó, có chủ đề nào có lượng khán giả đủ lớn nhưng chưa có quá nhiều người làm hoặc có thể làm tốt hơn không. Kết hợp đam mê và nhu cầu thị trường là chìa khóa.',
      },
      {
        question: 'Tần suất đăng bài bao nhiêu là hợp lý?',
        answer:
          'Tần suất lý tưởng phụ thuộc vào nền tảng và khả năng của bạn. Ví dụ, TikTok và Instagram Stories đòi hỏi sự hiện diện hàng ngày, trong khi YouTube có thể là 1-2 video/tuần. Quan trọng nhất là sự nhất quán. Hãy chọn một lịch trình bạn có thể duy trì lâu dài.',
      },
      {
        question: 'Làm sao để vượt qua cảm giác ngại ngùng trước ống kính?',
        answer:
          'Hãy bắt đầu bằng cách nói chuyện một mình trước gương, sau đó quay những video ngắn không đăng. Tập trung vào việc chia sẻ giá trị cho khán giả thay vì lo lắng về ngoại hình. Càng thực hành nhiều, bạn sẽ càng tự tin hơn.',
      },
      {
        question: 'Nội dung của tôi không có ai xem, tôi nên làm gì?',
        answer:
          'Đừng nản lòng! Hãy phân tích các chỉ số (analytics) để hiểu khán giả của bạn là ai và họ thích gì. Thử nghiệm với các định dạng nội dung, tiêu đề, và thời gian đăng khác nhau. Tích cực tương tác với các kênh khác trong cùng lĩnh vực để tăng khả năng được khám phá.',
      },
      {
        question: 'Personal voice (tiếng nói cá nhân) là gì và tại sao nó quan trọng?',
        answer: 'Personal voice là phong cách, cá tính và quan điểm độc đáo của bạn được thể hiện qua nội dung. Nó là thứ giúp bạn khác biệt với hàng ngàn creator khác. Một personal voice mạnh mẽ sẽ thu hút những khán giả thực sự yêu mến và tin tưởng bạn.',
      },
      {
        question: 'Làm thế nào để xây dựng một cộng đồng (community) thay vì chỉ có người theo dõi (followers)?',
        answer: 'Hãy tạo ra sự tương tác hai chiều. Trả lời bình luận, tin nhắn, tổ chức các buổi Q&A, và tạo ra những nội dung mà khán giả có thể tham gia (ví dụ: thử thách, cuộc thi). Hãy cho họ thấy bạn quan tâm đến họ như những cá nhân, không chỉ là những con số.',
      },
      {
        question: 'Visual aesthetic (thẩm mỹ hình ảnh) có thực sự cần thiết không?',
        answer: 'Rất cần thiết, đặc biệt trên các nền tảng như Instagram. Một visual aesthetic nhất quán (ví dụ: cùng một bộ lọc màu, cùng một phong cách bố cục) giúp kênh của bạn trông chuyên nghiệp, dễ nhận biết và thu hút người xem mới ngay từ cái nhìn đầu tiên.',
      },
      {
        question: 'Hashtag có còn hiệu quả không và nên sử dụng chúng như thế nào?',
        answer: 'Có, hashtag vẫn rất hiệu quả để tăng khả năng khám phá. Hãy sử dụng một hỗn hợp các loại hashtag: hashtag rộng (ví dụ: #food), hashtag ngách (ví dụ: #banhmiSaigon), và hashtag thương hiệu (ví dụ: #tenkenhcuaban). Tránh sử dụng các hashtag đã bị cấm hoặc không liên quan.',
      },
      {
        question: 'Làm thế nào để theo kịp các thuật toán (algorithm) luôn thay đổi?',
        answer: 'Đừng cố gắng "đánh lừa" thuật toán. Thay vào đó, hãy tập trung vào việc tạo ra nội dung chất lượng cao mà khán giả thực sự muốn xem và tương tác. Các nền tảng luôn ưu tiên nội dung có khả năng giữ chân người dùng lâu nhất. Hãy theo dõi các thông báo chính thức từ nền tảng để cập nhật các thay đổi.',
      },
      {
        question: 'Content Pillar (Trụ cột nội dung) là gì?',
        answer: 'Content Pillar là 3-5 chủ đề chính mà kênh của bạn sẽ xoay quanh. Việc xác định các trụ cột này giúp bạn giữ cho nội dung của mình tập trung, có chiến lược và dễ dàng hơn trong việc lên kế hoạch. Ví dụ, một kênh về nấu ăn có thể có các trụ cột là: Món ăn Việt, Món ăn quốc tế, và Mẹo vặt nhà bếp.',
      },
    ],
  },
  {
    id: 'video-production-editing-mastery',
    title: 'Video Production & Editing Mastery',
    description:
      'Master video production từ concept đến final edit, sử dụng tools professional và techniques để tạo high-quality content.',
    duration: '240 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=y1KcHBZd3nw',
    imageUrl: 'https://i.ytimg.com/vi/apbZc_9XgNo/hqdefault.jpg',
    objectives: [
      'Nắm vững fundamentals của video production và cinematography',
      'Master editing techniques và storytelling qua video',
      'Tạo professional-quality videos với budget equipment',
      'Hiểu rõ platform-specific video requirements và optimization',
      'Develop efficient workflow từ concept đến publishing',
    ],
    prerequisites: [
      'Smartphone hoặc camera cơ bản',
      'Computer với software editing capabilities',
      'Hiểu biết cơ bản về storytelling',
      'Kiên nhẫn với quá trình learning curve của editing',
    ],
    realWorldApplications: [
      'Video production services cho businesses (20-100 triệu VNĐ/project)',
      'YouTube channel creation và monetization',
      'Social media content creation cho brands',
      'Wedding và event videography',
      'Online course creation với video content',
      'Corporate training video development',
    ],
    faqs: [
      {
        question: 'Tôi cần những thiết bị đắt tiền nào để bắt đầu sản xuất video?',
        answer:
          'Không cần! Một chiếc smartphone hiện đại đã là một công cụ sản xuất video cực kỳ mạnh mẽ. Hãy tập trung vào việc học các nguyên tắc cơ bản về ánh sáng, âm thanh và bố cục. Một chiếc micro cài áo nhỏ và một chân máy (tripod) là những khoản đầu tư ban đầu hợp lý và hiệu quả.',
      },
      {
        question: 'Phần mềm chỉnh sửa video nào tốt nhất cho người mới bắt đầu?',
        answer:
          'CapCut (miễn phí trên điện thoại và máy tính) là một lựa chọn tuyệt vời cho người mới bắt đầu với giao diện trực quan và nhiều tính năng mạnh mẽ. Khi bạn đã thành thạo hơn, bạn có thể chuyển sang các phần mềm chuyên nghiệp như Adobe Premiere Pro hoặc DaVinci Resolve (có phiên bản miễn phí rất tốt).',
      },
      {
        question: 'Làm thế nào để kể chuyện hay hơn qua video?',
        answer:
          'Một câu chuyện hay thường có cấu trúc 3 hồi: Bắt đầu (giới thiệu vấn đề/nhân vật), Phát triển (hành trình, thử thách), và Kết thúc (giải pháp, bài học). Sử dụng các góc quay khác nhau, âm nhạc và hiệu ứng âm thanh để tạo cảm xúc. Quan trọng nhất, hãy thể hiện sự chân thật và đam mê của bạn.',
      },
      {
        question: 'Làm sao để video của tôi trông chuyên nghiệp hơn?',
        answer:
          'Hãy chú ý đến 3 yếu tố: 1/ Ánh sáng: Đảm bảo chủ thể được chiếu sáng tốt, tránh ngược sáng. 2/ Âm thanh: Âm thanh rõ ràng, không bị vang hay lẫn tạp âm là cực kỳ quan trọng. 3/ Sự ổn định: Sử dụng chân máy hoặc chống rung để có những cảnh quay mượt mà.',
      },
      {
        question: 'Quy tắc một phần ba (Rule of Thirds) trong quay phim là gì?',
        answer: 'Đây là một nguyên tắc bố cục cơ bản. Hãy tưởng tượng có hai đường kẻ ngang và hai đường kẻ dọc chia khung hình của bạn thành 9 phần bằng nhau. Hãy đặt chủ thể hoặc các yếu tố quan trọng dọc theo các đường kẻ này hoặc tại giao điểm của chúng để tạo ra một hình ảnh cân đối và hấp dẫn hơn.',
      },
      {
        question: 'B-roll là gì và tại sao nó quan trọng?',
        answer: 'B-roll là những cảnh quay phụ minh họa cho những gì người nói đang đề cập. Ví dụ, nếu bạn đang nói về việc pha cà phê, B-roll có thể là cảnh quay cận cảnh hạt cà phê, dòng nước nóng chảy qua phin. Nó giúp video trở nên sinh động, hấp dẫn và dễ hiểu hơn nhiều.',
      },
      {
        question: 'Làm thế nào để chọn nhạc nền phù hợp cho video?',
        answer: 'Âm nhạc quyết định cảm xúc của video. Hãy chọn nhạc phù hợp với tâm trạng và nhịp độ của câu chuyện bạn đang kể. Nhạc nền nên bổ trợ cho nội dung chứ không lấn át lời nói. Luôn đảm bảo bạn có quyền sử dụng bản nhạc đó (sử dụng các thư viện nhạc bản quyền).',
      },
      {
        question: 'Jump cut là gì và khi nào nên sử dụng nó?',
        answer: 'Jump cut là một kỹ thuật cắt bỏ những đoạn "ừm, à" hoặc những khoảng lặng không cần thiết trong một cảnh quay liên tục. Nó giúp video có nhịp độ nhanh hơn và năng động hơn, rất phổ biến trong các video vlog trên YouTube.',
      },
      {
        question: 'Sự khác biệt giữa color correction và color grading là gì?',
        answer: 'Color correction (hiệu chỉnh màu) là bước kỹ thuật để sửa các vấn đề về màu sắc, đảm bảo video có màu trắng chính xác và độ phơi sáng phù hợp. Color grading (chỉnh màu nghệ thuật) là bước sáng tạo tiếp theo, nơi bạn áp dụng một phong cách màu sắc riêng (ví dụ: màu phim cổ, màu trong trẻo) để tạo ra một tâm trạng và cảm xúc nhất định cho video.',
      },
      {
        question: 'Tốc độ khung hình (frame rate) nào tôi nên sử dụng?',
        answer: '24fps (khung hình/giây) tạo cảm giác điện ảnh. 30fps là tiêu chuẩn cho các chương trình truyền hình và video online thông thường. 60fps hoặc cao hơn rất tốt cho việc quay các cảnh chuyển động nhanh hoặc để tạo hiệu ứng chuyển động chậm (slow motion) mượt mà khi chỉnh sửa.',
      },
    ],
  },
  {
    id: 'livestreaming-community-building',
    title: 'Livestreaming & Community Building',
    description:
      'Xây dựng loyal community qua livestreaming, master engagement techniques và monetize live content effectively.',
    duration: '200 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=L0-Y67XN11Q',
    imageUrl: 'https://i.ytimg.com/vi/6ftDWN2DroQ/hqdefault.jpg',
    objectives: [
      'Set up professional livestreaming environment và equipment',
      'Master live engagement techniques và audience interaction',
      'Build loyal community qua consistent live content',
      'Monetize livestreams through various revenue streams',
      'Handle technical challenges và maintain stream quality',
    ],
    prerequisites: [
      'Comfortable speaking on camera',
      'Reliable internet connection (minimum 10 Mbps upload)',
      'Basic understanding của chosen streaming platform',
      'Consistent schedule availability cho regular streaming',
    ],
    realWorldApplications: [
      'Gaming streaming cho Vietnamese gaming community',
      'Educational livestreams cho skill sharing',
      'Cooking shows với real-time interaction',
      'Fitness classes và wellness coaching',
      'Business consulting và Q&A sessions',
      'Product demonstrations cho e-commerce',
    ],
    faqs: [
      {
        question: 'Làm thế nào để có nhiều người xem livestream của tôi hơn?',
        answer:
          'Hãy thông báo trước về buổi livestream trên các kênh mạng xã hội khác. Chọn một chủ đề hấp dẫn và có giá trị cho khán giả của bạn. Trong buổi live, hãy liên tục tương tác, gọi tên người xem, và trả lời câu hỏi để giữ họ ở lại lâu hơn. Hợp tác với các creator khác cũng là một cách hiệu quả.',
      },
      {
        question: 'Tôi nên nói gì khi không có ai bình luận?',
        answer:
          'Đây là một thử thách phổ biến. Hãy luôn chuẩn bị sẵn một vài chủ đề hoặc câu chuyện để nói. Bạn có thể tiếp tục trình bày nội dung đã chuẩn bị, kể một câu chuyện liên quan, hoặc đặt những câu hỏi mở để khuyến khích sự tương tác. Đừng im lặng quá lâu.',
      },
      {
        question: 'Làm thế nào để kiếm tiền từ livestream?',
        answer:
          'Có nhiều cách: nhận quà tặng ảo (donations/gifts) từ người xem, bán sản phẩm trực tiếp (live commerce), nhận tài trợ từ các nhãn hàng, hoặc sử dụng livestream như một kênh để quảng bá cho các sản phẩm/dịch vụ khác của bạn (ví dụ: khóa học, sách).',
      },
      {
        question: 'Thiết bị tối thiểu cần có để livestream là gì?',
        answer:
          'Bạn có thể bắt đầu chỉ với một chiếc smartphone và kết nối internet ổn định. Để chuyên nghiệp hơn, hãy đầu tư một chiếc micro để có âm thanh tốt, một đèn livestream (ring light) để có hình ảnh đẹp, và một chân máy để giữ điện thoại ổn định.',
      },
      {
        question: 'Làm thế nào để giữ chân người xem trong suốt buổi livestream?',
        answer: 'Hãy tạo ra sự kiện hoặc điểm nhấn trong buổi live. Ví dụ: "Trong 10 phút nữa, mình sẽ công bố một mã giảm giá đặc biệt" hoặc "Cuối buổi live, mình sẽ trả lời 5 câu hỏi hay nhất". Điều này tạo lý do để khán giả ở lại.',
      },
      {
        question: 'OBS Studio là gì và tại sao tôi nên sử dụng nó?',
        answer: 'OBS (Open Broadcaster Software) là một phần mềm miễn phí và mạnh mẽ cho phép bạn kiểm soát livestream một cách chuyên nghiệp. Bạn có thể thêm nhiều nguồn camera, chia sẻ màn hình, thêm logo, hiệu ứng và nhiều thứ khác, giúp buổi live của bạn trông như một chương trình truyền hình thực thụ.',
      },
      {
        question: 'Làm thế nào để xử lý các bình luận tiêu cực hoặc gây rối (troll)?',
        answer: 'Đừng để họ ảnh hưởng đến cảm xúc của bạn. Hãy chuẩn bị một người điều hành (moderator) để giúp bạn ẩn hoặc chặn những người dùng này. Nếu chỉ có một mình, hãy học cách nhanh chóng ẩn bình luận đó và tiếp tục tập trung vào những khán giả tích cực.',
      },
      {
        question: 'Sự khác biệt giữa livestream trên YouTube, Facebook và TikTok là gì?',
        answer: 'YouTube Live mạnh về các nội dung dài, chuyên sâu và có khả năng lưu lại video chất lượng cao. Facebook Live tốt cho việc kết nối với cộng đồng hiện có. TikTok Live tập trung vào sự tương tác nhanh, giải trí và các hiệu ứng sáng tạo.',
      },
      {
        question: 'Làm thế nào để xây dựng một cộng đồng thực sự quanh kênh livestream của mình?',
        answer: 'Hãy tạo ra những "nghi thức" hoặc "trò đùa nội bộ" (inside jokes) mà chỉ những người xem thường xuyên mới hiểu. Tạo một không gian riêng cho cộng đồng như nhóm Discord hoặc Facebook Group để họ có thể kết nối với nhau ngay cả khi bạn không livestream.',
      },
      {
        question: 'Tôi có nên chơi game khi livestream không, ngay cả khi kênh của tôi không phải về game?',
        answer: 'Có thể! Chơi các game tương tác với khán giả (ví dụ: Jackbox Games, Gartic Phone) có thể là một cách tuyệt vời để thư giãn, tạo niềm vui và xây dựng mối quan hệ gần gũi hơn với cộng đồng của bạn, xen kẽ với các nội dung chính.',
      },
    ],
  },
  {
    id: 'monetization-strategies',
    title: 'Monetization Strategies (YouTube, TikTok, Facebook)',
    description:
      'Deep dive vào monetization opportunities across platforms, optimize revenue streams và build sustainable income from content creation.',
    duration: '220 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=fzbCmOLDoa8',
    imageUrl: 'https://i.ytimg.com/vi/plCRQbAmPuY/hqdefault.jpg',
    objectives: [
      'Understand platform-specific monetization requirements và opportunities',
      'Develop multiple income streams để reduce dependency on single source',
      'Optimize content strategy để maximize revenue potential',
      'Build long-term financial sustainability from content creation',
      'Navigate Vietnamese tax và business requirements cho content creators',
    ],
    prerequisites: [
      'Established audience on at least one platform',
      'Consistent content creation track record',
      'Basic understanding của business và finance',
      'Legal entity setup để receive payments properly',
    ],
    realWorldApplications: [
      'Full-time content creation career với sustainable income',
      'Supplementary income stream cho existing professionals',
      'Business development để transition into consulting',
      'Product-based business growth through content marketing',
      'Agency services offering based on content creation expertise',
    ],
    faqs: [
      {
        question: 'Khi nào tôi nên bắt đầu nghĩ về việc kiếm tiền?',
        answer:
          'Hãy tập trung vào việc xây dựng một cộng đồng gắn kết và tạo ra nội dung giá trị trước. Khi bạn đã có một lượng khán giả trung thành nhất định (ví dụ: 1,000 người theo dõi trên YouTube hoặc 10,000 trên TikTok), bạn có thể bắt đầu khám phá các phương pháp kiếm tiền.',
      },
      {
        question: 'Ngoài quảng cáo, còn những cách nào khác để kiếm tiền?',
        answer:
          'Rất nhiều! Bạn có thể tạo ra sản phẩm số (ebook, khóa học), sản phẩm vật lý (merchandise), cung cấp dịch vụ tư vấn, làm affiliate marketing (tiếp thị liên kết), nhận tài trợ từ nhãn hàng, hoặc kêu gọi sự ủng hộ trực tiếp từ fan qua các nền tảng như Patreon.',
      },
      {
        question: 'Làm thế nào để đa dạng hóa nguồn thu nhập?',
        answer:
          'Đừng phụ thuộc vào một nền tảng duy nhất. Hãy xây dựng sự hiện diện trên nhiều kênh (ví dụ: YouTube, TikTok, và một email list). Sau đó, hãy phát triển ít nhất 2-3 nguồn thu nhập khác nhau, ví dụ: doanh thu quảng cáo từ YouTube, hợp đồng tài trợ, và bán một sản phẩm số của riêng bạn.',
      },
      {
        question: 'Tôi có cần phải đăng ký kinh doanh không?',
        answer:
          'Khi thu nhập của bạn từ việc sáng tạo nội dung trở nên đều đặn và đáng kể, việc đăng ký kinh doanh (ví dụ: hộ kinh doanh cá thể hoặc công ty) là cần thiết để tuân thủ các quy định về thuế và pháp luật của Việt Nam. Bài học này sẽ cung cấp thông tin chi tiết hơn về vấn đề này.',
      },
      {
        question: 'Affiliate Marketing (Tiếp thị liên kết) hoạt động như thế nào?',
        answer: 'Bạn giới thiệu một sản phẩm hoặc dịch vụ của công ty khác bằng một đường link đặc biệt. Khi ai đó nhấp vào link của bạn và thực hiện mua hàng, bạn sẽ nhận được một khoản hoa hồng. Đây là một cách tuyệt vời để kiếm tiền mà không cần tạo ra sản phẩm riêng.',
      },
      {
        question: 'Làm thế nào để tạo ra một sản phẩm số (digital product) thành công?',
        answer: 'Hãy tìm hiểu xem khán giả của bạn đang gặp khó khăn gì và tạo ra một sản phẩm giúp giải quyết vấn đề đó. Đó có thể là một ebook hướng dẫn chi tiết, một khóa học video, các mẫu template, hoặc một bộ preset chỉnh ảnh. Hãy bắt đầu nhỏ và thu thập phản hồi để cải thiện.',
      },
      {
        question: 'Patreon hoặc các nền tảng membership hoạt động ra sao?',
        answer: 'Các nền tảng này cho phép những người hâm mộ trung thành nhất của bạn trả một khoản phí hàng tháng để ủng hộ bạn. Đổi lại, bạn cung cấp cho họ những nội dung độc quyền, quyền truy cập sớm, hoặc các lợi ích đặc biệt khác. Nó tạo ra một nguồn thu nhập ổn định và có thể dự đoán được.',
      },
      {
        question: 'Điều kiện để bật kiếm tiền trên YouTube ở Việt Nam là gì?',
        answer: 'Để tham gia Chương trình Đối tác YouTube, kênh của bạn cần đạt 1,000 người đăng ký và 4,000 giờ xem công khai trong 12 tháng qua, HOẶC 1,000 người đăng ký và 10 triệu lượt xem video Shorts công khai trong 90 ngày qua.',
      },
      {
        question: 'Làm thế nào để kiếm tiền trên TikTok?',
        answer: 'TikTok có nhiều cách kiếm tiền: Quỹ Nhà sáng tạo (Creator Fund) trả tiền dựa trên lượt xem, nhận quà tặng ảo khi livestream, làm việc với các nhãn hàng (TikTok Creator Marketplace), và affiliate marketing. Live commerce (bán hàng qua livestream) cũng là một xu hướng rất mạnh mẽ.',
      },
      {
        question: 'Tôi có nên đặt tất cả các video của mình ở chế độ chỉ dành cho hội viên không?',
        answer: 'Không nên. Một chiến lược tốt là giữ phần lớn nội dung của bạn miễn phí để thu hút khán giả mới, và chỉ dành những nội dung sâu hơn, độc quyền hoặc mang tính hậu trường cho các thành viên trả phí. Điều này tạo ra sự cân bằng giữa tăng trưởng và doanh thu.',
      },
    ],
  },
  {
    id: 'brand-partnerships-sponsorships',
    title: 'Brand Partnerships & Sponsorship Deals',
    description:
      'Negotiate win-win partnerships với brands, create authentic sponsored content, và build long-term relationships trong industry.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=iWHS05fpPwE',
    imageUrl: 'https://i.ytimg.com/vi/VzNi_LtjxsM/hqdefault.jpg',
    objectives: [
      'Identify suitable brand partnership opportunities',
      'Negotiate fair compensation và contract terms',
      'Create authentic sponsored content maintaining audience trust',
      'Build long-term relationships với brands và agencies',
      'Understand legal requirements và disclosure regulations',
    ],
    prerequisites: [
      'Established audience và engagement metrics',
      'Portfolio của high-quality content',
      'Professional communication skills',
      'Understanding của your audience demographics',
    ],
    realWorldApplications: [
      'Influencer marketing career với brand agencies',
      'Brand ambassador roles với long-term partnerships',
      'Product launch campaigns cho startups',
      'Tourism promotion cho destinations',
      'Technology product reviews và recommendations',
    ],
    faqs: [
      {
        question: 'Làm thế nào để các nhãn hàng tìm thấy tôi?',
        answer:
          'Hãy tạo một "Media Kit" - một tài liệu giới thiệu về kênh của bạn, bao gồm thông tin về đối tượng khán giả, các chỉ số tương tác, và bảng giá. Để thông tin liên hệ (email) ở nơi dễ thấy trên các trang mạng xã hội của bạn. Chủ động liên hệ với các nhãn hàng bạn yêu thích cũng là một chiến lược tốt.',
      },
      {
        question: 'Tôi nên tính giá bao nhiêu cho một bài đăng được tài trợ?',
        answer:
          'Không có một công thức cố định. Giá cả phụ thuộc vào nhiều yếu tố: số lượng người theo dõi, tỷ lệ tương tác, mức độ phù hợp của bạn với nhãn hàng, và công sức bạn bỏ ra để tạo nội dung. Hãy nghiên cứu xem các creator khác trong ngách của bạn đang tính giá bao nhiêu để có một mức tham khảo.',
      },
      {
        question: 'Làm thế nào để từ chối một lời đề nghị tài trợ không phù hợp?',
        answer:
          'Hãy luôn lịch sự và chuyên nghiệp. Cảm ơn họ đã quan tâm và giải thích ngắn gọn rằng sản phẩm/dịch vụ của họ không phù hợp với đối tượng khán giả hoặc giá trị cốt lõi của kênh bạn. Giữ một mối quan hệ tốt có thể mở ra các cơ hội khác trong tương lai.',
      },
      {
        question: 'Làm sao để nội dung tài trợ không bị khán giả ghét?',
        answer:
          'Chìa khóa là sự chân thực và minh bạch. Chỉ nhận tài trợ từ những sản phẩm bạn thực sự tin dùng và yêu thích. Hãy sáng tạo nội dung một cách tự nhiên, phù hợp với phong cách của bạn, thay vì chỉ đọc kịch bản của nhãn hàng. Luôn ghi rõ ràng rằng đó là nội dung được tài trợ.',
      },
      {
        question: 'Media Kit cần có những thông tin gì?',
        answer: 'Một Media Kit tốt nên bao gồm: Giới thiệu ngắn về bạn và kênh của bạn, thông tin nhân khẩu học của khán giả (tuổi, giới tính, vị trí), các chỉ số quan trọng (lượt theo dõi, tỷ lệ tương tác, lượt xem trung bình), các dịch vụ bạn cung cấp, và bảng giá tham khảo.',
      },
      {
        question: 'Sự khác biệt giữa làm việc trực tiếp với nhãn hàng và qua agency là gì?',
        answer: 'Làm việc trực tiếp có thể giúp bạn có mối quan hệ sâu sắc hơn và có thể nhận được mức phí cao hơn. Làm việc qua agency giúp bạn tiết kiệm thời gian tìm kiếm hợp đồng và đàm phán, nhưng bạn sẽ phải chia một phần hoa hồng cho họ. Cả hai đều có ưu và nhược điểm.',
      },
      {
        question: 'Tôi có nên chấp nhận thanh toán bằng sản phẩm thay vì tiền mặt không?',
        answer: 'Khi bạn mới bắt đầu, việc này có thể chấp nhận được để xây dựng portfolio. Tuy nhiên, khi kênh của bạn đã phát triển, hãy nhớ rằng công sức và thời gian của bạn là có giá trị. "Bạn không thể trả tiền thuê nhà bằng sản phẩm miễn phí". Hãy tự tin yêu cầu một khoản phí xứng đáng.',
      },
      {
        question: 'Làm thế nào để đàm phán một hợp đồng tốt hơn?',
        answer: 'Đừng ngại yêu cầu những gì bạn cho là xứng đáng. Hãy chuẩn bị sẵn các dữ liệu về hiệu quả của kênh bạn để chứng minh giá trị của mình. Mọi điều khoản trong hợp đồng đều có thể đàm phán, từ mức phí, số lần duyệt nội dung, cho đến quyền sử dụng hình ảnh.',
      },
      {
        question: 'Làm thế nào để xây dựng mối quan hệ lâu dài với một nhãn hàng?',
        answer: 'Hãy làm việc chuyên nghiệp, giao sản phẩm đúng hạn và vượt trên cả sự mong đợi. Cung cấp cho họ một báo cáo chi tiết về hiệu quả của chiến dịch sau khi kết thúc. Giữ liên lạc và thỉnh thoảng đề xuất những ý tưởng mới. Họ sẽ đánh giá cao sự chủ động và chuyên nghiệp của bạn.',
      },
      {
        question: 'Tôi có phải tiết lộ rằng đây là nội dung được tài trợ không?',
        answer: 'Có. Theo quy định của nhiều quốc gia và điều khoản của các nền tảng, bạn bắt buộc phải minh bạch với khán giả của mình. Hãy sử dụng các hashtag như #ad, #sponsored hoặc tính năng "Paid Partnership" của nền tảng. Sự minh bạch giúp xây dựng lòng tin với khán giả.',
      },
    ],
  },
  {
    id: 'content-calendar-consistency',
    title: 'Content Calendar & Consistency Systems',
    description:
      'Build sustainable content production systems, automate workflows, và maintain consistent posting schedule để grow audience effectively.',
    duration: '160 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=bB5eKayGMvM',
    imageUrl: 'https://i.ytimg.com/vi/bB5eKayGMvM/hqdefault.jpg',
    objectives: [
      'Create systematic approach to content planning và production',
      'Develop efficient workflows để maintain consistency',
      'Balance quality với quantity trong content creation',
      'Build content systems that scale với growing audience',
      'Maintain creative inspiration while meeting production demands',
    ],
    prerequisites: [
      'Basic understanding của content creation process',
      'Familiarity với social media platforms',
      'Time management skills',
      'Access to content planning tools',
    ],
    realWorldApplications: [
      'Social media management cho businesses',
      'Content strategy consulting services',
      'Personal brand development cho professionals',
      'Scalable content production cho agencies',
      'Systematic approach cho growing audiences',
    ],
    faqs: [
      {
        question: 'Content calendar là gì và tại sao tôi cần nó?',
        answer:
          'Content calendar (lịch nội dung) là một kế hoạch chi tiết về những gì bạn sẽ đăng, khi nào và ở đâu. Nó giúp bạn duy trì sự nhất quán, tránh tình trạng "hôm nay không biết đăng gì", và đảm bảo nội dung của bạn có chiến lược và mục tiêu rõ ràng.',
      },
      {
        question: 'Làm thế nào để không bị cạn kiệt ý tưởng?',
        answer:
          'Hãy tạo một "ngân hàng ý tưởng". Bất cứ khi nào một ý tưởng nảy ra, hãy ghi lại ngay lập tức vào một ứng dụng ghi chú hoặc sổ tay. Thường xuyên đọc, xem và lắng nghe nội dung trong lĩnh vực của bạn. Tương tác với khán giả và lắng nghe câu hỏi của họ cũng là một nguồn ý tưởng vô tận.',
      },
      {
        question: 'Batching content là gì?',
        answer:
          'Batching (sản xuất theo lô) là một kỹ thuật quản lý thời gian hiệu quả. Thay vì quay và chỉnh sửa một video mỗi ngày, bạn dành một ngày để quay tất cả các video cho cả tuần, và một ngày khác để chỉnh sửa tất cả chúng. Điều này giúp bạn tập trung và tiết kiệm thời gian chuyển đổi giữa các công việc.',
      },
      {
        question: 'Làm thế nào để duy trì động lực khi không thấy kết quả ngay lập tức?',
        answer:
          'Xây dựng một kênh cần thời gian. Hãy tập trung vào quá trình và sự cải thiện của bản thân thay vì chỉ nhìn vào các con số. Đặt ra những mục tiêu nhỏ, có thể đo lường được (ví dụ: học một kỹ năng chỉnh sửa mới, thử một định dạng video mới). Kết nối với các nhà sáng tạo khác để chia sẻ kinh nghiệm và động viên lẫn nhau.',
      },
      {
        question: 'Tôi nên sử dụng công cụ nào để quản lý lịch nội dung?',
        answer: 'Bạn có thể bắt đầu với những công cụ đơn giản như Google Calendar hoặc Google Sheets. Khi cần chuyên nghiệp hơn, các công cụ như Trello, Asana, hoặc Notion rất tuyệt vời để quản lý quy trình sản xuất nội dung từ ý tưởng đến khi xuất bản.',
      },
      {
        question: 'Làm thế nào để tái sử dụng nội dung (repurpose content) một cách hiệu quả?',
        answer: 'Đừng để nội dung của bạn "chết" sau một lần đăng. Một video dài trên YouTube có thể được cắt thành nhiều video ngắn cho TikTok/Reels, trích dẫn thành các bài viết trên Twitter, và hình ảnh hậu trường có thể được đăng lên Instagram Stories. Điều này giúp bạn tiết kiệm thời gian và tiếp cận nhiều đối tượng hơn.',
      },
      {
        question: 'Làm thế nào để cân bằng giữa chất lượng và số lượng?',
        answer: 'Khi mới bắt đầu, hãy ưu tiên sự nhất quán (số lượng) để thuật toán nhận diện bạn. Khi đã có một lượng khán giả nhất định, hãy dần dần tập trung nhiều hơn vào việc nâng cao chất lượng. Một video chất lượng cao mỗi tuần tốt hơn nhiều so với bảy video chất lượng thấp.',
      },
      {
        question: 'Evergreen content (nội dung thường xanh) là gì?',
        answer: 'Là những nội dung không bị lỗi thời theo thời gian và luôn có giá trị với khán giả, ví dụ như các video "hướng dẫn làm thế nào", "những sai lầm cần tránh", hoặc "giải thích một khái niệm". Xây dựng nội dung thường xanh giúp kênh của bạn có được lượt xem ổn định trong dài hạn.',
      },
      {
        question: 'Làm thế nào để đối phó với tình trạng "burnout" (kiệt sức)?',
        answer: 'Burnout là có thật trong ngành sáng tạo. Hãy lên lịch cho những ngày nghỉ ngơi thực sự, không sản xuất nội dung. Tự động hóa một số công việc nếu có thể. Đừng ngại giảm tần suất đăng bài khi cần thiết. Sức khỏe tinh thần của bạn là quan trọng nhất.',
      },
      {
        question: 'Tôi có nên xóa những video cũ hoạt động không tốt không?',
        answer: 'Thường thì không nên. Những video đó vẫn có thể mang lại một lượng nhỏ lượt xem. Hơn nữa, chúng là một phần trong hành trình phát triển của bạn. Thay vì xóa, hãy phân tích xem tại sao chúng không hoạt động tốt và rút ra bài học cho những nội dung trong tương lai.',
      },
    ],
  },
  {
    id: 'analytics-growth-optimization',
    title: 'Analytics & Growth Optimization',
    description:
      'Master data-driven content strategy, analyze performance metrics, và optimize growth through systematic testing và iteration.',
    duration: '200 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=RVFlSEJj3vA',
    imageUrl: 'https://i.ytimg.com/vi/RVFlSEJj3vA/hqdefault.jpg',
    objectives: [
      'Understand key performance indicators (KPIs) for content',
      'Use analytics tools to gather audience insights',
      'Implement A/B testing to optimize content elements',
      'Develop data-driven content strategy for sustainable growth',
      'Translate analytics into actionable content improvements',
    ],
    prerequisites: [
      'Consistent content production',
      'Access to platform analytics',
      'Basic understanding of data and charts',
      'Analytical mindset',
    ],
    realWorldApplications: [
      'Growth hacking consulting cho content creators',
      'Social media analytics services cho businesses',
      'Content strategy optimization roles',
      'Performance marketing với focus on content',
      'Data analyst roles trong creator economy companies',
    ],
    faqs: [
      {
        question: 'Những chỉ số nào là quan trọng nhất cần theo dõi?',
        answer:
          'Điều này phụ thuộc vào mục tiêu của bạn. Đối với tăng trưởng, hãy xem "Reach" (số người tiếp cận) và "Impressions" (số lần hiển thị). Đối với sự tương tác, hãy xem "Engagement Rate" (tỷ lệ tương tác) và "Comments". Đối với video, "Watch Time" (thời gian xem) và "Audience Retention" (tỷ lệ giữ chân khán giả) là cực kỳ quan trọng.',
      },
      {
        question: 'A/B testing là gì và tôi có thể áp dụng nó như thế nào?',
        answer:
          'A/B testing là việc tạo ra hai phiên bản của một thứ gì đó (ví dụ: hai tiêu đề video khác nhau, hai ảnh thumbnail khác nhau) để xem phiên bản nào hoạt động tốt hơn. YouTube có tính năng A/B testing thumbnail. Với các nền tảng khác, bạn có thể thử đăng các loại nội dung khác nhau vào cùng một khung giờ trong các ngày khác nhau và so sánh kết quả.',
      },
      {
        question: 'Làm thế nào để hiểu khán giả của tôi là ai?',
        answer:
          'Hầu hết các nền tảng đều cung cấp công cụ phân tích (analytics) cho thấy thông tin nhân khẩu học của khán giả như độ tuổi, giới tính, vị trí địa lý, và thời gian họ hoạt động tích cực nhất. Hãy sử dụng thông tin này để điều chỉnh nội dung và lịch đăng bài cho phù hợp.',
      },
      {
        question: 'Tỷ lệ tương tác (Engagement Rate) của tôi thấp, tôi nên làm gì?',
        answer:
          'Hãy xem lại nội dung của bạn. Nó có thực sự cung cấp giá trị (giải trí, giáo dục, truyền cảm hứng) không? Bạn có đang đặt câu hỏi hoặc kêu gọi hành động để khuyến khích bình luận không? Hãy thử nghiệm với các định dạng nội dung khác nhau (ví dụ: video ngắn, carousel, polls) để xem khán giả của bạn phản ứng tốt nhất với loại nào.',
      },
      {
        question: 'Tỷ lệ giữ chân khán giả (Audience Retention) trên YouTube cho thấy điều gì?',
        answer: 'Đây là một chỉ số cực kỳ quan trọng. Biểu đồ tỷ lệ giữ chân cho bạn biết chính xác khán giả bắt đầu mất hứng thú và rời đi ở điểm nào trong video. Hãy phân tích những điểm sụt giảm này để hiểu và cải thiện cấu trúc cũng như nhịp độ của các video trong tương lai.',
      },
      {
        question: 'CTR (Click-Through Rate) là gì?',
        answer: 'CTR là tỷ lệ nhấp chuột, được tính bằng cách lấy số lần nhấp vào video của bạn chia cho số lần nó được hiển thị (impressions). Một CTR cao cho thấy tiêu đề và ảnh thumbnail của bạn đủ hấp dẫn để thu hút người xem. Đây là yếu-tố-sống-còn để video được lan truyền.',
      },
      {
        question: 'Làm thế nào để tăng thời gian xem (Watch Time)?',
        answer: 'Hãy đi thẳng vào vấn đề ở đầu video (hook), tạo ra một câu chuyện có cấu trúc rõ ràng, và sử dụng các yếu tố như B-roll, đồ họa, và thay đổi góc quay để giữ sự chú ý. Hãy cho khán giả biết họ sẽ nhận được gì nếu xem đến cuối video.',
      },
      {
        question: 'Tôi nên làm gì với những video hoạt động tốt bất ngờ?',
        answer: 'Hãy phân tích nó! Tại sao nó lại thành công? Có phải do chủ đề, định dạng, cách bạn kể chuyện, hay tiêu đề? Hãy thử tạo thêm các video khác xoay quanh chủ đề đó hoặc áp dụng lại công thức thành công đó cho các nội dung khác.',
      },
      {
        question: 'Phân tích đối thủ cạnh tranh có hữu ích không?',
        answer: 'Rất hữu ích. Hãy xem những video thành công nhất của các kênh cùng lĩnh vực. Họ đang làm gì tốt? Họ có những định dạng nội dung nào mà bạn có thể học hỏi? Đừng sao chép, hãy tìm cảm hứng và tìm cách làm tốt hơn hoặc khác biệt hơn.',
      },
      {
        question: 'Dữ liệu có thể giúp tôi sáng tạo hơn không?',
        answer: 'Chắc chắn có. Dữ liệu không giết chết sự sáng tạo, nó định hướng cho sự sáng tạo. Bằng cách hiểu rõ khán giả của mình muốn gì, bạn có thể tập trung nỗ lực sáng tạo của mình vào những nơi có khả năng tạo ra tác động lớn nhất.',
      },
    ],
  },
  {
    id: 'legal-business-content-creation',
    title: 'Legal & Business Aspects of Content Creation',
    description:
      'Navigate legal requirements, business registration, taxes, và intellectual property protection trong Vietnamese content creator landscape.',
    duration: '150 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=20PaLUq0h-U',
    imageUrl: 'https://i.ytimg.com/vi/20PaLUq0h-U/hqdefault.jpg',
    objectives: [
      'Understand Vietnamese legal requirements cho content creators',
      'Set up proper business entity cho content creation income',
      'Navigate tax obligations và deductions',
      'Protect intellectual property và handle copyright issues',
      'Understand platform terms of service và compliance requirements',
    ],
    prerequisites: [
      'Generating income từ content creation',
      'Basic understanding của business concepts',
      'Willingness to invest trong legal và accounting setup',
      'Understanding của Vietnamese business landscape',
    ],
    realWorldApplications: [
      'Legal content creator business setup',
      'IP protection consulting cho creators',
      'Business advisory services cho digital entrepreneurs',
      'Compliance consulting cho growing creator businesses',
      'Legal education services cho creator community',
    ],
    faqs: [
      {
        question: 'Tôi có thể sử dụng nhạc hoặc hình ảnh của người khác trong video của mình không?',
        answer:
          'Nói chung là không, trừ khi bạn có giấy phép hoặc nội dung đó thuộc phạm vi "sử dụng hợp lý" (fair use), một khái niệm pháp lý phức tạp. Để an toàn, hãy sử dụng các thư viện nhạc và hình ảnh miễn phí bản quyền (royalty-free) như Epidemic Sound, Artlist, hoặc kho âm thanh của YouTube.',
      },
      {
        question: 'Khi nào tôi cần phải đăng ký kinh doanh và đóng thuế?',
        answer:
          'Theo luật pháp Việt Nam, khi bạn có thu nhập thường xuyên từ hoạt động kinh doanh (bao gồm cả sáng tạo nội dung), bạn có nghĩa vụ phải đăng ký kinh doanh và kê khai, nộp thuế thu nhập. Tốt nhất bạn nên tham khảo ý kiến của một kế toán hoặc luật sư khi thu nhập của bạn bắt đầu tăng lên.',
      },
      {
        question: 'Làm thế nào để bảo vệ ý tưởng và nội dung của tôi?',
        answer:
          'Bản quyền tự động được áp dụng cho tác phẩm gốc của bạn ngay khi nó được tạo ra. Tuy nhiên, việc đăng ký bản quyền với Cục Bản quyền tác giả sẽ cung cấp bằng chứng pháp lý mạnh mẽ hơn. Đối với thương hiệu (tên kênh, logo), bạn có thể đăng ký nhãn hiệu với Cục Sở hữu trí tuệ.',
      },
      {
        question: 'Tôi có cần hợp đồng khi làm việc với nhãn hàng không?',
        answer:
          'Chắc chắn có. Luôn luôn có một hợp đồng bằng văn bản, dù dự án lớn hay nhỏ. Hợp đồng nên ghi rõ phạm vi công việc, số lần duyệt, thời hạn, quyền sở hữu trí tuệ, và các điều khoản thanh toán. Điều này bảo vệ cả bạn và nhãn hàng.',
      },
      {
        question: 'Sử dụng hợp lý (Fair Use) là gì?',
        answer: 'Fair Use là một học thuyết pháp lý cho phép sử dụng có giới hạn các tài liệu có bản quyền mà không cần sự cho phép của chủ sở hữu, thường cho các mục đích như bình luận, phê bình, hoặc giáo dục. Tuy nhiên, đây là một lĩnh vực rất phức tạp và phụ thuộc vào từng trường hợp cụ thể. Đừng cho rằng mọi việc sử dụng đều là "fair use".',
      },
      {
        question: 'Tôi phải làm gì khi video của mình bị người khác re-upload?',
        answer: 'Hầu hết các nền tảng như YouTube đều có hệ thống Content ID hoặc một quy trình báo cáo vi phạm bản quyền. Bạn có thể gửi yêu cầu gỡ bỏ (takedown notice) để yêu cầu nền tảng gỡ video vi phạm xuống.',
      },
      {
        question: 'Thuế suất cho thu nhập từ sáng tạo nội dung ở Việt Nam là bao nhiêu?',
        answer: 'Thu nhập từ bản quyền, nhượng quyền thương mại thường chịu thuế thu nhập cá nhân (TNCN) 5%. Tuy nhiên, nếu thu nhập của bạn được xem là từ hoạt động kinh doanh, bạn có thể phải nộp thuế theo phương pháp khoán hoặc kê khai, với các mức thuế suất khác nhau. Việc tham khảo ý kiến kế toán là rất quan trọng.',
      },
      {
        question: 'Tôi có thể khấu trừ những chi phí nào khi tính thuế?',
        answer: 'Bạn có thể được khấu trừ các chi phí liên quan trực tiếp đến việc tạo ra thu nhập, chẳng hạn như chi phí mua thiết bị (máy ảnh, máy tính), phần mềm, chi phí marketing, hoặc tiền thuê studio. Hãy giữ lại tất cả các hóa đơn, chứng từ hợp lệ.',
      },
      {
        question: 'Sự khác biệt giữa bản quyền (copyright) và nhãn hiệu (trademark) là gì?',
        answer: 'Bản quyền bảo vệ các tác phẩm sáng tạo (video, bài viết, âm nhạc). Nhãn hiệu bảo vệ các yếu tố nhận diện thương hiệu (tên kênh, logo, slogan) khỏi việc bị người khác sử dụng gây nhầm lẫn.',
      },
      {
        question: 'Tôi có cần một luật sư không?',
        answer: 'Khi bạn mới bắt đầu thì có thể không cần. Nhưng khi thu nhập của bạn tăng lên, bạn bắt đầu làm việc với các hợp đồng lớn, hoặc đối mặt với các vấn đề pháp lý phức tạp, việc có một luật sư chuyên về luật truyền thông và sở hữu trí tuệ để tư vấn là một khoản đầu tư khôn ngoan.',
      },
    ],
  },
];

export const contentCreatorModuleData: ModuleData = {
  id: K2Module.ContentCreator,
  title: 'Content Creator Academy',
  subtitle: 'Thành công với Social Media',
  description:
    'Học từ A-Z cách trở thành content creator thành công trên TikTok, YouTube, Instagram. Từ xây dựng personal brand đến monetization.',
  category: 'Kỹ năng thiết yếu',
  icon: '📱',
  color: 'from-pink-600 to-purple-600',
  level: 'Trung bình',
  duration: '18-22 giờ',
  features: ['Personal Branding', 'Video Production', 'Live Streaming', 'Monetization', 'Analytics'],
  prerequisites: ['Smartphone với camera tốt', 'Tư duy sáng tạo', 'Khả năng storytelling', 'Consistency mindset'],
  objectives: [
    'Trở thành một nhà sáng tạo nội dung chuyên nghiệp trên các nền tảng mạng xã hội.',
    'Xây dựng thương hiệu cá nhân vững chắc và một cộng đồng người hâm mộ trung thành.',
    'Nắm vững các kỹ năng sản xuất video, livestream và chiến lược nội dung.',
    'Tạo ra nguồn thu nhập bền vững từ việc sáng tạo nội dung.',
  ],
  careerOutcomes: [
    'Content Creator toàn thời gian',
    'Social Media Manager',
    'Influencer Marketing Specialist',
    'Digital Strategist',
  ],
  industryApplications: [
    'Truyền thông & Giải trí',
    'Marketing & Quảng cáo',
    'Thương mại điện tử',
    'Giáo dục & Đào tạo',
  ],
  marketDemand: {
    averageSalary: '20-80 triệu VNĐ/tháng',
    jobGrowth: 'Rất cao',
    hireDemand: 'Cao',
  },
  relatedModules: [K2Module.DigitalMarketing, K2Module.AIContentCreator, K2Module.ShortVideoMastery],
  lessons: contentCreatorLessons,
};
