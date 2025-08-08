import type { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface BiomedicalEngineeringLesson extends BaseLessonData {
  medicalApplications?: string[];
  regulatoryConsiderations?: string[];
  safetyCriteria?: string[];
  clinicalValidation?: {
    phase: string;
    description: string;
    requirements: string[];
  }[];
}

export const biomedicalEngineeringLessons: BiomedicalEngineeringLesson[] = [
  {
    id: 'medical-device-design',
    title: 'Medical Device Design & Development',
    description:
      'Comprehensive introduction to medical device design principles, từ concept đến clinical implementation. Cover FDA/CE marking requirements, ISO 13485 quality management, và Vietnamese medical device regulations.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    imageUrl:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format',
    objectives: [
      'Understand medical device classification systems và regulatory pathways',
      'Apply design controls và risk management (ISO 14971) trong device development',
      'Implement quality management systems theo ISO 13485 standards',
      'Navigate Vietnamese Ministry of Health approval processes cho medical devices',
      'Design user-centered medical interfaces với human factors considerations',
    ],
    prerequisites: [
      'Basic engineering principles trong mechanical hoặc electrical engineering',
      'Understanding của human anatomy và physiology fundamentals',
      'Knowledge của manufacturing processes và materials science',
      'Familiarity với quality control principles',
    ],
    exercises: [
      {
        title: 'Medical Device Risk Analysis',
        description:
          'Conduct comprehensive risk assessment cho blood pressure monitor design using ISO 14971 methodology',
        difficulty: 'Trung bình',
        materials: [
          'ISO 14971 Risk Management standard',
          'FMEA analysis templates',
          'Medical device databases',
          'Regulatory guidance documents',
        ],
        procedure: [
          'Define intended use và user profiles cho blood pressure monitor',
          'Identify potential hazards và hazardous situations through systematic analysis',
          'Evaluate risk severity, occurrence probability, và detectability ratings',
          'Develop risk mitigation strategies và design controls',
          'Document risk management file theo regulatory requirements',
          'Create post-market surveillance plan cho ongoing risk monitoring',
        ],
        expectedResults:
          'Complete risk management file ready cho regulatory submission',
        solution:
          'Systematic approach identifies 15-20 key risks với appropriate mitigation strategies, demonstrating compliance với international standards',
      },
      {
        title: 'Vietnamese Medical Device Registration',
        description:
          'Navigate Ministry of Health registration process cho innovative medical device',
        difficulty: 'Nâng cao',
        materials: [
          'MOH Circular 30/2015/TT-BYT guidelines',
          'Technical file templates',
          'Clinical evaluation reports',
          'Vietnamese regulatory databases',
        ],
        procedure: [
          'Classify device theo Vietnamese medical device categories',
          'Prepare technical documentation package với Vietnamese translations',
          'Conduct clinical evaluation hoặc clinical investigation requirements',
          'Submit registration dossier qua online portal',
          'Respond to MOH queries và inspection requirements',
          'Obtain Certificate of Free Sale for Vietnamese market',
        ],
        expectedResults:
          'Successful medical device registration approval from Vietnamese MOH',
        solution:
          'Comprehensive dossier preparation with proper classification leads to streamlined approval process within 6-12 months',
      },
    ],
    realWorldApplications: [
      'Vinmec Hospital: Advanced medical device integration trong private healthcare system',
      'Cho Ray Hospital: Implementation của diagnostic imaging systems',
      'Vietnamese medical device startups: Local innovation trong affordable healthcare solutions',
      'International device manufacturers: Market entry strategies cho Vietnamese healthcare sector',
      'Ministry of Health: Regulatory framework development cho emerging medical technologies',
    ],
    medicalApplications: [
      'Diagnostic imaging systems: MRI, CT, ultrasound equipment optimization',
      'Patient monitoring devices: Vital signs, cardiac, neurological monitoring',
      'Therapeutic devices: Surgical instruments, rehabilitation equipment',
      'Implantable devices: Pacemakers, orthopedic implants, drug delivery systems',
      'Point-of-care testing: Rapid diagnostic devices for rural healthcare',
    ],
    regulatoryConsiderations: [
      'FDA 510(k) clearance process for moderate-risk devices',
      'CE marking requirements for European market access',
      'Vietnamese MOH registration through Circular 30/2015/TT-BYT',
      'ISO 13485 quality management system implementation',
      'Clinical investigation requirements và ethical approvals',
    ],
    caseStudies: [
      {
        title: 'Vingroup Medical Technology Development',
        organization: 'Vingroup JSC - VinTech',
        problem:
          'Developing locally-manufactured medical devices để reduce healthcare costs trong Vietnamese hospitals',
        solution:
          'Established comprehensive R&D program với international partnerships, focusing trên diagnostic equipment và patient monitoring systems',
        impact:
          'Successfully launched 5 medical devices với 40% cost reduction compared to imported alternatives, serving 50+ Vietnamese hospitals',
        innovations: [
          'AI-powered diagnostic imaging analysis',
          'Cloud-based patient monitoring systems',
          'Mobile ultrasound devices for rural healthcare',
          'Telemedicine integration platforms',
        ],
      },
      {
        title: 'Cho Ray Hospital Digital Transformation',
        organization: 'Cho Ray Hospital - Leading Medical Center',
        problem:
          'Modernizing hospital infrastructure với integrated medical device systems để improve patient care efficiency',
        solution:
          'Implemented comprehensive digital health platform integrating medical devices, EMR systems, và AI-powered diagnostics',
        impact:
          'Reduced patient wait times by 35%, improved diagnostic accuracy by 28%, enhanced treatment outcomes through data-driven insights',
        innovations: [
          'Real-time patient monitoring dashboards',
          'Predictive analytics for critical care',
          'Automated medication dispensing systems',
          'Integrated surgical navigation systems',
        ],
      },
    ],
    resources: [
      {
        title: 'FDA Medical Device Development Guide',
        url: 'https://www.fda.gov/medical-devices',
        type: 'Regulatory Guidance',
      },
      {
        title: 'ISO 13485 Medical Devices Standard',
        url: 'https://www.iso.org/standard/59752.html',
        type: 'International Standard',
      },
      {
        title: 'Vietnamese Medical Device Regulations',
        url: 'https://moh.gov.vn/web/guest/home',
        type: 'Local Regulation',
      },
    ],
  },
  {
    id: 'biosignal-processing',
    title: 'Biosignal Processing & Medical Imaging',
    description:
      'Advanced techniques for processing biological signals và medical images. Cover ECG, EEG, EMG signal analysis, medical image processing algorithms, và AI applications trong diagnostic imaging.',
    duration: '210 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    imageUrl:
      'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop&auto=format',
    objectives: [
      'Master digital signal processing techniques cho biological signals',
      'Implement medical image analysis algorithms using MATLAB/Python',
      'Apply machine learning models cho automated diagnostics',
      'Develop real-time biosignal monitoring systems',
      'Integrate AI-powered diagnostic tools trong clinical workflows',
    ],
    prerequisites: [
      'Strong foundation trong signal processing và linear algebra',
      'Programming experience trong MATLAB, Python, hoặc similar languages',
      'Basic understanding của human physiology và medical terminology',
      'Knowledge của digital filtering và frequency domain analysis',
    ],
    exercises: [
      {
        title: 'ECG Arrhythmia Detection System',
        description:
          'Build automated arrhythmia detection system using machine learning với real ECG data',
        difficulty: 'Nâng cao',
        materials: [
          'MIT-BIH Arrhythmia Database',
          'Python với scikit-learn, scipy libraries',
          'ECG signal processing algorithms',
          'Machine learning classification models',
        ],
        procedure: [
          'Preprocess ECG signals: filtering, baseline correction, noise removal',
          'Extract features: R-peak detection, heart rate variability, morphological features',
          'Implement classification algorithms: SVM, Random Forest, Neural Networks',
          'Train models trên labeled arrhythmia dataset với cross-validation',
          'Evaluate performance: sensitivity, specificity, accuracy metrics',
          'Deploy real-time detection system với clinical validation',
        ],
        expectedResults:
          'Arrhythmia detection system với >95% accuracy trên standard test datasets',
        solution:
          'Comprehensive approach combining advanced signal processing với machine learning achieves clinical-grade performance for automated cardiac monitoring',
      },
      {
        title: 'Medical Image Segmentation for Brain Tumors',
        description:
          'Develop deep learning model cho automated brain tumor segmentation from MRI images',
        difficulty: 'Nâng cao',
        materials: [
          'BraTS dataset (Brain Tumor Segmentation)',
          'TensorFlow/PyTorch framework',
          'U-Net architecture implementations',
          'Medical image visualization tools',
        ],
        procedure: [
          'Preprocess MRI data: normalization, augmentation, format conversion',
          'Implement U-Net architecture với attention mechanisms',
          'Train segmentation model với multi-class tumor labeling',
          'Apply post-processing techniques: morphological operations, connected components',
          'Validate results với radiologist annotations using Dice coefficient',
          'Create clinical visualization tools cho treatment planning',
        ],
        expectedResults:
          'Brain tumor segmentation model với Dice score >0.85 cho enhancing tumor regions',
        solution:
          'Advanced deep learning approach enables precise tumor boundary detection, supporting clinical decision-making for neurosurgery planning',
      },
    ],
    realWorldApplications: [
      'Bach Mai Hospital: AI-powered diagnostic imaging trong oncology department',
      'FV Hospital: Advanced cardiac monitoring systems với real-time arrhythmia detection',
      'National Hospital of Endocrinology: Automated retinal screening cho diabetic patients',
      'Vietnamese telemedicine platforms: Remote diagnostic capabilities cho rural healthcare',
      'Medical device companies: Integration của AI algorithms trong imaging equipment',
    ],
    medicalApplications: [
      'Cardiac diagnostics: ECG analysis, heart rate variability assessment',
      'Neurological monitoring: EEG analysis, epilepsy detection systems',
      'Medical imaging: CT, MRI, ultrasound image enhancement và analysis',
      'Rehabilitation medicine: EMG-based prosthetic control systems',
      'Emergency medicine: Automated triage systems using vital sign analysis',
    ],
    caseStudies: [
      {
        title: 'Bach Mai Hospital AI Diagnostic Platform',
        organization: 'Bach Mai Hospital - National Medical Center',
        problem:
          'Improving diagnostic accuracy và reducing radiologist workload through automated medical image analysis',
        solution:
          'Implemented comprehensive AI platform với deep learning models cho chest X-ray, CT scan, và MRI analysis',
        impact:
          'Increased diagnostic speed by 60%, improved accuracy by 25%, reduced missed diagnoses by 40% across radiology department',
        innovations: [
          'Multi-modal deep learning architectures',
          'Real-time image quality assessment',
          'Automated report generation systems',
          'Clinical decision support integration',
        ],
      },
      {
        title: 'FV Hospital Cardiac Monitoring Innovation',
        organization: 'Franco-Vietnamese Hospital',
        problem:
          'Implementing advanced cardiac monitoring systems để improve patient outcomes trong intensive care units',
        solution:
          'Deployed AI-powered ECG monitoring với real-time arrhythmia detection và predictive analytics for cardiac events',
        impact:
          'Reduced cardiac arrest incidents by 35%, improved response time by 50%, enhanced patient survival rates in ICU',
        innovations: [
          'Continuous ECG monitoring với ML algorithms',
          'Predictive modeling for cardiac events',
          'Mobile alert systems for medical staff',
          'Integration với electronic health records',
        ],
      },
    ],
    resources: [
      {
        title: 'MATLAB Signal Processing Toolbox',
        url: 'https://www.mathworks.com/products/signal.html',
        type: 'Software Tool',
      },
      {
        title: 'Medical Image Analysis Journal',
        url: 'https://www.journals.elsevier.com/medical-image-analysis',
        type: 'Research Publication',
      },
      {
        title: 'PhysioNet Clinical Databases',
        url: 'https://physionet.org/',
        type: 'Open Dataset',
      },
    ],
  },
  {
    id: 'regenerative-medicine',
    title: 'Regenerative Medicine & Tissue Engineering',
    description:
      'Advanced concepts trong tissue engineering, stem cell technology, và regenerative medicine applications. Cover biomaterials, 3D bioprinting, cell culture techniques, và clinical translation challenges.',
    duration: '240 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    imageUrl:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format',
    objectives: [
      'Understand fundamental principles của tissue engineering và regenerative medicine',
      'Master biomaterial selection và characterization cho tissue scaffolds',
      'Apply stem cell biology principles trong therapeutic applications',
      'Design 3D bioprinting protocols cho tissue construction',
      'Navigate regulatory pathways cho regenerative medicine products',
    ],
    prerequisites: [
      'Strong background trong cell biology và molecular biology',
      'Understanding của materials science và biomaterials properties',
      'Knowledge của human anatomy, physiology, và pathology',
      'Familiarity với sterile cell culture techniques',
    ],
    exercises: [
      {
        title: '3D Bioprinting Laboratory Protocol',
        description:
          'Design và implement 3D bioprinting protocol cho cardiac tissue engineering using stem cells',
        difficulty: 'Nâng cao',
        materials: [
          '3D bioprinter với temperature control',
          'Hydrogel bioinks (alginate, collagen, gelatin)',
          'Cardiac stem cells hoặc iPSCs',
          'Cell culture equipment và reagents',
          'Imaging systems for tissue analysis',
        ],
        procedure: [
          'Prepare bioink formulations với optimized cell density và viability',
          'Design 3D scaffold architecture using CAD software',
          'Calibrate bioprinter parameters: temperature, pressure, speed',
          'Print cardiac tissue constructs với controlled cell placement',
          'Culture printed tissues trong bioreactor systems',
          'Analyze tissue development: viability, differentiation, functionality',
        ],
        expectedResults:
          'Functional cardiac tissue constructs với synchronized beating và proper cell organization',
        solution:
          'Optimized bioprinting parameters enable creation of viable cardiac tissues với >90% cell viability và measurable contractile function',
      },
      {
        title: 'Stem Cell Therapy Development',
        description:
          'Develop mesenchymal stem cell therapy protocol cho orthopedic applications',
        difficulty: 'Nâng cao',
        materials: [
          'Mesenchymal stem cells (bone marrow-derived)',
          'Growth factors và cytokines',
          'Biomaterial carriers (hydrogels, microspheres)',
          'In vitro differentiation assays',
          'Animal model systems',
        ],
        procedure: [
          'Isolate và expand mesenchymal stem cells với quality control',
          'Characterize cell phenotype: surface markers, differentiation potential',
          'Develop controlled release systems cho growth factor delivery',
          'Test osteogenic differentiation trong 3D culture systems',
          'Evaluate therapeutic efficacy trong animal models',
          'Prepare clinical trial protocol với regulatory considerations',
        ],
        expectedResults:
          'Validated stem cell therapy showing enhanced bone regeneration với minimal adverse effects',
        solution:
          'Comprehensive development approach demonstrates therapeutic potential với clear pathway to clinical translation',
      },
    ],
    realWorldApplications: [
      'Vinmec Stem Cell Research Institute: Clinical applications của regenerative medicine',
      'National Hospital of Orthopedics: Bone tissue engineering cho complex fractures',
      'Ho Chi Minh City Medicine University: Research programs trong neural regeneration',
      'Vietnamese pharmaceutical companies: Development của cell therapy products',
      'International collaborations: Technology transfer programs với leading research institutes',
    ],
    medicalApplications: [
      'Cardiovascular medicine: Cardiac patch engineering, vessel regeneration',
      'Orthopedic surgery: Bone, cartilage, và ligament reconstruction',
      'Neurology: Neural tissue repair, spinal cord injury treatment',
      'Dermatology: Skin grafts, wound healing enhancement',
      'Ophthalmology: Corneal regeneration, retinal tissue replacement',
    ],
    regulatoryConsiderations: [
      'FDA RMAT (Regenerative Medicine Advanced Therapy) designation',
      'EMA Advanced Therapy Medicinal Products (ATMP) regulations',
      'Vietnamese Ministry of Health guidelines cho cell therapy products',
      'ICH Q5A guidelines cho biotechnological products',
      'GMP requirements cho cell and gene therapy manufacturing',
    ],
    caseStudies: [
      {
        title: 'Vinmec Stem Cell Institute Success Story',
        organization: 'Vinmec International Hospital',
        problem:
          'Developing autologous stem cell therapies cho Vietnamese patients với degenerative diseases',
        solution:
          'Established comprehensive stem cell program including isolation, expansion, và clinical application protocols',
        impact:
          'Treated 200+ patients với various conditions, achieved 70% improvement rates trong orthopedic applications',
        innovations: [
          'Automated cell processing systems',
          'Quality control protocols cho clinical-grade cells',
          'Minimally invasive delivery techniques',
          'Patient tracking systems for long-term outcomes',
        ],
      },
      {
        title: 'Vietnamese Spinal Cord Injury Research Program',
        organization: 'Ho Chi Minh City Medicine University',
        problem:
          'Addressing limited treatment options cho spinal cord injury patients trong Vietnam',
        solution:
          'Developed neural stem cell therapy program với international collaboration và rigorous clinical protocols',
        impact:
          'Pioneered first clinical trials trong Vietnam, demonstrated safety và preliminary efficacy trong 30 patients',
        innovations: [
          'Neural stem cell differentiation protocols',
          'Biomaterial scaffolds cho spinal cord repair',
          'Rehabilitation integration programs',
          'Outcome assessment tools specific to Vietnamese population',
        ],
      },
    ],
    safetyCriteria: [
      'Sterility và contamination prevention throughout manufacturing',
      'Tumorigenicity testing cho stem cell products',
      'Immunogenicity assessment và adverse reaction monitoring',
      'Biodistribution studies cho cell tracking',
      'Long-term safety follow-up protocols',
    ],
    resources: [
      {
        title: 'International Society for Stem Cell Research Guidelines',
        url: 'https://www.isscr.org/',
        type: 'Professional Guidelines',
      },
      {
        title: 'Tissue Engineering Journal',
        url: 'https://www.liebertpub.com/loi/ten',
        type: 'Research Publication',
      },
      {
        title: 'FDA Regenerative Medicine Guidance',
        url: 'https://www.fda.gov/vaccines-blood-biologics/cellular-gene-therapy-products',
        type: 'Regulatory Guidance',
      },
    ],
  },
  {
    id: 'medical-robotics',
    title: 'Medical Robotics & Surgical Systems',
    description:
      'Comprehensive exploration của medical robotics applications, từ surgical robots đến rehabilitation systems. Cover control systems, haptic feedback, computer vision, và safety considerations trong clinical environments.',
    duration: '195 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    imageUrl:
      'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop&auto=format',
    objectives: [
      'Understand medical robotics systems design và control principles',
      'Master surgical robot kinematics và trajectory planning',
      'Implement computer vision algorithms cho surgical guidance',
      'Design safety systems và fault tolerance trong medical robots',
      'Evaluate clinical outcomes và cost-effectiveness của robotic systems',
    ],
    prerequisites: [
      'Strong foundation trong robotics engineering và control systems',
      'Programming experience trong C++, Python, ROS (Robot Operating System)',
      'Understanding của medical procedures và surgical workflows',
      'Knowledge của computer vision và image processing techniques',
    ],
    exercises: [
      {
        title: 'Surgical Robot Control System',
        description:
          'Design force-feedback control system cho robotic surgical instrument với haptic capabilities',
        difficulty: 'Nâng cao',
        materials: [
          'Robotic manipulator với force sensors',
          'Haptic feedback device',
          'Real-time control software (C++/ROS)',
          'Surgical simulation environment',
          'Safety monitoring systems',
        ],
        procedure: [
          'Model robot kinematics và dynamics cho surgical workspace',
          'Implement position và force control algorithms với safety limits',
          'Develop haptic feedback system cho surgeon tactile sensation',
          'Create collision detection và avoidance mechanisms',
          'Test control performance trong simulated surgical scenarios',
          'Validate safety systems với failure mode analysis',
        ],
        expectedResults:
          'Stable surgical robot control với precise positioning (<1mm accuracy) và realistic force feedback',
        solution:
          'Advanced control algorithms với safety redundancy enable precise surgical manipulation với enhanced surgeon capabilities',
      },
      {
        title: 'Computer Vision for Surgical Navigation',
        description:
          'Develop real-time computer vision system cho surgical instrument tracking và anatomical registration',
        difficulty: 'Nâng cao',
        materials: [
          'Stereo camera systems',
          'OpenCV và PCL libraries',
          'GPU acceleration (CUDA)',
          'Surgical tracking markers',
          'Medical imaging workstation',
        ],
        procedure: [
          'Calibrate stereo camera system cho accurate 3D reconstruction',
          'Implement real-time object tracking algorithms cho surgical instruments',
          'Develop anatomical landmark detection using deep learning',
          'Create 3D registration system với preoperative imaging data',
          'Optimize processing pipeline cho real-time performance (<50ms latency)',
          'Validate tracking accuracy trong surgical simulation environment',
        ],
        expectedResults:
          'Real-time surgical navigation system với <2mm tracking accuracy và robust performance',
        solution:
          'Optimized computer vision pipeline enables precise surgical guidance với minimal latency for enhanced surgical precision',
      },
    ],
    realWorldApplications: [
      'Cho Ray Hospital: Implementation của da Vinci surgical system',
      'FV Hospital: Robotic orthopedic surgery capabilities',
      'Vietnam National Heart Institute: Cardiac surgery robotics program',
      'Rehabilitation centers: Robot-assisted therapy systems',
      'Medical device companies: Local development của surgical robotics',
    ],
    medicalApplications: [
      'Minimally invasive surgery: Laparoscopic, thoracoscopic procedures',
      'Neurosurgery: Stereotactic surgery, brain tumor removal',
      'Orthopedic surgery: Joint replacement, spine surgery',
      'Cardiac surgery: Valve repair, bypass procedures',
      'Rehabilitation robotics: Gait training, upper limb therapy',
    ],
    safetyCriteria: [
      'Redundant safety systems và emergency stop mechanisms',
      'Real-time monitoring của robot workspace và patient safety',
      'Fail-safe control algorithms với graceful degradation',
      'Sterile design considerations cho operating room environments',
      'Comprehensive testing protocols cho clinical validation',
    ],
    caseStudies: [
      {
        title: 'Cho Ray Hospital Robotic Surgery Program',
        organization: 'Cho Ray Hospital - Leading Medical Center',
        problem:
          'Implementing advanced robotic surgery capabilities để improve patient outcomes và reduce recovery times',
        solution:
          'Deployed da Vinci surgical system với comprehensive training program cho surgical teams và patient selection protocols',
        impact:
          'Performed 500+ robotic procedures với 30% reduction trong recovery time, 50% decrease trong complications compared to traditional surgery',
        innovations: [
          'Minimally invasive surgical techniques',
          'Enhanced 3D visualization systems',
          'Precise instrument control capabilities',
          'Reduced surgeon fatigue và improved ergonomics',
        ],
      },
      {
        title: 'Vietnam National Rehabilitation Innovation',
        organization: 'National Rehabilitation Hospital',
        problem:
          'Improving rehabilitation outcomes cho stroke patients và spinal cord injury patients',
        solution:
          'Implemented robot-assisted gait training systems và upper limb rehabilitation robots với personalized therapy protocols',
        impact:
          'Enhanced recovery rates by 40%, improved patient motivation, reduced therapist workload while maintaining therapy quality',
        innovations: [
          'Adaptive control algorithms for patient-specific therapy',
          'Real-time biofeedback systems',
          'Virtual reality integration cho engaging therapy',
          'Progress tracking và outcome measurement tools',
        ],
      },
    ],
    resources: [
      {
        title: 'IEEE Robotics and Automation in Medical Applications',
        url: 'https://www.ieee-ras.org/',
        type: 'Professional Society',
      },
      {
        title: 'International Journal of Medical Robotics',
        url: 'https://onlinelibrary.wiley.com/journal/1478596x',
        type: 'Research Publication',
      },
      {
        title: 'FDA Robotics Medical Device Guidance',
        url: 'https://www.fda.gov/medical-devices',
        type: 'Regulatory Guidance',
      },
    ],
  },
];
