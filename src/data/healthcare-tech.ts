import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface HealthcareTechLesson extends BaseLessonData {
  healthcareCategory: 'telemedicine' | 'data-analytics' | 'medical-devices' | 'entrepreneurship' | 'mental-health';
  regulatoryCompliance: string[];
  vietnameseHealthcareContext: string[];
  techProficiencyLevel: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
  targetAudience: string[];
}

export const healthcareTechLessons: HealthcareTechLesson[] = [
  {
    id: 'telemedicine-digital-health',
    title: 'Telemedicine & Sức Khỏe Số',
    description: 'Khám phá công nghệ y tế từ xa và hệ thống sức khỏe số, từ platform setup đến patient care delivery trong bối cảnh Việt Nam.',
    duration: '180 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=YQyLh-0E2-g', // The Future of Telemedicine
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop',
    healthcareCategory: 'telemedicine',
    techProficiencyLevel: 'Cơ bản',
    objectives: [
      'Hiểu ecosystem của telemedicine trong hệ thống y tế Việt Nam',
      'Setup và sử dụng các platform telehealth phổ biến',
      'Đảm bảo patient privacy và data security',
      'Integrate telemedicine vào clinical workflow',
      'Measure outcomes và ROI của telemedicine programs'
    ],
    prerequisites: [
      'Kiến thức y tế cơ bản hoặc kinh nghiệm healthcare',
      'Computer literacy và internet skills'
    ],
    regulatoryCompliance: [
      'Thông tư 54/2017/TT-BYT về telemedicine',
      'Luật Cybersecurity 2018 cho patient data',
      'ISO 27001 cho healthcare information security',
      'GDPR compliance cho international patients'
    ],
    vietnameseHealthcareContext: [
      'Rural healthcare access challenges',
      'Public vs private healthcare system integration',
      'Insurance coverage cho telemedicine services',
      'Cultural attitudes toward remote healthcare',
      'Language barriers và multilingual support'
    ],
    targetAudience: [
      'Healthcare professionals transitioning to digital',
      'Healthcare administrators và managers',
      'IT professionals trong healthcare organizations',
      'Entrepreneurs building healthtech solutions'
    ],
    exercises: [
      {
        title: 'Telemedicine Platform Evaluation & Setup',
        description: 'So sánh và setup một telehealth platform cho phòng khám nhỏ',
        difficulty: 'Trung bình',
        materials: ['Access to telehealth platforms', 'HIPAA compliance checklist', 'Cost-benefit analysis template'],
        procedure: [
          'Research 5 telehealth platforms popular in Vietnam',
          'Compare features, pricing, và compliance standards',
          'Setup demo account và test user experience',
          'Create patient onboarding workflow',
          'Develop ROI projection cho 12-month period',
          'Present recommendations với security assessment'
        ],
        expectedResults: 'Complete platform recommendation với implementation roadmap và compliance checklist',
        solution: 'Platform selection dựa trên ease of use, Vietnamese language support, cost-effectiveness, và regulatory compliance'
      },
      {
        title: 'Remote Patient Monitoring System Design',
        description: 'Thiết kế hệ thống monitoring cho chronic disease management',
        difficulty: 'Nâng cao',
        materials: ['IoT health devices', 'Data dashboard tools', 'Alert system framework'],
        procedure: [
          'Identify target chronic conditions (diabetes, hypertension)',
          'Select appropriate monitoring devices và sensors',
          'Design data collection và analysis workflow',
          'Create alert thresholds và escalation protocols',
          'Build patient engagement và compliance strategies',
          'Test system với simulated patient data'
        ],
        expectedResults: 'Functional RPM system prototype với patient engagement rates >70%'
      }
    ],
    realWorldApplications: [
      'Rural healthcare delivery trong remote areas',
      'Chronic disease management programs',
      'Specialist consultations across provinces',
      'Emergency response và triage systems',
      'Mental health support services'
    ],
    caseStudies: [
      {
        title: 'Vinmec - Telemedicine Platform Rollout',
        organization: 'Vinmec International Hospital',
        problem: 'Need to provide healthcare access during COVID-19 lockdowns',
        solution: 'Deployed comprehensive telemedicine platform với multilingual support',
        impact: '50,000+ remote consultations, 95% patient satisfaction, 30% cost reduction',
        innovations: ['AI-powered symptom checker', 'Integrated prescription delivery', 'Insurance claim automation']
      }
    ],
    resources: [
      {
        title: 'Vietnam Telemedicine Regulations Guide',
        url: 'https://moh.gov.vn/web/guest/tin-tong-hop',
        type: 'Documentation'
      },
      {
        title: 'Telehealth Implementation Toolkit',
        url: 'https://www.hrsa.gov/rural-health/telehealth/toolkit',
        type: 'Toolkit'
      }
    ]
  },
  {
    id: 'health-data-analytics-management',
    title: 'Phân Tích & Quản Lý Dữ Liệu Y Tế',
    description: 'Làm chủ việc thu thập, xử lý và phân tích big data trong healthcare để cải thiện patient outcomes và operational efficiency.',
    duration: '200 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=rNjF_T92ZlI', // AI in Healthcare: Revolutionary Applications
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    healthcareCategory: 'data-analytics',
    techProficiencyLevel: 'Trung bình',
    objectives: [
      'Hiểu healthcare data landscape và types of medical data',
      'Implement data governance và quality management',
      'Sử dụng analytics tools để derive actionable insights',
      'Create predictive models cho population health',
      'Ensure HIPAA/GDPR compliance trong data handling'
    ],
    prerequisites: [
      'Basic statistics và data analysis skills',
      'Familiarity với Excel và database concepts',
      'Understanding của healthcare processes'
    ],
    regulatoryCompliance: [
      'Personal Data Protection Decree 15/2020/ND-CP',
      'Medical data confidentiality regulations',
      'International standards for health informatics',
      'Audit trail requirements cho patient data'
    ],
    vietnameseHealthcareContext: [
      'Electronic health record adoption challenges',
      'Interoperability issues between hospital systems',
      'Data sharing between public và private sectors',
      'Population health analytics cho Vietnamese demographics'
    ],
    targetAudience: [
      'Healthcare data analysts và researchers',
      'Hospital IT administrators',
      'Public health officials',
      'Biotech và pharma researchers'
    ],
    exercises: [
      {
        title: 'Hospital Performance Dashboard Development',
        description: 'Xây dựng real-time dashboard để monitor key hospital metrics',
        difficulty: 'Nâng cao',
        materials: ['Power BI/Tableau', 'Sample hospital data', 'KPI framework'],
        procedure: [
          'Define critical healthcare KPIs (readmission rates, length of stay, etc.)',
          'Connect to multiple data sources (EMR, billing, scheduling)',
          'Create interactive visualizations với drill-down capability',
          'Implement automated alerts cho abnormal patterns',
          'Design executive summary views cho C-suite',
          'Test dashboard với real hospital scenarios'
        ],
        expectedResults: 'Live dashboard enabling data-driven decision making với <1 hour data latency'
      }
    ],
    realWorldApplications: [
      'Population health management programs',
      'Clinical decision support systems',
      'Healthcare quality improvement initiatives',
      'Epidemiological research và disease surveillance',
      'Pharmaceutical research và drug discovery'
    ],
    caseStudies: [
      {
        title: 'FV Hospital - AI-Powered Clinical Analytics',
        organization: 'Franco-Vietnamese Hospital',
        problem: 'Need to reduce hospital readmissions và improve patient outcomes',
        solution: 'Implemented ML models để predict high-risk patients',
        impact: '25% reduction in readmissions, $2M annual savings',
        innovations: ['Real-time risk scoring', 'Automated care coordination', 'Predictive staffing models']
      }
    ]
  },
  {
    id: 'medical-devices-iot-applications',
    title: 'Thiết Bị Y Tế & Ứng Dụng IoT',
    description: 'Explore cutting-edge medical devices và IoT applications trong healthcare, từ wearables đến smart hospital infrastructure.',
    duration: '160 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=NaXtHH4l7bk', // IoT in Healthcare: Smart Medical Devices
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop',
    healthcareCategory: 'medical-devices',
    techProficiencyLevel: 'Trung bình',
    objectives: [
      'Understand IoT ecosystem trong healthcare settings',
      'Evaluate và select appropriate medical IoT devices',
      'Design secure và scalable IoT architecture',
      'Implement data integration từ multiple device sources',
      'Ensure regulatory compliance cho medical devices'
    ],
    prerequisites: [
      'Basic understanding của IoT concepts',
      'Knowledge của healthcare workflows',
      'Technical aptitude với hardware/software integration'
    ],
    regulatoryCompliance: [
      'Medical device registration requirements in Vietnam',
      'ISO 13485 for medical device quality',
      'IEC 62304 for medical device software',
      'Cybersecurity requirements cho connected devices'
    ],
    vietnameseHealthcareContext: [
      'Import regulations cho medical devices',
      'Local manufacturing capabilities',
      'Healthcare infrastructure readiness',
      'Training requirements cho medical staff'
    ],
    targetAudience: [
      'Biomedical engineers',
      'Healthcare IT specialists',
      'Medical device entrepreneurs',
      'Clinical engineering professionals'
    ],
    exercises: [
      {
        title: 'Smart Hospital Room IoT Integration',
        description: 'Design comprehensive IoT solution cho modern hospital room',
        difficulty: 'Nâng cao',
        materials: ['IoT sensors catalog', 'Network architecture tools', 'Security assessment framework'],
        procedure: [
          'Map out all monitoring requirements (patient vitals, environment, equipment)',
          'Select appropriate sensors và communication protocols',
          'Design network topology với redundancy',
          'Implement data security và privacy controls',
          'Create integration plan với existing hospital systems',
          'Develop maintenance và support procedures'
        ],
        expectedResults: 'Complete IoT architecture với 99.9% uptime target và full HIPAA compliance'
      }
    ],
    realWorldApplications: [
      'Remote patient monitoring systems',
      'Smart hospital infrastructure management',
      'Wearable health tracking applications',
      'Medical equipment predictive maintenance',
      'Emergency response automation'
    ]
  },
  {
    id: 'healthtech-entrepreneurship',
    title: 'Khởi Nghiệp Công Nghệ Y Tế',
    description: 'Navigate the unique challenges của healthcare entrepreneurship, từ regulatory compliance đến funding và scaling trong Vietnamese market.',
    duration: '220 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=vMKNUylmanQ', // Starting a HealthTech Company
    imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&h=600&fit=crop',
    healthcareCategory: 'entrepreneurship',
    techProficiencyLevel: 'Nâng cao',
    objectives: [
      'Understand healthcare startup ecosystem in Vietnam',
      'Navigate regulatory pathways cho health tech products',
      'Develop sustainable business models trong healthcare',
      'Secure funding từ healthcare-focused investors',
      'Scale operations while maintaining compliance'
    ],
    prerequisites: [
      'Healthcare industry experience',
      'Basic business và entrepreneurship knowledge',
      'Understanding của regulatory environment'
    ],
    regulatoryCompliance: [
      'Business license requirements cho healthcare services',
      'Investment regulations cho foreign healthcare ventures',
      'Clinical trial requirements for medical products',
      'Data localization requirements'
    ],
    vietnameseHealthcareContext: [
      'Public-private partnership opportunities',
      'Healthcare investment landscape',
      'Distribution channels và market access',
      'Local manufacturing incentives'
    ],
    targetAudience: [
      'Healthcare entrepreneurs',
      'Medical professionals với business interests',
      'Investors trong healthcare sector',
      'Corporate innovation teams'
    ],
    exercises: [
      {
        title: 'HealthTech Startup Business Plan Development',
        description: 'Create comprehensive business plan cho innovative healthcare solution',
        difficulty: 'Nâng cao',
        materials: ['Business plan template', 'Market research tools', 'Financial modeling software'],
        procedure: [
          'Identify specific healthcare problem và target market',
          'Conduct competitive analysis và market sizing',
          'Develop solution architecture và technical specifications',
          'Create regulatory compliance roadmap',
          'Build financial projections với funding requirements',
          'Prepare investor pitch deck'
        ],
        expectedResults: 'Investment-ready business plan với clear path to profitability'
      }
    ],
    realWorldApplications: [
      'Digital therapeutics development',
      'Healthcare marketplace platforms',
      'AI-powered diagnostic tools',
      'Healthcare supply chain optimization',
      'Patient engagement technologies'
    ],
    caseStudies: [
      {
        title: 'Docosan - Healthcare Marketplace Success',
        organization: 'Docosan Vietnam',
        problem: 'Connecting patients với quality healthcare providers',
        solution: 'Built comprehensive healthcare marketplace với telemedicine',
        impact: '1M+ users, partnerships với 500+ clinics nationwide',
        innovations: ['AI symptom checker', 'Integrated insurance claims', 'Multi-language support']
      }
    ]
  },
  {
    id: 'mental-health-technology',
    title: 'Công Nghệ Sức Khỏe Tâm Thần',
    description: 'Explore digital mental health solutions, từ therapy apps đến AI-powered mental health assessment, với cultural sensitivity cho Vietnamese context.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=IlU-zDU6aQ0', // Digital Mental Health Solutions
    imageUrl: 'https://images.unsplash.com/photo-1607619662634-3ac55ec2d0a9?w=1200&h=600&fit=crop',
    healthcareCategory: 'mental-health',
    techProficiencyLevel: 'Trung bình',
    objectives: [
      'Understand digital mental health landscape',
      'Design culturally sensitive mental health interventions',
      'Implement evidence-based digital therapeutic approaches',
      'Ensure privacy và safety trong mental health apps',
      'Measure effectiveness của digital mental health interventions'
    ],
    prerequisites: [
      'Basic psychology hoặc mental health knowledge',
      'Understanding của digital health principles',
      'Cultural awareness của Vietnamese mental health stigma'
    ],
    regulatoryCompliance: [
      'Mental health service licensing requirements',
      'Professional liability cho digital mental health',
      'Patient safety protocols cho crisis intervention',
      'Data protection for sensitive mental health data'
    ],
    vietnameseHealthcareContext: [
      'Mental health stigma và cultural barriers',
      'Limited mental health professional availability',
      'Family-centered approach to mental health care',
      'Integration với traditional healing practices'
    ],
    targetAudience: [
      'Mental health professionals',
      'Digital health product developers',
      'Healthcare administrators',
      'Wellness program coordinators'
    ],
    exercises: [
      {
        title: 'Mental Health App UX Design',
        description: 'Design user experience cho mental wellness app targeting Vietnamese users',
        difficulty: 'Trung bình',
        materials: ['UX design tools', 'Cultural research data', 'Mental health assessment frameworks'],
        procedure: [
          'Research Vietnamese attitudes toward mental health technology',
          'Design culturally appropriate user interfaces',
          'Integrate evidence-based therapeutic techniques',
          'Implement crisis intervention protocols',
          'Test với focus groups từ target demographics',
          'Iterate design based on user feedback'
        ],
        expectedResults: 'Mental health app prototype với high user engagement và cultural acceptance'
      }
    ],
    realWorldApplications: [
      'Employee wellness programs',
      'School-based mental health screening',
      'Crisis intervention hotline support',
      'Therapy augmentation tools',
      'Community mental health outreach'
    ],
    caseStudies: [
      {
        title: 'Mindful - Vietnam Mental Health Platform',
        organization: 'Mindful Vietnam',
        problem: 'Limited access to mental health services in urban areas',
        solution: 'Digital platform connecting users với licensed therapists',
        impact: '10,000+ users served, 85% reported improvement in symptoms',
        innovations: ['Vietnamese-language CBT modules', 'Family therapy integration', 'Cultural competency training']
      }
    ]
  }
];

export default healthcareTechLessons;