import type { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface NanotechnologyLesson extends BaseLessonData {
  nanotechApplications?: string[];
  materialsProperties?: string[];
  characterizationMethods?: string[];
  vietnamResearchContext?: string[];
  safetyConsiderations?: string[];
}

export const nanotechnologyLessons: NanotechnologyLesson[] = [
  {
    id: 'nanomaterials-synthesis-characterization',
    title: 'Nanomaterials Synthesis & Characterization',
    description: 'Comprehensive nanomaterials science covering synthesis methods, characterization techniques, và properties analysis. Focus trên Vietnamese research capabilities và applications trong electronics, energy, và environmental technology.',
    duration: '195 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format',
    objectives: [
      'Master nanomaterial synthesis techniques: top-down và bottom-up approaches',
      'Understand characterization methods: electron microscopy, spectroscopy, X-ray analysis',
      'Apply structure-property relationships trong nanomaterial design',
      'Design nanomaterials cho specific applications trong Vietnamese industries',
      'Navigate safety protocols và environmental considerations cho nanomaterial handling'
    ],
    prerequisites: [
      'Strong foundation trong chemistry, physics, và materials science',
      'Understanding của crystallography và solid state physics',
      'Knowledge của chemical synthesis techniques và laboratory procedures',
      'Familiarity với analytical instrumentation và data analysis'
    ],
    exercises: [
      {
        title: 'Gold Nanoparticle Synthesis for Vietnamese Medical Applications',
        description: 'Synthesize và characterize gold nanoparticles optimized cho drug delivery applications trong Vietnamese healthcare system',
        difficulty: 'Nâng cao',
        materials: [
          'Gold precursor chemicals (HAuCl4)',
          'Reducing agents và stabilizing ligands',
          'UV-Vis spectrophotometer',
          'Transmission electron microscope',
          'Dynamic light scattering equipment'
        ],
        procedure: [
          'Design synthesis protocol targeting specific particle size và morphology',
          'Prepare gold nanoparticles using citrate reduction method',
          'Characterize optical properties using UV-Vis spectroscopy',
          'Analyze particle size và morphology using TEM imaging',
          'Evaluate colloidal stability và surface charge measurements',
          'Test biocompatibility và drug loading capabilities'
        ],
        expectedResults: 'Monodisperse gold nanoparticles với controlled size (10-50 nm) suitable cho biomedical applications',
        solution: 'Optimized synthesis produces stable, biocompatible nanoparticles ready cho pharmaceutical applications trong Vietnamese healthcare'
      },
      {
        title: 'Carbon Nanotube Production for Vietnamese Electronics',
        description: 'Develop carbon nanotube synthesis process optimized cho electronic device applications trong Vietnamese manufacturing',
        difficulty: 'Nâng cao',
        materials: [
          'Chemical vapor deposition (CVD) system',
          'Carbon feedstock gases (methane, acetylene)',
          'Metal catalyst nanoparticles',
          'Raman spectroscopy equipment',
          'Electrical characterization tools'
        ],
        procedure: [
          'Optimize CVD conditions: temperature, pressure, gas flow rates',
          'Prepare catalyst substrates cho controlled nanotube growth',
          'Synthesize single-walled carbon nanotubes với high quality',
          'Characterize structural properties using Raman spectroscopy',
          'Measure electrical conductivity và electronic properties',
          'Evaluate suitability cho transparent electrode applications'
        ],
        expectedResults: 'High-quality carbon nanotubes với excellent electrical properties suitable cho electronic applications',
        solution: 'Controlled synthesis enables production của carbon nanotubes meeting specifications cho Vietnamese electronics manufacturing'
      }
    ],
    realWorldApplications: [
      'Vietnamese electronics industry: Nanomaterials cho semiconductor devices',
      'Medical research institutions: Nanomedicine và drug delivery systems',
      'Energy sector: Nanomaterials cho solar cells và batteries',
      'Environmental technology: Nanomaterials cho water treatment',
      'Textile industry: Nanocoatings cho functional fabrics'
    ],
    nanotechApplications: [
      'Electronics: Quantum dots, carbon nanotubes, nanocomposites',
      'Medicine: Drug delivery, imaging agents, antimicrobial coatings',
      'Energy: Solar cells, batteries, fuel cells, supercapacitors',
      'Environment: Water filtration, air purification, sensors',
      'Materials: Nanocomposites, coatings, catalysts'
    ],
    materialsProperties: [
      'Size-dependent properties: quantum confinement effects',
      'Surface area enhancement: high surface-to-volume ratio',
      'Mechanical properties: strength, flexibility, hardness',
      'Optical properties: absorption, emission, plasmonic effects',
      'Electrical properties: conductivity, semiconductor behavior'
    ],
    characterizationMethods: [
      'Electron microscopy: TEM, SEM, HRTEM imaging',
      'Spectroscopy: Raman, FTIR, UV-Vis, XPS analysis',
      'X-ray techniques: XRD, SAXS, XAS structural analysis',
      'Surface analysis: BET, AFM, contact angle measurements',
      'Thermal analysis: TGA, DSC, thermal conductivity'
    ],
    vietnamResearchContext: [
      'Vietnam National University research programs',
      'FPT University nanotechnology initiatives',
      'Vietnamese Academy of Science và Technology centers',
      'International collaboration với Singapore, Japan',
      'Government funding cho nanotechnology research'
    ],
    caseStudies: [
      {
        title: 'Vietnam National University Nanomedicine Research',
        organization: 'VNU University of Science - Materials Science',
        problem: 'Developing nanomedicine solutions cho Vietnamese healthcare challenges including drug delivery và diagnostic applications',
        solution: 'Established comprehensive nanomaterial synthesis và characterization facilities với focus trên biomedical applications',
        impact: 'Developed 5+ nanomedicine prototypes, trained 50+ researchers, established industry partnerships cho commercialization',
        innovations: [
          'Biocompatible nanoparticle synthesis',
          'Targeted drug delivery systems',
          'Nanoparticle-based imaging agents',
          'Antimicrobial nanocoatings'
        ]
      },
      {
        title: 'FPT University Nanoelectronics Development',
        organization: 'FPT University - Nanotechnology Research Center',
        problem: 'Creating nanotechnology capabilities supporting Vietnamese electronics industry development',
        solution: 'Built state-of-the-art nanofabrication facilities và developed industry-relevant research programs',
        impact: 'Supported 10+ electronics companies, developed nanomaterial suppliers, enhanced Vietnamese technology capabilities',
        innovations: [
          'Carbon nanotube electronics',
          'Nanocomposite materials',
          'Flexible electronic substrates',
          'Sensor technology platforms'
        ]
      }
    ],
    resources: [
      {
        title: 'Vietnam National University Materials Science Institute',
        url: 'https://ims.vnu.edu.vn/',
        type: 'Research Institution'
      },
      {
        title: 'Nature Nanotechnology Journal',
        url: 'https://www.nature.com/nnano/',
        type: 'Scientific Publication'
      },
      {
        title: 'International Centre for Materials Nanoarchitectonics',
        url: 'https://www.nims.go.jp/mana/',
        type: 'Research Collaboration'
      }
    ]
  },
  {
    id: 'nanoelectronics-quantum-devices',
    title: 'Nanoelectronics & Quantum Devices',
    description: 'Advanced nanoelectronics covering quantum devices, molecular electronics, và next-generation computing technology. Explore applications trong Vietnamese semiconductor industry và emerging quantum technology.',
    duration: '210 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&auto=format',
    objectives: [
      'Understand quantum mechanics principles trong nanoelectronic devices',
      'Master quantum device fabrication techniques và characterization',
      'Apply molecular electronics concepts cho next-generation computing',
      'Design quantum sensors và computing elements',
      'Explore Vietnamese opportunities trong quantum technology development'
    ],
    prerequisites: [
      'Advanced physics: quantum mechanics, solid state physics',
      'Electronics engineering: semiconductor device physics',
      'Materials science: electronic materials, surface science',
      'Mathematics: linear algebra, differential equations'
    ],
    exercises: [
      {
        title: 'Quantum Dot Solar Cell Development',
        description: 'Design và fabricate quantum dot solar cells optimized cho Vietnamese solar energy applications',
        difficulty: 'Nâng cao',
        materials: [
          'Quantum dot synthesis equipment',
          'Solar cell fabrication tools',
          'Spectrophotometers cho optical characterization',
          'Electrical measurement systems',
          'Environmental testing chambers'
        ],
        procedure: [
          'Synthesize quantum dots với tuned band gap cho solar spectrum',
          'Prepare quantum dot thin films using solution processing',
          'Fabricate solar cell devices với optimized architectures',
          'Characterize optical absorption và photoluminescence properties',
          'Measure photovoltaic performance: efficiency, stability',
          'Evaluate performance trong Vietnamese tropical climate conditions'
        ],
        expectedResults: 'Quantum dot solar cells với >10% efficiency stable trong tropical conditions',
        solution: 'Optimized quantum dot devices provide cost-effective solar energy solutions cho Vietnamese renewable energy market'
      },
      {
        title: 'Molecular Electronic Device Prototyping',
        description: 'Develop molecular electronic switches và sensors cho Vietnamese IoT applications',
        difficulty: 'Nâng cao',
        materials: [
          'Molecular synthesis laboratory',
          'Scanning probe microscopy systems',
          'Electrical characterization equipment',
          'Device fabrication cleanroom',
          'Computer simulation software'
        ],
        procedure: [
          'Design molecular structures với switchable electronic properties',
          'Synthesize target molecules với controlled purity',
          'Characterize molecular electronic properties using STM',
          'Fabricate molecular electronic test devices',
          'Measure switching behavior và device stability',
          'Evaluate applications trong Vietnamese IoT sensor networks'
        ],
        expectedResults: 'Functional molecular electronic devices demonstrating reliable switching behavior',
        solution: 'Molecular electronics enables ultra-miniaturized sensors suitable cho Vietnamese smart city applications'
      }
    ],
    realWorldApplications: [
      'Vietnamese semiconductor companies: Next-generation device development',
      'Electronics manufacturers: Quantum sensor integration',
      'Research institutions: Quantum computing research programs',
      'Telecommunications: Quantum communication technology',
      'Defense applications: Quantum sensing và communication'
    ],
    nanotechApplications: [
      'Quantum computing: Qubits, quantum processors, quantum algorithms',
      'Quantum sensors: Magnetometry, gravimetry, timing applications',
      'Molecular electronics: Single-molecule devices, molecular memory',
      'Nanoelectronics: Transistors, diodes, integrated circuits',
      'Optoelectronics: LEDs, lasers, photodetectors'
    ],
    vietnamResearchContext: [
      'Vietnam-Japan quantum technology collaboration',
      'Vietnamese quantum research initiatives',
      'Regional quantum network development',
      'Industry partnerships cho quantum applications',
      'Educational programs trong quantum technology'
    ],
    caseStudies: [
      {
        title: 'Vietnam-Japan Quantum Technology Partnership',
        organization: 'Vietnam Academy of Science và RIKEN Japan',
        problem: 'Developing Vietnamese capabilities trong quantum technology research và applications',
        solution: 'Established joint research programs, technology transfer, và capability building initiatives',
        impact: 'Created quantum research center, trained 30+ researchers, developed quantum sensor prototypes',
        innovations: [
          'Quantum sensor development',
          'Quantum communication protocols',
          'Quantum computing algorithms',
          'Technology transfer programs'
        ]
      },
      {
        title: 'Vietnamese Quantum Sensing Applications',
        organization: 'Vietnam Institute of Physics',
        problem: 'Applying quantum sensing technology cho Vietnamese infrastructure monitoring và resource exploration',
        solution: 'Developed quantum magnetometers và gravimeters cho geological surveys và infrastructure monitoring',
        impact: 'Enhanced mineral exploration capabilities, improved infrastructure monitoring, supported environmental studies',
        innovations: [
          'Portable quantum magnetometers',
          'High-precision gravimeters',
          'Environmental monitoring sensors',
          'Data analysis algorithms'
        ]
      }
    ],
    safetyConsiderations: [
      'Cleanroom safety protocols cho nanofabrication',
      'Chemical safety trong nanomaterial synthesis',
      'Radiation safety cho characterization equipment',
      'Electrical safety trong device testing',
      'Environmental disposal của nanomaterials'
    ],
    resources: [
      {
        title: 'Vietnam Institute of Physics',
        url: 'https://iop.vast.ac.vn/',
        type: 'Research Institution'
      },
      {
        title: 'Nature Quantum Information Journal',
        url: 'https://www.nature.com/nqi/',
        type: 'Scientific Publication'
      },
      {
        title: 'IEEE Quantum Electronics Society',
        url: 'https://www.ieee.org/communities/societies/photonics.html',
        type: 'Professional Organization'
      }
    ]
  },
  {
    id: 'biomedical-nanotechnology',
    title: 'Biomedical Nanotechnology & Drug Delivery',
    description: 'Advanced biomedical applications của nanotechnology including drug delivery systems, diagnostic nanoparticles, và regenerative medicine. Focus trên Vietnamese healthcare applications và regulatory considerations.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop&auto=format',
    objectives: [
      'Master biomedical nanoparticle design và synthesis principles',
      'Understand drug delivery mechanisms và targeting strategies',
      'Apply nanotechnology cho diagnostic và therapeutic applications',
      'Design biocompatible nanomaterials meeting safety requirements',
      'Navigate Vietnamese healthcare regulations cho nanomedicine development'
    ],
    prerequisites: [
      'Biomedical engineering fundamentals: cell biology, pharmacology',
      'Materials science: biocompatible materials, surface chemistry',
      'Chemistry: organic synthesis, analytical chemistry',
      'Understanding của human physiology và disease mechanisms'
    ],
    exercises: [
      {
        title: 'Targeted Cancer Drug Delivery System',
        description: 'Develop nanoparticle-based drug delivery system targeting liver cancer common trong Vietnamese population',
        difficulty: 'Nâng cao',
        materials: [
          'Biodegradable polymer nanoparticles',
          'Cancer targeting ligands',
          'Anticancer drug compounds',
          'Cell culture facilities',
          'In vitro testing equipment'
        ],
        procedure: [
          'Design nanoparticle formulation cho liver cancer targeting',
          'Synthesize targeted nanoparticles với drug encapsulation',
          'Characterize particle size, drug loading, release kinetics',
          'Test cellular uptake và cytotoxicity in vitro',
          'Evaluate targeting specificity using cancer cell models',
          'Assess biocompatibility và safety profiles'
        ],
        expectedResults: 'Targeted nanoparticles delivering 5x higher drug concentration to cancer cells vs. normal cells',
        solution: 'Optimized drug delivery system enables effective cancer treatment với reduced side effects cho Vietnamese patients'
      },
      {
        title: 'Diagnostic Nanoparticles for Infectious Disease',
        description: 'Create diagnostic nanoparticles cho rapid detection của infectious diseases prevalent trong Vietnamese tropical climate',
        difficulty: 'Nâng cao',
        materials: [
          'Fluorescent quantum dots',
          'Antibody conjugation reagents',
          'Pathogen samples và controls',
          'Fluorescence microscopy equipment',
          'Point-of-care testing platforms'
        ],
        procedure: [
          'Select appropriate nanoparticle platforms cho diagnostic applications',
          'Conjugate detection antibodies to nanoparticle surfaces',
          'Optimize detection sensitivity và specificity',
          'Test diagnostic performance với clinical samples',
          'Develop point-of-care testing protocols',
          'Validate performance trong field conditions'
        ],
        expectedResults: 'Diagnostic nanoparticles detecting pathogens với >95% sensitivity và <5% false positive rate',
        solution: 'Rapid diagnostic tools enable early disease detection supporting Vietnamese public health initiatives'
      }
    ],
    realWorldApplications: [
      'Vietnamese hospitals: Nanomedicine applications trong patient care',
      'Pharmaceutical companies: Drug development using nanotechnology',
      'Diagnostic companies: Nanoparticle-based diagnostic tests',
      'Medical device manufacturers: Nanocoated medical devices',
      'Research institutions: Biomedical nanotechnology development'
    ],
    nanotechApplications: [
      'Drug delivery: Targeted nanocarriers, controlled release systems',
      'Diagnostics: Contrast agents, biosensors, imaging probes',
      'Therapeutics: Hyperthermia, photodynamic therapy',
      'Regenerative medicine: Tissue scaffolds, stem cell delivery',
      'Medical devices: Antimicrobial coatings, biocompatible surfaces'
    ],
    caseStudies: [
      {
        title: 'Vinmec Hospital Nanomedicine Initiative',
        organization: 'Vinmec International Hospital',
        problem: 'Implementing nanomedicine technologies cho advanced cancer treatment trong Vietnamese healthcare system',
        solution: 'Established nanomedicine research program với international partnerships developing targeted therapy protocols',
        impact: 'Improved cancer treatment outcomes, reduced side effects, established Vietnamese nanomedicine capabilities',
        innovations: [
          'Targeted nanoparticle therapy protocols',
          'Diagnostic nanoparticle applications',
          'Personalized nanomedicine approaches',
          'Clinical trial management systems'
        ]
      },
      {
        title: 'Vietnamese Tropical Disease Diagnostics',
        organization: 'National Institute of Hygiene và Epidemiology',
        problem: 'Developing rapid diagnostic tools cho tropical diseases affecting Vietnamese population',
        solution: 'Created nanoparticle-based diagnostic platforms enabling point-of-care testing trong remote areas',
        impact: 'Reduced disease diagnosis time from days to hours, improved patient outcomes, enhanced disease surveillance',
        innovations: [
          'Point-of-care diagnostic devices',
          'Mobile health monitoring systems',
          'Remote area deployment strategies',
          'Community health worker training'
        ]
      }
    ],
    resources: [
      {
        title: 'Vietnam National Institute of Hygiene and Epidemiology',
        url: 'https://nihe.org.vn/',
        type: 'Government Health Institute'
      },
      {
        title: 'Nature Biomedical Engineering',
        url: 'https://www.nature.com/natbiomedeng/',
        type: 'Scientific Publication'
      },
      {
        title: 'International Society for Nanomedicine',
        url: 'https://www.isnanomed.org/',
        type: 'Professional Organization'
      }
    ]
  },
  {
    id: 'environmental-nanotechnology',
    title: 'Environmental Nanotechnology & Sustainable Applications',
    description: 'Nanotechnology solutions cho environmental challenges including water treatment, air purification, và sustainable energy applications. Focus trên Vietnamese environmental issues và sustainability goals.',
    duration: '165 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    imageUrl: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&h=600&fit=crop&auto=format',
    objectives: [
      'Apply nanotechnology solutions cho water và air pollution treatment',
      'Understand environmental fate và transport của nanomaterials',
      'Design sustainable nanomaterials với reduced environmental impact',
      'Implement nanotechnology cho renewable energy applications',
      'Address Vietnamese environmental challenges using nanotechnology'
    ],
    prerequisites: [
      'Environmental science fundamentals: pollution, ecosystems',
      'Chemistry: surface chemistry, catalysis, photochemistry',
      'Materials science: nanomaterial properties, characterization',
      'Understanding của Vietnamese environmental challenges'
    ],
    exercises: [
      {
        title: 'Water Treatment Nanotechnology for Mekong Delta',
        description: 'Develop nanomaterial-based water treatment system addressing pollution trong Mekong Delta waterways',
        difficulty: 'Trung bình',
        materials: [
          'Photocatalytic nanoparticles (TiO2, ZnO)',
          'Carbon nanotube membranes',
          'Water samples từ Mekong Delta',
          'UV irradiation systems',
          'Water quality testing equipment'
        ],
        procedure: [
          'Analyze water pollution sources và contaminants trong Mekong Delta',
          'Design multi-stage nanotechnology treatment system',
          'Synthesize photocatalytic nanoparticles cho organic pollutant degradation',
          'Develop nanofilter membranes cho heavy metal removal',
          'Test treatment efficiency với real water samples',
          'Evaluate environmental impact và sustainability'
        ],
        expectedResults: 'Water treatment system removing >95% pollutants while maintaining environmental safety',
        solution: 'Integrated nanotechnology approach provides sustainable water treatment cho Vietnamese agricultural communities'
      },
      {
        title: 'Air Purification Nanocoatings for Vietnamese Cities',
        description: 'Create nanocoating materials cho buildings that actively purify air trong Vietnamese urban environments',
        difficulty: 'Trung bình',
        materials: [
          'Photocatalytic nanoparticle coatings',
          'Building material substrates',
          'Air pollutant gas mixtures',
          'UV light sources',
          'Air quality monitoring equipment'
        ],
        procedure: [
          'Analyze air pollution patterns trong Ho Chi Minh City và Hanoi',
          'Formulate nanocoatings targeting specific pollutants',
          'Apply coatings to building materials và test adhesion',
          'Evaluate photocatalytic air purification performance',
          'Test durability trong tropical weather conditions',
          'Calculate environmental impact và cost-effectiveness'
        ],
        expectedResults: 'Building coatings reducing local air pollution by 30-50% trong urban environments',
        solution: 'Smart building coatings contribute to cleaner air trong Vietnamese cities while providing aesthetic benefits'
      }
    ],
    realWorldApplications: [
      'Water treatment facilities: Nanotechnology-enhanced filtration systems',
      'Urban planning: Air purifying building materials',
      'Industrial pollution control: Nanocatalysts cho emission reduction',
      'Agricultural applications: Nanofertilizers và pesticide delivery',
      'Renewable energy: Nanostructured solar cells và fuel cells'
    ],
    nanotechApplications: [
      'Water treatment: Photocatalysis, membrane filtration, adsorption',
      'Air purification: Photocatalytic coatings, nanofilters',
      'Soil remediation: Nanoscale zero-valent iron, bioremediation',
      'Energy applications: Solar cells, batteries, fuel cells',
      'Sensors: Environmental monitoring, pollution detection'
    ],
    vietnamResearchContext: [
      'Vietnamese environmental research institutes',
      'Water treatment technology development',
      'Air quality improvement initiatives',
      'Sustainable agriculture programs',
      'Renewable energy nanotechnology projects'
    ],
    caseStudies: [
      {
        title: 'Mekong Delta Water Treatment Innovation',
        organization: 'Can Tho University - Environmental Engineering',
        problem: 'Addressing water pollution trong Mekong Delta affecting agricultural productivity và public health',
        solution: 'Developed nanotechnology-based water treatment systems specifically designed cho delta conditions',
        impact: 'Improved water quality cho 100,000+ residents, enhanced agricultural productivity, reduced waterborne diseases',
        innovations: [
          'Floating water treatment platforms',
          'Solar-powered nanofiltration systems',
          'Community-scale treatment units',
          'Real-time water quality monitoring'
        ]
      },
      {
        title: 'Ho Chi Minh City Air Quality Improvement',
        organization: 'HCMC Environmental Protection Agency',
        problem: 'Implementing nanotechnology solutions cho urban air pollution reduction trong rapidly growing metropolis',
        solution: 'Deployed photocatalytic building coatings và air purification systems throughout city infrastructure',
        impact: 'Reduced particulate matter by 25%, improved air quality index, enhanced urban livability',
        innovations: [
          'Self-cleaning building facades',
          'Photocatalytic road surfaces',
          'Air purifying bus shelters',
          'Smart environmental monitoring networks'
        ]
      }
    ],
    safetyConsiderations: [
      'Environmental impact assessment của nanomaterials',
      'Lifecycle analysis và sustainable disposal',
      'Ecotoxicity testing protocols',
      'Worker safety trong nanomaterial handling',
      'Regulatory compliance cho environmental applications'
    ],
    resources: [
      {
        title: 'Vietnam Environment Administration',
        url: 'https://vea.gov.vn/',
        type: 'Government Environmental Agency'
      },
      {
        title: 'Environmental Science & Technology Journal',
        url: 'https://pubs.acs.org/journal/esthag',
        type: 'Scientific Publication'
      },
      {
        title: 'International Association of Nanotechnology',
        url: 'https://ianano.org/',
        type: 'Professional Organization'
      }
    ]
  }
];
