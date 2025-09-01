import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface EnergyManagementLessonType extends BaseLessonData {
  energyPrinciples: string[];
  performanceMetrics: Array<{
    metric: string;
    category: string;
    measurement: string;
    frequency: string;
    interpretation: string;
  }>;
  recoveryMethods: string[];
  realWorldApplications: string[];
  optimizationStrategies: string[];
}

export const energyManagementLessons: EnergyManagementLessonType[] = [
  {
    id: 'energy-fundamentals',
    title: 'Cơ Bản Quản Lý Năng Lượng',
    description:
      'Học cách quản lý năng lượng cá nhân để tối ưu hóa hiệu suất và duy trì sức khỏe bền vững trong cuộc sống và công việc.',
    duration: '120 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw', // Energy Management vs Time Management
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu về 4 loại năng lượng: Physical, Emotional, Mental, Spiritual',
      'Nhận diện energy patterns và peak performance times',
      'Phát triển sustainable energy management strategies',
      'Create personalized energy optimization plan',
    ],
    prerequisites: ['Có motivation để improve personal performance', 'Sẵn sàng track và monitor daily habits'],
    energyPrinciples: [
      'Energy Management > Time Management',
      'Recovery is as important as Performance',
      'Ultradian Rhythms (90-120 minute cycles)',
      'Energy follows Attention',
      'Physical Energy is Foundation',
      'Sustainable Performance Mindset',
    ],
    recoveryMethods: [
      'Active Recovery (light movement)',
      'Passive Recovery (rest, meditation)',
      'Social Recovery (positive interactions)',
      'Creative Recovery (hobbies, play)',
      'Nature Recovery (outdoor time)',
      'Digital Detox Recovery',
    ],
    optimizationStrategies: [
      'Chronotype Alignment',
      'Energy Audit & Tracking',
      'Strategic Rest Scheduling',
      'Nutrition Timing',
      'Movement & Exercise Planning',
      'Stress Management Techniques',
    ],
    performanceMetrics: [
      {
        metric: 'Morning Energy Level',
        category: 'Physical Energy',
        measurement: '1-10 scale upon waking',
        frequency: 'Daily',
        interpretation: 'Indicates sleep quality và recovery',
      },
      {
        metric: 'Focus Duration',
        category: 'Mental Energy',
        measurement: 'Minutes of uninterrupted focus',
        frequency: 'Per work session',
        interpretation: 'Mental fatigue và attention capacity',
      },
      {
        metric: 'Mood Rating',
        category: 'Emotional Energy',
        measurement: '1-10 scale throughout day',
        frequency: '3x daily',
        interpretation: 'Emotional resilience và stress levels',
      },
      {
        metric: 'Motivation Level',
        category: 'Spiritual Energy',
        measurement: 'Connection to purpose/meaning',
        frequency: 'Weekly reflection',
        interpretation: 'Alignment với values và long-term vision',
      },
    ],
    exercises: [
      {
        title: 'Personal Energy Audit',
        description: 'Track năng lượng levels trong 1 tuần để identify patterns',
        difficulty: 'Cơ bản',
        materials: ['Energy tracking app/journal', 'Hourly reminder system'],
        procedure: [
          'Set up hourly check-ins for energy levels (1-10)',
          'Note activities before each measurement',
          'Track sleep, food, exercise, social interactions',
          'Record mood và focus quality',
          'Identify energy peaks và valleys',
          'Analyze patterns và correlations',
        ],
        expectedResults: 'Clear understanding của personal energy patterns',
        solution: 'Most people have 2-3 energy peaks per day, often 2-4 hours after waking và mid-afternoon.',
      },
      {
        title: 'Ultradian Rhythm Experiment',
        description: 'Optimize work sessions based on natural attention cycles',
        difficulty: 'Trung bình',
        materials: ['Timer', 'Task list', 'Performance tracker'],
        procedure: [
          'Work trong 90-minute focused blocks',
          '20-minute recovery breaks between blocks',
          'Track productivity và energy during each block',
          'Experiment với different break activities',
          'Note optimal times for different task types',
          'Design daily schedule around natural rhythms',
        ],
        expectedResults: 'Optimized work schedule aligned với natural energy cycles',
        solution:
          'Deep work during energy peaks, administrative tasks during valleys, active breaks for sustained energy.',
      },
      {
        title: 'Recovery Protocol Design',
        description: 'Create personalized recovery routines for different situations',
        difficulty: 'Trung bình',
        materials: ['Recovery activities list', 'Schedule template'],
        procedure: [
          'List activities that restore different types of energy',
          'Test recovery effectiveness of each activity',
          'Design micro-recoveries (5-15 minutes)',
          'Plan macro-recoveries (evenings, weekends)',
          'Create emergency recovery protocols',
          'Schedule recovery time như appointments',
        ],
        expectedResults: 'Comprehensive recovery toolkit for sustainable performance',
        solution:
          'Mix active/passive recovery, prioritize sleep, include social/creative elements, protect recovery time.',
      },
    ],
    realWorldApplications: [
      'Optimizing work performance và productivity',
      'Managing demanding study schedules',
      'Balancing multiple life responsibilities',
      'Preventing burnout trong high-stress roles',
      'Enhancing athletic performance',
    ],
    caseStudies: [
      {
        title: 'Corporate Energy Management Program',
        organization: 'Johnson & Johnson',
        problem: 'Employee burnout và declining performance',
        solution: 'Company-wide energy management training',
        impact: '20% increase in productivity, reduced sick days',
        innovations: ['Energy renewal rooms', 'Flexible work schedules', 'Recovery time policies', 'Wellness coaching'],
      },
      {
        title: 'Elite Athlete Recovery Protocols',
        organization: 'US Olympic Committee',
        problem: 'Optimizing training while preventing overtraining',
        solution: 'Systematic recovery monitoring và protocols',
        impact: 'Improved medal count, reduced injury rates',
        innovations: [
          'HRV monitoring',
          'Personalized recovery plans',
          'Sleep optimization',
          'Mental recovery techniques',
        ],
      },
    ],
    resources: [
      {
        title: "The Way We're Working Isn't Working",
        url: 'https://www.tonyschwartzbook.com',
        type: 'Book',
      },
      {
        title: 'Sleep Foundation',
        url: 'https://www.sleepfoundation.org',
        type: 'Research',
      },
      {
        title: 'HRV4Training',
        url: 'https://www.hrv4training.com',
        type: 'App',
      },
    ],
  },
  {
    id: 'cognitive-performance-optimization',
    title: 'Tối Ưu Hóa Hiệu Suất Nhận Thức',
    description:
      'Nâng cao khả năng tập trung, memory, và decision-making thông qua cognitive science và practical techniques.',
    duration: '150 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=LO1mTELoj6o', // Cognitive Performance
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop',
    objectives: [
      'Understand cognitive load theory và mental bandwidth',
      'Optimize memory formation và recall',
      'Enhance decision-making under pressure',
      'Build cognitive resilience và flexibility',
    ],
    prerequisites: ['Đã hoàn thành Energy Fundamentals', 'Basic understanding của brain function'],
    energyPrinciples: [
      'Cognitive Load Management',
      'Attention Residue Minimization',
      'System 1 vs System 2 Thinking',
      'Cognitive Flexibility Training',
      'Mental Model Optimization',
      'Decision Fatigue Prevention',
    ],
    recoveryMethods: [
      'Meditation và Mindfulness',
      'Cognitive Defragmentation',
      'Default Mode Network Activation',
      'Dual N-Back Training',
      'Chess/Strategic Games',
      'Language Learning',
    ],
    optimizationStrategies: [
      'Spaced Repetition Systems',
      'Interleaving Practice',
      'Deliberate Practice Principles',
      'Memory Palace Techniques',
      'Decision Trees & Frameworks',
      'Cognitive Bias Mitigation',
    ],
    performanceMetrics: [
      {
        metric: 'Working Memory Span',
        category: 'Memory Performance',
        measurement: 'N-back test scores',
        frequency: 'Bi-weekly',
        interpretation: 'Cognitive processing capacity',
      },
      {
        metric: 'Decision Speed vs Accuracy',
        category: 'Decision Making',
        measurement: 'Time to decision + accuracy rate',
        frequency: 'Weekly scenarios',
        interpretation: 'Cognitive efficiency under pressure',
      },
      {
        metric: 'Attention Switching Cost',
        category: 'Focus Quality',
        measurement: 'Performance drop after interruption',
        frequency: 'Task-based measurement',
        interpretation: 'Cognitive flexibility và resilience',
      },
    ],
    exercises: [
      {
        title: 'Cognitive Load Assessment',
        description: 'Measure cognitive load trong different activities',
        difficulty: 'Trung bình',
        materials: ['Complex tasks', 'Cognitive load questionnaire', 'Performance metrics'],
        procedure: [
          'Select complex cognitive task (coding, writing, analysis)',
          'Measure baseline performance',
          'Add cognitive load (noise, interruptions, time pressure)',
          'Measure performance degradation',
          'Test load reduction strategies',
          'Optimize environment for cognitive performance',
        ],
        expectedResults: 'Personalized cognitive optimization strategies',
        solution: 'Reduce extraneous cognitive load, chunk information, use external memory aids.',
      },
      {
        title: 'Memory System Building',
        description: 'Create personal memory systems using proven techniques',
        difficulty: 'Nâng cao',
        materials: ['Memory palace template', 'Spaced repetition app', 'Learning content'],
        procedure: [
          'Choose information to memorize (languages, facts, skills)',
          'Build memory palace for spatial encoding',
          'Create mnemonic devices và associations',
          'Implement spaced repetition schedule',
          'Test retention over time',
          'Refine techniques based on results',
        ],
        expectedResults: 'Robust long-term memory system',
        solution: 'Combine multiple encoding methods, use emotional associations, practice active recall.',
      },
      {
        title: 'Decision Framework Development',
        description: 'Build systematic approaches để improve decision quality',
        difficulty: 'Nâng cao',
        materials: ['Decision scenarios', 'Framework templates', 'Outcome tracking'],
        procedure: [
          'Identify recurring decision types trong your life',
          'Research decision-making frameworks (WRAP, 10-10-10, etc.)',
          'Adapt frameworks to your context',
          'Practice với low-stakes decisions',
          'Track decision outcomes over time',
          'Refine frameworks based on results',
        ],
        expectedResults: 'Personal decision-making system',
        solution:
          "Consider cognitive biases, use devil's advocate, seek diverse perspectives, set decision criteria upfront.",
      },
    ],
    realWorldApplications: [
      'Studying for exams và certifications',
      'Complex problem-solving tại work',
      'Learning new skills rapidly',
      'Managing information overload',
      'Improving decision quality under stress',
    ],
    caseStudies: [
      {
        title: 'Chess Grandmaster Training',
        organization: 'Magnus Carlsen Training Team',
        problem: 'Maintaining peak cognitive performance during long tournaments',
        solution: 'Systematic cognitive training và energy management',
        impact: 'World championship success, sustained excellence',
        innovations: [
          'Pattern recognition training',
          'Visualization techniques',
          'Stress inoculation',
          'Recovery protocols',
        ],
      },
      {
        title: 'Air Traffic Controller Cognitive Training',
        organization: 'FAA',
        problem: 'High cognitive load leading to errors',
        solution: 'Cognitive training program với simulation',
        impact: 'Reduced errors, improved safety margins',
        innovations: [
          'Cognitive load management',
          'Situation awareness training',
          'Stress resilience',
          'Team coordination',
        ],
      },
    ],
    resources: [
      {
        title: 'Peak: Secrets from the New Science of Expertise',
        url: 'https://www.amazon.com/dp/0544456238',
        type: 'Book',
      },
      {
        title: 'Lumosity Brain Training',
        url: 'https://www.lumosity.com',
        type: 'App',
      },
      {
        title: 'Center for Applied Rationality',
        url: 'https://www.rationality.org',
        type: 'Training',
      },
    ],
  },
  {
    id: 'stress-resilience-building',
    title: 'Xây Dựng Khả Năng Chống Chịu Stress',
    description: 'Phát triển resilience và antifragility để thành công trong môi trường áp lực cao và uncertainty.',
    duration: '135 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=GXy__kBVq1M', // Building Resilience
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
    objectives: [
      'Understand stress physiology và adaptive responses',
      'Build psychological resilience và emotional regulation',
      'Develop antifragility mindset',
      'Create stress inoculation protocols',
    ],
    prerequisites: ['Đã hoàn thành các lessons trước', 'Experience với stressful situations'],
    energyPrinciples: [
      'Hormesis (Beneficial Stress)',
      'Stress Inoculation Training',
      'Post-Traumatic Growth',
      'Emotional Granularity',
      'Cognitive Reappraisal',
      'Meaning-Making Framework',
    ],
    recoveryMethods: [
      'Breathwork & Respiratory Training',
      'Cold Exposure Therapy',
      'Heat Stress (Sauna) Protocols',
      'Meditation & Mindfulness',
      'Progressive Muscle Relaxation',
      'Social Support Networks',
    ],
    optimizationStrategies: [
      'Graded Stress Exposure',
      'Cognitive Restructuring',
      'Values-Based Decision Making',
      'Growth Mindset Development',
      'Support System Building',
      'Recovery Ritual Creation',
    ],
    performanceMetrics: [
      {
        metric: 'Heart Rate Variability',
        category: 'Physiological Resilience',
        measurement: 'HRV score từ wearable device',
        frequency: 'Daily morning measurement',
        interpretation: 'Autonomic nervous system balance',
      },
      {
        metric: 'Stress Recovery Time',
        category: 'Psychological Resilience',
        measurement: 'Time to return to baseline after stressor',
        frequency: 'After stressful events',
        interpretation: 'Emotional regulation capacity',
      },
      {
        metric: 'Challenge vs Threat Appraisal',
        category: 'Cognitive Resilience',
        measurement: 'Self-assessment of stress interpretation',
        frequency: 'Weekly reflection',
        interpretation: 'Mindset và stress framing',
      },
    ],
    exercises: [
      {
        title: 'Stress Inoculation Protocol',
        description: 'Gradual exposure để build stress tolerance',
        difficulty: 'Nâng cao',
        materials: ['Graduated stressor list', 'Recovery protocols', 'Progress tracking'],
        procedure: [
          'Identify types of stress you want to build resilience to',
          'Create graduated exposure ladder',
          'Start với low-level controllable stressors',
          'Practice coping strategies during exposure',
          'Gradually increase intensity/complexity',
          'Monitor recovery và adaptation',
        ],
        expectedResults: 'Increased stress tolerance và faster recovery',
        solution: 'Start small, ensure controllability, practice coping skills, celebrate adaptation progress.',
      },
      {
        title: 'Cognitive Reframing Workshop',
        description: 'Transform stress-inducing thoughts into growth opportunities',
        difficulty: 'Trung bình',
        materials: ['Thought record templates', 'Reframing techniques guide'],
        procedure: [
          'Identify recurring stress-inducing thoughts',
          'Analyze thought patterns for cognitive distortions',
          'Practice alternative interpretations',
          'Use "What would this look like if it were easy?" questioning',
          'Find growth opportunities trong challenges',
          'Build reframing into daily practice',
        ],
        expectedResults: 'Improved stress appraisal và emotional regulation',
        solution:
          'Challenge catastrophic thinking, look for evidence, consider alternative perspectives, focus on controllables.',
      },
      {
        title: 'Antifragile System Design',
        description: 'Create personal systems that benefit from stress/volatility',
        difficulty: 'Nâng cao',
        materials: ['System mapping tools', 'Antifragile principles guide'],
        procedure: [
          'Map personal systems (career, health, relationships, finances)',
          'Identify fragilities và dependencies',
          'Add redundancies và optionalities',
          'Build systems that improve under stress',
          'Test với controlled stressors',
          'Iterate based on results',
        ],
        expectedResults: 'Robust personal ecosystem that thrives under pressure',
        solution:
          'Diversify inputs, build slack into systems, create upside optionality, embrace controlled volatility.',
      },
    ],
    realWorldApplications: [
      'High-pressure work environments',
      'Entrepreneurship và business challenges',
      'Athletic performance under pressure',
      'Academic exams và presentations',
      'Relationship conflict resolution',
    ],
    caseStudies: [
      {
        title: 'Navy SEAL Training Evolution',
        organization: 'US Navy SEALs',
        problem: 'Selection success rates và performance under extreme stress',
        solution: 'Science-based stress inoculation training',
        impact: 'Higher selection rates, better battlefield performance',
        innovations: ['Graduated stress exposure', 'Mental skills training', 'Team resilience', 'Recovery protocols'],
      },
      {
        title: 'Startup Founder Resilience Program',
        organization: 'Entrepreneur First',
        problem: 'High founder burnout và failure rates',
        solution: 'Resilience training integrated into accelerator',
        impact: 'Lower burnout, higher persistence rates',
        innovations: ['Peer support networks', 'Mindset training', 'Stress management', 'Meaning-making frameworks'],
      },
    ],
    resources: [
      {
        title: 'Antifragile by Nassim Taleb',
        url: 'https://www.amazon.com/dp/0812979680',
        type: 'Book',
      },
      {
        title: 'Wim Hof Method',
        url: 'https://www.wimhofmethod.com',
        type: 'Training',
      },
      {
        title: 'American Psychological Association - Resilience',
        url: 'https://www.apa.org/topics/resilience',
        type: 'Research',
      },
    ],
  },
];

export default energyManagementLessons;
