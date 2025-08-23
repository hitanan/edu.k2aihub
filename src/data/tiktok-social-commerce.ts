import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface TikTokSocialCommerceLessonType extends BaseLessonData {
  platforms: string[];
  ecommerceTools: string[];
  salesStrategies: string[];
  monetizationMethods: string[];
  targetAudience: string;
}

export const tiktokSocialCommerceLessons: TikTokSocialCommerceLessonType[] = [
  {
    id: 'tiktok-shop-setup-mastery',
    title: 'TikTok Shop Setup & Optimization Mastery',
    description: 'Học cách setup và optimize TikTok Shop để tối đa hóa doanh số. Từ product listing đến livestream selling strategies.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=OJ-7rHKKlvU',
    imageUrl: 'https://i.ytimg.com/vi/OJ-7rHKKlvU/hqdefault.jpg',
    objectives: [
      'Setup TikTok Shop account và verify business',
      'Optimize product listings cho maximum visibility',
      'Master TikTok Shop algorithm và ranking factors',
      'Develop effective livestream selling strategies',
      'Implement customer service best practices'
    ],
    prerequisites: [
      'Business license và tax registration',
      'Products ready for online selling',
      'Basic understanding của e-commerce',
      'TikTok Creator Fund eligibility'
    ],
    platforms: ['TikTok Shop', 'TikTok Live', 'TikTok For Business'],
    ecommerceTools: [
      'TikTok Shop Seller Center',
      'TikTok Ads Manager',
      'Creator Fund Dashboard',
      'Live Shopping Tools',
      'Analytics và Insights'
    ],
    salesStrategies: [
      'Live commerce selling',
      'Influencer partnerships',
      'Viral product showcases',
      'Flash sales và limited offers',
      'User-generated content campaigns'
    ],
    monetizationMethods: [
      'Direct product sales',
      'Affiliate commissions',
      'Brand partnerships',
      'Sponsored livestreams',
      'Creator Fund earnings'
    ],
    targetAudience: 'Gen Z và Millennials, đặc biệt women 18-35 tuổi',
    exercises: [
      {
        title: 'Complete TikTok Shop Launch',
        description: 'Setup và launch hoàn chỉnh TikTok Shop với 10+ products',
        difficulty: 'Trung bình',
        materials: [
          'Business registration documents',
          'Product inventory và images',
          'TikTok Business account',
          'Payment processing setup'
        ],
        procedure: [
          'Apply và setup TikTok Shop merchant account',
          'Upload product catalog với SEO-optimized listings',
          'Create compelling product videos cho showcase',
          'Setup shipping và return policies',
          'Configure payment methods và tax settings',
          'Launch first livestream shopping session',
          'Monitor performance và gather customer feedback',
          'Optimize listings based on data insights'
        ],
        expectedResults: 'TikTok Shop live với 100+ views/product và first sales trong week 1',
        solution: 'Strategic product positioning với engaging content strategy'
      },
      {
        title: 'Viral Product Campaign Strategy',
        description: 'Tạo viral marketing campaign cho một product specific',
        difficulty: 'Nâng cao',
        materials: [
          'Hero product cho campaign',
          'Content creation tools',
          'Influencer network connections',
          'Paid advertising budget'
        ],
        procedure: [
          'Identify viral potential product characteristics',
          'Develop unique selling proposition và hooks',
          'Create content series với consistent messaging',
          'Partner với micro-influencers cho authentic reviews',
          'Execute coordinated launch với multiple touchpoints',
          'Leverage user-generated content và social proof',
          'Scale successful content formats',
          'Analyze campaign performance và ROI'
        ],
        expectedResults: '500K+ views, 50+ sales, và viral momentum trong 2 tuần',
        solution: 'Multi-touch campaign với authentic storytelling và strategic timing'
      }
    ],
    realWorldApplications: [
      'Fashion brands reaching younger demographics',
      'Beauty products với visual demonstration needs',
      'Tech gadgets requiring explanation và demo',
      'Food products với cooking và lifestyle content',
      'Home goods với aesthetic và lifestyle appeal'
    ],
    caseStudies: [
      {
        title: 'Vietnamese Fashion Brand Success',
        organization: 'Local Fashion Startup',
        problem: 'Struggling với traditional e-commerce, low brand awareness',
        solution: 'Pivot to TikTok Shop với authentic Vietnamese fashion content',
        impact: 'Từ 50K/tháng lên 2M VNĐ/tháng revenue trong 6 tháng',
        innovations: [
          'Daily outfit inspiration livestreams',
          'Cultural fashion storytelling',
          'Customer styling sessions live'
        ]
      },
      {
        title: 'Beauty Brand Viral Success',
        organization: 'K-Beauty Import Business',
        problem: 'Competitive market với established beauty brands',
        solution: 'TikTok Shop strategy focusing on authentic reviews và tutorials',
        impact: '10K followers lên 500K trong 4 tháng, 5x revenue growth',
        innovations: [
          'Before/after transformation content',
          'Cultural beauty trends adaptation',
          'Community-driven product development'
        ]
      }
    ],
    resources: [
      {
        title: 'TikTok Shop Seller Guide',
        url: 'https://seller.tiktok.com/university',
        type: 'Official Documentation'
      },
      {
        title: 'Social Commerce Trends Report',
        url: 'https://www.accenture.com/social-commerce',
        type: 'Research Report'
      }
    ]
  },
  {
    id: 'social-commerce-livestream-mastery',
    title: 'Social Commerce Livestream Selling Mastery',
    description: 'Master nghệ thuật livestream selling trên multiple platforms. Học cách engage audience và convert viewers thành customers.',
    duration: '150 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=rcLOBdLGHIM',
    imageUrl: 'https://i.ytimg.com/vi/rcLOBdLGHIM/hqdefault.jpg',
    objectives: [
      'Develop captivating livestream presentation skills',
      'Master real-time audience engagement techniques',
      'Implement psychological triggers cho impulse purchases',
      'Handle objections và close sales during live sessions',
      'Scale livestream operations cho consistent revenue'
    ],
    prerequisites: [
      'Comfortable speaking on camera',
      'Product knowledge và presentation skills',
      'Understanding of sales psychology',
      'Stable internet và quality streaming setup'
    ],
    platforms: ['TikTok Live', 'Instagram Live Shopping', 'Facebook Live Shopping', 'YouTube Live'],
    ecommerceTools: [
      'OBS Studio cho professional streaming',
      'StreamLabs cho interactive features',
      'Live shopping integration tools',
      'Real-time analytics dashboards'
    ],
    salesStrategies: [
      'Scarcity và urgency tactics',
      'Social proof trong real-time',
      'Interactive demos và tutorials',
      'Flash sales và limited-time offers',
      'Community building approaches'
    ],
    monetizationMethods: [
      'Live product sales',
      'Super chat monetization',
      'Affiliate link promotions',
      'Brand sponsorship deals',
      'Subscription/membership tiers'
    ],
    targetAudience: 'Social media users với purchase intent, particularly mobile-first shoppers',
    exercises: [
      {
        title: 'Perfect Livestream Sales Session',
        description: 'Conduct hoàn chỉnh livestream session với structured sales approach',
        difficulty: 'Nâng cao',
        materials: [
          'Streaming equipment setup',
          'Product samples for demonstration',
          'Script và talking points',
          'Engagement tools và interactive features'
        ],
        procedure: [
          'Plan session structure với clear sales goals',
          'Setup professional streaming environment',
          'Create compelling opening hook để retain viewers',
          'Execute product demonstrations với emotional appeal',
          'Handle live comments và questions professionally',
          'Implement time-sensitive offers effectively',
          'Close sales với clear call-to-actions',
          'Follow up with post-stream community engagement'
        ],
        expectedResults: '200+ concurrent viewers, 15%+ conversion rate, 50+ sales',
        solution: 'Structured approach combining entertainment với strategic selling'
      }
    ],
    realWorldApplications: [
      'Retail brands transitioning to D2C models',
      'Influencers monetizing audience trust',
      'Traditional businesses adding digital revenue streams',
      'Startup founders bootstrapping growth'
    ],
    caseStudies: [
      {
        title: 'Electronics Retailer Digital Transformation',
        organization: 'Traditional Electronics Store',
        problem: 'Declining foot traffic và competition from online giants',
        solution: 'Livestream product demonstrations với technical expertise',
        impact: '60% revenue recovery plus 40% new online revenue stream',
        innovations: [
          'Expert-led technical product breakdowns',
          'Live customer support integration',
          'Community-driven product comparisons'
        ]
      }
    ],
    resources: [
      {
        title: 'Livestream Commerce Best Practices',
        url: 'https://www.shopify.com/blog/live-commerce',
        type: 'Guide'
      },
      {
        title: 'Psychology of Live Selling',
        url: 'https://www.salesforce.com/resources/articles/live-selling',
        type: 'Research'
      }
    ]
  },
  {
    id: 'cross-platform-social-commerce',
    title: 'Cross-Platform Social Commerce Strategy',
    description: 'Phát triển cohesive strategy across multiple platforms để maximize reach và revenue trong social commerce ecosystem.',
    duration: '120 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=ol0v779BlAA',
    imageUrl: 'https://i.ytimg.com/vi/ol0v779BlAA/hqdefault.jpg',
    objectives: [
      'Develop integrated strategy across major platforms',
      'Optimize content cho each platform\'s unique algorithm',
      'Create seamless customer journey across touchpoints',
      'Implement unified analytics và tracking systems',
      'Scale operations efficiently across channels'
    ],
    prerequisites: [
      'Experience với multiple social platforms',
      'Understanding of different audience behaviors',
      'E-commerce infrastructure readiness',
      'Data analysis capabilities'
    ],
    platforms: ['TikTok Shop', 'Instagram Shopping', 'Facebook Shop', 'Pinterest Shopping', 'YouTube Shopping'],
    ecommerceTools: [
      'Shopify Multi-Channel',
      'WooCommerce integrations',
      'Social media management tools',
      'Universal analytics platforms'
    ],
    salesStrategies: [
      'Platform-specific content adaptation',
      'Audience segmentation strategies',
      'Cross-platform retargeting',
      'Unified brand messaging',
      'Channel attribution modeling'
    ],
    monetizationMethods: [
      'Direct platform sales',
      'Cross-platform traffic driving',
      'Email list building từ social',
      'Loyalty program integration',
      'Multi-channel customer lifetime value'
    ],
    targetAudience: 'Businesses ready to scale beyond single platform dependency',
    exercises: [
      {
        title: 'Complete Multi-Platform Commerce Setup',
        description: 'Setup integrated social commerce presence across 3+ major platforms',
        difficulty: 'Nâng cao',
        materials: [
          'Business accounts on multiple platforms',
          'E-commerce platform integration',
          'Content creation tools',
          'Analytics tracking setup'
        ],
        procedure: [
          'Audit current platform presence và performance',
          'Develop platform-specific content strategies',
          'Setup unified product catalog across channels',
          'Implement cross-platform tracking systems',
          'Create content calendar với platform optimization',
          'Launch coordinated campaigns across channels',
          'Monitor performance và optimize based on data',
          'Scale successful tactics across platforms'
        ],
        expectedResults: '3x reach increase, 50% higher customer lifetime value, unified brand experience',
        solution: 'Strategic platform utilization maximizing each channel\'s strengths'
      }
    ],
    realWorldApplications: [
      'Brands looking to diversify traffic sources',
      'Companies reducing dependency on paid advertising',
      'Businesses expanding into new demographics',
      'Organizations building resilient revenue streams'
    ],
    caseStudies: [
      {
        title: 'Holistic Brand Transformation',
        organization: 'Vietnamese Lifestyle Brand',
        problem: 'Over-reliance on Facebook, declining organic reach',
        solution: 'Strategic expansion to TikTok, Instagram, và Pinterest với tailored approach',
        impact: 'Revenue diversification: 40% TikTok, 35% Instagram, 25% Facebook',
        innovations: [
          'Platform-specific influencer networks',
          'Cultural adaptation for each platform',
          'Unified customer service across channels'
        ]
      }
    ],
    resources: [
      {
        title: 'Multi-Platform Commerce Strategy Guide',
        url: 'https://business.instagram.com/shopping',
        type: 'Strategic Guide'
      },
      {
        title: 'Social Commerce Analytics Framework',
        url: 'https://analytics.google.com/analytics/academy',
        type: 'Educational Resource'
      }
    ]
  }
];
