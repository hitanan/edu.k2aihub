import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface ShortVideoMasteryLessonType extends BaseLessonData {
  videoFormats: string[];
  editingTools: string[];
  algorithmFactors: string[];
  contentPillars: string[];
  viralTriggers: string[];
}

export const shortVideoMasteryLessons: ShortVideoMasteryLessonType[] = [
  {
    id: 'viral-video-psychology-hooks',
    title: 'Viral Video Psychology & Hook Mastery',
    description: 'Master psychological triggers tạo viral videos và craft compelling hooks giữ chân viewers trong 3 giây đầu tiên.',
    duration: '150 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    imageUrl: '/images/lessons/viral-psychology.jpg',
    objectives: [
      'Understand psychology behind viral content',
      'Master 3-second hook creation techniques',
      'Apply emotional triggers effectively',
      'Create content patterns for consistent virality',
      'Optimize timing và posting strategies'
    ],
    prerequisites: [
      'Basic video editing skills',
      'Understanding of social media platforms',
      'Creative mindset và storytelling interest'
    ],
    videoFormats: ['15-60 second videos', 'Vertical 9:16 ratio', 'Hook + Content + CTA structure'],
    editingTools: ['CapCut', 'InShot', 'Adobe Premiere Rush', 'TikTok Editor', 'Instagram Reels Editor'],
    algorithmFactors: [
      'Watch time percentage',
      'Engagement rate within first hour',
      'Share rate và saves',
      'Comment quality và responses',
      'Profile visits from video'
    ],
    contentPillars: [
      'Educational content với twist',
      'Behind-the-scenes authenticity',
      'Trend participation với unique angle',
      'Problem-solution storytelling',
      'Emotional resonance content'
    ],
    viralTriggers: [
      'Pattern interrupts',
      'Controversial but safe opinions',
      'Relatable frustrations',
      'Surprising revelations',
      'Visual satisfying elements'
    ],
    exercises: [
      {
        title: 'Viral Hook Formula Implementation',
        description: 'Create 10 videos using proven viral hook formulas và track performance',
        difficulty: 'Trung bình',
        materials: [
          'Smartphone với good camera',
          'Video editing app',
          'Content calendar template',
          'Performance tracking sheet'
        ],
        procedure: [
          'Study top-performing videos trong niche',
          'Identify common hook patterns và triggers',
          'Brainstorm 20 video ideas using viral formulas',
          'Create first batch của 5 videos với different hooks',
          'Post strategically với optimal timing',
          'Monitor performance metrics closely',
          'Iterate successful patterns',
          'Create second batch applying learnings'
        ],
        expectedResults: '2-3 videos với 10K+ views, improved engagement rates',
        solution: 'Data-driven approach to viral content creation'
      },
      {
        title: 'Trend Jacking Mastery',
        description: 'Master technique của trend jacking while maintaining brand authenticity',
        difficulty: 'Nâng cao',
        materials: [
          'Trend monitoring tools',
          'Quick content creation setup',
          'Brand guidelines reference',
          'Performance analytics access'
        ],
        procedure: [
          'Setup trend monitoring system',
          'Identify trends early before saturation',
          'Develop unique brand angle for trends',
          'Create rapid content production workflow',
          'Execute trend participation within 24 hours',
          'Maintain authenticity while following trends',
          'Measure performance against non-trend content',
          'Document successful trend adaptation strategies'
        ],
        expectedResults: 'Consistent trend participation với maintained brand identity',
        solution: 'Systematic approach to trend leveraging'
      }
    ],
    realWorldApplications: [
      'Personal brands building thought leadership',
      'Small businesses increasing visibility',
      'Non-profits raising awareness for causes',
      'Educational creators explaining complex topics'
    ],
    caseStudies: [
      {
        title: 'Educational Creator Viral Success',
        organization: 'Vietnamese Language Learning Creator',
        problem: 'Struggling to make educational content engaging',
        solution: 'Apply viral hooks to language learning content',
        impact: '50K to 2M followers trong 6 tháng, course sales 1000% increase',
        innovations: [
          'Vietnamese slang explanation videos',
          'Cultural context storytelling',
          'Interactive language challenges'
        ]
      },
      {
        title: 'Local Business Viral Marketing',
        organization: 'Ho Chi Minh City Coffee Shop',
        problem: 'High competition, low brand awareness',
        solution: 'Daily behind-the-scenes videos với viral elements',
        impact: 'Queue time increased 300%, revenue up 250%',
        innovations: [
          'Coffee art process videos',
          'Customer reaction content',
          'Cultural coffee stories'
        ]
      }
    ],
    resources: [
      {
        title: 'Viral Content Psychology Guide',
        url: 'https://blog.hootsuite.com/viral-marketing',
        type: 'Educational Guide'
      },
      {
        title: 'Short-form Video Best Practices',
        url: 'https://creatoreconomy.so/p/short-form-video-guide',
        type: 'Creator Resource'
      }
    ]
  },
  {
    id: 'advanced-video-editing-techniques',
    title: 'Advanced Video Editing & Visual Storytelling',
    description: 'Master advanced editing techniques tạo cinematic short-form content với professional production value.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    imageUrl: '/images/lessons/advanced-editing.jpg',
    objectives: [
      'Master advanced editing transitions và effects',
      'Create cinematic looks với smartphone footage',
      'Implement professional color grading',
      'Design engaging text animations',
      'Optimize video quality for platforms'
    ],
    prerequisites: [
      'Intermediate video editing experience',
      'Understanding of basic video concepts',
      'Access to editing software'
    ],
    videoFormats: ['4K recording for crop flexibility', 'LOG footage for color grading', 'Multi-angle setups'],
    editingTools: ['DaVinci Resolve', 'Adobe Premiere Pro', 'Final Cut Pro', 'CapCut Pro', 'LumaFusion'],
    algorithmFactors: [
      'Video quality và clarity',
      'Retention curves optimization',
      'Audio quality consistency',
      'Visual appeal để encourage sharing'
    ],
    contentPillars: [
      'Visual storytelling mastery',
      'Cinematic movement và framing',
      'Color psychology application',
      'Audio design để enhance mood',
      'Text design và typography'
    ],
    viralTriggers: [
      'Smooth transition surprises',
      'Visual transformations',
      'Split-screen comparisons',
      'Time-lapse revelations',
      'Before/after reveals'
    ],
    exercises: [
      {
        title: 'Cinematic Short-form Video Production',
        description: 'Create film-quality short-form video using advanced techniques',
        difficulty: 'Nâng cao',
        materials: [
          'Professional editing software',
          'Smartphone with manual camera controls',
          'External microphone',
          'Lighting equipment'
        ],
        procedure: [
          'Plan cinematic shot sequence',
          'Record footage với manual camera settings',
          'Import và organize footage professionally',
          'Apply color grading for mood enhancement',
          'Create smooth transitions between shots',
          'Design animated text overlays',
          'Mix audio với background music',
          'Export optimized for platform specifications'
        ],
        expectedResults: 'Professional-looking video challenging traditional content creators',
        solution: 'Production value differentiation trong saturated market'
      }
    ],
    realWorldApplications: [
      'Brands creating premium content on budget',
      'Creators differentiating through quality',
      'Agencies serving high-end clients',
      'Businesses showcasing products professionally'
    ],
    caseStudies: [
      {
        title: 'Luxury Brand Mobile-First Strategy',
        organization: 'Vietnamese Luxury Fashion Brand',
        problem: 'Premium brand image conflicted với casual social media',
        solution: 'Cinematic mobile video production maintaining luxury aesthetic',
        impact: 'Brand perception improved 85%, engagement quality increased significantly',
        innovations: [
          'Mobile filmmaking techniques for luxury content',
          'High-end visual storytelling on social platforms',
          'Professional production value với smartphone tools'
        ]
      }
    ],
    resources: [
      {
        title: 'Mobile Filmmaking Masterclass',
        url: 'https://www.masterclass.com/classes/mobile-filmmaking',
        type: 'Course'
      },
      {
        title: 'Color Grading for Social Media',
        url: 'https://www.blackmagicdesign.com/products/davinciresolve',
        type: 'Software Tutorial'
      }
    ]
  },
  {
    id: 'platform-optimization-algorithm-mastery',
    title: 'Platform Optimization & Algorithm Mastery',
    description: 'Deep dive into từng platform\'s algorithm và optimize content strategies cho maximum reach và engagement.',
    duration: '120 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    imageUrl: '/images/lessons/algorithm-mastery.jpg',
    objectives: [
      'Understand each platform\'s algorithm in depth',
      'Optimize posting times và frequency',
      'Master platform-specific features',
      'Develop multi-platform content adaptation',
      'Track performance để continuous optimization'
    ],
    prerequisites: [
      'Experience creating content across platforms',
      'Understanding of basic analytics',
      'Willingness to experiment và test'
    ],
    videoFormats: ['Platform-native aspect ratios', 'Optimal duration for each platform', 'Feature-specific formats'],
    editingTools: ['Platform native editors', 'Third-party scheduling tools', 'Analytics platforms'],
    algorithmFactors: [
      'Platform-specific engagement signals',
      'Audience retention patterns',
      'Cross-platform traffic drivers',
      'Community building metrics'
    ],
    contentPillars: [
      'Platform-native content creation',
      'Cross-platform story adaptation',
      'Community engagement strategies',
      'Performance data interpretation',
      'Trend adaptation per platform'
    ],
    viralTriggers: [
      'Platform-specific viral mechanics',
      'Feature utilization strategies',
      'Community-driven content',
      'Algorithm timing optimization'
    ],
    exercises: [
      {
        title: 'Multi-Platform Algorithm Optimization',
        description: 'Develop optimized content strategy for 3 major platforms simultaneously',
        difficulty: 'Nâng cao',
        materials: [
          'Analytics access for multiple platforms',
          'Content planning tools',
          'A/B testing framework',
          'Performance tracking spreadsheets'
        ],
        procedure: [
          'Analyze current performance across platforms',
          'Identify platform-specific optimization opportunities',
          'Develop platform-native content strategies',
          'Create testing framework cho different variables',
          'Implement optimized posting schedule',
          'Monitor performance changes closely',
          'Iterate based on data insights',
          'Document successful optimization tactics'
        ],
        expectedResults: '50%+ improvement trong organic reach across platforms',
        solution: 'Data-driven optimization tailored to each platform'
      }
    ],
    realWorldApplications: [
      'Agencies managing multiple client accounts',
      'Creators scaling across platforms efficiently',
      'Businesses maximizing organic reach',
      'Influencers monetizing audience growth'
    ],
    caseStudies: [
      {
        title: 'Multi-Platform Creator Success',
        organization: 'Vietnamese Tech Reviewer',
        problem: 'Inconsistent performance across different platforms',
        solution: 'Platform-specific optimization strategy với native content approaches',
        impact: 'Uniform growth: 200K TikTok, 150K YouTube, 100K Instagram trong 8 tháng',
        innovations: [
          'Platform-specific content formats',
          'Cross-platform audience migration strategies',
          'Algorithm timing optimization'
        ]
      }
    ],
    resources: [
      {
        title: 'Social Media Algorithm Updates',
        url: 'https://blog.hootsuite.com/how-the-instagram-algorithm-works',
        type: 'Algorithm Guide'
      },
      {
        title: 'Platform Optimization Tools',
        url: 'https://later.com/blog/social-media-analytics',
        type: 'Analytics Resource'
      }
    ]
  }
];
