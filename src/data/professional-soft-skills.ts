import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface ProfessionalSoftSkillsLesson extends BaseLessonData {
  category: 'communication' | 'leadership' | 'productivity' | 'negotiation';
  skillLevel: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
  vietnameseContext: string[];
  practicalExercises: string[];
}

export const professionalSoftSkillsLessons: ProfessionalSoftSkillsLesson[] = [
  {
    id: 'presentation-skills-mastery',
    title: 'Thành Thạo Kỹ Năng Thuyết Trình',
    description: 'Học cách thuyết trình chuyên nghiệp và tự tin trong môi trường doanh nghiệp Việt Nam. Từ chuẩn bị nội dung đến xử lý tương tác với khán giả.',
    duration: '150 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=Unzc731iCUY', // How to give a great presentation - TED-Ed
    imageUrl: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=600&fit=crop',
    category: 'communication',
    skillLevel: 'Cơ bản',
    objectives: [
      'Xây dựng cấu trúc thuyết trình logic và thuyết phục',
      'Thiết kế slide hiệu quả và hấp dẫn',
      'Xử lý câu hỏi khó và tình huống bất ngờ',
      'Áp dụng kỹ thuật giao tiếp phi ngôn ngữ',
      'Thuyết trình tự tin trong bối cảnh văn hóa Việt Nam'
    ],
    prerequisites: [
      'Khả năng giao tiếp cơ bản bằng tiếng Việt',
      'Hiểu biết về môi trường doanh nghiệp Việt Nam'
    ],
    vietnameseContext: [
      'Văn hóa tôn trọng cấp trên trong thuyết trình',
      'Cách xử lý câu hỏi thách thức một cách lịch sự',
      'Sử dụng ngôn ngữ cơ thể phù hợp với văn hóa Á Đông',
      'Tích hợp yếu tố truyền thống vào bài thuyết trình'
    ],
    practicalExercises: [
      'Thực hành thuyết trình 5 phút trước camera',
      'Phân tích và cải thiện bài thuyết trình của đồng nghiệp',
      'Xử lý tình huống khó trong Q&A session',
      'Thiết kế bộ slide cho dự án thực tế'
    ],
    exercises: [
      {
        title: 'Xây Dựng Cấu Trúc Thuyết Trình STAR',
        description: 'Sử dụng phương pháp STAR (Situation, Task, Action, Result) để tạo bài thuyết trình thuyết phục',
        difficulty: 'Cơ bản',
        materials: ['PowerPoint/Google Slides', 'Outline template', 'Timer'],
        procedure: [
          'Chọn chủ đề thuyết trình liên quan đến công việc',
          'Xác định Situation và Task rõ ràng',
          'Phát triển Action steps logic',
          'Chuẩn bị Result với metrics cụ thể',
          'Thực hành thuyết trình 10 phút',
          'Ghi lại và tự đánh giá'
        ],
        expectedResults: 'Bài thuyết trình có cấu trúc rõ ràng, thuyết phục với thời lượng 8-12 phút',
        solution: 'Framework STAR giúp tạo luồng logic tự nhiên, dễ theo dõi và ghi nhớ cho người nghe'
      },
      {
        title: 'Thiết Kế Slide Theo Nguyên Tắc 6x6',
        description: 'Áp dụng quy tắc 6x6 và visual storytelling để tạo slide hiệu quả',
        difficulty: 'Trung bình',
        materials: ['Canva/PowerPoint', 'Stock images', 'Font chữ chuyên nghiệp'],
        procedure: [
          'Chọn template phù hợp với chủ đề',
          'Áp dụng quy tắc 6 bullet points, mỗi point tối đa 6 từ',
          'Thêm visual elements hỗ trợ nội dung',
          'Đảm bảo contrast và readability',
          'Test trên nhiều kích thước màn hình khác nhau'
        ],
        expectedResults: 'Bộ slide chuyên nghiệp, dễ đọc và truyền tải thông tin hiệu quả'
      }
    ],
    realWorldApplications: [
      'Thuyết trình dự án cho leadership team',
      'Trình bày kết quả kinh doanh hàng quý',
      'Pitch ideas cho khách hàng và đối tác',
      'Training và onboarding nhân viên mới',
      'Thuyết trình tại hội thảo và sự kiện ngành'
    ],
    caseStudies: [
      {
        title: 'VinGroup - Thuyết Trình Chiến Lược Chuyển Đổi Số',
        organization: 'VinGroup',
        problem: 'Cần thuyết trình về roadmap chuyển đổi số cho 100+ C-level executives',
        solution: 'Sử dụng storytelling với data visualization, tích hợp case studies Việt Nam',
        impact: 'Approval 100% kế hoạch 5 năm, budget 2 tỷ USD',
        innovations: ['Interactive dashboard demo', 'Real-time Q&A platform', 'Multi-language support']
      }
    ],
    resources: [
      {
        title: 'TED Talks - The Secret Structure of Great Talks',
        url: 'https://www.ted.com/talks/nancy_duarte_the_secret_structure_of_great_talks',
        type: 'Video Tutorial'
      },
      {
        title: 'Slide Design Best Practices Guide',
        url: 'https://blog.hubspot.com/marketing/easy-powerpoint-design-tricks-ht',
        type: 'Documentation'
      }
    ]
  },
  {
    id: 'professional-email-business-writing',
    title: 'Viết Email Chuyên Nghiệp & Văn Bản Kinh Doanh',
    description: 'Thành thạo kỹ năng viết email và văn bản kinh doanh hiệu quả, phù hợp với chuẩn quốc tế và văn hóa Việt Nam.',
    duration: '120 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=JZxrxoL9hv8', // How to Write Professional Emails
    imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&h=600&fit=crop',
    category: 'communication',
    skillLevel: 'Cơ bản',
    objectives: [
      'Viết email chuyên nghiệp với cấu trúc rõ ràng',
      'Sử dụng tone và ngôn ngữ phù hợp với từng đối tượng',
      'Tạo subject line hiệu quả và gây chú ý',
      'Xử lý email khó và tình huống phức tạp',
      'Áp dụng email etiquette trong môi trường đa văn hóa'
    ],
    prerequisites: [
      'Tiếng Anh cơ bản hoặc trung cấp',
      'Hiểu biết về môi trường công sở'
    ],
    vietnameseContext: [
      'Cách xưng hô phù hợp trong email tiếng Việt/Anh',
      'Balance giữa lịch sự và hiệu quả',
      'Email communication với cấp trên và khách hàng',
      'Handling conflicts thông qua email'
    ],
    practicalExercises: [
      'Viết lại 10 email thực tế để cải thiện',
      'Role-play email negotiation scenarios',
      'Template library cho các tình huống thường gặp'
    ],
    exercises: [
      {
        title: 'Email Template System cho Sales & Marketing',
        description: 'Xây dựng bộ template email cho các tình huống kinh doanh thường gặp',
        difficulty: 'Trung bình',
        materials: ['Email templates', 'CRM system', 'A/B testing tools'],
        procedure: [
          'Phân loại các loại email theo mục đích (sales, support, follow-up)',
          'Tạo template với personalization fields',
          'Test subject lines và call-to-action',
          'Measure open rates và response rates',
          'Optimize dựa trên performance data'
        ],
        expectedResults: 'Bộ template email với open rate >25% và response rate >5%'
      }
    ],
    realWorldApplications: [
      'Client communication và relationship management',
      'Internal collaboration và project updates',
      'Vendor negotiation và contract discussions',
      'Cross-cultural business communication',
      'Crisis communication và damage control'
    ]
  },
  {
    id: 'leadership-team-management',
    title: 'Lãnh Đạo & Quản Lý Đội Nhóm',
    description: 'Phát triển kỹ năng lãnh đạo hiệu quả và quản lý đội nhóm đa thế hệ trong bối cảnh doanh nghiệp Việt Nam hiện đại.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=GbfrchiAmRE', // Leadership Skills: How to Be a Leader
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop',
    category: 'leadership',
    skillLevel: 'Trung bình',
    objectives: [
      'Hiểu các phong cách lãnh đạo và khi nào áp dụng',
      'Xây dựng và motivate team hiệu suất cao',
      'Giải quyết conflict và facilitate collaboration',
      'Coaching và develop nhân viên',
      'Adapting leadership style cho Gen Z workforce'
    ],
    prerequisites: [
      'Kinh nghiệm làm việc nhóm tối thiểu 2 năm',
      'Hiểu biết về dynamics tổ chức'
    ],
    vietnameseContext: [
      'Hierarchical culture vs modern flat organization',
      'Managing multi-generational workforce',
      'Confucian values trong leadership style',
      'Remote work management post-COVID'
    ],
    practicalExercises: [
      'Leadership assessment và self-reflection',
      '360-degree feedback simulation',
      'Difficult conversation practice'
    ],
    exercises: [
      {
        title: 'Situational Leadership Assessment',
        description: 'Phân tích và áp dụng phong cách lãnh đạo phù hợp cho từng tình huống cụ thể',
        difficulty: 'Nâng cao',
        materials: ['Leadership assessment tool', 'Case study scenarios', 'Feedback forms'],
        procedure: [
          'Complete leadership style assessment',
          'Analyze team members readiness levels',
          'Match leadership approach với development level',
          'Practice different scenarios với role-playing',
          'Gather feedback và adjust approach'
        ],
        expectedResults: 'Improved team performance metrics và employee satisfaction scores'
      }
    ],
    realWorldApplications: [
      'Leading cross-functional project teams',
      'Managing remote và hybrid workforces',
      'Change management initiatives',
      'Performance review và career development',
      'Building high-trust team culture'
    ]
  },
  {
    id: 'negotiation-persuasion-mastery',
    title: 'Thành Thạo Đàm Phán & Thuyết Phục',
    description: 'Nắm vững nghệ thuật đàm phán và kỹ thuật thuyết phục trong kinh doanh, từ psychology cơ bản đến advanced strategies.',
    duration: '200 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=VdgBjYJ0sUo', // Negotiation Skills: The Science of Persuasion
    imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1200&h=600&fit=crop',
    category: 'negotiation',
    skillLevel: 'Nâng cao',
    objectives: [
      'Hiểu psychology đằng sau decision-making process',
      'Áp dụng principled negotiation techniques',
      'Xây dựng win-win solutions trong conflicts',
      'Influence without authority',
      'Handle high-stakes negotiations với cultural sensitivity'
    ],
    prerequisites: [
      'Kinh nghiệm business development hoặc sales',
      'Strong communication skills',
      'Emotional intelligence cơ bản'
    ],
    vietnameseContext: [
      'Guanxi và relationship-based negotiation',
      'Face-saving techniques trong difficult conversations',
      'Hierarchy respect trong negotiation process',
      'Long-term thinking vs short-term gains'
    ],
    practicalExercises: [
      'Mock negotiation với real business scenarios',
      'Cultural intelligence assessment',
      'Influence tactics practice sessions'
    ],
    exercises: [
      {
        title: 'Multi-Party Stakeholder Negotiation',
        description: 'Simulation đàm phán phức tạp với multiple stakeholders có interests khác nhau',
        difficulty: 'Nâng cao',
        materials: ['Negotiation brief', 'Role-play cards', 'Scoring sheets'],
        procedure: [
          'Study all party positions và underlying interests',
          'Develop BATNA (Best Alternative to Negotiated Agreement)',
          'Identify potential value-creation opportunities',
          'Execute negotiation với time constraints',
          'Analyze outcomes và lessons learned'
        ],
        expectedResults: 'Successful multi-win agreement với satisfaction score >80% từ tất cả parties'
      }
    ],
    realWorldApplications: [
      'Salary negotiation và career advancement',
      'Client contract terms và pricing discussions',
      'Vendor relationships và cost optimization',
      'Internal resource allocation conflicts',
      'International business partnerships'
    ]
  },
  {
    id: 'time-management-productivity-optimization',
    title: 'Quản Lý Thời Gian & Tối Ưu Hóa Hiệu Suất',
    description: 'Làm chủ thời gian và tối ưu hóa productivity với modern tools và techniques, đặc biệt trong work-from-home era.',
    duration: '140 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=oTugjssqOT0', // Time Management & Productivity
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop',
    category: 'productivity',
    skillLevel: 'Cơ bản',
    objectives: [
      'Implement proven time management frameworks',
      'Eliminate distractions và time wasters',
      'Optimize workflow với digital tools',
      'Balance work-life integration',
      'Build sustainable productivity habits'
    ],
    prerequisites: [
      'Basic computer skills',
      'Willingness to change existing habits'
    ],
    vietnameseContext: [
      'Vietnamese work culture và overtime expectations',
      'Family obligations vs career demands',
      'Motorbike commute time optimization',
      'Managing energy trong tropical climate'
    ],
    practicalExercises: [
      'Personal time audit trong 1 tuần',
      'Digital detox challenge',
      'Productivity tool setup và customization'
    ],
    exercises: [
      {
        title: 'Personal Productivity System Setup',
        description: 'Xây dựng hệ thống quản lý công việc cá nhân với Getting Things Done (GTD) methodology',
        difficulty: 'Trung bình',
        materials: ['Digital task manager', 'Calendar app', 'Note-taking tool'],
        procedure: [
          'Capture tất cả tasks và commitments vào inbox',
          'Process inbox theo GTD workflow',
          'Organize theo contexts và projects',
          'Review weekly và adjust priorities',
          'Measure productivity metrics theo time'
        ],
        expectedResults: 'Giảm stress, tăng focus, complete 80%+ planned tasks hàng tuần'
      }
    ],
    realWorldApplications: [
      'Managing multiple projects simultaneously',
      'Preparing for promotion và increased responsibilities',
      'Freelancing và side business management',
      'Studying while working full-time',
      'Leading by example trong team productivity'
    ]
  }
];

export default professionalSoftSkillsLessons;