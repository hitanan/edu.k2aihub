import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

export const llmAiSeoModuleData: ModuleData = {
  id: 'llm-ai-seo',
  title: 'LLM AI SEO - Tối Ưu Hóa cho Trí Tuệ Nhân Tạo',
  description: 'Học cách tối ưu hóa website và content để được AI systems cite và reference trong year 2025',
  category: 'AI & Machine Learning',
  icon: '🤖',
  color: 'from-purple-500 to-indigo-600',
  lessons: [
    {
      id: 'llm-seo-fundamentals',
      title: 'Fundamentals của LLM SEO',
      description:
        'Hiểu cách các mô hình ngôn ngữ lớn thay đổi landscape SEO và cách tối ưu hóa nội dung cho AI search engines.',
      duration: '90 phút',
      difficulty: 'Cơ bản',
      objectives: [
        'Hiểu sự khác biệt giữa Traditional SEO và LLM SEO',
        'Nắm vững cách AI systems đọc và xử lý nội dung',
        'Học về Retrieval-Augmented Generation (RAG) và embeddings',
        'Hiểu tác động của zero-click answers và AI Overviews',
      ],
      mainContent: [
        {
          heading: 'Giới thiệu về LLM SEO',
          details: `Tại sao SEO đang thay đổi?

AI interfaces hiện tại trả lời nhiều truy vấn trực tiếp, thường không cần người dùng click vào link nào. ChatGPT hiện đang chiếm khoảng 10% người đăng ký mới của Vercel, tăng từ 4.8% tháng trước và 1% sáu tháng trước.

Điều này có nghĩa là traditional SEO - tập trung vào việc rank cao trên Google results - chỉ là một phần nhỏ trong puzzle tối ưu hóa cho AI systems. Thay vào đó, chúng ta cần tối ưu hóa cho việc được cited, referenced và included trong AI responses.`,
        },
        {
          heading: 'Sự khác biệt giữa Traditional SEO và LLM SEO',
          details: `Traditional SEO: 
- Focus vào keywords và backlinks
- Tối ưu hóa cho Google crawler
- Success metric là click-through rate
- Competition về ranking positions

LLM SEO:
- Focus vào semantic meaning và context
- Tối ưu hóa cho AI models' understanding
- Success metric là citation trong AI responses
- Competition về authority và trustworthiness`,
        },
        {
          heading: 'Làm thế nào AI Systems hoạt động?',
          details: `AI systems sử dụng Retrieval-Augmented Generation (RAG):

1. Retrieval: Tìm kiếm relevant information từ database
2. Augmentation: Kết hợp retrieved data với user query
3. Generation: Tạo ra response dựa trên combined information

Để content của bạn được "retrieve", nó cần:
- Clear, semantic structure
- Factual accuracy
- Proper context
- Citation-worthy authority`,
        },
      ],
      exercises: [
        {
          title: 'Audit AI Visibility',
          description: 'Kiểm tra xem website của bạn hiện tại được AI systems nhắc đến như thế nào',
          difficulty: 'Dễ',
          steps: [
            'Search brand/website name trong ChatGPT, Claude, Perplexity',
            'Ghi lại kết quả và mức độ accuracy',
            'Identify những area cần improvement',
          ],
        },
      ],
      realWorldApplications: [
        'Tối ưu hóa blog content để được ChatGPT cite',
        'Cải thiện visibility trong AI search results',
        'Xây dựng authority để AI systems recommend sản phẩm/dịch vụ',
      ],
      quiz: [
        {
          question: 'Điểm khác biệt chính giữa Traditional SEO và LLM SEO là gì?',
          options: [
            'LLM SEO tập trung vào keywords nhiều hơn',
            'LLM SEO tối ưu cho AI understanding thay vì click-through rate',
            'LLM SEO không cần content quality',
            'LLM SEO chỉ hoạt động trên social media',
          ],
          correctAnswerIndex: 1,
          explanation:
            'LLM SEO tập trung vào việc được AI systems hiểu và cite, thay vì chỉ rank cao để thu hút clicks.',
        },
      ],
      faqs: [
        {
          question: 'LLM SEO là gì?',
          answer: 'LLM SEO là viết tắt của Tối ưu hóa Công cụ Tìm kiếm cho Mô hình Ngôn ngữ Lớn. Đây là quá trình tối ưu hóa nội dung web để được các hệ thống AI như ChatGPT, Google AI Overviews hiểu, trích dẫn và giới thiệu một cách chính xác.'
        },
        {
          question: 'Tại sao LLM SEO lại quan trọng trong năm 2025?',
          answer: 'Bởi vì các công cụ tìm kiếm và trợ lý AI ngày càng trả lời trực tiếp câu hỏi của người dùng (zero-click answers), thay vì chỉ hiển thị danh sách link. Để tồn tại và phát triển, nội dung của bạn cần phải trở thành nguồn thông tin cho các câu trả lời đó.'
        },
        {
          question: 'RAG (Retrieval-Augmented Generation) hoạt động như thế nào?',
          answer: 'RAG là một kỹ thuật AI kết hợp hai bước: 1) "Truy xuất" (Retrieval) - tìm kiếm thông tin liên quan từ một kho kiến thức (như internet). 2) "Tạo sinh" (Generation) - sử dụng thông tin đã truy xuất để tạo ra một câu trả lời mạch lạc và chính xác cho người dùng.'
        },
        {
          question: 'Làm thế nào để nội dung của tôi được AI "truy xuất"?',
          answer: 'Nội dung của bạn cần có cấu trúc rõ ràng, ngữ nghĩa chính xác, chứa thông tin đáng tin cậy và được trình bày như một nguồn có thẩm quyền. Sử dụng tiêu đề, danh sách, và dữ liệu có cấu trúc (Schema) sẽ giúp ích rất nhiều.'
        },
        {
          question: '"Zero-click answers" có tác động gì đến website của tôi?',
          answer: 'Nó có thể làm giảm lượng truy cập trực tiếp (clicks) vào website của bạn, vì người dùng đã có câu trả lời ngay trên trang kết quả tìm kiếm. Tuy nhiên, nếu nội dung của bạn được trích dẫn, nó sẽ làm tăng nhận diện thương hiệu và uy tín.'
        },
        {
          question: 'Sự khác biệt chính trong việc đo lường thành công giữa SEO truyền thống và LLM SEO là gì?',
          answer: 'SEO truyền thống đo lường bằng thứ hạng từ khóa và tỷ lệ nhấp chuột (CTR). LLM SEO đo lường bằng tần suất và độ chính xác của việc nội dung được trích dẫn (citation) trong các câu trả lời của AI.'
        },
        {
          question: 'Tôi có nên ngừng làm SEO truyền thống không?',
          answer: 'Không. LLM SEO là một sự tiến hóa, không phải là sự thay thế hoàn toàn. Nhiều nguyên tắc cơ bản của SEO truyền thống như nội dung chất lượng, trải nghiệm người dùng tốt và cấu trúc web rõ ràng vẫn cực kỳ quan trọng cho cả người dùng và AI.'
        },
        {
          question: 'Làm thế nào để kiểm tra xem nội dung của tôi có đang được AI sử dụng không?',
          answer: 'Bạn có thể thử hỏi các chatbot AI (như ChatGPT, Perplexity) những câu hỏi liên quan đến lĩnh vực của bạn và xem liệu chúng có trích dẫn website của bạn hay không. Ngoài ra, có thể sử dụng các công cụ theo dõi thương hiệu để giám sát các lượt đề cập.'
        },
        {
          question: 'Embeddings là gì và nó liên quan gì đến LLM SEO?',
          answer: 'Embeddings là các biểu diễn dạng số (vector) của từ hoặc câu, giúp máy tính hiểu được ngữ nghĩa và mối quan hệ giữa chúng. AI sử dụng embeddings để tìm kiếm thông tin có ngữ nghĩa tương đồng, thay vì chỉ dựa vào từ khóa chính xác.'
        },
        {
          question: 'Tối ưu hóa cho "AI Overviews" của Google có giống LLM SEO không?',
          answer: 'Vâng, về cơ bản là giống nhau. AI Overviews là một dạng câu trả lời được tạo bởi AI của Google. Tối ưu hóa cho nó cũng chính là áp dụng các nguyên tắc của LLM SEO: tạo nội dung có cấu trúc, đáng tin cậy và dễ hiểu cho AI.'
        }
      ]
    } as BaseLessonData,
    {
      id: 'content-optimization',
      title: 'Content Optimization cho AI Systems',
      description: 'Tạo và structure nội dung để AI có thể dễ dàng parse, understand và cite trong responses.',
      duration: '120 phút',
      difficulty: 'Trung bình',
      objectives: [
        'Master semantic HTML và structured markup',
        'Tạo self-contained, extractable content snippets',
        'Optimize cho AI crawlers và JavaScript rendering',
        'Implement Schema.org và JSON-LD markup hiệu quả',
      ],
      mainContent: [
        {
          heading: 'Structure for Machines',
          details: `Làm thế nào để Structure nội dung cho AI

Structure giúp models hiểu content của bạn là gì và khi nào surface nó. Ngay cả khi đã indexed, một page có thể bị skip nếu meaning không clear hoặc layout khó parse.`,
        },
        {
          heading: 'Self-Contained Content Blocks',
          details: `Mỗi section của content nên hoàn chỉnh và có thể đứng độc lập. AI models thường extract paragraphs hoặc sections để answer questions, không phải entire pages.

Best practices:
- Mỗi heading nên clear và descriptive
- Paragraphs nên complete thoughts
- Include relevant context trong mỗi section
- Avoid pronouns without clear antecedents`,
        },
        {
          heading: 'Schema Markup cho AI',
          details: `JSON-LD Schema markup giúp AI hiểu structured data:

Ví dụ cho Article:
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Complete Guide to LLM SEO",
  "author": {"@type": "Person", "name": "Expert Author"},
  "datePublished": "2025-01-01",
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [...]
  }
}`,
        },
      ],
      exercises: [
        {
          title: 'Content Structure Audit',
          description: 'Review và restructure một page để AI-friendly',
          difficulty: 'Trung bình',
          steps: [
            'Chọn 1 important page từ website',
            'Check xem content có self-contained không',
            'Add proper heading hierarchy',
            'Implement relevant Schema markup',
          ],
        },
      ],
      realWorldApplications: [
        'Restructure existing content để AI-friendly',
        'Tạo FAQ sections mà AI dễ extract',
        'Optimize product descriptions cho AI shopping assistants',
      ],
      quiz: [
        {
          question: 'Tại sao self-contained content blocks quan trọng cho LLM SEO?',
          options: [
            'Để tăng page loading speed',
            'Để AI có thể extract và cite individual sections',
            'Để improve keyword density',
            'Để reduce bounce rate',
          ],
          correctAnswerIndex: 1,
          explanation:
            'AI models thường extract specific sections để answer questions, nên mỗi section cần có đầy đủ context.',
        },
      ],
      faqs: [
        {
          question: 'Semantic HTML là gì?',
          answer: 'Là việc sử dụng các thẻ HTML đúng với ngữ nghĩa của chúng. Ví dụ: dùng `<article>` cho một bài viết, `<nav>` cho thanh điều hướng, `<aside>` cho nội dung phụ. Điều này giúp AI hiểu rõ cấu trúc và vai trò của từng phần trong trang web của bạn.'
        },
        {
          question: 'Schema.org và JSON-LD là gì?',
          answer: 'Schema.org là một bộ từ vựng tiêu chuẩn để đánh dấu dữ liệu có cấu trúc. JSON-LD là một định dạng để viết mã Schema này và nhúng vào trang web của bạn. Nó giống như việc bạn "dán nhãn" cho AI biết "đây là tên sản phẩm", "đây là giá tiền".'
        },
        {
          question: 'Tại sao các đoạn nội dung "độc lập" (self-contained) lại quan trọng?',
          answer: 'Bởi vì AI thường trích xuất một đoạn văn hoặc một phần nhỏ để trả lời câu hỏi, chứ không phải cả trang. Nếu mỗi đoạn của bạn có thể tự đứng vững và đầy đủ ý nghĩa, nó sẽ có cơ hội được chọn cao hơn và không bị hiểu sai ngữ cảnh.'
        },
        {
          question: 'Làm thế nào để tối ưu hóa tiêu đề (headings) cho AI?',
          answer: 'Sử dụng cấu trúc tiêu đề phân cấp hợp lý (H1, H2, H3...). Mỗi tiêu đề nên mô tả rõ ràng và súc tích nội dung của phần bên dưới nó. Hãy nghĩ về các tiêu đề như là các câu hỏi mà nội dung của bạn sẽ trả lời.'
        },
        {
          question: 'Tôi có nên tạo một trang FAQ riêng không?',
          answer: 'Có, đó là một ý tưởng tuyệt vời. Một trang FAQ được cấu trúc tốt (sử dụng Schema FAQPage) là một "miếng mồi ngon" cho các hệ thống AI, vì nó cung cấp các cặp câu hỏi-câu trả lời rõ ràng, dễ dàng để AI trích xuất.'
        },
        {
          question: 'Làm thế nào để AI xử lý nội dung được tải bằng JavaScript?',
          answer: 'Nhiều trình thu thập thông tin của AI có khả năng thực thi JavaScript, nhưng không phải lúc nào cũng hoàn hảo. Để đảm bảo, nội dung quan trọng nhất nên được hiển thị trong HTML ban đầu (Server-Side Rendering hoặc Static Site Generation) thay vì đợi JavaScript tải.'
        },
        {
          question: 'Việc tránh dùng đại từ không rõ ràng có nghĩa là gì?',
          answer: 'Khi viết, hãy tránh các câu như "Nó rất hữu ích". Thay vào đó, hãy viết rõ "Công cụ SEO này rất hữu ích". Điều này giúp AI khi trích xuất một đoạn nhỏ vẫn hiểu rõ "nó" là đang đề cập đến cái gì.'
        },
        {
          question: 'Tôi có nên thêm phần tóm tắt (summary) vào đầu bài viết không?',
          answer: 'Rất nên. Một đoạn tóm tắt ngắn gọn, súc tích ở đầu bài viết (còn gọi là TL;DR - Too Long; Didn\'t Read) cung cấp cho cả người dùng và AI một cái nhìn tổng quan nhanh chóng về nội dung, giúp AI xác định mức độ liên quan của bài viết.'
        },
        {
          question: 'Làm thế nào để tối ưu hóa hình ảnh cho LLM SEO?',
          answer: 'Sử dụng văn bản thay thế (alt text) mô tả chi tiết hình ảnh. Đặt tên file ảnh có ý nghĩa. Cung cấp chú thích (caption) cho hình ảnh nếu cần. Điều này cung cấp thêm ngữ cảnh cho AI để hiểu nội dung của hình ảnh.'
        },
        {
          question: 'Cấu trúc URL có ảnh hưởng đến LLM SEO không?',
          answer: 'Có. Một cấu trúc URL rõ ràng, logic và chứa từ khóa chính giúp AI hiểu được hệ thống phân cấp và chủ đề của trang web. Ví dụ: `example.com/seo/llm-optimization` tốt hơn `example.com/page123`.'
        }
      ]
    } as BaseLessonData,
    {
      id: 'concept-ownership',
      title: 'Concept Ownership và Authority Building',
      description: 'Establish authority trong specific concepts và topics để AI systems recognize bạn là go-to source.',
      duration: '150 phút',
      difficulty: 'Nâng cao',
      objectives: [
        'Develop comprehensive topic clusters',
        'Create authoritative, citable content',
        'Build concept ownership trong niche',
        'Establish expertise signals cho AI systems',
      ],
      mainContent: [
        {
          heading: 'Khái niệm Concept Ownership',
          details: `Concept ownership nghĩa là trở thành THE authority về một topic specific. Khi AI models search for information về topic đó, content của bạn là first choice để cite.

Điều này không có nghĩa là bạn cần compete với Wikipedia về broad topics. Thay vào đó, focus vào specific niches, use cases, hoặc combinations mà bạn có expertise.`,
        },
        {
          heading: 'Building Topic Clusters',
          details: `Thay vì individual pages, tạo comprehensive topic clusters:

1. Core pillar page - comprehensive overview
2. Supporting pages - specific aspects
3. FAQ pages - common questions
4. Case studies và examples
5. Tools và resources

Tất cả interlinked và mutually reinforcing authority.`,
        },
        {
          heading: 'Expertise Signals',
          details: `AI systems đánh giá expertise qua:
- Depth và comprehensiveness của content
- Accuracy và factual correctness
- Citations từ other authoritative sources
- Update frequency và freshness
- Author credentials và bio
- Domain authority và trustworthiness`,
        },
      ],
      exercises: [
        {
          title: 'Topic Cluster Planning',
          description: 'Design comprehensive topic cluster cho một niche expertise area',
          difficulty: 'Nâng cao',
          steps: [
            'Identify specific niche topic',
            'Research existing authority sources',
            'Plan 10-15 related content pieces',
            'Create internal linking strategy',
          ],
        },
      ],
      realWorldApplications: [
        'Establish expertise trong specific industry niche',
        'Become go-to source cho AI khi users hỏi về domain của bạn',
        'Build thought leadership thông qua AI citations',
      ],
      quiz: [
        {
          question: 'Điều nào quan trọng nhất khi building concept ownership?',
          options: [
            'Tạo ra many pages về cùng topic',
            'Focus vào broad, competitive keywords',
            'Develop deep expertise trong specific niche',
            'Copy content từ Wikipedia',
          ],
          correctAnswerIndex: 2,
          explanation:
            'Concept ownership đòi hỏi deep expertise trong specific niche thay vì surface-level coverage của broad topics.',
        },
      ],
      faqs: [
        {
          question: 'Concept Ownership (Sở hữu khái niệm) là gì?',
          answer: 'Là việc xây dựng thương hiệu hoặc website của bạn trở thành nguồn thông tin đáng tin cậy và có thẩm quyền nhất về một chủ đề hoặc khái niệm cụ thể trong mắt của cả người dùng và các hệ thống AI.'
        },
        {
          question: 'Tại sao việc tập trung vào một "niche" (thị trường ngách) lại quan trọng?',
          answer: 'Bởi vì việc cạnh tranh với các trang web lớn về các chủ đề rộng là rất khó. Bằng cách tập trung vào một niche cụ thể, bạn có thể trở thành chuyên gia hàng đầu trong lĩnh vực đó, và AI sẽ nhận ra điều này.'
        },
        {
          question: 'Topic Cluster (Cụm chủ đề) là gì?',
          answer: 'Là một chiến lược nội dung bao gồm một "trang trụ cột" (pillar page) bao quát một chủ đề lớn, và nhiều "trang con" (cluster pages) đi sâu vào các khía cạnh cụ thể của chủ đề đó. Tất cả các trang này liên kết chặt chẽ với nhau.'
        },
        {
          question: 'Làm thế nào để AI nhận biết "tín hiệu chuyên môn" (expertise signals)?',
          answer: 'AI đánh giá chuyên môn dựa trên nhiều yếu tố: sự sâu sắc và toàn diện của nội dung, tính chính xác của thông tin, tần suất cập nhật, thông tin về tác giả (author bio), và việc nội dung của bạn được trích dẫn bởi các nguồn uy tín khác.'
        },
        {
          question: 'Tôi có cần phải là một tiến sĩ để được coi là chuyên gia không?',
          answer: 'Không cần thiết. Chuyên môn có thể được thể hiện qua kinh nghiệm thực tế, các case study chi tiết, dữ liệu gốc, hoặc các phân tích sâu sắc mà không ai khác có. Việc trình bày thông tin tác giả rõ ràng và minh bạch cũng giúp xây dựng lòng tin.'
        },
        {
          question: 'Làm thế nào để tìm ra một "concept" để sở hữu?',
          answer: 'Hãy tìm giao điểm giữa chuyên môn của bạn, sự quan tâm của đối tượng mục tiêu, và một lĩnh vực chưa có nhiều sự cạnh tranh mạnh mẽ. Đó có thể là một công nghệ mới, một phương pháp luận cụ thể, hoặc một cách tiếp cận độc đáo cho một vấn đề cũ.'
        },
        {
          question: 'Liên kết nội bộ (internal linking) có vai trò gì trong việc xây dựng thẩm quyền?',
          answer: 'Liên kết nội bộ giúp AI hiểu được mối quan hệ giữa các nội dung trên trang của bạn. Khi bạn liên kết các trang trong một cụm chủ đề với nhau, bạn đang nói với AI rằng "tất cả những nội dung này đều liên quan và cùng nhau tạo nên một nguồn kiến thức toàn diện".'
        },
        {
          question: 'Nội dung của tôi có cần phải dài không?',
          answer: 'Độ dài không phải là yếu tố quyết định duy nhất, nhưng nội dung sâu sắc và toàn diện thường có xu hướng dài hơn. Quan trọng hơn độ dài là sự đầy đủ và chất lượng. Hãy trả lời câu hỏi của người dùng một cách thấu đáo nhất có thể.'
        },
        {
          question: 'Làm thế nào để nội dung của tôi trở nên "đáng trích dẫn" (citable)?',
          answer: 'Hãy cung cấp dữ liệu gốc, các thống kê độc đáo, các định nghĩa rõ ràng, các quy trình từng bước, hoặc các phân tích chuyên sâu. Khi nội dung của bạn trở thành nguồn thông tin mà người khác muốn tham khảo, nó sẽ trở nên đáng trích dẫn.'
        },
        {
          question: 'Mất bao lâu để xây dựng Concept Ownership?',
          answer: 'Đây là một chiến lược dài hạn, không phải là một giải pháp nhanh chóng. Có thể mất vài tháng đến một năm hoặc hơn để xây dựng đủ nội dung chất lượng và được AI công nhận là một nguồn có thẩm quyền. Sự kiên trì và nhất quán là chìa khóa.'
        }
      ]
    } as BaseLessonData,
    {
      id: 'ai-crawler-optimization',
      title: 'Technical Optimization cho AI Crawlers',
      description: 'Technical SEO considerations để ensure AI systems có thể efficiently crawl và index content.',
      duration: '180 phút',
      difficulty: 'Nâng cao',
      objectives: [
        'Optimize site architecture cho AI crawling',
        'Implement proper robots.txt và meta directives',
        'Handle JavaScript rendering cho AI bots',
        'Monitor và track AI crawler behavior',
      ],
      mainContent: [
        {
          heading: 'AI Crawler Behavior',
          details: `AI crawlers khác traditional search engine bots:
- Deeper content analysis
- JavaScript execution capabilities
- Focus on content meaning over technical SEO signals
- Different crawling patterns và frequencies

Bạn cần optimize cho both traditional và AI crawlers.`,
        },
        {
          heading: 'Site Architecture cho AI',
          details: `Best practices:
- Clear information hierarchy
- Consistent URL structures
- Proper internal linking
- Fast loading times
- Mobile-first design
- Accessible content structure

AI crawlers prefer sites mà easy to navigate và understand.`,
        },
        {
          heading: 'JavaScript và Client-Side Rendering',
          details: `Many AI crawlers execute JavaScript, nhưng không phải all:
- Ensure critical content available in HTML
- Use progressive enhancement
- Test with various user agents
- Monitor rendering issues
- Consider server-side rendering cho critical pages`,
        },
      ],
      exercises: [
        {
          title: 'Technical AI SEO Audit',
          description: 'Comprehensive technical audit cho AI crawler optimization',
          difficulty: 'Nâng cao',
          steps: [
            'Analyze current crawler logs',
            'Test JavaScript rendering',
            'Review site architecture',
            'Implement monitoring system',
          ],
        },
      ],
      realWorldApplications: [
        'Fix technical issues ngăn AI crawlers access content',
        'Optimize site architecture cho better AI understanding',
        'Monitor và troubleshoot AI crawler problems',
      ],
      quiz: [
        {
          question: 'Điều nào quan trọng nhất khi optimizing cho AI crawlers?',
          options: [
            'Fast loading speed only',
            'Perfect keyword density',
            'Clear content structure và accessibility',
            'Many internal links',
          ],
          correctAnswerIndex: 2,
          explanation:
            'AI crawlers prioritize clear content structure và accessibility để understand và process information effectively.',
        },
      ],
      faqs: [
        {
          question: 'AI crawler là gì?',
          answer: 'AI crawler là một loại bot tự động (tương tự Googlebot) được các hệ thống AI sử dụng để thu thập và phân tích dữ liệu từ các trang web. Chúng có xu hướng "đọc" và hiểu nội dung sâu hơn so với các bot truyền thống.'
        },
        {
          question: 'File robots.txt có tác dụng gì với AI crawler?',
          answer: 'File robots.txt cho phép bạn chỉ định những phần nào của trang web mà bạn cho phép hoặc không cho phép các bot (bao gồm cả AI crawler) truy cập. Bạn có thể tạo các quy tắc riêng cho các AI crawler cụ thể như `GPTBot` của OpenAI.'
        },
        {
          question: 'Tại sao tốc độ tải trang lại quan trọng?',
          answer: 'Tốc độ tải trang nhanh cải thiện trải nghiệm người dùng và cũng giúp các crawler thu thập dữ liệu hiệu quả hơn. Các crawler có một "ngân sách thu thập thông tin" (crawl budget) giới hạn, trang tải nhanh hơn cho phép chúng index được nhiều trang hơn trong cùng một khoảng thời gian.'
        },
        {
          question: 'Làm thế nào để kiểm tra xem AI crawler có gặp sự cố với JavaScript trên trang của tôi không?',
          answer: 'Bạn có thể sử dụng công cụ "Kiểm tra URL" (URL Inspection Tool) trong Google Search Console. Công cụ này cho phép bạn xem trang của mình được hiển thị như thế nào đối với Googlebot, bao gồm cả việc thực thi JavaScript và các lỗi có thể xảy ra.'
        },
        {
          question: 'Cấu trúc trang web (Site Architecture) ảnh hưởng đến AI crawler như thế nào?',
          answer: 'Một cấu trúc trang web logic, có hệ thống phân cấp rõ ràng và liên kết nội bộ chặt chẽ giúp AI crawler dễ dàng khám phá tất cả các trang và hiểu được mối quan hệ giữa chúng. Điều này giúp xây dựng bối cảnh ngữ nghĩa cho toàn bộ trang web của bạn.'
        },
        {
          question: 'Tôi có nên chặn AI crawler không?',
          answer: 'Việc chặn AI crawler sẽ ngăn nội dung của bạn được sử dụng để huấn luyện các mô hình AI trong tương lai và ngăn nó xuất hiện trong các câu trả lời của AI. Nếu mục tiêu của bạn là LLM SEO, bạn không nên chặn chúng, trừ khi có lý do đặc biệt về bản quyền hoặc dữ liệu nhạy cảm.'
        },
        {
          question: 'Làm thế nào để theo dõi hoạt động của AI crawler trên trang web của tôi?',
          answer: 'Bạn có thể phân tích file log của máy chủ web. File log ghi lại mọi yêu cầu đến máy chủ, bao gồm cả yêu cầu từ các AI crawler. Bằng cách phân tích log, bạn có thể biết crawler nào đang truy cập, tần suất và các trang chúng truy cập.'
        },
        {
          question: 'Thiết kế ưu tiên cho thiết bị di động (Mobile-first design) có quan trọng không?',
          answer: 'Rất quan trọng. Hầu hết các crawler, bao gồm cả của Google, đều ưu tiên thu thập thông tin từ phiên bản di động của trang web. Một trang web không thân thiện với di động sẽ ảnh hưởng tiêu cực đến khả năng được index và xếp hạng.'
        },
        {
          question: 'Thẻ meta "directives" là gì?',
          answer: 'Là các chỉ dẫn bạn đặt trong phần `<head>` của trang HTML để kiểm soát hành vi của crawler. Ví dụ, `noindex` yêu cầu bot không index trang này, `nofollow` yêu cầu bot không đi theo các liên kết trên trang. Bạn có thể sử dụng chúng để quản lý cách AI crawler tương tác với nội dung.'
        },
        {
          question: 'Sơ đồ trang web XML (XML Sitemap) có giúp ích cho AI crawler không?',
          answer: 'Có, rất nhiều. Sơ đồ trang web cung cấp một danh sách tất cả các URL quan trọng trên trang của bạn, giúp crawler khám phá nội dung một cách hiệu quả, đặc biệt là các trang mới hoặc các trang khó tìm thấy qua liên kết thông thường.'
        }
      ]
    } as BaseLessonData,
    {
      id: 'semantic-content-strategy',
      title: 'Semantic Content Strategy',
      description: 'Develop content strategy based trên semantic relationships và entity connections.',
      duration: '135 phút',
      difficulty: 'Trung bình',
      objectives: [
        'Understand entity-based SEO',
        'Create semantic content maps',
        'Leverage knowledge graphs',
        'Implement topic modeling strategies',
      ],
      mainContent: [
        {
          heading: 'Entity-Based SEO',
          details: `AI systems think trong entities và relationships, không chỉ keywords:
- Entities: people, places, things, concepts
- Relationships: how entities connect
- Attributes: properties của entities
- Context: situational meaning

Content strategy nên reflect these relationships.`,
        },
        {
          heading: 'Semantic Content Mapping',
          details: `Create comprehensive maps showing:
- Core entities trong your domain
- Relationships between entities
- Content gaps trong entity coverage
- Opportunities for new connections
- User intent behind entity queries`,
        },
        {
          heading: 'Knowledge Graph Integration',
          details: `Align content với existing knowledge graphs:
- Research entity definitions trong Wikidata
- Understand canonical relationships
- Create content supporting existing connections
- Identify opportunities to define new entities`,
        },
      ],
      exercises: [
        {
          title: 'Entity Mapping Exercise',
          description: 'Create comprehensive entity map cho your domain',
          difficulty: 'Trung bình',
          steps: [
            'Identify core entities trong niche',
            'Map relationships between entities',
            'Find content gaps',
            'Plan semantic content calendar',
          ],
        },
      ],
      realWorldApplications: [
        'Plan content calendar dựa trên entity relationships',
        'Create comprehensive topic clusters',
        'Optimize local business cho AI local search',
      ],
      quiz: [
        {
          question: 'Entity-based SEO khác keyword-based SEO như thế nào?',
          options: [
            'Focuses on things và relationships thay vì individual words',
            'Chỉ uses long-tail keywords',
            'Ignores search volume completely',
            'Only works for e-commerce sites',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Entity-based SEO focuses on things, concepts và their relationships thay vì individual keywords in isolation.',
        },
      ],
      faqs: [
        {
          question: 'SEO dựa trên thực thể (Entity-based SEO) là gì?',
          answer: 'Là một phương pháp SEO tập trung vào việc tối ưu hóa nội dung xoay quanh các "thực thể" (người, địa điểm, sự vật, khái niệm) và mối quan hệ giữa chúng, thay vì chỉ tập trung vào các từ khóa riêng lẻ. Nó giúp máy tìm kiếm hiểu được ngữ cảnh sâu sắc của nội dung.'
        },
        {
          question: 'Làm thế nào để xác định các "thực thể" trong lĩnh vực của tôi?',
          answer: 'Hãy nghĩ về những danh từ quan trọng nhất trong ngành của bạn. Đó có thể là tên sản phẩm, tên công nghệ, tên chuyên gia, các thuật ngữ chuyên ngành, hoặc các vấn đề cốt lõi mà khách hàng của bạn quan tâm. Các công cụ như Google Knowledge Graph cũng có thể giúp bạn.'
        },
        {
          question: 'Bản đồ nội dung ngữ nghĩa (Semantic Content Map) là gì?',
          answer: 'Đó là một sơ đồ trực quan hóa các thực thể chính, các chủ đề phụ liên quan, và mối quan hệ giữa chúng. Nó giúp bạn xác định những lỗ hổng kiến thức trong nội dung của mình và lên kế hoạch tạo ra các cụm chủ đề (topic clusters) một cách chiến lược.'
        },
        {
          question: 'Knowledge Graph (Đồ thị tri thức) là gì?',
          answer: 'Là một cơ sở dữ liệu khổng lồ mà các công cụ tìm kiếm như Google sử dụng để lưu trữ thông tin về các thực thể và mối quan hệ giữa chúng. Khi bạn tìm kiếm "thủ đô của Pháp", Knowledge Graph sẽ trả về "Paris" cùng với các thông tin liên quan.'
        },
        {
          question: 'Làm thế nào để nội dung của tôi được đưa vào Knowledge Graph?',
          answer: 'Hãy tạo ra nội dung rõ ràng, chính xác và có cấu trúc về các thực thể. Sử dụng dữ liệu có cấu trúc (Schema.org) để "dán nhãn" các thực thể trên trang của bạn. Khi nội dung của bạn đủ uy tín, nó có thể được Google sử dụng để làm giàu cho Knowledge Graph.'
        },
        {
          question: 'Wikidata là gì và nó có liên quan gì?',
          answer: 'Wikidata là một cơ sở dữ liệu tri thức mở, có cấu trúc mà bất kỳ ai cũng có thể đóng góp. Nó là một trong những nguồn dữ liệu chính cho các Knowledge Graph. Việc tham chiếu và đóng góp cho Wikidata có thể giúp tăng cường sự hiện diện của các thực thể liên quan đến bạn.'
        },
        {
          question: 'Topic modeling (mô hình hóa chủ đề) là gì?',
          answer: 'Là một kỹ thuật mà AI sử dụng để phân tích một văn bản và xác định các chủ đề chính được thảo luận trong đó. Bằng cách tạo ra nội dung bao quát đầy đủ các khía cạnh của một chủ đề, bạn đang giúp AI "mô hình hóa" chủ đề đó một cách chính xác hơn.'
        },
        {
          question: 'Làm thế nào để áp dụng chiến lược nội dung ngữ nghĩa vào việc viết blog?',
          answer: 'Thay vì viết các bài viết ngẫu nhiên, hãy lên kế hoạch cho một loạt bài viết xoay quanh một chủ đề chính. Mỗi bài viết sẽ đi sâu vào một khía cạnh (một thực thể hoặc mối quan hệ) của chủ đề đó và liên kết chặt chẽ với các bài viết khác trong cùng loạt bài.'
        },
        {
          question: 'Chiến lược này có giúp tôi xếp hạng cho các từ khóa đuôi dài (long-tail keywords) không?',
          answer: 'Chắc chắn có. Bằng cách bao phủ một chủ đề một cách toàn diện, bạn sẽ tự nhiên trả lời được rất nhiều câu hỏi cụ thể và chi tiết, tương ứng với các từ khóa đuôi dài, ngay cả khi bạn không cố ý nhắm mục tiêu chúng.'
        },
        {
          question: 'Làm thế nào để bắt đầu với chiến lược nội dung ngữ nghĩa?',
          answer: 'Hãy bắt đầu bằng cách chọn một chủ đề cốt lõi mà bạn có chuyên môn. Sau đó, liệt kê tất cả các câu hỏi, các chủ đề phụ, và các khái niệm liên quan. Sắp xếp chúng thành một cấu trúc logic (pillar-cluster) và bắt đầu tạo nội dung cho từng phần.'
        }
      ]
    } as BaseLessonData,
    {
      id: 'measurement-analytics',
      title: 'Measurement & Analytics cho LLM SEO',
      description: 'Track và measure success của LLM SEO strategies với proper metrics và tools.',
      duration: '120 phút',
      difficulty: 'Trung bình',
      objectives: [
        'Setup tracking cho AI referrals',
        'Monitor brand mentions trong AI responses',
        'Measure concept ownership progress',
        'ROI analysis của LLM SEO efforts',
      ],
      mainContent: [
        {
          heading: 'Key Metrics cho LLM SEO',
          details: `Different từ traditional SEO metrics:
- AI citation frequency
- Brand mention accuracy trong AI responses
- Topic authority scores
- Zero-click impression impact
- AI referral traffic quality`,
        },
        {
          heading: 'Tracking Tools và Methods',
          details: `Available tools:
- Google Analytics 4 với custom dimensions
- Brand monitoring tools (Brand24, Mention)
- AI response monitoring services
- Custom scripts cho API monitoring
- Search console data analysis`,
        },
        {
          heading: 'ROI Measurement',
          details: `Calculate return on LLM SEO investment:
- Brand awareness lift
- Authority building value
- Long-term traffic sustainability
- Citation value estimation
- Competitive advantage metrics`,
        },
      ],
      exercises: [
        {
          title: 'Analytics Configuration',
          description: 'Set up comprehensive tracking cho LLM SEO metrics',
          difficulty: 'Trung bình',
          steps: [
            'Configure AI referrer tracking',
            'Set up citation monitoring',
            'Create performance dashboards',
            'Establish baseline metrics',
          ],
        },
      ],
      realWorldApplications: [
        'Track ROI của LLM SEO campaigns',
        'Monitor brand mentions trong AI responses',
        'Measure impact của concept ownership strategies',
      ],
      quiz: [
        {
          question: 'Metric nào quan trọng nhất cho LLM SEO success?',
          options: [
            'Traditional keyword rankings',
            'Click-through rates only',
            'AI citation frequency và accuracy',
            'Social media shares',
          ],
          correctAnswerIndex: 2,
          explanation:
            'AI citation frequency và accuracy shows your content đang được AI systems trust và reference, which is core goal của LLM SEO.',
        },
      ],
      faqs: [
        {
          question: 'Làm thế nào để theo dõi lưu lượng truy cập từ các hệ thống AI (AI referrals)?',
          answer: 'Hiện tại việc này khá khó khăn vì các hệ thống AI thường không gửi thông tin giới thiệu (referrer) rõ ràng. Một cách giải quyết là tạo các URL riêng biệt có tham số theo dõi (UTM) để sử dụng khi bạn muốn AI trích dẫn, hoặc theo dõi sự gia tăng của lưu lượng truy cập trực tiếp (Direct traffic).'
        },
        {
          question: 'Tần suất trích dẫn của AI (AI citation frequency) là gì?',
          answer: 'Là số lần nội dung hoặc thương hiệu của bạn được đề cập hoặc trích dẫn trong các câu trả lời do AI tạo ra. Đây là một trong những chỉ số đo lường thành công cốt lõi của LLM SEO.'
        },
        {
          question: 'Làm thế nào để theo dõi các lượt đề cập thương hiệu (brand mentions) trong các câu trả lời của AI?',
          answer: 'Bạn có thể sử dụng các công cụ theo dõi thương hiệu như Brand24, Mention, hoặc Google Alerts. Ngoài ra, bạn có thể thường xuyên tự mình thực hiện các truy vấn liên quan đến thương hiệu của mình trên các nền tảng AI khác nhau.'
        },
        {
          question: 'Làm thế nào để đo lường tiến trình "sở hữu khái niệm" (concept ownership)?',
          answer: 'Bạn có thể đo lường bằng cách theo dõi tần suất website của bạn xuất hiện khi truy vấn về khái niệm đó trên các công cụ AI. Sự gia tăng về số lượng trích dẫn và vị trí xuất hiện cao hơn cho thấy bạn đang dần "sở hữu" khái niệm đó.'
        },
        {
          question: 'ROI (Return on Investment) của LLM SEO được tính như thế nào?',
          answer: 'Việc tính toán ROI trực tiếp rất khó. Thay vào đó, bạn có thể đo lường các giá trị gián tiếp như: sự gia tăng nhận diện thương hiệu, giá trị của các trích dẫn (ước tính chi phí nếu phải trả tiền cho quảng cáo tương tự), và sự tăng trưởng bền vững của lưu lượng truy cập không phải trả tiền.'
        },
        {
          question: 'Google Search Console có giúp ích gì cho việc đo lường LLM SEO không?',
          answer: 'Có. Dữ liệu trong Google Search Console, đặc biệt là trong tab "Hiệu suất", có thể cho bạn biết các truy vấn mà trang web của bạn xuất hiện, bao gồm cả những truy vấn có thể đã kích hoạt AI Overviews. Phân tích các truy vấn này giúp bạn hiểu người dùng đang tìm kiếm gì.'
        },
        {
          question: 'Chất lượng của lưu lượng truy cập từ AI (AI referral traffic quality) được đánh giá như thế nào?',
          answer: 'Bạn có thể đánh giá dựa trên các chỉ số hành vi của người dùng sau khi họ truy cập trang của bạn, ví dụ như: thời gian họ ở lại trang, số trang họ xem, và tỷ lệ họ thực hiện một hành động mong muốn (như đăng ký, mua hàng).'
        },
        {
          question: 'Tại sao cần phải thiết lập các chỉ số cơ sở (baseline metrics)?',
          answer: 'Việc thiết lập các chỉ số cơ sở trước khi bạn bắt đầu triển khai chiến lược LLM SEO cho phép bạn đo lường sự thay đổi và tác động thực sự của các nỗ lực của mình một cách chính xác.'
        },
        {
          question: 'Có công cụ nào chuyên dụng để đo lường LLM SEO không?',
          answer: 'Thị trường công cụ cho LLM SEO vẫn còn rất mới. Hiện tại, các chuyên gia thường kết hợp nhiều công cụ khác nhau: Google Analytics, Google Search Console, các công cụ theo dõi thương hiệu, và các kịch bản (script) tự viết để theo dõi câu trả lời của AI.'
        },
        {
          question: 'Tôi nên tạo báo cáo hiệu suất LLM SEO như thế nào?',
          answer: 'Báo cáo của bạn nên bao gồm các chỉ số chính như tần suất trích dẫn, các ví dụ về câu trả lời tốt và chưa tốt của AI, phân tích sự thay đổi về nhận diện thương hiệu, và so sánh hiệu suất với các đối thủ cạnh tranh trong không gian AI.'
        }
      ]
    } as BaseLessonData,
  ],
};
