export interface VietnameseHealthcareLesson {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  duration: string;
  objectives: string[];
  prerequisites: string[];
  exercises: Exercise[];
  realWorldApplications: string[];
  videoUrl: string;
  imageUrl?: string;
  medicalField: string;
  technologies: string[];
  resources: Resource[];
  caseStudies: CaseStudy[];
}

interface Exercise {
  title: string;
  description: string;
  difficulty: string;
  solution: string;
  requirements: string[];
  procedure: string[];
  expectedResults: string;
}

interface Resource {
  title: string;
  url: string;
  type: 'hospital' | 'health-ministry' | 'research' | 'telemedicine' | 'healthtech';
  description: string;
}

interface CaseStudy {
  title: string;
  organization: string;
  problem: string;
  solution: string;
  impact: string;
  innovations: string[];
}

export const vietnameseHealthcareLessons: VietnameseHealthcareLesson[] = [
  {
    id: 'digital-health-vietnam',
    title: 'Bài 1: Digital Health Infrastructure cho Việt Nam',
    description:
      'Phát triển hệ thống y tế số phù hợp với infrastructure và regulations của Việt Nam. Học Electronic Health Records, telemedicine platforms và health data management.',
    videoUrl: 'https://www.youtube.com/watch?v=FscwOyubmmc',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop',
    difficulty: 'Trung bình',
    duration: '160 phút',
    medicalField: 'Digital Health Infrastructure',
    technologies: ['Electronic Health Records', 'Telemedicine platforms', 'Health APIs', 'Data security'],
    objectives: [
      'Design comprehensive digital health systems cho Vietnamese healthcare',
      'Implement secure Electronic Health Record platforms',
      'Create telemedicine solutions cho rural areas',
      'Build health data analytics dashboards cho hospitals',
    ],
    prerequisites: [
      'Understanding of Vietnamese healthcare system',
      'Basic knowledge of medical terminology',
      'Web development hoặc mobile development experience',
    ],
    exercises: [
      {
        title: 'Hospital Management System',
        description: 'Build comprehensive hospital management platform cho Vietnamese private hospital',
        difficulty: 'Trung bình',
        requirements: ['Database system', 'Web framework', 'Security protocols'],
        procedure: [
          'Design patient registration system với Vietnamese ID integration',
          'Create appointment scheduling với doctor availability',
          'Implement medical record management với privacy controls',
          'Build billing system với Vietnamese insurance integration',
        ],
        expectedResults: 'Complete hospital management system với all essential features',
        solution: 'Full-stack web application với React frontend và Node.js backend',
      },
    ],
    realWorldApplications: [
      'Private hospital digital transformation',
      'Rural healthcare telemedicine solutions',
      'Health insurance technology platforms',
      'Medical research data management',
    ],
    caseStudies: [
      {
        title: 'Vinmec Hospital Digital Transformation',
        organization: 'Vinmec International Hospital',
        problem: 'Streamline patient care và improve efficiency across multiple hospital locations',
        solution: 'Comprehensive digital health platform với integrated EHR và telemedicine',
        impact: '40% reduction in patient wait times, 60% improvement in data accuracy',
        innovations: [
          'AI-powered diagnostic assistance for radiologists',
          'Mobile app for patient engagement and appointment booking',
          'Integrated billing system with Vietnamese health insurance',
        ],
      },
    ],
    resources: [
      {
        title: 'Vietnam Ministry of Health Digital Health Strategy',
        url: 'https://moh.gov.vn/digital-health',
        type: 'health-ministry',
        description: 'Official government digital health policies và guidelines',
      },
    ],
  },
  {
    id: 'ai-medical-imaging',
    title: 'Bài 2: AI Medical Imaging cho Vietnamese Healthcare',
    description:
      'Phát triển AI medical imaging solutions phù hợp với Vietnamese medical practices. Học computer vision cho radiology, pathology và diagnostic assistance.',
    videoUrl: 'https://www.youtube.com/watch?v=aPV3XiczQmI',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop',
    difficulty: 'Nâng cao',
    duration: '200 phút',
    medicalField: 'AI Medical Imaging',
    technologies: ['Computer Vision', 'Deep Learning', 'DICOM processing', 'Medical AI'],
    objectives: [
      'Develop AI diagnostic tools cho Vietnamese radiologists',
      'Create computer vision models cho medical image analysis',
      'Implement AI assistance cho pathology diagnosis',
      'Build medical imaging workflow automation',
    ],
    prerequisites: [
      'Machine learning và computer vision experience',
      'Understanding of medical imaging principles',
      'Python programming với AI libraries',
    ],
    exercises: [
      {
        title: 'Chest X-ray Analysis AI',
        description: 'Build AI system để assist Vietnamese radiologists trong chest X-ray diagnosis',
        difficulty: 'Nâng cao',
        requirements: ['Medical imaging dataset', 'Deep learning framework', 'DICOM tools'],
        procedure: [
          'Collect và preprocess Vietnamese chest X-ray dataset',
          'Train deep learning model cho common pathology detection',
          'Create confidence scoring system cho diagnosis assistance',
          'Build web interface cho radiologist workflow integration',
        ],
        expectedResults: 'AI diagnostic assistant với 90%+ accuracy cho common chest pathologies',
        solution: 'TensorFlow/PyTorch model với Flask/FastAPI web service',
      },
    ],
    realWorldApplications: [
      'Radiology department AI assistance tools',
      'Rural clinic diagnostic support systems',
      'Medical imaging research platforms',
      'Pathology automation solutions',
    ],
    caseStudies: [
      {
        title: 'Bach Mai Hospital AI Radiology Project',
        organization: 'Bach Mai Hospital',
        problem: 'Reduce radiologist workload và improve diagnostic accuracy',
        solution: 'AI-powered chest X-ray analysis system với radiologist workflow integration',
        impact: '30% faster diagnosis, 95% accuracy in pathology detection',
        innovations: [
          'Custom AI model trained on Vietnamese patient data',
          'Integration with existing hospital PACS system',
          'Multi-language interface (Vietnamese/English) for international doctors',
        ],
      },
    ],
    resources: [
      {
        title: 'Vietnamese Medical AI Research Consortium',
        url: 'https://vn-medai.org',
        type: 'research',
        description: 'Collaborative research initiative cho medical AI development',
      },
    ],
  },
];
