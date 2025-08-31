import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface LegalTechLesson extends BaseLessonData {
  legalArea: 'contract-management' | 'legal-research' | 'case-management' | 'compliance' | 'legal-automation' | 'intellectual-property';
  vietnameseLegalSystem: string[];
  legalTechTools: string[];
  complianceRequirements: string[];
  targetLegalProfessionals: string[];
}

export const legalTechLessons: LegalTechLesson[] = [
  {
    id: 'legal-document-automation',
    title: 'Legal Document Automation & Contract Management',
    description: 'Tự động hóa quy trình tạo tài liệu pháp lý, quản lý hợp đồng và contract lifecycle management trong hệ thống pháp luật Việt Nam.',
    duration: '260 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=ZXT6W8Nfs98', // Default - needs replacement
    imageUrl: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1200&h=600&fit=crop',
    legalArea: 'contract-management',
    objectives: [
      'Hiểu contract lifecycle management và automation workflows',
      'Sử dụng legal tech tools để tạo tài liệu pháp lý chuẩn',
      'Implement contract review processes với AI assistance',
      'Manage legal document repositories và version control',
      'Ensure compliance với Vietnamese legal requirements',
      'Create templates cho common Vietnamese legal documents'
    ],
    prerequisites: [
      'Basic understanding của Vietnamese legal system',
      'Familiarity với document management concepts',
      'Interest trong legal process optimization'
    ],
    vietnameseLegalSystem: [
      'Vietnamese Civil Code 2015 contract provisions',
      'Commercial Law 2005 và amendments',
      'Investment Law 2020 compliance requirements',
      'Labor Code 2019 employment contract standards',
      'Law on Enterprises 2020 corporate documentation'
    ],
    legalTechTools: [
      'ContractPodAi for contract management',
      'LegalZoom document automation',
      'Kira Systems for contract analysis',
      'Microsoft Word với legal templates',
      'Google Workspace for collaboration'
    ],
    complianceRequirements: [
      'Vietnamese data protection regulations',
      'Financial reporting compliance standards',
      'Labor law documentation requirements',
      'Tax compliance document management',
      'Corporate governance documentation'
    ],
    targetLegalProfessionals: [
      'Corporate lawyers transitioning to legal tech',
      'Law firm administrators và paralegals',
      'In-house legal counsel',
      'Legal consultants serving Vietnamese businesses',
      'Legal tech entrepreneurs'
    ],
    exercises: [
      {
        title: 'Vietnamese Employment Contract Automation System',
        description: 'Build comprehensive system để generate standardized Vietnamese employment contracts',
        difficulty: 'Nâng cao',
        materials: ['Document automation software', 'Vietnamese labor law resources', 'Contract templates'],
        procedure: [
          'Research Vietnamese Labor Code 2019 requirements',
          'Identify common contract variations và clauses',
          'Create master template với variable fields',
          'Build user interface cho contract generation',
          'Implement validation cho legal compliance',
          'Add electronic signature integration',
          'Create audit trail system cho contract changes',
          'Test với various employment scenarios'
        ],
        expectedResults: 'Automated contract generation system reducing manual work by 80%',
        solution: 'Complete legal document automation platform với Vietnamese law compliance'
      },
      {
        title: 'Contract Analysis Dashboard',
        description: 'Develop AI-powered dashboard để analyze contract portfolios',
        difficulty: 'Nâng cao',
        materials: ['Analytics platforms', 'Contract databases', 'Visualization tools'],
        procedure: [
          'Collect sample Vietnamese commercial contracts',
          'Extract key terms và obligations using AI',
          'Create risk assessment scoring system',
          'Build visualization dashboard cho contract insights',
          'Implement alert system cho expiring contracts',
          'Add compliance checking automation'
        ],
        expectedResults: 'Contract intelligence platform providing actionable insights'
      }
    ],
    realWorldApplications: [
      'Corporate legal departments automation',
      'Law firm document management systems',
      'SME contract standardization',
      'Real estate transaction documentation',
      'Employment contract management for HR departments'
    ],
    caseStudies: [
      {
        title: 'VinGroup Legal Tech Transformation',
        organization: 'VinGroup Corporation',
        problem: 'Manual contract management across multiple subsidiaries',
        solution: 'Centralized contract automation platform với Vietnamese legal compliance',
        impact: '60% reduction in contract processing time, 95% compliance rate',
        innovations: ['AI contract review', 'Automated approval workflows', 'Risk scoring algorithms']
      }
    ],
    resources: [
      {
        title: 'Vietnamese Legal Framework Documentation',
        url: 'https://thukyluat.vn/',
        type: 'Documentation'
      },
      {
        title: 'Legal Tech Implementation Guide',
        url: 'https://legaltechnology.com/',
        type: 'Guide'
      }
    ]
  },
  {
    id: 'legal-research-ai-tools',
    title: 'AI-Powered Legal Research & Case Analysis',
    description: 'Leverage AI và machine learning cho legal research, case law analysis và precedent identification trong Vietnamese jurisprudence.',
    duration: '280 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=39zbC_PrNQs', // Default - needs replacement
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=600&fit=crop',
    legalArea: 'legal-research',
    objectives: [
      'Master AI-powered legal research methodologies',
      'Analyze Vietnamese case law với machine learning tools',
      'Build legal knowledge databases',
      'Implement predictive analytics cho legal outcomes',
      'Create legal research workflows',
      'Understand limitations và ethics of AI in legal practice'
    ],
    prerequisites: [
      'Strong legal research background',
      'Understanding của Vietnamese court system',
      'Basic familiarity với AI concepts'
    ],
    vietnameseLegalSystem: [
      'Supreme People\'s Court jurisprudence database',
      'People\'s Court case law repositories',
      'Administrative court decision analysis',
      'Commercial arbitration precedents',
      'Constitutional Court decision tracking'
    ],
    legalTechTools: [
      'Westlaw Edge với AI features',
      'Lexis+ AI research platform',
      'ROSS Intelligence legal search',
      'Casetext CARA brief analysis',
      'Custom legal research AI tools'
    ],
    complianceRequirements: [
      'Legal professional ethics regarding AI use',
      'Client confidentiality in AI-powered research',
      'Accuracy standards for AI-generated legal analysis',
      'Documentation requirements for AI-assisted research'
    ],
    targetLegalProfessionals: [
      'Legal researchers và law librarians',
      'Litigation attorneys needing case analysis',
      'Academic legal researchers',
      'Judges needing precedent research',
      'Legal tech developers'
    ],
    exercises: [
      {
        title: 'Vietnamese Commercial Law Precedent Analysis',
        description: 'Build AI system để analyze trends trong Vietnamese commercial litigation',
        difficulty: 'Nâng cao',
        materials: ['Vietnamese court databases', 'NLP libraries', 'Data visualization tools'],
        procedure: [
          'Collect Vietnamese commercial court decisions (5+ years)',
          'Clean và structure legal text data',
          'Apply NLP techniques để extract legal concepts',
          'Identify patterns trong judicial decision-making',
          'Create predictive models cho case outcomes',
          'Build interactive dashboard với trend analysis',
          'Validate predictions với recent case outcomes'
        ],
        expectedResults: 'Predictive analytics platform với 75%+ accuracy in outcome prediction',
        solution: 'AI-powered legal research platform specific to Vietnamese commercial law'
      }
    ],
    realWorldApplications: [
      'Law firm research departments',
      'Corporate legal strategy development',
      'Academic legal research projects',
      'Judicial decision support systems',
      'Legal publishing và knowledge management'
    ],
    caseStudies: [
      {
        title: 'Baker McKenzie Legal Research AI',
        organization: 'Baker McKenzie Vietnam',
        problem: 'Time-intensive manual legal research across multiple jurisdictions',
        solution: 'AI-powered research platform combining international và Vietnamese law',
        impact: '50% reduction in research time, improved case strategy development',
        innovations: ['Multi-jurisdictional analysis', 'Automated brief generation', 'Risk assessment scoring']
      }
    ]
  },
  {
    id: 'legal-case-management-systems',
    title: 'Legal Case Management & Practice Management Systems',
    description: 'Comprehensive case management, client relationship management, và practice optimization cho Vietnamese law firms và legal departments.',
    duration: '240 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=7bB8zX_2cIE', // Default - needs replacement
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop',
    legalArea: 'case-management',
    objectives: [
      'Implement comprehensive case management workflows',
      'Optimize client relationship management trong legal practice',
      'Manage legal calendaring và deadline tracking',
      'Create efficient billing và time tracking systems',
      'Build client portal và communication systems',
      'Analyze practice performance với data insights'
    ],
    prerequisites: [
      'Law practice experience',
      'Understanding của legal practice operations',
      'Basic project management knowledge'
    ],
    vietnameseLegalSystem: [
      'Vietnamese court filing deadlines',
      'Legal procedure timelines và requirements',
      'Client confidentiality requirements',
      'Legal billing regulations và standards',
      'Professional responsibility compliance'
    ],
    legalTechTools: [
      'Clio practice management platform',
      'MyCase case management system',
      'PracticePanther legal software',
      'LexisNexis Time Matters',
      'Custom case management solutions'
    ],
    complianceRequirements: [
      'Client data protection requirements',
      'Legal professional ethics compliance',
      'Financial record keeping standards',
      'Document retention policies',
      'Conflict of interest management'
    ],
    targetLegalProfessionals: [
      'Law firm partners và administrators',
      'Solo practitioners optimizing operations',
      'Legal operations professionals',
      'IT managers in legal organizations',
      'Legal practice consultants'
    ],
    exercises: [
      {
        title: 'Vietnamese Law Firm Practice Management System',
        description: 'Design comprehensive practice management system cho Vietnamese law firm',
        difficulty: 'Nâng cao',
        materials: ['Practice management software', 'Client database templates', 'Workflow automation tools'],
        procedure: [
          'Analyze current firm operations và pain points',
          'Design case intake và client onboarding workflow',
          'Implement matter management với deadlines tracking',
          'Create billing automation với Vietnamese requirements',
          'Build client communication portal',
          'Add document management với security controls',
          'Implement performance analytics dashboard',
          'Train team members on new system usage'
        ],
        expectedResults: 'Complete practice management transformation với 40% efficiency improvement',
        solution: 'Integrated legal practice platform tailored to Vietnamese legal market'
      }
    ],
    realWorldApplications: [
      'Law firm operations optimization',
      'Corporate legal department management',
      'Solo practitioner practice enhancement',
      'Legal services delivery improvement',
      'Client experience enhancement'
    ]
  },
  {
    id: 'regulatory-compliance-technology',
    title: 'Regulatory Compliance & Risk Management Technology',
    description: 'Technology solutions cho regulatory compliance, risk assessment, và automated compliance monitoring trong Vietnamese business environment.',
    duration: '220 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=Sc7qx2lxGYM', // Default - needs replacement
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop',
    legalArea: 'compliance',
    objectives: [
      'Build automated compliance monitoring systems',
      'Implement risk assessment và management workflows',
      'Create regulatory reporting automation',
      'Understand Vietnamese regulatory landscape',
      'Design compliance training và tracking systems',
      'Develop regulatory change management processes'
    ],
    prerequisites: [
      'Understanding của regulatory compliance concepts',
      'Vietnamese business law knowledge',
      'Risk management fundamentals'
    ],
    vietnameseLegalSystem: [
      'Corporate governance regulations',
      'Financial services compliance requirements',
      'Data protection và cybersecurity laws',
      'Environmental compliance standards',
      'Labor law compliance monitoring'
    ],
    legalTechTools: [
      'Thomson Reuters compliance platforms',
      'MetricStream GRC platform',
      'ServiceNow GRC solutions',
      'Custom compliance automation tools',
      'Regulatory intelligence platforms'
    ],
    complianceRequirements: [
      'Automated compliance reporting standards',
      'Risk assessment documentation requirements',
      'Audit trail maintenance',
      'Regulatory change tracking',
      'Compliance training verification'
    ],
    targetLegalProfessionals: [
      'Compliance officers và managers',
      'Risk management professionals',
      'Corporate legal counsel',
      'Regulatory affairs specialists',
      'Internal audit professionals'
    ],
    exercises: [
      {
        title: 'Vietnamese Banking Compliance Monitoring System',
        description: 'Create automated compliance monitoring system cho Vietnamese banking regulations',
        difficulty: 'Nâng cao',
        materials: ['Compliance frameworks', 'Banking regulations database', 'Monitoring tools'],
        procedure: [
          'Map Vietnamese banking compliance requirements',
          'Design automated monitoring workflows',
          'Create risk scoring algorithms',
          'Build regulatory reporting automation',
          'Implement alert systems cho compliance violations',
          'Add regulatory change tracking',
          'Create compliance dashboard với KPIs',
          'Test system với regulatory scenarios'
        ],
        expectedResults: 'Comprehensive compliance platform reducing manual monitoring by 70%',
        solution: 'Automated regulatory compliance system với Vietnamese banking focus'
      }
    ],
    realWorldApplications: [
      'Financial services compliance automation',
      'Corporate compliance management',
      'Regulatory reporting automation',
      'Risk management system implementation',
      'Audit compliance tracking'
    ]
  },
  {
    id: 'intellectual-property-management',
    title: 'Intellectual Property Management & Protection Technology',
    description: 'Digital tools và strategies cho IP portfolio management, trademark monitoring, và patent analysis trong Vietnamese IP ecosystem.',
    duration: '200 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=UqZJPuyK9VY', // Default - needs replacement
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=600&fit=crop',
    legalArea: 'intellectual-property',
    objectives: [
      'Understand Vietnamese IP registration processes',
      'Implement IP portfolio management systems',
      'Create trademark monitoring và enforcement workflows',
      'Analyze patent landscapes với technology tools',
      'Build IP valuation và commercialization strategies',
      'Manage IP litigation support technology'
    ],
    prerequisites: [
      'Basic intellectual property knowledge',
      'Understanding của Vietnamese IP law',
      'Interest trong technology commercialization'
    ],
    vietnameseLegalSystem: [
      'Vietnamese IP Law 2005 và amendments',
      'National Office of Intellectual Property (NOIP) procedures',
      'Trademark registration processes',
      'Patent filing requirements',
      'Copyright protection mechanisms'
    ],
    legalTechTools: [
      'PatSnap IP intelligence platform',
      'Clarivate Innovation Suite',
      'Thomson Reuters IP solutions',
      'Anaqua IP management system',
      'Custom IP tracking tools'
    ],
    complianceRequirements: [
      'IP filing deadline management',
      'Prior art search documentation',
      'Trademark watch service requirements',
      'IP portfolio valuation standards',
      'Cross-border IP protection compliance'
    ],
    targetLegalProfessionals: [
      'IP attorneys và patent agents',
      'Corporate IP managers',
      'R&D professionals managing IP',
      'Technology transfer specialists',
      'IP licensing professionals'
    ],
    exercises: [
      {
        title: 'Vietnamese Trademark Monitoring System',
        description: 'Build comprehensive trademark watch và enforcement system',
        difficulty: 'Trung bình',
        materials: ['NOIP databases', 'Trademark monitoring tools', 'Alert systems'],
        procedure: [
          'Connect to Vietnamese trademark databases',
          'Create automated search algorithms',
          'Build similarity detection systems',
          'Implement alert workflows cho potential conflicts',
          'Add enforcement action tracking',
          'Create IP portfolio dashboard',
          'Test với real trademark portfolios'
        ],
        expectedResults: 'Automated trademark protection system với comprehensive monitoring',
        solution: 'IP protection platform specifically designed cho Vietnamese market'
      }
    ],
    realWorldApplications: [
      'Corporate IP portfolio management',
      'Law firm IP practice enhancement',
      'Technology company IP strategy',
      'Patent prosecution support',
      'IP licensing và commercialization'
    ],
    caseStudies: [
      {
        title: 'Vinamilk IP Portfolio Management',
        organization: 'Vietnam Dairy Products Joint Stock Company',
        problem: 'Managing complex IP portfolio across multiple countries',
        solution: 'Centralized IP management platform với Vietnamese và international coverage',
        impact: 'Streamlined IP processes, 30% reduction in filing costs',
        innovations: ['Automated filing workflows', 'IP valuation tools', 'Portfolio analytics']
      }
    ]
  }
];

export default legalTechLessons;