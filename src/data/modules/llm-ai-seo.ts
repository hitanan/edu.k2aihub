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
    } as BaseLessonData,
  ],
};
